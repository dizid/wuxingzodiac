/**
 * Generate V2 sign content for all 60 zodiac signs via Anthropic API.
 * Run: npx tsx scripts/generate-content-v2.ts
 *
 * Requires ANTHROPIC_API_KEY env var.
 * Writes TypeScript files to src/lib/sign-content/{slug}.ts
 * Tracks progress in scripts/.content-progress.json for resume support.
 */

import Anthropic from '@anthropic-ai/sdk'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { ARCHETYPES } from '../src/lib/sign-content/archetypes.js'

const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const
const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const

const PROGRESS_FILE = join(import.meta.dirname, '.content-progress.json')
const CONTENT_DIR = join(import.meta.dirname, '..', 'src', 'lib', 'sign-content')

// Element descriptions for prompt context
const ELEMENT_INFO: Record<string, string> = {
  wood: 'Growth, flexibility, compassion. Season: Spring. Direction: East. Generates Fire, controls Earth.',
  fire: 'Passion, dynamism, transformation. Season: Summer. Direction: South. Generates Earth, controls Metal.',
  earth: 'Stability, nurturing, endurance. Season: Late Summer. Direction: Center. Generates Metal, controls Water.',
  metal: 'Precision, discipline, strength. Season: Autumn. Direction: West. Generates Water, controls Wood.',
  water: 'Wisdom, adaptability, flow. Season: Winter. Direction: North. Generates Wood, controls Fire.',
}

// Yin/Yang mapping for animals
const ANIMAL_ENERGY: Record<string, string> = {
  rat: 'Yang', ox: 'Yin', tiger: 'Yang', rabbit: 'Yin',
  dragon: 'Yang', snake: 'Yin', horse: 'Yang', goat: 'Yin',
  monkey: 'Yang', rooster: 'Yin', dog: 'Yang', pig: 'Yin',
}

// Build the full list of valid slugs for match validation
const ALL_SLUGS: string[] = []
for (const element of ELEMENTS) {
  for (const animal of ANIMALS) {
    ALL_SLUGS.push(`${element}-${animal}`)
  }
}

interface V2Content {
  atAGlance: {
    element: string
    energy: string
    archetype: string
    coreStrength: string
    shadow: string
    bestMatch: string
    worstMatch: string
    luckyColor: string
  }
  personality: { body: string }
  shadow: { body: string }
  relationships: { body: string }
  elementBalance: { body: string }
  matches: {
    best: { slug: string; name: string; reason: string }[]
    worst: { slug: string; name: string; reason: string }[]
  }
}

function loadProgress(): string[] {
  if (!existsSync(PROGRESS_FILE)) return []
  try {
    return JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'))
  } catch {
    return []
  }
}

