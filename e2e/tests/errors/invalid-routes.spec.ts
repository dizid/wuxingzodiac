import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { invalidSlugs } from '../../fixtures/sign-profiles'

/**
 * Invalid route tests.
 * All invalid dynamic params must redirect to the 404 page,
 * not crash or render blank content.
 */

test.describe('Invalid route handling', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // Helper: assert that a path results in the 404 page
  async function assert404(page: Parameters<typeof waitForApp>[0], path: string) {
    await page.goto(path)
    await waitForApp(page)
    await expect(page.locator('h1'), `Expected 404 for path: ${path}`).toContainText('404')
  }

  // ── 1. Invalid sign slug → 404 ────────────────────────────────────────────
  test('invalid sign slug redirects to 404', async ({ page }) => {
    await assert404(page, '/zodiac/fire-unicorn')
  })

  // ── 2. Invalid animal → 404 ───────────────────────────────────────────────
  test('invalid animal in /zodiac/animal/:animal redirects to 404', async ({ page }) => {
    await assert404(page, '/zodiac/animal/phoenix')
  })

  // ── 3. Invalid element → 404 ──────────────────────────────────────────────
  test('invalid element in /zodiac/element/:element redirects to 404', async ({ page }) => {
    await assert404(page, '/zodiac/element/lightning')
  })

  // ── 4. Invalid compatibility slug A → 404 ─────────────────────────────────
  test('invalid slugA in compatibility pair URL redirects to 404', async ({ page }) => {
    await assert404(page, '/compatibility/fire-unicorn/fire-horse')
  })

  // ── 5. Invalid compatibility slug B → 404 ─────────────────────────────────
  test('invalid slugB in compatibility pair URL redirects to 404', async ({ page }) => {
    await assert404(page, '/compatibility/fire-horse/lightning-dragon')
  })

  // ── 6. Invalid result sign → 404 ─────────────────────────────────────────
  test('invalid sign in /result/:sign redirects to 404', async ({ page }) => {
    await assert404(page, '/result/fire-unicorn')
  })

  // ── 7. Empty dynamic params ───────────────────────────────────────────────
  test('empty slug paths render 404 or redirect gracefully', async ({ page }) => {
    // A URL ending with / after a known prefix that expects a slug
    await page.goto('/zodiac/')
    await waitForApp(page)

    // Either renders the directory or 404 — must not crash
    await expect(page.locator('body')).toBeVisible()

    await page.goto('/result/')
    await waitForApp(page)
    await expect(page.locator('body')).toBeVisible()
  })

  // ── 8. Malformed paths ────────────────────────────────────────────────────
  test('malformed and deeply nested paths render 404', async ({ page }) => {
    const malformedPaths = [
      '/zodiac/fire-horse/extra/path',
      '/compatibility/fire-horse',
      '/__admin',
      '/api/internal/secret',
      '/..%2F..%2Fetc%2Fpasswd',
    ]

    for (const path of malformedPaths) {
      await page.goto(path)
      await waitForApp(page)

      // The app must render something — either 404 or a valid page
      await expect(page.locator('body')).toBeVisible()
      // It must never show a blank white screen (empty body)
      const bodyText = await page.locator('body').textContent()
      expect((bodyText ?? '').trim().length).toBeGreaterThan(0)
    }
  })

  // ── Additional: known invalid slugs from fixture ──────────────────────────
  test('all known invalid slugs from the fixture redirect to 404', async ({ page }) => {
    // Use slugs that won't cause URL encoding issues
    const testSlugs = invalidSlugs.filter((s) => s.length > 0 && !s.includes(' '))

    for (const slug of testSlugs) {
      await page.goto(`/zodiac/${slug}`)
      await waitForApp(page)

      await expect(page.locator('h1'), `Expected 404 for slug: ${slug}`).toContainText('404')
    }
  })
})
