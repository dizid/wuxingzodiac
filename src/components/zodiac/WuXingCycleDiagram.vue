<script setup lang="ts">
// ============================================
// WuXingCycleDiagram.vue
// Interactive SVG: 5-element generating + overcoming cycles
// Generating cycle = green curved arrows (clockwise)
// Overcoming cycle = red dashed pentagram lines
// Active element highlighted; hover tooltip on nodes
// ============================================

import { computed, ref } from 'vue'
import type { ZodiacElement } from '@/types'
import {
  ELEMENTS,
  ELEMENT_LABELS,
  ELEMENT_EMOJIS,
  ELEMENT_CHART_COLORS,
  GENERATES,
  DESTROYS,
  describeRelationship,
} from '@/lib/wuxing-cycles'

const props = withDefaults(
  defineProps<{
    activeElement: ZodiacElement
    interactive?: boolean
    size?: 'sm' | 'md'
  }>(),
  {
    interactive: true,
    size: 'md',
  },
)

const emit = defineEmits<{
  navigate: [element: ZodiacElement]
}>()

// SVG dimensions: sm=240, md=320; viewBox always 320x320
const svgDisplaySize = computed(() => (props.size === 'sm' ? 240 : 320))

// Layout constants (in viewBox units, 320x320)
const CX = 160
const CY = 160
const NODE_RADIUS = 80   // circle of node centers
const NODE_SIZE = 26     // radius of each element circle

// Angles: Wood top (-90°), clockwise
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

function nodeCenter(el: ZodiacElement): { x: number; y: number } {
  const a = toRad(VERTEX_ANGLES_DEG[el])
  return {
    x: CX + NODE_RADIUS * Math.cos(a),
    y: CY + NODE_RADIUS * Math.sin(a),
  }
}

// -------------------------------------------------------------------
// Generating cycle: curved arrows (clockwise, between adjacent nodes)
// We use a quadratic Bézier with a control point bowed outward
// -------------------------------------------------------------------
interface CurvedArrow {
  from: ZodiacElement
  to: ZodiacElement
  d: string
  midX: number
  midY: number
  isActive: boolean
}

function quadBez(
  ax: number, ay: number,
  bx: number, by: number,
  bow: number,    // positive = bow outward (away from center)
): { d: string; midX: number; midY: number } {
  // Perpendicular direction (outward from center midpoint)
  const mx = (ax + bx) / 2
  const my = (ay + by) / 2
  const dx = bx - ax
  const dy = by - ay
  const len = Math.sqrt(dx * dx + dy * dy)
  // Perpendicular unit vector (rotate 90°)
  const px = -dy / len
  const py = dx / len
  const cx = mx + px * bow
  const cy = my + py * bow
  return {
    d: `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`,
    midX: (ax + 2 * cx + bx) / 4,
    midY: (ay + 2 * cy + by) / 4,
  }
}

// Offset a point along the line from a to b by `dist`
function offsetPoint(
  ax: number, ay: number,
  bx: number, by: number,
  dist: number,
): { x: number; y: number } {
  const dx = bx - ax
  const dy = by - ay
  const len = Math.sqrt(dx * dx + dy * dy)
  return {
    x: ax + (dx / len) * dist,
    y: ay + (dy / len) * dist,
  }
}

const generatingArrows = computed((): CurvedArrow[] => {
  const rels = props.activeElement
  return ELEMENTS.map((from) => {
    const to = GENERATES[from]
    const a = nodeCenter(from)
    const b = nodeCenter(to)
    // Start/end offset from node edge
    const aEdge = offsetPoint(a.x, a.y, b.x, b.y, NODE_SIZE + 4)
    const bEdge = offsetPoint(b.x, b.y, a.x, a.y, NODE_SIZE + 4)
    const { d, midX, midY } = quadBez(aEdge.x, aEdge.y, bEdge.x, bEdge.y, 18)
    const isActive = from === rels || to === rels
    return { from, to, d, midX, midY, isActive }
  })
})

// -------------------------------------------------------------------
// Overcoming cycle: straight lines forming a pentagram
// Wood→Earth, Earth→Water, Water→Fire, Fire→Metal, Metal→Wood
// -------------------------------------------------------------------
interface StraightLine {
  from: ZodiacElement
  to: ZodiacElement
  x1: number; y1: number
  x2: number; y2: number
  isActive: boolean
}

const overcomingLines = computed((): StraightLine[] => {
  return ELEMENTS.map((from) => {
    const to = DESTROYS[from]
    const a = nodeCenter(from)
    const b = nodeCenter(to)
    const aEdge = offsetPoint(a.x, a.y, b.x, b.y, NODE_SIZE + 3)
    const bEdge = offsetPoint(b.x, b.y, a.x, a.y, NODE_SIZE + 3)
    const isActive = from === props.activeElement || to === props.activeElement
    return { from, to, x1: aEdge.x, y1: aEdge.y, x2: bEdge.x, y2: bEdge.y, isActive }
  })
})

