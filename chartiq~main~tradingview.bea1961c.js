(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chartiq~main~tradingview"], {
    "00a5": function (t, e, s) {
        "use strict";
        var n = s("e48b");
        e["a"] = function (t) {
            return "string" === typeof t ? new n["a"]([[document.querySelector(t)]], [document.documentElement]) : new n["a"]([[t]], n["c"])
        }
    },
    "0165": function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return a
        }
        ));
        var n = {}
            , a = null;
        if ("undefined" !== typeof document) {
            var i = document.documentElement;
            "onmouseenter" in i || (n = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            })
        }
        function r(t, e, s) {
            return t = o(t, e, s),
                function (e) {
                    var s = e.relatedTarget;
                    s && (s === this || 8 & s.compareDocumentPosition(this)) || t.call(this, e)
                }
        }
        function o(t, e, s) {
            return function (n) {
                var i = a;
                a = n;
                try {
                    t.call(this, this.__data__, e, s)
                } finally {
                    a = i
                }
            }
        }
        function c(t) {
            return t.trim().split(/^|\s+/).map((function (t) {
                var e = ""
                    , s = t.indexOf(".");
                return s >= 0 && (e = t.slice(s + 1),
                    t = t.slice(0, s)),
                {
                    type: t,
                    name: e
                }
            }
            ))
        }
        function l(t) {
            return function () {
                var e = this.__on;
                if (e) {
                    for (var s, n = 0, a = -1, i = e.length; n < i; ++n)
                        s = e[n],
                            t.type && s.type !== t.type || s.name !== t.name ? e[++a] = s : this.removeEventListener(s.type, s.listener, s.capture);
                    ++a ? e.length = a : delete this.__on
                }
            }
        }
        function u(t, e, s) {
            var a = n.hasOwnProperty(t.type) ? r : o;
            return function (n, i, r) {
                var o, c = this.__on, l = a(e, i, r);
                if (c)
                    for (var u = 0, d = c.length; u < d; ++u)
                        if ((o = c[u]).type === t.type && o.name === t.name)
                            return this.removeEventListener(o.type, o.listener, o.capture),
                                this.addEventListener(o.type, o.listener = l, o.capture = s),
                                void (o.value = e);
                this.addEventListener(t.type, l, s),
                    o = {
                        type: t.type,
                        name: t.name,
                        value: e,
                        listener: l,
                        capture: s
                    },
                    c ? c.push(o) : this.__on = [o]
            }
        }
        e["a"] = function (t, e, s) {
            var n, a, i = c(t + ""), r = i.length;
            if (!(arguments.length < 2)) {
                for (o = e ? u : l,
                    null == s && (s = !1),
                    n = 0; n < r; ++n)
                    this.each(o(i[n], e, s));
                return this
            }
            var o = this.node().__on;
            if (o)
                for (var d, h = 0, p = o.length; h < p; ++h)
                    for (n = 0,
                        d = o[h]; n < r; ++n)
                        if ((a = i[n]).type === d.type && a.name === d.name)
                            return d.value
        }
    },
    "0a78": function (t, e, s) {
        "use strict";
        e["a"] = function (t) {
            return function () {
                return this.matches(t)
            }
        }
    },
    "166a": function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return a
        }
        )),
            s.d(e, "d", (function () {
                return i
            }
            )),
            s.d(e, "c", (function () {
                return r
            }
            )),
            s.d(e, "e", (function () {
                return C
            }
            )),
            s.d(e, "g", (function () {
                return T
            }
            )),
            s.d(e, "f", (function () {
                return k
            }
            )),
            s.d(e, "b", (function () {
                return O
            }
            ));
        var n = s("63ad");
        function a() { }
        var i = .7
            , r = 1 / i
            , o = "\\s*([+-]?\\d+)\\s*"
            , c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
            , l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
            , u = /^#([0-9a-f]{3,8})$/
            , d = new RegExp("^rgb\\(" + [o, o, o] + "\\)$")
            , h = new RegExp("^rgb\\(" + [l, l, l] + "\\)$")
            , p = new RegExp("^rgba\\(" + [o, o, o, c] + "\\)$")
            , f = new RegExp("^rgba\\(" + [l, l, l, c] + "\\)$")
            , v = new RegExp("^hsl\\(" + [c, l, l] + "\\)$")
            , m = new RegExp("^hsla\\(" + [c, l, l, c] + "\\)$")
            , _ = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };
        function g() {
            return this.rgb().formatHex()
        }
        function b() {
            return N(this).formatHsl()
        }
        function y() {
            return this.rgb().formatRgb()
        }
        function C(t) {
            var e, s;
            return t = (t + "").trim().toLowerCase(),
                (e = u.exec(t)) ? (s = e[1].length,
                    e = parseInt(e[1], 16),
                    6 === s ? w(e) : 3 === s ? new O(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : 8 === s ? x(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (255 & e) / 255) : 4 === s ? x(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, ((15 & e) << 4 | 15 & e) / 255) : null) : (e = d.exec(t)) ? new O(e[1], e[2], e[3], 1) : (e = h.exec(t)) ? new O(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = p.exec(t)) ? x(e[1], e[2], e[3], e[4]) : (e = f.exec(t)) ? x(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = v.exec(t)) ? M(e[1], e[2] / 100, e[3] / 100, 1) : (e = m.exec(t)) ? M(e[1], e[2] / 100, e[3] / 100, e[4]) : _.hasOwnProperty(t) ? w(_[t]) : "transparent" === t ? new O(NaN, NaN, NaN, 0) : null
        }
        function w(t) {
            return new O(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }
        function x(t, e, s, n) {
            return n <= 0 && (t = e = s = NaN),
                new O(t, e, s, n)
        }
        function T(t) {
            return t instanceof a || (t = C(t)),
                t ? (t = t.rgb(),
                    new O(t.r, t.g, t.b, t.opacity)) : new O
        }
        function k(t, e, s, n) {
            return 1 === arguments.length ? T(t) : new O(t, e, s, null == n ? 1 : n)
        }
        function O(t, e, s, n) {
            this.r = +t,
                this.g = +e,
                this.b = +s,
                this.opacity = +n
        }
        function E() {
            return "#" + P(this.r) + P(this.g) + P(this.b)
        }
        function S() {
            var t = this.opacity;
            return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)),
                (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
        function P(t) {
            return t = Math.max(0, Math.min(255, Math.round(t) || 0)),
                (t < 16 ? "0" : "") + t.toString(16)
        }
        function M(t, e, s, n) {
            return n <= 0 ? t = e = s = NaN : s <= 0 || s >= 1 ? t = e = NaN : e <= 0 && (t = NaN),
                new A(t, e, s, n)
        }
        function N(t) {
            if (t instanceof A)
                return new A(t.h, t.s, t.l, t.opacity);
            if (t instanceof a || (t = C(t)),
                !t)
                return new A;
            if (t instanceof A)
                return t;
            t = t.rgb();
            var e = t.r / 255
                , s = t.g / 255
                , n = t.b / 255
                , i = Math.min(e, s, n)
                , r = Math.max(e, s, n)
                , o = NaN
                , c = r - i
                , l = (r + i) / 2;
            return c ? (o = e === r ? (s - n) / c + 6 * (s < n) : s === r ? (n - e) / c + 2 : (e - s) / c + 4,
                c /= l < .5 ? r + i : 2 - r - i,
                o *= 60) : c = l > 0 && l < 1 ? 0 : o,
                new A(o, c, l, t.opacity)
        }
        function D(t, e, s, n) {
            return 1 === arguments.length ? N(t) : new A(t, e, s, null == n ? 1 : n)
        }
        function A(t, e, s, n) {
            this.h = +t,
                this.s = +e,
                this.l = +s,
                this.opacity = +n
        }
        function L(t, e, s) {
            return 255 * (t < 60 ? e + (s - e) * t / 60 : t < 180 ? s : t < 240 ? e + (s - e) * (240 - t) / 60 : e)
        }
        Object(n["a"])(a, C, {
            copy: function (t) {
                return Object.assign(new this.constructor, this, t)
            },
            displayable: function () {
                return this.rgb().displayable()
            },
            hex: g,
            formatHex: g,
            formatHsl: b,
            formatRgb: y,
            toString: y
        }),
            Object(n["a"])(O, k, Object(n["b"])(a, {
                brighter: function (t) {
                    return t = null == t ? r : Math.pow(r, t),
                        new O(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                darker: function (t) {
                    return t = null == t ? i : Math.pow(i, t),
                        new O(this.r * t, this.g * t, this.b * t, this.opacity)
                },
                rgb: function () {
                    return this
                },
                displayable: function () {
                    return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
                },
                hex: E,
                formatHex: E,
                formatRgb: S,
                toString: S
            })),
            Object(n["a"])(A, D, Object(n["b"])(a, {
                brighter: function (t) {
                    return t = null == t ? r : Math.pow(r, t),
                        new A(this.h, this.s, this.l * t, this.opacity)
                },
                darker: function (t) {
                    return t = null == t ? i : Math.pow(i, t),
                        new A(this.h, this.s, this.l * t, this.opacity)
                },
                rgb: function () {
                    var t = this.h % 360 + 360 * (this.h < 0)
                        , e = isNaN(t) || isNaN(this.s) ? 0 : this.s
                        , s = this.l
                        , n = s + (s < .5 ? s : 1 - s) * e
                        , a = 2 * s - n;
                    return new O(L(t >= 240 ? t - 240 : t + 120, a, n), L(t, a, n), L(t < 120 ? t + 240 : t - 120, a, n), this.opacity)
                },
                displayable: function () {
                    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
                },
                formatHsl: function () {
                    var t = this.opacity;
                    return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)),
                        (1 === t ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
                }
            }))
    },
    1738: function (t, e, s) {
        "use strict";
        s.d(e, "d", (function () {
            return n
        }
        )),
            s.d(e, "c", (function () {
                return a
            }
            )),
            s.d(e, "b", (function () {
                return i
            }
            )),
            s.d(e, "a", (function () {
                return r
            }
            )),
            s.d(e, "e", (function () {
                return o
            }
            ));
        var n = 1e3
            , a = 6e4
            , i = 36e5
            , r = 864e5
            , o = 6048e5
    },
    "18e2": function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return i
        }
        ));
        var n = new Date
            , a = new Date;
        function i(t, e, s, r) {
            function o(e) {
                return t(e = 0 === arguments.length ? new Date : new Date(+e)),
                    e
            }
            return o.floor = function (e) {
                return t(e = new Date(+e)),
                    e
            }
                ,
                o.ceil = function (s) {
                    return t(s = new Date(s - 1)),
                        e(s, 1),
                        t(s),
                        s
                }
                ,
                o.round = function (t) {
                    var e = o(t)
                        , s = o.ceil(t);
                    return t - e < s - t ? e : s
                }
                ,
                o.offset = function (t, s) {
                    return e(t = new Date(+t), null == s ? 1 : Math.floor(s)),
                        t
                }
                ,
                o.range = function (s, n, a) {
                    var i, r = [];
                    if (s = o.ceil(s),
                        a = null == a ? 1 : Math.floor(a),
                        !(s < n) || !(a > 0))
                        return r;
                    do {
                        r.push(i = new Date(+s)),
                            e(s, a),
                            t(s)
                    } while (i < s && s < n);
                    return r
                }
                ,
                o.filter = function (s) {
                    return i((function (e) {
                        if (e >= e)
                            while (t(e),
                                !s(e))
                                e.setTime(e - 1)
                    }
                    ), (function (t, n) {
                        if (t >= t)
                            if (n < 0)
                                while (++n <= 0)
                                    while (e(t, -1),
                                        !s(t))
                                        ;
                            else
                                while (--n >= 0)
                                    while (e(t, 1),
                                        !s(t))
                                        ;
                    }
                    ))
                }
                ,
                s && (o.count = function (e, i) {
                    return n.setTime(+e),
                        a.setTime(+i),
                        t(n),
                        t(a),
                        Math.floor(s(n, a))
                }
                    ,
                    o.every = function (t) {
                        return t = Math.floor(t),
                            isFinite(t) && t > 0 ? t > 1 ? o.filter(r ? function (e) {
                                return r(e) % t === 0
                            }
                                : function (e) {
                                    return o.count(0, e) % t === 0
                                }
                            ) : o : null
                    }
                ),
                o
        }
    },
    "1aa1": function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return b
        }
        ));
        var n = s("ba6a")
            , a = s("5665");
        function i(t) {
            return n["a"].get(Object(a["a"])("preferences.all"), {
                params: t
            })
        }
        function r(t) {
            return n["a"].post(Object(a["a"])("preferences.update"), t)
        }
        var o = {
            getTours: i,
            updateTours: r
        }
            , c = s("5fb0")
            , l = s("b202");
        let u = !0;
        const d = "tour";
        let h = ["default", "order", "table", "notification", "marketdepth", "chart"]
            , p = {};
        h.forEach(t => {
            p[t] = !0
        }
        );
        const f = {
            tours: Object(l["b"])(d, "tours") || null,
            toursError: null,
            toursFetchStatus: c["b"].initial
        }
            , v = {
                tours: t => t.tours,
                toursError: t => t.toursError,
                toursFetchStatus: t => t.toursFetchStatus
            }
            , m = {
                setTours(t, e) {
                    t.tours = e,
                        Object(l["d"])(d, "tours", e)
                },
                setDefaultTours(t) {
                    t.tours = p,
                        Object(l["d"])(d, "tours", t.tours)
                },
                setTour(t, { name: e, value: s }) {
                    t.tours = {
                        ...t.tours,
                        [e]: s
                    },
                        Object(l["d"])(d, "tours", t.tours)
                },
                setToursError(t, e) {
                    t.toursError = e
                },
                setToursFetchStatus(t, e) {
                    t.toursFetchStatus = e
                },
                clearTours(t) {
                    t.tours = p,
                        Object(l["d"])(d, "tours", p)
                }
            }
            , _ = {
                fetchTours({ commit: t, state: e }) {
                    t("setToursFetchStatus", c["b"].fetching);
                    let s = {
                        key: "tours"
                    };
                    o.getTours(s).then(e => {
                        e && e.data && e.data.data && e.data.data.tours && t("setTours", JSON.parse(e.data.data.tours)),
                            t("setToursFetchStatus", c["b"].success)
                    }
                    ).catch(e => {
                        t("setToursFetchStatus", c["b"].error)
                    }
                    )
                },
                updateTours({ commit: t, state: e }) {
                    let s = {
                        key: "tours",
                        value: JSON.stringify(e.tours)
                    };
                    o.updateTours(s)
                }
            };
        var g = {
            state: f,
            getters: v,
            mutations: m,
            actions: _,
            namespaced: u
        };
        class b {
        }
        b.namespace = d,
            b.install = function (t, e) {
                e.store && e.store.registerModule(d, g)
            }
    },
    "25b5": function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return n
        }
        )),
            s.d(e, "b", (function () {
                return i
            }
            ));
        const n = "marketwatch"
            , a = {
                SEARCH: n + ".search",
                ADD: n + ".add"
            }
            , i = {
                CLOSE_ABSOLUTE: "close-abs",
                CLOSE_PERCENTAGE: "close-percent",
                CLOSE_ABSOLUTE_PERCENTAGE: "close-all",
                OPEN_ABSOLUTE: "open-abs",
                OPEN_PERCENTAGE: "open-percent",
                OPEN_ABSOLUTE_PERCENTAGE: "open-all"
            };
        e["c"] = {
            NAMESPACE: n,
            EVENTS: a,
            PRICE_CHANGE_TYPES: i
        }
    },
    2739: function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return r
        }
        )),
            s.d(e, "a", (function () {
                return o
            }
            )),
            s.d(e, "c", (function () {
                return u
            }
            ));
        var n = s("18e2")
            , a = s("1738");
        function i(t) {
            return Object(n["a"])((function (e) {
                e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t) % 7),
                    e.setUTCHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setUTCDate(t.getUTCDate() + 7 * e)
            }
            ), (function (t, e) {
                return (e - t) / a["e"]
            }
            ))
        }
        var r = i(0)
            , o = i(1)
            , c = i(2)
            , l = i(3)
            , u = i(4)
            , d = i(5)
            , h = i(6);
        r.range,
            o.range,
            c.range,
            l.range,
            u.range,
            d.range,
            h.range
    },
    "364b": function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return o
        }
        ));
        var n = s("a317");
        function a(t) {
            return function () {
                this.style.removeProperty(t)
            }
        }
        function i(t, e, s) {
            return function () {
                this.style.setProperty(t, e, s)
            }
        }
        function r(t, e, s) {
            return function () {
                var n = e.apply(this, arguments);
                null == n ? this.style.removeProperty(t) : this.style.setProperty(t, n, s)
            }
        }
        function o(t, e) {
            return t.style.getPropertyValue(e) || Object(n["a"])(t).getComputedStyle(t, null).getPropertyValue(e)
        }
        e["a"] = function (t, e, s) {
            return arguments.length > 1 ? this.each((null == e ? a : "function" === typeof e ? r : i)(t, e, null == s ? "" : s)) : o(this.node(), t)
        }
    },
    "40f2": function (t, e, s) {
        "use strict";
        var n = s("2f62")
            , a = s("9f74")
            , i = s("25b5");
        e["a"] = {
            inject: ["instrumentManager"],
            computed: {
                ...Object(n["d"])(a["b"], ["currentWatchId", "marketwatches"]),
                currentMarketwatchMap() {
                    let t = {};
                    if (!this.marketwatches)
                        return t;
                    let e = this.marketwatches[this.currentWatchId];
                    if (!e || !e.items)
                        return t;
                    for (let s of e.items) {
                        let e = this.instrumentManager.get(s.tradingsymbol, s.segment);
                        if (!e)
                            break;
                        let n = e.tradingsymbol + ":" + e.exchange;
                        t[n] = !0
                    }
                    return t
                }
            },
            methods: {
                isInMarketwatch(t, e) {
                    return !this.marketwatches || 0 !== Object.keys(this.currentMarketwatchMap).length && (this.currentMarketwatchMap && this.currentMarketwatchMap[t + ":" + e])
                },
                addToMarketWatch(t, e) {
                    let s = this.instrumentManager.get(t, null, e);
                    s && this.$events.emit(i["c"].EVENTS.ADD, {
                        instrument: s
                    })
                }
            }
        }
    },
    4230: function (t, e, s) {
        "use strict";
        function n() {
            return []
        }
        e["a"] = function (t) {
            return null == t ? n : function () {
                return this.querySelectorAll(t)
            }
        }
    },
    "4cc0": function (t, e, s) {
        "use strict";
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return t.showWidget ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hide,
                    expression: "hide"
                }],
                staticClass: "market-depth-widget",
                attrs: {
                    "z-index": 13
                },
                on: {
                    close: t.hide
                }
            }, [s("div", {
                staticClass: "row market-depth-widget-header",
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [s("div", {
                staticClass: "instrument-search"
            }, [s("omnisearch", {
                ref: "omnisearch",
                attrs: {
                    "ins-manager": t.instrumentManager,
                    "max-results": 15
                },
                on: {
                    add: t.updateInstrument
                }
            })], 1), t._v(" "), t.currentInstrument ? s("div", {
                staticClass: "row instrument-info-header"
            }, [s("div", {
                staticClass: "seven columns tradingsymbol-wrapper"
            }, [s("h3", {
                staticClass: "tradingsymbol"
            }, [t.instrumentNiceName ? s("span", {
                domProps: {
                    innerHTML: t._s(t.instrumentNiceName)
                }
            }) : s("span", [t._v(t._s(t.currentInstrument.tradingsymbol))]), t._v(" "), s("span", {
                staticClass: "text-xsmall dim"
            }, [t._v(t._s(t.currentInstrument.exchange))]), t._v(" "), t.currentInstrument.auctionNumber ? s("span", {
                staticClass: "text-label orange tag-auction"
            }, [t._v("AUCTION #" + t._s(t.currentInstrument.auctionNumber))]) : t._e()])]), t._v(" "), s("div", {
                staticClass: "five columns instrument-info"
            }, [t.currentTick ? s("span", {
                class: {
                    up: t.currentTick.change > 0,
                    down: t.currentTick.change < 0
                }
            }, [s("span", {
                staticClass: "last-price"
            }, [t._v(t._s(t._f("decimalPad")(t.currentTick.lastPrice, t.currentInstrument.precision)))]), t._v(" "), s("span", {
                staticClass: "price-change text-xsmall"
            }, [s("span", {
                staticClass: "absolute"
            }, [t.currentTick.absoluteChange > 0 ? s("span", [t._v("+")]) : t._e(), t.currentTick.absoluteChange < 0 ? s("span") : t._e(), t._v(t._s(t._f("decimalPad")(t.currentTick.absoluteChange, t.currentInstrument.precision)) + "\n\t\t\t\t\t\t")]), t._v(" "), s("span", {
                staticClass: "percentage"
            }, [t._v("\n\t\t\t\t\t\t\t("), t.currentTick.absoluteChange > 0 ? s("span", [t._v("+")]) : t._e(), t.currentTick.absoluteChange < 0 ? s("span") : t._e(), t._v(t._s(t._f("decimalPad")(t.currentTick.change, 2)) + "%)\n\t\t\t\t\t\t")])])]) : t._e()])]) : t._e()]), t._v(" "), s("div", {
                staticClass: "market-depth-widget-body",
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [t.currentInstrument ? s("market-depth", {
                attrs: {
                    data: t.marketDepthtData,
                    "hide-meta": t.hideMeta
                }
            }) : s("div", {
                staticClass: "row"
            }, [s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/marketwatch.svg"))
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("h2", [t._v("Find an instrument")]), t._v(" "), s("p", [t._v("Use the above search bar to find an instrument")])])])], 1)], 1), t._v(" "), s("div", {
                staticClass: "positions-info-footer actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "four columns"
            }, [t.isCreateGTT && !t.currentInstrument.auctionNumber ? s("su-button", {
                staticClass: "button-outline button-blue",
                nativeOn: {
                    click: function (e) {
                        return t.createGTT(t.currentInstrument)
                    }
                }
            }, [t._v("Create GTT")]) : t._e(), t._v("\n\t\t\t\t \n\t\t\t")], 1), t._v(" "), s("div", {
                staticClass: "eight columns text-right"
            }, [t.currentInstrument && t.currentInstrument.tradable && !t.currentInstrument.auctionNumber ? s("su-button", {
                staticClass: "button-outline button-blue",
                nativeOn: {
                    click: function (e) {
                        return t.placeOrder("BUY")
                    }
                }
            }, [t._v("Buy")]) : t._e(), t._v(" "), t.currentInstrument && t.currentInstrument.tradable ? s("su-button", {
                staticClass: "button-outline button-orange",
                nativeOn: {
                    click: function (e) {
                        return t.placeOrder("SELL")
                    }
                }
            }, [t._v("Sell "), t.currentInstrument.auctionNumber ? s("span", [t._v("at auction")]) : t._e()]) : t._e(), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function (e) {
                        return t.hide.apply(null, arguments)
                    }
                }
            }, [t._v("Close")])], 1)])])]) : t._e()
        }
            , a = []
            , i = s("2f62")
            , r = s("5fb0")
            , o = s("58b4")
            , c = s("9c9e")
            , l = s("d9d2")
            , u = s("c184")
            , d = s("39e3")
            , h = s("0a3b")
            , p = {
                name: "market-depth-widget",
                mixins: [c["a"]],
                inject: ["instrumentManager"],
                components: {
                    "market-depth": o["a"],
                    omnisearch: u["a"]
                },
                data() {
                    return {
                        showWidget: !1,
                        currentToken: null,
                        currentInstrument: null,
                        hideMeta: !1,
                        keyboardShortcutEvents: [{
                            keys: ["66"],
                            cb: () => this.placeOrder("BUY"),
                            stop: !0,
                            prevent: !0
                        }, {
                            keys: ["83"],
                            cb: () => this.placeOrder("SELL"),
                            stop: !0,
                            prevent: !0
                        }],
                        params: null
                    }
                },
                created() {
                    this.$events.on(r["c"].showMarketDepthWidget, this.show)
                },
                computed: {
                    ...Object(i["d"])(d["b"], ["ticks"]),
                    currentTick() {
                        return this.ticks[this.currentToken]
                    },
                    marketDepthtData() {
                        return {
                            instrument: this.currentInstrument,
                            tag: "market-depth-widget",
                            order: this.params.order
                        }
                    },
                    instrumentNiceName() {
                        if (this.currentInstrument && this.currentInstrument.niceName)
                            return Object(h["a"])(this.currentInstrument.niceName)
                    },
                    isCreateGTT() {
                        return this.currentInstrument && ("NSE" === this.currentInstrument.exchange || "BSE" === this.currentInstrument.exchange || "NFO" === this.currentInstrument.exchange)
                    }
                },
                methods: {
                    show(t) {
                        this.params = t,
                            t && t.instrument ? (this.currentInstrument = t.instrument,
                                this.currentToken = t.instrument.instrumentToken) : (this.currentInstrument = null,
                                    this.currentToken = null),
                            this.hideMeta = t && t.hideMeta,
                            this.showWidget = !0,
                            this.$keyEvents.register(this.keyboardShortcutEvents),
                            this.$nextTick(() => {
                                this.$refs.omnisearch.$refs.input.focus()
                            }
                            )
                    },
                    hide() {
                        this.showWidget = !1,
                            this.$keyEvents.deregister(this.keyboardShortcutEvents)
                    },
                    placeOrder(t) {
                        let e = {
                            instrument: this.currentInstrument,
                            transactionType: t,
                            quantity: this.currentInstrument.lotSize || 1,
                            price: this.currentTick && this.currentTick.lastPrice,
                            lastPrice: this.currentTick && this.currentTick.lastPrice
                        };
                        this.params.order && (e = {
                            ...e,
                            ...this.params.order
                        }),
                            this.$events.emit(l["b"].EVENTS.ORDER_PLACE, e)
                    },
                    updateInstrument({ instrument: t }) {
                        this.show({
                            instrument: t
                        })
                    },
                    createGTT(t) {
                        this.$events.emit(l["b"].EVENTS.GTT_PLACE, {
                            lastPrice: this.currentTick && this.currentTick.lastPrice,
                            condition: {
                                tradingsymbol: t.tradingsymbol,
                                exchange: t.exchange
                            }
                        }),
                            this.hide()
                    },
                    isEquity(t) {
                        return this.instrumentManager.IsEquity(t)
                    }
                }
            }
            , f = p
            , v = s("0c7c")
            , m = Object(v["a"])(f, n, a, !1, null, null, null);
        e["a"] = m.exports
    },
    "58b4": function (t, e, s) {
        "use strict";
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("div", {
                staticClass: "market-depth"
            }, [t.isLoader ? s("div", {
                staticClass: "loader"
            }, [s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            })], 1) : t._e(), t._v(" "), t.isDepthLoaded || t.isExtendedDepthLoaded ? s("div", {
                directives: [{
                    name: "tour",
                    rawName: "v-tour",
                    value: "marketdepth",
                    expression: "'marketdepth'"
                }],
                staticClass: "depth-table"
            }, [t.instrument.tradable && t.depth ? s("div", {
                staticClass: "row"
            }, t._l(["buy", "sell"], (function (e, n) {
                return s("table", {
                    key: +n,
                    staticClass: "six columns",
                    class: e
                }, [s("thead", [s("tr", [s("th", {
                    staticClass: "order-price"
                }, ["buy" === e ? s("span", [t._v("Bid")]) : t._e(), t._v(" "), "sell" === e ? s("span", [t._v("Offer")]) : t._e()]), t._v(" "), s("th", {
                    staticClass: "orders"
                }, [t._v("Orders")]), t._v(" "), s("th", {
                    staticClass: "text-right quantity"
                }, [t._v("Qty.")])])]), t._v(" "), s("tbody", t._l(t.depth[e], (function (n, a) {
                    return s("tr", {
                        key: a,
                        on: {
                            click: function (s) {
                                t.openOrderWindow(e.toUpperCase(), t.instrument, n.price)
                            }
                        }
                    }, [s("td", {
                        staticClass: "rate"
                    }, [t._v(t._s(t._f("decimalPad")(n.price, t.instrument.precision)))]), t._v(" "), s("td", {
                        staticClass: "orders"
                    }, [t._v(t._s(n.orders))]), t._v(" "), s("td", {
                        staticClass: "text-right quantity",
                        style: t.weightedBG(n.quantity, t.depth[e], "quantity", "buy" === e ? "65, 132, 243" : "255, 87, 34")
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(n.quantity) + "\n\t\t\t\t\t\t")])])
                }
                )), 0), t._v(" "), s("tfoot", [s("tr", [s("td", [t._v("Total")]), t._v(" "), "buy" === e ? s("td", {
                    staticClass: "text-right",
                    attrs: {
                        colspan: "2"
                    }
                }, [t._v(t._s(t._f("inrFormat")(t.ticks[t.token].totalBuyQuantity, 0)))]) : t._e(), t._v(" "), "sell" === e ? s("td", {
                    staticClass: "text-right",
                    attrs: {
                        colspan: "2"
                    }
                }, [t._v(t._s(t._f("inrFormat")(t.ticks[t.token].totalSellQuantity, 0)))]) : t._e()])])])
            }
            )), 0) : t._e(), t._v(" "), t.isExtendedDepthAvailable ? s("div", {
                staticClass: "depth-toggle",
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            e.stopPropagation(),
                            t.toggleDepthType.apply(null, arguments)
                    }
                }
            }, [t.isExtendedDepth && !t.isExtendedDepthLoaded ? s("div", {
                staticClass: "loader"
            }, [s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            })], 1) : t._e(), t._v(" "), t.isExtendedDepth ? s("a", {
                staticClass: "text-center",
                attrs: {
                    href: ""
                }
            }, [s("span", {
                staticClass: "icon icon-chevron-up"
            }), t._v(" View 5 depth")]) : s("a", {
                staticClass: "text-center",
                attrs: {
                    href: ""
                }
            }, [s("span", {
                staticClass: "icon icon-chevron-down"
            }), t._v(" View 20 depth")])]) : t._e()]) : t._e(), t._v(" "), t.isOHLC ? s("div", {
                staticClass: "ohlc"
            }, [s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Open")]), t._v(" "), t.ticks[t.token].openPrice ? s("a", {
                staticClass: "value",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.openOrderWindow("BUY", t.instrument, t.ticks[t.token].openPrice)
                    }
                }
            }, [t._v(t._s(t._f("decimalPad")(t.ticks[t.token].openPrice, t.instrument.precision)) + "\n\t\t\t\t")]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("High")]), t._v(" "), t.ticks[t.token].highPrice ? s("a", {
                staticClass: "value",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.openOrderWindow("BUY", t.instrument, t.ticks[t.token].highPrice)
                    }
                }
            }, [t._v(t._s(t._f("decimalPad")(t.ticks[t.token].highPrice, t.instrument.precision)) + "\n\t\t\t\t")]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])])]), t._v(" "), s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Low")]), t._v(" "), t.ticks[t.token].lowPrice ? s("a", {
                staticClass: "value",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.openOrderWindow("BUY", t.instrument, t.ticks[t.token].lowPrice)
                    }
                }
            }, [t._v(t._s(t._f("decimalPad")(t.ticks[t.token].lowPrice, t.instrument.precision)) + "\n\t\t\t\t")]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Prev. Close")]), t._v(" "), t.ticks[t.token].closePrice ? s("a", {
                staticClass: "value",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.openOrderWindow("BUY", t.instrument, t.ticks[t.token].closePrice)
                    }
                }
            }, [t._v(t._s(t._f("decimalPad")(t.ticks[t.token].closePrice, t.instrument.precision)) + "\n\t\t\t\t")]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])])]), t._v(" "), t.instrument.tradable ? s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Volume")]), t._v(" "), t.ticks[t.token].volume ? s("span", {
                staticClass: "value"
            }, [t._v(t._s(t._f("inrFormat")(t.ticks[t.token].volume, 0)))]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Avg. price")]), t._v(" "), t.ticks[t.token].averagePrice ? s("a", {
                staticClass: "value",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.openOrderWindow("BUY", t.instrument, t.ticks[t.token].averagePrice)
                    }
                }
            }, [t._v(t._s(t._f("decimalPad")(t.ticks[t.token].averagePrice, t.instrument.precision)) + "\n\t\t\t\t")]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])])]) : t._e(), t._v(" "), t.instrument.tradable ? s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("LTQ")]), t._v(" "), t.ticks[t.token].lastQuantity ? s("span", {
                staticClass: "value"
            }, [t._v(t._s(t._f("inrFormat")(t.ticks[t.token].lastQuantity, 0)))]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("LTT")]), t._v(" "), t.ticks[t.token].lastTradedTime ? s("span", {
                staticClass: "value"
            }, [t._v(t._s(t.ticks[t.token].lastTradedTime))]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])])]) : t._e(), t._v(" "), !t.instrument.tradable || "OPT" !== t.instrument.type && "FUT" !== t.instrument.type ? t._e() : s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Expiry")]), t._v(" "), t.data.expiry ? s("span", {
                staticClass: "value"
            }, [t._v(t._s(t.data.expiry))]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("OI")]), t._v(" "), t.ticks[t.token].oi ? s("span", {
                staticClass: "value"
            }, [t._v(t._s(t.ticks[t.token].oi))]) : s("span", {
                staticClass: "value"
            }, [t._v("N/A")])])]), t._v(" "), t.circuitLimits && t.circuitLimits.lower && t.circuitLimits.upper ? s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Lower circuit")]), t._v(" "), s("span", {
                staticClass: "value"
            }, [t._v(t._s(t._f("decimalPad")(t.circuitLimits.lower, t.instrument.precision)))])]), t._v(" "), s("div", {
                staticClass: "six columns"
            }, [s("label", [t._v("Upper circuit")]), t._v(" "), s("span", {
                staticClass: "value"
            }, [t._v(t._s(t._f("decimalPad")(t.circuitLimits.upper, t.instrument.precision)))])])]) : t._e(), t._v(" "), t.instrument.underlying ? s("div", {
                staticClass: "row"
            }, [s("div", {
                staticClass: "six columns underlying"
            }, [s("label", [t._v(t._s(t.instrument.underlying.niceName))]), t._v(" "), t.ticks[t.underlyingToken].lastPrice ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "value",
                attrs: {
                    title: "Underlying LTP"
                }
            }, [t._v(t._s(t._f("decimalPad")(t.ticks[t.underlyingToken].lastPrice, t.instrument.underlying.precision)))]) : s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "value",
                attrs: {
                    title: "Underlying LTP"
                }
            }, [t._v("N/A")])]), t._v(" "), s("div", {
                staticClass: "six columns"
            })]) : t._e()]) : t._e()])
        }
            , a = []
            , i = s("2f62")
            , r = s("d9d2")
            , o = s("39e3");
        const c = "depth"
            , l = "extendedDepth"
            , u = "marketdepth";
        var d = {
            inject: ["ticker", "reactive"],
            props: {
                data: {
                    required: !0
                },
                type: {
                    type: String,
                    default: "depth"
                },
                hideMeta: Boolean
            },
            data() {
                return {
                    depthType: this.type,
                    circuitLimits: null
                }
            },
            computed: {
                ...Object(i["d"])(o["b"], ["ticks", "tickerConnectionStatus"]),
                instrument() {
                    return this.data.instrument
                },
                token() {
                    return this.data.instrument.instrumentToken
                },
                underlyingToken() {
                    return this.data.instrument.underlying && this.data.instrument.underlying.instrumentToken
                },
                tag() {
                    return this.data.tag || u
                },
                isDepthLoaded() {
                    return this.instrument && this.instrument.tradable && this.ticks[this.token] && this.ticks[this.token].depth && this.ticks[this.token].depth.buy
                },
                isExtendedDepthLoaded() {
                    return this.instrument && this.instrument.tradable && this.ticks[this.token] && this.ticks[this.token].extendedDepth && this.ticks[this.token].extendedDepth.buy
                },
                isExtendedDepth() {
                    return this.depthType === l
                },
                isExtendedDepthAvailable() {
                    return !(!this.reactive.extendedTicker || !this.instrument) && ("NSE" === this.instrument.exchange && !this.instrument.auctionNumber)
                },
                isOHLC() {
                    return !this.$props.hideMeta && (this.isDepthLoaded || this.instrument && this.ticks[this.token] && this.ticks[this.token].closePrice)
                },
                isLoader() {
                    return this.instrument && !this.instrument.tradable ? !this.isOHLC : !this.isDepthLoaded
                },
                depth() {
                    return this.depthType === l && this.isExtendedDepthLoaded ? this.ticks[this.token][l] : this.ticks[this.token][c]
                }
            },
            created() {
                this.subscribe(this.token, this.underlyingToken),
                    this.getCircuitLimits(this.token, this.underlyingToken)
            },
            beforeDestroy() {
                this.unsubscribe(this.token, this.underlyingToken)
            },
            watch: {
                data(t, e) {
                    e.instrument.instrumentToken !== t.instrument.instrumentToken && (this.unsubscribe(e.instrument.instrumentToken, e.instrument.underlying && e.instrument.underlying.instrumentToken),
                        this.subscribe(t.instrument.instrumentToken, t.instrument.underlying && t.instrument.underlying.instrumentToken),
                        this.getCircuitLimits(t.instrument.instrumentToken))
                }
            },
            methods: {
                unsubscribe(t, e) {
                    this.ticker.setMode(this.ticker.modeLTPC, [t], this.tag),
                        this.ticker.unsubscribe([t], this.tag),
                        this.reactive.extendedTicker && this.reactive.extendedTicker.unsubscribe([t], this.tag),
                        e && this.ticker.unsubscribe([e], this.tag)
                },
                subscribe(t, e) {
                    this.ticker.subscribe([t], this.tag),
                        this.ticker.setMode(this.ticker.modeFull, [t], this.tag),
                        e && (this.ticker.subscribe([e], this.tag),
                            this.ticker.setMode(this.ticker.modeLTP, [e], this.tag)),
                        this.reactive.extendedTicker && this.depthType === l && (this.reactive.extendedTicker.subscribe([t], this.tag),
                            this.reactive.extendedTicker.setMode(this.reactive.extendedTicker.modeFull, [t], this.tag))
                },
                getCircuitLimits(t) {
                    this.ticker.getQuote(t.toString(), [t], ["lower_circuit_limit", "upper_circuit_limit", "expiry"]).then(t => {
                        t && null !== t[0] && null !== t[0][0] && null !== t[0][1] && (this.circuitLimits = {
                            lower: t[0][0],
                            upper: t[0][1]
                        })
                    }
                    ).catch(() => { }
                    )
                },
                openOrderWindow(t, e, s) {
                    if (!e.tradable)
                        return;
                    let n = {
                        instrument: e,
                        transactionType: t,
                        orderType: r["b"].ORDER_TYPE.LIMIT,
                        quantity: e.lotSize || 1,
                        price: s,
                        lastPrice: this.ticks[e.instrumentToken] && this.ticks[e.instrumentToken].lastPrice
                    };
                    this.data.order && (n = {
                        ...n,
                        ...this.data.order
                    }),
                        this.$events.emit(r["b"].EVENTS.ORDER_PLACE, n)
                },
                weightedBG(t, e, s, n) {
                    let a = e[0][s]
                        , i = e[0][s];
                    for (let o = 0; o < e.length; o++)
                        a > e[o][s] && (a = e[o][s]),
                            i < e[o][s] && (i = e[o][s]);
                    let r = .05;
                    return a !== i && (r = (t - a) / (i - a),
                        0 === r && (r = .05)),
                        "background: linear-gradient(to left, rgba(" + n + ", 0.1) " + 100 * r + "%, transparent " + 100 * r + "%)"
                },
                toggleDepthType() {
                    this.depthType === l ? (this.depthType = c,
                        this.reactive.extendedTicker && this.reactive.extendedTicker.unsubscribe([this.token], this.tag),
                        this.ticker.subscribe([this.token], this.tag),
                        this.ticker.setMode(this.ticker.modeFull, [this.token], this.tag)) : this.reactive.extendedTicker && (this.depthType = l,
                            this.reactive.extendedTicker.subscribe([this.token], this.tag),
                            this.reactive.extendedTicker.setMode(this.reactive.extendedTicker.modeFull, [this.token], this.tag))
                }
            }
        }
            , h = d
            , p = s("0c7c")
            , f = Object(p["a"])(h, n, a, !1, null, null, null);
        e["a"] = f.exports
    },
    "5a9e": function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return n
        }
        ));
        const n = "orders-basket"
            , a = {
                PLACE: "PLACE",
                CANCEL: "CANCEL"
            }
            , i = {
                ADD: n + ".add",
                REMOVE: n + ".remove",
                CLEAR: n + ".clear",
                SHOW: n + ".show",
                COMPLETE: n + ".complete",
                ORDERS_BASKET_CREATE: n + ".advanced.do.create",
                ORDERS_BASKET_MODIFY: n + ".advanced.do.modify",
                ORDERS_BASKET_DELETE: n + ".advanced.do.delete",
                ORDERS_BASKET_DO_MINIMIZE: n + ".advanced.do.minimize",
                ORDERS_BASKET_ON_CLOSE: n + ".advanced.on.close",
                ORDERS_BASKET_ON_CREATE: n + ".advanced.on.create",
                ORDERS_BASKET_ON_DELETE: n + ".advanced.on.delete",
                ORDERS_BASKET_ON_MODIFY: n + ".advanced.on.modify",
                ORDERS_BASKET_ON_FINISH: n + ".advanced.on.finish",
                ORDERS_BASKET_ON_CLEAR: n + ".advanced.on.clear"
            };
        e["b"] = {
            NAMESPACE: n,
            TYPES: a,
            EVENTS: i
        }
    },
    "63ad": function (t, e, s) {
        "use strict";
        function n(t, e) {
            var s = Object.create(t.prototype);
            for (var n in e)
                s[n] = e[n];
            return s
        }
        s.d(e, "b", (function () {
            return n
        }
        )),
            e["a"] = function (t, e, s) {
                t.prototype = e.prototype = s,
                    s.constructor = t
            }
    },
    "6cd4": function (t, e, s) {
        "use strict";
        var n = s("e311");
        e["a"] = function (t) {
            var e = t += ""
                , s = e.indexOf(":");
            return s >= 0 && "xmlns" !== (e = t.slice(0, s)) && (t = t.slice(s + 1)),
                n["a"].hasOwnProperty(e) ? {
                    space: n["a"][e],
                    local: t
                } : t
        }
    },
    "6e95": function (t, e, s) {
        "use strict";
        s("cddb")
    },
    "6eb2": function (t, e, s) {
        "use strict";
        var n = s("18e2")
            , a = s("1738")
            , i = Object(n["a"])((function (t) {
                t.setUTCHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setUTCDate(t.getUTCDate() + e)
            }
            ), (function (t, e) {
                return (e - t) / a["a"]
            }
            ), (function (t) {
                return t.getUTCDate() - 1
            }
            ));
        e["a"] = i;
        i.range
    },
    "6fd3": function (t, e, s) {
        "use strict";
        function n() { }
        e["a"] = function (t) {
            return null == t ? n : function () {
                return this.querySelector(t)
            }
        }
    },
    "742c": function (t, e, s) {
        "use strict";
        var n = s("18e2")
            , a = s("1738")
            , i = Object(n["a"])((function (t) {
                t.setHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setDate(t.getDate() + e)
            }
            ), (function (t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * a["c"]) / a["a"]
            }
            ), (function (t) {
                return t.getDate() - 1
            }
            ));
        e["a"] = i;
        i.range
    },
    "77ae": function (t, e, s) {
        "use strict";
        var n = s("18e2")
            , a = Object(n["a"])((function (t) {
                t.setUTCMonth(0, 1),
                    t.setUTCHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setUTCFullYear(t.getUTCFullYear() + e)
            }
            ), (function (t, e) {
                return e.getUTCFullYear() - t.getUTCFullYear()
            }
            ), (function (t) {
                return t.getUTCFullYear()
            }
            ));
        a.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Object(n["a"])((function (e) {
                e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0)
            }
            ), (function (e, s) {
                e.setUTCFullYear(e.getUTCFullYear() + s * t)
            }
            )) : null
        }
            ,
            e["a"] = a;
        a.range
    },
    "7bdc": function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return l
        }
        ));
        var n = s("c6c3")
            , a = s("dba6")
            , i = s("5fb0")
            , r = s("025e")
            , o = s("b202");
        let c = !0;
        const l = a["a"]
            , u = {
                positions: null,
                positionsError: null,
                positionsFetchStatus: i["b"].initial,
                isDayHistory: Object(o["b"])("", "positions.is_day_history") || !1
            }
            , d = {
                positions: t => t.positions,
                positionsError: t => t.positionsError,
                positionsFetchStatus: t => t.positionsFetchStatus,
                isDayHistory: t => t.isDayHistory
            }
            , h = {
                setPositions(t, e) {
                    t.positions = e
                },
                setPositionsError(t, e) {
                    t.positionsError = e
                },
                setPositionsFetchStatus(t, e) {
                    t.positionsFetchStatus = e
                },
                toggleDayHistory(t) {
                    t.isDayHistory = !t.isDayHistory,
                        Object(o["d"])("", "positions.is_day_history", t.isDayHistory)
                }
            }
            , p = {
                fetchPositions({ commit: t, state: e }) {
                    t("setPositionsFetchStatus", i["b"].fetching);
                    let s = n["a"].getPositions();
                    Object(r["i"])({
                        commit: t,
                        apiPromise: s,
                        data: "setPositions",
                        error: "setPositionsError",
                        status: "setPositionsFetchStatus"
                    })
                }
            };
        e["a"] = {
            state: u,
            getters: d,
            mutations: h,
            actions: p,
            namespaced: c
        }
    },
    "7c2a": function (t, e, s) {
        "use strict";
        s.r(e);
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("div", {
                staticClass: "positions"
            }, [t.positionsConstraints.showHeader ? s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("span", [t._v("Positions")]), t._v(" "), t.positionsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]) : t._e(), t._v(" "), t.positionsConstraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/positions.svg")),
                    showOmnisearch: "",
                    omnisearchActionTitle: "Get started"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You don't have any positions yet")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", [s("a", {
                staticClass: "inline-image-text",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/positions?src=kiteweb"
                }
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v("Analytics\n\t\t\t\t")])]), t._v(" "), s("div", [t.positionsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.positionsConstraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: "Orders couldn't be fetched."
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)])]) : t._e(), t._v(" "), t.positionsConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Positions couldn't be loaded.",
                    error: t.positionsError
                }
            }) : t._e(), t._v(" "), t.positionsConstraints.isData ? s("section", {
                staticClass: "open-positions table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small",
                style: { 'display': 'flex' }
            }, [t._v("\n\t\t\t\tPositions\n\n\t\t\t\t"), t._v(" "), s("span", {
                staticClass: "count",
                style: { 'display': 'flex' }
            }, [t._v("(" + t._s(t.positions.net.length) + ") ")
                ,


            ]), t._v(" "), t.positionsConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.positionsError && t.positionsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.positionsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.netData && t.netData.length > 0 && t.isMobile ? s("div", {
                staticClass: "cards"
            }, [s("div", {
                staticClass: "toolbar"
            }, [s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/positions?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    height: "14px"
                },
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            })]), t._v(" "), s("span", [t._v("Analytics")])])]), t._v(" "), t._l(t.netData, (function (e, n) {
                return s("div", {
                    key: n,
                    staticClass: "card",
                    on: {
                        click: function (s) {
                            return t.showContextMenu(e)
                        }
                    }
                }, [t.currentCtxMenuUID === e.uid ? s("mobile-context-menu", {
                    on: {
                        close: function (s) {
                            return t.hideContextMenu(e)
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [s("li", [0 !== e.quantity ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.exitPosition(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-minus"
                }), t._v(" Exit")]) : t._e()]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.addPosition(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-plus"
                }), t._v(" Add")])]), t._v(" "), s("li", [0 !== e.quantity && "BO" !== e.product && "CO" !== e.product ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.showProductModify(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-copy"
                }), t._v(" Convert")]) : t._e()]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.showPositionsInfo(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-info"
                }), t._v(" Info")])]), t._v(" "), t.minimal ? t._e() : s("common-context-menu", {
                    attrs: {
                        tradingsymbol: e.tradingsymbol,
                        exchange: e.exchange,
                        data: t.addonData(e),
                        exclude: t.contextMenuExcludeList(e)
                    }
                }), t._v(" "), t.minimal ? t._e() : s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: {
                            tradingsymbol: e.tradingsymbol,
                            exchange: e.exchange
                        }
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex4"
                }, [s("span", {
                    staticClass: "text-label small aqua product-label",
                    class: {
                        indigo: "NRML" == e.product,
                        amber: "MIS" == e.product,
                        "sienna-brown": "CNC" == e.product,
                        teal: "CO" == e.product,
                        aqua: "BO" == e.product
                    }
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.product) + "\n\t\t\t\t\t\t")]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(" Qty.")]), t._v(" "), s("span", {
                    staticClass: "text-xxsmall"
                }, [t._v(t._s(e.quantity))])]), t._v(" "), s("div", {
                    staticClass: "flex6 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("LTP")]), t._v(" "), s("span", [t._v(" " + t._s(e.formatted.lastPrice))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex6"
                }, [e.niceName ? s("span", {
                    domProps: {
                        innerHTML: t._s(e.niceName)
                    }
                }) : s("span", [t._v(t._s(e.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(t._s(e.exchange))])]), t._v(" "), s("div", {
                    staticClass: "flex3"
                }, [e.average_price ? s("span", [s("span", {
                    staticClass: "dim"
                }, [t._v("₹")]), t._v(t._s(e.formatted.averagePrice))]) : s("span", [t._v("–")])]), t._v(" "), s("div", {
                    staticClass: "flex3 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall",
                    class: e.style.changePercent
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(0 !== e.changePercent ? e.formatted.changePercent : "") + "\n\t\t\t\t\t\t")]), t._v(" "), s("span", [0 === e.average_price && 0 !== e.quantity ? s("span", [t._v("N/A")]) : s("span", [t._v(t._s(e.formatted.pnl))])])])])], 1)
            }
            )), t._v(" "), s("div", {
                staticClass: "total"
            }, [s("span", {
                staticClass: "dim"
            }, [t._v("Total P/L")]), t._v(" "), s("div", {
                class: {
                    "text-green": t.netPnl > 0,
                    "text-red": t.netPnl < 0
                }
            }, [t.netPnl > 0 ? s("span", [t._v("+")]) : t._e(), t._v(t._s(t._f("inrFormat")(t.netPnl, 2, !0)) + "\n\t\t\t\t")])])], 2) : t._e(), t._v(" "),



            t.netData && t.netData.length > 0 && !t.isMobile ? s("div", [s("su-table", {
                staticClass: "fold-header sticky",
                attrs: {
                    uid: "uid",
                    "search-place-holder": "eg: sell, nifty, nrml",
                    data: t.netData,
                    headers: t.positionsTableHeaders,
                    limit: 300,
                    "show-all-label": "Show all positions",
                    "download-csv": "positions.csv",
                    sort: !t.minimal,
                    search: !t.minimal,
                    select: !t.minimal,
                    "select-on-row-click": "",
                    focus: !t.minimal,
                    toolbar: !t.minimal,
                    "row-events": ""
                },
                on: {
                    selected: t.handleRowSelection,
                    rowEnter: t.handleRowEnter,
                    rowLeave: t.handleRowLeave,
                    rowKeyDown: t.handleRowKeyDown
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (e) {
                        return [s("td", {
                            class: [e.row.style.product, t.positionsColumnStyles.product]
                        }, [s("span", {
                            staticClass: "text-label small aqua",
                            class: {
                                indigo: "NRML" == e.row.product,
                                amber: "MIS" == e.row.product,
                                "sienna-brown": "CNC" == e.row.product,
                                teal: "CO" == e.row.product,
                                aqua: "BO" == e.row.product
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.product) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            class: [e.row.style.tradingsymbol, t.positionsColumnStyles.instrument]
                        }, [e.row.niceName ? s("span", {
                            staticClass: "tradingsymbol",
                            domProps: {
                                innerHTML: t._s(e.row.niceName)
                            }
                        }) : s("span", {
                            staticClass: "tradingsymbol"
                        }, [t._v(t._s(e.row.tradingsymbol))]), t._v(" "), s("span", {
                            staticClass: "exchange text-xxsmall dim"
                        }, [t._v(t._s(e.row.exchange))]), t._v(" "), "CNC" === e.row.product && 0 !== e.row.quantity ? s("span", {
                            staticClass: "holding-tag text-label text-label-outline"
                        }, [e.row.quantity > 0 ? s("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }],
                            attrs: {
                                title: "Stock will show under Holdings tomorrow",
                                href: "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/purchase-of-stocks-for-delivery",
                                target: "_blank"
                            },
                            on: {
                                click: function (t) {
                                    t.stopPropagation()
                                }
                            }
                        }, [t._v("HOLDING")]) : t._e(), t._v(" "), e.row.quantity < 0 ? s("a", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }],
                            attrs: {
                                title: "Stock will disappear from holdings tomorrow and funds can be withdrawn after 2 days.",
                                href: "https://support.zerodha.com/category/trading-and-markets/kite-web-and-mobile/articles/why-does-shares-sold-from-holdings-show-up-as-a-new-negative-position-under-on-kite",
                                target: "_blank"
                            },
                            on: {
                                click: function (t) {
                                    t.stopPropagation()
                                }
                            }
                        }, [t._v("SOLD HOLDING")]) : t._e()]) : t._e(), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [e.row.uid === t.currentCtxMenuUID ? s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [0 !== e.row.quantity ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.exitPosition(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-minus"
                        }), t._v(" Exit")]) : t._e()]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.addPosition(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-plus"
                        }), t._v(" Add")])]), t._v(" "), s("li", [0 !== e.row.quantity && "BO" !== e.row.product && "CO" !== e.row.product ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.showProductModify(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-copy"
                        }), t._v(" Convert")]) : t._e()]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.showPositionsInfo(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-info"
                        }), t._v(" Info")])]), t._v(" "), t.minimal ? t._e() : s("common-context-menu", {
                            attrs: {
                                tradingsymbol: e.row.tradingsymbol,
                                exchange: e.row.exchange,
                                data: t.addonData(e.row),
                                exclude: t.contextMenuExcludeList(e.row)
                            }
                        }), t._v(" "), t.minimal ? t._e() : s("addon-context-menu", {
                            attrs: {
                                "data-type": "instrument",
                                data: {
                                    tradingsymbol: e.row.tradingsymbol,
                                    exchange: e.row.exchange
                                }
                            }
                        })], 1)], 2) : t._e()], 1)], 1), t._v(" "), s("td", {
                            class: [e.row.style.quantity, t.positionsColumnStyles.quantity]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: [e.row.style.averagePrice, t.positionsColumnStyles.averagePrice]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.averagePrice) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: [e.row.style.lastPrice, t.positionsColumnStyles.lastPrice]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.lastPrice) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: [e.row.style.pnl, t.positionsColumnStyles.pnl]
                        }, [0 === e.row.average_price && 0 !== e.row.quantity ? s("span", [t._v("N/A")]) :
                            s("span", [t._v(t._s(e.row.formatted.pnl))])]), t._v(" "),

                        // JS Custom Feature
                        s("td", {
                        }, [
                            s("table",
                                { class: { 'change-percent': !0 } },
                                [
                                    s("tr", [
                                        s("td", [t._v("UnBooked")]),
                                        s("td", [t._v("Booked")]),
                                        s("td", [t._v("Total")])

                                    ]),

                                    s("tr", [
                                        s("td",
                                            [

                                                s("span", { class: [e.row.style.JS_UNBOOKED_PNL] },
                                                    [t._v((e.row.JS_UNBOOKED_PNL || '0'))]),
                                            ]),

                                        s("td",
                                            [

                                                s("span",
                                                    { class: [e.row.style.JS_BOOKED_PNL] },
                                                    [t._v((e.row.JS_BOOKED_PNL?.netProfit || '0'))]),
                                            ]),

                                        s("td",
                                            [
                                                s("span",
                                                    {

                                                        directives: [{
                                                            name: "tooltip",
                                                            rawName: "v-tooltip"
                                                        }],
                                                        attrs: {
                                                            title: `brakeven ${e.row.JS_BREAKEVEN || 0}`
                                                        },
                                                        class: [e.row.style.JS_TOTAL_PNL]
                                                    },
                                                    [t._v((e.row.formatted.changePercent || '0'))]),
                                            ]),
                                    ])
                                ]

                            )

                        ])]
                    }
                }], null, !1, 759144339)
            }, [s("span", {
                staticClass: "toolbar-before",
                attrs: {
                    slot: "toolbar-before"
                },
                slot: "toolbar-before"
            }, [t.isAnalyzeWidget ? s("a", {
                staticClass: "item stock-analyze-link",
                attrs: {
                    href: "#"
                },
                on: {
                    click: function (e) {
                        return e.stopPropagation(),
                            e.preventDefault(),
                            t.showAnalyzeWidget.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    "max-height": "10px"
                },
                attrs: {
                    src: t.getStatic("images/addons/sensibull.svg")
                }
            })]), t._v(" "), s("span", [t._v("Analyze")])]) : t._e(), t._v(" "), s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/portfolio/positions?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    height: "9px"
                },
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            })]), t._v(" "), s("span", [t._v("Analytics")])])]), t._v(" "), t._v(" "), s("tr", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("td", {
                attrs: {
                    colspan: "3"
                }
            }, [t.selectedPositions.length > 0 ? s("su-button", {
                staticClass: "button-small button-blue",
                nativeOn: {
                    click: function (e) {
                        return e.preventDefault(),
                            e.stopPropagation(),
                            t.exitSelectedPositions()
                    }
                }
            }, [t._v("\n\t\t\t\t\t\t\t\tExit " + t._s(this.selectedPositions.length) + " position"), this.selectedPositions.length > 1 ? s("span", [t._v("s")]) : t._e()]) : t._e()], 1), t._v(" "), s("td", {
                attrs: {
                    colspan: "2"
                }
            }), t._v(" "), s("td", {
                staticClass: "text-right"
            }, [t._v("Total")]), t._v(" "), s("td", {
                staticClass: "text-right",
                class: {
                    "text-green": t.netPnl > 0,
                    "text-red": t.netPnl < 0
                }
            }, [t.netPnl > 0 ? s("span", [t._v("+")]) : t._e(), t._v(t._s(t._f("inrFormat")(t.netPnl, 2, !0)) + "\n\t\t\t\t\t")]), t._v(" "),

            // JS Custom Feature
            s("td", {
                staticClass: "text-right",
                class: {
                    "text-green": t.realNetPnlJSMode > 0,
                    "text-red": t.realNetPnlJSMode < 0,
                    "change-percent ": !0
                },
                attrs: {
                    colspan: "2"
                }
            },
                [

                    s("table", {
                        style: {
                            "background": "#111", "width": "200px", "font-size": "13px",
                            "margin-left": "1em", "position": "fixed", "top": "0", "left": "31%", "z-index": "999", "margin-top": "8px"
                        }
                    },
                        [
                            s("tr", [
                                s("td", { style: { 'display': 'inline-block', 'width': '100px' } }, [t._v('UnBooked')]),
                                s("td", { style: { 'display': 'inline-block', 'width': '100px' } }, [t._v('Booked')]),
                                s("td", { style: { 'display': 'inline-block', 'width': '100px' } }, [t._v('Total')]),
                                s("td", { style: { 'display': 'inline-block', 'width': '100px' } }, [t._v('Selected Total')]),

                            ]),
                            s("tr", [
                                s("td", {
                                    style: { 'display': 'inline-block', 'width': '100px' },
                                    class: {
                                        "text-green": t.realNetUnBookedPnl > 0,
                                        "text-red": t.realNetUnBookedPnl < 0,
                                    }
                                }, [t._v(t.realNetUnBookedPnl)]),
                                s("td", {
                                    style: { 'display': 'inline-block', 'width': '100px' },
                                    class: {
                                        "text-green": t.realNetBookedPnl > 0,
                                        "text-red": t.realNetBookedPnl < 0,
                                    }
                                }, [t._v(t.realNetBookedPnl)]),

                                s("td", {
                                    style: { 'display': 'inline-block', 'width': '100px' },
                                    class: {
                                        "text-green": t.realNetTotalPnl > 0,
                                        "text-red": t.realNetTotalPnl < 0,
                                    }
                                }, [t._v(t.realNetTotalPnl)]),
                                s("td", {
                                    style: { 'display': 'inline-block', 'width': '100px' },
                                    class: {
                                        "text-green": t.JS_SelectedPositions_Total > 0,
                                        "text-red": t.JS_SelectedPositions_Total < 0,
                                    }
                                }, [t._v(t.JS_SelectedPositions_Total)]),
                            ]),
                            s("tr", [
                                s("td", {
                                    style: { 'display': 'inline-block', 'width': '120px' },
                                    class: {
                                        "text-green": t.JS_RealNetBookedPnlPercentageOfCapital > 0,
                                        "text-red": t.JS_RealNetBookedPnlPercentageOfCapital < 0,
                                    }
                                },
                                    [t._v('ROC = ' + t.JS_RealNetBookedPnlPercentageOfCapital)]),
                                s("td", {
                                    class: {
                                        "text-red": true,
                                    }, style: { 'display': 'inline-block', 'width': '150px' }
                                },
                                    [t._v(t.JS_CAPITAL_PROTECTION_MESSAGE)]),

                            ]),

                        ])
                ]



            )])])], 1) : t._e()]) : t._e(), t._v(" "), !t.minimal && t.positionsConstraints.isDayPositions ? s("section", {
                staticClass: "day-positions table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("a", {
                staticClass: "title initial",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.onToggleDayHistory.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("\n\t\t\t\t\t\tDay's history\n\t\t\t\t\t\t"), s("span", [t._v("(" + t._s(t.positions.day.length) + ")")])]), t._v(" "), t.isDayHistory ? s("span", {
                staticClass: "icon icon-chevron-up"
            }) : s("span", {
                staticClass: "icon icon-chevron-down"
            })]), t._v(" "), t.positionsConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.positionsError && t.positionsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.positionsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.isMobile && t.isDayHistory ? s("div", {
                staticClass: "cards"
            }, [t._l(t.dayData, (function (e, n) {
                return s("div", {
                    key: n,
                    staticClass: "card"
                }, [s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex4"
                }, [s("span", {
                    staticClass: "text-label small aqua order-status-label",
                    class: {
                        indigo: "NRML" == e.product,
                        amber: "MIS" == e.product,
                        "sienna-brown": "CNC" == e.product,
                        teal: "CO" == e.product,
                        aqua: "BO" == e.product
                    }
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.product) + "\n\t\t\t\t\t\t")]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(" Qty.")]), t._v(" "), s("span", {
                    staticClass: "text-xxsmall"
                }, [t._v(t._s(e.quantity))])]), t._v(" "), s("div", {
                    staticClass: "flex6 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("LTP")]), t._v(" "), s("span", [t._v(" " + t._s(e.formatted.lastPrice))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex6"
                }, [e.niceName ? s("span", {
                    domProps: {
                        innerHTML: t._s(e.niceName)
                    }
                }) : s("span", [t._v(t._s(e.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(t._s(e.exchange) + " / " + t._s(e.product))])]), t._v(" "), s("div", {
                    staticClass: "flex3"
                }, [e.average_price ? s("span", [s("span", {
                    staticClass: "dim"
                }, [t._v("₹")]), t._v(t._s(e.formatted.averagePrice))]) : s("span", [t._v("–")])]), t._v(" "), s("div", {
                    staticClass: "flex3 text-right"
                }, [0 === e.average_price && 0 !== e.quantity ? s("span", [t._v("N/A")]) : s("span", [t._v(t._s(e.formatted.pnl))])])])])
            }
            )), t._v(" "), s("div", {
                staticClass: "total"
            }, [s("span", {
                staticClass: "dim"
            }, [t._v("Total P/L")]), t._v(" "), s("div", {
                class: {
                    "text-green": t.dayPnl > 0,
                    "text-red": t.dayPnl < 0
                }
            }, [t.dayPnl > 0 ? s("span", [t._v("+")]) : t._e(), t._v(t._s(t._f("inrFormat")(t.dayPnl, 2, !0)) + "\n\t\t\t\t")])])], 2) : t._e(), t._v(" "), !t.isMobile && t.isDayHistory ? s("div", [s("su-table", {
                staticClass: "fold-header sticky",
                attrs: {
                    uid: "uid",
                    "search-place-holder": "eg: sell, nifty, nrml",
                    data: t.dayData,
                    headers: t.positionsTableHeaders,
                    limit: 150,
                    "show-all-label": "Show all day positions",
                    "download-csv": "day_positions.csv",
                    sort: "",
                    search: "",
                    toolbar: ""
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (e) {
                        return [s("td", {
                            class: [e.row.style.product, t.positionsColumnStyles.product]
                        }, [s("span", {
                            staticClass: "text-label small aqua",
                            class: {
                                indigo: "NRML" == e.row.product,
                                amber: "MIS" == e.row.product,
                                "sienna-brown": "CNC" == e.row.product,
                                teal: "CO" == e.row.product,
                                aqua: "BO" == e.row.product
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.product) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            class: [e.row.style.tradingsymbol, t.positionsColumnStyles.instrument]
                        }, [e.row.niceName ? s("span", {
                            staticClass: "tradingsymbol",
                            domProps: {
                                innerHTML: t._s(e.row.niceName)
                            }
                        }) : s("span", {
                            staticClass: "tradingsymbol"
                        }, [t._v(t._s(e.row.tradingsymbol))]), t._v(" "), s("span", {
                            staticClass: "exchange text-xxsmall dim"
                        }, [t._v(t._s(e.row.exchange))])]), t._v(" "), s("td", {
                            class: [e.row.style.quantity, t.positionsColumnStyles.quantity]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: [e.row.style.averagePrice, t.positionsColumnStyles.averagePrice]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.averagePrice) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: [e.row.style.lastPrice, t.positionsColumnStyles.lastPrice]
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.formatted.lastPrice) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            class: [e.row.style.pnl, t.positionsColumnStyles.pnl]
                        }, [0 === e.row.average_price && 0 !== e.row.quantity ? s("span", [t._v("N/A")]) : s("span", [t._v(t._s(e.row.formatted.pnl))])]), t._v(" "), s("td", {
                            class: [e.row.style.changePercent, t.positionsColumnStyles.changePercent]
                        }, [0 !== e.row.formatted.averagePrice ? s("span", [t._v(t._s(e.row.formatted.changePercent))]) : s("span", [t._v("N/A")])])]
                    }
                }], null, !1, 1032869863)
            }, [t._v(" "), s("tr", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("td", {
                attrs: {
                    colspan: "4"
                }
            }), t._v(" "), s("td", {
                staticClass: "text-right"
            }, [t._v("Total")]), t._v(" "), s("td", {
                class: {
                    "text-right": !0,
                    "text-green": t.dayPnl > 0,
                    "text-red": t.dayPnl < 0
                }
            }, [t.dayPnl > 0 ? s("span", [t._v("+")]) : t._e(), t._v(t._s(t._f("inrFormat")(t.dayPnl, 2, !0)) + "\n\t\t\t\t\t")]), t._v(" "), s("td")])])], 1) : t._e()])], 1) : t._e(), t._v(" "), !t.minimal && t.positionsConstraints.isData ? s("section", {
                staticClass: "positions-breakdown"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._v("\n\t\t\tBreakdown\n\n\t\t\t"), t.positionsConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.positionsError && t.positionsError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.positionsConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1), t._v(" "), s("positions-barchart", {
                attrs: {
                    "raw-data": t.positions.net
                }
            })], 1) : t._e(), t._v(" "), t.positionsInfo && t.currentPosition ? s("position-info", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hidePositionsInfo,
                    expression: "hidePositionsInfo"
                }],
                staticClass: "positions-info-modal",
                attrs: {
                    position: t.currentPosition
                },
                on: {
                    modify: function (e) {
                        return t.showProductModify(t.currentPosition)
                    },
                    add: function (e) {
                        return t.addPosition(t.currentPosition)
                    },
                    exit: function (e) {
                        return t.exitPosition(t.currentPosition)
                    },
                    close: t.hidePositionsInfo
                }
            }) : t._e(), t._v(" "), t.productModifyModal && t.currentPosition ? s("product-modify", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.hideProductModify,
                    expression: "hideProductModify"
                }],
                staticClass: "product-modify-modal",
                attrs: {
                    position: t.currentPosition
                },
                on: {
                    close: t.hideProductModify
                }
            }) : t._e()], 1)
        }
            , a = []
            , i = s("2f62")
            , r = s("5fb0")
            , o = s("f1f7")
            , c = s("0a3b")
            , l = s("5665")
            , u = s("dba6")
            , d = s("9c9e")
            , h = s("7bdc")
            , p = s("39e3")
            , f = s("d9d2")
            , v = s("5a9e")
            , m = s("40f2")
            , _ = function () {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return t.position ? s("modal", {
                    directives: [{
                        name: "on-escape",
                        rawName: "v-on-escape",
                        value: t.close,
                        expression: "close"
                    }],
                    staticClass: "positions-info-container",
                    on: {
                        close: t.close
                    }
                }, [s("div", {
                    staticClass: "row positions-info-header",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [s("div", {
                    staticClass: "eight columns tradingsymbol-wrapper"
                }, [s("span", {
                    staticClass: "text-label small aqua order-status-label",
                    class: {
                        indigo: "NRML" == t.position.product,
                        amber: "MIS" == t.position.product,
                        rose: "CNC" == t.position.product,
                        teal: "CO" == t.position.product,
                        aqua: "BO" == t.position.product
                    }
                }, [t._v("\n\t\t\t\t" + t._s(t.position.product) + "\n\t\t\t")]), t._v(" "), s("h3", {
                    staticClass: "tradingsymbol"
                }, [t._v("\n\t\t\t\t" + t._s(t.position.tradingsymbol) + " "), s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v(t._s(t.position.exchange))])])]), t._v(" "), s("div", {
                    staticClass: "status four columns"
                }, [s("span", {
                    staticClass: "text-label text-label-outline small position-status-label",
                    class: {
                        red: t.position.quantity < 0,
                        green: t.position.quantity > 0
                    }
                }, [0 !== t.position.quantity ? s("span", [t._v("OPEN")]) : t._e(), t._v(" "), 0 === t.position.quantity ? s("span", [t._v("CLOSED")]) : t._e()])])]), t._v(" "), s("div", {
                    staticClass: "positions-info-body",
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "five columns mobile-modal"
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Net qty.")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.quantity ? s("div", {
                    staticClass: "quantity"
                }, [t._v(t._s(t.position.formatted.quantity))]) : s("div", {
                    staticClass: "quantity"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Carry forward qty.")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.product ? s("div", {
                    staticClass: "product"
                }, [t._v(t._s(t.position.overnight_quantity))]) : s("div", {
                    staticClass: "product"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Avg. price")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.averagePrice ? s("div", {
                    staticClass: "average-price"
                }, [t._v(t._s(t.position.formatted.averagePrice))]) : s("div", {
                    staticClass: "average-price"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Last price")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.lastPrice ? s("div", {
                    staticClass: "last-price"
                }, [t._v(t._s(t.position.formatted.lastPrice))]) : s("div", {
                    staticClass: "last-price"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Last close price")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.closePrice ? s("div", {
                    staticClass: "last-price"
                }, [t._v(t._s(t.position.formatted.closePrice))]) : s("div", {
                    staticClass: "last-price"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("P&L")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.pnl ? s("div", {
                    staticClass: "pnl"
                }, [t._v(t._s(t.position.formatted.pnl))]) : s("div", {
                    staticClass: "pnl"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Day's P&L")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.m2m ? s("div", {
                    staticClass: "days-pnl"
                }, [t._v(t._s(t.position.formatted.m2m))]) : s("div", {
                    staticClass: "days-pnl"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Product")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.product ? s("div", {
                    staticClass: "product"
                }, [t._v(t._s(t.position.product))]) : s("div", {
                    staticClass: "product"
                }, [t._v("—")])])])]), t._v(" "), s("div", {
                    staticClass: "two columns border"
                }, [s("div")]), t._v(" "), s("div", {
                    staticClass: "five columns mobile-modal"
                }, [s("label", {
                    staticClass: "category"
                }, [t._v("Buys")]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Qty.")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.buyQuantity ? s("div", {
                    staticClass: "buy-quantity"
                }, [t._v(t._s(t.position.formatted.buyQuantity))]) : s("div", {
                    staticClass: "buy-quantity"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Price")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.buyPrice ? s("div", {
                    staticClass: "buy-price"
                }, [t._v(t._s(t.position.formatted.buyPrice))]) : s("div", {
                    staticClass: "buy-price"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Value")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.buyValue ? s("div", {
                    staticClass: "buy-value"
                }, [t._v(t._s(t.position.formatted.buyValue))]) : s("div", {
                    staticClass: "buy-value"
                }, [t._v("—")])])]), t._v(" "), s("hr"), t._v(" "), s("label", {
                    staticClass: "category"
                }, [t._v("Sells")]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Qty.")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.sellQuantity ? s("div", {
                    staticClass: "sell-quantity"
                }, [t._v(t._s(t.position.formatted.sellQuantity))]) : s("div", {
                    staticClass: "sell-quantity"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Price")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.sellPrice ? s("div", {
                    staticClass: "sell-price"
                }, [t._v(t._s(t.position.formatted.sellPrice))]) : s("div", {
                    staticClass: "sell-price"
                }, [t._v("—")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "eight columns"
                }, [s("label", [t._v("Value")])]), t._v(" "), s("div", {
                    staticClass: "four columns text-right"
                }, [t.position.formatted.sellValue ? s("div", {
                    staticClass: "sell-value"
                }, [t._v(t._s(t.position.formatted.sellValue))]) : s("div", {
                    staticClass: "sell-value"
                }, [t._v("—")])])])])])]), t._v(" "), s("div", {
                    staticClass: "positions-info-footer actions",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [0 !== t.position.quantity ? s("su-button", {
                    staticClass: "button-outline",
                    class: {
                        "button-blue": t.position.quantity > 0,
                        "button-orange": t.position.quantity < 0
                    },
                    nativeOn: {
                        click: function (e) {
                            return t.add.apply(null, arguments)
                        }
                    }
                }, [s("span", [t._v("Add")])]) : t._e(), t._v(" "), 0 !== t.position.quantity ? s("su-button", {
                    staticClass: "button-outline",
                    class: {
                        "button-orange": t.position.quantity > 0,
                        "button-blue": t.position.quantity < 0
                    },
                    nativeOn: {
                        click: function (e) {
                            return t.exit.apply(null, arguments)
                        }
                    }
                }, [s("span", [t._v("Exit")])]) : t._e(), t._v(" "), 0 !== t.position.quantity && "BO" !== t.position.product && "CO" !== t.position.product ? s("su-button", {
                    staticClass: "button-outline button-blue",
                    nativeOn: {
                        click: function (e) {
                            return t.modify.apply(null, arguments)
                        }
                    }
                }, [s("span", [t._v("Convert")])]) : t._e(), t._v(" "), s("su-button", {
                    staticClass: "button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.close.apply(null, arguments)
                        }
                    }
                }, [s("span", [t._v("Cancel")])])], 1)]) : t._e()
            }
            , g = []
            , b = {
                props: {
                    position: null
                },
                data() {
                    return {}
                },
                methods: {
                    close() {
                        this.$emit("close")
                    },
                    add() {
                        this.$emit("add"),
                            this.close()
                    },
                    exit() {
                        this.$emit("exit"),
                            this.close()
                    },
                    modify() {
                        this.$emit("modify")
                    }
                }
            }
            , y = b
            , C = s("0c7c")
            , w = Object(C["a"])(y, _, g, !1, null, null, null)
            , x = w.exports
            , T = s("850b")
            , k = function () {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return t.position ? s("modal", {
                    directives: [{
                        name: "on-escape",
                        rawName: "v-on-escape",
                        value: t.close,
                        expression: "close"
                    }],
                    staticClass: "product-modify-container",
                    on: {
                        close: t.close
                    }
                }, [s("div", {
                    staticClass: "row positions-info-header",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [s("div", {
                    staticClass: "eight columns tradingsymbol-wrapper"
                }, [s("h3", {
                    staticClass: "tradingsymbol"
                }, [t.position.instrument && t.position.instrument.niceName ? s("span", [t._v("\n\t\t\t\t\t" + t._s(t.position.instrument.niceName) + "\n\t\t\t\t")]) : s("span", [t._v(t._s(t.position.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v(t._s(t.position.exchange))])])])]), t._v(" "), s("div", {
                    staticClass: "product-modify-body",
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [s("su-form", {
                    ref: "productForm",
                    attrs: {
                        method: "post"
                    },
                    on: {
                        submit: function (e) {
                            return e.preventDefault(),
                                t.modifyProduct.apply(null, arguments)
                        }
                    }
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "five columns"
                }, [s("label", [t._v("Type")]), t._v(" "), s("su-radio-group", {
                    staticClass: "position-conversion-type",
                    on: {
                        change: function (e) {
                            return t.changeType(t.type)
                        }
                    },
                    model: {
                        value: t.type,
                        callback: function (e) {
                            t.type = e
                        },
                        expression: "type"
                    }
                }, t._l(t.types, (function (e, n) {
                    return s("su-radio", {
                        key: n,
                        staticClass: "type",
                        attrs: {
                            checked: "",
                            label: e.toLowerCase(),
                            value: e
                        }
                    }, [t._v(t._s(e))])
                }
                )), 1)], 1), t._v(" "), s("div", {
                    staticClass: "four columns"
                }, [s("label", [t._v("Product")]), t._v(" "), s("span", [t._v(t._s(t.position.product))]), t._v(" "), s("span", {
                    staticClass: "icon icon-arrow-right"
                }), t._v(" "), s("span", [t._v(t._s(t.toProduct))])]), t._v(" "), s("div", {
                    staticClass: "three columns text-right"
                }, [s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.convertibleQuantity != t.position.instrument.lotSize,
                        expression: "convertibleQuantity != position.instrument.lotSize"
                    }]
                }, [s("label", [t._v("Quantity")]), t._v(" "), s("su-input", {
                    attrs: {
                        type: "number",
                        size: "small",
                        controls: !1,
                        rules: t.qtyRules,
                        min: t.position.instrument.lotSize,
                        step: t.position.instrument.lotSize,
                        max: t.convertibleQuantity
                    },
                    model: {
                        value: t.convertQuantity,
                        callback: function (e) {
                            t.convertQuantity = e
                        },
                        expression: "convertQuantity"
                    }
                }), t._v(" "), s("label", {
                    staticClass: "lot-size"
                }, [t._v("Lot size: " + t._s(t.position.instrument.lotSize))])], 1), t._v(" "), s("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.convertibleQuantity == t.position.instrument.lotSize,
                        expression: "convertibleQuantity == position.instrument.lotSize"
                    }]
                }, [s("label", [t._v("Quantity")]), t._v(" "), s("span", [t._v(t._s(t.convertibleQuantity))])])])])]), t._v(" "), t.isHoldingsAuthShown ? s("holdings-auth-confirm", {
                    on: {
                        close: t.hideHoldingsAuth
                    }
                }) : t._e()], 1), t._v(" "), s("div", {
                    staticClass: "actions",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [s("su-button", {
                    staticClass: "button-blue",
                    attrs: {
                        processing: t.productModifyInProgress
                    },
                    nativeOn: {
                        click: function (e) {
                            return t.modifyProduct.apply(null, arguments)
                        }
                    }
                }, [t._v("\n\t\t\tConvert\n\t\t")]), t._v(" "), s("su-button", {
                    staticClass: "button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.close.apply(null, arguments)
                        }
                    }
                }, [s("span", [t._v("Cancel")])])], 1)]) : t._e()
            }
            , O = []
            , E = s("c6c3")
            , S = s("025e")
            , P = s("1737")
            , M = {
                inject: ["instrumentManager"],
                components: {
                    "holdings-auth-confirm": P["a"]
                },
                props: {
                    position: null
                },
                data() {
                    return {
                        types: ["DAY", "OVERNIGHT"],
                        type: "",
                        toProduct: "",
                        transactionType: "",
                        convertibleQuantity: 0,
                        convertQuantity: 0,
                        dayQuantity: 0,
                        productModifyInProgress: !1,
                        isHoldingsAuthShown: !1,
                        qtyRules: [{
                            required: !0,
                            min: 1
                        }]
                    }
                },
                mounted() {
                    this.$nextTick(() => this.setUp(this.position))
                },
                methods: {
                    close() {
                        this.$emit("close")
                    },
                    getToProduct(t, e) {
                        return t === f["b"].PRODUCT.CNC || t === f["b"].PRODUCT.NRML ? f["b"].PRODUCT.MIS : e === f["b"].EXCHANGES.NSE || e === f["b"].EXCHANGES.BSE ? f["b"].PRODUCT.CNC : f["b"].PRODUCT.NRML
                    },
                    changeType(t) {
                        "DAY" === this.type ? (this.convertibleQuantity = Math.abs(this.dayQuantity),
                            this.convertQuantity = Math.abs(this.dayQuantity),
                            this.transactionType = this.dayQuantity > 0 ? f["b"].TRANSACTION_TYPE.BUY : f["b"].TRANSACTION_TYPE.SELL) : (this.convertibleQuantity = Math.abs(this.position.overnight_quantity),
                                this.convertQuantity = Math.abs(this.position.overnight_quantity),
                                this.transactionType = this.position.overnight_quantity > 0 ? f["b"].TRANSACTION_TYPE.BUY : f["b"].TRANSACTION_TYPE.SELL)
                    },
                    setUp(t) {
                        this.type = "DAY",
                            this.dayQuantity = t.day_buy_quantity - t.day_sell_quantity,
                            this.toProduct = this.getToProduct(t.product, t.exchange),
                            0 === t.overnight_quantity ? (this.types = ["DAY"],
                                this.type = "DAY") : 0 === this.dayQuantity && (this.types = ["OVERNIGHT"],
                                    this.type = "OVERNIGHT"),
                            this.changeType(this.type)
                    },
                    modifyProduct() {
                        this.$refs["productForm"].validate() && this.apiProductModify({
                            exchange: this.position.exchange,
                            new_product: this.toProduct,
                            old_product: this.position.product,
                            position_type: this.type.toLowerCase(),
                            quantity: this.convertQuantity,
                            tradingsymbol: this.position.tradingsymbol,
                            transaction_type: this.transactionType
                        })
                    },
                    apiProductModify(t) {
                        this.productModifyInProgress = !0,
                            E["a"].productModify(t).then(e => {
                                this.productModifyInProgress = !1,
                                    this.$events.emit("refetchData:" + this.$route.name),
                                    this.close(),
                                    this.$toast.success({
                                        title: "Position coverted",
                                        message: "Converted postion from " + t.old_product + " to " + t.new_product + ".",
                                        orientation: this.$toast.TOP_RIGHT
                                    })
                            }
                            ).catch(t => {
                                this.productModifyInProgress = !1,
                                    t && t.response && 428 === t.response.status ? this.showHoldingsAuth() : this.$toast.error({
                                        message: Object(S["j"])(t).message
                                    })
                            }
                            )
                    },
                    showHoldingsAuth() {
                        this.isHoldingsAuthShown = !0
                    },
                    hideHoldingsAuth() {
                        this.isHoldingsAuthShown = !1
                    }
                }
            }
            , N = M
            , D = Object(C["a"])(N, k, O, !1, null, null, null)
            , A = D.exports
            , L = {
                inject: ["ticker", "instrumentManager"],
                mixins: [d["a"], m["a"]],
                components: {
                    "position-info": x,
                    "product-modify": A,
                    "positions-barchart": T["a"]
                },
                props: {
                    minimal: Boolean
                },
                data() {
                    return {
                        subscribedTokens: [],
                        netData: [],
                        dayData: [],
                        positionsInfo: !1,
                        productModifyModal: !1,
                        currentPosition: null,
                        selectedPositions: [],
                        currentCtxMenuUID: null
                    }
                },
                created() {
                    this.subscribedTokens = [],
                        this.isComponentActive = !0,
                        this.consoleURL = "https://console.zerodha.com",
                        this.instruments = {},
                        this.maxItems = 100,
                        this.performanceMode = !1,
                        this.updateTimer = null,
                        this.fetchPositions(),
                        this.preProcess(),
                        this.positionsColumnStyles = {
                            product: ["product"],
                            instrument: ["instrument"],
                            quantity: ["quantity", "right"],
                            averagePrice: ["average-price", "right"],
                            lastPrice: ["last-price", "right"],
                            pnl: ["pnl", "right"],
                            changePercent: ["change-percent", "right"]
                        },
                        this.positionsTableHeaders = [{
                            label: "Product",
                            field: "product",
                            sort: !0,
                            search: !0,
                            class: this.positionsColumnStyles.product
                        }, {
                            label: "Instrument",
                            field: "tradingsymbol",
                            sort: !0,
                            search: !0,
                            class: this.positionsColumnStyles.instrument
                        }, {
                            label: "Qty.",
                            field: "quantity",
                            sort: !0,
                            class: this.positionsColumnStyles.quantity
                        }, {
                            label: "Avg.",
                            field: "averagePrice",
                            sort: !0,
                            class: this.positionsColumnStyles.averagePrice
                        }, {
                            label: "LTP",
                            field: "lastPrice",
                            sort: !0,
                            class: this.positionsColumnStyles.lastPrice
                        }, {
                            label: "P&L",
                            field: "pnl",
                            sort: !0,
                            class: this.positionsColumnStyles.pnl
                        }, {
                            label: "Chg.",
                            field: "changePercent",
                            sort: !0,
                            class: this.positionsColumnStyles.changePercent
                        }],
                        this.$events.on("refetchData:" + h["b"], this.fetchPositions)
                },
                beforeDestroy() {
                    this.postProcess(),
                        this.$events.off("refetchData:" + h["b"], this.fetchPositions)
                },
                activated() {
                    this.preProcess()
                },
                deactivated() {
                    this.postProcess()
                },
                computed: {
                    ...Object(i["d"])(["isMobile"]),
                    ...Object(i["d"])(p["b"], ["ticks"]),
                    ...Object(i["d"])(h["b"], ["positions", "positionsFetchStatus", "positionsError", "isDayHistory"]),
                    positionsConstraints() {
                        let t = this.positionsFetchStatus === r["d"].API_STATUSES.fetching
                            , e = this.positionsFetchStatus === r["d"].API_STATUSES.error
                            , s = this.positions && this.positions.net && this.positions.net.length > 0
                            , n = this.positions && this.positions.day && this.positions.day.length > 0
                            , a = this.positions && this.positions.net && 0 === this.positions.net.length
                            , i = e && (!this.positions || !this.positions.net)
                            , o = e && this.positions && this.positions.net
                            , c = !a && !i && !s;
                        return {
                            isData: s,
                            isError: e,
                            isFetching: t,
                            showHeader: c,
                            showErrorIcon: o,
                            showEmptyState: a,
                            showErrorState: i,
                            isDayPositions: n
                        }
                    },
                    openPositionsCount() {
                        if (this.positionsConstraints.isData)
                            return this.positions.net.filter(t => 0 !== t.quantity).length
                    },
                    realNetUnBookedPnl() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => {
                                const pnl = e.product === 'CNC'
                                    ? t + 0
                                    : t + (e.JS_REAL_PL?.netProfit || 0)
                                return pnl
                            }, 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        return realPnl;
                    },
                    realNetBookedPnl() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => {
                                const pnl = e.product === 'CNC'
                                    ? t + 0
                                    : t + (e.JS_BOOKED_PNL?.netProfit || 0)
                                return pnl
                            }, 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        return realPnl;
                    },
                    realNetTotalPnl() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => {
                                const pnl = e.product === 'CNC'
                                    ? t + 0
                                    : t + (e.JS_BOOKED_PNL?.netProfit || 0) + (e.JS_REAL_PL?.netProfit || 0)
                                return pnl;
                            }, 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        return realPnl;
                    },
                    JS_HAS_SelectedPositions() {
                        return !!this.selectedPositions.length;
                    },
                    JS_SelectedPositions_Total() {
                        let realSelectedPnl = this.selectedPositions && this.selectedPositions.length > 0
                            ? this.selectedPositions.reduce((t, e) => t + + (e.JS_BOOKED_PNL?.netProfit || 0) + (e.JS_REAL_PL?.netProfit || 0), 0) : 0
                        realSelectedPnl = parseFloat(realSelectedPnl).toFixed(2);
                        return realSelectedPnl;
                    },
                    JS_RealNetBookedPnlPercentageOfCapital() {
                        return this.realNetBookedPnlPercentageOfCapital();
                    },
                    JS_CAPITAL_PROTECTION_MESSAGE() {
                            window.ROC_TARGET = 1;
                        const pnlPercentage = parseFloat(this.realNetBookedPnlPercentageOfCapital());
                        return Math.abs(pnlPercentage) > window.ROC_TARGET ? `STOP TRADING PLEASE ROC TARGET=${window.ROC_TARGET}` : `DONT OVER TRADE ROC TARGET=${window.ROC_TARGET})`
                    },
                    netPnl() {
                        return this.netData && this.netData.length > 0 ? this.netData.reduce((t, e) => t + e.pnl, 0) : 0
                    },
                    dayPnl() {
                        return this.dayData && this.dayData.length > 0 ? this.dayData.reduce((t, e) => t + e.pnl, 0) : 0
                    },
                    isAnalyzeWidget() {
                        if (this.netData && this.netData.length > 0)
                            for (let t of this.netData)
                                if (("NFO" === t.exchange || "BFO" === t.exchange || "CDS" === t.exchange) && 0 !== t.quantity)
                                    return !0;
                        return !1
                    }
                },
                watch: {
                    positions(t) {
                        this.isComponentActive && this.updateAllPositions(t)
                    },
                    ticks(t, e) {
                        if (this.performanceMode || !this.isComponentActive)
                            return;
                        let s = !0;
                        for (let n of this.subscribedTokens)
                            if (t[n] && e[n] && t[n].lastPrice !== e[n].lastPrice) {
                                s = !0;
                                break
                            }
                        s && (this.updateDayPositions(t),
                            this.updateNetPositions(t))
                    }
                },
                methods: {
                    ...Object(i["e"])(h["b"], ["toggleDayHistory"]),
                    ...Object(i["c"])(h["b"], ["fetchPositions"]),
                    preProcess() {
                        this.isComponentActive = !0,
                            this.$events.on(u["b"].EVENTS.PRODUCT_MODIFY, this.apiProductModify)
                    },
                    postProcess() {
                        this.isComponentActive = !1,
                            this.clearUpdateTimer(),
                            this.subscribedTokens && this.subscribedTokens.length > 0 && this.ticker.unsubscribe(this.subscribedTokens, h["b"]),
                            this.currentCtxMenuUID = null
                    },
                    clearUpdateTimer() {
                        this.updateTimer && (clearInterval(this.updateTimer),
                            this.updateTimer = null)
                    },
                    initUpdateTimer() {
                        this.clearUpdateTimer();
                        let t = 3e3;
                        this.positions && this.positions.net && this.positions.net.length > 100 && (t = 6e4),
                            this.updateTimer = setInterval(() => {
                                this.updateDayPositions(this.ticks),
                                    this.updateNetPositions(this.ticks)
                            }
                                , t)
                    },
                    updateAllPositions(t) {
                        let e = [];
                        for (let s of t.net)
                            e.push(s.instrument_token);
                        this.subscribedTokens = e,
                            this.ticker.subscribe(this.subscribedTokens, h["b"]),
                            this.ticker.setMode(this.ticker.modeLTP, this.subscribedTokens, h["b"]),
                            t && t.net && t.net.length > this.maxItems && (this.performanceMode = !0,
                                this.initUpdateTimer()),
                            this.updateDayPositions(this.ticks),
                            this.updateNetPositions(this.ticks)
                    },
                    updateDayPositions(t) {
                        this.positions && this.positions.day && this.positions.day.length > 0 && (this.dayData = this.updatePositions(t, this.positions.day))
                    },
                    updateNetPositions(t) {
                        this.positions && this.positions.net && this.positions.net.length > 0 && (this.netData = this.updatePositions(t, this.positions.net))
                    },
                    getInstrument(t) {
                        let e = this.instruments[t.instrument_token];
                        return e || (e = this.instrumentManager.get(t.tradingsymbol, null, t.exchange),
                            this.instruments[t.instrument_token] = e),
                            e
                    },
                    realNetUnBookedPnl() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => t + (e.JS_REAL_PL?.netProfit || 0), 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        return realPnl;
                    },
                    realNetBookedPnl() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => t + (e.JS_BOOKED_PNL?.netProfit || 0), 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        return realPnl;
                    },
                    realNetBookedPnlPercentageOfCapital() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => t + (e.JS_BOOKED_PNL?.netProfit || 0), 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        let PNLPercentageOfCapital = realPnl;
                        if (window.JS_TOTAL_CAPITAL) {
                            const totalCpital = (window.JS_TOTAL_CAPITAL.data.equity.available.opening_balance || 0) +
                                (window.JS_TOTAL_CAPITAL.data.equity.available.collateral || 0);
                            PNLPercentageOfCapital = parseFloat((parseFloat(realPnl) / parseFloat(totalCpital)) * 100).toFixed(2);

                        }
                        return PNLPercentageOfCapital;
                    },
                    realNetTotalPnl() {
                        let realPnl = this.netData && this.netData.length > 0
                            ? this.netData.reduce((t, e) => t + (e.JS_BOOKED_PNL?.netProfit || 0) + (e.JS_REAL_PL?.netProfit || 0), 0) : 0
                        realPnl = parseFloat(realPnl).toFixed(2);
                        return realPnl;
                    },
                    calCustomExitPrice(buyOrSell, n, t) {
                        let exitPrice = 0;
                        if (buyOrSell === 'BUY') {

                            if (t.buy_quantity > 0) {
                                let sellPrice = this.getOrderDetailsFromOrders(t, 'SELL');
                                // const brokerageInfo = this.getBrokerageInfo(0, sellPrice, t);
                                exitPrice =
                                    (sellPrice - (parseFloat(t?.JS_BREAKEVEN) || 0))
                            } else {
                                if (t.JS_REAL_PL?.isInProfit) return n;
                                else {
                                    exitPrice =
                                        (t.sell_price - (t.JS_REAL_PL?.breakeven || 0))
                                }

                                return exitPrice
                            }
                        }

                        if (buyOrSell === 'SELL') {

                            if (t.sell_quantity > 0) {
                                let buyPrice = this.getOrderDetailsFromOrders(t, 'BUY');
                                // const brokerageInfo = this.getBrokerageInfo(buyPrice, 0, t);
                                exitPrice =
                                    (t.buyPrice + (parseFloat(t?.JS_BREAKEVEN) || 0))
                            } else {
                                if (t.JS_REAL_PL?.isInProfit) return n;
                                else {
                                    exitPrice =
                                        (t.buy_price + (t.JS_REAL_PL?.breakeven || 0))
                                }
                                return exitPrice
                            }
                        }
                    },
                    getBrokerageInfo(buy_price, sell_price, trade) {
                        const brkInfo = this.calculate_ExactPL(buy_price, sell_price, trade.quantity, trade);

                        return brkInfo;
                    },
                    getOrderDetailsFromOrders(t, transaction_type) {
                        if (window.ORDER_INFO) {
                            const completedOrders = window.ORDER_INFO.data.filter(f => f.status === "COMPLETE" &&
                                f.transaction_type === transaction_type &&
                                f.instrument_token === t.instrument_token
                                && f.tradingsymbol === t.tradingsymbol)
                                .reverse();

                            let ordersToLoop = Math.abs(t.quantity);
                            const lotSize = t.tradingsymbol.includes("BANKNIFTY") ? 15 : 50;
                            let numberOfOrders = ordersToLoop / lotSize;
                            let averagePrice = 0;
                            if (completedOrders?.length) {
                                for (const order of completedOrders) {
                                    const multiplier = order.filled_quantity / lotSize;
                                    averagePrice += (order.average_price * multiplier);
                                    ordersToLoop -= order.filled_quantity;
                                    if (ordersToLoop === 0) {
                                        break;
                                    }
                                }

                                return averagePrice / numberOfOrders;
                            }

                        }
                        return t.average_price;
                    },
                    getBookedPNLDeailsFromOrderDetails(t) {
                        if (window.ORDER_INFO) {
                            const completedOrders = window.ORDER_INFO.data.filter(f => f.status === "COMPLETE" &&
                                (f.transaction_type === 'BUY' || f.transaction_type === 'SELL') &&
                                f.instrument_token === t.instrument_token
                                && f.tradingsymbol === t.tradingsymbol);

                            t.tradingsymbol;
                            let buy_quantity = Math.abs(t.buy_quantity);
                            let sell_quantity = Math.abs(t.sell_quantity);

                            let ordersToLoop = Math.abs((buy_quantity + sell_quantity) - Math.abs(t.quantity));

                            if (ordersToLoop === 0) return null;
                            const lotSize = t.tradingsymbol.includes("BANKNIFTY") ? 15 : 50;
                            let numberOfOrders = ordersToLoop / lotSize;
                            let buyAveragePrice = 0;
                            let sellAveragePrice = 0;

                            if (completedOrders?.length) {
                                const buyOrders = completedOrders.filter(f => f.transaction_type === 'BUY');
                                const sellOrders = completedOrders.filter(f => f.transaction_type === 'SELL');
                                let buyOrderNumbers = 0;
                                for (const order of buyOrders) {
                                    const multiplier = order.filled_quantity / lotSize;
                                    buyOrderNumbers += multiplier;
                                    buyAveragePrice += (order.average_price * multiplier);
                                    ordersToLoop -= order.filled_quantity;
                                    if (ordersToLoop === 0) {
                                        break;
                                    }
                                }

                                buyAveragePrice = buyOrders.length
                                    ? buyAveragePrice / (buyOrderNumbers)
                                    : t.buy_price;

                                let sellOrderNumbers = 0;
                                for (const order of sellOrders) {
                                    const multiplier = order.filled_quantity / lotSize;
                                    sellOrderNumbers += multiplier;
                                    sellAveragePrice += (order.average_price * multiplier);
                                    ordersToLoop -= order.filled_quantity;
                                    if (ordersToLoop === 0) {
                                        break;
                                    }
                                }

                                sellAveragePrice = sellOrders.length
                                    ? sellAveragePrice / (sellOrderNumbers)
                                    : t.sell_price;
                            }
                            // console.log(completedOrders);

                            const bookedPNL = this.calculate_ExactPL(buyAveragePrice, sellAveragePrice, Math.min(buy_quantity, sell_quantity), t)
                            return bookedPNL;
                        }
                        return null
                    },
                    calculate_ExactPL(bp, sp, qty, h, _unBookedPNL) {
                        // console.log(h.tradingsymbol,`${qty ? 'OPEN : ':'CLOSED : '}`, h)
                        if (h.tradingsymbol.includes('FUT')) {
                            return this.cal_futures(bp, sp, qty, h, _unBookedPNL);
                        }
                        if (h.product.includes('CNC')) {
                            return this.cal_intra(bp, sp, qty, h);
                        }
                        bp = parseFloat(bp.toString());
                        sp = parseFloat(sp.toString());
                        qty = Math.abs(qty || h.buy_quantity);
                        const symbol = h.tradingsymbol;
                        const buy_quantity = h.buy_quantity;
                        const sell_quantity = h.sell_quantity;



                        if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
                            alert('error');
                            return;
                        }

                        let brokerage = 40;

                        if (isNaN(bp) || bp == 0) {
                            bp = 0;
                            bse_tran_charge_buy = 0;
                            brokerage = 20;
                        }
                        if (isNaN(sp) || sp == 0) {
                            sp = 0;
                            bse_tran_charge_sell = 0;
                            brokerage = 20;
                        }

                        let turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));

                        let stt_total = Math.round(parseFloat(parseFloat(sp * qty * 0.000625).toFixed(2)));
                        let sebi_charges = parseFloat(parseFloat(turnover * 0.000001).toFixed(2));

                        var etc = parseFloat(parseFloat(0.0005 * turnover).toFixed(2))

                        var nse_ipft = parseFloat(parseFloat(0.000005 * turnover).toFixed(2));
                        etc = parseFloat(parseFloat(etc + nse_ipft).toFixed(2));



                        let stax = parseFloat(parseFloat(0.18 * (brokerage + etc + sebi_charges)).toFixed(2));


                        let stamp_charges = Math.round(parseFloat(parseFloat(bp * qty * 0.00003).toFixed(2)));

                        let total_tax = parseFloat(parseFloat(brokerage + stt_total + etc + stax + sebi_charges + stamp_charges).toFixed(2));

                        let breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
                        breakeven = isNaN(breakeven) ? 0 : breakeven

                        let netProfit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

                        let actualNetProfit = ` _ ${parseFloat(netProfit) > 0 ? ' + ' : ' '}${netProfit}`;


                        return { actualNetProfit, netProfit, breakeven: breakeven + 1, isInProfit: parseFloat(netProfit) > 0 };
                    },
                    cal_intra(bp, sp, qty, h) {
                        bp = parseFloat(bp.toString());
                        sp = parseFloat(sp.toString());
                        qty = Math.abs(qty || h.buy_quantity);
                        const symbol = h.tradingsymbol;
                        const buy_quantity = h.buy_quantity;
                        const sell_quantity = h.sell_quantity;

                        if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {

                            return;
                        }
                        if (isNaN(bp) || bp == 0) {
                            bp = 0;
                            bse_tran_charge_buy = 0;
                        }
                        if (isNaN(sp) || sp == 0) {
                            sp = 0;
                            bse_tran_charge_sell = 0;
                        }
                        let brokerage_buy = ((bp * qty * 0.0003) > 20) ? 20 : parseFloat(parseFloat(bp * qty * 0.0003).toFixed(2));
                        let brokerage_sell = ((sp * qty * 0.0003) > 20) ? 20 : parseFloat(parseFloat(sp * qty * 0.0003).toFixed(2));
                        let brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

                        let turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));

                        let stt_total = Math.round(parseFloat(parseFloat((sp * qty) * 0.00025).toFixed(2)));
                        let sebi_charges = parseFloat(parseFloat(turnover * 0.000001).toFixed(2));

                        let exc_trans_charge = parseFloat(parseFloat(0.0000325 * turnover).toFixed(2))
                        let nse_ipft = parseFloat(parseFloat(0.000001 * turnover).toFixed(2))
                        let cc = 0;
                        exc_trans_charge = parseFloat(parseFloat(exc_trans_charge + nse_ipft).toFixed(2));

                        let stax = parseFloat(parseFloat(0.18 * (brokerage + exc_trans_charge + sebi_charges)).toFixed(2));

                        let stamp_charges = Math.round(parseFloat(parseFloat((bp * qty) * 0.00003).toFixed(2)));

                        let total_tax = parseFloat(parseFloat(brokerage + stt_total + exc_trans_charge + cc + stax + sebi_charges + stamp_charges).toFixed(2));

                        let breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
                        breakeven = isNaN(breakeven) ? 0 : breakeven


                        let netProfit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

                        let actualNetProfit = ` _ ${parseFloat(netProfit) > 0 ? ' + ' : ' '}${netProfit}`;
                        return { actualNetProfit, netProfit, breakeven: breakeven + 1, isInProfit: parseFloat(netProfit) > 0 };
                    },
                    cal_futures(bp, sp, qty, h, _unBookedPNL) {
                        bp = parseFloat(bp.toString());
                        sp = parseFloat(sp.toString());
                        qty = Math.abs(qty || h.buy_quantity);

                        if (isNaN(qty) || (isNaN(bp) && isNaN(sp))) {
                            alert('error');
                            return;
                        }
                        if (isNaN(bp) || bp == 0) {
                            bp = 0;
                            bse_tran_charge_buy = 0;
                        }
                        if (isNaN(sp) || sp == 0) {
                            sp = 0;
                            bse_tran_charge_sell = 0;
                        }

                        var turnover = parseFloat(parseFloat((bp + sp) * qty).toFixed(2));

                        var brokerage_buy = ((bp * qty * 0.0003) > 20) ? 20 : parseFloat(parseFloat(bp * qty * 0.0003).toFixed(2));
                        var brokerage_sell = ((sp * qty * 0.0003) > 20) ? 20 : parseFloat(parseFloat(sp * qty * 0.0003).toFixed(2));
                        var brokerage = parseFloat(parseFloat(brokerage_buy + brokerage_sell).toFixed(2));

                        var stt_total = Math.round(parseFloat(parseFloat(sp * qty * 0.000125).toFixed(2)));
                        var sebi_charges = parseFloat(parseFloat(turnover * 0.000001).toFixed(2));

                        var etc = parseFloat(parseFloat(0.000019 * turnover).toFixed(2));

                        var nse_ipft = parseFloat(parseFloat(0.000001 * turnover).toFixed(2))
                        etc = parseFloat(parseFloat(etc + nse_ipft).toFixed(2));

                        var stax = parseFloat(parseFloat(0.18 * (brokerage + etc + sebi_charges)).toFixed(2));

                        var stamp_charges = Math.round(parseFloat(parseFloat(bp * qty * 0.00002).toFixed(2)));

                        var total_tax = parseFloat(parseFloat(brokerage + stt_total + etc + stax + sebi_charges + stamp_charges).toFixed(2));

                        var breakeven = parseFloat(parseFloat(total_tax / qty).toFixed(2));
                        breakeven = isNaN(breakeven) ? 0 : breakeven

                        var netProfit = parseFloat(parseFloat(((sp - bp) * qty) - total_tax).toFixed(2));

                        let actualNetProfit = ` _ ${parseFloat(netProfit) > 0 ? ' + ' : ' '}${netProfit}`;


                        return { actualNetProfit, netProfit, breakeven: breakeven + 1, isInProfit: parseFloat(netProfit) > 0 };
                    },
                    getTotalPNLForTrade(trade) {
                        let pnl = parseFloat(
                            (trade.JS_BOOKED_PNL?.netProfit || 0)
                            + (trade.JS_REAL_PL?.netProfit || 0)).toFixed(2);
                        return pnl;
                    },
                    getJSCustomProps(h, u, a) {
                        const JS_UNBOOKED_PRICE = h.average_price
                            ? this.getOrderDetailsFromOrders(a, a.quantity > 0 ? 'BUY' : 'SELL')
                            : 0;
                        const isBuyOrder = a.quantity > 0;
                        const isSellOrder = a.quantity < 0;
                        const JS_BOOKED_PNL = h.quantity === 0 ?
                            this.calculate_ExactPL(h.buy_price, h.sell_price, h.buy_quantity, h)
                            : this.getBookedPNLDeailsFromOrderDetails(h);

                        const JS_REAL_PL = JS_UNBOOKED_PRICE
                            ? this.calculate_ExactPL(
                                isBuyOrder
                                    ? JS_UNBOOKED_PRICE
                                    : (u?.lastPrice || a?.last_price),
                                isSellOrder
                                    ? JS_UNBOOKED_PRICE
                                    : (u?.lastPrice || a?.last_price)
                                , a.quantity, a, h) : 0;
                        const JS_UNBOOKED_PNL = JS_REAL_PL?.netProfit || 0;

                        h.JS_UNBOOKED_PRICE = JS_UNBOOKED_PRICE;
                        h.JS_BOOKED_PNL = JS_BOOKED_PNL;
                        h.JS_UNBOOKED_PNL = JS_UNBOOKED_PNL;
                        h.JS_REAL_PL = JS_REAL_PL;
                        h.JS_BREAKEVEN = parseFloat(JS_REAL_PL?.breakeven).toFixed(2) || 0;

                        h.formatted.changePercent = this.getTotalPNLForTrade(h);
                        h.style.JS_BOOKED_PNL = { ...this.textStyle(JS_BOOKED_PNL?.netProfit || 0) };
                        h.style.JS_UNBOOKED_PNL = { ...this.textStyle(JS_UNBOOKED_PNL || 0) };
                        h.style.JS_TOTAL_PNL = { ...this.textStyle((h.JS_BOOKED_PNL?.netProfit || 0) + (JS_UNBOOKED_PNL || 0)) };


                        h.style.changePercent = {
                            "change-percent": !0
                        };


                        return { JS_UNBOOKED_PRICE, JS_BOOKED_PNL, JS_UNBOOKED_PNL, JS_REAL_PL }
                    },
                    updatePositions(t, e) {
                        let s = []
                            , n = 0;
                        for (let a of e) {
                            let e = "position." + a.instrument_token + "." + a.product + n;
                            n += 1;
                            let i = 0
                                , r = a.pnl
                                , l = a.m2m
                                , u = t[a.instrument_token]
                                , d = u && u.lastPrice || a.last_price
                                , h = Object.assign({
                                    lastPrice: d
                                }, a);
                            0 === a.sell_value && 0 === a.buy_value || 0 === a.sell_price && 0 === a.buy_price || (r = a.sell_value - a.buy_value + a.quantity * d * a.multiplier),
                                0 === a.sell_m2m && 0 === a.buy_m2m || 0 === a.sell_price && 0 === a.buy_price || (l = a.sell_m2m - a.buy_m2m + a.quantity * d * a.multiplier),
                                0 !== a.average_price && (i = (d - a.average_price) / a.average_price * 100),
                                0 === a.average_price && 0 !== a.quantity && (r = 0,
                                    l = 0),
                                h.uid = e,
                                h.pnl = Object(o["c"])(r, 2),
                                h.m2m = Object(o["c"])(l, 2),
                                h.tick = u,
                                h.changePercent = Object(o["c"])(i, 2);
                            let p = this.getInstrument(a)
                                , f = p && p.precision || 2;
                            h.averagePrice = Object(o["c"])(a.average_price, f),
                                h.stockWidget = p && p.stockWidget,
                                p && p.expiryWeek && p.niceName ? h.niceName = Object(c["a"])(p.niceName) : h.niceName = p && p.niceName,
                                h.formatted = {
                                    quantity: this.signedNumber(a.quantity),
                                    averagePrice: Object(o["b"])(a.average_price, f, !0),
                                    pnl: (r > 0 ? "+" : "") + Object(o["b"])(r, 2, !0),
                                    m2m: Object(o["b"])(l, 2, !0),
                                    lastPrice: Object(o["b"])(d, f, !0),
                                    closePrice: Object(o["b"])(a.close_price, f, !0),
                                    changePercent: Object(o["b"])(i, 2, !0) + "%",
                                    buyPrice: Object(o["b"])(a.buy_price, f, !0),
                                    sellPrice: Object(o["b"])(a.sell_price, f, !0),
                                    buyValue: Object(o["b"])(a.buy_value, 2, !0),
                                    sellValue: Object(o["b"])(a.sell_value, 2, !0),
                                    buyQuantity: a.buy_quantity,
                                    sellQuantity: a.sell_quantity
                                },
                                h.style = {
                                    product: this.quantityStyle(a),
                                    lastPrice: this.quantityStyle(a),
                                    averagePrice: this.quantityStyle(a),
                                    tradingsymbol: this.quantityStyle(a),
                                    pnl: {
                                        ...this.textStyle(r),
                                        ...this.quantityStyle(a)
                                    },
                                    changePercent: {
                                        ...this.textStyle(i),
                                        ...this.quantityStyle(a),
                                        "change-percent": !0
                                    },
                                    quantity: {
                                        ...this.transactionTypeStyle(a.quantity),
                                        ...this.quantityStyle(a)
                                    }
                                },
                                { ...this.getJSCustomProps(h, u, a) },
                                h.disableSelect = !1,
                                0 !== a.quantity && "BO" !== a.product && "CO" !== a.product || (h.disableSelect = !0),
                                s.push(h)
                        }
                        return s
                    },
                    showPositionsInfo(t) {
                        this.positionsInfo = !0,
                            this.currentPosition = t
                    },
                    hidePositionsInfo() {
                        this.positionsInfo = !1,
                            this.currentPosition = null
                    },
                    showProductModify(t) {
                        this.hidePositionsInfo();
                        let e = this.getInstrument(t);
                        e && (this.currentPosition = {
                            ...t,
                            instrument: e
                        },
                            this.productModifyModal = !0)
                    },
                    hideProductModify(t) {
                        this.productModifyModal = !1,
                            this.currentPosition = null
                    },
                    textStyle(t) {
                        return {
                            "text-red": t < 0,
                            "text-green": t > 0
                        }
                    },
                    quantityStyle(t) {
                        return {
                            closed: 0 === t.quantity,
                            greyed: 0 === t.quantity || t.quantity < 0 && t.product === f["b"].PRODUCT.CNC,
                            open: 0 !== t.quantity
                        }
                    },
                    transactionTypeStyle(t) {
                        return {
                            "text-buy": t > 0,
                            "text-sell": t < 0
                        }
                    },
                    quantityTransactionTypeStyle(t) {
                        return {
                            "text-buy": t > 0,
                            "text-sell": t < 0
                        }
                    },
                    signedNumber(t) {
                        return t > 0 ? "+" + t.toString() : t.toString()
                    },
                    addPosition(t) {
                        let e = this.getInstrument(t);
                        if (!e)
                            return;
                        let s = t.quantity >= 0 ? f["b"].TRANSACTION_TYPE.BUY : f["b"].TRANSACTION_TYPE.SELL
                            , n = this.ticks[t.instrument_token] && this.ticks[t.instrument_token].lastPrice
                            , a = t.product;
                        a !== f["b"].VARIETY.CO.toUpperCase() && a !== f["b"].VARIETY.BO.toUpperCase() || (a = f["b"].PRODUCT.MIS),
                            this.placeOrder({
                                instrument: e,
                                instrumentToken: t.instrument_token,
                                transactionType: s,
                                quantity: e.lotSize,
                                product: a,
                                orderType: f["b"].ORDER_TYPE.MARKET,
                                variety: f["b"].VARIETY.REGULAR,
                                instrument_token: t.instrument_token,
                                price: n,
                                lastPrice: n,
                                triggerPrice: n
                            })
                    },
                    exitPosition(t) {
                        let e = this.getInstrument(t);
                        if (e)
                            if ("CO" === t.product.toUpperCase() || "BO" === t.product.toUpperCase()) {
                                let t = this.$toast.TOP_RIGHT;
                                this.minimal ? t = this.$toast.BOTTOM_LEFT : this.$router.push(l["b"].orders),
                                    this.$toast.warning({
                                        message: "Exit BO and CO from the orderbook",
                                        orientation: t
                                    })
                            } else {
                                let s = t.quantity >= 0 ? f["b"].TRANSACTION_TYPE.SELL : f["b"].TRANSACTION_TYPE.BUY
                                    , n = this.ticks[t.instrument_token] && this.ticks[t.instrument_token].lastPrice;
                                this.placeOrder({
                                    instrument: e,
                                    instrumentToken: t.instrument_token,
                                    transactionType: s,
                                    quantity: Math.abs(t.quantity),
                                    product: t.product,
                                    orderType: f["b"].ORDER_TYPE.LIMIT,
                                    variety: f["b"].VARIETY.REGULAR,
                                    instrument_token: t.instrument_token,
                                    price: this.calCustomExitPrice(s, n, t),
                                    lastPrice: n,
                                    triggerPrice: n
                                })
                            }
                    },
                    placeOrder(t) {
                        this.$events.emit(f["b"].EVENTS.ORDER_PLACE, t)
                    },
                    handleRowSelection(t) {
                        this.selectedPositions = t
                    },
                    exitSelectedPositions() {
                        for (let t of this.selectedPositions) {
                            let e = this.getInstrument(t);
                            if (!e)
                                continue;
                            let s = t.quantity > 0 ? f["b"].TRANSACTION_TYPE.SELL : f["b"].TRANSACTION_TYPE.BUY
                                , n = {
                                    label: {
                                        red: s === f["b"].TRANSACTION_TYPE.SELL,
                                        blue: s === f["b"].TRANSACTION_TYPE.BUY
                                    }
                                }
                                , a = {
                                    instrument: e,
                                    transactionType: s,
                                    quantity: Math.abs(t.quantity),
                                    product: t.product,
                                    orderType: f["b"].ORDER_TYPE.MARKET,
                                    label: s,
                                    styles: n
                                }
                                , i = "position." + t.instrument_token + "." + t.product;
                            this.$events.emit(v["b"].EVENTS.ADD, {
                                type: v["b"].TYPES.PLACE,
                                basket: "positions-exit",
                                id: i,
                                data: a
                            })
                        }
                        this.$events.emit(v["b"].EVENTS.SHOW, {
                            basket: "positions-exit",
                            title: "Exit positions",
                            actionTitle: "Exit"
                        })
                    },
                    handleRowKeyDown({ row: t, event: e }) {
                        if (46 === e.keyCode || 8 === e.keyCode)
                            if (this.selectedPositions.length > 1)
                                this.exitSelectedPositions();
                            else {
                                if (0 === t.quantity)
                                    return;
                                this.exitPosition(t)
                            }
                    },
                    showContextMenu(t) {
                        this.currentCtxMenuUID = t.uid
                    },
                    hideContextMenu(t) {
                        this.currentCtxMenuUID = null
                    },
                    handleRowEnter({ row: t, event: e }) {
                        this.showContextMenu(t)
                    },
                    handleRowLeave() {
                        this.hideContextMenu()
                    },
                    showAnalyzeWidget(t) {
                        this.$events.emit(r["d"].EVENTS.showStocksAnalyzeWidget, {
                            source: "positions_page"
                        })
                    },
                    addonData(t) {
                        let e = t.quantity > 0 ? f["b"].TRANSACTION_TYPE.SELL : f["b"].TRANSACTION_TYPE.BUY;
                        return {
                            createGTT: {
                                lastPrice: t.lastPrice,
                                type: f["b"].GTT.typeTwoLeg,
                                transactionType: e,
                                condition: {
                                    tradingsymbol: t.tradingsymbol,
                                    exchange: t.exchange
                                },
                                orders: [{
                                    quantity: Math.abs(t.quantity)
                                }, {
                                    quantity: Math.abs(t.quantity)
                                }]
                            }
                        }
                    },
                    contextMenuExcludeList(t) {
                        return t && t.product === f["b"].PRODUCT.MIS ? ["createGTT"] : []
                    },
                    onToggleDayHistory() {
                        this.toggleDayHistory()
                    }
                }
            }
            , I = L
            , R = Object(C["a"])(I, n, a, !1, null, null, null);
        e["default"] = R.exports
    },
    "850b": function (t, e, s) {
        "use strict";
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("div", {
                staticClass: "bar-chart"
            }, [s("div", {
                ref: "chart",
                staticClass: "chart"
            }), t._v(" "), t.data && t.data.length > t.maxItems || t.rawData && t.rawData.length > t.maxItems ? s("div", {
                staticClass: "disclaimer"
            }, [t._v("\n\t\t* Showing " + t._s(t.maxItems) + " best and worst performing positions.\n\t")]) : t._e()])
        }
            , a = []
            , i = s("00a5")
            , r = s("bc17")
            , o = s("e236")
            , c = s("f1f7")
            , l = s("025e")
            , u = {
                inject: ["instrumentManager"],
                props: {
                    data: Array,
                    rawData: Array,
                    maxItems: {
                        type: Number,
                        default: 30
                    }
                },
                data() {
                    return {
                        isActive: !1
                    }
                },
                mounted() {
                    this.element = Object(i["a"])(this.$refs.chart),
                        this.redraw(),
                        Object(l["t"])("resize", "optimizedResize"),
                        this.preProcess()
                },
                beforeDestroy() {
                    this.postProcess()
                },
                activated() {
                    this.preProcess(),
                        this.redraw()
                },
                deactivated() {
                    this.postProcess()
                },
                computed: {
                    formattedData() {
                        return this.data || this.formatRawData(this.rawData)
                    }
                },
                methods: {
                    preProcess() {
                        window.removeEventListener("optimizedResize", this.handleResize),
                            window.addEventListener("optimizedResize", this.handleResize),
                            this.isActive = !0
                    },
                    postProcess() {
                        window.removeEventListener("optimizedResize", this.handleResize),
                            this.isActive = !1
                    },
                    redraw() {
                        this.draw(this.element, this.formattedData, !0)
                    },
                    handleResize() {
                        this.isActive && this.redraw()
                    },
                    formatRawData(t) {
                        let e = [];
                        for (let s = 0; s < t.length; s++) {
                            if (0 === t[s].average_price && 0 !== t[s].quantity)
                                continue;
                            let n = this.instrumentManager.get(t[s].tradingsymbol, null, t[s].exchange)
                                , a = "";
                            a = n ? n.niceName + " (" + t[s].product + ")" : t[s].tradingsymbol + " (" + t[s].product + ")",
                                e.push({
                                    pnl: t[s].pnl,
                                    quantity: t[s].quantity,
                                    symbol: t[s].tradingsymbol,
                                    volume: t[s].buy_value + t[s].sell_value,
                                    product: t[s].product,
                                    label: a
                                })
                        }
                        if (e = Object(l["o"])(e, "pnl", !0),
                            e.length > this.maxItems) {
                            let t = e.slice(0, this.maxItems / 2)
                                , s = e.slice(e.length - this.maxItems / 2, e.length);
                            e = t.concat(s)
                        }
                        return e
                    },
                    draw(t, e, s) {
                        s && t.html("");
                        let n = 10
                            , a = 10
                            , i = (n + 2 * a) * e.length
                            , l = t.node().getBoundingClientRect().width
                            , u = t.append("div").style("position", "relative").style("width", l + "px").style("height", i + "px")
                            , d = Object(o["d"])().exponent(.5).range([0, l])
                            , h = Object(o["a"])().rangeRound([i, 0])
                            , p = Object(r["d"])(e, t => parseFloat(t.pnl));
                        Math.abs(p[0]) >= Math.abs(p[1]) && (p = [-Math.abs(p[0]), Math.abs(p[0])]),
                            Math.abs(p[1]) > Math.abs(p[0]) && (p = [-Math.abs(p[1]), Math.abs(p[1])]),
                            d.domain(p).nice(),
                            h.domain(e.map(t => t.label));
                        let f = u.selectAll(".bar").data(e).enter().append("div").attr("class", t => {
                            let e = "bar bar-";
                            return t.pnl <= 0 && (e += "negative"),
                                t.pnl > 0 && (e += "positive"),
                                e
                        }
                        );
                        f.append("div").attr("class", "rect").style("position", "absolute").style("left", t => d(Math.min(0, t.pnl)) + "px").style("top", t => h(t.label) + a + "px").style("width", t => Math.max(Math.abs(d(t.pnl) - d(0)), 2) + "px").style("height", n + "px").attr("data-balloon-length", "small").attr("data-balloon-pos", "up").attr("data-balloon", (function (t) {
                            return "P&L: " + Object(c["b"])(t.pnl)
                        }
                        )),
                            f.append("div").attr("class", "label").style("position", "absolute").style("left", t => t.pnl > 0 ? "0px" : t.pnl <= 0 ? d(0) + "px" : void 0).style("text-align", t => {
                                if (t.pnl > 0)
                                    return "right"
                            }
                            ).style("top", t => h(t.label) + a + "px").style("width", t => t.pnl > 0 ? d(0) + "px" : t.pnl <= 0 ? l - d(0) + "px" : void 0).style("height", n + "px").html(t => t.label).attr("data-balloon-length", "small").attr("data-balloon-pos", "up").attr("data-balloon", (function (t) {
                                return "P&L: " + Object(c["b"])(t.pnl)
                            }
                            ))
                    }
                }
            }
            , d = u
            , h = (s("6e95"),
                s("0c7c"))
            , p = Object(h["a"])(d, n, a, !1, null, null, null);
        e["a"] = p.exports
    },
    "90ef": function (t, e, s) {
        "use strict";
        var n = s("e317")
            , a = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
            , i = new RegExp(a.source, "g");
        function r(t) {
            return function () {
                return t
            }
        }
        function o(t) {
            return function (e) {
                return t(e) + ""
            }
        }
        e["a"] = function (t, e) {
            var s, c, l, u = a.lastIndex = i.lastIndex = 0, d = -1, h = [], p = [];
            t += "",
                e += "";
            while ((s = a.exec(t)) && (c = i.exec(e)))
                (l = c.index) > u && (l = e.slice(u, l),
                    h[d] ? h[d] += l : h[++d] = l),
                    (s = s[0]) === (c = c[0]) ? h[d] ? h[d] += c : h[++d] = c : (h[++d] = null,
                        p.push({
                            i: d,
                            x: Object(n["a"])(s, c)
                        })),
                    u = i.lastIndex;
            return u < e.length && (l = e.slice(u),
                h[d] ? h[d] += l : h[++d] = l),
                h.length < 2 ? p[0] ? o(p[0].x) : r(e) : (e = p.length,
                    function (t) {
                        for (var s, n = 0; n < e; ++n)
                            h[(s = p[n]).i] = s.x(t);
                        return h.join("")
                    }
                )
        }
    },
    "9f74": function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return l
        }
        ));
        var n = s("f586")
            , a = s("25b5")
            , i = s("5fb0")
            , r = s("025e")
            , o = s("b202")
            , c = s("db49");
        const l = a["a"];
        let u = !0;
        function d() {
            let t = Object(o["b"])(l, "pinnedInstruments", null, c["a"].pinnedInstruments.slice(0))
                , e = []
                , s = !1;
            for (let a = 0; a < t.length; a++) {
                let i = t[a];
                if (i.expiry)
                    try {
                        let n = new Date(i.expiry);
                        n.setDate(n.getDate() + 1);
                        let r = new Date;
                        r > n ? (s = !0,
                            e.push(t[a])) : e.push(i)
                    } catch (n) {
                        e.push(i)
                    }
                else
                    e.push(i)
            }
            return s && Object(o["d"])(l, "pinnedInstruments", e),
                e
        }
        const h = {
            currentWatchId: Object(o["b"])(l, "currentWatchId") || 0,
            marketwatches: [],
            marketwatchesError: null,
            marketwatchFetchStatus: i["b"].initial,
            priceChangeType: Object(o["b"])(l, "priceChangeType") || a["b"].CLOSE_ABSOLUTE_PERCENTAGE,
            showPriceChange: Object(o["b"])(l, "showPriceChange", null, !0),
            showHoldings: Object(o["b"])(l, "showHoldings", null, !0),
            showDirection: Object(o["b"])(l, "showDirection", null, !0),
            pinnedInstruments: d()
        }
            , p = {
                currentWatchId: t => t.currentWatchId,
                marketwatches: t => t.marketwatches,
                marketwatchesError: t => t.marketwatchesError,
                marketwatchFetchStatus: t => t.marketwatchFetchStatus,
                priceChangeType: t => t.priceChangeType,
                showPriceChange: t => t.showPriceChange,
                showHoldings: t => t.showHoldings,
                showDirection: t => t.showDirection,
                pinnedInstruments: t => t.pinnedInstruments
            }
            , f = {
                setCurrentWatchId(t, e) {
                    t.currentWatchId = e,
                        Object(o["d"])(l, "currentWatchId", e)
                },
                setMarketwatches(t, e) {
                    t.marketwatches = e
                },
                setMarketwatchesError(t, e) {
                    t.marketwatchesError = e
                },
                setMarketwatchFetchStatus(t, e) {
                    t.marketwatchFetchStatus = e
                },
                updatedMarketwatch(t, e) {
                    let s = [];
                    for (let n of t.marketwatches)
                        n.id === e.id ? s.push(e) : s.push(n);
                    t.marketwatches = s
                },
                setPriceChangeType(t, e) {
                    t.priceChangeType = e,
                        Object(o["d"])(l, "priceChangeType", e)
                },
                setShowPriceChange(t, e) {
                    t.showPriceChange = e,
                        Object(o["d"])(l, "showPriceChange", e)
                },
                setShowHoldings(t, e) {
                    t.showHoldings = e,
                        Object(o["d"])(l, "showHoldings", e)
                },
                setShowDirection(t, e) {
                    t.showDirection = e,
                        Object(o["d"])(l, "showDirection", e)
                },
                pinInstrument(t, e) {
                    let s = t.pinnedInstruments.slice(0);
                    s[e.index] = e.instrument,
                        t.pinnedInstruments = s,
                        Object(o["d"])(l, "pinnedInstruments", s)
                }
            }
            , v = {
                fetchMarketwatches({ commit: t, state: e }) {
                    t("setMarketwatchFetchStatus", i["b"].fetching);
                    let s = n["a"].get();
                    Object(r["i"])({
                        commit: t,
                        apiPromise: s,
                        data: "setMarketwatches",
                        error: "setMarketwatchesError",
                        status: "setMarketwatchFetchStatus"
                    })
                }
            };
        e["a"] = {
            state: h,
            getters: p,
            mutations: f,
            actions: v,
            namespaced: u
        }
    },
    a15a: function (t, e, s) {
        "use strict";
        var n = s("18e2")
            , a = Object(n["a"])((function (t) {
                t.setMonth(0, 1),
                    t.setHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setFullYear(t.getFullYear() + e)
            }
            ), (function (t, e) {
                return e.getFullYear() - t.getFullYear()
            }
            ), (function (t) {
                return t.getFullYear()
            }
            ));
        a.every = function (t) {
            return isFinite(t = Math.floor(t)) && t > 0 ? Object(n["a"])((function (e) {
                e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                    e.setMonth(0, 1),
                    e.setHours(0, 0, 0, 0)
            }
            ), (function (e, s) {
                e.setFullYear(e.getFullYear() + s * t)
            }
            )) : null
        }
            ,
            e["a"] = a;
        a.range
    },
    a317: function (t, e, s) {
        "use strict";
        e["a"] = function (t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        }
    },
    b055: function (t, e, s) {
        "use strict";
        s.d(e, "c", (function () {
            return r
        }
        )),
            s.d(e, "b", (function () {
                return o
            }
            )),
            s.d(e, "a", (function () {
                return c
            }
            ));
        var n = s("c698");
        function a(t, e) {
            return function (s) {
                return t + s * e
            }
        }
        function i(t, e, s) {
            return t = Math.pow(t, s),
                e = Math.pow(e, s) - t,
                s = 1 / s,
                function (n) {
                    return Math.pow(t + n * e, s)
                }
        }
        function r(t, e) {
            var s = e - t;
            return s ? a(t, s > 180 || s < -180 ? s - 360 * Math.round(s / 360) : s) : Object(n["a"])(isNaN(t) ? e : t)
        }
        function o(t) {
            return 1 === (t = +t) ? c : function (e, s) {
                return s - e ? i(e, s, t) : Object(n["a"])(isNaN(e) ? s : e)
            }
        }
        function c(t, e) {
            var s = e - t;
            return s ? a(t, s) : Object(n["a"])(isNaN(t) ? e : t)
        }
    },
    b14c: function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return r
        }
        )),
            s.d(e, "a", (function () {
                return o
            }
            )),
            s.d(e, "c", (function () {
                return u
            }
            ));
        var n = s("18e2")
            , a = s("1738");
        function i(t) {
            return Object(n["a"])((function (e) {
                e.setDate(e.getDate() - (e.getDay() + 7 - t) % 7),
                    e.setHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setDate(t.getDate() + 7 * e)
            }
            ), (function (t, e) {
                return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * a["c"]) / a["e"]
            }
            ))
        }
        var r = i(0)
            , o = i(1)
            , c = i(2)
            , l = i(3)
            , u = i(4)
            , d = i(5)
            , h = i(6);
        r.range,
            o.range,
            c.range,
            l.range,
            u.range,
            d.range,
            h.range
    },
    bc17: function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return c
        }
        )),
            s.d(e, "a", (function () {
                return n
            }
            )),
            s.d(e, "c", (function () {
                return a
            }
            )),
            s.d(e, "d", (function () {
                return u
            }
            )),
            s.d(e, "e", (function () {
                return y
            }
            )),
            s.d(e, "f", (function () {
                return C
            }
            )),
            s.d(e, "g", (function () {
                return b
            }
            )),
            s.d(e, "h", (function () {
                return h
            }
            )),
            s.d(e, "k", (function () {
                return m
            }
            )),
            s.d(e, "i", (function () {
                return _
            }
            )),
            s.d(e, "j", (function () {
                return g
            }
            ));
        var n = function (t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
            , a = function (t) {
                return 1 === t.length && (t = i(t)),
                {
                    left: function (e, s, n, a) {
                        null == n && (n = 0),
                            null == a && (a = e.length);
                        while (n < a) {
                            var i = n + a >>> 1;
                            t(e[i], s) < 0 ? n = i + 1 : a = i
                        }
                        return n
                    },
                    right: function (e, s, n, a) {
                        null == n && (n = 0),
                            null == a && (a = e.length);
                        while (n < a) {
                            var i = n + a >>> 1;
                            t(e[i], s) > 0 ? a = i : n = i + 1
                        }
                        return n
                    }
                }
            };
        function i(t) {
            return function (e, s) {
                return n(t(e), s)
            }
        }
        var r = a(n)
            , o = r.right
            , c = (r.left,
                o);
        var l = function (t) {
            return null === t ? NaN : +t
        }
            , u = function (t, e) {
                var s, n, a, i = t.length, r = -1;
                if (null == e) {
                    while (++r < i)
                        if (null != (s = t[r]) && s >= s) {
                            n = a = s;
                            while (++r < i)
                                null != (s = t[r]) && (n > s && (n = s),
                                    a < s && (a = s))
                        }
                } else
                    while (++r < i)
                        if (null != (s = e(t[r], r, t)) && s >= s) {
                            n = a = s;
                            while (++r < i)
                                null != (s = e(t[r], r, t)) && (n > s && (n = s),
                                    a < s && (a = s))
                        }
                return [n, a]
            }
            , d = Array.prototype
            , h = (d.slice,
                d.map,
                function (t, e, s) {
                    t = +t,
                        e = +e,
                        s = (a = arguments.length) < 2 ? (e = t,
                            t = 0,
                            1) : a < 3 ? 1 : +s;
                    var n = -1
                        , a = 0 | Math.max(0, Math.ceil((e - t) / s))
                        , i = new Array(a);
                    while (++n < a)
                        i[n] = t + n * s;
                    return i
                }
            )
            , p = Math.sqrt(50)
            , f = Math.sqrt(10)
            , v = Math.sqrt(2)
            , m = function (t, e, s) {
                var n, a, i, r, o = -1;
                if (e = +e,
                    t = +t,
                    s = +s,
                    t === e && s > 0)
                    return [t];
                if ((n = e < t) && (a = t,
                    t = e,
                    e = a),
                    0 === (r = _(t, e, s)) || !isFinite(r))
                    return [];
                if (r > 0) {
                    t = Math.ceil(t / r),
                        e = Math.floor(e / r),
                        i = new Array(a = Math.ceil(e - t + 1));
                    while (++o < a)
                        i[o] = (t + o) * r
                } else {
                    t = Math.floor(t * r),
                        e = Math.ceil(e * r),
                        i = new Array(a = Math.ceil(t - e + 1));
                    while (++o < a)
                        i[o] = (t - o) / r
                }
                return n && i.reverse(),
                    i
            };
        function _(t, e, s) {
            var n = (e - t) / Math.max(0, s)
                , a = Math.floor(Math.log(n) / Math.LN10)
                , i = n / Math.pow(10, a);
            return a >= 0 ? (i >= p ? 10 : i >= f ? 5 : i >= v ? 2 : 1) * Math.pow(10, a) : -Math.pow(10, -a) / (i >= p ? 10 : i >= f ? 5 : i >= v ? 2 : 1)
        }
        function g(t, e, s) {
            var n = Math.abs(e - t) / Math.max(0, s)
                , a = Math.pow(10, Math.floor(Math.log(n) / Math.LN10))
                , i = n / a;
            return i >= p ? a *= 10 : i >= f ? a *= 5 : i >= v && (a *= 2),
                e < t ? -a : a
        }
        var b = function (t, e, s) {
            if (null == s && (s = l),
                n = t.length) {
                if ((e = +e) <= 0 || n < 2)
                    return +s(t[0], 0, t);
                if (e >= 1)
                    return +s(t[n - 1], n - 1, t);
                var n, a = (n - 1) * e, i = Math.floor(a), r = +s(t[i], i, t), o = +s(t[i + 1], i + 1, t);
                return r + (o - r) * (a - i)
            }
        }
            , y = function (t, e) {
                var s, n, a = t.length, i = -1;
                if (null == e) {
                    while (++i < a)
                        if (null != (s = t[i]) && s >= s) {
                            n = s;
                            while (++i < a)
                                null != (s = t[i]) && s > n && (n = s)
                        }
                } else
                    while (++i < a)
                        if (null != (s = e(t[i], i, t)) && s >= s) {
                            n = s;
                            while (++i < a)
                                null != (s = e(t[i], i, t)) && s > n && (n = s)
                        }
                return n
            }
            , C = function (t, e) {
                var s, n, a = t.length, i = -1;
                if (null == e) {
                    while (++i < a)
                        if (null != (s = t[i]) && s >= s) {
                            n = s;
                            while (++i < a)
                                null != (s = t[i]) && n > s && (n = s)
                        }
                } else
                    while (++i < a)
                        if (null != (s = e(t[i], i, t)) && s >= s) {
                            n = s;
                            while (++i < a)
                                null != (s = e(t[i], i, t)) && n > s && (n = s)
                        }
                return n
            }
    },
    bfdc: function (t, e, s) {
        "use strict";
        s.r(e);
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("div", {
                staticClass: "orderbook"
            }, [t.ordersConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Orders couldn't be loaded.",
                    error: t.ordersError
                }
            }) : t._e(), t._v(" "), t.ordersConstraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/orderbook.svg")),
                    showOmnisearch: "",
                    omnisearchActionTitle: "Get started"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You haven't placed any orders today")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", [s("a", {
                staticClass: "inline-image-text",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/reports/tradebook?src=kiteweb"
                }
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v("View history\n\t\t\t\t")])]), t._v(" "), s("div", [t.ordersConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e(), t._v(" "), t.ordersConstraints.isError ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: "Orders couldn't be fetched."
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e()], 1)])]) : t._e(), t._v(" "), !t.ordersConstraints.showEmptyState && t.minimal && t.pendingOrders && 0 === t.pendingOrders.length ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/orderbook.svg")),
                    showOmnisearch: "",
                    omnisearchActionTitle: "Get started"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You don't have any open orders")])])]) : t._e(), t._v(" "), t.ordersConstraints.showHeader ? s("div", {
                staticClass: "orderbook-header data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("span", [t._v("Orders")]), t._v(" "), t.ordersConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]) : t._e(), t._v(" "), t.ordersConstraints.isData && t.ordersConstraints.isPendingOrders ? s("section", {
                staticClass: "pending-orders-wrap table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("span", [t._v("Open orders")]), t._v(" "), s("span", {
                staticClass: "count"
            }, [t._v("(" + t._s(t.pendingOrders.length) + ")")]), t._v(" "), t.ordersConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.ordersError && t.ordersError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.ordersConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.isMobile ? s("div", {
                staticClass: "pending-orders cards"
            }, t._l(t.formattedPendingOrders, (function (e, n) {
                return s("div", {
                    key: n,
                    staticClass: "card",
                    on: {
                        click: function (s) {
                            return t.showContextMenu(e, "pending")
                        }
                    }
                }, [t.contextMenu.pending === e.uid ? s("mobile-context-menu", {
                    staticClass: "mobile",
                    on: {
                        close: function (s) {
                            return t.hideContextMenu(e, "pending")
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [e.isExit ? s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.showOrderCancelModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-exit"
                }), t._v(" Exit")])]) : t._e(), t._v(" "), e.isExit ? t._e() : s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.showOrderCancelModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-times"
                }), t._v(" Cancel")])]), t._v(" "), "auction" !== e.variety ? s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.modifyOrder(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-edit"
                }), t._v(" Modify")])]) : t._e(), t._v(" "), s("li", [e.isRepeatOrder ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.repeatOrder(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-copy"
                }), t._v(" Repeat")]) : t._e()]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.showOrderInfoModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-info"
                }), t._v(" Info")])]), t._v(" "), t.minimal || "auction" === e.variety ? t._e() : s("common-context-menu", {
                    attrs: {
                        tradingsymbol: e.tradingsymbol,
                        exchange: e.exchange
                    }
                }), t._v(" "), t.minimal || "auction" === e.variety ? t._e() : s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: {
                            tradingsymbol: e.tradingsymbol,
                            exchange: e.exchange
                        }
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex6"
                }, ["SELL" === e.transaction_type ? s("span", {
                    staticClass: "text-label text-label-outline red small"
                }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.transaction_type ? s("span", {
                    staticClass: "text-label text-label-outline blue small"
                }, [t._v("BUY")]) : t._e(), t._v(" "), e.auction_number ? s("span", [s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "text-label",
                    attrs: {
                        title: "Auction #" + e.auction_number
                    }
                }, [t._v("AU")])]) : t._e(), t._v(" "), s("span", {
                    staticClass: "text-label text-label-outline small order-status-label",
                    class: {
                        red: "REJECTED" === e.status,
                        green: "COMPLETE" === e.status
                    }
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.status) + "\n\t\t\t\t\t\t")]), t._v(" "), e && e.gtt ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "has-tag",
                    attrs: {
                        title: t.gttTooltip(e.gtt)
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(),
                                e.stopPropagation(),
                                t.gotoPage("gtt")
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: "/static/images/gtt-icon.svg"
                    }
                })]) : t._e(), t._v(" "), t.hasTag(e.tags, "sip") ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "has-tag",
                    attrs: {
                        title: "SIP"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(),
                                e.stopPropagation(),
                                t.gotoPage("sip")
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: "/static/images/sip-icon.svg"
                    }
                })]) : t._e()]), t._v(" "), s("div", {
                    staticClass: "flex4 text-right"
                }, [s("span", {
                    staticClass: "dim"
                }, [t._v(t._s(e.order_timestamp.slice(11)))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex7"
                }, [e.niceName ? s("span", {
                    domProps: {
                        innerHTML: t._s(e.niceName)
                    }
                }) : s("span", [t._v(t._s(e.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall inline-block"
                }, [t._v(t._s(e.exchange) + " / "), s("span", {
                    staticClass: "product"
                }, [t._v(t._s(e.product))])]), t._v(" "), s("su-tags", {
                    key: e.order_id,
                    attrs: {
                        tags: e.uiTags,
                        tagsMap: t.allTagsMap
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "flex5"
                }, [e.trigger_price && 0 !== e.trigger_price ? s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.formatted.price) + " / " + t._s(e.formatted.triggerPrice) + " trg.\n\t\t\t\t\t\t")]) : s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.formatted.price) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "flex3 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("Qty.")]), t._v(" "), s("span", [t._v(t._s(e.filled_quantity) + " / " + t._s(e.quantity))])])])], 1)
            }
            )), 0) : t._e(), t._v(" "), t.isMobile ? t._e() : s("div", {
                staticClass: "pending-orders"
            }, [s("su-table", {
                key: "pending-orders",
                staticClass: "fold-header sticky",
                attrs: {
                    uid: "uid",
                    data: t.formattedPendingOrders,
                    headers: t.pendingOrderTableHeaders,
                    "download-csv": "open-orders.csv",
                    "search-place-holder": "eg: sell, nifty, nrml etc.",
                    sort: !t.minimal,
                    search: !t.minimal,
                    select: !t.minimal,
                    "select-on-row-click": "",
                    focus: !t.minimal,
                    toolbar: !t.minimal,
                    "row-events": ""
                },
                on: {
                    selected: t.handlePendingOrderSelect,
                    rowEnter: function (e) {
                        return t.showContextMenu(e.row, "pending")
                    },
                    rowLeave: function (e) {
                        return t.hideContextMenu(e.row, "pending")
                    },
                    rowKeyDown: t.handlePendingOrderKeyDown
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (e) {
                        return [s("td", {
                            staticClass: "order-timestamp"
                        }, [t.minimal ? s("span", [t._v(t._s(e.row.order_timestamp.slice(11, 16)))]) : s("span", [t._v(t._s(e.row.order_timestamp.slice(11)))])]), t._v(" "), s("td", {
                            staticClass: "transaction-type"
                        }, [t.minimal ? ["SELL" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label red"
                        }, [t._v("S")]) : t._e(), t._v(" "), "BUY" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label blue"
                        }, [t._v("B")]) : t._e()] : ["SELL" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label red"
                        }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label blue"
                        }, [t._v("BUY")]) : t._e()], t._v(" "), "auction" === e.row.variety && e.row.auction_number ? s("span", [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "text-label",
                            attrs: {
                                title: "Auction #" + e.row.auction_number
                            }
                        }, [t._v("AU")])]) : t._e(), t._v(" "), "TTL" === e.row.validity ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: "Validity " + e.row.validity_ttl + " min(s)"
                            }
                        }, [s("span", {
                            staticClass: "icon icon-clock text-light"
                        }, [s("span", {
                            staticClass: "text-xsmall"
                        }, [t._v(t._s(e.row.validity_ttl) + "m")])])]) : t._e(), t._v(" "), "iceberg" === e.row.variety ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: "Iceberg order"
                            }
                        }, [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.showOrderInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-iceberg text-light text-xsmall"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.row.meta.iceberg.leg) + " / " + t._s(e.row.meta.iceberg.legs) + "\n\t\t\t\t\t\t\t\t")])])]) : t._e()], 2), t._v(" "), s("td", {
                            staticClass: "instrument"
                        }, [s("span", {
                            staticClass: "tradingsymbol"
                        }, [e.row.niceName ? s("span", {
                            domProps: {
                                innerHTML: t._s(e.row.niceName)
                            }
                        }) : s("span", [t._v(t._s(e.row.tradingsymbol))])]), t._v(" "), s("span", {
                            staticClass: "exchange text-xxsmall dim"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.exchange) + "\n\t\t\t\t\t\t")]), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.contextMenu.pending && t.contextMenu.pending === e.row.uid ? s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [e.row.isExit ? s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.showOrderCancelModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-exit"
                        }), t._v(" Exit")])]) : t._e(), t._v(" "), e.row.isExit ? t._e() : s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.showOrderCancelModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-times"
                        }), t._v(" Cancel")])]), t._v(" "), "auction" !== e.row.variety ? s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.modifyOrder(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-edit"
                        }), t._v(" Modify")])]) : t._e(), t._v(" "), s("li", [e.row.isRepeatOrder ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.repeatOrder(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-copy"
                        }), t._v(" Repeat")]) : t._e()]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        s.stopPropagation(),
                                        t.showOrderInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-info"
                        }), t._v(" Info")])]), t._v(" "), t.minimal || "auction" === e.row.variety ? t._e() : s("common-context-menu", {
                            attrs: {
                                tradingsymbol: e.row.tradingsymbol,
                                exchange: e.row.exchange
                            }
                        }), t._v(" "), t.minimal || "auction" === e.row.variety ? t._e() : s("addon-context-menu", {
                            attrs: {
                                "data-type": "instrument",
                                data: {
                                    tradingsymbol: e.row.tradingsymbol,
                                    exchange: e.row.exchange
                                }
                            }
                        })], 1)], 2) : t._e()], 1), t._v(" "), s("su-tags", {
                            key: e.row.order_id,
                            attrs: {
                                tags: e.row.uiTags,
                                tagsMap: t.allTagsMap
                            }
                        })], 1), t._v(" "), s("td", {
                            staticClass: "product"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.product) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "quantity right"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.filled_quantity) + " / " + t._s(e.row.quantity) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "last-price right"
                        }, [e.row.lastPrice ? s("span", [t._v(t._s(e.row.formatted.lastPrice))]) : s("span", {
                            staticClass: "dim"
                        }, [t._v("—")])]), t._v(" "), s("td", {
                            staticClass: "average-price right"
                        }, [e.row.trigger_price && 0 !== e.row.trigger_price ? s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.formatted.price) + " / " + t._s(e.row.formatted.triggerPrice) + " trg.\n\t\t\t\t\t\t")]) : s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.formatted.price) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "order-status right"
                        }, [!t.minimal && e.row && e.row.gtt ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "has-tag",
                            attrs: {
                                title: t.gttTooltip(e.row.gtt)
                            },
                            on: {
                                click: function (e) {
                                    return e.preventDefault(),
                                        e.stopPropagation(),
                                        t.gotoPage("gtt")
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: "/static/images/gtt-icon.svg"
                            }
                        })]) : t._e(), t._v(" "), !t.minimal && t.hasTag(e.row.tags, "sip") ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "has-tag",
                            attrs: {
                                title: "SIP"
                            },
                            on: {
                                click: function (e) {
                                    return e.preventDefault(),
                                        e.stopPropagation(),
                                        t.gotoPage("sip")
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: "/static/images/sip-icon.svg"
                            }
                        })]) : t._e(), t._v(" "), s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }, {
                                name: "show",
                                rawName: "v-show",
                                value: e.row.status_message,
                                expression: "props.row.status_message"
                            }],
                            attrs: {
                                title: e.row.status_message
                            },
                            on: {
                                click: function (s) {
                                    return t.showOrderInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-alert-triangle text-red status-message-info"
                        })]), t._v(" "), s("span", {
                            staticClass: "text-label small order-status-label",
                            on: {
                                click: function (s) {
                                    return s.stopPropagation(),
                                        t.showOrderInfoModal(e.row)
                                }
                            }
                        }, [s("span", [t._v(t._s(e.row.status))])])])]
                    }
                }], null, !1, 3082429755)
            }, [t._v(" "), t.selectedPendingOrders.length > 0 ? s("tr", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("td", {
                attrs: {
                    colspan: "3"
                }
            }, [s("su-button", {
                staticClass: "button-small button-blue",
                nativeOn: {
                    click: function (e) {
                        return e.preventDefault(),
                            e.stopPropagation(),
                            t.cancelSelectedOrders.apply(null, arguments)
                    }
                }
            }, ["cancel" === t.selectedOrdersType ? s("span", [t._v("Cancel")]) : t._e(), t._v(" "), "exit" === t.selectedOrdersType ? s("span", [t._v("Exit")]) : t._e(), t._v(" "), "both" === t.selectedOrdersType ? s("span", [t._v("Exit/Cancel")]) : t._e(), t._v(" "), s("span", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(this.selectedPendingOrders.length) + " order"), this.selectedPendingOrders.length > 1 ? s("span", [t._v("s")]) : t._e()])])], 1), t._v(" "), s("td", {
                attrs: {
                    colspan: "6"
                }
            })]) : t._e()])], 1)]) : t._e(), t._v(" "), !t.minimal && t.ordersConstraints.isCompletedOrders ? s("section", {
                staticClass: "completed-orders-wrap table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [t._v("\n\t\t\t\tExecuted orders\n\n\t\t\t\t"), t._v(" "), s("span", [t._v("(" + t._s(t.completedOrders.length) + ")")]), t._v(" "), t.ordersConstraints.showErrorIcon ? s("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip"
                }],
                staticClass: "text-small error-fetch",
                attrs: {
                    title: t.ordersError && t.ordersError.message
                }
            }, [s("span", {
                staticClass: "icon icon-alert-triangle"
            })]) : t._e(), t._v(" "), t.ordersConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), !t.ordersConstraints.isError && t.completedOrders && 0 === t.completedOrders.length ? s("div", {
                staticClass: "text-small empty"
            }, [t._v("\n\t\t\tYou don't have any executed orders yet\n\t\t")]) : t._e(), t._v(" "), t.isMobile ? s("div", {
                staticClass: "completed-orders cards"
            }, t._l(t.formattedCompletedOrders, (function (e, n) {
                return s("div", {
                    key: n,
                    staticClass: "card",
                    on: {
                        click: function (s) {
                            return t.showContextMenu(e, "completed")
                        }
                    }
                }, [t.contextMenu.completed === e.uid ? s("mobile-context-menu", {
                    on: {
                        close: function (s) {
                            return t.hideContextMenu(e, "completed")
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, ["auction" !== e.variety ? s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.placeOrder(e, "BUY")
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-plus"
                }), t._v(" Buy")])]) : t._e(), t._v(" "), "auction" !== e.variety ? s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.placeOrder(e, "SELL")
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-minus"
                }), t._v(" Sell")])]) : t._e(), t._v(" "), s("li", [e.isRepeatOrder ? s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.repeatOrder(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-copy"
                }), t._v(" Repeat")]) : t._e()]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.showOrderInfoModal(e)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-info"
                }), t._v(" Info")])]), t._v(" "), t.minimal || "auction" === e.variety ? t._e() : s("common-context-menu", {
                    attrs: {
                        tradingsymbol: e.tradingsymbol,
                        exchange: e.exchange
                    }
                }), t._v(" "), t.minimal || "auction" === e.variety ? t._e() : s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: {
                            tradingsymbol: e.tradingsymbol,
                            exchange: e.exchange
                        }
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex4"
                }, ["SELL" === e.transaction_type ? s("span", {
                    staticClass: "text-label text-label-outline red small"
                }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.transaction_type ? s("span", {
                    staticClass: "text-label text-label-outline blue small"
                }, [t._v("BUY")]) : t._e(), t._v(" "), s("span", {
                    staticClass: "text-label small order-status-label",
                    class: {
                        red: "REJECTED" == e.status,
                        green: "COMPLETE" == e.status
                    },
                    on: {
                        click: function (s) {
                            return t.showOrderInfoModal(e)
                        }
                    }
                }, ["CANCELLED" === e.status && 0 === e.filled_quantity ? s("span", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.status) + "\n\t\t\t\t\t\t\t")]) : "CANCELLED" === e.status ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    attrs: {
                        title: e.filled_quantity + " qty. partially executed"
                    }
                }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.status) + " - PARTIAL\n\t\t\t\t\t\t\t")]) : s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: "large",
                        expression: "'large'"
                    }],
                    attrs: {
                        title: e.status_message
                    }
                }, [t._v(t._s(e.status))])]), t._v(" "), e && e.gtt ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "has-tag",
                    attrs: {
                        title: t.gttTooltip(e.gtt)
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(),
                                e.stopPropagation(),
                                t.gotoPage("gtt")
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: "/static/images/gtt-icon.svg"
                    }
                })]) : t._e(), t._v(" "), t.hasTag(e.tags, "sip") ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "has-tag",
                    attrs: {
                        title: "SIP"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(),
                                e.stopPropagation(),
                                t.gotoPage("sip")
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: "/static/images/sip-icon.svg"
                    }
                })]) : t._e()]), t._v(" "), s("div", {
                    staticClass: "flex4 text-right"
                }, [s("span", {
                    staticClass: "dim"
                }, [t._v(t._s(e.order_timestamp.slice(11)))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex9"
                }, [e.niceName ? s("span", {
                    domProps: {
                        innerHTML: t._s(e.niceName)
                    }
                }) : s("span", [t._v(t._s(e.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(t._s(e.exchange) + " / "), s("span", {
                    staticClass: "product"
                }, [t._v(t._s(e.product))])]), t._v(" "), s("su-tags", {
                    key: e.order_id,
                    attrs: {
                        tags: e.uiTags,
                        tagsMap: t.allTagsMap
                    }
                })], 1), t._v(" "), s("div", {
                    staticClass: "flex3"
                }, [e.average_price || e.price ? s("span", [s("span", {
                    staticClass: "dim"
                }, [t._v("₹")]), t._v(t._s(e.average_price || e.price))]) : s("span", [t._v("–")])]), t._v(" "), s("div", {
                    staticClass: "flex3 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("Qty.")]), t._v(" "), s("span", [t._v(t._s(e.filled_quantity) + " / " + t._s(e.quantity))])])])], 1)
            }
            )), 0) : t._e(), t._v(" "), t.isMobile ? t._e() : s("div", {
                staticClass: "completed-orders"
            }, [s("su-table", {
                key: "completed-orders",
                staticClass: "fold-header sticky",
                attrs: {
                    data: t.formattedCompletedOrders,
                    headers: t.completedOrderTableHeaders,
                    toolbar: t.formattedCompletedOrders && 0 !== t.formattedCompletedOrders.length,
                    "search-place-holder": "eg: sell, nifty, nrml etc.",
                    "download-csv": "orders.csv",
                    limit: 100,
                    sort: "",
                    search: "",
                    "row-events": ""
                },
                on: {
                    rowEnter: function (e) {
                        return t.showContextMenu(e.row, "completed")
                    },
                    rowLeave: function (e) {
                        return t.hideContextMenu(e.row, "completed")
                    }
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (e) {
                        return [s("td", {
                            staticClass: "order-timestamp"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.order_timestamp.slice(11)) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "transaction-type"
                        }, ["SELL" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label red small"
                        }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label blue small"
                        }, [t._v("BUY")]) : t._e(), t._v(" "), "TTL" === e.row.validity && "CANCELLED" === e.row.status ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: "Cancelled after " + e.row.validity_ttl + " min(s)"
                            }
                        }, [s("span", {
                            staticClass: "icon icon-clock text-light"
                        }, [s("span", {
                            staticClass: "text-xsmall"
                        }, [t._v(t._s(e.row.validity_ttl) + "m")])])]) : t._e(), t._v(" "), e.row.auction_number ? s("span", [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "text-label",
                            attrs: {
                                title: "Auction #" + e.row.auction_number
                            }
                        }, [t._v("AU")])]) : t._e(), t._v(" "), "iceberg" === e.row.variety ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: "Iceberg order"
                            }
                        }, [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.showOrderInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-iceberg text-light text-xsmall"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(e.row.meta.iceberg.leg) + " / " + t._s(e.row.meta.iceberg.legs) + "\n\t\t\t\t\t\t\t\t")])])]) : t._e()]), t._v(" "), s("td", {
                            staticClass: "instrument"
                        }, [s("span", {
                            staticClass: "tradingsymbol"
                        }, [e.row.niceName ? s("span", {
                            domProps: {
                                innerHTML: t._s(e.row.niceName)
                            }
                        }) : s("span", [t._v(t._s(e.row.tradingsymbol))])]), t._v(" "), s("span", {
                            staticClass: "exchange text-xxsmall dim"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.exchange) + "\n\t\t\t\t\t\t")]), t._v(" "), s("transition", {
                            attrs: {
                                name: "fade"
                            }
                        }, [t.contextMenu.completed && t.contextMenu.completed === e.row.uid ? s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, ["auction" !== e.row.variety ? s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.placeOrder(e.row, "BUY")
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-plus"
                        }), t._v(" Buy")])]) : t._e(), t._v(" "), "auction" !== e.row.variety ? s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.placeOrder(e.row, "SELL")
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-minus"
                        }), t._v(" Sell")])]) : t._e(), t._v(" "), s("li", [e.row.isRepeatOrder ? s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.repeatOrder(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-copy"
                        }), t._v(" Repeat")]) : t._e()]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.showOrderInfoModal(e.row)
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-info"
                        }), t._v(" Info")])]), t._v(" "), t.minimal || "auction" === e.row.variety ? t._e() : s("common-context-menu", {
                            attrs: {
                                tradingsymbol: e.row.tradingsymbol,
                                exchange: e.row.exchange
                            }
                        }), t._v(" "), t.minimal || "auction" === e.row.variety ? t._e() : s("addon-context-menu", {
                            attrs: {
                                "data-type": "instrument",
                                data: {
                                    tradingsymbol: e.row.tradingsymbol,
                                    exchange: e.row.exchange
                                }
                            }
                        })], 1)], 2) : t._e()], 1), t._v(" "), s("su-tags", {
                            key: e.row.order_id,
                            attrs: {
                                tags: e.row.uiTags,
                                tagsMap: t.allTagsMap
                            }
                        })], 1), t._v(" "), s("td", {
                            staticClass: "product"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.product) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "quantity right"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.filled_quantity) + " / " + t._s(e.row.quantity) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "average-price right"
                        }, [e.row.trigger_price && 0 !== e.row.trigger_price ? s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.formatted.price) + " / " + t._s(e.row.formatted.triggerPrice) + " trg.\n\t\t\t\t\t\t")]) : s("span", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.formatted.price) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("td", {
                            staticClass: "order-status right"
                        }, [!t.minimal && e.row && e.row.gtt ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "has-tag",
                            attrs: {
                                title: t.gttTooltip(e.row.gtt)
                            },
                            on: {
                                click: function (e) {
                                    return e.preventDefault(),
                                        e.stopPropagation(),
                                        t.gotoPage("gtt")
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: "/static/images/gtt-icon.svg"
                            }
                        })]) : t._e(), t._v(" "), !t.minimal && t.hasTag(e.row.tags, "sip") ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "has-tag",
                            attrs: {
                                title: "SIP"
                            },
                            on: {
                                click: function (e) {
                                    return e.preventDefault(),
                                        e.stopPropagation(),
                                        t.gotoPage("sip")
                                }
                            }
                        }, [s("img", {
                            attrs: {
                                src: "/static/images/sip-icon.svg"
                            }
                        })]) : t._e(), t._v(" "), s("span", {
                            staticClass: "text-label small order-status-label",
                            class: {
                                red: "REJECTED" == e.row.status,
                                green: "COMPLETE" == e.row.status
                            },
                            on: {
                                click: function (s) {
                                    return t.showOrderInfoModal(e.row)
                                }
                            }
                        }, ["CANCELLED" === e.row.status && 0 !== e.row.filled_quantity ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            attrs: {
                                title: e.row.filled_quantity + " qty. partially executed"
                            }
                        }, [t._v("\n\t\t\t\t\t\t\t\t" + t._s(e.row.status) + " - PARTIAL\n\t\t\t\t\t\t\t")]) : e.row.status_message ? s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value: "large",
                                expression: "'large'"
                            }],
                            attrs: {
                                title: e.row.status_message
                            }
                        }, [t._v(t._s(e.row.status))]) : s("span", [t._v(t._s(e.row.status))])])])]
                    }
                }], null, !1, 3309933229)
            }, [s("span", {
                staticClass: "toolbar-before",
                attrs: {
                    slot: "toolbar-before"
                },
                slot: "toolbar-before"
            }, [s("a", {
                staticClass: "item",
                attrs: {
                    href: "#",
                    target: "_blank"
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.onShowContractNote.apply(null, arguments)
                    }
                }
            }, [s("span", {
                staticClass: "icon icon-file-text"
            }), t._v(" "), s("span", [t._v("Contract note")])]), t._v(" "), s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/reports/tradebook?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    height: "9px"
                },
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            })]), t._v(" "), s("span", [t._v("View history")])])])])], 1)]) : t._e(), t._v(" "), !t.minimal && t.ordersConstraints.isData ? s("section", {
                staticClass: "trades-wrap table-wrapper"
            }, [s("header", {
                staticClass: "row data-table-header"
            }, [s("h3", {
                staticClass: "page-title small"
            }, [s("a", {
                staticClass: "title initial",
                attrs: {
                    href: ""
                },
                on: {
                    click: function (e) {
                        return e.preventDefault(),
                            t.toggleShowTrades.apply(null, arguments)
                    }
                }
            }, [t._v("\n\t\t\t\t\tTrades\n\t\t\t\t\t"), t.showTrades ? s("span", {
                staticClass: "icon icon-chevron-up"
            }) : s("span", {
                staticClass: "icon icon-chevron-down"
            })]), t._v(" "), t.showTrades && t.tradesConstraints.isData ? s("span", [t._v("(" + t._s(t.trades.length) + ")")]) : t._e(), t._v(" "), t.tradesConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)]), t._v(" "), t.showTrades && t.tradesConstraints.showEmptyState ? s("empty-state", {
                attrs: {
                    image: t.getStatic(t.appendThemeName("images/illustrations/orderbook.svg")),
                    showOmnisearch: "",
                    omnisearchActionTitle: "Get started"
                }
            }, [s("div", {
                attrs: {
                    slot: "message"
                },
                slot: "message"
            }, [s("p", [t._v("You don't have any trades today")])]), t._v(" "), s("div", {
                staticClass: "footer",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("div", [s("a", {
                staticClass: "inline-image-text",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/reports/tradebook?src=kiteweb"
                }
            }, [s("img", {
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            }), t._v("View history\n\t\t\t\t\t")])]), t._v(" "), s("div", [t.tradesConstraints.isFetching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1)])]) : t._e(), t._v(" "), t.showTrades && t.tradesConstraints.showErrorState ? s("error-state", {
                attrs: {
                    title: "Trades couldn't be loaded.",
                    error: t.tradesError
                }
            }) : t._e(), t._v(" "), s("transition", {
                attrs: {
                    name: "fade"
                }
            }, [t.showTrades && t.tradesConstraints.isData && t.isMobile ? s("div", {
                staticClass: "trades cards"
            }, t._l(t.formattedTrades, (function (e, n) {
                return s("div", {
                    key: n,
                    staticClass: "card",
                    on: {
                        click: function (s) {
                            return t.showContextMenu(e, "trades")
                        }
                    }
                }, [t.contextMenu.trades === e.uid ? s("mobile-context-menu", {
                    on: {
                        close: function (s) {
                            return t.hideContextMenu(e, "trades")
                        }
                    }
                }, [s("template", {
                    slot: "menu"
                }, [s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.placeOrder(e, "BUY")
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-plus"
                }), t._v(" Buy")])]), t._v(" "), s("li", [s("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.placeOrder(e, "SELL")
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-minus"
                }), t._v(" Sell")])]), t._v(" "), t.minimal ? t._e() : s("common-context-menu", {
                    attrs: {
                        tradingsymbol: e.tradingsymbol,
                        exchange: e.exchange
                    }
                }), t._v(" "), t.minimal ? t._e() : s("addon-context-menu", {
                    attrs: {
                        "data-type": "instrument",
                        data: {
                            tradingsymbol: e.tradingsymbol,
                            exchange: e.exchange
                        }
                    }
                })], 1)], 2) : t._e(), t._v(" "), s("div", {
                    staticClass: "top flex"
                }, [s("div", {
                    staticClass: "flex4"
                }, ["SELL" === e.transaction_type ? s("span", {
                    staticClass: "text-label text-label-outline red small"
                }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.transaction_type ? s("span", {
                    staticClass: "text-label text-label-outline blue small"
                }, [t._v("BUY")]) : t._e(), t._v(" "), s("span", {
                    staticClass: "text-label small aqua product-label",
                    class: {
                        indigo: "NRML" == e.product,
                        amber: "MIS" == e.product,
                        rose: "CNC" == e.product,
                        teal: "CO" == e.product,
                        aqua: "BO" == e.product
                    }
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.product) + "\n\t\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "flex4 text-right"
                }, [s("span", {
                    staticClass: "dim"
                }, [t._v(t._s(e.fill_timestamp.slice(11)))])])]), t._v(" "), s("div", {
                    staticClass: "middle flex"
                }, [s("div", {
                    staticClass: "flex9"
                }, [e.niceName ? s("span", {
                    domProps: {
                        innerHTML: t._s(e.niceName)
                    }
                }) : s("span", [t._v(t._s(e.tradingsymbol))]), t._v(" "), s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v(t._s(e.exchange) + " / "), s("span", {
                    staticClass: "product"
                }, [t._v(t._s(e.product))])])]), t._v(" "), s("div", {
                    staticClass: "flex3"
                }, [e.average_price ? s("span", [s("span", {
                    staticClass: "dim"
                }, [t._v("₹")]), t._v(t._s(e.average_price))]) : s("span", [t._v("–")])]), t._v(" "), s("div", {
                    staticClass: "flex3 text-right"
                }, [s("span", {
                    staticClass: "dim text-xxsmall"
                }, [t._v("Qty.")]), t._v(" "), s("span", [t._v(t._s(e.quantity))])])])], 1)
            }
            )), 0) : t._e(), t._v(" "), t.showTrades && t.tradesConstraints.isData && !t.isMobile ? s("div", {
                staticClass: "trades"
            }, [s("su-table", {
                staticClass: "fold-header sticky",
                attrs: {
                    data: t.formattedTrades,
                    headers: t.tradesTableHeaders,
                    uid: "trade_id",
                    searchPlaceHolder: "eg: sell, nifty, nrml etc.",
                    "download-csv": "trades.csv",
                    toolbar: t.trades && 0 !== t.trades.length,
                    sort: "",
                    search: "",
                    limit: 50,
                    "row-events": ""
                },
                on: {
                    rowEnter: function (e) {
                        return t.showContextMenu(e.row, "trades", "trade_id")
                    },
                    rowLeave: function (e) {
                        return t.hideContextMenu(e.row, "trades")
                    }
                },
                scopedSlots: t._u([{
                    key: "default",
                    fn: function (e) {
                        return [s("td", {
                            staticClass: "trade-id"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.trade_id) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "fill-timestamp"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.fill_timestamp.slice(11)) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "transaction-type"
                        }, ["SELL" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label red small"
                        }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.row.transaction_type ? s("span", {
                            staticClass: "text-label blue small"
                        }, [t._v("BUY")]) : t._e()]), t._v(" "), s("td", {
                            staticClass: "instrument"
                        }, [s("span", {
                            staticClass: "tradingsymbol"
                        }, [e.row.niceName ? s("span", {
                            domProps: {
                                innerHTML: t._s(e.row.niceName)
                            }
                        }) : s("span", [t._v(t._s(e.row.tradingsymbol))])]), t._v(" "), s("span", {
                            staticClass: "exchange text-xxsmall dim"
                        }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.exchange) + "\n\t\t\t\t\t\t")]), t._v(" "), t.contextMenu.trades && t.contextMenu.trades === e.row.trade_id ? s("context-menu", {
                            staticClass: "table"
                        }, [s("span", {
                            directives: [{
                                name: "tooltip",
                                rawName: "v-tooltip"
                            }],
                            staticClass: "context-menu-button",
                            attrs: {
                                slot: "button",
                                title: "Options"
                            },
                            slot: "button"
                        }, [s("span", {
                            staticClass: "icon icon-ellipsis"
                        })]), t._v(" "), s("template", {
                            slot: "menu"
                        }, [s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.placeOrder(e.row, "BUY")
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-plus"
                        }), t._v(" Buy")])]), t._v(" "), s("li", [s("a", {
                            attrs: {
                                href: "#"
                            },
                            on: {
                                click: function (s) {
                                    return s.preventDefault(),
                                        t.placeOrder(e.row, "SELL")
                                }
                            }
                        }, [s("span", {
                            staticClass: "icon icon-minus"
                        }), t._v(" Sell")])]), t._v(" "), t.minimal ? t._e() : s("common-context-menu", {
                            attrs: {
                                tradingsymbol: e.row.tradingsymbol,
                                exchange: e.row.exchange
                            }
                        }), t._v(" "), t.minimal ? t._e() : s("addon-context-menu", {
                            attrs: {
                                "data-type": "instrument",
                                data: {
                                    tradingsymbol: e.row.tradingsymbol,
                                    exchange: e.row.exchange
                                }
                            }
                        })], 1)], 2) : t._e()], 1), t._v(" "), s("td", {
                            staticClass: "product"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.product) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "quantity right"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t\t")]), t._v(" "), s("td", {
                            staticClass: "average-price right"
                        }, [t._v("\n\t\t\t\t\t\t" + t._s(e.row.average_price) + "\n\t\t\t\t\t")])]
                    }
                }], null, !1, 778183803)
            }, [s("span", {
                staticClass: "toolbar-before",
                attrs: {
                    slot: "toolbar-before"
                },
                slot: "toolbar-before"
            }, [s("a", {
                staticClass: "item",
                attrs: {
                    target: "_blank",
                    href: t.consoleURL + "/reports/tradebook?src=kiteweb"
                }
            }, [s("span", {
                staticClass: "icon"
            }, [s("img", {
                staticStyle: {
                    height: "9px"
                },
                attrs: {
                    src: t.getStatic("/images/console.svg")
                }
            })]), t._v(" "), s("span", [t._v("View history")])])])])], 1) : t._e()])], 1) : t._e(), t._v(" "), s("order-info-window"), t._v(" "), s("contract-note")], 1)
        }
            , a = []
            , i = s("2f62")
            , r = s("9c9e")
            , o = s("d9d2")
            , c = s("5fb0")
            , l = s("f1f7")
            , u = s("0a3b")
            , d = s("0e50")
            , h = s("39e3")
            , p = s("5a9e")
            , f = s("40f2")
            , v = function () {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return t.isShown ? s("modal", {
                    directives: [{
                        name: "on-escape",
                        rawName: "v-on-escape",
                        value: t.close,
                        expression: "close"
                    }],
                    class: {
                        "order-info-modal": t.order && t.showOrder,
                        "trades-modal": t.showOrderTrades,
                        "history-modal": t.showOrderHistory
                    },
                    on: {
                        close: t.close
                    }
                }, [t.order && t.showOrder ? [s("div", {
                    staticClass: "row order-info-header",
                    class: [t.order.transaction_type.toLowerCase()],
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [s("div", {
                    staticClass: "eight columns tradingsymbol-wrapper"
                }, [s("span", {
                    staticClass: "transaction-type text-label text-label-outline blue",
                    class: {
                        red: "SELL" == t.order.transaction_type,
                        blue: "BUY" == t.order.transaction_type
                    }
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.transaction_type) + "\n\t\t\t\t")]), t._v(" "), s("h3", {
                    staticClass: "tradingsymbol"
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.tradingsymbol) + "\n\t\t\t\t\t"), s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v(t._s(t.order.exchange))]), t._v(" "), t.order.auction_number ? s("span", {
                    staticClass: "text-label orange tag-auction"
                }, [t._v("Auction #" + t._s(t.order.auction_number))]) : t._e()])]), t._v(" "), s("div", {
                    staticClass: "status four columns"
                }, [s("span", {
                    staticClass: "text-label text-label-outline small order-status-label",
                    class: {
                        red: "REJECTED" == t.order.status,
                        green: "COMPLETE" == t.order.status
                    }
                }, ["CANCELLED" === t.order.status && 0 !== t.order.filled_quantity ? s("span", [t._v("*")]) : t._e(), t._v(t._s(t.order.status) + "\n\t\t\t\t")])])]), t._v(" "), s("div", {
                    staticClass: "order-info-body",
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "four columns left mobile-modal"
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Quantity")]), t._v(" "), "CANCELLED" === t.order.status && 0 !== t.order.filled_quantity ? s("span", {
                    staticClass: "text-xxsmall text-light"
                }, [t._v("*Partially filled")]) : t._e()]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "price"
                }, [t._v(t._s(t.order.filled_quantity) + " / " + t._s(t.order.quantity))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Price")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "price"
                }, [t._v(t._s(t.order.price))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Avg. price")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "price"
                }, [t._v(t._s(t.order.average_price))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Trigger price")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "trigger-price"
                }, [t._v(t._s(t.order.trigger_price))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Order type")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "order-type"
                }, [t._v(t._s(t.order.order_type))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Product")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "product"
                }, [t._v(t._s(t.order.product))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Validity")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, ["TTL" === t.order.validity ? s("span", [t._v("\n\t\t\t\t\t\t\t\t" + t._s(t.order.validity_ttl) + " min(s)\n\t\t\t\t\t\t\t\t"), s("span", {
                    staticClass: "icon icon-clock text-light"
                })]) : s("span", [t._v(t._s(t.order.validity))])])]), t._v(" "), "iceberg" === t.order.variety ? s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Iceberg")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.order.meta.iceberg.leg) + " / " + t._s(t.order.meta.iceberg.legs) + "\n\t\t\t\t\t\t\t"), s("span", {
                    staticClass: "icon icon-iceberg text-light"
                }), t._v(" "), s("br"), t._v("\n\t\t\t\t\t\t\t" + t._s(t.order.meta.iceberg.total_quantity - t.order.meta.iceberg.remaining_quantity) + " / " + t._s(t.order.meta.iceberg.total_quantity) + " Qty.\n\t\t\t\t\t\t")])]) : t._e(), t._v(" "), t.order.terminal_id ? s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Terminal ID")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.order.terminal_id) + "\n\t\t\t\t\t\t")])]) : t._e()]), t._v(" "), t.isMobile ? t._e() : s("div", {
                    staticClass: "two columns border"
                }, [s("div")]), t._v(" "), s("div", {
                    staticClass: "six columns right mobile-modal"
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Order ID")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "order-id"
                }, [t._v(t._s(t.order.order_id))])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Exchange order ID")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.order.exchange_order_id ? s("div", {
                    staticClass: "exchange-order-id"
                }, [t._v(t._s(t.order.exchange_order_id))]) : s("div", {
                    staticClass: "exchange-order-id"
                }, [t._v("-")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Time")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.order.order_timestamp ? s("div", {
                    staticClass: "order-timestamp"
                }, [t._v(t._s(t.order.order_timestamp))]) : s("div", {
                    staticClass: "order-timestamp"
                }, [t._v("-")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Exchange time")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.order.exchange_timestamp ? s("div", {
                    staticClass: "exchange-timestamp"
                }, [t._v(t._s(t.order.exchange_timestamp))]) : s("div", {
                    staticClass: "exchange-timestamp"
                }, [t._v("-")])])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Placed by")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [s("div", {
                    staticClass: "placed-by"
                }, [t._v(t._s(t.order.placed_by))])])]), t._v(" "), t.order.gtt ? s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", {
                    staticClass: "gtt-label",
                    on: {
                        click: function (e) {
                            return t.gotoGTT()
                        }
                    }
                }, [s("img", {
                    attrs: {
                        src: "/static/images/gtt-icon.svg"
                    }
                }), t._v(" GTT")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t.order.gtt.stoploss ? s("div", {
                    staticClass: "gtt-stoploss"
                }, [t._v("Stoploss: " + t._s(t.order.gtt.stoploss) + "%")]) : t._e(), t._v(" "), t.order.gtt.target ? s("div", {
                    staticClass: "gtt-target"
                }, [t._v("Target: " + t._s(t.order.gtt.target) + "%")]) : t._e()])]) : t._e(), t._v(" "), t.order.status_message ? s("div", {
                    staticClass: "row status-message text-red"
                }, [s("p", {
                    domProps: {
                        innerHTML: t._s(t.markdownToHTML(t.order.status_message))
                    }
                })]) : t._e()])])]), t._v(" "), s("div", {
                    staticClass: "actions",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, ["COMPLETE" === t.order.status ? s("su-button", {
                    staticClass: "button button-blue button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.fetchOrderTrades.apply(null, arguments)
                        }
                    }
                }, [t._v("View trades")]) : t._e(), t._v(" "), s("su-button", {
                    staticClass: "button button-orange button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.fetchOrders.apply(null, arguments)
                        }
                    }
                }, [t._v("View history")]), t._v(" "), s("su-button", {
                    staticClass: "button button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.close.apply(null, arguments)
                        }
                    }
                }, [t._v("Close")])], 1)] : t._e(), t._v(" "), t.showOrderTrades ? [s("div", {
                    staticClass: "row order-info-header",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [s("div", {
                    staticClass: "eight columns tradingsymbol-wrapper"
                }, [s("span", {
                    staticClass: "transaction-type text-label text-label-outline blue",
                    class: {
                        red: "SELL" == t.order.status,
                        blue: "BUY" == t.order.status
                    }
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.transaction_type) + "\n\t\t\t\t")]), t._v(" "), s("h3", {
                    staticClass: "tradingsymbol"
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.tradingsymbol) + " "), s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v(t._s(t.order.exchange))])])]), t._v(" "), s("div", {
                    staticClass: "status four columns"
                }, [s("span", {
                    staticClass: "text-label text-label-outline small order-status-label",
                    class: {
                        red: "REJECTED" == t.order.status,
                        green: "COMPLETE" == t.order.status
                    }
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.status) + "\n\t\t\t\t")])])]), t._v(" "), s("div", {
                    staticClass: "body",
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [t.orderTrades && t.orderTrades.length > 0 ? s("div", {
                    staticClass: "trades"
                }, [s("su-table", {
                    attrs: {
                        data: t.orderTrades,
                        toolbar: !1,
                        headers: t.tableHeaders.viewTrades
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function (e) {
                            return [s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.trade_id) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.fill_timestamp.slice(11)) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.exchange_timestamp.slice(11)) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.exchange_order_id) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.product) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.average_price) + "\n\t\t\t\t\t\t")])]
                        }
                    }], null, !1, 1866334603)
                })], 1) : t._e()]), t._v(" "), s("div", {
                    staticClass: "actions",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [s("su-button", {
                    staticClass: "button button-blue button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.showOnlyOrder.apply(null, arguments)
                        }
                    }
                }, [t._v("Back")]), t._v(" "), s("su-button", {
                    staticClass: "button button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.close.apply(null, arguments)
                        }
                    }
                }, [t._v("Close")])], 1)] : t._e(), t._v(" "), t.showOrderHistory ? [s("div", {
                    staticClass: "row order-history-header",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [s("div", {
                    staticClass: "four columns tradingsymbol-wrapper"
                }, [s("span", {
                    staticClass: "transaction-type text-label text-label-outline blue",
                    class: {
                        red: "SELL" == t.order.status,
                        blue: "BUY" == t.order.status
                    }
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.transaction_type) + "\n\t\t\t\t")]), t._v(" "), s("h3", {
                    staticClass: "tradingsymbol"
                }, [t._v("\n\t\t\t\t\t" + t._s(t.order.tradingsymbol) + " "), s("span", {
                    staticClass: "text-xsmall dim"
                }, [t._v(t._s(t.order.exchange))])])]), t._v(" "), s("div", {
                    staticClass: "status eight columns tradingsymbol-wrapper"
                }, [s("h3", {
                    staticClass: "tradingsymbol"
                }, [s("span", [t._v("#" + t._s(t.order.order_id))]), t._v(" "), t.isApiFetching ? s("su-loader", {
                    staticClass: "dim",
                    attrs: {
                        size: 8
                    }
                }) : t._e()], 1)])]), t._v(" "), s("div", {
                    staticClass: "body",
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [t.orderHistory && t.orderHistory.length > 0 && t.isMobile ? s("div", {
                    staticClass: "history cards"
                }, t._l(t.orderHistory, (function (e, n) {
                    return s("div", {
                        key: n,
                        staticClass: "card"
                    }, [s("div", {
                        staticClass: "top flex"
                    }, [s("div", {
                        staticClass: "flex6"
                    }, [e.price ? s("span", [s("span", {
                        staticClass: "dim"
                    }, [t._v("₹")]), t._v(t._s(e.price))]) : t._e(), t._v(" "), e.price ? t._e() : s("span", [t._v("–")])]), t._v(" "), s("div", {
                        staticClass: "flex4 text-right"
                    }, [s("span", {
                        staticClass: "dim"
                    }, [t._v(t._s(e.order_timestamp.slice(11)))])])]), t._v(" "), s("div", {
                        staticClass: "middle flex"
                    }, [s("div", {
                        staticClass: "flex9"
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(e.status) + "\n\t\t\t\t\t\t")]), t._v(" "), s("div", {
                        staticClass: "flex3"
                    }, [e.average_price ? s("span", [s("span", {
                        staticClass: "dim"
                    }, [t._v("₹")]), t._v(t._s(e.average_price))]) : t._e(), t._v(" "), e.average_price ? t._e() : s("span", [t._v("–")])]), t._v(" "), s("div", {
                        staticClass: "flex3 text-right"
                    }, [s("span", [t._v(t._s(e.filled_quantity) + " / " + t._s(e.quantity))])])])])
                }
                )), 0) : t._e(), t._v(" "), t.orderHistory && t.orderHistory.length > 0 && !t.isMobile ? s("div", {
                    staticClass: "history"
                }, [s("su-table", {
                    attrs: {
                        data: t.orderHistory,
                        toolbar: !1,
                        headers: t.tableHeaders.viewHistory
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function (e) {
                            return [s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.order_timestamp.slice(11)) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.status) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [e.row.exchange_timestamp ? s("span", [t._v(t._s(e.row.exchange_timestamp.slice(11)))]) : s("span", [t._v("—")])]), t._v(" "), s("td", [e.row.exchange_update_timestamp ? s("span", [t._v(t._s(e.row.exchange_update_timestamp.slice(11)))]) : s("span", [t._v("—")])]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.quantity) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.filled_quantity) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.average_price) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", [t._v("\n\t\t\t\t\t\t\t" + t._s(e.row.price) + "\n\t\t\t\t\t\t")])]
                        }
                    }], null, !1, 2828586637)
                })], 1) : t._e()]), t._v(" "), s("div", {
                    staticClass: "actions",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [s("su-button", {
                    staticClass: "button button-blue button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.showOnlyOrder.apply(null, arguments)
                        }
                    }
                }, [t._v("Back")]), t._v(" "), s("su-button", {
                    staticClass: "button button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.close.apply(null, arguments)
                        }
                    }
                }, [t._v("Close")])], 1)] : t._e()], 2) : t._e()
            }
            , m = []
            , _ = s("3da7")
            , g = s("025e")
            , b = {
                data() {
                    return {
                        isShown: !1,
                        order: null,
                        orderHistory: null,
                        orderTrades: null,
                        showOrder: !0,
                        showOrderHistory: !1,
                        showOrderTrades: !1,
                        currentFetchStatus: c["b"].initial
                    }
                },
                created() {
                    this.$events.on(o["b"].EVENTS.ORDER_INFO, this.init),
                        this.tableHeaders = {
                            viewTrades: [{
                                label: "Trade ID",
                                field: "trade_id",
                                sort: !1
                            }, {
                                label: "Time",
                                field: "order_timestamp",
                                sort: !1
                            }, {
                                label: "Exch. time",
                                field: "exchange_timestamp",
                                sort: !1
                            }, {
                                label: "Exch. id",
                                field: "exchange_order_id",
                                sort: !1
                            }, {
                                label: "Product",
                                field: "product",
                                sort: !1
                            }, {
                                label: "Qty.",
                                field: "quantity",
                                sort: !1
                            }, {
                                label: "Avg. price",
                                field: "average_price",
                                sort: !1
                            }],
                            viewHistory: [{
                                label: "Time",
                                field: "order_timestamp",
                                sort: !1
                            }, {
                                label: "Status",
                                field: "status",
                                sort: !1
                            }, {
                                label: "Exch. time",
                                field: "exchange_timestamp",
                                sort: !1
                            }, {
                                label: "Exch. update",
                                field: "exchange_update_timestamp",
                                sort: !1
                            }, {
                                label: "Qty.",
                                field: "quantity",
                                sort: !1
                            }, {
                                label: "Filled qty.",
                                field: "filled_quantity",
                                sort: !1
                            }, {
                                label: "Avg. price",
                                field: "average_price",
                                sort: !1
                            }, {
                                label: "Price",
                                field: "price",
                                sort: !1
                            }]
                        }
                },
                computed: {
                    ...Object(i["d"])(["isMobile"]),
                    isApiFetching() {
                        if (this.currentFetchStatus === c["b"].fetching)
                            return !0
                    },
                    isApiFetchFailed() {
                        if (this.currentFetchStatus === c["b"].error)
                            return !0
                    }
                },
                methods: {
                    show() {
                        this.isShown = !0
                    },
                    close() {
                        this.isShown = !1
                    },
                    init(t) {
                        this.order = t,
                            this.showOnlyOrder(),
                            this.show()
                    },
                    showOnlyOrder() {
                        this.showOrderHistory = !1,
                            this.showOrderTrades = !1,
                            this.showOrder = !0
                    },
                    fetchOrderTrades(t) {
                        this.currentFetchStatus !== c["b"].fetching && (this.showOrder = !1,
                            this.showOrderHistory = !1,
                            this.showOrderTrades = !0,
                            this.currentFetchStatus = c["b"].fetching,
                            _["a"].getOrderTrades(this.order.order_id).then(t => {
                                this.orderTrades = t.data.data,
                                    this.currentFetchStatus = c["b"].success
                            }
                            ).catch(() => {
                                this.currentFetchStatus = c["b"].error
                            }
                            ))
                    },
                    fetchOrders(t) {
                        this.currentFetchStatus !== c["b"].fetching && (this.showOrder = !1,
                            this.showOrderTrades = !1,
                            this.showOrderHistory = !0,
                            this.currentFetchStatus = c["b"].fetching,
                            _["a"].getOrders(this.order.order_id).then(t => {
                                this.orderHistory = t.data.data.reverse(),
                                    this.currentFetchStatus = c["b"].success
                            }
                            ).catch(() => {
                                this.currentFetchStatus = c["b"].error
                            }
                            ))
                    },
                    gotoGTT() {
                        this.close(),
                            this.$router.push({
                                name: "gtt"
                            })
                    },
                    markdownToHTML(t) {
                        return Object(g["k"])(t)
                    }
                }
            }
            , y = b
            , C = s("0c7c")
            , w = Object(C["a"])(y, v, m, !1, null, null, null)
            , x = w.exports
            , T = function () {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return t.isVisible ? s("modal", {
                    directives: [{
                        name: "on-escape",
                        rawName: "v-on-escape",
                        value: t.onToggleModal,
                        expression: "onToggleModal"
                    }],
                    class: ["contract-note"]
                }, [s("div", {
                    staticClass: "row order-info-header",
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [s("h2", [t._v("Virtual contract note")])]), t._v(" "), s("div", {
                    attrs: {
                        slot: "body"
                    },
                    slot: "body"
                }, [t.isLoading ? s("su-loader") : t._e(), t._v(" "), t.isEmpty ? s("empty-state", {
                    attrs: {
                        image: t.getStatic(t.appendThemeName("images/illustrations/orderbook.svg"))
                    }
                }, [s("div", {
                    attrs: {
                        slot: "message"
                    },
                    slot: "message"
                }, [s("p", [t._v("There are no completed orders yet")])])]) : t._e(), t._v(" "), t.fetchError ? s("error-state", {
                    attrs: {
                        title: "Contract note couldn't be loaded.",
                        error: t.fetchError
                    }
                }) : t._e(), t._v(" "), t.charges.length > 0 ? s("section", {
                    staticClass: "total-charges"
                }, [s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Brokerage")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.brokerage)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("STT")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.transaction_tax)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Stamp duty")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.stamp_duty)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Exchange turnover charge")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.exchange_turnover_charge)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("SEBI turnover charge")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.sebi_turnover_charge)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "row"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("GST")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.gst)) + "\n\t\t\t\t\t")])]), t._v(" "), s("div", {
                    staticClass: "row final"
                }, [s("div", {
                    staticClass: "six columns"
                }, [s("label", [t._v("Total")])]), t._v(" "), s("div", {
                    staticClass: "six columns text-right"
                }, [t._v("\n\t\t\t\t\t\t" + t._s(t._f("round")(t.totals.total)) + "\n\t\t\t\t\t")])])]) : t._e(), t._v(" "), t.charges.length > 0 ? [s("su-table", {
                    attrs: {
                        data: t.charges,
                        toolbar: !1,
                        headers: t.tableHeaders.viewTrades
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function (e) {
                            return [s("td", {
                                attrs: {
                                    width: "10%"
                                }
                            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.orders[e.index].order_timestamp.slice(11)) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", ["SELL" === e.row.transaction_type ? s("span", {
                                staticClass: "text-label text-label-outline red small"
                            }, [t._v("SELL")]) : t._e(), t._v(" "), "BUY" === e.row.transaction_type ? s("span", {
                                staticClass: "text-label text-label-outline blue small"
                            }, [t._v("BUY")]) : t._e(), t._v("\n\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t"), s("span", {
                                domProps: {
                                    innerHTML: t._s(t.niceName(e.row.tradingsymbol, e.row.exchange))
                                }
                            }), t._v(" "), s("span", {
                                staticClass: "exchange text-xxsmall dim"
                            }, [t._v(t._s(e.row.exchange))])]), t._v(" "), s("td", {
                                attrs: {
                                    width: "10%"
                                }
                            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.orders[e.index].filled_quantity) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", {
                                staticClass: "text-right"
                            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t._f("round")(t.orders[e.index].average_price)) + "\n\t\t\t\t\t\t")]), t._v(" "), s("td", {
                                staticClass: "text-right",
                                attrs: {
                                    width: "10%"
                                }
                            }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t._f("round")(e.row.charges.total)) + "\n\t\t\t\t\t\t")])]
                        }
                    }], null, !1, 355735610)
                }), t._v(" "), s("p", {
                    staticClass: "text-xxsmall text-light"
                }, [t._v("\n\t\t\t\t\t*The data is an approximation based on the current orderbook and may change in the actual contract note after settlement.\n\t\t\t\t\t"), s("a", {
                    attrs: {
                        href: "https://zrd.sh/virtual-contract-note",
                        target: "_blank"
                    }
                }, [t._v("Learn more.")])])] : t._e()], 2), t._v(" "), s("div", {
                    staticClass: "actions",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [s("su-button", {
                    staticClass: "button button-outline",
                    nativeOn: {
                        click: function (e) {
                            return t.onToggleModal.apply(null, arguments)
                        }
                    }
                }, [t._v("Close")])], 1)]) : t._e()
            }
            , k = []
            , O = {
                inject: ["instrumentManager"],
                mixins: [r["a"]],
                data() {
                    return {
                        orders: [],
                        charges: [],
                        isVisible: !1,
                        isLoading: !1,
                        isEmpty: !0,
                        fetchError: null
                    }
                },
                created() {
                    this.$events.on(o["b"].EVENTS.ORDER_CONTRACT_NOTE, t => {
                        this.isVisible = !0,
                            this.isEmpty = !1,
                            this.orders = t,
                            this.charges = [],
                            t.length < 1 ? this.isEmpty = !0 : this.fetchCharges(t.map(t => ({
                                order_id: t.order_id,
                                exchange: t.exchange,
                                tradingsymbol: t.tradingsymbol,
                                transaction_type: t.transaction_type,
                                variety: t.variety,
                                product: t.product,
                                order_type: t.order_type,
                                quantity: t.filled_quantity,
                                average_price: t.average_price
                            })).reverse())
                    }
                    ),
                        this.tableHeaders = {
                            viewTrades: [{
                                label: "Time",
                                field: "order_timestamp",
                                sort: !1
                            }, {
                                label: "Instrument",
                                field: "tradingsymbol",
                                sort: !1
                            }, {
                                label: "Qty.",
                                field: "quantity",
                                sort: !1
                            }, {
                                label: "Avg. price",
                                field: "average_price",
                                class: "text-right",
                                sort: !1
                            }, {
                                label: "Charges",
                                field: "Total",
                                sort: !1
                            }]
                        }
                },
                methods: {
                    fetchCharges(t) {
                        this.isLoading = !0,
                            _["a"].fetchOrderbookCharges(t).then(t => {
                                this.isLoading = !1,
                                    this.charges = t.data.data.reverse(),
                                    this.charges.length < 1 && (this.isEmpty = !0)
                            }
                            ).catch(t => {
                                this.isLoading = !1,
                                    this.fetchError = Object(g["j"])(t)
                            }
                            )
                    },
                    onToggleModal() {
                        this.isVisible = !1
                    },
                    niceName(t, e) {
                        var s;
                        const n = this.instrumentManager.get(t, null, e);
                        return null !== (s = Object(u["a"])(n.niceName)) && void 0 !== s ? s : t
                    }
                },
                computed: {
                    totals() {
                        return {
                            transaction_tax: this.charges.reduce((t, e) => t + e.charges.transaction_tax, 0),
                            exchange_turnover_charge: this.charges.reduce((t, e) => t + e.charges.exchange_turnover_charge, 0),
                            sebi_turnover_charge: this.charges.reduce((t, e) => t + e.charges.sebi_turnover_charge, 0),
                            brokerage: this.charges.reduce((t, e) => t + e.charges.brokerage, 0),
                            stamp_duty: this.charges.reduce((t, e) => t + e.charges.stamp_duty, 0),
                            gst: this.charges.reduce((t, e) => t + e.charges.gst.total, 0),
                            total: this.charges.reduce((t, e) => t + e.charges.total, 0)
                        }
                    }
                }
            }
            , E = O
            , S = Object(C["a"])(E, T, k, !1, null, null, null)
            , P = S.exports
            , M = {
                inject: ["ticker", "instrumentManager"],
                mixins: [r["a"], f["a"]],
                props: {
                    minimal: Boolean
                },
                components: {
                    "order-info-window": x,
                    "contract-note": P
                },
                data() {
                    return {
                        showTrades: !1,
                        selectedPendingOrders: [],
                        contextMenu: {
                            pending: null,
                            completed: null,
                            trades: null
                        },
                        pendingOrderCtxtMenuUID: null,
                        isContractNoteVisible: !1
                    }
                },
                created() {
                    this.consoleURL = "https://console.zerodha.com",
                        this.subscribedTokens = [],
                        this.isComponentActive = !0,
                        this.columnStyles = {
                            orderTimeStamp: ["order-timestamp"],
                            transactionType: ["transaction-type"],
                            instrument: ["instrument"],
                            product: ["product"],
                            quantity: ["quantity", "right"],
                            lastPrice: ["last-price", "right"],
                            price: ["average-price", "right"],
                            status: ["order-status", "right"],
                            tradeID: ["trade-id"],
                            fillTimeStamp: ["fill-timestamp"]
                        },
                        this.pendingOrderTableHeaders = [{
                            label: "Time",
                            field: "order_timestamp",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.orderTimeStamp
                        }, {
                            label: "Type",
                            field: "transaction_type",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.transactionType
                        }, {
                            label: "Instrument",
                            field: "tradingsymbol",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.instrument
                        }, {
                            label: "Product",
                            field: "product",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.product
                        }, {
                            label: "Qty.",
                            field: "quantity",
                            sort: !0,
                            class: this.columnStyles.quantity,
                            downloadField: "downloadQty"
                        }, {
                            label: "LTP",
                            field: "lastPrice",
                            sort: !0,
                            class: this.columnStyles.lastPrice
                        }, {
                            label: "Price",
                            field: "displayPrice",
                            sort: !0,
                            class: this.columnStyles.price
                        }, {
                            label: "Status",
                            field: "status",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.status
                        }],
                        this.completedOrderTableHeaders = [{
                            label: "Time",
                            field: "order_timestamp",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.orderTimeStamp
                        }, {
                            label: "Type",
                            field: "transaction_type",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.transactionType
                        }, {
                            label: "Instrument",
                            field: "tradingsymbol",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.instrument
                        }, {
                            label: "Product",
                            field: "product",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.product
                        }, {
                            label: "Qty.",
                            field: "quantity",
                            sort: !0,
                            class: this.columnStyles.quantity,
                            downloadField: "downloadQty"
                        }, {
                            label: "Avg. price",
                            field: "displayPrice",
                            sort: !0,
                            class: this.columnStyles.price
                        }, {
                            label: "Status",
                            field: "status",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.status
                        }],
                        this.tradesTableHeaders = [{
                            label: "Trade ID",
                            field: "trade_id",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.tradeID
                        }, {
                            label: "Fill time",
                            field: "fill_timestamp",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.fillTimeStamp
                        }, {
                            label: "Type",
                            field: "transaction_type",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.transactionType
                        }, {
                            label: "Instrument",
                            field: "tradingsymbol",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.instrument
                        }, {
                            label: "Product",
                            field: "product",
                            sort: !0,
                            search: !0,
                            class: this.columnStyles.product
                        }, {
                            label: "Qty.",
                            field: "quantity",
                            sort: !0,
                            class: this.columnStyles.quantity
                        }, {
                            label: "Avg. Price",
                            field: "average_price",
                            sort: !0,
                            class: this.columnStyles.price
                        }],
                        this.fetchOrders(),
                        this.preProcess()
                },
                mounted() { },
                beforeDestroy() {
                    this.postProcess()
                },
                activated() {
                    this.preProcess()
                },
                deactivated() {
                    this.postProcess()
                },
                computed: {
                    ...Object(i["d"])(["isMobile"]),
                    ...Object(i["d"])(h["b"], ["ticks"]),
                    ...Object(i["d"])(d["b"], ["orders", "pendingOrders", "completedOrders", "trades", "orderFetchStatus", "tradeFetchStatus", "ordersError", "tradesError", "allTags", "allTagsFetchStatus"]),
                    ordersConstraints() {
                        let t = this.orderFetchStatus === c["d"].API_STATUSES.fetching
                            , e = this.orderFetchStatus === c["d"].API_STATUSES.error
                            , s = this.orders && this.orders.length > 0
                            , n = s && this.pendingOrders && this.pendingOrders.length > 0
                            , a = s && this.completedOrders && this.completedOrders.length > 0
                            , i = this.orders && 0 === this.orders.length
                            , r = e && !this.orders
                            , o = e && this.orders
                            , l = !i && !r && !s;
                        return {
                            isData: s,
                            isError: e,
                            isFetching: t,
                            showHeader: l,
                            showErrorIcon: o,
                            showEmptyState: i,
                            showErrorState: r,
                            isPendingOrders: n,
                            isCompletedOrders: a
                        }
                    },
                    tradesConstraints() {
                        let t = this.tradeFetchStatus === c["d"].API_STATUSES.fetching
                            , e = this.tradeFetchStatus === c["d"].API_STATUSES.error
                            , s = this.trades && this.trades.length > 0
                            , n = this.trades && 0 === this.trades.length
                            , a = e && !this.trades
                            , i = e && this.trades;
                        return {
                            isData: s,
                            isError: e,
                            isFetching: t,
                            showErrorIcon: i,
                            showEmptyState: n,
                            showErrorState: a
                        }
                    },
                    formattedPendingOrders() {
                        let t = [];
                        for (let e of this.pendingOrders) {
                            let s = !1
                                , n = !1
                                , a = e.product + e.tradingsymbol + e.exchange + e.order_id
                                , i = this.ticks && this.ticks[e.instrument_token] && this.ticks[e.instrument_token].lastPrice || 0
                                , r = this.instrumentManager.get(e.tradingsymbol, null, e.exchange)
                                , c = r && r.niceName;
                            r && r.expiryWeek && (c = Object(u["a"])(c));
                            let d = r && r.precision || 2
                                , h = Object(l["c"])(e.price || e.average_price || 0, d);
                            e.product !== o["b"].VARIETY.BO.toUpperCase() && e.product !== o["b"].VARIETY.CO.toUpperCase() || !e.parent_order_id || (s = !0),
                                e.product === o["b"].VARIETY.BO.toUpperCase() && e.order_type === o["b"].ORDER_TYPE.SLM.toUpperCase() && (n = !0);
                            let p, f = {
                                lastPrice: Object(l["b"])(i, d, !0),
                                price: Object(l["b"])(h, d, !0),
                                triggerPrice: Object(l["b"])(e.trigger_price, d, !0)
                            }, v = this.isRepeatOrder(e);
                            e.meta && e.meta.gttp && (p = this.gttMeta(e.meta.gttp, e.transaction_type));
                            let m = e.filled_quantity + "/" + e.quantity
                                , _ = this.getUITags(e.tags);
                            _.length > 0 && this.fetchTags(),
                                t.push({
                                    ...e,
                                    lastPrice: i,
                                    displayPrice: h,
                                    uid: a,
                                    isExit: s,
                                    isRepeatOrder: v,
                                    disableSelect: n,
                                    formatted: f,
                                    niceName: c,
                                    gtt: p,
                                    downloadQty: m,
                                    uiTags: _
                                })
                        }
                        return t.reverse()
                    },
                    formattedCompletedOrders() {
                        let t = [];
                        for (let e of this.completedOrders) {
                            let s = e.product + e.tradingsymbol + e.exchange + e.order_id
                                , n = this.instrumentManager.get(e.tradingsymbol, null, e.exchange)
                                , a = n && n.niceName;
                            n && n.expiryWeek && (a = Object(u["a"])(a));
                            let i, r = n && n.precision || 2, o = Object(l["c"])(e.average_price || e.price || 0, r), c = {
                                price: Object(l["b"])(o, r, !0),
                                triggerPrice: Object(l["b"])(e.trigger_price, r, !0)
                            }, d = this.isRepeatOrder(e);
                            e.meta && e.meta.gttp && (i = this.gttMeta(e.meta.gttp, e.transaction_type));
                            let h = e.filled_quantity + "/" + e.quantity
                                , p = this.getUITags(e.tags);
                            p.length > 0 && this.fetchTags(),
                                t.push({
                                    ...e,
                                    displayPrice: o,
                                    uid: s,
                                    isRepeatOrder: d,
                                    formatted: c,
                                    niceName: a,
                                    gtt: i,
                                    downloadQty: h,
                                    uiTags: p
                                })
                        }
                        return t.reverse()
                    },
                    formattedTrades() {
                        if (!this.trades)
                            return [];
                        let t = [];
                        for (let e of this.trades) {
                            let s = this.instrumentManager.get(e.tradingsymbol, null, e.exchange)
                                , n = s && s.niceName;
                            s && s.expiryWeek && (n = Object(u["a"])(n)),
                                t.push({
                                    ...e,
                                    instrument: s,
                                    niceName: n
                                })
                        }
                        return t.reverse()
                    },
                    selectedOrdersType() {
                        let t = !1
                            , e = !1;
                        return this.selectedPendingOrders.forEach(s => {
                            s.isExit ? t = !0 : e = !0
                        }
                        ),
                            t && e ? "both" : t ? "exit" : e ? "cancel" : void 0
                    },
                    allTagsMap() {
                        let t = {};
                        return this.allTags && this.allTags.forEach(e => {
                            t[e.tag] = e
                        }
                        ),
                            t
                    }
                },
                watch: {
                    pendingOrders() {
                        this.isComponentActive && this.subscribePendingOrders()
                    }
                },
                methods: {
                    ...Object(i["c"])(d["b"], ["fetchOrders", "fetchTrades", "fetchGTT", "fetchAllTags"]),
                    preProcess() {
                        this.$events.on(c["d"].EVENTS.refetch + d["b"], this.fetchAll),
                            this.$events.on(o["b"].EVENTS.ORDER_CANCEL_SUCCESS, this.fetchAll),
                            this.$events.on(o["b"].EVENTS.ORDER_CANCEL_ERROR, this.fetchAll),
                            this.$events.on(o["b"].EVENTS.GTT_DELETE_SUCCESS, this.fetchGTT),
                            this.$events.on(o["b"].EVENTS.GTT_DELETE_ERROR, this.fetchGTT),
                            this.$events.on(o["b"].EVENTS.GTT_PLACE_SUCCESS, this.fetchGTT),
                            this.$events.on(o["b"].EVENTS.GTT_PLACE_ERROR, this.fetchGTT),
                            this.$events.on(o["b"].EVENTS.GTT_MODIFY_SUCCESS, this.fetchGTT),
                            this.$events.on(o["b"].EVENTS.GTT_MODIFY_ERROR, this.fetchGTT),
                            this.subscribePendingOrders(),
                            this.isComponentActive = !0
                    },
                    postProcess() {
                        this.$events.off(c["d"].EVENTS.refetch + d["b"], this.fetchAll),
                            this.$events.off(o["b"].EVENTS.ORDER_CANCEL_SUCCESS, this.fetchAll),
                            this.$events.off(o["b"].EVENTS.ORDER_CANCEL_ERROR, this.fetchAll),
                            this.$events.off(o["b"].EVENTS.GTT_DELETE_SUCCESS, this.fetchGTT),
                            this.$events.off(o["b"].EVENTS.GTT_DELETE_ERROR, this.fetchGTT),
                            this.$events.off(o["b"].EVENTS.GTT_PLACE_SUCCESS, this.fetchGTT),
                            this.$events.off(o["b"].EVENTS.GTT_PLACE_ERROR, this.fetchGTT),
                            this.$events.off(o["b"].EVENTS.GTT_MODIFY_SUCCESS, this.fetchGTT),
                            this.$events.off(o["b"].EVENTS.GTT_MODIFY_ERROR, this.fetchGTT),
                            this.isComponentActive = !1,
                            this.unsubscribePendingOrders()
                    },
                    fetchAll() {
                        this.fetchOrders(),
                            this.showTrades && this.fetchTrades(),
                            this.showGTT && this.fetchGTT()
                    },
                    toggleShowTrades() {
                        this.showTrades = !this.showTrades,
                            this.showTrades && this.fetchTrades()
                    },
                    placeOrder(t, e) {
                        let s = this.instrumentManager.get(t.tradingsymbol, null, t.exchange);
                        this.$events.emit(o["b"].EVENTS.ORDER_PLACE, {
                            instrument: s,
                            transactionType: e,
                            instrumentToken: t.instrument_token
                        })
                    },
                    isRepeatOrder(t) {
                        return t.variety !== o["b"].VARIETY.BO && t.variety !== o["b"].VARIETY.CO || t.order_type !== o["b"].ORDER_TYPE.SLM
                    },
                    repeatOrder(t) {
                        let e = this.instrumentManager.get(t.tradingsymbol, null, t.exchange);
                        this.$events.emit(o["b"].EVENTS.ORDER_PLACE, {
                            instrument: e,
                            instrumentToken: t.instrument_token,
                            lastPrice: t.lastPrice,
                            product: t.product,
                            validity: t.validity,
                            validityTTL: t.validity_ttl || null,
                            variety: "iceberg" === t.variety ? "regular" : t.variety,
                            orderType: t.order_type,
                            transactionType: t.transaction_type,
                            tradingsymbol: t.tradingsymbol,
                            exchange: t.exchange,
                            quantity: t.quantity,
                            disclosedQuantity: t.disclosed_quantity,
                            price: t.price,
                            triggerPrice: t.trigger_price,
                            gtt: t.gtt,
                            tags: this.toOrderWindowTags(t.tags),
                            auctionNumber: t.auction_number
                        })
                    },
                    modifyOrder(t) {
                        let e = t.variety
                            , s = this.instrumentManager.get(t.tradingsymbol, null, t.exchange);
                        e === o["b"].VARIETY.AMO && -1 === t.status.toUpperCase().indexOf(o["b"].VARIETY.AMO.toUpperCase()) && (e = o["b"].VARIETY.REGULAR);
                        let n = t.product.toUpperCase();
                        n !== o["b"].VARIETY.CO && n !== o["b"].VARIETY.BO || (n = o["b"].PRODUCT.MIS);
                        let a = parseInt(t.quantity)
                            , i = parseInt(t.filled_quantity);
                        this.$events.emit(o["b"].EVENTS.ORDER_MODIFY, {
                            instrument: s,
                            instrumentToken: t.instrument_token,
                            transactionType: t.transaction_type,
                            quantity: a,
                            disclosedQuantity: parseInt(t.disclosed_quantity),
                            price: parseFloat(t.price),
                            lastPrice: t.lastPrice,
                            triggerPrice: parseFloat(t.trigger_price),
                            product: n,
                            variety: e,
                            orderType: t.order_type,
                            filledQuantity: i,
                            orderId: t.order_id,
                            parentOrderId: t.parent_order_id,
                            validity: t.validity,
                            validityTTL: t.validity_ttl || null,
                            stoploss: t.stoploss,
                            squareoff: t.squareoff,
                            trailingStoploss: t.trailing_stoploss,
                            gtt: t.gtt,
                            tags: this.toOrderWindowTags(t.tags)
                        })
                    },
                    handlePendingOrderSelect(t) {
                        this.selectedPendingOrders = t
                    },
                    cancelSelectedOrders() {
                        for (let s of this.selectedPendingOrders) {
                            let t = ""
                                , e = this.instrumentManager.get(s.tradingsymbol, null, s.exchange)
                                , n = {
                                    ...s,
                                    instrument: e,
                                    label: t
                                };
                            this.$events.emit(p["b"].EVENTS.ADD, {
                                type: p["b"].TYPES.CANCEL,
                                basket: "orderbook-cancel",
                                id: s.order_id,
                                data: n
                            })
                        }
                        let t = ""
                            , e = "";
                        "both" === this.selectedOrdersType ? (t = "Exit/Cancel orders",
                            e = "Exit/Cancel") : "exit" === this.selectedOrdersType ? (t = "Exit orders",
                                e = "Exit") : (t = "Cancel orders",
                                    e = "Cancel"),
                            this.$events.emit(p["b"].EVENTS.SHOW, {
                                basket: "orderbook-cancel",
                                title: t,
                                actionTitle: e
                            })
                    },
                    subscribePendingOrders() {
                        if (!this.isComponentActive || !this.pendingOrders || 0 === this.pendingOrders.length)
                            return;
                        let t = [];
                        for (let e of this.pendingOrders)
                            t.push(e.instrument_token);
                        this.subscribedTokens = t,
                            this.ticker.subscribe(this.subscribedTokens, d["b"]),
                            this.ticker.setMode(this.ticker.modeLTP, this.subscribedTokens, d["b"])
                    },
                    unsubscribePendingOrders() {
                        this.subscribedTokens && this.subscribedTokens.length > 0 && this.ticker.unsubscribe(this.subscribedTokens, d["b"])
                    },
                    handlePendingOrderKeyDown({ row: t, event: e }) {
                        46 !== e.keyCode && 8 !== e.keyCode || (this.selectedPendingOrders && this.selectedPendingOrders.length > 1 ? this.cancelSelectedOrders() : this.showOrderCancelModal(t))
                    },
                    showContextMenu(t, e, s) {
                        s = s || "uid",
                            this.$set(this.contextMenu, e, t[s])
                    },
                    hideContextMenu(t, e) {
                        this.$set(this.contextMenu, e, null)
                    },
                    showOrderCancelModal(t) {
                        this.$events.emit(o["b"].EVENTS.ORDER_CANCEL, t)
                    },
                    showOrderInfoModal(t, e) {
                        this.$events.emit(o["b"].EVENTS.ORDER_INFO, t)
                    },
                    onShowContractNote() {
                        const t = this.orders.filter(t => t.filled_quantity > 0);
                        this.$events.emit(o["b"].EVENTS.ORDER_CONTRACT_NOTE, [...t].reverse())
                    },
                    hasTag(t, e) {
                        return t && t.indexOf(e) > -1
                    },
                    getUITags(t) {
                        return t ? t.filter(t => t.startsWith("t:")).map(t => t.split(":")[1]) : []
                    },
                    toOrderWindowTags(t) {
                        return t ? t.filter(t => t.startsWith("t:")).map(t => {
                            let e = t.split(":");
                            return {
                                tag: e[1],
                                id: e[2]
                            }
                        }
                        ) : []
                    },
                    gotoPage(t) {
                        this.$router.push({
                            name: t
                        })
                    },
                    gttMeta(t, e) {
                        let s, n;
                        return 2 === t.length ? (n = t[0][1],
                            s = t[1][1]) : 1 === t.length && (t[0][1] > 0 ? s = t[0][1] : n = t[0][1]),
                            e === o["b"].TRANSACTION_TYPE.SELL ? {
                                stoploss: s,
                                target: n
                            } : {
                                stoploss: n,
                                target: s
                            }
                    },
                    gttTooltip({ stoploss: t, target: e }) {
                        let s = "This order has a GTT.";
                        return t && !e ? s += " Stoploss: " + t + "%" : !t && e ? s += " Target: " + e + "%" : t && e && (s += " Stoploss: " + t + "%,",
                            s += " Target: " + e + "%"),
                            s
                    },
                    fetchTags() {
                        this.allTags || this.allTagsFetchStatus === c["d"].API_STATUSES.fetching || this.fetchAllTags()
                    }
                }
            }
            , N = M
            , D = Object(C["a"])(N, n, a, !1, null, null, null);
        e["default"] = D.exports
    },
    c184: function (t, e, s) {
        "use strict";
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return s("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: t.clear,
                    expression: "clear"
                }],
                staticClass: "omnisearch"
            }, [s("header", {
                staticClass: "search-header"
            }, [s("div", {
                staticClass: "search"
            }, [s("su-input", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.clear,
                    expression: "clear"
                }],
                ref: "input",
                class: ["search-input-field", t.styleClasses.searchInputField],
                attrs: {
                    type: "text",
                    icon: "search",
                    staticLabel: !1,
                    animate: !1,
                    placeholder: t.placeholder,
                    autocomplete: "off"
                },
                on: {
                    input: t.onSearch,
                    focus: t.onFocus,
                    blur: t.onBlur
                },
                model: {
                    value: t.query,
                    callback: function (e) {
                        t.query = e
                    },
                    expression: "query"
                }
            }), t._v(" "), t.counts ? s("span", {
                staticClass: "counts"
            }, [t._v("\n\t\t\t\t" + t._s(t.counts.current) + " / " + t._s(t.counts.max) + "\n\t\t\t")]) : t._e(), t._v(" "), t.isSearching ? s("su-loader", {
                staticClass: "dim",
                attrs: {
                    size: 8
                }
            }) : t._e()], 1), t._v(" "), t.showGroups && (t.query || t.showResults) ? s("div", {
                staticClass: "tabs"
            }, t._l(t.tabs, (function (e) {
                return s("a", {
                    key: e[0],
                    staticClass: "tab",
                    class: {
                        selected: t.currentTab === e[0]
                    },
                    attrs: {
                        href: ""
                    },
                    on: {
                        click: function (s) {
                            return s.preventDefault(),
                                t.onSelectTab(e[0])
                        }
                    }
                }, [t._v(t._s(e[1]))])
            }
            )), 0) : t._e()]), t._v(" "), s("transition", {
                attrs: {
                    name: "fade",
                    tag: "p"
                }
            }, [t.showResults ? s("ul", {
                class: ["omnisearch-results", t.styleClasses.resultsUl, t.showGroups ? "has-groups" : ""]
            }, [null !== t.results[t.currentTab] ? s("transition-group", {
                attrs: {
                    name: "list",
                    tag: "div"
                }
            }, t._l(t.results[t.currentTab], (function (e, n) {
                var a;
                return s("li", {
                    key: e.id,
                    staticClass: "results-item",
                    class: Object.assign((a = {
                        selected: t.isActive(n),
                        isadded: t.isAdded(e.instrument)
                    },
                        a[e.group] = !0,
                        a), e.tags.reduce((function (t, e) {
                            var s;
                            return Object.assign({}, t, (s = {},
                                s[e] = !0,
                                s))
                        }
                        ), {})),
                    on: {
                        mouseenter: function (e) {
                            return t.setCurrentHoverIndex(n)
                        },
                        mouseleave: t.clearCurrentHoverIndex,
                        click: function (s) {
                            return t.onItemClick(e)
                        }
                    }
                }, [s("div", {
                    class: ["item-wrap", t.styleClasses.symbol]
                }, [e.image ? s("div", {
                    staticClass: "image"
                }, [s("img", {
                    attrs: {
                        src: e.image
                    }
                })]) : t._e(), t._v(" "), s("div", {
                    staticClass: "heading"
                }, [s("div", {
                    staticClass: "name"
                }, [s("span", {
                    domProps: {
                        innerHTML: t._s(e.name)
                    }
                }), t._v(" "), t.isAdded(e.instrument) ? s("span", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "ins-added-label",
                    attrs: {
                        title: "Added"
                    }
                }, [s("span", {
                    staticClass: "icon icon-check"
                })]) : t._e(), t._v(" "), e.actions.link ? s("span", {
                    staticClass: "icon icon-external-link"
                }) : t._e()]), t._v(" "), s("div", {
                    staticClass: "description",
                    class: [t.styleClasses.company],
                    domProps: {
                        innerHTML: t._s(e.description)
                    }
                })]), t._v(" "), s("div", {
                    staticClass: "info"
                }, [e.tags.length > 0 ? s("span", {
                    staticClass: "tag text-label text-label-outline",
                    class: [e.tags[0], t.styleClasses.exchange, e.color]
                }, [t._v(t._s(e.tags[0]) + " ")]) : t._e()])]), t._v(" "), t.showActions && t.currentHoverIndex === n ? s("div", {
                    staticClass: "action-buttons"
                }, [e.actions.buy ? s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "button-blue",
                    attrs: {
                        title: "Buy"
                    },
                    nativeOn: {
                        click: function (s) {
                            return s.preventDefault(),
                                s.stopPropagation(),
                                t.placeOrder(e.instrument, "BUY")
                        }
                    }
                }, [t._v("B")]) : t._e(), t._v(" "), e.actions.sell ? s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "button-orange",
                    attrs: {
                        title: "Sell"
                    },
                    nativeOn: {
                        click: function (s) {
                            return s.preventDefault(),
                                s.stopPropagation(),
                                t.placeOrder(e.instrument, "SELL")
                        }
                    }
                }, [t._v("S")]) : t._e(), t._v(" "), e.actions.chart ? s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "button-outline",
                    attrs: {
                        title: "Chart"
                    },
                    nativeOn: {
                        click: function (s) {
                            return s.preventDefault(),
                                s.stopPropagation(),
                                t.openChart(e.instrument)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-trending-up"
                })]) : t._e(), t._v(" "), e.actions.depth ? s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "button-outline",
                    attrs: {
                        title: "Market depth widget"
                    },
                    nativeOn: {
                        click: function (s) {
                            return s.preventDefault(),
                                s.stopPropagation(),
                                t.showMarketDepthWidget(e.instrument)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-align-center"
                })]) : t._e(), t._v(" "), e.actions.add ? [t.isAdded(e.instrument) ? s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "button-outline button-grey",
                    attrs: {
                        title: "Added"
                    },
                    nativeOn: {
                        click: function (s) {
                            return s.preventDefault(),
                                s.stopPropagation(),
                                t.addItem(e.instrument, !0)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-check"
                })]) : s("su-button", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip"
                    }],
                    staticClass: "button-green",
                    attrs: {
                        title: "Add"
                    },
                    nativeOn: {
                        click: function (s) {
                            return s.preventDefault(),
                                s.stopPropagation(),
                                t.addItem(e.instrument, !0)
                        }
                    }
                }, [s("span", {
                    staticClass: "icon icon-plus"
                })])] : t._e()], 2) : t._e()])
            }
            )), 0) : t._e(), t._v(" "), t.results[t.currentTab] && 0 !== t.results[t.currentTab].length ? t._e() : s("li", {
                staticClass: "results-item text-light no-results"
            }, [t.results[t.currentTab] ? t.results[t.currentTab] && 0 === t.results[t.currentTab].length ? [t._v("\n\t\t\t\t\tNo results for that query.\n\t\t\t\t")] : t._e() : [t._v("\n\t\t\t\t\t" + t._s(t.placeholders[t.currentTab] || "Search for instruments") + "\n\t\t\t\t")]], 2)], 1) : t._e()])], 1)
        }
            , a = []
            , i = s("ba6a")
            , r = s("5665");
        function o(t, e) {
            return i["a"].get(Object(r["a"])("omnisearch.get"), {
                params: {
                    group: t,
                    q: e
                }
            })
        }
        var c = {
            search: o
        }
            , l = s("9c9e")
            , u = s("5fb0")
            , d = s("0a3b");
        const h = {
            id: null,
            name: null,
            icon: null,
            group: "",
            description: null,
            image: null,
            isTradable: !1,
            link: null,
            actions: {
                buy: !0,
                sell: !0,
                chart: !0,
                add: !0,
                depth: !0,
                link: !1
            },
            tags: [],
            instrument: null
        }
            , p = "#"
            , f = {
                gsec: "green",
                tbill: "orange",
                sdl: "aqua",
                sgb: "blue"
            }
            , v = "https://coin.zerodha.com/static/img"
            , m = "https://coin.zerodha.com/mf/fund";
        var _ = {
            inject: ["instrumentManager"],
            name: "omnisearch",
            mixins: [l["a"]],
            props: {
                insManager: {
                    required: !0
                },
                showGroups: Boolean,
                styleClasses: {
                    default: () => ({
                        symbol: "",
                        company: "",
                        exchange: "",
                        resultsUl: "",
                        searchInputField: ""
                    }),
                    required: !1
                },
                maxResults: {
                    required: !1
                },
                showActions: {
                    required: !1,
                    default: !1
                },
                addedInstruments: {
                    required: !1,
                    default: () => []
                },
                counts: {
                    required: !1
                },
                placeholder: {
                    required: !1,
                    default: "Search eg: infy bse, nifty fut, nifty weekly, gold mcx"
                },
                instrument: {
                    required: !1,
                    default: null
                },
                retainValue: {
                    required: !1,
                    default: !1
                }
            },
            data() {
                return {
                    tabs: [[p, "#"], ["mf", "MF"], ["ipo", "IPO"], ["gsecs", "G-Secs"]],
                    currentTab: p,
                    debounce: 0,
                    inst: null,
                    query: "",
                    results: {},
                    showResults: !1,
                    isSearching: !1,
                    showTabs: !1,
                    current: 0,
                    currentHoverIndex: null,
                    globalKeyboardShortcutEvents: [{
                        keys: ["192"],
                        cb: () => {
                            this.$refs.input.focus()
                        }
                        ,
                        stop: !0,
                        prevent: !0,
                        ignoreInput: !1
                    }, {
                        keys: ["16", "192"],
                        cb: () => {
                            this.$refs.input.focus()
                        }
                        ,
                        stop: !0,
                        prevent: !0,
                        ignoreInput: !1
                    }],
                    searchKeyboardShortcutEvents: [{
                        keys: ["13"],
                        cb: this.onEnter,
                        stop: !0,
                        prevent: !0,
                        ignoreInput: !1
                    }, {
                        keys: ["40"],
                        cb: this.onMoveDown,
                        stop: !0,
                        prevent: !0,
                        ignoreInput: !1
                    }, {
                        keys: ["38"],
                        cb: this.onMoveUp,
                        stop: !0,
                        prevent: !0,
                        ignoreInput: !1
                    }],
                    placeholders: {
                        "#": "Search stocks and F&O eg: infy bse, nifty fut, nifty weekly",
                        mf: "Search for 3000+ mutual funds across AMCs. Eg: zerodha tax saver",
                        ipo: "Search for current and upcoming IPOs.",
                        gsecs: "Search for Govt. securities, bonds, and T-bills."
                    }
                }
            },
            beforeDestroy() {
                this.$keyEvents.deregister(this.globalKeyboardShortcutEvents)
            },
            mounted() {
                this.inst = this.$props.instrument,
                    this.$keyEvents.register(this.globalKeyboardShortcutEvents)
            },
            computed: {
                addedIns() {
                    let t = {};
                    if (!this.addedInstruments)
                        return t;
                    for (let e of this.addedInstruments)
                        e && e.tradingsymbol && e.exchange && (t[e.exchange + ":" + e.tradingsymbol] = !0);
                    return t
                },
                displayName() {
                    return this.inst.exchange + ":" + this.inst.tradingsymbol
                }
            },
            methods: {
                onSelectTab(t) {
                    this.currentTab !== t && (this.currentTab = t,
                        this.onSearch(this.query),
                        this.showResults = !0,
                        this.$refs.input.focus())
                },
                onFocus(t) {
                    this.$keyEvents.deregister(this.searchKeyboardShortcutEvents),
                        this.$keyEvents.register(this.searchKeyboardShortcutEvents),
                        t && t.target.select(),
                        this.showGroups && (this.onSearch(this.query),
                            this.showResults = !0)
                },
                onBlur() {
                    this.$keyEvents.deregister(this.searchKeyboardShortcutEvents)
                },
                onEnter() {
                    this.$refs.input.blur(),
                        this.results[this.currentTab] && this.onItemClick(this.results[this.currentTab][this.current], !1)
                },
                onMoveUp() {
                    this.results[this.currentTab] && (this.current > 0 ? this.current-- : this.current = this.results[this.currentTab].length - 1)
                },
                onMoveDown() {
                    this.results[this.currentTab] && (this.current < this.results[this.currentTab].length - 1 ? this.current++ : this.current = 0)
                },
                onItemClick(t) {
                    return t.actions.add ? this.addItem(t.instrument, !1) : t.actions.link ? window.open(t.actions.link) : t.actions.exec && t.actions.exec(),
                        !1
                },
                addItem(t, e) {
                    this.inst = t,
                        this.isAdded(t) ? (this.clear(),
                            this.$emit("add", {
                                instrument: t,
                                isMultiAdd: e,
                                isAdded: !0
                            })) : this.$emit("add", {
                                instrument: t,
                                isMultiAdd: e
                            }),
                        e || this.clear()
                },
                dateSuperScript(t) {
                    return Object(d["a"])(t)
                },
                placeOrder(t, e) {
                    this.$emit("place", t, e),
                        this.clear()
                },
                isActive(t) {
                    return t === this.current
                },
                isAdded(t) {
                    if (t)
                        return this.addedIns[t.exchange + ":" + t.tradingsymbol]
                },
                onSearch(t) {
                    if (this.currentTab === p)
                        return void this.doLocalSearch(t);
                    const e = t.trim();
                    clearTimeout(this.debounce);
                    const s = [];
                    this.debounce = setTimeout(() => {
                        this.isSearching = !0;
                        const t = this.currentTab;
                        c.search(t, e).then(e => {
                            this.isSearching = !1,
                                e.data.data.forEach(t => {
                                    let e = t.name;
                                    "ipo" === t.group && "" !== t.tradingsymbol && t.tradingsymbol !== t.name && (e = `${t.tradingsymbol} — ${e}`);
                                    let n = {
                                        ...h,
                                        id: t.id,
                                        name: e,
                                        group: t.group,
                                        description: t.description,
                                        tags: [t.type],
                                        image: t.image ? `${v}/${t.image}` : null,
                                        color: f[t.type] || null,
                                        actions: {
                                            ...h.actions,
                                            buy: !1,
                                            sell: !1,
                                            add: !1,
                                            chart: !1,
                                            depth: !1
                                        },
                                        instrument: t,
                                        isTradable: t.tradable
                                    };
                                    "gsecs" === t.group ? n.actions.exec = () => {
                                        this.$router.push({
                                            name: "gsecs",
                                            query: {
                                                id: t.id.split(":")[1]
                                            }
                                        }),
                                            this.clear()
                                    }
                                        : "ipo" === t.group ? -1 !== t.tags.indexOf("open") ? (n.actions.exec = () => {
                                            this.$router.push({
                                                name: "ipo",
                                                query: {
                                                    id: t.tradingsymbol
                                                }
                                            }),
                                                this.clear()
                                        }
                                            ,
                                            n.tags = ["open"]) : (n.actions.link = "https://zerodha.com/ipo/" + t.id,
                                                n.tags = []) : "mf" === t.group && (n.actions.link = `${m}/${t.tradingsymbol}`),
                                        s.push(n)
                                }
                                ),
                                this.results[t] = s,
                                this.showResults = !0
                        }
                        ).catch(() => {
                            this.results[t] = [],
                                this.showResults = !0,
                                this.isSearching = !1
                        }
                        )
                    }
                        , 200)
                },
                doLocalSearch(t) {
                    const e = this.insManager.search(t, this.maxResults);
                    if (!e)
                        return;
                    const s = [];
                    e.forEach(t => {
                        s.push({
                            ...h,
                            id: t.exchange + ":" + t.tradingsymbol,
                            name: Object(d["a"])(t.niceName),
                            description: t.company,
                            tags: [t.exchange, "local"],
                            actions: {
                                ...h.actions,
                                buy: t.tradable,
                                sell: t.tradable
                            },
                            instrument: t,
                            isTradable: t.tradable
                        })
                    }
                    ),
                        this.results[this.currentTab] = s,
                        this.showResults = !0
                },
                clear() {
                    this.$props.retainValue ? this.inst && (this.query = this.displayName) : this.query = "",
                        this.$refs.input.blur(),
                        this.current = 0,
                        this.results = {},
                        this.showResults = !1
                },
                setCurrentHoverIndex(t) {
                    this.currentHoverIndex = t
                },
                clearCurrentHoverIndex() {
                    this.currentHoverIndex = null
                },
                openChart(t, e) {
                    if (e) {
                        let e = this.openPopoutChart(t.instrumentToken, t.segment, t.tradingsymbol)
                            , s = this.$router.resolve({
                                path: e
                            });
                        window.open(s.href, "_blank")
                    } else
                        this.openInAppChart(t.instrumentToken, t.segment, t.tradingsymbol)
                },
                showMarketDepthWidget(t) {
                    this.$events.emit(u["d"].EVENTS.showMarketDepthWidget, {
                        instrument: t
                    })
                }
            },
            watch: {
                inst() {
                    this.$props.retainValue && this.inst && (this.query = this.displayName)
                }
            }
        }
            , g = _
            , b = s("0c7c")
            , y = Object(b["a"])(g, n, a, !1, null, null, null);
        e["a"] = y.exports
    },
    c2fb: function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return a
        }
        ));
        var n = s("7bdc");
        class a {
        }
        a.namespace = n["b"],
            a.install = function (t, e) {
                e.store && e.store.registerModule(n["b"], n["a"])
            }
    },
    c698: function (t, e, s) {
        "use strict";
        e["a"] = function (t) {
            return function () {
                return t
            }
        }
    },
    c6c3: function (t, e, s) {
        "use strict";
        var n = s("ba6a")
            , a = s("5665");
        function i() {
            return n["a"].get(Object(a["a"])("portfolio.positions.all"))
        }
        function r(t) {
            return n["a"].put(Object(a["a"])("portfolio.positions.modify"), t)
        }
        e["a"] = {
            getPositions: i,
            productModify: r
        }
    },
    cddb: function (t, e, s) { },
    dba6: function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return n
        }
        ));
        const n = "positions"
            , a = {
                PRODUCT_MODIFY: n + ".position.product.modify"
            };
        e["b"] = {
            NAMESPACE: n,
            EVENTS: a
        }
    },
    e236: function (t, e, s) {
        "use strict";
        s.d(e, "a", (function () {
            return m
        }
        )),
            s.d(e, "b", (function () {
                return dt
            }
            )),
            s.d(e, "c", (function () {
                return v
            }
            )),
            s.d(e, "d", (function () {
                return ft
            }
            )),
            s.d(e, "e", (function () {
                return ps
            }
            ));
        var n = s("bc17")
            , a = "$";
        function i() { }
        function r(t, e) {
            var s = new i;
            if (t instanceof i)
                t.each((function (t, e) {
                    s.set(e, t)
                }
                ));
            else if (Array.isArray(t)) {
                var n, a = -1, r = t.length;
                if (null == e)
                    while (++a < r)
                        s.set(a, t[a]);
                else
                    while (++a < r)
                        s.set(e(n = t[a], a, t), n)
            } else if (t)
                for (var o in t)
                    s.set(o, t[o]);
            return s
        }
        i.prototype = r.prototype = {
            constructor: i,
            has: function (t) {
                return a + t in this
            },
            get: function (t) {
                return this[a + t]
            },
            set: function (t, e) {
                return this[a + t] = e,
                    this
            },
            remove: function (t) {
                var e = a + t;
                return e in this && delete this[e]
            },
            clear: function () {
                for (var t in this)
                    t[0] === a && delete this[t]
            },
            keys: function () {
                var t = [];
                for (var e in this)
                    e[0] === a && t.push(e.slice(1));
                return t
            },
            values: function () {
                var t = [];
                for (var e in this)
                    e[0] === a && t.push(this[e]);
                return t
            },
            entries: function () {
                var t = [];
                for (var e in this)
                    e[0] === a && t.push({
                        key: e.slice(1),
                        value: this[e]
                    });
                return t
            },
            size: function () {
                var t = 0;
                for (var e in this)
                    e[0] === a && ++t;
                return t
            },
            empty: function () {
                for (var t in this)
                    if (t[0] === a)
                        return !1;
                return !0
            },
            each: function (t) {
                for (var e in this)
                    e[0] === a && t(this[e], e.slice(1), this)
            }
        };
        var o = r;
        function c() { }
        var l = o.prototype;
        function u(t, e) {
            var s = new c;
            if (t instanceof c)
                t.each((function (t) {
                    s.add(t)
                }
                ));
            else if (t) {
                var n = -1
                    , a = t.length;
                if (null == e)
                    while (++n < a)
                        s.add(t[n]);
                else
                    while (++n < a)
                        s.add(e(t[n], n, t))
            }
            return s
        }
        c.prototype = u.prototype = {
            constructor: c,
            has: l.has,
            add: function (t) {
                return t += "",
                    this[a + t] = t,
                    this
            },
            remove: l.remove,
            clear: l.clear,
            values: l.keys,
            size: l.size,
            empty: l.empty,
            each: l.each
        };
        var d = Array.prototype
            , h = d.map
            , p = d.slice
            , f = {
                name: "implicit"
            };
        function v(t) {
            var e = o()
                , s = []
                , n = f;
            function a(a) {
                var i = a + ""
                    , r = e.get(i);
                if (!r) {
                    if (n !== f)
                        return n;
                    e.set(i, r = s.push(a))
                }
                return t[(r - 1) % t.length]
            }
            return t = null == t ? [] : p.call(t),
                a.domain = function (t) {
                    if (!arguments.length)
                        return s.slice();
                    s = [],
                        e = o();
                    var n, i, r = -1, c = t.length;
                    while (++r < c)
                        e.has(i = (n = t[r]) + "") || e.set(i, s.push(n));
                    return a
                }
                ,
                a.range = function (e) {
                    return arguments.length ? (t = p.call(e),
                        a) : t.slice()
                }
                ,
                a.unknown = function (t) {
                    return arguments.length ? (n = t,
                        a) : n
                }
                ,
                a.copy = function () {
                    return v().domain(s).range(t).unknown(n)
                }
                ,
                a
        }
        function m() {
            var t, e, s = v().unknown(void 0), a = s.domain, i = s.range, r = [0, 1], o = !1, c = 0, l = 0, u = .5;
            function d() {
                var s = a().length
                    , d = r[1] < r[0]
                    , h = r[d - 0]
                    , p = r[1 - d];
                t = (p - h) / Math.max(1, s - c + 2 * l),
                    o && (t = Math.floor(t)),
                    h += (p - h - t * (s - c)) * u,
                    e = t * (1 - c),
                    o && (h = Math.round(h),
                        e = Math.round(e));
                var f = Object(n["h"])(s).map((function (e) {
                    return h + t * e
                }
                ));
                return i(d ? f.reverse() : f)
            }
            return delete s.unknown,
                s.domain = function (t) {
                    return arguments.length ? (a(t),
                        d()) : a()
                }
                ,
                s.range = function (t) {
                    return arguments.length ? (r = [+t[0], +t[1]],
                        d()) : r.slice()
                }
                ,
                s.rangeRound = function (t) {
                    return r = [+t[0], +t[1]],
                        o = !0,
                        d()
                }
                ,
                s.bandwidth = function () {
                    return e
                }
                ,
                s.step = function () {
                    return t
                }
                ,
                s.round = function (t) {
                    return arguments.length ? (o = !!t,
                        d()) : o
                }
                ,
                s.padding = function (t) {
                    return arguments.length ? (c = l = Math.max(0, Math.min(1, t)),
                        d()) : c
                }
                ,
                s.paddingInner = function (t) {
                    return arguments.length ? (c = Math.max(0, Math.min(1, t)),
                        d()) : c
                }
                ,
                s.paddingOuter = function (t) {
                    return arguments.length ? (l = Math.max(0, Math.min(1, t)),
                        d()) : l
                }
                ,
                s.align = function (t) {
                    return arguments.length ? (u = Math.max(0, Math.min(1, t)),
                        d()) : u
                }
                ,
                s.copy = function () {
                    return m().domain(a()).range(r).round(o).paddingInner(c).paddingOuter(l).align(u)
                }
                ,
                d()
        }
        var _ = s("e317")
            , g = s("166a")
            , b = s("e360")
            , y = function (t, e) {
                e || (e = []);
                var s, n = t ? Math.min(e.length, t.length) : 0, a = e.slice();
                return function (i) {
                    for (s = 0; s < n; ++s)
                        a[s] = t[s] * (1 - i) + e[s] * i;
                    return a
                }
            };
        function C(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        }
        function w(t, e) {
            var s, n = e ? e.length : 0, a = t ? Math.min(n, t.length) : 0, i = new Array(a), r = new Array(n);
            for (s = 0; s < a; ++s)
                i[s] = E(t[s], e[s]);
            for (; s < n; ++s)
                r[s] = e[s];
            return function (t) {
                for (s = 0; s < a; ++s)
                    r[s] = i[s](t);
                return r
            }
        }
        var x = function (t, e) {
            var s = new Date;
            return t = +t,
                e = +e,
                function (n) {
                    return s.setTime(t * (1 - n) + e * n),
                        s
                }
        }
            , T = function (t, e) {
                var s, n = {}, a = {};
                for (s in null !== t && "object" === typeof t || (t = {}),
                    null !== e && "object" === typeof e || (e = {}),
                    e)
                    s in t ? n[s] = E(t[s], e[s]) : a[s] = e[s];
                return function (t) {
                    for (s in n)
                        a[s] = n[s](t);
                    return a
                }
            }
            , k = s("90ef")
            , O = s("c698")
            , E = function (t, e) {
                var s, n = typeof e;
                return null == e || "boolean" === n ? Object(O["a"])(e) : ("number" === n ? _["a"] : "string" === n ? (s = Object(g["e"])(e)) ? (e = s,
                    b["a"]) : k["a"] : e instanceof g["e"] ? b["a"] : e instanceof Date ? x : C(e) ? y : Array.isArray(e) ? w : "function" !== typeof e.valueOf && "function" !== typeof e.toString || isNaN(e) ? T : _["a"])(t, e)
            }
            , S = function (t, e) {
                return t = +t,
                    e = +e,
                    function (s) {
                        return Math.round(t * (1 - s) + e * s)
                    }
            }
            , P = function (t) {
                return function () {
                    return t
                }
            }
            , M = function (t) {
                return +t
            }
            , N = [0, 1];
        function D(t, e) {
            return (e -= t = +t) ? function (s) {
                return (s - t) / e
            }
                : P(e)
        }
        function A(t) {
            return function (e, s) {
                var n = t(e = +e, s = +s);
                return function (t) {
                    return t <= e ? 0 : t >= s ? 1 : n(t)
                }
            }
        }
        function L(t) {
            return function (e, s) {
                var n = t(e = +e, s = +s);
                return function (t) {
                    return t <= 0 ? e : t >= 1 ? s : n(t)
                }
            }
        }
        function I(t, e, s, n) {
            var a = t[0]
                , i = t[1]
                , r = e[0]
                , o = e[1];
            return i < a ? (a = s(i, a),
                r = n(o, r)) : (a = s(a, i),
                    r = n(r, o)),
                function (t) {
                    return r(a(t))
                }
        }
        function R(t, e, s, a) {
            var i = Math.min(t.length, e.length) - 1
                , r = new Array(i)
                , o = new Array(i)
                , c = -1;
            t[i] < t[0] && (t = t.slice().reverse(),
                e = e.slice().reverse());
            while (++c < i)
                r[c] = s(t[c], t[c + 1]),
                    o[c] = a(e[c], e[c + 1]);
            return function (e) {
                var s = Object(n["b"])(t, e, 1, i) - 1;
                return o[s](r[s](e))
            }
        }
        function q(t, e) {
            return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }
        function j(t, e) {
            var s, n, a, i = N, r = N, o = E, c = !1;
            function l() {
                return s = Math.min(i.length, r.length) > 2 ? R : I,
                    n = a = null,
                    u
            }
            function u(e) {
                return (n || (n = s(i, r, c ? A(t) : t, o)))(+e)
            }
            return u.invert = function (t) {
                return (a || (a = s(r, i, D, c ? L(e) : e)))(+t)
            }
                ,
                u.domain = function (t) {
                    return arguments.length ? (i = h.call(t, M),
                        l()) : i.slice()
                }
                ,
                u.range = function (t) {
                    return arguments.length ? (r = p.call(t),
                        l()) : r.slice()
                }
                ,
                u.rangeRound = function (t) {
                    return r = p.call(t),
                        o = S,
                        l()
                }
                ,
                u.clamp = function (t) {
                    return arguments.length ? (c = !!t,
                        l()) : c
                }
                ,
                u.interpolate = function (t) {
                    return arguments.length ? (o = t,
                        l()) : o
                }
                ,
                l()
        }
        var U = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function F(t) {
            if (!(e = U.exec(t)))
                throw new Error("invalid format: " + t);
            var e;
            return new H({
                fill: e[1],
                align: e[2],
                sign: e[3],
                symbol: e[4],
                zero: e[5],
                width: e[6],
                comma: e[7],
                precision: e[8] && e[8].slice(1),
                trim: e[9],
                type: e[10]
            })
        }
        function H(t) {
            this.fill = void 0 === t.fill ? " " : t.fill + "",
                this.align = void 0 === t.align ? ">" : t.align + "",
                this.sign = void 0 === t.sign ? "-" : t.sign + "",
                this.symbol = void 0 === t.symbol ? "" : t.symbol + "",
                this.zero = !!t.zero,
                this.width = void 0 === t.width ? void 0 : +t.width,
                this.comma = !!t.comma,
                this.precision = void 0 === t.precision ? void 0 : +t.precision,
                this.trim = !!t.trim,
                this.type = void 0 === t.type ? "" : t.type + ""
        }
        F.prototype = H.prototype,
            H.prototype.toString = function () {
                return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
            }
            ;
        var Y = function (t) {
            return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10)
        };
        function $(t, e) {
            if ((s = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
                return null;
            var s, n = t.slice(0, s);
            return [n.length > 1 ? n[0] + n.slice(2) : n, +t.slice(s + 1)]
        }
        var B, V, z, G, Q = function (t) {
            return t = $(Math.abs(t)),
                t ? t[1] : NaN
        }, W = function (t, e) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Q(e) / 3))) - Q(Math.abs(t)))
        }, K = function (t, e) {
            return function (s, n) {
                var a = s.length
                    , i = []
                    , r = 0
                    , o = t[0]
                    , c = 0;
                while (a > 0 && o > 0) {
                    if (c + o + 1 > n && (o = Math.max(1, n - c)),
                        i.push(s.substring(a -= o, a + o)),
                        (c += o + 1) > n)
                        break;
                    o = t[r = (r + 1) % t.length]
                }
                return i.reverse().join(e)
            }
        }, J = function (t) {
            return function (e) {
                return e.replace(/[0-9]/g, (function (e) {
                    return t[+e]
                }
                ))
            }
        }, Z = function (t) {
            t: for (var e, s = t.length, n = 1, a = -1; n < s; ++n)
                switch (t[n]) {
                    case ".":
                        a = e = n;
                        break;
                    case "0":
                        0 === a && (a = n),
                            e = n;
                        break;
                    default:
                        if (!+t[n])
                            break t;
                        a > 0 && (a = 0);
                        break
                }
            return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
        }, X = function (t, e) {
            var s = $(t, e);
            if (!s)
                return t + "";
            var n = s[0]
                , a = s[1]
                , i = a - (B = 3 * Math.max(-8, Math.min(8, Math.floor(a / 3)))) + 1
                , r = n.length;
            return i === r ? n : i > r ? n + new Array(i - r + 1).join("0") : i > 0 ? n.slice(0, i) + "." + n.slice(i) : "0." + new Array(1 - i).join("0") + $(t, Math.max(0, e + i - 1))[0]
        }, tt = function (t, e) {
            var s = $(t, e);
            if (!s)
                return t + "";
            var n = s[0]
                , a = s[1];
            return a < 0 ? "0." + new Array(-a).join("0") + n : n.length > a + 1 ? n.slice(0, a + 1) + "." + n.slice(a + 1) : n + new Array(a - n.length + 2).join("0")
        }, et = {
            "%": function (t, e) {
                return (100 * t).toFixed(e)
            },
            b: function (t) {
                return Math.round(t).toString(2)
            },
            c: function (t) {
                return t + ""
            },
            d: Y,
            e: function (t, e) {
                return t.toExponential(e)
            },
            f: function (t, e) {
                return t.toFixed(e)
            },
            g: function (t, e) {
                return t.toPrecision(e)
            },
            o: function (t) {
                return Math.round(t).toString(8)
            },
            p: function (t, e) {
                return tt(100 * t, e)
            },
            r: tt,
            s: X,
            X: function (t) {
                return Math.round(t).toString(16).toUpperCase()
            },
            x: function (t) {
                return Math.round(t).toString(16)
            }
        }, st = function (t) {
            return t
        }, nt = Array.prototype.map, at = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], it = function (t) {
            var e = void 0 === t.grouping || void 0 === t.thousands ? st : K(nt.call(t.grouping, Number), t.thousands + "")
                , s = void 0 === t.currency ? "" : t.currency[0] + ""
                , n = void 0 === t.currency ? "" : t.currency[1] + ""
                , a = void 0 === t.decimal ? "." : t.decimal + ""
                , i = void 0 === t.numerals ? st : J(nt.call(t.numerals, String))
                , r = void 0 === t.percent ? "%" : t.percent + ""
                , o = void 0 === t.minus ? "-" : t.minus + ""
                , c = void 0 === t.nan ? "NaN" : t.nan + "";
            function l(t) {
                t = F(t);
                var l = t.fill
                    , u = t.align
                    , d = t.sign
                    , h = t.symbol
                    , p = t.zero
                    , f = t.width
                    , v = t.comma
                    , m = t.precision
                    , _ = t.trim
                    , g = t.type;
                "n" === g ? (v = !0,
                    g = "g") : et[g] || (void 0 === m && (m = 12),
                        _ = !0,
                        g = "g"),
                    (p || "0" === l && "=" === u) && (p = !0,
                        l = "0",
                        u = "=");
                var b = "$" === h ? s : "#" === h && /[boxX]/.test(g) ? "0" + g.toLowerCase() : ""
                    , y = "$" === h ? n : /[%p]/.test(g) ? r : ""
                    , C = et[g]
                    , w = /[defgprs%]/.test(g);
                function x(t) {
                    var s, n, r, h = b, x = y;
                    if ("c" === g)
                        x = C(t) + x,
                            t = "";
                    else {
                        t = +t;
                        var T = t < 0 || 1 / t < 0;
                        if (t = isNaN(t) ? c : C(Math.abs(t), m),
                            _ && (t = Z(t)),
                            T && 0 === +t && "+" !== d && (T = !1),
                            h = (T ? "(" === d ? d : o : "-" === d || "(" === d ? "" : d) + h,
                            x = ("s" === g ? at[8 + B / 3] : "") + x + (T && "(" === d ? ")" : ""),
                            w) {
                            s = -1,
                                n = t.length;
                            while (++s < n)
                                if (r = t.charCodeAt(s),
                                    48 > r || r > 57) {
                                    x = (46 === r ? a + t.slice(s + 1) : t.slice(s)) + x,
                                        t = t.slice(0, s);
                                    break
                                }
                        }
                    }
                    v && !p && (t = e(t, 1 / 0));
                    var k = h.length + t.length + x.length
                        , O = k < f ? new Array(f - k + 1).join(l) : "";
                    switch (v && p && (t = e(O + t, O.length ? f - x.length : 1 / 0),
                        O = ""),
                    u) {
                        case "<":
                            t = h + t + x + O;
                            break;
                        case "=":
                            t = h + O + t + x;
                            break;
                        case "^":
                            t = O.slice(0, k = O.length >> 1) + h + t + x + O.slice(k);
                            break;
                        default:
                            t = O + h + t + x;
                            break
                    }
                    return i(t)
                }
                return m = void 0 === m ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, m)) : Math.max(0, Math.min(20, m)),
                    x.toString = function () {
                        return t + ""
                    }
                    ,
                    x
            }
            function u(t, e) {
                var s = l((t = F(t),
                    t.type = "f",
                    t))
                    , n = 3 * Math.max(-8, Math.min(8, Math.floor(Q(e) / 3)))
                    , a = Math.pow(10, -n)
                    , i = at[8 + n / 3];
                return function (t) {
                    return s(a * t) + i
                }
            }
            return {
                format: l,
                formatPrefix: u
            }
        };
        function rt(t) {
            return V = it(t),
                z = V.format,
                G = V.formatPrefix,
                V
        }
        rt({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""],
            minus: "-"
        });
        var ot = function (t, e) {
            return t = Math.abs(t),
                e = Math.abs(e) - t,
                Math.max(0, Q(e) - Q(t)) + 1
        }
            , ct = function (t) {
                return Math.max(0, -Q(Math.abs(t)))
            }
            , lt = function (t, e, s) {
                var a, i = t[0], r = t[t.length - 1], o = Object(n["j"])(i, r, null == e ? 10 : e);
                switch (s = F(null == s ? ",f" : s),
                s.type) {
                    case "s":
                        var c = Math.max(Math.abs(i), Math.abs(r));
                        return null != s.precision || isNaN(a = W(o, c)) || (s.precision = a),
                            G(s, c);
                    case "":
                    case "e":
                    case "g":
                    case "p":
                    case "r":
                        null != s.precision || isNaN(a = ot(o, Math.max(Math.abs(i), Math.abs(r)))) || (s.precision = a - ("e" === s.type));
                        break;
                    case "f":
                    case "%":
                        null != s.precision || isNaN(a = ct(o)) || (s.precision = a - 2 * ("%" === s.type));
                        break
                }
                return z(s)
            };
        function ut(t) {
            var e = t.domain;
            return t.ticks = function (t) {
                var s = e();
                return Object(n["k"])(s[0], s[s.length - 1], null == t ? 10 : t)
            }
                ,
                t.tickFormat = function (t, s) {
                    return lt(e(), t, s)
                }
                ,
                t.nice = function (s) {
                    null == s && (s = 10);
                    var a, i = e(), r = 0, o = i.length - 1, c = i[r], l = i[o];
                    return l < c && (a = c,
                        c = l,
                        l = a,
                        a = r,
                        r = o,
                        o = a),
                        a = Object(n["i"])(c, l, s),
                        a > 0 ? (c = Math.floor(c / a) * a,
                            l = Math.ceil(l / a) * a,
                            a = Object(n["i"])(c, l, s)) : a < 0 && (c = Math.ceil(c * a) / a,
                                l = Math.floor(l * a) / a,
                                a = Object(n["i"])(c, l, s)),
                        a > 0 ? (i[r] = Math.floor(c / a) * a,
                            i[o] = Math.ceil(l / a) * a,
                            e(i)) : a < 0 && (i[r] = Math.ceil(c * a) / a,
                                i[o] = Math.floor(l * a) / a,
                                e(i)),
                        t
                }
                ,
                t
        }
        function dt() {
            var t = j(D, _["a"]);
            return t.copy = function () {
                return q(t, dt())
            }
                ,
                ut(t)
        }
        var ht = function (t, e) {
            t = t.slice();
            var s, n = 0, a = t.length - 1, i = t[n], r = t[a];
            return r < i && (s = n,
                n = a,
                a = s,
                s = i,
                i = r,
                r = s),
                t[n] = e.floor(i),
                t[a] = e.ceil(r),
                t
        };
        function pt(t, e) {
            return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
        }
        function ft() {
            var t = 1
                , e = j(n, a)
                , s = e.domain;
            function n(e, s) {
                return (s = pt(s, t) - (e = pt(e, t))) ? function (n) {
                    return (pt(n, t) - e) / s
                }
                    : P(s)
            }
            function a(e, s) {
                return s = pt(s, t) - (e = pt(e, t)),
                    function (n) {
                        return pt(e + s * n, 1 / t)
                    }
            }
            return e.exponent = function (e) {
                return arguments.length ? (t = +e,
                    s(s())) : t
            }
                ,
                e.copy = function () {
                    return q(e, ft().exponent(t))
                }
                ,
                ut(e)
        }
        var vt = s("a15a")
            , mt = s("18e2")
            , _t = Object(mt["a"])((function (t) {
                t.setDate(1),
                    t.setHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setMonth(t.getMonth() + e)
            }
            ), (function (t, e) {
                return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear())
            }
            ), (function (t) {
                return t.getMonth()
            }
            ))
            , gt = _t
            , bt = (_t.range,
                s("b14c"))
            , yt = s("742c")
            , Ct = s("1738")
            , wt = Object(mt["a"])((function (t) {
                t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ct["d"] - t.getMinutes() * Ct["c"])
            }
            ), (function (t, e) {
                t.setTime(+t + e * Ct["b"])
            }
            ), (function (t, e) {
                return (e - t) / Ct["b"]
            }
            ), (function (t) {
                return t.getHours()
            }
            ))
            , xt = wt
            , Tt = (wt.range,
                Object(mt["a"])((function (t) {
                    t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ct["d"])
                }
                ), (function (t, e) {
                    t.setTime(+t + e * Ct["c"])
                }
                ), (function (t, e) {
                    return (e - t) / Ct["c"]
                }
                ), (function (t) {
                    return t.getMinutes()
                }
                )))
            , kt = Tt
            , Ot = (Tt.range,
                Object(mt["a"])((function (t) {
                    t.setTime(t - t.getMilliseconds())
                }
                ), (function (t, e) {
                    t.setTime(+t + e * Ct["d"])
                }
                ), (function (t, e) {
                    return (e - t) / Ct["d"]
                }
                ), (function (t) {
                    return t.getUTCSeconds()
                }
                )))
            , Et = Ot
            , St = (Ot.range,
                Object(mt["a"])((function () { }
                ), (function (t, e) {
                    t.setTime(+t + e)
                }
                ), (function (t, e) {
                    return e - t
                }
                )));
        St.every = function (t) {
            return t = Math.floor(t),
                isFinite(t) && t > 0 ? t > 1 ? Object(mt["a"])((function (e) {
                    e.setTime(Math.floor(e / t) * t)
                }
                ), (function (e, s) {
                    e.setTime(+e + s * t)
                }
                ), (function (e, s) {
                    return (s - e) / t
                }
                )) : St : null
        }
            ;
        var Pt = St
            , Mt = (St.range,
                s("2739"))
            , Nt = s("6eb2")
            , Dt = s("77ae");
        function At(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return e.setFullYear(t.y),
                    e
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }
        function Lt(t) {
            if (0 <= t.y && t.y < 100) {
                var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return e.setUTCFullYear(t.y),
                    e
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }
        function It(t, e, s) {
            return {
                y: t,
                m: e,
                d: s,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }
        function Rt(t) {
            var e = t.dateTime
                , s = t.date
                , n = t.time
                , a = t.periods
                , i = t.days
                , r = t.shortDays
                , o = t.months
                , c = t.shortMonths
                , l = Vt(a)
                , u = zt(a)
                , d = Vt(i)
                , h = zt(i)
                , p = Vt(r)
                , f = zt(r)
                , v = Vt(o)
                , m = zt(o)
                , _ = Vt(c)
                , g = zt(c)
                , b = {
                    a: A,
                    A: L,
                    b: I,
                    B: R,
                    c: null,
                    d: pe,
                    e: pe,
                    f: ge,
                    g: Pe,
                    G: Ne,
                    H: fe,
                    I: ve,
                    j: me,
                    L: _e,
                    m: be,
                    M: ye,
                    p: q,
                    q: j,
                    Q: ts,
                    s: es,
                    S: Ce,
                    u: we,
                    U: xe,
                    V: ke,
                    w: Oe,
                    W: Ee,
                    x: null,
                    X: null,
                    y: Se,
                    Y: Me,
                    Z: De,
                    "%": Xe
                }
                , y = {
                    a: U,
                    A: F,
                    b: H,
                    B: Y,
                    c: null,
                    d: Ae,
                    e: Ae,
                    f: je,
                    g: We,
                    G: Je,
                    H: Le,
                    I: Ie,
                    j: Re,
                    L: qe,
                    m: Ue,
                    M: Fe,
                    p: $,
                    q: B,
                    Q: ts,
                    s: es,
                    S: He,
                    u: Ye,
                    U: $e,
                    V: Ve,
                    w: ze,
                    W: Ge,
                    x: null,
                    X: null,
                    y: Qe,
                    Y: Ke,
                    Z: Ze,
                    "%": Xe
                }
                , C = {
                    a: O,
                    A: E,
                    b: S,
                    B: P,
                    c: M,
                    d: ne,
                    e: ne,
                    f: le,
                    g: Xt,
                    G: Zt,
                    H: ie,
                    I: ie,
                    j: ae,
                    L: ce,
                    m: se,
                    M: re,
                    p: k,
                    q: ee,
                    Q: de,
                    s: he,
                    S: oe,
                    u: Qt,
                    U: Wt,
                    V: Kt,
                    w: Gt,
                    W: Jt,
                    x: N,
                    X: D,
                    y: Xt,
                    Y: Zt,
                    Z: te,
                    "%": ue
                };
            function w(t, e) {
                return function (s) {
                    var n, a, i, r = [], o = -1, c = 0, l = t.length;
                    s instanceof Date || (s = new Date(+s));
                    while (++o < l)
                        37 === t.charCodeAt(o) && (r.push(t.slice(c, o)),
                            null != (a = Ut[n = t.charAt(++o)]) ? n = t.charAt(++o) : a = "e" === n ? " " : "0",
                            (i = e[n]) && (n = i(s, a)),
                            r.push(n),
                            c = o + 1);
                    return r.push(t.slice(c, o)),
                        r.join("")
                }
            }
            function x(t, e) {
                return function (s) {
                    var n, a, i = It(1900, void 0, 1), r = T(i, t, s += "", 0);
                    if (r != s.length)
                        return null;
                    if ("Q" in i)
                        return new Date(i.Q);
                    if ("s" in i)
                        return new Date(1e3 * i.s + ("L" in i ? i.L : 0));
                    if (e && !("Z" in i) && (i.Z = 0),
                        "p" in i && (i.H = i.H % 12 + 12 * i.p),
                        void 0 === i.m && (i.m = "q" in i ? i.q : 0),
                        "V" in i) {
                        if (i.V < 1 || i.V > 53)
                            return null;
                        "w" in i || (i.w = 1),
                            "Z" in i ? (n = Lt(It(i.y, 0, 1)),
                                a = n.getUTCDay(),
                                n = a > 4 || 0 === a ? Mt["a"].ceil(n) : Object(Mt["a"])(n),
                                n = Nt["a"].offset(n, 7 * (i.V - 1)),
                                i.y = n.getUTCFullYear(),
                                i.m = n.getUTCMonth(),
                                i.d = n.getUTCDate() + (i.w + 6) % 7) : (n = At(It(i.y, 0, 1)),
                                    a = n.getDay(),
                                    n = a > 4 || 0 === a ? bt["a"].ceil(n) : Object(bt["a"])(n),
                                    n = yt["a"].offset(n, 7 * (i.V - 1)),
                                    i.y = n.getFullYear(),
                                    i.m = n.getMonth(),
                                    i.d = n.getDate() + (i.w + 6) % 7)
                    } else
                        ("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0),
                            a = "Z" in i ? Lt(It(i.y, 0, 1)).getUTCDay() : At(It(i.y, 0, 1)).getDay(),
                            i.m = 0,
                            i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (a + 5) % 7 : i.w + 7 * i.U - (a + 6) % 7);
                    return "Z" in i ? (i.H += i.Z / 100 | 0,
                        i.M += i.Z % 100,
                        Lt(i)) : At(i)
                }
            }
            function T(t, e, s, n) {
                var a, i, r = 0, o = e.length, c = s.length;
                while (r < o) {
                    if (n >= c)
                        return -1;
                    if (a = e.charCodeAt(r++),
                        37 === a) {
                        if (a = e.charAt(r++),
                            i = C[a in Ut ? e.charAt(r++) : a],
                            !i || (n = i(t, s, n)) < 0)
                            return -1
                    } else if (a != s.charCodeAt(n++))
                        return -1
                }
                return n
            }
            function k(t, e, s) {
                var n = l.exec(e.slice(s));
                return n ? (t.p = u[n[0].toLowerCase()],
                    s + n[0].length) : -1
            }
            function O(t, e, s) {
                var n = p.exec(e.slice(s));
                return n ? (t.w = f[n[0].toLowerCase()],
                    s + n[0].length) : -1
            }
            function E(t, e, s) {
                var n = d.exec(e.slice(s));
                return n ? (t.w = h[n[0].toLowerCase()],
                    s + n[0].length) : -1
            }
            function S(t, e, s) {
                var n = _.exec(e.slice(s));
                return n ? (t.m = g[n[0].toLowerCase()],
                    s + n[0].length) : -1
            }
            function P(t, e, s) {
                var n = v.exec(e.slice(s));
                return n ? (t.m = m[n[0].toLowerCase()],
                    s + n[0].length) : -1
            }
            function M(t, s, n) {
                return T(t, e, s, n)
            }
            function N(t, e, n) {
                return T(t, s, e, n)
            }
            function D(t, e, s) {
                return T(t, n, e, s)
            }
            function A(t) {
                return r[t.getDay()]
            }
            function L(t) {
                return i[t.getDay()]
            }
            function I(t) {
                return c[t.getMonth()]
            }
            function R(t) {
                return o[t.getMonth()]
            }
            function q(t) {
                return a[+(t.getHours() >= 12)]
            }
            function j(t) {
                return 1 + ~~(t.getMonth() / 3)
            }
            function U(t) {
                return r[t.getUTCDay()]
            }
            function F(t) {
                return i[t.getUTCDay()]
            }
            function H(t) {
                return c[t.getUTCMonth()]
            }
            function Y(t) {
                return o[t.getUTCMonth()]
            }
            function $(t) {
                return a[+(t.getUTCHours() >= 12)]
            }
            function B(t) {
                return 1 + ~~(t.getUTCMonth() / 3)
            }
            return b.x = w(s, b),
                b.X = w(n, b),
                b.c = w(e, b),
                y.x = w(s, y),
                y.X = w(n, y),
                y.c = w(e, y),
            {
                format: function (t) {
                    var e = w(t += "", b);
                    return e.toString = function () {
                        return t
                    }
                        ,
                        e
                },
                parse: function (t) {
                    var e = x(t += "", !1);
                    return e.toString = function () {
                        return t
                    }
                        ,
                        e
                },
                utcFormat: function (t) {
                    var e = w(t += "", y);
                    return e.toString = function () {
                        return t
                    }
                        ,
                        e
                },
                utcParse: function (t) {
                    var e = x(t += "", !0);
                    return e.toString = function () {
                        return t
                    }
                        ,
                        e
                }
            }
        }
        var qt, jt, Ut = {
            "-": "",
            _: " ",
            0: "0"
        }, Ft = /^\s*\d+/, Ht = /^%/, Yt = /[\\^$*+?|[\]().{}]/g;
        function $t(t, e, s) {
            var n = t < 0 ? "-" : ""
                , a = (n ? -t : t) + ""
                , i = a.length;
            return n + (i < s ? new Array(s - i + 1).join(e) + a : a)
        }
        function Bt(t) {
            return t.replace(Yt, "\\$&")
        }
        function Vt(t) {
            return new RegExp("^(?:" + t.map(Bt).join("|") + ")", "i")
        }
        function zt(t) {
            var e = {}
                , s = -1
                , n = t.length;
            while (++s < n)
                e[t[s].toLowerCase()] = s;
            return e
        }
        function Gt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 1));
            return n ? (t.w = +n[0],
                s + n[0].length) : -1
        }
        function Qt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 1));
            return n ? (t.u = +n[0],
                s + n[0].length) : -1
        }
        function Wt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.U = +n[0],
                s + n[0].length) : -1
        }
        function Kt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.V = +n[0],
                s + n[0].length) : -1
        }
        function Jt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.W = +n[0],
                s + n[0].length) : -1
        }
        function Zt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 4));
            return n ? (t.y = +n[0],
                s + n[0].length) : -1
        }
        function Xt(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3),
                s + n[0].length) : -1
        }
        function te(t, e, s) {
            var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(s, s + 6));
            return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")),
                s + n[0].length) : -1
        }
        function ee(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 1));
            return n ? (t.q = 3 * n[0] - 3,
                s + n[0].length) : -1
        }
        function se(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.m = n[0] - 1,
                s + n[0].length) : -1
        }
        function ne(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.d = +n[0],
                s + n[0].length) : -1
        }
        function ae(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 3));
            return n ? (t.m = 0,
                t.d = +n[0],
                s + n[0].length) : -1
        }
        function ie(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.H = +n[0],
                s + n[0].length) : -1
        }
        function re(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.M = +n[0],
                s + n[0].length) : -1
        }
        function oe(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 2));
            return n ? (t.S = +n[0],
                s + n[0].length) : -1
        }
        function ce(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 3));
            return n ? (t.L = +n[0],
                s + n[0].length) : -1
        }
        function le(t, e, s) {
            var n = Ft.exec(e.slice(s, s + 6));
            return n ? (t.L = Math.floor(n[0] / 1e3),
                s + n[0].length) : -1
        }
        function ue(t, e, s) {
            var n = Ht.exec(e.slice(s, s + 1));
            return n ? s + n[0].length : -1
        }
        function de(t, e, s) {
            var n = Ft.exec(e.slice(s));
            return n ? (t.Q = +n[0],
                s + n[0].length) : -1
        }
        function he(t, e, s) {
            var n = Ft.exec(e.slice(s));
            return n ? (t.s = +n[0],
                s + n[0].length) : -1
        }
        function pe(t, e) {
            return $t(t.getDate(), e, 2)
        }
        function fe(t, e) {
            return $t(t.getHours(), e, 2)
        }
        function ve(t, e) {
            return $t(t.getHours() % 12 || 12, e, 2)
        }
        function me(t, e) {
            return $t(1 + yt["a"].count(Object(vt["a"])(t), t), e, 3)
        }
        function _e(t, e) {
            return $t(t.getMilliseconds(), e, 3)
        }
        function ge(t, e) {
            return _e(t, e) + "000"
        }
        function be(t, e) {
            return $t(t.getMonth() + 1, e, 2)
        }
        function ye(t, e) {
            return $t(t.getMinutes(), e, 2)
        }
        function Ce(t, e) {
            return $t(t.getSeconds(), e, 2)
        }
        function we(t) {
            var e = t.getDay();
            return 0 === e ? 7 : e
        }
        function xe(t, e) {
            return $t(bt["b"].count(Object(vt["a"])(t) - 1, t), e, 2)
        }
        function Te(t) {
            var e = t.getDay();
            return e >= 4 || 0 === e ? Object(bt["c"])(t) : bt["c"].ceil(t)
        }
        function ke(t, e) {
            return t = Te(t),
                $t(bt["c"].count(Object(vt["a"])(t), t) + (4 === Object(vt["a"])(t).getDay()), e, 2)
        }
        function Oe(t) {
            return t.getDay()
        }
        function Ee(t, e) {
            return $t(bt["a"].count(Object(vt["a"])(t) - 1, t), e, 2)
        }
        function Se(t, e) {
            return $t(t.getFullYear() % 100, e, 2)
        }
        function Pe(t, e) {
            return t = Te(t),
                $t(t.getFullYear() % 100, e, 2)
        }
        function Me(t, e) {
            return $t(t.getFullYear() % 1e4, e, 4)
        }
        function Ne(t, e) {
            var s = t.getDay();
            return t = s >= 4 || 0 === s ? Object(bt["c"])(t) : bt["c"].ceil(t),
                $t(t.getFullYear() % 1e4, e, 4)
        }
        function De(t) {
            var e = t.getTimezoneOffset();
            return (e > 0 ? "-" : (e *= -1,
                "+")) + $t(e / 60 | 0, "0", 2) + $t(e % 60, "0", 2)
        }
        function Ae(t, e) {
            return $t(t.getUTCDate(), e, 2)
        }
        function Le(t, e) {
            return $t(t.getUTCHours(), e, 2)
        }
        function Ie(t, e) {
            return $t(t.getUTCHours() % 12 || 12, e, 2)
        }
        function Re(t, e) {
            return $t(1 + Nt["a"].count(Object(Dt["a"])(t), t), e, 3)
        }
        function qe(t, e) {
            return $t(t.getUTCMilliseconds(), e, 3)
        }
        function je(t, e) {
            return qe(t, e) + "000"
        }
        function Ue(t, e) {
            return $t(t.getUTCMonth() + 1, e, 2)
        }
        function Fe(t, e) {
            return $t(t.getUTCMinutes(), e, 2)
        }
        function He(t, e) {
            return $t(t.getUTCSeconds(), e, 2)
        }
        function Ye(t) {
            var e = t.getUTCDay();
            return 0 === e ? 7 : e
        }
        function $e(t, e) {
            return $t(Mt["b"].count(Object(Dt["a"])(t) - 1, t), e, 2)
        }
        function Be(t) {
            var e = t.getUTCDay();
            return e >= 4 || 0 === e ? Object(Mt["c"])(t) : Mt["c"].ceil(t)
        }
        function Ve(t, e) {
            return t = Be(t),
                $t(Mt["c"].count(Object(Dt["a"])(t), t) + (4 === Object(Dt["a"])(t).getUTCDay()), e, 2)
        }
        function ze(t) {
            return t.getUTCDay()
        }
        function Ge(t, e) {
            return $t(Mt["a"].count(Object(Dt["a"])(t) - 1, t), e, 2)
        }
        function Qe(t, e) {
            return $t(t.getUTCFullYear() % 100, e, 2)
        }
        function We(t, e) {
            return t = Be(t),
                $t(t.getUTCFullYear() % 100, e, 2)
        }
        function Ke(t, e) {
            return $t(t.getUTCFullYear() % 1e4, e, 4)
        }
        function Je(t, e) {
            var s = t.getUTCDay();
            return t = s >= 4 || 0 === s ? Object(Mt["c"])(t) : Mt["c"].ceil(t),
                $t(t.getUTCFullYear() % 1e4, e, 4)
        }
        function Ze() {
            return "+0000"
        }
        function Xe() {
            return "%"
        }
        function ts(t) {
            return +t
        }
        function es(t) {
            return Math.floor(+t / 1e3)
        }
        function ss(t) {
            return qt = Rt(t),
                jt = qt.format,
                qt.parse,
                qt.utcFormat,
                qt.utcParse,
                qt
        }
        ss({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        var ns = 1e3
            , as = 60 * ns
            , is = 60 * as
            , rs = 24 * is
            , os = 7 * rs
            , cs = 30 * rs
            , ls = 365 * rs;
        function us(t) {
            return new Date(t)
        }
        function ds(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }
        function hs(t, e, s, a, i, r, o, c, l) {
            var u = j(D, _["a"])
                , d = u.invert
                , p = u.domain
                , f = l(".%L")
                , v = l(":%S")
                , m = l("%I:%M")
                , g = l("%I %p")
                , b = l("%a %d")
                , y = l("%b %d")
                , C = l("%B")
                , w = l("%Y")
                , x = [[o, 1, ns], [o, 5, 5 * ns], [o, 15, 15 * ns], [o, 30, 30 * ns], [r, 1, as], [r, 5, 5 * as], [r, 15, 15 * as], [r, 30, 30 * as], [i, 1, is], [i, 3, 3 * is], [i, 6, 6 * is], [i, 12, 12 * is], [a, 1, rs], [a, 2, 2 * rs], [s, 1, os], [e, 1, cs], [e, 3, 3 * cs], [t, 1, ls]];
            function T(n) {
                return (o(n) < n ? f : r(n) < n ? v : i(n) < n ? m : a(n) < n ? g : e(n) < n ? s(n) < n ? b : y : t(n) < n ? C : w)(n)
            }
            function k(e, s, a, i) {
                if (null == e && (e = 10),
                    "number" === typeof e) {
                    var r = Math.abs(a - s) / e
                        , o = Object(n["c"])((function (t) {
                            return t[2]
                        }
                        )).right(x, r);
                    o === x.length ? (i = Object(n["j"])(s / ls, a / ls, e),
                        e = t) : o ? (o = x[r / x[o - 1][2] < x[o][2] / r ? o - 1 : o],
                            i = o[1],
                            e = o[0]) : (i = Math.max(Object(n["j"])(s, a, e), 1),
                                e = c)
                }
                return null == i ? e : e.every(i)
            }
            return u.invert = function (t) {
                return new Date(d(t))
            }
                ,
                u.domain = function (t) {
                    return arguments.length ? p(h.call(t, ds)) : p().map(us)
                }
                ,
                u.ticks = function (t, e) {
                    var s, n = p(), a = n[0], i = n[n.length - 1], r = i < a;
                    return r && (s = a,
                        a = i,
                        i = s),
                        s = k(t, a, i, e),
                        s = s ? s.range(a, i + 1) : [],
                        r ? s.reverse() : s
                }
                ,
                u.tickFormat = function (t, e) {
                    return null == e ? T : l(e)
                }
                ,
                u.nice = function (t, e) {
                    var s = p();
                    return (t = k(t, s[0], s[s.length - 1], e)) ? p(ht(s, t)) : u
                }
                ,
                u.copy = function () {
                    return q(u, hs(t, e, s, a, i, r, o, c, l))
                }
                ,
                u
        }
        var ps = function () {
            return hs(vt["a"], gt, bt["b"], yt["a"], xt, kt, Et, Pt, jt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
        }
            , fs = Object(mt["a"])((function (t) {
                t.setUTCDate(1),
                    t.setUTCHours(0, 0, 0, 0)
            }
            ), (function (t, e) {
                t.setUTCMonth(t.getUTCMonth() + e)
            }
            ), (function (t, e) {
                return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear())
            }
            ), (function (t) {
                return t.getUTCMonth()
            }
            ))
            , vs = (fs.range,
                Object(mt["a"])((function (t) {
                    t.setUTCMinutes(0, 0, 0)
                }
                ), (function (t, e) {
                    t.setTime(+t + e * Ct["b"])
                }
                ), (function (t, e) {
                    return (e - t) / Ct["b"]
                }
                ), (function (t) {
                    return t.getUTCHours()
                }
                )))
            , ms = (vs.range,
                Object(mt["a"])((function (t) {
                    t.setUTCSeconds(0, 0)
                }
                ), (function (t, e) {
                    t.setTime(+t + e * Ct["c"])
                }
                ), (function (t, e) {
                    return (e - t) / Ct["c"]
                }
                ), (function (t) {
                    return t.getUTCMinutes()
                }
                )))
            , _s = (ms.range,
                function (t) {
                    return t.match(/.{6}/g).map((function (t) {
                        return "#" + t
                    }
                    ))
                }
            )
            , gs = (_s("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
                _s("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),
                _s("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),
                _s("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),
                s("63ad"))
            , bs = Math.PI / 180
            , ys = 180 / Math.PI
            , Cs = -.14861
            , ws = 1.78277
            , xs = -.29227
            , Ts = -.90649
            , ks = 1.97294
            , Os = ks * Ts
            , Es = ks * ws
            , Ss = ws * xs - Ts * Cs;
        function Ps(t) {
            if (t instanceof Ns)
                return new Ns(t.h, t.s, t.l, t.opacity);
            t instanceof g["b"] || (t = Object(g["g"])(t));
            var e = t.r / 255
                , s = t.g / 255
                , n = t.b / 255
                , a = (Ss * n + Os * e - Es * s) / (Ss + Os - Es)
                , i = n - a
                , r = (ks * (s - a) - xs * i) / Ts
                , o = Math.sqrt(r * r + i * i) / (ks * a * (1 - a))
                , c = o ? Math.atan2(r, i) * ys - 120 : NaN;
            return new Ns(c < 0 ? c + 360 : c, o, a, t.opacity)
        }
        function Ms(t, e, s, n) {
            return 1 === arguments.length ? Ps(t) : new Ns(t, e, s, null == n ? 1 : n)
        }
        function Ns(t, e, s, n) {
            this.h = +t,
                this.s = +e,
                this.l = +s,
                this.opacity = +n
        }
        Object(gs["a"])(Ns, Ms, Object(gs["b"])(g["a"], {
            brighter: function (t) {
                return t = null == t ? g["c"] : Math.pow(g["c"], t),
                    new Ns(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function (t) {
                return t = null == t ? g["d"] : Math.pow(g["d"], t),
                    new Ns(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function () {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * bs
                    , e = +this.l
                    , s = isNaN(this.s) ? 0 : this.s * e * (1 - e)
                    , n = Math.cos(t)
                    , a = Math.sin(t);
                return new g["b"](255 * (e + s * (Cs * n + ws * a)), 255 * (e + s * (xs * n + Ts * a)), 255 * (e + s * (ks * n)), this.opacity)
            }
        }));
        var Ds = s("b055");
        function As(t) {
            return function e(s) {
                function n(e, n) {
                    var a = t((e = Ms(e)).h, (n = Ms(n)).h)
                        , i = Object(Ds["a"])(e.s, n.s)
                        , r = Object(Ds["a"])(e.l, n.l)
                        , o = Object(Ds["a"])(e.opacity, n.opacity);
                    return function (t) {
                        return e.h = a(t),
                            e.s = i(t),
                            e.l = r(Math.pow(t, s)),
                            e.opacity = o(t),
                            e + ""
                    }
                }
                return s = +s,
                    n.gamma = e,
                    n
            }(1)
        }
        As(Ds["c"]);
        var Ls = As(Ds["a"]);
        Ls(Ms(300, .5, 0), Ms(-240, .5, 1)),
            Ls(Ms(-100, .75, .35), Ms(80, 1.5, .8)),
            Ls(Ms(260, .75, .35), Ms(80, 1.5, .8)),
            Ms();
        function Is(t) {
            var e = t.length;
            return function (s) {
                return t[Math.max(0, Math.min(e - 1, Math.floor(s * e)))]
            }
        }
        Is(_s("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
            Is(_s("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
            Is(_s("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
            Is(_s("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"))
    },
    e311: function (t, e, s) {
        "use strict";
        s.d(e, "b", (function () {
            return n
        }
        ));
        var n = "http://www.w3.org/1999/xhtml";
        e["a"] = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: n,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
    },
    e317: function (t, e, s) {
        "use strict";
        e["a"] = function (t, e) {
            return t = +t,
                e = +e,
                function (s) {
                    return t * (1 - s) + e * s
                }
        }
    },
    e360: function (t, e, s) {
        "use strict";
        var n = s("166a");
        function a(t, e, s, n, a) {
            var i = t * t
                , r = i * t;
            return ((1 - 3 * t + 3 * i - r) * e + (4 - 6 * i + 3 * r) * s + (1 + 3 * t + 3 * i - 3 * r) * n + r * a) / 6
        }
        var i = function (t) {
            var e = t.length - 1;
            return function (s) {
                var n = s <= 0 ? s = 0 : s >= 1 ? (s = 1,
                    e - 1) : Math.floor(s * e)
                    , i = t[n]
                    , r = t[n + 1]
                    , o = n > 0 ? t[n - 1] : 2 * i - r
                    , c = n < e - 1 ? t[n + 2] : 2 * r - i;
                return a((s - n / e) * e, o, i, r, c)
            }
        }
            , r = function (t) {
                var e = t.length;
                return function (s) {
                    var n = Math.floor(((s %= 1) < 0 ? ++s : s) * e)
                        , i = t[(n + e - 1) % e]
                        , r = t[n % e]
                        , o = t[(n + 1) % e]
                        , c = t[(n + 2) % e];
                    return a((s - n / e) * e, i, r, o, c)
                }
            }
            , o = s("b055");
        e["a"] = function t(e) {
            var s = Object(o["b"])(e);
            function a(t, e) {
                var a = s((t = Object(n["f"])(t)).r, (e = Object(n["f"])(e)).r)
                    , i = s(t.g, e.g)
                    , r = s(t.b, e.b)
                    , c = Object(o["a"])(t.opacity, e.opacity);
                return function (e) {
                    return t.r = a(e),
                        t.g = i(e),
                        t.b = r(e),
                        t.opacity = c(e),
                        t + ""
                }
            }
            return a.gamma = t,
                a
        }(1);
        function c(t) {
            return function (e) {
                var s, a, i = e.length, r = new Array(i), o = new Array(i), c = new Array(i);
                for (s = 0; s < i; ++s)
                    a = Object(n["f"])(e[s]),
                        r[s] = a.r || 0,
                        o[s] = a.g || 0,
                        c[s] = a.b || 0;
                return r = t(r),
                    o = t(o),
                    c = t(c),
                    a.opacity = 1,
                    function (t) {
                        return a.r = r(t),
                            a.g = o(t),
                            a.b = c(t),
                            a + ""
                    }
            }
        }
        c(i),
            c(r)
    },
    e452: function (t, e, s) {
        "use strict";
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return t.isShown && t.order ? s("modal", {
                directives: [{
                    name: "on-escape",
                    rawName: "v-on-escape",
                    value: t.close,
                    expression: "close"
                }],
                staticClass: "order-cancel-modal",
                on: {
                    close: t.close
                }
            }, [t.order.isExit ? t._e() : s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Cancel the order?")]), t._v(" "), t.order.isExit ? s("h2", {
                attrs: {
                    slot: "header"
                },
                slot: "header"
            }, [t._v("Exit the order?")]) : t._e(), t._v(" "), s("div", {
                attrs: {
                    slot: "body"
                },
                slot: "body"
            }, [s("span", {
                staticClass: "instrument"
            }, [s("span", {
                staticClass: "tradingsymbol"
            }, [t._v(t._s(t.order.tradingsymbol))]), s("br"), t._v(" "), s("span", {
                staticClass: "order-id"
            }, [t._v("#" + t._s(t.order.order_id))])])]), t._v(" "), s("div", {
                staticClass: "actions",
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("su-button", {
                class: ["buy" == t.order.transaction_type.toLowerCase() ? "button-orange" : "button-blue"],
                attrs: {
                    processing: t.cancelInProgress
                },
                nativeOn: {
                    click: function (e) {
                        return t.apiCancelOrder(t.order)
                    }
                }
            }, [t.order.isExit ? t._e() : s("span", [t._v("Cancel order")]), t._v(" "), t.order.isExit ? s("span", [t._v("Exit order")]) : t._e()]), t._v(" "), s("su-button", {
                staticClass: "button-outline",
                nativeOn: {
                    click: function (e) {
                        return t.close.apply(null, arguments)
                    }
                }
            }, [s("span", [t._v("Close")])])], 1)]) : t._e()
        }
            , a = []
            , i = s("3da7")
            , r = s("d9d2")
            , o = s("025e")
            , c = {
                name: "order-cancel-window",
                data() {
                    return {
                        isShown: !1,
                        order: null,
                        cancelInProgress: !1
                    }
                },
                created() {
                    this.$events.on(r["b"].EVENTS.ORDER_CANCEL, this.init)
                },
                methods: {
                    show() {
                        this.isShown = !0
                    },
                    close() {
                        this.isShown = !1
                    },
                    init(t) {
                        this.order = t,
                            this.show()
                    },
                    apiCancelOrder(t) {
                        let e = t.variety;
                        e === r["b"].VARIETY.AMO && -1 === t.status.toUpperCase().indexOf(r["b"].VARIETY.AMO.toUpperCase()) && (e = r["b"].VARIETY.REGULAR);
                        let s = {
                            order_id: t.order_id,
                            parent_order_id: t.parent_order_id,
                            variety: e
                        };
                        this.cancelInProgress = !0,
                            i["a"].cancelOrder(s.order_id, s).then(t => {
                                this.cancelInProgress = !1;
                                let e = t && t.data && t.data.data && t.data.data.order_id;
                                this.$toast.info({
                                    title: "Request sent",
                                    message: "Cancellation request for the order has been sent<br />Check the orderbook for status<br /><span class='order-id'>#" + e + "</span>",
                                    id: e,
                                    orientation: this.$toast.BOTTOM_RIGHT
                                }),
                                    this.$events.emit(r["b"].EVENTS.ORDER_CANCEL_SUCCESS, t),
                                    this.close()
                            }
                            ).catch(t => {
                                let e = Object(o["j"])(t);
                                this.cancelInProgress = !1,
                                    this.$toast.error({
                                        title: "Error",
                                        message: e.message,
                                        orientation: this.$toast.BOTTOM_RIGHT
                                    }),
                                    this.$events.emit(r["b"].EVENTS.ORDER_CANCEL_ERROR, e),
                                    this.close()
                            }
                            )
                    }
                }
            }
            , l = c
            , u = s("0c7c")
            , d = Object(u["a"])(l, n, a, !1, null, null, null);
        e["a"] = d.exports
    },
    e48b: function (t, e, s) {
        "use strict";
        s.d(e, "c", (function () {
            return St
        }
        )),
            s.d(e, "a", (function () {
                return Pt
            }
            ));
        var n = s("6fd3")
            , a = function (t) {
                "function" !== typeof t && (t = Object(n["a"])(t));
                for (var e = this._groups, s = e.length, a = new Array(s), i = 0; i < s; ++i)
                    for (var r, o, c = e[i], l = c.length, u = a[i] = new Array(l), d = 0; d < l; ++d)
                        (r = c[d]) && (o = t.call(r, r.__data__, d, c)) && ("__data__" in r && (o.__data__ = r.__data__),
                            u[d] = o);
                return new Pt(a, this._parents)
            }
            , i = s("4230")
            , r = function (t) {
                "function" !== typeof t && (t = Object(i["a"])(t));
                for (var e = this._groups, s = e.length, n = [], a = [], r = 0; r < s; ++r)
                    for (var o, c = e[r], l = c.length, u = 0; u < l; ++u)
                        (o = c[u]) && (n.push(t.call(o, o.__data__, u, c)),
                            a.push(o));
                return new Pt(n, a)
            }
            , o = s("0a78")
            , c = function (t) {
                "function" !== typeof t && (t = Object(o["a"])(t));
                for (var e = this._groups, s = e.length, n = new Array(s), a = 0; a < s; ++a)
                    for (var i, r = e[a], c = r.length, l = n[a] = [], u = 0; u < c; ++u)
                        (i = r[u]) && t.call(i, i.__data__, u, r) && l.push(i);
                return new Pt(n, this._parents)
            }
            , l = function (t) {
                return new Array(t.length)
            }
            , u = function () {
                return new Pt(this._enter || this._groups.map(l), this._parents)
            };
        function d(t, e) {
            this.ownerDocument = t.ownerDocument,
                this.namespaceURI = t.namespaceURI,
                this._next = null,
                this._parent = t,
                this.__data__ = e
        }
        d.prototype = {
            constructor: d,
            appendChild: function (t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function (t, e) {
                return this._parent.insertBefore(t, e)
            },
            querySelector: function (t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function (t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var h = function (t) {
            return function () {
                return t
            }
        }
            , p = "$";
        function f(t, e, s, n, a, i) {
            for (var r, o = 0, c = e.length, l = i.length; o < l; ++o)
                (r = e[o]) ? (r.__data__ = i[o],
                    n[o] = r) : s[o] = new d(t, i[o]);
            for (; o < c; ++o)
                (r = e[o]) && (a[o] = r)
        }
        function v(t, e, s, n, a, i, r) {
            var o, c, l, u = {}, h = e.length, f = i.length, v = new Array(h);
            for (o = 0; o < h; ++o)
                (c = e[o]) && (v[o] = l = p + r.call(c, c.__data__, o, e),
                    l in u ? a[o] = c : u[l] = c);
            for (o = 0; o < f; ++o)
                l = p + r.call(t, i[o], o, i),
                    (c = u[l]) ? (n[o] = c,
                        c.__data__ = i[o],
                        u[l] = null) : s[o] = new d(t, i[o]);
            for (o = 0; o < h; ++o)
                (c = e[o]) && u[v[o]] === c && (a[o] = c)
        }
        var m = function (t, e) {
            if (!t)
                return m = new Array(this.size()),
                    l = -1,
                    this.each((function (t) {
                        m[++l] = t
                    }
                    )),
                    m;
            var s = e ? v : f
                , n = this._parents
                , a = this._groups;
            "function" !== typeof t && (t = h(t));
            for (var i = a.length, r = new Array(i), o = new Array(i), c = new Array(i), l = 0; l < i; ++l) {
                var u = n[l]
                    , d = a[l]
                    , p = d.length
                    , m = t.call(u, u && u.__data__, l, n)
                    , _ = m.length
                    , g = o[l] = new Array(_)
                    , b = r[l] = new Array(_)
                    , y = c[l] = new Array(p);
                s(u, d, g, b, y, m, e);
                for (var C, w, x = 0, T = 0; x < _; ++x)
                    if (C = g[x]) {
                        x >= T && (T = x + 1);
                        while (!(w = b[T]) && ++T < _)
                            ;
                        C._next = w || null
                    }
            }
            return r = new Pt(r, n),
                r._enter = o,
                r._exit = c,
                r
        }
            , _ = function () {
                return new Pt(this._exit || this._groups.map(l), this._parents)
            }
            , g = function (t, e, s) {
                var n = this.enter()
                    , a = this
                    , i = this.exit();
                return n = "function" === typeof t ? t(n) : n.append(t + ""),
                    null != e && (a = e(a)),
                    null == s ? i.remove() : s(i),
                    n && a ? n.merge(a).order() : a
            }
            , b = function (t) {
                for (var e = this._groups, s = t._groups, n = e.length, a = s.length, i = Math.min(n, a), r = new Array(n), o = 0; o < i; ++o)
                    for (var c, l = e[o], u = s[o], d = l.length, h = r[o] = new Array(d), p = 0; p < d; ++p)
                        (c = l[p] || u[p]) && (h[p] = c);
                for (; o < n; ++o)
                    r[o] = e[o];
                return new Pt(r, this._parents)
            }
            , y = function () {
                for (var t = this._groups, e = -1, s = t.length; ++e < s;)
                    for (var n, a = t[e], i = a.length - 1, r = a[i]; --i >= 0;)
                        (n = a[i]) && (r && 4 ^ n.compareDocumentPosition(r) && r.parentNode.insertBefore(n, r),
                            r = n);
                return this
            }
            , C = function (t) {
                function e(e, s) {
                    return e && s ? t(e.__data__, s.__data__) : !e - !s
                }
                t || (t = w);
                for (var s = this._groups, n = s.length, a = new Array(n), i = 0; i < n; ++i) {
                    for (var r, o = s[i], c = o.length, l = a[i] = new Array(c), u = 0; u < c; ++u)
                        (r = o[u]) && (l[u] = r);
                    l.sort(e)
                }
                return new Pt(a, this._parents).order()
            };
        function w(t, e) {
            return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
        }
        var x = function () {
            var t = arguments[0];
            return arguments[0] = this,
                t.apply(null, arguments),
                this
        }
            , T = function () {
                var t = new Array(this.size())
                    , e = -1;
                return this.each((function () {
                    t[++e] = this
                }
                )),
                    t
            }
            , k = function () {
                for (var t = this._groups, e = 0, s = t.length; e < s; ++e)
                    for (var n = t[e], a = 0, i = n.length; a < i; ++a) {
                        var r = n[a];
                        if (r)
                            return r
                    }
                return null
            }
            , O = function () {
                var t = 0;
                return this.each((function () {
                    ++t
                }
                )),
                    t
            }
            , E = function () {
                return !this.node()
            }
            , S = function (t) {
                for (var e = this._groups, s = 0, n = e.length; s < n; ++s)
                    for (var a, i = e[s], r = 0, o = i.length; r < o; ++r)
                        (a = i[r]) && t.call(a, a.__data__, r, i);
                return this
            }
            , P = s("6cd4");
        function M(t) {
            return function () {
                this.removeAttribute(t)
            }
        }
        function N(t) {
            return function () {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function D(t, e) {
            return function () {
                this.setAttribute(t, e)
            }
        }
        function A(t, e) {
            return function () {
                this.setAttributeNS(t.space, t.local, e)
            }
        }
        function L(t, e) {
            return function () {
                var s = e.apply(this, arguments);
                null == s ? this.removeAttribute(t) : this.setAttribute(t, s)
            }
        }
        function I(t, e) {
            return function () {
                var s = e.apply(this, arguments);
                null == s ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, s)
            }
        }
        var R = function (t, e) {
            var s = Object(P["a"])(t);
            if (arguments.length < 2) {
                var n = this.node();
                return s.local ? n.getAttributeNS(s.space, s.local) : n.getAttribute(s)
            }
            return this.each((null == e ? s.local ? N : M : "function" === typeof e ? s.local ? I : L : s.local ? A : D)(s, e))
        }
            , q = s("364b");
        function j(t) {
            return function () {
                delete this[t]
            }
        }
        function U(t, e) {
            return function () {
                this[t] = e
            }
        }
        function F(t, e) {
            return function () {
                var s = e.apply(this, arguments);
                null == s ? delete this[t] : this[t] = s
            }
        }
        var H = function (t, e) {
            return arguments.length > 1 ? this.each((null == e ? j : "function" === typeof e ? F : U)(t, e)) : this.node()[t]
        };
        function Y(t) {
            return t.trim().split(/^|\s+/)
        }
        function $(t) {
            return t.classList || new B(t)
        }
        function B(t) {
            this._node = t,
                this._names = Y(t.getAttribute("class") || "")
        }
        function V(t, e) {
            var s = $(t)
                , n = -1
                , a = e.length;
            while (++n < a)
                s.add(e[n])
        }
        function z(t, e) {
            var s = $(t)
                , n = -1
                , a = e.length;
            while (++n < a)
                s.remove(e[n])
        }
        function G(t) {
            return function () {
                V(this, t)
            }
        }
        function Q(t) {
            return function () {
                z(this, t)
            }
        }
        function W(t, e) {
            return function () {
                (e.apply(this, arguments) ? V : z)(this, t)
            }
        }
        B.prototype = {
            add: function (t) {
                var e = this._names.indexOf(t);
                e < 0 && (this._names.push(t),
                    this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function (t) {
                var e = this._names.indexOf(t);
                e >= 0 && (this._names.splice(e, 1),
                    this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function (t) {
                return this._names.indexOf(t) >= 0
            }
        };
        var K = function (t, e) {
            var s = Y(t + "");
            if (arguments.length < 2) {
                var n = $(this.node())
                    , a = -1
                    , i = s.length;
                while (++a < i)
                    if (!n.contains(s[a]))
                        return !1;
                return !0
            }
            return this.each(("function" === typeof e ? W : e ? G : Q)(s, e))
        };
        function J() {
            this.textContent = ""
        }
        function Z(t) {
            return function () {
                this.textContent = t
            }
        }
        function X(t) {
            return function () {
                var e = t.apply(this, arguments);
                this.textContent = null == e ? "" : e
            }
        }
        var tt = function (t) {
            return arguments.length ? this.each(null == t ? J : ("function" === typeof t ? X : Z)(t)) : this.node().textContent
        };
        function et() {
            this.innerHTML = ""
        }
        function st(t) {
            return function () {
                this.innerHTML = t
            }
        }
        function nt(t) {
            return function () {
                var e = t.apply(this, arguments);
                this.innerHTML = null == e ? "" : e
            }
        }
        var at = function (t) {
            return arguments.length ? this.each(null == t ? et : ("function" === typeof t ? nt : st)(t)) : this.node().innerHTML
        };
        function it() {
            this.nextSibling && this.parentNode.appendChild(this)
        }
        var rt = function () {
            return this.each(it)
        };
        function ot() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        var ct = function () {
            return this.each(ot)
        }
            , lt = s("e311");
        function ut(t) {
            return function () {
                var e = this.ownerDocument
                    , s = this.namespaceURI;
                return s === lt["b"] && e.documentElement.namespaceURI === lt["b"] ? e.createElement(t) : e.createElementNS(s, t)
            }
        }
        function dt(t) {
            return function () {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        var ht = function (t) {
            var e = Object(P["a"])(t);
            return (e.local ? dt : ut)(e)
        }
            , pt = function (t) {
                var e = "function" === typeof t ? t : ht(t);
                return this.select((function () {
                    return this.appendChild(e.apply(this, arguments))
                }
                ))
            };
        function ft() {
            return null
        }
        var vt = function (t, e) {
            var s = "function" === typeof t ? t : ht(t)
                , a = null == e ? ft : "function" === typeof e ? e : Object(n["a"])(e);
            return this.select((function () {
                return this.insertBefore(s.apply(this, arguments), a.apply(this, arguments) || null)
            }
            ))
        };
        function mt() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }
        var _t = function () {
            return this.each(mt)
        };
        function gt() {
            var t = this.cloneNode(!1)
                , e = this.parentNode;
            return e ? e.insertBefore(t, this.nextSibling) : t
        }
        function bt() {
            var t = this.cloneNode(!0)
                , e = this.parentNode;
            return e ? e.insertBefore(t, this.nextSibling) : t
        }
        var yt = function (t) {
            return this.select(t ? bt : gt)
        }
            , Ct = function (t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            }
            , wt = s("0165")
            , xt = s("a317");
        function Tt(t, e, s) {
            var n = Object(xt["a"])(t)
                , a = n.CustomEvent;
            "function" === typeof a ? a = new a(e, s) : (a = n.document.createEvent("Event"),
                s ? (a.initEvent(e, s.bubbles, s.cancelable),
                    a.detail = s.detail) : a.initEvent(e, !1, !1)),
                t.dispatchEvent(a)
        }
        function kt(t, e) {
            return function () {
                return Tt(this, t, e)
            }
        }
        function Ot(t, e) {
            return function () {
                return Tt(this, t, e.apply(this, arguments))
            }
        }
        var Et = function (t, e) {
            return this.each(("function" === typeof e ? Ot : kt)(t, e))
        }
            , St = [null];
        function Pt(t, e) {
            this._groups = t,
                this._parents = e
        }
        function Mt() {
            return new Pt([[document.documentElement]], St)
        }
        Pt.prototype = Mt.prototype = {
            constructor: Pt,
            select: a,
            selectAll: r,
            filter: c,
            data: m,
            enter: u,
            exit: _,
            join: g,
            merge: b,
            order: y,
            sort: C,
            call: x,
            nodes: T,
            node: k,
            size: O,
            empty: E,
            each: S,
            attr: R,
            style: q["a"],
            property: H,
            classed: K,
            text: tt,
            html: at,
            raise: rt,
            lower: ct,
            append: pt,
            insert: vt,
            remove: _t,
            clone: yt,
            datum: Ct,
            on: wt["a"],
            dispatch: Et
        };
        e["b"] = Mt
    },
    f586: function (t, e, s) {
        "use strict";
        var n = s("ba6a")
            , a = s("5665");
        function i(t) {
            return t ? n["a"].get(Object(a["a"])("marketwatches.info", {
                watchId: t
            })) : n["a"].get(Object(a["a"])("marketwatches.all"))
        }
        function r(t, e) {
            return n["a"].post(Object(a["a"])("marketwatches.add", {
                watchId: t
            }), e)
        }
        function o(t, e) {
            return n["a"].put(Object(a["a"])("marketwatches.update", {
                watchId: t
            }), e)
        }
        function c(t, e) {
            return n["a"].delete(Object(a["a"])("marketwatches.delete", {
                watchId: t,
                itemId: e
            }))
        }
        e["a"] = {
            get: i,
            add: r,
            update: o,
            deleteItem: c
        }
    },
    f8fb: function (t, e, s) {
        "use strict";
        var n = function () {
            var t = this
                , e = t.$createElement
                , s = t._self._c || e;
            return t.error && t.error.message ? s("div", {
                staticClass: "error-state"
            }, [s("div", {
                staticClass: "error-state-wrapper"
            }, [t._m(0), t._v(" "), s("div", {
                staticClass: "error-info"
            }, [s("h3", {
                staticClass: "title"
            }, [t._v(t._s(t.title || "Error"))]), t._v(" "), t.error && t.error.message ? s("div", {
                staticClass: "message"
            }, [t._v("\n\t\t\t\t" + t._s(t.error.message) + " "), s("span", {
                staticClass: "error-type"
            }, [t._v("(" + t._s(t.error.error_type) + ")")])]) : t._e()]), t._v(" "), s("hr")])]) : t._e()
        }
            , a = [function () {
                var t = this
                    , e = t.$createElement
                    , s = t._self._c || e;
                return s("div", {
                    staticClass: "error-icon"
                }, [s("span", {
                    staticClass: "icon icon-alert-triangle"
                })])
            }
            ]
            , i = {
                name: "error-state",
                props: {
                    error: Object,
                    title: String
                }
            }
            , r = i
            , o = s("0c7c")
            , c = Object(o["a"])(r, n, a, !1, null, null, null);
        e["a"] = c.exports
    }
}]);
