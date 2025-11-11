(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8974], {
    61: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 6704))
    }
    ,
    173: (e, s, a) => {
        "use strict";
        a.d(s, {
            A: () => l.default
        });
        var l = a(2442)
    }
    ,
    667: (e, s, a) => {
        "use strict";
        a.d(s, {
            A: () => r
        });
        var l = a(5155)
          , t = a(2115)
          , i = a(6766);
        let r = e => {
            let {product: s} = e
              , [a,r] = (0,
            t.useState)(!1)
              , d = async () => {
                try {
                    if (r(!0),
                    !(await fetch("/api/cart", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            productId: s.id,
                            quantity: 1
                        })
                    })).ok)
                        throw Error("Failed to add to cart")
                } catch (e) {
                    console.error("Error adding to cart:", e),
                    alert("Ошибка при добавлении в корзину")
                } finally {
                    r(!1)
                }
            }
            ;
            return (0,
            l.jsxs)("div", {
                className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300",
                children: [(0,
                l.jsxs)("div", {
                    className: "relative aspect-square",
                    children: [(0,
                    l.jsx)(i.default, {
                        src: s.image,
                        alt: s.name,
                        fill: !0,
                        className: "object-cover w-full h-full",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        quality: 85
                    }), s.badge && (0,
                    l.jsx)("span", {
                        className: "absolute top-2 right-2 ".concat("Скидка" === s.badge ? "bg-red-500" : "Нет в наличии" === s.badge ? "bg-gray-500" : "bg-blue-500", " text-white text-xs px-2 py-1 rounded-md font-medium"),
                        children: s.badge
                    })]
                }), (0,
                l.jsxs)("div", {
                    className: "p-4",
                    children: [(0,
                    l.jsx)("h3", {
                        className: "font-bold text-lg mb-2 line-clamp-2",
                        children: s.name
                    }), (0,
                    l.jsx)("div", {
                        className: "text-gray-600 text-sm mb-4 space-y-1",
                        children: s.specs.map( (e, s) => (0,
                        l.jsx)("p", {
                            className: "line-clamp-1",
                            children: e
                        }, s))
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex justify-between items-center",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex flex-col",
                            children: [s.oldPrice && (0,
                            l.jsxs)("span", {
                                className: "text-gray-400 line-through text-sm",
                                children: [s.oldPrice.toLocaleString("ru-RU"), " ₽"]
                            }), (0,
                            l.jsxs)("span", {
                                className: "font-bold text-xl text-blue-600",
                                children: [s.price.toLocaleString("ru-RU"), " ₽"]
                            })]
                        }), (0,
                        l.jsx)("button", {
                            onClick: d,
                            disabled: a || "Нет в наличии" === s.badge,
                            className: "flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-200 ".concat(a ? "bg-gray-300 cursor-wait" : "Нет в наличии" === s.badge ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"),
                            children: a ? (0,
                            l.jsx)("div", {
                                className: "animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"
                            }) : "В корзину"
                        })]
                    })]
                })]
            })
        }
    }
    ,
    6704: (e, s, a) => {
        "use strict";
        a.r(s),
        a.d(s, {
            default: () => h
        });
        var l = a(5155)
          , t = a(173);
        a(2115);
        var i = a(6766)
          , r = a(6874)
          , d = a.n(r);
        let c = () => (0,
        l.jsx)("section", {
            className: "bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16",
            children: (0,
            l.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0,
                l.jsxs)("div", {
                    className: "flex flex-col md:flex-row items-center",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "md:w-1/2 mb-8 md:mb-0",
                        children: [(0,
                        l.jsx)("h2", {
                            className: "text-4xl font-bold mb-4",
                            children: "Собери свой идеальный игровой ПК"
                        }), (0,
                        l.jsx)("p", {
                            className: "text-lg mb-6",
                            children: "Высокопроизводительные компьютеры для геймеров и профессионалов"
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex space-x-4",
                            children: [(0,
                            l.jsx)(d(), {
                                href: "/complect",
                                className: "bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition",
                                children: "В каталог"
                            }), (0,
                            l.jsx)(d(), {
                                href: "/configurator",
                                className: "border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition",
                                children: "Конфигуратор"
                            })]
                        })]
                    }), (0,
                    l.jsx)("div", {
                        className: "md:w-1/2 relative h-[300px] md:h-[400px] w-full",
                        children: (0,
                        l.jsx)(i.default, {
                            src: "/images/hero-pc.webp",
                            alt: "Игровой компьютер",
                            fill: !0,
                            className: "object-contain",
                            priority: !0
                        })
                    })]
                })
            })
        });
        var n = a(667);
        let o = [{
            icon: "fas fa-shield-alt",
            title: "Гарантия 3 года",
            description: "На все сборки предоставляется расширенная гарантия"
        }, {
            icon: "fas fa-tools",
            title: "Профессиональная сборка",
            description: "Собираем компьютеры с особой тщательностью"
        }, {
            icon: "fas fa-truck",
            title: "Быстрая доставка",
            description: "Доставим ваш заказ в любую точку России"
        }, {
            icon: "fas fa-headset",
            title: "24/7 Поддержка",
            description: "Наши специалисты всегда готовы помочь"
        }]
          , x = () => (0,
        l.jsx)("section", {
            className: "py-16 bg-gray-50",
            children: (0,
            l.jsxs)("div", {
                className: "container mx-auto px-4",
                children: [(0,
                l.jsx)("h2", {
                    className: "text-3xl font-bold text-center mb-12",
                    children: "Почему выбирают нас"
                }), (0,
                l.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: o.map( (e, s) => (0,
                    l.jsxs)("div", {
                        className: "text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
                        children: [(0,
                        l.jsx)("div", {
                            className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-100",
                            children: (0,
                            l.jsx)("i", {
                                className: "".concat(e.icon, " text-blue-600 text-2xl")
                            })
                        }), (0,
                        l.jsx)("h3", {
                            className: "text-xl font-semibold mb-3",
                            children: e.title
                        }), (0,
                        l.jsx)("p", {
                            className: "text-gray-600",
                            children: e.description
                        })]
                    }, s))
                })]
            })
        })
          , m = () => (0,
        l.jsx)("section", {
            className: "py-16",
            children: (0,
            l.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0,
                l.jsx)("div", {
                    className: "bg-white rounded-xl shadow-lg overflow-hidden",
                    children: (0,
                    l.jsxs)("div", {
                        className: "flex flex-col md:flex-row",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "md:w-1/2 p-8 bg-gray-50",
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-3xl font-bold mb-6",
                                children: "Конфигуратор ПК"
                            }), (0,
                            l.jsx)("p", {
                                className: "text-gray-600 mb-8",
                                children: "Соберите компьютер своей мечты из более чем 1000 комплектующих"
                            }), (0,
                            l.jsx)("button", {
                                className: "bg-[#2563eb] text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition",
                                children: "Начать сборку"
                            })]
                        }), (0,
                        l.jsx)("div", {
                            className: "md:w-1/2 p-8 relative h-[300px]",
                            children: (0,
                            l.jsx)(i.default, {
                                src: "/images/pcbuilder.jpg",
                                alt: "Конфигуратор ПК",
                                fill: !0,
                                className: "object-cover rounded-lg",
                                sizes: "(max-width: 768px) 100vw, 50vw"
                            })
                        })]
                    })
                })
            })
        });
        function h() {
            return (0,
            l.jsxs)("div", {
                children: [(0,
                l.jsx)(t.A, {}), (0,
                l.jsxs)("main", {
                    children: [(0,
                    l.jsx)(c, {}), (0,
                    l.jsx)("section", {
                        className: "py-16",
                        children: (0,
                        l.jsxs)("div", {
                            className: "container mx-auto px-4",
                            children: [(0,
                            l.jsx)("h2", {
                                className: "text-3xl font-bold text-center mb-12",
                                children: "Популярные сборки"
                            }), (0,
                            l.jsx)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                                children: [{
                                    id: 1,
                                    name: "Gamer Pro X",
                                    specs: ["Intel Core i7-12700K", "NVIDIA RTX 3080", "32GB DDR4", "1TB SSD"],
                                    price: 89990,
                                    oldPrice: null,
                                    image: "/images/office-pc.png",
                                    badge: "Хит"
                                }, {
                                    id: 2,
                                    name: "Gamer X",
                                    specs: ["Intel Core i9-12700K", "NVIDIA RTX 2080", "32GB DDR4", "1TB SSD"],
                                    price: 59990,
                                    oldPrice: null,
                                    image: "/images/game-pc.jpg",
                                    badge: "Хит"
                                }].map(e => (0,
                                l.jsx)(n.A, {
                                    product: e
                                }, e.id))
                            })]
                        })
                    }), (0,
                    l.jsx)(x, {}), (0,
                    l.jsx)(m, {})]
                })]
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [6874, 6766, 2442, 8441, 1684, 7358], () => s(61)),
    _N_E = e.O()
}
]);
