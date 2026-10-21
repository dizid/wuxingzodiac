// ============================================
// CLAUDE TEXT GENERATION (structured JSON)
// ============================================
// Claude Sonnet 5.5 with structured outputs, so the response always
// matches the reading's JSON schema. Streams to avoid HTTP timeouts on
// long outputs (thinking + ~5k tokens of reading text).
// Requires ANTHROPIC_API_KEY.

import Anthropic from '@anthropic-ai/sdk'

/** Model used for readings */
export const READING_MODEL = 'claude-sonnet-5-5'

/** Adaptive thinking depth. Medium: a little planning for structure and voice without slow, costly runs. */
const READING_EFFORT = 'medium'

export interface StructuredRequest<T> {
  system: string
  user: string
  /** JSON schema for output_config.format */
  schema: Record<string, unknown>
  /** Validates the parsed JSON; throws if it doesn't meet the reading's rules */
  parse: (raw: unknown) => T
  /** Covers thinking + the JSON reply */
  maxTokens?: number
}

// One extra attempt if the model's JSON fails our own validation or is cut off.
// (The SDK already retries 429/5xx/network errors itself.)
const MAX_ATTEMPTS = 2

export async function generateStructured<T>(
  request: StructuredRequest<T>,
  client: Anthropic = new Anthropic(),
): Promise<T> {
  let lastError: unknown

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const response = await client.messages
      .stream({
        model: READING_MODEL,
        max_tokens: request.maxTokens ?? 32000,
        system: request.system,
        messages: [{ role: 'user', content: request.user }],
        output_config: {
          effort: READING_EFFORT,
          format: { type: 'json_schema', schema: request.schema },
        },
      })
      .finalMessage()

    if (response.stop_reason === 'refusal') {
      // stop_details isn't in this SDK version's types yet
      const category = (response as { stop_details?: { category?: string | null } }).stop_details?.category
      throw new Error(`Claude declined to write this reading (${category ?? 'no category'})`)
    }
    if (response.stop_reason === 'max_tokens') {
      lastError = new Error('Reading output was cut off (max_tokens)')
      continue
    }

    // Read by block type: the response starts with (empty) thinking blocks
    const text = response.content
      .map((block) => (block.type === 'text' ? block.text : ''))
      .join('')

    try {
      return request.parse(JSON.parse(text))
    } catch (error) {
      lastError = error
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Reading generation failed')
}
