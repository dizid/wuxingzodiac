<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { generateShopProducts } from '@/lib/sign-shop'
import { getAffiliateUrl } from '@/lib/affiliate-config'
import { useShopify } from '@/composables/useShopify'
import { useAnalytics } from '@/composables/useAnalytics'
import MerchProductCard from '@/components/shop/MerchProductCard.vue'
import type { SignContentV2 } from '@/types'

const props = defineProps<{
  content: SignContentV2
}>()

const { trackAffiliateClick, trackAffiliateImpression, trackEvent } = useAnalytics()
const { fetchProducts, getProductsBySign, loaded: shopifyLoaded } = useShopify()

// Existing affiliate categories
const affiliateCategories = computed(() => generateShopProducts(props.content))

// Merch products for this specific sign
const merchProducts = computed(() =>
  getProductsBySign(props.content.slug)
)

const hasMerch = computed(() => merchProducts.value.length > 0)

// Fetch Shopify products on mount
onMounted(() => {
  fetchProducts()
})

// Intersection observer for impression tracking (fire once per mount)
let observer: IntersectionObserver | null = null
const shopRef = ref<HTMLElement | null>(null)
let impressionFired = false

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (impressionFired) return
      for (const entry of entries) {
        if (entry.isIntersecting) {
          impressionFired = true
          trackAffiliateImpression('amazon', 'shop')
          if (hasMerch.value) {
            trackEvent('merch_impression', {
              sign_slug: props.content.slug,
              product_count: merchProducts.value.length,
            })
          }
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

function handleAffiliateClick(category: string) {
  trackAffiliateClick('amazon', category, 'shop')
}
</script>

<template>
  <div ref="shopRef">
    <!-- ========================================== -->
    <!-- MERCH SECTION (Shopify POD products) -->
    <!-- ========================================== -->
    <section v-if="hasMerch" class="mb-10">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-display font-bold text-ash-100">
          <span class="element-text">{{ content.profile.name }}</span> Merch
        </h3>
        <RouterLink
          :to="`/shop/${content.slug}`"
          class="text-xs text-[var(--el-accent)] hover:text-[var(--el-primary)] transition-colors"
        >
          View all →
        </RouterLink>
      </div>

      <p class="text-ash-400 text-sm mb-6">
        Exclusive {{ content.profile.name }} designs on premium products. Printed on demand, shipped worldwide.
      </p>

      <!-- Merch product grid (max 4 on sign page) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <MerchProductCard
          v-for="product in merchProducts.slice(0, 4)"
          :key="product.id"
          :product="product"
        />
      </div>

      <div v-if="merchProducts.length > 4" class="mt-4 text-center">
        <RouterLink
          :to="`/shop/${content.slug}`"
          class="btn-element text-sm inline-block"
        >
          See all {{ merchProducts.length }} products
        </RouterLink>
      </div>
    </section>

    <!-- ========================================== -->
    <!-- "COMING SOON" MERCH TEASER (no products yet) -->
    <!-- ========================================== -->
    <section
      v-else-if="shopifyLoaded"
      class="mb-10 glass rounded-xl p-6 text-center"
    >
      <div class="text-3xl mb-2">👕</div>
      <h3 class="font-display font-bold text-ash-200 mb-1">
        {{ content.profile.name }} Merch Coming Soon
      </h3>
      <p class="text-ash-400 text-sm max-w-md mx-auto">
        Beautiful {{ content.profile.name }} zodiac designs on t-shirts, hoodies, and more.
        Check out the <RouterLink to="/shop" class="text-[var(--el-accent)] underline">main shop</RouterLink> for available merch.
      </p>
    </section>

    <!-- ========================================== -->
    <!-- AFFILIATE PRODUCTS (existing Amazon links) -->
    <!-- ========================================== -->
    <template v-if="affiliateCategories.length > 0">
      <p class="text-ash-400 mb-8">
        Products hand-picked for {{ content.profile.name }} signs based on your lucky attributes,
        element, and wellness profile.
      </p>

      <section v-for="cat in affiliateCategories" :key="cat.title" class="mb-10">
        <h3 class="text-lg font-display font-bold text-ash-200 mb-4">
          <span class="mr-2">{{ cat.icon }}</span>{{ cat.title }}
        </h3>

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
              @click="handleAffiliateClick(product.category)"
            >
              View on Amazon
            </a>
          </div>
        </div>
      </section>

      <p class="text-ash-600 text-xs mt-6">
        Affiliate links &mdash; we may earn a commission at no extra cost to you.
      </p>
    </template>
  </div>
</template>
