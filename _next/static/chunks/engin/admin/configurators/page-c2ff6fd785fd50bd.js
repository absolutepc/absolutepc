(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9630], {
    173: (e, t, r) => {
        "use strict";
        r.d(t, {
            A: () => s.default
        });
        var s = r(2442)
    }
    ,
    7968: (e, t, r) => {
        "use strict";
        r.r(t),
        r.d(t, {
            default: () => o
        });
        var s = r(5155)
          , l = r(2115)
          , a = r(173)
          , i = r(6766);
        function n(e) {
            let {title: t, required: r, selected: a, onSelect: n} = e
              , [c,o] = (0,
            l.useState)(!1)
              , [d,m] = (0,
            l.useState)([])
              , [u,p] = (0,
            l.useState)(!1)
              , x = async () => {
                if (o(!c),
                !c && 0 === d.length) {
                    p(!0);
                    try {
                        let e = await fetch("/api/components?type=" + encodeURIComponent(t));
                        if (!e.ok)
                            throw Error("Failed to fetch components");
                        let r = await e.json();
                        m(r)
                    } catch (e) {
                        console.error("Error fetching components:", e)
                    } finally {
                        p(!1)
                    }
                }
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: "bg-white rounded-lg shadow-md overflow-hidden",
                children: [(0,
                s.jsxs)("div", {
                    className: "p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50",
                    onClick: x,
                    children: [(0,
                    s.jsxs)("div", {
                        children: [(0,
                        s.jsxs)("h3", {
                            className: "text-lg font-medium",
                            children: [t, r && (0,
                            s.jsx)("span", {
                                className: "text-red-500 ml-1",
                                children: "*"
                            })]
                        }), a ? (0,
                        s.jsxs)("div", {
                            className: "text-sm text-gray-600 mt-1",
                            children: [a.name, " - ", a.price.toLocaleString("ru-RU"), " ₽"]
                        }) : (0,
                        s.jsx)("div", {
                            className: "text-sm text-gray-400 mt-1",
                            children: "Нажмите, чтобы выбрать"
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "flex items-center",
                        children: [a && (0,
                        s.jsx)("button", {
                            onClick: e => {
                                e.stopPropagation(),
                                n(null)
                            }
                            ,
                            className: "mr-4 text-gray-400 hover:text-gray-600",
                            children: (0,
                            s.jsx)("i", {
                                className: "fas fa-times"
                            })
                        }), (0,
                        s.jsx)("i", {
                            className: "fas fa-chevron-".concat(c ? "up" : "down", " text-gray-400")
                        })]
                    })]
                }), c && (0,
                s.jsx)("div", {
                    className: "border-t",
                    children: u ? (0,
                    s.jsx)("div", {
                        className: "p-4 flex justify-center",
                        children: (0,
                        s.jsx)("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"
                        })
                    }) : 0 === d.length ? (0,
                    s.jsx)("div", {
                        className: "p-4 text-center text-gray-500",
                        children: "Нет доступных компонентов"
                    }) : (0,
                    s.jsx)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4",
                        children: d.map(e => (0,
                        s.jsx)("div", {
                            className: "p-4 rounded-lg border-2 cursor-pointer transition-colors ".concat((null == a ? void 0 : a.id) === e.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"),
                            onClick: () => {
                                n(e),
                                o(!1)
                            }
                            ,
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex items-start",
                                children: [(0,
                                s.jsx)("div", {
                                    className: "relative w-20 h-20 mr-4",
                                    children: (0,
                                    s.jsx)(i.default, {
                                        src: e.specs.imageUrl || "/images/placeholder.png",
                                        alt: e.name,
                                        fill: !0,
                                        className: "object-contain"
                                    })
                                }), (0,
                                s.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0,
                                    s.jsx)("h4", {
                                        className: "font-medium",
                                        children: e.name
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: Object.entries(e.specs).filter(e => {
                                            let[t] = e;
                                            return "imageUrl" !== t
                                        }
                                        ).map(e => {
                                            let[t,r] = e;
                                            return (0,
                                            s.jsxs)("div", {
                                                children: [t, ": ", r]
                                            }, t)
                                        }
                                        )
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "text-lg font-bold text-blue-600 mt-2",
                                        children: [e.price.toLocaleString("ru-RU"), " ₽"]
                                    })]
                                })]
                            })
                        }, e.id))
                    })
                })]
            })
        }
        var c = r(5695);
        function o() {
            let e = (0,
            c.useRouter)()
              , [t,r] = (0,
            l.useState)({
                cpu: null,
                motherboard: null,
                gpu: null,
                ram: null,
                storage: null,
                powerSupply: null,
                case: null
            })
              , [i,o] = (0,
            l.useState)("")
              , d = [{
                key: "cpu",
                title: "Процессор",
                required: !0
            }, {
                key: "motherboard",
                title: "Материнская плата",
                required: !0
            }, {
                key: "gpu",
                title: "Видеокарта",
                required: !0
            }, {
                key: "ram",
                title: "Оперативная память",
                required: !0
            }, {
                key: "storage",
                title: "Накопитель",
                required: !0
            }, {
                key: "powerSupply",
                title: "Блок питания",
                required: !0
            }, {
                key: "case",
                title: "Корпус",
                required: !0
            }]
              , m = () => Object.values(t).reduce( (e, t) => e + ((null == t ? void 0 : t.price) || 0), 0)
              , u = async () => {
                try {
                    if (!Object.values(t).some(e => null !== e))
                        return void alert("Пожалуйста, выберите хотя бы один компонент");
                    let r = {
                        name: "Моя конфигурация",
                        components: Object.fromEntries(Object.entries(t).filter(e => {
                            let[,t] = e;
                            return null !== t
                        }
                        ).map(e => {
                            let[t,r] = e;
                            return [t, {
                                name: r.name,
                                price: r.price,
                                specs: r.specs
                            }]
                        }
                        )),
                        totalPrice: m(),
                        comment: i.trim() || null
                    }
                      , s = await fetch("/api/configurator/save", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(r)
                    });
                    if (!s.ok) {
                        let e = await s.json();
                        throw Error(e.error || "Failed to save configuration")
                    }
                    let l = await s.json();
                    e.push("/configurator/".concat(l.id))
                } catch (e) {
                    console.error("Error saving configuration:", e),
                    alert(e instanceof Error ? e.message : "Произошла ошибка при сохранении конфигурации")
                }
            }
            ;
            return (0,
            s.jsxs)(s.Fragment, {
