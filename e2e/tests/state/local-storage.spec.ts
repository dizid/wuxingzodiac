import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import {
  getUserSign,
  setUserSign,
  clearUserSign,
  clearAllStorage,
} from '../../helpers/storage'

/**
 * localStorage persistence tests for the user sign (wuxing_user_sign).
 */

// Helper: fill the calculator and click Find My Sign
async function calculateSign(
  page: Parameters<typeof waitForApp>[0],
  year: number,
  month: number,
  day: number,
) {
  await page.goto('/calculator')
  await waitForApp(page)
  const selects = page.locator('select')
  await selects.nth(0).selectOption(String(year))
  await selects.nth(1).selectOption(String(month))
  await selects.nth(2).selectOption(String(day))
  await page.locator('button', { hasText: /Find My Sign/i }).click()
  // Wait for result to render
  await page.waitForTimeout(500)
}

test.describe('localStorage — user sign persistence', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    // Start with a clean slate
    await page.goto('/')
    await clearAllStorage(page)
  })

  // ── 1. Calculator sets wuxing_user_sign in localStorage ───────────────────
  test('calculator sets wuxing_user_sign in localStorage after calculation', async ({ page }) => {
    await calculateSign(page, 1990, 6, 15) // metal-horse

    const saved = await getUserSign(page)
    expect(saved).toBe('metal-horse')
  })

  // ── 2. User sign persists across pages ────────────────────────────────────
  test('user sign persists when navigating across pages', async ({ page }) => {
    await calculateSign(page, 1990, 6, 15) // metal-horse

    // Navigate to another page
    await page.goto('/zodiac')
    await waitForApp(page)

    const saved = await getUserSign(page)
    expect(saved).toBe('metal-horse')
  })

  // ── 3. User sign survives page refresh ────────────────────────────────────
  test('user sign survives a full page refresh', async ({ page }) => {
    await calculateSign(page, 1990, 6, 15) // metal-horse

    await page.reload()
    await waitForApp(page)

    const saved = await getUserSign(page)
    expect(saved).toBe('metal-horse')
  })

  // ── 4. Clear localStorage removes personalization ──────────────────────────
  test('clearing localStorage removes the personalized welcome on homepage', async ({ page }) => {
    // Set a sign first
    await setUserSign(page, 'fire-horse')
    await page.goto('/')
    await waitForApp(page)
    await expect(page.locator('text=Welcome back')).toBeVisible()

    // Clear and reload
    await clearAllStorage(page)
    await page.reload()
    await waitForApp(page)

    await expect(page.locator('text=Welcome back')).not.toBeVisible()
  })

  // ── 5. Invalid stored slug handled gracefully ──────────────────────────────
  test('invalid slug in localStorage does not crash the app', async ({ page }) => {
    await page.goto('/')
    // Inject garbage into localStorage before navigating the SPA
    await page.evaluate(() => localStorage.setItem('wuxing_user_sign', 'fire-unicorn-garbage'))
    await page.reload()
    await waitForApp(page)

    // The app must not crash; homepage must still render
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page.locator('h1').first()).toContainText(/wu xing zodiac/i)

    // Personalized section should NOT appear for an invalid slug
    await expect(page.locator('text=Welcome back')).not.toBeVisible()
  })

  // ── 6. My Sign nav link updates after recalculation ───────────────────────
  test('NavBar My Sign link updates after recalculating a different sign', async ({ page }) => {
    // Set an initial sign
    await setUserSign(page, 'fire-horse')
    await page.goto('/')
    await waitForApp(page)

    // Recalculate with a different date → earth-dragon (1988)
    await calculateSign(page, 1988, 7, 1)

    // Navigate home and check NavBar now references earth-dragon
    await page.goto('/')
    await waitForApp(page)

    // The nav should show a "My Sign" link pointing to earth-dragon
    const mySignLink = page.locator('a[href="/zodiac/earth-dragon"]')
    // It may be in the NavBar or the personalized section
    await expect(mySignLink.first()).toBeVisible()
  })

  // ── 7. Sign available in compatibility (pre-fill) ─────────────────────────
  test('saved sign is pre-filled in compatibility picker', async ({ page }) => {
    await setUserSign(page, 'fire-horse')
    await page.goto('/compatibility')
    await waitForApp(page)

    // The first select in the compatibility picker should pre-select fire-horse
    const firstSelect = page.locator('select').nth(0)
    const selectedValue = await firstSelect.inputValue()
    expect(selectedValue).toBe('fire-horse')
  })

  // ── 8. Sign persists to shop personalization ───────────────────────────────
  test('saved sign is used for shop personalisation', async ({ page }) => {
    await setUserSign(page, 'fire-horse')
    await page.goto('/shop')
    await waitForApp(page)

    // Shop page should reference the fire element or fire-horse
    const bodyText = (await page.locator('body').textContent()) ?? ''
    const mentionsFire = /fire|火/i.test(bodyText)
    expect(mentionsFire, 'Shop should personalise for the fire element').toBe(true)
  })
})
