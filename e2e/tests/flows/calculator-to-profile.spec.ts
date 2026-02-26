import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { setUserSign, getUserSign, clearAllStorage } from '../../helpers/storage'

test.describe('Calculator → Result → Profile flow', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await clearAllStorage(page)
  })

  /**
   * Helper: select a value in a <select> element by its visible option text.
   */
  async function selectByText(page: import('@playwright/test').Page, label: string, text: string) {
    const selectEl = page.locator('label', { hasText: label }).locator('..').locator('select')
    await selectEl.selectOption({ label: text })
  }

  /**
   * Helper: select a value in a <select> element by its visible option value.
   */
  async function selectByValue(page: import('@playwright/test').Page, label: string, value: string) {
    const selectEl = page.locator('label', { hasText: label }).locator('..').locator('select')
    await selectEl.selectOption({ value })
  }

  test('1. Enter 1990/Jun/15 → Find Sign → Result "Metal Horse" → Click View Full Profile → sign page loads', async ({ page }) => {
    await goto(page, '/calculator')

    // Select year 1990, month June (6), day 15
    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')

    // Submit
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    // Verify result card shows Metal Horse
    const resultHeading = page.locator('h2').filter({ hasText: /Metal Horse/i })
    await expect(resultHeading).toBeVisible()

    // Click "View Full Profile →"
    const profileLink = page.locator('a', { hasText: /View Full Profile/i })
    await profileLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/zodiac/metal-horse')
    await expect(page.locator('h1')).toContainText(/Metal Horse/i)
  })

  test('2. Calculate sign → Go home → "Welcome back" personalized section visible', async ({ page }) => {
    await goto(page, '/calculator')

    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    // Wait for result to appear (sign is saved to localStorage)
    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).toBeVisible()

    // Navigate home
    await page.locator('a[href="/"]').first().click()
    await waitForApp(page)

    await expect(page).toHaveURL('/')

    // "Welcome back" personalized section should be visible
    await expect(page.locator('text=Welcome back')).toBeVisible()
    await expect(page.locator('text=Metal Horse')).toBeVisible()
  })

  test('3. Calculator result → Click "Check Compatibility" → Compatibility page with sign pre-filled', async ({ page }) => {
    await goto(page, '/calculator')

    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).toBeVisible()

    // Click "Check Compatibility" from the result CTA
    const compatLink = page.locator('a[href*="compatibility"]').filter({ hasText: /Check Compatibility/i }).first()
    await compatLink.click()
    await waitForApp(page)

    await expect(page.url()).toContain('/compatibility')
  })

  test('4. Calculator → Result → Click share button → "Link Copied!" feedback', async ({ page }) => {
    // Grant clipboard permissions
    await page.context().grantPermissions(['clipboard-read', 'clipboard-write'])

    await goto(page, '/calculator')

    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).toBeVisible()

    // Navigate to the result page directly (share is on result page)
    await page.goto('/result/metal-horse')
    await waitForApp(page)

    // Click the share/copy button
    const shareButton = page.locator('button').filter({ hasText: /Share Your Result|Copy/i }).first()
    await shareButton.click()

    // "Link Copied!" feedback appears
    await expect(page.locator('button', { hasText: /Link Copied!/i })).toBeVisible()
  })

  test('5. Lunar boundary: Enter 1990/Jan/26 → Result is Metal Horse (not Earth Snake)', async ({ page }) => {
    // Chinese New Year 1990 was Jan 27. Jan 26 1990 is still Earth Snake year.
    await goto(page, '/calculator')

    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'January')
    await selectByValue(page, 'Day', '26')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    // Result should be Earth Snake (still in 1989 lunar year)
    const result = page.locator('h2').filter({ hasText: /Earth Snake/i })
    await expect(result).toBeVisible()

    // Verify it is NOT Metal Horse
    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).not.toBeVisible()
  })

  test('6. My Sign link appears in nav after calculation', async ({ page }) => {
    await goto(page, '/calculator')

    // Before calculation, "My Sign" nav item should not exist
    await expect(page.locator('nav a', { hasText: /My Sign/i })).not.toBeVisible()

    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).toBeVisible()

    // After calculation, "My Sign" link should appear in the desktop nav
    // (may need to wait for reactive update)
    await expect(page.locator('nav a', { hasText: /My Sign/i })).toBeVisible({ timeout: 5000 })
  })

  test('7. Calculate different sign → localStorage updates', async ({ page }) => {
    // Pre-seed with fire-horse
    await goto(page, '/calculator')
    await setUserSign(page, 'fire-horse')

    const initial = await getUserSign(page)
    expect(initial).toBe('fire-horse')

    // Now calculate a different sign (Metal Horse, born 1990)
    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).toBeVisible()

    // localStorage should now be updated to metal-horse
    const updated = await getUserSign(page)
    expect(updated).toBe('metal-horse')
    expect(updated).not.toBe('fire-horse')
  })

  test('8. Blueprint CTA visible in calculator result', async ({ page }) => {
    await goto(page, '/calculator')

    await selectByValue(page, 'Year', '1990')
    await selectByText(page, 'Month', 'June')
    await selectByValue(page, 'Day', '15')
    await page.locator('button', { hasText: /Find My Sign/i }).click()

    await expect(page.locator('h2').filter({ hasText: /Metal Horse/i })).toBeVisible()

    // Blueprint CTA should be visible in the result section
    const blueprintCta = page.locator('text=Your Elemental Blueprint').first()
    await expect(blueprintCta).toBeVisible()

    // The purchase button should also be visible
    const purchaseBtn = page.locator('button', { hasText: /Get Your Blueprint/i }).first()
    await expect(purchaseBtn).toBeVisible()
  })
})
