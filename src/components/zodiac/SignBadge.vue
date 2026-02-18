<script setup lang="ts">
// ============================================
// SignBadge.vue
// Inline SVG identity badge for each zodiac sign
// Downloadable as PNG via canvas
// SSR-safe: canvas/download logic gated in onMounted
// ============================================

import { computed, onMounted, ref } from 'vue'
import type { SignProfile, ZodiacElement } from '@/types'
import { ELEMENT_CHART_COLORS } from '@/lib/wuxing-cycles'

const props = withDefaults(
  defineProps<{
    profile: SignProfile
    archetype?: { name: string }
    downloadable?: boolean
  }>(),
  {
    downloadable: false,
  },
)

// Chinese element characters
const ELEMENT_CHINESE: Record<ZodiacElement, string> = {
  wood: '木',
  fire: '火',
  earth: '土',
  metal: '金',
  water: '水',
}

// Animal emojis (the full list matching ZodiacAnimal type)
const ANIMAL_EMOJIS: Record<string, string> = {
  rat: '🐀',
  ox: '🐂',
  tiger: '🐅',
  rabbit: '🐇',
  dragon: '🐉',
  snake: '🐍',
  horse: '🐎',
  goat: '🐐',
  monkey: '🐒',
  rooster: '🐓',
  dog: '🐕',
  pig: '🐖',
}

const elementColor = computed(() => ELEMENT_CHART_COLORS[props.profile.element])
const chineseChar = computed(() => ELEMENT_CHINESE[props.profile.element])
const animalEmoji = computed(() => ANIMAL_EMOJIS[props.profile.animal] ?? '✦')
const archetypeName = computed(() => props.archetype?.name ?? props.profile.tagline)

// SVG dimensions: badge is 200x260 in SVG units (viewBox)
const VW = 200
const VH = 260

// Gradient IDs — unique per instance to avoid SVG conflicts
const uid = Math.random().toString(36).slice(2, 7)
const gradId = `badge-border-${uid}`
const bgGradId = `badge-bg-${uid}`

// The SVG ref used for PNG export
const svgRef = ref<SVGSVGElement | null>(null)
const isDownloading = ref(false)

// Guard: only enable download functions client-side
let canDownload = false
onMounted(() => {
  canDownload = true
})

