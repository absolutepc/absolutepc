(function () {
  const formatter = new Intl.NumberFormat('ru-RU');

  const READY_PCS = [
    {
      id: 'pc-start',
      name: 'START 3',
      series: 'Entry Gaming',
      price: 59990,
      image: '/components/case/case/D32 PRO Black.png',
      accent: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
      cpu: 'Intel i3-12100F',
      gpu: 'RTX 5060',
      ram: '16 GB DDR5',
      badge: 'Хит',
      badgeClass: 'ready-pc-card__badge--hot',
      desc: 'Стартовая игровая сборка для Full HD и киберспортивных дисциплин.',
      link: '/app/poppc/poppc1.html'
    },
    {
      id: 'pc-compact',
      name: 'COMPACT',
      series: 'Mini Tower',
      price: 64990,
      image: '/components/case/case/D32 PRO White 2.png',
      accent: 'linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 100%)',
      cpu: 'Intel i5-13400F',
      gpu: 'RTX 4060',
      ram: '16 GB DDR5',
      desc: 'Компактный корпус без компромиссов по производительности.',
      link: null
    },
    {
      id: 'pc-stream',
      name: 'STREAM',
      series: 'Creator',
      price: 74990,
      image: '/components/case/case/D200 White-1.png',
      accent: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
      cpu: 'Ryzen 5 5600',
      gpu: 'RTX 5060',
      ram: '32 GB DDR5',
      badge: 'New',
      badgeClass: 'ready-pc-card__badge--new',
      desc: 'Для стримов, монтажа и многозадачности в одном системнике.',
      link: null
    },
    {
      id: 'pc-prototype',
      name: 'PROTOTYPE 5',
      series: 'Performance',
      price: 89990,
      image: '/components/case/case/D200 Black-1.png',
      accent: 'linear-gradient(135deg, #e0e7ff 0%, #eef2ff 100%)',
      cpu: 'Intel i5-14400F',
      gpu: 'RTX 5060',
      ram: '32 GB DDR5',
      badge: 'Хит',
      badgeClass: 'ready-pc-card__badge--hot',
      desc: 'Сбалансированная сборка для современных AAA-игр в высоком качестве.',
      link: '/app/poppc/poppc2.html'
    },
    {
      id: 'pc-cyber',
      name: 'CYBER',
      series: 'RGB Edition',
      price: 119990,
      image: '/components/case/case/D400-B.png',
      accent: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      cpu: 'Ryzen 5 7600X',
      gpu: 'RTX 5070',
      ram: '32 GB DDR5',
      desc: 'Стильный корпус с подсветкой и мощной платформой AM5.',
      link: null
    },
    {
      id: 'pc-workstation',
      name: 'WORKSTATION',
      series: 'Pro Line',
      price: 134990,
      image: '/components/case/case/D400-W.png',
      accent: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      cpu: 'Intel i7-14700F',
      gpu: 'RTX 5070',
      ram: '64 GB DDR5',
      desc: 'Рабочая станция для 3D, рендера и профессиональных задач.',
      link: null
    },
    {
      id: 'pc-grim',
      name: 'GRIM 7',
      series: 'Enthusiast',
      price: 190990,
      image: '/components/case/case/D400-B.png',
      accent: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)',
      cpu: 'Ryzen 7 7800X3D',
      gpu: 'RTX 5070 Ti',
      ram: '32 GB DDR5',
      badge: 'Топ',
      badgeClass: 'ready-pc-card__badge--top',
      desc: 'Флагман для максимального FPS в играх благодаря 3D V-Cache.',
      link: '/app/poppc/poppc3.html'
    },
    {
      id: 'pc-apex',
      name: 'APEX',
      series: 'Ultra Gaming',
      price: 219990,
      image: '/components/case/case/TK-4 Black.png',
      accent: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      cpu: 'Intel i7-14700KF',
      gpu: 'RTX 5080',
      ram: '64 GB DDR5',
      desc: '4K-гейминг и ray tracing на высоких настройках.',
      link: null
    },
    {
      id: 'pc-phantom',
      name: 'PHANTOM',
      series: 'Silent Pro',
      price: 249990,
      image: '/components/case/case/TK-4 White.png',
      accent: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
      cpu: 'Ryzen 9 7900X',
      gpu: 'RTX 5080',
      ram: '64 GB DDR5',
      badge: 'New',
      badgeClass: 'ready-pc-card__badge--new',
      desc: 'Тихая премиальная сборка с топовым охлаждением и SSD PCIe 5.0.',
      link: null
    },
    {
      id: 'pc-ultimate',
      name: 'ULTIMATE 9',
      series: 'Flagship',
      price: 299990,
      image: '/components/case/case/TK-4 Black.png',
      accent: 'linear-gradient(135deg, #581c87 0%, #7c3aed 100%)',
      cpu: 'Ryzen 9 9950X3D',
      gpu: 'RTX 5080',
      ram: '64 GB DDR5',
      badge: 'Топ',
      badgeClass: 'ready-pc-card__badge--top',
      desc: 'Абсолютный максимум для игр, стримов и творчества без ограничений.',
      link: '/app/poppc/poppc4.html'
    },
    {
      id: 'pc-titan',
      name: 'TITAN X',
      series: 'Extreme',
      price: 349990,
      image: '/components/case/case/TK-4 Black.png',
      accent: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)',
      cpu: 'Ryzen 9 9950X3D',
      gpu: 'RTX 5090',
      ram: '128 GB DDR5',
      desc: 'Экстремальная конфигурация для 4K/240Hz и тяжёлых рабочих нагрузок.',
      link: null
    },
    {
      id: 'pc-elite',
      name: 'ELITE WHITE',
      series: 'Signature',
      price: 174990,
      image: '/components/case/case/D32 PRO White 2.png',
      accent: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
      cpu: 'Ryzen 7 9700X',
      gpu: 'RTX 5070 Ti',
      ram: '32 GB DDR5',
      badge: 'Хит',
      badgeClass: 'ready-pc-card__badge--hot',
      desc: 'Белый премиальный системник для стильного игрового сетапа.',
      link: null
    }
  ];

  function renderCard(pc) {
    const badge = pc.badge
      ? `<span class="ready-pc-card__badge ${pc.badgeClass || ''}">${pc.badge}</span>`
      : '';
    const detailLink = pc.link
      ? `<a class="ready-pc-card__link" href="${pc.link}" aria-label="Подробнее о ${pc.name}" title="Подробнее"><i class="fas fa-arrow-right"></i></a>`
      : '';

    return `
<article class="ready-pc-card js-product" data-id="${pc.id}" style="--pc-accent:${pc.accent}">
  <div class="ready-pc-card__visual">
    ${badge}
    <div class="ready-pc-card__glow" aria-hidden="true"></div>
    <img class="ready-pc-card__img" src="${pc.image}" alt="${pc.name}" loading="lazy" onerror="this.src='/imig/5.webp'">
  </div>
  <div class="ready-pc-card__body">
    <p class="ready-pc-card__series">${pc.series}</p>
    <h3 class="ready-pc-card__name">${pc.name}</h3>
    <p class="ready-pc-card__desc">${pc.desc}</p>
    <div class="ready-pc-card__specs">
      <span class="ready-pc-card__spec">${pc.cpu}</span>
      <span class="ready-pc-card__spec">${pc.gpu}</span>
      <span class="ready-pc-card__spec">${pc.ram}</span>
    </div>
    <div class="ready-pc-card__footer">
      <div class="ready-pc-card__price">${formatter.format(pc.price)} <span>₽</span></div>
      <div class="ready-pc-card__actions">
        ${detailLink}
        <button type="button" class="ready-pc-card__cart js-buy-button"
          data-id="${pc.id}"
          data-name="${pc.name}"
          data-price="${pc.price}"
          data-image="${pc.image}"
          aria-label="Добавить ${pc.name} в корзину">
          <i class="fas fa-shopping-cart"></i>
          <span class="ready-pc-card__cart-label">В корзину</span>
        </button>
      </div>
    </div>
  </div>
</article>`;
  }

  function init() {
    const grid = document.getElementById('ready-pcs-grid');
    if (!grid) return;
    grid.innerHTML = READY_PCS.map(renderCard).join('');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
