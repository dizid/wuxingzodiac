import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'

test.describe('Sharing flow', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await clearAllStorage(page)
    // Grant clipboard access for copy tests
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write'])
  })

  test('1. Result page share copies URL to clipboard', async ({ page }) => {
    await goto(page, '/result/fire-horse')

    // Share button is visible
    const shareBtn = page.locator('button').filter({ hasText: /Share Your Result/i })
    await expect(shareBtn).toBeVisible()

    await shareBtn.click()

    // Clipboard should contain the result URL
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText())
    expect(clipboardText).toContain('/result/fire-horse')
    expect(clipboardText).toContain('wuxingzodiac.me')
  })

  test('2. "Copied" state resets after timeout', async ({ page }) => {
    await goto(page, '/result/fire-horse')

    const shareBtn = page.locator('button').filter({ hasText: /Share Your Result/i })
    await shareBtn.click()

    // "Link Copied!" should appear immediately
    await expect(page.locator('button').filter({ hasText: /Link Copied!/i })).toBeVisible()

    // After ~2 seconds, the button text should revert to "Share Your Result"
    await expect(page.locator('button').filter({ hasText: /Share Your Result/i })).toBeVisible({
      timeout: 4_000,
    })
  })

  test('3. Compatibility page has share functionality', async ({ page }) => {
    await goto(page, '/compatibility/earth-dog/fire-horse')

    // Scroll to the Share section
    const shareSection = page.locator('h2', { hasText: /Share This Result/i })
    await shareSection.scrollIntoViewIfNeeded()
    await expect(shareSection).toBeVisible()

    // The ShareButtons component renders multiple share options
    const copyLinkBtn = page.locator('button').filter({ hasText: /Copy Link/i })
    await expect(copyLinkBtn).toBeVisible()

    // Click copy
    await copyLinkBtn.click()

    // "Copied!" feedback appears
    await expect(page.locator('button').filter({ hasText: /Copied!/i })).toBeVisible({ timeout: 3_000 })

    // Clipboard should contain the compatibility URL
    const clipboardText = await page.evaluate(() => navigator.clipboard.readText())
    expect(clipboardText).toContain('wuxingzodiac.me/compatibility/')
    expect(clipboardText).toContain('earth-dog')
    expect(clipboardText).toContain('fire-horse')
  })

  test('4. Shared result page loads standalone at /result/fire-horse', async ({ page }) => {
    // Navigate directly to a result page (as if visiting a shared link)
    await goto(page, '/result/fire-horse')

    // Page title reflects the sign
    await expect(page).toHaveTitle(/Fire Horse/i)

    // Main sign name is visible
    await expect(page.locator('h1')).toContainText(/Fire Horse/i)

    // Sign details are present
    await expect(page.locator('text=The Untamable Spirit')).toBeVisible()

    // Element is shown
    await expect(page.locator('text=Fire').first()).toBeVisible()

    // "Read Your Full Profile" CTA links to the sign page
    const fullProfileLink = page.locator('a', { hasText: /Read Your Full Profile/i })
    await expect(fullProfileLink).toBeVisible()
    await expect(fullProfileLink).toHaveAttribute('href', '/zodiac/fire-horse')

    // Share button is available for the standalone page visitor to re-share
    const shareBtn = page.locator('button').filter({ hasText: /Share Your Result/i })
    await expect(shareBtn).toBeVisible()
  })
})
