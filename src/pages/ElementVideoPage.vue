<script setup lang="ts">
// "Step into your element": a paid 20-second AI video world for one sign
// (Google Genie 4). Shows a real sample, lets the visitor pick their sign
// (or find it from a birth date) and starts Stripe Checkout.
// Copy rules (same as the reading): honest facts only, no urgency or scarcity,
// no prediction claims.
import { computed, ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { usePageSeo } from '@/composables/useSignSeo'
import { useAnalytics } from '@/composables/useAnalytics'
import { useElementTheme } from '@/composables/useElementTheme'
import { signProfiles, getProfileBySlug } from '@/lib/sign-content/profiles'
import { getZodiacFromBirthdate, getSignSlug } from '@/lib/zodiac-data'
import { worldSummary } from '@/lib/element-video/worlds'
import { ELEMENT_VIDEO_LIVE } from '@/lib/element-video/live'
import { ELEMENT_VIDEO_PRICE, ELEMENT_VIDEO_SECONDS } from '@/lib/element-video/offer'
import { READING_PATH, READING_PRICE, READING_PAGE_COUNT } from '@/lib/reading-offer'
import type { ZodiacElement } from '@/types'

const pageDescription = `Step into a ${ELEMENT_VIDEO_SECONDS}-second AI-made video world of your Chinese zodiac sign: your element's landscape, your animal in it, with sound. ${ELEMENT_VIDEO_PRICE}.`
usePageSeo('Step Into Your Element: Your Zodiac Sign as a Living World', pageDescription, '/element-video')
// Not on sale yet: keep the page out of search results (also out of the sitemap)
if (!ELEMENT_VIDEO_LIVE) {
  useHead({ meta: [{ name: 'robots', content: 'noindex' }] })
}

const { trackEvent } = useAnalytics()
const route = useRoute()

const ELEMENT_ORDER: ZodiacElement[] = ['wood', 'fire', 'earth', 'metal', 'water']
const groups = ELEMENT_ORDER.map((element) => ({
  label: `${element[0]!.toUpperCase()}${element.slice(1)}`,
  signs: signProfiles.filter((p) => p.element === element),
}))

// Fire Horse = the sample on this page and the 2026 sign
const selectedSlug = ref('fire-horse')
const birthDate = ref('')
const birthDateNote = ref('')
const busy = ref(false)
const errorMessage = ref('')

const selected = computed(() => getProfileBySlug(selectedSlug.value) ?? null)
const elementRef = computed<ZodiacElement | null>(() => selected.value?.element ?? null)
useElementTheme(elementRef)

const selectedWorld = computed(() => (selected.value ? worldSummary(selected.value.element) : ''))

onMounted(() => {
  // ?sign= from a sign page card or the Stripe cancel link (read after hydration)
  const fromQuery = route.query.sign
  if (typeof fromQuery === 'string' && getProfileBySlug(fromQuery)) selectedSlug.value = fromQuery
})

function useBirthDate() {
  birthDateNote.value = ''
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(birthDate.value)
  if (!match) return
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])]
  if (year < 1900 || year > 2100) {
    birthDateNote.value = 'Please enter a year between 1900 and 2100.'
    return
  }
  const zodiac = getZodiacFromBirthdate(year, month, day)
  selectedSlug.value = getSignSlug(zodiac.animal, zodiac.element)
  // Born before Lunar New Year = the previous zodiac year
  birthDateNote.value =
    zodiac.lunarYear !== year
      ? `Born before Lunar New Year ${year}, so your sign is ${selected.value?.name}.`
      : `Your sign is ${selected.value?.name}.`
}

