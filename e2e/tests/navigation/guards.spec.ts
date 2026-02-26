import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

/**
 * Route guard tests — verify the router's beforeEnter guards enforce
 * valid slugs, canonical URL order, and case sensitivity correctly.
 * 15 tests.
 */

test.describe('Route guards', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ─── Invalid sign slugs → 404 ────────────────────────────────────────────────

  test('1. /zodiac/fire-unicorn — invalid animal → 404 page', async ({ page }) => {
    await page.goto('/zodiac/fire-unicorn')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  test('2. /zodiac/fire-cat — invalid animal → 404 page', async ({ page }) => {
    await page.goto('/zodiac/fire-cat')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  test('3. /zodiac/lightning-horse — invalid element → 404 page', async ({ page }) => {
    await page.goto('/zodiac/lightning-horse')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  test('4. /zodiac/invalid-slug — completely invalid slug → 404 page', async ({ page }) => {
    await page.goto('/zodiac/invalid-slug')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  // ─── Invalid animal page → 404 ───────────────────────────────────────────────

  test('5. /zodiac/animal/unicorn — invalid animal parameter → 404 page', async ({ page }) => {
    await page.goto('/zodiac/animal/unicorn')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  test('6. /zodiac/animal/cat — invalid animal parameter → 404 page', async ({ page }) => {
    await page.goto('/zodiac/animal/cat')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  // ─── Invalid element page → 404 ──────────────────────────────────────────────

  test('7. /zodiac/element/lightning — invalid element → 404 page', async ({ page }) => {
    await page.goto('/zodiac/element/lightning')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  test('8. /zodiac/element/spirit — invalid element → 404 page', async ({ page }) => {
    await page.goto('/zodiac/element/spirit')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  // ─── Compatibility canonical redirect ─────────────────────────────────────────

  test('9. /compatibility/water-rat/earth-dog — non-alphabetical → redirects to /compatibility/earth-dog/water-rat', async ({ page }) => {
    // water-rat > earth-dog alphabetically, so guard redirects to earth-dog/water-rat
    await page.goto('/compatibility/water-rat/earth-dog')
    await waitForApp(page)

    await expect(page).toHaveURL('/compatibility/earth-dog/water-rat')
  })

  test('10. /compatibility/fire-horse/earth-dragon — non-alphabetical → redirects to /compatibility/earth-dragon/fire-horse', async ({ page }) => {
    // fire-horse > earth-dragon alphabetically, so guard redirects
    await page.goto('/compatibility/fire-horse/earth-dragon')
    await waitForApp(page)

    await expect(page).toHaveURL('/compatibility/earth-dragon/fire-horse')
  })

  // ─── Compatibility invalid slugs → 404 ───────────────────────────────────────

  test('11. /compatibility/fire-unicorn/earth-dragon — invalid slug A → 404', async ({ page }) => {
    await page.goto('/compatibility/fire-unicorn/earth-dragon')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  test('12. /compatibility/fire-horse/earth-unicorn — invalid slug B → 404', async ({ page }) => {
    await page.goto('/compatibility/fire-horse/earth-unicorn')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  // ─── Result route guard ───────────────────────────────────────────────────────

  test('13. /result/fire-unicorn — invalid sign → 404 page', async ({ page }) => {
    await page.goto('/result/fire-unicorn')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })

  // ─── Same-sign compatibility is valid ─────────────────────────────────────────

  test('14. /compatibility/fire-horse/fire-horse — same sign is valid (no redirect)', async ({ page }) => {
    // fire-horse === fire-horse: alphabetical check doesn't trigger (neither is greater),
    // and both slugs are valid, so the page renders (the picker may disable same-sign
    // submission but the URL itself is not guarded against it)
    await page.goto('/compatibility/fire-horse/fire-horse')
    await waitForApp(page)

    // Guard allows this URL through — CompatibilityPage renders
    await expect(page).toHaveURL('/compatibility/fire-horse/fire-horse')
    await expect(page.locator('h1')).not.toContainText('404')
  })

  // ─── Case sensitivity ────────────────────────────────────────────────────────

  test('15. /zodiac/Fire-Horse — wrong case → 404 (slugs are case-sensitive)', async ({ page }) => {
    await page.goto('/zodiac/Fire-Horse')
    await waitForApp(page)

    // Router validates against lowercase slugs only, so capitalized slug → not found
    await expect(page.locator('h1')).toContainText('404')
  })
})
