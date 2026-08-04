import imgSJB from '@/assets/images/menu/shanghai-crispy-soup-bao.webp'
import imgXLB from '@/assets/images/menu/pork-soup-dumplings.webp'
import imgPotstickers from '@/assets/images/menu/crispy-beef-potstickers.webp'
import imgChiliOil from '@/assets/images/menu/beef-dumplings-chili-oil.webp'
import imgChips from '@/assets/images/menu/zs-wild-chips.webp'
import imgDrinks from '@/assets/images/menu/bottled-drinks.webp'
import imgVegBao from '@/assets/images/menu/vegetarian-bao.webp'
import imgKettleChips from '@/assets/images/menu/kettle-chips.webp'
import type { MenuContent } from '@/types/menu'

export const IMAGE_MAP: Record<string, string> = {
  'crispy-pork-soup-bao': imgSJB,
  'pork-soup-dumplings': imgXLB,
  'beef-potstickers': imgPotstickers,
  'beef-chili-oil': imgChiliOil,
  'vegetarian-bao': imgVegBao,
  'wild-chips': imgChips,
  'kettle-chips': imgKettleChips,
  drinks: imgDrinks,
}

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
      imageKey: 'crispy-pork-soup-bao', badge: 'Most Ordered', active: true, soldOut: false,
    },
    {
      id: 'pork-soup-dumplings', section: 'dumpling', sortOrder: 20,
      name: 'Pork Soup Dumplings',
      description: 'Six delicate steamed pork xiao long bao soup dumplings filled with rich broth. Thin skin, maximum soup — handle with care.',
      imageKey: 'pork-soup-dumplings', active: true, soldOut: false,
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
      imageKey: 'beef-chili-oil', active: true, soldOut: false,
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
      imageKey: 'wild-chips', active: true, soldOut: false,
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
      imageKey: 'drinks', active: true, soldOut: false,
    },
  ],
}

export function getMenuImage(item: { imageUrl?: string; imageKey?: string }): string {
  return item.imageUrl?.trim() || (item.imageKey ? IMAGE_MAP[item.imageKey] : '') || ''
}
