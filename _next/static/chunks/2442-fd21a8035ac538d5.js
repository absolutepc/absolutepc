"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2442], {
    2442: (e, s, t) => {
        t.d(s, {
            default: () => d
        });
        var a = t(5155)
          , r = t(2115)
          , l = t(6874)
          , c = t.n(l)
          , i = t(5695);
        function n(e) {
            let {items: s, totalAmount: t, onClose: l, onSuccess: c} = e
              , n = (0,
            i.useRouter)()
              , [o,d] = (0,
            r.useState)({
                customerName: "",
                customerEmail: "",
                customerPhone: "",
                deliveryAddress: ""
            })
              , [m,u] = (0,
            r.useState)(!1)
              , [x,h] = (0,
            r.useState)(null)
              , f = async e => {
                e.preventDefault(),
                u(!0),
                h(null);
                try {
                    let e = await fetch("/api/orders/cart", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            ...o,
                            items: s
                        })
                    })
                      , t = await e.json();
                    if (!e.ok)
                        throw Error(t.error || "Ошибка при создании заказа");
                    await fetch("/api/cart", {
                        method: "DELETE"
                    }),
                    c(),
                    l(),
                    n.push("/orders/".concat(t.id))
                } catch (e) {
                    console.error("Error creating order:", e),
                    h(e instanceof Error ? e.message : "Произошла ошибка при создании заказа")
                } finally {
                    u(!1)
                }
            }
              , b = e => {
                let {name: s, value: t} = e.target;
                d(e => ({
                    ...e,
                    [s]: t
                }))
            }
            ;
            return (0,
            a.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: (0,
                a.jsxs)("div", {
                    className: "bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto m-4",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [(0,
                        a.jsx)("h3", {
                            className: "text-lg font-semibold",
                            children: "Оформление заказа"
                        }), (0,
                        a.jsx)("button", {
                            onClick: l,
                            className: "text-gray-400 hover:text-gray-600",
                            children: (0,
                            a.jsx)("i", {
                                className: "fas fa-times"
                            })
                        })]
                    }), (0,
                    a.jsxs)("form", {
                        onSubmit: f,
                        className: "space-y-4",
                        children: [(0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Ваше имя"
                            }), (0,
                            a.jsx)("input", {
                                type: "text",
                                name: "customerName",
                                required: !0,
                                value: o.customerName,
                                onChange: b,
                                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Email"
                            }), (0,
                            a.jsx)("input", {
                                type: "email",
                                name: "customerEmail",
                                required: !0,
                                value: o.customerEmail,
                                onChange: b,
                                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Телефон"
                            }), (0,
                            a.jsx)("input", {
                                type: "tel",
                                name: "customerPhone",
                                required: !0,
                                value: o.customerPhone,
                                onChange: b,
                                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            children: [(0,
                            a.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Адрес доставки"
                            }), (0,
                            a.jsx)("textarea", {
                                name: "deliveryAddress",
                                required: !0,
                                value: o.deliveryAddress,
                                onChange: b,
                                rows: 3,
                                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            })]
                        }), x && (0,
                        a.jsx)("div", {
                            className: "text-red-500 text-sm",
                            children: x
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "text-lg font-bold",
                                children: ["Итого: ", t.toLocaleString("ru-RU"), " ₽"]
                            }), (0,
                            a.jsxs)("div", {
                                className: "space-x-4",
                                children: [(0,
                                a.jsx)("button", {
                                    type: "button",
                                    onClick: l,
                                    className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md",
                                    children: "Отмена"
                                }), (0,
                                a.jsx)("button", {
                                    type: "submit",
                                    disabled: m,
                                    className: "px-4 py-2 text-sm font-medium text-white rounded-md ".concat(m ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"),
                                    children: m ? "Оформление..." : "Оформить заказ"
                                })]
                            })]
                        })]
                    })]
                })
            })
        }
        function o() {
            let[e,s] = (0,
            r.useState)(!1)
              , [t,l] = (0,
            r.useState)(!1)
              , [c,i] = (0,
            r.useState)({
                items: []
            })
              , [o,d] = (0,
            r.useState)(!0);
            (0,
            r.useEffect)( () => {
                m()
            }
            , []);
            let m = async () => {
                try {
                    let e = await fetch("/api/cart");
                    if (!e.ok)
                        throw Error("Failed to fetch cart");
                    let s = await e.json();
                    i(s)
                } catch (e) {
                    console.error("Error fetching cart:", e)
                } finally {
                    d(!1)
                }
            }
              , u = async e => {
                try {
                    if (d(!0),
                    !(await fetch("/api/cart/".concat(e), {
                        method: "DELETE"
                    })).ok)
                        throw Error("Failed to remove item from cart");
                    i(s => ({
                        items: s.items.filter(s => s.productId !== e)
                    }))
                } catch (e) {
                    console.error("Error removing item from cart:", e),
                    alert("Ошибка при удалении товара из корзины")
                } finally {
                    d(!1)
                }
            }
              , x = () => c.items.reduce( (e, s) => e + s.product.price * s.quantity, 0);
            return (0,
            a.jsxs)("div", {
                className: "relative",
                children: [(0,
                a.jsxs)("button", {
                    onClick: () => s(!e),
                    className: "relative p-2 text-gray-600 hover:text-blue-600",
                    children: [(0,
                    a.jsx)("i", {
                        className: "fas fa-shopping-cart text-xl"
                    }), c.items.length > 0 && (0,
                    a.jsx)("span", {
                        className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",
                        children: c.items.length
                    })]
                }), e && (0,
                a.jsxs)("div", {
                    className: "absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50",
                    children: [(0,
                    a.jsx)("div", {
                        className: "p-4 border-b",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0,
                            a.jsx)("h3", {
                                className: "text-lg font-medium",
                                children: "Корзина"
                            }), (0,
                            a.jsx)("button", {
                                onClick: () => s(!1),
                                className: "text-gray-400 hover:text-gray-600",
                                children: (0,
                                a.jsx)("i", {
                                    className: "fas fa-times"
                                })
                            })]
                        })
                    }), (0,
                    a.jsx)("div", {
                        className: "p-4",
                        children: o ? (0,
                        a.jsx)("div", {
                            className: "flex justify-center py-4",
                            children: (0,
                            a.jsx)("div", {
                                className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
                            })
                        }) : 0 === c.items.length ? (0,
                        a.jsx)("div", {
                            className: "text-center py-4 text-gray-500",
                            children: "Корзина пуста"
                        }) : (0,
                        a.jsxs)(a.Fragment, {
                            children: [(0,
                            a.jsx)("div", {
                                className: "space-y-4 max-h-96 overflow-y-auto",
                                children: c.items.map(e => (0,
                                a.jsxs)("div", {
                                    className: "flex items-center space-x-4",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "flex-1",
                                        children: [(0,
                                        a.jsx)("h4", {
                                            className: "font-medium",
                                            children: e.product.name
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "text-sm text-gray-500",
                                            children: ["Количество: ", e.quantity]
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "text-sm font-medium text-blue-600",
                                            children: [(e.product.price * e.quantity).toLocaleString("ru-RU"), " ₽"]
                                        })]
                                    }), (0,
                                    a.jsx)("button", {
                                        onClick: () => u(e.productId),
                                        className: "text-red-500 hover:text-red-700",
                                        disabled: o,
                                        children: (0,
                                        a.jsx)("i", {
                                            className: "fas fa-trash"
                                        })
                                    })]
                                }, e.productId))
                            }), (0,
                            a.jsxs)("div", {
                                className: "mt-4 pt-4 border-t",
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "flex justify-between items-center mb-4",
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "font-medium",
                                        children: "Итого:"
                                    }), (0,
                                    a.jsxs)("span", {
                                        className: "text-lg font-bold",
                                        children: [x().toLocaleString("ru-RU"), " ₽"]
                                    })]
                                }), (0,
                                a.jsx)("button", {
                                    onClick: () => l(!0),
                                    className: "w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors",
                                    children: "Оформить заказ"
                                })]
                            })]
                        })
                    })]
                }), t && (0,
                a.jsx)(n, {
                    items: c.items,
                    totalAmount: x(),
                    onClose: () => l(!1),
                    onSuccess: () => {
                        l(!1),
                        s(!1),
                        i({
                            items: []
                        })
                    }
                })]
            })
        }
        let d = () => (0,
        a.jsx)("header", {
            className: "bg-white shadow-md sticky top-0 z-50",
            children: (0,
            a.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0,
                a.jsxs)("div", {
                    className: "flex justify-between items-center py-4",
                    children: [(0,
                    a.jsxs)("div", {
                        className: "flex items-center space-x-2",
                        children: [(0,
                        a.jsx)("i", {
                            className: "fas fa-desktop text-blue-600 text-2xl"
                        }), (0,
                        a.jsx)("h1", {
                            className: "text-xl font-bold text-gray-800",
                            children: "Absolute PC"
                        })]
                    }), (0,
                    a.jsxs)("nav", {
                        className: "hidden md:flex space-x-8",
                        children: [(0,
                        a.jsx)(c(), {
                            href: "/",
                            className: "text-gray-700 hover:text-blue-600 font-medium",
                            children: "Главная"
                        }), (0,
                        a.jsx)(c(), {
                            href: "/complect",
                            className: "text-gray-700 hover:text-blue-600 font-medium",
                            children: "Комплектующие"
                        }), (0,
                        a.jsx)(c(), {
                            href: "/configurator",
                            className: "text-gray-700 hover:text-blue-600 font-medium",
                            children: "Сборка ПК"
                        }), (0,
                        a.jsx)(c(), {
                            href: "/about",
                            className: "text-gray-700 hover:text-blue-600 font-medium",
                            children: "О нас"
                        }), (0,
                        a.jsx)(c(), {
                            href: "/contacts",
                            className: "text-gray-700 hover:text-blue-600 font-medium",
                            children: "Контакты"
                        })]
                    }), (0,
                    a.jsxs)("div", {
                        className: "flex items-center space-x-4",
                        children: [(0,
                        a.jsx)("button", {
                            className: "p-2 text-gray-600 hover:text-blue-600",
                            children: (0,
                            a.jsx)("i", {
                                className: "fas fa-search"
                            })
                        }), (0,
                        a.jsx)("button", {
                            className: "p-2 text-gray-600 hover:text-blue-600",
                            children: (0,
                            a.jsx)("i", {
                                className: "fas fa-user"
                            })
                        }), (0,
                        a.jsx)(o, {})]
                    })]
                })
            })
        })
    }
    ,
    5695: (e, s, t) => {
        var a = t(8999);
        t.o(a, "useParams") && t.d(s, {
            useParams: function() {
                return a.useParams
            }
        }),
        t.o(a, "useRouter") && t.d(s, {
            useRouter: function() {
                return a.useRouter
            }
        }),
        t.o(a, "useSearchParams") && t.d(s, {
            useSearchParams: function() {
                return a.useSearchParams
            }
        })
    }
}]);