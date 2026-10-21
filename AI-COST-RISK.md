# AI Cost Risk — Live, payment-gated

**Last reviewed:** 2026-10-13 (previous review 2026-06-19: build-time only, verify-only)
**Status:** Anthropic is called from a live Netlify function. Hardened — every call is gated behind a verified Stripe payment and capped per order.

## What changed

Personalized PDF readings (replacing the static Elemental Blueprint PDFs) are written on demand by Claude after purchase:

- `netlify/functions/generate-reading-background.ts` → `src/lib/readings/server/generate-text.ts`
- Model: `claude-sonnet-5-5` ($2 / $10 per M tokens), adaptive thinking at `medium` effort, structured JSON output
- Build-time scripts (`scripts/generate-reports.ts`, `scripts/generate-content-v2.ts`, `scripts/generate-sample-reading.ts`) still call Anthropic only when run locally

## Why a public attacker can't run up the bill

The background function URL is publicly reachable, so it trusts nothing but a Stripe Checkout session id:

1. **Payment re-verified with Stripe** — the session must be `payment_status: 'paid'` with `metadata.product = 'personal_reading'`. Fake or unpaid session ids exit before any AI call.
2. **Order must exist in the database** — only the signature-verified Stripe webhook creates `report_orders` rows.
3. **Atomic claim per order** — `UPDATE … WHERE reading_status IN ('queued','failed') AND reading_attempts < 3 RETURNING …`. Delivered or in-progress orders are never regenerated; concurrent or repeated triggers can't double up.
4. **Hard cap: 3 attempts per paid order**, each attempt at most 2 Claude calls (one retry if the JSON fails validation) → at most 6 Claude calls per $9.90 sale.
5. Inputs are validated (names: letters only, max 40 chars; real birth dates) and come from Stripe metadata, not the request.

## Cost per reading (estimate, not yet measured on a bill)

| | Tokens (approx.) | Cost |
|---|---|---|
| Input (prompt + sign profile) | ~3,500 | ~$0.007 |
| Output (thinking + ~2,000-token reading) | ~4,000–8,000 | ~$0.04–0.08 |
| **Typical order (1 attempt)** | | **~$0.05–0.09** |
| **Worst case (6 calls, all failing)** | | **~$0.50** |

Revenue per order: $9.90. The only way to trigger spend is to pay.

## Operational alerts

- Final failure after 3 attempts → alert email to `SUPPORT_EMAIL` with the session id and retry instructions.
- Failure detail (structure only, no reading text) is stored in `report_orders.reading_error`.

## Verification (2026-10-13)

- Draft deploy with Stripe test mode: intake form → Stripe test checkout → webhook → generation on Lambda → email delivered (4 runs; 3 delivered on first attempt in 37–47 s; 1 earlier run failed validation twice before in-function retries existed).
- Background function rejects malformed session ids (logged, no AI call).

## If this changes

Re-review if: the attempt cap is raised, a new trigger path (e.g. admin regenerate endpoint) is added, the model moves to a pricier tier (Opus/Fable), or readings become free/discounted to $0 (a `no_payment_required` session would not pass check 1, which is intended).
