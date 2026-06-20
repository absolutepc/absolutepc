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

  function loadScript(src, defer) {
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement('script');
    script.src = src;
    if (defer) script.defer = true;
    document.body.appendChild(script);
  }

  loadScript('/js/site-header.js', false);
  loadScript('/js/site-cart.js', true);
  loadScript('/js/site-footer.js', true);
})();
