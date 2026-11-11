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
  loadedContent.set(slug, module.default)
  return module.default
}

// Content already loaded in this page session (or this prerender run), by slug.
// The sign route awaits preloadSignContent() before the page renders, so the
// page can read its text synchronously: the prerendered HTML then holds the
// full sign text (AI crawlers don't run JavaScript), and the browser loads the
// same chunk before hydrating, so it reuses that HTML instead of redrawing it.
const loadedContent = new Map<string, SignContentV2>()

/** The sign's content if it's already loaded, else null (never starts a load). */
export function getLoadedSignContent(slug: string): SignContentV2 | null {
  return loadedContent.get(slug) ?? null
}

/**
 * Load a sign's content ahead of rendering. Never throws: if the chunk fails
 * (offline, stale deploy), the page loads it itself and shows its retry state.
 */
export async function preloadSignContent(slug: string): Promise<void> {
  if (loadedContent.has(slug)) return
  try {
    await loadSignContent(slug)
  } catch {
    // handled by the page (see above)
  }
}

// Re-export profiles and helpers for convenience
export { signProfiles, getProfileBySlug, getProfilesByAnimal, getProfilesByElement } from './profiles'
