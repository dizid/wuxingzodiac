import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Network failure tests.
 * Simulates hard network failures (not HTTP errors) using route.abort().
 * The app must degrade gracefully and show meaningful error states.
 */

test.describe('Network error handling', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Blog with network failure → error state ────────────────────────────
  test('blog page shows error state when network request fails', async ({ page }) => {
    // Abort both blog API route patterns
    await page.route('**/api/blog-posts**', (route) => route.abort('failed'))
    await page.route('**/api/blog/posts**', (route) => route.abort('failed'))

    await page.goto('/blog')
    await waitForApp(page)

    // The blog page must not crash — it should show an error or empty state
    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) ?? ''
    expect(bodyText.trim().length).toBeGreaterThan(0)

    // An error or empty state message should be present
    await expect(page.locator('body')).toContainText(/error|could not load|failed|no posts|unavailable|try again/i, {
      timeout: 5000,
    })
  })

  // ── 2. Shop with network failure → error state ────────────────────────────
  test('shop page shows error state when Shopify API request fails', async ({ page }) => {
    await page.route('**shopify.com/**', (route) => route.abort('failed'))

    await page.goto('/shop')
    await waitForApp(page)

    await expect(page.locator('body')).toBeVisible()
    const bodyText = (await page.locator('body').textContent()) ?? ''
    expect(bodyText.trim().length).toBeGreaterThan(0)

    await expect(page.locator('body')).toContainText(/error|could not load|unavailable|try again/i, {
      timeout: 5000,
    })
  })

  // ── 3. Newsletter offline → error message ────────────────────────────────
  test('newsletter form shows error when network request fails', async ({ page }) => {
    await page.route('**/api/newsletter/subscribe', (route) => route.abort('failed'))

    await page.goto('/')
    await waitForApp(page)

    const emailInput = page.locator('input[type="email"]').first()
    await emailInput.fill('test@example.com')
    await page.locator('button[type="submit"]').first().click()

    await expect(page.locator('body')).toContainText(/error|failed|try again|network|unavailable/i, {
      timeout: 5000,
    })
  })

  // ── 4. Chunk load failure is handled ──────────────────────────────────────
  test('chunk load failure does not leave a completely blank page', async ({ page }) => {
    // Intercept one JS chunk and make it fail
    // We do this carefully — only abort chunks that are not the main entry
    let chunkAborted = false
    await page.route('**/*.js', (route) => {
      const url = route.request().url()
      // Only abort the first lazy-loaded chunk (not the main/vendor bundle)
      if (!chunkAborted && url.includes('assets/') && !url.includes('index') && !url.includes('vendor')) {
        chunkAborted = true
        route.abort('failed')
        return
      }
      route.continue()
    })

    // Navigate to homepage (main bundle must still load)
    await page.goto('/')

    // Wait a moment for any chunk errors to surface
    await page.waitForTimeout(2000)

    // The page body should still render — not blank
    const bodyText = (await page.locator('body').textContent()) ?? ''
    expect(
      bodyText.trim().length,
      'Page should not be completely blank after a chunk load failure',
    ).toBeGreaterThan(0)

    // Either renders normally or shows a graceful error
    await expect(page.locator('body')).toBeVisible()
  })
})
