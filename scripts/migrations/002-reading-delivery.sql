-- Personalized readings: generation + email delivery state on report_orders.
-- Additive only (safe with older deployed code, which ignores these columns).
-- Applied via Neon MCP run_sql on project still-resonance-44574632, database neondb.
--
-- reading_status: NULL = legacy Elemental Blueprint order (static PDF download)
--                 'queued' → 'generating' → 'delivered' | 'failed'
-- No reading text, PDF, name or birth date is stored — inputs live in Stripe
-- session metadata and the PDF is emailed, then discarded.

ALTER TABLE report_orders
  ADD COLUMN IF NOT EXISTS reading_status TEXT,
  ADD COLUMN IF NOT EXISTS reading_attempts INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS reading_updated_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS reading_error TEXT,
  ADD COLUMN IF NOT EXISTS delivered_at TIMESTAMPTZ;
