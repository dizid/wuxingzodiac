/**
 * Export favicon SVG → 512x512 PNG for Fourthwall store logo upload.
 *
 * Run: npx tsx scripts/fourthwall-logo.ts
 * Output: artwork/logo-512.png
 */

import sharp from 'sharp'
import { readFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const SVG_PATH = join(ROOT, 'public', 'favicon.svg')
const OUTPUT_DIR = join(ROOT, 'artwork')
const OUTPUT_PATH = join(OUTPUT_DIR, 'logo-512.png')

async function main() {
  // Ensure artwork/ directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
    console.log('Created artwork/ directory')
  }

  // Read SVG and render at 512x512
  const svgBuffer = readFileSync(SVG_PATH)

  await sharp(svgBuffer, { density: 300 })
    .resize(512, 512, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
    .png()
    .toFile(OUTPUT_PATH)

  console.log(`✓ Exported logo: ${OUTPUT_PATH}`)
  console.log('  Size: 512×512 PNG')
  console.log('  Upload this to Fourthwall: Dashboard → Design → Logo')
}

main().catch((err) => {
  console.error('Failed to export logo:', err)
  process.exit(1)
})
