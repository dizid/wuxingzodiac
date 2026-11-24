<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUserSign } from '@/composables/useUserSign'

const route = useRoute()
const mobileMenuOpen = ref(false)
const { userSign } = useUserSign()
const navEl = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)

const baseNavItems = [
  { label: 'Home', to: '/' },
  { label: 'All Signs', to: '/zodiac' },
  { label: 'Compatibility', to: '/compatibility' },
  { label: 'Reading', to: '/reading' },
  { label: 'Calculator', to: '/calculator' },
  { label: 'Blog', to: '/blog' },
]

// Append "My Sign" link when user has saved their sign
const navItems = computed(() => {
  if (!userSign.value) return baseNavItems
  return [
    ...baseNavItems,
    { label: 'My Sign', to: `/zodiac/${userSign.value.slug}` },
  ]
})

function isActive(to: string): boolean {
  if (to === '/') return route.path === '/'
  return route.path.startsWith(to)
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

// Keyboard use of the open phone menu (listener only while it is open):
// - Escape closes it and puts focus back on the menu button
// - Tab/Shift+Tab out of the nav closes it, so the open menu doesn't cover the page link that
//   now has focus. Taps are not affected (they don't send Tab).
function onMenuKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMobileMenu()
    menuButton.value?.focus()
  } else if (event.key === 'Tab') {
    // Focus moves after keydown: check where it landed on the next task
    setTimeout(() => {
      const active = document.activeElement
      if (active && active !== document.body && !navEl.value?.contains(active)) closeMobileMenu()
    })
  }
}

watch(mobileMenuOpen, (open) => {
  if (open) document.addEventListener('keydown', onMenuKeydown)
  else document.removeEventListener('keydown', onMenuKeydown)
})
onBeforeUnmount(() => document.removeEventListener('keydown', onMenuKeydown))

// Any page change closes the menu (Back button, links on the page under the open menu)
watch(() => route.fullPath, closeMobileMenu)

// When the menu closed because keyboard focus left it, the page moves up by the menu's height:
// keep the focused page link in view below the sticky bar (html scroll-padding-top)
function onMenuClosed() {
  const active = document.activeElement
  if (active instanceof HTMLElement && active !== document.body && !navEl.value?.contains(active)) {
    active.scrollIntoView({ block: 'nearest' })
  }
}
</script>

<template>
  <nav ref="navEl" class="sticky top-0 z-50 glass-strong">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <RouterLink
          to="/"
          class="flex items-center gap-2 text-xl font-display font-bold tracking-wide"
          @click="closeMobileMenu"
        >
          <span class="text-2xl">&#9775;</span>
          <span class="multi-element-text">Wu Xing Zodiac</span>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="isActive(item.to)
              ? 'text-[var(--el-primary)] bg-[rgba(var(--el-glow-rgb),0.1)]'
              : 'text-ash-400 hover:text-ash-100 hover:bg-ash-800/50'"
          >
            {{ item.label }}
          </RouterLink>

        </div>

        <!-- Mobile: cart + hamburger -->
        <div class="md:hidden flex items-center gap-1">
        <button
          ref="menuButton"
          class="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-ash-800/50 transition-colors"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span
            class="block w-5 h-0.5 bg-ash-300 transition-all duration-300"
            :class="mobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''"
          />
          <span
            class="block w-5 h-0.5 bg-ash-300 mt-1 transition-all duration-300"
            :class="mobileMenuOpen ? 'opacity-0' : ''"
          />
          <span
            class="block w-5 h-0.5 bg-ash-300 mt-1 transition-all duration-300"
            :class="mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''"
          />
        </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
      @after-leave="onMenuClosed"
    >
      <!-- mobile-menu-panel: scrolls when taller than the screen (sideways phones; the bar is
           sticky, so a taller menu could never be scrolled to its last links) -->
      <div v-if="mobileMenuOpen" id="mobile-menu" class="mobile-menu-panel md:hidden glass-strong border-t border-ash-800/50">
        <div class="px-4 py-3 space-y-1">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            :class="isActive(item.to)
              ? 'text-[var(--el-primary)] bg-[rgba(var(--el-glow-rgb),0.1)]'
              : 'text-ash-400 hover:text-ash-100 hover:bg-ash-800/50'"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Screen height minus the 64px bar; 100vh first for browsers without dvh. Same look when the
   menu fits; scrolls inside (not the page behind) when it doesn't. */
.mobile-menu-panel {
  max-height: calc(100vh - 4rem);
  max-height: calc(100dvh - 4rem);
  overflow-y: auto;
  overscroll-behavior: contain;
}
</style>
