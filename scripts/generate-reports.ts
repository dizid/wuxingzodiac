/**
 * Generate premium Elemental Blueprint report content via Anthropic API.
 * Run: npx tsx scripts/generate-reports.ts
 *
 * Requires ANTHROPIC_API_KEY env var.
 * Saves JSON files to scripts/report-data/{slug}.json
 * Tracks progress in scripts/report-data/.progress.json for resume support.
 */

import Anthropic from '@anthropic-ai/sdk'
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { ARCHETYPES } from '../src/lib/sign-content/archetypes.js'

const ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const
const ANIMALS = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'] as const

const OUTPUT_DIR = join(import.meta.dirname, 'report-data')
const PROGRESS_FILE = join(OUTPUT_DIR, '.progress.json')

// Element descriptions for context in the prompt
const ELEMENT_INFO: Record<string, string> = {
  wood: 'Growth, flexibility, compassion. Season: Spring. Direction: East. Generates Fire, controls Earth.',
  fire: 'Passion, dynamism, transformation. Season: Summer. Direction: South. Generates Earth, controls Metal.',
  earth: 'Stability, nurturing, endurance. Season: Late Summer. Direction: Center. Generates Metal, controls Water.',
  metal: 'Precision, discipline, strength. Season: Autumn. Direction: West. Generates Water, controls Wood.',
  water: 'Wisdom, adaptability, flow. Season: Winter. Direction: North. Generates Wood, controls Fire.',
}

interface ReportSections {
  elementalIdentity: string
  elementInDepth: string
  yearAhead2026: string
  compatibilityMap: string
  elementalBalanceGuide: string
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

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function formatName(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

async function generateReport(client: Anthropic, slug: string): Promise<ReportSections> {
  const [element, animal] = slug.split('-')
  const archetype = ARCHETYPES[slug] || formatName(slug)
  const elementInfo = ELEMENT_INFO[element]
  const signName = formatName(slug)

  const systemPrompt = `You are the Wuxing Master — an authority on Chinese elemental astrology who speaks with directness, depth, and zero platitudes. Your voice is blunt but insightful, connecting everything back to Wu Xing (Five Element) cycle logic. You acknowledge shadow sides honestly. You never make TCM organ-specific health claims. You never reference BaZi or Four Pillars. You write in a way that feels personal and direct, as if speaking to the reader about THEIR specific sign.

Write approximately 2500 words total across all 5 sections.`

  const userPrompt = `Write the 5 sections of a premium "Elemental Blueprint" report for the **${signName}** (archetype: "${archetype}").

Element: ${element} — ${elementInfo}
Animal: ${animal}

Return a JSON object with exactly these 5 keys (all string values, each section in flowing prose paragraphs, no markdown headers within sections):

1. "elementalIdentity" (~500 words) — Who they are at their core. The fusion of ${element} element with ${animal} animal nature. What makes this combination unique among the 60 signs. Their archetype explained.

2. "elementInDepth" (~500 words) — Deep dive into ${element} element. How it manifests specifically in the ${animal} personality. The productive and destructive cycles as they affect this sign. What happens when ${element} is strong vs depleted in their chart.

3. "yearAhead2026" (~500 words) — 2026 is the Year of the Fire Horse. What this means specifically for ${signName}. Key themes, opportunities, and warnings. Quarter-by-quarter guidance (Q1 through Q4). Be specific and actionable.

4. "compatibilityMap" (~500 words) — Their relationship dynamics through the element lens. Best element matches and why. Most challenging element combinations and why. How they love, fight, and grow in relationships. Friendship vs romance differences.

5. "elementalBalanceGuide" (~500 words) — Practical guide to balancing their ${element} energy. Signs of excess and deficiency. Daily practices, environment adjustments, and seasonal awareness. How to leverage element cycles for personal growth.

Respond with ONLY the JSON object, no other text.`

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 8192,
    system: systemPrompt,
    messages: [{ role: 'user', content: userPrompt }],
  })

  const textBlock = response.content.find(b => b.type === 'text')
  if (!textBlock || textBlock.type !== 'text') {
    throw new Error(`No text response for ${slug}`)
  }

  // Extract JSON from the response (handle possible markdown code fences)
  let jsonStr = textBlock.text.trim()
  if (jsonStr.startsWith('```')) {
    jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
  }

  const sections: ReportSections = JSON.parse(jsonStr)

  // Validate all 5 sections exist
  const requiredKeys: (keyof ReportSections)[] = [
    'elementalIdentity', 'elementInDepth', 'yearAhead2026',
    'compatibilityMap', 'elementalBalanceGuide'
  ]
  for (const key of requiredKeys) {
    if (!sections[key] || typeof sections[key] !== 'string') {
      throw new Error(`Missing or invalid section "${key}" for ${slug}`)
    }
  }

  return sections
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is required')
    process.exit(1)
  }

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const client = new Anthropic()
  const completed = loadProgress()

  // Build list of all 60 slugs
  const allSlugs: string[] = []
  for (const element of ELEMENTS) {
    for (const animal of ANIMALS) {
      allSlugs.push(`${element}-${animal}`)
    }
  }

  const remaining = allSlugs.filter(s => !completed.includes(s))
  console.log(`Total: ${allSlugs.length} | Completed: ${completed.length} | Remaining: ${remaining.length}`)

  for (const slug of remaining) {
    const index = allSlugs.indexOf(slug) + 1
    console.log(`[${index}/${allSlugs.length}] Generating ${slug}...`)

    try {
      const sections = await generateReport(client, slug)
      const outputPath = join(OUTPUT_DIR, `${slug}.json`)
      writeFileSync(outputPath, JSON.stringify(sections, null, 2))

      completed.push(slug)
      saveProgress(completed)
      console.log(`  Done: ${slug}`)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.error(`  FAILED: ${slug} — ${message}`)
      // Continue to next sign rather than crashing
    }

    // Rate limit: 2s delay between calls
    if (remaining.indexOf(slug) < remaining.length - 1) {
      await sleep(2000)
    }
  }

  console.log(`\nComplete! ${completed.length}/${allSlugs.length} reports generated.`)
}

main()
