import { test, expect } from '@playwright/test'
import { mockAllApis, mockStripeCheckout, mockDownloadReport } from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'
import type { Page, Route } from '@playwright/test'

// The reading is ordered on /reading. These specs need a build with READING_LIVE=true
// (set in e2e/playwright.config.ts); without it /reading shows the launch waitlist.
async function openIntakeForm(page: Page) {
  await goto(page, '/reading')
  await page.locator('button', { hasText: /Get your reading/i }).first().click()
  await expect(page.locator('#reading-name')).toBeVisible({ timeout: 15_000 })
}

async function fillIntakeForm(page: Page) {
  await page.locator('#reading-name').fill('Marc')
  await page.locator('#reading-birthdate').fill('1984-06-12')
  await page.locator('#reading-email').fill('marc@example.com')
}

test.describe('Personal reading purchase flow', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await clearAllStorage(page)
  })

  test('1. /reading → open intake form → submit → create-checkout receives reading details', async ({ page }) => {
    let checkoutBody: Record<string, unknown> | null = null
    await page.route('**/api/create-checkout', async (route: Route) => {
      checkoutBody = route.request().postDataJSON()
      // Small delay so the loading state is observable before the redirect
      await new Promise((resolve) => setTimeout(resolve, 500))
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ url: 'https://checkout.stripe.com/test-session-fire-horse' }),
      })
    })

    await openIntakeForm(page)
    await fillIntakeForm(page)

    await page.locator('button', { hasText: /Continue to Payment/i }).click()

    // Button switches to loading state while redirecting to Stripe
    await expect(page.locator('button', { hasText: /Redirecting to checkout/i })).toBeVisible()
    await expect.poll(() => checkoutBody).toMatchObject({
      readingType: 'personal',
      names: ['Marc'],
      birthDates: ['1984-06-12'],
      email: 'marc@example.com',
      isGift: false,
    })
  })

  test('2. Gift option sends recipient + message and shows the computed sign', async ({ page }) => {
    let checkoutBody: Record<string, unknown> | null = null
    await page.route('**/api/create-checkout', async (route: Route) => {
      checkoutBody = route.request().postDataJSON()
      await new Promise((resolve) => setTimeout(resolve, 500))
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ url: 'https://checkout.stripe.com/test' }),
      })
    })

    await openIntakeForm(page)
    await fillIntakeForm(page)

    // 12 June 1984 → Wood Rat (preview helps buyers confirm their sign)
    await expect(page.locator('text=Wood Rat')).toBeVisible()

    await page.locator('label', { hasText: /This is a gift/i }).click()
    await page.locator('#reading-recipient').fill('Sam')
    await page.locator('#reading-message').fill('Happy birthday!')

    const submitBtn = page.locator('button[type="submit"]')
    await submitBtn.click()

    // Loading state should appear
    await expect(page.locator('button', { hasText: /Redirecting to checkout/i })).toBeVisible()
    await expect(submitBtn).toBeDisabled()
    await expect.poll(() => checkoutBody).toMatchObject({
      isGift: true,
      recipientName: 'Sam',
      giftMessage: 'Happy birthday!',
    })
  })

  test('3. Checkout error state (mock 500)', async ({ page }) => {
    // Override stripe checkout mock with a 500 error
    await mockStripeCheckout(page, { status: 500 })

    await openIntakeForm(page)
    await fillIntakeForm(page)
    await page.locator('button', { hasText: /Continue to Payment/i }).click()

    // Error message should appear in the intake form
    await expect(page.locator('text=Failed to create checkout session')).toBeVisible({ timeout: 10_000 })

    // Button should be re-enabled after error
    await expect(page.locator('button', { hasText: /Continue to Payment/i })).toBeEnabled({ timeout: 5_000 })
  })

  test('3b. Client-side validation blocks invalid details without calling checkout', async ({ page }) => {
    let checkoutCalls = 0
    await page.route('**/api/create-checkout', async (route: Route) => {
      checkoutCalls++
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ url: 'https://checkout.stripe.com/test' }) })
    })

    await openIntakeForm(page)
    await page.locator('#reading-name').fill('<script>')
    await page.locator('#reading-birthdate').fill('1984-06-12')
    await page.locator('#reading-email').fill('marc@example.com')
    await page.locator('button', { hasText: /Continue to Payment/i }).click()

    await expect(page.locator('[role="alert"]')).toContainText(/letters/i)
    expect(checkoutCalls).toBe(0)
  })

  test('4. Full download flow: /report/download?session=test → check → ready → click download → mock PDF', async ({ page }) => {
    // Delay so the loading and "Downloading..." states are observable before the mock answers
    await mockDownloadReport(page, { signName: 'Fire Horse', signSlug: 'fire-horse', delayMs: 800 })

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
      delayMs: 800,
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

  test('7. Sign page and result page link to /reading, where the order button is', async ({ page }) => {
    // Sign page: reading CTA links to the landing page
    await goto(page, '/zodiac/fire-horse')
    await expect(page.locator('a[href="/reading"]', { hasText: /See what.s inside/i }).first()).toBeVisible({ timeout: 15_000 })

    // Result page: same
    await goto(page, '/result/fire-horse')
    await expect(page.locator('a[href="/reading"]', { hasText: /See what.s inside/i }).first()).toBeVisible()

    // /reading sells it
    await goto(page, '/reading')
    await expect(page.locator('button', { hasText: /Get your reading.*\$9\.90/i }).first()).toBeVisible()
  })

  test('8. Analytics tracked during purchase flow (verify no console errors)', async ({ page }) => {
    const consoleErrors: string[] = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await openIntakeForm(page)
    await fillIntakeForm(page)

    // Submit the intake form
    await page.locator('button', { hasText: /Continue to Payment/i }).click()

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

  test('9. Personalized reading: ?session_id= polls while generating, then shows it was emailed', async ({ page }) => {
    let checks = 0
    await page.route('**/api/download-report**', async (route: Route) => {
      const url = new URL(route.request().url())
      expect(url.searchParams.get('session_id')).toBe('cs_test_reading')
      expect(url.searchParams.get('action')).toBe('check')

      checks++
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          status: checks < 2 ? 'generating' : 'delivered',
          productName: 'Personal Reading',
          signName: 'Wood Rat',
          signSlug: 'wood-rat',
          email: 'm•••@example.com',
        }),
      })
    })

    await goto(page, '/report/download?session_id=cs_test_reading')

    // First check says "generating" → page keeps polling and names the inbox
    await expect(page.locator('h1', { hasText: /Writing Your Reading/i })).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('text=m•••@example.com').first()).toBeVisible()

    // Second check says "delivered" — no download button, the PDF is emailed
    await expect(page.locator('h1', { hasText: /in Your Inbox/i })).toBeVisible({ timeout: 15_000 })
    await expect(page.locator('button', { hasText: /Download PDF/i })).toHaveCount(0)
  })

  test('10. Failed reading tells the buyer it will still be emailed', async ({ page }) => {
    await page.route('**/api/download-report**', (route: Route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 'failed', productName: 'Personal Reading', signName: 'Wood Rat', email: 'm•••@example.com' }),
      }),
    )

    await goto(page, '/report/download?session_id=cs_test_failed')

    await expect(page.locator('h1', { hasText: /Something Went Wrong/i })).toBeVisible({ timeout: 10_000 })
    await expect(page.locator('text=no need to order again')).toBeVisible()
  })
})