function saveProgress(completed: string[]) {
  writeFileSync(PROGRESS_FILE, JSON.stringify(completed, null, 2))
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function slugToName(slug: string): string {
  return slug.split('-').map(capitalize).join(' ')
}

function validateMatchSlugs(content: V2Content, slug: string): boolean {
  const allMatchSlugs = [
    content.atAGlance.bestMatch,
    content.atAGlance.worstMatch,
    ...content.matches.best.map((m) => m.slug),
    ...content.matches.worst.map((m) => m.slug),
  ]

  for (const matchSlug of allMatchSlugs) {
    if (!ALL_SLUGS.includes(matchSlug)) {
      console.error(`  Invalid match slug "${matchSlug}" in ${slug}`)
      return false
    }
    if (matchSlug === slug) {
      console.error(`  Self-reference match slug "${matchSlug}" in ${slug}`)
      return false
    }
  }

  if (content.matches.best.length !== 3 || content.matches.worst.length !== 3) {
    console.error(`  Expected 3 best + 3 worst matches in ${slug}, got ${content.matches.best.length} + ${content.matches.worst.length}`)
    return false
  }

  return true
}

function countWords(content: V2Content): number {
  return [
    content.personality.body,
    content.shadow.body,
    content.relationships.body,
    content.elementBalance.body,
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function buildPrompt(slug: string, element: string, animal: string): string {
  const archetype = ARCHETYPES[slug] ?? 'Unknown'
  const signName = slugToName(slug)
  const energy = ANIMAL_ENERGY[animal] ?? 'Yang'
  const elementDesc = ELEMENT_INFO[element] ?? ''

  // Build a list of valid slugs excluding the current sign for reference
  const otherSlugs = ALL_SLUGS.filter((s) => s !== slug)

  return `Generate content for the ${signName} Chinese zodiac sign (${element} element + ${animal} animal).

Archetype: "${archetype}"
Element: ${capitalize(element)} — ${elementDesc}
Energy: ${energy}

VALID SLUGS for matches (pick from these ONLY):
${otherSlugs.join(', ')}

Return a JSON object with this EXACT structure (no markdown, no code fences, just raw JSON):

{
  "atAGlance": {
    "element": "${capitalize(element)} (one-phrase description, e.g. 'Wood (Growth, Flexibility)')",
    "energy": "${energy}",
    "archetype": "${archetype}",
    "coreStrength": "2-3 word core strength",
    "shadow": "2-3 word shadow tendency",
    "bestMatch": "slug-of-best-match",
    "worstMatch": "slug-of-worst-match",
    "luckyColor": "A specific color name"
  },
  "personality": {
    "body": "~300 word personality description as a single string. Multiple paragraphs separated by \\n\\n."
  },
  "shadow": {
    "body": "~150 word shadow/weakness description. Be specific about destructive behaviors."
  },
  "relationships": {
    "body": "~150 word relationships description. How they connect, what they need."
  },
  "elementBalance": {
    "body": "~100 word practical advice for balancing this element. Concrete actions."
  },
  "matches": {
    "best": [
      { "slug": "element-animal", "name": "Element Animal", "reason": "1-line reason why they match well" },
      { "slug": "element-animal", "name": "Element Animal", "reason": "1-line reason" },
      { "slug": "element-animal", "name": "Element Animal", "reason": "1-line reason" }
    ],
    "worst": [
      { "slug": "element-animal", "name": "Element Animal", "reason": "1-line reason why they clash" },
      { "slug": "element-animal", "name": "Element Animal", "reason": "1-line reason" },
      { "slug": "element-animal", "name": "Element Animal", "reason": "1-line reason" }
    ]
  }
}

REQUIREMENTS:
- Total word count across personality + shadow + relationships + elementBalance should be ~800 words
- All match slugs MUST be from the valid slugs list above (format: element-animal)
- The bestMatch in atAGlance should match the first entry in matches.best
- The worstMatch in atAGlance should match the first entry in matches.worst
- Each match name must exactly match its slug (e.g. slug "water-dragon" → name "Water Dragon")
- Be specific about behaviors, not vague platitudes
- Connect everything to elemental cycle logic (productive/destructive cycles)
- NO TCM organ claims. NO BaZi references.
- Separate paragraphs with \\n\\n in the body strings`
}

function buildTsFile(slug: string, element: string, animal: string, content: V2Content): string {
  const signName = slugToName(slug)
  const archetype = ARCHETYPES[slug] ?? 'Unknown'

  // Chinese stem/branch for comment
  const YANG_STEMS: Record<string, string> = {
    wood: '甲', fire: '丙', earth: '戊', metal: '庚', water: '壬',
  }
  const EARTHLY_BRANCHES: Record<string, string> = {
    rat: '子', ox: '丑', tiger: '寅', rabbit: '卯',
    dragon: '辰', snake: '巳', horse: '午', goat: '未',
    monkey: '申', rooster: '酉', dog: '戌', pig: '亥',
  }
  const chineseName = (YANG_STEMS[element] ?? '') + (EARTHLY_BRANCHES[animal] ?? '')

  return `// ============================================
// ${signName.toUpperCase()} (${chineseName}) — ${archetype}
// ============================================
// Generated by scripts/generate-content-v2.ts

import { getProfileBySlug } from './profiles'
import type { SignContentV2 } from '@/types'

const content: SignContentV2 = {
  slug: '${slug}',
  profile: getProfileBySlug('${slug}')!,
  archetype: {
    name: ${JSON.stringify(archetype)},
    tagline: ${JSON.stringify(`${archetype} — ${signName}`)},
  },
  atAGlance: ${JSON.stringify(content.atAGlance, null, 4).replace(/\n/g, '\n  ')},
  personality: {
    body: ${JSON.stringify(content.personality.body)},
  },
  shadow: {
    body: ${JSON.stringify(content.shadow.body)},
  },
  relationships: {
    body: ${JSON.stringify(content.relationships.body)},
  },
  elementBalance: {
    body: ${JSON.stringify(content.elementBalance.body)},
  },
  matches: ${JSON.stringify(content.matches, null, 4).replace(/\n/g, '\n  ')},
}

export default content
`
}

async function generateSign(client: Anthropic, slug: string, element: string, animal: string): Promise<boolean> {
  const prompt = buildPrompt(slug, element, animal)

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      system: 'You are the Wuxing Master — an expert in Five Element philosophy. Direct, insightful, occasionally blunt. No fortune-cookie platitudes. Connect everything to elemental cycle logic. Be specific about behaviors. NO TCM organ claims. NO BaZi references. Respond with raw JSON only — no markdown, no code fences, no explanation.',
      messages: [{ role: 'user', content: prompt }],
    })

    // Extract text content
    const textBlock = response.content.find((b) => b.type === 'text')
    if (!textBlock || textBlock.type !== 'text') {
      console.error(`  No text response for ${slug}`)
      return false
    }

    // Parse JSON — strip any potential markdown fences
    let jsonStr = textBlock.text.trim()
    if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
    }

    const parsed: V2Content = JSON.parse(jsonStr)

    // Validate match slugs
    if (!validateMatchSlugs(parsed, slug)) {
      return false
    }

    // Validate word count
    const words = countWords(parsed)
    if (words < 500 || words > 1200) {
      console.error(`  Word count ${words} out of range (500-1200) for ${slug}`)
      return false
    }

    // Write the TypeScript file
    const tsContent = buildTsFile(slug, element, animal, parsed)
    const filePath = join(CONTENT_DIR, `${slug}.ts`)
    writeFileSync(filePath, tsContent, 'utf-8')

    console.log(`  Wrote ${filePath} (${words} words)`)
    return true
  } catch (err) {
    console.error(`  Error generating ${slug}:`, err instanceof Error ? err.message : err)
    return false
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    console.error('Missing ANTHROPIC_API_KEY env var')
    process.exit(1)
  }

  const client = new Anthropic({ apiKey })
  const completed = loadProgress()
  let successCount = completed.length
  let failCount = 0

  console.log(`Starting V2 content generation. ${completed.length} already completed.`)

  for (const element of ELEMENTS) {
    for (const animal of ANIMALS) {
      const slug = `${element}-${animal}`

      if (completed.includes(slug)) {
        continue
      }

      console.log(`[${successCount + failCount + 1}/60] Generating ${slug}...`)

      const success = await generateSign(client, slug, element, animal)

      if (success) {
        completed.push(slug)
        saveProgress(completed)
        successCount++
      } else {
        failCount++
        console.error(`  FAILED: ${slug} — will retry on next run`)
      }

      // Rate limit: 2s delay between calls
      await sleep(2000)
    }
  }

  console.log(`\nDone. ${successCount} succeeded, ${failCount} failed.`)
  if (failCount > 0) {
    console.log('Re-run the script to retry failed signs.')
  }
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
