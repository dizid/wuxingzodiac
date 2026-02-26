/**
 * Render sign videos using Remotion.
 *
 * Usage:
 *   npx tsx render.ts fire-horse              # Render single sign
 *   npx tsx render.ts --all                   # Render all 60 signs
 *   npx tsx render.ts --all --composition SignShortSquare  # Square format
 */

import { bundle } from '@remotion/bundler'
import { renderMedia, selectComposition } from '@remotion/renderer'
import { existsSync, mkdirSync, readFileSync } from 'fs'
import { join } from 'path'

const OUTPUT_DIR = join(import.meta.dirname, 'output')
const ENTRY_POINT = join(import.meta.dirname, 'src', 'index.ts')

// Parse CLI args
const args = process.argv.slice(2)
const renderAll = args.includes('--all')
const compositionFlag = args.indexOf('--composition')
const compositionId = compositionFlag >= 0 ? args[compositionFlag + 1] : 'SignShort'
const singleSlug = args.find(a => !a.startsWith('--'))

async function main() {
  if (!renderAll && !singleSlug) {
    console.log('Usage:')
    console.log('  npx tsx render.ts fire-horse       # single sign')
    console.log('  npx tsx render.ts --all             # all 60 signs')
    console.log('  npx tsx render.ts --all --composition SignShortSquare')
    process.exit(0)
  }

  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  console.log('Bundling Remotion project...')
  const bundled = await bundle({
    entryPoint: ENTRY_POINT,
    // Remotion needs to know where the public dir is for staticFile()
    publicDir: join(import.meta.dirname),
  })
  console.log('Bundle complete.\n')

  // Determine which slugs to render
  let slugs: string[]
  if (renderAll) {
    const signsPath = join(import.meta.dirname, 'src', 'data', 'signs.json')
    const signs = JSON.parse(readFileSync(signsPath, 'utf-8'))
    slugs = signs.map((s: { slug: string }) => s.slug)
  } else {
    slugs = [singleSlug!]
  }

  console.log(`Rendering ${slugs.length} video(s) with composition "${compositionId}"...\n`)

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i]
    const outputPath = join(OUTPUT_DIR, `${slug}.mp4`)

    console.log(`[${i + 1}/${slugs.length}] Rendering ${slug}...`)

    const composition = await selectComposition({
      serveUrl: bundled,
      id: compositionId,
      inputProps: { slug },
    })

    await renderMedia({
      composition,
      serveUrl: bundled,
      codec: 'h264',
      outputLocation: outputPath,
      inputProps: { slug },
    })

    console.log(`  → ${outputPath}`)
  }

  console.log(`\nDone! ${slugs.length} video(s) rendered to ${OUTPUT_DIR}`)
}

main().catch(err => {
  console.error('Render failed:', err)
  process.exit(1)
})
