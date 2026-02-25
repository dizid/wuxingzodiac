<script setup lang="ts">
import { ref, computed } from 'vue'
import { useShopify } from '@/composables/useShopify'
import { useAnalytics } from '@/composables/useAnalytics'
import type { MerchProduct } from '@/types'

const props = defineProps<{
  product: MerchProduct
}>()

const { addToCart } = useShopify()
const { trackEvent } = useAnalytics()

const selectedVariantIndex = ref(0)
const justAdded = ref(false)

const selectedVariant = computed(() =>
  props.product.variants[selectedVariantIndex.value] || props.product.variants[0]
)

const displayImage = computed(() =>
  selectedVariant.value?.image || props.product.images[0] || null
)

const hasMultipleVariants = computed(() =>
  props.product.variants.length > 1
)

const formattedPrice = computed(() => {
  const min = props.product.priceRange.min
  const max = props.product.priceRange.max
  const currency = props.product.priceRange.currencyCode

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  })

  if (min === max) return formatter.format(parseFloat(min))
  return `${formatter.format(parseFloat(min))} – ${formatter.format(parseFloat(max))}`
})

function handleAddToCart() {
  if (!selectedVariant.value?.available) return

  addToCart(props.product, selectedVariant.value)
  justAdded.value = true
  setTimeout(() => { justAdded.value = false }, 1500)

  trackEvent('merch_add_to_cart', {
    product_id: props.product.id,
    product_title: props.product.title,
    variant_id: selectedVariant.value.id,
    variant_title: selectedVariant.value.title,
    price: selectedVariant.value.price,
    sign_slug: props.product.signSlug,
  })
}
</script>

<template>
  <div class="glass rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:translate-y-[-2px] hover:border-[rgba(var(--el-glow-rgb),0.3)]">
    <!-- Product Image -->
    <div class="relative aspect-square bg-ash-900/50 overflow-hidden">
      <img
        v-if="displayImage"
        :src="displayImage.url"
        :alt="displayImage.altText || product.title"
        :width="displayImage.width"
        :height="displayImage.height"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        loading="lazy"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-ash-600"
      >
        <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      <!-- Sign badge -->
      <span
        v-if="product.signSlug"
        class="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-lg bg-[rgba(var(--el-glow-rgb),0.2)] text-[var(--el-accent)] backdrop-blur-sm border border-[rgba(var(--el-glow-rgb),0.2)]"
      >
        {{ product.signSlug.replace('-', ' ') }}
      </span>
    </div>

    <!-- Product Info -->
    <div class="p-4 flex flex-col flex-1">
      <h3 class="font-display font-bold text-ash-100 text-sm leading-tight mb-1 line-clamp-2">
        {{ product.title }}
      </h3>

      <p class="text-ash-400 text-xs mb-3 line-clamp-2 flex-1">
        {{ product.description }}
      </p>

      <!-- Price -->
      <p class="text-[var(--el-accent)] font-bold text-lg mb-3">
        {{ formattedPrice }}
      </p>

      <!-- Variant Selector -->
      <div v-if="hasMultipleVariants" class="mb-3">
        <select
          v-model="selectedVariantIndex"
          class="w-full bg-ash-900/80 border border-ash-700 rounded-lg px-3 py-2 text-sm text-ash-200 focus:border-[var(--el-primary)] focus:outline-none transition-colors"
        >
          <option
            v-for="(variant, index) in product.variants"
            :key="variant.id"
            :value="index"
            :disabled="!variant.available"
          >
            {{ variant.title }}{{ !variant.available ? ' (Sold out)' : '' }}
          </option>
        </select>
      </div>

      <!-- Add to Cart Button -->
      <button
        :disabled="!selectedVariant?.available"
        class="btn-element text-sm py-2.5 w-full text-center transition-all duration-300"
        :class="{
          'opacity-50 cursor-not-allowed': !selectedVariant?.available,
          '!bg-green-600': justAdded,
        }"
        @click="handleAddToCart"
      >
        <template v-if="justAdded">Added!</template>
        <template v-else-if="!selectedVariant?.available">Sold Out</template>
        <template v-else>Add to Cart</template>
      </button>
    </div>
  </div>
</template>
