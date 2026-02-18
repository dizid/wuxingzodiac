<script setup lang="ts">
// ============================================
// ElementPentagonChart.vue
// Radar/pentagon chart for 5-element composition
// Pure SVG, animated on mount, element-themed
// ============================================

import { computed, onMounted, ref } from 'vue'
import type { ElementPercentages, ZodiacElement } from '@/types'
import {
  ELEMENTS,
  ELEMENT_LABELS,
  ELEMENT_EMOJIS,
  ELEMENT_CHART_COLORS,
} from '@/lib/wuxing-cycles'

const props = defineProps<{
  percentages: ElementPercentages
  element: ZodiacElement
  size?: 'sm' | 'md' | 'lg'
}>()

// Size mapping in px
const sizeMap: Record<NonNullable<typeof props.size>, number> = {
  sm: 200,
  md: 300,
  lg: 400,
}

const svgSize = computed(() => sizeMap[props.size ?? 'md'])

// SVG coordinate system: viewBox is always 300x300, scaled via CSS
const CX = 150
const CY = 150
const RADIUS = 110
// Label offset outside the pentagon vertices
const LABEL_RADIUS = 140

// Angles for 5 vertices: Wood at top (-90°), clockwise
// Wood=-90, Fire=-18, Earth=54, Metal=126, Water=198
const VERTEX_ANGLES_DEG: Record<ZodiacElement, number> = {
  wood: -90,
  fire: -18,
  earth: 54,
  metal: 126,
  water: 198,
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180
}

// Compute a point on the unit circle at a given angle and radius
function point(angle: number, r: number): { x: number; y: number } {
  return {
    x: CX + r * Math.cos(toRad(angle)),
    y: CY + r * Math.sin(toRad(angle)),
  }
}

// Concentric grid pentagons at 20%, 40%, 60%, 80%, 100%
const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0]

function pentagonPoints(scale: number): string {
  return ELEMENTS.map((el) => {
    const pt = point(VERTEX_ANGLES_DEG[el], RADIUS * scale)
    return `${pt.x},${pt.y}`
  }).join(' ')
}

// Animated data polygon: transitions from 0 to full on mount
const animProgress = ref(0)

const dataPoints = computed(() => {
  return ELEMENTS.map((el) => {
    const pct = (props.percentages[el] / 100) * animProgress.value
    const pt = point(VERTEX_ANGLES_DEG[el], RADIUS * Math.max(0, pct))
    return `${pt.x},${pt.y}`
  }).join(' ')
})

// Use the active element's primary color for the data polygon
const activeColor = computed(() => ELEMENT_CHART_COLORS[props.element])

// Vertex label positions (further out for labels)
const vertexLabels = computed(() => {
  return ELEMENTS.map((el) => {
    const pt = point(VERTEX_ANGLES_DEG[el], LABEL_RADIUS)
    // Adjust text-anchor based on position
    const deg = VERTEX_ANGLES_DEG[el]
    let anchor: string
    if (deg === -90) anchor = 'middle'       // top
    else if (deg < 0) anchor = 'middle'      // upper-right
    else if (deg === 54) anchor = 'middle'   // lower-right
    else if (deg > 90 && deg < 180) anchor = 'middle' // lower-left
    else anchor = 'middle'

    // Fine-tune label offsets per quadrant
    let dx = 0
    let dy = 0
    if (deg === -90) { dy = -12 }                   // Wood: above
    else if (deg === -18) { dx = 14; dy = -4 }      // Fire: upper-right
    else if (deg === 54) { dx = 14; dy = 8 }        // Earth: lower-right
    else if (deg === 126) { dx = -14; dy = 8 }      // Metal: lower-left
    else if (deg === 198) { dx = -14; dy = -4 }     // Water: upper-left

    return {
      el,
      x: pt.x + dx,
      y: pt.y + dy,
      anchor,
      color: ELEMENT_CHART_COLORS[el],
      emoji: ELEMENT_EMOJIS[el],
      label: ELEMENT_LABELS[el],
      pct: props.percentages[el],
    }
  })
})

