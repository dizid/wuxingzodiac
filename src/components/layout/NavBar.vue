<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useUserSign } from '@/composables/useUserSign'
import { useShopify } from '@/composables/useShopify'

const route = useRoute()
const mobileMenuOpen = ref(false)
const { userSign } = useUserSign()
const { cartCount, cartOpen } = useShopify()

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

          <!-- Cart icon -->
          <button
            class="relative ml-2 p-2 rounded-lg text-ash-400 hover:text-ash-100 hover:bg-ash-800/50 transition-all"
            aria-label="Open cart"
            @click="cartOpen = true"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[10px] font-bold rounded-full"
              style="background: var(--el-primary, #64748b); color: white;"
            >
              {{ cartCount > 9 ? '9+' : cartCount }}
            </span>
          </button>
        </div>

        <!-- Mobile: cart + hamburger -->
        <div class="md:hidden flex items-center gap-1">
          <button
            class="relative p-2 rounded-lg text-ash-400 hover:text-ash-100 hover:bg-ash-800/50 transition-all"
            aria-label="Open cart"
            @click="cartOpen = true"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center text-[10px] font-bold rounded-full"
              style="background: var(--el-primary, #64748b); color: white;"
            >
              {{ cartCount > 9 ? '9+' : cartCount }}
            </span>
          </button>
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
