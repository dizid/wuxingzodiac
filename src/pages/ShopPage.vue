<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePageSeo } from '@/composables/useSignSeo'
import { useUserSign } from '@/composables/useUserSign'
import { getProductsByElement, allProducts } from '@/lib/shop-products'
import type { ShopProduct } from '@/lib/shop-products'
import type { ZodiacElement } from '@/types'
import MerchGrid from '@/components/merch/MerchGrid.vue'
import TrustBar from '@/components/merch/TrustBar.vue'
import BlueprintCTA from '@/components/zodiac/BlueprintCTA.vue'

usePageSeo(
  'Five Elements Collection — Chinese Zodiac Merch',
  'Wearable art inspired by the Wu Xing five elements. T-shirts, hoodies, pins, and mugs for all 60 Chinese zodiac combinations.',
  '/shop',
)

type FilterElement = ZodiacElement | 'all'

const route = useRoute()
const { userSign } = useUserSign()

// Element filter tabs
const elementFilters: { key: FilterElement; label: string; emoji: string }[] = [
  { key: 'all', label: 'All', emoji: '✦' },
  { key: 'wood', label: 'Wood', emoji: '🌳' },
  { key: 'fire', label: 'Fire', emoji: '🔥' },
  { key: 'earth', label: 'Earth', emoji: '🏔️' },
  { key: 'metal', label: 'Metal', emoji: '⚔️' },
  { key: 'water', label: 'Water', emoji: '🌊' },
]

// Initial filter: from query param, user's element, or 'all'
function getInitialFilter(): FilterElement {
  const queryElement = route.query.element as string
  if (queryElement && elementFilters.some(f => f.key === queryElement)) {
    return queryElement as FilterElement
  }
  if (userSign.value) return userSign.value.element
  return 'all'
}

const activeFilter = ref<FilterElement>(getInitialFilter())

// Filtered products — fully static, no async loading
const filteredProducts = computed<ShopProduct[]>(() => getProductsByElement(activeFilter.value))

// Personalized products (user's element, shown when filter is 'all')
const personalizedProducts = computed<ShopProduct[]>(() => {
  if (!userSign.value) return []
  return allProducts.filter(p => p.element === userSign.value!.element).slice(0, 4)
})

function setFilter(filter: FilterElement) {
  activeFilter.value = filter
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero -->
    <section class="text-center px-4 pt-20 pb-12 md:pt-28 md:pb-16">
      <h1 class="multi-element-text font-display text-4xl md:text-6xl font-bold mb-4">
        Five Elements Collection
      </h1>
      <p class="text-ash-400 text-lg md:text-xl max-w-2xl mx-auto mb-6">
        Wearable art inspired by the Wu Xing five elements.
        Each piece reflects the energy, symbolism, and beauty of Chinese zodiac identity.
      </p>
    </section>

    <div class="max-w-5xl mx-auto px-4 pb-20 space-y-10">
      <!-- Trust Bar -->
      <TrustBar />

      <!-- Element Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-2">
        <button
          v-for="filter in elementFilters"
          :key="filter.key"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all"
          :class="activeFilter === filter.key
            ? 'bg-[rgba(var(--el-glow-rgb),0.15)] text-[var(--el-accent)] border border-[rgba(var(--el-glow-rgb),0.3)]'
            : 'text-ash-400 hover:text-ash-200 border border-transparent hover:bg-ash-800/50'"
          :data-element="filter.key !== 'all' ? filter.key : undefined"
          @click="setFilter(filter.key)"
        >
          <span class="mr-1">{{ filter.emoji }}</span>
          {{ filter.label }}
        </button>
      </div>

      <!-- Personalized Section (if user has a sign and viewing 'all') -->
      <section v-if="personalizedProducts.length > 0 && activeFilter === 'all'" class="space-y-4">
        <div :data-element="userSign!.element">
          <h2 class="element-text font-display text-xl font-bold">
            Curated for {{ userSign!.name }}
          </h2>
          <p class="text-ash-400 text-sm mt-1">Products matching your element energy</p>
        </div>
        <MerchGrid :products="personalizedProducts" />
      </section>

      <!-- Main Product Grid -->
      <section class="space-y-4">
        <h2 v-if="activeFilter !== 'all'" class="font-display text-xl font-bold text-ash-100 capitalize">
          {{ activeFilter }} Element
        </h2>
        <MerchGrid :products="filteredProducts" />
      </section>

      <!-- Blueprint CTA Cross-Sell -->
      <section v-if="userSign" class="mt-12">
        <BlueprintCTA :profile="userSign" />
      </section>
    </div>
  </div>
</template>
