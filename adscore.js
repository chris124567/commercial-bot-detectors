/* Retrieved from http://c.adsco.re/d (in <script> tag) */
window.AdscoreXiStart = function(token) {
    try {
        try {
            var a = new XMLHttpRequest
        } catch (b) {
            a = new ActiveXObject("Microsoft.XMLHTTP")
        }
        a.open("GET", document.location.origin + document.location.pathname, !0);
        a.onreadystatechange = function() {
            if (2 == a.readyState || 4 == a.readyState) window.postMessage('#' + token + "\r\n" + a.getAllResponseHeaders(), "*"), a.onreadystatechange = null
        };
        a.onerror = function() {
            window.postMessage(-2, "*")
        };
        a.send()
    } catch (b) {
        window.postMessage(-3, "*")
    }
};
"function" !== typeof AdscoreInit && (AdscoreInit = function(H, D) {
    function G(d) {
        function f(c, d) {
            var f = c & 2147483648;
            var e = d & 2147483648;
            var p = c & 1073741824;
            var h = d & 1073741824;
            var k = (c & 1073741823) + (d & 1073741823);
            return p & h ? k ^ 2147483648 ^ f ^ e : p | h ? k & 1073741824 ? k ^ 3221225472 ^ f ^ e : k ^ 1073741824 ^ f ^ e : k ^ f ^ e
        }

        function c(c, d, e, p, h, k, z) {
            c = f(c, f(f(d & e | ~d & p, h), z));
            return f(c << k | c >>> 32 - k, d)
        }

        function e(c, d, e, p, h, k, z) {
            c = f(c, f(f(d & p | e & ~p, h), z));
            return f(c << k | c >>> 32 - k, d)
        }

        function p(c, d, e, p, h, k, z) {
            c = f(c, f(f(d ^ e ^ p, h), z));
            return f(c <<
                k | c >>> 32 - k, d)
        }

        function h(c, d, e, p, h, k, z) {
            c = f(c, f(f(e ^ (d | ~p), h), z));
            return f(c << k | c >>> 32 - k, d)
        }

        function l(c) {
            var d = "",
                f;
            for (f = 0; 3 >= f; f++) {
                var e = c >>> 8 * f & 255;
                e = "0" + e.toString(16);
                d += e.substr(e.length - 2, 2)
            }
            return d
        }
        if ("undefined" === typeof d) return "undefined";
        d = d.toString();
        if ("" == d) return "";
        var u = [];
        d = function(c) {
            c = c.replace(/\r\n/g, "\n");
            for (var d = "", f = 0; f < c.length; f++) {
                var e = c.charCodeAt(f);
                128 > e ? d += String.fromCharCode(e) : (127 < e && 2048 > e ? d += String.fromCharCode(e >> 6 | 192) : (d += String.fromCharCode(e >> 12 | 224),
                    d += String.fromCharCode(e >> 6 & 63 | 128)), d += String.fromCharCode(e & 63 | 128))
            }
            return d
        }(d);
        u = function(c) {
            var d = c.length;
            var e = d + 8;
            for (var f = 16 * ((e - e % 64) / 64 + 1), p = Array(f - 1), h, k = 0; k < d;) e = (k - k % 4) / 4, h = k % 4 * 8, p[e] |= c.charCodeAt(k) << h, k++;
            p[(k - k % 4) / 4] |= 128 << k % 4 * 8;
            p[f - 2] = d << 3;
            p[f - 1] = d >>> 29;
            return p
        }(d);
        var m = 1732584193;
        var q = 4023233417;
        var k = 2562383102;
        var n = 271733878;
        for (d = 0; d < u.length; d += 16) {
            var v = m;
            var w = q;
            var y = k;
            var x = n;
            m = c(m, q, k, n, u[d + 0], 7, 3614090360);
            n = c(n, m, q, k, u[d + 1], 12, 3905402710);
            k = c(k, n, m, q, u[d + 2], 17,
                606105819);
            q = c(q, k, n, m, u[d + 3], 22, 3250441966);
            m = c(m, q, k, n, u[d + 4], 7, 4118548399);
            n = c(n, m, q, k, u[d + 5], 12, 1200080426);
            k = c(k, n, m, q, u[d + 6], 17, 2821735955);
            q = c(q, k, n, m, u[d + 7], 22, 4249261313);
            m = c(m, q, k, n, u[d + 8], 7, 1770035416);
            n = c(n, m, q, k, u[d + 9], 12, 2336552879);
            k = c(k, n, m, q, u[d + 10], 17, 4294925233);
            q = c(q, k, n, m, u[d + 11], 22, 2304563134);
            m = c(m, q, k, n, u[d + 12], 7, 1804603682);
            n = c(n, m, q, k, u[d + 13], 12, 4254626195);
            k = c(k, n, m, q, u[d + 14], 17, 2792965006);
            q = c(q, k, n, m, u[d + 15], 22, 1236535329);
            m = e(m, q, k, n, u[d + 1], 5, 4129170786);
            n = e(n, m, q, k,
                u[d + 6], 9, 3225465664);
            k = e(k, n, m, q, u[d + 11], 14, 643717713);
            q = e(q, k, n, m, u[d + 0], 20, 3921069994);
            m = e(m, q, k, n, u[d + 5], 5, 3593408605);
            n = e(n, m, q, k, u[d + 10], 9, 38016083);
            k = e(k, n, m, q, u[d + 15], 14, 3634488961);
            q = e(q, k, n, m, u[d + 4], 20, 3889429448);
            m = e(m, q, k, n, u[d + 9], 5, 568446438);
            n = e(n, m, q, k, u[d + 14], 9, 3275163606);
            k = e(k, n, m, q, u[d + 3], 14, 4107603335);
            q = e(q, k, n, m, u[d + 8], 20, 1163531501);
            m = e(m, q, k, n, u[d + 13], 5, 2850285829);
            n = e(n, m, q, k, u[d + 2], 9, 4243563512);
            k = e(k, n, m, q, u[d + 7], 14, 1735328473);
            q = e(q, k, n, m, u[d + 12], 20, 2368359562);
            m = p(m, q,
                k, n, u[d + 5], 4, 4294588738);
            n = p(n, m, q, k, u[d + 8], 11, 2272392833);
            k = p(k, n, m, q, u[d + 11], 16, 1839030562);
            q = p(q, k, n, m, u[d + 14], 23, 4259657740);
            m = p(m, q, k, n, u[d + 1], 4, 2763975236);
            n = p(n, m, q, k, u[d + 4], 11, 1272893353);
            k = p(k, n, m, q, u[d + 7], 16, 4139469664);
            q = p(q, k, n, m, u[d + 10], 23, 3200236656);
            m = p(m, q, k, n, u[d + 13], 4, 681279174);
            n = p(n, m, q, k, u[d + 0], 11, 3936430074);
            k = p(k, n, m, q, u[d + 3], 16, 3572445317);
            q = p(q, k, n, m, u[d + 6], 23, 76029189);
            m = p(m, q, k, n, u[d + 9], 4, 3654602809);
            n = p(n, m, q, k, u[d + 12], 11, 3873151461);
            k = p(k, n, m, q, u[d + 15], 16, 530742520);
            q =
                p(q, k, n, m, u[d + 2], 23, 3299628645);
            m = h(m, q, k, n, u[d + 0], 6, 4096336452);
            n = h(n, m, q, k, u[d + 7], 10, 1126891415);
            k = h(k, n, m, q, u[d + 14], 15, 2878612391);
            q = h(q, k, n, m, u[d + 5], 21, 4237533241);
            m = h(m, q, k, n, u[d + 12], 6, 1700485571);
            n = h(n, m, q, k, u[d + 3], 10, 2399980690);
            k = h(k, n, m, q, u[d + 10], 15, 4293915773);
            q = h(q, k, n, m, u[d + 1], 21, 2240044497);
            m = h(m, q, k, n, u[d + 8], 6, 1873313359);
            n = h(n, m, q, k, u[d + 15], 10, 4264355552);
            k = h(k, n, m, q, u[d + 6], 15, 2734768916);
            q = h(q, k, n, m, u[d + 13], 21, 1309151649);
            m = h(m, q, k, n, u[d + 4], 6, 4149444226);
            n = h(n, m, q, k, u[d + 11], 10, 3174756917);
            k = h(k, n, m, q, u[d + 2], 15, 718787259);
            q = h(q, k, n, m, u[d + 9], 21, 3951481745);
            m = f(m, v);
            q = f(q, w);
            k = f(k, y);
            n = f(n, x)
        }
        console.log((l(m) + l(q) + l(k) + l(n)).toLowerCase());
        return (l(m) + l(q) + l(k) + l(n)).toLowerCase()
    }

    function S(d) {
        if (!d || d.constructor !== Array) return "";
        for (var f = "!" + d.length.toString() + ";", c = 0; c < d.length; c++) {
            var e = d[c];
            "object" == typeof e && null != e && e.constructor === Array ? f += S(e) : (e = (e = d[c]) && e.toString ? e.toString().replace(/\\/gi, "\\\\").replace(/!/gi, "\\!").replace(/;/gi, "\\;") : "", f += e + ";")
        }
        return f
    }

    function O(d) {
        for (var f = new ArrayBuffer(2 * d.length),
                c = new Uint16Array(f), e = 0, p = d.length; e < p; e++) c[e] = d.charCodeAt(e);
        return f
    }

    function L() {
        if (window.XMLHttpRequest) var d = new XMLHttpRequest;
        else if (window.ActiveXObject) try {
            d = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (f) {
            try {
                d = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (c) {}
        }
        return d
    }

    function T(d) {
        var f = "",
            c = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split(""),
            e = c.length;
        d || (d = ~~(Math.random() * e));
        for (var p = 0; p < d; p++) f += c[~~(Math.random() * e)];
        return f
    }

    function I(d, f, c) {
        function e(e) {
            1 <
                M.length && 1400 > e ? (M.shift(), I(d, f, c)) : c("", e)
        }
        var p = L();
        p.open("POST", document.location.protocol + "//" + M[0] + "/" + d, !0);
        p.timeout = 5E3;
        var h = function(d) {
            4 != p.readyState ? e(2) : 200 != p.status ? e(1E3 + p.status) : c && c(p.responseText, 0)
        };
        "onerror" in p && (p.onerror = function() {
            e(1)
        });
        "ontimeout" in p && (p.ontimeout = function() {
            e(3)
        });
        "onload" in p ? p.onload = h : "onreadystatechange" in p && (p.onreadystatechange = h);
        p.send(f)
    }

    function fa(d, f, c) {
        c = void 0 === c ? 500 : c;
        var e = L();
        e.open("GET", d, !0);
        e.timeout = c;
        d = function(c) {
            4 != e.readyState ?
                f("", 2) : 200 != e.status ? f("", 1E3 + e.status) : f && f(e.responseText, 0)
        };
        "onerror" in e && (e.onerror = function() {
            f("", 1)
        });
        "ontimeout" in e && (e.ontimeout = function() {
            f("", 3)
        });
        "onload" in e ? e.onload = d : "onreadystatechange" in e && (e.onreadystatechange = d);
        e.send()
    }

    function U(d) {
        try {
            if ("undefined" === typeof window[d]) return !1;
            window[d].setItem("Bot detectection by www.adscore.com", "Bot detectection by www.adscore.com");
            window[d].removeItem("Bot detectection by www.adscore.com");
            return !0
        } catch (f) {
            return !1
        }
    }

    function N(d) {
        var f =
            "";
        U("localStorage") && "integer" == typeof localStorage.getItem("e_" + d) && +new Date < localStorage.getItem("v_" + d) && (f = localStorage.getItem("v_" + d));
        d += "=";
        try {
            var c = decodeURIComponent(document.cookie)
        } catch (z) {
            return f
        }
        c = c.split(";");
        for (var e = 0; e < c.length; e++) {
            for (var p = c[e];
                " " == p.charAt(0);) p = p.substring(1);
            if (0 == p.indexOf(d)) {
                f = p.substring(d.length, p.length);
                break
            }
        }
        return f
    }

    function J(d, f, c) {
        try {
            var e = new Date;
            e.setTime(e.getTime() + 36E5 * c);
            var p = "expires=" + e.toUTCString();
            document.cookie = d + "=" + f + ";" +
                p + ";path=/";
            U("localStorage") && (0 == c ? (localStorage.removeItem("v_" + d), localStorage.removeItem("e_" + d)) : (localStorage.setItem("v_" + d, f), localStorage.setItem("e_" + d, +new Date + 3600 * c)))
        } catch (z) {}
    }

    function B() {
        return "undefined" !== typeof performance && "undefined" !== typeof performance.now ? performance.now() : +new Date
    }

    function y(d) {
        return -1 < V.indexOf(d) ? "#" + V.indexOf(d) : 0 === d ? "0" : 1 === d ? "1" : !1 === d ? "0" : !0 === d ? "1" : d instanceof Array ? d : d && d.toString ? d.toString() : ""
    }

    function w(d) {
        W.push(y(d))
    }

    function h(d) {
        try {
            d =
                eval(d)
        } catch (f) {
            d = ""
        }
        w(y(d))
    }

    function ha() {
        for (var d = 0; d < E.length; d++) {
            var f = document.getElementById(E[d]);
            if (null !== f) try {
                f.parentNode.removeChild(f)
            } catch (c) {} else {
                try {
                    E[d].abort()
                } catch (c) {}
                try {
                    E[d].close()
                } catch (c) {}
            }
        }
        return !0
    }

    function X() {
        for (var d = !0, f = 0; f < l.length; f++) - 1 == l[f] && (d = !1);
        if (d || 599 < B() - Y) return ia(), ha(), !0;
        setTimeout(function() {
            X()
        }, 50);
        return !1
    }

    function ja() {
        v = function() {
            var d = [];
            try {
                for (var f = 0; f < window.location.ancestorOrigins.length; f++) d.push(y(window.location.ancestorOrigins[f]))
            } catch (c) {
                return -1
            }
            return d
        }();
        w(v);
        v = function() {
            try {
                var d = B();
                console.log("        ".repeat(1E4));
                return Math.round(100 * (B() - d)) / 100
            } catch (f) {
                return -1
            }
        }();
        w(v);
        v = function() {
            try {
                for (var d = function(c, e) {
                        return 1E-8 > c ? e : c < e ? d(e - Math.floor(e / c) * c, c) : c == e ? c : d(e, c)
                    }, f = B() / 1E3, c = B() / 1E3 - f, e = 0; 50 > e; e++) c = d(c, B() / 1E3 - f);
                return Math.round(1 / c)
            } catch (p) {}
        }();
        w(v);
        v = function() {
            try {
                null[0]()
            } catch (f) {
                var d = f
            }
            return d.stack
        }();
        w(v);
        v = function() {
            try {
                if ("_phantom" in window || "callPhantom" in window) return 1;
                if ("__phantomas" in window) return 2;
                if ("Buffer" in
                    window) return 3;
                if ("emit" in window) return 4;
                if ("spawn" in window) return 5;
                if ("webdriver" in window && 1 == window.webdriver || "webdriver" in window.navigator && 1 == window.navigator.webdriver) return 6;
                if ("domAutomation" in window) return 7;
                try {
                    if (window.document.documentElement.getAttribute("webdriver")) return 8
                } catch (z) {}
                if ("_Selenium_IDE_Recorder" in window) return 9;
                if ("__webdriver_script_fn" in document) return 10;
                try {
                    var d = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        f = "_phantom __nightmare _selenium callPhantom callSelenium _Selenium_IDE_Recorder __stopAllTimers".split(" "),
                        c;
                    for (c in f)
                        if (window[f[c]]) return 11;
                    for (var e in d)
                        if (window.document[d[e]]) return 12;
                    for (var h in window.document)
                        if (h.match(/\$[a-z]dc_/) && window.document[h].cache_) return 13
                } catch (z) {}
                return window.external && window.external.toString() && -1 != window.external.toString().indexOf("Sequentum") ? 14 : window.document.documentElement.getAttribute("selenium") ? 15 : window.document.documentElement.getAttribute("driver") ?
                    16 : null !== document.documentElement.getAttribute("selenium") ? 17 : null !== document.documentElement.getAttribute("webdriver") ? 18 : null !== document.documentElement.getAttribute("driver") ? 19 : 0
            } catch (z) {
                return -1
            }
        }();
        w(v);
        v = function() {
            function d(d, c) {
                try {
                    var e = "",
                        f;
                    for (f in d) e += f, c && null != d[f] && null != d[f].toString && (e += d[f].toString());
                    return e
                } catch (z) {
                    return ""
                }
            }
            return G(d(window.clientInformation, !1) + d(document, !1) + d(navigator, !1) + d(document.documentElement.style, !1))
        }();
        w(v);
        v = function() {
            try {
                for (window.adscore_jsv =
                    0, a = 11; 25 >= a; a++) {
                    var d = document.createElement("script");
                    d.setAttribute("language", "javascript" + (a / 10).toString());
                    d.text = 'window.adscore_jsv="' + (a / 10).toString() + '";';
                    document.body.appendChild(d);
                    document.body.removeChild(d)
                }
            } catch (f) {
                return ""
            }
            d = window.adscore_jsv;
            delete window.adscore_jsv;
            return d
        }();
        w(v);
        v = (new Date(0)).toLocaleString();
        w(v);
        v = function() {
            for (var d = [1, Math.PI, Math.PI / 2, 1 / Math.PI, 1E-300, 1E-310, 2, -100], f = "", c = 0; c < d.length; c++) t = d[c], f += Math.exp(t), f += Math.sin(t), f += Math.cos(t), f +=
                Math.tan(t), f += Math.atan2(t, 2), f += Math.pow(t, -100);
            return G(f)
        }();
        w(v);
        v = function() {
            try {
                var d = function(c) {
                        for (var d = 1E4, e = 2E3; 1 < e;) window.matchMedia("(" + c + ": " + (d + 1) + "px)").matches ? (d += e, e = Math.floor(e / 2)) : d -= e;
                        return d
                    },
                    f = -1;
                f = window.matchMedia("(pointer: coarse)").matches ? 1 : window.matchMedia("(pointer: fine)").matches ? 2 : 0;
                var c = -1;
                c = window.matchMedia("(hover: none)").matches ? 1 : window.matchMedia("(hover: hover)").matches ? 2 : 0;
                var e = -1;
                e = window.matchMedia("(color-gamut: rec2020)").matches ? 3 : window.matchMedia("(color-gamut: p3)").matches ?
                    2 : window.matchMedia("(color-gamut: srgb)").matches ? 1 : 0;
                return [d("min-device-width"), d("min-device-height"), f, c, e]
            } catch (p) {
                return ["", "", -1, -1]
            }
        }();
        w(v);
        v = function() {
            for (var d = [], f = 0; f < navigator.mimeTypes.length; f++) d.push([y(navigator.mimeTypes[f].type), y(navigator.mimeTypes[f].description)]);
            return d
        }();
        w(v);
        v = function() {
            for (var d = [], f = 0; f < navigator.plugins.length; f++) {
                var c = [];
                c.push(y(navigator.plugins[f].name));
                c.push(y(navigator.plugins[f].filename));
                c.push(y(navigator.plugins[f].description));
                d.push(c)
            }
            return d
        }();
        w(v);
        v = function() {
            function d(c) {
                if (document.location.host != F) return "1";
                try {
                    var d = window.open(c)
                } catch (p) {
                    return "1"
                }
                if (!d || d.closed || "undefined" == typeof d.closed || 0 == d.outerHeight || 0 == d.outerWidth) return "1";
                try {
                    d.focus(), d.close()
                } catch (p) {
                    return "1"
                }
                return "0"
            }
            var f = d("about:blank");
            "0" == f && (f = d("http://google.com/"));
            return f
        }();
        w(v);
        h("typeof window.chrome");
        h("document.location");
        h("document.hidden");
        h("document.visibilityState");
        h("!(top==window)");
        h("window.locationbar.visible");
        h("window.menubar.visible");
        h("window.personalbar.visible");
        h("window.scrollbars.visible");
        h("window.statusbar.visible");
        h("window.toolbar.visible");
        h("typeof window.WebAssembly");
        h("window.mozPaintCount");
        h("top.frames.length");
        h("window.history.length");
        h("!!document.fullscreen||!!document.mozFullscreen||!!document.webkitIsFullScreen||!!document.fullScreenElement");
        h("window.navigator.standalone");
        h("document.referrer");
        h("document.innerWidth");
        h("document.innerHeight");
        h("document.documentElement.clientWidth");
        h("document.documentElement.clientHeight");
        h("window.screenX||window.screenLeft");
        h("window.screenY||window.screenTop");
        h("window.outerWidth");
        h("window.outerHeight");
        h("window.innerWidth");
        h("window.innerHeight");
        h("document.hasFocus()");
        h("document.hasFocus");
        h("window.offscreenBuffering");
        h("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN");
        h("window.performance.memory.jsHeapSizeLimit");
        h("screen.orientation.type");
        h("screen.top");
        h("screen.left");
        h("screen.availTop");
        h("screen.availLeft");
        h("screen.width");
        h("screen.height");
        h("screen.availWidth");
        h("screen.availHeight");
        h("screen.colorDepth");
        h("screen.pixelDepth");
        h("screen.deviceYDPI");
        h("screen.deviceXDPI");
        h("window.devicePixelRatio");
        h("navigator.userAgent");
        h("navigator.appVersion");
        h("navigator.appCodeName");
        h("navigator.appMinorVersion");
        h("navigator.product");
        h("navigator.productSub");
        h("navigator.vendor");
        h("navigator.vendorSub");
        h("navigator.buildID");
        h("navigator.platform");
        h("navigator.cpuClass");
        h("navigator.oscpu");
        h("navigator.hardwareConcurrency");
        h("navigator.maxTouchPoints");
        h("navigator.msMaxTouchPoints");
        h("navigator.language");
        h("navigator.languages.toString()");
        h("navigator.browserLanguage");
        h("navigator.userLanguage");
        h("navigator.systemLanguage");
        h("navigator.onLine");
        h("navigator.deviceMemory");
        h("navigator.doNotTrack");
        h("navigator.msDoNotTrack");
        h("navigator.cookieEnabled");
        h("navigator.battery.level");
        h("navigator.battery.charging");
        h("performance.navigation.type");
        h("performance.navigation.redirectCount");
        h("window.opener==null");
        h("window.opener.location.href");
        h("window.opener.screenX||window.opener.screenLeft");
        h("window.opener.screenY||window.opener.screenTop");
        h("window.opener.innerWidth");
        h("window.opener.innerHeight");
        h("window.opener.outerWidth");
        h("window.opener.outerHeight");
        h("window.opener.offscreenBuffering");
        h(ka);
        h("(new Date).getTimezoneOffset()");
        h("navigator.connection.type");
        h("navigator.connection.effectieType");
        h("navigator.connection.downlinkMax");
        h("navigator.connection.downlink");
        h("navigator.connection.rtt");
        h("navigator.connection.saveData");
        h("window.ScriptEngineMajorVersion();");
        h("window.ScriptEngineMinorVersion();");
        h("window.ScriptEngineBuildVersion();");
        h("performance.timing.redirectEnd");
        h("performance.timing.fetchStart");
        h("performance.timing.domainLookupStart");
        h("performance.timing.domainLookupEnd");
        h("performance.timing.connectStart");
        h("performance.timing.connectEnd");
        h("performance.timing.secureConnectionStart");
        h("performance.timing.requestStart");
        h("performance.timing.responseStart");
        h("performance.timing.responseEnd");
        h("typeof window.ondevicelight");
        h("typeof document.ontouchstart");
        h("window");
        h("navigator");
        h("navigator.plugins");
        h("eval");
        h("screen");
        h("window.open");
        h("IntersectionObserver");
        h("window.alert");
        h("window.isSecureContext");
        h("typeof document.visibilityState");
        h("HTMLCanvasElement.prototype.toDataURL");
        w(y("https://" + F + "/"));
        w(y(F));
        h("window.google");
        h("window.RTCPeerConnection");
        h("window.mozRTCPeerConnection");
        h("window.webkitRTCPeerConnection");
        v = function() {
            try {
                for (var d = [], f = 0; 5 > f; f++) d.push(Math.random());
                return d
            } catch (c) {
                return -1
            }
        }();
        w(v);
        a: {
            try {
                document.createEvent("TouchEvent");
                v = 1;
                break a
            } catch (d) {}
            v = 0
        }
        w(v);
        v = function() {
            try {
                var d = N("a");
                "" == d && (d = la);
                J("a", d, 7);
                return d
            } catch (f) {
                return -1
            }
        }();
        w(v);
        v = function() {
            var d = document.documentElement.getBoundingClientRect(),
                f = [];
            f.push(y(d.left));
            f.push(y(d.top));
            f.push(y(d.right));
            f.push(y(d.bottom));
            f.push(y(d.x));
            f.push(y(d.y));
            return f
        }();
        w(v);
        v = function() {
            try {
                if (0 == K) return "";
                var d = K,
                    f = [],
                    c = d.getExtension("WEBGL_debug_renderer_info");
                f.push(y(d.getParameter(d.VERSION)));
                f.push(y(d.getParameter(d.SHADING_LANGUAGE_VERSION)));
                f.push(y(d.getParameter(d.VENDOR)));
                f.push(y(d.getParameter(d.RENDERER)));
                c ? (f.push(y(d.getParameter(c.UNMASKED_RENDERER_WEBGL))), f.push(y(d.getParameter(c.UNMASKED_VENDOR_WEBGL)))) : (f.push(""), f.push(""));
                return f
            } catch (e) {
                return ""
            }
        }();
        w(v);
        v = function() {
            try {
                B();
                var d = "HP Simplified;Gill Sans;Centaur;Gentium Book Basic;Urdu Typesetting;EucrosiaUPC;Swis721 Blk BT;Century Schoolbook;Arabic Transparent;Segoe UI Semilight;Vani;Adobe Hebrew;Book Antiqua;Dotum;Copperplate Gothic Light;American Typewriter;Corsiva Hebrew;Gloucester MT Extra Condensed;Lucida Sans Typewriter;Nueva Std Cond;Cooper Black;Calibri Light;DejaVu Serif Condensed;Myriad Pro Cond;Estrangelo Edessa;".split(";"),
                    f = document.createElement("canvas");
                f.width = 200;
                f.height = 200;
                var c = f.getContext("2d", {
                    desynchronized: !0
                });
                c.beginPath();
                c.rect(0, 0, 200, 200);
                c.fillStyle = "black";
                c.fill();
                var e = f.toDataURL();
                c.beginPath();
                c.rect(0, 0, 200, 200);
                c.fillStyle = "white";
                c.fill();
                var h = f.toDataURL(),
                    z = c.createLinearGradient(0, 0, 200, 0);
                z.addColorStop(0, "blue");
                z.addColorStop(1, "white");
                c.fillStyle = z;
                c.fillRect(0, 0, 200, 200);
                c.rotate(1 * Math.PI / 180);
                c.font = "14px 'Arial'";
                c.textBaseline = "alphabetic";
                c.fillStyle = "#f60";
                c.fillRect(0,
                    15, 200, 15);
                c.beginPath();
                c.moveTo(0, 0);
                c.quadraticCurveTo(50, 150, 180, 180);
                c.bezierCurveTo(190, -40, 100, 50, 100, 50);
                c.lineTo(30, 10);
                c.lineWidth = 1;
                c.strokeStyle = "#222222";
                c.stroke();
                c.fillStyle = "#069";
                c.fillText("mmiillII,)#!>\u26c4\u26c7\u12b9\u102a\u07f7\u058e\u17d8", 2, 15);
                c.fillStyle = "rgba(102,204,0,0.7)";
                c.fillText("mmiillII,)#!>\u26c4\u26c7\u12b9\u102a\u07f7\u058e\u17d8", 4, 17);
                z = f.toDataURL();
                z = f.toDataURL();
                B();
                B();
                for (var l = 0, u = Math.min(25, d.length); l < u; l++) c.font = "10px '" + d[l] + "'", a = .5, r = l % 255,
                    g = Math.floor(l / d.length * 255), b = l % 8, c.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")", c.fillText(d[l], l % 8 * 25, 8 + l % 192);
                var m = f.toDataURL();
                B();
                B();
                B();
                z = G(z.substr(z.length - 100));
                m = G(m.substr(m.length - 100));
                bt = G(e.substr(e.length - 100) + h.substr(h.length - 100)).substr(0, 8);
                B();
                d = [];
                d.push(bt);
                d.push(z);
                d.push(m);
                d.push("");
                return d
            } catch (q) {
                return ""
            }
        }();
        w(v);
        v = function() {
            try {
                var d = function(d) {
                    c.clearColor(0, 0, 0, 1);
                    c.enable(c.DEPTH_TEST);
                    c.depthFunc(c.LEQUAL);
                    c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                    return "[" + d[0] + ", " + d[1] + "]"
                };
                if (0 == K) return ["", ""];
                var f = "";
                var c = K;
                if (!c) return null;
                var e = [],
                    h = c.createBuffer();
                c.bindBuffer(c.ARRAY_BUFFER, h);
                var z = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                c.bufferData(c.ARRAY_BUFFER, z, c.STATIC_DRAW);
                h.itemSize = 3;
                h.numItems = 3;
                var l = c.createProgram(),
                    u = c.createShader(c.VERTEX_SHADER);
                c.shaderSource(u, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                c.compileShader(u);
                var m = c.createShader(c.FRAGMENT_SHADER);
                c.shaderSource(m, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                c.compileShader(m);
                c.attachShader(l, u);
                c.attachShader(l, m);
                c.linkProgram(l);
                c.useProgram(l);
                l.vertexPosAttrib = c.getAttribLocation(l, "attrVertex");
                l.offsetUniform = c.getUniformLocation(l, "uniformOffset");
                c.enableVertexAttribArray(l.vertexPosArray);
                c.vertexAttribPointer(l.vertexPosAttrib, h.itemSize, c.FLOAT, !1,
                    0, 0);
                c.uniform2f(l.offsetUniform, 1, 1);
                c.drawArrays(c.TRIANGLE_STRIP, 0, h.numItems);
                null != c.canvas && (f = G(c.canvas.toDataURL()));
                e.push(c.getSupportedExtensions().join(";"));
                e.push(d(c.getParameter(c.ALIASED_LINE_WIDTH_RANGE)));
                e.push(d(c.getParameter(c.ALIASED_POINT_SIZE_RANGE)));
                e.push(c.getParameter(c.ALPHA_BITS));
                e.push(c.getContextAttributes().antialias ? "yes" : "no");
                e.push(c.getParameter(c.BLUE_BITS));
                e.push(c.getParameter(c.DEPTH_BITS));
                e.push(c.getParameter(c.GREEN_BITS));
                e.push(function(c) {
                    var d,
                        e = c.getExtension("EXT_texture_filter_anisotropic") || c.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || c.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return e ? (d = c.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === d && (d = 2), d) : null
                }(c));
                e.push(c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
                e.push(c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE));
                e.push(c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS));
                e.push(c.getParameter(c.MAX_RENDERBUFFER_SIZE));
                e.push(c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS));
                e.push(c.getParameter(c.MAX_TEXTURE_SIZE));
                e.push(c.getParameter(c.MAX_VARYING_VECTORS));
                e.push(c.getParameter(c.MAX_VERTEX_ATTRIBS));
                e.push(c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
                e.push(c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS));
                e.push(d(c.getParameter(c.MAX_VIEWPORT_DIMS)));
                e.push(c.getParameter(c.RED_BITS));
                e.push(c.getParameter(c.RENDERER));
                e.push(c.getParameter(c.SHADING_LANGUAGE_VERSION));
                e.push(c.getParameter(c.STENCIL_BITS));
                e.push(c.getParameter(c.VENDOR));
                e.push(c.getParameter(c.VERSION));
                c.getShaderPrecisionFormat && (e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.HIGH_FLOAT).precision), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.HIGH_FLOAT).rangeMin), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.HIGH_FLOAT).rangeMax), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.MEDIUM_FLOAT).precision), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.MEDIUM_FLOAT).rangeMin), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.MEDIUM_FLOAT).rangeMax), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER,
                    c.LOW_FLOAT).precision), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.LOW_FLOAT).rangeMin), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.LOW_FLOAT).rangeMax), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.HIGH_FLOAT).precision), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.HIGH_FLOAT).rangeMin), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.HIGH_FLOAT).rangeMax), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_FLOAT).precision), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,
                    c.MEDIUM_FLOAT).rangeMin), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_FLOAT).rangeMax), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.LOW_FLOAT).precision), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.LOW_FLOAT).rangeMin), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.LOW_FLOAT).rangeMax), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.HIGH_INT).precision), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.HIGH_INT).rangeMin), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER,
                    c.HIGH_INT).rangeMax), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.MEDIUM_INT).precision), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.MEDIUM_INT).rangeMin), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.MEDIUM_INT).rangeMax), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.LOW_INT).precision), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.LOW_INT).rangeMin), e.push(c.getShaderPrecisionFormat(c.VERTEX_SHADER, c.LOW_INT).rangeMax), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,
                    c.HIGH_INT).precision), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.HIGH_INT).rangeMin), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.HIGH_INT).rangeMax), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_INT).precision), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_INT).rangeMin), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.MEDIUM_INT).rangeMax), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.LOW_INT).precision), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,
                    c.LOW_INT).rangeMin), e.push(c.getShaderPrecisionFormat(c.FRAGMENT_SHADER, c.LOW_INT).rangeMax));
                d = [];
                d.push(f);
                d.push(G(e.join(",")));
                return d
            } catch (q) {
                return ["", ""]
            }
        }();
        w(v);
        v = function() {
            var d = window.external,
                f = [];
            try {
                for (var c in d) f.push(c);
                var e = f
            } catch (p) {
                e = ""
            }
            return e
        }();
        w(v)
    }

    function ma() {
        v = function() {
            try {
                l[0] = -2;
                if ("getBattery" in navigator) var d = function(c) {
                    l[0] = -2
                };
                else l[0] = -2;
                var f = function(c) {
                    var d = [];
                    d.push(y(Math.round(100 * c.level)));
                    d.push(y(c.charging));
                    l[0] = d
                };
                navigator.getBattery()["catch"](d).then(f);
                navigator.getBattery()["catch"](d).then(f);
                navigator.getBattery()["catch"](d).then(f)
            } catch (c) {
                l[0] = -2
            }
        }();
        v = function() {
            function d(c, d) {
                var e = 0,
                    f = !1,
                    h = window.setInterval(function() {
                        c() && (window.clearInterval(h), d(f));
                        50 < e++ && (window.clearInterval(h), f = !0, d(f))
                    }, 10)
            }

            function f(c) {
                c = c.toLowerCase();
                return 0 === c.indexOf("msie") && 0 === c.indexOf("trident") ? !1 : (c = /(?:msie|rv:)\s?([\d\.]+)/.exec(c)) && 10 <= parseInt(c[1], 10) ? !0 : !1
            }
            l[1] = -2;
            (function(c) {
                if (window.webkitRequestFileSystem) window.webkitRequestFileSystem(window.TEMPORARY,
                    1,
                    function() {
                        h = !1
                    },
                    function(c) {
                        h = !0
                    });
                else if (/Firefox/.test(window.navigator.userAgent)) {
                    var e;
                    try {
                        window.indexedDB && (e = window.indexedDB.open("test"))
                    } catch (z) {
                        var h = !0
                    }
                    "undefined" === typeof h && d(function() {
                        return "done" === e.readyState ? !0 : !1
                    }, function(c) {
                        c || (h = e.result ? !1 : !0)
                    })
                } else if (f(window.navigator.userAgent)) {
                    h = !1;
                    try {
                        window.indexedDB || (h = !0)
                    } catch (z) {
                        h = !0
                    }
                } else if (/Safari/.test(window.navigator.userAgent)) {
                    try {
                        window.localStorage && (window.localStorage.setItem("test", 1), window.localStorage.removeItem("test"))
                    } catch (z) {
                        h = !0
                    }
                    "undefined" === typeof h && (h = !1)
                }
                d(function() {
                    return "undefined" !== typeof h ? !0 : !1
                }, function(d) {
                    c(h)
                })
            })(function(c) {
                l[1] = c ? 1 : 0
            })
        }();
        v = function() {
            l[2] = 1 == window.hidden ? -3 : -1;
            try {
                var d = [];
                d.threshold = [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1];
                if ("IntersectionObserver" in window) {
                    var f = new IntersectionObserver(function(c) {
                        l[2] = 100 * c[0].intersectionRatio;
                        f.unobserve(document.documentElement);
                        f.disconnect()
                    }, d);
                    f.observe(document.documentElement)
                } else l[2] = -2
            } catch (c) {
                l[2] = -2
            }
        }();
        v = function() {
            l[3] = -2;
            try {
                var d = L();
                E.push(d);
                d.open("GET", document.location.protocol + "//6." + F + "/", !0);
                d.onreadystatechange = function() {
                    4 == d.readyState && "" != d.responseText && (l[3] = d.responseText, "" == d.responseText && J("6US", 1, 12), d.onreadystatechange = null)
                };
                d.onerror = function() {
                    l[3] = -2
                };
                "" == P ? d.send() : l[3] = P
            } catch (f) {
                l[3] = -2
            }
        }();
        v = function() {
            function d(d) {
                try {
                    var c = L();
                    E.push(c);
                    c.open("GET", "https://" + Z + "." + d + "." + F + "/", !0);
                    c.onreadystatechange = function() {
                        4 == c.readyState && "" != c.responseText && (l[4] = c.responseText, c.onreadystatechange = null)
                    };
                    c.onerror = function() {
                        -3 == l[4] && (l[4] = -2)
                    };
                    c.send()
                } catch (e) {
                    -3 == l[4] && (l[4] = -2)
                }
            }
            l[4] = -3;
            d("l");
            d("n");
            d("s")
        }();
        v = function() {
            l[5] = -2;
            try {
                ed = function(d) {
                    var f, c, e, h, z;
                    var v = z = h = 0;
                    d.forEach(function(d) {
                        f += d.kind + d.label;
                        if ("communications" == d.deviceId || "default" == d.deviceId) f += d.deviceId;
                        "audioinput" == d.kind && (v = 1);
                        "audiooutput" == d.kind && (h = 1);
                        "videoinput" == d.kind && (z = 1);
                        c += d.kind + d.label + d.deviceId + d.groupId;
                        "" != d.deviceId && "default" != d.deviceId && "communications" != d.deviceId && (e = d.deviceId)
                    });
                    d = [];
                    d.push(y(G(f)));
                    d.push(y(G(c)));
                    d.push(y(e));
                    d.push(v + 2 * h + 4 * z);
                    l[5] = d
                }, "mediaDevices" in navigator ? navigator.mediaDevices.enumerateDevices()["catch"](function(d) {
                    l[5] = -2
                }).then(ed) : l[5] = -2
            } catch (d) {
                l[5] = -2
            }
        }();
        v = function() {
            l[6] = -2;
            try {
                window.addEventListener("deviceorientation", function(d) {
                    var f = [];
                    f.push(d.beta);
                    f.push(d.gamma);
                    f.push(d.alpha);
                    l[6] = f
                })
            } catch (d) {
                l[6] = -2
            }
        }();
        v = function() {
            l[7] = -2;
            try {
                window.addEventListener("devicemotion", function(d) {
                    var f = [];
                    d.accelerationIncludingGravity ? (f.push(d.accelerationIncludingGravity.x),
                        f.push(d.accelerationIncludingGravity.y), f.push(d.accelerationIncludingGravity.z), f.push(d.interval), l[7] = f) : l[7] = -2
                })
            } catch (d) {
                l[7] = -2
            }
        }();
        v = function() {
            l[8] = -2;
            try {
                var d = function(d) {
                    d = d || window.event; - 2 == l[8] && (l[8] = [d.screenX, d.screenY, d.clientX, d.clientY])
                };
                window.addEventListener("mouseover", d);
                window.addEventListener("mousemove", d);
                window.addEventListener("mouseenter", d)
            } catch (f) {
                l[8] = -2
            }
        }();
        v = function() {
            l[9] = -1;
            try {
                if (window.postMessage) {
                    var d, f, c = String(Math.random());
                    if (window.AdscoreXiStart) {
                        window.addEventListener("message",
                            function(h) {
                                if ("string" === typeof h.data && !(h.data.length < c.length + 1) && h.data.substring(0, c.length + 1) == "#" + c) {
                                    f = B();
                                    var p = [];
                                    p.push(h.data);
                                    p.push(e);
                                    p.push(d);
                                    p.push(f);
                                    l[9] = p
                                }
                            }, !1);
                        var e = B();
                        window.AdscoreXiStart(c)
                    } else {
                        var h = document.createElement("iframe");
                        E.push(h);
                        window.addEventListener("message", function(p) {
                            if (!(p.origin !== "https://c." + F && p.origin !== "http://c." + F || "string" !== typeof p.data || p.data.length < c.length + 1 || p.data.substring(0, c.length + 1) != "#" + c)) {
                                h.parentNode.removeChild(h);
                                f = B();
                                var z = [];
                                z.push(p.data);
                                z.push(e);
                                z.push(d);
                                z.push(f);
                                l[9] = z
                            }
                        }, !1);
                        h.style.display = "none";
                        h.src = document.location.protocol + "//c." + F + "/#" + c;
                        h.onload = function() {
                            d = B()
                        };
                        e = B();
                        document.body.appendChild(h)
                    }
                } else l[9] = -2
            } catch (z) {
                l[9] = -2
            }
        }();
        v = function() {
            l[10] = -2;
            try {
                "webkitTemporaryStorage" in navigator ? navigator.webkitTemporaryStorage.queryUsageAndQuota(function(d, f) {
                    l[10] = f
                }, function(d) {
                    l[10] = -2
                }) : l[10] = -2
            } catch (d) {
                l[10] = -2
            }
        }();
        v = function() {
            try {
                l[11] = -1;
                var d = window.RTCPeerConnection || window.mozRTCPeerConnection ||
                    window.webkitRTCPeerConnection;
                if (d) {
                    var f = new d({
                        iceServers: [{
                            urls: ["stun:185.200.118.90:3478", "stun:38.132.109.186:3478", "stun:185.200.116.90:3478"]
                        }]
                    });
                    d = function(c) {};
                    E.push(f);
                    f.createDataChannel("" + Math.random());
                    f.onicecandidate = function(c) {
                        if (c && c.candidate && c.candidate.candidate) try {
                            -1 === l[11] && (l[11] = []), l[11].push(y(c.candidate.candidate))
                        } catch (e) {}
                    };
                    try {
                        f.createOffer().then(function(c) {
                            return f.setLocalDescription(c)
                        })["catch"](function(c) {
                            l[11] = -2
                        })
                    } catch (c) {
                        f.createOffer(f.setLocalDescription.bind(f),
                            d)["catch"](function(c) {
                            l[11] = -2
                        })
                    }
                } else l[11] = -2
            } catch (c) {
                l[11] = -2
            }
        }();
        v = function() {
            try {
                l[12] = -1;
                var d = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                if (d) {
                    var f = new d({
                        iceServers: []
                    });
                    d = function(c) {};
                    E.push(f);
                    f.createDataChannel("" + Math.random());
                    f.onicecandidate = function(c) {
                        if (c && c.candidate && c.candidate.candidate) try {
                            -1 === l[12] && (l[12] = []), l[12].push(y(c.candidate.candidate))
                        } catch (e) {}
                    };
                    try {
                        f.createOffer().then(function(c) {
                            return f.setLocalDescription(c)
                        })["catch"](function(c) {
                            l[12] = -2
                        })
                    } catch (c) {
                        f.createOffer(f.setLocalDescription.bind(f), d)["catch"](function(c) {
                            l[12] = -2
                        })
                    }
                } else l[12] = -2
            } catch (c) {
                l[12] = -2
            }
        }()
    }

    function aa() {
        if (Q) return !1;
        Q = !0;
        a = document.createElement("a");
        a.href = "//" + F + "/v";
        a.innerHTML = "Click Here";
        a.style = "font-size:5px;color:#fffffe;position:absolute;left:-9999px";
        a.target = "_blank";
        a.rel = "no-follow";
        document.getElementsByTagName("script")[0].appendChild(a);
        E.push(a);
        I("p", "", function(d) {});
        ma();
        ja();
        Y = B();
        X();
        return !0
    }

    function ba(d, f) {
        var c = d.split("\n"),
            e =
            c[0];
        c = c.splice(1).join("\n");
        3 != (D.type || "") && (c = D.data || null);
        c = {
            signature: e,
            data: c || null,
            error: f
        };
        Q = !1;
        D.callback && D.callback(c);
        0 == f && J("token_" + H, e, 6)
    }

    function ia() {
        if (0 == ca) {
            ca = !0;
            for (var d = 0; d < l.length; d++) w(l[d]);
            w(Math.round(B() - na))
        }
        d = S(W);
        try {
            var f = O(R.compressToUTF16(d))
        } catch (c) {
            f = d
        }
        I("p", f, ba)
    }

    function da(d, f) {
        10 > d.length || 0 < f ? (J("token_" + H, "", 0), aa()) : ba(d, f)
    }

    function ea(d, f) {
        P = d;
        "" == d && J("6US", 1, 12);
        var c = N("token_" + H);
        c = c + "\n" + H + "\n" + (D.sub_id || "");
        "" != (D.data || "") && (c = c + "\n" + D.data);
        try {
            var e = O(R.compressToUTF16(c))
        } catch (p) {
            e = c
        }
        I("t", e, da)
    }

    function oa() {
        var d = N("token_" + H);
        if ("" == d || "string" !== typeof d) return !1;
        d = d.split(",", 1);
        if (21600 < Math.round(B() / 1E3) - d[0]) return !1;
        "" == N("6US") && fa(document.location.protocol + "//6." + F + "/", ea);
        ea("", 0);
        return !0
    }
    D || (D = {});
    var M = ["adsco.re", "162.252.214.4", "w.adsco.re"],
        F = M[0],
        V = "Netscape;Gecko;Mozilla;WebKit;Shockwave Flash;pepflashplayer.dll;Widevine Content Decryption Module;widevinecdmadapter.dll;Chrome PDF Viewer;mhjfbmdgcfjbbpaeojofohoefgiehjai;Native Client;internal-nacl-plugin;internal-pdf-viewer;application/x-shockwave-flash;application/futuresplash;application/x-ppapi-widevine-cdm;application/pdf;application/x-nacl;Native Client Executable;application/x-pnacl;Portable Native Client Executable;application/x-google-chrome-pdf;Portable Document Format;WebGL 1.0 (OpenGL ES 2.0 Chromium);WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium);Google Inc.;experimental-webgl;Internet Explorer;Microsoft Internet Explorer;FutureSplash movie;Adobe Flash movie;WebGL 1.0;WebGL GLSL ES 1.0;Microsoft;experimental-webgl".split(";"),
        R = function() {
            var d = String.fromCharCode,
                f = {
                    compressToBase64: function(c) {
                        if (null == c) return "";
                        c = f._compress(c, 6, function(c) {
                            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c)
                        });
                        switch (c.length % 4) {
                            default:
                            case 0:
                                return c;
                            case 1:
                                return c + "===";
                            case 2:
                                return c + "==";
                            case 3:
                                return c + "="
                        }
                    },
                    compressToUTF16: function(c) {
                        return null == c ? "" : f._compress(c, 15, function(c) {
                            return d(c + 32)
                        }) + " "
                    },
                    compressToUint8Array: function(c) {
                        c = f.compress(c);
                        for (var d = new Uint8Array(2 * c.length), h = 0,
                                l = c.length; h < l; h++) {
                            var v = c.charCodeAt(h);
                            d[2 * h] = v >>> 8;
                            d[2 * h + 1] = v % 256
                        }
                        return d
                    },
                    compressToEncodedURIComponent: function(c) {
                        return null == c ? "" : f._compress(c, 6, function(c) {
                            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$".charAt(c)
                        })
                    },
                    compress: function(c) {
                        return f._compress(c, 16, function(c) {
                            return d(c)
                        })
                    },
                    _compress: function(c, d, f) {
                        if (null == c) return "";
                        var e, h = {},
                            p = {},
                            m, l, k = "",
                            n = 2,
                            v = 3,
                            w = 2,
                            y = [],
                            x = 0,
                            A = 0,
                            B;
                        for (B = 0; B < c.length; B += 1)
                            if (m = c.charAt(B), Object.prototype.hasOwnProperty.call(h,
                                    m) || (h[m] = v++, p[m] = !0), l = k + m, Object.prototype.hasOwnProperty.call(h, l)) k = l;
                            else {
                                if (Object.prototype.hasOwnProperty.call(p, k)) {
                                    if (256 > k.charCodeAt(0)) {
                                        for (e = 0; e < w; e++) x <<= 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++;
                                        var C = k.charCodeAt(0);
                                        for (e = 0; 8 > e; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1
                                    } else {
                                        C = 1;
                                        for (e = 0; e < w; e++) x = x << 1 | C, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C = 0;
                                        C = k.charCodeAt(0);
                                        for (e = 0; 16 > e; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1
                                    }
                                    n--;
                                    0 == n && (n = Math.pow(2, w), w++);
                                    delete p[k]
                                } else
                                    for (C =
                                        h[k], e = 0; e < w; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1;
                                n--;
                                0 == n && (n = Math.pow(2, w), w++);
                                h[l] = v++;
                                k = String(m)
                            } if ("" !== k) {
                            if (Object.prototype.hasOwnProperty.call(p, k)) {
                                if (256 > k.charCodeAt(0)) {
                                    for (e = 0; e < w; e++) x <<= 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++;
                                    C = k.charCodeAt(0);
                                    for (e = 0; 8 > e; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1
                                } else {
                                    C = 1;
                                    for (e = 0; e < w; e++) x = x << 1 | C, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C = 0;
                                    C = k.charCodeAt(0);
                                    for (e = 0; 16 > e; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1
                                }
                                n--;
                                0 == n && (n = Math.pow(2, w), w++);
                                delete p[k]
                            } else
                                for (C = h[k], e = 0; e < w; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1;
                            n--;
                            0 == n && w++
                        }
                        C = 2;
                        for (e = 0; e < w; e++) x = x << 1 | C & 1, A == d - 1 ? (A = 0, y.push(f(x)), x = 0) : A++, C >>= 1;
                        for (;;)
                            if (x <<= 1, A == d - 1) {
                                y.push(f(x));
                                break
                            } else A++;
                        return y.join("")
                    }
                };
            return f
        }(),
        la = T(32),
        ka = +new Date;
    Array.prototype.indexOf || (Array.prototype.indexOf = function(d, f) {
        if (null == this) throw new TypeError('"this" is null or not defined');
        var c = Object(this),
            e = c.length >>> 0;
        if (0 === e) return -1;
        var h = f |
            0;
        if (h >= e) return -1;
        for (h = Math.max(0 <= h ? h : e - Math.abs(h), 0); h < e;) {
            if (h in c && c[h] === d) return h;
            h++
        }
        return -1
    });
    var Q = !1,
        P = "",
        ca = !1,
        v, K = 0,
        na = B(),
        l = [],
        W = [],
        E = [];
    w(1586028955);
    w(H || "");
    w(D.sub_id || "");
    w(D.type || "");
    w(D.request_signature || "");
    w(D.data || "");
    w(function() {
        for (var d = document.createElement("canvas"), f = null, c = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], e = 0; 2 > e; e++)
            for (var h = 0; 5 > h; h++) {
                var l = B();
                try {
                    f = d.getContext(c[h])
                } catch (pa) {
                    continue
                }
                l = B() - l;
                if (f) return K = f, [c[h], Math.round(l)]
            }
        return ["",
            0
        ]
    }());
    var Z = T(12);
    w(y(Z));
    var Y;
    (function() {
        if (-1 == navigator.userAgent.search("://")) return !1;
        var d = H + "\n" + (D.sub_id || "");
        "" != (D.data || "") && (d = d + "\n" + D.data);
        try {
            var f = O(R.compressToUTF16(d))
        } catch (c) {
            f = d
        }
        I("b", f, da);
        return !0
    })() || oa() || aa()
});

function deployiFrame(url) {
    var b = document.getElementsByTagName('body')[0];
    b.style = "margin:0px;padding:0px;overflow:hidden";
    var a = document.createElement('iframe');
    if ((window.location.href.indexOf('https:') == 0) && (url.indexOf('http:') == 0))
        a.src = url.replace('http:', 'https:');
    else
        a.src = url;
    a.style = "border:none;overflow:hidden;height:100%;width:100%";
    a.frameborder = "0";
    a.height = "100%";
    a.width = "100%";
    b.appendChild(a);
}

function conditionalDecode(str) {
    if (/^[a-zA-Z]:\/\//.test(str))
        return str;
    return decodeURIComponent(str);
}


function redirect(url) {
    window.location.href = url;
}

var re = /#([^,]*),([^,]*),([^,]*),([^,]*),(.*)$/g;
var m;
if (m = re.exec(window.location.hash)) {
    var apikey = m[1],
        sub_id = m[2],
        type = m[3],
        request_signature = m[4],
        data = m[5];

    if (type == 1) {
        deployiFrame(conditionalDecode(data));
        AdscoreInit(apikey, {
            'sub_id': sub_id,
            'callback': function(result) {}
        });
    } else
    if (type == 2) {
        var pr = document.createElement("link");
        pr.setAttribute("rel", "prerender");
        pr.setAttribute("href", conditionalDecode(data).replace('{adscore}', ''));
        document.getElementsByTagName("head")[0].appendChild(pr);

        AdscoreInit(apikey, {
            'sub_id': sub_id,
            'type': type,
            'request_signature': request_signature,
            'data': data,
            'callback': function(result) {
                redirect(conditionalDecode(data).replace('{adscore}', result.signature));
            }
        });

    } else
    if (type == 3) {
        AdscoreInit(apikey, {
            'sub_id': sub_id,
            'type': type,
            'request_signature': request_signature,
            'data': data,
            'callback': function(result) {
                if (result.data) {
                    redirect(conditionalDecode(result.data));
                }

            }
        });
    }
}