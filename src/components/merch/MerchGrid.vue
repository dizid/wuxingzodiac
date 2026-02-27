<script setup lang="ts">
import type { ShopProduct } from '@/lib/shop-products'
import ShopProductCard from './ShopProductCard.vue'

defineProps<{
  products: ShopProduct[]
  loading?: boolean
  limit?: number
}>()
</script>

<template>
  <!-- Skeleton loading state -->
  <div v-if="loading" class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div v-for="i in (limit || 6)" :key="i" class="glass rounded-2xl overflow-hidden animate-pulse">
      <div class="aspect-square bg-ash-800" />
      <div class="p-4 space-y-2">
        <div class="h-4 bg-ash-700 rounded w-3/4" />
        <div class="h-3 bg-ash-800 rounded w-full" />
        <div class="flex justify-between items-center mt-3">
          <div class="h-5 bg-ash-700 rounded w-16" />
          <div class="h-7 bg-ash-800 rounded w-20" />
        </div>
      </div>
    </div>
  </div>

  <!-- Empty state -->
  <div v-else-if="products.length === 0" class="glass rounded-2xl p-8 text-center">
    <p class="text-ash-400">No products found. Check back soon!</p>
  </div>

  <!-- Product grid -->
  <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <ShopProductCard
      v-for="product in (limit ? products.slice(0, limit) : products)"
      :key="product.slug"
      :product="product"
    />
  </div>
</template>
