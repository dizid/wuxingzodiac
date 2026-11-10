<script setup lang="ts">
import { useHead } from '@unhead/vue'

// Unknown URLs (and invalid sign/element slugs) get this page with status 200
// (SPA fallback): its own title and noindex keep Google from indexing it as a
// copy of the home page (soft 404).
useHead({
  title: 'Page not found | Wu Xing Zodiac',
  meta: [{ name: 'robots', content: 'noindex' }],
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4">
    <h1 class="multi-element-text font-display text-8xl font-bold mb-4">404</h1>
    <p class="text-ash-400 text-lg mb-8">This path leads nowhere in the celestial cycle.</p>
    <router-link to="/" class="btn-element">
      Find Your Sign
    </router-link>
  </div>
</template>
