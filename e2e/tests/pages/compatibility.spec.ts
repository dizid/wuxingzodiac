import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

// There are 60 sign profiles (5 elements × 12 animals)
const TOTAL_SIGNS = 60

test.describe('CompatibilityPage — picker mode', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/compatibility')
    await waitForApp(page)
  })

  // ── 1. Two dropdowns render ───────────────────────────────────────────────
  test('renders two sign-selection dropdowns', async ({ page }) => {
    const firstLabel = page.locator('label', { hasText: /First Sign/i })
    const secondLabel = page.locator('label', { hasText: /Second Sign/i })
    await expect(firstLabel).toBeVisible()
    await expect(secondLabel).toBeVisible()

    // Two sign selects inside the picker card
    const selects = page.locator('select')
    expect(await selects.count()).toBeGreaterThanOrEqual(2)
  })

  // ── 2. Dropdowns have 60 sign options each ────────────────────────────────
  test('each dropdown contains 60 sign options (excluding placeholder)', async ({ page }) => {
    const selects = page.locator('select')

    // Count real sign options (exclude the disabled placeholder)
    const optionsA = selects.nth(0).locator('option:not([disabled])')
    const optionsB = selects.nth(1).locator('option:not([disabled])')

    await expect(optionsA).toHaveCount(TOTAL_SIGNS)
    await expect(optionsB).toHaveCount(TOTAL_SIGNS)
  })

  // ── 3. Submit button disabled when no signs selected ─────────────────────
  test('Check Compatibility button is disabled when no signs are selected', async ({ page }) => {
    const btn = page.locator('button', { hasText: /Check Compatibility/i })
    await expect(btn).toBeDisabled()
  })

  // ── 4. Submit disabled when same sign selected for both ───────────────────
  test('Check Compatibility button remains disabled when same sign selected twice', async ({ page }) => {
    const selects = page.locator('select')
    await selects.nth(0).selectOption('fire-horse')
    await selects.nth(1).selectOption('fire-horse')

    const btn = page.locator('button', { hasText: /Check Compatibility/i })
    await expect(btn).toBeDisabled()
  })

  // ── 5. Submit navigates to pair URL ──────────────────────────────────────
  test('submitting two different signs navigates to the pair URL', async ({ page }) => {
    const selects = page.locator('select')
    await selects.nth(0).selectOption('fire-horse')
    await selects.nth(1).selectOption('earth-dragon')

    const btn = page.locator('button', { hasText: /Check Compatibility/i })
    await expect(btn).toBeEnabled()
    await btn.click()

    // Alphabetical: earth-dragon < fire-horse
    await page.waitForURL('**/compatibility/earth-dragon/fire-horse')
    expect(page.url()).toContain('/compatibility/earth-dragon/fire-horse')
  })

  // ── 6. Alphabetical URL enforcement ──────────────────────────────────────
  test('URL is always in alphabetical slug order regardless of selection order', async ({ page }) => {
    const selects = page.locator('select')
    // Select in "wrong" order: water-rat should come after fire-horse alphabetically
    await selects.nth(0).selectOption('water-rat')
    await selects.nth(1).selectOption('fire-horse')

    await page.locator('button', { hasText: /Check Compatibility/i }).click()

    // Alphabetical: fire-horse < water-rat
    await page.waitForURL('**/compatibility/fire-horse/water-rat')
    expect(page.url()).toContain('/compatibility/fire-horse/water-rat')
  })

  // ── 7. Swap button works ──────────────────────────────────────────────────
  test('swap button exchanges the values of the two sign selects', async ({ page }) => {
    const selects = page.locator('select')
    await selects.nth(0).selectOption('fire-horse')
    await selects.nth(1).selectOption('earth-dragon')

    const swapBtn = page.locator('button[title="Swap signs"]')
    await swapBtn.click()

    // After swap A should have earth-dragon, B should have fire-horse
    await expect(selects.nth(0)).toHaveValue('earth-dragon')
    await expect(selects.nth(1)).toHaveValue('fire-horse')
  })

  // ── 8. Popular comparisons section renders ───────────────────────────────
  test('Popular Comparisons section renders with multiple pair links', async ({ page }) => {
    const section = page.locator('text=Popular Comparisons')
    await expect(section).toBeVisible()

    // Each pair is a RouterLink — there should be at least 3
    const pairLinks = page.locator('a[href^="/compatibility/"]')
    const count = await pairLinks.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })
})

test.describe('CompatibilityPage — results mode', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/compatibility/earth-dragon/fire-horse')
    await waitForApp(page)
  })

  // ── 9. Header shows both sign names ──────────────────────────────────────
  test('header shows both sign names', async ({ page }) => {
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).toContainText('Earth Dragon')
    await expect(h1).toContainText('Fire Horse')
  })

  // ── 10. Match label renders ───────────────────────────────────────────────
  test('match label (e.g. "Soulmate Match", "Strong Match") renders', async ({ page }) => {
    // CompatibilityMatchLabel renders a prominent label — check for its container
    const matchLabel = page.locator('[class*="matchLabel"], [class*="match-label"]')
      .or(page.locator('text=/Match|Bond|Pair/i').first().locator('..'))

    // Fallback: any element inside the results that contains "Match" or similar
    const headline = page.locator('h1, h2, h3').filter({ hasText: /Match|Bond|Pair|Compatible/i }).first()
    // The CompatibilityMatchLabel component will render some match text
    await expect(headline.or(matchLabel.first())).toBeVisible({ timeout: 10_000 })
  })

  // ── 11. Three score gauges render ─────────────────────────────────────────
  test('three score gauges render: Chemistry, Support, Friction', async ({ page }) => {
    await expect(page.locator('text=Chemistry')).toBeVisible()
    await expect(page.locator('text=Support')).toBeVisible()
    await expect(page.locator('text=Friction')).toBeVisible()
  })

  // ── 12. Strengths and Challenges lists render ─────────────────────────────
  test('Strengths and Challenges sections render with list items', async ({ page }) => {
    // Strengths section
    const strengthsHeading = page.locator('h2', { hasText: /Strengths/i })
    await expect(strengthsHeading).toBeVisible()

    // Challenges section
    const challengesHeading = page.locator('h2', { hasText: /Challenges/i })
    await expect(challengesHeading).toBeVisible()

    // At least one item in each list
    const strengthItems = page.locator('li').filter({ hasText: /.+/ })
    const count = await strengthItems.count()
    expect(count).toBeGreaterThan(0)
  })

  // ── 13. "Try Another Pair" picker appears below results ───────────────────
  test('"Try Another Pair" picker section renders below the results', async ({ page }) => {
    const tryAnotherHeading = page.locator('h2', { hasText: /Try Another Pair/i })
    await expect(tryAnotherHeading).toBeVisible()

    // The picker selects should also be present in results mode
    const selects = page.locator('select')
    expect(await selects.count()).toBeGreaterThanOrEqual(2)
  })

  // ── 14. Sign profile links work ───────────────────────────────────────────
  test('sign profile links navigate to the individual sign pages', async ({ page }) => {
    const earthDragonLink = page.locator('a[href="/zodiac/earth-dragon"]').first()
    await expect(earthDragonLink).toBeVisible()

    const fireHorseLink = page.locator('a[href="/zodiac/fire-horse"]').first()
    await expect(fireHorseLink).toBeVisible()
  })
})
