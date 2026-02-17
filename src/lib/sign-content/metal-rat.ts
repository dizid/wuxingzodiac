import { getProfileBySlug } from './profiles'
import type { SignContentV2 } from '@/types'

const content: SignContentV2 = {
  slug: 'metal-rat',
  profile: getProfileBySlug('metal-rat')!,

  archetype: {
    name: 'The Sharp-Witted Survivor',
    tagline: 'The Sharp-Witted Survivor — Metal Rat',
  },

  atAGlance: {
    element: 'Metal (Precision, Discipline)',
    energy: 'Yin',
    archetype: 'The Sharp-Witted Survivor',
    coreStrength: 'Elemental resilience',
    shadow: 'Inner tension',
    bestMatch: 'water-rat',
    worstMatch: 'fire-horse',
    luckyColor: 'Gold',
  },

  personality: {
    body: ``,
  },

  shadow: {
    body: `The shadow side of this sign remains to be explored.`,
  },

  relationships: {
    body: `Relationships for this sign are complex and driven by elemental energy.`,
  },

  elementBalance: {
    body: `Balance is key to harnessing the full potential of this sign.`,
  },

  matches: {
    best: [
      { slug: 'water-rat', name: 'Water Rat', reason: 'A complementary elemental pairing.' },
      { slug: 'water-rat', name: 'Water Rat', reason: 'A complementary elemental pairing.' },
      { slug: 'water-rat', name: 'Water Rat', reason: 'A complementary elemental pairing.' },
    ],
    worst: [
      { slug: 'fire-horse', name: 'Fire Horse', reason: 'A challenging elemental clash.' },
      { slug: 'fire-horse', name: 'Fire Horse', reason: 'A challenging elemental clash.' },
      { slug: 'fire-horse', name: 'Fire Horse', reason: 'A challenging elemental clash.' },
    ],
  },
}

export default content
