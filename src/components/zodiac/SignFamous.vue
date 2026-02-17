<script setup lang="ts">
import type { FamousSection } from '@/types'

defineProps<{
  famous: FamousSection
}>()
</script>

<template>
  <section>
    <div class="grid gap-4 sm:grid-cols-2">
      <div
        v-for="person in famous.people"
        :key="person.name"
        class="glass rounded-xl p-5"
      >
        <div class="flex items-start justify-between mb-2">
          <h4 class="text-[var(--el-accent)] font-semibold text-lg">{{ person.name }}</h4>
          <span class="text-ash-500 text-sm shrink-0 ml-2">{{ person.birthYear }}</span>
        </div>
        <p class="text-ash-400 text-sm font-medium mb-2">{{ person.profession }}</p>
        <p class="text-ash-300 text-sm leading-relaxed">{{ person.description }}</p>
      </div>
    </div>
  </section>
</template>
