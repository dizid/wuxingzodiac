<script setup lang="ts">
import { ref } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'

const props = withDefaults(defineProps<{
  sourcePage?: string
}>(), {
  sourcePage: 'homepage',
})

const { trackNewsletterSignup } = useAnalytics()

const email = ref('')
const honeypot = ref('')
const submitted = ref(false)
const submitting = ref(false)
const successMsg = ref('')
const errorMsg = ref('')

async function handleSubmit() {
  errorMsg.value = ''

  if (!email.value.trim()) {
    errorMsg.value = 'Please enter your email address.'
    return
  }

  submitting.value = true

  try {
    const res = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value.trim(),
        honeypot: honeypot.value,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      errorMsg.value = data.error || 'Something went wrong. Please try again.'
      return
    }

    submitted.value = true
    successMsg.value = data.message || "You're in! Watch your inbox."
    trackNewsletterSignup(props.sourcePage)
  } catch {
    errorMsg.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Success state -->
    <div v-if="submitted" class="glass rounded-xl p-6 text-center">
      <p class="text-ash-100 text-lg font-semibold">{{ successMsg }}</p>
      <p class="text-ash-300 mt-2">Watch your inbox for zodiac insights.</p>
    </div>

    <!-- Form state -->
    <form v-else @submit.prevent="handleSubmit">
      <!-- Honeypot — hidden from humans, traps bots -->
      <p class="hidden" aria-hidden="true">
        <label>Don't fill this out: <input v-model="honeypot" name="hp" tabindex="-1" autocomplete="off" /></label>
      </p>

      <div class="flex flex-col sm:flex-row gap-3">
        <input
          v-model="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          :disabled="submitting"
          class="flex-1 px-6 py-4 bg-ash-900/50 border border-ash-700 rounded-xl text-ash-100 placeholder-ash-500 focus:border-[var(--el-500)] focus:ring-2 focus:ring-[var(--el-500)]/20 outline-none transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          :disabled="submitting"
          class="btn-element px-8 py-4 font-semibold disabled:opacity-50"
        >
          {{ submitting ? 'Subscribing...' : 'Subscribe' }}
        </button>
      </div>

      <p v-if="errorMsg" class="text-sm text-red-400 mt-3 text-center">
        {{ errorMsg }}
      </p>

      <p class="text-xs text-ash-500 mt-4 text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  </div>
</template>
