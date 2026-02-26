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
// MERCH CART
// ============================================

export interface CartItem {
  variantId: string
  quantity: number
  title: string
  price: number
  image?: string
}

export async function setCart(page: Page, items: CartItem[]) {
  await page.evaluate((data) => localStorage.setItem('wuxing_merch_cart', JSON.stringify(data)), items)
}

export async function getCart(page: Page): Promise<CartItem[]> {
  const raw = await page.evaluate(() => localStorage.getItem('wuxing_merch_cart'))
  return raw ? JSON.parse(raw) : []
}

export async function clearCart(page: Page) {
  await page.evaluate(() => localStorage.removeItem('wuxing_merch_cart'))
}

// ============================================
// CLEAR ALL
// ============================================

export async function clearAllStorage(page: Page) {
  await page.evaluate(() => localStorage.clear())
}
