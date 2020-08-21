/* Retrieved from https://c.paypal.com/da/r/fb.js */
! function() {
    "use strict";
    var d;
    "undefined" == typeof Array.prototype.indexOf && (Array.prototype.indexOf = function(e) {
            var t = this.length >>> 0,
                n = 0;
            for ((n = n < 0 ? Math.ceil(n) : Math.floor(n)) < 0 && (n += t); n < t;) {
                if (this.hasOwnProperty(this) && this[n] === e) return n;
                n++
            }
            return -1
        }), Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), d = window.Node || window.Element, d && d.prototype && null == d.prototype.children && Object.defineProperty(d.prototype, "children", {
            get: function() {
                for (var e, t = 0, n = this.childNodes, i = [], o = n.length; t < o;) 1 === (e = n[t++]).nodeType && i.push(e);
                return i
            }
        }), document.querySelectorAll || (document.querySelectorAll = function(e) {
            var t, n = document.createElement("style"),
                i = [];
            for (document.documentElement.firstChild.appendChild(n), document._qsa = [], n.styleSheet.cssText = e + "{x-qsa:expression(document._qsa && document._qsa.push(this))}", window.scrollBy(0, 0), n.parentNode.removeChild(n); document._qsa.length;)(t = document._qsa.shift()).style.removeAttribute("x-qsa"), i.push(t);
            return document._qsa = null, i
        }), document.querySelector || (document.querySelector = function(e) {
            var t = document.querySelectorAll(e);
            return t.length ? t[0] : null
        }), Array.prototype.every || (Array.prototype.every = function(e, t) {
            var n, i;
            if (null == this) throw new TypeError("this is null or not defined");
            var o = Object(this),
                a = o.length >>> 0;
            if ("function" != typeof e) throw new TypeError;
            for (1 < arguments.length && (n = t), i = 0; i < a;) {
                var r;
                if (i in o)
                    if (r = o[i], !e.call(n, r, i, o)) return !1;
                i++
            }
            return !0
        }), "object" != typeof JSON && (JSON = {}),
        function() {
            function f(e) {
                return e < 10 ? "0" + e : e
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(e) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
                return this.valueOf()
            });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                },
                rep;

            function quote(e) {
                return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }

            function str(e, t) {
                var n, i, o, a, r, s = gap,
                    c = t[e];
                switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                    case "string":
                        return quote(c);
                    case "number":
                        return isFinite(c) ? String(c) : "null";
                    case "boolean":
                    case "null":
                        return String(c);
                    case "object":
                        if (!c) return "null";
                        if (gap += indent, r = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                            for (a = c.length, n = 0; n < a; n += 1) r[n] = str(n, c) || "null";
                            return o = 0 === r.length ? "[]" : gap ? "[\n" + gap + r.join(",\n" + gap) + "\n" + s + "]" : "[" + r.join(",") + "]", gap = s, o
                        }
                        if (rep && "object" == typeof rep)
                            for (a = rep.length, n = 0; n < a; n += 1) "string" == typeof rep[n] && (o = str(i = rep[n], c)) && r.push(quote(i) + (gap ? ": " : ":") + o);
                        else
                            for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (o = str(i, c)) && r.push(quote(i) + (gap ? ": " : ":") + o);
                        return o = 0 === r.length ? "{}" : gap ? "{\n" + gap + r.join(",\n" + gap) + "\n" + s + "}" : "{" + r.join(",") + "}", gap = s, o
                }
            }
            "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
                var i;
                if (indent = gap = "", "number" == typeof n)
                    for (i = 0; i < n; i += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if ((rep = t) && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                var j;

                function walk(e, t) {
                    var n, i, o = e[t];
                    if (o && "object" == typeof o)
                        for (n in o) Object.prototype.hasOwnProperty.call(o, n) && ((i = walk(o, n)) !== undefined ? o[n] = i : delete o[n]);
                    return reviver.call(e, t, o)
                }
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }();
    var PFB_4732 = {},
        utils = {
            timing: {
                fraudnetStart: Date.now()
            }
        },
        init = function() {
            var e = /paypal\.com/.test(window.location.href) && /\/v1\/r\/d\/i/.test(window.location.href);
            try {
                var t = document.querySelector("script[fncls='fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99']");
                if (t && "application/json" === t.type) {
                    var n = JSON.parse(t.text);
                    if (utils.common.resolveConfig(n), utils.common.isWebView()) {
                        var i = PFB_4732.p1.collectP1();
                        i.wv = !0, PFB_4732.insertImage(constants.W_ENDPOINT, i), PFB_4732.insertImage(constants.POST3_ENDPOINT)
                    } else {
                        if (utils.configuration.get("bu") && PFB_4732.insertBeaconImage(), utils.configuration.get("cd") && utils.cacheHandler.isCachingFeatureAvailable()) return;
                        PFB_4732.initMs(n.mm), PFB_4732.initTs({
                            type: n.ts && n.ts.type,
                            fields: n.ts && n.ts.fields,
                            min: n.ts && n.ts.min,
                            delegate: n.ts && n.ts.delegate
                        }), PFB_4732.insertCollectorIframe(), PFB_4732.domTree.walk()
                    }
                } else e ? null === document.body ? window.onload = function() {
                    PFB_4732.frameReady()
                } : PFB_4732.frameReady() : utils.errorHandler("NONE")
            } catch (o) {
                utils.errorHandler(o)
            }
        },
        constants = (da = {
            FN_RELEASE_VERSION: "2.3.0",
            BEACON_BASE_URL: "https://b.stats.paypal.com/v2/counter.cgi",
            JS_URL: "https://c.paypal.com/da/r/fb.js",
            SERVICE_BASE_URL: "https://c.paypal.com"
        }, da.LOAD_IFRAME_ENDPOINT = da.SERVICE_BASE_URL + "/v1/r/d/i", da.ERROR_ENDPOINT = da.SERVICE_BASE_URL + "/v1/r/d/b/e", da.W_ENDPOINT = da.SERVICE_BASE_URL + "/v1/r/d/b/w", da.POST1_ENDPOINT = da.SERVICE_BASE_URL + "/v1/r/d/b/p1", da.POST2_ENDPOINT = da.SERVICE_BASE_URL + "/v1/r/d/b/p2", da.SERVICE_BASE_URL_C6 = "https://c6.paypal.com", da.POST3_ENDPOINT = da.SERVICE_BASE_URL_C6 + "/v1/r/d/b/p3", da.DOMAIN = "https://c.paypal.com", da.AUDIT_ENDPOINT = da.SERVICE_BASE_URL + "/v1/r/d/b/pa", da.SC_LOCAL_STORAGE = "sc-lst", da.SC_HTTP_COOKIE = "httpCookie", da.LS_P1_POST_COUNTS = "fnp1_ct", da.LS_P2_POST_TIME = "fnp2_t", da.LS_CORR_ID = "fncorr_id", da.PVC = "pvc", da),
        da, sbConsts = (ea = {
            BEACON_BASE_URL: "https://b.sbox.stats.paypal.com/v2/counter.cgi",
            SERVICE_BASE_URL: "https://c.sandbox.paypal.com:26595",
            LOAD_IFRAME_ENDPOINT: "https://c.sandbox.paypal.com:26595/v1/r/d/i",
            ERROR_ENDPOINT: "https://c.sandbox.paypal.com:26595/v1/r/d/b/e",
            W_ENDPOINT: "https://c.sandbox.paypal.com:26595/v1/r/d/b/w",
            POST1_ENDPOINT: "https://c.sandbox.paypal.com:26595/v1/r/d/b/p1",
            POST2_ENDPOINT: "https://c.sandbox.paypal.com:26595/v1/r/d/b/p2",
            SERVICE_BASE_URL_C6: "https://c.sandbox.paypal.com:26595",
            POST3_ENDPOINT: "https://c.sandbox.paypal.com:26595/v1/r/d/b/p3",
            DOMAIN: "https://c.sandbox.paypal.com"
        }, ea),
        ea, fa, oa, sa, ya, za, Aa, Ba, Ha, Ia, Cb, Db, Lb, Ob, Pb, Qb, Rb, Sb, Tb, Vb, Wb, Mb;
    utils.configuration = (fa = {}, {
        set: function(e, t) {
            fa[e] = t
        },
        setAll: function(e) {
            fa = e
        },
        get: function(e) {
            return fa[e]
        },
        getAll: function() {
            return fa
        }
    }), utils.cacheHandler = (oa = 0, sa = function() {
        utils.configuration.get("localStorage") && (window.localStorage.removeItem(constants.LS_P1_POST_COUNTS), window.localStorage.removeItem(constants.LS_P2_POST_TIME), window.localStorage.removeItem(constants.LS_CORR_ID))
    }, {
        isCachingFeatureAvailable: function() {
            if (utils.configuration.get("localStorage")) {
                var e = parseInt(window.localStorage.getItem(constants.LS_P1_POST_COUNTS), 10) || 0,
                    t = parseInt(window.localStorage.getItem(constants.LS_P2_POST_TIME), 10) || 0,
                    n = parseInt(window.localStorage.getItem(constants.LS_CORR_ID)) || "";
                oa = e;
                var i = Date.now() - 1728e5;
                if (n.toString() == utils.configuration.get("correlationId")) {
                    if (!(t <= i)) return 1 <= e && (oa = 0), !0;
                    oa = 0, sa()
                }
            }
            return !1
        },
        setCacheForP1: function() {
            utils.configuration.get("localStorage") && (window.localStorage.setItem(constants.LS_CORR_ID, utils.configuration.get("correlationId")), oa++, window.localStorage.setItem(constants.LS_P1_POST_COUNTS, oa))
        },
        setCacheForP2: function() {
            utils.configuration.get("localStorage") && (window.localStorage.setItem(constants.LS_CORR_ID, utils.configuration.get("correlationId")), window.localStorage.setItem(constants.LS_P2_POST_TIME, Date.now()))
        }
    }), utils.common = (ya = function(e) {
        var t;
        if (null !== e && "string" == typeof e && "" !== e) {
            if (2 === (t = e.split(".")).length) return window.parent[t[0]][t[1]];
            if (1 === t.length) return window.parent[e]
        }
    }, za = function(e) {
        if (utils.configuration.set("sc", Aa(e.sc, !0)), utils.configuration.set("cd", Aa(e.cd, !1)), utils.configuration.set("appId", e.s), utils.configuration.set("correlationId", e.f), utils.configuration.set("fp", e.fp), utils.configuration.set("b", e.b), utils.configuration.set("bu", Aa(e.bu, !0)), utils.configuration.set("localStorage", Ba()), e.sandbox === Aa(e.sandbox, !1))
            for (var t = Object.keys(sbConsts), n = 0; n < t.length; n++) {
                var i = t[n];
                constants[i] = sbConsts[i]
            }
        utils.configuration.set("trt", Ia(e.trt))
    }, Aa = function(e, t) {
        var n = t;
        return void 0 !== e && "undefined" !== e && (n = "string" == typeof e ? "true" === e : e), n
    }, Ba = function() {
        try {
            var e = Date.now();
            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
        } catch (t) {
            return !1
        }
    }, Ha = function(e) {
        for (var t = 0, n = 0; n < e.length; n++) t += e.charCodeAt(n);
        return t &= t
    }, Ia = function(e) {
        if (Aa(e, !1)) return !0;
        for (var t = [{
                name: "PayPal Gifts",
                appId: "paypal-gifts",
                rampPercent: 100
            }, {
                name: "Checkout - Hermes",
                appId: "HERMES_SIGNIN",
                rampPercent: 0
            }], n = utils.configuration.get("appId"), i = utils.configuration.get("correlationId"), o = 0; o < t.length; o++)
            if (t[o].appId === n) {
                var a = t[o].rampPercent || 0,
                    r = Math.abs(Ha(i)) % 100;
                return 0 <= r && r < a
            } return !1
    }, {
        resolveConfig: function(e) {
            utils.common.callback1 = ya(e.cb1), utils.common.callback2 = ya(e.cb2), za(e)
        },
        safelySetBoolean: Aa,
        isLocalStorageEnabled: Ba,
        hash: Ha,
        isWebView: function() {
            var e = window.navigator.userAgent;
            if (/iPod|iPhone|iPad|Android|BlackBerry|BB10|Palm|CriOS|IEMobile|Windows Phone OS|webOS|Symbian|silk|Kindle|Opera Mini|mobile/i.test(e) || /ip(a|ro)d|silk|xoom|playbook|tablet|kindle|Nexus 7|GT-P10|SC-01C|SHW-M180S|SM-T320|SGH-T849|SCH-I800|SHW-M180L|SPH-P100|SGH-I987|zt180|HTC( Flyer|_Flyer)|Sprint ATP51|ViewPad7|pandigital(sprnova|nova)|Ideos S7|Dell Streak 7|Advent Vega|A101IT|A70BHT|MID7015|Next2|nook|FOLIO|MB511.*RUTEM|Mac OS.*Silk/i.test(e)) {
                if ("Android" !== function(e) {
                        var t = e.match(/iPod|iPhone|iPad|Android|BlackBerry|Windows Phone OS|webOS|Symbian|mobile/g);
                        if (t && 0 < t.length) return t[0]
                    }(e)) return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)|PLAYSTATION|iPadApp/i.test(e);
                var t = function(e) {
                    var t = e.match(/Android ([.0-9]*)/i);
                    if (null !== t && t[1]) return parseFloat(t[1])
                }(e);
                return t < 4.4 ? /Version\/[.0-9]*/i.test(e) : 4.4 <= t && /Version\/[.0-9]* Chrome\/[.0-9]*/i.test(e)
            }
            return !1
        },
        onEvent: function(e, t, n) {
            "undefined" != typeof e.addEventListener ? e.addEventListener(t, n, !1) : "undefined" != typeof e.attachEvent && e.attachEvent("on" + t, n)
        },
        removeEvent: function(e, t, n) {
            "undefined" != typeof e.removeEventListener ? e.removeEventListener(t, n, !1) : "undefined" != typeof e.detachEvent && e.detachEvent("on" + t, n)
        },
        wrapItemAsKey: function(e, t) {
            var n = {};
            return n[t] = e, n
        }
    }), utils.errorHandler = (Cb = function(e) {
        new AjaxRequest({
            type: "POST",
            contentType: "application/json",
            url: constants.ERROR_ENDPOINT,
            data: JSON.stringify({
                appId: utils.configuration.get("appId"),
                correlationID: utils.configuration.get("correlationId"),
                e: e && e.message,
                stack: encodeURIComponent(e && e.stack),
                rvr: constants.FN_RELEASE_VERSION
            })
        }).send()
    }, Db = function(e) {
        var t = document.createElement("script"),
            n = constants.ERROR_ENDPOINT + "?e=" + encodeURIComponent(e) + "&rvr=" + constants.FN_RELEASE_VERSION + "&stack=" + encodeURIComponent(e.stack) + "&correlationID=" + utils.configuration.get("correlationId") + "&appId=" + encodeURIComponent(utils.configuration.get("appId"));
        t.src = n, document.body.appendChild(t)
    }, function(e) {
        var t = constants.DOMAIN;
        document.location.protocol + "//" + document.domain === t ? Cb(e) : Db(e)
    }), Lb = utils.common, Ob = {
        DAY: 864e5,
        HOUR: 36e5,
        MINUTE: 6e4,
        SECOND: 1e3,
        BASELINE_YEAR: 2014,
        MAX_SCORE: 864e6,
        AMBIGUITIES: {
            "America/Denver": ["America/Mazatlan"],
            "Europe/London": ["Africa/Casablanca"],
            "America/Chicago": ["America/Mexico_City"],
            "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
            "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
            "Asia/Beirut": ["Asia/Amman", "Asia/Jerusalem", "Europe/Helsinki", "Asia/Damascus", "Africa/Cairo", "Asia/Gaza", "Europe/Minsk"],
            "Pacific/Auckland": ["Pacific/Fiji"],
            "America/Los_Angeles": ["America/Santa_Isabel"],
            "America/New_York": ["America/Havana"],
            "America/Halifax": ["America/Goose_Bay"],
            "America/Godthab": ["America/Miquelon"],
            "Asia/Dubai": ["Asia/Yerevan"],
            "Asia/Jakarta": ["Asia/Krasnoyarsk"],
            "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
            "Australia/Sydney": ["Australia/Lord_Howe"],
            "Asia/Tokyo": ["Asia/Yakutsk"],
            "Asia/Dhaka": ["Asia/Omsk"],
            "Asia/Baku": ["Asia/Yerevan"],
            "Australia/Brisbane": ["Asia/Vladivostok"],
            "Pacific/Noumea": ["Asia/Vladivostok"],
            "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
            "Pacific/Tongatapu": ["Pacific/Apia"],
            "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
            "Asia/Karachi": ["Asia/Yekaterinburg"],
            "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
        }
    }, Pb = function Pb(e) {
        var t = -e.getTimezoneOffset();
        return null !== t ? t : 0
    }, Qb = function Qb() {
        var e = Pb(new Date(Ob.BASELINE_YEAR, 0, 2)),
            t = Pb(new Date(Ob.BASELINE_YEAR, 5, 2)),
            n = e - t;
        return n < 0 ? e + ",1" : 0 < n ? t + ",1,s" : e + ",0"
    }, Rb = function Rb() {
        var e, t;
        if ("undefined" != typeof Intl && "undefined" != typeof Intl.DateTimeFormat && void 0 !== (e = Intl.DateTimeFormat()) && "undefined" != typeof e.resolvedOptions) return (t = e.resolvedOptions().timeZone) && (-1 < t.indexOf("/") || "UTC" === t) ? t : void 0
    }, Sb = function Sb(e) {
        for (var t = new Date(e, 0, 1, 0, 0, 1, 0).getTime(), n = new Date(e, 12, 31, 23, 59, 59).getTime(), i = t, o = new Date(i).getTimezoneOffset(), a = null, r = null; i < n - 864e5;) {
            var s = new Date(i),
                c = s.getTimezoneOffset();
            c !== o && (c < o && (a = s), o < c && (r = s), o = c), i += 864e5
        }
        return !(!a || !r) && {
            s: Tb(a).getTime(),
            e: Tb(r).getTime()
        }
    }, Tb = function Tb(e, t, n) {
        void 0 === t && (t = Ob.DAY, n = Ob.HOUR);
        for (var i = new Date(e.getTime() - t).getTime(), o = e.getTime() + t, a = new Date(i).getTimezoneOffset(), r = i, s = null; r < o - n;) {
            var c = new Date(r);
            if (c.getTimezoneOffset() !== a) {
                s = c;
                break
            }
            r += n
        }
        return t === Ob.DAY ? Tb(s, Ob.HOUR, Ob.MINUTE) : t === Ob.HOUR ? Tb(s, Ob.MINUTE, Ob.SECOND) : s
    }, Vb = function Vb(i, o) {
        for (var a = function a(e) {
                for (var t = 0, n = 0; n < i.length; n++)
                    if (e.rules[n] && i[n]) {
                        if (!(i[n].s >= e.rules[n].s && i[n].e <= e.rules[n].e)) {
                            t = "N/A";
                            break
                        }
                        if (t = 0, t += Math.abs(i[n].s - e.rules[n].s), t += Math.abs(e.rules[n].e - i[n].e), Ob.MAX_SCORE < t) {
                            t = "N/A";
                            break
                        }
                    } return t = function(e, t, n, i) {
                    if ("N/A" !== n) return n;
                    if ("Asia/Beirut" === t) {
                        if ("Africa/Cairo" === i.name && 13983768e5 === e[6].s && 14116788e5 === e[6].e) return 0;
                        if ("Asia/Jerusalem" === i.name && 13959648e5 === e[6].s && 14118588e5 === e[6].e) return 0
                    } else if ("America/Santiago" === t) {
                        if ("America/Asuncion" === i.name && 14124816e5 === e[6].s && 1397358e6 === e[6].e) return 0;
                        if ("America/Campo_Grande" === i.name && 14136912e5 === e[6].s && 13925196e5 === e[6].e) return 0
                    } else if ("America/Montevideo" === t) {
                        if ("America/Sao_Paulo" === i.name && 14136876e5 === e[6].s && 1392516e6 === e[6].e) return 0
                    } else if ("Pacific/Auckland" === t && "Pacific/Fiji" === i.name && 14142456e5 === e[6].s && 13961016e5 === e[6].e) return 0;
                    return n
                }(i, o, t, e)
            }, e = {}, t = Mb.olson.dst_rules.zones, n = t.length, r = Ob.AMBIGUITIES[o], s = 0; s < n; s++) {
            var c = t[s],
                l = a(t[s]);
            "N/A" !== l && (e[c.name] = l)
        }
        for (var u in e)
            if (e.hasOwnProperty(u))
                for (var d = 0; d < r.length; d++)
                    if (r[d] === u) return u;
        return o
    }, Wb = function Wb(e) {
        var n = function n(e) {
                for (var t = 0; t < e.length; t++)
                    if (!1 !== e[t]) return !0;
                return !1
            },
            t = function i() {
                for (var e = [], t = 0; t < Mb.olson.dst_rules.years.length; t++) {
                    var n = Sb(Mb.olson.dst_rules.years[t]);
                    e.push(n)
                }
                return e
            }();
        return n(t) ? Vb(t, e) : e
    }, Mb = {
        determine: function Xb() {
            var e = Rb();
            return e || (e = Mb.olson.timezones[Qb()], "undefined" != typeof Ob.AMBIGUITIES[e] && (e = Wb(e))), {
                name: function() {
                    return e
                }
            }
        }
    }, Mb.olson = Mb.olson || {}, Mb.olson.timezones = {
        "-720,0": "Etc/GMT+12",
        "-660,0": "Pacific/Pago_Pago",
        "-660,1,s": "Pacific/Apia",
        "-600,1": "America/Adak",
        "-600,0": "Pacific/Honolulu",
        "-570,0": "Pacific/Marquesas",
        "-540,0": "Pacific/Gambier",
        "-540,1": "America/Anchorage",
        "-480,1": "America/Los_Angeles",
        "-480,0": "Pacific/Pitcairn",
        "-420,0": "America/Phoenix",
        "-420,1": "America/Denver",
        "-360,0": "America/Guatemala",
        "-360,1": "America/Chicago",
        "-360,1,s": "Pacific/Easter",
        "-300,0": "America/Bogota",
        "-300,1": "America/New_York",
        "-270,0": "America/Caracas",
        "-240,1": "America/Halifax",
        "-240,0": "America/Santo_Domingo",
        "-240,1,s": "America/Asuncion",
        "-210,1": "America/St_Johns",
        "-180,1": "America/Godthab",
        "-180,0": "America/Argentina/Buenos_Aires",
        "-180,1,s": "America/Montevideo",
        "-120,0": "America/Noronha",
        "-120,1": "America/Noronha",
        "-60,1": "Atlantic/Azores",
        "-60,0": "Atlantic/Cape_Verde",
        "0,0": "UTC",
        "0,1": "Europe/London",
        "60,1": "Europe/Berlin",
        "60,0": "Africa/Lagos",
        "60,1,s": "Africa/Windhoek",
        "120,1": "Asia/Beirut",
        "120,0": "Africa/Johannesburg",
        "180,0": "Asia/Baghdad",
        "180,1": "Europe/Moscow",
        "210,1": "Asia/Tehran",
        "240,0": "Asia/Dubai",
        "240,1": "Asia/Baku",
        "270,0": "Asia/Kabul",
        "300,1": "Asia/Yekaterinburg",
        "300,0": "Asia/Karachi",
        "330,0": "Asia/Kolkata",
        "345,0": "Asia/Kathmandu",
        "360,0": "Asia/Dhaka",
        "360,1": "Asia/Omsk",
        "390,0": "Asia/Rangoon",
        "420,1": "Asia/Krasnoyarsk",
        "420,0": "Asia/Jakarta",
        "480,0": "Asia/Shanghai",
        "480,1": "Asia/Irkutsk",
        "525,0": "Australia/Eucla",
        "525,1,s": "Australia/Eucla",
        "540,1": "Asia/Yakutsk",
        "540,0": "Asia/Tokyo",
        "570,0": "Australia/Darwin",
        "570,1,s": "Australia/Adelaide",
        "600,0": "Australia/Brisbane",
        "600,1": "Asia/Vladivostok",
        "600,1,s": "Australia/Sydney",
        "630,1,s": "Australia/Lord_Howe",
        "660,1": "Asia/Kamchatka",
        "660,0": "Pacific/Noumea",
        "690,0": "Pacific/Norfolk",
        "720,1,s": "Pacific/Auckland",
        "720,0": "Pacific/Majuro",
        "765,1,s": "Pacific/Chatham",
        "780,0": "Pacific/Tongatapu",
        "780,1,s": "Pacific/Apia",
        "840,0": "Pacific/Kiritimati"
    }, Mb.olson.dst_rules = {
        years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        zones: [{
            name: "Africa/Cairo",
            rules: [{
                e: 12199572e5,
                s: 12090744e5
            }, {
                e: 1250802e6,
                s: 1240524e6
            }, {
                e: 12858804e5,
                s: 12840696e5
            }, !1, !1, !1, {
                e: 14116788e5,
                s: 1406844e6
            }]
        }, {
            name: "Africa/Casablanca",
            rules: [{
                e: 12202236e5,
                s: 12122784e5
            }, {
                e: 12508092e5,
                s: 12438144e5
            }, {
                e: 1281222e6,
                s: 12727584e5
            }, {
                e: 13120668e5,
                s: 13017888e5
            }, {
                e: 13489704e5,
                s: 1345428e6
            }, {
                e: 13828392e5,
                s: 13761e8
            }, {
                e: 14142888e5,
                s: 14069448e5
            }]
        }, {
            name: "America/Asuncion",
            rules: [{
                e: 12050316e5,
                s: 12243888e5
            }, {
                e: 12364812e5,
                s: 12558384e5
            }, {
                e: 12709548e5,
                s: 12860784e5
            }, {
                e: 13024044e5,
                s: 1317528e6
            }, {
                e: 1333854e6,
                s: 13495824e5
            }, {
                e: 1364094e6,
                s: 1381032e6
            }, {
                e: 13955436e5,
                s: 14124816e5
            }]
        }, {
            name: "America/Campo_Grande",
            rules: [{
                e: 12032172e5,
                s: 12243888e5
            }, {
                e: 12346668e5,
                s: 12558384e5
            }, {
                e: 12667212e5,
                s: 1287288e6
            }, {
                e: 12981708e5,
                s: 13187376e5
            }, {
                e: 13302252e5,
                s: 1350792e6
            }, {
                e: 136107e7,
                s: 13822416e5
            }, {
                e: 13925196e5,
                s: 14136912e5
            }]
        }, {
            name: "America/Goose_Bay",
            rules: [{
                e: 122559486e4,
                s: 120503526e4
            }, {
                e: 125704446e4,
                s: 123648486e4
            }, {
                e: 128909886e4,
                s: 126853926e4
            }, {
                e: 13205556e5,
                s: 129998886e4
            }, {
                e: 13520052e5,
                s: 13314456e5
            }, {
                e: 13834548e5,
                s: 13628952e5
            }, {
                e: 14149044e5,
                s: 13943448e5
            }]
        }, {
            name: "America/Havana",
            rules: [{
                e: 12249972e5,
                s: 12056436e5
            }, {
                e: 12564468e5,
                s: 12364884e5
            }, {
                e: 12885012e5,
                s: 12685428e5
            }, {
                e: 13211604e5,
                s: 13005972e5
            }, {
                e: 13520052e5,
                s: 13332564e5
            }, {
                e: 13834548e5,
                s: 13628916e5
            }, {
                e: 14149044e5,
                s: 13943412e5
            }]
        }, {
            name: "America/Mazatlan",
            rules: [{
                e: 1225008e6,
                s: 12074724e5
            }, {
                e: 12564576e5,
                s: 1238922e6
            }, {
                e: 1288512e6,
                s: 12703716e5
            }, {
                e: 13199616e5,
                s: 13018212e5
            }, {
                e: 13514112e5,
                s: 13332708e5
            }, {
                e: 13828608e5,
                s: 13653252e5
            }, {
                e: 14143104e5,
                s: 13967748e5
            }]
        }, {
            name: "America/Mexico_City",
            rules: [{
                e: 12250044e5,
                s: 12074688e5
            }, {
                e: 1256454e6,
                s: 12389184e5
            }, {
                e: 12885084e5,
                s: 1270368e6
            }, {
                e: 1319958e6,
                s: 13018176e5
            }, {
                e: 13514076e5,
                s: 13332672e5
            }, {
                e: 13828572e5,
                s: 13653216e5
            }, {
                e: 14143068e5,
                s: 13967712e5
            }]
        }, {
            name: "America/Miquelon",
            rules: [{
                e: 12255984e5,
                s: 12050388e5
            }, {
                e: 1257048e6,
                s: 12364884e5
            }, {
                e: 12891024e5,
                s: 12685428e5
            }, {
                e: 1320552e6,
                s: 12999924e5
            }, {
                e: 13520016e5,
                s: 1331442e6
            }, {
                e: 13834512e5,
                s: 13628916e5
            }, {
                e: 14149008e5,
                s: 13943412e5
            }]
        }, {
            name: "America/Santa_Isabel",
            rules: [{
                e: 12250116e5,
                s: 1207476e6
            }, {
                e: 12564612e5,
                s: 12389256e5
            }, {
                e: 12885156e5,
                s: 12703752e5
            }, {
                e: 13199652e5,
                s: 13018248e5
            }, {
                e: 13514148e5,
                s: 13332744e5
            }, {
                e: 13828644e5,
                s: 13653288e5
            }, {
                e: 1414314e6,
                s: 13967784e5
            }]
        }, {
            name: "America/Santiago",
            rules: [{
                e: 1206846e6,
                s: 1223784e6
            }, {
                e: 1237086e6,
                s: 12552336e5
            }, {
                e: 127035e7,
                s: 12866832e5
            }, {
                e: 13048236e5,
                s: 13138992e5
            }, {
                e: 13356684e5,
                s: 13465584e5
            }, {
                e: 1367118e6,
                s: 13786128e5
            }, {
                e: 13985676e5,
                s: 14100624e5
            }]
        }, {
            name: "America/Sao_Paulo",
            rules: [{
                e: 12032136e5,
                s: 12243852e5
            }, {
                e: 12346632e5,
                s: 12558348e5
            }, {
                e: 12667176e5,
                s: 12872844e5
            }, {
                e: 12981672e5,
                s: 1318734e6
            }, {
                e: 13302216e5,
                s: 13507884e5
            }, {
                e: 13610664e5,
                s: 1382238e6
            }, {
                e: 1392516e6,
                s: 14136876e5
            }]
        }, {
            name: "Asia/Amman",
            rules: [{
                e: 1225404e6,
                s: 12066552e5
            }, {
                e: 12568536e5,
                s: 12381048e5
            }, {
                e: 12883032e5,
                s: 12695544e5
            }, {
                e: 13197528e5,
                s: 13016088e5
            }, !1, !1, {
                e: 14147064e5,
                s: 13959576e5
            }]
        }, {
            name: "Asia/Damascus",
            rules: [{
                e: 12254868e5,
                s: 120726e7
            }, {
                e: 125685e7,
                s: 12381048e5
            }, {
                e: 12882996e5,
                s: 12701592e5
            }, {
                e: 13197492e5,
                s: 13016088e5
            }, {
                e: 13511988e5,
                s: 13330584e5
            }, {
                e: 13826484e5,
                s: 1364508e6
            }, {
                e: 14147028e5,
                s: 13959576e5
            }]
        }, {
            name: "Asia/Dubai",
            rules: [!1, !1, !1, !1, !1, !1, !1]
        }, {
            name: "Asia/Gaza",
            rules: [{
                e: 12199572e5,
                s: 12066552e5
            }, {
                e: 12520152e5,
                s: 12381048e5
            }, {
                e: 1281474e6,
                s: 126964086e4
            }, {
                e: 1312146e6,
                s: 130160886e4
            }, {
                e: 13481784e5,
                s: 13330584e5
            }, {
                e: 13802292e5,
                s: 1364508e6
            }, {
                e: 1414098e6,
                s: 13959576e5
            }]
        }, {
            name: "Asia/Irkutsk",
            rules: [{
                e: 12249576e5,
                s: 12068136e5
            }, {
                e: 12564072e5,
                s: 12382632e5
            }, {
                e: 12884616e5,
                s: 12697128e5
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Jerusalem",
            rules: [{
                e: 12231612e5,
                s: 12066624e5
            }, {
                e: 1254006e6,
                s: 1238112e6
            }, {
                e: 1284246e6,
                s: 12695616e5
            }, {
                e: 131751e7,
                s: 1301616e6
            }, {
                e: 13483548e5,
                s: 13330656e5
            }, {
                e: 13828284e5,
                s: 13645152e5
            }, {
                e: 1414278e6,
                s: 13959648e5
            }]
        }, {
            name: "Asia/Kamchatka",
            rules: [{
                e: 12249432e5,
                s: 12067992e5
            }, {
                e: 12563928e5,
                s: 12382488e5
            }, {
                e: 12884508e5,
                s: 12696984e5
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Krasnoyarsk",
            rules: [{
                e: 12249612e5,
                s: 12068172e5
            }, {
                e: 12564108e5,
                s: 12382668e5
            }, {
                e: 12884652e5,
                s: 12697164e5
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Omsk",
            rules: [{
                e: 12249648e5,
                s: 12068208e5
            }, {
                e: 12564144e5,
                s: 12382704e5
            }, {
                e: 12884688e5,
                s: 126972e7
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Vladivostok",
            rules: [{
                e: 12249504e5,
                s: 12068064e5
            }, {
                e: 12564e8,
                s: 1238256e6
            }, {
                e: 12884544e5,
                s: 12697056e5
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Yakutsk",
            rules: [{
                e: 1224954e6,
                s: 120681e7
            }, {
                e: 12564036e5,
                s: 12382596e5
            }, {
                e: 1288458e6,
                s: 12697092e5
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Yekaterinburg",
            rules: [{
                e: 12249684e5,
                s: 12068244e5
            }, {
                e: 1256418e6,
                s: 1238274e6
            }, {
                e: 12884724e5,
                s: 12697236e5
            }, !1, !1, !1, !1]
        }, {
            name: "Asia/Yerevan",
            rules: [{
                e: 1224972e6,
                s: 1206828e6
            }, {
                e: 12564216e5,
                s: 12382776e5
            }, {
                e: 1288476e6,
                s: 12697272e5
            }, {
                e: 13199256e5,
                s: 13011768e5
            }, !1, !1, !1]
        }, {
            name: "Australia/Lord_Howe",
            rules: [{
                e: 12074076e5,
                s: 12231342e5
            }, {
                e: 12388572e5,
                s: 12545838e5
            }, {
                e: 12703068e5,
                s: 12860334e5
            }, {
                e: 13017564e5,
                s: 1317483e6
            }, {
                e: 1333206e6,
                s: 13495374e5
            }, {
                e: 13652604e5,
                s: 1380987e6
            }, {
                e: 139671e7,
                s: 14124366e5
            }]
        }, {
            name: "Australia/Perth",
            rules: [{
                e: 12068136e5,
                s: 12249576e5
            }, !1, !1, !1, !1, !1, !1]
        }, {
            name: "Europe/Helsinki",
            rules: [{
                e: 12249828e5,
                s: 12068388e5
            }, {
                e: 12564324e5,
                s: 12382884e5
            }, {
                e: 12884868e5,
                s: 1269738e6
            }, {
                e: 13199364e5,
                s: 13011876e5
            }, {
                e: 1351386e6,
                s: 13326372e5
            }, {
                e: 13828356e5,
                s: 13646916e5
            }, {
                e: 14142852e5,
                s: 13961412e5
            }]
        }, {
            name: "Europe/Minsk",
            rules: [{
                e: 12249792e5,
                s: 12068352e5
            }, {
                e: 12564288e5,
                s: 12382848e5
            }, {
                e: 12884832e5,
                s: 12697344e5
            }, !1, !1, !1, !1]
        }, {
            name: "Europe/Moscow",
            rules: [{
                e: 12249756e5,
                s: 12068316e5
            }, {
                e: 12564252e5,
                s: 12382812e5
            }, {
                e: 12884796e5,
                s: 12697308e5
            }, !1, !1, !1, !1]
        }, {
            name: "Pacific/Apia",
            rules: [!1, !1, !1, {
                e: 13017528e5,
                s: 13168728e5
            }, {
                e: 13332024e5,
                s: 13489272e5
            }, {
                e: 13652568e5,
                s: 13803768e5
            }, {
                e: 13967064e5,
                s: 14118264e5
            }]
        }, {
            name: "Pacific/Fiji",
            rules: [!1, !1, {
                e: 12696984e5,
                s: 12878424e5
            }, {
                e: 13271544e5,
                s: 1319292e6
            }, {
                e: 1358604e6,
                s: 13507416e5
            }, {
                e: 139005e7,
                s: 1382796e6
            }, {
                e: 14215032e5,
                s: 14148504e5
            }]
        }, {
            name: "Europe/London",
            rules: [{
                e: 12249828e5,
                s: 12068388e5
            }, {
                e: 12564324e5,
                s: 12382884e5
            }, {
                e: 12884868e5,
                s: 1269738e6
            }, {
                e: 13199364e5,
                s: 13011876e5
            }, {
                e: 1351386e6,
                s: 13326372e5
            }, {
                e: 13828356e5,
                s: 13646916e5
            }, {
                e: 14142852e5,
                s: 13961412e5
            }]
        }]
    }, Lb.jstz = Mb, Function.prototype.bind || (Function.prototype.bind = function(e) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var t = Array.prototype.slice.call(arguments, 1),
            n = this,
            i = function() {},
            o = function() {
                return n.apply(this instanceof i && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
            };
        return i.prototype = this.prototype, o.prototype = new i, o
    });
    var AjaxRequest = function(e) {
        try {
            this.url = e.url || "", this.requestType = e.type || "POST", this.contentType = e.contentType || "application/text", this.async = !e.hasOwnProperty("async") || !!e.async;
            var t, n, i, o, a, r, s = [],
                c = e.data;
            try {
                t = location.href
            } catch (l) {
                (t = document.createElement("a")).href = "", t = t.href
            }
            if (a = (n = /^([\w\+\.\-]+:)(?:\/\/([\^\/?#:]*)(?::(\d+))?)?/).exec(t.toLowerCase()) || [], e.crossDomain !== undefined ? this.crossDomain = !!e.crossDomain : (o = n.exec(this.url.toLowerCase()), this.crossDomain = !(!o || o[1] === a[1] && o[2] === a[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) === (a[3] || ("http:" === a[1] ? 80 : 443)))), this.crossDomain && (this.requestType = "GET"), "object" == typeof c) {
                for (i in c) c.hasOwnProperty(i) && s.push(i + "=" + ("string" == typeof c[i] ? c[i] : JSON.stringify(c[i])));
                c = s.join("&")
            }
            "POST" === this.requestType ? this.data = c : c && (r = -1 === this.url.indexOf("?") ? "?" : "&", this.url += r + c), this.callbacks = {}, e.hasOwnProperty("success") ? this.callbacks.success = e.success : e.hasOwnProperty("error") && (this.callbacks.error = e.error), this.crossDomain || (this.req = this.createXHR(), this.req ? (this.req.open(this.requestType, this.url, this.async), this.req.setRequestHeader("Content-Type", this.contentType), this.req.onreadystatechange = this.onReadyStateChangeHandler.bind(this)) : this.callbacks.hasOwnProperty("error") && this.callbacks.error(this, "Error creating XHR! ajax not supported?"))
        } catch (u) {}
        return this
    };
    AjaxRequest.prototype.send = function() {
        return this.crossDomain ? this.sendCrossDomain() : this.sendSameDomain()
    }, AjaxRequest.prototype.sendSameDomain = function() {
        try {
            this.req.send(this.data)
        } catch (e) {
            "function" == typeof this.callbacks.error && this.callbacks.error(this, "Exception on send")
        }
    }, AjaxRequest.prototype.sendCrossDomain = function() {
        try {
            var n = document.createElement("script"),
                i = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            n.async = "async", n.src = this.url, n.onload = n.onreadystatechange = function(e, t) {
                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = undefined, t || "function" != typeof this.callbacks.success || this.callbacks.success(this))
            }.bind(this), i.insertBefore(n, i.firstChild)
        } catch (e) {
            "function" == typeof this.callbacks.error && this.callbacks.error(this, "Exception on send")
        }
    }, AjaxRequest.prototype.getXHR = function() {
        return this.req
    }, AjaxRequest.prototype.onReadyStateChangeHandler = function() {
        if (4 === this.req.readyState)
            if (this.req.error && this.callbacks.hasOwnProperty("error")) this.callbacks.error(this, this.req.error);
            else if (0 === this.req.status && this.callbacks.hasOwnProperty("error")) this.callbacks.error(this, "0: Interrupted");
        else if (404 === this.req.status && this.callbacks.hasOwnProperty("error")) this.callbacks.error(this, "404: Not Found");
        else if (200 === this.req.status && this.callbacks.hasOwnProperty("success")) {
            if (this.req.response === undefined) try {
                this.req.response = this.req.responseText
            } catch (e) {}
            this.callbacks.success(this)
        }
    }, AjaxRequest.prototype.createXHR = function() {
        return this.standardXHR() || this.activeXHR()
    }, AjaxRequest.prototype.standardXHR = function() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
    }, AjaxRequest.prototype.activeXHR = function() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    };
    var CryptoJS = CryptoJS || function(s, e) {
            var t = {},
                n = t.lib = {},
                i = function() {},
                o = n.Base = {
                    extend: function(e) {
                        i.prototype = this;
                        var t = new i;
                        return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }), (t.init.prototype = t).$super = this, t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments), e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                },
                c = n.WordArray = o.extend({
                    init: function(e, t) {
                        e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
                    },
                    toString: function(e) {
                        return (e || r).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            i = this.sigBytes;
                        if (e = e.sigBytes, this.clamp(), i % 4)
                            for (var o = 0; o < e; o++) t[i + o >>> 2] |= (n[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (i + o) % 4 * 8;
                        else if (65535 < n.length)
                            for (o = 0; o < e; o += 4) t[i + o >>> 2] = n[o >>> 2];
                        else t.push.apply(t, n);
                        return this.sigBytes += e, this
                    },
                    clamp: function() {
                        var e = this.words,
                            t = this.sigBytes;
                        e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = s.ceil(t / 4)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(e) {
                        for (var t = [], n = 0; n < e; n += 4) t.push(4294967296 * s.random() | 0);
                        return new c.init(t, e)
                    }
                }),
                a = t.enc = {},
                r = a.Hex = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var n = [], i = 0; i < e; i++) {
                            var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                            n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16))
                        }
                        return n.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new c.init(n, t / 2)
                    }
                },
                l = a.Latin1 = {
                    stringify: function(e) {
                        var t = e.words;
                        e = e.sigBytes;
                        for (var n = [], i = 0; i < e; i++) n.push(String.fromCharCode(t[i >>> 2] >>> 24 - i % 4 * 8 & 255));
                        return n.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new c.init(n, t)
                    }
                },
                u = a.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(l.stringify(e)))
                        } catch (t) {
                            throw Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return l.parse(unescape(encodeURIComponent(e)))
                    }
                },
                d = n.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new c.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(e) {
                        var t = this._data,
                            n = t.words,
                            i = t.sigBytes,
                            o = this.blockSize,
                            a = i / (4 * o);
                        if (e = (a = e ? s.ceil(a) : s.max((0 | a) - this._minBufferSize, 0)) * o, i = s.min(4 * e, i), e) {
                            for (var r = 0; r < e; r += o) this._doProcessBlock(n, r);
                            r = n.splice(0, e), t.sigBytes -= i
                        }
                        return new c.init(r, i)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                });
            n.Hasher = d.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset()
                },
                reset: function() {
                    d.reset.call(this), this._doReset()
                },
                update: function(e) {
                    return this._append(e), this._process(), this
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function(n) {
                    return function(e, t) {
                        return new n.init(t).finalize(e)
                    }
                },
                _createHmacHelper: function(n) {
                    return function(e, t) {
                        return new f.HMAC.init(n, t).finalize(e)
                    }
                }
            });
            var f = t.algo = {};
            return t
        }(Math),
        We, Ye, Ze, $e, Xe, Nf, Pf, tg, Bg, Dg;
    We = CryptoJS, Ye = (Xe = We.lib).WordArray, Ze = Xe.Hasher, $e = [], Xe = We.algo.SHA1 = Ze.extend({
        _doReset: function() {
            this._hash = new Ye.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(e, t) {
            for (var n = this._hash.words, i = n[0], o = n[1], a = n[2], r = n[3], s = n[4], c = 0; c < 80; c++) {
                if (c < 16) $e[c] = 0 | e[t + c];
                else {
                    var l = $e[c - 3] ^ $e[c - 8] ^ $e[c - 14] ^ $e[c - 16];
                    $e[c] = l << 1 | l >>> 31
                }
                l = (i << 5 | i >>> 27) + s + $e[c], l = c < 20 ? l + (1518500249 + (o & a | ~o & r)) : c < 40 ? l + (1859775393 + (o ^ a ^ r)) : c < 60 ? l + ((o & a | o & r | a & r) - 1894007588) : l + ((o ^ a ^ r) - 899497514), s = r, r = a, a = o << 30 | o >>> 2, o = i, i = l
            }
            n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + a | 0, n[3] = n[3] + r | 0, n[4] = n[4] + s | 0
        },
        _doFinalize: function() {
            var e = this._data,
                t = e.words,
                n = 8 * this._nDataBytes,
                i = 8 * e.sigBytes;
            return t[i >>> 5] |= 128 << 24 - i % 32, t[14 + (i + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (i + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
        },
        clone: function() {
            var e = Ze.clone.call(this);
            return e._hash = this._hash.clone(), e
        }
    }), We.SHA1 = Ze._createHelper(Xe), We.HmacSHA1 = Ze._createHmacHelper(Xe), PFB_4732.chksum = function() {
        function d(e, t) {
            for (var n = 32, i = 0; 0 < n--;) e[0] += (e[1] << 4 ^ e[1] >> 5) + e[1] ^ i + t[3 & i], i += -1640531527, e[1] += (e[0] << 4 ^ e[0] >> 5) + e[0] ^ i + t[i >> 11 & 3]
        }

        function f(e) {
            for (var t = 0, n = 0; n < 4; n++) t |= e.charCodeAt(n) << 8 * n;
            return isNaN(t) ? 0 : t
        }
        return {
            init: function p(e, t) {
                var n, i, o, a = new Array(2),
                    r = new Array(8),
                    s = new Array(4),
                    c = 0,
                    l = 0,
                    u = e.split("").map(function(e) {
                        return e.charCodeAt(0)
                    });
                for (l = 0; l < 4; l++) s[l] = f(t.slice(4 * l, 4 * (l + 1)));
                for (l = 0; l < u.length; l += 8) n = u, i = l, (o = a)[0] = (255 & (0 | n[i])) << 24 | (255 & (0 | n[i + 1])) << 16 | (255 & (0 | n[i + 2])) << 8 | 255 & (0 | n[i + 3]) | 0, o[1] = (255 & (0 | n[i + 4])) << 24 | (255 & (0 | n[i + 5])) << 16 | (255 & (0 | n[i + 6])) << 8 | 255 & (0 | n[i + 7]) | 0, d(a, s), r[c] = a[0], r[c + 1] = a[1], c += 2;
                return r
            }
        }
    }(), PFB_4732.collectFraudToolAttributes = (Nf = {}, Pf = function() {
        "undefined" != typeof navigator.deviceMemory && (Nf.dm = navigator.deviceMemory);
        var e = screen.orientation || screen.msOrientation || screen.mozOrientation;
        void 0 !== e && (Nf.screenAngle = e.angle, Nf.screenType = e.type);
        var t = [];
        if ("undefined" != typeof navigator.mimeTypes && 0 < navigator.mimeTypes.length)
            for (var n = 0; n < navigator.mimeTypes.length; n++) t.push(navigator.mimeTypes[n].type);
        Nf.mime = t;
        try {
            "undefined" != typeof navigator.buildID && (Nf.buildID = navigator.buildID)
        } catch (d) {
            Nf.buildID = "err"
        }
        "undefined" != typeof window.length && (Nf.wl = window.length), "undefined" != typeof navigator.webdriver && (Nf.wd = navigator.webdriver), "undefined" == typeof navigator.mozPay && "undefined" == typeof navigator.mozContact && "undefined" == typeof navigator.mozGetUserMedia && "undefined" == typeof window.mozInnerScreenY && "undefined" == typeof screen.mozLockOrientation || (Nf.moz = !0);
        var i = window.RTCPeerConnection || window.mozRTCPeerConnection;
        void 0 !== i && (Nf.rtc = i.toString());
        try {
            null[0]()
        } catch (d) {
            Nf.err = d.message
        }
        var o = "";
        for (var a in window.screen) o += a;
        Nf.screenOrder = utils.common.hash(o).toFixed(2);
        for (var r = ["width", "height", "availWidth", "availHeight", "availTop", "availLeft", "colorDepth", "pixelDepth"], s = "", c = 0; c < r.length; c++) void 0 !== Object.getOwnPropertyDescriptor(screen, r[c]) && (s += "-" + c);
        Nf.screenOver = s;
        var l = ["platform", "vendor", "doNotTrack", "language", "onLine"],
            u = "";
        for (c = 0; c < l.length; c++) void 0 !== Object.getOwnPropertyDescriptor(navigator, l[c]) && (u += "-" + c);
        Nf.navOver = u
    }, function() {
        return Pf(), Nf
    }), PFB_4732.setNetworkDetails = function() {
        var e = ["type", "effectiveType", "rtt", "downlink", "downlinkMax"],
            t = {};
        if ("undefined" != typeof navigator.connection)
            for (var n = 0; n < e.length; n++) {
                var i = navigator.connection[e[n]];
                i && (t[e[n]] = String(i))
            }
        return t
    }, PFB_4732.pvc = function() {
        var n, e, t, i = 0;
        "undefined" != typeof document.hidden ? (e = "hidden", t = "visibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange");
        var o = function() {
                document[e] && (a(), i += 1, window.localStorage.setItem(constants.PVC, n + "&" + i))
            },
            a = function() {
                if (utils.configuration.get("localStorage")) {
                    var e = window.localStorage.getItem(constants.PVC);
                    if (null !== e) {
                        var t = e.split("&");
                        t[0] === n && (i = parseInt(t[1]))
                    }
                }
            };
        return {
            init: function() {
                n = utils.configuration.get("correlationId"), a(), document.addEventListener(t, o, !1)
            },
            get: function() {
                return i
            }
        }
    }(), PFB_4732.insertBeaconImage = (tg = function() {
        var e = utils.configuration.get("b");
        return void 0 !== e ? e : constants.BEACON_BASE_URL + "?p=" + utils.configuration.get("correlationId") + "&s=" + utils.configuration.get("appId")
    }, function() {
        var e = tg();
        try {
            var t = document.createElement("iframe");
            document.body.appendChild(t), t.src = "about:blank", t.title = "pbf", t.style.width = "0", t.style.height = "0", t.style.border = "0", t.style.position = "absolute", t.style.zIndex = "-999", t.style.top = "-10000px", t.style.left = "-10000px", t.setAttribute("aria-hidden", "true");
            var n = t.contentWindow.document;
            n.open()._m = function() {
                n.createElement("img").src = e
            }, utils.common.onEvent(t, "load", n._m)
        } catch (i) {
            utils.errorHandler(i)
        }
        n.close()
    }), PFB_4732.domTree = (Bg = "", Dg = function(e) {
        var t = "";
        t += "<";
        for (var n = e.children, i = n.length, o = 0; o < i; ++o) 1 === n[o].nodeType && (t = t + n[o].nodeName + " ", 0 < n[o].children.length && (t += Dg(n[o])));
        return t += ">"
    }, {
        walk: function() {
            Bg = Dg(document.body)
        },
        get: function() {
            return Bg
        }
    }), PFB_4732.insertImage = function(e, t) {
        var n = document.createElement("img"),
            i = e + "?f=" + utils.configuration.get("correlationId") + "&s=" + encodeURIComponent(utils.configuration.get("appId"));
        utils.configuration.get("fp") && (i += "&fp=" + encodeURIComponent(JSON.stringify(utils.configuration.get("fp")))), void 0 !== t && (i += "&d=" + encodeURIComponent(JSON.stringify(t))), n.src = i
    };
    var rndIntegerMin = 1,
        rndIntegerMax = 5,
        Rg, Pg, Qg, Sg, Tg, Vg, Xg, Yg, Zg, $g, _g, ah, bh, ch, dh, eh, fh, gh, hh, ih, jh, kh, si, ui, vi, wi, xi, yi, zi, Ai, Bi, Ci, Di, Ei, Ij, Jj, Lj, Mj, Nj, Oj, xl, yl, zl, ll, ml, nl, ol, pl, ql, rl, sl, tl, ul, vl, wl, Cl, El, Fl, Gl, Zl, _l, jm, km, mm, nm, om, pm, qm, xm, ym, zm, Am, Lm, Mm, Nm;
    PFB_4732.p1 = (Pg = {}, Qg = "", Sg = "", Tg = [], Vg = function() {
        var e = utils.configuration.get("trt");
        return (Pg.trt = e) && (Pg.connectionData = PFB_4732.setNetworkDetails()), Xg(), Yg(), Zg(), $g(), _g(), ah(), bh(), ch(), dh(), fh(), Pg.pt1.ph1 = kh(), Pg.achk = eh(), Pg.pt1.sf = gh(), Pg.pt1.tb = hh(), Pg
    }, Xg = function() {
        var e, t, n, i = ["appName", "appVersion", "buildID", "cookieEnabled", "language", "onLine", "oscpu", "platform", "product", "productSub", "userAgent", "vendor", "vendorSub"];
        for (Pg.navigator = {}, e = 0; e < i.length; e += 1)
            if (Pg.navigator[i[e]] = window.navigator[i[e]], "userAgent" === i[e]) {
                ih(window.navigator[i[e]]), t = rndIntegerMin, n = rndIntegerMax, Rg = Math.floor(Math.random() * (n - t + 1)) + t;
                for (var o = window.navigator[i[e]], a = "", r = o.substring(0, o.length <= 100 ? o.length : 100), s = 0; s <= r.length / Rg; s++) a += r.substring(Rg * s - 1, Rg * s);
                jh("ua", a)
            }
        "undefined" == typeof window.navigator.language && (Pg.navigator.language = window.navigator.browserLanguage)
    }, Yg = function() {
        var e, t = ["colorDepth", "pixelDepth", "height", "width", "availHeight", "availWidth"];
        for (Pg.screen = {}, e = 0; e < t.length; e += 1) Pg.screen[t[e]] = window.screen[t[e]], "colorDepth" !== t[e] && "width" !== t[e] || (ih(window.screen[t[e]]), jh(t[e], window.screen[t[e]]))
    }, Zg = function() {
        var e, t = ["outerHeight", "outerWidth", "innerHeight", "innerWidth", "devicePixelRatio"];
        for (Pg.window = {}, e = 0; e < t.length; e += 1) Pg.window[t[e]] = window[t[e]]
    }, $g = function() {
        Pg.referer = utils.configuration.get("referer"), Pg.URL = utils.configuration.get("url")
    }, _g = function() {
        Pg.rvr = constants.FN_RELEASE_VERSION
    }, ah = function() {
        Pg.activeXDefined = "undefined" != typeof window.ActiveXObject
    }, bh = function() {
        var e, t = "undefined",
            n = "Shockwave Flash",
            i = "ShockwaveFlash.ShockwaveFlash",
            o = "application/x-shockwave-flash",
            a = [0, 0, 0];
        if (typeof navigator.plugins !== t && "object" == typeof navigator.plugins[n]) try {
            !(e = navigator.plugins[n].description) || typeof navigator.mimeTypes !== t && navigator.mimeTypes[o] && !navigator.mimeTypes[o].enabledPlugin || (e = e.replace(/^[\w\W]*\s+(\S+\s+\S+$)/, "$1"), a[0] = parseInt(e.replace(/^([\w\W]*)\.[\w\W]*$/, "$1"), 10), a[1] = parseInt(e.replace(/^[\w\W]*\.([\w\W]*)\s[\w\W]*$/, "$1"), 10), a[2] = /[a-zA-Z]/.test(e) ? parseInt(e.replace(/^[\w\W]*[a-zA-Z]+([\w\W]*)$/, "$1"), 10) : 0)
        } catch (s) {} else if (typeof window.ActiveXObject !== t) try {
            var r = new window.ActiveXObject(i);
            r && (e = r.GetVariable("$version")) && (e = e.split(" ")[1].split(","), a[0] = parseInt(e[0], 10), a[1] = parseInt(e[1], 10), a[2] = parseInt(e[2], 10))
        } catch (s) {}
        Pg.flashVersion = {
            major: a[0],
            minor: a[1],
            release: a[2]
        }
    }, ch = function() {
        Pg.fp = utils.configuration.get("fp")
    }, dh = function() {
        Pg.tz = -6e4 * (new Date).getTimezoneOffset(), Pg.tzName = utils.common.jstz.determine().name(), ih(Pg.tzName), jh("tz", Pg.tz), Pg.dst = !0
    }, eh = function() {
        var e = {};
        return e.tts = (new Date).getTime(), Sg = Sg + utils.configuration.get("appId") + utils.configuration.get("correlationId"), Tg.push("appId", "correlationId", Rg.toString()), e.ts = e.tts, e.eteid = PFB_4732.chksum.init(Sg, e.tts.toString()), e.tts = (new Date).getTime() - e.tts, e.o = Tg, e
    }, fh = function() {
        var e = Date.now();
        ih(e), jh("time", e), Pg.time = e, Pg.pt1 = {
            i: (utils.timing.iframeLoadEnd - utils.timing.iframeLoadStart).toFixed(2),
            pp1: (e - utils.timing.fraudnetStart).toFixed(2),
            cd1: (e - utils.timing.p1Start).toFixed(2)
        }
    }, gh = function() {
        var t = [0, 0, 0, 0],
            n = 0,
            i = 1,
            o = 2,
            a = 3,
            r = 4,
            s = 5,
            c = 6;
        return function() {
                try {
                    if (-1 < function(e, t) {
                            var n = e.length,
                                i = t.length;
                            e: for (var o = 0; o <= n - i; o++) {
                                for (var a = 0; a < i; a++)
                                    if (t.charAt(a) !== e.charAt(o + a)) continue e;
                                return o
                            }
                            return -1
                        }(window.navigator.userAgent.toLowerCase(), decodeURIComponent("%70%68%61%6E%74%6F%6D%6A%73"))) return t[0] = i;
                    t[0] = n
                } catch (e) {
                    t[0] = n
                }
            }(),
            function() {
                try {
                    if (window.callPhantom || window._phantom || window.phantom) return (t = t.concat(o))[1] = o;
                    if (window.Buffer) return t[1] = a;
                    if (window.emit) return t[1] = r;
                    if (window.spawn) return t[1] = s;
                    if (window.doAutomation || window.domAutomationController) return t[1] = c;
                    t[1] = n
                } catch (e) {
                    t[1] = n
                }
            }(),
            function() {
                try {
                    if (0 === window.outerWidth && 0 === window.outerHeight) return t[2] = i;
                    t[2] = n
                } catch (e) {
                    t[2] = n
                }
            }(),
            function() {
                try {
                    if (window.document.$cdc_asdjflasutopfhvcZLmcfl_.cache_) return t[3] = i
                } catch (e) {}
                try {
                    if (window.document.documentElement.getAttribute(decodeURIComponent("%77%65%62%64%72%69%76%65%72"))) return t[3] = i
                } catch (e) {}
                try {
                    if (decodeURIComponent("%5F%53%65%6C%65%6E%69%75%6D%5F%49%44%45%5F%52%65%63%6F%72%64%65%72") in window) return t[3] = i
                } catch (e) {}
                try {
                    if (decodeURIComponent("%5F%5F%77%65%62%64%72%69%76%65%72%5F%73%63%72%69%70%74%5F%66%6E") in document) return t[3] = i
                } catch (e) {}
                t[3] = n
            }(), t.join("")
    }, hh = function() {
        try {
            if (window.opr && window.opr.addons || window.opera) return 2;
            if ("undefined" != typeof InstallTrigger) return "undefined" != typeof window.orientation ? 10 : 3;
            if ("undefined" != typeof document.documentMode) return 5;
            if ("undefined" != typeof window.StyleMedia) return 6;
            if (window.chrome) {
                if (!window.location.fragmentDirective && window.clientInformation.plugins && 0 < window.clientInformation.plugins.length && 0 <= window.clientInformation.plugins[0].name.indexOf("Edge")) return 11;
                if (window.location.fragmentDirective && window.clientInformation.plugins && 0 < window.clientInformation.plugins.length && 0 <= window.clientInformation.plugins[0].name.indexOf("Chrome")) return 1;
                if ("undefined" != typeof window.orientation) return 7
            }
            return "undefined" != typeof window.__firefox__ ? 10 : "undefined" != typeof window.__gCrWeb || "undefined" != typeof window.__crWeb || "undefined" != typeof window.FormControlElement ? 7 : "undefined" != typeof document && "undefined" != typeof document.onwebkitmouseforcechanged || "undefined" != typeof window.webkitNotifications || 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ? "undefined" != typeof navigator.standalone && "undefined" != typeof window.orientation ? navigator.mediaDevices || window.statusbar && window.statusbar.visible || window.indexedDB && "undefined" != typeof window.indexedDB.deleteDatabase && "undefined" != typeof window.Animation ? window.webkit && "undefined" != typeof window.webkit.messageHandlers ? 9 : 8 : 9 : 4 : -1
        } catch (e) {
            return utils.errorHandler(e), -1
        }
    }, ih = function(e) {
        Qg += e
    }, jh = function(e, t) {
        Sg += t, Tg.push(e)
    }, kh = function() {
        return utils.common.hash(Qg).toFixed(2)
    }, {
        triggerP1: function() {
            try {
                utils.timing.p1Start = Date.now();
                var e = Vg();
                new AjaxRequest({
                    type: "POST",
                    contentType: "application/json",
                    url: constants.POST1_ENDPOINT,
                    data: JSON.stringify({
                        appId: utils.configuration.get("appId"),
                        correlationId: utils.configuration.get("correlationId"),
                        payload: e
                    }),
                    success: function() {
                        window.parent.postMessage(JSON.stringify({
                            p1Sent: !0
                        }), "*")
                    },
                    error: function(e, t) {
                        utils.errorHandler(t)
                    }
                }).send()
            } catch (t) {
                utils.errorHandler(t)
            }
        },
        collectP1: Vg
    }), PFB_4732.triggerP2 = (si = {}, ui = function() {
        return utils.timing.cd2Start = Date.now(), si.data = {}, wi(), xi(), vi(), yi(), zi(), Ci(), Ai(), Bi(), utils.configuration.get("trt"), Di(), si
    }, vi = function() {
        si.sc = {}, si.sc[constants.SC_LOCAL_STORAGE] = null, si.sc.httpCookie = utils.configuration.get("sc"), utils.configuration.get("localStorage") && (si.sc[constants.SC_LOCAL_STORAGE] = window.localStorage.getItem(constants.SC_LOCAL_STORAGE))
    }, wi = function() {
        var e, t = [],
            n = {},
            i = {
                pdf: ["AcroPDF.PDF", "AcroPDF.PDF.1", "PDF.PdfCtrl", "PDF.PdfCtrl.5", "PDF.PdfCtrl.1"],
                flash: ["ShockwaveFlash.ShockwaveFlash"],
                realplayer: ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"],
                shockwave: ["SWCtl.SWCtl"],
                wmplayer: ["WMPlayer.OCX"]
            },
            o = function(e) {
                var t, n, i = [];
                for (t = 0; t < e.length; t += 1) n = {
                    t: e.item(t).type,
                    s: e.item(t).suffixes
                }, i.push(n);
                return i
            },
            c = function(e, t) {
                var n;
                try {
                    "flash" === t ? n = (n = e.GetVariable("$version")).split(" ")[1].replace(/,/g, ".") : "realplayer" === t ? n = e.getVersionInfo() : "wmplayer" === t ? n = e.versionInfo : "pdf" === t ? n = e.GetVersions().split(",")[0].split("=")[1] : "shockwave" === t && (n = e.ShockwaveVersion(""))
                } catch (i) {}
                return n
            },
            a = function(e, t) {
                var n, i, o, a, r;
                for (n = 0; n < e.length; n += 1) try {
                    if (i = new window.ActiveXObject(e[n])) {
                        r = utils.timing.iePlugin.length, utils.timing.iePlugin[r] = {}, utils.timing.iePlugin[r].name = t, utils.timing.iePlugin[r].start = Date.now(), a = c(i, t), o = {
                            n: t,
                            fn: e[n],
                            v: a
                        };
                        break
                    }
                    utils.timing.iePlugin[n].end = Date.now()
                } catch (s) {}
                return o
            },
            r = Date.now();
        if ("undefined" != typeof navigator.plugins && 0 < navigator.plugins.length)
            for (e = 0; e < navigator.plugins.length; e += 1) n = {
                mT: o(navigator.plugins[e]),
                n: navigator.plugins[e].name,
                v: navigator.plugins[e].version,
                fn: navigator.plugins[e].filename,
                d: navigator.plugins[e].description
            }, t.push(n);
        else if ("undefined" != typeof window.ActiveXObject) {
            for (e in utils.timing.iePlugin = [], i) i.hasOwnProperty(e) && (n = a(i[e], e)) && t.push(n);
            navigator.javaEnabled() && t.push({
                n: "Java",
                fn: "Java"
            })
        }
        t.sort(function(e, t) {
            var n = e.n.toLowerCase(),
                i = t.n.toLowerCase();
            return n < i ? -1 : i < n ? 1 : 0
        }), utils.timing.pluginsTiming = (Date.now() - r).toFixed(2), si.data.plugins = t
    }, xi = function() {
        si.data.cv = function() {
            var e = {};
            try {
                var t = document.createElement("canvas"),
                    n = t.getContext && t.getContext("2d");
                n ? (e.h = function(e, t) {
                    utils.timing.cvStart = Date.now();
                    try {
                        e.width = 200, e.height = 200, e.style.display = "inline", t.fillStyle = "#f60", t.fillRect(95, 1, 75, 20);
                        var n = "PayPal.com, <!@#$%>";
                        t.textBaseline = "alphabetic", t.font = "16px 'Arial'", t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17);
                        var i = [{
                            fillStyle: "rgb(0, 255, 255)",
                            arc: [100, 50, 50, 0, 2 * Math.PI, !0]
                        }, {
                            fillStyle: "rgb(255, 0, 255)",
                            arc: [50, 50, 50, 0, 2 * Math.PI, !0]
                        }, {
                            fillStyle: "rgb(255,255,0)",
                            arc: [75, 100, 50, 0, 2 * Math.PI, !0]
                        }];
                        t.globalCompositeOperation = "multiply", i.forEach(function(e) {
                            t.fillStyle = e.fillStyle, t.beginPath(), t.arc.apply(t, e.arc), t.closePath(), t.fill()
                        });
                        var o = e.toDataURL();
                        return o = o.slice(-50), utils.timing.cvEnd = Date.now(), o
                    } catch (a) {
                        return utils.timing.cvEnd = Date.now(), "-1"
                    }
                }(t, n), e.f = 1, e.t = (utils.timing.cvEnd - utils.timing.cvStart).toFixed(2)) : (e.h = "-1", e.f = 0, e.t = 0)
            } catch (i) {
                e.h = "-1", e.f = 1, e.t = 0
            }
            return e
        }()
    }, yi = function() {
        var e = utils.configuration.get("parentData");
        si.data.dom = e && e.dom
    }, zi = function() {
        si.data.vm = PFB_4732.collectVMAttributes()
    }, Ai = function() {
        si.data.fts = PFB_4732.collectFraudToolAttributes()
    }, Bi = function() {
        si.fp = utils.configuration.get("fp")
    }, Ci = function() {
        utils.configuration.get("localStorage") && (si.pvc = PFB_4732.pvc.get())
    }, Di = function() {
        var e = Date.now();
        si.pt2 = {
            cd2: (e - utils.timing.p2Start).toFixed(2),
            cp: utils.timing.pluginsTiming
        }
    }, Ei = function(e) {
        utils.configuration.get("localStorage") && window.localStorage.setItem(constants.SC_LOCAL_STORAGE, e)
    }, function() {
        try {
            utils.timing.p2Start = Date.now();
            var e = ui();
            new AjaxRequest({
                type: "POST",
                contentType: "application/json",
                url: constants.POST2_ENDPOINT,
                data: JSON.stringify({
                    appId: utils.configuration.get("appId"),
                    correlationId: utils.configuration.get("correlationId"),
                    payload: e
                }),
                success: function(e) {
                    if (e && e.req && e.req.response) {
                        var t = e.req.response;
                        "undefined" != typeof JSON.parse(t).sc && Ei(JSON.parse(t).sc), window.parent.postMessage(JSON.stringify({
                            p2Sent: !0
                        }), "*")
                    }
                },
                error: function(e, t) {
                    utils.errorHandler(t)
                }
            }).send()
        } catch (t) {
            utils.errorHandler(t)
        }
    }), PFB_4732.initMs = (Ij = {
        prevX: 0,
        prevY: 0,
        counter: 0,
        moveCounter: 0,
        lastTime: 0,
        rDT: undefined,
        rDT_local: ""
    }, Jj = !1, Lj = function(e) {
        if ("undefined" == typeof e.pageX) utils.common.removeEvent(document, "mousemove", Lj);
        else {
            var t = Date.now();
            if (0 !== Ij.moveCounter && Nj(t, e), Mj(t, e), 20 <= Ij.counter || 50 <= Ij.moveCounter) {
                utils.common.removeEvent(document, "mousemove", Lj), Ij.rDT = Ij.rDT_local + utils.common.hash(Ij.rDT_local) + "," + Ij.moveCounter;
                var n = {
                    rDT: Ij.rDT
                };
                PFB_4732.insertImage(constants.W_ENDPOINT, n)
            }
        }
    }, Mj = function(e, t) {
        Ij.lastTime = e, Ij.prevX = t.pageX, Ij.prevY = t.pageY, Ij.moveCounter++
    }, Nj = function(e, t) {
        var n = e - Ij.lastTime,
            i = Math.abs(t.pageX - Ij.prevX),
            o = Math.abs(t.pageY - Ij.prevY);
        (1 < i || 1 < o) && Oj(n, t)
    }, Oj = function(e, t) {
        var n = Math.floor(10 * Math.random()) + 1,
            i = 5123 * n + t.pageX,
            o = 5123 * n + t.pageY,
            a = 5123 * n + e;
        Ij.rDT_local += i + "," + o + "," + a + ":", Ij.counter++
    }, function() {
        Jj || (utils.common.onEvent(document, "mousemove", Lj), Jj = !0)
    }), PFB_4732.initTs = function() {
        var o = !1,
            s = !1,
            a = 0,
            r = {},
            c = "",
            l = {},
            u = {
                8: "",
                9: "",
                13: "",
                16: "",
                17: "",
                18: "",
                37: "",
                38: "",
                39: "",
                40: "",
                46: "",
                224: "",
                91: "",
                93: "",
                219: "",
                220: "",
                "000": ""
            },
            d = {
                17: "",
                224: "",
                91: "",
                93: ""
            },
            f = function(e) {
                var i = new y,
                    t = function(e) {
                        var t = e.target || e.srcElement,
                            n = t && t.id;
                        l.hasOwnProperty(n) && i.capture(e)
                    };
                a = e.length;
                for (var n = 0; n < a; n++) {
                    var o = e[n] || {};
                    l[o.id] = new v(o.id, o.min, document.body), r[o.id] = t
                }
                utils.common.onEvent(document.body, "keydown", t), utils.common.onEvent(document.body, "keyup", t), utils.common.onEvent(document.body, "paste", t)
            },
            p = function(e) {
                var t = document.getElementById(e.id);
                if (null != t) {
                    var n = new y(e.id, e.min, t),
                        i = function(e) {
                            n.capture(e)
                        };
                    r[e.id] = i, l[e.id] = n.fieldModel, utils.common.onEvent(t, "keydown", i), utils.common.onEvent(t, "keyup", i), utils.common.onEvent(t, "paste", i)
                }
            },
            m = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = l[e[t].id];
                    null != n && (n.pf_psu = i(n.fieldElement), n.pf_val = g(n.fieldElement), (n.pf_psu || n.pf_val) && h(n))
                }
            },
            i = function(e) {
                try {
                    var t = "#" + e.id + ":-webkit-autofill";
                    if (document.querySelector(t)) return !0
                } catch (n) {}
                return !1
            },
            g = function(e) {
                return !!e.value
            },
            h = function(e) {
                a--, s && 0 !== a || (utils.common.removeEvent(e.fieldElement, "keydown", r[e.id]), utils.common.removeEvent(e.fieldElement, "keyup", r[e.id]), utils.common.removeEvent(e.fieldElement, "paste", r[e.id])), s && (delete l[e.id], delete r[e.id]);
                var t = {
                    elid: e.id,
                    sid: utils.configuration.get("appId"),
                    tst: c,
                    wsps: !!e.wsps && e.wsps,
                    ts: "" === e.ts ? e.ts : e.ts + "Uh:" + utils.common.hash(e.ts),
                    pf: {
                        psu: e.pf_psu,
                        val: e.pf_val
                    }
                };
                PFB_4732.insertImage(constants.W_ENDPOINT, utils.common.wrapItemAsKey(t, "tsobj"))
            },
            y = function(e, t, n) {
                this.fieldModel = new v(e, t, n)
            };
        y.prototype.capture = function(e) {
            try {
                var t, n, i;
                if (s) {
                    var o = e.target || e.srcElement;
                    t = l[o.id]
                } else t = this.fieldModel;
                window.event ? n = e.keyCode : e.which && (n = e.which), void 0 === n && (n = "000");
                var a = Date.now();
                i = a - t.baseTime, t.baseTime = a, "keydown" === e.type ? n in u ? (t.ts += "Dk" + n + ":" + i, t.specialCount = t.specialCount + 1, n in d && (t.controlCount = t.controlCount + 1)) : (t.ts += "Di" + t.keyIndex + ":" + i, t.keyIndexArray[n] = t.keyIndex, t.keyIndex++) : "keyup" === e.type ? n in u ? (t.ts += "Uk" + n + ":" + i, n in d && (t.controlCount = t.controlCount + 1), "000" === n && (t.isReadyToSend = !0)) : t.keyIndexArray[n] !== undefined && (t.ts += "Ui" + t.keyIndexArray[n] + ":" + i) : "paste" === e.type && 0 === t.ts.length && (t.wsps = !0, t.isReadyToSend = !0), (t.keyIndex + t.specialCount >= t.min || 1 < t.controlCount && 0 < t.keyIndex || t.isReadyToSend) && h(t)
            } catch (r) {
                utils.errorHandler(r)
            }
        };
        var v = function(e, t, n) {
            this.id = e, this.min = t || 8, this.fieldElement = n, this.baseTime = Date.now(), this.isReadyToSend = !1, this.keyIndex = 0, this.controlCount = 0, this.specialCount = 0, this.keyIndexArray = [], this.ts = "", this.wsps = !1, this.pf_psu = !1, this.pf_val = !1
        };
        return function(e) {
            if (c = (e = e || {}).type, !1 === o && e.fields) {
                var t = e.fields;
                if (o = !0, s = utils.common.safelySetBoolean(e.delegate, !1)) f(t);
                else {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n] || {};
                        p(i)
                    }
                    0 < t.length && setTimeout(function() {
                        m(t)
                    }, 200)
                }
            }
        }
    }(), PFB_4732.initTouch = (ll = [], ml = [], nl = 0, ol = 0, pl = !1, ql = 0, rl = 0, sl = !1, tl = !1, ul = !1, vl = 0, wl = 0, Cl = function() {
        try {
            if (utils.common.removeEvent(document, "touchstart", El), utils.common.removeEvent(document, "touchend", El), utils.common.removeEvent(document, "touchmove", El), utils.common.removeEvent(window, "unload", Cl), xl && 1 == ul && clearTimeout(xl), ul = !1, 0 < ll.length && !tl) {
                var e = {
                    fields: {
                        td: ll
                    },
                    audit: tl = !0
                };
                yl.postMessage(JSON.stringify(e), zl)
            }
            ol = nl = 0, ll = []
        } catch (t) {
            utils.errorHandler(t)
        }
    }, El = function(e) {
        try {
            var t = Date.now().toString();
            if (ol < 5)
                if (nl < 400)
                    if (0 == ol && !1 === ul && (ul = !0, xl = setTimeout(function() {
                            ! function() {
                                try {
                                    !0 === pl && (rl = Date.now(), Fl()), Cl()
                                } catch (e) {
                                    utils.errorHandler(e)
                                }
                            }()
                        }, 5e3)), "touchstart" === e.type && !1 === pl) pl = !0, ql = t, e.changedTouches && 0 < e.changedTouches.length && Gl(e.changedTouches[0], e.changedTouches.length);
                    else if ("touchmove" === e.type && !0 === pl) {
                if (e.changedTouches && 0 < e.changedTouches.length) {
                    var n = e.changedTouches[0],
                        i = Math.abs(n.pageX - vl),
                        o = Math.abs(n.pageY - wl);
                    (1 < i || 1 < o) && (Gl(n, e.changedTouches.length), vl = n.pageX, wl = n.pageY)
                }
            } else "touchend" === e.type && !0 === pl && (rl = t, e.changedTouches && 0 < e.changedTouches.length && Gl(e.changedTouches[0], e.changedTouches.length), Fl());
            else rl = t, Fl(), Cl();
            else Cl()
        } catch (a) {
            utils.errorHandler(a)
        }
    }, Fl = function() {
        ll && ll.length < 5 && ll.push({
            et: rl,
            st: ql,
            te: ml
        }), pl = !(ml = []), ol++, wl = vl = ql = rl = 0
    }, Gl = function(e, t) {
        nl++;
        var n = {
            x: String(parseFloat(e.screenX.toFixed(7))),
            y: String(parseFloat(e.screenY.toFixed(7)))
        };
        0 < e.radiusX && (n.r = String(parseFloat(e.radiusX.toFixed(7)))), 0 < e.force && (n.f = String(parseFloat(e.force.toFixed(7)))), 1 < t && (n.tc = String(t)), ml.push(n)
    }, function(e, t) {
        !sl && event && ("ontouchstart" in window || navigator.msMaxTouchPoints || window.DocumentTouch || window.TouchEvent || navigator.maxTouchPoints) && (utils.common.onEvent(document, "touchstart", El), utils.common.onEvent(document, "touchend", El), utils.common.onEvent(document, "touchmove", El), utils.common.onEvent(window, "unload", Cl), sl = !0, yl = e, zl = t)
    }), PFB_4732.audit = (Zl = [], _l = function() {
        new AjaxRequest({
            type: "POST",
            contentType: "application/json",
            url: constants.AUDIT_ENDPOINT,
            data: JSON.stringify({
                correlationId: utils.configuration.get("correlationId"),
                appId: utils.configuration.get("appId"),
                payload: Zl
            }),
            success: function(e) {
                e && e.req && e.req.response
            },
            error: function(e, t) {
                utils.errorHandler(t)
            }
        }).send()
    }, {
        postAudit: _l,
        triggerTouchAudit: function(e, t) {
            PFB_4732.initTouch(e, t)
        },
        appendAuditPayload: function(e) {
            Zl.push(e), _l()
        }
    }), PFB_4732.collectVMAttributes = (jm = {}, km = window.performance || {}, mm = function() {
        utils.timing.coresStart = Date.now(), navigator.hardwareConcurrency && (jm.cores = navigator.hardwareConcurrency), utils.timing.coresTiming = (Date.now() - utils.timing.coresStart).toFixed(2)
    }, nm = function() {
        utils.timing.gpuStart = Date.now();
        try {
            var e = document.createElement("canvas");
            if (void 0 === e || "undefined" == typeof e.getContext) return;
            var t = e.getContext("webgl") || e.getContext("experimental-webgl");
            if (t) {
                if ("undefined" == typeof t.getExtension || "undefined" == typeof t.getParameter) return;
                var n = t.getExtension("WEBGL_debug_renderer_info");
                n && (jm.gpu = {}, jm.gpu.vendor = t.getParameter(n.UNMASKED_VENDOR_WEBGL), jm.gpu.renderer = t.getParameter(n.UNMASKED_RENDERER_WEBGL))
            }
        } catch (i) {
            utils.errorHandler(i)
        }
        utils.timing.gpuTiming = (Date.now() - utils.timing.gpuStart).toFixed(2)
    }, om = function() {
        utils.timing.jsMemStart = Date.now(), km.memory && window.chrome && window.chrome.webstore && (jm.jsMem = {
            usedJSHeapSize: km.memory.usedJSHeapSize,
            totalJSHeapSize: km.memory.totalJSHeapSize,
            jsHeapSizeLimit: km.memory.jsHeapSizeLimit
        }), utils.timing.jsMemTiming = (Date.now() - utils.timing.jsMemStart).toFixed(2)
    }, pm = function() {
        utils.timing.perfNavStart = Date.now(), km.timing && (jm.perfNav = km.timing), utils.timing.perfNavTiming = (Date.now() - utils.timing.perfNavStart).toFixed(2)
    }, qm = function() {
        jm.timing = {
            cores: utils.timing.coresTiming,
            gpu: utils.timing.gpuTiming,
            jsMem: utils.timing.jsMemTiming,
            perfNav: utils.timing.perfNavTiming,
            total: (Date.now() - utils.timing.vmStart).toFixed(2)
        }
    }, function() {
        return utils.timing.vmStart = Date.now(), mm(), nm(), om(), pm(), qm(), jm
    }), PFB_4732.insertCollectorIframe = (xm = function(e) {
        if ("undefined" != typeof e.origin && e.origin === constants.SERVICE_BASE_URL) {
            utils.configuration.get("trt") && PFB_4732.audit.triggerTouchAudit(e.source, e.origin);
            var t = JSON.parse(e.data);
            !0 === t.frameReady ? ym(e) : t && Am(t)
        }
    }, ym = function(e) {
        var t = document.referrer,
            n = document.URL;
        utils.configuration.set("referer", t), utils.configuration.set("url", n), utils.configuration.set("parentData", zm());
        var i = {
            ppfn: !0,
            configuration: utils.configuration.getAll(),
            timing: utils.timing
        };
        e.source.postMessage(JSON.stringify(i), e.origin)
    }, zm = function() {
        return {
            dom: PFB_4732.domTree.get()
        }
    }, Am = function(e) {
        e.p1Sent ? ("function" == typeof utils.common.callback1 && utils.common.callback1(), utils.configuration.get("cd") && utils.cacheHandler.setCacheForP1()) : e.p2Sent && ("function" == typeof utils.common.callback2 && utils.common.callback2(), utils.configuration.get("cd") && utils.cacheHandler.setCacheForP2())
    }, function() {
        var e = document.createElement("iframe");
        utils.timing.iframeLoadStart = Date.now(), e.title = "ppfniframe", e.style.width = "0", e.style.height = "0", e.style.border = "0", e.style.position = "absolute", e.style.zIndex = "-999", e.style.top = "-10000px", e.style.left = "-10000px", e.src = constants.LOAD_IFRAME_ENDPOINT + "?js_src=" + constants.JS_URL, e.setAttribute("aria-hidden", "true"), document.body.appendChild(e), utils.common.onEvent(window, "message", xm)
    }), PFB_4732.frameReady = (Lm = function(e) {
        try {
            if (null !== e.data && "" !== e.data) {
                var t = JSON.parse(e.data);
                t.configuration ? Mm(t) : t.audit && PFB_4732.audit.appendAuditPayload(t.fields)
            }
        } catch (n) {
            utils.errorHandler(n)
        }
    }, Mm = function(e) {
        utils.configuration.setAll(e.configuration), e.timing && (utils.timing.iframeLoadStart = e.timing && e.timing.iframeLoadStart, utils.timing.fraudnetStart = e.timing && e.timing.fraudnetStart), Nm()
    }, Nm = function() {
        PFB_4732.pvc.init(), PFB_4732.p1.triggerP1(), PFB_4732.triggerP2(), PFB_4732.insertImage(constants.POST3_ENDPOINT)
    }, function() {
        utils.timing.iframeLoadEnd = Date.now(), utils.common.onEvent(window, "message", Lm), window.parent.postMessage(JSON.stringify({
            ppfn: !0,
            frameReady: !0
        }), "*")
    }), init()
}();