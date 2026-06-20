(function () {
  const catalog = window.CONFIGURATOR_CATALOG || {};
  const sections = window.CONFIGURATOR_SECTIONS || [];
  const selection = {};
  let activeSlot = null;

  const formatPrice = (value) =>
    new Intl.NumberFormat('ru-RU').format(value) + ' ₽';

  const parseTotal = () =>
    Object.values(selection).reduce((sum, item) => sum + (item?.price || 0), 0);

  function renderSections() {
    const root = document.getElementById('config-sections');
    if (!root) return;

    root.innerHTML = sections
      .map(
        (section) => `
      <section class="config-section">
        <h2 class="config-section__title">${section.title}</h2>
        <div class="config-slots">
          ${section.slots
            .map(
              (slot) => `
            <button type="button" class="config-slot" data-slot="${slot.key}" aria-label="${slot.label}">
              <div class="config-slot__thumb" id="slot-thumb-${slot.key}">
                <img class="config-slot__img" id="slot-img-${slot.key}" src="" alt="" hidden>
                <i class="fas fa-plus config-slot__placeholder"></i>
              </div>
              <div class="config-slot__body">
                <span class="config-slot__label">${slot.label}${slot.required ? '<span class="req">*</span>' : ''}</span>
                <span class="config-slot__value" id="slot-value-${slot.key}">Выбрать</span>
                <span class="config-slot__price" id="slot-price-${slot.key}"></span>
              </div>
              <i class="fas fa-chevron-right config-slot__arrow"></i>
            </button>`
            )
            .join('')}
        </div>
      </section>`
      )
      .join('');

    root.querySelectorAll('.config-slot').forEach((btn) => {
      btn.addEventListener('click', () => openModal(btn.dataset.slot));
    });
  }

  function updateSummary() {
    const totalEl = document.getElementById('config-total');
    const listEl = document.getElementById('config-summary-list');
    const buildBtn = document.getElementById('config-build-btn');

    if (totalEl) totalEl.textContent = formatPrice(parseTotal());

    if (listEl) {
      const items = Object.entries(selection);
      listEl.innerHTML = items.length
        ? items
            .map(
              ([key, item]) =>
                `<li><span>${item.name}</span><strong>${formatPrice(item.price)}</strong></li>`
            )
            .join('')
        : '<li class="empty">Компоненты не выбраны</li>';
    }

    const required = ['cpu', 'mb', 'gpu', 'mem', 'ssd', 'psu', 'case'];
    const ready = required.every((key) => selection[key]);
    if (buildBtn) buildBtn.disabled = !ready;
  }

  function updateSlotUI(key) {
    const valueEl = document.getElementById('slot-value-' + key);
    const priceEl = document.getElementById('slot-price-' + key);
    const imgEl = document.getElementById('slot-img-' + key);
    const thumbEl = document.getElementById('slot-thumb-' + key);
    const slotBtn = document.querySelector('[data-slot="' + key + '"]');
    const item = selection[key];

    if (valueEl) valueEl.textContent = item ? item.name : 'Выбрать';
    if (priceEl) priceEl.textContent = item ? formatPrice(item.price) : '';
    if (imgEl) {
      if (item?.image) {
        imgEl.src = item.image;
        imgEl.alt = item.name;
        imgEl.hidden = false;
        thumbEl?.classList.add('has-image');
      } else {
        imgEl.removeAttribute('src');
        imgEl.alt = '';
        imgEl.hidden = true;
        thumbEl?.classList.remove('has-image');
      }
    }
    if (slotBtn) slotBtn.classList.toggle('is-selected', Boolean(item));
  }

  function openModal(slotKey) {
    activeSlot = slotKey;
    const modal = document.getElementById('config-modal');
    const title = document.getElementById('config-modal-title');
    const list = document.getElementById('config-modal-list');
    const slot = sections.flatMap((s) => s.slots).find((s) => s.key === slotKey);
    const products = catalog[slotKey] || [];

    if (title) title.textContent = slot ? slot.label : 'Выбор';
    const preview = document.getElementById('config-modal-preview');
    const previewImg = document.getElementById('config-modal-preview-img');
    const previewName = document.getElementById('config-modal-preview-name');
    const previewPrice = document.getElementById('config-modal-preview-price');
    const selected = selection[slotKey];

    const showPreview = (product) => {
      if (!preview || !product) return;
      preview.hidden = false;
      if (previewImg) {
        previewImg.src = product.image;
        previewImg.alt = product.name;
      }
      if (previewName) previewName.textContent = product.name;
      if (previewPrice) previewPrice.textContent = formatPrice(product.price);
    };

    if (selected) showPreview(selected);
    else if (preview) preview.hidden = true;

    if (list) {
      list.innerHTML = products.length
        ? products
            .map(
              (p) => `
          <button type="button" class="config-product${selected?.id === p.id ? ' is-active' : ''}" data-id="${p.id}">
            <img src="${p.image}" alt="" loading="lazy" onerror="this.src='/imig/5.webp'">
            <div>
              <strong>${p.name}</strong>
              <span>${formatPrice(p.price)}</span>
            </div>
          </button>`
            )
            .join('')
        : '<p class="config-modal-empty">Товары скоро появятся</p>';

      list.querySelectorAll('.config-product').forEach((btn) => {
        btn.addEventListener('mouseenter', () => {
          const product = products.find((p) => p.id === btn.dataset.id);
          if (product) showPreview(product);
        });
        btn.addEventListener('click', () => {
          const product = products.find((p) => p.id === btn.dataset.id);
          if (product) selectProduct(slotKey, product);
          closeModal();
        });
      });
    }

    modal?.classList.add('is-open');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    document.getElementById('config-modal')?.classList.remove('is-open');
    document.body.classList.remove('modal-open');
    activeSlot = null;
  }

  function selectProduct(key, product) {
    selection[key] = product;
    updateSlotUI(key);
    updateSummary();
  }

  function clearSelection() {
    Object.keys(selection).forEach((key) => delete selection[key]);
    sections.forEach((section) =>
      section.slots.forEach((slot) => updateSlotUI(slot.key))
    );
    updateSummary();
  }

  function exportConfig() {
    const payload = {
      date: new Date().toISOString(),
      total: parseTotal(),
      items: Object.entries(selection).map(([category, item]) => ({
        category,
        ...item
      })),
      comment: document.getElementById('config-comment')?.value || ''
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'absolute-pc-config.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function buildPc() {
    const required = ['cpu', 'mb', 'gpu', 'mem', 'ssd', 'psu', 'case'];
    if (!required.every((key) => selection[key])) {
      alert('Выберите все обязательные компоненты системного блока.');
      return;
    }

    const cart = JSON.parse(localStorage.getItem('abs_pc_cart') || '[]');
    cart.push({
      type: 'custom-build',
      total: parseTotal(),
      items: { ...selection },
      comment: document.getElementById('config-comment')?.value || '',
      createdAt: Date.now()
    });
    localStorage.setItem('abs_pc_cart', JSON.stringify(cart));
    if (window.ABS_CART) {
      window.ABS_CART.renderCart();
      window.ABS_CART.open();
    } else {
      alert('Конфигурация добавлена в корзину!');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderSections();
    updateSummary();

    document.getElementById('config-modal-close')?.addEventListener('click', closeModal);
    document.getElementById('config-modal-backdrop')?.addEventListener('click', closeModal);
    document.getElementById('config-export-btn')?.addEventListener('click', exportConfig);
    document.getElementById('config-build-btn')?.addEventListener('click', buildPc);
    document.getElementById('config-clear-btn')?.addEventListener('click', clearSelection);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  });
})();
