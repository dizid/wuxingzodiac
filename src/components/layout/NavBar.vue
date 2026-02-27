<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUserSign } from '@/composables/useUserSign'

const route = useRoute()
const mobileMenuOpen = ref(false)
const { userSign } = useUserSign()

const baseNavItems = [
  { label: 'Home', to: '/' },
  { label: 'All Signs', to: '/zodiac' },
  { label: 'Compatibility', to: '/compatibility' },
  { label: 'Shop', to: '/shop' },
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
</script>

<template>
  <nav class="sticky top-0 z-50 glass-strong">
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
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
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
          class="flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-ash-800/50 transition-colors"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileMenuOpen"
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
    >
      <div v-if="mobileMenuOpen" class="md:hidden glass-strong border-t border-ash-800/50">
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
