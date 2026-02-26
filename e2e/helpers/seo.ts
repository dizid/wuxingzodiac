// SEO assertion helpers — meta tags, JSON-LD, canonical URLs
import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'

// Get a meta tag's content attribute
export async function getMetaContent(page: Page, name: string): Promise<string | null> {
  return page.getAttribute(`meta[name="${name}"]`, 'content')
}

// Get an OG meta tag's content attribute
export async function getOgContent(page: Page, property: string): Promise<string | null> {
  return page.getAttribute(`meta[property="${property}"]`, 'content')
}

// Get the canonical URL
export async function getCanonical(page: Page): Promise<string | null> {
  return page.getAttribute('link[rel="canonical"]', 'href')
}

// Get and parse all JSON-LD scripts on the page
export async function getJsonLd(page: Page): Promise<Record<string, unknown>[]> {
  const scripts = await page.locator('script[type="application/ld+json"]').allTextContents()
  return scripts
    .filter((s) => s.length > 0)
    .map((s) => JSON.parse(s))
}

// Find a JSON-LD entry by @type
export async function getJsonLdByType(page: Page, type: string): Promise<Record<string, unknown> | undefined> {
  const allLd = await getJsonLd(page)
  for (const ld of allLd) {
    // Handle @graph arrays
    if (ld['@graph'] && Array.isArray(ld['@graph'])) {
      const found = (ld['@graph'] as Record<string, unknown>[]).find((item) => item['@type'] === type)
      if (found) return found
    }
    if (ld['@type'] === type) return ld
  }
  return undefined
}

// Assert basic SEO tags exist
export async function assertBasicSeo(page: Page) {
  const title = await page.title()
  expect(title.length).toBeGreaterThan(0)

  const description = await getMetaContent(page, 'description')
  expect(description).toBeTruthy()
  expect(description!.length).toBeGreaterThan(0)
}

// Assert OG tags exist
export async function assertOgTags(page: Page) {
  const ogTitle = await getOgContent(page, 'og:title')
  expect(ogTitle).toBeTruthy()

  const ogDescription = await getOgContent(page, 'og:description')
  expect(ogDescription).toBeTruthy()

  const ogUrl = await getOgContent(page, 'og:url')
  expect(ogUrl).toBeTruthy()
}

// Count canonical link tags (should be exactly 1)
export async function countCanonicals(page: Page): Promise<number> {
  return page.locator('link[rel="canonical"]').count()
}
