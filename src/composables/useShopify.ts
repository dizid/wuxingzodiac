import { ref, computed, onMounted } from 'vue'
import type { MerchProduct, CartItem, MerchFilterElement } from '@/types/merch'
import type { ZodiacElement } from '@/types'
import {
  fetchAllProducts,
  fetchProductsByTag,
  createCheckout,
  toMerchProduct,
  isShopifyConfigured,
} from '@/lib/shopify'
import { generateDemoProducts } from '@/lib/demo-products'
import { useAnalytics } from '@/composables/useAnalytics'

// Demo mode: show mock products when Shopify isn't configured
const isDemoMode = !isShopifyConfigured()

// ============================================
// SHARED STATE (singleton across components)
// ============================================

const CART_KEY = 'wuxing_merch_cart'

const products = ref<MerchProduct[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const cartItems = ref<CartItem[]>([])
const cartOpen = ref(false)
const checkingOut = ref(false)
const productsLoaded = ref(false)

/**
 * Shopify Storefront API composable.
 * Manages product fetching, cart state (localStorage), and checkout.
 * SSR-safe: all fetches and localStorage happen in onMounted/client-side.
 */
export function useShopify() {
  const { trackAddToCart, trackBeginCheckout } = useAnalytics()

  // ── Cart persistence ───────────────────────
  function saveCart() {
    if (typeof window === 'undefined') return
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems.value))
  }

  function loadCart() {
    if (typeof window === 'undefined') return
    try {
      const stored = localStorage.getItem(CART_KEY)
      if (stored) {
        cartItems.value = JSON.parse(stored)
      }
    } catch {
      localStorage.removeItem(CART_KEY)
    }
  }

  // ── Product fetching ───────────────────────
  async function loadAllProducts() {
    if (productsLoaded.value || loading.value) return

    // Demo mode: use mock products
    if (isDemoMode) {
      products.value = generateDemoProducts()
      productsLoaded.value = true
      return
    }

    loading.value = true
    error.value = null

    try {
      const shopifyProducts = await fetchAllProducts()
      products.value = shopifyProducts.map(toMerchProduct)
      productsLoaded.value = true
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load products'
      console.error('Shopify fetch error:', error.value)
    } finally {
      loading.value = false
    }
  }

  async function loadProductsByElement(element: ZodiacElement) {
    // Demo mode: filter mock products by element
    if (isDemoMode) {
      if (!productsLoaded.value) {
        products.value = generateDemoProducts()
        productsLoaded.value = true
      }
      return products.value.filter(p => p.element === element)
    }

    loading.value = true
    error.value = null

    try {
      const shopifyProducts = await fetchProductsByTag(`element:${element}`, 8)
      return shopifyProducts.map(toMerchProduct)
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load products'
      return []
    } finally {
      loading.value = false
    }
  }

  // ── Filtering ──────────────────────────────
  function filterByElement(element: MerchFilterElement): MerchProduct[] {
    if (element === 'all') return products.value
    return products.value.filter(p => p.element === element)
  }

  // ── Cart operations ────────────────────────
  function addToCart(
    product: MerchProduct,
    variant?: { id: string; title: string; price: string },
    options?: { silent?: boolean },
  ) {
    const selectedVariant = variant || product.variants[0]
    if (!selectedVariant) return

    const existing = cartItems.value.find(item => item.variantId === selectedVariant.id)

    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({
        variantId: selectedVariant.id,
        productId: product.id,
        title: product.title,
        variantTitle: selectedVariant.title === 'Default Title' ? '' : selectedVariant.title,
        price: parseFloat(selectedVariant.price),
        currency: product.currency,
        quantity: 1,
        image: product.image,
        handle: product.handle,
      })
    }

    saveCart()
    if (!options?.silent) cartOpen.value = true

    // GA4 add_to_cart event
    trackAddToCart({
      id: product.id,
      title: product.title,
      price: parseFloat(selectedVariant.price),
      quantity: 1,
      element: product.element || undefined,
      productType: product.productType || undefined,
      variant: selectedVariant.title,
    })
  }

  function removeFromCart(variantId: string) {
    cartItems.value = cartItems.value.filter(item => item.variantId !== variantId)
    saveCart()
  }

  function updateQuantity(variantId: string, quantity: number) {
    if (quantity <= 0) {
      removeFromCart(variantId)
      return
    }

    const item = cartItems.value.find(i => i.variantId === variantId)
    if (item) {
      item.quantity = quantity
      saveCart()
    }
  }

  function clearCart() {
    cartItems.value = []
    saveCart()
  }

  // ── Checkout ───────────────────────────────
  async function checkout() {
    if (cartItems.value.length === 0) return

    // Demo mode: can't checkout with mock products
    if (isDemoMode) {
      error.value = 'Preview mode — checkout available when the store launches.'
      return
    }

    checkingOut.value = true

    // GA4 begin_checkout event
    trackBeginCheckout(
      cartItems.value.map(item => ({
        id: item.productId,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        variant: item.variantTitle || undefined,
      })),
      cartTotal.value,
    )

    try {
      const lineItems = cartItems.value.map(item => ({
        variantId: item.variantId,
        quantity: item.quantity,
      }))

      const checkoutUrl = await createCheckout(lineItems)
      window.location.href = checkoutUrl
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Checkout failed'
      checkingOut.value = false
    }
  }

  // ── Computed ────────────────────────────────
  const cartCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0),
  )

  const cartTotal = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
  )

  // ── Hydrate cart from localStorage on mount ─
  onMounted(() => {
    loadCart()
  })

  return {
    // State (not wrapped in readonly — DeepReadonly breaks downstream component props)
    products,
    loading,
    error,
    cartItems,
    cartOpen,
    checkingOut,
    configured: isShopifyConfigured(),
    isDemoMode,

    // Product loading
    loadAllProducts,
    loadProductsByElement,
    filterByElement,

    // Cart
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,

    // Checkout
    checkout,
  }
}
