import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Wu Xing cycle tests.
 * Verifies generating (sheng) and destructive (ke) cycle relationships
 * are surfaced correctly on sign pages and compatibility pages.
 *
 * Generating cycle: Wood → Fire → Earth → Metal → Water → Wood
 * Destructive cycle: Wood → Earth → Water → Fire → Metal → Wood
 */

test.describe('Wu Xing cycles', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Fire sign diagram shows generating relationship (Fire → Earth) ─────
  test('fire sign page shows generating relationship — Fire feeds Earth', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // The generating (sheng) cycle diagram or text should reference Earth
    // as the element that Fire produces / generates
    await expect(page.locator('body')).toContainText(/earth/i)

    // Look for explicit generating / feeds / produces language on the page
    const bodyText = (await page.locator('body').textContent()) ?? ''
    const hasGeneratingRef = /generat|feeds|produces|nourish|sheng/i.test(bodyText)
    expect(hasGeneratingRef, 'Fire sign page should mention the generating relationship').toBe(true)
  })

  // ── 2. Destructive relationship indicated on sign page ────────────────────
  test('fire sign page indicates destructive relationship', async ({ page }) => {
    await page.goto('/zodiac/fire-horse')
    await waitForApp(page)

    // Fire is controlled by Water (Water destroys Fire in the ke cycle)
    // The page should reference the element that controls or clashes with Fire
    const bodyText = (await page.locator('body').textContent()) ?? ''
    const hasDestructiveRef = /destruct|controls|overcomes|clash|ke cycle|water/i.test(bodyText)
    expect(hasDestructiveRef, 'Fire sign page should reference the destructive cycle').toBe(true)
  })

  // ── 3. Same-element compatibility mentions "same element" ─────────────────
  test('same-element compatibility page mentions "same element"', async ({ page }) => {
    // fire-rat + fire-dragon — both Fire elements
    await page.goto('/compatibility/fire-dragon/fire-rat')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/same element/i)
  })

  // ── 4. Generating pair mentions supportive / nurturing language ───────────
  test('generating pair compatibility mentions supportive or nurturing relationship', async ({ page }) => {
    // Wood → Fire generating pair: wood-rat + fire-dragon
    await page.goto('/compatibility/fire-dragon/wood-rat')
    await waitForApp(page)

    const bodyText = (await page.locator('body').textContent()) ?? ''
    const hasSupport = /support|nurtur|generat|feed|harmonious|sheng/i.test(bodyText)
    expect(hasSupport, 'Generating pair should mention nurturing / supportive relationship').toBe(true)
  })

  // ── 5. Destructive pair mentions challenging language ─────────────────────
  test('destructive pair compatibility mentions challenging relationship', async ({ page }) => {
    // Fire → Metal destructive pair: fire-horse + metal-monkey
    await page.goto('/compatibility/fire-horse/metal-monkey')
    await waitForApp(page)

    const bodyText = (await page.locator('body').textContent()) ?? ''
    const hasChallenging = /challeng|destruct|clash|tension|conflict|difficult/i.test(bodyText)
    expect(hasChallenging, 'Destructive pair should mention challenging / difficult dynamics').toBe(true)
  })

  // ── 6. Remedy section mentions bridging element for high-friction pairs ────
  test('high-friction compatibility page mentions a bridging or remedy element', async ({ page }) => {
    // fire-horse + metal-monkey: Fire destroys Metal — high friction
    await page.goto('/compatibility/fire-horse/metal-monkey')
    await waitForApp(page)

    const bodyText = (await page.locator('body').textContent()) ?? ''
    // The bridging element between Fire and Metal is Earth (Fire→Earth→Metal)
    // Or the page may simply offer tips / remedies / advice
    const hasBridging = /earth|bridge|remedy|tip|advice|balance|mediat/i.test(bodyText)
    expect(hasBridging, 'High-friction pair page should mention a bridging element or remedy').toBe(true)
  })
})
