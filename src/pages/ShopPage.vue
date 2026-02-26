<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePageSeo } from '@/composables/useSignSeo'
import { useShopify } from '@/composables/useShopify'
import { useUserSign } from '@/composables/useUserSign'
import { useAnalytics } from '@/composables/useAnalytics'
import type { MerchProduct, MerchFilterElement } from '@/types/merch'
import type { ZodiacElement } from '@/types'
import MerchGrid from '@/components/merch/MerchGrid.vue'
import MerchProductModal from '@/components/merch/MerchProductModal.vue'
import MerchCartDrawer from '@/components/merch/MerchCartDrawer.vue'
import TrustBar from '@/components/merch/TrustBar.vue'
import BlueprintCTA from '@/components/zodiac/BlueprintCTA.vue'

usePageSeo(
  'Five Elements Collection — Chinese Zodiac Merch',
  'Wearable art inspired by the Wu Xing five elements. T-shirts, hoodies, pins, and mugs for all 60 Chinese zodiac combinations.',
  '/shop',
)

const route = useRoute()
const { loadAllProducts, filterByElement, products, loading, configured } = useShopify()
const { userSign } = useUserSign()
const { trackEvent } = useAnalytics()

const activeFilter = ref<MerchFilterElement>('all')
const selectedProduct = ref<MerchProduct | null>(null)

const elementFilters: { key: MerchFilterElement; label: string; emoji: string }[] = [
  { key: 'all', label: 'All', emoji: '✦' },
  { key: 'wood', label: 'Wood', emoji: '🌳' },
  { key: 'fire', label: 'Fire', emoji: '🔥' },
  { key: 'earth', label: 'Earth', emoji: '🏔️' },
  { key: 'metal', label: 'Metal', emoji: '⚔️' },
  { key: 'water', label: 'Water', emoji: '🌊' },
]

const filteredProducts = computed(() => filterByElement(activeFilter.value))

// Personalized products for the user's sign element
const personalizedProducts = computed(() => {
  if (!userSign.value) return []
  return products.value.filter(p => p.element === userSign.value!.element).slice(0, 4)
})

function handleDetail(product: MerchProduct) {
  selectedProduct.value = product
  trackEvent('merch_product_view', {
    product_id: product.id,
    product_name: product.title,
    source: 'shop_page',
  })
}

function setFilter(filter: MerchFilterElement) {
  activeFilter.value = filter
  trackEvent('merch_filter', { element: filter })
}

// Set initial filter from query param (e.g., /shop?element=fire)
onMounted(() => {
  const queryElement = route.query.element as string
  if (queryElement && elementFilters.some(f => f.key === queryElement)) {
    activeFilter.value = queryElement as MerchFilterElement
  } else if (userSign.value) {
    // Default to user's element if they have one
    activeFilter.value = userSign.value.element
  }

  loadAllProducts()
})

// Reload when route query changes (browser back/forward)
watch(() => route.query.element, (newElement) => {
  if (newElement && elementFilters.some(f => f.key === newElement)) {
    activeFilter.value = newElement as MerchFilterElement
  }
})
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
      <!-- Not configured notice (only visible in dev) -->
      <div v-if="!configured" class="glass rounded-2xl p-8 text-center">
        <div class="text-4xl mb-4">🏪</div>
        <h2 class="font-display text-xl font-bold text-ash-100 mb-2">Shop Coming Soon</h2>
        <p class="text-ash-400 max-w-md mx-auto">
          The Five Elements Collection is being crafted. Sign up for our newsletter to be the first to know when it launches.
        </p>
      </div>

      <template v-else>
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
          <MerchGrid :products="personalizedProducts" @detail="handleDetail" />
        </section>

        <!-- Main Product Grid -->
        <section class="space-y-4">
          <h2 v-if="activeFilter !== 'all'" class="font-display text-xl font-bold text-ash-100 capitalize">
            {{ activeFilter }} Element
          </h2>
          <MerchGrid
            :products="filteredProducts"
            :loading="loading"
            @detail="handleDetail"
          />
        </section>
      </template>

      <!-- Blueprint CTA Cross-Sell -->
      <section v-if="userSign" class="mt-12">
        <BlueprintCTA :profile="userSign" />
      </section>
    </div>

    <!-- Cart Drawer -->
    <MerchCartDrawer />

    <!-- Product Modal -->
    <MerchProductModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </div>
</template>
