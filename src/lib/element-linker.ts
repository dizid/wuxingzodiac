/**
 * element-linker.ts
 *
 * Auto-links standalone element mentions in HTML prose text.
 * Wraps "Wood", "Fire", "Earth", "Metal", "Water" (case-sensitive, whole words)
 * in anchor tags pointing to their zodiac element pages.
 *
 * Safe approach: protects existing HTML tags by replacing them with placeholders
 * before linking, then restores them. This prevents double-linking or corrupting
 * attributes that contain element names.
 */

interface ElementConfig {
  color: string
  path: string
}

// Element display name → config
const ELEMENT_CONFIG: Record<string, ElementConfig> = {
  Wood:  { color: '#22c55e', path: '/zodiac/element/wood' },
  Fire:  { color: '#f97316', path: '/zodiac/element/fire' },
  Earth: { color: '#d97706', path: '/zodiac/element/earth' },
  Metal: { color: '#94a3b8', path: '/zodiac/element/metal' },
  Water: { color: '#3b82f6', path: '/zodiac/element/water' },
}

// Matches the five element words as whole words (case-sensitive)
const ELEMENT_PATTERN = /\b(Wood|Fire|Earth|Metal|Water)\b/g

/**
 * Find all HTML tags (opening, closing, self-closing) and replace them with
 * unique placeholder tokens so the element pattern can't match inside tags.
 */
function protectTags(html: string): { protected: string; tagMap: Map<string, string> } {
  const tagMap = new Map<string, string>()
  let index = 0

  // Matches any HTML tag including attributes (non-greedy)
  const TAG_PATTERN = /<[^>]+>/g

  const protected_ = html.replace(TAG_PATTERN, (match) => {
    const token = `\x00TAG_${index++}\x00`
    tagMap.set(token, match)
    return token
  })

  return { protected: protected_, tagMap }
}

/**
 * Restore placeholder tokens back to original HTML tags.
 */
function restoreTags(text: string, tagMap: Map<string, string>): string {
  let result = text
  for (const [token, tag] of tagMap) {
    // Tokens are literal strings, escape for use in RegExp
    result = result.split(token).join(tag)
  }
  return result
}

/**
 * Wrap standalone element mentions in the text (outside HTML tags) with
 * anchor links to their zodiac element pages.
 *
 * @param text - Raw HTML or plain text string.
 * @returns HTML string with element names wrapped in anchor tags.
 *
 * @example
 * linkElementMentions('The Fire element brings passion.')
 * // Returns: 'The <a href="/zodiac/element/fire" class="element-link" style="color:#f97316;...">Fire</a> element brings passion.'
 */
export function linkElementMentions(text: string): string {
  // Step 1: protect existing HTML tags from modification
  const { protected: safeText, tagMap } = protectTags(text)

  // Step 2: replace element mentions outside tags with anchor links
  const linked = safeText.replace(ELEMENT_PATTERN, (match) => {
    const config = ELEMENT_CONFIG[match]
    if (!config) return match

    return `<a href="${config.path}" class="element-link" style="color:${config.color};text-decoration:none;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${match}</a>`
  })

  // Step 3: restore the original HTML tags
  return restoreTags(linked, tagMap)
}
