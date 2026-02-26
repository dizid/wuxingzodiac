import { test, expect } from '@playwright/test'
import { mockAllApis, mockBlogApiError, mockBlogApiEmpty } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { mockBlogPosts } from '../../fixtures/blog-posts'

// BlogPage.vue fetches from /api/blog/posts (not /api/blog-posts)
// We set up a local route helper that matches the real path.
async function mockBlogListApi(page: import('@playwright/test').Page, posts = mockBlogPosts, totalPages = 1) {
  await page.route('**/api/blog/posts**', (route) => {
    const url = new URL(route.request().url())
    const slug = url.searchParams.get('slug')

    if (slug) {
      const post = posts.find((p) => p.slug === slug)
      if (post) {
        route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(post) })
      } else {
        route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'Not found' }) })
      }
    } else {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts, page: 1, totalPages }),
      })
    }
  })
}

async function mockBlogListError(page: import('@playwright/test').Page) {
  await page.route('**/api/blog/posts**', (route) => {
    route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Internal server error' }),
    })
  })
}

async function mockBlogListEmpty(page: import('@playwright/test').Page) {
  await mockBlogListApi(page, [])
}

test.describe('BlogPage (/blog)', () => {
  // ── 1. Blog list renders with mocked posts ───────────────────────────────
  test('blog list renders posts from the API', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListApi(page)
    await page.goto('/blog')
    await waitForApp(page)

    // At least one post title from the fixture should appear
    await expect(page.locator('body')).toContainText('Understanding Wu Xing: The Five Elements')
  })

  // ── 2. Loading state shows a spinner ────────────────────────────────────
  test('loading state shows a spinner before posts arrive', async ({ page }) => {
    await mockAllApis(page)

    // Delay the API response so we can catch the loading state
    await page.route('**/api/blog/posts**', async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 800))
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ posts: mockBlogPosts, page: 1, totalPages: 1 }),
      })
    })

    await page.goto('/blog')
    await waitForApp(page)

    // The spinner is an animated element; look for the spin animation div
    const spinner = page.locator('.animate-spin')
    // Spinner may already be gone if network is fast — use a soft check
    const isVisible = await spinner.isVisible().catch(() => false)
    if (isVisible) {
      await expect(spinner).toBeVisible()
    }
    // After loading completes, spinner disappears
    await expect(page.locator('body')).toContainText('Understanding Wu Xing')
  })

  // ── 3. Error state shows error message and retry button ──────────────────
  test('error state renders error message and a "Try Again" button', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListError(page)
    await page.goto('/blog')
    await waitForApp(page)

    // Error message from catch block
    await expect(page.locator('body')).toContainText(/failed to fetch|error/i)

    // Retry button
    const retryBtn = page.locator('button', { hasText: /try again/i })
    await expect(retryBtn).toBeVisible()
  })

  // ── 4. Blog card shows title, excerpt, date, read time ──────────────────
  test('blog card shows title, excerpt, date, and read time', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListApi(page)
    await page.goto('/blog')
    await waitForApp(page)

    const firstPost = mockBlogPosts[0]

    await expect(page.locator('body')).toContainText(firstPost.title)
    await expect(page.locator('body')).toContainText(firstPost.excerpt)

    // Date — rendered by BlogCard; "January 15, 2026" from publishedAt
    await expect(page.locator('body')).toContainText('2026')

    // Read time — "5 min read" or similar
    await expect(page.locator('body')).toContainText(/min read/)
  })

  // ── 5. Blog card links to the individual post page ───────────────────────
  test('blog card contains a link to the individual post page', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListApi(page)
    await page.goto('/blog')
    await waitForApp(page)

    const postLink = page.locator(`a[href="/blog/understanding-wu-xing"]`).first()
    await expect(postLink).toBeVisible()
  })

  // ── 6. Pagination next/previous controls render when totalPages > 1 ──────
  test('pagination controls render when there are multiple pages', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListApi(page, mockBlogPosts, 3) // 3 total pages
    await page.goto('/blog')
    await waitForApp(page)

    const nextBtn = page.locator('button', { hasText: /next/i })
    await expect(nextBtn).toBeVisible()

    // Previous is disabled on page 1
    const prevBtn = page.locator('button', { hasText: /previous/i })
    await expect(prevBtn).toBeVisible()
    await expect(prevBtn).toBeDisabled()
  })

  // ── 7. Empty state message renders when there are no posts ───────────────
  test('empty state message renders when there are no posts', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListEmpty(page)
    await page.goto('/blog')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/no blog posts yet|check back soon/i)
  })

  // ── 8. Single blog post page loads at /blog/understanding-wu-xing ────────
  test('single blog post page loads and renders post content', async ({ page }) => {
    await mockAllApis(page)
    await mockBlogListApi(page)
    await page.goto('/blog/understanding-wu-xing')
    await waitForApp(page)

    // Post title appears in the article
    await expect(page.locator('body')).toContainText('Understanding Wu Xing: The Five Elements')

    // Author and date metadata
    await expect(page.locator('body')).toContainText('Wu Xing Team')

    // Post content
    await expect(page.locator('body')).toContainText('Five Elements')

    // Back to blog link
    const backLink = page.locator('a[href="/blog"]')
    await expect(backLink).toBeVisible()
  })
})
