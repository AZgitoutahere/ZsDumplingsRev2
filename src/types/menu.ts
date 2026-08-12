export type MenuSection = 'dumpling' | 'chip' | 'drink'

export interface MenuItem {
  id: string
  section: MenuSection
  sortOrder: number
  name: string
  description: string
  imageKey?: string
  imageUrl?: string
  badge?: string
  active: boolean
  soldOut: boolean
}

export interface MenuSettings {
  entreePrice: number | null
  comboPrice: number | null
  chipsPrice: number | null
  drinksPrice: number | null
  comboDescription: string
  drinksDescription: string
  drinksOptions: string
  menuNotice: string
  allergenNotice: string
}

export interface MenuContent {
  items: MenuItem[]
  settings: MenuSettings
}
