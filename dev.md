# Dev Notes

## Third-Party IDs

- **Google Analytics:** G-5M7CY55LL8
- **Amazon Associates:** wuxing20-20
https://buttondown.com/glaswerk/archive/welcome-to-wu-xing-zodiac-your-60-sign-journey/


Stripe keys: stored in Netlify env vars (STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_ID)

## GA4 Snippet (for index.html)

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5M7CY55LL8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-5M7CY55LL8');
</script>
```
