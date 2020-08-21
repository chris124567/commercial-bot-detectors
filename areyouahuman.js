/* Retrieved from https://pastebin.com/raw/fyAEZuPN */
! function(e, t, n) {
    "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t[e] = n()
}("Fingerprint", this, function() {
    "use strict";
    var e = function(e) {
        var t, n;
        t = Array.prototype.forEach, n = Array.prototype.map, this.each = function(e, n, r) {
            if (null !== e)
                if (t && e.forEach === t) e.forEach(n, r);
                else if (e.length === +e.length) {
                for (var i = 0, a = e.length; a > i; i++)
                    if (n.call(r, e[i], i, e) === {}) return
            } else
                for (var o in e)
                    if (e.hasOwnProperty(o) && n.call(r, e[o], o, e) === {}) return
        }, this.map = function(e, t, r) {
            var i = [];
            return null == e ? i : n && e.map === n ? e.map(t, r) : (this.each(e, function(e, n, a) {
                i[i.length] = t.call(r, e, n, a)
            }), i)
        }, "object" == typeof e ? (this.hasher = e.hasher, this.screen_resolution = e.screen_resolution, this.screen_orientation = e.screen_orientation, this.canvas = e.canvas, this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
    };
    return e.prototype = {
        get: function() {
            var e = [];
            if (e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), this.screen_resolution) {
                var t = this.getScreenResolution();
                "undefined" != typeof t && e.push(this.getScreenResolution().join("x"))
            }
            return e.push((new Date).getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), e.push(!!window.indexedDB), e.push(document.body ? typeof document.body.addBehavior : "undefined"), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
        },
        murmurhash3_32_gc: function(e, t) {
            var n, r, i, a, o, s, c, u;
            for (n = 3 & e.length, r = e.length - n, i = t, o = 3432918353, s = 461845907, u = 0; r > u;) c = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, c = (65535 & c) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295, i ^= c, i = i << 13 | i >>> 19, a = 5 * (65535 & i) + ((5 * (i >>> 16) & 65535) << 16) & 4294967295, i = (65535 & a) + 27492 + (((a >>> 16) + 58964 & 65535) << 16);
            switch (c = 0, n) {
                case 3:
                    c ^= (255 & e.charCodeAt(u + 2)) << 16;
                case 2:
                    c ^= (255 & e.charCodeAt(u + 1)) << 8;
                case 1:
                    c ^= 255 & e.charCodeAt(u), c = (65535 & c) * o + (((c >>> 16) * o & 65535) << 16) & 4294967295, c = c << 15 | c >>> 17, c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295, i ^= c
            }
            return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (65535 & i) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (65535 & i) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 16, i >>> 0
        },
        hasLocalStorage: function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        },
        hasSessionStorage: function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        },
        isCanvasSupported: function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        },
        isIE: function() {
            return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
        },
        getPluginsString: function() {
            return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
        },
        getRegularPluginsString: function() {
            return this.map(navigator.plugins, function(e) {
                var t = this.map(e, function(e) {
                    return [e.type, e.suffixes].join("~")
                }).join(",");
                return [e.name, e.description, t].join("::")
            }, this).join(";")
        },
        getIEPluginsString: function() {
            if (window.ActiveXObject) {
                var e = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                return this.map(e, function(e) {
                    try {
                        return new ActiveXObject(e), e
                    } catch (t) {
                        return null
                    }
                }).join(";")
            }
            return ""
        },
        getScreenResolution: function() {
            var e;
            return e = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
        },
        getCanvasFingerprint: function() {
            var e = document.createElement("canvas"),
                t = e.getContext("2d"),
                n = "http://valve.github.io";
            return t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17), e.toDataURL()
        }
    }, e
});
ayah_debug("starting cat");
var protocol = window.location.protocol === "https:" ? "https:" : "http:";
var AYAH_ATTEMPT_KEY = "";
var ayah_debug_enabled = 0;
var ayah_debug_verbose_enabled = 0;
var scripts = document.getElementsByTagName("script");
var script = scripts[scripts.length - 1];
var scriptURL = script.src;
var scriptParameters = {};
var AYAH_kitten = document.createElement("iframe");
if (scriptURL.indexOf("?") != -1) {
    querystring = scriptURL.substring(scriptURL.indexOf("?") + 1).split("&");
    var scriptParameters = {},
        pair, d = decodeURIComponent;
    for (var i = querystring.length - 1; i >= 0; i--) {
        pair = querystring[i].split("=");
        if (pair[0].indexOf("AYAH_") == 0) {
            scriptParameters[d(pair[0])] = d(pair[1])
        }
    }
}
var inIframe = window.self !== window.top;
var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight || e.clientHeight || g.clientHeight;
var screenSize = x + "x" + y;
var device_screen_width = x;
var device_screen_height = y;

