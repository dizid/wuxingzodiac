Build a personalized PDF reading system to replace the static Elemental Blueprint PDFs. Don't commit or push.

1. Create src/lib/readings/ with a shared engine: input {type, names[], birthDates[], email, isGift, recipientName?, giftMessage?}. Types: "personal" now; design for "relationship", "year-2027", "child" later (one template + prompt file per type).
2. Text: reuse the Anthropic setup in scripts/generate-reports.ts (claude-sonnet-4-5). Feed it the computed element+animal (existing calculator logic) plus src/lib/sign-content and ARCHETYPES. Personal reading sections: element balance, core personality, strengths/blind spots, love, career & money, 2026 Fire Horse outlook, 5 action tips. Use the person's name throughout. ~6-8 pages, bullets and summary boxes, no walls of text.
3. PDF: HTML template styled like the sign pages (element colors, cover with name + sign, Noto Sans + Noto Sans SC for Chinese characters), rendered with Playwright to A4 PDF. No pdfkit.
4. Run generation in a Netlify background function (netlify/functions/generate-reading-background.ts). Store the result in Netlify Blobs at orders/{session_id}.pdf.
5. Checkout: create-checkout.ts accepts readingType + form fields, keeps using the existing STRIPE_PRICE_ID (9.90), puts all inputs in session metadata. Add an intake form (name, birth date, email, optional "this is a gift" with recipient name + message) before checkout.
6. stripe-webhook.ts: on paid session, trigger the background function using metadata. Fix the hardcoded "Elemental Blueprint" GA item name and the 999 fallback amount.
7. /report/download?session_id=: poll until the PDF exists, then show the download. (Email delivery comes in a later step.)
8. Add a local script to generate a sample personal reading PDF for a test name/date so I can check quality.
9. Run type-check, tests and build. Show a diff summary.
