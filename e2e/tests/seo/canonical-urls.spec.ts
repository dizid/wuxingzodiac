import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { getCanonical, countCanonicals } from '../../helpers/seo'

/**
 * Canonical URL tests.
 * Verifies that every page has exactly one canonical tag that matches
 * the expected URL, and that the compatibility router enforces alphabetical order.
 */

test.describe('Canonical URLs', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Homepage canonical ─────────────────────────────────────────────────
  test('homepage canonical points to the root URL', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const canonical = await getCanonical(page)
    expect(canonical).toBeTruthy()
    // Canonical should point to the root (allow trailing slash variants)
    expect(canonical).toMatch(/https?:\/\/[^/]+(\/)?$/)
  })

  // ── 2. Sign page canonical ────────────────────────────────────────────────
  test('sign page canonical contains the sign slug', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    const canonical = await getCanonical(page)
    expect(canonical).toBeTruthy()
    expect(canonical).toContain('/zodiac/fire-horse')
  })

  // ── 3. Compatibility canonical enforces alphabetical order ────────────────
  test('compatibility canonical enforces alphabetical slug order', async ({ page }) => {
    // Request in reversed order: fire-horse, earth-dragon
    // Router should redirect to earth-dragon/fire-horse
    await page.goto('/compatibility/fire-horse/earth-dragon')
    await waitForApp(page)

    // URL should have been rewritten by the router guard
    expect(page.url()).toContain('/compatibility/earth-dragon/fire-horse')

    // Canonical must also reflect the canonical alphabetical order
    const canonical = await getCanonical(page)
    if (canonical) {
      expect(canonical).toContain('/compatibility/earth-dragon/fire-horse')
      expect(canonical).not.toContain('/compatibility/fire-horse/earth-dragon')
    }
  })

  // ── 4. Result page canonical ──────────────────────────────────────────────
  test('result page canonical contains the sign slug', async ({ page }) => {
    await page.goto('/result/fire-horse')
    await waitForApp(page)

    const canonical = await getCanonical(page)
    expect(canonical).toBeTruthy()
    expect(canonical).toContain('/result/fire-horse')
  })

  // ── 5. Calculator canonical ───────────────────────────────────────────────
  test('calculator page canonical contains /calculator', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    const canonical = await getCanonical(page)
    expect(canonical).toBeTruthy()
    expect(canonical).toContain('/calculator')
  })

  // ── 6. No duplicate canonical tags per page ────────────────────────────────
  test('each page has exactly one canonical link tag', async ({ page }) => {
    const pagesToCheck = [
      '/',
      '/zodiac/fire-horse',
      '/calculator',
      '/compatibility',
      '/blog',
    ]

    for (const path of pagesToCheck) {
      await page.goto(path)
      await waitForApp(page)

      const count = await countCanonicals(page)
      expect(count, `Page ${path} has ${count} canonical tags (expected 1)`).toBe(1)
    }
  })

  // ── 7. Canonical matches actual URL ───────────────────────────────────────
  test('canonical URL matches the actual page URL (no stale canonical)', async ({ page }) => {
    await page.goto('/zodiac/wood-rat')
    await waitForApp(page)

    const canonical = await getCanonical(page)
    expect(canonical).toBeTruthy()

    // The canonical must contain the same path as the current page
    const currentUrl = new URL(page.url())
    const canonicalUrl = new URL(canonical!)

    expect(canonicalUrl.pathname).toBe('/zodiac/wood-rat')
    // Hosts may differ in local dev vs. production, but paths must match
    expect(canonicalUrl.pathname).toBe(currentUrl.pathname)
  })

  // ── 8. Compatibility redirect preserves canonical ──────────────────────────
  test('compatibility redirect sets canonical to the alphabetically correct URL', async ({ page }) => {
    // water-rat > earth-dog alphabetically → redirect to earth-dog/water-rat
    await page.goto('/compatibility/water-rat/earth-dog')
    await waitForApp(page)

    // After redirect, verify final URL is in alphabetical order
    expect(page.url()).toContain('/compatibility/earth-dog/water-rat')

    const canonical = await getCanonical(page)
    if (canonical) {
      expect(canonical).toContain('/compatibility/earth-dog/water-rat')
    }
  })
})
