<script setup lang="ts">
import { useHead } from '@unhead/vue'

// Unknown URLs get this page prerendered as dist/404.html, served by Netlify with a
// 404 status. Invalid slugs under /compatibility and /blog (200 SPA fallback) and
// invalid sign/element slugs reached in the browser render it client-side: its own
// title and noindex keep Google from indexing those as copies of the home page.
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