async function startCheckout() {
  if (!selected.value || busy.value) return
  busy.value = true
  errorMessage.value = ''
  trackEvent('element_video_checkout_start', { sign: selected.value.slug })
  try {
    const res = await fetch('/api/element-video-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sign: selected.value.slug }),
    })
    const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string }
    if (!res.ok || !data.url) throw new Error(data.error || 'Could not start checkout. Please try again.')
    window.location.href = data.url
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Could not start checkout. Please try again.'
    busy.value = false
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-12 md:py-16">
    <!-- Hero -->
    <header class="text-center mb-8">
      <p class="text-ash-400 text-xs font-semibold uppercase tracking-widest mb-3">Step into your element</p>
      <h1 class="font-display text-3xl md:text-5xl font-bold text-ash-100 mb-4">
        Walk into the world of your zodiac sign
      </h1>
      <p class="text-ash-300 text-lg max-w-xl mx-auto">
        A {{ ELEMENT_VIDEO_SECONDS }}-second video world made for your sign: your element's landscape and your
        animal in it, with sound.
      </p>
    </header>

    <!-- Real sample -->
    <figure class="mb-10">
      <video
        class="w-full rounded-2xl border border-ash-800 bg-black aspect-video"
        src="/element-video/sample-fire-horse.mp4"
        poster="/element-video/sample-fire-horse.webp"
        width="960"
        height="540"
        autoplay
        muted
        loop
        playsinline
        controls
        preload="metadata"
        aria-label="Sample video: the Fire Horse world, a horse with a burning mane walking across a volcanic plain at dusk"
      ></video>
      <figcaption class="text-ash-500 text-sm mt-3 text-center">
        A real example: the Fire Horse world. Tap for sound.
      </figcaption>
    </figure>

    <!-- Pick your sign + buy -->
    <section class="glass element-glow rounded-2xl p-6 md:p-8 mb-10" aria-labelledby="pick-heading">
      <h2 id="pick-heading" class="font-display text-2xl font-bold text-ash-100 mb-5">Your sign</h2>

      <label for="video-sign" class="block text-ash-300 text-sm mb-2">Choose your sign</label>
      <select
        id="video-sign"
        v-model="selectedSlug"
        class="w-full rounded-lg bg-ash-900 border border-ash-700 text-ash-100 px-4 py-3 mb-4 text-base"
      >
        <optgroup v-for="group in groups" :key="group.label" :label="group.label">
          <option v-for="sign in group.signs" :key="sign.slug" :value="sign.slug">{{ sign.name }}</option>
        </optgroup>
      </select>

      <label for="video-birth-date" class="block text-ash-400 text-sm mb-2">Not sure? Enter your birth date</label>
      <input
        id="video-birth-date"
        v-model="birthDate"
        type="date"
        min="1900-01-01"
        max="2100-12-31"
        class="w-full rounded-lg bg-ash-900 border border-ash-700 text-ash-100 px-4 py-3 text-base"
        @change="useBirthDate"
      />
      <p v-if="birthDateNote" class="text-ash-300 text-sm mt-2" aria-live="polite">{{ birthDateNote }}</p>

      <p v-if="selected" class="text-ash-300 mt-5 mb-6">
        <span class="element-text font-semibold">{{ selected.name }}:</span>
        {{ selectedWorld }}, with your {{ selected.animal }} in it.
      </p>

      <template v-if="ELEMENT_VIDEO_LIVE">
        <button
          type="button"
          class="btn-element w-full text-lg py-3"
          :disabled="busy || !selected"
          @click="startCheckout"
        >
          {{ busy ? 'Opening checkout…' : `Make my ${selected?.name ?? ''} video, ${ELEMENT_VIDEO_PRICE}` }}
        </button>
        <p v-if="errorMessage" class="text-red-400 text-sm mt-3" role="alert">{{ errorMessage }}</p>
        <p class="text-ash-500 text-sm mt-3">Secure payment by Stripe. Your video is made right after you pay.</p>
      </template>
      <p v-else class="text-ash-400 text-sm">
        Not on sale yet. The sample above shows what you will get.
      </p>
    </section>

    <!-- What you get -->
    <section class="mb-10" aria-labelledby="get-heading">
      <h2 id="get-heading" class="font-display text-2xl font-bold text-ash-100 mb-4">What you get</h2>
      <ul class="space-y-3 text-ash-300">
        <li>
          <span class="text-ash-100 font-semibold">A {{ ELEMENT_VIDEO_SECONDS }}-second video with sound</span>
          (MP4, 1280×720) that plays on any phone. Download it or share it straight from the page.
        </li>
        <li>
          <span class="text-ash-100 font-semibold">Made for you after you pay,</span>
          in about a minute. It appears on the next page, and we email you the link.
        </li>
        <li>
          <span class="text-ash-100 font-semibold">One of a kind.</span>
          The world is generated live for each order, so no two videos are the same.
        </li>
      </ul>
    </section>

    <!-- Honest note -->
    <section class="glass rounded-2xl p-6 mb-10 text-ash-400 text-sm space-y-2" aria-label="About these videos">
      <p>
        Made by AI: Google DeepMind's Genie 4 world model paints each world from a description of your element
        and animal. Every video carries Google's invisible SynthID watermark, plus our site name in the corner.
      </p>
      <p>It is a piece of art for fun and reflection, not a prediction.</p>
    </section>

    <!-- Reading cross-link -->
    <p class="text-center text-ash-400">
      Want the words too?
      <RouterLink :to="READING_PATH" class="element-text underline">Your personal reading</RouterLink>
      ({{ READING_PRICE }}): {{ READING_PAGE_COUNT }} pages about your sign, written for you.
    </p>
  </div>
</template>
