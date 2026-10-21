<script setup lang="ts">
// /reading: the one landing page for the WuXing Personal Reading. Every CTA
// and social post links here. READING_LIVE (src/lib/reading-offer.ts) decides
// whether the main action is the launch waitlist or the order form.
import { ref, nextTick, defineAsyncComponent, type Component } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@unhead/vue'
import NewsletterForm from '@/components/ui/NewsletterForm.vue'
import { usePageSeo } from '@/composables/useSignSeo'
import { useAnalytics } from '@/composables/useAnalytics'
import {
  READING_LIVE,
  READING_PRICE,
  READING_PAGE_COUNT,
  READING_WAITLIST_TAG,
} from '@/lib/reading-offer'

const siteUrl = 'https://wuxingzodiac.me'

usePageSeo(
  'WuXing Personal Reading',
  `An ${READING_PAGE_COUNT}-page personalized PDF based on your birth-year Chinese zodiac sign and the five elements, written to you by name. ${READING_PRICE}, by email.`,
  '/reading',
)

// Social posts link here, so give link previews an image
useHead({
  meta: [
    { property: 'og:image', content: `${siteUrl}/og/home.png` },
    { name: 'twitter:image', content: `${siteUrl}/og/home.png` },
  ],
})

const { trackEvent } = useAnalytics()

// The order form (name, birth date, email → Stripe checkout) ships with the
// personal-reading code, which isn't on every branch. A glob instead of a static
// import lets this page build either way; without the form it stays on the waitlist.
const intakeFormModules = import.meta.glob<{ default: Component }>('@/components/readings/ReadingIntakeForm.vue')
const loadIntakeForm = Object.values(intakeFormModules)[0]
const ReadingIntakeForm = loadIntakeForm ? defineAsyncComponent(loadIntakeForm) : null
// Sell only when the flag is on AND the form exists
const orderForm = READING_LIVE ? ReadingIntakeForm : null
const canOrder = orderForm !== null

const showIntakeForm = ref(false)
const actionSection = ref<HTMLElement | null>(null)

function openIntakeForm() {
  showIntakeForm.value = true
  trackEvent('reading_form_open', { source: 'reading_page' })
}

