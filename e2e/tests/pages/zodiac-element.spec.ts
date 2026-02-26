import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { assertElementTheme } from '../../helpers/theme'

const ALL_ELEMENTS = ['wood', 'fire', 'earth', 'metal', 'water'] as const

const ALL_ANIMALS = [
  'rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake',
  'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig',
] as const

test.describe('ZodiacElementPage', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
  })

  // ── 1. Page title includes element name ──────────────────────────────────
  test('page title includes element name for /zodiac/element/fire', async ({ page }) => {
    await page.goto('/zodiac/element/fire')
    await waitForApp(page)

    const title = await page.title()
    expect(title.toLowerCase()).toContain('fire')
  })

  // ── 2. All 12 animals are shown for the element ──────────────────────────
  test('all 12 animal variants are shown for the fire element', async ({ page }) => {
    await page.goto('/zodiac/element/fire')
    await waitForApp(page)

    for (const animal of ALL_ANIMALS) {
      const animalName = animal.charAt(0).toUpperCase() + animal.slice(1)
      await expect(page.locator('body')).toContainText(`Fire ${animalName}`)
    }
  })

  // ── 3. Each animal card links to its sign page ───────────────────────────
  test('each animal card links to the corresponding sign page for fire element', async ({ page }) => {
    await page.goto('/zodiac/element/fire')
    await waitForApp(page)

    for (const animal of ALL_ANIMALS) {
      const link = page.locator(`a[href="/zodiac/fire-${animal}"]`)
      await expect(link).toBeVisible()
    }
  })

  // ── 4. data-element attribute is applied on the page wrapper ────────────
  test('data-element attribute matching the element is present on the page', async ({ page }) => {
    await page.goto('/zodiac/element/fire')
    await waitForApp(page)

    // The page wrapper has :data-element="element"
    const wrapper = page.locator('[data-element="fire"]').first()
    await expect(wrapper).toBeVisible()
  })

  // ── 5. All 5 element pages load without error ────────────────────────────
  for (const element of ALL_ELEMENTS) {
    test(`/zodiac/element/${element} loads and shows the element heading`, async ({ page }) => {
      await page.goto(`/zodiac/element/${element}`)
      await waitForApp(page)

      const elementName = element.charAt(0).toUpperCase() + element.slice(1)
      const heading = page.locator('h1')
      await expect(heading).toBeVisible()
      await expect(heading).toContainText(`${elementName} Element`)
    })
  }

  // ── 6. Invalid element slug shows 404 ────────────────────────────────────
  test('invalid element slug shows 404 page', async ({ page }) => {
    await page.goto('/zodiac/element/aether')
    await waitForApp(page)

    await expect(page.locator('h1')).toContainText('404')
  })
})
