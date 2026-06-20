(function () {
  const CART_BTN_HTML = `
<button type="button" class="site-cart-trigger js-cart-btn js-cart-icon" aria-label="Открыть корзину">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20" aria-hidden="true">
    <path d="M4.258 0c.45 0 .842.31.944.738l.749 2.649h15.132a.972.972 0 01.945 1.207L20.21 11.94a.973.973 0 01-.945.74H7.643a.973.973 0 01-.947-.748l.005.017L3.503 1.947H.973A.973.973 0 01.973 0h3.285zM19.84 5.334H6.497l1.895 5.398h10.113l1.335-5.398zM8.857 13.699a2.719 2.719 0 012.715 2.717 2.719 2.719 0 01-2.715 2.716 2.719 2.719 0 01-2.716-2.716 2.719 2.719 0 012.716-2.717zm0 1.491a1.225 1.225 0 100 2.45 1.225 1.225 0 000-2.45zM17.901 13.699a2.719 2.719 0 012.715 2.717 2.719 2.719 0 01-2.715 2.716 2.719 2.719 0 01-2.715-2.716 2.719 2.719 0 012.715-2.717zm0 1.491a1.225 1.225 0 100 2.45 1.225 1.225 0 000-2.45z"/>
  </svg>
  <span class="site-cart-trigger__badge js-cart-badge" data-count="0"></span>
</button>`;

  function shouldSkip() {
    const path = (location.pathname || '').toLowerCase();
    return path.includes('admin.html') || path.includes('login.html');
  }

  function fixNavLinks(header) {
    header.querySelectorAll('a[href="search.html"], a[href="/search.html"]').forEach((a) => {
      a.setAttribute('href', '/app/search.html');
    });
    header.querySelectorAll('a[href="user.html"], a[href="/user.html"]').forEach((a) => {
      a.setAttribute('href', '/app/user.html');
    });
  }

  function upgradeCartTrigger(header) {
    header.querySelectorAll('a[href="shop.html"], a[href="/app/shop.html"]').forEach((link) => {
      const cartHost = link.closest('.p-2, button, .icons, .header-actions') || link.parentElement;
      if (cartHost && !cartHost.querySelector('.site-cart-trigger')) {
        cartHost.outerHTML = CART_BTN_HTML;
      }
    });

    header.querySelectorAll('.shopping-cart.js-cart-btn, .shopping-cart.js-cart-icon').forEach((el) => {
      if (el.classList.contains('site-cart-trigger')) return;
      el.outerHTML = CART_BTN_HTML;
    });

    header.querySelectorAll('.fa-shopping-cart').forEach((icon) => {
      const link = icon.closest('a[href*="shop"]');
      if (!link) return;
      const host = link.closest('.p-2, button') || link.parentElement;
      if (host && !header.querySelector('.site-cart-trigger')) {
        host.outerHTML = CART_BTN_HTML;
      }
    });

    if (!header.querySelector('.site-cart-trigger, .js-cart-btn')) {
      const actions =
        header.querySelector('.header-actions') ||
        header.querySelector('.flex.items-center.space-x-4') ||
        header.querySelector('.icons.row') ||
        header.querySelector('.icons');
      if (actions) {
        actions.insertAdjacentHTML('beforeend', CART_BTN_HTML);
      }
    }
  }

  function upgradeHeaderActions(header) {
    const actions =
      header.querySelector('.header-actions') ||
      header.querySelector('.flex.items-center.space-x-4') ||
      header.querySelector('.row.jcc.aic');

    if (actions && !actions.classList.contains('header-actions')) {
      actions.classList.add('header-actions');
    }
  }

  function init() {
    if (window.__ABS_HEADER_INIT__ || shouldSkip()) return;
    window.__ABS_HEADER_INIT__ = true;

    document.querySelectorAll('header').forEach((header) => {
      fixNavLinks(header);
      upgradeHeaderActions(header);
      upgradeCartTrigger(header);
    });
  }

  window.ABS_HEADER_UPGRADE = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
