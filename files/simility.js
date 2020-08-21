/* Retrieved from https://cdn.simility.com/b.js. */
! function() {
    function e(e, t) {
        for (var n = "", i = "#$%,-.0123456789:;<=>@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{|}Â¢Â£Â¤Â¥Â¦Â§Â©Â®ÂµÂ¶Ã€ÃÃ‚ÃƒÃ„ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃ’Ã“Ã”Ã•Ã–Ã™ÃšÃ›ÃœÃ Ã¡Ã¢Ã£Ã¤Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã²Ã³Ã´Ã¶Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿Ä€ÄÄ‚ÄƒÄ†Ä‡ÄˆÄ‰ÄŠÄ‹ÄŒÄÄŽÄÄ’Ä“Ä”Ä•ÄœÄÄžÄŸÄ Ä¡Ä¤Ä¥Ä´ÄµÄ¹ÄºÅƒÅ„Å‡ÅˆÅŽÅÅÅ‘Å’Å“Å”Å•Å˜Å™ÅšÅ›ÅœÅÅ¤Å¥Å¦Å§Å¨Å©ÅªÅ«Å¬Å­Å°Å±Å´ÅµÅ¶Å·Å¹ÅºÅ»Å¼Å½Å¾Æ‚ÆƒÆ†Æ‹ÆŒÆŽÆÆÆœÆŸÆ©Æ±ÆµÆ¶ÇÇŽÇÇÇ‘Ç’Ç“Ç”È²È³È¸È¹Ê˜ÊžÎ†ÎˆÎ‰ÎŠÎŒÎÎ”Î˜Î›Î Î¦Î¨Î©Î±Î²Î³Î´ÓªÐ„È»È¼", c = 0, s = 0; c < t.length; c++) {
            var o = t.charCodeAt(c) ^ 10 & e.charCodeAt(s);
            ++s == e.length && (s = 0), t.charCodeAt(c) > 127 ? (n += "&", n += i.charAt(o >> 8 & 255), n += i.charAt(255 & o)) : (n += "0123456789abcdef".charAt(o >> 4 & 15), n += "0123456789abcdef".charAt(15 & o))
        }
        console.log(n);
        return n
    }

    function t(e) {
        var t = !1;
        try {
            Math.random() && (t = !0)
        } catch (e) {}
        var n = [];
        if (t)
            for (var i = 0; i < e; i++) n[i] = Math.random();
        else {
            var c = window.crypto || window.msCrypto;
            if (c) {
                var s = c.getRandomValues(new Uint16Array(e));
                for (i = 0; i < e; i++) n[i] = s[i] / 65536
            }
        }
        return n
    }

    function n(e) {
        try {
            var t = Math.floor(e);
            if (t) return t
        } catch (e) {}
        return e << 0
    }

    function c(e) {
        return null == e || "undefined" === e
    }

    function s(e) {
        if (!c(e))
            for (i = 0; i < e.length; i++) {
                var t = e[i].getAttribute("src");
                if (!c(t) && -1 != t.indexOf("https://cdn.simility.com/b.js")) return e[i]
            }
        return null
    }

    function o(e) {
        if (!c(e)) {
            var t = e.split(" "),
                n = t[4],
                i = t[7];
            if (("host" === i || "srflx" === i) && "0.0.0.0" !== n) return n
        }
        return "unknown"
    }

    function a(e) {
        for (var i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", c = "", s = t(e), o = 0; o < e; o++) {
            var a = n(s[o] * i.length);
            c += i.substring(a, a + 1)
        }
        return c
    }

    function r(e, t) {
        var n, i, c = (n = e, (i = document.createElement("a")).href = n, i),
            s = c.hostname.split(".");
        if (3 === s.length && "simility" === s[1]) {
            var o = s[0].split("-"),
                a = null;
            o.length > 1 && (a = o[o.length - 1]), a !== t && (a && 2 === a.length ? o[o.length - 1] = t : o.push(t), s[0] = o.join("-"), c.hostname = s.join("."), e = c.toString().replace(/\/$/, ""))
        }
        return e
    }

    function d(e) {
        var t = 0;
        if (0 === e.length) return t;
        for (var n = 0; n < e.length; n++) {
            t = (t << 5) - t + e.charCodeAt(n), t &= t
        }
        return t
    }

    function l(e, t, n) {
        try {
            var i = function(e, t, n) {
                var i = "";
                if (n) {
                    var c = new Date;
                    c.setTime(c.getTime() + 24 * n * 60 * 60 * 1e3), i = "; expires=" + c.toGMTString()
                }
                var s = e + "=" + t + i + ";path=/";
                try {
                    "https:" === window.location.protocol && (s += "; secure")
                } catch (e) {}
                return s
            }(e, t, n);
            document.cookie = i
        } catch (e) {}
    }

    function u(e) {
        try {
            return function(e, t) {
                for (var n = t + "=", i = e.split(";"), c = 0; c < i.length; c++) {
                    for (var s = i[c];
                        " " == s.charAt(0);) s = s.substring(1, s.length);
                    if (0 == s.indexOf(n)) return s.substring(n.length, s.length)
                }
                return null
            }(document.cookie, e)
        } catch (e) {}
        return null
    }

    function y() {
        var e, n, i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
            c = [];
        c[8] = c[13] = c[18] = c[23] = "-", c[14] = "4";
        var s = t(36);
        for (e = 0; e < 36; e++) c[e] || (n = 0 | 16 * s[e], c[e] = i[19 == e ? 3 & n | 8 : n]);
        return c.join("")
    }

    function f(e) {
        var t;
        if (window.navigator.cookieEnabled) try {
            t = u(e)
        } catch (e) {}
        if (c(t)) try {
            t = window.localStorage.getItem(e)
        } catch (e) {}
        return t
    }

    function m(e, t) {
        if (window.navigator.cookieEnabled) try {
            l(e, t, 30)
        } catch (e) {}
        try {
            window.localStorage.setItem(e, t)
        } catch (e) {}
    }

    function p(e, t, n) {
        "POST" == t && (e = e + "&s=" + encodeURIComponent(n));
        var i = new Image;
        i.style.display = "none", i.style.visibility = "hidden", i.src = e
    }

    function h(e, t, n, i) {
        var s = function() {
            var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"];
            if (window.XMLHttpRequest) return new XMLHttpRequest;
            if (window.ActiveXObject)
                for (var t = 0; t < e.length; t++) try {
                    return new ActiveXObject(e[t])
                } catch (e) {}
            return !1
        }();
        if (s) try {
            s.onreadystatechange = function() {
                if (4 == s.readyState && 200 == s.status && !c(i)) {
                    var e = 30;
                    try {
                        var t = s.getResponseHeader("X-Sim-Client-P");
                        c(t) || (e = parseInt(t))
                    } catch (e) {}
                    i(s.responseText, e)
                }
            }, s.open(t, e, !0), "withCredentials" in s && (s.withCredentials = !0), s.send(n)
        } catch (s) {
            if (window.XDomainRequest) try {
                xdr = new XDomainRequest, xdr.onload = function() {
                    c(i) || i(xdr.responseText, 30)
                }, xdr.open(t, e), xdr.send(n)
            } catch (i) {
                p(e, t, n)
            } else p(e, t, n)
        } else p(e, t, n)
    }

    function v() {
        if (1 == v.init) return v.instance;
        v.prototype.start = function() {
            v.running = !0
        }, v.prototype.stop = function() {
            v.running = !1
        }, v.prototype.reset = function() {
            v.running = !0, v.k = [], v.kc = [], v.pt = [], v.rt = []
        }, v.getEntry = function() {
            return {
                id: y(),
                keys: v.k,
                keyCodes: v.kc,
                pressTimes: v.pt,
                releaseTimes: v.rt
            }
        }, v.prototype.addElement = function() {
            return v.addElement.apply(this, arguments)
        }, v.prototype.removeElement = function() {
            return v.removeElement.apply(this, arguments)
        }, v.prototype.isElementListed = function() {
            return v.isElementListed.apply(this, arguments)
        }, v.init = !0, v.running = !0, v.d = window.document, v.te = {}, v.gkl = [49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 192, 189, 187, 219, 221, 220, 186, 222, 188, 190, 191], v.fkm = {
            8: !0,
            13: !0,
            16: !0,
            32: !0,
            20: !0,
            27: !0
        }, v.gkm = {};
        for (var e = 0; e < v.gkl.length; e++) v.gkm[v.gkl[e]] = !0;
        v.k = [], v.kc = [], v.pt = [], v.rt = [], v.instance = this, v.addElement = function(e) {
            e && (v.te[e] = !0)
        }, v.removeElement = function(e) {
            e && delete v.te[e]
        }, v.isElementListed = function(e) {
            return v.te[e]
        }, v.handleKeyDown = function(e) {
            var t = (new Date).getTime();
            if (v.running && 1 == v.isElementListed(e.target.id) && v.gkm[e.keyCode] && 1 != v.fkm[e.keyCode]) return v.k.push(e.key), v.kc.push(e.keyCode), void v.pt.push(t)
        }, v.handleKeyUp = function(e) {
            var t = (new Date).getTime();
            v.running && 1 == v.isElementListed(e.target.id) && v.gkm[e.keyCode] && 1 != v.fkm[e.keyCode] && v.rt.push(t)
        }, v.d.addEventListener ? (v.d.addEventListener("keydown", v.handleKeyDown), v.d.addEventListener("keyup", v.handleKeyUp)) : v.d.attachEvent && (v.d.attachEvent("onkeydown", v.handleKeyDown), v.d.attachEvent("onkeyup", v.handleKeyUp))
    }
    var g = null,
        w = [];

    function b(t, n, i, s) {
        if ("" != t.baseWSUrl) {
            var o = "";
            try {
                o = JSON.stringify(n)
            } catch (e) {
                o = JSON.stringify({
                    e: e.message
                })
            }
            var a = t.baseWSUrl + "/wss?c=" + encodeURIComponent(t.sync.cd2) + "&ec=" + encodeURIComponent(t.pb) + "&cl=0";
            c(t.sync.cd3) || (a = a + "&si=" + encodeURIComponent(t.sync.cd3)), c(i) || (a = a + "&r=" + encodeURIComponent(i)), c(t.startTime) || (a = a + "&st=" + encodeURIComponent(t.startTime));
            var r = o;
            if (!0 === t.encryptPayload && (r = e(t.pb, o)), c(r)) return;
            var d = function(e) {
                if (null == g || g.readyState === WebSocket.CLOSED || g.readyState === WebSocket.CLOSING) {
                    var t = new WebSocket(e);
                    t.onopen = function(e) {
                        for (; w.length > 0;) t.send(w.pop())
                    }, g = t
                }
                return g
            }(a);
            d.readyState !== WebSocket.OPEN ? w.push(r) : d.send(r)
        }
    }
    var x = {
        isActive: !1,
        timesArray: [],
        idleTimeout: 5e3,
        currentIdleTime: 0,
        monitorStateRate: 250,
        isIdle: !1,
        visibilityChangeEventName: void 0,
        hiddenPropName: void 0,
        tsDataSentRate: 1e4,
        maxTsDataToRecord: 18e5,
        startTimer: function() {
            x.isActive || (x.timesArray.push({
                start: (new Date).getTime(),
                stop: void 0
            }), x.isActive = !0)
        },
        pauseTimer: function() {
            if (x.isActive) {
                if (void 0 === x.timesArray || 0 === x.timesArray.length) return;
                void 0 === x.timesArray[x.timesArray.length - 1].stop && (x.timesArray[x.timesArray.length - 1].stop = (new Date).getTime()), x.isActive = !1
            }
        },
        getTimeSpentOnPage: function() {
            if (void 0 !== x.timesArray) {
                for (var e = 0, t = 0; t < x.timesArray.length; t++) {
                    var n = x.timesArray[t].start,
                        i = x.timesArray[t].stop;
                    void 0 === i && (i = (new Date).getTime()), e += i - n
                }
                return Number(e)
            }
        },
        init: function() {
            void 0 !== document.hidden ? (x.hiddenPropName = "hidden", x.visibilityChangeEventName = "visibilitychange") : void 0 !== document.mozHidden ? (x.hiddenPropName = "mozHidden", x.visibilityChangeEventName = "mozvisibilitychange") : void 0 !== document.msHidden ? (x.hiddenPropName = "msHidden", x.visibilityChangeEventName = "msvisibilitychange") : void 0 !== document.webkitHidden && (x.hiddenPropName = "webkitHidden", x.visibilityChangeEventName = "webkitvisibilitychange"), document.addEventListener(x.visibilityChangeEventName, function() {
                document[x.hiddenPropName] ? x.pauseTimer() : x.startTimer()
            }, !1), window.addEventListener("blur", function() {
                x.pauseTimer()
            }), window.addEventListener("focus", function() {
                x.startTimer()
            }), document.addEventListener("mousemove", function() {
                x.resetIdleCounter()
            }), document.addEventListener("keyup", function() {
                x.resetIdleCounter()
            }), document.addEventListener("touchstart", function() {
                x.resetIdleCounter()
            }), window.addEventListener("scroll", function() {
                x.resetIdleCounter()
            }), setInterval(function() {
                x.monitorState()
            }, x.monitorStateRate)
        },
        resetIdleCounter: function() {
            x.isIdle && x.startTimer(), x.isIdle = !1, x.currentIdleTime = 0
        },
        monitorState: function() {
            !1 === x.isIdle && x.currentIdleTime > x.idleTimeout ? (x.isIdle = !0, x.pauseTimer()) : x.currentIdleTime += x.monitorStateRate
        }
    };

    function T() {
        this.version = 1.913, this.timeout = 2e3, this.simUUIDName = "_sim_uuid", this.simSessionIdName = "_sim_si", this.simFlashDataKey = "_sim_fl", this.simLocalIpDataKey = "_sim_li", this.baseHTTPUrl = "https://b-us.simility.com", this.baseWSUrl = "", this.cDomain = ".simility.com", this.pb = null, this.startTime = (new Date).getTime(), this.clientCallbackFunc = function(e) {}, this.autoExecute = !0, this.sync = {}, this.async = {}, this.swfUrl = "https://cdn.simility.com/b.swf", this.async.swfData = {}, this.swfInvoked = !1, this.zone = "", this.customerContext = null, this.similityLiteLevel = 1, this.collectOptions = "", this.useWs = !1, this.executionCounter = 1, this.executionStatus = "RUNNING", this.timeTakenInMS = 0, this.statusCallbackFunc = function(e) {}, this.statusCallbackExecuted = !1, this.statusCallbackTimeout = 1e4, this.ks = new v, this.cmid = void 0, this.pCollectIds = ["e8e6b76c-da76-4db4-b1b2-2b8b4622384d"], copy = this
    }
    T.prototype = {
        constructor: T
    };
    var C, k, I = function() {
        var e = v.getEntry();
        !c(e) && !c(e.keys) && e.keys.length > 0 && (! function(e, t) {
            var n = document.getElementById(t);
            !c(n) && e.ks.isElementListed(t) && (e.ks.removeElement(t), n.removeEventListener("blur", I))
        }($, $.customerContext.target_ks_element), $.ks.reset(), J($, {
            ks: JSON.stringify(e)
        }, 1, null))
    };

    function E(e) {
        if (!c(e.customerContext)) {
            var t = e.customerContext.target_ks_element;
            c(t) || function(e, t) {
                var n = document.getElementById(t);
                c(n) || e.ks.isElementListed(t) || (e.ks.addElement(t), n.addEventListener("blur", I))
            }(e, t)
        }
    }

    function S(e) {
        "complete" === document.readyState || "loaded" === document.readyState || "interactive" === document.readyState ? E(e) : document.addEventListener("DOMContentLoaded", function() {
            E(e)
        })
    }

    function O(e, t) {
        var n = {};
        "DONE" !== e.executionStatus && "TIMEOUT" !== e.executionStatus || e.statusCallbackExecuted || (n.time_taken_in_ms = e.timeTakenInMS, n.status = e.executionStatus, t(n), e.statusCallbackExecuted = !0)
    }

    function A(e, t, n, i) {
        if (N(copy, n, i), D(e), window.btoa && !c(e)) try {
            l(copy.simFlashDataKey, btoa(e), void 0)
        } catch (e) {}
    }

    function D(e) {
        try {
            JSON.parse(e, function(e, t) {
                e && (copy.async.swfData[e] = t)
            });
            var t = new Date;
            if (copy.async.swfData.sd24 = t.getTimezoneOffset(), "string" == typeof copy.async.swfData.sd24) try {
                copy.async.swfData.sd24 = parseInt(copy.async.swfData.sd24)
            } catch (e) {}
            copy.async.swfData.sd6 = window.navigator.language, J(copy, copy.async.swfData, 2, function() {
                G(copy)
            })
        } catch (e) {
            copy.async.swfData.fde = e.message, G(copy)
        }
        copy.async.swfData.fdd = !0, copy.async.fdd = !0, copy.swfInvoked = !1
    }

    function L(e) {
        var t = u(e.simFlashDataKey);
        if (c(t) || !window.atob)
            if (e.swfInvoked) G(e);
            else {
                e.swfInvoked = !0, window.simC913ef8c8e0fe4fbe = function() {
                    var t = copy.baseHTTPUrl + "/i?c=" + encodeURIComponent(copy.sync.cd2);
                    return c(copy.sync.sc) || (t = t + "&sc=" + encodeURIComponent(copy.sync.sc)), c(e.sync.uc) || (t = t + "&uc=" + encodeURIComponent(copy.sync.uc)), t
                }, window.sima60e0e97b367d298 = A;
                var n, i, s, o, a = window.navigator;
                if (e.async.fde = "fdr1", e.async.fdd = !1, !a.mimeTypes["application/x-shockwave-flash"]) return e.async.fde = "fdr2", e.async.fdd = !0, void G(e);
                try {
                    var r = document.createElement("object");
                    r.height = 1, r.width = 1, r.type = "application/x-shockwave-flash", r.data = e.swfUrl, r.id = y(), n = r, i = "allowscriptaccess", s = "always", (o = document.createElement("param")).name = i, o.value = s, n.appendChild(o);
                    var d = document.createElement("embed");
                    d.src = e.swfUrl, d.height = 1, d.width = 1, r.appendChild(d), document.body.appendChild(r)
                } catch (t) {
                    e.async.fde = t.message, e.async.fdd = !0, G(e)
                }
            }
        else D(atob(t))
    }

    function P(e) {
        c(window.similityZone) || (e.baseHTTPUrl = r(e.baseHTTPUrl, window.similityZone), e.zone = window.similityZone), c(e.customerContext) || c(e.customerContext.zone) || (e.baseHTTPUrl = r(e.baseHTTPUrl, e.customerContext.zone), e.zone = e.customerContext.zone)
    }

    function U(e) {
        if (c(window.similityRequestEndpoint) || (e.baseHTTPUrl = window.similityRequestEndpoint), !c(e.customerContext)) {
            var t = e.customerContext.requestEndpoint || e.customerContext.request_endpoint;
            c(t) || (e.baseHTTPUrl = t)
        }
    }

    function _(e) {
        return !c(e.customerContext)
    }

    function R(e, t) {
        return t ? (e.sync.sc = y(), N(e, e.sync.sc, null), e.sync.cd3 = e.sync.sc, e.sync.sc) : (e.sync.cd3 = e.sync.cd3 || e.sync.sc || u(e.simSessionIdName), e.sync.cd3 || R(e, !0))
    }

    function N(e, t, n) {
        window.navigator.cookieEnabled && (c(t) || (e.sync.sc = t, function(e, t) {
            if (window.navigator.cookieEnabled) try {
                l(e, t, void 0)
            } catch (e) {}
        }(e.simSessionIdName, t)), c(n) || (e.sync.uc = n, m(e.simUUIDName, n)))
    }

    function F(e) {
        e.sync.sc = function(e) {
            var t;
            if (window.navigator.cookieEnabled) try {
                t = u(e)
            } catch (e) {}
            return t
        }(e.simSessionIdName), e.sync.uc = f(e.simUUIDName), c(e.sync.sc) && (e.sync.sc = y()), c(e.sync.uc) && (e.sync.uc = y()), N(e, e.sync.sc, e.sync.uc)
    }

    function H(e) {
        e.sync.bd23 = !1, e.sync.bd22 = !1;
        try {
            var t = new Date;
            if (e.sync.sd24 = t.getTimezoneOffset(), "string" == typeof e.sync.sd24) try {
                e.sync.sd24 = parseInt(e.sync.sd24)
            } catch (e) {}
            e.sync.sd25 = t.getTime(),
                function(e, t) {
                    try {
                        for (var n = (new Date).getTime(); n < t + 1;) n = (new Date).getTime();
                        (n - t) % 100 == 0 && (e.sync.bd22 = !0)
                    } catch (e) {}
                }(e, e.sync.sd25)
        } catch (e) {}
        e.sync.bd19 = !0;
        var n = window.navigator;
        if (e.sync.sd2 = !0, "boolean" == typeof n.cookieEnabled ? e.sync.sd2 = n.cookieEnabled : "string" == typeof n.cookieEnabled && "0" === n.cookieEnabled && (e.sync.sd2 = !1), e.sync.sd4 = "0", "boolean" == typeof n.doNotTrack) e.sync.sd4 = n.doNotTrack ? "1" : "0";
        else if ("number" == typeof n.doNotTrack) try {
            e.sync.sd4 = n.doNotTrack.toString()
        } catch (e) {}
        e.sync.sd6 = n.language, e.sync.sd7 = n.languages;
        try {
            if ("string" == typeof n.languages) e.sync.sd7 = [n.languages];
            else
                for (var i in e.sync.sd7 = [], n.languages) n.languages.hasOwnProperty(i) && e.sync.sd7.push(n.languages[i])
        } catch (t) {
            e.sync.sd7 = [n.language]
        }
        if (e.sync.sd8 = n.maxTouchPoints, "string" == typeof n.maxTouchPoints) try {
            e.sync.sd8 = parseInt(n.maxTouchPoints)
        } catch (t) {
            e.sync.sd8 = 0
        }
        e.sync.sd13 = n.userAgent, e.sync.sd10 = n.platform, e.sync.sd14 = n.vendor;
        var s = window.screen;
        if ("string" == typeof s.height) try {
            e.sync.sd16 = parseInt(s.availHeight), e.sync.sd17 = parseInt(s.availWidth), e.sync.sd18 = parseInt(s.height), e.sync.sd19 = parseInt(s.width), e.sync.sd20 = parseInt(s.colorDepth), e.sync.sd21 = parseInt(s.pixelDepth)
        } catch (e) {} else e.sync.sd16 = s.availHeight, e.sync.sd17 = s.availWidth, e.sync.sd18 = s.height, e.sync.sd19 = s.width, e.sync.sd20 = s.colorDepth, e.sync.sd21 = s.pixelDepth;
        if (e.sync.bd14 = !!window.openDatabase, "string" == typeof window.history.length) try {
            e.sync.bd16 = parseInt(window.history.length)
        } catch (e) {} else e.sync.bd16 = window.history.length;
        try {
            e.sync.bd17 = function() {
                var e = document.createElement("canvas");
                if (!e || !e.getContext("2d")) return null;
                var t = e.getContext("2d"),
                    n = "QmWnEbRv TcYxUz IlOkPjAhSgDf";
                return t.textBaseline = "top", t.font = "15px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(122, 1, 66, 22), t.fillStyle = "#069", t.fillText(n, 3, 14), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 5, 18), d(e.toDataURL().replace("data:image/png;base64,", "")).toString()
            }()
        } catch (e) {}
        try {
            c(document.referrer) || (e.sync.bd18 = document.referrer.substring(0, 200))
        } catch (e) {}
    }

    function K(e) {
        var t, n = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
            i = [],
            s = document.createElement("canvas");
        try {
            for (var o = 0; o < n.length; o++)
                if (s) {
                    var a = s.getContext(n[o]);
                    a && (i.push(n[o]), t = t || a)
                }
        } catch (e) {}
        e.sync.wg1 = !!t, e.sync.wg2 = i;
        try {
            c(t) || ("function" == typeof t.getParameter && (e.sync.wg6 = t.getParameter(t.VENDOR), e.sync.wg7 = t.getParameter(t.RENDERER)), e.sync.wg27 = !!t.getContextAttributes().antialias, e.sync.wg3 = function(e) {
                try {
                    if (e) {
                        e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
                        var t = e.createBuffer();
                        e.bindBuffer(e.ARRAY_BUFFER, t), e.bufferData(e.ARRAY_BUFFER, new Float32Array([-.5, -.5, .5, -.5, -.5, .5, .5, .5]), e.STATIC_DRAW);
                        var n = e.createProgram(),
                            i = e.createShader(e.VERTEX_SHADER);
                        e.shaderSource(i, "attribute vec2 aVertexPosition;varying vec2 vTexCoord;void main(){vTexCoord = aVertexPosition;gl_Position = vec4(aVertexPosition, 0, 1);}"), e.compileShader(i);
                        var c = e.createShader(e.FRAGMENT_SHADER);
                        if (e.shaderSource(c, "precision mediump float;varying vec2 vTexCoord;uniform vec2 uOffset;void main() {gl_FragColor = vec4(vTexCoord, 0, 1);}"), e.compileShader(c), e.attachShader(n, i), e.attachShader(n, c), e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) throw e.getError();
                        if (e.useProgram(n), n.vertexPosAttrib = e.getAttribLocation(n, "aVertexPosition"), n.offsetUniform = e.getUniformLocation(n, "uOffset"), e.enableVertexAttribArray(n.vertexPosArray), e.vertexAttribPointer(n.vertexPosAttrib, 2, e.FLOAT, !1, 0, 0), e.uniform2f(n.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, 4), e.canvas) return d(e.canvas.toDataURL().replace("data:image/png;base64,", "")).toString()
                    }
                } catch (e) {}
                return null
            }(t))
        } catch (e) {}
    }

    function M(e) {
        var t = u(e.simLocalIpDataKey);
        return !c(t) && window.atob ? (e.async.fd10 = e.sync.fd10 = atob(t), e.async.fd10) : null
    }

    function W(e) {
        return "" !== e.host && "" !== e.srflx
    }

    function z(e, t, n, i) {
        if (e.async.fd10 = function(e, t) {
                return t ? e.host + "," + e.srflx : e.host
            }(t, n), !c(e.async.fd10)) {
            if (window.btoa) try {
                l(e.simLocalIpDataKey, btoa(e.async.fd10), void 0)
            } catch (e) {}
            if (!i) {
                var s = (new Date).getTimezoneOffset();
                if ("string" == typeof s) try {
                    s = parseInt(s)
                } catch (e) {}
                J(e, {
                    fd10: e.async.fd10,
                    sd24: s
                }, 4, function() {
                    G(e)
                })
            }
        }
    }

    function B(e) {
        return !c(e) && (4 === e.split(".").length || e.split(":").length > 3)
    }

    function V(e, t) {
        if (c(e)) return !1;
        if (!t) return B(e);
        var n = e.split(","),
            i = n[0],
            s = n[1];
        return !(c(i) || c(s) || !B(i) || !B(s))
    }

    function X(e, t) {
        var n = !1,
            i = M(e);
        if (c(i) || !V(i, !0)) try {
            var s, a = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection,
                r = {
                    host: "",
                    srflx: ""
                },
                d = [];
            if (d = [{
                    urls: "stun:35.226.14.63:3478"
                }], "eu" === e.zone && (d = [{
                    urls: "stun:35.205.222.237:3478"
                }]), a) {
                (s = new a({
                    iceServers: d
                })).createDataChannel("", {
                    reliable: !1
                }), s.onicecandidate = function(i) {
                    if (i.candidate) {
                        var c = "a=" + i.candidate.candidate;
                        c.indexOf("host") > -1 ? r.host = o(c) : c.indexOf("srflx") > -1 && (r.srflx = o(c)), W(r) && 0 == n && (n = !0, z(e, r, !0, t), s.close())
                    }
                };
                var l = !!window.Promise;
                l && s.createOffer().then(function(e) {
                    s.setLocalDescription(e)
                }, function(t) {
                    n = !0, G(e);
                    try {
                        s.close()
                    } catch (e) {}
                }).catch(function(e) {
                    l = !1;
                    try {
                        s.close()
                    } catch (e) {}
                }), l || s.createOffer(function(e) {
                    s.setLocalDescription(e)
                }, function(t) {
                    n = !0, G(e);
                    try {
                        s.close()
                    } catch (e) {}
                }), setTimeout(function() {
                    if (!n) try {
                        for (var i = s.localDescription.sdp.split("\n"), a = 0; a < i.length; a++) c(i[a]) || 0 !== i[a].indexOf("a=candidate:") || (i[a].indexOf("host") > -1 ? r.host = o(i[a]) : i[a].indexOf("srflx") > -1 && (r.srflx = o(i[a])));
                        W(r) && (n = !0, z(e, r, !0, t)), s.close()
                    } catch (e) {}
                    n || G(e)
                }, 1e3)
            } else n = !0, G(e)
        } catch (t) {
            n = !0, G(e)
        } else t || J(e, {
            fd10: i
        }, 1, function() {
            n = !0, G(e)
        })
    }

    function q(e, t, n) {
        if (!k || (new Date).getTime() - k > 50) {
            if (k = (new Date).getTime(), e.async[e.async.currentOperatingKey] && 20 == e.async[e.async.currentOperatingKey].length) {
                if (C += 1, e.useWs && window.WebSocket ? b(e, {
                        mm1: e.async[e.async.currentOperatingKey]
                    }, 1) : J(e, {
                        mm1: e.async[e.async.currentOperatingKey]
                    }, 1, null), 7 == C) return document.onmousemove = null, document.onclick = null, !0;
                e.async.currentOperatingKey = a(6), e.async[e.async.currentOperatingKey] = []
            }
            var i, c;
            t.pageX || t.pageY ? (i = t.pageX, c = t.pageY, e.async[e.async.currentOperatingKey].push([k, i, c, n])) : (t.clientX || t.clientY) && (i = t.clientX + document.documentElement.scrollLeft, c = t.clientY + document.documentElement.scrollTop, e.async[e.async.currentOperatingKey].push([k, i, c, n]))
        }
        return !0
    }

    function J(t, n, i, s) {
        if (_(t) && function(e) {
                return !c(e.sync.cd2)
            }(t)) {
            var o = "";
            try {
                o = JSON.stringify(n)
            } catch (e) {
                o = JSON.stringify({
                    e: e.message
                })
            }
            var a = t.baseHTTPUrl + "/b?c=" + encodeURIComponent(t.sync.cd2) + "&v=" + encodeURIComponent(t.version) + "&ec=" + encodeURIComponent(t.pb) + "&cl=0";
            c(t.sync.cd3) || (a = a + "&si=" + encodeURIComponent(t.sync.cd3)), c(t.sync.sc) || (a = a + "&sc=" + encodeURIComponent(t.sync.sc)), c(t.sync.uc) || (a = a + "&uc=" + encodeURIComponent(t.sync.uc)), c(t.customerEvents) || (a = a + "&e=" + encodeURIComponent(t.customerEvents)), c(t.cDomain) || (a = a + "&cd=" + encodeURIComponent(t.cDomain)), c(i) || (a = a + "&r=" + encodeURIComponent(i)), c(t.startTime) || (a = a + "&st=" + encodeURIComponent(t.startTime)), c(t.cmid) || (a = a + "&cmid=" + encodeURIComponent(t.cmid));
            var r = o;
            !0 === t.encryptPayload && (r = e(t.pb, o)), c(r) || (t.encryptPayload && r.length < 7e3 ? h(a = a + "&s=" + encodeURIComponent(r), "GET", null, s) : h(a, "POST", r, s))
        }
    }

    function G(e) {
        e.executionCounter = e.executionCounter - 1, e.executionCounter <= 0 && (j(e, "DONE"), c(e.statusCallbackFunc) || "function" != typeof e.statusCallbackFunc || O(e, e.statusCallbackFunc))
    }

    function j(e, t) {
        e.timeTakenInMS = Math.abs((new Date).getTime() - copy.startTime), e.executionStatus = t
    }

    function Y(e) {
        F(e), H(e), K(e),
            function(e) {
                e.sync.pd1 = [];
                for (var t = window.navigator.plugins, n = 0; n < t.length; n++) {
                    var i = t[n],
                        c = null;
                    if (void 0 !== i.version) c = i.version;
                    else if (-1 !== i.name.indexOf("Google Talk Plugin")) {
                        var s = i.description.lastIndexOf("Version");
                        c = i.description.slice(s + 8)
                    } else -1 !== i.name.indexOf("Silverlight Plug-In") ? c = i.description : -1 !== i.description.indexOf("Widevine") ? (s = i.description.lastIndexOf("on:"), c = i.description.slice(s + 4, i.description.length - 1)) : -1 !== i.description.indexOf("Flash") ? (s = i.description.lastIndexOf("h"), c = i.description.slice(s + 2)) : -1 !== i.filename.indexOf("AdobePDFViewer") ? (s = i.description.lastIndexOf("Version"), c = i.description.slice(s + 8)) : -1 !== i.description.indexOf("Firefox and Netscape") ? (s = i.description.lastIndexOf("Netscape"), c = i.description.slice(s + 9)) : -1 !== i.description.indexOf("VLC media player") ? (s = i.description.lastIndexOf("Plugin"), c = i.description.slice(s + 7)) : -1 !== i.description.indexOf("Coupon Printer") ? (s = i.description.lastIndexOf("Printer"), c = i.description.slice(s + 8)) : -1 !== i.description.indexOf("Skype Web") ? c = i.description : -1 !== i.description.indexOf("Shapes -") ? (s = i.description.lastIndexOf("-"), c = i.description.slice(s + 2)) : -1 !== i.name.indexOf("VLC Multimedia") ? (s = i.name.lastIndexOf("Videos"), c = i.name.slice(s + 7, i.name.length - 1)) : -1 !== i.name.indexOf("QuickTime") && (s = i.name.lastIndexOf("-in"), c = i.name.slice(s + 4));
                    for (var o = null, a = 0; a < i.length; a++) o = o ? o + "," + i[a].type : i[a].type;
                    var r = i.name;
                    i.name && "function" == typeof String.prototype.replace && (r = r.replace(/[^\w\s]/gi, "")), e.sync.pd1.push([o, i.filename, r, c])
                }
            }(e);
        J(e, e.sync, 0, function(t, n) {
            var i = {};
            if (!c(t) && "" !== t) {
                var s = JSON.parse(t);
                N(e, s.session, s.uuid),
                    function(e, t, n) {
                        try {
                            if (!c(t)) {
                                var i = t;
                                if (c(t.device_id) || 0 == t.device_id.length) return;
                                i.s = e, i.e = (new Date).getTime() + 60 * n * 1e3, i = JSON.stringify(i), window.btoa && (i = btoa(i)), m("_sim_cr", i)
                            }
                        } catch (e) {}
                    }(e.sync.cd3, s.data, n), i = s.data
            }
            G(e), e.clientCallbackFunc(i)
        })
    }

    function Z() {
        return $.collectOptions.indexOf("p") > -1 || $.pCollectIds.indexOf($.sync.cd2) > -1
    }

    function Q(e) {
        ! function(e) {
            e.executionCounter = 1, e.executionStatus = "RUNNING", e.timeTakenInMS = 0, e.startTime = (new Date).getTime(), e.statusCallbackExecuted = !1
        }(e),
        function(e) {
            if (e.customerContext) {
                var t = e.customerContext;
                e.sync.cd3 = t.sessionId || t.session_id || R(e, !1), e.sync.cd2 = t.clientId || t.apiKey || t.api_key || t.customer_id || e.sync.cd2, c(t.similityLite) || (e.sync.cd1 = t.similityLite), c(e.sync.cd1) && (e.sync.cd1 = t.simility_lite), e.sync.cd4 = t.metadata || e.sync.cd4, e.sync.cd5 = t.userId || t.user_id || e.sync.cd5, e.clientCallbackFunc = t.callbackFunc || t.callback_func || e.clientCallbackFunc, e.statusCallbackFunc = t.statusCallback || t.status_callback || e.statusCallbackFunc, e.statusCallbackTimeout = t.status_callback_timeout || t.statusCallbackTimeout || e.statusCallbackTimeout, e.sync.cd6 = JSON.stringify(t.transactionInfo) || JSON.stringify(t.transaction_info) || e.sync.cd6, e.sync.cd7 = t.transactionSubCustomerId || t.transaction_sub_customer_id || e.sync.cd7, e.customerEvents = t.event_type || t.event_types || e.customerEvents, c(t.encrypt) || (e.encryptPayload = t.encrypt), (c(e.encryptPayload) || !0 === e.encryptPayload) && (e.encryptPayload = !0, e.pb = a(16)), c(t.simility_lite_level) || (e.similityLiteLevel = t.simility_lite_level), c(t.collect_options) || "string" != typeof t.collect_options || (e.collectOptions = t.collect_options.toLowerCase()), c(t.use_ws) || (e.useWs = t.use_ws), c(e.sync.cd1) || !0 === e.sync.cd1 ? (e.sync.cd1 = !0, c(e.similityLiteLevel) && (e.similityLiteLevel = 1)) : !1 === e.sync.cd1 && (e.similityLiteLevel = 0), 0 === e.similityLiteLevel && (e.sync.cd1 = !1, -1 == e.collectOptions.indexOf("f") && (e.collectOptions = e.collectOptions.concat("f"))), e.similityLiteLevel > 0 && e.similityLiteLevel <= .5 && -1 == e.collectOptions.indexOf("m") && (e.collectOptions = e.collectOptions.concat("m")), c(e.sync.cd4) ? e.sync.cd4 = {
                    lite: e.similityLiteLevel.toString()
                } : "object" == typeof e.sync.cd4 && (e.sync.cd4.lite = e.similityLiteLevel.toString()), c(t.zone) || (e.baseHTTPUrl = r(e.baseHTTPUrl, t.zone));
                var n = t.requestEndpoint || t.request_endpoint;
                c(n) || (e.baseHTTPUrl = n), e.baseWSUrl = (i = e.baseHTTPUrl, s = i.split("://"), o = "", 2 == s.length && (o = "https" == s[0] ? "wss://" + s[1] : "ws://" + s[1]), o), c(t.cdn_server) || (e.swfUrl = t.cdn_server + "/b.swf")
            }
            var i, s, o;
            c(e.sync.cd1) && (e.sync.cd1 = !0), e.sync.cd2 && (e.sync.cd2 = e.sync.cd2.toString()), e.sync.cd3 && (e.sync.cd3 = e.sync.cd3.toString()), e.sync.cd5 && (e.sync.cd5 = e.sync.cd5.toString())
        }(e),
        function(e) {
            setTimeout(function() {
                "RUNNING" == e.executionStatus && j(e, "TIMEOUT"), O(e, e.statusCallbackFunc)
            }, e.statusCallbackTimeout)
        }(e), Z() && function(e) {
            e.cmid = y().substring(0, 32);
            var t = document.getElementById("fconfig");
            t && t.parentNode && t.parentNode.removeChild(t), (t = document.createElement("script")).id = "fconfig", t.type = "application/json", t.setAttribute("fncls", "fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99");
            var n = {
                f: e.cmid,
                s: "simility_rda",
                fp: {
                    rda_tenant: "simility_tenant"
                }
            };
            t.text = JSON.stringify(n), document.body.appendChild(t)
        }(e), M(e);
        var t, n = c(e.sync.fd10) || !V(e.sync.fd10, !0);
        0 == e.similityLiteLevel && (e.executionCounter = e.executionCounter + 1), n && (e.executionCounter = e.executionCounter + 1), Y(e),
            function(e) {
                try {
                    var t = !1,
                        n = setTimeout(function() {
                            t || J(e, {
                                bd19: !1
                            }, 1, null)
                        }, 700),
                        i = new Image;
                    i.style.display = "none", i.style.visibility = "hidden", i.onload = function() {
                        i.height > 0 && (t = !0), clearTimeout(n)
                    }, i.src = "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw=="
                } catch (e) {}
            }(e), n && X(e, !1), Z() && ((t = document.createElement("script")).src = "https://c.paypal.com/da/r/fb.js", document.body.appendChild(t)), e.collectOptions.indexOf("m") > -1 && function(e) {
                "onmousemove" in document && "onclick" in document && (C = 0, e.async.currentOperatingKey = a(6), e.async[e.async.currentOperatingKey] = [], document.onmousemove = function(t) {
                    q(e, t, 1)
                }, document.onclick = function(t) {
                    q(e, t, 2)
                })
            }(e), e.collectOptions.indexOf("t") > -1 && function(e) {
                x.init();
                var t = 0,
                    n = setInterval(function() {
                        var i = x.getTimeSpentOnPage();
                        if (i > x.maxTsDataToRecord && clearInterval(n), i > t + 2500) {
                            var c = {
                                ts1: [i]
                            };
                            e.useWs && window.WebSocket ? b(e, c, 1) : J(e, c, 1, null)
                        }
                        t = i
                    }, x.tsDataSentRate)
            }(e), e.collectOptions.indexOf("f") > -1 && L(e)
    }
    var $ = new T;

    function ee(e) {
        this.customerContext = e || null
    }! function(e) {
        e.customerContext = window.similityContext || window.simility_context || null
    }($), P($), U($),
        function(e) {
            if (c(window.similityAutoExecute)) try {
                var t = function() {
                    try {
                        return s(document.querySelectorAll('script[data-autoexecute="false"]'))
                    } catch (e) {
                        return null
                    }
                }();
                c(t = t || document.getElementById("simility-device-recon") || document.currentScript || s(document.getElementsByTagName("script"))) || "false" !== t.getAttribute("data-autoexecute") || (e.autoExecute = !1)
            } catch (e) {} else e.autoExecute = window.similityAutoExecute
        }($), S($), $.autoExecute && _($) ? Q($) : function(e) {
            e.similityLiteLevel > 0 && e.similityLiteLevel <= 1 && X(e, !0)
        }($), ee.prototype = {
            constructor: ee,
            getSessionId: function() {
                return R($, !1)
            },
            resetSessionId: function() {
                return R($, !0)
            },
            getDeviceId: function(e) {
                var t = function() {
                    var e = f("_sim_cr");
                    if (!c(e)) try {
                        return window.atob && (e = atob(e)), JSON.parse(e)
                    } catch (e) {}
                    return null
                }();
                if (!c(t) && !c(e) && "function" == typeof e && (!c(t.device_id) && t.device_id.length > 0)) return e(t),
                    function(e, t) {
                        if (!c(e)) try {
                            if (e.e - (new Date).getTime() > 0 && e.s === t) return !0
                        } catch (e) {}
                        return !1
                    }(t, this.customerContext.sessionId || this.customerContext.session_id || this.getSessionId()) ? void 0 : void this.execute();
                this.execute(e)
            },
            setStatusCallback: function(e, t) {
                c(e) || "function" != typeof e || ($.statusCallbackFunc = e), !c(t) && t > 0 && ($.statusCallbackTimeout = t)
            },
            execute: function(e) {
                c(e) || "function" != typeof e || (this.customerContext.callback_func = e),
                    function(e, t) {
                        e.customerContext = t || e.customerContext
                    }($, this.customerContext), P($), U($), S($), Q($)
            }
        }, window.SimilityScript = ee
}(document, window);