// Bottom-of-page button: jump back to the main action (and open the form when selling)
async function goToMainAction() {
  if (canOrder) openIntakeForm()
  await nextTick()
  actionSection.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

// Rendered from the sample reading PDF (test name "Anna", born 14 May 1990)
const samplePages = [
  { src: '/reading/sample-anna-cover.jpg', caption: 'The cover, with your name and sign', alt: 'Sample cover page: a reading for Anna, Metal Horse, The Armored Charger, with the Chinese characters 庚午' },
  { src: '/reading/sample-anna-elements.jpg', caption: 'Your five elements', alt: 'Sample page "Your Five Elements": element strength bars for Metal, Water, Earth, Wood and Fire, with what each means for Anna' },
  { src: '/reading/sample-anna-love.jpg', caption: 'How you love', alt: 'Sample page "How You Love": love style, what Anna needs, her best matches and what to watch out for' },
]

const insidePages = [
  { title: 'Cover', detail: 'Your name, your sign and its Chinese characters.' },
  { title: 'Your five elements', detail: 'Your element balance, your strongest and weakest element, and how to bring in more of what you lack.' },
  { title: 'Core personality', detail: 'What defines you and how others experience you.' },
  { title: 'Strengths and blind spots', detail: 'Your edge, and the habits that hold you back.' },
  { title: 'How you love', detail: 'Your love style, what you need and your best matches.' },
  { title: 'Career and money', detail: 'Where you thrive and how you handle money.' },
  { title: 'Your 2026 Fire Horse year', detail: 'Opportunities, cautions and what to focus on until the next Lunar New Year.' },
  { title: 'Your next steps', detail: 'Five practical moves for the next 90 days.' },
]

const faqs = [
  {
    question: 'What is the WuXing Personal Reading?',
    answer: `An ${READING_PAGE_COUNT}-page PDF written to you by name. It looks at the Chinese zodiac sign of your birth year (your element and animal, for example Metal Horse) through the five elements, Wu Xing: your personality, strengths and blind spots, love, career and money, your 2026 outlook and five practical next steps. It costs ${READING_PRICE}, once.`,
  },
  {
    question: "What isn't it?",
    answer: "It isn't a full birth chart and doesn't use your birth time. It isn't a prediction or a guarantee, and it isn't medical, financial, legal or psychological advice. Your birth day and month only matter if you were born in January or February, to place you on the right side of the Lunar New Year.",
  },
  // The checkout steps only make sense once the reading is on sale
  ...(canOrder ? [{
    question: 'How is it delivered?',
    answer: 'By email, as a PDF. You enter your first name, birth date and email, pay securely through Stripe, and your reading arrives in your inbox, usually within a few minutes.',
  }] : []),
  ...(canOrder ? [] : [{
    question: 'When can I get it?',
    answer: "It isn't on sale yet. Leave your email at the top of this page and we'll let you know when it launches.",
  }]),
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero + main action -->
    <section class="px-4 pt-16 pb-12 md:pt-24 text-center">
      <p class="text-ash-400 text-xs font-semibold uppercase tracking-widest mb-3">
        WuXing Personal Reading
      </p>
      <h1 class="multi-element-text font-display text-4xl md:text-6xl font-bold mb-5">
        Your personal WuXing reading
      </h1>
      <p class="text-ash-300 text-lg md:text-xl max-w-2xl mx-auto mb-3">
        An {{ READING_PAGE_COUNT }}-page personalized PDF based on your birth-year sign and the five elements,
        written to you by name.
      </p>
      <p class="text-ash-200 text-lg mb-8">
        <span class="font-semibold">{{ READING_PRICE }}</span>
        <span class="text-ash-400"> &middot; delivered by email</span>
      </p>

      <div id="reading-action" ref="actionSection" class="max-w-xl mx-auto">
        <!-- Selling: the button opens the order form -->
        <template v-if="orderForm">
          <div v-if="showIntakeForm" class="glass rounded-2xl p-6 md:p-8">
            <component :is="orderForm" reading-type="personal" />
          </div>
          <button
            v-else
            class="btn-element text-lg px-8 py-3"
            @click="openIntakeForm"
          >
            Get your reading &mdash; {{ READING_PRICE }}
          </button>
        </template>

        <!-- Not on sale yet: launch waitlist through the newsletter signup -->
        <template v-else>
          <p class="text-ash-400 mb-4">
            Not on sale yet. Leave your email and we&rsquo;ll let you know when it launches.
          </p>
          <NewsletterForm
            source-page="reading"
            :tag="READING_WAITLIST_TAG"
            button-label="Get notified when it launches"
            success-detail="You'll also get our occasional zodiac newsletter. Unsubscribe anytime."
            privacy-note="We'll email you when it launches, plus the occasional zodiac newsletter. Unsubscribe anytime."
          />
        </template>

        <RouterLink
          to="/calculator"
          class="inline-block mt-6 text-sm font-medium text-ash-300 underline underline-offset-4 hover:text-ash-100 transition-colors"
        >
          Try the free sign calculator &rarr;
        </RouterLink>
      </div>
    </section>

    <!-- Sample pages: swipe on mobile, three columns from sm up -->
    <section class="px-4 py-10 max-w-5xl mx-auto">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-center text-ash-100 mb-2">
        A look inside
      </h2>
      <p class="text-ash-400 text-sm text-center mb-8">
        Sample pages from a reading for Anna, a Metal Horse born in 1990. Yours is written for you.
      </p>
      <!-- Focusable so keyboard users can scroll the strip on mobile -->
      <div
        class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible"
        tabindex="0"
        role="region"
        aria-label="Sample pages"
      >
        <figure
          v-for="page in samplePages"
          :key="page.src"
          class="w-[75%] shrink-0 snap-center sm:w-auto"
        >
          <img
            :src="page.src"
            :alt="page.alt"
            width="640"
            height="906"
            loading="lazy"
            class="w-full h-auto rounded-xl ring-1 ring-ash-800 shadow-lg"
          />
          <figcaption class="text-ash-400 text-sm text-center mt-3">{{ page.caption }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- What's inside -->
    <section class="px-4 py-10 max-w-3xl mx-auto">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-center text-ash-100 mb-8">
        What&rsquo;s inside
      </h2>
      <ol class="glass rounded-2xl p-6 md:p-8 space-y-4">
        <li
          v-for="(page, index) in insidePages"
          :key="page.title"
          class="flex gap-4"
        >
          <span class="font-display font-bold text-ash-400 w-6 shrink-0 text-right">{{ index + 1 }}</span>
          <div>
            <p class="text-ash-100 font-semibold">{{ page.title }}</p>
            <p class="text-ash-400 text-sm">{{ page.detail }}</p>
          </div>
        </li>
      </ol>
    </section>

    <!-- FAQ -->
    <section class="px-4 py-10 max-w-3xl mx-auto">
      <h2 class="font-display text-2xl md:text-3xl font-bold text-center text-ash-100 mb-8">
        Questions
      </h2>
      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.question"
          class="glass rounded-xl p-6"
        >
          <h3 class="font-display font-bold text-ash-100 text-lg mb-2">{{ faq.question }}</h3>
          <p class="text-ash-400 text-sm leading-relaxed">{{ faq.answer }}</p>
        </div>
      </div>
    </section>

    <!-- Repeat the main action + disclaimer -->
    <section class="px-4 pt-6 pb-20 max-w-3xl mx-auto text-center">
      <button
        class="btn-element text-lg px-8 py-3"
        @click="goToMainAction"
      >
        <template v-if="canOrder">Get your reading &mdash; {{ READING_PRICE }}</template>
        <template v-else>Get notified when it launches</template>
      </button>
      <p class="text-ash-400 text-sm mt-8">
        The WuXing Personal Reading is for entertainment and self-reflection.
      </p>
    </section>
  </div>
</template>
