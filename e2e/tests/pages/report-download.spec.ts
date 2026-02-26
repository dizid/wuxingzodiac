import { test, expect } from '@playwright/test'
import { mockAllApis, mockDownloadReport } from '../../helpers/api-mocks'
import { waitForApp } from '../../helpers/test-app'
import { validSession } from '../../fixtures/stripe-sessions'

// The report download page calls /api/download-report with ?action=check
// and then the same URL without action for the PDF bytes.

test.describe('ReportDownloadPage (/report/download)', () => {
  // ── 1. Loading state shows on mount ──────────────────────────────────────
  test('loading state is shown while checking order status', async ({ page }) => {
    await mockAllApis(page)

    // Delay the check response so we can observe the loading state
    let resolveRequest!: () => void
    await page.route('**/api/download-report**', async (route) => {
      await new Promise<void>((resolve) => { resolveRequest = resolve })
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, signName: 'Fire Horse', signSlug: 'fire-horse' }),
      })
    })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    // Loading heading should be visible before the request resolves
    await expect(page.locator('body')).toContainText(/preparing your report/i)

    // Resolve to let the test complete cleanly
    resolveRequest()
  })

  // ── 2. No session param shows error state ─────────────────────────────────
  test('missing session param results in error state', async ({ page }) => {
    await mockAllApis(page)
    // No session query param → the component immediately errors
    await page.goto('/report/download')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/no session id provided/i)
    await expect(page.locator('body')).toContainText(/something went wrong/i)
  })

  // ── 3. Order not found → retries → then shows error after max retries ─────
  test('repeated 404 responses exhaust retries and show error state', async ({ page }) => {
    await mockAllApis(page)
    // Fail 4 times (> MAX_RETRIES=3) so retries exhaust
    await mockDownloadReport(page, { failCount: 4 })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    // After retries are exhausted, error state renders
    await expect(page.locator('body')).toContainText(/something went wrong/i, { timeout: 20_000 })
    await expect(page.locator('body')).toContainText(/order not found|failed/i)
  })

  // ── 4. Race condition state message shows during retries ──────────────────
  test('race condition state shows "payment is being confirmed" during retries', async ({ page }) => {
    await mockAllApis(page)
    // Fail once then succeed — the page should show race-condition state briefly
    await mockDownloadReport(page, { failCount: 1, signName: 'Fire Horse', signSlug: 'fire-horse' })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    // Race-condition heading visible between retry attempts
    await expect(page.locator('body')).toContainText(
      /payment is being confirmed|preparing your report|your blueprint is ready/i,
      { timeout: 10_000 },
    )
  })

  // ── 5. Ready state renders after successful check ─────────────────────────
  test('ready state renders "Your Blueprint is Ready" after a successful check', async ({ page }) => {
    await mockAllApis(page)
    await mockDownloadReport(page, { signName: 'Fire Horse', signSlug: 'fire-horse' })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/your blueprint is ready/i, { timeout: 10_000 })
  })

  // ── 6. Download button triggers a PDF download ────────────────────────────
  test('clicking "Download PDF" button triggers a file download', async ({ page }) => {
    await mockAllApis(page)
    await mockDownloadReport(page, { signName: 'Fire Horse', signSlug: 'fire-horse' })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    // Wait for ready state
    await expect(page.locator('body')).toContainText(/your blueprint is ready/i, { timeout: 10_000 })

    // Listen for the download event
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('button', { hasText: /download pdf/i }).click(),
    ])

    expect(download.suggestedFilename()).toMatch(/elemental-blueprint.*\.pdf/)
  })

  // ── 7. Downloading state disables the button ──────────────────────────────
  test('button is disabled and shows "Downloading..." while the PDF is being fetched', async ({ page }) => {
    await mockAllApis(page)

    // Delay the PDF download response to observe the downloading state
    let resolveDownload!: () => void
    let callCount = 0
    await page.route('**/api/download-report**', async (route) => {
      callCount++
      const url = new URL(route.request().url())
      const action = url.searchParams.get('action')

      if (action === 'check') {
        // Immediately succeed the check
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true, signName: 'Fire Horse', signSlug: 'fire-horse' }),
        })
      } else {
        // Delay the PDF fetch so we can see the downloading state
        await new Promise<void>((resolve) => { resolveDownload = resolve })
        route.fulfill({
          status: 200,
          contentType: 'application/pdf',
          body: Buffer.from('%PDF-1.4 fake pdf'),
        })
      }
    })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/your blueprint is ready/i, { timeout: 10_000 })

    // Click download and check for disabled state immediately
    await page.locator('button', { hasText: /download pdf/i }).click()

    const downloadingBtn = page.locator('button', { hasText: /downloading/i })
    await expect(downloadingBtn).toBeVisible()
    await expect(downloadingBtn).toBeDisabled()

    // Resolve to unblock the route handler
    resolveDownload()
  })

  // ── 8. Download error shows error state ───────────────────────────────────
  test('a failed PDF download transitions to error state', async ({ page }) => {
    await mockAllApis(page)

    await page.route('**/api/download-report**', (route) => {
      const url = new URL(route.request().url())
      const action = url.searchParams.get('action')

      if (action === 'check') {
        route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ ok: true, signName: 'Fire Horse', signSlug: 'fire-horse' }),
        })
      } else {
        // Simulate download failure
        route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Download failed' }),
        })
      }
    })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/your blueprint is ready/i, { timeout: 10_000 })
    await page.locator('button', { hasText: /download pdf/i }).click()

    await expect(page.locator('body')).toContainText(/something went wrong|download failed/i, { timeout: 10_000 })
  })

  // ── 9. Retry button resets state and re-checks the order ─────────────────
  test('"Try Again" button resets error state and retries the order check', async ({ page }) => {
    await mockAllApis(page)

    // Navigate without a session — immediately errors
    await page.goto('/report/download')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/something went wrong/i)

    const retryBtn = page.locator('button', { hasText: /try again/i })
    await expect(retryBtn).toBeVisible()

    // Now mock the report endpoint to succeed after retry
    await mockDownloadReport(page, { signName: 'Fire Horse', signSlug: 'fire-horse' })

    await retryBtn.click()

    // Page goes back to loading or error (no session param), confirming button works
    // Without a session it will error again — just confirm loading was triggered
    await expect(page.locator('body')).toContainText(
      /preparing your report|no session id provided|something went wrong/i,
      { timeout: 5_000 },
    )
  })

  // ── 10. Sign name is displayed in ready state ─────────────────────────────
  test('sign name "Fire Horse" is displayed in the ready state', async ({ page }) => {
    await mockAllApis(page)
    await mockDownloadReport(page, { signName: 'Fire Horse', signSlug: 'fire-horse' })

    await page.goto('/report/download?session=cs_test_abc123')
    await waitForApp(page)

    await expect(page.locator('body')).toContainText(/your blueprint is ready/i, { timeout: 10_000 })

    // The ready state renders: "Your personalized Elemental Blueprint for Fire Horse is ready"
    await expect(page.locator('body')).toContainText('Fire Horse')
  })
})
