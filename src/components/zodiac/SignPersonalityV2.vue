<script setup lang="ts">
defineProps<{
  data: { body: string }
}>()
</script>

<template>
  <section class="glass rounded-xl p-6">
    <h2 class="element-text font-display text-2xl font-bold mb-4">Personality</h2>
    <p class="text-ash-200 leading-relaxed whitespace-pre-line">{{ data.body }}</p>
  </section>
</template>
