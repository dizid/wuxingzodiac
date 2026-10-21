// ============================================
// SIGN CONTENT REGISTRY (server-side)
// ============================================
// The app loads sign content with import.meta.glob, which only exists in
// Vite. Netlify functions (esbuild) and tsx need static import paths, so
// each of the 60 sign files is listed here as a lazy loader.

import type { SignContentV2 } from '../../../types'

type ContentLoader = () => Promise<{ default: SignContentV2 }>

const LOADERS: Record<string, ContentLoader> = {
  'wood-rat': () => import('../../sign-content/wood-rat'),
  'wood-ox': () => import('../../sign-content/wood-ox'),
  'wood-tiger': () => import('../../sign-content/wood-tiger'),
  'wood-rabbit': () => import('../../sign-content/wood-rabbit'),
  'wood-dragon': () => import('../../sign-content/wood-dragon'),
  'wood-snake': () => import('../../sign-content/wood-snake'),
  'wood-horse': () => import('../../sign-content/wood-horse'),
  'wood-goat': () => import('../../sign-content/wood-goat'),
  'wood-monkey': () => import('../../sign-content/wood-monkey'),
  'wood-rooster': () => import('../../sign-content/wood-rooster'),
  'wood-dog': () => import('../../sign-content/wood-dog'),
  'wood-pig': () => import('../../sign-content/wood-pig'),

  'fire-rat': () => import('../../sign-content/fire-rat'),
  'fire-ox': () => import('../../sign-content/fire-ox'),
  'fire-tiger': () => import('../../sign-content/fire-tiger'),
  'fire-rabbit': () => import('../../sign-content/fire-rabbit'),
  'fire-dragon': () => import('../../sign-content/fire-dragon'),
  'fire-snake': () => import('../../sign-content/fire-snake'),
  'fire-horse': () => import('../../sign-content/fire-horse'),
  'fire-goat': () => import('../../sign-content/fire-goat'),
  'fire-monkey': () => import('../../sign-content/fire-monkey'),
  'fire-rooster': () => import('../../sign-content/fire-rooster'),
  'fire-dog': () => import('../../sign-content/fire-dog'),
  'fire-pig': () => import('../../sign-content/fire-pig'),

  'earth-rat': () => import('../../sign-content/earth-rat'),
  'earth-ox': () => import('../../sign-content/earth-ox'),
  'earth-tiger': () => import('../../sign-content/earth-tiger'),
  'earth-rabbit': () => import('../../sign-content/earth-rabbit'),
  'earth-dragon': () => import('../../sign-content/earth-dragon'),
  'earth-snake': () => import('../../sign-content/earth-snake'),
  'earth-horse': () => import('../../sign-content/earth-horse'),
  'earth-goat': () => import('../../sign-content/earth-goat'),
  'earth-monkey': () => import('../../sign-content/earth-monkey'),
  'earth-rooster': () => import('../../sign-content/earth-rooster'),
  'earth-dog': () => import('../../sign-content/earth-dog'),
  'earth-pig': () => import('../../sign-content/earth-pig'),

  'metal-rat': () => import('../../sign-content/metal-rat'),
  'metal-ox': () => import('../../sign-content/metal-ox'),
  'metal-tiger': () => import('../../sign-content/metal-tiger'),
  'metal-rabbit': () => import('../../sign-content/metal-rabbit'),
  'metal-dragon': () => import('../../sign-content/metal-dragon'),
  'metal-snake': () => import('../../sign-content/metal-snake'),
  'metal-horse': () => import('../../sign-content/metal-horse'),
  'metal-goat': () => import('../../sign-content/metal-goat'),
  'metal-monkey': () => import('../../sign-content/metal-monkey'),
  'metal-rooster': () => import('../../sign-content/metal-rooster'),
  'metal-dog': () => import('../../sign-content/metal-dog'),
  'metal-pig': () => import('../../sign-content/metal-pig'),

  'water-rat': () => import('../../sign-content/water-rat'),
  'water-ox': () => import('../../sign-content/water-ox'),
  'water-tiger': () => import('../../sign-content/water-tiger'),
  'water-rabbit': () => import('../../sign-content/water-rabbit'),
  'water-dragon': () => import('../../sign-content/water-dragon'),
  'water-snake': () => import('../../sign-content/water-snake'),
  'water-horse': () => import('../../sign-content/water-horse'),
  'water-goat': () => import('../../sign-content/water-goat'),
  'water-monkey': () => import('../../sign-content/water-monkey'),
  'water-rooster': () => import('../../sign-content/water-rooster'),
  'water-dog': () => import('../../sign-content/water-dog'),
  'water-pig': () => import('../../sign-content/water-pig'),
}

/** Load the full V2 content for a sign slug (e.g. 'fire-horse'). */
export async function loadSignContentServer(slug: string): Promise<SignContentV2> {
  const loader = LOADERS[slug]
  if (!loader) throw new Error(`Unknown sign slug: ${slug}`)
  const module = await loader()
  return module.default
}
