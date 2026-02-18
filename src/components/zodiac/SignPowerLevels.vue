<script setup lang="ts">
// ============================================
// SignPowerLevels.vue
// Animated CSS progress bars for 6 personality traits
// Element-themed gradient fill, mount animation
// ============================================

import { onMounted, ref } from 'vue'
import type { TraitScores } from '@/types'

const props = defineProps<{
  traits: TraitScores
}>()

// Whether bars have triggered their CSS transition
const animated = ref(false)

// Trait configuration: icon, label, key
const TRAITS: {
  key: keyof TraitScores
  label: string
  icon: string
}[] = [
  { key: 'strategy', label: 'Strategy', icon: '♟' },
  { key: 'compassion', label: 'Compassion', icon: '♡' },
  { key: 'resilience', label: 'Resilience', icon: '⬡' },
  { key: 'ambition', label: 'Ambition', icon: '↑' },
  { key: 'sociability', label: 'Sociability', icon: '✦' },
  { key: 'creativity', label: 'Creativity', icon: '◈' },
]

// Animate on mount: defer one frame so CSS transition fires
onMounted(() => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      animated.value = true
    })
  })
})

// Bar width string, 0% when not yet animated to trigger transition
function barWidth(key: keyof TraitScores): string {
  return animated.value ? `${props.traits[key]}%` : '0%'
}

// Color-code the percentage label based on value
function scoreColor(val: number): string {
  if (val >= 85) return 'text-[var(--el-300)]'
  if (val >= 70) return 'text-[var(--el-400)]'
  if (val >= 50) return 'text-ash-300'
  return 'text-ash-500'
}
</script>

<template>
  <div class="glass rounded-2xl p-5">
    <h3 class="font-display text-base font-semibold text-ash-200 mb-5 tracking-wide">
      Power Levels
    </h3>

    <ul class="space-y-4" role="list">
      <li
        v-for="trait in TRAITS"
        :key="trait.key"
        class="space-y-1.5"
      >
        <!-- Label row -->
        <div class="flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            <!-- Icon: monospaced, element-tinted -->
            <span
              class="flex-shrink-0 w-6 h-6 flex items-center justify-center
                     rounded-md bg-[rgba(var(--el-glow-rgb),0.1)]
                     text-[var(--el-400)] text-sm font-bold leading-none select-none"
              aria-hidden="true"
            >{{ trait.icon }}</span>
            <span class="text-sm font-medium text-ash-200 truncate">{{ trait.label }}</span>
          </div>

          <!-- Score -->
          <span
            class="flex-shrink-0 text-sm font-semibold tabular-nums"
            :class="scoreColor(traits[trait.key])"
          >{{ traits[trait.key] }}</span>
        </div>

        <!-- Progress bar track -->
        <div
          class="w-full h-1.5 rounded-full bg-ash-800 overflow-hidden"
          role="progressbar"
          :aria-valuenow="traits[trait.key]"
          aria-valuemin="0"
          aria-valuemax="100"
          :aria-label="`${trait.label}: ${traits[trait.key]} out of 100`"
        >
          <!-- Fill: element gradient, CSS-transitioned width -->
          <div
            class="h-full rounded-full"
            style="
              background: linear-gradient(to right, var(--el-600), var(--el-400));
              transition: width 900ms cubic-bezier(0.4, 0, 0.2, 1);
            "
            :style="{ width: barWidth(trait.key) }"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
