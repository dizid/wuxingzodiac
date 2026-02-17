<script setup lang="ts">
import type { HealthSection } from '@/types'

defineProps<{
  health: HealthSection
}>()
</script>

<template>
  <section class="space-y-8">
    <!-- Overview -->
    <p class="text-ash-300 text-lg leading-relaxed">
      {{ health.overview }}
    </p>

    <!-- Body Areas -->
    <div>
      <h3 class="element-text font-display text-xl font-semibold mb-4">Body Areas to Watch</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="area in health.bodyAreas"
          :key="area"
          class="glass rounded-full px-4 py-1.5 text-sm font-medium text-[var(--el-accent)]"
        >
          {{ area }}
        </span>
      </div>
    </div>

    <!-- Exercises & Diet side by side -->
    <div class="grid gap-4 sm:grid-cols-2">
      <!-- Recommended Exercises -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Recommended Exercises</h3>
        <ul class="space-y-2">
          <li
            v-for="(exercise, i) in health.exercises"
            :key="i"
            class="flex gap-3 items-start text-ash-300"
          >
            <span class="shrink-0 w-2 h-2 rounded-full bg-[var(--el-accent)] mt-2" />
            <span>{{ exercise }}</span>
          </li>
        </ul>
      </div>

      <!-- Diet Tips -->
      <div class="glass rounded-xl p-5">
        <h3 class="element-text font-display text-lg font-semibold mb-3">Diet Tips</h3>
        <ul class="space-y-2">
          <li
            v-for="(tip, i) in health.dietTips"
            :key="i"
            class="flex gap-3 items-start text-ash-300"
          >
            <span class="shrink-0 w-2 h-2 rounded-full bg-[var(--el-accent)] mt-2" />
            <span>{{ tip }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Mental Health -->
    <div class="glass rounded-xl p-5 border-l-4 border-[var(--el-500)]">
      <h3 class="element-text font-display text-lg font-semibold mb-2">Mental Health</h3>
      <p class="text-ash-300 leading-relaxed">{{ health.mentalHealth }}</p>
    </div>
  </section>
</template>
