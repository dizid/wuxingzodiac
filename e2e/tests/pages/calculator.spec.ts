import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

// Helper: fill in the three dropdowns and click Find My Sign
async function fillAndSubmit(
  page: Parameters<typeof waitForApp>[0],
  year: number,
  month: number,
  day: number,
) {
  // Year is index 0, Month is index 1, Day is index 2
  const selects = page.locator('select')
  await selects.nth(0).selectOption(String(year))
  await selects.nth(1).selectOption(String(month))
  await selects.nth(2).selectOption(String(day))
  await page.locator('button', { hasText: /Find My Sign/i }).click()
}

test.describe('CalculatorPage', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/calculator')
    await waitForApp(page)
  })

  // ── 1. Year dropdown range ────────────────────────────────────────────────
  test('year dropdown contains options from 1924 to 2043', async ({ page }) => {
    const yearSelect = page.locator('select').nth(0)

    // 2043 - 1924 + 1 = 120 years + 1 disabled placeholder
    const options = yearSelect.locator('option')
    const count = await options.count()
    expect(count).toBe(121) // 120 years + 1 placeholder "Year"

    // Verify range boundaries exist
    await expect(yearSelect.locator('option[value="1924"]')).toHaveCount(1)
    await expect(yearSelect.locator('option[value="2043"]')).toHaveCount(1)
  })

  // ── 2. Month dropdown has 12 months ──────────────────────────────────────
  test('month dropdown has 12 month options', async ({ page }) => {
    const monthSelect = page.locator('select').nth(1)
    const options = monthSelect.locator('option')
    // 12 months, no placeholder (defaults to January)
    await expect(options).toHaveCount(12)

    await expect(monthSelect.locator('option[value="1"]')).toContainText('January')
    await expect(monthSelect.locator('option[value="12"]')).toContainText('December')
  })

  // ── 3. Day dropdown adjusts to month ─────────────────────────────────────
  test('day dropdown shows 31 days for January', async ({ page }) => {
    const yearSelect = page.locator('select').nth(0)
    const monthSelect = page.locator('select').nth(1)
    const daySelect = page.locator('select').nth(2)

    await yearSelect.selectOption('2000')
    await monthSelect.selectOption('1') // January
    await expect(daySelect.locator('option')).toHaveCount(31)
  })

  test('day dropdown shows 30 days for April', async ({ page }) => {
    const yearSelect = page.locator('select').nth(0)
    const monthSelect = page.locator('select').nth(1)
    const daySelect = page.locator('select').nth(2)

    await yearSelect.selectOption('2000')
    await monthSelect.selectOption('4') // April
    await expect(daySelect.locator('option')).toHaveCount(30)
  })

  // ── 4. February leap year: 2024 has 29 days ──────────────────────────────
  test('February 2024 (leap year) shows 29 days', async ({ page }) => {
    const yearSelect = page.locator('select').nth(0)
    const monthSelect = page.locator('select').nth(1)
    const daySelect = page.locator('select').nth(2)

    await yearSelect.selectOption('2024')
    await monthSelect.selectOption('2') // February
    await expect(daySelect.locator('option')).toHaveCount(29)
  })

  // ── 5. February non-leap year: 2023 has 28 days ──────────────────────────
  test('February 2023 (non-leap year) shows 28 days', async ({ page }) => {
    const yearSelect = page.locator('select').nth(0)
    const monthSelect = page.locator('select').nth(1)
    const daySelect = page.locator('select').nth(2)

    await yearSelect.selectOption('2023')
    await monthSelect.selectOption('2') // February
    await expect(daySelect.locator('option')).toHaveCount(28)
  })

  // ── 6. Button disabled/enabled states ────────────────────────────────────
  test('Find My Sign button is disabled until a year is selected', async ({ page }) => {
    const btn = page.locator('button', { hasText: /Find My Sign/i })
    await expect(btn).toBeDisabled()

    // Select a year → button should enable
    await page.locator('select').nth(0).selectOption('1990')
    await expect(btn).toBeEnabled()
  })

  // ── 7. Basic calculation: 1990/June/15 → Metal Horse ────────────────────
  test('calculates Metal Horse for June 15, 1990', async ({ page }) => {
    await fillAndSubmit(page, 1990, 6, 15)

    // Result card should appear
    await expect(page.locator('text=Metal Horse')).toBeVisible()
  })

  // ── 8. Lunar boundary: 1990/Jan/26 → Earth Snake (before Lunar New Year) ─
  test('calculates Earth Snake for January 26, 1990 (before Lunar New Year)', async ({ page }) => {
    // Lunar New Year 1990 was January 27 — Jan 26 is still Earth Snake year
    await fillAndSubmit(page, 1990, 1, 26)
    await expect(page.locator('text=Earth Snake')).toBeVisible()
  })

  // ── 9. Lunar boundary: 1990/Jan/27 → Metal Horse (on/after Lunar New Year) ─
  test('calculates Metal Horse for January 27, 1990 (on Lunar New Year)', async ({ page }) => {
    // January 27, 1990 is the first day of the Metal Horse year
    await fillAndSubmit(page, 1990, 1, 27)
    await expect(page.locator('text=Metal Horse')).toBeVisible()
  })

  // ── 10. Result card shows sign info ──────────────────────────────────────
  test('result card shows sign name, Chinese name, tagline, and years', async ({ page }) => {
    await fillAndSubmit(page, 1990, 6, 15)

    // Sign name heading
    await expect(page.locator('h2', { hasText: /Metal Horse/ })).toBeVisible()

    // Chinese name
    await expect(page.locator('text=庚午')).toBeVisible()

    // Tagline — whatever the actual tagline is, ensure the italic text is present
    const tagline = page.locator('div.italic')
    await expect(tagline.first()).toBeVisible()

    // Years section
    await expect(page.locator('text=1990')).toBeVisible()
  })

  // ── 11. CTA links work after calculation ─────────────────────────────────
  test('View Full Profile and Check Compatibility CTAs appear after calculation', async ({ page }) => {
    await fillAndSubmit(page, 1990, 6, 15)

    const profileLink = page.locator('a[href="/zodiac/metal-horse"]')
    await expect(profileLink).toBeVisible()
    await expect(profileLink).toContainText('View Full Profile')

    const compatLink = page.locator('a[href*="/compatibility?sign=metal-horse"]')
    await expect(compatLink).toBeVisible()
    await expect(compatLink).toContainText('Check Compatibility')
  })

  // ── 12. User sign saved to localStorage after calculation ─────────────────
  test('saves user sign to localStorage after calculating', async ({ page }) => {
    await fillAndSubmit(page, 1990, 6, 15)

    const saved = await page.evaluate(() => localStorage.getItem('wuxing_user_sign'))
    expect(saved).toBe('metal-horse')
  })

  // ── Bonus: Element Pentagon Chart renders in result ────────────────────────
  test('Element Pentagon Chart renders after a successful calculation', async ({ page }) => {
    await fillAndSubmit(page, 1990, 6, 15)

    // ElementPentagonChart renders an SVG
    const chart = page.locator('svg').first()
    await expect(chart).toBeVisible()
  })
})