// Aria label for accessibility
const ariaLabel = computed(() => {
  const parts = ELEMENTS.map((el) => `${ELEMENT_LABELS[el]}: ${props.percentages[el]}%`)
  return `Element composition pentagon chart. ${parts.join(', ')}.`
})

// Animate on mount: ramp from 0 to 1 over 800ms
onMounted(() => {
  const duration = 800
  const start = performance.now()

  function step(now: number) {
    const elapsed = now - start
    animProgress.value = Math.min(elapsed / duration, 1)
    if (animProgress.value < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
})
</script>

<template>
  <div class="glass rounded-2xl p-5">
    <h3 class="font-display text-base font-semibold text-ash-200 mb-4 text-center tracking-wide">
      Element Composition
    </h3>

    <!-- SVG scales via CSS width; viewBox stays 300x300 -->
    <div class="flex justify-center">
      <svg
        :width="svgSize"
        :height="svgSize"
        viewBox="0 0 300 300"
        role="img"
        :aria-label="ariaLabel"
        class="overflow-visible"
      >
        <title>Element Composition Pentagon Chart</title>

        <!-- Grid: concentric pentagons at 20%, 40%, 60%, 80%, 100% -->
        <g aria-hidden="true">
          <polygon
            v-for="level in gridLevels"
            :key="level"
            :points="pentagonPoints(level)"
            fill="none"
            stroke="#404040"
            :stroke-width="level === 1.0 ? 1.5 : 0.75"
            stroke-dasharray="none"
          />

          <!-- Axis lines from center to each vertex -->
          <line
            v-for="el in ELEMENTS"
            :key="'axis-' + el"
            :x1="CX"
            :y1="CY"
            :x2="point(VERTEX_ANGLES_DEG[el], RADIUS).x"
            :y2="point(VERTEX_ANGLES_DEG[el], RADIUS).y"
            stroke="#404040"
            stroke-width="0.75"
          />

          <!-- Grid level % labels (inner) -->
          <text
            x="152"
            y="127"
            font-size="7"
            fill="#525252"
            text-anchor="start"
          >20%</text>
          <text
            x="152"
            y="105"
            font-size="7"
            fill="#525252"
            text-anchor="start"
          >40%</text>
          <text
            x="152"
            y="82"
            font-size="7"
            fill="#525252"
            text-anchor="start"
          >60%</text>
          <text
            x="152"
            y="60"
            font-size="7"
            fill="#525252"
            text-anchor="start"
          >80%</text>
        </g>

        <!-- Data polygon: animated, element-colored -->
        <polygon
          :points="dataPoints"
          :fill="`${activeColor}4D`"
          :stroke="activeColor"
          stroke-width="2"
          stroke-linejoin="round"
        />

        <!-- Data point dots -->
        <g aria-hidden="true">
          <circle
            v-for="el in ELEMENTS"
            :key="'dot-' + el"
            :cx="point(VERTEX_ANGLES_DEG[el], RADIUS * Math.max(0, (percentages[el] / 100) * animProgress)).x"
            :cy="point(VERTEX_ANGLES_DEG[el], RADIUS * Math.max(0, (percentages[el] / 100) * animProgress)).y"
            r="3"
            :fill="activeColor"
            stroke="#0a0a0a"
            stroke-width="1.5"
          />
        </g>

        <!-- Vertex labels: emoji + name + % -->
        <g aria-hidden="true">
          <g
            v-for="v in vertexLabels"
            :key="'label-' + v.el"
          >
            <!-- Emoji -->
            <text
              :x="v.x"
              :y="v.y - 8"
              :text-anchor="v.anchor"
              dominant-baseline="middle"
              font-size="16"
            >{{ v.emoji }}</text>

            <!-- Element name -->
            <text
              :x="v.x"
              :y="v.y + 10"
              :text-anchor="v.anchor"
              dominant-baseline="middle"
              font-size="10"
              font-weight="600"
              :fill="v.color"
            >{{ v.label }}</text>

            <!-- Percentage -->
            <text
              :x="v.x"
              :y="v.y + 22"
              :text-anchor="v.anchor"
              dominant-baseline="middle"
              font-size="9"
              fill="#a3a3a3"
            >{{ v.pct }}%</text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
