import { test, expect } from '@playwright/test'

/**
 * Sitemap tests.
 * The sitemap is generated at build time by vite-ssg-sitemap.
 * These tests run against the production preview build.
 */

test.describe('Sitemap', () => {
  // ── 1. GET /sitemap.xml returns content ───────────────────────────────────
  test('GET /sitemap.xml returns a non-empty XML response', async ({ request }) => {
    const response = await request.get('/sitemap.xml')

    expect(response.status()).toBe(200)

    const contentType = response.headers()['content-type'] ?? ''
    expect(contentType).toMatch(/xml/i)

    const body = await response.text()
    expect(body.length).toBeGreaterThan(100)
    expect(body).toContain('<urlset')
    expect(body).toContain('<url>')
  })

  // ── 2. Sitemap contains sign pages ────────────────────────────────────────
  test('sitemap contains zodiac sign page URLs', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    const body = await response.text()

    // Should contain multiple /zodiac/ entries
    expect(body).toContain('/zodiac/fire-horse')
    expect(body).toContain('/zodiac/wood-rat')
    expect(body).toContain('/zodiac/water-snake')
    expect(body).toContain('/zodiac/metal-tiger')
    expect(body).toContain('/zodiac/earth-dragon')

    // Count the number of sign page entries (rough check: should be ~60)
    const signPageMatches = body.match(/\/zodiac\/[a-z]+-[a-z]+/g) ?? []
    expect(signPageMatches.length).toBeGreaterThanOrEqual(60)
  })

  // ── 3. Sitemap contains compatibility pages ────────────────────────────────
  test('sitemap contains compatibility page URLs', async ({ request }) => {
    const response = await request.get('/sitemap.xml')
    const body = await response.text()

    // Must contain at least the /compatibility root and some pair pages
    expect(body).toContain('/compatibility')

    // Expect at least some canonical compatibility pair pages to be listed
    const compatMatches = body.match(/\/compatibility\/[a-z]+-[a-z]+\/[a-z]+-[a-z]+/g) ?? []
    expect(compatMatches.length).toBeGreaterThan(0)
  })
})
