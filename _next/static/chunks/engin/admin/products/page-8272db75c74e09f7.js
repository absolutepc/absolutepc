(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7575], {
    1512: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 7523))
    }
    ,
    5695: (e, t, r) => {
        "use strict";
        var s = r(8999);
        r.o(s, "useParams") && r.d(t, {
            useParams: function() {
                return s.useParams
            }
        }),
        r.o(s, "useRouter") && r.d(t, {
            useRouter: function() {
                return s.useRouter
            }
        }),
        r.o(s, "useSearchParams") && r.d(t, {
            useSearchParams: function() {
                return s.useSearchParams
            }
        })
    }
    ,
    7523: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => m
        });
        var s = r(5155)
          , a = r(2115)
          , l = r(6874)
          , c = r.n(l)
          , i = r(5695)
          , n = r(6766);
        function d(e) {
            let {currentImage: t, onImageUpload: r} = e
              , [l,c] = (0,
            a.useState)(!1)
              , [i,d] = (0,
            a.useState)(t || null)
              , [o,u] = (0,
            a.useState)(null)
              , m = async e => {
                var t;
                let s = null == (t = e.target.files) ? void 0 : t[0];
                if (s) {
                    if (!s.type.startsWith("image/"))
                        return void u("Пожалуйста, загрузите изображение");
                    if (s.size > 5242880)
                        return void u("Размер файла не должен превышать 5MB");
                    try {
                        c(!0),
                        u(null);
                        let e = new FormData;
                        e.append("file", s);
                        let t = await fetch("/api/upload", {
                            method: "POST",
                            body: e
                        })
                          , a = await t.json();
                        if (!t.ok)
                            throw Error(a.details || a.error || "Ошибка загрузки");
                        d(a.url),
                        r(a.url)
                    } catch (e) {
                        console.error("Ошибка загрузки:", e),
                        u(e instanceof Error ? e.message : "Ошибка при загрузке изображения")
                    } finally {
                        c(!1)
                    }
                }
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: "space-y-4",
                children: [i && (0,
                s.jsx)("div", {
                    className: "relative w-48 h-48",
                    children: (0,
                    s.jsx)(n.default, {
                        src: i,
                        alt: "Preview",
                        fill: !0,
                        className: "object-cover rounded-lg"
                    })
                }), (0,
                s.jsx)("div", {
                    className: "flex items-center justify-center w-full",
                    children: (0,
                    s.jsxs)("label", {
                        className: "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer \n                    ".concat(o ? "border-red-300 bg-red-50 hover:bg-red-100" : "border-gray-300 bg-gray-50 hover:bg-gray-100"),
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex flex-col items-center justify-center pt-5 pb-6",
                            children: [(0,
                            s.jsx)("svg", {
                                className: "w-8 h-8 mb-4 ".concat(o ? "text-red-500" : "text-gray-500"),
                                "aria-hidden": "true",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 20 16",
                                children: (0,
                                s.jsx)("path", {
                                    stroke: "currentColor",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                })
                            }), (0,
                            s.jsxs)("p", {
                                className: "mb-2 text-sm ".concat(o ? "text-red-500" : "text-gray-500"),
                                children: [(0,
                                s.jsx)("span", {
                                    className: "font-semibold",
                                    children: "Нажмите для загрузки"
                                }), " или перетащите файл"]
                            }), (0,
                            s.jsx)("p", {
                                className: "text-xs ".concat(o ? "text-red-500" : "text-gray-500"),
                                children: "PNG, JPG или GIF (макс. 5MB)"
                            })]
                        }), (0,
                        s.jsx)("input", {
                            type: "file",
                            className: "hidden",
                            accept: "image/*",
                            onChange: m,
                            disabled: l
                        })]
                    })
                }), l && (0,
                s.jsxs)("div", {
                    className: "flex items-center justify-center",
                    children: [(0,
                    s.jsx)("div", {
                        className: "animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"
                    }), (0,
                    s.jsx)("span", {
                        className: "ml-2 text-sm text-gray-500",
                        children: "Загрузка..."
                    })]
                }), o && (0,
                s.jsx)("div", {
                    className: "text-center text-sm text-red-500 bg-red-50 p-2 rounded-md",
                    children: o
                })]
            })
        }
        function o(e) {
            let {onSubmit: t, onCancel: r, initialData: l} = e
              , [c,i] = (0,
            a.useState)([])
              , [n,o] = (0,
            a.useState)(l || {
                name: "",
                description: "",
                price: 0,
                imageUrl: "",
                specs: {},
                inStock: !0,
                categoryId: 0
            })
              , [u,m] = (0,
            a.useState)([{
                key: "",
                value: ""
            }]);
            (0,
            a.useEffect)( () => {
                x()
            }
            , []);
            let x = async () => {
                try {
                    let e = await fetch("/api/categories");
                    if (!e.ok)
                        throw Error("Failed to fetch categories");
                    let t = await e.json();
                    i(t)
                } catch (e) {
                    console.error("Error fetching categories:", e)
                }
            }
              , h = (e, t, r) => {
                let s = [...u];
                s[e][t] = r,
                e === u.length - 1 && "" !== r && s.push({
                    key: "",
                    value: ""
                }),
                m(s)
            }
            ;
            return (0,
            s.jsx)("form", {
                onSubmit: e => {
                    e.preventDefault();
                    let r = u.reduce( (e, t) => {
                        let {key: r, value: s} = t;
                        return r && s && (e[r] = s),
                        e
                    }
                    , {});
                    t({
                        ...n,
                        specs: r
                    })
                }
                ,
                className: "bg-white p-6 rounded-lg shadow",
                children: (0,
                s.jsxs)("div", {
                    className: "space-y-6",
                    children: [(0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Название"
                        }), (0,
                        s.jsx)("input", {
                            type: "text",
                            required: !0,
                            value: n.name,
                            onChange: e => o({
                                ...n,
                                name: e.target.value
                            }),
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Описание"
                        }), (0,
                        s.jsx)("textarea", {
                            value: n.description,
                            onChange: e => o({
                                ...n,
                                description: e.target.value
                            }),
                            rows: 3,
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Цена"
                        }), (0,
                        s.jsx)("input", {
                            type: "number",
                            required: !0,
                            min: "0",
                            value: n.price,
                            onChange: e => o({
                                ...n,
                                price: Number(e.target.value)
                            }),
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Изображение"
                        }), (0,
                        s.jsx)(d, {
                            currentImage: n.imageUrl,
                            onImageUpload: e => {
                                o({
                                    ...n,
                                    imageUrl: e
                                })
                            }
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700",
                            children: "Категория"
                        }), (0,
                        s.jsxs)("select", {
                            required: !0,
                            value: n.categoryId,
                            onChange: e => o({
                                ...n,
                                categoryId: Number(e.target.value)
                            }),
                            className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                            children: [(0,
                            s.jsx)("option", {
                                value: "",
                                children: "Выберите категорию"
                            }), c.map(e => (0,
                            s.jsx)("option", {
                                value: e.id,
                                children: e.name
                            }, e.id))]
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsx)("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Характеристики"
                        }), u.map( (e, t) => (0,
                        s.jsxs)("div", {
                            className: "flex gap-4 mb-2",
                            children: [(0,
                            s.jsx)("input", {
                                type: "text",
                                placeholder: "Название",
                                value: e.key,
                                onChange: e => h(t, "key", e.target.value),
                                className: "flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            }), (0,
                            s.jsx)("input", {
                                type: "text",
                                placeholder: "Значение",
                                value: e.value,
                                onChange: e => h(t, "value", e.target.value),
                                className: "flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            })]
                        }, t))]
                    }), (0,
                    s.jsx)("div", {
                        children: (0,
                        s.jsxs)("label", {
                            className: "flex items-center",
                            children: [(0,
                            s.jsx)("input", {
                                type: "checkbox",
                                checked: n.inStock,
                                onChange: e => o({
                                    ...n,
                                    inStock: e.target.checked
                                }),
                                className: "rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            }), (0,
                            s.jsx)("span", {
                                className: "ml-2 text-sm text-gray-600",
                                children: "В наличии"
                            })]
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex justify-end space-x-4",
                        children: [(0,
                        s.jsx)("button", {
                            type: "button",
                            onClick: r,
                            className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50",
                            children: "Отмена"
                        }), (0,
                        s.jsx)("button", {
                            type: "submit",
                            className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700",
                            children: "Сохранить"
                        })]
                    })]
                })
            })
        }
        function u() {
            let e = (0,
            i.useSearchParams)().get("token")
              , [t,r] = (0,
            a.useState)([])
              , [l,n] = (0,
            a.useState)(!0)
              , [d,u] = (0,
            a.useState)(null)
              , [m,x] = (0,
            a.useState)(!1)
              , [h,p] = (0,
            a.useState)(null);
            (0,
            a.useEffect)( () => {
                b()
            }
            , []);
            let b = async () => {
                try {
                    let e = await fetch("/api/products");
                    if (!e.ok)
                        throw Error("Failed to fetch products");
                    let t = await e.json();
                    r(t)
                } catch (e) {
                    u(e instanceof Error ? e.message : "Something went wrong"),
                    console.error(e)
                } finally {
                    n(!1)
                }
            }
              , g = async e => {
                if (confirm("Вы уверены, что хотите удалить этот продукт?"))
                    try {
                        if (!(await fetch("/api/products/".concat(e), {
                            method: "DELETE"
                        })).ok)
                            throw Error("Failed to delete product");
                        r(t.filter(t => t.id !== e))
                    } catch (e) {
                        alert("Ошибка при удалении продукта"),
                        console.error(e)
                    }
            }
              , f = e => {
                p(e),
                x(!0)
            }
              , y = async e => {
                try {
                    let t = h ? "/api/products/".concat(h.id) : "/api/products"
                      , r = h ? "PUT" : "POST";
                    if (!(await fetch(t, {
                        method: r,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    })).ok)
                        throw Error(h ? "Failed to update product" : "Failed to create product");
                    b(),
                    x(!1),
                    p(null)
                } catch (e) {
                    alert(h ? "Ошибка при обновлении продукта" : "Ошибка при создании продукта"),
                    console.error(e)
                }
            }
              , j = async () => {
                if (confirm("Вы уверены, что хотите удалить ВСЕ товары? Это действие нельзя отменить."))
                    try {
                        if (!(await fetch("/api/products/delete-all", {
                            method: "DELETE",
                            headers: {
                                Authorization: "Bearer ".concat(e)
                            }
                        })).ok)
                            throw Error("Failed to delete all products");
                        r([])
                    } catch (e) {
                        alert("Ошибка при удалении товаров"),
                        console.error(e)
                    }
            }
            ;
            return l ? (0,
            s.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0,
                s.jsx)("div", {
                    className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                })
            }) : d ? (0,
            s.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0,
                s.jsxs)("div", {
                    className: "text-red-500",
                    children: ["Error: ", d]
                })
            }) : (0,
            s.jsxs)("div", {
                className: "min-h-screen bg-gray-100",
                children: [(0,
                s.jsx)("div", {
                    className: "bg-white shadow",
                    children: (0,
                    s.jsx)("div", {
                        className: "container mx-auto px-4 py-6",
                        children: (0,
                        s.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0,
                            s.jsx)("h1", {
                                className: "text-2xl font-bold text-gray-800",
                                children: "Управление товарами"
                            }), (0,
                            s.jsxs)("div", {
                                className: "space-x-4",
                                children: [(0,
                                s.jsx)(c(), {
                                    href: "/admin?token=".concat(e),
                                    className: "px-4 py-2 text-gray-600 hover:text-gray-800",
                                    children: "Назад"
                                }), (0,
                                s.jsx)("button", {
                                    onClick: () => {
                                        p(null),
                                        x(!0)
                                    }
                                    ,
                                    className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                    children: "Добавить товар"
                                }), (0,
                                s.jsx)("button", {
                                    onClick: j,
                                    className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
                                    children: "Удалить все"
                                })]
                            })]
                        })
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [m && (0,
                    s.jsx)("div", {
                        className: "mb-8",
                        children: (0,
                        s.jsx)(o, {
                            onSubmit: y,
                            onCancel: () => {
                                x(!1),
                                p(null)
                            }
                            ,
                            initialData: h ? {
                                name: h.name,
                                description: h.description || "",
                                price: h.price,
                                imageUrl: h.imageUrl || "",
                                specs: h.specs || {},
                                inStock: h.inStock,
                                categoryId: h.categoryId
                            } : void 0
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "bg-white rounded-lg shadow overflow-hidden",
                        children: (0,
                        s.jsxs)("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [(0,
                            s.jsx)("thead", {
                                className: "bg-gray-50",
                                children: (0,
                                s.jsxs)("tr", {
                                    children: [(0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Название"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Цена"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Наличие"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Категория"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Действия"
                                    })]
                                })
                            }), (0,
                            s.jsx)("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: t.map(e => (0,
                                s.jsxs)("tr", {
                                    children: [(0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: e.name
                                        })
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "text-sm text-gray-900",
                                            children: [e.price.toLocaleString("ru-RU"), " ₽"]
                                        })
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        s.jsx)("span", {
                                            className: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full ".concat(e.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"),
                                            children: e.inStock ? "В наличии" : "Нет в наличии"
                                        })
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: e.categoryId
                                    }), (0,
                                    s.jsxs)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium",
                                        children: [(0,
                                        s.jsx)("button", {
                                            onClick: () => f(e),
                                            className: "text-blue-600 hover:text-blue-900",
                                            children: "Изменить"
                                        }), (0,
                                        s.jsx)("button", {
                                            onClick: () => g(e.id),
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
        function m() {
            return (0,
            s.jsx)(a.Suspense, {
                fallback: (0,
                s.jsx)("div", {
                    className: "flex items-center justify-center min-h-screen",
                    children: (0,
                    s.jsx)("div", {
                        className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
                    })
                }),
                children: (0,
                s.jsx)(u, {})
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [6874, 6766, 8441, 1684, 7358], () => t(1512)),
    _N_E = e.O()
}
]);
