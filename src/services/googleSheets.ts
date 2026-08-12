import { FALLBACK_MENU } from '@/data/menu'
import type { MenuContent, MenuItem, MenuSection, MenuSettings } from '@/types/menu'

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID?.trim()
const MENU_TAB = import.meta.env.VITE_GOOGLE_MENU_TAB?.trim() || 'Menu_Items'
const SETTINGS_TAB = import.meta.env.VITE_GOOGLE_SETTINGS_TAB?.trim() || 'Site_Settings'

function parseCsv(text: string): string[][] {
  const rows: string[][] = []
  let row: string[] = []
  let value = ''
  let quoted = false

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]
    if (char === '"' && quoted && next === '"') {
      value += '"'
      i += 1
    } else if (char === '"') {
      quoted = !quoted
    } else if (char === ',' && !quoted) {
      row.push(value)
      value = ''
    } else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && next === '\n') i += 1
      row.push(value)
      if (row.some(cell => cell.trim() !== '')) rows.push(row)
      row = []
      value = ''
    } else {
      value += char
    }
  }
  row.push(value)
  if (row.some(cell => cell.trim() !== '')) rows.push(row)
  return rows
}

function csvToObjects(text: string): Record<string, string>[] {
  const rows = parseCsv(text)
  if (rows.length < 2) return []
  const headers = rows[0].map(header => header.trim().toLowerCase())
  return rows.slice(1).map(row => Object.fromEntries(headers.map((header, index) => [header, (row[index] || '').trim()])))
}

function bool(value: string, fallback = false): boolean {
  if (!value) return fallback
  return ['true', 'yes', '1', 'y'].includes(value.toLowerCase())
}

function number(value: string, fallback: number): number {
  const parsed = Number(value.replace(/[$,]/g, ''))
  return Number.isFinite(parsed) ? parsed : fallback
}

function optionalPrice(value: string | undefined): number | null {
  const trimmed = value?.trim() || ''
  if (!trimmed) return null
  const parsed = Number(trimmed.replace(/[$,]/g, ''))
  return Number.isFinite(parsed) ? parsed : null
}

function validSection(value: string): value is MenuSection {
  return value === 'dumpling' || value === 'chip' || value === 'drink'
}

async function fetchTab(tab: string): Promise<string> {
  if (!SHEET_ID) throw new Error('VITE_GOOGLE_SHEET_ID is not configured')
  const url = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(SHEET_ID)}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Google Sheet request failed (${response.status})`)
  return response.text()
}

function parseItems(text: string): MenuItem[] {
  return csvToObjects(text)
    .map((row, index): MenuItem | null => {
      const section = row.section?.toLowerCase()
      if (!validSection(section) || !row.name) return null
      return {
        id: row.item_id || row.id || `${section}-${index + 1}`,
        section,
        sortOrder: number(row.sort_order, (index + 1) * 10),
        name: row.name,
        description: row.description || row.desc || '',
        imageKey: row.image_key || undefined,
        imageUrl: row.image_url || undefined,
        badge: row.badge || undefined,
        active: bool(row.active, true),
        soldOut: bool(row.sold_out, false),
      }
    })
    .filter((item): item is MenuItem => item !== null && item.active)
    .sort((a, b) => a.sortOrder - b.sortOrder)
}

function parseSettings(text: string): MenuSettings {
  const values = Object.fromEntries(csvToObjects(text).map(row => [row.key?.trim(), row.value?.trim()]))
  const fallback = FALLBACK_MENU.settings
  return {
    entreePrice: optionalPrice(values.entree_price),
    comboPrice: optionalPrice(values.combo_price),
    chipsPrice: optionalPrice(values.chips_price),
    drinksPrice: optionalPrice(values.drinks_price),
    comboDescription: values.combo_description || fallback.comboDescription,
    drinksDescription: values.drinks_description || fallback.drinksDescription,
    drinksOptions: values.drinks_options || fallback.drinksOptions,
    menuNotice: values.menu_notice || fallback.menuNotice,
    allergenNotice: values.allergen_notice || fallback.allergenNotice,
  }
}

export async function loadMenuFromGoogleSheets(): Promise<MenuContent> {
  if (!SHEET_ID) return FALLBACK_MENU
  const [itemsText, settingsText] = await Promise.all([fetchTab(MENU_TAB), fetchTab(SETTINGS_TAB)])
  const items = parseItems(itemsText)
  if (items.length === 0) throw new Error('No active menu items were found in Google Sheets')
  return { items, settings: parseSettings(settingsText) }
}
