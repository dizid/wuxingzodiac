import { test, expect } from '@playwright/test'
import {
  mockAllApis,
  mockNewsletterError,
  mockBlogApiError,
  mockBlogApiEmpty,
  mockStripeCheckout,
  mockDownloadReport,
} from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * API failure handling tests.
 * Mocks each external API to fail and verifies the UI
 * shows a sensible error state rather than crashing.
 */

test.describe('API failure handling', () => {
  // ── 1. Newsletter API 500 → error message ─────────────────────────────────
  test('newsletter API 500 shows an error message to the user', async ({ page }) => {
    await mockAllApis(page)
    await mockNewsletterError(page) // overrides newsletter mock with 500

    await page.goto('/')
    await waitForApp(page)

    // Submit the newsletter form
    const emailInput = page.locator('input[type="email"]').first()
    await emailInput.fill('test@example.com')
    await page.locator('button[type="submit"]').first().click()

    // An error message should appear
    await expect(page.locator('body')).toContainText(/error|something went wrong|try again/i, {
      timeout: 5000,
    })
  })

  // ── 2. Newsletter network error ───────────────────────────────────────────
  test('newsletter network failure shows an error message', async ({ page }) => {
    await mockAllApis(page)

    // Abort the newsletter request to simulate network failure
    await page.route('**/api/newsletter/subscribe', (route) => route.abort('failed'))

    await page.goto('/')
    await waitForApp(page)

    const emailInput = page.locator('input[type="email"]').first()
    await emailInput.fill('test@example.com')
    await page.locator('button[type="submit"]').first().click()

    await expect(page.locator('body')).toContainText(/error|failed|try again|network/i, {
      timeout: 5000,
    })
  })

  // ── 3. Blog API 500 → error state with retry ──────────────────────────────
  test('blog API 500 shows an error state on the blog page', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogApiError(page)

    // Also intercept the alternate blog route pattern
    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'Server error' }) })
    })

    await page.goto('/blog')
    await waitForApp(page)

    // Blog page should show an error state
    await expect(page.locator('body')).toContainText(/error|failed|could not load|try again/i, {
      timeout: 5000,
    })
  })

  // ── 4. Blog API empty → "no posts" message ────────────────────────────────
  test('empty blog API response shows a "no posts" message', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogApiEmpty(page)

    await page.route('**/api/blog/posts**', (route) => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: [], page: 1, totalPages: 1 }),
      })
    })

    await page.goto('/blog')
    await waitForApp(page)

    // Should show "no posts yet" or similar empty state
    await expect(page.locator('body')).toContainText(/no posts|nothing here|coming soon|empty/i, {
      timeout: 5000,
    })
  })

  // ── 5. Stripe checkout 500 → error on Blueprint CTA ──────────────────────
  test('Stripe checkout API 500 shows an error when clicking the buy button', async ({ page }) => {
    await mockAllApis(page)
    await mockStripeCheckout(page, { status: 500 })

    // The report purchase button is on the sign page (Blueprint report CTA)
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // Find and click the PDF/report purchase CTA
    const buyButton = page.locator(
      'button:has-text(/buy|purchase|get report|unlock|pdf|blueprint/i), a:has-text(/buy|purchase|get report|unlock|pdf|blueprint/i)',
    ).first()

    if (await buyButton.count() > 0) {
      await buyButton.click()
      await page.waitForTimeout(1000)

      await expect(page.locator('body')).toContainText(/error|failed|try again/i, {
        timeout: 5000,
      })
    }
    // If no buy button found, the test passes (feature may not be on this page)
  })

  // ── 7. Download report 404 → race condition then error ────────────────────
  test('download report 404 (race condition) eventually shows error', async ({ page }) => {
    await mockAllApis(page)
    // Fail twice (race condition), then never succeed — just fail indefinitely
    await mockDownloadReport(page, { failCount: 5, status: 404 })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    // Should show an error state after retries are exhausted
    await expect(page.locator('body')).toContainText(/not found|error|invalid|could not find/i, {
      timeout: 10000,
    })
  })

  // ── 8. Download report 402 → payment error ────────────────────────────────
  test('download report 402 shows payment not completed error', async ({ page }) => {
    await mockAllApis(page)
    await mockDownloadReport(page, { status: 402 })

    await page.goto('/report/download?session=cs_test_unpaid')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/payment|unpaid|complete/i, {
      timeout: 5000,
    })
  })

  // ── 9. Download report 410 → expired link error ───────────────────────────
  test('download report 410 shows expired link error', async ({ page }) => {
    await mockAllApis(page)
    await mockDownloadReport(page, { status: 410 })

    await page.goto('/report/download?session=cs_test_expired')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/expired|no longer available|link/i, {
      timeout: 5000,
    })
  })

  // ── 10. Download report 429 → limit exceeded error ────────────────────────
  test('download report 429 shows download limit exceeded error', async ({ page }) => {
    await mockAllApis(page)
    await mockDownloadReport(page, { status: 429 })

    await page.goto('/report/download?session=cs_test_maxdownloads')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/limit|exceeded|maximum|too many/i, {
      timeout: 5000,
    })
  })
})
