// End-to-end check of the "Step into your element" payment path in Stripe TEST
// mode. Costs nothing: Stripe test card, local Netlify Blobs, and the background
// function is a local stub that only records the call (no Genie session).
//
//   npx tsx --env-file=.env scripts/check-element-video-stripe-test.ts
//
// Needs STRIPE_SECRET_KEY = a test key (sk_test_…); refuses anything else.
// Opens one headless Chromium (Playwright) to pay on the real Stripe Checkout page.
//
// Covers: checkout session with the inline price, paying with 4242…, the ready
// page's POST (Stripe re-check → claim → reserve → background trigger with the
// job's token), idempotent repeats, the signed webhook for the same order, and
// an unpaid session that must not start anything.

import { createServer, type IncomingMessage } from 'node:http'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { randomBytes } from 'node:crypto'
import { BlobsServer } from '@netlify/blobs/server'
import { setEnvironmentContext } from '@netlify/blobs'
import Stripe from 'stripe'
import { chromium, type Page } from 'playwright'

const results: { name: string; ok: boolean; detail?: string }[] = []
function check(name: string, ok: boolean, detail?: string) {
  results.push({ name, ok, detail })
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail && !ok ? `  (${detail})` : ''}`)
}

if (!process.env.STRIPE_SECRET_KEY?.startsWith('sk_test_')) {
  console.error('Refusing to run: STRIPE_SECRET_KEY must be a Stripe TEST key (sk_test_…).')
  process.exit(2)
}

// --- Local Blobs ---
const dir = mkdtempSync(join(tmpdir(), 'element-video-stripe-'))
const blobsToken = 'local-check-token'
const blobs = new BlobsServer({ directory: dir, token: blobsToken })
const { port: blobsPort } = await blobs.start()
const blobsUrl = `http://localhost:${blobsPort}`
setEnvironmentContext({ siteID: 'local-check', token: blobsToken, edgeURL: blobsUrl, uncachedEdgeURL: blobsUrl })

// --- Local stub site: success/cancel pages + the background function ---
const backgroundCalls: { sessionId?: string; token?: string }[] = []
function readBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve) => {
    let data = ''
    req.on('data', (chunk) => (data += chunk))
    req.on('end', () => resolve(data))
  })
}
const site = createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/.netlify/functions/element-video-background') {
    backgroundCalls.push(JSON.parse(await readBody(req)))
    res.writeHead(202).end()
    return
  }
  res.writeHead(200, { 'Content-Type': 'text/html' }).end('<p>local stub</p>')
})
await new Promise<void>((resolve) => site.listen(0, resolve))
const sitePort = (site.address() as { port: number }).port
const origin = `http://localhost:${sitePort}`

process.env.SITE_URL = origin
process.env.ELEMENT_VIDEO_LIVE = 'true'
process.env.GEMINI_API_KEY = 'not-used-background-is-a-stub'
delete process.env.ELEMENT_VIDEO_DAILY_USD_CAP
delete process.env.SUPPORT_EMAIL
delete process.env.RESEND_API_KEY
// Made-up secret: the check signs its own webhook event with it
process.env.STRIPE_WEBHOOK_SECRET = `whsec_${randomBytes(24).toString('hex')}`

const { default: checkout } = await import('../netlify/functions/element-video-checkout')
const { default: status } = await import('../netlify/functions/element-video')
const { default: webhook } = await import('../netlify/functions/stripe-webhook')
const store = await import('../src/lib/element-video/server/store')
const { ELEMENT_VIDEO_PRICE_CENTS, ELEMENT_VIDEO_PRODUCT } = await import('../src/lib/element-video/offer')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const ctx = {} as never
const post = (path: string, body: unknown) =>
  new Request(`${origin}${path}`, { method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } })

async function newCheckout(sign: string): Promise<{ id: string; url: string }> {
  const res = await checkout(post('/api/element-video-checkout', { sign }), ctx)
  const body = (await res.json()) as { url?: string; error?: string }
  if (res.status !== 200 || !body.url) throw new Error(`checkout failed: ${res.status} ${body.error}`)
  const id = /\/(cs_test_[A-Za-z0-9]+)/.exec(body.url)?.[1]
  if (!id) throw new Error(`no session id in ${body.url}`)
  return { id, url: body.url }
}

/** Fill Stripe Checkout with the 4242 test card and pay; resolves on the success redirect. */
async function payWithTestCard(page: Page, url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded' })
  await page.locator('#email').fill('element-video-check@example.com')
  // Newer Checkout pages fold payment methods into an accordion
  const cardButton = page.locator('[data-testid="card-accordion-item-button"]')
  if (await cardButton.isVisible({ timeout: 3000 }).catch(() => false)) await cardButton.click()
  await page.locator('#cardNumber').fill('4242424242424242')
  await page.locator('#cardExpiry').fill('12 / 34')
  await page.locator('#cardCvc').fill('123')
  await page.locator('#billingName').fill('Element Check')
  const postal = page.locator('#billingPostalCode')
  if (await postal.isVisible().catch(() => false)) await postal.fill('10001')
  await page.locator('button[type="submit"], .SubmitButton').first().click()
  await page.waitForURL((u) => u.toString().startsWith(`${origin}/element-video/ready`), { timeout: 60_000 })
}

