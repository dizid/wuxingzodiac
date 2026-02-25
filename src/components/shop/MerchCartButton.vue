<script setup lang="ts">
import { useShopify } from '@/composables/useShopify'

const { cartOpen, cartCount } = useShopify()
</script>

<template>
  <button
    class="relative flex items-center justify-center w-10 h-10 rounded-lg hover:bg-ash-800/50 text-ash-400 hover:text-ash-100 transition-colors"
    aria-label="Open cart"
    @click="cartOpen = true"
  >
    <!-- Cart icon -->
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>

    <!-- Badge -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="scale-0 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-0 opacity-0"
    >
      <span
        v-if="cartCount > 0"
        class="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[var(--el-primary)] text-white text-[10px] font-bold px-1 leading-none"
      >
        {{ cartCount > 99 ? '99+' : cartCount }}
      </span>
    </transition>
  </button>
</template>
