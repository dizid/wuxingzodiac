-- Report Orders table for Elemental Blueprint PDF purchases
-- Run via Neon dashboard or MCP execute_sql tool

CREATE TABLE IF NOT EXISTS report_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_session_id TEXT NOT NULL UNIQUE,
  stripe_payment_intent TEXT,
  customer_email TEXT NOT NULL,
  sign_slug TEXT NOT NULL,
  amount_cents INTEGER NOT NULL DEFAULT 999,
  currency TEXT NOT NULL DEFAULT 'usd',
  status TEXT NOT NULL DEFAULT 'paid',
  download_count INTEGER NOT NULL DEFAULT 0,
  max_downloads INTEGER NOT NULL DEFAULT 5,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  fulfilled_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '30 days')
);

CREATE INDEX IF NOT EXISTS idx_report_orders_session ON report_orders(stripe_session_id);
CREATE INDEX IF NOT EXISTS idx_report_orders_email ON report_orders(customer_email);
