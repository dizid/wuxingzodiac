<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import type { MerchProduct, ShopifyVariant } from '@/types/merch'
import { useShopify } from '@/composables/useShopify'
import { useAnalytics } from '@/composables/useAnalytics'
import SizeGuide from './SizeGuide.vue'

const LOW_STOCK_THRESHOLD = 5

const props = defineProps<{
  product: MerchProduct | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { addToCart } = useShopify()
const { trackViewItem } = useAnalytics()

const selectedImageIndex = ref(0)
const selectedVariant = ref<ShopifyVariant | null>(null)
const added = ref(false)

// ── Image zoom state ───────────────────────
const zoomed = ref(false)
const zoomOrigin = ref('center center')
const lightboxOpen = ref(false)
const isTouchDevice = ref(false)

onMounted(() => {
  isTouchDevice.value = window.matchMedia('(hover: none)').matches
})

// ── Color swatch mapping ───────────────────
const COLOR_SWATCH_MAP: Record<string, string> = {
  'Black': '#171717',
  'White': '#f5f5f5',
  'Cream': '#fef3c7',
  'Forest Green': '#22c55e',
  'Crimson': '#ef4444',
  'Amber': '#d97706',
  'Silver': '#94a3b8',
  'Ocean Blue': '#3b82f6',
}

// Reset state when product changes
const currentProduct = computed(() => {
  if (props.product) {
    selectedImageIndex.value = 0
    selectedVariant.value = props.product.variants[0] || null
    added.value = false
    zoomed.value = false
    lightboxOpen.value = false
  }
  return props.product
})

// Fire view_item when product modal opens
watch(() => props.product, (product) => {
  if (product) {
    trackViewItem({
      id: product.id,
      title: product.title,
      price: product.price,
      element: product.element || undefined,
      productType: product.productType || undefined,
    })
  }
})

const images = computed(() => currentProduct.value?.images || [])

// Extract unique option values (e.g., sizes, colors)
const optionGroups = computed(() => {
  if (!currentProduct.value) return []
  const groups: Map<string, Set<string>> = new Map()

  for (const variant of currentProduct.value.variants) {
    for (const opt of variant.selectedOptions) {
      if (!groups.has(opt.name)) groups.set(opt.name, new Set())
      groups.get(opt.name)!.add(opt.value)
    }
  }

  return Array.from(groups.entries()).map(([name, values]) => ({
    name,
    values: Array.from(values),
  }))
})

function isColorOption(groupName: string): boolean {
  return groupName.toLowerCase() === 'color' || groupName.toLowerCase() === 'colour'
}

function isSizeOption(groupName: string): boolean {
  return groupName.toLowerCase() === 'size'
}

function selectVariant(optionName: string, optionValue: string) {
  if (!currentProduct.value) return

  // Find variant matching this option + currently selected other options
  const match = currentProduct.value.variants.find(v =>
    v.selectedOptions.some(o => o.name === optionName && o.value === optionValue),
  )
  if (match) {
    selectedVariant.value = match
  }
}

function isOptionSelected(optionName: string, optionValue: string): boolean {
  if (!selectedVariant.value) return false
  return selectedVariant.value.selectedOptions.some(
    o => o.name === optionName && o.value === optionValue,
  )
}

function isVariantAvailable(optionName: string, optionValue: string): boolean {
  if (!currentProduct.value) return false
  return currentProduct.value.variants.some(v =>
    v.available && v.selectedOptions.some(o => o.name === optionName && o.value === optionValue),
  )
}

function formatPrice(amount: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(amount))
}

// ── Image zoom handlers ────────────────────
function handleImageHover(event: MouseEvent) {
  if (isTouchDevice.value) return
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  zoomOrigin.value = `${x}% ${y}%`
}

function handleImageClick() {
  lightboxOpen.value = true
  zoomed.value = false
}

function closeLightbox() {
  lightboxOpen.value = false
}

// ── Stock status ───────────────────────────
const selectedVariantLowStock = computed(() => {
  const qty = selectedVariant.value?.quantityAvailable
  if (qty == null) return false
  return qty > 0 && qty <= LOW_STOCK_THRESHOLD
})

