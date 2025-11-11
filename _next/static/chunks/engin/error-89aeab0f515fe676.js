(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8039], {
    276: (e, r, u) => {
        Promise.resolve().then(u.bind(u, 6678))
    }
    ,
    5695: (e, r, u) => {
        "use strict";
        var s = u(8999);
        u.o(s, "useParams") && u.d(r, {
            useParams: function() {
                return s.useParams
            }
        }),
        u.o(s, "useRouter") && u.d(r, {
            useRouter: function() {
                return s.useRouter
            }
        }),
        u.o(s, "useSearchParams") && u.d(r, {
            useSearchParams: function() {
                return s.useSearchParams
            }
        })
    }
    ,
    6678: (e, r, u) => {
        "use strict";
        u.r(r),
        u.d(r, {
            default: () => t
        });
        var s = u(2115)
          , a = u(5695);
        function t() {
            let e = (0,
            a.useRouter)();
            return (0,
            s.useEffect)( () => {
                e.replace("/")
            }
            , [e]),
            null
        }
    }
}, e => {
    var r = r => e(e.s = r);
    e.O(0, [8441, 1684, 7358], () => r(276)),
    _N_E = e.O()
}
]);
