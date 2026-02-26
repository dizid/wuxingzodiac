<script setup lang="ts">
import { useShopify } from '@/composables/useShopify'
import TrustBar from './TrustBar.vue'

const {
  cartItems,
  cartOpen,
  cartCount,
  cartTotal,
  removeFromCart,
  updateQuantity,
  checkout,
  checkingOut,
  error,
  isDemoMode,
} = useShopify()

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

function close() {
  cartOpen.value = false
}
</script>

<template>
  <!-- Backdrop -->
  <teleport to="body">
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
        class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
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
      <div
        v-if="cartOpen"
        class="fixed top-0 right-0 z-[61] h-full w-full max-w-md glass-strong border-l border-ash-700/50 flex flex-col"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-5 border-b border-ash-800/50">
          <h2 class="font-display text-lg font-bold text-ash-100">
            Cart <span v-if="cartCount > 0" class="text-ash-400 text-sm font-normal">({{ cartCount }})</span>
          </h2>
          <button
            class="w-8 h-8 flex items-center justify-center rounded-lg text-ash-400 hover:text-ash-100 hover:bg-ash-800/50 transition-colors"
            aria-label="Close cart"
            @click="close"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Cart Items -->
        <div class="flex-1 overflow-y-auto p-5 space-y-4">
          <template v-if="cartItems.length === 0">
            <div class="text-center py-12">
              <svg class="w-16 h-16 mx-auto text-ash-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <p class="text-ash-400 mb-2">Your cart is empty</p>
              <p class="text-ash-600 text-sm">Browse the Five Elements Collection</p>
            </div>
          </template>

          <div
            v-for="item in cartItems"
            :key="item.variantId"
            class="flex gap-4 glass rounded-xl p-3"
          >
            <!-- Thumbnail -->
            <div class="w-16 h-16 rounded-lg bg-ash-800 overflow-hidden shrink-0">
              <img
                v-if="item.image"
                :src="item.image.url"
                :alt="item.title"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0">
              <h3 class="text-ash-100 text-sm font-medium truncate">{{ item.title }}</h3>
              <p v-if="item.variantTitle" class="text-ash-500 text-xs">{{ item.variantTitle }}</p>
              <p class="text-ash-300 text-sm font-semibold mt-1">{{ formatPrice(item.price) }}</p>
            </div>

            <!-- Quantity + Remove -->
            <div class="flex flex-col items-end gap-2">
              <button
                class="text-ash-500 hover:text-red-400 transition-colors"
                aria-label="Remove item"
                @click="removeFromCart(item.variantId)"
              >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <div class="flex items-center gap-1">
                <button
                  class="w-6 h-6 flex items-center justify-center rounded bg-ash-800 text-ash-300 hover:bg-ash-700 text-xs"
                  @click="updateQuantity(item.variantId, item.quantity - 1)"
                >
                  &minus;
                </button>
                <span class="text-ash-200 text-sm w-6 text-center">{{ item.quantity }}</span>
                <button
                  class="w-6 h-6 flex items-center justify-center rounded bg-ash-800 text-ash-300 hover:bg-ash-700 text-xs"
                  @click="updateQuantity(item.variantId, item.quantity + 1)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="cartItems.length > 0" class="border-t border-ash-800/50 p-5 space-y-4">
          <TrustBar compact />

          <div class="flex justify-between items-center">
            <span class="text-ash-400 text-sm">Subtotal</span>
            <span class="text-ash-100 font-display font-bold text-xl">{{ formatPrice(cartTotal) }}</span>
          </div>

          <!-- Error/preview message -->
          <p v-if="error" class="text-amber-400 text-xs text-center bg-amber-900/20 rounded-lg px-3 py-2">
            {{ error }}
          </p>

          <button
            class="btn-element w-full text-center text-lg py-3"
            :disabled="checkingOut || isDemoMode"
            @click="checkout"
          >
            <span v-if="checkingOut">Redirecting...</span>
            <span v-else-if="isDemoMode">Preview Only</span>
            <span v-else>Checkout</span>
          </button>

          <p class="text-ash-600 text-xs text-center">
            <template v-if="isDemoMode">Store launching soon — these are sample products.</template>
            <template v-else>Secure checkout via Shopify. Shipping calculated at checkout.</template>
          </p>
        </div>
      </div>
    </transition>
  </teleport>
</template>
