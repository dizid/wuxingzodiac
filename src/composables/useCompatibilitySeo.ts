import { useHead } from '@unhead/vue'
import type { SignProfile, CompatibilityResult, EnhancedCompatibilityResult } from '@/types'

const SITE_NAME = 'Wu Xing Zodiac'
const SITE_URL = 'https://wuxingzodiac.me'

/**
 * Options for enhanced compatibility SEO metadata.
 */
interface CompatibilitySeoOptions {
  /** Human-readable match label, e.g. "Soulmate Energy" or "Toxic but Addictive". */
  matchLabel?: string
  /** Short category key from EnhancedCompatibilityResult, e.g. "soulmate". */
  matchCategory?: string
  /** Three-score breakdown from EnhancedCompatibilityResult (chemistry/support/friction). */
  breakdown?: Pick<EnhancedCompatibilityResult, 'chemistry' | 'support' | 'friction'>
}

/**
 * Build the description string, incorporating breakdown scores when available.
 */
function buildDescription(
  first: SignProfile,
  second: SignProfile,
  result: CompatibilityResult,
  options: CompatibilitySeoOptions,
): string {
  const baseDesc = result.summary.slice(0, 130)

  if (options.breakdown) {
    const { chemistry, support, friction } = options.breakdown
    return (
      `${first.name} & ${second.name}: ${result.score}/100 overall compatibility. ` +
      `Chemistry ${chemistry}%, Support ${support}%, Friction ${friction}%. ${baseDesc}...`
    )
  }

  return `${first.name} and ${second.name} compatibility score: ${result.score}/100. ${baseDesc}...`
}

/**
 * Build the page title, including the match label when available.
 * Example: "Fire Horse & Water Pig: Toxic but Addictive | Wu Xing Zodiac"
 */
function buildTitle(
  first: SignProfile,
  second: SignProfile,
  result: CompatibilityResult,
  matchLabel?: string,
): string {
  if (matchLabel) {
    return `${first.name} & ${second.name}: ${matchLabel} | ${SITE_NAME}`
  }
  return `${first.name} & ${second.name} Compatibility: ${result.score}% | ${SITE_NAME}`
}

/**
 * Build FAQ entities for the compatibility page.
 */
function buildCompatibilityFaq(
  first: SignProfile,
  second: SignProfile,
  result: CompatibilityResult,
): object[] {
  const scoreText = result.score >= 75
    ? 'highly compatible'
    : result.score >= 50
      ? 'moderately compatible'
      : 'challenging to pair'

  return [
    {
      '@type': 'Question',
      name: `Are ${first.name} and ${second.name} compatible?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `${first.name} and ${second.name} are ${scoreText} in Chinese astrology with a compatibility score of ${result.score} out of 100. ${result.summary}`,
      },
    },
    {
      '@type': 'Question',
      name: `What is the compatibility score for ${first.name} and ${second.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `The compatibility score for ${first.name} and ${second.name} is ${result.score}/100 according to Wu Xing five-element astrology principles, which analyze the interplay of elemental energies and animal personality dynamics.`,
      },
    },
  ]
}

/**
 * SEO for compatibility pair pages.
 * Canonical order is alphabetical by slug to avoid duplicate URLs.
 *
 * @param profileA - First sign profile.
 * @param profileB - Second sign profile.
 * @param result - Compatibility result (score, summary, strengths, challenges).
 * @param options - Optional enhanced metadata: matchLabel, matchCategory, breakdown scores.
 */
export function useCompatibilitySeo(
  profileA: SignProfile,
  profileB: SignProfile,
  result: CompatibilityResult,
  options: CompatibilitySeoOptions = {},
) {
  // Canonical order: alphabetical by slug
  const sorted = [profileA, profileB].sort((a, b) => a.slug.localeCompare(b.slug))
  const first = sorted[0] as SignProfile
  const second = sorted[1] as SignProfile

  const title = buildTitle(first, second, result, options.matchLabel)
  const description = buildDescription(first, second, result, options)
  const canonicalPath = `/compatibility/${first.slug}/${second.slug}`
  const url = `${SITE_URL}${canonicalPath}`

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: `${first.name} & ${second.name} Compatibility`,
              description,
              url,
              publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                url: SITE_URL,
              },
              mainEntityOfPage: { '@type': 'WebPage', '@id': url },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Compatibility', item: `${SITE_URL}/compatibility` },
                { '@type': 'ListItem', position: 3, name: `${first.name} & ${second.name}`, item: url },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: buildCompatibilityFaq(first, second, result),
            },
          ],
        }),
      },
    ],
  })
}
