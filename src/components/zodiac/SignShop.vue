<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { generateShopProducts } from '@/lib/sign-shop'
import { getAffiliateUrl } from '@/lib/affiliate-config'
import { useAnalytics } from '@/composables/useAnalytics'
import type { SignContentV2 } from '@/types'

const props = defineProps<{
  content: SignContentV2
}>()

const { trackAffiliateClick, trackAffiliateImpression } = useAnalytics()

const categories = computed(() => generateShopProducts(props.content))

// Intersection observer for impression tracking (fire once per mount)
let observer: IntersectionObserver | null = null
const shopRef = ref<HTMLElement | null>(null)
let impressionFired = false

onMounted(() => {
  if (categories.value.length === 0) return

  observer = new IntersectionObserver(
    (entries) => {
      if (impressionFired) return
      for (const entry of entries) {
        if (entry.isIntersecting) {
          impressionFired = true
          trackAffiliateImpression('amazon', 'shop')
          observer?.disconnect()
          break
        }
      }
    },
    { threshold: 0.1 },
  )

  if (shopRef.value) observer.observe(shopRef.value)
})

onUnmounted(() => {
  observer?.disconnect()
  observer = null
})

function handleClick(category: string) {
  trackAffiliateClick('amazon', category, 'shop')
}
</script>

<template>
  <div v-if="categories.length > 0" ref="shopRef">
    <!-- Intro text -->
    <p class="text-ash-400 mb-8">
      Products hand-picked for {{ content.profile.name }} signs based on your lucky attributes,
      element, and wellness profile.
    </p>

    <!-- Product categories -->
    <section v-for="cat in categories" :key="cat.title" class="mb-10">
      <!-- Category header -->
      <h3 class="text-lg font-display font-bold text-ash-200 mb-4">
        <span class="mr-2">{{ cat.icon }}</span>{{ cat.title }}
      </h3>

      <!-- Product grid: 1-col mobile, 2-col sm, 3-col lg -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="product in cat.products"
          :key="product.id"
          class="glass rounded-xl p-4 flex flex-col"
        >
          <p class="font-bold text-[var(--el-accent)] text-sm">{{ product.name }}</p>
          <p class="text-ash-400 text-xs mt-1 flex-1">{{ product.description }}</p>
          <a
            :href="getAffiliateUrl(product)"
            target="_blank"
            rel="noopener sponsored"
            class="btn-element text-xs px-3 py-1.5 mt-3 text-center inline-block"
            @click="handleClick(product.category)"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </section>

    <!-- Affiliate disclaimer -->
    <p class="text-ash-600 text-xs mt-6">
      Affiliate links &mdash; we may earn a commission at no extra cost to you.
    </p>
  </div>
</template>
