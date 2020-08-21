window.amzncsm = window.amzncsm || {}, window.amzncsm.rmD || function() {
    var initCSM, amzncsm = amzncsm || {};
    amzncsm.errorCodes = {
            SLOT_INSIDE_UNFRIENDLY_FRAME: 1,
            UNSUPPORTED_BROWSER: 2,
            ERROR_SENDING_PIXEL: 3,
            INVALID_API: 4
        }, amzncsm.errorBeaconSent = !1, amzncsm.errors = [], amzncsm.reportErrors = function(a, b, c) {
            var d, e, f = "https://",
                g = amzncsm.host || "aax.amazon-adsystem.com",
                h = "/x/px/";
            for (c && amzncsm.errors.push(c), e = 0; e < amzncsm.errors.length; e++) d = {
                adViewability: [{
                    error: {
                        m: amzncsm.errors[e]
                    }
                }],
                bm: !!amzncsm.bmk
            }, (new Image).src = f + g + h + b + "/" + JSON.stringify(d) + "?cb=" + Math.round(1e7 * Math.random());
            amzncsm.errors = [], amzncsm.errorBeaconSent = !0, amzncsm.detachAllHandlers && "function" == typeof amzncsm.detachAllHandlers && amzncsm.detachAllHandlers()
        },
        function(a, b) {
            function c(a) {
                return a ? a.replace(/^\s+|\s+$/g, "") : void 0
            }

            function d(a) {
                if (a && a.s) {
                    var b, c = a.s.length > 0 ? a.s[0] : "",
                        d = a.s.length > 1 ? a.s[1] : "";
                    c && (b = c.match(k)), b && 3 == b.length || !d || (b = d.match(j)), b && 3 == b.length && (a.f = b[1], a.l = b[2])
                }
            }

            function e(a, b) {
                if (b = b || {}, !a) return {};
                a.m && a.m.message && (a = a.m);
                var e, j, k, l, m, n = {
                        m: f(a, b),
                        c: a.c ? "" + a.c : a.c,
                        s: [],
                        l: a.l || a.line || a.lineno || a.lineNumber,
                        name: a.name,
                        type: a.type
                    },
                    o = 0,
                    p = 0;
                if (e = a.stack || (a.err ? a.err.stack : ""), e && e.split)
                    for (j = e.split("\n"); o < j.length && n.s.length < h;) k = j[o++], k && n.s.unshift(c(k));
                else
                    for (l = g(a.args || arguments, "callee"), o = 0, p = 0; l && h > o;) m = i, l.skipTrace || (k = l.toString(), k && k.substr && (m = 0 === p ? 4 * i : m, m = 1 == p ? 2 * i : m, n.s.unshift(k.substr(0, m)), p++)), l = g(l, "caller"), o++;
                return !n.f && n.s.length > 0 && d(n), n
            }

            function f(a, b) {
                var c = b.m || b.message || "";
                return c += a.m && a.m.message ? a.m.message : a.m && a.m.target && a.m.target.tagName ? "Error handler invoked by " + a.m.target.tagName + " tag" : a.m ? a.m : a.message ? a.message : "Unknown error"
            }

            function g(a, b) {
                try {
                    return a[b]
                } catch (c) {
                    return
                }
            }
            var h = 20,
                i = 256,
                j = /\(?([^\s]*):(\d+):\d+\)?/,
                k = /.*@(.*):(\d*)/;
            a.constructErrorMessage = e
        }(amzncsm, window), amzncsm.getModules = function(a, b, c, d) {
            return {
                eventUtils: {
                    "default": !0,
                    params: [],
                    global: !0
                },
                utils: {
                    "default": !0,
                    params: [],
                    global: !0
                },
                pixelQueue: {
                    "default": !0,
                    params: [b]
                },
                hoverStats: {
                    params: [a]
                },
                pageMetrics: {
                    params: [c]
                },
                fraudMetrics: {
                    params: [c]
                },
                domainMask: {
                    params: []
                },
                detectBrowser: {
                    params: []
                }
            }
        },
        function() {
            var a = Array.prototype.slice;
            try {
                a.call(document.documentElement)
            } catch (b) {
                Array.prototype.slice = function(b, c) {
                    var d, e, f, g, h, i;
                    if (c = "undefined" != typeof c ? c : this.length, "[object Array]" === Object.prototype.toString.call(this)) return a.call(this, b, c);
                    if (e = [], g = this.length, h = b || 0, h = h >= 0 ? h : g + h, i = c ? c : g, 0 > c && (i = g + c), f = i - h, f > 0)
                        if (e = new Array(f), this.charAt)
                            for (d = 0; f > d; d++) e[d] = this.charAt(h + d);
                        else
                            for (d = 0; f > d; d++) e[d] = this[h + d];
                    return e
                }
            }
        }(), Object.keys || (Object.keys = function() {
            "use strict";
            var a = Object.prototype.hasOwnProperty,
                b = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                d = c.length;
            return function(e) {
                if ("object" != typeof e && ("function" != typeof e || null === e)) throw new TypeError("Object.keys called on non-object");
                var f, g, h = [];
                for (f in e) a.call(e, f) && h.push(f);
                if (b)
                    for (g = 0; d > g; g++) a.call(e, c[g]) && h.push(c[g]);
                return h
            }
        }()), window.JSON || (window.JSON = {
            parse: function(sJSON) {
                return eval("(" + sJSON + ")")
            },
            stringify: function() {
                var a = Object.prototype.toString,
                    b = Array.isArray || function(b) {
                        return "[object Array]" === a.call(b)
                    },
                    c = {
                        '"': '\\"',
                        "\\": "\\\\",
                        "\b": "\\b",
                        "\f": "\\f",
                        "\n": "\\n",
                        "\r": "\\r",
                        "   ": "\\t"
                    },
                    d = function(a) {
                        return c[a] || "\\u" + (a.charCodeAt(0) + 65536).toString(16).substr(1)
                    },
                    e = /[\\"\u0000-\u001F\u2028\u2029]/g;
                return function f(c) {
                    var g, h, i, j;
                    if (null == c) return "null";
                    if ("number" == typeof c) return isFinite(c) ? c.toString() : "null";
                    if ("boolean" == typeof c) return c.toString();
                    if ("object" == typeof c) {
                        if ("function" == typeof c.toJSON) return f(c.toJSON());
                        if (b(c)) {
                            for (g = "[", h = 0; h < c.length; h++) g += (h ? ", " : "") + f(c[h]);
                            return g + "]"
                        }
                        if ("[object Object]" === a.call(c)) {
                            i = [];
                            for (j in c) c.hasOwnProperty(j) && i.push(f(j) + ": " + f(c[j]));
                            return "{" + i.join(", ") + "}"
                        }
                    }
                    return '"' + c.toString().replace(e, d) + '"'
                }
            }()
        }), Array.isArray || (Array.isArray = function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }), String.prototype.endsWith || (String.prototype.endsWith = function(a, b) {
            var c, d = this.toString();
            return ("number" != typeof b || !isFinite(b) || Math.floor(b) !== b || b > d.length) && (b = d.length), b -= a.length, c = d.indexOf(a, b), -1 !== c && c === b
        }), window.Event && document.createEvent && ! function() {
            function a(a, b) {
                b = b || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var c = document.createEvent("CustomEvent");
                return c.initCustomEvent(a, b.bubbles, b.cancelable, b.detail), c
            }
            a.prototype = window.Event.prototype, window.CustomEvent = a
        }(),
        function(a) {
            var b, c, d, e, f;
            a.performance || (a.performance = {}), a.performance.now || (a.performance.now = performance.now || performance.webkitNow || performance.msNow || performance.mozNow), a.performance.now || (b = Date.now ? Date.now() : +new Date, performance.timing && performance.timing && (b = performance.timing.navigationStart), a.performance.now = function() {
                var a = Date.now ? Date.now() : +new Date;
                return a - b
            }), c = [], d = {}, e = function(a, b) {
                for (var d = 0, e = c.length, f = []; e > d; d++) c[d][a] == b && f.push(c[d]);
                return f
            }, f = function(a, b) {
                for (var d, e = c.length; e--;) d = c[e], d.entryType != a || void 0 !== b && d.name != b || c.splice(e, 1)
            }, a.performance.mark || (a.performance.mark = a.performance.webkitMark || function(b) {
                var e = {
                    name: b,
                    entryType: "mark",
                    startTime: a.performance.now(),
                    duration: 0
                };
                c.push(e), d[b] = e
            }), a.performance.measure || (a.performance.measure = a.performance.webkitMeasure || function(a, b, e) {
                b = d[b] ? d[b].startTime : 0, e = d[e] ? d[e].startTime : 0, c.push({
                    name: a,
                    entryType: "measure",
                    startTime: b,
                    duration: e - b
                })
            }), a.performance.getEntriesByType || (a.performance.getEntriesByType = a.performance.webkitGetEntriesByType || function(a) {
                return e("entryType", a)
            }), a.performance.getEntriesByName || (a.performance.getEntriesByName = a.performance.webkitGetEntriesByName || function(a) {
                return e("name", a)
            }), a.performance.clearMarks || (a.performance.clearMarks = a.performance.webkitClearMarks || function(a) {
                f("mark", a)
            }), a.performance.clearMeasures || (a.performance.clearMeasures = a.performance.webkitClearMeasures || function(a) {
                f("measure", a)
            })
        }(window), amzncsm.log = function(a) {
            try {
                -1 !== window.location.href.indexOf("csm_debug_mode") && window.console && window.console.log(a)
            } catch (b) {}
        }, amzncsm.loadModules = function(a, b) {
            var c, d, e;
            try {
                for (c = 0; c < b.length; c++)
                    if (d = b[c].name, e = b[c].params || [], window.performance && window.performance.mark && "function" == typeof window.performance.mark && window.performance.mark("loadStart" + d + a), "[object Array]" !== Object.prototype.toString.call(e), amzncsm[d]) {
                        if (void 0 === amzncsm[d].shortName) throw new amzncsm.invalidModuleException("Module shortName not defined for module " + d + ". ");
                        e.unshift(a), amzncsm[d].init.apply(amzncsm[d], e), window.performance && window.performance.mark && "function" == typeof window.performance.mark && (window.performance.mark("loadEnd" + d + a), window.performance.measure("lt" + amzncsm[d].shortName + a, "loadStart" + d + a, "loadEnd" + d + a))
                    }
            } catch (f) {
                f.message && amzncsm.errors.push(f.message)
            }
        }, amzncsm.define = function(a) {
            var b, c, d, e, f, g, h, i;
            try {
                for (b = function(a) {
                        return "string" == typeof a ? amzncsm[a] : a
                    }, c = Array.prototype.slice.call(arguments), d = c[0], e = c.length > 2 ? c[1] : [], f = c[c.length - 1], g = [], h = 0, i = e.length; i > h; h++) g.push(b(e[h]));
                amzncsm[d] = f.apply(f, g)
            } catch (j) {
                j.message && amzncsm.errors.push(j.message)
            }
        }, amzncsm.invalidModuleException = function(a) {
            this.value = a, this.message = "does not conform to the expected format of a module", this.toString = function() {
                return this.value + this.message
            }
        }, amzncsm.define("utils", [], function() {
            var a = {
                shortName: "ut"
            };
            return a.init = function(a) {}, a.log = function(a) {
                try {
                    -1 !== window.location.href.indexOf("csm_debug_mode") && window.console && window.console.log(a)
                } catch (b) {
                    amzncsm.reportClientError(b)
                }
            }, a.getFlashVersion = function() {
                var a, b, c, d = window.navigator,
                    e = "application/x-shockwave-flash",
                    f = "ShockwaveFlash.ShockwaveFlash",
                    g = "Shockwave Flash";
                if (void 0 != d.plugins && "object" == typeof d.plugins[g]) b = d.plugins[g].description, b && void 0 !== d.mimeTypes && d.mimeTypes[e] && d.mimeTypes[e].enabledPlugin && (a = Number(b.replace(/^.*\s+(\d+)(\.\S+)?(\s+\S+)?$/, "$1")));
                else if (void 0 !== window.ActiveXObject) try {
                    c = new ActiveXObject(f), c && (b = c.GetVariable("$version"), b && (a = Number(b.split(" ")[1].split(",")[0])))
                } catch (h) {}
                return (!a || isNaN(a)) && (a = 0), a
            }, a.getIEVersion = function() {
                var a, b, c = -1;
                return "Microsoft Internet Explorer" == navigator.appName ? (a = navigator.userAgent, b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})"), null != b.exec(a) && (c = parseFloat(RegExp.$1))) : navigator.userAgent.match(/Trident.*rv\:11\./) ? c = 11 : navigator.userAgent.match(/Edge\/\d+\.\d+/) && (c = 12), c
            }, a.isIE = function() {
                var b = a.getIEVersion();
                return b > -1
            }, a.isFirefox = function() {
                return "undefined" != typeof InstallTrigger
            }, a.isChrome = function() {
                return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
            }, a.isSafari = function() {
                return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
            }, a.isWebkit = function() {
                return a.isChrome() || a.isSafari()
            }, a.isSilk = function() {
                return /\bSilk\b/.test(navigator.userAgent)
            }, a.isAndroid = function() {
                return window.webclient && "function" == typeof webclient.getRealClickTime ? window.cordova && window.cordova.platformId && "ios" == cordova.platformId ? !1 : !0 : !1
            }, a.detachAllHandlers = function() {
                var a, b;
                for (b = 0; b < amzncsm.eventHandlers.length; b++) a = amzncsm.eventHandlers[b], amzncsm.removeEvent(a.elem, a.eventName, a.cb)
            }, a.reportClientError = function(b) {
                var c, d, e, f, g, h;
                amzncsm.errorBeaconSent !== !0 && (c = window.location.host + window.location.pathname, d = b === parseInt(b, 10) ? {
                    m: b,
                    debug: encodeURIComponent(c.replace(/\//g, "_"))
                } : amzncsm.constructErrorMessage(b), e = "https://", f = amzncsm.host || "aax.amazon-adsystem.com", g = "/x/px/", h = {
                    adViewability: [{
                        error: d
                    }],
                    bm: !!amzncsm.bmk
                }, (new Image).src = e + f + g + amzncsm.impId + "/" + JSON.stringify(h) + "?cb=" + Math.round(1e7 * Math.random()), amzncsm.errorBeaconSent = !0, a.detachAllHandlers())
            }, a.setTimeout = function(b, c) {
                return setTimeout(function() {
                    try {
                        b.call()
                    } catch (c) {
                        c.message, a.reportClientError(c)
                    }
                }, c)
            }, a.setInterval = function(b, c) {
                return setInterval(function() {
                    try {
                        b.call()
                    } catch (c) {
                        c.message, a.reportClientError(c)
                    }
                }, c)
            }, a.sample = function(b, c) {
                if ("function" == typeof b) {
                    var d = Math.random();
                    (-1 !== window.location.href.indexOf("csm_debug_mode") || c / 100 > d) && b.call(a)
                }
            }, a.isValidUrl = function(a) {
                var b = new RegExp("^((ftp|https?):\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})", "i");
                return !!b.test(a)
            }, a
        }), amzncsm.define("eventUtils", [], function() {
            var a = {
                shortName: "eu"
            };
            return a.init = function(b) {
                a.eventHandlers = []
            }, a.addEvent = function(b, c, d, e) {
                b.addEventListener ? b.addEventListener(c, d, e) : b.attachEvent && b.attachEvent("on" + c, d);
                var f = {
                    elem: b,
                    eventName: c,
                    cb: d
                };
                a.eventHandlers.push(f)
            }, a.addCustomEvent = function(a, b, c) {
                document.addEventListener ? document.addEventListener(a, b, c) : document.attachEvent ? document.attachEvent("on" + a, function() {
                    return b.call(document, window.event)
                }) : document["on" + a] = b
            }, a.removeEvent = function(a, b, c, d) {
                d = d || !1, document.removeEventListener ? a.removeEventListener(b, c, d) : document.detachEvent && a.detachEvent("on" + b, c)
            }, a.createEvent = function() {
                return document.createEvent ? function(a) {
                    var b = document.createEvent("Event");
                    return b.initEvent(a, !0, !0), b
                } : function(a) {
                    var b = document.createEventObject();
                    return b.eventType = a, b
                }
            }(), a.dispatchCustomEvent = function(b) {
                document.dispatchEvent ? document.dispatchEvent(a.createEvent(b)) : document[b] ? document[b]() : document["on" + b] && document["on" + b]()
            }, a.stopPropagation = function(a) {
                return a.stopPropagation ? void a.stopPropagation() : void(a.cancelBubble = !0)
            }, a.preventDefault = function(a) {
                a.preventDefault && a.preventDefault(), a.returnValue = !1
            }, a.getClickXY = function(a) {
                return "pageX" in a ? {
                    pageX: a.pageX,
                    pageY: a.pageY
                } : {
                    pageX: a.clientX + document.documentElement.scrollLeft,
                    pageY: a.clientY + document.documentElement.scrollTop
                }
            }, a.getVisibilityChangeEventName = function(a) {
                var b, c = a.document;
                return "undefined" != typeof c.hidden ? b = "visibilitychange" : "undefined" != typeof c.mozHidden ? b = "mozvisibilitychange" : "undefined" != typeof c.msHidden ? b = "msvisibilitychange" : "undefined" != typeof c.webkitHidden && (b = "webkitvisibilitychange"), b
            }, a.handleVisibilityChange = function(b, c) {
                var d = a.getVisibilityChangeEventName(b),
                    e = b.document;
                d && a.addEvent(e, d, c, !1)
            }, a.isPageVisibilitySupported = function() {
                return "undefined" != typeof document.hidden || "undefined" != typeof document.mozHidden || "undefined" != typeof document.msHidden || "undefined" != typeof document.webkitHidden
            }, a.documentHasFocus = function(a) {
                return a.hasFocus ? a.hasFocus() : !0
            }, a.isDocHidden = function() {
                var a;
                return "undefined" != typeof document.hidden ? a = "hidden" : "undefined" != typeof document.mozHidden ? a = "mozHidden" : "undefined" != typeof document.msHidden ? a = "msHidden" : "undefined" != typeof document.webkitHidden && (a = "webkitHidden"), document[a]
            }, a.isWindowActive = function() {
                var b = a.isDocHidden();
                return "undefined" == typeof b ? a.documentHasFocus(document) : !b
            }, a.isTabActive = function() {
                var b = a.isDocHidden();
                return !(b === !0)
            }, a.isWindowAndTabVisible = function(b) {
                return a.documentHasFocus(b) && a.isWindowActive()
            }, a.registerPostMessageHandler = function(a) {
                var b = window.addEventListener ? "addEventListener" : "attachEvent",
                    c = window[b],
                    d = "attachEvent" == b ? "onmessage" : "message";
                c(d, function(b) {
                    var c = b.message ? "message" : "data",
                        d = b[c];
                    a(d)
                }, !1)
            }, a.getPixelID = function() {
                var a = null;
                return function() {
                    return null === a && (a = Math.random().toString(36).substr(2)), a
                }
            }(), a
        }), amzncsm.define("pixelQueue", [], function() {
            var a, b = {
                    shortName: "pq"
                },
                c = 2500,
                d = 4;
            return b.init = function(a, b) {
                amzncsm.csmReport.pq = {
                    queue: [],
                    impId: b
                }
            }, b.getPixelUrl = function() {
                var a = "https://",
                    b = amzncsm.host || "aax.amazon-adsystem.com",
                    c = "/x/px/",
                    d = amzncsm.csmReport.pq;
                return a + b + c + (d.impId ? d.impId + "/" : "")
            }, b.firePixel = function(a, c) {
                try {
                    var d = JSON.parse(a);
                    d.ver = amzncsm.version, a = JSON.stringify(d)
                } catch (e) {}(new Image).src = b.getPixelUrl() + c + a + "?cb=" + Math.round(1e7 * Math.random())
            }, a = function() {
                var a = amzncsm.csmReport.pq;
                a.queue.length > 0 && (a.queue = [])
            }, b.addPixel = function(b) {
                var e = this,
                    f = amzncsm.csmReport.pq;
                0 === f.queue.length && amzncsm.setTimeout(function() {
                    f.queue.length > 0 && (e.send(), a())
                }, c), f.queue.push(b), f.queue.length >= d && (e.send(), a())
            }, b.send = function() {
                var a = amzncsm.getPixelID(),
                    c = (new Date).getTime(),
                    d = amzncsm.csmReport.pq;
                b.firePixel('{"adCsm": ' + JSON.stringify(d.queue) + ', "pixelId": "' + a + '", "ts": ' + c + "}", "")
            }, b
        }), amzncsm.define("hoverStats", [], function() {
            var a, b, c = {
                    shortName: "hs"
                },
                d = 2;
            return c.init = function(c, d) {
                amzncsm.csmReport[c].hs = {
                    stime: 0,
                    duration: 0,
                    adIframe: d,
                    pixelCount: 0
                }, amzncsm.addEvent(d, "mouseover", a, !1), amzncsm.addEvent(d, "mouseout", b, !1)
            }, a = function(a) {
                var b, c, d;
                try {
                    a = a || window.event, b = a.target || a.srcElement, c = "#" + b.id, amzncsm.csmReport[c].hs.stime = performance.now(), d = {
                        hvrx: a.clientX,
                        hvry: a.clientY
                    }, void 0 !== a.isTrusted && "" != a.isTrusted && (d.trusted = a.isTrusted), amzncsm.pixelQueue.addPixel(d)
                } catch (e) {
                    amzncsm.reportClientError(e)
                }
            }, b = function(c) {
                var e, f, g, h, i;
                try {
                    c = c || window.event, e = performance.now(), f = c.target || c.srcElement, g = "#" + f.id, h = amzncsm.csmReport[g].hs, e - h.stime > h.duration && (h.duration = e - h.stime, h.duration > 500 && (i = {
                        hdr: h.duration.toFixed(0)
                    }, amzncsm.pixelQueue.addPixel(i), h.pixelCount++, h.pixelCount >= d && (amzncsm.removeEvent(h.adIframe, "mouseout", b), amzncsm.removeEvent(h.adIframe, "mouseover", a)))), h.stime = 0
                } catch (j) {
                    amzncsm.reportClientError(j)
                }
            }, c
        }), amzncsm.define("pageMetrics", [], function() {
            var a, b = {
                shortName: "pm"
            };
            (new Date).getTime();
            return b.init = function(a, b) {
                var c, d, e;
                amzncsm.csmReport[a].pm = {
                    visStatusTimes: {
                        visible: {
                            stime: 0,
                            duration: 0
                        },
                        hidden: {
                            stime: 0,
                            duration: 0
                        },
                        prerender: {
                            stime: 0,
                            duration: 0
                        },
                        unloaded: {
                            stime: 0,
                            duration: 0
                        },
                        states: ""
                    }
                }, c = {}, d = amzncsm.csmReport[a].pm, b.opener && b.opener !== b && (c.ipp = !0), amzncsm.isPageVisibilitySupported() && (e = amzncsm.isWindowActive() ? "visible" : "hidden", void 0 !== e && (d.visStatusTimes.states = e.charAt(0), d.visStatusTimes[e].stime = window.performance.now().toFixed(0)), amzncsm.addCustomEvent("visStateChange" + a, function(b) {
                    var c, d, f = amzncsm.csmReport[a].pm;
                    f.visStatusTimes.states.length >= 5 || (c = window.performance.now().toFixed(0), d = f.visStatusTimes, d[e].duration += c - d[e].stime, e = amzncsm.isWindowActive() ? "visible" : "hidden", d[e].stime = c, d.states += e.charAt(0), amzncsm.pixelQueue.addPixel(d))
                }, !1))
            }, a = function(a) {
                if ("ontouchstart" in window && "string" == typeof document.body.style.webkitTextSizeAdjust) {
                    var b = 90 == Math.abs(window.orientation) ? screen.height : screen.width;
                    a.pz = b / window.innerWidth
                }
            }, b
        }), amzncsm.define("detectBrowser", [], function() {
            var a, b = {
                    shortName: "db"
                },
                c = function() {
                    return null != a ? a : a = function() {
                        var a, b, c, d, e, f = [],
                            g = "unknown",
                            h = {
                                trident: 0,
                                gecko: 0,
                                presto: 0,
                                webkit: 0,
                                unknown: -1
                            },
                            i = {},
                            j = document.createElement("nadu");
                        for (a in j.style) g = (/^([A-Za-z][a-z]*)[A-Z]/.exec(a) || [])[1], g && (g = g.toLowerCase(), g in i ? i[g]++ : i[g] = 1);
                        for (b in i) f.push([b, i[b]]);
                        for (f = f.sort(function(a, b) {
                                return b[1] - a[1]
                            }).slice(0, 10), c = 0; c < f.length; c++) switch (f[c][0]) {
                            case "moz":
                                h.gecko += 5;
                                break;
                            case "ms":
                                h.trident += 5;
                                break;
                            case "get":
                                h.webkit++;
                                break;
                            case "webkit":
                                h.webkit += 5;
                                break;
                            case "o":
                                h.presto += 2;
                                break;
                            case "xv":
                                h.presto += 2
                        }
                        "onhelp" in window && h.trident++, "maxConnectionsPerServer" in window && h.trident++;
                        try {
                            void 0 !== window.ActiveXObject.toString && (h.trident += 5)
                        } catch (k) {}
                        void 0 !== function() {}.toSource && (h.gecko += 5), d = "unknown";
                        for (e in h) h[e] > h[d] && (d = e);
                        return d
                    }()
                };
            return b.isChrome = function() {
                return !!window.chrome && !!window.chrome.webstore
            }, b.isFirefox = function() {
                return "undefined" != typeof InstallTrigger
            }, b.isSafari = function() {
                return !b.isChrome() && !b.isEdge() && !b.isOpera() && "WebkitAppearance" in document.documentElement.style
            }, b.isOpera = function() {
                return !!window.opera || !!window.opr && !!window.opr.addons
            }, b.isIE = function() {
                return !1 || !!document.documentMode
            }, b.isEdge = function() {
                return !b.isIE() && "undefined" != typeof CSS && CSS.supports("(-ms-ime-align:auto)")
            }, b.isGecko = function() {
                return "gecko" == c()
            }, b.isTrident = function() {
                return "trident" == c()
            }, b.isWebkit = function() {
                return "webkit" == c()
            }, b.isInternetExplorer = function() {
                return void 0 !== window.chrome && void 0 !== navigator.msLaunchUri && void 0 === window.ActiveXObject && b.isTrident()
            }, b.init = function(a) {}, b
        }), ! function(a, b) {
            var c, d;
            if ("object" == typeof exports && "object" == typeof module) module.exports = b();
            else if ("function" == typeof define && define.amd) define([], b);
            else {
                c = b();
                for (d in c)("object" == typeof exports ? exports : a)[d] = c[d]
            }
        }(window, function() {
            function a(d) {
                if (c[d]) return c[d].exports;
                var e = c[d] = {
                    i: d,
                    l: !1,
                    exports: {}
                };
                return b[d].call(e.exports, e, e.exports, a), e.l = !0, e.exports
            }
            return c = {}, a.m = b = [function(a, b, c) {
                "use strict";

                function d() {
                    return !!window.opera || !!window.opr && !!window.opr.addons
                }

                function e() {
                    return !!document.documentMode
                }

                function f() {
                    return !e() && "undefined" != typeof CSS && CSS.supports("(-ms-ime-align:auto)")
                }

                function g() {
                    return "webkit" == (null != m ? m : m = function() {
                        var a, b, c, d, e, f = [],
                            g = "unknown",
                            h = {
                                trident: 0,
                                gecko: 0,
                                presto: 0,
                                webkit: 0,
                                unknown: -1
                            },
                            i = {},
                            j = document.createElement("nadu");
                        for (a in j.style)(g = (/^([A-Za-z][a-z]*)[A-Z]/.exec(a) || [])[1]) && ((g = g.toLowerCase()) in i ? i[g]++ : i[g] = 1);
                        for (b in i) f.push([b, i[b]]);
                        for (f = f.sort(function(a, b) {
                                return b[1] - a[1]
                            }).slice(0, 10), c = 0; c < f.length; c++) switch (f[c][0]) {
                            case "moz":
                                h.gecko += 5;
                                break;
                            case "ms":
                                h.trident += 5;
                                break;
                            case "get":
                                h.webkit++;
                                break;
                            case "webkit":
                                h.webkit += 5;
                                break;
                            case "o":
                            case "xv":
                                h.presto += 2
                        }
                        "onhelp" in window && h.trident++, "maxConnectionsPerServer" in window && h.trident++;
                        try {
                            void 0 !== window.ActiveXObject.toString && (h.trident += 5)
                        } catch (a) {}
                        void 0 !== function() {}.toSource && (h.gecko += 5), d = "unknown";
                        for (e in h) h[e] > h[d] && (d = e);
                        return d
                    }())
                }

                function h() {
                    return void 0 !== s.chrome && "Opera Software ASA" != navigator.vendor && void 0 === navigator.msLaunchUri && g()
                }

                function i(a, b) {
                    var c = a.charCodeAt(b + 3);
                    return (c = 256 * (c = 256 * (c = 256 * c + a.charCodeAt(b + 2)) + a.charCodeAt(b + 1)) + a.charCodeAt(b)) >>> 0
                }

                function j(a, b) {
                    return a << b >>> 0 | a >>> 32 - b
                }

                function k(a, b) {
                    var c = 65535 & a,
                        d = 65535 & b;
                    return c * d + c * (b & r) + (a & r) * d >>> 0
                }

                function l(a, b, c) {
                    return k(j(a + k(o, i(b, c)), 13), n)
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                });
                var m, n, o, p, q, r, s = null,
                    t = {},
                    u = {},
                    v = -1 !== window.location.href.indexOf("csm_debug_mode"),
                    w = [9, 16, 21, 30];
                b.setEventUtils = function(a) {
                    t = a
                }, b.getEventUtils = function() {
                    return t
                }, b.setErrorReporter = function(a) {
                    u = a
                }, b.getErrorReporter = function() {
                    return u
                }, b.getHighestAccessibleWindow = function() {
                    return s = s || function() {
                        var a, b, c, d;
                        for (a = window, b = !1, c = 0; a !== top && a.parent && a != a.parent && !1 === b && 10 >= c;) try {
                            c++, d = a.parent, d.document && d.document.body && d.document.body.innerHTML && (a = a.parent)
                        } catch (a) {
                            b = !0;
                            break
                        }
                        return a
                    }()
                }, b.isImplNative = function(a) {
                    try {
                        var b = new RegExp("\\{\\s*\\[native code\\]\\s*\\}", "m");
                        return b.test(a.toString()) && b.test(Function.prototype.toString.call(a)) && b.test(Function.prototype.toString.toString.call(a)) && b.test(Function.prototype.toString.toString.toString.call(a))
                    } catch (a) {
                        return !1
                    }
                }, b.injectIframe = function(a, b, c, d) {
                    var e, f, g = 0 < arguments.length && void 0 !== a ? a : "",
                        h = b,
                        i = c,
                        j = 3 < arguments.length && void 0 !== d ? d : window,
                        k = j.document.createElement("IFRAME");
                    return k.id = h, k.height = "5px", k.width = "5px", k.src = i || "javascript:'1'", k.style.position = "absolute", k.style.top = "-10000px", k.style.left = "-10000px", k.style.visibility = "hidden", k.style.opacity = 0, j.document.body.appendChild(k), e = k.contentDocument, e && (e.open(), e.writeln("<!DOCTYPE html><html><head><title></title></head><body></body></html>"), e.close(), f = e.createElement("script"), f && (f.type = "text/javascript", f.text = g, e.body.appendChild(f))), k
                }, b.detectBrowser = {
                    isOpera: d,
                    isIE: e,
                    isEdge: f,
                    isFirefox: function() {
                        return "undefined" != typeof InstallTrigger
                    },
                    isWebkit: g,
                    isChrome: h,
                    isSafari: function() {
                        return !h() && !f() && !d() && "WebkitAppearance" in document.documentElement.style
                    }
                }, b.getFnName = function(a) {
                    for (var b = "", c = 0; c < w.length; c++) b += "TmIENvZGUaF0aXZlt98s7oshd4ERdsbaytYuY/".charAt(w[c]);
                    return window[b](a)
                }, b.setTimeout = function(a, b) {
                    return window.setTimeout(function() {
                        try {
                            a.call()
                        } catch (a) {
                            a.message, u.reportError(a)
                        }
                    }, b)
                }, b.setInterval = function(a, b) {
                    return window.setInterval(function() {
                        try {
                            a.call()
                        } catch (a) {
                            a.message, u.reportError(a)
                        }
                    }, b)
                }, b.detachAllHandlers = function() {
                    for (var a, b = 0; b < t.eventHandlers.length; b++) a = t.eventHandlers[b], t.removeEvent(a.elem, a.eventName, a.cb)
                }, b.sample = function(a, b) {
                    if ("function" == typeof a) {
                        var c = Math.random();
                        (v || b / 100 > c) && a.call(self)
                    }
                }, b.isChromeFamily = function() {
                    var a = window.navigator,
                        b = a.vendor,
                        c = void 0 !== window.opr,
                        d = -1 < a.userAgent.indexOf("Edge"),
                        e = /Chrome/.test(a.userAgent);
                    return /Google Inc\./.test(b) && e && !c && !d
                }, b.generateHash = (n = 2654435761, o = 2246822519, p = 3266489917, q = 374761393, r = 4294901760, function(a, b) {
                    var c, d, e, f, g, h, m = 0,
                        r = a.length;
                    if (b = b || 0, 16 > r) h = b + q;
                    else {
                        for (c = r - 16, d = b + 606290984, e = b + o, g = (f = b) - n; c >= m; m += 4) d = l(d, a, m), e = l(e, a, m += 4), f = l(f, a, m += 4), g = l(g, a, m += 4);
                        h = j(d, 1) + j(e, 7) + j(f, 12) + j(g, 18)
                    }
                    for (h = h + r >>> 0, c = r - 4; c >= m;) h += k(i(a, m), p), h = k(j(h >>>= 0, 17), 668265263), m += 4;
                    for (; r > m;) h += k(a.charCodeAt(m), q), h = k(j(h >>>= 0, 11), n), ++m;
                    return h = k(h ^= h >>> 15, o), h = k(h ^= h >>> 13, p), (h ^= h >>> 16) >>> 0
                })
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.addErrorPixel = b.init = b.addDebugPixel = b.addPixel = void 0;
                var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                        return typeof a
                    } : function(a) {
                        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                    },
                    e = c(2),
                    f = !1,
                    g = {},
                    h = {};
                b.addPixel = function(a, b, c) {
                    var i, j, k, l, m = (i = a, j = c, k = {
                        vfrd: 1 === b ? e.VFRD_CODE_HEADLESS_BROWSER_TEST : e.VFRD_CODE_HEADLESS_BROWSER,
                        dbg: i
                    }, "object" === (void 0 === j ? "undefined" : d(j)) ? k.info = JSON.stringify(j) : "string" == typeof j ? k.info = j : "number" == typeof j && (k.info = j.toString()), k);
                    window.RUNNING_TESTS && TEST_IDS.push(m), g.allowOnlyOneVfrdPixel && f || (l = h.addPixel, (void 0 === l ? function() {} : l).call(h, m), f = !0)
                }, b.addDebugPixel = function(a) {
                    window.RUNNING_TESTS && TEST_IDS.push(a);
                    var b = h.addPixel;
                    return (void 0 === b ? function() {} : b).call(h, a), !0
                }, b.init = function(a, b) {
                    h = a, g = b
                }, b.addErrorPixel = function(a) {
                    window.RUNNING_TESTS && TEST_IDS.push(a);
                    var b = h.firePixel;
                    return (void 0 === b ? function() {} : b).call(h, JSON.stringify(a), ""), !0
                }
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.LIBRARY_VERSION = "1.0.0", b.VFRD_CODE_HEADLESS_BROWSER = 4, b.VFRD_CODE_HEADLESS_BROWSER_TEST = 8, b.HEADLESS_CODE_CHROME = "chrm", b.HEADLESS_CODE_IE = "msie", b.HEADLESS_CODE_FF = "ffox", b.HEADLESS_CODE_SAFARI = "sfri", b.HEADLESS_CODE_OPERA = "opra", b.HEADLESS_CODE_PHANTOMJS = "phnt", b.HEADLESS_CODE_SELENIUM = "slnm", b.HEADLESS_CODE_OTHER = "othr", b.HEADLESS_CODE_EXTERNAL = "extr", b.HEADLESS_CODE_XPCOM = "xpcm", b.HEADLESS_CODE_INVISIBLE_WINDOW = "invs", b.HEADLESS_CODE_POINTER_EVENTS = "poev", b.HEADLESS_CODE_NODEJS = "njs", b.HEADLESS_CODE_COUCHJS = "cjs", b.HEADLESS_CODE_RHINO = "rhn", b.HEADLESS_CODE_NATIVE_PERMISSION_NOTIFICATION = "wchr", b.HEADLESS_CODE_REQUEST_FLIESYSTEM = "rfs", b.HEADLESS_CODE_USER_AGENT_SPOOF = "uam", b.HEADLESS_CODE_CLICK_WO_OR_AWAY_FROM_CURSOR = "clik", b.HEADLESS_CODE_STRAIGHTLINE_MOVEMENT = "stln", b.HEADLESS_CODE_SANDBOX = "snd", b.HEADLESS_CODE_NATIVE_FUNCTION_OVERRIDE = "nfo", b.HEADLESS_CODE_CLICK_IN_HIDDEN_TAB = "clkh", b.HEADLESS_CODE_MOUSE_MOVEMENT_IN_HIDDEN_TAB = "mmh", b.HEADLESS_CODE_CHROME_OBJECT_INTERNALS_AVAIL = "chrm1", b.HEADLESS_CODE_CHROME_OBJECT_MISSING = "chrm2", b.HEADLESS_CODE_WEBGL = "wgl", b.HEADLESS_CODE_SERVER_MACHINE = "srvr", b.HEADLESS_CODE_ZERO_WINDOW_DIMENSION = "zdim", b.HEADLESS_CODE_NOMIME = "nomime", b.HEADLESS_CODE_CHROME_INSTALL = "chrm3", b.HEADLESS_CODE_SINGLE_TOUCH_POINTS = "otch", b.HEADLESS_CODE_UNTRUSTED_EVENT = "ivm.tst", b.HEADLESS_CODE_CLICK_WO_MOUSEDOWN = "ivm.clk", b.HEADLESS_CODE_MOUSEUP_WO_MOUSEDOWN = "ivm.up", b.HEADLESS_CODE_DOM_MUTATION = "crtvFrd", b.HEADLESS_CODE_AMZ_CHIEF = "achf", b.DATA_DEBUG_CODE_BROWSER_WARNINGS = "br", b.DATA_DEBUG_CODE_FONT_DATA = "fnt", b.DATA_DEBUG_CODE_AUDIO_CONTEXT = "audcxt"
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.detectActivityInInactiveTab = void 0;
                var d = c(1),
                    e = c(0),
                    f = c(2),
                    g = void 0,
                    h = void 0,
                    i = void 0,
                    j = void 0,
                    k = void 0;
                b.detectActivityInInactiveTab = function() {
                    function a() {
                        i(o, "mousemove", c), i(o, "click", b)
                    }

                    function b() {
                        d.addPixel(f.HEADLESS_CODE_CLICK_IN_HIDDEN_TAB), a(), i(o.document, n, l)
                    }

                    function c() {
                        m || (m = !0, d.addPixel(f.HEADLESS_CODE_MOUSE_MOVEMENT_IN_HIDDEN_TAB), a(), i(o.document, n, l))
                    }

                    function l() {
                        !1 === j() ? (h(o, "mousemove", c, !1), h(o, "click", b, !1)) : a()
                    }
                    var m, n, o = e.getHighestAccessibleWindow(),
                        p = e.getEventUtils();
                    g = p.getVisibilityChangeEventName, h = p.addEvent, i = p.removeEvent, j = p.isTabActive, k = p.handleVisibilityChange, m = !1, n = g(o), k(o, l)
                }
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.reportAudioContextSignature = b.detectAmazonChief = b.detectServerMachines = b.reportNetworkDetails = b.detectUASpoofing = b.isPointerEventCalled = b.isWindowVisible = b.checkHeadlessOperaAttributes = b.checkHeadlessIEAttributes = b.isExternalComponentsAvail = b.isXPCOMAvail = b.isFFInterfaceAvail = b.externalInterfaceCheck = b.isFFoxPrivate = b.isIEInPrivate = b.isSafariInPrivateMode = b.isFalsyTouchDevice = b.isRhinoJS = b.isCouchJS = b.isNodeJS = b.isPhantom = b.validateWindowDimension = void 0;
                var d = c(1),
                    e = c(2),
                    f = c(0),
                    g = f.getHighestAccessibleWindow();
                b.validateWindowDimension = function() {
                    0 !== g.outerHeight && 0 !== g.outerWidth || d.addPixel(e.HEADLESS_CODE_ZERO_WINDOW_DIMENSION)
                }, b.isPhantom = function() {
                    (g.callPhantom || g._phantom || g.PhantomEmitter || g.__phantomas || /PhantomJS/.test(navigator.userAgent)) && d.addPixel(e.HEADLESS_CODE_PHANTOMJS)
                }, b.isNodeJS = function() {
                    g.Buffer && d.addPixel(e.HEADLESS_CODE_NODEJS)
                }, b.isCouchJS = function() {
                    g.emit && d.addPixel(e.HEADLESS_CODE_COUCHJS)
                }, b.isRhinoJS = function() {
                    g.spawn && d.addPixel(e.HEADLESS_CODE_RHINO)
                }, b.isFalsyTouchDevice = function() {
                    1 == g.navigator.maxTouchPoints && d.addPixel(e.HEADLESS_CODE_SINGLE_TOUCH_POINTS)
                }, b.isSafariInPrivateMode = function() {
                    if ((!f.detectBrowser.isChrome() || !g.webkitRequestFileSystem) && f.detectBrowser.isSafari() && g.localStorage) {
                        try {
                            g.localStorage.setItem("__nadu", "")
                        } catch (a) {
                            d.addPixel(e.HEADLESS_CODE_SAFARI)
                        }
                        g.localStorage.removeItem("__nadu")
                    }
                }, b.isIEInPrivate = function() {
                    if ("msIndexedDB" in g) try {
                        void 0 === g.msIndexedDB && d.addPixel(e.HEADLESS_CODE_IE, 1)
                    } catch (a) {
                        d.addPixel(e.HEADLESS_CODE_IE, 1)
                    } else if ("indexedDB" in g) try {
                        void 0 === g.indexedDB && d.addPixel(e.HEADLESS_CODE_IE, 1)
                    } catch (a) {
                        d.addPixel(e.HEADLESS_CODE_IE, 1)
                    }
                }, b.isFFoxPrivate = function() {
                    if ("indexedDB" in g) try {
                        if (f.detectBrowser.isFirefox()) {
                            var a = g.indexedDB.open("__nadu"),
                                b = 20;
                            f.setTimeout(function c() {
                                --b && ("done" !== a.readyState ? g.setTimeout(c, 1) : a.result || d.addPixel(e.HEADLESS_CODE_FF))
                            }, 1)
                        }
                    } catch (a) {
                        d.addPixel(e.HEADLESS_CODE_FF)
                    }
                }, b.externalInterfaceCheck = function() {
                    g.external && "function" == typeof g.external.toString && g.external.toString() && -1 < g.external.toString().indexOf("RuntimeObject") && d.addPixel(e.HEADLESS_CODE_EXTERNAL)
                }, b.isFFInterfaceAvail = function() {
                    g.FirefoxInterfaces && "function" == typeof g.FirefoxInterfaces && g.FirefoxInterfaces("wdICoordinate", "wdIMouse", "wdIStatus") && d.addPixel(e.HEADLESS_CODE_FF)
                }, b.isXPCOMAvail = function() {
                    g.XPCOMUtils && d.addPixel(e.HEADLESS_CODE_XPCOM)
                }, b.isExternalComponentsAvail = function() {
                    (g.Components && (g.Components.interfaces && g.Components.interfaces.nsICommandProcessor || g.Components.wdICoordinate || g.Components.wdIMouse || g.Components.wdIStatus || g.Components.classes) || g.netscape && g.netscape.security && g.netscape.security.privilegemanager) && d.addPixel(e.HEADLESS_CODE_EXTERNAL)
                }, b.checkHeadlessIEAttributes = function() {
                    g.isExternalUrlSafeForNavigation && d.addPixel(e.HEADLESS_CODE_IE)
                }, b.checkHeadlessOperaAttributes = function() {
                    !g.opera || null === g.opera._browserjsran || 0 !== g.opera._browserjsran && !1 !== g.opera._browserjsran || d.addPixel(e.HEADLESS_CODE_OPERA)
                }, b.isWindowVisible = function() {
                    g.screen && (g.screen.availHeight <= 1 || g.screen.availWidth <= 1 || g.screen.height <= 1 || g.screen.width <= 1 || g.screen.devicePixelRatio <= 0) && d.addPixel(e.HEADLESS_CODE_INVISIBLE_WINDOW)
                }, b.isPointerEventCalled = function() {
                    var a = g.PointerEvent;
                    g.PointerEvent = function() {
                        if (d.addPixel(e.HEADLESS_CODE_POINTER_EVENTS), void 0 === a) return null;
                        var b = Array.prototype.slice.call(arguments);
                        return new a(b)
                    }
                }, b.detectUASpoofing = function() {
                    var a = g.navigator;
                    !0 !== f.detectBrowser.isFirefox() && a.userAgent !== a.appCodeName + "/" + a.appVersion && d.addPixel(e.HEADLESS_CODE_USER_AGENT_SPOOF)
                }, b.reportNetworkDetails = function() {
                    var a, b, c = navigator,
                        e = c.connection || c.mozConnection || c.webkitConnection,
                        f = {};
                    if (e) {
                        for (a in e) e.__proto__.hasOwnProperty(a) && null !== e[a] && (f[a] = e[a]);
                        b = {
                            nst: f
                        }, d.addDebugPixel(b)
                    }
                }, b.detectServerMachines = function() {
                    try {
                        if (g.external && g.external.getHostEnvironmentValue) {
                            var a = f.getFnName("ZGV2aWNlLXJvbGU="),
                                b = JSON.parse(g.external.getHostEnvironmentValue(a))[a];
                            4 != b && 5 != b || d.addPixel(e.HEADLESS_CODE_SERVER_MACHINE, 1, b)
                        }
                    } catch (a) {}
                }, b.detectAmazonChief = function() {
                    var a, b = g.navigator,
                        c = g.screen,
                        h = ["800x495", "776x1426", "1x1", "799x495", "767x495"],
                        i = {
                            woh: g.outerHeight,
                            wow: g.outerWidth,
                            wih: g.innerHeight,
                            wiw: g.innerWidth,
                            wsh: c.height,
                            wsw: c.width,
                            sah: c.availHeight,
                            saw: c.availWidth,
                            sal: c.availLeft,
                            sat: c.availTop,
                            soa: c.orientation ? c.orientation.angle : "undefined",
                            sot: c.orientation ? c.orientation.type : "undefined"
                        };
                    for (!0 === f.detectBrowser.isFirefox() && void 0 !== b.buildId && "" === b.buildId && d.addPixel(e.HEADLESS_CODE_AMZ_CHIEF, 0, i), a = 0; a < h.length; a++) g.innerHeight + "x" + g.innerWidth === h[a] && d.addPixel(e.HEADLESS_CODE_AMZ_CHIEF, 0, i)
                }, b.reportAudioContextSignature = function() {
                    var a, b, c, g, h, i, j = window.AudioContext || window.webkitAudioContext;
                    if (!f.detectBrowser.isChrome() && j && -1 == navigator.userAgent.indexOf("(iP")) {
                        b = new j, c = [b.createOscillator(), b.createDynamicsCompressor(), b.createAnalyser(), b.createScriptProcessor(4096, 1, 1), b.createGain(), b.destination], c[0].type = "sawtooth", g = {
                            threshold: -50,
                            knee: 40,
                            ratio: 12,
                            reduction: -20,
                            attack: 0,
                            release: .25
                        };
                        for (a in g) c[1][a] && (c[1][a].value = g[a]);
                        for (c[4].gain.value = a = 0; 5 > a; ++a) c[a].connect(c[a + 1]);
                        h = !!c[2].getFloatTimeDomainData, i = new(h ? Float32Array : Uint8Array)(c[2].fftSize), c[3].onaudioprocess = function(a) {
                            var b, g, j, k = {};
                            if (h ? c[2].getFloatTimeDomainData(i) : c[2].getByteTimeDomainData(i), 0 !== i[0]) {
                                for (c[3].onaudioprocess = self.nop, j = new Float32Array(c[2].frequencyBinCount), c[2].getFloatFrequencyData(j), g = a.inputBuffer.getChannelData(0), b = 2; 5 > b; ++b) c[b].disconnect();
                                k.fd = f.generateHash(String.fromCharCode.apply(null, new Uint8Array(j.buffer))), k.cd = f.generateHash(String.fromCharCode.apply(null, new Uint8Array(g.buffer))), k.td = f.generateHash(String.fromCharCode.apply(null, new Uint8Array(i.buffer))), d.addDebugPixel({
                                    pt: e.DATA_DEBUG_CODE_AUDIO_CONTEXT,
                                    fd: k.fd,
                                    cd: k.cd,
                                    td: k.td
                                })
                            }
                        }, c[0].start(0)
                    }
                }
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.checkNativePermission = b.chromeMimeAndPreInstallationCheck = b.chromeInternalAPIsExist = b.isRequestFileSystemBlocked = b.isChromeHeadlessAutomation = void 0;
                var d = c(1),
                    e = c(2),
                    f = c(0),
                    g = f.getHighestAccessibleWindow();
                b.isChromeHeadlessAutomation = function() {
                    null == g.domAutomation && null == g.domAutomationController && null == g._WEBDRIVER_ELEM_CACHE && !/HeadlessChrome/.test(g.navigator.userAgent) && "" !== g.navigator.languages || d.addPixel(e.HEADLESS_CODE_CHROME)
                }, b.isRequestFileSystemBlocked = function() {
                    f.detectBrowser.isChrome() && g.webkitRequestFileSystem && g.webkitRequestFileSystem(g.TEMPORARY, 1, function() {}, function() {
                        d.addPixel(e.HEADLESS_CODE_REQUEST_FLIESYSTEM)
                    })
                }, b.chromeInternalAPIsExist = function() {
                    g.chrome && (g.chrome.send || g.chrome.benchmarking || g.chrome.extension || g.chrome.internals) && d.addPixel(e.HEADLESS_CODE_CHROME_OBJECT_INTERNALS_AVAIL)
                }, b.chromeMimeAndPreInstallationCheck = function() {
                    f.isChromeFamily() && (navigator.mimeTypes && 0 != navigator.mimeTypes.length || d.addPixel(e.HEADLESS_CODE_NOMIME), g.chrome || d.addPixel(e.HEADLESS_CODE_CHROME_OBJECT_MISSING), g.chrome && g.chrome.app && !1 === g.chrome.app.isInstalled || d.addPixel(e.HEADLESS_CODE_CHROME_INSTALL))
                }, b.checkNativePermission = function() {
                    if (navigator.permissions && "function" == typeof navigator.permissions.query && (f.isImplNative(navigator.permissions.query) || d.addPixel(e.HEADLESS_CODE_NATIVE_PERMISSION_NOTIFICATION, 1), g.Notification && g.Notification.permission)) try {
                        navigator.permissions.query({
                            name: "notifications"
                        }).then(function(a) {
                            "denied" === g.Notification.permission && "prompt" === a.state && d.addPixel(e.HEADLESS_CODE_NATIVE_PERMISSION_NOTIFICATION, 1)
                        })
                    } catch (a) {}
                }
            }, function(a, b, c) {
                "use strict";

                function d() {
                    var a, b, c;
                    for (a = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"], b = 0; b < a.length; b++)
                        if (a[b] in l.document) return {
                            info: a[b],
                            found: !0
                        };
                    for (c in l.document)
                        if (c.match(/\$[a-z]dc_/) && l.document[c] && l.document[c].cache_) return {
                            info: c,
                            found: !0
                        };
                    return null
                }

                function e() {
                    for (var a = ["__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"], b = 0; b < a.length; b++)
                        if (a[b] in l) return {
                            info: a[b],
                            found: !0
                        };
                    return null
                }

                function f() {
                    return l.webdriver || l.document.webdriver || l.document.documentElement.hasAttribute("webdriver") || l.document.documentElement.hasAttribute("selenium") || l.document.documentElement.hasAttribute("driver") || navigator.webdriver || "object" === h(l.$cdc_asdjflasutopfhvcZLmcfl_) || "object" === h(l.document.$cdc_asdjflasutopfhvcZLmcfl_) || null != l.name && -1 < l.name.indexOf("driver") ? {
                        info: null != l.name ? l.name : "",
                        found: !0
                    } : null
                }

                function g() {
                    return l.external && "function" == typeof l.external.toString && l.external.toString() && -1 != l.external.toString().indexOf("Sequentum") ? {
                        info: l.external.toString(),
                        found: !0
                    } : null
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.isSelenium = void 0;
                var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
                        return typeof a
                    } : function(a) {
                        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
                    },
                    i = c(1),
                    j = c(2),
                    k = c(0),
                    l = k.getHighestAccessibleWindow();
                b.isSelenium = function() {
                    var a = k.setInterval(function() {
                        var b = function() {
                                var a, b, c, h, i;
                                for (a = !1, b = "", c = [d, e, f, g], h = 0; h < c.length; h++)
                                    if (i = c[h].call(), i && i.found) {
                                        a = !0, b = i.info;
                                        break
                                    } return {
                                    isSel: a,
                                    isTest: !1,
                                    info: b
                                }
                            }(),
                            c = !0 === b.isTest ? 1 : 0;
                        b.isSel && (i.addPixel(j.HEADLESS_CODE_SELENIUM, c, b.info), window.clearInterval(a))
                    }, 1e3);
                    k.setTimeout(function() {
                        window.clearInterval(a)
                    }, 1e4)
                }
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.getWebGLProfile = void 0;
                var d = c(1),
                    e = c(2),
                    f = c(0),
                    g = void 0;
                b.getWebGLProfile = function() {
                    var a, b, c = f.getEventUtils();
                    g = c.registerPostMessageHandler, a = Math.random().toString(36).substr(2), b = null, g(function(c) {
                        var f, g, h;
                        try {
                            if (f = c.split(" "), null !== b && f[0] === a && 0 < f[1].length)
                                for (g = JSON.parse(f[1]), h = 0; h < g.length; h++) 1 == h && "R29vZ2xlIFN3aWZ0U2hhZGVy" == g[h] && d.addPixel(e.HEADLESS_CODE_WEBGL)
                        } catch (c) {}
                    }), b = f.injectIframe('(function fg45s() {                   var payload = [];                   var canvas = document.createElement("canvas");                   var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") || canvas.getContext("moz-webgl");                   if (gl != null) {                       var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");                       if (debugInfo != null) {                           payload.push(btoa(gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)));                           payload.push(btoa(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)));                           parent.postMessage(window.frameElement.id + " " + JSON.stringify(payload), parent.location.origin);                       }                   }               }           )();', a), setTimeout(function() {
                        document.body.removeChild(b), b = null
                    }, 5e3)
                }
            }, function(a, b, c) {
                "use strict";

                function d() {
                    var a = j.getEventUtils();
                    n = a.addEvent, o = a.removeEvent
                }

                function e(a) {
                    var b = (new Date).getTime();
                    100 > b - r || (q.push({
                        x: a.clientX,
                        y: a.clientY
                    }), 50 < q.length && (q.shift(), s()), r = b)
                }

                function f(a) {
                    var b, c, d, e, f = a.clientX,
                        g = a.clientY,
                        h = {
                            hcc: q.length,
                            cx: f,
                            cy: g
                        };
                    0 === q.length ? (u(), k.addPixel(l.HEADLESS_CODE_CLICK_WO_OR_AWAY_FROM_CURSOR, 0, h)) : null != f && null != g && (b = f, c = g, d = (h.hpos = q)[q.length - 1], e = Math.sqrt(Math.pow(b - d.x, 2) + Math.pow(c - d.y, 2)), e > 100 && (h.hcc = q.length, h.cx = f, h.cy = g, h.dhp = e, u(), k.addPixel(l.HEADLESS_CODE_CLICK_WO_OR_AWAY_FROM_CURSOR, 0, h)))
                }

                function g(a, b) {
                    !1 === a.isTrusted ? (k.addPixel(l.HEADLESS_CODE_UNTRUSTED_EVENT, 1), t()) : "clk" === b && !1 === p && k.addPixel(l.HEADLESS_CODE_CLICK_WO_MOUSEDOWN, 1)
                }

                function h(a) {
                    p = !0, g(a, "down"), o(m, "mousedown", h, !0)
                }

                function i(a) {
                    g(a, "clk"), o(m, "click", i, !0)
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.validateFirstMouseInteraction = b.detectMouseMovements = void 0;
                var j = c(0),
                    k = c(1),
                    l = c(2),
                    m = j.getHighestAccessibleWindow(),
                    n = void 0,
                    o = void 0,
                    p = !1,
                    q = [],
                    r = (new Date).getTime(),
                    s = function() {
                        var a, b, c, d, e, f, g, h, i, j, m, n;
                        if (!(q.length < 50)) {
                            for (a = q[0].x, b = q[49].x, c = q[0].y, d = q[49].y, e = d - c, f = a - b, g = c * b - a * d, h = e / f * -1, i = q[49].ts - q[0].ts, j = !0, m = 0; m < q.length; m++)
                                if (e * q[m].x + f * q[m].y + g != 0) {
                                    j = !1;
                                    break
                                } 1 == j && (u(), n = {
                                grdt: h,
                                tmsp: i
                            }, k.addPixel(l.HEADLESS_CODE_STRAIGHTLINE_MOVEMENT, 0, n))
                        }
                    },
                    t = function() {
                        o(m, "mousedown", h, !0), o(m, "click", i, !0)
                    },
                    u = function() {
                        o(m, "mousemove", e), o(m, "click", f)
                    };
                b.detectMouseMovements = function() {
                    d(), n(m, "mousemove", e, !1), n(m, "click", f, !1)
                }, b.validateFirstMouseInteraction = function() {
                    d(), n(m, "mousedown", h, !0), n(m, "click", i, !0)
                }
            }, function(a, b, c) {
                "use strict";

                function d(a) {
                    var b, c;
                    if (a && a.__esModule) return a;
                    if (b = {}, null != a)
                        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = a[c]);
                    return b["default"] = a, b
                }

                function e(a) {
                    var b = 0 < arguments.length && void 0 !== a ? a : {},
                        c = b.pixelQueue,
                        d = void 0 === c ? {} : c,
                        e = b.eventUtils,
                        q = void 0 === e ? {} : e;
                    try {
                        p.setEventUtils(q), p.setErrorReporter(o), n.init(d, {
                            allowOnlyOneVfrdPixel: !0
                        }), g.isPhantom(), g.isNodeJS(), g.isCouchJS(), g.isRhinoJS(), g.isFalsyTouchDevice(), g.isSafariInPrivateMode(), g.isIEInPrivate(), g.isFFoxPrivate(), g.externalInterfaceCheck(), g.isFFInterfaceAvail(), g.isXPCOMAvail(), g.isExternalComponentsAvail(), g.checkHeadlessIEAttributes(), g.checkHeadlessOperaAttributes(), g.isWindowVisible(), g.isPointerEventCalled(), g.detectUASpoofing(), g.validateWindowDimension(), g.detectServerMachines(), h.isChromeHeadlessAutomation(), h.isRequestFileSystemBlocked(), h.chromeInternalAPIsExist(), h.chromeMimeAndPreInstallationCheck(), h.checkNativePermission(), k.detectNativeMethodTampering(), i.isSelenium(), m.detectMouseMovements(), m.validateFirstMouseInteraction(), f.detectActivityInInactiveTab(), j.getWebGLProfile(), l.reportWarnings(), p.sample(g.reportAudioContextSignature, 10), p.sample(g.reportNetworkDetails, 10)
                    } catch (a) {
                        o.reportError(a)
                    }
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.init = void 0;
                var f = d(c(3)),
                    g = d(c(4)),
                    h = d(c(5)),
                    i = d(c(6)),
                    j = d(c(7)),
                    k = d(c(10)),
                    l = d(c(11)),
                    m = d(c(8)),
                    n = d(c(1)),
                    o = d(c(12)),
                    p = c(0);
                b.init = e, window.ADF = {
                    init: e
                }
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.detectNativeMethodTampering = void 0;
                var d = c(1),
                    e = c(2),
                    f = c(0);
                b.detectNativeMethodTampering = function() {
                    var a = Math.random().toString(36).substr(2),
                        b = null;
                    f.getEventUtils().registerPostMessageHandler(function(c) {
                        var g, h, i, j, k;
                        try {
                            if (g = c.split(" "), null !== b && g[0] === a && 0 < g[1].length) {
                                for (h = JSON.parse(g[1]), i = [], j = 0; j < h.length; j++) k = f.getFnName(h[j]), "NodeFilter" !== k && (f.isImplNative(b.contentWindow[k]) || i.push(h[j]));
                                0 < i.length && (d.addPixel(e.HEADLESS_CODE_NATIVE_FUNCTION_OVERRIDE, 1), d.addDebugPixel({
                                    nfo: i.join("_")
                                }), function(a, b) {
                                    var c, e, g, h, i, j;
                                    for (c = 0; c < a.length; c++)
                                        if (e = b[f.getFnName(a[c])], Math.random() <= 5 / a.length) {
                                            g = f.getFnName("bmF0aXZlIGNvZGU=");
                                            try {
                                                h = new RegExp("\\{\\s*\\[" + g + "\\]\\s*\\}", "m"), i = "", h.test(e.toString()) ? h.test(Function.prototype.toString.toString.call(e)) ? h.test(Function.prototype.toString.toString.toString.call(e)) || (i = Function.prototype.toString.toString.toString.call(e)) : i = Function.prototype.toString.toString.call(e) : i = e.toString(), "" != i && (j = {
                                                    fnsr: i.replace(/\s\s+/g, " ").substring(0, 1e3),
                                                    fnm: f.getFnName(a[c])
                                                }, d.addDebugPixel(j))
                                            } catch (a) {}
                                        }
                                }(i, b.contentWindow))
                            }
                        } catch (c) {}
                    }), b = f.injectIframe('(function fg45s() { var payload = []; Object.getOwnPropertyNames(window).forEach(function(v, x) { if (typeof window[v] === "function") payload.push(btoa(v)); });parent.postMessage(window.frameElement.id + " " + JSON.stringify(payload), parent.location.origin); })();', a), f.setTimeout(function() {
                        document.body.removeChild(b), b = null
                    }, 5e3)
                }
            }, function(a, b, c) {
                "use strict";
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.reportWarnings = b.detectHighMutationCount = void 0;
                var d = c(1),
                    e = c(0),
                    f = c(2);
                b.detectHighMutationCount = function() {
                    var a, b, c, g = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    "function" == typeof g && (a = document.body, b = 0, c = new g(function(a) {
                        a.forEach(function(a) {
                            "childList" !== a.type && "attributes" !== a.type || b++
                        })
                    }), c.observe(a, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0
                    }), e.setTimeout(function() {
                        b > 150 && (d.addPixel(f.HEADLESS_CODE_DOM_MUTATION, 1), c.disconnect()), c.disconnect()
                    }, 6e3))
                }, b.reportWarnings = function() {
                    "function" == typeof ReportingObserver && new ReportingObserver(function(a, b) {
                        a.forEach(function(a) {
                            var b = {
                                dbg: f.DATA_DEBUG_CODE_BROWSER_WARNINGS,
                                type: a.type,
                                msg: a.body.message,
                                src: a.body.sourceFile
                            };
                            d.addDebugPixel(b)
                        })
                    }, {
                        buffered: !0
                    }).observe()
                }
            }, function(a, b, c) {
                "use strict";

                function d(a) {
                    return a ? a.replace(/^\s+|\s+$/g, "") : void 0
                }

                function e(a, b) {
                    try {
                        return a[b]
                    } catch (a) {
                        return
                    }
                }
                Object.defineProperty(b, "__esModule", {
                    value: !0
                }), b.reportError = function(a) {
                    var b, c, n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    n && window[h][i](a), b = window.location.host + window.location.pathname, c = {
                        adViewability: [{
                            error: a === parseInt(a, 10) ? {
                                m: a,
                                debug: encodeURIComponent(b.replace(/\//g, "_"))
                            } : function(a, b) {
                                if (b = b || {}, !a) return {};
                                a.m && a.m.message && (a = a.m);
                                var c, f, g, h, i, n = {
                                        m: function(a, b) {
                                            var c = b.m || b.message || "";
                                            return c += a.m && a.m.message ? a.m.message : a.m && a.m.target && a.m.target.tagName ? "Error handler invoked by " + a.m.target.tagName + " tag" : a.m ? a.m : a.message ? a.message : "Unknown error"
                                        }(a, b),
                                        c: a.c ? "" + a.c : a.c,
                                        s: [],
                                        l: a.l || a.line || a.lineno || a.lineNumber,
                                        name: a.name,
                                        type: a.type
                                    },
                                    o = 0,
                                    p = 0;
                                if ((c = a.stack || (a.err ? a.err.stack : "")) && c.split)
                                    for (f = c.split("\n"); o < f.length && n.s.length < j;)(g = f[o++]) && n.s.unshift(d(g));
                                else
                                    for (h = e(a.args || arguments, "callee"), p = o = 0; h && j > o;) i = k, h.skipTrace || (g = h.toString()) && g.substr && (i = 0 === p ? 4 * k : i, i = 1 == p ? 2 * k : i, n.s.unshift(g.substr(0, i)), p++), h = e(h, "caller"), o++;
                                return !n.f && 0 < n.s.length && function(a) {
                                    if (a && a.s) {
                                        var b, c = 0 < a.s.length ? a.s[0] : "",
                                            d = 1 < a.s.length ? a.s[1] : "";
                                        c && (b = c.match(m)), b && 3 == b.length || !d || (b = d.match(l)), b && 3 == b.length && (a.f = b[1], a.l = b[2])
                                    }
                                }(n), n
                            }(a)
                        }]
                    }, f.addErrorPixel(c), g.detachAllHandlers()
                };
                var f = c(1),
                    g = c(0),
                    h = "console",
                    i = "error",
                    j = 20,
                    k = 256,
                    l = /\(?([^\s]*):(\d+):\d+\)?/,
                    m = /.*@(.*):(\d*)/
            }], a.c = c, a.d = function(b, c, d) {
                a.o(b, c) || Object.defineProperty(b, c, {
                    enumerable: !0,
                    get: d
                })
            }, a.r = function(a) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }, a.t = function(b, c) {
                var d, e;
                if (1 & c && (b = a(b)), 8 & c) return b;
                if (4 & c && "object" == typeof b && b && b.__esModule) return b;
                if (d = Object.create(null), a.r(d), Object.defineProperty(d, "default", {
                        enumerable: !0,
                        value: b
                    }), 2 & c && "string" != typeof b)
                    for (e in b) a.d(d, e, function(a) {
                        return b[a]
                    }.bind(null, e));
                return d
            }, a.n = function(b) {
                var c = b && b.__esModule ? function() {
                    return b["default"]
                } : function() {
                    return b
                };
                return a.d(c, "a", c), c
            }, a.o = function(a, b) {
                return Object.prototype.hasOwnProperty.call(a, b)
            }, a.p = "", a(a.s = 9);
            var b, c
        }), amzncsm.define("domainMask", [], function() {
            function a() {
                var a = window,
                    b = !1;
                try {
                    for (; a.parent.document !== a.document;) {
                        if (!a.parent.document) {
                            b = !0;
                            break
                        }
                        a = a.parent
                    }
                } catch (c) {
                    b = !0
                }
                return {
                    topFrame: a,
                    err: b
                }
            }

            function b(a) {
                var b, c = a.err,
                    d = a.topFrame,
                    e = "";
                if (c) try {
                    try {
                        e = window.top.location.hostname
                    } catch (f) {
                        window.location.ancestorOrigins ? (b = window.location.ancestorOrigins, e = b[b.length - 1]) : parent === top && (e = document.referrer)
                    }
                } catch (f) {
                    e = d.document.referrer
                } else e = d.location.hostname;
                return e
            }

            function c() {
                var c, d, e, f = a(),
                    g = b(f);
                /^https?:\/\//.test(g) === !0 && (c = /https?:\/\/([^\/]*)/, d = g.match(c), g = d[1]), g && (e = {
                    tld: encodeURIComponent(g)
                }, amzncsm.pixelQueue.addPixel(e))
            }
            var d = {
                shortName: "dm"
            };
            return d.init = function(a) {
                c()
            }, d
        }), amzncsm.detectViewability = function(a, b, c, d, e) {
            function f() {
                return A.iab && A.groupm && A.amazon
            }

            function g() {
                var a;
                A.iab === !1 && (a = void 0 !== z.visibilityState && "visible" !== z.visibilityState ? "notActiveTab" : amzncsm.documentHasFocus(z) === !1 ? "windowInBackground" : "notInVP", j('{"adViewability":[{"vCancel": "' + a + '", "pixelId": "' + x + '"}]}', ""))
            }

            function h(a, b) {
                var c = (new Date).getTime(),
                    d = e === !0 ? "_ben" : "",
                    f = {},
                    g = amzncsm.isAmp === !0 ? amzncsm.computeAmpViewability : amzncsm.computeViewability;
                try {
                    switch (a) {
                        case "above_the_fold":
                            f["atf" + d] = b.atf, g.generatePayload(f), j(JSON.stringify(f), "" === d ? "atf/" : "");
                            break;
                        case "viewable":
                            f["v" + d] = {
                                def: b.defn,
                                p: b.p,
                                t: b.t
                            }, window.performance && window.performance.timing && (f.ttv = ((c - (window.performance.timing.responseStart || window.performance.timing.domLoading)) / 1e3).toFixed(2), y && y.performance && y.performance.timing && (f.ptv = ((c - (y.performance.timing.responseStart || y.performance.timing.domLoading)) / 1e3).toFixed(2))), g.getScrollIndex && g.distanceFromVPCenter && (f.si = g.getScrollIndex(k, l), f.dcv = g.distanceFromVPCenter()), g.generatePayload(f), j(JSON.stringify(f), "" === d ? "v/" : "");
                            break;
                        case "unmeasured":
                            f["atf" + d] = "unknown", f.ts = (new Date).getTime(), f.pixelId = x, j(JSON.stringify(f), "" === d ? "atf/" : "")
                    }
                } catch (h) {
                    amzncsm.reportClientError(h)
                }
            }

            function i() {
                function a() {
                    E && clearTimeout(E), E = amzncsm.setTimeout(function() {
                        h("viewable", {
                            viewable: !0,
                            defn: "iab",
                            p: 50,
                            t: 1
                        }), A.iab = !0
                    }, v)
                }

                function b() {
                    G = !0, a(), C = (new Date).getTime() / 1e3, k = amzncsm.computeViewability.scrollX, l = amzncsm.computeViewability.scrollY
                }

                function c() {
                    G = !1, clearTimeout(E), D = (new Date).getTime() / 1e3
                }

                function e(a) {
                    return amzncsm.isAmp === !0 ? amzncsm.computeAmpViewability.isPageVisible() : amzncsm.isWindowAndTabVisible(a)
                }

                function i(a, b) {
                    var c = e(z);
                    switch (a) {
                        case "IAB":
                            c = c && b >= s;
                            break;
                        case "GROUPM":
                            c = c && b >= t;
                            break;
                        case "AMZN":
                            c = c && b >= u
                    }
                    return c
                }

                function j(a) {
                    A.iab === !1 && (i("IAB", a) ? G === !1 && b() : G === !0 && c())
                }

                function m(a) {
                    A.groupm === !1 && i("GROUPM", a) && (h("viewable", {
                        viewable: !0,
                        defn: "groupm",
                        p: 100,
                        t: 0
                    }), A.groupm = !0)
                }

                function n(a) {
                    A.amazon === !1 && i("AMZN", a) && (h("viewable", {
                        viewable: !0,
                        defn: "amzn",
                        p: 0,
                        t: 0
                    }), A.amazon = !0)
                }

                function o(a) {
                    m(a), n(a), j(a)
                }

                function p(a) {
                    i("IAB", a) && amzncsm.setTimeout(g, v + 200)
                }

                function q(a) {
                    var b = a >= s;
                    h("above_the_fold", {
                        atf: b
                    })
                }

                function r(a) {
                    i("IAB", a) ? amzncsm.dispatchCustomEvent("vis" + d) : amzncsm.dispatchCustomEvent("inv" + d)
                }

                function w(a) {
                    r(a), q(a), o(a), p(a)
                }

                function x(a) {
                    h("unmeasured"), amzncsm.reportClientError(a)
                }

                function B(a) {
                    r(a), o(a)
                }
                var C, D, E, F = 0,
                    G = !1;
                return function(a) {
                    if (amzncsm.computeViewability) {
                        if (amzncsm.isAmp === !0) return void amzncsm.computeAmpViewability.initViewComp(w, x, B);
                        F = amzncsm.computeViewability.fractionInViewport(y, z), r(F), f() === !1 && (a === !0 ? (q(F), o(F), p(F)) : o(F))
                    }
                }
            }

            function j() {
                var a = Array.prototype.slice.call(arguments);
                amzncsm.pixelQueue.firePixel.apply(amzncsm.pixelQueue, a)
            }
            var k, l, m, n, o, p, q, r, s = .5,
                t = .95,
                u = .05,
                v = 1e3,
                w = a,
                x = amzncsm.getPixelID(),
                y = b,
                z = c,
                A = {
                    iab: !1,
                    groupm: !1,
                    amazon: !1
                };
            for (this.collectData = function() {
                    var a, b = i();
                    b(!0), amzncsm.isAmp !== !0 && (a = function() {
                        try {
                            var a = amzncsm.setTimeout(function() {
                                a && clearTimeout(a), b(!1)
                            }, 50)
                        } catch (c) {
                            amzncsm.reportClientError(c)
                        }
                    }, amzncsm.addEvent(y, "blur", a, !1), amzncsm.addEvent(y, "focus", a, !1), amzncsm.handleVisibilityChange(window, function() {
                        amzncsm.dispatchCustomEvent("visStateChange" + d), a()
                    }), amzncsm.addEvent(y, "resize", a, !1), amzncsm.addEvent(y, "scroll", a, !1), amzncsm.addCustomEvent("vdrcompl" + d, function(b) {
                        amzncsm.removeEvent(y, "blur", a), amzncsm.removeEvent(y, "focus", a), amzncsm.removeEvent(y, "resize", a), amzncsm.removeEvent(y, "scroll", a)
                    }, !1))
                }, m = null, n = 0, this.xdifr = !1; y.parent && y != y.parent && this.xdifr === !1 && 5 >= n;) try {
                n++, o = y.parent, p = o.document && o.document.body && o.document.body.innerHTML, p && (m = y, y = y.parent, z = y.document)
            } catch (B) {
                this.xdifr = !0;
                break
            }
            if (this.xdifr === !0 && amzncsm.isAmp !== !0 && amzncsm.computeViewability) return void h("unmeasured");
            if (null != m)
                for (q = z.getElementsByTagName("iframe"), q = [].slice.call(q), r = 0; r < q.length; r++)
                    if (q[r].contentWindow == m) {
                        w = q[r];
                        break
                    } a && a.document && "IFRAME" != a.tagName && (a = a.document.body), w && w.document && "IFRAME" != w.tagName && (w = w.document.body), amzncsm.csmReport[d].container = w, amzncsm.csmReport[d].adElement = a
        }, initCSM = function(a, b, c, d, e) {
            var f, g = "DTB",
                h = "Error occurred while processing method rmD";
            try {
                amzncsm.impId = b, amzncsm.bmk = e, amzncsm.host = window.amzncsm.host, amzncsm.rm(g, {
                    e: a,
                    i: b,
                    w: c,
                    d: d
                })
            } catch (i) {
                f = i.message ? i.message : h, amzncsm.reportErrors(g, b, f)
            }
        }, window.amzncsm.rmD = function(a, b, c, d, e, f) {
            amzncsm.csmParams = f, f && f.renderType && (amzncsm.isAmp = "AMP" === f.renderType), initCSM(a, b, c, d, !1)
        }, window.amzncsm.rmDN = function(a, b, c, d) {
            initCSM(a, b, c, d, !0)
        }, window.amzncsm.rmN = function(a, b, c, d) {
            var e, f = "NSA",
                g = "Error occurred while processing method rmN";
            try {
                amzncsm.impId = b, amzncsm.rm(f, {
                    e: a,
                    i: b,
                    w: c,
                    d: d
                })
            } catch (h) {
                e = h.message ? h.message : g, amzncsm.reportErrors(f, b, e)
            }
        }, amzncsm.rm = function() {
            var a, b, c, d, e, f, g;
            return amzncsm.version = "d-1.19", amzncsm.version = "d-1.20", amzncsm.initTime = new Date, amzncsm.fscm = [9, 16, 21, 30], a = {
                DTB: {
                    viewDuration: !0,
                    hoverStats: !0,
                    pageMetrics: !0,
                    fraudMetrics: !0,
                    domainMask: !0,
                    detectBrowser: !0,
                    computeViewability: !0,
                    computeAmpViewability: !0
                },
                NSA: {
                    viewDuration: !1,
                    hoverStats: !1,
                    pageMetrics: !1,
                    fraudMetrics: !1,
                    domainMask: !1,
                    detectBrowser: !1,
                    computeViewability: !0
                }
            }, b = function(a) {
                for (var b, c, d = []; a.parentNode;) {
                    if (a.id) {
                        d.unshift("#" + a.id);
                        break
                    }
                    if (a == a.ownerDocument.documentElement) d.unshift(a.tagName);
                    else {
                        for (b = 1, c = a; c.previousElementSibling; c = c.previousElementSibling, b++);
                        d.unshift(a.tagName + ":nth-child(" + b + ")")
                    }
                    a = a.parentNode
                }
                return d.join(" > ").substring(0, 100)
            }, c = function(a) {
                var b, c;
                if (window.performance && window.performance.getEntriesByType && "function" == typeof window.performance.getEntriesByType)
                    for (b = window.performance.getEntriesByType("resource"), c = 0; c < b.length; ++c)
                        if (a.test(b[c].name) === !0) return b[c];
                return null
            }, d = function() {
                var a, b, d = new RegExp("csm([\\S]+)?.js"),
                    e = c(d);
                null !== e && (a = window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart ? window.performance.timing.navigationStart : 0, b = {
                    ns: a,
                    st: e.startTime.toFixed(2),
                    re: e.responseEnd.toFixed(2),
                    ldTot: e.duration.toFixed(2)
                }, amzncsm.pixelQueue.addPixel(b))
            }, e = function(a) {
                var b, c, d, e = window.performance.getEntriesByType("measure"),
                    f = {};
                for (b = 0; b < e.length; ++b) e[b].name.endsWith(a) && (c = e[b], d = c.name.substring(0, c.name.length - a.length), f[d] = c.duration.toFixed(2));
                amzncsm.pixelQueue.addPixel(f)
            }, f = function(a, c) {
                var d, f = c.e,
                    h = c.i,
                    i = c.w,
                    j = c.d,
                    k = amzncsm.bmk,
                    l = b(f);
                if (amzncsm.csmReport = amzncsm.csmReport || {}, amzncsm.csmReport.hasOwnProperty(l)) {
                    if (1 === amzncsm.csmReport[l].reg && k === !1 || 1 === amzncsm.csmReport[l].ben && k === !0) return !1;
                    k === !0 ? amzncsm.csmReport[l].ben = 1 : amzncsm.csmReport[l].reg = 1
                } else amzncsm.csmReport[l] = {
                    reg: k === !1 ? 1 : 0,
                    ben: k === !0 ? 1 : 0
                };
                g(a, f, h, i, j, l), window.performance && window.performance.mark && "function" == typeof window.performance.mark && window.performance.mark("csmStart" + l), amzncsm.api = a, d = new amzncsm.detectViewability(f, i, j, l, k), d.xdifr !== !1 && amzncsm.isAmp !== !0 || !d.collectData || d.collectData(), window.performance && window.performance.mark && "function" == typeof window.performance.mark && (window.performance.mark("csmEnd" + l), window.performance.measure("csmTot" + l, "csmStart" + l, "csmEnd" + l), e(l)), amzncsm.errors.length > 0 && amzncsm.reportErrors(a, h)
            }, g = function(b, c, e, f, g, h) {
                var i, j, k, l = amzncsm.getModules(c, e, f, g);
                for (i in l)
                    if (l.hasOwnProperty(i) && (j = l[i], (j["default"] === !0 || a[b][i] === !0) && (amzncsm.loadModules(h, [{
                            name: i,
                            params: j.params
                        }]), j.global === !0)))
                        for (k in amzncsm[i]) amzncsm[i].hasOwnProperty(k) && (amzncsm[k] = amzncsm[i][k]);
                window.ADF && (window.ADF.init({
                    pixelQueue: amzncsm.pixelQueue,
                    eventUtils: amzncsm.eventUtils
                }), delete window.ADF), d()
            }, f
        }()
}();