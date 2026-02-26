// Centralized API mocking for all external services
import type { Page, Route } from '@playwright/test'
import { mockBlogPosts } from '../fixtures/blog-posts'
import { mockShopifyProducts } from '../fixtures/shopify-products'

// ============================================
// NEWSLETTER (Buttondown)
// ============================================

interface NewsletterMockOptions {
  status?: number
  body?: Record<string, unknown>
}

export async function mockNewsletter(page: Page, opts?: NewsletterMockOptions) {
  const status = opts?.status ?? 200
  const body = opts?.body ?? { ok: true, message: "You're in! Watch your inbox." }

  await page.route('**/api/newsletter/subscribe', (route: Route) => {
    route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(body) })
  })
}

export async function mockNewsletterDuplicate(page: Page) {
  await mockNewsletter(page, {
    status: 200,
    body: { ok: true, message: "You're already subscribed!" },
  })
}

export async function mockNewsletterError(page: Page) {
  await mockNewsletter(page, {
    status: 500,
    body: { error: 'Something went wrong. Please try again later.' },
  })
}

// ============================================
// BLOG (Neon PostgreSQL)
// ============================================

interface BlogMockOptions {
  status?: number
  posts?: unknown[]
  total?: number
  page?: number
}

export async function mockBlogApi(page: Page, opts?: BlogMockOptions) {
  const status = opts?.status ?? 200
  const posts = opts?.posts ?? mockBlogPosts
  const total = opts?.total ?? posts.length

  await page.route('**/api/blog-posts**', (route: Route) => {
    const url = new URL(route.request().url())
    const slug = url.searchParams.get('slug')

    if (slug) {
      const post = posts.find((p: any) => p.slug === slug)
      if (post) {
        route.fulfill({ status, contentType: 'application/json', body: JSON.stringify(post) })
      } else {
        route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'Not found' }) })
      }
    } else {
      route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify({ posts, total, page: opts?.page ?? 1 }),
      })
    }
  })
}

export async function mockBlogApiError(page: Page) {
  await page.route('**/api/blog-posts**', (route: Route) => {
    route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ error: 'Internal server error' }) })
  })
}

export async function mockBlogApiEmpty(page: Page) {
  await mockBlogApi(page, { posts: [], total: 0 })
}

// ============================================
// STRIPE (Checkout + Download)
// ============================================

interface StripeMockOptions {
  checkoutUrl?: string
  status?: number
}

export async function mockStripeCheckout(page: Page, opts?: StripeMockOptions) {
  const url = opts?.checkoutUrl ?? 'https://checkout.stripe.com/test-session'
  const status = opts?.status ?? 200

  await page.route('**/api/create-checkout', (route: Route) => {
    if (status !== 200) {
      route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ error: 'Checkout failed' }) })
    } else {
      route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ url }) })
    }
  })
}

interface DownloadReportMockOptions {
  status?: number
  signName?: string
  signSlug?: string
  failCount?: number // Number of 404s before succeeding (for race condition testing)
}

export async function mockDownloadReport(page: Page, opts?: DownloadReportMockOptions) {
  let failsRemaining = opts?.failCount ?? 0
  const signName = opts?.signName ?? 'Fire Horse'
  const signSlug = opts?.signSlug ?? 'fire-horse'

  await page.route('**/api/download-report**', (route: Route) => {
    const url = new URL(route.request().url())
    const action = url.searchParams.get('action')

    if (failsRemaining > 0) {
      failsRemaining--
      route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'Order not found' }) })
      return
    }

    const status = opts?.status ?? 200

    if (action === 'check') {
      if (status !== 200) {
        route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ error: 'Error' }) })
      } else {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true, signName, signSlug }),
        })
      }
    } else {
      // PDF download
      if (status !== 200) {
        route.fulfill({ status, contentType: 'application/json', body: JSON.stringify({ error: 'Download failed' }) })
      } else {
        route.fulfill({
          status: 200,
          contentType: 'application/pdf',
          body: Buffer.from('%PDF-1.4 fake pdf content'),
        })
      }
    }
  })
}

// ============================================
// SHOPIFY (Storefront GraphQL)
// ============================================

export async function mockShopifyStorefront(page: Page, products?: unknown[]) {
  const data = products ?? mockShopifyProducts

  await page.route('**shopify.com/**', (route: Route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        data: {
          products: {
            edges: data.map((p: any) => ({ node: p })),
          },
        },
      }),
    })
  })
}

export async function mockShopifyError(page: Page) {
  await page.route('**shopify.com/**', (route: Route) => {
    route.fulfill({ status: 500, contentType: 'application/json', body: JSON.stringify({ errors: [{ message: 'Internal error' }] }) })
  })
}

// ============================================
// ANALYTICS (block silently)
// ============================================

export async function blockAnalytics(page: Page) {
  await page.route('**google-analytics.com/**', (route: Route) => route.abort())
  await page.route('**googletagmanager.com/**', (route: Route) => route.abort())
}

// ============================================
// MOCK ALL — convenience function
// ============================================

export async function mockAllApis(page: Page) {
  await mockNewsletter(page)
  await mockBlogApi(page)
  await mockStripeCheckout(page)
  await mockDownloadReport(page)
  await mockShopifyStorefront(page)
  await blockAnalytics(page)
}