function handleAddToCart() {
  if (!currentProduct.value || !selectedVariant.value) return
  addToCart(currentProduct.value, {
    id: selectedVariant.value.id,
    title: selectedVariant.value.title,
    price: selectedVariant.value.price,
  })
  added.value = true
  setTimeout(() => { added.value = false }, 2000)
}

function handleClose() {
  lightboxOpen.value = false
  emit('close')
}
</script>

<template>
  <teleport to="body">
    <!-- Backdrop -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="currentProduct"
        class="fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm"
        @click="handleClose"
      />
    </transition>

    <!-- Modal -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="currentProduct"
        class="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[71] md:w-full md:max-w-2xl md:max-h-[85vh] glass-strong rounded-2xl overflow-hidden flex flex-col"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-ash-900/80 text-ash-300 hover:text-ash-100 transition-colors"
          aria-label="Close"
          @click="handleClose"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex-1 overflow-y-auto">
          <div class="md:flex">
            <!-- Image Gallery -->
            <div class="md:w-1/2">
              <!-- Main image with zoom -->
              <div
                class="aspect-square bg-ash-900/50 overflow-hidden relative"
                :class="!isTouchDevice ? 'cursor-zoom-in' : ''"
                @mousemove="handleImageHover"
                @mouseenter="zoomed = true"
                @mouseleave="zoomed = false"
                @click="handleImageClick"
              >
                <img
                  v-if="images[selectedImageIndex]"
                  :src="images[selectedImageIndex]!.url"
                  :alt="images[selectedImageIndex]!.altText || currentProduct.title"
                  class="w-full h-full object-cover transition-transform duration-200"
                  :style="zoomed && !isTouchDevice ? {
                    transform: 'scale(2)',
                    transformOrigin: zoomOrigin,
                  } : {}"
                />
              </div>

              <!-- Thumbnails -->
              <div v-if="images.length > 1" class="flex gap-2 p-3 overflow-x-auto">
                <button
                  v-for="(img, i) in images"
                  :key="i"
                  class="w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors shrink-0"
                  :class="i === selectedImageIndex ? 'border-[var(--el-accent)]' : 'border-transparent opacity-60 hover:opacity-100'"
                  @click="selectedImageIndex = i"
                >
                  <img :src="img.url" :alt="img.altText || ''" class="w-full h-full object-cover" />
                </button>
              </div>
            </div>

            <!-- Product Details -->
            <div class="md:w-1/2 p-6 space-y-5">
              <!-- Element badge -->
              <span
                v-if="currentProduct.element"
                class="inline-block text-xs font-medium px-2 py-1 rounded-full capitalize"
                style="background: rgba(var(--el-glow-rgb), 0.2); color: var(--el-accent);"
              >
                {{ currentProduct.element }} Element
              </span>

              <h2 class="font-display text-2xl font-bold text-ash-100">
                {{ currentProduct.title }}
              </h2>

              <p class="element-text font-bold text-2xl">
                {{ selectedVariant ? formatPrice(selectedVariant.price) : formatPrice(currentProduct.price.toString()) }}
              </p>

              <p class="text-ash-400 text-sm leading-relaxed">
                {{ currentProduct.description }}
              </p>

              <!-- Variant Options -->
              <div v-for="group in optionGroups" :key="group.name" class="space-y-2">
                <label class="text-ash-400 text-xs font-medium uppercase tracking-wider">{{ group.name }}</label>

                <!-- Color swatches -->
                <div v-if="isColorOption(group.name)" class="flex flex-wrap gap-2.5">
                  <button
                    v-for="value in group.values"
                    :key="value"
                    class="w-8 h-8 rounded-full border-2 transition-all relative"
                    :class="[
                      isOptionSelected(group.name, value)
                        ? 'border-[var(--el-accent)] ring-2 ring-[var(--el-accent)] ring-offset-2 ring-offset-ash-900'
                        : 'border-ash-600 hover:border-ash-400',
                      !isVariantAvailable(group.name, value) && 'opacity-40',
                    ]"
                    :style="{ backgroundColor: COLOR_SWATCH_MAP[value] || '#525252' }"
                    :title="value"
                    :aria-label="value"
                    :disabled="!isVariantAvailable(group.name, value)"
                    @click="selectVariant(group.name, value)"
                  >
                    <!-- Checkmark for selected -->
                    <svg
                      v-if="isOptionSelected(group.name, value)"
                      class="absolute inset-0 m-auto w-4 h-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                      :class="value === 'White' || value === 'Cream' ? 'text-ash-800' : 'text-white'"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <!-- Strikethrough for unavailable -->
                    <span v-if="!isVariantAvailable(group.name, value)" class="absolute inset-0 flex items-center justify-center">
                      <span class="w-full h-0.5 bg-red-500 rotate-45 absolute" />
                    </span>
                  </button>
                </div>

                <!-- Size pills -->
                <div v-else-if="isSizeOption(group.name)" class="flex flex-wrap gap-2">
                  <button
                    v-for="value in group.values"
                    :key="value"
                    class="min-w-[2.5rem] px-3 py-1.5 text-sm rounded-full border transition-all"
                    :class="[
                      isOptionSelected(group.name, value)
                        ? 'border-[var(--el-accent)] text-[var(--el-accent)] bg-[rgba(var(--el-glow-rgb),0.1)]'
                        : 'border-ash-700 text-ash-300 hover:border-ash-500',
                      !isVariantAvailable(group.name, value) && 'opacity-40 line-through cursor-not-allowed',
                    ]"
                    :disabled="!isVariantAvailable(group.name, value)"
                    @click="selectVariant(group.name, value)"
                  >
                    {{ value }}
                  </button>
                </div>

                <!-- Default option buttons (fallback) -->
                <div v-else class="flex flex-wrap gap-2">
                  <button
                    v-for="value in group.values"
                    :key="value"
                    class="px-3 py-1.5 text-sm rounded-lg border transition-all"
                    :class="isOptionSelected(group.name, value)
                      ? 'border-[var(--el-accent)] text-[var(--el-accent)] bg-[rgba(var(--el-glow-rgb),0.1)]'
                      : 'border-ash-700 text-ash-300 hover:border-ash-500'"
                    @click="selectVariant(group.name, value)"
                  >
                    {{ value }}
                  </button>
                </div>
              </div>

              <!-- Size guide + stock warning row -->
              <div class="flex items-center justify-between">
                <SizeGuide :product-type="currentProduct.productType" />
                <p
                  v-if="selectedVariantLowStock"
                  class="text-red-400 text-xs font-medium animate-pulse"
                >
                  Only {{ selectedVariant!.quantityAvailable }} left in stock
                </p>
              </div>

              <!-- Add to Cart -->
              <button
                class="btn-element w-full text-center py-3 text-lg"
                :disabled="!selectedVariant?.available"
                @click="handleAddToCart"
              >
                <span v-if="added">Added!</span>
                <span v-else-if="!selectedVariant?.available">Sold Out</span>
                <span v-else>Add to Cart</span>
              </button>

              <!-- Trust signals -->
              <div class="flex items-center justify-center gap-4 text-ash-500 text-xs">
                <span>Premium Print-on-Demand</span>
                <span>&middot;</span>
                <span>Ships Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- Fullscreen lightbox -->
    <transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightboxOpen && images[selectedImageIndex]"
        class="fixed inset-0 z-[72] bg-black/95 flex items-center justify-center cursor-zoom-out"
        @click="closeLightbox"
      >
        <img
          :src="images[selectedImageIndex]!.url"
          :alt="images[selectedImageIndex]!.altText || ''"
          class="max-h-[90vh] max-w-[90vw] object-contain"
        />
        <button
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-ash-900/80 text-ash-300 hover:text-ash-100 transition-colors"
          aria-label="Close zoom"
          @click.stop="closeLightbox"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition>
  </teleport>
</template>
