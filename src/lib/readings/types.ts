// ============================================
// PERSONALIZED READINGS — shared types & validation
// ============================================
// Browser-safe: used by the intake form, create-checkout, the Stripe
// webhook and the background generator. Node-only code (Claude, Playwright,
// Netlify Blobs) lives in ./server/ and must never be imported from the app.

export type ReadingType = 'personal' | 'relationship' | 'year-2027' | 'child'

export interface ReadingTypeConfig {
  type: ReadingType
  /** Product name shown to buyers and used as the GA4 item name */
  label: string
  /** How many people (names + birth dates) this reading needs */
  people: number
  /** false = designed for, not on sale yet */
  available: boolean
}

export const READING_TYPES: Record<ReadingType, ReadingTypeConfig> = {
  personal: { type: 'personal', label: 'Personal Reading', people: 1, available: true },
  relationship: { type: 'relationship', label: 'Relationship Reading', people: 2, available: false },
  'year-2027': { type: 'year-2027', label: '2027 Year Ahead Reading', people: 1, available: false },
  child: { type: 'child', label: 'Child Reading', people: 1, available: false },
}

/** Everything needed to generate one reading. */
export interface ReadingInput {
  type: ReadingType
  /** People the reading is about (1 for personal, 2 for relationship, ...) */
  names: string[]
  /** ISO dates (YYYY-MM-DD), same order as names */
  birthDates: string[]
  /** Buyer's email (receipt now, delivery later) */
  email: string
  isGift: boolean
  /** Who receives the gift — shown on the cover. Defaults to names[0]. */
  recipientName?: string
  giftMessage?: string
}

/** Request body accepted by /api/create-checkout */
export interface CheckoutRequestBody {
  readingType: ReadingType
  names: string[]
  birthDates: string[]
  email: string
  isGift: boolean
  recipientName?: string
  giftMessage?: string
  /** EU right-of-withdrawal waiver checkbox: the server refuses a checkout unless it's true */
  withdrawalWaiver: boolean
}

/** Shown when the withdrawal-waiver box isn't ticked (form and server) */
export const WITHDRAWAL_WAIVER_ERROR =
  'Please tick the box to confirm your reading is delivered immediately and you give up your 14-day right of withdrawal.'

/**
 * True only when the buyer explicitly ticked the withdrawal-waiver box
 * (exactly `true`, never a truthy string). Checked separately from
 * validateReadingInput, which also re-validates Stripe metadata.
 */
export function hasWithdrawalWaiver(raw: unknown): boolean {
  return !!raw && typeof raw === 'object' && (raw as Record<string, unknown>).withdrawalWaiver === true
}

// Field limits — also keep Stripe metadata values under its 500-char cap
export const READING_LIMITS = {
  name: 40,
  giftMessage: 300,
  email: 254,
} as const

/** Oldest supported birth date (lunar new year data starts in 1924) */
export const MIN_BIRTH_DATE = '1924-01-01'

/** metadata.product value for personalized reading checkouts */
export const READING_PRODUCT = 'personal_reading'

export type ValidationResult =
  | { ok: true; input: ReadingInput }
  | { ok: false; error: string }

// Letters (any script), combining marks, spaces, apostrophes, periods, hyphens
const NAME_PATTERN = /^[\p{L}\p{M}][\p{L}\p{M}' .’-]*$/u
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ISO_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/

function isReadingType(value: unknown): value is ReadingType {
  return typeof value === 'string' && value in READING_TYPES
}

/** Collapse whitespace and trim; returns '' for non-strings */
function cleanText(value: unknown): string {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : ''
}

function validateName(name: string, field: string): string | null {
  if (!name) return `${field} is required`
  if (name.length > READING_LIMITS.name) return `${field} must be ${READING_LIMITS.name} characters or fewer`
  if (!NAME_PATTERN.test(name)) return `${field} can only contain letters, spaces, hyphens and apostrophes`
  return null
}

/** Today's date as YYYY-MM-DD in UTC */
export function todayIso(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10)
}

/**
 * Check that a string is a real calendar date (YYYY-MM-DD) between
 * MIN_BIRTH_DATE and today. Returns an error message or null.
 */
export function validateBirthDate(value: string, now: Date = new Date()): string | null {
  const match = ISO_DATE_PATTERN.exec(value)
  if (!match) return 'Birth date must be a valid date'

  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])]
  const date = new Date(Date.UTC(year, month - 1, day))
  const isRealDate =
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  if (!isRealDate) return 'Birth date must be a valid date'

  if (value < MIN_BIRTH_DATE) return 'Birth dates before 1924 are not supported'
  if (value > todayIso(now)) return 'Birth date cannot be in the future'
  return null
}

