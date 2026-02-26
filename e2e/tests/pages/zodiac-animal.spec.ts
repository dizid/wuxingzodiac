import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'

const ALL_ANIMALS = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
] as const

const ALL_ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const

test.describe('ZodiacAnimalPage', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Page title includes animal name ───────────────────────────────────
  test('page title includes animal name for /zodiac/animal/horse', async ({ page }) => {
    await page.goto('/zodiac/animal/horse')
    await waitForApp(page)

    const title = await page.title()
    expect(title.toLowerCase()).toContain('horse')
  })

  // ── 2. Five element variants are shown ───────────────────────────────────
  test('five element variants are shown for horse', async ({ page }) => {
    await page.goto('/zodiac/animal/horse')
    await waitForApp(page)

    // Expect all five element+horse sign names to appear on the page
    for (const element of ALL_ELEMENTS) {
      const elementName = element.charAt(0).toUpperCase() + element.slice(1)
      await expect(page.locator('body')).toContainText(`${elementName} Horse`)
    }
  })

  // ── 3. Each variant links to its sign page ───────────────────────────────
  test('each element variant card links to the corresponding sign page', async ({ page }) => {
    await page.goto('/zodiac/animal/horse')
    await waitForApp(page)

    for (const element of ALL_ELEMENTS) {
      const slug = `${element}-horse`
      const link = page.locator(`a[href="/zodiac/${slug}"]`)
      await expect(link).toBeVisible()
    }
  })

  // ── 4. Variant cards have correct data-element attribute ─────────────────
  test('variant cards carry data-element attributes for each element', async ({ page }) => {
    await page.goto('/zodiac/animal/horse')
    await waitForApp(page)

    for (const element of ALL_ELEMENTS) {
      const card = page.locator(`a[href="/zodiac/${element}-horse"]`)
      await expect(card).toHaveAttribute('data-element', element)
    }
  })

  // ── 5. All 12 animal pages load without error ────────────────────────────
  for (const animal of ALL_ANIMALS) {
    test(`/zodiac/animal/${animal} loads and shows the animal heading`, async ({ page }) => {
      await page.goto(`/zodiac/animal/${animal}`)
      await waitForApp(page)

      // h1 should contain the capitalised animal name
      const animalName = animal.charAt(0).toUpperCase() + animal.slice(1)
      const heading = page.locator('h1')
      await expect(heading).toBeVisible()
      await expect(heading).toContainText(animalName)
    })
  }

  // ── 6. Invalid animal slug shows 404 ─────────────────────────────────────
  test('invalid animal slug shows 404 page', async ({ page }) => {
    await page.goto('/zodiac/animal/phoenix')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })
})
