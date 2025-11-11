(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6631], {
    208: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 1044))
    }
    ,
    1044: (e, t, s) => {
        "use strict";
        s.r(t),
        s.d(t, {
            default: () => u
        });
        var r = s(5155)
          , a = s(2115)
          , l = s(6874)
          , i = s.n(l)
          , n = s(5695);
        let c = [{
            id: "components",
            name: "Компьютерные комплектующие"
        }, {
            id: "peripherals",
            name: "Периферия и Аксессуары"
        }, {
            id: "modding",
            name: "Мебель"
        }, {
            id: "peripherals",
            name: "Ноутбуки"
        }];
        function d(e) {
            let {onSubmit: t, onCancel: s, initialData: l} = e
              , [i,n] = (0,
            a.useState)(l || {
                name: "",
                slug: "",
                description: "",
                type: "components"
            })
              , d = e => {
                n({
                    ...i,
                    name: e,
                    slug: e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
                })
            }
            ;
            return (0,
            r.jsx)("form", {
                onSubmit: e => {
                    e.preventDefault(),
                    t(i)
                }
                ,
                className: "bg-white p-6 rounded-lg shadow",
                children: (0,
                r.jsxs)("div", {
                    className: "space-y-6",
                    children: [(0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Название"
                        }), (0,
                        r.jsx)("input", {
                            type: "text",
                            required: !0,
                            value: i.name,
                            onChange: e => d(e.target.value),
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Slug (URL)"
                        }), (0,
                        r.jsx)("input", {
                            type: "text",
                            required: !0,
                            value: i.slug,
                            onChange: e => n({
                                ...i,
                                slug: e.target.value
                            }),
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        }), (0,
                        r.jsx)("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "URL-friendly версия названия. Используйте только строчные буквы, цифры и дефисы."
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Тип категории"
                        }), (0,
                        r.jsx)("select", {
                            required: !0,
                            value: i.type,
                            onChange: e => n({
                                ...i,
                                type: e.target.value
                            }),
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                            children: c.map(e => (0,
                            r.jsx)("option", {
                                value: e.id,
                                children: e.name
                            }, e.id))
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Описание"
                        }), (0,
                        r.jsx)("textarea", {
                            value: i.description,
                            onChange: e => n({
                                ...i,
                                description: e.target.value
                            }),
                            rows: 3,
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex justify-end space-x-4",
                        children: [(0,
                        r.jsx)("button", {
                            type: "button",
                            onClick: s,
                            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50",
                            children: "Отмена"
                        }), (0,
                        r.jsx)("button", {
                            type: "submit",
                            className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",
                            children: "Сохранить"
                        })]
                    })]
                })
            })
        }
        let o = {
            components: "Компьютерные комплектующие",
            peripherals: "Периферия и Аксессуары",
            modding: "Кастомизация и Моддинг"
        };
        function m() {
            let e = (0,
            n.useSearchParams)().get("token")
              , [t,s] = (0,
            a.useState)([])
              , [l,c] = (0,
            a.useState)(!0)
              , [m,u] = (0,
            a.useState)(null)
              , [x,h] = (0,
            a.useState)(!1)
              , [p,g] = (0,
            a.useState)(null);
            (0,
            a.useEffect)( () => {
                b()
            }
            , []);
            let b = async () => {
                try {
                    let e = await fetch("/api/categories");
                    if (!e.ok)
                        throw Error("Failed to fetch categories");
                    let t = await e.json();
                    s(t)
                } catch (e) {
                    u(e instanceof Error ? e.message : "Something went wrong"),
                    console.error(e)
                } finally {
                    c(!1)
                }
            }
              , y = async e => {
                if (confirm("Вы уверены, что хотите удалить эту категорию?"))
                    try {
                        if (!(await fetch("/api/categories/".concat(e), {
                            method: "DELETE"
                        })).ok)
                            throw Error("Failed to delete category");
                        s(t.filter(t => t.id !== e))
                    } catch (e) {
                        alert("Ошибка при удалении категории"),
                        console.error(e)
                    }
            }
              , f = e => {
                g(e),
                h(!0)
            }
              , j = async e => {
                try {
                    let t = p ? "/api/categories/".concat(p.id) : "/api/categories"
                      , s = p ? "PUT" : "POST";
                    if (!(await fetch(t, {
                        method: s,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    })).ok)
                        throw Error(p ? "Failed to update category" : "Failed to create category");
                    b(),
                    h(!1),
                    g(null)
                } catch (e) {
                    alert(p ? "Ошибка при обновлении категории" : "Ошибка при создании категории"),
                    console.error(e)
                }
            }
              , N = async () => {
                if (confirm("Вы уверены, что хотите удалить ВСЕ категории? Это также удалит все связанные товары. Это действие нельзя отменить."))
                    try {
                        if (!(await fetch("/api/categories/delete-all", {
                            method: "DELETE",
                            headers: {
                                Authorization: "Bearer ".concat(e)
                            }
                        })).ok)
                            throw Error("Failed to delete all categories");
                        s([])
                    } catch (e) {
                        alert("Ошибка при удалении категорий"),
                        console.error(e)
                    }
            }
            ;
            return l ? (0,
            r.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0,
                r.jsx)("div", {
                    className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                })
            }) : m ? (0,
            r.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0,
                r.jsxs)("div", {
                    className: "text-red-500",
                    children: ["Error: ", m]
                })
            }) : (0,
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
                                children: "Управление категориями"
                            }), (0,
                            r.jsxs)("div", {
                                className: "space-x-4",
                                children: [(0,
                                r.jsx)(i(), {
                                    href: "/admin?token=".concat(e),
                                    className: "px-4 py-2 text-gray-600 hover:text-gray-800",
                                    children: "Назад"
                                }), (0,
                                r.jsx)("button", {
                                    onClick: () => {
                                        g(null),
                                        h(!0)
                                    }
                                    ,
                                    className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                    children: "Добавить категорию"
                                }), (0,
                                r.jsx)("button", {
                                    onClick: N,
                                    className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
                                    children: "Удалить все"
                                })]
                            })]
                        })
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [x && (0,
                    r.jsx)("div", {
                        className: "mb-8",
                        children: (0,
                        r.jsx)(d, {
                            onSubmit: j,
                            onCancel: () => {
                                h(!1),
                                g(null)
                            }
                            ,
                            initialData: p ? {
                                name: p.name,
                                slug: p.slug,
                                description: p.description || "",
                                type: p.type
                            } : void 0
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "bg-white rounded-lg shadow overflow-hidden",
                        children: (0,
                        r.jsxs)("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [(0,
                            r.jsx)("thead", {
                                className: "bg-gray-50",
                                children: (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Название"
                                    }), (0,
                                    r.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Slug"
                                    }), (0,
                                    r.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Тип"
                                    }), (0,
                                    r.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Описание"
                                    }), (0,
                                    r.jsx)("th", {
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Действия"
                                    })]
                                })
                            }), (0,
                            r.jsx)("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: t.map(e => (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: e.name
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "text-sm text-gray-900",
                                            children: e.slug
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "text-sm text-gray-900",
                                            children: o[e.type] || e.type
                                        })
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "px-6 py-4",
                                        children: (0,
                                        r.jsx)("div", {
                                            className: "text-sm text-gray-900",
                                            children: e.description
                                        })
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                        children: [(0,
                                        r.jsx)("button", {
                                            onClick: () => f(e),
                                            className: "text-blue-600 hover:text-blue-900",
                                            children: "Изменить"
                                        }), (0,
                                        r.jsx)("button", {
                                            onClick: () => y(e.id),
                                            className: "text-red-600 hover:text-red-900 ml-4",
                                            children: "Удалить"
                                        })]
                                    })]
                                }, e.id))
                            })]
                        })
                    })]
                })]
            })
        }
        function u() {
            return (0,
            r.jsx)(a.Suspense, {
                fallback: (0,
                r.jsx)("div", {
                    className: "flex items-center justify-center min-h-screen",
                    children: (0,
                    r.jsx)("div", {
                        className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                    })
                }),
                children: (0,
                r.jsx)(m, {})
            })
        }
    }
    ,
    5695: (e, t, s) => {
        "use strict";
        var r = s(8999);
        s.o(r, "useParams") && s.d(t, {
            useParams: function() {
                return r.useParams
            }
        }),
        s.o(r, "useRouter") && s.d(t, {
            useRouter: function() {
                return r.useRouter
            }
        }),
        s.o(r, "useSearchParams") && s.d(t, {
            useSearchParams: function() {
                return r.useSearchParams
            }
        })
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [6874, 8441, 1684, 7358], () => t(208)),
    _N_E = e.O()
}
]);
