<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useShopify } from '@/composables/useShopify'
import { ELEMENT_LABELS, ANIMAL_LABELS } from '@/lib/shopify-config'
import MerchProductCard from './MerchProductCard.vue'
import type { ZodiacElement, ZodiacAnimal } from '@/types'

const props = withDefaults(defineProps<{
  /** Pre-filter to a specific sign slug */
  signSlug?: string
  /** Pre-filter to a specific element */
  element?: string
  /** Pre-filter to a specific animal */
  animal?: string
  /** Show filter controls */
  showFilters?: boolean
  /** Max products to display (0 = unlimited) */
  limit?: number
  /** Heading text */
  heading?: string
}>(), {
  showFilters: true,
  limit: 0,
})

const {
  products,
  loading,
  loaded,
  error,
  fetchProducts,
  getAvailableElements,
  getAvailableAnimals,
  getAvailableTypes,
} = useShopify()

// Filter state
const filterElement = ref<string>(props.element || '')
const filterAnimal = ref<string>(props.animal || '')
const filterType = ref<string>('')
const searchQuery = ref('')

onMounted(() => {
  fetchProducts()
})

const filteredProducts = computed(() => {
  let result = [...products.value]

  // Pre-filter by sign slug (highest priority)
  if (props.signSlug) {
    result = result.filter(p => p.signSlug === props.signSlug)
  }

  // Apply user filters
  if (filterElement.value) {
    result = result.filter(p => p.element === filterElement.value)
  }
  if (filterAnimal.value) {
    result = result.filter(p => p.animal === filterAnimal.value)
  }
  if (filterType.value) {
    result = result.filter(p =>
      p.productType.toLowerCase() === filterType.value.toLowerCase()
    )
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  // Apply limit
  if (props.limit > 0) {
    result = result.slice(0, props.limit)
  }

  return result
})

const hasActiveFilters = computed(() =>
  !!(filterElement.value || filterAnimal.value || filterType.value || searchQuery.value)
)

function clearFilters() {
  filterElement.value = props.element || ''
  filterAnimal.value = props.animal || ''
  filterType.value = ''
  searchQuery.value = ''
}
</script>

<template>
  <section>
    <!-- Heading -->
    <h2 v-if="heading" class="text-2xl font-display font-bold text-ash-100 mb-6">
      {{ heading }}
    </h2>

    <!-- Filters -->
    <div
      v-if="showFilters && !signSlug && loaded"
      class="glass rounded-xl p-4 mb-6 space-y-3"
    >
      <!-- Search -->
      <div class="relative">
        <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ash-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search merch..."
          class="w-full bg-ash-900/80 border border-ash-700 rounded-lg pl-10 pr-4 py-2.5 text-sm text-ash-200 placeholder-ash-600 focus:border-[var(--el-primary)] focus:outline-none transition-colors"
        />
      </div>

      <!-- Filter row -->
      <div class="flex flex-wrap gap-3">
        <!-- Element filter -->
        <select
          v-if="!element"
          v-model="filterElement"
          class="bg-ash-900/80 border border-ash-700 rounded-lg px-3 py-2 text-sm text-ash-200 focus:border-[var(--el-primary)] focus:outline-none transition-colors"
        >
          <option value="">All Elements</option>
          <option
            v-for="el in getAvailableElements()"
            :key="el"
            :value="el"
          >
            {{ ELEMENT_LABELS[el as ZodiacElement]?.icon }} {{ ELEMENT_LABELS[el as ZodiacElement]?.label || el }}
          </option>
        </select>

        <!-- Animal filter -->
        <select
          v-if="!animal"
          v-model="filterAnimal"
          class="bg-ash-900/80 border border-ash-700 rounded-lg px-3 py-2 text-sm text-ash-200 focus:border-[var(--el-primary)] focus:outline-none transition-colors"
        >
          <option value="">All Animals</option>
          <option
            v-for="an in getAvailableAnimals()"
            :key="an"
            :value="an"
          >
            {{ ANIMAL_LABELS[an as ZodiacAnimal] || an }}
          </option>
        </select>

        <!-- Product type filter -->
        <select
          v-model="filterType"
          class="bg-ash-900/80 border border-ash-700 rounded-lg px-3 py-2 text-sm text-ash-200 focus:border-[var(--el-primary)] focus:outline-none transition-colors"
        >
          <option value="">All Types</option>
          <option
            v-for="typ in getAvailableTypes()"
            :key="typ"
            :value="typ"
          >
            {{ typ.charAt(0).toUpperCase() + typ.slice(1) }}
          </option>
        </select>

        <!-- Clear filters -->
        <button
          v-if="hasActiveFilters"
          class="text-xs text-[var(--el-accent)] hover:text-[var(--el-primary)] transition-colors px-3 py-2"
          @click="clearFilters"
        >
          Clear filters
        </button>
      </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading && !loaded" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="i in 8"
        :key="i"
        class="glass rounded-2xl overflow-hidden animate-pulse"
      >
        <div class="aspect-square bg-ash-800" />
        <div class="p-4 space-y-2">
          <div class="h-4 bg-ash-700 rounded w-3/4" />
          <div class="h-3 bg-ash-800 rounded w-full" />
          <div class="h-6 bg-ash-700 rounded w-1/3 mt-2" />
          <div class="h-10 bg-ash-800 rounded mt-3" />
        </div>
      </div>
    </div>

    <!-- Error state -->
    <div v-else-if="error" class="glass rounded-xl p-8 text-center">
      <p class="text-ash-400 mb-2">Unable to load merch products</p>
      <button class="btn-element text-sm" @click="fetchProducts">
        Try Again
      </button>
    </div>

    <!-- Empty state -->
    <div
      v-else-if="loaded && filteredProducts.length === 0"
      class="glass rounded-xl p-8 text-center"
    >
      <div class="text-4xl mb-3">🎨</div>
      <h3 class="text-lg font-display font-bold text-ash-200 mb-2">
        <template v-if="hasActiveFilters">No matching products</template>
        <template v-else>Merch coming soon!</template>
      </h3>
      <p class="text-ash-400 text-sm max-w-md mx-auto">
        <template v-if="hasActiveFilters">
          Try adjusting your filters or
          <button class="text-[var(--el-accent)] underline" @click="clearFilters">clear all filters</button>.
        </template>
        <template v-else>
          Beautiful zodiac-themed merchandise is being designed. Check back soon for exclusive t-shirts, hoodies, and more.
        </template>
      </p>
    </div>

    <!-- Product Grid -->
    <div
      v-else
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <MerchProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Results count -->
    <p
      v-if="loaded && filteredProducts.length > 0 && showFilters"
      class="text-ash-500 text-xs mt-4 text-center"
    >
      Showing {{ filteredProducts.length }} product{{ filteredProducts.length !== 1 ? 's' : '' }}
    </p>
  </section>
</template>
