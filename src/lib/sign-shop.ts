// ============================================
// SIGN SHOP — Template-based product generator
// Mines each zodiac sign's content to produce
// personalized Amazon affiliate product listings.
// ============================================

import type { SignContent, AffiliateProduct, ShopCategory, ZodiacElement } from '@/types'

// ============================================
// INTERNAL HELPERS
// ============================================

/**
 * Build an Amazon search URL with the affiliate tag baked in.
 */
function buildSearchUrl(query: string): string {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}`
}

/**
 * Capitalize the first letter of a string.
 */
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Maps element values to display-ready capitalized names and icons.
const ELEMENT_META: Record<ZodiacElement, { label: string; icon: string }> = {
  wood:  { label: 'Wood',  icon: '🌳' },
  fire:  { label: 'Fire',  icon: '🔥' },
  earth: { label: 'Earth', icon: '⛰️' },
  metal: { label: 'Metal', icon: '⚔️' },
  water: { label: 'Water', icon: '🌊' },
}

// Known exercise keywords → product mapping.
// The key is a lowercase substring to match against the exercise string.
const EXERCISE_MAP: { match: string; name: string; search: string }[] = [
  { match: 'interval',   name: 'HIIT Timer & Equipment',        search: 'HIIT workout equipment' },
  { match: 'hiit',       name: 'HIIT Timer & Equipment',        search: 'HIIT workout equipment' },
  { match: 'martial',    name: 'Martial Arts Equipment',         search: 'martial arts training equipment' },
  { match: 'swim',       name: 'Swimming Gear',                  search: 'swimming goggles set' },
  { match: 'yoga',       name: 'Yoga Mat & Props',               search: 'yoga mat props set' },
  { match: 'tai chi',    name: 'Tai Chi Instructional DVD',      search: 'tai chi instructional DVD beginner' },
  { match: 'tai-chi',    name: 'Tai Chi Instructional DVD',      search: 'tai chi instructional DVD beginner' },
  { match: 'qigong',     name: 'Qigong Instructional DVD',       search: 'qigong instructional DVD beginner' },
  { match: 'run',        name: 'Running Gear Set',               search: 'running shoes gear set' },
  { match: 'cycling',    name: 'Cycling Gear',                   search: 'cycling gear helmet lights' },
  { match: 'pilates',    name: 'Pilates Mat & Equipment',        search: 'pilates mat equipment set' },
  { match: 'stretch',    name: 'Stretching & Flexibility Kit',   search: 'stretching flexibility kit' },
  { match: 'meditat',    name: 'Meditation Cushion & Guide',     search: 'meditation cushion set guide' },
  { match: 'breath',     name: 'Breathwork & Mindfulness Kit',   search: 'breathwork mindfulness kit' },
  { match: 'hike',       name: 'Hiking Gear Essentials',         search: 'hiking gear essentials' },
  { match: 'danc',       name: 'Dance Workout Video Set',        search: 'dance workout DVD set' },
  { match: 'weight',     name: 'Weight Training Starter Set',    search: 'weight training starter set' },
  { match: 'strength',   name: 'Strength Training Equipment',    search: 'strength training equipment home' },
]

/**
 * Resolve an exercise string to a product name and Amazon search query.
 * Falls back to extracting the first meaningful word from the exercise string.
 */
function resolveExercise(exercise: string): { name: string; search: string } {
  const lower = exercise.toLowerCase()

  for (const mapping of EXERCISE_MAP) {
    if (lower.includes(mapping.match)) {
      return { name: mapping.name, search: mapping.search }
    }
  }

  // Fallback: use the first word that is longer than 3 characters.
  const words = exercise.split(/\s+/)
  const firstWord = words.find((w) => w.length > 3) ?? words[0] ?? exercise

  const word = capitalize(firstWord)
  return {
    name:   `${word} Fitness Equipment`,
    search: `${word} fitness equipment`,
  }
}

// ============================================
// CATEGORY BUILDERS
// ============================================

/**
 * "Your Lucky Gemstones" — 2 products per gemstone.
 */
function buildGemstonesCategory(content: SignContent): ShopCategory {
  const { slug, profile, lucky } = content
  const signName = profile.name
  const elementLabel = capitalize(profile.element)
  const products: AffiliateProduct[] = []

  lucky.gemstones.forEach((gem, i) => {
    const gemLabel = capitalize(gem)

    // Product 1: crystal bracelet
    products.push({
      id:          `shop-${slug}-crystals-${i * 2}`,
      name:        `${gemLabel} Crystal Bracelet`,
      description: `Natural ${gemLabel} — a lucky stone for ${signName} signs. Associated with the ${elementLabel} element.`,
      url:         buildSearchUrl(`${gem} crystal bracelet natural`),
      program:     'amazon',
      category:    'crystals',
    })

    // Product 2: pendant necklace
    products.push({
      id:          `shop-${slug}-crystals-${i * 2 + 1}`,
      name:        `${gemLabel} Pendant Necklace`,
      description: `Natural ${gemLabel} — a lucky stone for ${signName} signs. Associated with the ${elementLabel} element.`,
      url:         buildSearchUrl(`${gem} pendant necklace`),
      program:     'amazon',
      category:    'crystals',
    })
  })

  return { title: 'Your Lucky Gemstones', icon: '💎', products }
}

/**
 * "Your Lucky Colors" — 2 products per color.
 */
function buildColorsCategory(content: SignContent): ShopCategory {
  const { slug, profile, lucky } = content
  const signName = profile.name
  const products: AffiliateProduct[] = []

  lucky.colors.forEach((color, i) => {
    const colorLabel = capitalize(color)

    // Product 1: feng shui candle
    products.push({
      id:          `shop-${slug}-colors-${i * 2}`,
      name:        `${colorLabel} Feng Shui Candle`,
      description: `Lucky ${colorLabel} — one of the auspicious colors for ${signName}.`,
      url:         buildSearchUrl(`${color} feng shui candle`),
      program:     'amazon',
      category:    'colors',
    })

    // Product 2: home decor accent
    products.push({
      id:          `shop-${slug}-colors-${i * 2 + 1}`,
      name:        `${colorLabel} Home Decor`,
      description: `Lucky ${colorLabel} — one of the auspicious colors for ${signName}.`,
      url:         buildSearchUrl(`${color} home decor accent`),
      program:     'amazon',
      category:    'colors',
    })
  })

  return { title: 'Your Lucky Colors', icon: '🎨', products }
}

/**
 * "Garden & Botanicals" — 2 products per lucky flower.
 */
function buildBotanicalsCategory(content: SignContent): ShopCategory {
  const { slug, profile, lucky } = content
  const signName = profile.name
  const products: AffiliateProduct[] = []

  lucky.flowers.forEach((flower, i) => {
    const flowerLabel = capitalize(flower)

    // Product 1: essential oil
    products.push({
      id:          `shop-${slug}-botanicals-${i * 2}`,
      name:        `${flowerLabel} Essential Oil`,
      description: `The ${flowerLabel} resonates with ${signName} energy. Grow your own or enjoy its essence.`,
      url:         buildSearchUrl(`${flower} essential oil pure`),
      program:     'amazon',
      category:    'botanicals',
    })

    // Product 2: seeds for planting
    products.push({
      id:          `shop-${slug}-botanicals-${i * 2 + 1}`,
      name:        `${flowerLabel} Seeds`,
      description: `The ${flowerLabel} resonates with ${signName} energy. Grow your own or enjoy its essence.`,
      url:         buildSearchUrl(`${flower} seeds for planting`),
      program:     'amazon',
      category:    'botanicals',
    })
  })

  return { title: 'Garden & Botanicals', icon: '🌿', products }
}

/**
 * "Wellness & Fitness" — 1 product per exercise (first 3 exercises only).
 */
function buildFitnessCategory(content: SignContent): ShopCategory {
  const { slug, profile, health } = content
  const signName = profile.name
  const elementLabel = capitalize(profile.element)

  // Only take the first 3 exercises.
  const exercises = health.exercises.slice(0, 3)
  const products: AffiliateProduct[] = exercises.map((exercise, i) => {
    const { name, search } = resolveExercise(exercise)

    return {
      id:          `shop-${slug}-fitness-${i}`,
      name,
      description: `Recommended for ${signName} — ${exercise} supports your ${elementLabel} element vitality.`,
      url:         buildSearchUrl(search),
      program:     'amazon',
      category:    'fitness',
    }
  })

  return { title: 'Wellness & Fitness', icon: '🏃', products }
}

/**
 * "Career & Growth" — 1 guidebook product per ideal career (first 3 only).
 */
function buildCareerCategory(content: SignContent): ShopCategory {
  const { slug, profile, career } = content
  const signName = profile.name

  // Only take the first 3 ideal careers.
  const careers = career.idealCareers.slice(0, 3)
  const products: AffiliateProduct[] = careers.map((c, i) => ({
    id:          `shop-${slug}-career-books-${i}`,
    name:        `${c} Guide Book`,
    description: `${c} is an ideal path for ${signName}. Explore resources to advance your career.`,
    url:         buildSearchUrl(`${c} guide book`),
    program:     'amazon',
    category:    'career-books',
  }))

  return { title: 'Career & Growth', icon: '📚', products }
}

/**
 * "{Element} Element Essentials" — 3 fixed products based on the sign's element.
 */
function buildElementCategory(content: SignContent): ShopCategory {
  const { slug, profile } = content
  const element = profile.element
  const meta = ELEMENT_META[element]
  const elementLabel = meta.label
  const signName = profile.name

  const products: AffiliateProduct[] = [
    {
      id:          `shop-${slug}-element-0`,
      name:        `${elementLabel} Element Meditation Set`,
      description: `Embrace the ${elementLabel} element that defines your ${signName} identity.`,
      url:         buildSearchUrl(`${element} element meditation crystal set`),
      program:     'amazon',
      category:    'element',
    },
    {
      id:          `shop-${slug}-element-1`,
      name:        `${elementLabel} Element Tea Collection`,
      description: `Embrace the ${elementLabel} element that defines your ${signName} identity.`,
      url:         buildSearchUrl(`${element} element tea set chinese`),
      program:     'amazon',
      category:    'element',
    },
    {
      id:          `shop-${slug}-element-2`,
      name:        `${elementLabel} Zodiac Wall Art`,
      description: `Embrace the ${elementLabel} element that defines your ${signName} identity.`,
      url:         buildSearchUrl(`chinese zodiac ${element} element wall art`),
      program:     'amazon',
      category:    'element',
    },
  ]

  return { title: `${elementLabel} Element Essentials`, icon: meta.icon, products }
}

// ============================================
// PUBLIC API
// ============================================

/**
 * Generate the full shop product listing for a sign.
 * Returns an ordered array of ShopCategory objects, each containing
 * personalized Amazon affiliate products mined from the sign's content.
 */
export function generateShopProducts(content: SignContent): ShopCategory[] {
  return [
    buildGemstonesCategory(content),
    buildColorsCategory(content),
    buildBotanicalsCategory(content),
    buildFitnessCategory(content),
    buildCareerCategory(content),
    buildElementCategory(content),
  ]
}
