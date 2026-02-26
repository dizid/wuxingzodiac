<script setup lang="ts">
import { ref } from 'vue'
import type { MerchProduct } from '@/types/merch'
import { useShopify } from '@/composables/useShopify'

const LOW_STOCK_THRESHOLD = 5

const props = defineProps<{
  product: MerchProduct
  silent?: boolean // When true, don't open cart drawer on add
}>()

const emit = defineEmits<{
  detail: [product: MerchProduct]
}>()

const { addToCart } = useShopify()

const addedLabel = ref<string | null>(null)

function formatPrice(price: number, currency: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price)
}

function handleQuickAdd() {
  const variant = props.product.variants[0]
  addToCart(props.product, undefined, { silent: props.silent })

  // Show confirmation with variant info
  const label = variant?.title && variant.title !== 'Default Title' ? variant.title : ''
  addedLabel.value = label ? `Added! (${label})` : 'Added!'
  setTimeout(() => { addedLabel.value = null }, 2000)
}

function handleDetail() {
  emit('detail', props.product)
}
</script>

<template>
  <div
    class="glass rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg hover:border-[rgba(var(--el-glow-rgb),0.3)] group cursor-pointer"
    @click="handleDetail"
  >
    <!-- Product Image -->
    <div class="relative aspect-square bg-ash-900/50 overflow-hidden">
      <img
        v-if="product.image"
        :src="product.image.url"
        :alt="product.image.altText || product.title"
        :width="product.image.width"
        :height="product.image.height"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center text-ash-600">
        <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        </svg>
      </div>

      <!-- Element badge -->
      <span
        v-if="product.element"
        class="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full capitalize"
        style="background: rgba(var(--el-glow-rgb), 0.2); color: var(--el-accent);"
      >
        {{ product.element }}
      </span>

      <!-- Low stock urgency badge -->
      <span
        v-if="product.totalInventory != null && product.totalInventory > 0 && product.totalInventory <= LOW_STOCK_THRESHOLD"
        class="absolute bottom-3 left-3 text-xs font-medium px-2 py-1 rounded-full bg-red-900/80 text-red-300 backdrop-blur-sm"
      >
        Only {{ product.totalInventory }} left
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

      <div class="flex items-center justify-between">
        <span class="element-text font-bold text-lg">
          {{ formatPrice(product.price, product.currency) }}
        </span>
        <button
          class="px-3 py-1.5 text-xs font-medium rounded-lg transition-all"
          :style="addedLabel
            ? 'background: rgba(34,197,94,0.15); color: #4ade80;'
            : 'background: rgba(var(--el-glow-rgb), 0.15); color: var(--el-accent);'"
          @click.stop="handleQuickAdd"
        >
          {{ addedLabel || 'Add to Cart' }}
        </button>
      </div>
    </div>
  </div>
</template>