const browser = await chromium.launch({ headless: true })
try {
  // --- 1. Checkout session ---
  const order = await newCheckout('fire-horse')
  const created = await stripe.checkout.sessions.retrieve(order.id, { expand: ['line_items'] })
  check('checkout: test-mode session created', created.livemode === false && created.mode === 'payment')
  check(
    'checkout: inline price $4.90, product + sign in metadata',
    created.amount_total === ELEMENT_VIDEO_PRICE_CENTS &&
      created.currency === 'usd' &&
      created.metadata?.product === ELEMENT_VIDEO_PRODUCT &&
      created.metadata?.video_sign === 'fire-horse',
    JSON.stringify({ amount: created.amount_total, currency: created.currency, metadata: created.metadata }),
  )
  check(
    'checkout: success URL goes to the ready page with the session id',
    created.success_url === `${origin}/element-video/ready?session_id={CHECKOUT_SESSION_ID}`,
    created.success_url ?? '',
  )

  // --- 2. Nothing starts before payment ---
  let res = await status(post('/api/element-video', { sessionId: order.id }), ctx)
  let body = (await res.json()) as { status?: string }
  check('unpaid: ready page POST reports unknown, starts nothing', body.status === 'unknown' && backgroundCalls.length === 0, JSON.stringify(body))

  // --- 3. Pay with the test card ---
  const page = await browser.newPage()
  try {
    await payWithTestCard(page, order.url)
    check('payment: Stripe redirected to /element-video/ready?session_id=…', page.url().includes(`session_id=${order.id}`), page.url())
  } catch (error) {
    await page.screenshot({ path: join(tmpdir(), 'element-video-stripe-fail.png'), fullPage: true })
    throw new Error(`paying failed (screenshot in ${tmpdir()}/element-video-stripe-fail.png): ${error instanceof Error ? error.message : error}`)
  }
  const paid = await stripe.checkout.sessions.retrieve(order.id)
  check('payment: session is paid', paid.payment_status === 'paid', paid.payment_status)

  // --- 4. Ready page POST starts exactly one attempt ---
  res = await status(post('/api/element-video', { sessionId: order.id }), ctx)
  body = (await res.json()) as { status?: string; sign?: string }
  check('ready page: POST reports pending + sign', body.status === 'pending' && body.sign === 'fire-horse', JSON.stringify(body))
  const job = await store.readJob(store.videoStore(), order.id)
  check(
    'ready page: background triggered once with the job token',
    backgroundCalls.length === 1 && backgroundCalls[0]?.sessionId === order.id && backgroundCalls[0]?.token === job?.token,
    JSON.stringify(backgroundCalls.map((c) => c.sessionId)),
  )
  check('ready page: buyer email kept for the "ready" mail', job?.email === 'element-video-check@example.com', job?.email)
  const spent = await store.spentToday(store.videoStore())
  check('ready page: one reservation on today\'s cap', Math.abs(spent - store.RESERVE_PER_VIDEO_USD) < 1e-6, String(spent))

  res = await status(post('/api/element-video', { sessionId: order.id }), ctx)
  body = (await res.json()) as { status?: string }
  check('ready page: a repeat POST starts nothing new', body.status === 'pending' && backgroundCalls.length === 1, `${body.status} ${backgroundCalls.length}`)

  // --- 5. The signed webhook for the same order is a no-op (already working) ---
  const payload = JSON.stringify({
    id: 'evt_local_check',
    object: 'event',
    type: 'checkout.session.completed',
    data: { object: paid },
  })
  const signature = stripe.webhooks.generateTestHeaderString({ payload, secret: process.env.STRIPE_WEBHOOK_SECRET! })
  res = await webhook(
    new Request(`${origin}/api/stripe-webhook`, { method: 'POST', body: payload, headers: { 'stripe-signature': signature } }),
    ctx,
  )
  check('webhook: signed event accepted (200), no second attempt', res.status === 200 && backgroundCalls.length === 1, `${res.status} ${backgroundCalls.length}`)

  res = await webhook(
    new Request(`${origin}/api/stripe-webhook`, { method: 'POST', body: payload, headers: { 'stripe-signature': 't=1,v1=bad' } }),
    ctx,
  )
  check('webhook: bad signature refused (400)', res.status === 400, String(res.status))

  // --- 6. A webhook for a fresh paid order starts it (webhook-first path) ---
  const second = await newCheckout('water-rabbit')
  const page2 = await browser.newPage()
  await payWithTestCard(page2, second.url)
  const paid2 = await stripe.checkout.sessions.retrieve(second.id)
  const payload2 = JSON.stringify({ id: 'evt_local_check_2', object: 'event', type: 'checkout.session.completed', data: { object: paid2 } })
  res = await webhook(
    new Request(`${origin}/api/stripe-webhook`, {
      method: 'POST',
      body: payload2,
      headers: { 'stripe-signature': stripe.webhooks.generateTestHeaderString({ payload: payload2, secret: process.env.STRIPE_WEBHOOK_SECRET! }) },
    }),
    ctx,
  )
  const job2 = await store.readJob(store.videoStore(), second.id)
  check(
    'webhook-first: paid order starts one attempt for its own sign',
    res.status === 200 && backgroundCalls.length === 2 && backgroundCalls[1]?.sessionId === second.id && job2?.sign === 'water-rabbit',
    `${res.status} ${backgroundCalls.length} ${job2?.sign}`,
  )
} finally {
  await browser.close()
  await blobs.stop()
  site.close()
  rmSync(dir, { recursive: true, force: true })
}

const failed = results.filter((r) => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length ? 1 : 0)
