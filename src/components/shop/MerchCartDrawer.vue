<script setup lang="ts">
import { watch } from 'vue'
import { useShopify } from '@/composables/useShopify'
import { useAnalytics } from '@/composables/useAnalytics'

const {
  cartItems,
  cartOpen,
  cartCount,
  cartTotal,
  cartCurrency,
  updateQuantity,
  removeFromCart,
  clearCart,
  checkout,
} = useShopify()

const { trackEvent } = useAnalytics()

// Lock body scroll when cart is open
watch(cartOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

function formatPrice(amount: string, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(parseFloat(amount))
}

function close() {
  cartOpen.value = false
}

async function handleCheckout() {
  trackEvent('merch_checkout', {
    item_count: cartCount.value,
    total: cartTotal.value,
    currency: cartCurrency.value,
  })

  const url = await checkout()
  if (url) {
    window.open(url, '_blank', 'noopener')
    close()
  }
}
</script>

<template>
  <teleport to="body">
    <!-- Overlay -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="cartOpen"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        @click="close"
      />
    </transition>

    <!-- Drawer -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="cartOpen"
        class="fixed top-0 right-0 h-full w-full max-w-md z-[70] glass-strong flex flex-col"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-4 border-b border-ash-800/50">
          <h2 class="font-display font-bold text-lg text-ash-100">
            Your Cart
            <span v-if="cartCount > 0" class="text-[var(--el-accent)] text-sm font-body ml-1">
              ({{ cartCount }})
            </span>
          </h2>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-ash-800/50 text-ash-400 hover:text-ash-200 transition-colors"
            aria-label="Close cart"
            @click="close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Empty cart -->
        <div
          v-if="cartItems.length === 0"
          class="flex-1 flex flex-col items-center justify-center p-8 text-center"
        >
          <div class="text-5xl mb-4">🛒</div>
          <p class="text-ash-400 text-lg mb-2">Your cart is empty</p>
          <p class="text-ash-500 text-sm">Add some zodiac merch to get started!</p>
          <button class="btn-element text-sm mt-6" @click="close">
            Continue Shopping
          </button>
        </div>

        <!-- Cart Items -->
        <div v-else class="flex-1 overflow-y-auto p-4 space-y-3">
          <div
            v-for="item in cartItems"
            :key="item.variantId"
            class="glass rounded-xl p-3 flex gap-3"
          >
            <!-- Item image -->
            <div class="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-ash-900/50">
              <img
                v-if="item.image"
                :src="item.image.url"
                :alt="item.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Item details -->
            <div class="flex-1 min-w-0">
              <p class="text-ash-100 text-sm font-medium truncate">{{ item.title }}</p>
              <p v-if="item.variantTitle !== 'Default Title'" class="text-ash-500 text-xs">
                {{ item.variantTitle }}
              </p>
              <p class="text-[var(--el-accent)] font-bold text-sm mt-1">
                {{ formatPrice(item.price, item.currencyCode) }}
              </p>
            </div>

            <!-- Quantity + remove -->
            <div class="flex flex-col items-end justify-between">
              <button
                class="text-ash-500 hover:text-red-400 transition-colors p-0.5"
                aria-label="Remove item"
                @click="removeFromCart(item.variantId)"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

              <div class="flex items-center gap-1">
                <button
                  class="w-6 h-6 rounded bg-ash-800 hover:bg-ash-700 text-ash-300 text-xs flex items-center justify-center transition-colors"
                  @click="updateQuantity(item.variantId, item.quantity - 1)"
                >
                  −
                </button>
                <span class="text-ash-200 text-xs w-6 text-center">{{ item.quantity }}</span>
                <button
                  class="w-6 h-6 rounded bg-ash-800 hover:bg-ash-700 text-ash-300 text-xs flex items-center justify-center transition-colors"
                  @click="updateQuantity(item.variantId, item.quantity + 1)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartItems.length > 0" class="border-t border-ash-800/50 p-4 space-y-3">
          <!-- Total -->
          <div class="flex items-center justify-between">
            <span class="text-ash-400 text-sm">Total</span>
            <span class="text-ash-100 font-bold text-lg">
              {{ formatPrice(cartTotal, cartCurrency) }}
            </span>
          </div>

          <!-- Actions -->
          <button
            class="btn-element w-full py-3 text-center text-sm"
            @click="handleCheckout"
          >
            Checkout via Shopify
          </button>

          <div class="flex justify-between">
            <button
              class="text-ash-500 hover:text-ash-300 text-xs transition-colors"
              @click="close"
            >
              Continue Shopping
            </button>
            <button
              class="text-ash-500 hover:text-red-400 text-xs transition-colors"
              @click="clearCart"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </aside>
    </transition>
  </teleport>
</template>
