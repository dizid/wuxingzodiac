// ============================================
// HTML → A4 PDF (Playwright)
// ============================================
// Locally: Playwright's own Chromium (`npx playwright install chromium`).
// On Netlify (AWS Lambda): @sparticuz/chromium-min, a Lambda-compatible build.
// The full @sparticuz/chromium binary (~64 MB) would push the function past
// Lambda's 50 MB zipped limit, so the -min package downloads the matching
// Chromium pack on cold start (cached in /tmp while the instance stays warm).

import { chromium, type Browser } from 'playwright-core'

// Must match the @sparticuz/chromium-min version in package.json.
// Override with CHROMIUM_PACK_URL to self-host the pack.
const DEFAULT_CHROMIUM_PACK_URL =
  'https://github.com/Sparticuz/chromium/releases/download/v147.0.2/chromium-v147.0.2-pack.x64.tar'

// Only Google Fonts may be fetched while rendering. The HTML is escaped,
// but this blocks any stray URL in user/model text from loading.
const ALLOWED_HOSTS = new Set(['fonts.googleapis.com', 'fonts.gstatic.com'])

async function launchBrowser(): Promise<Browser> {
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) {
    const { default: lambdaChromium } = await import('@sparticuz/chromium-min')
    // PDFs need no WebGL — skips extracting the SwiftShader graphics stack
    lambdaChromium.setGraphicsMode = false
    return chromium.launch({
      args: lambdaChromium.args,
      executablePath: await lambdaChromium.executablePath(process.env.CHROMIUM_PACK_URL || DEFAULT_CHROMIUM_PACK_URL),
      headless: true,
    })
  }
  return chromium.launch({ headless: true })
}

export async function renderPdf(html: string): Promise<Buffer> {
  const browser = await launchBrowser()
  try {
    const context = await browser.newContext()
    await context.route('**/*', (route) => {
      const url = new URL(route.request().url())
      return url.protocol === 'https:' && ALLOWED_HOSTS.has(url.hostname) ? route.continue() : route.abort()
    })

    const page = await context.newPage()
    await page.setContent(html, { waitUntil: 'networkidle', timeout: 60_000 })

    // Make sure the web fonts (incl. Chinese glyphs) actually loaded — otherwise
    // the PDF would silently fall back to boxes or system fonts.
    await page.waitForFunction('document.fonts.status === "loaded"', undefined, { timeout: 30_000 })
    const fontsReady = await page.evaluate(
      'document.fonts.check(\'16px "Noto Sans"\') && document.fonts.check(\'700 16px "Noto Sans SC"\', "火")',
    )
    if (!fontsReady) throw new Error('Reading fonts failed to load')

    return await page.pdf({ printBackground: true, preferCSSPageSize: true })
  } finally {
    await browser.close()
  }
}
