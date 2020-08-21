/* Retrieved from https://imasdk.googleapis.com/js/sdkloader/ima3.js. */
// Copyright 2011 Google Inc. All Rights Reserved.
(function() {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var k, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    ea("Symbol", function(a) {
        if (a) return a;
        var b = function(e, f) {
            this.g = e;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = 0,
            d = function(e) {
                if (this instanceof d) throw new TypeError("Symbol is not a constructor");
                return new b("jscomp_symbol_" + (e || "") + "_" + c++, e)
            };
        return d
    });
    ea("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return fa(aa(this))
                }
            })
        }
        return a
    });
    var fa = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        ha = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ia = function(a) {
            if (!(a instanceof Array)) {
                a = ha(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ka = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    de: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.de;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var pa = la,
        p = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (pa) pa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ja = b.prototype
        };
    ea("Promise", function(a) {
        function b() {
            this.g = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.h = function(g) {
            if (null == this.g) {
                this.g = [];
                var h = this;
                this.l(function() {
                    h.A()
                })
            }
            this.g.push(g)
        };
        var d = da.setTimeout;
        b.prototype.l = function(g) {
            d(g, 0)
        };
        b.prototype.A = function() {
            for (; this.g && this.g.length;) {
                var g = this.g;
                this.g = [];
                for (var h = 0; h < g.length; ++h) {
                    var l = g[h];
                    g[h] = null;
                    try {
                        l()
                    } catch (m) {
                        this.o(m)
                    }
                }
            }
            this.g = null
        };
        b.prototype.o = function(g) {
            this.l(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.h = 0;
            this.l = void 0;
            this.g = [];
            var h = this.o();
            try {
                g(h.resolve, h.reject)
            } catch (l) {
                h.reject(l)
            }
        };
        e.prototype.o = function() {
            function g(m) {
                return function(n) {
                    l || (l = !0, m.call(h, n))
                }
            }
            var h = this,
                l = !1;
            return {
                resolve: g(this.M),
                reject: g(this.A)
            }
        };
        e.prototype.M = function(g) {
            if (g === this) this.A(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.H(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.J(g) : this.B(g)
            }
        };
        e.prototype.J = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (l) {
                this.A(l);
                return
            }
            "function" == typeof h ? this.I(h, g) : this.B(g)
        };
        e.prototype.A = function(g) {
            this.C(2, g)
        };
        e.prototype.B = function(g) {
            this.C(1, g)
        };
        e.prototype.C = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.l = h;
            this.F()
        };
        e.prototype.F = function() {
            if (null != this.g) {
                for (var g = 0; g < this.g.length; ++g) f.h(this.g[g]);
                this.g = null
            }
        };
        var f = new b;
        e.prototype.H = function(g) {
            var h =
                this.o();
            g.Fb(h.resolve, h.reject)
        };
        e.prototype.I = function(g, h) {
            var l = this.o();
            try {
                g.call(h, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        };
        e.prototype.then = function(g, h) {
            function l(B, t) {
                return "function" == typeof B ? function(w) {
                    try {
                        m(B(w))
                    } catch (z) {
                        n(z)
                    }
                } : t
            }
            var m, n, v = new e(function(B, t) {
                m = B;
                n = t
            });
            this.Fb(l(g, m), l(h, n));
            return v
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Fb = function(g, h) {
            function l() {
                switch (m.h) {
                    case 1:
                        g(m.l);
                        break;
                    case 2:
                        h(m.l);
                        break;
                    default:
                        throw Error("Unexpected state: " +
                            m.h);
                }
            }
            var m = this;
            null == this.g ? f.h(l) : this.g.push(l)
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, l) {
                l(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, l) {
                for (var m = ha(g), n = m.next(); !n.done; n = m.next()) c(n.value).Fb(h, l)
            })
        };
        e.all = function(g) {
            var h = ha(g),
                l = h.next();
            return l.done ? c([]) : new e(function(m, n) {
                function v(w) {
                    return function(z) {
                        B[w] = z;
                        t--;
                        0 == t && m(B)
                    }
                }
                var B = [],
                    t = 0;
                do B.push(void 0), t++, c(l.value).Fb(v(B.length - 1), n), l = h.next(); while (!l.done)
            })
        };
        return e
    });
    ea("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    var qa = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        ra = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) qa(d, e) && (a[e] = d[e])
            }
            return a
        };
    ea("Object.assign", function(a) {
        return a || ra
    });
    var sa = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = {
                next: function() {
                    if (c < a.length) {
                        var e = c++;
                        return {
                            value: b(e, a[e]),
                            done: !1
                        }
                    }
                    d.next = function() {
                        return {
                            done: !0,
                            value: void 0
                        }
                    };
                    return d.next()
                }
            };
        d[Symbol.iterator] = function() {
            return d
        };
        return d
    };
    ea("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return sa(this, function(b) {
                return b
            })
        }
    });
    ea("Array.prototype.values", function(a) {
        return a ? a : function() {
            return sa(this, function(b, c) {
                return c
            })
        }
    });
    ea("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ea("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    ea("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
            return -1 !== (this + "").indexOf(b, c || 0)
        }
    });
    ea("WeakMap", function(a) {
        function b() {}

        function c(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }

        function d(l) {
            if (!qa(l, f)) {
                var m = new b;
                ba(l, f, {
                    value: m
                })
            }
        }

        function e(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof b) return n;
                Object.isExtensible(n) && d(n);
                return m(n)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n.delete(l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m)
                } catch (v) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(l) {
                this.g = (g += Math.random() + 1).toString();
                if (l) {
                    l = ha(l);
                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                }
            };
        h.prototype.set = function(l, m) {
            if (!c(l)) throw Error("Invalid WeakMap key");
            d(l);
            if (!qa(l, f)) throw Error("WeakMap key fail: " + l);
            l[f][this.g] = m;
            return this
        };
        h.prototype.get = function(l) {
            return c(l) && qa(l, f) ? l[f][this.g] : void 0
        };
        h.prototype.has = function(l) {
            return c(l) && qa(l, f) && qa(l[f],
                this.g)
        };
        h.prototype.delete = function(l) {
            return c(l) && qa(l, f) && qa(l[f], this.g) ? delete l[f][this.g] : !1
        };
        return h
    });
    ea("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        l = new a(ha([
                            [h, "s"]
                        ]));
                    if ("s" != l.get(h) || 1 != l.size || l.get({
                            x: 4
                        }) || l.set({
                            x: 4
                        }, "t") != l || 2 != l.size) return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
                } catch (v) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this.h = {};
                this.g =
                    f();
                this.size = 0;
                if (h) {
                    h = ha(h);
                    for (var l; !(l = h.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        c.prototype.set = function(h, l) {
            h = 0 === h ? 0 : h;
            var m = d(this, h);
            m.list || (m.list = this.h[m.id] = []);
            m.ma ? m.ma.value = l : (m.ma = {
                next: this.g,
                Ia: this.g.Ia,
                head: this.g,
                key: h,
                value: l
            }, m.list.push(m.ma), this.g.Ia.next = m.ma, this.g.Ia = m.ma, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ma && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.h[h.id], h.ma.Ia.next = h.ma.next, h.ma.next.Ia = h.ma.Ia,
                h.ma.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.h = {};
            this.g = this.g.Ia = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).ma
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).ma) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, l) {
            for (var m = this.entries(),
                    n; !(n = m.next()).done;) n = n.value, h.call(l, n[1], n[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
                var n = h.h[m];
                if (n && qa(h.h, m))
                    for (h = 0; h < n.length; h++) {
                        var v = n[h];
                        if (l !== l && v.key !== v.key || l === v.key) return {
                            id: m,
                            list: n,
                            index: h,
                            ma: v
                        }
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    ma: void 0
                }
            },
            e = function(h, l) {
                var m = h.g;
                return fa(function() {
                    if (m) {
                        for (; m.head != h.g;) m = m.Ia;
                        for (; m.next != m.head;) return m =
                            m.next, {
                                done: !1,
                                value: l(m)
                            };
                        m = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ia = h.next = h.head = h
            },
            g = 0;
        return c
    });
    ea("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    ea("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    ea("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) qa(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    var ta = ta || {},
        q = this || self,
        r = function(a, b, c) {
            a = a.split(".");
            c = c || q;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        },
        wa = function(a) {
            if (a && a != q) return ua(a.document);
            null === va && (va = ua(q.document));
            return va
        },
        xa = /^[\w+/_-]+[=]{0,2}$/,
        va = null,
        ua = function(a) {
            return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && xa.test(a) ? a :
                ""
        },
        ya = function(a, b) {
            a = a.split(".");
            b = b || q;
            for (var c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        za = function() {},
        Aa = function(a) {
            a.uc = void 0;
            a.D = function() {
                return a.uc ? a.uc : a.uc = new a
            }
        },
        Ba = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ca = function(a) {
            var b = Ba(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Da = function(a) {
            return "function" == Ba(a)
        },
        Ea = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        Ha = function(a) {
            return Object.prototype.hasOwnProperty.call(a,
                Fa) && a[Fa] || (a[Fa] = ++Ga)
        },
        Ia = function(a) {
            null !== a && "removeAttribute" in a && a.removeAttribute(Fa);
            try {
                delete a[Fa]
            } catch (b) {}
        },
        Fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ga = 0,
        Ja = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        Ka = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        La = function(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? La = Ja : La = Ka;
            return La.apply(null, arguments)
        },
        Ma = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        },
        u = Date.now,
        x = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.Ja = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        },
        Na = function(a) {
            return a
        };
    var Oa = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Oa);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    x(Oa, Error);
    Oa.prototype.name = "CustomError";
    var Pa;
    var Qa = function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        y = function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ra = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
        },
        Sa = function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h =
                        f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                } return d
        },
        Ta = function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        Ua = function(a, b, c) {
            var d = c;
            y(a, function(e, f) {
                d = b.call(void 0, d, e, f, a)
            });
            return d
        },
        Va = function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        },
        Xa = function(a, b) {
            b = Wa(a, b, void 0);
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        },
        Wa =
        function(a, b, c) {
            for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        Ya = function(a, b) {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) return d;
            return -1
        },
        Za = function(a, b) {
            return 0 <= Qa(a, b)
        },
        $a = function(a, b) {
            b = Qa(a, b);
            var c;
            (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
            return c
        },
        ab = function(a, b) {
            var c = 0;
            Ra(a, function(d, e) {
                b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length &&
                    c++
            })
        },
        bb = function(a) {
            return Array.prototype.concat.apply([], arguments)
        },
        cb = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        db = function(a) {
            for (var b = {}, c = 0, d = 0; d < a.length;) {
                var e = a[d++];
                var f = e;
                f = Ea(f) ? "o" + Ha(f) : (typeof f).charAt(0) + f;
                Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
            }
            a.length = c
        },
        fb = function(a, b) {
            a.sort(b || eb)
        },
        eb = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        gb = function(a, b) {
            for (var c = [], d = 0; d < b; d++) c[d] = a;
            return c
        };
    var ib = function(a) {
        return Ta(a, function(b) {
            b = b.toString(16);
            return 1 < b.length ? b : "0" + b
        }).join("")
    };
    var jb = function(a) {
            return function() {
                return a
            }
        },
        kb = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        lb = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        nb = function(a) {
            var b = 0,
                c = !1,
                d = [],
                e = function() {
                    b = 0;
                    c && (c = !1, f())
                },
                f = function() {
                    b = q.setTimeout(e, 1E3);
                    a.apply(void 0, d)
                };
            return function(g) {
                d = arguments;
                b ? c = !0 : f()
            }
        };
    var ob = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        pb = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        qb = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        sb = function(a) {
            var b = rb,
                c;
            for (c in b)
                if (!a.call(void 0, b[c], c, b)) return !1;
            return !0
        },
        tb = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        ub = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        vb = function(a, b) {
            var c = Ca(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (null ==
                    a) return;
                a = a[d[c]]
            }
            return a
        },
        wb = function(a, b) {
            return null !== a && b in a
        },
        xb = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        zb = function(a) {
            var b = yb,
                c;
            for (c in b)
                if (a.call(void 0, b[c], c, b)) return c
        },
        Ab = function(a) {
            for (var b in a) return !1;
            return !0
        },
        Bb = function(a) {
            for (var b in a) delete a[b]
        },
        Cb = function(a, b, c) {
            return null !== a && b in a ? a[b] : c
        },
        Db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Eb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d =
                    arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Db.length; f++) c = Db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var Fb, Gb = function() {
        if (void 0 === Fb) {
            var a = null,
                b = q.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Na,
                        createScript: Na,
                        createScriptURL: Na
                    })
                } catch (c) {
                    q.console && q.console.error(c.message)
                }
                Fb = a
            } else Fb = a
        }
        return Fb
    };
    var Jb = function(a, b) {
        this.g = a === Hb && b || "";
        this.h = Ib
    };
    Jb.prototype.Pa = !0;
    Jb.prototype.Fa = function() {
        return this.g
    };
    var Kb = function(a) {
            return a instanceof Jb && a.constructor === Jb && a.h === Ib ? a.g : "type_error:Const"
        },
        Lb = function(a) {
            return new Jb(Hb, a)
        },
        Ib = {},
        Hb = {};
    var Ob = function(a, b) {
        this.g = a === Mb && b || "";
        this.h = Nb
    };
    Ob.prototype.Pa = !0;
    Ob.prototype.Fa = function() {
        return this.g.toString()
    };
    Ob.prototype.sc = !0;
    Ob.prototype.kc = function() {
        return 1
    };
    var Pb = function(a) {
            return a instanceof Ob && a.constructor === Ob && a.h === Nb ? a.g : "type_error:TrustedResourceUrl"
        },
        Nb = {},
        Qb = function(a) {
            var b = Gb();
            a = b ? b.createScriptURL(a) : a;
            return new Ob(Mb, a)
        },
        Mb = {};
    var Rb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Sb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        $b = function(a, b) {
            if (b) a = a.replace(Tb, "&amp;").replace(Ub, "&lt;").replace(Vb, "&gt;").replace(Wb, "&quot;").replace(Xb, "&#39;").replace(Yb, "&#0;");
            else {
                if (!Zb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Tb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ub, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Vb, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Wb,
                    "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Xb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Yb, "&#0;"))
            }
            return a
        },
        Tb = /&/g,
        Ub = /</g,
        Vb = />/g,
        Wb = /"/g,
        Xb = /'/g,
        Yb = /\x00/g,
        Zb = /[\x00&<>"']/,
        A = function(a, b) {
            return -1 != a.toLowerCase().indexOf(b.toLowerCase())
        },
        dc = function(a, b) {
            var c = 0;
            a = Sb(String(a)).split(".");
            b = Sb(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 ==
                        f[0].length && 0 == g[0].length) break;
                    c = cc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || cc(0 == f[2].length, 0 == g[2].length) || cc(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        cc = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var gc = function(a, b) {
        this.g = a === ec && b || "";
        this.h = fc
    };
    gc.prototype.Pa = !0;
    gc.prototype.Fa = function() {
        return this.g.toString()
    };
    gc.prototype.sc = !0;
    gc.prototype.kc = function() {
        return 1
    };
    var hc = function(a) {
            return a instanceof gc && a.constructor === gc && a.h === fc ? a.g : "type_error:SafeUrl"
        },
        ic = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        jc = function(a) {
            if (a instanceof gc) return a;
            a = "object" == typeof a && a.Pa ? a.Fa() : String(a);
            ic.test(a) || (a = "about:invalid#zClosurez");
            return new gc(ec, a)
        },
        fc = {},
        kc = new gc(ec, "about:invalid#zClosurez"),
        ec = {};
    var mc = function() {
        this.g = "";
        this.h = lc
    };
    mc.prototype.Pa = !0;
    var lc = {};
    mc.prototype.Fa = function() {
        return this.g
    };
    var nc = function(a) {
            var b = new mc;
            b.g = a;
            return b
        },
        oc = nc("");
    var pc;
    a: {
        var qc = q.navigator;
        if (qc) {
            var rc = qc.userAgent;
            if (rc) {
                pc = rc;
                break a
            }
        }
        pc = ""
    }
    var C = function(a) {
        return -1 != pc.indexOf(a)
    };
    var sc = function() {
            return C("Trident") || C("MSIE")
        },
        tc = function() {
            return C("Firefox") || C("FxiOS")
        },
        vc = function() {
            return C("Safari") && !(uc() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || tc() || C("Silk") || C("Android"))
        },
        uc = function() {
            return (C("Chrome") || C("CriOS")) && !C("Edge")
        };
    var xc = function() {
        this.g = "";
        this.l = wc;
        this.h = null
    };
    xc.prototype.sc = !0;
    xc.prototype.kc = function() {
        return this.h
    };
    xc.prototype.Pa = !0;
    xc.prototype.Fa = function() {
        return this.g.toString()
    };
    var yc = function(a) {
            return a instanceof xc && a.constructor === xc && a.l === wc ? a.g : "type_error:SafeHtml"
        },
        wc = {},
        zc = function(a, b) {
            var c = new xc,
                d = Gb();
            c.g = d ? d.createHTML(a) : a;
            c.h = b;
            return c
        };
    var Ac = function(a, b) {
        a.src = Pb(b);
        (b = wa(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    };
    var Bc = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        Cc = function(a) {
            return a = $b(a, void 0)
        },
        Dc = function(a, b) {
            a.length > b && (a = a.substring(0, b - 3) + "...");
            return a
        },
        Ec = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        Fc = function(a) {
            return null == a ? "" : String(a)
        },
        Gc = 2147483648 * Math.random() | 0,
        Hc = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        },
        Ic = function() {
            return "googleAvInapp".replace(/([A-Z])/g, "-$1").toLowerCase()
        },
        Jc = function(a) {
            return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
    var Kc = 0,
        Lc = 0;
    var Mc = function() {
        this.g = []
    };
    Mc.prototype.length = function() {
        return this.g.length
    };
    Mc.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };
    var Nc = function(a, b) {
            for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
            a.g.push(b)
        },
        Oc = function(a, b) {
            a.g.push(b >>> 0 & 255);
            a.g.push(b >>> 8 & 255);
            a.g.push(b >>> 16 & 255);
            a.g.push(b >>> 24 & 255)
        };
    var Pc = function() {
            return C("iPhone") && !C("iPod") && !C("iPad")
        },
        Qc = function() {
            return Pc() || C("iPad") || C("iPod")
        };
    var Rc = function(a) {
        Rc[" "](a);
        return a
    };
    Rc[" "] = za;
    var Sc = function(a, b) {
            try {
                return Rc(a[b]), !0
            } catch (c) {}
            return !1
        },
        Uc = function(a, b) {
            var c = Tc;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Vc = C("Opera"),
        Wc = sc(),
        Xc = C("Edge"),
        Yc = C("Gecko") && !(A(pc, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Zc = A(pc, "WebKit") && !C("Edge"),
        $c = C("Macintosh"),
        ad = C("Android"),
        bd = Pc(),
        cd = C("iPad"),
        dd = C("iPod"),
        ed = Qc(),
        fd = function() {
            var a = q.document;
            return a ? a.documentMode : void 0
        },
        gd;
    a: {
        var id = "",
            jd = function() {
                var a = pc;
                if (Yc) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Xc) return /Edge\/([\d\.]+)/.exec(a);
                if (Wc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Zc) return /WebKit\/(\S+)/.exec(a);
                if (Vc) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();jd && (id = jd ? jd[1] : "");
        if (Wc) {
            var kd = fd();
            if (null != kd && kd > parseFloat(id)) {
                gd = String(kd);
                break a
            }
        }
        gd = id
    }
    var ld = gd,
        Tc = {},
        md = function(a) {
            return Uc(a, function() {
                return 0 <= dc(ld, a)
            })
        },
        nd;
    if (q.document && Wc) {
        var od = fd();
        nd = od ? od : parseInt(ld, 10) || void 0
    } else nd = void 0;
    var pd = nd;
    var qd = tc(),
        rd = Pc() || C("iPod"),
        sd = C("iPad"),
        td = C("Android") && !(uc() || tc() || C("Opera") || C("Silk")),
        ud = uc(),
        vd = vc() && !Qc();
    var wd = {},
        xd = null,
        yd = function(a, b) {
            void 0 === b && (b = 0);
            if (!xd) {
                xd = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    wd[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === xd[h] && (xd[h] = g)
                    }
                }
            }
            b = wd[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                var l = a[d],
                    m = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = l >> 2;
                l = (l & 3) << 4 | m >> 4;
                m = (m & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (m = 64));
                c.push(b[g], b[l], b[m] || "", b[h] ||
                    "")
            }
            return c.join("")
        };
    var zd = function() {
        this.h = [];
        this.l = 0;
        this.g = new Mc
    };
    zd.prototype.reset = function() {
        this.h = [];
        this.g.end();
        this.l = 0
    };
    var Ad = function(a, b, c) {
        if (null != c) {
            Nc(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            Kc = b;
            Lc = d;
            c = Kc;
            for (b = Lc; 0 < b || 127 < c;) a.g.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.g.push(c)
        }
    };
    var Bd = function() {},
        Cd = "function" == typeof Uint8Array,
        Fd = function(a, b, c) {
            a.o = null;
            b || (b = []);
            a.F = void 0;
            a.A = -1;
            a.h = b;
            a: {
                if (b = a.h.length) {
                    --b;
                    var d = a.h[b];
                    if (!(null === d || "object" != typeof d || Array.isArray(d) || Cd && d instanceof Uint8Array)) {
                        a.B = b - a.A;
                        a.l = d;
                        break a
                    }
                }
                a.B = Number.MAX_VALUE
            }
            a.C = {};
            if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.B ? (d += a.A, a.h[d] = a.h[d] || Dd) : (Ed(a), a.l[d] = a.l[d] || Dd)
        },
        Dd = [],
        Ed = function(a) {
            var b = a.B + a.A;
            a.h[b] || (a.l = a.h[b] = {})
        },
        Gd = function(a, b) {
            if (b < a.B) {
                b += a.A;
                var c = a.h[b];
                return c ===
                    Dd ? a.h[b] = [] : c
            }
            if (a.l) return c = a.l[b], c === Dd ? a.l[b] = [] : c
        },
        Hd = function(a, b) {
            a = Gd(a, b);
            return null == a ? 0 : a
        },
        Id = function(a, b, c) {
            0 !== c ? b < a.B ? a.h[b + a.A] = c : (Ed(a), a.l[b] = c) : b < a.B ? a.h[b + a.A] = null : (Ed(a), delete a.l[b]);
            return a
        },
        Kd = function(a) {
            if (a.o)
                for (var b in a.o) {
                    var c = a.o[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && Jd(c[d]);
                    else c && Jd(c)
                }
        },
        Jd = function(a) {
            Kd(a);
            return a.h
        },
        Ld = function(a, b) {
            return new a(b ? JSON.parse(b) : null)
        };
    Bd.prototype.toString = function() {
        Kd(this);
        return this.h.toString()
    };
    Bd.prototype.clone = function() {
        return new this.constructor(Md(Jd(this)))
    };
    var Md = function(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Md(d) : d)
            }
            return b
        }
        if (Cd && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Md(d) : d);
        return b
    };
    var Nd = kb(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function Od(a) {
        return a ? a.passive && Nd() ? a : a.capture || !1 : !1
    }
    var Pd = function(a, b, c, d) {
            return a.addEventListener ? (a.addEventListener(b, c, Od(d)), !0) : !1
        },
        Qd = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, Od(void 0))
        },
        Rd = function(a) {
            var b = void 0 === b ? {} : b;
            if (Da(window.CustomEvent)) var c = new CustomEvent("rum_blp", b);
            else c = document.createEvent("CustomEvent"), c.initCustomEvent("rum_blp", !!b.bubbles, !!b.cancelable, b.detail);
            a.dispatchEvent(c)
        };
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d")
    } catch (a) {}
    var Sd = !Wc || 9 <= Number(pd),
        Td = Wc || Vc || Zc;
    var Ud = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    k = Ud.prototype;
    k.clone = function() {
        return new Ud(this.x, this.y)
    };
    k.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    k.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    k.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    k.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var D = function(a, b) {
        this.width = a;
        this.height = b
    };
    k = D.prototype;
    k.clone = function() {
        return new D(this.width, this.height)
    };
    k.aspectRatio = function() {
        return this.width / this.height
    };
    k.isEmpty = function() {
        return !(this.width * this.height)
    };
    k.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var Xd = function(a) {
            return a ? new Vd(Wd(a)) : Pa || (Pa = new Vd)
        },
        $d = function() {
            var a = document;
            return a.querySelectorAll && a.querySelector ? a.querySelectorAll("SCRIPT") : a.getElementsByTagName("SCRIPT")
        },
        be = function(a, b) {
            ob(b, function(c, d) {
                c && "object" == typeof c && c.Pa && (c = c.Fa());
                "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : ae.hasOwnProperty(d) ? a.setAttribute(ae[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
            })
        },
        ae = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        ce = function(a) {
            a = a.document;
            a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
            return new D(a.clientWidth, a.clientHeight)
        },
        de = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Zc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Wc && md("10") && a.pageYOffset != b.scrollTop ? new Ud(b.scrollLeft, b.scrollTop) : new Ud(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        E = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        ge = function(a, b, c) {
            var d = arguments,
                e = document,
                f = String(d[0]),
                g = d[1];
            if (!Sd && g && (g.name || g.type)) {
                f = ["<", f];
                g.name && f.push(' name="', Cc(g.name), '"');
                if (g.type) {
                    f.push(' type="', Cc(g.type), '"');
                    var h = {};
                    Eb(h, g);
                    delete h.type;
                    g = h
                }
                f.push(">");
                f = f.join("")
            }
            f = ee(e, f);
            g && ("string" === typeof g ? f.className =
                g : Array.isArray(g) ? f.className = g.join(" ") : be(f, g));
            2 < d.length && fe(e, f, d);
            return f
        },
        fe = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 2; e < c.length; e++) {
                var f = c[e];
                if (!Ca(f) || Ea(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ea(f)) {
                                var g = "function" == typeof f.item || "string" == typeof f.item;
                                break a
                            }
                            if (Da(f)) {
                                g = "function" == typeof f.item;
                                break a
                            }
                        }
                        g = !1
                    }
                    y(g ? cb(f) : f, d)
                }
            }
        },
        ee = function(a, b) {
            b = String(b);
            "application/xhtml+xml" === a.contentType &&
                (b = b.toLowerCase());
            return a.createElement(b)
        },
        he = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        ie = function(a) {
            var b;
            if (Td && !(Wc && md("9") && !md("10") && q.SVGElement && a instanceof q.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return Ea(b) && 1 == b.nodeType ? b : null
        },
        je = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        Wd = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        ke = function(a) {
            try {
                return a.contentWindow || (a.contentDocument ? E(a.contentDocument) : null)
            } catch (b) {}
            return null
        },
        le = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        Vd = function(a) {
            this.g = a || q.document || document
        };
    Vd.prototype.createElement = function(a) {
        return ee(this.g, a)
    };
    Vd.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    Vd.prototype.contains = je;
    var ne = function(a) {
            me();
            return Qb(a)
        },
        me = za;
    var pe = function() {
            return !oe() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"))
        },
        oe = function() {
            return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
        };
    var qe = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        re = function(a, b) {
            if (a) {
                a = a.split("&");
                for (var c = 0; c < a.length; c++) {
                    var d = a[c].indexOf("="),
                        e = null;
                    if (0 <= d) {
                        var f = a[c].substring(0, d);
                        e = a[c].substring(d + 1)
                    } else f = a[c];
                    b(f, e ? Bc(e) : "")
                }
            }
        },
        se = /#|$/,
        te = function(a, b) {
            var c = a.search(se);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f ||
                            35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return Bc(a.substr(d, e - d))
        };
    var ue = function(a) {
            try {
                return !!a && null != a.location.href && Sc(a, "foo")
            } catch (b) {
                return !1
            }
        },
        ve = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
        },
        we = /https?:\/\/[^\/]+/,
        xe = function(a) {
            return (a = we.exec(a)) && a[0] || ""
        },
        ye = function() {
            var a = q;
            var b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        },
        Ae = function() {
            var a = ze;
            if (!a) return "";
            var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
            try {
                var c = b.exec(decodeURIComponent(a));
                if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
            } catch (d) {}
            return ""
        },
        Be = function(a, b) {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        Ce = function(a, b) {
            for (var c = 0; 50 > c; ++c) {
                if (Be(a, b)) return a;
                a: {
                    try {
                        var d = a.parent;
                        if (d && d != a) {
                            var e = d;
                            break a
                        }
                    } catch (f) {}
                    e = null
                }
                if (!(a = e)) break
            }
            return null
        };
    var De = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    var Ee = document,
        F = window;
    var Fe = function(a) {
        Fd(this, a, null)
    };
    x(Fe, Bd);
    var Ge = function(a) {
        Fd(this, a, null)
    };
    x(Ge, Bd);
    var He = function(a) {
        var b = [],
            c = [],
            d = {},
            e = function(f, g) {
                var h = g + "  ";
                try {
                    if (void 0 === f) b.push("undefined");
                    else if (null === f) b.push("NULL");
                    else if ("string" === typeof f) b.push('"' + f.replace(/\n/g, "\n" + g) + '"');
                    else if (Da(f)) b.push(String(f).replace(/\n/g, "\n" + g));
                    else if (Ea(f)) {
                        f[Fa] || c.push(f);
                        var l = Ha(f);
                        if (d[l]) b.push("*** reference loop detected (id=" + l + ") ***");
                        else {
                            d[l] = !0;
                            b.push("{");
                            for (var m in f) Da(f[m]) || (b.push("\n"), b.push(h), b.push(m + " = "), e(f[m], h));
                            b.push("\n" + g + "}");
                            delete d[l]
                        }
                    } else b.push(f)
                } catch (n) {
                    b.push("*** " +
                        n + " ***")
                }
            };
        e(a, "");
        for (a = 0; a < c.length; a++) Ia(c[a]);
        return b.join("")
    };
    var Ie = function(a) {
        this.g = a || {
            cookie: ""
        }
    };
    k = Ie.prototype;
    k.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Uh;
            d = c.kg || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.ld
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(u() + 1E3 * h)).toUTCString();
        this.g.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
    };
    k.get = function(a, b) {
        for (var c = a + "=", d = (this.g.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Sb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    k.za = function() {
        return Je(this).keys
    };
    k.ua = function() {
        return Je(this).values
    };
    k.isEmpty = function() {
        return !this.g.cookie
    };
    k.clear = function() {
        for (var a = Je(this).keys, b = a.length - 1; 0 <= b; b--) {
            var c = a[b];
            this.get(c);
            this.set(c, "", {
                ld: 0,
                path: void 0,
                domain: void 0
            })
        }
    };
    var Je = function(a) {
        a = (a.g.cookie || "").split(";");
        for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = Sb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        return {
            keys: b,
            values: c
        }
    };
    var Ke = function(a) {
            return (a = (new Ie(a)).get("DATA_USE_CONSENT", "")) ? a : null
        },
        Le = function(a) {
            var b = (b = (new Ie(a)).get("FCCDCF", "")) ? b : null;
            try {
                var c = b ? Ld(Fe, b) : null
            } catch (d) {
                c = null
            }
            if (!c) return Ke(a);
            c.o || (c.o = {});
            c.o[3] || (b = Gd(c, 3)) && (c.o[3] = new Ge(b));
            c = c.o[3];
            if (!c || null == Gd(c, 1)) return Ke(a);
            a = Gd(c, 2);
            b = Date.now();
            if (a) {
                if (b < a || b > a + 33696E6) return null
            } else return null;
            return Gd(c, 1)
        };
    var Ne = function(a) {
        Fd(this, a, Me)
    };
    x(Ne, Bd);
    var Me = [1, 2, 3, 4];
    var Oe = function(a) {
        var b = document;
        try {
            var c = Le(b);
            var d = c ? Ld(Ne, c) : null
        } catch (e) {
            d = null
        }
        if (!d) return 0;
        b = Gd(d, 7);
        if (null == b ? b : b) return 4;
        if (a) {
            if (Za(Gd(d, 3), a)) return 2;
            if (Za(Gd(d, 4), a)) return 3
        }
        return 1
    };
    var Pe = {
        wh: 1,
        Rh: 2,
        kh: 3
    };
    var G = function() {
        this.M = this.M;
        this.J = this.J
    };
    G.prototype.M = !1;
    G.prototype.sb = function() {
        return this.M
    };
    G.prototype.V = function() {
        this.M || (this.M = !0, this.R())
    };
    var Re = function(a, b) {
        b = Ma(Qe, b);
        a.M ? b() : (a.J || (a.J = []), a.J.push(b))
    };
    G.prototype.R = function() {
        if (this.J)
            for (; this.J.length;) this.J.shift()()
    };
    var Qe = function(a) {
        a && "function" == typeof a.V && a.V()
    };
    var H = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        },
        Se = function(a) {
            return a.right - a.left
        },
        Te = function(a) {
            return a.bottom - a.top
        };
    k = H.prototype;
    k.clone = function() {
        return new H(this.top, this.right, this.bottom, this.left)
    };
    k.contains = function(a) {
        return this && a ? a instanceof H ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    k.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    k.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    k.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Ue = function(a, b, c) {
        b instanceof Ud ? (a.left += b.x, a.right += b.x, a.top += b.y, a.bottom += b.y) : (a.left += b, a.right += b, "number" === typeof c && (a.top += c, a.bottom += c));
        return a
    };
    H.prototype.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var Ve = function(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    };
    Ve.prototype.clone = function() {
        return new Ve(this.left, this.top, this.width, this.height)
    };
    var We = function(a) {
        return new H(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    k = Ve.prototype;
    k.contains = function(a) {
        return a instanceof Ud ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    k.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    k.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    k.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    k.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.width *= a;
        this.top *= b;
        this.height *= b;
        return this
    };
    var Xe = function(a) {
        a = void 0 === a ? q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    };
    var Ye = /^((market|itms|intent|itms-appss):\/\/)/i;
    var $e = function(a, b) {
            if ("string" === typeof b)(b = Ze(a, b)) && (a.style[b] = void 0);
            else
                for (var c in b) {
                    var d = a,
                        e = b[c],
                        f = Ze(d, c);
                    f && (d.style[f] = e)
                }
        },
        af = {},
        Ze = function(a, b) {
            var c = af[b];
            if (!c) {
                var d = Hc(b);
                c = d;
                void 0 === a.style[d] && (d = (Zc ? "Webkit" : Yc ? "Moz" : Wc ? "ms" : Vc ? "O" : null) + Jc(d), void 0 !== a.style[d] && (c = d));
                af[b] = c
            }
            return c
        },
        bf = function(a, b) {
            var c = a.style[Hc(b)];
            return "undefined" !== typeof c ? c : a.style[Ze(a, b)] || ""
        },
        cf = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        },
        df = function(a) {
            var b = Wd(a),
                c = new Ud(0, 0);
            var d = b ? Wd(b) : document;
            d = !Wc || 9 <= Number(pd) || "CSS1Compat" == Xd(d).g.compatMode ? d.documentElement : d.body;
            if (a == d) return c;
            a = cf(a);
            b = de(Xd(b).g);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        ef = function(a, b) {
            var c = new Ud(0, 0),
                d = E(Wd(a));
            if (!Sc(d, "parent")) return c;
            do {
                if (d == b) var e = df(a);
                else e = cf(a), e = new Ud(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        },
        ff = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = Zc &&
                !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = cf(a), new D(a.right - a.left, a.bottom - a.top)) : new D(b, c)
        };
    var gf = !!window.google_async_iframe_id,
        hf = gf && window.parent || window,
        jf = function() {
            if (gf && !ue(hf)) {
                var a = "." + Ee.domain;
                try {
                    for (; 2 < a.split(".").length && !ue(hf);) Ee.domain = a = a.substr(a.indexOf(".") + 1), hf = window.parent
                } catch (b) {}
                ue(hf) || (hf = window)
            }
            return hf
        };
    Qb(Kb(Lb("//fonts.googleapis.com/css")));
    var mf = function(a, b, c) {
            c = void 0 === c ? {} : c;
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = c
        },
        nf = function(a) {
            return !!(a.error && a.meta && a.id)
        };
    var of = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/, sf = function(a) {
        a = a || pf();
        for (var b = new qf(q.location.href, q, !1), c = null, d = a.length - 1, e = d; 0 <= e; --e) {
            var f = a[e];
            !c && of .test(f.url) && (c = f);
            if (f.url && !f.wc) {
                b = f;
                break
            }
        }
        e = null;
        f = a.length && a[d].url;
        0 != b.depth && f && (e = a[d]);
        return new rf(b, e, c)
    }, pf = function() {
        var a = q,
            b = [],
            c = null;
        do {
            var d = a;
            if (ue(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new qf(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a &&
            d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = q;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.wc = !0);
        return b
    }, rf = function(a, b, c) {
        this.g = a;
        this.h = b;
        this.l = c
    }, qf = function(a, b, c) {
        this.url = a;
        this.ka = b;
        this.wc = !!c;
        this.depth = null
    };
    var tf = function() {
            this.h = "&";
            this.o = !1;
            this.l = {};
            this.A = 0;
            this.g = []
        },
        uf = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        wf = function(a, b, c, d, e) {
            var f = [];
            ve(a, function(g, h) {
                (g = vf(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        vf = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(vf(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(wf(a,
                b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        xf = function(a, b, c) {
            a.g.push(b);
            a.l[b] = c
        },
        yf = function(a, b, c, d) {
            a.g.push(b);
            a.l[b] = uf(c, d)
        },
        Af = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = zf(a) - c.length;
            if (0 > d) return "";
            a.g.sort(function(n, v) {
                return n - v
            });
            c = null;
            for (var e = "", f = 0; f < a.g.length; f++)
                for (var g = a.g[f], h = a.l[g], l = 0; l < h.length; l++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var m = wf(h[l], a.h, ",$");
                    if (m) {
                        m = e + m;
                        if (d >= m.length) {
                            d -= m.length;
                            b += m;
                            e = a.h;
                            break
                        }
                        a.o && (e = d, m[e - 1] == a.h && --e, b +=
                            m.substr(0, e), e = a.h, d = 0);
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a + ""
        },
        zf = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.h.length - 1
        };
    var Bf = function(a, b, c, d, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            if (c instanceof tf) var f = c;
            else f = new tf, ve(c, function(h, l) {
                var m = f,
                    n = m.A++;
                xf(m, n, uf(l, h))
            });
            var g = Af(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && De(q, g)
        } catch (h) {}
    };
    var Cf = null;
    var Df = function() {
            var a = q.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : u()
        },
        Ef = function() {
            var a = void 0 === a ? q : a;
            return (a = a.performance) && a.now ? a.now() : null
        },
        Ff = function(a) {
            var b = q.performance;
            return b && b.timing && b.timing[a] || 0
        },
        Gf = function() {
            var a = Math.min(Ff("domLoading") || Infinity, Ff("domInteractive") || Infinity);
            return Infinity == a ? Math.max(Ff("responseEnd"), Ff("navigationStart")) : a
        };
    var Hf = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var If = q.performance,
        Jf = !!(If && If.mark && If.measure && If.clearMarks),
        Kf = kb(function() {
            var a;
            if (a = Jf) {
                var b;
                if (null === Cf) {
                    Cf = "";
                    try {
                        a = "";
                        try {
                            a = q.top.location.hash
                        } catch (c) {
                            a = q.location.hash
                        }
                        a && (Cf = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Cf;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        }),
        Lf = function(a, b) {
            this.events = [];
            this.g = b || q;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.h = Kf() || (null !=
                c ? c : Math.random() < a)
        };
    Lf.prototype.C = function() {
        this.h = !1;
        this.events != this.g.google_js_reporting_queue && (Kf() && y(this.events, Mf), this.events.length = 0)
    };
    Lf.prototype.F = function(a) {
        !this.h || 2048 < this.events.length || this.events.push(a)
    };
    var Mf = function(a) {
        a && If && Kf() && (If.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), If.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Lf.prototype.start = function(a, b) {
        if (!this.h) return null;
        var c = Ef() || Df();
        a = new Hf(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        If && Kf() && If.mark(b);
        return a
    };
    Lf.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            var b = Ef() || Df();
            a.duration = b - a.value;
            b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            If && Kf() && If.mark(b);
            this.F(a)
        }
    };
    var Pf = function() {
        var a = Nf;
        this.l = Of;
        this.B = "jserror";
        this.o = !0;
        this.h = null;
        this.C = this.Ha;
        this.g = void 0 === a ? null : a;
        this.A = !1
    };
    k = Pf.prototype;
    k.pinger = function() {
        return this.l
    };
    k.$b = function(a) {
        this.h = a
    };
    k.Qc = function(a) {
        this.B = a
    };
    k.Rc = function(a) {
        this.o = a
    };
    k.Sc = function(a) {
        this.A = a
    };
    k.$a = function(a, b, c) {
        try {
            if (this.g && this.g.h) {
                var d = this.g.start(a.toString(), 3);
                var e = b();
                this.g.end(d)
            } else e = b()
        } catch (g) {
            b = this.o;
            try {
                Mf(d);
                var f = new mf(g, {
                    message: Qf(g)
                });
                b = this.C(a, f, void 0, c)
            } catch (h) {
                this.Ha(217, h)
            }
            if (!b) throw g;
        }
        return e
    };
    k.Nc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.$a(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    k.Ha = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new tf;
            f.o = !0;
            yf(f, 1, "context", a);
            nf(b) || (b = new mf(b, {
                message: Qf(b)
            }));
            b.msg && yf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (l) {}
            if (d) try {
                d(g)
            } catch (l) {}
            xf(f, 3, [g]);
            var h = sf();
            h.h && yf(f, 4, "top", h.h.url || "");
            yf(f, 5, "url", h.g.url || "");
            Bf(this.l, e, f, this.A, c)
        } catch (l) {
            try {
                Bf(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Qf(l),
                    url: h && h.g.url
                }, this.A, c)
            } catch (m) {}
        }
        return this.o
    };
    var Qf = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (e) {
                b = c
            }
        }
        return b
    };
    var Rf = function() {
        this.h = "jserror";
        this.l = !1;
        this.g = null;
        this.o = !1;
        this.B = Math.random();
        this.A = this.Ha
    };
    k = Rf.prototype;
    k.Qc = function(a) {
        this.h = a
    };
    k.$b = function(a) {
        this.g = a
    };
    k.Rc = function(a) {
        this.l = a
    };
    k.Sc = function(a) {
        this.o = a
    };
    k.Ha = function(a, b, c, d, e) {
        e = void 0 === e ? this.h : e;
        if ((this.o ? this.B : Math.random()) > (void 0 === c ? .01 : c)) return this.l;
        nf(b) || (b = new mf(b, {
            context: a,
            id: e
        }));
        if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
        q.google_js_errors = q.google_js_errors || [];
        q.google_js_errors.push(b);
        q.error_rep_loaded || (b = q.document, a = b.createElement("script"), Ac(a, ne(q.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), (b = b.getElementsByTagName("script")[0]) && b.parentNode && b.parentNode.insertBefore(a,
            b), q.error_rep_loaded = !0);
        return this.l
    };
    k.$a = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.A(a, e, .01, c, this.h)) throw e;
        }
        return d
    };
    k.Nc = function(a, b, c, d) {
        var e = this;
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.$a(a, function() {
                return b.apply(c, g)
            }, d)
        }
    };
    var Of, Sf, Tf = jf(),
        Nf = new Lf(1, Tf);
    Of = new function() {
        var a = void 0 === a ? F : a;
        this.h = "http:" === a.location.protocol ? "http:" : "https:";
        this.g = Math.random()
    };
    "number" !== typeof Tf.google_srt && (Tf.google_srt = Math.random());
    var Uf = Of,
        Vf = Tf.google_srt;
    0 <= Vf && 1 >= Vf && (Uf.g = Vf);
    Sf = new Pf;
    Sf.$b(function(a) {
        var b = F.jerExpIds;
        if (Array.isArray(b) && 0 !== b.length) {
            var c = a.eid;
            c ? (b = [].concat(ia(c.split(",")), ia(b)), db(b), a.eid = b.join(",")) : a.eid = b.join(",")
        }(b = F.jerUserAgent) && (a.useragent = b)
    });
    Sf.Sc(!0);
    "complete" == Tf.document.readyState ? Tf.google_measure_js_timing || Nf.C() : Nf.h && Pd(Tf, "load", function() {
        Tf.google_measure_js_timing || Nf.C()
    });
    var Wf = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, ue(a) && (c = a, b = d);
        return {
            ka: c,
            level: b
        }
    };
    var Xf = function() {
            this.S = {}
        },
        $f = function() {
            if (Yf) var a = Yf;
            else {
                a = ((a = Xe()) ? ue(a.master) ? a.master : null : null) || jf();
                var b = a.google_persistent_state_async;
                a = null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Yf = b : a.google_persistent_state_async = Yf = new Xf
            }
            b = jf();
            var c = Xe(b);
            c ? ((c = c || Xe()) ? (b = c.pageViewId, c = c.clientId, "string" === typeof c && (b += c.replace(/\D/g, "").substr(0, 6))) : b = null, b = +b) : (b = Wf(b).ka, (c = b.google_global_correlator) || (b.google_global_correlator = c = 1 + Math.floor(Math.random() * Math.pow(2,
                43))), b = c);
            c = Zf[7] || "google_ps_7";
            a = a.S;
            var d = a[c];
            a = void 0 === d ? a[c] = b : d;
            return a
        },
        Yf = null,
        ag = {},
        Zf = (ag[8] = "google_prev_ad_formats_by_region", ag[9] = "google_prev_ad_slotnames_by_region", ag);
    var bg = function(a) {
            return {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        cg = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        };
    var dg = function(a) {
        a = a._google_rum_ns_ = a._google_rum_ns_ || {};
        return a.pq = a.pq || []
    };
    var eg = function(a, b, c) {
            ve(b, function(d, e) {
                var f = c && c[e];
                !d && 0 !== d || f || (a += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(String(d)), c && (c[e] = !0))
            });
            return a
        },
        lg = function(a, b, c, d, e, f, g, h) {
            f = void 0 === f ? Infinity : f;
            g = void 0 === g ? !1 : g;
            Lf.call(this, a, h);
            var l = this;
            this.J = 0;
            this.K = f;
            this.$ = b;
            this.L = c;
            this.Y = d;
            this.aa = e;
            a = this.g.navigator;
            this.W = !("csi.gstatic.com" !== this.L || !a || !a.sendBeacon);
            this.A = {};
            this.I = {};
            this.g.performance && this.g.performance.now || fg(this, "dat", 1);
            a && a.deviceMemory && fg(this, "dmc",
                a.deviceMemory);
            this.T = !g;
            this.N = function() {
                l.g.setTimeout(function() {
                    return gg(l)
                }, 1100)
            };
            this.la = [];
            this.X = function() {
                hg(l, 1)
            };
            this.O = function() {
                hg(l, 2)
            };
            this.ha = nb(function() {
                gg(l)
            });
            this.pa = function() {
                var n = l.g.document;
                (null != n.hidden ? n.hidden : null != n.mozHidden ? n.mozHidden : null != n.webkitHidden && n.webkitHidden) && l.ha()
            };
            this.M = this.g.setTimeout(function() {
                return gg(l)
            }, 5E3);
            this.B = {};
            this.o = b.length + c.length + d.length + e.length + 3;
            this.l = 0;
            y(this.events, function(n) {
                return ig(l, n)
            });
            this.H = [];
            b = dg(this.g);
            var m = function(n) {
                var v = n[0];
                n = n[1];
                var B = v.length + n.length + 2;
                8E3 < l.o + l.l + B && gg(l);
                l.H.push([v, n]);
                l.l += B;
                6E3 <= l.o + l.l && gg(l);
                return 0
            };
            y(b, function(n) {
                return m(n)
            });
            b.length = 0;
            b.push = m;
            jg(this);
            kg(this)
        };
    p(lg, Lf);
    var kg = function(a) {
            "complete" === a.g.document.readyState ? a.g.setTimeout(function() {
                return gg(a)
            }, 0) : Pd(a.g, "load", a.N);
            var b = cg(a.g.document);
            "undefined" !== typeof b && Pd(a.g, b, a.pa);
            Pd(a.g, "unload", a.X);
            Pd(a.g, "pagehide", a.O)
        },
        fg = function(a, b, c) {
            c = String(c);
            a.o = null != a.A[b] ? a.o + (c.length - a.A[b].length) : a.o + (b.length + c.length + 2);
            a.A[b] = c
        },
        mg = function(a) {
            null != a.A.uet && (a.o -= 3 + a.A.uet.length + 2, delete a.A.uet)
        },
        ng = function(a, b, c, d, e) {
            e = void 0 === e ? "" : e;
            var f = null == a.B[b] ? b.length + c.length + 2 : d ? c.length +
                (void 0 === e ? "" : e).length : c.length - a.B[b].length;
            8E3 < a.o + a.l + f && (gg(a), f = b.length + c.length + 2);
            a.B[b] = d && null != a.B[b] ? a.B[b] + ("" + (void 0 === e ? "" : e) + c) : c;
            a.l += f;
            6E3 <= a.o + a.l && gg(a)
        },
        gg = function(a) {
            if (a.h && a.T) {
                try {
                    if (a.l) {
                        var b = a.B;
                        a.J++;
                        var c = og(a, b);
                        b = !1;
                        try {
                            b = !!(a.W && a.g.navigator && a.g.navigator.sendBeacon(c, null))
                        } catch (d) {
                            a.W = !1
                        }
                        b || De(a.g, c);
                        jg(a);
                        a.J === a.K && a.C()
                    }
                } catch (d) {
                    (new Rf).Ha(358, d)
                }
                a.B = {};
                a.l = 0;
                a.events.length = 0;
                a.g.clearTimeout(a.M);
                a.M = 0
            }
        },
        og = function(a, b) {
            var c = a.$ + "//" + a.L + a.Y + a.aa,
                d = {};
            c = eg(c, a.A, d);
            c = eg(c, b, d);
            a.g.google_timing_params && (c = eg(c, a.g.google_timing_params, d), a.g.google_timing_params = void 0);
            y(a.H, function(e) {
                var f = ha(e);
                e = f.next().value;
                f = f.next().value;
                var g = {};
                c = eg(c, (g[e] = f, g))
            });
            a.H.length = 0;
            return c
        },
        jg = function(a) {
            fg(a, "puid", (a.J + 1).toString(36) + "~" + u().toString(36))
        },
        ig = function(a, b) {
            var c = "met." + b.type,
                d = "number" === typeof b.value ? Math.round(b.value).toString(36) : b.value,
                e = Math.round(b.duration);
            b = "" + b.label + (null != b.slotId ? "_" + b.slotId : "") + ("." + d) + (0 <
                e ? "_" + e.toString(36) : "");
            ng(a, c, b, !0, "~")
        };
    lg.prototype.F = function(a) {
        this.h && this.J < this.K && (Lf.prototype.F.call(this, a), ig(this, a))
    };
    lg.prototype.C = function() {
        Lf.prototype.C.call(this);
        this.g.clearTimeout(this.M);
        this.l = this.M = 0;
        this.B = {};
        Bb(this.I);
        Bb(this.A);
        Qd(this.g, "load", this.N);
        Qd(this.g, "unload", this.X);
        Qd(this.g, "pagehide", this.O)
    };
    var hg = function(a, b) {
        fg(a, "uet", b);
        y(a.la, function(c) {
            try {
                c()
            } catch (d) {}
        });
        Rd(a.g);
        gg(a);
        mg(a)
    };
    var I = function() {
            this.g = new lg(1, "https:", "csi.gstatic.com", "/csi?v=2&s=", "ima", void 0, !0);
            var a = $f();
            null != a && fg(this.g, "c", a);
            a = parseInt(this.g.A.c, 10) / 2;
            null != a && fg(this.g, "slotId", a)
        },
        J = function(a, b, c) {
            if (null != c) {
                a = a.g;
                var d = b + "=" + c;
                a.I[d] || (ng(a, b, c, !1), 1E3 > d.length && (a.I[d] = !0))
            }
        },
        pg = function(a, b) {
            a = a.g;
            var c = Df() - 0;
            a.h && a.F(new Hf(b, 4, c, 0, void 0))
        };
    Aa(I);
    var sg = function(a) {
            var b = [];
            qg(new rg, a, b);
            return b.join("")
        },
        rg = function() {},
        qg = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (Array.isArray(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), qg(a, d[f], c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        e = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), tg(d, c), c.push(":"), qg(a, f, c),
                            e = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        tg(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("Unknown type: " + typeof b);
                }
            }
        },
        ug = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        vg = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g,
        tg = function(a, b) {
            b.push('"', a.replace(vg,
                function(c) {
                    var d = ug[c];
                    d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ug[c] = d);
                    return d
                }), '"')
        };
    var wg = function() {
            this.l = null;
            this.g = "missing-id";
            this.h = !1
        },
        yg = function(a) {
            var b = null;
            try {
                b = document.getElementsByClassName("lima-exp-data")
            } catch (c) {
                return xg("missing-element", a.g), null
            }
            if (1 < b.length) return xg("multiple-elements", a.g), null;
            b = b[0];
            return b ? b.innerHTML : (xg("missing-element", a.g), null)
        },
        Ag = function() {
            var a = zg,
                b = yg(a);
            if (null !== b)
                if (/^\s*$/.test(b) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(b.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,
                        "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
                    var c = JSON.parse(b);
                    b = c.experimentIds;
                    var d = c.binaryIdentifier;
                    c = c.adEventId;
                    var e = "string" === typeof d;
                    if ("string" == typeof c) {
                        var f = I.D();
                        null != c && fg(f.g, "qqid", c)
                    }
                    e && (a.g = d);
                    "string" !== typeof b ? xg("missing-flags", a.g) : (e || xg("missing-binary-id", a.g), a.l = b)
                } else xg("invalid-json", a.g)
        };
    wg.prototype.reset = function() {
        this.l = null;
        this.g = "missing-id"
    };
    var Bg = function(a, b, c) {
            this.id = a;
            this.G = b;
            this.g = c;
            this.Zb = !1
        },
        Cg = function(a) {
            return a.Zb || a.g
        },
        Dg = function() {
            this.g = []
        },
        Eg = function() {
            this.g = new Map;
            this.h = !1;
            this.o = new Dg;
            this.A = new Bg(0, 0, !1);
            this.l = [this.o]
        },
        L = function(a) {
            var b = Fg;
            if (b.h || b.g.has(a.id) || null == a.G && null == a.control || 0 == a.ed) return b.A;
            var c = b.o;
            if (null != a.control)
                for (var d = ha(b.l), e = d.next(); !e.done; e = d.next()) {
                    if (e = e.value, e.g.includes(a.control)) {
                        c = e;
                        break
                    }
                } else null != a.Za && (c = a.Za);
            d = 0;
            null != a.control ? d = a.control.G : null != a.G &&
                (d = a.G);
            a = new Bg(a.id, d, !!a.Th);
            c.g.push(a);
            b.l.includes(c) || b.l.push(c);
            b.g.set(a.id, a);
            return a
        },
        Gg = function() {
            var a = Fg;
            return [].concat(ia(a.g.keys())).filter(function(b) {
                return Cg(this.g.get(b))
            }, a)
        },
        Hg = function(a) {
            var b = Fg;
            b.h || (a.g(b.l, b.g), b.h = !0)
        };
    Eg.prototype.reset = function() {
        for (var a = ha(this.g), b = a.next(); !b.done; b = a.next()) b = ha(b.value), b.next(), b.next().value.Zb = !1;
        this.h = !1
    };
    var Fg = new Eg,
        Jg = function() {
            return Ig.g.filter(function(a) {
                return Cg(a)
            }).map(function(a) {
                return a.id
            })
        };
    var Kg = function() {};
    Kg.prototype.g = function(a) {
        a = ha(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            var c = 0,
                d = Math.floor(1E3 * Math.random());
            b = ha(b.value.g);
            for (var e = b.next(); !e.done; e = b.next())
                if (e = e.value, c += e.G, d < c) {
                    e.Zb = !0;
                    break
                }
        }
    };
    var Lg = function(a) {
        this.h = a
    };
    Lg.prototype.g = function(a, b) {
        a = ha(this.h);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = b.get(c.value)) c.Zb = !0
    };
    var Mg = function(a, b) {
        this.h = a;
        this.l = b
    };
    p(Mg, Lg);
    Mg.prototype.g = function(a, b) {
        Lg.prototype.g.call(this, a, b);
        var c = [];
        a = [];
        for (var d = ha(this.h), e = d.next(); !e.done; e = d.next()) e = e.value, b.get(e) ? c.push(e) : a.push(e);
        b = c.map(String).join(",") || "0";
        a = a.map(String).join(",") || "0";
        J(I.D(), "sei", b);
        J(I.D(), "nsei", a);
        J(I.D(), "bi", this.l)
    };
    var Ng = function() {
        wg.apply(this, arguments)
    };
    p(Ng, wg);
    var xg = function(a, b) {
        var c = I.D();
        J(c, "eee", a);
        J(c, "bi", b)
    };
    Aa(Ng);

    function Og() {
        return Pg.split(",").map(function(a) {
            return parseInt(a, 10)
        }).filter(function(a) {
            return !isNaN(a)
        })
    };
    var Ig = new Dg;
    L({
        id: 418572103,
        G: 0
    });
    L({
        id: 420706097,
        G: 10
    });
    L({
        id: 420706098,
        G: 10
    });
    L({
        id: 21061786,
        G: 10
    });
    L({
        id: 21061817,
        G: 10
    });
    L({
        id: 21061824,
        G: 50
    });
    L({
        id: 21061888,
        G: 10
    });
    L({
        id: 21061893,
        G: 10
    });
    L({
        id: 21062100,
        G: 0
    });
    L({
        id: 420706109,
        G: 10
    });
    L({
        id: 420706110,
        G: 10
    });
    L({
        id: 21062347,
        G: 0
    });
    L({
        id: 21063070,
        G: 0
    });
    L({
        id: 21063072,
        G: 0
    });
    L({
        id: 21063100,
        G: 0
    });
    L({
        id: 420706105,
        G: 10
    });
    L({
        id: 420706106,
        G: 10
    });
    L({
        id: 75259402,
        G: 10
    });
    L({
        id: 75259403,
        G: 10
    });
    L({
        id: 21064018,
        G: 0
    });
    L({
        id: 21064020,
        G: 0
    });
    L({
        id: 21064022,
        G: 0
    });
    L({
        id: 21064024,
        G: 0
    });
    L({
        id: 21064075,
        G: 0
    });
    L({
        id: 21064201,
        G: 50
    });
    var Qg = L({
        id: 210640812,
        G: 10
    });
    L({
        id: 420706142,
        G: 0
    });
    L({
        id: 21064347,
        G: 0
    });
    L({
        id: 72811302,
        G: 0
    });
    L({
        id: 72811303,
        G: 0
    });
    L({
        id: 44719312,
        G: 0
    });
    L({
        id: 72811304,
        G: 0
    });
    L({
        id: 44719313,
        G: 0
    });
    L({
        id: 72811305,
        G: 0
    });
    L({
        id: 72811306,
        G: 0
    });
    L({
        id: 72811307,
        G: 0
    });
    L({
        id: 21064565,
        G: 0
    });
    L({
        id: 21064567,
        G: 0
    });
    L({
        id: 21064572,
        G: 10
    });
    L({
        id: 21064573,
        G: 10
    });
    L({
        id: 40819804,
        G: 10
    });
    var Rg = L({
        id: 40819805,
        G: 10
    });
    L({
        id: 418572006,
        G: 10
    });
    L({
        id: 44711678,
        G: 10
    });
    L({
        id: 420706136,
        G: 10
    });
    L({
        id: 420706137,
        G: 10
    });
    L({
        id: 420706138,
        G: 10
    });
    L({
        id: 420706139,
        G: 10
    });
    L({
        id: 420706140,
        G: 10
    });
    L({
        id: 420706141,
        G: 10
    });
    L({
        id: 21065285,
        G: 1
    });
    L({
        id: 21065286,
        G: 1
    });
    L({
        id: 21065287,
        G: 10,
        ed: qd
    });
    L({
        id: 21065288,
        G: 10,
        ed: qd
    });
    L({
        id: 72811314,
        G: 0
    });
    L({
        id: 44714510,
        G: 0
    });
    L({
        id: 44714743,
        G: 0
    });
    L({
        id: 44718898,
        G: 0
    });
    L({
        id: 44719216,
        G: 0
    });
    L({
        id: 42530094,
        G: 50,
        Za: Ig
    });
    L({
        id: 42530095,
        G: 50,
        Za: Ig
    });
    L({
        id: 42530173,
        G: 10,
        Za: Ig
    });
    L({
        id: 42530174,
        G: 10,
        Za: Ig
    });
    L({
        id: 668123728,
        G: 10,
        Za: Ig
    });
    L({
        id: 668123729,
        G: 10,
        Za: Ig
    });
    L({
        id: 31061774,
        G: 10
    });
    var Sg = L({
        id: 31061775,
        G: 10
    });
    L({
        id: 504733015,
        G: 0
    });
    var Tg = L({
        id: 504733016,
        G: 0
    });
    L({
        id: 189176E3,
        G: 50
    });
    L({
        id: 189176001,
        G: 50
    });
    L({
        id: 40819802,
        G: 10
    });
    L({
        id: 40819803,
        G: 10
    });
    L({
        id: 44712632,
        G: 10
    });
    L({
        id: 44712633,
        G: 10
    });
    L({
        id: 44715336,
        G: 10
    });
    L({
        id: 44716179,
        G: 10
    });
    L({
        id: 44716180,
        G: 10
    });
    L({
        id: 44716182,
        G: 0
    });
    L({
        id: 42530380,
        G: 0
    });
    L({
        id: 44717156,
        G: 1
    });
    L({
        id: 44716185,
        G: 0
    });
    L({
        id: 44717393,
        G: 10
    });
    L({
        id: 44717394,
        G: 10
    });
    L({
        id: 44719463,
        G: 10
    });
    L({
        id: 44719464,
        G: 10
    });
    var Ug = L({
            id: 75259405,
            G: 0
        }),
        Vg = L({
            id: 75259406,
            G: 0
        });
    L({
        id: 44721472,
        G: 0
    });
    L({
        id: 75259407,
        G: 0
    });
    L({
        id: 75259408,
        G: 0
    });
    L({
        id: 75259409,
        G: 0
    });
    L({
        id: 44721618,
        G: 10
    });
    L({
        id: 44721619,
        G: 10
    });
    L({
        id: 75259410,
        G: 0
    });
    L({
        id: 75259411,
        G: 0
    });
    if ("undefined" === typeof window.v8_flag_map) {
        var zg = Ng.D();
        zg.h || (Ag(), zg.h = !0);
        var Pg = zg.l,
            Wg;
        zg.h || (Ag(), zg.h = !0);
        Wg = zg.g;
        if (null != Pg) {
            var Xg = new Mg(Og(), Wg);
            Hg(Xg)
        }
    };
    Fg.reset();
    Hg(new Kg);
    var Yg = function(a, b) {
        this.type = a;
        this.g = this.target = b;
        this.defaultPrevented = !1
    };
    Yg.prototype.l = function() {
        this.defaultPrevented = !0
    };
    q.console && "function" === typeof q.console.log && La(q.console.log, q.console);
    var Zg = function(a) {
        for (var b = [], c = a = E(a.ownerDocument); c != a.top; c = c.parent)
            if (c.frameElement) b.push(c.frameElement);
            else break;
        return b
    };
    var $g = !Wc || 9 <= Number(pd),
        ah = Wc && !md("9"),
        bh = function() {
            if (!q.addEventListener || !Object.defineProperty) return !1;
            var a = !1,
                b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
            try {
                q.addEventListener("test", za, b), q.removeEventListener("test", za, b)
            } catch (c) {}
            return a
        }();
    var dh = function(a, b) {
        Yg.call(this, a ? a.type : "");
        this.relatedTarget = this.g = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
        this.key = "";
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.h = null;
        if (a) {
            var c = this.type = a.type,
                d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.g = b;
            (b = a.relatedTarget) ? Yc && (Sc(b, "nodeName") || (b = null)): "mouseover" == c ? b = a.fromElement :
                "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
            this.button = a.button;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.pointerId =
                a.pointerId || 0;
            this.pointerType = "string" === typeof a.pointerType ? a.pointerType : ch[a.pointerType] || "";
            this.state = a.state;
            this.h = a;
            a.defaultPrevented && this.l()
        }
    };
    x(dh, Yg);
    var ch = {
        2: "touch",
        3: "pen",
        4: "mouse"
    };
    dh.prototype.l = function() {
        dh.Ja.l.call(this);
        var a = this.h;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, ah) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var eh = "closure_listenable_" + (1E6 * Math.random() | 0),
        fh = function(a) {
            return !(!a || !a[eh])
        },
        gh = 0;
    var hh = function(a, b, c, d, e) {
            this.listener = a;
            this.g = null;
            this.src = b;
            this.type = c;
            this.capture = !!d;
            this.Jb = e;
            this.key = ++gh;
            this.ib = this.Eb = !1
        },
        ih = function(a) {
            a.ib = !0;
            a.listener = null;
            a.g = null;
            a.src = null;
            a.Jb = null
        };
    var jh = function(a) {
        this.src = a;
        this.g = {};
        this.h = 0
    };
    jh.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.g[f];
        a || (a = this.g[f] = [], this.h++);
        var g = kh(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Eb = !1)) : (b = new hh(b, this.src, f, !!d, e), b.Eb = c, a.push(b));
        return b
    };
    var lh = function(a, b) {
        var c = b.type;
        c in a.g && $a(a.g[c], b) && (ih(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
    };
    jh.prototype.ob = function(a, b, c, d) {
        a = this.g[a.toString()];
        var e = -1;
        a && (e = kh(a, b, c, d));
        return -1 < e ? a[e] : null
    };
    jh.prototype.hasListener = function(a, b) {
        var c = void 0 !== a,
            d = c ? a.toString() : "",
            e = void 0 !== b;
        return qb(this.g, function(f) {
            for (var g = 0; g < f.length; ++g)
                if (!(c && f[g].type != d || e && f[g].capture != b)) return !0;
            return !1
        })
    };
    var kh = function(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.ib && f.listener == b && f.capture == !!c && f.Jb == d) return e
        }
        return -1
    };
    var mh = "closure_lm_" + (1E6 * Math.random() | 0),
        nh = {},
        oh = 0,
        qh = function(a, b, c, d, e) {
            if (d && d.once) return ph(a, b, c, d, e);
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) qh(a, b[f], c, d, e);
                return null
            }
            c = rh(c);
            return fh(a) ? a.P(b, c, Ea(d) ? !!d.capture : !!d, e) : sh(a, b, c, !1, d, e)
        },
        sh = function(a, b, c, d, e, f) {
            if (!b) throw Error("Invalid event type");
            var g = Ea(e) ? !!e.capture : !!e,
                h = th(a);
            h || (a[mh] = h = new jh(a));
            c = h.add(b, c, d, g, f);
            if (c.g) return c;
            d = uh();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) bh || (e = g), void 0 === e && (e = !1),
                a.addEventListener(b.toString(), d, e);
            else if (a.attachEvent) a.attachEvent(vh(b.toString()), d);
            else if (a.addListener && a.removeListener) a.addListener(d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            oh++;
            return c
        },
        uh = function() {
            var a = wh,
                b = $g ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        ph = function(a, b, c, d, e) {
            if (Array.isArray(b)) {
                for (var f = 0; f < b.length; f++) ph(a, b[f], c, d, e);
                return null
            }
            c = rh(c);
            return fh(a) ? a.vb(b,
                c, Ea(d) ? !!d.capture : !!d, e) : sh(a, b, c, !0, d, e)
        },
        xh = function(a, b, c, d, e) {
            if (Array.isArray(b))
                for (var f = 0; f < b.length; f++) xh(a, b[f], c, d, e);
            else d = Ea(d) ? !!d.capture : !!d, c = rh(c), fh(a) ? a.Ca(b, c, d, e) : a && (a = th(a)) && (b = a.ob(b, c, d, e)) && yh(b)
        },
        yh = function(a) {
            if ("number" !== typeof a && a && !a.ib) {
                var b = a.src;
                if (fh(b)) lh(b.o, a);
                else {
                    var c = a.type,
                        d = a.g;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(vh(c), d) : b.addListener && b.removeListener && b.removeListener(d);
                    oh--;
                    (c = th(b)) ? (lh(c,
                        a), 0 == c.h && (c.src = null, b[mh] = null)) : ih(a)
                }
            }
        },
        vh = function(a) {
            return a in nh ? nh[a] : nh[a] = "on" + a
        },
        Ah = function(a, b, c, d) {
            var e = !0;
            if (a = th(a))
                if (b = a.g[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.capture == c && !f.ib && (f = zh(f, d), e = e && !1 !== f)
                    }
            return e
        },
        zh = function(a, b) {
            var c = a.listener,
                d = a.Jb || a.src;
            a.Eb && yh(a);
            return c.call(d, b)
        },
        wh = function(a, b) {
            if (a.ib) return !0;
            if (!$g) {
                var c = b || ya("window.event");
                b = new dh(c, this);
                var d = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var e = !1;
                        if (0 ==
                            c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (g) {
                            e = !0
                        }
                        if (e || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (e = b.g; e; e = e.parentNode) c.push(e);a = a.type;
                    for (e = c.length - 1; 0 <= e; e--) {
                        b.g = c[e];
                        var f = Ah(c[e], a, !0, b);
                        d = d && f
                    }
                    for (e = 0; e < c.length; e++) b.g = c[e],
                    f = Ah(c[e], a, !1, b),
                    d = d && f
                }
                return d
            }
            return zh(a, new dh(b, this))
        },
        th = function(a) {
            a = a[mh];
            return a instanceof jh ? a : null
        },
        Bh = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        rh = function(a) {
            if (Da(a)) return a;
            a[Bh] || (a[Bh] = function(b) {
                return a.handleEvent(b)
            });
            return a[Bh]
        };
    var N = function() {
        G.call(this);
        this.o = new jh(this);
        this.Ab = this;
        this.ha = null
    };
    x(N, G);
    N.prototype[eh] = !0;
    k = N.prototype;
    k.addEventListener = function(a, b, c, d) {
        qh(this, a, b, c, d)
    };
    k.removeEventListener = function(a, b, c, d) {
        xh(this, a, b, c, d)
    };
    k.dispatchEvent = function(a) {
        var b, c = this.ha;
        if (c)
            for (b = []; c; c = c.ha) b.push(c);
        c = this.Ab;
        var d = a.type || a;
        if ("string" === typeof a) a = new Yg(a, c);
        else if (a instanceof Yg) a.target = a.target || c;
        else {
            var e = a;
            a = new Yg(d, c);
            Eb(a, e)
        }
        e = !0;
        if (b)
            for (var f = b.length - 1; 0 <= f; f--) {
                var g = a.g = b[f];
                e = Ch(g, d, !0, a) && e
            }
        g = a.g = c;
        e = Ch(g, d, !0, a) && e;
        e = Ch(g, d, !1, a) && e;
        if (b)
            for (f = 0; f < b.length; f++) g = a.g = b[f], e = Ch(g, d, !1, a) && e;
        return e
    };
    k.R = function() {
        N.Ja.R.call(this);
        if (this.o) {
            var a = this.o,
                b = 0,
                c;
            for (c in a.g) {
                for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ih(d[e]);
                delete a.g[c];
                a.h--
            }
        }
        this.ha = null
    };
    k.P = function(a, b, c, d) {
        return this.o.add(String(a), b, !1, c, d)
    };
    k.vb = function(a, b, c, d) {
        return this.o.add(String(a), b, !0, c, d)
    };
    k.Ca = function(a, b, c, d) {
        var e = this.o;
        a = String(a).toString();
        if (a in e.g) {
            var f = e.g[a];
            b = kh(f, b, c, d); - 1 < b && (ih(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--))
        }
    };
    var Ch = function(a, b, c, d) {
        b = a.o.g[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.ib && g.capture == c) {
                var h = g.listener,
                    l = g.Jb || g.src;
                g.Eb && lh(a.o, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && !d.defaultPrevented
    };
    N.prototype.ob = function(a, b, c, d) {
        return this.o.ob(String(a), b, c, d)
    };
    N.prototype.hasListener = function(a, b) {
        return this.o.hasListener(void 0 !== a ? String(a) : void 0, b)
    };
    var Dh = function(a, b) {
        this.l = a;
        this.o = b;
        this.h = 0;
        this.g = null
    };
    Dh.prototype.get = function() {
        if (0 < this.h) {
            this.h--;
            var a = this.g;
            this.g = a.next;
            a.next = null
        } else a = this.l();
        return a
    };
    var Eh = function(a, b) {
        a.o(b);
        100 > a.h && (a.h++, b.next = a.g, a.g = b)
    };
    var Fh = function(a) {
            q.setTimeout(function() {
                throw a;
            }, 0)
        },
        Gh, Hh = function() {
            var a = q.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !C("Presto") && (a = function() {
                var e = ee(document, "IFRAME");
                e.style.display = "none";
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.close();
                var g = "callImmediate" + Math.random(),
                    h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
                e = La(function(l) {
                    if (("*" ==
                            h || l.origin == h) && l.data == g) this.port1.onmessage()
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        f.postMessage(g, h)
                    }
                }
            });
            if ("undefined" !== typeof a && !sc()) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (void 0 !== c.next) {
                        c = c.next;
                        var e = c.dd;
                        c.dd = null;
                        e()
                    }
                };
                return function(e) {
                    d.next = {
                        dd: e
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return function(e) {
                q.setTimeout(e, 0)
            }
        };
    var Ih = function() {
            this.h = this.g = null
        },
        Kh = new Dh(function() {
            return new Jh
        }, function(a) {
            a.reset()
        });
    Ih.prototype.add = function(a, b) {
        var c = Kh.get();
        c.set(a, b);
        this.h ? this.h.next = c : this.g = c;
        this.h = c
    };
    var Mh = function() {
            var a = Lh,
                b = null;
            a.g && (b = a.g, a.g = a.g.next, a.g || (a.h = null), b.next = null);
            return b
        },
        Jh = function() {
            this.next = this.h = this.g = null
        };
    Jh.prototype.set = function(a, b) {
        this.g = a;
        this.h = b;
        this.next = null
    };
    Jh.prototype.reset = function() {
        this.next = this.h = this.g = null
    };
    var Qh = function(a, b) {
            Nh || Oh();
            Ph || (Nh(), Ph = !0);
            Lh.add(a, b)
        },
        Nh, Oh = function() {
            if (q.Promise && q.Promise.resolve) {
                var a = q.Promise.resolve(void 0);
                Nh = function() {
                    a.then(Rh)
                }
            } else Nh = function() {
                var b = Rh;
                !Da(q.setImmediate) || q.Window && q.Window.prototype && !C("Edge") && q.Window.prototype.setImmediate == q.setImmediate ? (Gh || (Gh = Hh()), Gh(b)) : q.setImmediate(b)
            }
        },
        Ph = !1,
        Lh = new Ih,
        Rh = function() {
            for (var a; a = Mh();) {
                try {
                    a.g.call(a.h)
                } catch (b) {
                    Fh(b)
                }
                Eh(Kh, a)
            }
            Ph = !1
        };
    var Sh = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    };
    var Uh = function(a) {
            this.g = 0;
            this.C = void 0;
            this.o = this.h = this.l = null;
            this.A = this.B = !1;
            if (a != za) try {
                var b = this;
                a.call(void 0, function(c) {
                    Th(b, 2, c)
                }, function(c) {
                    Th(b, 3, c)
                })
            } catch (c) {
                Th(this, 3, c)
            }
        },
        Vh = function() {
            this.next = this.context = this.h = this.l = this.g = null;
            this.o = !1
        };
    Vh.prototype.reset = function() {
        this.context = this.h = this.l = this.g = null;
        this.o = !1
    };
    var Wh = new Dh(function() {
            return new Vh
        }, function(a) {
            a.reset()
        }),
        Xh = function(a, b, c) {
            var d = Wh.get();
            d.l = a;
            d.h = b;
            d.context = c;
            return d
        };
    Uh.prototype.then = function(a, b, c) {
        return Yh(this, Da(a) ? a : null, Da(b) ? b : null, c)
    };
    Uh.prototype.$goog_Thenable = !0;
    Uh.prototype.cancel = function(a) {
        if (0 == this.g) {
            var b = new Zh(a);
            Qh(function() {
                $h(this, b)
            }, this)
        }
    };
    var $h = function(a, b) {
            if (0 == a.g)
                if (a.l) {
                    var c = a.l;
                    if (c.h) {
                        for (var d = 0, e = null, f = null, g = c.h; g && (g.o || (d++, g.g == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.g && 1 == d ? $h(c, b) : (f ? (d = f, d.next == c.o && (c.o = d), d.next = d.next.next) : ai(c), bi(c, e, 3, b)))
                    }
                    a.l = null
                } else Th(a, 3, b)
        },
        di = function(a, b) {
            a.h || 2 != a.g && 3 != a.g || ci(a);
            a.o ? a.o.next = b : a.h = b;
            a.o = b
        },
        Yh = function(a, b, c, d) {
            var e = Xh(null, null, null);
            e.g = new Uh(function(f, g) {
                e.l = b ? function(h) {
                    try {
                        var l = b.call(d, h);
                        f(l)
                    } catch (m) {
                        g(m)
                    }
                } : f;
                e.h = c ? function(h) {
                    try {
                        var l = c.call(d,
                            h);
                        void 0 === l && h instanceof Zh ? g(h) : f(l)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.g.l = a;
            di(a, e);
            return e.g
        };
    Uh.prototype.J = function(a) {
        this.g = 0;
        Th(this, 2, a)
    };
    Uh.prototype.M = function(a) {
        this.g = 0;
        Th(this, 3, a)
    };
    var Th = function(a, b, c) {
            if (0 == a.g) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.g = 1;
                a: {
                    var d = c,
                        e = a.J,
                        f = a.M;
                    if (d instanceof Uh) {
                        di(d, Xh(e || za, f || null, a));
                        var g = !0
                    } else if (Sh(d)) d.then(e, f, a),
                    g = !0;
                    else {
                        if (Ea(d)) try {
                            var h = d.then;
                            if (Da(h)) {
                                ei(d, h, e, f, a);
                                g = !0;
                                break a
                            }
                        } catch (l) {
                            f.call(a, l);
                            g = !0;
                            break a
                        }
                        g = !1
                    }
                }
                g || (a.C = c, a.g = b, a.l = null, ci(a), 3 != b || c instanceof Zh || fi(a, c))
            }
        },
        ei = function(a, b, c, d, e) {
            var f = !1,
                g = function(l) {
                    f || (f = !0, c.call(e, l))
                },
                h = function(l) {
                    f || (f = !0, d.call(e, l))
                };
            try {
                b.call(a,
                    g, h)
            } catch (l) {
                h(l)
            }
        },
        ci = function(a) {
            a.B || (a.B = !0, Qh(a.F, a))
        },
        ai = function(a) {
            var b = null;
            a.h && (b = a.h, a.h = b.next, b.next = null);
            a.h || (a.o = null);
            return b
        };
    Uh.prototype.F = function() {
        for (var a; a = ai(this);) bi(this, a, this.g, this.C);
        this.B = !1
    };
    var bi = function(a, b, c, d) {
            if (3 == c && b.h && !b.o)
                for (; a && a.A; a = a.l) a.A = !1;
            if (b.g) b.g.l = null, gi(b, c, d);
            else try {
                b.o ? b.l.call(b.context) : gi(b, c, d)
            } catch (e) {
                hi.call(null, e)
            }
            Eh(Wh, b)
        },
        gi = function(a, b, c) {
            2 == b ? a.l.call(a.context, c) : a.h && a.h.call(a.context, c)
        },
        fi = function(a, b) {
            a.A = !0;
            Qh(function() {
                a.A && hi.call(null, b)
            })
        },
        hi = Fh,
        Zh = function(a) {
            Oa.call(this, a)
        };
    x(Zh, Oa);
    Zh.prototype.name = "cancel";
    var ii = function(a, b) {
        N.call(this);
        this.h = a || 1;
        this.g = b || q;
        this.l = La(this.ng, this);
        this.A = u()
    };
    x(ii, N);
    k = ii.prototype;
    k.pb = !1;
    k.wa = null;
    k.setInterval = function(a) {
        this.h = a;
        this.wa && this.pb ? (this.stop(), this.start()) : this.wa && this.stop()
    };
    k.ng = function() {
        if (this.pb) {
            var a = u() - this.A;
            0 < a && a < .8 * this.h ? this.wa = this.g.setTimeout(this.l, this.h - a) : (this.wa && (this.g.clearTimeout(this.wa), this.wa = null), this.dispatchEvent("tick"), this.pb && (this.stop(), this.start()))
        }
    };
    k.start = function() {
        this.pb = !0;
        this.wa || (this.wa = this.g.setTimeout(this.l, this.h), this.A = u())
    };
    k.stop = function() {
        this.pb = !1;
        this.wa && (this.g.clearTimeout(this.wa), this.wa = null)
    };
    k.R = function() {
        ii.Ja.R.call(this);
        this.stop();
        delete this.g
    };
    var ji = function(a, b, c) {
        if (Da(a)) c && (a = La(a, c));
        else if (a && "function" == typeof a.handleEvent) a = La(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0)
    };
    var ki = function() {
            return Math.round(u() / 1E3)
        },
        li = function(a) {
            var b = window.performance && window.performance.timing && window.performance.timing.domLoading && 0 < window.performance.timing.domLoading ? Math.round(window.performance.timing.domLoading / 1E3) : null;
            return null != b ? b : null != a ? a : ki()
        };
    var mi = function() {
        this.h = -1
    };
    var ni = function() {
        this.g = {};
        return this
    };
    ni.prototype.set = function(a, b) {
        this.g[a] = b
    };
    var oi = function(a, b) {
        a.g.eb = Cb(a.g, "eb", 0) | b
    };
    ni.prototype.get = function(a) {
        return Cb(this.g, a, null)
    };
    var pi = null,
        qi = function() {
            this.g = {};
            this.h = 0
        },
        ri = function() {
            pi || (pi = new qi);
            return pi
        },
        si = function(a, b) {
            a.g[b.B] = b
        },
        ti = function(a, b) {
            this.B = a;
            this.o = !0;
            this.h = b
        };
    ti.prototype.g = function() {
        return this.h
    };
    ti.prototype.l = function() {
        return String(this.h)
    };
    var ui = function(a, b) {
        ti.call(this, String(a), b);
        this.A = a;
        this.h = !!b
    };
    p(ui, ti);
    ui.prototype.l = function() {
        return this.h ? "1" : "0"
    };
    var vi = function(a, b) {
        ti.call(this, a, b)
    };
    p(vi, ti);
    vi.prototype.l = function() {
        return this.h ? Math.round(this.h.top) + "." + Math.round(this.h.left) + "." + (Math.round(this.h.top) + Math.round(this.h.height)) + "." + (Math.round(this.h.left) + Math.round(this.h.width)) : ""
    };
    var wi = function(a) {
        if (a.match(/^-?[0-9]+\.-?[0-9]+\.-?[0-9]+\.-?[0-9]+$/)) {
            a = a.split(".");
            var b = Number(a[0]),
                c = Number(a[1]);
            return new vi("", new Ve(c, b, Number(a[3]) - c, Number(a[2]) - b))
        }
        return new vi("", new Ve(0, 0, 0, 0))
    };
    var xi = function(a) {
            var b = new Ve(-Number.MAX_VALUE / 2, -Number.MAX_VALUE / 2, Number.MAX_VALUE, Number.MAX_VALUE),
                c = new Ve(0, 0, 0, 0);
            if (!a || 0 == a.length) return c;
            for (var d = 0; d < a.length; d++) {
                a: {
                    var e = b;
                    var f = a[d],
                        g = Math.max(e.left, f.left),
                        h = Math.min(e.left + e.width, f.left + f.width);
                    if (g <= h) {
                        var l = Math.max(e.top, f.top);
                        f = Math.min(e.top + e.height, f.top + f.height);
                        if (l <= f) {
                            e.left = g;
                            e.top = l;
                            e.width = h - g;
                            e.height = f - l;
                            e = !0;
                            break a
                        }
                    }
                    e = !1
                }
                if (!e) return c
            }
            return b
        },
        yi = function(a, b) {
            var c = a.getBoundingClientRect();
            a = ef(a,
                b);
            return new Ve(Math.round(a.x), Math.round(a.y), Math.round(c.right - c.left), Math.round(c.bottom - c.top))
        },
        zi = function(a, b, c) {
            if (b && c) {
                a: {
                    var d = Math.max(b.left, c.left);
                    var e = Math.min(b.left + b.width, c.left + c.width);
                    if (d <= e) {
                        var f = Math.max(b.top, c.top),
                            g = Math.min(b.top + b.height, c.top + c.height);
                        if (f <= g) {
                            d = new Ve(d, f, e - d, g - f);
                            break a
                        }
                    }
                    d = null
                }
                e = d ? d.height * d.width : 0;f = d ? b.height * b.width : 0;d = d && f ? Math.round(e / f * 100) : 0;si(a, new ti("vp", d));d && 0 < d ? (e = We(b), f = We(c), e = e.top >= f.top && e.top < f.bottom) : e = !1;si(a, new ui(512,
                    e));d && 0 < d ? (e = We(b), f = We(c), e = e.bottom <= f.bottom && e.bottom > f.top) : e = !1;si(a, new ui(1024, e));d && 0 < d ? (e = We(b), f = We(c), e = e.left >= f.left && e.left < f.right) : e = !1;si(a, new ui(2048, e));d && 0 < d ? (b = We(b), c = We(c), c = b.right <= c.right && b.right > c.left) : c = !1;si(a, new ui(4096, c))
            }
        };
    var Ai = function(a, b) {
        var c = 0;
        vb(E(), "ima", "video", "client", "tagged") && (c = 1);
        var d = null;
        a && (d = a());
        if (d) {
            a = ri();
            a.g = {};
            var e = new ui(32, !0);
            e.o = !1;
            si(a, e);
            e = E().document;
            e = e.visibilityState || e.webkitVisibilityState || e.mozVisibilityState || e.msVisibilityState || "";
            si(a, new ui(64, "hidden" != e.toLowerCase().substring(e.length - 6) ? !0 : !1));
            try {
                var f = E().top;
                try {
                    var g = !!f.location.href || "" === f.location.href
                } catch (n) {
                    g = !1
                }
                if (g) {
                    var h = Zg(d);
                    var l = h && 0 != h.length ? "1" : "0"
                } else l = "2"
            } catch (n) {
                l = "2"
            }
            si(a, new ui(256,
                "2" == l));
            si(a, new ui(128, "1" == l));
            h = g = E().top;
            "2" == l && (h = E());
            f = yi(d, h);
            si(a, new vi("er", f));
            try {
                var m = h.document && !h.document.body ? null : ce(h || window)
            } catch (n) {
                m = null
            }
            m ? (h = de(Xd(h.document).g), si(a, new ui(16384, !!h)), m = h ? new Ve(h.x, h.y, m.width, m.height) : null) : m = null;
            si(a, new vi("vi", m));
            if (m && "1" == l) {
                l = Zg(d);
                d = [];
                for (h = 0; h < l.length; h++)(e = yi(l[h], g)) && d.push(e);
                d.push(m);
                m = xi(d)
            }
            zi(a, f, m);
            a.h && (l = ki() - a.h, si(a, new ti("ts", l)));
            a.h = ki()
        } else a = ri(), a.g = {}, a.h = ki(), si(a, new ui(32, !1));
        this.l = a;
        this.g =
            new ni;
        this.g.set("ve", 4);
        c && oi(this.g, 1);
        vb(E(), "ima", "video", "client", "crossdomainTag") && oi(this.g, 4);
        vb(E(), "ima", "video", "client", "sdkTag") && oi(this.g, 8);
        vb(E(), "ima", "video", "client", "jsTag") && oi(this.g, 2);
        b && Cb(b, "fullscreen", !1) && oi(this.g, 16);
        this.h = b = null;
        if (c && (c = vb(E(), "ima", "video", "client"), c.getEData)) {
            this.h = c.getEData();
            if (c = vb(E(), "ima", "video", "client", "getLastSnapshotFromTop"))
                if (a = c()) this.h.extendWithDataFromTopIframe(a.tagstamp, a.playstamp, a.lactstamp), c = this.l, b = a.er, a = a.vi,
                    b && a && (b = wi(b).g(), a = wi(a).g(), l = null, Cb(c.g, "er", null) && (l = Cb(c.g, "er", null).g(), l.top += b.top, l.left += b.left, si(c, new vi("er", l))), Cb(c.g, "vi", null) && (m = Cb(c.g, "vi", null).g(), m.top += b.top, m.left += b.left, d = [], d.push(m), d.push(b), d.push(a), b = xi(d), zi(c, l, b), si(c, new vi("vi", a))));
            a: {
                if (this.h) {
                    if (this.h.getTagLoadTimestamp) {
                        b = this.h.getTagLoadTimestamp();
                        break a
                    }
                    if (this.h.getTimeSinceTagLoadSeconds) {
                        b = this.h.getTimeSinceTagLoadSeconds();
                        break a
                    }
                }
                b = null
            }
        }
        this.g.set("td", ki() - li(b))
    };
    var Bi = new ii(200),
        Ci = function(a, b) {
            try {
                var c = new Ai(a, b);
                a = [];
                var d = Number(c.g.get("eb")),
                    e = c.g.g;
                "eb" in e && delete e.eb;
                var f, g = c.g;
                e = [];
                for (var h in g.g) e.push(h + g.g[h]);
                (f = e.join("_")) && a.push(f);
                if (c.h) {
                    var l = c.h.serialize();
                    l && a.push(l)
                }
                var m, n = c.l;
                f = d;
                g = [];
                f || (f = 0);
                for (var v in n.g) {
                    var B = n.g[v];
                    if (B instanceof ui) B.g() && (f |= B.A);
                    else {
                        var t, w = n.g[v];
                        (t = w.o ? w.l() : "") && g.push(v + t)
                    }
                }
                g.push("eb" + String(f));
                (m = g.join("_")) && a.push(m);
                c.g.set("eb", d);
                return a.join("_")
            } catch (z) {
                return "tle;" + Dc(z.name,
                    12) + ";" + Dc(z.message, 40)
            }
        },
        Di = function(a, b) {
            qh(Bi, "tick", function() {
                var c = Ci(b);
                a(c)
            });
            Bi.start();
            Bi.dispatchEvent("tick")
        };
    var Ei = function(a) {
        Fd(this, a, null)
    };
    x(Ei, Bd);
    Ei.prototype.g = function() {
        return Gd(this, 1)
    };
    var Fi;
    Fi = ["av.key", "js", "unreleased"].slice(-1)[0];
    var Gi = [0, 2, 1],
        Hi = null;
    document.addEventListener && document.addEventListener("mousedown", function(a) {
        Hi = a
    }, !0);
    window.mb = function(a) {
        if (a) {
            var b;
            if (b = window.event || Hi) {
                var c;
                (c = b.which ? 1 << Gi[b.which - 1] : b.button) && b.shiftKey && (c |= 8);
                c && b.altKey && (c |= 16);
                c && b.ctrlKey && (c |= 32);
                b = c
            } else b = null;
            if (c = b)
                if (window.css) window.css(a.id, "mb", c, void 0, void 0);
                else if (a) {
                b = a.href;
                var d = b.indexOf("&mb=");
                if (0 > d) c = b + "&mb=" + c;
                else {
                    d += 4;
                    var e = b.indexOf("&", d);
                    c = 0 <= e ? b.substring(0, d) + c + b.substring(e) : b.substring(0, d) + c
                }
                a.href = 2E3 < c.length ? b : c
            }
        }
    };
    var Ii = function(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                d = (void 0 === c ? 0 : c) ? (new D(e.innerWidth, e.innerHeight)).round() : ce(e || window).round()
            } catch (l) {
                d = new D(-12245933, -12245933)
            }
            a = d;
            var f = de(Xd(b.document).g);
            if (-12245933 == a.width) {
                var g = a.width;
                var h = new H(g, g, g, g)
            } else h = new H(f.y, f.x + a.width, f.y + a.height, f.x);
            return h
        } catch (l) {
            return new H(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Ji = function(a) {
        var b = {};
        y(a, function(c) {
            var d = c.event,
                e = b[d];
            b.hasOwnProperty(d) ? null !== e && (c.h(e) || (b[d] = null)) : b[d] = c
        });
        ab(a, function(c) {
            return null === b[c.event]
        })
    };
    var Ki = {
        NONE: 0,
        Dg: 1
    };
    var Li = function() {
        this.Z = 0;
        this.g = !1;
        this.h = -1;
        this.Wa = !1;
        this.oa = 0
    };
    Li.prototype.isVisible = function() {
        return this.Wa ? .3 <= this.Z : .5 <= this.Z
    };
    var Mi = {
            Wc: 0,
            Ig: 1
        },
        Ni = {
            Wc: 0,
            Vg: 1,
            Wg: 2
        },
        Oi = {
            Wc: 0,
            Cg: 1,
            Eg: 2,
            yh: 3
        },
        Pi = {
            668123728: 0,
            668123729: 1
        },
        Qi = {
            NONE: 0,
            ah: 1,
            Mg: 2
        },
        Ri = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };
    var Si = function() {
            this.h = null;
            this.A = !1;
            this.o = null
        },
        Ti = function(a) {
            a.A = !0;
            return a
        },
        Ui = function(a, b) {
            a.o && y(b, function(c) {
                c = a.o[c];
                void 0 !== c && a.l(c)
            })
        };
    Si.prototype.g = function() {
        return this.h
    };
    var Vi = function(a) {
        Si.call(this);
        this.B = a
    };
    p(Vi, Si);
    Vi.prototype.l = function(a) {
        null === this.h && xb(this.B, a) && (this.h = a)
    };
    var Wi = function() {
        Si.call(this)
    };
    p(Wi, Si);
    Wi.prototype.l = function(a) {
        null === this.h && "number" === typeof a && (this.h = a)
    };
    var Xi = function() {
        Si.call(this)
    };
    p(Xi, Si);
    Xi.prototype.l = function(a) {
        null === this.h && "string" === typeof a && (this.h = a)
    };
    var Yi = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    Yi.prototype.enable = function() {
        this.l = !0
    };
    Yi.prototype.reset = function() {
        this.g = {};
        this.l = !0;
        this.h = {}
    };
    var Zi = function(a, b, c) {
            a.g[b] || (a.g[b] = new Vi(c));
            return a.g[b]
        },
        $i = function(a) {
            a.g.queryid || (a.g.queryid = new Xi)
        },
        aj = function(a, b, c) {
            (a = a.g[b]) && a.l(c)
        },
        bj = function(a, b) {
            if (wb(a.h, b)) return a.h[b];
            if (a = a.g[b]) return a.g()
        },
        cj = function(a) {
            var b = {},
                c = pb(a.g, function(d) {
                    return d.A
                });
            ob(c, function(d, e) {
                d = void 0 !== a.h[e] ? String(a.h[e]) : d.A && null !== d.h ? String(d.h) : "";
                0 < d.length && (b[e] = d)
            }, a);
            return b
        },
        dj = function(a) {
            a = cj(a);
            var b = [];
            ob(a, function(c, d) {
                d in Object.prototype || "undefined" != typeof c && b.push([d,
                    ":", c
                ].join(""))
            });
            return b
        },
        ej = function() {
            var a = O.D().U,
                b = Jg();
            a.l && y(tb(a.g), function(c) {
                return Ui(c, b)
            })
        };
    var fj = !Wc && !vc();
    var gj = function() {
        this.g = this.Qa = null
    };
    var hj = function() {};
    hj.prototype.now = function() {
        return 0
    };
    hj.prototype.h = function() {
        return 0
    };
    hj.prototype.l = function() {
        return 0
    };
    hj.prototype.g = function() {
        return 0
    };
    var jj = function() {
        if (!ij()) throw Error();
    };
    p(jj, hj);
    var ij = function() {
        return !(!F || !F.performance)
    };
    jj.prototype.now = function() {
        return ij() && F.performance.now ? F.performance.now() : hj.prototype.now.call(this)
    };
    jj.prototype.h = function() {
        return ij() && F.performance.memory ? F.performance.memory.totalJSHeapSize || 0 : hj.prototype.h.call(this)
    };
    jj.prototype.l = function() {
        return ij() && F.performance.memory ? F.performance.memory.usedJSHeapSize || 0 : hj.prototype.l.call(this)
    };
    jj.prototype.g = function() {
        return ij() && F.performance.memory ? F.performance.memory.jsHeapSizeLimit || 0 : hj.prototype.g.call(this)
    };
    var kj = function() {};
    kj.prototype.isVisible = function() {
        return 1 === bg(Ee)
    };
    var lj = function(a, b) {
            this.g = a;
            this.depth = b
        },
        nj = function(a) {
            a = a || pf();
            var b = Math.max(a.length - 1, 0),
                c = sf(a);
            a = c.g;
            var d = c.h,
                e = c.l,
                f = [];
            c = function(h, l) {
                return null == h ? l : h
            };
            e && f.push(new lj([e.url, e.wc ? 2 : 0], c(e.depth, 1)));
            d && d != e && f.push(new lj([d.url, 2], 0));
            a.url && a != e && f.push(new lj([a.url, 0], c(a.depth, b)));
            var g = Ta(f, function(h, l) {
                return f.slice(0, f.length - l)
            });
            !a.url || (e || d) && a != e || (d = xe(a.url)) && g.push([new lj([d, 1], c(a.depth, b))]);
            g.push([]);
            return Ta(g, function(h) {
                return mj(b, h)
            })
        };

    function mj(a, b) {
        var c = Ua(b, function(e, f) {
                return Math.max(e, f.depth)
            }, -1),
            d = gb("", c + 2);
        d[0] = a;
        y(b, function(e) {
            return d[e.depth + 1] = e.g
        });
        return d
    }
    var oj = function() {
        var a = nj();
        return Ta(a, function(b) {
            return vf(b)
        })
    };
    var pj = function() {
            this.h = new kj;
            this.g = ij() ? new jj : new hj
        },
        rj = function() {
            qj();
            var a = F.document;
            return !!(a && a.body && a.body.getBoundingClientRect && "function" === typeof F.setInterval && "function" === typeof F.clearInterval && "function" === typeof F.setTimeout && "function" === typeof F.clearTimeout)
        };
    pj.prototype.setInterval = function(a, b) {
        return F.setInterval(a, b)
    };
    pj.prototype.clearInterval = function(a) {
        F.clearInterval(a)
    };
    pj.prototype.setTimeout = function(a, b) {
        return F.setTimeout(a, b)
    };
    pj.prototype.clearTimeout = function(a) {
        F.clearTimeout(a)
    };
    var sj = function(a) {
            qj();
            var b = jf() || F;
            De(b, a)
        },
        tj = function() {
            qj();
            return oj()
        };
    Aa(pj);
    var uj = function() {};
    uj.prototype.getContext = function() {
        if (!this.g) {
            if (!F) throw Error("Context has not been set and window is undefined.");
            this.g = pj.D()
        }
        return this.g
    };
    Aa(uj);
    var qj = function() {
        return uj.D().getContext()
    };
    var vj = function(a) {
        Fd(this, a, null)
    };
    x(vj, Bd);
    var wj = function(a) {
            this.o = a;
            this.g = -1;
            this.h = this.l = 0
        },
        xj = function(a, b) {
            return function(c) {
                for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];
                if (-1 < a.g) return b.apply(null, ia(d));
                try {
                    return a.g = a.o.g.now(), b.apply(null, ia(d))
                } finally {
                    a.l += a.o.g.now() - a.g, a.g = -1, a.h += 1
                }
            }
        };
    var yj = function(a, b) {
        this.h = a;
        this.l = b;
        this.g = new wj(a)
    };
    var O = function() {
        this.o = void 0;
        this.g = this.C = 0;
        this.B = -1;
        this.U = new Yi;
        Ti(Zi(this.U, "mv", Qi)).o = void 0 === Ri ? null : Ri;
        Zi(this.U, "omid", Mi);
        Ti(Zi(this.U, "epoh", Mi));
        Ti(Zi(this.U, "epph", Mi));
        Ti(Zi(this.U, "umt", Mi)).o = void 0 === Pi ? null : Pi;
        Ti(Zi(this.U, "phel", Mi));
        Ti(Zi(this.U, "phell", Mi));
        Ti(Zi(this.U, "oseid", Pe));
        var a = this.U;
        a.g.sloi || (a.g.sloi = new Wi);
        Ti(a.g.sloi);
        Ti(Zi(this.U, "xdi", Mi));
        Ti(Zi(this.U, "amp", Mi));
        Ti(Zi(this.U, "prf", Mi));
        Ti(Zi(this.U, "gtx", Mi));
        Ti(Zi(this.U, "mvp_lv", Mi));
        Ti(Zi(this.U, "eocm",
            Mi));
        Ti(Zi(this.U, "pnl", Ni));
        this.h = new yj(qj(), this.U);
        this.A = this.l = !1
    };
    O.prototype.Mc = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = this.U;
            if (b.l) {
                a = a.split("&");
                for (var c = a.length - 1; 0 <= c; c--) {
                    var d = a[c].split("="),
                        e = d[0];
                    d = 1 < d.length ? parseInt(d[1], 10) : 1;
                    isNaN(d) || (e = b.g[e]) && e.l(d)
                }
            }
        }
    };
    Aa(O);
    var zj = function() {
            var a = "https:";
            F && F.location && "http:" === F.location.protocol && (a = "http:");
            this.h = a;
            this.g = .01;
            this.l = Math.random()
        },
        Aj = function(a, b, c, d, e) {
            if ((d ? a.l : Math.random()) < (e || a.g)) try {
                if (c instanceof tf) var f = c;
                else f = new tf, ve(c, function(h, l) {
                    var m = f,
                        n = m.A++;
                    xf(m, n, uf(l, h))
                });
                var g = Af(f, a.h, "/pagead/gen_204?id=" + b + "&");
                g && sj(g)
            } catch (h) {}
        };
    var Dj = function() {
        var a = Bj;
        this.l = Cj;
        this.B = "jserror";
        this.o = !0;
        this.h = null;
        this.C = this.Ha;
        this.g = void 0 === a ? null : a;
        this.A = !1
    };
    k = Dj.prototype;
    k.pinger = function() {
        return this.l
    };
    k.$b = function(a) {
        this.h = a
    };
    k.Qc = function(a) {
        this.B = a
    };
    k.Rc = function(a) {
        this.o = a
    };
    k.Sc = function(a) {
        this.A = a
    };
    k.$a = function(a, b, c) {
        var d = this;
        return xj(O.D().h.g, function() {
            try {
                if (d.g && d.g.h) {
                    var e = d.g.start(a.toString(), 3);
                    var f = b();
                    d.g.end(e)
                } else f = b()
            } catch (l) {
                var g = d.o;
                try {
                    Mf(e);
                    var h = new Ej(Fj(l));
                    g = d.C(a, h, void 0, c)
                } catch (m) {
                    d.Ha(217, m)
                }
                if (!g) throw l;
            }
            return f
        })()
    };
    k.Nc = function(a, b, c, d) {
        var e = this;
        return xj(O.D().h.g, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.$a(a, function() {
                return b.apply(c, g)
            }, d)
        })
    };
    k.Ha = function(a, b, c, d, e) {
        e = e || this.B;
        try {
            var f = new tf;
            f.o = !0;
            yf(f, 1, "context", a);
            nf(b) || (b = new Ej(Fj(b)));
            b.msg && yf(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.h) try {
                this.h(g)
            } catch (l) {}
            if (d) try {
                d(g)
            } catch (l) {}
            xf(f, 3, [g]);
            var h = sf();
            h.h && yf(f, 4, "top", h.h.url || "");
            yf(f, 5, "url", h.g.url || "");
            Aj(this.l, e, f, this.A, c)
        } catch (l) {
            try {
                Aj(this.l, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: Fj(l),
                    url: h && h.g.url
                }, this.A, c)
            } catch (m) {}
        }
        return this.o
    };
    var Fj = function(a) {
            var b = a.toString();
            a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
            a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
            if (a.stack) {
                a = a.stack;
                var c = b;
                try {
                    -1 == a.indexOf(c) && (a = c + "\n" + a);
                    for (var d; a != d;) d = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                    b = a.replace(/\n */g, "\n")
                } catch (e) {
                    b = c
                }
            }
            return b
        },
        Ej = function(a) {
            mf.call(this, Error(a), {
                message: a
            })
        };
    p(Ej, mf);
    var Cj, Gj, Bj = new Lf(1, jf()),
        Hj = function() {
            var a = jf();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Bj.C())
        };
    (function() {
        Cj = new zj;
        Gj = new Dj;
        var a = jf();
        a && a.document && ("complete" == a.document.readyState ? Hj() : Bj.h && Pd(a, "load", function() {
            Hj()
        }))
    })();
    var Ij = function(a) {
            Gj.$b(function(b) {
                y(a, function(c) {
                    c(b)
                })
            })
        },
        Jj = function(a, b) {
            return Gj.$a(a, b, void 0)
        },
        Kj = function(a, b, c, d) {
            return Gj.Nc(a, b, c, d)
        },
        Lj = function(a, b) {
            Aj(Cj, a, b, "jserror" != a, void 0)
        },
        Mj = function(a, b, c, d) {
            Gj.Ha(a, b, c, d)
        };
    var Nj = Date.now(),
        Oj = -1,
        Pj = -1,
        Qj, Rj = -1,
        Sj = !1,
        Tj = function() {
            return Date.now() - Nj
        },
        Uj = function() {
            var a = O.D().o,
                b = 0 <= Pj ? Tj() - Pj : -1,
                c = Sj ? Tj() - Oj : -1,
                d = 0 <= Rj ? Tj() - Rj : -1;
            if (947190542 == a) return 100;
            if (79463069 == a) return 200;
            a = [2E3, 4E3];
            var e = [250, 500, 1E3];
            Mj(637, Error(), .001);
            var f = b; - 1 != c && c < b && (f = c);
            for (b = 0; b < a.length; ++b)
                if (f < a[b]) {
                    var g = e[b];
                    break
                } void 0 === g && (g = e[a.length]);
            return -1 != d && 1500 < d && 4E3 > d ? 500 : g
        };
    var Vj = {
            currentTime: 1,
            duration: 2,
            isVpaid: 4,
            volume: 8,
            isYouTube: 16,
            isPlaying: 32
        },
        yb = {
            ec: "start",
            FIRST_QUARTILE: "firstquartile",
            MIDPOINT: "midpoint",
            THIRD_QUARTILE: "thirdquartile",
            COMPLETE: "complete",
            Vd: "metric",
            dc: "pause",
            Xc: "resume",
            SKIPPED: "skip",
            VIEWABLE_IMPRESSION: "viewable_impression",
            Wd: "mute",
            ae: "unmute",
            FULLSCREEN: "fullscreen",
            Sd: "exitfullscreen",
            Vc: "bufferstart",
            Uc: "bufferfinish",
            Td: "fully_viewable_audible_half_duration_impression",
            Ud: "measurable_impression",
            Ld: "abandon",
            Rd: "engagedview",
            IMPRESSION: "impression",
            Od: "creativeview",
            LOADED: "loaded",
            xh: "progress",
            Ag: "close",
            Bg: "collapse",
            ph: "overlay_resize",
            qh: "overlay_unmeasurable_impression",
            rh: "overlay_unviewable_impression",
            th: "overlay_viewable_immediate_impression",
            sh: "overlay_viewable_end_of_session_impression",
            Pd: "custom_metric_viewable"
        },
        Wj = "start firstquartile midpoint thirdquartile resume loaded".split(" "),
        Xj = ["start", "firstquartile", "midpoint", "thirdquartile"],
        Yj = ["abandon"],
        Zj = {
            Ph: -1,
            ec: 0,
            FIRST_QUARTILE: 1,
            MIDPOINT: 2,
            THIRD_QUARTILE: 3,
            COMPLETE: 4,
            Vd: 5,
            dc: 6,
            Xc: 7,
            SKIPPED: 8,
            VIEWABLE_IMPRESSION: 9,
            Wd: 10,
            ae: 11,
            FULLSCREEN: 12,
            Sd: 13,
            Td: 14,
            Ud: 15,
            Ld: 16,
            Rd: 17,
            IMPRESSION: 18,
            Od: 19,
            LOADED: 20,
            Pd: 21,
            Vc: 22,
            Uc: 23
        };
    var rb = {
            tg: "addEventListener",
            Ng: "getMaxSize",
            Og: "getScreenSize",
            Pg: "getState",
            Qg: "getVersion",
            zh: "removeEventListener",
            bh: "isViewable"
        },
        ak = function(a) {
            var b = a !== a.top,
                c = a.top === Wf(a).ka,
                d = -1,
                e = 0;
            if (b && c && a.top.mraid) {
                d = 3;
                var f = a.top.mraid
            } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
            f && (f.IS_GMA_SDK || (e = 2), sb(function(g) {
                return "function" === typeof f[g]
            }) || (e = 1));
            return {
                xa: f,
                Gb: e,
                lg: d
            }
        };
    var bk = function(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (Ee && Ee.URL) {
        var ck, ze = Ee.URL;
        ck = !!ze && 0 < Ae().length;
        Gj.Rc(!ck)
    }
    var dk = function(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = Kj(d, c);
        Pd(a, b, c, {
            capture: e
        })
    };
    var ek = function(a, b) {
        b = Math.pow(10, b);
        return Math.floor(a * b) / b
    };

    function fk(a, b, c, d) {
        if (!a) return {
            value: d,
            done: !1
        };
        d = b(d, a);
        var e = c(d, a);
        return !e && Sc(a, "parentElement") ? fk(ie(a), b, c, d) : {
            done: e,
            value: d
        }
    }
    var gk = function(a, b, c, d) {
        if (!a) return d;
        d = fk(a, b, c, d);
        if (!d.done) try {
            var e = Wd(a),
                f = e && E(e);
            return gk(f && f.frameElement, b, c, d.value)
        } catch (g) {}
        return d.value
    };

    function hk(a) {
        var b = !Wc || md(8);
        return gk(a, function(c, d) {
            c = Sc(d, "style") && d.style && bf(d, "visibility");
            return {
                hidden: "hidden" === c,
                visible: b && "visible" === c
            }
        }, function(c) {
            return c.hidden || c.visible
        }, {
            hidden: !1,
            visible: !1
        }).hidden
    }
    var ik = function(a) {
            return gk(a, function(b, c) {
                return !(!Sc(c, "style") || !c.style || "none" !== bf(c, "display"))
            }, function(b) {
                return b
            }, !1) ? !0 : hk(a)
        },
        jk = function(a) {
            return new H(a.top, a.right, a.bottom, a.left)
        },
        kk = function(a) {
            var b = a.top || 0,
                c = a.left || 0;
            return new H(b, c + (a.width || 0), b + (a.height || 0), c)
        },
        lk = function(a) {
            return null != a && 0 <= a && 1 >= a
        };

    function mk() {
        var a = pc;
        return a ? Va("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return A(a, b)
        }) || A(a, "OMI/") && !A(a, "XiaoMi/") ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    }

    function nk() {
        var a = pc;
        return A(a, "AppleTV") || A(a, "Apple TV") || A(a, "CFNetwork") || A(a, "tvOS")
    }

    function qk() {
        var a;
        (a = A(pc, "CrKey") || A(pc, "PlayStation") || A(pc, "Roku") || mk() || A(pc, "Xbox") || nk()) || (a = pc, a = A(a, "sdk_google_atv_x86") || A(a, "Android TV"));
        return a
    };
    var Q = function() {
            this.J = !1;
            this.l = !ue(F.top);
            this.C = oe() || pe();
            var a = pf();
            a = 0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url ? ((a = a[a.length - 1].url.match(qe)[3] || null) ? decodeURI(a) : a) || "" : "";
            this.domain = a;
            this.g = new H(0, 0, 0, 0);
            this.A = new D(0, 0);
            this.o = new D(0, 0);
            this.F = new H(0, 0, 0, 0);
            this.H = null;
            this.B = 0;
            this.M = !1;
            this.h = !(!F || !ak(F).xa);
            rk(this)
        },
        sk = function(a, b) {
            b && b.screen && (a.A = new D(b.screen.width, b.screen.height))
        },
        tk = function(a, b) {
            var c = a.g ? new D(Se(a.g), Te(a.g)) : new D(0, 0);
            b = void 0 ===
                b ? F : b;
            null !== b && b != b.top && (b = b.top);
            var d = 0,
                e = 0;
            try {
                var f = b.document,
                    g = f.body,
                    h = f.documentElement;
                if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
                else {
                    var l = h.scrollHeight,
                        m = h.scrollWidth,
                        n = h.offsetHeight,
                        v = h.offsetWidth;
                    h.clientHeight != n && (l = g.scrollHeight, m = g.scrollWidth, n = g.offsetHeight, v = g.offsetWidth);
                    l > c.height ? l > n ? (d = l, e = m) : (d = n, e = v) : l < n ? (d = l, e = m) : (d = n, e = v)
                }
                var B = new D(e, d)
            } catch (t) {
                B =
                    new D(-12245933, -12245933)
            }
            a.o = B
        },
        rk = function(a) {
            F && F.document && (a.F = Ii(!1, F, a.C), a.g = Ii(!0, F, a.C), a.H = a.g, tk(a, F), sk(a, F))
        },
        uk = function() {
            var a = Q.D();
            if (0 < a.B || a.M) return !0;
            a = qj().h.isVisible();
            var b = 0 === bg(Ee);
            return a || b
        };
    Aa(Q);
    var vk = new H(0, 0, 0, 0);

    function wk(a, b) {
        b = xk(b);
        return 0 === b ? 0 : xk(a) / b
    }

    function xk(a) {
        return Math.max(a.bottom - a.top, 0) * Math.max(a.right - a.left, 0)
    }

    function yk(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                if (a = ie(a) || a) {
                    var d = Wd(a),
                        e = d && E(d),
                        f = e && e.frameElement;
                    f && (a = f)
                }
            } catch (g) {
                break
            }
        }
        return !1
    }

    function zk(a, b, c) {
        if (!a || !b) return !1;
        b = Ue(a.clone(), -b.left, -b.top);
        a = (b.left + b.right) / 2;
        b = (b.top + b.bottom) / 2;
        var d = jf();
        ue(d.top) && d.top && d.top.document && (d = d.top);
        if (!bk(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = Wd(c)) && b.defaultView && b.defaultView.frameElement) && yk(b, a);
        d = a === c;
        a = !d && a && le(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function Ak(a, b, c, d) {
        return Q.D().l ? !1 : 0 >= Se(a) || 0 >= Te(a) ? !0 : c && d ? Jj(208, function() {
            return zk(a, b, c)
        }) : !1
    };
    var Bk = function(a, b, c) {
        var d = new H(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.l = b;
        this.g = d;
        this.h = c
    };
    var Ck = function(a, b, c, d, e, f, g) {
        this.F = a;
        this.C = b;
        this.B = c;
        this.g = d;
        this.A = e;
        this.h = f;
        this.o = g
    };
    Ck.prototype.l = function() {
        return this.F
    };
    var Dk = function(a) {
        this.l = a;
        this.h = 0;
        this.g = null
    };
    Dk.prototype.cancel = function() {
        qj().clearTimeout(this.g);
        this.g = null
    };
    var Ek = function(a) {
        var b = qj();
        a.g = b.setTimeout(xj(O.D().h.g, Kj(143, function() {
            a.h++;
            a.l.aa()
        })), Uj())
    };
    var Fk = function(a, b, c) {
        this.ka = a;
        this.pa = void 0 === c ? "na" : c;
        this.B = [];
        this.H = !1;
        this.A = new Bk(-1, !0, this);
        this.g = this;
        this.J = b;
        this.I = this.la = this.M = !1;
        this.N = "uk";
        this.W = !1;
        this.o = !0
    };
    k = Fk.prototype;
    k.wd = function() {
        return this.Wb()
    };
    k.Wb = function() {
        return !1
    };
    k.Fc = function() {
        return this.H = !0
    };
    k.bb = function() {
        return this.g.N
    };
    k.qb = function() {
        return this.g.I
    };
    var Hk = function(a, b, c) {
        if (!a.I || (void 0 === c ? 0 : c)) a.I = !0, a.N = b, a.J = 0, a.g != a || Gk(a)
    };
    Fk.prototype.ca = function() {
        return this.g.pa
    };
    Fk.prototype.Ma = function() {
        return this.g.O()
    };
    Fk.prototype.O = function() {
        return {}
    };
    Fk.prototype.Ga = function() {
        return this.g.J
    };
    var Ik = function(a, b) {
        Za(a.B, b) || (a.B.push(b), b.fb(a.g), b.Oa(a.A), b.Aa() && (a.M = !0))
    };
    Fk.prototype.X = function() {
        var a = Q.D();
        a.g = Ii(!0, this.ka, a.C)
    };
    Fk.prototype.Y = function() {
        sk(Q.D(), this.ka)
    };
    Fk.prototype.Da = function() {
        tk(Q.D(), this.ka)
    };
    Fk.prototype.T = function() {
        return this.A.g
    };
    var Jk = function(a) {
        a = a.g;
        a.Y();
        a.X();
        var b = Q.D();
        b.F = Ii(!1, a.ka, b.C);
        a.Da();
        a.A.g = a.T()
    };
    Fk.prototype.aa = function() {};
    var Kk = function(a, b) {
        a.g != a ? Kk(a.g, b) : a.o !== b && (a.o = b, Gk(a))
    };
    Fk.prototype.vc = function() {
        return this.g.o
    };
    var Lk = function(a) {
        a.M = a.B.length ? Va(a.B, function(b) {
            return b.Aa()
        }) : !1
    };
    Fk.prototype.l = function() {
        return this.A
    };
    var Mk = function(a) {
            var b = cb(a.B);
            y(b, function(c) {
                c.Oa(a.A)
            })
        },
        Gk = function(a) {
            var b = cb(a.B);
            y(b, function(c) {
                c.fb(a.g)
            });
            a.g != a || Mk(a)
        };
    k = Fk.prototype;
    k.fb = function(a) {
        var b = this.g;
        this.g = a.Ga() >= this.J ? a : this;
        b !== this.g ? (this.o = this.g.o, Gk(this)) : this.o !== this.g.o && (this.o = this.g.o, Gk(this))
    };
    k.Oa = function(a) {
        if (a.h === this.g) {
            var b;
            if (!(b = this.la)) {
                b = this.A;
                var c = this.M;
                if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.l == a.l) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.right == c.right && b.bottom == c.bottom && b.left == c.left : !1;
                b = !c
            }
            this.A = a;
            b && Mk(this)
        }
    };
    k.Aa = function() {
        return this.M
    };
    k.V = function() {
        this.W = !0
    };
    k.sb = function() {
        return this.W
    };
    var Nk = function(a, b, c, d) {
        this.element = a;
        this.g = new H(0, 0, 0, 0);
        this.A = new H(0, 0, 0, 0);
        this.h = b;
        this.U = c;
        this.I = d;
        this.H = !1;
        this.timestamp = -1;
        this.o = new Ck(b.l(), this.g, new H(0, 0, 0, 0), 0, 0, Tj(), 0)
    };
    k = Nk.prototype;
    k.Ec = function() {
        return !0
    };
    k.Vb = function() {};
    k.Db = function() {
        if (this.element) {
            var a = this.element,
                b = this.h.g.ka;
            try {
                try {
                    var c = jk(a.getBoundingClientRect())
                } catch (m) {
                    c = new H(0, 0, 0, 0)
                }
                var d = c.right - c.left,
                    e = c.bottom - c.top,
                    f = ef(a, b),
                    g = f.x,
                    h = f.y;
                var l = new H(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (m) {
                l = vk.clone()
            }
            this.g = l
        }
    };
    k.ad = function() {
        this.A = this.h.l().g
    };
    k.Ea = function() {
        this.Db();
        this.o = new Ck(this.h.l(), this.g, this.o.B, this.o.g, this.o.A, Tj(), this.o.o)
    };
    k.V = function() {
        if (!this.sb()) {
            var a = this.h;
            $a(a.B, this);
            a.M && this.Aa() && Lk(a);
            this.Vb();
            this.H = !0
        }
    };
    k.sb = function() {
        return this.H
    };
    k.Ma = function() {
        return this.h.Ma()
    };
    k.Ga = function() {
        return this.h.Ga()
    };
    k.bb = function() {
        return this.h.bb()
    };
    k.qb = function() {
        return this.h.qb()
    };
    k.fb = function() {};
    k.Oa = function() {
        this.Ea()
    };
    k.Aa = function() {
        return this.I
    };
    var Ok = function(a) {
        this.A = !1;
        this.g = a;
        this.o = za
    };
    k = Ok.prototype;
    k.Ga = function() {
        return this.g.Ga()
    };
    k.bb = function() {
        return this.g.bb()
    };
    k.qb = function() {
        return this.g.qb()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Tb(a, b, c), Ik(this.g, d));
        return d
    };
    k.od = function() {
        return this.wb()
    };
    k.wb = function() {
        return !1
    };
    k.nd = function(a) {
        return this.g.Fc() ? (Ik(this.g, this), this.o = a, !0) : !1
    };
    k.fb = function(a) {
        0 == a.Ga() && this.o(a.bb(), this)
    };
    k.Oa = function() {};
    k.Aa = function() {
        return !1
    };
    k.V = function() {
        this.A = !0
    };
    k.sb = function() {
        return this.A
    };
    k.Ma = function() {
        return {}
    };
    var Pk = function(a, b, c) {
            this.l = void 0 === c ? 0 : c;
            this.h = a;
            this.g = null == b ? "" : b
        },
        Qk = function(a) {
            switch (Math.trunc(a.l)) {
                case -16:
                    return -16;
                case -8:
                    return -8;
                case 0:
                    return 0;
                case 8:
                    return 8;
                case 16:
                    return 16;
                default:
                    return 16
            }
        },
        Rk = function(a, b) {
            return a.l < b.l ? !0 : a.l > b.l ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
        };
    var Sk = function() {
        this.l = 0;
        this.g = [];
        this.h = !1
    };
    Sk.prototype.add = function(a, b, c) {
        ++this.l;
        a = new Pk(a, b, c);
        this.g.push(new Pk(a.h, a.g, a.l + this.l / 4096));
        this.h = !0;
        return this
    };
    var Tk = function(a, b) {
            y(b.g, function(c) {
                a.add(c.h, c.g, Qk(c))
            })
        },
        Uk = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = void 0 === d ? !0 : d;
            ve(b, function(e, f) {
                d && void 0 === e || a.add(f, e, c)
            });
            return a
        },
        Wk = function(a) {
            var b = Vk;
            a.h && (fb(a.g, function(c, d) {
                return Rk(d, c) ? 1 : Rk(c, d) ? -1 : 0
            }), a.h = !1);
            return Ua(a.g, function(c, d) {
                d = b(d);
                return "" + c + ("" != c && "" != d ? "&" : "") + d
            }, "")
        };
    var Vk = function(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Za(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };
    var Xk = function(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new Sk;
        void 0 !== a && Tk(this.g, a);
        b && this.g.add("v", Fi, -16)
    };
    Xk.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = Wk(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };
    var Yk = function(a) {
            var b = [],
                c = [];
            ob(a, function(d, e) {
                if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                    case "adk":
                    case "r":
                    case "tt":
                    case "error":
                    case "mtos":
                    case "tos":
                    case "p":
                    case "bs":
                        b.unshift(d);
                        break;
                    case "req":
                    case "url":
                    case "referrer":
                    case "iframe_loc":
                        c.push(d);
                        break;
                    default:
                        b.push(d)
                }
            });
            return b.concat(c)
        },
        Zk = function() {
            if (Fi && "unreleased" !== Fi) return Fi
        },
        $k = function(a) {
            var b = void 0 === b ? 4E3 : b;
            a = a.toString();
            if (!/&v=[^&]+/.test(a)) {
                var c =
                    Zk();
                a = c ? a + "&v=" + encodeURIComponent(c) : a
            }
            a = a.substring(0, b);
            sj(a)
        };
    var al = function() {
        this.g = 0
    };
    Aa(al);
    var bl = function(a, b, c) {
        y(a.h, function(d) {
            var e = a.g;
            if (!d.g && (d.l(b, c), d.o())) {
                d.g = !0;
                var f = d.h(),
                    g = new Sk;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = al.D();
                g.add("i", d.g++);
                g.add("adk", e);
                Uk(g, f);
                e = new Xk(g);
                $k(e)
            }
        })
    };
    var cl = function() {
            this.h = this.l = this.o = this.g = 0
        },
        dl = function(a, b, c, d) {
            b && (a.g += c, a.h += c, a.o += c, a.l = Math.max(a.l, a.o));
            if (void 0 === d ? !b : d) a.o = 0
        };
    var el = [1, .75, .5, .3, 0],
        fl = function(a) {
            this.h = a = void 0 === a ? el : a;
            this.g = Ta(this.h, function() {
                return new cl
            })
        },
        hl = function(a, b) {
            return gl(a, function(c) {
                return c.g
            }, void 0 === b ? !0 : b)
        },
        jl = function(a, b) {
            return il(a, b, function(c) {
                return c.g
            })
        },
        kl = function(a, b) {
            return gl(a, function(c) {
                return c.l
            }, void 0 === b ? !0 : b)
        },
        ll = function(a, b) {
            return il(a, b, function(c) {
                return c.l
            })
        },
        ml = function(a, b) {
            return il(a, b, function(c) {
                return c.h
            })
        },
        nl = function(a) {
            y(a.g, function(b) {
                b.h = 0
            })
        },
        ol = function(a, b, c, d, e, f, g) {
            g = void 0 ===
                g ? !0 : g;
            c = f ? Math.min(b, c) : c;
            for (f = 0; f < a.h.length; f++) {
                var h = a.h[f],
                    l = 0 < c && c >= h;
                h = !(0 < b && b >= h) || d;
                dl(a.g[f], g && l, e, !g || h)
            }
        },
        gl = function(a, b, c) {
            a = Ta(a.g, function(d) {
                return b(d)
            });
            return c ? a : pl(a)
        },
        il = function(a, b, c) {
            var d = Ya(a.h, function(e) {
                return b <= e
            });
            return -1 == d ? 0 : c(a.g[d])
        },
        pl = function(a) {
            return Ta(a, function(b, c, d) {
                return 0 < c ? d[c] - d[c - 1] : d[c]
            })
        };
    var ql = function() {
            this.h = new fl;
            this.W = new cl;
            this.H = this.C = -1;
            this.$ = 1E3;
            this.aa = new fl([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0]);
            this.N = this.I = -1
        },
        rl = function(a, b) {
            return kl(a.h, void 0 === b ? !0 : b)
        };
    ql.prototype.K = function(a, b, c, d) {
        this.C = -1 != this.C ? Math.min(this.C, b.Z) : b.Z;
        this.H = Math.max(this.H, b.Z);
        this.I = -1 != this.I ? Math.min(this.I, b.oa) : b.oa;
        this.N = Math.max(this.N, b.oa);
        ol(this.aa, b.oa, c.oa, b.g, a, d);
        ol(this.h, b.Z, c.Z, b.g, a, d);
        c = d || c.Wa != b.Wa ? c.isVisible() && b.isVisible() : c.isVisible();
        b = !b.isVisible() || b.g;
        dl(this.W, c, a, b)
    };
    ql.prototype.Ya = function() {
        return this.W.l >= this.$
    };
    var sl = new H(0, 0, 0, 0),
        tl = function(a, b, c) {
            G.call(this);
            this.position = sl.clone();
            this.Pb = this.Ib();
            this.yc = -2;
            this.og = Date.now();
            this.Gd = -1;
            this.ub = b;
            this.Lb = null;
            this.Hb = !1;
            this.Yb = null;
            this.opacity = -1;
            this.jg = c;
            this.Id = this.zc = za;
            this.ra = new gj;
            this.ra.Qa = a;
            this.ra.g = a;
            this.Xa = !1;
            this.Ua = {
                Hc: null,
                Gc: null
            };
            this.Ed = !0;
            this.yb = null;
            this.gb = !1;
            O.D().C++;
            this.na = this.pc();
            this.Fd = -1;
            this.ba = null;
            a = this.U = new Yi;
            Zi(a, "od", Ki);
            Ti(Zi(a, "opac", Mi));
            Ti(Zi(a, "sbeos", Mi));
            Ti(Zi(a, "prf", Mi));
            Ti(Zi(a, "mwt", Mi));
            Zi(a, "iogeo", Mi);
            Ti(Zi(a, "osddt", Mi));
            Ti(Zi(a, "nrls", Oi));
            (a = this.ra.Qa) && a.getAttribute && !/-[a-z]/.test("googleAvInapp") && (fj && a.dataset ? "googleAvInapp" in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + Ic()) : a.getAttribute("data-" + Ic())) && (Q.D().h = !0);
            1 == this.jg ? aj(this.U, "od", 1) : aj(this.U, "od", 0)
        };
    p(tl, G);
    k = tl.prototype;
    k.R = function() {
        this.ra.g && (this.Ua.Hc && (Qd(this.ra.g, "mouseover", this.Ua.Hc), this.Ua.Hc = null), this.Ua.Gc && (Qd(this.ra.g, "mouseout", this.Ua.Gc), this.Ua.Gc = null));
        this.yb && this.yb.V();
        this.ba && this.ba.V();
        delete this.Pb;
        delete this.zc;
        delete this.Id;
        delete this.ra.Qa;
        delete this.ra.g;
        delete this.Ua;
        delete this.yb;
        delete this.ba;
        delete this.U;
        G.prototype.R.call(this)
    };
    k.Va = function() {
        return this.ba ? this.ba.g : this.position
    };
    k.Mc = function(a) {
        O.D().Mc(a)
    };
    k.Aa = function() {
        return !1
    };
    k.Ib = function() {
        return new ql
    };
    k.sa = function() {
        return this.Pb
    };
    var ul = function(a, b) {
            b != a.gb && (a.gb = b, a = Q.D(), b ? a.B++ : 0 < a.B && a.B--)
        },
        vl = function(a, b) {
            if (a.ba) {
                if (b.ca() === a.ba.ca()) return;
                a.ba.V();
                a.ba = null
            }
            b = b.create(a.ra.g, a.U, a.Aa());
            if (b = null != b && b.Ec() ? b : null) a.ba = b
        },
        wl = function(a, b, c) {
            if (!a.Lb || -1 == a.ub || -1 === b.h || -1 === a.Lb.h) return 0;
            a = b.h - a.Lb.h;
            return a > c ? 0 : a
        };
    tl.prototype.jd = function(a) {
        return wl(this, a, 1E4)
    };
    var xl = function(a, b, c) {
            if (a.ba) {
                a.ba.Ea();
                var d = a.ba.o,
                    e = d.l(),
                    f = e.g;
                if (null != d.B) {
                    var g = d.C;
                    a.Yb = new Ud(g.left - f.left, g.top - f.top)
                }
                f = a.ac() ? Math.max(d.g, d.A) : d.g;
                g = {};
                null !== e.volume && (g.volume = e.volume);
                e = 1 === bj(a.U, "osddt");
                var h = a.ba.ca();
                switch (h) {
                    case "aio":
                    case "iem":
                    case "exc":
                    case "geo":
                    case "gsv":
                    case "mraid":
                    case "nis":
                    case "nio":
                    case "omid":
                        e = !0;
                        break;
                    case "a100":
                    case "na":
                        e = !0;
                        break;
                    default:
                        e || -1 != a.ub || Lj("av-js", {
                            strategy_name: h,
                            bin: O.D().g
                        })
                }
                e ? (e = a.jd(d), a.Lb = d, a.cc(f, b, c, !1, g, e, d.o)) :
                    a.cc(f, b, c, !1, g, a.qc(b), d.o)
            }
        },
        yl = function(a) {
            if (a.Hb && a.yb) {
                var b = 1 == bj(a.U, "od"),
                    c = Q.D().g,
                    d = a.yb,
                    e = new D(Se(c), Te(c));
                c = a.ac();
                a = {
                    mg: a.ba ? a.ba.ca() : "ns",
                    Yb: a.Yb,
                    sg: e,
                    ac: c,
                    Z: a.na.Z,
                    pg: b
                };
                if (b = d.l) {
                    b.Ea();
                    e = b.o;
                    var f = e.l().g,
                        g = null,
                        h = null;
                    null != e.B && f && (g = e.C, g = new Ud(g.left - f.left, g.top - f.top), h = new D(f.right - f.left, f.bottom - f.top));
                    c = {
                        mg: b.ca(),
                        Yb: g,
                        sg: h,
                        ac: c,
                        pg: !1,
                        Z: c ? Math.max(e.g, e.A) : e.g
                    }
                } else c = null;
                c && bl(d, a, c)
            }
        };
    k = tl.prototype;
    k.cc = function(a, b, c, d, e, f, g) {
        this.Xa || (this.Hb && (a = this.fc(a, c, e, g), d = d && this.na.Z >= (this.Wa() ? .3 : .5), this.Tc(f, a, d), this.ub = b, 0 < a.Z && -1 === this.Fd && (this.Fd = b), -1 == this.Gd && this.Ya() && (this.Gd = b), -2 == this.yc && (this.yc = xk(this.Va()) ? a.Z : -1), this.na = a), this.zc(this))
    };
    k.Tc = function(a, b, c) {
        this.sa().K(a, b, this.na, c)
    };
    k.pc = function() {
        return new Li
    };
    k.fc = function(a, b, c, d) {
        c = this.pc();
        c.g = b;
        b = qj().h;
        b = 0 === bg(Ee) ? -1 : b.isVisible() ? 0 : 1;
        c.h = b;
        c.Z = this.hc(a);
        c.Wa = this.Wa();
        c.oa = d;
        return c
    };
    k.kd = function(a, b) {
        if (-1 == this.ub) return 0;
        a -= this.ub;
        return a > b ? 0 : a
    };
    k.qc = function(a) {
        return this.kd(a, 1E4)
    };
    k.hc = function(a) {
        return 0 === this.opacity && 1 === bj(this.U, "opac") ? 0 : a
    };
    k.Wa = function() {
        return !1
    };
    k.ac = function() {
        return !1
    };
    k.va = function() {
        return 0
    };
    k.Ya = function() {
        return this.Pb.Ya()
    };
    var zl = function(a, b, c) {
        b && (a.zc = b);
        c && (a.Id = c)
    };
    var Al = "StopIteration" in q ? q.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        Bl = function() {};
    Bl.prototype.next = function() {
        throw Al;
    };
    Bl.prototype.ce = function() {
        return this
    };
    var Cl = function() {
            this.o = this.g = this.l = this.h = this.A = 0
        },
        Dl = function(a) {
            var b = {};
            var c = u() - a.A;
            b = (b.ptlt = c, b);
            (c = a.h) && (b.pnk = c);
            (c = a.l) && (b.pnc = c);
            (c = a.o) && (b.pnmm = c);
            (a = a.g) && (b.pns = a);
            return b
        };
    var El = function() {
        Li.call(this);
        this.l = !1;
        this.volume = void 0;
        this.A = !1;
        this.o = -1
    };
    p(El, Li);
    var Fl = function(a) {
        return lk(a.volume) && .1 <= a.volume
    };
    var Gl = function() {
            var a = {};
            this.h = (a.vs = [1, 0], a.vw = [0, 1], a.am = [2, 2], a.a = [4, 4], a.f = [8, 8], a.bm = [16, 16], a.b = [32, 32], a.avw = [0, 64], a.avs = [64, 0], a.pv = [256, 256], a.gdr = [0, 512], a.p = [0, 1024], a.r = [0, 2048], a.m = [0, 4096], a.um = [0, 8192], a.ef = [0, 16384], a.s = [0, 32768], a.pmx = [0, 16777216], a);
            this.g = {};
            for (var b in this.h) 0 < this.h[b][1] && (this.g[b] = 0);
            this.l = 0
        },
        Hl = function(a, b) {
            var c = a.h[b],
                d = c[1];
            a.l += c[0];
            0 < d && 0 == a.g[b] && (a.g[b] = 1)
        },
        Jl = function(a) {
            return Il(a, ub(a.h))
        },
        Il = function(a, b) {
            var c = 0,
                d;
            for (d in a.g) Za(b, d) &&
                1 == a.g[d] && (c += a.h[d][1], a.g[d] = 2);
            return c
        },
        Kl = function(a) {
            var b = 0,
                c;
            for (c in a.g) {
                var d = a.g[c];
                if (1 == d || 2 == d) b += a.h[c][1]
            }
            return b
        };
    var Ll = function() {
        this.h = this.l = 0
    };
    Ll.prototype.g = function() {
        return this.l
    };
    var Ml = function(a, b, c) {
        32 <= b || (a.h & 1 << b && !c ? a.l &= ~(1 << b) : a.h & 1 << b || !c || (a.l |= 1 << b), a.h |= 1 << b)
    };
    var Nl = function() {
        ql.call(this);
        this.l = new cl;
        this.T = this.J = this.L = 0;
        this.F = -1;
        this.ha = new cl;
        this.A = new cl;
        this.g = new fl;
        this.B = this.o = -1;
        this.M = new cl;
        this.$ = 2E3;
        this.O = new Ll;
        this.Y = new Ll;
        this.X = new Ll
    };
    p(Nl, ql);
    var Ol = function(a, b, c) {
        var d = a.T;
        Sj || c || -1 == a.F || (d += b - a.F);
        return d
    };
    Nl.prototype.K = function(a, b, c, d) {
        if (!b.A) {
            ql.prototype.K.call(this, a, b, c, d);
            var e = Fl(b) && Fl(c),
                f = .5 <= (d ? Math.min(b.Z, c.Z) : c.Z);
            lk(b.volume) && (this.o = -1 != this.o ? Math.min(this.o, b.volume) : b.volume, this.B = Math.max(this.B, b.volume));
            f && (this.L += a, this.J += e ? a : 0);
            ol(this.g, b.Z, c.Z, b.g, a, d, e);
            dl(this.l, !0, a);
            dl(this.A, e, a);
            dl(this.M, c.l, a);
            dl(this.ha, e && !f, a);
            a = Math.floor(b.o / 1E3);
            Ml(this.O, a, b.isVisible());
            Ml(this.Y, a, 1 <= b.Z);
            Ml(this.X, a, Fl(b))
        }
    };
    var Pl = function() {
        this.g = !1
    };
    var Ql = function(a, b) {
        this.g = !1;
        this.o = a;
        this.J = b;
        this.h = 0
    };
    p(Ql, Pl);
    var Rl = function(a, b) {
        return a.l(b) ? (b = a.J.report(a.o, b), a.h |= b, 0 == b) : !1
    };
    Ql.prototype.l = function() {
        return !0
    };
    Ql.prototype.A = function() {
        return !1
    };
    Ql.prototype.B = function() {
        var a = this,
            b = zb(function(c) {
                return c == a.o
            });
        return Zj[b].toString()
    };
    Ql.prototype.toString = function() {
        var a = "";
        this.A() && (a += "c");
        this.g && (a += "s");
        0 < this.h && (a += ":" + this.h);
        return this.B() + a
    };
    var Sl = function(a, b, c, d) {
        Nk.call(this, a, b, c, d)
    };
    p(Sl, Nk);
    Sl.prototype.M = function(a) {
        var b = 1 == bj(this.U, "od");
        return Ak(a, this.A, this.element, b)
    };
    Sl.prototype.bd = function() {
        if (1 === bj(this.U, "osddt") || "mraid" === this.ca() || "iem" === this.ca() || "omid" === this.ca()) this.timestamp = Tj();
        else {
            var a = this.h.l();
            this.timestamp = -1 === a.time ? Tj() : a.time
        }
    };
    Sl.prototype.Ea = function() {
        this.bd();
        this.Db();
        this.ad();
        var a = this.g;
        var b = this.A;
        a = a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom ? new H(Math.max(a.top, b.top), Math.min(a.right, b.right), Math.min(a.bottom, b.bottom), Math.max(a.left, b.left)) : new H(0, 0, 0, 0);
        b = a.top >= a.bottom || a.left >= a.right ? new H(0, 0, 0, 0) : a;
        a = this.h.l();
        var c = 0,
            d = 0,
            e = 0;
        0 < (this.g.bottom - this.g.top) * (this.g.right - this.g.left) && (this.M(b) ? b = new H(0, 0, 0, 0) : (c = Q.D().A, e = new H(0, c.height, c.width, 0), c = wk(b, this.g), d = wk(b,
            Q.D().g), e = wk(b, e)));
        b = b.top >= b.bottom || b.left >= b.right ? new H(0, 0, 0, 0) : Ue(b, -this.g.left, -this.g.top);
        uk() || (d = c = 0);
        this.o = new Ck(a, this.g, b, c, d, this.timestamp, e)
    };
    Sl.prototype.ca = function() {
        return this.h.ca()
    };
    var Tl = new H(0, 0, 0, 0),
        Ul = function(a, b, c) {
            Nk.call(this, null, a, b, c);
            this.C = a.vc();
            this.B = 0
        };
    p(Ul, Sl);
    k = Ul.prototype;
    k.Ec = function() {
        this.l();
        return !0
    };
    k.Oa = function() {
        Sl.prototype.Ea.call(this)
    };
    k.bd = function() {};
    k.Db = function() {};
    k.Ea = function() {
        this.l();
        Sl.prototype.Ea.call(this)
    };
    k.fb = function(a) {
        a = a.vc();
        a !== this.C && (a ? this.l() : (Q.D().g = new H(0, 0, 0, 0), this.g = new H(0, 0, 0, 0), this.A = new H(0, 0, 0, 0), this.timestamp = -1));
        this.C = a
    };
    var Vl = {},
        Wl = (Vl.firstquartile = 0, Vl.midpoint = 1, Vl.thirdquartile = 2, Vl.complete = 3, Vl),
        Xl = function(a, b, c, d, e, f) {
            e = void 0 === e ? null : e;
            f = void 0 === f ? [] : f;
            tl.call(this, b, c, d);
            this.jc = 0;
            this.Ba = {};
            this.fa = new Gl;
            this.td = {};
            this.ia = "";
            this.Ra = null;
            this.pa = !1;
            this.g = [];
            this.B = e;
            this.C = f;
            this.A = null;
            this.l = -1;
            this.X = this.H = void 0;
            this.K = this.I = 0;
            this.T = -1;
            this.ha = this.aa = !1;
            this.O = this.F = this.h = this.kb = this.la = 0;
            new fl;
            this.W = this.Y = 0;
            this.$ = -1;
            this.ea = 0;
            this.L = za;
            this.N = [this.Ib()];
            this.Da = 2;
            this.ab = {};
            this.ab.pause =
                "p";
            this.ab.resume = "r";
            this.ab.skip = "s";
            this.ab.mute = "m";
            this.ab.unmute = "um";
            this.ab.exitfullscreen = "ef";
            this.o = null
        };
    p(Xl, tl);
    Xl.prototype.Aa = function() {
        return !0
    };
    Xl.prototype.Hd = function() {
        if (this.B) {
            var a = this.B;
            a.g || (a.g = Rl(a, this))
        }
    };
    var Yl = function(a) {
        return void 0 === a ? a : Number(a) ? ek(a, 3) : 0
    };
    k = Xl.prototype;
    k.jd = function(a) {
        return wl(this, a, Math.max(1E4, this.l / 3))
    };
    k.qc = function(a) {
        return 2 == this.ea ? 0 : tl.prototype.kd.call(this, a, Math.max(1E4, this.l / 3))
    };
    k.cc = function(a, b, c, d, e, f, g) {
        var h = this,
            l = this.L(this) || {};
        Eb(l, e);
        this.l = l.duration || this.l;
        this.H = l.isVpaid || this.H;
        this.X = l.isYouTube || this.X;
        e = Zl(this, b);
        1 === $l(this) && (f = e);
        tl.prototype.cc.call(this, a, b, c, d, l, f, g);
        this.B && this.B.g && y(this.C, function(m) {
            m.g || (m.g = Rl(m, h))
        })
    };
    k.Tc = function(a, b, c) {
        tl.prototype.Tc.call(this, a, b, c);
        am(this).K(a, b, this.na, c);
        this.ha = Fl(this.na) && Fl(b); - 1 == this.T && this.aa && (this.T = this.sa().l.g);
        this.fa.l = 0;
        a = this.Ya();
        b.isVisible() && Hl(this.fa, "vs");
        a && Hl(this.fa, "vw");
        lk(b.volume) && Hl(this.fa, "am");
        Fl(b) && Hl(this.fa, "a");
        this.gb && Hl(this.fa, "f"); - 1 != b.h && (Hl(this.fa, "bm"), 1 == b.h && Hl(this.fa, "b"));
        Fl(b) && b.isVisible() && Hl(this.fa, "avs");
        this.ha && a && Hl(this.fa, "avw");
        0 < b.Z && Hl(this.fa, "pv");
        bm(this, this.sa().l.g, !0) && Hl(this.fa, "gdr");
        2E3 <=
            ll(this.sa().h, 1) && Hl(this.fa, "pmx")
    };
    k.Ib = function() {
        return new Nl
    };
    k.sa = function() {
        return this.Pb
    };
    var am = function(a, b) {
        var c;
        null != b && b < a.N.length ? c = b : c = a.N.length - 1;
        return a.N[c]
    };
    Xl.prototype.pc = function() {
        return new El
    };
    Xl.prototype.fc = function(a, b, c, d) {
        a = tl.prototype.fc.call(this, a, b, c, void 0 === d ? -1 : d);
        a.l = this.gb;
        a.A = 2 == this.ea;
        a.volume = c.volume;
        lk(a.volume) || (this.la++, b = this.na, lk(b.volume) && (a.volume = b.volume));
        c = c.currentTime;
        a.o = void 0 !== c && 0 <= c ? c : -1;
        return a
    };
    var $l = function(a) {
            var b = !!bj(O.D().U, "umt");
            return a.H || !b && !a.X ? 0 : 1
        },
        Zl = function(a, b) {
            b = a.qc(b);
            var c = a.L(a) || {};
            c = void 0 !== c.currentTime ? c.currentTime : a.I;
            var d = c - a.I,
                e = 0;
            0 <= d ? (a.K += b, a.W += Math.max(b - d, 0), e = Math.min(d, a.K)) : a.Y += Math.abs(d);
            0 != d && (a.K = 0); - 1 == a.$ && 0 < d && (a.$ = 0 <= Rj ? Tj() - Rj : -1);
            a.I = c;
            return e
        };
    Xl.prototype.hc = function(a) {
        return Q.D().J ? 0 : this.gb ? 1 : tl.prototype.hc.call(this, a)
    };
    Xl.prototype.va = function() {
        return 1
    };
    Xl.prototype.getDuration = function() {
        return this.l
    };
    var cm = function(a, b) {
            Va(a.C, function(c) {
                return c.o == b.o
            }) || a.C.push(b)
        },
        bm = function(a, b, c) {
            return 15E3 <= b ? !0 : a.aa ? (void 0 === c ? 0 : c) ? !0 : 0 < a.l ? b >= a.l / 2 : 0 < a.T ? b >= a.T : !1 : !1
        },
        dm = function(a) {
            var b = {},
                c = Q.D();
            b.insideIframe = c.l;
            b.unmeasurable = a.Xa;
            b.position = a.Va();
            b.exposure = a.na.Z;
            b.documentSize = c.o;
            b.viewportSize = new D(Se(c.g), Te(c.g));
            null != a.o && (b.presenceData = a.o);
            b.screenShare = a.na.oa;
            return b
        },
        em = function(a) {
            var b = ek(a.na.Z, 2),
                c = a.fa.l,
                d = a.na,
                e = am(a),
                f = Yl(e.o),
                g = Yl(e.B),
                h = Yl(d.volume),
                l = ek(e.C, 2),
                m = ek(e.H, 2),
                n = ek(d.Z, 2),
                v = ek(e.I, 2),
                B = ek(e.N, 2);
            d = ek(d.oa, 2);
            a = a.Va().clone();
            a.round();
            e = rl(e, !1);
            return {
                rg: b,
                rb: c,
                Qb: f,
                Mb: g,
                lb: h,
                Rb: l,
                Nb: m,
                Z: n,
                Sb: v,
                Ob: B,
                oa: d,
                position: a,
                Xb: e
            }
        },
        gm = function(a, b) {
            fm(a.g, b, function() {
                return {
                    rg: 0,
                    rb: void 0,
                    Qb: -1,
                    Mb: -1,
                    lb: -1,
                    Rb: -1,
                    Nb: -1,
                    Z: -1,
                    Sb: -1,
                    Ob: -1,
                    oa: -1,
                    position: void 0,
                    Xb: []
                }
            });
            a.g[b] = em(a)
        },
        fm = function(a, b, c) {
            for (var d = a.length; d < b + 1;) a.push(c()), d++
        },
        jm = function(a, b, c) {
            var d = a.td[b];
            if (null != d) return d;
            d = hm(a, b);
            var e = zb(function(f) {
                return f == b
            });
            c = im(a, d, d, c,
                Wl[yb[e]]);
            "fully_viewable_audible_half_duration_impression" == b && (c.std = "csm", c.ic = Il(a.fa, ["gdr"]));
            return c
        },
        km = function(a, b, c) {
            var d = [b];
            if (a != b || c != b) d.unshift(a), d.push(c);
            return d
        },
        im = function(a, b, c, d, e) {
            if (a.Xa) return {
                "if": 0
            };
            var f = a.Va().clone();
            f.round();
            var g = Q.D(),
                h = O.D(),
                l = a.sa(),
                m = a.ba ? a.ba.ca() : "ns",
                n = {};
            n["if"] = g.l ? 1 : void 0;
            n.sdk = a.A ? a.A : void 0;
            n.t = a.og;
            n.p = [f.top, f.left, f.bottom, f.right];
            n.tos = hl(l.h, !1);
            n.mtos = rl(l);
            n.mcvt = l.W.l;
            n.ps = void 0;
            f = Ol(l, Tj(), 2 == a.ea);
            n.vht = f;
            n.mut = l.ha.l;
            n.a = Yl(a.na.volume);
            n.mv = Yl(l.B);
            n.fs = a.gb ? 1 : 0;
            n.ft = l.M.g;
            n.at = l.A.g;
            n.as = .1 <= l.o ? 1 : 0;
            n.atos = hl(l.g);
            n.ssb = hl(l.aa, !1);
            n.amtos = kl(l.g);
            n.uac = a.la;
            n.vpt = l.l.g;
            "nio" == m && (n.nio = 1, n.avms = "nio");
            n.gmm = "4";
            n.gdr = bm(a, l.l.g, !0) ? 1 : 0;
            n.efpf = a.Da;
            if ("gsv" == m || "nis" == m) m = a.ba, 0 < m.B && (n.nnut = m.B);
            n.tcm = $l(a);
            n.nmt = a.Y;
            n.bt = a.W;
            n.pst = a.$;
            n.vpaid = a.H;
            n.dur = a.l;
            n.vmtime = a.I;
            n.is = a.fa.l;
            1 <= a.g.length && (n.i0 = a.g[0].rb, n.a0 = [a.g[0].lb], n.c0 = [a.g[0].Z], n.ss0 = [a.g[0].oa], m = a.g[0].position, n.p0 = m ? [m.top, m.left, m.bottom,
                m.right
            ] : void 0);
            2 <= a.g.length && (n.i1 = a.g[1].rb, n.a1 = km(a.g[1].Qb, a.g[1].lb, a.g[1].Mb), n.c1 = km(a.g[1].Rb, a.g[1].Z, a.g[1].Nb), n.ss1 = km(a.g[1].Sb, a.g[1].oa, a.g[1].Ob), m = a.g[1].position, n.p1 = m ? [m.top, m.left, m.bottom, m.right] : void 0, n.mtos1 = a.g[1].Xb);
            3 <= a.g.length && (n.i2 = a.g[2].rb, n.a2 = km(a.g[2].Qb, a.g[2].lb, a.g[2].Mb), n.c2 = km(a.g[2].Rb, a.g[2].Z, a.g[2].Nb), n.ss2 = km(a.g[2].Sb, a.g[2].oa, a.g[2].Ob), m = a.g[2].position, n.p2 = m ? [m.top, m.left, m.bottom, m.right] : void 0, n.mtos2 = a.g[2].Xb);
            4 <= a.g.length && (n.i3 = a.g[3].rb,
                n.a3 = km(a.g[3].Qb, a.g[3].lb, a.g[3].Mb), n.c3 = km(a.g[3].Rb, a.g[3].Z, a.g[3].Nb), n.ss3 = km(a.g[3].Sb, a.g[3].oa, a.g[3].Ob), m = a.g[3].position, n.p3 = m ? [m.top, m.left, m.bottom, m.right] : void 0, n.mtos3 = a.g[3].Xb);
            n.cs = Kl(a.fa);
            b && (n.ic = Jl(a.fa), n.dvpt = l.l.h, n.dvs = ml(l.h, .5), n.dfvs = ml(l.h, 1), n.davs = ml(l.g, .5), n.dafvs = ml(l.g, 1), c && (l.l.h = 0, nl(l.h), nl(l.g)), a.Ya() && (n.dtos = l.L, n.dav = l.J, n.dtoss = a.jc + 1, c && (l.L = 0, l.J = 0, a.jc++)), n.dat = l.A.h, n.dft = l.M.h, c && (l.A.h = 0, l.M.h = 0));
            n.ps = [g.o.width, g.o.height];
            n.bs = [Se(g.g),
                Te(g.g)
            ];
            n.scs = [g.A.width, g.A.height];
            n.dom = g.domain;
            a.kb && (n.vds = a.kb);
            if (0 < a.C.length || a.B) b = cb(a.C), a.B && b.push(a.B), n.pings = Ta(b, function(v) {
                return v.toString()
            });
            b = Ta(Sa(a.C, function(v) {
                return v.A()
            }), function(v) {
                return v.B()
            });
            db(b);
            n.ces = b;
            a.h && (n.vmer = a.h);
            a.F && (n.vmmk = a.F);
            a.O && (n.vmiec = a.O);
            n.avms = a.ba ? a.ba.ca() : "ns";
            a.ba && Eb(n, a.ba.Ma());
            d ? (n.c = ek(a.na.Z, 2), n.ss = ek(a.na.oa, 2)) : n.tth = Tj() - Qj;
            n.mc = ek(l.H, 2);
            n.nc = ek(l.C, 2);
            n.mv = Yl(l.B);
            n.nv = Yl(l.o);
            n.lte = ek(a.yc, 2);
            d = am(a, e);
            rl(l);
            n.qmtos =
                rl(d);
            n.qnc = ek(d.C, 2);
            n.qmv = Yl(d.B);
            n.qnv = Yl(d.o);
            n.qas = .1 <= d.o ? 1 : 0;
            n.qi = a.ia;
            n.avms || (n.avms = "geo");
            n.psm = l.O.h;
            n.psv = l.O.g();
            n.psfv = l.Y.g();
            n.psa = l.X.g();
            h = dj(h.U);
            h.length && (n.veid = h);
            a.o && Eb(n, Dl(a.o));
            return n
        },
        hm = function(a, b) {
            if (Za(Yj, b)) return !0;
            var c = a.Ba[b];
            return void 0 !== c ? (a.Ba[b] = !0, !c) : !1
        };
    var lm = u(),
        om = function() {
            this.g = {};
            var a = E();
            mm(this, a, document);
            var b = nm();
            try {
                if ("1" == b) {
                    for (var c = a.parent; c != a.top; c = c.parent) mm(this, c, c.document);
                    mm(this, a.top, a.top.document)
                }
            } catch (d) {}
        },
        nm = function() {
            var a = document.documentElement;
            try {
                if (!ue(E().top)) return "2";
                var b = [],
                    c = E(a.ownerDocument);
                for (a = c; a != c.top; a = a.parent)
                    if (a.frameElement) b.push(a.frameElement);
                    else break;
                return b && 0 != b.length ? "1" : "0"
            } catch (d) {
                return "2"
            }
        },
        mm = function(a, b, c) {
            dk(c, "mousedown", function() {
                return pm(a)
            }, 301);
            dk(b,
                "scroll",
                function() {
                    return qm(a)
                }, 302);
            dk(c, "touchmove", function() {
                return rm(a)
            }, 303);
            dk(c, "mousemove", function() {
                return sm(a)
            }, 304);
            dk(c, "keydown", function() {
                return tm(a)
            }, 305)
        },
        pm = function(a) {
            ob(a.g, function(b) {
                1E5 < b.l || ++b.l
            })
        },
        qm = function(a) {
            ob(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        rm = function(a) {
            ob(a.g, function(b) {
                1E5 < b.g || ++b.g
            })
        },
        tm = function(a) {
            ob(a.g, function(b) {
                1E5 < b.h || ++b.h
            })
        },
        sm = function(a) {
            ob(a.g, function(b) {
                1E5 < b.o || ++b.o
            })
        };
    var um = function() {
            this.g = [];
            this.h = []
        },
        vm = function(a, b) {
            return Xa(a.g, function(c) {
                return c.ia == b
            })
        },
        wm = function(a, b) {
            return b ? Xa(a.g, function(c) {
                return c.ra.Qa == b
            }) : null
        },
        xm = function(a, b) {
            return Xa(a.h, function(c) {
                return 2 == c.va() && c.ia == b
            })
        },
        zm = function() {
            var a = ym;
            return 0 == a.g.length ? a.h : 0 == a.h.length ? a.g : bb(a.h, a.g)
        };
    um.prototype.reset = function() {
        this.g = [];
        this.h = []
    };
    var Am = function(a, b) {
            a = 1 == b.va() ? a.g : a.h;
            var c = Wa(a, function(d) {
                return d == b
            });
            return -1 != c ? (a.splice(c, 1), b.ba && b.ba.Vb(), b.V(), !0) : !1
        },
        Bm = function(a) {
            var b = ym;
            if (Am(b, a)) {
                switch (a.va()) {
                    case 0:
                        var c = function() {
                            return null
                        };
                    case 2:
                        c = function() {
                            return xm(b, a.ia)
                        };
                        break;
                    case 1:
                        c = function() {
                            return vm(b, a.ia)
                        }
                }
                for (var d = c(); d; d = c()) Am(b, d)
            }
        },
        Cm = function(a) {
            var b = ym;
            a = Sa(a, function(c) {
                return !wm(b, c.ra.Qa)
            });
            b.g.push.apply(b.g, ia(a))
        },
        Dm = function(a) {
            var b = ym,
                c = [];
            y(a, function(d) {
                Va(b.g, function(e) {
                    return e.ra.Qa ===
                        d.ra.Qa && e.ia === d.ia
                }) || (b.g.push(d), c.push(d))
            })
        };
    Aa(um);
    var ym = um.D();
    var Em = function() {
            this.g = this.h = null
        },
        Fm = function(a, b) {
            if (null == a.h) return !1;
            var c = function(d, e) {
                b(d, e)
            };
            a.g = Xa(a.h, function(d) {
                return null != d && d.od()
            });
            a.g && (a.g.nd(c) ? Jk(a.g.g) : b(a.g.g.bb(), a.g));
            return null != a.g
        };
    Aa(Em);
    var Hm = function(a) {
        a = Gm(a);
        Ok.call(this, a.length ? a[a.length - 1] : new Fk(F, 0));
        this.l = a;
        this.h = null
    };
    p(Hm, Ok);
    k = Hm.prototype;
    k.ca = function() {
        return (this.h ? this.h : this.g).ca()
    };
    k.Ma = function() {
        return (this.h ? this.h : this.g).Ma()
    };
    k.Ga = function() {
        return (this.h ? this.h : this.g).Ga()
    };
    k.nd = function(a) {
        var b = !1;
        y(this.l, function(c) {
            c.Fc() && (b = !0)
        });
        b && (this.o = a, Ik(this.g, this));
        return b
    };
    k.V = function() {
        y(this.l, function(a) {
            a.V()
        });
        Ok.prototype.V.call(this)
    };
    k.od = function() {
        return Va(this.l, function(a) {
            return a.wd()
        })
    };
    k.wb = function() {
        return Va(this.l, function(a) {
            return a.Wb()
        })
    };
    k.Tb = function(a, b, c) {
        return new Sl(a, this.g, b, c)
    };
    k.Oa = function(a) {
        this.h = a.h
    };
    var Gm = function(a) {
        if (!a.length) return [];
        a = Sa(a, function(c) {
            return null != c && c.wd()
        });
        for (var b = 1; b < a.length; b++) Ik(a[b - 1], a[b]);
        return a
    };
    var Im = function(a, b, c, d) {
        Nk.call(this, a, b, c, d);
        this.J = this.F = null
    };
    p(Im, Sl);
    Im.prototype.Ec = function() {
        var a = this;
        this.J || (this.J = Tj());
        if (Jj(298, function() {
                return Jm(a)
            })) return !0;
        Hk(this.h, "msf");
        return !1
    };
    var Lm = function(a, b) {
            try {
                if (b.length) {
                    a.F || (a.F = Tj());
                    var c = Km(b),
                        d = ef(a.element, a.h.g.ka),
                        e = d.x,
                        f = d.y;
                    a.g = new H(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                    var g = jk(c.intersectionRect);
                    a.A = Ue(g, a.g.left - g.left, a.g.top - g.top)
                }
            } catch (h) {
                a.Vb(), Mj(299, h)
            }
        },
        Km = function(a) {
            return Ua(a, function(b, c) {
                return b.time > c.time ? b : c
            }, a[0])
        };
    Im.prototype.Db = function() {};
    Im.prototype.M = function() {
        return !1
    };
    Im.prototype.ad = function() {};
    Im.prototype.Ma = function() {
        var a = {};
        return Object.assign(this.h.Ma(), (a.niot_obs = this.J, a.niot_cbk = this.F, a))
    };
    var Mm = {
            threshold: [0, .3, .5, .75, 1]
        },
        Nm = function(a, b, c, d) {
            Im.call(this, a, b, c, d);
            this.B = this.C = this.l = null
        };
    p(Nm, Im);
    Nm.prototype.ca = function() {
        return "nio"
    };
    Nm.prototype.Vb = function() {
        if (this.l && this.element) try {
            this.l.unobserve(this.element), this.C ? (this.C.unobserve(this.element), this.C = null) : this.B && (this.B.disconnect(), this.B = null)
        } catch (a) {}
    };
    var Om = function(a) {
            return a.l && a.l.takeRecords ? a.l.takeRecords() : []
        },
        Jm = function(a) {
            if (!a.element) return !1;
            var b = a.element,
                c = a.h.g.ka,
                d = O.D().h.g;
            a.l = new c.IntersectionObserver(xj(d, function(e) {
                return Lm(a, e)
            }), Mm);
            d = xj(d, function() {
                a.l.unobserve(b);
                a.l.observe(b);
                Lm(a, Om(a))
            });
            c.ResizeObserver ? (a.C = new c.ResizeObserver(d), a.C.observe(b)) : c.MutationObserver && (a.B = new q.MutationObserver(d), a.B.observe(b, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            }));
            a.l.observe(b);
            Lm(a, Om(a));
            return !0
        };
    Nm.prototype.Ea = function() {
        var a = Om(this);
        0 < a.length && Lm(this, a);
        Im.prototype.Ea.call(this)
    };
    var Pm = function(a) {
        a = void 0 === a ? F : a;
        Ok.call(this, new Fk(a, 2))
    };
    p(Pm, Ok);
    Pm.prototype.ca = function() {
        return "nio"
    };
    Pm.prototype.wb = function() {
        var a = pc;
        return a && 0 <= a.toLowerCase().indexOf("cobalt") ? !1 : !Q.D().h && null != this.g.g.ka.IntersectionObserver
    };
    Pm.prototype.Tb = function(a, b, c) {
        return new Nm(a, this.g, b, c)
    };
    var Rm = function() {
        var a = Qm();
        Fk.call(this, F.top, a, "geo")
    };
    p(Rm, Fk);
    Rm.prototype.T = function() {
        return Q.D().g
    };
    Rm.prototype.Wb = function() {
        var a = Qm();
        this.J !== a && (this.g != this && a > this.g.J && (this.g = this, Gk(this)), this.J = a);
        return 2 == a
    };
    var Qm = function() {
        O.D();
        var a = Q.D();
        return a.l || a.h ? 0 : 2
    };
    Aa(Rm);
    var Sm = function() {};
    Aa(Sm);
    var Tm = function() {
            this.done = !1;
            this.g = {
                ee: 0,
                Yc: 0,
                Vh: 0,
                gd: 0,
                tc: -1,
                he: 0,
                ge: 0,
                ie: 0
            };
            this.A = null;
            this.B = !1;
            this.h = null;
            this.C = 0;
            this.l = new Dk(this)
        },
        Wm = function() {
            var a = Um;
            a.B || (a.B = !0, Vm(a, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
                return a.o.apply(a, ia(c))
            }), a.o())
        };
    Tm.prototype.aa = function() {
        Xm(this, zm(), !1)
    };
    var Ym = function() {
            Sm.D();
            var a = Em.D();
            null != a.g && a.g.g ? Jk(a.g.g) : rk(Q.D())
        },
        Xm = function(a, b, c) {
            if (!a.done && (a.l.cancel(), 0 != b.length)) {
                a.h = null;
                try {
                    Ym();
                    var d = Tj(),
                        e = O.D();
                    e.B = d;
                    if (null != Em.D().g)
                        for (e = 0; e < b.length; e++) xl(b[e], d, c);
                    else Lj("", {
                        strategy_not_selected: 1,
                        bin: e.g
                    });
                    for (d = 0; d < b.length; d++) yl(b[d]);
                    ++a.g.gd;
                    Zm()
                } finally {
                    c ? y(b, function(f) {
                        f.na.Z = 0
                    }) : Ek(a.l)
                }
            }
        },
        Vm = function(a, b) {
            if (!a.A) {
                b = Kj(142, b);
                qj();
                var c = cg(Ee);
                c && Pd(Ee, c, b, {
                    capture: !1
                }) && (a.A = b)
            }
        };
    Tm.prototype.o = function() {
        var a = uk(),
            b = Tj();
        a ? (Sj || (Oj = b, y(ym.g, function(c) {
            var d = c.sa();
            d.T = Ol(d, b, 1 != c.ea)
        })), Sj = !0) : (this.C = $m(this, b), Sj = !1, Qj = b, y(ym.g, function(c) {
            c.Hb && (c.sa().F = b)
        }));
        Xm(this, zm(), !a)
    };
    var an = function() {
            var a = Em.D();
            if (null != a.g) {
                var b = a.g;
                y(zm(), function(c) {
                    return vl(c, b)
                })
            }
        },
        Zm = function() {
            var a = O.D();
            bj(a.U, "llp")
        },
        $m = function(a, b) {
            a = a.C;
            Sj && (a += b - Oj);
            return a
        },
        bn = function(a) {
            var b = Um;
            a = void 0 === a ? function() {
                return {}
            } : a;
            Gj.Qc("av-js");
            Cj.g = .01;
            Ij([function(c) {
                var d = O.D(),
                    e = {};
                e = (e.bin = d.g, e.type = "error", e);
                d = cj(d.U);
                if (!b.h) {
                    var f = F.document,
                        g = 0 <= Pj ? Tj() - Pj : -1,
                        h = Tj(); - 1 == b.g.tc && (g = h);
                    var l = Q.D(),
                        m = O.D(),
                        n = cj(m.U),
                        v = zm();
                    try {
                        if (0 < v.length) {
                            var B = l.g;
                            B && (n.bs = [Se(B), Te(B)]);
                            var t =
                                l.o;
                            t && (n.ps = [t.width, t.height]);
                            F.screen && (n.ss = [F.screen.width, F.screen.height])
                        } else n.url = encodeURIComponent(F.location.href.substring(0, 512)), f.referrer && (n.referrer = encodeURIComponent(f.referrer.substring(0, 512)));
                        n.tt = g;
                        n.pt = Pj;
                        n.bin = m.g;
                        void 0 !== F.google_osd_load_pub_page_exp && (n.olpp = F.google_osd_load_pub_page_exp);
                        n.deb = [1, b.g.ee, b.g.Yc, b.g.gd, b.g.tc, 0, b.l.h, b.g.he, b.g.ge, b.g.ie].join("-");
                        n.tvt = $m(b, h);
                        l.h && (n.inapp = 1);
                        if (null !== F && F != F.top) {
                            0 < v.length && (n.iframe_loc = encodeURIComponent(F.location.href.substring(0,
                                512)));
                            var w = l.F;
                            n.is = [Se(w), Te(w)]
                        }
                    } catch (K) {
                        n.error = 1
                    }
                    b.h = n
                }
                t = b.h;
                B = {};
                for (var z in t) B[z] = t[z];
                z = O.D().h;
                if (1 == bj(z.l, "prf")) {
                    t = new vj;
                    w = z.g;
                    f = 0; - 1 < w.g && (f = w.o.g.now() - w.g);
                    t = Id(t, 1, w.l + f);
                    w = z.g;
                    t = Id(t, 5, -1 < w.g ? w.h + 1 : w.h);
                    t = Id(t, 2, z.h.g.l());
                    t = Id(t, 3, z.h.g.h());
                    w = Id(t, 4, z.h.g.g());
                    z = {};
                    t = new zd;
                    f = Gd(w, 1);
                    f = null == f ? f : +f;
                    f = null == f ? 0 : f;
                    if (0 !== f && (g = f, null != g)) {
                        Nc(t.g, 9);
                        f = t.g;
                        l = g;
                        l = (g = 0 > l ? 1 : 0) ? -l : l;
                        if (0 === l) Lc = 0 < 1 / l ? 0 : 2147483648, Kc = 0;
                        else if (isNaN(l)) Lc = 2147483647, Kc = 4294967295;
                        else if (1.7976931348623157E308 <
                            l) Lc = (g << 31 | 2146435072) >>> 0, Kc = 0;
                        else if (2.2250738585072014E-308 > l) l /= Math.pow(2, -1074), Lc = (g << 31 | l / 4294967296) >>> 0, Kc = l >>> 0;
                        else {
                            m = l;
                            h = 0;
                            if (2 <= m)
                                for (; 2 <= m && 1023 > h;) h++, m /= 2;
                            else
                                for (; 1 > m && -1022 < h;) m *= 2, h--;
                            l *= Math.pow(2, -h);
                            Lc = (g << 31 | h + 1023 << 20 | 1048576 * l & 1048575) >>> 0;
                            Kc = 4503599627370496 * l >>> 0
                        }
                        Oc(f, Kc);
                        Oc(f, Lc)
                    }
                    f = Hd(w, 2);
                    0 !== f && null != f && Ad(t, 2, f);
                    f = Hd(w, 3);
                    0 !== f && null != f && Ad(t, 3, f);
                    f = Hd(w, 4);
                    0 !== f && null != f && Ad(t, 4, f);
                    f = Hd(w, 5);
                    if (0 !== f && null != f && null != f)
                        if (Nc(t.g, 40), w = t.g, 0 <= f) Nc(w, f);
                        else {
                            for (g =
                                0; 9 > g; g++) w.g.push(f & 127 | 128), f >>= 7;
                            w.g.push(1)
                        } w = new Uint8Array(t.l + t.g.length());
                    g = t.h;
                    h = g.length;
                    for (l = f = 0; l < h; l++) m = g[l], w.set(m, f), f += m.length;
                    g = t.g.end();
                    w.set(g, f);
                    t.h = [w];
                    z = (z.pf = yd(w), z)
                } else z = {};
                Eb(B, z);
                Eb(c, e, d, B, a());
                if (e = Zk()) d = {}, Eb(c, (d.v = encodeURIComponent(e), d))
            }])
        };
    Aa(Tm);
    var Um = Tm.D();
    var cn = null,
        dn = "",
        en = !1,
        fn = function() {
            var a = cn || F;
            if (!a) return "";
            var b = [];
            if (!a.location || !a.location.href) return "";
            b.push("url=" + encodeURIComponent(a.location.href.substring(0, 512)));
            a.document && a.document.referrer && b.push("referrer=" + encodeURIComponent(a.document.referrer.substring(0, 512)));
            return b.join("&")
        };
    var gn = function(a) {
            return function(b) {
                return void 0 === b[a] ? 0 : b[a]
            }
        },
        jn = function() {
            var a = [0, 2, 4];
            return function(b) {
                b = b.tos;
                if (Array.isArray(b)) {
                    for (var c = Array(b.length), d = 0; d < b.length; d++) c[d] = 0 < d ? c[d - 1] + b[d] : b[d];
                    return void 0 !== a ? hn(c, a) : c
                }
            }
        },
        kn = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            d = void 0 === d ? function() {
                return !0
            } : d;
            return function(e) {
                var f = e[a];
                if (Array.isArray(f) && d(e)) return hn(f, b, c)
            }
        },
        ln = function(a, b) {
            return function(c) {
                return b(c) ? c[a] : void 0
            }
        },
        mn = function(a) {
            return function(b) {
                for (var c =
                        0; c < a.length; c++)
                    if (a[c] === b.e || void 0 === a[c] && !b.hasOwnProperty("e")) return !0;
                return !1
            }
        },
        hn = function(a, b, c) {
            return void 0 === c || c ? Sa(a, function(d, e) {
                return Za(b, e)
            }) : Ta(b, function(d, e, f) {
                return a.slice(0 < e ? f[e - 1] + 1 : 0, d + 1).reduce(function(g, h) {
                    return g + h
                }, 0)
            })
        };
    var nn = mn([void 0, 1, 2, 3, 4, 8, 16]),
        on = mn([void 0, 4, 8, 16]),
        pn = {
            sv: "sv",
            cb: "cb",
            e: "e",
            nas: "nas",
            msg: "msg",
            "if": "if",
            sdk: "sdk",
            p: "p",
            p0: ln("p0", on),
            p1: ln("p1", on),
            p2: ln("p2", on),
            p3: ln("p3", on),
            tos: "tos",
            mtos: "mtos",
            mtos1: kn("mtos1", [0, 2, 4], !1, on),
            mtos2: kn("mtos2", [0, 2, 4], !1, on),
            mtos3: kn("mtos3", [0, 2, 4], !1, on),
            mcvt: "mcvt",
            ps: "ps",
            scs: "scs",
            bs: "bs",
            vht: "vht",
            mut: "mut",
            a: "a",
            a0: ln("a0", on),
            a1: ln("a1", on),
            a2: ln("a2", on),
            a3: ln("a3", on),
            ft: "ft",
            dft: "dft",
            at: "at",
            dat: "dat",
            as: "as",
            vpt: "vpt",
            gmm: "gmm",
            std: "std",
            efpf: "efpf",
            swf: "swf",
            nio: "nio",
            px: "px",
            nnut: "nnut",
            vmer: "vmer",
            vmmk: "vmmk",
            vmiec: "vmiec",
            nmt: "nmt",
            tcm: "tcm",
            bt: "bt",
            pst: "pst",
            vpaid: "vpaid",
            dur: "dur",
            vmtime: "vmtime",
            dtos: "dtos",
            dtoss: "dtoss",
            dvs: "dvs",
            dfvs: "dfvs",
            dvpt: "dvpt",
            fmf: "fmf",
            vds: "vds",
            is: "is",
            i0: "i0",
            i1: "i1",
            i2: "i2",
            i3: "i3",
            ic: "ic",
            cs: "cs",
            c: "c",
            c0: ln("c0", on),
            c1: ln("c1", on),
            c2: ln("c2", on),
            c3: ln("c3", on),
            mc: "mc",
            nc: "nc",
            mv: "mv",
            nv: "nv",
            qmt: ln("qmtos", nn),
            qnc: ln("qnc", nn),
            qmv: ln("qmv", nn),
            qnv: ln("qnv", nn),
            raf: "raf",
            rafc: "rafc",
            lte: "lte",
            ces: "ces",
            tth: "tth",
            femt: "femt",
            femvt: "femvt",
            emc: "emc",
            emuc: "emuc",
            emb: "emb",
            avms: "avms",
            nvat: "nvat",
            qi: "qi",
            psm: "psm",
            psv: "psv",
            psfv: "psfv",
            psa: "psa",
            pnk: "pnk",
            pnc: "pnc",
            pnmm: "pnmm",
            pns: "pns",
            ptlt: "ptlt",
            pngs: "pings",
            veid: "veid",
            ssb: "ssb",
            ss0: ln("ss0", on),
            ss1: ln("ss1", on),
            ss2: ln("ss2", on),
            ss3: ln("ss3", on),
            dc_rfl: "urlsigs",
            obd: "obd",
            omidp: "omidp",
            omidr: "omidr",
            omidv: "omidv",
            omida: "omida",
            omids: "omids",
            omidpv: "omidpv",
            omidam: "omidam",
            omidct: "omidct",
            omidia: "omidia"
        },
        qn = {
            c: gn("c"),
            at: "at",
            atos: kn("atos",
                [0, 2, 4]),
            ta: function(a, b) {
                return function(c) {
                    if (void 0 === c[a]) return b
                }
            }("tth", "1"),
            a: "a",
            dur: "dur",
            p: "p",
            tos: jn(),
            j: "dom",
            mtos: kn("mtos", [0, 2, 4]),
            gmm: "gmm",
            gdr: "gdr",
            ss: gn("ss"),
            vsv: jb("w2"),
            t: "t"
        },
        rn = {
            atos: "atos",
            amtos: "amtos",
            avt: kn("atos", [2]),
            davs: "davs",
            dafvs: "dafvs",
            dav: "dav",
            ss: gn("ss"),
            t: "t"
        },
        sn = {
            a: "a",
            tos: jn(),
            at: "at",
            c: gn("c"),
            mtos: kn("mtos", [0, 2, 4]),
            dur: "dur",
            fs: "fs",
            p: "p",
            vpt: "vpt",
            vsv: jb("ias_w2"),
            dom: "dom",
            gmm: "gmm",
            gdr: "gdr",
            t: "t"
        },
        tn = {
            tos: jn(),
            at: "at",
            c: gn("c"),
            mtos: kn("mtos", [0,
                2, 4
            ]),
            p: "p",
            vpt: "vpt",
            vsv: jb("dv_w4"),
            gmm: "gmm",
            gdr: "gdr",
            dom: "dom",
            t: "t",
            mv: "mv",
            qmpt: kn("qmtos", [0, 2, 4]),
            qvs: function(a, b) {
                return function(c) {
                    var d = c[a];
                    if ("number" === typeof d) return Ta(b, function(e) {
                        return 0 < d && d >= e ? 1 : 0
                    })
                }
            }("qnc", [1, .5, 0]),
            qmv: "qmv",
            qa: "qas",
            a: "a"
        };
    var vn = function(a, b) {
            var c = {
                sv: "865",
                cb: "j"
            };
            c.nas = ym.g.length;
            c.msg = a;
            void 0 !== b && (a = un(b)) && (c.e = Zj[a]);
            return c
        },
        wn = function(a) {
            return 0 == a.lastIndexOf("custom_metric_viewable", 0)
        },
        un = function(a) {
            var b = wn(a) ? "custom_metric_viewable" : a.toLowerCase();
            return zb(function(c) {
                return c == b
            })
        };
    var xn = {
            Jg: "visible",
            vg: "audible",
            Kh: "time",
            Mh: "timetype"
        },
        yn = {
            visible: function(a) {
                return /^(100|[0-9]{1,2})$/.test(a)
            },
            audible: function(a) {
                return "0" == a || "1" == a
            },
            timetype: function(a) {
                return "mtos" == a || "tos" == a
            },
            time: function(a) {
                return /^(100|[0-9]{1,2})%$/.test(a) || /^([0-9])+ms$/.test(a)
            }
        },
        zn = function() {
            this.g = void 0;
            this.h = !1;
            this.l = 0;
            this.o = -1;
            this.A = "tos"
        },
        An = function(a) {
            try {
                var b = a.split(",");
                return b.length > ub(xn).length ? null : Ua(b, function(c, d) {
                    d = d.toLowerCase().split("=");
                    if (2 != d.length || void 0 ===
                        yn[d[0]] || !yn[d[0]](d[1])) throw Error("Entry (" + d[0] + ", " + d[1] + ") is invalid.");
                    c[d[0]] = d[1];
                    return c
                }, {})
            } catch (c) {
                return null
            }
        },
        Bn = function(a, b) {
            if (void 0 == a.g) return 0;
            switch (a.A) {
                case "mtos":
                    return a.h ? ll(b.g, a.g) : ll(b.h, a.g);
                case "tos":
                    return a.h ? jl(b.g, a.g) : jl(b.h, a.g)
            }
            return 0
        };
    var Cn = function(a, b, c, d) {
        Ql.call(this, b, d);
        this.F = a;
        this.C = c
    };
    p(Cn, Ql);
    Cn.prototype.B = function() {
        return this.F
    };
    Cn.prototype.A = function() {
        return !0
    };
    Cn.prototype.l = function(a) {
        var b = a.sa(),
            c = a.getDuration();
        return Va(this.C, function(d) {
            if (void 0 != d.g) var e = Bn(d, b);
            else b: {
                switch (d.A) {
                    case "mtos":
                        e = d.h ? b.A.l : b.l.g;
                        break b;
                    case "tos":
                        e = d.h ? b.A.g : b.l.g;
                        break b
                }
                e = 0
            }
            0 == e ? d = !1 : (d = -1 != d.l ? d.l : void 0 !== c && 0 < c ? d.o * c : -1, d = -1 != d && e >= d);
            return d
        })
    };
    var Dn = function(a) {
        Ql.call(this, "fully_viewable_audible_half_duration_impression", a)
    };
    p(Dn, Ql);
    Dn.prototype.l = function(a) {
        var b = jl(a.sa().g, 1);
        return bm(a, b)
    };
    var En = function(a, b) {
        Ql.call(this, a, b)
    };
    p(En, Ql);
    En.prototype.l = function(a) {
        return a.sa().Ya()
    };
    var Fn = function() {
        this.h = this.o = this.B = this.A = this.l = this.g = ""
    };
    var Gn = function() {},
        Hn = function(a, b, c, d, e) {
            var f = {};
            if (void 0 !== a)
                if (null != b)
                    for (var g in b) {
                        var h = b[g];
                        g in Object.prototype || null != h && (f[g] = "function" === typeof h ? h(a) : a[h])
                    } else Eb(f, a);
            void 0 !== c && Eb(f, c);
            a = Wk(Uk(new Sk, f));
            0 < a.length && void 0 !== d && void 0 !== e && (e = e(a), a += "&" + d + "=" + e);
            return a
        };
    var In = function() {};
    p(In, Gn);
    In.prototype.g = function(a) {
        var b = new Fn;
        b.g = Hn(a, pn);
        b.l = Hn(a, rn);
        return b
    };
    var Jn = function(a, b, c) {
        Ul.call(this, a, b, c)
    };
    p(Jn, Ul);
    Jn.prototype.l = function() {
        var a = ya("ima.admob.getViewability"),
            b = bj(this.U, "queryid");
        "function" === typeof a && b && a(b)
    };
    Jn.prototype.ca = function() {
        return "gsv"
    };
    var Kn = function(a) {
        a = void 0 === a ? F : a;
        Ok.call(this, new Fk(a, 2))
    };
    p(Kn, Ok);
    Kn.prototype.ca = function() {
        return "gsv"
    };
    Kn.prototype.wb = function() {
        var a = Q.D();
        O.D();
        return a.h && !1
    };
    Kn.prototype.Tb = function(a, b, c) {
        return new Jn(this.g, b, c)
    };
    var Ln = function(a, b, c) {
        Ul.call(this, a, b, c)
    };
    p(Ln, Ul);
    Ln.prototype.l = function() {
        var a = this,
            b = ya("ima.bridge.getNativeViewability"),
            c = bj(this.U, "queryid");
        "function" === typeof b && c && b(c, function(d) {
            Ab(d) && a.B++;
            var e = d.opt_nativeViewVisibleBounds || {},
                f = d.opt_nativeViewHidden;
            a.g = kk(d.opt_nativeViewBounds || {});
            var g = a.h.l();
            g.g = f ? Tl.clone() : kk(e);
            a.timestamp = d.opt_nativeTime || -1;
            Q.D().g = g.g;
            d = d.opt_nativeVolume;
            void 0 !== d && (g.volume = d)
        })
    };
    Ln.prototype.ca = function() {
        return "nis"
    };
    var Mn = function(a) {
        a = void 0 === a ? F : a;
        Ok.call(this, new Fk(a, 2))
    };
    p(Mn, Ok);
    Mn.prototype.ca = function() {
        return "nis"
    };
    Mn.prototype.wb = function() {
        var a = Q.D();
        O.D();
        return a.h && !1
    };
    Mn.prototype.Tb = function(a, b, c) {
        return new Ln(this.g, b, c)
    };
    var Nn = function() {
        Fk.call(this, F, 2, "mraid");
        this.$ = 0;
        this.K = this.L = !1;
        this.F = null;
        this.h = ak(this.ka);
        this.A.g = new H(0, 0, 0, 0);
        this.ha = !1
    };
    p(Nn, Fk);
    Nn.prototype.Wb = function() {
        return null != this.h.xa
    };
    Nn.prototype.O = function() {
        var a = {};
        this.$ && (a.mraid = this.$);
        this.L && (a.mlc = 1);
        a.mtop = this.h.lg;
        this.F && (a.mse = this.F);
        this.ha && (a.msc = 1);
        a.mcp = this.h.Gb;
        return a
    };
    Nn.prototype.C = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.xa[a].apply(this.h.xa, c)
        } catch (e) {
            Mj(538, e, .01, function(f) {
                f.method = a
            })
        }
    };
    var On = function(a, b, c) {
        a.C("addEventListener", b, c)
    };
    Nn.prototype.Fc = function() {
        var a = this;
        if (this.H) return !this.qb();
        this.H = !0;
        if (2 === this.h.Gb) return this.F = "ng", Hk(this, "w"), !1;
        if (1 === this.h.Gb) return this.F = "mm", Hk(this, "w"), !1;
        Q.D().M = !0;
        this.ka.document.readyState && "complete" == this.ka.document.readyState ? Pn(this) : dk(this.ka, "load", function() {
            qj().setTimeout(Kj(292, function() {
                return Pn(a)
            }), 100)
        }, 292);
        return !0
    };
    var Pn = function(a) {
            O.D().A = !!a.C("isViewable");
            On(a, "viewableChange", Qn);
            "loading" === a.C("getState") ? On(a, "ready", Rn) : Sn(a)
        },
        Sn = function(a) {
            "string" === typeof a.h.xa.AFMA_LIDAR ? (a.L = !0, Tn(a)) : (a.h.Gb = 3, a.F = "nc", Hk(a, "w"))
        },
        Tn = function(a) {
            a.K = !1;
            var b = 1 == bj(O.D().U, "rmmt"),
                c = !!a.C("isViewable");
            (b ? !c : 1) && qj().setTimeout(Kj(524, function() {
                a.K || (Un(a), Mj(540, Error()), a.F = "mt", Hk(a, "w"))
            }), 500);
            Vn(a);
            On(a, a.h.xa.AFMA_LIDAR, Wn)
        },
        Vn = function(a) {
            var b = 1 == bj(O.D().U, "sneio"),
                c = void 0 !== a.h.xa.AFMA_LIDAR_EXP_1,
                d = void 0 !== a.h.xa.AFMA_LIDAR_EXP_2;
            (b = b && d) && (a.h.xa.AFMA_LIDAR_EXP_2 = !0);
            c && (a.h.xa.AFMA_LIDAR_EXP_1 = !b)
        },
        Un = function(a) {
            a.C("removeEventListener", a.h.xa.AFMA_LIDAR, Wn);
            a.L = !1
        };
    Nn.prototype.X = function() {
        var a = Q.D(),
            b = Xn(this, "getMaxSize");
        a.g = new H(0, b.width, b.height, 0)
    };
    Nn.prototype.Y = function() {
        Q.D().A = Xn(this, "getScreenSize")
    };
    var Xn = function(a, b) {
        if ("loading" === a.C("getState")) return new D(-1, -1);
        b = a.C(b);
        if (!b) return new D(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new D(-1, -1) : new D(a, b)
    };
    Nn.prototype.V = function() {
        Un(this);
        Fk.prototype.V.call(this)
    };
    var Rn = function() {
            try {
                var a = Nn.D();
                a.C("removeEventListener", "ready", Rn);
                Sn(a)
            } catch (b) {
                Mj(541, b)
            }
        },
        Wn = function(a, b) {
            try {
                var c = Nn.D();
                c.K = !0;
                var d = a ? new H(a.y, a.x + a.width, a.y + a.height, a.x) : new H(0, 0, 0, 0);
                var e = Tj(),
                    f = uk();
                var g = new Bk(e, f, c);
                g.g = d;
                g.volume = b;
                c.Oa(g)
            } catch (h) {
                Mj(542, h)
            }
        },
        Qn = function(a) {
            var b = O.D(),
                c = Nn.D();
            a && !b.A && (b.A = !0, c.ha = !0, c.F && Hk(c, "w", !0))
        };
    Aa(Nn);
    var Zn = function() {
        this.l = this.N = !1;
        this.g = null;
        this.o = new In;
        this.h = null;
        var a = {};
        this.K = (a.start = this.we, a.firstquartile = this.re, a.midpoint = this.te, a.thirdquartile = this.xe, a.complete = this.pe, a.pause = this.Lc, a.resume = this.Dd, a.skip = this.ve, a.viewable_impression = this.Na, a.mute = this.jb, a.unmute = this.jb, a.fullscreen = this.se, a.exitfullscreen = this.qe, a.fully_viewable_audible_half_duration_impression = this.Na, a.measurable_impression = this.Na, a.abandon = this.Lc, a.engagedview = this.Na, a.impression = this.Na, a.creativeview =
            this.Na, a.progress = this.jb, a.custom_metric_viewable = this.Na, a.bufferstart = this.Lc, a.bufferfinish = this.Dd, a);
        a = {};
        this.T = (a.overlay_resize = this.ue, a.abandon = this.rc, a.close = this.rc, a.collapse = this.rc, a.overlay_unmeasurable_impression = function(b) {
                return jm(b, "overlay_unmeasurable_impression", uk())
            }, a.overlay_viewable_immediate_impression = function(b) {
                return jm(b, "overlay_viewable_immediate_impression", uk())
            }, a.overlay_unviewable_impression = function(b) {
                return jm(b, "overlay_unviewable_impression", uk())
            },
            a.overlay_viewable_end_of_session_impression = function(b) {
                return jm(b, "overlay_viewable_end_of_session_impression", uk())
            }, a);
        O.D().g = 3;
        Yn(this)
    };
    Zn.prototype.B = function(a) {
        ul(a, !1);
        Bm(a)
    };
    Zn.prototype.F = function() {};
    var $n = function(a, b, c, d) {
        a = a.C(null, d, !0, b);
        a.A = c;
        Cm([a]);
        return a
    };
    Zn.prototype.C = function(a, b, c, d) {
        var e = this;
        this.h || (this.h = this.fd());
        b = c ? b : -1;
        a = null == this.h || this.l ? new Xl(F, a, b, 7) : new Xl(F, a, b, 7, new Ql("measurable_impression", this.h), ao(this));
        a.ia = d;
        $i(a.U);
        aj(a.U, "queryid", a.ia);
        a.Mc("");
        zl(a, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.I.apply(e, ia(g))
        }, function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h - 0] = arguments[h];
            return e.O.apply(e, ia(g))
        });
        (d = Em.D().g) && vl(a, d);
        a.ra.Qa && Sm.D();
        return a
    };
    var bo = function(a, b, c) {
            Ji(b);
            var d = a.h;
            y(b, function(e) {
                var f = Ta(e.g, function(g) {
                    var h = An(g);
                    if (null == h) g = null;
                    else if (g = new zn, null != h.visible && (g.g = h.visible / 100), null != h.audible && (g.h = 1 == h.audible), null != h.time) {
                        var l = "mtos" == h.timetype ? "mtos" : "tos",
                            m = h.time,
                            n = m.length - 1;
                        m = 0 <= n && m.indexOf("%", n) == n ? "%" : "ms";
                        h = parseInt(h.time, 10);
                        "%" == m && (h /= 100);
                        "ms" == m ? (g.l = h, g.o = -1) : (g.l = -1, g.o = h);
                        g.A = void 0 === l ? "tos" : l
                    }
                    return g
                });
                Va(f, function(g) {
                    return null == g
                }) || cm(c, new Cn(e.id, e.event, f, d))
            })
        },
        ao = function(a) {
            a =
                a.h;
            return [new En("viewable_impression", a), new Dn(a)]
        },
        co = function() {
            var a = [];
            Q.D();
            var b = O.D();
            a.push(Rm.D());
            bj(b.U, "mvp_lv") && a.push(Nn.D());
            b = [new Kn, new Mn];
            b.push(new Hm(a));
            b.push(new Pm(F));
            return b
        },
        fo = function(a) {
            if (!a.N) {
                a.N = !0;
                try {
                    var b = Tj(),
                        c = O.D(),
                        d = Q.D();
                    Pj = b;
                    c.o = 79463069;
                    "o" !== a.g && (cn = Wf(F).ka);
                    if (rj()) {
                        Um.g.Yc = 0;
                        Um.g.tc = Tj() - b;
                        var e = co(),
                            f = Em.D();
                        f.h = e;
                        Fm(f, function() {
                            eo()
                        }) ? Um.done || (an(), Ik(f.g.g, a), Wm()) : d.l ? eo() : Wm()
                    } else en = !0
                } catch (g) {
                    throw ym.reset(), g;
                }
            }
        },
        go = function(a) {
            Um.l.cancel();
            dn = a;
            Um.done = !0
        },
        ho = function(a) {
            if (a.g) return a.g;
            var b = Em.D().g;
            if (b) switch (b.ca()) {
                case "nis":
                    a.g = "n";
                    break;
                case "gsv":
                    a.g = "m"
            }
            a.g || (a.g = "h");
            return a.g
        },
        io = function(a, b, c) {
            if (null == a.h) return b.kb |= 4, !1;
            a = a.h.report(c, b);
            b.kb |= a;
            return 0 == a
        };
    Zn.prototype.fb = function(a) {
        switch (a.Ga()) {
            case 0:
                if (a = Em.D().g) a = a.g, $a(a.B, this), a.M && this.Aa() && Lk(a);
                eo();
                break;
            case 2:
                Wm()
        }
    };
    Zn.prototype.Oa = function() {};
    Zn.prototype.Aa = function() {
        return !1
    };
    var eo = function() {
        var a = [new Pm(F)],
            b = Em.D();
        b.h = a;
        Fm(b, function() {
            go("i")
        }) ? Um.done || (an(), Wm()) : go("i")
    };
    Zn.prototype.O = function(a, b) {
        a.Xa = !0;
        switch (a.va()) {
            case 1:
                jo(this, a, b);
                break;
            case 2:
                this.Oc(a)
        }
        this.Pc(a)
    };
    var jo = function(a, b, c) {
        if (!b.pa) {
            var d = jm(b, "start", uk());
            a = a.o.g(d).g;
            var e = {
                id: "lidarv"
            };
            e.r = c;
            e.v = "865v";
            re(a, function(f, g) {
                return e[f] = "mtos" == f || "tos" == f ? g : encodeURIComponent(g)
            });
            c = fn();
            re(c, function(f, g) {
                return e[f] = encodeURIComponent(g)
            });
            c = "//pagead2.googlesyndication.com/pagead/gen_204?" + Wk(Uk(new Sk, e));
            $k(c);
            b.pa = !0
        }
    };
    k = Zn.prototype;
    k.we = function(a) {
        gm(a, 0);
        return jm(a, "start", uk())
    };
    k.jb = function(a, b, c) {
        Xm(Um, [a], !uk());
        return this.Na(a, b, c)
    };
    k.Na = function(a, b, c) {
        return jm(a, c, uk())
    };
    k.re = function(a) {
        return ko(a, "firstquartile", 1)
    };
    k.te = function(a) {
        a.aa = !0;
        return ko(a, "midpoint", 2)
    };
    k.xe = function(a) {
        return ko(a, "thirdquartile", 3)
    };
    k.pe = function(a) {
        var b = ko(a, "complete", 4);
        0 != a.ea && (a.ea = 3);
        return b
    };
    var ko = function(a, b, c) {
        Xm(Um, [a], !uk());
        gm(a, c);
        4 != c && fm(a.N, c, a.Ib);
        return jm(a, b, uk())
    };
    k = Zn.prototype;
    k.Dd = function(a, b, c) {
        b = uk();
        if (2 == a.ea && !b) {
            var d = Tj();
            a.sa().F = d
        }
        Xm(Um, [a], !b);
        2 == a.ea && (a.ea = 1);
        return jm(a, c, b)
    };
    k.ve = function(a, b) {
        b = this.jb(a, b || {}, "skip");
        0 != a.ea && (a.ea = 3);
        return b
    };
    k.se = function(a, b) {
        ul(a, !0);
        return this.jb(a, b || {}, "fullscreen")
    };
    k.qe = function(a, b) {
        ul(a, !1);
        return this.jb(a, b || {}, "exitfullscreen")
    };
    k.Lc = function(a, b, c) {
        b = a.sa();
        var d = Tj();
        b.T = Ol(b, d, 1 != a.ea);
        Xm(Um, [a], !uk());
        1 == a.ea && (a.ea = 2);
        return jm(a, c, uk())
    };
    k.ue = function(a) {
        Xm(Um, [a], !uk());
        return a.h()
    };
    k.rc = function(a) {
        Xm(Um, [a], !uk());
        this.Cd(a);
        0 != a.ea && (a.ea = 3);
        return a.h()
    };
    var Yn = function(a) {
            bn(function() {
                var b = lo();
                null != a.g && (b.sdk = a.g);
                var c = Em.D();
                null != c.g && (b.avms = c.g.ca());
                return b
            })
        },
        mo = function(a, b, c, d) {
            var e = wm(ym, c);
            null !== e && e.ia !== b && (a.B(e), e = null);
            e || (b = a.C(c, Tj(), !1, b), 0 == ym.h.length && (O.D().o = 79463069), Dm([b]), e = b, e.A = ho(a), d && (e.Ra = d));
            return e
        };
    Zn.prototype.I = function() {};
    var oo = function(a, b) {
        b.F = 0;
        for (var c in Vj) null == a[c] && (b.F |= Vj[c]);
        no(a, "currentTime");
        no(a, "duration")
    };
    k = Zn.prototype;
    k.Oc = function() {};
    k.Cd = function() {};
    k.ud = function() {};
    k.Pc = function() {};
    k.fd = function() {};
    var no = function(a, b) {
            var c = a[b];
            void 0 !== c && 0 < c && (a[b] = Math.floor(1E3 * c))
        },
        lo = function() {
            var a = Q.D(),
                b = {};
            return b.sv = "865", b["if"] = a.l ? "1" : "0", b.nas = String(ym.g.length), b
        };
    var po = u(),
        qo = !1,
        ro = !1,
        so = !1,
        R = function(a) {
            return !a || "function" !== typeof a || 0 > String(Function.prototype.toString).indexOf("[native code]") ? !1 : 0 <= String(a).indexOf("[native code]") && !0 || !1
        },
        to = function(a) {
            return !!(1 << a & po)
        },
        uo = [function(a) {
                return !(!a.chrome || !a.chrome.webstore)
            }, function(a) {
                return !!a.document.documentMode
            }, function(a) {
                return !!a.document.fonts.ready
            }, function() {
                return to(0)
            }, function(a) {
                return !!a.ActiveXObject
            }, function(a) {
                return !!a.chrome
            }, function(a) {
                return !!a.navigator.serviceWorker
            },
            function(a) {
                return !!a.opera
            },
            function(a) {
                return !!a.sidebar
            },
            function() {
                return !+"\v1"
            },
            function() {
                return to(1)
            },
            function(a) {
                return !a.ActiveXObject
            },
            function(a) {
                return "-ms-ime-align" in a.document.documentElement.style
            },
            function(a) {
                return "-ms-scroll-limit" in a.document.documentElement.style
            },
            function(a) {
                return "-webkit-font-feature-settings" in a.document.body.style
            },
            function() {
                return to(2)
            },
            function(a) {
                return "ActiveXObject" in a
            },
            function(a) {
                return "MozAppearance" in a.document.documentElement.style
            },
            function(a) {
                return "_phantom" in
                    a
            },
            function(a) {
                return "callPhantom" in a
            },
            function(a) {
                return "content" in a.document.createElement("template")
            },
            function(a) {
                return "getEntriesByType" in a.performance
            },
            function() {
                return to(3)
            },
            function(a) {
                return "image-rendering" in a.document.body.style
            },
            function(a) {
                return "object-fit" in a.document.body.style
            },
            function(a) {
                return "open" in a.document.createElement("details")
            },
            function(a) {
                return "orientation" in a.screen
            },
            function(a) {
                return "performance" in a
            },
            function(a) {
                return "shape-image-threshold" in a.document.body.style
            },
            function() {
                return to(4)
            },
            function(a) {
                return "srcset" in a.document.createElement("img")
            },
            function() {
                return ro
            },
            function() {
                return so
            },
            function() {
                return to(5)
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "-webkit-min-content";
                a.style.width = "min-content";
                return "1px" != a.style.width
            },
            function(a) {
                a = a.document.createElement("div");
                a.style.width = "1px";
                a.style.width = "calc(1px - 1px)";
                a.style.width = "-webkit-calc(1px - 1px)";
                return "1px" != a.style.width
            },
            function() {
                var a = !1;
                eval('var DummyFunction1 = function(x){ "use strict"; var a = 12; b = a + x*35; }');
                try {
                    DummyFunction1()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                var a = !1;
                try {
                    DummyFunction2()
                } catch (b) {
                    a = !0
                }
                return a
            },
            function() {
                return !1
            },
            function() {
                return to(6)
            },
            function(a) {
                var b = a.document.createElement("canvas");
                b.width = b.height = 1;
                b = b.getContext("2d");
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(0,255,255)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.fillRect(0, 0, 1, 1);
                b.fill();
                b = b.getImageData(0, 0, 1, 1).data;
                return b[0] == b[2] && b[1] == b[3] || R(a.navigator.vibrate)
            },
            function(a) {
                a =
                    a.document.createElement("canvas");
                a.width = a.height = 1;
                a = a.getContext("2d");
                a.globalCompositeOperation = "multiply";
                a.fillStyle = "rgb(0,255,255)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a.fillStyle = "rgb(255,255,0)";
                a.fillRect(0, 0, 1, 1);
                a.fill();
                a = a.getImageData(0, 0, 1, 1).data;
                return a[0] == a[2] && a[1] == a[3]
            },
            function(a) {
                return R(a.document.createElement("div").matches)
            },
            function(a) {
                a = a.document.createElement("input");
                a.setAttribute("type", "range");
                return "text" !== a.type
            },
            function(a) {
                return a.CSS.supports("image-rendering",
                    "pixelated")
            },
            function(a) {
                return a.CSS.supports("object-fit", "contain")
            },
            function() {
                return to(7)
            },
            function(a) {
                return a.CSS.supports("object-fit", "inherit")
            },
            function(a) {
                return a.CSS.supports("shape-image-threshold", "0.9")
            },
            function(a) {
                return a.CSS.supports("word-break", "keep-all")
            },
            function() {
                return eval("1 == [for (item of [1,2,3]) item][0]")
            },
            function(a) {
                return R(a.CSS.supports)
            },
            function() {
                return R(Intl.Collator)
            },
            function(a) {
                return R(a.document.createElement("dialog").show)
            },
            function() {
                return to(8)
            },
            function(a) {
                return R(a.document.createElement("div").animate([{
                    transform: "scale(1)",
                    easing: "ease-in"
                }, {
                    transform: "scale(1.3)",
                    easing: "ease-in"
                }], {
                    duration: 1300,
                    iterations: 1
                }).reverse)
            },
            function(a) {
                return R(a.document.createElement("div").animate)
            },
            function(a) {
                return R(a.document.documentElement.webkitRequestFullScreen)
            },
            function(a) {
                return R(a.navigator.getBattery)
            },
            function(a) {
                return R(a.navigator.permissions.query)
            },
            function() {
                return !1
            },
            function() {
                return to(9)
            },
            function() {
                return R(webkitRequestAnimationFrame)
            },
            function(a) {
                return R(a.BroadcastChannel.call)
            },
            function(a) {
                return R(a.FontFace)
            },
            function(a) {
                return R(a.Gamepad)
            },
            function() {
                return to(10)
            },
            function(a) {
                return R(a.MutationEvent)
            },
            function(a) {
                return R(a.MutationObserver)
            },
            function(a) {
                return R(a.crypto.getRandomValues)
            },
            function(a) {
                return R(a.document.body.createShadowRoot)
            },
            function(a) {
                return R(a.document.body.webkitCreateShadowRoot)
            },
            function(a) {
                return R(a.fetch)
            },
            function() {
                return to(11)
            },
            function(a) {
                return R(a.navigator.serviceWorker.register)
            },
            function(a) {
                return R(a.navigator.webkitGetGamepads)
            },
            function(a) {
                return R(a.speechSynthesis.speak)
            },
            function(a) {
                return R(a.webkitRTCPeerConnection)
            },
            function(a) {
                return a.CSS.supports("--fake-var", "0")
            },
            function() {
                return to(12)
            },
            function(a) {
                return a.CSS.supports("cursor", "grab")
            },
            function(a) {
                return a.CSS.supports("cursor", "zoom-in")
            },
            function(a) {
                return a.CSS.supports("image-orientation", "270deg")
            },
            function() {
                return to(13)
            },
            function(a) {
                return a.CSS.supports("position", "sticky")
            },
            function(a) {
                return void 0 ===
                    a.document.createElement("style").scoped
            },
            function(a) {
                return a.performance.getEntriesByType("resource") instanceof Array
            },
            function() {
                return "undefined" == typeof InstallTrigger
            },
            function() {
                return "object" == typeof(new Intl.Collator).resolvedOptions()
            },
            function(a) {
                return "boolean" == typeof a.navigator.onLine
            },
            function() {
                return to(14)
            },
            function(a) {
                return "undefined" == typeof a.navigator.Xh
            },
            function(a) {
                return "number" == typeof a.performance.now()
            },
            function() {
                return 0 == (new Uint16Array(1))[0]
            },
            function(a) {
                return -1 ==
                    a.ActiveXObject.toString().indexOf("native")
            },
            function(a) {
                return -1 == Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor")
            }
        ],
        vo = [function(a) {
                a = a.document.createElement("div");
                var b = null,
                    c = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                try {
                    a.style.behavior = "url(#default#clientcaps)"
                } catch (e) {}
                for (var d = 0; d < c.length; d++) {
                    try {
                        b = a.getComponentVersion(c[d], "componentid").replace(/,/g, ".")
                    } catch (e) {}
                    if (b) return b.split(".")[0]
                }
                return !1
            },
            function() {
                return (new Date).getTimezoneOffset()
            },
            function(a) {
                return (a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth) / (a.innerHeight || a.document.documentElement.clientHeight || a.document.body.clientHeight)
            },
            function(a) {
                return (a.outerWidth || a.document && a.document.body && a.document.body.offsetWidth) / (a.outerHeight || a.document && a.document.body && a.document.body.offsetHeight)
            },
            function(a) {
                return a.screen.availWidth / a.screen.availHeight
            },
            function(a) {
                return a.screen.width /
                    a.screen.height
            }
        ],
        wo = [function(a) {
            return a.navigator.userAgent
        }, function(a) {
            return a.navigator.platform
        }, function(a) {
            return a.navigator.vendor
        }],
        yo = function() {
            try {
                xo()
            } catch (d) {}
            var a = "a=1&b=" + po + "&",
                b = [],
                c = 99;
            y(uo, function(d, e) {
                var f = !1;
                try {
                    f = d(F)
                } catch (g) {}
                b[e / 32 >>> 0] |= f << e % 32
            });
            y(b, function(d, e) {
                a += String.fromCharCode(c + e) + "=" + (d >>> 0).toString(16) + "&"
            });
            c = 105;
            y(vo, function(d) {
                var e = "false";
                try {
                    e = d(F)
                } catch (f) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            y(wo, function(d) {
                var e = "";
                try {
                    var f = d(F);
                    d = [];
                    for (var g = 0, h = 0; h < f.length; h++) {
                        var l = f.charCodeAt(h);
                        255 < l && (d[g++] = l & 255, l >>= 8);
                        d[g++] = l
                    }
                    e = yd(d, 3)
                } catch (m) {}
                a += String.fromCharCode(c++) + "=" + e + "&"
            });
            return a.slice(0, -1)
        },
        xo = function() {
            if (!qo) {
                var a = function() {
                    ro = !0;
                    F.document.removeEventListener("webdriver-evaluate", a, !0)
                };
                F.document.addEventListener("webdriver-evaluate", a, !0);
                var b = function() {
                    so = !0;
                    F.document.removeEventListener("webdriver-evaluate-response", b, !0)
                };
                F.document.addEventListener("webdriver-evaluate-response", b, !0);
                qo = !0
            }
        };
    var zo = function() {
        this.h = 64;
        this.g = Array(4);
        this.B = Array(this.h);
        this.A = this.o = 0;
        this.reset()
    };
    x(zo, mi);
    zo.prototype.reset = function() {
        this.g[0] = 1732584193;
        this.g[1] = 4023233417;
        this.g[2] = 2562383102;
        this.g[3] = 271733878;
        this.A = this.o = 0
    };
    var Ao = function(a, b, c) {
        c || (c = 0);
        var d = Array(16);
        if ("string" === typeof b)
            for (var e = 0; 16 > e; ++e) d[e] = b.charCodeAt(c++) | b.charCodeAt(c++) << 8 | b.charCodeAt(c++) << 16 | b.charCodeAt(c++) << 24;
        else
            for (e = 0; 16 > e; ++e) d[e] = b[c++] | b[c++] << 8 | b[c++] << 16 | b[c++] << 24;
        b = a.g[0];
        c = a.g[1];
        e = a.g[2];
        var f = a.g[3];
        var g = b + (f ^ c & (e ^ f)) + d[0] + 3614090360 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[1] + 3905402710 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[2] + 606105819 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>>
            15);
        g = c + (b ^ e & (f ^ b)) + d[3] + 3250441966 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[4] + 4118548399 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[5] + 1200080426 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[6] + 2821735955 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[7] + 4249261313 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[8] + 1770035416 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[9] + 2336552879 & 4294967295;
        f = b + (g << 12 & 4294967295 |
            g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[10] + 4294925233 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[11] + 2304563134 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (f ^ c & (e ^ f)) + d[12] + 1804603682 & 4294967295;
        b = c + (g << 7 & 4294967295 | g >>> 25);
        g = f + (e ^ b & (c ^ e)) + d[13] + 4254626195 & 4294967295;
        f = b + (g << 12 & 4294967295 | g >>> 20);
        g = e + (c ^ f & (b ^ c)) + d[14] + 2792965006 & 4294967295;
        e = f + (g << 17 & 4294967295 | g >>> 15);
        g = c + (b ^ e & (f ^ b)) + d[15] + 1236535329 & 4294967295;
        c = e + (g << 22 & 4294967295 | g >>> 10);
        g = b + (e ^ f & (c ^ e)) + d[1] + 4129170786 & 4294967295;
        b = c + (g <<
            5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[6] + 3225465664 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[11] + 643717713 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[0] + 3921069994 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[5] + 3593408605 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[10] + 38016083 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[15] + 3634488961 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[4] + 3889429448 & 4294967295;
        c =
            e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[9] + 568446438 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[14] + 3275163606 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[3] + 4107603335 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[8] + 1163531501 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (e ^ f & (c ^ e)) + d[13] + 2850285829 & 4294967295;
        b = c + (g << 5 & 4294967295 | g >>> 27);
        g = f + (c ^ e & (b ^ c)) + d[2] + 4243563512 & 4294967295;
        f = b + (g << 9 & 4294967295 | g >>> 23);
        g = e + (b ^ c & (f ^ b)) + d[7] + 1735328473 & 4294967295;
        e = f + (g << 14 & 4294967295 | g >>> 18);
        g = c + (f ^ b & (e ^ f)) + d[12] + 2368359562 & 4294967295;
        c = e + (g << 20 & 4294967295 | g >>> 12);
        g = b + (c ^ e ^ f) + d[5] + 4294588738 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[8] + 2272392833 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[11] + 1839030562 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[14] + 4259657740 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[1] + 2763975236 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[4] + 1272893353 & 4294967295;
        f = b + (g << 11 & 4294967295 |
            g >>> 21);
        g = e + (f ^ b ^ c) + d[7] + 4139469664 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[10] + 3200236656 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[13] + 681279174 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[0] + 3936430074 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[3] + 3572445317 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[6] + 76029189 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (c ^ e ^ f) + d[9] + 3654602809 & 4294967295;
        b = c + (g << 4 & 4294967295 | g >>> 28);
        g = f + (b ^ c ^ e) + d[12] +
            3873151461 & 4294967295;
        f = b + (g << 11 & 4294967295 | g >>> 21);
        g = e + (f ^ b ^ c) + d[15] + 530742520 & 4294967295;
        e = f + (g << 16 & 4294967295 | g >>> 16);
        g = c + (e ^ f ^ b) + d[2] + 3299628645 & 4294967295;
        c = e + (g << 23 & 4294967295 | g >>> 9);
        g = b + (e ^ (c | ~f)) + d[0] + 4096336452 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[7] + 1126891415 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[14] + 2878612391 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[5] + 4237533241 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[12] + 1700485571 &
            4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[3] + 2399980690 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[10] + 4293915773 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[1] + 2240044497 & 4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[8] + 1873313359 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[15] + 4264355552 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[6] + 2734768916 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[13] + 1309151649 &
            4294967295;
        c = e + (g << 21 & 4294967295 | g >>> 11);
        g = b + (e ^ (c | ~f)) + d[4] + 4149444226 & 4294967295;
        b = c + (g << 6 & 4294967295 | g >>> 26);
        g = f + (c ^ (b | ~e)) + d[11] + 3174756917 & 4294967295;
        f = b + (g << 10 & 4294967295 | g >>> 22);
        g = e + (b ^ (f | ~c)) + d[2] + 718787259 & 4294967295;
        e = f + (g << 15 & 4294967295 | g >>> 17);
        g = c + (f ^ (e | ~b)) + d[9] + 3951481745 & 4294967295;
        a.g[0] = a.g[0] + b & 4294967295;
        a.g[1] = a.g[1] + (e + (g << 21 & 4294967295 | g >>> 11)) & 4294967295;
        a.g[2] = a.g[2] + e & 4294967295;
        a.g[3] = a.g[3] + f & 4294967295
    };
    zo.prototype.l = function(a, b) {
        void 0 === b && (b = a.length);
        for (var c = b - this.h, d = this.B, e = this.o, f = 0; f < b;) {
            if (0 == e)
                for (; f <= c;) Ao(this, a, f), f += this.h;
            if ("string" === typeof a)
                for (; f < b;) {
                    if (d[e++] = a.charCodeAt(f++), e == this.h) {
                        Ao(this, d);
                        e = 0;
                        break
                    }
                } else
                    for (; f < b;)
                        if (d[e++] = a[f++], e == this.h) {
                            Ao(this, d);
                            e = 0;
                            break
                        }
        }
        this.o = e;
        this.A += b
    };
    zo.prototype.C = function() {
        var a = Array((56 > this.o ? this.h : 2 * this.h) - this.o);
        a[0] = 128;
        for (var b = 1; b < a.length - 8; ++b) a[b] = 0;
        var c = 8 * this.A;
        for (b = a.length - 8; b < a.length; ++b) a[b] = c & 255, c /= 256;
        this.l(a);
        a = Array(16);
        for (b = c = 0; 4 > b; ++b)
            for (var d = 0; 32 > d; d += 8) a[c++] = this.g[b] >>> d & 255;
        return a
    };
    var Bo = function() {
        this.h = null
    };
    p(Bo, In);
    Bo.prototype.g = function(a) {
        var b = In.prototype.g.call(this, a);
        var c = po = u();
        var d = to(5);
        c = (ro ? !d : d) ? c | 2 : c & -3;
        d = to(2);
        c = (so ? !d : d) ? c | 8 : c & -9;
        c = {
            s1: (c >>> 0).toString(16)
        };
        this.h || (this.h = yo());
        b.A = this.h;
        b.B = Hn(a, qn, c, "h", Co("kArwaWEsTs"));
        b.o = Hn(a, sn, {}, "h", Co("b96YPMzfnx"));
        b.h = Hn(a, tn, {}, "h", Co("yb8Wev6QDg"));
        return b
    };
    var Co = function(a) {
        return function(b) {
            var c = new zo;
            c.l(b + a);
            return ib(c.C()).slice(-8)
        }
    };
    var Do = function(a, b) {
        this.h = a;
        this.l = b
    };
    Do.prototype.report = function(a, b) {
        var c = this.g(b);
        if ("function" === typeof c) {
            var d = {};
            d = (d.sv = "865", d.cb = "j", d.e = Eo(a), d);
            var e = jm(b, a, uk());
            Eb(d, e);
            b.td[a] = e;
            d = 2 == b.va() ? Yk(d).join("&") : this.l.g(d).g;
            try {
                return c(b.ia, d, a), 0
            } catch (f) {
                return 2
            }
        } else return 1
    };
    var Eo = function(a) {
        var b = wn(a) ? "custom_metric_viewable" : a;
        a = zb(function(c) {
            return c == b
        });
        return Zj[a]
    };
    Do.prototype.g = function() {
        return ya(this.h)
    };
    var Fo = function(a, b, c) {
        Do.call(this, a, b);
        this.o = c
    };
    p(Fo, Do);
    Fo.prototype.g = function(a) {
        if (!a.Ra) return Do.prototype.g.call(this, a);
        if (this.o[a.Ra]) return function() {};
        Mj(393, Error());
        return null
    };
    var Go = function() {
        Zn.call(this);
        this.M = void 0;
        this.H = null;
        this.J = !1;
        this.A = {};
        this.L = 0;
        this.o = new Bo
    };
    p(Go, Zn);
    Go.prototype.F = function(a, b) {
        var c = this,
            d = Em.D();
        if (null != d.g) switch (d.g.ca()) {
            case "nis":
                var e = Ho(this, a, b);
                break;
            case "gsv":
                e = Io(this, a, b);
                break;
            case "exc":
                e = Jo(this, a)
        }
        e || (b.opt_overlayAdElement ? e = void 0 : b.opt_adElement && (e = mo(this, a, b.opt_adElement, b.opt_osdId)));
        e && 1 == e.va() && (e.L == za && (e.L = function(f) {
            return c.ud(f)
        }), Ko(this, e, b));
        return e
    };
    var Ko = function(a, b, c) {
        c = c.opt_configurable_tracking_events;
        null != a.h && Array.isArray(c) && bo(a, c, b)
    };
    Go.prototype.ud = function(a) {
        a.h = 0;
        a.O = 0;
        if ("h" == a.A || "n" == a.A) {
            if (O.D().l) var b = ya("ima.bridge.getVideoMetadata");
            else if (a.Ra && Lo(this)) {
                var c = this.A[a.Ra];
                c ? b = function(e) {
                    return Mo(c, e)
                } : null !== c && Mj(379, Error())
            } else b = ya("ima.common.getVideoMetadata");
            if ("function" === typeof b) try {
                var d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2
        } else if ("b" == a.A)
            if (b = ya("ytads.bulleit.getVideoMetadata"), "function" === typeof b) try {
                d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else if ("ml" == a.A)
            if (b = ya("ima.common.getVideoMetadata"),
                "function" === typeof b) try {
                d = b(a.ia)
            } catch (e) {
                a.h |= 4
            } else a.h |= 2;
            else a.h |= 1;
        a.h || (void 0 === d ? a.h |= 8 : null === d ? a.h |= 16 : Ab(d) ? a.h |= 32 : null != d.errorCode && (a.O = d.errorCode, a.h |= 64));
        null == d && (d = {});
        oo(d, a);
        lk(d.volume) && lk(this.M) && (d.volume *= this.M);
        return d
    };
    var Io = function(a, b, c) {
            var d = vm(ym, b);
            d || (d = c.opt_nativeTime || -1, d = $n(a, b, ho(a), d), c.opt_osdId && (d.Ra = c.opt_osdId));
            return d
        },
        Ho = function(a, b, c) {
            var d = vm(ym, b);
            d || (d = $n(a, b, "n", c.opt_nativeTime || -1));
            return d
        },
        Jo = function(a, b) {
            var c = vm(ym, b);
            c || (c = $n(a, b, "h", -1));
            return c
        };
    Go.prototype.fd = function() {
        if (Lo(this)) return new Fo("ima.common.triggerExternalActivityEvent", this.o, this.A);
        var a = No(this);
        return null != a ? new Do(a, this.o) : null
    };
    var No = function(a) {
        var b = O.D();
        switch (ho(a)) {
            case "b":
                return "ytads.bulleit.triggerExternalActivityEvent";
            case "n":
                return "ima.bridge.triggerExternalActivityEvent";
            case "h":
                if (b.l) return "ima.bridge.triggerExternalActivityEvent";
            case "m":
            case "ml":
                return "ima.common.triggerExternalActivityEvent"
        }
        return null
    };
    Go.prototype.Oc = function(a) {
        !a.g && a.Xa && io(this, a, "overlay_unmeasurable_impression") && (a.g = !0)
    };
    Go.prototype.Cd = function(a) {
        a.Ed && (a.Ya() ? io(this, a, "overlay_viewable_end_of_session_impression") : io(this, a, "overlay_unviewable_impression"), a.Ed = !1)
    };
    var Oo = function(a, b, c, d) {
        c = void 0 === c ? {} : c;
        var e = {};
        Eb(e, {
            opt_adElement: void 0,
            opt_fullscreen: void 0
        }, c);
        if (e.opt_bounds) return a.o.g(vn("ol", d));
        if (void 0 !== d)
            if (void 0 !== un(d))
                if (en) b = vn("ue", d);
                else if (fo(a), "i" == dn) b = vn("i", d), b["if"] = 0;
        else if (b = a.F(b, e)) {
            b: {
                "i" == dn && (b.Xa = !0, a.Pc(b));c = e.opt_fullscreen;void 0 !== c && ul(b, !!c);
                var f;
                if (c = !Q.D().h && !qk()) qj(),
                c = 0 === bg(Ee);
                if (f = c) {
                    switch (b.va()) {
                        case 1:
                            jo(a, b, "pv");
                            break;
                        case 2:
                            a.Oc(b)
                    }
                    go("pv")
                }
                c = d.toLowerCase();
                if (!f && Za(Wj, c) && 0 == b.ea) {
                    "i" != dn &&
                        (Um.done = !1);
                    f = void 0 !== e ? e.opt_nativeTime : void 0;
                    Rj = f = "number" === typeof f ? f : Tj();
                    b.Hb = !0;
                    var g = uk();
                    b.ea = 1;
                    b.Ba = {};
                    b.Ba.firstquartile = !1;
                    b.Ba.midpoint = !1;
                    b.Ba.thirdquartile = !1;
                    b.Ba.complete = !1;
                    b.Ba.pause = !1;
                    b.Ba.skip = !1;
                    b.Ba.viewable_impression = !1;
                    b.jc = 0;
                    g || (b.sa().F = f);
                    Xm(Um, [b], !g)
                }
                0 != b.ea && Za(Xj, c) && (b.Xa || a.l || b.Hd());
                (f = b.ab[c]) && Hl(b.fa, f);
                switch (b.va()) {
                    case 1:
                        var h = wn(c) ? a.K.custom_metric_viewable : a.K[c];
                        break;
                    case 2:
                        h = a.T[c]
                }
                if (h && (d = h.call(a, b, e, d), void 0 !== d)) {
                    e = vn(void 0, c);
                    Eb(e, d);
                    d =
                        e;
                    break b
                }
                d = void 0
            }
            3 == b.ea && a.B(b);b = d
        }
        else b = vn("nf", d);
        else b = void 0;
        else en ? b = vn("ue") : (b = a.F(b, e)) ? (d = vn(), Eb(d, im(b, !0, !1, !1)), b = d) : b = vn("nf");
        return "string" === typeof b ? a.o.g(void 0) : a.o.g(b)
    };
    Go.prototype.I = function(a) {
        this.l && 1 == a.va() && Po(this, a)
    };
    Go.prototype.Pc = function(a) {
        this.l && 1 == a.va() && Po(this, a)
    };
    var Po = function(a, b) {
            var c;
            if (b.Ra && Lo(a)) {
                var d = a.A[b.Ra];
                d ? c = function(f, g) {
                    Qo(d, f, g)
                } : null !== d && Mj(379, Error())
            } else c = ya("ima.common.triggerViewabilityMeasurementUpdate");
            if ("function" === typeof c) {
                var e = dm(b);
                e.nativeVolume = a.M;
                c(b.ia, e)
            }
        },
        Ro = function(a, b, c) {
            a.A[b] = c
        },
        Lo = function(a) {
            return O.D().l || "h" != ho(a) && "m" != ho(a) ? !1 : 0 != a.L
        };
    Go.prototype.C = function(a, b, c, d) {
        a = Zn.prototype.C.call(this, a, b, c, d);
        this.J && (b = this.H, null == a.o && (a.o = new Cl), b.g[a.ia] = a.o, a.o.A = lm);
        return a
    };
    Go.prototype.B = function(a) {
        a && 1 == a.va() && this.J && delete this.H.g[a.ia];
        return Zn.prototype.B.call(this, a)
    };
    var So = function(a) {
            var b = {};
            return b.viewability = a.g, b.googleViewability = a.l, b.moatInit = a.A, b.moatViewability = a.B, b.integralAdsViewability = a.o, b.doubleVerifyViewability = a.h, b
        },
        To = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a = Oo(Go.D(), b, c, a);
            return So(a)
        };
    Aa(Go);
    var Uo = new Fn;
    Uo.A = "stopped";
    Uo.g = "stopped";
    Uo.l = "stopped";
    Uo.B = "stopped";
    Uo.o = "stopped";
    Uo.h = "stopped";
    Object.freeze(Uo);
    var Vo = Kj(193, To, void 0, lo);
    r("Goog_AdSense_Lidar_sendVastEvent", Vo, void 0);
    var Wo = Kj(194, function(a, b) {
        b = void 0 === b ? {} : b;
        a = Oo(Go.D(), a, b);
        return So(a)
    });
    r("Goog_AdSense_Lidar_getViewability", Wo, void 0);
    var Xo = Kj(195, function() {
        return tj()
    });
    r("Goog_AdSense_Lidar_getUrlSignalsArray", Xo, void 0);
    var Yo = Kj(196, function() {
        return sg(tj())
    });
    r("Goog_AdSense_Lidar_getUrlSignalsList", Yo, void 0);
    var Zo = function(a, b) {
        this.h = {};
        this.g = [];
        this.o = this.l = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Zo)
                for (c = a.za(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    Zo.prototype.ua = function() {
        $o(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.h[this.g[b]]);
        return a
    };
    Zo.prototype.za = function() {
        $o(this);
        return this.g.concat()
    };
    Zo.prototype.isEmpty = function() {
        return 0 == this.l
    };
    Zo.prototype.clear = function() {
        this.h = {};
        this.o = this.l = this.g.length = 0
    };
    var bp = function(a, b) {
            ap(a.h, b) && (delete a.h[b], a.l--, a.o++, a.g.length > 2 * a.l && $o(a))
        },
        $o = function(a) {
            if (a.l != a.g.length) {
                for (var b = 0, c = 0; b < a.g.length;) {
                    var d = a.g[b];
                    ap(a.h, d) && (a.g[c++] = d);
                    b++
                }
                a.g.length = c
            }
            if (a.l != a.g.length) {
                var e = {};
                for (c = b = 0; b < a.g.length;) d = a.g[b], ap(e, d) || (a.g[c++] = d, e[d] = 1), b++;
                a.g.length = c
            }
        };
    k = Zo.prototype;
    k.get = function(a, b) {
        return ap(this.h, a) ? this.h[a] : b
    };
    k.set = function(a, b) {
        ap(this.h, a) || (this.l++, this.g.push(a), this.o++);
        this.h[a] = b
    };
    k.forEach = function(a, b) {
        for (var c = this.za(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    k.clone = function() {
        return new Zo(this)
    };
    k.ce = function(a) {
        $o(this);
        var b = 0,
            c = this.o,
            d = this,
            e = new Bl;
        e.next = function() {
            if (c != d.o) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) throw Al;
            var f = d.g[b++];
            return a ? f : d.h[f]
        };
        return e
    };
    var ap = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var cp = function(a) {
            if (a.ua && "function" == typeof a.ua) return a.ua();
            if ("string" === typeof a) return a.split("");
            if (Ca(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return tb(a)
        },
        dp = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (Ca(a) || "string" === typeof a) y(a, b, void 0);
            else {
                if (a.za && "function" == typeof a.za) var c = a.za();
                else if (a.ua && "function" == typeof a.ua) c = void 0;
                else if (Ca(a) || "string" === typeof a) {
                    c = [];
                    for (var d = a.length, e = 0; e < d; e++) c.push(e)
                } else c =
                    ub(a);
                d = cp(a);
                e = d.length;
                for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
            }
        };
    var ep = function(a, b) {
        this.h = this.C = this.o = "";
        this.F = null;
        this.A = this.l = "";
        this.B = !1;
        var c;
        a instanceof ep ? (this.B = void 0 !== b ? b : a.B, fp(this, a.o), this.C = a.C, this.h = a.h, gp(this, a.F), this.l = a.l, hp(this, a.g.clone()), this.A = a.A) : a && (c = String(a).match(qe)) ? (this.B = !!b, fp(this, c[1] || "", !0), this.C = ip(c[2] || ""), this.h = ip(c[3] || "", !0), gp(this, c[4]), this.l = ip(c[5] || "", !0), hp(this, c[6] || "", !0), this.A = ip(c[7] || "")) : (this.B = !!b, this.g = new jp(null, this.B))
    };
    ep.prototype.toString = function() {
        var a = [],
            b = this.o;
        b && a.push(kp(b, lp, !0), ":");
        var c = this.h;
        if (c || "file" == b) a.push("//"), (b = this.C) && a.push(kp(b, lp, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.F, null != c && a.push(":", String(c));
        if (c = this.l) this.h && "/" != c.charAt(0) && a.push("/"), a.push(kp(c, "/" == c.charAt(0) ? mp : np, !0));
        (c = this.g.toString()) && a.push("?", c);
        (c = this.A) && a.push("#", kp(c, op));
        return a.join("")
    };
    ep.prototype.resolve = function(a) {
        var b = this.clone(),
            c = !!a.o;
        c ? fp(b, a.o) : c = !!a.C;
        c ? b.C = a.C : c = !!a.h;
        c ? b.h = a.h : c = null != a.F;
        var d = a.l;
        if (c) gp(b, a.F);
        else if (c = !!a.l) {
            if ("/" != d.charAt(0))
                if (this.h && !this.l) d = "/" + d;
                else {
                    var e = b.l.lastIndexOf("/"); - 1 != e && (d = b.l.substr(0, e + 1) + d)
                } e = d;
            if (".." == e || "." == e) d = "";
            else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                d = 0 == e.lastIndexOf("/", 0);
                e = e.split("/");
                for (var f = [], g = 0; g < e.length;) {
                    var h = e[g++];
                    "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length &&
                        "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                }
                d = f.join("/")
            } else d = e
        }
        c ? b.l = d : c = "" !== a.g.toString();
        c ? hp(b, a.g.clone()) : c = !!a.A;
        c && (b.A = a.A);
        return b
    };
    ep.prototype.clone = function() {
        return new ep(this)
    };
    var fp = function(a, b, c) {
            a.o = c ? ip(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        },
        gp = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
                a.F = b
            } else a.F = null
        },
        hp = function(a, b, c) {
            b instanceof jp ? (a.g = b, pp(a.g, a.B)) : (c || (b = kp(b, qp)), a.g = new jp(b, a.B))
        },
        rp = function(a, b, c) {
            a.g.set(b, c);
            return a
        },
        ip = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        kp = function(a, b, c) {
            return "string" === typeof a ? (a = encodeURI(a).replace(b, sp), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g,
                "%$1")), a) : null
        },
        sp = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        lp = /[#\/\?@]/g,
        np = /[#\?:]/g,
        mp = /[#\?]/g,
        qp = /[#\?@]/g,
        op = /#/g,
        jp = function(a, b) {
            this.h = this.g = null;
            this.l = a || null;
            this.o = !!b
        },
        tp = function(a) {
            a.g || (a.g = new Zo, a.h = 0, a.l && re(a.l, function(b, c) {
                a.add(Bc(b), c)
            }))
        };
    jp.prototype.add = function(a, b) {
        tp(this);
        this.l = null;
        a = up(this, a);
        var c = this.g.get(a);
        c || this.g.set(a, c = []);
        c.push(b);
        this.h += 1;
        return this
    };
    var vp = function(a, b) {
        tp(a);
        b = up(a, b);
        ap(a.g.h, b) && (a.l = null, a.h -= a.g.get(b).length, bp(a.g, b))
    };
    jp.prototype.clear = function() {
        this.g = this.l = null;
        this.h = 0
    };
    jp.prototype.isEmpty = function() {
        tp(this);
        return 0 == this.h
    };
    var wp = function(a, b) {
        tp(a);
        b = up(a, b);
        return ap(a.g.h, b)
    };
    k = jp.prototype;
    k.forEach = function(a, b) {
        tp(this);
        this.g.forEach(function(c, d) {
            y(c, function(e) {
                a.call(b, e, d, this)
            }, this)
        }, this)
    };
    k.za = function() {
        tp(this);
        for (var a = this.g.ua(), b = this.g.za(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    k.ua = function(a) {
        tp(this);
        var b = [];
        if ("string" === typeof a) wp(this, a) && (b = bb(b, this.g.get(up(this, a))));
        else {
            a = this.g.ua();
            for (var c = 0; c < a.length; c++) b = bb(b, a[c])
        }
        return b
    };
    k.set = function(a, b) {
        tp(this);
        this.l = null;
        a = up(this, a);
        wp(this, a) && (this.h -= this.g.get(a).length);
        this.g.set(a, [b]);
        this.h += 1;
        return this
    };
    k.get = function(a, b) {
        if (!a) return b;
        a = this.ua(a);
        return 0 < a.length ? String(a[0]) : b
    };
    k.toString = function() {
        if (this.l) return this.l;
        if (!this.g) return "";
        for (var a = [], b = this.g.za(), c = 0; c < b.length; c++) {
            var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.ua(d);
            for (var f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        }
        return this.l = a.join("&")
    };
    k.clone = function() {
        var a = new jp;
        a.l = this.l;
        this.g && (a.g = this.g.clone(), a.h = this.h);
        return a
    };
    var up = function(a, b) {
            b = String(b);
            a.o && (b = b.toLowerCase());
            return b
        },
        pp = function(a, b) {
            b && !a.o && (tp(a), a.l = null, a.g.forEach(function(c, d) {
                var e = d.toLowerCase();
                d != e && (vp(this, d), vp(this, e), 0 < c.length && (this.l = null, this.g.set(up(this, e), cb(c)), this.h += c.length))
            }, a));
            a.o = b
        };
    var xp = "://secure-...imrworldwide.com/ ://cdn.imrworldwide.com/ ://aksecure.imrworldwide.com/ ://[^.]*.moatads.com ://youtube[0-9]+.moatpixel.com ://pm.adsafeprotected.com/youtube ://pm.test-adsafeprotected.com/youtube ://e[0-9]+.yt.srs.doubleverify.com www.google.com/pagead/xsul www.youtube.com/pagead/slav".split(" "),
        yp = /\bocr\b/,
        zp = 0,
        Ap = {},
        Bp = function(a) {
            if (Rb(Fc(a))) return !1;
            if (0 <= a.indexOf("://pagead2.googlesyndication.com/pagead/gen_204?id=yt3p&sr=1&")) return !0;
            try {
                var b = new ep(a)
            } catch (c) {
                return null !=
                    Xa(xp, function(d) {
                        return 0 < a.search(d)
                    })
            }
            return b.A.match(yp) ? !0 : null != Xa(xp, function(c) {
                return null != a.match(c)
            })
        },
        Fp = function(a) {
            if (a && (a = Cp(a), !Rb(a))) {
                var b = 'javascript:"<body><img src=\\""+' + a + '+"\\"></body>"';
                Dp(function(c) {
                    Ep(c ? b : 'javascript:"<body><object data=\\""+' + a + '+"\\" type=\\"text/html\\" width=1 height=1 style=\\"visibility:hidden;\\"></body>"')
                })
            }
        },
        Ep = function(a) {
            var b = ge("IFRAME", {
                src: a,
                style: "display:none"
            });
            a = Wd(b).body;
            var c = ji(function() {
                yh(d);
                he(b)
            }, 15E3);
            var d = ph(b, ["load",
                "error"
            ], function() {
                ji(function() {
                    q.clearTimeout(c);
                    he(b)
                }, 5E3)
            });
            a.appendChild(b)
        },
        Dp = function(a) {
            var b = Ap.imageLoadingEnabled;
            if (null != b) a(b);
            else {
                var c = !1;
                Gp(function(d, e) {
                    delete Ap[e];
                    c || (c = !0, null == Ap.imageLoadingEnabled && (Ap.imageLoadingEnabled = d), a(d))
                })
            }
        },
        Gp = function(a) {
            var b = new Image,
                c = "" + zp++;
            Ap[c] = b;
            b.onload = function() {
                clearTimeout(d);
                a(!0, c)
            };
            var d = setTimeout(function() {
                a(!1, c)
            }, 300);
            b.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        },
        Hp = function(a) {
            if (a) {
                var b =
                    ee(document, "OBJECT");
                b.data = a;
                b.width = "1";
                b.height = "1";
                b.style.visibility = "hidden";
                var c = "" + zp++;
                Ap[c] = b;
                b.onload = b.onerror = function() {
                    delete Ap[c]
                };
                document.body.appendChild(b)
            }
        },
        Ip = function(a) {
            if (a) {
                var b = new Image,
                    c = "" + zp++;
                Ap[c] = b;
                b.onload = b.onerror = function() {
                    delete Ap[c]
                };
                b.src = a
            }
        },
        Jp = function(a) {
            a && Dp(function(b) {
                b ? Ip(a) : Hp(a)
            })
        },
        Cp = function(a) {
            a instanceof gc || (a = "object" == typeof a && a.Pa ? a.Fa() : String(a), a = ic.test(a) ? new gc(ec, a) : null);
            var b = hc(a || kc);
            if ("about:invalid#zClosurez" === b) return "";
            if (b instanceof xc) a = b;
            else {
                var c = "object" == typeof b;
                a = null;
                c && b.sc && (a = b.kc());
                b = $b(c && b.Pa ? b.Fa() : String(b));
                a = zc(b, a)
            }
            a = yc(a).toString();
            return encodeURIComponent(String(sg(a)))
        };
    var Kp = "ad_type vpos mridx pos vad_type videoad_start_delay".split(" ");
    var Lp = function(a) {
        var b = a.La,
            c = void 0 === a.ya ? !1 : a.ya;
        this.B = a.Sa;
        this.g = b;
        this.A = c
    };
    var Mp = function(a) {
        var b = a.Kd,
            c = a.$c,
            d = a.Jd,
            e = a.Zc;
        Lp.call(this, {
            Sa: a.Sa,
            La: a.La,
            height: a.height,
            width: a.width,
            ya: void 0 === a.ya ? !1 : a.ya
        });
        this.o = b;
        this.l = c;
        this.C = d;
        this.h = e
    };
    p(Mp, Lp);
    Mp.prototype.getVideoUrl = function() {
        return this.o
    };
    var Np = function(a) {
        var b = a.md;
        Lp.call(this, {
            Sa: a.Sa,
            La: a.La,
            height: a.height,
            width: a.width,
            ya: void 0 === a.ya ? !1 : a.ya
        });
        this.h = b
    };
    p(Np, Lp);
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var Op = function() {
        this.g = u()
    };
    Op.prototype.reset = function() {
        this.g = u()
    };
    var Pp = function(a) {
        var b = u();
        a = a.g + 5E3 - b;
        return 0 < a ? a : 0
    };
    var Qp = "ad.doubleclick.net bid.g.doubleclick.net ggpht.com google.co.uk google.com googleads.g.doubleclick.net googleads4.g.doubleclick.net googleadservices.com googlesyndication.com googleusercontent.com gstatic.com gvt1.com prod.google.com pubads.g.doubleclick.net s0.2mdn.net static.doubleclick.net surveys.g.doubleclick.net youtube.com ytimg.com".split(" "),
        Rp = ["c.googlesyndication.com"];

    function Sp(a, b) {
        b = void 0 === b ? window.location.protocol : b;
        var c = !1;
        Tp(a, Rp) ? c = !1 : "https:" == b && Tp(a, Qp) && (c = !0);
        if (c) {
            b = new ep(a);
            if ("https" == b.o) return a;
            J(I.D(), "htp", "1");
            fp(b, "https");
            return b.toString()
        }
        return a
    }

    function Tp(a, b) {
        return (new RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, "\\.") + ")(:[0-9]+)?([/?#]|$)", "i")).test(a)
    };
    var Up = function(a) {
        return (a = a.exec(pc)) ? a[1] : ""
    };
    (function() {
        if (qd) return Up(/Firefox\/([0-9.]+)/);
        if (Wc || Xc || Vc) return ld;
        if (ud) return Qc() ? Up(/CriOS\/([0-9.]+)/) : Up(/Chrome\/([0-9.]+)/);
        if (vd && !Qc()) return Up(/Version\/([0-9.]+)/);
        if (rd || sd) {
            var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(pc);
            if (a) return a[1] + "." + a[2]
        } else if (td) return (a = Up(/Android\s+([0-9.]+)/)) ? a : Up(/Version\/([0-9.]+)/);
        return ""
    })();
    var Vp = /OS (\S+) like/,
        Wp = /Android ([\d\.]+)/;

    function Xp(a, b) {
        a = (a = a.exec(pc)) ? a[1] : "";
        a = a.replace(/_/g, ".");
        return 0 <= dc(a, b)
    }
    var Yp = function() {
            return $c && "ontouchstart" in document.documentElement
        },
        Zp = function(a) {
            return ed && Xp(Vp, a)
        },
        $p = function(a) {
            return (a = void 0 === a ? null : a) && Da(a.getAttribute) ? a.getAttribute("playsinline") ? !0 : !1 : !1
        };
    var aq = function() {
            if (!Wc) return !1;
            try {
                return new ActiveXObject("MSXML2.DOMDocument"), !0
            } catch (a) {
                return !1
            }
        },
        bq = Wc && aq();
    var S = function(a) {
        G.call(this);
        this.o = a;
        this.h = {}
    };
    x(S, G);
    var cq = [];
    S.prototype.P = function(a, b, c, d) {
        return dq(this, a, b, c, d)
    };
    var dq = function(a, b, c, d, e, f) {
        Array.isArray(c) || (c && (cq[0] = c.toString()), c = cq);
        for (var g = 0; g < c.length; g++) {
            var h = qh(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!h) break;
            a.h[h.key] = h
        }
        return a
    };
    S.prototype.vb = function(a, b, c, d) {
        return eq(this, a, b, c, d)
    };
    var eq = function(a, b, c, d, e, f) {
        if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) eq(a, b, c[g], d, e, f);
        else {
            b = ph(b, c, d || a.handleEvent, e, f || a.o || a);
            if (!b) return a;
            a.h[b.key] = b
        }
        return a
    };
    S.prototype.Ca = function(a, b, c, d, e) {
        if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) this.Ca(a, b[f], c, d, e);
        else c = c || this.handleEvent, d = Ea(d) ? !!d.capture : !!d, e = e || this.o || this, c = rh(c), d = !!d, b = fh(a) ? a.ob(b, c, d, e) : a ? (a = th(a)) ? a.ob(b, c, d, e) : null : null, b && (yh(b), delete this.h[b.key])
    };
    var fq = function(a) {
        ob(a.h, function(b, c) {
            this.h.hasOwnProperty(c) && yh(b)
        }, a);
        a.h = {}
    };
    S.prototype.R = function() {
        S.Ja.R.call(this);
        fq(this)
    };
    S.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var gq = function() {};
    gq.prototype.g = null;
    gq.prototype.getOptions = function() {
        var a;
        (a = this.g) || (a = {}, hq(this) && (a[0] = !0, a[1] = !0), a = this.g = a);
        return a
    };
    var iq, jq = function() {};
    x(jq, gq);
    var kq = function(a) {
            return (a = hq(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        hq = function(a) {
            if (!a.h && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.h = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.h
        };
    iq = new jq;
    var lq = function(a) {
        N.call(this);
        this.headers = new Zo;
        this.I = a || null;
        this.h = !1;
        this.H = this.g = null;
        this.N = "";
        this.A = 0;
        this.l = this.L = this.B = this.K = !1;
        this.F = 0;
        this.C = null;
        this.Y = "";
        this.O = this.T = !1
    };
    x(lq, N);
    var mq = /^https?$/i,
        nq = ["POST", "PUT"],
        oq = function(a, b) {
            a.F = Math.max(0, b)
        };
    lq.prototype.send = function(a, b, c, d) {
        if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.N + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.N = a;
        this.A = 0;
        this.K = !1;
        this.h = !0;
        this.g = this.I ? kq(this.I) : kq(iq);
        this.H = this.I ? this.I.getOptions() : iq.getOptions();
        this.g.onreadystatechange = La(this.X, this);
        try {
            this.L = !0, this.g.open(b, String(a), !0), this.L = !1
        } catch (f) {
            pq(this);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && dp(d, function(f, g) {
            e.set(g, f)
        });
        d = Xa(e.za(), qq);
        c = q.FormData &&
            a instanceof q.FormData;
        !Za(nq, b) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(f, g) {
            this.g.setRequestHeader(g, f)
        }, this);
        this.Y && (this.g.responseType = this.Y);
        "withCredentials" in this.g && this.g.withCredentials !== this.T && (this.g.withCredentials = this.T);
        try {
            rq(this), 0 < this.F && ((this.O = sq(this.g)) ? (this.g.timeout = this.F, this.g.ontimeout = La(this.W, this)) : this.C = ji(this.W, this.F, this)), this.B = !0, this.g.send(a), this.B = !1
        } catch (f) {
            pq(this)
        }
    };
    var sq = function(a) {
            return Wc && md(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout
        },
        qq = function(a) {
            return "content-type" == a.toLowerCase()
        };
    lq.prototype.W = function() {
        "undefined" != typeof ta && this.g && (this.A = 8, this.dispatchEvent("timeout"), this.abort(8))
    };
    var pq = function(a) {
            a.h = !1;
            a.g && (a.l = !0, a.g.abort(), a.l = !1);
            a.A = 5;
            tq(a);
            uq(a)
        },
        tq = function(a) {
            a.K || (a.K = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
        };
    lq.prototype.abort = function(a) {
        this.g && this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1, this.A = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), uq(this))
    };
    lq.prototype.R = function() {
        this.g && (this.h && (this.h = !1, this.l = !0, this.g.abort(), this.l = !1), uq(this, !0));
        lq.Ja.R.call(this)
    };
    lq.prototype.X = function() {
        this.sb() || (this.L || this.B || this.l ? vq(this) : this.$())
    };
    lq.prototype.$ = function() {
        vq(this)
    };
    var vq = function(a) {
            if (a.h && "undefined" != typeof ta && (!a.H[1] || 4 != wq(a) || 2 != xq(a)))
                if (a.B && 4 == wq(a)) ji(a.X, 0, a);
                else if (a.dispatchEvent("readystatechange"), 4 == wq(a)) {
                a.h = !1;
                try {
                    var b = xq(a);
                    a: switch (b) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var c = !0;
                            break a;
                        default:
                            c = !1
                    }
                    var d;
                    if (!(d = c)) {
                        var e;
                        if (e = 0 === b) {
                            var f = String(a.N).match(qe)[1] || null;
                            if (!f && q.self && q.self.location) {
                                var g = q.self.location.protocol;
                                f = g.substr(0, g.length - 1)
                            }
                            e = !mq.test(f ? f.toLowerCase() : "")
                        }
                        d = e
                    }
                    d ? (a.dispatchEvent("complete"),
                        a.dispatchEvent("success")) : (a.A = 6, tq(a))
                } finally {
                    uq(a)
                }
            }
        },
        uq = function(a, b) {
            if (a.g) {
                rq(a);
                var c = a.g,
                    d = a.H[0] ? za : null;
                a.g = null;
                a.H = null;
                b || a.dispatchEvent("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        rq = function(a) {
            a.g && a.O && (a.g.ontimeout = null);
            a.C && (q.clearTimeout(a.C), a.C = null)
        };
    lq.prototype.vc = function() {
        return !!this.g
    };
    var wq = function(a) {
            return a.g ? a.g.readyState : 0
        },
        xq = function(a) {
            try {
                return 2 < wq(a) ? a.g.status : -1
            } catch (b) {
                return -1
            }
        },
        yq = function(a) {
            try {
                return a.g ? a.g.responseText : ""
            } catch (b) {
                return ""
            }
        },
        zq = function(a, b) {
            if (a.g && 4 == wq(a)) return a = a.g.getResponseHeader(b), null === a ? void 0 : a
        };
    var Aq = function() {};
    Aq.prototype.get = function(a, b) {
        return Bq(a, b)
    };
    var Bq = function(a, b) {
            return Cq(a, !0, b).then(function(c) {
                return Promise.resolve(c)
            }, function(c) {
                return c instanceof Error && 6 == c.message ? Cq(a, !1, b) : Promise.reject(c)
            })
        },
        Cq = function(a, b, c) {
            var d = new lq;
            d.T = b;
            oq(d, Pp(c));
            var e = new S;
            return new Promise(function(f, g) {
                e.vb(d, "success", function() {
                    try {
                        var h = d.g ? d.g.responseXML : null
                    } catch (B) {
                        h = null
                    }
                    if (null == h)
                        if (h = yq(d), "undefined" != typeof DOMParser) {
                            var l = new DOMParser;
                            me();
                            h = zc(h, null);
                            h = l.parseFromString(yc(h), "application/xml")
                        } else if (bq) {
                        l = new ActiveXObject("MSXML2.DOMDocument");
                        l.resolveExternals = !1;
                        l.validateOnParse = !1;
                        try {
                            l.setProperty("ProhibitDTD", !0), l.setProperty("MaxXMLSize", 2048), l.setProperty("MaxElementDepth", 256)
                        } catch (B) {}
                        l.loadXML(h);
                        h = l
                    } else throw Error("Your browser does not support loading xml documents");
                    l = Cg(Qg);
                    var m;
                    if (m = h && h.documentElement)(m = h.documentElement) && "VAST" != !m.nodeName ? (m = m.getAttribute("version")) ? (m = parseInt(m, 10), m = null == m || isNaN(m) ? null : m) : m = null : m = null, m = null == m || 2 > m || 4 < m ? !1 : !0;
                    if (!m && l) {
                        l = {
                            vastUrl: a.substring(0, 200),
                            responseText: yq(d).substring(0,
                                200),
                            status: xq(d),
                            contentType: zq(d, "Content-Type"),
                            acao: zq(d, "Access-Control-Allow-Origin"),
                            acac: zq(d, "Access-Control-Allow-Credentials"),
                            origin: window.location.origin
                        };
                        m = I.D();
                        for (var n = ha(Object.keys(l)), v = n.next(); !v.done; v = n.next()) v = v.value, J(m, v, l[v])
                    }
                    f(h);
                    e.V();
                    d.V()
                });
                e.vb(d, ["error", "timeout"], function() {
                    g(Error(d.A));
                    e.V();
                    d.V()
                });
                d.send(Sp(a), "GET", void 0)
            })
        };
    var Dq = function(a) {
            var b = {};
            a.split(",").forEach(function(c) {
                var d = c.split("=");
                2 == d.length && (c = Sb(d[0]), d = Sb(d[1]), 0 < c.length && (b[c] = d))
            });
            return b
        },
        Eq = function(a) {
            var b = "af am ar_eg ar_sa ar_xb ar be bg bn ca cs da de_at de_cn de el en_au en_ca en_gb en_ie en_in en_sg en_xa en_xc en_za en es_419 es_ar es_bo es_cl es_co es_cr es_do es_ec es_gt es_hn es_mx es_ni es_pa es_pe es_pr es_py es_sv es_us es_uy es_ve es et eu fa fi fil fr_ca fr_ch fr gl gsw gu he hi hr hu id in is it iw ja kn ko ln lo lt lv ml mo mr ms nb ne nl no pl pt_br pt_pt pt ro ru sk sl sr_latn sr sv sw ta te th tl tr uk ur vi zh_cn zh_hk zh_tw zh zu".split(" ");
            if (!a) return null;
            a = a.toLowerCase().replace("-", "_");
            if (b.includes(a)) return a;
            a = (a = a.match(/^\w{2,3}([-_]|$)/)) ? a[0].replace(/[_-]/g, "") : "";
            return b.includes(a) ? a : null
        };

    function Fq(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        return new(Function.prototype.bind.apply(a, [null].concat(ia(c))))
    };

    function Gq(a) {
        var b = Lb("_blank");
        if (!Rb(Fc(a))) {
            a = a instanceof gc || !Ye.test(a) ? a : new gc(ec, a);
            var c = window;
            a = a instanceof gc ? a : jc(a);
            c = c || q;
            b = b instanceof Jb ? Kb(b) : b || "";
            c.open(hc(a), b, "", void 0)
        }
    };
    var Hq = {
        wg: "autoplayDisallowed",
        xg: "beginFullscreen",
        yg: "canPlay",
        zg: "canPlayThrough",
        CLICK: "click",
        DURATION_CHANGE: "durationChange",
        Fg: "end",
        Gg: "endFullscreen",
        Hg: "error",
        Lg: "focusSkipButton",
        hh: "loadStart",
        LOADED: "loaded",
        ih: "mediaLoadTimeout",
        jh: "mediaPlaybackTimeout",
        dc: "pause",
        uh: "play",
        Ah: "seeked",
        Bh: "seeking",
        Eh: "skip",
        Fh: "skipShown",
        ec: "start",
        Nh: "timeUpdate",
        Lh: "timedMetadata",
        be: "volumeChange",
        Sh: "waiting"
    };
    var Jq = function(a) {
            this.g = a;
            this.h = Iq(a)
        },
        Iq = function(a) {
            return new Map(a.l.split("/").reduce(function(b, c, d) {
                d % 2 ? b[b.length - 1].push(c) : b.push([c]);
                return b
            }, []))
        },
        Kq = function(a, b) {
            var c = a.g.g.get(b);
            return c ? c : (a = a.h.get(b)) ? a : null
        };
    var Lq = function() {};

    function Mq() {
        return !!window.MediaSource
    };
    var Nq = function(a, b, c) {
        var d = new Lq;
        this.url = a;
        this.mimeType = b;
        this.g = c;
        this.h = void 0 === d ? null : d
    };
    var Qq = function(a, b) {
            this.h = 64;
            this.A = q.Uint8Array ? new Uint8Array(this.h) : Array(this.h);
            this.B = this.o = 0;
            this.g = [];
            this.J = a;
            this.F = b;
            this.M = q.Int32Array ? new Int32Array(64) : Array(64);
            void 0 === Oq && (q.Int32Array ? Oq = new Int32Array(Pq) : Oq = Pq);
            this.reset()
        },
        Oq;
    x(Qq, mi);
    var Rq = bb(128, gb(0, 63));
    Qq.prototype.reset = function() {
        this.B = this.o = 0;
        this.g = q.Int32Array ? new Int32Array(this.F) : cb(this.F)
    };
    var Sq = function(a) {
        for (var b = a.A, c = a.M, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;
        for (b = 16; 64 > b; b++) {
            e = c[b - 15] | 0;
            d = c[b - 2] | 0;
            var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
                g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
            c[b] = f + g | 0
        }
        d = a.g[0] | 0;
        e = a.g[1] | 0;
        var h = a.g[2] | 0,
            l = a.g[3] | 0,
            m = a.g[4] | 0,
            n = a.g[5] | 0,
            v = a.g[6] | 0;
        f = a.g[7] | 0;
        for (b = 0; 64 > b; b++) {
            var B = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
            g = m & n ^ ~m & v;
            f = f + ((m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>>
                25 | m << 7)) | 0;
            g = g + (Oq[b] | 0) | 0;
            g = f + (g + (c[b] | 0) | 0) | 0;
            f = v;
            v = n;
            n = m;
            m = l + g | 0;
            l = h;
            h = e;
            e = d;
            d = g + B | 0
        }
        a.g[0] = a.g[0] + d | 0;
        a.g[1] = a.g[1] + e | 0;
        a.g[2] = a.g[2] + h | 0;
        a.g[3] = a.g[3] + l | 0;
        a.g[4] = a.g[4] + m | 0;
        a.g[5] = a.g[5] + n | 0;
        a.g[6] = a.g[6] + v | 0;
        a.g[7] = a.g[7] + f | 0
    };
    Qq.prototype.l = function(a, b) {
        void 0 === b && (b = a.length);
        var c = 0,
            d = this.o;
        if ("string" === typeof a)
            for (; c < b;) this.A[d++] = a.charCodeAt(c++), d == this.h && (Sq(this), d = 0);
        else if (Ca(a))
            for (; c < b;) {
                var e = a[c++];
                if (!("number" == typeof e && 0 <= e && 255 >= e && e == (e | 0))) throw Error("message must be a byte array");
                this.A[d++] = e;
                d == this.h && (Sq(this), d = 0)
            } else throw Error("message must be string or array");
        this.o = d;
        this.B += b
    };
    Qq.prototype.C = function() {
        var a = [],
            b = 8 * this.B;
        56 > this.o ? this.l(Rq, 56 - this.o) : this.l(Rq, this.h - (this.o - 56));
        for (var c = 63; 56 <= c; c--) this.A[c] = b & 255, b /= 256;
        Sq(this);
        for (c = b = 0; c < this.J; c++)
            for (var d = 24; 0 <= d; d -= 8) a[b++] = this.g[c] >> d & 255;
        return a
    };
    var Pq = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804,
        4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
    ];
    var Uq = function() {
        Qq.call(this, 8, Tq)
    };
    x(Uq, Qq);
    var Tq = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
    var Xq = function(a, b, c) {
        if ("number" === typeof a) var d = {
            name: Vq(a)
        };
        else d = a, a = Wq(a.name);
        this.code = a;
        this.g = d;
        b = "Error " + b + ": " + (this.g.name || "");
        c && (b += ", " + c);
        Oa.call(this, b)
    };
    x(Xq, Oa);
    var Yq = {
            $d: 1,
            lh: 2,
            NOT_FOUND_ERR: 3,
            Nd: 4,
            Qd: 5,
            mh: 6,
            Zd: 7,
            ABORT_ERR: 8,
            Yd: 9,
            Oh: 10,
            TIMEOUT_ERR: 11,
            Xd: 12,
            INVALID_ACCESS_ERR: 13,
            INVALID_STATE_ERR: 14
        },
        Zq = (q.Ka || q.Ta || Yq).$d,
        $q = (q.Ka || q.Ta || Yq).NOT_FOUND_ERR,
        ar = (q.Ka || q.Ta || Yq).Nd,
        br = (q.Ka || q.Ta || Yq).Qd,
        cr = (q.Ka || q.Ta || Yq).Zd,
        dr = (q.Ka || q.Ta || Yq).ABORT_ERR,
        er = (q.Ka || q.Ta || Yq).Yd,
        fr = (q.Ka || q.Ta || Yq).TIMEOUT_ERR,
        gr = (q.Ka || q.Ta || Yq).Xd,
        hr = (q.DOMException || Yq).INVALID_ACCESS_ERR,
        ir = (q.DOMException || Yq).INVALID_STATE_ERR,
        Wq = function(a) {
            switch (a) {
                case "UnknownError":
                    return Zq;
                case "NotFoundError":
                    return $q;
                case "ConstraintError":
                    return ar;
                case "DataError":
                    return br;
                case "TransactionInactiveError":
                    return cr;
                case "AbortError":
                    return dr;
                case "ReadOnlyError":
                    return er;
                case "TimeoutError":
                    return fr;
                case "QuotaExceededError":
                    return gr;
                case "InvalidAccessError":
                    return hr;
                case "InvalidStateError":
                    return ir;
                default:
                    return Zq
            }
        },
        Vq = function(a) {
            switch (a) {
                case Zq:
                    return "UnknownError";
                case $q:
                    return "NotFoundError";
                case ar:
                    return "ConstraintError";
                case br:
                    return "DataError";
                case cr:
                    return "TransactionInactiveError";
                case dr:
                    return "AbortError";
                case er:
                    return "ReadOnlyError";
                case fr:
                    return "TimeoutError";
                case gr:
                    return "QuotaExceededError";
                case hr:
                    return "InvalidAccessError";
                case ir:
                    return "InvalidStateError";
                default:
                    return "UnknownError"
            }
        },
        jr = function(a, b) {
            return "error" in a ? new Xq(a.error, b) : new Xq({
                name: "UnknownError"
            }, b)
        },
        kr = function(a, b) {
            if ("name" in a) return b = b + ": " + a.message, new Xq(a, b);
            if ("code" in a) {
                var c = Vq(a.code);
                b = b + ": " + a.message;
                return new Xq({
                    name: c
                }, b)
            }
            return new Xq({
                name: "UnknownError"
            }, b)
        };
    var lr = function(a) {
            this.g = a
        },
        mr = q.IDBKeyRange || q.webkitIDBKeyRange;
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var nr = function() {
        this.B = [];
        this.A = this.h = !1;
        this.o = void 0;
        this.M = this.I = this.F = !1;
        this.C = 0;
        this.l = null;
        this.J = 0
    };
    nr.prototype.cancel = function(a) {
        if (this.h) this.o instanceof nr && this.o.cancel();
        else {
            if (this.l) {
                var b = this.l;
                delete this.l;
                a ? b.cancel(a) : (b.J--, 0 >= b.J && b.cancel())
            }
            this.M = !0;
            this.h || or(this, new pr(this))
        }
    };
    nr.prototype.H = function(a, b) {
        this.F = !1;
        qr(this, a, b)
    };
    var qr = function(a, b, c) {
            a.h = !0;
            a.o = c;
            a.A = !b;
            rr(a)
        },
        tr = function(a) {
            if (a.h) {
                if (!a.M) throw new sr(a);
                a.M = !1
            }
        };
    nr.prototype.g = function(a) {
        tr(this);
        qr(this, !0, a)
    };
    var or = function(a, b) {
            tr(a);
            qr(a, !1, b)
        },
        vr = function(a, b) {
            return ur(a, b, null, void 0)
        },
        ur = function(a, b, c, d) {
            a.B.push([b, c, d]);
            a.h && rr(a);
            return a
        };
    nr.prototype.then = function(a, b, c) {
        var d, e, f = new Uh(function(g, h) {
            d = g;
            e = h
        });
        ur(this, d, function(g) {
            g instanceof pr ? f.cancel() : e(g)
        });
        return f.then(a, b, c)
    };
    nr.prototype.$goog_Thenable = !0;
    var wr = function(a) {
            return Va(a.B, function(b) {
                return Da(b[1])
            })
        },
        rr = function(a) {
            if (a.C && a.h && wr(a)) {
                var b = a.C,
                    c = xr[b];
                c && (q.clearTimeout(c.g), delete xr[b]);
                a.C = 0
            }
            a.l && (a.l.J--, delete a.l);
            b = a.o;
            for (var d = c = !1; a.B.length && !a.F;) {
                var e = a.B.shift(),
                    f = e[0],
                    g = e[1];
                e = e[2];
                if (f = a.A ? g : f) try {
                    var h = f.call(e || null, b);
                    void 0 !== h && (a.A = a.A && (h == b || h instanceof Error), a.o = b = h);
                    if (Sh(b) || "function" === typeof q.Promise && b instanceof q.Promise) d = !0, a.F = !0
                } catch (l) {
                    b = l, a.A = !0, wr(a) || (c = !0)
                }
            }
            a.o = b;
            d && (h = La(a.H, a, !0),
                d = La(a.H, a, !1), b instanceof nr ? (ur(b, h, d), b.I = !0) : b.then(h, d));
            c && (b = new yr(b), xr[b.g] = b, a.C = b.g)
        },
        sr = function() {
            Oa.call(this)
        };
    x(sr, Oa);
    sr.prototype.message = "Deferred has already fired";
    sr.prototype.name = "AlreadyCalledError";
    var pr = function() {
        Oa.call(this)
    };
    x(pr, Oa);
    pr.prototype.message = "Deferred was canceled";
    pr.prototype.name = "CanceledError";
    var yr = function(a) {
        this.g = q.setTimeout(La(this.l, this), 0);
        this.h = a
    };
    yr.prototype.l = function() {
        delete xr[this.g];
        throw this.h;
    };
    var xr = {};
    var zr = function() {
        N.call(this)
    };
    x(zr, N);
    zr.prototype.h = null;
    zr.prototype.next = function(a) {
        if (a) this.h["continue"](a);
        else this.h["continue"]()
    };
    var Ar = function(a) {
        var b = new nr;
        try {
            var c = a.h["delete"]()
        } catch (d) {
            or(b, kr(d, "deleting via cursor"));
            return
        }
        c.onsuccess = function() {
            b.g()
        };
        c.onerror = function(d) {
            or(b, jr(d.target, "deleting via cursor"))
        }
    };
    zr.prototype.g = function() {
        return this.h.value
    };
    var Br = function(a, b) {
        var c = new zr;
        try {
            var d = a.openCursor(b ? b.g : null)
        } catch (e) {
            throw c.V(), kr(e, a.name);
        }
        d.onsuccess = function(e) {
            c.h = e.target.result || null;
            c.h ? c.dispatchEvent("n") : c.dispatchEvent("c")
        };
        d.onerror = function() {
            c.dispatchEvent("e")
        };
        return c
    };
    var Cr = function(a) {
            this.g = a
        },
        Dr = function(a, b, c) {
            var d = new nr;
            try {
                var e = a.g.get(c)
            } catch (f) {
                return b += " with key " + He(c), or(d, kr(f, b)), d
            }
            e.onsuccess = function(f) {
                d.g(f.target.result)
            };
            e.onerror = function(f) {
                b += " with key " + He(c);
                or(d, jr(f.target, b))
            };
            return d
        };
    Cr.prototype.get = function(a) {
        return Dr(this, "getting from index " + this.g.name, a)
    };
    var Er = function(a, b) {
        return Br(a.g, b)
    };
    var Fr = function(a) {
            this.g = a
        },
        Gr = function(a, b, c, d) {
            var e = new nr;
            try {
                var f = d ? a.g.add(c, d) : a.g.add(c)
            } catch (g) {
                return b += He(c), d && (b += ", with key " + He(d)), or(e, kr(g, b)), e
            }
            f.onsuccess = function(g) {
                e.g(g.target.result)
            };
            f.onerror = function(g) {
                b += He(c);
                d && (b += ", with key " + He(d));
                or(e, jr(g.target, b))
            };
            return e
        };
    Fr.prototype.add = function(a, b) {
        return Gr(this, "adding into " + this.g.name + " with value ", a, b)
    };
    var Hr = function(a, b) {
        var c = new nr;
        try {
            var d = a.g["delete"](b instanceof lr ? b.g : b)
        } catch (e) {
            return d = "removing from " + a.g.name + " with key " + He(b), or(c, kr(e, d)), c
        }
        d.onsuccess = function() {
            c.g()
        };
        d.onerror = function(e) {
            var f = "removing from " + a.g.name + " with key " + He(b);
            or(c, jr(e.target, f))
        };
        return c
    };
    Fr.prototype.get = function(a) {
        var b = new nr;
        try {
            var c = this.g.get(a)
        } catch (e) {
            return c = "getting from " + this.g.name + " with key " + He(a), or(b, kr(e, c)), b
        }
        c.onsuccess = function(e) {
            b.g(e.target.result)
        };
        var d = this;
        c.onerror = function(e) {
            var f = "getting from " + d.g.name + " with key " + He(a);
            or(b, jr(e.target, f))
        };
        return b
    };
    Fr.prototype.clear = function() {
        var a = "clearing store " + this.g.name,
            b = new nr;
        try {
            var c = this.g.clear()
        } catch (d) {
            return or(b, kr(d, a)), b
        }
        c.onsuccess = function() {
            b.g()
        };
        c.onerror = function(d) {
            or(b, jr(d.target, a))
        };
        return b
    };
    var Ir = function(a) {
        try {
            return new Cr(a.g.index("timestamp"))
        } catch (b) {
            throw kr(b, "getting index timestamp");
        }
    };
    var Jr = function(a, b) {
        N.call(this);
        this.g = a;
        this.l = b;
        this.h = new S(this);
        this.h.P(this.g, "complete", La(this.dispatchEvent, this, "complete"));
        this.h.P(this.g, "abort", La(this.dispatchEvent, this, "abort"));
        this.h.P(this.g, "error", this.ne)
    };
    x(Jr, N);
    k = Jr.prototype;
    k.ne = function(a) {
        a.target instanceof Xq ? this.dispatchEvent({
            type: "error",
            target: a.target
        }) : this.dispatchEvent({
            type: "error",
            target: jr(a.target, "in transaction")
        })
    };
    k.objectStore = function(a) {
        try {
            return new Fr(this.g.objectStore(a))
        } catch (b) {
            throw kr(b, "getting object store " + a);
        }
    };
    k.wait = function() {
        var a = new nr;
        ph(this, "complete", La(a.g, a));
        var b = ph(this, "abort", function() {
            yh(c);
            or(a, new Xq(dr, "waiting for transaction to complete"))
        });
        var c = ph(this, "error", function(e) {
            yh(b);
            or(a, e.target)
        });
        var d = this.l;
        return vr(a, function() {
            return d
        })
    };
    k.abort = function() {
        this.g.abort()
    };
    k.R = function() {
        Jr.Ja.R.call(this);
        this.h.V()
    };
    var Kr = function(a) {
        N.call(this);
        this.g = a;
        this.h = new S(this);
        this.h.P(this.g, "abort", La(this.dispatchEvent, this, "abort"));
        this.h.P(this.g, "error", this.me);
        this.h.P(this.g, "versionchange", this.ke);
        this.h.P(this.g, "close", La(this.dispatchEvent, this, "close"))
    };
    x(Kr, N);
    k = Kr.prototype;
    k.Kc = !0;
    k.me = function(a) {
        a = (a = a.target) && a.error;
        this.dispatchEvent({
            type: "error",
            errorCode: a && a.severity
        })
    };
    k.ke = function(a) {
        this.dispatchEvent(new Lr(a.oldVersion, a.newVersion))
    };
    k.close = function() {
        this.Kc && (this.g.close(), this.Kc = !1)
    };
    k.getVersion = function() {
        return Number(this.g.version)
    };
    var Mr = function(a) {
        var b = ["MediaSourceVideoChunk"];
        try {
            var c = a.g.transaction(b, "readwrite");
            return new Jr(c, a)
        } catch (d) {
            throw kr(d, "creating transaction");
        }
    };
    Kr.prototype.R = function() {
        Kr.Ja.R.call(this);
        this.h.V()
    };
    var Lr = function(a, b) {
        Yg.call(this, "versionchange");
        this.oldVersion = a;
        this.newVersion = b
    };
    x(Lr, Yg);
    var Nr = q.indexedDB || q.mozIndexedDB || q.webkitIndexedDB || q.moz_indexedDB,
        Or = function(a) {
            var b = new nr,
                c = Nr.open("VideoChunkPersistentStorage", 1);
            c.onsuccess = function(d) {
                d = new Kr(d.target.result);
                b.g(d)
            };
            c.onerror = function(d) {
                or(b, jr(d.target, "opening database VideoChunkPersistentStorage"))
            };
            c.onupgradeneeded = function(d) {
                if (a) {
                    var e = new Kr(d.target.result);
                    a(new Lr(d.oldVersion, d.newVersion), e, new Jr(d.target.transaction, e))
                }
            };
            c.onblocked = function() {};
            return b
        };
    var Pr = {
            Qh: "videoId",
            eh: "itag",
            Gh: "source",
            Hh: "startIndex"
        },
        Qr = function() {
            N.call(this);
            this.g = null
        };
    p(Qr, N);
    var Rr = function(a) {
            return Promise.resolve(Or(a.h)).then(function(b) {
                return a.g = b
            }, function(b) {
                J(I.D(), "codf", b.message)
            })
        },
        Sr = function(a) {
            return null !== a.g && a.g.Kc
        };
    Qr.prototype.close = function() {
        var a = this;
        return (new Promise(function(b) {
            return Tr(a, b)
        })).then(function() {
            return a.g.close()
        })
    };
    var Xr = function(a, b) {
        b = Ur(b, 0);
        if (!b) return Promise.resolve(null);
        var c = Vr(b);
        return Wr(a, c, b.lmt)
    };
    Qr.prototype.h = function(a, b) {
        a = {
            keyPath: "cacheId"
        };
        try {
            var c = new Fr(b.g.createObjectStore("MediaSourceVideoChunk", a))
        } catch (d) {
            throw kr(d, "creating object store MediaSourceVideoChunk");
        }
        b = {
            unique: !1
        };
        try {
            c.g.createIndex("timestamp", "timestamp", b)
        } catch (d) {
            throw kr(d, "creating new index timestamp with key path timestamp");
        }
    };
    var Tr = function(a, b) {
            var c = new Date(Date.now());
            c.setDate(c.getDate() - 30);
            c = new lr(mr.upperBound(c, void 0));
            var d = Er(Ir(Mr(a.g).objectStore("MediaSourceVideoChunk")), c),
                e = qh(d, "n", function() {
                    Ar(d);
                    d.next()
                });
            ph(d, "c", function() {
                yh(e);
                b()
            })
        },
        Ur = function(a, b) {
            var c = new Jq(a);
            a = Kq(c, "id");
            var d = Kq(c, "itag"),
                e = Kq(c, "source"),
                f = Kq(c, "lmt");
            (c = c.g.g.get("range")) ? (c = c.split("-")[0], c = !c || isNaN(c) ? null : parseInt(c, 10)) : c = null;
            var g = [];
            a ? d ? e ? f ? null === c && g.push("startIndex") : g.push("lmt") : g.push("source") :
                g.push("itag") : g.push("videoId");
            return 0 < g.length ? (J(I.D(), "civp", g.join("-")), null) : {
                videoId: a,
                itag: d,
                source: e,
                lmt: f,
                startIndex: c + b
            }
        },
        Vr = function(a) {
            var b = Object.keys(Pr).sort().map(function(d) {
                    return a[Pr[d]]
                }).join(","),
                c = new Uq;
            c.l(b);
            return ib(c.C())
        },
        Wr = function(a, b, c) {
            var d = Mr(a.g).objectStore("MediaSourceVideoChunk");
            return Promise.resolve(d.get(b)).then(function(e) {
                if (!e) return J(I.D(), "cenf", "1"), null;
                if (e.lmt !== c) return J(I.D(), "cdl", "1"), Hr(d, b).then(null, function(f) {
                    J(I.D(), "crdlvf",
                        f.message)
                }), null;
                J(I.D(), "cefml", "1");
                return (new Promise(function(f) {
                    var g = new FileReader;
                    g.addEventListener("loadend", function() {
                        f(g.result)
                    });
                    g.addEventListener("abort", function() {
                        J(I.D(), "ccvbtaa", "1");
                        f(null)
                    });
                    g.addEventListener("error", function() {
                        J(I.D(), "ccvbtaf", "1");
                        f(null)
                    });
                    g.readAsArrayBuffer(e.video)
                })).then(function(f) {
                    return f ? {
                        endIndex: e.endIndex,
                        isLastVideoChunk: e.isLastVideoChunk,
                        video: f
                    } : null
                })
            }, function(e) {
                J(I.D(), "cgvf", e.message)
            })
        },
        Yr = function(a, b) {
            a = Mr(a.g).objectStore("MediaSourceVideoChunk");
            Promise.resolve(a.add(b)).then(function() {
                J(I.D(), "cavs", "1")
            }, function(c) {
                J(I.D(), "cavf", c.message)
            })
        };

    function Zr(a, b) {
        if ("function" === typeof CustomEvent) return new CustomEvent(a, {
            detail: b
        });
        var c = document.createEvent("CustomEvent");
        c.initCustomEvent(a, !1, !0, b);
        return c
    }
    var $r = null;

    function as() {
        var a = Fq(Qr);
        Rr(a).then(function(b) {
            b && (b = Zr("initialized"), a.dispatchEvent(b))
        });
        return a
    }
    "undefined" === typeof window.v8_flag_map && Cg(Vg) && ($r = as());
    var cs = function(a, b, c, d, e) {
        G.call(this);
        this.N = a;
        this.W = new ep(b.url);
        this.h = c;
        this.o = e;
        this.L = b.g;
        this.la = d;
        (this.X = b.h) || vp(this.W.g, "alr");
        J(I.D(), "sl_dv" + this.o, (null != this.X).toString());
        this.Y = !this.X;
        this.zb = 0;
        this.g = new XMLHttpRequest;
        this.K = this.Bb = this.F = this.l = 0;
        this.$ = .1;
        this.C = [];
        this.I = !1;
        this.Ab = this.ha = null;
        this.aa = !1;
        this.Cb = this.T = this.B = this.pa = this.Da = null;
        this.O = 0;
        this.H = !1;
        this.A = Cg(Ug) || Cg(Vg);
        Cg(Ug) ? this.B = as() : Cg(Vg) && (this.B = $r);
        bs(this)
    };
    p(cs, G);
    var ds = function(a, b) {
            b = Zr("media_source_error", b);
            a.N.dispatchEvent(b)
        },
        es = function(a, b) {
            ds(a, {
                code: 1 < a.l ? MediaError.MEDIA_ERR_NETWORK : MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED,
                message: b
            })
        },
        bs = function(a) {
            a.ha = qh(a.g, "load", function() {
                fs(a);
                if (a.Y) {
                    var b = a.g.responseText;
                    a.I = !b || b.length < a.L;
                    a.A && a.I && (a.H = !0);
                    a.K = 0;
                    pg(I.D(), "sl_cc" + a.o + "-" + a.F);
                    a.F++;
                    gs(a)
                }
            });
            a.Ab = qh(a.g, "progress", function() {
                fs(a)
            });
            a.g.addEventListener("error", function() {
                pg(I.D(), "sl_ec" + a.o + "-" + a.l);
                es(a, "Failed to load chunk " +
                    a.l + " for stream " + a.o)
            });
            a.h.addEventListener("updateend", function() {
                a.h.buffered.length && (a.Bb = a.h.buffered.end(0), a.A ? a.H && !a.h.updating && a.l === a.F && (pg(I.D(), "sl_lc" + a.o), a.la()) : a.I && !a.h.updating && a.l === a.F && (pg(I.D(), "sl_lc" + a.o), a.la()));
                !a.aa && 1 < a.N.buffered.length && (J(I.D(), "dbr", "1"), a.aa = !0)
            });
            a.h.addEventListener("update", function() {
                a.C.length && !a.h.updating && a.h.appendBuffer(a.C.shift())
            });
            a.h.addEventListener("error", function() {
                pg(I.D(), "msb_err" + a.o);
                ds(a, {
                    code: MediaError.MEDIA_ERR_DECODE,
                    message: "Error on SourceBuffer " + a.o
                })
            });
            a.A ? (Sr(a.B) ? hs(a) : a.Da = qh(a.B, "initialized", function() {
                hs(a)
            }), a.pa = qh(a.B, "get_video_succeeded", function() {
                gs(a)
            })) : hs(a)
        },
        js = function(a) {
            pg(I.D(), "sl_rc" + a.o + "-" + a.l);
            var b = is(a);
            a.g.open("get", b);
            a.g.overrideMimeType("text/plain; charset=x-user-defined");
            a.g.send(null);
            a.O = 0;
            a.A && (a.T = null, a.Cb = b)
        },
        fs = function(a) {
            if (400 <= a.g.status) es(a, 'Response code "' + a.g.status + '" on loading chunk ' + a.l + " for stream " + a.o);
            else {
                if (!a.Y) {
                    var b = a.g.getResponseHeader("content-type");
                    if (b && 0 <= b.indexOf("text/plain")) {
                        a.g.readyState === XMLHttpRequest.DONE && (a.W = new ep(a.g.response), a.l = 0, a.F = 0, a.zb++, hs(a));
                        return
                    }
                    a.Y = !0;
                    pg(I.D(), "sl_redc" + a.o);
                    J(I.D(), "sl_tr" + a.o, a.zb.toString())
                }
                vp(a.W.g, "alr");
                if (a.g.readyState === XMLHttpRequest.LOADING || a.g.readyState === XMLHttpRequest.DONE) {
                    b = a.g.response;
                    for (var c = new Uint8Array(b.length - a.K), d = 0; d < c.length; d++) c[d] = b.charCodeAt(d + a.K) & 255;
                    a.K = b.length;
                    b = c.buffer;
                    ks(a, b);
                    if (a.A && 0 < b.byteLength) {
                        c = a.g.responseText;
                        c = a.g.readyState === XMLHttpRequest.DONE &&
                            c.length < a.L;
                        d = a.B;
                        var e = new Blob([b]),
                            f = new ep(a.Cb),
                            g = Ur(f, a.O);
                        if (g) {
                            f = Vr(g);
                            var h = g.startIndex,
                                l = h + e.size - 1;
                            g = g.lmt;
                            var m = new Date(Date.now());
                            Yr(d, {
                                cacheId: f,
                                startIndex: h,
                                endIndex: l,
                                lmt: g,
                                timestamp: m,
                                isLastVideoChunk: c,
                                video: e
                            })
                        } else Promise.resolve(void 0);
                        a.O += b.byteLength
                    }
                }
            }
        },
        ks = function(a, b) {
            0 < b.byteLength && (a.h.updating || a.C.length ? a.C.push(b) : a.h.appendBuffer(b))
        },
        gs = function(a) {
            var b = a.F === a.l && !a.h.updating && !a.C.length;
            if (a.A ? !a.H && b && a.N.currentTime >= a.$ : !a.I && b && a.N.currentTime >= a.$) a.$ =
                a.Bb + .1, hs(a)
        },
        is = function(a) {
            var b = a.A && a.T ? a.T + 1 : a.l * a.L;
            return rp(a.W, "range", b + "-" + (b + a.L - 1)).toString()
        },
        hs = function(a) {
            if (a.A) {
                var b = new ep(is(a));
                Xr(a.B, b).then(function(c) {
                    c ? (a.T = parseInt(c.endIndex, 10), a.H = c.isLastVideoChunk, ks(a, c.video), c = Zr("get_video_succeeded"), a.B.dispatchEvent(c), a.F++) : js(a);
                    a.l++
                })
            } else js(a), a.l++
        };
    cs.prototype.R = function() {
        this.A && Sr(this.B) && this.B.close();
        yh(this.ha);
        yh(this.Ab);
        yh(this.Da);
        yh(this.pa);
        G.prototype.R.call(this)
    };
    var ms = function(a, b) {
        G.call(this);
        var c = this;
        this.B = a;
        this.F = b;
        this.h = new MediaSource;
        this.C = [];
        this.l = [];
        this.g = this.A = null;
        this.o = !1;
        this.h.addEventListener("sourceopen", function() {
            return ls(c)
        })
    };
    p(ms, G);
    var ls = function(a) {
        pg(I.D(), "msmsw_oso");
        a.A = qh(a.B, "timeupdate", function() {
            if (!a.o)
                for (var e = ha(a.l), f = e.next(); !f.done; f = e.next()) gs(f.value)
        });
        for (var b = 0; b < a.F.length; b++) {
            var c = a.F[b];
            J(I.D(), "msmsw_mime" + b, c.mimeType);
            J(I.D(), "msmsw_cs" + b, c.mimeType);
            var d = a.h.addSourceBuffer(c.mimeType);
            d ? (a.C.push(d), c = Fq(cs, a.B, c, d, function() {
                a: if (!a.o) {
                    for (var e = ha(a.l), f = e.next(); !f.done; f = e.next())
                        if (f = f.value, f.A ? !f.H || f.h.updating || f.C.length : !f.I || f.h.updating || f.C.length) break a;
                    a.h.endOfStream();
                    a.o = !0;
                    yh(a.A)
                }
            }, b), a.l.push(c)) : pg(I.D(), "msmsw_sbf" + b)
        }
        J(I.D(), "msmsw_ns", a.C.length.toString())
    };
    ms.prototype.R = function() {
        this.g && window.URL.revokeObjectURL(this.g);
        for (var a = ha(this.l), b = a.next(); !b.done; b = a.next()) b.value.V();
        yh(this.A);
        G.prototype.R.call(this)
    };
    var ns = function() {
        throw Error("Do not instantiate directly");
    };
    ns.prototype.g = null;
    ns.prototype.getContent = function() {
        return this.content
    };
    ns.prototype.toString = function() {
        return this.content
    };
    var os = function() {
        ns.call(this)
    };
    x(os, ns);
    var ps = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.g = d);
            return c
        }
    }(os);
    var qs = {
            rgb: !0,
            rgba: !0,
            alpha: !0,
            rect: !0,
            image: !0,
            "linear-gradient": !0,
            "radial-gradient": !0,
            "repeating-linear-gradient": !0,
            "repeating-radial-gradient": !0,
            "cubic-bezier": !0,
            matrix: !0,
            perspective: !0,
            rotate: !0,
            rotate3d: !0,
            rotatex: !0,
            rotatey: !0,
            steps: !0,
            rotatez: !0,
            scale: !0,
            scale3d: !0,
            scalex: !0,
            scaley: !0,
            scalez: !0,
            skew: !0,
            skewx: !0,
            skewy: !0,
            translate: !0,
            translate3d: !0,
            translatex: !0,
            translatey: !0,
            translatez: !0
        },
        rs = function(a) {
            a = Sb(a);
            if ("" == a) return null;
            var b = String(a.substr(0, 4)).toLowerCase();
            if (0 == ("url(" <
                    b ? -1 : "url(" == b ? 0 : 1)) return null;
            if (0 < a.indexOf("(")) {
                if (/"|'/.test(a)) return null;
                b = /([\-\w]+)\(/g;
                for (var c; c = b.exec(a);)
                    if (!(c[1].toLowerCase() in qs)) return null
            }
            return a
        };

    function ts(a) {
        var b = q.CSSStyleDeclaration;
        return b && b.prototype && b.prototype[a] || null
    }
    var us = ts("getPropertyValue"),
        vs = ts("setProperty");

    function ws(a, b, c, d) {
        if (a) return a.apply(b, d);
        if (Wc && 10 > document.documentMode) {
            if (!b[c].call) throw Error("IE Clobbering detected");
        } else if ("function" != typeof b[c]) throw Error("Clobbering detected");
        return b[c].apply(b, d)
    };
    var xs = {
            "-webkit-border-horizontal-spacing": !0,
            "-webkit-border-vertical-spacing": !0
        },
        zs = function(a) {
            if (!a) return oc;
            var b = document.createElement("div").style,
                c = ys(a);
            y(c, function(d) {
                var e = Zc && d in xs ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
                0 != e.lastIndexOf("--", 0) && 0 != e.lastIndexOf("var", 0) && (d = ws(us, a, a.getPropertyValue ? "getPropertyValue" : "getAttribute", [d]) || "", d = rs(d), null != d && ws(vs, b, b.setProperty ? "setProperty" : "setAttribute", [e, d]))
            });
            return nc(b.cssText ||
                "")
        },
        ys = function(a) {
            Ca(a) ? a = cb(a) : (a = ub(a), $a(a, "cssText"));
            return a
        };
    var As = function() {
        if (window.MutationObserver) {
            var a = [];
            (new MutationObserver(function() {
                a.forEach(function(b) {
                    return b()
                });
                a = []
            })).observe(document.createTextNode(""), {
                characterData: !0
            })
        }
    };
    "function" === typeof Promise && -1 < String(Promise).indexOf("[native code]") || As();
    var Bs = "abort canplay canplaythrough durationchange emptied loadstart loadeddata loadedmetadata progress ratechange seeked seeking stalled suspend waiting".split(" ");
    var Cs = function(a) {
            this.g = a
        },
        Ds = function(a, b) {
            return wb(a.g, b) && (a = a.g[b], "boolean" === typeof a) ? a : !1
        };
    var T = function() {
            this.A = "always";
            this.F = 4;
            this.I = 1;
            this.g = 0;
            this.l = !0;
            this.B = "en";
            this.N = !1;
            this.M = this.J = "";
            this.H = null;
            this.X = this.O = -1;
            this.W = this.L = this.K = "";
            this.h = !1;
            this.o = !0;
            try {
                this.aa = nj(void 0)[0]
            } catch (a) {}
        },
        Es = function(a) {
            a = Fc(a);
            Rb(a) || (a = a.substring(0, 20));
            return a
        };
    k = T.prototype;
    k.Jf = function(a) {
        this.A = a
    };
    k.Af = function() {
        return this.A
    };
    k.Pf = function(a) {
        this.F = a
    };
    k.Df = function() {
        return this.F
    };
    k.Sf = function(a) {
        this.T = a
    };
    k.Gf = function() {
        return this.T
    };
    k.Tf = function(a) {
        "boolean" === typeof a && (this.I = a ? 1 : 0)
    };
    k.Uf = function(a) {
        this.I = a
    };
    k.If = function(a) {
        this.l = a
    };
    k.Hf = function() {
        return this.l
    };
    k.Nf = function(a) {
        this.N = a
    };
    k.tb = function() {
        return this.N
    };
    k.Of = function(a) {
        if (a = Eq(a)) this.B = a
    };
    k.le = function() {
        return this.B
    };
    k.Qf = function(a) {
        this.J = Es(a)
    };
    k.Ef = function() {
        return this.J
    };
    k.Rf = function(a) {
        this.M = Es(a)
    };
    k.Ff = function() {
        return this.M
    };
    var Fs = function(a) {
        if (null == a.H) {
            var b = {};
            var c = (new ep(E().location.href)).g;
            if (wp(c, "tcnfp")) try {
                b = JSON.parse(c.get("tcnfp"))
            } catch (d) {}
            a.H = new Cs(b)
        }
        return a.H
    };
    T.prototype.Y = function(a) {
        this.O = a
    };
    T.prototype.$ = function(a) {
        this.X = a
    };
    var Is = function() {
            var a = U;
            Gs();
            a.K = Hs[1] || ""
        },
        Js = function() {
            var a = U;
            Gs();
            a.W = Hs[6] || ""
        },
        Ks = function() {
            var a = U;
            Gs();
            a.L = Hs[4] || ""
        };
    k = T.prototype;
    k.Lf = function(a) {
        this.h = a
    };
    k.Bf = function() {
        return this.h
    };
    k.Kf = function(a) {
        this.o = a
    };
    k.Mf = function() {};
    k.Cf = function() {
        return !0
    };
    var U = new T;
    var Ns = function() {
            var a = "h.3.393.1";
            null != Ls ? (a += "/n." + Ls, null != Ms && (a += "/" + Ms)) : U.tb() && (a += "/vpaid_adapter");
            return a
        },
        Ms = null,
        Ls = null;
    var Os = function(a) {
            var b = Fs(U);
            if (b && Ds(b, "forceCustomPlayback") || U.tb()) return !0;
            if ((cd || Yp()) && a) return !1;
            a = a && (cd || Yp() || Zp(10)) && (U.h || Cg(Rg));
            return (bd || dd) && !a || ad && (!ad || !Xp(Wp, 4)) || qk() ? !0 : !1
        },
        Ps = function(a) {
            return null == a ? !1 : U.tb() ? !0 : ed || cd || Yp() ? $p(a) ? cd || Yp() || Zp(10) && U.h ? !1 : !0 : !0 : ad && (!ad || !Xp(Wp, 4)) || qk() ? !0 : !1
        },
        Qs = function() {
            var a = Fs(U);
            return a && Ds(a, "disableOnScreenDetection") ? !1 : !nk()
        };
    var Rs = function() {
            this.allowCustom = !0;
            this.creativeType = this.resourceType = "All";
            this.sizeCriteria = "SelectExactMatch";
            this.nearMatchPercent = 90;
            this.adSlotIds = []
        },
        Ss = {
            $g: "Image",
            Kg: "Flash",
            Md: "All"
        },
        Ts = {
            Xg: "Html",
            Yg: "IFrame",
            Ih: "Static",
            Md: "All"
        },
        Us = {
            Zg: "IgnoreSize",
            Ch: "SelectExactMatch",
            Dh: "SelectNearMatch"
        };
    var Vs = !1,
        Ws = function(a) {
            if (a = a.match(/[\d]+/g)) a.length = 3
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Vs = !0, a.description)) {
                Ws(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Vs = !0;
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Vs = !(!a || !a.enabledPlugin))) {
            Ws(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Vs = !0;
                Ws(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Vs = !0;
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Vs = !0, Ws(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    var Xs = Vs;
    var Zs = function(a, b) {
            b = void 0 === b ? new Rs : b;
            this.h = a;
            this.g = b ? b : new Rs;
            this.A = Ys(Ts, this.g.resourceType) ? this.g.resourceType : "All";
            this.o = Ys(Ss, this.g.creativeType) ? this.g.creativeType : "All";
            this.C = Ys(Us, this.g.sizeCriteria) ? this.g.sizeCriteria : "SelectExactMatch";
            this.l = null != this.g.adSlotIds ? this.g.adSlotIds : [];
            this.B = "number" === typeof this.g.nearMatchPercent && 0 < this.g.nearMatchPercent && 100 >= this.g.nearMatchPercent ? this.g.nearMatchPercent : 90
        },
        bt = function(a, b) {
            var c = [];
            b.forEach(function(d) {
                a.g.allowCustom &&
                    (!Rb(d.getContent()) && (isNaN(d.g.sequenceNumber) || isNaN(d.g.masterSequenceNumber) || d.g.masterSequenceNumber == d.g.sequenceNumber) && $s(a, d) ? c.push(d) : (d = at(a, d), null != d && !Rb(d.getContent()) && c.push(d)))
            });
            return c
        },
        $s = function(a, b) {
            var c;
            if (c = "Flash" != b.h() || Xs) {
                if (c = "All" == a.A || a.A == b.g.resourceType) c = b.h(), c = null == c ? !0 : "All" == a.o || a.o == c;
                c && (c = b.g.adSlotId, c = 0 == a.l.length ? !0 : null != c ? a.l.includes(c) : !1)
            }
            if (c)
                if (b = b.g.size, (c = "IgnoreSize" == a.C) || (c = a.h, c = c == b ? !0 : c && b ? c.width == b.width && c.height == b.height :
                        !1), c) a = !0;
                else {
                    if (c = "SelectNearMatch" == a.C) c = b.width, b = b.height, c = c > a.h.width || b > a.h.height || c < a.B / 100 * a.h.width || b < a.B / 100 * a.h.height ? !1 : !0;
                    a = c
                }
            else a = !1;
            return a
        },
        at = function(a, b) {
            b = ct(b);
            return null == b ? null : b.find(function(c) {
                return $s(a, c)
            }) || null
        },
        Ys = function(a, b) {
            return null != b && xb(a, b)
        };
    var dt = function(a) {
        N.call(this);
        this.A = a || "goog_" + Gc++;
        this.l = [];
        this.h = !1
    };
    p(dt, N);
    dt.prototype.connect = function() {
        for (this.h = !0; 0 != this.l.length;) {
            var a = this.l.shift();
            this.sendMessage(a.name, a.type, a.data)
        }
    };
    dt.prototype.send = function(a, b, c) {
        this.h ? this.sendMessage(a, b, c) : this.l.push({
            name: a,
            type: b,
            data: c
        })
    };
    dt.prototype.sendMessage = function() {};
    var V = {},
        et = (V.creativeView = "creativeview", V.start = "start", V.midpoint = "midpoint", V.firstQuartile = "firstquartile", V.thirdQuartile = "thirdquartile", V.complete = "complete", V.mute = "mute", V.unmute = "unmute", V.pause = "pause", V.rewind = "rewind", V.resume = "resume", V.fullscreen = "fullscreen", V.exitFullscreen = "exitfullscreen", V.expand = "expand", V.collapse = "collapse", V.close = "close", V.acceptInvitation = "acceptinvitation", V.userInteraction = "userInteraction", V.adCanPlay = "adCanPlay", V.adStarted = "adStarted", V.abandon = "abandon",
            V.acceptInvitationLinear = "acceptinvitationlinear", V.engagedView = "engagedview", V.instreamAdComplete = "instreamAdComplete", V.skipShown = "skipshown", V.skippableStateChanged = "skippableStateChanged", V.skip = "skip", V.progress = "progress", V.publisher_invoked_skip = "PUBLISHER_INVOKED_SKIP", V.annotation_start = "annotation_start", V.annotation_click = "annotation_click", V.annotation_close = "annotation_close", V.cta_annotation_shown = "cta_annotation_shown", V.cta_annotation_clicked = "cta_annotation_clicked", V.cta_annotation_closed =
            "cta_annotation_closed", V.replay = "replay", V.stop = "stop", V.autoplayDisallowed = "autoplayDisallowed", V.error = "error", V.mediaLoadTimeout = "mediaLoadTimeout", V.linearChanged = "linearChanged", V.click = "click", V.contentPauseRequested = "contentPauseRequested", V.contentResumeRequested = "contentResumeRequested", V.discardAdBreak = "discardAdBreak", V.updateAdsRenderingSettings = "updateAdsRenderingSettings", V.durationChange = "durationChange", V.expandedChanged = "expandedChanged", V.autoClose = "autoClose", V.userClose = "userClose",
            V.userRecall = "userRecall", V.prefetched = "prefetched", V.loaded = "loaded", V.init = "init", V.allAdsCompleted = "allAdsCompleted", V.adMetadata = "adMetadata", V.adBreakReady = "adBreakReady", V.adBreakFetchError = "adBreakFetchError", V.log = "log", V.volumeChange = "volumeChange", V.companionBackfill = "companionBackfill", V.companionInitialized = "companionInitialized", V.companionImpression = "companionImpression", V.companionClick = "companionClick", V.impression = "impression", V.interaction = "interaction", V.adProgress = "adProgress",
            V.adBuffering = "adBuffering", V.trackingUrlPinged = "trackingUrlPinged", V.measurable_impression = "measurable_impression", V.custom_metric_viewable = "custom_metric_viewable", V.viewable_impression = "viewable_impression", V.fully_viewable_audible_half_duration_impression = "fully_viewable_audible_half_duration_impression", V.overlay_resize = "overlay_resize", V.overlay_unmeasurable_impression = "overlay_unmeasurable_impression", V.overlay_unviewable_impression = "overlay_unviewable_impression", V.overlay_viewable_immediate_impression =
            "overlay_viewable_immediate_impression", V.overlay_viewable_end_of_session_impression = "overlay_viewable_end_of_session_impression", V.externalActivityEvent = "externalActivityEvent", V.adEvent = "adEvent", V.configure = "configure", V.remainingTime = "remainingTime", V.destroy = "destroy", V.resize = "resize", V.volume = "volume", V.sendAbandonUrls = "sendAbandonUrls", V.authorIconClicked = "videoAuthorIconClicked", V.authorNameClicked = "videoAuthorClicked", V.videoClicked = "videoClicked", V.videoIconClicked = "videoIconClicked", V.learnMoreClicked =
            "videoLearnMoreClicked", V.muteClicked = "videoMuteClicked", V.titleClicked = "videoTitleClicked", V.skipShown = "SKIP_SHOWN", V.videoSkipClicked = "SKIPPED", V.unmuteClicked = "videoUnmuteClicked", V.vpaidEvent = "vpaidEvent", V.show_ad = "show_ad", V.video_card_endcap_collapse = "video_card_endcap_collapse", V.video_card_endcap_dismiss = "video_card_endcap_dismiss", V.video_card_endcap_impression = "video_card_endcap_impression", V.mediaUrlPinged = "mediaUrlPinged", V.breakStart = "breakstart", V.breakEnd = "breakend", V.omidReady = "omidReady",
            V.omidUnavailable = "omidUnavailable", V.omidAdSessionCompleted = "omidAdSessionCompleted", V.omidAdSessionAbandoned = "omidAdSessionAbandoned", V.verificationNotExecuted = "verificationNotExecuted", V.loadStart = "loadStart", V.seeked = "seeked", V.seeking = "seeking", V);
    var ft = function(a) {
        this.g = a
    };
    k = ft.prototype;
    k.Ie = function() {
        return this.g.totalAds
    };
    k.Fe = function() {
        return this.g.maxDuration
    };
    k.De = function() {
        return this.g.adPosition
    };
    k.Ge = function() {
        return this.g.podIndex
    };
    k.He = function() {
        return this.g.timeOffset
    };
    k.Ee = function() {
        return this.g.isBumper
    };
    var gt = function(a) {
        this.g = a
    };
    gt.prototype.getContent = function() {
        return this.g.content
    };
    gt.prototype.h = function() {
        return this.g.contentType
    };
    gt.prototype.o = function() {
        return this.g.size.width
    };
    gt.prototype.l = function() {
        return this.g.size.height
    };
    var ct = function(a) {
        return (a = a.g.backupCompanions) ? a.map(function(b) {
            return new gt(b)
        }) : []
    };
    var ht = function(a, b) {
        this.h = a;
        this.g = b
    };
    ht.prototype.o = function() {
        return this.h
    };
    ht.prototype.l = function() {
        return this.g
    };
    var X = function(a) {
        this.g = a
    };
    X.prototype.h = function() {
        return this.g.adId
    };
    X.prototype.l = function() {
        return this.g.creativeAdId
    };
    X.prototype.o = function() {
        return this.g.creativeId
    };
    var it = function(a) {
        return a.g.adQueryId
    };
    k = X.prototype;
    k.Ke = function() {
        return this.g.adSystem
    };
    k.Le = function() {
        return this.g.advertiserName
    };
    k.Me = function() {
        return this.g.apiFramework
    };
    k.hf = function() {
        return this.g.adWrapperIds
    };
    k.kf = function() {
        return this.g.adWrapperCreativeIds
    };
    k.jf = function() {
        return this.g.adWrapperSystems
    };
    k.isLinear = function() {
        return this.g.linear
    };
    k.lf = function() {
        return this.g.skippable
    };
    k.Oe = function() {
        return this.g.contentType
    };
    k.Qe = function() {
        return this.g.description
    };
    k.We = function() {
        return this.g.title
    };
    k.getDuration = function() {
        return this.g.duration
    };
    k.ff = function() {
        return this.g.vastMediaWidth
    };
    k.df = function() {
        return this.g.vastMediaHeight
    };
    k.gf = function() {
        return this.g.width
    };
    k.Re = function() {
        return this.g.height
    };
    k.Ze = function() {
        return this.g.uiElements
    };
    k.Te = function() {
        return this.g.minSuggestedDuration
    };
    k.Je = function() {
        return new ft(this.g.adPodInfo)
    };
    k.Ne = function(a, b, c) {
        var d = this.g.companions.map(function(e) {
            return new gt(e)
        });
        return bt(new Zs(new D(a, b), c), d)
    };
    k.Xe = function() {
        return Dq(Fc(this.g.traffickingParameters))
    };
    k.Ye = function() {
        return this.g.traffickingParameters
    };
    k.cf = function() {
        return this.g.vastMediaBitrate
    };
    k.Se = function() {
        return this.g.mediaUrl
    };
    k.Ve = function() {
        return this.g.surveyUrl
    };
    k.Pe = function() {
        return this.g.dealId
    };
    k.bf = function() {
        return (this.g.universalAdIds || []).map(function(a) {
            return new ht(a.adIdValue, a.adIdRegistry)
        })
    };
    k.af = function() {
        return this.g.universalAdIdValue
    };
    k.$e = function() {
        return this.g.universalAdIdRegistry
    };
    k.Ue = function() {
        return this.g.skipTimeOffset
    };
    k.qd = function() {
        return this.g.disableUi
    };
    var jt = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        Yg.call(this, a);
        this.B = b;
        this.A = c
    };
    p(jt, Yg);
    jt.prototype.C = function() {
        return this.B
    };
    jt.prototype.F = function() {
        return this.A
    };

    function kt(a) {
        a = Sp(a, nk() ? "https" : window.location.protocol);
        if (nk()) lt(a);
        else try {
            a && (Bp(a) ? Fp(a) : Jp(a))
        } catch (b) {}
    }

    function lt(a) {
        (new Aq).get(a, new Op).then(function() {}, function() {})
    };
    var mt = function(a, b, c) {
        a = Error.call(this);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        this.l = b;
        this.h = c
    };
    p(mt, Error);
    mt.prototype.toString = function() {
        return "AdError " + this.h + ": " + this.l + (null != this.g ? " Caused by: " + this.g : "")
    };
    var nt = function(a, b) {
            this.message = a;
            this.errorCode = b
        },
        ot = new nt("Failed to initialize ad playback element before starting ad playback.", 400),
        pt = new nt("The provided {0} information: {1} is invalid.", 1101);

    function qt(a, b, c) {
        var d = void 0 === b ? null : b;
        if (!(d instanceof mt)) {
            var e = a.errorCode,
                f = a.message,
                g = Array.prototype.slice.call(arguments, 2);
            if (0 < g.length)
                for (var h = 0; h < g.length; h++) f = f.replace(new RegExp("\\{" + h + "\\}", "ig"), g[h]);
            e = new mt("adPlayError", f, e);
            e.g = d;
            d = e
        }
        return d
    };
    var rt = function() {
        N.call(this);
        this.I = !1;
        this.g = null;
        this.C = this.H = this.L = !1;
        this.h = 0;
        this.A = [];
        this.F = !1;
        this.O = this.N = Infinity;
        this.l = 0;
        this.B = new S(this);
        this.K = {}
    };
    p(rt, N);
    var ut = function(a, b) {
            null == b || a.I || (a.g = b, tt(a), a.I = !0)
        },
        wt = function(a) {
            null != a.g && a.I && (vt(a), a.I = !1, a.H = !1, a.C = !1, a.h = 0, a.A = [], a.F = !1)
        },
        tt = function(a) {
            vt(a);
            !(a.g instanceof N) && "ontouchstart" in document.documentElement && ed ? (a.K = {
                touchstart: function(b) {
                    a.H = !0;
                    a.h = b.touches.length;
                    a.l && (window.clearTimeout(a.l), a.l = 0, a.L = !0);
                    a.F = xt(a, b.touches) || 1 != b.touches.length;
                    a.F ? (a.N = Infinity, a.O = Infinity) : (a.N = b.touches[0].clientX, a.O = b.touches[0].clientY);
                    b = b.touches;
                    a.A = [];
                    for (var c = 0; c < b.length; c++) a.A.push(b[c].identifier)
                },
                touchmove: function(b) {
                    a.h = b.touches.length;
                    if (!Zp(8) || Math.pow(b.changedTouches[0].clientX - a.N, 2) + Math.pow(b.changedTouches[0].clientY - a.O, 2) > Math.pow(5, 2)) a.C = !0
                },
                touchend: function(b) {
                    return void yt(a, b)
                }
            }, ob(a.K, function(b, c) {
                a.g.addEventListener(c, b, !1)
            })) : a.B.P(a.g, "click", a.T)
        },
        vt = function(a) {
            a.B.Ca(a.g, "click", a.T);
            ob(a.K, function(b, c) {
                this.g.removeEventListener(c, b, !1)
            }, a);
            a.K = {}
        },
        yt = function(a, b) {
            !a.H || 1 != a.h || a.C || a.L || a.F || !xt(a, b.changedTouches) || (a.l = window.setTimeout(function() {
                    return void zt(a)
                },
                300));
            a.h = b.touches.length;
            0 == a.h && (a.H = !1, a.C = !1, a.A = []);
            a.L = !1
        };
    rt.prototype.T = function() {
        zt(this)
    };
    var xt = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.A.includes(b[c].identifier)) return !0;
            return !1
        },
        zt = function(a) {
            a.l = 0;
            a.dispatchEvent(new Yg("click"))
        };
    rt.prototype.R = function() {
        wt(this);
        this.B.V();
        this.B = null;
        N.prototype.R.call(this)
    };
    var At = function(a, b, c) {
        this.h = c;
        0 == b.length && (b = [
            []
        ]);
        this.g = b.map(function(d) {
            d = a.concat(d);
            for (var e = [], f = 0, g = 0; f < d.length;) {
                var h = d[f++];
                if (128 > h) e[g++] = String.fromCharCode(h);
                else if (191 < h && 224 > h) {
                    var l = d[f++];
                    e[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
                } else if (239 < h && 365 > h) {
                    l = d[f++];
                    var m = d[f++],
                        n = d[f++];
                    h = ((h & 7) << 18 | (l & 63) << 12 | (m & 63) << 6 | n & 63) - 65536;
                    e[g++] = String.fromCharCode(55296 + (h >> 10));
                    e[g++] = String.fromCharCode(56320 + (h & 1023))
                } else l = d[f++], m = d[f++], e[g++] = String.fromCharCode((h & 15) << 12 |
                    (l & 63) << 6 | m & 63)
            }
            return new RegExp(e.join(""))
        })
    };
    At.prototype.match = function(a) {
        var b = this;
        return this.g.some(function(c) {
            c = a.match(c);
            return null == c ? !1 : !b.h || 1 <= c.length && "3.393.1" == c[1] || 2 <= c.length && "3.393.1" == c[2] ? !0 : !1
        })
    };
    var Bt = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 106, 115, 47, 40, 115, 100, 107, 108, 111, 97, 100, 101, 114, 124, 99, 111, 114, 101, 41, 47],
        Ct = [104, 116, 116, 112, 115, 63, 58, 47, 47, 115, 48, 92, 46, 50, 109, 100, 110, 92, 46, 110, 101, 116, 47, 105, 110, 115, 116, 114, 101, 97, 109, 47, 104, 116, 109, 108, 53, 47],
        Dt = [104, 116, 116, 112, 115, 63, 58, 47, 47, 105, 109, 97, 115, 100, 107, 92, 46, 103, 111, 111, 103, 108, 101, 97, 112, 105, 115, 92, 46, 99, 111, 109, 47, 112, 114, 101, 114, 101, 108, 101, 97, 115,
            101, 47, 106, 115, 47, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 47
        ],
        Et = [
            [105, 109, 97, 51, 92, 46, 106, 115],
            [105, 109, 97, 51, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Ft = [
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [98, 114, 105, 100, 103, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44,
                50, 125, 92, 46, 104, 116, 109, 108
            ],
            [98, 114, 105, 100, 103, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ],
        Gt = [
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 92, 46, 106, 115],
            [111, 117, 116, 115, 116, 114, 101, 97, 109, 95, 100, 101, 98, 117, 103, 92, 46, 106, 115]
        ],
        Ht = new At(Bt, Et, !1),
        It = new At(Bt, Ft, !0),
        Jt = new At(Ct, Et, !1),
        Kt = new At(Ct, Ft, !0),
        Lt = new At(Dt, Et, !1),
        Mt = new At([104, 116, 116, 112, 115, 63, 58, 47, 47, 40, 112, 97, 103, 101, 97, 100, 50, 124, 116, 112, 99, 41, 92, 46, 103, 111, 111, 103, 108, 101, 115,
            121, 110, 100, 105, 99, 97, 116, 105, 111, 110, 92, 46, 99, 111, 109, 47, 112, 97, 103, 101, 97, 100, 47, 40, 103, 97, 100, 103, 101, 116, 115, 124, 106, 115, 41, 47
        ], [], !1),
        Nt = new At(Bt, [
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 91, 48, 45, 57, 93, 43, 92, 46, 91, 48, 45, 57, 92, 46, 93, 43, 41, 95, 100, 101, 98, 117, 103, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44,
                51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108
            ],
            [100, 97, 105, 95, 105, 102, 114, 97, 109, 101, 40, 95, 40, 91, 97, 45, 122, 48, 45, 57, 93, 41, 123, 50, 44, 51, 125, 41, 123, 48, 44, 50, 125, 92, 46, 104, 116, 109, 108]
        ], !0),
        Ot = new At(Bt, Gt, !1),
        Pt = new At(Dt, Gt, !1),
        Qt = {
            Tg: Ht,
            Rg: It,
            gh: Jt,
            fh: Kt,
            Ug: Lt,
            Jh: Mt,
            Sg: Nt,
            nh: Ot,
            oh: Pt
        };
    var Rt = function() {
            var a = E(),
                b = document;
            return new ep(a.parent == a ? a.location.href : b.referrer)
        },
        St = function(a, b) {
            rp(a, "url", "");
            try {
                var c = 2083 - a.toString().length - 1;
                if (0 >= c) return a.toString();
                for (var d = b.slice(0, c), e = encodeURIComponent(d), f = c; 0 < f && e.length > c;) d = b.slice(0, f--), e = encodeURIComponent(d);
                rp(a, "url", d)
            } catch (g) {}
            return a.toString()
        };
    var Tt = function() {
        this.g = .01 > Math.random();
        this.h = Math.floor(4503599627370496 * Math.random())
    };
    Tt.prototype.report = function(a, b, c) {
        b = void 0 === b ? {} : b;
        if (null == q.G_testRunner && (this.g || (void 0 === c ? 0 : c))) {
            b.lid = a;
            b.sdkv = Ns();
            a = Gg().sort().join(",");
            Rb(Fc(a)) || (b.e = a);
            b = Ut(this, b);
            var d = new ep("http://pagead2.googlesyndication.com/pagead/gen_204");
            ob(b, function(e, f) {
                rp(d, f, null == e ? "" : "boolean" == typeof e ? e ? "t" : "f" : "" + e)
            }, this);
            b = Rt();
            fp(d, b.o);
            b = d.toString();
            a = d.g.get("url");
            null != a && sc() && 2083 < b.length && (b = St(d, a));
            kt(b)
        }
    };
    var Ut = function(a, b) {
        b.id = "ima_html5";
        var c = Rt();
        b.c = a.h;
        b.domain = c.h;
        return b
    };
    Aa(Tt);
    var Vt = function(a, b, c, d, e) {
        e = void 0 === e ? "" : e;
        Yg.call(this, a);
        this.da = b;
        this.ga = c;
        this.Ub = d;
        this.zd = e
    };
    p(Vt, Yg);
    Vt.prototype.toString = function() {
        return ""
    };
    var Wt = null,
        Xt = function() {
            N.call(this);
            this.g = null;
            this.F = new S(this);
            Re(this, this.F);
            this.h = new Map;
            this.A = new Map;
            this.l = this.B = !1;
            this.C = null
        },
        Yt;
    p(Xt, N);
    var Zt = function() {
        null == Wt && (Wt = new Xt);
        return Wt
    };
    Xt.prototype.Hd = function() {};
    var Qo = function(a, b, c) {
        var d = {};
        d.queryId = b;
        d.viewabilityData = c;
        a.g && a.g.send("activityMonitor", "viewabilityMeasurement", d)
    };
    Xt.prototype.destroy = function() {
        this.F.Ca(this.g, "activityMonitor", this.H);
        this.l = !1;
        this.h.clear();
        this === Yt && (Yt = null)
    };
    Xt.prototype.R = function() {
        this.destroy();
        N.prototype.R.call(this)
    };
    var au = function(a) {
            if (null == a) return !1;
            if ((bd || dd) && null != a.webkitDisplayingFullscreen) return a.webkitDisplayingFullscreen;
            a = $t(a);
            var b = window.screen.availHeight || window.screen.height;
            return 0 >= (window.screen.availWidth || window.screen.width) - a.width && 42 >= b - a.height
        },
        $t = function(a) {
            var b = {
                left: a.offsetLeft,
                top: a.offsetTop,
                width: a.offsetWidth,
                height: a.offsetHeight
            };
            try {
                Da(a.getBoundingClientRect) && je(Wd(a), a) && (b = a.getBoundingClientRect())
            } catch (c) {}
            return b
        },
        bu = function(a, b, c, d, e) {
            e = void 0 === e ? {} :
                e;
            if (a.l) {
                d && null == e.opt_osdId && (e.opt_osdId = d);
                if (a.C) return a.C(b, c, e);
                if (a = d ? a.A.get(d) : U.C) null == e.opt_fullscreen && (e.opt_fullscreen = au(a)), null == e.opt_adElement && (e.opt_adElement = a);
                return Sf.$a(469, Ma(To, b, c, e), void 0) || {}
            }
            return {}
        },
        cu = function(a, b) {
            var c = String(Math.floor(1E9 * Math.random()));
            a.A.set(c, b);
            if (Cg(Sg)) try {
                Di(function(d) {
                    if (a.g) {
                        var e = {};
                        e.engagementString = d;
                        a.g.send("activityMonitor", "engagementData", e)
                    }
                }, function() {
                    return b
                })
            } catch (d) {}
            0 != U.g && Ro(Go.D(), c, a);
            return c
        },
        du = function(a,
            b, c) {
            if (c) a.h.get(c) == b && a.h.delete(c);
            else {
                var d = [];
                a.h.forEach(function(e, f) {
                    e == b && d.push(f)
                });
                d.forEach(a.h.delete, a.h)
            }
        },
        Mo = function(a, b) {
            a = a.h.get(b);
            return Da(a) ? a() : {}
        },
        eu = function(a) {
            if (Da(window.Goog_AdSense_Lidar_getUrlSignalsArray)) {
                var b = {};
                b.pageSignals = window.Goog_AdSense_Lidar_getUrlSignalsArray();
                a.g.send("activityMonitor", "pageSignals", b)
            }
        };
    Xt.prototype.H = function(a) {
        var b = a.ga,
            c = b.queryId,
            d = {},
            e = null;
        d.eventId = b.eventId;
        switch (a.da) {
            case "getPageSignals":
                eu(this);
                break;
            case "reportVastEvent":
                e = b.vastEvent;
                a = b.osdId;
                var f = {};
                f.opt_fullscreen = b.isFullscreen;
                b.isOverlay && (f.opt_bounds = b.overlayBounds);
                d.viewabilityData = bu(this, e, c, a, f);
                this.g.send("activityMonitor", "viewability", d);
                break;
            case "fetchAdTagUrl":
                c = {}, c.eventId = b.eventId, a = b.osdId, wb(b, "isFullscreen") && (e = b.isFullscreen), wb(b, "loggingId") && (b = b.loggingId, c.loggingId = b, Tt.D().report(43, {
                    step: "beforeLookup",
                    logid: b,
                    time: Date.now()
                })), c.engagementString = fu(this, a, e), this.g && this.g.send("activityMonitor", "engagement", c)
        }
    };
    var fu = function(a, b, c) {
        var d = b ? a.A.get(b) : U.C;
        a = {};
        null != c && (a.fullscreen = c);
        c = "";
        try {
            c = Ci(function() {
                return d
            }, a)
        } catch (e) {
            c = "sdktle;" + Dc(e.name, 12) + ";" + Dc(e.message, 40)
        }
        return c
    };
    r("ima.common.getVideoMetadata", function(a) {
        return Mo(Zt(), a)
    }, void 0);
    r("ima.common.triggerViewabilityMeasurementUpdate", function(a, b) {
        Qo(Zt(), a, b)
    }, void 0);
    var gu = Wc ? Qb(Kb(Lb('javascript:""'))) : Qb(Kb(Lb("about:blank")));
    Pb(gu);
    var hu = Wc ? Qb(Kb(Lb('javascript:""'))) : Qb(Kb(Lb("javascript:undefined")));
    Pb(hu);
    var iu = function(a) {
        Yg.call(this, a)
    };
    p(iu, Yg);
    var ju = function() {
            this.loadVideoTimeout = 8E3;
            this.autoAlign = !0;
            this.bitrate = -1;
            this.uiElements = null;
            this.enablePreloading = this.disableClickThrough = !1;
            this.mimeTypes = null;
            this.useStyledNonLinearAds = this.useStyledLinearAds = this.useLearnMoreButton = this.restoreCustomPlaybackStateOnAdBreakComplete = !1;
            this.playAdsAfterTime = -1;
            this.useVideoAdUi = !0;
            this.disableUi = !1
        },
        ku = function(a, b) {
            var c = {};
            Object.assign(c, a);
            b && (c.useClickElement = !1, c.disableClickThrough = !0);
            return c
        };
    var lu = function() {
        N.call(this);
        this.g = new Zo;
        this.h = null;
        this.l = new Map;
        this.A = new S(this);
        Re(this, this.A);
        this.F = new Map;
        this.C = null;
        this.B = -1;
        O.D().l = !0;
        Qs()
    };
    x(lu, N);
    var mu = null,
        nu = function() {
            null == mu && (mu = new lu);
            return mu
        },
        ou = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            nu().dispatchEvent(new iu("measurable_impression", null, c))
        },
        pu = function(a, b) {
            var c = {};
            c.queryId = a;
            c.viewabilityString = b;
            nu().dispatchEvent(new iu("viewable_impression", null, c))
        },
        qu = function(a, b, c) {
            var d = {};
            d.queryId = a;
            d.viewabilityString = b;
            d.eventName = c;
            nu().dispatchEvent(new iu("externalActivityEvent", null, d))
        };
    lu.prototype.destroy = function() {
        this.A.Ca(this.h, "activityMonitor", this.H);
        this.h = null
    };
    lu.prototype.H = function(a) {
        var b = a.ga;
        switch (a.da) {
            case "appStateChanged":
                Go.D();
                b = b.appState;
                a = Q.D();
                a.J != b && (a.J = b, (a = Em.D().g) && Kk(a.g, !b));
                break;
            case "externalActivityEvent":
                qu(b.queryId, b.viewabilityString, b.eventName);
                break;
            case "measurableImpression":
                ou(b.queryId, b.viewabilityString);
                break;
            case "viewableImpression":
                pu(b.queryId, b.viewabilityString);
                break;
            case "engagementData":
                b = b.engagementString;
                nu().C = b;
                nu().B = u();
                break;
            case "viewability":
                a = b.queryId;
                var c = b.vastEvent;
                this.l.get(a) && "start" ==
                    c && this.l.get(a);
                a = b.eventId;
                clearTimeout(a);
                if (c = this.g.get(a)) bp(this.g, a), c(b.viewabilityData);
                break;
            case "viewabilityMeasurement":
                Go.D();
                O.D();
                break;
            case "engagement":
                a = b.eventId;
                clearTimeout(a);
                c = this.g.get(a);
                if (Tt.D().g) {
                    var d = -1;
                    this.I && (d = u() - this.I);
                    var e = !1;
                    c || (e = !0);
                    wb(b, "loggingId") && Tt.D().report(43, {
                        step: "receivedResponse",
                        time: u(),
                        timeout: e,
                        logid: b.loggingId,
                        timediff: d
                    })
                }
                c && (bp(this.g, a), c(b.engagementString))
        }
    };
    r("ima.bridge.getNativeViewability", function(a, b) {
        nu();
        b({})
    }, void 0);
    r("ima.bridge.getVideoMetadata", function(a) {
        return (a = nu().F.get(a)) ? a() : {}
    }, void 0);
    r("ima.bridge.triggerViewEvent", pu, void 0);
    r("ima.bridge.triggerMeasurableEvent", ou, void 0);
    r("ima.bridge.triggerExternalActivityEvent", qu, void 0);
    Object.entries({
        "application/dash+xml": 1,
        "application/x-javascript": 2,
        "application/x-mpegurl": 3,
        "application/javascript": 4,
        "audio/ogg": 5,
        "audio/mp4": 6,
        "audio/mpeg": 7,
        "audio/wav": 8,
        "text/javascript": 9,
        "video/m4v": 10,
        "video/ogg": 11,
        "video/x-flv": 12,
        "video/3gpp": 13,
        "video/mpt2": 14,
        "video/mp4": 15,
        "video/mpeg": 16,
        "video/quicktime": 17,
        "video/webm": 18
    });
    var ru = function(a, b) {
        dt.call(this, b);
        this.B = a;
        this.g = null;
        this.C = new S(this);
        this.C.P(E(), "message", this.F)
    };
    p(ru, dt);
    var tu = function(a) {
        if (null == a || "string" !== typeof a || 0 != a.lastIndexOf("ima://", 0)) return null;
        a = a.substr(6);
        try {
            return JSON.parse(a)
        } catch (b) {
            return null
        }
    };
    ru.prototype.sendMessage = function(a, b, c) {
        null != this.g && null != this.g.postMessage && this.g.postMessage(uu(this, a, b, c), "*");
        null != this.g && null == this.g.postMessage && Tt.D().report(11)
    };
    ru.prototype.R = function() {
        Qe(this.C);
        this.g = null;
        dt.prototype.R.call(this)
    };
    ru.prototype.F = function(a) {
        a = a.h;
        var b = tu(a.data);
        if (vu(this, b)) {
            if (null == this.g) this.g = a.source, this.h || this.connect();
            else if (this.g != a.source) return;
            vu(this, b) && this.dispatchEvent(new Vt(b.name, b.type, b.data || {}, b.sid, a.origin))
        }
    };
    var uu = function(a, b, c, d) {
            var e = {};
            e.name = b;
            e.type = c;
            null != d && (e.data = d);
            e.sid = a.A;
            e.channel = a.B;
            return "ima://" + sg(e)
        },
        vu = function(a, b) {
            if (null == b) return !1;
            var c = b.channel;
            if (null == c || c != a.B) return !1;
            b = b.sid;
            return null == b || "*" != a.A && b != a.A ? !1 : !0
        };
    var wu = Qb(Kb(Lb("http://pagead2.googlesyndication.com/omsdk/releases/live/omsdk-v1.js")));

    function xu(a, b) {
        if (!b) throw Error("Value for " + a + " is undefined, null or blank.");
        if ("string" !== typeof b && !(b instanceof String)) throw Error("Value for " + a + " is not a string.");
        if ("" === b.trim()) throw Error("Value for " + a + " is empty string.");
    }

    function yu(a, b) {
        if (null == b) throw Error("Value for " + a + " is undefined or null");
    }

    function zu(a, b) {
        if (null == b) throw Error(a + " must not be null or undefined.");
        if ("number" !== typeof b || isNaN(b)) throw Error("Value for " + a + " is not a number");
    };

    function Au() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.3.3-google_20200427")
    }

    function Bu() {
        for (var a = ["1", "3", "3"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var Cu = {
        LOADED: "loaded",
        ec: "start",
        FIRST_QUARTILE: "firstQuartile",
        MIDPOINT: "midpoint",
        THIRD_QUARTILE: "thirdQuartile",
        COMPLETE: "complete",
        dc: "pause",
        Xc: "resume",
        Vc: "bufferStart",
        Uc: "bufferFinish",
        SKIPPED: "skipped",
        be: "volumeChange",
        vh: "playerStateChange",
        ug: "adUserInteraction"
    };
    var Du = function(a, b, c, d) {
            this.h = a;
            this.method = b;
            this.version = c;
            this.g = d
        },
        Eu = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        Fu = function(a) {
            return new Du(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        },
        Gu = function(a) {
            var b = {};
            b = (b.omid_message_guid = a.h, b.omid_message_method = a.method, b.omid_message_version = a.version, b);
            void 0 !== a.g && (b.omid_message_args = a.g);
            return b
        };
    var Hu = function(a) {
        this.h = a
    };

    function Iu(a, b) {
        return a && (a[b] || (a[b] = {}))
    }

    function Ju(a, b) {
        var c;
        if (c = void 0 === c ? "undefined" === typeof omidExports ? null : omidExports : c) a = a.split("."), a.slice(0, a.length - 1).reduce(Iu, c)[a[a.length - 1]] = b
    };

    function Ku() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function Lu(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c - 0] = arguments[c];
        Mu(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(ia(b))));
        }, function() {
            return console.error.apply(console, ia(b))
        })
    }

    function Mu(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var Nu = function(a) {
        try {
            return a.frames ? !!a.frames.omid_v1_present : !1
        } catch (b) {
            return !1
        }
    };
    var Ou = function(a) {
        this.h = a;
        this.handleExportedMessage = Ou.prototype.l.bind(this)
    };
    p(Ou, Hu);
    Ou.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.handleExportedMessage(Gu(a), this)
    };
    Ou.prototype.l = function(a, b) {
        Eu(a) && this.g && this.g(Fu(a), b)
    };
    var Pu = eval("this"),
        Qu = function() {
            if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
            if ("undefined" !== typeof global && global) return global;
            if ("undefined" !== typeof window && window) return window;
            if ("undefined" !== typeof Pu && Pu) return Pu;
            throw Error("Could not determine global object context.");
        }();

    function Ru(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function Su(a) {
        if (a === Qu) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var Tu = function(a, b) {
        this.h = b = void 0 === b ? Qu : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                Eu(e) && d.source && c.g && c.g(Fu(e), d.source)
            }
        })
    };
    p(Tu, Hu);
    Tu.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.h : b;
        if (!b) throw Error("Message destination must be defined at construction time or when sending the message.");
        b.postMessage(Gu(a), "*")
    };
    var Uu = ["omid", "v1_SessionServiceCommunication"];

    function Vu(a) {
        return Uu.reduce(function(b, c) {
            return b && b[c]
        }, a)
    };
    Ju("OmidSessionClient.Partner", function(a, b) {
        xu("Partner.name", a);
        xu("Partner.version", b);
        this.name = a;
        this.version = b
    });
    var Wu = function(a, b, c) {
        xu("VerificationScriptResource.resourceUrl", a);
        this.h = a;
        this.l = b;
        this.g = c
    };
    Wu.prototype.toJSON = function() {
        return {
            resourceUrl: this.h,
            vendorKey: this.l,
            verificationParameters: this.g
        }
    };
    Ju("OmidSessionClient.VerificationScriptResource", Wu);
    Ju("OmidSessionClient.Context", function(a, b, c) {
        c = void 0 === c ? null : c;
        yu("Context.partner", a);
        this.g = a;
        this.l = b;
        this.h = c
    });
    var Xu = {
            sessionError: "reportError"
        },
        Yu = Object.keys(Cu).map(function(a) {
            return Cu[a]
        }),
        Zu = ["impressionOccurred"],
        $u = function() {
            var a = void 0 === a ? Qu : a;
            this.g = a.omidSessionInterface
        };
    $u.prototype.sendMessage = function(a, b, c) {
        "registerSessionObserver" == a && (c = [b]);
        Xu[a] && (a = Xu[a]);
        b = this.g;
        0 <= Zu.indexOf(a) && (b = b.adEvents);
        0 <= Yu.indexOf(a) && (b = b.videoEvents);
        b = b[a];
        if (!b) throw Error("Unrecognized method name: " + a + ".");
        b.apply(null, ia(c))
    };
    var cv = function(a, b, c) {
            yu("AdSession.context", a);
            this.F = a;
            if (!b) {
                var d;
                "undefined" === typeof d && "undefined" !== typeof window && window && (d = window);
                d = Ru(d) ? d : Qu;
                var e = void 0 === e ? Nu : e;
                a: {
                    b = ha([d, Ru(d) ? d.top : Qu]);
                    for (var f = b.next(); !f.done; f = b.next()) {
                        b: {
                            var g = d;f = f.value;
                            var h = e;
                            if (!Su(f)) try {
                                var l = Vu(f);
                                if (l) {
                                    var m = new Ou(l);
                                    break b
                                }
                            } catch (n) {}
                            m = h(f) ? new Tu(g, f) : null
                        }
                        if (g = m) {
                            b = g;
                            break a
                        }
                    }
                    b = null
                }
            }
            this.h = b;
            this.M = c || new $u;
            this.C = this.A = this.o = !1;
            this.B = this.J = null;
            this.l = {};
            this.h && (this.h.g = this.H.bind(this));
            this.g("setClientInfo", "1.3.3-google_20200427", this.F.g.name, this.F.g.version);
            av(this, a.l);
            (a = a.h) && this.g("setContentUrl", a);
            bv(this)
        },
        dv = function(a, b) {
            a.sendMessage("registerSessionObserver", b)
        };
    cv.prototype.error = function(a, b) {
        this.g("sessionError", a, b)
    };
    cv.prototype.g = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.sendMessage.apply(this, [a, null].concat(ia(c)))
    };
    cv.prototype.sendMessage = function(a, b, c) {
        for (var d = [], e = 2; e < arguments.length; ++e) d[e - 2] = arguments[e];
        if (this.h) e = Ku(), b && (this.l[e] = b), d = new Du(e, "SessionService." + a, "1.3.3-google_20200427", Au() && Bu() ? d : JSON.stringify(d)), this.h.sendMessage(d);
        else if (null != this.M.g) try {
            this.M.sendMessage(a, b, d)
        } catch (f) {
            Lu("Failed to communicate with SessionInterface with error:"), Lu(f)
        }
    };
    cv.prototype.H = function(a) {
        var b = a.method,
            c = a.h;
        a = a.g;
        if ("response" === b && this.l[c]) {
            var d = Au() && Bu() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.l[c].apply(this, d)
        }
        "error" === b && window.console && Lu(a)
    };
    var av = function(a, b) {
            b && (b = b.map(function(c) {
                return c.toJSON()
            }), a.g("injectVerificationScriptResources", b))
        },
        bv = function(a) {
            dv(a, function(b) {
                "sessionStart" === b.type && (a.C = !0, a.J = b.data.creativeType, a.B = b.data.impressionType);
                "sessionFinish" === b.type && (a.C = !1)
            })
        };
    Ju("OmidSessionClient.AdSession", cv);
    var ev = function(a) {
        yu("AdEvents.adSession", a);
        try {
            if (a.o) throw Error("AdEvents already registered.");
            a.o = !0;
            a.g("registerAdEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has an ad events instance registered");
        }
    };
    ev.prototype.loaded = function(a) {
        a = void 0 === a ? null : a;
        var b = this.g;
        if ("definedByJavaScript" === b.J) throw Error("Creative type has not been redefined");
        if ("definedByJavaScript" === b.B) throw Error("Impression type has not been redefined");
        a ? this.g.g("loaded", a.toJSON()) : this.g.g("loaded")
    };
    Ju("OmidSessionClient.AdEvents", ev);
    var fv = function(a) {
        yu("MediaEvents.adSession", a);
        try {
            if (a.A) throw Error("MediaEvents already registered.");
            a.A = !0;
            a.g("registerMediaEvents");
            this.g = a
        } catch (b) {
            throw Error("AdSession already has a media events instance registered");
        }
    };
    fv.prototype.loaded = function(a) {
        yu("MediaEvents.loaded.vastProperties", a);
        this.g.g("loaded", a.toJSON())
    };
    fv.prototype.start = function(a, b) {
        zu("MediaEvents.start.duration", a);
        zu("MediaEvents.start.mediaPlayerVolume", b);
        if (0 > b || 1 < b) throw Error("Value for MediaEvents.start.mediaPlayerVolume is outside the range [0,1]");
        this.g.g("start", a, b)
    };
    fv.prototype.pause = function() {
        this.g.g("pause")
    };
    fv.prototype.resume = function() {
        this.g.g("resume")
    };
    Ju("OmidSessionClient.MediaEvents", fv);
    var iv = function(a, b) {
            gv ? a.srcdoc = b : (a = a.contentWindow) && hv(a.document, b)
        },
        gv = Zc && "srcdoc" in ee(document, "IFRAME"),
        hv = function(a, b) {
            a.open("text/html", "replace");
            a.write(b);
            a.close()
        };

    function jv(a) {
        return (a = ke(a)) && a.omidSessionInterface ? a.omidSessionInterface : null
    }

    function kv(a, b) {
        var c = ge("IFRAME", {
            name: b,
            sandbox: "allow-scripts allow-same-origin",
            style: "display: none"
        });
        a.appendChild(c);
        a = "<script src=" + wu.Fa() + ">\x3c/script>";
        b = new Promise(function(d, e) {
            c.addEventListener("load", function() {
                jv(c) ? d(c) : e()
            })
        });
        iv(c, a);
        return b
    };
    var lv = function(a, b) {
        N.call(this);
        this.h = jv(a);
        this.g = b
    };
    p(lv, N);
    var nv = function(a) {
            try {
                a.h.registerSessionObserver(function(b) {
                    "sessionStart" == b.type ? mv(a, a.g) : "sessionFinish" == b.type && nv(a)
                })
            } catch (b) {
                a.dispatchEvent(new Event("error"))
            }
        },
        mv = function(a, b) {
            try {
                a.h.setVideoElement(b)
            } catch (c) {
                a.dispatchEvent(new Event("error"))
            }
        };
    var ov = function(a) {
        this.g = a
    };
    ov.prototype.h = function() {
        return this.g
    };
    var pv = function(a) {
            this.g = a;
            this.l = "";
            this.h = -1;
            this.o = !1
        },
        rv = function(a, b) {
            if (0 <= a.h) {
                var c = null == b ? function() {} : b,
                    d = function() {
                        qv(a, c);
                        a.g.removeEventListener("loadedmetadata", d, !1)
                    };
                a.g.addEventListener("loadedmetadata", d, !1);
                a.g.src = a.l;
                a.g.load()
            } else null != b && b()
        },
        qv = function(a, b) {
            var c = 0 < a.g.seekable.length;
            a.o ? c ? (a.g.currentTime = a.h, tv(a), b()) : setTimeout(function() {
                return qv(a, b)
            }, 100) : (tv(a), b())
        },
        tv = function(a) {
            a.h = -1;
            a.l = "";
            a.o = !1
        };
    var uv = function(a) {
        N.call(this);
        this.g = a;
        this.Y = null;
        this.B = new pv(a);
        this.A = 0;
        this.H = this.N = this.O = this.aa = this.F = !1;
        this.I = this.l = null;
        this.L = new D(this.g.offsetWidth, this.g.offsetHeight);
        this.$ = au(this.g);
        this.X = !1
    };
    p(uv, N);
    uv.prototype.la = function() {
        var a = this.B;
        a.l = a.g.currentSrc;
        a.o = 0 < a.g.seekable.length;
        a.h = a.g.ended ? -1 : a.g.currentTime
    };
    uv.prototype.W = function(a) {
        rv(this.B, a)
    };
    uv.prototype.load = function(a, b) {
        var c = I.D().g;
        c.T = !0;
        gg(c);
        pg(I.D(), "hvd_lc");
        c = I.D();
        var d = this.L.width + "x" + this.L.height;
        null != d && fg(c.g, "ps", d);
        vv(this);
        this.O = !1;
        if (b)
            if (pg(I.D(), "hvd_ad"), b instanceof Np) {
                if (pg(I.D(), "hvd_mad"), b = b.h) {
                    pg(I.D(), "hvd_admu");
                    wv(this, b);
                    return
                }
            } else if (b instanceof Mp) {
            pg(I.D(), "hvd_dad");
            c = b.getVideoUrl();
            d = b.l;
            var e = b.C,
                f = b.h,
                g = b.B,
                h = b.g;
            if (c && d && e && f && g && h && (pg(I.D(), "hvd_addu"), b.A)) {
                pg(I.D(), "hvd_admse");
                b = e + '; codecs="' + g + '"';
                f = f + '; codecs="' + h + '"';
                if (Mq() &&
                    Mq() && MediaSource.isTypeSupported(b) && Mq() && MediaSource.isTypeSupported(f)) {
                    pg(I.D(), "hvd_ymse");
                    pg(I.D(), "hvd_mse");
                    this.Y = new ms(this.g, [new Nq(c, b, 35E4), new Nq(d, f, 82E3)]);
                    Re(this, this.Y);
                    a = this.g;
                    b = this.Y;
                    b.g || (b.g = window.URL.createObjectURL(b.h));
                    b = b.g;
                    a.src = b;
                    this.g.load();
                    return
                }
                pg(I.D(), "hvd_nmse")
            }
        } else pg(I.D(), "hvd_uad");
        a ? wv(this, a) : (pg(I.D(), "hvd_vn"), this.g.load())
    };
    var wv = function(a, b) {
            pg(I.D(), "hvd_src");
            a.g.src = b;
            a.g.load()
        },
        xv = function(a) {
            vv(a);
            a.O = !1;
            "removeAttribute" in a.g ? a.g.removeAttribute("src") : a.g.src = "";
            a.g.load()
        };
    uv.prototype.getVideoUrl = function() {
        return this.g.src
    };
    uv.prototype.setVolume = function(a) {
        this.g.volume = a;
        this.g.muted = 0 == a ? !0 : !1
    };
    uv.prototype.getVolume = function() {
        return this.isMuted() ? 0 : this.g.volume
    };
    var yv = function(a) {
        a.X = !1;
        a.O || sc() ? (a.H = !1, a.l = a.g.play(), null != a.l && (a.I = null, a.l.then(function() {
            a.l = null;
            a.yd(a.I);
            a.I = null
        }).catch(function(b) {
            a.l = null;
            var c = "";
            null != b && null != b.name && (c = b.name);
            "AbortError" == c || "NotAllowedError" == c ? a.dispatchEvent("autoplayDisallowed") : a.Dc()
        }))) : a.H = !0
    };
    uv.prototype.pause = function() {
        null == this.l && (this.X = !0, this.g.pause())
    };
    uv.prototype.isMuted = function() {
        return this.g.muted
    };
    var zv = function(a) {
        (bd || dd) && a.g.webkitDisplayingFullscreen && a.g.webkitExitFullscreen()
    };
    uv.prototype.getCurrentTime = function() {
        return this.g.currentTime
    };
    uv.prototype.getDuration = function() {
        return isNaN(this.g.duration) ? -1 : this.g.duration
    };
    uv.prototype.R = function() {
        Av(this);
        N.prototype.R.call(this)
    };
    var Bv = function(a) {
            Av(a);
            a.h = new S(a);
            a.h.P(a.g, Bs, a.pa);
            a.h.P(a.g, "ended", a.Yf);
            a.h.P(a.g, "webkitbeginfullscreen", a.Ic);
            a.h.P(a.g, "webkitendfullscreen", a.xd);
            a.h.P(a.g, "loadedmetadata", a.$f);
            a.h.P(a.g, "pause", a.cg);
            a.h.P(a.g, "playing", a.yd);
            a.h.P(a.g, "timeupdate", a.Wf);
            a.h.P(a.g, "volumechange", a.fg);
            a.h.P(a.g, "error", a.Dc);
            a.h.P(a.g, td || ed && !Zp(8) ? "loadeddata" : "canplay", a.ag);
            a.K = new rt;
            a.h.P(a.K, "click", a.Vf);
            ut(a.K, a.g);
            a.T = new ii(1E3);
            a.h.P(a.T, "tick", a.Zf);
            a.T.start()
        },
        Av = function(a) {
            null != a.K &&
                (wt(a.K), a.K = null);
            null != a.T && a.T.V();
            null != a.h && (a.h.V(), a.h = null);
            vv(a)
        },
        vv = function(a) {
            a.aa = !1;
            a.N = !1;
            a.F = !1;
            a.H = !1;
            a.A = 0;
            a.l = null;
            a.I = null;
            Qe(a.C)
        };
    uv.prototype.pa = function(a) {
        this.dispatchEvent(a.type)
    };
    var Cv = function(a, b) {
        a.N || (a.N = !0, a.dispatchEvent("start"), Da(a.g.getAttribute) && a.g.getAttribute("playsinline"), cd || Yp() || Zp(10) || A(pc, "Xbox") || (bd || dd ? 0 : (!ad || ad && Xp(Wp, 4)) && !qk()) || !ad || ad && Xp(Wp, 3) || (bd || dd) && !Zp(4) || a.Ic(b))
    };
    k = uv.prototype;
    k.$f = function() {
        this.O = !0;
        this.H && yv(this);
        this.H = !1
    };
    k.ag = function() {
        this.aa || (this.aa = !0, this.dispatchEvent("loaded"))
    };
    k.yd = function(a) {
        null != this.l ? this.I = a : (this.dispatchEvent("play"), ed || cd || Yp() || td || Cv(this, a))
    };
    k.Wf = function(a) {
        if (!this.N && (ed || cd || Yp() || td)) {
            if (0 >= this.getCurrentTime()) return;
            if (td && this.g.ended && 1 == this.getDuration()) {
                this.Dc(a);
                return
            }
            Cv(this, a)
        }
        if (ed || A(pc, "Nintendo WiiU")) {
            if (1.5 < this.getCurrentTime() - this.A) {
                this.F = !0;
                this.g.currentTime = this.A;
                return
            }
            this.F = !1;
            this.getCurrentTime() > this.A && (this.A = this.getCurrentTime())
        }
        this.dispatchEvent("timeUpdate")
    };
    k.fg = function() {
        this.dispatchEvent("volumeChange")
    };
    k.cg = function() {
        if (this.N && ed && !this.X && (2 > Dv(this) || this.F)) {
            this.C = new ii(250);
            this.h.P(this.C, "tick", this.Xf);
            this.C.start();
            var a = !0
        } else a = !1;
        a || this.l || this.dispatchEvent("pause")
    };
    k.Yf = function() {
        var a = !0;
        if (ed || A(pc, "Nintendo WiiU")) a = this.A >= this.g.duration - 1.5;
        !this.F && a && this.dispatchEvent("end")
    };
    k.Ic = function() {
        this.dispatchEvent("beginFullscreen")
    };
    k.xd = function() {
        this.dispatchEvent("endFullscreen")
    };
    k.Dc = function() {
        this.dispatchEvent("error")
    };
    k.Vf = function() {
        this.dispatchEvent("click")
    };
    k.Zf = function() {
        var a = new D(this.g.offsetWidth, this.g.offsetHeight),
            b = au(this.g);
        if (a.width != this.L.width || a.height != this.L.height) !this.$ && b ? this.Ic() : this.$ && !b && this.xd(), this.L = a, this.$ = b
    };
    k.Xf = function() {
        if (!this.g.ended && this.g.paused && (ed || ud ? this.g.currentTime < this.g.duration : 1)) {
            var a = this.g.duration - this.g.currentTime,
                b = Dv(this);
            0 < b && (2 <= b || 2 > a) && (Qe(this.C), yv(this))
        } else Qe(this.C)
    };
    var Dv = function(a) {
        var b;
        a: {
            for (b = a.g.buffered.length - 1; 0 <= b;) {
                if (a.g.buffered.start(b) <= a.g.currentTime) {
                    b = a.g.buffered.end(b);
                    break a
                }
                b--
            }
            b = 0
        }
        return b - a.g.currentTime
    };
    var Hv = function(a, b, c) {
        G.call(this);
        var d = this;
        this.l = b;
        this.o = c;
        b = new S(this);
        Re(this, b);
        this.A = "goog_" + Gc++;
        this.g = this.h = null;
        kv(a, this.A).then(function(e) {
            return void Ev(d, e)
        }).catch(function() {
            return void Fv(d)
        });
        b.P(this.l, "adsManager", function(e) {
            "allAdsCompleted" == e.da && Gv(d)
        })
    };
    p(Hv, G);
    var Ev = function(a, b) {
            a.h = b;
            var c = {};
            c = (c.frameName = a.A, c);
            a.l.send("omid", "iframeReady", c);
            a.g = new lv(b, a.o);
            a.g.P("error", function() {
                return void Fv(a)
            });
            nv(a.g)
        },
        Fv = function(a) {
            a.l.send("omid", "iframeFailed");
            a.V()
        },
        Gv = function(a) {
            setTimeout(function() {
                a.V()
            }, 3E3)
        };
    Hv.prototype.R = function() {
        this.h && (he(this.h), this.h = null);
        G.prototype.R.call(this)
    };
    var Iv = function(a, b, c, d) {
        G.call(this);
        this.o = a;
        this.l = b;
        this.g = c;
        this.C = d;
        this.h = new S(this);
        Re(this, this.h);
        this.h.P(this.o, d, this.B)
    };
    p(Iv, G);
    var Lv = function(a, b) {
        var c = b.ga;
        switch (b.da) {
            case "showVideo":
                Jv(a.l);
                break;
            case "hide":
                Kv(a.l);
                break;
            case "getPreloadDisplay":
            case "resizeAndPositionVideo":
                a = a.l.g;
                c = c.resizeAndPositionVideo;
                a.g.style.left = String(c.left) + "px";
                a.g.style.top = String(c.top) + "px";
                a.g.style.width = String(c.width) + "px";
                a.g.style.height = String(c.height) + "px";
                break;
            case "restoreSizeAndPositionVideo":
                c = a.l.g, c.g.style.width = "100%", c.g.style.height = "100%", c.g.style.left = "0", c.g.style.right = "0"
        }
    };
    Iv.prototype.B = function(a) {
        var b = a.ga;
        switch (a.da) {
            case "activate":
                a = this.l;
                var c = this.g;
                a.g != c && a.h && a.o && a.l && (c.setVolume(a.g.getVolume()), c = a.g, a.g = a.l, a.l = c, c = a.h, a.h = a.o, a.o = c, Mv(a.o.g, !1));
                break;
            case "startTracking":
                a = this.g;
                c = this.A;
                this.h.P(a, tb(Hq), c);
                this.h.P(a, Bs, c);
                Bv(this.g);
                break;
            case "stopTracking":
                a = this.g;
                c = this.A;
                this.h.Ca(a, tb(Hq), c);
                this.h.Ca(a, Bs, c);
                Av(this.g);
                break;
            case "exitFullscreen":
                zv(this.g);
                break;
            case "play":
                yv(this.g);
                break;
            case "pause":
                this.g.pause();
                break;
            case "load":
                Bv(this.g);
                a = this.g;
                c = b.videoUrl;
                var d = b.muxedMediaUrl,
                    e = b.muxedMimeType,
                    f = b.muxedAudioCodec,
                    g = b.muxedVideoCodec,
                    h = b.demuxedAudioUrl,
                    l = b.demuxedVideoUrl,
                    m = b.demuxedAudioMimeType,
                    n = b.demuxedVideoMimeType,
                    v = b.demuxedAudioCodec,
                    B = b.demuxedVideoCodec;
                b = b.mseCompatible;
                var t = null;
                l && h && b && n && m && B && v && (t = new Mp({
                    Kd: l,
                    $c: h,
                    qg: null,
                    fe: null,
                    Jd: n,
                    Zc: m,
                    Sa: B,
                    La: v,
                    height: null,
                    width: null,
                    ya: b
                }));
                h = null;
                d && e && g && f && (h = new Np({
                    md: d,
                    Ae: null,
                    mimeType: e,
                    Sa: g,
                    La: f,
                    height: null,
                    width: null,
                    ya: b
                }));
                t ? a.load(c, t) : h ? a.load(c, h) : a.load(c,
                    null);
                break;
            case "unload":
                xv(this.g);
                break;
            case "setCurrentTime":
                this.g.g.currentTime = b.currentTime;
                break;
            case "setVolume":
                this.g.setVolume(b.volume)
        }
    };
    Iv.prototype.A = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        this.o.send(this.C,
            a, b)
    };
    var Nv = function(a, b) {
        G.call(this);
        this.h = b;
        this.l = new Iv(a, b, this.h.g, "videoDisplay1");
        Re(this, this.l);
        this.g = null;
        var c = this.h.l;
        null != c && (this.g = new Iv(a, b, c, "videoDisplay2"), Re(this, this.g))
    };
    p(Nv, G);
    Nv.prototype.Cc = function() {};
    Nv.prototype.B = function(a) {
        Lv(this.l, a);
        this.g && Lv(this.g, a)
    };
    var Pv = function(a, b) {
        G.call(this);
        this.A = a;
        this.l = b;
        this.o = new S(this);
        Re(this, this.o);
        this.g = this.l.g;
        null != this.g && (this.o.P(this.A, "videoDisplay1", this.dg), this.o.P(this.A, "videoDisplay2", this.oe), Ov(this, this.g, this.xb));
        this.h = null
    };
    p(Pv, G);
    k = Pv.prototype;
    k.Cc = function(a) {
        this.g && Qv(this, this.g, this.xb);
        this.g = a;
        Ov(this, this.g, this.xb)
    };
    k.dg = function(a) {
        if (null != this.g) {
            var b = a.ga;
            switch (a.da) {
                case "startTracking":
                    Bv(this.g);
                    break;
                case "stopTracking":
                    Av(this.g);
                    break;
                case "exitFullscreen":
                    zv(this.g);
                    break;
                case "play":
                    yv(this.g);
                    break;
                case "pause":
                    this.g.pause();
                    break;
                case "load":
                    Rv(this.g, b);
                    break;
                case "unload":
                    xv(this.g);
                    break;
                case "setCurrentTime":
                    this.g.g.currentTime = b.currentTime;
                    break;
                case "setVolume":
                    this.g.setVolume(b.volume)
            }
        }
    };
    k.oe = function(a) {
        if (null != this.h) {
            var b = a.ga;
            switch (a.da) {
                case "startTracking":
                    Bv(this.h);
                    break;
                case "stopTracking":
                    Av(this.h);
                    break;
                case "load":
                    Rv(this.h, b)
            }
        }
    };
    k.Jc = function(a) {
        switch (a.type) {
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            default:
                return
        }
        this.A.send("videoDisplay2", a, {})
    };
    k.xb = function(a) {
        var b = {};
        switch (a.type) {
            case "autoplayDisallowed":
                a = "autoplayDisallowed";
                break;
            case "beginFullscreen":
                a = "fullscreen";
                break;
            case "endFullscreen":
                a = "exitFullscreen";
                break;
            case "click":
                a = "click";
                break;
            case "end":
                a = "end";
                break;
            case "error":
                a = "error";
                break;
            case "loaded":
                a = "loaded";
                break;
            case "mediaLoadTimeout":
                a = "mediaLoadTimeout";
                break;
            case "pause":
                a = "pause";
                b.ended = this.g.g.ended;
                break;
            case "play":
                a = "play";
                break;
            case "skip":
                a = "skip";
                break;
            case "start":
                a = "start";
                b.volume = this.g.getVolume();
                break;
            case "timeUpdate":
                a = "timeupdate";
                b.currentTime = this.g.getCurrentTime();
                b.duration = this.g.getDuration();
                break;
            case "volumeChange":
                a = "volumeChange";
                b.volume = this.g.getVolume();
                break;
            case "loadedmetadata":
                a = a.type;
                b.duration = this.g.getDuration();
                break;
            case "abort":
            case "canplay":
            case "canplaythrough":
            case "durationchange":
            case "emptied":
            case "loadstart":
            case "loadeddata":
            case "progress":
            case "ratechange":
            case "seeked":
            case "seeking":
            case "stalled":
            case "suspend":
            case "waiting":
                a = a.type;
                break;
            default:
                return
        }
        this.A.send("videoDisplay1",
            a, b)
    };
    var Ov = function(a, b, c) {
            a.o.P(b, tb(Hq), c);
            a.o.P(b, Bs, c)
        },
        Qv = function(a, b, c) {
            a.o.Ca(b, tb(Hq), c);
            a.o.Ca(b, Bs, c)
        };
    Pv.prototype.B = function(a) {
        switch (a.da) {
            case "showVideo":
                Jv(this.l);
                break;
            case "hide":
                Kv(this.l);
                break;
            case "getPreloadDisplay":
                null != this.g && null == this.h && (this.h = this.l.l, Ov(this, this.h, this.Jc), null == this.h ? Tt.D().report(112, {
                    outer: !0,
                    "null": !0
                }) : Tt.D().report(112, {
                    outer: !0,
                    "null": !1
                }));
                break;
            case "swapVideoDisplays":
                if (null != this.g && null != this.h) {
                    Qv(this, this.g, this.xb);
                    Qv(this, this.h, this.Jc);
                    a = this.l;
                    if (a.h && a.o && a.l) {
                        a.l.setVolume(a.g.getVolume());
                        var b = a.g;
                        a.g = a.l;
                        a.l = b;
                        b = a.h;
                        a.h = a.o;
                        a.o =
                            b;
                        b = a.F;
                        a = a.g;
                        b.l.Cc(a);
                        b.F && (b = b.F, a = a.B.g, b.o = a, b.g && (b = b.g, b.g = a, mv(b, a)))
                    }
                    this.g = this.l.g;
                    this.h = this.l.l;
                    Ov(this, this.g, this.xb);
                    Ov(this, this.h, this.Jc)
                }
        }
    };
    var Rv = function(a, b) {
        var c = b.videoUrl,
            d = b.muxedMediaUrl,
            e = b.muxedMimeType,
            f = b.muxedAudioCodec,
            g = b.muxedVideoCodec,
            h = b.demuxedAudioUrl,
            l = b.demuxedVideoUrl,
            m = b.demuxedAudioMimeType,
            n = b.demuxedVideoMimeType,
            v = b.demuxedAudioCodec,
            B = b.demuxedVideoCodec;
        b = b.mseCompatible;
        var t = null;
        l && h && b && n && m && B && v && (t = new Mp({
            Kd: l,
            $c: h,
            qg: null,
            fe: null,
            Jd: n,
            Zc: m,
            Sa: B,
            La: v,
            height: null,
            width: null,
            ya: b
        }));
        h = null;
        d && e && g && f && (h = new Np({
            md: d,
            Ae: null,
            mimeType: e,
            Sa: g,
            La: f,
            height: null,
            width: null,
            ya: b
        }));
        t ? a.load(c, t) : h ? a.load(c,
            h) : a.load(c, null)
    };
    var Sv = function(a, b, c, d, e, f) {
        Vt.call(this, a, b, c, d, e);
        this.h = f
    };
    p(Sv, Vt);
    var Tv = function(a, b) {
        N.call(this);
        this.A = a;
        this.l = b;
        this.g = {};
        this.h = new S(this);
        this.h.P(E(), "message", this.B)
    };
    p(Tv, N);
    Tv.prototype.send = function(a) {
        var b = a.h;
        this.g.hasOwnProperty(b) && this.g[b].send(a.type, a.da, a.ga)
    };
    var Uv = function(a, b, c, d) {
        a.g.hasOwnProperty(b) || (c = new ru(b, c), a.h.P(c, a.A, function(e) {
            this.dispatchEvent(new Sv(e.type, e.da, e.ga, e.Ub, e.zd, b))
        }), c.g = d, c.connect(), a.g[b] = c)
    };
    Tv.prototype.R = function() {
        this.h.V();
        for (var a in this.g) Qe(this.g[a]);
        N.prototype.R.call(this)
    };
    Tv.prototype.B = function(a) {
        a = a.h;
        var b = tu(a.data);
        if (null != b) {
            var c = b.channel;
            if (this.l && !this.g.hasOwnProperty(c)) {
                var d = b.sid;
                Uv(this, c, d, a.source);
                this.dispatchEvent(new Sv(b.name, b.type, b.data || {}, d, a.origin, c))
            }
        }
    };

    function Vv() {
        return !!ya("googletag.cmd", E())
    }

    function Wv() {
        var a = ya("googletag.console", E());
        return null != a ? a : null
    }
    var Xv = function() {
        S.call(this);
        this.l = new Tv("gpt", !0);
        Re(this, this.l);
        this.P(this.l, "gpt", this.B);
        this.g = null;
        Vv() || E().top === E() || (this.g = new Tv("gpt", !1), Re(this, this.g), this.P(this.g, "gpt", this.A))
    };
    p(Xv, S);
    Xv.prototype.B = function(a) {
        var b = a.zd,
            c = "//imasdk.googleapis.com".match(qe);
        b = b.match(qe);
        if (c[3] == b[3] && c[4] == b[4])
            if (null != this.g) Uv(this.g, a.h, a.Ub, E().parent), null != this.g && this.g.send(a);
            else if (c = a.ga, null != c && void 0 !== c.scope) {
            b = c.scope;
            c = c.args;
            var d;
            if ("proxy" == b) c = a.da, "isGptPresent" == c ? d = Vv() : "isConsolePresent" == c && (d = null != Wv());
            else if (Vv())
                if ("pubads" == b || "companionAds" == b) {
                    d = a.da;
                    var e = E().googletag;
                    if (null != e && null != e[b] && (e = e[b](), null != e && (d = e[d], null != d))) try {
                        var f = d.apply(e, c)
                    } catch (g) {}
                    d =
                        f
                } else if ("console" == b) {
                if (f = Wv(), null != f && (e = f[a.da], null != e)) try {
                    e.apply(f, c)
                } catch (g) {}
            } else if (null === b) {
                d = a.da;
                f = E();
                if (["googleGetCompanionAdSlots", "googleSetCompanionAdContents"].includes(d) && (d = f[d], null != d)) try {
                    e = d.apply(f, c)
                } catch (g) {}
                d = e
            }
            void 0 !== d && (a.ga.returnValue = d, this.l.send(a))
        }
    };
    Xv.prototype.A = function(a) {
        this.l.send(a)
    };
    var Yv = function(a, b) {
        if (a.g) {
            var c = a.g;
            Qe(c.g[b]);
            delete c.g[b]
        }
        a.l && (a = a.l, Qe(a.g[b]), delete a.g[b])
    };
    var $v = function(a, b) {
            var c = Array.prototype.slice.call(arguments),
                d = c.shift();
            if ("undefined" == typeof d) throw Error("[goog.string.format] Template required");
            return d.replace(/%([0\- \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(e, f, g, h, l, m, n, v) {
                if ("%" == m) return "%";
                var B = c.shift();
                if ("undefined" == typeof B) throw Error("[goog.string.format] Not enough arguments");
                arguments[0] = B;
                return Zv[m].apply(null, arguments)
            })
        },
        Zv = {
            s: function(a, b, c) {
                return isNaN(c) || "" == c || a.length >= Number(c) ? a : a = -1 < b.indexOf("-", 0) ?
                    a + Ec(" ", Number(c) - a.length) : Ec(" ", Number(c) - a.length) + a
            },
            f: function(a, b, c, d, e) {
                d = a.toString();
                isNaN(e) || "" == e || (d = parseFloat(a).toFixed(e));
                var f = 0 > Number(a) ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
                0 <= Number(a) && (d = f + d);
                if (isNaN(c) || d.length >= Number(c)) return d;
                d = isNaN(e) ? Math.abs(Number(a)).toString() : Math.abs(Number(a)).toFixed(e);
                a = Number(c) - d.length - f.length;
                return d = 0 <= b.indexOf("-", 0) ? f + d + Ec(" ", a) : f + Ec(0 <= b.indexOf("0", 0) ? "0" : " ", a) + d
            },
            d: function(a, b, c, d, e, f, g, h) {
                return Zv.f(parseInt(a,
                    10), b, c, d, 0, f, g, h)
            }
        };
    Zv.i = Zv.d;
    Zv.u = Zv.d;
    var cw = function(a, b) {
        N.call(this);
        this.B = new S(this);
        Re(this, this.B);
        this.O = this.N = null;
        this.L = !1;
        this.K = "goog_" + Gc++;
        this.C = new Map;
        var c = this.K,
            d = (ye() ? "https:" : "http:") + $v("//imasdk.googleapis.com/js/core/bridge3.393.1_%s.html", U.B);
        a: {
            var e = window;
            try {
                do {
                    try {
                        if (0 == e.location.href.indexOf(d) || 0 == e.document.referrer.indexOf(d)) {
                            var f = !0;
                            break a
                        }
                    } catch (g) {}
                    e = e.parent
                } while (e != e.top)
            } catch (g) {}
            f = !1
        }
        f && (d += "?f=" + c);
        c = ge("IFRAME", {
            src: d + "#" + c,
            allowFullscreen: !0,
            allow: "autoplay",
            style: "border:0; opacity:0; margin:0; padding:0; position:relative;"
        });
        this.B.vb(c, "load", this.$);
        a.appendChild(c);
        this.g = c;
        this.A = aw(this);
        this.H = b;
        this.h = null;
        this.l = bw(this);
        this.H.g && this.B.P(this.A, "displayContainer", this.W);
        this.B.P(this.A, "mouse", this.X);
        this.B.P(this.A, "touch", this.Y);
        c = E();
        d = ya("google.ima.gptProxyInstance", c);
        null != d ? c = d : (d = new Xv, r("google.ima.gptProxyInstance", d, c), c = d);
        this.T = c;
        Cg(Tg) && (this.F = new Hv(a, this.A, b.g.B.g), Re(this, this.F), this.I = !1)
    };
    p(cw, N);
    var bw = function(a) {
            a.l && a.l.V();
            a.l = new Pv(a.A, a.H);
            Re(a, a.l);
            return a.l
        },
        aw = function(a, b) {
            b = void 0 === b ? "*" : b;
            var c = a.C.get(b);
            null == c && (c = new ru(a.K, b), a.L && (c.g = ke(a.g), c.connect()), a.C.set(b, c));
            return c
        };
    cw.prototype.R = function() {
        null !== this.h && (this.h.V(), this.h = null);
        this.C.forEach(function(a) {
            Qe(a)
        });
        this.C.clear();
        Yv(this.T, this.K);
        he(this.g);
        N.prototype.R.call(this)
    };
    cw.prototype.X = function(a) {
        var b = a.ga,
            c = df(this.g),
            d = document.createEvent("MouseEvent");
        d.initMouseEvent(a.da, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX + c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, b.button, null);
        this.g.dispatchEvent(d)
    };
    var dw = function(a, b) {
        var c = df(a.g),
            d = !!("TouchEvent" in window && 0 < TouchEvent.length);
        b = b.map(function(e) {
            return d ? new Touch({
                identifier: e.identifier,
                target: a.g,
                clientX: e.clientX,
                clientY: e.clientY,
                screenX: e.screenX,
                screenY: e.screenY,
                pageX: e.pageX + c.x,
                pageY: e.pageY + c.y
            }) : document.createTouch(window, a.g, e.identifier, e.pageX + c.x, e.pageY + c.y, e.screenX, e.screenY)
        });
        return d ? b : document.createTouchList.apply(document, b)
    };
    cw.prototype.Y = function(a) {
        var b = a.ga,
            c = df(this.g);
        if ("TouchEvent" in window && 0 < TouchEvent.length) b = {
            bubbles: !0,
            cancelable: !0,
            view: window,
            detail: b.detail,
            ctrlKey: b.ctrlKey,
            altKey: b.altKey,
            shiftKey: b.shiftKey,
            metaKey: b.metaKey,
            touches: dw(this, b.touches),
            targetTouches: dw(this, b.targetTouches),
            changedTouches: dw(this, b.changedTouches)
        }, a = new TouchEvent(a.da, b), this.g.dispatchEvent(a);
        else {
            var d = document.createEvent("TouchEvent");
            d.initTouchEvent(a.da, !0, !0, window, b.detail, b.screenX, b.screenY, b.clientX +
                c.x, b.clientY + c.y, b.ctrlKey, b.altKey, b.shiftKey, b.metaKey, dw(this, b.touches), dw(this, b.targetTouches), dw(this, b.changedTouches), b.scale, b.rotation);
            this.g.dispatchEvent(d)
        }
    };
    cw.prototype.W = function(a) {
        switch (a.da) {
            case "showVideo":
                null == this.h ? (this.h = new rt, this.B.P(this.h, "click", this.aa)) : wt(this.h);
                ut(this.h, ew(this.H));
                break;
            case "hide":
                null !== this.h && (this.h.V(), this.h = null)
        }
        this.l.B(a)
    };
    cw.prototype.aa = function() {
        this.A.send("displayContainer", "videoClick")
    };
    cw.prototype.$ = function() {
        var a = this;
        this.N = Gf();
        this.O = Df();
        this.C.forEach(function(b) {
            b.g = ke(a.g);
            b.connect()
        });
        this.L = !0
    };
    var gw = function() {
        N.call(this);
        this.buffered = new fw;
        this.A = new fw;
        this.h = new S(this);
        this.src = this.l = "";
        this.B = !1;
        this.g = null;
        var a = Fs(U);
        if (a) {
            a: {
                if (wb(a.g, "videoElementFakeDuration") && (a = a.g.videoElementFakeDuration, "number" === typeof a)) break a;a = NaN
            }
            this.duration = a
        }
    };
    x(gw, N);
    var hw = new Zo,
        iw = function() {
            var a = ["video/mp4"],
                b = ["video/ogg"],
                c = new gw;
            c.canPlayType = function(d) {
                return a.includes(d) ? "probably" : b.includes(d) ? "maybe" : ""
            };
            c.width = 0;
            c.height = 0;
            c.offsetWidth = 0;
            c.offsetHeight = 0;
            return c
        },
        jw = function(a) {
            this.startTime = 0;
            this.endTime = a
        },
        fw = function() {
            this.length = 0;
            this.g = []
        };
    fw.prototype.start = function(a) {
        return this.g[a].startTime
    };
    fw.prototype.end = function(a) {
        return this.g[a].endTime
    };
    k = gw.prototype;
    k.readyState = 0;
    k.currentTime = 0;
    k.duration = NaN;
    k.Kb = !0;
    k.autoplay = !1;
    k.loop = !1;
    k.controls = !1;
    k.volume = 1;
    k.muted = !1;
    Object.defineProperty(gw.prototype, "src", {
        get: function() {
            return gw.prototype.l
        },
        set: function(a) {
            var b = gw.prototype;
            b.B && null != b.g ? (b.g.reject(), b.g = null) : b.l = a
        }
    });
    k = gw.prototype;
    k.xc = 0;
    k.nb = null;
    k.bc = null;
    k.pause = function() {
        this.autoplay = !1;
        this.Kb || (null.stop(), this.Kb = !0, this.dispatchEvent("timeupdate"), this.dispatchEvent("pause"))
    };
    k.load = function() {
        this.readyState = 0;
        this.Kb = !0;
        this.dispatchEvent("loadstart");
        this.setProperty("duration", isNaN(this.duration) ? 10 + 20 * Math.random() : this.duration);
        var a = this.A;
        a.g.push(new jw(this.duration));
        a.length = a.g.length;
        a = this.buffered;
        a.g.push(new jw(this.duration));
        a.length = a.g.length;
        this.dispatchEvent("loadedmetadata");
        0 < this.currentTime && this.dispatchEvent("timeupdate");
        this.dispatchEvent("loadeddata");
        this.dispatchEvent("canplay");
        this.dispatchEvent("canplaythrough");
        this.dispatchEvent("progress")
    };
    k.setProperty = function(a, b) {
        switch (a) {
            case "currentTime":
                a = Number(b);
                this.dispatchEvent("seeking");
                this.currentTime = a;
                this.dispatchEvent("seeked");
                a = u() - this.xc;
                b = this.currentTime + a / 1E3;
                this.xc += a;
                2 < this.readyState && (this.currentTime = Math.min(b, this.duration));
                this.dispatchEvent("timeupdate");
                this.currentTime == this.duration && (this.Kb = !0, null.stop(), this.dispatchEvent("ended"));
                break;
            case "duration":
                this.duration = Number(b);
                this.dispatchEvent("durationchange");
                break;
            case "volume":
                this.volume = Number(b);
                this.dispatchEvent("volumechange");
                break;
            default:
                throw "Property setter not implemented";
        }
    };
    k.setAttribute = function(a, b) {
        null != a && hw.set(a, b)
    };
    k.getAttribute = function(a) {
        return hw.get(a)
    };
    k.R = function() {
        this.h.V()
    };
    k.eg = function(a) {
        var b = null,
            c = null;
        switch (a.type) {
            case "loadeddata":
                b = "Loaded";
                break;
            case "playing":
                b = "Playing";
                c = "#00f";
                break;
            case "pause":
                b = "Paused";
                break;
            case "ended":
                b = "Ended", c = "#000"
        }
        b && this.bc && (this.bc.innerText = b);
        c && this.nb && (this.nb.style.backgroundColor = c)
    };
    var kw = function(a, b) {
        G.call(this);
        if (null == a || !je(Wd(a), a)) throw qt(pt, null, "containerElement", "element");
        this.o = a;
        this.l = this.g = null;
        a = Fs(U);
        if (Ds(a, "useVideoElementFake")) {
            a = iw();
            var c = ge("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;"
            });
            for (d in a) c[d] = a[d];
            a.nb = ge("DIV", {
                style: "position:absolute;width:100%;height:100%;top:0px;left:0px;background-color:#000"
            });
            a.bc = ge("P", {
                style: "position:absolute;top:25%;margin-left:10px;font-size:24px;color:#fff;"
            });
            a.nb.appendChild(a.bc);
            c.appendChild(a.nb);
            a.h.P(a, ["loadeddata", "playing", "pause", "ended"], a.eg);
            var d = c
        } else d = ge("VIDEO", {
            style: "background-color:#000;position:absolute;width:100%;height:100%;left:0px;top:0px;",
            title: ps("Advertisement").toString()
        });
        d.setAttribute("webkit-playsinline", !0);
        d.setAttribute("playsinline", !0);
        this.h = d;
        this.g = ge("DIV", {
            style: "display:none;"
        });
        this.o.appendChild(this.g);
        this.g.appendChild(this.h);
        b && (this.l = ge("DIV", {
            style: "position:absolute;width:100%;height:100%;left:0px;top:0px"
        }), this.g.appendChild(this.l))
    };
    p(kw, G);
    kw.prototype.R = function() {
        he(this.g);
        G.prototype.R.call(this)
    };
    kw.prototype.show = function() {
        Mv(this.g, !0)
    };
    var Mv = function(a, b) {
        null != a && (a.style.display = b ? "block" : "none")
    };
    var nw = function(a, b, c) {
        if (null == a || !je(Wd(a), a)) throw qt(pt, null, "containerElement", "element");
        this.B = b;
        this.$ = Ps(this.B || null);
        this.Y = $p(this.B || null);
        this.W = String(Math.floor(1E9 * Math.random()));
        this.K = !1;
        this.H = a;
        this.N = null != b;
        U.g = 2;
        this.J = lw(b ? b : null);
        var d = ge("DIV", {
            style: "position:absolute"
        });
        a.insertBefore(d, a.firstChild);
        this.A = d;
        this.h = null;
        mw(this) && b ? a = new uv(b) : (this.h = new kw(this.A, !0), a = new uv(this.h.h));
        this.g = a;
        this.l = this.o = null;
        a = ad && !(ad && Xp(Wp, 4));
        d = bd || dd;
        !this.h || mw(this) ||
            !U.l || qk() || a || d || (this.o = new kw(this.A, !0), this.l = new uv(this.o.h));
        this.C = c || null;
        this.T = null != this.C;
        mw(this) && b ? Da(b.getBoundingClientRect) ? c = b : (c = this.A, U.C = c) : c = this.A;
        this.M = c;
        this.F = new cw(this.A, this);
        this.O = new D(0, 0);
        this.I = "";
        b && (b = b.src || b.currentSrc, b = b instanceof ep ? b.clone() : new ep(b, void 0), 200 > b.toString().length ? this.I = b.toString() : 200 > b.h.length && (this.I = b.h));
        this.L = new Map;
        this.L.set("videoDisplay1", this.g);
        this.l && this.L.set("videoDisplay2", this.l)
    };
    nw.prototype.X = function() {
        this.K = !0;
        if (null != this.h) {
            var a = this.h;
            a.h && a.h.load()
        }
        null != this.o && (a = this.o, a.h && a.h.load())
    };
    nw.prototype.destroy = function() {
        var a = this;
        this.B = null;
        Qe(this.h);
        Qe(this.o);
        Qe(this.F);
        this.g.W(function() {
            return Qe(a.g)
        });
        null != this.l && this.l.W(function() {
            return Qe(a.l)
        });
        he(this.A)
    };
    var Jv = function(a) {
            null != a.h && a.h.show()
        },
        Kv = function(a) {
            null != a.h && Mv(a.h.g, !1)
        },
        ew = function(a) {
            return a.T && a.C ? a.C : null != a.h ? a.h.l : null
        },
        mw = function(a) {
            return Os(a.J) && a.N
        };
    nw.prototype.setSize = function(a, b) {
        var c = this.A;
        null != c && (-1 == a ? (c.style.right = "0", c.style.left = "0") : c.style.width = a + "px", -1 == b ? (c.style.bottom = "0", c.style.top = "0") : c.style.height = b + "px");
        c = this.F;
        c.g.width = -1 == a ? "100%" : a;
        c.g.height = -1 == b ? "100%" : b;
        try {
            c.g.offsetTop = c.g.offsetTop
        } catch (d) {}
        this.O = new D(a, b)
    };
    var lw = function(a) {
        return null != a && Da(a.getAttribute) && null != a.getAttribute("playsinline") ? !0 : !1
    };
    var ow = function(a) {
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.g = a
    };
    p(ow, Error);
    k = ow.prototype;
    k.Bc = function() {
        var a = this.g.innerError;
        return a instanceof Object ? new ow(a) : null != a ? Error(a) : null
    };
    k.pd = function() {
        return this.g.errorMessage
    };
    k.Ac = function() {
        return this.g.errorCode
    };
    k.Ce = function() {
        var a = this.Ac();
        return 1E3 > a ? a : 900
    };
    k.Be = function() {
        return this.g.type
    };
    k.toString = function() {
        return "AdError " + this.Ac() + ": " + this.pd() + (null != this.Bc() ? " Caused by: " + this.Bc() : "")
    };
    var pw = function(a, b) {
        b = void 0 === b ? null : b;
        Yg.call(this, "adError");
        this.h = a;
        this.o = b
    };
    p(pw, Yg);
    pw.prototype.A = function() {
        return this.h
    };
    pw.prototype.B = function() {
        return this.o
    };
    var qw = function(a, b) {
        b = void 0 === b ? null : b;
        jt.call(this, "adMetadata", a);
        this.h = b
    };
    p(qw, jt);
    qw.prototype.o = function() {
        return this.h
    };
    var rw = function(a) {
        this.g = a.adBreakDuration;
        this.adPosition = a.adPosition;
        this.currentTime = a.currentTime;
        this.duration = a.duration;
        this.totalAds = a.totalAds
    };
    var tw = function(a, b) {
        N.call(this);
        this.l = a;
        this.B = b;
        this.h = this.l.currentTime;
        this.g = new ii(250);
        Re(this, this.g);
        this.A = new S(this);
        Re(this, this.A);
        dq(this.A, this.g, "tick", this.C, !1, this)
    };
    p(tw, N);
    tw.prototype.Va = function() {
        return this.h
    };
    tw.prototype.start = function() {
        uw(this);
        this.g.start()
    };
    tw.prototype.stop = function() {
        this.g.stop()
    };
    tw.prototype.C = function() {
        var a = this.l.currentTime;
        a != this.Va() && (this.h = a, uw(this))
    };
    var uw = function(a) {
        var b = {};
        b.currentTime = a.Va();
        a.B.send("contentTimeUpdate", "contentTimeUpdate", b)
    };
    var vw = function(a, b, c) {
        N.call(this);
        this.h = a;
        this.g = null;
        this.I = "";
        this.K = new mc;
        this.L = 0;
        this.C = this.l = null;
        this.A = b;
        this.B = null;
        this.F = "";
        this.H = c
    };
    p(vw, N);
    vw.prototype.N = function(a) {
        try {
            var b = a.h.data;
            try {
                var c = JSON.parse(b)
            } catch (kf) {
                return
            }
            var d = c.session;
            if (null != d && this.F == d) switch (c.type) {
                case "friendlyReady":
                    var e = ww(this);
                    if (null != e) {
                        this.g = e;
                        this.I = e.currentSrc;
                        var f = e.style.cssText;
                        if (Wc && 10 > document.documentMode) var g = new mc;
                        else {
                            var h = document;
                            "function" === typeof HTMLTemplateElement && (h = ee(document, "TEMPLATE").content.ownerDocument);
                            var l = h.implementation.createHTMLDocument("").createElement("DIV");
                            l.style.cssText = f;
                            g = zs(l.style)
                        }
                        this.K =
                            g;
                        this.L = e.currentTime
                    } else {
                        var m = this.h.H,
                            n = this.h.O;
                        var v = "border: 0; margin: 0; padding: 0; position: absolute; width:" + (n.width + "px; ");
                        v += "height:" + n.height + "px;";
                        this.g = ge("VIDEO", {
                            style: v,
                            autoplay: !0
                        });
                        m.appendChild(this.g)
                    }
                    var B = this.h.H;
                    e = "border: 0; margin: 0; padding: 0;position: absolute; ";
                    var t = this.g;
                    b: {
                        var w = Wd(t);
                        if (w.defaultView && w.defaultView.getComputedStyle) {
                            var z = w.defaultView.getComputedStyle(t, null);
                            if (z) {
                                var K = z.display || z.getPropertyValue("display") || "";
                                break b
                            }
                        }
                        K = ""
                    }
                    if ("none" !=
                        (K || (t.currentStyle ? t.currentStyle.display : null) || t.style && t.style.display)) var M = ff(t);
                    else {
                        var W = t.style,
                            hd = W.display,
                            ac = W.visibility,
                            Yd = W.position;
                        W.visibility = "hidden";
                        W.position = "absolute";
                        W.display = "inline";
                        var Zd = ff(t);
                        W.display = hd;
                        W.position = Yd;
                        W.visibility = ac;
                        M = Zd
                    }
                    e += "width:" + M.width + "px; ";
                    e += "height:" + M.height + "px;";
                    this.C = ge("DIV", {
                        style: e
                    });
                    B.appendChild(this.C);
                    try {
                        this.l.contentWindow.loader.initFriendly(this.g, this.C)
                    } catch (kf) {
                        xw(this)
                    }
                    this.A.send("vpaid", "", b);
                    break;
                case "becameLinear":
                    this.g &&
                        !pe() && !oe() && $e(this.g, {
                            visibility: "visible"
                        });
                    this.A.send("vpaid", "", b);
                    break;
                case "becameNonlinear":
                    yw(this);
                    this.A.send("vpaid", "", b);
                    break;
                case "startAd":
                    B = {};
                    if (this.g) {
                        h = this.g.paused;
                        var lf = 0 < this.g.currentTime;
                        B.apl = lf && !h ? "1" : "0";
                        B.ip = h ? "1" : "0";
                        B.iavp = lf ? "1" : "0"
                    } else B.apl = "n";
                    Tt.D().report(99, B);
                    this.A.send("vpaid", "", b);
                    null != ww(this) && Jv(this.h);
                    break;
                default:
                    this.A.send("vpaid", "", b)
            }
        } catch (kf) {
            xw(this)
        }
    };
    var xw = function(a) {
            var b = {
                type: "error"
            };
            b.session = a.F;
            a = sg(b);
            window.postMessage(a, "*")
        },
        ww = function(a) {
            return ("videoDisplayUnknown" == a.H ? a.h.g : a.h.L.get(a.H)).B.g
        },
        yw = function(a) {
            a.g && !pe() && !oe() && $e(a.g, {
                visibility: "hidden"
            })
        };
    vw.prototype.R = function() {
        N.Ja.R.call(this);
        Qe(this.B);
        this.B = null;
        he(this.C);
        this.C = null;
        he(this.l);
        this.l = null;
        var a = ww(this);
        if (null != a) {
            var b = this.K;
            a.style.cssText = b instanceof mc && b.constructor === mc && b.h === lc ? b.g : "type_error:SafeStyle";
            pe() || oe() ? (a.src = this.I, a.currentTime = this.L) : (a.removeAttribute("src"), Kv(this.h))
        } else he(this.g), this.g = null
    };
    var zw = function(a, b) {
        G.call(this);
        this.l = a;
        this.h = b;
        this.g = new Map
    };
    p(zw, G);
    var Aw = function(a, b) {
        try {
            var c = b.ga,
                d = c.session;
            switch (c.vpaidEventType) {
                case "createFriendlyIframe":
                    b = "videoDisplayUnknown";
                    c.videoDisplayName && (b = c.videoDisplayName);
                    var e = c.session,
                        f = new vw(a.l, a.h, b);
                    a.g.set(e, f);
                    f.F = e;
                    a = "about:self";
                    Wc && (a = "");
                    f.l = ge("IFRAME", {
                        src: a,
                        allowtransparency: !0,
                        background: "transparent"
                    });
                    $e(f.l, {
                        display: "none",
                        width: "0",
                        height: "0"
                    });
                    var g = f.h.H;
                    g.appendChild(f.l);
                    var h = g.ownerDocument,
                        l = h.defaultView || h.parentWindow;
                    null == f.B && (f.B = new S(f));
                    f.B.P(l, "message", f.N);
                    var m =
                        '<body><script src="//imasdk.googleapis.com/js/sdkloader/loader.js">\x3c/script><script>loader = new VPAIDLoader(false, "' + (f.F + '");\x3c/script></body>');
                    if (ud || qd || Xc) {
                        var n = f.l.contentWindow;
                        n && hv(n.document, m)
                    } else iv(f.l, m);
                    break;
                case "vpaidNonLinear":
                    var v = a.g.get(d);
                    v && yw(v);
                    break;
                case "destroyFriendlyIframe":
                    var B = a.g.get(d);
                    B && (B.V(), a.g.delete(d))
            }
        } catch (t) {
            Tt.D().report(125, {
                msg: t.message
            })
        }
    };
    zw.prototype.R = function() {
        this.g.forEach(function(a) {
            return a.V()
        })
    };
    var Bw = function() {
        this.g = [];
        this.h = []
    };
    Bw.prototype.isEmpty = function() {
        return 0 == this.g.length && 0 == this.h.length
    };
    Bw.prototype.clear = function() {
        this.g = [];
        this.h = []
    };
    Bw.prototype.contains = function(a) {
        return Za(this.g, a) || Za(this.h, a)
    };
    Bw.prototype.ua = function() {
        for (var a = [], b = this.g.length - 1; 0 <= b; --b) a.push(this.g[b]);
        var c = this.h.length;
        for (b = 0; b < c; ++b) a.push(this.h[b]);
        return a
    };
    var Y = function(a, b, c, d, e, f, g) {
        N.call(this);
        var h = this;
        this.I = a;
        this.g = b;
        this.H = c;
        this.Bb = e;
        this.A = new ju;
        this.K = g;
        this.T = !1;
        this.N = 1;
        this.zb = d;
        this.aa = -1;
        this.l = this.h = null;
        this.F = new tw({
            currentTime: 0
        }, this.K);
        this.C = new Bw;
        this.Da = this.$ = !1;
        this.W = new Map;
        this.X = this.la = !1;
        this.pa = new zw(b, g);
        Re(this, this.pa);
        this.L = f && null != this.g.C;
        this.O = function() {
            var l = h.g.g,
                m = l.getCurrentTime();
            l = l.getDuration();
            return {
                currentTime: m,
                duration: l,
                isPlaying: !0,
                volume: h.N
            }
        };
        this.Y = new S(this);
        this.Y.P(this.K, "adsManager",
            this.Cb)
    };
    p(Y, N);
    Y.prototype.Cb = function(a) {
        var b = this,
            c = a.da,
            d = a.ga;
        switch (c) {
            case "error":
                Cw(this);
                Dw(this, d);
                break;
            case "contentPauseRequested":
                Tt.D().report(130);
                Ew(this);
                Fw(this, c, d);
                break;
            case "contentResumeRequested":
                Gw(this, function() {
                    return Fw(b, c, d)
                });
                break;
            case "remainingTime":
                this.aa = d.remainingTime;
                break;
            case "skip":
                Fw(this, c, d);
                break;
            case "log":
                Fw(this, c, d, d.logData);
                break;
            case "companionBackfill":
                a = ya("window.google_show_companion_ad");
                null != a && a();
                break;
            case "skipShown":
                this.T = !0;
                Fw(this, c, d);
                break;
            case "interaction":
                Fw(this, c, d, d.interactionData);
                break;
            case "vpaidEvent":
                Aw(this.pa, a);
                break;
            case "skippableStateChanged":
                a = d.adData;
                null != a.skippable && (this.T = a.skippable);
                Fw(this, c, d);
                break;
            case "volumeChange":
                a = d.adData;
                null != a && "number" === typeof a.volume && (this.N = a.volume);
                Fw(this, c, d);
                break;
            case "firstQuartile":
                Fw(this, et.firstQuartile, d);
                Fw(this, c, d);
                break;
            case "thirdQuartile":
                Fw(this, et.thirdQuartile, d);
                Fw(this, c, d);
                break;
            default:
                Fw(this, c, d)
        }
    };
    var Fw = function(a, b, c, d) {
            if (null == c.companions) {
                var e = a.W.get(c.adId);
                c.companions = null != e ? e : []
            }
            var f = c.adData;
            if (e = null == f ? null : new X(f)) a.h = e;
            switch (b) {
                case "adBreakReady":
                case "mediaUrlPinged":
                    b = new jt(b, null, c);
                    break;
                case "adMetadata":
                    b = null;
                    null != c.adCuePoints && (b = new ov(c.adCuePoints));
                    b = new qw(e, b);
                    break;
                case "allAdsCompleted":
                    a.h = null;
                    a.la = !0;
                    b = new jt(b, e);
                    break;
                case "contentPauseRequested":
                    a.X = !1;
                    b = new jt(b, e);
                    break;
                case "contentResumeRequested":
                    a.h = null;
                    a.X = !0;
                    b = new jt(b, e);
                    break;
                case "loaded":
                    a.aa =
                        e.getDuration();
                    Qs() && (d = a.I, c = a.Bb, d.h.set(it(e), a.O), (0 != U.g ? Go.D().l : d.B) && bu(d, "loaded", it(e), c));
                    b = new jt(b, e, f);
                    break;
                case "start":
                    a.W.set(c.adId, c.companions);
                    null != ew(a.g) && (null == a.l ? (a.l = new rt, a.Y.P(a.l, "click", a.bg)) : wt(a.l), ut(a.l, ew(a.g)));
                    b = new jt(b, e);
                    break;
                case "complete":
                    null != a.l && wt(a.l);
                    Qs() && du(a.I, a.O, it(e));
                    a.h = null;
                    a.W.delete(c.adId);
                    b = new jt(b, e);
                    break;
                case "log":
                    c = null;
                    null != d && null != d.type ? (f = d.type, f = "adLoadError" == f || "adPlayError" == f) : f = !1;
                    f && (c = {
                        adError: new ow(d)
                    });
                    b = new jt(b, e, c);
                    break;
                case "interaction":
                    b = new jt(b, e, d);
                    break;
                case "adProgress":
                    b = new jt(b, e, new rw(c));
                    break;
                default:
                    b = new jt(b, e)
            }
            a.dispatchEvent(b);
            a.la && a.X && a.destroy()
        },
        Dw = function(a, b) {
            var c = new pw(new ow(b));
            a.$ ? (a.dispatchEvent(c), Qs() && a.h && du(a.I, a.O, it(a.h)), a.h = null) : a.C.h.push(c);
            a = {
                error: b.errorCode,
                vis: bg(document)
            };
            Tt.D().report(7, a)
        },
        Hw = function(a, b, c) {
            a.K.send("adsManager", b, c)
        },
        Gw = function(a, b) {
            Tt.D().report(131);
            Cw(a, b)
        },
        Ew = function(a) {
            var b = a.g.g;
            mw(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete &&
                null != b.la && b.la()
        },
        Cw = function(a, b) {
            var c = a.g.g;
            mw(a.g) && a.A.restoreCustomPlaybackStateOnAdBreakComplete && null != c.W ? c.W(b) : b && b()
        };
    k = Y.prototype;
    k.xf = function(a, b, c, d) {
        if (this.C.isEmpty()) {
            var e = this.g,
                f = null;
            e.B && null == d && (f = {
                vd: "setnull"
            });
            e.B && e.B === d && (f = {
                vd: "match"
            });
            if (e.B && e.B !== d) {
                f = Ps(d || null);
                var g = $p(d || null);
                f = {
                    vd: "diff",
                    oc: e.$,
                    nc: f,
                    oi: e.Y,
                    ni: g
                }
            }!e.B && d && (f = {
                vd: "new"
            });
            f && (f.custVid = e.W, Tt.D().report(93, f));
            null != d && (e.J = lw(d), Os(e.J) && (e.N = !0, Qe(e.h), Qe(e.o), Qe(e.l), e.h = null, e.o = null, e.l = null, Qe(e.g), e.g = new uv(d), Da(d.getBoundingClientRect) ? e.M = d : (e.M = e.A, U.C = e.M), d = e.F, e = e.g, d.l.Cc(e), d.F && (d = d.F, e = e.B.g, d.o = e, d.g && (d = d.g, d.g =
                e, mv(d, e)))));
            this.$ = !0;
            this.sd(a, b, c);
            e = ku(this.A, this.L);
            Hw(this, "init", {
                adsRenderingSettings: e,
                width: a,
                height: b,
                viewMode: c
            })
        } else {
            for (; !this.C.isEmpty();) b = a = this.C, 0 == b.g.length && (b.g = b.h, b.g.reverse(), b.h = []), a = a.g.pop(), this.dispatchEvent(a);
            this.V()
        }
    };
    k.ze = function() {
        return mw(this.g)
    };
    k.ye = function() {
        return this.L
    };
    k.wf = function() {
        return this.aa
    };
    k.tf = function() {
        return this.T
    };
    k.je = function() {
        Hw(this, "discardAdBreak")
    };
    k.zf = function(a) {
        if (null != a) {
            var b = this.A.bitrate,
                c = a.bitrate;
            Tt.D().report(96, {
                init: this.$ ? "1" : "0",
                start: this.Da ? "1" : "0",
                old: b,
                "new": c,
                changed: b != c ? "1" : "0"
            });
            this.A = a;
            a = ku(this.A, this.L);
            Hw(this, "updateAdsRenderingSettings", {
                adsRenderingSettings: a
            })
        }
    };
    k.yf = function() {
        Hw(this, "skip")
    };
    k.start = function() {
        if (this.H) {
            (bd || dd) && Tt.D().report(50, {
                customPlayback: mw(this.g)
            });
            this.g.K || Tt.D().report(26, {
                adtagurl: this.H,
                customPlayback: mw(this.g)
            });
            ik(this.g.A) && Tt.D().report(30, {
                adtagurl: this.H,
                customPlayback: mw(this.g)
            });
            var a = this.g.C,
                b = this.g.A,
                c;
            if (c = a && b && !ik(a)) a = $t(a), b = $t(b), c = 0 < a.width && 0 < a.height && 0 < b.width && 0 < b.height && a.left <= b.left + b.width && b.left <= a.left + a.width && a.top <= b.top + b.height && b.top <= a.top + a.height;
            c && Tt.D().report(31, {
                adtagurl: this.H,
                customPlayback: mw(this.g)
            })
        }
        if (!this.g.K &&
            !mw(this.g)) throw qt(ot);
        b = this.g;
        b.T = this.L && null != b.C;
        this.g.F.g.style.opacity = 1;
        null != this.B && 1 == this.getVolume() && ("boolean" === typeof this.B.muted && this.B.muted ? this.setVolume(0) : "number" === typeof this.B.volume && (b = this.B.volume, 0 <= b && 1 >= b && this.setVolume(this.B.volume)));
        this.Da = !0;
        Hw(this, "start")
    };
    k.bg = function() {
        if (!this.A.disableClickThrough && null != this.h) {
            var a = this.h.g.clickThroughUrl;
            null != a && Gq(a)
        }
    };
    k.sd = function(a, b, c) {
        this.g.setSize(a, b);
        Hw(this, "resize", {
            width: a,
            height: b,
            viewMode: c
        })
    };
    k.stop = function() {
        Hw(this, "stop")
    };
    k.sf = function() {
        Hw(this, "expand")
    };
    k.rf = function() {
        Hw(this, "collapse")
    };
    k.getVolume = function() {
        return this.N
    };
    k.setVolume = function(a) {
        this.N = a;
        this.g.g.setVolume(a);
        Hw(this, "volume", {
            volume: a
        })
    };
    k.pause = function() {
        Hw(this, "pause")
    };
    k.resume = function() {
        Hw(this, "resume")
    };
    k.destroy = function() {
        this.V()
    };
    k.uf = function() {
        return this.zb
    };
    k.vf = function() {
        Tt.D().report(124, {
            api: "getCurrentAd"
        });
        return this.h
    };
    k.R = function() {
        Hw(this, "destroy");
        null != this.l && this.l.V();
        this.Y.V();
        this.C.clear();
        this.F && (this.F.stop(), this.F.V());
        Qs() && du(this.I, this.O);
        N.prototype.R.call(this)
    };
    k.qf = function() {
        Tt.D().report(124, {
            api: "clicked"
        });
        var a = this.h && this.h.g.clickThroughUrl;
        a && this.h.qd() && Gq(a);
        Hw(this, "click")
    };
    var Iw = function(a, b) {
        Yg.call(this, "adsManagerLoaded");
        this.h = a;
        this.o = b
    };
    p(Iw, Yg);
    Iw.prototype.A = function(a, b) {
        var c = this.h;
        c.B = a;
        null != a.currentTime && (c.F = new tw(a, c.K), c.F.start());
        null != b && (c.A = b);
        return this.h
    };
    Iw.prototype.B = function() {
        return this.o
    };
    var Z = function() {
        this.videoPlayMuted = this.videoPlayActivation = "unknown";
        this.videoContinuousPlay = "0";
        this.nonLinearAdSlotHeight = this.nonLinearAdSlotWidth = this.linearAdSlotHeight = this.linearAdSlotWidth = this.liveStreamPrefetchSeconds = 0;
        this.forceNonLinearFullSlot = !1;
        this.vastLoadTimeout = 5E3
    };
    Z.prototype.setAdWillAutoPlay = function(a) {
        this.videoPlayActivation = a ? "auto" : "click"
    };
    Z.prototype.setAdWillPlayMuted = function(a) {
        this.videoPlayMuted = a ? "muted" : "unmuted"
    };
    Z.prototype.setContinuousPlayback = function(a) {
        this.videoContinuousPlay = a ? "2" : "1"
    };
    var Jw = function(a) {
        try {
            var b = new ep(a);
            if (!b.h.includes(".cdn.ampproject.org")) return null;
            var c = b.l.split("/").slice(1);
            if ("s" == c[1] && 3 > c.length) return null;
            if (2 > c.length) return a;
            var d = "s" == c[1];
            c = d ? c.slice(2) : c.slice(1);
            var e = decodeURIComponent(c[0]) + "/";
            return d ? "https://" + e + c.slice(1).join("/") : "http://" + e + c.slice(1).join("/")
        } catch (f) {
            return null
        }
    };
    var Kw = function() {
        var a = window;
        this.h = a;
        this.g = new Ie(a.document)
    };
    Kw.prototype.write = function(a) {
        var b = a.g();
        this.g.set("__gads", b, {
            ld: Gd(a, 2) - this.h.Date.now() / 1E3,
            path: Gd(a, 3),
            domain: Gd(a, 4),
            kg: !1
        })
    };
    var Lw = function(a, b, c) {
        var d = "script";
        d = void 0 === d ? "" : d;
        var e = a.createElement("link");
        try {
            e.rel = "preload", e.href = A("preload", "stylesheet") ? Pb(b).toString() : b instanceof Ob ? Pb(b).toString() : b instanceof gc ? hc(b) : hc(jc(b))
        } catch (f) {
            return
        }
        d && (e.as = d);
        c && e.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(e)
        } catch (f) {}
    };
    var Mw = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Nw = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Ow = q,
        Pw = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(q.location.hostname)];
            Hs[3] >= u() && b.push("adsid=" + encodeURIComponent(Hs[1]));
            return a + "?" + b.join("&")
        },
        Hs, Qw, Gs = function() {
            Ow = q;
            Hs = Ow.googleToken = Ow.googleToken || {};
            var a = u();
            Hs[1] && Hs[3] > a && 0 < Hs[2] || (Hs[1] = "", Hs[2] = -1, Hs[3] = -1, Hs[4] = "", Hs[6] = "");
            Qw = Ow.googleIMState = Ow.googleIMState || {};
            a = Qw[1];
            Mw.test(a) && !Nw.test(a) ||
                (Qw[1] = ".google.com");
            Array.isArray(Qw[5]) || (Qw[5] = []);
            "boolean" !== typeof Qw[6] && (Qw[6] = !1);
            Array.isArray(Qw[7]) || (Qw[7] = []);
            "number" !== typeof Qw[8] && (Qw[8] = 0)
        },
        Rw = {
            lc: function() {
                return 0 < Qw[8]
            },
            gg: function() {
                Qw[8]++
            },
            hg: function() {
                0 < Qw[8] && Qw[8]--
            },
            ig: function() {
                Qw[8] = 0
            },
            Wh: function() {
                return !1
            },
            hd: function() {
                return Qw[5]
            },
            cd: function(a) {
                try {
                    a()
                } catch (b) {
                    q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Bd: function() {
                if (!Rw.lc()) {
                    var a = q.document,
                        b = function(e) {
                            e = Pw(e);
                            a: {
                                try {
                                    var f = wa();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Lw(a,
                                e, f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return q.processGoogleToken({}, 2)
                            };
                            e = ne(e);
                            Ac(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Rw.gg()
                            } catch (g) {}
                        },
                        c = Qw[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    q.setTimeout(function() {
                        return q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        Sw = function(a) {
            Gs();
            var b = Ow.googleToken[5] || 0;
            a && (0 != b || Hs[3] >= u() ? Rw.cd(a) : (Rw.hd().push(a), Rw.Bd()));
            Hs[3] >= u() && Hs[2] >= u() || Rw.Bd()
        },
        Tw = function(a) {
            q.processGoogleToken =
                q.processGoogleToken || function(b, c) {
                    var d = b;
                    d = void 0 === d ? {} : d;
                    c = void 0 === c ? 0 : c;
                    b = d.newToken || "";
                    var e = "NT" == b,
                        f = parseInt(d.freshLifetimeSecs || "", 10),
                        g = parseInt(d.validLifetimeSecs || "", 10),
                        h = d["1p_jar"] || "";
                    d = d.pucrd || "";
                    Gs();
                    1 == c ? Rw.ig() : Rw.hg();
                    var l = Ow.googleToken = Ow.googleToken || {},
                        m = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                    e = e && !Rw.lc() && (!(Hs[3] >= u()) || "NT" == Hs[1]);
                    var n = !(Hs[3] >= u()) && 0 != c;
                    if (m || e || n) e = u(), f = e + 1E3 * f, g = e + 1E3 * g,
                        1E-5 > Math.random() && De(q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), l[5] = c, l[1] = b, l[2] = f, l[3] = g, l[4] = h, l[6] = d, Gs();
                    if (m || !Rw.lc()) {
                        c = Rw.hd();
                        for (b = 0; b < c.length; b++) Rw.cd(c[b]);
                        c.length = 0
                    }
                };
            Sw(a)
        };
    var Uw = function(a, b) {
        b = void 0 === b ? 500 : b;
        G.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.A = 0;
        this.B = b;
        this.l = null
    };
    p(Uw, G);
    Uw.prototype.R = function() {
        this.o = {};
        this.l && (Qd(this.h, "message", this.l), delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        G.prototype.R.call(this)
    };
    var Ww = function(a) {
            return Da(a.h.__uspapi) || null != Vw(a)
        },
        Yw = function(a, b) {
            var c = {};
            if (Ww(a)) {
                var d = lb(function() {
                    return b(c)
                });
                Xw(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.B)
            } else b(c)
        },
        Xw = function(a, b) {
            if (Da(a.h.__uspapi)) a = a.h.__uspapi, a("getUSPData", 1, b);
            else if (Vw(a)) {
                Zw(a);
                var c = ++a.A;
                a.o[c] = b;
                a.g && (b = {}, a.g.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }, b), "*"))
            }
        },
        Vw = function(a) {
            if (a.g) return a.g;
            a.g = Ce(a.h, "__uspapiLocator");
            return a.g
        },
        Zw = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    a.o[d.callId](d.returnValue, d.success)
                } catch (e) {}
            }, Pd(a.h, "message", a.l))
        };
    var $w = function(a, b) {
        b = void 0 === b ? 500 : b;
        G.call(this);
        this.h = a;
        this.g = null;
        this.o = {};
        this.A = 0;
        this.B = b;
        this.l = null
    };
    p($w, G);
    $w.prototype.R = function() {
        this.o = {};
        this.l && (Qd(this.h, "message", this.l), delete this.l);
        delete this.o;
        delete this.h;
        delete this.g;
        G.prototype.R.call(this)
    };
    var bx = function(a) {
            return "function" === typeof a.h.__tcfapi || null != ax(a)
        },
        dx = function(a, b) {
            var c = {},
                d = lb(function() {
                    if (void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent || !c.cmpStatus || "error" === c.cmpStatus || "loaded" !== c.cmpStatus || "tcloaded" !== c.eventStatus && "useractioncomplete" !== c.eventStatus) c.tcString = "tcunavailable";
                    b(c)
                });
            cx(a,
                function(e, f) {
                    f && (c = e);
                    d()
                }, d);
            setTimeout(d, a.B)
        },
        cx = function(a, b, c) {
            "function" === typeof a.h.__tcfapi ? (a = a.h.__tcfapi, a("getTCData", 2, b, void 0)) : ax(a) ? (ex(a), c = ++a.A, a.o[c] = b, a.g && (b = {}, a.g.postMessage((b.__tcfapiCall = {
                command: "getTCData",
                version: 2,
                callId: c,
                parameter: void 0
            }, b), "*"))) : c && c()
        },
        ax = function(a) {
            if (a.g) return a.g;
            a.g = Ce(a.h, "__tcfapiLocator");
            return a.g
        },
        ex = function(a) {
            a.l || (a.l = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__tcfapiReturn;
                    a.o[d.callId](d.returnValue,
                        d.success)
                } catch (e) {}
            }, Pd(a.h, "message", a.l))
        };
    var fx = function() {
        var a = this;
        this.g = new Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    (function() {
        if (!qb(Qt, function(e) {
                return e.match(E().location.href)
            })) {
            for (var a = $d(), b = null, c = null, d = 0; d < a.length; d++)
                if (c = a[d], qb(Qt, function(e) {
                        return e.match(c.src)
                    })) {
                    b = c;
                    break
                } if (null == b) throw Error("IMA SDK is either not loaded from a google domain or is not a supported version.");
        }
    })();
    var hx = function(a) {
        N.call(this);
        this.C = new Kw;
        this.g = a;
        this.B = new Map;
        this.l = this.g.F;
        this.F = new S(this);
        this.H = new $w(window);
        this.I = new Uw(window);
        0 != U.g ? (this.h = new Xt, Re(this, this.h)) : this.h = Zt();
        if (Qs()) {
            a = this.h;
            var b = aw(this.l);
            if (!a.l) {
                a.g = b || null;
                a.g && (a.F.P(a.g, "activityMonitor", a.H), eu(a));
                if (!(q.ima && q.ima.video && q.ima.video.client && q.ima.video.client.tagged)) {
                    r("ima.video.client.sdkTag", !0, void 0);
                    var c = q.document;
                    b = ee(document, "SCRIPT");
                    var d = Qb(Kb(Lb("https://s0.2mdn.net/instream/video/client.js")));
                    Ac(b, d);
                    b.async = !0;
                    b.type = "text/javascript";
                    c = c.getElementsByTagName("script")[0];
                    c.parentNode.insertBefore(b, c)
                }
                ej();
                Go.D().L = U.g;
                a.B = !0;
                Go.D().l = !0;
                a.C = null;
                b = Go.D();
                c = "h" == ho(b) || "b" == ho(b);
                d = !(O.D(), !1);
                c && d && (b.J = !0, b.H = new om);
                a.l = !0
            }
            this.A = cu(this.h, this.g.M)
        }
        gx()
    };
    p(hx, N);
    k = hx.prototype;
    k.R = function() {
        this.F.V();
        var a = this.A;
        this.h.A.delete(a);
        0 != U.g && (Go.D().A[a] = null);
        N.prototype.R.call(this)
    };
    k.destroy = function() {
        this.V()
    };
    k.getVersion = function() {
        return "h.3.393.1"
    };
    k.nf = function(a, b) {
        var c = this,
            d = [];
        if (!qk()) {
            var e = new fx;
            d.push(e.g);
            Tw(function() {
                Is();
                Js();
                Ks();
                e.resolve()
            })
        }
        var f = null;
        if (bx(this.H)) {
            var g = new fx;
            d.push(g.g);
            dx(this.H, function(m) {
                f = m;
                g.resolve()
            })
        }
        var h = null;
        if (Ww(this.I)) {
            var l = new fx;
            d.push(l.g);
            Yw(this.I, function(m) {
                h = m;
                l.resolve()
            })
        }
        Promise.all(d).then(function() {
            var m = f,
                n = h,
                v = a.adTagUrl;
            v && Tt.D().report(8, {
                adtagurl: v,
                customPlayback: mw(c.g),
                customClick: null != c.g.C
            });
            var B = "goog_" + Gc++;
            c.B.set(B, b || null);
            if (v) {
                var t = /iu=\/(\d+)\//.exec(Bc(v));
                (t = t && 2 == t.length ? t[1] : null) || (t = Fc((new ep(v)).g.get("client")), t = Rb(t) ? null : t)
            } else t = null;
            t = t || "";
            var w = Oe(t);
            0 != w ? t = w : (w = q.top, t = Be(w, "googlefcInactive") ? 4 : t && Be(w, "googlefcPA-" + t) ? 2 : Be(w, "googlefcNPA") ? 3 : 0);
            w = Be(q.top, "googlefcLoaded");
            var z = {};
            m = (z.gfcPresent = (!!q.googlefc || Be(q.top, "googlefcPresent")) && 4 != t, z.gfcLoaded = w, z.gfcUserConsent = t, z.isGdprLoader = !1, z.addtlConsent = m ? m.addtlConsent : null, z.gdprApplies = m ? m.gdprApplies : null, z.tcString = m ? m.tcString : null, z.uspString = n ? n.uspString : null, z);
            n = {};
            n.limaExperimentIds = Gg().sort().join(",");
            w = c.rd();
            z = 0 != U.g ? Go.D().l : c.h.B;
            z = void 0 === z ? null : z;
            t = {};
            null != z && (t.activeViewPushUpdates = z);
            t.activityMonitorMode = w.g;
            t.adsToken = w.K;
            t.autoPlayAdBreaks = w.l;
            t.companionBackfill = w.A;
            t.cookiesEnabled = w.o;
            t.disableCustomPlaybackForIOS10Plus = w.h;
            t.engagementDetection = !0;
            t.isFunctionalTest = !1;
            t.isVpaidAdapter = w.tb();
            t["1pJar"] = w.L;
            t.numRedirects = w.F;
            t.pageCorrelator = w.O;
            t.persistentStateCorrelator = $f();
            t.playerType = w.J;
            t.playerVersion = w.M;
            t.ppid = w.T;
            t.privacyControls =
                w.W;
            t.reportMediaRequests = !1;
            t.streamCorrelator = w.X;
            t.testingConfig = Fs(w).g;
            t.unloadAbandonPingEnabled = !0;
            t.urlSignals = w.aa;
            t.vpaidMode = w.I;
            w = {};
            w.contentMediaUrl = c.g.I;
            w.customClickTrackingProvided = null != c.g.C;
            a: {
                z = pf();z = ha(z);
                for (var K = z.next(); !K.done; K = z.next())
                    if (K = K.value, K.url && K.url.includes("amp=1")) {
                        z = !0;
                        break a
                    } z = null != window.context ? 0 < parseInt(window.context.ampcontextVersion, 10) : null != sf().l
            }
            w.isAmp = z;
            a: {
                try {
                    var M = window.top.location.href
                } catch (jx) {
                    M = 2;
                    break a
                }
                M = null == M ? 2 : M == window.document.location.href ?
                    0 : 1
            }
            w.iframeState = M;
            w.imaHostingDomain = window.document.domain;
            if (nk()) M = window.location.href;
            else {
                K = sf();
                M = K.h;
                z = K.g;
                K = K.l;
                var W = null;
                K && (W = Jw(K.url));
                M = W ? W : M && M.url ? M.url : z && z.url ? z.url : ""
            }
            w.location = M;
            w.referrer = window.document.referrer;
            w.domLoadTime = c.l.N;
            w.sdkImplLoadTime = c.l.O;
            w.supportsResizing = !mw(c.g);
            M = E().location.ancestorOrigins;
            w.topOrigin = M ? 0 < M.length && 200 > M[M.length - 1].length ? M[M.length - 1] : "" : null;
            w.osdId = c.A;
            w.usesCustomVideoPlayback = mw(c.g);
            w.usesInlinePlayback = c.g.J;
            z = c.g.H;
            M = [];
            W = K = "";
            if (null != z) {
                K = z;
                W = !0;
                W = void 0 === W ? !1 : W;
                for (var hd = [], ac = 0; K && 25 > ac; ++ac) {
                    var Yd = "";
                    void 0 !== W && W || (Yd = (Yd = 9 !== K.nodeType && K.id) ? "/" + Yd : "");
                    a: {
                        if (K && K.nodeName && K.parentElement) {
                            var Zd = K.nodeName.toString().toLowerCase();
                            for (var lf = K.parentElement.childNodes, kf = 0, ok = 0; ok < lf.length; ++ok) {
                                var pk = lf[ok];
                                if (pk.nodeName && pk.nodeName.toString().toLowerCase() === Zd) {
                                    if (K === pk) {
                                        Zd = "." + kf;
                                        break a
                                    }++kf
                                }
                            }
                        }
                        Zd = ""
                    }
                    hd.push((K.nodeName && K.nodeName.toString().toLowerCase()) + Yd + Zd);
                    K = K.parentElement
                }
                K = hd.join();
                if (z) {
                    z = (z = z.ownerDocument) && (z.defaultView || z.parentWindow) || null;
                    W = [];
                    if (z) try {
                        var P = z.parent;
                        for (hd = 0; P && P !== z && 25 > hd; ++hd) {
                            var bc = P.frames;
                            for (ac = 0; ac < bc.length; ++ac)
                                if (z === bc[ac]) {
                                    W.push(ac);
                                    break
                                } z = P;
                            P = z.parent
                        }
                    } catch (jx) {}
                    W = W.join()
                } else W = ""
            }
            M.push(K, W);
            if (null != v) {
                for (P = 0; P < Kp.length - 1; ++P) M.push(te(v, Kp[P]) || "");
                v = te(v, "videoad_start_delay");
                P = "";
                v && (v = parseInt(v, 10), P = 0 > v ? "postroll" : 0 == v ? "preroll" : "midroll");
                M.push(P)
            } else
                for (v = 0; v < Kp.length; ++v) M.push("");
            v = M.join(":");
            P = v.length;
            if (0 ==
                P) v = 0;
            else {
                bc = 305419896;
                for (M = 0; M < P; M++) bc ^= (bc << 5) + (bc >> 2) + v.charCodeAt(M) & 4294967295;
                v = 0 < bc ? bc : 4294967296 + bc
            }
            w.videoAdKey = v.toString();
            v = {};
            P = {};
            P.adsResponse = a.adsResponse;
            P.videoPlayActivation = a.videoPlayActivation;
            P.videoPlayMuted = a.videoPlayMuted;
            P.videoContinuousPlay = a.videoContinuousPlay;
            P.adTagUrl = a.adTagUrl;
            P.contentDuration = a.contentDuration;
            P.contentKeywords = a.contentKeywords;
            P.contentTitle = a.contentTitle;
            P.linearAdSlotWidth = a.linearAdSlotWidth;
            P.linearAdSlotHeight = a.linearAdSlotHeight;
            P.nonLinearAdSlotWidth = a.nonLinearAdSlotWidth;
            P.nonLinearAdSlotHeight = a.nonLinearAdSlotHeight;
            P.forceNonLinearFullSlot = a.forceNonLinearFullSlot;
            P.liveStreamPrefetchSeconds = a.liveStreamPrefetchSeconds;
            P.vastLoadTimeout = a.vastLoadTimeout;
            Object.assign(v, P);
            v.consentSettings = m;
            U.o && (v.gfpCookieValue = c.C.g.get("__gads", ""));
            v.imalibExperiments = n;
            v.settings = t;
            v.videoEnvironment = w;
            B = aw(c.l, B);
            c.F.P(B, "adsLoader", c.K);
            B.send("adsLoader", "requestAds", v)
        })
    };
    k.rd = function() {
        return U
    };
    k.mf = function() {
        aw(this.l).send("adsLoader", "contentComplete")
    };
    var gx = function() {
        !qk() && Tw(function() {
            Is();
            Js();
            Ks()
        })
    };
    hx.prototype.K = function(a) {
        var b = a.da;
        switch (b) {
            case "adsLoaded":
                b = a.ga;
                a = a.Ub;
                var c = this.l,
                    d = 1 == b.newManager;
                !c.I && d ? (c.I = !0, c.l.V(), c.l = new Nv(c.A, c.H), Re(c, c.l)) : c.I && !d && (c.I = !1, bw(c));
                b = new Y(this.h, this.g, b.adTagUrl || "", b.adCuePoints, this.A, b.isCustomClickTrackingAllowed, aw(this.l, a));
                this.dispatchEvent(new Iw(b, ix(this, a)));
                break;
            case "error":
                b = a.ga;
                this.dispatchEvent(new pw(new ow(b), ix(this, a.Ub)));
                b = {
                    error: b.errorCode,
                    vis: bg(document)
                };
                Tt.D().report(7, b);
                break;
            case "gfpCookieAvailable":
                b =
                    a.ga;
                null != b && U.o && this.C.write(Ld(Ei, b.gfpCookie));
                break;
            case "trackingUrlPinged":
                this.dispatchEvent(new jt(b, null, a.ga))
        }
    };
    var ix = function(a, b) {
        var c = a.B.get(b);
        a.B.delete(b);
        return c
    };
    X.prototype.getCompanionAds = X.prototype.Ne;
    X.prototype.isLinear = X.prototype.isLinear;
    X.prototype.isSkippable = X.prototype.lf;
    X.prototype.isUiDisabled = X.prototype.qd;
    X.prototype.getAdId = X.prototype.h;
    X.prototype.getAdSystem = X.prototype.Ke;
    X.prototype.getAdvertiserName = X.prototype.Le;
    X.prototype.getApiFramework = X.prototype.Me;
    X.prototype.getContentType = X.prototype.Oe;
    X.prototype.getCreativeId = X.prototype.o;
    X.prototype.getCreativeAdId = X.prototype.l;
    X.prototype.getDescription = X.prototype.Qe;
    X.prototype.getTitle = X.prototype.We;
    X.prototype.getDuration = X.prototype.getDuration;
    X.prototype.getHeight = X.prototype.Re;
    X.prototype.getWidth = X.prototype.gf;
    X.prototype.getVastMediaHeight = X.prototype.df;
    X.prototype.getVastMediaWidth = X.prototype.ff;
    X.prototype.getVastMediaBitrate = X.prototype.cf;
    X.prototype.getWrapperCreativeIds = X.prototype.kf;
    X.prototype.getWrapperAdIds = X.prototype.hf;
    X.prototype.getWrapperAdSystems = X.prototype.jf;
    X.prototype.getTraffickingParameters = X.prototype.Xe;
    X.prototype.getTraffickingParametersString = X.prototype.Ye;
    X.prototype.getAdPodInfo = X.prototype.Je;
    X.prototype.getUiElements = X.prototype.Ze;
    X.prototype.getMinSuggestedDuration = X.prototype.Te;
    X.prototype.getMediaUrl = X.prototype.Se;
    X.prototype.getSurveyUrl = X.prototype.Ve;
    X.prototype.getSkipTimeOffset = X.prototype.Ue;
    X.prototype.getDealId = X.prototype.Pe;
    X.prototype.getUniversalAdIds = X.prototype.bf;
    X.prototype.getUniversalAdIdValue = X.prototype.af;
    X.prototype.getUniversalAdIdRegistry = X.prototype.$e;
    ov.prototype.getCuePoints = ov.prototype.h;
    r("google.ima.AdCuePoints.PREROLL", 0, window);
    r("google.ima.AdCuePoints.POSTROLL", -1, window);
    r("google.ima.AdDisplayContainer", nw, window);
    nw.prototype.initialize = nw.prototype.X;
    nw.prototype.destroy = nw.prototype.destroy;
    ft.prototype.getPodIndex = ft.prototype.Ge;
    ft.prototype.getTimeOffset = ft.prototype.He;
    ft.prototype.getTotalAds = ft.prototype.Ie;
    ft.prototype.getMaxDuration = ft.prototype.Fe;
    ft.prototype.getAdPosition = ft.prototype.De;
    ft.prototype.getIsBumper = ft.prototype.Ee;
    rw.prototype.adBreakDuration = rw.prototype.g;
    rw.prototype.adPosition = rw.prototype.adPosition;
    rw.prototype.currentTime = rw.prototype.currentTime;
    rw.prototype.duration = rw.prototype.duration;
    rw.prototype.totalAds = rw.prototype.totalAds;
    ht.prototype.getAdIdValue = ht.prototype.o;
    ht.prototype.getAdIdRegistry = ht.prototype.l;
    r("google.ima.AdError.ErrorCode.VIDEO_PLAY_ERROR", 400, window);
    r("google.ima.AdError.ErrorCode.FAILED_TO_REQUEST_ADS", 1005, window);
    r("google.ima.AdError.ErrorCode.REQUIRED_LISTENERS_NOT_ADDED", 900, window);
    r("google.ima.AdError.ErrorCode.VAST_LOAD_TIMEOUT", 301, window);
    r("google.ima.AdError.ErrorCode.VAST_NO_ADS_AFTER_WRAPPER", 303, window);
    r("google.ima.AdError.ErrorCode.VAST_MEDIA_LOAD_TIMEOUT", 402, window);
    r("google.ima.AdError.ErrorCode.VAST_TOO_MANY_REDIRECTS", 302, window);
    r("google.ima.AdError.ErrorCode.VAST_ASSET_MISMATCH", 403, window);
    r("google.ima.AdError.ErrorCode.VAST_LINEAR_ASSET_MISMATCH", 403, window);
    r("google.ima.AdError.ErrorCode.VAST_NONLINEAR_ASSET_MISMATCH", 503, window);
    r("google.ima.AdError.ErrorCode.VAST_ASSET_NOT_FOUND", 1007, window);
    r("google.ima.AdError.ErrorCode.VAST_UNSUPPORTED_VERSION", 102, window);
    r("google.ima.AdError.ErrorCode.VAST_SCHEMA_VALIDATION_ERROR", 101, window);
    r("google.ima.AdError.ErrorCode.VAST_TRAFFICKING_ERROR", 200, window);
    r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_LINEARITY", 201, window);
    r("google.ima.AdError.ErrorCode.VAST_UNEXPECTED_DURATION_ERROR", 202, window);
    r("google.ima.AdError.ErrorCode.VAST_WRAPPER_ERROR", 300, window);
    r("google.ima.AdError.ErrorCode.NONLINEAR_DIMENSIONS_ERROR", 501, window);
    r("google.ima.AdError.ErrorCode.COMPANION_REQUIRED_ERROR", 602, window);
    r("google.ima.AdError.ErrorCode.VAST_EMPTY_RESPONSE", 1009, window);
    r("google.ima.AdError.ErrorCode.UNSUPPORTED_LOCALE", 1011, window);
    r("google.ima.AdError.ErrorCode.INVALID_ARGUMENTS", 1101, window);
    r("google.ima.AdError.ErrorCode.UNKNOWN_AD_RESPONSE", 1010, window);
    r("google.ima.AdError.ErrorCode.UNKNOWN_ERROR", 900, window);
    r("google.ima.AdError.ErrorCode.OVERLAY_AD_PLAYING_FAILED", 500, window);
    r("google.ima.AdError.ErrorCode.AUTOPLAY_DISALLOWED", 1205, window);
    r("google.ima.AdError.ErrorCode.VAST_PROBLEM_DISPLAYING_MEDIA_FILE", 405, window);
    r("google.ima.AdError.ErrorCode.VPAID_ERROR", 901, window);
    r("google.ima.AdError.ErrorCode.ADS_REQUEST_NETWORK_ERROR", 1012, window);
    r("google.ima.AdError.ErrorCode.INVALID_AD_TAG", 1013, window);
    r("google.ima.AdError.ErrorCode.STREAM_INITIALIZATION_FAILED", 1020, window);
    r("google.ima.AdError.ErrorCode.ASSET_FALLBACK_FAILED", 1021, window);
    r("google.ima.AdError.ErrorCode.CONSENT_MANAGEMENT_PROVIDER_NOT_READY", 1300, window);
    r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_USED", -1, window);
    r("google.ima.AdError.ErrorCode.VIDEO_ELEMENT_REQUIRED", -1, window);
    r("google.ima.AdError.ErrorCode.VAST_MEDIA_ERROR", -1, window);
    r("google.ima.AdError.ErrorCode.ADSLOT_NOT_VISIBLE", -1, window);
    r("google.ima.AdError.ErrorCode.OVERLAY_AD_LOADING_FAILED", -1, window);
    r("google.ima.AdError.ErrorCode.VAST_MALFORMED_RESPONSE", -1, window);
    r("google.ima.AdError.ErrorCode.COMPANION_AD_LOADING_FAILED", -1, window);
    r("google.ima.AdError.Type.AD_LOAD", "adLoadError", window);
    r("google.ima.AdError.Type.AD_PLAY", "adPlayError", window);
    ow.prototype.getErrorCode = ow.prototype.Ac;
    ow.prototype.getVastErrorCode = ow.prototype.Ce;
    ow.prototype.getInnerError = ow.prototype.Bc;
    ow.prototype.getMessage = ow.prototype.pd;
    ow.prototype.getType = ow.prototype.Be;
    r("google.ima.AdErrorEvent.Type.AD_ERROR", "adError", window);
    pw.prototype.getError = pw.prototype.A;
    pw.prototype.getUserRequestContext = pw.prototype.B;
    r("google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED", "contentResumeRequested", window);
    r("google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED", "contentPauseRequested", window);
    r("google.ima.AdEvent.Type.CLICK", "click", window);
    r("google.ima.AdEvent.Type.DURATION_CHANGE", "durationChange", window);
    r("google.ima.AdEvent.Type.EXPANDED_CHANGED", "expandedChanged", window);
    r("google.ima.AdEvent.Type.STARTED", "start", window);
    r("google.ima.AdEvent.Type.IMPRESSION", "impression", window);
    r("google.ima.AdEvent.Type.PAUSED", "pause", window);
    r("google.ima.AdEvent.Type.RESUMED", "resume", window);
    r("google.ima.AdEvent.Type.AD_PROGRESS", "adProgress", window);
    r("google.ima.AdEvent.Type.AD_BUFFERING", "adBuffering", window);
    r("google.ima.AdEvent.Type.FIRST_QUARTILE", "firstQuartile", window);
    r("google.ima.AdEvent.Type.MIDPOINT", "midpoint", window);
    r("google.ima.AdEvent.Type.THIRD_QUARTILE", "thirdQuartile", window);
    r("google.ima.AdEvent.Type.COMPLETE", "complete", window);
    r("google.ima.AdEvent.Type.USER_CLOSE", "userClose", window);
    r("google.ima.AdEvent.Type.LINEAR_CHANGED", "linearChanged", window);
    r("google.ima.AdEvent.Type.LOADED", "loaded", window);
    r("google.ima.AdEvent.Type.AD_CAN_PLAY", "adCanPlay", window);
    r("google.ima.AdEvent.Type.AD_METADATA", "adMetadata", window);
    r("google.ima.AdEvent.Type.AD_BREAK_READY", "adBreakReady", window);
    r("google.ima.AdEvent.Type.INTERACTION", "interaction", window);
    r("google.ima.AdEvent.Type.ALL_ADS_COMPLETED", "allAdsCompleted", window);
    r("google.ima.AdEvent.Type.SKIPPED", "skip", window);
    r("google.ima.AdEvent.Type.SKIPPABLE_STATE_CHANGED", "skippableStateChanged", window);
    r("google.ima.AdEvent.Type.LOG", "log", window);
    r("google.ima.AdEvent.Type.VIEWABLE_IMPRESSION", "viewable_impression", window);
    r("google.ima.AdEvent.Type.VOLUME_CHANGED", "volumeChange", window);
    r("google.ima.AdEvent.Type.VOLUME_MUTED", "mute", window);
    jt.prototype.type = jt.prototype.type;
    jt.prototype.getAd = jt.prototype.C;
    jt.prototype.getAdData = jt.prototype.F;
    qw.prototype.getAdCuePoints = qw.prototype.o;
    r("google.ima.AdsLoader", hx, window);
    hx.prototype.getSettings = hx.prototype.rd;
    hx.prototype.requestAds = hx.prototype.nf;
    hx.prototype.contentComplete = hx.prototype.mf;
    hx.prototype.destroy = hx.prototype.destroy;
    hx.prototype.getVersion = hx.prototype.getVersion;
    r("google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED", "adsManagerLoaded", window);
    Iw.prototype.getAdsManager = Iw.prototype.A;
    Iw.prototype.getUserRequestContext = Iw.prototype.B;
    r("google.ima.CompanionAdSelectionSettings", Rs, window);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.IMAGE", "Image", void 0);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.FLASH", "Flash", void 0);
    r("google.ima.CompanionAdSelectionSettings.CreativeType.ALL", "All", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.HTML", "Html", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.IFRAME", "IFrame", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.STATIC", "Static", void 0);
    r("google.ima.CompanionAdSelectionSettings.ResourceType.ALL", "All", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.IGNORE", "IgnoreSize", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_EXACT_MATCH", "SelectExactMatch", void 0);
    r("google.ima.CompanionAdSelectionSettings.SizeCriteria.SELECT_NEAR_MATCH", "SelectNearMatch", void 0);
    r("google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED", "deprecated-event", window);
    r("ima.ImaSdkSettings", T, window);
    r("google.ima.settings", U, window);
    T.prototype.setCompanionBackfill = T.prototype.Jf;
    T.prototype.getCompanionBackfill = T.prototype.Af;
    T.prototype.setAutoPlayAdBreaks = T.prototype.If;
    T.prototype.isAutoPlayAdBreak = T.prototype.Hf;
    T.prototype.setPpid = T.prototype.Sf;
    T.prototype.getPpid = T.prototype.Gf;
    T.prototype.setVpaidAllowed = T.prototype.Tf;
    T.prototype.setVpaidMode = T.prototype.Uf;
    T.prototype.setIsVpaidAdapter = T.prototype.Nf;
    T.prototype.isVpaidAdapter = T.prototype.tb;
    T.prototype.setNumRedirects = T.prototype.Pf;
    T.prototype.getNumRedirects = T.prototype.Df;
    T.prototype.getLocale = T.prototype.le;
    T.prototype.setLocale = T.prototype.Of;
    T.prototype.getPlayerType = T.prototype.Ef;
    T.prototype.setPlayerType = T.prototype.Qf;
    T.prototype.getDisableFlashAds = T.prototype.Cf;
    T.prototype.setDisableFlashAds = T.prototype.Mf;
    T.prototype.getPlayerVersion = T.prototype.Ff;
    T.prototype.setPlayerVersion = T.prototype.Rf;
    T.prototype.setPageCorrelator = T.prototype.Y;
    T.prototype.setStreamCorrelator = T.prototype.$;
    T.prototype.setDisableCustomPlaybackForIOS10Plus = T.prototype.Lf;
    T.prototype.getDisableCustomPlaybackForIOS10Plus = T.prototype.Bf;
    T.prototype.setCookiesEnabled = T.prototype.Kf;
    r("google.ima.ImaSdkSettings.CompanionBackfillMode.ALWAYS", "always", void 0);
    r("google.ima.ImaSdkSettings.CompanionBackfillMode.ON_MASTER_AD", "on_master_ad", void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.DISABLED", 0, void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.ENABLED", 1, void 0);
    r("google.ima.ImaSdkSettings.VpaidMode.INSECURE", 2, void 0);
    r("google.ima.AdsRenderingSettings", ju, window);
    r("google.ima.AdsRenderingSettings.AUTO_SCALE", -1, window);
    r("google.ima.AdsRequest", Z, window);
    Z.prototype.adTagUrl = Z.prototype.adTagUrl;
    Z.prototype.adsResponse = Z.prototype.adsResponse;
    Z.prototype.nonLinearAdSlotHeight = Z.prototype.nonLinearAdSlotHeight;
    Z.prototype.nonLinearAdSlotWidth = Z.prototype.nonLinearAdSlotWidth;
    Z.prototype.linearAdSlotHeight = Z.prototype.linearAdSlotHeight;
    Z.prototype.linearAdSlotWidth = Z.prototype.linearAdSlotWidth;
    Z.prototype.setAdWillAutoPlay = Z.prototype.setAdWillAutoPlay;
    Z.prototype.setAdWillPlayMuted = Z.prototype.setAdWillPlayMuted;
    Z.prototype.setContinuousPlayback = Z.prototype.setContinuousPlayback;
    Z.prototype.contentDuration = Z.prototype.contentDuration;
    Z.prototype.contentKeywords = Z.prototype.contentKeywords;
    Z.prototype.contentTitle = Z.prototype.contentTitle;
    Z.prototype.vastLoadTimeout = Z.prototype.vastLoadTimeout;
    r("google.ima.VERSION", "3.393.1", void 0);
    r("google.ima.UiElements.AD_ATTRIBUTION", "adAttribution", void 0);
    r("google.ima.UiElements.COUNTDOWN", "countdown", void 0);
    r("google.ima.ViewMode.NORMAL", "normal", void 0);
    r("google.ima.ViewMode.FULLSCREEN", "fullscreen", void 0);
    Y.prototype.isCustomPlaybackUsed = Y.prototype.ze;
    Y.prototype.isCustomClickTrackingUsed = Y.prototype.ye;
    Y.prototype.destroy = Y.prototype.destroy;
    Y.prototype.init = Y.prototype.xf;
    Y.prototype.start = Y.prototype.start;
    Y.prototype.stop = Y.prototype.stop;
    Y.prototype.pause = Y.prototype.pause;
    Y.prototype.resume = Y.prototype.resume;
    Y.prototype.getCuePoints = Y.prototype.uf;
    Y.prototype.getCurrentAd = Y.prototype.vf;
    Y.prototype.getRemainingTime = Y.prototype.wf;
    Y.prototype.expand = Y.prototype.sf;
    Y.prototype.collapse = Y.prototype.rf;
    Y.prototype.getAdSkippableState = Y.prototype.tf;
    Y.prototype.resize = Y.prototype.sd;
    Y.prototype.skip = Y.prototype.yf;
    Y.prototype.getVolume = Y.prototype.getVolume;
    Y.prototype.setVolume = Y.prototype.setVolume;
    Y.prototype.discardAdBreak = Y.prototype.je;
    Y.prototype.updateAdsRenderingSettings = Y.prototype.zf;
    Y.prototype.clicked = Y.prototype.qf;
    gt.prototype.getContent = gt.prototype.getContent;
    gt.prototype.getContentType = gt.prototype.h;
    gt.prototype.getHeight = gt.prototype.l;
    gt.prototype.getWidth = gt.prototype.o;
})();