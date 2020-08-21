/* Retrieved from https://web.archive.org/web/20200706220232js_/https://www.paypalobjects.com/pa/js/min/pa.js */
var _____WB$wombat$assign$function_____ = function(name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
} {
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    /*@ 2020 PayPal (v1.4.14) */
    ! function() {
        "use strict";
        var n = "https://web.archive.org/web/20200706220232/https://www.paypalobjects.com",
            t = n + "/pa/3pjs/tl/5.6.1",
            o = n + "/pa/3pjs/qualtrics/1.22.0/",
            a = n + "/pa/mi/3p/gtag/gtag.js",
            e = n + "/pa/mi/miconfig.js",
            c = "DC-6386697",
            u = "UA-53389718-12",
            r = 1,
            s = "ZN_1yNnlIufRcT75CB",
            d = "ZN_824XgJYopuf0rcx",
            l = n + "/pa/mi/3p/salesforce/krux.html";

        function f() {
            return (new Date).getTime()
        }

        function h(t) {
            return Math.round(parseFloat(t)) || 0
        }

        function p(t) {
            if (!t || t.constructor !== Object && t.constructor !== Array) return t;
            var e = t.constructor();
            for (var n in t) e[n] = p(t[n]);
            return e
        }

        function g(t, e, n) {
            for (var r in void 0 === n && (n = !0), t = t || {}, e = e || {}) "undefined" != typeof e[r] && (n || !n && "undefined" == typeof t[r]) && (t[r] = e[r]);
            return t
        }

        function m(t, e) {
            e = e || {};
            var n = p(t = t || {});
            for (var r in e) try {
                e[r].constructor === Object && n[r] && n[r].constructor === Object ? n[r] = m(n[r], e[r]) : n[r] = e[r]
            } catch (i) {
                n[r] = e[r]
            }
            return n
        }

        function v() {
            var i = window.crypto || window.msCrypto,
                o = function o() {
                    var t, e = 2147483647;
                    try {
                        var n = new Uint32Array(1);
                        i.getRandomValues(n), t = n[0] & e
                    } catch (r) {
                        t = Math.round(e * Math.random())
                    }
                    return t.toString(16)
                };
            return o() + o()
        }

        function w(t, e) {
            var n;
            return function() {
                return t && (n = t.apply(e || this, arguments), t = null), n
            }
        }
        window.PAYPAL = window.PAYPAL || {}, window.fpti = window.fpti || {}, window.fptiserverurl = window.fptiserverurl || "//web.archive.org/web/20200706220232/https://t.paypal.com/ts";
        var i = function i() {},
            y = function y() {
                return {}
            };
        "undefined" == typeof JSON && (JSON = {}, JSON.stringify = i, JSON.parse = y, window.JSON = JSON);
        var b, k = "performance" in window && window.performance || {},
            E = function E() {
                return !(!k || "function" != typeof k.getEntries)
            };
        k && !k.now && (b = k.timing, k.now = function() {
            var t = f() - (b && b.navigationStart || 0);
            return 0 < t ? t : 0
        }), String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            if (null == this) throw new TypeError("Array.indexOf() - can't convert \"" + this + '" to object');
            var n = isFinite(e) ? Math.floor(e) : 0,
                r = this instanceof Object ? this : new Object(this),
                i = isFinite(r.length) ? Math.floor(r.length) : 0;
            if (i <= n) return -1;
            if (n < 0 && (n = Math.max(i + n, 0)), t === undefined) {
                do {
                    if (n in r && r[n] === undefined) return n
                } while (++n < i)
            } else
                do {
                    if (r[n] === t) return n
                } while (++n < i);
            return -1
        }), Array.prototype.forEach || (Array.prototype.forEach = function(t) {
            var e;
            if (null == this) throw new TypeError("this is null or not defined");
            var n = Object(this),
                r = n.length >>> 0;
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            1 < arguments.length && (e = arguments[1]);
            for (var i, o = 0; o < r;) {
                o in n && (i = n[o], t.call(e, i, o, n)), o++
            }
        }), window.document.querySelectorAll || (document.querySelectorAll = function(t, e, n, r, i) {
            var o = document,
                a = o.createStyleSheet();
            for (i = o.all, e = [], n = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; n--;) {
                for (a.addRule(t[n], "k:v"), r = i.length; r--;) i[r].currentStyle.k && e.push(i[r]);
                a.removeRule(0)
            }
            return e
        });
        var _ = null,
            C = null;

        function x() {
            try {
                _ = window.localStorage, C = window.sessionStorage
            } catch (t) {
                C = _ = null
            }
        }

        function A(t, e, n) {
            var r, i = (n = n || {}).expires ? ((r = new Date).setTime(r.getTime() + 24 * n.expires * 60 * 60 * 1e3), "; expires=" + r.toGMTString()) : "";
            document.cookie = t + "=" + e + i + "; path=/"
        }

        function O(t) {
            for (var e = document.cookie.split(";"), n = 0; n < e.length; n++) {
                for (var r = e[n];
                    " " === r.charAt(0);) r = r.substring(1, r.length);
                if (0 === r.indexOf(t + "=")) return r.substring((t + "=").length, r.length)
            }
            return null
        }

        function T(t) {
            A(t, "", {
                expires: -1
            })
        }

        function P(t, e) {
            var n;
            return x(), t && (n = t.getItem(e)), n
        }

        function I(t, e, n) {
            if (x(), t && n) try {
                t.setItem(e, n)
            } catch (r) {}
        }

        function S(t) {
            return P(C, t)
        }

        function L(t, e) {
            I(C, t, e)
        }

        function D(t) {
            return P(_, t)
        }

        function N(t, e) {
            I(_, t, e)
        }

        function R() {
            return x(), _
        }
        var q = 18e5,
            j = 94608e6,
            F = "fpti_3p";
        var M = "script";

        function U(t, e) {
            for (var n in e) n && "undefined" != typeof e[n] && "" !== e[n] && (t = function(t, e, n) {
                if (e && (n || 0 === n || !1 === n)) {
                    if ("object" == typeof n) try {
                        n = JSON.stringify(n)
                    } catch (r) {
                        n = "_err_"
                    } - 1 === t.indexOf("?") && (t += "?"), "?" !== t.charAt(t.length - 1) && (t += "&"), t += e + "=" + encodeURIComponent(n)
                }
                return t
            }(t, n, e[n]));
            return t
        }

        function B(t) {
            var e = {};
            if (!t || void 0 === t) return e;
            if ("object" == typeof t) return t;
            "?" === t.charAt(0) && (t = t.slice(1));
            for (var n = t.split("&"), r = 0; r < n.length; r++) {
                var i = n[r].split("="),
                    o = i.shift(),
                    a = i.join("=");
                e[o] = decodeURIComponent(a)
            }
            return e
        }

        function J() {
            var t = window,
                e = "inner";
            return "innerWidth" in window || (e = "client", t = document.documentElement || document.body), {
                width: t[e + "Width"],
                height: t[e + "Height"]
            }
        }

        function Y() {
            var t = document.body || {},
                e = document.documentElement || {};
            return function() {
                for (var t = [], e = 0; e < arguments.length; e++) isNaN(arguments[e]) || t.push(arguments[e]);
                return Math.max.apply(Math, t)
            }(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight, 0)
        }

        function G(t) {
            t && "undefined" != typeof window && window.Image && (new window.Image(0, 0).src = t)
        }

        function H(t) {
            throw new URIError("fail to load script: " + t.target.src)
        }

        function V(t, e, n, r) {
            var i, o, a;
            t && (i = document.getElementsByTagName(M)[0], (o = document.createElement(M)).setAttribute("crossorigin", "anonymous"), o.onerror = H, o.src = t, r && "string" == typeof r && "sha" === r.substring(0, 3) && o.setAttribute("integrity", r), e && (a = !1, o.onreadystatechange = o.onload = function() {
                a || e(), a = !0
            }), n && i ? i.parentNode.insertBefore(o, i) : document.body ? document.body.appendChild(o) : z(function() {
                document.body.appendChild(o)
            }))
        }

        function z(t) {
            t = w(t), "complete" === document.readyState ? t() : (Q(window, "load", t), Q(window, "DOMContentLoaded", function() {
                setTimeout(t, 3e3)
            }))
        }

        function Q(t, e, n) {
            if (t)
                if (t.addEventListener) t.addEventListener(e, n, !1);
                else if (t.attachEvent) return t.attachEvent("on" + e, n)
        }

        function K(t, e, n) {
            if (e)
                if (e.removeEventListener) e.removeEventListener(t, n, !1);
                else if (e.detachEvent) return e.detachEvent("on" + t, n)
        }
        var W = "paypal.com",
            $ = "1.4.14",
            X = "https://web.archive.org/web/20200706220232/https://t.paypal.com/ts",
            Z = "ce",
            tt = "pt",
            et = "ru",
            nt = "cd",
            rt = "sw",
            it = "sh",
            ot = "dw",
            at = "dh",
            ct = "bw",
            ut = "bh";

        function st(t) {
            var e = t && t.data ? t : {
                data: t || {}
            };
            return e
        }

        function dt(t, e) {
            var n = t.url || "undefined" != typeof window && window.fptiserverurl || X,
                r = n.split("?");
            (n = r[0]).match(/^\/\//) && (n = ("undefined" != typeof location && location.protocol || "") + n), n += "?", r[1] && (n += r[1] + "&"), n += "v=" + encodeURIComponent(t.version || $);
            var i, o = {
                t: f(),
                g: (new Date).getTimezoneOffset()
            };
            return e.start && (i = e.end || o.t, e.view = e.view || {}, e.view.t11 = i - e.start, e.start = e.end = undefined), n = U(n, o), n = U(n, e)
        }

        function lt(t, e) {
            var n, r, i = t.onBeaconCreate;
            return "undefined" == typeof location || -1 !== location.hostname.indexOf(W) || (r = function() {
                var t = null;
                if (R()) {
                    try {
                        t = D(F);
                        var e = null,
                            n = null,
                            r = null,
                            i = null,
                            o = Date.now(),
                            i = (t ? (e = (t = JSON.parse(t)).vid && t.vid_exp > o ? t.vid : v(), r = t.fpti && t.fpti_exp > o ? t.fpti : v(), n = o + q) : (e = v(), n = o + q, r = v()), o + j),
                            t = {
                                vid: e,
                                vid_exp: n,
                                fpti: r,
                                fpti_exp: i
                            };
                        N(F, JSON.stringify(t))
                    } catch (a) {}
                    return t
                }
            }()) && g(e, {
                "3p_vid": r.vid,
                "3p_fpti": r.fpti
            }), i && ("function" != typeof i || !1 === i()) || (n = dt(t, e)), G(n), n
        }

        function ft(t) {
            var e = st(t),
                n = lt(e, e.data);
            return {
                data: e.data,
                url: n
            }
        }

        function pt(t, e) {
            var n = st(t),
                r = n.data;
            r[tt] = document.title, r[et] = document.referrer, r[nt] = window.screen.colorDepth;
            var i, o = {
                width: (i = window.screen || {}).width,
                height: i.height
            };
            r[rt] = o.width, r[it] = o.height;
            var a, c, u, s, d, l = (c = window.screen || {}, u = window.devicePixelRatio || 1, s = h(c.width * u), d = h(c.height * u), 90 === Math.abs(window.orientation) && (a = s, s = d, d = a), {
                width: s,
                height: d
            });
            r[ot] = l.width, r[at] = l.height;
            var f = J();
            r[ct] = f.width, r[ut] = f.height, r[Z] = navigator.cookieEnabled ? 1 : 0;
            var p = {
                data: n.data,
                url: ""
            };
            return "function" == typeof e ? e(function() {
                return p.url = lt(n, r), p
            }) : p.url = lt(n, r), p
        }
        var gt = {},
            mt = {},
            vt = -1;

        function ht(t) {
            for (var e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }

        function wt(t, e, n) {
            try {
                t(e, n)
            } catch (r) {
                setTimeout(function(t) {
                    return function() {
                        throw t
                    }
                }(r), 0)
            }
        }

        function yt(t, e, n) {
            t(e, n)
        }

        function bt(t, e, n, r) {
            var i = mt[e],
                o = r ? yt : wt;
            if (mt.hasOwnProperty(e))
                for (var a in i) i.hasOwnProperty(a) && o(i[a], t, n)
        }

        function kt(t, e, n, r) {
            var i, o, a, c = (o = e, a = r, function() {
                var t = String(i),
                    e = t.lastIndexOf(".");
                for (bt(i, i, o, a); - 1 !== e;) e = (t = t.substr(0, e)).lastIndexOf("."), bt(i, t, o, a)
            });
            return !! function(t) {
                for (var e = String(t), n = Boolean(mt.hasOwnProperty(e) && ht(mt[e])), r = e.lastIndexOf("."); !n && -1 !== r;) r = (e = e.substr(0, r)).lastIndexOf("."), n = Boolean(mt.hasOwnProperty(e) && ht(mt[e]));
                return n
            }(i = t) && (!0 === n ? c() : setTimeout(c, 0), !0)
        }

        function Et() {
            var t = [],
                e = {
                    director: "application/x-director",
                    mediaplayer: "application/x-mplayer2",
                    pdf: "application/pdf",
                    quicktime: "video/quicktime",
                    real: "audio/x-pn-realaudio-plugin",
                    silverlight: "application/x-silverlight"
                };
            for (var n in e) ! function(t) {
                var e = navigator.mimeTypes;
                if (e && e.length) {
                    var n = e[t];
                    return n && n.enabledPlugin
                }
            }(e[n]) || t.push(n);
            var r, i, o, a = (o = null, navigator.plugins && 0 < navigator.plugins.length && (r = "application/x-shockwave-flash", (i = navigator.mimeTypes) && i[r] && i[r].enabledPlugin && i[r].enabledPlugin.description && (o = i[r].enabledPlugin.description)), o);
            return a && t.push(a), t.join(",")
        }
        gt.publish = function(t, e) {
            return kt(t, e, !1, gt.immediateExceptions)
        }, gt.subscribe = function(t, e) {
            if ("function" != typeof e) return !1;
            mt.hasOwnProperty(t) || (mt[t] = {});
            var n = "uid_" + String(++vt);
            return mt[t][n] = e, n
        };
        var _t, Ct, xt = "pa-marked",
            At = "data-pa-click",
            Ot = "data-pa-exit",
            Tt = "data-pa-download",
            Pt = "MI_ERROR",
            It = "cookie_prefs",
            St = "enforce_policy",
            Lt = {
                BEACON: "pa.beacon",
                INIT: "pa.init"
            },
            Dt = "comp",
            Nt = "paypal.com",
            Rt = "paypalobjects.com",
            qt = {
                PRE: "_fpti"
            },
            jt = {
                TP_ID: "fpti.tp",
                TK_ID: "fpti.tk"
            },
            Ft = {
                LEN: 512,
                HTML_RX: /<[^>]*>/g
            },
            Mt = {
                GA: "ga",
                DC: "dc",
                ELQ: "elq",
                SF: "sf",
                DTECH: "dtech"
            },
            Ut = {
                MARKETING: "T",
                PERFORMANCE: "P",
                FUNCTIONAL: "F"
            },
            Bt = ["locale.x", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "dclid", "gclid", "param", "fbclid", "gclsrc", "activate"],
            Jt = ["url", "visitorId", "sessionId", "gacook", "comp", "page", "pgrp", "ccpg", "rsta", "cust", "acnt", "mrid", "flnm", "xe", "xt", "domain", "tsrc", "utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term", "browser", "os", "device", "lang", "isLoggedIn", "keywords", "consentOptOut"];

        function Yt(t, e) {
            return t && t.data && "string" == typeof t.data && (t.data = B(t.data)), e && e.data && "string" == typeof e.data && (e.data = B(e.data)), m(t, e)
        }

        function Gt(t, e) {
            var n = [];
            if ((e = e || document).querySelectorAll) {
                var r = e.querySelectorAll(t);
                if ("object" != typeof r && "function" != typeof r || "number" != typeof r.length) "object" == typeof r && (n = r);
                else
                    for (var i = 0; i < r.length; i++) n.push(r[i])
            }
            return n
        }

        function Ht() {
            var t = !1,
                e = function() {
                    var t, e = null;
                    try {
                        !R() || (!(e = +D(t = "pa_feature_mod")) || e < 0 || 100 < e) && N(t, e = Math.floor(Math.random() * Math.floor(100)))
                    } catch (n) {}
                    return e
                }();
            return e && e < r && (t = !0), t
        }

        function Vt(t, e) {
            var n;
            return e && (n = t.getAttribute(e)), !(n = n || (t.getAttribute("id") || t.getAttribute("name") || t.getAttribute("data-name") || t.getAttribute("class") || t.getAttribute("href") || t.getAttribute("alt") || function i(t) {
                for (var e = t.childNodes, n = null, r = 0; r < e.length; r++) {
                    if (3 === (n = e[r]).nodeType && n.nodeValue && n.nodeValue.match(/\S/)) return n.nodeValue.trim();
                    if (1 === n.nodeType && n.childNodes.length) return i(n)
                }
            }(t))) || "string" == typeof n && 0 !== n.indexOf("<") || (n = ""), n
        }

        function zt(t, e) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        }

        function Qt(t, e) {
            var n = "";
            if ("string" == typeof t && "string" == typeof e) {
                t = t.split(",");
                for (var r = 0; r < t.length; r++) r !== t.length - 1 ? n += e.trim() + " " + t[r].trim() + ", " : n += e.trim() + " " + t[r].trim()
            } else n = t;
            return n
        }

        function Kt(t, e) {
            var n = !1,
                r = e || window.location && window.location.hostname || "",
                i = t ? /paypal.com$/ : /(paypal(|-here|-businessloan|-borderlesscommerce)|konfio).(com|me|co.uk|mx)$/;
            return -1 === r.indexOf("localhost") && i.test(r) && (n = !0), n
        }

        function Wt(t, e, n) {
            try {
                return e.replace("[", ".").replace("]", "").split(".").reduce(function(t, e) {
                    return ne(t && t[e] ? t[e] : n)
                }, t)
            } catch (r) {
                return ne(n)
            }
        }

        function $t() {
            var t = {},
                e = O("ts") || O("ts_c"),
                n = decodeURIComponent(e);
            if (n)
                for (var r = n.split("&"), i = 0; i < r.length; i++) {
                    var o = r[i].split("=");
                    o[0] && o[1] && (t[o[0]] = o[1])
                }
            return t
        }

        function Xt(t) {
            var e = B(window.location.search || t || ""),
                n = {};
            if (!e || void 0 === e) return n;
            for (var r = 0, i = Object.keys(e); r < i.length; r++) {
                var o = i[r],
                    a = o.split("."),
                    c = a.shift();
                c && c === qt.PRE && (n[a.join(".")] = function(t) {
                    if (!t || "string" != typeof t) return "";
                    var e = t.replace(Ft.HTML_RX, "");
                    if (t.length >= Ft.LEN) return e.substring(0, Ft.LEN);
                    return e
                }(e[o]))
            }
            return n
        }

        function Zt(t) {
            t && void 0 !== t && (t.constructor === Object && function(t) {
                if (!t || void 0 === t || "object" != typeof t) return 1;
                for (var e in t)
                    if (t.hasOwnProperty(e)) return;
                return 1
            }(t) || L(jt.TP_ID, JSON.stringify(t)))
        }

        function te(t) {
            var e, n = Ct,
                r = _t;
            return void 0 !== r && n || (n = function() {
                var t, e = S(jt.TP_ID);
                if (e) try {
                    t = JSON.parse(e)
                } catch (n) {}
                return t
            }() || Xt() || {}, r = S(jt.TK_ID) || n.tk || "", n.tk && delete n.tk, Ct = n, (e = _t = r) && void 0 !== e && "string" == typeof e && L(jt.TK_ID, e), Zt(n)), t.data.tk = r, t.data = zt(n, t.data), t
        }

        function ee() {
            var t = re("location.host") + re("location.pathname");
            return t && "string" == typeof t && (-1 !== t.indexOf("&") && (t = t.substr(0, t.indexOf("&"))), t = t.replace(/\/$/, "")), t
        }

        function ne(t) {
            var e = "REDACTED";
            if (t === undefined || null === t) return "";
            try {
                if ("string" == typeof t) return decodeURIComponent(t).replace(RegExp(/[^@]+@[^\\.]+\..+/gi), e)
            } catch (n) {
                return e
            }
            return t
        }

        function re(t) {
            return Wt(window, t)
        }

        function ie(t, e) {
            t.url && (PAYPAL.analytics.beaconURL = t.url), e.data || (e = {
                data: e
            }), gt.publish(Lt.BEACON, e)
        }

        function oe(t) {
            t = te(t = st(t)), ie(ft(t), t)
        }

        function ae() {
            var t = {},
                e = re("location.search");
            if (e)
                for (var n, r = /\+/g, i = /([^&=]+)=?([^&]*)/g, o = function o(t) {
                        return decodeURIComponent(t.replace(r, " "))
                    }, a = e.substring(1); null !== (n = i.exec(a));) 0 <= Bt.indexOf(n[1]) && (t[o(n[1])] = o(n[2]));
            return t
        }

        function ce() {
            var t = window.location,
                e = t.pathname ? t.pathname.replace(/\/$/, "") : "";
            if (t.search) {
                var n = function(t, e, n) {
                        e = e || "=", n = n || ",";
                        var r = [];
                        for (var i in t) r.push([i, t[i]].join(e));
                        return r.join(n)
                    }(ae(), "=", "&"),
                    r = n ? "?" + n : "";
                return t.protocol + "//" + t.hostname + e + r + t.hash
            }
            return e && -1 !== e.indexOf("&") && (e = e.substr(0, e.indexOf("&"))), t.protocol + "//" + t.hostname + e + t.hash
        }

        function ue(t, e) {
            var n = Wt(window, t) || null;
            if (n)
                for (var r in e)
                    if (0 < n.indexOf(r)) return e ? e[r] : r
        }
        var se = 1,
            de = 0,
            le = window.navigator,
            fe = le.userAgent;

        function pe() {
            var t, e, n = O("_ga");
            return n && (-1 === n.indexOf("GA1") || 4 === (e = n.split(".")).length && (t = [e[2], e[3]].join(".")), t = t && encodeURIComponent(t)), t
        }

        function ge(t) {
            return Number(t) === t && 0 <= t
        }

        function me(t, e) {
            var n = 0;
            return ge(e) && ge(t) && e <= t && (12e4 < (n = t - e) && (n = 0), n = h(n)), n
        }
        var ve = function ve() {
            return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(fe) ? "Tablet" : /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(fe) ? "Mobile" : "Desktop"
        };
        var he = 0,
            we = !1,
            ye = 31e3,
            be = /^xmlhttprequest|fetch/i,
            ke = /^xmlhttprequest|fetch|iframe|script/i;

        function Ee() {
            return k && k.now && k.timing ? Math.round(k.now() + k.timing.navigationStart) : f()
        }

        function _e(t) {
            var e = [];
            return k && "function" == typeof k.getEntriesByType && (e = k.getEntriesByType(t)), e
        }

        function Ce(t) {
            return t.loadEventEnd || t.loadEventStart || t.domComplete || t.domInteractive
        }

        function xe(t, e) {
            t = t || {};
            var n, r, i, o, a, c, u, s, d, l, f, p, g = {},
                m = (e = e || {}).data || {},
                v = k.now();
            return k && (n = _e("navigation")[0], i = (r = _e("paint"))[r.length - 1], o = 0, a = {}, c = k.timing, u = e.data && "setup" === e.data.imsrc, s = !we && "pf" !== t.e && u, c && s && (d = c.secureConnectionStart || c.connectEnd, l = Ce(c) || Date.now(), g.t1 = me(c.requestStart, c.fetchStart), g.t1c = me(c.connectEnd, c.fetchStart), g.t1d = me(c.domainLookupEnd, c.domainLookupStart), g.t1s = me(c.connectEnd, d), g.t2 = me(c.responseStart, c.requestStart), g.t3 = me(c.responseEnd, c.responseStart), g.t4d = me(c.domComplete, c.domLoading), g.t4 = me(l, c.domLoading), g.t4e = me(l, c.loadEventStart), g.tt = me(l, c.navigationStart), o = me(c.requestStart, c.navigationStart), n && (g.rdc = n.redirectCount || 0, a.nt = n.type), c.msFirstPaint ? a.tcp = me(c.msFirstPaint, c.navigationStart) : i ? a.tcp = h(i.startTime) : n && (a.tcp = h(n.domInteractive)), navigator.connection && (a.et = navigator.connection.effectiveType)), t.view || (f = {
                t10: o
            }, p = m.view && m.view._t11s, u || !p ? f.t11 = h(v) : p && (f.t11 = h(v - p)), f.t11 = 225 < f.t11 ? f.t11 - 225 : f.t11, 6e4 < f.t11 && (f.t11 = g.tt || 0), a.tcp && (f.tcp = a.tcp), a.et && (f.et = a.et), a.nt && (f.nt = a.nt), g.view = f, Te(g, !0))), PAYPAL.analytics.perf = g
        }

        function Ae(t, e) {
            var n, r, i, o, a, c = k.getEntries(),
                u = !0;
            if (-1 !== t.indexOf("://") && (u = !1), c)
                for (var s = c.length - 1; 0 < s; s--) {
                    var d = c[s];
                    if ((!e || e && d.initiatorType === e) && (u && -1 !== d.name.indexOf(t) || !u && d.name === t)) {
                        a = o = i = void 0, i = {}, o = (r = d).secureConnectionStart || r.connectEnd, a = r.responseStart || r.requestStart || r.fetchStart, i.t1 = me(r.requestStart, r.fetchStart), i.t1d = me(r.domainLookupEnd, r.domainLookupStart), i.t1s = me(r.connectEnd, o), i.t2 = me(r.responseStart, r.requestStart), i.t3 = me(r.responseEnd, a), i.tt = h(r.duration), n = i;
                        break
                    }
                }
            return n
        }

        function Oe() {
            var t = k.getEntries(),
                e = 0 === he ? t : t.slice(he);
            he = t.length;
            var n, r = Ht(),
                i = {
                    rtt: (n = Ae("/ts?", "img")) && n.tt || 0,
                    view: {}
                },
                o = {
                    scr: {
                        startTimes: [],
                        responseEnds: [],
                        t9: 0,
                        t12: 0,
                        t13: 0,
                        cnt: 0
                    },
                    xhr: []
                };
            for (var a in r && e.forEach(function(t) {
                    var e = t.initiatorType,
                        n = t.name || "";
                    "script" === e ? (o.scr.startTimes.push(t.startTime), o.scr.responseEnds.push(t.responseEnd), 0 < t.redirectStart && (o.scr.t13 += t.redirectEnd - t.redirectStart), t.duration > o.scr.t12 && (o.scr.t12 = t.duration), o.scr.cnt++) : "" !== e && !be.test(e) || -1 !== n.indexOf(Rt) || o.xhr.push({
                        nm: function(t) {
                            var e = document.createElement("a");
                            e.href = t;
                            var n = e.pathname.replace(/\/*$/, ""),
                                r = n.indexOf("&"); - 1 !== r && (n = n.substr(0, r));
                            var i = n.split("/"),
                                o = e.hostname;
                            return -1 === o.indexOf(Nt) && -1 === o.indexOf(Rt) ? i.join("").length ? o + "/./" + i.pop() : o : i.join("").length ? i.slice(-2).join("/") : "/"
                        }(t.name),
                        t9: h(t.duration),
                        ta: h(t.fetchStart)
                    })
                }), o.scr.t9 = Math.max.apply(null, o.scr.responseEnds) - Math.min.apply(null, o.scr.startTimes), o.scr.t9 = o.scr.t9 < 0 || null === o.scr.t9 && "object" == typeof o.scr.t9 ? o.scr.t12 : o.scr.t9, o)
                if (delete o[a].startTimes, delete o[a].responseEnds, "xhr" !== a) {
                    for (var c in o[a]) o[a][c] = h(o[a][c]);
                    o[a].cnt || delete o[a]
                } else o[a].length || delete o[a];
            return i.res = o, i
        }

        function Te(t, e) {
            var n, r = t.res;
            !E() || !e && r || (n = Oe(), r = r ? Yt(r, n.res) : n.res, t.res = r),
                function(t, e) {
                    (e = e || {}).rtt && (t.rtt = e.rtt), 0 <= e.rdc && (t.rdc = e.rdc);
                    var n = t.view = t.view || {};
                    n.t10 = n.t10 || t.t1 || 0, n.t11 = n.t11 || 0, n.t11 < n.tcp && (n.t11 = n.tcp), n.t10 > n.t11 && (n.t10 = 0), n.t11 > ye && (n.t11 = ye);
                    var r = e.view;
                    r && (r.tcp && (n.tcp = r.tcp), r.nt && (n.nt = r.nt), r.dbs && (n.dbs = r.dbs), r.ebs && (n.ebs = r.ebs))
                }(t, n)
        }

        function Pe(e) {
            var n, o = Ee(),
                a = o,
                c = 0,
                u = 0,
                s = function(t) {
                    t = t || 4;
                    for (var e = [], n = "", r = !1, i = 0; i < t; i++) e.push(0), n += "1";
                    return {
                        push: function(t) {
                            0 !== (t = +t) && 1 !== t && (t = 0), e.shift(), e.push(t)
                        },
                        skip: function() {
                            r = !0
                        },
                        isTrue: function() {
                            var t = e.join("");
                            return r = r || t === n
                        }
                    }
                }(),
                d = !1;

            function l(t) {
                return clearInterval(n), d = !1, e(t)
            }

            function t() {
                var t = Ee(),
                    e = t - a,
                    n = t - o;
                if (a = t, PAYPAL.analytics.isUnloading) l(n);
                else {
                    for (1e4 < t - o && (s.skip(), d = !0); 105 < e;) c++, u++, e -= 50;
                    c++, 55 < e && u++;
                    var r, i = Math.round(u / c * 100);
                    u = c = 0, s.push(i < 25), s.isTrue() && !d && (r = _e("resource"), d = function(t) {
                        var e, n, r = !0,
                            i = k && k.timing;
                        if (i && (0 === Ce(i) && (r = !1), t))
                            for (var o = 0; o < t.length; o++) {
                                var a = t[o];
                                if (ke.test(a.initiatorType) && 0 === a.responseEnd) {
                                    r = !1;
                                    break
                                }
                            }
                        if (r)
                            for (var c = Gt("[type=submit][disabled]"), u = 0; u < c.length; u++) {
                                if (0 < c[u].clientHeight) {
                                    r = !1;
                                    break
                                }
                            }
                        return r || (n = (n = (e = document.activeElement) && e.tagName || "body").toLowerCase(), -1 === ["body", "a"].indexOf(n) && (r = !0)), r
                    }(r)), d && s.isTrue() && l(225 < n ? n - 225 : n)
                }
            }
            setTimeout(function() {
                n = setInterval(t, 50)
            }, 25)
        }
        gt.subscribe(Lt.BEACON, function(t, e) {
            var n = e && (e.e || e.data && e.data.e),
                r = e && e.data && e.data.imsrc;
            "im" === n && "setup" === r && (we = !0)
        }), PAYPAL.analytics = PAYPAL.analytics || {};
        var Ie = PAYPAL.analytics;
        Ie.options = {}, Ie.settings = "", Ie.beaconURL = "";
        var Se = !1;

        function Le() {
            var t = {};
            if (window._ifpti && window.fpti)
                for (var e in t = p(window._ifpti), window.fpti) "undefined" != typeof window.fpti[e] && window.fpti[e] !== window._ifpti[e] && (t[e] = window.fpti[e]);
            return t
        }

        function De(t, e) {
            t[e] && delete t[e]
        }

        function Ne(t) {
            De(t, "view"), De(t, "event_name")
        }

        function Re(t) {
            t && (window.fpti = p(t), Ne(window.fpti), window._ifpti = p(window.fpti))
        }

        function qe(t) {
            var e = O(It);
            e && (t.data.c_prefs = decodeURIComponent(e));
            var n = O(St);
            n && (t.data.ef_policy = decodeURIComponent(n));
            var r = pe();
            r && (t.data.gacook = r), t = te(t)
        }
        Ie.Analytics = function(t) {
            this._init(t)
        }, Ie.Analytics.prototype = {
            version: "1.4.14",
            options: {
                request: {
                    data: {},
                    unloadDelay: !1,
                    onBeaconCreate: i
                }
            },
            _delayUnloadUntil: null,
            _lastForm: null,
            _lastInput: null,
            _init: function Qe(t) {
                this.setOptions(t), this._enableUnloadDelay()
            },
            _enableUnloadDelay: function() {
                var t = this;
                Ie.isUnloading = !1;
                var e = function e() {
                    if (Ie._imInProgress || Ie.setup._onLoadImpression(), Ie.isUnloading = !0, t._delayUnloadUntil)
                        for (;
                            (new Date).getTime() < t._delayUnloadUntil;);
                };
                K(window, "beforeunload", e), Q(window, "beforeunload", e)
            },
            _recordEvent: function(t, e) {
                e.data = e.data || {}, e.data = g(e.data, t), this.record(e)
            },
            getTimeNow: Ee,
            _getLastFormFocusedValue: function() {
                var t = "";
                return this._lastForm && (t = this._lastForm.getAttribute("name") || this._lastForm.getAttribute("id") || ""), t
            },
            _getLastInputFocusedValue: function() {
                var t = "";
                return this._lastInput && (t = this._lastInput.getAttribute("name") || this._lastInput.getAttribute("id") || ""), t
            },
            _getElements: function(t) {
                var e = [];
                if (t)
                    if ("string" == typeof t) e = Gt(t);
                    else if ("object" == typeof t)
                    for (var n in t) t.hasOwnProperty(n) && 1 === t[n].nodeType && e.push(t[n]);
                else 1 === t.nodeType && e.push(t);
                return e
            },
            _click: function(t) {
                t.getAttribute("href") && (window.location.href = t.getAttribute("href"))
            },
            setOptions: function(t) {
                var e = (t = t || {}).request && t.request.data;
                e && (delete t.request.data, "string" == typeof e && (e = B(e)), Re(e = Yt(window.fpti, e))), this.options = Yt(this.options, t)
            },
            setRequestData: function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) this.options.request.data[n] = t[n];
                else "string" == typeof t && e === undefined ? this.setRequestData(B(t)) : "string" == typeof t && e !== undefined && (this.options.request.data[t] = e)
            },
            getRequestData: function(t) {
                var e = this.options.request.data;
                return t && (e = e[t] || window.fpti[t]), e
            },
            removeRequestData: function(t) {
                void 0 !== t ? this.options.request.data[t] && delete this.options.request.data[t] : this.options.request.data = {}
            },
            setUnloadDelay: function(t) {
                this._delayUnloadUntil = f() + t
            },
            recordImpression: function(a, t) {
                var e = 2 < arguments.length && arguments[2] !== undefined && arguments[2];
                Ie._imInProgress = !0;
                var n, r = (a = a || {}) && a.trackCPL;
                delete a.trackCPL, a.data ? (a.data = B(a.data), n = Le(), a.data = Yt(n, a.data), Re(a.data)) : a.data = Yt(window.fpti, {}), a.data.e = "im", t && (a.data = Yt(a.data, t)), Ie._imId = a.data.page;
                var i = this.getRequestData("pglk") || O("tcs");
                T("tcs"), i && (a.data.pglk = decodeURIComponent(i));
                var c, o = O("x-cdn");
                o && (a.data.cdn = decodeURIComponent(o).split(":")[0]), qe(a), a = Yt(this.options.request, a), "mo" !== Ie.settings && (a.data.pl = Et()), e && (a.data.imsrc = e ? "setup" : "recordim"), a.data.view || !r ? ie(pt(a), a) : (c = {}, k && (a.data.view = a.data.view || {}, a.data.view._t11s = k.now()), pt(a, function(o) {
                    Pe(function(t) {
                        var e = Ie.cpl && Ie.cpl.beaconData || {},
                            n = e.view && e.view._t11s || 0,
                            r = a.data.view._t11s || 0;
                        a.data.view._t11s = Math.min.apply(null, [n, r].filter(Boolean));
                        var i = xe(c, a);
                        i.view && (i.view.bt = t), c = g(c, i), g(a.data, c), Ie._imInProgress = !1, ie(o(), a)
                    })
                }))
            },
            recordClick: function(t) {
                (t = t || {}).data = B(t.data), t.data = Yt(window.fpti, t.data), t.data.e = "cl", qe(t), Ne(t.data), this._recordEvent({}, t)
            },
            recordFormAbandonment: function(t) {
                var e = {};
                (t = t || {}).data = B(t.data), t.data = Yt(window.fpti, t.data), t.data.e = "fa", Ne(t.data), e.lf = this._getLastFormFocusedValue(), e.li = this._getLastInputFocusedValue(), this._recordEvent(e, t)
            },
            trackFormFocus: function(t) {
                t = this._getElements(t);
                for (var r = function r(t) {
                        var e = t.currentTarget || t.srcElement,
                            n = {
                                uicomp: Vt(e, "data-pa-focus"),
                                uitype: "form",
                                action: "focus",
                                value: t.target.value ? t.target.value : Vt(e)
                            };
                        Ie.logActivity(n)
                    }, e = 0; e < t.length; e++) {
                    var n = t[e];
                    K(n, "focus", r), Q(n, "focus", r)
                }
            },
            _recordClick: function(i) {
                var o = this;
                i = Yt(this.options.click, i), i = Yt({
                    request: this.options.request
                }, i);
                var a = function a(t, e) {
                    var n, r = function(t, e) {
                        for (var n = [e, t.target, t.currentTarget, t.srcElement], r = 0; r < n.length; r++) {
                            var i = n[r],
                                o = o || i;
                            if (i && i.getAttribute(xt)) {
                                o = i;
                                break
                            }
                        }
                        return o
                    }(t, e);
                    "function" == typeof i.onClick && (n = i.onClick(t, r)), !1 !== n && ("object" == typeof n && (i.request = Yt(i.request, n)), i.request.data.lu = r.getAttribute("href") || "", o.recordClick(i.request))
                };
                return a
            },
            trackClicks: function(t) {
                for (var e = this._getElements(t.elements), n = this._recordClick(t), r = 0; r < e.length; r++) {
                    var i = e[r];
                    i.setAttribute(xt, 1), K(i, "click", n), Q(i, "click", n)
                }
            },
            trackFormAbandonment: function(n) {
                var r = this;
                (n = n || {}).data = B(n.data), (n = Yt(this.options.formAbandonment, n)).elements = n.elements || "form";
                for (var t = this._getElements(n.elements) || [], e = 0; e < t.length; e++)
                    for (var i = t[e], o = "form" === i.tagName.toLowerCase() ? [i] : Gt("form", i), a = 0; a < o.length; a++)
                        for (var c = o[a], u = Gt("input", c), s = u.length, d = 0; d < s; d++) {
                            ! function(t, e) {
                                Q(e, "focus", function() {
                                    r._lastForm = t, r._lastInput = e, r._trackingFA || (r._trackingFA = !0, "beforeunload,hashchange".split(",").forEach(function(t) {
                                        Q(window, t, function() {
                                            null !== r._lastForm && null !== r._lastInput && (r.recordFormAbandonment(n.request), r._lastForm = null, r._lastInput = null)
                                        })
                                    }), Q(t, "submit", function() {
                                        r._lastForm = null, r._lastInput = null
                                    }))
                                })
                            }(c, u[d])
                        }
            },
            recordAjaxStartTime: function() {
                this.activityStartTime = f()
            },
            logActivity: function(t) {
                t.page = t.page || window.fpti.page, t.pgrp = t.pgrp || window.fpti.pgrp, t.e = "ac", oe(t)
            },
            logPerf: function(t, e) {
                t.e = "pf", (t = Yt(Le(), t)).tt || (t = g(t, xe(t), !1));
                var n = !0;
                e && (t.page || (n = !1)), n && oe(t)
            },
            recordAjaxPerformanceData: function(t) {
                var e, n, r, i, o = this.activityStartTime;
                o && (n = me(e = f(), o), (r = t.sys && t.sys.tracking && t.sys.tracking.fpti.dataString) && 0 < n && ((i = B(r)).tajst = o, i.tajnd = e, i.tt = n, this.logPerf(i)))
            },
            recordError: function(t) {
                (t = t || {}).e = "err", oe(t)
            },
            recordEvent: function(t, e) {
                var n = !(2 < arguments.length && arguments[2] !== undefined) || arguments[2];
                e = e || {}, t && "string" == typeof t && (e.event_name = t, e.e = e.e || "ac", n && (e = Yt(Le(), e)), oe(e))
            },
            record: function ft(t) {
                oe(t = Yt(this.options.request, t))
            }
        }, Ie.Analytics.prototype.utils = {
            queryStringToObject: B,
            getCookie: O,
            setCookie: A,
            removeCookie: T,
            wrapSelectors: Qt
        }, Ie.logPerformance = function(t) {
            Ie.Analytics.prototype.logPerf(t)
        }, Ie.logActivity = function(t) {
            Ie.Analytics.prototype.logActivity(t)
        }, Ie.setup = function(t) {
            Ie.setupComplete = Ie.setupComplete || i, Ie.settings = Ie.settings || "pp";
            var e = Ie.setup.init(t);
            return Ie.setup.onLoad(), setTimeout(function() {
                Ie.setupComplete(Ie.setup.bindEvents()), gt.publish(Lt.INIT)
            }, 500), e
        }, Ie.setup3p = function(t) {
            return t = zt(t || {}, {
                trackPPLegacyClicks: !1,
                trackPPLegacyExitClicks: !1
            }), Ie.settings = "3p", Ie.setup(t)
        }, Ie.setupMobile = function(t) {
            return t = zt(t || {}, {
                trackPPLegacyClicks: !1,
                trackPPLegacyExitClicks: !1,
                trackPPDownloadClicks: !1,
                trackPPClickThrough: !1,
                trackFormAbandonment: !1
            }), Ie.settings = "mo", Ie.setup(t)
        }, Ie.reSetup = function(t) {
            delete Ie.instance, t = zt(t || {}, Ie.options), Ie.setup(t)
        }, Ie.setup.init = function(t) {
            t = zt(t || {}, {
                trackImpression: !0,
                trackPPClicks: !0,
                trackPPExitClicks: !0,
                trackPPDownloadClicks: !0,
                trackPPLegacyClicks: !0,
                trackPPLegacyExitClicks: !0,
                trackPPClickThrough: !0,
                trackFormAbandonment: !0,
                trackFormFocus: !1,
                stitchEvents: !0,
                trackScroll: !0
            }), window.fptiserverurl = t.url || window.fptiserverurl, Ie.options = t;
            var e = new Ie.Analytics({
                request: {
                    data: t.data || {}
                }
            });
            return t.data && (t.data = B(t.data), Re(t.data)), Ie.instance = e
        }, Ie.setup._onLoadImpression = function() {
            var t = Ie.instance,
                e = Ie.options;
            e.trackImpression && Se && (e && (e.trackCPL = !0), t.recordImpression(e, null, !0), Se = !1)
        }, Ie.setup.onLoad = function() {
            var t = Ie.options,
                e = Ie.setup._onLoadImpression;
            t.trackImpression && (Se = !0, z(function() {
                Ie.isUnloading || e()
            }))
        }, Ie.setup.bindEvents = function() {
            var l = Ie.instance,
                r = Ie.options;

            function f(t, e) {
                var n, r = e || t.target || t.currentTarget || t.srcElement;
                return r && (n = r.tagName.toLowerCase(), -1 !== ["svg"].indexOf(n) && (r = r.parentElement)), r
            }

            function i(t, e, n) {
                var r, i, o = f(t, n),
                    a = Vt(o, e),
                    c = o.getAttribute("data-pa-page"),
                    u = o.getAttribute("data-pa-pgrp"),
                    s = o.getAttribute("data-pa-link"),
                    d = (r = c, i = a || "", {
                        pglk: (u || l.getRequestData("pgrp") || "") + "|" + i,
                        pgln: (r || l.getRequestData("page") || "") + "|" + i
                    });
                return d.link = s || a, c && (d.page = c), u && (d.pgrp = u), d
            }
            var d = {
                unloadDelay: 500
            };

            function o(t, e) {
                var n;
                if ("string" == typeof t.className)
                    for (var r = t.className.split(" "), i = 0; i < r.length; i++) {
                        var o = r[i].split(":"); - 1 !== e.indexOf(o[0]) && 1 < o.length && (o.shift(), n = o.join(":"))
                    }
                return n
            }
            var p = {
                customClicks: function(t) {
                    var e = i(t),
                        n = r.customClicks;
                    return e.link = n.linkName ? n.linkName : e.link, e.exit = n.exitClick ? se : de, {
                        data: e
                    }
                },
                click: function(t, e) {
                    return {
                        data: i(t, At, e)
                    }
                },
                exit: function(t) {
                    var e = i(t, Ot);
                    return e.exit = se, {
                        data: e
                    }
                },
                download: function(t) {
                    var e = i(t, Tt);
                    return e.dwnl = se, {
                        data: e
                    }
                },
                scTrack: function(t) {
                    var e = i(t),
                        n = o(f(t), ["scTrack"]) || e.link;
                    return e.link = n, {
                        data: e
                    }
                },
                scExit: function(t) {
                    var e = i(t),
                        n = o(f(t), ["scExit"]) || e.link;
                    return e.link = n, e.exit = se, {
                        data: e
                    }
                },
                clickThrough: function(t, e) {
                    var n = (e = e || f(t)).getAttribute(At) || e.getAttribute(Ot) || e.getAttribute(Tt);
                    n = (n = n || o(e, ["scTrack", "scExit"])) || Vt(e);
                    var r = l.getRequestData("pgrp") || "";
                    return A("tcs", encodeURIComponent(r + "|" + n)), !1
                }
            };
            return "object" == typeof r.customClicks && l.trackClicks({
                elements: r.customClicks.elements,
                onClick: p.customClicks,
                request: d
            }), r.trackPPClicks && l.trackClicks({
                elements: "*[data-pa-click]",
                onClick: p.click,
                request: d
            }), r.trackPPExitClicks && l.trackClicks({
                elements: "*[data-pa-exit]",
                onClick: p.exit,
                request: d
            }), r.trackFormFocus && l.trackFormFocus("*[data-pa-focus], " + Qt("textarea, input[type=text]", r.wrappingElement)), r.trackPPDownloadClicks && l.trackClicks({
                elements: "*[data-pa-download], " + Qt('*[href*=".zip"], *[href*=".wav"], *[href*=".mov"], *[href*=".mpg"], *[href*=".avi"], *[href*=".wmv"], *[href*=".doc"], *[href*=".docx"], *[href*=".pdf"], *[href*=".xls"], *[href*=".xlsx"], *[href*=".ppt"], *[href*=".pptx"], *[href*=".txt"], *[href*=".csv"], *[href*=".psd"], *[href*=".tar"]', r.wrappingElement),
                onClick: p.download,
                request: d
            }), r.trackPPLegacyClicks && l.trackClicks({
                elements: '*[class*="scTrack"]',
                onClick: p.scTrack,
                request: d
            }), r.trackPPLegacyExitClicks && l.trackClicks({
                elements: '*[class*="scExit"]',
                onClick: p.scExit,
                request: d
            }), r.trackPPClickThrough && l.trackClicks({
                elements: Qt("a, button, input[type=submit], input[type=button], input[type=image]", r.wrappingElement),
                onClick: p.clickThrough
            }), r.trackFormAbandonment && l.trackFormAbandonment({
                elements: Qt("form", r.wrappingElement),
                request: d
            }), Q(document.body, "click", function(t) {
                var e, n, r, i = 0,
                    o = !1,
                    a = t.target,
                    c = {
                        onClick: p.click,
                        request: d
                    };
                if (a) {
                    for (; !o && a;) n = a.tagName.toLowerCase(), (-1 !== ["a", "button"].indexOf(n) || "input" === n && -1 !== ["submit", "button", "image"].indexOf(a.type)) && (r = a), e = a.getAttribute(At), 10 <= i++ || a === document.body || e ? o = !0 : a = a.parentElement;
                    r && p.clickThrough(t, r);
                    var u, s = a && a.getAttribute(xt);
                    e && !s && (a.setAttribute(xt, 1), (u = l._recordClick(c))(t, a), Q(a, "click", u))
                }
            }), Ie.instance = l
        };

        function je(t, e) {
            var n, r;
            k && (e = e || {}, (n = t.cpl = t.cpl || {}).started = !0, r = n.beaconData = n.beaconData || {}, e.flid && (r.flid = r.flid || e.flid), r.page = r.page || e.page, r.pgrp = r.pgrp || e.pgrp, r.action = r.action || e.action, r.view = {
                t10: e.t10 ? h(e.t10) : 0
            }, n.cplData = n.cplData || {
                pgrpData: {}
            })
        }

        function Fe(t) {
            t.cpl = {
                started: !1
            }
        }

        function Me(t, e, n) {
            var r;
            t.cpl = t.cpl || {}, t.cpl.beaconData = t.cpl.beaconData || {}, "object" == typeof e && (r = {}, zt(r = e.pageData ? m(r, e.pageData) : e, t.cpl.beaconData)), k && (t.cpl.started || n && (je(t), t.cpl.beaconData.view._t11s = k.now()))
        }
        Ie.resumeCPLTracking = function() {}, Ie.beaconTrackingData = {}, Ie.addCPLData = function() {}, Ie.setCPLData = function() {}, Ie.startCPLTracking = function(t) {
            k && (je(Ie, t), Ie.cpl.beaconData.view = {
                t10: 0,
                _t11s: k.now()
            })
        }, Ie.endCPLTracking = function(t) {
            var e, n, r, i, o, a;
            Me(Ie, t), a = (e = Ie).cpl.beaconData || {}, k && a.view && (n && (!n || e._imInProgress) || (a.view._t11s && (a.view.t11 = h(k.now() - a.view._t11s), delete a.view._t11s), r = n ? "url" : "manual", a.view.nt = r, Te(a), i = a.view.t11, o = !1, n && e._imId === a.page ? o = !1 : (!n && i < 61e3 || n && 50 < i && i < 31e3) && (o = !0), o && setTimeout(function() {
                e.Analytics.prototype.logPerf(a, n)
            }, 100))), Fe(e)
        }, Ie.resourceCPL = function(t, e) {
            var n, r;
            !t || (n = Ae(t)) && ((r = g(e, n)).tmpl = r.tmpl || t, r.view = {
                t10: n.t1,
                t11: n.tt,
                nt: "res"
            }, Ie.Analytics.prototype.logPerf(r))
        }, Ie.autoCPLTracking = function(t) {
            Me(Ie, t, !0), setTimeout(function() {
                Fe(Ie)
            }, 500)
        };
        var Ue = {
                minHeight: 0,
                trackBy: "percent",
                readTime: 0,
                scrollDepth: [25, 50, 75, 100]
            },
            Be = null,
            Je = null,
            Ye = null,
            Ge = null;

        function He(e, t) {
            K("scroll", window, ze), Be = [], Je = m({}, Ue), Ye = t && t.Analytics ? t.Analytics.prototype : null, "object" == typeof e && Object.keys(e).forEach(function(t) {
                e[t] && Je.hasOwnProperty(t) && typeof e[t] == typeof Je[t] && (Je[t] = e[t])
            });
            var n = Y();
            isNaN(n) || n <= Je.minHeight || Qe()
        }

        function Ve(e) {
            Ge = setTimeout(function() {
                var t;
                "object" == typeof Ye && (oe({
                    e: "sd",
                    page: (t = window.fpti || {}).page,
                    pgrp: t.pgrp,
                    comp: t.comp,
                    st: Je.trackBy,
                    sd: e
                }), Be.push(e), Ge = null)
            }, Je.readTime)
        }
        var ze = function(n, r, i) {
            var o, a, c, u, s = 0;
            i = i || {};
            var d = function d() {
                    s = !1 === i.leading ? 0 : f(), o = null, u = n.apply(a, c), o || (a = c = null)
                },
                l = function l() {
                    var t = f();
                    s || !1 !== i.leading || (s = t);
                    var e = r - (t - s);
                    return a = this, c = arguments, e <= 0 || r < e ? (o && (clearTimeout(o), o = null), s = t, u = n.apply(a, c), o || (a = c = null)) : o || !1 === i.trailing || (o = setTimeout(d, e)), u
                };
            return l.cancel = function() {
                clearTimeout(o), s = 0, o = a = c = null
            }, l
        }(function() {
            var t, e, n, r, i, o, a, c, u, s, d, l;
            Ge && clearTimeout(Ge), Be.length !== Je.scrollDepth.length ? (t = Y(), n = "object" == typeof(e = J()) && e.hasOwnProperty("height") ? e.height : 0, i = t, o = [], Je.scrollDepth.forEach(function(t) {
                var e = 0,
                    e = 100 === t ? i - 10 : Math.round(i * t / 100);
                o.push([t, e])
            }), r = o, c = (a = window.scrollY || window.pageYOffset || (document.body && document.body.scrollTop) + (document.documentElement && document.documentElement.scrollTop || 0)) + n, "percent" === Je.trackBy ? (d = a, l = c, r.forEach(function(t) {
                -1 === Be.indexOf(t[0]) && l >= t[1] && t[1] > d && Ve(t[0])
            })) : (u = a, s = c, Je.scrollDepth.forEach(function(t) {
                -1 === Be.indexOf(t) && t <= s && u < t && Ve(t)
            }))) : K("scroll", window, ze)
        }, 500);

        function Qe() {
            Q(window, "scroll", ze)
        }
        gt.subscribe(Lt.INIT, function() {
            var t = Ie.options;
            t && t.trackScroll && He(t.scroll, Ie)
        }), Ie.Analytics.prototype.resetScroll = function(t) {
            He(t, Ie)
        };
        var Ke, We = 5,
            $e = {},
            Xe = 0,
            Ze = window.onerror;

        function tn(t, e, n, r, i, o) {
            Ke && Ke === i || (Ke = i, We < ++Xe || (e = e || "-", n = n || 0, r = r || 0, Ie.logJSError(i, e + " " + n + ":" + r, o), "function" == typeof $e.onError && $e.onError({
                message: t,
                file: e,
                line: n,
                column: r,
                error: i
            })))
        }
        Q(window, "unhandledrejection", function(t) {
            t.preventDefault(), t.reason && t.reason.stack && tn(t.reason.message, "", 0, 0, t.reason, "PROMISE_ONERROR")
        }), Q(window, "error", function(t) {
            t && t.error && tn(t.message, t.filename, t.lineno, t.colno, t.error)
        }), window.onerror = function(t, e, n, r, i) {
            tn(t, e, n, r, i), "function" == typeof Ze && Ze.apply(window, arguments)
        }, Ie.startClientErrorTracking = function(t) {
            We = ($e = t || {}).maxErrors || 5, Xe = 0
        }, Ie.logJSError = function(t, e, n) {
            var r, i = window.fpti || {};
            oe({
                e: "err",
                page: i.page,
                pgrp: i.pgrp,
                comp: i.comp,
                erpg: t && t.message || t || "Script error",
                error_type: n || "WINDOW_ONERROR",
                error_description: ((r = t) && r.stack || "").replace(/http.*\/(\w+.)/gm, "_/$1").substring(0, 500),
                error_source: e
            })
        }, PAYPAL.trackJSError = function(t) {
            Ie && Ie.logJSError(t, "", "JSError")
        };
        var en = ["^gdpr_", "^ccpa"];

        function nn() {
            for (var t = decodeURIComponent(O(St) || re("fpti.ef_policy")), e = 0; e < en.length; e++) {
                var n = en[e];
                if (new RegExp(n, "i").test(t)) return 1
            }
        }

        function rn(t) {
            var e, n, r, i = !0;
            return nn() && (i = !1, (r = decodeURIComponent(O(It) || re("fpti.c_prefs"))) && (n = {}, r.split(",").map(function(t) {
                var e = t.split("=");
                return n[e[0]] = e[1], e
            })), e = n, t = t || Ut.MARKETING, e && 1 == +e[t] && (i = !0)), !i
        }

        function on() {
            return pe() || ""
        }

        function an() {
            return 0 < un("cust").length
        }

        function cn() {
            return $t().vr || ""
        }

        function un(t) {
            var e, n = window.fpti || {};
            switch (t) {
                case "rsta":
                case "locale":
                    e = n.rsta || n.locale;
                    break;
                case "ccpg":
                    e = (e = re("dataLayer.contentCountry") || n.ccpg || "").toLowerCase();
                    break;
                case "pageType":
                    e = re("dataLayer.pageType");
                    break;
                default:
                    e = n[t]
            }
            return e || ""
        }

        function sn() {
            var t, e, n, r, i, o = $t(),
                a = ne(ce()),
                c = ae(),
                u = {
                    url: a,
                    visitorId: o.vr || "",
                    sessionId: o.vt || "",
                    gacook: on(),
                    comp: un(Dt),
                    page: un("page"),
                    pgrp: un("pgrp"),
                    ccpg: un("ccpg"),
                    rsta: un("rsta"),
                    cust: un("cust"),
                    acnt: un("acnt"),
                    mrid: un("mrid"),
                    flnm: un("flnm"),
                    xe: un("xe"),
                    xt: un("xt"),
                    domain: re("document.location.hostname"),
                    tsrc: re("document.referrer"),
                    utm_campaign: Wt(c, "utm_campaign"),
                    utm_content: Wt(c, "utm_content"),
                    utm_medium: Wt(c, "utm_medium"),
                    utm_source: Wt(c, "utm_source"),
                    utm_term: Wt(c, "utm_term"),
                    browser: (i = "unknown", -1 < fe.indexOf("Firefox") ? i = "Firefox" : -1 < fe.indexOf("SamsungBrowser") ? i = "Samsung Internet" : -1 < fe.indexOf("Opera") || -1 < fe.indexOf("OPR") ? i = "Opera" : -1 < fe.indexOf("Trident") ? i = "Internet Explorer" : -1 < fe.indexOf("Edge") ? i = "Edge" : -1 < fe.indexOf("Chrome") ? i = "Chrome" : -1 < fe.indexOf("YaBrowser") ? i = "Yandex" : -1 < fe.indexOf("UCBrowser") ? i = "UC Browser" : -1 < fe.indexOf("Safari") && (i = "Safari"), i),
                    os: (r = "unknown", -1 !== fe.indexOf("Win") && (r = "Windows"), -1 !== fe.indexOf("Mac") && (r = "Macintosh"), -1 !== fe.indexOf("Linux") && (r = "Linux"), -1 !== fe.indexOf("Android") && (r = "Android"), -1 !== fe.indexOf("like Mac") && (r = "iOS"), r),
                    device: ve(),
                    lang: le.userLanguage || le.language,
                    isLoggedIn: an(),
                    keywords: (t = "", e = "meta[name='" + "keywords" + "']", (n = document.querySelector(e)) && (t = n.getAttribute("content")), t),
                    consentOptOut: rn()
                },
                s = [undefined, null, ""];
            for (var d in u) u.hasOwnProperty(d) && -1 < s.indexOf(u[d]) && delete u[d];
            window.laDataLayer = u
        }
        var dn = /^auth|bank|bill|bizac|bizli|bizm|bizs|bizpr|biztr|bizw|button|causef|checkout|compl|crca|credit|comme|consp|debit|dp|dual|hermes|home|invoi|latin|mep|merchantb|merchants|merchm|money|p2p|policy|pools|ppdg|ppme|report|self|setting|smart|res|smc|sum|un|virtual|wallet|work|xo/i,
            ln = t + "/patleaf.js",
            fn = t + "/patlcfg.js";

        function pn() {
            V(fn)
        }
        Kt(!0) && gt.subscribe(Lt.INIT, function() {
            var t;
            !window.TLT && window.fpti && (t = un(Dt), dn.test(t) && V(ln, pn))
        });
        var gn = 1e4;

        function mn(t, e) {
            e = w(e), t === Mt.DC || t === Mt.GA ? function(t, r) {
                r = w(r);
                var i = window.miconfig;

                function e() {
                    function t() {
                        window.gDataLayer.push(arguments)
                    }
                    window.gDataLayer = window.gDataLayer || [], t("js", new Date), nn() && (t("set", {
                        anonymize_ip: !0
                    }), rn(Ut.MARKETING) && t("set", {
                        allow_ad_personalization_signals: !1
                    })), window.gtag = window.gtag || t;
                    for (var e = 0; e < i.gtagModules.length; e++) {
                        switch (i.gtagModules[e]) {
                            case Mt.DC:
                                window.gtag("config", c);
                                break;
                            case Mt.GA:
                                window.gtag("config", u, {
                                    send_page_view: !1,
                                    linker: {
                                        domains: ["paypal.com", "paypal.me"]
                                    }
                                });
                                var n = (window.laDataLayer || sn(), window.laDataLayer);
                                window.gtag("config", u, {
                                    dimension1: n.gacook,
                                    dimension2: n.cust,
                                    dimension3: n.isLoggedIn,
                                    dimension4: n.url,
                                    dimension5: n.ccpg,
                                    dimension6: n.rsta,
                                    dimension7: n.acnt,
                                    dimension8: "",
                                    dimension9: "",
                                    dimension10: n.comp,
                                    dimension19: n.xe,
                                    dimension20: n.xt,
                                    dimension22: n.pgrp,
                                    dimension25: n.visitorId,
                                    dimension26: n.consentOptOut,
                                    contentGroup1: un("pageType"),
                                    contentGroup3: n.isLoggedIn,
                                    location: n.url
                                })
                        }
                    }
                    r()
                }
                i.gtagModules = i.gtagModules || [], i.gtagModules.length ? r() : V(a, function() {
                    e()
                }, !0);
                i.gtagModules.push(t), setTimeout(r, gn)
            }(t, e) : t === Mt.ELQ ? function(t) {
                t = w(t);
                var e = n + "/pa/mi/3p/eloqua.js";
                window._elqQ ? t() : V(e, function() {
                    window._elqQ = window._elqQ || [], window._elqQ.push(["elqSetSiteId", "94483084"]), t()
                });
                setTimeout(t, gn)
            }(e) : t === Mt.SF ? function(t) {
                {
                    var n, e, r, i, o, a;
                    t = w(t), document.body && (n = document.createElement("iframe"), e = window.laDataLayer, r = function(t, e) {
                        var n = {};
                        if (t && e && e.constructor === Array)
                            for (var r = 0; r < e.length; r++) {
                                var i = e[r],
                                    o = t[i];
                                o !== undefined && (n[i] = o)
                            }
                        return n
                    }(e, Jt), n.setAttribute("id", "ifrmControlTag"), n.setAttribute("style", "display: none; visibility: hidden; height: 0; width: 0;"), n.setAttribute("referrerpolicy", "no-referrer"), document.body.appendChild(n), n.setAttribute("src", l), i = function i(t) {
                        var e;
                        "KRUX_IFRAME_READY" === t.data && (e = {
                            action: "KRUX_CONTROL_TAG_INIT",
                            laDataLayer: r
                        }, n.contentWindow.postMessage(JSON.stringify(e), "*"))
                    }, window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent && window.attachEvent("onmessage", i), "profilenodeweb" === e.comp && (o = function o() {
                        rn() && (n.contentWindow.postMessage(JSON.stringify({
                            action: "KRUX_USER_OPT_OUT"
                        }), "*"), clearInterval(a))
                    }, a = window.setInterval(o, 250)))
                }
                t()
            }(e) : t === Mt.DTECH ? function(t) {
                t = w(t);
                var e = n + "/tagmgmt/dialogtech/st_v33_native.js";
                window._st_jsv = 33, window._stk = "60d665dfec9c56ac19f2c1769fa229cc2aea5e80", window._st_shd = !0, V(e, t), setTimeout(t, gn)
            }(e) : ((0, PAYPAL.analytics.logJSError)("Cannot load js", t, Pt), e())
        }
        var vn = {},
            hn = !1;

        function wn() {
            var t, e, n = un(Dt);
            n && !hn && (hn = !0, sn(), t = n.toLowerCase(), (e = vn.loadTags(t)) && function(t, e) {
                var n = vn.loadJs && vn.loadJs(t) || [];
                n.push(Mt.GA, Mt.SF, Mt.DC);
                var r = n.length;

                function i() {
                    0 === --r && e()
                }
                n.forEach(function(t) {
                    bn(vn.loadVendorDefault && vn.loadVendorDefault(t) || {}) ? mn(t, function() {
                        i()
                    }) : i()
                })
            }(t, function() {
                var t, r;
                vn.fireState = vn.fireState || {}, t = e, r = Wt(window, "miconfig.fireState", {}), t.forEach(function(t) {
                    r[t] = t in r && r[t];
                    var n, e = vn.loadTagConfig && vn.loadTagConfig(t) || {};
                    kn(e) && (n = [], (e.vendors ? e.vendors : []).forEach(function(t) {
                        var e = m(vn.loadVendorDefault && vn.loadVendorDefault(t.name) || {}, t);
                        bn(e) && n.push(e)
                    }), n.length && function(i) {
                        var t = PAYPAL.analytics.logJSError,
                            e = i.trigger.type;
                        i.trigger.hasOwnProperty("once") || (i.trigger.once = !0); {
                            var n, o;
                            "fn" === e ? Nn(n = i.trigger.name) ? Nn(n)(i) : t("Invalid trigger function", i.trigger, Pt) : e === Lt.BEACON ? (o = i.trigger.condition, gt.subscribe(e, function(t, e) {
                                if (e && e.data) {
                                    var n = e.data;
                                    for (var r in i.options = e, o) {
                                        if (o[r])
                                            if (!new RegExp(o[r], "i").test(n[r])) return
                                    }
                                    _n(i)
                                }
                            })) : "generic" === e ? _n(i) : t("Invalid trigger type", i.trigger, Pt)
                        }
                    }({
                        id: t,
                        trigger: e.trigger,
                        capture: e.capture,
                        vendors: n
                    }))
                })
            }))
        }

        function yn(r) {
            var t = p(r.vendors);
            return t.forEach(function(t) {
                var e = t.vars;
                for (var n in e) e.hasOwnProperty(n) && (e[n] = ne(function(t, e) {
                    if (!t) return;
                    if (!kn(t)) return;
                    if ("string" == typeof t) return t;
                    var n = t.type;
                    if ("fn" === n) {
                        var r = t.name,
                            i = t.args,
                            o = void 0 === i ? [] : i;
                        return Nn(r) ? Nn(r).apply(null, o) : ""
                    }
                    var a = function(t, e) {
                        var n = {
                                data: e ? e.data : {}
                            },
                            r = t.obj || window,
                            i = t.path,
                            o = t.defaultVal || "",
                            a = t.concat,
                            c = o;
                        "data" === r && (r = n[r]);
                        if (i && i.constructor === Array)
                            for (var u = 0; u < i.length; u++) {
                                var s = Wt(r, i[u]);
                                if (s) {
                                    c = s;
                                    break
                                }
                            } else c = Wt(r, i, o);
                        return function(t, e) {
                            if (!t || "object" != typeof t) return e;
                            var n = t.append || "";
                            return (t.prepend || "").concat(e, n)
                        }(a, c)
                    }(t, e);
                    if ("var" === n) return a;
                    if ("int" === n) return h(a)
                }(e[n], r.options)))
            }), t
        }

        function bn(t) {
            var e = t && t.consentCategory ? t.consentCategory : t && "ga" === t.name ? Ut.PERFORMANCE : Ut.MARKETING;
            return !rn(e) && kn(t)
        }

        function kn(t) {
            if (t && !t.hasOwnProperty("enable")) return !0;
            if (t && t.hasOwnProperty("enable")) {
                if ("boolean" == typeof t.enable) return t.enable;
                var e = t.enable;
                if (e.constructor === Array) {
                    for (var n = 0; n < e.length; n++)
                        if (!En(e[n])) return !1
                } else if (!En(e)) return !1;
                return !0
            }
            return !1
        }

        function En(t) {
            var e = t.type;
            if ("fn" === e) {
                var n = t.name,
                    r = t.args || [];
                return n && Nn(n) && Nn(n).apply(null, r)
            }
            if ("var" === e)
                for (var i = t.match || [], o = 0; o < i.length; o++) {
                    var a = i[o],
                        c = re(t.key);
                    if (new RegExp(a, "i").test(c)) return 1
                }
        }

        function _n(t) {
            var e, n, r, s, d;
            ! function(t) {
                var e = Wt(t, "trigger.session"); {
                    if (!e || !R()) return !0;
                    var n = e.key,
                        r = e.type;
                    if (n && "start" === r) return L("mi." + n, !0), !0;
                    if (n && "end" === r) return !!S("mi." + n);
                    if (n && "unset" === r) return !S("mi." + n)
                }
            }(t) || (e = t.id, (n = Wt(window, "miconfig.fireState")) && !n[e] && (r = yn(t), s = re("gtag"), d = re("_elqQ"), r.forEach(function(t) {
                var e, n, r, i, o, a, c, u;
                t.name === Mt.DC && s ? (t.action = t.action || "conversion", s("event", t.action, t.vars)) : t.name === Mt.GA && s ? (e = t.vars.event_action, n = t.vars, s("event", e, n)) : t.name === Mt.ELQ && d ? d.push(["elqTrackPageView"]) : G((i = (r = t).seperator || "&", o = r.endpoint, a = "".concat(o.scheme, "://").concat(o.host).concat(o.path), c = r.vars || {}, u = Object.keys(c).map(function(t) {
                    if (c[t]) return t + "=" + c[t]
                }).filter(Boolean).join(i), a + u))
            }), n[e] = t.trigger.once))
        }

        function Cn(t, e, n) {
            var r = Nn(e),
                i = r && r();
            if (i && t) {
                if (t.constructor !== Object || t.constructor === Array) {
                    if (t.constructor !== String) return null;
                    var o = i.match(t);
                    return o ? o[0] : null
                }
                for (var a in t) {
                    var c = i.match(t[a]);
                    if (c && c[0]) return n ? n[a] : c[0]
                }
            }
        }

        function xn(t, e) {
            if (t && e && e.constructor === Object) {
                if (t.constructor !== Array) return t.constructor === String && ue(t, e) || null;
                for (var n = 0; n < t.length; n++) {
                    var r = ue(t[n], e);
                    if (r) return r
                }
            }
        }

        function An(t) {
            t.trigger = {
                sel: "button[type=submit], input[type=submit]"
            }, Tn(t)
        }

        function On(t) {
            var e = window.document.querySelectorAll(t);
            return e = e && e[0]
        }

        function Tn(t) {
            var e, n, r = On(Wt(t, "trigger.sel"));
            r ? (e = function e() {
                Pn(t), K("click", r, e)
            }, Q(r, "click", e)) : n = setTimeout(function() {
                clearTimeout(n), Tn(t)
            }, 500)
        }

        function Pn(t) {
            var e = Wt(t, "trigger.suppl.sel");
            if (e) {
                if (e.constructor === Array)
                    for (var n = 0; n < e.length; n++) {
                        var r = On(e[n]);
                        if (r && r.checked) {
                            _n(t);
                            break
                        }
                    }
            } else _n(t)
        }

        function In(i) {
            var t = Wt(i, "trigger.sel"),
                o = window.document.querySelectorAll(t);
            if (o)
                for (var e = function e(n) {
                        var r = function r(t) {
                            var e = t.currentTarget;
                            vn.evntData = vn.evntData || {},
                                function(t, e) {
                                    var n = Wt(t, "capture");
                                    if (e) {
                                        var r = window.miconfig.evntData;
                                        if (r.hostname = e.hostname || "", r.pathname = e.pathname || "", r.href = e.href || "", r.className = e.className || "", r.id = e.id || "", r.textContent = e.textContent || "", n && n.constructor === Array)
                                            for (var i = 0; i < n.length; i++) r[n[i]] = e.getAttribute(n[i]) || e.innerHTML;
                                        else r[n] = e.getAttribute(n) || e.innerHTML;
                                        var o = r.href;
                                        o.match("^mailto:") && (o = o.split(":")[1].match("([^@]+)")[0]) && (r.href = o), _n(t)
                                    }
                                }(i, e), K("click", o[n], r)
                        };
                        Q(o[n], "click", r)
                    }, n = 0; n < o.length; n++) e(n);
            else var r = setTimeout(function() {
                clearTimeout(r), In(i)
            }, 500)
        }

        function Sn(t) {
            var e, n, r, i, o = Wt(t, "trigger.sel"),
                a = Wt(t, "trigger.text");
            o && a && (n = (e = On(o)) && e.textContent, r = new RegExp(a, "i"), n && r.test(n) ? _n(t) : i = setTimeout(function() {
                clearTimeout(i), Sn(t)
            }, 500))
        }

        function Ln(t) {
            var e = Wt(t, "trigger.condition");
            if (e) {
                for (var n in e) {
                    if (e[n])
                        if (!new RegExp(e[n], "i").test(re(n))) return
                }
                _n(t)
            }
        }

        function Dn() {
            return un("ccpg") || null
        }

        function Nn(t) {
            return {
                constructUrl: ee,
                fetchGuid: cn,
                fireImmediate: _n,
                encodeURIComponent: encodeURIComponent,
                fetchCountry: Dn,
                conditionalValue: Cn,
                mapValue: xn,
                gdprOptOut: rn,
                isLoggedIn: an,
                gaClientId: on,
                fireButtonClick: An,
                matchPgTxt: Sn,
                matchUrl: Ln,
                matchSuppl: Pn,
                handleClick: Tn,
                eventClick: In
            } [t]
        }
        Kt() && V(e, function() {
            (vn = window.miconfig) && (wn(), hn || (gt.subscribe(Lt.INIT, wn), gt.subscribe(Lt.BEACON, wn)))
        }, !0);
        var Rn = /^dev/i,
            qn = o + "OrchestratorMain.js";
        Kt(!0) && gt.subscribe(Lt.INIT, function() {
            var t, e, n, r, i;
            !window.QSI && window.fpti && (t = un(Dt), un("pgrp"), n = t, r = s, i = window.location && window.location.hostname || "", 0 !== n.indexOf("dev") && 0 !== i.indexOf("developer.") || (r = d), e = r, Rn.test(t) && ("undefined" == typeof window.QSI && (window.QSI = {}, window.QSI.config = {
                hostedJSLocation: o,
                zoneId: e,
                brandId: "paypalxm",
                sampleType: "visitor",
                sampleRate: 100
            }), V(qn)))
        });
        var jn, Fn = /moneynodeweb:(cards:new|money:banks|new:manual)|walletweb:.*bank:confirminstantly/i;

        function Mn(t) {
            var e = (t || "").replace("main:", "").replace(/:+/g, "_").toUpperCase(),
                n = (e = e.substr(0, 32)).length - 1;
            return "_" === e.charAt(n) && (e = e.substr(0, n)), e
        }
        Kt(!0) && gt.subscribe(Lt.BEACON, function() {
            var t, e = window.fpti;
            e && Fn.test(e.page || "") && (t = $t(), function(t) {
                var e = document.getElementById("fconfig");
                if (e) {
                    if (!e.parentNode || jn === t.s) return !1;
                    e.parentNode.removeChild(e)
                }
                return jn = t.s, (e = document.createElement("script")).id = "fconfig", e.type = "application/json", e.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99"), e.text = JSON.stringify(t), !!document.body && (document.body.appendChild(e), !0)
            }({
                ts: {
                    type: Mn(e.page),
                    delegate: !0,
                    fields: [{
                        id: "cardNumber",
                        min: 15
                    }, {
                        id: "expDate",
                        min: 4
                    }, {
                        id: "verificationCode",
                        min: 3
                    }, {
                        id: "accountNumberInput",
                        min: 9
                    }, {
                        id: "routingNumberGroup",
                        min: 9
                    }, {
                        id: "bankName",
                        min: 5
                    }, {
                        id: "branchLocation",
                        min: 3
                    }, {
                        id: "branchCode",
                        min: 3
                    }, {
                        id: "nativeName",
                        min: 7
                    }, {
                        id: "accountNamePanel",
                        min: 7
                    }, {
                        id: "idNumber",
                        min: 6
                    }, {
                        id: "bankCode",
                        min: 2
                    }, {
                        id: "biCode",
                        min: 8
                    }, {
                        id: "taxIdPanel",
                        min: 10
                    }, {
                        id: "swiftCode",
                        min: 8
                    }, {
                        id: "institution",
                        min: 3
                    }, {
                        id: "bankTransit",
                        min: 5
                    }, {
                        id: "fullName",
                        min: 7
                    }]
                },
                s: Mn(e.page),
                f: t.vt || ""
            }) && V("https://web.archive.org/web/20200706220232/https://c.paypal.com/da/r/fb.js"))
        })
    }();

}