/* Retrieved from https://z.moatads.com/turner763610601596/moatad.js. */
/*Copyright (c) 2011, 2020, Oracle and/or its affiliates.  All rights reserved.*/
try {
    (function(q, t) {
        function Ha(a) {
            if (p.b.az()) return AB_SCAFFOLD.sampling.onReady(function() {
                Ia(a)
            });
            Ia(a)
        }

        function Ia(a, n) {
            p.m.a.sxaz("trackingReady", {
                callback: Ha
            });
            if (!p.b.az() || !AB_SCAFFOLD.sampling.tagShouldNotTrack()) {
                ua = r.h;
                r.h++;
                r.i[ua] = !1;
                p.bc.c();
                "undefined" === typeof a && (a = p.x.d && p.x.d(B));
                var f = a && p.v.b(null, a, {}, null, !0);
                f && f.qs && f.qs.d && "string" === typeof f.qs.d && (p.j = f.qs.d.split(":")[0]);
                f = null;
                f = !1;
                if (f = p.b.az() ? !AB_SCAFFOLD.sampling.isEnabled() : p.d.ap().isInApp && !p.d.cu()) delete p.d._sprg,
                    delete p.d._sdrc, xa = !1, p.d.fv = !0, p.d.fr = !0;
                p.h = 16;
                p.i = 8;
                p.d._sprg && void 0 !== p.d._sprg[p.j] && (p.h = p.d._sprg[p.j], p.i = parseInt(p.h / 2));
                p.b.az() && (AB_SCAFFOLD.sampling.isActiveSampling() ? p.h = 1 : (delete p.h, delete p.i));
                f && (delete p.h, delete p.i);
                p.h && (xa = !0);
                p.u.l();
                p.d.bb.c || (p.d.bb.c = !0, r.dcsx.ynds(window, "unload", "unload-" + p.d.bb.a, "unloadFn" + p.d.bb.a), r.dcsx.ynds(window, "beforeunload", "unload-" + p.d.bb.a, "beforeunloadFn" + p.d.bb.a));
                r.swde.azsx("unload-" + p.d.bb.a, Ja, {
                    once: !0
                });
                p.m.a.azsx("allLocalAdsKilled",
                    function() {
                        r.swde.sxaz("unload-" + p.d.bb.a, {
                            callback: Ja
                        })
                    }, {
                        once: !0
                    });
                p.p.e(p.l.f, 100);
                p.b.bd() && p.p.f(ca, 3E5);
                f = p.q.f() || p.q.e();
                if (p.d.da() && f) p.q.n(), p.b.dy() && Aa && AB_SCAFFOLD.sampling.set({
                    enabled: !1,
                    multiplier: 1,
                    active: !1
                });
                else {
                    "undefined" === typeof a && (a = p.x.d(B));
                    if (p.b.bc()) {
                        var f = "number" === typeof p.h,
                            k = 1;
                        xa && (f ? (k = p.b.ay(p.h, p.i), k = k.sample ? k.multiplier : 0) : k = "undefined" === typeof Ka ? 1 : Ka);
                        AB_SCAFFOLD.sampling.set({
                            enabled: xa,
                            multiplier: k,
                            active: f
                        })
                    }
                    f = B.parentNode;
                    "undefined" === typeof a && (a = {});
                    p.w.i(p.d.bb.a, p.d.bd);
                    Ua(a, 1E4);
                    p.f.al(a);
                    p.v.b(17, a);
                    p.ay.c(f, a)
                }
            }
        }

        function Ua(a, n) {
            p.d.ay.adFindingTimeout = p.p.f(function() {
                a && a.shouldKillTimeout || !1 !== r.i[ua] || (p.v.b(11, a), p.m.a.zaxs("adNotFoundTimeout"), ca())
            }, n)
        }
        var L;
        L = "undefined" === typeof AB_SCAFFOLD ? 0 : AB_SCAFFOLD.type;
        var p = {},
            K = "TURNERDFP1";
        t.floor(t.random() * t.pow(10, 12));
        (function(a) {
            function n(a) {
                return "function" !== typeof a ? function() {
                    return a
                } : a
            }

            function f(a) {
                return {
                    get: function(c, b) {
                        if (c && c._MoatProxySet && "undefined" !== typeof c._MoatProxySet[b]) return c._MoatProxySet[b];
                        if ("string" === typeof b && a)
                            for (var m = 0; m < a.length; m++) {
                                var h = a[m],
                                    d = n(h.func);
                                if (h.exp.constructor === RegExp && h.exp.test(b) || h.exp.constructor === String && h.exp == b) return m = d(c, b), c._MoatProxySet[b] = m
                            }
                        return null
                    },
                    getPrototypeOf: function(a) {
                        return null
                    },
                    set: function(a, c, b) {
                        return a._MoatProxySet[c] = b
                    }
                }
            }

            function k(a, c, b, m) {
                if (!a[c]) {
                    var h;
                    try {
                        h = new Proxy({
                            _MoatProxySet: {
                                _MoatProxyOf: c
                            }
                        }, f(b))
                    } catch (d) {
                        throw d.message = "ES6 proxy not found when proxying " + c, d;
                    }
                    m && (m[c] = h);
                    return h
                }
                return a[c]
            }

            function e(a,
                c) {
                this.exp = a;
                this.func = c
            }

            function l() {
                return function() {
                    return 0
                }
            }

            function g(a) {
                return {
                    style: {},
                    _MoatProxyOf: "HTMLElement",
                    tagName: a,
                    ownerDocument: document,
                    appendChild: function() {},
                    removeChild: function() {},
                    addEventListener: function() {},
                    getElementsByTagName: function(a) {
                        return []
                    }
                }
            }
            a.a = {};
            var d = (new Function("return this;"))(),
                c = new e(/^get[A-Z]/m, 0);
            new e(/^insert[A-Z]/m, 0);
            new e(/^append[A-Z]/m, 0);
            new e(/erCase$/gm, "");
            var b = new e(/^getElements*[A-Z]/m, function() {
                    return function() {
                        return []
                    }
                }),
                h = new e(/^create[A-Z]/m,
                    l),
                v = new e(/^(?!(MoatSuper|Math|MmJsBridge))[A-Z][a-z].*/m, l);
            new e(/subsc.*_$/m, 0);
            var x = new e("valueOf", 0),
                A = new e(/^MoatMAK/m, 0),
                m = new e(/.*/m, ""),
                z = new e(/.*/m, 0),
                w = new e(/.*/m, function(a, c) {
                    return d ? d[c] : 0
                });
            a.a.createWindow = function() {
                var b = k(d, "window", [c, A, v, h, x, w], null);
                a.a.a(b) && (b.window = b, b.parent = b, b.top = b, b.Function = Function, b.setTimeout = l(), b.clearTimeout = l(), b.clearInterval = l(), b.setInterval = l(), b.history = []);
                return a.a.b = b
            };
            a.a.navigator = function() {
                return k(d, "navigator", [m], window)
            };
            a.a.document = function() {
                var m = k(d, "document", [b, c], window);
                a.a.a(m) && (m.documentElement = g("HTML"), m.createElement = g, m.defaultView = window, m.body = {
                    appendChild: function(a) {
                        return a
                    },
                    removeChild: function() {}
                }, m.scripts = []);
                return m
            };
            a.a.location = function() {
                return k(d, "location", [m], window)
            };
            a.a.screen = function() {
                return k(d, "screen", [z], window)
            };
            a.a.c = function(a, c, b, m) {
                m = m || window;
                setTimeout = b ? a.bind(b) : a;
                clearTimeout = b ? c.bind(b) : c;
                a._MoatProxyOf = "setTimeout";
                c._MoatProxyOf = "clearTimeout";
                m.setTimeout =
                    setTimeout;
                m.clearTimeout = clearTimeout
            };
            a.a.d = function(a, c, b, m) {
                m = m || window;
                setInterval = b ? a.bind(b) : a;
                clearInterval = b ? c.bind(b) : c;
                a._MoatProxyOf = "setInterval";
                c._MoatProxyOf = "clearInterval";
                m.setInterval = setInterval;
                m.clearTimeout = clearInterval
            };
            a.a.a = function(a) {
                return a && a._MoatProxyOf
            };
            a.a.e = function(c) {
                return (c = d[c]) && !a.a.a(c)
            };
            a.a.f = !a.a.e("window") && !a.a.e("document");
            a.a.g = function(c) {
                a.a.a(navigator) && (navigator.userAgent = c)
            }
        })(p);
        p.a.f && (this.__moatBPM = p.a, eval("var window = this.__moatBPM.createWindow();var navigator = this.__moatBPM.navigator();var document = this.__moatBPM.document();var location = this.__moatBPM.location();var screen = this.__moatBPM.screen();var setTimeout = window['setTimeout'];var clearTimeout = window['clearTimeout'];var setInterval = window['setInterval'];var clearInterval = window['clearInterval'];"),
            this.__moatBPM = void 0);
        var va, Ba, ya, ua = 0,
            Ca = {},
            ea = {},
            E = {},
            ra = [],
            u = {},
            wa = !1,
            Da = {
                15: "",
                12: "",
                6: "",
                7: ""
            },
            T, Ma = function() {
                for (var a in ea) ea.hasOwnProperty && ea.hasOwnProperty(a) && ea[a] && p.b.a(ea[a]);
                for (a = 0; a < ra.length; a++) p.b.b(ra[a]);
                for (var n in E) E.hasOwnProperty && E.hasOwnProperty(n) && E[n] && (p.b.a(E[n].tid), E[n] = !1);
                ea = {};
                ra = [];
                B = null;
                p.c = null;
                p.d.a = null
            },
            ca = function() {
                p.e.a(null, 0) || p.e.b();
                p.f && p.f.a();
                Ma()
            };
        p.g = ca;
        p.h = null;
        p.i = null;
        p.j = "";
        (function(a) {
            function n(d) {
                return (d = a.b.c.toString.call(d)) &&
                    ("[object Array]" === d || "[object Array Iterator]" === d)
            }
            a.b = {};
            a.b.c = {};
            for (var f = [
                    [1, 25],
                    [7, 1],
                    [1, 25],
                    [-74, 1],
                    [1, 9],
                    [-24, 1],
                    [2, 1],
                    [1, 3],
                    [2, 1],
                    [1, 4],
                    [2, 1],
                    [1, 1],
                    [11, 1],
                    [1, 6],
                    [27, 1],
                    [2, 1],
                    [1, 3],
                    [27, 1],
                    [1, 3],
                    [-92, 1]
                ], k = 65, e = "", l = 0, l = 0; l < f.length; l++)
                for (var g = 0; g < f[l][1]; g++) e += String.fromCharCode(k), k += f[l][0];
            e += String.fromCharCode(k);
            a.b.d = e;
            a.b.e = function(a) {
                for (var c = "", b = 0; b < a.length; b++) a.hasOwnProperty(b) && (c += e[a[b]]);
                return c
            };
            a.b.f = n;
            a.b.g = function(d) {
                return !!(d && d.document && d.location && d[a.f.b([26,
                    37, 30, 43, 45
                ])] && d[a.f.b([44, 30, 45, 8, 39, 45, 30, 43, 47, 26, 37])])
            };
            a.b.h = function(d) {
                if (null == d || a.b.g(d)) return !1;
                var c = d.length;
                return 1 === d.nodeType && c ? !0 : "string" === typeof d || n(d) || 0 === c || "number" === typeof c && 0 < c && c - 1 in d
            };
            a.b.forEach = function(d, c, b, h) {
                var g, e = typeof d;
                if (d)
                    if ("function" === e)
                        for (g in d) {
                            if ("prototype" != g && "length" != g && "name" != g && (h || !d.hasOwnProperty || d.hasOwnProperty(g)) && (e = c.call(b, d[g], g), "boolean" === typeof e && !e)) break
                        } else if ("number" === e)
                            for (g = 0; g < d && (e = c.call(b, d, g), "boolean" !==
                                    typeof e || e); g++);
                        else if ("function" === typeof d.every) d.every(function(a, m, h) {
                    a = c.call(b, a, m);
                    return !("boolean" === typeof a && !a)
                });
                else if (a.b.h(d))
                    for (g = 0; g < d.length && (e = c.call(b, d[g], g), "boolean" !== typeof e || e); g++);
                else
                    for (g in d)
                        if (h || d.hasOwnProperty(g))
                            if (e = c.call(b, d[g], g), "boolean" === typeof e && !e) break;
                return d
            };
            a.b.i = function(d) {
                if (!d) return !1;
                var c;
                if (d !== Object(d)) c = d;
                else if (a.b.h(d)) {
                    c = [];
                    for (var b = 0, h = d.length; b < h; b++) c[b] = d[b]
                } else
                    for (b in c = {}, d) c[b] = d[b];
                return c
            };
            a.b.j = function(d,
                c) {
                if (!d || "function" !== typeof d) return !1;
                var b = !1;
                0 <= String(d).indexOf("[native code]") ? b = !0 : a.d.b || d === Function.prototype.toString || (b = !0);
                b && c && (b = d.toString && d.toString === Function.prototype.toString);
                return b
            };
            a.b.k = function() {
                try {
                    return navigator.userAgent
                } catch (a) {
                    return ""
                }
            };
            a.b.l = function(d) {
                d = d || a.b.k();
                d = /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(d) || a.b.m(d);
                var c = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
                return !(!d && !c)
            };
            a.b.n = function(d) {
                d =
                    d || a.b.k();
                return !!/Android/.exec(d)
            };
            a.b.m = function(a, c) {
                var b = c || document;
                return !!(/Macintosh/.exec(a) && "ontouchend" in b)
            };
            a.b.o = function(d) {
                d = d || a.b.k();
                var c = /Safari|CriOS/i;
                d = (/iPhone|iPod|iPad/.exec(d) || a.b.m(d)) && !c.exec(d);
                c = a.d && a.d.c && a.d.c() && a.d.d && a.d.d();
                return !(!d && !c)
            };
            a.b.p = function() {
                return !1
            };
            a.b.q = function(d) {
                d = d || a.b.k();
                return a.b.n(d) ? !!/Version/.exec(d) : !1
            };
            a.b.r = function(d) {
                if (!navigator) return null;
                d = d || a.b.k();
                return d ? (d = d.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(d[1]) :
                    null : null
            };
            a.b.s = function() {
                if (!navigator) return null;
                var d;
                d = a.b.k();
                return "Microsoft Internet Explorer" == navigator.appName ? parseInt(d.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" == navigator.appName && (d = d.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(d[1], 10) : null
            };
            a.b.t = function() {
                return null != a.b.s()
            }
        })(p);
        (function(a) {
            function n(a) {
                if ("string" === typeof a) return schemeHostnameRx = /^([a-z]+:\/\/|:?\/?\/)?((?:www\.)?(?:[^\/:]*))?/i, (a = a.match && a.match(schemeHostnameRx)) && 1 < a.length && a.slice &&
                    a.slice(1)
            }

            function f(a) {
                var b = new RegExp("(^| )" + a + "($| )");
                return function(a) {
                    return a && a.className && a.className.match(b)
                }
            }
            a.b.u = 1E3;
            a.b.v = 1E3;
            a.b.w = !1;
            a.b.x = !1;
            a.b.y = function() {
                var c = /Firefox\/(\d+)/.exec(a.b.k());
                return c ? (c = parseInt(c[1], 10), 21 > c && 14 < c) : !1
            }();
            a.b.z = function() {
                var c, b = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                a.d.e || (c = a.b.aa(), !c && a.d.f && (c = a.d.f));
                c || (c = a.d.g.location.hostname);
                var h = a.b.ab();
                h && (c = h.sourceUrl);
                return (c = c && c.match && c.match(b)) && c[1] || a.d.g.location.hostname
            };
            var k = /cdn.ampproject.org$/;
            a.b.ac = function(a) {
                var b = /(http(s?):\/\/)?(www.)?google.((com(.(af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|co|cu|cy|do|ec|eg|et|fj|gh|gi|gt|hk|jm|kh|kw|lb|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|pg|ph|pk|pr|py|qa|sa|sb|sg|sl|sv|tj|tr|tw|ua|uy|vc|vn))?)|(co(.(ao|bw|ck|cr|id|il|in|jp|ke|kr|ls|ma|mz|nz|th|tz|ug|uk|uz|ve|vi|za|zm|zw))?)|(ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cd|cf|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|dm|dz|ee|es|fi|fm|fr|ga|ge|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ie|im|iq|is|it|je|jo|ki|kg|kz|la|li|lk|lt|lu|lv|md|me|mg|mk|ml|mn|ms|mu|mv|mw|ne|nl|no|nr|nu|pl|pn|ps|pt|ro|ru|rw|sc|se|sh|si|sk|sn|so|sm|sr|st|td|tg|tk|tl|tm|tn|to|tt|vg|vu|ws|rs|cat)?)(\/?)/,
                    h = location && location.ancestorOrigins;
                if (!h || !h.length) return a;
                var d = h[h.length - 1];
                if ("string" !== typeof d) return a;
                if (1 < h.length && b.test(d)) {
                    b = h[h.length - 2];
                    if ("string" !== typeof b) return a;
                    if (k.test(b)) return b
                } else if (k.test(d)) return d;
                return a
            };
            a.b.ad = function(c) {
                c = a.b.ac(c);
                return a.b.ae(c)
            };
            a.b.ae = function(a) {
                return a && "string" === typeof a && k.test(a) ? a.split(".")[0].split("-").join(".") : !1
            };
            a.b.af = function(c, b, h) {
                var d = "",
                    g = !1;
                b = (b = b || a.b.ab()) && b.sourceUrl;
                h = h || a.b.ac();
                if (b || h) b ? (d = b, g = !0, a.d.h(7)) :
                    (d = (c = a.b.ag(c.document.referrer, h)) ? c : a.b.ae(h) || h, a.d.h(8));
                return {
                    url: d,
                    isCorrect: g
                }
            };
            a.b.ab = function() {
                var c = a.b.ah("context");
                if (c && a.b.ai(c, ["observeIntersection"])) return c;
                c = a.b.ah("AMP_CONTEXT_DATA");
                if (a.b.ai(c, ["initialIntersection"])) return c
            };
            a.b.ag = function(c, b) {
                if ("string" === typeof c && "string" === typeof b && c.indexOf && 0 == c.indexOf(b)) {
                    var h = n(b)[0] || "",
                        d = n(a.b.ae(b))[1],
                        d = c.indexOf(d, b.length);
                    if (0 < d) return h + c.substr(d)
                }
            };
            a.b.aj = function() {
                var c = a.b.ak();
                if (c && c.url) return c;
                var c = a.k.a(),
                    b = a.b.af(c);
                if (b && b.url) return b;
                var b = a.b.aa(),
                    h = a.b.al(c, b);
                return h && h.url || (h = a.b.am(c)) && h.url ? h : (b = a.b.an(b)) && b.url ? b : (c = a.b.ao(c)) ? c : a.b.ap()
            };
            a.b.ap = function() {
                a.d.h(10);
                return {
                    url: "",
                    isCorrect: !1
                }
            };
            a.b.ak = function() {
                if (!a.d.e) return !1;
                var c = window.top && window.top.location && window.top.location.href;
                if (c) return a.d.h(4), {
                    url: c,
                    isCorrect: !0
                }
            };
            a.b.an = function(c) {
                c = c || a.b.aa();
                if (!c) return !1;
                a.d.h(2);
                return {
                    url: c,
                    isCorrect: !1
                }
            };
            a.b.ao = function(c) {
                c = c && c.document && c.document.referrer;
                if (!c) return !1;
                a.d.h(3);
                return {
                    url: c,
                    isCorrect: !1
                }
            };
            a.b.am = function(c) {
                c = a.b.aq(c);
                if (!c) return !1;
                c.parentIsTop ? a.d.h(3) : a.d.h(9);
                return {
                    url: c.url,
                    isCorrect: !1
                }
            };
            a.b.aq = function(c, b, h, d) {
                b = a.d.e;
                if (!c || b) return !1;
                b = c.document && c.document.referrer;
                if (!b || !a.b.ar(b)) return !1;
                if (c.parent === c.top) return {
                    url: b,
                    parentIsTop: !0
                };
                c = location && location.ancestorOrigins;
                h = location && location.origin;
                if (!c || 0 === c.length || !h) return !1;
                d = !1;
                for (var g, e = 0; e < c.length; e++)
                    if (g = c[e], h !== g) {
                        if (d) return !1;
                        d = !0;
                        h = g
                    } return d && 0 === b.search(c[c.length -
                    1]) ? {
                    url: b,
                    parentIsTop: !1
                } : !1
            };
            a.b.al = function(c, b) {
                b = b || a.b.aa();
                if (!b) return !1;
                var h = a.b.as(c, b);
                if (a.b.ar(h)) return a.d.h(6), {
                    url: h,
                    isCorrect: !1
                }
            };
            a.b.as = function(a, b) {
                var h;
                h = a && a.location && a.location.hostname;
                h = "string" !== typeof h ? !1 : h.match(/^([^\.]+\.)*(googlesyndication\.com|doubleclick\.net|adnxs\.com)$/) && a.location.href;
                if (!h || !b) return !1;
                var d = encodeURIComponent(b).replace(/[.*+^${}()|[\]\\]/g, "\\$&");
                return (h = h.match(new RegExp("[?&](?:url|referrer)=(" + d + "(?:%2F[^&]*|$))"))) ? decodeURIComponent(h[1]) :
                    !1
            };
            a.b.at = function() {
                if ("string" === typeof a.d.i) return a.d.i;
                var c = !1,
                    b, h = /^https?:\/\/(.*?)\/([^?#]*)/;
                a.d.e ? (c = window.location.hostname.replace("www.", ""), c += window.location.pathname) : (b = a.k.a(), b.parent === window.top && (c = b.document.referrer) && (b = h.exec(c)) && (c = b[1].replace("www.", "") + "/" + b[2]));
                "string" === typeof c && "/" === c.charAt(c.length - 1) && (c = c.substr(0, c.length - 1));
                return c
            };
            a.b.au = function() {
                var c;
                a.d.e ? c = 2 : (c = a.k.a(), c = c.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                return c
            };
            a.b.aa = function() {
                var a = location && location.ancestorOrigins;
                return a ? 0 === a.length ? !1 : a[a.length - 1] : !1
            };
            a.b.av = function() {
                var c, b = a.b.z(),
                    h = b && b.split("."),
                    d = h && h.length;
                3 <= d ? c = "co" === h[d - 2] || "com" === h[d - 2] ? h[d - 3] + "." + h[d - 2] + "." + h[d - 1] : h[d - 2] + "." + h[d - 1] : 2 == d && (c = h[d - 2] + "." + h[d - 1]);
                return c && decodeURIComponent(c) || decodeURIComponent(b)
            };
            a.b.aw = function(a) {
                if ("string" !== typeof a) return "";
                var b = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
                b && b[1] && (a = b[1]);
                return a
            };
            a.b.ax = function(a, b) {
                for (var h = [a], d = 1; d <= b; d++) h.push(a +
                    d), h.push(a - d);
                h = h[t.floor(t.random() * h.length)];
                d = t.floor(t.random() * h);
                return {
                    multiplier: h,
                    sample: 0 == d
                }
            };
            a.b.ay = function(c, b) {
                if (a.b.az()) {
                    var h = AB_SCAFFOLD.sampling.getMultiplier(),
                        d = AB_SCAFFOLD.sampling.inSample();
                    a.b.ba(h, d);
                    return {
                        multiplier: h,
                        sample: d
                    }
                }
                h = a.b.ax(c, b);
                a.b.ba(h.multiplier, h.sample);
                return h
            };
            a.b.bb = function() {
                return a.b.ay(a.h, a.i).sample
            };
            a.b.ba = function(c, b) {
                a.b.ay = function() {
                    return {
                        multiplier: c,
                        sample: b
                    }
                };
                a.b.bc() && AB_SCAFFOLD.sampling.set({
                    multiplier: b ? c : 0,
                    isActive: !!a.h
                })
            };
            a.b.bd = function() {
                var c = a.b.s();
                return 5 === c || 6 === c || 7 === c
            };
            a.b.be = function(c, b) {
                return -1 !== a.b.indexOf(c, b)
            };
            a.b.bf = function() {
                function a(c) {
                    if (!c) return "";
                    c = c.match(/[\d]+/g);
                    c.length = 3;
                    return c.join(".")
                }
                var b = !1,
                    h = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var d = navigator.plugins["Shockwave Flash"];
                    d && (b = !0, d.description && (h = a(d.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (b = !0, h = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)(b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) &&
                    d.enabledPlugin && d.enabledPlugin.description) && (h = a(d.enabledPlugin.description));
                else try {
                    d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = !0, h = a(d.GetVariable("$version"))
                } catch (g) {
                    try {
                        d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = !0, h = "6.0.21"
                    } catch (e) {
                        try {
                            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = !0, h = a(d.GetVariable("$version"))
                        } catch (m) {}
                    }
                }
                return b ? h : "0"
            };
            a.b.getElementsByClassName = function(a, b, h) {
                b = b || "*";
                h = h || document;
                if (h.getElementsByClassName) {
                    var d = [],
                        g =
                        h.getElementsByClassName(a);
                    if ("*" !== b) {
                        a = 0;
                        for (h = g.length; a < h; a++) {
                            var e = g[a];
                            e.tagName === b && d.push(e)
                        }
                        return d
                    }
                    return g
                }
                g = [];
                b = h.getElementsByTagName(b);
                h = f(a);
                e = b.length;
                for (a = 0; a < e; a++) d = b[a], h(d) && g.push(d);
                return g
            };
            a.b.bg = f;
            a.b.bh = function(a, b) {
                if (!a || !b) return !1;
                var h = new RegExp("(^| )" + b + "($| )");
                return a.className && a.className.match(h)
            };
            a.b.bi = function(a) {
                return new q - a.de
            };
            a.b.bj = function(a) {
                return a.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
            };
            a.b.bk =
                function(c, b, h) {
                    if (("undefined" === typeof h || !h) && c && (h = a.b.bl(c), !h)) return;
                    if (c && c.nodeType)
                        if ("undefined" === typeof Node) {
                            if (1 != c.nodeType) return
                        } else if (c.nodeType != Node.ELEMENT_NODE) return;
                    if (h.getComputedStyle) return h.getComputedStyle(c, "") && h.getComputedStyle(c, "")[b];
                    for (h = b.indexOf("-"); - 1 < h;) b = h == b.length - 1 ? b.substr(0, h) : b.substr(0, h) + b.charAt(h + 1).toUpperCase() + b.substr(h + 2), h = b.indexOf("-");
                    if (c.currentStyle) return c.currentStyle[b];
                    if (c.style) return c.style[b]
                };
            a.b.bm = function(c) {
                if (!c) return !1;
                var b = a.b.bk(c, "background-image");
                b || (b = a.b.bk(c, "backgroundImage"));
                var h;
                b && (h = (h = b.match("url\\((.*)\\)")) && h[1].replace(/\x22/g, ""));
                return h
            };
            a.b.bn = function(c, b, h) {
                if (!c) return [];
                var d = "boolean" === typeof h ? h : !1,
                    g = [c],
                    e = !1;
                a.b.forEach("number" === typeof b ? b : 50, function() {
                    if ((e = a.b.bo(c)) && 1 == e.nodeType) c = e, g.push(c);
                    else if (d && e && 9 == e.nodeType)
                        if ((e = a.k.b(c)) && 1 == e.nodeType) c = e, g.push(c);
                        else return !1;
                    else return !1
                });
                return g
            };
            a.b.bp = function(c, b) {
                var h = a.b.bn(c);
                return h && -1 !== a.b.indexOf(h,
                    b)
            };
            a.b.bo = function(a) {
                return a.parentNode || a.parentElement || !1
            };
            a.b.bq = function(c) {
                c = c || a.b.k();
                return !!/iPhone|iPod/.exec(c)
            };
            a.b.br = function(c) {
                c = c || a.b.k();
                return !(!/iPad/.exec(c) && !a.b.m(c))
            };
            a.b.bs = function() {
                var c = {};
                return function(b) {
                    if ("undefined" !== typeof c[b]) return c[b];
                    c[b] = null;
                    var h = function() {
                        var b = a.b.e([5, 1]),
                            c = a.b.e([19, 48, 34, 45, 45, 30, 43]),
                            h = a.b.e([15, 34, 39, 45, 30, 43, 30, 44, 45]),
                            m = a.b.e([0, 41, 41, 37, 30, 13, 30, 48, 44]),
                            d = a.b.e([8, 39, 44, 45, 26, 32, 43, 26, 38]),
                            g = a.b.e([24, 30, 37, 41]),
                            e = a.b.e([18,
                                39, 26, 41, 28, 33, 26, 45
                            ]);
                        return {
                            FB: "\\[" + b,
                            Twitter: c,
                            Pinterest: h,
                            AppleNews: m,
                            Instagram: d,
                            Yelp: g,
                            Snapchat: e
                        }
                    }();
                    a.b.forEach(a.b.bt(h), function(a) {
                        if ((new RegExp(h[a])).test(b)) return c[b] = a, !1
                    });
                    return c[b]
                }
            }();
            a.b.bu = function() {
                var c;
                return function() {
                    if ("undefined" !== typeof c) return c;
                    c = {
                        results: {
                            article: !1,
                            page_height: !1,
                            meta_properties: !1,
                            favicon: !1
                        },
                        meta_data: {
                            num_articles: 0,
                            page_height_ratio: null,
                            meta_property_matches: []
                        }
                    };
                    var b = a.d.g && a.d.g.document,
                        h = (b && b.getElementsByTagName("article")).length;
                    0 < h && (c.results.article = !0, c.meta_data.num_articles = h);
                    var h = a.d.j,
                        d = a.d.g && a.d.g.innerHeight,
                        h = h && d && h / d;
                    1.5 <= h && (c.results.page_height = !0, c.meta_data.page_height_ratio = h);
                    var h = b && b.getElementsByTagName("meta"),
                        g = {
                            "fb:app_id": 1,
                            "og:site_name": 1,
                            "og:type": 1,
                            "fb:page_id": 1,
                            "twitter:account_id": 1,
                            "twitter:site": 1
                        };
                    a.b.forEach(h, function(a) {
                        if ((a = a.getAttribute("property")) && g.hasOwnProperty(a)) return c.results.meta_properties = !0, c.meta_data.meta_property_matches.push(a), !1
                    });
                    b = b && b.getElementsByTagName("link");
                    a.b.forEach(b, function(a) {
                        if ("icon" === a.getAttribute("rel") && /favicon\./.test(a.getAttribute("href"))) return c.results.favicon = !0, !1
                    });
                    return c
                }
            }();
            a.b.bv = function() {
                var c = a.b.bu().results,
                    b;
                for (b in c)
                    if (c.hasOwnProperty(b) && c[b]) return !0;
                return !1
            };
            a.b.bw = function() {
                for (var c = [103, 46, 100, 111, 117, 98, 108, 101, 99, 108, 105, 99, 107, 46, 110, 101, 116], b = "", h = 0, d = c.length; h < d; h++) b += String.fromCharCode(c[h]);
                return (new RegExp("^[^.]+." + b)).test(a.b.z())
            };
            a.b.bx = function() {
                var c = a.d.g.screen;
                if (a.b.o()) {
                    var b;
                    "undefined" !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (b = c.width, c = c.height) : (b = c.height, c = c.width) : b = c = 0;
                    return {
                        w: b,
                        h: c
                    }
                }
                if (a.b.q()) {
                    b = a.d.g.devicePixelRatio;
                    var h = 1;
                    .05 > t.abs(c.width / a.d.g.innerWidth - b) && (h = b);
                    return {
                        w: c.width / h,
                        h: c.height / h
                    }
                }
                return {
                    w: c.width,
                    h: c.height
                }
            };
            a.b.by = function() {
                var a = null;
                "string" === typeof navigator.doNotTrack ? a = navigator.doNotTrack : "string" === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack : "string" === typeof window.doNotTrack &&
                    (a = window.doNotTrack);
                return !a || "1" !== a[0] && "yes" !== a ? !1 : !0
            };
            a.b.bz = function() {
                var c;
                return function() {
                    if ("undefined" === typeof c) {
                        var b = a.b.av();
                        if (!b) return !1;
                        var h = [a.f.b([39, 34, 28, 36, 72, 28, 40, 38]), a.f.b([39, 34, 28, 36, 35, 43, 72, 28, 40, 38])];
                        c = a.b.be(h, b)
                    }
                    return c
                }
            }();
            a.b.getAttribute = function(a, b) {
                return a[b] || a.getAttribute(b)
            };
            var e = [function(a) {
                if (!a || "IFRAME" !== a.nodeName) return !1;
                var b = a.offsetHeight;
                return isNaN(b) || 15 < b || "google_conversion_frame" !== a.name ? !1 : !0
            }];
            a.b.ca = function(c, b) {
                return "undefined" ===
                    typeof c || null === c || !1 === c || !a.b.cb(c) || c.nodeName && "IMG" == c.nodeName && !c.complete || a.b.filter(e, function(a) {
                        return a(c)
                    }).length || !0 === c[F] ? !1 : !0
            };
            a.b.cc = function(c, b, h) {
                a.l.a(b);
                !0 === h && b.aa && (b.aa[I] = void 0, b.aa[F] = void 0);
                !b.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (b.hasIframeListener = !0);
                b.components && b.components.splice(0, 1, c);
                b.aa = c;
                a.m.a.zaxs("adElementUpdate");
                a.b.cd(b.aa);
                a.l.b(b);
                b.periscopeManager && b.periscopeManager.rebuildPixelTargets(c, c.parentNode)
            };
            a.b.ce =
                function(a) {
                    return a.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
                };
            a.b.cf = function(c) {
                var b = [];
                a.b.forEach(c, function(c, d) {
                    var g = typeof c;
                    "number" == g ? b.push(a.b.ce(d) + ":" + a.b.ce(c + "")) : "string" == g ? b.push(a.b.ce(d) + ":" + a.b.ce('"' + c + '"')) : "undefined" == g ? b.push(a.b.ce(d) + ":" + a.b.ce("undefined")) : "boolean" == g ? b.push(a.b.ce(d) + ":" + a.b.ce(c ? "true" : "false")) : null === c ? b.push(a.b.ce(d) + ":" + a.b.ce("null")) : "object" != g && "function" != g || !c.toString || b.push(a.b.ce(d) + ":" + a.b.ce('"' + c.toString() +
                        '"'))
                }, null, !0);
                b.sort();
                return "{" + b.join(",") + "}"
            };
            a.b.cg = function(a) {
                var b = {};
                if ("string" != typeof a || "{" != a.charAt(0)) return !1;
                a = a.slice(1, -1).split(",");
                for (var h = 0; h < a.length; h++) {
                    var d = a[h].split(":");
                    d[1] = unescape(d[1]);
                    "true" == d[1] ? d[1] = !0 : "false" == d[1] ? d[1] = !1 : '"' == d[1].charAt(0) ? d[1] = d[1].slice(1, -1) : d[1] = "undefined" == d[1] ? void 0 : "null" == d[1] ? null : "NaN" == d[1] ? NaN : parseFloat(d[1]);
                    b[unescape(d[0])] = d[1]
                }
                return b
            };
            a.b.cb = function(c) {
                var b = c.offsetWidth,
                    h = c.offsetHeight;
                if ("function" === typeof a.b.ch &&
                    !a.b.ch(b, h) || a.b.w && h < a.b.w || a.b.x && b < a.b.x) return !1;
                a.b.forEach(a.b.bn(c, 3), function(a) {
                    var c = a.style && a.style.width,
                        d = a.style && a.style.height;
                    a && a.style && "hidden" == a.style.overflow && ("" != c || "" != d) && (a = parseFloat(c), d = parseFloat(d), b = !isNaN(a) && a < b ? a : b, h = !isNaN(d) && d < h ? d : h)
                });
                (c = a.b.ci(c)) && c.width * c.height < a.b.u && (b = c.width < b ? c.width : b, h = c.height < h ? c.height : h);
                return a.d.k() && .9 > b * h / (a.d.g.innerWidth * a.d.g.innerHeight) ? !1 : b * h >= a.b.u
            };
            var l = {};
            a.b.ci = function(c) {
                if (!c || !c.nodeName || "IMG" == !c.nodeName ||
                    !c.complete) return !1;
                var b = c.getAttribute("src");
                if (!b) return !1;
                if (l[b]) return l[b];
                try {
                    if ("undefined" !== typeof c.naturalHeight && "undefined" !== typeof c.naturalWidth) {
                        var h = {
                            width: c.naturalWidth,
                            height: c.naturalHeight
                        };
                        return l[c.src] = h
                    }
                } catch (d) {}
                return a.d.a && (a.d.a.src = b, a.d.a.a) ? (h = {
                    width: parseInt(a.d.a.b),
                    height: parseInt(a.d.a.c)
                }, l[b] = h) : !1
            };
            a.b.cj = function(a, b) {
                var h = !1,
                    d = b.body,
                    g = d && d.firstChild;
                d && g && (d.insertBefore(a, g), h = !0);
                return h
            };
            a.b.ck = function() {
                if (!a.d.l) {
                    var c = a.d,
                        b;
                    a: {
                        for (var h =
                                document.getElementsByTagName("script"), d = h.length - 1; - 1 < d; d--)
                            if ((b = h[d]) && b.src && b.src.indexOf && (-1 !== b.src.indexOf("turner763610601596/moatad.js") || -1 !== b.src.indexOf("turner763610601596%2Fmoatad.js")) && ("undefined" === typeof b[F] || !0 !== b[F])) {
                                b[F] = !0;
                                break a
                            } b = void 0
                    }
                    c.l = b
                }
                return a.d.l ? (a.d.l[F] = !0, a.d.l) : null
            };
            a.b.cl = function(a, b) {
                for (var h in b) b.hasOwnProperty(h) && (a[h] = b[h])
            };
            a.b.cm = function(a) {
                var b, h = /https:/i;
                if (a) b = h.test(a.src || a.href || "http:") ? "https:" : "http:";
                else try {
                    b = window.location.protocol
                } catch (d) {
                    a =
                        document.createElement("a"), a.href = "", b = a.protocol
                }
                return "https:" === b ? "https:" : "http:"
            };
            a.b.cn = function(a) {
                try {
                    return -1 !== (a.src || a.getAttribute("src")).indexOf("psd=1")
                } catch (b) {
                    return !1
                }
            };
            a.b.co = function(a) {
                for (var b = [], h = 0; h < a.length; h++) b.push(a[h]);
                return b
            };
            a.b.nextElementSibling = function(a) {
                if (a.nextElementSibling) return a.nextElementSibling;
                for (; a = a.nextSibling;)
                    if (1 === a.nodeType) return a
            };
            a.b.previousElementSibling = function(a) {
                if (a) {
                    if (a.previousElementSibling) return a.previousElementSibling;
                    for (var b = 0;
                        (a = a.previousSibling) && 1E3 > b;)
                        if (b++, a && 1 === a.nodeType) return a
                }
            };
            a.b.cp = function(a, b, h) {
                "undefined" !== typeof h && (a[b] = h)
            };
            a.b.cq = function(c) {
                return a.b.f(c) ? 0 === c.length : !0
            };
            a.b.filter = function(a, b) {
                for (var h = [], d = 0; d < a.length; d++) b(a[d]) && h.push(a[d]);
                return h
            };
            a.b.cr = function(a, b) {
                for (var h = [], d = 0; d < b.length; d++) h.push(a(b[d]));
                return h
            };
            a.b.cs = function(a, b) {
                for (var h = [], d = 0; d < b.length; d++) {
                    var g = a(b[d]);
                    null != g && h.push(g)
                }
                return h
            };
            a.b.reduce = function(c, b, h) {
                if (!a.b.h(c) || "function" !==
                    typeof b) return !1;
                h = h ? b(h, c[0]) : c[0];
                for (var d = 1; d < c.length; d++) h = b(h, c[d]);
                return h
            };
            a.b.indexOf = function(c, b) {
                if (!c) return -1;
                if (a.b.f(c)) {
                    for (var h = 0, d = c.length; h < d; h++)
                        if (c[h] === b) return h;
                    return -1
                }
                return "string" === typeof c ? b || "string" !== typeof b ? c.indexOf(b) : -1 : -1
            };
            a.b.lastIndexOf = function(c, b) {
                if (!c) return -1;
                if (a.b.f(c)) {
                    for (var h = c.length - 1; 0 <= h; h--)
                        if (c[h] === b) return h;
                    return -1
                }
                return "string" === typeof c ? "" === b ? -1 : c.lastIndexOf(b) : -1
            };
            a.b.ct = function(a, b) {
                if (a && b && b.childNodes) {
                    var h = b.childNodes;
                    0 < h.length ? b.insertBefore(a, h[0]) : b.appendChild(a)
                }
            };
            a.b.cu = function(c, b) {
                if (!c || !b) return !1;
                var h = a.b.cv(b);
                if (!h) return !1;
                if (a.b.hasChildNodes(h)) {
                    var d = h.childNodes[t.max(0, h.childNodes.length - 1)] || null;
                    h.insertBefore(c, d)
                } else h.appendChild(c);
                return h
            };
            a.b.cw = function(c, b, h) {
                if ("string" != typeof c || !b || !document) return !1;
                h = h || document.createElement("script");
                h.type = "text/javascript";
                b = a.b.cu(h, b);
                if (!b) return !1;
                h.src = c;
                return b
            };
            a.b.hasChildNodes = function(a) {
                return a && a.childNodes && 0 < a.childNodes.length
            };
            a.b.cv = function(c) {
                if (!c) return !1;
                if ("OBJECT" !== c.nodeName && "EMBED" !== c.nodeName) return c;
                c = a.b.bn(c);
                var b = !1;
                a.b.forEach(c, function(a) {
                    if (a && "OBJECT" !== a.nodeName && "EMBED" !== a.nodeName) return b = a, !1
                });
                return b
            };
            a.b.ai = function(a, b) {
                if ("undefined" === typeof a) return !1;
                for (var h = 0, d = b.length; h < d; h++)
                    if ("string" == typeof b[h]) {
                        try {
                            a = a[b[h]]
                        } catch (g) {}
                        if ("undefined" === typeof a) return !1
                    } return a
            };
            a.b.cx = function(a) {
                return u && "undefined" !== typeof a && u[a] ? u[a] : !1
            };
            a.b.cy = function(c) {
                if (!c || "object" !== typeof c ||
                    "number" !== typeof c.zr) return !1;
                var b = a.b.cx(c.zr);
                return b && b === c
            };
            a.b.cz = function(c, b) {
                for (var h = a.b.bn(c, 50, !0), d = 0; d < h.length; d++)
                    if (h[d] === b) return !0;
                return !1
            };
            a.b.da = function(c) {
                if (!c || !c.aa) return !1;
                if ("number" !== typeof c.ADAREA) {
                    var b, h;
                    if (c.isCompositeAd && c.components && 1 < c.components.length)
                        for (b = c.ADAREA = 0; b < c.components.length; b++) c.ADAREA += c.components[b].offsetWidth * c.components[b].offsetHeight;
                    else c.elementRect ? (b = c.elementRect.right - c.elementRect.left, h = c.elementRect.bottom - c.elementRect.top,
                        c.ADAREA = b * h) : c.ADAREA = c.aa.offsetWidth * c.aa.offsetHeight;
                    a.n.a() && a.n.realEstateMeasurements && (b = a.n.realEstateMeasurements.w, h = a.n.realEstateMeasurements.h, c.ADAREA = b * h)
                }
                return c.ADAREA
            };
            a.b.cd = function(c) {
                if (!(!c || c && c.CLIPCHECKINGTARGET)) {
                    var b = a.b.bn(c, 3),
                        h;
                    b && 0 < b.length && (a.b.forEach(b, function(a) {
                        if (a && a.style && a.style.clip) return h = a, !1
                    }), !h && c.style && c.style.clip && (h = c), h && (c.CLIPCHECKINGTARGET = h))
                }
            };
            var g = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            a.b.db = function(c) {
                c = c.match(g);
                var b = !1;
                c && (c = a.b.cr(function(a) {
                    return parseInt(a, 10)
                }, c), b = {
                    top: c[1],
                    right: c[2],
                    bottom: c[3],
                    left: c[4]
                });
                return b
            };
            a.b.dc = function() {
                var a = function() {
                    var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0,
                        c = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return a || c ? !document.elementFromPoint(a, c) : !0
                }();
                return function(b, h, d) {
                    if (!a) {
                        var g = d.defaultView || d.parentWindow || window;
                        b += g.pageXOffset;
                        h += g.pageYOffset
                    }
                    return d.elementFromPoint(b, h)
                }
            }();
            a.b.dd = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a,
                    b)
            };
            a.b.de = function(c) {
                if (!c || !c.style || !c.style.filter) return !1;
                c = c.style.filter.split(" ");
                var b = !1,
                    h;
                a.b.forEach(c, function(a) {
                    var c = a.match(/\d+/);
                    a.search(/opacity/) && c && 0 < c.length && (h = parseFloat(c.join("")), !1 === b || h < b) && (b = h)
                });
                return b
            };
            a.b.df = function(c, b) {
                var h;
                if (!c) return 100;
                if (b && c.style && "hidden" === c.style.visibility) return 0;
                h = c.style && c.style.opacity ? parseFloat(c.style.opacity) : a.b.de(c);
                return a.b.dg(h) ? h : 100
            };
            a.b.dh = function(a) {
                return a.backgroundColor ? (a = a.backgroundColor, "transparent" ===
                    a ? 0 : -1 !== a.indexOf("rgb") ? 4 > a.split(",").length ? 1 : parseFloat(a.split(",")[3].split(")")[0]) : 1) : -1
            };
            a.b.di = function(c, b) {
                var h = -1;
                if (a.d.g.getComputedStyle) {
                    var d = a.d.g.getComputedStyle(c);
                    if (!d) return h;
                    if (b && "hidden" === d.visibility || "collapse" === d.visibility || b && 0 === a.b.dh(d)) return 0;
                    h = parseFloat(d.opacity)
                }
                return h
            };
            a.b.dj = function(c, b, h) {
                if (!c || !c.aa) return !1;
                "undefined" === typeof c.parentNodeTree && (c.parentNodeTree = a.b.bn(c.aa.parentElement, 50, !0), b && c.parentNodeTree.push(c.aa));
                var d = 100,
                    g, e;
                a.b.forEach(c.parentNodeTree, function(b) {
                    g = a.b.df(b, h);
                    0 === g && (e = a.b.di(b, h), a.b.dg(e) && e >= g && (g = e));
                    g < d && (d = g);
                    if (0 === d) return !1
                });
                return d
            };
            a.b.dk = function(a, b, h) {
                return function() {
                    b.apply(h || null, a.concat(a.slice.call(arguments)))
                }
            };
            a.b.bl = function(a) {
                try {
                    var b = a && a.ownerDocument;
                    return b && (b.defaultView || b.parentWindow)
                } catch (h) {
                    return !1
                }
            };
            a.b.dl = function(c, b, h) {
                if (!c || !b) return !1;
                var d = [];
                "number" !== typeof h && (h = 50);
                for (var g = 0; g < h; g++)
                    if (b != b.parent) {
                        if (c = a.k.b(c, b)) d.push(c);
                        else break;
                        b = b.parent
                    } else break;
                return d
            };
            a.b.dm = function(a) {
                a = t.max(4, a);
                return ((1 + t.random()) * t.pow(16, a) | 0).toString(16).substring(0, a)
            };
            a.b.dn = function() {
                var c = a.b.dm;
                return c(4) + "-" + c(4) + "-" + c(4) + "-" + c(4)
            };
            a.b.a = function(a) {
                window && window.clearTimeout && window.clearTimeout(a)
            };
            a.b.b = function(a) {
                window && window.clearInterval && window.clearInterval(a)
            };
            var d = function(c, b) {
                if (a.b.j(b.toString)) return b.toString();
                if (a.b.j(c && c.Function.prototype.toString)) return b.toString = c.Function.prototype.toString, b.toString();
                var h = a.d.g !==
                    c && a.d.g && a.d.g.Function.prototype.toString;
                if (a.b.j(h)) return b.toString = h, b.toString();
                if (a.d.m && 8 >= a.b.s()) return b.toString();
                var h = c || window,
                    d = h.document.createElement("IFRAME");
                d.style.display = "none";
                d.style.width = "0px";
                d.style.height = "0px";
                d.width = "0";
                d.height = "0";
                a.b.cu(d, h.document.documentElement);
                d.contentWindow && (b.toString = d.contentWindow.Function.prototype.toString);
                var g = b.toString();
                h.document.documentElement.removeChild(d);
                return g
            };
            a.b.toString = function(c, b) {
                b = b || a.d.g;
                var h;
                try {
                    h =
                        d(b, c)
                } catch (g) {
                    h = c.toString()
                }
                return h
            };
            a.b["do"] = function(c, b, h) {
                c = a.b.toString(c, h);
                if (a.d.n()) h.eval("(" + c + ")(" + b + ")");
                else if (a.d.o(h))(new h.Function("(" + c + ")(" + b + ")"))();
                else {
                    var d = h.document.createElement("script");
                    d.type = "text/javascript";
                    d.text = "(" + c + ")(" + b + ")";
                    a.b.cu(d, h.document.body)
                }
            };
            a.b.ah = function(c, b, h, d) {
                function g(a, b) {
                    try {
                        return d(b[a])
                    } catch (c) {}
                }
                var e, m;
                if ("string" !== typeof c) return !1;
                "function" !== typeof d && (d = function(a) {
                    return a
                });
                e = window;
                m = g(c, e);
                if (!m) {
                    b = a.k.c(e, "number" ===
                        typeof b ? b : 20);
                    if (!b) return !1;
                    for (var k = 0, l = b.length; k < l && (e = b[k], m = g(c, e), "undefined" === typeof m); k++);
                }
                return h ? [m, e] : m
            };
            a.b.dp = function(a, b) {
                var h = a.toString();
                b && (h = "(" + h + "(" + b + "))");
                return "(function(){try{return(" + h + ")()}catch(e){return false}})()"
            };
            a.b.dq = function() {
                if (!a.d.p) return !1;
                var c = a.b.k(),
                    b = c && "string" === typeof c,
                    h = /Version\/(\d*)/,
                    d = /CPU.*OS\s(\d*)_/,
                    h = (h = b && c.match(h)) && 1 < h.length ? parseInt(h[1], 10) : !1;
                "number" !== typeof h && (h = (h = b && c.match(d)) && 1 < h.length ? parseInt(h[1], 10) : !1);
                return h
            };
            a.b.bt = function(a) {
                if ("object" === typeof a) {
                    if (Object.keys) return Object.keys(a);
                    var b = [],
                        h;
                    for (h in a) b.push(h);
                    return b
                }
            };
            a.b.every = function(a, b) {
                if ("object" !== typeof a || !a || "function" !== typeof b) return !1;
                for (var h in a)
                    if (a.hasOwnProperty(h) && !0 !== b(a[h])) return !1;
                return !0
            };
            a.b.dr = function(a, b) {
                b = b || {
                    width: "1px",
                    height: "1px",
                    style: {
                        left: "-9999px",
                        top: "-9999px",
                        position: "absolute"
                    }
                };
                for (var h in b)
                    if (b.hasOwnProperty(h))
                        if ("style" === h)
                            if ("string" === typeof b[h]) a.setAttribute(h, b[h]);
                            else
                                for (var d in b[h]) b[h].hasOwnProperty(d) &&
                                    (a[h][d] = b[h][d]);
                else a[h] = b[h]
            };
            a.b.some = function(a, b) {
                if ("object" !== typeof a || !a || "function" !== typeof b) return !1;
                for (var h in a)
                    if (a.hasOwnProperty(h) && !0 === b(a[h])) return !0;
                return !1
            };
            a.b.ds = function(a) {
                return void 0 === a || null === a || !1 === a || "" === a ? !0 : !1
            };
            a.b.dt = function(c, b, h) {
                return a.b.dg(c) && a.b.dg(b) && a.b.dg(h) ? t.abs(c - b) <= h : !1
            };
            a.b.dg = function(a) {
                return "number" === typeof a && !isNaN(a)
            };
            a.b.du = function(c, b) {
                if (!a.b.f(b)) return !1;
                var h = 0;
                a.b.forEach(b, function(a) {
                    a === c && h++
                });
                return h
            };
            a.b.ar =
                function(a) {
                    return "string" !== typeof a ? !1 : /^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(a)
                };
            a.b.dv = function(c, b) {
                return a.b.every(c, function(c) {
                    return a.b.be(c.values, b[c.lookup] || "")
                })
            };
            a.b.dw = function(c, b, h) {
                var d = h && a.o.a(h.zr),
                    g = d && h.video && h.video.getCounter(d.getLabel()),
                    e = h && h.video && h.video.getVideoScore(d, g);
                return c.replace(/{{([^}]*)}}/g, function(c, d) {
                    switch (d) {
                        case "tagStartTime":
                            return a.d.q;
                        case "initW":
                            return h && h.get_width && h.get_width() || "";
                        case "initH":
                            return h && h.get_height && h.get_height() ||
                                "";
                        case "initSRE":
                            return h && h.getScreenRealEstate && h.getScreenRealEstate() || "";
                        case "mvs":
                            return parseInt(e / 100) || "";
                        default:
                            return "undefined" !== typeof b[d] ? b[d] : ""
                    }
                })
            };
            a.b.dx = function(c, b) {
                if ("string" !== typeof c || "string" !== typeof b) return c;
                if (!c.match(b)) {
                    var h = c.lastIndexOf("_BETA");
                    a.b.az() && 0 < h && (c = c.slice(0, h), b += "_BETA");
                    c += b
                }
                return c
            };
            a.b.dy = function() {
                return "undefined" === typeof AB_SCAFFOLD ? !1 : 0 !== L
            };
            a.b.bc = function() {
                return a.b.dy() && 1 === L
            };
            a.b.az = function() {
                return a.b.dy() && 2 === L
            };
            a.b.dz =
                function() {
                    return "undefined" !== typeof L && 2 === L
                };
            a.b.ea = function() {
                return "undefined" === typeof AB_SCAFFOLD ? !0 : 1 === L || 0 === L
            };
            a.b.eb = function(a) {
                var b = "undefined" !== typeof a.x ? a.x : a.left;
                if ("number" === typeof b) {
                    var h = "undefined" !== typeof a.y ? a.y : a.top;
                    if ("number" === typeof h) {
                        var d, g, e;
                        d = a.w || a.width;
                        if ("number" === typeof d && 0 != d) e = b + d;
                        else if (e = "undefined" !== typeof a.r ? a.r : a.right, "number" === typeof e && e > b) d = e - b;
                        else return;
                        g = a.h || a.height;
                        if ("number" === typeof g && 0 != g) a = h + g;
                        else if (a = "undefined" !== typeof a.b ?
                            a.b : a.bottom, "number" === typeof a && h < a) g = a - h;
                        else return;
                        return {
                            x: b,
                            y: h,
                            w: d,
                            h: g,
                            r: e,
                            b: a
                        }
                    }
                }
            };
            a.b.ec = function(c, b, d) {
                if ("number" !== typeof b || 0 >= b || isNaN(b)) b = c.length;
                if ("number" !== typeof d || 0 >= d || isNaN(d)) d = t.min(c.length, 50);
                c = a.b.cs(a.b.eb, c);
                c.sort(function(a, b) {
                    return b.w * b.h - a.w * a.h
                });
                c = c.slice(0, d);
                var g = [];
                a.b.forEach(c, function(c) {
                    var d = c.x,
                        m = c.y,
                        h = c.r,
                        e = c.b,
                        k = !0;
                    a.b.forEach(g, function(a) {
                        var b = a.y,
                            c = a.r,
                            g = a.b;
                        d >= a.x && m >= b && h <= c && e <= g && (k = !1);
                        return k
                    }, g);
                    k && g.push(c);
                    return g.length < b
                });
                return g
            }
        })(p);
        (function(a) {
            a.k = {};
            a.k.d = function(a) {
                try {
                    var f = typeof a.location.toString;
                    if ("undefined" === f || "unknown" === f) return !0;
                    var k = typeof a.document;
                    if ("undefined" === k || "unknown" === k) return !0;
                    var e = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                    return "number" !== typeof(a.screenX || a.screenLeft || 0) || "number" !== typeof e ? !0 : !1
                } catch (l) {
                    return !0
                }
            }
        })(p);
        (function(a) {
            a.k.e = function(n) {
                if (!n) return null;
                try {
                    if (n.moatHostileIframe) return null;
                    var f = n.getAttribute("src");
                    if (f &&
                        f.slice && "http" === f.slice(0, 4) && a.b.bj(f) != a.b.bj(Na.location.toString())) return n.moatHostileIframe = !0, null;
                    var k = n && (n.contentDocument || n.contentWindow && n.contentWindow.document);
                    if (k && "string" === typeof k.location.toString()) return k;
                    n.moatHostileIframe = !0;
                    return null
                } catch (e) {
                    return n.moatHostileIframe = !0, null
                }
            };
            a.k.b = function(n, f) {
                f = f || a.b.bl(n);
                try {
                    return f && f.frameElement
                } catch (k) {
                    return !1
                }
            };
            a.k.f = function(n, f) {
                var k;
                a.b.forEach(n.getElementsByTagName("iframe"), function(a) {
                    if (a && a.contentWindow &&
                        a.contentWindow == f) return k = a, !1
                });
                return k
            };
            a.k.g = function(n) {
                if (n = a.k.b(n)) try {
                    return n.parentNode
                } catch (f) {}
                return null
            };
            a.k.h = function(n, f) {
                if (!n) return !1;
                var k = 0,
                    e = [];
                for (f = f || 10; k < f;)
                    if (k++, n = a.k.b(n)) e.push(n);
                    else return e
            };
            a.k.c = function(n, f) {
                if (!n) return !1;
                var k = 0,
                    e = [n],
                    l;
                for (f = f || 10; k < f;) {
                    k++;
                    try {
                        if (n = (l = n.frameElement) && a.b.bl(l), l && n && !a.k.d(n)) e.push(n);
                        else return e
                    } catch (g) {
                        break
                    }
                }
                return e
            };
            a.k.i = function(n, f, k) {
                function e(k, g, d) {
                    var c = [];
                    k && c.push(k);
                    d = d || 0;
                    if (10 < d || !k || !k.frames) return c;
                    var b;
                    try {
                        b = isNaN(k.frames.length) ? 100 : k.frames.length
                    } catch (f) {
                        b = 100
                    }
                    for (var h = 0; h < b; h++) try {
                        try {
                            if (void 0 == k.frames[h]) break
                        } catch (f) {
                            break
                        }
                        g && !a.k.j(k.frames[h]) ? c.push(k.frames[h]) : c = c.concat(e(k.frames[h], g, d + 1))
                    } catch (f) {
                        break
                    }
                    return c
                }
                return e(n, f, k)
            };
            a.k.k = function(a, f) {
                f = "number" == typeof f && 0 < f ? f : 15;
                var k = [],
                    e;
                try {
                    if (a) {
                        e = a.top;
                        for (var l = 0; l < f; l++)
                            if ((a = a.parent) && a != a.top) k.push(a);
                            else break;
                        k.push(e)
                    }
                } catch (g) {
                    return []
                }
                return k
            };
            a.k.l = [];
            a.k.j = function(n) {
                for (var f, k = 0, e = a.k.l.length; k <
                    e; k++) a.k.l[k].win == n && (f = a.k.l[k]);
                if (!f) {
                    f = {
                        win: n,
                        friendly: !1
                    };
                    try {
                        n.document && (f.friendly = !0)
                    } catch (l) {}
                }
                return f.friendly
            };
            a.k.m = function(n, f, k) {
                n = a.k.c(n).pop();
                n = a.k.i(n, !0);
                for (var e = 0, l = n.length; e < l; e++)
                    if (n[e] == f) {
                        if (k && f.parent && a.k.d(f.parent)) break;
                        return !0
                    } return !1
            };
            a.k.a = function() {
                if (a.d.e) return window.top;
                for (var n = 0, f = window; 50 > n;) {
                    n++;
                    if (f === window.top || a.k.d(f.parent)) break;
                    f = f.parent
                }
                return f
            }
        })(p);
        (function(a) {
            function n(a) {
                return function() {
                    var e = !1;
                    return function(l) {
                        try {
                            return a &&
                                a.apply ? a.apply(null, arguments) : a(l)
                        } catch (f) {
                            if (!e) {
                                e = !0;
                                var g = (new q).getTime();
                                this["Moat#ETS"] || (this["Moat#ETS"] = g);
                                this["Moat#EMC"] || (this["Moat#EMC"] = 0);
                                var d = 36E5 <= g - this["Moat#ETS"],
                                    c = "";
                                try {
                                    c = a.toString()
                                } catch (w) {
                                    c = "failed"
                                }
                                c = f.name + " in closure (cb): " + f.message + ", stack=" + f.stack + ", \ncb=" + c + "\n";
                                if (!d && 10 > this["Moat#EMC"]) {
                                    this["Moat#EMC"]++;
                                    try {
                                        var b = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                                            h = b ? "" : document.referrer,
                                            v = "undefined" !== typeof AB_SCAFFOLD &&
                                            2 === AB_SCAFFOLD.type,
                                            x = "undefined" === typeof K ? v ? "TURNERDFP1_BETA" : "TURNERDFP1" : K,
                                            A = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(x) + "&ac=1&k=" + escape(c) + "&ar=" + escape("da8ed23e15-clean") + "&iw=" + escape("488ebc3") + "&j=" + escape(h) + "&cs=" + (new q).getTime();
                                        if (b) omidNative.sendUrl(A);
                                        else {
                                            var m = new Image(1, 1);
                                            m.src = A
                                        }
                                    } catch (w) {}
                                } else if (d) {
                                    this["Moat#EMC"] = 1;
                                    this["Moat#ETS"] = g;
                                    try {
                                        h = (b = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ?
                                            "" : document.referrer, v = "undefined" !== typeof AB_SCAFFOLD && 2 === AB_SCAFFOLD.type, x = "undefined" === typeof K ? v ? "TURNERDFP1_BETA" : "TURNERDFP1" : K, A = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(x) + "&ac=1&k=" + escape(c) + "&ar=" + escape("da8ed23e15-clean") + "&iw=" + escape("488ebc3") + "&j=" + escape(h) + "&cs=" + (new q).getTime(), b ? omidNative.sendUrl(A) : (m = new Image(1, 1), m.src = A)
                                    } catch (w) {}
                                }
                            }
                        }
                    }
                }()
            }
            a.p = {};
            var f = {};
            a.p.a = f;
            a.p.b = function(k, e) {
                if (!k || "string" !== typeof e || !k[e] || k ==
                    window) return !1;
                if ("string" === typeof k.nodeName && ("OBJECT" === k.nodeName || "EMBED" === k.nodeName)) {
                    var f = a && a.c && a.c[e];
                    if (f && f !== k[e]) return f
                }
                return !1
            };
            a.p.c = function(k, e, l, g) {
                var d, c, b = !1;
                "touchstart" === e && a.d.r && (b = {
                    passive: !0
                });
                g ? f[e + g] ? l = f[e + g] : (l = n(l), f[e + g] = l) : l = n(l);
                if (k.addEventListener) g = "addEventListener", d = "";
                else if (k.attachEvent) g = "attachEvent", d = "on";
                else return !1;
                if (c = a.p.b(k, g)) try {
                    c.call(k, d + e, l, b)
                } catch (h) {
                    k[g](d + e, l, b)
                } else if (k && g && k[g]) try {
                    k[g](d + e, l, b)
                } catch (h) {
                    return !1
                }
            };
            a.p.d =
                function(k, e, l, g) {
                    var d, c;
                    l = g ? f[e + g] : l;
                    delete f[e + g];
                    if (!k) return !1;
                    if (k.removeEventListener) g = "removeEventListener", d = "";
                    else if (k.detachEvent) g = "detachEvent", d = "on";
                    else return !1;
                    if (c = a.p.b(k, g)) try {
                        c.call(k, d + e, l, !1)
                    } catch (b) {
                        k[g](d + e, l, !1)
                    } else try {
                        k[g](d + e, l, !1)
                    } catch (b) {}
                };
            a.p.e = function(k, e) {
                k = n(k);
                var f;
                window && window.setInterval && (f = window.setInterval(k, e), 1 == f && (a.b.b(f), f = window.setInterval(k, e)), ra.push(f));
                return f
            };
            a.p.f = function(k, e) {
                var f, g = n(function(a) {
                    delete ea[f];
                    return k && k.apply ?
                        k.apply(null, arguments) : k(a)
                });
                window && window.setTimeout && (f = window.setTimeout(g, e), 1 == f && (a.b.a(f), f = window.setTimeout(g, e)), ea[f] = !0);
                return f
            };
            a.p.g = function(k, e, f, g) {
                if (!g) return !1;
                g += "";
                E[g] && a.b.a(E[g].tid);
                E[g] = {};
                E[g].callback = n(k);
                E[g].params = e;
                E[g].interval = f;
                E[g].tid = a.p.f(a.p.h(g), f)
            };
            a.p.h = function(k) {
                return function() {
                    if (!E || !E[k]) return !1;
                    var e = E[k].callback(E[k].params);
                    if ("boolean" === typeof e && !1 === e) return a.b.a(E[k].tid), E[k] = !1;
                    E[k].tid = a.p.f(a.p.h(k), E[k].interval)
                }
            };
            a.p.i = function(k) {
                E[k] &&
                    (a.b.a(E[k].tid), E[k] = !1)
            };
            a.p.j = function() {
                return E
            };
            a.p.k = function(k, e, f, g) {
                var d = 0,
                    c = function() {
                        d += 1;
                        !0 !== k() && (d < e ? a.p.f(c, f) : "function" === typeof g && g())
                    };
                c()
            };
            a.p.l = n
        })(p);
        (function(a) {
            function n() {
                if ("number" === typeof a.b.r()) return !1;
                var k = a.b.k();
                return (k = k && k.match(/Chrom(e|ium)\/([0-9]+)\./)) ? parseInt(k[2], 10) : !1
            }
            a.d = {};
            var f = a.k.d(window.parent);
            a.d.s = window != window.parent;
            a.d.t = a.d.s && !f;
            a.d.e = f ? !1 : !a.k.d(window.top);
            a.d.g = a.d.e ? window.top : a.d.t ? window.parent : window;
            a.d.u = function(a) {
                var e,
                    f, g, d = 0,
                    c = 0;
                try {
                    e = a.document;
                    f = e.documentElement;
                    g = e.body;
                    var b = document.getElementById("mianahwvc");
                    if (b) return b.getBoundingClientRect();
                    "undefined" !== typeof a.innerWidth ? (d = a.innerWidth, c = a.innerHeight) : "CSS1Compat" === e.compatMode && 5 !== e.documentMode || !g || "undefined" === typeof g.clientWidth ? f && "undefined" !== typeof f.clientWidth && (d = f.clientWidth, c = f.clientHeight) : (d = g.clientWidth, c = g.clientHeight)
                } catch (h) {}
                return {
                    width: d,
                    height: c,
                    left: 0,
                    right: d,
                    top: 0,
                    bottom: c
                }
            };
            a.d.v = function() {
                var k = a.q && a.q.a();
                if (k) return k;
                if (!a.d.g || !a.d.g.screen) return null;
                k = a.d.g.screen;
                return {
                    width: k.width,
                    height: k.height,
                    availWidth: k.availWidth,
                    availHeight: k.availHeight
                }
            };
            a.d.w = function() {
                var k = a.d.g;
                if (!k) return !1;
                try {
                    var e = k.document && k.document.body,
                        f = k.document && k.document.documentElement
                } catch (d) {}
                try {
                    var g = a.d.v();
                    g && (a.d.x = g.availWidth, a.d.y = g.availHeight, a.d.z = g.width, a.d.aa = g.height)
                } catch (d) {
                    a.d.x = a.d.x || 0, a.d.y = a.d.y || 0, a.d.z = a.d.z || 0, a.d.aa = a.d.aa || 0
                }
                g = a.d.u(k);
                a.d.ab = g.width;
                a.d.ac = g.height;
                try {
                    a.d.ad =
                        k.outerWidth || k.document && k.document.body && k.document.body.offsetWidth || 0, a.d.ae = k.outerHeight || k.document && k.document.body && k.document.body.offsetHeight || 0
                } catch (d) {
                    a.d.ad = 0, a.d.ae = 0
                }
                e && f && (a.d.j = t.max(e.scrollHeight, e.offsetHeight, f.clientHeight, f.scrollHeight, f.offsetHeight), a.d.af = e.scrollTop || f.scrollTop || k.pageYOffset || 0)
            };
            a.d.w();
            a.d.b = 0 <= String(Function.prototype.toString).indexOf("[native code]");
            a.d.ag = -1 !== a.b.k().toLowerCase().indexOf("firefox");
            a.d.m = a.b.t();
            a.d.ah = !!window.chrome && a.b.j(window.chrome.csi,
                !0);
            a.d.ai = !!("opr" in window && "addons" in window.opr && a.b.j(window.DetachedViewControlEvent));
            a.d.aj = !a.d.ah && Error.propertyIsEnumerable("captureStackTrace") && void 0 !== window.onorientationchange;
            a.d.ak = a.d.ai || a.d.aj;
            a.d.al = a.d.ah && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore);
            a.d.am = a.d.ah && !a.d.ak && void 0 !== window.onorientationchange;
            a.d.an = a.d.al || a.d.am;
            a.d.ao = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) &&
                !document.documentMode && !!window.StyleMedia;
            a.d.p = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") || window.HTMLVideoElement && window.HTMLVideoElement.prototype && "webkitWirelessVideoPlaybackDisabled" in window.HTMLVideoElement.prototype;
            a.d.ap = function() {
                var k;
                return function() {
                    if ("undefined" !== typeof k) return k;
                    k = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    a.b.p() ? (k.isInApp = 1, k.env = "tvOS") : a.b.o() ? (k.isInApp = 1, k.env = "iOS") : a.b.q() && (k.isInApp = 1, k.env = "Android");
                    return k
                }
            }();
            a.d.aq = n;
            a.d.ar =
                a.d.al && 40 <= n();
            a.d.as = function() {
                if (!a.d.ar) return !1;
                var k = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                if (navigator && navigator[k]) return !0;
                if (66 > n()) {
                    var k = a.f.b([28, 33, 43, 40, 38, 30]),
                        e = a.f.b([43, 46, 39, 45, 34, 38, 30]),
                        f = a.f.b([28, 40, 39, 39, 30, 28, 45]);
                    return "undefined" !== typeof window[k] && !(window[k] && window[k][e] && window[k][e][f])
                }
                return !1
            };
            a.d.at = function() {
                if (a.f.c !== a.f.d.toString()) return !1;
                var k = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]);
                return window && window.navigator && window.navigator[k]
            };
            a.d.au = function() {
                if (a.f.c !==
                    a.f.e.toString()) return !1;
                var k = a.f.b([26, 37, 30, 43, 45]),
                    e = a.f.b([28, 40, 39, 31, 34, 43, 38]),
                    f = a.f.b([41, 43, 40, 38, 41, 45]);
                return !a.d.ap().isInApp && a.d.p && a.d.b && !a.b.j(window[k], !0) && !a.b.j(window[e], !0) && !a.b.j(window[f], !0)
            }
        })(p);
        (function(a) {
            function n(b, m) {
                if (a.d.d() && a.d.br || !m && !a.d.ap().isInApp) return !1;
                var d = c;
                return (c = d = d && d[0] ? d : a.b.ah("mraid", 20, !0)) ? b ? d : d[0] : !1
            }

            function f(a) {
                return a && a.getVendor && "function" === typeof a.getVendor && a.getVendor()
            }

            function k(a) {
                return a && a.getVendorVersion && "function" ===
                    typeof a.getVendorVersion && a.getVendorVersion() + ""
            }

            function e(b, c) {
                b.qmrv(function(b) {
                    c.preventTryFindingAdAgain = !0;
                    a.u.a(c);
                    a.t.c(c)
                }, c.MMAK_ID)
            }

            function l(b, c) {
                a.t.a() && b.hgen && b.hgen(function(b) {
                    b = "click" !== b ? 23 : 3;
                    c && (c.dm || (c.counters && c.counters.strictDwell && c.counters.strictDwell.tCur && (c.cb = c.counters.strictDwell.tCur), c.dm = 1), data = {}, data.e = b, data.q = c.aq[b]++, a.v.a(c, data))
                }, c.MMAK_ID)
            }

            function g() {
                var b = a.d.bg,
                    c = 53 <= a.d.aq();
                return c ? c : b && -1 < b.search("Spotify")
            }
            a.d.av = "26";
            a.b.dz() && (a.d.av +=
                "_beta");
            a.d.aw = "MoatSuperV";
            a.d.ax = "-";
            a.d.h = function(b) {
                "string" !== typeof a.d.i && (a.d.ax = b)
            };
            a.d.ay = {};
            a.d._sdrc = 16;
            a.d._sprg = {
                4750074452: 9,
                4541123206: 32,
                4541113588: 16,
                38274757: 2,
                38600317: 32,
                38615797: 8,
                38724517: 28,
                38909197: 4,
                54179917: 32,
                38756197: 19,
                4531997674: 32,
                38833597: 30,
                47469637: 32,
                38723797: 32,
                38318677: 5,
                87291157: 10,
                38386957: 32,
                53770237: 32,
                38833477: 32,
                39030517: 6,
                4610110033: 32
            };
            a.d.az = a.d.aw + a.d.av;
            a.d.ba = 0;
            a.d.bb = window && window["Moat#G" + a.d.av] || {};
            a.d.bc = "Moat#G" + a.d.av;
            window[a.d.bc] = a.d.bb;
            a.d.bb.a || (a.d.bb.a = t.floor(t.random() * t.pow(10, 12)));
            a.d.bd = t.floor(t.random() * t.pow(10, 12));
            var d = a.b.aj();
            a.d.be = d.url;
            a.d.bf = d.isCorrect;
            d = a.p.l(function() {
                return navigator.userAgent
            });
            a.d.bg = d();
            "string" !== typeof a.d.bg && (a.d.bg = "");
            a.d.c = function() {
                return a.a.f
            };
            a.d.bh = function() {
                var b;
                !a.d.c() || "undefined" === typeof omidNative || "function" !== typeof omidNative.setInterval && "function" !== typeof omidNative.clearInterval && "function" !== typeof omidNative.setTimeout && "function" !== typeof omidNative.clearTimeout &&
                    "function" !== typeof omidNative.downloadJavaScriptResource && "function" !== typeof omidNative.sendUrl || (b = omidNative);
                return function() {
                    return b
                }
            }();
            a.d.bi = function() {
                return !!window.omid3p && "undefined" !== typeof window.omid3p.customNative
            };
            a.d.bj = function() {
                var b = !1;
                if ("undefined" !== typeof a.d.bh()) b = !0;
                else try {
                    var c = a.d.g.top.frames,
                        b = !(!c.omid_v1_present && !c.omid)
                } catch (m) {
                    b = !1
                }
                return b
            };
            a.d.d = function() {
                var b = a.d.bj() || a.d.bi();
                return function() {
                    return b
                }
            }();
            a.d.bk = function() {
                var b;
                return function(c) {
                    b ||
                        (b = {}, a.q.b(b));
                    return b[c]
                }
            }();
            a.d.bl = function() {
                return function() {}
            }();
            a.d.bm = function() {
                return function() {
                    return !1
                }
            }();
            a.d.q = (new q).getTime();
            a.d.bn = !0;
            a.d.bo = !1;
            a.d.bp = !1;
            a.d.bp = !0;
            a.d.bq = function(a, b) {
                a = a.split(".");
                b = b.split(".");
                for (var c = 0; 3 > c; c++) {
                    var m = parseInt(a[c]),
                        d = parseInt(b[c]);
                    if (m && isNaN(d)) return 1;
                    if (d && isNaN(m)) return 0;
                    if (m > d) return 1;
                    if (d > m) return 0
                }
                return 2
            };
            var c, b = !1;
            a.d.bs = n;
            a.d.bt = function() {
                return !!n()
            };
            a.d.bu = function() {
                var a = n(!0);
                return a && a[1]
            };
            a.d.bv = function() {
                if (!a.d.ap().isInApp) return !1;
                var c = n(),
                    m;
                if (m = c)
                    if (c)
                        if (b) m = !0;
                        else {
                            m = "";
                            a.b.o() ? m = "ios" : a.b.q() && (m = "android");
                            var d = {
                                AdMarvel: {
                                    ios: "340",
                                    android: "270"
                                },
                                AdColony: {
                                    ios: "3.0",
                                    android: "3.0"
                                }
                            } [f(c)];
                            m = d ? d[m] : null;
                            d = k(c);
                            if (m = m ? 0 !== a.d.bq(d, m) : !1) b: {
                                if (c && c.isViewable && "function" === typeof c.isViewable) try {
                                    m = "undefined" !== typeof c.isViewable();
                                    break b
                                } catch (h) {}
                                m = !1
                            }
                            m = b = m
                        }
                else m = !1;
                return m
            };
            a.d.bw = a.d.bv;
            a.d.bx = a.d.bv;
            a.d.by = function() {
                var a = n();
                return a && f(a)
            };
            a.d.bz = function() {
                var a = n();
                return a && k(a)
            };
            a.d.ca = function() {
                if (a.d.bt() &&
                    a.d.bv() && a.p && a.p.g) {
                    var b = "___mraid_loop___" + (new q).getTime();
                    a.b.ai(a.d.bu(), ["mraid", "isViewable"]) && a.p.g(function() {
                        return n().isViewable() ? !1 : !0
                    }, {}, 300, b)
                }
            };
            a.d.cb = function() {
                return !1
            };
            var h = function() {
                var b = function(b) {
                        if (a.d.ap().isInApp) return !1;
                        var c = a.r && a.r.a();
                        if (a.d.cc || c || a.d.cd()) return a.d.cc || c || a.d.cd(), !1;
                        b = a.b.ai(b, ["$sf"]);
                        if (!b) return !1;
                        var m = b.ext;
                        b = m && m.geom;
                        var c = [
                                ["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")
                            ],
                            d, h = !1;
                        if (m && b && "function" === typeof b) try {
                            if ((b =
                                    b()) && b.win) {
                                if (a.b.forEach(b.win, function(a) {
                                        if (a && ("number" === typeof a || "string" === typeof a) && 0 !== parseFloat(a, 10)) return h = !0, !1
                                    }), !h) return !1
                            } else return !1;
                            if (b.par) return !0;
                            for (var m = 0, g = c.length; m < g; m++) {
                                d = c[m][0];
                                for (var e = 1, k = c[m].length; e < k; e++)
                                    if ("undefined" === typeof b[d][c[m][e]]) return !1
                            }
                            return !0
                        } catch (f) {}
                        return !1
                    },
                    c, m, d, h;
                a.d.ce = function() {
                    if (h) return !0;
                    c = window;
                    m = document;
                    h = b(c);
                    d = !(!h && !c.$sf);
                    if (!h && a.d.t)
                        for (var g = 0; 20 > g && !h; g++) {
                            var e = a.k.b(m.body);
                            if (!1 !== e && !e) break;
                            m = (c = a.b.bl(e)) &&
                                c.document;
                            h = h || b(c);
                            d = d || h || c.$sf
                        }
                    return h
                };
                a.d.cf = function() {
                    return a.d.ce() && c
                };
                a.d.cg = function() {
                    "undefined" === typeof h && a.d.ce();
                    return d
                }
            };
            a.d.ch = !1;
            a.d.ci = !1;
            a.d.cj = null;
            a.d.cf = function() {
                h();
                return a.d.cf()
            };
            a.d.cg = function() {
                h();
                return a.d.cg()
            };
            a.d.ce = function() {
                h();
                return a.d.ce()
            };
            var v = function() {
                var b = function(b) {
                        return a.d.k() ? !1 : a.b.ai(b, ["context", "observeIntersection"]) ? !0 : !1
                    },
                    c = window,
                    m = document,
                    d = b(c),
                    h = !(!d && !c.context);
                if (!d && a.d.t)
                    for (var g = 0; 20 > g && !d; g++) {
                        m = a.k.b(m.body);
                        if (!1 !==
                            m && !m) break;
                        m = (c = a.b.bl(m)) && c.document;
                        d = d || b(c);
                        h = h || d || c.context
                    }
                a.d.ck = function() {
                    return d && c
                };
                a.d.cl = function(a) {
                    "boolean" === typeof a && (d = a);
                    return d
                };
                a.d.cm = function() {
                    return h
                }
            };
            a.d.ck = function() {
                v();
                return a.d.ck()
            };
            a.d.cm = function() {
                v();
                return a.d.cm()
            };
            a.d.cl = function() {
                v();
                return a.d.cl()
            };
            var x = function() {
                var b, c = function(c) {
                        return (b = a.b.ai(c, ["amazonmobileadsviewablebridge"])) && "function" === typeof b.addEventListener && "function" === typeof b.getVersion ? !0 : b = !1
                    },
                    m = document,
                    d = window,
                    h = c(d),
                    g = b && 1.1 <= b.getVersion();
                if (!h && a.d.t)
                    for (var e = 0; 20 > e && !h; e++) {
                        m = a.k.b(m.body);
                        if (!1 !== m && !m) break;
                        m = (d = a.b.bl(m)) && d.document;
                        h = h || c(d);
                        g = g || b && 1.1 <= b.getVersion()
                    }
                a.d.cn = function() {
                    return h && d
                };
                a.d.co = function() {
                    return h
                };
                a.d.cp = function() {
                    return g
                };
                a.d.cq = function() {
                    return b
                }
            };
            a.d.cn = function() {
                x();
                return a.d.cn()
            };
            a.d.co = function() {
                x();
                return a.d.co()
            };
            a.d.cp = function() {
                x();
                return a.d.cp()
            };
            a.d.cq = function() {
                x();
                return a.d.cq()
            };
            a.d.cr = function() {
                return a.d.co() && a.d.cp()
            };
            a.d.r = function() {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, "passive", {
                        get: function() {
                            a = !0
                        }
                    });
                    window.addEventListener("test", null, b);
                    window.removeEventListener("test", null, b)
                } catch (c) {}
                return a
            }();
            a.d.cs = function() {
                var b;
                return function() {
                    if ("undefined" !== typeof b) return b;
                    var c = a.d.g,
                        m = a.b.bx();
                    if (a.d.g.navigator.standalone) b = !0;
                    else {
                        var d = c.innerWidth / m.w,
                            c = c.innerHeight / m.h,
                            d = !isNaN(d) && isFinite(d) && .9 <= d && 1.1 >= d,
                            c = !isNaN(c) && isFinite(c) && .75 <= c && 1.1 >= c;
                        b = d && c
                    }
                    a.d.g.MoatMAK ? a.d.g.MoatMAK.namespace && (b = !1) : (d = a.d.g) &&
                        d.imraid && "function" === typeof d.imraid.getVendorName && "inmobi" === d.imraid.getVendorName() && (b = !1);
                    return b
                }
            }();
            a.d.ct = function() {
                var b = a.d.ap().isInApp ? 0 : void 0;
                a.d.k() ? b = 3 : a.d.cu() && (b = 1);
                return b
            };
            a.d.cu = function() {
                if (a.d.d()) return !1;
                var b = a.d.cs(),
                    c = a.b.av(),
                    m = a.d.bt(),
                    d = window.location && ("applewebdata:" === window.location.protocol || "data:" === window.location.protocol);
                return "-" === c || "" === c.replace(/^\s+|\s+$/gm, "") || m || d ? !1 : b || a.b.bs(a.d.bg) ? !0 : !1
            };
            a.d.k = function() {
                var b;
                return function() {
                    return "undefined" !==
                        typeof b ? b : b = a.d.cv() || a.d.d() || a.d.bm() ? !0 : a.d.cu() ? !1 : a.b.q() || a.b.o()
                }
            }();
            a.d.cw = function() {
                return a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__
            };
            a.d.cv = function() {
                return !(!a.d.g || !(a.d.g.__zMoatInit__ || a.d.g.MoatMAK || a.d.cw())) || A
            };
            a.d.cx = function() {
                return !1
            };
            a.d.cy = function(b) {
                return a.n && a.n.b(b)
            };
            a.d.cz = function() {
                return a.n && a.n.c()
            };
            a.d.da = function() {
                return a.n && a.n.d()
            };
            a.d.db = function() {
                return !1
            };
            a.d.dc = function() {
                return a.d.da() ? a.q && (a.q.c() ||
                    a.q.d()) : !1
            };
            a.d.dd = function() {
                if (a.d.db() || a.d.dc()) return !0;
                var b = !1;
                return a.d.cb() ? !0 : a.d.e || a.d.ci ? b = (b = b || a.d.k() && a.d.cz()) || a.d.ci || a.d.cu() || a.d.bw() || a.d.cr() : b
            };
            a.d.protocol = a.b.cm();
            a.d.de = "z.moatads.com";
            a.d.df = a.b.l();
            a.d.br = !a.d.e;
            a.d.dg = function(b) {
                var c = 0;
                b = b || window;
                try {
                    if (!a.d.e) {
                        var m;
                        for (m = 0; 20 > m && b != window.top; m++) b = b.parent;
                        c = m
                    }
                } catch (d) {}
                return c
            };
            a.d.e || a.b.aa() || 1 == a.d.dg(a.k.a()) ? a.d.dh = 1 : a.d.dh = 0;
            a.d.g[a.d.bc] || (a.d.g[a.d.bc] = new a.d.g.Object);
            a.d.ap().isInApp && a.d.e &&
                (a.d.e = a.d.dd() || a.d.k());
            a.d.di = function() {
                return a.q && a.q.e()
            };
            a.d.dj = function() {
                return a.q && a.q.d()
            };
            a.d.f = a.d.g.document.referrer || "";
            try {
                a.d.dk = a.d.g.history && a.d.g.history.length
            } catch (X) {}
            a.d.dl = function() {
                if (u)
                    for (var a in u)
                        if (u.hasOwnProperty(a)) return !0;
                return !1
            };
            a.d.dm = function(b) {
                var c = !0;
                a.b.forEach(b && b.parentNode && b.parentNode.childNodes, function(b) {
                    if (a.b.be(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], b.nodeName)) return c = !1
                });
                return c
            };
            a.d.dn = function() {
                for (var a in u)
                    if (u.hasOwnProperty(a)) {
                        var b =
                            u[a];
                        if (b && b.aa && b.aa[F]) return !0
                    } return !1
            };
            a.d["do"] = function() {
                return a.d.ap().isInApp ? a.d.cu() ? a.d.e : a.d.dd() : a.d.e
            };
            a.d.cd = function() {
                return a.d.dp && a.d.dp()
            };
            a.d.dq = function() {
                return a.d.ch
            };
            a.d.dr = function() {
                return a.d.ce && a.d.ce()
            };
            a.d.ds = function() {
                return a.d.cl && a.d.cl()
            };
            a.d.dt = function() {
                return a.r && a.r.a()
            };
            a.d.du = function(b) {
                var c = !1;
                a.s && a.s.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (c = !0) : c = !0);
                return c
            };
            a.d.dv = function(b) {
                return a.d.dt() || a.d.du(b)
            };
            a.d.dw = function(b,
                c) {
                if (!b || b && b.isMeasurabilityDisabled() || a.e.c() && !c) return !1;
                var m;
                a.d.dv(b) && (m = !0);
                return a.d["do"]() || a.d.dx() || m
            };
            a.d.dy = function(b) {
                if (!b || b && b.isMeasurabilityDisabled() || a.e.c()) return !1;
                var c = !1;
                a.r && a.r.a() ? c = !0 : a.s && a.s.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (c = !0);
                return a.d["do"]() || a.d.dx() || c
            };
            a.d.dz = function() {
                a.d.bn = !1;
                a.d.bo = !0;
                a.d.bp = !0
            };
            a.d.ea = !0;
            a.d.eb = !0;
            "mlb.com" === a.b.av() && (a.b.bq() || a.b.br()) && (a.d.eb = !1);
            a.d.ec = function() {
                return a.t.a()
            };
            a.d.ed = function() {
                if (!a.d.k()) return !1;
                var b;
                return b = (b = a.d.da() && a.q.f()) || a.t.a()
            };
            a.d.ee = function() {
                return !1
            };
            var A;
            a.d.k() && (a.d.ef = function() {
                A = !0
            });
            var m = {
                version: "sv",
                appName: "lw",
                namespace: "lu",
                isNative: "ma",
                versionHash: "ar",
                deviceOS: "av"
            };
            a.d.eg = function() {
                var b = !!a.d.g.MoatMAK;
                return function() {
                    return b
                }
            }();
            a.d.eh = function() {
                return a.d.g && a.d.g.MoatMAK || null
            };
            a.d.ei = function() {
                var b = {},
                    c = a.d.eh();
                if (c)
                    for (var d in m) m.hasOwnProperty(d) && (b[m[d]] = c[d]);
                return b
            };
            a.d.ej = function(b) {
                var c,
                    d;
                (c = a.d.eh()) && c.hasOwnProperty(b) && (d = c[b]);
                mappedKey = m[b];
                c = a.t.b();
                mappedKey && c && c.hasOwnProperty(mappedKey) && (d = c[mappedKey]);
                "versionHash" === b && "undefined" !== typeof d && (d = d.slice(0, 7));
                return d
            };
            a.d.ek = function() {
                return a.d.ej("namespace")
            };
            a.d.el = function() {
                var b = a.d.ej("version");
                return b ? /\d+\.\d+(\.\d+)?/.exec(b) ? b : null : b
            };
            a.d.em = 0;
            a.d.en = 1;
            a.d.eo = -1;
            a.d.ep = function(b) {
                var c = a.d.el();
                if (!c) return a.d.eo;
                if (!/\d+\.\d+(\.\d+)?/.exec(b)) return a.d.en;
                switch (a.d.bq(c, b)) {
                    case 0:
                        return a.d.eo;
                    case 1:
                        return a.d.en;
                    case 2:
                        return a.d.em
                }
            };
            a.d.eq = function(b) {
                if (a.d.er && a.d.er()) {
                    var c = a.d.eh();
                    c && b && (e(c, b), l(c, b))
                }
            };
            a.d.er = function() {
                if (!a.d.k()) return !1;
                var b;
                a.b.o() ? b = "3.0" : a.b.q() && (b = "1.8");
                return b ? a.d.ep(b) !== a.d.eo ? !0 : !1 : !1
            };
            a.d.es = function() {
                var b;
                a.b.o() ? b = "3.1.1" : a.b.q() && (b = "1.7.7");
                return a.d.ep(b) !== a.d.eo
            };
            a.d.et = function() {
                var b = a.t.a(),
                    c;
                a.b.o() ? c = "3.1" : a.b.q() && (c = "2.1");
                c = a.d.ep(c) !== a.d.eo;
                return b && c
            };
            a.d.eu = function() {
                var b = "___mraid_viewable_loop___" + (new q).getTime(),
                    c = a.d.bs();
                a.p.g(function() {
                    return c && c.isViewable && c.isViewable() ? (a.n.e(), a.m.a.zaxs("trackingReady"), !1) : !0
                }, {}, 300, b)
            };
            a.d.ev = function() {
                if (a.d.d() && !a.d.cv()) return !1;
                var b = !(!window || !window.MmJsBridge),
                    c = !(!window || !window.imraid || "function" !== typeof window.imraid.getVendorName || "inmobi" !== window.imraid.getVendorName());
                return b || c
            };
            a.d.ew = function() {
                var b = a.d.bg;
                return (b = b && b.match(/Firefox\/([0-9]+)\./)) ? parseInt(b[1], 10) : !1
            };
            (function() {
                var b = a.b.ai(window, ["IntersectionObserver"]),
                    c = g() ||
                    57 <= a.d.ew() || 17 <= a.b.r() || 13 <= a.b.dq(),
                    m = a.d.k(),
                    d = a.d.d(),
                    h = c && b && "function" === typeof b && (!m || d && a.d.br);
                a.d.dp = function(a) {
                    "boolean" === typeof a && (h = a);
                    return h
                };
                a.d.ex = function() {
                    return h && b
                }
            })();
            a.d.bo = g();
            a.d.cc = function() {
                if (a.d.cd()) return !1;
                var b = a.b.dq(),
                    c = a.d.k();
                return !(!(9 <= b && 12 >= b && window && window.requestAnimationFrame) || c)
            }();
            a.d.ey = function() {
                if (a.d.e || a.d.cd()) return !1;
                var b = a.d.m || a.d.ao && 15.16199 <= a.b.r();
                if (!b) return !1;
                var c = a.b.s();
                if (a.d.m && 8 >= c) return !1;
                var m = 1 === a.d.ap().isInApp,
                    d, h = "function";
                a.d.m ? (8 === c && (h = "object"), d = document && typeof document[10 > c ? "elementFromPoint" : "msElementsFromPoint"] === h) : a.d.ao && (d = typeof window.requestAnimationFrame === h);
                return b && !m && d
            }();
            a.d.a = new a.d.g.Image;
            a.d.n = function() {
                if ("undefined" !== typeof a.d.g["Moat#EVA"]) return !0;
                try {
                    if ("undefined" !== typeof a.d.g.eval && (a.d.g.eval("(function(win){ win['Moat#EVA'] = true; })(window)"), "undefined" !== typeof a.d.g["Moat#EVA"])) return !0
                } catch (b) {}
                return !1
            };
            a.d.o = function(a) {
                try {
                    return new a.Function(""),
                        !0
                } catch (b) {
                    return !1
                }
            };
            (function() {
                var b = a.b.ah("context"),
                    c = !a.d.ap().isInApp && !(!b || !b.observeIntersection),
                    m, d, h, g, e, k;
                if (!c && window.JSON && "function" === typeof window.JSON.parse && (m = location.hash.match(/amp3pSentinel=((\d+)-\d+)/))) {
                    d = m[1];
                    m = Number(m[2]);
                    h = [];
                    for (g = window; g && g != g.parent; g = g.parent) h.unshift(g.parent);
                    e = h[m];
                    c = k = !!e
                }
                a.d.ez = function() {
                    return c && b
                };
                a.d.cl = function(a) {
                    "boolean" === typeof a && (c = a);
                    return c
                };
                a.d.fa = function() {
                    return {
                        isDfp: k,
                        win: e,
                        sentinel: d
                    }
                };
                a.d.fb = function() {
                    return e &&
                        e.postMessage && d ? (e.postMessage({
                            sentinel: d,
                            type: "send-intersections"
                        }, "*"), !0) : !1
                }
            })();
            a.d.fc = function() {
                var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
                return a ? parseFloat(a[1]) : -1
            };
            a.d.fd = function() {
                return 6.1 === a.d.fc()
            };
            a.d.fe = function() {
                var b = a.d.g;
                return b.navigator && "function" === typeof b.navigator.getBattery
            };
            a.d.dx = function() {
                return !!a.d.ff()
            };
            a.d.ff = function() {
                return a.d.dp() ? {
                        measurableFn: a.d.cd
                    } : a.d.ch ? {
                        measurableFn: a.d.dq
                    } : a.d.cl() ? {
                        measurableFn: a.d.ds
                    } :
                    a.d.bw() ? {
                        measurableFn: a.d.bw
                    } : a.d.cr() ? {
                        measurableFn: a.d.cr
                    } : a.d.dj() ? {
                        measurableFn: a.d.dj
                    } : !1
            };
            a.d.fg = a.b.by();
            a.d.fh = function(b) {
                return a.b.dz() ? !0 : b = (b = a.d.fg) || a.b.bz()
            };
            var z = {
                    a: "a",
                    b: "b",
                    c: "c",
                    d: "d",
                    e: "e",
                    f: "f"
                },
                w = {
                    a: "waiting",
                    b: "noHistData",
                    c: "dataAvailable",
                    d: "slotWaiting",
                    e: "slotNoHistData",
                    f: "slotNoSlotData"
                };
            a.d.fi = function() {
                var b = {};
                a.b.forEach(z, function(a, c) {
                    b[a] = w[c]
                });
                a.b.forEach(w, function(a, c) {
                    b[a] = a
                });
                return b
            }();
            a.d.fj = w
        })(p);
        (function(a) {
            function n(a, k, e) {
                function l(a, c) {
                    for (var b in a) a.hasOwnProperty(b) &&
                        c.call(null, a[b], b)
                }

                function g(a) {
                    var c = [];
                    l(a, function(a, d) {
                        c.push(d)
                    });
                    return c
                }
                a = k[a];
                a && a.xa.sode || (a.xa.sode = function() {
                        this.desw = {};
                        this.xfgf = [];
                        this.publishing_ = !1;
                        this.xkcd = {};
                        this.edws = []
                    }, a.xa.sode.prototype.uxin = function() {
                        var a = function(a) {
                            a = e.max(4, a);
                            return ((1 + e.random()) * e.pow(16, a) | 0).toString(16).substring(0, a)
                        };
                        return function(c) {
                            return a(4) + "-" + a(4) + "-" + a(4) + "-" + a(4)
                        }
                    }(), a.xa.sode.prototype.xsza = function(a) {
                        this.desw[a] || (this.desw[a] = {});
                        return this.desw[a]
                    }, a.xa.sode.prototype.esgf =
                    function(a, c) {
                        this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments)
                    }, a.xa.sode.prototype.kswa = function(a, c) {
                        for (var b = this.xkcd[a] || [], h = b && b.length, g = 0; g < h; g++)
                            if (b[g] === c) return !1;
                        b.push(c);
                        b.sort(function(a, b) {
                            return a - b
                        });
                        this.xkcd[a] = b
                    }, a.xa.sode.prototype.aksw = function(a, c) {
                        if (!this.xkcd[a]) return !1;
                        for (var b = this.xkcd[a], h = -1, g = b && b.length, e = 0; e < g; e++)
                            if (b[e] === c) {
                                h = e;
                                break
                            } - 1 != h && b.splice(h, 1);
                        this.xkcd[a] = b
                    }, a.xa.sode.prototype._getEventPriorities_ = function(a) {
                        return this.xkcd[a] || []
                    }, a.xa.sode.prototype.azsx = function(a, c, b) {
                        b = b || {};
                        var h = b.id || this.uxin(),
                            g;
                        g = b.priority;
                        g = !isNaN(g) && isFinite(g) ? parseInt(g, 10) : 10;
                        for (var e = this.xsza(a), k = 0; e[h] && !b.id && 10 > k;) k++, h = this.uxin();
                        e[g] || (e[g] = {});
                        this.kswa(a, g);
                        b.priority = g;
                        e[g][h] = {
                            cb: c,
                            options: b
                        };
                        return h
                    }, a.xa.sode.prototype.zaxs = function(a, c) {
                        if (!this.desw[a]) return !1;
                        this.publishing_ = !0;
                        for (var b = this.edws.slice.call(arguments, 1), h = this._getEventPriorities_(a).slice(0), g = 0, e = h.length; g < e; g++) {
                            var k = this.desw[a][h[g]],
                                m;
                            for (m in k)
                                if (k.hasOwnProperty(m)) {
                                    var f =
                                        k[m];
                                    if (f) {
                                        var l;
                                        l = f.options && f.options.includeId ? [m].concat(b) : b;
                                        if (!f.options || !f.options.condition || f.options.condition && f.options.condition.apply(null, l)) f.options && f.options.once && "undefined" !== typeof f.options.priority && this.sxaz(a, {
                                            id: m,
                                            priority: f.options.priority
                                        }), f.cb.apply(null, l)
                                    }
                                }
                        }
                        this.publishing_ = !1;
                        for (b = 0; 0 < this.xfgf.length && 500 > b; b++) this.zaxs.apply(this, this.xfgf.pop())
                    }, a.xa.sode.prototype.swaq = function(a, c, b) {
                        var h = !1;
                        if (this.desw[a] && this.desw[a][b]) try {
                            delete this.desw[a][b][c],
                                h = !0
                        } catch (e) {}
                        0 === g(this.desw[a][b]).length && this.aksw(a, b);
                        return h
                    }, a.xa.sode.prototype.sxaz = function(a, c) {
                        if (!c || "object" != typeof c || !this.desw[a]) return !1;
                        if (c.id && void 0 !== c.priority) return this.swaq(a, c.id, c.priority);
                        if (c.id || c.callback)
                            for (var b = this._getEventPriorities_(a), h = 0, g = b.length; h < g; h++) {
                                var e = b[h];
                                if (c.id && c.callback) {
                                    if (this.desw[a][e][c.id] && this.desw[a][e][c.id].cb == c.callback) return this.swaq(a, c.id, e)
                                } else if (c.id) {
                                    if (this.desw[a][e][c.id]) return this.swaq(a, c.id, e)
                                } else
                                    for (var k in this.desw[a][e])
                                        if (this.desw[a][e][k] &&
                                            this.desw[a][e][k].cb == c.callback) return this.swaq(a, k, e)
                            }
                        return !1
                    }, a.xa.sode.prototype.ugin = function(a) {
                        if ("string" === typeof a)
                            if (this.desw[a]) delete this.desw[a];
                            else return !1;
                        else this.desw = {};
                        return !0
                    })
            }
            a.m = {};
            a.m.b = function(f) {
                f.xa.sode || (f.xb == window ? n(a.d.az, window, t) : a.b["do"](n, "'" + a.d.az + "',window, Math", f.xb));
                a.m.a = new f.xa.sode
            }
        })(p);
        (function(a) {
            function n(f, k) {
                function e(a) {
                    var b = c.xb.Math.pow,
                        h = c.xb.Math.random;
                    a = (0, c.xb.Math.max)(4, a);
                    return ((1 + h()) * b(16, a) | 0).toString(16).substring(0,
                        a)
                }

                function l(a) {
                    return function(b) {
                        return a(b)
                    }
                }

                function g(a, b) {
                    if (!a || "string" !== typeof b || !a[b] || a == d) return !1;
                    if ("string" === typeof a.nodeName && ("OBJECT" === a.nodeName || "EMBED" === a.nodeName)) {
                        var c = document && document.body && document.body[b];
                        if (c && c !== a[b]) return c
                    }
                    return !1
                }
                var d;
                d = "object" === typeof a && a && a.a && a.a.b ? a.a.b : (new Function("return this.window;"))();
                k[f] = k[f] || {
                    zs: !1,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: k,
                    xc: {},
                    xyds: {}
                };
                var c = k[f],
                    b = {},
                    h = function() {
                        var a = !1;
                        try {
                            var b = Object.defineProperty({},
                                "passive", {
                                    get: function() {
                                        a = !0
                                    }
                                });
                            d.addEventListener("test", null, b);
                            d.removeEventListener("test", null, b)
                        } catch (c) {}
                        return a
                    }();
                c.xc.dowg = function(a, b) {
                    c && (c.xyds || (c.xyds = {}), c && c.xyds && (c.xyds[b] ? c.xyds[b].push(a) : c.xyds[b] = [a]))
                };
                c.xc.hsxk = function() {
                    c.dcsx && c.dcsx.dcwn();
                    "undefined" !== typeof a && a && c.xc.esde(a);
                    var a;
                    c.xc.exde(c.xc.hsxk, 1E3)
                };
                c.xc.esde = function(a) {
                    d && d.clearTimeout && d.clearTimeout(a)
                };
                c.xc.ynds = function(a, c, d, m) {
                    var e, k, f = !1;
                    "touchstart" === c && h && (f = {
                        passive: !0
                    });
                    m ? b[c + m] ? d = b[c +
                        m] : (d = l(d), b[c + m] = d) : d = l(d);
                    if (a.addEventListener) m = "addEventListener", e = "";
                    else if (a.attachEvent) m = "attachEvent", e = "on";
                    else return !1;
                    if (k = g(a, m)) try {
                        k.call(a, e + c, d, f)
                    } catch (J) {
                        a[m](e + c, d, f)
                    } else if (a && m && a[m]) try {
                        a[m](e + c, d, f)
                    } catch (J) {
                        return !1
                    }
                };
                c.xc.engn = function(a, c, d, m) {
                    var h, e = c + m,
                        k;
                    if (!a) return delete b[e], !1;
                    d = !1 !== m ? b[e] : d;
                    if (a.removeEventListener) m = "removeEventListener", h = "";
                    else if (a.detachEvent) m = "detachEvent", h = "on";
                    else return delete b[e], !1;
                    if (k = g(a, m)) try {
                        k.call(a, h + c, d, !1)
                    } catch (f) {
                        a[m](h +
                            c, d, !1)
                    } else try {
                        a[m](h + c, d, !1)
                    } catch (f) {}
                    delete b[e]
                };
                c.xc.exde = function(a, b) {
                    a = l(a);
                    var c;
                    d && d.setTimeout && (c = d.setTimeout(a, b));
                    return c
                };
                c.xc.exae = function(a, b, c) {
                    return function() {
                        b.apply(c || null, a.concat(a.slice.call(arguments)))
                    }
                };
                c.xc.uxin = function() {
                    return e(4) + "-" + e(4) + "-" + e(4) + "-" + e(4)
                };
                c.xc.twer = function(a, b) {
                    c && (c.yf || (c.yf = {}), c && c.yf && (c.yf[b] ? c.yf[b].push(a) : c.yf[b] = [a]))
                }
            }
            a.w = {};
            a.w.a = function(f) {
                var k = a.w.b(f),
                    e = !1;
                k || (k = a.w.c(f), e = !0, k.xc.exde(k.xc.hsxk, 1E3));
                window[a.d.az] = k;
                a.m.b(k);
                e && (k.swde = new k.xa.sode);
                a.m.a.azsx("adKilled", a.w.d);
                a.m.a.azsx("allLocalAdsKilled", a.w.e, {
                    once: !0
                });
                return k
            };
            a.w.e = function() {
                a.m.a.sxaz("adKilled", {
                    callback: a.w.d
                });
                a.w.f(r)
            };
            a.w.d = function(f) {
                a.d.l = null;
                if (r) {
                    try {
                        var k = r.yf[a.d.bb.a];
                        if (k) {
                            var e = a.b.indexOf(k, f.yg); - 1 < e && k.splice(e, 1)
                        }
                        a.w.g(a.d.bb.a, f.TAGID)
                    } catch (l) {}
                    a.w.f(r)
                }
            };
            a.w.h = function(f, k) {
                var e = a.w.b(a.d.g);
                e && e.xc.twer(f, k)
            };
            a.w.i = function(f, k) {
                var e = a.w.b(a.d.g);
                e && e.xc.dowg(k, f)
            };
            a.w.g = function(f, k) {
                var e = r.xyds[f];
                if (e) {
                    var l =
                        a.b.indexOf(e, k); - 1 < l && e.splice(l, 1)
                }
            };
            a.w.f = function(f) {
                var k = !1,
                    e = !1,
                    l = 0,
                    g = 0;
                try {
                    f.yf[a.d.bb.a] && (e = 0 === f.yf[a.d.bb.a].length), a.b.forEach(f.yf, function(a) {
                        0 < a.length && l++
                    }), a.w.g(a.d.bb.a, a.d.bd), a.b.forEach(f.xyds, function(a) {
                        0 < a.length && (g += a.length)
                    }), f.xyds[a.d.bb.a] && 0 != f.xyds[a.d.bb.a].length || (e = !0), 0 === g && 0 === l && (k = !0)
                } catch (d) {}
                e && f.swde.esgf("allAdsInWindowKilled", a.d.bb.a);
                k && (a.m.a.sxaz("adKilled", {
                    callback: a.w.d
                }), a.m.a.sxaz("allLocalAdsKilled", {
                    callback: a.w.e
                }), f.swde.esgf("allAdsKilled"))
            };
            a.w.c = function(f) {
                f == window ? n(a.d.az, window) : a.b["do"](n, "'" + a.d.az + "',window", f);
                return a.w.b(f)
            };
            a.w.b = function(f) {
                try {
                    return f = f || a.d.g, f[a.d.az]
                } catch (k) {
                    return null
                }
            };
            a.w.j = function(f) {
                try {
                    var k = [];
                    f = f || a.d.g;
                    if (!f) return !1;
                    var e = a.d.aw;
                    if (!e) return !1;
                    var l = new RegExp("^" + e);
                    if (!l) return !1;
                    a.b.forEach(f, function(a, d) {
                        -1 < d.search(l) && a && "number" === typeof a.zr && k.push(a)
                    });
                    return k
                } catch (g) {
                    return !1
                }
            };
            a.w.k = function(f) {
                try {
                    var k = [];
                    f = f || a.d.g;
                    return f ? (k = a.w.j(f)) ? 0 < k.length ? !0 : !1 : !1 : !1
                } catch (e) {
                    return !1
                }
            };
            a.w.l = function(f) {
                var k = a.w.b();
                k && (k.i[f] = !0)
            }
        })(p);
        (function(a) {
            function n(a) {
                var e = a;
                try {
                    for (var f = 0; 100 > f && (a = decodeURIComponent(a), e != a) && !a.match(/^http(s)?\:/); f++) e = a
                } catch (g) {}
                return a.replace(/(^\s+|\s+$)/g, "")
            }

            function f(k, e, f) {
                var g = {};
                k = k.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g, "");
                k = k.split("&");
                for (f = 0; f < k.length; f++) {
                    var d = k[f].split("=");
                    "string" === typeof d[1] ? (d[0] && d[0].match("moatClient") && (g["rawM" + d[0].slice(1)] = d[1]), d[1] = n(d[1])) : d[1] = "";
                    g[d[0]] = d[1]
                }(k = a.b.at()) && (g.zMoatCURL =
                    k);
                k = "";
                k = a.d.ct();
                k = "undefined" !== typeof k && 1 !== k ? "App" : a.d.df ? "Mobile" : "Desktop";
                g.zMoatDev = k;
                a.x.f(g);
                g.zMoatPLATFORM = a.x.h();
                if (a.d.e && "beta.next.cnn.com" === a.d.g.location.hostname || a.d.e && "beta.cnn.com" === a.d.g.location.hostname) g.zMoatBeta = "beta.cnn.com";
                g.zMoatAPP ? g.zMoatAppKey = g.zMoatAPP : "amp" === g.zMoatPG && (g.zMoatAppKey = g.zMoatPG);
                f = g && g.zMoatPS;
                k = ["rect_atf_01", "bnr_atf_01"];
                a.b.be(k, f) && (g.zMoatRetail = !0);
                var c;
                "rect_atf_01" === f && (k = a.d.g.document.getElementById("ad_bnr_atf_01")) && (k = k.getElementsByTagName("iframe"),
                    a.b.forEach(k, function(b) {
                        if ((b = (b = a.k.e(b)) && b.body) && b.innerHTML && b.innerHTML.match("NO_BANNER")) return c = !0, !1
                    }));
                g.zMoatPSB = c ? g.zMoatPS + " | No Banner Present" : g.zMoatPS;
                (k = (k = za && za.match(/\?sr=(biob-ar[^?&;#]*)(?:$|[&?;#])/)) && k[1]) && (g.zMoatNHTCode = k);
                if (!a.b.l() && (k = [], f = (d = g && g.moatClientSlicer1 && g.moatClientSlicer1.split("/")) && d[2], d = d && d[3], f && "tools" !== d)) {
                    switch (f) {
                        case "CNN":
                        case "CNNMoney":
                            k = ["bnr_atf_01", "rect_atf_01", "rect_atf_02"];
                            break;
                        case "NCAA":
                        case "PGA":
                        case "AS":
                            k = ["bnr_atf_01",
                                "rect_atf_01"
                            ];
                            break;
                        case "NBA":
                            k = ["bnr_atf_01", "bnr_atf_02", "bnr_atf_03", "rect_atf_01"];
                            break;
                        case "BR":
                            k = ["oop_skin_01", "rect_atf_01", "bnr_atf_01", "bnr_atf_01_mob", "rect_atf_01_tab"];
                            break;
                        case "NASCAR":
                            k = "gallery" === g.moatClientSlicer1.split("/")[3] ? ["bnr_atf_01", "rect_atf_01", "rect_atf_02"] : ["bnr_atf_01", "rect_atf_01"];
                            break;
                        case "Toon":
                            k = ["bnr_atf_02", "bnr_atf_01", "mod", "rect_atf_01"];
                            break;
                        case "TRU":
                            k = ["bnr_atf_01", "rect_atf_01", "rect_btf_01"];
                            break;
                        case "TNT":
                        case "TBS":
                            k = ["bnr_atf_01", "mod",
                                "rect_atf_01"
                            ];
                            break;
                        case "HLN":
                            k = "bnr_atf_01 rect_atf_01 rect_atf_02 bnr_atf_02 bnr_atf_03 rect_atf_03".split(" ");
                            break;
                        case "CNNi":
                        case "Arabic":
                        case "Espanol":
                            k = ["rect_atf_01", "bnr_atf_01", "bnr_atf_02"]
                    }
                    g.zMoatPS && a.b.be(k, g.zMoatPS) ? g.zMoatAdUnitRetail = !0 : "bnr_btf_06" === g.zMoatPS ? a.b.be(["/8663477/NBA/scores/gameInfo", "/8663477/NBA/social_spotlight"], g.moatClientSlicer1) && (g.zMoatAdUnitRetail = !0) : "bnr_atf_02" === g.zMoatPS && a.b.forEach(["CNN/homepage", "CNNMoney/homepage"], function(b) {
                        if (-1 < a.b.indexOf(g.moatClientSlicer1,
                                b)) return g.zMoatAdUnitRetail = !0, !1
                    })
                }
                "undefined" !== typeof e && (g.clientZone = "undefined" !== e ? e : "");
                return g = a.x.i(g)
            }
            a.x = {};
            a.x.a = {};
            a.x.a.a = [];
            a.x.b = function(k, e) {
                if (!k) return !1;
                if ("undefined" === typeof k.startTime || e) k.startTime = a.d.q;
                if ("undefined" === typeof k.rand || e) k.rand = t.floor(t.random() * t.pow(10, 12));
                "undefined" === typeof k.adNum && (k.adNum = r.zr, r.zr++)
            };
            a.x.c = function(k) {
                if (!k) return !1;
                var e = a.b.z();
                a.b.av();
                decodeURIComponent(e);
                return k
            };
            a.x.d = function(k) {
                var e = a.x.e(k),
                    f = function(g) {
                        return "string" ==
                            typeof g && 0 < g.length && (g = g.split(","), a.b.f(g)) ? (g = a.b.cr(function(a) {
                                return parseInt(a)
                            }, g), t.max.apply(null, g)) : !1
                    };
                a.p.l(function(g) {
                    if (g) {
                        var d = g.zMoatMMV,
                            c = g.zMoatMGV;
                        if (a.b.ds(d) && a.b.ds(c)) g.zMoatMMV_MAX = "na", g.zMoatMGV_MAX = "na";
                        else {
                            var b = a.d.fi;
                            b.hasOwnProperty(d) ? (d = b[d], g.zMoatMMV = d, g.zMoatMMV_MAX = d) : (d = f(d), a.b.dg(d) && (g.zMoatMMV_MAX = d + ""));
                            b.hasOwnProperty(c) ? (c = b[c], g.zMoatMGV = c, g.zMoatMGV_MAX = c) : (c = f(c), a.b.dg(c) && (g.zMoatMGV_MAX = c + ""));
                            "string" !== typeof g.zMoatMMV_MAX && (g.zMoatMMV_MAX =
                                "na");
                            "string" !== typeof g.zMoatMGV_MAX && (g.zMoatMGV_MAX = "na")
                        }
                    }
                })(e);
                e && (e.zMoatOrigSlicer1 = e.moatClientSlicer1 || "N/A", e.zMoatOrigSlicer2 = e.moatClientSlicer2 || "N/A");
                a.m.a.azsx("adInitialized", function(g) {
                    var d = g.DfpSlot,
                        c = g.ao;
                    if (d) {
                        c.fullAdUnitPath = a.y.a(d);
                        c.dfpSlotId = a.y.b(d);
                        for (var d = a.y.c(d), b = 0; b < d.length; b++) c["dfpAdUnitLabel" + b] = d[b]
                    }
                    c = g.DfpSlot;
                    g = g.ao;
                    if (c) {
                        var c = a.y.d(c),
                            h;
                        for (h in c)
                            if (d = c[h].length, 1 === d) g["gptMoat_" + h] = c[h][0];
                            else if (1 < d) {
                            for (var b = "", e = 0; e < d; e++) b += c[h][e] + ",";
                            b =
                                b.substring(0, b.length - 1);
                            g["gptMoat_" + h] = b
                        }
                    }
                });
                e && a.b.forEach(a.x.a.a, function(a) {
                    a(e)
                });
                return e
            };
            a.x.e = function(a) {
                try {
                    var e = a.className,
                        l = a.getAttribute("src");
                    e.split("\n").join(" ");
                    if (-1 !== e.indexOf("moatfooter")) return !1;
                    var g = l.split("?"),
                        d = l.split("#");
                    a = !1;
                    1 < g.length && 1 < d.length && g[1].length < d[1].length && (a = !0);
                    if (1 == g.length || a) g = d;
                    return 1 < g.length ? f(g[1], "undefined") : !1
                } catch (c) {
                    return !1
                }
            };
            a.x.f = function(k) {
                var e = a.d.g.optimizelyMoat;
                if (e && a.b.f(e) && 0 !== e.length) {
                    var f = function(a) {
                            if ("undefined" !==
                                typeof a) return a.trim().replace(/[ |]/g, "_")
                        },
                        e = a.b.cr(function(a) {
                            var d = a.split(":");
                            a = f(d[0]);
                            d = f(d[1]);
                            return [a, d].join("|")
                        }, e);
                    k.zMoatOptimize = e.join(";")
                }
                return k
            };
            a.x.g = function(a) {
                if (!a) return !1;
                var e = {};
                try {
                    var l = a && a.className.replace("amp;", "").split("?")[1];
                    if (e = l && f(l)) e.zMoatOrigSlicer1 = e.moatClientSlicer1 || "N/A", e.zMoatOrigSlicer2 = e.moatClientSlicer2 || "N/A";
                    return e
                } catch (g) {
                    return !1
                }
            };
            a.x.i = function(a) {
                if (a) {
                    for (var e in a) a.hasOwnProperty(e) && e && e.match("moatClientLevel") && "string" ===
                        typeof a[e] && (a[e] = a[e].replace(/\:/g, "_").replace(/%3A/gi, "_"));
                    return a
                }
            };
            a.x.j = function(a, e) {
                return e || {}
            };
            a.x.k = function(a) {
                a = decodeURIComponent(decodeURIComponent(a)); - 1 < a.indexOf("anonymous.google") && (a = "anonymous.google");
                var e = a.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
                e && e[1] && (a = e[1]);
                return a.split("/")[0]
            };
            a.x.h = function() {
                return a.d.ap().isInApp && "inApp" || a.d.df && "mobileWeb" || "desktop"
            };
            a.x.l = function(f) {
                a.x.b(f);
                a.x.m(f);
                f = a.x.f(f);
                f = a.x.i(f);
                a.x.n && a.x.n(f);
                return f
            }
        })(p);
        p.b.dz() && (K += "_BETA");
        var r = p.w.a(p.d.g),
            Oa = p.d.e,
            sa = p.b.l(),
            ta = p.d.q,
            Na = p.d.g,
            F = "moatFound" + K,
            I = "__moat__" + K;
        p.b.dy() && 2 === L && (F = "moatFound" + K + "BETA", I = "__moat__" + K + "BETA");
        (function(a) {
            function n(f, k, e) {
                var l = k[f];
                l && l.xa.txae || (l.xa.txae = function(a, d) {
                    this.sxdc = l.xc.uxin();
                    this.cdxs = a;
                    this.xscd = {};
                    this.swde = d;
                    var c = this,
                        b = this.swde.azsx("allAdsInWindowKilled", function(a) {
                            l.dcsx.engn({
                                listenerName: "unloadFn" + a
                            });
                            l.dcsx.engn({
                                listenerName: "beforeunloadFn" + a
                            })
                        });
                    this.swde.azsx("allAdsKilled", function() {
                        c.swde.sxaz("allAdsInWindowKilled", {
                            id: b
                        });
                        l.dcsx && (l.dcsx.aqsw(), l.zs = !1, l.xz = !1, l.dcsx = !1)
                    }, {
                        once: !0
                    })
                }, l.xa.txae.prototype.wsed = function(a, d, c, b, h) {
                    this.xscd[b] || (this.xscd[b] = {});
                    this.xscd[b].evt = d;
                    this.xscd[b].target = a;
                    this.xscd[b].periodic = !0;
                    var e;
                    e = l.xc.exae([this], function(f, k) {
                        l.xc.engn(a, d, null, b);
                        if (f.xscd[b]) {
                            f.xscd[b].tid && l.xc.esde(f.xscd[b].tid);
                            f.xscd[b].tid = l.xc.exde(function() {
                                f.xscd[b].tid = null;
                                l.xc.ynds(a, d, e, b)
                            }, h);
                            try {
                                f.swde.zaxs(c, k)
                            } catch (m) {}
                        }
                    });
                    l.xc.ynds(a, d, e, b)
                }, l.xa.txae.prototype.wsqa = function(a) {
                    this.xscd[a] &&
                        (l.xc.esde(this.xscd[a].tid), l.xc.engn(this.xscd[a].target, this.xscd[a].evt, null, a), delete this.xscd[a])
                }, l.xa.txae.prototype.qaws = function() {
                    if (!("object" === typeof a && a && a.d && a.d.c && a.d.c())) {
                        this.wsed(this.cdxs, "scroll", "scroll", "globalScrollevent" + this.sxdc, 1E3);
                        var g = this.cdxs.document.documentElement;
                        this.wsed(g, "mousedown", "mouseEvent", "globalMouseDown" + this.sxdc, 1E3);
                        this.wsed(g, "mouseover", "mouseEvent", "globalMouseOver" + this.sxdc, 1E3);
                        this.wsed(g, "mousemove", "mouseEvent", "globalMouseMove" +
                            this.sxdc, 5E3);
                        this.wsed(this.cdxs, "mousewheel", "mouseEvent", "globalMouseWheel" + this.sxdc, 5E3);
                        this.wsed(this.cdxs, "DOMMouseScroll", "mouseEvent", "globalMouseScroll" + this.sxdc, 5E3);
                        this.wsed(g, "touchstart", "mouseEvent", "globalTouchStartEvent" + this.sxdc, 1E3);
                        this.wsed(g, "keydown", "keyboardEvent", "globalKeyboardEvent" + this.sxdc, 1E3)
                    }
                }, l.xa.txae.prototype.aqsw = function() {
                    for (var a in this.xscd) this.engn({
                        listenerName: a
                    })
                }, l.xa.txae.prototype.ynds = function(a, d, c, b) {
                    if (!this.xscd[b]) {
                        this.xscd[b] = {};
                        this.xscd[b].evt =
                            d;
                        this.xscd[b].target = a;
                        this.xscd[b].publishEvt = c;
                        var h;
                        h = l.xc.exae([this], function(a, d) {
                            a.xscd[b] && a.swde.zaxs(c, d)
                        });
                        l.xc.ynds(a, d, h, b)
                    }
                }, l.xa.txae.prototype.engn = function(a) {
                    function d(a, b) {
                        a.xscd[b].periodic ? a.wsqa(b) : (l.xc.engn(a.xscd[b].target, a.xscd[b].evt, null, b), delete a.xscd[b])
                    }
                    var c = a.target && a.evt,
                        b = a.target && !a.evt,
                        h = a.all;
                    if (a.listenerName) this.xscd[a.listenerName] && d(this, a.listenerName);
                    else if (c)
                        for (var e in this.xscd)(c = this.xscd[e]) && c.evt == a.evt && c.target == a.target && d(this, e);
                    else if (b)
                        for (e in this.xscd)(c = this.xscd[e]) && c.target == a.target && d(this, e);
                    else if (h)
                        for (e in this.xscd)(c = this.xscd[e]) && d(this, e)
                }, l.xa.txae.prototype.kdmw = function(a) {
                    l.swde.esgf(a.publishEvt)
                }, l.xa.txae.prototype.dcwn = function() {
                    var a = this.xscd,
                        d;
                    for (d in a) {
                        var c = a[d];
                        "unload" === c.evt && c.target && c.target.closed && this.kdmw(c)
                    }
                })
            }
            a.z = {};
            a.z.a = function(f) {
                f && (f.xa.txae || (f.xb == window ? n(a.d.az, window, t) : a.b["do"](n, "'" + a.d.az + "',window, Math", f.xb)), f.zs || (f.dcsx = new f.xa.txae(a.d.g, f.swde), f.zs = !0))
            };
            a.m.a.azsx("modulesReady", a.z.a, {
                once: !0
            });
            a.m.a.azsx("startAdTracking", function(f) {
                r && r.zs && !r.xz && (r.dcsx ? (r.xz = !0, r.dcsx.qaws()) : a.z.a(r), a.focus.setFocusListeners())
            })
        })(p);
        (function(a) {
            function n() {
                this.height = this.width = this.absTop = this.absLeft = 0;
                this.update = function(a) {
                    var b = c("left", a.win),
                        m = c("top", a.win);
                    !1 !== b && !1 !== m && (this.absLeft = a.left + b, this.absTop = a.top + m, this.width = a.width, this.height = a.height)
                }
            }

            function f(b, c) {
                var m = b.zr;
                w.hasOwnProperty(m) || (w[m] = new n);
                var d = c || new a.aa.k(b.aa);
                w[m].update(d)
            }

            function k(b, c, m) {
                return m ? new a.aa.k(b.parentNode, c) : new a.aa.k(b, c)
            }

            function e(a, b) {
                if (!a) return !1;
                var c = "number" == typeof a.zr,
                    m, d;
                c ? (m = a.aa, d = a._calcVideoBasedOnContainer) : m = a;
                m = k(m, b, d);
                d = m.height;
                var h = m.width;
                c && (a.AD_RECT = m);
                var e = m.calcArea();
                if (0 === e) return {
                    area: e,
                    visibleArea: 0,
                    percv: 0
                };
                var l = g(m),
                    A = l.visibleRect.calcArea(),
                    v = A / e,
                    z;
                a: {
                    var w = l.cumulRect,
                        x = l.cumulRect.getViewportRect();
                    if (0 > w.top && 0 < w.bottom) z = -w.top;
                    else if (0 <= w.top && w.top <= x.height) z = 0;
                    else {
                        z = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    if (0 <= w.bottom && w.bottom <= x.height) w = w.height;
                    else if (w.bottom > x.height && w.top < x.height) w = w.height - (w.bottom - x.height);
                    else {
                        z = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    z = {
                        yMin: z,
                        yMax: w
                    }
                }
                c && f(a, m);
                return {
                    area: e,
                    visibleArea: A,
                    visibleRect: l.visibleRect,
                    cumulRect: l.cumulRect,
                    percv: v,
                    yMinMax: z,
                    elGeo: {
                        elHeight: d,
                        elWidth: h,
                        foldTop: l.cumulRect.top,
                        totalArea: l.parentArea
                    },
                    rect: m.rect
                }
            }

            function l(a, b) {
                for (var c = [], m = 0; m < b.length; m++) c.push(a(b[m]));
                return c
            }

            function g(b) {
                var c, m = [],
                    d = a.b.dl(b.el, b.win, b && b.el && b.el._moatParentCount);
                d && (m = l(function(b) {
                    return new a.aa.k(b)
                }, d));
                m.unshift(b);
                d = m.length;
                b = new a.aa.k(b.el, a.d.g);
                for (var h = 0; h < d; h++) {
                    var g = m[h];
                    0 === h ? c = g : (c.changeReferenceFrame(g), b.changeReferenceFrame(g));
                    g = g.getViewportRect(h < d - 1 ? m[h + 1] : !1);
                    c = a.aa.n(c, g)
                }
                return {
                    visibleRect: c,
                    cumulRect: b,
                    parentArea: m[m.length - 1].calcArea()
                }
            }

            function d(a, b, c, m) {
                a = t.max(a, c);
                b = t.min(b, m);
                return b > a ? [a, b] : [0, 0]
            }

            function c(a, b) {
                b || (b = window);
                try {
                    var c = b.document.documentElement,
                        m = b.document.body;
                    return "left" === a ? b.pageXOffset || c &&
                        c.scrollLeft || m && m.scrollLeft : b.pageYOffset || c && c.scrollTop || m && m.scrollTop
                } catch (d) {
                    return !1
                }
            }

            function b(b) {
                function c(a, b) {
                    return {
                        top: t.max(a.top, b.top),
                        right: t.max(a.right, b.right),
                        bottom: t.min(a.bottom, b.bottom),
                        left: t.min(a.left, b.left)
                    }
                }
                var m, d, h;
                m = [];
                d = [];
                if (!a.b.f(b) || 0 === b.length) return !1;
                a.b.forEach(b, function(a) {
                    a.cumulRect && a.visibleRect && (d.push(a.cumulRect), m.push(a.visibleRect))
                });
                b = a.b.reduce(d, c);
                h = a.b.reduce(m, c);
                return {
                    elRect: b,
                    visibleRect: h
                }
            }

            function h(b) {
                return b && b.nodeName &&
                    "map" === b.nodeName.toLowerCase() ? !0 : (b = a.b.ci(b)) && (1 >= b.width || 1 >= b.height) ? !0 : !1
            }

            function v(b) {
                return b ? 0 === a.b.dj({
                    aa: b
                }, !0, !0) ? !0 : 0 === a.b.di(b, !0) : !1
            }

            function x(b, c, m, d, g) {
                function f(a) {
                    return (a = a.cumulRect) ? 100 <= a.width && 50 <= a.height : !1
                }
                var k = {
                        IFRAME: !0,
                        VIDEO: !0,
                        OBJECT: !0,
                        EMBED: !0,
                        IMG: !0
                    },
                    l = e(b);
                if (v(b) || !f(l)) return !1;
                var A = [],
                    w = u[g];
                m.elementsFromPoint && !w.elementsFromPointCache ? (c = m.elementsFromPoint(c.m[0], c.m[1]) || [], w.elementsFromPointCache = c, A = A.concat(Array.prototype.slice.call(c))) :
                    (c = a.b.dc(c.m[0], c.m[1], m), w.elementsFromPointCache && (A = A.concat(Array.prototype.slice.call(w.elementsFromPointCache))), c && (A = [c].concat(A)));
                for (w = 0; w < A.length; w++)
                    if ((m = (c = A[w]) && c !== d && c[I] !== g && k[c.nodeName] && !a.b.cz(c, b) && !a.b.cz(b, c) && !h(c) && !v(c)) && (c = e(c)) && f(c) && l && c && .5 <= a.aa.r(l.cumulRect, c.cumulRect)) return !0;
                return !1
            }

            function A(a) {
                var b = .01 * a.width,
                    c = .01 * a.height;
                return {
                    tl: [a.left + b, a.top + c],
                    m: [a.left + (a.right - a.left) / 2, a.top + (a.bottom - a.top) / 2],
                    br: [a.right - b, a.bottom - c]
                }
            }

            function m(b,
                c) {
                var m = [],
                    d = a.k.h(b);
                d && (m = l(function(c) {
                    var m = g(new a.aa.k(b)).visibleRect;
                    new a.aa.k(c);
                    return {
                        rect: m,
                        frame: c,
                        doc: c.ownerDocument
                    }
                }, d));
                m.unshift({
                    rect: g(new a.aa.k(b)).visibleRect,
                    frame: b,
                    doc: b.ownerDocument
                });
                for (d = 0; d < m.length; d++) {
                    var h = A(m[d].rect),
                        e = !1;
                    if (0 != h.tl[0] || 0 != h.tl[1] || 0 != h.br[0] || 0 != h.br[1]) e = !0;
                    if (e && x(b, h, m[d].doc, m[d].frame, c)) return !0
                }
                return !1
            }
            a.aa = {};
            var z = a.d.e,
                w = {};
            a.aa.a = .5;
            a.aa.b = .3;
            a.aa.c = .98;
            a.aa.d = void 0;
            a.aa.e = function(b, c) {
                c = c || !1;
                return function(m, d) {
                    var h = m.ao.skin ?
                        a.aa.f(m, d) : e(m, d);
                    h.isVisible = c ? h.percv > b : h.percv >= b;
                    h.elGeo && (h.elGeo.threshold = b);
                    return h
                }
            };
            a.aa.f = function(c, m) {
                function d() {
                    if (c.isMultipartAd && c.multipartComponents && 0 < c.multipartComponents.length) {
                        for (var a, b = 0, h = 0; h < c.multipartComponents.length; h++) {
                            var g = e(c.multipartComponents[h], m);
                            g.visibleArea >= b && (b = g.visibleArea, a = c.multipartComponents[h])
                        }
                        return e(a, m)
                    }
                }

                function h() {
                    if (c.isCompositeAd && c.components && 1 < c.components.length) {
                        for (var d = {
                                area: 0,
                                visibleArea: 0,
                                percv: 0,
                                visibleRect: !1,
                                cumulRect: !1,
                                yMinMax: !1,
                                elGeo: !1,
                                rect: !1,
                                componentResults: []
                            }, g, f = 0; f < c.components.length; f++) g = e(c.components[f], m), d.area += g.area, d.visibleArea += g.visibleArea, d.componentResults.push(g);
                        d.percv = d.visibleArea / d.area;
                        c.compositeAdAreaPx = d.area;
                        (g = b(d.componentResults)) && "strict" === a.o.b(c.zr) && a.m.a.zaxs("rectsAvailable", c.zr, g.elRect, g.visibleRect)
                    } else d = e(c, m);
                    return d
                }
                c.viewabilityMethod.strict || (c.viewabilityMethod.strict = 1);
                if (1 == c.ao.skin) {
                    var g = {},
                        f = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
                    if ("width" == a.ab.a && a.ab.b <= c.adContent && 45 < f || !a.focus.pageIsVisible()) return g.isVisible = !1, g.isFullyVisible = !1, g.percv = 0, g;
                    g.isVisible = !0;
                    g.isFullyVisible = !0;
                    g.isDentsuVisible = !0;
                    g.percv = 1;
                    a.m.a.zaxs("adEdgesViewStatus", c.zr, {
                        topLeft: !0,
                        topRight: !0,
                        bottomLeft: !0,
                        bottomRight: !0
                    });
                    return g
                }
                g = c.isMultipartAd ? d(c, m) : c.isCompositeAd ? h(c, m) : e(c, m);
                "strict" === a.o.b(c.zr) && a.d.e && !a.d.k() && a.m.a.zaxs("rectsAvailable", c.zr, g.cumulRect, g.visibleRect);
                var f = a.aa.g(g, c),
                    k = a.aa.c;
                g.isVisible = g.percv >= f;
                g.isFullyVisible =
                    g.percv >= k;
                g.elGeo && (g.elGeo.threshold = f);
                c.videoIsFullscreen && 0 < g.percv && (g.isVisible = !0);
                .8 <= g.percv && (g.isDentsuVisible = !0);
                a.aa.d ? g.percv > a.aa.d && (a.aa.d = g.percv) : a.aa.d = g.percv;
                c.AD_RECT = g && g.rect;
                return g
            };
            a.aa.g = function(b, c) {
                return a.ac.a(b.area) ? (c.viewstats || (c.viewstats = {}), c.viewstats.isBigAd = !0, a.aa.b) : a.aa.a
            };
            a.aa.h = function() {
                return z
            };
            a.aa.i = e;
            a.aa.j = function(a, b) {
                z && w.hasOwnProperty(b) || f(a);
                return w[b]
            };
            a.aa.l = k;
            a.aa.m = a.d.u;
            a.aa.k = function(b, c, m, d) {
                try {
                    this.rect = m || b.getBoundingClientRect &&
                        b.getBoundingClientRect() || {}
                } catch (h) {
                    this.rect = m || b && {
                        top: b.offsetTop,
                        left: b.offsetLeft,
                        width: b.offsetWidth,
                        height: b.offsetHeight,
                        bottom: b.offsetTop + b.offsetHeight,
                        right: b.offsetLeft + b.offsetWidth
                    } || {}
                }
                m = "left right top bottom width height".split(" ");
                for (d = 0; d < m.length; d++) {
                    var g = m[d];
                    this[g] = this.rect[g]
                }
                b && b.adjustForClip && (m = a.b.db(b.style.clip)) && (this.left += m.left, this.right = this.left + m.right, this.top += m.top, this.bottom = this.top + m.bottom);
                b && b.CLIPCHECKINGTARGET && b.CLIPCHECKINGTARGET.style &&
                    "absolute" === b.CLIPCHECKINGTARGET.style.position && (m = a.b.db(b.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + m.right, this.left += m.left, this.bottom = this.top + m.bottom, this.top += m.top);
                this.width = this.right - this.left;
                this.height = this.bottom - this.top;
                this.el = b;
                this.win = c || b && a.b.bl(b);
                this.changeReferenceFrame = function(a) {
                    this.left += a.left;
                    this.right += a.left;
                    this.top += a.top;
                    this.bottom += a.top
                };
                this.calcArea = function() {
                    return (this.right - this.left) * (this.bottom - this.top)
                };
                this.getViewportRect = function(b) {
                    var c =
                        a.d.u(this.win);
                    b && (b.width < c.width && (c.width = b.width, c.right = c.left + c.width), b.height < c.height && (c.height = b.height, c.bottom = c.top + c.height));
                    return c
                }
            };
            a.aa.o = function(a, b, c) {
                return "undefined" === typeof a ? !1 : {
                    left: Number(b) + Number(a.left),
                    right: Number(b) + Number(a.right),
                    top: Number(c) + Number(a.top),
                    bottom: Number(c) + Number(a.bottom)
                }
            };
            a.aa.n = function(b, c) {
                if ("undefined" === typeof b || "undefined" === typeof c) return !1;
                var m = d(b.left, b.right, c.left, c.right),
                    h = d(b.top, b.bottom, c.top, c.bottom);
                return new a.aa.k(void 0,
                    void 0, {
                        left: m[0],
                        right: m[1],
                        top: h[0],
                        bottom: h[1]
                    })
            };
            a.aa.p = function(b, c, m, d) {
                if (!b || !c || !m) return !1;
                b = a.aa.i(b);
                if (!b) return !1;
                m = d || a.aa.n(c, m);
                if (!m) return !1;
                d = a.aa.o(b.visibleRect, c.left, c.top);
                return d ? (m = a.aa.n(d, m)) ? {
                    elementRect: a.aa.o(b.cumulRect, c.left, c.top),
                    visibleRect: m,
                    area: b.area,
                    calcVisiblePercv: function() {
                        return (this.visibleRect.right - this.visibleRect.left) * (this.visibleRect.bottom - this.visibleRect.top) / this.area
                    }
                } : !1 : !1
            };
            a.aa.q = c;
            a.aa.i = e;
            a.aa.s = function(b) {
                var c = b.aa;
                b = b.zr;
                if (c) {
                    if (a.d.t) c =
                        m(c, b);
                    else var d = g(new a.aa.k(c)).visibleRect,
                        d = A(d),
                        c = x(c, d, a.d.g.document, null, b);
                    return c
                }
            };
            a.aa.t = function(a) {
                return a ? (a.right - a.left) * (a.bottom - a.top) : !1
            };
            a.aa.u = function(b) {
                function c(b) {
                    return a.b.dg(b) || "string" === typeof b
                }
                return "object" === typeof b && c(b.left) && c(b.right) && c(b.top) && c(b.bottom) ? !0 : !1
            };
            a.aa.r = function(b, c) {
                if (!a.aa.u(b) || !a.aa.u(c)) return !1;
                var m = a.aa.n(b, c);
                if (!m) return !1;
                var d = a.aa.t(b);
                return m.calcArea() / d
            };
            a.m.a.azsx("adKilled", function(a) {
                a && !a.ep && delete w[a.zr]
            })
        })(p);
        (function(a) {
            function n(b) {
                var c = b.ad,
                    d = b.elem,
                    h = b.cbName,
                    g = b.rcbName,
                    e = b.options;
                b = b.isDummy;
                if (!c || !d || !e) return !1;
                if (d = a.ad.a(c, e.id, d, e)) {
                    if (b) return a.ad.call(c, d, function() {}), !0;
                    a.ad.call(c, d, a.ae.a, "'" + h + "','" + g + "'");
                    return !0
                }
            }

            function f(b) {
                var c = b.ad,
                    d = b.elem,
                    h = b.cbName,
                    g = b.options,
                    e = b.name,
                    f = b.customFn,
                    k = b.preserveDom,
                    l = b.argument || "";
                if (!(c && d && g && f)) return !1;
                if (b.customPixelDiv) return k = document.createElement("div"), b = g.id || a.b.dn(), a.b.dr(k, g), k.id = b, a.b.cu(k, d), {
                    killFn: f(h, e, c.zr, k)
                };
                b = a.ad.a(c, g.id, d, g);
                if (!b) return !1;
                a.ad.call(c, b, f, "'" + h + "', '" + e + "', '" + c.zr + "', '" + l + "'", null, k);
                return !0
            }
            a.s = {};
            var k = a.b.s(),
                e = null !== k,
                l = "number" === typeof a.d.aq(),
                g = a.d.ao,
                d = !1,
                c = !0,
                b = function() {
                    var a = navigator.appVersion.match(/Windows NT (\d\.\d)/);
                    return a ? parseFloat(a[1]) : -1
                }(),
                h = 6.2 <= b;
            a.s.b = k;
            a.s.c = e;
            a.s.d = l;
            a.s.e = b;
            a.s.f = h;
            var v = {
                FRAME_RATE: "fr",
                STAGE_WIDTH: "sd",
                ACTIVE_STAGE_WIDTH: "asd",
                THROTTLE: "td",
                RAPID_THROTTLE: "rtd"
            };
            a.s.g = v;
            a.s.h = a.d.p;
            a.s.i = a.b.bf && a.b.bf();
            a.s.j = !1;
            if (a.s.h) try {
                var x =
                    a.b.dq();
                a.s.j = 5 < x
            } catch (A) {}
            a.s.k = !1;
            a.s.l = function(a) {
                if (a.currentFocusState) {
                    if ("center" != a.config.name) {
                        var b, c, d = (b = a.manager.getPixelByName("center")) && (c = b.viewstates[a.manager.getTargetViewState()]) && c.inview;
                        b = a.manager.reachedAnyInview;
                        if (!d && b) {
                            a.skipWidthCheck = !0;
                            return
                        }
                    }
                    a.skipWidthCheck = !1
                } else a.skipWidthCheck = !0
            };
            a.s.m = function(b) {
                var c = a.s.l;
                if (b && b.ao && "true" === b.ao.zMoatTaboola) var d = b.aa.parentNode,
                    d = d && d.parentNode || d;
                else d = b.aa.parentNode;
                var h = {
                    insertableFunc: a.s.n,
                    pixels: [{
                        name: "center",
                        id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                        target: b.aa,
                        container: d,
                        position: {
                            top: "50%",
                            left: "50%"
                        },
                        onWidthCheck: c
                    }, {
                        name: "topLeft",
                        id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                        target: b.aa,
                        container: d,
                        position: {
                            top: "0px",
                            left: "0px"
                        },
                        onWidthCheck: c
                    }, {
                        name: "bottomRight",
                        id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                        target: b.aa,
                        container: d,
                        position: {
                            top: "100%",
                            left: "100%"
                        },
                        onWidthCheck: c
                    }]
                };
                h.pixels.push({
                    name: "dentsuTopLeft",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "20%",
                        left: "20%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "dentsuBottomRight",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "80%",
                        left: "80%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "topLeft30",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "30%",
                        left: "30%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "topRight30",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "30%",
                        left: "70%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "bottomLeft30",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "70%",
                        left: "30%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "bottomRight30",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "70%",
                        left: "70%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "bottomLeft",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "100%",
                        left: "0%"
                    },
                    onWidthCheck: c
                });
                h.pixels.push({
                    name: "topRight",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "0%",
                        left: "100%"
                    },
                    onWidthCheck: c
                });
                a.d.cc && h.pixels.push({
                    name: "dummy",
                    id: "moatPx" + b.zr + "_" + t.ceil(1E6 * t.random()),
                    target: b.aa,
                    container: d,
                    position: {
                        top: "0%",
                        left: "50%"
                    },
                    onWidthCheck: c
                });
                return h
            };
            a.s.o = function(b) {
                var c = 0,
                    d = b.getTargetViewState();
                a.b.forEach(b.pixels, function(a) {
                    a.measurable && a.viewstates && a.viewstates[d] && c++
                });
                return c === b.pixels.length
            };
            a.s.p = function(b, c) {
                var d = !1,
                    h = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top &&
                        a.measurable && a.viewstates && a.viewstates[c] && (d = !0);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (h = !0)
                });
                return d && h ? !0 : !1
            };
            a.s.q = function(b, c) {
                var d = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c]) return d = !0, !1
                });
                return d
            };
            a.s.r = function(b, c) {
                var d = !1,
                    h = !1,
                    g = !1,
                    e = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top &&
                        a.measurable && a.viewstates && a.viewstates[c] && (d = !0);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (g = !0);
                    a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (h = !0);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (e = !0)
                });
                return d && e && g && h
            };
            a.s.s = function(b, c) {
                var d = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && a.viewstates && a.viewstates[c] &&
                        (d = a.viewstates[c].inview)) return !1
                });
                return d
            };
            a.s.t = function(b, c) {
                var d = !1;
                a.b.forEach(b.pixels, function(a) {
                    if (a.config && "50%" == a.config.position.left && "50%" == a.config.position.top && a.viewstates && a.viewstates[c]) return d = a.viewstates[c].inview, !1
                });
                return d
            };
            a.s.u = function(b, c) {
                var d = !1,
                    h = !1;
                if (b.edgesInView.tlPixelInview && b.edgesInView.brPixelInview && !b.inview) return !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] &&
                        (d = a.viewstates[c].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (h = a.viewstates[c].inview)
                });
                b.edgesInView.tlPixelInview = d;
                b.edgesInView.brPixelInview = h;
                return d && h ? !0 : !1
            };
            a.s.v = function(b, c) {
                var d = !1,
                    h = !1,
                    g = !1,
                    e = !1,
                    f = !1,
                    k = !1,
                    l = !1,
                    v = !1;
                a.b.forEach(b.pixels, function(a) {
                    a.config && "topLeft" == a.config.name && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
                    a.config && "topLeft30" == a.config.name && a.viewstates && a.viewstates[c] &&
                        (h = a.viewstates[c].inview);
                    a.config && "topRight" == a.config.name && a.viewstates && a.viewstates[c] && (g = a.viewstates[c].inview);
                    a.config && "topRight30" == a.config.name && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview);
                    a.config && "bottomLeft" == a.config.name && a.viewstates && a.viewstates[c] && (f = a.viewstates[c].inview);
                    a.config && "bottomLeft30" == a.config.name && a.viewstates && a.viewstates[c] && (k = a.viewstates[c].inview);
                    a.config && "bottomRight" == a.config.name && a.viewstates && a.viewstates[c] && (l = a.viewstates[c].inview);
                    a.config && "bottomRight30" == a.config.name && a.viewstates && a.viewstates[c] && (v = a.viewstates[c].inview)
                });
                return d && g && (e || h) || f && l && (v || k) || d && f && (h || k) || g && l && (e || v)
            };
            a.s.w = function(b, c) {
                if (b.inview) return !0;
                var d = !1,
                    h = !1,
                    g = !1,
                    e = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (d = a.viewstates[c].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] &&
                        (g = a.viewstates[c].inview);
                    a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (h = a.viewstates[c].inview);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview)
                });
                return d && h || g && e
            };
            a.s.x = function(b, c) {
                if (!b.inview) return !1;
                var d = !1,
                    h = !1,
                    g = !1,
                    e = !1;
                a.b.forEach(b.pixels, function(a) {
                    "0px" == a.config.position.left && "0px" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] &&
                        (d = a.viewstates[c].inview);
                    "100%" == a.config.position.left && "100%" == a.config.position.top && a.measurable && a.viewstates && a.viewstates[c] && (g = a.viewstates[c].inview);
                    a.config && "20%" == a.config.position.left && "20%" == a.config.position.top && a.viewstates && a.viewstates[c] && (h = a.viewstates[c].inview);
                    a.config && "80%" == a.config.position.left && "80%" == a.config.position.top && a.viewstates && a.viewstates[c] && (e = a.viewstates[c].inview)
                });
                return d && e || g && h
            };
            a.s.y = function(b) {
                a.b.forEach(b.periscopeManagerList, function(a) {
                    a &&
                        a.killAllPixels()
                });
                b.periscopeManagerList = null
            };
            a.s.z = function(b) {
                a.m.a.azsx("adKilled", a.s.y, {
                    once: !0,
                    condition: function(a) {
                        return b.zr === a.zr
                    }
                });
                a.s.aa(b.periscopeConfig) || (b.periscopeConfig = a.s.m(b));
                b.periscopeManager = new a.s.ab(b.periscopeConfig, b.zr);
                a.s.a = b.periscopeManager.insertSuccessful;
                b.periscopeManagerList || (b.periscopeManagerList = []);
                b.periscopeManagerList.push(b.periscopeManager);
                return b.periscopeManager.insertSucceeded
            };
            a.s.a = !1;
            a.s.ac = function() {
                c = !0
            };
            a.s.ad = function() {
                return a.d.bo ||
                    !a.d.bn || "0" === a.b.bf()
            };
            a.s.n = function() {
                var b = a.s.ad(),
                    c = a.d.cc || a.d.ey,
                    d = e || g;
                return b && !c ? !1 : (!a.b.l() || c) && !a.d.e && (d || l || a.s.j)
            };
            a.s.ae = function(b) {
                var c = 11;
                a.d.ey && (c = 14);
                a.d.cc && (c = 12);
                b.viewabilityMethod.pscope = c;
                return b && b.periscopeManager ? ((c = b.periscopeManager.pixels && b.periscopeManager.pixels[0] && b.periscopeManager.pixels[0].targetRect) && b.viewstats && (b.viewstats.isBigAd = a.ac.a(c.calcArea())), a.o.c(b, !1) && a.af.a(b.zr) && b.periscopeManager.killDentsuPixels(), b.periscopeManager.getViewStats()) : {
                    isVisible: !1
                }
            };
            a.s.af = function() {};
            a.s.aa = function(b) {
                if ("object" !== typeof b || "function" !== typeof b.insertableFunc || !a.b.f(b.pixels) || 0 == b.pixels.length) return !1;
                var c = !1;
                a.b.forEach(b.pixels, function(a) {
                    a.id && a.target && a.container && "object" === typeof a.position && "string" === typeof a.position.top && "string" === typeof a.position.left || (c = !0)
                });
                return !c
            };
            a.s.ag = function() {
                return h && e && 10 <= k
            };
            a.s.ah = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
            a.s.ai = function() {
                var b = {};
                return function(c) {
                    if ("string" !== typeof c) return !1;
                    if ("undefined" !== typeof b[c]) return b[c];
                    var d, h;
                    (d = c.match(a.s.ah)) && 3 == d.length && (h = d[2], d = -1 != d[1].indexOf(".") ? parseInt(d[1], 10) : parseFloat(d[1], 10));
                    if ("number" !== typeof d) return !1;
                    b[c] = {
                        val: d,
                        type: h
                    };
                    return b[c]
                }
            }();
            a.s.aj = function(b, d) {
                this.config = b;
                this.measurable = this.inserted = !1;
                this.viewstates = {};
                this.manager = d;
                this.killed = !1;
                this.cbNames = [];
                this.skipWidthCheck = !1;
                this.loopIds = [];
                this.getPeriscopeAssetURI = function() {
                    return "https://z.moatads.com/swf/p6.v3.swf"
                };
                this.getDummyPixel = function(b) {
                    if (!b) return !1;
                    var c = !1;
                    a.b.forEach(b.manager && b.manager.pixels, function(a) {
                        a.config && "dummy" === a.config.name && (c = a)
                    });
                    return c
                };
                this.resetDummyPixel = function(b) {
                    if (a.d.cc && (b = b && b[0])) {
                        if (b.dummyPixel) b = b.dummyPixel;
                        else {
                            b = this.getDummyPixel(b);
                            if (!b) return;
                            b.dummyPixel = b
                        }
                        var c = b.manager && b.manager.adNum;
                        if ("number" === typeof c && !isNaN(c) && (c = u && u[c])) {
                            var d = b.config && b.config.id;
                            if ("string" === typeof d) {
                                var h = b.element && b.element.getAttribute && b.element.getAttribute("style");
                                if ("string" === typeof h) {
                                    var m = b.wrapperDiv;
                                    if (m) {
                                        var g = b.cbNames && b.cbNames[0];
                                        if (g) {
                                            var e = b.cbNames && b.cbNames[1];
                                            if (e) {
                                                var f = b.targetDoc;
                                                f && (a.ad.b(c, d, !0), n({
                                                    ad: c,
                                                    elem: m,
                                                    cbName: g,
                                                    rcbName: e,
                                                    options: {
                                                        width: b.width,
                                                        height: b.height,
                                                        style: h,
                                                        id: d,
                                                        frameborder: 0
                                                    },
                                                    noLog: !0,
                                                    isDummy: !0
                                                }), b.element = f.getElementById(d))
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                this.resetDummyPixelCB = a.p.l(a.b.dk([
                    [this]
                ], this.resetDummyPixel, this));
                this.insertIntoDOM = function() {
                    if (this.inserted) return !1;
                    var b, c, h, g;
                    h = -9999;
                    e ? (c = b = 2, a.d.ey && 10 > k && (g = h = 0)) : (c = b = 1, g = 0);
                    a.d.cc && (c = b = 8);
                    this.config.dimensions &&
                        (b = this.config.dimensions.width, c = this.config.dimensions.height);
                    var l = "position: absolute; width: " + b + "px; height: " + c + "px; z-index: " + h + "; border-style: none;";
                    a.s.j && (l = "position: absolute !important; width: " + b + "px !important; height: " + c + "px !important; z-index: " + h + "!important; border-style: none !important; display: block !important; -webkit-transform: translate3d(0, 0, 0) !important;");
                    a.d.cc && (l += "pointer-events: none !important;");
                    h = this.config.id;
                    var v = this.getPeriscopeAssetURI(),
                        x = this.calcPosition();
                    if (!x) return !1;
                    var x = l + "left: " + x.left + "px; top: " + x.top + "px;",
                        w = l + "left: 0px; top: 0px;",
                        z = this.config.target.ownerDocument;
                    this.targetDoc = z;
                    var A = a.b.bl(this.config.target);
                    if (!A) return !1;
                    l = "Moat#PSCB_" + u[this.manager.adNum].yg + "_" + t.floor(1E8 * t.random());
                    A[l] = this.onStateChangeCB;
                    this.cbNames.push(l);
                    if (a.d.cc) {
                        var X = "Moat#PSRCB" + t.floor(1E8 * t.random());
                        A[X] = this.resetDummyPixelCB;
                        this.cbNames.push(X)
                    }
                    var p = this.config.callback,
                        O = this.config.callbackName;
                    p && O && (A[O] = p, this.cbNames.push(O));
                    A = "sco=" +
                        encodeURIComponent(l) + "&tvs=" + this.manager.getTargetViewState();
                    z = z.createElement("div");
                    z.id = "moatPxDiv" + t.ceil(1E6 * t.random());
                    z.style.width = "0px";
                    z.style.height = "0px";
                    z.style.position = "absolute";
                    z.style.top = "0px";
                    z.style.left = "0px";
                    this.wrapperDiv = z;
                    a.b.cu(z, this.config.container);
                    v = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + b + '" height="' + c + '" style="' + x + '" id="' + h + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' +
                        v + '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' + A + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' + v + '" quality="low" flashvars="' + A + '" bgcolor="" wmode="transparent" width="' + b + '" height="' + c + '" id="' + h + 'e" name="' + h + '" style="' + w + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>';
                    a.d.ey && (this.config.customPixel = !0, this.config.customFn = a.ag.a, this.config.preserveDom = !0, this.config.argument = k, O = l);
                    if (a.d.cc) {
                        if (!n({
                                ad: u[d.adNum],
                                elem: z,
                                cbName: l,
                                rcbName: X,
                                options: {
                                    width: b,
                                    height: c,
                                    style: x,
                                    id: h,
                                    frameborder: g
                                },
                                noLog: !1,
                                isDummy: this.config && "dummy" === this.config.name
                            })) return !1;
                        d.measurable = !0;
                        d.fullyMeasurable = !0;
                        d.dentsuMeasurable = !0;
                        d.anyMeasurable = !0
                    } else if (!a.d.bo) z.innerHTML = v;
                    else if (this.config.customPixel) {
                        b = f({
                            ad: u[d.adNum],
                            elem: z,
                            cbName: O,
                            name: this.config.name,
                            options: {
                                width: b,
                                height: c,
                                style: x,
                                id: h,
                                frameborder: g,
                                scrolling: "no"
                            },
                            noLog: !1,
                            customFn: this.config.customFn,
                            argument: this.config.argument,
                            preserveDom: this.config.preserveDom,
                            customPixelDiv: this.config.customPixelDiv
                        });
                        if (!b) return !1;
                        b.killFn && (this.config.killFn = b.killFn);
                        a.d.ey && (d.measurable = !0, d.fullyMeasurable = !0, d.dentsuMeasurable = !0, d.anyMeasurable = !0)
                    }
                    return this.inserted = !0
                };
                this.startIntervals = function() {
                    var b = this.getPixelElement();
                    if (!b) return !1;
                    if (8 == k && (this.manager.getTargetViewState() === v.STAGE_WIDTH ||
                            this.manager.getTargetViewState() === v.ACTIVE_STAGE_WIDTH)) {
                        var c = "positionToggle#" + this.config.id;
                        this.loopIds.push(c);
                        a.p.j()[c] || (this.positionTogglingEnabled = !0, this.positionOffsets || (this.positionOffsets = {}), a.p.g(this.positionToggle, {
                            pxSwf: b,
                            pxRef: this
                        }, 100, c))
                    }
                    this.manager.getTargetViewState() === v.STAGE_WIDTH && (c = "stageWidthLoop#" + this.config.id, this.loopIds.push(c), a.p.j()[c] || a.p.g(this.stageWidthToggle, {
                        pxSwf: b,
                        pxRef: this,
                        originalWidth: b.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0
                    }, 150, c));
                    this.manager.getTargetViewState() === v.ACTIVE_STAGE_WIDTH && (c = "activeStageWidthLoop#" + this.config.id, this.loopIds.push(c), a.p.j()[c] || a.p.g(this.stageWidthToggle, {
                        pxSwf: b,
                        pxRef: this,
                        originalWidth: b.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0,
                        active: !0,
                        onWidthCheck: this.config.onWidthCheck
                    }, 200, c))
                };
                this.stageWidthToggle = function(a) {
                    if (!(a.pxSwf && a.pxSwf.parentNode && a.pxRef)) return !1;
                    if (a.onWidthCheck && (a.onWidthCheck(a.pxRef), a.pxRef.skipWidthCheck)) return !0;
                    var b;
                    if (a.parsedWidth || (b = a.pxSwf.style.width.match(a.widthRe)))
                        if (a.parsedWidth ||
                            (a.parsedWidth = parseInt(b[0], 10)), 1 == a.updates ? (a.updates = 0, a.pxSwf.style.width = a.originalWidth, b = a.parsedWidth) : (a.updates = 1, b = 1 < a.parsedWidth ? a.parsedWidth - 1 : a.parsedWidth + 1, a.pxSwf.style.width = b + "px"), a.active && a.pxSwf.currentPW) try {
                            a.pxSwf.currentPW(b)
                        } catch (c) {}
                };
                this.positionToggle = function(a) {
                    if (!a.pxRef || !a.pxRef.element) return !1;
                    0 > a.pxRef.positionOffsets.yOffset ? (a.pxRef.positionOffsets.yOffset = 0, a.pxRef.positionOffsets.xOffset = 0) : (a.pxRef.positionOffsets.yOffset = -2E3, a.pxRef.positionOffsets.xOffset = -2E3);
                    a.pxRef.updatePosition(!0)
                };
                this.onStateChange = function(b) {
                    if (!this.measurable) {
                        this.measurable = !0;
                        var c;
                        b && b[0] && b[0].rev && (c = b[0].rev.match(a.s.ak)) && 3 == c.length && (a.s.al = c[1], a.s.i = c[2]);
                        this.updateFocusState();
                        this.startIntervals()
                    }
                    this.inserted && this.killed ? (this.killed = !1, this.updateFocusState(), this.startIntervals()) : (a.b.forEach(b, function(a) {
                        this.viewstates[a.name] = a
                    }, this), this.manager.onStateChange(this, b))
                };
                this.onStateChangeCB = a.p.l(a.b.dk([], this.onStateChange, this));
                this.calcPosition =
                    function() {
                        var b = {},
                            c = this.config.position.left,
                            d = a.s.ai(this.config.position.top),
                            c = a.s.ai(c),
                            h, m;
                        this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new a.aa.k(this.config.positionTarget, this.config.positionTargetWindow, null, !0) : (this.targetRect = new a.aa.k(this.config.positionTarget, null, null, !0), this.config.positionTargetWindow = this.targetRect.win) : (this.targetRect = this.targetRect ? new a.aa.k(this.config.target, this.targetRect.win, null, !0) : new a.aa.k(this.config.target, null,
                            null, !0), 0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top && 0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new a.aa.k(this.config.target.parentNode, null, null, !0), this.config.positionTarget = this.config.target.parentNode));
                        h = a.aa.q("left", this.targetRect.win);
                        m = a.aa.q("top", this.targetRect.win);
                        var g;
                        this.wrapperDiv && (g = this.wrapperDiv.offsetParent) && "BODY" !== g.nodeName ? this.offsetRect =
                            this.offsetRect ? new a.aa.k(g, this.offsetRect.win, null, !0) : new a.aa.k(g, null, null, !0) : this.offsetRect = {
                                left: -h,
                                top: -m
                            };
                        if (!d || !c) return !1;
                        if ("%" == d.type) b.relativeTop = d.val / 100 * this.targetRect.height, b.top = this.targetRect.top - this.offsetRect.top + d.val / 100 * this.targetRect.height;
                        else if ("px" == d.type) b.relativeTop = d.val, b.top = this.targetRect.top - this.offsetRect.top + d.val;
                        else return !1;
                        if ("%" == c.type) b.relativeLeft = c.val / 100 * this.targetRect.width, b.left = this.targetRect.left - this.offsetRect.left + c.val /
                            100 * this.targetRect.width;
                        else if ("px" == c.type) b.relativeLeft = c.val, b.left = this.targetRect.left - this.offsetRect.left + c.val;
                        else return !1;
                        b && b.top && b.left && this.targetRect && (b.top == this.targetRect.top + this.targetRect.height && --b.top, b.left == this.targetRect.left + this.targetRect.width && --b.left);
                        return b
                    };
                this.maxPositionUpdateInterval = 200;
                this.getStyle = function(a) {
                    var b;
                    try {
                        b = a && a.style
                    } catch (c) {}
                    return b
                };
                this.updatePosition = function(a) {
                    var b = (new q).getTime(),
                        c;
                    if (!this.element || !(c = this.getStyle(this.element)) ||
                        this.killed || !a && b - this.lastPositionUpdate < this.maxPositionUpdateInterval) return !1;
                    this.lastPositionUpdate = b;
                    a = this.calcPosition();
                    if (!a) return !1;
                    this.positionOffsets && (a.left += this.positionOffsets.xOffset || 0, a.top += this.positionOffsets.yOffset || 0);
                    c.left = this.width + a.relativeLeft > this.targetRect.width ? t.floor(a.left - this.width) + "px" : 0 == a.relativeLeft ? t.floor(a.left) + "px" : t.floor(a.left - .5 * this.width) + "px";
                    c.top = this.height + a.relativeTop > this.targetRect.height ? t.floor(a.top - this.height) + "px" : 0 == a.relativeTop ?
                        t.floor(a.top) + "px" : t.floor(a.top - .5 * this.height) + "px";
                    return !0
                };
                this.updateFocusState = function() {
                    var a = this.getPixelElement();
                    if (a && this.measurable) try {
                        a.updateFocusState(this.currentFocusState)
                    } catch (b) {}
                };
                this.kill = function(b) {
                    var c = this.getPixelElement(),
                        d = a.b.bl(c),
                        h = a.b.bl(this.config.target);
                    d && c && c.dataMoatTIDS && a.b.forEach(c.dataMoatTIDS, function(a) {
                        d.clearTimeout(a)
                    });
                    a.b.forEach(this.loopIds, function(b) {
                        a.p.i(b)
                    });
                    for (var c = 0, m = this.cbNames.length; c < m; c++) try {
                        h[this.cbNames[c]] = null, delete h[this.cbNames[c]]
                    } catch (g) {}
                    this.targetDoc =
                        null;
                    return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv), this.killed = !0, this.inserted = !1, this.element = this.wrapperDiv = null, b && (this.config && this.config.killFn && "function" === typeof this.config.killFn && (this.config.killFn(), this.config.killFn = null), this.config = null), !0) : !1
                };
                this.getPixelElement = function() {
                    var a, b, c = this.config && this.config.id;
                    if (this.targetDoc && c) {
                        a = this.targetDoc.getElementById(c);
                        if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a;
                        a =
                            this.targetDoc.getElementById(c + "e");
                        if (b = !!(a && a.isPxSwf && a.isPxSwf())) return a
                    }
                    return !1
                };
                if ("embed" === b.container.nodeName || "object" === b.container.nodeName) {
                    var h;
                    a.b.forEach(a.b.bn(b.container), function(a) {
                        if ("embed" !== a.nodeName && "object" !== a.nodeName) return h = a, !1
                    });
                    if (!h) return !1;
                    this.config.container = h
                }
                if (!c) {
                    var g = document.getElementById("moatPxCont" + this.manager.contId);
                    g || (g = document.createElement("div"), g.id = "moatPxCont" + this.manager.contId, g.offsetWidth = this.config.target.offsetWidth,
                        g.offsetHeight = this.config.target.offsetHeight, g.offsetTop = this.config.target.offsetTop || "0px", g.offsetLeft = this.config.target.offsetLeft || "0px", g.style.position = "absolute", g.style.overflow = "hidden", g.style.zIndex = -9999, a.b.cu(g, this.config.container));
                    this.config.container = g;
                    this.config.container && !this.manager.container && (this.manager.container = this.config.container)
                }
                if (!this.insertIntoDOM()) return !1;
                this.element = this.targetDoc.getElementById(this.config.id);
                if (!this.element) return !1;
                g = new a.aa.k(this.element,
                    null, null, !0);
                this.width = g.width;
                this.height = g.height;
                if (!this.updatePosition()) return !1;
                this.currentFocusState = a.focus.pageIsVisible();
                this.focusCheckingLoop = function(b) {
                    var c = a.focus.pageIsVisible();
                    if (!b.pxRef) return !1;
                    var h = b.pxRef;
                    h.currentFocusState != c && (h.currentFocusState = !h.currentFocusState, h.killed || h.updateFocusState(), a.d.cc && (b = d && "number" === typeof d.adNum && u[d.adNum], h = h && h.config && h.config.id, b && h && a.ad && a.ad.call(b, h, "(function(){var innerFunction = window && window['" + (c ? "onFocus" :
                        "onBlur") + "'];if (typeof innerFunction === 'function') { innerFunction(); } }())")))
                };
                this.rebuildOnFocusLoss = function() {
                    e && (this.currentFocusState || this.killed || !this.inserted ? this.currentFocusState && this.killed && !this.inserted && (this.insertIntoDOM.call(this), (this.element = this.targetDoc.getElementById(this.config.id)) && this.updatePosition()) : this.kill())
                };
                this.rebuildTarget = function(a, b) {
                    this.config.target = a;
                    this.config.container = b;
                    this.targetDoc = this.config.target.ownerDocument;
                    this.updatePosition()
                };
                this.positionUpdateLoop = function(a) {
                    if (!a.pxRef) return !1;
                    a.pxRef.killed || a.pxRef.updatePosition()
                };
                var g = "focusCheckingLoop#" + this.config.id,
                    l = "positionUpdateLoop#" + this.config.id;
                this.loopIds.push(g);
                this.loopIds.push(l);
                a.p.g(this.focusCheckingLoop, {
                    pxRef: this
                }, 200, g);
                a.p.g(this.positionUpdateLoop, {
                    pxRef: this
                }, 500, l);
                this.inserted = !0;
                this.insertionTime = (new q).getTime()
            };
            a.s.ak = /([0-9a-z]+-[a-z]+)-(.*)/i;
            a.s.ab = function(b, h) {
                this.insertedAllSuccessfully = this.insertSuccessful = !1;
                this.pixels = [];
                this.adNum =
                    h;
                this.anyInview = this.fullyInview = this.inview = !1;
                this.edgesInView = {};
                this.edgesInView.tlPixelInview = !1;
                this.twentyPercentInView = this.dentsuInview = this.dentsuMeasurable = this.anyMeasurable = this.fullyMeasurable = this.measurable = this.reachedAnyInview = this.reachedFullyInview = this.reachedInview = this.edgesInView.brPixelInview = !1;
                this.getPixelByName = function(b) {
                    var c;
                    a.b.forEach(this.pixels, function(a) {
                        if (a.config.name && a.config.name == b) return c = a, !1
                    });
                    return c || !1
                };
                this.getTargetViewState = function() {
                    var b =
                        v.FRAME_RATE;
                    !e && !g || a.d.ey || (b = v.ACTIVE_STAGE_WIDTH);
                    a.s.j && !a.d.cc && (b = v.ACTIVE_STAGE_WIDTH);
                    return b
                };
                this.onStateChange = function(b, c) {
                    var h = this.getTargetViewState(),
                        m = a.focus.pageIsVisible(),
                        g = "undefined" != typeof u && u[this.adNum];
                    b.targetRect && (this.isBigAd = a.ac.a(b.targetRect.calcArea()), g && g.viewstats && (g.viewstats.isBigAd = this.isBigAd));
                    this.anyMeasurable || (this.anyMeasurable = !0);
                    this.fullyMeasurable || (this.fullyMeasurable = a.s.p(this, h));
                    this.measurable || (this.measurable = a.s.q(this, h), a.s.am =
                        (new q).getTime());
                    this.dentsuMeasurable || (this.dentsuMeasurable = a.s.r(this, h));
                    if (1 == c.length) {
                        if (c[0].name != h) return !1
                    } else {
                        var e = !0;
                        a.b.forEach(c, function(a) {
                            if (a.name == h) return e = !1
                        });
                        if (e || !m) return !1
                    }
                    this.anyMeasurable && (this.anyInview = a.s.s(this, h));
                    this.measurable && ((this.anyInview = a.s.s(this, h)) && !this.reachedAnyInview && (this.reachedAnyInview = !0), this.inview = a.s.t(this, h), this.thirtyPercentInView = a.s.v(this, h), this.inview && !this.reachedInview && (this.reachedInview = !0), !d && a.s.j && g && (d = !0,
                        a.u.b(g)));
                    this.fullyMeasurable && (this.fullyInview = a.s.u(this, h)) && !this.reachedFullyInview && (this.reachedFullyInview = !0);
                    this.dentsuMeasurable && (this.dentsuInview = a.s.x(this, h), this.twentyPercentInView = a.s.w(this, h));
                    a.m.a.zaxs("periscope:onStateChange", this.adNum)
                };
                this.getViewStats = function() {
                    var b = 0;
                    if (this.fullyInview) b = 1;
                    else if (this.dentsuInview) b = .8;
                    else if (this.inview) b = .5;
                    else if (this.thirtyPercentInView) b = .3;
                    else if (this.twentyPercentInView) b = .2;
                    else if (this.anyInview || this.reachedAnyInview &&
                        !this.sentReachedAnyInview) this.sentReachedAnyInview = !0, b = .01;
                    var c = "pscope" === a.o.b(this.adNum);
                    this.edgesInView && c && a.m.a.zaxs("adEdgesViewStatus", this.adNum, {
                        topLeft: this.edgesInView.tlPixelInview,
                        topRight: this.edgesInView.tlPixelInview,
                        bottomLeft: this.edgesInView.brPixelInview,
                        bottomRight: this.edgesInView.brPixelInview
                    });
                    b = {
                        isVisible: this.inview,
                        isFullyVisible: this.fullyInview,
                        isDentsuVisible: this.dentsuInview,
                        percv: b
                    };
                    b.isVisible = this.inview || this.isBigAd && this.thirtyPercentInView;
                    return b
                };
                this.getPercentViewable = function(b, c) {
                    var d = this.getTargetViewState(),
                        h = [],
                        m = b * c,
                        g, e, f;
                    a.b.forEach(this.pixels, function(a) {
                        a.measurable && a.viewstates && a.viewstates[d] && a.viewstates[d].inview && (e = parseInt(a.config.position.top), -1 < a.config.position.top.indexOf("%") && (e = e / 100 * c), h.push(e))
                    });
                    0 === h.length ? g = 0 : (g = t.min.apply(null, h), f = t.max.apply(null, h), g = b * (f - g));
                    return t.round(g / m * 100)
                };
                this.killDentsuPixels = function() {
                    a.b.forEach(this.pixels, function(b) {
                        !b.config || "dentsuTopLeft" !== b.config.name &&
                            "dentsuBottomRight" !== b.config.name || ((a.d.cc || a.d.ey) && a.ad.b(u[b.manager.adNum], b.config.id), b.kill())
                    })
                };
                this.rebuildPixelTargets = function(b, c) {
                    if (!b || !c) return !1;
                    a.b.forEach(this.pixels, function(a) {
                        a.rebuildTarget(b, c)
                    })
                };
                this.killAllPixels = function() {
                    a.b.forEach(this.pixels, function(a) {
                        a.kill(!0)
                    });
                    this.pixels = []
                };
                this.updateContainer = function(b) {
                    function c(b, m) {
                        var g = h[m],
                            e = h.style && h.style[b];
                        if (!a.b.dg(g))
                            if (a.b.dg(e)) g = e;
                            else return !1;
                        if (d[m] === g || !d.style) return !1;
                        d.style[b] = g + "px"
                    }
                    b.container ||
                        (b.container = document.getElementById("moatPxCont" + b.contId));
                    b.adElement || (b.adElement = u[b.adNum] && u[b.adNum].aa);
                    var d = b.container,
                        h = b.adElement;
                    if (!d || !h) return !1;
                    c("left", "offsetLeft");
                    c("top", "offsetTop");
                    c("width", "offsetWidth");
                    c("height", "offsetHeight")
                };
                if (b.insertableFunc()) {
                    var f = 0;
                    this.contId = t.ceil(1E6 * t.random());
                    a.b.forEach(b.pixels, function(b, c) {
                        this.pixels.push(new a.s.aj(b, this));
                        this.pixels[c].inserted && (f++, this.insertSuccessful = !0)
                    }, this);
                    this.insertedAllSuccessfully = f === this.pixels.length;
                    c || a.p.g(this.updateContainer, this, 200, "pixelContainerResizeLoop#" + this.contId)
                }
            }
        })(p);
        (function(a) {
            function n(a, b, c) {
                a.IR5.MIN[c] = t.min(b, a.IR5.MIN[c]) || b || 1;
                a.IR5.MAX[c] = t.max(b, a.IR5.MAX[c]) || b
            }

            function f(b) {
                if (x) return !0;
                var c = r.swde.azsx("focusStateChange", function(c) {
                    var d = {
                        type: "blur"
                    };
                    c || (a.ah.g(d, b), a.ah.h(d, b))
                });
                a.m.a.azsx("adKilled", function() {
                    r.swde.sxaz("focusStateChange", {
                        id: c
                    })
                }, {
                    once: !0,
                    condition: function(a) {
                        return b.zr == a.zr
                    }
                });
                x = !0
            }

            function k(a, b) {
                b.be = t.max("undefined" !== typeof b.be ?
                    b.be : 0, a - b.bf);
                "undefined" === typeof b.by && 500 <= b.be && (b.by = b.bk)
            }

            function e(b) {
                b.az === a.ah.a.d.a ? b.az = a.ah.a.d.b : b.az === a.ah.a.d.b && (b.az = a.ah.a.d.a)
            }

            function l(b) {
                b.ba === a.ah.a.d.a ? b.ba = a.ah.a.d.b : b.ba === a.ah.a.d.b && (b.ba = a.ah.a.d.a)
            }

            function g(b) {
                b.ax === a.ah.a.b.a ? b.ax = a.ah.a.b.b : b.ax === a.ah.a.b.b && (b.ax = a.ah.a.b.a)
            }

            function d(b) {
                b.ay === a.ah.a.c.a ? b.ay = a.ah.a.c.b : b.ay === a.ah.a.c.b && (b.ay = a.ah.a.c.a)
            }

            function c(a, b) {
                "undefined" === typeof b.bk && (b.bk = 0);
                b.bk += a - b.bo;
                b.bo = a
            }

            function b(a, b) {
                "undefined" ===
                typeof b.bl && (b.bl = 0);
                b.bl += a - b.bp;
                b.bp = a
            }

            function h(a, b) {
                "undefined" === typeof b.bg && (b.bg = 0);
                "undefined" === typeof b.bc && (b.bc = 0);
                b.bu = a - b.bs;
                b.bu > b.bc && (b.bc = b.bu);
                b.bg += a - b.bq;
                500 <= b.bc && "undefined" === typeof b.bw && (b.bk += a - b.bo, b.bw = b.bk);
                b.bq = a
            }

            function v(a, b) {
                "undefined" === typeof b.bh && (b.bh = 0);
                "undefined" === typeof b.bd && (b.bd = 0);
                b.bv = a - b.bt;
                b.bv > b.bd && (b.bd = b.bv);
                b.bh += a - b.br;
                500 <= b.bd && "undefined" === typeof b.bx && (b.bl += a - b.bp, b.bx = b.bl);
                b.br = a
            }
            a.ah = {};
            var x = !1;
            a.ah.a = {};
            a.ah.a.a = {};
            a.ah.a.a.a =
                0;
            a.ah.a.a.b = 1;
            a.ah.a.b = {};
            a.ah.a.b.a = 0;
            a.ah.a.b.b = 1;
            a.ah.a.c = {};
            a.ah.a.c.a = 0;
            a.ah.a.c.b = 1;
            a.ah.a.d = {};
            a.ah.a.d.a = 0;
            a.ah.a.d.b = 1;
            a.ah.a.e = {};
            a.ah.a.e.a = 0;
            a.ah.a.e.b = 1;
            a.ah.a.f = {};
            a.ah.a.f.a = 0;
            a.ah.a.f.b = 1;
            a.ah.a.f.c = 2;
            a.ah.b = function(a) {
                n(a, a.aj, "x");
                n(a, a.ak, "y");
                a.IR5.AREA = (a.IR5.MAX.x - a.IR5.MIN.x) * (a.IR5.MAX.y - a.IR5.MIN.y)
            };
            a.ah.c = function(b) {
                function c() {
                    500 <= (new q).getTime() - Ba && (a.ah.d({
                        type: "park"
                    }, b), clearInterval(h), b.au = a.ah.a.a.a)
                }
                var d = b.au;
                if (d === a.ah.a.a.a) {
                    Ba = (new q).getTime();
                    var h =
                        a.p.e(c, 50);
                    b.au = a.ah.a.a.b
                } else d === a.ah.a.a.b && (Ba = (new q).getTime())
            };
            a.ah.e = function(b) {
                function c() {
                    3E3 <= (new q).getTime() - ya && (a.ah.f({
                        type: "park"
                    }, b), clearInterval(h), b.av = a.ah.a.a.a)
                }
                var d = b.av;
                if (d === a.ah.a.a.a) {
                    ya = (new q).getTime();
                    var h = a.p.e(c, 50);
                    b.av = a.ah.a.a.b
                } else d === a.ah.a.a.b && (ya = (new q).getTime())
            };
            a.ah.g = function(b, d) {
                var h = b.type;
                f(d);
                if (d.az === a.ah.a.d.a) {
                    if ("mouseover" === h || "mousemove" === h) d.bo = (new q).getTime(), e(d)
                } else if (d.az === a.ah.a.d.b) {
                    "mousemove" === h && c((new q).getTime(),
                        d);
                    if ("mouseout" === h || "blur" === h) c((new q).getTime(), d), e(d);
                    "scooper" === h && c((new q).getTime(), d)
                }
            };
            a.ah.h = function(c, d) {
                var h = c.type;
                f(d);
                if (d.ba === a.ah.a.d.a) {
                    if ("mouseover" === h || "mousemove" === h) d.bp = (new q).getTime(), l(d)
                } else if (d.ba === a.ah.a.d.b) {
                    "mousemove" === h && b((new q).getTime(), d);
                    if ("mouseout" === h || "blur" === h) b((new q).getTime(), d), l(d);
                    "scooper" === h && b((new q).getTime(), d)
                }
            };
            a.ah.d = function(b, c) {
                if (2 != c.an) {
                    var d = b.type;
                    if (c.ax === a.ah.a.b.a) {
                        if ("mouseover" === d || "mousemove" === d) c.bq = (new q).getTime(),
                            c.bs = (new q).getTime(), g(c)
                    } else c.ax === a.ah.a.b.b && ("mousemove" !== d && "mouseout" !== d || h((new q).getTime(), c), "park" === d && h((new q).getTime() - 500, c), "mouseout" !== d && "park" !== d || g(c))
                }
            };
            a.ah.f = function(b, c) {
                if (2 != c.an) {
                    var h = b.type;
                    if (c.ay === a.ah.a.c.a) {
                        if ("mouseover" === h || "mousemove" === h) c.br = (new q).getTime(), c.bt = (new q).getTime(), d(c)
                    } else c.ay === a.ah.a.c.b && ("mousemove" !== h && "mouseout" !== h || v((new q).getTime(), c), "park" === h && v((new q).getTime() - 3E3, c), "mouseout" !== h && "park" !== h || d(c))
                }
            };
            a.ah.i =
                function(b, c) {
                    var d = b.type;
                    if (c.bb == a.ah.a.e.a) {
                        if ("mouseover" == d || "mousemove" == d) c.bf = (new q).getTime(), c.bb = a.ah.a.e.b
                    } else c.bb == a.ah.a.e.b && ("mouseout" == d ? (k((new q).getTime(), c), c.bb = a.ah.a.e.a) : "mousemove" != d && "scooper" != d || k((new q).getTime(), c))
                }
        })(p);
        (function(a) {
            function n(f) {
                var k = !1;
                if (a.d.dp()) return f.viewabilityMethod.sframe = 3, a.aj.a(f);
                if (a.d.ch) return f.viewabilityMethod.sframe = 4, a.ak.a(f);
                if (a.d.cl()) return f.viewabilityMethod.sframe = 5, a.al.a(f);
                if (a.d.bw()) return f.viewabilityMethod.sframe =
                    6, a.am.a(f);
                a.d.cr() && (f.viewabilityMethod.sframe = 7, k = a.an.a(f));
                return k
            }
            a.ai = {};
            a.ai.a = function(f) {
                var k = a.b.da(f);
                k && a.ac.a(k) ? (f.viewstats || (f.viewstats = {}), f.viewstats.isBigAd = !0, k = .3) : k = .5;
                k = (f = n(f)) && !isNaN(f) && f >= k;
                k = {
                    isVisible: k,
                    isFullyVisible: k && .98 <= f,
                    percv: f
                };
                .8 <= f && (k.isDentsuVisible = !0);
                return k
            }
        })(p);
        (function(a) {
            a.r = {};
            try {
                var n = -1 < navigator.platform.indexOf("Mac") ? 102 : 117
            } catch (l) {
                n = 117
            }
            var f = "undefined" !== typeof window.devicePixelRatio,
                k = a.d.e && f && "undefined" !== typeof window.innerHeight &&
                "undefined" !== typeof window.outerHeight && t.round(window.devicePixelRatio * (a.d.g.outerHeight - a.d.g.innerHeight)),
                e = function() {
                    var e = !1;
                    if (57 <= a.d.ew()) return !1;
                    try {
                        e = "undefined" !== typeof window.mozInnerScreenX && "undefined" !== typeof window.screenX
                    } catch (g) {}
                    return e
                }();
            a.r.b = function(e, g) {
                e.viewabilityMethod.pscope = 13;
                var d, c, b, h = {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                };
                try {
                    b = e.aa.getBoundingClientRect();
                    var k = g || e.WINDOW || a.b.bl(e.aa),
                        x = a.d.u(k),
                        A = a.aa.n(b, x),
                        m = k.mozInnerScreenX,
                        z = k.mozInnerScreenY,
                        w = {
                            left: A.left + m,
                            right: A.right + m,
                            top: A.top + z,
                            bottom: A.bottom + z
                        },
                        p = window.screenX,
                        J = window.screenY,
                        C = a.aa.n(w, {
                            left: p,
                            right: p + window.outerWidth,
                            top: J + n / (f ? window.devicePixelRatio : 1),
                            bottom: J + window.outerHeight
                        }),
                        y = b.width * b.height,
                        H = (C.right - C.left) * (C.bottom - C.top) / y;
                    "pscope" === a.o.b(e.zr) && a.m.a.zaxs("rectsAvailable", e.zr, w, C);
                    d = {
                        area: y,
                        percv: H
                    };
                    c = a.aa.g(d, e)
                } catch (t) {}
                b = a.aa.c;
                "undefined" !== typeof d && "undefined" !== typeof c && (h.isVisible = d.percv >= c, h.isFullyVisible = d.percv >= b, h.percv = d.percv, .8 <=
                    d.percv && (h.isDentsuVisible = !0));
                return h
            };
            a.r.a = function() {
                return e
            };
            a.r.c = function() {
                var a = {};
                a.dl = Number(e);
                "number" !== typeof k || isNaN(k) || (a.dn = k);
                return a
            }
        })(p);
        (function(a) {
            function n(a) {
                var d = 0,
                    c;
                return function() {
                    var b = (new q).getTime();
                    150 < b - d && (c = a.apply(this, arguments), d = b);
                    return c
                }
            }

            function f(g) {
                function d(a) {
                    "undefined" !== typeof g.overrideViewMethod && (a.viewabilityMethod[l] = g.overrideViewMethod);
                    return w(a)
                }
                var c = g.isVisibleFn,
                    b = g.isMeasurableFn,
                    h = g.pauseCheckingFn,
                    e = g.careFoc,
                    f = g.qsKeys,
                    l = g.counterLabel,
                    m = l;
                a.d.ap();
                var n = [],
                    w = c,
                    p = 0,
                    J = 0,
                    C = 0,
                    y = 0,
                    H = 0,
                    r = 0,
                    D = 0,
                    U = 0;
                (new q).getTime();
                var G = !1,
                    Q = !1,
                    W = !1,
                    R = !1,
                    V, O, P, oa, la = 0,
                    Y = 0,
                    fa = !1,
                    pa = !1,
                    N = 0,
                    u = function() {
                        var b = .98;
                        a.d.k() && "strict" === l && (b = .96);
                        return b
                    }(),
                    ga = 0,
                    S = 0,
                    F = !1,
                    E = !1,
                    Ea = !1,
                    B = a.d.e,
                    K, I;
                if (0 === f) var Z = "as",
                    ha = "ag",
                    aa = "an",
                    ja = "ck",
                    ba = "kw",
                    ia = "ah",
                    ka = "aj",
                    L = "pg",
                    T = "pf",
                    qa = "gi",
                    ma = "gf",
                    na = "ix",
                    da = "gg",
                    M = "ez",
                    fa = !0;
                else 1 === f ? (Z = "cc", ha = "bw", aa = "bx", ja = "ci", ba = "jz", ia = "bu", ka = "dj") : 2 === f ? (Z = "cg", ha = "ce", aa = "cf", ja = "cj", ba = "ts", ia = "ah",
                    ka = "dk", qa = "gj", ma = "gb", na = "ig", da = "ge", M = "ez") : 3 === f ? (Z = "cg", ha = "ce", aa = "cf", ja = "cj", ba = "ts", ia = "ah", ka = "dk", qa = "gi", ma = "gf", na = "ix", da = "gg", M = "ez") : 5 === f ? (Z = "aa", ha = "ad", aa = "cn", ja = "co", ba = "cp", ia = "ah", ka = "cq", qa = "gn", ma = "gk", na = "ik", da = "gl", M = "ez") : 6 === ("number" === typeof f ? f : f.type) && (Z = f.otsKey, ha = f.ivtKey, aa = f.lastivtKey, ja = f.ivtAtOtsKey, ba = f.timeToViewSendKey, ia = f.timeToViewAskKey, ka = f.visOnLoadKey, qa = f.fullyIvtOtsKey, ma = f.fullyIvtKey, na = f.maxfullyIvtKey, da = f.lastFullyIvtKey, M = f.wasPartiallyInviewKey);
                this.getLabel = function() {
                    return m
                };
                this.addListener = function(b) {
                    var c = !1;
                    a.b.forEach(n, function(a) {
                        if (a === b) return c = !0, !1
                    });
                    c || n.push(b)
                };
                this.removeListener = function(a) {
                    for (var b, c = n.length; b < c; b++) {
                        var d = !1,
                            h = !1,
                            m;
                        for (m in n[b])
                            if (h || (h = !0), n[b][m] !== a[m]) {
                                d = !0;
                                break
                            } h && !d && n.splice(b, 1)
                    }
                };
                this.hadOTS = function() {
                    return W
                };
                this.hadFullOTS = function() {
                    return R
                };
                this.hadFIT = function() {
                    return 0 < J
                };
                this.hadVideo2SecOTS = function() {
                    return "undefined" != typeof _hadVideo2SecOts && _hadVideo2SecOts
                };
                this.hadDentsuVideoOTS =
                    function() {
                        return !1
                    };
                this.hadDentsuDisplayOTS = function() {
                    return F
                };
                this.getInViewTime = function() {
                    return p
                };
                this.getFullyInViewThreshold = function() {
                    return u
                };
                this.getLastInviewPercent = function() {
                    return N
                };
                this.getLastInviewPercentWithThresholdCap = function() {
                    return N >= u ? 1 : N
                };
                this.getCareAboutFocus = function() {
                    return e
                };
                this.getPauseCheckingFn = function() {
                    return h
                };
                this.visible = function() {
                    return G
                };
                this.fullyVisible = function() {
                    return Q
                };
                this.wasPartiallyInview = function() {
                    return pa
                };
                this.getFullInviewTimeTotal =
                    function() {
                        return J
                    };
                this.getMaximumContinuousInViewTime = function() {
                    return t.max(H, r)
                };
                this.getMaximumContinuousFullyInViewTime = function() {
                    return t.max(U, D)
                };
                this.getDentsuInViewTime = function() {
                    return ga
                };
                this.getDentsuAudibleAndVisibleTime = function() {
                    return 0
                };
                this.isAdMeasurable = function(a) {
                    var c = "function" === typeof b && b(a);
                    a && a.isMeasurabilityDisabled() && (c = !1);
                    return c
                };
                this.adStartedOnScreen = function() {
                    return oa
                };
                this.update = function(c, g, l) {
                    if (I === l) return !1;
                    I = l;
                    l = "function" === typeof b && b(c);
                    c && c.isMeasurabilityDisabled() && (l = !1);
                    if (!l) return !1;
                    var w = p || 0,
                        A = J || 0;
                    l = !1;
                    var y = d(c);
                    y.rect && (c.elementRect = y.rect, c.currentWidth = c.elementRect.right - c.elementRect.left, c.currentHeight = c.elementRect.bottom - c.elementRect.top);
                    c.viewabilityPercent[m] = a.b.dg(y.percv) ? t.round(100 * y.percv) : "-";
                    "number" === typeof y.area && (c.ADAREA = y.area);
                    var C = y.isVisible,
                        M = y.isFullyVisible,
                        q = y.isDentsuVisible,
                        Y = y.percv && 0 < y.percv;
                    N = y.percv;
                    !w && y.percv && a.m.a.zaxs("adEntersView", c);
                    var u = h(c),
                        u = (!e || a.u.f(c)) && !u;
                    a.m.a.zaxs("adCheckingState",
                        c, m, u);
                    C = C && u;
                    M = M && u;
                    Y = Y && u;
                    M && a.m.a.zaxs("adFullyVisible", c, m);
                    Ea = q && u;
                    !pa && Y && (pa = !0);
                    if (C && G) p += g, H += g;
                    else if (C || G) q = t.round(g / 2), p += q, H += q;
                    if (M && Q) J += g, D += g;
                    else if (M || Q) q = t.round(g / 2), J += q, D += q;
                    if (Ea && E) ga += g, S += g;
                    else if (Ea || E) q = t.round(g / 2), ga += q, S += q;
                    !W && 1E3 <= H && (l = W = !0, this.timeToView = V = c.counters.query()[ia], O = p);
                    !R && 1E3 <= D && (R = !0, a.m.a.zaxs("fullOtsReached", c, m));
                    "undefined" === typeof P && (q = c.counters.query().bu, 1E3 >= q ? C && (P = !0) : P = !1);
                    "undefined" === typeof oa && (q = c.counters.query().bu, 1E3 >=
                        q ? Y && (oa = !0) : oa = !1);
                    (c.el = B) && "undefined" === typeof K && 2 !== f && 3 !== f && y.elGeo && (q = k().y + y.elGeo.foldTop, u = y.elGeo.threshold * y.elGeo.elHeight, q = q > a.o.d() - u, 0 < y.elGeo.totalArea && (K = q, c.dn = K));
                    fa && Y && (la = t.min(t.max(N, la), 1));
                    r < H && (r = H);
                    U < D && (U = D);
                    C || (H = 0);
                    M || (D = 0);
                    G = C;
                    Q = M;
                    1E3 <= S && (F = !0);
                    Ea || (S = 0);
                    E = Ea;
                    a.b.forEach(n, function(a) {
                        var b = y && y.percv,
                            b = "number" === typeof b && 100 * b;
                        if (a.onInViewTimeCount) a.onInViewTimeCount(g, p - w, b, m);
                        if (a.onFullyInViewTimeCount) {
                            var c = t.max(J - A, 0);
                            a.onFullyInViewTimeCount(g, c,
                                b, m)
                        }
                    });
                    if (!a.d.fk) return l;
                    (C = c.aa && y.rect || c.aa.getBoundingClientRect()) && y.isVisible && !c.proxyElementForMouseListeners && (C = (c.aa && c.aa.ownerDocument || document).elementFromPoint((C.left + C.right) / 2, (C.top + C.bottom) / 2)) && ((M = (M = "IFRAME" === C.nodeName && a.k.e(C)) && M.body) && a.b.ca(M) ? a.l.c(c, M) : a.l.c(c, C), c.proxyElementForMouseListeners = !0);
                    return l
                };
                this.getQS = function(b, c, d) {
                    C > p && (C = p);
                    y > J && (y = J);
                    b[Z] = Number(W);
                    b[ha] = p;
                    b[aa] = C;
                    if (0 === f || 2 === f || 3 === f || 5 === f || ("number" === typeof f ? f : f.type)) R && qa && (b[qa] =
                        1), c = (c = 0 === f && d && "sframe" === d) || a.d.da() && !a.q.c() && 0 === f, ma && !c && (b[ma] = J, b[da] = y, c = this.getMaximumContinuousFullyInViewTime(), b[na] = c, m === d && (b.ic = c)), pa && M && (b[M] = 1);
                    "undefined" !== typeof O && (b[ja] = O);
                    "undefined" !== typeof V && (b[ba] = V);
                    "undefined" !== typeof P && (b[ka] = Number(P));
                    !0 === fa && (d = t.round(100 * la), c = t.round(100 * Y), b[L] = d, b[T] = c, Y = la);
                    "undefined" !== typeof K && (b.ib = Number(K));
                    C = p;
                    y = J
                }
            }

            function k() {
                var g = a.d.g,
                    d = g.document;
                return {
                    y: void 0 !== g.pageYOffset ? g.pageYOffset : (d.documentElement || d.body.parentNode ||
                        d.body).scrollTop
                }
            }
            a.o = {};
            var e = {},
                l = {};
            a.o.d = function() {
                return sa ? a.d.u(a.d.g).height : 750
            };
            a.o.e = function(g) {
                var d = g.zr;
                a.m.a.azsx("adKilled", a.o.f, {
                    once: !0,
                    condition: function(a) {
                        return a.zr == g.zr
                    }
                });
                e[d] = e[d] || {};
                g.viewstats = {
                    isBigAd: !1
                };
                if (g && g.isMeasurabilityDisabled()) return !1;
                if (a.d["do"]() || a.d.ap().isInApp && a.d.e) {
                    var c = n(a.aa.f),
                        b;
                    b = a.d.k() ? a.d.db() ? new f({
                            isVisibleFn: a.ao.a,
                            isMeasurableFn: a.d["do"],
                            pauseCheckingFn: a.u.c,
                            overrideViewMethod: 16,
                            careFoc: !1,
                            qsKeys: 0,
                            counterLabel: "strict"
                        }) : a.d.da() ?
                        new f({
                            isVisibleFn: a.q.g,
                            isMeasurableFn: a.d["do"],
                            pauseCheckingFn: a.u.c,
                            overrideViewMethod: 15,
                            careFoc: !1,
                            qsKeys: 0,
                            counterLabel: "strict"
                        }) : a.d.ec() ? new f({
                            isVisibleFn: a.t.d,
                            isMeasurableFn: a.d["do"],
                            pauseCheckingFn: a.u.c,
                            careFoc: !1,
                            qsKeys: 0,
                            counterLabel: "strict"
                        }) : new f({
                            isVisibleFn: a.t.d,
                            isMeasurableFn: a.d["do"],
                            pauseCheckingFn: a.u.c,
                            careFoc: !0,
                            qsKeys: 0,
                            counterLabel: "strict"
                        }) : new f({
                            isVisibleFn: c,
                            isMeasurableFn: a.d["do"],
                            pauseCheckingFn: a.u.c,
                            careFoc: !0,
                            qsKeys: 0,
                            counterLabel: "strict"
                        });
                    e[d].strict =
                        b;
                    c = new f({
                        isVisibleFn: c,
                        isMeasurableFn: a.d["do"],
                        pauseCheckingFn: a.u.c,
                        careFoc: !1,
                        qsKeys: 1,
                        counterLabel: "lax"
                    });
                    e[d].lax = c
                } else !0 !== g.isSkin && a.r && a.r.a() && (c = new f({
                    isVisibleFn: a.r.b,
                    isMeasurableFn: a.d.dt,
                    pauseCheckingFn: a.u.c,
                    careFoc: !0,
                    qsKeys: 3,
                    counterLabel: "pscope"
                }), e[d].pscope = c);
                a.s && a.s.n() && !e[d].pscope && (c = new f({
                    isVisibleFn: a.s.ae,
                    isMeasurableFn: a.d.du,
                    pauseCheckingFn: a.u.c,
                    careFoc: !0,
                    qsKeys: 2,
                    counterLabel: "pscope"
                }), e[d].pscope = c);
                var h, k, x, A, c = a.ai.a;
                b = !0;
                a.d.dj() && (h = !0, c = a.q.g, k = a.q.d,
                    A = 15, b = !1);
                var m = a.d.ff();
                !h && m && (h = !0, x = m.name, k = m.measurableFn);
                h && (h = new f({
                    isVisibleFn: c,
                    isMeasurableFn: k,
                    pauseCheckingFn: a.u.c,
                    viewabilityApiName: x,
                    overrideViewMethod: A,
                    careFoc: b,
                    qsKeys: 5,
                    counterLabel: "sframe"
                }), e[d].sframe = h);
                d = a.m.a.azsx("view:tick", a.b.dk([g], a.o.g), {
                    priority: 5
                });
                l[g.zr] = d;
                a.m.a.zaxs("viewCounterStarted", g)
            };
            a.o.h = function(g, d, c) {
                return g && d && c ? (g = a.o.i(g.zr, d)) && "function" == typeof g[c] && g[c]() : !1
            };
            a.o.j = function(g, d) {
                if (g && d) {
                    var c = a.d.ff(),
                        b;
                    !d.sframe && c && (b = c.measurableFn,
                        c = c.name, e[g.zr].sframe = new f({
                            isVisibleFn: a.ai.a,
                            isMeasurableFn: b,
                            pauseCheckingFn: a.u.c,
                            viewabilityApiName: c,
                            careFoc: !0,
                            qsKeys: 5,
                            counterLabel: "sframe"
                        }), a.m.a.zaxs("viewCounterStarted", g))
                }
            };
            a.o.g = function(g, d, c) {
                if (a.b.cy(g)) {
                    var b = e[g.zr],
                        h;
                    a.o.j(g, b);
                    for (var f in b) b.hasOwnProperty(f) && b[f].update(g, d, c) && (h = !0);
                    g.fireFullViewEvent = !1;
                    a.b.forEach(g.secondaryCounters, function(a) {
                        a.update(g, d, c)
                    });
                    g.fireFullViewEvent && (a.u.d(g), g.fireFullViewEvent = !1);
                    h && a.u.e(g);
                    a.ac.b(g);
                    g.ao && 1 == g.ao.skin && "width" ==
                        a.ab.a && a.ab.c();
                    a.e.d(g) && a.u.b(g)
                }
            };
            a.o.k = function(g, d) {
                return a.o.l(g) >= d
            };
            a.o.l = function(g) {
                var d = 0;
                (g = g && "undefined" !== typeof g.zr && a.o && a.o.a(g.zr)) && (d = g.getInViewTime());
                return d
            };
            a.o.m = function() {
                return "hadOTS"
            };
            a.o.n = function(g, d) {
                var c = a.o.m();
                return g && g && "undefined" != typeof g.zr ? d ? a.o.h(g, d, c) : a.o.h(g, a.o.b(g.zr), c) : null
            };
            a.o.o = function(g, d) {
                var c = a.o.p(g.zr);
                return a.s && a.s.a && c && c.pscope && c.pscope[d ? "hadVideo2SecOTS" : "hadOTS"]()
            };
            a.o.c = function(g, d) {
                var c = a.o.p(g.zr);
                return a.s && a.s.a &&
                    c && c.pscope && c.pscope[d ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
            };
            a.o.q = function(g, d) {
                var c = a.o && a.o.p(g.zr);
                return a.s && a.s.a && c && c.pscope && c.pscope.getFullInviewTimeTotal() >= d
            };
            a.o.r = function(g) {
                var d = 0;
                (g = g && "undefined" !== typeof g.zr && a.o && a.o.a(g.zr)) && (d = g.getFullInviewTimeTotal());
                return d
            };
            a.o.s = function(g, d) {
                return a.o.r(g) >= d
            };
            a.o.f = function(g) {
                delete e[g.zr];
                l.hasOwnProperty(g.zr) && a.m.a.sxaz("view:tick", {
                    id: l[g.zr]
                })
            };
            a.o.p = function(a) {
                var d;
                e[a] ? d = e[a] : e[a] = d = {};
                return d
            };
            a.o.i = function(g,
                d) {
                var c = a.o.p(g);
                return c && c[d]
            };
            a.o.t = function(g) {
                var d, c, b;
                if (!g || !g.strict) return !1;
                if (a.d.da()) return a.q.c();
                g = a.d.ap().isInApp;
                d = a.d.cu();
                c = a.d.cz();
                b = a.d.cx();
                d = d && a.d.e || c;
                return g && d || !(g || b)
            };
            a.o.b = function() {
                var g;
                return function(d, c) {
                    var b = null,
                        h = e[d];
                    a.o.t(h) ? b = "strict" : h && h.sframe ? b = "sframe" : h && h.pscope && (b = "pscope");
                    (h = "undefined" !== typeof u && u[d]) && h.isMeasurabilityDisabled() && (b = null);
                    a.e.c() && !c && (b = null);
                    g != b && (g = b, a.m.a.esgf("preferredViewCounterUpdate", u[d]));
                    return b
                }
            }();
            a.o.a =
                function(g, d) {
                    var c = "undefined" !== typeof u && u[g];
                    if (!c || !c.isMeasurabilityDisabled()) {
                        var c = a.o.b(g, d),
                            b = e[g];
                        if (!a.e.c() || d) return b && c && b[c]
                    }
                };
            a.o.u = function(g, d) {
                var c = {},
                    b = e[g],
                    h = a.o.b(g),
                    f;
                for (f in b) b.hasOwnProperty(f) && b[f].getQS(c, d, h);
                a.ac.c(g, c);
                a.ap.a(g, c);
                a.o.a(g) && a.o.a(g).hadDentsuDisplayOTS() && (c.nb = 1);
                (b = u[g]) && b.viewstats && b.viewstats.isBigAd && (c.el = 1);
                return c
            }
        })(p);
        (function(a) {
            function n() {
                return 1 == l
            }

            function f() {
                return 2 == l
            }

            function k(a) {
                a && a.ao && (a = document.getElementById(a.ao.mmakAdKey)) &&
                    a.parentNode && "function" === typeof a.parentNode.removeChild && a.parentNode.removeChild(a)
            }

            function e() {
                return {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                }
            }
            a.n = {};
            a.n.realEstateMeasurements = !1;
            var l;
            a.n.f = function(g) {
                !a.n.realEstateMeasurements && 0 < g.w && 0 < g.h && (a.n.realEstateMeasurements = {
                    w: t.round(g.w),
                    h: t.round(g.h)
                })
            };
            a.n.g = function(g, d, c) {
                g.mmakAdKey = d;
                var b;
                b = document.createElement("div");
                b.id = d;
                c ? (d = c.h, c = c.w) : c = d = "100";
                b.style.cssText = "height: " + d + "px; width: " + c + "px;";
                document.body.appendChild(b);
                a.v.b(17, g);
                g = a.e.e(b, b.tagName, !1, void 0, g, null);
                a.m.a.azsx("adKilled", k);
                return g
            };
            a.n.h = e;
            a.n.i = function(a) {
                var d = {
                    isVisible: !0,
                    isFullyVisible: !0,
                    percv: 1
                };
                a || (d.jsPercv = 1);
                d.isDentsuVisible = !0;
                return d
            };
            a.n.j = function(g, d, c, b, h) {
                var f = e();
                h = h ? .9 : .96;
                var k = c;
                if (!b) {
                    if (a.d.cd()) {
                        if (g = a.aj.a(g), "undefined" === typeof g || null === g) return f
                    } else {
                        d = d || g.WINDOW || a.b.bl(g.aa);
                        g = a.aa.i(g, d);
                        if (!g || !g.visibleRect) return f;
                        g = g.percv
                    }
                    f.jsPercv = g;
                    k = t.min(c, g)
                }
                f.isVisible = .5 <= k;
                f.originalPercv = k;
                k >= h && (f.isFullyVisible = !0, k = 1);
                f.percv = k;
                k >= t.min(.8, .96) && (f.isDentsuVisible = !0);
                return f
            };
            a.n.k = function(g, d, c, b, h) {
                return h ? {
                    elementRect: c,
                    visibleRect: d
                } : a.aa.p(g.aa, c, b, d)
            };
            a.n.l = function(g, d, c, b) {
                g = "strict" === a.o.b(g);
                !b && g && (b = -1, "function" === typeof d.calcVisiblePercv && (b = d.calcVisiblePercv()), g = -1 < b && t.floor(c.originalPercv) === t.floor(b));
                return g
            };
            a.n.b = function(a) {
                return "undefined" !== typeof l && l != a
            };
            a.n.c = n;
            a.n.d = f;
            a.n.m = function() {
                return n() ? a.t.f() : f() ? a.q.i() : !1
            };
            a.n.n = function() {
                return 3 == l
            };
            a.n.a = function() {
                var g;
                return g = (g = (g = a.d.da() && a.q.f()) || a.d.da() && a.q.e()) || a.d.ec()
            };
            a.n.o = function(a) {
                "undefined" === typeof l && (l = a)
            };
            a.n.p = function(a) {
                "undefined" !== typeof l && (a.yz = l)
            };
            a.n.e = function() {
                a.t.e();
                a.q.h()
            };
            a.n.q = function(a, d) {
                return a.x === d.x && a.y === d.y && a.w === d.w && a.h === d.h
            };
            a.n.r = function(a) {
                return "object" === typeof a && null !== a ? [a.x, a.y, a.w, a.h].join(":") : a
            };
            a.n.s = function(a) {
                return 0 == a || 1 == a ? a : 2
            }
        })(p);
        (function(a) {
            function n() {
                var a = (19).toString(2).length - 1,
                    f = 1;
                return function() {
                    f <<= 1;
                    0 != f >> a && (f ^=
                        19);
                    return f
                }
            }

            function f(a) {
                return 9 === a ? 30 : 10 === a ? 31 : a
            }
            a.f = {};
            a.f.f = 0;
            a.f.d = 1;
            a.f.g = 2;
            a.f.e = 3;
            a.f.h = 4;
            var k = a.b.d;
            a.f.i = function(a) {
                for (var f = "", g = 0; g < a.length; g++) var d = a.charCodeAt(g) ^ 85,
                    f = f + String.fromCharCode(d);
                a = f;
                for (var f = "", d = g = 0, c, b, h, v = 0; v < a.length; ++v)
                    for (h = a.charCodeAt(v), b = 255 < h ? 0 : 1; 2 > b; ++b) g = 0 === b ? g | (h & 65280) / 256 << d : g | (h & 255) << d, d += 8, 13 < d && (c = g & 8191, 88 < c ? (g >>= 13, d -= 13) : (c = g & 16383, g >>= 14, d -= 14), f += k.charAt(c % 91), f += k.charAt(c / 91 | 0));
                0 < d && (f += k.charAt(g % 91), 7 < d || 90 < g) && (f += k.charAt(g /
                    91 | 0));
                return f
            };
            a.f.j = function(a) {
                for (var k = "", g = n(), d = 0; d < a.length; d++) {
                    var c;
                    c = f(a.charCodeAt(d));
                    var b = 0 === d % 2 ? g() : -1 * g();
                    c = 0 === b ? c : 126 < c + b ? 30 + (b - (126 - c) - 1) : 30 > c + b ? 126 + (b + (c - 30) + 1) : c + b;
                    k += String.fromCharCode(30 === c ? 9 : 31 === c ? 10 : c)
                }
                return k
            };
            a.f.k = function(a) {
                for (var k = "", g = n(), d = 0; d < a.length; d++) {
                    var c = g(),
                        b;
                    b = f(a[d].charCodeAt(0));
                    c = 0 === d % 2 ? c : -1 * c;
                    b = 0 === c ? b : 30 > b - c ? 126 - (c - (b - 30) - 1) : 126 < b - c ? 30 - (c + (126 - b) + 1) : b - c;
                    k += String.fromCharCode(30 === b ? 9 : 31 === b ? 10 : b)
                }
                return k
            };
            a.f.l = function(e, f) {
                var g = [];
                a.b.forEach(e, function(a, c) {
                    if (void 0 !== a && ("string" === typeof(f ? a[f] : a) || "number" === typeof(f ? a[f] : a) || "boolean" === typeof(f ? a[f] : a))) {
                        var b = String(f ? a[f] : a).split("&").join("%26").split("=").join("%3D");
                        g.push(("number" === typeof c ? "" : c + "=") + b)
                    }
                }, null, !0);
                g.sort();
                return g.join("&")
            };
            a.f.b = a.b.e;
            a.f.m = function() {
                var e = document && document.documentElement && document.documentElement.style || {};
                a.f.n = [!0 === (!!window.chrome && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore)) ?
                    1 : 0, !0 === ("undefined" !== typeof InstallTrigger || "MozAppearance" in e) ? 1 : 0, !0 === !!window.opera ? 1 : 0, !0 === a.d.p ? 1 : 0, !0 === (!+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in e && "-ms-ime-align" in e) ? 1 : 0
                ];
                for (var e = !1, f = 0; f < a.f.n.length; f++)
                    if (1 === a.f.n[f]) {
                        e = f;
                        break
                    }! 1 !== e && (a.f.c = e);
                return a.f.c
            };
            a.f.c = a.f.m()
        })(p);
        (function(a) {
            a.aq = {};
            var n = [];
            a.aq.a = function(a, k) {
                n.push({
                    query: a,
                    callback: k
                });
                return !1
            }
        })(p);
        (function(a) {
            function n() {
                function b(a) {
                    for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = !0;
                    return c
                }

                function c(a, b) {
                    for (var d = b, h = a.split("."), m = 0; m < h.length; m++) d = d[h[m]];
                    return d
                }

                function d(b) {
                    for (var c = ""; 0 < b;) c += a.f.b([b % 62]), b = t.floor(b / 62);
                    return c
                }

                function g(a) {
                    return {
                        propertyMethods: [function(b, c) {
                                try {
                                    var d = c.split("."),
                                        h = a,
                                        m = d[0];
                                    1 < d.length && (h = d[0], m = d[1]);
                                    return a[h].hasOwnProperty(m).toString()
                                } catch (g) {
                                    return (!1).toString()
                                }
                            }, function(b, c) {
                                try {
                                    var d = c.split("."),
                                        h = a,
                                        m = d[0];
                                    1 < d.length && (h = d[0], m = d[1]);
                                    return a.Object.getOwnPropertyDescriptors(a[h])[m].get.toString()
                                } catch (g) {
                                    return ""
                                }
                            },
                            function(b, c) {
                                try {
                                    var d = c.split("."),
                                        h = a,
                                        m = d[0];
                                    1 < d.length && (h = d[0], m = d[1]);
                                    return a.Object.getOwnPropertyDescriptors(a[h])[m].get.toString.toString()
                                } catch (g) {
                                    return ""
                                }
                            }
                        ],
                        functionMethods: [function(a, b) {
                            return a.name
                        }, function(a, b) {
                            try {
                                return new a.toString
                            } catch (c) {
                                return c.toString()
                            }
                        }, function(b, c) {
                            return a.Function.prototype.toString.call(b)
                        }, function(b, c) {
                            return a.Function.prototype.toString.call(b.toString)
                        }, function(a, b) {
                            try {
                                return ("prototype" in a).toString()
                            } catch (c) {
                                return (!1).toString()
                            }
                        }]
                    }
                }

                function m(a) {
                    for (var b = "", c = e.concat(k), d = 0; d < c.length; d++) {
                        var h = c[d];
                        if (a.hasOwnProperty(h))
                            for (var h = a[h], m = 0; m < h.length; m++) b += h[m] + "-"
                    }
                    return b
                }
                var e = [a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 47, 34, 44, 34, 27, 34, 37, 34, 45, 50, 18, 45, 26, 45, 30]), a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 33, 34, 29, 29, 30, 39]), a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 38, 40, 51, 7, 34, 29, 29, 30, 39]), a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 38, 44, 7, 34, 29, 29, 30, 39]), a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 48, 30, 27, 36, 34, 45, 7, 34, 29, 29, 30, 39]), a.f.b([39, 26, 47, 34,
                        32, 26, 45, 40, 43, 72, 48, 30, 27, 29, 43, 34, 47, 30, 43
                    ]), a.f.b([39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 46, 44, 30, 43, 0, 32, 30, 39, 45]), a.f.b([39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 26, 41, 41, 13, 26, 38, 30]), a.f.b([44, 28, 43, 30, 30, 39, 23]), a.f.b([44, 28, 43, 30, 30, 39, 24]), a.f.b([44, 28, 43, 30, 30, 39, 19, 40, 41]), a.f.b([44, 28, 43, 30, 30, 39, 11, 30, 31, 45]), a.f.b([44, 28, 43, 30, 30, 39, 72, 26, 47, 26, 34, 37, 22, 34, 29, 45, 33]), a.f.b([44, 28, 43, 30, 30, 39, 72, 26, 47, 26, 34, 37, 7, 30, 34, 32, 33, 45])],
                    k = [a.f.b([3, 26, 45, 30]), a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 33, 26, 44, 5, 40,
                        28, 46, 44
                    ]), a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 30, 37, 30, 38, 30, 39, 45, 5, 43, 40, 38, 15, 40, 34, 39, 45]), a.f.b([5, 46, 39, 28, 45, 34, 40, 39, 72, 41, 43, 40, 45, 40, 45, 50, 41, 30, 72, 45, 40, 18, 45, 43, 34, 39, 32]), a.f.b([43, 30, 42, 46, 30, 44, 45, 0, 39, 34, 38, 26, 45, 34, 40, 39, 5, 43, 26, 38, 30]), a.f.b([44, 30, 45, 8, 39, 45, 30, 43, 47, 26, 37]), a.f.b([44, 30, 45, 19, 34, 38, 30, 40, 46, 45]), a.f.b([13, 40, 45, 34, 31, 34, 28, 26, 45, 34, 40, 39]), a.f.b([22, 30, 27, 6, 11, 17, 30, 39, 29, 30, 43, 34, 39, 32, 2, 40, 39, 45, 30, 49, 45, 72, 41, 43, 40, 45, 40, 45, 50, 41, 30, 72, 32, 30, 45, 18, 46, 41, 41, 40,
                        43, 45, 30, 29, 4, 49, 45, 30, 39, 44, 34, 40, 39, 44
                    ])],
                    l = [a.f.b([29, 40, 28, 46, 38, 30, 39, 45, 72, 33, 26, 44, 5, 40, 28, 46, 44]), a.f.b([39, 26, 47, 34, 32, 26, 45, 40, 43, 72, 48, 30, 27, 29, 43, 34, 47, 30, 43])];
                return [f(m(function() {
                    for (var a = {}, d = g(window), m = b(e), f = e.concat(k), l = 0; l < f.length; l++) {
                        var n = f[l];
                        a[n] = [];
                        var x = d.functionMethods;
                        m.hasOwnProperty(n) && (x = d.propertyMethods);
                        try {
                            for (var G = c(n, window), p = 0; p < x.length; p++) {
                                var X = x[p];
                                try {
                                    a[n].push(X(G, n).replace(/\-/g, "%2D"))
                                } catch (R) {
                                    a[n].push("")
                                }
                            }
                        } catch (R) {
                            a[n].push("E")
                        }
                    }
                    return a
                }()).replace(/\s*/g,
                    "")), m(function() {
                    for (var a = {}, m = g(window), k = b(e), n = 0; n < l.length; n++) {
                        var w = l[n];
                        a[w] = [];
                        var p = m.functionMethods;
                        k.hasOwnProperty(w) && (p = m.propertyMethods);
                        try {
                            for (var U = c(w, window), G = 0; G < p.length; G++) {
                                var Q = p[G];
                                try {
                                    a[w].push(d(f(Q(U, w).replace(/\-/g, "%2D"))))
                                } catch (W) {
                                    a[w].push("")
                                }
                            }
                        } catch (W) {
                            a[w].push("E")
                        }
                    }
                    return a
                }())]
            }

            function f(a) {
                var b = 0,
                    c = a.length,
                    d, m;
                if (0 == c) return b;
                for (d = 0; d < c; d++) m = a.charCodeAt(d), b = (b << 5) - b + m, b &= b;
                return b >>> 0
            }

            function k() {
                var b = [];
                if (!a.k.d(window.top)) {
                    var c = [],
                        d =
                        a.f.b([28, 33, 43, 40, 38, 30]),
                        g = a.f.b([30, 49, 45, 30, 39, 44, 34, 40, 39]),
                        m = "'" + d + "-" + g + "://']";
                    window.top.document && "function" === typeof window.top.document.querySelectorAll && (c = window.top.document.querySelectorAll("[src^=" + m + ",[data^=" + m + ",[href^=" + m));
                    0 !== c.length && window.String && "function" === typeof window.String.prototype.match && a.b.forEach(c, function(a) {
                        (a = a.outerHTML.match('[a-z]+="' + d + "-" + g + "://([^/]+)")) && 1 < a.length && -1 === b.indexOf(a[1]) && b.push(a[1])
                    })
                }
                c = b.join("");
                window.String && window.String.prototype.slice &&
                    (c = c.slice(0, 150));
                return a.f.i(c)
            }

            function e(a, b) {
                try {
                    var e = a.split(c),
                        k = b || window,
                        m, l;
                    for (l = 0; l < e.length; l++) {
                        m = e[l];
                        if (null === k || typeof k === g) return 1;
                        k = k[m]
                    }
                    return typeof k === g ? 2 : null === k ? 3 : 4 + f(a + d + k.toString()) % 58
                } catch (n) {
                    return 0
                }
            }

            function l() {
                var a, b = [function() {
                        return "c$$b" !== "cab".replace("a", function() {
                            return "$$"
                        })
                    }, function() {
                        return eval('class A { constructor(pp) { this.pp = pp; }\n call() { return this.pp; }\n }\n class B extends A { tS(a) { return super.call(); }\n tT(a){ return this.call(); } }\n  const obj = new B("cab");  (obj.tS() !== obj.tT()); ')
                    },
                    function() {
                        return eval("'\\\n\r'")
                    },
                    function() {
                        return eval('((new Date("1300-02-28T21:11:11.000Z")).toISOString() !== "1300-02-28T21:11:11.000Z")')
                    },
                    function() {
                        return eval('(new Date("2835")).toISOString() !== "2835-01-01T00:00:00.000Z"')
                    },
                    function() {
                        return -1 !== "22".localeCompare("122", "de", {
                            numeric: !0
                        })
                    },
                    function() {
                        return "p" === window.atob("cab==")
                    },
                    function() {
                        return "cab" !== "cab".split(/\b/).pop()
                    },
                    function() {
                        return void 0 === Array.prototype.find
                    },
                    function() {
                        return Number.isNaN("MAX_SAFE_INTEGER")
                    },
                    function() {
                        return /(G)+|(X)+X/.test("X ")
                    },
                    function() {
                        return "bec" != "cabecab".match(".?e.?")
                    },
                    function() {
                        var a = {};
                        ["cab", "cab"].sort(a, a);
                        return !0
                    },
                    function() {
                        var a = new Proxy([3, 444], {});
                        return [12, 444].concat(a)[3]
                    },
                    function() {
                        return eval("let x = (e) => { let e = true;};")
                    },
                    function() {
                        return 0 === (new ArrayBuffer(5)).slice(3, 4394878398).byteLength
                    }
                ];
                a = "1-";
                for (var c = 0; c < b.length; c++) {
                    var d;
                    try {
                        d = (0, b[c])() ? "1" : "0"
                    } catch (m) {
                        d = "2"
                    }
                    a += d
                }
                return a
            }
            a.ar = {};
            var g = a.f.b([46, 39, 29, 30, 31, 34, 39, 30, 29]),
                d = a.f.b([77]),
                c = a.f.b([72]),
                b;
            a.ar.a = function(c) {
                if (void 0 !== b) return a.b.i(b);
                b = {};
                var d = a.d.g;
                try {
                    var g = d.document,
                        f = g.body,
                        m = d.innerWidth || g.documentElement.clientWidth || f.clientWidth,
                        z = d.innerHeight || g.documentElement.clientHeight || f.clientHeight,
                        w = d.outerWidth || f.offsetWidth,
                        p = d.outerHeight || f.offsetHeight
                } catch (t) {}
                try {
                    var J = d.screenX || d.screenLeft || d.screenX,
                        C = d.screenY || d.screenTop || d.screenY
                } catch (t) {}
                var y = (new q).getTimezoneOffset(),
                    H;
                if (document && document.body) {
                    var r = document.createElement(a.f.b([34,
                        31, 43, 26, 38, 30
                    ]));
                    r.width = a.f.b([53, 41, 49]);
                    r.height = a.f.b([53, 41, 49]);
                    r.style.left = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
                    r.style.top = "-" + a.f.b([61, 61, 61, 61, 41, 49]);
                    r.style.position = a.f.b([26, 27, 44, 40, 37, 46, 45, 30]);
                    document.body.appendChild(r);
                    H = r
                } else H = void 0;
                var D = a.f.b([84, 41, 33, 26, 39, 45, 40, 38]),
                    U = a.f.b([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38]),
                    G = !0 === ("undefined" != typeof d[D] || "undefined" != typeof d[U]) ? 1 : 0,
                    Q = n(),
                    W = b,
                    R;
                try {
                    for (var V = [a.f.b([33, 26, 43, 29, 48, 26, 43, 30, 2, 40, 39, 28, 46, 43, 43, 30, 39, 28, 50]), a.f.b([47,
                            30, 39, 29, 40, 43
                        ]), a.f.b([41, 37, 26, 45, 31, 40, 43, 38]), a.f.b([46, 44, 30, 43, 0, 32, 30, 39, 45]), a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43])], O = {}, P = 0; P < V.length; P++) O[V[P]] = window.navigator[V[P]];
                    R = a.f.i(a.f.l(O))
                } catch (t) {
                    R = ""
                }
                W.qn = R;
                b.th = Q[0];
                b.tf = Q[1];
                var oa = b,
                    la, Y = "toolbar scrollbars locationbar menubar personalbar statusbar".split(" "),
                    fa = [],
                    u, N;
                for (N = 0; N < Y.length; N++) try {
                    u = Y[N], !0 === window[u].visible ? fa.push(1) : !1 === window[u].visible ? fa.push(0) : void 0 === window[u].visible ? fa.push(2) : fa.push(3)
                } catch (t) {
                    fa.push(4)
                }
                la =
                    fa.join("");
                oa.vi = la;
                var Pa = b,
                    ga, S = H,
                    F = /(?:Mac OS X )(\d{2}_\d{2})(?:.*Version\/)(\d{2})/,
                    E = a.f.b([28, 33, 43, 40, 38, 30]),
                    K = a.f.b([43, 46, 39, 45, 34, 38, 30]),
                    B = a.f.b([41, 37, 46, 32, 34, 39, 44]),
                    I = a.f.b([15, 37, 46, 32, 34, 39, 0, 43, 43, 26, 50]),
                    L = a.f.b([38, 34, 38, 30, 19, 50, 41, 30, 44]),
                    Z, ha, aa, ja, ba, ia = 2,
                    ka = 2;
                if (window.String && window.String.prototype.match) {
                    var T = navigator.userAgent.match(F);
                    Z = null != T && "10_12" == T[1] && "10" == T[2]
                } else Z = !1;
                if (!Z) {
                    var ea = a.f.b([47, 34, 29, 30, 40, 73, 38, 41, 56, 75]) + " " + a.f.b([28, 40, 29, 30, 28, 44,
                            77, 90, 26, 47, 28, 53, 72, 58, 56, 52, 52, 53, 4, 71
                        ]) + " " + a.f.b([38, 41, 56, 26, 72, 56, 52, 72, 54, 90]),
                        qa = a.f.b([26, 46, 29, 34, 40, 73, 38, 41, 56, 75]) + " " + a.f.b([28, 40, 29, 30, 28, 44, 77, 90, 38, 41, 56, 26, 72, 56, 52, 72, 54, 90]),
                        ma = document.createElement("video"),
                        na = document.createElement("audio");
                    try {
                        ha = ma.canPlayType(ea)
                    } catch (t) {
                        ha = "E"
                    }
                    try {
                        aa = na.canPlayType(qa)
                    } catch (t) {
                        aa = "E"
                    }
                }
                var da = [],
                    M, Za;
                if (window.navigator) {
                    if (window.navigator[B]) {
                        Za = window[I] && window[I].prototype === navigator[B].__proto__;
                        var $a = window.navigator[B];
                        M = $a.length;
                        Object.getOwnPropertyDescriptors && Object.getOwnPropertyDescriptors(window.navigator)[B] && (ja = !0);
                        for (var Qa = 0; Qa < M && 4 > Qa; Qa++) da.push($a[Qa].name)
                    }
                    ba = window.navigator[L] && window.navigator[L].length
                }
                var fb = window[E] && "object" === typeof window[E][K] ? 1 : 0;
                if (S) var ab = S.contentWindow,
                    ia = (ka = "object" === typeof ab[E] ? 1 : 0) && "object" === typeof ab[E][K] ? 1 : 0;
                ga = [fb, ka, ia, M, da.join("*"), Za ? 1 : 0, ba, ja ? 1 : 0, aa, ha];
                Pa.rc = ga.join(",");
                b.os = k();
                b.qp = a.f.n.join("");
                var ta = b,
                    ca;
                var sa = H;
                if (sa) {
                    var ua = a.f.k('&]xoul#)k]mdrcfaxgum:hm_mfR_jru*UchYqnL^:vwjdmqh1M$bges5{T|r0hmkmhs\'.c T|dq,YKHY\\GTN`QUB[^GO>\\ICYAYK[2[:F]G@H=WH1{qerbvo0evfzG#hlhz2\npoaMlhlmith5`p`n+&f{`ua{)yp|d;cflklk&Mcnchfxbw-p]ub25{kvbqR `plGYfbq#N:S7;4yonek^z]ziMZqYr%VLG9FBQ917{a|\\lr0a\n`nUybo\'|Rz\\-?xgpcoh3i{a X7mcim)Ghzhs\\ \n#Xlc2dhhsim"Hf"e7SGT\\\\TCO@6:!e\t%mcr_wb86zZpa=_nmipp)Giody\'|Rz\\-?ylr]{bublft8{qqnMskb\t)LNP3Y@OEcHK;_:18lX~enKq]lB|Yyo8go^r#Ccjgu_acqehVTinmv*KEGBR@6;zfrkpmx`U_ydy[N3cGMdu_zfvhzm8go^r#Cjy]wi{imHl_~gnFCP\\Pkf `|\'zV{^uf0;G;`6X[jfxbw-navdz\\7>]L<\\Uq/jifjnt!HIZ  XphupmoVfzkok!j;cflklk&OHX9vg}gnqUp ikF\ngo\'Y6f=S?Q=VY^JQ;35bFLnwj|bxG\ttv^`fy\\/QYHSI^IXUYG[85BUONlthQ\\m^`fy\\/LEEHM\\6H;fDd?N+EO[Dxc\nksguC!cf,JGQNk;F9LQaHUD.?[POa{j|m`fy\\/IIQILMBJIfDd?N+EO[Hkmqmkfsd_lmc2>RH`TK7J7nE^KG(KPY?pt h\nUcXmsi&o_z\\y^35bFV`vdU^~"y\\w^:4`JOsq]uco6whhk=_nmipp)IG^Kk`sC!cf,WL\\FQTWKS7;6\\RRnqjohtqoOo]!\\/AWKb?YH19ZEbg!kgOpbkh9gogueu#Dfejd]\nZw:hfp!MNEQUBTHjKYLWEVFO]TJH=Q9NDN\tR_rdppZbih9ikfs~Pcjnfgdlp#sWtW;6uhr^w^xXPqog!\nNK`REJJ?`!HbpbqbjqfA~bth9>KIbF_@OEcHK;_:19s[\tUx`t`Mskb\t)N;Z4Y@DI0;oc|WtWyVXgnl0hmkmhs\'Mh"_ Hvcyaqa_iwW{Wvl7mcim)Ifp_og!Znc/jifjnt!HhlVta}hch6kgap\'Mn e|dFtifw(W:^FY7bF5CQIZbihWd}m<]rehrl$GIYHjj{Sq_nSqgmkR]~o8go^r#E_xYWlmcx\\ldXgnl0jijk O\\~ZbcnetdijLnqbQ_zf=ajlg(Lbhir)}^!?|eVqijFipZJnjW\tgrnpo4AuW\nhog!\nQFDSQ=QNkI^FLQ]BMD.@w`{api~?\nRtdflx&SL[8JIZ;]:hHPO\\O[7_DYGm?\\;F*HgfoyZsjMdpZvdpp6QKL_ZXHR69;payehh\nI~fl RBVLGJ\\\\TCO@6>zVz\\or2;G;`6dIL5c<XMaJWAK Pgofs_ @orijq[xh3dh_t\nNmvazMoW\tp|^W_]`dryjh?!Zsj55PC]TTEVDeDS<]>:6{kfpTafn gj?uBxV}ttaMskb\t)XH\\69<spsjHpqcy$HFnGJQIA\\)KjlgOk\n`\t%mcr_wb8:{[ufbb~qea6@RC^@N%TZy\\Fpvgu(]JTJHQTKLDG@MAe9]M6?w]rJzqx]p@uaj;uf l7mcim)Lc}hNZ!RRmflx&F;\\IZHP@VRYGCOM)Lc}hNZ!RRmflx&q[yZ1=h_tcjcGrmkz"N<ZMcCVEH]T@DMQ!LWtW\tTmGcl|fi5no\tZ!`\t%mcr_wb8<jesarT}hqjXly]\tdygSc\tfs,rYp_8=YCS3{_Lnnhm`z]zi8go^r#IRQDP[~fz[l7{Xvdpp6ikbror%VEZCQgglxlq:q[tW}g7kgjoqn SOWEa]|kFjiehh\n#q[uY"[5GVITQxUnfOes^reu,PGD>Q91?K4Rh{rqn6kgap\'S=P<rpS_r_h(xd|[y4~hwc0hmkmhs\'S=PGritgsfFbmcl[Lhta}-OK]PKAZQO%WIPV3.9W3-D)5-8%E):/90A/:"N\\xK"_;ebki$L^xZI[hV{\\wd0hmkmhs\'SfoXr%o_q]/Cziq$Ug|UnqHkzjgh9n\ti~`\tkfbPgf[xZxEm {Xwfvd4Fthw)\\^zR `wcXap_Rdwchf=_nmipp)Ob\tg8oF3\t\\biMlhlmith5e#cyntpmaRcn\\v^ @s%mcr_wb8@joLhta}-FKU\\\\?jNOIOCNKPP0ChsQkjd{ SBV^XGgTOBjJOFm2aKO*O]|\\{VwZLhta}-FKU\\\\?j>SKQFZ=MC\\$N_$WtWyVTinmv*LLSSaFi>:<rpcmejg?!Zsj56^@hUM[N.7 V`"[}R\t[Ftifw(PDRU]=n9:4.Gmvhclmn>#V{k/BSEbPWTSKTBP7B+Ma _uU}_Oos_ %EMQWYEkI1CP6X4lbgo{+tUx`6FW5VFvrtmwGme3dh_t\nVHFEXlxh9gogueu#NQQYqc|jqW{[~aNugj|+SGjHKGWAbCBRMGQY_IFJLQ_ENRGHM@Z XNW^rZnBfwIjui~#RIf?T7R@aGMVKF]ZNH[2VE-Kelk(ubzb5`p`n+Oalfg8pqs\\s:{]p,rYp_8BjZpSZX!Lgo{^mYPqog!\nP8QRYJLHSTU>HET\nVdfeiHkm~)v^|X _-Ki\\l[YZyWkS"T7kgjoqn X`nbo>rkbbeld(zVr[3?tWr`Ua|qobrn\\Z|Xr%o_q]/GqYnWZa#eld0jijk X`nboD if_q=y_zi3bl`vgq+Pklb47O<^:mDR:UGSFbH[9J"UasX7CQ?]JKB_ZZHa:a@PLc>RFXD\\?U9;Axcg*XOU7PN]B\\8l@OQXJX=`>TDf@^7N+Pk|fl]n\\~b}_;ebki$R\\vZhj5YtgYqqpwq\tdpJp\'|Rz\\-Mj^v]~ZjdJS}ijr0hmkmhs\'Y_tdpifcr;dh!Vx$uS|X5Nxaz`ub~o|Zw_r[Fpvgu(xZs]{Z;CjxoavqOb~o|n{V{kt,rYp_8EfotW}g[dsqmpzI{_kms6"\\or2:X<NANDNQ_;JRG(X^\tapi~Ksb!\\trYhg[\nZJll`"!WNPA4Mkfqj|fo_p\\Fjiehh\nIncp`v!w`oa4Mkfqj|fo_p\\ScwgxloZY_t[}Z7kgjoqn [jsg!V\t<wcrl1QQ7P?[QUB[BG[IQe:ZMM>m>\\LTCc<RQZ!Uez["\\xm0jijk [mols_ Xugsf1fqcljo\t_enrgj|^z]ziMh|_rZugsfDpm^qWi^t8\tdpp6KUBP\'Zksdreu_xarhOdsdlU"\\xmEhwpk9 `xm<?\\EF*TjhmqcyW{[~aLnpjm`z]ziVb e;ebki$Sl{ejh{k]bmdNe{q4blho%^focjaO]|=~Zi[ufxTu-ko]pkfa`|btjvehNpYw`{gr7|fwXwsk_iqufLqkbzRocf,p]qa\n]1F|ewF~au_zfvhtjx\'|Rz\\-NykkM WxYy[\tgrnpKxqocyn8es_tki*VLF>`BKJv`t6q`pcmB|Yyo8<]?aIPJcEDMW!WJJ6pgjBj]vkk`Pqog!\n[FOC0JW=Piqi[dpa|oqn|+tUx`6Kb4VZfRvYqm|dwj5`p`n+TPKMkY}>yg|Vpkjmr&o_z\\y^3Dc6[sr?wkzft]\tmw_tJpsv[h(zVr[3Dc6[srOmkjY})v^|X _-PiYg[najI{dtTv-p]ub2Fp\\nZp]rJupiYp>q[fksfaXjcgn6kgap\'\\^t]rZu,h]o_\nZUhvbte}x0jijk ]`pesT %flyehlmij$sW}Z}g.NmcrYno8b 6$kflwaefq#sWtW;Enenakq4gpo8es_tki*V]pi\nZUbhkqTlj0hmkmhs\'\\^~`\tkjlkGemqg{[y }Tvd.Nmpvcyno\'zV{^uf0KYAMcnchftW]qcj{cufxGsl!\ny\\oex`/Mb<K;I^tamDnaubth9N`@m7R9MCR<bG[9JUK;U9NQGJKB2GaBP>Tf{ZHCp]p_zi3bl`vgq+UROCub\tAk\\sF\t`Fjiehh\n#q[uY"[5RXCU^y_Pgofs_ %TTKWXHUIdJ`BTR^RGN[MG7PJXNa69JWETYwb_Zl$W3c;\\DI[UL\\9_JiKS=9JWETYwb_Zl7yUPU|-R=\\EY9RZWHd6aF`PID/Mb<UW{ZbXp@t_Zbr"[<^Aa6TVVLOFRQZ!XLNBpgqRgcKiugpKkmv\n]8UFW=JYMGHUH4b\n\\UILiqnGpbMn\ngrkpOyYglminYHT!!w`oa4P\\;[\\~aaVtCjlilrLqa3FHFWFNFaHQKKHZZ\\>Z~`MHNelkMq\\Q_uW"b_dtpq`g`L]}\'|Rz\\-QZ?S[\n]X[n>xansqRmoz]n\\vKs];GBRLKHAk8QEZ7_4]G.O^DVU\tc]^u=vju,p]qa\n]1Ild$\\ldYkzhkf9gogueu#Tfejh^MgwW\n4#Yodt*qp\\]pr8es_tki*W`dlqYFhyS\'5~ehaz+rYyb~a:DuXsch9ulmnGkmXte7mcim)Y\\lmo]e`\tbfp2dhhsim"Zf~ejfgIikg[pm8es_tki*Wlucz\\3chfr[7mcim)Yh}dx`<d}cjr2fdgq!Xjy[}Z7steu+rYyb~a:D pmcW`h_\nAni{ {Xwfvd4Qkl\tO|Zq\\PlfJmkw(xZs]{Z;GrlgNikmY~)xZ{V9Kpsg`1fqcljo\tcejbmA~bth9>KIbF_@OEcHK;_:1Jyg!gncVuxby"tn]\\\nZ}kVPP&q[yZ1Jyg!gncWNT+rYyb~a:F?=/MX@HLk:WHVD;HRDxavq4APOKX[2`B-SVAHl~dw$sW}Z}g.QZFKf}j|\' enZlRvYf_X^r_{\tdFKHukkexcyj\tlW_aiblw^hl^Zxksf=ajlg(]pkfL^~b#R `pl2fdgq![J[DtZrnp*tbt[\tc6OwUrfUpe[nFuhy$sW}Z}g.SM?M@j^yf~crjtchWw_#izhlQ!&}b0?WJVFPN]>RP_>C?cK6NOTIN[%n8aS.Sm_Gg~`w[zj;:pktao_Qgwey !gjbmPz^iYWdwb!~d\\c?wkhgna~$Yg}grlgAzouf9gogueu#Xcf9vmqbgb\n $Tuhf]|b4blho%eVo>M0Ggpj ijHl`sX{hpcKlthps~\'OE\\DJAc;ROZIJHf4d9ODT[QKJ9c\'a^p8Y)DmqhxnqGjdkW \\wfEkvqkl\t)MH^JlIF?HWEOR;JHf4XAMHPC4TkVRG<<}^}lucV]q^qgndn5~a}dzp6BR9X@XMm2_IBWc:X@R:WUI;]7RMI(_bh;W-Mh{a!kfPifg_~^s]Ja}gnwv*NOGAP=_?T6_#Xcf?O,Odrf|ftEnmfazft[Njxmsi %N?\\WVBM9JHfEcB[@IAg?RCNFiLWKR#Xcf?O,Odrf|ftEnmfazft[Njxmsi %N?\\WWLMCX<VD\\RODG@J>I?jDXMSCY<BTI<b=[BUEU7]G\\+YajDR&]`x]scvehAsfw_#i3;S7\\8WSa=ZOGMj=_?T6_#Xcf?O,^ZsZldxapBqj|b~h9A\\:[6OLGDIJb;`IF9O?TA]^INMBTS^Dd>:HrYHJ6JhhpZw_uYRbwsgt|+S5cZ]>`GRI`UEAWY`>R;VGc\n`ddCT/XYy_okw_t:plx]{n:INCLAdGhDZLQOK87Ro[U=?Iflh]ucz\\Heuftk}-WJQCUFXZLE]4XVBAXAY?kJS?MAa@hHP@Q@KG7Ro[U=?Iflh]ucz\\Heuftk}-WJQCUFXZLNT7RI`@MFGCZ<1MlTV?;Qgjlbx]ybMh|erou,YFVCSCJ:f;]G5Vg^OI8Fpin^\nZ{^Dmrlhr\n#q[uY"[5Vg^OIXYy_okw_t:plx]{n:7TESQe8L1.Sm_M@]`x]scvehAsfw_#i3BP@T4[+YajDRFpin^\nZ{^Dmrlhr\n#TDLQ\\<WTU[KLTG_<XMm4\\CPP0Oh\\SAW[uVtermi?wkzY"o8I]=f>PLcGI@_:YU\\@XG\\+YajDRFpin^\nZ{^Dmrlhr\n#W=I3C\n`ddCTOkbo`|b|XPforipw(_6RFS7n6XUGNIDK b`lDweNejkelliz:{[uf=>NXWL4TkVVd~:|ZzXugsfHpqcy$uS|X5Vg^Sfz7^NU^&W\tXncwJxfq#sWtW;JnaMe|@YGX\\~kwi;]smq>oimi8(Hd T!-navdz\\7Ro[YZ Ks_rklnuds;}W}g7@V[\\>X;PO6PsSX`uRvYqmuineu7$Xws0IWRY9OMK@:HrYLgxLu[zhnjpa}8\tdpp6ikbror%eVoJpao]w(OATIP@V\n`ddOw`qY\t)xZ{V9NsgxYefqHyhlS|7necqtq]ftook<_ndf*\\EOB\niuHlc#X|s0HW>J=YB6Qa=aGsmg]vm{g3dh_t\njorhq`ghtjx<oTu\\/GHDH&meubpUpgrnp?i`nY9PZ=OERIF?HQ/[|eq_jS"\\xmE]kek"xj#:rU;ebki$dj|anYhfxbwBc_pb4g!\\z<oTu\\/jifjnt!ffw^xVjskkv@gWs`8n~Unkf,rYp_8Wwe~eteRmvazcgWp)Nb RocfBvYjO|atWk {Xwfvd4`gWs`}\'rVy\\uc2dhhsim"jSr[nr0dip4blho%qRp_fq2edno]3bl`vgq+e]kekg9jz^|\ny\\oex`/]tgtcl rfr-navdz\\7^rk}^r%dqm&q[yZ1Yod~`n-il}?kbncwZ\n\\veh,gjdmt<ukWd~Vnru*tbt[\tc6\\vc|df,pgd^`^r[z {Xwfvd4`nfzho\'|e})429&j_\nDw_n[}TuFwelbVUr`8es_tki*g`uiyZ3mlT!gxqg*qkyhlgv\'zV{^uf0[kl{bj$~Wqf}nta6lt8zrxe}RqGsmkjhm\t#fZkD#_nr0hmkmhs\'ma\n`z\\/uiZvn{gj$v`Sb\nmnkiaVfzb|^ d;[jqtYw]t#q[uY"[5bjnwjk"!`ll!`\t\\/mr<rqzatWkB bpqgo{+j]~kkmqY;ebki$fb~dr[5itU|sqnm+ubOj gz`n[Qps_u_\th3]lfahudu*tbt[\tc6\\vc|df,{]em\ndw[5a}7xvphw^jD}jqksd\n%i_wDlm\nZs[y {Xwfvd4`nfzho\'$Vojumv]1iz9tmu^~TmOtkookg~)|^{`"\\Mgwlhhqg3bl`vgq+ehqmhclmn=oen%epshH`rZhj3U~a|nna6akV\nb8es_tki*ggqm{aj$ld b{-navdz\\7^yg `y\\/evgxj:cfcl\trbwrqhm+mfzpz<}]yXqqi\\1fqcljo\trbwrqhm+rcr)v^|X _-asfvixZ3chdzGrlghqkk"w`x`!Y9Zplwgo_:hhhlW}fqnv*tbt[\tc6\\}_\nfmc2llgq#q[uY"[5bqj{lrY9osfsD Xnn2dhhsim"jd\'c}n0o}_z`p)n^qc%gu,rYp_8Xwowf~!|tdptb4Yy^|r~e;cflklk&og~f{a=f~avhm+mYy`|Z!VX\\z,rYp_8Ym-nSF_qhjh6tx]\t`vg<_ndf*havjmih^Lhta}-p]ub2Y"ook|Ry%BbhKh[~XmFya$\\mdt*tbt[\tc6^%erio_p&Lm_ZfhjZ_exuk`moOb~okezVq%upgLkl{iybl "elAkjl+sY\tcy]wkr#gcx[k(zVr[3X#_uRenmbt s0v^s_Bk4h9&zluij$uS|X5gko|lxm9ayk$R\t[/jifjnt!m_zf~e!-taxigWpN~Z!V;cflklk&uci[\tWs7K+kjlb~Yo?L\'rR Xc_w]v(xZs]{Z;\\|Rg_}ok7zi~^%e9bq/6n9sme9_5i \\}dnj6ikbror%z[n.kdhnf]:lw_{W{a7kgjoqn x\\!<}_{\\drmgqm\\ZwIld$X{+oavrhU})\nb Zocf*qg}L`8X[zexbwCgokood\tdyg<_ndf*rYycsVyey pcyMcim)tU dqZ!`\t%dmscl_QcfXsWs\nw`xeo^zc})mksUreugedv(~ZvkpdtH|dtImaoU\tdyg<]rehrl$q[!^lW{a !rrRnwquWzgRZ|Uy\\sPi_lm\nZw[k }Tvd.jiso[loyk<^\nDbvXgx]tEt_uf!\nw`xeo^zc})z^\n^vjtgsfv(}jjh\n }Tvd.jiso[loyk<a|`orijHhmWq[k\t}T\thi]|lx"}`{nsd DfbmYN_$H~i{W|4lbgo{+tUx`6gogv^brsj1mqg{_jWfb{jgn6`ub\tmyezV\t%plijui~!sW}[vT}nt*{bxjt^oP}cx\\s,ggqn~dqbld=bwrv]|bi\\liq^:_nmjeelrl:hjh}[rX`ntgmo4g\t\\|m[V\njbeik1fqcljo\t~cnm0hmkmhs\'yis_QXu_fYv_:cfcl\t~ekhvqu?xc!nok<gritgsf/i~^jd{S"\\xm.lmolc}hkgqV;ZmcejP_mhzhle=ajlg(xbxZzmwZ|Tr%o_zaj[\n^td5f~=\\NP*tbt[\tc6iscsfskeff_:cflpYpgrnp*|vvY7k|b|e;ebki$sl{buj5`p`n+u]up{br<|\'qR{Jim{&q[yZ1ijd~_uA{*tbt[\tc6lqc|cmRs&o_z\\y^3etg]hoawrz"w`x`!Y9jfrXap_{jy$uS|X5rram`nG#i~asdvj/aeff_x#q[uY"[5rram`nG#i~asdvj/eilYiuXji5^tapsj({mkYnc]r|eu\\tgw&s_zYndn\t$\\|tch^fkk{j|m<Yr`hfx$yc\tjfb][tjyntp6mg[pGo_!~"`tsedYcqlueyf=jrcvd4tkVLkz\'sb!Xmq2fdgq!|[i]xgL`p_miGbthkmw`{=s_q]1hmbj"~Wq^rsTayrkg\tAsesD%jucq&o_z\\y^3itUthvNmpu` `VhqRy=jjiK|m\nZrKY>=_nmipp)}Ymfsmaar\\dfKjdgyVw$sW}Z}g.sm_q]\tNz^sTuIfas_qc\n^tdLd b{-p]ub2kp]ub!D}\\falJh]{\\s_{[~aNugj|+I5[O_KW?TVQFEKH&$VsZlj=c~anekCkU\tp|^<Ur]bsplEl{lx[yB bvovE{>r`zro]<_ndf*}Yq^qm3f|T{\\lEg]|rxY9bomW^n^fQmrh(xZs]{Z;ljmfa\n+vimgs\\TVnkvpi&lmPZkW|^"5{nyomo4`piqmv~%Xobip1j Wq_j8tT}tta6fyG\t\\~b evZtCrYefqY3dh_t').split(a.f.b([71])),
                        xa = ua.length,
                        ra, wa = [];
                    for (ra = 0; ra < xa; ra++) wa.push(e(ua[ra], sa.contentWindow));
                    ca = a.f.b(wa)
                } else ca = "";
                ta.is = ca;
                b.iv = 8;
                b.qt = G;
                b.gz = a.d.as() ? 1 : 0;
                b.hh = a.d.at() ? 1 : 0;
                b.hn = a.d.au() ? 1 : 0;
                var za = b,
                    va;
                try {
                    va = !a.k.d(window.top) && window.top.name ? a.f.i(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : ""
                } catch (t) {
                    va = ""
                }
                za.tw = va;
                void 0 !== J && (b.qc = J);
                void 0 !== C && (b.qd = C);
                b.qf = m;
                b.qe = z;
                b.qh = w;
                b.qg = p;
                b.qm = y;
                b.qa = a.d.z;
                b.qb = a.d.aa;
                b.qi = a.d.x;
                b.qj = a.d.y;
                var Ba = b,
                    ya, Ra = [];
                try {
                    var Ca = a.f.b([47,
                            40, 34, 28, 30, 44, 84, 34, 39, 34, 45, 30, 29, 84
                        ]),
                        Fa = a.f.b([17, 46, 39, 19, 26, 44, 36]),
                        Ga = a.f.b([2, 26, 39, 28, 30, 37, 19, 26, 44, 36]),
                        Ha = "undefined" !== typeof window[Fa],
                        Ia = "undefined" !== typeof window[Ga];
                    Ra.push("undefined" !== typeof window[Ca] ? 1 : 0);
                    Ra.push(Ha ? 1 : 0);
                    Ra.push(Ia ? 1 : 0)
                } catch (t) {}
                ya = Ra.join("");
                Ba.to = ya;
                b.po = l();
                var Ja = b,
                    Aa, Ka = a.f.b([28, 26, 39, 47, 26, 44]),
                    Da = a.f.b([48, 30, 27, 32, 37]),
                    Ma = a.f.b([30, 49, 41, 30, 43, 34, 38, 30, 39, 45, 26, 37]),
                    Na = a.f.b([22, 4, 1, 6, 11, 84, 29, 30, 27, 46, 32, 84, 43, 30, 39, 29, 30, 43, 30, 43, 84, 34, 39, 31,
                        40
                    ]),
                    Oa = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 21, 4, 13, 3, 14, 17, 84, 22, 4, 1, 6, 11]),
                    Sa = a.f.b([20, 13, 12, 0, 18, 10, 4, 3, 84, 17, 4, 13, 3, 4, 17, 4, 17, 84, 22, 4, 1, 6, 11]),
                    Ta = a.f.b([47, 30, 39, 29, 40, 43]),
                    Ua = a.f.b([43, 30, 39, 29, 30, 43, 30, 43]),
                    Xa = a.f.b([28, 43, 30, 26, 45, 30, 4, 37, 30, 38, 30, 39, 45]),
                    bb = a.f.b([32, 30, 45, 2, 40, 39, 45, 30, 49, 45]),
                    Ya = a.f.b([32, 30, 45, 4, 49, 45, 30, 39, 44, 34, 40, 39]),
                    cb = a.f.b([32, 30, 45, 15, 26, 43, 26, 38, 30, 45, 30, 43]),
                    Va = {};
                try {
                    var db = document[Xa](Ka),
                        Wa = db[bb](Da) || db[bb](Ma + "-" + Da),
                        eb = Wa[Ya](Na);
                    Va[Ta] = Wa[cb](eb[Oa]);
                    Va[Ua] =
                        Wa[cb](eb[Sa])
                } catch (t) {}
                Aa = a.f.i(a.f.l(Va));
                Ja.vy = Aa;
                c && (b.mst = c);
                if (H) try {
                    document.body.removeChild(H)
                } catch (t) {}
                return a.b.i(b)
            }
        })(p);
        (function(a) {
            function n(b) {
                var c = a.f.r(!0);
                (b = a.v.b(35, b, c, !1, !0)) && b.res && a.at.a("DOMlessLLD", r[a.f.af], "https://geo.moatads.com/n.js?" + b.res.querystring)
            }
            a.f.o = !1;
            a.f.p = [];
            a.f.q = {};
            a.f.q.a = "appendSpecifics";
            a.f.q.b = "appendManual";
            a.f.q.c = "onlyHooman";
            a.f.q.d = "onlyBot";
            a.f.q.e = "onlyNonHiddenAd";
            var f = {};
            (function() {
                a.d.fe() && a.p.e(function() {
                    try {
                        a.d.g.navigator.getBattery().then(function(a) {
                            f.charging =
                                a.charging;
                            f.level = a.level
                        })["catch"](function(a) {})
                    } catch (b) {}
                }, 1E3)
            })();
            a.f.r = function(b) {
                var c;
                try {
                    r._c ? c = r._c : (c = a.ar.a(), r._c = c)
                } catch (d) {
                    c = a.ar.a()
                }
                if (void 0 === b || !1 === b) c.ql = a.f.s, c.qo = a.f.t;
                c.qr = a.f.u();
                f && "undefined" !== typeof f.charging && a.b.dg(f.level) && (c.vf = f.charging ? 1 : 0, c.vg = 100 * f.level);
                return c
            };
            var k = a.f.b([48, 30, 27, 29, 43, 34, 47, 30, 43]),
                e = a.f.b([30, 47, 26, 37, 46, 26, 45, 30]),
                l = a.f.b([43, 30, 44, 41, 40, 39, 44, 30]),
                g = [k, e].join("-"),
                d = [g, l].join("-");
            try {
                a.f.s = a.f.i(a.f.l(a.d.g.navigator.plugins,
                    "name"))
            } catch (h) {}
            a.f.u = function() {
                return 0
            };
            a.f.t = 0;
            a.f.v = function() {};
            var c = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            a.f.w = function(b, d, g) {
                if ((a.f.q.a in d || a.f.q.b in d) && void 0 === a.f.x) return !1;
                var e = a.b.i(a.f.x);
                void 0 === e.n && a.as.a(g) && (e.n = 1);
                a.f.q.a in d ? a.b.forEach(c, function(a, c) {
                    b = a in e ? b + ("&" + a + "=1") : b + ("&" + a + "=0")
                }) : a.f.q.b in d && a.b.forEach(c, function(c, d) {
                    a.b.be(a.f.q.b, c) && (b = c in e ? b + ("&" + c + "=1") : b + ("&" + c + "=0"))
                });
                return a.f.q.c in d && a.f.q.e in d ? a.f.y(g) ? a.f.z(b) : !1 : a.f.q.c in
                    d ? 0 === a.f.aa ? a.f.z(b) : !1 : a.f.q.d in d ? 1 === a.f.aa ? a.f.z(b) : !1 : a.f.z(b)
            };
            a.f.z = function(b) {
                var c, d;
                c = a.d.c();
                d = a.d.d();
                if (c && d) return a.q.j(b, null, null);
                if (!c) return (new a.d.g.Image).src = b, !0
            };
            a.f.ab = function(b, c) {
                b(a.f.aa)
            };
            a.f.ac = function(a, c, d) {
                b.add(a, c, d)
            };
            a.f.ad = function(b, c) {
                if (void 0 === a.f.aa) return a.f.p.push({
                    callback: b,
                    opts: c
                });
                a.f.ab(b, c)
            };
            a.f.ae = function() {
                for (var b = 0; b < a.f.p.length; b++)
                    if (a.f.p.hasOwnProperty(b)) {
                        var c = a.f.p[b];
                        a.f.ab(c.callback, c.opts)
                    }
            };
            a.f.ag = function(c) {
                if (r) {
                    a.f.af =
                        "gna" + t.floor(1E6 * t.random());
                    var d;
                    r[a.f.af] = function(c) {
                        a.f.ah = new q - a.f.ai;
                        d = c;
                        r[a.f.af] = null;
                        delete r[a.f.af];
                        d && (a.f.x = d, r.jsonpcache = d, a.f.aa = "n" in a.f.x ? 1 : 0, b.checkPixels(), a.f.ae())
                    };
                    a.f.ai = new q;
                    a.p.f(function() {
                        a.f.aj = new q - a.f.ai
                    }, 0);
                    if (r.jsonpcache) r[a.f.af](r.jsonpcache);
                    else n(c)
                }
            };
            a.f.ak = function(b, c) {
                var d = a.f.r();
                a.au && a.au.a && a.au.a.imaSDK ? b.moatClientLevel3 && a.v.b(34, b, d, !1, !0) : a.v.b(34, b, d, !1, !0)
            };
            a.f.al = function(b) {
                if (!0 !== a.f.am) {
                    a.f.am = !0;
                    a.f.ak(b);
                    a.b.ea() && a.f.ag(b);
                    a.f.v();
                    var c = function() {
                            var c = {};
                            c.qr = a.f.u();
                            c.qo = a.f.t;
                            a.v.b(36, b, c)
                        },
                        e = a.d.g.document;
                    a.p.c(e, g, function(b) {
                        a.p.d(e, g, null, "mswe");
                        a.f.u = function() {
                            return 1
                        };
                        c()
                    }, "mswe");
                    a.p.c(e, d, function(b) {
                        a.p.d(e, d, null, "mswer");
                        a.f.u = function() {
                            return 1
                        };
                        c()
                    }, "mswer")
                }
            };
            a.f.a = function() {
                var b = a.d.g.document;
                a.p.d(b, g, null, "mswe");
                a.p.d(b, d, null, "mswer")
            };
            a.f.y = function(b) {
                return 0 == a.f.aa && !1 === a.as.a(b)
            };
            a.f.an = function() {
                return !1
            };
            a.f.ao = function() {
                var a;
                a = t && t.sinh ? 1E10 * (t.sinh(t.sinh(t.sinh(t.sinh(1)))) - 3.81278003) :
                    -2;
                a = a.toString();
                return 0 === a.indexOf("7.600") ? a.substring(5) : -1
            };
            var b = function() {
                function b(a, c, d) {
                    this.pixel = a;
                    this.opts = c;
                    this.adNum = d
                }

                function c() {
                    a.b.forEach(d, function(b, c) {
                        a.f.w(b.pixel, b.opts, b.adNum) && delete d[c]
                    })
                }
                var d = {};
                a.m.a.azsx("hiddenAds:updated", c);
                return {
                    add: function(g, m, e) {
                        g = new b(g, m, e);
                        m = a.b.dn();
                        d[m] = g;
                        c()
                    },
                    checkPixels: c
                }
            }();
            a.m.a.azsx("allLocalAdsKilled", a.f.a, {
                once: !0
            })
        })(p);
        (function(a) {
            function n() {
                if (!a.d.k() || !a.d.cz()) return !1;
                var b = 1 == a.d.ej("isNative"),
                    c = !!document.getElementById("mianahwvc");
                return m = m || b || c
            }

            function f(a) {
                a.left = a.x;
                a.top = a.y;
                a.right = a.x + a.w;
                a.bottom = a.y + a.h;
                return a
            }

            function k(a) {
                a.x = t.round(a.x);
                a.y = t.round(a.y);
                a.w = t.round(a.w);
                a.h = t.round(a.h);
                return a
            }

            function e(a, b) {
                a.x *= b;
                a.y *= b;
                a.w *= b;
                a.h *= b;
                return a
            }

            function l(b) {
                z || (z = !0, a.d.ef());
                r._i_.m = b;
                b = b.ma && 1 == parseInt(b.ma);
                m = m || b;
                a.m.a.zaxs("metadataReady")
            }

            function g(a) {
                try {
                    return r._i_.r[a.MMAK_ID]
                } catch (b) {
                    return null
                }
            }

            function d(a) {
                r._i_.r[a.MMAK_ID] = {}
            }

            function c(b, c) {
                z || (z = !0, a.d.ef());
                var h;
                b: {
                    for (h in b)
                        if (b.hasOwnProperty(h)) {
                            h = !1;
                            break b
                        } h = !0
                }
                if (h) d(c);
                else {
                    h = g(c);
                    var m = 1;
                    if (b.view) {
                        var l = b.view.h,
                            n = a.d.g.innerHeight;
                        l && n || (l = b.view.w, n = a.d.g.innerHeight);
                        l && n && (m = n / l);
                        a.n.f(b.view)
                    }
                    h.s = f(k(e(b.screen, m)));
                    h.v = f(k(e(b.view, m)));
                    h.vv = f(k(e(b.visible, m)));
                    "undefined" !== typeof b.maybe && (h.va = f(k(e(b.maybe, m))));
                    "undefined" !== typeof b.dv && (m = A, A = b.dv, m !== A && a.m.a.zaxs("deviceVolumeChange", c));
                    "undefined" !== typeof b.visiblePercent && (h.isHidden = b.isHidden, h.opacity = b.opacity, h.isAttached = b.isAttached, h.visiblePercent = b.visiblePercent,
                        h.coveredPercent = b.coveredPercent);
                    h.f = b.inFocus;
                    w[c.MMAK_ID] ? p || "undefined" !== typeof b.inFocus && !b.inFocus || !a.focus.pageIsVisible() || a.n.q(h.v, w[c.MMAK_ID]) || (r.swde.zaxs("scroll"), p = !0) : w[c.MMAK_ID] = h.v;
                    h.uts = +new q
                }
            }

            function b() {
                w = {};
                p = !1
            }

            function h(b) {
                var c = {
                    truncated: 0
                };
                a.b.forEach(v, function(a) {
                    var d = a[0];
                    a = a[1];
                    b.hasOwnProperty(d) && ("string" === typeof b[d] ? (c[a] = b[d].substring(0, "buildFp" === d ? 50 : 20), c[a].length !== b[d].length && c.truncated++) : c[a] = b[d])
                });
                return c
            }
            a.t = {};
            var v = [
                    ["source", "a"],
                    ["carrier", "b"],
                    ["sim", "c"],
                    ["phone", "d"],
                    ["buildFp", "e"],
                    ["buildModel", "f"],
                    ["buildMfg", "g"],
                    ["buildBrand", "h"],
                    ["buildProduct", "i"],
                    ["buildTags", "j"],
                    ["f1", "k"],
                    ["f2", "l"],
                    ["f3", "m"],
                    ["f4", "n"]
                ],
                x = a.d.az + "._i_",
                A, m = !1;
            (function(a) {
                function b(c) {
                    MAX_RETRIES = 10;
                    PROTOCOL = "moat-bridge:";
                    BRIDGE_TYPE = "iframe";
                    this.ad = c;
                    this.bridgeType = BRIDGE_TYPE;
                    this.loopId = "";
                    this.iframeEl = null;
                    this.fnStates = {};
                    this.fnTries = {};
                    this.fnStateTimes = {};
                    this.init = function() {
                        this.createIframe()
                    };
                    this.createIframe = function() {
                        var b =
                            a.d.g.document,
                            c = b.createElement("IFRAME");
                        c.setAttribute("src", "about:blank#Moat");
                        c.style.display = "none";
                        c.id = this.ad.MMAK_ID;
                        b.documentElement.appendChild(c);
                        this.iframeEl = c
                    };
                    this.execute = function(a, b, d) {
                        if (0 === this.fnStates[b]) {
                            var h = this.fnTries[b];
                            if (h && h > MAX_RETRIES) return !1
                        }
                        h = this.fnStateTimes[b];
                        if (300 > (new q).getTime() - h || !a || b && !d || !r._i_.b[c.MMAK_ID]) return !1;
                        h = "";
                        b && (h = m + "." + this.ad.MMAK_ID + "." + b);
                        var g = this;
                        h && !r._i_[b] && (r._i_.b[c.MMAK_ID][b] = function(c) {
                            g.ackAndRun(a, d, b, c)
                        });
                        b && (this.fnStates[b] =
                            0, this.fnTries[b] || (this.fnTries[b] = 0), this.fnTries[b] += 1, this.fnStateTimes[b] = (new q).getTime());
                        h = PROTOCOL + a + ":" + (h || "");
                        this.iframeEl.setAttribute("src", "about:blank");
                        this.iframeEl.setAttribute("src", h);
                        return !0
                    };
                    this.subscribe = function(b, c, d, h, m) {
                        var g = (new q).getTime(),
                            e = function(a) {
                                return function() {
                                    a.execute(b, d, c)
                                }
                            }(this);
                        if (h) this.loopId = g, a.p.g(e, null, m, this.loopId);
                        else if (0 < m) a.p.f(e, m);
                        else try {
                            e()
                        } catch (f) {}
                    };
                    this.ackAndRun = function(a, b, c, d) {
                        this.fnStates[c] = 1;
                        this.fnStateTimes[c] =
                            (new q).getTime();
                        this.fnTries[c] = 0;
                        if (!b) return !0;
                        try {
                            var h = b(d, this.ad);
                            return "undefined" == typeof h ? "" : h
                        } catch (m) {
                            return m.message || "error"
                        }
                    };
                    this.destroy = function() {
                        a.p.i(this.loopId);
                        delete r._i_.b[c.MMAK_ID];
                        this.iframeEl.parentNode.removeChild(this.iframeEl);
                        delete g[this.ad.MMAK_ID]
                    }
                }

                function c(b) {
                    this.bridgeType = BRIDGE_TYPE = "postMessage";
                    this.ad = b;
                    this.execute = function(a, b, c) {
                        if (!a || b && !c) return !1;
                        var d = "";
                        b && (d = m + "." + b);
                        var h = this;
                        d && !r._i_[b] && (r._i_.b[b] = function(d) {
                            h.ackAndRun(a, c, b, d)
                        });
                        window.webkit.messageHandlers.__z_moat_bridge__.postMessage("moat-bridge:" + a + ":" + (d || ""));
                        return !0
                    };
                    this.subscribe = function(b, c, d, h, m) {
                        var g = (new q).getTime(),
                            e = function(a) {
                                return function() {
                                    a.execute(b, d, c)
                                }
                            }(this);
                        if (h) this.loopId = g, a.p.g(e, null, m, this.loopId);
                        else if (0 < m) a.p.f(e, m);
                        else try {
                            e()
                        } catch (f) {}
                    };
                    this.ackAndRun = function(a, b, c, d) {
                        if (!b) return !0;
                        try {
                            var h = b(d, this.ad);
                            return "undefined" == typeof h ? "" : h
                        } catch (m) {
                            return m.message || "error"
                        }
                    };
                    this.destroy = function() {
                        a.p.i(this.loopId);
                        delete r._i_.b[b.MMAK_ID];
                        delete g[this.ad.MMAK_ID]
                    }
                }

                function d(b) {
                    this.bridgeType = BRIDGE_TYPE = "oneway";
                    this.ad = b;
                    this.subscribe = function(b, c, d, h, m) {
                        d = a.d.eh();
                        var g = this;
                        switch (b) {
                            case "gvr":
                                a.m.a.azsx("adKilled", function(a) {
                                    g.ad === a && g.destroy()
                                });
                                d.lgpr(function(a) {
                                    c(a, g.ad)
                                }, this.ad.MMAK_ID);
                                break;
                            case "gmd":
                                c(a.d.ei())
                        }
                    };
                    this.destroy = function() {
                        var b = this.ad.MMAK_ID;
                        a.d.eh().xrnk(b);
                        delete g[b]
                    }
                }

                function h(a) {
                    return g[a.MMAK_ID]
                }
                var m = x + ".b",
                    g = {};
                a.t.g = {};
                a.t.g.a = function(m) {
                    r._i_.b || (r._i_.b = {});
                    r._i_.b[m.MMAK_ID] = {};
                    if (a.d.g.webkit && a.d.g.webkit.messageHandlers && a.d.g.webkit.messageHandlers.__z_moat_bridge__) bridge = h(m) ? !1 : new c(m);
                    else if (a.d.es()) bridge = h(m) ? !1 : new d(m);
                    else if (a.d.g.__zMoatInit__)
                        if (h(m)) bridge = !1;
                        else {
                            var e = new b(m);
                            e.init();
                            bridge = e
                        } bridge && (g[m.MMAK_ID] = bridge);
                    return bridge
                };
                a.t.g.b = h;
                a.t.g.c = function(a) {
                    return (a = h(a)) ? a.bridgeType : null
                }
            })(a);
            var z = !1,
                w = {},
                p = !1;
            a.t.h = function(h) {
                if (a.d.k() && !a.t.g.b(h)) {
                    a.u.g.a.push(b);
                    var m = a.d.ap();
                    if (m && m.isInApp) {
                        r._i_ || (r._i_ = {});
                        r._i_.r || (r._i_.r = {});
                        d(h);
                        var g = function(b) {
                            return function() {
                                var d = a.t.g.a(b);
                                d && (d.subscribe("gvr", c, "u", !0, 100), d.subscribe("gmd", l, "x", !1, 150))
                            }
                        }(h);
                        h = "sml_" + (new q).getTime();
                        a.p.g(function(b) {
                            return a.d.cv() ? (g(), !1) : !0
                        }, {
                            initBridge: g
                        }, 100, h)
                    }
                }
            };
            a.t.d = function(b, c) {
                b.viewabilityMethod.strict = 2;
                var h = g(b),
                    m = a.n.h(),
                    e = h && "undefined" !== typeof h.f && 1 === h.f,
                    f;
                h ? (f = h.uts) ? (f = 500 >= +new q - f) || d(b) : f = !1 : f = !1;
                if (!f || !e) return m;
                e = h.v;
                if (!e) return m;
                f = e.w * e.h;
                var k, l;
                "undefined" === typeof h.visiblePercent || a.b.q() ? (k = h.vv,
                    l = "ESP" === a.d.ek() ? !0 : !1, l || (l = h.va, k = k || l ? k && !l ? k : l && !k ? l : !k.w || !k.h || l.w && l.h ? !l.w || !l.h || k.w && k.h ? k.w * k.h >= l.w * l.h ? k : l : l : k : !1), l = k.w * k.h / f) : (k = h.vv, l = h.visiblePercent);
                if (!k) return m;
                var v = h.s,
                    m = f >= .95 * v.w * v.h;
                f = n();
                m = a.n.j(b, c, l, f, m);
                h.vjs = m.jsPercv;
                h = a.n.k(b, k, e, v, f);
                a.n.l(b.zr, h, m, f) && a.m.a.zaxs("rectsAvailable", b.zr, h.elementRect, h.visibleRect);
                return m
            };
            a.t.a = n;
            a.t.f = function() {
                var a = r && r._i_ && r._i_.r;
                if ("undefined" === typeof a) return !0;
                for (var b in a)
                    if (a.hasOwnProperty(b) && (rects = a[b]) &&
                        "undefined" !== typeof rects.f && 1 === rects.f) return !1;
                return !0
            };
            a.t.b = function() {
                return r && r._i_ && r._i_.m
            };
            a.t.c = function(b) {
                delete r._i_.r[b.MMAK_ID];
                (b = a.t.g.b(b)) && b.destroy()
            };
            a.t.i = function(b, c, d) {
                (new q).getTime();
                c = function(c, h) {
                    var m = {
                            Screen: "za",
                            View: "zb",
                            Visible: "zc",
                            VisiblePctNative: "zd",
                            VisiblePctJS: "ze"
                        },
                        e = b ? g(b) : null;
                    e && c in m && (formatted = a.n.r(e[h]), "undefined" !== typeof formatted && (d[m[c]] = formatted))
                };
                var m = b ? g(b) : null;
                m && "undefined" !== typeof m.f && (c("Screen", "s"), c("View", "v"), c("Visible",
                    "vv"), c("VisiblePctNative", "visiblePercent"), c("VisiblePctJS", "vjs"), (m = b ? g(b) : null) && "undefined" !== typeof m.f && (d.zf = [m.isAttached, m.f, m.isHidden, a.n.s(m.opacity)].join(":")), c = a.d.ej("metadata"), "undefined" !== typeof c && c.hasOwnProperty("source") && (d.zMoatDR = a.f.i(JSON.stringify(h(c)))))
            };
            a.t.j = function(b) {
                for (var c = [
                        ["namespace", "zMoatMMAKns"],
                        ["appName", "zMoatMMAKan"],
                        ["appId", "zMoatMMAKai"],
                        ["versionHash", "zMoatMMAKv"],
                        ["deviceOS", "zMoatMMAKOSv"],
                        ["version", "zMoatMMAKvs"]
                    ], d = 0, h = c.length; d < h; d++) {
                    var m =
                        c[d],
                        g = a.d.ej(m[0]);
                    g && (b[m[1]] = g)
                }
                b.zMoatMMAKin = Number(a.d.eg())
            };
            a.t.e = function() {
                var b = function() {
                    if (!a.d.cy(1) && !a.d.di()) {
                        a.n.o(1);
                        var b, c = a.d.eh();
                        c ? a.d.er() ? (b = c.vgft() && !c.lkpu(), b = a.d.et() || b) : b = !0 : b = !0;
                        b ? a.m.a.zaxs("trackingReady") : c.bpsy(function() {
                            a.m.a.zaxs("trackingReady")
                        })
                    }
                };
                if (a.d.cv()) b();
                else {
                    var c = "sml_" + (new q).getTime();
                    a.p.g(function(c) {
                        return a.d.da() ? !1 : a.d.cv() ? (b(), !1) : !0
                    }, {
                        setupImpressionCallback: b
                    }, 100, c)
                }
            };
            a.t.k = function() {
                return A
            }
        })(p);
        (function(a) {
            function n(b) {
                if ("object" ===
                    typeof b) {
                    var c;
                    a.b.forEach(b, function(a, b) {
                        if (/1\.+/.exec(b)) {
                            var d = a.prototype;
                            if ("object" === typeof d && "function" === typeof d.isSupported && "function" === typeof d.registerSessionObserver && "function" === typeof d.addEventListener && "function" === typeof d.sendUrl) return c = {}, c[b] = a, !1
                        }
                    });
                    return c
                }
            }

            function f() {
                var b;
                b = u ? [n(this.OmidVerificationClient), a.d.g] : a.b.ah("OmidVerificationClient", !1, !0, n);
                var c = b[0];
                b = b[1];
                c || b == a.d.g || (c = n(a.d.g.OmidVerificationClient));
                return c
            }

            function k() {
                if (!G) {
                    var b = f();
                    b && (Q = Object.keys(b)[0], G = new b[Q], U && a.q.h())
                }
            }

            function e(a, b) {
                var c = function() {
                    document && document.readyState && "loading" === document.readyState || (document.removeEventListener("readystatechange", c), a(b))
                };
                document.addEventListener("readystatechange", c)
            }

            function l(b) {
                return g(function(c) {
                    var d;
                    d = a.d.c();
                    var h = document && document.readyState && "loading" === document.readyState;
                    !d && h ? e(b, c) : b(c)
                })
            }

            function g(a) {
                return function(b) {
                    O.push(b);
                    V || ("undefined" !== typeof Y || "sessionStart" !== b.type) && b.adSessionId !==
                        Y || a(b)
                }
            }

            function d(a) {
                return g(function(c) {
                    R || !b() ? a(c) : P.push(c)
                })
            }

            function c(a) {
                if (null != a) {
                    var b = t.round(a.x),
                        c = t.round(a.y),
                        d = t.round(a.width);
                    a = t.round(a.height);
                    return {
                        x: b,
                        left: b,
                        y: c,
                        top: c,
                        w: d,
                        width: d,
                        h: a,
                        height: a,
                        right: b + d,
                        bottom: c + a
                    }
                }
            }

            function b() {
                return "undefined" !== typeof pa && ("native" === pa || "javascript" === pa)
            }

            function h(b) {
                if (!b || "string" !== typeof b) return !1;
                var c = [a.f.b([7, 40, 45, 44, 45, 26, 43]), a.f.b([6, 40, 40, 32, 37, 30]), a.f.b([6, 40, 40, 32, 37, 30, 53]), a.f.b([1, 50, 45, 30, 29, 26, 39, 28, 30]), a.f.b([1,
                        50, 45, 30, 29, 26, 39, 28, 30, 53
                    ])],
                    d = !1,
                    h = b.toLowerCase();
                a.b.forEach(c, function(a) {
                    if (a.toLowerCase() === h) return d = !0, !1
                });
                return d
            }

            function v() {
                if (a.d.da() && ka && ea && N && S)
                    if (h(N && N.partnerName)) a.e.g(4);
                    else {
                        var b = {
                                yd: N.partnerName,
                                ye: N.partnerVersion,
                                yh: S.os,
                                yb: ga.libraryVersion,
                                yi: S.deviceType,
                                pcode: "turner763610601596",
                                i: K,
                                ar: "da8ed23e15-clean"
                            },
                            c = "https://mb.moatads.com/o.js?" + a.b.cr(function(a) {
                                var c = encodeURIComponent(b[a]);
                                return a + "=" + c
                            }, Object.keys(b)).join("&");
                        a.e.g(1);
                        a.at.a("OMIDNados", x,
                            c)
                    }
            }

            function x(b) {
                1 === b.om || "1" === b.om ? (a.e.h(), a.e.g(2)) : a.e.g(3)
            }

            function A(b) {
                var c = !1,
                    d = !1,
                    h = !1;
                a.b.forEach(b, function(a) {
                    "hidden" === a ? c = !0 : "backgrounded" === a ? d = !0 : "notFound" === a && (h = !0)
                });
                ja = c;
                ba = d;
                ia = h
            }

            function m(b) {
                if ("undefined" !== typeof b && "undefined" !== typeof b.adView) {
                    var d = b.viewport;
                    d && (d.x = 0, d.y = 0, d = c(d), a.d.c() && a.a.a(window) && "undefined" === typeof B && (window.screen.width = d.w, window.screen.height = d.h, window.screen.availWidth = d.w, window.screen.availHeight = d.h, a.d.w()));
                    B = d;
                    d = b.adView;
                    d.onScreenGeometry ? (Z = d.percentageInView / 100, L = c(d.onScreenGeometry)) : (L = void 0, Z = 0);
                    d.reasons && A(d.reasons);
                    if (d.geometry) {
                        var h = I;
                        I = c(d.geometry);
                        a.n.f(I);
                        h && I && !ba && 0 != h.w && 0 != h.h && 0 != I.w && 0 != I.h && !a.n.q(h, I) && r.swde.zaxs("scroll")
                    }
                    T = "undefined" !== typeof d.measuringElement ? d.measuringElement : !1;
                    b = (b = b.adView.onScreenGeometry) && b.obstructions;
                    "undefined" !== typeof b && 0 != b.length ? (aa = b = a.b.ec(b, 5), b = "[" + a.b.cr(a.n.r, b).join(",") + "]", d = a.n.r(B), h = a.n.r(I), (new Image).src = "https://d3.moatads.com/?t=" +
                        +new q + "&vp=" + d + "&av=" + h + "&o=" + b) : aa = []
                }
            }

            function z() {
                !H || H.ep || H.unloadPixelSent || (H.preventTryFindingAdAgain = !0, a.u.a(H))
            }

            function w(b) {
                if ("sessionStart" === b.type) try {
                    Y = b.adSessionId;
                    var c;
                    try {
                        c = JSON.parse(b.data.verificationParameters)
                    } catch (d) {}
                    if (c && "object" === typeof c && !Array.isArray(c)) {
                        var h = "moatClientLevel1 moatClientLevel2 moatClientLevel3 moatClientLevel4 moatClientSlicer1 moatClientSlicer2".split(" "),
                            m;
                        for (m in c)
                            if (a.b.be(h, m) || 0 === m.lastIndexOf("zMoat", 0)) {
                                fa = c;
                                break
                            }
                    }
                    var g = b.data.context;
                    pa = g.adSessionType;
                    N = g.omidNativeInfo;
                    Pa = g.omidJsInfo;
                    ga = g.app;
                    if ("undefined" !== typeof g.deviceInfo) {
                        var e = g.deviceInfo;
                        "iPhone OS" === e.os && (e.os = "iOS");
                        S = e
                    }
                    E = g.accessMode;
                    ka = !0;
                    v()
                } catch (d) {
                    V = !0
                } else "sessionError" !== b.type && "sessionFinish" === b.type && z()
            }

            function p(c) {
                if ("undefined" === typeof F) {
                    try {
                        F = c.timestamp, "undefined" !== typeof c.data && b() && m(c.data)
                    } catch (d) {
                        V = !0, z()
                    }
                    if (!V) a: if (!a.d.cy(2)) {
                        if (S && S.os && "ANDROID" === S.os.toUpperCase() && (c = [a.f.b([28, 40, 38, 72, 28, 39, 39, 72, 28, 39, 39, 38, 40, 39, 30, 50]),
                                a.f.b([28, 40, 38, 72, 27, 37, 30, 26, 28, 33, 30, 43, 43, 30, 41, 40, 43, 45, 72, 26, 39, 29, 43, 40, 34, 29, 72, 45, 30, 26, 38, 44, 45, 43, 30, 26, 38]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 41, 32, 26, 28, 33, 26, 38, 41, 54, 52, 53, 55]), a.f.b([28, 40, 38, 72, 26, 29, 46, 37, 45, 44, 48, 34, 38, 72, 47, 34, 29, 30, 40, 26, 41, 41, 72, 26, 39, 29, 43, 40, 34, 29]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 28, 39, 47, 34, 29, 30, 40, 26, 41, 41]), a.f.b([28, 40, 38, 72, 45, 46, 43, 39, 30, 43, 72, 26, 39, 29, 43, 40, 34, 29, 72, 39, 28, 26, 26])
                            ], ga && a.b.be(c, ga.appId))) break a;
                        a.n.o(2);
                        h(N && N.partnerName) ||
                            a.e.f();
                        a.m.a.zaxs("trackingReady")
                    }
                }
            }

            function J(a) {
                m(a.data)
            }

            function C() {
                R = !0;
                var b = P;
                P = [];
                var c = F,
                    d = c;
                "undefined" !== typeof d && (b.sort(function(a, b) {
                    return a.timestamp - b.timestamp
                }), a.b.forEach(b, function(b) {
                    var h = b.timestamp,
                        m = b.type,
                        g = h >= c;
                    g && (a.o.g(H, 0, new q(d)), a.o.g(H, h - d, new q(h)));
                    "geometryChange" === m && J(b);
                    g && (d = h)
                }), b = new q, a.o.g(H, b - d, b))
            }

            function y() {
                for (var a = "", b = ["mo", "at.", "co", "m-"], c = 0, d = b.length; c < d; c++) a += b[c];
                return a + "turner763610601596"
            }
            a.q = {};
            var H, u = !1,
                D, u = a.d.c();
            D = a.d.bh();
            var U = !1,
                G, Q, W = !1,
                R = !1,
                V = !1,
                O = [],
                P = [],
                oa, la, Y, fa = {},
                pa, N, Pa, ga, S, E, F, B, I, L, T = !1,
                Z, ha, aa = [],
                ja = !1,
                ba = !1,
                ia = !1,
                ka = !1,
                ea = !1,
                ca = !1;
            a.q.k = function(c) {
                H = c;
                ea = !0;
                v();
                b() && a.p.f(C, 0)
            };
            a.q.f = b;
            a.q.l = function() {
                return !1
            };
            a.q.g = function(b, c) {
                var d;
                d = !1;
                if (!(G && G.isSupported && G.isSupported())) d = !0;
                else if ("undefined" === typeof L) d = !0;
                else if (ba || ia) d = !0;
                if (d) return a.n.h();
                var h = ca;
                d = a.n.j(b, c, Z, h, L.w * L.h >= .95 * B.w * B.h);
                if ("strict" === a.o.b(b.zr)) {
                    var m = a.n.k(b, L, I, B, h);
                    a.n.l(b.zr, m, d, h) && a.m.a.zaxs("rectsAvailable",
                        b.zr, m.elementRect, m.visibleRect)
                }
                ha = d.jsPercv;
                return d
            };
            a.q.c = function() {
                return b() ? !0 : !ca && a.d.e
            };
            a.q.m = function(b) {
                var c = function(c, d) {
                    var h = {
                        Screen: "za",
                        View: "zb",
                        Visible: "zc",
                        SDKPct: "zd",
                        JSPct: "ze",
                        ObsRects: "zj"
                    };
                    if (c in h) {
                        var m = a.n.r(d);
                        "undefined" !== typeof m && null !== m && (b[h[c]] = m)
                    }
                };
                c("Screen", B);
                c("View", I);
                c("Visible", L);
                c("SDKPct", Z);
                c("JSPct", ha);
                0 != aa.length && c("ObsRects", a.b.cr(a.n.r, aa).join(";"));
                "undefined" !== typeof L && (b.zf = [Number(!ia), Number(!ba), Number(ja), "-"].join(":"))
            };
            a.q.b =
                function(a) {
                    var b = function(b, c) {
                        var d = {
                            AppId: "ya",
                            SdkVer: "yb",
                            JsVer: "yc",
                            IntePartName: "yd",
                            IntePartVer: "ye",
                            VeriClientVer: "yf",
                            VerLoadTime: "yg",
                            DeviceType: "yi",
                            OS: "yh",
                            OSVersion: "yj",
                            AdType: "yk",
                            accessMode: "od",
                            ServiceJSMeasurement: "yl"
                        };
                        "undefined" !== typeof c && (a[d[b]] = c)
                    };
                    try {
                        b("AppId", ga.appId), b("SdkVer", ga.libraryVersion), b("JsVer", Pa.serviceVersion), b("IntePartName", N.partnerName), b("IntePartVer", N.partnerVersion), b("VeriClientVer", Q), b("VerLoadTime", la), "undefined" !== typeof S && (b("DeviceType",
                            S.deviceType), b("OS", S.os), b("OSVersion", S.osVersion)), b("AdType", pa), E && b("accessMode", E), b("ServiceJSMeasurement", Number(T))
                    } catch (c) {}
                };
            a.q.i = function() {
                return ba
            };
            a.q.h = function() {
                W || (G && G.isSupported && G.isSupported() ? (G.registerSessionObserver(g(w), y()), G.addEventListener("impression", l(p)), G.addEventListener("geometryChange", d(J)), W = !0) : U = !0)
            };
            a.q.n = function() {
                ca = !0;
                a.n.g(fa, "OMID-" + Y, I)
            };
            a.q.a = function() {
                return "undefined" === typeof B ? null : {
                    width: B.w,
                    availWidth: B.w,
                    height: B.h,
                    availHeight: B.h
                }
            };
            a.q.o = y;
            var qa = function() {
                var a = document.body && document.body.innerHTML;
                return (null == a || "" === a) && 1 === document.scripts.length
            }();
            a.q.e = function() {
                var c = "undefined" !== typeof window && ("undefined" !== typeof window.omid && "undefined" !== typeof window.omid.serviceWindow || "undefined" !== typeof window.omidVerificationProperties);
                return a.d.d() && !b() && qa || c
            };
            a.q.d = function() {
                var b = a.q.e() && a.d.da(),
                    c = a.d.d() && a.d.dp() && !ca;
                return b || c
            };
            a.q.j = function(a, b, c) {
                function d() {}

                function h() {}
                b = "function" === typeof b ? b :
                    d;
                c = "function" === typeof c ? c : h;
                if ("undefined" === typeof G && "undefined" === typeof D) return !1;
                "undefined" !== typeof G ? G.sendUrl(a, b, c) : "undefined" !== typeof D && D.sendUrl(a, b, c);
                return !0
            };
            a.q.p = function() {
                0 == t.floor(50 * t.random()) && a.v.b(17, {
                    moatClientLevel1: K
                })
            };
            a.q.q = function(a, b) {
                b && b.moatClientLevel1 === K && (a.i = "OMID_DIAGNOSTIC_EVT_COUNT1", a.cm = 50)
            };
            if (a.d.d())
                if (a.d.bi()) G = window.omid3p;
                else if (u && (a.a.c(D.setTimeout, D.clearTimeout, D), a.a.d(D.setInterval, D.clearInterval, D), Image = new Proxy(function() {}, {
                    construct: function() {
                        return new Proxy({}, {
                            set: function(a, b, c) {
                                if ("src" === b) {
                                    var d = encodeURI(c),
                                        d = d.replace(/%5B/g, "["),
                                        d = d.replace(/%5D/g, "]");
                                    D.sendUrl(d)
                                }
                                a[b] = c
                            }
                        })
                    }
                })), k(), !G) {
                var ma = function() {
                    z()
                };
                oa = new q;
                try {
                    if (u) {
                        var na = function(a) {
                            try {
                                f() || eval(a), la = new q - oa, k()
                            } catch (b) {
                                z()
                            }
                        };
                        D.downloadJavaScriptResource("https://z.moatads.com/omidverificationclient/verification-client-v1.js", na, ma)
                    } else {
                        var na = function() {
                                la = new q - oa;
                                k()
                            },
                            da = document.createElement("script");
                        da.src = "https://z.moatads.com/omidverificationclient/verification-client-v1.js";
                        da.onload = na;
                        da.onerror = ma;
                        da.type = "application/javascript";
                        a.b.ck().parentNode.appendChild(da)
                    }
                } catch (M) {
                    z()
                }
            }
        })(p);
        (function(a) {
            function n(b) {
                a.focus.pageIsPrerendered() || (a.m.a.zaxs("noLongerPreRendered"), a.p.d(document, h, n, "pr"))
            }

            function f(a) {
                "undefined" == typeof d && (d = a)
            }
            a.focus = {};
            var k = !1,
                e = a.d.bg,
                e = -1 < e.indexOf("Safari") && -1 == e.indexOf("Chrome") && -1 == e.indexOf("Chromium") && !a.b.l(),
                l = a.b.t() && !a.b.l(),
                g = "undefined" !== typeof document.hasFocus,
                d, c = {
                    visible: 0,
                    hidden: 1,
                    prerender: 2
                },
                b, h, v, x;
            "undefined" !==
            typeof document.hidden ? (b = "hidden", h = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (b = "mozHidden", h = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (b = "msHidden", h = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (b = "webkitHidden", h = "webkitvisibilitychange");
            for (var A = ["v", "mozV", "msV", "webkitV"], m = 0; m < A.length; m++) {
                var z = A[m] + "isibilityState";
                if ("undefined" !== typeof document[z] && null !== document[z]) {
                    v = z;
                    break
                }
            }
            x = "undefined" !== typeof b;
            var w, p;
            "undefined" !==
            typeof window.requestAnimationFrame ? w = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (w = "webkitRequestAnimationFrame");
            p = e && "string" == typeof w && !x;
            var t = (new q).getTime();
            p && function U() {
                t = (new q).getTime();
                if (!k) window[w](U)
            }();
            a.focus.focusStartTime = !1;
            var C = r.swde.azsx("focusStateChange", function(b) {
                b && (a.focus.focusStartTime = (new q).getTime(), r.swde.sxaz("focusStateChange", {
                    id: C,
                    priority: 1
                }))
            }, {
                priority: 1
            });
            a.focus.getFocusMethod = function() {
                return d
            };
            a.focus.visibilitychange =
                h;
            a.focus.setFocusListeners = function() {};
            a.focus.getQueryString = function(a) {
                a = {};
                a.em = d;
                u && (a.eo = 1);
                "undefined" != typeof v && (a.en = c[document[v]]);
                return a
            };
            a.focus.supportsPageVisAPI = function() {
                return x
            };
            a.focus.checkFocus = function() {
                if (a.d.k()) return !a.n.m();
                if (a.focus.supportsPageVisAPI()) return f(0), !document[b];
                if (p) return f(1), 100 > (new q).getTime() - t;
                if (l && g) return f(2), document.hasFocus();
                f(3);
                return !0
            };
            var y = !1;
            a.focus.pageIsVisible = function() {
                var b = a.focus.checkFocus();
                if (y != b && r && r.swde) try {
                    r.swde.zaxs("focusStateChange",
                        b)
                } catch (c) {}
                return y = b
            };
            a.focus.pageIsPrerendered = function() {
                return "undefined" !== typeof v ? "prerender" == document[v] : !1
            };
            a.focus.pageIsVisible();
            var H = !1;
            a.m.a.azsx("allLocalAdsKilled", function() {
                H && a.p.d(document, h, n, "pr");
                k = !0
            }, {
                once: !0
            });
            a.focus.pageIsPrerendered() && (a.p.c(document, h, n, "pr"), H = !0);
            var u = a.focus.pageIsPrerendered()
        })(p);
        (function(a) {
            a.av = {};
            a.av.a = function() {
                var n = a.aw.a;
                a.aw.b(["iframe[id^='ebBannerIFrame']", "$[id|ebBannerIFrame_([0-9]+_[0-9]+)]/.../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe'][id*='$0']",
                    ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]
                ], "Sizmek backref");
                a.aw.b(["iframe[id^='ebBannerIFrame']", ".../body/#eyeDiv/iframe[id^='ebAd'][id*='panel'][id*='iframe']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand", "setCollapseProxyInLoop"], !1, ".../body/#eyeDiv"], "Sizmek custom");
                a.aw.b(["[id^='envIpolli'][name^='envIpolli']", "[id^='envIpolli'][name^='envIpolli']/$[id|envIpolli(\\d+)]/.../body/iframe[id='expIpolli$0_iframe']", ["runWithoutExpand", "expandUnloads", "noCollapseValidation"]],
                    "Ipolli");
                a.aw.b(["[id^='OriginPlatformAdUnit'][id$='inpage']", "$[id|OriginPlatformAdUnit-(\\d+)-inpage]/...../[id='OriginPlatformAdUnit-$0-overthepage']", ["expandUnloads", "useIsFoundAdKnown", "runWithoutExpand"]], "Origin platform");
                a.aw.b(["#cac_adhere", "..../$[id|cmAdFrame__crisp-(.*)]/...../iframe#cacPanelIframe__crisp-$0", ["useIsFoundAdKnown", "findExpandInLoop", "setExpandProxyInLoop"], !1, !1, "iframe/=>/div[id='panelContainerDiv']"], "cac_adhere");
                a.d.by && a.d.by() && "AdMarvel" == a.d.by() && (a.aw.b(["div#normal",
                    "div#expanded", ["noInitialValidation"]
                ], "Opera MRAID 1"), a.aw.b(["div#normal", "div#resized", ["noInitialValidation"]], "Opera MRAID 2"));
                n.push({
                    name: "pictela",
                    onFindAd: function(f, k, e) {
                        if ((f = a.d.df ? a.ax.a(["div[id^='ptela_unitWrapper']"], f)[0] : a.ax.a(["div[id^='ptelaswfholder']"], f)[0]) && a.b.ca(f)) return f
                    }
                }, {
                    name: "Flashtalking",
                    collapsedRe: /ftdiv\d+/,
                    expandedRe: /ftin\d+/,
                    clipRe: /rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)/,
                    onFindAd: function(f, k, e) {
                        var l = a.aw.c(f, this.collapsedRe);
                        f = a.aw.c(f, this.expandedRe);
                        if (l && f) return a.aw.d[k] = a.aw.e(l, k, e), a.aw.d[k].expandedEl = f, l
                    },
                    onLoop: function(f) {
                        var k = !1,
                            e = f.expandedEl.style.clip,
                            e = e && e.match(this.clipRe);
                        "0" === (e && e[4]) && (k = !0);
                        k && !f.expandedIsOpen ? a.aw.f(f.expandedEl, "div", null, f.adNum) : !k && f.expandedIsOpen && a.aw.g(f, !0)
                    }
                }, {
                    name: "doubleclick sidekick",
                    re: /(DIV)_(\d{6})_1_(\d{13})/,
                    onFindAd: function(f, k, e) {
                        if (f = a.aw.c(f, this.re)) return a.aw.d[k] = a.aw.e(f, k, e), f
                    },
                    findExpanded: function(a) {
                        if (a = a.id.match(this.re))
                            for (var k = [a[3], Number(a[3]) + 1], e = 0; e < k.length; e++) {
                                var l = ["DIV", a[2], "2", k[e]].join("_");
                                if (l = document.getElementById(l)) return l
                            }
                    }
                }, {
                    name: "Pointroll 1",
                    re: /pr(flsh)([A-Z0-9]+)/,
                    onFindAd: function(f, k, e) {
                        if (a.d.df) {
                            var l = window.prBnr;
                            if (l && 1 === l.nodeType && a.b.ca(l)) {
                                var g = f && f.innerHTML && f.innerHTML.match(/pradi([A-Z0-9]+)/);
                                if ((g = g && g[1]) && l.id && l.id.match(g) && (f = f.ownerDocument.getElementById("prf" + g))) return a.aw.d[k] = a.aw.e(l, k, e), a.aw.d[k].uncle = f, l
                            }
                        }
                    },
                    onLoop: function(f) {
                        var k = !1,
                            e = f.uncle;
                        e && e.children && 1 === e.children.length && (e = e.children[0]) && 1 ===
                            e.children.length && (f.expandedEl = e, k = !0);
                        k && !f.expandedIsOpen ? a.aw.f(f.expandedEl, "div", null, f.adNum) : !k && f.expandedIsOpen && a.aw.g(f, !0)
                    }
                }, {
                    name: "Pointroll 2",
                    re: /pradi([A-Z0-9]+)/,
                    onFindAd: function(f, k, e) {
                        var l = f && f.innerHTML && f.innerHTML.match(this.re);
                        if (l) {
                            var g = f.ownerDocument || document;
                            f = g.getElementById("prf" + l[1]);
                            var d;
                            if (f) {
                                var c = f.getElementsByTagName("embed"),
                                    b = f.getElementsByTagName("object"),
                                    h = f.getElementsByTagName("div");
                                c && c[0] && a.b.cb(c[0]) ? d = c[0] : b && b[0] && a.b.cb(b[0]) ? d = b[0] : h &&
                                    0 < h.length && a.b.forEach(h, function(b) {
                                        b && "mal-ad-container" === b.id && a.b.ca(b) && (d = b)
                                    });
                                !d && f.children && 1 === f.children.length && (c = f.children[0]) && 1 === c.children.length && a.b.ca(c.children[0]) && (d = c.children[0])
                            }
                            d || (l = g.getElementById("prw" + l[1])) && a.b.ca(l) && (d = l);
                            if (d) return a.aw.d[k] = a.aw.e(d, k, e), a.aw.d[k].uncle = f, d
                        }
                    },
                    onNewAd: function(f, k) {
                        f && f.uncle && a.l.c(k, f.uncle)
                    }
                }, {
                    name: "Unicast 1",
                    re: /VwP(\d+)Div/,
                    onFindAd: function(f, k, e) {
                        if (f = a.aw.c(f, this.re)) {
                            var l = f.id.match(this.re);
                            if (l && (l = document.getElementById("VwP" +
                                    l[1] + "Div2")) && (l = l.getElementsByTagName("div"), 3 !== l.length && 1 === l.length)) {
                                l = l[0];
                                if (a.b.ca(l)) return l;
                                a.aw.d[k] = a.aw.e(f, k, e);
                                return f
                            }
                        }
                    },
                    findExpanded: function(f) {
                        if ((f = f.id.match(this.re)) && (f = (f = document.getElementById("VwP" + f[1] + "Div2").getElementsByTagName("div")) && f[0]) && a.b.ca(f)) return f
                    }
                });
                n.push({
                    name: "Bleed",
                    onFindAd: function(f, k, e) {
                        if (a.ax.a(["script[src*='jetpackdigital']"], f)[0] && (f = a.d.g.document.getElementById("jpsuperheader")) && a.b.ca(f)) {
                            var l = f.getElementsByTagName("object");
                            if (l && 1 === l.length && l[0].id && l[0].id.match("jp_embed")) return l = l[0], a.aw.d[k] = a.aw.e(f, k, e), a.aw.d[k].expandedEl = l, a.aw.d[k].bgCheck = l && l.parentNode && l.parentNode.parentNode, f
                        }
                    },
                    onLoop: function(f) {
                        var k = !1;
                        f.bgCheck.className && f.bgCheck.className.match("background1") && (k = !0);
                        k && !f.expandedIsOpen ? (a.aw.f(f.expandedEl, null, null, f.adNum), a.l.b(u[f.adNum], stage.bgCheck)) : !k && f.expandedIsOpen && a.aw.g(f, !0)
                    }
                });
                n.push({
                    name: "JPD",
                    isFoundAdKnown: function(f, k, e) {
                        if (f.className && f.className.match("jpplatform")) var l =
                            a.d.g.document.getElementById("jp_overlay"),
                            g = !0;
                        else f.parentNode && f.parentNode.id && "jpd_expfooter" === f.parentNode.id && (l = a.d.g.document.getElementById("jpd_expfooter_overlay"), g = !1);
                        if (l) {
                            var d = a.b.getElementsByClassName("jppanel", "DIV", l);
                            if (d && 0 < d.length) return f = a.aw.e(f, k, e), a.aw.d[k] = f, a.aw.d[k].overlay = l, a.aw.d[k].panels = d, a.aw.d[k].ignoreVideo = g, !0
                        }
                    },
                    onLoop: function(f) {
                        var k, e = !1;
                        if (f.overlay && f.overlay.style && "-9999px" !== f.overlay.style.top) {
                            if (!f.expandedEl || f.expandedEl && f.expandedEl.style &&
                                "-9999px" === f.expandedEl.style.top) f.ignoreVideo ? a.b.forEach(f.panels, function(a) {
                                if (a && a.style && "-9999px" !== a.style.top && 0 === a.getElementsByTagName("video").length) return k = a, !1
                            }) : a.b.forEach(f.panels, function(a) {
                                if (a && a.style && "-9999px" !== a.style.top) return k = a, !1
                            }), k && a.b.ca(k) && (f.expandedEl = k);
                            f.expandedEl && (e = !0)
                        }
                        e && !f.expandedIsOpen ? a.aw.f(f.expandedEl, "div", null, f.adNum) : !e && f.expandedIsOpen && a.aw.g(f, !0)
                    }
                });
                n.push({
                    name: "Adform TwoElement",
                    isFoundAdKnown: function(f, k, e) {
                        var l = u[k];
                        if (l.adformCollapsedEl &&
                            l.adformExpandedEl) return f = a.aw.e(f, k, e), a.aw.d[k] = f, a.aw.d[k].expandedEl = l.adformExpandedEl, a.aw.d[k].hiddenClassRx = /(^| )adform-adbox-hidden($| )/, !0
                    },
                    onLoop: function(f) {
                        var k = !1;
                        f.hiddenClassRx.test(f.collapsedEl.className) && (k = !0);
                        k && !f.expandedIsOpen ? a.aw.f(f.expandedEl, null, null, f.adNum) : !k && f.expandedIsOpen && a.aw.g(f, !0)
                    }
                });
                n.push({
                    name: "Sizmek Leavebehind",
                    findCollapsedAd: function(f) {
                        if (!f) return !1;
                        if (f = f.getElementById("eyeDiv")) {
                            var k, e = /ebAd\d+_contractedpanel_asset_.*/i;
                            if ((f = f.getElementsByTagName("object")) &&
                                0 < f.length && (a.b.forEach(f, function(a) {
                                    if (a && a.id.match(e)) return k = a, !1
                                }), k)) return k
                        }
                        return !1
                    },
                    findExpandedAd: function(f) {
                        if (!f) return !1;
                        if (f = f.getElementById("eyeDiv")) {
                            var k, e = /ebAd\d+_expandedpanel\d*_asset_.*/i;
                            if ((f = f.getElementsByTagName("object")) && 0 < f.length && (a.b.forEach(f, function(a) {
                                    if (a && a.id.match(e)) return k = a, !1
                                }), k)) return k
                        }
                        return !1
                    },
                    isAdExpanded: function(a) {
                        return this.findExpandedAd(a) ? !0 : !1
                    },
                    onFindAd: function(f, k, e) {
                        if (!f || !a.ax.a(["div#mmBillboardShim"], f)[0]) return !1;
                        var l =
                            a.d.g && a.d.g.document;
                        f = this.findCollapsedAd(l);
                        l = this.findExpandedAd(l);
                        if (f || l) {
                            if (f && !f[F]) return e = a.aw.e(f, k, e), a.aw.d[k] = e, f;
                            if (l && a.b.ca(l)) return e = a.aw.e(l, k, e), a.aw.d[k] = e, l
                        }
                    },
                    afterAdStateCreated: function(f) {
                        f.pageDocument = a.d.g.document;
                        f.collapseUnloads = !0
                    },
                    onLoop: function(f) {
                        var k = this.isAdExpanded(f.pageDocument);
                        !1 === f.expandedIsOpen && k ? (f.expandedEl = this.findExpandedAd(f.pageDocument), a.aw.f(f.expandedEl, null, null, f.adNum)) : f.expandedIsOpen && 0 == k && (f.collapsedEl = this.findCollapsedAd(f.pageDocument),
                            a.aw.h(f.collapsedEl, null, null, f.adNum))
                    }
                });
                n.push({
                    name: "Sizmek Pushdown",
                    findExpandedAd: function(f) {
                        if (!f) return !1;
                        if (f = f.getElementById("eyeDiv")) {
                            var k, e = /ebad\d+_panel\d*_asset_.*/i;
                            if ((f = f.getElementsByTagName("object")) && 0 < f.length && (a.b.forEach(f, function(a) {
                                    if (a && a.id.match(e)) return k = a, !1
                                }), k)) return k
                        }
                        return !1
                    },
                    isAdExpanded: function(a) {
                        return this.findExpandedAd(a) ? !0 : !1
                    },
                    isFoundAdKnown: function(f) {
                        if (!f) return !1;
                        if (f.id && f.id.match("ebRichBannerFlash")) {
                            f = B && B.parentNode && B.parentNode.getElementsByTagName("script");
                            var k = !1;
                            a.b.forEach(f, function(a) {
                                if (a && a.src && a.src.match("ebExpBanner")) return k = !0, !1
                            });
                            if (k) return !0
                        }
                    },
                    afterAdStateCreated: function(f) {
                        f.pageDocument = a.d.g.document
                    },
                    onLoop: function(f) {
                        var k = this.isAdExpanded(f.pageDocument);
                        !1 === f.expandedIsOpen && k ? (f.expandedEl = this.findExpandedAd(f.pageDocument), a.aw.f(f.expandedEl, null, null, f.adNum)) : f.expandedIsOpen && 0 == k && a.aw.g(f, !0)
                    }
                });
                n.push({
                    name: "Celtra Banner/Video",
                    findExpandedAd: function(f) {
                        if (f.expandedEl) return f.expandedEl;
                        var k, e, l;
                        if ("banner" ===
                            f.expandType) {
                            e = a.ay.a(f.pageDoc.body, a.ay.b);
                            for (var g = e.length - 1; 0 <= g; g--)
                                if ((l = e[g].contentWindow) && l.runtimeParams && l.runtimeParams.placementId && l.runtimeParams.clientTimestamp && l.runtimeParams.placementId === f.celtraId && l.runtimeParams.clientTimestamp === f.celtraTimestamp && (k = l.document && l.document.getElementById("celtra-modal")) && a.b.ca(k)) return f.parentFrame || (f.parentFrame = a.k.g(k)), f.expandedEl = k
                        } else if ("video" === f.expandType) {
                            e = f.pageDoc.getElementsByTagName("video");
                            if (f.adWin && f.adWin.videoContext &&
                                f.adWin.videoContext.url) {
                                var d = f.adWin.videoContext.url;
                                a.b.forEach(e, function(a) {
                                    if (a && a.src === d) return k = a, !1
                                })
                            } else a.b.forEach(e, function(a) {
                                if (a && a.src && a.src.match && a.src.match("celtra")) return k = a, !1
                            });
                            if (k && a.b.ca(k)) return f.expandedEl = k
                        }
                        return !1
                    },
                    isAdExpanded: function(f) {
                        var k = this.findExpandedAd(f);
                        return k ? (f = f.parentFrame || a.k.g(k)) && f.style && "none" === f.style.display ? !1 : !0 : !1
                    },
                    isFoundAdKnown: function(f, k, e) {
                        if (!f) return !1;
                        if (f.id && f.id.match("celtra") || f.className && f.className.match("celtra")) {
                            var l =
                                f.ownerDocument && (f.ownerDocument.defaultView || f.ownerDocument.parentWindow);
                            if (l && l.ExpandableBanner && l.runtimeParams && l.runtimeParams.placementId && l.runtimeParams.clientTimestamp) return f = a.aw.e(f, k, e), a.aw.d[k] = f, a.aw.d[k].expandType = "banner", a.aw.d[k].pageDoc = a.d.g.document, a.aw.d[k].celtraId = l.runtimeParams.placementId, a.aw.d[k].celtraTimestamp = l.runtimeParams.clientTimestamp, !0;
                            if (l && l.VideoContext) return f = a.aw.e(f, k, e), a.aw.d[k] = f, a.aw.d[k].expandType = "video", a.aw.d[k].pageDoc = a.d.g.document,
                                a.aw.d[k].adWin = l, !0
                        }
                    },
                    onLoop: function(f) {
                        var k = this.isAdExpanded(f);
                        k && !f.expandedIsOpen ? a.aw.f(f.expandedEl, "div", null, f.adNum) : !k && f.expandedIsOpen && a.aw.g(f, !0)
                    }
                })
            }
        })(p);
        (function(a) {
            function n(a, b, d) {
                this.collapsedEl = a;
                this.expandedEl = null;
                this.expandedIsOpen = !1;
                this.adNum = b;
                this.configIndex = d
            }

            function f(c, b) {
                var d = a.aw.d[b];
                if (!0 !== d.findingExpanded) {
                    d.findingExpanded = !0;
                    var g = function() {
                            d.findingExpanded = !1
                        },
                        e = u[b].aa;
                    a.p.k(function() {
                        var d = c.findExpanded(e);
                        if (d) return a.ay.c(d, b, k, !1, g),
                            !0
                    }, 5, 500, g)
                }
            }

            function k(c, b, d, g) {
                c[I] = g;
                c[F] = !0;
                b = u[g];
                g = a.aw.d[g];
                g.expandedIsOpen = !0;
                a.b.cc(c, b);
                g.findingExpanded = !1;
                return !0
            }

            function e(c, b) {
                a.b.cc(c.collapsedEl, u[c.adNum], !0);
                c.expandedIsOpen = !1;
                b || (c.expandedEl && (c.expandedEl[I] = void 0, c.expandedEl[F] = void 0), c.expandedEl = null)
            }

            function l(c, b, d, g) {
                if (!c) return !1;
                c[I] = g;
                c[F] = !0;
                a.aw.d[g].expandedIsOpen = !1;
                a.b.cc(c, u[g]);
                return !0
            }
            a.aw = {};
            a.aw.i = "bac";
            var g = [];
            a.aw.a = g;
            a.aw.d = {};
            a.aw.e = function(a, b, d) {
                return new n(a, b, d)
            };
            a.aw.j = function(c) {
                var b =
                    a.aw.d[c.zr];
                b && (b.collapsedEl = null, b.expandedEl = null, delete a.aw.d[c.zr])
            };
            a.aw.k = function(c) {
                return (c = a.aw.d[c]) && !0 === c.expandedIsOpen
            };
            a.aw.l = function(c) {
                return (c = a.aw.d[c]) && !0 === c.collapseUnloads
            };
            a.aw.m = function(c, b) {
                c = c.replace(/^on/, "");
                var d = a.aw.d[b],
                    k = u[b];
                if (d) {
                    var n = g[d.configIndex];
                    if ("mousedown" === c && n.findExpanded && !d.expandedIsOpen) f(n, b);
                    else if ("mouseover" === c && n.onMouseOver && !d.expandedIsOpen) n.onMouseOver(d);
                    else if ("loop" === c && n.onLoop) n.onLoop(d);
                    else if ("departed" === c && d.expandedIsOpen) e(d);
                    else if ("collapseUnloads" === c && d.expandedIsOpen) l(d.collapsedEl, null, null, b);
                    else if ("newad" === c && n.onNewAd) n.onNewAd(d, k)
                }
            };
            a.aw.n = function(c, b) {
                for (var d = 0; d < g.length; d++) {
                    var e = g[d],
                        f = e.onFindAd && e.onFindAd(c, b, d);
                    if (f) return a.m.a.azsx("adKilled", a.o.f, {
                        once: !0,
                        condition: function(a) {
                            return a.zr == b
                        }
                    }), a.aw.d[b] && e.afterAdStateCreated && e.afterAdStateCreated(a.aw.d[b]), T = e.name, f
                }
            };
            a.aw.o = function(c) {
                if (c !== a.aw.i && c.aa && c.ao && !a.aw.d[d])
                    for (var b = c.aa, d = c.ao.adNum, e = 0; e < g.length; e++) {
                        var f = g[e];
                        if (f && f.isFoundAdKnown && f.isFoundAdKnown(b, d, e)) {
                            a.m.a.azsx("adKilled", a.o.f, {
                                once: !0,
                                condition: function(a) {
                                    return a.zr == c.zr
                                }
                            });
                            a.aw.d[d] || (b = new n(b, d, e), a.aw.d[d] = b);
                            f.afterAdStateCreated && f.afterAdStateCreated(a.aw.d[d]);
                            T = f.name;
                            break
                        }
                    }
            };
            a.aw.p = function(a) {
                return "IMG" === a.tagName && a.id && a.id.match(/^pradi[0-9A-Z]+$/) && a.onload && "function" === typeof a.onload.toString && a.onload.toString().match(/shockwave/)
            };
            a.aw.q = function(c, b) {
                a.aw.k(b.zr) && (a.aw.l(b.zr) ? a.aw.m("collapseUnloads", b.zr) : a.aw.m("departed",
                    b.zr), c.shouldKillAd = !1)
            };
            var d = a.m.a.azsx("beforeAdKilled", a.aw.q, {
                priority: 5
            });
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("beforeAdKilled", {
                    id: d
                })
            }, {
                once: !0
            });
            a.aw.b = function(c, b) {
                var d = [c[0]],
                    f = [c[1]],
                    x = c[2],
                    p = c[3] && [c[3]],
                    m = c[4] && [c[4]],
                    z = c[5] && [c[5]],
                    w = c[6],
                    t = c[7],
                    r = !1,
                    C = !1,
                    y = !1,
                    q = !1,
                    La = !1,
                    D = !1,
                    U = !1,
                    G, Q = G = !1,
                    W = !1,
                    R = !1,
                    V = !1,
                    O = !1,
                    P = !1;
                x && (a.b.be(x, "checkHiddenStyles") && (r = !0), a.b.be(x, "noInitialValidation") && (C = !0), a.b.be(x, "noLoopValidation") && (y = !0), a.b.be(x, "noCollapseValidation") &&
                    (q = !0), a.b.be(x, "runWithoutExpand") && (La = !0), a.b.be(x, "collapseUnloads") && (D = !0), a.b.be(x, "expandUnloads") && (U = !0), a.b.be(x, "useIsFoundAdKnown") && (G = !0), a.b.be(x, "setCollapseProxyInLoop") && (Q = !0), a.b.be(x, "setExpandProxyInLoop") && (W = !0), a.b.be(x, "findExpandInLoop") && (La = R = !0), a.b.be(x, "addExpandTag") && (V = !0), a.b.be(x, "setIframeAssetType") && (O = !0), a.b.be(x, "preferCollapse") && (P = !0));
                g.push({
                    name: b,
                    isFoundAdKnown: function(b, c, g) {
                        if (!G || !b) return !1;
                        if (w && t) {
                            if ((b = (b = u[c].ao) && b[w]) && !a.b.be(t, b)) return !1
                        } else if (a.ax.a(d,
                                b)[0]) {
                            if (La) return a.aw.d[c] = new n(b, c, g), a.aw.d[c].collapsedQuery = d, a.aw.d[c].expandedQuery = f, a.aw.d[c].searchableEl = b, a.aw.d[c].checkHiddenStyles = r, a.aw.d[c].collapseUnloads = D, a.aw.d[c].noLoopValidation = y, a.aw.d[c].expandUnloads = U, a.aw.d[c].expandedSelector = p, a.aw.d[c].collapseProxyEl = m, a.aw.d[c].expandProxyEl = z, a.aw.d[c].collapseUnloads = D, a.aw.d[c].setCollapseProxyInLoop = Q, a.aw.d[c].setExpandProxyInLoop = W, a.aw.d[c].findExpandInLoop = R, a.aw.d[c].addExpandTag = V, a.aw.d[c].setIframeAssetType = O, a.aw.d[c].preferCollapse =
                                P, m && a.ax.b(m, u[c], b), !0;
                            var e = a.ax.a(f, b)[0];
                            if (e && (C || a.b.cb(e))) return a.aw.d[c] = new n(b, c, g), a.aw.d[c].collapsedQuery = d, a.aw.d[c].expandedQuery = f, a.aw.d[c].searchableEl = b, a.aw.d[c].checkHiddenStyles = r, a.aw.d[c].collapseUnloads = D, a.aw.d[c].noLoopValidation = y, a.aw.d[c].expandUnloads = U, a.aw.d[c].expandedSelector = p, a.aw.d[c].expandedEl = e, a.aw.d[c].collapseProxyEl = m, a.aw.d[c].expandProxyEl = z, a.aw.d[c].collapseUnloads = D, a.aw.d[c].setCollapseProxyInLoop = Q, a.aw.d[c].setExpandProxyInLoop = W, a.aw.d[c].findExpandInLoop =
                                R, a.aw.d[c].addExpandTag = V, a.aw.d[c].setIframeAssetType = O, a.aw.d[c].preferCollapse = P, m && a.ax.b(m, u[c], b), z && a.ax.b(z, u[c], e), !0
                        }
                    },
                    onFindAd: function(b, c, g) {
                        if (G) return !1;
                        var e = a.ax.a(d, b)[0];
                        if (e && q && !e[F] || a.b.ca(e)) {
                            if (La) return a.aw.d[c] = new n(e, c, g), a.aw.d[c].collapsedQuery = d, a.aw.d[c].expandedQuery = f, a.aw.d[c].searchableEl = b, a.aw.d[c].checkHiddenStyles = r, a.aw.d[c].collapseUnloads = D, a.aw.d[c].noLoopValidation = y, a.aw.d[c].expandUnloads = U, a.aw.d[c].expandedSelector = p, a.aw.d[c].collapseProxyEl = m,
                                a.aw.d[c].expandProxyEl = z, a.aw.d[c].collapseUnloads = D, a.aw.d[c].setCollapseProxyInLoop = Q, a.aw.d[c].setExpandProxyInLoop = W, a.aw.d[c].findExpandInLoop = R, a.aw.d[c].addExpandTag = V, a.aw.d[c].setIframeAssetType = O, a.aw.d[c].preferCollapse = P, e;
                            var k = a.ax.a(f, b)[0];
                            if (k && (C || a.b.cb(k))) return a.aw.d[c] = new n(e, c, g), a.aw.d[c].collapsedQuery = d, a.aw.d[c].expandedQuery = f, a.aw.d[c].searchableEl = b, a.aw.d[c].checkHiddenStyles = r, a.aw.d[c].collapseUnloads = D, a.aw.d[c].noLoopValidation = y, a.aw.d[c].expandUnloads = U, a.aw.d[c].expandedSelector =
                                p, a.aw.d[c].expandedEl = k, a.aw.d[c].collapseProxyEl = m, a.aw.d[c].expandProxyEl = z, a.aw.d[c].collapseUnloads = D, a.aw.d[c].setCollapseProxyInLoop = Q, a.aw.d[c].setExpandProxyInLoop = W, a.aw.d[c].findExpandInLoop = R, a.aw.d[c].addExpandTag = V, a.aw.d[c].setIframeAssetType = O, a.aw.d[c].preferCollapse = P, e
                        }
                    },
                    onNewAd: function(b, c) {
                        b.collapseProxyEl && !b.useIsFoundAdKnown && a.ax.b(b.collapseProxyEl, c, c.aa)
                    },
                    onLoop: function(b) {
                        if (b.stopLoop) return !1;
                        var c = !1;
                        b.setIframeAssetType && (u[b.adNum].hasIframeListener = !0, b.setIframeAssetType = !1);
                        if (b.expandUnloads) {
                            var d = a.ax.a(b.expandedQuery, b.searchableEl)[0];
                            b.expandedEl = d
                        }
                        b.findExpandInLoop && !b.expandedEl && (d = a.ax.a(b.expandedQuery, b.searchableEl)[0], b.expandedEl = d);
                        if (b.expandedEl && (b.noLoopValidation || a.b.cb(b.expandedEl)))
                            if (b.checkHiddenStyles && (b.expandedEl.style && "hidden" === b.expandedEl.style.visibility || "none" === b.expandedEl.style.display) || "0" === a.b.bk(b.expandedEl, "opacity")) c = !1;
                            else if (b.expandedSelector && !a.ax.a(b.expandedSelector, b.expandedEl)[0]) c = !1;
                        else if (c = !0, b.setCollapseProxyInLoop &&
                            b.collapseProxyEl && !b.collapseProxySet && (b.collapseProxySet = a.ax.b(b.collapseProxyEl, u[b.adNum], b.collapsedEl)), b.setExpandProxyInLoop && b.expandProxyEl && !b.expandProxySet && (b.expandProxySet = a.ax.b(b.expandProxyEl, u[b.adNum], b.expandedEl)), b.addExpandTag && b.expandedEl.parentNode && (d = B && B.src && B.src.replace(/moatClientLevel4=[^&]*&/, "moatClientLevel4=Expanded&"))) return a.b.cw(d, b.expandedEl.parentNode), b.addExpandTag = !1, b.stopLoop = !0, !1;
                        b.preferCollapse && a.b.cb(b.collapsedEl) && (c = !1);
                        c && !b.expandedIsOpen ?
                            k(b.expandedEl, "div", null, b.adNum) : !c && b.expandedIsOpen && (b.collapseUnloads ? (c = a.ax.a(b.collapsedQuery, b.searchableEl)[0], l(c, null, null, b.adNum)) : e(b, !0))
                    }
                })
            };
            a.aw.f = k;
            a.aw.g = e;
            a.aw.h = l;
            a.aw.c = function(c, b, d) {
                d = d || {};
                var g = c.getElementsByTagName("div");
                d.inclSearchableEl && (g = a.b.co(g), g.push(c));
                for (c = 0; c < g.length; c++) {
                    var e = g[c];
                    if (e.id.match(b) && (d.anySize || a.b.ca(e))) return e
                }
            };
            a.av.a()
        })(p);
        (function(a) {
            function n(b, c, d, h, g) {
                ("remove" === g ? a.p.d : a.p.c)(b, c, function(c) {
                    c = c || this.event;
                    var h = c.currentTarget ||
                        b;
                    try {
                        var g = h[I]
                    } catch (e) {
                        g = h[I]
                    }
                    if (g = u[g]) {
                        var f;
                        f = c;
                        var k = h.getBoundingClientRect();
                        f = -1 != f.type.indexOf("touch") && f.changedTouches && 0 < f.changedTouches.length ? {
                            x: parseInt(f.changedTouches[0].clientX - k.left, 10),
                            y: parseInt(f.changedTouches[0].clientY - k.top, 10)
                        } : {
                            x: parseInt(f.clientX - k.left, 10),
                            y: parseInt(f.clientY - k.top, 10)
                        };
                        g.aj = f.x;
                        g.ak = f.y;
                        g.dm || (g.cb = 2 == a.focus.getFocusMethod() ? g.counters.laxDwell.tCur : g.counters.strictDwell.tCur, g.dm = 1);
                        d.call(b, c, h, g)
                    }
                }, "genmouse")
            }

            function f(c, d, g) {
                n(c, "click",
                    v, d, g);
                n(c, "mousedown", e, d, g);
                sa ? a.d.eb && n(c, "touchstart", l, d, g) : (n(c, "mousemove", k, d, g), n(c, "mouseover", b, d, g), n(c, "mouseout", h, d, g))
            }

            function k(b, c, d) {
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                if (1 != d.ao.skin || !a.ab.d(c, d.adContent, b)) {
                    if (!sa && (d.aj !== d.al || d.ak !== d.am)) {
                        a.ah.d(b, d);
                        a.ah.f(b, d);
                        a.ah.g(b, d);
                        a.ah.i(b, d);
                        a.ah.h(b, d);
                        a.ah.b(d);
                        a.ah.c(d);
                        a.ah.e(d);
                        0 === d.ar.length && (d.ai = p(d));
                        if (100 > d.ar.length || 100 > d.as.length || 100 > d.at.length) d.ar.push(d.aj), d.as.push(d.ak),
                            d.at.push(a.b.bi(d));
                        d.al = d.aj;
                        d.am = d.ak
                    }
                    d.ai !== p(d) && 1 < d.ar.length && x(d, "onMouseMove")
                }
            }

            function e(b, c, d) {
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                1 == d.ao.skin && a.ab.d(c, d.adContent, b) || (c = {
                    e: 2
                }, c.q = d.aq[2]++, c.x = d.aj, c.y = d.ak, a.v.a(d, c), a.aw.m(b.type, d.zr))
            }

            function l(b, c, d) {
                a.m.a.zaxs("mouseEvent", d);
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                if (1 != d.ao.skin || !a.ab.d(c, d.adContent, b)) {
                    b = {
                        e: 23
                    };
                    b.q = d.aq[23]++;
                    b.x = d.aj;
                    b.y = d.ak;
                    c = (new q).getTime();
                    if ("undefined" === typeof d.ct) d.ct = c;
                    else {
                        var h = c - d.ct;
                        d.ct = c;
                        d.cu = t.min(d.cu, h) || h
                    }
                    b.bz = void 0;
                    a.v.a(d, b)
                }
            }

            function g(b, h, g) {
                var e;
                if (2 == b.an || b.hasIframeListener) e = !0;
                if (e) {
                    e = h.e;
                    var f = b.ck;
                    f == a.ah.a.f.a && 6 === e ? (d(b, 0), b.cl = a.b.bi(b), b.ck = a.ah.a.f.b) : f == a.ah.a.f.b ? 22 === e ? (c(b, h), d(b, g), b.cl = a.b.bi(b)) : 7 === e && (1E3 < a.b.bi(b) - b.cl ? (clearTimeout(b.cm), h.e = 22, c(b, h), b.cn = 0, b.ck = a.ah.a.f.a) : b.ck = a.ah.a.f.c) : f == a.ah.a.f.c && (6 == e ? (1E3 < a.b.bi(b) - b.cl && (clearTimeout(b.cm), b.cn = 0, b.cl = a.b.bi(b), d(b, 0)), b.ck =
                        a.ah.a.f.b) : 22 == e && (c(b, h), b.ck = a.ah.a.f.a, b.cn = 0))
                }
            }

            function d(b, c) {
                if (a.focus.checkFocus()) {
                    var d = 5 > b.cn ? 1E3 : 2 * c,
                        h = {
                            e: 22
                        };
                    b.cm = a.p.f(function() {
                        g(b, h, d)
                    }, d)
                } else g(b, {
                    e: 7
                }, 0)
            }

            function c(b, c) {
                c.q = b.aq[c.e]++;
                c.m = a.b.bi(b);
                b.cl = c.m;
                a.v.a(b, c);
                b.cn++
            }

            function b(b, c, d) {
                a.m.a.zaxs("mouseEvent", d);
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                1 == d.ao.skin && a.ab.d(c, d.adContent, b) || (a.ah.d(b, d), a.ah.f(b, d), a.ah.g(b, d), a.ah.i(b, d), a.ah.h(b, d), g(d, {
                    e: 6
                }, 0), a.aw.m(b.type, d.zr))
            }

            function h(b, c, d) {
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                1 == d.ao.skin && a.ab.d(c, d.adContent, b) || (a.ah.d(b, d), a.ah.f(b, d), a.ah.g(b, d), a.ah.i(b, d), a.ah.h(b, d), g(d, {
                    e: 7
                }, 0))
            }

            function v(b, c, d) {
                a.m.a.zaxs("mouseEvent", d);
                a.m.a.zaxs("mouseEventOnAd", d);
                b = b || window.event;
                c = b.target || b.srcElement;
                1 == d.ao.skin && a.ab.d(c, d.adContent, b) || (b = {
                    e: 3
                }, b.q = d.aq[3]++, b.x = d.aj, b.y = d.ak, a.v.a(d, b))
            }

            function x(b, c) {
                b.ai = p(b);
                var d = {
                    e: 1
                };
                d.q = b.aq[1]++;
                d.x = b.ar.join("a");
                d.y = b.as.join("a");
                for (var h = a.b.bi(b), g = b.at, e = [], f = 0; f < g.length; f++) isNaN(g[f]) || e.push(t.abs(g[f] - h));
                d.c = e.join("a");
                d.m = h;
                a.v.a(b, d);
                b.ar = [];
                b.as = [];
                b.at = []
            }

            function p(b) {
                return t.floor(a.b.bi(b) / 1E3)
            }
            a.l = {};
            a.l.d = function(b) {
                if (a.d.ea) {
                    a.m.a.azsx("adKilled", a.l.e, {
                        once: !0,
                        condition: function(a) {
                            return b.zr == a.zr
                        }
                    });
                    b.mouseEventElements || (b.mouseEventElements = []);
                    var c = b.aa;
                    a.l.b(b, c);
                    b.mouseEventElements.push(c)
                }
            };
            a.l.b = function(a, b) {
                if (a) {
                    var c = b || a.aa;
                    c && f(c, a.zr)
                }
            };
            a.l.a = function(a, b) {
                if (a) {
                    var c = b || a.aa;
                    c &&
                        f(c, a.zr, "remove")
                }
            };
            a.l.f = function(b) {
                for (var c in u) u.hasOwnProperty(c) && (b = u[c]) && (a.ah.g({
                    type: "scooper"
                }, b), a.ah.i({
                    type: "scooper"
                }, b), a.ah.h({
                    type: "scooper"
                }, b), 1 < b.ar.length && b.ai !== p(b) && x(b, "scooper"))
            };
            a.l.c = function(b, c) {
                if (!c || !b || "number" === typeof c[I]) return !1;
                !b.hasIframeListener && c.tagName && "iframe" === c.tagName.toLowerCase() && (b.hasIframeListener = !0);
                !b.hasNonIframeListener && c.tagName && "iframe" !== c.tagName.toLowerCase() && (b.hasNonIframeListener = !0, b.an = a.e.i(c));
                c[I] = b.zr;
                a.l.b(b,
                    c);
                b.mouseEventElements || (b.mouseEventElements = []);
                b.mouseEventElements.push(c);
                return b.proxyTrackingEnabled = !0
            };
            a.l.e = function(b) {
                a.b.forEach(b.mouseEventElements, function(c) {
                    try {
                        a.l.a(b, c), c[I] = null
                    } catch (d) {}
                })
            }
        })(p);
        (function(a) {
            a.az = {};
            a.az.a = function(a, f) {
                var k;
                f.outerHTML ? k = f.outerHTML : (k = document.createElement("div"), k.appendChild(f.cloneNode(!0)), k = k.innerHTML);
                k = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(k), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(k), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(k),
                    a
                ];
                for (var e, l, g = {}, d = 0; d < k.length; d++) {
                    if ((e = k[d]) && "object" === typeof e && e[1]) e = e[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g, "");
                    else if ("string" === typeof e) e = e.split("?")[1];
                    else continue;
                    if (e) {
                        e = e.split("&");
                        for (var c = 0; c < e.length; c++) l = e[c].split("="), 2 > l.length || "function" == l[0].slice(0, 8) || (g[l[0]] = [l[1]])
                    }
                }
                return g
            }
        })(p);
        (function(a) {
            function n(a) {
                return a = t.min(3E5, a)
            }

            function f(b, c, d, g) {
                h.hasOwnProperty(b) ? h[b][c] &&
                    a.b.f(h[b][c]) ? h[b][c].push(d) : h[b][c] = [d] : (h[b] = {}, h[b][c] = [d])
            }

            function k(b, c) {
                return b ? function(d) {
                    if (c) {
                        var h = {};
                        h[a.f.q.a] = !0;
                        a.f.ac(b, h, d.zr)
                    } else a.f.z(b)
                } : function() {}
            }

            function e(a) {
                return 500 <= (2 === a.an ? a.be : a.bd)
            }

            function l(b, c) {
                try {
                    return a.ba.g(b) >= c
                } catch (d) {
                    return !1
                }
            }

            function g(a, b) {
                try {
                    return a.counters.laxDwell.tCur >= b
                } catch (c) {
                    return !1
                }
            }

            function d(a, c) {
                return e(a) ? b(a) >= c : !1
            }

            function c(b, c) {
                try {
                    var d;
                    if (a.d.e && b.activetime) {
                        var h = a.o.b(b.zr),
                            g = a.bb.a(b.activetime.counters, h);
                        d = g &&
                            g.get("activeInviewTime")
                    } else d = !1;
                    return d >= c
                } catch (e) {
                    return !1
                }
            }

            function b(a) {
                return "undefined" !== typeof a.bk && e(a) ? n(a.bk) : 0
            }
            a.ba = {};
            var h = {},
                v = function(a) {
                    return !!a.el && a.dn
                },
                x = function(a) {
                    return !!a.el && !a.dn
                };
            (function() {
                var b = 0;
                return function() {
                    var c = a.d.g,
                        d = c.document,
                        h = d.body,
                        c = (h.scrollTop || d.documentElement.scrollTop || c.pageYOffset || 0) / h.offsetHeight;
                    c > b && (b = c);
                    return b
                }
            })();
            var p = {
                load: function(a) {
                    return a && a.video && !a.video.started ? !1 : !0
                },
                adimpression: function(a) {
                    return !1
                },
                measurable: function(b) {
                    return b &&
                        b.video && !b.video.started ? !1 : a.d.dw(b)
                },
                omsdkmeasurable: function(b) {
                    b = a.e.j();
                    return !a.d.dc() || a.e.c() || "2" != b && "4" != b ? !1 : !0
                },
                "full-measurable": function(b) {
                    return b && b.video && !b.video.started ? !1 : a.d.dy(b)
                },
                "full-inViewX": function(b, c) {
                    return a.o.s(b, c)
                },
                "full-inView": function(b) {
                    return a.o.s(b, 1)
                },
                "full-inView2": function(b) {
                    return a.o.s(b, 2E3)
                },
                nhtReady: function(b) {
                    return b && b.video && !b.video.started ? !1 : a && a.f && a.f.x
                },
                brandSafeReady: function(a) {
                    return a && a.video && !a.video.started ? !1 : r && r.jsonp && r.jsonp.BrandSafetyNados
                },
                customInView: function(a) {
                    return "Feature Not Enabled"
                },
                inViewX: function(b, c) {
                    return a.o.k(b, c)
                },
                inView100: function(b) {
                    return a.o.k(b, 1E5)
                },
                inView60: function(b) {
                    return a.o.k(b, 6E4)
                },
                inView45: function(b) {
                    return a.o.k(b, 45E3)
                },
                inView40: function(b) {
                    return a.o.k(b, 4E4)
                },
                inView35: function(b) {
                    return a.o.k(b, 35E3)
                },
                inView30: function(b) {
                    return a.o.k(b, 3E4)
                },
                inView25: function(b) {
                    return a.o.k(b, 25E3)
                },
                inView20: function(b) {
                    return a.o.k(b, 2E4)
                },
                inView15: function(b) {
                    return a.o.k(b, 15E3)
                },
                inView10: function(b) {
                    return a.o.k(b,
                        1E4)
                },
                inView9: function(b) {
                    return a.o.k(b, 9E3)
                },
                inView8: function(b) {
                    return a.o.k(b, 8E3)
                },
                inView7: function(b) {
                    return a.o.k(b, 7E3)
                },
                inView6: function(b) {
                    return a.o.k(b, 6E3)
                },
                inView5: function(b) {
                    return a.o.k(b, 5E3)
                },
                inView4: function(b) {
                    return a.o.k(b, 4E3)
                },
                inView3: function(b) {
                    return a.o.k(b, 3E3)
                },
                inView2: function(b) {
                    return a.o.k(b, 2E3)
                },
                inView1: function(b) {
                    return a.o.k(b, 1E3)
                },
                inView05: function(b) {
                    return a.o.k(b, 500)
                },
                anyPercentVisible: function(b) {
                    return (b = b && a.o.a(b.zr)) && b.wasPartiallyInview()
                },
                activeInViewTimeX: function(a,
                    b) {
                    return c(a, b)
                },
                activeInViewTime05: function(a) {
                    return c(a, 500)
                },
                activeInViewTime1: function(a) {
                    return c(a, 1E3)
                },
                activeInViewTime2: function(a) {
                    return c(a, 2E3)
                },
                activeInViewTime3: function(a) {
                    return c(a, 3E3)
                },
                activeInViewTime4: function(a) {
                    return c(a, 4E3)
                },
                activeInViewTime5: function(a) {
                    return c(a, 5E3)
                },
                activeInViewTime6: function(a) {
                    return c(a, 6E3)
                },
                activeInViewTime7: function(a) {
                    return c(a, 7E3)
                },
                activeInViewTime8: function(a) {
                    return c(a, 8E3)
                },
                activeInViewTime10: function(a) {
                    return c(a, 1E4)
                },
                activeInViewTime15: function(a) {
                    return c(a,
                        15E3)
                },
                activeInViewTime20: function(a) {
                    return c(a, 2E4)
                },
                activeInViewTime25: function(a) {
                    return c(a, 25E3)
                },
                activeInViewTime30: function(a) {
                    return c(a, 3E4)
                },
                activeInViewTime60: function(a) {
                    return c(a, 6E4)
                },
                activeInViewTime90: function(a) {
                    return c(a, 9E4)
                },
                activeInViewTime120: function(a) {
                    return c(a, 12E4)
                },
                activeInViewTime180: function(a) {
                    return c(a, 18E4)
                },
                activeInViewTime240: function(a) {
                    return c(a, 24E4)
                },
                activeInViewTime300: function(a) {
                    return c(a, 3E5)
                },
                fullInView05: function(b) {
                    return a.o.s(b, 500)
                },
                fullInView1: function(b) {
                    return a.o.s(b,
                        1E3)
                },
                fullInView2: function(b) {
                    return a.o.s(b, 2E3)
                },
                fullInView3: function(b) {
                    return a.o.s(b, 3E3)
                },
                fullInView15: function(b) {
                    return a.o.s(b, 15E3)
                },
                full_inview_05: function(b) {
                    return 600 <= b.INITIAL_HEIGHT && a.o.s(b, 500)
                },
                full_inview_1: function(b) {
                    return 600 <= b.INITIAL_HEIGHT && a.o.s(b, 1E3)
                },
                full_inview_5: function(b) {
                    return 600 <= b.INITIAL_HEIGHT && a.o.s(b, 5E3)
                },
                full_inview_10: function(b) {
                    return 600 <= b.INITIAL_HEIGHT && a.o.s(b, 1E4)
                },
                passthrough: function(b) {
                    return a.ac.d(b.zr)
                },
                groupmV3: function(a) {
                    return a.groupmV3.checkMilestoneReached()
                },
                fullViewInteraction: function(a) {
                    return this.interactionX(a, 1E3) && this.full_inview_1(a)
                },
                inner_height_X: function(b, c) {
                    return a.d.ac >= c
                },
                inner_height_1000: function(b) {
                    return 1E3 <= a.d.ac
                },
                inner_height_1200: function(b) {
                    return 1200 <= a.d.ac
                },
                inner_height_1300: function(b) {
                    return 1300 <= a.d.ac
                },
                inner_height_1400: function(b) {
                    return 1400 <= a.d.ac
                },
                inner_height_1000_1400: function(b) {
                    return 1E3 <= a.d.ac && 1400 >= a.d.ac
                },
                inner_height_1100_1400: function(b) {
                    return 1100 <= a.d.ac && 1400 >= a.d.ac
                },
                audibleFullVisibleHalfDuration: function(b) {
                    if (!(b &&
                            b.video && b.video.durationMeasurable)) return !1;
                    var c = 98 * b.ao.duration / 100,
                        d = b && a.o.a(b.zr);
                    return (b = d && b.video && b.video.getCounter(d.getLabel())) && b.get("groupmAudibleFullyVisIvt") >= .5 * c
                },
                groupmAudVisHumanCap15: function(b) {
                    if (!(a && a.f && a.f.x && b && b.video && b.ao)) return !1;
                    var c = !1;
                    "number" == typeof b.ao.duration && !isNaN(b.ao.duration) && 0 < b.ao.duration && (c = t.min(15E3, .5 * b.ao.duration));
                    var d = b && a.o.a(b.zr),
                        d = d && b.video.getCounter(d.getLabel());
                    b = a.f.y(b.zr);
                    return c && d && d.get("groupmAudibleFullyVisIvt") >
                        c && b
                },
                scroll_measurable: function(b) {
                    return a.d.e
                },
                scroll: function(a) {
                    return "undefined" !== typeof r.z
                },
                scrollfirstX: function(a, b) {
                    return r.z > b
                },
                scrollfirst1: function(a) {
                    return 1E3 < r.z
                },
                scrollfirst2: function(a) {
                    return 2E3 < r.z
                },
                scrollfirst2btf: function(a) {
                    return 2E3 < r.z && v(a)
                },
                scrollfirst3: function(a) {
                    return 3E3 < r.z
                },
                scrollfirst5: function(a) {
                    return 5E3 < r.z
                },
                scroll_interaction: function(a) {
                    return this.scroll(a) && this.interaction(a)
                },
                hover: function(a) {
                    return a.dm
                },
                mobileTouch: function(b) {
                    return a.d.df &&
                        b.dm
                },
                laxOts: function(b) {
                    return a.o.n(b, "lax")
                },
                strictOts: function(b) {
                    return a.o.n(b)
                },
                everOutOfFocus: function(b) {
                    return !a.focus.pageIsVisible()
                },
                interaction_measurable: function(b) {
                    return !a.b.l() || e(b)
                },
                interaction: function(a) {
                    return e(a)
                },
                btf: function(a) {
                    return v(a)
                },
                btf_strictOts: function(a) {
                    return this.strictOts(a) && v(a)
                },
                btf_interaction: function(a) {
                    return e(a) && v(a)
                },
                btf_inViewX: function(b, c) {
                    return a.o.k(b, c) && v(b)
                },
                btf_inView5: function(b) {
                    return a.o.k(b, 5E3) && v(b)
                },
                btf_inView15: function(b) {
                    return a.o.k(b,
                        15E3) && v(b)
                },
                atf: function(a) {
                    return x(a)
                },
                atf_inViewX: function(b, c) {
                    return a.o.k(b, c) && x(b)
                },
                atf_970_728_inview20: function(b) {
                    return (970 == b.INITIAL_WIDTH || 728 == b.INITIAL_WIDTH) && x(b) && a.o.k(b, 2E4)
                },
                atf_300x250_inview20: function(b) {
                    return 300 == b.INITIAL_WIDTH && 250 == b.INITIAL_HEIGHT && x(b) && a.o.k(b, 2E4)
                },
                atf_300x600_inview20: function(b) {
                    return 300 == b.INITIAL_WIDTH && 600 == b.INITIAL_HEIGHT && x(b) && a.o.k(b, 2E4)
                },
                btf_300_inview20: function(b) {
                    return 300 == b.INITIAL_WIDTH && v(b) && a.o.k(b, 2E4)
                },
                btf_300_inview30: function(b) {
                    return 300 ==
                        b.INITIAL_WIDTH && v(b) && a.o.k(b, 3E4)
                },
                btf_300_inview40: function(b) {
                    return 300 == b.INITIAL_WIDTH && v(b) && a.o.k(b, 4E4)
                },
                interactionX: function(a, b) {
                    return d(a, b)
                },
                interactionAny: function(a) {
                    return d(a, 10)
                },
                interaction05: function(a) {
                    return d(a, 500)
                },
                interaction1: function(a) {
                    return d(a, 1E3)
                },
                interaction2: function(a) {
                    return d(a, 2E3)
                },
                interaction3: function(a) {
                    return d(a, 3E3)
                },
                interaction4: function(a) {
                    return d(a, 4E3)
                },
                interaction5: function(a) {
                    return d(a, 5E3)
                },
                interaction6: function(a) {
                    return d(a, 6E3)
                },
                interaction7_2: function(a) {
                    return d(a,
                        7200)
                },
                interaction8: function(a) {
                    return d(a, 8E3)
                },
                interaction10: function(a) {
                    return d(a, 1E4)
                },
                interaction13: function(a) {
                    return d(a, 13E3)
                },
                interaction15: function(a) {
                    return d(a, 15E3)
                },
                interaction20: function(a) {
                    return d(a, 2E4)
                },
                interaction30: function(a) {
                    return d(a, 3E4)
                },
                interaction60: function(a) {
                    return d(a, 6E4)
                },
                pageX: function(a, b) {
                    return l(a, b)
                },
                page1: function(a) {
                    return l(a, 1E3)
                },
                page2: function(a) {
                    return l(a, 2E3)
                },
                page3: function(a) {
                    return l(a, 3E3)
                },
                page5: function(a) {
                    return l(a, 5E3)
                },
                page7: function(a) {
                    return l(a,
                        7E3)
                },
                page10: function(a) {
                    return l(a, 1E4)
                },
                page15: function(a) {
                    return l(a, 15E3)
                },
                page20: function(a) {
                    return l(a, 2E4)
                },
                page30: function(a) {
                    return l(a, 3E4)
                },
                page45: function(a) {
                    return l(a, 45E3)
                },
                page60: function(a) {
                    return l(a, 6E4)
                },
                page120: function(a) {
                    return l(a, 12E4)
                },
                page180: function(a) {
                    return l(a, 18E4)
                },
                page240: function(a) {
                    return l(a, 24E4)
                },
                page7_2: function(a) {
                    return l(a, 7200)
                },
                notmeasurableX: function(a, b) {
                    return g(a, b) && !this.measurable(a)
                },
                notmeasurable1: function(a) {
                    return g(a, 1E3) && !this.measurable(a)
                },
                sessionX: function(a, b) {
                    return g(a, b)
                },
                strictOtsAndSession5: function(a) {
                    return this.strictOts(a) && g(a, 5E3)
                },
                inView5AndInteraction2: function(b) {
                    return a.o.k(b, 5E3) && 2E3 <= b.bg
                },
                inView5AndInteraction1: function(b) {
                    return a.o.k(b, 5E3) && 1E3 <= b.bg
                },
                MoatScoreA: function(a) {
                    return g(a, 1E4) && !this.strictOts(a)
                },
                MoatScoreB: function(a) {
                    return this.strictOts(a)
                },
                MoatScoreC: function(b) {
                    return a.o.k(b, 15E3)
                },
                MoatScoreD: function(b) {
                    return a.o.k(b, 25E3) && this.scroll(b)
                },
                MoatScoreE: function(b) {
                    return a.o.k(b, 3E4) && d(b,
                        500) && this.scroll(b)
                },
                inView2AndScrollAndPage10: function(a) {
                    return this.inViewX(a, 2E3) && this.pageX(a, 1E4) && this.scroll(a)
                },
                page5AndScroll: function(a) {
                    return this.pageX(a, 5E3) && this.scroll(a)
                },
                page10AndScroll: function(a) {
                    return this.pageX(a, 1E4) && this.scroll(a)
                },
                scroll5Page15: function(a) {
                    return this.pageX(a, 15E3) || this.scrollfirstX(a, 5E3)
                },
                strictOtsAndInteraction5: function(a) {
                    return this.strictOts(a) && this.interactionX(a, 5E3)
                },
                click: function(a) {
                    return 0 < a.aq[2] || 0 < a.aq[3]
                },
                inView10AndScroll: function(a) {
                    return this.scroll(a) &&
                        this.inViewX(a, 1E4)
                },
                inView10AndScrollAndClick: function(a) {
                    return this.scroll(a) && this.inViewX(a, 1E4) && this.click(a)
                },
                page90_btf: function(a) {
                    return l(a, 9E4) && v(a)
                },
                moatA: function(a) {
                    return g(a, 15E3) && this.inViewX(a, 1E4)
                },
                moatB: function(a) {
                    return g(a, 6E4) && this.scroll(a) && this.inViewX(a, 15E3)
                },
                moatC: function(a) {
                    return g(a, 15E4) && this.scroll(a) && this.inViewX(a, 2E4)
                },
                adNotHidden: function(b) {
                    return !1 === a.as.a(b.zr)
                }
            };
            a.ba.a = function(b, c) {
                f(b, "strictOts", function(b, d) {
                    var h = a.d.g,
                        g = h.document.getElementsByTagName("script")[0],
                        h = h.document.createElement("img");
                    h.src = c;
                    g.parentNode.insertBefore(h, g);
                    b.viewableOcrPixelFired = 1
                })
            };
            a.ba.b = function(b, c) {
                if (a.d.fh()) return !1
            };
            a.ba.c = function() {
                for (var b in u)
                    if (u.hasOwnProperty(b)) {
                        var c = u[b],
                            d = h[b],
                            g;
                        for (g in d) d.hasOwnProperty(g) && p[g](c) && (a.b.forEach(d[g], function(b, h) {
                            var e = typeof b;
                            if ("string" === e) e = a.ba.d(c), e = -1 < a.b.indexOf(b, "?") ? "&ord=" + e : "?ord=" + e, k(b + e)(c);
                            else if ("function" === e) try {
                                b(c)
                            } catch (f) {
                                d[g][h] = !1
                            }
                        }), delete d[g])
                    }
            };
            a.ba.e = function(a, b) {
                if (h.hasOwnProperty(a) &&
                    h[a].hasOwnProperty(b)) return !0
            };
            a.ba.f = function(a, b) {
                h.hasOwnProperty(a) && h[a].hasOwnProperty(b) && delete h[a][b]
            };
            a.ba.d = function(b) {
                var c;
                b.Ord ? c = b.Ord : (c = a.d.q ? a.d.q : (new q).getTime(), b.Ord = c);
                return c
            };
            a.ba.h = f;
            a.ba.i = function(b, c) {
                return b ? function(d) {
                    var h = {};
                    h[a.f.q.c] = !0;
                    h[a.f.q.e] = !0;
                    c && (h[a.f.q.a] = !0);
                    a.f.ac(b, h, d.zr)
                } : function() {}
            };
            a.ba.j = function(a, b) {
                return function() {}
            };
            a.ba.k = e;
            a.ba.l = b;
            a.ba.m = n;
            a.ba.n = p;
            a.ba.o = function(b, c) {
                return b ? function(d) {
                    var h = {};
                    h[a.f.q.d] = !0;
                    c && (h[a.f.q.a] = !0);
                    a.f.ac(b, h, d.zr)
                } : function() {}
            };
            a.ba.p = k;
            a.ba.q = c
        })(p);
        (function(a) {
            a.ab = {};
            a.ab.e = {};
            a.ab.a = "divs";
            a.ab.a = "width";
            a.ab.e.a = function(a) {
                return 970
            };
            a.ab.c = function() {
                var n = a.d.g,
                    f = a.d.t && n.document || document,
                    k = f.documentElement,
                    f = f.getElementsByTagName("body")[0];
                try {
                    a.ab.b = n && n.innerWidth || k && k.clientWidth || f && f.clientWidth
                } catch (e) {}
            };
            a.ab.d = function(n, f, k) {
                if ("divs" == a.ab.a) {
                    if (n._Mt_wIC) return !0;
                    if (n._Mt_wOC) return !1;
                    var e = k.currentTarget,
                        l = n;
                    for (k = 0; 1E3 > k && !a.b.be(f, l); k++) {
                        if (l == e || null ==
                            l) return n._Mt_wOC = !0, !1;
                        l = l.parentElement
                    }
                    return n._Mt_wIC = !0
                }
                if ("width" == a.ab.a) {
                    n = f / 2;
                    e = a.ab.b / 2;
                    l = k.clientX;
                    k = k.clientY;
                    var g = a.d.g.scrollY || a.d.g.document.documentElement.scrollTop;
                    return a.ab.b > f && (l > e + n || l < e - n) || 90 > k + g ? !1 : !0
                }
                if ("ad-els" === a.ab.a) {
                    if (n._Mt_wIC) return !0;
                    if (n._Mt_wOC) return !1;
                    e = k.currentTarget;
                    l = n;
                    for (k = 0; 1E3 > k; k++) {
                        if (a.b.be(f, l)) return n._Mt_wOC = !0, !1;
                        if (l == e || null == l) break;
                        l = l.parentElement
                    }
                    return n._Mt_wIC = !0
                }
            }
        })(p);
        (function(a) {
            function n(d) {
                var c = {
                    window: 0,
                    transparent: 1,
                    opaque: 2,
                    direct: 3,
                    gpu: 4
                };
                if ("EMBED" === d.tagName) var b = a.b.getAttribute(d, "wmode");
                else if ("OBJECT" === d.tagName) {
                    d = d.getElementsByTagName("param");
                    for (var h = 0; h < d.length; h++) {
                        var g = d[h],
                            e = a.b.getAttribute(g, "name"),
                            g = a.b.getAttribute(g, "value");
                        if ("wmode" === e) {
                            b = g;
                            break
                        }
                    }
                }
                return b && c[b.toLowerCase()] || 5
            }

            function f(d) {
                try {
                    if (!d) return !1;
                    var c = d,
                        b;
                    if ("DIV" === c.tagName || "A" === c.tagName)(c = d.getElementsByTagName("EMBED")[0]) || (c = d.getElementsByTagName("OBJECT")[0]), c || (c = d.getElementsByTagName("IMG")[0]),
                        c || (c = d);
                    1 === c.nodeType && "IMG" !== c.nodeName && "EMBED" !== c.nodeName && "OBJECT" !== c.nodeName && (c = d.getElementsByTagName("EMBED")[0] || d.getElementsByTagName("OBJECT")[0] || d.getElementsByTagName("IMG")[0] || d);
                    if ("OBJECT" === c.tagName) {
                        for (var h = 0; h < c.children.length; h++)
                            if ("movie" === c.children[h].name || "Movie" === c.children[h].name) b = c.children[h].value;
                        c.object && c.object.Movie ? b = c.object.Movie : c.data && -1 !== c.data.indexOf("swf") && (b = c.data)
                    }
                    "EMBED" !== c.tagName && "IMG" !== c.tagName || !c.src || (b = c.src);
                    b || (b =
                        a.b.bm(c));
                    var g = a.az.a(b, c);
                    if (!b)
                        for (var e = a.e.k.a, c = 0; c < e.length; c++) {
                            var f = e[c](d);
                            f && (b = f)
                        }
                    return {
                        adURL: b,
                        flashVars: g
                    }
                } catch (k) {
                    return !1
                }
            }

            function k(d) {
                var c = d.el,
                    b = d.url,
                    h = d.flashVars,
                    g = d.adIds,
                    e = d.opt_props;
                this.adContent = d.adContent;
                (new q).getTime();
                this.ao = g;
                this.FIND_AD_TRIES = g.numTries || 0;
                var k = f(c);
                if (k && k.adURL && h)
                    for (var l in k.flashVars) k.flashVars.hasOwnProperty(l) && (h[l] = k.flashVars[l]);
                k && k.flashVars && (h = k.flashVars);
                if ("string" !== typeof b || "div" === b.toLowerCase() || "a" === b.toLowerCase()) b =
                    k && k.adURL || "-";
                b && 0 !== b.toLowerCase().indexOf("http:") && 0 !== b.toLowerCase().indexOf("https:") && ("//" === b.substring(0, 2) ? b = window.location.protocol + b : "/" === b[0] ? b = window.location.protocol + "//" + window.location.host + b : (k = window.location.pathname.split("/").slice(0, -1).join("/"), b = window.location.protocol + "//" + window.location.host + "/" + k + (k ? "/" : "") + b));
                "IFRAME" !== c.tagName && "IMG" !== c.tagName && -1 === b.indexOf("googlesyndication") && (b = b.split("?")[0]);
                this.zr = g.adNum;
                this.MMAK_ID = g.mmakAdKey ? g.mmakAdKey :
                    "m" + this.zr;
                this.yg = a.b.dn();
                !g.mmakAdKey && a.b.dz() && (this.MMAK_ID += "_beta");
                this.TAGID = a.d.bd;
                a.w.h(this.yg, a.d.bb.a);
                u[this.zr] = this;
                a.e.m(this.zr, [c]);
                this.ae = b;
                this.aa = c;
                a.m.a.zaxs("adElementUpdate");
                this.WINDOW = b = a.b.bl(this.aa);
                this.isInIframe = b != b.parent;
                this.proxyTrackingEnabled = this.isSREMeasurable = !1;
                this.debugData = {
                    version: "3",
                    trueVisiblePercent: null,
                    update: function(a) {
                        this.trueVisiblePercent = a
                    },
                    getValue: function() {
                        var a;
                        a = "number" === typeof this.trueVisiblePercent ? t.round(100 * this.trueVisiblePercent) :
                            "-";
                        return this.version + ":" + a
                    }
                };
                this.setDimensions = function() {
                    var b;
                    b = new a.aa.k(c);
                    this.INITIAL_WIDTH = parseInt(b.width);
                    this.INITIAL_HEIGHT = parseInt(b.height)
                };
                this.setDimensions();
                "undefined" === typeof h && (h = {});
                a.w.l(ua);
                this.eg = [];
                this.ee = {};
                a.d.bo || !a.d.bn || e && e.IS_PAGE_LEVEL || (this.ed = {}, a.s.z(this));
                this.periscopeManager && this.periscopeManager.insertSuccessful || e && e.IS_PAGE_LEVEL || (this.ed = {}, a.s.z(this));
                a.ac.e.a(this);
                a.ac.f.a(this);
                a.ap.b(this);
                this.DfpSlot = g.trackedFromDfpHeaderTag && g.slotMappingId ?
                    a.y.e()[g.slotMappingId] : a.y.f();
                this.get_width = function() {
                    if (a.d.ed()) {
                        var b = a.n.realEstateMeasurements;
                        if (b = b && b.w) return b
                    }
                    return g.initWidth ? g.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : !1
                };
                this.get_height = function() {
                    if (a.d.ed()) {
                        var b = a.n.realEstateMeasurements;
                        if (b = b && b.h) return b
                    }
                    return g.initHeight ? g.initHeight : this.INITIAL_HEIGHT ? this.INITIAL_HEIGHT : !1
                };
                this.getScreenRealEstate = function() {
                    var b, c, d = a.d.z,
                        h = a.d.aa;
                    a.n.a() ? (b = (c = a.n.realEstateMeasurements) && c.w || 0, c = c && c.h || 0) : (b = this.INITIAL_WIDTH,
                        c = this.INITIAL_HEIGHT);
                    return d && h && b && c ? t.max(0, t.min(1, b * c / (d * h))) : 0
                };
                a.u.h(this);
                a.ba.b(this.zr, this.ao);
                this.ag = h;
                this.ai = 0;
                this.an = this.am = this.al = this.ak = this.aj = void 0;
                this.ar = [];
                this.as = [];
                this.at = [];
                this.av = this.au = a.ah.a.a.a;
                this.ax = a.ah.a.b.a;
                this.ay = a.ah.a.c.a;
                this.ba = this.az = a.ah.a.d.a;
                this.bb = a.ah.a.e.a;
                this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                this.ca =
                    this.bz = !1;
                this.cb = this.cu = this.ct = void 0;
                this.cc = +new q + 12E4;
                this.ci = +new q;
                this.cl = this.cm = void 0;
                this.cn = 0;
                this.ck = a.ah.a.f.a;
                this.cd = !1;
                this.cy = void 0;
                this.dt = !1;
                this.db = void 0;
                this.cf = this.ce = !1;
                this.af = Number(this.ef);
                this.eq = !1;
                this.ds = this.ch = this.dr = this.cg = 0;
                this.dq = this.bn = void 0;
                this.IR5 = {
                    MIN: {
                        x: void 0,
                        y: void 0
                    },
                    MAX: {
                        x: void 0,
                        y: void 0
                    },
                    AREA: 0
                };
                this.dm = 0;
                this.ep = this.dd = !1;
                this.aq = {};
                this.aq.g = 0;
                this.aq[1] = 0;
                this.aq[2] = 0;
                this.aq[3] = 0;
                this.aq[13] = 0;
                this.aq[0] = 0;
                this.aq[4] = 0;
                this.aq[5] = 0;
                this.aq[6] = 0;
                this.aq[7] = 0;
                this.aq[9] = 0;
                this.aq[8] = 0;
                this.aq[15] = 0;
                this.aq[16] = 0;
                this.aq[21] = 0;
                this.aq[22] = 0;
                this.aq[23] = 0;
                this.aq[37] = 0;
                this.aq.tc = 0;
                this.es = [5, 10, 15, 30, 60];
                this.doa = [5, 10, 15, 30, 60];
                this.wasEverInView = this.isCurrentlyTransparent = this.isCurrentlyStacked = void 0;
                this.aq[14] = 0;
                this.an = d.adType || d.opt_props && d.opt_props.adType || a.e.i(c);
                0 === this.an && (this.WMODE = n(c));
                a.b.cd(this.aa);
                d.opt_props && d.opt_props.components && (this.components = d.opt_props.components, this.isCompositeAd = !0);
                var p = !0;
                this.disableMeasurability = function() {
                    p = !1
                };
                this.enableMeasurability = function() {
                    p = !0
                };
                this.isMeasurabilityDisabled = function() {
                    return !1 === p
                };
                this.viewabilityMethod = {};
                this.viewabilityPercent = {
                    strict: "-",
                    sframe: "-",
                    pscope: "-"
                };
                this.isValidAdSize = function() {
                    return a.b.cb(this.aa)
                };
                a.m.a.zaxs("adInitialized", this);
                a.e.l(this)
            }

            function e(d, c) {
                for (var b = 0, h = c.length; b < h; b++) a.l.c(d, c[b])
            }
            var l = 0,
                g = !0;
            a.e = {};
            a.e.k = {};
            a.e.e = function(d, c, b, h, g, e, f) {
                e || a.f.al(g);
                var l;
                l = 1 == arguments.length ? arguments[0] : {
                    el: d,
                    url: c,
                    flashVars: h,
                    adIds: g,
                    opt_props: f
                };
                if (a.ab.e.a && 1 == g.skin) {
                    var p;
                    p = a.ab.e.a(d, g);
                    l.adContent = p
                }
                if (e) {
                    if ("function" === typeof e) return e(d, c, h, g);
                    new q;
                    e.em = !0;
                    u[e.zr] = e;
                    d[I] = e.zr;
                    d[F] = !0;
                    e.aa = d;
                    a.m.a.zaxs("adElementUpdate");
                    e.INITIAL_WIDTH = d.offsetWidth;
                    e.INITIAL_HEIGHT = d.offsetHeight;
                    e.ae = c;
                    e.an = a.e.i(d);
                    0 === e.an && (e.WMODE = n(d));
                    e.ag = h || {};
                    a.l.d(e);
                    l = {
                        e: 0
                    };
                    l.q = e.aq[0]++;
                    a.v.a(e, l);
                    a.m.a.zaxs("adLoaded", e);
                    a.d.bo || !a.d.bn || f && f.IS_PAGE_LEVEL || (e.periscopeManager && e.periscopeManager.killAllPixels(),
                        e.periscopeConfig = !1, a.s.z(e));
                    return e
                }
                return u[g.adNum] ? u[g.adNum] : new k(l)
            };
            a.e.l = function(d) {
                d.de = isNaN(d.ao.startTime) ? +new q : d.ao.startTime;
                d.RAND = d.ao.rand;
                (new q).getTime();
                a.d.d() && a.q.k(d);
                a.d.k() && a.t.h(d);
                a.o.e(d);
                a.d.e || a.ak.b.a();
                a.l.d(d);
                a.aw.m("newad", d.zr);
                a.ax.b(["../div#html5ClickOverlay"], d, d.aa);
                d.aa.parentNode && "swiffycontainer" === d.aa.parentNode.id && a.ax.b(["..../../iframe ~ #clicktag"], d, d.aa.parentNode);
                a.m.a.zaxs("startAdTracking", d);
                d.dd = !0;
                a.d.eq(d);
                var c = {
                    e: 0
                };
                c.q = d.aq[0]++;
                a.v.a(d, c);
                a.m.a.zaxs("adLoaded", d)
            };
            a.e.k.a = [];
            a.e.b = function() {
                var d, c;
                for (c in u) u.hasOwnProperty(c) && (d = u[c]) && !d.ep && a.u.a(d)
            };
            a.e.d = function(d) {
                var c = +new q,
                    b = c - d.ci;
                if (0 < d.doa.length) {
                    var h = 1E3 * d.doa[0];
                    if (d.counters.laxDwell.tCur >= h) {
                        d.doa.shift();
                        var g = d.es.length ? d.es[0] : 60;
                        if (h < g) return !1;
                        if (5E3 < b) return !0
                    }
                }
                return 0 < d.es.length && (g = 1E3 * d.es[0], a.o.k(d, g)) ? (d.es.shift(), !0) : 0 === d.doa.length && c > d.cc ? (d.cc *= 2, !0) : !1
            };
            a.e.m = function(a, c) {
                for (var b = 0; b < c.length; b++) {
                    var h = c[b];
                    h[I] = a;
                    h[F] = !0
                }
            };
            a.e.i = function(a) {
                return "IFRAME" === a.tagName ? 2 : "IMG" === a.tagName ? 1 : "EMBED" === a.tagName || "OBJECT" === a.tagName ? 0 : 3
            };
            a.e.n = function(d, c) {
                a.b.a(c.cc);
                a.e.o(c);
                a.e.a(c, 1) && a.m.a.sxaz("adKilled", {
                    id: d
                })
            };
            a.e.p = function(d, c) {
                a.e.a(c) && a.m.a.sxaz("adNotFound", {
                    id: d
                })
            };
            a.e.a = function(d, c) {
                var b = 0,
                    h;
                for (h in u) u.hasOwnProperty && u.hasOwnProperty(h) && b++;
                return b <= (c || 0) ? (a.m.a.esgf("allLocalAdsKilled"), !0) : !1
            };
            a.e.q = function(a) {
                a.ep = !0;
                delete u[a.zr];
                try {
                    a.aa && (a.aa[F] = null, a.aa[I] = null, a.aa = null, a.DfpSlot =
                        null)
                } catch (c) {}
                a.groupmV2 = null;
                a.groupmV3 = null;
                a.periscopeManager = null;
                a.secondaryCounters = null;
                a.mouseEventElements = null;
                a.publicis = null
            };
            a.e.o = function(d) {
                if (d && d.video && !d.video.started) return !1;
                var c = {
                    e: 21
                };
                c.q = d.aq[21]++;
                a.bc.a && a.bc.b && (c.yco = a.bc.a.YCoord.join("a"), c.yt = a.bc.a.time.join("a"), c.xco = a.bc.b.XCoord.join("a"), c.xt = a.bc.b.time.join("a"));
                a.v.a(d, c);
                d.unloadPixelSent = !0
            };
            a.e.r = function(a) {
                return a && a.video
            };
            a.m.a.azsx("adKilled", a.e.n, {
                includeId: !0
            });
            a.m.a.azsx("adNotFound", a.e.p, {
                includeId: !0
            });
            a.e.s = e;
            a.e.t = function(d, c, b, h, g, f, k, l) {
                var n = {
                    area: 0
                };
                a.b.forEach(d, function(b) {
                    var c = new a.aa.k(b);
                    c.area = c.height * c.width;
                    c && c.area >= n.area && (n = b, n.area = c.area)
                });
                g.adFindingMethod = "MULTIPART_ADS";
                if (c = a.e.e(n, c, b, h, g, f, k)) return c.isMultipartAd = !0, c.multipartComponents = d, a.b.h(l) && l.length === d.length ? e(c, l) : e(c, d), c
            };
            a.e.u = function(d, c, b, h, g, f, k, l) {
                k = k || {};
                k.components = d;
                g.adFindingMethod = "COMPOSITE_ADS";
                if (c = a.e.e(d[0], c, b, h, g, f, k)) return c.isCompositeAd = !0, c.components = d, a.b.h(l) &&
                    l.length === d.length ? e(c, l) : e(c, d), c
            };
            a.e.g = function(a) {
                "number" === typeof a && (l = a)
            };
            a.e.j = function() {
                return l
            };
            a.e.f = function() {
                g = !1
            };
            a.e.h = function() {
                g = !0
            };
            a.e.c = function() {
                return !1 === g
            }
        })(p);
        (function(a) {
            function n(a) {
                var c = [];
                if ("string" !== typeof a) return !1;
                for (var b, h = !1, e = /(.*?[^\\])(?:\\\\)*\//; a;) {
                    if (l(a, ".../")) b = ".../";
                    else if (l(a, "...../")) b = "...../";
                    else if (l(a, "../") || l(a, "..../")) {
                        b = l(a, "../") ? "../" : "..../";
                        for (var f = b.length; l(a.substring(f), b);) f += b.length;
                        b = a.substring(0, f)
                    } else l(a,
                        "=>/") ? b = "=>/" : l(a, "-/") ? b = "-/" : l(a, "+/") ? b = "+/" : l(a, "$[") ? (b = a.length, f = g(a, "]/") + 2, b = a.substring(0, t.min(b, f))) : l(a, "^/") ? b = "^/" : l(a, "IN_IFRAME/") ? b = "IN_IFRAME/" : l(a, "IN_X_FRAME/") ? b = "IN_X_FRAME/" : (l(a, "${") ? (b = a.length, f = g(a, "}/") + 2, b = a.substring(0, t.min(b, f))) : b = (h = e.exec(a)) && h[0] ? h[0] : a, h = !0);
                    (a = a.substring(b.length)) && h && (b = b.substring(0, b.length - 1), h = !1);
                    c.push(b)
                }
                return c
            }

            function f(d) {
                if (!d) return !1;
                if (!a.d.m || 10 < a.b.s() || d.querySelectorAll && d.querySelector && (!d.MoatQSShimSet || d[e])) return !0;
                d.querySelector = function(a) {
                    a = this.querySelectorAll(a);
                    return a.length ? a[0] : null
                };
                d.querySelectorAll = function(a) {
                    var b = [],
                        d = this.ownerDocument || document,
                        g = d.createElement("style");
                    (d = d.getElementsByTagName("head")[0]) && d.insertBefore(g, d.childNodes[t.max(d.childNodes.length - 1, 0)] || null);
                    g && g.styleSheet && (g.styleSheet.cssText = a + "{shimtest:bar}");
                    a = this.getElementsByTagName("*");
                    for (var d = a.length, e = 0; e < d; e++) a[e].currentStyle && "bar" === a[e].currentStyle.shimtest && (b[b.length] = a[e]);
                    g.parentNode.removeChild(g);
                    return b
                };
                d.MoatQSShimSet = !0;
                return d[e] = !0
            }

            function k(d, c, b) {
                function h(a) {
                    if (m && 0 < m.length)
                        for (var b = m.length, c = 0; c < b; c++) a = a.replace("$" + c, m[c]);
                    return a
                }
                var g = function(b, c) {
                    if (!b || !c) return !1;
                    if (b.matches) return b.matches(c);
                    if (!f(b.parentNode)) return !1;
                    var d = b.parentNode.querySelectorAll(c);
                    if (!d || !d.length) return !1;
                    var h = !1;
                    a.b.forEach(d, function(a) {
                        a === b && (h = !0);
                        return !h
                    });
                    return h
                };
                d = n(d);
                if (!d) return !1;
                for (var e = c, k = 0, m = [], p = function(b) {
                            return b && a.k.b(b)
                        }, t = function(a) {
                            return a && a.parentElement
                        },
                        r = function(b) {
                            return b ? (b = a.k.e(b)) && b.body : !1
                        }, q = function(a, b, c) {
                            return a ? (a = a.getAttribute(b)) && (c = (new RegExp(c)).exec(a)) && c.length && 0 < c.length ? c[c.length - 1] : !1 : !1
                        }, C = 0; C < d.length && 100 > k; C++) {
                    var y = d[C];
                    l(y, "${") && (y = y.substring(2, y.length - 1));
                    if (l(y, "../") || l(y, "..../")) {
                        var u, B;
                        l(y, "../") ? (u = "../", B = t) : (u = "..../", B = p);
                        if (0 !== y.length % u.length) return !1;
                        for (var D = 0; D < y.length / u.length; D++) {
                            if (!e || "HTML" === e.nodeName) return !1;
                            e = B(e);
                            k++
                        }
                    } else if (".../" === y)
                        for (y = d[C + 1] && h(d[C + 1]); 100 > k;) {
                            if (e &&
                                g(e, y)) {
                                C++;
                                break
                            }
                            if (!e || "HTML" === e.nodeName) return !1;
                            e = e.parentElement;
                            k++
                        } else if ("...../" === y) {
                            e = a.d.g && a.d.g.document && a.d.g.document.body;
                            if (!e) return !1;
                            k++
                        } else if ("=>/" === y) {
                        e = r(e);
                        if (!e) return !1;
                        k++
                    } else if ("-/" === y) {
                        e = a.b.previousElementSibling(e);
                        if (!e) return !1;
                        k++
                    } else if ("+/" === y) {
                        if (e = a.b.nextElementSibling(e), !e) return !1
                    } else if (l(y, "$["))
                        if (y = (u = (y = y.substring(2, y.length - 2)) && y.split("|")) && u[0], u = u && u[1], y && u)
                            if (y = q(e, y, u)) m.push(y), k++;
                            else return !1;
                    else return !1;
                    else if ("^/" === y) {
                        e =
                            c;
                        if (!e) return !1;
                        k++
                    } else if ("IN_IFRAME/" === y) {
                        if (!a.d.s) return !1;
                        k++
                    } else if ("IN_X_FRAME/" === y) {
                        if (!a.d.fl) return !1;
                        k++
                    } else if (y = h(y), !g(e, y)) {
                        if (!f(e)) return !1;
                        e = e.querySelectorAll(y);
                        if (b && C === d.length - 1) return e ? e : !1;
                        if (!e || 1 !== e.length) return !1;
                        e = e[0]
                    }
                }
                return e
            }
            a.ax = {};
            var e = "MoatQSShimOrd_" + K + "_" + a.d.q,
                l = function(a, c) {
                    return 0 === a.indexOf(c) && c
                },
                g = function(a, c) {
                    var b = a.indexOf(c);
                    return 0 > b ? a.length + 1 : b
                };
            a.ax.a = function(d, c) {
                var b = [];
                a.b.forEach(d, function(a) {
                    (a = k(a, c)) && b.push(a)
                });
                return b
            };
            a.ax.c = function(d, c) {
                var b = [];
                a.b.forEach(d, function(a) {
                    if (a = k(a, c, !0))
                        for (var d = 0; d < a.length; d++) b.push(a[d])
                });
                return b
            };
            a.ax.b = function(d, c, b) {
                d = a.ax.a(d, b);
                a.b.forEach(d, function(b) {
                    a.l.c(c, b)
                });
                return !!d
            }
        })(p);
        (function(a) {
            function n(b, c, d, h, g, m) {
                m || (m = window);
                a.ay.e = b;
                var n = a.ay.g,
                    v = a.ay.h,
                    x = a.ay.i,
                    p = 0,
                    t = function() {
                        var g;
                        c.numTries = p++;
                        if (a.d.fm && a.ay.f(t, null, c) || a.d.fn && a.ay.f(t, null, c) || a.k.j(m) && m.ebCfg && 43 == m.ebCfg.formatId && 1 == m.ebCfg.dlm && (a.d.fo = !0, a.ay.f(t, null, c))) return !0;
                        if (!g) try {
                            v &&
                                (g = v(b, c, d, h, null, m))
                        } catch (x) {}
                        if (!g && (g = n(b, c, d, h, null, m), !0 === g)) return !0;
                        if (a.d.k() && a.d.cv() && !g) {
                            var A = f();
                            e(A) && (g = l(c)) && (c.adFindingMethod = "Appscope Body")
                        }
                        a.d.d() && !g && (A = k(), e(A) && (g = l(c)) && (c.adFindingMethod = "Omid Body"));
                        A = !!T;
                        g && a.aw.o(g);
                        T && !A && (c.adFindingMethod = "string" === typeof c.adFindingMethod ? "Exps: " + T + " | " + c.adFindingMethod : "Exps: " + T);
                        (A = g && g !== a.aw.i) && a.b.forEach(a.ay.d.a, function(a) {
                            if (a && "function" === typeof a) try {
                                a(g)
                            } catch (b) {}
                        });
                        return A
                    };
                if (a.d.e) {
                    var A = !1,
                        w, r;
                    c && (w =
                        "skin" in c && 1 == c.skin, r = "format" in c && "Wallpaper" == c.format);
                    c && c.zMoatPS && c.zMoatPS.match(/skin/) && (c.adFindingMethod = "Turner Wallpaper", A = !0);
                    if (w || r || A) "width" == a.ab.a && a.ab.c(), a.d.fp = !0, c.skin = 1, w ? (c.isSkin = 1, c.adFindingMethod = "skin1") : r && (c.isAolSkin = 1, c.adFindingMethod = "AOL Skin"), a.s && (a.s.n = function() {
                        return !1
                    }), t = function() {
                        var b, h = a.d.g.document.body;
                        c.numTries = p++;
                        if (a.ab.e.a(h, c)) return h && a.b.ca(h) && (b = a.b.bm(h), b = a.e.e(h, b || h.nodeName, !1, void 0, c, d)), b && !0
                    }
                }
                a.p.k(t, x, 500, g)
            }

            function f() {
                var b = {
                        area: 5E3,
                        height: 40,
                        width: 40
                    },
                    c = a.d.ej && a.d.ej("appName"),
                    d = a.d.ej && a.d.ej("namespace");
                "NFL Mobile" === c && "NFL" === d && (b.height = 25);
                return b
            }

            function k() {
                var b = {
                    area: 5E3,
                    height: 40,
                    width: 40
                };
                "com.nfl.mobile3.enterprise" === (a.d.bk && a.d.bk("ya")) && (b.height = 25);
                return b
            }

            function e(b) {
                var c = a.d.g.innerWidth,
                    d = a.d.g.innerHeight,
                    h = d >= b.height,
                    g = c >= b.width;
                return c * d >= b.area && h && g
            }

            function l(b) {
                if (1 !== a.d.ap().isInApp) return !1;
                var c = a.d.g;
                if ((c = (c = c && c.document) && c.body) && "undefined" == typeof c.MOATALREADYFOUND) return a.e.e(c,
                    "BODY", !1, void 0, b, !1)
            }

            function g(b, c, d, h, g) {
                var e, f, k, l, m = a.d.g.document.getElementById("eyeDiv");
                if (B && B.id && 0 <= B.id.indexOf("ebebDnlScript")) {
                    var n = B.id.split("_");
                    n && 3 === n.length && (k = n[1], l = n[2])
                }
                k = k || g.ebAdID;
                l = l || g.ebRand;
                k && l && (f = k + "_" + l);
                if (f && "object" === typeof g.ebAds && g.ebAds[f] && (l = g.ebAds[f].visibilityMgr && g.ebAds[f].visibilityMgr._res) && a.b.ca(l) && (c.adFindingMethod = "SIZMEKADS", e = a.e.e(l, l.nodeName, !1, void 0, c, d))) return e;
                if (e = function() {
                        var b = [],
                            h = a.ax.a(["iframe[id*='header_iframe_" +
                                f + "']"
                            ], m)[0],
                            g = a.ax.a(["iframe[id*='leftgutter_iframe_" + f + "']"], m)[0],
                            k = a.ax.a(["iframe[id*='rightgutter_iframe_" + f + "']"], m)[0];
                        if (h)
                            if (a.b.ca(h)) b.push(h);
                            else return !1;
                        if (g)
                            if (a.b.ca(g)) b.push(g);
                            else return !1;
                        if (k)
                            if (a.b.ca(k)) b.push(k);
                            else return !1;
                        if (b && 0 < b.length && (e = a.e.u(b, b[0].nodeName, !1, void 0, c, d))) return c.adFindingMethod = "SIZMEKADS-1", e
                    }()) return c.adFindingMethod = a.d.fo ? "SIZMEKADS-Composite-PL" : "SIZMEKADS-Composite", e;
                if (a.d.fo) return !1;
                if (k && g.gEbBanners && a.b.f(g.gEbBanners)) {
                    var v = !1;
                    a.b.forEach(g.gEbBanners, function(a) {
                        if (a && a.adData && a.adData.nAdID == k) return v = a, !1
                    });
                    if (v && (g = v.displayUnit && v.displayUnit.defaultPanel && v.displayUnit.defaultPanel.panelDiv) && g.nodeName && "div" == g.nodeName.toLowerCase() && (e = r(g, c, d, h))) return c.adFindingMethod = "SIZMEKADS banner", e
                }
                g = b.getElementsByTagName("div");
                g = a.b.co(g);
                "DIV" === b.nodeName && g.push(b);
                if (g && 0 < g.length) {
                    var x = [];
                    a.b.forEach(g, function(a) {
                        a && a.id && a.id.match(/ebDiv\d+/) && x.push(a)
                    });
                    if (x && 0 < x.length && a.d.g && a.d.g.document) {
                        var p;
                        a.b.forEach(x, function(b) {
                            var c = a.d.g.document.getElementById(b.id);
                            if (c && c !== b) return p = c, !1
                        });
                        if (p) {
                            if (e = r(p, c, d, h)) return e;
                            if (p && a.b.ca(p) && h(p)) {
                                if (c.adFindingMethod = "SIZMEKADS adDvi", e = a.e.e(p, p.nodeName, !1, void 0, c, d)) return e
                            } else {
                                b = p.getElementsByTagName("iframe");
                                g = p.id.split("ebDiv")[1];
                                var A = new RegExp("ebBannerIFrame_\\d+_" + g),
                                    t;
                                if (b && 0 < b.length && (a.b.forEach(b, function(b) {
                                        if (b && b.id && b.id.match(A) && a.b.ca(b)) return t = b, !1
                                    }), t && h(t) && (c.adFindingMethod = "SIZMEKADS banner iframe", e = a.e.e(t,
                                        t.nodeName, !1, void 0, c, d)))) return e
                            }
                        }
                    }
                }
                if (f && m && ((h = a.ax.a(["div[id*='" + f + "']"], m)[0]) || (h = a.ax.a(["div[id^='eb'][id*='" + f + "']"], m)[0]), h && ((e = r(h, c, d)) || a.b.ca(h) && (c.adFindingMethod = "SIZMEKADS-Breakout", e = a.e.e(h, h.nodeName, !1, void 0, c, d))))) return e
            }

            function d(b, c, d, h, g) {
                function e(b) {
                    return b ? a.ax.a(["div.jpstage"], b)[0] || !1 : !1
                }
                var f = e(b),
                    k = a.d.g.document;
                h && !f && (f = a.ax.a(["..../../div.jpplatform_" + h, "...../div[id='jpplatform_" + h + "']", "...../div.jpplatform_" + h], b)[0]);
                f || (f = e(k.getElementById("jpsuperheader")));
                f || (f = e(a.b.getElementsByClassName("jpeditorialunit", "DIV", k.body)[0]));
                f || (f = e(k.getElementById("jpd_adhesion")));
                f || (b = (b = k.getElementById("jp_overlay") || h && k.getElementById("jp_overlay_" + h)) && a.b.getElementsByClassName("jppanel", "DIV", b)) && 1 <= b.length && a.b.forEach(b, function(b) {
                    if (b && a.b.ca(b)) return f = b, !1
                });
                f || (k = k.getElementById("jpd_expfooter"), f = e(k));
                if (f && a.b.ca(f) && g(f) && (c.adFindingMethod = "JETPACKDIGITALADS", ad = a.e.e(f, f.nodeName, !1, void 0, c, d))) return ad
            }

            function c(b, c, d, h) {
                if ((b = a.b.getElementsByClassName("originplatform-ad",
                        "SCRIPT", a.d.t ? b.ownerDocument && b.ownerDocument.documentElement || b : b)[0]) && b.id && (b = b.id.match(/embed_origin_(\d+)/)) && b[1] && (b = "OriginPlatformAdUnit-" + b[1] + "-inpage", b = document.getElementById(b) || a.d.t && a.d.g.document.getElementById(b)) && (c.adFindingMethod = "ORIGINADS", c = a.e.e(b, b.nodeName, !1, void 0, c, d))) return c
            }

            function b(b, c, d, h) {
                var g, e, f, k = b.childNodes,
                    l = !1;
                for (g = k.length - 1; 0 <= g; g--) {
                    var m = k[g];
                    "#comment" === m.nodeName && /undertone/i.test(m.nodeValue) ? l = !0 : "STYLE" === m.nodeName && (m = m.innerHTML.match(/(utpga\d+).+/i)) &&
                        2 === m.length && (f = m[1])
                }
                if (l) {
                    g = a.d.t ? (g = a.k.g(b)) && g.ownerDocument ? g.ownerDocument : document : document;
                    f && (e = g.getElementById(f), !e && a.d.t && (e = document.getElementsById(f)));
                    e || (f = g.getElementsByTagName("div"), a.b.forEach(f, function(a) {
                        if (a && a.id && a.id.match("utpga")) return e = a, !1
                    }), !e && a.d.t && (f = document.getElementsByTagName("div"), a.b.forEach(f, function(a) {
                        if (a && a.id && a.id.match("utpga")) return e = a, !1
                    })));
                    if (e && ((f = r(e, c, d, h)) || a.b.ca(e) && h(e) && (c.adFindingMethod = "UNDERTONE pageGrabberDiv", f = a.e.e(e,
                            e.nodeName, !1, void 0, c, d)))) return f;
                    if ((f = document.getElementById("utbanner") || a.d.t && a.d.g.document.getElementById("utbanner")) && (f = a.k.e(f)) && f.body && (f = r(f.body, c, d, h))) return c.adFindingMethod = "UNDERTONE fullPageAdIframe", f;
                    if ((f = a.b.getElementsByClassName("ut_container", "DIV")[0] || a.d.t && a.b.getElementsByClassName("ut_container", "DIV", a.d.g.document)[0]) && a.b.ca(f) && h(f)) return c.adFindingMethod = "UNDERTONE screenshift", f = a.e.e(f, f.nodeName, !1, void 0, c, d, {
                        adType: 2
                    });
                    if (d = document.getElementById("eyeDiv") ||
                        a.d.t && a.d.g.document.getElementById("eyeDiv"))
                        for (d = d.getElementsByTagName("object"), g = 0; g < d.length; g++)
                            if (f = d[g], "fixed" == f.style.position && a.b.ca(f) && h(f)) return c.adFindingMethod = "UNDERTONE slider", f = a.e.e({
                                el: f,
                                adIds: c
                            })
                }
            }

            function h(b, c, d, h, g) {
                if ((b = c.tlview_id || c.tlviewID) && (b = document.getElementById(b) || a.d.g.document.getElementById(b)) && a.b.ca(b) && (c = a.e.e(b, b.nodeName, !1, void 0, c, d))) return c
            }

            function v(b, c, d, h, g) {
                if (b = a.ay.m(["[tleid]"], b, c, d)) return b
            }

            function x(b, c, d, h, g) {
                if (g._tlCreatives &&
                    1 === g._tlCreatives.length && g._tlCreatives[0].hook && (c = (b = g._tlCreatives[0].hook) && a.ay.m(["-/[tleid]"], b, c, d))) return c
            }

            function p(b, c, d, h, g, e) {
                var f, k, l, m, n = [];
                if (f = h ? h : e.Adform && e.Adform.ADFBannerData && "string" === typeof e.Adform.ADFBannerData.BN && e.Adform.ADFBannerData.BN) {
                    if (h = (b = e.Adform && e.Adform.adRegister) && b[f]) l = h.collapsedContent && h.collapsedContent._element, m = h.expandedContent && h.expandedContent._element, k = h.adBox && h.adBox._attributes && h.adBox._attributes.element;
                    k || a.b.forEach(e.Adform &&
                        e.Adform.adData,
                        function(a) {
                            if (k = a && a.bn && a.bn == f && a.container) return !1
                        });
                    if (l && m && (a.b.ca(l) || a.b.ca(m)) && (c.adFindingMethod = "ADFORMADS two-element expandable", e = a.e.e(l, l.nodeName, !1, void 0, c, d, {
                            adType: 2
                        }))) return e.adformCollapsedEl = l, e.adformExpandedEl = m, e;
                    if (m && a.b.ca(m) && (c.adFindingMethod = "ADFORMADS Single-element expandable", e = a.e.e(m, m.nodeName, !1, void 0, c, d, {
                            adType: 2
                        }))) return e;
                    if (k && a.b.ca(k)) {
                        b && a.b.forEach(b, function(b, c) {
                            if (c && c.indexOf && -1 < c.indexOf(f + "#")) {
                                var d = b && b.adBox && b.adBox._attributes &&
                                    b.adBox._attributes.element;
                                d && d !== k && a.b.ca(d) && n.push(d)
                            }
                        });
                        if (0 < n.length && (n.unshift(k), e = a.e.u(n, n[0].nodeName, !1, void 0, c, d, {
                                adType: 2
                            }))) return c.adFindingMethod = "ADFORMADS composite", e;
                        c.adFindingMethod = "ADFORMADS-1";
                        if (e = a.e.e(k, k.nodeName, !1, void 0, c, d, {
                                adType: 2
                            })) return e
                    }
                }
            }

            function m(b, c, d, h, g, e) {
                if (g && e && (ad = a.ay.m(["div[id='ym_" + g + "'] > iframe/=>/div[id='" + e + "']"], b, c, d))) return c.adFindingMethod = "YIELDMOADS", ad;
                if (ad = a.ay.m(["..../iframe[id$='_tpi']/$[id|([0-9]*)_tpi]/../[id='$0']", "..../iframe[id$='_tpi']/../div.ym/$[data-lf-id|([0-9]+)]/iframe/=>/[id='$0']"],
                        b, c, d)) return c.adFindingMethod = "YIELDMOADS-1", ad;
                if (ad = a.ay.m(["div.ym/iframe/=>/body/video.video-elem"], b, c, d)) return c.adFindingMethod = "YIELDMOADS-2", ad;
                if (ad = a.ay.m(["div.ym"], b, c, d)) return c.adFindingMethod = "YIELDMOADS-3", ad
            }

            function t(b, c, d, h) {
                var g = function(a, b) {
                        return a && a.moatObject && a.moatObject[b]
                    },
                    e = function(b) {
                        return a.ax.a(["div.moat_trackable"], b)[0]
                    },
                    f = function(b) {
                        return (b = (b = a.k.e(b)) && b.documentElement) && e(b)
                    },
                    k = function(b) {
                        var c;
                        b = a.ay.a(b, a.ay.b);
                        a.b.forEach(b, function(a) {
                            if (c =
                                f(a)) return !1
                        });
                        return c
                    },
                    l = function() {
                        var b = g(m, "adElement");
                        if (b !== n)
                            if (a.b.ca(b)) {
                                var d = v;
                                n = b;
                                n[I] = c.adNum;
                                n[F] = !0;
                                a.b.cc(n, d, !0);
                                (b = g(m, "adProxyElement")) && a.l.c(v, b)
                            } else a.b.cb(n) || (b = n, a.u.a(v), m.removeEventListener("adLoaded", l), b[I] = void 0, b[F] = void 0, ca())
                    };
                h = function(b) {
                    if (b) {
                        var h = g(m, "creativeType"),
                            e = g(m, "adProxyElement");
                        switch (h) {
                            case "banner":
                                if (a.b.ca(b)) {
                                    c.adFindingMethod = "Creative API - Banner";
                                    var f = a.e.e(b, b.nodeName, !1, void 0, c, d)
                                }
                                e && a.e.s(f, [e]);
                                return f;
                            case "multipart":
                                if (f =
                                    a.e.t(b, "DIV", !1, void 0, c, d, null, e)) return c.adFindingMethod = "Creative API - Multipart", f;
                            case "composite":
                                if (f = a.e.u(b, "DIV", !1, void 0, c, d, null, e)) return c.adFindingMethod = "Creative API - Composite", f;
                            case "expandable":
                                return a.b.ca(b) && (c.adFindingMethod = "Creative API - Expandable", f = a.e.e(b, b.nodeName, !1, void 0, c, d), e && a.e.s(f, [e]), m.addEventListener("adLoaded", l)), f
                        }
                    }
                };
                var m = function(b) {
                    if (a.d.fn) return a.d.fn;
                    var c = e(b);
                    c || (c = k(b));
                    c || (a.d.s ? (c = a.k.b(b), c = f(c)) : c = void 0);
                    if (!c) a: {
                        if (a.d.t && (b =
                                a.k.g(b))) {
                            var c = a.b.bl(b) === a.d.g,
                                d = a.d.e && "BODY" === b.nodeName;
                            if (!c || !d) {
                                c = e(b);
                                break a
                            }
                        }
                        c = void 0
                    }
                    c && (a.d.fn = c);
                    return c
                }(b);
                if (m) {
                    if (!g(m, "adLoaded")) return !1;
                    var n = g(m, "adElement");
                    if (!n) return !1;
                    var v = h(n);
                    return v ? v : !1
                }
            }

            function w(b, c, d, h) {
                var g = function(b) {
                    return a.ax.a(["div.celtra-ad-v3", "div.celtra-ad-v4"], b)[0]
                };
                h = function(b, c) {
                    var d, h = a.ay.a(b, a.ay.b);
                    a.b.forEach(h, function(b) {
                        if (b.offsetWidth * b.offsetHeight === c) return d = a.k.e(b).body, !1
                    });
                    return d ? d : !1
                };
                var e = function() {
                        var c, d = a.ay.a(b,
                            a.ay.b);
                        a.b.forEach(d, function(b) {
                            if ((b = (b = a.k.e(b)) && b.documentElement) && g(b)) return c = g(b), !1
                        });
                        return c
                    },
                    f = function() {
                        if (a.d.t) {
                            var c = a.k.g(b);
                            if (c) {
                                var d = a.b.bl(c) === a.d.g,
                                    h = a.d.e && "BODY" === c.nodeName;
                                d && h || (celtraDiviInParentFrame = g(c))
                            }
                        }
                    },
                    k;
                a.d.fm ? k = a.d.fm : ((k = g(b)) || (k = e()), k || (k = f()));
                var l;
                k && (l = k && k.celtra && k.celtra.viewabilityObservee);
                if (l && a.b.ca(l)) return c.adFindingMethod = "Celtra API", c = a.e.e(l, l.nodeName, !1, void 0, c, d), d = a.b.da(c), (l = h(l, d)) && a.l.c(c, l), c;
                k && !l && (a.d.fm = k);
                return !1
            }

            function r(b, c, d, h) {
                h = h || function() {
                    return !0
                };
                if (!b) return !1;
                var g = a.ax.a(["div.voxAdData"], b)[0];
                if ((g = g && g.elementToTrack) && a.b.ca(g)) return c.adFindingMethod = "Vox API", a.e.e(g, g.nodeName, !1, void 0, c, d);
                var g = a.b.s(),
                    e = null !== g && 11 > g;
                if (!e)
                    for (var f = b.getElementsByTagName("embed"), g = 0; g < f.length; g++) {
                        var k = f[g];
                        if (!0 !== k[F] && -1 === k.id.indexOf("moatPx") && a.b.ca(k) && k.getAttribute("src") && h(k)) {
                            var l = k.getAttribute("src");
                            h = a.az.a(l, k);
                            c.adFindingMethod = "AOL-1";
                            return l = a.e.e(k, l, !1, h, c, d)
                        }
                    }
                for (var m =
                        b.getElementsByTagName("object"), g = 0; g < m.length; g++)
                    if (f = m[g], a.b.ca(f) && h(f) && ("undefined" === typeof f[F] || !0 !== f[F]) && -1 == f.id.indexOf("moatPx")) {
                        for (var n = 0; n < f.children.length; n++)
                            if ("movie" === f.children[n].name || "Movie" === f.children[n].name)
                                if (l = f.children[n].value, !l || !l.match("scorecardresearch"))
                                    for (var v = 0; v < f.children.length; v++) {
                                        if (!e && "EMBED" === f.children[v].tagName) {
                                            k = f.children[v];
                                            if ("undefined" !== typeof k[F] && !0 === k[F] || -1 != k.id.indexOf("moatPx")) continue;
                                            if (a.b.ca(k) && h(k)) return h =
                                                a.az.a(l, k), c.adFindingMethod = "AOL Embed", l = a.e.e(k, l, !1, h, c, d)
                                        }
                                        if ("OBJECT" === f.children[v].tagName && (k = f.children[v], a.b.ca(k) && !0 !== k[F] && -1 === k.id.indexOf("moatPx") && h(k))) return c.adFindingMethod = "AOL Object", l = a.e.e(k, void 0, !1, void 0, c, d)
                                    }
                        f.object && f.object.Movie ? l = f.object.Movie : f.data && (l = f.data);
                        if (!l || !l.match("scorecardresearch")) return h = a.az.a(l, f), c.adFindingMethod = "SWF ads", l = a.e.e(f, l, !1, h, c, d)
                    } if (l = a.ay.p(b, c, d, h)) return l;
                l = b.getElementsByTagName("img");
                for (g = 0; g < l.length; g++)
                    if (e =
                        l[g], ("undefined" === typeof e[F] || !0 !== e[F]) && a.b.ca(e) && (k = e.getAttribute("src")) && "" !== k && -1 === document.location.href.indexOf(k) && h(e)) return c.adFindingMethod = "Standard Image Ad finding ", a.e.e(e, k, !1, void 0, c, d);
                if (b = (l = b.getElementsByTagName("canvas")) && l[0]) {
                    if (1 === l.length && a.b.ca(b)) return c.adFindingMethod = "AKQAGAPGEN Canvas", c = a.e.e(b, b.nodeName, !1, void 0, c, d);
                    if (1 < l.length) {
                        if (h(b.parentNode) && a.b.ca(b.parentNode)) return c.adFindingMethod = "AKQAGAPGEN-1", c = a.e.e(b.parentNode, b.parentNode.nodeName,
                            !1, void 0, c, d);
                        if (a.b.ca(b) && (c.adFindingMethod = "AKQAGAPGEN-2", c = a.e.e(b, b.nodeName, !1, void 0, c, d))) return a.d.s ? a.ax.b([".../body"], c, b) : a.ax.b(["../div"], c, b), c
                    }
                }
                return !1
            }

            function J(b, c) {
                var d = [];
                if (!b) return d;
                for (var h = a.b.f(b) ? b : b.getElementsByTagName("iframe"), g, e = 0; e < h.length; e++)
                    if (g = h[e], !g[F]) {
                        var f = a.k.e(g) ? !1 : !0;
                        (1 === c && f && a.b.ca(g) || 2 === c && !f) && d.push(g)
                    } return d
            }
            a.ay = {};
            a.ay.d = {};
            a.ay.d.a = [];
            a.ay.e = void 0;
            a.ay.f = function(b, c, d) {
                return a.d.ay.adFindingTimeout ? (a.b.a(a.d.ay.adFindingTimeout),
                    a.d.ay.adFindingTimeout = null, c || (c = function() {
                        a.v.b(11, d)
                    }), a.p.k(b, 9999, 500, c), !0) : !1
            };
            a.ay.c = function() {
                var b = arguments;
                a.focus.pageIsPrerendered() ? a.m.a.azsx("noLongerPreRendered", function(a) {
                    n.apply(this, b)
                }, {
                    once: !0
                }) : n.apply(this, b)
            };
            a.ay.p = function(b, c, d, h) {
                h = h || function() {
                    return !0
                };
                b = J(b, 1);
                if (b[0] && a.b.ca(b[0]) && h(b[0])) return c.adFindingMethod = "findIframeAds", a.e.e(b[0], b[0].src, !1, void 0, c, d)
            };
            a.ay.d.b = [];
            a.ay.n = function(b, c, d, h, g) {
                var e, f;
                h = a.ay.a(h || b, a.ay.b);
                for (g = 0; g < h.length; g++) {
                    f =
                        h[g];
                    var k = a.k.e(f);
                    if (k && k.documentElement) {
                        a: {
                            e = b;
                            for (var l = c, m = d, n = f, v = k, p, x = a.ay.d.b, t = 0; t < x.length; t++)
                                if (p = x[t](e, l, m, n, v)) {
                                    l.adFindingMethod = "override file friendly iframe hooks";
                                    e = p;
                                    break a
                                } e = void 0
                        }
                        if (e) return e;a: {
                            e = c;l = d;
                            if (f.id && f.id.match("ebBannerIFrame") && a.b.ca(f) && (e.adFindingMethod = "sizmek banner iframe", f = a.e.e(f, f.nodeName, !1, void 0, e, l))) {
                                e = f;
                                break a
                            }
                            e = void 0
                        }
                        if (e) return e;
                        if (e = a.ay.m(["[id='ad']"], k.documentElement, c, d)) return c.adFindingMethod = "ad",
                        e;
                        if (e = r(k.documentElement,
                                c, d)) return c.adFindingMethod = "Domsearch friendly iframe",
                        e;
                        if (e) return e;
                        if (e = a.ay.q(k.documentElement, c, d)) return c.adFindingMethod = "Domsearch again in friendly iframe",
                        e
                    }
                }
            };
            a.ay.q = function(b, c, d) {
                var h;
                b = a.ay.a(b, a.ay.b);
                for (var g = 0; g < b.length; g++)
                    if (h = b[g], (h = a.k.e(h)) && h.documentElement && (h = r(h.documentElement, c, d))) return h
            };
            a.ay.k = function(b, c, d) {
                if ("function" !== typeof d && (b = a.aw.n(b, c.adNum))) {
                    if (b === a.aw.i) return a.aw.i;
                    c.adFindingMethod = T ? "EXP: " + T : "EXP Unmapped";
                    return a.e.e(b, "div", !1,
                        void 0, c, d)
                }
            };
            a.ay.r = function(b, c) {
                if (!wa && !1 !== b.shouldKillAd) {
                    var d = (new q).getTime() - c.ao.startTime;
                    !0 !== c.em && !0 !== c.preventTryFindingAdAgain && 5E3 > d && (a.ay.s(c), b.shouldKillAd = !1)
                }
            };
            var C = a.m.a.azsx("beforeAdKilled", a.ay.r);
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("beforeAdKilled", {
                    id: C
                })
            }, {
                once: !0
            });
            a.ay.t = function(a) {};
            a.ay.s = function(b) {
                if (!0 !== b.em) {
                    delete u[b.zr];
                    a.b.a(b.cc);
                    b.periscopeManager && b.periscopeManager.killAllPixels();
                    var c;
                    (c = B && B.parentNode) && a.ay.c(c, b.ao, b, void 0,
                        function() {
                            a.u.a(b)
                        }, void 0)
                }
            };
            a.ay.m = function(b, c, d, h) {
                b = a.ax.a(b, c);
                var g;
                a.b.forEach(b, function(b) {
                    if (a.b.ca(b)) return g = b, !1
                });
                if (g) return b = a.b.bm(g) || g.src || "DIV", d.adFindingMethod = "DOMSEARCH", a.e.e(g, b, !1, void 0, d, h)
            };
            var y = function(b, c, d, h, g, e) {
                d = a.ax.a(c, d);
                d = a.b.filter(d, a.b.ca);
                if (d.length >= (e ? c.length : 1)) return c = a.b.bm(d[0]) || d[0].getAttribute("src") || "DIV", b(d, c, !1, void 0, h, g)
            };
            a.ay.u = function(b, c, d, h, g) {
                return y(a.e.u, b, c, d, h, g)
            };
            a.ay.v = function(b, c, d, h, g) {
                return y(a.e.t, b, c, d, h, g)
            };
            var H = {
                    pre: [{
                        type: "banner",
                        name: "google_image_div",
                        domSearch: ["div#google_image_div"]
                    }, {
                        type: "banner",
                        name: "bnr_atf_01",
                        domSearch: ["a#clickthru > img"],
                        whitelist: [{
                            lookup: "zMoatPS",
                            values: ["bnr_atf_01"]
                        }]
                    }]
                },
                E = function(b, c, d, h) {
                    var g = b.whitelist,
                        e = b.blacklist,
                        f = b.requireAllEls || !1;
                    if (a.b.cq(g) || a.b.dv(g, d))
                        if (a.b.cq(e) || !a.b.dv(e, d)) {
                            var k = a.b.cr(function(b) {
                                    return a.b.dw(b, d)
                                }, b.domSearch),
                                l = function() {
                                    var g;
                                    switch (b.type) {
                                        case "banner":
                                            g = a.ay.m(k, c, d, h);
                                            break;
                                        case "composite":
                                            g = a.ay.u(k, c, d, h, f);
                                            break;
                                        case "multipart":
                                            g = a.ay.v(k, c, d, h, f);
                                            break;
                                        default:
                                            return
                                    }
                                    if (g) {
                                        var e = g,
                                            l = b.mouseListenerProxy;
                                        a.b.f(l) && (1 === l.length && "auto" === l[0] ? a.d.fk = !0 : a.ax.b(l, e, c))
                                    }
                                    return g
                                };
                            return b.waitForKnownAd ? (a.ay.f(function() {
                                return l()
                            }, null, d), !0) : l()
                        }
                },
                D = function(b, c, d, h) {
                    if (a.b.f(b)) {
                        var g;
                        a.b.forEach(b, function(a) {
                            var b = E(a, c, d, h);
                            if (b) return g = b, d.adFindingMethod = [K, "-", a.name].join(""), !1
                        });
                        return g
                    }
                };
            a.ay.l = function(a, b, c) {
                return (a = D(H.pre, a, b, c)) ? a : !1
            };
            a.ay.o = function(a, b, c) {
                return (a = D(H.post, a,
                    b, c)) ? a : !1
            };
            a.ay.j = r;
            a.ay.g = function(e, f, k, l, n, r) {
                r || (r = window);
                n = n || function() {
                    return !0
                };
                var y = a.ay.j,
                    C = a.ay.k;
                if ("undefined" === typeof e) return !1;
                if (a.d.s && "HEAD" === e.tagName) {
                    var q = e.parentNode;
                    "HTML" === q.tagName && (q = q.getElementsByTagName("body"), 0 < q.length && (e = q[0]))
                }
                if (q = w(e, f, k, n)) return q;
                if (a.d.fm) return !1;
                if (q = t(e, f, k, n)) return q;
                if (a.d.fn) return !1;
                if ((q = document.getElementById("mianahwvc")) && n(q) && (f.adFindingMethod = "APPSCOPE", q = a.e.e(q, q.nodeName, !1, void 0, f, k)) || (q = a.ay.l(e, f, k))) return q;
                if (q = a.ay.m(["[id='ad']"], e, f, k)) return f.adFindingMethod = "DOM Id = ad", q;
                if (q = a.ay.m(["../body/ins[class='dcmads'][data-dcm-rendering-mode='script']"], e, f, k)) return f.adFindingMethod = "DCM ins", q;
                if (q = a.ay.m(["div.teads-player/iframe", "div[id^='playArea']"], e, f, k)) return f.adFindingMethod = "teads", q;
                if (q = a.ay.m(["div.avalanche"], e, f, k)) return f.adFindingMethod = "avalanche", q;
                if (q = g(e, f, k, n, r)) return q;
                if (a.d.fo) return !1;
                if (q = f && f.ntvDomSearch) return e = a.b.getElementsByClassName(q), e = a.b.filter(e, a.b.ca),
                    1 < e.length && (q = a.e.u(e, "DIV", !1, void 0, f, k)) ? (f.adFindingMethod = "NativoAds composite ads", q) : 1 === e.length && (f.adFindingMethod = "NativoAds single ad", q = a.e.e(e[0], e[0].nodeName, !1, void 0, f, k)) ? q : !1;
                if (q = a.ay.m(["div.str-adunit", "[data-str-native-key]", "[data-str-sibling]", "..../../[data-str-native-key]"], e, f, k)) return f.adFindingMethod = "Sharethrough", q;
                if (q = a.ay.m([".../[data-gg-moat]/[data-gg-moat-ifr]", ".../[data-gg-moat]", "[data-gg-moat]"], e, f, k)) return f.adFindingMethod = "GumGum", q;
                var q = (q = a.d.s ?
                        e.ownerDocument.documentElement : e) && q.getElementsByTagName("script"),
                    u = {},
                    X, J;
                q && 0 < q.length && (u.jpd = /ads\.jetpackdigital\.com\/lineitems\/(\d+)\/jpd/, u.adform = /adform\.(?:com|net)\/adfscript\/?\?bn=([0-9]+)/, u.quartz = /ads\.qs\.com/, u.yieldmo = /ads\.yieldmo\.com\/.*\&p=([0-9]+).*\&lf=([0-9]+)/, u.yieldmo2 = /static\.yieldmo\.com\/ym\.[a-z0-9]{2}\.js/, a.b.forEach(q, function(a) {
                    for (var b in u)
                        if (u.hasOwnProperty(b)) {
                            var c = a && a.getAttribute("src");
                            if (c && (X = c.match(u[b]))) return J = b, !1
                        }
                }));
                a.ax.a([".../[class*='jpeditorialunit']",
                    ".../[class*='jpbanner']", ".../[id*='jpplatform']", ".../[id*='jpd_adhesion']"
                ], e)[0] && (J = "jpd");
                if (J && "jpd" === J && (q = d(e, f, k, X && X[1], n)) || (q = c(e, f, k, n)) || J && "adform" === J && (q = p(e, f, k, X && X[1], n, r))) return q;
                if (q = h(e, f, k, n, r)) return f.adFindingMethod = "TRIPLELIFTADS: Moat script query string logic - " + (f.tlview_id ? "tlview_id" : "tlviewID"), q;
                if (q = v(e, f, k, n, r)) return f.adFindingMethod = "TRIPLELIFTADS: Domsearch tleid attribute", q;
                if (q = x(e, f, k, n, r)) return f.adFindingMethod = "TRIPLELIFTADS: Domsearch based on window",
                    q;
                if (q = a.ay.m(["[id='qzad']"], e, f, k)) return f.adFindingMethod = "Quartz", q;
                l = q = "";
                J && a.b.be(["yieldmo", "yieldmo2"], J) && (q = X && X[1], l = X && X[2]);
                if (q = m(e, f, k, n, q, l)) return q;
                if (r = r.weborama_display_tag && r.weborama_display_tag.mediapath) {
                    q = /https?:\/\/([0-9a-zA-Z\.\/]+)/;
                    r = r.match && r.match(q)[1];
                    l = a.ax.c(["...../div[id^='scr_'][id*='remotediv']"], e);
                    for (var H = 0; H < l.length; H++)
                        if (q = a.ay.m(["${[src*='" + r + "']}", "+/${[src*='" + r + "']}"], l[H], f, k)) return f.adFindingMethod = "Weborama", q
                }
                if ((q = C(e, f, k)) || (q = y(e, f,
                        k, n))) return q;
                if (q = a.ay.n(e, f, k)) return f.adFindingMethod = "friendly iframe", q;
                if (l = a.k.g(e))
                    if (q = a.ay.n(l, f, k)) return f.adFindingMethod = "find iframe parent", q;
                if (a.d.t || l)
                    if (l = l || a.k.g(e))
                        if (r = a.b.bl(l) === a.d.g, q = a.d.e && "BODY" === l.nodeName, !r || !q) {
                            if (q = C(l, f, k)) return f.adFindingMethod = "iframe parent expandable", q;
                            if (q = y(l, f, k, n)) return f.adFindingMethod = "iframe parent findAd", q
                        } return (q = b(e, f, k, n)) ? (f.adFindingMethod = "Undertone", q) : (q = a.ay.o(e, f, k)) ? q : (q = a.ay.m(["div.str-content/div.adunit", "article.str-ent-native-card",
                    "div.str-card-exp.str-quad", "div.str-adunit.str-card-exp", "#theContainer"
                ], e, f, k)) ? (f.adFindingMethod = "Domsearch Late", q) : (q = a.ay.m(["../iframe#verve-banner", ".../body/iframe#verve-expandable/=>/div.content", ".../body/iframe#verve-expandable", "iframe#verve-banner/=>/div.content", "iframe#verve-banner"], e, f, k)) ? (f.adFindingMethod = "Verve", q) : !1
            };
            a.ay.a = J;
            a.ay.w = function(b, c, d) {
                if (a.d.e && b && a.b.ca(b) && a.ab.e.a(b, c)) {
                    "width" == a.ab.a && a.ab.c();
                    a.d.fp = !0;
                    c.skin = 1;
                    a.s && (a.s.n = function() {
                        return !1
                    });
                    var h =
                        a.b.bm(b);
                    if (b = a.e.e(b, h || b.nodeName, !1, void 0, c, d)) return c.adFindingMethod = "WALLPAPERS ADS", b
                }
            };
            a.ay.x = 1;
            a.ay.b = 2;
            a.ay.y = 500;
            a.ay.i = 20;
            a.ay.z = {
                object: 1,
                embed: 1,
                img: 1,
                iframe: 1
            }
        })(p);
        (function(a) {
            function n(a) {
                "object" === typeof a && (a.fq = 0, a.gm = 0, a.ch = 0, a.ga = 0, a.gh = 0, a.hasOwnProperty("lx") && delete a.lx, a.um = 1)
            }

            function f(a, c) {
                a.zMoatGSR = "1";
                a.ph = "";
                a.pj = "standard";
                a.zGSRC = "1";
                c.zMoatCHNLS && (a.gv = c.zMoatCHNLS);
                c.zMoatGSCACHE && (a.hw = c.zMoatGSCACHE)
            }

            function k(b) {
                var c = a.d.g.googletag,
                    c = c && "function" ===
                    typeof c.pubads && c.pubads(),
                    d = -1;
                if (c && "function" === typeof c.getSlots) try {
                    var g = c.getSlots(),
                        d = a.b.f(g) ? g.length : -1
                } catch (e) {}
                b.vb = d
            }

            function e(b, c) {
                a.b.ar(a.d.be) && 5E3 > encodeURIComponent(a.d.be).length && (b.gu = a.d.be);
                b.id = a.d.bf ? "1" : "0";
                b.ii = a.d.ax
            }

            function l(b, c) {
                if (a.d.fr) {
                    var d = b.cm;
                    "number" === typeof d && (b.pc = d);
                    b.cm = 1;
                    !c && a.b.bc() && AB_SCAFFOLD.sampling.set({
                        multiplier: 1,
                        enabled: !1
                    })
                }!c && a.b.dy() && AB_SCAFFOLD.sampling.getQueryString(b)
            }

            function g(b, c) {
                var d, g = [],
                    e, f = a.b.bd() ? 2048 : 7750,
                    k = c || {};
                e = {};
                b.fs = "182630";
                for (d in b) b.hasOwnProperty(d) && (1 != b.e || "x" !== d && "y" !== d && "c" !== d ? g.push(encodeURIComponent(d) + "=" + encodeURIComponent(b[d])) : e[d] = b[d].split("a"));
                d = g.join("&");
                var g = f - d.length,
                    l = 0;
                if ("undefined" !== typeof e.x) {
                    for (var n = 0, p = 0; p < e.x.length; p++)
                        if (n += e.x[p].length + (e.y[p] ? e.y[p].length : 0) + (e.c[p] ? e.c[p].length : 0), n < g) l++;
                        else break;
                    0 < l && (d += "&x=" + e.x.slice(0, l - 1).join("a"), d += "&y=" + e.y.slice(0, l - 1).join("a"), d += "&c=" + e.c.slice(0, l - 1).join("a"))
                }
                for (var r in k) k.hasOwnProperty(r) &&
                    (e = "&" + encodeURIComponent(r) + "=" + encodeURIComponent(k[r]), e.length + d.length < f && (d += e));
                d = d.replace(/\x27/g, "%27");
                try {
                    var f = d,
                        y;
                    var k = d,
                        u = b.i,
                        B = new q,
                        D = [B.getFullYear(), ("0" + (B.getMonth() + 1)).slice(-2), ("0" + B.getDate()).slice(-2)].join("-"),
                        k = k + (u + D),
                        u = 0;
                    if (0 == k.length) y = u;
                    else {
                        for (B = 0; B < k.length; B++) var E = k.charCodeAt(B),
                            D = u,
                            D = (D << 5) - D + E,
                            u = D & D;
                        y = t.abs(u)
                    }
                    d = f + ("&na=" + y)
                } catch (G) {}
                return d
            }

            function d(b, c) {
                b.j = 25 == c ? "string" == typeof a.d.f && a.d.f.slice(0, 500) || "" : a.b.aw(a.d.f);
                if (!a.d.e) {
                    var d = a.b.aa();
                    d && (b.lp = d)
                }
            }
            a.v = {};
            var c = "zMoatMGV_MAX zMoatMMV_MAX zMoatMMV zMoatMGV zMoatMData zMoatMSafety zMoatPS zMoatHT zMoatWD zMoatST zMoatTEAM zMoatSOC zMoatPG zMoatAPP zMoatBUZ zMoatISAPP zMoatCURL zMoatDev zMoatPLATFORM zMoatRetail zMoatPSB zMoatAdUnitRetail zMoatOrigSlicer1 zMoatOrigSlicer2 zMoatAltSL zMoatJS zMoatAppKey zMoatOptimize zMoatOptimize2 zMoatAR zMoatWDAC zMoatDR zMoatAU zMoatBeta cadf gptMoat_pg gptMoat_appname gptMoat_pos gptMoat_mivr zMoatAdUnit1 zMoatAdUnit2 zMoatAdUnit3 zMoatAdUnit4 zMoatNHTCode".split(" ");
            a.v.c = function(b, c) {
                b.hp = 1;
                "undefined" !== typeof c.zMoatAPIF && (b.zMoatAPIF = c.zMoatAPIF);
                c.zMoatAdUnit1 && (b.zMoatAdUnit1 = c.zMoatAdUnit1);
                c.zMoatAdUnit2 && (b.zMoatAdUnit2 = c.zMoatAdUnit2);
                c.zMoatAdUnit3 && (b.zMoatAdUnit3 = c.zMoatAdUnit3);
                c.zMoatAdUnit4 && (b.zMoatAdUnit4 = c.zMoatAdUnit4);
                a.d.e && window.top.document && window.top.document.hasFocus && "function" === typeof window.top.document.hasFocus && (b.wf = window.top.document.hasFocus() ? 1 : 0)
            };
            a.v.b = function(b, h, p, x, q) {
                a.x.b(h, x);
                var m = {};
                m.e = b;
                a.b.cl(m, p);
                m.i = K;
                a.v.c(m,
                    h);
                k(m);
                a.h && (m.cm = a.b.ay(a.h, a.i).multiplier);
                try {
                    m.kq = a.d.g && a.d.g.devicePixelRatio
                } catch (t) {
                    m.kq = 1
                }
                m.hq = a.d.p ? 1 : 0;
                m.hs = a.d.m ? 1 : 0;
                m.hu = a.d.ak ? 1 : 0;
                m.hr = a.d.ag ? 1 : 0;
                m.ht = a.d.an ? 1 : 0;
                m.dnt = a.d.fg ? 1 : 0;
                if (11 === b) {
                    a.m.a.zaxs("adNotFound");
                    b = [];
                    for (var z in Ca) Ca.hasOwnProperty(z) && b.push(z + "=" + Ca[z]);
                    m.k = b.join("&").slice(0, 300)
                }
                if (!(m.e in Da)) {
                    m.bq = a.d.ba;
                    1 === h.skin && (m.wp = 1 === h.isSkin ? 1 : 1 === h.isAolSkin ? 2 : 3);
                    m.f = Number(!Oa);
                    a.d.br && (m.nh = 1);
                    d(m, m.e);
                    m.t = h.startTime;
                    m.de = h.rand;
                    m.m = 0;
                    m.ar = "da8ed23e15-clean";
                    m.iw = "488ebc3";
                    a.b.cp(m, "ai", r.z);
                    a.b.cp(m, "wr", r.ACTIVETIMEUNTILSCROLL);
                    m.q = r.m++;
                    m.cb = sa ? 1 : 0;
                    m.ym = a.d.c && a.d.c() ? 1 : 0;
                    m.cu = ta;
                    m.ll = a.d.dk || 0;
                    a.b.cp(m, "lm", a.d.dg());
                    m.ln = a.d.s ? 1 : 0;
                    m.r = a.s.i;
                    a.b.cl(m, a.focus.getQueryString());
                    a.x.j(h, m);
                    "undefined" !== typeof h && (m.d = h.moatClientLevel1 + ":" + h.moatClientLevel2 + ":" + h.moatClientLevel3 + ":" + h.moatClientLevel4, a.b.forEach(c, function(a) {
                            m[a] || h[a] && "-" !== h[a] && (m[a] = h[a])
                        }), a.b.ar(a.d.i) && (ad.ao.zMoatCURL = a.d.i), !m.zMoatCURL && h.zMoatCURL && (m.zMoatCURL = h.zMoatCURL),
                        !m.zMoatDev && h.zMoatDev && (m.zMoatDev = h.zMoatDev), h.adFindingMethod && (m.hv = h.adFindingMethod), f(m, h), e(m, h), h.zMoatOptimize && (m.zMoatOptimize = h.zMoatOptimize), m.bo = h.moatClientSlicer1, m.bp = h.moatClientSlicer2, m.bd = h.zMoatPS || "Position Not Identified", m.zMoatPS = h.zMoatPS || "Position Not Identified", m.zMoatPS = h.zMoatPS || "Position Not Identified", m.zMoatAltSL = "zMoatAdUnit1:zMoatAdUnit2:zMoatPS", m.zMoatOrigSlicer1 = h.zMoatOrigSlicer1, m.zMoatOrigSlicer2 = h.zMoatOrigSlicer2, m.dfp = "0,4", m.la = h.zMoatOrigSlicer2,
                        m.gw = "turner763610601596", m.fd = "1");
                    a.d.d() && (a.d.da() && (a.q.m(m), a.q.f() && !m.hasOwnProperty("fq") && (m.fq = 1)), a.q.b(m), a.q.q(m, h));
                    a.d.cv() && (a.d.cz() && a.t.i(null, h, m), a.t.j(m));
                    a.n.p(m);
                    m.ac = 1;
                    m.it = a.ay.y;
                    a.d.ap().isInApp && (m.lv = a.d.ct(), m.zl = a.d.ed() ? 1 : 0, a.d.cu() ? (a.b.bw() && (m.wo = 1), (z = a.b.bs(a.d.bg)) && (m.zMoatMMAKns = z)) : a.d.dd() && (m.lx = 1));
                    a.e.c() && n(m);
                    m.ti = L;
                    m.ih = 1;
                    a.b.dy() && (m.sk = AB_SCAFFOLD.scaffoldID, m.tn = AB_SCAFFOLD.AB_TEST_NAME);
                    (z = a.bd.a()) && (m.pe = z);
                    l(m, q);
                    b = g(m);
                    z = va;
                    b = a.v.d(h, b + "&cs=0",
                        m);
                    if (!0 === q) return {
                        qs: m,
                        res: b
                    };
                    b.shouldSendPixel && b.querystring && r.yh.yi(b.querystring, z)
                }
            };
            a.v.a = function(b, h, p) {
                if (window && window.closed || !b || !0 === b.ep) return !1;
                a.v.c(h, b.ao);
                k(h);
                try {
                    h.kq = a.d.g && a.d.g.devicePixelRatio
                } catch (q) {
                    h.kq = 1
                }
                a.ay.t(b);
                if ("undefined" !== typeof b.ao && (2 !== b.an || 1 !== h.e && 3 !== h.e) && !(h.e in Da)) {
                    h.lo = b.FIND_AD_TRIES;
                    b.proxyTrackingEnabled && (h.tr = 1);
                    h.uk = a.b.bs(a.d.bg);
                    var x = a.b.bu(),
                        A = a.b.bt(x.results),
                        m = {
                            article: "pk",
                            page_height: "wk",
                            meta_properties: "rk",
                            favicon: "tk"
                        };
                    a.b.forEach(A,
                        function(a) {
                            h[m[a]] = x.results[a] ? 1 : 0
                        });
                    b.hasNonIframeListener && (h.ni = 1);
                    var z = b.ag,
                        A = {},
                        w = a.o.b(b.zr);
                    if (9 === h.e && 2 === h.q || 25 === h.e) {
                        for (var u in z) z.hasOwnProperty(u) && "" !== u && "undefined" !== typeof z[u] && -1 === u.indexOf("dvContains") && -1 === u.indexOf("indexOf") && -1 === u.toLowerCase().indexOf("clicktag") && (A["z" + u] = z[u]);
                        h.e = 25
                    }
                    0 === b.an && (h.dc = b.WMODE);
                    "string" !== typeof b.ae || 0 != h.e && 25 != h.e ? h.ak = "-" : (u = a.d.m ? 700 : 1200, h.ak = b.ae.length <= u ? b.ae : b.ae.slice(0, u));
                    b.bi > b.bg && (b.bg = b.bi);
                    b.bm > b.bk && (b.bk = b.bm);
                    h.i = K;
                    a.b.cl(h, a.f.r(!0));
                    h.bq = a.d.ba;
                    1 === b.ao.skin && (h.wp = 1 === b.ao.isSkin ? 1 : 1 === b.ao.isAolSkin ? 2 : 3);
                    h.g = b.aq.g++;
                    b.isSREMeasurable || b.setDimensions();
                    a.d.fp ? (z = a.d.u(a.d.g), u = z.width, z = z.height) : b.compositeAdAreaPx ? (u = b.compositeAdAreaPx, z = 1) : (u = b.INITIAL_WIDTH, z = b.INITIAL_HEIGHT);
                    u = u || 0;
                    z = z || 0;
                    0 < u && 0 < z && (b.isSREMeasurable = !0);
                    h.hq = a.d.p ? 1 : 0;
                    h.hs = a.d.m ? 1 : 0;
                    h.hu = a.d.ak ? 1 : 0;
                    h.hr = a.d.ag ? 1 : 0;
                    h.ht = a.d.an ? 1 : 0;
                    h.dnt = a.d.fg ? 1 : 0;
                    a.n.a() && a.n.realEstateMeasurements && (u = a.n.realEstateMeasurements.w, z = a.n.realEstateMeasurements.h);
                    h.h = z;
                    h.w = u;
                    a.d.d() && (h.om = a.e.j());
                    a.d.k() && (u = a.d.v(), h.rm = 0 < u.width && 0 < u.height && a.n.realEstateMeasurements ? 1 : 0);
                    try {
                        a.d["do"]() && b && b.elementRect && (h.fy = b.elementRect.left, h.gp = b.elementRect.top)
                    } catch (q) {}
                    f(h, b.ao);
                    e(h, b.ao);
                    a.h && (h.cm = a.b.ay(a.h, a.i).multiplier);
                    h.f = Number(!Oa);
                    d(h, h.e);
                    h.t = b.ao.startTime;
                    h.de = b.ao.rand;
                    h.cu = ta;
                    h.m = h.m || a.b.bi(b);
                    h.ar = "da8ed23e15-clean";
                    h.iw = "488ebc3";
                    h.cb = sa ? 1 : 0;
                    h.ym = a.d.c && a.d.c() ? 1 : 0;
                    h.ll = a.d.dk || 0;
                    a.b.cp(h, "lm", a.d.dg());
                    h.ln = a.d.s ? 1 : 0;
                    h.r = a.s.i;
                    a.b.cl(h,
                        a.r.c());
                    a.d.e && (h.gh = 1);
                    a.d.br && (h.nh = 1);
                    h.xx = a.d.fq + ":" + a.f.ao();
                    h.td = a.d.dh;
                    a.d.w();
                    h.qa = a.d.z;
                    h.qb = a.d.aa;
                    h.qi = a.d.x;
                    h.qj = a.d.y;
                    h.qf = a.d.ab;
                    h.qe = a.d.ac;
                    h.qh = a.d.ad;
                    h.qg = a.d.ae;
                    try {
                        h.lk = b && b.elementRect && b.elementRect.top + a.d.af || "undefined"
                    } catch (q) {}
                    isNaN(a.d.j) || (h.lb = a.d.j);
                    h.le = Sa ? 1 : 0;
                    a.f && void 0 !== a.f.ah && (h.lf = a.f.ah);
                    a.f && void 0 !== a.f.aa && (h.lg = a.f.aa);
                    a.f && void 0 !== a.f.aj && (h.lh = a.f.aj);
                    a.d.dx() && (h.gm = 1, a.d.e && "sframe" === w && (h.fq = 0));
                    a.d.dp() && (h.io = 1);
                    a.d.ch && (h.fa = 1);
                    "number" !== typeof a.d.cj ||
                        isNaN(a.d.cj) || (h.zz = a.d.cj);
                    a.d.cl() && (h.fx = 1);
                    a.d.bt() && a.d.bv() && (h.mm = 1);
                    a.d.cr() && (h.hx = 1);
                    if (a.r && a.r.a()) h.ch = 1, h.gh = 1;
                    else if (a.s && a.s.a) {
                        a.d.cc && (h.ss = 1);
                        a.d.ey && (h.ie = 1);
                        if (b && b.periscopeManager) {
                            u = !a.focus.pageIsVisible() && b && b.counters && b.counters.strictDwell && 0 == b.counters.strictDwell.tCur && 21 == h.e;
                            z = a.b.bf && "0" != a.b.bf();
                            if (b.periscopeManager.measurable || !a.d.e && u && z) h.ch = 1;
                            b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (h.ga = 1)
                        } else h.ch = 1;
                        "undefined" !== typeof a.s.am && b && b.ao &&
                            b.ao.startTime && !isNaN(b.ao.startTime) && (u = a.s.am - b.ao.startTime, h.fg = 0 <= u ? u : 0)
                    } else h.ch = 0;
                    h.vv = w ? b.viewabilityMethod[w] : 0;
                    u = b.viewabilityMethod;
                    h.vw = (u.strict || 0) + ":" + (u.sframe || 0) + ":" + (u.pscope || 0);
                    u = b.viewabilityPercent;
                    h.vp = u[w];
                    h.vx = u.strict + ":" + u.sframe + ":" + u.pscope;
                    (u = a.bd.a()) && (h.pe = u);
                    a.b.cl(h, a.o.u(b.zr, h));
                    a.b.cl(h, a.focus.getQueryString());
                    a.b.cl(h, a.as.b(b.zr));
                    a.b.cl(h, a.be.a(b.zr));
                    a.b.cl(h, b.counters.getQs());
                    b.px2 && b.px2.inSample && !b.px2.success && (h.zMoatIDF = 1);
                    a.bf.a(b, h);
                    a.af.b(b,
                        h);
                    a.b.cp(h, "ai", r.z);
                    a.b.cp(h, "wr", r.ACTIVETIMEUNTILSCROLL);
                    a.b.cp(h, "ap", b.cb);
                    a.b.cp(h, "ax", b.bg);
                    a.b.cp(h, "ay", b.bi);
                    a.b.cp(h, "az", b.bk);
                    a.b.cp(h, "ba", b.bm);
                    a.b.cp(h, "aw", b.bc);
                    a.b.cp(h, "bg", b.bd);
                    a.b.cp(h, "be", b.be);
                    a.b.cp(h, "bc", b.bw);
                    a.b.cp(h, "bf", b.by);
                    a.b.cp(h, "bh", b.bx);
                    a.b.cp(h, "bz", b.cu);
                    h.cl = t.round(100 * b.IR5.AREA / (h.w * h.h));
                    0 < b.aq[2] && (h.au = b.aq[2] - 1);
                    0 < b.aq[3] && (h.av = b.aq[3] - 1);
                    0 < b.aq[23] && (h.by = b.aq[23] - 1);
                    h.at = b.dm;
                    a.x.j(b.ao, h);
                    h.d = b.ao.moatClientLevel1 + ":" + b.ao.moatClientLevel2 +
                        ":" + b.ao.moatClientLevel3 + ":" + b.ao.moatClientLevel4;
                    b.ao.zMoatOptimize && (h.zMoatOptimize = b.ao.zMoatOptimize);
                    h.bo = b.ao.moatClientSlicer1;
                    h.bp = b.ao.moatClientSlicer2;
                    h.bd = b.ao.zMoatPS || "Position Not Identified";
                    h.zMoatPS = b.ao.zMoatPS || "Position Not Identified";
                    h.zMoatPS = b.ao.zMoatPS || "Position Not Identified";
                    h.zMoatAltSL = "zMoatAdUnit1:zMoatAdUnit2:zMoatPS";
                    h.gw = "turner763610601596";
                    h.zMoatOrigSlicer1 = b.ao.zMoatOrigSlicer1;
                    h.zMoatOrigSlicer2 = b.ao.zMoatOrigSlicer2;
                    h.dfp = "0,4";
                    h.la = b.ao.zMoatOrigSlicer2;
                    a.b.forEach(c, function(a) {
                        h[a] || b.ao[a] && "-" !== b.ao[a] && (h[a] = b.ao[a])
                    });
                    a.b.ar(a.d.i) && (b.ao.zMoatCURL = a.d.i);
                    !h.zMoatCURL && b.ao.zMoatCURL && (h.zMoatCURL = b.ao.zMoatCURL);
                    !h.zMoatDev && b.ao.zMoatDev && (h.zMoatDev = b.ao.zMoatDev);
                    b.ao.adFindingMethod && (h.hv = b.ao.adFindingMethod);
                    h.ab = b.an;
                    h.ac = 1;
                    h.fd = "1";
                    h.kt = w;
                    h.it = a.ay.y;
                    a.d.d() && (b.aa === a.d.g.document.body && (h.zg = 1), a.d.da() && (a.q.m(h), a.q.f() && !h.hasOwnProperty("fq") && (h.fq = 1)), a.q.b(h));
                    a.d.cv() && (b.aa === a.d.g.document.body && (h.zg = 1), a.d.cz() && a.t.i(b,
                        b.ao, h), a.t.j(h));
                    a.n.p(h);
                    b.bi = b.bg;
                    b.bm = b.bk;
                    a.ac.g(b) && (h.fz = 1);
                    w = a.ac.d(b.zr);
                    h.oq = w ? 1 : 0;
                    "undefined" !== typeof b.zr && (h.ot = a.ac.h[b.zr].stateMask.toString(16));
                    a.d.ap().isInApp && (h.lv = a.d.ct(), h.zl = a.d.ed() ? 1 : 0, a.d.cu() ? (a.b.bw() && (h.wo = 1), (w = a.b.bs(a.d.bg)) && (h.zMoatMMAKns = w)) : a.d.dd() && (h.lx = 1));
                    b.debugData && (h.zMoatJS = b.debugData.getValue());
                    h.ti = L;
                    h.ih = 1;
                    a.b.dy() && (h.sk = AB_SCAFFOLD.scaffoldID, h.tn = AB_SCAFFOLD.AB_TEST_NAME);
                    b && b.isMeasurabilityDisabled() && n(h);
                    a.e.c() && n(h);
                    a.b.be([2], h.e) &&
                        b.aq.tc++;
                    h.tc = b.aq.tc;
                    l(h, p);
                    u = g(h, A);
                    w = va;
                    if (p) return h;
                    p = a.v.d(b.ao, u + "&cs=0", h, A);
                    p.shouldSendPixel && p.querystring && r.yh.yi(p.querystring, w)
                }
            };
            a.v.e = function(a, c) {
                a.zMoatSrcd = a.d;
                a.zMoatSrcbo = a.bo;
                a.zMoatSrcbp = a.bp;
                a.zMoatSrcbd = a.bd;
                a.d = (c.moatClientLevel1 || "") + ":";
                a.d += (c.moatClientLevel2 || "") + ":";
                a.d += (c.moatClientLevel3 || "") + ":";
                a.d += c.moatClientLevel4 || "";
                return a
            };
            a.v.f = function(b, c, d, e, f, k, l) {
                b = "extraPx_" + b;
                c[b] || (c[b] = {});
                e = a.b.i(e);
                e.zMoatSrci = e.i;
                e.i = d;
                l && (e = a.v.e(e, l));
                if (a.f.ap && !c[b].timestampsReset)
                    for (var n =
                            0; n < a.f.ap.length; n++) {
                        var p = a.f.ap[n];
                        p.zMoatSrci = p.i;
                        p.i = d;
                        l && (p = a.v.e(p, l));
                        p = g(p) + "&cs=0";
                        r.yh.yi(p, f)
                    }
                c[b].timestampsReset || (c[b].timestampsReset = !0, e.lc && (e.lc = 0), e.cd && (e.cd = 0), e.sm && (e.sm = 0), e.fv && (e.fv = 0), e.pn && (e.pn = 0), e.lt && (e.lt = 0), e.ba && (e.ba = 0), e.sq && (e.sq = 0), e.gg && (e.gg = 0), e.mu && (e.mu = 0), e.si && (e.si = 0), e.mc && (e.mc = 0), e.dt && (e.dt = 0), e.gt && (e.gt = 0), e.ao && (e.ao = 0), e.mk && (e.mk = 0), e.dr && (e.dr = 0), e.ev && (e.ev = 0), e.ge && (e.ge = 0), e.mx && (e.mx = 0), e.an && (e.an = 0), e.cf && (e.cf = 0), e.gl && (e.gl = 0), e.mw &&
                    (e.mw = 0), e.xb && (e.xb = 0), e.db && (e.db = 0), e.am && (e.am = 0), e.fj && (e.fj = 0), e.my && (e.my = 0), e.mz && (e.mz = 0), e.cn && (e.cn = 0), e.es && (e.es = 0), e.sa && (e.sa = 0), e.pf && (e.pf = 0), e.ay && (e.ay = 0), e.bx && (e.bx = 0));
                b = g(e, k);
                r.yh.yi(b + "&cs=0", f)
            };
            a.v.d = function(b, c, d, e) {
                b = !0;
                if (a.h && (b = a.b.bb(), !b)) {
                    for (var f = [1, 2, 3, 23, 25], k = 0, l = f.length; k < l; k++)
                        if (d.e == f[k]) {
                            b = !0;
                            break
                        } b && (d.cm = 0, c = g(d, e), c += "&cs=0")
                }
                return {
                    shouldSendPixel: b,
                    querystring: c
                }
            };
            a.v.g = function(a, c) {
                if (2 !== a.an || 1 !== c.e && 3 !== c.e)(new Image(1, 1)).src = ""
            };
            a.v.h =
                function(b) {
                    var c = a.v.i(b.data);
                    c.i = a.b.dx(c.i, b.iKeySuffix);
                    var d = g(c, b.flashVarsForQS) + "&cs=0";
                    if (b.sendNow) {
                        var e = b.useBeacon;
                        if (a.f.ap)
                            for (var f = 0; f < a.f.ap.length; f++) {
                                var k = a.f.ap[f];
                                k.i = a.b.dx(k.i, b.iKeySuffix);
                                k = g(k) + "&cs=0";
                                r.yh.yi(k, b.pixelURL)
                            }
                        e ? navigator.sendBeacon("//bn.pixel.moatads.com/pixel.gif?" + d, "") : r.yh.yi(d, b.pixelURL)
                    }
                    return c
                };
            a.v.i = function(b) {
                b = a.b.i(b);
                for (var c = "am an ao ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fv".split(" "),
                        d = 0; d < c.length; d++) b[c[d]] && (b[c[d]] = 0);
                return b
            };
            a.v.j = function(a, c) {
                return g(a, c)
            };
            a.v.k = function(b) {
                var c = {
                    e: 16
                };
                c.q = b.aq[16]++;
                a.v.a(b, c)
            };
            a.v.l = function(b) {
                var c = !1,
                    d = a.v.b(8, b.ao, !1, !1, !0);
                if (d && d.qs && d.qs.d) {
                    c = d.qs.d.split(":");
                    c = {
                        viewHash: K,
                        moatClientLevel1: c[0],
                        moatClientLevel2: c[1],
                        moatClientLevel3: c[2],
                        moatClientLevel4: c[3],
                        tagStartTime: a.d.q
                    };
                    if (b && b.ao)
                        for (var g in b.ao) b.ao.hasOwnProperty(g) && -1 != g.indexOf("zMoat") && (c[g] = b.ao[g]);
                    for (g in d) d.hasOwnProperty(g) && -1 != g.indexOf("zMoat") &&
                        (c[g] = d[g])
                }
                return c
            };
            a.v.m = function(b) {
                var c = {
                    e: 8
                };
                c.q = b.aq[8]++;
                return a.v.a(b, c, !0)
            }
        })(p);
        (function(a) {
            function n(e, f, g, d, c) {
                var b = 1E4;
                a.d.ap().isInApp && (b = 500);
                (new q).getTime();
                this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                this.getMaxContinuous = function() {
                    return t.max(this.tContinuous, this.tMaxContinuous)
                };
                this.reset = function() {
                    this.tLast = this.tCur = 0
                };
                this.update = function(a, g, f) {
                    e(a) ? (g = t.min(g, b), a = typeof d, g && 0 > g && (g = 0), this.tCur += g, this.tContinuous += g, "number" === a && 0 < d ? this.tCur >
                        d && (this.tCur = d) : "function" === a && (g = d(), "number" === typeof g && this.tCur > g && 0 < g && (this.tCur = g))) : (this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0);
                    c && c(this.tCur)
                };
                this.getQs = function(a) {
                    a = this.query(a);
                    this.tLast = this.tCur;
                    return a
                };
                this.query = function(a) {
                    a = a || {};
                    this.tLast > this.tCur && (this.tLast = this.tCur);
                    f && g && (a[f] = this.tCur, a[g] = this.tLast);
                    return a
                }
            }
            a.u = {};
            a.u.g = {};
            a.u.g.a = [];
            a.u.g.b = [];
            var f = !1,
                k = {};
            a.u.i = function() {
                if (!f) {
                    f = !0;
                    try {
                        var e = r.swde.azsx("scroll",
                            a.u.j);
                        a.m.a.azsx("allLocalAdsKilled", function() {
                            r.swde.sxaz("scroll", {
                                id: e
                            })
                        }, {
                            once: !0
                        })
                    } catch (k) {}
                }
            };
            a.u.k = function(e, f) {
                try {
                    if (a.d.c()) return !0;
                    var g = e.aa,
                        d = a.b.bn(g, 5),
                        c = d && (6 == d.length || 1 <= d.length && "HTML" === d[d.length - 1].nodeName);
                    f = f || e.WINDOW || a.b.bl(g);
                    return !(g && f && c) || "Unicast Generic" === T && a.aw.k(e.zr) && (3 > g.offsetWidth || 3 > g.offsetHeight) || g.ownerDocument && g.ownerDocument.body && !g.ownerDocument.body.contains(g) ? !1 : !0
                } catch (b) {
                    return !1
                }
            };
            a.u.l = function() {
                function e() {
                    if (!b) try {
                        b = !0, f(c),
                            b = !1
                    } catch (a) {
                        throw b = !1, a;
                    }
                }

                function f(a) {
                    var b = a.Moat;
                    a = a.domNodesIdToAd;
                    for (var c in a) a.hasOwnProperty(c) && b.aw.m("loop", c);
                    b.u.m();
                    c = (new q).getTime();
                    a = t.max(t.min(c - g, d), 0);
                    b.m.a.zaxs("view:tick", a, c);
                    g = c;
                    b.ba.c()
                }
                var g = (new q).getTime(),
                    d = 1E4;
                a.d.ap().isInApp && (d = 500);
                var c = {
                        Moat: a,
                        domNodesIdToAd: u
                    },
                    b = !1;
                a.m.a.azsx("periscope:onStateChange", e);
                a.m.a.azsx("viewCounterStarted", e);
                var h = "MOAT_VIEW_LOOP_ID_" + (new q).getTime();
                a.p.g(f, c, 200, h);
                return a.b.dk([c], f)
            }();
            a.u.m = function() {
                var e, f;
                for (f in u) u.hasOwnProperty(f) &&
                    (e = u[f], a.u.k(e, e.WINDOW) || a.u.a(e))
            };
            a.u.a = function(e) {
                if (!0 !== e.ep) {
                    if (!wa) {
                        var f = {
                            shouldKillAd: !0
                        };
                        a.m.a.zaxs("beforeAdKilled", f, e);
                        if (!f.shouldKillAd) return
                    }
                    a.m.a.zaxs("adKilled", e);
                    a.e.q(e)
                }
            };
            a.u.e = function(e) {
                e.eq || (e.eq = !0);
                var f = {
                    e: 5
                };
                f.q = e.aq[5]++;
                a.v.a(e, f)
            };
            a.u.d = function(e) {
                if (!e || !e.aq || !e.aq[0]) return !1;
                var f = {
                    e: 37
                };
                f.q = e.aq[37]++;
                a.v.a(e, f)
            };
            a.u.n = [];
            a.u.o = function(e, f) {
                var g = !1;
                if (!e || !e.aq || !e.aq[29] || 3 > e.aq[29]) return !1;
                for (var d = 0; d < f.length; d++) {
                    var c = f[d]; - 1 === a.b.indexOf(a.u.n,
                        c) && (g = !0, a.u.n.push(c))
                }
                g && (g = {
                    e: 37
                }, g.q = e.aq[37]++, a.v.a(e, g))
            };
            a.u.c = function(e) {
                var f;
                f = e.aa;
                if (1 == e.ao.skin) return !1;
                if (a.as.c(e)) return !0;
                e.elementRect || (e.currentWidth = f.offsetWidth, e.currentHeight = f.offsetHeight);
                f = e.currentWidth;
                e = e.currentHeight;
                var g = !0;
                a.n.a() && (g = !1);
                return g && (3 > f || 3 > e) || a.focus.pageIsPrerendered() ? !0 : !1
            };
            a.u.f = function(e) {
                return e ? a.focus.pageIsVisible() : !1
            };
            a.u.p = function(e) {
                var f = 1;
                screen.deviceXDPI ? f = screen.deviceXDPI / screen.systemXDPI : e.devicePixelRatio && "undefined" !==
                    typeof e.mozInnerScreenX && (f = e.devicePixelRatio);
                return (e = a.d.v()) ? {
                    w: f * e.width,
                    h: f * e.height
                } : {
                    w: 0,
                    h: 0
                }
            };
            a.u.h = function(e) {
                e.counters = {};
                e.counters.laxDwell = new n(function() {
                    return !a.focus.pageIsPrerendered()
                }, "bu", "cd");
                e.counters.strictDwell = new n(a.focus.pageIsVisible, "ah", "am");
                e.counters.query = function() {
                    var a = {},
                        d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var c = this[d];
                            "function" === typeof c.query && c.query(a)
                        } return a
                };
                e.counters.getQs = function() {
                    var a = {},
                        d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var c =
                                this[d];
                            "function" === typeof c.getQs && c.getQs(a)
                        } return a
                };
                e.counters.update = function(a, d, c) {
                    for (var b in this)
                        if (this.hasOwnProperty(b)) {
                            var h = this[b];
                            "function" === typeof h.update && !0 !== a.ep && h.update(a, d, c)
                        }
                };
                a.m.a.azsx("startAdTracking", a.u.i);
                var f = a.m.a.azsx("view:tick", a.b.dk([e], e.counters.update, e.counters));
                k[e.zr] = f
            };
            a.u.q = function() {
                r.z = void 0;
                r.ACTIVETIMEUNTILSCROLL = void 0;
                r.zs = !1;
                r.xz = !1;
                r.dcsx.wsqa("globalScrollevent" + r.dcsx.uid);
                a.b.forEach(a.u.g.a, function(a) {
                    if (a && "function" === typeof a) try {
                        a()
                    } catch (f) {}
                })
            };
            a.u.j = function(e) {
                if (a.focus.pageIsVisible()) {
                    e = (new q).getTime();
                    "undefined" === typeof r.z && (r.z = e - ta);
                    if ("undefined" === typeof r.ACTIVETIMEUNTILSCROLL) {
                        var f = a.focus.focusStartTime || ta;
                        f < ta && (f = ta);
                        r.ACTIVETIMEUNTILSCROLL = e - f
                    }
                    a: {
                        for (var g in u)
                            if (u.hasOwnProperty(g) && (e = u[g]) && "undefined" !== typeof e.ao) {
                                if (e.ce) break a;
                                f = {
                                    e: 4
                                };
                                f.q = e.aq[4]++;
                                f.ai = r.z;
                                f.wr = r.ACTIVETIMEUNTILSCROLL;
                                a.v.a(e, f);
                                e.ce = !0
                            } try {
                            r.dcsx.wsqa("globalScrollevent" + r.dcsx.uid), r.swde.sxaz("scroll", {
                                callback: a.u.j
                            })
                        } catch (d) {}
                    }
                }
            };
            a.u.b = function(e, f) {
                var g = {
                    e: 9
                };
                g.q = e.aq[9]++;
                e.ci = +new q;
                f && "object" === typeof f && a.b.forEach(f, function(a, c) {
                    g[c] = a
                });
                a.v.a(e, g)
            };
            a.m.a.azsx("adKilled", function(e) {
                e && !e.ep && k.hasOwnProperty(e.zr) && a.m.a.sxaz("view:tick", {
                    id: k[e.zr]
                })
            })
        })(p);
        (function(a) {
            function n(f, k) {
                function e(a) {
                    return function() {
                        try {
                            a.sending && (a.sending = !1, n = 0, l())
                        } catch (b) {}
                    }
                }

                function l(a, b) {
                    if (a) {
                        var c = {
                            qs: a,
                            jsd: b
                        };
                        if (0 === a.indexOf("e=21&")) {
                            d(c, !0);
                            return
                        }
                        h.push(c)
                    }
                    0 === n && 0 < h.length && (n++, c = h.shift(), c.sending = !0, c.uid =
                        k.Math.floor(1E10 * k.Math.random()), c.timeoutId = k.setTimeout(e(c), 2E3), t[c.uid] = c, d(c))
                }

                function g() {
                    try {
                        return new p(1, 1)
                    } catch (a) {
                        var b = window.document.createElement("img");
                        b.height = 1;
                        b.width = 1;
                        return b
                    }
                }

                function d(d, h) {
                    if ("object" === typeof a && a && a.d && a.d.c && a.d.c()) {
                        var e = d.jsd + "/pixel.gif?" + d.qs,
                            f = function() {
                                b(d)
                            },
                            k = function() {
                                c(d)
                            };
                        a.d.da() && a.q.j(e, f, k)
                    } else e = g(), e.toSend = d, h || (e.onerror = function() {
                        c(this.toSend)
                    }, e.onload = function() {
                        b(this.toSend)
                    }), e.src = d.jsd + "/pixel.gif?" + d.qs
                }

                function c(a) {
                    a.failedAttempts =
                        "number" == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
                    var c = (a.jsd + "/pixel.gif?" + a.qs).length;
                    1 > a.failedAttempts ? d(a) : u && c > J && b(a)
                }

                function b(a) {
                    var b = a && a.uid && t && t[a.uid];
                    if (a && a.qs && "tracer=" == a.qs) return !1;
                    if (b) {
                        t[a.uid] = null;
                        try {
                            delete t[a.uid]
                        } catch (c) {}
                        try {
                            clearTimeout(b.timeoutId)
                        } catch (c) {}
                        if ("boolean" != typeof b.sending || b.sending) b.sending = !1;
                        else return !1
                    }
                    0 < n && n--;
                    l()
                }
                var h = [],
                    n = 0,
                    p, q = k[f],
                    m = k.Math.floor(1E10 * k.Math.random()),
                    t = {};
                q.yh = {};
                q = q.yh;
                p = k.Image;
                q.yi = function(a, b) {
                    l(a, b)
                };
                q.xq =
                    function() {
                        return m
                    };
                var r, u, J = 2083;
                try {
                    r = document.createElement("div"), r.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e", u = "x" === r.innerHTML
                } catch (C) {
                    u = !1
                }
            }
            a.bg = {};
            a.bg.a = function(f) {
                try {
                    if (r.yh) return
                } catch (k) {}
                a.d.c() ? n(a.d.az, f) : a.b["do"](n, "'" + a.d.az + "',window", f)
            }
        })(p);
        (function(a) {
            a.bb = {};
            a.bb.b = function(n, f) {
                var k = !0;
                f && a.d.dw(n, !0) || (k = !1);
                if (k) {
                    k = !0;
                    f && f.getCareAboutFocus && (k = f.getCareAboutFocus());
                    var e = a.u.c(n),
                        k = (!k || a.u.f(n)) && !e
                }
                return k
            };
            a.bb.c = function(n) {
                this.label = n;
                this.metrics = {};
                this.hasTickUpdateMetrics = !1;
                this.set = function(a, k, e) {
                    this.metrics[a] = this.metrics[a] || {};
                    this.metrics[a].value = k || 0;
                    e && (this.hasTickUpdateMetrics || (this.hasTickUpdateMetrics = !0), this.metrics[a].incrementValue = e.incrementValue || "delta", this.metrics[a].ignoreStateCheck = e.ignoreStateCheck || !1, this.metrics[a].shouldIncrementFn = e.shouldIncrementFn, this.metrics[a].postIncrementationFn = e.postIncrementationFn || !1, this.metrics[a].ignoreOmidCheck = e.ignoreOmidCheck || !1, e.useDeltaCompensation && (this.metrics[a].useDeltaCompensation = !0, this.metrics[a].incrementedLastTick = !1));
                    return this.metrics[a].value
                };
                this.increment = function(a, k, e, l, g) {
                    var d = !this.metrics[a] || "number" !== typeof this.metrics[a].value;
                    try {
                        if (l.debugData && d && "publicis_counter" == this.label) {
                            var c;
                            this.metrics[a] ? this.metrics[a].value && (c = this.metrics[a].value) : c = "NONE";
                            var b = [k, c, g].join("-");
                            l.debugData.cache.push(b)
                        }
                    } catch (h) {}
                    k = d ? this.set(a, k) : this.metrics[a].value += k;
                    "number" === typeof e && (k = this.cap(a, k));
                    return k
                };
                this.cap = function(a, k) {
                    return this.set(a,
                        t.min(this.get(a), k))
                };
                this.max = function(a, k) {
                    return this.set(a, t.max(this.get(a), k))
                };
                this.get = function(f, k) {
                    if (!a.e.c() || "visOnLastCheck" === f || this.metrics[f] && this.metrics[f].ignoreOmidCheck) return "undefined" === typeof this.metrics[f] ? this.set(f, "undefined" !== typeof k ? k : 0) : this.metrics[f].value
                };
                this.update = function(f, k, e) {
                    if (f && this.hasTickUpdateMetrics) {
                        e = a.o.a(f.zr, !0);
                        var l = a.bb.b(f, e),
                            g;
                        for (g in this.metrics)
                            if (a.b.dd(this.metrics, g)) {
                                var d = this.metrics[g];
                                if (d.shouldIncrementFn) {
                                    var c = (l ||
                                        !0 === d.ignoreStateCheck) && d.shouldIncrementFn(f, e);
                                    d.useDeltaCompensation ? (c && d.incrementedLastTick ? this.increment(g, k, void 0, f, 1) : (c || d.incrementedLastTick) && this.increment(g, t.round(k / 2), void 0, f, 2), d.incrementedLastTick = c) : c && ("delta" === d.incrementValue ? this.increment(g, k, void 0, f, 3) : "addReturnValue" === d.incrementValue ? this.increment(g, c, void 0, f, 4) : "setReturnValue" === d.incrementValue && this.set(g, c));
                                    "function" === typeof d.postIncrementationFn && d.postIncrementationFn(c)
                                }
                            }
                    }
                }
            };
            a.bb.a = function(n, f) {
                if (!n) return !1;
                var k;
                n[f] ? k = n[f] : (k = new a.bb.c(f), n[f] = k);
                return k
            };
            a.bb.d = function(n, f, k) {
                if (!f) return !1;
                f = a.bb.a(f, k);
                n.secondaryCounters = n.secondaryCounters || [];
                n.secondaryCounters.push(f);
                return f
            }
        })(p);
        (function(a) {
            function n(e, f, g) {
                this.name = e;
                this.reachedInViewTimeThreshold = !1;
                this.alwaysInview = !0;
                this.queryStringKey = g.queryStringKey;
                this.timeThreshold = g.timeThreshold || 1E3;
                this.rawPercThreshold = g.percThreshold / 100 || 50;
                this.percThreshold = t.min(g.percThreshold / 100, .98);
                this.continuous = g.continuous || !1;
                this.timePercent =
                    g.timePercent;
                this.capTimeThreshold = g.capTimeThreshold;
                this.audible = g.audible || !1;
                this.video = g.video || !1;
                this.fullscreen = g.fullscreen || !1;
                "undefined" !== this.timeThreshold && (this.timeThreshold = t.max(this.timeThreshold, 1));
                this.counterState = {};
                e = a.bb.a(this.counterState, "customInViewCounter");
                e.set("inViewTime", 0);
                e.set("continuousInViewTime", 0);
                e.set("maxContinuousInViewTime", 0);
                e.set("visOnLastCheck", !1);
                e.set("_tLastChecked", (new q).getTime())
            }
            a.af = {};
            var f = {},
                k = {};
            a.af.c = function(a, k, g) {
                var d = k.zr;
                f[d] || (f[d] = {});
                if (f[d].hasOwnProperty(a) || void 0 == g.percThreshold && void 0 == g.fullscreen || void 0 == g.timeThreshold && void 0 == g.timePercent) return !1;
                g = new n(a, k, g);
                return f[k.zr][a] = g
            };
            a.af.d = function(e, k) {
                return !a.e.c() && f[k] && f[k].hasOwnProperty(e) ? f[k][e] : !1
            };
            a.af.a = function(e) {
                if (!f[e]) return !0;
                var k = !0;
                a.b.forEach(f[e], function(a) {
                    if (!a.reachedInViewTimeThreshold) return k = !1
                });
                return k
            };
            n.prototype.update = function(e, f, g) {
                if (e && this.isMeasurable(e) && !this.reachedInViewTimeThreshold) {
                    var d, c = a.bb.a(this.counterState,
                            "customInViewCounter"),
                        b = a.o.a(e.zr, !0);
                    if (b) {
                        var h = b.getLastInviewPercent();
                        d = (d = b.getFullyInViewThreshold()) && "number" === typeof d ? t.min(this.percThreshold, d) : this.percThreshold;
                        c.get("_tLastChecked");
                        c.set("_tLastChecked", g);
                        g = !0;
                        b.getCareAboutFocus && (g = b.getCareAboutFocus());
                        e = b.getPauseCheckingFn ? b.getPauseCheckingFn()(e) : a.u.c(e);
                        h = h >= d;
                        b = !g || a.focus.pageIsVisible();
                        a.af.e && "function" === typeof a.af.e && (h = a.af.e(h));
                        a.af.f && "function" === typeof a.af.f && (b = a.af.f(b));
                        h = h && b && !e;
                        e = c.get("visOnLastCheck");
                        if (h && e) c.increment("inViewTime", f), c.increment("continuousInViewTime", f);
                        else if (h || e) f = t.round(f / 2), c.increment("inViewTime", f), c.increment("continuousInViewTime", f);
                        h || (this.alwaysInview = !1);
                        c.set("visOnLastCheck", h);
                        c.get("continuousInViewTime") > c.get("maxContinuousInViewTime") && c.set("maxContinuousInViewTime", c.get("continuousInViewTime"));
                        h || c.set("continuousInViewTime", 0);
                        this.inViewTimeReached() && (this.reachedInViewTimeThreshold = !0)
                    }
                }
            };
            n.prototype.getInViewTime = function() {
                var e = a.bb.a(this.counterState,
                    "customInViewCounter");
                return this.continuous ? e.get("maxContinuousInViewTime") : e.get("inViewTime")
            };
            n.prototype.inViewTimeReached = function() {
                return "undefined" !== this.timeThreshold && this.getInViewTime() >= this.timeThreshold
            };
            n.prototype.isMeasurable = function(e) {
                if (!e) return !1;
                var f = !1;
                "undefined" !== this.timeThreshold && ("pscope" == a.o.b(e.zr, !0) && e.custominview.periscopeThresholds ? a.b.be(e.custominview.periscopeThresholds, this.rawPercThreshold) && a.d.dw(e) && (f = !0) : a.d.dw(e, !0) && (f = !0));
                return f
            };
            a.af.g =
                function(e) {
                    if (e && e.isMeasurabilityDisabled()) return !1;
                    a.af.c("full_vis_2_sec_continuous", e, {
                        percThreshold: 100,
                        timeThreshold: 2E3,
                        video: !1,
                        continuous: !0,
                        queryStringKey: "wb"
                    })
                };
            a.af.h = function(e) {
                a.af.g(e);
                e.custominview = {};
                e.custominview.eventIds = {};
                for (var f = (e.periscopeConfig || a.s.m(e)).pixels, g = [], d = 0, c = f.length; d < c; d++) g.push(parseFloat(f[d].position.top, 10) / 100);
                e.custominview.periscopeThresholds = g;
                e.custominview.eventIds.viewCounterStarted = a.m.a.azsx("viewCounterStarted", a.af.i);
                e.custominview.eventIds["periscope:onStateChange"] =
                    a.m.a.azsx("periscope:onStateChange", a.af.i, {
                        priority: 5
                    });
                e.custominview.eventIds.adKilled = a.m.a.azsx("adKilled", a.af.j);
                a.af.i(e)
            };
            a.af.i = function(e) {
                void 0 !== e && (isNaN(e) || (e = u[e]), e && e.custominview && e.custominview.eventIds && a.d.dw(e, !0) && !e.custominview.eventIds["view:tick"] && (e.custominview.eventIds["view:tick"] = a.m.a.azsx("view:tick", a.b.dk([e], a.af.k), {
                    priority: 6
                })))
            };
            a.af.k = function(e, k, g) {
                var d = e.zr;
                if (!f[d] || e && e.isMeasurabilityDisabled()) return !1;
                a.b.forEach(f[d], function(a) {
                    a.update(e,
                        k, g)
                })
            };
            a.af.j = function(e) {
                e && e.custominview && e.custominview.eventIds && (a.m.a.sxaz("view:tick", {
                    id: e.custominview.eventIds["view:tick"],
                    priority: 6
                }), a.m.a.sxaz("viewCounterStarted", {
                    id: e.custominview.eventIds.viewCounterStarted
                }), a.m.a.sxaz("periscope:onStateChange", {
                    id: e.custominview.eventIds["periscope:onStateChange"]
                }), a.m.a.sxaz("adKilled", {
                    id: e.custominview.eventIds.adKilled
                }), a.m.a.sxaz("video:AdVideoComplete", {
                    id: e.custominview.eventIds["video:AdVideoComplete"]
                }))
            };
            a.af.l = function() {
                a.m.a.sxaz("startAdTracking", {
                    id: k.startAdTracking
                });
                a.m.a.sxaz("allLocalAdsKilled", {
                    id: k.allLocalAdsKilled
                })
            };
            a.af.b = function(e, k) {
                if (e) return a.b.forEach(f[e.zr], function(g) {
                    "custom_inview_module_counter" === g.name ? (k.wm = 0, k.wi = 0, !a.e.c() && g.isMeasurable(e) && (k.wm = 1, g.inViewTimeReached() && (k.wi = 1))) : void 0 != g.queryStringKey && (k[g.queryStringKey] = 0, !a.e.c() && g.isMeasurable(e) && (k[g.queryStringKey] = 1, g.inViewTimeReached() && (k[g.queryStringKey] = 2)))
                }), k
            };
            a.af.m = function(e) {
                if (!e) return !1;
                var k = !1;
                e = e.zr;
                if (!f[e]) return !1;
                a.b.forEach(f[e],
                    function(a) {
                        "custom_inview_module_counter" === a.name && (k = a.reachedInViewTimeThreshold)
                    });
                return k
            };
            k.startAdTracking = a.m.a.azsx("startAdTracking", a.af.h);
            k.allLocalAdsKilled = a.m.a.azsx("allLocalAdsKilled", a.af.l)
        })(p);
        (function(a) {
            a.bh = {};
            a.bh.a = !1;
            a.bh.b = function(n) {
                var f = ["46223477917", "138258876683"];
                n && n.moatClientLevel4 && a.b.be(f, n.moatClientLevel4) && (a.bh.a = !0);
                "function" === typeof a.bh.c && a.bh.c(n);
                n && n.zMoatENV && "x" === n.zMoatENV && (a.bh.a = !0)
            }
        })(p);
        (function(a) {
            function n() {
                d++;
                e = f.pageYOffset;
                g = f.pageXOffset;
                e != k && (a.bc.a.YCoord.push(e.toFixed(2)), a.bc.a.time.push(d), k = e);
                g != l && (a.bc.b.XCoord.push(g.toFixed(2)), a.bc.b.time.push(d), l = g)
            }
            var f, k, e, l, g, d = 0,
                c = !1;
            a.bc = a.bc || {};
            a.bc.c = function() {
                return function() {
                    if (!c && a.d.e) {
                        f = a.d.g;
                        c = !0;
                        k = f.pageYOffset;
                        l = f.pageXOffset;
                        a.bc.a = {
                            YCoord: [f.pageYOffset],
                            time: [0]
                        };
                        a.bc.b = {
                            XCoord: [f.pageXOffset],
                            time: [0]
                        };
                        var b = "scrollInfo#" + (new q).getTime();
                        a.p.g(n, {}, 1E3, b)
                    }
                }
            }()
        })(p);
        (function(a) {
            function n(a) {
                for (var c, b = [], g = 0; 100 >= g; g++) b.push(0 === g ? 0 : g / 100);
                try {
                    c = new IntersectionObserver(a, {
                        rootMargin: "0px",
                        threshold: b
                    })
                } catch (e) {
                    return !1
                }
                return c
            }

            function f(a) {
                return function(c, b) {
                    var g = c.length;
                    1 > g || (g = c[g - 1], a.percentVisible = g.intersectionRatio, a.visibleRect = g.intersectionRect, a.elementRect = g.boundingClientRect)
                }
            }

            function k(a) {
                var c = a && a.intersectionObserver,
                    c = c && c.observer;
                try {
                    c && (c.disconnect(), a.intersectionObserver = null)
                } catch (b) {}
            }

            function e(a) {
                a && a.intersectionObserver && (k(a), l(a))
            }

            function l(d) {
                var c, b, h;
                c = {
                    started: !1,
                    observer: null,
                    percentVisible: null,
                    visibleRect: null,
                    elementRect: null,
                    element: function(a) {
                        return function() {
                            return a && a.aa
                        }
                    }(d)
                };
                d.intersectionObserver = c;
                b = c.element();
                if (b && (h = n(f(c)))) {
                    c.observer = h;
                    try {
                        h.observe(b)
                    } catch (l) {
                        return !1
                    }
                } else return !1;
                c.started = !0;
                a.m.a.azsx("adKilled", a.b.dk([d], k), {
                    condition: function(a) {
                        return "object" === typeof d && "object" === typeof a && d.zr == a.zr
                    },
                    once: !0
                });
                a.m.a.azsx("adElementUpdate", a.b.dk([d], e), {
                    condition: function() {
                        return d && d.intersectionObserver && d.intersectionObserver.started
                    },
                    once: !0
                });
                g && g.startTracking(d);
                return !0
            }
            a.aj = {};
            var g = function(a) {
                function c(a, b, c, d) {
                    function g(a, d) {
                        var e = a.length;
                        1 > e || (e = a[e - 1], e = e.intersectionRatio, 0 >= e || !h || h(b, c) && d.disconnect())
                    }

                    function e() {
                        for (var a = [], b = 0; 100 >= b; b++) a.push(0 === b ? 0 : b / 100);
                        return a
                    }
                    var h = a && window && window[a];
                    return h ? function() {
                        try {
                            var a = new IntersectionObserver(g, {
                                rootMargin: "0px",
                                threshold: e()
                            });
                            if (!d) return !1;
                            a.observe(d);
                            return function() {
                                a.disconnect();
                                a = null
                            }
                        } catch (b) {
                            return !1
                        }
                    }() : !1
                }

                function b(a) {
                    k && (k.killAllPixels(), k = null);
                    a && a.periscopeManager &&
                        (a.periscopeManager = null)
                }

                function g(b, c) {
                    if (!b || "undefined" === typeof c) return !1;
                    var e = a.b.cx(c);
                    if (!e || !e.isValidAdSize()) return !1;
                    e = {
                        "topLeft:": !1,
                        "topRight:": !1,
                        "bottomLeft:": !1,
                        "bottomRight:": !1
                    };
                    e[b] = !0;
                    a.m.a.zaxs("adEdgesViewStatus", c, e);
                    return !0
                }

                function e(b) {
                    if (!b) return !1;
                    var f = b.adCount,
                        k = b.name,
                        l = b.element,
                        n = b.parent,
                        p = b.top,
                        q = b.left,
                        v = b.width;
                    b = b.height;
                    var r = t.floor(1E8 * t.random());
                    return {
                        name: k,
                        id: "MoatPxIOPT" + f + "_" + r,
                        target: l,
                        container: n,
                        dimensions: {
                            width: v,
                            height: b
                        },
                        position: {
                            top: p,
                            left: q
                        },
                        onWidthCheck: a.s.l,
                        customPixel: !0,
                        customFn: c,
                        callback: g,
                        callbackName: "MoatPxIOPT" + r,
                        preserveDom: !1,
                        customPixelDiv: !0
                    }
                }

                function f(b) {
                    if (!b) return !1;
                    var c = b.zr,
                        g = b.aa,
                        h = g && g.parentNode;
                    b && b.ao && "true" === b.ao.zMoatTaboola && (h = h && h.parentNode || h);
                    if (!g || !h) return !1;
                    var k = b.INITIAL_WIDTH;
                    b = b.INITIAL_HEIGHT;
                    k = a.b.dg(k) ? k - .98 * k : 1;
                    b = a.b.dg(b) ? b - .98 * b : 1;
                    var k = (b = {
                            width: k + 1,
                            height: b + 1
                        }, b.width),
                        l = b && b.height,
                        n = [],
                        p;
                    b = 1;
                    for (var q = [
                            ["topLeft", "0px", "0px"],
                            ["topRight", "0px", "100%"],
                            ["bottomLeft", "100%",
                                "0px"
                            ],
                            ["bottomRight", "100%", "100%"]
                        ], t = 0, r = q.length; t < r; t++) p = q[t], n.push(e({
                        adCount: c,
                        name: p[0],
                        element: g,
                        parent: h,
                        top: p[b],
                        left: p[2],
                        width: k,
                        height: l
                    }));
                    return {
                        insertableFunc: a.d.dp,
                        pixels: n
                    }
                }
                var k;
                return {
                    startTracking: function(c) {
                        if (c && !a.d.fp && !a.ac.d(c.zr)) {
                            var g = f(c);
                            g && (c.periscopeConfig = g, a.s.z(c), k = c.periscopeManager, a.m.a.azsx("adKilled", a.b.dk([c], b), {
                                condition: function(a) {
                                    return "object" === typeof c && "object" === typeof a && c.zr == a.zr
                                },
                                once: !0
                            }), a.m.a.azsx("passthrough", a.b.dk([c], b), {
                                once: !0
                            }))
                        }
                    }
                }
            }(a);
            a.aj.a = function(d) {
                if (a.d.dp()) {
                    if (d.intersectionObserver && d.intersectionObserver.started) return d.intersectionObserver.percentVisible;
                    l(d) || a.d.dp(!1)
                }
            }
        })(p);
        (function(a) {
            a.ag = {};
            a.ag.a = function(a, f, k, e) {
                function l() {
                    d("unload", l);
                    d("beforeunload", l);
                    m = !1;
                    clearInterval(B)
                }

                function g(a, b, c) {
                    a && b && c && ("function" === typeof a.addEventListener ? a.addEventListener(b, c) : "function" === typeof a.attachEvent && a.attachEvent("on" + b, c))
                }

                function d(a, b, c) {
                    a && b && c && ("function" === typeof a.removeEventListener ? a.removeEventListener(b,
                        c) : "function" === typeof a.detachEvent && a.detachEvent("on" + b, c))
                }

                function c(a) {
                    if (a !== r) {
                        var b = [{
                            name: "fr",
                            enabled: !0,
                            inview: a
                        }];
                        t && t(b)
                    }
                    r = a
                }

                function b() {
                    try {
                        var a, d;
                        10 > e ? (a = document.elementFromPoint(0, 0), d = !!a) : d = (a = document.msElementsFromPoint(0, 0)) && 0 < a.length;
                        c(d)
                    } catch (g) {}
                    m && window.requestAnimationFrame(b)
                }

                function h() {
                    clearInterval(B);
                    B = window.setInterval(q, 100);
                    window.requestAnimationFrame(p)
                }

                function p() {
                    u ? c(!0) : u = !0;
                    h()
                }

                function q() {
                    c(!1)
                }
                var t = a && window && window.parent && window.parent[a],
                    m =
                    "function" === typeof window.requestAnimationFrame,
                    r = !1,
                    u = !1,
                    B;
                a = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
                e = "string" === typeof e ? parseInt(e, 10) : NaN;
                (function() {
                    document.body.style.overflow = "hidden";
                    document.body.style.margin = "0px";
                    document.body.style.padding = "0px";
                    document.body.style.height = "1000px";
                    var a = document.createElement("div");
                    a.style.width = "300px";
                    a.style.height = "250px";
                    document.body.appendChild(a);
                    g("unload",
                        l);
                    g("beforeunload", l)
                })();
                a ? h() : m ? window.requestAnimationFrame(b) : B = window.setInterval(b, 100)
            }
        })(p);
        (function(a) {
            function n() {
                a.d.cl(!1)
            }

            function f(c, b) {
                return function(d) {
                    var g, e;
                    if (b.dfp) a: {
                        if (d && b && "message" === d.type && d.source == b.win && d.data && 0 == d.data.indexOf("amp-")) try {
                            if (e = JSON.parse(d.data.substring(4)), e.sentinel == b.sentinel && "intersection" == e.type) {
                                g = e.changes;
                                break a
                            }
                        } catch (f) {}
                        g = !1
                    }
                    else g = d;
                    if (d = g) g = d.length, 1 > g || (b.context && b.context.hidden ? d = 0 : (d = d[g - 1], g = d.rootBounds, g = {
                        left: 0,
                        right: g.width,
                        top: 0,
                        bottom: g.height
                    }, g = a.aa.p(b.element(), d.boundingClientRect, g), d = g.calcVisiblePercv(), (e = "sframe" === a.o.b(b.zr)) && a.m.a.zaxs("rectsAvailable", c.zr, g.elementRect, g.visibleRect)), b.percentVisible = d)
                }
            }

            function k(c, b) {
                c.amp = {
                    dfp: b.isDfp,
                    win: b.win,
                    sentinel: b.sentinel,
                    started: !1,
                    unlisten: null,
                    eventHandler: null,
                    percentVisible: null,
                    context: a.d.ez(),
                    element: function(a) {
                        return function() {
                            return a && a.aa
                        }
                    }(c),
                    zr: c.zr
                };
                return c.amp
            }

            function e(a, b) {
                if (!b || !b.context || !b.context.observeIntersection) return n(),
                    !1;
                b.eventHandler = f(a, b);
                b.unlisten = b.context.observeIntersection(b.eventHandler);
                b.unlisten || (b.unlisten = function() {
                    b.unlisten = function() {}
                });
                b.started = !0
            }

            function l(c, b) {
                if (a.d.fb()) {
                    var d = "amp-message-" + b.sentinel;
                    b.messageId = d;
                    b.eventHandler = f(c, b);
                    r.dcsx.ynds(window, "message", d, "ampMessageFn" + d);
                    r.swde.azsx(d, b.eventHandler);
                    return b.started = !0
                }
                n();
                return !1
            }

            function g(c, b) {
                if (!c || !c.aa) return n(), !1;
                var g = k(c, b);
                b.isDfp ? l(c, g) : e(c, g);
                g.started && a.m.a.azsx("adKilled", d, {
                    condition: function(a) {
                        return c.zr ==
                            a.zr
                    },
                    once: !0
                })
            }

            function d(c) {
                var b = c && c.amp;
                if (!b) return !1;
                try {
                    b.dfp ? (r.dcsx.engn(window, "message", b.messageId), a.m.a.sxaz(b.messsageId, b.eventHandler)) : b.unlisten && "function" == typeof b.unlisten && b.unlisten()
                } catch (d) {
                    n()
                }
                c.amp = null
            }
            a.al = {};
            a.al.a = function(c) {
                c.amp && c.amp.started || g(c, a.d.fa());
                return c.amp.percentVisible
            }
        })(p);
        (function(a) {
            a.am = {};
            a.am.b = null;
            a.am.c = !1;
            a.am.d = !1;
            a.am.e = function(n) {
                n = n || a.d.bs();
                if (!n) return !1;
                var f;
                f = n.getCurrentPosition();
                n = n.getScreenSize();
                f.top = f.y;
                f.bottom =
                    f.y + f.height;
                f.left = f.x;
                f.right = f.x + f.width;
                n.top = 0;
                n.bottom = n.height;
                n.left = 0;
                n.right = n.width;
                return {
                    geom: f,
                    screen: n
                }
            };
            a.am.f = function(n) {
                var f = a.am.e();
                if (!f) return !1;
                var k = f.screen,
                    f = f.geom;
                return k && f ? (n = a.aa.p(n, f, k)) ? n : !1 : !1
            };
            a.am.g = function(n, f, k) {
                if (f.api && "function" === typeof f.api.getVendor) {
                    var e = f.api.getVendor(),
                        l;
                    "AdColony" === e ? l = "exposureChange" : "AdMarvel" === e && (l = "viewablePercentageChange");
                    if (l) {
                        var g = function(a) {
                            return function(c) {
                                a.percv = c
                            }
                        }(f);
                        f.api.addEventListener(l, g)
                    }
                    k || a.m.a.azsx("adKilled",
                        function() {
                            n.mraid.api.removeEventListener("viewablePercentageChange", g);
                            n.mraid = null
                        }, {
                            condition: function(a) {
                                return n.zr == a.zr
                            },
                            once: !0
                        })
                }
            };
            a.am.h = function() {
                var n = {},
                    f = a.d.bs();
                n.api = f;
                n.percv = -1;
                return n
            };
            a.am.a = function(n) {
                var f, k, e, l, g = !1;
                l = a.d.bx();
                if (!n.mraid) {
                    n.mraid = a.am.h();
                    if (!n.mraid.api) return !1;
                    l && a.am.g(n, n.mraid)
                }
                if (!n.mraid.api) return !1;
                e = a.am.f(n.aa);
                if (!e) return !1;
                f = t.floor(100 * e.calcVisiblePercv()) / 100;
                l && (k = t.floor(n.mraid.percv) / 100);
                l ? a.b.dt(k, f, .01) && (g = !0) : g = !0;
                g && "sframe" ===
                    a.o.b(n.zr) && a.m.a.zaxs("rectsAvailable", n.zr, e.elementRect, e.visibleRect);
                return l && 0 <= k ? t.min(f, k) : f
            };
            a.am.i = function() {
                var n = a.d.ap().isInApp,
                    f = window === window.top,
                    k = a.b.ah("_#OMF"),
                    e = !a.d.bt(),
                    l = !a.am.c;
                return n && f && k && e && l
            };
            (function() {
                if (a.am.i())
                    for (var n = a.w.j(), f, k = 0, e = n.length; k < e; k++)(f = n[k]) && f.swde && f.swde.zaxs && f.swde.zaxs("mraid")
            })();
            a.m.a.azsx("startAdTracking", a.d.ca)
        })(p);
        (function(a) {
            a.an = {};
            a.an.a = function(n) {
                n.amazon && n.amazon.started || a.an.b(n);
                return n.amazon.percentVisible
            };
            a.an.b = function(n) {
                var f = a.d.cq(),
                    k = a.d.cn(),
                    e = k && k.mraid,
                    l = k && k.Event && k.Event.Viewability,
                    g = e && "function" === typeof e.getScreenSize && e.getScreenSize,
                    d;
                n.amazon = {
                    api: f,
                    element: n.aa,
                    event: null,
                    eventListener: null,
                    getScreenSize: g,
                    mraid: e,
                    percentVisible: null,
                    started: !1,
                    win: k
                };
                if (!f || !l || !g) return !1;
                d = n.amazon;
                d.event = l;
                try {
                    return d.eventListener = function(c) {
                        var b = d.getScreenSize(),
                            g, e;
                        if ("viewable" in c) e = "viewable";
                        else if ("viewablePercentage" in c) e = "viewablePercentage";
                        else return !1;
                        0 === c[e] ? d.percentVisible =
                            0 : d.element && b ? (g = (b = a.aa.p(d.element, {
                                left: c.x,
                                right: c.x + c.width,
                                top: c.y,
                                bottom: c.y + c.height
                            }, {
                                left: 0,
                                right: b.width,
                                top: 0,
                                bottom: b.height
                            })) && b.calcVisiblePercv() || !1, c = c[e], c /= 100, e = a.b.dg(g) ? t.min(g, c) : c, d.percentVisible = e, (g = a.b.dt(g, c, .01) && "sframe" === a.o.b(n.zr)) && a.m.a.zaxs("rectsAvailable", n.zr, b.elementRect, b.visibleRect)) : d.percentVisible = null
                    }, d.api.addEventListener(l, d.eventListener), n.amazon.started = !0, a.m.a.azsx("adKilled", a.an.c, {
                        condition: function(a) {
                            return n.zr == a.zr
                        },
                        once: !0
                    }), !0
                } catch (c) {
                    return !1
                }
            };
            a.an.c = function(a) {
                if ((a = a.amazon) && a.eventListener && "function" == typeof a.eventListener && a.event) {
                    try {
                        a.api.removeEventListener(a.event, a.eventListener)
                    } catch (f) {}
                    a.started = !1
                }
            }
        })(p);
        (function(a) {
            a.at = {};
            a.at.b = t.floor(1E8 * t.random());
            a.at.c = function(n, f, k, e) {
                if (r && (f && (f += "_" + a.at.b), f && a.b.dz() && (f += "_beta"), !r.jsonp || !r.jsonp[n])) {
                    r.jsonp = r.jsonp || {};
                    r.jsonp[n] = r.jsonp[n] || {
                        cachedResponse: !1
                    };
                    var l = r.xb || window,
                        g = l.document;
                    l[f] = function(a) {
                        var b;
                        try {
                            b = JSON.parse(a)
                        } catch (c) {
                            b = a
                        }
                        r.jsonp[n].cachedResponse =
                            b;
                        r.swde.zaxs(n + "JsonpReady", b);
                        l[f] = null
                    };
                    var d = function(a) {
                        a = n + " JSONP request handling failed" + (a ? a : "");
                        try {
                            var b = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                                c = b ? "" : document.referrer,
                                d = "undefined" !== typeof AB_SCAFFOLD && 2 === AB_SCAFFOLD.type,
                                g = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof K ? d ? "TURNERDFP1_BETA" : "TURNERDFP1" : K) + "&ac=1&k=" + escape(a) + "&ar=" + escape("da8ed23e15-clean") + "&iw=" + escape("488ebc3") +
                                "&j=" + escape(c) + "&cs=" + (new q).getTime();
                            b ? omidNative.sendUrl(g) : (new Image(1, 1)).src = g
                        } catch (e) {}
                    };
                    try {
                        var c = a.d.bh(),
                            b = function() {
                                "undefined" === typeof e && (e = "callback");
                                var b = [k, "&", e, "=", f].join(""),
                                    c = g.createElement("script"),
                                    d = g.body || g.getElementsByTagName("head")[0] || g.getElementsByTagName("script")[0];
                                a.b.cw(b, d, c)
                            };
                        "undefined" !== typeof c ? "function" === typeof c.downloadJavaScriptResource && c.downloadJavaScriptResource(k, l[f], d) : b()
                    } catch (h) {
                        d(h)
                    }
                }
            };
            a.at.d = function(n, f) {
                r.jsonp && r.jsonp[n] &&
                    r.jsonp[n].cachedResponse ? a.b.dk([r.jsonp[n].cachedResponse], f)() : r.swde.azsx(n + "JsonpReady", f, {
                        once: !0
                    })
            };
            a.at.a = function() {
                var n = {},
                    f;
                return function(k, e, l) {
                    n[k] ? a.at.d(k, e) : ("string" === typeof l ? f = l : "object" === typeof l && (f = a.at.e(l, k)), a.at.c(k, k + "callback", f), e && a.at.d(k, e), n[k] = !0)
                }
            }();
            a.at.e = function(n, f) {
                var k;
                a: switch (f) {
                    case "BrandSafetyNados":
                        k = "/s/v2";
                        break a;
                    case "OneTagNados":
                        k = "/ot/v1";
                        break a;
                    default:
                        k = ""
                }
                var e = ["url=" + encodeURIComponent(a.d.be)];
                a.b.forEach(n, function(f, g) {
                    var d = g +
                        "=" + f;
                    a.b.be(e, d) || e.push(d)
                });
                return "https://mb.moatads.com" + k + "?" + e.join("&")
            }
        })(p);
        (function(a) {
            function n(g, d, c) {
                var b = a.ac.h[g].stateMask;
                if (d = l[d] * (c ? 16 : 1)) a.ac.h[g].stateMask = b | d << 0
            }

            function f(g, d, c, b) {
                c = a.b.dt(g.x, d.x, c);
                g = a.b.dt(g.y, d.y, b);
                return c && g
            }

            function k(g, d) {
                a.ac && a.ac.h[g] && (a.ac.h[g].allEdgesSeen = !0, a.b.forEach(a.ac.h[g].mediatorIds, function(c, b) {
                    a.m.a.sxaz(b, {
                        id: c
                    })
                }), d && (a.ac.h[g].failsafe = !0), a.m.a.zaxs("passthrough"))
            }
            var e = {};
            a.ac = {};
            a.ac.i = 242500;
            a.ac.j = 1;
            a.ac.h = {};
            var l = {
                topLeft: 8,
                topRight: 4,
                bottomLeft: 2,
                bottomRight: 1
            };
            a.ac.k = function(g) {
                if (!g || g && g.isMeasurabilityDisabled() || a.e.c()) return !1;
                var d, c;
                a.d.dt() && (d = !0);
                a.s && a.s.a && g.periscopeManager && g.periscopeManager.fullyMeasurable && (c = !0);
                return a.d["do"]() || a.d.dx() || d || c
            };
            a.ac.a = function(g) {
                return "number" !== typeof g || a.b.l() ? !1 : 236425 <= g
            };
            a.ac.l = function(a) {
                return a && a.ao ? "slave" == a.ao.moatClientAT ? !0 : !1 : !1
            };
            a.ac.m = function(a) {
                return a && a.ao ? "cpc" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ac.n = function(a) {
                return a && a.ao ?
                    "cpcv" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ac.o = function(a) {
                return a && a.ao ? "flatrate" == a.ao.moatClientBT ? !0 : !1 : !1
            };
            a.ac.p = function(a) {
                return a && a.ao ? "skin" == a.ao.moatClientAT || "hpto" == a.ao.moatClientAT || 1 == a.ao.skin ? !0 : !1 : !1
            };
            a.ac.g = function(g) {
                if (!g || !g.aa) return !1;
                if ("undefined" != typeof g.er) return g.er;
                g.video ? !a.ac.k(g) || a.ac.n(g) && !g.video.reachedComplete || (g.er = !0) : a.ac.l(g) || a.ac.m(g) || a.ac.o(g) ? g.er = !1 : a.ac.p(g) || g.isCompositeAd || a.ac.a(a.b.da(g)) ? g.er = !0 : a.ac.k(g) && a.o.s(g, a.ac.j, !0) && (g.er = !0);
                return g.er || !1
            };
            a.ac.b = function(g) {
                if (!g || g.SENT_FIT && g.et || !a.ac.k(g)) return !1;
                var d, c, b = a.o.b(g.zr);
                g.SENT_FIT || (d = a.o.h(g, b, "hadFIT"));
                g.et || (c = a.o.h(g, b, "hadFullOTS"));
                if (d || c) a.u.d(g), g.SENT_FIT = g.SENT_FIT || !!d, g.et = g.et || !!c;
                return d || c
            };
            a.ac.q = function(g, d, c) {
                var b;
                a.b.forEach([null, void 0, !1], function(a) {
                    if (b = d === a || c === a) return !1
                });
                if (!0 === b || !0 !== (a.b.dg(d.top) && a.b.dg(d.bottom) && a.b.dg(c.bottom) && a.b.dg(c.top)) || d.top === d.bottom || d.left === d.right || c.top === c.bottom || c.left === c.right) return !1;
                var e = d.right - d.left,
                    k = d.bottom - d.top,
                    l = e * (1 - .98),
                    n = k * (1 - .98),
                    m = {
                        x: d.left,
                        y: d.top
                    },
                    p = {
                        x: d.right,
                        y: d.top
                    },
                    q = {
                        x: d.left,
                        y: d.bottom
                    },
                    r = {
                        x: d.right,
                        y: d.bottom
                    },
                    u = d.left + l,
                    C = d.top + n,
                    y = d.right - l,
                    B = d.top + n,
                    E = d.left + l,
                    D = d.bottom - n,
                    l = d.right - l,
                    n = d.bottom - n,
                    F = {
                        x: c.left,
                        y: c.top
                    },
                    G = {
                        x: c.right,
                        y: c.top
                    },
                    I = {
                        x: c.left,
                        y: c.bottom
                    },
                    K = {
                        x: c.right,
                        y: c.bottom
                    },
                    e = t.ceil(.01 * e),
                    k = t.ceil(.01 * k),
                    m = f(m, F, e, k),
                    p = f(p, G, e, k),
                    q = f(q, I, e, k),
                    r = f(r, K, e, k);
                a.ac.r(g, {
                    topLeft: m,
                    topRight: p,
                    bottomLeft: q,
                    bottomRight: r
                }, {
                    topLeft: u >= c.left &&
                        C >= c.top,
                    topRight: y <= c.right && B >= c.top,
                    bottomLeft: E >= c.left && D <= c.bottom,
                    bottomRight: l <= c.right && n <= c.bottom
                })
            };
            a.ac.s = function(g) {
                if ("undefined" !== typeof g && 0 <= g && !a.ac.h[g]) {
                    a.ac.h[g] = {};
                    a.ac.h[g].allEdgesSeen = !1;
                    a.ac.h[g].mediatorIds = {};
                    a.ac.h[g].outer = {
                        topLeft: !1,
                        topRight: !1,
                        bottomLeft: !1,
                        bottomRight: !1
                    };
                    a.ac.h[g].inner = {
                        topLeft: !1,
                        topRight: !1,
                        bottomLeft: !1,
                        bottomRight: !1
                    };
                    a.ac.h[g].stateMask = 0;
                    var d = "rectsAvailable",
                        c = a.m.a.azsx(d, a.ac.q);
                    a.ac.h[g].mediatorIds[d] = c;
                    d = "adEdgesViewStatus";
                    c = a.m.a.azsx(d,
                        a.ac.r);
                    a.ac.h[g].mediatorIds[d] = c;
                    d = "adFullyVisible";
                    c = a.m.a.azsx(d, k, {
                        condition: function(b, c) {
                            return b && c && !a.ac.d(b.zr) && a.o && a.o.b && c === a.o.b(b.zr)
                        },
                        once: !0
                    });
                    a.ac.h[g].mediatorIds[d] = c
                }
            };
            a.ac.t = function(g) {
                return a.ac.h[g].failsafe
            };
            a.ac.r = function(g, d, c) {
                function b(b, l, m) {
                    m && (a.b.forEach(["topLeft", "topRight", "bottomLeft", "bottomRight"], function(a) {
                        !e[a] && d[a] && (e[a] = !0, n(g, a, !0));
                        !f[a] && c[a] && (f[a] = !0, n(g, a, !1))
                    }), (e.topLeft && e.topRight && f.bottomLeft && f.bottomRight || f.topLeft && f.topRight &&
                        e.bottomLeft && e.bottomRight || e.topLeft && e.bottomLeft && f.topRight && f.bottomRight || f.topLeft && f.bottomLeft && e.topRight && e.bottomRight) && k(g))
                }
                if (!0 !== a.ac.h[g].allEdgesSeen) {
                    c && "object" === typeof c || (c = d);
                    var e = a.ac.h[g].outer,
                        f = a.ac.h[g].inner;
                    a.m.a.azsx("adCheckingState", b, {
                        once: !0,
                        condition: function(b, c) {
                            return a.o.b(b.zr) === c
                        }
                    })
                }
            };
            a.ac.d = function(g) {
                return "undefined" !== typeof g && g in a.ac.h ? a.ac.h[g].allEdgesSeen : !1
            };
            (function(a) {
                function d(a, b) {
                    return function(c) {
                        var d = a.maxContinuouslyInViewTime,
                            e = b.get("currentContinuouslyInViewTime");
                        e > d && (a.maxContinuouslyInViewTime = e, a.checkMilestoneReached());
                        c || b.set("currentContinuouslyInViewTime", 0)
                    }
                }

                function c() {
                    return !1
                }

                function b(b) {
                    var c = b.fixedInViewTimeRequirement;
                    this.percvRequired = b.percvRequired;
                    this.shouldConsiderLargeAds = a.b.dg(b.largeAdSize);
                    this.largeAdSize = b.largeAdSize;
                    this.largePercvRequired = b.largePercvRequired;
                    this.requiresPassthrough = b.requiresPassthrough;
                    this.qsKey = b.qsKey;
                    b.percvRequiredPassthrough && (this.percvRequiredPassthrough =
                        b.percvRequiredPassthrough);
                    this.getInViewTimeRequirement = function(a) {
                        return c
                    }
                }

                function h(b, c) {
                    return a.b.l() ? c === a.ac.e.n ? a.ac.e.n.b : a.ac.f.m.b : c === a.ac.e.n ? a.ac.e.n.a : a.ac.f.m.a
                }

                function f(b, c, h) {
                    this.label = h;
                    this.config = c;
                    this.groupmMilestoneReached = !1;
                    this.maxContinuouslyInViewTime = 0;
                    this.ad = b;
                    this.fullViewEventPixelFired = !1;
                    var k = this;
                    h = a.bb.d(b, a.ac.u, "groupm_counter_" + b.yg + t.random());
                    var l = d(k, h);
                    if (c === a.ac.f.m.a || c === a.ac.f.m.b) c = a.m.a.azsx("fullOtsReached", function() {
                        k.groupmMilestoneReached = !0;
                        k.milestoneFailsafeTriggered = !0
                    }, {
                        once: !0,
                        condition: function(c, d) {
                            var e = a.o.b(b.zr);
                            return c.zr === b.zr && d === e
                        }
                    }), e[b.zr] = c;
                    this.checkMilestoneReached = function() {
                        var b;
                        b = k.maxContinuouslyInViewTime;
                        var c;
                        if (!0 === k.groupmMilestoneReached) return !0;
                        c = k.config.getInViewTimeRequirement();
                        b = k.config.requiresPassthrough(k.ad) ? a.ac.d(k.ad.zr) && b >= c : b >= c;
                        k.groupmMilestoneReached = b;
                        !k.fullViewEventPixelFired && b && (k.fullViewEventPixelFired = !0, k.ad.fireFullViewEvent = !0);
                        return k.groupmMilestoneReached
                    };
                    h.set("currentContinuouslyInViewTime",
                        0, {
                            useDeltaCompensation: !0,
                            shouldIncrementFn: function(b, c) {
                                var d, e;
                                d = c.getLastInviewPercent();
                                var h = k.config.percvRequired,
                                    f = k.config.largePercvRequired;
                                e = a.b.da(b);
                                d = k.config.requiresPassthrough(k.ad) ? d >= k.config.percvRequiredPassthrough : (e = k.config.shouldConsiderLargeAds && e >= k.config.largeAdSize) ? d >= f : d >= h;
                                return d
                            },
                            postIncrementationFn: l
                        })
                }
                a.ac.u = {};
                a.ac.e = {};
                a.ac.e.b = .98;
                a.ac.e.c = 237650;
                a.ac.e.d = .5;
                a.ac.e.e = a.ac.e.b;
                a.ac.e.f = 1E3;
                a.ac.e.g = a.ac.e.f;
                a.ac.e.h = .98;
                a.ac.e.i = 294E3;
                a.ac.e.j = .8;
                a.ac.e.k =
                    15E3;
                a.ac.e.l = "im";
                a.ac.e.m = "hj";
                a.ac.e.n = {};
                a.ac.e.n.a = {};
                a.ac.e.n.b = {};
                var k = {
                    percvRequired: a.ac.e.b,
                    largeAdSize: a.ac.e.c,
                    largePercvRequired: a.ac.e.d,
                    requiresPassthrough: c,
                    fixedInViewTimeRequirement: a.ac.e.f,
                    viewTimeCap: !1,
                    qsKey: a.ac.e.l
                };
                a.ac.e.n.a = new b(k);
                a.ac.e.n.b = a.ac.e.n.a;
                a.ac.f = {};
                a.ac.f.b = .98;
                a.ac.f.c = 237650;
                a.ac.f.d = .5;
                a.ac.f.e = .98;
                a.ac.f.f = 1E-4;
                a.ac.f.g = 1E3;
                a.ac.f.h = 1E3;
                a.ac.f.i = .98;
                a.ac.f.j = 294E3;
                a.ac.f.k = .8;
                a.ac.f.l = 15E3;
                a.ac.f.m = {};
                a.ac.f.m.a = {};
                a.ac.f.m.b = {};
                a.ac.f.n = "in";
                a.ac.f.o =
                    "hj";
                k = {
                    percvRequired: a.ac.f.b,
                    largeAdSize: a.ac.f.c,
                    largePercvRequired: a.ac.f.d,
                    requiresPassthrough: c,
                    fixedInViewTimeRequirement: a.ac.f.g,
                    viewTimeCap: !1,
                    qsKey: a.ac.f.n
                };
                a.ac.f.m.a = new b(k);
                k = {
                    percvRequired: a.ac.f.e,
                    percvRequiredPassthrough: a.ac.f.f,
                    largeAdSize: !1,
                    largePercvRequired: !1,
                    requiresPassthrough: function(b) {
                        var c;
                        c = a.d.u(a.d.g);
                        var d = b.currentWidth || 0,
                            e = b.currentHeight || 0;
                        a.d.br ? (b = a.d.z, c = a.d.aa) : (b = c.width || 0, c = c.height || 0);
                        return b && c ? e > c || d > b : !1
                    },
                    fixedInViewTimeRequirement: a.ac.f.h,
                    viewTimeCap: !1,
                    qsKey: a.ac.f.n
                };
                a.ac.f.m.b = new b(k);
                a.ac.e.a = function(b) {
                    var c = h(b, a.ac.e.n);
                    if (!1 !== c) return a.ac.s(b.zr), b.groupmV2 = b.groupmV2 || new f(b, c, "GroupM V2"), b.groupmV2
                };
                a.ac.f.a = function(b) {
                    var c = h(b, a.ac.f.m);
                    if (!1 !== c) return a.ac.s(b.zr), b.groupmV3 = b.groupmV3 || new f(b, c, "GroupM V3"), b.groupmV3
                };
                a.ac.c = function(a, b) {
                    b = b || {};
                    var c = u[a];
                    if ("object" !== typeof c) return b;
                    if ("object" === typeof c.groupmV2) {
                        var d = c.groupmV2.config.qsKey;
                        b[d] = c.groupmV2.checkMilestoneReached() ? 1 : 0
                    }
                    "object" === typeof c.groupmV3 &&
                        (d = c.groupmV3.config.qsKey, b[d] = c.groupmV3.checkMilestoneReached() ? 1 : 0);
                    return b
                }
            })(a);
            a.m.a.azsx("adKilled", function(g) {
                if (g && !g.ep && (e.hasOwnProperty(g.zr) && a.m.a.sxaz("fullOtsReached", {
                        id: e[g.zr]
                    }), a.ac && a.ac.u && "object" === typeof a.ac.u))
                    for (var d in a.ac.u) a.ac.u.hasOwnProperty(d) && -1 < a.b.indexOf(d, "groupm_counter_" + g.yg) && delete a.ac.u[d]
            })
        })(p);
        (function(a) {
            function n(e, g) {
                return function(d, c) {
                    var b, g = {
                            large: e.config.LARGE_SIZE_REQ,
                            normal: e.config.NORMAL_SIZE_REQ
                        },
                        f = c.getLastInviewPercent();
                    b = (b = a.b.da(d) >= e.config.LARGE_AD_THRESHOLD) && f >= g.large || !b && f >= g.normal;
                    return e.fullyVisOnLastCheck = b
                }
            }

            function f(e, g) {
                return function(d) {
                    var c = e.maxContinuouslyInViewTime,
                        b = g.get("currentContinuouslyInViewTime");
                    b > c && (e.maxContinuouslyInViewTime = b, c = b >= e.config.TIME_THRESHOLD, a.d.dw(e.ad, !0) && !e.fullViewEventPixelFired && c && (e.fullViewEventPixelFired = !0, g.set("currentContinuouslyInViewTime", 0, {}), e.ad.fireFullViewEvent = !0));
                    d || g.set("currentContinuouslyInViewTime", 0)
                }
            }

            function k(k, g) {
                this.ad = k;
                this.label = g;
                this.counters = {};
                this.config = e.config;
                this.fullViewEventPixelFired = !1;
                this.maxContinuouslyInViewTime = 0;
                this.fullyVisOnLastCheck = !1;
                var d = a.bb.d(this.ad, this.counters, "publicis_counter_" + k.yg + t.random()),
                    c = n(this, d),
                    b = f(this, d);
                d.set("currentContinuouslyInViewTime", 0, {
                    ignoreOmidCheck: !0,
                    useDeltaCompensation: !0,
                    shouldIncrementFn: c,
                    postIncrementationFn: b
                })
            }
            a.ap = {};
            var e = {
                v1: {},
                config: {}
            };
            e.v1.display = {};
            e.v1.display.LARGE_AD_THRESHOLD = 237650;
            e.v1.display.NORMAL_SIZE_REQ = .98;
            e.v1.display.LARGE_SIZE_REQ =
                .3;
            e.v1.display.TIME_THRESHOLD = 1E3;
            e.v1.video = {};
            e.v1.video.LARGE_AD_THRESHOLD = 237650;
            e.v1.video.NORMAL_SIZE_REQ = .98;
            e.v1.video.LARGE_SIZE_REQ = .5;
            e.v1.video.TIME_THRESHOLD = 2E3;
            e.v1.display.VIEWABLE_KEY = "pd";
            e.v1.video.VIEWABLE_KEY = "pv";
            e.config = e.v1.display;
            a.ap.b = function(a) {
                a.publicis = a.publicis || new k(a, "Publicis V1");
                return a.publicis
            };
            a.ap.a = function(a, e) {
                e = e || {};
                var d = u[a];
                if ("object" !== typeof d) return e;
                d = d.publicis;
                "object" === typeof d && (e[d.config.VIEWABLE_KEY] = d.fullViewEventPixelFired ? 1 :
                    0);
                return e
            };
            a.m.a.azsx("adKilled", function(e) {
                if (e && !e.ep && e.publicis && e.publicis.counters && "object" === typeof e.publicis.counters)
                    for (var g in e.publicis.counters) e.publicis.counters.hasOwnProperty(g) && -1 < a.b.indexOf(g, "publicis_counter_" + e.yg) && delete e.publicis.counters[g]
            })
        })(p);
        (function(a) {
            var n = a.ay.g;
            a.ay.g = function(f, k, e, l) {
                var g;
                if (a.d.t) {
                    var d = a.k.g(f);
                    (g = f.className && -1 !== f.className.indexOf("str-adunit") && d) || (g = g || a.b.getElementsByClassName("str-adunit", !1, d)[0]);
                    if (g)
                        if (a.b.ca(g)) {
                            if (k.adFindingMethod =
                                "Turner Override 1", g = a.e.e(g, g.nodeName, !1, void 0, k, e)) return g
                        } else return !1
                }
                return (g = n(f, k, e, l)) ? g : !1
            };
            a.bh.c = function(f) {
                var k = a.d.ap().isInApp;
                f = f && f.moatClientSlicer1;
                k && "string" === typeof f && (k = 0 <= f.indexOf("/8663477/PGA/major/new-rydercup"), a.b.o() && k ? a.bh.a = !0 : 0 <= f.indexOf("/Toon/") && (a.bh.a = !0))
            }
        })(p);
        (function(a) {
            function n(e) {
                if (e.version == a.bi.a) return !0;
                var f = a.bi.a + "-beta" === e.version,
                    g = a.bi.a === e.version + "-beta";
                if (("moatframe" === e.type || "addThis" === e.type) && (f || g)) return !0
            }
            a.bi = {};
            a.bi.a = "1.2";
            a.b.dz() && (a.bi.a += "-beta");
            a.bi.prefix = "MSFAPI";
            a.bi.b = {};
            a.bi.c = {};
            var f = a.d.bb.a,
                k = a.d.bd;
            a.bi.d = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
            a.bi.e = /@([a-z0-9]+)@@(.*)/i;
            a.bi.f = function(e) {
                if (e) {
                    var k = a.bi.g(e);
                    k.listening || (r.dcsx.ynds(e, "message", "message-" + f, "ME-" + f), k.listening = !0, r.swde.azsx("allAdsKilled", function() {
                        a.bi.h(e)
                    }, {
                        once: !0
                    }));
                    var g = r.swde.azsx("message-" + f, a.bi.i);
                    a.m.a.azsx("allLocalAdsKilled", function() {
                        r.swde.sxaz("message-" + f, {
                            id: g
                        })
                    }, {
                        once: !0
                    })
                }
            };
            a.bi.g = function(e) {
                var k = "Moat#PML#" + a.d.av + "#" + a.bi.a;
                e[k] || (e[k] = {
                    id: f,
                    listening: !1
                });
                return e[k]
            };
            a.bi.h = function(e) {
                var k = e && a.bi.g(e);
                a.p.d(e, "message", a.bi.i);
                r.dcsx && r.dcsx.engn({
                    listenerName: "ME-" + f
                });
                r.swde.sxaz("message-" + f, {
                    callback: a.bi.i
                });
                k && (k.listening = !1)
            };
            a.bi.j = function(e) {
                return a.bi.prefix + "#" + e + "#"
            };
            a.bi.k = function(e) {
                var f = e.match(a.bi.d);
                e = !1;
                f && 7 == f.length && (e = {
                    prefix: f[1],
                    version: f[2],
                    uid: f[3],
                    type: f[4],
                    request: f[5],
                    data: f[6]
                }, (f = e.data.match(a.bi.e)) && 3 == f.length && (e.cmd =
                    f[1], e.arg = f[2]), e.version && -1 !== a.b.indexOf(e.version, "-beta") && (e.isBeta = !0));
                return e
            };
            a.bi.i = function(e) {
                if (!(e && e.origin && e.data && "string" === typeof e.data)) return !1;
                var f = a.bi.k(e.data),
                    g = f && f.uid == k.toString();
                if (f && !g && n(f) && (e.msgData = f, f.request in a.bi.c && (e.triggerCallback = function() {
                        a.bi.c[f.request] && (a.bi.c[f.request](e), "addThis" !== f.type && (a.bi.c[f.request] = null, delete a.bi.c[f.request]))
                    }), a.bi.b[f.type]))
                    for (var g = 0, d = a.bi.b[f.type].length; g < d; g++) a.bi.b[f.type][g](e)
            };
            a.bi.l = function(e,
                f) {
                a.bi.b[e] = [f]
            };
            a.bi.m = function(e, f, g, d) {
                "object" == typeof f && (f = a.b.cf(f));
                d = d || t.floor(1E10 * t.random());
                "function" == typeof g && (a.bi.c[d] = g);
                e = a.bi.j(a.bi.a) + k + "#" + e + "#" + d + "#" + f;
                return {
                    request: d,
                    msg: e
                }
            };
            a.bi.n = function(e, f, g, d, c) {
                "object" == typeof g && (g = a.b.cf(g));
                return a.bi.m(e, "@" + f + "@@" + g, d, c)
            };
            a.bi.o = function(e, f, g) {
                try {
                    if (!e || !e || !e.source) return !1;
                    e.source.postMessage(a.bi.m(e.msgData.type, f, g, e.msgData.request).msg, "*")
                } catch (d) {
                    return !1
                }
                return !0
            };
            a.bi.p = function(e, f, g) {
                try {
                    var d = a.k.i(f ||
                        window.top);
                    if (!d) return a.p.f(function() {
                        a.bi.p(e, f, g)
                    }, 200);
                    for (var c = 0; c < d.length; c++) g && d[c] == window || d[c].postMessage(e, "*")
                } catch (b) {}
            };
            a.m.a.azsx("modulesReady", a.b.dk([window], a.bi.f), {
                once: !0
            });
            a.m.a.azsx("stopPostMessageListeners", a.b.dk([window], a.bi.h), {
                once: !0
            })
        })(p);
        (function(a) {
            a.ak = {};
            a.ak.c = {};
            a.ak.c.a = "CF";
            a.ak.c.b = "CNF";
            a.ak.c.c = "CNS";
            a.ak.b = {};
            a.ak.b.b = !1;
            a.ak.b.c = [];
            a.ak.d = {};
            a.ak.e = {};
            var n = !1,
                f = [];
            a.ak.b.a = function() {
                var f = a.ak.f();
                a.ak.b.b || a.d.e || (f = a.bi.n("moatframe", "check",
                    f,
                    function(e) {
                        e = a.b.cg(e.msgData.data);
                        var f = "string" === typeof a.d.i;
                        e && "string" === typeof e.fullUrl && "number" === typeof e.urlSrc && !f && a.b.ar(e.fullUrl) && !a.d.bf && (a.d.h(e.urlSrc), a.d.i = e.cleanUrl, a.d.ft = e.fullUrl, a.d.be = e.fullUrl, a.d.bf = !0);
                        e && e.available && !a.ak.b.b && (a.d.ch = !0, a.ak.b.b = !0, e = "MoatFrame#geom#" + (new q).getTime(), a.p.g(a.ak.b.d, null, 200, e), a.ak.b.c.push(e), a.m.a.azsx("allLocalAdsKilled", a.ak.g, {
                            once: !0
                        }), a.m.a.zaxs("Moatframe:Ready", e))
                    }), a.bi.p(f.msg, !1, !0))
            };
            a.ak.h = function() {
                a.bi.l("moatframe",
                    a.ak.i);
                a.bi.l("addThis", a.ak.i);
                a.bi.p(a.bi.m("moatframe", "ping").msg, !1, !0)
            };
            a.ak.a = function(f) {
                var e = a.ak.b.e;
                if (!e) return !1;
                var l = a.aa.i(f.aa),
                    g = a.aa.o(l.rect, e.el, e.et),
                    d = a.aa.o(l.visibleRect, e.el, e.et),
                    d = a.aa.n(d, {
                        left: e.vl,
                        right: e.vr,
                        top: e.vt,
                        bottom: e.vb
                    }),
                    l = (d.right - d.left) * (d.bottom - d.top) / l.area,
                    c = !1;
                e && "number" === typeof e.pv && !isNaN(e.pv) && (a.b.dt(l, e.pv, .01) && "sframe" === a.o.b(f.zr) && (c = !0), l = t.min(l, e.pv));
                e.m || (c = !0);
                c && a.m.a.zaxs("rectsAvailable", f.zr, g, d);
                e && "boolean" === typeof e.ia &&
                    (a.d.ci = e.ia);
                e && "number" === typeof e.m && !isNaN(e.m) && (a.d.cj = e.m);
                return l
            };
            a.ak.j = function(f) {
                return "undefined" !== typeof f && a.ak.e && a.ak.e[f] ? (a.ak.e[f] = null, !0) : !1
            };
            a.ak.g = function() {
                var f = a.bi.m("moatframe", "kill", null);
                a.bi.p(f.msg, !1, !0)
            };
            a.ak.f = function() {
                var f = a.d.ab,
                    e = a.d.ac;
                return f && e ? {
                    width: f,
                    height: e
                } : !1
            };
            a.ak.k = function() {
                return a.d.e || a.d.bw()
            };
            a.ak.l = function(f) {
                var e = !1;
                a.b.forEach(a.ak.c, function(a) {
                    if (a == f) return e = !0, !1
                });
                return e
            };
            a.ak.i = function(f) {
                var e = f.msgData.cmd || f.msgData.data;
                if (e)
                    if (f.triggerCallback) f.triggerCallback(f);
                    else if (a.ak.d[e]) a.ak.d[e](f);
                else a.ak.l(e) || a.bi.o(f, a.ak.c.b)
            };
            a.ak.m = function(f) {
                var e = {},
                    l = f.msgData.arg && a.b.cg(f.msgData.arg);
                if (a.ak.n(window, f.source, f.msgData.uid, l) && a.ak.k()) {
                    if (e.available = !0, a.d.bf && (l = a.d.be) && a.d.bf && a.b.ar(l)) {
                        var g = a.d.fs || a.b.at();
                        a.d.fs = g;
                        e.cleanUrl = g;
                        e.fullUrl = l;
                        e.urlSrc = 1
                    }
                } else e.available = !1;
                a.bi.o(f, e)
            };
            a.ak.o = function(f, e) {
                if (!f || !e) return !1;
                for (var l = a.k.c(window).pop(), g = a.k.k(f, 10), d = !1, c = !1, b = null, h = null,
                        n, p = g.length - 1; 0 <= p; p--)
                    if (g[p] == l && (d = !0), d && !a.k.j(g[p])) {
                        h = g[p];
                        break
                    } d && h && ((b = h && h.parent && h.parent.document) && (n = a.k.f(b, h)), n && (l = n.offsetWidth, g = n.offsetHeight, l == e.width && g == e.height ? c = !0 : (l *= g, g = e.width * e.height, c = .98 <= t.min(l, g) / t.max(l, g))));
                return {
                    isNested: c,
                    iframe: n,
                    iframeParentDoc: b
                }
            };
            a.ak.p = function(f) {
                return f && f.parent && a.k.f(f.parent.document, f)
            };
            a.ak.q = function(f) {
                (f = "undefined" !== typeof f && a.ak.e && a.ak.e[f]) && "boolean" == typeof f.isWithinReach && (f.isNested && !f.iframeParentDoc &&
                    (f.isWithinReach = !1), f.isNested || f.win && !a.k.d(f.win) || (f.isWithinReach = !1));
                return f
            };
            a.ak.n = function(f, e, l, g) {
                var d, c, b = {
                    isNested: !1,
                    iframe: null,
                    iframeParentDoc: null
                };
                if ((d = a.ak.q(l)) && d.isWithinReach) return !0;
                c = a.k.m(f, e, !0);
                d && "undefined" == typeof d.isWithinReach ? d.isWithinReach = c : (c ? e = a.ak.p(e) : (b = a.ak.o(e, g), (e = b.iframe) && (c = !0)), d = {
                    dimensions: g,
                    iframe: e,
                    iframeParentDoc: b.iframeParentDoc,
                    isNested: b.isNested,
                    isWithinReach: c,
                    win: f
                }, a.ak.e[l] = d);
                return d.isWithinReach
            };
            a.ak.r = function(a, e, f, g, d) {
                if (!a ||
                    !e) return !1;
                a = {
                    w: a.width,
                    h: a.height,
                    el: a.left,
                    et: a.top,
                    er: a.right,
                    eb: a.bottom,
                    vl: e.left,
                    vt: e.top,
                    vr: e.right,
                    vb: e.bottom
                };
                "boolean" === typeof g && (a.ia = g);
                "number" !== typeof f || isNaN(f) || (a.m = f);
                "number" !== typeof d || isNaN(d) || (a.pv = 1 < d ? d / 100 : d);
                return a
            };
            a.ak.s = function(f) {
                if (!f) return !1;
                if (a.d.ap().isInApp && a.d.bw() && a.am) {
                    f = a.am.f(f);
                    if (!f) return !1;
                    var e = a.am.b;
                    return f = a.ak.r(f.elementRect, f.visibleRect, 1, !0, e && e.percv)
                }
                f = a.aa.i(f);
                return f ? f = a.ak.r(f.cumulRect, f.visibleRect, 0, !1) : !1
            };
            a.ak.b.d = function() {
                if (!n) {
                    n = !0;
                    var f = a.bi.m("moatframe", "geom", function(e) {
                        n = !1;
                        a.ak.l(e.msgData.data) || (a.ak.b.e = a.b.cg(e.msgData.data))
                    });
                    a.bi.p(f.msg, !1, !0)
                }
            };
            a.ak.d.ping = function(f) {
                f && f.source === window || a.b.ea() && f.msgData.isBeta || !a.d.e && a.d.dl() && a.ak.b.a()
            };
            a.ak.d.check = function(k) {
                if (!a.b.dz() || k.msgData.isBeta) {
                    var e = !0;
                    a.d.k() && (e = a.d.bw(), !e && a.am.d && f.push(k));
                    e && a.ak.m(k)
                }
            };
            a.ak.d.geom = function(f) {
                if (!a.b.dz() || f.msgData.isBeta)
                    if (a.ak.n(window, f.source, f.msgData.uid) && a.ak.k()) {
                        var e = a.ak.e && a.ak.e[f.msgData.uid] &&
                            a.ak.e[f.msgData.uid].iframe;
                        if (e && (e = a.ak.s(e))) {
                            a.bi.o(f, e);
                            return
                        }
                        a.bi.o(f, a.ak.c.a)
                    } else a.bi.o(f, a.ak.c.c)
            };
            a.ak.d.kill = function(f) {
                a.ak.j(f.msgData.uid)
            }
        })(p);
        (function(a) {
            a.bf = {};
            a.bf.b = 5E3;
            a.bf.c = function(n) {
                if (!a.d.e) return !1;
                n.activetime = {};
                n.activetime.counters = {};
                a.bf.d(n);
                a.m.a.azsx("adKilled", a.bf.e, {
                    condition: function(a) {
                        return n.zr == a.zr
                    },
                    once: !0
                });
                a.bf.f(n)
            };
            a.bf.f = function(n) {
                if (n.activetime) {
                    var f = a.o.p(n.zr);
                    if (n.activetime.onInViewTimeCount)
                        for (var k in f) f[k].removeListener &&
                            f[k].removeListener(n.activetime);
                    else n.activetime.onInViewTimeCount = a.b.dk([n], a.bf.g);
                    (f = a.o.a(n.zr, !0)) && f.addListener(n.activetime)
                }
            };
            a.bf.d = function(n) {
                n.activetime.mouseSubId = r.swde.azsx("mouseEvent", a.b.dk([n], a.bf.h));
                n.activetime.mouseLocalSubId = a.m.a.azsx("mouseEvent", a.b.dk([n], a.bf.h));
                n.activetime.keyboardSubId = r.swde.azsx("keyboardEvent", a.b.dk([n], a.bf.i));
                n.activetime.focusSubId = r.swde.azsx("focusStateChange", a.b.dk([n], a.bf.j))
            };
            a.bf.e = function(n) {
                if (n.activetime && (r.swde.sxaz("mouseEvent", {
                        id: n.activetime.mouseSubId
                    }), a.m.a.sxaz("mouseEvent", {
                        id: n.activetime.mouseLocalSubId
                    }), r.swde.sxaz("keyboardEvent", {
                        id: n.activetime.keyboardSubId
                    }), r.swde.sxaz("focusStateChange", {
                        id: n.activetime.focusSubId
                    }), n.activetime && n.activetime.counters && "object" === typeof n.activetime.counters))
                    for (var f in n.activetime.counters) delete n.activetime.counters[f]
            };
            a.bf.k = function(n, f) {
                a.bf.l(n, !0)
            };
            a.bf.h = function(n, f) {
                a.bf.l(n, !0)
            };
            a.bf.i = function(n, f) {
                a.bf.l(n, !0)
            };
            a.bf.j = function(n, f) {
                f && a.bf.l(n, !0)
            };
            a.bf.l =
                function(n, f) {
                    var k = (new q).getTime(),
                        k = n.activetime.activeTS && k - n.activetime.activeTS || 0;
                    f && (1E3 < k || !n.activetime.active) && (n.activetime.checkID && a.b.a(n.activetime.checkID), n.activetime.activeTS = (new q).getTime(), n.activetime.checkID = a.p.f(a.b.dk([n], a.bf.m), a.bf.b));
                    n.activetime.active = f
                };
            a.bf.m = function(n) {
                if (n.activetime.active) {
                    var f = (new q).getTime() - n.activetime.activeTS < a.bf.b;
                    a.bf.l(n, f)
                }
            };
            a.bf.g = function(n, f, k, e, l) {
                k = a.bb.a(n.activetime.counters, l);
                l = a.o.i(n.zr, l);
                l = (n = n.activetime.active) &&
                    l && l.visible && l.visible();
                e = k.get("lastActiveVis", !1);
                !k.get("wasEverActiveAndFocused") && n && k.set("wasEverActiveAndFocused", 1);
                e && l ? k.increment("activeInviewTime", t.max(f, 0)) : (e || l) && k.increment("activeInviewTime", t.max(t.round(.5 * f), 0));
                k.set("lastActiveVis", l)
            };
            a.bf.a = function(n, f) {
                if (!a.e.c()) {
                    f.rf = a.d.fu ? 1 : 0;
                    var k;
                    k = a.d.fu;
                    if (!a.d.e) return k = k || a.focus.pageIsVisible() || n && n.counters && n.counters.strictDwell && n.counters.strictDwell.tCur && 0 < n.counters.strictDwell.tCur, f.re = k ? 1 : 0, f;
                    if (!n.activetime) return f;
                    var e = a.o.b(n.zr),
                        e = a.bb.a(n.activetime.counters, e);
                    k = k || e.get("wasEverActiveAndFocused");
                    f.re = k ? 1 : 0;
                    e && 0 < e.get("activeInviewTime") && (f.ft = e.get("activeInviewTime"), f.fv = e.get("lastActiveInviewTime"), f.fw = e.get("activeInviewTimeFirstDelta", e.get("activeInviewTime")), e.set("lastActiveInviewTime", e.get("activeInviewTime")));
                    return f
                }
            };
            a.m.a.azsx("viewCounterStarted", a.bf.f);
            a.m.a.azsx("startAdTracking", a.bf.c)
        })(p);
        (function(a) {
            function n(e) {
                e.functionInProgress = !1;
                return 0 < e.pendingFunctions.length ?
                    (e = e.pendingFunctions.shift(), a.b.dk(e, a.ad.call, a.ad)(), !0) : !1
            }

            function f() {
                try {
                    a = window.__b, (0, window.__w)("INNER_FUNCTION"), window.__w = void 0, window.__b = void 0
                } catch (e) {
                    var f = e.name + " in closure (moat.customIframe): " + e.message + ", stack=" + e.stack;
                    try {
                        var g = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                            d = g ? "" : document.referrer,
                            c = "undefined" !== typeof AB_SCAFFOLD && 2 === AB_SCAFFOLD.type,
                            b = "https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                            escape("undefined" === typeof K ? c ? "TURNERDFP1_BETA" : "TURNERDFP1" : K) + "&ac=1&k=" + escape(f) + "&ar=" + escape("da8ed23e15-clean") + "&iw=" + escape("488ebc3") + "&j=" + escape(d) + "&cs=" + (new q).getTime();
                        g ? omidNative.sendUrl(b) : (new Image(1, 1)).src = b
                    } catch (k) {}
                }
            }

            function k(e) {
                if (!e) return !1;
                var g = e.iframe,
                    d = g.contentWindow.document,
                    c = e.innerFunction,
                    b = e.innerFunctionCbName,
                    h = e.preserveDom;
                !1 !== a.d.ew() ? (h = d.createElement("script"), h.innerHTML = f.toString().replace('"INNER_FUNCTION"', c), d.body.appendChild(h)) :
                    (c = "<html><head></head><body><script>" + f.toString().replace('"INNER_FUNCTION"', c) + "\x3c/script>", h || (c += "<script>setTimeout(function() { document.close(); }, 1);\x3c/script>"), d.write(c + "</body></html>"));
                g.contentWindow.__b = e.Moat;
                g.contentWindow.__w = e.wrapper;
                g.contentWindow[f.toString().match(/function (\w+)\(\)/)[1]]();
                b && a.d.bb[b] && (a.d.bb[b] = null);
                if (!n(e.frameData)) a: if (d = e.setIframeDomain, e = e.preserveDom, g) {
                    var k;
                    if (!d) try {
                        k = g.contentWindow.document
                    } catch (p) {
                        break a
                    }
                    b = !1 === a.d.ew();
                    e ? d ? g.src =
                        "javascript:document.close();" : k.close() : d ? g.src = b ? "javascript:document.open(); document.close();" : 'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");' : b ? (k.open(), k.close()) : (k.head && (k.head.innerHTML = ""), k.body && (k.body.innerHTML = ""))
                }
            }

            function e(a) {
                if ("string" !== typeof a) return "";
                var e = a.charAt(0);
                "'" !== e && '"' !== e && (a = "'" + a + "'");
                return a
            }
            a.ad = {};
            a.ad.a = function(e, f, d, c) {
                if (!e) return !1;
                try {
                    var b = document.createElement("iframe"),
                        h = f || a.b.dn();
                    if (!b) return !1;
                    a.b.dr(b, c);
                    var k;
                    d ? (d = a.b.cv(d), k = function() {
                        a.b.cu(b, d)
                    }) : (d = a.d.g.document.body, k = function() {
                        d.insertBefore(b, d.insertBefore[0] || null)
                    });
                    var p = {
                        id: h,
                        iframe: b,
                        functionInProgress: !1,
                        pendingFunctions: [],
                        parent: d,
                        loaded: !1
                    };
                    b.onload = function() {
                        b.contentWindow && b.contentDocument && !p.loaded && (p.loaded = !0, n(p))
                    };
                    k();
                    p.loaded = p.loaded || b.contentDocument && "complete" === b.contentDocument.readyState;
                    e.customIframes || (e.customIframes = {});
                    e.customIframes[h] = p;
                    p.loaded && n(p);
                    a.m.a.azsx("adKilled",
                        function(b) {
                            var c = b.customIframes,
                                d;
                            for (d in c) c.hasOwnProperty(d) && a.ad.b(b, c[d].id)
                        }, {
                            condition: function(a) {
                                return e.zr == a.zr
                            },
                            once: !0
                        });
                    return h
                } catch (q) {}
                return !1
            };
            a.ad.b = function(a, e, d) {
                var c = a.customIframes[e];
                d = c && c.iframe;
                if (!c || !d) return !1;
                c = c.parent;
                if (!c) return !1;
                try {
                    c.removeChild(d)
                } catch (b) {}
                a.customIframes[e] = null;
                delete a.customIframes[e];
                return !0
            };
            a.ad.call = function(f, g, d, c, b, h) {
                if (!f || "undefined" === typeof g) return !1;
                var n = f && f.customIframes && f.customIframes[g];
                if (!n || !d) return !1;
                c = c && "string" !== typeof c ? c.toString() : e(c);
                d && "string" !== typeof d && (d = a.b.dp(d, c));
                b && "function" === typeof b || (b = function() {});
                if (n.functionInProgress || !n.loaded) return n.pendingFunctions.push([f, g, d, c, b, h]), !1;
                f = n.iframe;
                n.functionInProgress = !0;
                g = !1;
                try {
                    if (!n.iframe.contentDocument) throw Error();
                } catch (p) {
                    g = !0
                }
                d = a.p.l(a.b.dk([{
                    iframe: f,
                    frameData: n,
                    Moat: a,
                    wrapper: function(a) {
                        b(a)
                    },
                    innerFunction: d,
                    innerFunctionCbName: q,
                    setIframeDomain: g,
                    preserveDom: h
                }], k));
                if (g) {
                    var q;
                    do q = "Moat#iqcb" + t.floor(1E4 * t.random());
                    while (a.d.bb[q]);
                    a.d.g[a.d.bc][q] = d;
                    f.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' + a.d.bc + '"]["' + q + '"]();'
                } else d()
            }
        })(p);
        (function(a) {
            a.ae = {};
            a.ae.a = function(a, f) {
                function k(a) {
                    a = [{
                        name: "fr",
                        enabled: !0,
                        inview: a
                    }];
                    q && q(a)
                }

                function e(a) {
                    a && 5 > p ? p += 1 : a || (p = 0);
                    return p
                }

                function l(a) {
                    var c, d, f;
                    clearTimeout(h);
                    d = r;
                    f = d.inView;
                    c = d.time;
                    a = (new window.Date).getTime();
                    c = 2 < 1E3 / (a - c);
                    var g = r.inView,
                        l = c && !g && 0 === p;
                    t && (!c && g || l) && t && t(void 0);
                    e(c);
                    c = c && 5 === p;
                    c !== f && k(c);
                    d.inView = c;
                    d.time = a;
                    b()
                }

                function g() {
                    var a = r,
                        b = (new window.Date).getTime();
                    500 <= b - a.time && a.inView && (k(!1), a.inView = !1, a.time = b)
                }

                function d() {
                    for (var a = 0, b = m.length; a < b; a++) window.cancelAnimationFrame(m[a]);
                    m = []
                }

                function c() {
                    return {
                        time: (new window.Date).getTime(),
                        inView: !1
                    }
                }

                function b() {
                    r.inView && (h = setTimeout(g, 500));
                    20 <= m.length && d();
                    m.push(window.requestAnimationFrame(l))
                }
                var h, p = 0,
                    q = a && window && window.parent && window.parent[a],
                    t = f && window && window.parent && window.parent[f],
                    m = [],
                    r = c();
                window.onBlur =
                    function() {
                        e(!1);
                        r = c();
                        clearTimeout(h);
                        d()
                    };
                window.onFocus = b;
                b()
            }
        })(p);
        (function(a) {
            function n(b) {
                var c = {
                    oz: !0
                };
                if (!a.d.ap().isInApp || a.d.cu()) c.su = !0, c.of = !0;
                if (!d[b]) return !1;
                for (var e in d[b])
                    if (c[e] && d[b].hasOwnProperty(e) && !d[b][e]) return !1;
                return !0
            }

            function f(b) {
                if (!a.d.c()) {
                    a.as.e(b);
                    a.as.f(b);
                    a.as.g(b);
                    a.as.h(b);
                    var d = n(b.zr);
                    !b.hasAdLoadedfired && d ? c = !0 : !c && d && (d = {
                        e: 9
                    }, d.q = b.aq[9]++, a.v.a(b, d), c = !0)
                }
            }

            function k(b) {
                b = a.d.c() ? !0 : !1;
                return {
                    st: b,
                    su: b,
                    of: b,
                    oz: b
                }
            }
            var e = 0,
                l, g = u,
                d = {};
            a.as = {};
            a.as.c =
                function(a) {
                    return !1
                };
            a.as.d = function() {
                var b = (new q).getTime(),
                    c = b - e;
                if (e && !(1E3 > c)) {
                    e = b;
                    for (var d in g) g.hasOwnProperty(d) && f(g[d]);
                    a.m.a.zaxs("hiddenAds:updated")
                }
            };
            var c = !1;
            a.as.e = function(b) {
                d[b.zr] || (d[b.zr] = k(b));
                if (!0 !== d[b.zr].st) {
                    var c = a.o.a(b.zr);
                    c ? (b.isCurrentlyStacked = a.aa.s(b), !1 === d[b.zr].st && (d[b.zr].st = !1 === c.adStartedOnScreen() || !1 === b.isCurrentlyStacked)) : d[b.zr].st = !0
                }
            };
            a.as.f = function(b) {
                var c = d,
                    e = b.zr;
                c[e] = d[e] || k(b);
                var f = c[e].su;
                if (!f) {
                    var g = b.WINDOW || window,
                        f = b.AD_RECT || a.aa.l(b.aa,
                            g, b._calcVideoBasedOnContainer),
                        g = a.d.u(g),
                        f = b.isInIframe ? f && g && !(f.left >= g.width || 0 >= f.right || f.top >= g.height || 0 >= f.bottom) : !0;
                    c[e].su = f
                }
            };
            a.as.g = function(b) {
                var c = d,
                    e = b.zr;
                c[e] = d[e] || k(b);
                var f = c[e].of;
                f || (f = a.d.u(b.WINDOW), f = b.isInIframe ? f && !(5 >= f.width || 5 >= f.height) : !0, c[e].of = f)
            };
            a.as.h = function(b) {
                var c = d[b.zr];
                d[b.zr] = d[b.zr] || k(b);
                if (b.aa) {
                    var e = 0 < a.b.dj(b);
                    b.isCurrentlyTransparent = !e;
                    c.oz = c.oz || e;
                    return e
                }
                return c.oz
            };
            a.as.b = function(a) {
                var c = {},
                    e, f;
                for (f in d[a]) d[a].hasOwnProperty(f) &&
                    (e = d[a][f], c[f] = e ? 1 : 0);
                return c
            };
            a.as.a = function(b) {
                return a.d.ed() ? !1 : !n(b)
            };
            a.m.a.azsx("adLoaded", function(a) {
                a.hasAdLoadedfired = !0
            });
            a.m.a.azsx("startAdTracking", function(b) {
                f(b);
                e = (new q).getTime();
                l || (l = (new q).getTime() + "ha", a.m.a.azsx("view:tick", function() {
                    a.as.d()
                }, {
                    id: l
                }))
            });
            a.m.a.azsx("allLocalAdsKilled", function() {
                a.m.a.sxaz("view:tick", {
                    id: l
                });
                g = null
            }, {
                once: !0
            });
            a.m.a.azsx("adEntersView", function(b) {
                a.as.e(b)
            }, {
                once: !0
            });
            a.m.a.azsx("adKilled", function(a) {
                a && !a.ep && (delete a.elementsFromPointCache,
                    delete d[a.zr])
            })
        })(p);
        (function(a) {
            a.y = {};
            var n, f;
            a.y.g = function(k) {
                if (f) k();
                else if (n.googletag && n.googletag.apiReady && n.googletag.pubads()) f = n.googletag.pubads(), k();
                else {
                    n.googletag = n.googletag || {};
                    n.googletag.cmd = n.googletag.cmd || [];
                    var e = a.p.l(k),
                        l = function() {
                            var a = n.googletag;
                            (f = a && a.apiReady && a.pubads()) && e()
                        };
                    a.m.a.azsx("adKilled", function() {
                        var e = n.googletag;
                        if (e && a.b.ds(e.apiReady) && e.cmd && a.b.f(e.cmd)) {
                            var d = e.cmd.indexOf(l); - 1 !== d && e.cmd.splice(d, 1)
                        }
                    });
                    n.googletag.cmd.push(l)
                }
            };
            a.y.h =
                function() {
                    if (f && "function" !== typeof f.getSlots) return !1;
                    try {
                        return f.getSlots()
                    } catch (a) {
                        return []
                    }
                };
            a.y.e = function() {
                if (f && "function" === typeof f.getSlotIdMap) return f.getSlotIdMap()
            };
            a.y.i = function(a) {
                return f.getTargeting(a)
            };
            a.y.j = function() {
                if ("function" !== typeof f.getTargetingKeys || "function" !== typeof f.getTargeting) return !1;
                var k = f.getTargetingKeys(),
                    e = {};
                a.b.forEach(k, function(a) {
                    e[a] = f.getTargeting(a)
                });
                return e
            };
            a.y.k = function(a, e) {
                if ("function" !== typeof f.setTargeting) return !1;
                f.setTargeting(a,
                    e);
                return !0
            };
            a.y.l = function(a) {
                if ("function" !== typeof f.clearTargeting) return !1;
                f.clearTargeting(a)
            };
            a.y.m = function(a) {
                if (a && "function" === typeof a.getTargetingKeys) return a.getTargetingKeys()
            };
            a.y.n = function(a, e) {
                return a && "function" === typeof a.getTargeting && e ? a.getTargeting(e) : !1
            };
            a.y.o = function(f) {
                var e = {},
                    l = a.y.m(f);
                a.b.f(l) && a.b.forEach(l, function(g) {
                    e[g] = a.y.n(f, g)
                });
                return e
            };
            a.y.d = function(f) {
                if (f) {
                    f = a.y.o(f);
                    var e = a.y.j();
                    a.b.forEach(f, function(a, f) {
                        e[f] = a
                    });
                    return e
                }
            };
            a.y.p = function(a, e,
                f) {
                if (!(a && e && f && "function" === typeof a.setTargeting)) return !1;
                a.setTargeting(e, f)
            };
            a.y.q = function(a, e) {
                if (!a || "function" !== typeof a.clearTargeting) return !1;
                a.clearTargeting(e)
            };
            a.y.r = function(k, e) {
                if (k && e && f && "function" === typeof f.addEventListener) {
                    var l = a.p.l(e);
                    f.addEventListener(k, l)
                }
            };
            a.y.b = function(a) {
                if (a && "function" === typeof a.getSlotElementId) return a.getSlotElementId()
            };
            a.y.s = function(a) {
                if (a && "function" === typeof a.getSlotId && (a = a.getSlotId()) && "function" === typeof a.getId) return a = a.getId(),
                    n.document.getElementById("google_ads_iframe_" + a)
            };
            a.y.a = function(a) {
                if (a && "function" === typeof a.getAdUnitPath) return a.getAdUnitPath()
            };
            a.y.c = function(f) {
                if (f = a.y.a(f)) {
                    f = f && f.split("/");
                    var e = [];
                    a.b.forEach(f, function(a) {
                        0 < a.length && e.push(a)
                    });
                    return e
                }
            };
            a.y.t = function(f) {
                var e = [];
                f && "function" === typeof f.getSizes && a.b.forEach(f.getSizes(), function(a) {
                    "function" === typeof a.getWidth && "function" === typeof a.getHeight && e.push([a.getWidth(), a.getHeight()])
                });
                return e
            };
            a.y.u = function() {
                var a = n && n.googletag &&
                    n.googletag.sizeMapping;
                if (a) return a()
            };
            a.y.f = function() {
                if (f) {
                    var k, e = document.body;
                    a.b.forEach(3, function() {
                        k = e;
                        e = a.k.b(e);
                        if (!e) return !1
                    });
                    var l = k && k.id,
                        g, d = !1;
                    l && -1 < l.indexOf("google_ads_iframe") && (d = !0, g = l.replace(/google_ads_iframe_?/, ""));
                    if (d) {
                        var l = f.getSlotIdMap(),
                            c;
                        for (c in l)
                            if (c && "string" === typeof c && c === g) return l[c]
                    }
                }
            };
            a.y.v = function() {
                return n
            };
            a.y.w = function(a, e) {
                if (f && "function" !== typeof f.refresh) return !1;
                f.refresh(a, e)
            };
            (function() {
                n = a.d.g;
                var k = n.googletag;
                f = k && k.pubads && k.pubads()
            })()
        })(p);
        (function(a) {
            function n(b) {
                b && (a.d.bb.b || (a.d.bb.b = !0, r.dcsx && r.dcsx.ynds(window, "deviceorientation", "deviceorientation-" + a.d.bb.a, "deviceorientationFn" + a.d.bb.a)), c || (c = !0, r.swde.azsx("deviceorientation-" + a.d.bb.a, k)), g.hasOwnProperty(b.zr) || (g[b.zr] = new e))
            }

            function f(a) {
                a && delete g[a.zr]
            }

            function k(a) {
                var c = q.now(),
                    e = !1;
                200 < c - d && (d = c, e = !0);
                for (var f in u) u.hasOwnProperty(f) && g.hasOwnProperty(f) && (c = g[f], 1500 > c.eventsCount && (c.eventsCount += 1, e && c.handleOrientationEvent(a)))
            }

            function e() {
                this.validEventsHandledCount =
                    this.eventsHandledCount = this.eventsCount = 0;
                this.alpha = new l(0, 360);
                this.beta = new l(-180, 180);
                this.gamma = new l(-90, 90)
            }

            function l(a, c) {
                this.minExpectedVal = a;
                this.maxExpectedVal = c;
                this.normalizedMax = t.abs(this.minExpectedVal) + this.maxExpectedVal;
                this.rangeRight = this.rangeLeft = this.origin = null
            }
            a.be = {};
            var g = {},
                d = 0,
                c = !1;
            e.prototype.isValidEvent = function(a) {
                return !a.alpha && 0 !== a.alpha || !a.beta && 0 !== a.beta || !a.beta && 0 !== a.beta || 0 === a.alpha && 0 === a.beta && 0 == a.gamma ? !1 : !0
            };
            e.prototype.handleOrientationEvent =
                function(a) {
                    this.eventsHandledCount += 1;
                    this.isValidEvent(a) && (this.validEventsHandledCount += 1, this.alpha.addValue(a.alpha), this.beta.addValue(a.beta), this.gamma.addValue(a.gamma))
                };
            l.prototype.isOutsideRange = function(a) {
                return this.rangeLeft > this.rangeRight ? this.rangeLeft > a && a > this.rangeRight : a < this.rangeLeft || a > this.rangeRight
            };
            l.prototype.extendRange = function(a) {
                this.isOutsideRange(a) && ((a < this.rangeLeft ? this.rangeLeft - a : this.rangeLeft + this.normalizedMax - a) <= (a > this.rangeRight ? a - this.rangeRight :
                    this.normalizedMax - this.rangeRight + a) ? this.rangeLeft = a : this.rangeRight = a)
            };
            l.prototype.addValue = function(a) {
                var c = a + t.abs(this.minExpectedVal);
                null === this.origin ? (this.origin = a.toFixed(3), this.rangeRight = this.rangeLeft = c) : this.extendRange(c)
            };
            l.prototype.getRangeLength = function() {
                return null === this.origin ? -1 : this.rangeRight >= this.rangeLeft ? (this.rangeRight - this.rangeLeft).toFixed(3) : (this.normalizedMax - this.rangeLeft + this.rangeRight).toFixed(3)
            };
            a.be.a = function(a) {
                var c = {};
                g[a] && (a = g[a], c = {
                    oe: [a.eventsCount,
                        a.eventsHandledCount, a.validEventsHandledCount, a.alpha.origin ? a.alpha.origin : "null", a.alpha.getRangeLength(), a.beta.origin ? a.beta.origin : "null", a.beta.getRangeLength(), a.gamma.origin ? a.gamma.origin : "null", a.gamma.getRangeLength()
                    ].join(":")
                });
                return c
            };
            a.d.g.DeviceOrientationEvent && (a.m.a.azsx("adInitialized", n), a.m.a.azsx("adKilled", f), a.m.a.azsx("allLocalAdsKilled", function() {
                r && r.dcsx && r.dcsx.engn && r.dcsx.engn({
                    listenerName: "deviceorientationFn" + a.d.bb.a
                });
                r.swde.sxaz("deviceorientation-" + a.d.bb.a, {
                    callback: k
                });
                g = {};
                c = a.d.bb.b = !1
            }))
        })(p);
        (function(a) {
            a.bd = {};
            var n;
            a.bd.a = function() {
                if ("undefined" !== typeof n) return n;
                var f = a.k.a(),
                    k = ["-", "-", "-", "-", "-"];
                if (!f || !f.performance) return !1;
                var e = f.performance;
                if (!e || "function" !== typeof e.getEntriesByType) return !1;
                k[0] = f === window.top ? 1 : 0;
                for (var l = e.getEntriesByType("paint"), g = 0; g < l.length; g++) f = l[g], "first-paint" === f.name && (k[1] = t.round(f.startTime)), "first-contentful-paint" === f.name && (k[2] = t.round(f.startTime));
                e = e.getEntriesByType("navigation");
                0 < e.length && (f = e[0], "duration" in f && (k[3] = t.round(f.duration)), "domInteractive" in f && (k[4] = t.round(f.domInteractive)));
                return n = k.join(":")
            }
        })(p);
        p.m.a.zaxs("modulesReady", r);
        var Sa = p.focus.pageIsVisible();
        p.d.fu = 1 == window.history.length && !Sa && (p.d.e && "" != document.referrer || !p.d.e);
        var Aa = !0;
        p.b.az() && (Aa = !1);
        var za = p.d.be;
        p.b.av();
        p.m.a.azsx("adInitialized", function(a) {
            function n(a) {
                window._qs = a;
                (a = window.__b) && a.b.cw("https://z.moatads.com/px2/client.js", document.body)
            }

            function f(a) {
                var e = p.f.r();
                a = p.v.b(36, a.ao, e, !1, !0);
                a.qs.i = p.b.dx(K, "PX2");
                return p.v.j(a.qs)
            }
            if (a) {
                var k = 0 === t.floor(1E3 * t.random());
                a.px2 = {
                    inSample: !1,
                    success: !1
                };
                if (k && (a.px2.inSample = !0, k = p.ad.a(a, "ivt"))) {
                    var e = f(a);
                    p.ad.call(a, k, n, e, null, !0);
                    a.px2.success = !0
                }
            }
        }, {
            once: !0
        });
        p.d.m || p.d.ao || p.d.dz();
        (p.d.m || p.d.ao) && za && za.match("audit.adnxs.net") && p.d.dz();
        (p.d.m && p.d.fd() || "dummy.url" === p.b.av()) && p.d.dz();
        p.d.dz();
        p.ak.h();
        var B = p.b.ck(),
            xa = !1,
            Ka;
        va = "https://px.moatads.com";
        p.bg.a(Na);
        var Ja = function() {
            var a;
            a = arguments &&
                arguments[0];
            a = p.b.q() && p.d.k() && a && a.type && "beforeunload" === a.type ? !0 : !1;
            a || (r.zs && r.dcsx && (r.dcsx.engn({
                listenerName: "unloadFn" + p.d.bb.a
            }), r.dcsx.engn({
                listenerName: "beforeunloadFn" + p.d.bb.a
            })), wa || (wa = !0, p.e.b()), p.f && p.f.a(), ca(), p.m.a.zaxs("stopPostMessageListeners"))
        };
        !B && p.d.c() && (B = {
            _MoatProxyOf: "thisScript"
        });
        if (!B) return !1;
        p.c = B;
        p.b.cn(B);
        p.m.a.azsx("trackingReady", Ha, {
            once: !0
        });
        var Fa = p.x.d(B);
        p.bh.b(Fa);
        if (!p.bh.a) {
            if (p.d.k())
                if (p.d.ev()) p.d.eu();
                else {
                    p.n.e();
                    var Fa = p.d.d(),
                        Xa = p.d.di(),
                        Ta = p.d.cv(),
                        Ya = p.d.bm(),
                        gb = p.d.er && p.d.er(),
                        Ga = !1;
                    !Ta || gb || Xa ? Ta || Fa || Ya || (Ga = !0) : Ga = !0;
                    Ga && p.m.a.zaxs("trackingReady")
                }
            else p.m.a.zaxs("trackingReady");
            p.d.d() && p.q.p();
            p.m.a.azsx("allLocalAdsKilled", Ma, {
                once: !0
            })
        }
    })(Date, Math)
} catch (q) {
    var GLOBAL_VAR = this,
        ct = (new Date).getTime();
    GLOBAL_VAR["Moat#ETS"] || (GLOBAL_VAR["Moat#ETS"] = ct);
    GLOBAL_VAR["Moat#EMC"] || (GLOBAL_VAR["Moat#EMC"] = 0);
    var et = ct - GLOBAL_VAR["Moat#ETS"],
        hourElapsed = 36E5 <= et,
        msg = q.name + " in closure (global): " + q.message + ", stack=" + q.stack;
    if (!hourElapsed && 10 > GLOBAL_VAR["Moat#EMC"]) {
        GLOBAL_VAR["Moat#EMC"]++;
        try {
            var pixelDomain = "px.moatads.com",
                isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf),
                documentReferrer = isDomless ? "" : document.referrer,
                isBeta = "undefined" !== typeof AB_SCAFFOLD && 2 === AB_SCAFFOLD.type,
                viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "TURNERDFP1_BETA" : "TURNERDFP1" : AD_VIEW_HASH,
                pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) +
                "&ac=1&k=" + escape(msg) + "&ar=" + escape("da8ed23e15-clean") + "&iw=" + escape("488ebc3") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime();
            if (isDomless) omidNative.sendUrl(pxSrc);
            else {
                var moat_px = new Image(1, 1);
                moat_px.src = pxSrc
            }
        } catch (t) {}
    } else if (hourElapsed) {
        GLOBAL_VAR["Moat#EMC"] = 1;
        GLOBAL_VAR["Moat#ETS"] = ct;
        try {
            pixelDomain = "px.moatads.com", documentReferrer = (isDomless = "undefined" !== typeof omidNative && ("undefined" === typeof Image || Image && Image._MoatProxyOf)) ? "" : document.referrer, isBeta = "undefined" !==
                typeof AB_SCAFFOLD && 2 === AB_SCAFFOLD.type, viewHash = "undefined" === typeof AD_VIEW_HASH ? isBeta ? "TURNERDFP1_BETA" : "TURNERDFP1" : AD_VIEW_HASH, pxSrc = "https://" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape(viewHash) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("da8ed23e15-clean") + "&iw=" + escape("488ebc3") + "&j=" + escape(documentReferrer) + "&cs=" + (new Date).getTime(), isDomless ? omidNative.sendUrl(pxSrc) : (moat_px = new Image(1, 1), moat_px.src = pxSrc)
        } catch (t) {}
    }
};