function getFrameDepth(e) {
    if (e === window.top) {
        return 0
    } else if (e.parent === window.top) {
        return 1
    }
    return 1 + getFrameDepth(e.parent)
}
var iframe_depth = getFrameDepth(self);

function ayah_debug(e) {
    if (!window.console) console = {
        log: function() {}
    };
    if (ayah_debug_enabled) {
        var t = new Date;
        console.log(t.getTime() + " " + e);
        var n = document.getElementById("ayah_debug_console");
        if (n) {
            n.innerHTML += "\n<br>" + e
        }
    }
}

function ayah_debug_verbose(e) {
    if (ayah_debug_verbose_enabled) {
        ayah_debug(e)
    }
}

function create_litter() {
    ayah_debug("creating a litter");
    var e = new Fingerprint({
        ie_activex: true,
        canvas: true
    }).get();
    AYAH_kitten.id = "AYAH_iframe" + (new Date).getTime();
    var t = "?iframe=" + inIframe + "&device_screen_width=" + device_screen_width + "&device_screen_height=" + device_screen_height + "&screenSize=" + screenSize + "&ak=" + AYAH_ATTEMPT_KEY + "&pk=" + "d7abbedbc3ac5970e1f94b0f6a884d92bf6a2303" + "&AYAH_VERSION=1.1" + "&AYAH_FINGERPRINT_VALVE=" + e + "&cookiesync=true" + "&pd=" + window.location.hostname + "&iframe_depth=" + iframe_depth + "&history_depth=" + window.history.length;
    for (p in scriptParameters) {
        t += "&" + p + "=" + scriptParameters[p]
    }
    AYAH_kitten.src = protocol + "//n-cdn.areyouahuman.com/kitten" + t;
    AYAH_kitten.width = 0;
    AYAH_kitten.height = 0;
    AYAH_kitten.scrolling = "no";
    AYAH_kitten.frameBorder = 0;
    AYAH_kitten.style.cssText = "border:none;overflow:hidden;display:none;";
    var n = document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(AYAH_kitten, n)
}(function() {
    var e = new Date;
    var t = e.getTime();
    var n = AYAH_ATTEMPT_KEY = p();
    var r = new Array;
    var i = 0;
    create_litter();
    var o = t;

    function s(e) {
        ++A[e.button];
        ++S
    }

    function c(e) {
        --A[e.button];
        --S
    }

    function u(e) {
        ayah_debug("handleBeforeUnload called");
        h()
    }

    function h() {
        ayah_debug("ayahCleanup executing");
        clearInterval(H);
        clearInterval(T);
        clearInterval(C);
        _(document, "mousedown", s);
        _(document, "mouseup", c);
        _(document, "mousemove", f);
        _(document, "touchmove", d);
        _(document, "touchstart", d);
        _(document, "touchend", d);
        ayah_debug("send all remaining observations");
        l(0);
        ayah_debug("sent all remaining observations")
    }

    function l(e) {
        if (typeof e == "undefined") {
            e = 100
        }
        ayah_debug("minObservationsToSend: " + e);
        var a = new Array;
        var s = o;
        ayah_debug_verbose("in ayahSendObservations timeObservationLastSent: " + o);
        for (var c = 0; c < r.length - 1; c++) {
            ayah_debug("observations.length: " + r.length);
            var u = r[c];
            ayah_debug_verbose("looking at obs.time: " + u.time + ", timeObservationLastSent: " + o);
            if (parseInt(u.time + t) > parseInt(o)) {
                ayah_debug_verbose("updating sendableObservations: " + u.time + ", timeObservationLastSent: " + o);
                a.push(u.x, u.y, u.mousebutton, u.time);
                s = u.time
            }
            if (a.length >= 1100) {
                ayah_debug("sendableObservations.length: " + a.length);
                ayah_debug("maximum observation length reached, time to send it");
                continue
            }
        }
        ayah_debug_verbose("sendable observations.length: " + a.length);
        if (a.length > e) {
            var l = String(a);
            ayah_debug_verbose("before resetting timeObservationLastSent: " + o);
            o = s + t;
            ayah_debug_verbose("after resetting timeObservationLastSent: " + o);
            ayah_debug_verbose("would send these observations: " + l);
            od = encodeURIComponent(v(l + "!" + n, n));
            var d = protocol + "//n-cdn.areyouahuman.com/observe?" + "ak=" + n + "&pk=" + "d7abbedbc3ac5970e1f94b0f6a884d92bf6a2303" + "&AYAH_VERSION=1.1" + "&od=" + od;
            y(d);
            i += 1;
            if (i >= 5) {
                h()
            }
            ayah_debug_verbose("sent the observation number: " + i)
        }
    }

    function d(e) {
        f(e, true)
    }

    function f(e, n) {
        if (typeof n == "undefined") {
            n = false
        }
        var r, i, a, o, s, c, u = -1;
        e = e || window.event;
        if (e.pageX == null && e.clientX != null) {
            i = e.target && e.target.ownerDocument || document;
            a = i.documentElement;
            o = i.body;
            e.pageX = e.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0);
            e.pageY = e.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)
        }
        var h = new Date;
        var l = h.getTime() - t;
        if (n) {
            if (typeof e.touches != "undefined" && typeof e.touches[0] != "undefined" && typeof e.touches[0].pageX != "undefined" && typeof e.touches[0].pageY != "undefined") {
                b = {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY,
                    mousebutton: 1,
                    time: l
                }
            }
        } else {
            if (S) {
                for (var d = 0; d < A.length; ++d) {
                    if (A[d]) {
                        u = d;
                        ayah_debug_verbose("mouse button pressed: " + d)
                    }
                }
            }
            if (typeof e.pageX != "undefined" && typeof e.pageY != "undefined") {
                b = {
                    x: e.pageX,
                    y: e.pageY,
                    mousebutton: u,
                    time: l
                }
            }
        }
    }

    function g() {
        var e = b;
        if (!e) {} else {
            if (w && e.x == w.x && e.y == w.y) {} else {
                w = e;
                r.push(e)
            }
        }
    }

    function p() {
        var e = (new Date).getTime();
        var t = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
            var n = (e + Math.random() * 16) % 16 | 0;
            e = Math.floor(e / 16);
            return (t == "x" ? n : n & 7 | 8).toString(16)
        });
        return t
    }

    function v(e, t) {
        ayah_debug("od to encode: " + e);
        __hash = CryptoJS.SHA1(t).toString();
        __ePointer = 0;
        __chars = new Array;
        for (var n = 0; n < __hash.length; n++) {
            __chars.push(__hash.charCodeAt(n))
        }
        var r = new Array;
        a = e;
        for (var n = 0; n < a.length; n++) {
            var i = a.charCodeAt(n);
            var o = i + __chars[__ePointer];
            while (o > 126) o -= 95;
            r.push(String.fromCharCode(o));
            __ePointer = (__ePointer + 1) % __chars.length
        }
        e = String(r.join(""));
        ayah_debug("encoded str: " + e);
        return e
    }

    function m(e, t, n) {
        ayah_debug("attaching an event obj: " + e + ", type: " + t);
        if (e.attachEvent) {
            e["e" + t + n] = n;
            e[t + n] = function() {
                e["e" + t + n](window.event)
            };
            e.attachEvent("on" + t, e[t + n])
        } else e.addEventListener(t, n, false)
    }

    function _(e, t, n) {
        if (e.detachEvent) {
            e.detachEvent("on" + t, e[t + n]);
            e[t + n] = null
        } else e.removeEventListener(t, n, false)
    }

    function y(e) {
        if (window.XDomainRequest) {
            var t = new XDomainRequest;
            t.open("get", e);
            t.onload = function() {};
            t.send()
        } else {
            var t = Xhr();
            t.open("get", e);
            t.send()
        }
    }
    var b;
    var w;
    var x = 1e3 / 50;
    var A = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        S = 0;
    m(document, "mousedown", s);
    m(document, "mouseup", c);
    m(document, "mousemove", f);
    m(document, "touchmove", d);
    m(document, "touchstart", d);
    m(document, "touchend", d);
    window.onbeforeunload = u;
    var T = setInterval(g, x);
    var C = setInterval(l, 2 * 1e3);
    var H = setInterval(h, 300 * 1e3)
})();
var CryptoJS = CryptoJS || function(e, t) {
    var n = {},
        r = n.lib = {},
        i = function() {},
        a = r.Base = {
            extend: function(e) {
                i.prototype = this;
                var t = new i;
                e && t.mixIn(e);
                t.hasOwnProperty("init") || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                });
                t.init.prototype = t;
                t.$super = this;
                return t
            },
            create: function() {
                var e = this.extend();
                e.init.apply(e, arguments);
                return e
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
        o = r.WordArray = a.extend({
            init: function(e, n) {
                e = this.words = e || [];
                this.sigBytes = n != t ? n : 4 * e.length
            },
            toString: function(e) {
                return (e || c).stringify(this)
            },
            concat: function(e) {
                var t = this.words,
                    n = e.words,
                    r = this.sigBytes;
                e = e.sigBytes;
                this.clamp();
                if (r % 4)
                    for (var i = 0; i < e; i++) t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 24 - 8 * ((r + i) % 4);
                else if (65535 < n.length)
                    for (i = 0; i < e; i += 4) t[r + i >>> 2] = n[i >>> 2];
                else t.push.apply(t, n);
                this.sigBytes += e;
                return this
            },
            clamp: function() {
                var t = this.words,
                    n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
                t.length = e.ceil(n / 4)
            },
            clone: function() {
                var e = a.clone.call(this);
                e.words = this.words.slice(0);
                return e
            },
            random: function(t) {
                for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);
                return new o.init(n, t)
            }
        }),
        s = n.enc = {},
        c = s.Hex = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) {
                    var i = t[r >>> 2] >>> 24 - 8 * (r % 4) & 255;
                    n.push((i >>> 4).toString(16));
                    n.push((i & 15).toString(16))
                }
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - 4 * (r % 8);
                return new o.init(n, t / 2)
            }
        },
        u = s.Latin1 = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - 8 * (r % 4);
                return new o.init(n, t)
            }
        },
        h = s.Utf8 = {
            stringify: function(e) {
                try {
                    return decodeURIComponent(escape(u.stringify(e)))
                } catch (t) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(e) {
                return u.parse(unescape(encodeURIComponent(e)))
            }
        },
        l = r.BufferedBlockAlgorithm = a.extend({
            reset: function() {
                this._data = new o.init;
                this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = h.parse(e));
                this._data.concat(e);
                this._nDataBytes += e.sigBytes
            },
            _process: function(t) {
                var n = this._data,
                    r = n.words,
                    i = n.sigBytes,
                    a = this.blockSize,
                    s = i / (4 * a),
                    s = t ? e.ceil(s) : e.max((s | 0) - this._minBufferSize, 0);
                t = s * a;
                i = e.min(4 * t, i);
                if (t) {
                    for (var c = 0; c < t; c += a) this._doProcessBlock(r, c);
                    c = r.splice(0, t);
                    n.sigBytes -= i
                }
                return new o.init(c, i)
            },
            clone: function() {
                var e = a.clone.call(this);
                e._data = this._data.clone();
                return e
            },
            _minBufferSize: 0
        });
    r.Hasher = l.extend({
        cfg: a.extend(),
        init: function(e) {
            this.cfg = this.cfg.extend(e);
            this.reset()
        },
        reset: function() {
            l.reset.call(this);
            this._doReset()
        },
        update: function(e) {
            this._append(e);
            this._process();
            return this
        },
        finalize: function(e) {
            e && this._append(e);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(e) {
            return function(t, n) {
                return new e.init(n).finalize(t)
            }
        },
        _createHmacHelper: function(e) {
            return function(t, n) {
                return new d.HMAC.init(e, n).finalize(t)
            }
        }
    });
    var d = n.algo = {};
    return n
}(Math);
(function() {
    var e = CryptoJS,
        t = e.lib,
        n = t.WordArray,
        r = t.Hasher,
        i = [],
        t = e.algo.SHA1 = r.extend({
            _doReset: function() {
                this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            _doProcessBlock: function(e, t) {
                for (var n = this._hash.words, r = n[0], a = n[1], o = n[2], s = n[3], c = n[4], u = 0; 80 > u; u++) {
                    if (16 > u) i[u] = e[t + u] | 0;
                    else {
                        var h = i[u - 3] ^ i[u - 8] ^ i[u - 14] ^ i[u - 16];
                        i[u] = h << 1 | h >>> 31
                    }
                    h = (r << 5 | r >>> 27) + c + i[u];
                    h = 20 > u ? h + ((a & o | ~a & s) + 1518500249) : 40 > u ? h + ((a ^ o ^ s) + 1859775393) : 60 > u ? h + ((a & o | a & s | o & s) - 1894007588) : h + ((a ^ o ^ s) - 899497514);
                    c = s;
                    s = o;
                    o = a << 30 | a >>> 2;
                    a = r;
                    r = h
                }
                n[0] = n[0] + r | 0;
                n[1] = n[1] + a | 0;
                n[2] = n[2] + o | 0;
                n[3] = n[3] + s | 0;
                n[4] = n[4] + c | 0
            },
            _doFinalize: function() {
                var e = this._data,
                    t = e.words,
                    n = 8 * this._nDataBytes,
                    r = 8 * e.sigBytes;
                t[r >>> 5] |= 128 << 24 - r % 32;
                t[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296);
                t[(r + 64 >>> 9 << 4) + 15] = n;
                e.sigBytes = 4 * t.length;
                this._process();
                return this._hash
            },
            clone: function() {
                var e = r.clone.call(this);
                e._hash = this._hash.clone();
                return e
            }
        });
    e.SHA1 = r._createHelper(t);
    e.HmacSHA1 = r._createHmacHelper(t)
})();

function Xhr() {
    try {
        return new XMLHttpRequest
    } catch (e) {}
    try {
        return new ActiveXObject("Msxml3.XMLHTTP")
    } catch (e) {}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
    } catch (e) {}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
    } catch (e) {}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP")
    } catch (e) {}
    try {
        return new ActiveXObject("Microsoft.XMLHTTP")
    } catch (e) {}
    return null
}