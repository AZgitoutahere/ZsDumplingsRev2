import type { MenuContent } from '@/types/menu'

// Automatically discover every WebP image in the menu image folder.
// The Google Sheets image_key must match the filename without ".webp".
// Example:
//   image_key: shrimp-chili-oil
//   file: src/assets/images/menu/shrimp-chili-oil.webp
const menuImageModules = import.meta.glob('../assets/images/menu/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const IMAGE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(menuImageModules).map(([path, url]) => {
    const filename = path.split('/').pop() || ''
    const imageKey = filename.replace(/\.webp$/i, '')
    return [imageKey, url]
  }),
)

export const FALLBACK_MENU: MenuContent = {
  settings: {
    entreePrice: 11,
    comboPrice: 16,
    chipsPrice: 3,
    drinksPrice: 4,
    comboDescription: 'Includes one dumpling order, your choice of chips, and a drink.',
    drinksDescription: 'Refreshing drinks to complete your meal.',
    drinksOptions: 'Homemade Strawberry, Mango, Lychee, and Plain Lemonade',
    menuNotice: 'Bao made fresh daily. Menu subject to availability. Follow us on Instagram for daily specials.',
    allergenNotice: 'Dumplings contain sesame oil and chili oil. Chips contain sesame and peanuts.',
  },
  items: [
    {
      id: 'crispy-pork-soup-bao', section: 'dumpling', sortOrder: 10,
      name: 'Crispy Pork Soup Bao',
      description: 'Four pan-fried sheng jian bao with seasoned pork filling. Crispy golden bottom, pillowy top, and a burst of savory broth in every bite.',
      imageKey: 'shanghai-crispy-soup-bao', badge: 'Most Ordered', active: true, soldOut: false,
    },
    {
      id: 'pork-soup-dumplings', section: 'dumpling', sortOrder: 20,
      name: 'Pork Soup Dumplings',
      description: 'Six delicate steamed pork xiao long bao soup dumplings filled with rich broth. Thin skin, maximum soup — handle with care.',
      imageKey: 'pork-soup-dumpling', active: true, soldOut: false,
    },
    {
      id: 'beef-potstickers', section: 'dumpling', sortOrder: 30,
      name: 'Crispy Beef Pot Stickers',
      description: 'Eight hand-folded beef dumplings, pan-fried with a crispy skirt that adds a delicate crunch to every bite.',
      imageKey: 'beef-potstickers', active: true, soldOut: false,
    },
    {
      id: 'beef-chili-oil', section: 'dumpling', sortOrder: 40,
      name: 'Beef Dumplings with Chili Oil',
      description: 'Eight boiled beef dumplings tossed in our house chili oil with garlic and sesame. Bold and unapologetic.',
      imageKey: 'beef-dumplings-chili-oil', active: true, soldOut: false,
    },
    {
      id: 'vegetarian-bao', section: 'dumpling', sortOrder: 50,
      name: 'Vegetarian Bao',
      description: 'Three mushroom and vegetable steamed bao with delicate seasonings.',
      imageKey: 'vegetarian-bao', active: true, soldOut: false,
    },
    {
      id: 'wild-chips', section: 'chip', sortOrder: 10,
      name: "Z's Wild Chips",
      description: 'Our house specialty spiced potato chips. The tingling heat could be addictive.',
      imageKey: 'zs-wild-chips', active: true, soldOut: false,
    },
    {
      id: 'kettle-chips', section: 'chip', sortOrder: 20,
      name: 'Kettle Chips',
      description: 'Classic crunchy kettle chips, salted to perfection.',
      imageKey: 'kettle-chips', active: true, soldOut: false,
    },
    {
      id: 'drinks', section: 'drink', sortOrder: 10,
      name: 'Drinks', description: 'Refreshing drinks to complete your meal.',
      imageKey: 'bottled-drinks', active: true, soldOut: false,
    },
  ],
}

export function getMenuImage(item: { imageUrl?: string; imageKey?: string }): string {
  const imageUrl = item.imageUrl?.trim()
  if (imageUrl) return imageUrl

  const imageKey = item.imageKey?.trim()
  if (!imageKey) return ''

  return IMAGE_MAP[imageKey] || ''
}
