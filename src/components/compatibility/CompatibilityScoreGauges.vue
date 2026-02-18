<template>
  <!-- Glass card wrapper -->
  <div class="rounded-2xl border border-ash-700/50 bg-ash-900/60 backdrop-blur-sm p-6">
    <h3 class="font-display text-base font-semibold text-ash-200 mb-5 tracking-wide uppercase">
      Compatibility Breakdown
    </h3>

    <div class="space-y-5">
      <!-- Chemistry gauge -->
      <div>
        <div class="flex items-baseline justify-between mb-2">
          <span class="text-sm font-medium text-ash-300">Chemistry</span>
          <span class="text-sm font-semibold tabular-nums" :class="chemistryColor">
            {{ props.chemistry }}
          </span>
        </div>
        <div class="h-2 w-full rounded-full bg-ash-800 overflow-hidden">
          <div
            class="h-full rounded-full transition-[width] duration-700 ease-out"
            :style="{ width: chemistryWidth, backgroundImage: 'linear-gradient(to right, #22c55e, #34d399)' }"
          />
        </div>
        <p class="mt-1.5 text-xs text-ash-500">Animal-to-animal magnetic pull</p>
      </div>

      <!-- Support gauge -->
      <div>
        <div class="flex items-baseline justify-between mb-2">
          <span class="text-sm font-medium text-ash-300">Support</span>
          <span class="text-sm font-semibold tabular-nums" :class="supportColor">
            {{ props.support }}
          </span>
        </div>
        <div class="h-2 w-full rounded-full bg-ash-800 overflow-hidden">
          <div
            class="h-full rounded-full transition-[width] duration-700 ease-out"
            :style="{ width: supportWidth, backgroundImage: 'linear-gradient(to right, #3b82f6, #22d3ee)' }"
          />
        </div>
        <p class="mt-1.5 text-xs text-ash-500">How much your elements nourish each other</p>
      </div>

      <!-- Friction gauge -->
      <div>
        <div class="flex items-baseline justify-between mb-2">
          <span class="text-sm font-medium text-ash-300">Friction</span>
          <span class="text-sm font-semibold tabular-nums" :class="frictionColor">
            {{ props.friction }}
          </span>
        </div>
        <div class="h-2 w-full rounded-full bg-ash-800 overflow-hidden">
          <div
            class="h-full rounded-full transition-[width] duration-700 ease-out"
            :style="{ width: frictionWidth, backgroundImage: 'linear-gradient(to right, #ef4444, #fb923c)' }"
          />
        </div>
        <p class="mt-1.5 text-xs text-ash-500">Elemental tension and clash potential</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

const props = defineProps<{
  chemistry: number
  support: number
  friction: number
}>()

// Animate bars from 0 to target on mount
const mounted = ref(false)
onMounted(() => {
  // Small delay ensures CSS transition fires after initial render
  requestAnimationFrame(() => {
    mounted.value = true
  })
})

const chemistryWidth = computed(() => mounted.value ? `${props.chemistry}%` : '0%')
const supportWidth = computed(() => mounted.value ? `${props.support}%` : '0%')
const frictionWidth = computed(() => mounted.value ? `${props.friction}%` : '0%')

// Score label colors — green for high chemistry/support, red for high friction
const chemistryColor = computed(() => {
  if (props.chemistry >= 75) return 'text-emerald-400'
  if (props.chemistry >= 55) return 'text-amber-400'
  return 'text-red-400'
})

const supportColor = computed(() => {
  if (props.support >= 70) return 'text-cyan-400'
  if (props.support >= 50) return 'text-blue-400'
  return 'text-red-400'
})

const frictionColor = computed(() => {
  if (props.friction >= 65) return 'text-red-400'
  if (props.friction >= 40) return 'text-amber-400'
  return 'text-emerald-400'
})
</script>
