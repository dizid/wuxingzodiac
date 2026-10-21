<script setup lang="ts">
// Intake form for personalized readings: collects the details Claude needs,
// validates them with the same rules as the server, then redirects to Stripe.
import { ref, computed, onMounted } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'
import {
  validateReadingInput,
  validateBirthDate,
  todayIso,
  READING_LIMITS,
  MIN_BIRTH_DATE,
  WITHDRAWAL_WAIVER_ERROR,
  type ReadingType,
  type CheckoutRequestBody,
} from '@/lib/readings/types'
import { getSignForBirthDate } from '@/lib/readings/sign'

const props = withDefaults(defineProps<{ readingType?: ReadingType }>(), {
  readingType: 'personal',
})

const { trackEvent } = useAnalytics()

const name = ref('')
const birthDate = ref('')
const email = ref('')
const isGift = ref(false)
const recipientName = ref('')
const giftMessage = ref('')
// EU 14-day right-of-withdrawal waiver: required, never pre-ticked
const withdrawalWaiver = ref(false)
const submitting = ref(false)
const error = ref('')
const nameInput = ref<HTMLInputElement | null>(null)

// Only rendered client-side (the CTA opens it on click), so "today" is the visitor's date
const maxBirthDate = todayIso()

// Live preview so buyers can confirm their sign (Jan/Feb births can fall in the previous zodiac year)
const signPreview = computed(() => {
  if (!birthDate.value || validateBirthDate(birthDate.value)) return null
  return getSignForBirthDate(birthDate.value)
})

const inputClass =
  'w-full px-4 py-3 bg-ash-900/50 border border-ash-700 rounded-xl text-ash-100 placeholder-ash-500 focus:border-[var(--el-500)] focus:ring-2 focus:ring-[var(--el-500)]/20 outline-none transition-all disabled:opacity-50'

onMounted(() => {
  nameInput.value?.focus()
})

async function handleSubmit() {
  if (submitting.value) return
  error.value = ''

  const body: CheckoutRequestBody = {
    readingType: props.readingType,
    names: [name.value],
    birthDates: [birthDate.value],
    email: email.value,
    isGift: isGift.value,
    recipientName: isGift.value ? recipientName.value : undefined,
    giftMessage: isGift.value ? giftMessage.value : undefined,
    withdrawalWaiver: withdrawalWaiver.value,
  }

  // Same validation as the server — instant feedback without a round trip
  const validation = validateReadingInput(body)
  if (!validation.ok) {
    error.value = validation.error
    return
  }
  // The button is disabled until it's ticked; this also covers any other submit path
  if (!withdrawalWaiver.value) {
    error.value = WITHDRAWAL_WAIVER_ERROR
    return
  }

  submitting.value = true
  const sign = getSignForBirthDate(validation.input.birthDates[0]!)

  trackEvent('blueprint_purchase_click', {
    reading_type: props.readingType,
    slug: sign.slug,
    element: sign.element,
    animal: sign.animal,
    is_gift: validation.input.isGift,
  })

  try {
    const res = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    const data = await res.json().catch(() => ({}))

    if (!res.ok || !data.url) {
      // Show validation messages (4xx); keep server errors generic
      throw new Error(res.status < 500 && data.error ? data.error : 'Failed to create checkout session')
    }

    window.location.href = data.url
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Something went wrong. Please try again.'
    submitting.value = false
  }
}
</script>

