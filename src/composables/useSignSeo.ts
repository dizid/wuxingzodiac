import { useHead } from '@unhead/vue'
import type { SignProfile, SignContent } from '@/types'

const SITE_NAME = 'Wu Xing Zodiac'
const SITE_URL = 'https://wuxingzodiac.me'

/**
 * SEO for individual zodiac sign pages.
 * Sets meta tags, OG tags, Twitter card, canonical URL, and JSON-LD.
 */
export function useSignSeo(profile: SignProfile, content?: SignContent | null) {
  const title = `${profile.name} Chinese Zodiac: Personality, Compatibility & More | ${SITE_NAME}`
  const description = content?.personality?.overview
    ? `${profile.name} — ${profile.tagline}. ${content.personality.overview.slice(0, 120)}...`
    : `${profile.name} — ${profile.tagline}. Discover the personality, compatibility, career paths, and lucky traits of the ${profile.element} ${profile.animal} in Chinese astrology.`
  const url = `${SITE_URL}/zodiac/${profile.slug}`
  const image = `${SITE_URL}/og/${profile.slug}.png`

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: SITE_NAME },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
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
              headline: title,
              description,
              image,
              url,
              publisher: {
                '@type': 'Organization',
                name: SITE_NAME,
                url: SITE_URL,
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': url,
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE_URL,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Zodiac Signs',
                  item: `${SITE_URL}/zodiac`,
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: profile.name,
                  item: url,
                },
              ],
            },
          ],
        }),
      },
    ],
  })
}

/**
 * SEO for generic pages (calculator, compatibility, blog, etc.).
 */
export function usePageSeo(title: string, description: string, path: string) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${SITE_URL}${path}`

  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}

/**
 * SEO specifically for the home page with WebSite schema + SearchAction.
 */
export function useHomeSeo() {
  const title = `${SITE_NAME} — Discover Your Chinese Zodiac Sign & Element`
  const description = 'Explore all 60 Chinese zodiac sign combinations across the five elements: Wood, Fire, Earth, Metal, and Water. Find your sign, check compatibility, and unlock ancient wisdom.'

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:image', content: `${SITE_URL}/og/home.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: `${SITE_URL}/og/home.png` },
    ],
    link: [
      { rel: 'canonical', href: SITE_URL },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: SITE_NAME,
          url: SITE_URL,
          description,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${SITE_URL}/zodiac/{search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        }),
      },
    ],
  })
}
