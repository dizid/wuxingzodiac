import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import {
  zodiacCalculationTests,
  allAnimalsTests,
} from '../../fixtures/zodiac-calculations'

/**
 * Calculator accuracy tests.
 * Covers 17 birth date cases plus all-12-animals reachability.
 */

// Helper: fill the calculator dropdowns and click Find My Sign
async function fillAndSubmit(
  page: Parameters<typeof waitForApp>[0],
  year: number,
  month: number,
  day: number,
) {
  const selects = page.locator('select')
  await selects.nth(0).selectOption(String(year))
  await selects.nth(1).selectOption(String(month))
  await selects.nth(2).selectOption(String(day))
  await page.locator('button', { hasText: /Find My Sign/i }).click()
}

test.describe('Zodiac calculation accuracy', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await page.goto('/calculator')
    await waitForApp(page)
  })

  // ── Parameterised: 17 birth date → expected sign cases ───────────────────
  for (const tc of zodiacCalculationTests) {
    test(`calculates ${tc.expectedSlug} — ${tc.description}`, async ({ page }) => {
      await fillAndSubmit(page, tc.year, tc.month, tc.day)

      // The expected sign name (e.g. "Fire Horse") must be visible in the result card
      const elementName = tc.expectedElement.charAt(0).toUpperCase() + tc.expectedElement.slice(1)
      const animalName = tc.expectedAnimal.charAt(0).toUpperCase() + tc.expectedAnimal.slice(1)
      const expectedSignName = `${elementName} ${animalName}`

      await expect(page.locator('body')).toContainText(expectedSignName)

      // localStorage must also be updated with the correct slug
      const saved = await page.evaluate(() => localStorage.getItem('wuxing_user_sign'))
      expect(saved).toBe(tc.expectedSlug)
    })
  }

  // ── All 12 animals reachable via calculation ──────────────────────────────
  test.describe('All 12 animals are reachable via the calculator', () => {
    for (const tc of allAnimalsTests) {
      test(`animal: ${tc.expectedAnimal} (year ${tc.year})`, async ({ page }) => {
        await fillAndSubmit(page, tc.year, tc.month, tc.day)

        const animalName = tc.expectedAnimal.charAt(0).toUpperCase() + tc.expectedAnimal.slice(1)
        await expect(page.locator('body')).toContainText(animalName)
      })
    }
  })
})
