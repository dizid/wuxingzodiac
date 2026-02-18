<template>
  <!-- Only renders when a remedy is present -->
  <div
    v-if="props.remedy !== null"
    class="rounded-2xl border backdrop-blur-sm p-6"
    :class="[borderClass, bgClass]"
  >
    <!-- Section heading -->
    <h3 class="font-display text-base font-semibold tracking-wide uppercase mb-5" :class="headingClass">
      Restoring Balance
    </h3>

    <!-- Bridging element hero row -->
    <div class="flex items-center gap-4 mb-5">
      <!-- Element emoji in a glowing circle -->
      <div
        class="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl border"
        :class="[iconBgClass, iconBorderClass]"
        aria-hidden="true"
      >
        {{ ELEMENT_EMOJIS[props.remedy.bridgingElement] }}
      </div>

      <div>
        <p class="text-xs font-medium uppercase tracking-widest mb-0.5" :class="labelClass">
          Bridging Element
        </p>
        <p class="font-display text-xl font-bold" :class="elementNameClass">
          {{ ELEMENT_LABELS[props.remedy.bridgingElement] }}
        </p>
      </div>
    </div>

    <!-- Remedy description -->
    <p class="text-sm leading-relaxed text-ash-300 mb-6">
      {{ props.remedy.description }}
    </p>

    <!-- CTA link to element page -->
    <router-link
      :to="`/zodiac/element/${props.remedy.bridgingElement}`"
      class="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200 border"
      :class="ctaClass"
    >
      Explore {{ ELEMENT_LABELS[props.remedy.bridgingElement] }} Energy
      <span aria-hidden="true">→</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { RemedyAdvice, ZodiacElement } from '@/types'
import { ELEMENT_LABELS, ELEMENT_EMOJIS } from '@/lib/wuxing-cycles'

const props = defineProps<{
  remedy: RemedyAdvice | null
}>()

// Per-element color accents
// Matches the element theme system colors in main.css
type ElementStyle = {
  border: string
  bg: string
  heading: string
  label: string
  elementName: string
  iconBg: string
  iconBorder: string
  cta: string
}

const ELEMENT_STYLES: Record<ZodiacElement, ElementStyle> = {
  wood: {
    border: 'border-emerald-700/50',
    bg: 'bg-emerald-950/30',
    heading: 'text-emerald-300',
    label: 'text-emerald-500',
    elementName: 'text-emerald-200',
    iconBg: 'bg-emerald-900/50',
    iconBorder: 'border-emerald-600/50',
    cta: 'bg-emerald-900/50 text-emerald-200 border-emerald-600/50 hover:bg-emerald-800/60 hover:border-emerald-500/60',
  },
  fire: {
    border: 'border-orange-700/50',
    bg: 'bg-orange-950/30',
    heading: 'text-orange-300',
    label: 'text-orange-500',
    elementName: 'text-orange-200',
    iconBg: 'bg-orange-900/50',
    iconBorder: 'border-orange-600/50',
    cta: 'bg-orange-900/50 text-orange-200 border-orange-600/50 hover:bg-orange-800/60 hover:border-orange-500/60',
  },
  earth: {
    border: 'border-amber-700/50',
    bg: 'bg-amber-950/30',
    heading: 'text-amber-300',
    label: 'text-amber-500',
    elementName: 'text-amber-200',
    iconBg: 'bg-amber-900/50',
    iconBorder: 'border-amber-600/50',
    cta: 'bg-amber-900/50 text-amber-200 border-amber-600/50 hover:bg-amber-800/60 hover:border-amber-500/60',
  },
  metal: {
    border: 'border-slate-600/50',
    bg: 'bg-slate-900/40',
    heading: 'text-slate-300',
    label: 'text-slate-500',
    elementName: 'text-slate-200',
    iconBg: 'bg-slate-800/60',
    iconBorder: 'border-slate-600/50',
    cta: 'bg-slate-800/60 text-slate-200 border-slate-600/50 hover:bg-slate-700/60 hover:border-slate-500/60',
  },
  water: {
    border: 'border-blue-700/50',
    bg: 'bg-blue-950/30',
    heading: 'text-blue-300',
    label: 'text-blue-500',
    elementName: 'text-blue-200',
    iconBg: 'bg-blue-900/50',
    iconBorder: 'border-blue-600/50',
    cta: 'bg-blue-900/50 text-blue-200 border-blue-600/50 hover:bg-blue-800/60 hover:border-blue-500/60',
  },
}

// Fallback styles when remedy is null (component renders nothing, but computed still runs)
const DEFAULT_STYLE: ElementStyle = {
  border: 'border-ash-700/50',
  bg: 'bg-ash-900/60',
  heading: 'text-ash-200',
  label: 'text-ash-500',
  elementName: 'text-ash-300',
  iconBg: 'bg-ash-800/50',
  iconBorder: 'border-ash-600/50',
  cta: 'bg-ash-800/50 text-ash-200 border-ash-600/50 hover:bg-ash-700/50',
}

const style = computed<ElementStyle>(() =>
  props.remedy ? ELEMENT_STYLES[props.remedy.bridgingElement] : DEFAULT_STYLE,
)

const borderClass = computed(() => style.value.border)
const bgClass = computed(() => style.value.bg)
const headingClass = computed(() => style.value.heading)
const labelClass = computed(() => style.value.label)
const elementNameClass = computed(() => style.value.elementName)
const iconBgClass = computed(() => style.value.iconBg)
const iconBorderClass = computed(() => style.value.iconBorder)
const ctaClass = computed(() => style.value.cta)
</script>
