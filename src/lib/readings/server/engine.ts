// ============================================
// READING ENGINE
// ============================================
// input → context → Claude content → HTML → PDF.
// Used by the Netlify background function and the local sample script.

import type Anthropic from '@anthropic-ai/sdk'
import type { ReadingInput } from '../types'
import { buildReadingContext, type ReadingContext } from './context'
import { getReadingDefinition } from './registry'
import { renderPdf } from './render-pdf'

export interface RenderedReading {
  context: ReadingContext
  content: unknown
  html: string
  pdf: Buffer
}

export interface EngineOptions {
  client?: Anthropic
  /** Override "today" (outlook framing, cover date) */
  now?: Date
}

/** Generate the text with Claude only (no rendering) — lets callers save it before rendering. */
export async function generateReadingContent(input: ReadingInput, options: EngineOptions = {}): Promise<unknown> {
  const context = await buildReadingContext(input, options.now)
  return getReadingDefinition(input.type).generateContent(context, options.client)
}

/** Render previously generated content to HTML + PDF (no Claude call). */
export async function renderReading(
  input: ReadingInput,
  content: unknown,
  options: EngineOptions = {},
): Promise<RenderedReading> {
  const context = await buildReadingContext(input, options.now)
  const html = getReadingDefinition(input.type).renderHtml(context, content)
  const pdf = await renderPdf(html)
  return { context, content, html, pdf }
}

/** Full pipeline: generate with Claude, then render to PDF. */
export async function generateReading(input: ReadingInput, options: EngineOptions = {}): Promise<RenderedReading> {
  const content = await generateReadingContent(input, options)
  return renderReading(input, content, options)
}
