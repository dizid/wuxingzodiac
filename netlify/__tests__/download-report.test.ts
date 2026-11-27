// @vitest-environment node
// T-0651: the legacy Blueprint PDF needs the short-lived token from the status
// check; the Stripe session id alone no longer downloads it.
// Lives outside netlify/functions/ so Netlify never mistakes it for a function.
// The database and blob store are mocked: nothing here talks to Neon or Netlify.
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import type { Context } from '@netlify/functions'
import downloadReport, {
  signDownloadToken,
  verifyDownloadToken,
  DOWNLOAD_TOKEN_TTL_MS,
} from '../functions/download-report'

const { orderRow, sqlCalls, blobGet } = vi.hoisted(() => ({
  orderRow: { current: null as Record<string, unknown> | null },
  sqlCalls: [] as string[],
  blobGet: vi.fn(),
}))

vi.mock('@neondatabase/serverless', () => ({
  neon: () => async (strings: TemplateStringsArray) => {
    const text = strings.join('?')
    sqlCalls.push(text)
    return text.includes('SELECT') && orderRow.current ? [orderRow.current] : []
  },
}))
vi.mock('@netlify/blobs', () => ({ getStore: () => ({ get: blobGet }) }))

const context = {} as Context
const SESSION = 'cs_live_legacy123'

function get(query: string) {
  return downloadReport(new Request(`http://localhost/api/download-report?${query}`), context)
}

beforeEach(() => {
  vi.stubEnv('DATABASE_URL', 'postgres://test-only-secret')
  sqlCalls.length = 0
  blobGet.mockReset()
  blobGet.mockResolvedValue(new TextEncoder().encode('%PDF-1.4 test').buffer)
  // A legacy Blueprint order inside its 30-day window
  orderRow.current = {
    id: 1,
    sign_slug: 'fire-horse',
    status: 'paid',
    download_count: 0,
    fulfilled_at: new Date().toISOString(),
    customer_email: 'anna@example.com',
    reading_status: null,
    reading_attempts: 0,
  }
})

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('download token helpers', () => {
  const now = 1_800_000_000_000
  const key = 'k'

  it('accepts a fresh token for the same session only', () => {
    const token = signDownloadToken(SESSION, now + DOWNLOAD_TOKEN_TTL_MS, key)
    expect(verifyDownloadToken(SESSION, token, now, key)).toBe(true)
    expect(verifyDownloadToken('cs_live_other', token, now, key)).toBe(false)
  })

  it('refuses an expired, tampered, far-future, empty or differently-keyed token', () => {
    const token = signDownloadToken(SESSION, now + 1000, key)
    expect(verifyDownloadToken(SESSION, token, now + 1001, key)).toBe(false)
    expect(verifyDownloadToken(SESSION, token.slice(0, -2) + 'xx', now, key)).toBe(false)
    const farFuture = signDownloadToken(SESSION, now + DOWNLOAD_TOKEN_TTL_MS * 24, key)
    expect(verifyDownloadToken(SESSION, farFuture, now, key)).toBe(false)
    expect(verifyDownloadToken(SESSION, null, now, key)).toBe(false)
    expect(verifyDownloadToken(SESSION, '', now, key)).toBe(false)
    expect(verifyDownloadToken(SESSION, token, now, 'other-key')).toBe(false)
    expect(verifyDownloadToken(SESSION, token, now, '')).toBe(false)
  })
})

describe('GET /api/download-report (legacy Blueprint)', () => {
  it('check hands out a download token', async () => {
    const res = await get(`session=${SESSION}&action=check`)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.status).toBe('ready')
    expect(verifyDownloadToken(SESSION, body.downloadToken)).toBe(true)
  })

  it('refuses the PDF with only the session id (403), without counting a download', async () => {
    const res = await get(`session_id=${SESSION}`)
    expect(res.status).toBe(403)
    expect((await res.json()).error).toMatch(/reload this page/i)
    expect(blobGet).not.toHaveBeenCalled()
    expect(sqlCalls.some((s) => s.includes('UPDATE'))).toBe(false)
  })

  it('refuses a token made for another session', async () => {
    const otherToken = signDownloadToken('cs_live_other', Date.now() + 60_000)
    const res = await get(`session_id=${SESSION}&token=${encodeURIComponent(otherToken)}`)
    expect(res.status).toBe(403)
  })

  it('streams the PDF with the token from the check, and counts the download', async () => {
    const check = await (await get(`session_id=${SESSION}&action=check`)).json()
    const res = await get(`session_id=${SESSION}&token=${encodeURIComponent(check.downloadToken)}`)
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/pdf')
    expect(sqlCalls.some((s) => s.includes('UPDATE'))).toBe(true)
  })

  it('still says the link expired after 30 days, even with a valid token', async () => {
    orderRow.current = { ...orderRow.current, fulfilled_at: new Date(Date.now() - 31 * 86_400_000).toISOString() }
    const token = signDownloadToken(SESSION, Date.now() + 60_000)
    const res = await get(`session_id=${SESSION}&token=${encodeURIComponent(token)}`)
    expect(res.status).toBe(410)
  })
})

describe('GET /api/download-report (personalized reading)', () => {
  it('status check is unchanged and hands out no token (the PDF is emailed)', async () => {
    orderRow.current = { ...orderRow.current, reading_status: 'delivered', reading_attempts: 1 }
    const res = await get(`session_id=${SESSION}&action=check`)
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toMatchObject({ status: 'delivered', email: 'a•••@example.com' })
    expect(body.downloadToken).toBeUndefined()
  })
})
