<template>
  <!-- Glass card wrapper -->
  <div class="rounded-2xl border border-ash-700/50 bg-ash-900/60 backdrop-blur-sm p-6">
    <h3 class="font-display text-base font-semibold text-ash-200 mb-5 tracking-wide uppercase">
      Where You Connect &amp; Clash
    </h3>

    <!-- 5-card grid: 1 col on mobile, 2 on sm, up to 3 cols on lg when space allows -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="point in props.frictionPoints"
        :key="point.category"
        class="rounded-xl border p-4 transition-colors"
        :class="cardClasses(point.intensity)"
      >
        <!-- Category header row -->
        <div class="flex items-center gap-2 mb-3">
          <!-- Intensity icon -->
          <span class="text-lg leading-none select-none" :class="iconColorClass(point.intensity)" aria-hidden="true">
            {{ intensityIcon(point.intensity) }}
          </span>

          <!-- Category name -->
          <span class="font-semibold text-sm capitalize" :class="categoryTextClass(point.intensity)">
            {{ CATEGORY_LABELS[point.category] }}
          </span>

          <!-- Intensity badge — pushed to right -->
          <span
            class="ml-auto text-xs font-medium px-2 py-0.5 rounded-full border"
            :class="badgeClasses(point.intensity)"
          >
            {{ intensityLabel(point.intensity) }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-xs leading-relaxed text-ash-400">
          {{ point.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FrictionPoint } from '@/types'

const props = defineProps<{
  frictionPoints: FrictionPoint[]
}>()

// Human-readable category names
const CATEGORY_LABELS: Record<FrictionPoint['category'], string> = {
  communication: 'Communication',
  values: 'Values',
  lifestyle: 'Lifestyle',
  emotional: 'Emotional',
  growth: 'Growth',
}

// Intensity icon — SVG-free, Unicode glyphs that render cleanly at small sizes
function intensityIcon(intensity: FrictionPoint['intensity']): string {
  if (intensity === 'spark') return '⚡'
  if (intensity === 'friction') return '↔'
  return '⚠'
}

function intensityLabel(intensity: FrictionPoint['intensity']): string {
  if (intensity === 'spark') return 'Low Friction'
  if (intensity === 'friction') return 'Moderate Tension'
  return 'High Conflict'
}

// Card border + background based on intensity
function cardClasses(intensity: FrictionPoint['intensity']): string {
  if (intensity === 'spark') {
    return 'border-emerald-700/40 bg-emerald-950/20'
  }
  if (intensity === 'friction') {
    return 'border-amber-700/40 bg-amber-950/20'
  }
  // clash — subtle red border glow
  return 'border-red-600/50 bg-red-950/20 shadow-[0_0_12px_rgba(239,68,68,0.12)]'
}

function categoryTextClass(intensity: FrictionPoint['intensity']): string {
  if (intensity === 'spark') return 'text-emerald-300'
  if (intensity === 'friction') return 'text-amber-300'
  return 'text-red-300'
}

function iconColorClass(intensity: FrictionPoint['intensity']): string {
  if (intensity === 'spark') return 'text-emerald-400'
  if (intensity === 'friction') return 'text-amber-400'
  return 'text-red-400'
}

function badgeClasses(intensity: FrictionPoint['intensity']): string {
  if (intensity === 'spark') {
    return 'bg-emerald-900/50 text-emerald-300 border-emerald-700/50'
  }
  if (intensity === 'friction') {
    return 'bg-amber-900/50 text-amber-300 border-amber-700/50'
  }
  return 'bg-red-900/40 text-red-300 border-red-700/50'
}
</script>
