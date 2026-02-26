import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { clearAllStorage } from '../../helpers/storage'
import { assertElementTheme } from '../../helpers/theme'

test.describe('Discovery flow — Home → Element/Animal → Sign', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await clearAllStorage(page)
  })

  test('1. Home → Fire element card → Fire element page → Fire Horse sign page', async ({ page }) => {
    await goto(page, '/')

    // Click the Fire element card in "The Five Elements" section
    const fireCard = page.locator('[data-element="fire"]').filter({ has: page.locator('a[href="/zodiac/element/fire"]') }).first()
    await fireCard.click()
    await waitForApp(page)

    // Verify we're on the Fire element page
    await expect(page).toHaveURL('/zodiac/element/fire')
    await expect(page.locator('h1')).toContainText('Fire')

    // Click Fire Horse link on the element page
    const fireHorseLink = page.locator('a[href="/zodiac/fire-horse"]').first()
    await fireHorseLink.click()
    await waitForApp(page)

    // Verify we're on the Fire Horse sign page
    await expect(page).toHaveURL('/zodiac/fire-horse')
    await expect(page.locator('h1, [data-testid="sign-name"]')).toContainText(/Fire Horse/i)
    await assertElementTheme(page, 'fire')
  })

  test('2. Home → Horse animal card → Horse animal page → Fire Horse sign page', async ({ page }) => {
    await goto(page, '/')

    // Click the Horse animal card in "The Twelve Animals" section
    const horseLink = page.locator('a[href="/zodiac/animal/horse"]').first()
    await horseLink.click()
    await waitForApp(page)

    // Verify we're on the Horse animal page
    await expect(page).toHaveURL('/zodiac/animal/horse')
    await expect(page.locator('h1')).toContainText(/Horse/i)

    // Click Fire Horse link on the animal page
    const fireHorseLink = page.locator('a[href="/zodiac/fire-horse"]').first()
    await fireHorseLink.click()
    await waitForApp(page)

    // Verify we're on the Fire Horse sign page
    await expect(page).toHaveURL('/zodiac/fire-horse')
    await expect(page.locator('h1, [data-testid="sign-name"]')).toContainText(/Fire Horse/i)
  })

  test('3. Home → Browse All Signs → Directory page → Click card → Sign page', async ({ page }) => {
    await goto(page, '/')

    // Click "Browse All Signs" CTA
    const browseLink = page.locator('a[href="/zodiac"]').filter({ hasText: /browse all signs/i })
    await browseLink.click()
    await waitForApp(page)

    // Verify we're on the directory page
    await expect(page).toHaveURL('/zodiac')

    // Click any sign card in the grid — use Fire Horse as a known sign
    const signCard = page.locator('a[href="/zodiac/fire-horse"]').first()
    await signCard.click()
    await waitForApp(page)

    // Verify we're on a sign page
    await expect(page.url()).toContain('/zodiac/')
    await expect(page.locator('h1')).toBeVisible()
  })

  test('4. Home → Click "Find Your Sign" → Calculator page loads', async ({ page }) => {
    await goto(page, '/')

    // Click the "Find Your Sign" button in the hero
    const findSignLink = page.locator('a[href="/calculator"]').filter({ hasText: /find your sign/i }).first()
    await findSignLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/calculator')
    await expect(page.locator('h1')).toContainText(/What's My Sign/i)

    // Verify the form controls are present
    await expect(page.locator('select').first()).toBeVisible()
    await expect(page.locator('button', { hasText: /Find My Sign/i })).toBeVisible()
  })

  test('5. Home → Click "Check Compatibility" → Compatibility page loads', async ({ page }) => {
    await goto(page, '/')

    // Click the "Check Compatibility" link in the hero section
    const compatLink = page.locator('a[href="/compatibility"]').filter({ hasText: /check compatibility/i }).first()
    await compatLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/compatibility')
    await expect(page.locator('h1')).toContainText(/Compatibility/i)

    // Verify the picker selects are present
    await expect(page.locator('select').first()).toBeVisible()
  })

  test('6. Home → Click Fire Horse featured link → Fire Horse sign page', async ({ page }) => {
    await goto(page, '/')

    // Click the "Read About Fire Horse →" link inside the 2026 feature section
    const fireHorseLink = page.locator('a[href="/zodiac/fire-horse"]').filter({ hasText: /Fire Horse/i }).first()
    await fireHorseLink.click()
    await waitForApp(page)

    await expect(page).toHaveURL('/zodiac/fire-horse')
    await expect(page.locator('h1, [data-testid="sign-name"]')).toContainText(/Fire Horse/i)
    await assertElementTheme(page, 'fire')
  })
})
