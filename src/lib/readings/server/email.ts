// ============================================
// READING EMAIL DELIVERY (Resend)
// ============================================
// The finished PDF is attached and sent to the buyer — this is the only
// copy. Uses Resend's REST API directly (no SDK needed for one call).
// Requires RESEND_API_KEY (send-only key for the wuxingzodiac.me domain).
// SUPPORT_EMAIL (optional) receives failure alerts and customer replies.

import { READING_TYPES, type ReadingInput } from '../types'
import type { ReadingContext } from './context'
import { esc, escMultiline } from './templates/base'

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const FROM_ADDRESS = 'Wu Xing Zodiac <readings@wuxingzodiac.me>'

interface ResendAttachment {
  filename: string
  content: string // base64
}

interface ResendEmail {
  from: string
  to: string[]
  subject: string
  html: string
  text: string
  reply_to?: string
  attachments?: ResendAttachment[]
}

async function sendEmail(email: ResendEmail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not set')

  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(email),
  })
  if (!res.ok) {
    throw new Error(`Resend error ${res.status}: ${(await res.text()).slice(0, 300)}`)
  }
}

/** Filename-safe slug, e.g. "José María" → "jose-maria" */
function fileSlug(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function readingFileName(input: ReadingInput, signSlug: string): string {
  return `wuxing-reading-${fileSlug(input.names[0]!) || 'personal'}-${signSlug}.pdf`
}

/** Email the finished reading PDF to the buyer. */
export async function sendReadingEmail(to: string, ctx: ReadingContext, pdf: Buffer): Promise<void> {
  const { input } = ctx
  const person = ctx.people[0]!
  const { sign } = person
  const label = READING_TYPES[input.type].label
  const recipient = input.recipientName ?? person.name

  const subject = input.isGift
    ? `Your gift reading for ${recipient} — ${sign.name}`
    : `${person.name}, your ${label} is here — ${sign.name}`

  const intro = input.isGift
    ? `The ${label} you ordered for ${recipient} is attached as a PDF. Forward this email or print it — the cover is addressed to ${recipient}${input.giftMessage ? ' and includes your message' : ''}.`
    : `Hi ${person.name}, your ${label} is attached as a PDF.`

  const summary = `${sign.name} (${sign.chineseName}) · ${sign.archetype} · born ${person.birthDateLabel}`
  const contents =
    'Inside: your element balance, core personality, strengths and blind spots, love, career and money, your 2026 Fire Horse outlook and 5 next steps.'
  const keep = "Keep this email — it's your copy. We don't store your reading."

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;color:#171717">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;padding:28px">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#737373">Wu Xing Zodiac</p>
    <h1 style="margin:0 0 16px;font-size:22px">${esc(input.isGift ? `A gift reading for ${recipient}` : `Your ${label}`)}</h1>
    <p style="margin:0 0 12px;font-size:15px;line-height:1.5">${esc(intro)}</p>
    ${input.isGift && input.giftMessage ? `<p style="margin:0 0 12px;padding:12px 16px;background:#fafafa;border-left:3px solid #a3a3a3;font-style:italic">${escMultiline(input.giftMessage)}</p>` : ''}
    <p style="margin:0 0 12px;font-size:15px;line-height:1.5"><strong>${esc(summary)}</strong></p>
    <p style="margin:0 0 12px;font-size:14px;line-height:1.5;color:#404040">${esc(contents)}</p>
    <p style="margin:16px 0 0;font-size:13px;color:#737373">${esc(keep)}</p>
  </div>
  <p style="max-width:560px;margin:12px auto 0;font-size:12px;color:#a3a3a3;text-align:center">
    <a href="https://wuxingzodiac.me" style="color:#a3a3a3">wuxingzodiac.me</a> · For entertainment and self-reflection.
  </p>
</body></html>`

  const text = [
    intro,
    input.isGift && input.giftMessage ? `\nYour message: ${input.giftMessage}` : '',
    `\n${summary}`,
    contents,
    `\n${keep}`,
    '\nwuxingzodiac.me',
  ].join('\n')

  await sendEmail({
    from: FROM_ADDRESS,
    to: [to],
    subject,
    html,
    text,
    reply_to: process.env.SUPPORT_EMAIL || undefined,
    attachments: [{ filename: readingFileName(input, sign.slug), content: pdf.toString('base64') }],
  })
}

/** Tell the site owner a paid reading could not be delivered. Never throws. */
export async function sendOwnerAlert(subject: string, body: string): Promise<void> {
  const to = process.env.SUPPORT_EMAIL
  if (!to) return
  try {
    await sendEmail({ from: FROM_ADDRESS, to: [to], subject: `[wuxingzodiac] ${subject}`, html: `<pre>${esc(body)}</pre>`, text: body })
  } catch (error) {
    console.error('Owner alert failed:', error instanceof Error ? error.message : error)
  }
}
