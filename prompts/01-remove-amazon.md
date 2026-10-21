Remove all Amazon affiliate monetization from this repo. Do not touch Stripe checkout, the PlugAff/Promoten tracking (index.html, netlify.toml, create-checkout.ts), Fourthwall merch, or BlueprintCTA.

1. Delete src/lib/affiliate-config.ts, src/lib/sign-shop.ts, src/components/zodiac/MonetizationSlot.vue, src/components/zodiac/SignShop.vue.
2. In src/pages/ZodiacSignPage.vue remove their imports (lines ~18, ~24) and usages (<MonetizationSlot> ~136/138/142, <SignShop> ~165); keep the layout spacing clean.
3. Remove AffiliateProduct/AffiliateCategory/ShopCategory and related types from src/types/index.ts if nothing else uses them.
4. Remove trackAffiliateClick/trackAffiliateImpression from src/composables/useAnalytics.ts.
5. Remove the "Affiliate Links" section from src/pages/TermsPage.vue.
6. rg -i "amazon|affiliate|wuxing20" src scripts and clean any leftovers (except the PlugAff cookie logic).
7. Run type-check, unit tests and build; fix errors. Show me the diff summary. Don't commit or push.