// -------------------------------------------------------------------
// Node data
// -------------------------------------------------------------------
interface NodeData {
  el: ZodiacElement
  cx: number
  cy: number
  color: string
  emoji: string
  label: string
  isActive: boolean
  labelX: number
  labelY: number
  labelAnchor: string
}

const nodes = computed((): NodeData[] => {
  return ELEMENTS.map((el) => {
    const { x, y } = nodeCenter(el)
    const isActive = el === props.activeElement
    const deg = VERTEX_ANGLES_DEG[el]
    // Label position: outside node
    const labelR = NODE_RADIUS + NODE_SIZE + 14
    const a = toRad(deg)
    const lx = CX + labelR * Math.cos(a)
    const ly = CY + labelR * Math.sin(a)

    // Text anchor based on horizontal position
    const labelAnchor =
      Math.abs(lx - CX) < 10 ? 'middle' : lx < CX ? 'end' : 'start'

    return {
      el,
      cx: x,
      cy: y,
      color: ELEMENT_CHART_COLORS[el],
      emoji: ELEMENT_EMOJIS[el],
      label: ELEMENT_LABELS[el],
      isActive,
      labelX: lx,
      labelY: ly,
      labelAnchor,
    }
  })
})

// -------------------------------------------------------------------
// Hover tooltip (interactive mode)
// -------------------------------------------------------------------
const hoveredElement = ref<ZodiacElement | null>(null)
const tooltipStyle = ref({ top: '0px', left: '0px' })
const tooltipText = ref('')
const tooltipVisible = ref(false)

function onNodeMouseEnter(el: ZodiacElement, event: MouseEvent) {
  if (!props.interactive || el === props.activeElement) return
  hoveredElement.value = el
  tooltipText.value = describeRelationship(props.activeElement, el)
  tooltipVisible.value = true
  updateTooltipPos(event)
}

function onNodeMouseMove(event: MouseEvent) {
  if (!tooltipVisible.value) return
  updateTooltipPos(event)
}

function onNodeMouseLeave() {
  hoveredElement.value = null
  tooltipVisible.value = false
}

function updateTooltipPos(event: MouseEvent) {
  const target = event.currentTarget as SVGElement
  const svgEl = target.closest('svg')
  if (!svgEl) return
  const containerRect = (svgEl.parentElement as HTMLElement).getBoundingClientRect()
  // Position relative to the glass card container
  tooltipStyle.value = {
    top: `${event.clientY - containerRect.top + 12}px`,
    left: `${event.clientX - containerRect.left + 8}px`,
  }
}

function onNodeClick(el: ZodiacElement) {
  if (!props.interactive) return
  emit('navigate', el)
}

// -------------------------------------------------------------------
// Arrow marker definitions
// -------------------------------------------------------------------
// Unique ID namespace to avoid SVG marker conflicts with multiple instances
const uid = Math.random().toString(36).slice(2, 7)
const markerId = (name: string) => `${uid}-${name}`
</script>

