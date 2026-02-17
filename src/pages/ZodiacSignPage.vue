<script setup lang="ts">
import { ref, computed, onMounted, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getProfileBySlug } from '@/lib/sign-content/profiles'
import { loadSignContent } from '@/lib/sign-content'
import { useElementTheme } from '@/composables/useElementTheme'
import { useSignSeo } from '@/composables/useSignSeo'
import type { SignContent } from '@/types'

// Section components
import SignHero from '@/components/zodiac/SignHero.vue'
import SignNavTabs from '@/components/zodiac/SignNavTabs.vue'
import SignTraits from '@/components/zodiac/SignTraits.vue'
import SignCompatibility from '@/components/zodiac/SignCompatibility.vue'
import SignCareer from '@/components/zodiac/SignCareer.vue'
import SignLove from '@/components/zodiac/SignLove.vue'
import SignHealth from '@/components/zodiac/SignHealth.vue'
import SignLucky from '@/components/zodiac/SignLucky.vue'
import SignFamous from '@/components/zodiac/SignFamous.vue'
import SignCulture from '@/components/zodiac/SignCulture.vue'
import SignHoroscope from '@/components/zodiac/SignHoroscope.vue'
import MonetizationSlot from '@/components/zodiac/MonetizationSlot.vue'
import SignShop from '@/components/zodiac/SignShop.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const profile = computed(() => getProfileBySlug(slug.value))
const content = ref<SignContent | null>(null)
const loading = ref(true)
const error = ref(false)
const activeSection = ref('personality')

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

// SEO meta tags, OG, JSON-LD
watchEffect(() => {
  if (profile.value) {
    useSignSeo(profile.value, content.value)
  }
})

// Reload content when navigating between signs
watch(slug, (newSlug) => {
  activeSection.value = 'personality'
  loadContent(newSlug)
})

// Section title for the active tab
const sectionTitle = computed(() => {
  const titles: Record<string, string> = {
    personality: 'Personality & Traits',
    compatibility: 'Compatibility',
    career: 'Career & Finance',
    love: 'Love & Relationships',
    health: 'Health & Wellness',
    lucky: 'Lucky Elements',
    famous: 'Famous People',
    culture: 'Culture & Mythology',
    horoscope: 'Horoscope',
    shop: 'Curated for Your Sign',
  }
  return titles[activeSection.value] ?? ''
})
</script>

<template>
  <div
    class="min-h-screen"
    :data-element="profile?.element"
  >
    <!-- Hero -->
    <SignHero v-if="profile" :profile="profile" />

    <!-- Not found state -->
    <div v-if="!profile" class="min-h-screen flex items-center justify-center">
      <div class="glass rounded-xl p-8 text-center max-w-md">
        <h1 class="text-2xl font-display font-bold text-ash-200 mb-2">Sign Not Found</h1>
        <p class="text-ash-400">The zodiac sign "{{ slug }}" could not be found.</p>
      </div>
    </div>

    <!-- Tab navigation + content -->
    <template v-if="profile">
      <SignNavTabs v-model:activeSection="activeSection" />

      <main class="max-w-4xl mx-auto px-4 py-8">
        <!-- Section heading -->
        <h2 class="element-text font-display text-2xl md:text-3xl font-bold mb-6">
          {{ sectionTitle }}
        </h2>

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

        <!-- Section content -->
        <template v-else-if="content">
          <SignTraits
            v-if="activeSection === 'personality'"
            :personality="content.personality"
          />
          <SignCompatibility
            v-if="activeSection === 'compatibility'"
            :compatibility="content.compatibility"
            :slug="slug"
          />
          <SignCareer
            v-if="activeSection === 'career'"
            :career="content.career"
          />
          <MonetizationSlot v-if="activeSection === 'career'" section="career" />
          <SignLove
            v-if="activeSection === 'love'"
            :love="content.love"
          />
          <MonetizationSlot v-if="activeSection === 'love'" section="love" />
          <SignHealth
            v-if="activeSection === 'health'"
            :health="content.health"
          />
          <MonetizationSlot v-if="activeSection === 'health'" section="health" />
          <SignLucky
            v-if="activeSection === 'lucky'"
            :lucky="content.lucky"
          />
          <MonetizationSlot v-if="activeSection === 'lucky'" section="lucky" />
          <SignFamous
            v-if="activeSection === 'famous'"
            :famous="content.famous"
          />
          <SignCulture
            v-if="activeSection === 'culture'"
            :culture="content.culture"
          />
          <SignHoroscope
            v-if="activeSection === 'horoscope'"
            :horoscope="content.horoscope"
          />
          <SignShop
            v-if="activeSection === 'shop'"
            :content="content"
          />
        </template>
      </main>
    </template>
  </div>
</template>
