<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import { getProfileBySlug, loadSignContent } from '@/lib/sign-content'
import { useElementTheme } from '@/composables/useElementTheme'
import type { SignContentV2, ZodiacElement } from '@/types'
import BlueprintCTA from '@/components/zodiac/BlueprintCTA.vue'

const route = useRoute()
const sign = route.params.sign as string

const profile = getProfileBySlug(sign)!
const content = ref<SignContentV2 | null>(null)
const copied = ref(false)

// Apply element theme
const elementRef = computed<ZodiacElement | null>(() => profile?.element ?? null)
useElementTheme(elementRef)

// Condensed personality: first 3-4 sentences from personality.body
const condensedPersonality = computed(() => {
  if (!content.value?.personality?.body) return ''
  const sentences = content.value.personality.body.split('. ')
  return sentences.slice(0, 4).join('. ') + (sentences.length > 4 ? '.' : '')
})

// SEO meta tags — static for SSG pre-rendering
const siteUrl = 'https://wuxingzodiac.me'
useHead({
  title: `I'm a ${profile.name} — ${profile.tagline}`,
  meta: [
    { name: 'description', content: `Discover the ${profile.name} — ${profile.tagline}. Find your Chinese zodiac sign and element at Wu Xing Zodiac.` },
    { property: 'og:title', content: `I'm a ${profile.name} — ${profile.tagline}` },
    { property: 'og:description', content: `Discover the ${profile.name} — ${profile.tagline}. Find your Chinese zodiac sign and element at Wu Xing Zodiac.` },
    { property: 'og:image', content: `${siteUrl}/og/${sign}.png` },
    { property: 'og:url', content: `${siteUrl}/result/${sign}` },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Wu Xing Zodiac' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `I'm a ${profile.name} — ${profile.tagline}` },
    { name: 'twitter:description', content: `Discover the ${profile.name} — ${profile.tagline}. Find your Chinese zodiac sign and element at Wu Xing Zodiac.` },
    { name: 'twitter:image', content: `${siteUrl}/og/${sign}.png` },
  ],
  link: [
    { rel: 'canonical', href: `${siteUrl}/result/${sign}` },
  ],
})

async function shareResult() {
  const url = `${siteUrl}/result/${sign}`
  try {
    await navigator.clipboard.writeText(url)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback: select text from a temporary input
    const input = document.createElement('input')
    input.value = url
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

onMounted(async () => {
  try {
    content.value = await loadSignContent(sign)
  } catch {
    // Content may not be available yet; page still renders with profile data
  }
})
</script>

<template>
  <div class="min-h-screen gradient-element-bg">
    <div class="max-w-2xl mx-auto px-4 py-16 md:py-24">

      <!-- Hero -->
      <section class="text-center mb-10">
        <p class="text-ash-500 text-sm uppercase tracking-widest mb-2">Your Chinese Zodiac Sign</p>
        <h1 class="element-text font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
          {{ profile.name }}
        </h1>
        <p class="text-ash-300 text-xl md:text-2xl font-display mb-2">
          {{ profile.tagline }}
        </p>
        <p class="text-ash-500 text-lg">{{ profile.chineseName }}</p>
      </section>

      <!-- At-a-Glance card -->
      <section class="glass rounded-2xl p-6 md:p-8 mb-8">
        <h2 class="font-display text-lg font-bold text-ash-100 mb-4">At a Glance</h2>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span class="text-ash-500 block">Element</span>
            <span class="text-ash-100 font-semibold capitalize">{{ profile.element }}</span>
          </div>
          <div>
            <span class="text-ash-500 block">Animal</span>
            <span class="text-ash-100 font-semibold capitalize">{{ profile.animal }}</span>
          </div>
          <div>
            <span class="text-ash-500 block">Archetype</span>
            <span class="text-ash-100 font-semibold">{{ profile.tagline }}</span>
          </div>
          <div>
            <span class="text-ash-500 block">Years</span>
            <span class="text-ash-100 font-semibold">{{ profile.years.slice(-3).join(', ') }}</span>
          </div>
          <div v-if="content?.atAGlance?.coreStrength" class="col-span-2">
            <span class="text-ash-500 block">Core Strength</span>
            <span class="text-ash-100 font-semibold">{{ content.atAGlance.coreStrength }}</span>
          </div>
        </div>
      </section>

      <!-- Condensed personality -->
      <section v-if="condensedPersonality" class="glass rounded-2xl p-6 md:p-8 mb-8">
        <h2 class="font-display text-lg font-bold text-ash-100 mb-4">Personality</h2>
        <p class="text-ash-300 leading-relaxed">{{ condensedPersonality }}</p>
      </section>

      <!-- Blueprint PDF Upsell -->
      <BlueprintCTA :profile="profile" />

      <!-- CTA Buttons -->
      <section class="space-y-3 mb-10 mt-8">
        <RouterLink
          :to="`/zodiac/${sign}`"
          class="btn-element block w-full text-center text-lg py-3"
        >
          Read Your Full Profile
        </RouterLink>
        <RouterLink
          to="/calculator"
          class="block w-full text-center text-lg py-3 border border-ash-500 text-ash-200 hover:border-ash-300 hover:text-ash-100 rounded-xl transition-all"
        >
          Discover Your Own Element
        </RouterLink>
      </section>

      <!-- Share -->
      <section class="text-center">
        <button
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-ash-600 text-ash-300 hover:border-ash-400 hover:text-ash-100 transition-all"
          @click="shareResult"
        >
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z" />
          </svg>
          <span v-if="copied">Link Copied!</span>
          <span v-else>Share Your Result</span>
        </button>
      </section>

    </div>
  </div>
</template>
