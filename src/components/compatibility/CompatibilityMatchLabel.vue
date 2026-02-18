<template>
  <!-- Glass card wrapper — centered, screenshot-friendly -->
  <div
    class="rounded-2xl border bg-ash-900/70 backdrop-blur-sm px-6 py-8 text-center"
    :class="cardBorderClass"
  >
    <!-- Decorative icon / glyph -->
    <div class="mb-4 text-3xl select-none" aria-hidden="true">{{ categoryIcon }}</div>

    <!-- Match label — primary headline -->
    <h2
      class="font-display text-2xl sm:text-3xl font-bold tracking-wide leading-tight mb-1"
      :class="[labelTextClass, categoryGlowClass]"
    >
      {{ props.label }}
    </h2>

    <!-- Overall score -->
    <p class="mt-4 text-sm text-ash-400 uppercase tracking-widest font-medium">
      Overall compatibility
    </p>
    <p class="mt-1 font-display text-4xl font-bold" :class="scoreTextClass">
      {{ props.overall }}<span class="text-lg font-normal text-ash-500">/100</span>
    </p>

    <!-- Score description band -->
    <div class="mt-5 rounded-full px-4 py-1.5 inline-block text-xs font-semibold uppercase tracking-wider" :class="bandClass">
      {{ scoreDescription }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { MatchCategory } from '@/types'

const props = defineProps<{
  label: string
  category: MatchCategory
  overall: number
}>()

// Category-specific styling maps
const CATEGORY_CONFIG: Record<MatchCategory, {
  icon: string
  textClass: string
  glowClass: string
  borderClass: string
}> = {
  soulmate: {
    icon: '✦',
    textClass: 'text-emerald-300',
    glowClass: 'drop-shadow-[0_0_12px_rgba(52,211,153,0.5)]',
    borderClass: 'border-emerald-500/40',
  },
  'power-couple': {
    icon: '⚡',
    textClass: 'text-violet-300',
    glowClass: 'drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]',
    borderClass: 'border-violet-500/40',
  },
  'slow-burn': {
    icon: '🕯',
    textClass: 'text-amber-300',
    glowClass: 'drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]',
    borderClass: 'border-amber-500/40',
  },
  explosive: {
    icon: '💥',
    textClass: 'text-orange-300',
    glowClass: 'drop-shadow-[0_0_14px_rgba(249,115,22,0.55)]',
    borderClass: 'border-orange-500/40',
  },
  'toxic-addictive': {
    icon: '🌹',
    textClass: 'text-red-300',
    glowClass: 'drop-shadow-[0_0_16px_rgba(239,68,68,0.6)]',
    borderClass: 'border-red-500/50',
  },
  'oil-and-water': {
    icon: '〰',
    textClass: 'text-blue-300',
    glowClass: '',
    borderClass: 'border-ash-600/50',
  },
  'best-friends': {
    icon: '☀',
    textClass: 'text-sky-300',
    glowClass: 'drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]',
    borderClass: 'border-sky-500/40',
  },
  steady: {
    icon: '⚓',
    textClass: 'text-lime-300',
    glowClass: 'drop-shadow-[0_0_10px_rgba(163,230,53,0.35)]',
    borderClass: 'border-lime-600/40',
  },
  neutral: {
    icon: '◈',
    textClass: 'text-ash-300',
    glowClass: '',
    borderClass: 'border-ash-600/40',
  },
}

const config = computed(() => CATEGORY_CONFIG[props.category])

const categoryIcon = computed(() => config.value.icon)
const labelTextClass = computed(() => config.value.textClass)
const categoryGlowClass = computed(() => config.value.glowClass)
const cardBorderClass = computed(() => config.value.borderClass)

// Overall score drives the score display color
const scoreTextClass = computed(() => {
  if (props.overall >= 75) return 'text-emerald-300'
  if (props.overall >= 60) return 'text-amber-300'
  if (props.overall >= 45) return 'text-orange-300'
  return 'text-red-400'
})

const scoreDescription = computed(() => {
  if (props.overall >= 80) return 'Exceptional'
  if (props.overall >= 70) return 'Strong'
  if (props.overall >= 55) return 'Moderate'
  if (props.overall >= 40) return 'Challenging'
  return 'Difficult'
})

const bandClass = computed(() => {
  if (props.overall >= 80) return 'bg-emerald-900/50 text-emerald-300 border border-emerald-700/40'
  if (props.overall >= 70) return 'bg-amber-900/50 text-amber-300 border border-amber-700/40'
  if (props.overall >= 55) return 'bg-orange-900/50 text-orange-300 border border-orange-700/40'
  if (props.overall >= 40) return 'bg-red-900/40 text-red-300 border border-red-700/40'
  return 'bg-ash-800/60 text-ash-400 border border-ash-700/40'
})
</script>
