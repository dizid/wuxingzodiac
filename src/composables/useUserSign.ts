import { ref, onMounted } from 'vue'
import type { SignProfile } from '@/types'
import { getProfileBySlug } from '@/lib/sign-content/profiles'

const STORAGE_KEY = 'wuxing_user_sign'

// Shared state across all component instances
const userSign = ref<SignProfile | null>(null)
const initialized = ref(false)

/**
 * Stores and retrieves the user's zodiac sign from localStorage.
 * SSR-safe: returns null during SSG pre-rendering, hydrates on client mount.
 * State is shared across all components using this composable.
 */
export function useUserSign() {
  function setUserSign(slug: string) {
    if (typeof window === 'undefined') return
    const profile = getProfileBySlug(slug)
    if (!profile) return
    localStorage.setItem(STORAGE_KEY, slug)
    userSign.value = profile
  }

  function clearUserSign() {
    if (typeof window === 'undefined') return
    localStorage.removeItem(STORAGE_KEY)
    userSign.value = null
  }

  // Hydrate from localStorage on first client mount
  onMounted(() => {
    if (initialized.value) return
    initialized.value = true
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const profile = getProfileBySlug(stored)
      if (profile) {
        userSign.value = profile
      } else {
        // Invalid stored slug — clean up
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  })

  return {
    userSign,
    setUserSign,
    clearUserSign,
  }
}
