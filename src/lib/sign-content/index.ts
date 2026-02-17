// ============================================
// SIGN CONTENT LAZY-LOADER
// ============================================
// Each sign's full content lives in its own file (e.g. ./fire-horse.ts).
// This loader imports them on demand so the main bundle stays small.
// Uses import.meta.glob so Vite can properly bundle each file as a chunk.

import type { SignContentV2 } from '@/types'

// Vite resolves these at build time into lazy chunk imports
const contentModules = import.meta.glob<{ default: SignContentV2 }>([
  './*.ts',
  '!./index.ts',
  '!./profiles.ts',
  '!./archetypes.ts',
])

/**
 * Lazy-load the full content for a sign by its slug.
 * Returns the default export from `./[slug].ts`.
 *
 * Usage:
 *   const content = await loadSignContent('fire-horse')
 */
export async function loadSignContent(slug: string): Promise<SignContentV2> {
  const loader = contentModules[`./${slug}.ts`]
  if (!loader) {
    throw new Error(`Unknown sign slug: ${slug}`)
  }
  const module = await loader()
  return module.default
}

// Re-export profiles and helpers for convenience
export { signProfiles, getProfileBySlug, getProfilesByAnimal, getProfilesByElement } from './profiles'
