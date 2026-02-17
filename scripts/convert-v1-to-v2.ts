// ============================================
// Convert V1 sign content files → V2 format
// ============================================
// Reads existing V1 SignContent files and outputs new SignContentV2 files.
// This is a local transformation — no API calls needed.
// Run: npx tsx scripts/convert-v1-to-v2.ts

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const CONTENT_DIR = join(__dirname, '../src/lib/sign-content')
const LEGACY_DIR = join(CONTENT_DIR, 'legacy')

const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const
const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const

const ARCHETYPES: Record<string, string> = {
  'wood-rat': 'The Resourceful Pioneer', 'wood-ox': 'The Steadfast Cultivator',
  'wood-tiger': 'The Compassionate Adventurer', 'wood-rabbit': 'The Gentle Visionary',
  'wood-dragon': 'The Creative Titan', 'wood-snake': 'The Thoughtful Philosopher',
  'wood-horse': 'The Free-Spirited Wanderer', 'wood-goat': 'The Artistic Dreamer',
  'wood-monkey': 'The Inventive Trickster', 'wood-rooster': 'The Principled Craftsman',
  'wood-dog': 'The Loyal Guardian', 'wood-pig': 'The Generous Soul',
  'fire-rat': 'The Blazing Opportunist', 'fire-ox': 'The Relentless Forge',
  'fire-tiger': 'The Fearless Inferno', 'fire-rabbit': 'The Radiant Diplomat',
  'fire-dragon': 'The Celestial Blaze', 'fire-snake': 'The Mesmerizing Flame',
  'fire-horse': 'The Untamable Spirit', 'fire-goat': 'The Passionate Creator',
  'fire-monkey': 'The Daring Catalyst', 'fire-rooster': 'The Bold Perfectionist',
  'fire-dog': 'The Fierce Protector', 'fire-pig': 'The Warm-Hearted Champion',
  'earth-rat': 'The Grounded Strategist', 'earth-ox': 'The Immovable Mountain',
  'earth-tiger': 'The Patient Warrior', 'earth-rabbit': 'The Serene Mediator',
  'earth-dragon': 'The Sovereign Builder', 'earth-snake': 'The Silent Authority',
  'earth-horse': 'The Enduring Trailblazer', 'earth-goat': 'The Nurturing Architect',
  'earth-monkey': 'The Pragmatic Innovator', 'earth-rooster': 'The Diligent Master',
  'earth-dog': 'The Unwavering Sentinel', 'earth-pig': 'The Abundant Provider',
  'metal-rat': 'The Sharp-Witted Survivor', 'metal-ox': 'The Iron Pillar',
  'metal-tiger': 'The Steel Enforcer', 'metal-rabbit': 'The Polished Strategist',
  'metal-dragon': 'The Iron Emperor', 'metal-snake': 'The Calculating Blade',
  'metal-horse': 'The Armored Charger', 'metal-goat': 'The Refined Artisan',
  'metal-monkey': 'The Cunning Alchemist', 'metal-rooster': 'The Unyielding Critic',
  'metal-dog': 'The Resolute Knight', 'metal-pig': 'The Benevolent Stronghold',
  'water-rat': 'The Fluid Strategist', 'water-ox': 'The Deep Current',
  'water-tiger': 'The Intuitive Hunter', 'water-rabbit': 'The Flowing Peacemaker',
  'water-dragon': 'The Tidal Force', 'water-snake': 'The Enigmatic Depths',
  'water-horse': 'The Adaptive Nomad', 'water-goat': 'The Empathic Healer',
  'water-monkey': 'The Quicksilver Mind', 'water-rooster': 'The Perceptive Observer',
  'water-dog': 'The Faithful Tide', 'water-pig': 'The Boundless Heart',
}

// Element descriptions for atAGlance
const ELEMENT_LABELS: Record<string, string> = {
  wood: 'Wood (Growth, Flexibility)',
  fire: 'Fire (Passion, Transformation)',
  earth: 'Earth (Stability, Nurturing)',
  metal: 'Metal (Precision, Discipline)',
  water: 'Water (Wisdom, Adaptability)',
}

