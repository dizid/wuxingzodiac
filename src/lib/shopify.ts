import type { ShopifyProduct, ShopifyImage, ShopifyVariant, MerchProduct, MerchProductType } from '@/types/merch'
import type { ZodiacElement, ZodiacAnimal } from '@/types'

// ============================================
// SHOPIFY STOREFRONT API CLIENT
// ============================================

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || ''
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || ''

function getStorefrontUrl(): string {
  return `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`
}

async function shopifyFetch<T>(query: string, variables: Record<string, unknown> = {}): Promise<T> {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    throw new Error('Shopify credentials not configured')
  }

  const res = await fetch(getStorefrontUrl(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status}`)
  }

  const json = await res.json()

  if (json.errors?.length) {
    throw new Error(`Shopify GraphQL error: ${json.errors[0].message}`)
  }

  return json.data
}

// ============================================
// PRODUCT QUERIES
// ============================================

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    description
    descriptionHtml
    tags
    priceRange {
      minVariantPrice { amount currencyCode }
      maxVariantPrice { amount currencyCode }
    }
    images(first: 5) {
      edges {
        node {
          url
          altText
          width
          height
        }
      }
    }
    variants(first: 20) {
      edges {
        node {
          id
          title
          price { amount currencyCode }
          availableForSale
          selectedOptions { name value }
        }
      }
    }
  }
`

function mapShopifyProduct(product: Record<string, unknown>): ShopifyProduct {
  const p = product as Record<string, unknown>
  const imagesEdges = ((p.images as Record<string, unknown>)?.edges as Array<{ node: Record<string, unknown> }>) || []
  const variantsEdges = ((p.variants as Record<string, unknown>)?.edges as Array<{ node: Record<string, unknown> }>) || []
  const priceRange = p.priceRange as Record<string, Record<string, string>>

  return {
    id: p.id as string,
    handle: p.handle as string,
    title: p.title as string,
    description: p.description as string,
    descriptionHtml: p.descriptionHtml as string,
    tags: p.tags as string[],
    priceRange: {
      minVariantPrice: priceRange.minVariantPrice,
      maxVariantPrice: priceRange.maxVariantPrice,
    },
    images: imagesEdges.map(e => e.node as unknown as ShopifyImage),
    variants: variantsEdges.map(e => {
      const v = e.node as Record<string, unknown>
      const price = v.price as Record<string, string>
      return {
        id: v.id as string,
        title: v.title as string,
        price: price.amount,
        currencyCode: price.currencyCode,
        available: v.availableForSale as boolean,
        selectedOptions: v.selectedOptions as { name: string; value: string }[],
      } as ShopifyVariant
    }),
  }
}

/** Fetch products by tag (e.g. 'element:fire', 'animal:horse', 'fire-horse') */
export async function fetchProductsByTag(tag: string, first = 20): Promise<ShopifyProduct[]> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query ProductsByTag($query: String!, $first: Int!) {
      products(first: $first, query: $query, sortKey: BEST_SELLING) {
        edges { node { ...ProductFields } }
      }
    }
  `

  const data = await shopifyFetch<{ products: { edges: Array<{ node: Record<string, unknown> }> } }>(
    query,
    { query: `tag:${tag}`, first },
  )

  return data.products.edges.map(e => mapShopifyProduct(e.node))
}

/** Fetch products from a named collection */
export async function fetchProductsByCollection(collectionHandle: string, first = 20): Promise<ShopifyProduct[]> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query CollectionProducts($handle: String!, $first: Int!) {
      collection(handle: $handle) {
        products(first: $first, sortKey: BEST_SELLING) {
          edges { node { ...ProductFields } }
        }
      }
    }
  `

  const data = await shopifyFetch<{ collection: { products: { edges: Array<{ node: Record<string, unknown> }> } } | null }>(
    query,
    { handle: collectionHandle, first },
  )

  if (!data.collection) return []
  return data.collection.products.edges.map(e => mapShopifyProduct(e.node))
}