<template>
  <div class="glass rounded-2xl p-5 relative">
    <h3 class="font-display text-base font-semibold text-ash-200 mb-4 text-center tracking-wide">
      Wu Xing Cycle
    </h3>

    <div class="flex justify-center relative">
      <svg
        :width="svgDisplaySize"
        :height="svgDisplaySize"
        viewBox="0 0 320 320"
        :aria-label="`Wu Xing five-element cycle diagram. Active element: ${ELEMENT_LABELS[activeElement]}.`"
        role="img"
        class="overflow-visible"
      >
        <defs>
          <!-- Generating cycle arrowhead (green) -->
          <marker
            :id="markerId('gen-arrow')"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#10b981" />
          </marker>
          <!-- Generating active arrowhead (brighter green) -->
          <marker
            :id="markerId('gen-arrow-active')"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#34d399" />
          </marker>
          <!-- Overcoming cycle arrowhead (red) -->
          <marker
            :id="markerId('ovr-arrow')"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#f43f5e" opacity="0.6" />
          </marker>
          <!-- Overcoming active arrowhead (brighter red) -->
          <marker
            :id="markerId('ovr-arrow-active')"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2.5"
            orient="auto"
          >
            <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#fb7185" />
          </marker>
        </defs>

        <!-- Overcoming (pentagram) lines — rendered beneath nodes -->
        <g aria-hidden="true">
          <line
            v-for="line in overcomingLines"
            :key="`ovr-${line.from}-${line.to}`"
            :x1="line.x1"
            :y1="line.y1"
            :x2="line.x2"
            :y2="line.y2"
            :stroke="line.isActive ? '#fb7185' : '#f43f5e'"
            :stroke-width="line.isActive ? 1.5 : 1"
            :stroke-opacity="line.isActive ? 0.8 : 0.35"
            stroke-dasharray="4 3"
            :marker-end="`url(#${line.isActive ? markerId('ovr-arrow-active') : markerId('ovr-arrow')})`"
          />
        </g>

        <!-- Generating (outer ring) curved arrows -->
        <g aria-hidden="true">
          <path
            v-for="arrow in generatingArrows"
            :key="`gen-${arrow.from}-${arrow.to}`"
            :d="arrow.d"
            fill="none"
            :stroke="arrow.isActive ? '#34d399' : '#10b981'"
            :stroke-width="arrow.isActive ? 2 : 1.25"
            :stroke-opacity="arrow.isActive ? 1 : 0.5"
            :marker-end="`url(#${arrow.isActive ? markerId('gen-arrow-active') : markerId('gen-arrow')})`"
          />
        </g>

        <!-- Element nodes -->
        <g>
          <g
            v-for="node in nodes"
            :key="node.el"
            :class="[props.interactive && !node.isActive ? 'cursor-pointer' : 'cursor-default']"
            @mouseenter="(e) => onNodeMouseEnter(node.el, e)"
            @mousemove="onNodeMouseMove"
            @mouseleave="onNodeMouseLeave"
            @click="() => onNodeClick(node.el)"
            :aria-label="`${node.label} element${node.isActive ? ' (active)' : ''}`"
            role="button"
            :tabindex="interactive ? 0 : -1"
            @keydown.enter="() => onNodeClick(node.el)"
          >
            <!-- Glow ring for active element -->
            <circle
              v-if="node.isActive"
              :cx="node.cx"
              :cy="node.cy"
              :r="NODE_SIZE + 8"
              :fill="`${node.color}20`"
              :stroke="node.color"
              stroke-width="1.5"
              stroke-opacity="0.5"
            />

            <!-- Node circle -->
            <circle
              :cx="node.cx"
              :cy="node.cy"
              :r="node.isActive ? NODE_SIZE + 3 : NODE_SIZE"
              :fill="node.isActive ? node.color : `${node.color}33`"
              :stroke="node.color"
              :stroke-width="node.isActive ? 2.5 : 1.5"
              :stroke-opacity="node.isActive ? 1 : 0.7"
            />

            <!-- Emoji inside node -->
            <text
              :x="node.cx"
              :y="node.cy"
              text-anchor="middle"
              dominant-baseline="middle"
              :font-size="node.isActive ? 20 : 16"
            >{{ node.emoji }}</text>

            <!-- Hovered/non-active: subtle border pulse -->
            <circle
              v-if="hoveredElement === node.el"
              :cx="node.cx"
              :cy="node.cy"
              :r="NODE_SIZE + 5"
              fill="none"
              :stroke="node.color"
              stroke-width="1"
              stroke-opacity="0.6"
            />

            <!-- Element name label -->
            <text
              :x="node.labelX"
              :y="node.labelY"
              :text-anchor="node.labelAnchor"
              dominant-baseline="middle"
              font-size="10"
              font-weight="600"
              :fill="node.isActive ? node.color : '#a3a3a3'"
            >{{ node.label }}</text>
          </g>
        </g>

        <!-- Center label -->
        <text
          x="160"
          y="154"
          text-anchor="middle"
          font-size="10"
          fill="#525252"
          font-weight="500"
        >五</text>
        <text
          x="160"
          y="168"
          text-anchor="middle"
          font-size="10"
          fill="#525252"
          font-weight="500"
        >行</text>
      </svg>

      <!-- Hover tooltip -->
      <Transition name="tooltip">
        <div
          v-if="tooltipVisible && tooltipText"
          class="pointer-events-none absolute z-20 max-w-[180px] glass rounded-lg px-3 py-2
                 text-xs text-ash-200 leading-snug shadow-lg"
          :style="tooltipStyle"
        >
          {{ tooltipText }}
        </div>
      </Transition>
    </div>

    <!-- Legend -->
    <div class="flex items-center justify-center gap-5 mt-4 text-xs text-ash-400">
      <div class="flex items-center gap-1.5">
        <svg width="24" height="10" aria-hidden="true">
          <line x1="0" y1="5" x2="20" y2="5" stroke="#10b981" stroke-width="2" />
          <path d="M 18 2 L 24 5 L 18 8 Z" fill="#10b981" />
        </svg>
        <span>Generates</span>
      </div>
      <div class="flex items-center gap-1.5">
        <svg width="24" height="10" aria-hidden="true">
          <line x1="0" y1="5" x2="20" y2="5" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.7" />
          <path d="M 18 2 L 24 5 L 18 8 Z" fill="#f43f5e" opacity="0.7" />
        </svg>
        <span>Overcomes</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
