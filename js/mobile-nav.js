document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header .container');
  if (header && !header.querySelector('.mobile-nav-toggle')) {
    const nav = header.querySelector('nav');
    if (nav) {
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'mobile-nav-toggle md:hidden';
      toggle.setAttribute('aria-label', 'Меню');
      toggle.innerHTML = '<i class="fas fa-bars"></i>';

      const actions =
        header.querySelector('.flex.items-center.space-x-4') ||
        header.querySelector('.header-actions');
      if (actions) {
        header.insertBefore(toggle, actions);
      } else {
        header.appendChild(toggle);
      }

      nav.classList.add('site-nav');

      toggle.addEventListener('click', () => {
        nav.classList.toggle('site-nav--open');
        toggle.classList.toggle('is-open');
      });

      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.remove('site-nav--open');
          toggle.classList.remove('is-open');
        });
      });
    }
  }

  if (window.__ABS_CART_BOOT__) return;
  if (!document.querySelector('script[src="/shop.js"], script[src="/js/site-cart.js"]')) {
    const script = document.createElement('script');
    script.src = '/shop.js';
    script.defer = true;
    document.body.appendChild(script);
  }
});
