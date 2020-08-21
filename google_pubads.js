/* Retrieved from https://securepubads.g.doubleclick.net/gpt/pubads_impl_2020070801.js */
(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ba, da, ha, ja, na, oa, qa, xa, za, Ba, Ca, Ea, Fa, Ga, Ia, Ja, Ka, Oa, Ra, Sa, Va, Ya, Za, bb, gb, z, hb, ib, jb, kb, lb, mb, C, nb, ob, qb, rb, vb, wb, xb, Hb, Kb, Lb, Jb, Ib, Nb, Ob, Pb, Qb, Ub, Sb, Tb, Vb, Wb, Zb;
    ba = function(a) {
        return function() {
            return _.aa[a].apply(this, arguments)
        }
    };
    da = function(a) {
        return a ? a.passive && ca() ? a : a.capture || !1 : !1
    };
    ha = function() {
        return ea(_.r.top, "GoogleSetNPA") || ea(fa(), "GoogleSetNPA")
    };
    ja = function(a) {
        a = _.ia(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    na = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.ka(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        la(a);
        ma(a, function(b, c) {
            return b - c
        });
        return a
    };
    oa = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    qa = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new _.t.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                b.document.body.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            pa(g, a);
            c && "complete" !== b.document.readyState ? _.u(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    xa = function(a) {
        return ra(this, function c() {
            var d, e, f;
            return sa(c, function(g) {
                switch (g.j) {
                    case 1:
                        return d = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.l + "&st=") + a.ab, e = void 0, g.v = 2, ta(g, ua(d), 4);
                    case 4:
                        e = g.B;
                        va(g, 3);
                        break;
                    case 2:
                        wa(g);
                    case 3:
                        return e ? (f = a.nb || e.sodar_query_id) && e.bg_hash_basename && e.bg_binary ? g.return({
                            context: a.m,
                            Oc: e.bg_hash_basename,
                            Nc: e.bg_binary,
                            ed: a.j + "_" + a.l,
                            nb: f,
                            ab: a.ab
                        }) : g.return(void 0) : g.return(void 0)
                }
            })
        })
    };
    za = function(a) {
        ra(this, function c() {
            var d;
            return sa(c, function(e) {
                if (1 == e.j) return ta(e, xa(a), 2);
                if (d = e.B) {
                    var f = "sodar2";
                    f = void 0 === f ? "sodar2" : f;
                    var g = window,
                        h = g.GoogleGcLKhOms;
                    h && "function" === typeof h.push || (h = g.GoogleGcLKhOms = []);
                    var k = {};
                    h.push((k._ctx_ = d.context, k._bgv_ = d.Oc, k._bgp_ = d.Nc, k._li_ = d.ed, k._jk_ = d.nb, k._st_ = d.ab, k));
                    if (h = g.GoogleDX5YKUSk) g.GoogleDX5YKUSk = void 0, h[1]();
                    f = ya({
                        basename: f
                    });
                    qa(f)
                }
                return e.return(d)
            })
        })
    };
    Ba = function(a) {
        if (!(a instanceof Aa)) throw Error("wrong type");
        return a.j
    };
    Ca = function(a) {
        return (a = a.querySelector("script[nonce]")) ? a.nonce || a.getAttribute("nonce") || "" : ""
    };
    Ea = function(a) {
        var b;
        (b = a.ownerDocument && a.ownerDocument.defaultView) && b !== window ? b = Ca(b.document) : (void 0 === Da && (Da = Ca(document)), b = Da);
        b && a.setAttribute("nonce", b)
    };
    Fa = function(a, b) {
        b = void 0 === b ? window : b;
        if (v(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    Ga = function(a, b) {
        b = void 0 === b ? document : b;
        return v(a, 5) ? b.cookie : null
    };
    Ia = function(a, b, c) {
        c = void 0 === c ? document : c;
        b = Ga(b, c);
        return null === b ? null : (new Ha({
            cookie: b
        })).get(a) || ""
    };
    Ja = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Ka = function(a) {
        switch (a) {
            case void 0:
            case null:
            case 2:
                return !1;
            case 0:
            case 1:
                return !0;
            default:
                throw Error("Unexpected encryption mode: " + a);
        }
    };
    Oa = function() {
        var a = window,
            b = La();
        var c = void 0 === c ? Ma : c;
        if (_.w(215) && !a.goog_sdr_l) {
            Object.defineProperty(a, "goog_sdr_l", {
                value: !0
            });
            var d = function() {
                var e = _.x(37),
                    f = function() {
                        c(a, "gpt", b, String(Na(a)))
                    };
                e ? a.setTimeout(f, e) : f()
            };
            "complete" === a.document.readyState ? d() : _.u(a, "load", d)
        }
    };
    Ra = function(a) {
        var b = Pa(a);
        return (z = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], C(z, "find")).call(z, function(c) {
            var d = b.search(Qa);
            b: {
                var e = 0;
                for (var f = c.length; 0 <= (e = b.indexOf(c, e)) && e < d;) {
                    var g = b.charCodeAt(e - 1);
                    if (38 == g || 63 == g)
                        if (g = b.charCodeAt(e + f), !g || 61 == g || 38 == g || 35 == g) break b;
                    e += f + 1
                }
                e = -1
            }
            if (0 > e) c = null;
            else {
                f = b.indexOf("&", e);
                if (0 > f || f > d) f = d;
                e += c.length + 1;
                c = decodeURIComponent(b.substr(e, f - e).replace(/\+/g, " "))
            }
            return null !== c
        }) || null
    };
    Sa = function(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = void 0 === d ? function(l) {
            return !!l
        } : d;
        var e = void 0 === e ? "," : e;
        var f = [],
            g = !1;
        a = _.D(a);
        for (var h = a.next(); !h.done; h = a.next()) {
            h = b(h.value);
            var k = d(h);
            g = g || k;
            f.push(String(k ? h : c))
        }
        return g ? f.join(e) : null
    };
    Va = function(a, b) {
        var c = b || function() {
            return !0
        };
        a = Ta(a);
        var d = [];
        _.Ua(a, function(e, f) {
            e = e.filter(function(h) {
                return c(h, f)
            });
            if (e.length) {
                e = e.map(encodeURIComponent);
                var g = encodeURIComponent(f);
                d.push(g + "=" + e.join())
            }
        });
        return d
    };
    Ya = function(a, b, c, d) {
        _.Wa("gpt_sz", function(e) {
            _.E(e, "r", Xa(a));
            _.E(e, "w", c.width);
            _.E(e, "h", c.height);
            b && _.E(e, "f", b);
            null != d && _.E(e, "a", Number(d))
        }, {
            ya: _.x(28)
        })
    };
    Za = function(a) {
        return new _.t.Promise(function(b) {
            return void setTimeout(b, a)
        })
    };
    bb = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new $a(b, {
            rootMargin: a
        }) : new IntersectionObserver(b, {
            rootMargin: a
        })
    };
    gb = function() {
        cb("pubadsReady", !0);
        if (_.w(206)) {
            var a = 0;
            Object.defineProperty(_.db(), "pubadsReady", {
                get: function() {
                    5 > a && _.Wa("gpt_pubads_ready", function(b) {
                        ++a;
                        _.eb(b);
                        var c = Error("pubadsReady");
                        _.E(b, "stack", fb(c.stack, c.message))
                    }, {
                        ya: .1
                    });
                    return !0
                },
                configurable: !0,
                enumerable: !0
            })
        }
    };
    _.aa = [];
    hb = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    ib = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    jb = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    kb = jb(this);
    lb = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.t = {};
    mb = {};
    C = function(a, b) {
        var c = mb[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    nb = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.t ? f = _.t : f = kb;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = lb && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ib(_.t, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (mb[d] = lb ? kb.Symbol(d) : "$jscp$" + d, d = mb[d], ib(f, d, {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    nb("Symbol", function(a) {
        if (a) return a;
        var b = function(e, f) {
            this.j = e;
            ib(this, "description", {
                configurable: !0,
                writable: !0,
                value: f
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = 0,
            d = function(e) {
                if (this instanceof d) throw new TypeError("Symbol is not a constructor");
                return new b("jscomp_symbol_" + (e || "") + "_" + c++, e)
            };
        return d
    }, "es6");
    nb("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.t.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = kb[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ib(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ob(hb(this))
                }
            })
        }
        return a
    }, "es6");
    ob = function(a) {
        a = {
            next: a
        };
        a[C(_.t.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.D = function(a) {
        var b = "undefined" != typeof _.t.Symbol && C(_.t.Symbol, "iterator") && a[C(_.t.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: hb(a)
        }
    };
    _.pb = function(a) {
        if (!(a instanceof Array)) {
            a = _.D(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    qb = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    };
    if (lb && "function" == typeof C(Object, "setPrototypeOf")) rb = C(Object, "setPrototypeOf");
    else {
        var sb;
        a: {
            var tb = {
                    a: !0
                },
                ub = {};
            try {
                ub.__proto__ = tb;
                sb = ub.a;
                break a
            } catch (a) {}
            sb = !1
        }
        rb = sb ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    vb = rb;
    _.F = function(a, b) {
        a.prototype = qb(b.prototype);
        a.prototype.constructor = a;
        if (vb) vb(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c]
    };
    wb = function() {
        this.o = !1;
        this.l = null;
        this.B = void 0;
        this.j = 1;
        this.D = this.v = 0;
        this.m = null
    };
    xb = function(a) {
        if (a.o) throw new TypeError("Generator is already running");
        a.o = !0
    };
    wb.prototype.A = function(a) {
        this.B = a
    };
    var yb = function(a, b) {
        a.m = {
            kc: b,
            bd: !0
        };
        a.j = a.v || a.D
    };
    wb.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.j = this.D
    };
    var ta = function(a, b, c) {
            a.j = c;
            return {
                value: b
            }
        },
        va = function(a, b) {
            a.j = b;
            a.v = 0
        },
        wa = function(a) {
            a.v = 0;
            var b = a.m.kc;
            a.m = null;
            return b
        },
        zb = function(a) {
            this.j = new wb;
            this.l = a
        },
        Cb = function(a, b) {
            xb(a.j);
            var c = a.j.l;
            if (c) return Ab(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.j.return);
            a.j.return(b);
            return Bb(a)
        },
        Ab = function(a, b, c, d) {
            try {
                var e = b.call(a.j.l, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.j.o = !1, e;
                var f = e.value
            } catch (g) {
                return a.j.l = null, yb(a.j, g), Bb(a)
            }
            a.j.l = null;
            d.call(a.j, f);
            return Bb(a)
        },
        Bb = function(a) {
            for (; a.j.j;) try {
                var b = a.l(a.j);
                if (b) return a.j.o = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.j.B = void 0, yb(a.j, c)
            }
            a.j.o = !1;
            if (a.j.m) {
                b = a.j.m;
                a.j.m = null;
                if (b.bd) throw b.kc;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        Db = function(a) {
            this.next = function(b) {
                xb(a.j);
                a.j.l ? b = Ab(a, a.j.l.next, b, a.j.A) : (a.j.A(b), b = Bb(a));
                return b
            };
            this.throw = function(b) {
                xb(a.j);
                a.j.l ? b = Ab(a, a.j.l["throw"], b, a.j.A) : (yb(a.j, b), b = Bb(a));
                return b
            };
            this.return = function(b) {
                return Cb(a, b)
            };
            this[C(_.t.Symbol, "iterator")] = function() {
                return this
            }
        },
        sa = function(a, b) {
            b = new Db(new zb(b));
            vb && a.prototype && vb(b, a.prototype);
            return b
        },
        Eb = function(a, b, c) {
            a instanceof String && (a = String(a));
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                if (b.call(c, f, e, a)) return {
                    i: e,
                    Kc: f
                }
            }
            return {
                i: -1,
                Kc: void 0
            }
        };
    nb("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Eb(this, b, c).i
        }
    }, "es6");
    nb("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            void 0 === c && (c = this.length);
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var d = b.length; 0 < d && 0 < c;)
                if (this[--c] != b[--d]) return !1;
            return 0 >= d
        }
    }, "es6");
    nb("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Eb(this, b, c).Kc
        }
    }, "es6");
    var Fb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        Gb = lb && "function" == typeof C(Object, "assign") ? C(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) Fb(d, e) && (a[e] = d[e])
            }
            return a
        };
    nb("Object.assign", function(a) {
        return a || Gb
    }, "es6");
    nb("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.l = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.m(function() {
                    h.o()
                })
            }
            this.j.push(g)
        };
        var d = kb.setTimeout;
        b.prototype.m = function(g) {
            d(g, 0)
        };
        b.prototype.o = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.B(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.B = function(g) {
            this.m(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.l = 0;
            this.o = void 0;
            this.j = [];
            var h = this.m();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.m = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.G),
                reject: g(this.B)
            }
        };
        e.prototype.G = function(g) {
            if (g === this) this.B(new TypeError("A Promise cannot resolve to itself"));
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
                h ? this.R(g) : this.v(g)
            }
        };
        e.prototype.R = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.B(k);
                return
            }
            "function" == typeof h ? this.J(h, g) : this.v(g)
        };
        e.prototype.B = function(g) {
            this.A(2, g)
        };
        e.prototype.v = function(g) {
            this.A(1, g)
        };
        e.prototype.A = function(g, h) {
            if (0 != this.l) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.l);
            this.l = g;
            this.o = h;
            this.D()
        };
        e.prototype.D = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.l(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.H = function(g) {
            var h = this.m();
            g.tb(h.resolve, h.reject)
        };
        e.prototype.J = function(g, h) {
            var k = this.m();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(n, y) {
                return "function" == typeof n ? function(A) {
                    try {
                        l(n(A))
                    } catch (B) {
                        m(B)
                    }
                } : y
            }
            var l, m, q = new e(function(n, y) {
                l = n;
                m = y
            });
            this.tb(k(g, l), k(h, m));
            return q
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.tb = function(g, h) {
            function k() {
                switch (l.l) {
                    case 1:
                        g(l.o);
                        break;
                    case 2:
                        h(l.o);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.l);
                }
            }
            var l = this;
            null == this.j ? f.l(k) : this.j.push(k)
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.D(g), m = l.next(); !m.done; m = l.next()) c(m.value).tb(h, k)
            })
        };
        e.all = function(g) {
            var h = _.D(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function q(A) {
                    return function(B) {
                        n[A] = B;
                        y--;
                        0 == y && l(n)
                    }
                }
                var n = [],
                    y = 0;
                do n.push(void 0), y++, c(k.value).tb(q(n.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    nb("Object.setPrototypeOf", function(a) {
        return a || vb
    }, "es6");
    nb("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.D(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!Fb(g, d)) {
                var k = new b;
                ib(g, d, {
                    value: k
                })
            }
            if (!Fb(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && Fb(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && Fb(g, d) && Fb(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && Fb(g, d) && Fb(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    nb("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.D([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var b = new _.t.WeakMap,
            c = function(h) {
                this.l = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.D(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.l[l.id] = []);
            l.la ? l.la.value = k : (l.la = {
                next: this.j,
                za: this.j.za,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.la), this.j.za.next = l.la, this.j.za = l.la, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.la && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.la.za.next = h.la.next, h.la.next.za = h.la.za, h.la.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.l = {};
            this.j = this.j.za = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).la
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).la) && h.value
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
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[C(_.t.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.l[l];
                if (m && Fb(h.l, l))
                    for (h = 0; h < m.length; h++) {
                        var q = m[h];
                        if (k !== k && q.key !== q.key || k === q.key) return {
                            id: l,
                            list: m,
                            index: h,
                            la: q
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    la: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return ob(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.za;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.za = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    nb("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    nb("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || C(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    nb("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    nb("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return C(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    nb("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.t.Symbol && C(_.t.Symbol, "iterator") && b[C(_.t.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    nb("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.D([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new _.t.Map;
            if (c) {
                c = _.D(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return this.j.entries()
        };
        b.prototype.values = function() {
            return this.j.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[C(_.t.Symbol, "iterator")] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    _.r = this || self;
    Hb = function(a, b) {
        a = a.split(".");
        var c = _.r;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    Kb = function(a) {
        if (a && a != _.r) return Ib(a.document);
        null === Jb && (Jb = Ib(_.r.document));
        return Jb
    };
    Lb = /^[\w+/_-]+[=]{0,2}$/;
    Jb = null;
    Ib = function(a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Lb.test(a) ? a : ""
    };
    _.Mb = function() {};
    Nb = function(a) {
        a.Ya = void 0;
        a.C = function() {
            return a.Ya ? a.Ya : a.Ya = new a
        }
    };
    Ob = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    Pb = function(a) {
        var b = Ob(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    Qb = function(a) {
        return "function" == Ob(a)
    };
    _.Rb = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    Ub = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Sb) && a[Sb] || (a[Sb] = ++Tb)
    };
    Sb = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Tb = 0;
    Vb = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Wb = function(a, b, c) {
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
    };
    _.Xb = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Xb = Vb : _.Xb = Wb;
        return _.Xb.apply(null, arguments)
    };
    _.Yb = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    Zb = Date.now;
    _.G = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    var $b;
    var bc, cc, fc, ec, hc, ic, jc, kc, lc, la, ma, nc, pc, mc, oc, qc, rc;
    _.ac = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    bc = function(a, b) {
        for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a)
    };
    _.ka = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.ia = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    cc = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.dc = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    fc = function(a, b) {
        b = ec(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    ec = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    };
    _.gc = function(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    hc = function(a, b) {
        b = Array.prototype.indexOf.call(a, b, void 0);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    ic = function(a, b) {
        var c = 0;
        bc(a, function(d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++
        })
    };
    jc = function(a) {
        return Array.prototype.concat.apply([], arguments)
    };
    kc = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    lc = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    la = function(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = _.Rb(f) ? "o" + Ub(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    };
    ma = function(a, b) {
        a.sort(b || mc)
    };
    nc = function(a, b) {
        for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || mc;
        ma(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (d = 0; d < a.length; d++) a[d] = c[d].value
    };
    pc = function(a, b) {
        if (!Pb(a) || !Pb(b) || a.length != b.length) return !1;
        for (var c = a.length, d = oc, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    mc = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    oc = function(a, b) {
        return a === b
    };
    qc = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    rc = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = rc.apply(null, lc(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    var sc = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return b
    };
    var tc = function() {
            return !0
        },
        uc = function(a) {
            var b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        },
        vc = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        },
        wc = function(a, b, c) {
            var d = 0,
                e = !1,
                f = [],
                g = function() {
                    d = 0;
                    e && (e = !1, h())
                },
                h = function() {
                    d = _.r.setTimeout(g, b);
                    a.apply(c, f)
                };
            return function(k) {
                f = arguments;
                d ? e = !0 : h()
            }
        };
    var xc = function(a, b) {
            for (var c in a) b.call(void 0, a[c], c, a)
        },
        yc = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        zc = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return !0;
            return !1
        },
        Ac = function(a, b) {
            return null !== a && b in a
        },
        Bc = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Cc = function(a, b) {
            for (var c in a)
                if (b.call(void 0, a[c], c, a)) return c
        },
        Dc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ec = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Dc.length; f++) c = Dc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        Fc = function(a) {
            var b = arguments.length;
            if (1 == b && Array.isArray(arguments[0])) return Fc.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var Ic = function(a, b) {
        this.j = a === Gc && b || "";
        this.l = Hc
    };
    Ic.prototype.kb = !0;
    Ic.prototype.Oa = function() {
        return this.j
    };
    var Jc = function(a) {
            return a instanceof Ic && a.constructor === Ic && a.l === Hc ? a.j : "type_error:Const"
        },
        Hc = {},
        Gc = {};
    var Mc = function(a, b) {
        this.j = a === Kc && b || "";
        this.l = Lc
    };
    Mc.prototype.kb = !0;
    Mc.prototype.Oa = function() {
        return this.j.toString()
    };
    var Nc = function(a) {
            return a instanceof Mc && a.constructor === Mc && a.l === Lc ? a.j : "type_error:TrustedResourceUrl"
        },
        ya = function(a) {
            var b = Jc(Oc);
            if (!Pc.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
            var c = b.replace(Qc, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
                d = a[e];
                return d instanceof Ic ? Jc(d) : encodeURIComponent(String(d))
            });
            return new Mc(Kc, c)
        },
        Qc = /%{(\w+)}/g,
        Pc = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Lc = {},
        Kc = {};
    var Rc = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        Sc = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Tc = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Uc = /&/g,
        Vc = /</g,
        Wc = />/g,
        Xc = /"/g,
        Yc = /'/g,
        Zc = /\x00/g,
        $c = /[\x00&<>"']/,
        bd = function(a, b) {
            var c = 0;
            a = Tc(String(a)).split(".");
            b = Tc(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = ad(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || ad(0 == f[2].length, 0 == g[2].length) || ad(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        ad = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var gd, dd, cd;
    _.ed = function(a, b) {
        this.j = a === cd && b || "";
        this.l = dd
    };
    _.ed.prototype.kb = !0;
    _.ed.prototype.Oa = function() {
        return this.j.toString()
    };
    _.fd = function(a) {
        return a instanceof _.ed && a.constructor === _.ed && a.l === dd ? a.j : "type_error:SafeUrl"
    };
    gd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.hd = function(a) {
        if (a instanceof _.ed) return a;
        a = "object" == typeof a && a.kb ? a.Oa() : String(a);
        gd.test(a) || (a = "about:invalid#zClosurez");
        return new _.ed(cd, a)
    };
    dd = {};
    cd = {};
    var id;
    a: {
        var jd = _.r.navigator;
        if (jd) {
            var kd = jd.userAgent;
            if (kd) {
                id = kd;
                break a
            }
        }
        id = ""
    }
    var H = function(a) {
            return -1 != id.indexOf(a)
        },
        ld = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var md = function() {
            return H("Trident") || H("MSIE")
        },
        nd = function() {
            return H("Firefox") || H("FxiOS")
        },
        pd = function() {
            return H("Safari") && !(od() || H("Coast") || H("Opera") || H("Edge") || H("Edg/") || H("OPR") || nd() || H("Silk") || H("Android"))
        },
        od = function() {
            return (H("Chrome") || H("CriOS")) && !H("Edge")
        },
        rd = function() {
            function a(e) {
                e = fc(e, d);
                return c[e] || ""
            }
            var b = id;
            if (md()) return qd(b);
            b = ld(b);
            var c = {};
            _.ac(b, function(e) {
                c[e[0]] = e[1]
            });
            var d = _.Yb(Ac, c);
            return H("Opera") ? a(["Version", "Opera"]) : H("Edge") ? a(["Edge"]) : H("Edg/") ? a(["Edg"]) : od() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
        },
        qd = function(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) return b[1];
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                    if (a && a[1]) switch (a[1]) {
                        case "4.0":
                            b = "8.0";
                            break;
                        case "5.0":
                            b = "9.0";
                            break;
                        case "6.0":
                            b = "10.0";
                            break;
                        case "7.0":
                            b = "11.0"
                    } else b = "7.0";
                    else b = c[1];
            return b
        };
    var ud = function() {
        this.j = "";
        this.l = td
    };
    ud.prototype.kb = !0;
    ud.prototype.Oa = function() {
        return this.j.toString()
    };
    var td = {};
    var pa = function(a, b) {
        a.src = Nc(b);
        (b = Kb(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    };
    var vd, wd, xd, yd, Ad;
    vd = function(a) {
        $c.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Uc, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Vc, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Wc, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Xc, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Yc, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Zc, "&#0;")));
        return a
    };
    wd = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    xd = function(a) {
        a = String(a);
        var b = a.indexOf("."); - 1 == b && (b = a.length);
        return wd("0", Math.max(0, 2 - b)) + a
    };
    yd = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Zb()).toString(36)
    };
    _.zd = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Ad = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Bd = 0,
        Cd = 0;
    var Dd = function() {
        this.j = []
    };
    Dd.prototype.length = function() {
        return this.j.length
    };
    var Ed = function(a, b) {
        for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
        a.j.push(b)
    };
    var Fd = function() {
        return H("iPhone") && !H("iPod") && !H("iPad")
    };
    var Gd = function(a) {
        Gd[" "](a);
        return a
    };
    Gd[" "] = _.Mb;
    var Hd = function(a, b) {
            try {
                return Gd(a[b]), !0
            } catch (c) {}
            return !1
        },
        Jd = function(a, b) {
            var c = Id;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
    var Kd = H("Opera"),
        Ld = md(),
        Md = H("Edge"),
        Nd = Md || Ld,
        Od = H("Gecko") && !(-1 != id.toLowerCase().indexOf("webkit") && !H("Edge")) && !(H("Trident") || H("MSIE")) && !H("Edge"),
        Pd = -1 != id.toLowerCase().indexOf("webkit") && !H("Edge"),
        Qd = Pd && H("Mobile"),
        Rd = H("Android"),
        Sd = Fd(),
        Td = H("iPad"),
        Ud = H("iPod"),
        Vd = function() {
            var a = _.r.document;
            return a ? a.documentMode : void 0
        },
        Wd;
    a: {
        var Xd = "",
            Yd = function() {
                var a = id;
                if (Od) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Md) return /Edge\/([\d\.]+)/.exec(a);
                if (Ld) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Pd) return /WebKit\/(\S+)/.exec(a);
                if (Kd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Yd && (Xd = Yd ? Yd[1] : "");
        if (Ld) {
            var Zd = Vd();
            if (null != Zd && Zd > parseFloat(Xd)) {
                Wd = String(Zd);
                break a
            }
        }
        Wd = Xd
    }
    var $d = Wd,
        Id = {},
        ae = function(a) {
            return Jd(a, function() {
                return 0 <= bd($d, a)
            })
        },
        be;
    if (_.r.document && Ld) {
        var ce = Vd();
        be = ce ? ce : parseInt($d, 10) || void 0
    } else be = void 0;
    var de = be;
    var ee = od(),
        fe = pd() && !(Fd() || H("iPad") || H("iPod"));
    var ge = {},
        he = null,
        ie = Od || Pd && !fe || Kd || "function" == typeof _.r.btoa,
        je = function(a, b) {
            void 0 === b && (b = 0);
            if (!he) {
                he = {};
                for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                    var f = c.concat(d[e].split(""));
                    ge[e] = f;
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g];
                        void 0 === he[h] && (he[h] = g)
                    }
                }
            }
            b = ge[b];
            c = [];
            for (d = 0; d < a.length; d += 3) {
                var k = a[d],
                    l = (e = d + 1 < a.length) ? a[d + 1] : 0;
                h = (f = d + 2 < a.length) ? a[d + 2] : 0;
                g = k >> 2;
                k = (k & 3) << 4 | l >> 4;
                l = (l & 15) << 2 | h >> 6;
                h &= 63;
                f || (h = 64, e || (l = 64));
                c.push(b[g], b[k], b[l] || "", b[h] || "")
            }
            return c.join("")
        };
    var ke = function() {
            this.l = [];
            this.j = new Dd
        },
        le = function(a, b, c) {
            if (null != c) {
                Ed(a.j, 8 * b);
                a = a.j;
                var d = c;
                c = 0 > d;
                d = Math.abs(d);
                b = d >>> 0;
                d = Math.floor((d - b) / 4294967296);
                d >>>= 0;
                c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
                Bd = b;
                Cd = d;
                c = Bd;
                for (b = Cd; 0 < b || 127 < c;) a.j.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
                a.j.push(c)
            }
        };
    var me, ne, oe, pe, v, qe, re, se, te, ve, ue, we, xe, ze, ye, Ae, Be, Ce, De, Fe;
    _.I = function() {};
    me = "function" == typeof Uint8Array;
    _.L = function(a, b, c, d) {
        a.j = null;
        b || (b = []);
        a.A = void 0;
        a.m = -1;
        a.ga = b;
        a: {
            if (b = a.ga.length) {
                --b;
                var e = a.ga[b];
                if (!(null === e || "object" != typeof e || Array.isArray(e) || me && e instanceof Uint8Array)) {
                    a.B = b - a.m;
                    a.l = e;
                    break a
                }
            }
            a.B = Number.MAX_VALUE
        }
        a.v = {};
        if (c)
            for (b = 0; b < c.length; b++) e = c[b], e < a.B ? (e += a.m, a.ga[e] = a.ga[e] || ne) : (oe(a), a.l[e] = a.l[e] || ne);
        if (d && d.length)
            for (b = 0; b < d.length; b++) {
                e = c = void 0;
                for (var f = a, g = d[b], h = 0; h < g.length; h++) {
                    var k = g[h],
                        l = _.J(f, k);
                    null != l && (e = k, c = l, _.K(f, k, void 0))
                }
                e && _.K(f, e, c)
            }
    };
    ne = [];
    oe = function(a) {
        var b = a.B + a.m;
        a.ga[b] || (a.l = a.ga[b] = {})
    };
    _.J = function(a, b) {
        if (b < a.B) {
            b += a.m;
            var c = a.ga[b];
            return c === ne ? a.ga[b] = [] : c
        }
        if (a.l) return c = a.l[b], c === ne ? a.l[b] = [] : c
    };
    pe = function(a, b) {
        a = _.J(a, b);
        return null == a ? a : +a
    };
    v = function(a, b) {
        a = _.J(a, b);
        return null == a ? a : !!a
    };
    qe = function(a) {
        return null == a || "string" === typeof a ? a : me && a instanceof Uint8Array ? je(a) : null
    };
    re = function(a, b, c) {
        a = _.J(a, b);
        return null == a ? c : a
    };
    se = function(a) {
        a = v(a, 12);
        return null == a ? !1 : a
    };
    te = function(a) {
        a = pe(a, 2);
        return null == a ? 1 : a
    };
    _.K = function(a, b, c) {
        b < a.B ? a.ga[b + a.m] = c : (oe(a), a.l[b] = c);
        return a
    };
    ve = function(a, b, c) {
        return ue(a, b, c, !1)
    };
    ue = function(a, b, c, d) {
        c !== d ? _.K(a, b, c) : b < a.B ? a.ga[b + a.m] = null : (oe(a), delete a.l[b]);
        return a
    };
    we = function(a, b, c) {
        _.J(a, b).push(c)
    };
    xe = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            var d = _.J(a, c);
            d && (a.j[c] = new b(d))
        }
        return a.j[c]
    };
    ze = function(a, b, c) {
        ye(a, b, c);
        b = a.j[c];
        b == ne && (b = a.j[c] = []);
        return b
    };
    ye = function(a, b, c) {
        a.j || (a.j = {});
        if (!a.j[c]) {
            for (var d = _.J(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
    };
    Ae = function(a, b, c) {
        a.j || (a.j = {});
        var d = c ? c.ga : c;
        a.j[b] = c;
        return _.K(a, b, d)
    };
    Be = function(a, b, c) {
        a.j || (a.j = {});
        c = c || [];
        for (var d = [], e = 0; e < c.length; e++) d[e] = c[e].ga;
        a.j[b] = c;
        return _.K(a, b, d)
    };
    Ce = function(a, b, c, d) {
        ye(a, d, b);
        var e = a.j[b];
        e || (e = a.j[b] = []);
        c = c ? c : new d;
        a = _.J(a, b);
        e.push(c);
        a.push(c.ga)
    };
    _.I.prototype.o = me ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return je(this)
        };
        try {
            return JSON.stringify(this.ga && this.ga, De)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
    } : function() {
        return JSON.stringify(this.ga && this.ga, De)
    };
    De = function(a, b) {
        return "number" !== typeof b || !isNaN(b) && Infinity !== b && -Infinity !== b ? b : String(b)
    };
    _.Ee = function(a, b) {
        return new a(b ? JSON.parse(b) : null)
    };
    Fe = function(a) {
        if (Array.isArray(a)) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) {
                var d = a[c];
                null != d && (b[c] = "object" == typeof d ? Fe(d) : d)
            }
            return b
        }
        if (me && a instanceof Uint8Array) return new Uint8Array(a);
        b = {};
        for (c in a) d = a[c], null != d && (b[c] = "object" == typeof d ? Fe(d) : d);
        return b
    };
    var Ge = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Ge, _.I);
    var He = document,
        Ie = window;
    var Je = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Je, _.I);
    var Ke = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Ke, _.I);
    var Ha = function(a) {
        this.j = a || {
            cookie: ""
        }
    };
    Ha.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.te;
            d = c.ue || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.tc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        c = f ? ";domain=" + f : "";
        g = g ? ";path=" + g : "";
        d = d ? ";secure" : "";
        h = 0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Zb() + 1E3 * h)).toUTCString();
        this.j.cookie = a + "=" + b + c + g + h + d + (null != e ? ";samesite=" + e : "")
    };
    Ha.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Tc(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    var Le = function(a) {
            return (a = (new Ha(a)).get("DATA_USE_CONSENT", "")) ? a : null
        },
        Me = function(a) {
            var b = (b = (new Ha(a)).get("FCCDCF", "")) ? b : null;
            try {
                var c = b ? _.Ee(Je, b) : null
            } catch (d) {
                c = null
            }
            if (!c) return Le(a);
            c = xe(c, Ke, 3);
            if (!c || null == _.J(c, 1)) return Le(a);
            a = _.J(c, 2);
            b = Date.now();
            if (a) {
                if (b < a || b > a + 33696E6) return null
            } else return null;
            return _.J(c, 1)
        };
    var Oe = function(a) {
        _.L(this, a, Ne, null)
    };
    _.G(Oe, _.I);
    var Ne = [1, 2, 3, 4];
    var ca;
    ca = uc(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.r.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.u = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, da(d)), !0) : !1
    };
    _.Pe = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, da(d)), !0) : !1
    };
    var Se = function(a, b, c) {
            "number" === typeof a ? (this.j = Qe(a, b || 0, c || 1), Re(this, c || 1)) : _.Rb(a) ? (this.j = Qe(a.getFullYear(), a.getMonth(), a.getDate()), Re(this, a.getDate())) : (this.j = new Date(Zb()), a = this.j.getDate(), this.j.setHours(0), this.j.setMinutes(0), this.j.setSeconds(0), this.j.setMilliseconds(0), Re(this, a))
        },
        Qe = function(a, b, c) {
            b = new Date(a, b, c);
            0 <= a && 100 > a && b.setFullYear(b.getFullYear() - 1900);
            return b
        };
    _.p = Se.prototype;
    _.p.getFullYear = function() {
        return this.j.getFullYear()
    };
    _.p.getMonth = function() {
        return this.j.getMonth()
    };
    _.p.getDate = function() {
        return this.j.getDate()
    };
    _.p.getTime = function() {
        return this.j.getTime()
    };
    _.p.set = function(a) {
        this.j = new Date(a.getFullYear(), a.getMonth(), a.getDate())
    };
    _.p.add = function(a) {
        if (a.v || a.B) {
            var b = this.getMonth() + a.B + 12 * a.v,
                c = this.getFullYear() + Math.floor(b / 12);
            b %= 12;
            0 > b && (b += 12);
            a: {
                switch (b) {
                    case 1:
                        var d = 0 != c % 4 || 0 == c % 100 && 0 != c % 400 ? 28 : 29;
                        break a;
                    case 5:
                    case 8:
                    case 10:
                    case 3:
                        d = 30;
                        break a
                }
                d = 31
            }
            d = Math.min(d, this.getDate());
            this.j.setDate(1);
            this.j.setFullYear(c);
            this.j.setMonth(b);
            this.j.setDate(d)
        }
        a.j && (a = new Date((new Date(this.getFullYear(), this.getMonth(), this.getDate(), 12)).getTime() + 864E5 * a.j), this.j.setDate(1), this.j.setFullYear(a.getFullYear()), this.j.setMonth(a.getMonth()), this.j.setDate(a.getDate()), Re(this, a.getDate()))
    };
    _.p.wb = function(a) {
        return [this.getFullYear(), xd(this.getMonth() + 1), xd(this.getDate())].join(a ? "-" : "")
    };
    _.p.toString = function() {
        return this.wb()
    };
    var Re = function(a, b) {
        a.getDate() != b && a.j.setUTCHours(a.j.getUTCHours() + (a.getDate() < b ? 1 : -1))
    };
    Se.prototype.valueOf = function() {
        return this.j.valueOf()
    };
    _.Te = function(a, b, c, d, e, f, g) {
        this.j = "number" === typeof a ? new Date(a, b || 0, c || 1, d || 0, e || 0, f || 0, g || 0) : new Date(a && a.getTime ? a.getTime() : Zb())
    };
    _.G(_.Te, Se);
    _.Te.prototype.add = function(a) {
        Se.prototype.add.call(this, a);
        a.l && this.j.setUTCHours(this.j.getUTCHours() + a.l);
        a.m && this.j.setUTCMinutes(this.j.getUTCMinutes() + a.m);
        a.o && this.j.setUTCSeconds(this.j.getUTCSeconds() + a.o)
    };
    _.Te.prototype.wb = function(a) {
        var b = Se.prototype.wb.call(this, a);
        return a ? b + "T" + xd(this.j.getHours()) + ":" + xd(this.j.getMinutes()) + ":" + xd(this.j.getSeconds()) : b + "T" + xd(this.j.getHours()) + xd(this.j.getMinutes()) + xd(this.j.getSeconds())
    };
    _.Te.prototype.toString = function() {
        return this.wb()
    };
    var Ue = !Ld || 9 <= Number(de),
        Ve = Ld || Kd || Pd;
    _.We = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.We.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.We.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.We.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Xe = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.Xe.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    _.Xe.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.Xe.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.Xe.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var $e, bf, af, ef, ff, hf, jf, mf, nf, Ye;
    $e = function(a) {
        return a ? new Ye(_.Ze(a)) : $b || ($b = new Ye)
    };
    bf = function(a, b) {
        xc(b, function(c, d) {
            c && "object" == typeof c && c.kb && (c = c.Oa());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : af.hasOwnProperty(d) ? a.setAttribute(af[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    af = {
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
    };
    _.df = function(a) {
        a = a.document;
        a = _.cf(a) ? a.documentElement : a.body;
        return new _.Xe(a.clientWidth, a.clientHeight)
    };
    ef = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Pd && _.cf(a) ? a.documentElement : a.body || a.documentElement
    };
    _.gf = function(a) {
        return a ? ff(a) : window
    };
    ff = function(a) {
        return a.parentWindow || a.defaultView
    };
    hf = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            if (!Pb(f) || _.Rb(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.Rb(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if (Qb(f)) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.ac(g ? kc(f) : f, d)
            }
        }
    };
    jf = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.cf = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.kf = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.lf = function(a) {
        var b;
        if (Ve && !(Ld && ae("9") && !ae("10") && _.r.SVGElement && a instanceof _.r.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.Rb(b) && 1 == b.nodeType ? b : null
    };
    _.Ze = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    mf = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.gf(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    nf = function(a, b) {
        if (9 == a.nodeType) var c = [a.documentElement];
        else
            for (c = [], a = a.lastElementChild; a; a = a.previousElementSibling) c.push(a);
        for (; 0 < c.length;) {
            a = c.pop();
            if (b(a)) return a;
            for (a = a.lastElementChild; a; a = a.previousElementSibling) c.push(a)
        }
        return null
    };
    Ye = function(a) {
        this.j = a || _.r.document || document
    };
    Ye.prototype.l = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = String(e[0]),
            g = e[1];
        if (!Ue && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', vd(g.name), '"');
            if (g.type) {
                f.push(' type="', vd(g.type), '"');
                var h = {};
                Ec(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = jf(d, f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : bf(f, g));
        2 < e.length && hf(d, f, e);
        return f
    };
    var of = function(a, b) {
        return jf(a.j, b)
    };
    var qf = function(a) {
            pf();
            return new Mc(Kc, a)
        },
        pf = _.Mb;
    var rf = function() {
        return H("iPad") || H("Android") && !H("Mobile") || H("Silk")
    };
    var tf, uf, Qa;
    _.sf = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    tf = function(a) {
        return a ? decodeURI(a) : a
    };
    uf = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) uf(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Qa = /#|$/;
    var vf, xf, fa, wf, yf, zf, Af, Df, Cf, Ef, Ff, Hf, If, Bf, Kf, Lf, Jf, Mf, Of, Pf, Qf, Rf, Sf, Tf, Uf, Vf, ea, Wf, Xf, Yf, $f, bg, dg, fg, gg, eg, hg, ig, jg, kg, lg, mg, og, pg, qg, Na, rg, sg, tg;
    vf = function(a) {
        try {
            return !!a && null != a.location.href && Hd(a, "foo")
        } catch (b) {
            return !1
        }
    };
    xf = function(a) {
        for (var b = _.r, c = 0; b && 40 > c++ && (!vf(b) || !a(b));) b = wf(b)
    };
    fa = function() {
        var a = _.r;
        xf(function(b) {
            a = b;
            return !1
        });
        return a
    };
    wf = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    yf = function(a) {
        return vf(a.top) ? a.top : null
    };
    zf = function(a, b) {
        var c = a.createElement("script");
        pa(c, qf(b));
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Af = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Df = function(a, b) {
        if (!Bf()) {
            var c = Math.random();
            if (c < b) return c = Cf(_.r), a[Math.floor(c * a.length)]
        }
        return null
    };
    Cf = function(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    };
    _.Ua = function(a, b, c) {
        if (a)
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    Ef = function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0
    };
    Ff = function(a) {
        var b = [];
        _.Ua(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.Gf = function(a) {
        var b = [];
        _.Ua(a, function(c) {
            b.push(c)
        });
        return b
    };
    Hf = function(a, b) {
        return Cc(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    If = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Bf = uc(function() {
        return _.dc(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Jf) || 1E-4 > Math.random()
    });
    Kf = function(a) {
        return Bf() ? null : Math.floor(1E3 * Cf(a))
    };
    Lf = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    Jf = function(a) {
        return -1 != id.indexOf(a)
    };
    Mf = /^(-?[0-9.]{1,30})$/;
    _.Nf = function(a, b) {
        return Mf.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    };
    Of = function() {
        return /^true$/.test("false")
    };
    Pf = function(a, b) {
        b = void 0 === b ? !0 : b;
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
    };
    Qf = function(a) {
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    Rf = {
        Hd: "allow-forms",
        Id: "allow-modals",
        Jd: "allow-orientation-lock",
        Kd: "allow-pointer-lock",
        Ld: "allow-popups",
        Md: "allow-popups-to-escape-sandbox",
        Nd: "allow-presentation",
        Od: "allow-same-origin",
        Pd: "allow-scripts",
        Qd: "allow-top-navigation",
        Rd: "allow-top-navigation-by-user-activation"
    };
    Sf = uc(function() {
        return _.Gf(Rf)
    });
    Tf = function(a) {
        var b = Sf();
        return a.length ? _.ka(b, function(c) {
            return !_.gc(a, c)
        }) : b
    };
    Uf = function() {
        var a = jf(document, "IFRAME"),
            b = {};
        _.ac(Sf(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Vf = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    ea = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    };
    Wf = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (ea(a, b)) return a;
            if (!(a = wf(a))) break
        }
        return null
    };
    Xf = uc(function() {
        return !rf() && (H("iPod") || H("iPhone") || H("Android") || H("IEMobile")) ? 2 : rf() ? 1 : 0
    });
    Yf = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.cg = function(a, b) {
        a.style.setProperty ? _.Ua(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = _.Zf($f(_.ag(a.style.cssText), bg(b, function(c) {
            return c + " !important"
        })))
    };
    $f = C(Object, "assign") || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    bg = function(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    };
    dg = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    fg = function(a) {
        return eg(a, function(b) {
            return "fixed" == b.position || "sticky" == b.position
        })
    };
    gg = function(a) {
        return eg(a, function(b) {
            return "left" == b["float"] || "right" == b["float"] || "left" == b.cssFloat || "right" == b.cssFloat
        })
    };
    eg = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            var d = Af(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    hg = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.ia(a, parseFloat)
    };
    _.Zf = function(a) {
        var b = [];
        _.Ua(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    };
    _.ag = function(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            _.ac((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    };
    ig = function(a, b) {
        a && a.setAttribute("data-google-container-id", b)
    };
    jg = function(a) {
        _.r.console && _.r.console.warn && _.r.console.warn(a)
    };
    kg = function(a, b) {
        b = ec(a, b);
        if (0 <= b) {
            var c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    };
    lg = [];
    mg = function() {
        var a = lg;
        lg = [];
        a = _.D(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    og = function(a) {
        lg.push(a);
        1 == lg.length && (_.t.Promise ? _.t.Promise.resolve().then(mg) : window.setImmediate ? setImmediate(mg) : setTimeout(mg, 0))
    };
    pg = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    qg = function() {
        var a = void 0 === a ? window : a;
        return (a = tf(a.location.href.match(_.sf)[3] || null)) ? If(a) : null
    };
    Na = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52))
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    rg = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    sg = function(a) {
        return 0 === a || rg(a)
    };
    tg = function(a, b) {
        var c = document.createElement("div");
        c.id = a;
        c.textContent = b;
        _.cg(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    var ug = {
        ce: 0,
        Xd: 1,
        Wd: 2,
        Vd: 3,
        fe: 4,
        ge: 5,
        ae: 6,
        Yd: 7
    };
    var vg = function() {
            return !!_.r.googlefc || ea(_.r.top, "googlefcPresent")
        },
        wg = function(a) {
            var b = document;
            try {
                var c = Me(b);
                var d = c ? _.Ee(Oe, c) : null
            } catch (e) {
                d = null
            }
            if (!d) return 0;
            if (v(d, 7)) return 4;
            if (a) {
                if (_.gc(_.J(d, 3), a)) return 2;
                if (_.gc(_.J(d, 4), a)) return 3
            }
            return 1
        },
        xg = uc(function() {
            var a = /[?&]fc(consent)?=alwaysshow([&#]|$)/;
            try {
                return a.test(_.r.top.location.href)
            } catch (b) {
                return a.test(_.r.location.href)
            }
        }),
        yg = function(a, b, c) {
            for (var d = Ff(ug).length, e = [], f = 0; f < d; f++) e[f] = 0;
            xg() && (a = !0);
            e[0] = a ? 1 : 2;
            d = void 0 !== c ? c : ha();
            e[5] = d ? 1 : 2;
            e[4] = 2;
            c = vg();
            e[1] = c ? 1 : 2;
            f = wg(b);
            0 != f ? b = {
                mc: f,
                oc: 3
            } : (f = _.r.top, b = {
                mc: ea(f, "googlefcInactive") ? 4 : b && ea(f, "googlefcPA-" + b) ? 2 : ea(f, "googlefcNPA") ? 3 : 0,
                oc: 2
            });
            f = b;
            b = f.mc;
            e[f.oc] = b;
            if (!d) a: switch (b) {
                case 2:
                case 4:
                    d = !1;
                    break a;
                case 3:
                    d = !0;
                    break a;
                case 1:
                    d = a;
                    break a;
                default:
                    d = (void 0 === c ? !1 : c) && a
            }
            return {
                Cd: b,
                Yb: d,
                Fc: 0 == b && a && c,
                nc: e.join(".")
            }
        },
        zg = function(a, b, c, d) {
            var e = yg(a, b, d);
            e.Fc ? _.r.setTimeout(function() {
                zg(a, b, c, d)
            }, 1E3) : c(e)
        };
    _.M = function() {
        this.na = this.na;
        this.R = this.R
    };
    _.M.prototype.na = !1;
    _.M.prototype.ua = function() {
        this.na || (this.na = !0, this.B())
    };
    _.Bg = function(a, b) {
        _.N(a, _.Yb(Ag, b))
    };
    _.N = function(a, b) {
        a.na ? b() : (a.R || (a.R = []), a.R.push(b))
    };
    _.M.prototype.B = function() {
        if (this.R)
            for (; this.R.length;) this.R.shift()()
    };
    var Ag = function(a) {
        a && "function" == typeof a.ua && a.ua()
    };
    var Cg = function(a) {
        this.l = 0;
        this.m = a || 100;
        this.j = []
    };
    Cg.prototype.add = function(a) {
        var b = this.j[this.l];
        this.j[this.l] = a;
        this.l = (this.l + 1) % this.m;
        return b
    };
    Cg.prototype.get = function(a) {
        a = Dg(this, a);
        return this.j[a]
    };
    Cg.prototype.set = function(a, b) {
        a = Dg(this, a);
        this.j[a] = b
    };
    var Eg = function(a) {
            for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++) c.push(a.get(d));
            return c
        },
        Dg = function(a, b) {
            if (b >= a.j.length) throw Error("Out of bounds exception");
            return a.j.length < a.m ? b : (a.l + Number(b)) % a.m
        };
    var ra = function(a, b) {
        var c = void 0;
        return new(c || (c = _.t.Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };
    var Gg = function(a, b, c) {
        c = void 0 === c ? function() {
            return !0
        } : c;
        _.M.call(this);
        var d = this;
        this.m = c;
        this.j = new Cg(100);
        this.l = [];
        var e = function(f) {
            if (d.m(f) && !d.na) {
                d.j.add(f);
                for (var g = _.D(d.l), h = g.next(); !h.done; h = g.next()) Fg(h.value, f)
            }
        };
        _.u(a, b, e) && _.N(this, function() {
            _.Pe(a, b, e)
        })
    };
    _.F(Gg, _.M);
    var Fg = function(a, b) {
            try {
                a(b)
            } catch (c) {
                "undefined" !== typeof console && console.error && console.error(c)
            }
        },
        Hg = function(a, b) {
            if (a.na) return function() {};
            for (var c = {}, d = 0; d < a.j.j.length; c = {
                    Gb: c.Gb
                }, d++) c.Gb = a.j.get(d), og(function(e) {
                return function() {
                    return void Fg(b, e.Gb)
                }
            }(c));
            a.l.push(b);
            return function() {
                return void hc(a.l, b)
            }
        };
    Gg.prototype.B = function() {
        _.M.prototype.B.call(this);
        var a = this.j;
        a.j.length = 0;
        a.l = 0;
        this.l.length = 0
    };
    var Ig = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        },
        Jg = function(a) {
            return new Ig(a.top, a.right, a.bottom, a.left)
        };
    Ig.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    Ig.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    Ig.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Kg = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Lg = function(a) {
            return new Ig(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Mg = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Kg(c, e, d - c, a - e)
            }
            return null
        };
    Kg.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Kg.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Kg.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ng = {
            "AMP-CAROUSEL": "ac",
            "AMP-FX-FLYING-CARPET": "fc",
            "AMP-LIGHTBOX": "lb",
            "AMP-STICKY-AD": "sa"
        },
        Og = function(a) {
            a = void 0 === a ? _.r : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        Pg = function() {
            var a = Og();
            return a && a.mode ? +a.mode.version || null : null
        },
        Qg = function() {
            var a = Og();
            if (a && a.container) {
                a = a.container.split(",");
                for (var b = [], c = 0; c < a.length; c++) b.push(Ng[a[c]] || "x");
                return b.join()
            }
            return null
        },
        Rg = function() {
            var a = Og();
            return a && a.initialIntersection
        },
        Sg = function() {
            var a = Og();
            var b;
            return (a = a && (b = a.initialLayoutRect) && "number" === typeof b.top && "number" === typeof b.left && "number" === typeof b.width && "number" === typeof b.height ? new Kg(b.left, b.top, b.width, b.height) : null) ? new _.We(a.left, a.top) : (b = Rg()) && _.Rb(b.rootBounds) ? new _.We(b.rootBounds.left + b.boundingClientRect.left, b.rootBounds.top + b.boundingClientRect.top) : null
        },
        Tg = function(a) {
            return (a = a || Og()) ? vf(a.master) ? a.master : null : null
        },
        Vg = function(a, b, c, d) {
            var e = a.ampInaboxIframes = a.ampInaboxIframes || [],
                f = function() {},
                g = function(k) {
                    if (a.ampInaboxInitialized) f();
                    else {
                        var l, m = "amp-ini-load" === k.data;
                        a.ampInaboxPendingMessages && !m && (l = /^amp-(\d{15,20})?/.exec(k.data)) && (a.ampInaboxPendingMessages.push(k), Ug(a, l[1]))
                    }
                },
                h = function() {};
            b && (e.push(b), h = function() {
                a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                hc(e, b);
                f()
            });
            if (a.ampInaboxInitialized) return h;
            a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
            c && /^\d{15,20}$/.test(c) && Ug(a, c);
            d ? f = Hg(d, g) : e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.u(a, "message", g), f = function() {
                _.Pe(a, "message", g)
            });
            return h
        },
        Ug = function(a, b) {
            a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || zf(a.document, "https://cdn.ampproject.org/" + (b ? "rtv/" + b + "/" : "") + "amp4ads-host-v0.js")
        },
        Wg = !!Og() && _.r != _.r.top,
        Xg = function(a) {
            a = Og(a);
            if (!a || !_.Rb(a.data) || "string" !== typeof a.data.type) return null;
            a = a.data.type.toLowerCase();
            return "doubleclick" == a || "adsense" == a ? null : a
        };
    var Yg = function(a, b) {
            a.google_image_requests || (a.google_image_requests = []);
            var c = a.document.createElement("img");
            c.src = b;
            a.google_image_requests.push(c)
        },
        $g = function(a, b) {
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.Ua(a, function(d, e) {
                d && (c += "&" + e + "=" + encodeURIComponent(d))
            });
            Zg(c)
        },
        Zg = function(a) {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Yg(b, a)
        };
    var ch, dh, eh, fh, gh, hh, mh, nh;
    _.bh = function(a, b, c) {
        if ("string" === typeof b)(b = _.ah(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.ah(c, d);
                f && (c.style[f] = e)
            }
    };
    ch = {};
    _.ah = function(a, b) {
        var c = ch[b];
        if (!c) {
            var d = _.zd(b);
            c = d;
            void 0 === a.style[d] && (d = (Pd ? "Webkit" : Od ? "Moz" : Ld ? "ms" : Kd ? "O" : null) + Ad(d), void 0 !== a.style[d] && (c = d));
            ch[b] = c
        }
        return c
    };
    dh = function(a, b) {
        var c = _.Ze(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    eh = function(a, b) {
        return dh(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    fh = function(a) {
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
    };
    gh = function(a) {
        if (Ld && !(8 <= Number(de))) return a.offsetParent;
        var b = _.Ze(a),
            c = eh(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = eh(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    hh = function(a) {
        var b = _.Ze(a),
            c = new _.We(0, 0);
        var d = b ? _.Ze(b) : document;
        d = !Ld || 9 <= Number(de) || _.cf($e(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = fh(a);
        d = $e(b).j;
        b = ef(d);
        d = ff(d);
        b = Ld && ae("10") && d.pageYOffset != b.scrollTop ? new _.We(b.scrollLeft, b.scrollTop) : new _.We(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    _.ih = function(a) {
        a = fh(a);
        return new _.We(a.left, a.top)
    };
    _.jh = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.kh = function(a, b) {
        if ("none" != eh(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.lh = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Pd && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = fh(a), new _.Xe(a.right - a.left, a.bottom - a.top)) : new _.Xe(b, c)
    };
    mh = function(a) {
        if (!a.getBoundingClientRect) return null;
        a = _.kh(fh, a);
        return new _.Xe(a.right - a.left, a.bottom - a.top)
    };
    nh = function(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)
            if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
            else {
                b = a.style.left;
                var d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = b;
                a.runtimeStyle.left = d;
                a = +c
            }
        else a = 0;
        return a
    };
    _.oh = function(a, b) {
        if (Ld) {
            var c = nh(a, b + "Left"),
                d = nh(a, b + "Right"),
                e = nh(a, b + "Top");
            a = nh(a, b + "Bottom");
            return new Ig(e, d, a, c)
        }
        c = dh(a, b + "Left");
        d = dh(a, b + "Right");
        e = dh(a, b + "Top");
        a = dh(a, b + "Bottom");
        return new Ig(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    var qh = function() {
            var a = ph();
            "google_onload_fired" in a || (a.google_onload_fired = !1, _.u(a, "load", function() {
                a.google_onload_fired = !0
            }))
        },
        rh = function() {
            var a = void 0 === a ? Ie : a;
            try {
                return a.history.length
            } catch (b) {
                return 0
            }
        },
        sh = function(a) {
            a = Tg(Og(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        th = !!window.google_async_iframe_id,
        uh = th && window.parent || window,
        ph = function() {
            if (th && !vf(uh)) {
                var a = "." + He.domain;
                try {
                    for (; 2 < a.split(".").length && !vf(uh);) He.domain = a = a.substr(a.indexOf(".") + 1), uh = window.parent
                } catch (b) {}
                vf(uh) || (uh = window)
            }
            return uh
        };
    Jc(new Ic(Gc, "//fonts.googleapis.com/css"));
    var vh = function() {
        var a, b = window.ActiveXObject;
        if (navigator.plugins && navigator.mimeTypes.length) {
            if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
        } else {
            if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                var c = 3;
                for (a = 1; a;) try {
                    a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                } catch (d) {
                    a = null
                }
                return c.toString()
            }
            if (md()) {
                a = null;
                try {
                    a = new b("ShockwaveFlash.ShockwaveFlash.7")
                } catch (d) {
                    c = 0;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                    } catch (e) {
                        if (6 === c) return c.toString()
                    }
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash")
                    } catch (e) {}
                }
                if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
            }
        }
        return "0"
    };
    var wh = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        xh = function(a, b) {
            b = void 0 === b ? _.r : b;
            a = a.scrollingElement || wh(a);
            return new _.We(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        yh = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var zh = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.Xe(b.innerWidth, b.innerHeight)).round() : _.df(b || window).round()
        } catch (d) {
            return new _.Xe(-12245933, -12245933)
        }
    };
    var Bh = function(a) {
        _.L(this, a, Ah, null)
    };
    _.G(Bh, _.I);
    var Ah = [15],
        Ch = function() {
            var a = new Bh,
                b = _.w(76);
            return ve(a, 7, b)
        },
        Dh = function() {
            var a = Ch(),
                b = _.w(77);
            return ve(a, 8, b)
        };
    var Eh = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Eh, _.I);
    var Fh = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Fh, _.I);
    var Gh = Of();
    var Hh = function(a) {
            this.methodName = a
        },
        Ih = new Hh(1),
        Jh = new Hh(15),
        Kh = new Hh(2),
        Lh = new Hh(3),
        Mh = new Hh(5),
        Nh = new Hh(6),
        Oh = new Hh(7),
        Ph = new Hh(8),
        Qh = new Hh(14),
        Rh = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Sh = function() {
            this.l = function(a, b) {
                return void 0 === b ? !1 : b
            };
            this.m = function(a, b) {
                return void 0 === b ? 0 : b
            };
            this.B = function(a, b) {
                return void 0 === b ? "" : b
            };
            this.o = function(a, b) {
                return b = void 0 === b ? [] : b
            };
            this.j = function() {}
        },
        Th = function(a, b, c) {
            a.l = function(d, e) {
                return Rh(Mh, b)(d, e, c)
            };
            a.m = function(d, e) {
                return Rh(Nh, b)(d, e, c)
            };
            a.B = function(d, e) {
                return Rh(Oh, b)(d, e, c)
            };
            a.o = function(d, e) {
                return Rh(Ph, b)(d, e, c)
            };
            a.j = function() {
                Rh(Jh, b)(c)
            }
        },
        Uh;
    Nb(Sh);
    _.w = function(a) {
        var b = void 0 === b ? !1 : b;
        return Sh.C().l(a, b)
    };
    _.x = function(a, b) {
        b = void 0 === b ? 0 : b;
        return Sh.C().m(a, b)
    };
    Uh = function(a) {
        var b = void 0 === b ? "" : b;
        return Sh.C().B(a, b)
    };
    _.Vh = function(a) {
        var b = void 0 === b ? [] : b;
        return Sh.C().o(a, b)
    };
    var Wh = function(a) {
            return !!a && a.top == a
        },
        Xh = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (Wh(a)) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Yh = function() {
            var a = ph();
            if (a == a.top) return 0;
            for (; a && a != a.top && vf(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var Zh = [/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(googleads|adx)\.g\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(?!adx)ad.*\.doubleclick\.net(:\d+)?($|\/)/i, /^https?:\/\/(tpc|pagead2)\.googlesyndication\.com(:\d+)?($|\/)/i, /^https?:\/\/www\.googletagservices\.com(:\d+)?($|\/)/i, /^https?:\/\/adservice\.google\.(com?\.)?[a-z]{2,3}(:\d+)?($|\/)/i],
        $h = function(a) {
            return _.dc(Zh, function(b) {
                return b.test(a)
            })
        },
        ai = function(a) {
            if (a = /[-\w]+\.[-\w]+$/.exec(a)) {
                a = a[0].toLowerCase();
                for (var b = 0, c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
                switch (b) {
                    case 1967261364:
                        return 0;
                    case 3147493546:
                        return 1;
                    case 1567346461:
                        return 2;
                    case 2183041838:
                        return 3;
                    case 763236279:
                        return 4;
                    case 1342279801:
                        return 5;
                    case 526831769:
                        return 6;
                    case 352806002:
                        return 7;
                    case 2755048925:
                        return 8;
                    case 3306848407:
                        return 9;
                    case 2207000920:
                        return 10;
                    case 484037040:
                        return 11;
                    case 3506871055:
                        return 12;
                    case 672143848:
                        return 13;
                    case 2528751226:
                        return 14;
                    case 2744854768:
                        return 15;
                    case 3703278665:
                        return 16;
                    case 2014749173:
                        return 17;
                    case 133063824:
                        return 18;
                    case 2749334602:
                        return 19;
                    case 3131239845:
                        return 20;
                    case 2074086763:
                        return 21;
                    case 795772493:
                        return 22;
                    case 290857819:
                        return 23;
                    case 3035947606:
                        return 24;
                    case 2983138003:
                        return 25;
                    case 2197138676:
                        return 26;
                    case 4216016165:
                        return 27;
                    case 239803524:
                        return 28;
                    case 975993579:
                        return 29;
                    case 1794940339:
                        return 30;
                    case 1314429186:
                        return 31;
                    case 1643618937:
                        return 32;
                    case 497159982:
                        return 33;
                    case 3882239661:
                        return 34
                }
            }
            return -1
        },
        bi = function(a) {
            if (!a.length) return 0;
            for (var b = [], c = 0; 34 >= c; c++) b[c] = 0;
            for (c = a.length - 1; 0 <= c; c--) {
                var d = ai(a[c]);
                0 <= d && (b[34 - d] = 1)
            }
            return parseInt(b.join(""), 2)
        };
    _.ci = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var di = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,
        fi = function(a) {
            a = (this.l = a || _.r) || _.r;
            this.m = a.top == a ? 1 : vf(a.top) ? 2 : 3;
            3 != this.m && Date.parse(_.r.top.document.lastModified);
            this.j = ei(this.l)
        },
        gi = function(a, b) {
            for (var c = 0, d = (a = a.j[Math.max(a.j.length - 1, 0)].url || null) && tf(a.match(_.sf)[3] || null), e = Math.min(b.length, 26), f = 0; f < e; f++) a = null != b[f] && tf(b[f].match(_.sf)[3] || null) || "", c *= 4, a && (d && a == d ? c += 3 : $h(b[f]) ? c += 2 : a && 0 <= ai(a) && (c += 1));
            return c
        },
        ei = function(a) {
            var b = a || _.r,
                c = [],
                d = null;
            do {
                var e = b;
                if (vf(e)) {
                    var f = e.location.href;
                    d = e.document && e.document.referrer || null
                } else f = d, d = null;
                c.push(new hi(f || "", e));
                try {
                    b = e.parent
                } catch (g) {
                    b = null
                }
            } while (b && e != b);
            e = 0;
            for (b = c.length - 1; e <= b; ++e) c[e].depth = b - e;
            e = a || _.r;
            if (e.location && e.location.ancestorOrigins && e.location.ancestorOrigins.length == c.length - 1)
                for (a = 1; a < c.length; ++a) b = c[a], b.url || (b.url = e.location.ancestorOrigins[a - 1] || "", b.qc = !0);
            return c
        },
        ii = function(a, b) {
            this.j = a;
            this.l = b
        },
        hi = function(a, b, c) {
            this.url = a;
            this.T = b;
            this.qc = !!c;
            this.depth = null
        };
    var ji = function() {
            this.m = "&";
            this.B = !1;
            this.l = {};
            this.o = 0;
            this.j = []
        },
        ki = function(a, b) {
            var c = {};
            c[a] = b;
            return [c]
        },
        mi = function(a, b, c, d, e) {
            var f = [];
            _.Ua(a, function(g, h) {
                (g = li(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        li = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(li(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(mi(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        ni = function(a, b, c, d) {
            a.j.push(b);
            a.l[b] = ki(c, d)
        },
        pi = function(a, b, c) {
            b = b + "//pagead2.googlesyndication.com" + c;
            var d = oi(a) - c.length;
            if (0 > d) return "";
            a.j.sort(function(m, q) {
                return m - q
            });
            c = null;
            for (var e = "", f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.l[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        c = null == c ? g : c;
                        break
                    }
                    var l = mi(h[k], a.m, ",$");
                    if (l) {
                        l = e + l;
                        if (d >= l.length) {
                            d -= l.length;
                            b += l;
                            e = a.m;
                            break
                        }
                        a.B && (e = d, l[e - 1] == a.m && --e, b += l.substr(0, e), e = a.m, d = 0);
                        c = null == c ? g : c
                    }
                }
            a = "";
            null != c && (a = e + "trn=" + c);
            return b + a
        },
        oi = function(a) {
            var b = 1,
                c;
            for (c in a.l) b = c.length > b ? c.length : b;
            return 3997 - b - a.m.length - 1
        };
    _.qi = function(a, b) {
        this.m = a;
        this.l = b;
        this.j = Math.random()
    };
    _.ri = function(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || a.l)) try {
            if (c instanceof ji) var f = c;
            else f = new ji, _.Ua(c, function(h, k) {
                var l = f,
                    m = l.o++;
                h = ki(k, h);
                l.j.push(m);
                l.l[m] = h
            });
            var g = pi(f, a.m, "/pagead/gen_204?id=" + b + "&");
            g && Yg(_.r, g)
        } catch (h) {}
    };
    var si = null,
        ti = function() {
            if (null === si) {
                si = "";
                try {
                    var a = "";
                    try {
                        a = _.r.top.location.hash
                    } catch (c) {
                        a = _.r.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        si = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return si
        };
    var wi;
    _.ui = function() {
        var a = _.r.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Zb()
    };
    _.vi = function(a) {
        a = void 0 === a ? _.r : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    wi = function(a) {
        var b = _.r.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var xi = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var yi, zi, Ai, Bi, Di, Ei, Gi;
    yi = _.r.performance;
    zi = !!(yi && yi.mark && yi.measure && yi.clearMarks);
    Ai = uc(function() {
        var a;
        if (a = zi) a = ti(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    Bi = function(a, b) {
        this.events = [];
        this.m = b || _.r;
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = Ai() || (null != c ? c : Math.random() < a)
    };
    Di = function(a) {
        a.j = !1;
        a.events != a.m.google_js_reporting_queue && (Ai() && _.ac(a.events, _.Ci), a.events.length = 0)
    };
    _.Ci = function(a) {
        a && yi && Ai() && (yi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), yi.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    Ei = function(a, b, c, d, e, f) {
        a.j && (b = new xi(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b))
    };
    Bi.prototype.start = function(a, b) {
        if (!this.j) return null;
        var c = _.vi() || _.ui();
        a = new xi(a, b, c);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        yi && Ai() && yi.mark(b);
        return a
    };
    _.Fi = function(a, b) {
        if (a.j && "number" === typeof b.value) {
            var c = _.vi() || _.ui();
            b.duration = c - b.value;
            c = "goog_" + b.label + "_" + b.uniqueId + "_end";
            yi && Ai() && yi.mark(c);
            !a.j || 2048 < a.events.length || a.events.push(b)
        }
    };
    Gi = function(a, b, c) {
        var d = _.vi();
        d && Ei(a, b, 9, d, 0, c)
    };
    var fb;
    _.Ji = function() {
        var a = Hi;
        this.B = Ii;
        this.l = null;
        this.o = this.Ab;
        this.j = void 0 === a ? null : a;
        this.m = !1
    };
    _.p = _.Ji.prototype;
    _.p.Dc = function(a) {
        this.l = a
    };
    _.p.Ec = function(a) {
        this.m = a
    };
    _.p.Ca = ba(1);
    _.p.ha = ba(3);
    _.p.Ab = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new ji;
            f.B = !0;
            ni(f, 1, "context", a);
            b.error && b.meta && b.id || (b = new _.ci(b, {
                message: _.Ki(b)
            }));
            b.msg && ni(f, 2, "msg", b.msg.substring(0, 512));
            var g = b.meta || {};
            if (this.l) try {
                this.l(g)
            } catch (y) {}
            if (d) try {
                d(g)
            } catch (y) {}
            b = [g];
            f.j.push(3);
            f.l[3] = b;
            var h = ei(),
                k = new hi(_.r.location.href, _.r, !1);
            b = null;
            var l = h.length - 1;
            for (d = l; 0 <= d; --d) {
                var m = h[d];
                !b && di.test(m.url) && (b = m);
                if (m.url && !m.qc) {
                    k = m;
                    break
                }
            }
            m = null;
            var q = h.length && h[l].url;
            0 != k.depth && q && (m = h[l]);
            var n = new ii(k, m);
            n.l && ni(f, 4, "top", n.l.url || "");
            ni(f, 5, "url", n.j.url || "");
            _.ri(this.B, e, f, this.m, c)
        } catch (y) {
            try {
                _.ri(this.B, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: _.Ki(y),
                    url: n && n.j.url
                }, this.m, c)
            } catch (A) {}
        }
        return !0
    };
    _.Ki = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = fb(a.stack, b));
        return b
    };
    fb = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (d) {
            return b
        }
    };
    var Li = function() {
            this.l = function() {};
            this.m = function() {
                return []
            };
            this.j = function() {
                return []
            }
        },
        Mi = function(a, b, c) {
            a.l = Rh(Ih, b, function() {});
            a.m = function(d) {
                return Rh(Kh, b, function() {
                    return []
                })(d, c)
            };
            a.j = function() {
                return Rh(Lh, b, function() {
                    return []
                })(c)
            }
        };
    Nb(Li);
    var Ni = function(a) {
        return Li.C().m(a)
    };
    _.Pi = function() {
        var a = _.Oi(38);
        this.j = null;
        this.m = !1;
        this.o = Math.random();
        this.l = void 0 === a ? .01 : a;
        this.B = this.Ab
    };
    _.p = _.Pi.prototype;
    _.p.Dc = function(a) {
        this.j = a
    };
    _.p.Ec = function(a) {
        this.m = a
    };
    _.p.Ab = function(a, b, c, d, e) {
        c = void 0 === c ? this.l : c;
        if ((this.m ? this.o : Math.random()) > c) return !1;
        b.error && b.meta && b.id || (b = new _.ci(b, {
            context: a,
            id: void 0 === e ? "gpt_exception" : e
        }));
        if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
        _.r.google_js_errors = _.r.google_js_errors || [];
        _.r.google_js_errors.push(b);
        _.r.error_rep_loaded || (zf(_.r.document, _.r.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js"), _.r.error_rep_loaded = !0);
        return !1
    };
    _.p.Ca = ba(0);
    _.p.ha = ba(2);
    var Qi = !1,
        Ri = 0,
        Si = function(a, b, c) {
            if (!Qi) {
                Qi = !0;
                var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
                if (Vf(d)) {
                    var e, f, g, h, k = a.requestIdleCallback;
                    k && (h = function(m) {
                        f = m.timeRemaining();
                        g = 0
                    });
                    var l = function(m) {
                        Qi && (b.push(m - e), e = m, k && (c.push(f || 0), g || (f = 0, g = k(h))), d(l))
                    };
                    d(function(m) {
                        e = m;
                        k && (g = k(h));
                        d(l)
                    })
                }
            }
        },
        Ti = function() {
            Qi = !1
        },
        Ui = function() {
            Ri && _.r.clearTimeout(Ri);
            Ri = Qi ? _.r.setTimeout(Ti, 1E4) : 0
        };
    var Vi = function(a) {
        return a._google_rum_ns_ = a._google_rum_ns_ || {}
    };
    var Wi = function(a, b, c) {
        var d = window;
        return function() {
            var e = _.vi(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (k) {
                f = 13;
                if (c) return c(a, k), g;
                throw k;
            } finally {
                if (d.google_measure_js_timing && e) {
                    var h = _.vi() || 0;
                    e = {
                        label: a.toString(),
                        value: e,
                        duration: h - e,
                        type: f
                    };
                    f = d.google_js_reporting_queue = d.google_js_reporting_queue || [];
                    2048 > f.length && f.push(e)
                }
            }
            return g
        }
    };
    var Xi = {},
        Yi = (Xi.companion_ads = "companionAds", Xi.content = "content", Xi.publisher_ads = "pubads", Xi),
        Zi = function(a) {
            return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
        };
    var cb, $i;
    _.db = function() {
        return _.r.googletag || (_.r.googletag = {})
    };
    cb = function(a, b) {
        var c = _.db();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    $i = function(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
    };
    var aj = new _.t.Map,
        bj = new _.t.Map,
        cj = function() {},
        dj = function(a, b) {
            return a instanceof b || a instanceof cj && (a = aj.get(a), a instanceof b) ? a : null
        },
        ej = function(a) {
            return (a = Yi[a]) ? _.db()[a]() : null
        };
    var fj = {
            247: "https://securepubads.g.doubleclick.net",
            7: .02,
            13: 1500,
            23: .001,
            37: .01,
            38: .001,
            58: 1,
            150: "",
            211: !1,
            152: [],
            172: null,
            191: "",
            192: "",
            190: "",
            245: {},
            180: null,
            246: [],
            227: {},
            226: [],
            248: 0,
            228: "//www.googletagservices.com/pubconsole/",
            249: !1,
            250: null,
            251: null
        },
        hj, ij, jj, kj;
    fj[6] = Pf(window);
    fj[49] = (new Date).getTime();
    fj[36] = Of();
    fj[148] = Gh;
    fj[221] = Of();
    fj[204] = _.Nf("-1", -1);
    var gj = function() {
        for (var a in fj) this[a] = fj[a]
    };
    Nb(gj);
    _.Oi = function(a) {
        return gj.C()[a]
    };
    hj = _.db();
    ij = gj.C();
    jj = hj._vars_;
    for (kj in jj) ij[kj] = jj[kj];
    hj._vars_ = ij;
    var mj = function(a) {
        _.L(this, a, lj, null)
    };
    _.G(mj, _.I);
    var lj = [2],
        nj = function(a) {
            return _.J(a, 1)
        },
        oj = function(a, b) {
            return _.K(a, 1, b)
        },
        pj = function(a, b) {
            return _.K(a, 2, b || [])
        };
    var qj = function(a) {
        _.L(this, a, null, null)
    };
    _.G(qj, _.I);
    var rj = function(a) {
        _.L(this, a, null, null)
    };
    _.G(rj, _.I);
    var sj = function(a) {
        _.L(this, a, null, null)
    };
    _.G(sj, _.I);
    var tj = function(a, b) {
            return _.K(a, 3, b)
        },
        uj = function(a, b) {
            return _.K(a, 4, b)
        };
    var wj = function(a) {
        _.L(this, a, vj, null)
    };
    _.G(wj, _.I);
    var vj = [2, 3, 7, 14],
        xj = function(a, b) {
            Be(a, 2, b)
        },
        yj = function(a) {
            return xe(a, rj, 25)
        };
    var zj = function(a) {
        _.L(this, a, null, null)
    };
    _.G(zj, _.I);
    var Aj = function(a, b) {
            return _.K(a, 1, b)
        },
        Bj = function(a, b) {
            return _.K(a, 2, b)
        },
        Cj = function() {
            var a = new zj;
            return _.K(a, 3, !0)
        };
    var Dj = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Dj, _.I);
    var Fj = function(a) {
        _.L(this, a, Ej, null)
    };
    _.G(Fj, _.I);
    var Ej = [2];
    var Hj = function(a) {
        _.L(this, a, Gj, null)
    };
    _.G(Hj, _.I);
    var Gj = [3, 4, 5, 6, 8, 9];
    Hj.prototype.getAdUnitPath = function() {
        return _.J(this, 1)
    };
    var Ij = function(a, b) {
        _.K(a, 2, b)
    };
    Hj.prototype.getClickUrl = function() {
        return _.J(this, 7)
    };
    var Kj = function(a, b) {
            Be(a, 9, b)
        },
        Lj = function(a) {
            return re(a, 15, 0)
        };
    var Mj = function(a) {
            return Array.isArray(a) && 2 == a.length ? _.w(360) ? rg(a[0]) && rg(a[1]) : sg(a[0]) && sg(a[1]) : "string" === typeof a && "fluid" == a
        },
        Nj = function(a) {
            return Array.isArray(a) && 2 == a.length && sg(a[0]) && sg(a[1])
        },
        Oj = function(a) {
            return Array.isArray(a) ? Bj(Aj(new zj, a[0]), a[1]) : Cj()
        },
        Qj = function(a) {
            var b = [];
            if (Pj(a)) b.push(Oj(a));
            else if (Array.isArray(a))
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    Pj(d) && b.push(Oj(d));
                    pc(d, ["fluid"]) && b.push(Cj())
                }
            return b
        },
        Rj = function(a) {
            if (!a || !Array.isArray(a) || 2 !== a.length) return null;
            var b = a[0];
            a = a[1];
            if ("number" === typeof b && 0 <= b) b = Math.floor(b);
            else if (null !== b) return null;
            if ("number" === typeof a && 0 <= a) a = Math.floor(a);
            else if (null !== a) return null;
            return Bj(Aj(new zj, b), a)
        },
        Sj = function(a) {
            var b = null,
                c = null;
            if (!a || Array.isArray(a) || !Array.isArray(a.fixed) && "fluid" !== a.fixed) var d = Qj(a);
            else if (d = Qj(a.fixed), c = Rj(a.max)) a.min ? ((b = Rj(a.min)) && null === _.J(b, 1) && Aj(b, 0), b && null === _.J(b, 2) && Bj(b, 0)) : b = Bj(Aj(new zj, 0), 0);
            if (a && !Array.isArray(a)) {
                if (a.max && !c) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
                if (a.min && !b) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            }
            if (c) {
                if (0 === _.J(c, 1) || 0 === _.J(c, 2)) throw Error("Invalid GPT size, maximums cannot be zero: " + JSON.stringify(a));
                if (b) {
                    var e = _.J(b, 1),
                        f = _.J(c, 1);
                    if (null != e && null != f && e > f) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    e = _.J(b, 2);
                    f = _.J(c, 2);
                    if (null != e && null != f && e > f) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            }
            d.length || jg("Invalid GPT fixed size specification: " + JSON.stringify(a));
            c && b ? (a = new Dj, c = Ae(a, 1, c), b = Ae(c, 2, b)) : b = null;
            return {
                Xc: d,
                Da: b
            }
        },
        Pj = function(a) {
            if (_.w(361)) return Mj(a);
            if (Array.isArray(a) && 1 < a.length) {
                var b = "number" === typeof a[0] && "number" === typeof a[1];
                a = !_.w(360) || 0 < a[0] && 0 < a[1];
                return b && a
            }
            return "string" === typeof a && "fluid" == a
        };
    var Tj = function(a, b) {
            a = C(a, "find").call(a, function(c) {
                c = xe(c, zj, 1);
                return _.J(c, 1) <= _.J(b, 1) && _.J(c, 2) <= _.J(b, 2)
            });
            return null == a ? null : ze(a, zj, 2)
        },
        Uj = function(a) {
            if (!Array.isArray(a) || 2 != a.length) throw Error("Each mapping entry has to be an array of size 2");
            var b = a[0];
            if (!Nj(b)) throw Error("Size has to be an array of two non-negative integers");
            b = Bj(Aj(new zj, b[0]), b[1]);
            if (Array.isArray(a[1]) && 0 == a[1].length) a = [];
            else if (a = Qj(a[1]), 0 == a.length) throw Error("At least one slot size must be present");
            var c = new Fj;
            b = Ae(c, 1, b);
            return Be(b, 2, a)
        };
    var Vj = function(a, b, c) {
            return "number" === typeof b && "number" === typeof c && 0 < ze(a, Fj, 6).length ? Tj(ze(a, Fj, 6), Bj(Aj(new zj, b), c)) : ze(a, zj, 5)
        },
        Wj = function(a) {
            var b = window,
                c = null;
            b.top == b && (b = zh(!1, b), c = Vj(a, b.width, b.height));
            null == c && (c = Vj(a));
            return c.map(function(d) {
                return v(d, 3) ? "fluid" : [_.J(d, 1), _.J(d, 2)]
            })
        },
        Xa = function(a) {
            var b = [],
                c = !1;
            a = _.D(Wj(a));
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d);
            c && b.unshift("320x50");
            return b.join("|")
        },
        Xj = function(a) {
            return (z = Wj(a), C(z, "includes")).call(z, "fluid")
        },
        Yj = function(a, b) {
            b = void 0 === b ? null : b;
            var c = 0,
                d = [];
            a && (d.push(a.getAdUnitPath()), d.push(Xa(a)), d.push(_.J(a, 2)));
            if (b) {
                a = [];
                for (var e = 0; b && 25 > e; b = b.parentNode, ++e) 9 === b.nodeType ? a.push("") : a.push(b.id);
                (b = a.join()) && d.push(b)
            }
            0 < d.length && (c = If(d.join(":")));
            return c.toString()
        },
        Zj = function(a) {
            return 0 !== a && 1 !== a
        };
    var ak = function() {
        var a = _.w(85) || _.w(84);
        _.r.google_measure_js_timing = a || _.r.google_measure_js_timing;
        Bi.call(this, a ? 1 : 0, _.r);
        this.l = 0
    };
    _.F(ak, Bi);
    Nb(ak);
    var dk = function(a, b, c) {
            if (_.J(b, 18)) return _.J(b, 18);
            a = c[_.bk(a)];
            return null != a ? ck(a) : null
        },
        ek = function(a, b, c, d) {
            return null != ck(c) ? !0 : a.some(function(e) {
                return null != dk(e, b[e.getSlotElementId()], d)
            })
        },
        fk = function(a) {
            if (_.w(168) || 15360 >= a.length) return a;
            var b = _.w(164) && /&supporting_urls=/.test(a),
                c = a;
            if (15360 < c.length) {
                var d = b ? -1 : c.lastIndexOf("&", 15352); - 1 !== d ? c = c.substring(0, d) : (c = c.substring(0, 15352), c = c.replace(/%\w?$/, ""), b && (c = c.replace(/&[^=]*=?$/, "")));
                c += "&trunc=1"
            }
            b = c;
            Ei(ak.C(), (9).toString(), 9, a.length - b.length + 8);
            return b
        },
        gk = function(a) {
            var b = a;
            "about:blank" != a && (b = b.replace(/</g, "%3C").replace(/>/g, "%3E").replace(/"/g, "%22").replace(/'/g, "%27"), /^https?:\/\//.test(b) || (b = "unknown:" + b));
            return b
        },
        hk = /\+/g,
        ik = function() {
            return "https://pagead2.googlesyndication.com"
        },
        Pa = function(a) {
            var b = a.document;
            return Wh(a) ? b.URL : b.referrer
        },
        jk = function(a) {
            try {
                var b = window.top,
                    c = new _.We(0, 0),
                    d = _.gf(_.Ze(a));
                if (Hd(d, "parent")) {
                    do {
                        var e = d == b ? hh(a) : _.ih(a);
                        c.x += e.x;
                        c.y += e.y
                    } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent))
                }
                var f = c
            } catch (g) {
                f = new _.We(-12245933, -12245933)
            }
            return f
        },
        kk = function(a, b) {
            if (null == b) return a;
            b = a.indexOf("google_preview=", a.lastIndexOf("?"));
            var c = a.indexOf("&", b); - 1 == c && (c = a.length - 1, --b);
            return a.substring(0, b) + a.substring(c + 1, a.length)
        },
        lk = uc(function() {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        }),
        mk = uc(function() {
            return !Ld && !Md
        }),
        nk = uc(function() {
            return !Ld && !Md
        }),
        ok = uc(function() {
            return !!Qf(_.r.location.href)
        }),
        pk = function(a) {
            var b = a.split("/");
            return "/" == a.charAt(0) && 2 <= b.length ? b[1] : "/" != a.charAt(0) && 1 <= b.length ? b[0] : ""
        },
        qk = function(a) {
            var b = [];
            b = a.map(function(c) {
                return pk(c.getAdUnitPath())
            });
            la(b);
            return b
        },
        rk = function(a) {
            return a ? (a = mh(a)) && a.floor() : null
        },
        sk = function(a) {
            return !!a && !!_.J(a, 1)
        },
        tk = function(a) {
            return !!v(a, 6) || _.w(364)
        },
        uk = function(a, b) {
            return a && 1 === b ? _.w(54) ? 1 : _.w(71) && _.w(65) ? 2 : 0 : 0
        },
        vk = function(a, b) {
            for (var c = {}, d = _.D(Object.keys(b)), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = b[e];
                f = new f.constructor(Fe(f.ga));
                c[e] = f
            }
            return {
                M: new a.constructor(Fe(a.ga)),
                P: c
            }
        },
        wk = function() {
            var a = window.crypto || window.msCrypto;
            if (void 0 !== a) {
                var b = new Uint8Array(16);
                a.getRandomValues(b)
            } else
                for (b = Array(16), a = 0; 16 > a; ++a) b[a] = Math.floor(255 * Math.random());
            a = "";
            b = _.D(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
            return a
        },
        xk = uc(wk),
        Ak = function(a, b) {
            return yk(a, b) || zk(a, b)
        },
        Bk = function(a, b) {
            var c = b.P;
            return v(b.M, 6) || v(c[a.getSlotElementId()], 17) ? null : zk(a)
        },
        Ck = function(a, b) {
            var c = a.slot,
                d = a.ca;
            a = null;
            Array.isArray(Wj(d)[0]) && (d = _.D(Wj(d)[0]), a = d.next().value, d = d.next().value, a = {
                width: a,
                height: d
            });
            a: {
                var e = Ak(c, b);b = {
                    Gc: a,
                    ic: !1
                };d = void 0 === b ? {} : b;b = void 0 === d.Gc ? null : d.Gc;c = void 0 === d.gd ? 100 : d.gd;a = void 0 === d.vd ? 50 : d.vd;d = void 0 === d.ic ? !0 : d.ic;
                for (var f = Zb(), g = !1; e;) {
                    if (!c-- || Zb() - f >= a) {
                        var h = !1;
                        break a
                    }
                    switch (e.nodeType) {
                        case 9:
                            try {
                                if (h = e.parentWindow || e.defaultView) {
                                    var k = h.frameElement;
                                    if (k && vf(h.parent)) {
                                        e = k;
                                        break
                                    }
                                }
                            } catch (y) {}
                            e = null;
                            break;
                        case 1:
                            var l = e,
                                m;
                            if (m = d) {
                                b: {
                                    try {
                                        if (0 < l.offsetWidth && 0 < l.offsetHeight && l.style && "none" !== l.style.display && "hidden" !== l.style.visibility && (!l.style.opacity || 0 !== Number(l.style.opacity))) {
                                            var q = l.getBoundingClientRect();
                                            var n = 0 < q.right && 0 < q.bottom;
                                            break b
                                        }
                                    } catch (y) {}
                                    n = !1
                                }
                                m = !n
                            }
                            if (m) {
                                h = !1;
                                break a
                            }
                            g || (/^html|body$/i.test(l.tagName) ? g = null : (g = l.style.position || (Af(l, window) || {}).position, g = /^fixed/i.test(g) ? l : null), g = !!g && (!b || g.offsetWidth * g.offsetHeight <= 4 * b.width * b.height));
                            e = e.parentNode
                    }
                }
                h = g
            }
            return h
        },
        Ek = function(a, b, c, d) {
            var e = c.slot,
                f = c.ca;
            c = jk(b);
            if (!c) return c;
            var g = b === zk(e, a),
                h = uc(function() {
                    return g ? Dk(e, a) || {} : Af(b, window) || {}
                });
            f = Wj(f)[0];
            var k = !1;
            Array.isArray(f) && (k = d ? g : 0 == c.x && "center" == h()["text-align"]);
            k && (c.x += Math.round(Math.max(0, (g ? b.clientWidth : b.parentElement.clientWidth) - f[0]) / 2));
            g && (c.y += Math.round(Math.min(parseInt(h()["padding-top"], 10) || 0, b.clientHeight)), k || (d = b.clientWidth, c.x += Math.round(Math.min(parseInt(h()["padding-left"], 10) || 0, d))));
            return c
        },
        Fk = function() {
            return Math.floor(Math.random() * Math.pow(2, 52))
        },
        Gk = function(a, b, c) {
            try {
                var d = xh(top.document, top).y,
                    e = d + b.height * (c + 1);
                return a.y >= d && a.y <= e
            } catch (f) {
                return !0
            }
        },
        Hk = function(a, b, c) {
            var d = Ak(a.slot, b);
            return d ? (a = Ek(b, d, a, c)) ? a && yh(d) ? a : new _.We(-12245933, -12245933) : null : null
        },
        Ik = function(a, b, c, d) {
            c = Hk(c, a.document, d);
            if (!c || -12245933 == c.y) return !0;
            a = zh(!0, a);
            return Gk(c, a, b)
        };
    var La = function() {
        return "2020070801"
    };
    cb("getVersion", La);
    var Jk, Lk, Kk, Mk, Rk, Pk;
    Jk = function(a, b, c) {
        b = void 0 === b ? "https://pagead2.googlesyndication.com" : b;
        if (null == c || 0 > c || 1 < c) c = _.Oi(23);
        this.m = Math.random();
        this.v = this.m < c;
        this.j = a;
        this.o = Na(_.r);
        this.B = b;
        this.l = {
            pvsid: this.o
        }
    };
    _.E = function(a, b, c) {
        "string" != typeof c && (c = String(c));
        /^\w+$/.test(b) && c && (a.l[b] = c)
    };
    Lk = function(a, b, c) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        b = void 0 === b ? null : b;
        c = void 0 === c ? !1 : c;
        if (ok()) b = !0;
        else {
            var d = a.v;
            b && 0 <= b && (d = (c ? a.m : Math.random()) < b);
            b = d && !!a.j
        }
        b && (_.w(305) ? $g(a.l, a.j) : (a = Kk(a) || "", Yg(window, a)))
    };
    Kk = function(a) {
        var b = a.B + "/pagead/gen_204?id=" + encodeURIComponent(a.j);
        _.Ua(a.l, function(c, d) {
            c && (b += "&" + d + "=" + encodeURIComponent(c))
        });
        return b
    };
    Mk = function(a, b) {
        b.length && (3 >= b.length ? _.E(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), _.E(a, "nw_id", b.join())))
    };
    _.eb = function(a, b) {
        b = void 0 === b ? null : b;
        var c = void 0 === c ? document : c;
        _.E(a, "vrg", La());
        b ? (Mk(a, Nk(b)), _.E(a, "nslots", Ok(b).toString())) : (Mk(a, qk(Pk)), _.E(a, "nslots", Pk.length.toString()));
        b = Li.C().j();
        b.length && _.E(a, "eid", b.join());
        _.E(a, "pub_url", c.URL)
    };
    Rk = function(a) {
        var b = void 0 === b ? Infinity : b;
        var c = Pk.map(function(d) {
            return Qk(d)
        });
        ic(c, function(d) {
            return !d
        });
        la(c);
        c.length = Math.min(b, c.length);
        _.E(a, "qqids", c.join(","))
    };
    _.Wa = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.se || "https://pagead2.googlesyndication.com";
        c = c.ya;
        if (void 0 === c || 0 > c || 1 < c) c = _.Oi(23);
        Math.random() < c && (a = new Jk(a, d), b(a), Lk(a, 1, !0))
    };
    Pk = [];
    var Sk, Tk, Vk, Uk, Q, P, Yk, Xk;
    Sk = _.Oi(38);
    Tk = function(a, b) {
        a = {
            methodId: a
        };
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = fb(b.stack, ""));
        return a
    };
    Vk = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        Uk(a, b);
        if (!c) throw b;
    };
    Uk = function(a, b, c) {
        c = void 0 === c ? Sk : c;
        if (!b.isReported) try {
            b.isReported = !0;
            var d = Tk(a, b),
                e = new Jk("gpt_exception");
            try {
                _.eb(e)
            } catch (f) {}
            _.Ua(d, function(f, g) {
                return _.E(e, g, f)
            });
            Lk(e, c)
        } catch (f) {}
    };
    Q = function(a, b, c) {
        return P(a, b, c, _.w(144))
    };
    P = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return c || !0 !== _.Oi(249) ? function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            g = !1;
            var h = null,
                k = c || Vk,
                l = ak.C();
            try {
                var m = _.w(85);
                m && l && (h = l.start(a.toString(), 3));
                var q = b.apply(this, f);
                g = !0;
                m && l && _.Fi(l, h)
            } catch (y) {
                g ? Uk(110, y) : q = k.call(this, a, y), _.Ci(h)
            }
            if (d) try {
                var n = Error();
                _.Wa("gpt_api_usage", function(y) {
                    _.E(y, "methodId", a);
                    _.E(y, "args", f.length);
                    _.E(y, "stack", fb(n.stack, n.message));
                    _.eb(y)
                }, {
                    ya: 1
                })
            } catch (y) {}
            return q
        } : b
    };
    _.Wk = function(a, b, c) {
        return P(a, b, c, !1)()
    };
    Yk = function() {
        var a, b = window;
        if (a = _.w(86)) b._google_rum_ns_ ? (a = Vi(b), a = !(!a.raf || !a.ric)) : a = !1, a = !a;
        if (a) {
            var c = Vi(b);
            c.raf = c.raf || [];
            c.ric = c.ric || [];
            a = c.raf;
            c = c.ric;
            Si(b, a, c);
            $i(b, Xk);
            b.setTimeout(Ti, 6E4)
        }
    };
    Xk = function() {
        Ui()
    };
    var Zk = function(a) {
        this.push = Q(76, function(b) {
            return a.push.apply(a, arguments)
        })
    };
    _.F(Zk, cj);
    var $k = function(a, b) {
        b = void 0 === b ? [] : b;
        this.l = a;
        this.j = b
    };
    $k.prototype.getMessageId = function() {
        return this.l
    };
    $k.prototype.getMessageArgs = function() {
        return this.j
    };
    var al = function(a, b, c, d, e) {
        this.l = new Date;
        this.v = d && d.j();
        this.o = c && c.j();
        this.B = a;
        this.m = b;
        this.j = e
    };
    _.p = al.prototype;
    _.p.getSlot = function() {
        return this.v
    };
    _.p.getService = function() {
        return this.o
    };
    _.p.getLevel = function() {
        return this.B
    };
    _.p.getTimestamp = function() {
        return this.l
    };
    _.p.getMessage = function() {
        return this.m
    };
    _.p.getReference = function() {
        return this.j
    };
    _.p.toString = function() {
        var a = this.l.toTimeString() + ": " + bl[this.B] + ": " + this.m;
        this.j && (a += " Duration: " + (this.l.getTime() - this.j.getTimestamp().getTime()) + "ms.");
        return a
    };
    var bl = ["Debug", "Info", "Warning", "Error", "Fatal"];
    var cl = function() {
            this.j = new Cg(1E3)
        },
        dl = function(a, b) {
            return Eg(a.j).filter(function(c) {
                return c.getService() === b
            })
        },
        el = function(a, b) {
            return Eg(a.j).filter(function(c) {
                return c.getSlot() === b
            })
        },
        fl = function(a, b) {
            return Eg(a.j).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    cl.prototype.log = function(a, b, c, d, e) {
        a = new al(a, b, void 0 === c ? null : c, void 0 === d ? null : d, void 0 === e ? null : e);
        this.j.add(a);
        return a
    };
    cl.prototype.info = function(a, b, c, d) {
        return this.log(1, a, b, c, d)
    };
    cl.prototype.I = function(a, b, c, d) {
        return this.log(2, a, b, c, d)
    };
    cl.prototype.error = function(a, b, c, d) {
        return this.log(3, a, b, c, d)
    };
    Nb(cl);
    var gl = uc(function() {
            var a = _.Vh(5).indexOf(String(qg()));
            a = _.Vh(6)[a] || "";
            var b = void 0 === b ? window.document : b;
            if (a && b.head) {
                var c = document.createElement("meta");
                c.httpEquiv = "origin-trial";
                c.content = a;
                b.head.appendChild(c)
            }
        }),
        hl = function(a) {
            var b = void 0 === b ? navigator : b;
            gl();
            b = "scheduling" in b && "isInputPending" in b.scheduling && b.scheduling.isInputPending();
            var c = _.x(31);
            b && Math.random() < c && setTimeout(function() {
                _.Wa("gpt_input_pending", function(d) {
                    _.eb(d);
                    _.E(d, "ctx", a);
                    _.E(d, "corr", Na(_.r));
                    var e = Error("inputPending");
                    _.E(d, "stack", fb(e.stack, e.message))
                }, {
                    ya: 1
                })
            }, 1);
            return b
        };
    var jl = function(a, b) {
            var c = b || il;
            return function() {
                var d = this || _.r;
                d = d.closure_memoize_cache_ || (d.closure_memoize_cache_ = {});
                var e = c(Ub(a), arguments);
                return d.hasOwnProperty(e) ? d[e] : d[e] = a.apply(this, arguments)
            }
        },
        il = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
    var kl = function() {
        _.M.call(this)
    };
    _.F(kl, _.M);
    kl.prototype.j = function() {
        if (_.w(372)) {
            var a = bj.get(this);
            if (a) return a
        }
        a = this.Ba();
        aj.set(a, this);
        _.w(372) && bj.set(this, a);
        return a
    };
    var ll = kl.prototype,
        ml = ll.j;
    ll.j = _.w(372) ? ml : jl(ml);
    var R = function(a) {
            return function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return new $k(a, _.pb(c).concat())
            }
        },
        nl = function(a) {
            return "[" + a.map(function(b) {
                return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? nl(b) : String(b)
            }).join(", ") + "]"
        },
        ol = function(a, b) {
            b = nl(b);
            b = b.substring(1, b.length - 1);
            return new $k(96, [a, b])
        },
        pl = R(1),
        ql = R(2),
        rl = R(3),
        sl = R(4),
        tl = R(5),
        ul = R(6),
        vl = R(8),
        wl = R(12),
        xl = R(14),
        yl = R(16),
        zl = R(17),
        Al = R(19),
        Bl = R(20),
        Cl = R(23),
        Dl = R(26),
        El = R(27),
        Fl = R(28),
        Gl = R(30),
        Hl = R(31),
        Il = R(34),
        Jl = R(35),
        Kl = R(36),
        Ll = R(37),
        Ml = R(38),
        Nl = R(40),
        Ol = R(42),
        Pl = R(43),
        Ql = R(44),
        Rl = R(45),
        Sl = R(46),
        Tl = R(47),
        Ul = R(48),
        Vl = R(50),
        Wl = R(57),
        Xl = R(58),
        Yl = R(59),
        Zl = R(60),
        $l = R(61),
        am = R(62),
        bm = R(63),
        cm = R(64),
        dm = R(66),
        em = R(68),
        fm = R(70),
        gm = R(71),
        hm = R(74),
        im = R(76),
        jm = R(78),
        km = R(79),
        lm = R(80),
        mm = R(82),
        nm = R(84),
        om = R(85),
        pm = R(87),
        qm = R(88),
        rm = R(90),
        sm = R(92),
        tm = R(93),
        um = R(94),
        vm = R(95),
        wm = R(99),
        xm = R(100),
        ym = R(101),
        zm = R(102),
        Am = R(103),
        Bm = R(104),
        Cm = R(105),
        Dm = R(106),
        Em = R(107),
        Fm = R(108),
        Gm = R(109),
        Hm = R(110),
        Im = R(111),
        Jm = R(113),
        Km = R(114),
        Lm = R(115),
        Mm = R(116);
    var Nm = function() {
        _.M.call(this);
        this.A = this.l = 0
    };
    _.F(Nm, kl);
    Nm.prototype.Ba = function() {
        return new Zk(this)
    };
    Nm.prototype.push = function(a) {
        for (var b = cl.C(), c = 0; c < arguments.length; ++c) try {
            "function" === typeof arguments[c] && (arguments[c](), this.l++)
        } catch (d) {
            this.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(Gl(String(d.message)))
        }
        b.info(Hl(String(this.l), String(this.A)));
        return this.l
    };
    var Pm = function() {
        Nm.call(this);
        var a = this;
        this.o = [];
        this.D = !1;
        this.v = this.m = 0;
        this.G = P(635, function() {
            a.m = 0;
            Om(a)
        })
    };
    _.F(Pm, Nm);
    var Qm = function(a) {
            return a.D || !a.o.length ? 0 : _.w(171) ? 1 : _.w(170) ? hl(1) ? 1 : 0 : _.w(247) && hl(1) ? 2 : 0
        },
        Rm = function(a) {
            a.m || (a.m = setTimeout(a.G, _.x(23)))
        },
        Om = function(a) {
            if (a.m) {
                if (!a.D) return;
                clearTimeout(a.m);
                a.m = 0
            }
            for (var b = cl.C(); a.o.length;) {
                var c = a.o.shift();
                try {
                    c(), a.l++
                } catch (e) {
                    a.A++, window.console && window.console.error && window.console.error("Exception in queued GPT command", e), b.error(Gl(String(e.message)))
                }
                c = Qm(a);
                if (1 === c) {
                    Rm(a);
                    break
                } else 2 === c && (a.v = a.v || _.ui())
            }
            b.info(Hl(String(a.l), String(a.A)));
            if (a.v) {
                var d = _.ui() - a.v;
                a.v = 0;
                setTimeout(function() {
                    return void _.Wa("gpt_input_pending", function(e) {
                        _.eb(e);
                        _.E(e, "ctx", 4);
                        _.E(e, "corr", Na(_.r));
                        _.E(e, "ptr", d)
                    }, {
                        ya: 1
                    })
                }, 1)
            }
        },
        Sm = function(a, b) {
            a.o = _.pb(a.o).concat(_.pb(b.filter(Qb)));
            _.w(173) && 1 === Qm(a) ? Rm(a) : Om(a)
        };
    Pm.prototype.push = function(a) {
        for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
        this.D = _.w(172);
        Sm(this, b);
        return this.l
    };
    var Tm = function() {
        if (_.w(176)) {
            var a = _.db().cmd;
            if (!a || Array.isArray(a)) {
                var b = new Pm;
                _.db().cmd = b.j();
                a && 0 < a.length && Sm(b, a)
            }
        } else if (a = _.db().cmd, !a || Array.isArray(a)) b = new Nm, _.db().cmd = b.j(), a && 0 < a.length && b.push.apply(b, a)
    };
    Tm = P(77, Tm);
    var Um = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Um, _.I);
    var Wm = function(a) {
        _.L(this, a, Vm, null)
    };
    _.G(Wm, _.I);
    var Vm = [13];
    var Ym = function(a) {
        _.L(this, a, Xm, null)
    };
    _.G(Ym, _.I);
    var Xm = [13];
    var Zm = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Zm, _.I);
    var $m = function(a) {
        _.L(this, a, null, null)
    };
    _.G($m, _.I);
    var an = function(a) {
        _.L(this, a, null, null)
    };
    _.G(an, _.I);
    var dn = function(a) {
        _.L(this, a, bn, cn)
    };
    _.G(dn, _.I);
    var en = function(a) {
        _.L(this, a, null, null)
    };
    _.G(en, _.I);
    var bn = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38],
        cn = [
            [4, 41],
            [39, 48]
        ];
    en.prototype.getHtml = function() {
        return _.J(this, 1)
    };
    var gn = function(a) {
        _.L(this, a, fn, null)
    };
    _.G(gn, _.I);
    var hn = function(a) {
        _.L(this, a, null, null)
    };
    _.G(hn, _.I);
    var fn = [1],
        jn = function(a) {
            var b = new hn;
            return ue(b, 1, a, 0)
        },
        kn = function(a, b) {
            return ue(a, 2, b, 0)
        },
        ln = function(a, b) {
            Ce(a, 1, b, hn)
        };
    var nn = function(a, b) {
            var c = window;
            a: {
                try {
                    if (a) {
                        var d = a.getItem("google_experiment_mod");
                        break a
                    }
                } catch (h) {}
                d = null
            }
            var e = d || "";
            d = null;
            try {
                if (d = _.Ee(gn, e), e) {
                    var f = _.Ee(gn, e);
                    ln(f, kn(jn(1), -1));
                    f.o()
                }
            } catch (h) {
                mn(e), d = new gn
            }
            f = ze(d, hn, 1);
            if (f = fc(f, function(h) {
                    return re(h, 1, 0) === b
                })) {
                var g = re(f, 2, 0);
                if (null === g || isNaN(g)) mn(e);
                else return g
            }
            c = Kf(c);
            if (null === c) return null;
            f ? kn(f, c) : ln(d, kn(jn(b), c));
            return Lf(a, d.o()) ? c : null
        },
        mn = function(a) {
            .01 > Math.random() && $g({
                data: a
            }, "ls_tamp")
        };
    var on = {},
        pn = (on[3] = "https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js", on),
        qn = {},
        rn = (qn[3] = "https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js", qn);
    var sn = function(a) {
            this.j = a;
            this.l = yd()
        },
        tn = function(a) {
            var b = {};
            _.ac(a, function(c) {
                b[c.j] = c.l
            });
            return b
        };
    var $a = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.A = b.rootMargin ? ja(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = _.ia(this.A, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.R = na(b.threshold);
            this.D = a;
            this.j = [];
            this.B = [];
            this.o = !1;
            this.l = null;
            this.m = wc(this.v, 100, this)
        },
        un = function(a) {
            if (a.root) var b = oa(a.root);
            else {
                var c = _.df(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = _.ia(a.A, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        vn = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.dc(a.R, function(f) {
                return f < d != f < e
            })
        };
    $a.prototype.v = function() {
        var a = this,
            b = un(this);
        _.ac(this.j, function(c) {
            var d = c.target,
                e = oa(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                q = k - g;
            g = 0 <= m && 0 <= q ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: q
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            f = f ? k / f : h ? 1 : 0;
            k = (k = window.performance) && k.now ? k.now() : 0;
            d = {
                boundingClientRect: e,
                intersectionRatio: f,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: k
            };
            vn(a, c.la, d) && a.B.push(d);
            c.la = d
        });
        this.B.length && this.D(wn(this), this)
    };
    $a.prototype.observe = function(a) {
        _.dc(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            la: null
        }), this.v(), this.o || (this.o = !0, _.u(_.r, "scroll", this.m), _.u(_.r, "resize", this.m), _.r.MutationObserver && !this.l && (this.l = new MutationObserver(this.m), this.l.observe(_.r.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    $a.prototype.unobserve = function(a) {
        this.j = _.ka(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    $a.prototype.disconnect = function() {
        this.o = !1;
        this.j.length = 0;
        _.Pe(_.r, "scroll", this.m);
        _.Pe(_.r, "resize", this.m);
        this.l && (this.l.disconnect(), this.l = null)
    };
    var wn = function(a) {
        var b = _.pb(a.B).concat();
        a.B.length = 0;
        return b
    };
    var yn, zn, An;
    yn = function() {
        return 0 != _.xn(document)
    };
    _.xn = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        } [a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    zn = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    An = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    var Cn, Bn;
    Cn = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.improveCollisionDetection = 1;
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Bn
    };
    _.Dn = function(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Bn) : a.google_reactive_ads_global_state = new Cn;
        return a.google_reactive_ads_global_state
    };
    Bn = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var En, In, Jn;
    En = 728 * 1.38;
    _.Fn = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Hn = function(a) {
        var b = _.Gn(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    In = function(a, b) {
        return (a = _.Gn(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    Jn = function(a) {
        return (a = _.Hn(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.Gn = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Kn = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var Ln, Mn;
    Ln = function(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            var b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" == b
        } catch (c) {
            return !1
        }
    };
    _.Nn = function(a) {
        try {
            if (null == a || !Ln(a)) return null;
            var b = a.getItem("__lsv__");
            if (!b) return [];
            try {
                var c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || _.dc(c, function(d) {
                return !C(Number, "isInteger").call(Number, d)
            }) ? (a.removeItem("__lsv__"), []) : Mn(c)
        } catch (d) {
            return null
        }
    };
    Mn = function(a) {
        a = void 0 === a ? [] : a;
        var b = Date.now();
        return _.ka(a, function(c) {
            return 36E5 > b - c
        })
    };
    _.On = function(a) {
        return !!a && 1 > a.length
    };
    var Pn = function(a, b, c) {
        var d = 0;
        try {
            d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (g) {
            d |= 32
        }
        var e = 0;
        try {
            e |= In(a, 0 < _.x(43) ? _.x(43) : En);
            if (_.w(309)) {
                var f = _.Gn(a).clientHeight;
                e |= f ? 320 > f ? -2147483648 : 0 : 1073741824
            }
            e |= Jn(a);
            b && !_.On(_.Nn(c)) && (e |= 134217728)
        } catch (g) {
            e |= 32
        }
        return d | e
    };
    var Qn = function(a) {
        _.L(this, a, null, null)
    };
    _.G(Qn, _.I);
    Qn.prototype.getTime = function() {
        return _.J(this, 4)
    };
    var Rn = function() {};
    var Sn = [.05, .1, .2, .5],
        Tn = [0, .5, 1],
        Un = function(a) {
            a = yf(a);
            if (!a) return -1;
            try {
                var b = wh(a.document);
                var c = new _.Xe(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Xe(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        Vn = function(a, b) {
            return 0 > a ? [] : _.ia(Sn, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        Yn = function(a) {
            this.j = a.T;
            this.l = a.ib;
            this.D = a.xd;
            this.o = null;
            this.B = a.ta;
            this.m = Wn(this);
            this.R = a.rd || !1;
            this.A = a.ve || !1;
            this.v = null;
            this.A && Xn(this)
        },
        $n = function(a, b) {
            if (a.m) {
                if (null != a.o) {
                    try {
                        Zn(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.B && a.B(c)
                    }
                    a.m && a.m.unobserve(a.l);
                    a.v = null
                }
                a.o = b;
                a.m.observe(a.l);
                a.A && (performance.now(), a.l.getBoundingClientRect(), An(a.j.document) || yf(a.j), a.v = new Rn)
            }
        },
        Wn = function(a) {
            var b = a.l.offsetWidth * a.l.offsetHeight,
                c = Un(a.j);
            b = _.pb(Tn).concat(_.pb(Vn(c, b)));
            la(b);
            return _.r.IntersectionObserver ? new _.r.IntersectionObserver(function(d) {
                return ao(a, d)
            }, {
                threshold: b
            }) : new $a(function(d) {
                return ao(a, d)
            }, {
                threshold: b
            })
        },
        ao = function(a, b) {
            try {
                var c = Un(a.j);
                _.ac(b, function(d) {
                    var e = Math.round(d.time),
                        f = d.boundingClientRect.width * d.boundingClientRect.height,
                        g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    a.R && Zn(a, e, f, g, c, d)
                })
            } catch (d) {
                a.B && a.B(d)
            }
        },
        Zn = function(a, b, c, d, e, f) {
            if (null == a.o) throw Error("Not Attached.");
            var g = new Qn;
            c = _.K(g, 1, c);
            d = _.K(c, 2, d);
            e = _.K(d, 3, e);
            b = _.K(e, 4, b);
            b = _.K(b, 5, f);
            f = new ke;
            e = _.J(b, 4);
            null != e && null != e && le(f, 4, e);
            e = _.J(b, 2);
            null != e && null != e && le(f, 2, e);
            e = _.J(b, 1);
            null != e && null != e && le(f, 1, e);
            e = _.J(b, 3);
            null != e && null != e && le(f, 3, e);
            e = _.J(b, 5);
            null != e && (b = e, null != b && (Ed(f.j, 40), f.j.j.push(b ? 1 : 0)));
            b = new Uint8Array(f.j.length());
            d = f.l;
            c = d.length;
            for (g = e = 0; g < c; g++) {
                var h = d[g];
                b.set(h, e);
                e += h.length
            }
            d = f.j;
            c = d.j;
            d.j = [];
            b.set(c, e);
            f.l = [b];
            f = je(b, 4);
            Ei(a.D, "1", 10, f, void 0, a.o)
        },
        Xn = function(a) {
            var b = zn(a.j.document);
            b && _.u(a.j.document, b, function() {
                a.v && performance.now()
            })
        };
    var bo = function() {
        var a = {};
        a = (a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a);
        _.w(366) || (a.adsense_content_section = "region", a.adsense_cpm = "cpm", a.adsense_font_size = "fs", a.adsense_host = "host", a.adsense_host_channel = "h_ch", a.adsense_host_tier_id = "ht_id", a.adsense_relevant_content = "contents", a.adsense_targeting = "targeting", a.adsense_targeting_types = "targeting", a.demographic_l = "cust_l", a.demographic_lh = "cust_lh", a.document_language = "hl", a.geography_override_city = "gcs", a.geography_override_country = "gl", a.google_content_recommendation_ad_positions = "ad_pos", a.matched_content_columns_num = "cr_col", a.matched_content_rows_num = "cr_row", a.matched_content_ui_type = "crui", a.matched_content_use_square_imgs = "cr_sq_img", a.demographic_ch = "cust_ch", a.demographic_interests = "cust_interests", a.demographic_job = "cust_job", a.demographic_u_url = "cust_u_url", a.demographic_unique_id = "cust_id");
        return a
    };
    var co = function(a, b, c, d, e) {
            var f = null;
            Array.isArray(d) ? f = d : Pb(d) ? f = C(Array, "from").call(Array, d) : d ? f = [d] : _.w(262) || (f = []);
            var g = "string" === typeof c && !Sc(c),
                h = _.w(262) ? !!f && f.every(function(k) {
                    return "string" === typeof k
                }) : !0;
            g && h ? (_.w(262) || (f = f.map(function(k) {
                return String(k)
            })), (d = (z = ze(b, mj, 9), C(z, "find")).call(z, function(k) {
                return nj(k) === c
            })) ? pj(d, f) : (d = pj(oj(new mj, c), f), Ce(b, 9, d, mj)), e.info(zl(c, f.join(), a.getAdUnitPath()), null, a)) : e.I(ol("Slot.setTargeting", [c, d]), null, a)
        },
        eo = function(a, b, c, d) {
            if (null == c || "object" !== typeof c) d.error(ol("Slot.updateTargetingFromMap", [c]), null, a);
            else
                for (var e = _.D(Object.keys(c)), f = e.next(); !f.done; f = e.next()) f = f.value, co(a, b, f, c[f], d)
        };
    var go = function(a) {
        var b = this;
        this.addEventListener = Q(86, function(c, d) {
            a.addEventListener(c, d);
            return b
        });
        this.getSlots = Q(573, function() {
            return a.m.map(function(c) {
                return c.j()
            })
        });
        this.getSlotIdMap = Q(574, function() {
            var c = a.o,
                d = {},
                e;
            for (e in c) d[e] = c[e].j();
            return d
        });
        this.enable = Q(87, function() {
            return fo(a)
        }, Uk);
        this.getName = Q(575, function() {
            return a.X()
        })
    };
    _.F(go, cj);
    var ho = "",
        io = null,
        jo = function() {
            ho || (ho = Uh(2) || "1-0-37");
            return ho
        },
        ko = function() {
            if (null == io) {
                if (_.w(246)) var a = wk();
                else {
                    a = _.Vh(1);
                    for (var b = [], c = 0; c < a.length; c += 2) uf(a[c], a[c + 1], b);
                    a = b.join("&")
                }
                io = a
            }
            return io
        },
        lo = function(a) {
            var b = cl.C(),
                c = new sj;
            if (!a || !_.Rb(a)) return null;
            var d = !1;
            _.Ua(a, function(e, f) {
                switch (f) {
                    case "allowOverlayExpansion":
                        "boolean" === typeof e ? _.K(c, 1, a.allowOverlayExpansion) : (b.error(ym("allowOverlayExpansion", String(a.allowOverlayExpansion))), d = !0);
                        break;
                    case "allowPushExpansion":
                        "boolean" === typeof e ? _.K(c, 2, a.allowPushExpansion) : (b.error(ym("allowPushExpansion", String(a.allowPushExpansion))), d = !0);
                        break;
                    case "sandbox":
                        !0 === e ? tj(c, a.sandbox) : (b.error(ym("sandbox", String(a.sandbox))), d = !0);
                        break;
                    case "useUniqueDomain":
                        "boolean" === typeof e ? uj(c, a.useUniqueDomain) : null !== e && (b.error(ym("useUniqueDomain", String(a.useUniqueDomain))), d = !0);
                        break;
                    default:
                        b.I(xm(f))
                }
            });
            return d ? null : c
        },
        mo = function(a) {
            var b = new sj;
            a = _.D(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value) {
                    if (null != _.J(c, 1)) {
                        var d = v(c, 1);
                        _.K(b, 1, d)
                    }
                    null != _.J(c, 2) && (d = v(c, 2), _.K(b, 2, d));
                    null != _.J(c, 3) && tj(b, v(c, 3));
                    null != _.J(c, 4) && uj(b, v(c, 4))
                } return b
        };
    var no = function(a, b) {
        this.l = a;
        this.j = b
    };
    no.prototype.getWidth = function() {
        return this.l
    };
    no.prototype.getHeight = function() {
        return this.j
    };
    var po = function(a, b, c) {
        var d = this,
            e = cl.C();
        this.set = Q(40, function(f, g) {
            if ("string" !== typeof f || !g || void 0 === bo()[f]) return e.I(ol("Slot.set", [f, g]), null, a), d;
            var h = (z = ze(c, mj, 3), C(z, "find")).call(z, function(k) {
                return nj(k) === f
            });
            h ? pj(h, [g]) : (h = oj(new mj, f), we(h, 2, g), Ce(c, 3, h, mj));
            return d
        });
        this.get = Q(41, function(f) {
            if ("string" !== typeof f) return e.I(ol("Slot.get", [f]), null, a), null;
            var g = (z = ze(c, mj, 3), C(z, "find")).call(z, function(h) {
                return nj(h) === f
            });
            return (g = g && _.J(g, 2)) ? g[0] : null
        });
        this.getAttributeKeys = Q(42, function() {
            return ze(c, mj, 3).map(function(f) {
                return nj(f)
            })
        });
        this.addService = Q(43, function(f) {
            if (_.w(355)) {
                f = aj.get(f);
                if (!f) return e.I(um(_.bk(a)), null, a), d;
                if ((z = _.J(c, 4), C(z, "includes")).call(z, f.X())) return e.I(wl(f.X(), _.bk(a)), f, a), d;
                f.pb(a, c)
            } else oo(a, dj(f, b), c);
            return d
        });
        this.defineSizeMapping = Q(44, function(f) {
            if (!Array.isArray(f)) throw Error("Size mapping has to be an array");
            f = f.map(Uj);
            Be(c, 6, f);
            return d
        }, function(f, g) {
            Uk(f, g);
            jg("Incorrect usage of googletag.Slot defineSizeMapping: " + g.message);
            return d
        });
        this.setClickUrl = Q(45, function(f) {
            if ("string" !== typeof f) return e.I(ol("Slot.setClickUrl", [f]), null, a), d;
            _.K(c, 7, f);
            return d
        });
        this.setCategoryExclusion = Q(46, function(f) {
            "string" !== typeof f || Sc(f) ? e.I(ol("Slot.setCategoryExclusion", [f]), null, a) : ((z = _.J(c, 8), C(z, "includes")).call(z, f) || we(c, 8, f), e.info(xl(f), null, a));
            return d
        });
        this.clearCategoryExclusions = Q(47, function() {
            _.K(c, 8, []);
            e.info(yl(), null, a);
            return d
        });
        this.getCategoryExclusions = Q(48, function() {
            return _.J(c, 8).slice()
        });
        this.setTargeting = Q(49, function(f, g) {
            co(a, c, f, g, e);
            return d
        });
        this.updateTargetingFromMap = Q(649, function(f) {
            eo(a, c, f, e);
            return d
        });
        this.clearTargeting = Q(50, function(f) {
            if (void 0 === f) return Kj(c, []), e.info(Al(a.getAdUnitPath()), null, a), d;
            var g = ze(c, mj, 9),
                h = C(g, "findIndex").call(g, function(k) {
                    return nj(k) === f
                });
            if (0 > h) return e.I(zm(f, a.getAdUnitPath()), null, a), d;
            g.splice(h, 1);
            Kj(c, g);
            e.info(Am(f, a.getAdUnitPath()), null, a);
            return d
        });
        this.getTargeting = Q(51, function(f) {
            if ("string" !== typeof f) return e.I(ol("Slot.getTargeting", [f]), null, a), [];
            var g = (z = ze(c, mj, 9), C(z, "find")).call(z, function(h) {
                return nj(h) === f
            });
            return g ? _.J(g, 2).slice() : []
        });
        this.getTargetingKeys = Q(52, function() {
            return ze(c, mj, 9).map(function(f) {
                return nj(f)
            })
        });
        this.setCollapseEmptyDiv = Q(53, function(f, g) {
            g = void 0 === g ? !1 : g;
            if ("boolean" !== typeof f || "boolean" !== typeof g) return e.I(ol("Slot.setCollapseEmptyDiv", [f, g]), null, a), d;
            _.K(c, 10, f);
            _.K(c, 11, f && g);
            _.Wa("gpt_ced", function(h) {
                var k = v(c, 11) ? "t" : "f";
                _.E(h, "sc", k);
                _.E(h, "level", "slot");
                _.eb(h)
            });
            g && !f && e.I(Bl(a.m.toString()), null, a);
            return d
        });
        this.getAdUnitPath = Q(54, function() {
            return a.getAdUnitPath()
        });
        this.getSlotElementId = Q(598, function() {
            return a.getSlotElementId()
        });
        this.setForceSafeFrame = Q(55, function(f) {
            if ("boolean" !== typeof f) return e.I(hm("Slot.setForceSafeFrame", String(f)), null, a), d;
            _.K(c, 12, f);
            return d
        });
        this.setSafeFrameConfig = Q(56, function(f) {
            var g = lo(f);
            if (!g) return e.error(ol("Slot.setSafeFrameConfig", [f]), null, a), d;
            Ae(c, 13, g);
            return d
        });
        this.getResponseInformation = Q(355, function() {
            return a.O
        });
        this.getName = Q(170, function() {
            window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
            var f = new Jk("slot_get_name");
            _.eb(f);
            Lk(f);
            return a.m.getAdUnitPath()
        });
        this.getSlotId = Q(579, function() {
            return a.m.j()
        });
        this.getServices = Q(580, function() {
            return _.w(355) ? _.J(c, 4).map(function(f) {
                return ej(f)
            }) : a.ob.map(function(f) {
                return f.j()
            })
        });
        this.getSizes = Q(581, function(f, g) {
            return (f = Vj(c, f, g)) ? f.map(function(h) {
                return v(h, 3) ? "fluid" : new no(_.J(h, 1), _.J(h, 2))
            }) : null
        });
        this.getClickUrl = Q(582, function() {
            return null != _.J(c, 7) ? c.getClickUrl() : ""
        });
        this.getTargetingMap = Q(583, function() {
            for (var f = {}, g = _.D(ze(c, mj, 9)), h = g.next(); !h.done; h = g.next()) h = h.value, f[nj(h)] = _.J(h, 2);
            return f
        });
        this.getOutOfPage = Q(584, function() {
            return 0 != Lj(c)
        });
        this.getCollapseEmptyDiv = Q(585, function() {
            return null != _.J(c, 10) ? v(c, 10) : null
        });
        this.getDivStartsCollapsed = Q(586, function() {
            return null != _.J(c, 11) ? v(c, 11) : null
        });
        this.getContentUrl = Q(587, function() {
            return a.ea()
        });
        this.getFirstLook = Q(588, function() {
            jg("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        this.getEscapedQemQueryId = Q(591, function() {
            return Qk(a)
        });
        this.getHtml = Q(592, function() {
            return a.getHtml()
        })
    };
    _.F(po, cj);
    var qo = function(a) {
        this.getId = Q(593, function() {
            return a.o
        });
        this.getAdUnitPath = Q(594, function() {
            return a.getAdUnitPath()
        });
        this.getName = Q(595, function() {
            var b = new Jk("slot_id_get_name");
            _.eb(b);
            Lk(b);
            return a.m
        });
        this.toString = Q(596, function() {
            return a.toString()
        });
        this.getDomId = Q(597, function() {
            return a.l
        })
    };
    _.F(qo, cj);
    var ro = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        so = function(a) {
            switch (a) {
                case 2:
                    return 2;
                case 3:
                    return 1;
                case 5:
                    return 8;
                default:
                    return null
            }
        },
        to = function() {
            var a = _.db();
            a.enums || (a.enums = {
                OutOfPageFormat: ro
            })
        };
    var uo = function() {
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
        this.isBackfill = !1;
        this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    };
    var vo = {
            be: "impressionViewable",
            he: "rewardedSlotCanceled",
            ie: "rewardedSlotClosed",
            je: "rewardedSlotCompleted",
            ke: "rewardedSlotGranted",
            le: "rewardedSlotReady",
            me: "slotAdded",
            ne: "slotOnload",
            oe: "slotRenderEnded",
            pe: "slotRequested",
            qe: "slotResponseReceived",
            re: "slotVisibilityChanged"
        },
        wo = function(a, b) {
            this.slot = a;
            this.serviceName = b
        },
        xo = function(a, b) {
            wo.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.F(xo, wo);
    var yo = function() {
        wo.apply(this, arguments)
    };
    _.F(yo, wo);
    var zo = function(a, b, c) {
        wo.call(this, a, b);
        this.inViewPercentage = c
    };
    _.F(zo, wo);
    var Ao = function() {
        wo.apply(this, arguments)
    };
    _.F(Ao, wo);
    var Bo = function() {
        wo.apply(this, arguments)
    };
    _.F(Bo, wo);
    var Co = function(a, b, c, d) {
        wo.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.F(Co, wo);
    var Do = function(a, b, c) {
        wo.call(this, a, b);
        this.payload = c
    };
    _.F(Do, wo);
    var Eo = function() {
        wo.apply(this, arguments)
    };
    _.F(Eo, wo);
    var Fo = function() {
        wo.apply(this, arguments)
    };
    _.F(Fo, wo);
    var Go = function() {
        wo.apply(this, arguments)
    };
    _.F(Go, wo);
    var Ho = function() {
        wo.apply(this, arguments)
    };
    _.F(Ho, wo);
    var Io = function() {
        wo.apply(this, arguments)
    };
    _.F(Io, wo);
    var Jo = function() {
        _.M.call(this);
        this.m = [];
        this.o = {};
        this.l = !1;
        this.A = {};
        this.log = cl.C();
        this.log.info(Jl(this.X()), this);
        this.G = []
    };
    _.F(Jo, kl);
    Jo.prototype.Ba = function() {
        return new go(this)
    };
    Jo.prototype.getVersion = function() {
        return "unversioned"
    };
    var fo = function(a) {
            if (!a.l) {
                a.l = !0;
                a.Ob();
                for (var b = _.D(a.G), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        c()
                    } catch (d) {}
                }
                a.G.length = 0
            }
        },
        Ko = function(a, b) {
            if (a.l) try {
                b()
            } catch (c) {} else a.G.push(b)
        };
    Jo.prototype.pb = function(a, b) {
        this.m.push(a);
        var c = new Bo(a.j(), this.X());
        Lo(this, "slotAdded", c);
        this.o[_.bk(a)] = a;
        this.log.info(Nl(this.X(), a.getAdUnitPath()), this, a);
        _.w(355) && we(b, 4, this.X())
    };
    Jo.prototype.destroySlots = function(a) {
        var b = this.m,
            c = b.filter(function(d) {
                return C(a, "includes").call(a, d)
            });
        c.forEach(function(d) {
            hc(b, d)
        });
        return c
    };
    var Mo = function(a, b) {
        _.Wa("gpt_callback_usage", function(c) {
            _.eb(c);
            _.E(c, "type", b);
            var d = 0,
                e = 0;
            a.m.forEach(function(f) {
                0 < f.D && d++;
                f.G && e++
            });
            _.E(c, "nfetch", d);
            _.E(c, "nrend", e)
        })
    };
    Jo.prototype.addEventListener = function(a, b) {
        if ("function" !== typeof b || "string" !== typeof a) return a = ol("Service.addEventListener", [a, b]), this.log.I(a, this), this;
        if (!Bc(vo, a)) return this.log.I(tm(a), this), this;
        Array.isArray(this.A[a]) || (this.A[a] = []);
        this.A[a].push(b);
        Mo(this, a);
        return this
    };
    var Lo = function(a, b, c) {
        var d = a.A[b];
        Array.isArray(d) && og(function() {
            for (var e = _.D(d), f = e.next(); !f.done; f = e.next()) {
                f = f.value;
                try {
                    f(c)
                } catch (k) {
                    f = k && "string" === typeof k.name ? k.name : null;
                    var g = k && "string" === typeof k.message ? k.message : null,
                        h = "";
                    f && g ? h = f + ": " + g : f ? h = f : g && (h = g);
                    a.log.I(sm(h), a);
                    window.console && console.error && console.error(k)
                }
            }
        })
    };
    var No = function() {
        var a = this;
        this.j = {};
        this.l = cl.C();
        this.B = this.l.info(vl());
        $i(window, function() {
            return P(92, a.m)
        })
    };
    No.prototype.add = function(a) {
        this.j[a.X()] = a
    };
    No.prototype.find = function(a) {
        var b = null;
        a in this.j && (b = this.j[a]);
        return b
    };
    var Oo = function() {
        var a = No.C();
        Ni(6);
        _.Ua(a.j, function(b) {
            b.l ? a.l.info(Ml(), b) : fo(b)
        })
    };
    No.prototype.destroySlots = function(a) {
        _.Ua(this.j, function(b) {
            return b.destroySlots(a)
        })
    };
    No.prototype.m = function() {
        this.l.info(pl(), null, null, this.B)
    };
    Nb(No);
    No.prototype.m = P(92, No.prototype.m);
    var Po = P(91, function() {
        Oo()
    });
    cb("enableServices", Po);
    var Qo = function(a, b, c) {
        _.M.call(this);
        this.m = a;
        this.Ya = b;
        this.o = this.m + "_" + this.Ya;
        this.l = c
    };
    _.F(Qo, kl);
    Qo.prototype.getAdUnitPath = function() {
        return this.m
    };
    Qo.prototype.C = function() {
        return this.Ya
    };
    Qo.prototype.toString = function() {
        return this.o
    };
    Qo.prototype.Ba = function() {
        return new qo(this)
    };
    Qo.prototype.getInstance = Qo.prototype.C;
    var Ro = function(a, b, c, d, e) {
            _.M.call(this);
            if (this.H = e) Ij(_.K(this.H, 1, a), d), c = Sj(c), e = c.Da, Be(this.H, 5, c.Xc), null !== e && Ae(this.H, 16, e);
            this.m = new Qo(a, b, d);
            _.Bg(this, this.m);
            this.ob = [];
            this.v = cl.C();
            this.v.info(ql(this.m.toString()), null, this);
            this.ba = this.G = this.fa = null;
            this.ea = function() {
                return ""
            };
            this.J = null;
            this.A = pk(this.m.getAdUnitPath());
            this.hb = "";
            this.O = null;
            this.bc = !1;
            this.D = 0;
            this.N = this.V = this.U = this.L = this.$ = this.jc = null;
            this.o = ++ak.C().l;
            this.K = "";
            this.W = null;
            this.Ma = 0;
            this.l = null;
            this.Y = "";
            this.ja = !1;
            this.da = null;
            this.Z = []
        },
        zk, To, Uo, Vo;
    _.F(Ro, kl);
    var So = function(a, b) {
        a.Z.push(b)
    };
    Ro.prototype.Ba = function() {
        return new po(this, Jo, this.H)
    };
    var oo = function(a, b, c) {
        var d = No.C();
        if (Bc(d.j, b)) {
            for (d = 0; d < a.ob.length; ++d)
                if (b == a.ob[d]) {
                    a.v.I(wl(b.X(), a.m.toString()), b, a);
                    return
                } a.ob.push(b);
            b.pb(a, c)
        } else a.v.I(um(a.m.toString()), null, a)
    };
    Ro.prototype.getAdUnitPath = function() {
        return this.m.getAdUnitPath()
    };
    Ro.prototype.C = function() {
        return this.m.C()
    };
    Ro.prototype.getSlotElementId = function() {
        return this.m.l
    };
    zk = function(a, b) {
        b = void 0 === b ? document : b;
        return a.jc || b.getElementById(a.m.l)
    };
    _.bk = function(a) {
        return a.m.o
    };
    To = function(a, b) {
        a.ea = b
    };
    Uo = function(a) {
        a.G = a.v.info(tl(a.getAdUnitPath()), null, a)
    };
    Vo = function(a) {
        a.ba = a.v.info(ul(a.getAdUnitPath()), null, a, a.G)
    };
    Ro.prototype.lb = function() {
        this.J = this.J || _.ui()
    };
    var Wo = function(a) {
            a.J = null;
            a.O = null;
            a.l = null;
            a.Y = "";
            a.W = null;
            a.K = "";
            a.da = null;
            a.V = null;
            a.N = null;
            4 === _.x(59) && (a.L = null);
            3 === _.x(59) && (a.U = null);
            for (var b = _.D(a.Z), c = b.next(); !c.done; c = b.next()) c = c.value, c();
            a.Z.length = 0
        },
        Xo = function(a, b, c, d) {
            a.l = b;
            b = _.J(a.l, 33) || "";
            a.K = b;
            1 == d && (0 == a.Ma && c && v(a.l, 8) ? a.Ma = 1 : a.Ma = 2);
            if (!a.l || v(a.l, 8)) c = null;
            else {
                c = new uo;
                d = !!v(a.l, 9);
                c.isBackfill = d;
                b = _.J(a.l, 15);
                var e = _.J(a.l, 16);
                b.length && e.length && (c.sourceAgnosticCreativeId = b[0], c.sourceAgnosticLineItemId = e[0], d || (c.creativeId = b[0], c.lineItemId = e[0], (d = _.J(a.l, 22)) && d.length && (c.creativeTemplateId = d[0])));
                _.J(a.l, 17).length && (d = _.J(a.l, 17)[0], c.advertiserId = d);
                _.J(a.l, 18).length && (d = _.J(a.l, 18)[0], c.campaignId = d);
                _.J(a.l, 19).length && (d = _.J(a.l, 19), c.yieldGroupIds = d);
                _.J(a.l, 20).length && (d = _.J(a.l, 20), c.companyIds = d);
                d = _.J(a.l, 45);
                d = d.length && "string" !== typeof d[0] ? _.ia(d, qe) : d;
                d.length && (c.encryptedTroubleshootingInfo = d[0])
            }
            a.O = c
        },
        Qk = function(a) {
            return a.l && _.J(a.l, 34) || ""
        };
    Ro.prototype.getHtml = function() {
        return this.isBackfill() ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : this.Y
    };
    Ro.prototype.isBackfill = function() {
        return this.l ? !!v(this.l, 9) : null
    };
    Ro.prototype.B = function() {
        kl.prototype.B.call(this);
        this.v.info(wm(this.m.toString()), null, this)
    };
    var Yo = function(a) {
            return "google_ads_iframe_" + _.bk(a)
        },
        Zo = function(a) {
            return Yo(a) + "__container__"
        },
        $o = function(a, b) {
            return (b = yk(a, b)) ? b.querySelector('iframe[id="' + Yo(a) + '"]') : null
        },
        yk = function(a, b) {
            b = zk(a, b);
            if (!b) return null;
            var c = Zo(a);
            return nf(b, function(d) {
                return d.id === c
            })
        },
        ap = function(a) {
            if (a.L) return a.L;
            var b = zk(a);
            b = b && b.parentElement;
            if (!b || !b.getBoundingClientRect) return null;
            b = rk(b);
            1 != _.x(59) && (a.L = b);
            return b
        },
        Dk = function(a, b) {
            b = void 0 === b ? document : b;
            if (a.V) return a.V;
            b = zk(a, b);
            if (!b) return null;
            b = Af(b, window);
            1 != _.x(59) && (a.V = b);
            return b
        };
    var bp = function() {
            this.l = [];
            this.m = [];
            this.j = {}
        },
        cp = function(a, b) {
            return a.j[b] || []
        };
    Nb(bp);
    var dp = function() {
            this.l = {};
            this.j = new wj;
            _.K(this.j, 26, Fk());
            _.Oi(36) && _.K(this.j, 15, !0)
        },
        ep = function() {
            return dp.C().l
        },
        fp = function(a, b) {
            return a.l[b] || null
        };
    Nb(dp);
    var gp = function() {
        var a = this;
        this.j = function() {
            return !1
        };
        this.l = "";
        this.m = null;
        var b = dp.C(),
            c = {};
        this[3] = (c[19] = function() {
            return !!v(b.j, 10)
        }, c[14] = lk, c[13] = function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return e.some(function(g) {
                return 0 == a.l.lastIndexOf(g, 0)
            })
        }, c[12] = function() {
            return !!v(b.j, 6)
        }, c[11] = yn, c[15] = function(d) {
            return a.j(d)
        }, c[7] = function() {
            return !(!_.r.crypto || !_.r.crypto.subtle)
        }, c[1] = function() {
            return 0 == Xf()
        }, c);
        c = {};
        this[4] = (c[8] = function(d) {
            return nn(a.m, d)
        }, c);
        this[5] = {}
    };
    Nb(gp);
    var hp = function(a) {
            return !!Hf(ro, function(b) {
                return b == a
            })
        },
        kp = function(a) {
            return (z = qk(ip(jp.C())), C(z, "includes")).call(z, a)
        },
        lp = vc(function() {
            jg("GPT does not support passback slots on the top window. Each passback slot should be defined and rendered within an iframe.")
        }),
        mp = function(a) {
            var b = _.r != _.r.top ? 512 : 0;
            if (b) return b;
            var c = _.Dn(_.r);
            var d = c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (d = c.adCount[a]) && 27 !== a && 26 !== a && 10 !== a ? 1 <= d : !1 : !1;
            d && (b |= 64);
            2 != Xf() && (b |= 536870912);
            c.improveCollisionDetection = 1;
            switch (a) {
                case 2:
                case 1:
                    c = 0;
                    try {
                        c |= _.r != _.r.top ? 512 : 0;
                        var e = Math.min(_.r.screen.width || 0, _.r.screen.height || 0);
                        c |= e ? 320 > e ? 8192 : 0 : 2048;
                        var f;
                        if (f = _.r.navigator) {
                            var g = _.r.navigator.userAgent;
                            f = /Firefox/.test(g) || /Android 2/.test(g) || /iPhone OS [34]_/.test(g) || /Windows Phone (?:OS )?[67]/.test(g)
                        }
                        c |= f ? 1048576 : 0
                    } catch (q) {
                        c |= 32
                    }
                    e = c;
                    f = 0;
                    try {
                        f |= _.Fn(_.r) ? 0 : 8, f |= In(_.r, En), f |= Jn(_.r)
                    } catch (q) {
                        f |= 32
                    }
                    if (a = 2 == a) {
                        c = _.r.innerWidth;
                        a = _.Dn(_.r).improveCollisionDetection;
                        d = Math.round(_.r.innerWidth / 320 * 50 + 15);
                        g = [];
                        for (var h = 0; 3 > h; h++)
                            for (var k = 0; 3 > k; k++) g.push({
                                x: k / 2 * c,
                                y: h / 2 * d
                            });
                        a: {
                            for (c = 0; c < g.length; c++) {
                                b: {
                                    d = _.r;
                                    var l = g[c];h = a;k = d.document;k.elementFromPoint(l.x, l.y);
                                    var m = l.x;l = l.y;k.hasOwnProperty("_goog_efp_called_") || (k._goog_efp_called_ = k.elementFromPoint(m, l));
                                    if (k = k.elementFromPoint(m, l))
                                        if ("fixed" == eh(k, "position")) d = k;
                                        else {
                                            if (1 == h) {
                                                c: {
                                                    d = d.document;
                                                    for (h = k.offsetParent; h && h != d.body; h = h.offsetParent)
                                                        if ("fixed" == eh(h, "position")) {
                                                            d = h;
                                                            break c
                                                        } d = null
                                                }
                                                if (d) break b
                                            }
                                            d = null
                                        }
                                    else d = null
                                }
                                if (d) {
                                    a = d;
                                    break a
                                }
                            }
                            a = null
                        }
                        a = null != a
                    }
                    a && !_.w(269) && (f |= 16777216);
                    return b | e | f;
                case 8:
                    return b | Pn(_.r, !1, null);
                default:
                    return b | 32
            }
        },
        jp = function() {
            this.j = {};
            this.m = {};
            this.l = {};
            this.B = cl.C();
            this.o = [];
            gp.C().j = kp
        };
    jp.prototype.add = function(a, b, c) {
        var d = void 0 === c ? {} : c;
        c = void 0 === d.ib ? void 0 : d.ib;
        var e = void 0 === d.yc ? !1 : d.yc;
        if ("string" !== typeof a || 0 >= a.length || !b) return {};
        d = so(void 0 === d.format ? 0 : d.format);
        if (null != d) {
            if (mp(d)) return {};
            var f = _.Dn(window);
            f.adCount = f.adCount || {};
            f.adCount[d] = f.adCount[d] + 1 || 1
        }
        e && window == window.top && lp();
        a in this.j || (this.j[a] = [], this.m[a] = e ? 1 : 0);
        e = this.m[a];
        d = c || "gpt_unit_" + a + "_" + e;
        if (this.l[d]) return this.B.error(Fl(d)), {};
        c = new Hj;
        b = new Ro(a, e, b, d, c);
        e = dp.C();
        (d = _.J(c, 2)) && !e.l.hasOwnProperty(d) && (e.l[d] = c);
        this.m[a]++;
        this.j[a].push(b);
        this.l[b.m.l] = b;
        Pk.push(b);
        return {
            slot: b,
            qa: c
        }
    };
    var ip = function(a) {
            var b = [];
            xc(a.j, function(c) {
                c.forEach(function(d) {
                    b.push(d)
                })
            });
            return b
        },
        np = function(a) {
            var b = [];
            cp(bp.C(), a).forEach(function(c) {
                (c = $o(c, document)) && b.push(c.contentWindow)
            });
            return b
        },
        op = function(a, b) {
            b = _.D(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = dp.C(),
                    e = c.getSlotElementId(),
                    f = d.l[e];
                delete d.l[e];
                d = f;
                Ag(c);
                d = so(Lj(d));
                null != d && (e = _.Dn(window), (f = e.adCount && e.adCount[d]) && (e.adCount[d] = f - 1));
                d = c.getAdUnitPath();
                hc(a.j[d], c);
                0 == a.j[d].length && (e = a.j, d in e && delete e[d]);
                d = a.l;
                e = c.m.l;
                e in d && delete d[e];
                hc(Pk, c)
            }
        },
        pp = function(a, b) {
            if (b && !Array.isArray(b)) return a.B.I(ol("googletag.destroySlots", [b])), !1;
            b ? (la(b), b = b.filter(function(c) {
                return c && !c.na
            })) : b = ip(a);
            if (!b || 0 == b.length) return !1;
            No.C().destroySlots(b);
            op(a, b);
            return !0
        },
        qp = function(a, b) {
            return a.l[b] ? a.l[b] : null
        },
        rp = function(a, b) {
            var c = dj(b, Ro);
            return !!c && zc(a.j, function(d) {
                return C(d, "includes").call(d, c)
            })
        },
        sp = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            if ("string" === typeof a && (void 0 === c || "string" === typeof c)) {
                var e = jp.C();
                return e && e.add(a, b, {
                    ib: c,
                    yc: d
                })
            }
            return {}
        },
        tp = function(a, b, c) {
            return (a = sp(a, b, c).slot) && a.j() || null
        },
        up = function(a) {
            var b = jp.C();
            return b && null == a ? pp(b) : b && Array.isArray(a) ? (a = a.map(function(c) {
                return dj(c, Ro)
            }), pp(b, a)) : !1
        },
        vp = function(a, b) {
            if ("string" !== typeof a || !(null == b || "string" === typeof b || "number" === typeof b && hp(b))) return null;
            a: {
                var c = "number" === typeof b ? b : 1;b = "string" === typeof b ? b : void 0;b = jp.C().add(a, [1, 1], {
                    ib: b,
                    format: c
                });a = b.slot;b = b.qa;
                if (a && b) {
                    if (5 === c && _.w(323)) {
                        c = null;
                        break a
                    }
                    _.K(b, 15, c)
                }
                c = a || null
            }
            return c && c.j()
        };
    Nb(jp);
    tp = P(74, tp);
    up = P(75, up);
    vp = P(73, vp);
    var wp = P(95, function(a) {
        var b = cl.C();
        var c = null;
        var d = "";
        if ("string" === typeof a) {
            d = a;
            var e = qp(jp.C(), d)
        } else _.Rb(a) && 1 == a.nodeType ? (c = a, d = c.id, e = qp(jp.C(), d)) : e = dj(a, Ro);
        if (e) {
            if (a = dp.C().j, d = fp(dp.C(), e.getSlotElementId()))
                if (a = vk(a, ep()), !e.bc)
                    if (e.jc = c, zk(e) || Zj(Lj(d)))
                        if (e.bc = !0, _.w(355))
                            for (b = _.D(_.J(d, 4)), c = b.next(); !c.done; c = b.next()) c = ej(c.value), c = dj(c, Jo), c.l && c.Db(a, e);
                        else
                            for (b = _.D(e.ob), c = b.next(); !c.done; c = b.next()) c = c.value, c.l && c.Db(a, e);
            else b.I(Cl(String(d.getAdUnitPath()), String(_.J(d, 2))), null, e)
        } else d ? b.error(El(String(d))) : b.error(Dl(String(a)))
    });
    var Oc = new Ic(Gc, "https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var ua = function(a) {
        return new _.t.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var xp = function(a) {
            this.j = a.j;
            this.l = a.l;
            this.m = a.m;
            this.nb = a.nb;
            this.T = a.T;
            this.ab = a.ab
        },
        yp = function(a, b) {
            this.j = a;
            this.l = b;
            this.m = "pt";
            this.T = window;
            this.ab = "env"
        };
    var Ii, zp, Ap = ph(),
        Hi = new Bi(1, Ap),
        Bp;
    Bp = void 0 === Bp ? Ie : Bp;
    Ii = new _.qi("http:" === Bp.location.protocol ? "http:" : "https:", .01);
    "number" !== typeof Ap.google_srt && (Ap.google_srt = Math.random());
    var Cp = Ii,
        Dp = Ap.google_srt;
    0 <= Dp && 1 >= Dp && (Cp.j = Dp);
    zp = new _.Ji;
    zp.Dc(function(a) {
        var b = Ie.jerExpIds;
        if (Array.isArray(b) && 0 !== b.length) {
            var c = a.eid;
            c ? (b = _.pb(c.split(",")).concat(_.pb(b)), la(b), a.eid = b.join(",")) : a.eid = b.join(",")
        }(b = Ie.jerUserAgent) && (a.useragent = b)
    });
    zp.Ec(!0);
    "complete" == Ap.document.readyState ? Ap.google_measure_js_timing || Di(Hi) : Hi.j && _.u(Ap, "load", function() {
        Ap.google_measure_js_timing || Di(Hi)
    });
    var Ep = navigator,
        Fp = function() {
            try {
                return Ep.javaEnabled()
            } catch (a) {
                return !1
            }
        },
        Gp = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Hp = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Gp(a.toLowerCase())
        },
        Ip = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Jp = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Lp = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    var Mp = function(a, b) {
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (e) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            if (!0 === c) var d = 2;
            else !1 !== c && (d = Df([0], a), null == d && ((d = Df([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    var Np = function() {};
    _.p = Np.prototype;
    _.p.getNewBlocks = function() {};
    _.p.setupOse = function() {};
    _.p.getOseId = function() {
        return -1
    };
    _.p.getCorrelator = function() {
        return ""
    };
    _.p.numBlocks = function() {
        return 0
    };
    _.p.registerAdBlock = function() {};
    _.p.unloadAdBlock = function() {};
    _.p.setLoadOsdJsOnPubWindow = function() {};
    var Op = new Bi(1, ph()),
        Pp = function() {
            var a = ph();
            a && "undefined" != typeof a.google_measure_js_timing && (a.google_measure_js_timing || Di(Op))
        };
    (function() {
        var a = ph();
        a && a.document && ("complete" == a.document.readyState ? Pp() : Op.j && _.u(a, "load", function() {
            Pp()
        }))
    })();
    Date.now();
    var Qp = function(a, b, c) {
            a && (c ? _.u(a, "load", b) : _.Pe(a, "load", b))
        },
        Rp = function() {
            var a = (ph() || _.r).google_osd_amcb;
            return Qb(a) ? a : null
        },
        Sp = function(a) {
            return "https://www.googletagservices.com/activeview/js/current/osd.js?cb=" + encodeURIComponent(void 0 === a ? "/r20100101" : a)
        };
    var Tp = function(a, b) {
            this.l = b && b.l ? b.l : 0;
            this.B = b ? b.B : "";
            this.j = b && b.j ? b.j : [];
            this.m = !0;
            if (b)
                for (a = 0; a < this.j.length; ++a) this.j[a].B = !0
        },
        Vp = function(a) {
            var b = a.m ? ph() : _.r;
            a = Up;
            b = b || _.r;
            b.google_osd_loaded ? a = !1 : (zf(b.document, a), a = b.google_osd_loaded = !0);
            a && qh()
        };
    _.p = Tp.prototype;
    _.p.getNewBlocks = function(a, b) {
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.m && e.j && (e.m = !0, a(e.j, e.v, e.G, e.l, void 0, e.B, e.A, e.R, e.D))
        }
        b && ((ph() || _.r).google_osd_amcb = a)
    };
    _.p.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = Mp(Wp, Xp);
        if (!b) return 0;
        this.l = b;
        this.B = String(a || 0);
        return this.getOseId()
    };
    _.p.getOseId = function() {
        return window && Math.random && navigator ? this.l : -1
    };
    _.p.getCorrelator = function() {
        return this.B
    };
    _.p.numBlocks = function() {
        return this.j.length
    };
    _.p.registerAdBlock = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? function() {
            return null
        } : g;
        c = Rp();
        e = _.ui() || -1;
        f = _.r.pageYOffset;
        0 <= f || (f = -1);
        c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new Yp(a, b, d, g, e, f), this.j.push(g), Qp(d, g.o, !0), Up || (Yg(_.r, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a)), Up = Sp("/r20100101")), Vp(this))
    };
    _.p.unloadAdBlock = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        b = this.m ? ph() : window;
        void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
        c && (c = kg(this.j, function(d) {
            return d.j == a
        })) && Qp(a, c.o, !1)
    };
    _.p.setLoadOsdJsOnPubWindow = function(a) {
        this.m = a
    };
    var Zp = function() {
            var a = ph(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new Tp(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new Tp(a, b)
            } catch (c) {
                return a.__google_ad_urls = new Tp(a)
            }
        },
        Up = "",
        Xp = 0,
        Wp = 0,
        Yp = function(a, b, c, d, e, f) {
            var g = this;
            d = void 0 === d ? _.Mb : d;
            this.v = a;
            this.G = b;
            this.j = c;
            this.B = this.m = this.l = !1;
            this.A = d;
            this.R = void 0 === e ? -1 : e;
            this.D = void 0 === f ? -1 : f;
            this.o = function() {
                return g.l = !0
            }
        };
    Hb("Goog_AdSense_getAdAdapterInstance", Zp);
    Hb("Goog_AdSense_OsdAdapter", Tp);
    var $p = ["auto", "inherit", "100%"],
        aq = $p.concat(["none"]),
        bq = function(a, b, c, d, e, f) {
            e = void 0 === e ? 10 : e;
            f = void 0 === f ? 10 : f;
            b = b.styleSheets;
            if (!b) return !1;
            var g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            e = -1 == e ? Infinity : e;
            f = -1 == f ? Infinity : f;
            for (var h = 0; h < Math.min(b.length, e); ++h) {
                var k = void 0;
                try {
                    var l = b[h],
                        m = null;
                    try {
                        m = l.cssRules || l.rules
                    } catch (W) {
                        if (15 == W.code) throw W.styleSheet = l, W;
                    }
                    k = m
                } catch (W) {
                    continue
                }
                if (k && 0 < k.length)
                    for (m = 0; m < Math.min(k.length, f); ++m) {
                        var q = k[m],
                            n;
                        if (n = 1 == q.type) {
                            n = q;
                            var y = c;
                            n = g.call(a, n.selectorText) && y(n)
                        }
                        if (!n && (n = d && 4 == q.type)) a: {
                            n = a;y = c;
                            for (var A = f, B = 0; B < Math.min(q.cssRules.length, A); B++) {
                                var O = q.cssRules[B],
                                    Z = y;
                                if (g.call(n, O.selectorText) && Z(O)) {
                                    n = !0;
                                    break a
                                }
                            }
                            n = !1
                        }
                        if (n) return !0
                    }
            }
            return !1
        },
        dq = function(a, b, c) {
            var d = void 0 === d ? 10 : d;
            var e = void 0 === e ? 10 : e;
            if (!a) return !0;
            var f = !0;
            dg(a, function(g) {
                return f = cq(g, b, !1, d, e)
            }, void 0 === c ? 100 : c);
            return f
        },
        cq = function(a, b, c, d, e) {
            var f = a.style;
            return f && f.height && !_.gc($p, f.height) || f && f.maxHeight && !_.gc(aq, f.maxHeight) || bq(a, b.document, function(g) {
                var h = g.style.height;
                g = g.style["max-height"];
                return h && !_.gc($p, h) || g && !_.gc(aq, g)
            }, c, d, e) ? !1 : !0
        };
    var eq = function() {},
        Aa = function(a) {
            this.j = a
        };
    _.F(Aa, eq);
    Aa.prototype.toString = function() {
        return this.j
    };
    var fq = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        gq = new RegExp("^data:" + /(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|x-matroska)|audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm))(?:;\w+=(?:\w+|"[\w;,= ]+"))*/i.source + ";base64,[a-z0-9+/]+=*$", "i"),
        hq = {},
        iq = (hq.TEL = function(a) {
            return /^tel:/i.test(a)
        }, hq.CALLTO = function(a) {
            return /^callto:\+?\d*$/i.test(a)
        }, hq.SSH = function(a) {
            return /^ssh:\/\//i.test(a)
        }, hq.RTSP = function(a) {
            return /^rtsp:\/\//i.test(a)
        }, hq.DATA = function(a) {
            return gq.test(a)
        }, hq.HTTP = function(a) {
            return /^http:/i.test(a)
        }, hq.HTTPS = function(a) {
            return /^https:/i.test(a)
        }, hq.FTP = function(a) {
            return /^ftp:/i.test(a)
        }, hq.RELATIVE = function(a) {
            return /^[^:/?#]*(?:[/?#]|$)/i.test(a)
        }, hq.MAILTO = function(a) {
            return /^mailto:/i.test(a)
        }, hq.DEFAULT = function(a) {
            return fq.test(a) || iq.DATA(a)
        }, hq);
    var Da = void 0;
    var jq = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        },
        kq = function(a, b) {
            b = void 0 === b ? window : b;
            var c = jq(b);
            if (!c) return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    var lq = function() {
        this.l = [];
        this.j = -1
    };
    lq.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.l[a] != b && (this.l[a] = b, this.j = -1)
    };
    lq.prototype.get = function(a) {
        return !!this.l[a]
    };
    var mq = function(a) {
        -1 == a.j && (a.j = cc(a.l, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.j
    };
    var nq = 0;
    var oq = function() {
        this.j = function() {}
    };
    Nb(oq);
    var pq = function() {
        var a = gp.C();
        oq.C().j(a)
    };
    var qq = function() {
        var a = void 0,
            b = 2;
        if (void 0 === a) {
            var c = void 0 === c ? _.r : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        c = a;
        var d = b;
        d = void 0 === d ? 0 : d;
        Mi(Li.C(), c, d);
        c = a;
        b = void 0 === b ? 0 : b;
        Th(Sh.C(), c, b);
        oq.C().j = Rh(Qh, a);
        Sh.C().j()
    };
    var rq = function(a) {
        _.L(this, a, null, null)
    };
    _.G(rq, _.I);
    var sq = function() {
            var a = void 0;
            this.j = a = void 0 === a ? document : a;
            this.l = 0
        },
        tq = function(a, b, c) {
            if (b.length && (b = b[0], 1 !== a.l && b && _.J(b, 1))) {
                var d = _.J(b, 4),
                    e = _.J(b, 3);
                d = {
                    domain: null === d ? void 0 : d,
                    path: null === e ? void 0 : e,
                    tc: _.J(b, 2) - Date.now() / 1E3
                };
                b = _.J(b, 1);
                a = a.j;
                a = void 0 === a ? document : a;
                v(c, 5) && (new Ha(a)).set("__gads", b, d)
            }
        };
    var uq = uc(function() {
            return !(Td || Ud || Sd) && (ee || Od || Nd)
        }),
        vq = function(a, b, c, d, e) {
            d = void 0 === d ? "" : d;
            var f = a.createElement("link");
            try {
                f.rel = c, f.href = -1 != c.toLowerCase().indexOf("stylesheet") ? Nc(b).toString() : b instanceof Mc ? Nc(b).toString() : b instanceof _.ed ? _.fd(b) : _.fd(_.hd(b))
            } catch (g) {
                return null
            }
            d && "preload" == c && (f.as = d);
            e && f.setAttribute("nonce", e);
            a = a.getElementsByTagName("head")[0];
            if (!a) return null;
            try {
                a.appendChild(f)
            } catch (g) {}
            return f
        };
    var wq = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        xq = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        yq = _.r,
        Aq = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(_.r.location.hostname)];
            zq[3] >= Zb() && b.push("adsid=" + encodeURIComponent(zq[1]));
            return a + "?" + b.join("&")
        },
        zq, Bq, Cq = function() {
            yq = _.r;
            zq = yq.googleToken = yq.googleToken || {};
            var a = Zb();
            zq[1] && zq[3] > a && 0 < zq[2] || (zq[1] = "", zq[2] = -1, zq[3] = -1, zq[4] = "", zq[6] = "");
            Bq = yq.googleIMState = yq.googleIMState || {};
            a = Bq[1];
            wq.test(a) && !xq.test(a) || (Bq[1] = ".google.com");
            Array.isArray(Bq[5]) || (Bq[5] = []);
            "boolean" !== typeof Bq[6] && (Bq[6] = !1);
            Array.isArray(Bq[7]) || (Bq[7] = []);
            "number" !== typeof Bq[8] && (Bq[8] = 0)
        },
        Dq = {
            Mb: function() {
                return 0 < Bq[8]
            },
            kd: function() {
                Bq[8]++
            },
            ld: function() {
                0 < Bq[8] && Bq[8]--
            },
            md: function() {
                Bq[8] = 0
            },
            we: function() {
                return !1
            },
            lc: function() {
                return Bq[5]
            },
            hc: function(a) {
                try {
                    a()
                } catch (b) {
                    _.r.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Ac: function() {
                if (!Dq.Mb()) {
                    var a = _.r.document,
                        b = function(e) {
                            e = Aq(e);
                            a: {
                                try {
                                    var f = Kb();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            vq(a, e, "preload", "script", f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.r.processGoogleToken({}, 2)
                            };
                            e = qf(e);
                            pa(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), Dq.kd()
                            } catch (g) {}
                        },
                        c = Bq[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.r.setTimeout(function() {
                        return _.r.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        Eq = function(a) {
            Cq();
            var b = yq.googleToken[5] || 0;
            a && (0 != b || zq[3] >= Zb() ? Dq.hc(a) : (Dq.lc().push(a), Dq.Ac()));
            zq[3] >= Zb() && zq[2] >= Zb() || Dq.Ac()
        },
        Fq = function(a) {
            _.r.processGoogleToken = _.r.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                Cq();
                1 == c ? Dq.md() : Dq.ld();
                var k = yq.googleToken = yq.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !Dq.Mb() && (!(zq[3] >= Zb()) || "NT" == zq[1]);
                var m = !(zq[3] >= Zb()) && 0 != c;
                if (l || e || m) e = Zb(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Yg(_.r, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Cq();
                if (l || !Dq.Mb()) {
                    c = Dq.lc();
                    for (b = 0; b < c.length; b++) Dq.hc(c[b]);
                    c.length = 0
                }
            };
            Eq(a)
        };
    var Gq = function(a, b, c, d, e, f) {
        _.M.call(this);
        this.o = a;
        this.status = 1;
        this.l = b;
        this.v = c;
        this.K = d;
        this.mb = !!e;
        this.m = Math.random();
        this.A = {};
        this.j = null;
        this.D = (0, _.Xb)(this.J, this);
        this.G = f
    };
    _.F(Gq, _.M);
    Gq.prototype.J = function(a) {
        if (a.origin === this.v && (this.mb || a.source == this.l)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.Rb(b) && (a = b.i, b.c === this.o && a != this.m)) {
                if (2 !== this.status) try {
                    this.status = 2, Hq(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.Rb(b)) && this.A.hasOwnProperty(a)) this.A[a](b)
            }
        }
    };
    var Hq = function(a) {
        var b = {};
        b.c = a.o;
        b.i = a.m;
        a.G && (b.e = a.G);
        a.l.postMessage(JSON.stringify(b), a.v)
    };
    Gq.prototype.H = function() {
        if (1 === this.status) {
            try {
                this.l.postMessage && Hq(this)
            } catch (a) {}
            window.setTimeout((0, _.Xb)(this.H, this), 50)
        }
    };
    Gq.prototype.connect = function(a) {
        a && (this.j = a);
        _.u(window, "message", this.D);
        this.K && this.H()
    };
    var Iq = function(a, b, c) {
            a.A[b] = c
        },
        Jq = function(a, b, c) {
            var d = {};
            d.c = a.o;
            d.i = a.m;
            d.s = b;
            d.p = c;
            try {
                a.l.postMessage(JSON.stringify(d), a.v)
            } catch (e) {}
        };
    Gq.prototype.B = function() {
        this.status = 3;
        _.Pe(window, "message", this.D);
        _.M.prototype.B.call(this)
    };
    var Kq = function() {
            this.j = [];
            this.l = [];
            this.m = []
        },
        Lq = function(a, b) {
            a.l.push(b)
        };
    var Mq = function() {
        var a = this;
        this.j = new _.t.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var Nq = function(a) {
            a = Error.call(this, a);
            this.message = a.message;
            "stack" in a && (this.stack = a.stack);
            C(Object, "setPrototypeOf").call(Object, this, Nq.prototype);
            this.name = "InputError"
        },
        Qq;
    _.F(Nq, Error);
    var Oq = function() {
            this.m = new Mq
        },
        Pq = function() {
            Oq.apply(this, arguments)
        };
    _.F(Pq, Oq);
    _.S = function(a, b) {
        a.l || (a.j = b, a.m.resolve(b))
    };
    Qq = function(a) {
        a.l || (a.j = null, a.m.resolve(null))
    };
    kb.Object.defineProperties(Pq.prototype, {
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m.j
            }
        },
        l: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !!this.B || void 0 !== this.j
            }
        }
    });
    var Rq = function(a) {
        this.m = new Mq;
        this.l = a
    };
    _.F(Rq, Oq);
    kb.Object.defineProperties(Rq.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.j
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.B
            }
        }
    });
    var Sq = function() {
        Rq.apply(this, arguments)
    };
    _.F(Sq, Rq);
    kb.Object.defineProperties(Sq.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.j
            }
        }
    });
    var Tq = function() {
        Pq.apply(this, arguments)
    };
    _.F(Tq, Pq);
    Tq.prototype.notify = function() {
        Qq(this)
    };
    var Uq = function() {
            _.M.call(this);
            var a = this;
            this.m = new Kq;
            this.K = !1;
            _.N(this, function() {
                var b = a.m;
                b.j.length = 0;
                b.m.length = 0;
                b.l.length = 0
            })
        },
        Yq, U, Vq, Xq;
    _.F(Uq, _.M);
    Uq.prototype.start = function() {
        return ra(this, function b() {
            var c = this,
                d, e;
            return sa(b, function(f) {
                switch (f.j) {
                    case 1:
                        if (c.K) return f.return();
                        c.K = !0;
                        d = c.m.l.map(function(g) {
                            return g.o
                        });
                        f.v = 2;
                        return ta(f, _.t.Promise.all(d), 4);
                    case 4:
                        if (c.na) {
                            f.j = 5;
                            break
                        }
                        Vq(c);
                        return ta(f, c.j(), 5);
                    case 5:
                        va(f, 0);
                        break;
                    case 2:
                        e = wa(f);
                        if (c.na) return f.return();
                        e instanceof Nq || (Wq(c, e), c.m.j.length && Xq(c, new Nq(e.message)));
                        f.j = 0
                }
            })
        })
    };
    Uq.prototype.l = function() {
        var a = new Pq;
        this.m.j.push(a);
        return a
    };
    Yq = function(a) {
        var b = new Tq;
        a.m.j.push(b);
        return b
    };
    _.T = function(a, b) {
        Lq(a.m, b);
        b = new Sq(b);
        a.m.m.push(b);
        return b
    };
    U = function(a, b) {
        Lq(a.m, b);
        return new Rq(b)
    };
    Vq = function(a) {
        for (var b = 0, c = _.D(a.m.m), d = c.next(); !d.done; d = c.next()) {
            if (null == d.value.l.j) throw Error("missing input: " + a.id() + "/" + b);
            ++b
        }
    };
    Xq = function(a, b) {
        a = _.D(a.m.j);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, !c.l) {
                var d = b;
                c.B = d;
                c.m.reject(d)
            }
    };
    var V;
    _.Zq = function() {
        _.M.apply(this, arguments);
        this.j = []
    };
    _.F(_.Zq, _.M);
    _.$q = function(a, b) {
        b = _.D(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Bg(a, c), a.j.push(c)
    };
    V = function(a, b) {
        _.$q(a, [b])
    };
    _.ar = function(a) {
        if (a.j.length) {
            a = _.D(a.j);
            for (var b = a.next(); !b.done; b = a.next()) b.value.start()
        }
    };
    _.Zq.prototype.B = function() {
        _.M.prototype.B.call(this);
        this.j.length = 0
    };
    var br = function() {
            this.j = []
        },
        dr = function(a, b, c, d, e) {
            a.j.push(new cr(b, c, d, e))
        },
        er = function(a, b, c, d) {
            dr(a, b, c, d + "px", void 0)
        },
        fr = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.l ? (c.m.style.removeProperty(c.j), c.m.style.setProperty(c.j, String(c.B), c.o)) : c.m.style[c.j] = c.B
            }
            a.j.length = 0
        },
        cr = function(a, b, c, d) {
            this.m = a;
            this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.B = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.o = this.l ? a.style.getPropertyPriority(this.j) : void 0;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var gr = function(a, b) {
        if (!a) return a;
        var c = a.toLowerCase();
        return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<html><head>" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>"
    };
    var hr, ir;
    hr = {
        overflow: "hidden",
        position: "fixed"
    };
    _.jr = function(a, b) {
        if (!a.body) return null;
        var c = new ir;
        c.apply(a, b);
        return function() {
            _.bh(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.m,
                position: c.B,
                top: c.o
            });
            b.scrollTo(0, c.l)
        }
    };
    ir = function() {
        this.j = this.o = this.B = this.m = null;
        this.l = 0
    };
    ir.prototype.apply = function(a, b) {
        this.m = a.body.style.overflow;
        this.B = a.body.style.position;
        this.o = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.l = _.Kn(b);
        _.bh(a.body, "top", -this.l + "px");
        _.bh(a.body, hr)
    };
    _.kr = function() {
        this.j = null
    };
    Nb(_.kr);
    var lr = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.M.call(this);
        this.j = a;
        this.l = null;
        this.o = {};
        this.v = 0;
        this.A = b;
        this.m = null
    };
    _.F(lr, _.M);
    lr.prototype.B = function() {
        this.o = {};
        this.m && (_.Pe(this.j, "message", this.m), delete this.m);
        delete this.o;
        delete this.j;
        delete this.l;
        _.M.prototype.B.call(this)
    };
    var or = function(a, b) {
            var c = {};
            if (Qb(a.j.__uspapi) || null != mr(a)) {
                var d = vc(function() {
                    return b(c)
                });
                nr(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.A)
            } else b(c)
        },
        nr = function(a, b) {
            if (Qb(a.j.__uspapi)) a = a.j.__uspapi, a("getUSPData", 1, b);
            else if (mr(a)) {
                pr(a);
                var c = ++a.v;
                a.o[c] = b;
                a.l && (b = {}, a.l.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: c
                }, b), "*"))
            }
        },
        mr = function(a) {
            if (a.l) return a.l;
            a.l = Wf(a.j, "__uspapiLocator");
            return a.l
        },
        pr = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    a.o[d.callId](d.returnValue, d.success)
                } catch (e) {}
            }, _.u(a.j, "message", a.m))
        };
    var qr = function(a) {
        _.L(this, a, null, null)
    };
    _.G(qr, _.I);
    var sr = function(a) {
        _.L(this, a, rr, null)
    };
    _.G(sr, _.I);
    var rr = [1, 2];
    var tr = function(a) {
        _.L(this, a, null, null)
    };
    _.G(tr, _.I);
    var ur = function(a) {
        _.L(this, a, null, null)
    };
    _.G(ur, _.I);
    var vr = function(a) {
        _.M.call(this);
        this.l = a;
        this.m = this.j = null;
        this.o = {};
        this.v = 0;
        this.j || (this.l.googlefc ? this.j = this.l : this.j = Wf(this.l, "googlefcPresent"))
    };
    _.F(vr, _.M);
    var xr = function(a, b) {
            return new _.t.Promise(function(c) {
                if (a.j)
                    if (a.j === a.l) {
                        var d = a.l.googlefc || {};
                        d.__fci = d.__fci || [];
                        d.__fci.push(b, c)
                    } else wr(a), d = a.v++, a.o[d] = c, c = {}, a.j.postMessage((c.__fciCall = {
                        command: b,
                        callId: d
                    }, c), "*")
            })
        },
        wr = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = new ur(JSON.parse(b.data.__fciReturn));
                    (0, a.o[_.J(c, 1)])(c)
                } catch (d) {}
            }, _.u(a.l, "message", a.m))
        };
    var yr = function(a) {
            return !1 === a.gdprApplies || "error" === a.cmpStatus || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
        },
        zr = function(a, b) {
            b = void 0 === b ? 500 : b;
            _.M.call(this);
            this.l = a;
            this.j = null;
            this.o = {};
            this.v = 0;
            this.A = b;
            this.m = null
        };
    _.F(zr, _.M);
    zr.prototype.B = function() {
        this.o = {};
        this.m && (_.Pe(this.l, "message", this.m), delete this.m);
        delete this.o;
        delete this.l;
        delete this.j;
        _.M.prototype.B.call(this)
    };
    var Br = function(a) {
            return "function" === typeof a.l.__tcfapi || null != Ar(a)
        },
        Dr = function(a, b) {
            var c = {},
                d = vc(function() {
                    return b(c)
                }),
                e = setTimeout(function() {
                    c.tcString = "tcunavailable";
                    d()
                }, a.A);
            Cr(a, "addEventListener", function(f, g) {
                e && (clearTimeout(e), e = 0);
                g && (c = f);
                f = void 0 !== c.tcString && "string" !== typeof c.tcString || void 0 !== c.gdprApplies && "boolean" !== typeof c.gdprApplies || void 0 !== c.listenerId && "number" !== typeof c.listenerId || void 0 !== c.addtlConsent && "string" !== typeof c.addtlConsent || !c.cmpStatus || "error" === c.cmpStatus ? !1 : !0;
                if (!f || yr(c)) f || (c.tcString = "tcunavailable"), Cr(a, "removeEventListener", null, c.listenerId), d()
            })
        },
        Cr = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.l.__tcfapi) a = a.l.__tcfapi, a(b, 2, c, d);
            else if (Ar(a)) {
                Er(a);
                var e = ++a.v;
                a.o[e] = c;
                a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Ar = function(a) {
            if (a.j) return a.j;
            a.j = Wf(a.l, "__tcfapiLocator");
            return a.j
        },
        Er = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c;
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__tcfapiReturn;
                    a.o[d.callId](d.returnValue, d.success)
                } catch (e) {}
            }, _.u(a.l, "message", a.m))
        };
    var Fr = new Ic(Gc, "gpt/pubads_impl_"),
        Gr = new Ic(Gc, "https://securepubads.g.doubleclick.net/");
    var Hr = function(a, b, c, d, e, f) {
            this.m = Jg(a);
            this.l = Jg(b);
            this.B = c;
            this.j = Jg(d);
            this.o = e;
            this.v = f
        },
        Ir = function(a) {
            return JSON.stringify({
                windowCoords_t: a.m.top,
                windowCoords_r: a.m.right,
                windowCoords_b: a.m.bottom,
                windowCoords_l: a.m.left,
                frameCoords_t: a.l.top,
                frameCoords_r: a.l.right,
                frameCoords_b: a.l.bottom,
                frameCoords_l: a.l.left,
                styleZIndex: a.B,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.o,
                yInView: a.v
            })
        },
        Jr = function(a, b) {
            var c = window,
                d = c.screenX || c.screenLeft || 0,
                e = c.screenY || c.screenTop || 0;
            c = new Ig(e, d + (c.outerWidth || document.documentElement.clientWidth || 0), e + (c.outerHeight || document.documentElement.clientHeight || 0), d);
            var f = hh(a);
            d = _.kh(_.lh, a);
            var g = new Kg(f.x, f.y, d.width, d.height);
            d = Lg(g);
            e = String(eh(a, "zIndex"));
            var h = new Ig(0, Infinity, Infinity, 0);
            for (var k = $e(a), l = k.j.body, m = k.j.documentElement, q = ef(k.j); a = gh(a);)
                if (!(Ld && 0 == a.clientWidth || Pd && 0 == a.clientHeight && a == l) && a != l && a != m && "visible" != eh(a, "overflow")) {
                    var n = hh(a),
                        y = new _.We(a.clientLeft, a.clientTop);
                    n.x += y.x;
                    n.y += y.y;
                    h.top = Math.max(h.top, n.y);
                    h.right = Math.min(h.right, n.x + a.clientWidth);
                    h.bottom = Math.min(h.bottom, n.y + a.clientHeight);
                    h.left = Math.max(h.left, n.x)
                } a = q.scrollLeft;
            q = q.scrollTop;
            h.left = Math.max(h.left, a);
            h.top = Math.max(h.top, q);
            k = _.df(ff(k.j) || window);
            h.right = Math.min(h.right, a + k.width);
            h.bottom = Math.min(h.bottom, q + k.height);
            h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Kg(h.left, h.top, h.right - h.left, h.bottom - h.top) : null;
            b ? (k = b.boundingClientRect, b = new Kg(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)) : b = h;
            k = h ? Mg(g, h) : null;
            h = f = 0;
            if (a = k) a = new _.Xe(k.width, k.height), a = a.width * a.height;
            a && (f = k.width / g.width, h = k.height / g.height);
            k = new Ig(0, 0, 0, 0);
            if (a = b)(g = Mg(g, b)) ? (q = Lg(b), l = Lg(g), a = l.right != q.left && q.right != l.left, q = l.bottom != q.top && q.bottom != l.top, a = (0 != g.width || a) && (0 != g.height || q)) : a = !1;
            a && (k = new Ig(Math.max(d.top - b.top, 0), Math.max(b.left + b.width - d.right, 0), Math.max(b.top + b.height - d.bottom, 0), Math.max(d.left - b.left, 0)));
            return new Hr(c, d, e, k, f, h)
        };
    var Kr = function(a) {
        this.o = a;
        this.B = null;
        this.H = this.status = 0;
        this.l = null;
        this.ma = "sfchannel" + a
    };
    var Lr = !1,
        Mr = "",
        Nr = function(a) {
            a = a.match(/[\d]+/g);
            if (!a) return "";
            a.length = 3;
            return a.join(".")
        };
    (function() {
        if (navigator.plugins && navigator.plugins.length) {
            var a = navigator.plugins["Shockwave Flash"];
            if (a && (Lr = !0, a.description)) {
                Mr = Nr(a.description);
                return
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                Lr = !0;
                Mr = "2.0.0.11";
                return
            }
        }
        if (navigator.mimeTypes && navigator.mimeTypes.length && (a = navigator.mimeTypes["application/x-shockwave-flash"], Lr = !(!a || !a.enabledPlugin))) {
            Mr = Nr(a.enabledPlugin.description);
            return
        }
        if ("undefined" != typeof ActiveXObject) {
            try {
                var b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                Lr = !0;
                Mr = Nr(b.GetVariable("$version"));
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                Lr = !0;
                Mr = "6.0.21";
                return
            } catch (c) {}
            try {
                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), Lr = !0, Mr = Nr(b.GetVariable("$version"))
            } catch (c) {}
        }
    })();
    var Or = Lr,
        Pr = Mr;
    var Qr = function(a) {
        this.j = a
    };
    var Rr = function(a, b) {
        this.ub = a;
        this.vb = b;
        this.l = this.j = !1
    };
    var Sr = function(a, b, c, d, e, f, g, h, k) {
        k = void 0 === k ? [] : k;
        this.o = a;
        this.l = b;
        this.m = c;
        this.permissions = d;
        this.B = e;
        this.v = f;
        this.mb = g;
        this.hostpageLibraryTokens = k;
        this.j = "";
        this.Xa = h
    };
    var Tr = function(a, b) {
        this.l = a;
        this.B = b
    };
    Tr.prototype.j = function(a) {
        this.B && a && (a.sentinel = this.B);
        return JSON.stringify(a)
    };
    var Ur = function(a, b, c) {
        Tr.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.F(Ur, Tr);
    Ur.prototype.j = function() {
        return Tr.prototype.j.call(this, {
            uid: this.l,
            version: this.version
        })
    };
    var Vr = function(a, b, c, d) {
        Tr.call(this, a, void 0 === d ? "" : d);
        this.o = b;
        this.m = c
    };
    _.F(Vr, Tr);
    Vr.prototype.j = function() {
        return Tr.prototype.j.call(this, {
            uid: this.l,
            initialWidth: this.o,
            initialHeight: this.m
        })
    };
    var Wr = function(a, b, c) {
        Tr.call(this, a, void 0 === c ? "" : c);
        this.m = b
    };
    _.F(Wr, Tr);
    Wr.prototype.j = function() {
        return Tr.prototype.j.call(this, {
            uid: this.l,
            description: this.m
        })
    };
    var Xr = function(a, b, c, d) {
        Tr.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.F(Xr, Tr);
    Xr.prototype.j = function() {
        return Tr.prototype.j.call(this, {
            uid: this.l,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var Yr = function(a, b) {
        Tr.call(this, a, void 0 === b ? "" : b)
    };
    _.F(Yr, Tr);
    Yr.prototype.j = function() {
        return Tr.prototype.j.call(this, {
            uid: this.l
        })
    };
    var Zr = function(a, b, c) {
        Tr.call(this, a, void 0 === c ? "" : c);
        this.o = b
    };
    _.F(Zr, Tr);
    Zr.prototype.j = function() {
        var a = {
            uid: this.l,
            newGeometry: Ir(this.o)
        };
        return Tr.prototype.j.call(this, a)
    };
    var $r = function(a, b, c, d, e, f) {
        Zr.call(this, a, c, void 0 === f ? "" : f);
        this.v = b;
        this.m = d;
        this.push = e
    };
    _.F($r, Zr);
    $r.prototype.j = function() {
        var a = {
            uid: this.l,
            success: this.v,
            newGeometry: Ir(this.o),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.B && (a.sentinel = this.B);
        return JSON.stringify(a)
    };
    var as = function(a, b, c, d) {
        Tr.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.F(as, Tr);
    as.prototype.j = function() {
        return Tr.prototype.j.call(this, {
            uid: this.l,
            width: this.width,
            height: this.height
        })
    };
    var bs = function(a, b, c, d, e) {
        var f = c;
        f && (f = "?" + f);
        b = (void 0 === e ? "//tpc.googlesyndication.com" : e) + ("/safeframe/" + b + "/html/container.html" + f);
        e = a;
        for (f = 0; e != e.parent;) f++, e = e.parent;
        (e = f) && (b += (c ? "&" : "?") + "n=" + e);
        (c = d) || (c = Pf(a, !1));
        return (c ? "https:" : "http:") + b
    };
    var gs = function(a) {
        Kr.call(this, a.uniqueId);
        var b = this;
        this.D = a.fd;
        this.G = 1 == a.size;
        this.V = new Rr(a.permissions.ub && !this.G, a.permissions.vb && !this.G);
        this.v = a.Tb;
        this.ra = a.hostpageLibraryTokens || [];
        var c = window.location;
        this.fa = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host;
        this.ja = !!a.mb;
        c = !1 === a.Jc ? "https:" : window.location.protocol;
        this.U = a.Bc ? "//" + a.Bc + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ea = Ka(a.Xa) ? "https://secureframe.doubleclick.net" : c + this.U;
        this.W = !!a.Sc;
        this.ba = cs(a);
        this.m = new br;
        ds(this, a.Tb, a.size);
        this.B = this.$ = Jr(a.Tb);
        this.L = a.pd || "1-0-37";
        this.da = a.Pc || "";
        this.Y = void 0 === a.Xa ? null : a.Xa;
        es(this, a);
        this.O = null;
        this.J = Wi(412, function() {
            return fs(b)
        }, a.ta);
        this.K = -1;
        this.A = 0;
        this.R = null;
        !a.ye || "function" !== typeof IntersectionObserver || Rd || Qd || (this.R = new IntersectionObserver(Wi(414, function(e) {
            b.O = e[e.length - 1];
            fs(b)
        }, a.ta)));
        this.l = new Gq(this.ma, this.j.contentWindow, this.ea, !1);
        Iq(this.l, "init_done", (0, _.Xb)(this.Nb, this));
        Iq(this.l, "register_done", (0, _.Xb)(this.Wb, this));
        Iq(this.l, "report_error", (0, _.Xb)(this.Xb, this));
        Iq(this.l, "expand_request", (0, _.Xb)(this.Lb, this));
        Iq(this.l, "collapse_request", (0, _.Xb)(this.Jb, this));
        Iq(this.l, "creative_geometry_update", (0, _.Xb)(this.N, this));
        this.l.connect((0, _.Xb)(this.Rb, this));
        var d = Wi(415, function() {
            b.j && (b.j.name = "", a.wc && a.wc(), _.Pe(b.j, "load", d))
        }, a.ta);
        _.u(this.j, "load", d);
        this.Nb = Wi(413, this.Nb, a.ta);
        this.Wb = Wi(417, this.Wb, a.ta);
        this.Xb = Wi(419, this.Xb, a.ta);
        this.Lb = Wi(411, this.Lb, a.ta);
        this.Jb = Wi(409, this.Jb, a.ta);
        this.N = Wi(410, this.N, a.ta);
        this.Rb = Wi(416, this.Rb, a.ta)
    };
    _.F(gs, Kr);
    var ds = function(a, b, c) {
            a.G ? (b.style.width = _.jh("100%", !0), b.style.height = _.jh("auto", !0)) : (b.style.width = _.jh(c.width, !0), b.style.height = _.jh(c.height, !0))
        },
        es = function(a, b) {
            var c = $e(a.v),
                d = b.content;
            d = a.L + ";" + d.length + ";" + d;
            var e = new Sr(a.o, a.fa, a.$, a.V, new Qr({
                shared: {
                    sf_ver: a.L,
                    ck_on: navigator.cookieEnabled ? 1 : 0,
                    flash_ver: Or ? Pr : "0"
                }
            }), a.G, a.ja, a.Y, a.ra);
            var f = {};
            f.uid = e.o;
            f.hostPeerName = e.l;
            f.initialGeometry = Ir(e.m);
            var g = e.permissions;
            g = JSON.stringify({
                expandByOverlay: g.ub,
                expandByPush: g.vb,
                readCookie: g.j,
                writeCookie: g.l
            });
            f = (f.permissions = g, f.metadata = JSON.stringify(e.B.j), f.reportCreativeGeometry = e.v, f.isDifferentSourceWindow = e.mb, f.goog_safeframe_hlt = tn(e.hostpageLibraryTokens), f.encryptionMode = e.Xa, f);
            e.j && (f.sentinel = e.j);
            e = JSON.stringify(f);
            e = d + e;
            d = !1 === b.Jc;
            if (a.W && b.size instanceof _.Xe) {
                f = Ka(b.Xa) ? "https://secureframe.doubleclick.net" : ff(c.j).location.protocol + a.U;
                g = b.pc;
                var h = b.size,
                    k = ff($e(a.v).j);
                nq || zf(k.document, "https://pagead2.googlesyndication.com/pagead/expansion_embed.js");
                nq++;
                k.google_eas_queue = k.google_eas_queue || [];
                k.google_eas_queue.push({
                    a: g,
                    b: f,
                    c: h.width,
                    d: h.height,
                    e: "sf-gdn-exp-" + nq,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            g = b.size;
            var l = b.Fb,
                m = b.$c || "";
            f = g.width;
            h = g.height;
            g = "";
            a.G && (h = f = 0, g = "min-width:100%");
            k = {};
            k.id = b.pc;
            k.title = m;
            k.name = e;
            b = ff(c.j);
            d = Ka(a.Y) ? "https://secureframe.doubleclick.net/container.html?ecs=" + l : bs(b, a.L, a.da, d, a.U);
            e = [];
            a.W && (b = Qf(b.location.href), e.push([0 < b.length ? "google_debug" + (b ? "=" + b : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.o, "&p=", encodeURIComponent(_.r.document.location.protocol), "//", encodeURIComponent(_.r.document.location.host)].join("")));
            e.length && (d += "#" + e.join("&"));
            b = (k.src = d, k.scrolling = "no", k.marginWidth = "0", k.marginHeight = "0", k.width = String(f), k.height = String(h), k["data-is-safeframe"] = "true", k);
            null !== a.ba && (b.sandbox = a.ba);
            d = g;
            e = {};
            d = (e.frameborder = 0, e.allowTransparency = "true", e.style = "border:0;vertical-align:bottom;" + (void 0 === d ? "" : d), e.src = "about:blank", e);
            b && Ec(d, b);
            c = c.l("IFRAME", d);
            a.v.appendChild(c);
            a.j = c
        };
    _.p = gs.prototype;
    _.p.Rb = function() {
        this.R && this.j ? this.R.observe(this.j) : (_.u(window, "resize", this.J), _.u(window, "scroll", this.J))
    };
    _.p.Nb = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Rb(b) || !Ja(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new Ur(b.uid, b.version, b.sentinel);
            if (this.o != c.l || this.L != c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (d) {
            this.D.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    _.p.Wb = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Rb(b) || !Ja(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.o != (new Vr(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).l) throw Error("Wrong source container");
            this.status = 2
        } catch (c) {
            this.D.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    _.p.Xb = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Rb(b) || !Ja(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new Wr(b.uid, b.description, b.sentinel);
            if (this.o != c.l) throw Error("Wrong source container");
            this.D.info("Ext reported an error. Description: " + c.m)
        } catch (d) {
            this.D.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    _.p.Lb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.H) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Rb(b) || !Ja(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new Xr(b.uid, new Ig(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.o != c.l) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.V.vb || !c.push && this.V.ub) {
                var e = c.m,
                    f = c.push,
                    g = this.B = Jr(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) dr(this.m, h, "overflowX", "visible", "important"), dr(this.m, h, "overflowY", "visible", "important");
                    var k = this.B.l,
                        l = this.B.l,
                        m = Lg(new Kg(0, 0, k.right - k.left, l.bottom - l.top));
                    _.Rb(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                    dr(this.m, this.v, "position", "relative");
                    dr(this.m, this.j, "position", "absolute");
                    f ? (er(this.m, this.v, "width", m.right - m.left), er(this.m, this.v, "height", m.bottom - m.top)) : dr(this.m, this.j, "zIndex", "10000");
                    er(this.m, this.j, "width", m.right - m.left);
                    er(this.m, this.j, "height", m.bottom - m.top);
                    er(this.m, this.j, "left", m.left);
                    er(this.m, this.j, "top", m.top);
                    this.H = 2;
                    this.B = Jr(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            Jq(this.l, "expand_response", (new $r(this.o, a, this.B, c.m, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (q) {
            this.D.error("Invalid EXPAND_REQUEST message. Reason: " + q.message)
        }
    };
    _.p.Jb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.H) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Rb(b) || !Ja(b.uid)) throw Error("Cannot parse JSON message");
            if (this.o != (new Yr(b.uid, b.sentinel)).l) throw Error("Wrong source container");
            fr(this.m);
            this.H = 0;
            this.j && (this.B = Jr(this.j));
            Jq(this.l, "collapse_response", (new Zr(this.o, this.B)).j())
        } catch (c) {
            this.D.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    var fs = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.A) {
            case 0:
                hs(a);
                a.K = window.setTimeout((0, _.Xb)(a.Z, a), 1E3);
                a.A = 1;
                break;
            case 1:
                a.A = 2;
                break;
            case 2:
                a.A = 2
        }
    };
    gs.prototype.N = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.Rb(b) || !Ja(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new as(b.uid, b.width, b.height, b.sentinel);
            if (this.o != c.l) throw Error("Wrong source container");
            var d = String(c.height);
            this.G ? d != this.j.height && (this.j.height = d, fs(this)) : this.D.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (e) {
            this.D.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message)
        }
    };
    gs.prototype.Z = function() {
        if (1 == this.status || 2 == this.status) switch (this.A) {
            case 1:
                this.A = 0;
                break;
            case 2:
                hs(this), this.K = window.setTimeout((0, _.Xb)(this.Z, this), 1E3), this.A = 1
        }
    };
    var hs = function(a) {
            a.B = Jr(a.j, a.O);
            a.O = null;
            Jq(a.l, "geometry_update", (new Zr(a.o, a.B)).j())
        },
        cs = function(a) {
            var b = null;
            a.Cc && (b = a.Cc);
            return null == b ? null : b.join(" ")
        },
        is = ["allow-modals", "allow-orientation-lock", "allow-presentation"],
        js = ["allow-top-navigation"],
        ks = ["allow-same-origin"],
        ls = Tf(_.pb(is).concat(_.pb(js))),
        ms = Tf(_.pb(is).concat(_.pb(ks))),
        ns = Tf(_.pb(is).concat(_.pb(js), _.pb(ks))),
        os = Tf(_.pb(is).concat(_.pb(js), ["allow-pointer-lock"]));
    var Ma = function(a, b, c, d) {
        try {
            var e = new yp(b, c);
            e.nb = d;
            e.T = a;
            za(new xp(e))
        } catch (f) {}
    };
    var ps = function() {
        var a = window,
            b = a.google_ltobserver;
        b && (b.disconnect(), delete a.google_ltobserver);
        a.google_lt_queue && delete a.google_lt_queue
    };
    var qs = function(a, b, c) {
            return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new $a(c, b)
        },
        rs = function(a, b, c) {
            _.u(a, b, c);
            return function() {
                return _.Pe(a, b, c)
            }
        },
        ss = null,
        ts = function() {
            ss = _.ui()
        },
        us = function(a, b) {
            return b ? null === ss ? (_.u(a, "mousemove", ts, {
                passive: !0
            }), _.u(a, "scroll", ts, {
                passive: !0
            }), ts(), !1) : _.ui() - ss >= 1E3 * b : !1
        },
        vs = function(a) {
            var b = a.T,
                c = a.element,
                d = a.wd,
                e = a.td,
                f = void 0 === a.Hc ? 0 : a.Hc,
                g = a.Ib,
                h = a.Tc,
                k = void 0 === a.uc ? !0 : a.uc,
                l = null,
                m = !1,
                q = !1,
                n = [],
                y = (void 0 === a.xb ? qs : a.xb)(b, void 0 === a.options ? {} : a.options, function(A, B) {
                    try {
                        var O = function() {
                            n.length || (e && (n.push(rs(c, "mouseenter", function() {
                                m = !0;
                                O()
                            })), n.push(rs(c, "mouseleave", function() {
                                m = !1;
                                O()
                            }))), n.push(rs(b.document, "visibilitychange", function() {
                                return O()
                            })));
                            var Z = us(b, f),
                                W = An(b.document);
                            if (q && !m && !Z && !W) l = l || b.setTimeout(function() {
                                us(b, f) ? O() : (g(), B.disconnect())
                            }, 1E3 * d);
                            else if (k || m || Z || W) b.clearTimeout(l), l = null
                        };
                        q = A[A.length - 1].isIntersecting;
                        O()
                    } catch (Z) {
                        h && h(Z)
                    }
                });
            y.observe(c);
            return function() {
                y.disconnect();
                for (var A = _.D(n), B = A.next(); !B.done; B = A.next()) B = B.value, B();
                null != l && b.clearTimeout(l)
            }
        };
    var ws = function() {
            var a = _.J(dp.C().j, 26);
            this.j = null;
            this.l = 0;
            this.m = a
        },
        xs = function(a) {
            if (!a.j) {
                var b = _.Oi(7);
                Up = Sp();
                Xp = b;
                Wp = 0;
                if (!md() || 0 <= bd(rd(), 11)) b = Zp();
                else {
                    b = ph();
                    var c = b.__google_ad_urls;
                    b = c ? c : b.__google_ad_urls = new Np
                }
                a.j = b;
                a.l = a.j.setupOse(a.m)
            }
            return a.j
        };
    ws.prototype.getOseId = function() {
        this.l || (this.l = Mp(0, _.Oi(7)));
        return this.l
    };
    var ys = function(a, b) {
            a = void 0 === a ? {} : a;
            b = void 0 === b ? {} : b;
            this.l = a;
            this.j = b
        },
        zs = function(a, b, c, d) {
            if (!(b && b in a.l)) return !1;
            if (void 0 === d || d || !a.j[b]) a.j[b] = c || "";
            return !0
        },
        As = function(a, b) {
            _.Ua(b.j, function(c, d) {
                this.j[d] || (this.j[d] = c)
            }, a)
        },
        ck = function(a) {
            return a.j.page_url
        },
        Bs = function(a) {
            var b = {};
            _.Ua(a.j, function(c, d) {
                d in a.l && (b[a.l[d]] = c)
            });
            return new ys(a.l, b)
        },
        Cs = function(a) {
            var b = [];
            _.Ua(a.j, function(c, d) {
                d in a.l && b.push({
                    $a: a.l[d],
                    xc: c
                })
            });
            return b
        },
        Ds = function(a, b, c, d) {
            var e = [],
                f = b.j;
            _.Ua(d, function(g, h) {
                if (g) {
                    g = {
                        $a: g
                    };
                    var k = f[h],
                        l = [];
                    a.forEach(function(m, q) {
                        (m = c[_.bk(m)]) && m.j[h] && (l[q] = m.j[h])
                    });
                    if (l.length || k) l.length && (g.sd = l), k && (g.xc = k), e.push(g)
                }
            });
            return e
        };
    var Es, Fs, Gs, Ok;
    Es = function() {
        var a = bo();
        this.j = {};
        this.A = a;
        this.l = new ys(a);
        this.m = {};
        this.o = {};
        this.B = this.v = !1
    };
    Fs = function(a, b) {
        var c = _.bk(b);
        a.j[c] || (a.j[c] = b)
    };
    Gs = function(a, b) {
        b.forEach(function(c) {
            _.bk(c) in a.j && Wo(c)
        })
    };
    _.Hs = function(a, b) {
        var c = b.l;
        return (c = c && xe(c, Zm, 50)) && null != _.J(c, 1) ? !1 : !a.o[_.bk(b)]
    };
    Ok = function(a) {
        var b = 0;
        _.Ua(a.j, function() {
            b++
        });
        return b
    };
    Es.prototype.toString = function() {
        var a = "[AdData:",
            b = [];
        _.Ua(this.j, function(c) {
            b.push(c.toString())
        });
        a += b.join();
        return a + "]"
    };
    var Is = function(a) {
            var b = [];
            _.Ua(a.j, function(c) {
                b.push(c)
            });
            return b
        },
        Nk = function(a) {
            a = Is(a).map(function(b) {
                return b.A
            });
            la(a);
            return a
        },
        Js = function(a, b) {
            b.forEach(function(c) {
                if (a.j[_.bk(c)]) {
                    var d = a.j;
                    c = _.bk(c);
                    c in d && delete d[c]
                }
            })
        };
    var Ks = 0,
        Ls = function() {
            var a = new _.Te;
            this.Fb = a.j.getUTCFullYear() + xd(a.j.getUTCMonth() + 1) + xd(a.j.getUTCDate());
            this.j = [];
            this.B = NaN;
            this.L = "json_html";
            this.o = "fif";
            this.oa = 1;
            this.J = [];
            this.va = !1;
            this.Ea = this.Ua = this.Va = NaN;
            this.A = 0;
            this.N = this.K = this.H = "";
            this.D = [];
            this.v = this.m = 0;
            this.l = [];
            this.G = {};
            this.R = {}
        },
        Ms = function(a, b) {
            b = _.bk(b);
            if (!a.G[b]) {
                var c = _.w(253) ? wk() : window == window.top ? (++Ks).toString(36) : yd();
                a.G[b] = c
            }
            return a.G[b]
        };
    var Ns = function(a, b, c) {
        var d = !1,
            e = function() {
                !d && b.G && (c(), d = !0)
            },
            f = b.l;
        (f = f && xe(f, Ge, 43) && a.contentWindow ? _.x(5) : 0) && 2 != f || _.u(a, "load", e);
        f && a.contentWindow && _.u(a.contentWindow, "amp-ini-load", e)
    };
    var Os = null,
        Ps = !1,
        Qs = !1,
        Rs = !1,
        Ss = function(a) {
            a = void 0 === a ? _.r : a;
            if (!Qs) {
                var b = new Jk("gpt_pubconsole_loaded");
                _.eb(b);
                _.E(b, "param", String(Ra(a)));
                _.E(b, "api", String(Rs));
                Lk(b, 1);
                b = "https:" + _.Oi(228) + "loader.js";
                zf(a.document, b);
                Qs = !0
            }
        },
        Ts = P(94, function(a) {
            a = void 0 === a ? _.r : a;
            _.db()._pubconsole_disable_ || null !== Ra(a) && Ss(a)
        });
    "complete" === _.r.document.readyState ? Ts() : $i(_.r, function() {
        Ts()
    });
    cb("disablePublisherConsole", Q(93, function() {
        _.db()._pubconsole_disable_ = !0
    }));
    cb("onPubConsoleJsLoad", Q(731, function() {
        Ps && (_.db().console.openConsole(Os), Os = null, Ps = !1)
    }));
    cb("openConsole", Q(732, function(a) {
        a = void 0 === a ? "" : a;
        Rs = !0;
        _.db && _.db().console ? _.db().console.openConsole(a) : (a && (Os = a), Ps = !0, Ss())
    }));
    var Us = function() {
        var a = cl.C();
        this.getAllEvents = Q(563, function() {
            return Qs ? Eg(a.j).slice() : []
        });
        this.getEventsByService = Q(564, function(b) {
            return Qs ? dl(a, b).slice() : []
        });
        this.getEventsBySlot = Q(565, function(b) {
            return Qs ? el(a, b).slice() : []
        });
        this.getEventsByLevel = Q(566, function(b) {
            return Qs ? fl(a, b).slice() : []
        })
    };
    _.F(Us, cj);
    var Vs = function(a, b, c) {
        var d = this,
            e = cl.C();
        this.set = Q(83, function(f, g) {
            a.set(f, g);
            return d
        });
        this.get = Q(84, function(f) {
            return a.get(f)
        });
        this.setClickUrl = Q(79, function(f) {
            if ("string" !== typeof f) return e.I(ol("Slot.setClickUrl", [f]), null, a.l), d;
            _.K(c, 7, f);
            return d
        });
        this.setTargeting = Q(81, function(f, g) {
            co(a.l, c, f, g, e);
            return d
        });
        this.updateTargetingFromMap = Q(85, function(f) {
            eo(a.l, c, f, e);
            return d
        });
        this.display = Q(78, function() {
            var f = dp.C().j;
            f = vk(f, ep());
            a.display(f)
        });
        this.setTagForChildDirectedTreatment = Q(80, function(f) {
            if (0 === f || 1 === f) {
                var g = yj(b) || new rj;
                _.K(g, 5, f);
                Ae(b, 25, g)
            }
            return d
        });
        this.setForceSafeFrame = Q(567, function(f) {
            if ("boolean" !== typeof f) return e.I(hm("PassbackSlot.setForceSafeFrame", String(f)), null, a.l), d;
            _.K(c, 12, f);
            return d
        });
        this.setTagForUnderAgeOfConsent = Q(448, function(f) {
            if (0 === f || 1 === f) {
                var g = yj(b) || new rj;
                _.K(g, 6, f);
                Ae(b, 25, g)
            }
            return d
        })
    };
    _.F(Vs, cj);
    var Ws = function(a, b) {
            return a.map(function(c) {
                return dj(c, b)
            }).filter(function(c) {
                return !!c
            })
        },
        Xs = function(a) {
            var b = gp.C(),
                c = [];
            a = _.D(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.l = d;
                var e = Ni(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        Ys = vc(function() {
            return jg("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        Zs = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    Ys();
                    return !0
                },
                set: function() {
                    Ys()
                },
                configurable: !0
            })
        },
        ht = function(a, b, c, d) {
            go.call(this, a);
            var e = this,
                f = cl.C(),
                g = !1;
            this.setTargeting = Q(1, function(h, k) {
                var l = null;
                "string" === typeof k ? l = [k] : Array.isArray(k) ? l = k : Pb(k) && (l = C(Array, "from").call(Array, k));
                var m = "string" === typeof h && !Sc(h);
                l = _.w(180) ? l : l && rc(l);
                var q = !!l && l.every(function(n) {
                    return "string" === typeof n
                });
                if (!m || !q) return f.I(ol("PubAdsService.setTargeting", [h, k]), a), e;
                k = (z = ze(c, mj, 2), C(z, "find")).call(z, function(n) {
                    return nj(n) === h
                });
                if ("gpt-beta" === h) {
                    if (a.l) return f.I(Dm(l.join())), e;
                    if (k) return f.I(Em(l.join())), e;
                    l = Xs(l)
                }
                k ? pj(k, l) : (k = pj(oj(new mj, h), l), Ce(c, 2, k, mj));
                f.info(qm(h, l.join(), a.X()), a);
                return e
            });
            this.clearTargeting = Q(2, function(h) {
                if (void 0 === h) return xj(c, []), f.info(Bm(a.X()), a), e;
                if ("gpt-beta" === h) return f.I(Fm(h)), e;
                var k = ze(c, mj, 2),
                    l = C(k, "findIndex").call(k, function(m) {
                        return nj(m) === h
                    });
                if (0 > l) return f.I(nm(h, a.X()), a), e;
                k.splice(l, 1);
                xj(c, k);
                f.info(mm(h, a.X()), a);
                return e
            });
            this.getTargeting = Q(38, function(h) {
                if ("string" !== typeof h) return f.I(ol("PubAdsService.getTargeting", [h]), a), [];
                var k = (z = ze(c, mj, 2), C(z, "find")).call(z, function(l) {
                    return nj(l) === h
                });
                return k ? _.J(k, 2).slice() : []
            });
            this.getTargetingKeys = Q(39, function() {
                return ze(c, mj, 2).map(function(h) {
                    return nj(h)
                })
            });
            this.setCategoryExclusion = Q(3, function(h) {
                if ("string" !== typeof h || Sc(h)) return f.I(ol("PubAdsService.setCategoryExclusion", [h]), a), e;
                (z = _.J(c, 3), C(z, "includes")).call(z, h) || we(c, 3, h);
                f.info(om(h), a);
                return e
            });
            this.clearCategoryExclusions = Q(4, function() {
                _.K(c, 3, []);
                f.info(pm(), a);
                return e
            });
            this.disableInitialLoad = Q(5, function() {
                a.l ? f.I($l("disableInitialLoad", "pubads"), a) : (_.K(c, 4, !0), g || (g = !0, Zs()))
            });
            this.enableSingleRequest = Q(6, function() {
                if (a.l && !v(c, 6)) return f.I(Zl("enableSingleRequest"), a), !1;
                f.info(bm("single request"), a);
                _.K(c, 6, !0);
                return !0
            });
            this.enableAsyncRendering = Q(7, function() {
                return !0
            });
            this.enableSyncRendering = Q(8, function() {
                jg("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = Q(485, function(h) {
                var k = new qj;
                _.K(k, 1, 800);
                _.K(k, 2, 400);
                _.K(k, 3, 3);
                if (_.Rb(h)) {
                    var l = h.fetchMarginPercent;
                    "number" === typeof l && (0 <= l ? _.K(k, 1, l) : -1 == l && _.K(k, 1, void 0));
                    l = h.renderMarginPercent;
                    "number" === typeof l && (0 <= l ? _.K(k, 2, l) : -1 == l && _.K(k, 2, void 0));
                    h = h.mobileScaling;
                    "number" === typeof h && (0 < h ? _.K(k, 3, h) : -1 == h && _.K(k, 3, 1))
                }
                Ae(c, 5, k)
            });
            this.setCentering = Q(9, function(h) {
                h = !!h;
                f.info(cm("centering", String(h)), a);
                _.K(c, 15, h)
            });
            this.definePassback = Q(10, function(h, k) {
                return (h = $s(a, h, k).slot) && h.j()
            });
            this.refresh = Q(11, function(h, k) {
                k = void 0 === k ? {} : k;
                h && !Array.isArray(h) || !_.Rb(k) || k.changeCorrelator && "boolean" !== typeof k.changeCorrelator ? f.I(ol("PubAdsService.refresh", [h, k].filter(function(l) {
                    return void 0 !== l
                })), a) : (k && 0 == k.changeCorrelator || _.K(c, 26, Fk()), h = h ? Ws(h, b) : a.m, at(a, vk(c, d), h))
            });
            this.enableVideoAds = Q(12, function() {
                _.K(c, 21, !0);
                bt(a, c)
            });
            this.setVideoContent = Q(13, function(h, k) {
                _.K(c, 21, !0);
                _.K(c, 22, String(h || ""));
                _.K(c, 23, String(k || ""));
                bt(a, c)
            });
            this.collapseEmptyDivs = Q(14, function(h) {
                h = void 0 === h ? !1 : h;
                v(c, 11) ? f.I(km(), a) : a.l ? f.I(Zl("collapseEmptyDivs"), a) : (h && _.K(c, 10, !0), _.Wa("gpt_ced", function(k) {
                    _.E(k, "sc", h ? "t" : "f");
                    _.E(k, "level", "page");
                    _.eb(k)
                }), f.info(jm(String(!!h)), a), _.K(c, 11, !0));
                return !!v(c, 11)
            });
            this.clear = Q(15, function(h) {
                return Array.isArray(h) ? (h = Ws(h, b), ct(a, c, d, h)) : ct(a, c, d, h)
            });
            this.setLocation = Q(16, function(h) {
                if ("string" !== typeof h) return f.I(im("Address")), e;
                _.K(c, 8, h);
                return e
            });
            this.setCookieOptions = Q(17, function(h) {
                if (0 !== h && 1 !== h) return f.I(Yl(String(h)), a), e;
                _.K(c, 24, h);
                return e
            });
            this.setTagForChildDirectedTreatment = Q(18, function(h) {
                if (1 !== h && 0 !== h) return f.I(rm(String(h)), a), e;
                var k = yj(c) || new rj;
                _.K(k, 5, h);
                Ae(c, 25, k);
                return e
            });
            this.clearTagForChildDirectedTreatment = Q(19, function() {
                var h = yj(c);
                if (!h) return e;
                _.K(h, 5, void 0);
                Ae(c, 25, h);
                return e
            });
            this.setPublisherProvidedId = Q(20, function(h) {
                h = String(h);
                a.l ? f.I(am("setPublisherProvidedId", h), a) : (f.info(cm("PPID", h), a), _.K(c, 16, h));
                return e
            });
            this.set = Q(21, function(h, k) {
                if ("string" !== typeof h || !h.length || void 0 === bo()[h] || "string" !== typeof k) return f.I(ol("PubAdsService.set", [h, k]), a), e;
                var l = (z = ze(c, mj, 14), C(z, "find")).call(z, function(m) {
                    return nj(m) === h
                });
                l ? pj(l, [k]) : (l = oj(new mj, h), we(l, 2, k), Ce(c, 14, l, mj));
                f.info(Kl(h, String(k), a.X()), a);
                return e
            });
            this.get = Q(22, function(h) {
                if ("string" !== typeof h) return f.I(ol("PubAdsService.get", [h]), a), null;
                var k = (z = ze(c, mj, 14), C(z, "find")).call(z, function(l) {
                    return nj(l) === h
                });
                return (k = k && _.J(k, 2)) ? k[0] : null
            });
            this.getAttributeKeys = Q(23, function() {
                return ze(c, mj, 14).map(function(h) {
                    return nj(h)
                })
            });
            this.display = Q(24, function(h, k, l, m) {
                return void a.display(h, k, void 0 === l ? "" : l, void 0 === m ? "" : m)
            });
            this.updateCorrelator = Q(25, function() {
                jg(Zi("update"));
                f.I(Lm(), a);
                _.K(c, 26, Fk());
                return e
            });
            this.defineOutOfPagePassback = Q(35, function(h) {
                var k = $s(a, h, [1, 1]);
                h = k.slot;
                (k = k.qa) && _.K(k, 15, 1);
                return h && h.j()
            });
            this.setForceSafeFrame = Q(36, function(h) {
                if ("boolean" !== typeof h) return f.I(hm(String(h)), a), e;
                _.K(c, 13, h);
                return e
            });
            this.setSafeFrameConfig = Q(37, function(h) {
                var k = lo(h);
                if (!k) return f.I(ol("PubAdsService.setSafeFrameConfig", [h]), a), e;
                Ae(c, 18, k);
                return e
            });
            this.setRequestNonPersonalizedAds = Q(445, function(h) {
                if (0 !== h && 1 !== h) a.log.I(Gm(String(h)), a);
                else if (_.w(373)) {
                    var k = dp.C().j;
                    if (!yj(k)) {
                        var l = new rj;
                        Ae(k, 25, l)
                    }
                    k = yj(k);
                    _.K(k, 8, !!h)
                } else if (h) {
                    if ((h = fa()) && h.frames && !h.frames.GoogleSetNPA) try {
                        k = h.document;
                        l = new Ye(k);
                        var m = k.body || k.head && k.head.parentElement;
                        if (m) {
                            var q = of (l, "IFRAME");
                            q.name = "GoogleSetNPA";
                            q.id = "GoogleSetNPA";
                            q.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                            m.appendChild(q)
                        }
                    } catch (n) {}
                } else(h = fa().document.getElementById("GoogleSetNPA")) && h.parentNode && h.parentNode.removeChild(h);
                return e
            });
            this.setTagForUnderAgeOfConsent = Q(447, function(h) {
                h = void 0 === h ? 2 : h;
                if (2 !== h && 0 !== h && 1 !== h) return f.I(Hm(String(h)), a), e;
                var k = yj(c) || new rj;
                _.K(k, 6, h);
                Ae(c, 25, k);
                return e
            });
            this.getCorrelator = Q(27, function() {
                return String(_.J(c, 26))
            });
            this.getTagSessionCorrelator = Q(631, function() {
                return dt(et()).L
            });
            this.getVideoContent = Q(30, function() {
                return ft(a, c)
            });
            this.getVersion = Q(568, function() {
                return a.getVersion()
            });
            this.forceExperiment = Q(569, function(h) {
                h = parseInt(h, 10);
                0 < h && Li.C().l(h)
            });
            this.setCorrelator = Q(28, function(h) {
                jg(Zi("set"));
                f.I(Km(), a);
                if (Wh(window)) return e;
                if (!rg(h)) return f.I(vm(String(h)), a), e;
                _.K(c, 26, h);
                _.K(c, 27, !0);
                return e
            });
            this.markAsAmp = Q(570, function() {
                return void gt(a)
            });
            this.isSRA = Q(571, function() {
                return !!v(c, 6)
            });
            this.setImaContent = Q(328, function(h, k) {
                null != _.J(c, 22) ? (_.K(c, 21, !0), _.K(c, 22, String(h || "")), _.K(c, 23, String(k || "")), bt(a, c)) : (_.K(c, 21, !0), bt(a, c), "string" === typeof h && _.K(c, 19, h), "string" === typeof k && _.K(c, 20, k))
            });
            this.getImaContent = Q(329, function() {
                return null != _.J(c, 22) ? ft(a, c) : a.l ? {
                    vid: _.J(c, 19) || "",
                    cmsid: _.J(c, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = Q(572, function() {
                return !!v(c, 4)
            });
            this.addSupportingUrl = Q(634, function(h) {
                if ("string" !== typeof h || !h.match(_.sf)[1]) return f.I(ol("PubAdsService.addSupportingUrl", [h]), a), e;
                (z = _.J(c, 7), C(z, "includes")).call(z, h) || we(c, 7, h);
                return e
            });
            this.setPrivacySettings = Q(648, function(h) {
                if (!_.Rb(h)) return f.I(ol("PubAdsService.setPrivacySettings", [h]), a), e;
                var k = yj(c) || new rj,
                    l = h.restrictDataProcessing,
                    m = h.childDirectedTreatment;
                h = h.underAgeOfConsent;
                void 0 !== l && ("boolean" === typeof l ? _.K(k, 1, l) : f.I(hm(String(l)), a));
                void 0 !== h && (null === h ? _.K(k, 6, 2) : !1 === h ? _.K(k, 6, 0) : !0 === h ? _.K(k, 6, 1) : f.I(Hm(String(h)), a));
                void 0 !== m && (null === m ? _.K(k, 5, void 0) : !1 === m ? _.K(k, 5, 0) : !0 === m ? _.K(k, 5, 1) : f.I(rm(String(m)), a));
                Ae(c, 25, k);
                return e
            })
        };
    _.F(ht, go);
    var it = function(a, b) {
            a: {
                b = b[0];a = a[0];
                for (var c = mc, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                    var f = c(b[e], a[e]);
                    if (0 != f) {
                        b = f;
                        break a
                    }
                }
                b = mc(b.length, a.length)
            }
            return b
        },
        jt = function() {
            var a = this,
                b = [],
                c = !1,
                d = cl.C();
            this.addSize = P(88, function(e, f) {
                var g;
                (g = !Nj(e)) || (g = !(Mj(f) || Array.isArray(f) && f.every(Mj)));
                if (g) return c = !0, d.I(ol("SizeMappingBuilder.addSize", [e, f])), a;
                b.push([e, f]);
                return a
            });
            this.build = P(89, function() {
                if (c) return d.I(Il()), null;
                nc(b, it);
                return b
            })
        };
    var kt = function() {
            var a;
            this.j = a = void 0 === a ? window : a;
            var b = _.x(358);
            if (0 === b) {
                var c = {};
                a = a.document.URL.split("?");
                a = _.D(a[a.length - 1].split("&"));
                for (var d = a.next(); !d.done; d = a.next())
                    if (d = d.value.split("="), d[0]) {
                        var e = d[0].toLowerCase();
                        try {
                            if (1 < d.length) {
                                var f = d[1];
                                var g = window.decodeURIComponent ? decodeURIComponent(f.replace(hk, " ")) : unescape(f)
                            } else g = "";
                            c[e] = g
                        } catch (h) {}
                    }
            } else c = null;
            this.l = c;
            this.m = 1 === b ? this.j.URLSearchParams ? new URLSearchParams(this.j.location.search) : null : null
        },
        lt = function(a, b) {
            if (a.l) return a.l[b] || null;
            a = a.m || (a.j.URLSearchParams ? new URLSearchParams(a.j.location.search) : null);
            return a ? (b = a.get(b)) && b.length ? b : null : null
        };
    var mt = function(a, b, c) {
            for (var d = 100; a && a != b && --d;) _.cg(a, c), a = a.parentElement
        },
        nt = function(a, b, c, d, e) {
            _.cg(a, {
                "margin-left": "0px",
                "margin-right": "0px"
            });
            var f = {
                "z-index": String(_.x(32, 5))
            };
            "absolute" !== d.position && "fixed" !== d.position && "relative" !== d.position && (f.position = "relative");
            var g = "rtl" == d.direction,
                h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
            d = function() {
                var k = a.getBoundingClientRect().left;
                return g ? h - k : k - h
            };
            b = d();
            0 !== b && (c = function(k) {
                g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
            }, c(-b), _.cg(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.cg(a, f)));
            return !0
        },
        pt = function(a, b, c, d, e, f) {
            var g = b.slot,
                h = Xa(b.ca);
            b = P(459, function() {
                return ot(a, g, c, d, e, h, f)
            });
            _.r.setTimeout(b, 500)
        },
        ot = function(a, b, c, d, e, f, g) {
            if (_.r.IntersectionObserver) {
                var h = null,
                    k = $o(b, a) || zk(b, a),
                    l = P(459, function(m) {
                        if (m = m && m[0]) {
                            var q = m.boundingClientRect,
                                n = window.innerWidth,
                                y = Math.round(q.left),
                                A = Math.round(q.right),
                                B = 0 > y + 2,
                                O = 0 < A - (n + 2);
                            if (m.intersectionRatio >= 1 - ((0 <= Math.round(q.left) ? 0 : 2) + (Math.round(q.right) <= window.innerWidth ? 0 : 2)) / d || B || O) _.Wa(g, function(Z) {
                                if (B || O) {
                                    var W = new lq;
                                    W.set(8);
                                    qt(k) && W.set(10);
                                    W = mq(W)
                                } else W = rt(a, b);
                                var ab = st(b, k, e),
                                    sd = ab.cd;
                                ab = ab.dd;
                                _.eb(Z);
                                _.E(Z, "qid", Qk(b));
                                _.E(Z, "iu", b.getAdUnitPath());
                                _.E(Z, "e", String(W));
                                B && _.E(Z, "ofl", String(y));
                                O && _.E(Z, "ofr", String(A - n));
                                _.E(Z, "ret", d + "x" + e);
                                _.E(Z, "req", f);
                                _.E(Z, "bm", String(c));
                                _.E(Z, "efh", Number(sd));
                                _.E(Z, "stk", Number(ab));
                                _.E(Z, "ifi", sh(window));
                                _.w(60) && _.E(Z, "isc", 1)
                            }, {
                                ya: _.x(7)
                            }), h && h.unobserve(k)
                        }
                    });
                k && (h = new _.r.IntersectionObserver(l, {
                    threshold: [1]
                }), h.observe(k))
            }
        },
        rt = function(a, b) {
            var c = $o(b, a) || zk(b, a),
                d = new lq;
            try {
                var e = function(W, ab) {
                        return a.elementsFromPoint(W, ab)
                    },
                    f = c.getBoundingClientRect(),
                    g = f.left,
                    h = f.top,
                    k = f.width,
                    l = f.height,
                    m = Dk(b);
                if ("hidden" == m.visibility || "none" == m.display) return mq(d);
                var q = parseInt(m["border-top-width"] || 0, 10) + 1;
                b = g + k;
                l = h + l;
                var n = e(g + q + 2, h + q);
                var y = e(b - q - 2, h + q);
                var A = e(b - q - 2, l - q);
                var B = e(g + q + 2, l - q);
                var O = e(b / 2, l - q)
            } catch (W) {
                return d.set(1), mq(d)
            }
            if (!(n && n.length && y && y.length && A && A.length && B && B.length && O && O.length)) return d.set(7), mq(d);
            e = function(W, ab) {
                for (var sd = !1, Jj = 0; Jj < W.length; Jj++) {
                    var ng = W[Jj];
                    if (sd) {
                        var Kp = Af(ng, window);
                        if ("hidden" != Kp.visibility && !fg(ng) && !Z(c, ng)) {
                            d.set(ab);
                            "absolute" == Kp.position && d.set(11);
                            break
                        }
                    } else c == ng && (sd = !0)
                }
            };
            gg(c) && d.set(9);
            var Z = function(W, ab) {
                return Yf(W, ab) || Yf(ab, W)
            };
            g = n[0];
            c == g || Z(c, g) || fg(g) || d.set(2);
            g = y[0];
            c == g || Z(c, g) || fg(g) || d.set(3);
            g = A[0];
            c == g || Z(c, g) || fg(g) || d.set(4);
            g = B[0];
            c == g || Z(c, g) || fg(g) || d.set(5);
            _.w(351) && (e(n, 12), e(y, 13), e(A, 14), e(B, 15));
            if (fg(c)) return mq(d);
            e(O, 6);
            return mq(d)
        },
        qt = function(a) {
            var b = !1,
                c = !1,
                d = !1;
            return eg(a, function(e) {
                "nowrap" == e.whiteSpace && (d = !0);
                if ("scroll" == e.overflowX || "auto" == e.overflowX) c = !0;
                "flex" == e.display && (b = !0);
                return b && c && d
            })
        },
        tt = function(a, b) {
            return a && (a = xe(a, zj, 1)) ? _.J(a, 1) || b.innerWidth : 0
        },
        ut = function(a, b) {
            return a && (a = xe(a, zj, 1)) ? _.J(a, 2) || b.innerHeight : 0
        },
        vt = function(a) {
            return a && (a = xe(a, zj, 2)) ? _.J(a, 1) || 0 : 0
        },
        wt = function(a) {
            return a && (a = xe(a, zj, 2)) ? _.J(a, 2) || 0 : 0
        },
        st = function(a, b, c) {
            var d = Dk(a),
                e = d ? "absolute" != d.position : !0,
                f = !1,
                g = (a = zk(a)) && a.parentElement,
                h = !1;
            dg(b, function(k) {
                var l = k.style;
                if (e)
                    if (h || (h = k == g)) e = cq(k, _.r, !0, -1, -1);
                    else {
                        l = l && l.height;
                        var m = (l && C(l, "endsWith").call(l, "px") && parseInt(l, 10) || 0) >= c;
                        !l || m || "string" === typeof l && C($p, "includes").call($p, l) || (e = !1)
                    } f || (k = Af(k, _.r), "sticky" != k.position && "fixed" != k.position) || (f = !0);
                return !(f && !e)
            }, 100);
            return {
                cd: e,
                dd: f
            }
        },
        xt = function(a) {
            var b = a.slot;
            Xj(a.ca) && setTimeout(function() {
                _.Wa("gpt_fluid_sz", function(c) {
                    var d = $o(b, document);
                    d = d ? mh(d) : null;
                    _.E(c, "sz", d ? d.width + "x" + d.height : "null");
                    _.E(c, "qqid", Qk(b))
                })
            }, 250)
        };
    var yt = function(a) {
            var b = "performance" in window && "now" in performance ? performance.now.bind(performance) : Zb;
            for (a = b() + a; b() < a;);
            b()
        },
        zt = function(a, b) {
            b >= a.length || (yt(a[b]), window.requestAnimationFrame(function() {
                return zt(a, ++b)
            }))
        },
        At = function(a) {
            window.requestAnimationFrame(function() {
                return zt(a, 0)
            })
        },
        Bt = function() {
            if ("function" === typeof window.requestAnimationFrame) {
                var a = _.Vh(2);
                a.length && (a = a.map(function(b) {
                    return _.Nf(b, 0)
                }), At(a))
            }
        };
    var Ct = function() {
        this.module = 2
    };
    Ct.prototype.toString = function() {
        return String(this.module)
    };
    _.Dt = new Ct;
    var Et, Ft, It;
    Et = {};
    Ft = (Et[2] = {
        vc: "page_level_ads"
    }, Et[4] = {
        vc: "encrypted_signals"
    }, Et);
    _.Gt = function() {
        this.l = {};
        this.j = Ft
    };
    _.Ht = function(a, b) {
        b = b.module;
        a.l[b] = a.l[b] || new Mq;
        return a.l[b]
    };
    It = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = P(340, function(e) {
            if (a.j[c] && "function" === typeof e) {
                var f = a.j[c];
                f = (void 0 === f.Qc ? [] : f.Qc).map(function(g) {
                    return _.Ht(a, g).j
                });
                _.t.Promise.all(f).then(function() {
                    e.call(_.r, _)
                })
            }
        });
        Object.defineProperty(_.db(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    _.Gt.prototype.load = function(a) {
        var b = _.Ht(this, a),
            c = this.j[a.module].vc,
            d = Gr.Oa(),
            e = Fr.Oa(),
            f = La();
        var g = _.x(25);
        c = d + e + c + "_" + f + ".js";
        g && (c += "?" + g);
        g = c;
        It(this, a);
        zf(document, g);
        return b.j
    };
    Nb(_.Gt);
    _.Gt.prototype.load = jl(_.Gt.prototype.load);
    var Jt = function() {
        var a = window,
            b = new Eh,
            c = new Fh,
            d = Na(_.r);
        ue(b, 1, d, 0);
        d = Li.C().j().join();
        ue(b, 5, d, "");
        ue(b, 2, 1, 0);
        Ae(c, 1, b);
        b = Dh();
        d = _.w(78);
        b = ve(b, 9, d);
        d = _.w(79);
        b = ve(b, 11, d);
        b = ve(b, 10, !0);
        d = _.w(80);
        b = ve(b, 13, d);
        d = _.w(81);
        b = ve(b, 14, d);
        b = ve(b, 16, !0);
        Ae(c, 2, b);
        a.google_rum_config = c.ga;
        c = _.w(188) ? "_debug" : "";
        zf(a.document, "https://securepubads.g.doubleclick.net/pagead/js/rum" + c + ".js")
    };
    var Kt = 0,
        Lt = function() {
            try {
                qq();
                pq();
                var a = _.Oi(152);
                a && a.forEach(function() {
                    Li.C().l(a)
                });
                Ni(13);
                Ni(3)
            } catch (b) {
                Vk(408, b, !0)
            }
        },
        Mt = P(297, function() {
            var a = C(Array, "from").call(Array, document.getElementsByTagName("script"));
            a = _.D(a);
            for (var b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                var c = b.src;
                !c || -1 == c.indexOf("/tag/js/gpt.js") && -1 == c.indexOf("/tag/js/gpt_mobile.js") || (_.w(329) ? b.textContent && (c = document.createElement("script"), c.textContent = Ba(new Aa(b.textContent)), Ea(c), document.head.appendChild(c), document.head.removeChild(c)) : b.innerHTML && (c = b, c.googletag_executed || (c.googletag_executed = !0, eval(b.innerHTML))))
            }
        }, function(a, b) {
            Uk(a, b);
            window.console && window.console.error && window.console.error(b)
        }),
        Nt = function() {
            var a = window,
                b = new vr(a),
                c = new zr(a),
                d = new lr(a);
            _.Wa("cmpMet", function(e) {
                _.eb(e);
                _.E(e, "fc", b.j ? 1 : 0);
                _.E(e, "tcfv1", a.__cmp ? 1 : 0);
                _.E(e, "tcfv2", Br(c) ? 1 : 0);
                _.E(e, "usp", Qb(d.j.__uspapi) || null != mr(d) ? 1 : 0);
                _.E(e, "ptt", 17)
            }, {
                ya: _.x(61) || 1
            })
        },
        Ot = function() {
            Kt = _.ui();
            Lt();
            try {
                if (_.w(79) || ps(), (_.w(342) || _.x(61)) && Nt(), Bt(), cb("defineOutOfPageSlot", vp), cb("defineSlot", tp), cb("defineUnit", tp), cb("destroySlots", up), cb("getWindowsThatCanCommunicateWithHostpageLibrary", np), cb("display", wp), to(), cb("getEventLog", function() {
                        return new Us
                    }), cb("sizeMapping", P(90, function() {
                        return new jt
                    })), cb("apiReady", !0), _.db().fifWin && "complete" != document.readyState ? $i(window, function() {
                        window.setTimeout(function() {
                            Tm()
                        }, 0)
                    }) : Tm(), Mt(), (_.w(84) || ak.C().j) && Jt(), Yk(), _.w(346) && Kb()) {
                    var a = new Jk("gpt_nonce_csp");
                    _.eb(a);
                    Lk(a)
                }
            } catch (b) {
                Vk(106, b)
            }
        };
    var Pt = jl(function(a) {
        return a && a.src ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        return a + "\x0B" + (b && b[0] && b[0].src)
    });
    var Qt = null,
        Rt = function(a, b, c, d) {
            try {
                var e;
                if (!(e = !b)) {
                    var f;
                    if (!(f = !dq(b, c, void 0 === d ? 100 : d))) {
                        a: {
                            do {
                                var g = Af(b, c);
                                if (g && "fixed" == g.position) {
                                    var h = !1;
                                    break a
                                }
                            } while (b = b.parentElement);h = !0
                        }
                        f = !h
                    }
                    e = f
                }
                e && (a.height = -1)
            } catch (k) {
                a.width = -1, a.height = -1
            }
        },
        Ta = function(a) {
            for (var b = {}, c = _.D(ze(a, mj, 9)), d = c.next(); !d.done; d = c.next()) d = d.value, b[nj(d)] = _.J(d, 2);
            a = _.J(a, 8);
            a.length && null == b.excl_cat && (b.excl_cat = a);
            return b
        },
        St = function(a, b) {
            var c = {};
            _.Ua(a, function(d, e) {
                if (b[e]) {
                    var f = b[e].filter(function(g) {
                        return C(d, "includes").call(d, g)
                    });
                    f.length && (c[e] = f)
                }
            });
            return c
        },
        Tt = function(a) {
            var b = !1,
                c = ze(a, mj, 2).map(function(d) {
                    var e = nj(d);
                    b = "excl_cat" === e;
                    d = _.J(d, 2);
                    return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
                });
            a = _.J(a, 3);
            !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
            return c
        },
        Ut = function(a, b, c, d, e, f, g, h) {
            h = void 0 === h ? !1 : h;
            this.m = b;
            this.qa = c;
            this.R = d;
            this.o = a;
            this.A = !h && (a || _.w(139));
            this.model = e;
            this.B = f;
            this.j = g;
            this.D = [];
            this.l = "";
            this.K = bo();
            this.v = [];
            this.H = [];
            this.J = Fc(_.Vh(7));
            this.G = h ? !_.w(294) : 0 === this.model.v
        },
        Xt = function(a) {
            var b = void 0 === b ? window : b;
            var c = a.model.j;
            if (!Array.isArray(c)) return "";
            if (a.o) 0 == c.length && (c = Is(a.m));
            else {
                if (0 == c.length) return "";
                1 < c.length && (c = [c[0]])
            }
            var d = !!Jn(_.r);
            c = c.filter(function(e) {
                var f = a.j.P[e.getSlotElementId()];
                return d && 4 == Lj(f) ? (cl.C().I(Jm(String(e.getAdUnitPath()))), !1) : !0
            });
            if (!c.length) return "";
            30 < c.length && (cl.C().I(Cm("30", String(c.length), String(c.length - 30))), c = c.slice(0, 30));
            Vt(a, c, b);
            Wt(a);
            return a.l
        },
        Yt = function(a, b) {
            try {
                var c = b.top;
                var d = xh(c.document, c)
            } catch (e) {
                d = new _.We(-12245933, -12245933)
            }
            X(a, "scr_x", Math.round(d.x), {
                ka: !0
            });
            X(a, "scr_y", Math.round(d.y), {
                ka: !0
            })
        },
        Zt = function(a) {
            var b = window,
                c = Ga(a.B, b.document) || "";
            var d = b.document.domain;
            var e = b.history.length,
                f = b.screen,
                g = b.document.referrer;
            if (Og()) d = ph().gaGlobal || {};
            else {
                var h = Math.round((new Date).getTime() / 1E3),
                    k = b.google_analytics_domain_name;
                d = "undefined" == typeof k ? Hp("auto", d) : Hp(k, d);
                var l = -1 < c.indexOf("__utma=" + d + "."),
                    m = -1 < c.indexOf("__utmb=" + d),
                    q;
                (q = (Tg() || ph()).gaGlobal) || (q = {}, (Tg() || ph()).gaGlobal = q);
                var n = !1;
                if (l) g = c.split("__utma=" + d + ".")[1].split(";")[0].split("."), m ? q.sid = g[3] : q.sid || (q.sid = h + ""), q.vid = g[0] + "." + g[1], q.from_cookie = !0;
                else {
                    q.sid || (q.sid = h + "");
                    if (!q.vid) {
                        n = !0;
                        m = Math.round(2147483647 * Math.random());
                        l = [Ep.appName, Ep.version, Ep.language ? Ep.language : Ep.browserLanguage, Ep.platform, Ep.userAgent, Fp() ? 1 : 0].join("");
                        f ? l += f.width + "x" + f.height + f.colorDepth : _.r.java && _.r.java.awt && (f = _.r.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), l += f.screen.width + "x" + f.screen.height);
                        l = l + c + (g || "");
                        for (g = l.length; 0 < e;) l += e-- ^ g++;
                        q.vid = (m ^ Gp(l) & 2147483647) + "." + h
                    }
                    q.from_cookie = !1
                }
                if (!q.cid) {
                    b: for (h = 999, k && (k = 0 == k.indexOf(".") ? k.substr(1) : k, h = k.split(".").length), k = 999, c = c.split(";"), g = 0; g < c.length; g++)
                        if (f = Ip.exec(c[g]) || Jp.exec(c[g]) || Lp.exec(c[g])) {
                            e = f[1] || 0;
                            if (e == h) {
                                var y = f[2];
                                break b
                            }
                            e < k && (k = e, y = f[2])
                        }n && y && -1 != y.search(/^\d+\.\d+$/) ? (q.vid = y, q.from_cookie = !0) : y != q.vid && (q.cid = y)
                }
                q.dh = d;
                q.hid || (q.hid = Math.round(2147483647 * Math.random()));
                d = q
            }
            X(a, "ga_vid", d.vid, {
                aa: !1
            });
            X(a, "ga_sid", d.sid, {
                aa: !1
            });
            X(a, "ga_hid", d.hid, {
                aa: !1
            });
            X(a, "ga_fc", d.from_cookie, {
                aa: !1
            });
            X(a, "ga_cid", d.cid, {
                aa: !1
            });
            X(a, "ga_wpids", b.google_analytics_uacct)
        },
        $t = function(a, b) {
            if (_.w(370)) try {
                var c = b.external && b.external.getHostEnvironmentValue;
                if (c) {
                    var d = parseInt(JSON.parse(c("os-mode"))["os-mode"], 10);
                    0 <= d && X(a, "wsm", d + 1)
                }
            } catch (e) {}
        },
        Vt = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document,
                e = a.j.M;
            X(a, "gdfp_req", 1, {
                aa: !1
            });
            X(a, "pvsid", a.model.B);
            X(a, "correlator", _.J(e, 26));
            X(a, "output", a.model.L, {
                aa: !1
            });
            X(a, "impl", a.model.o, {
                aa: !1
            });
            _.w(200) || (0 == re(e, 24, 0) && (X(a, "adsid", a.model.H), X(a, "pucrd", a.model.N)), X(a, "jar", a.model.K));
            a.model.va && X(a, "per_only", 1);
            au(a);
            isNaN(a.model.Ua) || X(a, "pod", a.model.Ua, {
                aa: !1
            });
            isNaN(a.model.Va) || X(a, "ppos", a.model.Va, {
                aa: !1
            });
            isNaN(a.model.Ea) || X(a, "scor", a.model.Ea, {
                aa: !1
            });
            bu(a);
            X(a, "vrg", La());
            cu(a);
            du(a);
            eu(a, b[0].A);
            X(a, "sc", _.Oi(6) ? 1 : 0, {
                ka: !0
            });
            window.postMessage && X(a, "sfv", jo());
            X(a, "ecs", a.model.Fb);
            a.A ? (fu(a, b, d), gu(a), hu(a, b)) : (iu(a, b[0], d), gu(a), ju(a, b[0]));
            ku(a, b);
            lu(a, c);
            null != lt(a.qa, "google_preview") && X(a, "gct", lt(a.qa, "google_preview"));
            if (a.m.B) {
                X(a, "is_amp", "1");
                X(a, "amp_v", Pg());
                X(a, "act", Qg());
                Wg && !/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(c.location.href) && X(a, "ati", 1);
                var f = Xg(c);
                f && X(a, "apn", f.substr(0, 10));
                try {
                    var g = JSON.parse(c.context.cachedFrameName_);
                    g.attributes && g.attributes.useSameDomainRenderingUntilDeprecated && X(a, "asd", 1)
                } catch (k) {}
            }(vf(c.top) || Vf(window.IntersectionObserver)) && X(a, "abxe", 1);
            (f = Uh(10)) && X(a, "expflags", f);
            mu(a, b, c);
            f = {};
            f.u_tz = -(new Date).getTimezoneOffset();
            f.u_his = rh();
            f.u_java = !!Ie.navigator && "unknown" !== typeof Ie.navigator.javaEnabled && !!Ie.navigator.javaEnabled && Ie.navigator.javaEnabled();
            Ie.screen && (f.u_h = Ie.screen.height, f.u_w = Ie.screen.width, f.u_ah = Ie.screen.availHeight, f.u_aw = Ie.screen.availWidth, f.u_cd = Ie.screen.colorDepth);
            Ie.navigator && Ie.navigator.plugins && (f.u_nplug = Ie.navigator.plugins.length);
            Ie.navigator && Ie.navigator.mimeTypes && (f.u_nmime = Ie.navigator.mimeTypes.length);
            nu(a, f);
            ou(a);
            try {
                var h = vh()
            } catch (k) {
                h = "0"
            }
            X(a, "flash", h, {
                aa: !1,
                ka: !0
            });
            pu(a, b, c);
            _.w(2) || qu(a, c);
            (_.w(82) || _.w(84) || ak.C().j) && X(a, "rumc", a.model.B, {
                aa: !1
            });
            _.w(83) && X(a, "rume", 1, {
                aa: !1
            });
            X(a, "vis", _.xn(d), {
                aa: !1
            });
            0 === Pt(_.Oi(172)) || X(a, "stss", Pt(_.Oi(172)));
            !a.m.B && ru(c) && X(a, "arp", 1, {
                aa: !1
            });
            _.r.navigator && _.r.navigator.deviceMemory && X(a, "dmc", _.r.navigator.deviceMemory);
            Yt(a, c);
            su(a, b, c);
            tu(a, b, c);
            0 < a.model.D.length && X(a, "psts", a.model.D);
            Zt(a);
            $t(a, c);
            _.w(23) && (X(a, "js", jq(c)), X(a, "ms", kq(a.model.B.toString(), c)));
            uu(a, c, b);
            vu(a, b, c);
            0 != uk(a.o, a.model.oa) && 0 != a.model.l.length && (b = pc(a.model.l, a.model.j) ? -1 : a.model.l.length, X(a, "optslots", b));
            e = _.J(e, 7);
            b = _.Oi(251);
            _.w(363) && b && X(a, "uach", je(sc(b), 3));
            _.w(164) && e.length && X(a, "supporting_urls", e.map(function(k) {
                return encodeURIComponent(k)
            }));
            _.Oi(221)
        },
        su = function(a, b, c) {
            var d = [],
                e = [];
            b = _.D(b);
            for (var f = b.next(); !f.done; f = b.next()) {
                f = f.value;
                if (f.N) var g = f.N;
                else(g = (g = zk(f)) && g.parentElement) ? (g = Af(g, window), 1 != _.x(59) && (f.N = g)) : g = null;
                g = hg(g);
                if (!g || 1 == g[0] && 1 == g[3]) {
                    var h = (g = zk(f)) && g.parentElement,
                        k = ap(f) || new _.Xe(0, 0);
                    Rt(k, h, c);
                    d.push(k.width + "x" + k.height);
                    f.U ? f = f.U : (h = rk(zk(f)), 1 != _.x(59) && (f.U = h), f = h);
                    f = f || new _.Xe(0, 0);
                    Rt(f, g, c, 1); - 1 == k.height && (f.height = -1);
                    e.push(f.width + "x" + f.height)
                } else d.push("-1x-1"), e.push("-1x-1")
            }
            X(a, "psz", d, {
                sa: "|"
            });
            X(a, "msz", e, {
                sa: "|"
            })
        },
        tu = function(a, b, c) {
            var d = a.j.P;
            b = b.map(function(e) {
                return d[e.getSlotElementId()]
            });
            _.w(252) && b.some(function(e) {
                return null != _.J(e, 16)
            }) && (X(a, "rtgs", b.map(function(e) {
                return null != _.J(e, 16) ? "1" : "0"
            }), {
                sa: "!"
            }), X(a, "max_w", b.map(function(e) {
                return tt(xe(e, Dj, 16), c)
            }), {
                sa: "!"
            }), X(a, "max_h", b.map(function(e) {
                return ut(xe(e, Dj, 16), c)
            }), {
                sa: "!"
            }), X(a, "min_w", b.map(function(e) {
                return vt(xe(e, Dj, 16))
            }), {
                sa: "!"
            }), X(a, "min_h", b.map(function(e) {
                return wt(xe(e, Dj, 16))
            }), {
                sa: "!"
            }))
        },
        uu = function(a, b, c) {
            var d = [],
                e = [];
            c.forEach(function(f) {
                var g = new lq,
                    h = zk(f);
                f = 0;
                if (h) {
                    var k = _.w(291),
                        l = k && _.w(327);
                    l = zh(!0, b, 0 !== Xf() && l).width;
                    if (null !== b && b != b.top) {
                        var m = zh(!1, b).width;
                        (-12245933 == l || -12245933 == m || m < l) && g.set(8)
                    }
                    k && -12245933 != l && (k = 1 + _.x(45), l * k < b.document.documentElement.scrollWidth && g.set(10));
                    for (k = 0; h && 100 > k; k++, h = h.parentElement)
                        if (m = Af(h, b)) {
                            if (m.overflowY && "visible" != m.overflowY) {
                                g.set(2);
                                var q = rk(h);
                                q && (f = f ? Math.min(f, q.width) : q.width);
                                if (g.get(9)) break
                            }
                            "sticky" != m.position && "fixed" != m.position || g.set(9);
                            "none" == m.display && g.set(7);
                            "IFRAME" == h.nodeName && (m = parseInt(m.width, 10), m < l && (g.set(8), f = f ? Math.min(m, f) : m))
                        } else g.set(3)
                } else g.set(1);
                d.push(mq(g));
                e.push(f)
            });
            X(a, "fws", d);
            X(a, "ohw", e)
        },
        xu = function(a, b, c) {
            var d = [],
                e = [],
                f = a.j,
                g = f.P,
                h = !!v(f.M, 15);
            if (a.o) b.forEach(function(k) {
                k = Hk({
                    slot: k,
                    ca: g[k.getSlotElementId()]
                }, c, h) || wu;
                d.push(Math.round(k.x));
                e.push(Math.round(k.y))
            });
            else if (b = (a.m.B ? Sg() : null) || Hk({
                    slot: b[0],
                    ca: g[b[0].getSlotElementId()]
                }, c, h)) d.push(Math.round(b.x)), e.push(Math.round(b.y));
            a.A ? (X(a, "adxs", d), X(a, "adys", e)) : (X(a, "adx", d[0], {
                ka: !0
            }), X(a, "ady", e[0], {
                ka: !0
            }))
        },
        vu = function(a, b, c) {
            if (!a.o) {
                var d = null,
                    e = null;
                try {
                    d = xh(c.top.document, c.top).y
                } catch (h) {
                    return
                }
                var f = a.j,
                    g = f.P;
                f = !!v(f.M, 15);
                (b = Hk({
                    slot: b[0],
                    ca: g[b[0].getSlotElementId()]
                }, c.document, f)) && (e = Math.round(b.y));
                c = zh(!0, c).height;
                e && -12245933 !== e && -12245933 !== c && (e < d + c ? X(a, "btvi", 0, {
                    ka: !0
                }) : (d = _.Oi(248) + 1, gj.C()[248] = d, X(a, "btvi", d)))
            }
        },
        zu = function(a, b) {
            var c = a.j.P;
            return b.map(a.o ? function(d) {
                var e = c[d.getSlotElementId()],
                    f;
                _.w(364) ? f = d.hb || Yj(e, Bk(d, a.j)) : f = Yj(e);
                return d.hb = f
            } : function(d) {
                return yu(a, d)
            }).join(",")
        },
        yu = function(a, b) {
            var c = a.j.P[b.getSlotElementId()];
            a = b.hb || Yj(c, Bk(b, a.j));
            return b.hb = a
        },
        pu = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            b = (_.w(364) ? v(a.j.M, 6) : a.o) ? ck(a.m.l) : dk(b[0], a.j.P[b[0].getSlotElementId()], a.m.m) || ck(a.m.l);
            var e = kk(d.URL, lt(a.qa, "google_preview")),
                f = kk(d.referrer, lt(a.qa, "google_preview"));
            d = !1;
            if (null != b) {
                var g = e;
                Wh(c) || (f = "", d = !0)
            } else b = e;
            a.m.B && (f = (f = Og()) && f.referrer);
            if (_.w(2)) X(a, "url", b), X(a, "ref", f);
            else {
                e = new fi(c);
                var h = e.j[0].depth,
                    k = h && 0 < h;
                if (k && (X(a, "nhd", h), c.location.ancestorOrigins)) {
                    c = [];
                    h = Math.min(e.j.length, 27);
                    for (var l = 1; l < h; l++) e.j[l] && e.j[l].url && (c[l - 1] = e.j[l].url);
                    c = gi(e, c.reverse());
                    X(a, "iag", c);
                    c = e.j;
                    h = [];
                    for (l = c.length - 1; 0 < l; l--) {
                        var m = c[l];
                        m && null != m.url && h.push(tf(m.url.match(_.sf)[3] || null))
                    }
                    c = bi(h);
                    0 < c && X(a, "mdo", c)
                }
                X(a, "url", b);
                null != g && g != b && X(a, "loc", g);
                X(a, "ref", f);
                k && (g = e.j[Math.max(e.j.length - 1, 0)].url) && X(a, "top", d ? tf(g.match(_.sf)[3] || null) : g)
            }
        },
        qu = function(a, b) {
            b = void 0 === b ? window : b;
            var c = b.document,
                d = c.scripts;
            d && X(a, "dssz", d.length);
            b = new fi(b);
            if (d = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                for (var e = [], f = d.length - 1; 0 <= f && 26 > e.length;) d[f].src && e.unshift(d[f].src), f--;
                d = gi(b, e)
            } else d = 0;
            X(a, "icsg", d, {
                ka: !0
            });
            if (b = b.l.document && b.l.document.scripts ? b.l.document.scripts : []) {
                d = [];
                for (e = b.length - 1; 0 <= e; e--)(f = b[e]) && null != f.src && d.push(tf(f.src.match(_.sf)[3] || null));
                b = bi(d)
            } else b = 0;
            X(a, "mso", b);
            b = Error();
            b.stack && (d = b.stack, e = d.split(/\r\n|\r|\n/).length, "Error" == d.slice(0, 5) && e--, d = e - 13, 0 > d && (d = 0, e = new Jk("gpt_negative_stack_trace", ik(), _.Oi(23)), _.eb(e, a.m), _.E(e, "stackTrace", b.stack), Lk(e)), X(a, "std", d, {
                ka: !0
            }));
            c.currentScript && c.currentScript.text && X(a, "csl", c.currentScript.text.length)
        },
        ju = function(a, b) {
            b = a.j.P[b.getSlotElementId()];
            b = Va(b);
            X(a, "scp", b, {
                sa: "&"
            })
        },
        Au = function(a, b) {
            var c = a.j.P;
            a = b.map(function(d) {
                d = c[d.getSlotElementId()];
                return Ta(d)
            });
            for (b = a.shift() || {}; a.length;) b = St(b, a.shift());
            return b
        },
        hu = function(a, b) {
            var c = a.j.P,
                d;
            _.w(49) && 1 < b.length ? d = Bu(a, b) : d = b.map(function(e) {
                e = c[e.getSlotElementId()];
                return Va(e).join("&")
            });
            b = d;
            b.join("|").length == d.length - 1 && (b = null);
            X(a, "prev_scp", b, {
                sa: "|"
            })
        },
        Bu = function(a, b) {
            var c = a.j.P,
                d = [],
                e = Au(a, b);
            b.forEach(function(g) {
                g = c[g.getSlotElementId()];
                g = Va(g, function(h, k) {
                    k = e[k];
                    return !k || !C(k, "includes").call(k, h)
                });
                d.push(g.join("&"))
            });
            var f = [];
            _.Ua(e, function(g, h) {
                g = g.map(encodeURIComponent);
                h = encodeURIComponent(h);
                f.push(h + "=" + g.join())
            });
            f.length && X(a, "csp", f, {
                sa: "&"
            });
            return d
        },
        nu = function(a, b) {
            _.Ua(b, function(c, d) {
                X(a, d, c, {
                    aa: !1
                })
            })
        },
        cu = function(a) {
            var b = a.j.M;
            0 != re(b, 24, 0) && X(a, "co", re(b, 24, 0), {
                ka: !0
            })
        },
        eu = function(a, b) {
            if (!_.w(367)) {
                var c = _.Oi(221);
                b = yg(c, b);
                b.Yb && X(a, "npa", 1);
                X(a, "guci", b.nc)
            }
        },
        du = function(a) {
            var b = yj(a.j.M) || new rj;
            !0 === v(b, 1) && X(a, "rdp", "1");
            var c = _.J(a.B, 2);
            c && X(a, "gdpr_consent", c);
            null != _.J(a.B, 3) && (c = v(a.B, 3), X(a, "gdpr", c ? "1" : "0", {
                ka: !0
            }));
            (c = _.J(a.B, 4)) && X(a, "addtl_consent", c);
            (c = _.J(a.B, 1)) && X(a, "us_privacy", c);
            (v(a.B, 6) || _.w(373) && v(b, 8)) && X(a, "npa", 1);
            c = re(b, 6, 2);
            2 !== c && X(a, "tfua", c, {
                ka: !0
            });
            null != _.J(b, 5) && (b = _.J(b, 5), X(a, "tfcd", b, {
                ka: !0
            }))
        },
        gu = function(a) {
            var b = a.j.M;
            1 != re(b, 24, 0) && null != _.J(b, 16) && X(a, "ppid", _.J(b, 16), {
                ka: !0
            })
        },
        ku = function(a, b) {
            var c = a.j,
                d = c.M,
                e = c.P[b[0].getSlotElementId()];
            c = 1 != a.model.oa;
            e = !!v(e, 17);
            b = ek(b, a.j.P, a.m.l, a.m.m);
            d = v(d, 27) || !1;
            var f = 3 == a.model.oa,
                g = new lq;
            g.set(0, c);
            g.set(1, e);
            g.set(2, b);
            g.set(3, d);
            g.set(4, f);
            c = mq(g);
            0 < c && X(a, "eri", c)
        },
        lu = function(a, b) {
            var c = a.j.M,
                d = Tt(c);
            X(a, "cust_params", d, {
                sa: "&"
            });
            if (a.R && 0 == re(c, 24, 0)) {
                d = Ia("__gads", a.B, a.R.j) || "";
                X(a, "cookie", d, {
                    ka: !0
                });
                var e = a.R;
                if (2 === e.l) e = !0;
                else if (1 === e.l) e = !1;
                else {
                    var f = a.B;
                    if (_.w(250)) f = navigator.cookieEnabled;
                    else if (Ia("__gads", f, e.j)) f = !0;
                    else {
                        var g = e.j;
                        g = void 0 === g ? document : g;
                        v(f, 5) && (new Ha(g)).set("GoogleAdServingTest", "Good", void 0);
                        if (g = "Good" === Ia("GoogleAdServingTest", f, e.j)) {
                            var h = e.j;
                            h = void 0 === h ? document : h;
                            v(f, 5) && (f = new Ha(h), f.get("GoogleAdServingTest"), f.set("GoogleAdServingTest", "", {
                                tc: 0,
                                path: void 0,
                                domain: void 0
                            }))
                        }
                        f = g
                    }
                    e.l = f ? 2 : 1;
                    e = f
                }
                e && !d && X(a, "cookie_enabled", "1", {
                    ka: !0
                })
            }(d = _.J(c, 8)) ? (50 < d.length && (d = d.substring(0, 50)), d = 'role:1 producer:12 loc:"' + (d + '"'), d = "a " + (ie ? _.r.btoa(d) : je(sc(d), void 0))) : d = "";
            d && X(a, "uule", d);
            0 == re(c, 24, 0) && (c = b.document, (b = (ck(a.m.l) || Pa(b)) != c.URL ? c.domain : "") && X(a, "cdm", b));
            _.w(6) || (b = new lq, _.r.SVGElement && _.r.document.createElementNS && b.set(0), c = Uf(), c["allow-top-navigation-by-user-activation"] && b.set(1), c["allow-popups-to-escape-sandbox"] && b.set(2), _.r.crypto && _.r.crypto.subtle && b.set(3), _.r.TextDecoder && _.r.TextEncoder && b.set(4), b = mq(b), X(a, "bc", b))
        },
        mu = function(a, b, c) {
            var d = c.document;
            0 < navigator.userAgent.indexOf("MSIE ") && zs(a.m.l, "adsense_encoding", d.charset, !1);
            if (_.w(358)) {
                if (!ck(a.m.l)) {
                    try {
                        var e = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                    } catch (m) {
                        e = null
                    }
                    X(a, "lmt", e ? e.toString() : null)
                }
            } else X(a, "lmt", (Date.parse(c.document.lastModified) / 1E3).toString());
            e = _.w(43) ? _.ui() : (new Date).getTime();
            X(a, "dt", e, {
                aa: !1
            });
            try {
                e = Kt;
                var f = Math.min(wi("domLoading") || Infinity, wi("domInteractive") || Infinity);
                var g = Infinity == f ? Math.max(wi("responseEnd"), wi("navigationStart")) : f;
                0 < g && e >= g && (X(a, "dlt", g, {
                    aa: !1
                }), X(a, "idt", e - g, {
                    aa: !1
                }))
            } catch (m) {
                X(a, "idt", -9, {
                    aa: !1
                }), Uk(479, m)
            }
            if (null == Qt) {
                a: {
                    g = c.navigator;f = g.userAgent;e = g.platform;
                    var h = /WebKit\/(\d+)/,
                        k = /rv:(\d+\.\d+)/,
                        l = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(e) && !/^Opera/.test(f) && (h = (h.exec(f) || [0, 0])[1], k = (k.exec(f) || [0, 0])[1], /Win/.test(e) && /Trident/.test(f) && 11 <= d.documentMode || !h && "Gecko" === g.product && 27 <= k && !l.test(f) || 536 <= h)) {
                        g = !0;
                        break a
                    }
                    g = !1
                }
                f = Xh(c, c.document, 500, 300);Qt = g && !f
            }
            Qt || X(a, "ea", "0", {
                ka: !0
            });
            f = g = ph();
            for (e = 0; g && g != g.parent;) g = g.parent, e++, vf(g) && (f = g);
            e = f;
            g = e.location.href;
            e == e.top ? g = {
                url: g,
                rc: !0
            } : (f = !1, (l = e.document) && l.referrer && (g = l.referrer, e.parent == e.top && (f = !0)), (e = e.location.ancestorOrigins) && (e = e[e.length - 1]) && -1 == g.indexOf(e) && (f = !1, g = e), g = {
                url: g,
                rc: f
            });
            f = g;
            g = Xh(ph(), d, c.google_ad_width, c.google_ad_height);
            f = f.rc;
            e = ph();
            e = e.top == e ? 0 : vf(e.top) ? 1 : 2;
            l = 4;
            g || 1 != e ? g || 2 != e ? g && 1 == e ? l = 7 : g && 2 == e && (l = 8) : l = 6 : l = 5;
            f && (l |= 16);
            g = "" + l;
            Yh();
            X(a, "frm", g || null);
            a.m.B ? g = (g = Rg()) && _.Rb(g.rootBounds) ? new _.Xe(g.rootBounds.width, g.rootBounds.height) : null : g = zh(!0, c, _.w(280) && 0 !== Xf());
            g && (X(a, "biw", g.width), X(a, "bih", g.height));
            !Wh(c) && (g = zh(!1, c)) && (X(a, "isw", g.width), X(a, "ish", g.height));
            a.model.A && X(a, "oid", a.model.A);
            xu(a, b, d);
            a.A ? X(a, "adks", zu(a, b)) : X(a, "adk", yu(a, b[0]));
            d = 0;
            void 0 === _.r.postMessage && (d |= 1);
            0 < d && X(a, "osd", d);
            Cu(a);
            g = d = a.m.l;
            a.A ? g = Ds(b, d, a.m.m, a.K) : ((f = a.m.m[_.bk(b[0])]) && (_.w(162) ? As(g, f) : As(Bs(f), d)), g = Cs(g));
            X(a, "adsenseParameters", g, {
                aa: !1
            });
            d = sh(c);
            X(a, "ifi", a.G ? d + 1 : d);
            a.G && (d = _.w(352) ? b.length : 1, b = c, d = void 0 === d ? 1 : d, b = Tg(Og(b)) || b, b.google_unique_id = (b.google_unique_id || 0) + d);
            null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = zh(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = If(b.join(""))) : c = 0;
            0 != c && X(a, "ifk", c.toString())
        },
        ou = function(a) {
            var b = _.r.devicePixelRatio;
            (b = "number" === typeof b ? +b.toFixed(3) : null) && X(a, "u_sd", b, {
                aa: !1
            })
        },
        bu = function(a) {
            X(a, "eid", a.model.J);
            var b = ti().split(",");
            b && X(a, "debug_experiment_id", b)
        },
        iu = function(a, b, c) {
            var d = a.j,
                e = d.M;
            d = d.P[b.getSlotElementId()];
            X(a, "iu", b.getAdUnitPath());
            X(a, "sz", Xa(d));
            4 == Lj(d) && X(a, "rbv", "1");
            Xj(d) && X(a, "fluid", "height");
            var f = d && v(d, 12);
            e = !!v(e, 13);
            (e = (null == f ? e : f) ? 1 : 0) && X(a, "fsf", e);
            Du(a, b) && X(a, "fsb", "1");
            Eu(a, [b]);
            Fu(a, d);
            0 != Lj(d) && X(a, "ists", "1");
            e = so(Lj(d));
            X(a, "fa", e);
            _.w(98) && !e && Ck({
                slot: b,
                ca: d
            }, c) && X(a, "pfx", "1")
        },
        fu = function(a, b, c) {
            b.forEach(function(l) {
                Gu(a, l.getAdUnitPath())
            });
            var d = a.j,
                e = d.M,
                f = d.P;
            d = b.map(function(l) {
                return f[l.getSlotElementId()]
            });
            X(a, "iu_parts", a.v);
            X(a, "enc_prev_ius", a.H);
            X(a, "prev_iu_szs", d.map(function(l) {
                return Xa(l)
            }).join());
            if (d.some(function(l) {
                    return Xj(l)
                })) {
                var g = d.map(function(l) {
                    return Xj(l) ? "height" : "0"
                });
                X(a, "fluid", g)
            }
            X(a, "fsfs", Sa(b, function(l) {
                l = (l = f[l.getSlotElementId()]) && v(l, 12);
                var m = !!v(e, 13);
                return (null == l ? m : l) ? 1 : 0
            }, 0));
            X(a, "fsbs", Sa(b, function(l) {
                return Du(a, l) ? 1 : 0
            }, 0));
            Eu(a, b);
            Fu(a, f[b[0].getSlotElementId()]);
            (g = Hu(d)) && X(a, "ists", g);
            X(a, "fas", Sa(d, function(l) {
                return so(Lj(l))
            }));
            (g = Iu(d, function(l) {
                return 4 == Lj(l)
            })) && X(a, "rbvs", g);
            _.w(98) && (b = Iu(b, function(l) {
                var m = f[l.getSlotElementId()];
                return !so(Lj(m)) && Ck({
                    slot: l,
                    ca: m
                }, c)
            })) && X(a, "pfxs", b);
            var h = {};
            d.forEach(function(l) {
                (l = l.getClickUrl()) && (h[l] = (h[l] || 0) + 1)
            });
            if (!Ef(h)) {
                b = new Jk("gpt_sra_setclickurl");
                var k = [];
                _.Ua(h, function(l, m) {
                    k.push(m.length + ":" + l)
                });
                _.E(b, "lenfreqs", k.join());
                _.eb(b);
                Lk(b, _.Oi(58))
            }
        },
        Fu = function(a, b) {
            (_.w(364) ? v(a.j.M, 6) : a.o) || !b.getClickUrl() || X(a, "click", b.getClickUrl())
        },
        Du = function(a, b) {
            var c = a.j;
            a = c.M;
            b = c.P[b.getSlotElementId()];
            a = xe(a, sj, 18);
            return (b = b && xe(b, sj, 13)) && null != _.J(b, 3) ? !!v(b, 3) : !(!a || !v(a, 3))
        },
        Ju = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if ("" != b[c]) {
                    for (var d = !1, e = 0; e < a.v.length; e++)
                        if (b[c] == a.v[e]) {
                            d = !0;
                            break
                        } d || a.v.push(b[c])
                }
        },
        Ku = function(a, b) {
            for (var c = "", d = 0; d < b.length; d++) {
                if (0 < d) c += "/";
                else if ("" == b[0]) continue;
                for (var e = 0; e < a.v.length; e++)
                    if (b[d] == a.v[e]) {
                        c += e;
                        break
                    }
            }
            return c
        },
        Gu = function(a, b) {
            var c = "";
            "" != b && (b = b.split("/").map(function(d) {
                return d.replace(/,/g, ":")
            }), Ju(a, b), c = Ku(a, b));
            a.H.push(c)
        },
        Hu = function(a) {
            return Iu(a, function(b) {
                return 0 != Lj(b)
            })
        },
        Iu = function(a, b) {
            var c = new lq;
            a.forEach(function(d, e) {
                c.set(a.length - e - 1, b(d))
            });
            return mq(c)
        },
        Cu = function(a) {
            if (a.A) {
                var b = a.model.j.map(function(c) {
                    return Ms(a.model, c)
                });
                X(a, "ucis", b, {
                    sa: "|"
                })
            } else 0 < a.model.j.length && X(a, "uci", Ms(a.model, a.model.j[0]))
        },
        au = function(a) {
            var b = a.j.M;
            v(b, 21) && (X(a, "hxva", 1, {
                aa: !1
            }), X(a, "cmsid", _.J(b, 23)), X(a, "vid", _.J(b, 22)))
        },
        Eu = function(a, b) {
            b = Sa(b, function(c) {
                a.G && c.D++;
                return c.D - 1
            }, 0);
            X(a, a.A ? "rcs" : "rc", b)
        },
        X = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.J[b] || void 0 === c || null === c || a.D.push({
                $a: b,
                value: c,
                options: d
            })
        },
        Wt = function(a) {
            a.l = "" + _.Oi(247) + "/gampad/ads?";
            for (var b = 0; b < a.D.length; b++) {
                var c = a.D[b];
                if ("adsenseParameters" === c.$a) Lu(a, c);
                else {
                    var d = Mu(c);
                    if (Nu(a, b, c, d)) break
                }
            }
        },
        Mu = function(a) {
            var b = a.value,
                c = a.options,
                d = void 0 === c.aa ? !0 : c.aa;
            a = void 0 === c.sa ? "," : c.sa;
            c = void 0 === c.ka ? !1 : c.ka;
            return _.Rb(b) ? Array.isArray(b) && b.length ? b.map(function(e) {
                return Ou(e, d)
            }).join(Ou(a, d)) : null : null == b || !c && 0 == b ? null : Ou(b, d)
        },
        Nu = function(a, b, c, d) {
            if (!d) return !1;
            var e = c.$a,
                f = c.value;
            c = c.options;
            c = void 0 === c.aa ? !0 : c.aa;
            d = e + "=" + d;
            if (_.w(168) && 15352 <= a.l.length + d.length) {
                if ("supporting_urls" == e)
                    for (d = 0; d < f.length; d++) {
                        var g = (d ? Ou(",", c) : "&" + e + "=") + Ou(f[d], c);
                        if (15352 < a.l.length + g.length) break;
                        a.l += g
                    }
                _.Wa("gpt_url_trunc", function(h) {
                    _.E(h, "lps", a.D.slice(b).filter(function(k) {
                        return !!Mu(k)
                    }).map(function(k) {
                        return k.$a
                    }).join());
                    _.eb(h)
                });
                a.l += "&trunc=1";
                return !0
            }
            "?" !== a.l[a.l.length - 1] && (a.l += "&");
            a.l += d;
            return !1
        },
        Lu = function(a, b) {
            var c = [],
                d = [];
            b = _.D(Array.isArray(b.value) ? b.value : []);
            for (var e = b.next(); !e.done; e = b.next()) {
                var f = e.value;
                e = f.$a;
                var g = f.xc,
                    h = f.sd;
                f = g ? encodeURIComponent(g.toString()) : "";
                h ? (g = h.map(function(k) {
                    return k ? encodeURIComponent(encodeURIComponent(k)) : ""
                }).join(","), d.push(e + "," + encodeURIComponent(f) + "," + g)) : g && "url" != e && c.push(e + "=" + f)
            }
            c.length && (a.l += "&" + c.join("&"));
            d.length && (a.l += "&sps=" + d.join("|"))
        },
        ru = function(a) {
            a = vf(a.top) ? a.top : a;
            return _.Rb(a.AMP) && !!Hf(a.AMP, function(b, c) {
                return !/^inabox/i.test(c)
            })
        },
        Ou = function(a, b) {
            a = a.toString();
            return b ? encodeURIComponent(a) : a
        },
        wu = new _.We(-9, -9);
    var Pu = function(a) {
            this.id = a
        },
        Qu = new Pu(1),
        Ru = new Pu(2),
        Su = new Pu(3),
        Tu = new Pu(4),
        Uu = new Pu(5),
        Vu = new Pu(6),
        Wu = new Pu(7),
        Xu = new Pu(8),
        Yu = new Pu(9),
        Zu = new Pu(10),
        $u = new Pu(11),
        av = new Pu(12),
        bv = new Pu(13),
        cv = new Pu(14),
        dv = new Pu(15),
        ev = new Pu(16),
        fv = new Pu(17);
    var gv = function() {
            this.j = {}
        },
        hv = function(a, b, c) {
            a = _.D(a.j[b.id] || []);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, b(c)
        },
        iv = function(a, b, c, d) {
            var e = b.id,
                f = P(c, d, function(g, h) {
                    Vk(g, h, !0)
                });
            a.j[e] ? a.j[e].push(f) : a.j[e] = [f];
            return function() {
                var g = a.j[e];
                g && (hc(g, f), g.length || delete a.j[e])
            }
        };
    Nb(gv);
    var jv = null,
        mv = function() {
            var a = this;
            this.j = {};
            this.l = ak.C();
            var b = P(334, function() {
                return kv(a)
            });
            _.u(_.r, "DOMContentLoaded", b);
            iv(gv.C(), ev, 724, function(c) {
                return void lv(a, c)
            });
            iv(gv.C(), fv, 725, function(c) {
                c = _.D(c);
                for (var d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = d.W;
                    null != e ? $n(e, d.o) : lv(a, d)
                }
            })
        },
        lv = function(a, b) {
            var c = b.m.l;
            nv(a, b) ? delete a.j[c] : a.j[c] = b
        },
        nv = function(a, b) {
            var c = zk(b, _.r.document);
            if (c && "DIV" == c.nodeName) {
                var d = _.w(87);
                a = new Yn({
                    T: _.r,
                    xd: a.l,
                    ib: c,
                    ta: function(e) {
                        Uk(336, e, 1)
                    },
                    rd: d
                });
                if (a.m) return $n(a, b.o), b.W = a, !0
            }
            return !1
        },
        kv = function(a) {
            Ef(a.j) || (a.j = yc(a.j, function(b) {
                return !nv(a, b)
            }))
        };
    var ov = function(a, b) {
        b = encodeURIComponent(b);
        a.src = Nc(new Mc(Kc, "data:text/html," + b)).toString()
    };
    var pv = function(a) {
            a && (a.style.display = "none")
        },
        qv = function(a, b, c, d, e) {
            a = of (new Ye(a), "DIV");
            a.id = c;
            a.name = c;
            c = a.style;
            c.border = "0pt none";
            d && (c.margin = "auto", c.textAlign = "center");
            e && (d = Array.isArray(e), c.width = d ? e[0] + "px" : "100%", c.height = d ? e[1] + "px" : "0%");
            b.appendChild(a);
            return a
        },
        sv = function(a, b, c, d, e, f, g, h, k, l, m, q) {
            var n = rv,
                y = bp.C().m,
                A;
            Array.isArray(d) ? A = new _.Xe(d[0], d[1]) : A = 1;
            if (h ? _.w(287) : v(f, 4) || _.w(242)) var B = _.w(303) ? "constant" : _.w(321) ? xk() : q;
            d = g || void 0;
            _.w(354) || (d = _.w(338) ? os : ls, d = v(f, 3) ? d : void 0);
            return new gs({
                Tb: a,
                pc: b,
                $c: n,
                content: null === l ? gr(c) : "<startguard>" + c + "<endguard>",
                size: A,
                fd: {
                    info: function() {},
                    I: function() {},
                    error: function() {}
                },
                Sc: k,
                wc: e,
                Cc: d,
                permissions: {
                    ub: null != _.J(f, 1) ? !!v(f, 1) : !h,
                    vb: null != _.J(f, 2) ? !!v(f, 2) : !1
                },
                mb: !!_.db().fifWin,
                pd: jo(),
                Pc: ko(),
                Jc: !1,
                hostpageLibraryTokens: y,
                ta: Uk,
                Xa: null === l ? void 0 : l,
                uniqueId: q,
                Fb: m,
                Bc: B
            })
        },
        tv = function(a, b) {
            var c = Wi(495, function() {
                a.removeEventListener("load", c);
                b()
            }, Uk);
            a.addEventListener("load", c)
        },
        uv = function(a, b, c) {
            var d = void 0 === d ? !0 : d;
            var e = void 0 === e ? !0 : e;
            b = gr(b, "<script>var inDapIF=true,inGptIF=true;\x3c/script>");
            try {
                var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                d && nd() && f.open("text/html", "replace");
                c();
                f.write(b);
                a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && Rc(a.contentWindow.location.href, "#") && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
                e && f.close()
            } catch (g) {
                Vk(653, g, !0)
            }
        },
        vv = function(a) {
            try {
                tv(a, function() {
                    a.removeAttribute("name")
                }), ov(a, '<script>document.open("text/html","replace");var a=window.name;window.name="";document.write(a);document.close();\x3c/script>')
            } catch (b) {
                Vk(668, b, !0)
            }
        };
    var wv = function(a) {
            var b = _.x(8, -1);
            return -1 != b ? b : null != _.J(a, 1) ? null != _.J(a, 3) && 0 != Xf() ? _.J(a, 1) * pe(a, 3) : _.J(a, 1) : null
        },
        xv = function(a) {
            return null != _.J(a, 2) ? null != _.J(a, 3) && 0 != Xf() ? _.J(a, 2) * pe(a, 3) : _.J(a, 2) : null
        },
        yv = function(a) {
            var b = new qj;
            a = _.D(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                c = c.value;
                if (null != _.J(c, 1)) {
                    var d = _.J(c, 1);
                    _.K(b, 1, d)
                }
                null != _.J(c, 2) && (d = _.J(c, 2), _.K(b, 2, d));
                null != _.J(c, 3) && (c = pe(c, 3), _.K(b, 3, c))
            }
            return b
        };
    var zv = function() {
            this.j = {}
        },
        Bv = function(a) {
            var b = zv.C(),
                c = window,
                d;
            a && (d = "//" + a + ".safeframe.googlesyndication.com");
            a = bs(c, jo(), ko(), !0, d);
            b.j[a] || (b.j[a] = 1, uq() ? Av(b, a) : _.db().fifWin || (c = c.document, b = of (new Ye(c), "IFRAME"), b.src = a, b.style.visibility = "hidden", b.style.display = "none", c = c.getElementsByTagName("script"), 0 < c.length && (c = c[c.length - 1], c.parentNode && c.parentNode.insertBefore(b, c.nextSibling))))
        },
        Av = function(a, b) {
            var c = vq(document, b, "prefetch", "");
            c && _.u(c, "load", function() {
                a.j[b] = 3;
                c && _.kf(c)
            })
        };
    Nb(zv);
    _.Y = function() {
        Uq.apply(this, arguments)
    };
    _.F(_.Y, Uq);
    var Wq = function(a, b) {
            Uk(a.id(), b);
            window.console && window.console.error && window.console.error(b)
        },
        Cv = function(a, b, c, d, e) {
            var f = null,
                g = P(b, e);
            _.u(c, d, g) && (f = function() {
                return _.Pe(c, d, g)
            }, _.N(a, f));
            return f
        },
        Dv = function(a, b, c, d) {
            d = void 0 === d ? function() {
                return !0
            } : d;
            b = new Gg(b, c, P(a.id(), d));
            _.Bg(a, b);
            return b
        };
    var Ev = function(a, b, c, d) {
        var e = P(506, function(f) {
            f = JSON.parse(f.data);
            f.message === c && d(f)
        });
        _.N(a, Hg(b, e))
    };
    var rv = "3rd party ad content";
    cb("setAdIframeTitle", Q(729, function(a) {
        rv = a
    }));
    var Fv = function(a, b, c, d) {
        _.M.call(this);
        this.slot = b;
        this.pa = d;
        this.l = null;
        this.m = new Ye(a)
    };
    _.F(Fv, _.M);
    var Hv = function(a, b, c) {
        var d = c.xa,
            e = c.Sa,
            f = c.Ia,
            g = c.Zc,
            h = c.$b,
            k = c.Eb,
            l = c.Kb,
            m = c.isBackfill,
            q = c.Pb,
            n = c.Zb,
            y = c.ac;
        c = c.Uc || "";
        e && e.setAttribute("data-google-query-id", c);
        Gi(ak.C(), "5", a.slot.o);
        Uo(a.slot);
        a.l = a.j("height" === g ? "fluid" : [b.width, b.height], {
            xa: d,
            Ia: f,
            $b: h,
            Eb: k,
            Kb: l,
            isBackfill: m,
            Pb: q,
            Zb: n,
            ac: y
        });
        n && ig(a.l, n);
        Vo(a.slot);
        hv(gv.C(), Tu, Gv(a, b));
        b = _.x(19);
        if (0 < b) {
            var A = setTimeout(function() {
                hv(gv.C(), Qu, a.slot)
            }, 1E3 * b);
            _.N(a, function() {
                return void clearTimeout(A)
            })
        }
        return a.l
    };
    Fv.prototype.loaded = function(a) {
        a && a.setAttribute("data-load-complete", !0);
        hv(gv.C(), bv, this.slot);
        Gi(ak.C(), "6", this.slot.o);
        _.w(86) && Ui()
    };
    Fv.prototype.B = function() {
        _.M.prototype.B.call(this);
        var a = zk(this.slot, this.m.j);
        a && a.removeAttribute("data-google-query-id");
        this.l = null
    };
    var Gv = function(a, b) {
        var c = new xo(a.slot.j(), "publisher_ads");
        a = a.slot.O;
        b && a ? (c.size = [b.width, b.height], c.sourceAgnosticCreativeId = a.sourceAgnosticCreativeId, c.sourceAgnosticLineItemId = a.sourceAgnosticLineItemId, c.isBackfill = a.isBackfill, c.creativeId = a.creativeId, c.lineItemId = a.lineItemId, c.creativeTemplateId = a.creativeTemplateId, c.advertiserId = a.advertiserId, c.campaignId = a.campaignId, c.yieldGroupIds = a.yieldGroupIds, c.companyIds = a.companyIds, b = c) : b = c;
        return b
    };
    var Iv = function() {
        Fv.apply(this, arguments)
    };
    _.F(Iv, Fv);
    var Jv = function(a, b, c) {
            var d = Yo(a.slot),
                e = a.m.j;
            a = rv;
            e = void 0 === e ? document : e;
            e = of (new Ye(e), "IFRAME");
            e.id = d;
            e.title = a;
            e.name = c || d;
            Array.isArray(b) ? null != b[0] && null != b[1] && (e.width = String(b[0]), e.height = String(b[1])) : (e.width = "100%", e.height = "0");
            e.allowTransparency = "true";
            e.scrolling = "no";
            e.marginWidth = "0";
            e.marginHeight = "0";
            e.frameBorder = "0";
            e.style.border = "0";
            e.style.verticalAlign = "bottom";
            return e
        },
        Kv = function(a, b, c, d) {
            d.appendChild(b);
            "string" !== typeof c && (b.width = String(c[0]), b.height = String(c[1]));
            Ns(b, a.slot, function() {
                return a.loaded(b)
            })
        };
    var Lv = function() {
        Iv.apply(this, arguments)
    };
    _.F(Lv, Iv);
    Lv.prototype.j = function(a, b) {
        var c = b.Ia;
        b = Jv(this, a, b.xa);
        vv(b);
        Kv(this, b, a, c);
        return b
    };
    Lv.prototype.jb = function() {
        return !1
    };
    var Mv = function() {
        Iv.apply(this, arguments)
    };
    _.F(Mv, Iv);
    Mv.prototype.j = function(a, b) {
        var c = b.xa;
        b = b.Ia;
        var d = Jv(this, a);
        try {
            ov(d, c)
        } catch (e) {
            Vk(654, e, !0)
        }
        Kv(this, d, a, b);
        return d
    };
    Mv.prototype.jb = function() {
        return !1
    };
    var Nv = function() {
        Fv.apply(this, arguments)
    };
    _.F(Nv, Fv);
    Nv.prototype.j = function(a, b) {
        var c = this,
            d = b.xa,
            e = b.Ia,
            f = b.$b,
            g = b.Eb,
            h = b.Kb,
            k = b.isBackfill,
            l = b.Pb,
            m = b.Zb,
            q = b.ac,
            n = this.pa;
        b = n.M;
        n = n.P[this.slot.getSlotElementId()];
        f = uj(tj(new sj, !!f), !!q);
        f = mo([f, xe(b, sj, 18), n && xe(n, sj, 13)]);
        var y = String(v(f, 4));
        null != q && q !== v(f, 4) && cl.C().I(Mm(y, String(q)));
        k || _.Wa("gpt_sf_r", function(B) {
            _.eb(B);
            _.E(B, "GAM", String(q));
            _.E(B, "Final", y)
        });
        h = h ? _.J(h, 2) : null;
        var A = sv(e, Yo(this.slot), d, a, function() {
            return c.loaded(A.j)
        }, f, g || null, !!k, !!l, h, this.slot.da, m);
        _.N(this, function() {
            try {
                100 != A.status && (2 == A.H && (fr(A.m), A.H = 0), window.clearTimeout(A.K), A.K = -1, A.A = 3, A.l && (A.l.ua(), A.l = null), A.R && A.j ? A.R.unobserve(A.j) : (_.Pe(window, "resize", A.J), _.Pe(window, "scroll", A.J)), A.v && A.j && A.v == _.lf(A.j) && A.v.removeChild(A.j), A.j = null, A.v = null, A.R && (A.R.disconnect(), A.R = null), A.status = 100)
            } catch (B) {}
        });
        return A.j
    };
    Nv.prototype.loaded = function(a) {
        Fv.prototype.loaded.call(this, a);
        a = this.pa.P[this.slot.getSlotElementId()];
        xt({
            slot: this.slot,
            ca: a
        })
    };
    Nv.prototype.jb = function() {
        return !1
    };
    var Ov = function() {
        Iv.apply(this, arguments)
    };
    _.F(Ov, Iv);
    Ov.prototype.j = function(a, b) {
        var c = b.xa,
            d = b.Ia;
        b = b.Eb;
        var e = Jv(this, a);
        b && e.setAttribute("sandbox", b.join(" ")); - 1 == id.indexOf("iPhone") && (e.srcdoc = "");
        Kv(this, e, a, d);
        uv(e, c, function() {});
        return e
    };
    Ov.prototype.jb = function() {
        return !0
    };
    var Pv = function() {
        Iv.apply(this, arguments)
    };
    _.F(Pv, Iv);
    Pv.prototype.j = function(a, b) {
        var c = b.xa;
        b = b.Ia;
        var d = Jv(this, a);
        try {
            d.setAttribute("sandbox", ms.join(" "));
            var e = new ud;
            e.j = c;
            d.srcdoc = e instanceof ud && e.constructor === ud && e.l === td ? e.j : "type_error:SafeHtml"
        } catch (f) {
            Vk(656, f, !0)
        }
        Kv(this, d, a, b);
        return d
    };
    Pv.prototype.jb = function() {
        return !1
    };
    var Qv = function(a, b, c, d, e) {
        var f = document;
        return e ? _.w(263) && nk() && d ? new Mv(f, a, b, c) : _.w(267) && mk() && d ? new Pv(f, a, b, c) : _.w(286) && nk() && d ? new Lv(f, a, b, c) : new Nv(f, a, b, c) : new Ov(f, a, b, c)
    };
    var Rv = function(a, b, c, d, e, f, g, h, k, l, m, q, n, y, A, B, O, Z, W, ab, sd) {
        _.Y.call(this);
        this.slot = a;
        this.N = b;
        this.pa = c;
        this.T = d;
        this.o = this.l();
        this.A = this.l();
        this.H = this.l();
        this.v = this.l();
        this.G = this.l();
        this.D = this.l();
        this.J = this.l();
        this.Z = _.T(this, e);
        this.fa = _.T(this, f);
        Lq(this.m, g);
        this.da = _.T(this, h);
        this.U = _.T(this, k);
        this.ba = _.T(this, l);
        Lq(this.m, sd);
        this.O = U(this, m);
        this.V = U(this, q);
        this.W = U(this, n);
        this.Y = U(this, y);
        this.ja = U(this, A);
        this.ma = U(this, B);
        this.$ = U(this, O);
        this.L = U(this, Z);
        this.ea = U(this, W);
        this.ra = U(this, ab)
    };
    _.F(Rv, _.Y);
    Rv.prototype.id = function() {
        return 680
    };
    Rv.prototype.j = function() {
        var a, b = this.da.value,
            c = this.U.value,
            d = Qv(this.slot, this.N, this.pa, null != this.O.l.j, !!this.fa.value);
        _.Bg(this, d);
        var e = this.V.value,
            f = null !== (a = null === e || void 0 === e ? void 0 : qe(e.getHtml())) && void 0 !== a ? a : this.Z.value;
        if (null == f) throw Error("invalid html");
        var g = this.ba.value;
        this.slot.Y = f;
        var h = Hv(d, g, {
            xa: f,
            Sa: b,
            Ia: c,
            Uc: this.W.value,
            Zc: this.Y.value,
            $b: this.ja.value,
            Eb: this.ma.value,
            Kb: e,
            isBackfill: this.$.value,
            Pb: this.L.value,
            Zb: this.ea.value,
            ac: this.ra.value
        });
        4 === Lj(this.pa.P[this.slot.getSlotElementId()]) ? (b = Dv(this, this.T, "message", function(k) {
            if (h.contentWindow !== k.source) var l = !1;
            else try {
                l = "rewarded" === JSON.parse(k.data).type
            } catch (m) {
                l = !1
            }
            return l
        }), _.S(this.v, b)) : Qq(this.v);
        _.S(this.o, h);
        _.S(this.A, d.jb());
        d = Dv(this, window, "message", function(k) {
            return "string" === typeof k.data && -1 !== k.data.indexOf("creative_geometry_update") && k.source === h.contentWindow
        });
        _.S(this.G, d);
        d = Dv(this, window, "message", function(k) {
            return "string" === typeof k.data && (0 == k.data.lastIndexOf("visibility-changed-", 0) || "impression-viewable" === k.data) && k.source === h.contentWindow
        });
        _.S(this.D, d);
        _.S(this.J, Dv(this, h, "load"));
        d = Dv(this, window, "message", function(k) {
            return "string" === typeof k.data && 0 == k.data.lastIndexOf("amp-", 0) && !_.w(111) && k.source === h.contentWindow
        });
        _.S(this.H, d)
    };
    var Sv = function(a, b, c, d, e, f, g, h, k, l) {
        _.Y.call(this);
        this.o = a;
        this.slot = b;
        this.ca = c;
        this.A = d;
        this.F = Yq(this);
        this.v = U(this, e);
        this.J = _.T(this, f);
        this.G = _.T(this, g);
        this.H = _.T(this, h);
        this.D = U(this, k);
        this.L = _.T(this, l)
    };
    _.F(Sv, _.Y);
    Sv.prototype.id = function() {
        return 699
    };
    Sv.prototype.j = function() {
        var a, b = this.J.value,
            c = this.G.value;
        c.style.width = "";
        c.style.height = "";
        if ("height" !== this.v.value) {
            var d = null !== (a = this.D.value) && void 0 !== a ? a : 0,
                e = this.H.value,
                f = this.L.value,
                g = {
                    slot: this.slot,
                    ca: this.ca
                },
                h = !1;
            switch (d) {
                case 1:
                case 2:
                    h = this.o;
                    var k = this.A,
                        l = g.slot;
                    var m = e.width,
                        q = e.height,
                        n = 0;
                    var y = 0;
                    var A = Wj(g.ca);
                    A = _.D(A);
                    for (var B = A.next(); !B.done; B = A.next())
                        if (B = B.value, Array.isArray(B)) {
                            var O = _.D(B);
                            B = O.next().value;
                            O = O.next().value;
                            n < B && (n = B);
                            y < O && (y = O)
                        } y = [n, y];
                    n = y[0] < m;
                    q = y[1] < q;
                    n || q ? (y = m + "px", A = {
                        "max-height": "none",
                        "max-width": y,
                        padding: "0px",
                        width: y
                    }, q && (A.height = "auto"), mt(c, b, A), c = {}, n && m > parseInt(f.width, 10) && (c.width = y, c["max-width"] = y), q && (c.height = "auto", c["max-height"] = "none"), Ef(c) ? c = !1 : (c["padding-" + ("ltr" == f.direction ? "left" : "right")] = "0px", _.cg(b, c), c = !0)) : c = !1;
                    b: switch (m = e.width, q = h.defaultView || h.parentWindow || _.r, d) {
                        case 2:
                            b = nt(b, q, m, f, k);
                            break b;
                        case 1:
                            if (k = b.parentElement)
                                if (f = ap(l)) {
                                    n = f.width;
                                    f = Dk(l);
                                    l = f.position;
                                    A = parseInt(f.width, 10) || 0;
                                    y = Af(k, q);
                                    O = "rtl" == y.direction ? "Right" : "Left";
                                    k = O.toLowerCase();
                                    q = "absolute" == l ? 0 : parseInt(y["padding" + O], 10);
                                    y = parseInt(y["border" + O + "Width"], 10);
                                    B = hg(f);
                                    O = (B && B[4] || 0) * ("Right" == O ? -1 : 1);
                                    m = Math.max(Math.round((n - Math.max(A, m)) / 2), 0);
                                    n = {};
                                    A = B && B[3] || 1;
                                    if (1 != (B && B[0] || 1) || 1 != A) B[0] = 1, B[3] = 1, n.transform = "matrix(" + B.join(",") + ")";
                                    A = 0;
                                    switch (l) {
                                        case "fixed":
                                        case "relative":
                                            A = parseFloat(f[k]) || 0;
                                            break;
                                        case "absolute":
                                            n[k] = "0"
                                    }
                                    n["margin-" + k] = m - q - y - A - O + "px";
                                    _.cg(b, n);
                                    b = !0
                                } else b = !1;
                            else b = new Jk("gpt_pop_nopar"), _.eb(b), Rk(b), Lk(b, 1), _.E(b, "bm", 1), b = !1;
                            break b;
                        default:
                            b = !1
                    }
                    c || b ? (pt(h, g, d, e.width, e.height, "gpt_slotexp"), h = !0) : h = !1;
                    break;
                case 3:
                    h = this.o, m = this.A, l = e.width, k = e.height, k >= (parseInt(f.height, 10) || 0) || "none" == f.display || "hidden" == f.visibility || !m || -12245933 === m.width || b.getBoundingClientRect().bottom <= m.height ? h = !1 : (f = {
                        height: k + "px"
                    }, mt(c, b, f), _.cg(b, f), pt(h, g, 3, l, k, "gpt_slotred"), h = !0)
            }!h && _.w(212) && pt(this.o, g, 0, e.width, e.height, "gpt_pgbrk");
            Ya(this.ca, this.v.value, e, d)
        }
        this.F.notify()
    };
    var Tv = function(a, b, c, d) {
        _.Y.call(this);
        this.o = null;
        this.G = U(this, a);
        this.D = U(this, b);
        this.A = U(this, c);
        this.v = _.T(this, d)
    };
    _.F(Tv, _.Y);
    Tv.prototype.id = function() {
        return 717
    };
    Tv.prototype.j = function() {
        var a = this,
            b = this.D.value,
            c = this.G.value;
        null == this.A.value || b || null == c || (b = Hg(this.v.value, P(504, function(d) {
            "impression-viewable" === d.data ? hv(c, dv, {
                lb: !0
            }) : 0 === d.data.indexOf("visibility-changed-") && (d = /^visibility-changed-(\d+(\.\d+)?)$/.exec(d.data)) && (d = Number(d[1]), 0 <= d && 1 >= d && (0 !== d && 1 !== d || d !== a.o) && (null !== a.o || 0 < d) && (a.o = d, hv(c, dv, {
                lb: !1,
                inViewPercentage: +(100 * d).toFixed(2)
            })))
        })), _.N(this, b))
    };
    var Uv = function(a, b, c, d, e, f, g, h, k, l) {
        _.Y.call(this);
        this.L = U(this, a);
        this.N = U(this, b);
        this.J = U(this, c);
        this.H = U(this, d);
        this.O = U(this, e);
        this.v = _.T(this, f);
        this.o = _.T(this, g);
        this.A = _.T(this, h);
        this.D = _.T(this, k);
        this.G = _.T(this, l)
    };
    _.F(Uv, _.Y);
    Uv.prototype.id = function() {
        return 718
    };
    Uv.prototype.j = function() {
        var a = this;
        if (Vv(this)) {
            var b = this.A.value,
                c = this.v.value,
                d = this.o.value;
            _.bh(d, "visibility", "hidden");
            _.bh(d, "min-width", "100%");
            b ? (_.bh(c, "min-width", "100%"), b = Hg(this.G.value, P(505, function() {
                var e = c.contentDocument;
                e ? Wv(a, c, d, e.body.offsetWidth, e.body.offsetHeight) : _.Wa("gpt_amp_fluid_no_iframedoc", function(f) {
                    _.eb(f)
                })
            })), _.N(this, b)) : (b = Hg(this.D.value, P(504, function(e) {
                var f = a.v.value,
                    g = a.o.value;
                if (-1 !== e.data.indexOf("creative_geometry_update")) try {
                    var h = JSON.parse(e.data),
                        k = a.O.value;
                    if (null != k && "creative_geometry_update" === h.s && h.c === "sfchannel" + k && h.p) {
                        var l = JSON.parse(h.p);
                        l.uid === k && "number" === typeof l.width && "number" === typeof l.height && Wv(a, f, g, l.width, l.height)
                    }
                } catch (m) {}
            })), _.N(this, b))
        }
    };
    var Vv = function(a) {
            var b = !a.A.value && !(_.w(267) || _.w(263) || _.w(286));
            return null == a.H.value || a.J.value || "height" !== a.N.value || b ? !1 : !0
        },
        Wv = function(a, b, c, d, e) {
            b.setAttribute("height", String(e));
            b.setAttribute("width", String(d));
            _.bh(c, "visibility", "visible");
            Xv(a, e, d)
        },
        Xv = function(a, b, c) {
            var d = a.L.value;
            _.Wa("gpt_fluid_sz", function(e) {
                _.E(e, "sz", c + "x" + b);
                _.E(e, "qqid", d || "");
                _.eb(e);
                _.E(e, "ff", 1)
            })
        };
    var Yv = function(a, b, c, d, e) {
        _.Y.call(this);
        this.T = a;
        this.o = U(this, b);
        this.v = _.T(this, c);
        this.A = _.T(this, d);
        this.D = _.T(this, e)
    };
    _.F(Yv, _.Y);
    Yv.prototype.id = function() {
        return 685
    };
    Yv.prototype.j = function() {
        var a, b;
        if (!_.w(111) && !this.A.value) {
            var c = this.D.value,
                d = this.v.value,
                e = null !== (b = null === (a = this.o.value) || void 0 === a ? void 0 : _.J(a, 1)) && void 0 !== b ? b : "",
                f = Vg(this.T, d, e, c);
            _.N(this, function() {
                try {
                    f()
                } catch (g) {
                    Uk(493, g)
                }
            })
        }
    };
    var Zv = /(<head(\s+[^>]*)?>)/i,
        $v = function(a, b, c, d, e) {
            _.Y.call(this);
            this.xa = a;
            this.o = this.l();
            this.v = U(this, b);
            this.A = U(this, c);
            this.D = U(this, d);
            this.G = U(this, e)
        };
    _.F($v, _.Y);
    $v.prototype.id = function() {
        return 665
    };
    $v.prototype.j = function() {
        var a = this.xa || "";
        if (sk(this.v.value) && null == this.A.l.j) {
            var b = !!this.D.value,
                c = !!this.G.value;
            c || nd() || (a = a.replace(Zv, _.w(223) ? "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src https://tpc.googlesyndication.com/b4a/b4a-runner.html\">" : "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            b && !c && (a = a.replace(Zv, '$1<meta name="referrer" content="origin">'));
            _.S(this.o, a)
        } else _.S(this.o, a)
    };
    var aw = function(a, b, c, d, e, f, g) {
        _.Y.call(this);
        this.T = a;
        this.slot = b;
        this.o = c;
        this.A = d;
        this.xb = g;
        this.D = U(this, e);
        this.v = _.T(this, f)
    };
    _.F(aw, _.Y);
    aw.prototype.id = function() {
        return 686
    };
    aw.prototype.j = function() {
        var a = this,
            b, c, d = this.D.value,
            e = null === d || void 0 === d ? void 0 : _.J(d, 1),
            f = null === d || void 0 === d ? void 0 : te(d),
            g = null !== (b = null === d || void 0 === d ? void 0 : _.J(d, 3)) && void 0 !== b ? b : 0;
        d = null !== (c = null === d || void 0 === d ? void 0 : v(d, 5)) && void 0 !== c ? c : !1;
        e && f && (e = vs({
            T: this.T,
            element: this.v.value,
            td: 0 === this.o,
            Hc: g,
            wd: e,
            Ib: function() {
                hv(a.A, Qu, a.slot)
            },
            options: {
                threshold: f
            },
            uc: d,
            Tc: function(h) {
                Vk(615, h, !0)
            },
            xb: this.xb
        }), _.N(this, e))
    };
    var bw = function(a, b, c, d) {
        _.Y.call(this);
        this.format = a;
        this.A = b;
        this.F = this.l();
        this.o = U(this, c);
        this.v = U(this, d)
    };
    _.F(bw, _.Y);
    bw.prototype.id = function() {
        return 720
    };
    bw.prototype.j = function() {
        var a = this.v.value;
        if (null == a) Qq(this.F);
        else {
            var b = Math.round(.3 * this.A);
            2 !== this.format && 3 !== this.format || null == this.o.l.j || !se(this.o.value) || 0 >= b || a <= b ? _.S(this.F, a) : _.S(this.F, b)
        }
    };
    var cw = function(a, b, c, d, e) {
        _.Y.call(this);
        this.o = a;
        this.M = b;
        this.v = c;
        this.F = this.l();
        this.A = _.T(this, d);
        this.D = _.T(this, e)
    };
    _.F(cw, _.Y);
    cw.prototype.id = function() {
        return 674
    };
    cw.prototype.j = function() {
        var a = this,
            b = this.A.value,
            c = nf(b, function(e) {
                return e.id === a.o
            }),
            d = c ? c : qv(this.v, b, this.o, !!v(this.M, 15));
        this.D.value && !v(this.M, 15) && (d.style.display = "inline-block");
        _.S(this.F, d);
        _.N(this, function() {
            return void _.kf(d)
        })
    };
    var dw = function(a, b) {
        _.Y.call(this);
        this.T = a;
        this.F = this.l();
        this.o = _.T(this, b)
    };
    _.F(dw, _.Y);
    dw.prototype.id = function() {
        return 698
    };
    dw.prototype.j = function() {
        var a = Af(this.o.value, this.T);
        null == a ? Qq(this.F) : _.S(this.F, a)
    };
    var ew = function(a, b, c, d, e, f) {
        _.Y.call(this);
        this.o = a;
        this.format = b;
        this.slot = c;
        this.F = Yq(this);
        this.v = U(this, d);
        this.A = _.T(this, e);
        this.D = _.T(this, f)
    };
    _.F(ew, _.Y);
    ew.prototype.id = function() {
        return 682
    };
    ew.prototype.j = function() {
        return ra(this, function b() {
            var c = this,
                d, e, f, g, h, k, l;
            return sa(b, function(m) {
                if (1 == m.j) return d = c, 2 !== c.format && 3 !== c.format || null == c.v.l.j || !se(c.v.value) ? m.return() : ta(m, _.Gt.C().load(_.Dt), 2);
                e = m.B;
                f = e.Yc;
                if (c.na) return m.return();
                g = _.Hs(c.o, c.slot);
                h = c.D.value;
                k = c.A.value;
                _.cg(k, {
                    "max-height": "30vh",
                    overflow: "hidden"
                });
                l = new f(c.format, k, window.top, h, c.o, c.slot);
                l.Bd();
                _.N(c, function() {
                    l.ua();
                    g && delete d.o.o[_.bk(d.slot)]
                });
                c.F.notify();
                m.j = 0
            })
        })
    };
    var fw = function(a, b, c, d, e) {
        _.Y.call(this);
        this.T = a;
        this.o = U(this, b);
        this.A = _.T(this, c);
        this.v = _.T(this, d);
        this.D = _.T(this, e)
    };
    _.F(fw, _.Y);
    fw.prototype.id = function() {
        return 721
    };
    fw.prototype.j = function() {
        var a = this,
            b, c, d, e = this.o.value,
            f = null === (b = null === e || void 0 === e ? void 0 : _.J(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
        e = null === (c = null === e || void 0 === e ? void 0 : _.J(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
        if (f && e) {
            var g = this.A.value,
                h = this.v.value,
                k = this.D.value,
                l = k.style.height,
                m = k.style.width,
                q = k.style.display,
                n = k.style.position,
                y = tg(g.id + "_top", f),
                A = tg(g.id + "_bottom", e);
            _.cg(A, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            k.appendChild(y);
            k.appendChild(A);
            _.cg(h, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.cg(g, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            _.cg(k, {
                position: "relative",
                display: (null === (d = this.T.screen.orientation) || void 0 === d ? 0 : d.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            Cv(this, 722, this.T, "orientationchange", function() {
                var B;
                (null === (B = a.T.screen.orientation) || void 0 === B ? 0 : B.angle) ? _.cg(k, {
                    display: "none"
                }): _.cg(k, {
                    display: "block"
                })
            });
            _.N(this, function() {
                _.kf(y);
                _.kf(A);
                k.style.position = n;
                k.style.height = l;
                k.style.width = m;
                k.style.display = q
            })
        }
    };
    var gw = function(a, b, c, d, e) {
        _.Y.call(this);
        this.format = a;
        this.F = Yq(this);
        this.o = U(this, b);
        this.A = _.T(this, c);
        this.D = _.T(this, d);
        this.v = U(this, e)
    };
    _.F(gw, _.Y);
    gw.prototype.id = function() {
        return 683
    };
    gw.prototype.j = function() {
        return ra(this, function b() {
            var c = this,
                d, e, f, g, h, k, l, m, q;
            return sa(b, function(n) {
                if (1 == n.j) {
                    d = c.o.value;
                    if (!d || 5 !== c.format) return n.return();
                    e = c.D.value;
                    f = c.A.value;
                    return ta(n, _.Gt.C().load(_.Dt), 2)
                }
                g = n.B;
                h = g.ad;
                if (c.na) return n.return();
                k = new _.Pi;
                l = new h(window, f, e, k, c.v.value);
                _.Bg(c, l);
                l.Lc();
                m = ze(d, Um, 13);
                for (var y = {}, A = _.D(m), B = A.next(); !B.done; B = A.next()) B = B.value, y[_.J(B, 1)] = _.J(B, 2);
                q = y;
                l.zc(q);
                c.F.notify();
                n.j = 0
            })
        })
    };
    var hw = function() {
        _.Y.apply(this, arguments);
        this.F = Yq(this)
    };
    _.F(hw, _.Y);
    hw.prototype.id = function() {
        return 663
    };
    hw.prototype.j = function() {
        return ra(this, function b() {
            var c = this;
            return sa(b, function(d) {
                if (1 == d.j) {
                    var e = iw ? 0 : _.x(16),
                        f = _.x(17);
                    e = Math.max(e, f);
                    0 < e && (iw = !0, yt(e));
                    return ta(d, jw(c), 2)
                }
                c.F.notify();
                d.j = 0
            })
        })
    };
    var jw = function(a) {
            return ra(a, function c() {
                var d;
                return sa(c, function(e) {
                    d = _.x(18);
                    0 < d ? e = ta(e, Za(d), 0) : _.w(169) && hl(2) ? e = ta(e, Za(0), 0) : (e.j = 0, e = void 0);
                    return e
                })
            })
        },
        iw = !1;
    var kw = function(a, b, c, d, e) {
        _.Y.call(this);
        this.ia = a;
        this.P = b;
        this.o = c;
        this.A = d;
        this.v = _.T(this, e)
    };
    _.F(kw, _.Y);
    kw.prototype.id = function() {
        return 711
    };
    kw.prototype.j = function() {
        var a = this,
            b = this.v.value,
            c = _.x(35);
        this.o.v || 0 >= c || 1 >= Vj(this.P).length && !Xj(this.P) || _.N(this, iv(this.A, Uu, 712, function(d) {
            a.o.v ? a.ua() : _.bk(d) === a.ia && (d = _.oh(b, "padding").top, b.style.paddingTop = d + c + "px", a.o.v = !0, a.ua())
        }))
    };
    var lw = function(a, b, c, d, e, f, g) {
        _.Y.call(this);
        this.v = a;
        this.J = b;
        this.o = null;
        this.F = this.l();
        Lq(this.m, c);
        this.D = _.T(this, d);
        this.H = _.T(this, e);
        this.G = U(this, f);
        this.A = U(this, g)
    };
    _.F(lw, _.Y);
    lw.prototype.id = function() {
        return 666
    };
    lw.prototype.j = function() {
        var a = this,
            b = new qj;
        null != this.A.l.j && (_.K(b, 2, this.A.value), _.K(b, 3, 1));
        this.v && (b = yv([this.v, b]));
        b = xv(b);
        if (null == b || 0 > b) _.S(this.F, !1);
        else {
            var c = this.D.value,
                d = this.H.value;
            null != d && Gk(d, this.J, b / 100) ? (_.Wa("gpt_er", function(e) {
                var f;
                _.E(e, "qqid", null !== (f = a.G.value) && void 0 !== f ? f : "")
            }, {
                ya: _.x(20)
            }), _.S(this.F, !1)) : _.w(145) ? _.S(this.F, !1) : mw(this, b, c)
        }
    };
    var mw = function(a, b, c) {
        yh(c) ? (a.o = bb(b + "%", P(291, function(d, e) {
            d = _.D(d);
            for (var f = d.next(); !f.done; f = d.next())
                if (f = f.value, !(0 >= f.intersectionRatio)) {
                    e.unobserve(f.target);
                    _.S(a.F, !0);
                    break
                }
        })), a.o.observe(c), _.N(a, function() {
            a.o && a.o.disconnect()
        })) : _.S(a.F, !1)
    };
    var nw = function(a, b) {
        _.Y.call(this);
        this.T = a;
        this.o = b;
        this.F = this.l()
    };
    _.F(nw, _.Y);
    nw.prototype.id = function() {
        return 706
    };
    nw.prototype.j = function() {
        var a = Fa(this.o, this.T);
        a ? _.S(this.F, a) : Qq(this.F)
    };
    var ow = function(a, b, c, d, e) {
        _.Y.call(this);
        this.v = a;
        this.o = b;
        this.A = U(this, c);
        this.D = _.T(this, d);
        this.G = U(this, e)
    };
    _.F(ow, _.Y);
    ow.prototype.id = function() {
        return 713
    };
    ow.prototype.j = function() {
        var a = this.G.value;
        if (!sk(this.A.value) && a && this.o.getOseId()) {
            var b = this.D.value,
                c = xs(this.o);
            c.registerAdBlock("?eid=" + Li.C().j().join(",") + "&adk=" + this.v, 3, "ldjh", b, 0, 0, P(this.id(), function(d, e) {
                0 <= e && hv(a, dv, {
                    lb: d,
                    inViewPercentage: e
                });
                return null
            }));
            _.N(this, function() {
                try {
                    c.unloadAdBlock(b, !1, _.w(101))
                } catch (d) {}
            })
        }
    };
    var pw = function(a, b, c, d) {
        _.Y.call(this);
        this.slot = a;
        this.A = b;
        this.o = new Ye;
        this.F = Yq(this);
        Lq(this.m, c);
        this.v = U(this, d)
    };
    _.F(pw, _.Y);
    pw.prototype.id = function() {
        return 664
    };
    pw.prototype.j = function() {
        var a = this;
        if (_.w(20)) {
            var b = this.o.j,
                c = zn(b),
                d = function() {
                    var f = a.v.value;
                    return null != f && Gk(f, a.A, 0)
                };
            if (An(b) && c && (0 < this.slot.D - 1 || !d()) && c) {
                var e = Cv(this, 324, b, c, function() {
                    An(b) || (e && e(), a.F.notify())
                });
                if (e) return
            }
        }
        this.F.notify()
    };
    var rw = function(a) {
        _.Y.call(this);
        this.ba = a;
        this.J = [];
        qw(this, function(b) {
            return _.J(b, 4)
        });
        this.W = qw(this, function(b) {
            return _.J(b, 6)
        });
        this.fa = qw(this, function(b) {
            return _.J(b, 7)
        });
        qw(this, function(b) {
            return v(b, 8)
        });
        this.D = qw(this, function(b) {
            return _.J(b, 10)
        });
        qw(this, function(b) {
            return _.J(b, 15)
        });
        this.A = qw(this, function(b) {
            return _.J(b, 34)
        });
        this.o = qw(this, function(b) {
            return xe(b, Ge, 43)
        });
        this.v = qw(this, function(b) {
            return xe(b, en, 41)
        });
        this.G = qw(this, function(b) {
            return v(b, 9)
        });
        this.N = qw(this, function(b) {
            return v(b, 12)
        });
        this.U = qw(this, function(b) {
            return xe(b, Zm, 50)
        });
        this.V = qw(this, function(b) {
            return xe(b, Ym, 48)
        });
        this.H = qw(this, function(b) {
            return xe(b, Wm, 39)
        });
        this.$ = qw(this, function(b) {
            return _.J(b, 36)
        });
        this.O = qw(this, function(b) {
            return v(b, 13)
        });
        this.Z = qw(this, function(b) {
            return v(b, 3)
        });
        this.L = qw(this, function(b) {
            return _.J(b, 49)
        });
        this.ea = qw(this, function(b) {
            return _.J(b, 29)
        });
        this.Y = qw(this, function(b) {
            return xe(b, an, 51)
        });
        this.da = qw(this, function(b) {
            return v(b, 52)
        })
    };
    _.F(rw, _.Y);
    var qw = function(a, b) {
        var c = _.Y.prototype.l.call(a);
        a.J.push({
            F: c,
            Vc: b
        });
        return c
    };
    rw.prototype.id = function() {
        return 700
    };
    rw.prototype.j = function() {
        for (var a = _.D(this.J), b = a.next(); !b.done; b = a.next()) {
            var c = b.value;
            b = c.F;
            c = c.Vc;
            c = c(this.ba);
            null != c ? _.S(b, c) : Qq(b)
        }
    };
    var sw = function(a, b, c, d, e) {
        _.Y.call(this);
        this.ia = a;
        this.pa = b;
        this.o = c;
        this.v = d;
        Lq(this.m, e)
    };
    _.F(sw, _.Y);
    sw.prototype.id = function() {
        return 696
    };
    sw.prototype.j = function() {
        var a = this;
        Ev(this, this.o, "closed", function() {
            return void tw(a)
        });
        Ev(this, this.o, "canceled", function() {
            return void tw(a)
        })
    };
    var tw = function(a) {
        var b = a.ia,
            c = a.pa,
            d = a.v;
        hv(d, Yu, b);
        hv(d, Vu, {
            ia: b,
            pa: c
        });
        a.ua()
    };
    var uw = function(a, b, c, d) {
        _.Y.call(this);
        this.ia = a;
        this.v = b;
        this.o = c;
        Lq(this.m, d)
    };
    _.F(uw, _.Y);
    uw.prototype.id = function() {
        return 697
    };
    uw.prototype.j = function() {
        var a = this;
        Ev(this, this.v, "completed", function() {
            hv(a.o, Zu, a.ia);
            a.ua()
        })
    };
    var vw = function(a, b, c, d) {
        _.Y.call(this);
        this.ia = a;
        this.v = b;
        this.o = c;
        Lq(this.m, d)
    };
    _.F(vw, _.Y);
    vw.prototype.id = function() {
        return 694
    };
    vw.prototype.j = function() {
        var a = this,
            b = this.ia,
            c = this.o;
        Ev(this, this.v, "granted", function(d) {
            var e;
            hv(c, Xu, {
                ia: b,
                payload: null !== (e = d.payload) && void 0 !== e ? e : null
            });
            a.ua()
        })
    };
    var ww = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        xw = function(a, b, c, d) {
            _.Y.call(this);
            this.o = a;
            this.Sa = b;
            this.T = c;
            this.F = Yq(this);
            Lq(this.m, d)
        };
    _.F(xw, _.Y);
    xw.prototype.id = function() {
        return 693
    };
    xw.prototype.j = function() {
        var a = this,
            b = _.w(374) && 0 === Xf() ? "rgba(1,1,1,0.5)" : "white";
        _.cg(this.Sa, C(Object, "assign").call(Object, {
            "background-color": b,
            opacity: "1",
            position: "fixed",
            margin: "0",
            padding: "0",
            "z-index": "2147483647",
            display: "block"
        }, ww));
        _.N(this, _.jr(this.T.document, this.T));
        mf(this.o).postMessage(JSON.stringify({
            type: "rewarded",
            message: "visible"
        }), "*");
        this.T === this.T.top && (this.T.location.hash = "goog_rewarded", _.N(this, function() {
            "goog_rewarded" === a.T.location.hash && (a.T.location.hash = "")
        }));
        this.F.notify()
    };
    var yw = function(a, b, c) {
        _.Y.call(this);
        this.o = a;
        this.T = b;
        Lq(this.m, c)
    };
    _.F(yw, _.Y);
    yw.prototype.id = function() {
        return 695
    };
    yw.prototype.j = function() {
        if (this.T === this.T.top) var a = mf(this.o),
            b = Cv(this, 503, this.T, "hashchange", function(c) {
                Rc(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var zw = function(a, b, c) {
        _.Y.call(this);
        this.ia = a;
        this.o = b;
        this.F = Yq(this);
        this.v = _.T(this, c)
    };
    _.F(zw, _.Y);
    zw.prototype.id = function() {
        return 692
    };
    zw.prototype.j = function() {
        var a = this,
            b, c = this.v.value,
            d = this.ia,
            e = this.o;
        _.N(this, iv(e, Su, 677, function(f) {
            f === d && (a.F.notify(), a.ua())
        }));
        hv(e, Wu, {
            ia: d,
            makeRewardedVisible: vc(function() {
                hv(e, Su, d)
            }),
            payload: null !== (b = c.payload) && void 0 !== b ? b : null
        })
    };
    var Aw = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        Bw = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        Cw = function(a, b) {
            _.Y.call(this);
            this.o = a;
            this.v = b;
            this.F = this.l()
        };
    _.F(Cw, _.Y);
    Cw.prototype.id = function() {
        return 691
    };
    Cw.prototype.j = function() {
        var a = this,
            b = _.w(374) && 0 === Xf();
        _.cg(this.o, C(Object, "assign").call(Object, {
            position: "absolute"
        }, b ? Bw : Aw));
        Ev(this, this.v, "prefetched", function(c) {
            return void _.S(a.F, c)
        })
    };
    var Dw = function(a, b, c, d, e, f, g, h) {
        _.Y.call(this);
        this.ia = a;
        this.pa = b;
        this.format = c;
        this.T = d;
        this.o = e;
        this.v = _.T(this, f);
        this.D = U(this, g);
        this.A = _.T(this, h)
    };
    _.F(Dw, _.Y);
    Dw.prototype.id = function() {
        return 688
    };
    Dw.prototype.j = function() {
        if (4 === this.format) {
            var a = this.v.value,
                b = this.D.value,
                c = this.A.value;
            if (!b) throw Error("missing message bus input");
            var d = new _.Zq;
            _.Bg(this, d);
            var e = new Cw(a, b);
            V(d, e);
            e = new zw(this.ia, this.o, e.F);
            V(d, e);
            c = new xw(a, c, this.T, e.F);
            V(d, c);
            V(d, new yw(a, this.T, c.F));
            V(d, new vw(this.ia, b, this.o, e.F));
            V(d, new sw(this.ia, this.pa, b, this.o, e.F));
            V(d, new uw(this.ia, b, this.o, e.F));
            _.ar(d)
        }
    };
    var Ew = function(a, b, c, d, e, f) {
        _.Y.call(this);
        this.M = a;
        this.P = b;
        this.D = c;
        this.F = this.l();
        this.o = U(this, d);
        this.v = U(this, e);
        this.A = U(this, f)
    };
    _.F(Ew, _.Y);
    Ew.prototype.id = function() {
        return 669
    };
    Ew.prototype.j = function() {
        var a;
        if (!(a = null != this.v.l.j)) {
            a = this.P;
            var b = this.D;
            a = !!(Uh(3) || a && null != _.J(a, 16) && lt(b, "google_range_debug"))
        }
        a ? _.S(this.F, !0) : (a = (sk(this.o.value) ? v(this.P, 12) || v(this.M, 13) : !1) || !!this.A.value, _.S(this.F, !!a))
    };
    var Fw = function(a, b, c, d, e, f) {
        _.Y.call(this);
        this.M = a;
        this.ca = b;
        this.F = this.l();
        this.A = _.T(this, c);
        this.o = U(this, d);
        this.v = U(this, e);
        this.D = U(this, f)
    };
    _.F(Fw, _.Y);
    Fw.prototype.id = function() {
        return 719
    };
    Fw.prototype.j = function() {
        var a = this.o.value;
        if (this.A.value && _.w(354)) {
            if (a = this.D.value, a = tj(new sj, a), v(mo([a, xe(this.M, sj, 18), xe(this.ca, sj, 13)]), 3)) {
                _.S(this.F, _.w(338) ? os : ls);
                return
            }
        } else if (a && _.w(this.v.value ? 136 : 137)) {
            _.S(this.F, _.w(267) ? ns : ls);
            return
        }
        Qq(this.F)
    };
    var Gw = function(a, b, c, d, e, f, g, h, k, l) {
        _.Y.call(this);
        this.slot = a;
        this.ca = b;
        this.J = d;
        this.window = e;
        this.H = this.l();
        this.G = this.l();
        this.A = this.l();
        this.o = Uh(3).split(",");
        this.v = _.Vh(3);
        this.Da = null != _.J(b, 16) ? xe(b, Dj, 16) : null;
        this.D = lt(c, "google_range_debug");
        this.L = U(this, f);
        this.V = U(this, g);
        this.N = U(this, h);
        this.O = _.T(this, k);
        this.U = _.T(this, l)
    };
    _.F(Gw, _.Y);
    Gw.prototype.id = function() {
        return 681
    };
    Gw.prototype.j = function() {
        var a;
        if (a = !!(this.o.length || this.Da && this.D)) {
            var b;
            b: if (this.o.length) {
                if (this.v.length && (a = this.slot.getAdUnitPath().split("/"), !C(this.v, "includes").call(this.v, a[a.length - 1]))) {
                    a = !1;
                    break b
                }
                a = !0
            } else a = !1;
            var c = a;
            a = c ? Hw(this) : null;
            if (c && a) {
                c = this.U.value;
                var d = rk(c.parentElement);
                d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                b = "p" === this.o[0];
                var e = Number(this.o[0]);
                if (b = "f" === this.o[0] ? this.J : e && 0 < e ? e : b ? Math.min(d, this.J) : null) {
                    e = a.width;
                    var f = a.height,
                        g = this.o[1],
                        h = Number(g);
                    e = "ratio" === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                    Iw(this, b, e, Jw(b, e, "<p>Requested size:" + a.width + "x" + a.height + "</p>"), b <= d ? 1 : 2, c);
                    a = !0
                } else a = !1
            } else a = !1;
            if (!a) a: if (this.Da && this.D) {
                a = tt(this.Da, this.window);
                c = ut(this.Da, this.window);
                d = vt(this.Da);
                b = wt(this.Da);
                switch (this.D) {
                    case "max":
                        e = a;
                        f = c;
                        break;
                    case "min":
                        e = d;
                        f = b;
                        break;
                    case "banner":
                        e = a;
                        f = 90 > c ? c : 90 < b ? b : 90;
                        break;
                    case "skyscraper":
                        e = 90 > a ? a : 90 < d ? d : 90;
                        f = c;
                        break;
                    default:
                        a = !1;
                        break a
                }
                Iw(this, e, f, Jw(e, f, "<p>Minimum size:" + d + "x" + b + "</p><p>Maximum size:" + (a + "x" + c + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>")));
                a = !0
            } else a = !1
        }
        if (!a) {
            a = this.V.value;
            if (null == a) throw Error("Missing 'width'.");
            c = this.N.value;
            if (null == c) throw Error("Missing 'height'.");
            d = this.O.value;
            if (null == d) throw Error("Missing 'htmlInput'.");
            Iw(this, a, c, d)
        }
    };
    var Hw = function(a) {
            a = Wj(a.ca)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Xe(a[0], a[1]) : null
        },
        Jw = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        Iw = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.L.value : e;
            _.S(a.G, new _.Xe(b, c));
            _.S(a.H, d);
            null == e ? Qq(a.A) : _.S(a.A, e);
            f && _.bh(f, "opacity", .5)
        };
    var Kw = function(a, b, c, d, e, f) {
        _.Y.call(this);
        this.Sa = a;
        this.o = b;
        this.v = c;
        this.A = d;
        this.G = e;
        this.D = f;
        this.F = this.l()
    };
    _.F(Kw, _.Y);
    Kw.prototype.id = function() {
        return 673
    };
    Kw.prototype.j = function() {
        var a = this;
        if (null != this.Sa) Lw(this, this.Sa), _.S(this.F, this.Sa);
        else if (Zj(this.G)) _.S(this.F, Mw(this));
        else {
            var b = iv(this.D, Ru, this.id(), function(c) {
                c.id === a.o && (b(), Lw(a, c), _.S(a.F, c))
            });
            _.N(this, b)
        }
    };
    var Mw = function(a) {
            var b = jf(document, "INS");
            b.id = a.o;
            _.cg(b, {
                display: "none"
            });
            a.A.documentElement.appendChild(b);
            _.N(a, function() {
                return void _.kf(b)
            });
            return b
        },
        Lw = function(a, b) {
            var c = C(Array, "from").call(Array, b.childNodes);
            c = _.D(c);
            for (var d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.v && _.kf(d);
            b.style.display = ""
        };
    var Nw = function(a) {
        _.Y.call(this);
        this.F = this.l();
        this.o = _.T(this, a)
    };
    _.F(Nw, _.Y);
    Nw.prototype.id = function() {
        return 676
    };
    Nw.prototype.j = function() {
        var a = jk(this.o.value);
        _.S(this.F, a)
    };
    var Ow = function(a, b) {
        _.Y.call(this);
        var c = this;
        this.slot = a;
        this.o = b;
        this.F = this.l();
        this.v = vc(function() {
            c.slot.lb();
            hv(c.o, Uu, c.slot)
        });
        this.A = wc(function() {
            hv(c.o, cv, {
                slot: c.slot,
                inViewPercentage: c.inViewPercentage
            })
        }, 200)
    };
    _.F(Ow, _.Y);
    Ow.prototype.id = function() {
        return 714
    };
    Ow.prototype.j = function() {
        var a = this,
            b = new gv,
            c = iv(b, dv, this.id(), function(d) {
                var e = d.inViewPercentage;
                d.lb && a.v();
                void 0 === e || isNaN(e) || (e = Math.floor(e), a.inViewPercentage !== e && (a.inViewPercentage = e, a.A()))
            });
        _.N(this, c);
        _.S(this.F, b)
    };
    var Pw = function() {
            this.j = new _.t.Map
        },
        Qw = function(a, b) {
            var c;
            null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.ua();
            a.j.delete(b)
        },
        Rw = function(a, b, c, d, e, f, g, h, k, l) {
            Qw(a, b);
            var m = new _.Zq,
                q = zh(!0, window),
                n = e.M,
                y = e.P[b.getSlotElementId()];
            f = new rw(f);
            V(m, f);
            var A = new nw(window.top, l);
            V(m, A);
            var B = new hw;
            V(m, B);
            l = new Kw(zk(b, h), b.getSlotElementId(), Zo(b), h, Lj(y), gv.C());
            V(m, l);
            var O = new $v(g, f.o, f.v, f.G, f.N);
            V(m, O);
            var Z = new Ew(n, y, k, f.o, f.v, f.N);
            V(m, Z);
            g = new cw(Zo(b), n, h, l.F, Z.F);
            V(m, g);
            var W = new kw(_.bk(b), y, c, gv.C(), g.F);
            V(m, W);
            W = new Nw(g.F);
            V(m, W);
            B = new pw(b, q, B.F, W.F);
            V(m, B);
            B = new lw(xe(n, qj, 5), q, B.F, g.F, W.F, f.A, f.ea);
            V(m, B);
            W = new bw(Lj(y), q.height, f.H, f.W);
            V(m, W);
            k = new Gw(b, y, k, q.width, window, f.$, f.fa, W.F, O.o, l.F);
            V(m, k);
            O = new dw(window, l.F);
            V(m, O);
            h = new Sv(h, b, y, q, f.D, l.F, g.F, k.G, k.A, O.F);
            V(m, h);
            n = new Fw(n, y, Z.F, f.o, f.G, f.O);
            V(m, n);
            n = new Rv(b, c, e, window, k.H, Z.F, B.F, l.F, g.F, k.G, f.o, f.v, f.A, f.D, f.O, n.F, f.G, f.Z, f.L, f.da, h.F);
            V(m, n);
            c = new ew(c, Lj(y), b, f.H, n.o, l.F);
            V(m, c);
            c = new gw(Lj(y), f.V, n.o, l.F, A.F);
            V(m, c);
            c = new Yv(window, f.o, n.o, n.A, n.H);
            V(m, c);
            c = new aw(window, b, Xf(), gv.C(), f.U, n.o);
            V(m, c);
            e = new Dw(_.bk(b), e, Lj(y), window, gv.C(), n.o, n.v, l.F);
            V(m, e);
            e = new Ow(b, gv.C());
            V(m, e);
            d = new ow(b.hb, d, f.o, n.o, e.F);
            V(m, d);
            d = new Uv(f.A, f.D, f.v, f.o, f.L, n.o, g.F, n.A, n.G, n.J);
            V(m, d);
            d = new Tv(e.F, f.v, f.o, n.D);
            V(m, d);
            f = new fw(window, f.Y, n.o, g.F, l.F);
            V(m, f);
            a.j.set(b, m);
            _.N(b, function() {
                Qw(a, b)
            });
            _.w(336) && So(b, function() {
                Qw(a, b)
            });
            _.ar(m)
        };
    var Sw = function(a, b, c) {
            this.B = a;
            this.o = b;
            this.v = c;
            this.l = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        Tw = function(a, b) {
            a.state = 4;
            try {
                a.o(b)
            } catch (c) {}
        };
    var Uw = function(a, b) {
            this.o = a;
            this.j = b;
            this.m = !1;
            this.B = 0;
            this.l = !1
        },
        Ww = function(a) {
            if (!a.m) {
                a.m = !0;
                var b = new XMLHttpRequest;
                b.open("GET", a.o);
                b.withCredentials = !0;
                if (_.w(312) && b.setTrustToken) {
                    var c = _.Oi(250);
                    c && 5 === c.state && c.issuer && b.setTrustToken({
                        type: "send-srr",
                        issuer: c.issuer,
                        refreshPolicy: "none",
                        signRequestData: "include",
                        includeTimestampHeader: !0,
                        additionalSignedHeaders: ["sec-time", "Sec-Signed-Redemption-Record"]
                    })
                }
                b.onreadystatechange = function() {
                    Vw(a, !1, b)
                };
                b.onload = function() {
                    Vw(a, !0, b)
                };
                b.onerror = function(d) {
                    return Tw(a.j, d)
                };
                b.send()
            }
        },
        Vw = function(a, b, c) {
            try {
                if (3 == c.readyState || 4 == c.readyState)
                    if (300 <= c.status) a.l || Tw(a.j, Error("xhr_err-" + c.status)), a.l = !0;
                    else {
                        var d = c.responseText.substr(a.B);
                        if (d) {
                            var e = a.j;
                            if (d)
                                if (1 !== e.state && 2 !== e.state) Tw(e, Error("state err: (" + ([e.state, e.j.length].join() + ")")));
                                else {
                                    e.j && (d = e.j + d);
                                    var f = 0,
                                        g = !1;
                                    do {
                                        var h = d.indexOf("\n", f);
                                        g = -1 !== h;
                                        if (!g) break;
                                        var k = e,
                                            l = d.substr(f, h - f);
                                        if (1 === k.state) k.l = l, ++k.m, k.state = 2;
                                        else {
                                            try {
                                                k.B(k.m, k.l, pg(l)), k.l = ""
                                            } catch (q) {}
                                            k.state = 1
                                        }
                                        f = h + 1
                                    } while (g && f < d.length);
                                    e.j = d.substr(f)
                                }
                        }
                        a.B = c.responseText.length;
                        if (b && 4 == c.readyState) {
                            var m = a.j;
                            1 !== m.state || m.j ? Tw(m, Error("state err (" + ([m.state, m.j.length].join() + ")"))) : (m.state = 3, m.v())
                        }
                    }
            } catch (q) {
                Tw(a.j, q)
            }
        },
        Xw = function(a, b) {
            Ww(new Uw(a, b))
        };
    var Yw = function() {
            if (pd()) {
                if (_.w(109) && 0 <= bd(rd(), 12)) return !1;
                if (0 <= bd(rd(), 11)) return !0
            } else if (nd() && 0 <= bd(rd(), 65)) return !0;
            return !1
        },
        Zw = function(a) {
            _.w(200) ? a() : Yw() ? Fq(P(347, a)) : (_.w(239) && Fq(null), a())
        },
        $w = function(a) {
            var b = function(c) {
                ea(_.r.top, "googlefcLoaded") ? c() : setTimeout(function() {
                    b(P(678, c))
                }, 500)
            };
            vg() && _.w(302) ? b(a) : a()
        },
        ax = function(a, b) {
            if (!b) return _.t.Promise.resolve();
            var c = xe(b, qr, 3);
            b = xe(b, tr, 2);
            return c && b && 1 === _.J(b, 1) && 2 === _.J(c, 1) ? xr(a, "getM25Consent").then(function(d) {
                return xe(d, sr, 4) ? {
                    Cd: 2,
                    Yb: !1,
                    Fc: !1,
                    nc: "1,2,3"
                } : null
            }) : _.t.Promise.resolve()
        },
        bx = function(a, b, c) {
            var d = _.Oi(221),
                e = a.j.length ? a.j[0].A : "";
            a = void 0;
            _.w(373) && (a = !(!b || !v(b, 8)), b = ha(), !a && b && _.Wa("gpt_npa_uses_iframe_not_api", function(f) {
                _.eb(f);
                _.E(f, "networkId", e)
            }, {
                ya: 1
            }));
            zg(d, e, P(451, c), a)
        },
        cx = function(a, b) {
            a = new zr(_.gf(a));
            if (_.w(274) && Br(a)) {
                var c = P(661, function(d) {
                    b(d)
                });
                Dr(a, c)
            } else b(null)
        },
        dx = function(a, b) {
            a = new lr(_.gf(a));
            var c = P(660, function(d) {
                d && "string" === typeof d.uspString ? b(d.uspString) : b(null)
            });
            or(a, c)
        },
        ex = function(a, b) {
            var c = 1E3 * _.x(47, 1),
                d = function(e) {
                    return Math.max(0, Math.round((c - (a - e)) / 1E3))
                };
            if (null === b.$) return 0;
            switch (_.x(b.isBackfill() ? 52 : 46)) {
                case 0:
                    b = b.$;
                    if (null === b) break;
                    return d(b);
                case 1:
                    return (b = b.ba) ? d(b.getTimestamp().getTime()) : -1;
                case 2:
                    return (b = b.J) ? d(b) : -1
            }
            return 0
        },
        fx = function(a) {
            a.length && (a = a[0], Gi(ak.C(), "3", a.o))
        },
        gx = function(a) {
            a = a instanceof Error ? a : Error();
            a.message = a.message || "strm_err";
            Vk(289, a, !0)
        },
        hx = function(a, b) {
            if (_.w(177)) return !1;
            a = v(a, 11);
            null == a && (a = v(b, 10));
            return !!a
        },
        lx = function(a, b) {
            ix || (ix = new sq);
            var c = ix;
            var d = this;
            this.l = a;
            this.v = b;
            this.J = c;
            this.K = bp.C();
            this.m = new _.t.Map;
            this.j = new _.t.Map;
            this.G = jl(this.G);
            this.o = P(291, this.o);
            this.Z = null != lt(this.v, "google_nofetch");
            this.$ = null != lt(this.v, "google_norender");
            this.D = NaN;
            this.H = new ws;
            this.Y = 0;
            this.L = Na(_.r);
            this.B = {};
            this.W = this.V = NaN;
            this.N = !1;
            this.U = {};
            this.A = {};
            this.O = new Pw;
            this.R = P(643, this.R);
            iv(gv.C(), Qu, 614, function(e) {
                var f = dp.C().j;
                f = vk(f, ep());
                jx(d, [e], {
                    oa: 2
                }, f)
            });
            iv(gv.C(), Vu, 687, function(e) {
                var f = e.ia;
                e = e.pa;
                var g = (z = ip(jp.C()), C(z, "find")).call(z, function(h) {
                    return _.bk(h) === f
                });
                g && kx(d, [g], e.M, e.P)
            })
        },
        mx = function(a, b, c, d, e) {
            var f = c.slot;
            c = c.ca;
            if (_.Hs(a.l, f)) {
                if (d) {
                    var g = {};
                    g[f.getSlotElementId()] = c;
                    kx(a, [f], e, g)
                }
                if (d || !$o(f, b)) a = v(c, 10), null == a && (a = v(e, 11)), a && pv(zk(f, b))
            }
        },
        nx = function(a, b, c, d, e, f) {
            b.da = e.Fb;
            var g = f.M;
            if (f = f.P[b.getSlotElementId()]) {
                var h = C(e.l, "includes").call(e.l, b);
                g = uk(tk(g), e.oa);
                Xo(b, d, h, g);
                hv(gv.C(), av, b);
                null != _.J(d, 23) && _.J(d, 23).forEach(function(k) {
                    var l = a.K;
                    if (!C(l.l, "includes").call(l.l, k)) switch (k) {
                        case 1:
                        case 2:
                        case 3:
                            var m;
                            if (m = _.w(116) ? rn[k] : pn[k]) {
                                var q = k + "_hostpage_library";
                                if (m = zf(document, m)) m.id = q
                            }
                            l.l.push(k);
                            q = new sn(k);
                            l.m.push(q);
                            l = _.db();
                            l.hostpageLibraryTokens || (l.hostpageLibraryTokens = {});
                            l.hostpageLibraryTokens[q.j] = q.l
                    }
                    l = a.K;
                    l.j[k] || (l.j[k] = []);
                    l.j[k].push(b)
                });
                ze(d, $m, 14).length && tq(a.J, ze(d, $m, 14), c);
                if (4 == Lj(f) || 5 == Lj(f) || v(d, 11)) a.l.o[_.bk(b)] = !0;
                v(d, 8) || (b.o = e.R[_.bk(b)] || b.o || ++ak.C().l)
            }
        };
    lx.prototype.G = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        return _.r.IntersectionObserver ? new _.r.IntersectionObserver(function(d, e) {
            return c.o(d, e, b)
        }, {
            rootMargin: a
        }) : new $a(function(d, e) {
            return c.o(d, e, b)
        }, {
            rootMargin: a
        })
    };
    lx.prototype.o = function(a, b, c) {
        var d = this;
        c = void 0 === c ? !1 : c;
        a.forEach(function(e) {
            if (c || !(0 >= e.intersectionRatio)) {
                b.unobserve(e.target);
                e = e.target.id;
                var f = d.m.get(e);
                f && (f.Ib(), d.m.delete(e))
            }
        })
    };
    var ox = function(a, b) {
            if (!b.length) return [];
            var c = jp.C().o,
                d = b[0].A;
            a = Is(a.l).filter(function(e) {
                return e.A == d && !!e.K && !C(b, "includes").call(b, e)
            }).map(function(e) {
                return e.K
            });
            return jc(c, a)
        },
        px = function(a, b, c, d, e) {
            e = void 0 === e ? 0 : e;
            var f = new Ls;
            f.L = "ldjh";
            d = tk(d.M) ? "fifs" : "fif";
            f.o = d;
            f.B = a.L;
            f.oa = c;
            f.j = b;
            f.v = e;
            a = _.D(b);
            for (b = a.next(); !b.done; b = a.next()) b = b.value, f.R[_.bk(b)] = b.o;
            return f
        },
        qx = function(a, b) {
            var c = uk(tk(b.M), a.oa);
            if (0 != c) {
                var d = a.j,
                    e = b.M,
                    f = b.P;
                b = [];
                for (var g = d.length - 1; 0 <= g; g--) {
                    var h = d[g],
                        k = f[h.getSlotElementId()];
                    k = {
                        slot: h,
                        ca: k
                    };
                    if (zk(k.slot) && Ik(_.r, 2, k, !!v(e, 15))) break;
                    else b.unshift(h)
                }
                e = b.length;
                a.l = b;
                b = d.length;
                2 == c && 0 < e && e < b && (a.j = d.slice(0, b - e))
            }
        },
        rx = function(a, b, c, d, e, f) {
            return new Ut(b, a.l, a.v, a.J, c, d, e, void 0 === f ? !1 : f)
        },
        sx = function(a, b) {
            b.J = Li.C().j();
            b.A = a.H.getOseId();
            _.w(200) || (Cq(), b.H = zq[1], Cq(), b.K = zq[4], Cq(), b.N = zq[6]);
            b.va = a.N;
            b.Ua = a.V;
            b.Va = a.W;
            b.Ea = a.D;
            b.D = ox(a, b.j)
        },
        vx = function(a, b, c, d) {
            var e = tx(a, b, d);
            if ("boolean" === typeof e) e || ux(a, b, c, d);
            else return e.then(function() {
                ux(a, b, c, d)
            })
        },
        tx = function(a, b, c) {
            b = b.j;
            var d = c.M,
                e = c.P,
                f = xe(d, qj, 5) || new qj;
            c = _.w(296);
            f = wv(f);
            if (null == f) return c ? _.t.Promise.resolve() : !1;
            var g = Math.max(f / 100, 0);
            if (!b.every(function(l) {
                    var m = e[l.getSlotElementId()];
                    return yh(zk(l)) && !Ik(window, g, {
                        slot: l,
                        ca: m
                    }, !!v(d, 15))
                })) return c ? _.t.Promise.resolve() : !1;
            c = a.G(f + "%");
            var h = new Mq;
            f = {};
            b = _.D(b);
            for (var k = b.next(); !k.done; f = {
                    fb: f.fb,
                    sb: f.sb
                }, k = b.next()) k = k.value, f.sb = k.getSlotElementId(), f.fb = zk(k), f.fb && (a.m.set(f.sb, {
                Ib: function() {
                    return void h.resolve()
                },
                hd: c
            }), c.observe(f.fb), So(k, function(l) {
                return function() {
                    return wx(a, l.fb, l.sb)
                }
            }(f)));
            return h.j
        },
        ux = function(a, b, c, d) {
            var e = b.j;
            a.m.get(e[0].getSlotElementId()) && e.forEach(function(f) {
                var g = f.getSlotElementId();
                wx(a, zk(f), g)
            });
            xx(a, b, c, d)
        },
        xx = function(a, b, c, d) {
            var e = ++a.Y;
            b.m = e;
            a.B[e] = b.j;
            Ni(2);
            sx(a, b);
            e = Xt(rx(a, tk(d.M), b, c, d));
            yx(a, e, b, c, d);
            a = b.j;
            d = (d = xe(d.M, sj, 18)) && v(d, 4);
            var f = _.w(298);
            c = _.w(287);
            e = _.w(242);
            var g = _.w(303),
                h = _.w(321);
            if (f && (c || e || d))
                if (g) Bv("constant");
                else if (h) Bv(xk());
            else
                for (f = _.D(b.j), g = f.next(); !g.done; g = f.next()) Bv(Ms(b, g.value));
            c && (e || d) || Bv();
            if (1 !== a[0].Ma)
                for (b = _.ui(), a = _.D(a), d = a.next(); !d.done; d = a.next()) d.value.$ = b
        },
        jx = function(a, b, c, d) {
            b = b.filter(function(e) {
                var f = e.m,
                    g = a.j.get(f);
                g ? 0 != _.x(46) && C(Object, "assign").call(Object, g, {
                    options: c,
                    pa: d
                }) : (a.j.set(f, {
                    pa: d,
                    options: c,
                    Ic: null
                }), _.N(f, function() {
                    a.j.delete(f)
                }));
                So(e, function() {
                    return zx(a, e)
                });
                return !g
            });
            b.length && Ax(a, b, c, d)
        },
        Ax = function(a, b, c, d) {
            var e = _.ui();
            b = qc(b, function(f) {
                return ex(e, f)
            });
            _.Ua(b, function(f, g) {
                if ("0" === g) Bx(a, f, c, d);
                else if ("-1" === g) Cx(a, f);
                else {
                    var h = parseInt(g, 10);
                    f.forEach(function(k) {
                        cl.C().I(Im(String(h), k.getAdUnitPath()))
                    });
                    Bx(a, f, c, d, 1E3 * h)
                }
            })
        },
        Cx = function(a, b) {
            var c = {};
            b = _.D(b);
            for (var d = b.next(); !d.done; c = {
                    wa: c.wa,
                    Wa: c.Wa,
                    gb: c.gb,
                    bb: c.bb,
                    rb: c.rb
                }, d = b.next()) {
                c.wa = d.value;
                c.rb = _.x(c.wa.isBackfill() ? 52 : 46);
                c.Wa = [];
                c.gb = null;
                c.bb = function(e) {
                    return function(f, g) {
                        if (e.wa === f) {
                            var h = a.j.get(f.m);
                            try {
                                Bx(a, [f], h.options, h.pa, 1E3 * g)
                            } finally {
                                f = _.D(e.Wa);
                                for (g = f.next(); !g.done; g = f.next()) g = g.value, g();
                                e.Wa.length = 0;
                                null !== e.gb && clearTimeout(e.gb)
                            }
                        }
                    }
                }(c);
                if (d = 1E3 * _.x(c.wa.isBackfill() ? 56 : 55)) a.j.get(c.wa.m), c.gb = setTimeout(function(e) {
                    return function() {
                        return e.bb(e.wa, 0)
                    }
                }(c), d);
                switch (c.rb) {
                    case 2:
                        c.Wa.push(iv(gv.C(), Uu, 684, function(e) {
                            return function(f) {
                                e.bb(f, _.x(47, 1))
                            }
                        }(c)));
                    case 1:
                        c.Wa.push(iv(gv.C(), Tu, 684, function(e) {
                            return function(f) {
                                var g = f.isEmpty;
                                f.slot === e.wa.j() && (2 !== e.rb || g) && e.bb(e.wa, _.x(47, 1))
                            }
                        }(c)));
                        break;
                    default:
                        return
                }
            }
        },
        zx = function(a, b) {
            var c = a.j.get(b.m);
            c && (_.w(318) && _.r.clearTimeout(c.Ic), a.j.delete(b.m))
        },
        Bx = function(a, b, c, d, e) {
            e = void 0 === e ? 0 : e;
            var f = _.ui();
            Zw(function() {
                var g = (e || 0) - (_.ui() - f);
                if (0 < g) {
                    g = setTimeout(P(375, function() {
                        Dx(a, b, c, d)
                    }), g);
                    for (var h = _.D(b), k = h.next(); !k.done; k = h.next())
                        if (k = a.j.get(k.value.m)) k.Ic = g
                } else Dx(a, b, c, d)
            })
        },
        Dx = function(a, b, c, d) {
            var e = d.M,
                f = d.P;
            b.forEach(function(k) {
                zx(a, k)
            });
            var g = qc(b, function(k) {
                return 0 != Wj(f[k.getSlotElementId()]).length
            });
            if (g[!1]) {
                var h = _.D(g[!1]);
                for (b = h.next(); !b.done; b = h.next()) b = b.value, mx(a, document, {
                    slot: b,
                    ca: d.P[b.getSlotElementId()]
                }, !0, e)
            }
            if (b = g[!0])
                if (e = c.oa, b.forEach(function(k) {
                        0 < k.D && (k.o = ++ak.C().l)
                    }), void 0 !== c.Ea && (a.D = c.Ea), a.V = c.Ua || NaN, a.W = c.Va || NaN, a.N = c.va || !1, Gs(a.l, b), !a.Z)
                    if (tk(d.M)) c = Ex(b, b[0].A, d), Fx(a, d, c, e);
                    else
                        for (c = _.D(b), b = c.next(); !b.done; b = c.next()) Fx(a, d, [
                            [b.value]
                        ], e)
        },
        kx = function(a, b, c, d) {
            if (!_.w(336))
                for (var e = _.D(b), f = e.next(); !f.done; f = e.next()) Qw(a.O, f.value);
            a = _.D(b);
            for (f = a.next(); !f.done; f = a.next()) f = f.value, b = zk(f), hx(d[f.getSlotElementId()], c) && pv(b), Wo(f);
            return !0
        },
        wx = function(a, b, c) {
            if (b) {
                var d = a.m.get(c);
                d && (d.hd.unobserve(b), a.m.delete(c))
            }
        },
        Gx = function(a, b, c, d) {
            d = void 0 === d ? document : d;
            var e, f, g, h = 0,
                k = d,
                l = function() {
                    h++;
                    if (3 === h) {
                        var n = f,
                            y = e,
                            A = g,
                            B = new rq;
                        if (n) {
                            var O = yr(n) ? !n.gdprApplies || "tcunavailable" === n.tcString || n.purposeOneTreatment && "DE" === n.publisherCC ? !0 : (O = n.purpose && n.purpose.consents) ? !!O["1"] : !1 : !1;
                            _.K(B, 5, O);
                            _.K(B, 2, n.tcString);
                            void 0 != n.gdprApplies && _.K(B, 3, n.gdprApplies);
                            n.addtlConsent && _.K(B, 4, n.addtlConsent)
                        } else _.K(B, 5, !0);
                        y && _.K(B, 1, y);
                        A && _.K(B, 6, A.Yb);
                        b(B)
                    }
                },
                m = function() {
                    cx(k, function(n) {
                        f = n;
                        l()
                    });
                    dx(k, function(n) {
                        e = n;
                        l()
                    })
                };
            if (_.w(367)) {
                var q = new vr(_.gf(d));
                d = q.j ? xr(q, "loaded") : _.t.Promise.resolve();
                d.then(function(n) {
                    return ax(q, n)
                }).then(function(n) {
                    g = n;
                    l()
                });
                d.then(m)
            } else $w(function() {
                bx(a, yj(c.M), l);
                m()
            })
        },
        Ix = function(a, b, c, d) {
            d = void 0 === d ? document : d;
            Gx(b, function(e) {
                Hx(a, b, e, c, d);
                var f = d;
                !_.db()._pubconsole_disable_ && (e = Ia("google_pubconsole", e, f)) && (e = e.split("|"), 0 < e.length && ("1" == e[0] || "0" == e[0]) && Ss())
            }, c, d)
        },
        Hx = function(a, b, c, d, e) {
            e = void 0 === e ? document : e;
            var f = Fa(c);
            gp.C().m = f;
            var g = d.M,
                h = d.P;
            b.j = b.j.filter(function(m) {
                m = m.getSlotElementId();
                (m = 5 !== Lj(h[m])) || (m = 0 == Pn(window, !0, f));
                return m
            });
            if (b.j.length) {
                for (var k = _.D(b.j), l = k.next(); !l.done; l = k.next()) Jx(e, l.value, d);
                if (l = vx(a, b, c, d)) l.then(function() {
                    for (var m = _.D(b.j), q = m.next(); !q.done; q = m.next()) q = q.value, Kx(q, g, h[q.getSlotElementId()])
                });
                else
                    for (a = _.D(b.j), l = a.next(); !l.done; l = a.next()) l = l.value, Kx(l, g, h[l.getSlotElementId()])
            }
        },
        Ex = function(a, b, c) {
            var d = [];
            a = qc(a, function(e) {
                return e.A
            });
            _.Ua(a, function(e, f) {
                e = _.w(65) ? Lx(e, c) : e;
                f == b ? d.unshift(e) : d.push(e)
            });
            return d
        },
        Fx = function(a, b, c, d) {
            var e = document;
            if (c) {
                c = _.D(c);
                for (var f = c.next(); !f.done; f = c.next()) {
                    f = f.value;
                    if (_.w(129)) {
                        f = f.filter(function(g) {
                            return !g.ja
                        });
                        if (!f.length) continue;
                        Mx(f, !0)
                    }
                    f = px(a, f, d, b);
                    qx(f, b);
                    Ix(a, f, b, e)
                }
            }
        },
        Kx = function(a, b, c) {
            var d = !!a.l;
            hx(c, b) && !d && pv(zk(a))
        },
        Jx = function(a, b, c) {
            if (!yk(b, a)) {
                var d = zk(b, a);
                if (d) {
                    var e = c.M,
                        f = c.P[b.getSlotElementId()];
                    c = Zo(b);
                    e = !!v(e, 15);
                    var g = Wj(f);
                    if (0 == g.length) f = null;
                    else if (f = g[0], 1 < g.length) {
                        b: if ((b = zk(b, a)) && b.style.height && b.style.width)
                            for (b = [b.style.width, b.style.height], g = 0; g < b.length; ++g)
                                if (2 < b[g].length && "px" == b[g].substring(b[g].length - 2)) b[g] = parseInt(b[g], 10);
                                else {
                                    b = null;
                                    break b
                                }
                        else b = null;f = b || f
                    }
                    qv(a, d, c, e, f)
                }
            }
        },
        Nx = function(a, b, c, d) {
            b = px(a, b, c.oa, d, c.m);
            Ix(a, b, d)
        },
        Ox = function(a, b, c) {
            var d = b.j,
                e = b.l,
                f = b.m,
                g = b.v,
                h = uk(tk(c.M), b.oa);
            if (g && 0 != h) {
                b = _.D((null == g ? null : a.B[g]) || []);
                for (c = b.next(); !c.done; c = b.next()) c.value.Ma = 0;
                delete a.B[g];
                delete a.B[f]
            } else g = [], 1 == h ? g = d.filter(function(k) {
                return 1 == k.Ma
            }) : 2 != h || pc(d, e) || (g = e), g.length && 0 != h ? Nx(a, g, b, c) : delete a.B[f]
        },
        Lx = function(a, b) {
            var c = b.M,
                d = b.P,
                e = function(g) {
                    g = d[g.getSlotElementId()];
                    return 0 == Lj(g)
                },
                f = [];
            a.forEach(function(g) {
                if (e(g)) {
                    var h = d[g.getSlotElementId()];
                    h = Hk({
                        slot: g,
                        ca: h
                    }, document, !!v(c, 15)) || {};
                    f.push({
                        ec: void 0 === h.y ? Infinity : h.y,
                        slot: g
                    })
                }
            });
            nc(f, function(g, h) {
                return mc(g.ec, h.ec)
            });
            return a.map(function(g) {
                return e(g) ? f.shift().slot : g
            })
        },
        yx = function(a, b, c, d, e) {
            var f = void 0 === f ? _.r.document : f;
            var g = void 0 === g ? gx : g;
            var h = c.j;
            a.A[c.m] = h.slice();
            var k = P(646, function(m, q, n) {
                    Px(a, c, d, e, m, q, n, f)
                }),
                l = P(647, function() {
                    for (var m = c.m, q = a.A[m] || [], n = 0; n < q.length; ++n)
                        if (q[n]) {
                            var y = new dn;
                            y = '{"empty":' + _.K(y, 8, !0).o() + "}";
                            Px(a, c, d, e, n, y, "")
                        } delete a.A[m];
                    Ox(a, c, e);
                    Oa()
                });
            g = P(289, g);
            b = gk(fk(b));
            fx(h);
            Xw(b, new Sw(k, g, l));
            k = _.D(h);
            for (l = k.next(); !l.done; l = k.next()) l = l.value, l.fa = l.v.info(rl(l.getAdUnitPath()), null, l), Ei(ak.C(), "7", 9, l.D - 1, 0, l.o), l.G = null, l.ba = null, hv(gv.C(), $u, _.bk(l)), a.R(l, b, e);
            _.w(129) && Mx(h, !1)
        };
    lx.prototype.R = function(a, b, c) {
        if (_.w(139) || tk(c.M)) {
            var d = px(this, [a], 1, c);
            sx(this, d);
            d.o = "fif";
            var e = rx(this, _.w(364), d, new rq, c, !0);
            To(a, uc(function() {
                return fk(Xt(e))
            }))
        } else To(a, function() {
            return b
        })
    };
    var Px = function(a, b, c, d, e, f, g, h) {
            h = void 0 === h ? document : h;
            var k = b.m,
                l = a.A[k] || [],
                m = l[e];
            l[e] = null;
            try {
                var q = JSON.parse(f);
                var n = _.Rb(q) ? q : null
            } catch (y) {
                n = null
            }
            l = (e = n) && Hf(e, tc);
            e = e && e[l];
            e = "string" === typeof l && Array.isArray(e) ? new dn(e.slice()) : null;
            if (m)
                if (a.U[k] || (a.U[k] = !0, Gi(ak.C(), "4", b.R[_.bk(m)] || m.o)), m.v.info(sl(m.getAdUnitPath()), null, m, m.fa), e) {
                    f = ak.C();
                    k = m.o;
                    l = _.J(e, 34) || "";
                    f.j && (_.r.google_timing_params = _.r.google_timing_params || {}, _.r.google_timing_params["qqid." + k] = l);
                    f = _.J(e, 27);
                    f = _.D(f);
                    for (k = f.next(); !k.done; k = f.next()) k = k.value, Li.C().l(k);
                    Ni(4);
                    nx(a, m, c, e, b, d);
                    m.na || 1 == m.Ma || (v(e, 8) || a.$ ? (b = h, c = Qk(m), (g = zk(m, b)) && g.setAttribute("data-google-query-id", c), Gi(ak.C(), "5", m.o), Uo(m), c = _.w(123), mx(a, b, {
                        slot: m,
                        ca: d.P[m.getSlotElementId()]
                    }, c, d.M), a = new xo(m.j(), "publisher_ads"), a.isEmpty = !0, a.slotContentChanged = c, Vo(m), hv(gv.C(), Tu, a)) : Rw(a.O, m, a.l, a.H, d, e, g, h, a.v, c))
                } else Uk(646, Error("invalid response: " + f));
            else Uk(646, Error("missing slot: " + l))
        },
        Mx = function(a, b) {
            a = _.D(a);
            for (var c = a.next(); !c.done; c = a.next()) c.value.ja = b
        };
    var Qx = function() {
            this.m = this.j = this.l = null
        },
        Rx = function(a) {
            null == a.l && (a.l = new Es);
            return a.l
        },
        dt = function(a) {
            if (a.j) return a.j;
            var b = Rx(a);
            null == a.m && (a.m = new kt);
            a.j = new lx(b, a.m);
            return a.j
        },
        ix = null,
        Sx = null,
        et = function() {
            Sx || (Sx = new Qx);
            return Sx
        };
    var Tx = function(a, b, c, d) {
        _.M.call(this);
        this.o = c;
        this.m = d;
        _.K(this.m, 17, !0);
        this.l = a;
        oo(this.l, b, d);
        this.v = b
    };
    _.F(Tx, kl);
    Tx.prototype.Ba = function() {
        return new Vs(this, this.o, this.m)
    };
    Tx.prototype.display = function(a) {
        var b = this.l.getSlotElementId();
        document.write('<div id="' + vd(b) + '"></div>');
        zk(this.l) ? Ux(this.v, a, this.l) : _.Wa("gpt_pb_write", function(c) {
            _.eb(c)
        })
    };
    Tx.prototype.set = function(a, b) {
        "page_url" == a && b && _.K(this.m, 18, String(b));
        return this
    };
    Tx.prototype.get = function(a) {
        return "page_url" !== a ? null : _.J(this.m, 18)
    };
    var Vx = function(a, b, c) {
            this.j = a;
            this.state = b;
            this.options = c
        },
        Wx = function(a) {
            this.pubads = a;
            this.j = new _.t.Set;
            this.l = {}
        },
        Xx = function(a, b, c) {
            if (v(b.M, 4)) return [];
            if (!v(b.M, 6) || b.P[c.getSlotElementId()] && v(b.P[c.getSlotElementId()], 17)) return a.j.add(c), _.N(c, function() {
                return void a.j.delete(c)
            }), [c];
            b = [];
            for (var d = {}, e = _.D(a.pubads.m), f = e.next(); !f.done; d = {
                    Ga: d.Ga
                }, f = e.next()) d.Ga = f.value, a.j.has(d.Ga) || (a.j.add(d.Ga), _.N(d.Ga, function(g) {
                return function() {
                    return void a.j.delete(g.Ga)
                }
            }(d)), b.push(d.Ga));
            return b
        };
    Wx.prototype.display = function(a, b) {
        var c = Xx(this, a, b);
        Yx(this.pubads, c, a, {
            oa: 1
        });
        a = b.getAdUnitPath();
        if ((b = this.l[a]) && !_.w(319)) {
            b = _.D(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, Yx(this.pubads, c.j, c.state, c.options);
            delete this.l[a]
        }
    };
    var $x = function(a, b, c, d) {
            if (_.w(319)) Ko(a.pubads, P(690, function() {
                for (var h = {}, k = _.D(c), l = k.next(); !l.done; h = {
                        cb: h.cb
                    }, l = k.next()) h.cb = l.value, a.j.add(h.cb), _.N(h.cb, function(m) {
                    return function() {
                        return void a.j.delete(m.cb)
                    }
                }(h));
                Yx(a.pubads, c, b, d)
            }));
            else if (a.pubads.l) {
                for (var e = {}, f = _.D(c), g = f.next(); !g.done; e = {
                        eb: e.eb
                    }, g = f.next()) e.eb = g.value, a.j.add(e.eb), _.N(e.eb, function(h) {
                    return function() {
                        return void a.j.delete(h.eb)
                    }
                }(e));
                Yx(a.pubads, c, b, d)
            } else c.length && v(b.M, 6) ? (e = c[0].getAdUnitPath(), f = a.l[e] || [], f.push(new Vx(c, b, d)), a.l[e] = f) : Zx(a.pubads)
        },
        ay = function() {
            Jo.call(this);
            var a = this;
            this.D = this.H = !1;
            _.w(87) && (jv || window.performance && Vf(window.performance.now) && (jv = new mv));
            this.v = new Wx(this);
            iv(gv.C(), Wu, 701, function(b) {
                var c = b.makeRewardedVisible,
                    d = b.payload;
                (b = a.o[b.ia]) && Lo(a, "rewardedSlotReady", new Co(b.j(), a.X(), c, d))
            });
            iv(gv.C(), Xu, 702, function(b) {
                var c = b.payload;
                (b = a.o[b.ia]) && Lo(a, "rewardedSlotGranted", new Do(b.j(), a.X(), c))
            });
            iv(gv.C(), Yu, 703, function(b) {
                if (b = a.o[b]) Lo(a, "rewardedSlotCanceled", new Eo(b.j(), a.X())), Lo(a, "rewardedSlotClosed", new Fo(b.j(), a.X()))
            });
            iv(gv.C(), Zu, 704, function(b) {
                (b = a.o[b]) && Lo(a, "rewardedSlotCompleted", new Go(b.j(), a.X()))
            });
            iv(gv.C(), $u, 705, function(b) {
                (b = a.o[b]) && Lo(a, "slotRequested", new Ho(b.j(), a.X()))
            });
            iv(gv.C(), Tu, 708, function(b) {
                Lo(a, "slotRenderEnded", b)
            });
            iv(gv.C(), av, 709, function(b) {
                Lo(a, "slotResponseReceived", new Io(b.j(), a.X()))
            });
            iv(gv.C(), bv, 710, function(b) {
                Lo(a, "slotOnload", new Ao(b.j(), a.X()))
            });
            iv(gv.C(), Uu, 715, function(b) {
                Lo(a, "impressionViewable", new yo(b.j(), a.X()))
            });
            iv(gv.C(), cv, 716, function(b) {
                var c = b.inViewPercentage;
                Lo(a, "slotVisibilityChanged", new zo(b.slot.j(), a.X(), c))
            })
        };
    _.F(ay, Jo);
    _.p = ay.prototype;
    _.p.Ba = function() {
        var a = dp.C().j;
        return new ht(this, Ro, a, ep())
    };
    _.p.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.Rb(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else e = c;
        fo(this);
        b = sp(a, b, e);
        a = b.slot;
        b = b.qa;
        a && b && (f && !e && (f.id = a.m.l), oo(a, this, b), _.K(b, 7, d), wp(f || a.m.l))
    };
    _.p.Ob = function() {
        var a = dp.C().j;
        if (v(a, 6) || _.w(320)) {
            by(this, a);
            for (var b = _.D(this.m), c = b.next(); !c.done; c = b.next()) cy(this, c.value)
        }
        bt(this, a);
        this.D && gt(this);
        gb()
    };
    _.p.X = function() {
        return "publisher_ads"
    };
    _.p.pb = function(a, b) {
        v(b, 17) || cy(this, a);
        hv(gv.C(), ev, a);
        Jo.prototype.pb.call(this, a, b)
    };
    _.p.Db = function(a, b) {
        fo(this);
        by(this, a.M);
        cy(this, b);
        this.log.info(Vl());
        var c = et();
        dt(c);
        c = Rx(c);
        var d = v(a.M, 6),
            e = null != b.l;
        !c.j[_.bk(b)] || !d && e || (d && (c = zk(b, document)) && hv(gv.C(), Ru, c), v(a.M, 4) && Kx(b, a.M, a.P[b.getSlotElementId()]), this.v.display(a, b))
    };
    var cy = function(a, b) {
            a.l && Fs(Rx(et()), b);
            if (a.l) {
                var c = fp(dp.C(), b.getSlotElementId());
                if (c) {
                    var d = Rx(et());
                    c = ze(c, mj, 3);
                    c = _.D(c);
                    for (var e = c.next(); !e.done; e = c.next()) {
                        var f = e.value;
                        e = _.J(f, 2);
                        if ((f = nj(f)) && e && e.length) {
                            var g;
                            if (g = !!d.j[_.bk(b)]) {
                                g = e[0];
                                var h = _.bk(b);
                                null == d.m[h] && (d.m[h] = new ys(d.A));
                                g = zs(d.m[h], f, g)
                            }
                            g || a.log.I(Xl(f, e[0], b.getAdUnitPath()), a, b)
                        }
                    }
                }
            }
        },
        by = function(a, b) {
            if ((_.w(148) || !a.H) && a.l) {
                a.H = !0;
                var c = ze(b, mj, 14);
                b = Rx(et());
                c = _.D(c);
                for (var d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    d = _.J(e, 2);
                    (e = nj(e)) && d && d.length && (zs(b.l, e, d[0]) || a.log.I(Wl(e, d[0]), a))
                }
            }
        },
        $s = function(a, b, c) {
            if ("string" !== typeof b || 0 >= b.length || !c) return a.log.error(ol("PubAdsService.definePassback", [b, c])), {
                slot: null,
                qa: null
            };
            c = sp(b, c, void 0, !0);
            b = c.slot;
            c = c.qa;
            var d = dp.C().j;
            if (!b || !c) return {
                slot: null,
                qa: null
            };
            _.K(c, 17, !0);
            return {
                slot: new Tx(b, a, d, c),
                qa: c
            }
        },
        Ux = function(a, b, c) {
            fo(a);
            Fs(Rx(et()), c);
            c.bc = !0;
            a.v.display(b, c)
        },
        at = function(a, b, c, d) {
            var e = dy(a, c);
            if (e.length) {
                if (_.w(104)) {
                    fo(a);
                    c = _.D(c);
                    for (var f = c.next(); !f.done; f = c.next()) {
                        f = f.value;
                        var g = b.P[f.getSlotElementId()];
                        oo(f, a, g);
                        a.pb(f, g)
                    }
                }
                $x(a.v, b, e, d || {
                    oa: 2
                })
            } else a.log.I(ol("PubAdsService.refresh", [c].filter(function(h) {
                return void 0 !== h
            })), a)
        },
        Yx = function(a, b, c, d) {
            a.log.info(fm(), a);
            ey(b, d, c) && 1 !== d.oa && hv(gv.C(), fv, b)
        },
        ey = function(a, b, c) {
            var d = et(),
                e = dt(d),
                f = Rx(d);
            a = a.filter(function(g) {
                return !!f.j[_.bk(g)]
            });
            d = a.filter(function(g) {
                return _.Hs(f, g)
            });
            if (!d.length) return null;
            jx(e, d, b, c);
            return a
        },
        ft = function(a, b) {
            return a.l ? {
                vid: _.J(b, 22) || "",
                cmsid: _.J(b, 23) || ""
            } : null
        },
        bt = function(a, b) {
            v(b, 21) && a.l && (dt(et()).D = Fk())
        },
        fy = function(a, b, c, d) {
            var e = et(),
                f = dt(e);
            e = Rx(e);
            a = b ? dy(a, b) : Is(e);
            return kx(f, a, c, d)
        },
        ct = function(a, b, c, d) {
            if (!a.l) return a.log.I(em(), a), !1;
            var e = null;
            if (d && (e = dy(a, d), 0 == e.length)) return a.log.I(ol("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            })), a), !1;
            a.log.info(gm(), a);
            return fy(a, e, b, c)
        };
    ay.prototype.getVersion = function() {
        if (this.l) return La()
    };
    var dy = function(a, b) {
            var c = [];
            if (!Array.isArray(b)) return c;
            b.forEach(function(d, e) {
                (d = dj(d, Ro)) && !d.na ? c.push(d) : a.log.I(lm(String(e)), a)
            });
            return c
        },
        gt = function(a) {
            a.D = !0;
            if (a.l) {
                a = Rx(et());
                a.B = !0;
                var b = new Jk("gpt_markAsAmp", ik(), _.Oi(23));
                _.eb(b, a);
                try {
                    var c = Xg(_.r);
                    c && _.E(b, "ntype", c);
                    var d = _.r.location.ancestorOrigins,
                        e = null != d ? C(Array, "from").call(Array, d).map(function(f) {
                            return ((/^(?:https?:\/\/)?([^\/\?:#]+)/i.exec(f) || [])[1] || f).substr(0, 20)
                        }) : [];
                    _.E(b, "ost", e.slice(0, 10).join())
                } catch (f) {}
                Lk(b)
            }
        };
    ay.prototype.destroySlots = function(a) {
        var b = Jo.prototype.destroySlots.call(this, a);
        if (!b.length) return b;
        if (this.l) {
            var c = dp.C().j;
            fy(this, a, c, ep());
            Js(Rx(et()), a)
        }
        return b
    };
    var Zx = function(a) {
            var b = dm();
            a.log.I(b, a)
        },
        gy = P(26, function() {
            var a = No.C(),
                b = C(a, "find").call(a, "publisher_ads");
            b || (b = new ay, a.add(b));
            return b
        });
    cb("pubads", function() {
        return gy().j()
    });
    var ny = function(a, b) {
        go.call(this, a);
        var c = this;
        this.set = Q(576, function(d, e) {
            a.set(d, e);
            return c
        });
        this.get = Q(577, function(d) {
            return a.get(d)
        });
        this.getAttributeKeys = Q(578, function() {
            return Ff(a.D)
        });
        this.display = Q(558, function(d, e, f, g) {
            return a.display(d, e, void 0 === f ? "" : f, void 0 === g ? "" : g)
        });
        this.notifyUnfilledSlots = Q(69, function(d) {
            if (a.H) {
                var e = a.o,
                    f = [];
                d = _.D(d);
                for (var g = d.next(); !g.done; g = d.next()) g = g.value, Ac(e, g) ? f.push(e[g]) : a.log.I(Rl(), a);
                hy(a, f)
            }
        });
        this.isRoadblockingSupported = Q(111, function() {
            return iy(a)
        });
        this.refreshAllSlots = Q(60, function() {
            a.H && hy(a)
        });
        this.setVideoSession = Q(61, function(d, e, f, g) {
            a.L = d;
            a.J = e;
            a.K = f;
            a.va = g
        });
        this.getDisplayAdsCorrelator = Q(62, function(d) {
            return jy(a, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = Q(63, function() {
            if (gy().l) {
                var d = dt(et()).D;
                d = isNaN(d) ? 0 : d
            } else d = 0;
            return d
        });
        this.isSlotAPersistentRoadblock = Q(64, function(d) {
            d = dj(d, b);
            return !!d && ky(a, d)
        });
        this.onImplementationLoaded = Q(65, function() {
            a.log.info(Ul("GPT CompanionAds"), a)
        });
        this.fillSlot = Q(66, function(d, e) {
            d = dj(d, b);
            return !!d && ly(a, d, e)
        });
        this.slotRenderEnded = Q(67, function(d, e, f) {
            return (d = dj(d, b)) && my(a, d, e, f)
        });
        this.setRefreshUnfilledSlots = Q(59, function(d) {
            "boolean" === typeof d && (a.H = d)
        })
    };
    _.F(ny, go);
    var py = function(a, b) {
        go.call(this, a);
        this.setContent = Q(72, function(c, d) {
            return (c = dj(c, b)) && oy(a, c, d)
        });
        this.display = Q(562, function(c, d, e, f) {
            return a.display(c, d, void 0 === e ? "" : e, void 0 === f ? "" : f)
        })
    };
    _.F(py, go);
    var qy = function() {
        Jo.apply(this, arguments);
        this.v = new _.t.Map;
        this.D = {};
        this.H = !1;
        this.L = 0;
        this.K = this.J = void 0;
        this.N = this.va = this.O = !1
    };
    _.F(qy, Jo);
    _.p = qy.prototype;
    _.p.Ba = function() {
        return new ny(this, Ro)
    };
    _.p.set = function(a, b) {
        "string" === typeof a && a.length ? (this.D[a] = b, this.log.info(Kl(a, String(b), this.X()), this, null)) : this.log.I(Ll(String(a), String(b), this.X()), this, null);
        return this
    };
    _.p.get = function(a) {
        var b;
        return null !== (b = this.D[a]) && void 0 !== b ? b : null
    };
    _.p.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        fo(this);
        b = sp(a, b, c);
        a = b.slot;
        b = b.qa;
        oo(a, this, b);
        _.K(b, 7, d);
        wp(a.m.l)
    };
    _.p.Ob = function() {
        ry(this)
    };
    var iy = function(a) {
            var b = gy();
            if (!b.l) return !1;
            var c = b.m;
            a = a.m;
            return c.length !== a.length ? !1 : !a.some(function(d) {
                return !C(c, "includes").call(c, d)
            })
        },
        jy = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.N && _.Wa("ima_sdk_v", function(d) {
                a.N = !0;
                _.E(d, "v", b)
            });
            var c = dp.C().j;
            return String(_.J(c, 26))
        },
        hy = function(a, b) {
            var c = gy(),
                d = dp.C().j,
                e = ep();
            if (c.l) {
                if (a.va) {
                    if (!iy(a)) {
                        a.log.I(Ol());
                        return
                    }
                    fy(c, null, d, e)
                }
                var f = {
                    oa: 3
                };
                void 0 !== a.L && (f.Ea = a.L);
                a.J && (f.Ua = a.J);
                a.K && (f.Va = a.K);
                a.va && (f.va = a.va);
                a = null !== b && void 0 !== b ? b : a.m;
                d = vk(d, e);
                f.Ea && "number" !== typeof f.Ea || f.Ua && "number" !== typeof f.Ua || f.Va && "number" !== typeof f.Va || f.va && "boolean" !== typeof f.va || at(c, d, a, f)
            } else a.log.error(Pl("PubAds", "refresh"))
        },
        ky = function(a, b) {
            if (gy().l && rp(jp.C(), b)) return a = b.l, !!a && !!v(a, 11);
            a.log.error(Ql());
            return !1
        };
    qy.prototype.X = function() {
        return "companion_ads"
    };
    var ry = function(a) {
            _.Wk(70, function() {
                if (!a.O) {
                    var b = document;
                    a.log.info(Sl("GPT CompanionAds"), a);
                    zf(b, "https://pagead2.googlesyndication.com/pagead/show_companion_ad.js");
                    a.O = !0
                }
            }, function(b, c) {
                Uk(b, c);
                a.log.error(Tl("GPT CompanionAds"), a)
            })
        },
        sy = function(a, b) {
            if (!a.l || ky(a, b)) return !1;
            var c = zk(b);
            if (!c) return !1;
            var d = a.v.get(b);
            if (void 0 === d) return !1;
            a.v.delete(b);
            Uo(b);
            c.innerHTML = d;
            Vo(b);
            d = c = null;
            var e = fp(dp.C(), b.getSlotElementId());
            e && 1 === ze(e, zj, 5).length && null != _.J(ze(e, zj, 5)[0], 1) && null != _.J(ze(e, zj, 5)[0], 2) && (c = _.J(ze(e, zj, 5)[0], 1), d = _.J(ze(e, zj, 5)[0], 2));
            my(a, b, c, d);
            return !0
        };
    qy.prototype.Db = function(a, b) {
        sy(this, b)
    };
    var ly = function(a, b, c) {
            return b && rp(jp.C(), b) && c && "string" === typeof c ? (a.v.set(b, c), _.N(b, function() {
                return void a.v.delete(b)
            }), sy(a, b)) : !1
        },
        my = function(a, b, c, d) {
            b = new xo(b.j(), a.X());
            null != c && null != d && (b.size = [c, d]);
            Lo(a, "slotRenderEnded", b)
        },
        ty = function() {
            return _.Wk(57, function() {
                var a = No.C(),
                    b = C(a, "find").call(a, "companion_ads");
                b || (b = new qy, a.add(b));
                return b
            })
        };
    cb("companionAds", function() {
        return ty().j()
    });
    var uy = function() {
        Jo.apply(this, arguments);
        this.content = new _.t.Map
    };
    _.F(uy, Jo);
    uy.prototype.Ba = function() {
        return new py(this, Ro)
    };
    uy.prototype.X = function() {
        return "content"
    };
    uy.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        fo(this);
        b = sp(a, b, c);
        a = b.slot;
        b = b.qa;
        oo(a, this, b);
        _.K(b, 7, d);
        wp(a.m.l)
    };
    uy.prototype.destroySlots = function(a) {
        a = Jo.prototype.destroySlots.call(this, a);
        for (var b = _.D(a), c = b.next(); !c.done; c = b.next()) this.content.delete(c.value);
        return a
    };
    var vy = function(a, b) {
        if (a.l && !b.G) {
            var c = zk(b);
            if (c) {
                var d = a.content.get(b);
                void 0 !== d && (Uo(b), c.innerHTML = d, Vo(b), Lo(a, "slotRenderEnded", new xo(b.j(), a.X())))
            }
        }
    };
    uy.prototype.Ob = function() {};
    uy.prototype.Db = function(a, b) {
        vy(this, b)
    };
    var oy = function(a, b, c) {
            rp(jp.C(), b) && "string" === typeof c && c.length && (a.content.set(b, c), _.N(b, function() {
                return void a.content.delete(b)
            }), vy(a, b))
        },
        wy = function() {
            return _.Wk(71, function() {
                var a = No.C(),
                    b = C(a, "find").call(a, "content");
                b || (b = new uy, a.add(b));
                return b
            })
        };
    cb("content", function() {
        return wy().j()
    });
    if (window.googletag.evalScripts) window.googletag.evalScripts();
    else {
        var xy = window,
            yy = _.vi(xy);
        if (yy) {
            var zy = {
                    label: "2",
                    type: 9,
                    value: yy
                },
                Ay = xy.google_js_reporting_queue = xy.google_js_reporting_queue || [];
            2048 > Ay.length && Ay.push(zy)
        }
        cb("evalScripts", function() {
            Mt()
        });
        Ot()
    };
}).call(this, {});