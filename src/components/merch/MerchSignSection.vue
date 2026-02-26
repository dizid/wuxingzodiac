<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import type { ZodiacElement, ZodiacAnimal } from '@/types'
import type { MerchProduct } from '@/types/merch'
import { useShopify } from '@/composables/useShopify'
import { useAnalytics } from '@/composables/useAnalytics'
import MerchGrid from './MerchGrid.vue'
import MerchProductModal from './MerchProductModal.vue'

const props = defineProps<{
  element: ZodiacElement
  animal: ZodiacAnimal
}>()

const { loadProductsByElement } = useShopify()
const { trackEvent } = useAnalytics()

const products = ref<MerchProduct[]>([])
const loading = ref(true)
const selectedProduct = ref<MerchProduct | null>(null)
const viewed = ref(false)

onMounted(async () => {
  try {
    products.value = await loadProductsByElement(props.element)

    // Track impression once visible
    if (products.value.length > 0 && !viewed.value) {
      trackEvent('merch_section_view', {
        element: props.element,
        animal: props.animal,
        product_count: products.value.length,
      })
      viewed.value = true
    }
  } finally {
    loading.value = false
  }
})

function handleDetail(product: MerchProduct) {
  selectedProduct.value = product
  trackEvent('merch_product_view', {
    product_id: product.id,
    product_name: product.title,
    element: props.element,
  })
}
</script>

<template>
  <!-- Only render if there are products (or still loading) -->
  <section v-if="loading || products.length > 0" class="glass rounded-2xl p-6 md:p-8">
    <div class="flex items-center justify-between mb-5">
      <div>
        <h3 class="element-text font-display text-xl font-bold">
          Five Elements Collection
        </h3>
        <p class="text-ash-400 text-sm mt-1">
          Wearable art for your <span class="capitalize">{{ element }}</span> identity
        </p>
      </div>
      <RouterLink
        :to="`/shop?element=${element}`"
        class="text-sm px-3 py-1.5 rounded-lg transition-all"
        style="color: var(--el-accent); background: rgba(var(--el-glow-rgb), 0.1);"
      >
        View All
      </RouterLink>
    </div>

    <MerchGrid
      :products="products"
      :loading="loading"
      :limit="4"
      @detail="handleDetail"
    />

    <MerchProductModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />
  </section>
</template>
