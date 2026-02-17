<script setup lang="ts">
import type { CareerSection } from '@/types'

defineProps<{
  career: CareerSection
}>()
</script>

<template>
  <section class="space-y-8">
    <!-- Overview -->
    <p class="text-ash-300 text-lg leading-relaxed">
      {{ career.overview }}
    </p>

    <!-- Ideal Careers -->
    <div>
      <h3 class="element-text font-display text-xl font-semibold mb-4">Ideal Careers</h3>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="c in career.idealCareers"
          :key="c"
          class="glass rounded-full px-4 py-1.5 text-sm font-medium text-[var(--el-accent)]"
        >
          {{ c }}
        </span>
      </div>
    </div>

    <!-- Financial Style -->
    <div class="glass rounded-xl p-5 border-l-4 border-[var(--el-500)]">
      <h3 class="element-text font-display text-lg font-semibold mb-2">Financial Style</h3>
      <p class="text-ash-300 leading-relaxed">{{ career.financialStyle }}</p>
    </div>

    <!-- Career Tips -->
    <div>
      <h3 class="font-display text-xl font-semibold mb-4 text-ash-200">Career Tips</h3>
      <ol class="space-y-3">
        <li
          v-for="(tip, i) in career.tips"
          :key="i"
          class="glass rounded-xl p-4 flex gap-4 items-start"
        >
          <span class="shrink-0 w-7 h-7 rounded-full bg-[var(--el-600)]/20 text-[var(--el-accent)] flex items-center justify-center text-sm font-bold">
            {{ i + 1 }}
          </span>
          <p class="text-ash-300 leading-relaxed">{{ tip }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
