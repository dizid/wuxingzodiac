<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProfileBySlug } from '@/lib/sign-content/profiles'
import { loadSignContent } from '@/lib/sign-content'
import { getVisualData } from '@/lib/sign-visual-data'
import { useElementTheme } from '@/composables/useElementTheme'
import { useSignSeoReactive } from '@/composables/useSignSeo'
import type { SignContentV2 } from '@/types'

// Section components
import SignHero from '@/components/zodiac/SignHero.vue'
import SignAtAGlance from '@/components/zodiac/SignAtAGlance.vue'
import ElementPentagonChart from '@/components/zodiac/ElementPentagonChart.vue'
import SignPersonalityV2 from '@/components/zodiac/SignPersonalityV2.vue'
import SignPowerLevels from '@/components/zodiac/SignPowerLevels.vue'
import SignShadow from '@/components/zodiac/SignShadow.vue'
import MonetizationSlot from '@/components/zodiac/MonetizationSlot.vue'
import SignRelationships from '@/components/zodiac/SignRelationships.vue'
import SignElementBalance from '@/components/zodiac/SignElementBalance.vue'
import WuXingCycleDiagram from '@/components/zodiac/WuXingCycleDiagram.vue'
import SignMatchesV2 from '@/components/zodiac/SignMatchesV2.vue'
import SignSiblingNav from '@/components/zodiac/SignSiblingNav.vue'
import SignShop from '@/components/zodiac/SignShop.vue'
import BlueprintCTA from '@/components/zodiac/BlueprintCTA.vue'
import MerchSignSection from '@/components/merch/MerchSignSection.vue'
import MerchCartDrawer from '@/components/merch/MerchCartDrawer.vue'
import PageCTA from '@/components/ui/PageCTA.vue'

const route = useRoute()
const router = useRouter()
const slug = computed(() => route.params.slug as string)
const profile = computed(() => getProfileBySlug(slug.value))
const content = ref<SignContentV2 | null>(null)
const loading = ref(true)
const error = ref(false)

// Visual data (element percentages + trait scores)
const visualData = computed(() => getVisualData(slug.value))

// Set element theme via composable (applies data-element to document root)
const elementRef = computed(() => profile.value?.element ?? null)
useElementTheme(elementRef)

// Load full sign content
async function loadContent(signSlug: string) {
  loading.value = true
  error.value = false
  content.value = null
  try {
    content.value = await loadSignContent(signSlug)
  } catch {
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadContent(slug.value)
})

// SEO meta tags, OG, JSON-LD — reactive, called once in setup, auto-updates
useSignSeoReactive(profile, content)

// Reload content when navigating between signs
watch(slug, (newSlug) => {
  loadContent(newSlug)
})

// Navigate to element page from Wu Xing diagram
function goToElement(element: string) {
  router.push(`/zodiac/element/${element}`)
}
</script>

<template>
  <div
    class="min-h-screen"
    :data-element="profile?.element"
  >
    <!-- Hero (with badge embedded inside) -->
    <SignHero v-if="profile" :profile="profile" :archetype="content?.archetype" />

    <!-- Not found state -->
    <div v-if="!profile" class="min-h-screen flex items-center justify-center">
      <div class="glass rounded-xl p-8 text-center max-w-md">
        <h1 class="text-2xl font-display font-bold text-ash-200 mb-2">Sign Not Found</h1>
        <p class="text-ash-400">The zodiac sign "{{ slug }}" could not be found.</p>
      </div>
    </div>

    <!-- Content -->
    <template v-if="profile">
      <main class="max-w-3xl mx-auto px-4 py-8 space-y-8">
        <!-- Loading state -->
        <div v-if="loading" class="space-y-4">
          <div v-for="i in 3" :key="i" class="glass rounded-xl p-6 animate-pulse">
            <div class="h-4 bg-ash-700 rounded w-3/4 mb-3" />
            <div class="h-3 bg-ash-800 rounded w-full mb-2" />
            <div class="h-3 bg-ash-800 rounded w-5/6" />
          </div>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="glass rounded-xl p-8 text-center">
          <p class="text-ash-400 text-lg mb-2">Failed to load content</p>
          <button
            class="btn-element mt-4"
            @click="loadContent(slug)"
          >
            Try Again
          </button>
        </div>

        <!-- V2 single-scroll layout with visual data -->
        <template v-else-if="content">
          <SignAtAGlance :data="content.atAGlance" />

          <!-- Element Pentagon Chart -->
          <ElementPentagonChart
            v-if="visualData"
            :percentages="visualData.elementPercentages"
            :element="profile.element"
            size="md"
          />

          <SignPersonalityV2 :data="content.personality" />

          <!-- Power Level Progress Bars -->
          <SignPowerLevels
            v-if="visualData"
            :traits="visualData.traitScores"
          />

          <SignShadow :data="content.shadow" />
          <MonetizationSlot section="personality" />
          <SignRelationships :data="content.relationships" />
          <MonetizationSlot section="love" />

          <!-- Element Balance + Wu Xing Cycle Diagram -->
          <SignElementBalance :data="content.elementBalance" />
          <MonetizationSlot section="health" />
          <WuXingCycleDiagram
            :active-element="profile.element"
            :interactive="true"
            size="md"
            @navigate="goToElement"
          />

          <SignMatchesV2 :matches="content.matches" :slug="slug" />

          <!-- Blueprint PDF Upsell -->
          <BlueprintCTA v-if="profile" :profile="profile" />

          <!-- Sibling Navigation (same animal/element) -->
          <SignSiblingNav
            :element="profile.element"
            :animal="profile.animal"
            :current-slug="slug"
          />

          <!-- Merch (own products, higher margin — above affiliate shop) -->
          <MerchSignSection :element="profile.element" :animal="profile.animal" />

          <SignShop :content="content" />

          <!-- CTA Funnel -->
          <PageCTA
            :primary="{ label: 'Check Your Compatibility', to: '/compatibility' }"
            :secondary="{ label: 'Find Your Sign', to: '/calculator' }"
          />
        </template>
      </main>
    </template>

    <!-- Cart Drawer (global, teleported to body) -->
    <MerchCartDrawer />
  </div>
</template>