/**
 * Validate and normalize a checkout request (client form or server body).
 * The server always re-runs this — never trust the browser's validation.
 */
export function validateReadingInput(raw: unknown, now: Date = new Date()): ValidationResult {
  if (!raw || typeof raw !== 'object') return { ok: false, error: 'Missing reading details' }
  const body = raw as Record<string, unknown>

  if (!isReadingType(body.readingType)) return { ok: false, error: 'Unknown reading type' }
  const config = READING_TYPES[body.readingType]

  const rawNames = Array.isArray(body.names) ? body.names : []
  const rawDates = Array.isArray(body.birthDates) ? body.birthDates : []
  if (rawNames.length !== config.people || rawDates.length !== config.people) {
    return { ok: false, error: `This reading needs ${config.people} name(s) and birth date(s)` }
  }

  const names = rawNames.map(cleanText)
  for (const name of names) {
    const error = validateName(name, 'Name')
    if (error) return { ok: false, error }
  }

  const birthDates = rawDates.map(cleanText)
  for (const birthDate of birthDates) {
    const error = validateBirthDate(birthDate, now)
    if (error) return { ok: false, error }
  }

  const email = cleanText(body.email).toLowerCase()
  if (!email || email.length > READING_LIMITS.email || !EMAIL_PATTERN.test(email)) {
    return { ok: false, error: 'Please enter a valid email address' }
  }

  const isGift = body.isGift === true
  const input: ReadingInput = { type: config.type, names, birthDates, email, isGift }

  if (isGift) {
    const recipientName = cleanText(body.recipientName) || names[0]!
    const recipientError = validateName(recipientName, 'Recipient name')
    if (recipientError) return { ok: false, error: recipientError }

    // Keep line breaks in the gift message, but normalize everything else
    const giftMessage = typeof body.giftMessage === 'string'
      ? body.giftMessage.replace(/\r\n?/g, '\n').replace(/[^\S\n]+/g, ' ').trim()
      : ''
    if (giftMessage.length > READING_LIMITS.giftMessage) {
      return { ok: false, error: `Gift message must be ${READING_LIMITS.giftMessage} characters or fewer` }
    }

    input.recipientName = recipientName
    if (giftMessage) input.giftMessage = giftMessage
  }

  return { ok: true, input }
}

// ============================================
// STRIPE METADATA CODEC
// ============================================
// All inputs travel through Stripe session metadata so the webhook and
// background function never depend on client-supplied data.
// Limits: 50 keys, 40-char keys, 500-char values.

export function toStripeMetadata(input: ReadingInput, signSlug: string): Record<string, string> {
  return {
    product: READING_PRODUCT,
    reading_type: input.type,
    sign_slug: signSlug,
    names: JSON.stringify(input.names),
    birth_dates: JSON.stringify(input.birthDates),
    email: input.email,
    is_gift: input.isGift ? 'true' : 'false',
    recipient_name: input.recipientName ?? '',
    gift_message: input.giftMessage ?? '',
  }
}

function parseJsonArray(value: string | undefined): unknown[] {
  if (!value) return []
  try {
    const parsed: unknown = JSON.parse(value)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

/**
 * Rebuild (and re-validate) a ReadingInput from Stripe metadata.
 * Returns null if this session isn't a reading or the data is invalid.
 * Birth dates are not re-checked against "today" beyond basic validity.
 */
export function fromStripeMetadata(metadata: Record<string, string> | null | undefined): ReadingInput | null {
  if (!metadata || metadata.product !== READING_PRODUCT) return null

  const result = validateReadingInput({
    readingType: metadata.reading_type,
    names: parseJsonArray(metadata.names),
    birthDates: parseJsonArray(metadata.birth_dates),
    email: metadata.email,
    isGift: metadata.is_gift === 'true',
    recipientName: metadata.recipient_name,
    giftMessage: metadata.gift_message,
  })
  return result.ok ? result.input : null
}

/** Product label for GA4/analytics, falling back to the legacy static report */
export function getProductLabel(metadata: Record<string, string> | null | undefined): string {
  const type = metadata?.reading_type
  if (metadata?.product === READING_PRODUCT && isReadingType(type)) return READING_TYPES[type].label
  return 'Elemental Blueprint'
}
