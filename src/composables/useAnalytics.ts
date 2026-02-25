/**
 * GA4 event tracking composable.
 * All methods are safe to call during SSR — they no-op when window/gtag is unavailable.
 */
export function useAnalytics() {
  function trackEvent(name: string, params?: Record<string, unknown>) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, params)
    }
  }

  return {
    /** Track when a user views a zodiac sign page */
    trackSignPageView: (slug: string, animal: string, element: string) => {
      trackEvent('sign_page_view', { slug, animal, element })
    },

    /** Track when a user scrolls to or clicks a section within a sign page */
    trackSignSectionView: (slug: string, sectionName: string) => {
      trackEvent('sign_section_view', { slug, section_name: sectionName })
    },

    /** Track when a user submits the birth year calculator */
    trackCalculatorSubmit: (birthYear: number, resultSlug: string) => {
      trackEvent('calculator_submit', { birth_year: birthYear, result_slug: resultSlug })
    },

    /** Track when a user checks compatibility between two signs */
    trackCompatibilityCheck: (signA: string, signB: string, score: number) => {
      trackEvent('compatibility_check', { sign_a: signA, sign_b: signB, score })
    },

    /** Track when a user clicks an affiliate link */
    trackAffiliateClick: (program: string, productType: string, section: string) => {
      trackEvent('affiliate_click', { program, product_type: productType, section })
    },

    /** Track when an affiliate product is shown to the user */
    trackAffiliateImpression: (program: string, section: string) => {
      trackEvent('affiliate_impression', { program, section })
    },

    /** Track newsletter signup */
    trackNewsletterSignup: (sourcePage: string) => {
      trackEvent('newsletter_signup', { source_page: sourcePage })
    },

    /** Track cross-link navigation between zodiac sign pages */
    trackCrossLinkClick: (fromSlug: string, toSlug: string, linkType: string) => {
      trackEvent('cross_link_click', { from_slug: fromSlug, to_slug: toSlug, link_type: linkType })
    },

    /** Track when a user reads a blog post */
    trackBlogRead: (slug: string, title: string) => {
      trackEvent('blog_read', { slug, title })
    },

    /** Track when merch products are shown to the user */
    trackMerchImpression: (signSlug: string, productCount: number) => {
      trackEvent('merch_impression', { sign_slug: signSlug, product_count: productCount })
    },

    /** Track when a merch product is added to cart */
    trackMerchAddToCart: (productId: string, title: string, variantId: string, price: string, signSlug: string | null) => {
      trackEvent('merch_add_to_cart', { product_id: productId, product_title: title, variant_id: variantId, price, sign_slug: signSlug })
    },

    /** Track when user initiates checkout */
    trackMerchCheckout: (itemCount: number, total: string, currency: string) => {
      trackEvent('merch_checkout', { item_count: itemCount, total, currency })
    },

    /** Generic event tracker for custom events */
    trackEvent,
  }
}
