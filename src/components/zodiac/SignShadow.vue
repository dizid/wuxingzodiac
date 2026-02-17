<script setup lang="ts">
defineProps<{
  data: { body: string }
}>()
</script>

<template>
  <section class="glass rounded-xl p-6 border-l-4 border-[var(--el-500)]">
    <h2 class="font-display text-2xl font-bold text-ash-200 mb-4">The Shadow Side</h2>
    <p class="text-ash-300 leading-relaxed whitespace-pre-line">{{ data.body }}</p>
  </section>
</template>
