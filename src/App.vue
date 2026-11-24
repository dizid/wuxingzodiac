<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/layout/NavBar.vue'
import FooterBar from '@/components/layout/FooterBar.vue'

// "Skip to content": move keyboard focus past the top bar's links to the page itself. Focus is
// moved here instead of following the #main-content link, so the URL gets no hash (the plain
// link still works without JavaScript). tabindex only while focused, so clicks on page text
// never focus <main>.
function skipToContent(event: MouseEvent) {
  const main = document.getElementById('main-content')
  if (!main) return
  event.preventDefault()
  main.setAttribute('tabindex', '-1')
  main.focus()
  main.addEventListener('blur', () => main.removeAttribute('tabindex'), { once: true })
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Hidden until it gets keyboard focus (first Tab stop on every page) -->
    <a href="#main-content" class="skip-link sr-only" @click="skipToContent">Skip to content</a>
    <NavBar />
    <!-- outline-none: no focus outline around the whole page after the skip link -->
    <main id="main-content" class="flex-1 outline-none">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
/* Shown over the top bar's logo while focused; undoes every sr-only property */
.skip-link:focus {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 60;
  width: auto;
  height: auto;
  margin: 0;
  padding: 0.5rem 1rem;
  overflow: visible;
  clip: auto;
  clip-path: none;
  white-space: nowrap;
  border-radius: 0.5rem;
  background: var(--color-ash-900);
  color: var(--color-ash-100);
  font-size: 0.875rem;
  font-weight: 500;
}
</style>
