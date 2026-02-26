import { test, expect } from '@playwright/test'
import { mockAllApis } from '../helpers/api-mocks'
import { waitForApp } from '../helpers/test-app'

/**
 * Smoke tests — these gate the entire suite.
 * If any smoke test fails, something fundamental is broken.
 * Each test is intentionally minimal: load the page, confirm a key element renders.
 */

test.describe('Smoke tests', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  test('1. Homepage loads — H1 contains Wu Xing Zodiac branding', async ({ page }) => {
    await page.goto('/')
    await waitForApp(page)

    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).toContainText(/wu xing zodiac/i)
  })

  test('2. Sign page loads — /zodiac/fire-horse shows Fire Horse', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // The SignHero renders the sign name prominently on the page
    await expect(page.locator('body')).toContainText('Fire Horse')
  })

  test('3. Calculator page loads — /calculator has select dropdowns', async ({ page }) => {
    await page.goto('/calculator')
    await waitForApp(page)

    // Calculator has Year, Month, Day selects
    const selects = page.locator('select')
    await expect(selects).toHaveCount(3)
  })

  test('4. Compatibility picker loads — /compatibility has two dropdowns', async ({ page }) => {
    await page.goto('/compatibility')
    await waitForApp(page)

    // CompatibilityPicker renders two sign selects
    const selects = page.locator('select')
    await expect(selects.first()).toBeVisible()
    await expect(selects.nth(1)).toBeVisible()
    const count = await selects.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('5. Directory page loads — /zodiac shows sign cards', async ({ page }) => {
    await page.goto('/zodiac')
    await waitForApp(page)

    // Directory shows "All 60 Zodiac Signs" heading and sign cards (anchor links)
    await expect(page.locator('h1')).toContainText(/all 60 zodiac signs/i)

    // Sign cards are rendered as links to sign pages
    const signLinks = page.locator('a[href^="/zodiac/fire-"]')
    await expect(signLinks.first()).toBeVisible()
  })

  test('6. Blog page loads — /blog renders with mocked API', async ({ page }) => {
    // Override blog mock with a route matching what BlogPage.vue actually calls
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          posts: [
            {
              id: '1',
              slug: 'understanding-wu-xing',
              title: 'Understanding Wu Xing: The Five Elements',
              excerpt: 'Explore the ancient Chinese system.',
              content: '<p>Content</p>',
              coverImage: null,
              authorName: 'Wu Xing Team',
              publishedAt: '2026-01-15T10:00:00Z',
              tags: ['wu-xing'],
              readTime: 5,
            },
          ],
          page: 1,
          totalPages: 1,
        }),
      })
    })

    await page.goto('/blog')
    await waitForApp(page)

    // Blog page header
    await expect(page.locator('body')).toContainText(/blog/i)
  })

  test('7. Shop page loads — /shop renders', async ({ page }) => {
    await page.goto('/shop')
    await waitForApp(page)

    // Shop page has its SEO title content visible on page
    await expect(page.locator('body')).toContainText(/collection|shop|merch/i)
  })

  test('8. 404 page works — /nonexistent-route shows 404 content', async ({ page }) => {
    await page.goto('/nonexistent-route-that-does-not-exist')
    await waitForApp(page)

    // NotFoundPage renders "404" prominently
    await expect(page.locator('h1')).toContainText('404')
  })
})
