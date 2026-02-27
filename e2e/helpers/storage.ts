// localStorage helpers for user sign and cart persistence
import type { Page } from '@playwright/test'

// ============================================
// USER SIGN
// ============================================

export async function setUserSign(page: Page, slug: string) {
  await page.evaluate((s) => localStorage.setItem('wuxing_user_sign', s), slug)
}

export async function getUserSign(page: Page): Promise<string | null> {
  return page.evaluate(() => localStorage.getItem('wuxing_user_sign'))
}

export async function clearUserSign(page: Page) {
  await page.evaluate(() => localStorage.removeItem('wuxing_user_sign'))
}

// ============================================
// CLEAR ALL
// ============================================

export async function clearAllStorage(page: Page) {
  await page.evaluate(() => localStorage.clear())
}
