<script setup lang="ts">
import { computed } from 'vue'
import { getProductsForSign, isProductLive } from '@/lib/shop-products'
import type { ShopProduct } from '@/lib/shop-products'

const props = defineProps<{
  signSlug: string  // e.g. 'fire-horse'
  element: string   // e.g. 'fire'
  name: string      // e.g. 'Fire Horse'
}>()

// Only products that are live on Fourthwall (limited to first 2 in the template).
// "Coming Soon" products are hidden, so the block disappears until one goes live.
const products = computed<ShopProduct[]>(() =>
  getProductsForSign(props.signSlug).filter(isProductLive),
)

// Format a price value as USD currency string
const formatPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

function formatProductPrice(price: number): string {
  return formatPrice.format(price)
}
</script>

<template>
  <!-- Only render if there are products for this sign -->
  <section v-if="products.length > 0" class="glass rounded-2xl p-6 space-y-4">

    <!-- Header -->
    <div>
      <h3 class="element-text font-display text-xl font-bold">
        {{ name }} Collection
      </h3>
      <p class="text-ash-400 text-sm mt-1">Wearable art for your zodiac identity</p>
    </div>

    <!-- Product previews — max 2, horizontal card layout -->
    <div
      v-for="product in products.slice(0, 2)"
      :key="product.slug"
      class="flex gap-4 items-center"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="w-20 h-20 rounded-lg object-cover shrink-0"
      />

      <div class="flex-1 min-w-0">
        <p class="text-ash-100 text-sm font-medium truncate">{{ product.title }}</p>
        <p class="element-text font-bold">{{ formatProductPrice(product.price) }}</p>
      </div>

      <!-- Live product: link to Fourthwall store -->
      <a
        :href="product.fourthwallUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="px-3 py-1.5 text-xs font-medium rounded-lg shrink-0 transition-opacity hover:opacity-80"
        style="background: rgba(var(--el-glow-rgb), 0.15); color: var(--el-accent);"
      >
        Shop Now
      </a>
    </div>

    <!-- No "browse all merch" link: /shop is not routed (it redirects to /reading) -->

  </section>
</template>
