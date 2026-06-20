(function () {
  const FOOTER_HTML = `
<div class="site-footer__glow" aria-hidden="true"></div>
<div class="site-footer__inner">
  <div class="site-footer__grid">
    <div class="site-footer__brand">
      <a href="/app/index.html" class="site-footer__logo">
        <i class="fas fa-desktop" aria-hidden="true"></i>
        <span>Absolute PC</span>
      </a>
      <p class="site-footer__tagline">
        Магазин игровых компьютеров и комплектующих. Более 5 лет собираем системы под ваши задачи — от киберспорта до 3D и стриминга.
      </p>
      <div class="site-footer__social">
        <a href="#" aria-label="Telegram" title="Telegram"><i class="fab fa-telegram-plane"></i></a>
        <a href="#" aria-label="VK" title="VKontakte"><i class="fab fa-vk"></i></a>
        <a href="#" aria-label="YouTube" title="YouTube"><i class="fab fa-youtube"></i></a>
        <a href="mailto:info@absolutepc.ru" aria-label="Email" title="Email"><i class="fas fa-envelope"></i></a>
      </div>
    </div>

    <div class="site-footer__col">
      <h4 class="site-footer__heading">Каталог</h4>
      <ul class="site-footer__links">
        <li><a href="/app/catalog.html">Все категории</a></li>
        <li><a href="/components/components.html">Комплектующие</a></li>
        <li><a href="/app/configurator.html">Конфигуратор ПК</a></li>
        <li><a href="/notebooks/notebooks.html">Ноутбуки</a></li>
        <li><a href="/periphery/periphery.html">Периферия</a></li>
        <li><a href="/furniture/furniture.html">Мебель</a></li>
      </ul>
    </div>

    <div class="site-footer__col">
      <h4 class="site-footer__heading">Компания</h4>
      <ul class="site-footer__links">
        <li><a href="/app/about.html">О нас</a></li>
        <li><a href="/app/contacts.html">Контакты</a></li>
        <li><a href="/app/user.html">Личный кабинет</a></li>
        <li><a href="/app/catalog.html">Готовые сборки</a></li>
      </ul>
    </div>

    <div class="site-footer__col">
      <h4 class="site-footer__heading">Связаться</h4>
      <div class="site-footer__contact-item">
        <i class="fas fa-phone-alt" aria-hidden="true"></i>
        <div>
          <a href="tel:+79626542959">+7 (962) 654-29-59</a>
          <span>Ежедневно 10:00 — 20:00</span>
        </div>
      </div>
      <div class="site-footer__contact-item">
        <i class="fas fa-envelope" aria-hidden="true"></i>
        <div>
          <a href="mailto:info@absolutepc.ru">info@absolutepc.ru</a>
          <span>Ответим в течение часа</span>
        </div>
      </div>
      <div class="site-footer__contact-item">
        <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
        <div>
          <span style="color:#e2e8f0;font-weight:600;">Доставка по России</span>
          <span>Самовывоз по договорённости</span>
        </div>
      </div>
    </div>
  </div>

  <div class="site-footer__perks">
    <div class="site-footer__perk">
      <i class="fas fa-shield-alt" aria-hidden="true"></i>
      <div>
        <strong>Гарантия</strong>
        <span>На все сборки и комплектующие</span>
      </div>
    </div>
    <div class="site-footer__perk">
      <i class="fas fa-truck" aria-hidden="true"></i>
      <div>
        <strong>Доставка</strong>
        <span>По всей России 2–7 дней</span>
      </div>
    </div>
    <div class="site-footer__perk">
      <i class="fas fa-headset" aria-hidden="true"></i>
      <div>
        <strong>Поддержка 24/7</strong>
        <span>Поможем с выбором и настройкой</span>
      </div>
    </div>
    <div class="site-footer__perk">
      <i class="fas fa-credit-card" aria-hidden="true"></i>
      <div>
        <strong>Оплата</strong>
        <span>Картой, наличными, рассрочка</span>
      </div>
    </div>
  </div>
</div>

<div class="site-footer__bottom">
  <div class="site-footer__bottom-inner">
    <p class="site-footer__copy">© ${new Date().getFullYear()} Absolute PC. Все права защищены.</p>
    <nav class="site-footer__legal" aria-label="Юридическая информация">
      <a href="/app/about.html">О компании</a>
      <a href="/app/contacts.html">Контакты</a>
      <a href="#">Политика конфиденциальности</a>
    </nav>
  </div>
</div>`;

  function shouldSkipFooter() {
    const path = (location.pathname || '').toLowerCase();
    return (
      path.includes('admin.html') ||
      path.includes('login.html') ||
      document.body.classList.contains('login-page')
    );
  }

  function upgradeFooter() {
    if (window.__ABS_FOOTER_INIT__ || shouldSkipFooter()) return;
    window.__ABS_FOOTER_INIT__ = true;

    let footer = document.querySelector('footer.site-footer');
    if (!footer) {
      const legacy = document.querySelector('footer.footer, body > footer, main + footer, .footer');
      if (legacy && legacy.tagName === 'FOOTER') {
        legacy.className = 'site-footer';
        footer = legacy;
      } else {
        footer = document.createElement('footer');
        footer.className = 'site-footer';
        document.body.appendChild(footer);
      }
    }

    footer.innerHTML = FOOTER_HTML;
    footer.setAttribute('role', 'contentinfo');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', upgradeFooter);
  } else {
    upgradeFooter();
  }
})();
