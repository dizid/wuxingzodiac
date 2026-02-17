/**
 * Build PDF reports from generated JSON and upload to Netlify Blobs.
 * Run: npx tsx scripts/build-reports.ts
 *
 * Requires NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN env vars.
 * Reads JSON from scripts/report-data/{slug}.json
 * Uploads PDFs to Netlify Blobs store "reports".
 */

// @ts-expect-error -- pdfkit has no type declarations
import PDFDocument from 'pdfkit'
import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import { getStore } from '@netlify/blobs'
import { ARCHETYPES } from '../src/lib/sign-content/archetypes.js'

const DATA_DIR = join(import.meta.dirname, 'report-data')

const ELEMENT_COLORS: Record<string, string> = {
  wood: '#22c55e',
  fire: '#f97316',
  earth: '#d97706',
  metal: '#94a3b8',
  water: '#3b82f6',
}

// Section titles displayed in the PDF
const SECTION_TITLES = [
  { key: 'elementalIdentity', title: 'Your Elemental Identity' },
  { key: 'elementInDepth', title: 'Your Element in Depth' },
  { key: 'yearAhead2026', title: 'Your Year Ahead: 2026' },
  { key: 'compatibilityMap', title: 'Your Compatibility Map' },
  { key: 'elementalBalanceGuide', title: 'Elemental Balance Guide' },
] as const

interface ReportSections {
  elementalIdentity: string
  elementInDepth: string
  yearAhead2026: string
  compatibilityMap: string
  elementalBalanceGuide: string
}

function formatName(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

function buildPdf(slug: string, sections: ReportSections): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const [element] = slug.split('-')
    const color = ELEMENT_COLORS[element] || '#3b82f6'
    const signName = formatName(slug)
    const archetype = ARCHETYPES[slug] || signName

    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 72, bottom: 72, left: 60, right: 60 },
      info: {
        Title: `Elemental Blueprint — ${signName}`,
        Author: 'wuxingzodiac.me',
        Subject: `Premium zodiac report for ${signName}`,
      },
    })

    const chunks: Buffer[] = []
    doc.on('data', (chunk: Buffer) => chunks.push(chunk))
    doc.on('end', () => resolve(Buffer.concat(chunks)))
    doc.on('error', reject)

    const pageWidth = doc.page.width
    const contentWidth = pageWidth - 120 // margins

    // ---- Cover Page ----
    // Element-colored header bar
    doc.rect(0, 0, pageWidth, 160).fill(color)

    // Title text on the colored bar
    doc.font('Helvetica-Bold').fontSize(14).fillColor('#ffffff')
    doc.text('YOUR PERSONAL', 60, 50, { width: contentWidth, align: 'center' })
    doc.fontSize(28)
    doc.text('ELEMENTAL BLUEPRINT', 60, 72, { width: contentWidth, align: 'center' })

    // Sign info below the bar
    doc.fillColor('#333333')
    doc.moveDown(4)
    doc.fontSize(22).font('Helvetica-Bold')
    doc.text(archetype, 60, 220, { width: contentWidth, align: 'center' })
    doc.moveDown(0.5)
    doc.fontSize(16).font('Helvetica')
    doc.text(`${formatName(element)} ${formatName(slug.split('-')[1])}`, { width: contentWidth, align: 'center' })

    // Tagline / archetype subtitle
    doc.moveDown(2)
    doc.fontSize(12).fillColor('#666666')
    doc.text(`A deep-dive report into the elemental forces shaping your personality, relationships, and path forward.`, {
      width: contentWidth,
      align: 'center',
    })

    // Footer on cover
    doc.fontSize(9).fillColor('#999999')
    doc.text('wuxingzodiac.me | Your Elemental Blueprint', 60, doc.page.height - 50, {
      width: contentWidth,
      align: 'center',
    })

    // ---- Content Pages ----
    let pageNum = 1

    for (const { key, title } of SECTION_TITLES) {
      doc.addPage()
      pageNum++

      // Section header bar
      doc.rect(0, 0, pageWidth, 6).fill(color)

      // Section title
      doc.fillColor(color).font('Helvetica-Bold').fontSize(20)
      doc.text(title, 60, 40)

      // Thin rule under title
      doc.moveTo(60, 68).lineTo(pageWidth - 60, 68).strokeColor(color).lineWidth(1).stroke()

      // Body text
      doc.moveDown(1)
      doc.fillColor('#333333').font('Helvetica').fontSize(11)
      const body = sections[key as keyof ReportSections]

      // Split into paragraphs and render with spacing
      const paragraphs = body.split(/\n\n+/).filter(p => p.trim())
      for (const para of paragraphs) {
        doc.text(para.trim(), 60, undefined, {
          width: contentWidth,
          lineGap: 4,
          paragraphGap: 8,
        })
        doc.moveDown(0.5)
      }

      // Page footer
      doc.fontSize(9).fillColor('#999999')
      doc.text(`Page ${pageNum}  |  wuxingzodiac.me | Your Elemental Blueprint`, 60, doc.page.height - 50, {
        width: contentWidth,
        align: 'center',
      })
    }

    doc.end()
  })
}

async function main() {
  const siteId = process.env.NETLIFY_SITE_ID
  const token = process.env.NETLIFY_AUTH_TOKEN

  if (!siteId || !token) {
    console.error('Error: NETLIFY_SITE_ID and NETLIFY_AUTH_TOKEN environment variables are required')
    process.exit(1)
  }

  const store = getStore({ name: 'reports', siteID: siteId, token })

  // Find all generated JSON files
  const files = readdirSync(DATA_DIR).filter(f => f.endsWith('.json') && !f.startsWith('.'))
  console.log(`Found ${files.length} report data files`)

  let success = 0
  let failed = 0

  for (const file of files) {
    const slug = file.replace('.json', '')
    console.log(`[${success + failed + 1}/${files.length}] Building PDF for ${slug}...`)

    try {
      const data: ReportSections = JSON.parse(readFileSync(join(DATA_DIR, file), 'utf-8'))
      const pdfBuffer = await buildPdf(slug, data)

      // Store as string-based data via Blob for Netlify Blobs compatibility
      await store.set(`${slug}.pdf`, pdfBuffer.buffer as ArrayBuffer)
      success++
      console.log(`  Uploaded: ${slug}.pdf (${(pdfBuffer.length / 1024).toFixed(1)} KB)`)
    } catch (error) {
      failed++
      const message = error instanceof Error ? error.message : String(error)
      console.error(`  FAILED: ${slug} — ${message}`)
    }
  }

  console.log(`\nDone! ${success} uploaded, ${failed} failed out of ${files.length} total.`)
}

main()
