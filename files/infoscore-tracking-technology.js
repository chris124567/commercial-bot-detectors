/* Retrieved from https://web.archive.org/web/20160309204403js_/http://cya2.net/js/stat/89946.js */
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

    // Copyright 2013 infoscore-tracking-technology.com GmbH - All Rights Reserved. 
    // v0.3 - build 142f
    (function() {
        var k = !0,
            l = null,
            n = !1,
            p = this;

        function r(c) {
            return "string" == typeof c
        };

        function s(c, a) {
            for (var e = 0, h = String(c).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(h.length, f.length), d = 0; 0 == e && d < g; d++) {
                var w = h[d] || "",
                    t = f[d] || "",
                    A = RegExp("(\\d*)(\\D*)", "g"),
                    N = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var m = A.exec(w) || ["", "", ""],
                        q = N.exec(t) || ["", "", ""];
                    if (0 == m[0].length && 0 == q[0].length) break;
                    e = ((0 == m[1].length ? 0 : parseInt(m[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == m[1].length ? 0 : parseInt(m[1], 10)) > (0 == q[1].length ?
                        0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == m[2].length) < (0 == q[2].length) ? -1 : (0 == m[2].length) > (0 == q[2].length) ? 1 : 0) || (m[2] < q[2] ? -1 : m[2] > q[2] ? 1 : 0)
                } while (0 == e)
            }
            return e
        };
        var u = Array.prototype,
            aa = u.indexOf ? function(c, a, e) {
                return u.indexOf.call(c, a, e)
            } : function(c, a, e) {
                e = e == l ? 0 : 0 > e ? Math.max(0, c.length + e) : e;
                if (r(c)) return !r(a) || 1 != a.length ? -1 : c.indexOf(a, e);
                for (; e < c.length; e++)
                    if (e in c && c[e] === a) return e;
                return -1
            },
            ba = u.map ? function(c, a, e) {
                return u.map.call(c, a, e)
            } : function(c, a, e) {
                for (var h = c.length, f = Array(h), g = r(c) ? c.split("") : c, d = 0; d < h; d++) d in g && (f[d] = a.call(e, g[d], d, c));
                return f
            };

        function ca() {};

        function v() {
            this.b = Array(4);
            this.k = Array(64);
            this.f = this.e = 0;
            this.reset()
        }(function() {
            function c() {}
            c.prototype = ca.prototype;
            v.B = ca.prototype;
            v.prototype = new c
        })();
        v.prototype.reset = function() {
            this.b[0] = 1732584193;
            this.b[1] = 4023233417;
            this.b[2] = 2562383102;
            this.b[3] = 271733878;
            this.f = this.e = 0
        };

        function x(c, a, e) {
            e || (e = 0);
            var h = Array(16);
            if (r(a))
                for (var f = 0; 16 > f; ++f) h[f] = a.charCodeAt(e++) | a.charCodeAt(e++) << 8 | a.charCodeAt(e++) << 16 | a.charCodeAt(e++) << 24;
            else
                for (f = 0; 16 > f; ++f) h[f] = a[e++] | a[e++] << 8 | a[e++] << 16 | a[e++] << 24;
            a = c.b[0];
            e = c.b[1];
            var f = c.b[2],
                g = c.b[3],
                d = 0,
                d = a + (g ^ e & (f ^ g)) + h[0] + 3614090360 & 4294967295;
            a = e + (d << 7 & 4294967295 | d >>> 25);
            d = g + (f ^ a & (e ^ f)) + h[1] + 3905402710 & 4294967295;
            g = a + (d << 12 & 4294967295 | d >>> 20);
            d = f + (e ^ g & (a ^ e)) + h[2] + 606105819 & 4294967295;
            f = g + (d << 17 & 4294967295 | d >>> 15);
            d = e + (a ^ f & (g ^ a)) +
                h[3] + 3250441966 & 4294967295;
            e = f + (d << 22 & 4294967295 | d >>> 10);
            d = a + (g ^ e & (f ^ g)) + h[4] + 4118548399 & 4294967295;
            a = e + (d << 7 & 4294967295 | d >>> 25);
            d = g + (f ^ a & (e ^ f)) + h[5] + 1200080426 & 4294967295;
            g = a + (d << 12 & 4294967295 | d >>> 20);
            d = f + (e ^ g & (a ^ e)) + h[6] + 2821735955 & 4294967295;
            f = g + (d << 17 & 4294967295 | d >>> 15);
            d = e + (a ^ f & (g ^ a)) + h[7] + 4249261313 & 4294967295;
            e = f + (d << 22 & 4294967295 | d >>> 10);
            d = a + (g ^ e & (f ^ g)) + h[8] + 1770035416 & 4294967295;
            a = e + (d << 7 & 4294967295 | d >>> 25);
            d = g + (f ^ a & (e ^ f)) + h[9] + 2336552879 & 4294967295;
            g = a + (d << 12 & 4294967295 | d >>> 20);
            d = f + (e ^ g &
                (a ^ e)) + h[10] + 4294925233 & 4294967295;
            f = g + (d << 17 & 4294967295 | d >>> 15);
            d = e + (a ^ f & (g ^ a)) + h[11] + 2304563134 & 4294967295;
            e = f + (d << 22 & 4294967295 | d >>> 10);
            d = a + (g ^ e & (f ^ g)) + h[12] + 1804603682 & 4294967295;
            a = e + (d << 7 & 4294967295 | d >>> 25);
            d = g + (f ^ a & (e ^ f)) + h[13] + 4254626195 & 4294967295;
            g = a + (d << 12 & 4294967295 | d >>> 20);
            d = f + (e ^ g & (a ^ e)) + h[14] + 2792965006 & 4294967295;
            f = g + (d << 17 & 4294967295 | d >>> 15);
            d = e + (a ^ f & (g ^ a)) + h[15] + 1236535329 & 4294967295;
            e = f + (d << 22 & 4294967295 | d >>> 10);
            d = a + (f ^ g & (e ^ f)) + h[1] + 4129170786 & 4294967295;
            a = e + (d << 5 & 4294967295 | d >>>
                27);
            d = g + (e ^ f & (a ^ e)) + h[6] + 3225465664 & 4294967295;
            g = a + (d << 9 & 4294967295 | d >>> 23);
            d = f + (a ^ e & (g ^ a)) + h[11] + 643717713 & 4294967295;
            f = g + (d << 14 & 4294967295 | d >>> 18);
            d = e + (g ^ a & (f ^ g)) + h[0] + 3921069994 & 4294967295;
            e = f + (d << 20 & 4294967295 | d >>> 12);
            d = a + (f ^ g & (e ^ f)) + h[5] + 3593408605 & 4294967295;
            a = e + (d << 5 & 4294967295 | d >>> 27);
            d = g + (e ^ f & (a ^ e)) + h[10] + 38016083 & 4294967295;
            g = a + (d << 9 & 4294967295 | d >>> 23);
            d = f + (a ^ e & (g ^ a)) + h[15] + 3634488961 & 4294967295;
            f = g + (d << 14 & 4294967295 | d >>> 18);
            d = e + (g ^ a & (f ^ g)) + h[4] + 3889429448 & 4294967295;
            e = f + (d << 20 & 4294967295 |
                d >>> 12);
            d = a + (f ^ g & (e ^ f)) + h[9] + 568446438 & 4294967295;
            a = e + (d << 5 & 4294967295 | d >>> 27);
            d = g + (e ^ f & (a ^ e)) + h[14] + 3275163606 & 4294967295;
            g = a + (d << 9 & 4294967295 | d >>> 23);
            d = f + (a ^ e & (g ^ a)) + h[3] + 4107603335 & 4294967295;
            f = g + (d << 14 & 4294967295 | d >>> 18);
            d = e + (g ^ a & (f ^ g)) + h[8] + 1163531501 & 4294967295;
            e = f + (d << 20 & 4294967295 | d >>> 12);
            d = a + (f ^ g & (e ^ f)) + h[13] + 2850285829 & 4294967295;
            a = e + (d << 5 & 4294967295 | d >>> 27);
            d = g + (e ^ f & (a ^ e)) + h[2] + 4243563512 & 4294967295;
            g = a + (d << 9 & 4294967295 | d >>> 23);
            d = f + (a ^ e & (g ^ a)) + h[7] + 1735328473 & 4294967295;
            f = g + (d << 14 & 4294967295 |
                d >>> 18);
            d = e + (g ^ a & (f ^ g)) + h[12] + 2368359562 & 4294967295;
            e = f + (d << 20 & 4294967295 | d >>> 12);
            d = a + (e ^ f ^ g) + h[5] + 4294588738 & 4294967295;
            a = e + (d << 4 & 4294967295 | d >>> 28);
            d = g + (a ^ e ^ f) + h[8] + 2272392833 & 4294967295;
            g = a + (d << 11 & 4294967295 | d >>> 21);
            d = f + (g ^ a ^ e) + h[11] + 1839030562 & 4294967295;
            f = g + (d << 16 & 4294967295 | d >>> 16);
            d = e + (f ^ g ^ a) + h[14] + 4259657740 & 4294967295;
            e = f + (d << 23 & 4294967295 | d >>> 9);
            d = a + (e ^ f ^ g) + h[1] + 2763975236 & 4294967295;
            a = e + (d << 4 & 4294967295 | d >>> 28);
            d = g + (a ^ e ^ f) + h[4] + 1272893353 & 4294967295;
            g = a + (d << 11 & 4294967295 | d >>> 21);
            d = f + (g ^
                a ^ e) + h[7] + 4139469664 & 4294967295;
            f = g + (d << 16 & 4294967295 | d >>> 16);
            d = e + (f ^ g ^ a) + h[10] + 3200236656 & 4294967295;
            e = f + (d << 23 & 4294967295 | d >>> 9);
            d = a + (e ^ f ^ g) + h[13] + 681279174 & 4294967295;
            a = e + (d << 4 & 4294967295 | d >>> 28);
            d = g + (a ^ e ^ f) + h[0] + 3936430074 & 4294967295;
            g = a + (d << 11 & 4294967295 | d >>> 21);
            d = f + (g ^ a ^ e) + h[3] + 3572445317 & 4294967295;
            f = g + (d << 16 & 4294967295 | d >>> 16);
            d = e + (f ^ g ^ a) + h[6] + 76029189 & 4294967295;
            e = f + (d << 23 & 4294967295 | d >>> 9);
            d = a + (e ^ f ^ g) + h[9] + 3654602809 & 4294967295;
            a = e + (d << 4 & 4294967295 | d >>> 28);
            d = g + (a ^ e ^ f) + h[12] + 3873151461 & 4294967295;
            g = a + (d << 11 & 4294967295 | d >>> 21);
            d = f + (g ^ a ^ e) + h[15] + 530742520 & 4294967295;
            f = g + (d << 16 & 4294967295 | d >>> 16);
            d = e + (f ^ g ^ a) + h[2] + 3299628645 & 4294967295;
            e = f + (d << 23 & 4294967295 | d >>> 9);
            d = a + (f ^ (e | ~g)) + h[0] + 4096336452 & 4294967295;
            a = e + (d << 6 & 4294967295 | d >>> 26);
            d = g + (e ^ (a | ~f)) + h[7] + 1126891415 & 4294967295;
            g = a + (d << 10 & 4294967295 | d >>> 22);
            d = f + (a ^ (g | ~e)) + h[14] + 2878612391 & 4294967295;
            f = g + (d << 15 & 4294967295 | d >>> 17);
            d = e + (g ^ (f | ~a)) + h[5] + 4237533241 & 4294967295;
            e = f + (d << 21 & 4294967295 | d >>> 11);
            d = a + (f ^ (e | ~g)) + h[12] + 1700485571 & 4294967295;
            a = e +
                (d << 6 & 4294967295 | d >>> 26);
            d = g + (e ^ (a | ~f)) + h[3] + 2399980690 & 4294967295;
            g = a + (d << 10 & 4294967295 | d >>> 22);
            d = f + (a ^ (g | ~e)) + h[10] + 4293915773 & 4294967295;
            f = g + (d << 15 & 4294967295 | d >>> 17);
            d = e + (g ^ (f | ~a)) + h[1] + 2240044497 & 4294967295;
            e = f + (d << 21 & 4294967295 | d >>> 11);
            d = a + (f ^ (e | ~g)) + h[8] + 1873313359 & 4294967295;
            a = e + (d << 6 & 4294967295 | d >>> 26);
            d = g + (e ^ (a | ~f)) + h[15] + 4264355552 & 4294967295;
            g = a + (d << 10 & 4294967295 | d >>> 22);
            d = f + (a ^ (g | ~e)) + h[6] + 2734768916 & 4294967295;
            f = g + (d << 15 & 4294967295 | d >>> 17);
            d = e + (g ^ (f | ~a)) + h[13] + 1309151649 & 4294967295;
            e = f + (d << 21 & 4294967295 | d >>> 11);
            d = a + (f ^ (e | ~g)) + h[4] + 4149444226 & 4294967295;
            a = e + (d << 6 & 4294967295 | d >>> 26);
            d = g + (e ^ (a | ~f)) + h[11] + 3174756917 & 4294967295;
            g = a + (d << 10 & 4294967295 | d >>> 22);
            d = f + (a ^ (g | ~e)) + h[2] + 718787259 & 4294967295;
            f = g + (d << 15 & 4294967295 | d >>> 17);
            d = e + (g ^ (f | ~a)) + h[9] + 3951481745 & 4294967295;
            c.b[0] = c.b[0] + a & 4294967295;
            c.b[1] = c.b[1] + (f + (d << 21 & 4294967295 | d >>> 11)) & 4294967295;
            c.b[2] = c.b[2] + f & 4294967295;
            c.b[3] = c.b[3] + g & 4294967295
        }
        v.prototype.update = function(c, a) {
            void 0 === a && (a = c.length);
            for (var e = a - 64, h = this.k, f = this.e, g = 0; g < a;) {
                if (0 == f)
                    for (; g <= e;) x(this, c, g), g += 64;
                if (r(c))
                    for (; g < a;) {
                        if (h[f++] = c.charCodeAt(g++), 64 == f) {
                            x(this, h);
                            f = 0;
                            break
                        }
                    } else
                        for (; g < a;)
                            if (h[f++] = c[g++], 64 == f) {
                                x(this, h);
                                f = 0;
                                break
                            }
            }
            this.e = f;
            this.f += a
        };

        function y(c) {
            var a = new v;
            a.update(c);
            c = da;
            var e = Array((56 > a.e ? 64 : 128) - a.e);
            e[0] = 128;
            for (var h = 1; h < e.length - 8; ++h) e[h] = 0;
            for (var f = 8 * a.f, h = e.length - 8; h < e.length; ++h) e[h] = f & 255, f /= 256;
            a.update(e);
            e = Array(16);
            for (h = f = 0; 4 > h; ++h)
                for (var g = 0; 32 > g; g += 8) e[f++] = a.b[h] >>> g & 255;
            return c(e)
        };

        function ea() {
            try {
                var c = document.createElement("canvas");
                if (c.getContext && c.getContext("2d")) {
                    var a = document.createElement("canvas");
                    a.id = "canvas-area";
                    a.width = "890";
                    a.height = "30";
                    a.style.display = "none";
                    document.getElementsByTagName("body")[0].appendChild(a);
                    var e = document.getElementById("canvas-area").getContext("2d");
                    e.font = "18pt Arial";
                    e.textBaseline = "top";
                    e.fillText("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", 2, 2);
                    var h, f = document.getElementById("canvas-area");
                    f.getContext("2d").getImageData(2,
                        2, 890, 30);
                    h = f.toDataURL().replace("data:image/png;base64,", "");
                    var g = y(h),
                        d = document.getElementById("canvas-area");
                    d.parentNode.removeChild(d);
                    return g
                }
                return ""
            } catch (w) {
                return ""
            }
        };

        function fa(c) {
            this.z = c
        }
        fa.prototype.isEnabled = function() {
            return navigator.cookieEnabled
        };
        var ga = new fa(document);
        ga.w = 3950;

        function z(c) {
            document.body.addBehavior && document.body.addBehavior("#default#clientCaps");
            return document.body.getComponentVersion("{" + c + "}", "ComponentID")
        }

        function B(c) {
            var a = l;
            try {
                a = new ActiveXObject(c)
            } catch (e) {
                a = l
            }
            return a
        }

        function ha() {
            return parseInt(eval("0/*@cc_on+ScriptEngineMajorVersion()@*/"), 10)
        };

        function C(c) {
            return c.replace(/,/g, ".")
        }

        function D(c) {
            return c.replace(/[\.0]+$/g, "")
        }

        function ia() {
            function c(a, h, f, g, d) {
                if (d < g) return -1;
                if (g == d) return g;
                h[f] = Math.ceil(g + (d - g) / 2);
                return a.IsVersionSupported(h.join(".")) ? c(a, h, f, h[f], d) : c(a, h, f, g, h[f] - 1)
            }
            var a = function() {
                var a;
                try {
                    var h = B("AgControl.AgControl");
                    if (!a) {
                        var f = [0, 0, 0, 0];
                        f[0] = c(h, f, 0, 0, 100);
                        f[1] = c(h, f, 1, 0, 100);
                        f[2] = c(h, f, 2, 0, 1E5);
                        f[3] = c(h, f, 3, 0, 100);
                        a = f.join(".")
                    }
                } catch (g) {}
                a || (a = "");
                return a
            }();
            return D(a)
        };

        function da(c) {
            return ba(c, function(a) {
                a = a.toString(16);
                return 1 < a.length ? a : "0" + a
            }).join("")
        };
        var E, F, G, H;

        function ja() {
            return p.navigator ? p.navigator.userAgent : l
        }
        H = G = F = E = n;
        var I;
        if (I = ja()) {
            var ka = p.navigator;
            E = 0 == I.indexOf("Opera");
            F = !E && -1 != I.indexOf("MSIE");
            G = !E && -1 != I.indexOf("WebKit");
            H = !E && !G && "Gecko" == ka.product
        }
        var J = F,
            K = H,
            la = G,
            ma = p.navigator,
            na = -1 != (ma && ma.platform || "").indexOf("Win");

        function oa() {
            var c = p.document;
            return c ? c.documentMode : void 0
        }
        var L;
        a: {
            var M = "",
                O;
            if (E && p.opera) var pa = p.opera.version,
                M = "function" == typeof pa ? pa() : pa;
            else if (K ? O = /rv\:([^\);]+)(\)|;)/ : J ? O = /MSIE\s+([^\);]+)(\)|;)/ : la && (O = /WebKit\/(\S+)/), O) var qa = O.exec(ja()),
                M = qa ? qa[1] : "";
            if (J) {
                var ra = oa();
                if (ra > parseFloat(M)) {
                    L = String(ra);
                    break a
                }
            }
            L = M
        }
        var P = {},
            sa = p.document,
            ta = !sa || !J ? void 0 : oa() || ("CSS1Compat" == sa.compatMode ? parseInt(L, 10) : 5);

        function Q() {
            return !!eval("/*@cc_on!@*/!1")
        };
        var R = n,
            S = "";

        function T(c) {
            c = c.match(/[\d]+/g);
            c.length = 3;
            return c.join(".")
        }
        if (navigator.plugins && navigator.plugins.length) {
            var ua = navigator.plugins["Shockwave Flash"];
            ua && (R = k, ua.description && (S = T(ua.description)));
            navigator.plugins["Shockwave Flash 2.0"] && (R = k, S = "2.0.0.11")
        } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
            var va = navigator.mimeTypes["application/x-shockwave-flash"];
            (R = va && va.enabledPlugin) && (S = T(va.enabledPlugin.description))
        } else try {
            var U = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                R = k,
                S = T(U.GetVariable("$version"))
        } catch (wa) {
            try {
                U = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                    R = k, S = "6.0.21"
            } catch (xa) {
                try {
                    U = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), R = k, S = T(U.GetVariable("$version"))
                } catch (ya) {}
            }
        }
        var za = S;
        (function() {
            var c = "";
            if (J) {
                var a = function(a) {
                    try {
                        return new ActiveXObject(a), k
                    } catch (c) {
                        return n
                    }
                };
                a("AcroPDF.PDF.1") ? c = "7" : a("PDF.PdfCtrl.6") && (c = "6")
            } else if (navigator.mimeTypes && 0 < navigator.mimeTypes.length && (a = navigator.mimeTypes["application/pdf"]) && a.enabledPlugin)(a = a.enabledPlugin.description) && -1 != a.indexOf("Adobe") && (c = -1 != a.indexOf("Version") ? a.split("Version")[1] : "7");
            na && s(c, "6")
        })();
        if (K || J) {
            var Aa;
            if (Aa = J) Aa = J && 9 <= ta;
            Aa || K && (P["1.9.1"] || (P["1.9.1"] = 0 <= s(L, "1.9.1")))
        }
        J && (P["9"] || (P["9"] = 0 <= s(L, "9")));

        function V(c) {
            var a = "";
            if (navigator.plugins)
                for (var e = 0; e < navigator.plugins.length; e++) {
                    var h = navigator.plugins[e].name;
                    if (h && -1 != h.indexOf(c)) {
                        a = navigator.plugins[e];
                        break
                    }
                    if ((h = navigator.plugins[e].description) && -1 != h.indexOf(c)) {
                        a = navigator.plugins[e];
                        break
                    }
                }
            return a
        }

        function Ba() {
            var c = "";
            if (Q()) {
                var c = "",
                    a = B("AcroPDF.PDF.1");
                if (a) try {
                    c = a.GetVersions().split(","), c = c[0].split("="), c = parseFloat(c[1]), c = c.toString()
                } catch (e) {
                    c = "7"
                } else
                    for (var h = 6; 1 >= h; h--) try {
                        if (a = B("PDF.PdfCtrl." + h)) {
                            c = h.toString();
                            break
                        }
                    } catch (f) {}
                return D(c)
            }
            if (c = W(V("Adobe PDF Plug-In"))) return c = X(c), Y(c);
            if (navigator.mimeTypes && 0 < navigator.mimeTypes.length && (a = navigator.mimeTypes["application/pdf"]) && a.enabledPlugin)(a = a.enabledPlugin.description) && -1 != a.indexOf("Adobe") && (c = -1 != a.indexOf("Version") ?
                a.split("Version")[1] : "7");
            c = c.replace(/^\s+|\s+$/g, "");
            c = X(c);
            return Y(c)
        }

        function Ca() {
            if (Q()) {
                var c = "",
                    a = l;
                if (a = B("SWCtl.SWCtl")) try {
                    c = a.ShockwaveVersion("").toString()
                } catch (e) {
                    c("1")
                }
                return D(c)
            }
            c = "";
            return (a = V("Shockwave for Director")) ? (c = W(a), Y(c)) : c
        }

        function Da() {
            var c = [],
                a;
            for (a in navigator.plugins) void 0 != navigator.plugins[a].name && ("item" != navigator.plugins[a].name && "namedItem" != navigator.plugins[a].name && "refresh" != navigator.plugins[a].name) && c.push(navigator.plugins[a].name);
            return c
        }

        function W(c) {
            var a = "";
            c.version && (a = c.version);
            !a && c.name && (a = X(c.name));
            !a && c.description && (a = X(c.description));
            return a
        }

        function X(c) {
            return (c = c.match(/[\d]+/g)) ? c.join(".") : ""
        }

        function Y(c) {
            return c.replace(/(\.[0]+)+$/g, "")
        };

        function Ea() {
            for (var c = [], a = 0; a < navigator.mimeTypes.length; a++) navigator.mimeTypes[a].type && c.push(navigator.mimeTypes[a].type);
            return c
        };

        function Fa(c) {
            this.j = c;
            this.A = function() {
                return "object" != typeof adl_object ? n : k
            };
            this.q = function(a) {
                return "undefined" == typeof adl_object[a] ? n : k
            };
            if (!this.q(this.j)) throw Error("invalid");
        }

        function Z(c, a) {
            var e = adl_object[c.j],
                h = "";
            "undefined" != typeof e[a] ? h = e[a] : "ac_dyn_CLUSTXT" == a && (h = Z(c, "ac_dyn_TYPE"));
            return h
        }

        function $(c) {
            "" == c && (c = "0");
            return c
        };

        function Ga(c) {
            this.c = c;
            this.d = ""
        }
        Ga.prototype.toString = function() {
            this.c.match(/\?/) && "?" != this.c.charAt(this.c.length - 1) ? this.c += this.d : this.c += "?" + this.d;
            this.c.match(/\?&/) && (this.c = this.c.replace("?&", "?"));
            this.c.match(/\??/) && (this.c = this.c.replace("??", "?"));
            this.c.match(/\=_/) && (this.c = this.c.replace("=_", "="));
            return this.c
        };
        (new function() {
            this.r = function(c) {
                return 3 != c.split("|").length ? n : k
            };
            this.h = function() {
                for (var c in adl_object)
                    if (this.r(c) && "undefined" == typeof adl_object[c].processed) return c;
                return ""
            };
            this.g = [];
            this.v = "tm tit pageid katu kattxt clid cltext order curr sum basket cusid sale_partner info mpre a adckie pc aa sfp flv qt sll rp jv obp wmp nm sx sy cd tmz bl url ref ai wduNT".split(" ");
            this.i = function(c) {
                return 0 <= aa(this.v, c)
            };
            this.m = function() {
                var c = tag,
                    a = new Ga(this.l(c)),
                    e = [],
                    h;
                for (h in this.g) this.i(h) ==
                    k && (e = this.g[h], e = encodeURIComponent(e), a.d += "&" + h + "=" + e);
                e = this.p(c);
                for (h in e) this.i(h) == k && (c = e[h], c = encodeURIComponent(c), a.d += "&" + h + "=" + c);
                return a.toString()
            };
            this.l = function(c) {
                return ("https:" == document.location.protocol ? "https://" : "http://") + "cya2.net/tracker/" + $(Z(c, "ac_mand_RID")) + "/" + $(Z(c, "ac_mand_CID")) + "/" + $(Z(c, "ac_mand_PID")) + "/" + $(Z(c, "ac_mand_SID")) + "/1/?"
            };
            this.p = function(c) {
                var a = [];
                a.tm = (new Date).getTime();
                a.tit = Z(c, "ac_mand_TIT");
                a.pageid = Z(c, "ac_dyn_PAGEID");
                a.katu = Z(c, "ac_dyn_KATPFAD");
                a.kattxt = Z(c, "ac_dyn_KATTXT");
                a.clid = Z(c, "ac_dyn_CLUSPFAD");
                a.cltext = Z(c, "ac_dyn_CLUSTXT");
                a.order = Z(c, "ac_dyn_ORDER");
                a.curr = Z(c, "ac_dyn_CURR");
                a.sum = Z(c, "ac_dyn_SUM");
                a.basket = Z(c, "ac_dyn_BASKET");
                a.cusid = Z(c, "ac_dyn_CUSID");
                a.sale_partner = Z(c, "ac_dyn_SALE_PARTNER");
                a.info = Z(c, "ac_dyn_INFO");
                a.mpre = Z(c, "ac_dyn_MPRE");
                return a
            };
            this.n = function() {
                var c = [];
                c.a = 1;
                c.adckie = +ga.isEnabled();
                c.pc = "number" == typeof navigator.plugins.length ? navigator.plugins.length : 0;
                c.aa = Ba();
                c.sfp = Ca();
                var a;
                version = za;
                a = Y(version);
                c.flv = a;
                if (Q()) {
                    var e = "";
                    if (7 > ha()) {
                        if (a = l, (a = B("QuickTime.QuickTime.1")) || (a = B("QuickTimeCheckObject.QuickTimeCheck")), a) try {
                            e = a.QuickTimeVersion.toString(16), e = e.split("").join("."), e = C(e), e = D(e)
                        } catch (h) {
                            e = "1"
                        }
                    } else {
                        a = [12, 99, 99, 99];
                        for (var f = [0, 0, 0, 0], g = [0, 0, 0, 0], d = [0, 0, 0, 0], w = document.createElement("span"), t = 0; t < a.length; ++t)
                            for (var A = a[t]; A >= f[t]; --A) {
                                d[t] = A;
                                e = d.join(",");
                                w.innerHTML = '<object width="1" height="1" style="display:none;" codebase="#version=' + e + '" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B"><param name="src" value="" /><param name="controller" value="false" /></object>';
                                var e = w.firstChild,
                                    N = 0,
                                    m = void 0;
                                try {
                                    e && (m = e.object)
                                } catch (q) {}
                                b = m;
                                "undefined" != typeof b && (N = b ? 1 : -1);
                                if (1 == N) {
                                    g[t] = A;
                                    break
                                }
                            }
                        e = g.join(",")
                    }
                    a = D(e);
                    a = X(a)
                } else a = "", (f = V("QuickTime")) && (a = W(f)), a = Y(a);
                c.qt = a;
                Q() ? a = ia() : (a = "", (f = V("Silverlight Plug-In")) && (a = W(f)), a = Y(a));
                c.sll = a;
                if (Q()) {
                    a = "";
                    f = l;
                    g = ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)"];
                    for (d = 0; d < g.length && !(f = B(g[d])); d++);
                    if (f) try {
                        a = f.GetVersionInfo().toString()
                    } catch (Ha) {
                        a = ""
                    }
                    a = D(a)
                } else {
                    a = "";
                    if (f = V("RealPlayer"))
                        if (a = W(f), !a || 2.32 == a) {
                            if (!window.chrome) {
                                f = document.createElement("object");
                                f.setAttribute("type", "audio/x-pn-realaudio-plugin");
                                f.setAttribute("id", "name");
                                f.setAttribute("src", "");
                                f.setAttribute("autostart", "false");
                                g = document.getElementsByTagName("body")[0];
                                g.appendChild(f);
                                try {
                                    f.GetVersionInfo && (a = f.GetVersionInfo())
                                } catch (Ia) {} finally {
                                    g.removeChild(f)
                                }
                            }
                            2.32 == a && (a = "1")
                        } a = Y(a)
                }
                c.rp = a;
                if (Q()) a = z("08B0E5C0-4FCB-11CF-AAA5-00401C608500"),
                    a = D(a), a || (a = 0, a = document.documentElement.firstChild, f = document.createElement("div"), f.id = "oClientCaps", f.addBehavior("#default#clientCaps"), a.appendChild(f), (a = oClientCaps.javaEnabled) && (a = 1)), a = String(a);
                else {
                    a = "";
                    f = /^application\/x-java-applet;jpi-version=(.*)$/;
                    g = l;
                    d = 0;
                    for (w = navigator.mimeTypes.length; d < w; d++) g = navigator.mimeTypes[d].type.match(f), g !== l && (a = g[1]);
                    a = Y(a)
                }
                c.jv = a;
                Q() ? (a = z("3AF36230-A269-11D1-B5BF-0000F8051515"), a = C(a), a = D(a)) : a = "";
                c.obp = a;
                Q() ? ((a = z("6BF52A52-394A-11d3-B153-00C04F79FAA6")) ||
                    (a = z("22D6F312-B0F6-11D0-94AB-0080C74C7E95")), a = C(a), a = D(a)) : a = "";
                c.wmp = a;
                Q() ? (a = z("44BBA842-CC51-11CF-AAFA-00AA00B6015B"), a = C(a), a = D(a)) : a = "";
                c.nm = a;
                c.sx = screen.width;
                c.sy = screen.height;
                a = 0;
                screen.pixelDepth && (a = screen.pixelDepth);
                0 == a && screen.colorDepth && (a = screen.colorDepth);
                c.cd = a;
                c.tmz = (new Date).getTimezoneOffset();
                a = "";
                navigator.language ? a = navigator.language : navigator.browserLanguage && (a = navigator.browserLanguage);
                c.bl = a;
                c.url = document.location;
                c.ref = document.referrer;
                c.ai = this.o();
                Q() ? (a =
                    z("89820200-ECBD-11CF-8B85-00AA005B4340"), a = C(a), a = D(a)) : a = "";
                c.wduNT = a;
                return c
            };
            this.o = function() {
                var c = {};
                if (window.ActiveXObject) return "";
                var a;
                a = Da().join();
                a = y(a);
                c.pl = a;
                a = Da().sort().join();
                a = y(a);
                c.pls = a;
                a = "";
                var e = Ea();
                0 < e.length && (a = y(e.join()));
                c.mt = a;
                a = "";
                e = Ea();
                0 < e.length && (a = e.sort().join(), a = y(a));
                c.mts = a;
                c.cv = ea();
                a = [];
                for (var h in c) a.push(h + "-" + c[h]);
                return a.join(";")
            };
            this.t = function(c) {
                var a = document.createElement("script");
                a.type = "text/javascript";
                a.async = k;
                a.src = c;
                (document.getElementsByTagName("head")[0] ||
                    document.getElementsByTagName("body")[0]).appendChild(a)
            };
            this.execute = function() {
                var c = l;
                this.g = this.n();
                for (c = this.h(); c;) this.s(c), c = this.h()
            };
            this.u = function(c) {
                var a = l;
                "undefined" != typeof adl_object[c] && (a = adl_object[c]) && (a.processed = k)
            };
            this.s = function(c) {
                var a = "";
                this.u(c);
                tag = new Fa(c);
                a = this.m();
                this.t(a)
            }
        }).execute();
    })();


}