<template>
  <form class="space-y-4 text-left" novalidate @submit.prevent="handleSubmit">
    <div>
      <label for="reading-name" class="block text-sm font-medium text-ash-200 mb-1.5">First name</label>
      <input
        id="reading-name"
        ref="nameInput"
        v-model="name"
        type="text"
        autocomplete="given-name"
        :maxlength="READING_LIMITS.name"
        placeholder="The name used throughout the reading"
        required
        :disabled="submitting"
        :class="inputClass"
      />
    </div>

    <div>
      <label for="reading-birthdate" class="block text-sm font-medium text-ash-200 mb-1.5">Birth date</label>
      <input
        id="reading-birthdate"
        v-model="birthDate"
        type="date"
        autocomplete="bday"
        :min="MIN_BIRTH_DATE"
        :max="maxBirthDate"
        required
        :disabled="submitting"
        :class="[inputClass, '[color-scheme:dark]']"
      />
      <p class="text-xs text-ash-500 mt-1">
        Your reading is based on your birth-year sign and the five elements. The day and month only matter
        if you were born in January or February, around the Lunar New Year.
      </p>
      <p v-if="signPreview" class="text-sm text-ash-400 mt-1.5" aria-live="polite">
        Sign: <span class="element-text font-semibold">{{ signPreview.name }}</span>
        <span class="text-ash-500"> · {{ signPreview.archetype }}</span>
      </p>
    </div>

    <div>
      <label for="reading-email" class="block text-sm font-medium text-ash-200 mb-1.5">Email</label>
      <input
        id="reading-email"
        v-model="email"
        type="email"
        autocomplete="email"
        :maxlength="READING_LIMITS.email"
        placeholder="We'll email your reading here"
        required
        :disabled="submitting"
        :class="inputClass"
      />
    </div>

    <!-- Gift option -->
    <label class="flex items-center gap-3 cursor-pointer select-none">
      <input
        v-model="isGift"
        type="checkbox"
        :disabled="submitting"
        class="w-5 h-5 rounded border-ash-600 bg-ash-900 accent-[var(--el-500)]"
      />
      <span class="text-sm text-ash-200">This is a gift</span>
    </label>

    <div v-if="isGift" class="space-y-4 pl-4 border-l-2 border-[var(--el-500)]/40">
      <div>
        <label for="reading-recipient" class="block text-sm font-medium text-ash-200 mb-1.5">Recipient name</label>
        <input
          id="reading-recipient"
          v-model="recipientName"
          type="text"
          :maxlength="READING_LIMITS.name"
          :placeholder="name || 'Shown on the cover'"
          :disabled="submitting"
          :class="inputClass"
        />
        <p class="text-xs text-ash-500 mt-1">Shown on the cover. Leave empty to use the name above.</p>
      </div>

      <div>
        <label for="reading-message" class="block text-sm font-medium text-ash-200 mb-1.5">
          Gift message <span class="text-ash-500 font-normal">(optional)</span>
        </label>
        <textarea
          id="reading-message"
          v-model="giftMessage"
          rows="3"
          :maxlength="READING_LIMITS.giftMessage"
          placeholder="Happy birthday! Thought you'd love this."
          :disabled="submitting"
          :class="[inputClass, 'resize-none']"
        />
        <p class="text-xs text-ash-500 mt-1 text-right">{{ giftMessage.length }}/{{ READING_LIMITS.giftMessage }}</p>
      </div>
    </div>

    <!-- Required EU withdrawal waiver (no refunds). Terms opens in a new tab so the form keeps its entries -->
    <div class="flex items-start gap-3">
      <input
        id="reading-withdrawal-waiver"
        v-model="withdrawalWaiver"
        type="checkbox"
        required
        :disabled="submitting"
        class="w-5 h-5 mt-0.5 shrink-0 rounded border-ash-600 bg-ash-900 accent-[var(--el-500)] cursor-pointer"
      />
      <label for="reading-withdrawal-waiver" class="text-sm text-ash-200 cursor-pointer select-none">
        I agree that my reading is delivered immediately and I give up my 14-day right of withdrawal. See
        <RouterLink to="/terms" target="_blank" rel="noopener" class="underline hover:text-ash-100">Terms</RouterLink>.
      </label>
    </div>

    <button
      type="submit"
      class="btn-element w-full text-center text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      :disabled="submitting || !withdrawalWaiver"
    >
      <span v-if="submitting">Redirecting to checkout...</span>
      <span v-else>Continue to Payment &mdash; $9.90</span>
    </button>

    <p v-if="error" class="text-red-400 text-sm text-center" role="alert">
      {{ error }}
    </p>

    <p class="text-ash-600 text-xs text-center">
      Your name and birth date are only used to write your reading.
      <RouterLink to="/privacy" class="underline hover:text-ash-400">Privacy</RouterLink>
    </p>
  </form>
</template>
