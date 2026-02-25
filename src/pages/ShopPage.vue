<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { usePageSeo } from '@/composables/useSignSeo'
import { useElementTheme } from '@/composables/useElementTheme'
import MerchGrid from '@/components/shop/MerchGrid.vue'
import MerchCartDrawer from '@/components/shop/MerchCartDrawer.vue'

const route = useRoute()

// If visiting /shop/:slug, pre-filter by sign
const signSlug = computed(() => (route.params.slug as string) || '')
const elementFromSlug = computed(() => {
  if (!signSlug.value) return null
  const [el] = signSlug.value.split('-')
  return el || null
})

// Format sign name for display
function formatSignName(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

// Apply element theme if on a sign-specific shop page
const elementRef = computed(() => elementFromSlug.value as 'wood' | 'fire' | 'earth' | 'metal' | 'water' | null)
useElementTheme(elementRef)

// SEO
const title = computed(() =>
  signSlug.value
    ? `${formatSignName(signSlug.value)} Merch — Zodiac T-Shirts & Gifts`
    : 'Zodiac Merch Shop — Chinese Zodiac T-Shirts, Hoodies & Gifts'
)
const description = computed(() =>
  signSlug.value
    ? `Shop exclusive ${formatSignName(signSlug.value)} merchandise. Beautiful Asian zodiac designs on t-shirts, hoodies, mugs, and more. Print-on-demand, shipped worldwide.`
    : 'Shop beautiful Chinese zodiac merchandise. 60 unique element+animal designs on t-shirts, hoodies, mugs, and more. Find your sign and wear your zodiac identity.'
)

usePageSeo(
  title.value,
  description.value,
  signSlug.value ? `/shop/${signSlug.value}` : '/shop',
)
</script>

<template>
  <div class="min-h-screen" :data-element="elementFromSlug">
    <!-- Hero Section -->
    <section class="relative py-16 px-4 text-center gradient-element-bg">
      <div class="max-w-3xl mx-auto">
        <!-- Breadcrumb -->
        <nav class="flex justify-center gap-2 text-sm text-ash-500 mb-6">
          <RouterLink to="/" class="hover:text-ash-300 transition-colors">Home</RouterLink>
          <span>/</span>
          <template v-if="signSlug">
            <RouterLink to="/shop" class="hover:text-ash-300 transition-colors">Shop</RouterLink>
            <span>/</span>
            <span class="text-[var(--el-accent)]">{{ formatSignName(signSlug) }}</span>
          </template>
          <template v-else>
            <span class="text-ash-300">Shop</span>
          </template>
        </nav>

        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
          <template v-if="signSlug">
            <span class="element-text">{{ formatSignName(signSlug) }}</span>
            <span class="text-ash-200"> Merch</span>
          </template>
          <template v-else>
            <span class="multi-element-text">Zodiac</span>
            <span class="text-ash-200"> Merch Shop</span>
          </template>
        </h1>

        <p class="text-ash-400 text-lg max-w-xl mx-auto">
          <template v-if="signSlug">
            Exclusive {{ formatSignName(signSlug) }} designs on premium print-on-demand products.
            Wear your zodiac identity.
          </template>
          <template v-else>
            Beautiful Asian zodiac designs across all 60 element+animal combinations.
            T-shirts, hoodies, mugs, and more — printed on demand and shipped worldwide.
          </template>
        </p>

        <!-- Quick sign links (only on main shop page) -->
        <div v-if="!signSlug" class="mt-8 flex flex-wrap justify-center gap-2">
          <RouterLink
            to="/shop"
            class="px-3 py-1.5 rounded-lg text-xs font-medium bg-[rgba(var(--el-glow-rgb),0.15)] text-[var(--el-accent)] border border-[rgba(var(--el-glow-rgb),0.2)]"
          >
            All
          </RouterLink>
          <RouterLink
            to="/calculator"
            class="px-3 py-1.5 rounded-lg text-xs font-medium text-ash-400 hover:text-[var(--el-accent)] hover:bg-ash-800/50 border border-ash-700 transition-colors"
          >
            Find Your Sign First →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 py-8">
      <MerchGrid
        :sign-slug="signSlug || undefined"
        :show-filters="!signSlug"
      />

      <!-- Back to sign page link (for sign-specific shop) -->
      <div v-if="signSlug" class="mt-8 text-center">
        <RouterLink
          :to="`/zodiac/${signSlug}`"
          class="text-[var(--el-accent)] hover:text-[var(--el-primary)] text-sm transition-colors"
        >
          ← Back to {{ formatSignName(signSlug) }} profile
        </RouterLink>
      </div>
    </main>

    <MerchCartDrawer />
  </div>
</template>
