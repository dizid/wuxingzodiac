import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import {
  getAllSlugs,
  sampleSigns,
  allElements,
  allAnimals,
} from '../../fixtures/sign-profiles'

/**
 * Data integrity tests for sign profiles.
 * Verifies all 60 sign pages exist and data is consistent.
 */

test.describe('Sign profiles — data integrity', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. All 60 sign pages exist ────────────────────────────────────────────
  test(
    'all 60 sign pages exist and load the sign name',
    { tag: '@slow' },
    async ({ page }) => {
      const slugs = getAllSlugs()
      expect(slugs).toHaveLength(60)

      for (const slug of slugs) {
        await page.goto(`/zodiac/${slug}`)
        await waitForApp(page)

        // Page must NOT redirect to 404
        expect(page.url()).toContain(`/zodiac/${slug}`)

        // The sign name (capitalised slug words) must be visible somewhere
        const [element, animal] = slug.split('-')
        const signName = `${element.charAt(0).toUpperCase() + element.slice(1)} ${animal.charAt(0).toUpperCase() + animal.slice(1)}`
        await expect(page.locator('body')).toContainText(signName, { ignoreCase: true })
      }
    },
  )

  // ── 2. All 60 result pages exist ──────────────────────────────────────────
  test('all 60 result pages exist and load', async ({ page }) => {
    const slugs = getAllSlugs()
    expect(slugs).toHaveLength(60)

    for (const slug of slugs) {
      await page.goto(`/result/${slug}`)
      await waitForApp(page)

      // Must not redirect to 404
      expect(page.url()).toContain(`/result/${slug}`)
      await expect(page.locator('body')).toBeVisible()
    }
  })

  // ── 3. Profile data completeness for 5 sample signs ───────────────────────
  test('five sample signs (one per element) show name, Chinese name, and tagline', async ({ page }) => {
    for (const sign of sampleSigns) {
      await page.goto(`/zodiac/${sign.slug}`)
      await waitForApp(page)

      // English name visible
      await expect(page.locator('body')).toContainText(sign.name)

      // Chinese name visible (rendered as text somewhere on page)
      await expect(page.locator('body')).toContainText(sign.chineseName)

      // Tagline visible
      await expect(page.locator('body')).toContainText(sign.tagline)
    }
  })

  // ── 4. All slugs follow {element}-{animal} format ─────────────────────────
  test('all 60 slugs follow the {element}-{animal} format', async () => {
    const slugs = getAllSlugs()
    const elementSet = new Set<string>(allElements)
    const animalSet = new Set<string>(allAnimals)
    const slugPattern = /^[a-z]+-[a-z]+$/

    for (const slug of slugs) {
      // Must match kebab-case pattern
      expect(slug).toMatch(slugPattern)

      const parts = slug.split('-')
      expect(parts).toHaveLength(2)

      const [element, animal] = parts
      expect(elementSet.has(element), `"${element}" is not a valid element`).toBe(true)
      expect(animalSet.has(animal), `"${animal}" is not a valid animal`).toBe(true)
    }

    // Verify the Cartesian product count: 5 * 12 = 60
    expect(slugs).toHaveLength(allElements.length * allAnimals.length)
  })

  // ── 5. Year ranges shown on sign pages are valid ──────────────────────────
  test('year ranges on sign pages are valid numbers within expected bounds', async ({ page }) => {
    // Check a representative set: one per element
    for (const sign of sampleSigns) {
      await page.goto(`/zodiac/${sign.slug}`)
      await waitForApp(page)

      // Extract all 4-digit numbers from the page that look like years
      const yearNumbers = await page.evaluate(() => {
        const text = document.body.innerText
        const matches = text.match(/\b(19\d{2}|20[0-4]\d)\b/g)
        return matches ? matches.map(Number) : []
      })

      // At least one year should be present on the sign page
      expect(yearNumbers.length).toBeGreaterThan(0)

      // All detected years must be within the expected zodiac range (1924–2043)
      for (const year of yearNumbers) {
        expect(year).toBeGreaterThanOrEqual(1924)
        expect(year).toBeLessThanOrEqual(2043)
      }
    }
  })
})
