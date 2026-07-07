// Applies the saved theme before first paint to avoid a flash of the wrong
// theme. Dark is the default. External file (not inline) so the CSP can stay
// script-src 'self' with no unsafe-inline.
(function () {
  var theme = 'dark';
  try {
    if (localStorage.getItem('theme') === 'light') {
      theme = 'light';
    }
  } catch (e) {
    // storage unavailable — keep the default
  }
  document.documentElement.dataset.theme = theme;
})();