async function downloadBadge() {
  if (!canDownload || !svgRef.value || isDownloading.value) return
  isDownloading.value = true

  try {
    // Serialize the SVG to a blob URL
    const serializer = new XMLSerializer()
    const svgStr = serializer.serializeToString(svgRef.value)
    const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(svgBlob)

    // Scale factor for higher-res PNG output
    const SCALE = 3
    const canvasW = VW * SCALE
    const canvasH = VH * SCALE

    const canvas = document.createElement('canvas')
    canvas.width = canvasW
    canvas.height = canvasH
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('Canvas 2D context not available')

    // Draw SVG to canvas via Image
    const img = new Image()
    img.width = canvasW
    img.height = canvasH

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve()
      img.onerror = () => reject(new Error('SVG image failed to load'))
      img.src = svgUrl
    })

    ctx.drawImage(img, 0, 0, canvasW, canvasH)
    URL.revokeObjectURL(svgUrl)

    // Trigger download
    const pngUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.download = `${props.profile.slug}-badge.png`
    link.href = pngUrl
    link.click()
  } catch (err) {
    console.error('[SignBadge] Download failed:', err)
  } finally {
    isDownloading.value = false
  }
}
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <!--
      Responsive scaling: 200px on mobile, 200px desktop (per spec)
      Use CSS to scale down on very small screens.
    -->
    <div
      class="
        w-[160px] sm:w-[200px]
        aspect-[200/260]
      "
    >
      <svg
        ref="svgRef"
        :viewBox="`0 0 ${VW} ${VH}`"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        :aria-label="`${profile.name} zodiac sign badge — ${archetypeName}`"
      >
        <defs>
          <!-- Dark background gradient with element tint -->
          <linearGradient :id="bgGradId" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0a0a0a" />
            <stop offset="100%" :stop-color="`${elementColor}22`" />
          </linearGradient>

          <!-- Border gradient stroke (element color ring) -->
          <linearGradient :id="gradId" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" :stop-color="elementColor" stop-opacity="0.9" />
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.3" />
            <stop offset="100%" :stop-color="elementColor" stop-opacity="0.8" />
          </linearGradient>
        </defs>

        <!-- Background fill -->
        <rect
          x="0"
          y="0"
          :width="VW"
          :height="VH"
          rx="16"
          :fill="`url(#${bgGradId})`"
        />

        <!-- Subtle inner glow border (filled rect with element opacity) -->
        <rect
          x="2"
          y="2"
          :width="VW - 4"
          :height="VH - 4"
          rx="14"
          fill="none"
          :stroke="`url(#${gradId})`"
          stroke-width="2"
        />

        <!-- Outer decorative border ring (thin) -->
        <rect
          x="6"
          y="6"
          :width="VW - 12"
          :height="VH - 12"
          rx="11"
          fill="none"
          :stroke="elementColor"
          stroke-width="0.5"
          stroke-opacity="0.3"
        />

        <!-- Corner ornaments (top-left, top-right, bottom-left, bottom-right) -->
        <g :stroke="elementColor" stroke-width="1.5" stroke-opacity="0.7" fill="none">
          <!-- Top-left -->
          <path d="M 14 24 L 14 14 L 24 14" />
          <!-- Top-right -->
          <path :d="`M ${VW - 24} 14 L ${VW - 14} 14 L ${VW - 14} 24`" />
          <!-- Bottom-left -->
          <path :d="`M 14 ${VH - 24} L 14 ${VH - 14} L 24 ${VH - 14}`" />
          <!-- Bottom-right -->
          <path :d="`M ${VW - 24} ${VH - 14} L ${VW - 14} ${VH - 14} L ${VW - 14} ${VH - 24}`" />
        </g>

        <!-- Element Chinese character (large, top area) -->
        <text
          x="100"
          y="72"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="42"
          font-weight="700"
          :fill="elementColor"
          opacity="0.85"
          font-family="serif"
        >{{ chineseChar }}</text>

        <!-- Thin divider line below Chinese character -->
        <line
          x1="40"
          y1="96"
          x2="160"
          y2="96"
          :stroke="elementColor"
          stroke-width="0.75"
          stroke-opacity="0.4"
        />

        <!-- Animal emoji (center) -->
        <text
          x="100"
          y="148"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="52"
        >{{ animalEmoji }}</text>

        <!-- Thin divider line above text -->
        <line
          x1="30"
          y1="170"
          x2="170"
          y2="170"
          :stroke="elementColor"
          stroke-width="0.75"
          stroke-opacity="0.4"
        />

        <!-- Sign name (e.g., "Fire Horse") -->
        <text
          x="100"
          y="192"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="15"
          font-weight="700"
          fill="#f5f5f5"
          font-family="serif"
          letter-spacing="1.5"
        >{{ profile.name.toUpperCase() }}</text>

        <!-- Archetype name (smaller, element-tinted) -->
        <text
          x="100"
          y="215"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="9.5"
          font-weight="400"
          :fill="elementColor"
          opacity="0.9"
          letter-spacing="0.5"
        >{{ archetypeName }}</text>

        <!-- Chinese name (bottom, subtle) -->
        <text
          x="100"
          y="237"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="11"
          fill="#525252"
          letter-spacing="3"
        >{{ profile.chineseName }}</text>

        <!-- Small "wuxingzodiac.me" watermark -->
        <text
          x="100"
          y="251"
          text-anchor="middle"
          dominant-baseline="middle"
          font-size="7"
          fill="#404040"
          letter-spacing="0.5"
        >wuxingzodiac.me</text>
      </svg>
    </div>

    <!-- Download button (client-side only, only when downloadable=true) -->
    <button
      v-if="downloadable"
      class="btn-element text-sm px-4 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="isDownloading"
      @click="downloadBadge"
    >
      <span v-if="isDownloading">Generating...</span>
      <span v-else>Save Badge</span>
    </button>
  </div>
</template>
