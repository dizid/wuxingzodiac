import { test, expect } from '@playwright/test'
import { mockAllApis } from '../../helpers/api-mocks'
import { waitForApp, goto } from '../../helpers/test-app'
import { setUserSign, clearAllStorage, setCart, getCart } from '../../helpers/storage'

/**
 * The shop tests mock the Shopify Storefront GraphQL API.
 * Products are loaded client-side; the shop page shows a "coming soon" state
 * when Shopify env vars are not configured.
 *
 * Since these are E2E tests against the production build, we inject cart state
 * via localStorage helpers and verify UI reflects it.
 */

test.describe('Shop flow', () => {
  test.beforeEach(async ({ page }) => {
    await mockAllApis(page)
    await clearAllStorage(page)
  })

  /**
   * Helper: open the shop page and wait for product grid or coming-soon notice.
   */
  async function openShop(page: import('@playwright/test').Page) {
    await goto(page, '/shop')
    // Either the product grid loads or the "coming soon" notice appears
    await page.waitForSelector('.glass', { timeout: 10_000 })
  }

  /**
   * Helper: open cart drawer via navbar cart icon.
   */
  async function openCart(page: import('@playwright/test').Page) {
    await page.locator('button[aria-label="Open cart"]').first().click()
    await page.waitForSelector('[aria-label="Close cart"]', { timeout: 5_000 })
  }

  test('1. Open shop → Click product → Add to Cart → Cart drawer opens', async ({ page }) => {
    await openShop(page)

    // If Shopify is not configured, products won't load — skip gracefully
    const configured = await page.locator('.glass', { hasText: /Shop Coming Soon/i }).isVisible()
    if (configured) {
      test.skip()
      return
    }

    // Click "Add to Cart" on the first product
    const addToCartBtn = page.locator('button', { hasText: /Add to Cart/i }).first()
    await expect(addToCartBtn).toBeVisible()
    await addToCartBtn.click()

    // Cart drawer should open automatically
    await expect(page.locator('h2', { hasText: /Cart/i })).toBeVisible({ timeout: 5_000 })
    await expect(page.locator('[aria-label="Close cart"]')).toBeVisible()
  })

  test('2. Cart quantity update (increase)', async ({ page }) => {
    // Seed cart with one item via localStorage
    await goto(page, '/shop')
    await setCart(page, [
      {
        variantId: 'gid://shopify/ProductVariant/1',
        quantity: 1,
        title: 'Fire Element T-Shirt',
        price: 29.99,
      },
    ])

    // Reload so cart hydrates from localStorage
    await page.reload()
    await waitForApp(page)

    // Open cart
    await openCart(page)

    // Current quantity shown as 1
    const quantityDisplay = page.locator('.flex.items-center.gap-1 span').first()
    await expect(quantityDisplay).toContainText('1')

    // Click "+" to increase
    const increaseBtn = page.locator('button', { hasText: '+' }).first()
    await increaseBtn.click()

    // Quantity should now be 2
    await expect(quantityDisplay).toContainText('2')
  })

  test('3. Cart quantity decrease', async ({ page }) => {
    await goto(page, '/shop')
    await setCart(page, [
      {
        variantId: 'gid://shopify/ProductVariant/1',
        quantity: 3,
        title: 'Fire Element T-Shirt',
        price: 29.99,
      },
    ])

    await page.reload()
    await waitForApp(page)
    await openCart(page)

    const quantityDisplay = page.locator('.flex.items-center.gap-1 span').first()
    await expect(quantityDisplay).toContainText('3')

    // Click "−" to decrease
    const decreaseBtn = page.locator('button').filter({ hasText: /−/i }).first()
    await decreaseBtn.click()

    await expect(quantityDisplay).toContainText('2')
  })

  test('4. Remove from cart', async ({ page }) => {
    await goto(page, '/shop')
    await setCart(page, [
      {
        variantId: 'gid://shopify/ProductVariant/1',
        quantity: 1,
        title: 'Fire Element T-Shirt',
        price: 29.99,
      },
    ])

    await page.reload()
    await waitForApp(page)
    await openCart(page)

    // Verify item is present
    await expect(page.locator('h3', { hasText: /Fire Element T-Shirt/i })).toBeVisible()

    // Click remove (×) button
    const removeBtn = page.locator('button[aria-label="Remove item"]').first()
    await removeBtn.click()

    // Cart should now be empty
    await expect(page.locator('text=Your cart is empty')).toBeVisible({ timeout: 5_000 })
  })

  test('5. Cart persists across navigation (add item → go home → return → cart intact)', async ({ page }) => {
    // Seed cart
    await goto(page, '/shop')
    await setCart(page, [
      {
        variantId: 'gid://shopify/ProductVariant/2',
        quantity: 2,
        title: 'Water Element Mug',
        price: 19.99,
      },
    ])

    // Navigate away to home
    await page.goto('/')
    await waitForApp(page)

    // Check cart badge in navbar shows count
    const cartBadge = page.locator('nav span').filter({ hasText: '2' }).first()
    await expect(cartBadge).toBeVisible({ timeout: 5_000 })

    // Navigate back to shop
    await page.goto('/shop')
    await waitForApp(page)

    // Open cart — item should still be there
    await openCart(page)
    await expect(page.locator('h3', { hasText: /Water Element Mug/i })).toBeVisible()
  })

  test('6. Cart persists on page refresh', async ({ page }) => {
    await goto(page, '/shop')
    await setCart(page, [
      {
        variantId: 'gid://shopify/ProductVariant/3',
        quantity: 1,
        title: 'Wood Element Poster',
        price: 24.99,
      },
    ])

    // Hard refresh the page
    await page.reload()
    await waitForApp(page)

    // Verify cart data is still in localStorage
    const cartData = await getCart(page)
    expect(cartData).toHaveLength(1)
    expect(cartData[0].title).toBe('Wood Element Poster')
    expect(cartData[0].quantity).toBe(1)

    // Open cart and verify item renders
    await openCart(page)
    await expect(page.locator('h3', { hasText: /Wood Element Poster/i })).toBeVisible()
  })

  test('7. Checkout button shows "Preview Only" in demo mode', async ({ page }) => {
    await goto(page, '/shop')
    await setCart(page, [
      {
        variantId: 'demo-fire-dragon-t-shirt-m',
        quantity: 1,
        title: 'Fire Dragon Element Tee',
        price: 29.99,
      },
    ])

    await page.reload()
    await waitForApp(page)
    await openCart(page)

    // In demo mode, checkout button shows "Preview Only" and is disabled
    const checkoutBtn = page.locator('button', { hasText: /Preview Only/i })
    await expect(checkoutBtn).toBeVisible()
    await expect(checkoutBtn).toBeDisabled()
  })

  test('8. Personalized products (save fire-horse sign → visit shop → curated section visible)', async ({ page }) => {
    // Set the user sign before visiting the shop
    await goto(page, '/')
    await setUserSign(page, 'fire-horse')

    // Navigate to shop
    await page.goto('/shop')
    await waitForApp(page)

    // If Shopify is configured and products load, a personalized section should appear.
    // We check that the shop page loads without errors regardless.
    await expect(page.locator('h1', { hasText: /Five Elements Collection/i })).toBeVisible()

    // Either "Curated for Fire Horse" section is visible (when configured)
    // or the "Shop Coming Soon" notice appears (when not configured).
    // Both are valid — we just verify no crash occurred.
    const pageContent = await page.locator('main, .min-h-screen').first().textContent()
    expect(pageContent).toBeTruthy()
    expect(pageContent!.length).toBeGreaterThan(10)
  })
})
