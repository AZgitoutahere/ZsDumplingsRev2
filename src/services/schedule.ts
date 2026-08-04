import type { DisplayScheduleEvent, Location, ScheduleEvent, ScheduleStatus } from '@/types/schedule'

const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID?.trim()
const LOCATIONS_TAB = import.meta.env.VITE_GOOGLE_LOCATIONS_TAB?.trim() || 'Locations'
const SCHEDULE_TAB = import.meta.env.VITE_GOOGLE_SCHEDULE_TAB?.trim() || 'Schedule'

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

async function fetchTab(tab: string): Promise<string> {
  if (!SHEET_ID) throw new Error('VITE_GOOGLE_SHEET_ID is not configured')
  const url = `https://docs.google.com/spreadsheets/d/${encodeURIComponent(SHEET_ID)}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`
  const response = await fetch(url)
  if (!response.ok) throw new Error(`Google Sheet request failed (${response.status})`)
  return response.text()
}

function parseLocations(text: string): Location[] {
  return csvToObjects(text).map((row, index) => ({
    id: row.location_id || row.id || `location-${index + 1}`,
    name: row.location_name || row.name || '',
    street: row.street || '',
    city: row.city || '',
    state: row.state || '',
    zip: row.zip || '',
    mapsUrl: row.maps_url || undefined,
    active: bool(row.active, true),
  })).filter(location => location.id && location.name && location.active)
}

function validStatus(value: string): ScheduleStatus {
  const normalized = value.toLowerCase()
  if (normalized === 'cancelled' || normalized === 'sold_out') return normalized
  return 'scheduled'
}

function parseEvents(text: string): ScheduleEvent[] {
  return csvToObjects(text).map((row, index) => ({
    id: row.event_id || row.id || `event-${index + 1}`,
    date: row.date || '',
    startTime: row.start_time || '',
    endTime: row.end_time || '',
    locationId: row.location_id || '',
    status: validStatus(row.status || 'scheduled'),
    publicNote: row.public_note || undefined,
    active: bool(row.active, true),
  })).filter(event => event.date && event.locationId && event.active)
}

function localDate(date: string): Date {
  return new Date(`${date}T12:00:00`)
}

function formatDate(date: string): string {
  const parsed = localDate(date)
  if (Number.isNaN(parsed.getTime())) return date
  return new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(parsed)
}

function formatTime(time: string): string {
  if (!time) return ''
  const [hourText, minuteText = '0'] = time.split(':')
  const hour = Number(hourText)
  const minute = Number(minuteText)
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return time
  const suffix = hour >= 12 ? 'pm' : 'am'
  const displayHour = hour % 12 || 12
  return `${displayHour}${minute ? `:${String(minute).padStart(2, '0')}` : ''}${suffix}`
}

export async function loadScheduleFromGoogleSheets(): Promise<DisplayScheduleEvent[]> {
  if (!SHEET_ID) return []
  const [locationsText, scheduleText] = await Promise.all([fetchTab(LOCATIONS_TAB), fetchTab(SCHEDULE_TAB)])
  const locations = new Map(parseLocations(locationsText).map(location => [location.id, location]))
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return parseEvents(scheduleText)
    .filter(event => localDate(event.date) >= today)
    .sort((a, b) => `${a.date} ${a.startTime}`.localeCompare(`${b.date} ${b.startTime}`))
    .map(event => {
      const location = locations.get(event.locationId)
      if (!location) return null
      const address = [location.street, location.city, location.state, location.zip].filter(Boolean).join(', ').replace(', ' + location.state + ',', ', ' + location.state)
      const query = [location.name, address].filter(Boolean).join(', ')
      return {
        ...event,
        location,
        dateLabel: formatDate(event.date),
        timeLabel: [formatTime(event.startTime), formatTime(event.endTime)].filter(Boolean).join(' – '),
        address,
        mapsUrl: location.mapsUrl || `https://maps.google.com/?q=${encodeURIComponent(query)}`,
      }
    })
    .filter((event): event is DisplayScheduleEvent => event !== null)
}
