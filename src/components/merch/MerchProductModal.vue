<script setup lang="ts">
import { ref, computed } from 'vue'
import type { MerchProduct, ShopifyVariant } from '@/types/merch'
import { useShopify } from '@/composables/useShopify'

const props = defineProps<{
  product: MerchProduct | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { addToCart } = useShopify()

const selectedImageIndex = ref(0)
const selectedVariant = ref<ShopifyVariant | null>(null)
const added = ref(false)

// Reset state when product changes
const currentProduct = computed(() => {
  if (props.product) {
    selectedImageIndex.value = 0
    selectedVariant.value = props.product.variants[0] || null
    added.value = false
  }
  return props.product
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

function formatPrice(amount: string): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(parseFloat(amount))
}

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
              <!-- Main image -->
              <div class="aspect-square bg-ash-900/50">
                <img
                  v-if="images[selectedImageIndex]"
                  :src="images[selectedImageIndex].url"
                  :alt="images[selectedImageIndex].altText || currentProduct.title"
                  class="w-full h-full object-cover"
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

              <!-- Variant Options (sizes, colors) -->
              <div v-for="group in optionGroups" :key="group.name" class="space-y-2">
                <label class="text-ash-400 text-xs font-medium uppercase tracking-wider">{{ group.name }}</label>
                <div class="flex flex-wrap gap-2">
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
  </teleport>
</template>
