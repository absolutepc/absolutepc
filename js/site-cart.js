(function () {
  const STORAGE_KEY = 'abs_pc_cart';
  const formatter = new Intl.NumberFormat('ru-RU');

  const CART_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 20" aria-hidden="true"><path d="M4.258 0c.45 0 .842.31.944.738l.749 2.649h15.132a.972.972 0 01.945 1.207L20.21 11.94a.973.973 0 01-.945.74H7.643a.973.973 0 01-.947-.748l.005.017L3.503 1.947H.973A.973.973 0 01.973 0h3.285zM19.84 5.334H6.497l1.895 5.398h10.113l1.335-5.398zM8.857 13.699a2.719 2.719 0 012.715 2.717 2.719 2.719 0 01-2.715 2.716 2.719 2.719 0 01-2.716-2.716 2.719 2.719 0 012.716-2.717zm0 1.491a1.225 1.225 0 100 2.45 1.225 1.225 0 000-2.45zM17.901 13.699a2.719 2.719 0 012.715 2.717 2.719 2.719 0 01-2.715 2.716 2.719 2.719 0 01-2.715-2.716 2.719 2.719 0 012.715-2.717zm0 1.491a1.225 1.225 0 100 2.45 1.225 1.225 0 000-2.45z"/></svg>';

  const cartPanelHtml = `
<div class="site-cart-overlay js-overlay js-close-cart" aria-hidden="true"></div>
<aside class="site-cart js-cart" aria-label="Корзина">
  <button type="button" class="site-cart__close js-close-cart" aria-label="Закрыть корзину"></button>
  <div class="site-cart__container cart-container column aic">
    <div class="site-cart__empty cart-empty-container js-cart-empty-container">
      <div class="site-cart__empty-title cart-empty">Ваша корзина пуста</div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/>
        </svg>
      </div>
    </div>
    <div class="site-cart__order cart-order-container column js-cart-order-container hidden">
      <div class="site-cart__order-title cart-order">Ваш заказ</div>
      <ul class="site-cart__list cart-list column js-cart-list"></ul>
      <div class="site-cart__total cart-total-container">
        <h3 class="title">Итого</h3>
        <div>
          <span class="site-cart__total-value total-price js-cart-total-price">0</span>
          <span class="rouble"> ₽</span>
        </div>
      </div>
      <button type="button" class="site-cart__submit btn-order js-cart-checkout">Оформить заказ</button>
    </div>
  </div>
</aside>`;

  function loadCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      return [];
    }
  }

  function saveCart(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('abs-cart-updated', { detail: items }));
  }

  function parsePrice(value) {
    if (typeof value === 'number') return value;
    return parseInt(String(value).replace(/[^\d]/g, ''), 10) || 0;
  }

  function normalizeItem(raw) {
    if (raw.type === 'custom-build') {
      const items = raw.items || {};
      const names = Object.values(items)
        .map((item) => item?.name)
        .filter(Boolean)
        .slice(0, 3)
        .join(', ');
      return {
        id: 'build-' + (raw.createdAt || Date.now()),
        name: 'Сборка ПК' + (names ? ': ' + names : ''),
        price: raw.total || 0,
        image: Object.values(items).find((i) => i?.image)?.image || '/imig/5.webp',
        qty: 1,
        type: 'custom-build',
        payload: raw
      };
    }

    return {
      id: String(raw.id || raw.name || Date.now()),
      name: raw.name || raw.model || 'Товар',
      price: parsePrice(raw.price),
      image: raw.image || raw.photo || '/imig/5.webp',
      qty: raw.qty || 1,
      type: raw.type || 'product'
    };
  }

  function getElements() {
    const cart = document.querySelector('body > .site-cart.js-cart, body > .js-cart, .site-cart.js-cart');
    const overlay = document.querySelector('body > .site-cart-overlay, body > .js-overlay');
    return {
      cart,
      overlay,
      list: cart?.querySelector('.js-cart-list') || document.querySelector('.js-cart-list'),
      empty: cart?.querySelector('.js-cart-empty-container') || document.querySelector('.js-cart-empty-container'),
      order: cart?.querySelector('.js-cart-order-container') || document.querySelector('.js-cart-order-container'),
      total: document.querySelector('.js-cart-total-price'),
      triggers: document.querySelectorAll('.js-cart-btn, .js-cart-icon, .site-cart-trigger')
    };
  }

  function removeLegacyCartPanels() {
    document.querySelectorAll('.main .js-cart, .main .cart.js-cart, main .js-cart').forEach((cart) => {
      cart.remove();
    });
    document.querySelectorAll('.main .js-overlay, main .js-overlay').forEach((overlay) => {
      overlay.remove();
    });
  }

  function ensureCartMarkup() {
    removeLegacyCartPanels();

    let cart = document.querySelector('body > .js-cart, body > .site-cart, .site-cart.js-cart');
    if (!cart) {
      cart = document.querySelector('.js-cart');
    }

    if (!cart || cart.closest('.main, main')) {
      document.body.insertAdjacentHTML('beforeend', cartPanelHtml);
      return;
    }

    cart.classList.add('site-cart');
    if (!cart.querySelector('.js-cart-checkout')) {
      const order = cart.querySelector('.js-cart-order-container');
      if (order && !order.querySelector('.js-cart-checkout')) {
        const oldBtn = order.querySelector('.btn-order');
        if (oldBtn) {
          oldBtn.type = 'button';
          oldBtn.classList.add('site-cart__submit', 'js-cart-checkout');
        } else {
          order.insertAdjacentHTML(
            'beforeend',
            '<button type="button" class="site-cart__submit btn-order js-cart-checkout">Оформить заказ</button>'
          );
        }
      }
    }
  }

  function ensureCartTrigger() {
    /* handled by site-header.js */
  }


  function renderCart() {
    const { list, empty, order, total } = getElements();
    if (!list) return;

    const items = loadCart().map(normalizeItem);
    list.innerHTML = '';

    items.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'site-cart__item cart-item js-cart-item';
      li.dataset.id = item.id;
      li.innerHTML = `
        <button type="button" class="site-cart__item-remove close js-remove" aria-label="Удалить"></button>
        <div class="site-cart__line cartline row jcfs aic">
          <div class="site-cart__image cart-image-container">
            <img src="${item.image}" alt="" class="cart-img" loading="lazy" onerror="this.src='/imig/5.webp'">
          </div>
          <div class="site-cart__info column">
            <div class="site-cart__name cart-model">${item.name}</div>
            <div class="site-cart__row row jcsb aic">
              <div class="site-cart__counter counter js-counter">
                <button type="button" class="minus control js-minus${item.qty <= 1 ? ' disabled' : ''}" ${item.qty <= 1 ? 'disabled' : ''}>-</button>
                <span class="site-cart__qty current-items js-current-items">${item.qty}</span>
                <button type="button" class="plus control js-plus">+</button>
              </div>
              <div class="row jcc aic">
                <span class="site-cart__price cart-price js-cart-price">${formatter.format(item.price * item.qty)}</span>
                <span class="rouble"> ₽</span>
              </div>
            </div>
          </div>
        </div>`;
      list.appendChild(li);
    });

    const hasItems = items.length > 0;
    empty?.classList.toggle('hidden', hasItems);
    order?.classList.toggle('hidden', !hasItems);

    const sum = items.reduce((acc, item) => acc + item.price * item.qty, 0);
    if (total) total.textContent = formatter.format(sum);

    document.querySelectorAll('.js-cart-badge').forEach((badge) => {
      const count = items.reduce((acc, item) => acc + item.qty, 0);
      badge.textContent = count > 0 ? String(count) : '';
      badge.dataset.count = String(count);
    });
  }

  function setCartOpen(isOpen) {
    const { cart, overlay } = getElements();
    document.body.style.overflow = isOpen ? 'hidden' : '';
    cart?.classList.toggle('active', isOpen);
    overlay?.classList.toggle('active', isOpen);
  }

  function addItem(item) {
    const items = loadCart().map(normalizeItem);
    const normalized = normalizeItem(item);
    const existing = items.find((i) => i.id === normalized.id && i.type === normalized.type);
    if (existing) {
      existing.qty += normalized.qty || 1;
    } else {
      items.push(normalized);
    }
    saveCart(items);
    renderCart();
  }

  function updateQty(id, delta) {
    const items = loadCart().map(normalizeItem);
    const item = items.find((i) => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      saveCart(items.filter((i) => i.id !== id));
    } else {
      saveCart(items);
    }
    renderCart();
  }

  function removeItem(id) {
    saveCart(loadCart().filter((raw) => normalizeItem(raw).id !== id));
    renderCart();
  }

  function extractProductFromDom(button) {
    const product = button.closest('.js-product');
    if (!product) return null;

    const imageEl = product.querySelector('.js-image-card, .product-image img, img');
    const titleEl = product.querySelector('.js-title-card, .product-title, h3');
    const priceEl = product.querySelector('.js-price-card, .product-price .price, .price');
    const linkEl = product.querySelector('.js-link-card, a[id]');

    return {
      id: linkEl?.id || titleEl?.textContent?.trim() || Date.now(),
      name: titleEl?.textContent?.trim() || 'Товар',
      price: parsePrice(priceEl?.textContent || priceEl?.dataset?.price || '0'),
      image: imageEl?.src || imageEl?.getAttribute('src') || '/imig/5.webp',
      qty: 1
    };
  }

  function bindEvents() {
    document.addEventListener(
      'click',
      (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        if (target.closest('.js-cart-btn, .js-cart-icon, .shopping-cart.js-cart-btn')) {
          event.preventDefault();
          setCartOpen(true);
          return;
        }

        if (target.closest('.js-close-cart')) {
          setCartOpen(false);
          return;
        }

        if (target.classList.contains('js-buy-button')) {
          event.preventDefault();
          event.stopImmediatePropagation();
          const product = extractProductFromDom(target);
          if (product) {
            addItem(product);
            setCartOpen(true);
          }
          return;
        }

        const itemEl = target.closest('.js-cart-item');
        if (!itemEl) return;
        const id = itemEl.dataset.id;

        if (target.classList.contains('js-remove')) {
          removeItem(id);
          return;
        }
        if (target.classList.contains('js-plus')) {
          updateQty(id, 1);
          return;
        }
        if (target.classList.contains('js-minus') && !target.classList.contains('disabled')) {
          updateQty(id, -1);
        }
      },
      true
    );

    document.querySelector('.js-cart-checkout')?.addEventListener('click', () => {
      const items = loadCart();
      if (!items.length) return;
      alert('Заказ принят! Мы свяжемся с вами для подтверждения.');
      saveCart([]);
      renderCart();
      setCartOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setCartOpen(false);
    });
  }

  function init() {
    if (window.__ABS_SITE_CART_INIT__) return;
    window.__ABS_SITE_CART_INIT__ = true;
    if (typeof window.ABS_HEADER_UPGRADE === 'function') {
      window.ABS_HEADER_UPGRADE();
    }
    ensureCartMarkup();
    bindEvents();
    renderCart();
  }

  window.ABS_CART = { addItem, loadCart, saveCart, renderCart, open: () => setCartOpen(true) };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
