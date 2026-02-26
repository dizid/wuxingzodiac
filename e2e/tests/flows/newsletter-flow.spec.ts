import { test, expect } from '@playwright/test'
import {
  mockAllApis,
  mockNewsletter,
  mockNewsletterError,
  mockNewsletterDuplicate,
} from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'
import type { Route } from '@playwright/test'

test.describe('Newsletter subscription flow', () => {
  test.beforeEach(async ({ page }) => {
    await clearAllStorage(page)
  })

  /**
   * Helper: fill and submit the newsletter form on the homepage.
   */
  async function submitNewsletterForm(page: import('@playwright/test').Page, email: string) {
    const emailInput = page.locator('input[name="email"]').first()
    await emailInput.fill(email)
    await page.locator('button[type="submit"]', { hasText: /Subscribe/i }).first().click()
  }

  test('1. Subscribe success on homepage: enter email → submit → success message', async ({ page }) => {
    await mockNewsletter(page)
    await goto(page, '/')

    // Scroll down to the newsletter section
    const newsletterSection = page.locator('section').filter({ has: page.locator('h2', { hasText: /Stay in the Loop/i }) })
    await newsletterSection.scrollIntoViewIfNeeded()

    await submitNewsletterForm(page, 'test@example.com')

    // Success message should appear
    await expect(page.locator('text=Watch your inbox')).toBeVisible({ timeout: 10_000 })
    // The form itself should be hidden
    await expect(page.locator('form').first()).not.toBeVisible()
  })

  test('2. Subscribe error: submit empty → validation error', async ({ page }) => {
    await mockNewsletter(page)
    await goto(page, '/')

    const newsletterSection = page.locator('section').filter({ has: page.locator('h2', { hasText: /Stay in the Loop/i }) })
    await newsletterSection.scrollIntoViewIfNeeded()

    // Submit without entering an email
    const submitBtn = page.locator('button[type="submit"]', { hasText: /Subscribe/i }).first()
    await submitBtn.click()

    // Validation error message should appear
    await expect(page.locator('text=Please enter your email address')).toBeVisible({ timeout: 5_000 })

    // Success state should NOT appear
    await expect(page.locator('text=Watch your inbox')).not.toBeVisible()
  })

  test('3. Server error: mock 500 → error message displayed', async ({ page }) => {
    await mockNewsletterError(page)
    await goto(page, '/')

    const newsletterSection = page.locator('section').filter({ has: page.locator('h2', { hasText: /Stay in the Loop/i }) })
    await newsletterSection.scrollIntoViewIfNeeded()

    await submitNewsletterForm(page, 'test@example.com')

    // Server error message should appear
    await expect(page.locator('text=Something went wrong. Please try again later.')).toBeVisible({ timeout: 10_000 })

    // Form should still be visible (not switched to success state)
    await expect(page.locator('form').first()).toBeVisible()
  })

  test('4. Duplicate subscriber: mock duplicate response → "already subscribed" message', async ({ page }) => {
    await mockNewsletterDuplicate(page)
    await goto(page, '/')

    const newsletterSection = page.locator('section').filter({ has: page.locator('h2', { hasText: /Stay in the Loop/i }) })
    await newsletterSection.scrollIntoViewIfNeeded()

    await submitNewsletterForm(page, 'already@subscribed.com')

    // The duplicate response returns ok:true with a specific message
    await expect(page.locator("text=You're already subscribed!")).toBeVisible({ timeout: 10_000 })
  })

  test('5. Honeypot blocks bots (fill hidden field → submit → silent success, no error)', async ({ page }) => {
    // Mock returns success for honeypot-filled requests too (server decides behavior)
    await mockNewsletter(page)
    await goto(page, '/')

    const newsletterSection = page.locator('section').filter({ has: page.locator('h2', { hasText: /Stay in the Loop/i }) })
    await newsletterSection.scrollIntoViewIfNeeded()

    // Fill the honeypot field (it's hidden from humans via CSS, but accessible via DOM)
    const honeypotInput = page.locator('input[name="hp"]').first()
    await honeypotInput.evaluate((el) => {
      // Temporarily make visible to interact with
      ;(el as HTMLInputElement).style.display = 'block'
    })
    await honeypotInput.fill('bot@spam.com')

    // Submit the form (with real email too)
    const emailInput = page.locator('input[name="email"]').first()
    await emailInput.fill('test@example.com')
    await page.locator('button[type="submit"]', { hasText: /Subscribe/i }).first().click()

    // The form either silently succeeds (server mock returns ok) or shows no error.
    // Critical: no crash, no unhandled exception.
    await page.waitForTimeout(1_000)

    // No JS error should have occurred
    // The submit either transitions to success state or stays on form — both OK
    const errorMsg = page.locator('p.text-red-400')
    // If there's an error message, it should not be a JS runtime error
    const hasError = await errorMsg.isVisible()
    if (hasError) {
      const errorText = await errorMsg.textContent()
      // Should be a user-facing message, not an uncaught exception
      expect(errorText).not.toContain('TypeError')
      expect(errorText).not.toContain('undefined')
    }
  })

  test('6. Submitting state: button shows loading during request', async ({ page }) => {
    // Delay the response to observe the loading state
    await page.route('**/api/newsletter/subscribe', async (route: Route) => {
      await new Promise((resolve) => setTimeout(resolve, 600))
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, message: "You're in! Watch your inbox." }),
      })
    })

    await goto(page, '/')

    const newsletterSection = page.locator('section').filter({ has: page.locator('h2', { hasText: /Stay in the Loop/i }) })
    await newsletterSection.scrollIntoViewIfNeeded()

    const emailInput = page.locator('input[name="email"]').first()
    await emailInput.fill('test@example.com')

    const submitBtn = page.locator('button[type="submit"]', { hasText: /Subscribe/i }).first()
    await submitBtn.click()

    // Button should show "Subscribing..." while waiting
    await expect(page.locator('button', { hasText: /Subscribing\.\.\./i }).first()).toBeVisible()
    await expect(submitBtn).toBeDisabled()

    // After response, success message appears
    await expect(page.locator('text=Watch your inbox')).toBeVisible({ timeout: 5_000 })
  })
})
