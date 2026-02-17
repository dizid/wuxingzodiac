<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getProductsForSection, getAffiliateUrl } from '@/lib/affiliate-config'
import { useAnalytics } from '@/composables/useAnalytics'
import type { AffiliateProduct } from '@/types'

const props = defineProps<{
  section: string
}>()

const { trackAffiliateClick, trackAffiliateImpression } = useAnalytics()

// Pick up to 2 random products for this section
const products = ref<AffiliateProduct[]>([])

function shuffleAndPick(items: AffiliateProduct[], count: number): AffiliateProduct[] {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]!
    shuffled[i] = shuffled[j]!
    shuffled[j] = temp
  }
  return shuffled.slice(0, count)
}

// Intersection observer for impression tracking
let observer: IntersectionObserver | null = null
const slotRef = ref<HTMLElement | null>(null)
let impressionFired = false

onMounted(() => {
  const allProducts = getProductsForSection(props.section)
  products.value = shuffleAndPick(allProducts, 2)

  if (products.value.length === 0) return

  observer = new IntersectionObserver(
    (entries) => {
      if (impressionFired) return
      for (const entry of entries) {
        if (entry.isIntersecting) {
          impressionFired = true
          for (const product of products.value) {
            trackAffiliateImpression(product.program, props.section)
          }
          observer?.disconnect()
          break
        }
      }
    },
    { threshold: 0.3 },
  )

  if (slotRef.value) {
    observer.observe(slotRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})

function handleClick(product: AffiliateProduct) {
  trackAffiliateClick(product.program, product.category, props.section)
}

function ctaLabel(program: string): string {
  if (program === 'keen' || program === 'kasamba') return 'Get Reading'
  return 'View on Amazon'
}
</script>

<template>
  <div v-if="products.length > 0" ref="slotRef" class="mt-6">
    <div class="glass rounded-xl p-5">
      <p class="text-ash-500 text-xs uppercase tracking-wider mb-4">Recommended for you</p>

      <div class="space-y-4">
        <div
          v-for="product in products"
          :key="product.id"
          class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
        >
          <div class="flex-1 min-w-0">
            <p class="font-bold text-[var(--el-accent)]">{{ product.name }}</p>
            <p class="text-ash-400 text-sm mt-0.5">{{ product.description }}</p>
          </div>
          <a
            :href="getAffiliateUrl(product)"
            target="_blank"
            rel="noopener sponsored"
            class="btn-element text-sm px-4 py-2 shrink-0 text-center"
            @click="handleClick(product)"
          >
            {{ ctaLabel(product.program) }}
          </a>
        </div>
      </div>

      <p class="text-ash-600 text-xs mt-4">Affiliate links &mdash; we may earn a commission</p>
    </div>
  </div>
</template>
