// Element theme assertion helpers
import type { Page } from '@playwright/test'
import { expect } from '@playwright/test'

export type ZodiacElement = 'wood' | 'fire' | 'earth' | 'metal' | 'water'

// Check if the data-element attribute is set on the <html> element
export async function getActiveElement(page: Page): Promise<string | null> {
  return page.getAttribute('html', 'data-element')
}

// Assert a specific element theme is active
export async function assertElementTheme(page: Page, element: ZodiacElement) {
  const active = await getActiveElement(page)
  expect(active).toBe(element)
}

// Assert no element theme is active (e.g., on homepage)
export async function assertNoElementTheme(page: Page) {
  const active = await getActiveElement(page)
  expect(active).toBeNull()
}

// Get a CSS custom property value
export async function getCssVar(page: Page, varName: string): Promise<string> {
  return page.evaluate((name) => {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  }, varName)
}
