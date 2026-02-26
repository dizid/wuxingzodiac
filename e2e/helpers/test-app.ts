// Shared test utilities for the wuxingzodiac E2E suite
import type { Page } from '@playwright/test'
import { mockAllApis } from './api-mocks'

// Wait for Vue app to hydrate after navigation
export async function waitForApp(page: Page) {
  await page.waitForSelector('#app', { state: 'attached' })
  // Wait for Vue to hydrate the DOM
  await page.waitForFunction(() => {
    const app = document.querySelector('#app')
    return app && app.children.length > 0
  })
}

// Navigate and wait for hydration, with all APIs mocked
export async function gotoWithMocks(page: Page, path: string) {
  await mockAllApis(page)
  await page.goto(path)
  await waitForApp(page)
}

// Navigate without mocking (for static pages that don't need API mocks)
export async function goto(page: Page, path: string) {
  await page.goto(path)
  await waitForApp(page)
}

// Wait for navigation to complete after a click
export async function clickAndWaitForNavigation(page: Page, selector: string) {
  await Promise.all([
    page.waitForURL('**'),
    page.click(selector),
  ])
  await waitForApp(page)
}

// Get text content safely
export async function getTextContent(page: Page, selector: string): Promise<string> {
  const el = page.locator(selector)
  return (await el.textContent()) ?? ''
}

// Count matching elements
export async function countElements(page: Page, selector: string): Promise<number> {
  return page.locator(selector).count()
}
