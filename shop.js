document.addEventListener('click', ({ target }) => {
  if (target.tagName !== 'BUTTON') return;

  const wrapper = target.closest('.colors');
  if (wrapper === null) return;

  const image = wrapper.querySelector('.pic img, .product-image img');
  const activeButton = wrapper.querySelector('button.active');
  if (image === null || activeButton === null) return;

  target.classList.add('active');
  activeButton.classList.remove('active');
  image.src = target.dataset.src;
});

(function bootstrapSiteAssets() {
  if (window.__ABS_CART_BOOT__) return;
  window.__ABS_CART_BOOT__ = true;

  ['/css/cart.css', '/css/footer.css'].forEach((href) => {
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  });

  if (!window.ABS_CART && !document.querySelector('script[src="/js/site-cart.js"]')) {
    const cartScript = document.createElement('script');
    cartScript.src = '/js/site-cart.js';
    cartScript.defer = true;
    document.body.appendChild(cartScript);
  }

  if (!window.__ABS_FOOTER_INIT__ && !document.querySelector('script[src="/js/site-footer.js"]')) {
    const footerScript = document.createElement('script');
    footerScript.src = '/js/site-footer.js';
    footerScript.defer = true;
    document.body.appendChild(footerScript);
  }
})();
