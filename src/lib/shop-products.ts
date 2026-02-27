// ============================================
// SHOP PRODUCTS — Wu Xing Zodiac Merch Catalog
// ============================================
// Programmatically generates product listings for all 60 element+animal
// sign combinations. Products link to a Fourthwall store.
// fourthwallUrl is empty until products go live on Fourthwall.

import { signProfiles } from '@/lib/sign-content/profiles'
import type { ZodiacElement, ZodiacAnimal } from '@/types'

// ============================================
// FOURTHWALL PRODUCT URLs
// ============================================
// Add the product URL from your Fourthwall dashboard as you publish each product.
// Key format: {signSlug}-{productType}  (e.g. 'fire-dragon-tee')
// Product page: https://wuxing-shop.fourthwall.com → copy URL from published product.

const FOURTHWALL_URLS: Record<string, string> = {
  // MVP: 5 Element Tees (1 per element)
  // 'wood-tiger-tee': 'https://wuxing-shop.fourthwall.com/USD/product/...',
  // 'fire-dragon-tee': 'https://wuxing-shop.fourthwall.com/USD/product/...',
  // 'earth-ox-tee': 'https://wuxing-shop.fourthwall.com/USD/product/...',
  // 'metal-horse-tee': 'https://wuxing-shop.fourthwall.com/USD/product/...',
  // 'water-snake-tee': 'https://wuxing-shop.fourthwall.com/USD/product/...',
}

// ============================================
// TYPES
// ============================================

export type ProductType = 'tee' | 'hoodie' | 'mug' | 'poster' | 'tote'

export interface ShopProduct {
  slug: string
  signSlug: string
  title: string
  description: string
  price: number
  image: string
  element: ZodiacElement
  animal: ZodiacAnimal
  fourthwallUrl: string
  type: ProductType
}

// ============================================
// PRODUCT TYPE SPECS
// ============================================
// Adding a new product type: add one entry here.
// The generator will automatically produce products for all 60 signs.

interface ProductTypeSpec {
  type: ProductType
  label: string
  price: number
  titleSuffix: string
}

const PRODUCT_TYPE_SPECS: ProductTypeSpec[] = [
  { type: 'tee',    label: 'T-Shirt',      price: 29.99, titleSuffix: 'Element Tee' },
  { type: 'hoodie', label: 'Hoodie',        price: 49.99, titleSuffix: 'Element Hoodie' },
  { type: 'mug',    label: 'Mug',           price: 19.99, titleSuffix: 'Element Mug' },
  { type: 'poster', label: 'Poster',        price: 24.99, titleSuffix: 'Element Poster' },
  { type: 'tote',   label: 'Tote Bag',      price: 22.99, titleSuffix: 'Element Tote' },
]

// ============================================
// ELEMENT DESCRIPTIONS
// ============================================

const ELEMENT_DESCRIPTIONS: Record<ZodiacElement, string> = {
  wood:  'Embrace the living energy of the Wood element — growth, flexibility, and creative force.',
  fire:  'Channel the blazing spirit of the Fire element — passion, courage, and dynamic power.',
  earth: 'Ground yourself in the Earth element — stability, nurturing strength, and enduring wisdom.',
  metal: 'Refine your spirit with the Metal element — precision, resilience, and decisive clarity.',
  water: 'Flow with the Water element — deep intuition, adaptability, and quiet power.',
}

// ============================================
// PRODUCT GENERATION
// ============================================
// MVP: generates only 'tee' type products (60 products).
// To expand to all types, change the filter below to include all specs.

const MVP_TYPES: ProductType[] = ['tee']

export const allProducts: ShopProduct[] = signProfiles.flatMap((profile) =>
  PRODUCT_TYPE_SPECS
    .filter((spec) => MVP_TYPES.includes(spec.type))
    .map((spec): ShopProduct => ({
      slug:         `${profile.slug}-${spec.type}`,
      signSlug:     profile.slug,
      title:        `${profile.name} ${spec.titleSuffix}`,
      description:  ELEMENT_DESCRIPTIONS[profile.element],
      price:        spec.price,
      image:        `/og/${profile.slug}.png`,
      element:      profile.element,
      animal:       profile.animal,
      fourthwallUrl: FOURTHWALL_URLS[`${profile.slug}-${spec.type}`] ?? '',
      type:         spec.type,
    }))
)

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Returns all products for a given sign slug (e.g. 'fire-horse').
 */
export function getProductsForSign(signSlug: string): ShopProduct[] {
  return allProducts.filter((p) => p.signSlug === signSlug)
}

/**
 * Returns all products for a given element, or all products if 'all'.
 */
export function getProductsByElement(element: ZodiacElement | 'all'): ShopProduct[] {
  if (element === 'all') return allProducts
  return allProducts.filter((p) => p.element === element)
}

/**
 * Returns true if a product has a live Fourthwall URL.
 */
export function isProductLive(product: ShopProduct): boolean {
  return product.fourthwallUrl.trim().length > 0
}
