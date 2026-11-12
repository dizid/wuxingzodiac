// Google Analytics (GA4) initialization.
// Extracted to an external file so the CSP script-src policy in netlify.toml
// doesn't need 'unsafe-inline'.
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-5M7CY55LL8');

// Load the ~180 KB GA library after the page has loaded (commands above wait in
// dataLayer), so on phones it doesn't compete with the page's own CSS, fonts and
// JS. It used to be an async tag in index.html that started downloading first.
window.addEventListener('load', function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-5M7CY55LL8';
  document.head.appendChild(s);
});
