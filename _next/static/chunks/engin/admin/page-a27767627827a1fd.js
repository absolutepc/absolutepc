(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3698], {
    5103: (e, s, a) => {
        Promise.resolve().then(a.bind(a, 8267))
    }
    ,
    5695: (e, s, a) => {
        "use strict";
        var r = a(8999);
        a.o(r, "useParams") && a.d(s, {
            useParams: function() {
                return r.useParams
            }
        }),
        a.o(r, "useRouter") && a.d(s, {
            useRouter: function() {
                return r.useRouter
            }
        }),
        a.o(r, "useSearchParams") && a.d(s, {
            useSearchParams: function() {
                return r.useSearchParams
            }
        })
    }
    ,
    8267: (e, s, a) => {
        "use strict";
        a.r(s),
        a.d(s, {
            default: () => l
        });
        var r = a(5155)
          , t = a(2115)
          , n = a(6874)
          , d = a.n(n)
          , i = a(5695);
        function o() {
            let e = (0,
            i.useRouter)()
              , s = (0,
            i.useSearchParams)()
              , a = async () => {
                try {
                    (await fetch("/api/admin/logout", {
                        method: "POST"
                    })).ok ? e.push("/admin/login") : console.error("Ошибка при выходе")
                } catch (e) {
                    console.error("Ошибка при выходе:", e)
                }
            }
            ;
            return (0,
            r.jsxs)("div", {
                className: "min-h-screen bg-gray-100",
                children: [(0,
                r.jsx)("div", {
                    className: "bg-white shadow",
                    children: (0,
                    r.jsx)("div", {
                        className: "container mx-auto px-4 py-6",
                        children: (0,
                        r.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0,
                            r.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-800",
                                children: "Админ панель"
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [(0,
                                r.jsx)(d(), {
                                    href: "/",
                                    className: "px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors",
                                    children: "На главную"
                                }), (0,
                                r.jsx)("button", {
                                    onClick: a,
                                    className: "px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors",
                                    children: "Выйти"
                                })]
                            })]
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    className: "container mx-auto px-4 py-8",
                    children: (0,
                    r.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: [(0,
                        r.jsxs)(d(), {
                            href: "/admin/products",
                            className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Управление продуктами"
                            }), (0,
                            r.jsx)("p", {
                                className: "text-gray-600",
                                children: "Добавление, редактирование и удаление продуктов"
                            })]
                        }), (0,
                        r.jsxs)(d(), {
                            href: "/admin/categories",
                            className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Управление категориями"
                            }), (0,
                            r.jsx)("p", {
                                className: "text-gray-600",
                                children: "Добавление и редактирование категорий"
                            })]
                        }), (0,
                        r.jsxs)(d(), {
                            href: "/admin/orders?token=".concat(s.get("token")),
                            className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Управление заказами"
                            }), (0,
                            r.jsx)("p", {
                                className: "text-gray-600",
                                children: "Просмотр и управление заказами клиентов"
                            })]
                        }), (0,
                        r.jsxs)(d(), {
                            href: "/admin/configurations",
                            className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Конфигурации ПК"
                            }), (0,
                            r.jsx)("p", {
                                className: "text-gray-600",
                                children: "Просмотр сохраненных конфигураций"
                            })]
                        })]
                    })
                })]
            })
        }
        function l() {
            return (0,
            r.jsx)(t.Suspense, {
                fallback: (0,
                r.jsx)("div", {
                    className: "flex items-center justify-center min-h-screen",
                    children: (0,
                    r.jsx)("div", {
                        className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                    })
                }),
                children: (0,
                r.jsx)(o, {})
            })
        }
    }
}, e => {
    var s = s => e(e.s = s);
    e.O(0, [6874, 8441, 1684, 7358], () => s(5103)),
    _N_E = e.O()
}
]);