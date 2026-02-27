<script setup lang="ts">
import type { ShopProduct } from '@/lib/shop-products'
import { isProductLive } from '@/lib/shop-products'

const props = defineProps<{
  product: ShopProduct
}>()

// Format price as USD currency string
const formattedPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(props.product.price)
</script>

<template>
  <div
    class="glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-[rgba(var(--el-glow-rgb),0.3)]"
    :data-element="product.element"
  >
    <!-- Product Image -->
    <div class="relative aspect-square bg-ash-900/50 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
      <!-- Element badge top-left -->
      <span
        class="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-md capitalize tracking-wide"
        :style="{
          background: 'rgba(var(--el-glow-rgb), 0.2)',
          color: 'var(--el-accent)',
          backdropFilter: 'blur(4px)',
        }"
      >
        {{ product.element }}
      </span>
    </div>

    <!-- Product Info -->
    <div class="p-4">
      <h3 class="text-ash-100 font-semibold text-sm leading-tight mb-1 line-clamp-2">
        {{ product.title }}
      </h3>
      <p class="text-ash-500 text-xs line-clamp-1 mb-3">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between gap-2">
        <!-- Price -->
        <span
          class="font-bold text-lg"
          :style="{ color: 'var(--el-accent)' }"
        >
          {{ formattedPrice }}
        </span>

        <!-- Shop Now — links to Fourthwall in new tab -->
        <a
          v-if="isProductLive(product)"
          :href="product.fourthwallUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-shrink-0 px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:brightness-125"
          :style="{
            background: 'rgba(var(--el-glow-rgb), 0.15)',
            color: 'var(--el-accent)',
            border: '1px solid rgba(var(--el-glow-rgb), 0.25)',
          }"
        >
          Shop Now
        </a>

        <!-- Coming Soon — product not yet live on Fourthwall -->
        <span
          v-else
          class="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-ash-600 rounded-lg border border-ash-800 cursor-default"
        >
          Coming Soon
        </span>
      </div>
    </div>
  </div>
</template>