/** Fetch all products (for the main shop page) */
export async function fetchAllProducts(first = 50): Promise<ShopifyProduct[]> {
  const query = `
    ${PRODUCT_FRAGMENT}
    query AllProducts($first: Int!) {
      products(first: $first, sortKey: BEST_SELLING) {
        edges { node { ...ProductFields } }
      }
    }
  `

  const data = await shopifyFetch<{ products: { edges: Array<{ node: Record<string, unknown> }> } }>(
    query,
    { first },
  )

  return data.products.edges.map(e => mapShopifyProduct(e.node))
}

// ============================================
// CHECKOUT
// ============================================

interface CheckoutLineItem {
  variantId: string
  quantity: number
}

export async function createCheckout(lineItems: CheckoutLineItem[]): Promise<string> {
  const query = `
    mutation CheckoutCreate($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
        checkout { webUrl }
        checkoutUserErrors { message field }
      }
    }
  `

  const data = await shopifyFetch<{
    checkoutCreate: {
      checkout: { webUrl: string } | null
      checkoutUserErrors: Array<{ message: string; field: string[] }>
    }
  }>(query, {
    input: { lineItems },
  })

  if (data.checkoutCreate.checkoutUserErrors.length > 0) {
    throw new Error(data.checkoutCreate.checkoutUserErrors[0].message)
  }

  if (!data.checkoutCreate.checkout) {
    throw new Error('Failed to create checkout')
  }

  return data.checkoutCreate.checkout.webUrl
}

// ============================================
// PRODUCT TRANSFORMATION
// ============================================

const VALID_ELEMENTS: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']
const PRODUCT_TYPE_MAP: Record<string, MerchProductType> = {
  't-shirt': 't-shirt',
  'tee': 't-shirt',
  'hoodie': 'hoodie',
  'mug': 'mug',
  'pin': 'pin',
  'poster': 'poster',
  'tote': 'tote',
  'phone-case': 'phone-case',
}

/** Extract element from product tags (e.g. 'element:fire' → 'fire') */
function extractElement(tags: string[]): ZodiacElement | null {
  for (const tag of tags) {
    if (tag.startsWith('element:')) {
      const el = tag.replace('element:', '') as ZodiacElement
      if (VALID_ELEMENTS.includes(el)) return el
    }
  }
  return null
}

/** Extract animal from product tags (e.g. 'animal:horse' → 'horse') */
function extractAnimal(tags: string[]): ZodiacAnimal | null {
  const animalTag = tags.find(t => t.startsWith('animal:'))
  return animalTag ? (animalTag.replace('animal:', '') as ZodiacAnimal) : null
}

/** Extract product type from tags (e.g. 'type:t-shirt') */
function extractProductType(tags: string[]): MerchProductType | null {
  for (const tag of tags) {
    if (tag.startsWith('type:')) {
      const type = tag.replace('type:', '')
      if (type in PRODUCT_TYPE_MAP) return PRODUCT_TYPE_MAP[type]
    }
  }
  return null
}

/** Transform a Shopify product into our app-level MerchProduct */
export function toMerchProduct(product: ShopifyProduct): MerchProduct {
  const firstVariant = product.variants[0]

  return {
    id: product.id,
    handle: product.handle,
    title: product.title,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    price: parseFloat(product.priceRange.minVariantPrice.amount),
    compareAtPrice: null,
    currency: product.priceRange.minVariantPrice.currencyCode,
    image: product.images[0] || null,
    images: product.images,
    tags: product.tags,
    variants: product.variants,
    element: extractElement(product.tags),
    animal: extractAnimal(product.tags),
    productType: extractProductType(product.tags),
  }
}

/** Check if Shopify is configured */
export function isShopifyConfigured(): boolean {
  return Boolean(SHOPIFY_DOMAIN && SHOPIFY_TOKEN)
}
