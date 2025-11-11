(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4798], {
    1331: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 5916))
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
    5916: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => o
        });
        var s = r(5155)
          , a = r(2115)
          , l = r(6874)
          , i = r.n(l)
          , c = r(5695);
        let n = [{
            value: "PENDING",
            label: "Ожидает обработки"
        }, {
            value: "CONFIRMED",
            label: "Подтвержден"
        }, {
            value: "PAID",
            label: "Оплачен"
        }, {
            value: "ASSEMBLING",
            label: "В сборке"
        }, {
            value: "SHIPPING",
            label: "В доставке"
        }, {
            value: "COMPLETED",
            label: "Завершен"
        }, {
            value: "CANCELLED",
            label: "Отменен"
        }];
        function d() {
            let e = (0,
            c.useSearchParams)().get("token")
              , [t,r] = (0,
            a.useState)([])
              , [l,d] = (0,
            a.useState)(!0)
              , [o,x] = (0,
            a.useState)(null)
              , m = (0,
            a.useCallback)(async () => {
                try {
                    d(!0);
                    let e = await fetch("/api/orders");
                    if (!e.ok)
                        throw Error("Failed to fetch orders");
                    let t = await e.json();
                    r(t)
                } catch (e) {
                    x(e instanceof Error ? e.message : "Something went wrong"),
                    console.error(e)
                } finally {
                    d(!1)
                }
            }
            , []);
            (0,
            a.useEffect)( () => {
                m()
            }
            , [m]);
            let u = async (t, r) => {
                try {
                    if (!(await fetch("/api/orders/".concat(t), {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer ".concat(e)
                        },
                        body: JSON.stringify({
                            status: r
                        })
                    })).ok)
                        throw Error("Failed to update order status");
                    m()
                } catch (e) {
                    console.error("Error updating order status:", e),
                    alert("Ошибка при обновлении статуса заказа")
                }
            }
              , h = async () => {
                if (!e)
                    return void alert("Ошибка авторизации: отсутствует токен");
                if (confirm("Вы уверены, что хотите удалить ВСЕ заказы? Это действие нельзя отменить."))
                    try {
                        console.log("Using token:", e);
                        let t = await fetch("/api/orders/delete-all", {
                            method: "DELETE",
                            headers: {
                                Authorization: "Bearer ".concat(e)
                            }
                        });
                        if (!t.ok) {
                            let e = await t.json();
                            throw console.log("Error response:", e),
                            Error(e.error || "Failed to delete all orders")
                        }
                        r([])
                    } catch (e) {
                        console.error("Error deleting all orders:", e),
                        alert("Ошибка при удалении заказов")
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
            }) : o ? (0,
            s.jsx)("div", {
                className: "flex items-center justify-center min-h-screen",
                children: (0,
                s.jsxs)("div", {
                    className: "text-red-500",
                    children: ["Error: ", o]
                })
            }) : (0,
            s.jsx)("div", {
                className: "min-h-screen bg-gray-100",
                children: (0,
                s.jsxs)("div", {
                    className: "container mx-auto px-4 py-8",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "flex justify-between items-center mb-8",
                        children: [(0,
                        s.jsx)("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Управление заказами"
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-x-4",
                            children: [(0,
                            s.jsx)(i(), {
                                href: "/admin?token=".concat(e),
                                className: "px-4 py-2 text-gray-600 hover:text-gray-800",
                                children: "Назад"
                            }), (0,
                            s.jsx)("button", {
                                onClick: h,
                                className: "px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700",
                                children: "Удалить все"
                            })]
                        })]
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
                                        children: "ID"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Клиент"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Контакты"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Сумма"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Статус"
                                    }), (0,
                                    s.jsx)("th", {
                                        className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                        children: "Дата"
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
                                        s.jsxs)("div", {
                                            className: "text-sm text-gray-900",
                                            children: ["#", e.id]
                                        })
                                    }), (0,
                                    s.jsxs)("td", {
                                        className: "px-6 py-4",
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: e.customerName
                                        }), (0,
                                        s.jsx)("div", {
                                            className: "text-sm text-gray-500",
                                            children: e.deliveryAddress
                                        })]
                                    }), (0,
                                    s.jsxs)("td", {
                                        className: "px-6 py-4",
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: "text-sm text-gray-900",
                                            children: e.customerEmail
                                        }), (0,
                                        s.jsx)("div", {
                                            className: "text-sm text-gray-500",
                                            children: e.customerPhone
                                        })]
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        s.jsxs)("div", {
                                            className: "text-sm font-medium text-gray-900",
                                            children: [e.totalAmount.toLocaleString("ru-RU"), " ₽"]
                                        })
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: (0,
                                        s.jsx)("select", {
                                            value: e.status,
                                            onChange: t => u(e.id, t.target.value),
                                            className: "text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
                                            children: n.map(e => (0,
                                            s.jsx)("option", {
                                                value: e.value,
                                                children: e.label
                                            }, e.value))
                                        })
                                    }), (0,
                                    s.jsx)("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                        children: new Date(e.createdAt).toLocaleDateString("ru-RU")
                                    })]
                                }, e.id))
                            })]
                        })
                    })]
                })
            })
        }
        function o() {
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
                s.jsx)(d, {})
            })
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [6874, 8441, 1684, 7358], () => t(1331)),
    _N_E = e.O()
}
]);
