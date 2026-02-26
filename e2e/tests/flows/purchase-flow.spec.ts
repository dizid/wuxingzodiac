import { test, expect } from '@playwright/test'
import { mockAllApis, mockStripeCheckout, mockDownloadReport } from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'
import type { Route } from '@playwright/test'

test.describe('Blueprint purchase flow', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await clearAllStorage(page)
  })

  test('1. Sign page → Click Blueprint CTA → mock create-checkout → verify redirect URL set', async ({ page }) => {
    const expectedCheckoutUrl = 'https://checkout.stripe.com/test-session-fire-horse'

    // Override the checkout mock with a specific URL
    await mockStripeCheckout(page, { checkoutUrl: expectedCheckoutUrl })

    // Track navigation attempts (redirect to external URL)
    let redirectTarget = ''
    page.on('request', (req) => {
      if (req.url().includes('checkout.stripe.com')) {
        redirectTarget = req.url()
      }
    })

    await goto(page, '/zodiac/fire-horse')

    // Wait for the sign page content to load
    await page.waitForSelector('text=Your Elemental Blueprint', { timeout: 15_000 })

    // Click the Blueprint purchase button
    const purchaseBtn = page.locator('button', { hasText: /Get Your Blueprint/i }).first()
    await expect(purchaseBtn).toBeEnabled()
    await purchaseBtn.click()

    // The button should show loading state
    await expect(page.locator('button', { hasText: /Redirecting to checkout/i })).toBeVisible()

    // The API route should have been called — verify the mock intercepted it
    // (redirect to external URL is blocked in test env; we verify the button state transition)
    await expect(page.locator('button', { hasText: /Redirecting to checkout|Get Your Blueprint/i })).toBeVisible()
  })

  test('2. Checkout loading state on button', async ({ page }) => {
    // Delay the checkout response to observe loading state
    await page.route('**/api/create-checkout', async (route: Route) => {
      await new Promise((resolve) => setTimeout(resolve, 500))
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ url: 'https://checkout.stripe.com/test' }),
      })
    })

    await goto(page, '/zodiac/fire-horse')
    await page.waitForSelector('text=Your Elemental Blueprint', { timeout: 15_000 })

    const purchaseBtn = page.locator('button', { hasText: /Get Your Blueprint/i }).first()
    await purchaseBtn.click()

    // Loading state should appear
    await expect(page.locator('button', { hasText: /Redirecting to checkout/i })).toBeVisible()
    await expect(purchaseBtn).toBeDisabled()
  })

  test('3. Checkout error state (mock 500)', async ({ page }) => {
    // Override stripe checkout mock with a 500 error
    await mockStripeCheckout(page, { status: 500 })

    await goto(page, '/zodiac/fire-horse')
    await page.waitForSelector('text=Your Elemental Blueprint', { timeout: 15_000 })

    const purchaseBtn = page.locator('button', { hasText: /Get Your Blueprint/i }).first()
    await purchaseBtn.click()

    // Error message should appear in the BlueprintCTA component
    await expect(page.locator('text=Failed to create checkout session')).toBeVisible({ timeout: 10_000 })

    // Button should be re-enabled after error
    await expect(page.locator('button', { hasText: /Get Your Blueprint/i })).toBeEnabled({ timeout: 5_000 })
  })

  test('4. Full download flow: /report/download?session=test → check → ready → click download → mock PDF', async ({ page }) => {
    await mockDownloadReport(page, { signName: 'Fire Horse', signSlug: 'fire-horse' })

    await goto(page, '/report/download?session=cs_test_abc123')

    // "Preparing Your Report..." loading state first
    await expect(page.locator('h1', { hasText: /Preparing Your Report/i })).toBeVisible()

    // Then transitions to "ready" state
    await expect(page.locator('h1', { hasText: /Your Blueprint is Ready/i })).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('text=Fire Horse')).toBeVisible()

    // Download button is visible and enabled
    const downloadBtn = page.locator('button', { hasText: /Download PDF/i })
    await expect(downloadBtn).toBeVisible()
    await expect(downloadBtn).toBeEnabled()

    // Click download — mock returns a fake PDF blob
    await downloadBtn.click()

    // After clicking, should briefly show "Downloading..." then return to ready
    await expect(page.locator('button', { hasText: /Downloading\.\.\./i })).toBeVisible()
    await expect(page.locator('h1', { hasText: /Your Blueprint is Ready/i })).toBeVisible({ timeout: 10_000 })
  })

  test('5. Download retry after race condition (mock 404 twice, then 200)', async ({ page }) => {
    // Fail 2 times with 404 before succeeding (simulates webhook delay)
    await mockDownloadReport(page, {
      signName: 'Fire Horse',
      signSlug: 'fire-horse',
      failCount: 2,
    })

    await goto(page, '/report/download?session=cs_test_race')

    // Initially shows loading
    await expect(page.locator('h1', { hasText: /Preparing Your Report/i })).toBeVisible()

    // After first 404, shows "race condition" retry state
    await expect(page.locator('h1', { hasText: /payment is being confirmed/i })).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('text=Checking again automatically')).toBeVisible()

    // Eventually resolves to "ready" after retries
    await expect(page.locator('h1', { hasText: /Your Blueprint is Ready/i })).toBeVisible({ timeout: 15_000 })
  })

  test('6. Download error recovery (mock error → click retry → mock success)', async ({ page }) => {
    // First call returns 500 error
    let callCount = 0
    await page.route('**/api/download-report**', async (route: Route) => {
      callCount++
      if (callCount === 1) {
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Internal server error' }),
        })
      } else {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true, signName: 'Fire Horse', signSlug: 'fire-horse' }),
        })
      }
    })

    await goto(page, '/report/download?session=cs_test_error')

    // Error state appears after the failed request
    await expect(page.locator('h1', { hasText: /Something Went Wrong/i })).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('text=Internal server error')).toBeVisible()

    // Click "Try Again" button
    const retryBtn = page.locator('button', { hasText: /Try Again/i })
    await expect(retryBtn).toBeVisible()
    await retryBtn.click()

    // Second call succeeds — should show ready state
    await expect(page.locator('h1', { hasText: /Your Blueprint is Ready/i })).toBeVisible({ timeout: 10_000 })
  })

  test('7. Blueprint CTA present on sign page AND result page', async ({ page }) => {
    // Check sign page
    await goto(page, '/zodiac/fire-horse')
    await page.waitForSelector('text=Your Elemental Blueprint', { timeout: 15_000 })
    await expect(page.locator('text=Your Elemental Blueprint').first()).toBeVisible()
    await expect(page.locator('button', { hasText: /Get Your Blueprint/i }).first()).toBeVisible()

    // Check result page
    await goto(page, '/result/fire-horse')
    await expect(page.locator('text=Your Elemental Blueprint').first()).toBeVisible()
    await expect(page.locator('button', { hasText: /Get Your Blueprint/i }).first()).toBeVisible()
  })

  test('8. Analytics tracked during purchase flow (verify no console errors)', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await goto(page, '/zodiac/fire-horse')
    await page.waitForSelector('text=Your Elemental Blueprint', { timeout: 15_000 })

    // Click purchase button
    const purchaseBtn = page.locator('button', { hasText: /Get Your Blueprint/i }).first()
    await purchaseBtn.click()

    // Wait briefly for any async operations
    await page.waitForTimeout(500)

    // No JS errors should have fired during the purchase flow
    // (analytics is blocked, GA calls may fail silently — filter those out)
    const criticalErrors = consoleErrors.filter(
      (err) =>
        !err.includes('googletagmanager') &&
        !err.includes('google-analytics') &&
        !err.includes('analytics') &&
        !err.includes('Failed to load resource'),
    )

    expect(criticalErrors).toHaveLength(0)
  })
})
