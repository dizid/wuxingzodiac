import { useHead } from '@unhead/vue'
import { computed, type Ref } from 'vue'
import type { SignProfile, SignContentV2 } from '@/types'

const SITE_NAME = 'Wu Xing Zodiac'
const SITE_URL = 'https://wuxingzodiac.me'

// Shared author/expert Person schema used across all sign pages
const EDITORIAL_PERSON = {
  '@type': 'Person',
  name: 'Wu Xing Zodiac Editorial Team',
  url: `${SITE_URL}/about`,
  description:
    'Expert team specializing in Chinese astrology, BaZi, and Wu Xing five-element theory',
}

/** Capitalize first letter. */
function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/** Human-readable element label, e.g. "Fire" */
function elementLabel(element: string): string {
  return cap(element)
}

/**
 * Build the three FAQ questions for a sign page.
 * Uses content data when available for richer answers.
 */
function buildFaqEntities(
  profile: SignProfile,
  description: string,
  content?: SignContentV2 | null,
): object[] {
  const elLabel = elementLabel(profile.element)

  // Best-match answer: prefer content data, fall back to generic phrasing
  const bestMatchName = content?.atAGlance?.bestMatch
    ? cap(content.atAGlance.bestMatch.replace(/-/g, ' '))
    : `signs with complementary elements`

  const compatibilityAnswer = content?.atAGlance?.bestMatch
    ? `${profile.name} is most compatible with ${bestMatchName} and other signs that provide balance and harmony through elemental affinity. The ${elLabel} element shapes how ${profile.name} connects romantically and in friendship.`
    : `${profile.name} is most compatible with signs that provide elemental balance and harmonious animal relationships. Consult the full compatibility chart for detailed pairings.`

  const elementAnswer = `${profile.name} belongs to the ${elLabel} element in the Wu Xing (Five Elements) system of Chinese astrology. ${elLabel} energy shapes the core character, motivations, and life path of this sign.`

  return [
    {
      '@type': 'Question',
      name: `What is the ${profile.name} personality?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: description,
      },
    },
    {
      '@type': 'Question',
      name: `Who is ${profile.name} most compatible with?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: compatibilityAnswer,
      },
    },
    {
      '@type': 'Question',
      name: `What element is ${profile.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: elementAnswer,
      },
    },
  ]
}

/**
 * Build the full JSON-LD @graph array for a sign page.
 */
function buildSignGraph(
  profile: SignProfile,
  title: string,
  description: string,
  url: string,
  image: string,
  content?: SignContentV2 | null,
): object[] {
  return [
    // Primary Article schema
    {
      '@type': 'Article',
      headline: title,
      description,
      image,
      url,
      author: {
        '@type': 'Person',
        name: 'Wu Xing Zodiac Editorial Team',
      },
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
    // Expert author / Person schema
    EDITORIAL_PERSON,
    // Breadcrumb navigation
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Zodiac Signs', item: `${SITE_URL}/zodiac` },
        { '@type': 'ListItem', position: 3, name: profile.name, item: url },
      ],
    },
    // FAQ schema with 3 sign-specific questions
    {
      '@type': 'FAQPage',
      mainEntity: buildFaqEntities(profile, description, content),
    },
  ]
}

/**
 * SEO for individual zodiac sign pages.
 * Sets meta tags, OG tags, Twitter card, canonical URL, and JSON-LD.
 */
export function useSignSeo(profile: SignProfile, content?: SignContentV2 | null) {
  const title = `${profile.name} Chinese Zodiac: Personality, Compatibility & More | ${SITE_NAME}`
  const description = content?.personality?.body
    ? `${profile.name} — ${profile.tagline}. ${content.personality.body.slice(0, 120)}...`
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
          '@graph': buildSignGraph(profile, title, description, url, image, content),
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
 * Reactive version of useSignSeo — call once in setup with refs.
 * useHead is invoked once and reactively updates when refs change.
 */
export function useSignSeoReactive(
  profileRef: Ref<SignProfile | undefined>,
  contentRef: Ref<SignContentV2 | null>,
) {
  useHead(computed(() => {
    const profile = profileRef.value
    if (!profile) return {}
    const content = contentRef.value
    const title = `${profile.name} Chinese Zodiac: Personality, Compatibility & More | ${SITE_NAME}`
    const description = content?.personality?.body
      ? `${profile.name} — ${profile.tagline}. ${content.personality.body.slice(0, 120)}...`
      : `${profile.name} — ${profile.tagline}. Discover the personality, compatibility, career paths, and lucky traits of the ${profile.element} ${profile.animal} in Chinese astrology.`
    const url = `${SITE_URL}/zodiac/${profile.slug}`
    const image = `${SITE_URL}/og/${profile.slug}.png`

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: 'article' },
        { property: 'og:site_name', content: SITE_NAME },
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
            '@graph': buildSignGraph(profile, title, description, url, image, content),
          }),
        },
      ],
    }
  }))
}

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