// Yin/Yang by element (simplified: yang elements = wood, fire; yin = metal, water; earth = balanced)
const ELEMENT_ENERGY: Record<string, string> = {
  wood: 'Yang', fire: 'Yang', earth: 'Balanced', metal: 'Yin', water: 'Yin',
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function displayName(element: string, animal: string): string {
  return `${cap(element)} ${cap(animal)}`
}

// Extract structured data from V1 source text using regex
function extractV1Data(source: string, slug: string) {
  // Extract personality overview
  const overviewMatch = source.match(/overview:\s*`([\s\S]*?)`/)
  const overview = overviewMatch ? overviewMatch[1].trim() : ''

  // Extract core traits
  const coreTraitsMatch = source.match(/coreTraits:\s*\[([\s\S]*?)\]/)
  const coreTraits = coreTraitsMatch
    ? coreTraitsMatch[1].match(/'([^']+)'/g)?.map(s => s.replace(/'/g, '')) ?? []
    : []

  // Extract challenges (trait + description)
  const challengeBlocks = [...source.matchAll(/challenges:\s*\[([\s\S]*?)\],?\s*\n\s*(?:element|$)/g)]
  let challenges: { trait: string; description: string }[] = []
  if (challengeBlocks.length > 0) {
    const block = challengeBlocks[0][1]
    const items = [...block.matchAll(/trait:\s*'([^']+)',\s*description:\s*(?:`([\s\S]*?)`|'([^']*?)')/g)]
    challenges = items.map(m => ({ trait: m[1], description: (m[2] || m[3]).trim() }))
  }

  // Extract elementInfluence
  const elementInflMatch = source.match(/elementInfluence:\s*`([\s\S]*?)`/)
  const elementInfluence = elementInflMatch ? elementInflMatch[1].trim() : ''

  // Extract best matches
  const bestMatchBlock = source.match(/bestMatches:\s*\[([\s\S]*?)\],?\s*\n\s*challenging/)
  const bestMatches = bestMatchBlock
    ? [...bestMatchBlock[1].matchAll(/slug:\s*'([^']+)',[\s\S]*?name:\s*'([^']+)',[\s\S]*?score:\s*(\d+),[\s\S]*?summary:\s*(?:`([\s\S]*?)`|'([^']*?)')/g)]
      .map(m => ({ slug: m[1], name: m[2], score: Number(m[3]), summary: (m[4] || m[5]).trim() }))
    : []

  // Extract challenging matches
  const challengeMatchBlock = source.match(/challengingMatches:\s*\[([\s\S]*?)\],?\s*\n\s*element/)
  const challengingMatches = challengeMatchBlock
    ? [...challengeMatchBlock[1].matchAll(/slug:\s*'([^']+)',[\s\S]*?name:\s*'([^']+)',[\s\S]*?score:\s*(\d+),[\s\S]*?summary:\s*(?:`([\s\S]*?)`|'([^']*?)')/g)]
      .map(m => ({ slug: m[1], name: m[2], score: Number(m[3]), summary: (m[4] || m[5]).trim() }))
    : []

  // Extract love overview
  const loveOverviewMatch = source.match(/love:\s*\{[\s\S]*?overview:\s*`([\s\S]*?)`/)
  const loveOverview = loveOverviewMatch ? loveOverviewMatch[1].trim() : ''

  // Extract lucky colors
  const colorsMatch = source.match(/colors:\s*\[([\s\S]*?)\]/)
  const colors = colorsMatch
    ? colorsMatch[1].match(/'([^']+)'/g)?.map(s => s.replace(/'/g, '')) ?? []
    : []

  return {
    overview,
    coreTraits,
    challenges,
    elementInfluence,
    bestMatches: bestMatches.slice(0, 3),
    challengingMatches: challengingMatches.slice(0, 3),
    loveOverview,
    colors,
  }
}

function trimToWords(text: string, maxWords: number): string {
  const words = text.split(/\s+/)
  if (words.length <= maxWords) return text
  return words.slice(0, maxWords).join(' ') + '...'
}

