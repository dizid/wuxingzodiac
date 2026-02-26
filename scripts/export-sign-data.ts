/**
 * Export sign data to JSON for the Remotion video project.
 * Run: npx tsx scripts/export-sign-data.ts
 *
 * Outputs:
 *   video/src/data/signs.json       — all 60 sign profiles + full content
 *   video/src/data/visual-data.json — trait scores + element percentages
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// Import using relative paths (tsx strips type-only @/ imports)
import { signProfiles } from '../src/lib/sign-content/profiles.js'
import { GENERATES, DESTROYS } from '../src/lib/wuxing-cycles.js'

const ROOT = join(import.meta.dirname, '..')
const OUT_DIR = join(ROOT, 'video', 'src', 'data')

// ============================================
// TYPES (inlined to avoid @/ alias issues)
// ============================================

type ZodiacElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water'
type ZodiacAnimal = 'rat' | 'ox' | 'tiger' | 'rabbit' | 'dragon' | 'snake'
  | 'horse' | 'goat' | 'monkey' | 'rooster' | 'dog' | 'pig'

const ELEMENTS: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']
const ANIMALS: ZodiacAnimal[] = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
]

// ============================================
// VISUAL DATA COMPUTATION
// (replicated from sign-visual-data.ts to avoid @/ alias issues)
// ============================================

const ANIMAL_TRAITS: Record<ZodiacAnimal, Record<string, number>> = {
  rat:     { strategy: 85, compassion: 50, resilience: 60, ambition: 80, sociability: 75, creativity: 65 },
  ox:      { strategy: 65, compassion: 60, resilience: 90, ambition: 70, sociability: 35, creativity: 40 },
  tiger:   { strategy: 55, compassion: 55, resilience: 80, ambition: 85, sociability: 70, creativity: 60 },
  rabbit:  { strategy: 60, compassion: 80, resilience: 45, ambition: 50, sociability: 75, creativity: 80 },
  dragon:  { strategy: 70, compassion: 45, resilience: 75, ambition: 95, sociability: 80, creativity: 70 },
  snake:   { strategy: 90, compassion: 40, resilience: 65, ambition: 75, sociability: 45, creativity: 75 },
  horse:   { strategy: 50, compassion: 55, resilience: 70, ambition: 80, sociability: 85, creativity: 55 },
  goat:    { strategy: 45, compassion: 85, resilience: 40, ambition: 40, sociability: 65, creativity: 90 },
  monkey:  { strategy: 80, compassion: 50, resilience: 55, ambition: 75, sociability: 85, creativity: 85 },
  rooster: { strategy: 70, compassion: 45, resilience: 70, ambition: 80, sociability: 60, creativity: 50 },
  dog:     { strategy: 60, compassion: 85, resilience: 75, ambition: 55, sociability: 65, creativity: 45 },
  pig:     { strategy: 45, compassion: 90, resilience: 50, ambition: 45, sociability: 80, creativity: 60 },
}

const ELEMENT_MODIFIERS: Record<ZodiacElement, Record<string, number>> = {
  wood:  { compassion: 10, creativity: 8, sociability: 5, resilience: -3 },
  fire:  { ambition: 10, sociability: 8, creativity: 5, strategy: -5 },
  earth: { resilience: 12, compassion: 5, strategy: 3, sociability: -5 },
  metal: { strategy: 10, ambition: 8, resilience: 5, compassion: -8 },
  water: { creativity: 10, strategy: 8, compassion: 5, ambition: -5 },
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

function computeElementPercentages(element: ZodiacElement, animal: ZodiacAnimal) {
  const animalIndex = ANIMALS.indexOf(animal)
  const animalVariation = Math.round((animalIndex - 5.5) * 0.9)

  const result: Record<string, number> = {}
  for (const el of ELEMENTS) {
    if (el === element) {
      result[el] = 80 + animalVariation
    } else if (GENERATES[element] === el) {
      result[el] = 50 + animalVariation
    } else if (GENERATES[el] === element) {
      result[el] = 45 - animalVariation
    } else if (DESTROYS[element] === el) {
      result[el] = 30 + Math.abs(animalVariation)
    } else if (DESTROYS[el] === element) {
      result[el] = 20 + Math.abs(animalVariation)
    } else {
      result[el] = 35
    }
  }

  return {
    wood: clamp(result.wood ?? 35, 10, 95),
    fire: clamp(result.fire ?? 35, 10, 95),
    earth: clamp(result.earth ?? 35, 10, 95),
    metal: clamp(result.metal ?? 35, 10, 95),
    water: clamp(result.water ?? 35, 10, 95),
  }
}

function computeTraitScores(element: ZodiacElement, animal: ZodiacAnimal) {
  const base = ANIMAL_TRAITS[animal]
  const mods = ELEMENT_MODIFIERS[element]
  const traits = ['strategy', 'compassion', 'resilience', 'ambition', 'sociability', 'creativity']

  const result: Record<string, number> = {}
  for (const t of traits) {
    result[t] = clamp((base[t] ?? 50) + (mods[t] ?? 0), 10, 95)
  }
  return result
}

// ============================================
// SIGN CONTENT LOADING
// ============================================

async function loadAllSignContent() {
  const contentMap: Record<string, unknown> = {}

  for (const profile of signProfiles) {
    const slug = profile.slug
    try {
      // Dynamic import with relative path — type-only @/types imports get stripped
      const mod = await import(`../src/lib/sign-content/${slug}.js`)
      contentMap[slug] = mod.default
    } catch (err) {
      console.error(`  Failed to load ${slug}:`, err)
    }
  }

  return contentMap
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('Exporting sign data for Remotion video project...\n')

  // Ensure output directory exists
  if (!existsSync(OUT_DIR)) {
    mkdirSync(OUT_DIR, { recursive: true })
    console.log(`Created ${OUT_DIR}`)
  }

  // 1. Load all sign content
  console.log('Loading sign content...')
  const contentMap = await loadAllSignContent()
  const loadedCount = Object.keys(contentMap).length
  console.log(`  Loaded ${loadedCount}/60 signs\n`)

  // Build signs.json — profiles + full content
  const signsData = signProfiles.map(profile => ({
    ...profile,
    content: contentMap[profile.slug] ?? null,
  }))

  const signsPath = join(OUT_DIR, 'signs.json')
  writeFileSync(signsPath, JSON.stringify(signsData, null, 2))
  console.log(`Written: ${signsPath} (${signsData.length} signs)`)

  // 2. Compute visual data for all 60 signs
  console.log('\nComputing visual data...')
  const visualData: Record<string, unknown> = {}

  for (const element of ELEMENTS) {
    for (const animal of ANIMALS) {
      const slug = `${element}-${animal}`
      visualData[slug] = {
        elementPercentages: computeElementPercentages(element, animal),
        traitScores: computeTraitScores(element, animal),
      }
    }
  }

  const visualPath = join(OUT_DIR, 'visual-data.json')
  writeFileSync(visualPath, JSON.stringify(visualData, null, 2))
  console.log(`Written: ${visualPath} (${Object.keys(visualData).length} entries)`)

  console.log('\nDone! Run `npm run video:studio` to preview in Remotion Studio.')
}

main().catch(err => {
  console.error('Export failed:', err)
  process.exit(1)
})
