<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import ShareButtons from '@/components/ui/ShareButtons.vue'
import type { SignProfile, CompatibilityResult } from '@/types'

const props = defineProps<{
  profileA: SignProfile
  profileB: SignProfile
  result: CompatibilityResult
  elementInteraction: {
    modifier: number
    type: 'harmonious' | 'challenging' | 'neutral'
    description: string
  }
}>()

const SITE_URL = 'https://wuxingzodiac.me'

// Score-based color classes
const scoreColor = computed(() => {
  const s = props.result.score
  if (s >= 80) return { gradient: 'from-green-500 to-emerald-400', text: 'text-green-400', bg: 'bg-green-500' }
  if (s >= 60) return { gradient: 'from-lime-500 to-green-400', text: 'text-lime-400', bg: 'bg-lime-500' }
  if (s >= 40) return { gradient: 'from-amber-500 to-yellow-400', text: 'text-amber-400', bg: 'bg-amber-500' }
  return { gradient: 'from-red-500 to-orange-400', text: 'text-red-400', bg: 'bg-red-500' }
})

const scoreLabel = computed(() => {
  const s = props.result.score
  if (s >= 80) return 'Excellent Match'
  if (s >= 60) return 'Good Match'
  if (s >= 40) return 'Moderate Match'
  return 'Challenging Match'
})

// CSS conic-gradient progress for the score circle
const scoreCircleStyle = computed(() => {
  const pct = props.result.score / 100
  const deg = pct * 360
  return {
    background: `conic-gradient(var(--score-color) ${deg}deg, rgba(38, 38, 38, 0.8) ${deg}deg)`,
  }
})

// Element modifier display
const modifierText = computed(() => {
  const m = props.elementInteraction.modifier
  if (m > 0) return `+${m}`
  return `${m}`
})

const modifierColor = computed(() => {
  if (props.elementInteraction.modifier > 0) return 'text-green-400'
  if (props.elementInteraction.modifier < 0) return 'text-red-400'
  return 'text-ash-400'
})

// Alphabetical order for canonical URL
const shareUrl = computed(() => {
  const slugs = [props.profileA.slug, props.profileB.slug].sort()
  return `${SITE_URL}/compatibility/${slugs[0]}/${slugs[1]}`
})

const shareTitle = computed(() => {
  return `${props.profileA.name} & ${props.profileB.name} Compatibility`
})

const shareDescription = computed(() => {
  return `${scoreLabel.value} — ${props.result.score}/100`
})
</script>

<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="multi-element-text font-display text-3xl sm:text-4xl font-bold mb-2">
        {{ profileA.name }} & {{ profileB.name }}
      </h1>
      <p class="text-ash-400 text-lg">Chinese Zodiac Compatibility</p>
    </div>

    <!-- Score Circle -->
    <div class="flex justify-center">
      <div
        class="relative w-44 h-44 rounded-full p-1.5"
        :style="[scoreCircleStyle, { '--score-color': scoreColor.bg.replace('bg-', 'var(--color-') + ')' }]"
        :class="scoreColor.bg.replace('bg-', 'shadow-[0_0_30px_rgba(0,0,0,0.3)] ')"
      >
        <!-- Use inline style for conic-gradient since Tailwind can't do this dynamically -->
        <div
          class="absolute inset-0 rounded-full"
          :style="{
            background: `conic-gradient(${
              result.score >= 80 ? '#22c55e' :
              result.score >= 60 ? '#84cc16' :
              result.score >= 40 ? '#f59e0b' :
              '#ef4444'
            } ${result.score * 3.6}deg, rgba(38, 38, 38, 0.8) ${result.score * 3.6}deg)`,
          }"
        />
        <div class="absolute inset-2 rounded-full bg-ash-950 flex flex-col items-center justify-center">
          <span class="text-5xl font-bold font-display" :class="scoreColor.text">
            {{ result.score }}
          </span>
          <span class="text-ash-400 text-sm mt-1">out of 100</span>
        </div>
      </div>
    </div>

    <!-- Score Label -->
    <div class="text-center">
      <span class="text-xl font-display font-semibold" :class="scoreColor.text">
        {{ scoreLabel }}
      </span>
    </div>

    <!-- Summary -->
    <div class="glass rounded-2xl p-6">
      <h2 class="font-display text-xl font-semibold text-ash-100 mb-3">Overview</h2>
      <p class="text-ash-300 leading-relaxed">{{ result.summary }}</p>
    </div>

    <!-- Wu Xing Element Interaction -->
    <div class="glass rounded-2xl p-6">
      <h2 class="font-display text-xl font-semibold text-ash-100 mb-3">Wu Xing Element Interaction</h2>
      <p class="text-ash-300 leading-relaxed mb-3">{{ elementInteraction.description }}</p>
      <div class="flex items-center gap-2">
        <span class="text-ash-400 text-sm">Element Modifier:</span>
        <span class="font-semibold text-lg" :class="modifierColor">{{ modifierText }}</span>
      </div>
    </div>

    <!-- Strengths -->
    <div class="glass rounded-2xl p-6 border-green-900/30" style="border-color: rgba(34, 197, 94, 0.15);">
      <h2 class="font-display text-xl font-semibold text-green-400 mb-4">Strengths</h2>
      <ul class="space-y-2">
        <li v-for="(strength, i) in result.strengths" :key="i" class="flex items-start gap-3">
          <span class="text-green-500 mt-0.5 shrink-0">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </span>
          <span class="text-ash-300">{{ strength }}</span>
        </li>
      </ul>
    </div>

    <!-- Challenges -->
    <div class="glass rounded-2xl p-6" style="border-color: rgba(245, 158, 11, 0.15);">
      <h2 class="font-display text-xl font-semibold text-amber-400 mb-4">Challenges</h2>
      <ul class="space-y-2">
        <li v-for="(challenge, i) in result.challenges" :key="i" class="flex items-start gap-3">
          <span class="text-amber-500 mt-0.5 shrink-0">
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
          </span>
          <span class="text-ash-300">{{ challenge }}</span>
        </li>
      </ul>
    </div>

    <!-- Sign Links -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <RouterLink
        :to="`/zodiac/${profileA.slug}`"
        class="glass rounded-2xl p-5 text-center hover:translate-y-[-2px] hover:border-ash-500 transition-all block"
      >
        <div class="text-ash-400 text-sm mb-1">{{ profileA.chineseName }}</div>
        <div class="font-display text-lg font-semibold text-ash-100">{{ profileA.name }}</div>
        <div class="text-ash-500 text-sm mt-1">{{ profileA.tagline }}</div>
        <div class="text-ash-400 text-sm mt-3">View Profile &rarr;</div>
      </RouterLink>
      <RouterLink
        :to="`/zodiac/${profileB.slug}`"
        class="glass rounded-2xl p-5 text-center hover:translate-y-[-2px] hover:border-ash-500 transition-all block"
      >
        <div class="text-ash-400 text-sm mb-1">{{ profileB.chineseName }}</div>
        <div class="font-display text-lg font-semibold text-ash-100">{{ profileB.name }}</div>
        <div class="text-ash-500 text-sm mt-1">{{ profileB.tagline }}</div>
        <div class="text-ash-400 text-sm mt-3">View Profile &rarr;</div>
      </RouterLink>
    </div>

    <!-- Share -->
    <div class="glass rounded-2xl p-6">
      <h2 class="font-display text-lg font-semibold text-ash-100 mb-4">Share This Result</h2>
      <ShareButtons
        :url="shareUrl"
        :title="shareTitle"
        :description="shareDescription"
        :score="result.score"
      />
    </div>
  </div>
</template>
