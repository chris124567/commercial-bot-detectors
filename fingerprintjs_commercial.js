/* Retrieved from https://cdn.fpjs.io/@2.7.3/fp.js. */
/**
 * This software contains code from open-source projects:
 * MurmurHash3 by Karan Lyons (https://github.com/karanlyons/murmurHash3.js)
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)
        .FP = {})
}(this, (function (e) {
    "use strict";
    var t = function () {
            return !!window.webkitRequestFileSystem
        },
        n = function () {
            var e = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
            if (!e) throw "UserAgent is not Google Chrome";
            return parseInt(e[2], 10)
        },
        r = function () {
            return new Promise((function (e) {
                "storage" in navigator && "estimate" in navigator.storage ? navigator.storage.estimate()
                    .then((function (t) {
                        var n = t.quota;
                        e(!!(n && n < 12e7))
                    })) : e(!1)
            }))
        },
        o = function (e, t) {
            if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(t);
            else if (e.length === +e.length)
                for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
            else
                for (var o in e) e.hasOwnProperty(o) && t(e[o], o)
        },
        i = function (e, t) {
            var n = [];
            return null == e ? n : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (o(e, (function (e, r) {
                n.push(t(e, r))
            })), n)
        },
        a = function (e) {
            window.console && console.log && console.log(e)
        },
        c = function (e, t) {
            if (0 == t.length || t.length > e.length) return -1;
            for (var n = 0; n < e.length; n++) {
                for (var r = 0, o = 0; o < t.length; o++) {
                    if (e[n + o] != t[o]) {
                        r = 0;
                        break
                    }
                    r++
                }
                if (r == t.length) return n
            }
            return -1
        },
        u = function (e) {
            for (var t = "", n = 0; n < e; n++) t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
            return t
        };

    function s(e) {
        for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
            for (var o = n[r];
                " " == o.charAt(0);) o = o.substring(1, o.length);
            if (0 == o.indexOf(t)) return o.substring(t.length, o.length)
        }
    }

    function f(e, t, n) {
        return "n/a" !== e && (! function (e, t, n, r) {
            var o = e + "=" + t,
                i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            var a = "expires=" + i.toUTCString(),
                c = "";
            r && r.length > 0 && (c = "domain=" + r), document.cookie = [o, "path=/", a, c].join("; ")
        }(n || "_vid", e, 365, t), h("_vid", e)), e
    }
    var l, d = function (e) {
            try {
                if (localStorage && localStorage.getItem) return localStorage.getItem(e)
            } catch (e) {}
            return null
        },
        h = function (e, t) {
            try {
                localStorage && localStorage.setItem && localStorage.setItem(e, t)
            } catch (e) {}
        };
    ! function (e) {
        e[e.unset = -1] = "unset", e[e.city = 1] = "city", e[e.full = 2] = "full"
    }(l || (l = {}));
    var p = function () {
        function e(e, t, n, r) {
            this._tls = null, this._tlsError = null, this.requestId = u(20), this.sendOptions = e, this.config = t, this.duration = n, this.components = r
        }
        return Object.defineProperty(e.prototype, "tls", {
            set: function (e) {
                this._tls = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "tlsError", {
            set: function (e) {
                this._tlsError = e
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.rawIPResolution = function () {
            return this.sendOptions.ip ? "full" == this.sendOptions.ip ? l.full : l.city : l.unset
        }, e.prototype.buildRaw = function (e) {
            var t = function (e) {
                    return {
                        cookies: s(e || "_vid"),
                        localStorage: d("_vid")
                    }
                }(e),
                n = {
                    rid: this.requestId,
                    cv: "2.7.3",
                    c: this.config.client,
                    url: location.href,
                    d: this.duration,
                    vid: t.cookies || t.localStorage || void 0,
                    ls: t.localStorage ? 1 : void 0,
                    i: this.rawIPResolution()
                };
            return this._tls && this._tls.length > 0 && (n.j = this._tls), this._tlsError && (n.je = this._tlsError), this.sendOptions.tag && (n.t = this.sendOptions.tag), this.sendOptions.callbackData && (n.cbd = 1), this.sendOptions.linkedId && (n.lid = this.sendOptions.linkedId.toString()), document.referrer && (n.cr = document.referrer), o(this.components, (function (e) {
                n[e.key] = e.value
            })), n
        }, e
    }();

    function g(e) {
        var t = this.constructor;
        return this.then((function (n) {
            return t.resolve(e())
                .then((function () {
                    return n
                }))
        }), (function (n) {
            return t.resolve(e())
                .then((function () {
                    return t.reject(n)
                }))
        }))
    }
    var m = setTimeout;

    function y(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function v() {}

    function w(e) {
        if (!(this instanceof w)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], A(e, this)
    }

    function k(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, w._immediateFn((function () {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void S(t.promise, e)
                }
                b(t.promise, r)
            } else(1 === e._state ? b : S)(t.promise, e._value)
        }))) : e._deferreds.push(t)
    }

    function b(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof w) return e._state = 3, e._value = t, void _(e);
                if ("function" == typeof n) return void A((r = n, o = t, function () {
                    r.apply(o, arguments)
                }), e)
            }
            e._state = 1, e._value = t, _(e)
        } catch (t) {
            S(e, t)
        }
        var r, o
    }

    function S(e, t) {
        e._state = 2, e._value = t, _(e)
    }

    function _(e) {
        2 === e._state && 0 === e._deferreds.length && w._immediateFn((function () {
            e._handled || w._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) k(e, e._deferreds[t]);
        e._deferreds = null
    }

    function P(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function A(e, t) {
        var n = !1;
        try {
            e((function (e) {
                n || (n = !0, b(t, e))
            }), (function (e) {
                n || (n = !0, S(t, e))
            }))
        } catch (e) {
            if (n) return;
            n = !0, S(t, e)
        }
    }
    w.prototype.catch = function (e) {
        return this.then(null, e)
    }, w.prototype.then = function (e, t) {
        var n = new this.constructor(v);
        return k(this, new P(e, t, n)), n
    }, w.prototype.finally = g, w.all = function (e) {
        return new w((function (t, n) {
            if (!y(e)) return n(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var o = r.length;

            function i(e, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var c = a.then;
                        if ("function" == typeof c) return void c.call(a, (function (t) {
                            i(e, t)
                        }), n)
                    }
                    r[e] = a, 0 == --o && t(r)
                } catch (e) {
                    n(e)
                }
            }
            for (var a = 0; a < r.length; a++) i(a, r[a])
        }))
    }, w.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === w ? e : new w((function (t) {
            t(e)
        }))
    }, w.reject = function (e) {
        return new w((function (t, n) {
            n(e)
        }))
    }, w.race = function (e) {
        return new w((function (t, n) {
            if (!y(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, o = e.length; r < o; r++) w.resolve(e[r])
                .then(t, n)
        }))
    }, w._immediateFn = "function" == typeof setImmediate && function (e) {
        setImmediate(e)
    } || function (e) {
        m(e, 0)
    }, w._unhandledRejectionFn = function (e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var C = function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();
    "Promise" in C ? C.Promise.prototype.finally || (C.Promise.prototype.finally = g) : C.Promise = w;
    var T, E, I = function (e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var n = [0, 0, 0, 0];
            return n[3] += e[3] + t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] + t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] + t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] + t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        },
        O = function (e, t) {
            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
            var n = [0, 0, 0, 0];
            return n[3] += e[3] * t[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += e[2] * t[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += e[3] * t[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += e[1] * t[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[2] * t[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += e[3] * t[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
        },
        x = function (e, t) {
            return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
        },
        j = function (e, t) {
            return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
        },
        M = function (e, t) {
            return [e[0] ^ t[0], e[1] ^ t[1]]
        },
        D = function (e) {
            return e = M(e, [0, e[0] >>> 1]), e = O(e, [4283543511, 3981806797]), e = M(e, [0, e[0] >>> 1]), e = O(e, [3301882366, 444984403]), e = M(e, [0, e[0] >>> 1])
        },
        L = function () {
            return function (e, t) {
                t = t || 0;
                for (var n = (e = e || "")
                        .length % 16, r = e.length - n, o = [0, t], i = [0, t], a = [0, 0], c = [0, 0], u = [2277735313, 289559509], s = [1291169091, 658871167], f = 0; f < r; f += 16) a = [255 & e.charCodeAt(f + 4) | (255 & e.charCodeAt(f + 5)) << 8 | (255 & e.charCodeAt(f + 6)) << 16 | (255 & e.charCodeAt(f + 7)) << 24, 255 & e.charCodeAt(f) | (255 & e.charCodeAt(f + 1)) << 8 | (255 & e.charCodeAt(f + 2)) << 16 | (255 & e.charCodeAt(f + 3)) << 24], c = [255 & e.charCodeAt(f + 12) | (255 & e.charCodeAt(f + 13)) << 8 | (255 & e.charCodeAt(f + 14)) << 16 | (255 & e.charCodeAt(f + 15)) << 24, 255 & e.charCodeAt(f + 8) | (255 & e.charCodeAt(f + 9)) << 8 | (255 & e.charCodeAt(f + 10)) << 16 | (255 & e.charCodeAt(f + 11)) << 24], a = O(a, u), a = x(a, 31), a = O(a, s), o = M(o, a), o = x(o, 27), o = I(o, i), o = I(O(o, [0, 5]), [0, 1390208809]), c = O(c, s), c = x(c, 33), c = O(c, u), i = M(i, c), i = x(i, 31), i = I(i, o), i = I(O(i, [0, 5]), [0, 944331445]);
                switch (a = [0, 0], c = [0, 0], n) {
                case 15:
                    c = M(c, j([0, e.charCodeAt(f + 14)], 48));
                case 14:
                    c = M(c, j([0, e.charCodeAt(f + 13)], 40));
                case 13:
                    c = M(c, j([0, e.charCodeAt(f + 12)], 32));
                case 12:
                    c = M(c, j([0, e.charCodeAt(f + 11)], 24));
                case 11:
                    c = M(c, j([0, e.charCodeAt(f + 10)], 16));
                case 10:
                    c = M(c, j([0, e.charCodeAt(f + 9)], 8));
                case 9:
                    c = M(c, [0, e.charCodeAt(f + 8)]), c = O(c, s), c = x(c, 33), c = O(c, u), i = M(i, c);
                case 8:
                    a = M(a, j([0, e.charCodeAt(f + 7)], 56));
                case 7:
                    a = M(a, j([0, e.charCodeAt(f + 6)], 48));
                case 6:
                    a = M(a, j([0, e.charCodeAt(f + 5)], 40));
                case 5:
                    a = M(a, j([0, e.charCodeAt(f + 4)], 32));
                case 4:
                    a = M(a, j([0, e.charCodeAt(f + 3)], 24));
                case 3:
                    a = M(a, j([0, e.charCodeAt(f + 2)], 16));
                case 2:
                    a = M(a, j([0, e.charCodeAt(f + 1)], 8));
                case 1:
                    a = M(a, [0, e.charCodeAt(f)]), a = O(a, u), a = x(a, 31), a = O(a, s), o = M(o, a)
                }
                return o = M(o, [0, e.length]), i = M(i, [0, e.length]), o = I(o, i), i = I(i, o), o = D(o), i = D(i), o = I(o, i), i = I(i, o), ("00000000" + (o[0] >>> 0)
                        .toString(16))
                    .slice(-8) + ("00000000" + (o[1] >>> 0)
                        .toString(16))
                    .slice(-8) + ("00000000" + (i[0] >>> 0)
                        .toString(16))
                    .slice(-8) + ("00000000" + (i[1] >>> 0)
                        .toString(16))
                    .slice(-8)
            }(T.toDataURL())
        },
        R = function () {
            ! function () {
                (T = document.createElement("canvas"))
                .width = 240, T.height = 140, T.style.display = "inline";
                var e = T.getContext("2d");
                null != e && (E = e)
            }();
            var e = {
                winding: !1,
                data: ""
            };
            return E && T.toDataURL ? (E.rect(0, 0, 10, 10), E.rect(2, 2, 6, 6), e.winding = !1 === E.isPointInPath(5, 5, "evenodd"), E.textBaseline = "alphabetic", E.fillStyle = "#f60", E.fillRect(125, 1, 62, 20), E.fillStyle = "#069", E.font = "11pt no-real-font-123", E.fillText("Cwm fjordbank 😃 gly", 2, 15), E.fillStyle = "rgba(102, 204, 0, 0.2)", E.font = "18pt Arial", E.fillText("Cwm fjordbank 😃 gly", 4, 45), E.globalCompositeOperation = "multiply", E.fillStyle = "rgb(255,0,255)", E.beginPath(), E.arc(50, 50, 50, 0, 2 * Math.PI, !0), E.closePath(), E.fill(), E.fillStyle = "rgb(0,255,255)", E.beginPath(), E.arc(100, 50, 50, 0, 2 * Math.PI, !0), E.closePath(), E.fill(), E.fillStyle = "rgb(255,255,0)", E.beginPath(), E.arc(75, 100, 50, 0, 2 * Math.PI, !0), E.closePath(), E.fill(), E.fillStyle = "rgb(255,0,255)", E.arc(75, 75, 75, 0, 2 * Math.PI, !0), E.arc(75, 75, 25, 0, 2 * Math.PI, !0), E.fill("evenodd"), e.data = L(), e) : e
        },
        B = function () {
            if ("Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent)) return [];
            if (null != navigator.plugins) {
                for (var e = [], t = 0, n = navigator.plugins.length; t < n; t++) navigator.plugins[t] && e.push(navigator.plugins[t]);
                return i(e, (function (e) {
                    var t = i(e, (function (e) {
                        return {
                            type: e.type,
                            suffixes: e.suffixes
                        }
                    }));
                    return {
                        name: e.name,
                        description: e.description,
                        mimeTypes: t
                    }
                }))
            }
        },
        N = navigator,
        F = window,
        H = navigator,
        U = window,
        q = function () {
            return new Promise((function (e) {
                for (var t = u(100), n = [], r = 0; r < 1e3; r++) n.push(t);
                var o = n.join(),
                    i = [];
                try {
                    for (var a = 0; a < 30; a++) {
                        var c = u(10);
                        localStorage.setItem(c, o), i.push(c)
                    }
                    return e(!0)
                } catch (t) {
                    return e(!1)
                } finally {
                    i.forEach((function (e) {
                        localStorage.removeItem(e)
                    }))
                }
            }))
        },
        G = function () {
            return "safari" in window ? V() : W()
        },
        V = function () {
            return new Promise((function (e) {
                try {
                    window.safari.pushNotification.requestPermission("https://example.com", "private", {}, (function () {}))
                } catch (t) {
                    Y(t) ? e(!1) : e(!0)
                }
            }))
        },
        W = function () {
            return new Promise((function (e, t) {
                z()
                    .then((function (t) {
                        var n = t[0],
                            r = t[1];
                        e(n / r > 5 || r < 9)
                    }))
                    .catch((function (e) {
                        return t(e)
                    }))
            }))
        },
        J = function () {
            return new Promise((function (e) {
                try {
                    window.openDatabase(null, null, null, null)
                } catch (t) {
                    return e(!0)
                }
                try {
                    return window.localStorage.setItem("test", "1"), window.localStorage.removeItem("test"), e(!1)
                } catch (t) {
                    return e(!0)
                }
            }))
        },
        K = function () {
            var e = navigator.userAgent.match(/Version\/([0-9._]+).*Safari/);
            if (!e) throw "UserAgent is not Safari";
            var t = e[1].split(".")
                .map((function (e) {
                    return isNaN(parseInt(e)) ? 0 : parseInt(e)
                }));
            return {
                major: t[0],
                minor: t[1],
                patch: t[2]
            }
        },
        X = function (e) {
            return new Promise((function (t, n) {
                var r = performance.now(),
                    o = "m-" + Date.now() + "-" + e,
                    i = window.indexedDB.open(o, 1);
                i.onupgradeneeded = function () {
                    var e = performance.now() - r;
                    t([o, e])
                }, i.onerror = function (e) {
                    n(e)
                }
            }))
        },
        z = function () {
            return new Promise((function (e, t) {
                X("1")
                    .then((function (t) {
                        var n = t[0],
                            r = t[1];
                        X("2")
                            .then((function (t) {
                                var o = t[0],
                                    i = t[1];
                                [n, o].forEach((function (e) {
                                    return Z(e)
                                })), e([r, i])
                            }))
                    }))
                    .catch((function (e) {
                        return t(e)
                    }))
            }))
        },
        Z = function (e) {
            return new Promise((function (t, n) {
                var r = window.indexedDB.deleteDatabase(e);
                r.onsuccess = function () {
                    t()
                }, r.onerror = function (e) {
                    n(e)
                }
            }))
        },
        Y = function (e) {
            return new RegExp([103, 101, 115, 116, 117, 114, 101].map((function (e) {
                        return String.fromCharCode(e)
                    }))
                    .join(""))
                .test(e)
        },
        Q = function () {
            try {
                return t() ? new Promise((function (e) {
                    n() >= 76 ? r()
                        .then((function (t) {
                            return e(t)
                        })) : window.webkitRequestFileSystem(0, 1, (function () {
                            e(!1)
                        }), (function () {
                            e(!0)
                        }))
                })) : /Apple/.test(navigator.vendor) && /Safari/.test(navigator.userAgent) ? function () {
                    var e = K();
                    return e.major < 13 ? J() : 13 == e.major && 0 === e.minor ? q() : G()
                }() : "MozAppearance" in document.documentElement.style ? new Promise((function (e) {
                    try {
                        var t = window.indexedDB.open("test");
                        t.onerror = function () {
                            return e(!0)
                        }, t.onsuccess = function () {
                            return e(!1)
                        }
                    } catch (t) {
                        return e(!0)
                    }
                })) : function () {
                    var e = navigator.userAgent.toLowerCase();
                    if (0 === e.indexOf("msie") && 0 === e.indexOf("trident")) return !1;
                    var t = /(?:msie|rv:)\s?([\d.]+)/.exec(e);
                    if (t && parseInt(t[1], 10) >= 10) return !0;
                    var n = /edge/.exec(e);
                    return !(!n || "edge" != n[0])
                }() ? new Promise((function (e) {
                    try {
                        if (!window.indexedDB) return e(!0)
                    } catch (t) {
                        return e(!0)
                    }
                    return e(!1)
                })) : Promise.resolve(!1)
            } catch (e) {
                return Promise.reject(e)
            }
        },
        $ = function (e) {
            try {
                localStorage.setItem("_inc", e)
            } catch (e) {}
        },
        ee = function () {
            try {
                var e = localStorage.getItem("_inc");
                return e ? !(!e || "1" != e) : null
            } catch (e) {
                return null
            }
        },
        te = window,
        ne = document,
        re = navigator,
        oe = [{
            key: "k1"
        }, {
            key: "k2"
        }, {
            key: "k3"
        }, {
            key: "k4"
        }, {
            key: "k5"
        }, {
            key: "k6"
        }, {
            key: "k7"
        }, {
            key: "k8"
        }, {
            key: "k9"
        }, {
            key: "k10"
        }, {
            key: "k11"
        }, {
            key: "k12"
        }, {
            key: "k13"
        }, {
            key: "k14"
        }, {
            key: "k15"
        }, {
            key: "k16",
            default: []
        }, {
            key: "k17"
        }, {
            key: "k18"
        }, {
            key: "k19"
        }, {
            key: "k20",
            default: []
        }, {
            key: "k21",
            default: -1
        }, {
            key: "k22"
        }, {
            key: "k23"
        }, {
            key: "k24"
        }, {
            key: "k25"
        }, {
            key: "k26"
        }, {
            key: "k27"
        }, {
            key: "k28"
        }, {
            key: "k29"
        }, {
            key: "k30"
        }, {
            key: "k31"
        }, {
            key: "k32"
        }, {
            key: "k33"
        }],
        ie = {
            k1: function (e) {
                e(re.oscpu)
            },
            k2: function (e) {
                var t = [
                    [re.language || re.userLanguage || re.browserLanguage || re.systemLanguage]
                ];
                if (Array.isArray(re.languages)) t.push(re.languages);
                else if ("string" == typeof re.languages) {
                    var n = re.languages;
                    n.length > 0 && t.push(n.split(","))
                }
                return e(t)
            },
            k3: function (e) {
                e(te.screen.colorDepth)
            },
            k4: function (e) {
                e(re.deviceMemory)
            },
            k5: function (e) {
                e([parseInt(te.screen.width.toString()), parseInt(te.screen.height.toString())].sort()
                    .reverse())
            },
            k6: function (e) {
                te.screen.availWidth && te.screen.availHeight ? e([parseInt(te.screen.availHeight.toString()), parseInt(te.screen.availWidth.toString())].sort()
                    .reverse()) : e([])
            },
            k7: function (e) {
                try {
                    var t = parseInt(re.hardwareConcurrency.toString());
                    e(isNaN(t) ? 1 : t)
                } catch (t) {
                    e(1)
                }
            },
            k8: function (e) {
                e((new Date)
                    .getTimezoneOffset())
            },
            k9: function (e) {
                var t;
                te.Intl && te.Intl.DateTimeFormat && (t = (new te.Intl.DateTimeFormat)
                    .resolvedOptions()
                    .timeZone), e(t)
            },
            k10: function (e) {
                var t = 1;
                try {
                    t = te.sessionStorage ? 1 : 0
                } catch (e) {}
                e(t)
            },
            k11: function (e) {
                var t = 1;
                try {
                    t = te.localStorage ? 1 : 0
                } catch (e) {}
                e(t)
            },
            k12: function (e) {
                var t = 1;
                try {
                    t = te.indexedDB ? 1 : 0
                } catch (e) {}
                e(t)
            },
            k13: function (e) {
                e(te.openDatabase ? 1 : 0)
            },
            k14: function (e) {
                e(re.cpuClass)
            },
            k15: function (e) {
                e(re.platform)
            },
            k16: function (e) {
                e(B())
            },
            k17: function (e) {
                e(R())
            },
            k18: function (e) {
                e(function () {
                    var e = document.createElement("div");
                    e.innerHTML = "&nbsp;", e.className = "adsbox";
                    var t = !1;
                    try {
                        document.body.appendChild(e), t = 0 == document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                    } catch (e) {
                        t = !1
                    }
                    return t ? 1 : 0
                }())
            },
            k19: function (e) {
                e(function () {
                    var e, t = 0;
                    void 0 !== N.maxTouchPoints ? t = parseInt(N.maxTouchPoints) : void 0 !== N.msMaxTouchPoints && (t = N.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (t) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: t,
                        touchEvent: e,
                        touchStart: "ontouchstart" in F
                    }
                }())
            },
            k20: function (e) {
                ! function (e) {
                    var t = ["monospace", "sans-serif", "serif"],
                        n = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"],
                        r = document.getElementsByTagName("body")[0],
                        o = document.createElement("div"),
                        i = document.createElement("div"),
                        a = {},
                        c = {},
                        u = function () {
                            var e = document.createElement("span");
                            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "48px", e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = "mmMwWLliI0O&1", e
                        },
                        s = function (e, t) {
                            var n = u();
                            return n.style.fontFamily = "'" + e + "'," + t, n
                        },
                        f = function (e) {
                            for (var n = !1, r = 0; r < t.length; r++)
                                if (n = e[r].offsetWidth !== a[t[r]] || e[r].offsetHeight !== c[t[r]]) return n;
                            return n
                        },
                        l = function () {
                            for (var e = [], n = 0, r = t.length; n < r; n++) {
                                var i = u();
                                i.style.fontFamily = t[n], o.appendChild(i), e.push(i)
                            }
                            return e
                        }();
                    r.appendChild(o);
                    for (var d = 0, h = t.length; d < h; d++) a[t[d]] = l[d].offsetWidth, c[t[d]] = l[d].offsetHeight;
                    var p = function () {
                        for (var e = {}, r = 0, o = n.length; r < o; r++) {
                            for (var a = [], c = 0, u = t.length; c < u; c++) {
                                var f = s(n[r], t[c]);
                                i.appendChild(f), a.push(f)
                            }
                            e[n[r]] = a
                        }
                        return e
                    }();
                    r.appendChild(i);
                    for (var g = [], m = 0, y = n.length; m < y; m++) f(p[n[m]]) && g.push(n[m]);
                    r.removeChild(i), r.removeChild(o), e(g)
                }(e)
            },
            k21: function (e) {
                ! function (e) {
                    if (H.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(-1);
                    var t = U.OfflineAudioContext || U.webkitOfflineAudioContext;
                    if (null == t) return e(-2);
                    var n = new t(1, 44100, 44100),
                        r = n.createOscillator();
                    r.type = "triangle", r.frequency.setValueAtTime(1e4, n.currentTime);
                    var i = n.createDynamicsCompressor();
                    o([
                        ["threshold", -50],
                        ["knee", 40],
                        ["ratio", 12],
                        ["reduction", -20],
                        ["attack", 0],
                        ["release", .25]
                    ], (function (e) {
                        void 0 !== i[e[0]] && "function" == typeof i[e[0]].setValueAtTime && i[e[0]].setValueAtTime(e[1], n.currentTime)
                    })), r.connect(i), i.connect(n.destination), r.start(0), n.startRendering();
                    var a = setTimeout((function () {
                        return n.oncomplete = function () {}, e(-3)
                    }), 1e3);
                    n.oncomplete = function (t) {
                        var n;
                        try {
                            clearTimeout(a), n = t.renderedBuffer.getChannelData(0)
                                .slice(4500, 5e3)
                                .reduce((function (e, t) {
                                    return e + Math.abs(t)
                                }), 0), r.disconnect(), i.disconnect()
                        } catch (t) {
                            return void e(-4)
                        }
                        e(n)
                    }
                }(e)
            },
            k22: function (e) {
                e(void 0 !== re.plugins ? 1 : 0)
            },
            k23: function (e) {
                e(re.productSub)
            },
            k24: function (e) {
                e(eval.toString()
                    .length)
            },
            k25: function (e) {
                var t;
                try {
                    throw "a"
                } catch (e) {
                    try {
                        e.toSource(), t = !0
                    } catch (e) {
                        t = !1
                    }
                }
                e(t ? 1 : 0)
            },
            k26: function (e) {
                e(void 0 !== re.webdriver ? 1 : 0)
            },
            k27: function (e) {
                e(navigator.vendor)
            },
            k28: function (e) {
                e(void 0 !== te.chrome ? 1 : 0)
            },
            k29: function (e) {
                re.permissions.query({
                        name: "notifications"
                    })
                    .then((function (t) {
                        "denied" === Notification.permission && "prompt" === t.state ? e(1) : e(0)
                    }))
            },
            k30: function (e) {
                var t = ["webdriver" in te, "_Selenium_IDE_Recorder" in te, "callSelenium" in te, "_selenium" in te, "__webdriver_script_fn" in ne, "__driver_evaluate" in ne, "__webdriver_evaluate" in ne, "__selenium_evaluate" in ne, "__fxdriver_evaluate" in ne, "__driver_unwrapped" in ne, "__webdriver_unwrapped" in ne, "__selenium_unwrapped" in ne, "__fxdriver_unwrapped" in ne, "__webdriver_script_func" in ne, null !== ne.documentElement.getAttribute("selenium"), null !== ne.documentElement.getAttribute("webdriver"), null !== ne.documentElement.getAttribute("driver")];
                o(t, (function (t) {
                    t && e(1)
                })), e(0)
            },
            k31: function (e) {
                new Promise((function (e) {
                        var t = ee();
                        null === t ? Q()
                            .then((function (t) {
                                $(t ? "1" : "0"), e(t)
                            }))
                            .catch((function () {
                                e(!1)
                            })) : e(t)
                    }))
                    .then((function (t) {
                        e(t ? 1 : 0)
                    }))
                    .catch((function () {
                        e(0)
                    }))
            },
            k32: function (e) {
                try {
                    document.cookie = "cookietest=1";
                    var t = -1 !== document.cookie.indexOf("cookietest=");
                    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT", e(t ? 1 : 0)
                } catch (t) {
                    e(0)
                }
            },
            k33: function (e) {
                e(function () {
                    if (!t()) return !1;
                    try {
                        if ([66, 114, 97, 118, 101].map((function (e) {
                                return String.fromCharCode(e)
                            }))
                            .join("") in window) return !0;
                        var e = document.createElement("canvas");
                        e.width = 4, e.height = 4, e.style.display = "inline";
                        var n = e.toDataURL();
                        if ("" == n) return !0;
                        for (var r = window.atob(n.split(",")[1]), o = r.length, i = new Uint8Array(o), a = 0; a < o; a++) i[a] = r.charCodeAt(a);
                        var u = c(i, [73, 68, 65, 84, 24]);
                        if (-1 == u) return !1;
                        var s = c(i, [73, 69, 78, 68]);
                        return -1 != u && 1321 != i.slice(u + 5, s)
                            .reduce((function (e, t) {
                                return e + t
                            }), 0)
                    } catch (e) {
                        return !1
                    }
                }() ? 1 : 0)
            }
        };

    function ae(e, t) {
        return new Promise((function (n, r) {
            ! function (e, t, n) {
                var r = new XMLHttpRequest;
                r.withCredentials = !0, r.open("POST", e, !0), r.setRequestHeader("Content-Type", "text/plain");
                var o = function (e, t) {
                    n(e, t)
                };
                r.addEventListener("error", (function () {
                    o('{"error":"Connection error"}')
                })), r.addEventListener("timeout", (function () {
                    o('{"error":"Timeout"}')
                })), r.addEventListener("abort", (function () {
                    o('{"error":"Request aborted"}')
                })), r.onreadystatechange = function () {
                    r.readyState == XMLHttpRequest.DONE && (r.status >= 200 && r.status < 300 ? o(void 0, r.responseText) : 404 === r.status || r.status >= 500 ? o(r.statusText) : r.status > 300 && o(r.responseText))
                };
                try {
                    r.send(JSON.stringify(t))
                } catch (e) {
                    o(e.message)
                }
            }(e, t, (function (e, t) {
                if (e) {
                    var o = {};
                    try {
                        o = JSON.parse(e)
                    } catch (t) {
                        o.error = e
                    }
                    return r(o)
                }
                try {
                    var i = JSON.parse(t);
                    n(i)
                } catch (e) {
                    r({
                        error: "Failed to parse the response as a valid JSON"
                    })
                }
            }))
        }))
    }
    var ce = function () {
            function e(e) {
                this.options = e || {}
            }
            return Object.defineProperty(e.prototype, "ip", {
                get: function () {
                    return this.options.ip || "city"
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "debug", {
                get: function () {
                    return this.options.debug || !1
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "timeout", {
                get: function () {
                    return this.options.timeout || 1e4
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "tag", {
                get: function () {
                    if (this.options.tag) return "object" == typeof this.options.tag ? this.options.tag : {
                        tag: this.options.tag
                    }
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "linkedId", {
                get: function () {
                    return this.options.linkedId
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "disableTls", {
                get: function () {
                    return this.options.disableTls || !1
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "callbackData", {
                get: function () {
                    return !!this.options.callbackData
                },
                enumerable: !1,
                configurable: !0
            }), e
        }(),
        ue = function () {
            function e(e) {
                se(e), this.config = e, this.config.timeoutDelay = e.timeoutDelay || 50
            }
            return e.load = function (t) {
                return new Promise((function (n, r) {
                    try {
                        se(t)
                    } catch (e) {
                        return r(e)
                    }
                    var o = new e(t);
                    window.requestIdleCallback ? window.requestIdleCallback((function () {
                        n(o)
                    })) : setTimeout((function () {
                        n(o)
                    }), o.config.timeoutDelay)
                }))
            }, e.prototype.send = function (e) {
                var t = this,
                    n = new ce(e);
                return new Promise((function (r, o) {
                    var i = setTimeout((function () {
                            var e = {
                                error: "Timeout",
                                reason: n.timeout + "ms elapsed"
                            };
                            return o(e)
                        }), n.timeout),
                        a = !0;
                    e && e.disableTls && (a = !1);
                    var c = a ? new Promise((function (e, t) {
                            var n = new XMLHttpRequest,
                                r = setTimeout((function () {
                                    t("Timeout"), n.abort()
                                }), 5e3);
                            n.open("GET", "https://api.sjpf.io"), n.addEventListener("error", (function () {
                                return t("Connection error")
                            })), n.addEventListener("timeout", (function () {
                                return t("Timeout")
                            })), n.addEventListener("abort", (function () {
                                return t("Abort")
                            })), n.onreadystatechange = function () {
                                n.readyState == XMLHttpRequest.DONE && (clearTimeout(r), 200 == n.status ? e(n.responseText) : n.status >= 300 && t(n.responseText))
                            };
                            try {
                                n.send()
                            } catch (e) {
                                clearTimeout(r);
                                try {
                                    var o = e.message.slice(0, 255);
                                    return t(o)
                                } catch (e) {}
                            }
                        })) : Promise.resolve(""),
                        u = Date.now();
                    ! function (e) {
                        var t = Date.now(),
                            n = [],
                            r = -1,
                            o = function () {
                                if ((r += 1) >= oe.length) e(n);
                                else {
                                    var i = oe[r];
                                    try {
                                        ie[i.key]((function (e) {
                                            var r = Date.now() - t;
                                            n.push({
                                                key: i.key,
                                                value: e,
                                                duration: r
                                            }), t = Date.now(), o()
                                        }))
                                    } catch (e) {
                                        n.push({
                                            key: i.key,
                                            value: i.default
                                        }), o()
                                    }
                                }
                            };
                        o()
                    }((function (e) {
                        var a = Date.now() - u,
                            s = new p(n, t.config, a, e);
                        c.then((function (e) {
                                return s.tls = e
                            }))
                            .catch((function (e) {
                                return s.tlsError = e
                            }))
                            .finally((function () {
                                ae(le(t.config), s.buildRaw(t.config.cookieKey))
                                    .then((function (e) {
                                        if (e.error) return o(e);
                                        f(e.visitorId, t.config.cookieDomain, t.config.cookieKey), clearTimeout(i), r(fe(e, n.tag))
                                    }))
                                    .catch((function (e) {
                                        o(fe(e, n.tag))
                                    }))
                            }))
                    }))
                }))
            }, e
        }(),
        se = function (e) {
            if (!e) throw new Error("config cannot be empty");
            if (!e.client) throw new Error("config.client cannot be empty");
            if ("" == e.client) throw new Error("config.client cannot be empty")
        },
        fe = function (e, t) {
            return t && (e.tag = t), e
        },
        le = function (e) {
            if (e.endpoint) return e.endpoint;
            var t = "api.fpjs.io";
            return e.region && "us" != e.region && (t = e.region + "." + t), "https://" + t
        },
        de = function () {
            function e(e) {
                this.properties = e
            }
            return Object.defineProperty(e.prototype, "client", {
                get: function () {
                    return this.properties.client
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "autoSend", {
                get: function () {
                    return this.properties.autoSend
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "loaded", {
                get: function () {
                    return (e = this.properties.loaded) && e.constructor && e.call && e.apply ? this.properties.loaded : function (e) {};
                    var e
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "region", {
                get: function () {
                    return this.properties.region
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "endpoint", {
                get: function () {
                    return this.properties.endpoint
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cookieDomain", {
                get: function () {
                    return this.properties.cookieDomain
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cookieKey", {
                get: function () {
                    return this.properties.cookieKey
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.isValid = function () {
                return this.client && this.client.toString()
                    .length >= 8
            }, e
        }(),
        he = function () {
            var e = {};
            if (window.fpLayer && window.fpLayer.length)
                for (var t = 0; t < window.fpLayer.length; t++) {
                    var n = window.fpLayer[t];
                    if ("config" === n[0]) {
                        var r = n[1],
                            o = n[2];
                        e[r] = o
                    }
                }
            return new de(e)
        }(),
        pe = ue.load(he);
    pe.then((function (e) {
            he.loaded(e), he.autoSend && e.send()
        }))
        .catch((function (e) {
            he.autoSend && (a("Configuration snippet is missing or invalid"), a(e))
        })), e.NotAvailable = "n/a", e.TimeoutError = "Timeout", e.send = function (e) {
            return e && e.debug && a("Using the global FP object is deprecated and will be removed in v3 of the agent."), new Promise((function (t, n) {
                pe.then((function (r) {
                        r.send(e)
                            .then((function (e) {
                                return t(e)
                            }))
                            .catch((function (e) {
                                return n(e)
                            }))
                    }))
                    .catch((function (e) {
                        return n(e)
                    }))
            }))
        }, Object.defineProperty(e, "__esModule", {
            value: !0
        })
}));