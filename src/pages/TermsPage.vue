<script setup lang="ts">
import { usePageSeo } from '@/composables/useSignSeo'

usePageSeo(
  'Terms of Service',
  'Terms of service for Wu Xing Zodiac — digital product purchases, content disclaimer, and usage terms.',
  '/terms',
)
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 class="font-display text-4xl md:text-5xl font-bold text-ash-100 mb-4">
        Terms of Service
      </h1>
      <p class="text-ash-500 mb-10">Last updated: February 2026</p>

      <div class="space-y-8 text-ash-300 leading-relaxed">
        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Acceptance of Terms</h2>
          <p>
            By accessing and using Wu Xing Zodiac ("the Site"), you accept and agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use the Site.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Content Disclaimer</h2>
          <p>
            All zodiac profiles, compatibility analyses, personality descriptions, and other astrological
            content on this Site are provided for <strong class="text-ash-100">entertainment and educational
            purposes only</strong>. This content should not be considered as professional medical, financial,
            psychological, or legal advice. Always consult qualified professionals for matters relating to
            health, finances, or legal decisions.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Digital Product Purchases</h2>
          <p class="mb-3">
            The Elemental Blueprint PDF reports are digital products delivered electronically. By purchasing
            a report, you agree to the following:
          </p>
          <ul class="list-disc list-inside space-y-2 text-ash-400">
            <li>All sales of digital products are <strong class="text-ash-200">final</strong>. Due to the nature of digital downloads, refunds are not available once the PDF has been delivered.</li>
            <li>Download links are valid for 30 days from the date of purchase.</li>
            <li>Reports are for personal use only and may not be redistributed, resold, or shared publicly.</li>
            <li>Payment processing is handled securely by Stripe. We do not store your payment details.</li>
          </ul>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Intellectual Property</h2>
          <p>
            All content on this Site — including text, graphics, design elements, zodiac profiles, and
            compatibility analyses — is the intellectual property of Wu Xing Zodiac. You may not reproduce,
            distribute, or create derivative works from our content without prior written permission, except
            for personal, non-commercial use.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Affiliate Links</h2>
          <p>
            Some links on this Site are affiliate links. When you make a purchase through an affiliate link,
            we may earn a small commission at no additional cost to you. Affiliate products are recommended
            based on their relevance to your zodiac sign and element.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Limitation of Liability</h2>
          <p>
            Wu Xing Zodiac is provided "as is" without warranties of any kind, either express or implied.
            We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.
            In no event shall Wu Xing Zodiac be liable for any indirect, incidental, special, or consequential
            damages arising from your use of the Site or any digital products purchased through it.
          </p>
        </section>

        <section>
          <h2 class="font-display text-xl font-bold text-ash-100 mb-3">Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Changes will be posted on this
            page with an updated "Last updated" date. Continued use of the Site after changes constitutes
            acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
