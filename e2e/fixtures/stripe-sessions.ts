// Mock Stripe session objects for E2E tests
export const validSession = {
  id: 'cs_test_abc123',
  signSlug: 'fire-horse',
  signName: 'Fire Horse',
}

export const expiredSession = {
  id: 'cs_test_expired',
  error: 'Download link has expired',
  status: 410,
}

export const unpaidSession = {
  id: 'cs_test_unpaid',
  error: 'Payment not completed',
  status: 402,
}

export const maxDownloadsSession = {
  id: 'cs_test_maxdownloads',
  error: 'Download limit exceeded',
  status: 429,
}
