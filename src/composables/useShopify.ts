// ============================================
// SHOPIFY STOREFRONT COMPOSABLE
// Handles product fetching, caching, and cart management.
// Works seamlessly when Shopify is not configured (returns empty arrays).
// ============================================

import { ref, computed } from 'vue'
import type { MerchProduct, MerchImage, MerchVariant, CartItem } from '@/types'
import { parseProductTags } from '@/lib/shopify-config'

// ============================================
// PRODUCT CACHE (module-level singleton)
// ============================================

const products = ref<MerchProduct[]>([])
const loading = ref(false)
const loaded = ref(false)
const error = ref<string | null>(null)
let fetchPromise: Promise<void> | null = null

// ============================================
// CART STATE (module-level singleton)
// ============================================

const CART_STORAGE_KEY = 'wuxing-cart'

function loadCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCartToStorage(items: CartItem[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // localStorage full or unavailable — ignore
  }
}

const cartItems = ref<CartItem[]>(loadCartFromStorage())
const cartOpen = ref(false)

// ============================================
// PRODUCT TRANSFORMATION
// ============================================

interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

interface ShopifyVariant {
  id: string
  title: string
  priceV2: { amount: string; currencyCode: string }
  availableForSale: boolean
  image: ShopifyImage | null
}

interface ShopifyProduct {
  id: string
  title: string
  handle: string
  description: string
  descriptionHtml: string
  productType: string
  tags: string[]
  images: { edges: Array<{ node: ShopifyImage }> }
  variants: { edges: Array<{ node: ShopifyVariant }> }
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string }
    maxVariantPrice: { amount: string; currencyCode: string }
  }
}

function transformImage(img: ShopifyImage): MerchImage {
  return {
    url: img.url,
    altText: img.altText,
    width: img.width,
    height: img.height,
  }
}

function transformVariant(v: ShopifyVariant): MerchVariant {
  return {
    id: v.id,
    title: v.title,
    price: v.priceV2.amount,
    currencyCode: v.priceV2.currencyCode,
    available: v.availableForSale,
    image: v.image ? transformImage(v.image) : null,
  }
}

function transformProduct(raw: ShopifyProduct): MerchProduct {
  const tags = raw.tags || []
  const { signSlug, element, animal } = parseProductTags(tags)

  return {
    id: raw.id,
    title: raw.title,
    handle: raw.handle,
    description: raw.description,
    descriptionHtml: raw.descriptionHtml,
    productType: raw.productType,
    tags,
    images: (raw.images?.edges || []).map(e => transformImage(e.node)),
    variants: (raw.variants?.edges || []).map(e => transformVariant(e.node)),
    priceRange: {
      min: raw.priceRange.minVariantPrice.amount,
      max: raw.priceRange.maxVariantPrice.amount,
      currencyCode: raw.priceRange.minVariantPrice.currencyCode,
    },
    signSlug,
    element,
    animal,
  }
}

// ============================================
// FETCH PRODUCTS
// ============================================

async function fetchProducts(): Promise<void> {
  // If already loaded or loading, return the existing promise
  if (loaded.value) return
  if (fetchPromise) return fetchPromise

  loading.value = true
  error.value = null

  fetchPromise = (async () => {
    try {
      const res = await fetch('/api/shopify?action=products')
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      const data = await res.json()
      const rawProducts = (data.products || []) as ShopifyProduct[]
      products.value = rawProducts.map(transformProduct)
      loaded.value = true
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load products'
      products.value = []
    } finally {
      loading.value = false
      fetchPromise = null
    }
  })()

  return fetchPromise
}

// ============================================
// CART OPERATIONS
// ============================================

function addToCart(product: MerchProduct, variant: MerchVariant, quantity = 1) {
  const existing = cartItems.value.find(item => item.variantId === variant.id)

  if (existing) {
    existing.quantity += quantity
  } else {
    cartItems.value.push({
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      variantTitle: variant.title,
      price: variant.price,
      currencyCode: variant.currencyCode,
      quantity,
      image: variant.image || product.images[0] || null,
      handle: product.handle,
    })
  }

  saveCartToStorage(cartItems.value)
  cartOpen.value = true
}

function removeFromCart(variantId: string) {
  cartItems.value = cartItems.value.filter(item => item.variantId !== variantId)
  saveCartToStorage(cartItems.value)
}

function updateQuantity(variantId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(variantId)
    return
  }

  const item = cartItems.value.find(i => i.variantId === variantId)
  if (item) {
    item.quantity = quantity
    saveCartToStorage(cartItems.value)
  }
}

function clearCart() {
  cartItems.value = []
  saveCartToStorage([])
}

async function checkout(): Promise<string | null> {
  if (cartItems.value.length === 0) return null

  try {
    const lines = cartItems.value.map(item => ({
      merchandiseId: item.variantId,
      quantity: item.quantity,
    }))

    const res = await fetch('/api/shopify?action=cart-create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lines }),
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const data = await res.json()
    const checkoutUrl = data.cart?.checkoutUrl as string | undefined

    if (checkoutUrl) {
      clearCart()
      return checkoutUrl
    }

    throw new Error(data.error || 'Failed to create checkout')
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Checkout failed'
    return null
  }
}

// ============================================
// COMPOSABLE
// ============================================

export function useShopify() {
  const cartCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const cartTotal = computed(() => {
    const total = cartItems.value.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0,
    )
    return total.toFixed(2)
  })

  const cartCurrency = computed(() =>
    cartItems.value[0]?.currencyCode || 'USD'
  )

  /** Get all products for a specific sign slug */
  function getProductsBySign(slug: string): MerchProduct[] {
    return products.value.filter(p => p.signSlug === slug)
  }

  /** Get all products for a specific element */
  function getProductsByElement(element: string): MerchProduct[] {
    return products.value.filter(p => p.element === element)
  }

  /** Get all products for a specific animal */
  function getProductsByAnimal(animal: string): MerchProduct[] {
    return products.value.filter(p => p.animal === animal)
  }

  /** Get unique product types available */
  function getAvailableTypes(): string[] {
    const types = new Set<string>()
    for (const p of products.value) {
      if (p.productType) types.add(p.productType.toLowerCase())
    }
    return Array.from(types).sort()
  }

  /** Get unique elements that have products */
  function getAvailableElements(): string[] {
    const elements = new Set<string>()
    for (const p of products.value) {
      if (p.element) elements.add(p.element)
    }
    return Array.from(elements).sort()
  }

  /** Get unique animals that have products */
  function getAvailableAnimals(): string[] {
    const animals = new Set<string>()
    for (const p of products.value) {
      if (p.animal) animals.add(p.animal)
    }
    return Array.from(animals).sort()
  }

  return {
    // Products
    products,
    loading,
    loaded,
    error,
    fetchProducts,
    getProductsBySign,
    getProductsByElement,
    getProductsByAnimal,
    getAvailableTypes,
    getAvailableElements,
    getAvailableAnimals,

    // Cart
    cartItems,
    cartOpen,
    cartCount,
    cartTotal,
    cartCurrency,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
  }
}
