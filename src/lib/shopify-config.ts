// ============================================
// SHOPIFY STOREFRONT CONFIGURATION
// ============================================
// Tagging strategy for hands-off merch management:
//
//   In your Shopify store, tag each product with:
//     - Sign slug:  fire-horse, water-rat, etc.
//     - Element:    element:fire, element:water, etc.
//     - Animal:     animal:horse, animal:rat, etc.
//     - Type:       type:t-shirt, type:hoodie, type:mug, etc.
//
//   Products appear automatically on matching sign/element/animal pages.
//   Adding new merch = create product in Shopify + add tags → done.
// ============================================

import type { ZodiacElement, ZodiacAnimal, MerchProduct } from '@/types'

/** Shopify Storefront API endpoint (set via env vars) */
export const SHOPIFY_STORE_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || ''
export const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || ''

/** Whether the Shopify integration is configured */
export function isShopifyConfigured(): boolean {
  return !!(SHOPIFY_STORE_DOMAIN && SHOPIFY_STOREFRONT_TOKEN)
}

/** Product type display labels */
export const PRODUCT_TYPE_LABELS: Record<string, string> = {
  't-shirt': 'T-Shirts',
  'hoodie': 'Hoodies',
  'mug': 'Mugs',
  'poster': 'Posters',
  'sticker': 'Stickers',
  'tote-bag': 'Tote Bags',
}

/** Element display metadata for shop filters */
export const ELEMENT_LABELS: Record<ZodiacElement, { label: string; icon: string }> = {
  wood:  { label: 'Wood',  icon: '🌳' },
  fire:  { label: 'Fire',  icon: '🔥' },
  earth: { label: 'Earth', icon: '⛰️' },
  metal: { label: 'Metal', icon: '⚔️' },
  water: { label: 'Water', icon: '🌊' },
}

/** Animal display labels for shop filters */
export const ANIMAL_LABELS: Record<ZodiacAnimal, string> = {
  rat: 'Rat', ox: 'Ox', tiger: 'Tiger', rabbit: 'Rabbit',
  dragon: 'Dragon', snake: 'Snake', horse: 'Horse', goat: 'Goat',
  monkey: 'Monkey', rooster: 'Rooster', dog: 'Dog', pig: 'Pig',
}

// ============================================
// TAG PARSING
// ============================================

const VALID_ELEMENTS = new Set<string>(['wood', 'fire', 'earth', 'metal', 'water'])
const VALID_ANIMALS = new Set<string>([
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
])

/** All 60 valid sign slugs */
const VALID_SLUGS = new Set<string>(
  Array.from(VALID_ELEMENTS).flatMap(e =>
    Array.from(VALID_ANIMALS).map(a => `${e}-${a}`)
  )
)

/**
 * Parse Shopify product tags to extract sign/element/animal metadata.
 * Supports both:
 *   - Direct slug tags: "fire-horse"
 *   - Prefixed tags: "element:fire", "animal:horse"
 */
export function parseProductTags(tags: string[]): {
  signSlug: string | null
  element: string | null
  animal: string | null
} {
  let signSlug: string | null = null
  let element: string | null = null
  let animal: string | null = null

  for (const tag of tags) {
    const lower = tag.toLowerCase().trim()

    // Check for direct slug match (e.g. "fire-horse")
    if (VALID_SLUGS.has(lower)) {
      signSlug = lower
      const parts = lower.split('-')
      element = parts[0] ?? null
      animal = parts[1] ?? null
      continue
    }

    // Check for prefixed tags
    if (lower.startsWith('element:')) {
      const val = lower.slice(8)
      if (VALID_ELEMENTS.has(val)) element = val
    } else if (lower.startsWith('animal:')) {
      const val = lower.slice(7)
      if (VALID_ANIMALS.has(val)) animal = val
    }
  }

  // If we have element + animal but no slug, build it
  if (!signSlug && element && animal) {
    const candidate = `${element}-${animal}`
    if (VALID_SLUGS.has(candidate)) signSlug = candidate
  }

  return { signSlug, element, animal }
}

/**
 * Extract product type from tags (e.g. "type:t-shirt")
 */
export function parseProductType(tags: string[]): string | null {
  for (const tag of tags) {
    const lower = tag.toLowerCase().trim()
    if (lower.startsWith('type:')) {
      return lower.slice(5)
    }
  }
  return null
}

/**
 * Filter products for a specific sign slug.
 */
export function filterProductsBySign(products: MerchProduct[], slug: string): MerchProduct[] {
  return products.filter(p => p.signSlug === slug)
}

/**
 * Filter products by element.
 */
export function filterProductsByElement(products: MerchProduct[], element: string): MerchProduct[] {
  return products.filter(p => p.element === element)
}

/**
 * Filter products by animal.
 */
export function filterProductsByAnimal(products: MerchProduct[], animal: string): MerchProduct[] {
  return products.filter(p => p.animal === animal)
}
