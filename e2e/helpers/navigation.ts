// Common navigation helpers
import type { Page } from '@playwright/test'
import { waitForApp } from './test-app'

// Navigate to a specific zodiac sign page
export async function gotoSign(page: Page, slug: string) {
  await page.goto(`/zodiac/${slug}`)
  await waitForApp(page)
}

// Navigate to a compatibility pair
export async function gotoCompatibility(page: Page, slugA: string, slugB: string) {
  // Ensure alphabetical order
  const [a, b] = [slugA, slugB].sort()
  await page.goto(`/compatibility/${a}/${b}`)
  await waitForApp(page)
}

// Navigate to calculator and calculate a sign
export async function calculateSign(page: Page, year: number, month: number, day: number) {
  await page.goto('/calculator')
  await waitForApp(page)

  // Use locator-based approach to find select elements
  const selects = page.locator('select')
  await selects.nth(0).selectOption(String(year))
  await selects.nth(1).selectOption(String(month))
  await selects.nth(2).selectOption(String(day))

  await page.locator('button', { hasText: /find/i }).click()
}

// Get all nav link hrefs using locator API
export async function getNavLinks(page: Page): Promise<string[]> {
  const links = page.locator('nav a[href]')
  const count = await links.count()
  const hrefs: string[] = []
  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href')
    if (href) hrefs.push(href)
  }
  return hrefs
}
