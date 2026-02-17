<script setup lang="ts">
import { usePageSeo } from '@/composables/useSignSeo'

usePageSeo(
  'Privacy Policy',
  'Privacy policy for Wu Xing Zodiac — how we handle your data, analytics, and payments.',
  '/privacy',
)
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 class="font-display text-4xl md:text-5xl font-bold text-ash-100 mb-4">
        Privacy Policy
      </h1>
      <p class="text-ash-500 mb-10">Last updated: February 2026</p>

      <div class="space-y-8 text-ash-300 leading-relaxed">
        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Overview</h2>
          <p>
            Wu Xing Zodiac ("we", "us", "our") respects your privacy. This policy explains what data
            we collect, how we use it, and your rights regarding your personal information.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Data We Collect</h2>
          <p class="mb-3">We collect minimal data to operate this site:</p>
          <ul class="list-disc list-inside space-y-2 text-ash-400">
            <li><strong class="text-ash-200">Analytics data:</strong> We use Google Analytics 4 (GA4) to understand site usage. This includes anonymous page views, session duration, and general location data. No personally identifiable information is collected through analytics.</li>
            <li><strong class="text-ash-200">Email address:</strong> If you subscribe to our newsletter via Buttondown, your email is stored by Buttondown for email delivery purposes only. If you purchase an Elemental Blueprint report, your email is collected by Stripe for payment processing and receipt delivery.</li>
            <li><strong class="text-ash-200">Payment information:</strong> All payment processing is handled by Stripe. We never store, see, or have access to your credit card details.</li>
          </ul>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">No Account Required</h2>
          <p>
            Wu Xing Zodiac does not require you to create an account. All zodiac profiles, compatibility
            tools, and the calculator are freely accessible without providing any personal information.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Cookies</h2>
          <p>
            We use cookies for Google Analytics 4 to track anonymous usage patterns. These cookies do not
            contain personally identifiable information. You can block cookies through your browser settings
            without affecting the core functionality of this site.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Third-Party Services</h2>
          <ul class="list-disc list-inside space-y-2 text-ash-400">
            <li><strong class="text-ash-200">Google Analytics 4:</strong> Anonymous usage analytics.</li>
            <li><strong class="text-ash-200">Stripe:</strong> Secure payment processing for digital product purchases.</li>
            <li><strong class="text-ash-200">Buttondown:</strong> Newsletter subscription management and email delivery.</li>
            <li><strong class="text-ash-200">Netlify:</strong> Website hosting and serverless function execution.</li>
          </ul>
          <p class="mt-3">
            Each of these services has their own privacy policy governing how they handle your data.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Your Rights</h2>
          <p>
            You can unsubscribe from our newsletter at any time using the link in any email. If you wish to
            request deletion of any data associated with a purchase, please contact us and we will process your
            request in accordance with applicable laws.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Contact</h2>
          <p>
            For questions about this privacy policy, please reach out via the contact information on our site.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
