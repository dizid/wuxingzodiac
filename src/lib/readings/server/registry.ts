// ============================================
// READING TYPE REGISTRY
// ============================================
// One prompt file + one template file per reading type. To add a type
// (relationship, year-2027, child): create prompts/<type>.ts and
// templates/<type>.ts, register it here, then flip `available` in ../types.

import type Anthropic from '@anthropic-ai/sdk'
import type { ReadingType } from '../types'
import type { ReadingContext } from './context'
import { generateStructured } from './generate-text'
import {
  PERSONAL_SCHEMA,
  PERSONAL_SYSTEM_PROMPT,
  buildPersonalUserMessage,
  parsePersonalContent,
} from './prompts/personal'
import { renderPersonalHtml } from './templates/personal'

export interface ReadingDefinition {
  /** Ask Claude for this type's structured content */
  generateContent(ctx: ReadingContext, client?: Anthropic): Promise<unknown>
  /** Validate saved/generated content and render the full HTML document */
  renderHtml(ctx: ReadingContext, content: unknown): string
}

const DEFINITIONS: Partial<Record<ReadingType, ReadingDefinition>> = {
  personal: {
    generateContent: (ctx, client) =>
      generateStructured(
        {
          system: PERSONAL_SYSTEM_PROMPT,
          user: buildPersonalUserMessage(ctx),
          schema: PERSONAL_SCHEMA,
          parse: parsePersonalContent,
        },
        client,
      ),
    renderHtml: (ctx, content) => renderPersonalHtml(ctx, parsePersonalContent(content)),
  },
}

export function getReadingDefinition(type: ReadingType): ReadingDefinition {
  const definition = DEFINITIONS[type]
  if (!definition) throw new Error(`Reading type "${type}" is not implemented yet`)
  return definition
}
