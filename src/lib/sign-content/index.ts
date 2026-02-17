// ============================================
// SIGN CONTENT LAZY-LOADER
// ============================================
// Each sign's full content lives in its own file (e.g. ./fire-horse.ts).
// This loader imports them on demand so the main bundle stays small.

import type { SignContent } from '@/types'

/**
 * Lazy-load the full content for a sign by its slug.
 * Returns the default export from `./[slug].ts`.
 *
 * Usage:
 *   const content = await loadSignContent('fire-horse')
 */
export async function loadSignContent(slug: string): Promise<SignContent> {
  const module = await import(`./${slug}.ts`)
  return module.default
}

// Re-export profiles and helpers for convenience
export { signProfiles, getProfileBySlug, getProfilesByAnimal, getProfilesByElement } from './profiles'