function escapeForTemplateLiteral(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function escapeSingleQuote(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function buildShadowBody(challenges: { trait: string; description: string }[]): string {
  if (challenges.length === 0) return 'The shadow side of this sign remains to be explored.'
  return challenges
    .slice(0, 3)
    .map(c => `**${c.trait}:** ${c.description}`)
    .join('\n\n')
}

function generateV2File(slug: string, element: string, animal: string, data: ReturnType<typeof extractV1Data>): string {
  const archetype = ARCHETYPES[slug] || 'The Unknown'
  const name = displayName(element, animal)
  const personality = trimToWords(data.overview, 300)
  const shadow = buildShadowBody(data.challenges)
  const relationships = trimToWords(data.loveOverview || 'Relationships for this sign are complex and driven by elemental energy.', 150)
  const balance = trimToWords(data.elementInfluence || 'Balance is key to harnessing the full potential of this sign.', 100)

  const bestMatches = data.bestMatches.length >= 3
    ? data.bestMatches.slice(0, 3)
    : [...data.bestMatches, ...Array(3 - data.bestMatches.length).fill({ slug: 'water-rat', name: 'Water Rat', summary: 'A complementary elemental pairing.' })]

  const worstMatches = data.challengingMatches.length >= 3
    ? data.challengingMatches.slice(0, 3)
    : [...data.challengingMatches, ...Array(3 - data.challengingMatches.length).fill({ slug: 'fire-horse', name: 'Fire Horse', summary: 'A challenging elemental clash.' })]

  const coreStrength = data.coreTraits[0] || 'Elemental resilience'
  const shadowBrief = data.challenges[0]?.trait || 'Inner tension'
  const luckyColor = data.colors[0] || 'Gold'

  return `import { getProfileBySlug } from './profiles'
import type { SignContentV2 } from '@/types'

const content: SignContentV2 = {
  slug: '${slug}',
  profile: getProfileBySlug('${slug}')!,

  archetype: {
    name: '${archetype}',
    tagline: '${archetype} — ${name}',
  },

  atAGlance: {
    element: '${ELEMENT_LABELS[element]}',
    energy: '${ELEMENT_ENERGY[element]}',
    archetype: '${archetype}',
    coreStrength: '${coreStrength}',
    shadow: '${shadowBrief}',
    bestMatch: '${bestMatches[0].slug}',
    worstMatch: '${worstMatches[0].slug}',
    luckyColor: '${luckyColor}',
  },

  personality: {
    body: \`${escapeForTemplateLiteral(personality)}\`,
  },

  shadow: {
    body: \`${escapeForTemplateLiteral(shadow)}\`,
  },

  relationships: {
    body: \`${escapeForTemplateLiteral(relationships)}\`,
  },

  elementBalance: {
    body: \`${escapeForTemplateLiteral(balance)}\`,
  },

  matches: {
    best: [
${bestMatches.map(m => `      { slug: '${m.slug}', name: '${escapeSingleQuote(m.name)}', reason: '${escapeSingleQuote(trimToWords(m.summary, 15))}' },`).join('\n')}
    ],
    worst: [
${worstMatches.map(m => `      { slug: '${m.slug}', name: '${escapeSingleQuote(m.name)}', reason: '${escapeSingleQuote(trimToWords(m.summary, 15))}' },`).join('\n')}
    ],
  },
}

export default content
`
}

// ============================================
// MAIN
// ============================================

// 1. Create legacy directory and back up old files
if (!existsSync(LEGACY_DIR)) {
  mkdirSync(LEGACY_DIR, { recursive: true })
}

let converted = 0
let errors = 0

for (const element of ELEMENTS) {
  for (const animal of ANIMALS) {
    const slug = `${element}-${animal}`
    const filePath = join(CONTENT_DIR, `${slug}.ts`)

    if (!existsSync(filePath)) {
      console.log(`  SKIP ${slug} — file not found`)
      continue
    }

    try {
      // Read original V1 source
      const source = readFileSync(filePath, 'utf-8')

      // Back up to legacy/
      const legacyPath = join(LEGACY_DIR, `${slug}.ts`)
      if (!existsSync(legacyPath)) {
        writeFileSync(legacyPath, source)
      }

      // Extract data from V1 source text
      const data = extractV1Data(source, slug)

      // Generate V2 file
      const v2Source = generateV2File(slug, element, animal, data)

      // Write V2 file (overwrite the original)
      writeFileSync(filePath, v2Source)
      converted++
      console.log(`  OK   ${slug}`)
    } catch (err) {
      errors++
      console.error(`  FAIL ${slug}:`, err instanceof Error ? err.message : err)
    }
  }
}

console.log(`\nDone: ${converted} converted, ${errors} errors`)
