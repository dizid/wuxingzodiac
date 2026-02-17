import { useHead } from '@unhead/vue'
import type { SignProfile, CompatibilityResult } from '@/types'

const SITE_NAME = 'Wu Xing Zodiac'
const SITE_URL = 'https://wuxingzodiac.me'

/**
 * SEO for compatibility pair pages.
 * Canonical order is alphabetical by slug to avoid duplicate URLs.
 */
export function useCompatibilitySeo(
  profileA: SignProfile,
  profileB: SignProfile,
  result: CompatibilityResult
) {
  // Canonical order: alphabetical by slug
  const sorted = [profileA, profileB].sort((a, b) => a.slug.localeCompare(b.slug))
  const first = sorted[0] as SignProfile
  const second = sorted[1] as SignProfile

  const title = `${first.name} & ${second.name} Compatibility: ${result.score}% | ${SITE_NAME}`
  const description = `${first.name} and ${second.name} compatibility score: ${result.score}/100. ${result.summary.slice(0, 130)}...`
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
          ],
        }),
      },
    ],
  })
}
