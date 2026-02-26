import type { ZodiacElement, ZodiacAnimal } from '@/types'

// ============================================
// SHOPIFY STOREFRONT API TYPES
// ============================================

export interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface ShopifyVariant {
  id: string           // Storefront API global ID
  title: string        // e.g. "Small / Black"
  price: string        // e.g. "29.99"
  currencyCode: string // e.g. "USD"
  available: boolean
  selectedOptions: { name: string; value: string }[]
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  tags: string[]
  images: ShopifyImage[]
  variants: ShopifyVariant[]
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string }
    maxVariantPrice: { amount: string; currencyCode: string }
  }
}

// ============================================
// APP-LEVEL MERCH TYPES
// ============================================

export interface MerchProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  price: number
  compareAtPrice: number | null
  currency: string
  image: ShopifyImage | null
  images: ShopifyImage[]
  tags: string[]
  variants: ShopifyVariant[]
  element: ZodiacElement | null
  animal: ZodiacAnimal | null
  productType: MerchProductType | null
}

export type MerchProductType = 't-shirt' | 'hoodie' | 'mug' | 'pin' | 'poster' | 'tote' | 'phone-case'

export interface CartItem {
  variantId: string
  productId: string
  title: string
  variantTitle: string
  price: number
  currency: string
  quantity: number
  image: ShopifyImage | null
  handle: string
}

export interface CartState {
  items: CartItem[]
  checkoutUrl: string | null
}

// ============================================
// FILTER & DISPLAY
// ============================================

export type MerchFilterElement = ZodiacElement | 'all'

export interface MerchCollection {
  handle: string
  title: string
  description: string
}
