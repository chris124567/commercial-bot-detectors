/* Retrieved from https://static.shorte.st/js/packed/smeadvert-intermediate-ad.js?v1.7.10 */
! function() {
    "use strict";
    top !== self && (top.location = self.location)
}(), ! function(a, b) {
    "undefined" != typeof module ? module.exports = b() : "function" == typeof define && "object" == typeof define.amd ? define(b) : this[a] = b()
}("domready", function(a) {
    function b(a) {
        for (n = 1; a = d.shift();) a()
    }
    var c, d = [],
        e = !1,
        f = document,
        g = f.documentElement,
        h = g.doScroll,
        i = "DOMContentLoaded",
        j = "addEventListener",
        k = "onreadystatechange",
        l = "readyState",
        m = h ? /^loaded|^c/ : /^loaded|c/,
        n = m.test(f[l]);
    return f[j] && f[j](i, c = function() {
        f.removeEventListener(i, c, e), b()
    }, e), h && f.attachEvent(k, c = function() {
        /^c/.test(f[l]) && (f.detachEvent(k, c), b())
    }), a = h ? function(b) {
        self != top ? n ? b() : d.push(b) : function() {
            try {
                g.doScroll("left")
            } catch (c) {
                return setTimeout(function() {
                    a(b)
                }, 50)
            }
            b()
        }()
    } : function(a) {
        n ? a() : d.push(a)
    }
}), ! function(a, b, c) {
    "undefined" != typeof module && module.exports ? module.exports = c() : "function" == typeof define && define.amd ? define(c) : b[a] = c()
}("reqwest", this, function() {
    function succeed(a) {
        var b = protocolRe.exec(a.url);
        return b = b && b[1] || window.location.protocol, httpsRe.test(b) ? twoHundo.test(a.request.status) : !!a.request.response
    }

    function handleReadyState(a, b, c) {
        return function() {
            return a._aborted ? c(a.request) : a._timedOut ? c(a.request, "Request is aborted: timeout") : void(a.request && 4 == a.request[readyState] && (a.request.onreadystatechange = noop, succeed(a) ? b(a.request) : c(a.request)))
        }
    }

    function setHeaders(a, b) {
        var c, d = b.headers || {};
        d.Accept = d.Accept || defaultHeaders.accept[b.type] || defaultHeaders.accept["*"];
        var e = "function" == typeof FormData && b.data instanceof FormData;
        b.crossOrigin || d[requestedWith] || (d[requestedWith] = defaultHeaders.requestedWith), d[contentType] || e || (d[contentType] = b.contentType || defaultHeaders.contentType);
        for (c in d) d.hasOwnProperty(c) && "setRequestHeader" in a && a.setRequestHeader(c, d[c])
    }

    function setCredentials(a, b) {
        "undefined" != typeof b.withCredentials && "undefined" != typeof a.withCredentials && (a.withCredentials = !!b.withCredentials)
    }

    function generalCallback(a) {
        lastValue = a
    }

    function urlappend(a, b) {
        return a + (/\?/.test(a) ? "&" : "?") + b
    }

    function handleJsonp(a, b, c, d) {
        var e = uniqid++,
            f = a.jsonpCallback || "callback",
            g = a.jsonpCallbackName || reqwest.getcallbackPrefix(e),
            h = new RegExp("((^|\\?|&)" + f + ")=([^&]+)"),
            i = d.match(h),
            j = doc.createElement("script"),
            k = 0,
            l = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
        return i ? "?" === i[3] ? d = d.replace(h, "$1=" + g) : g = i[3] : d = urlappend(d, f + "=" + g), win[g] = generalCallback, j.type = "text/javascript", j.src = d, j.async = !0, "undefined" == typeof j.onreadystatechange || l || (j.htmlFor = j.id = "_reqwest_" + e), j.onload = j.onreadystatechange = function() {
            return j[readyState] && "complete" !== j[readyState] && "loaded" !== j[readyState] || k ? !1 : (j.onload = j.onreadystatechange = null, j.onclick && j.onclick(), b(lastValue), lastValue = void 0, head.removeChild(j), void(k = 1))
        }, head.appendChild(j), {
            abort: function() {
                j.onload = j.onreadystatechange = null, c({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(j), k = 1
            }
        }
    }

    function getRequest(a, b) {
        var c, d = this.o,
            e = (d.method || "GET").toUpperCase(),
            f = "string" == typeof d ? d : d.url,
            g = d.processData !== !1 && d.data && "string" != typeof d.data ? reqwest.toQueryString(d.data) : d.data || null,
            h = !1;
        return "jsonp" != d.type && "GET" != e || !g || (f = urlappend(f, g), g = null), "jsonp" == d.type ? handleJsonp(d, a, b, f) : (c = d.xhr && d.xhr(d) || xhr(d), c.open(e, f, d.async === !1 ? !1 : !0), setHeaders(c, d), setCredentials(c, d), win[xDomainRequest] && c instanceof win[xDomainRequest] ? (c.onload = a, c.onerror = b, c.onprogress = function() {}, h = !0) : c.onreadystatechange = handleReadyState(this, a, b), d.before && d.before(c), h ? setTimeout(function() {
            c.send(g)
        }, 200) : c.send(g), c)
    }

    function Reqwest(a, b) {
        this.o = a, this.fn = b, init.apply(this, arguments)
    }

    function setType(a) {
        return a.match("json") ? "json" : a.match("javascript") ? "js" : a.match("text") ? "html" : a.match("xml") ? "xml" : void 0
    }

    function init(o, fn) {
        function complete(a) {
            for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(a)
        }

        function success(resp) {
            var type = o.type || resp && setType(resp.getResponseHeader("Content-Type"));
            resp = "jsonp" !== type ? self.request : resp;
            var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                r = filteredResponse;
            try {
                resp.responseText = r
            } catch (e) {}
            if (r) switch (type) {
                case "json":
                    try {
                        resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")")
                    } catch (err) {
                        return error(resp, "Could not parse JSON in response", err)
                    }
                    break;
                case "js":
                    resp = eval(r);
                    break;
                case "html":
                    resp = r;
                    break;
                case "xml":
                    resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
            }
            for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp), self._successHandler(resp); self._fulfillmentHandlers.length > 0;) resp = self._fulfillmentHandlers.shift()(resp);
            complete(resp)
        }

        function timedOut() {
            self._timedOut = !0, self.request.abort()
        }

        function error(a, b, c) {
            for (a = self.request, self._responseArgs.resp = a, self._responseArgs.msg = b, self._responseArgs.t = c, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(a, b, c);
            complete(a)
        }
        this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._successHandler = function() {}, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
        var self = this;
        fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() {
            timedOut()
        }, o.timeout)), o.success && (this._successHandler = function() {
            o.success.apply(o, arguments)
        }), o.error && this._errorHandlers.push(function() {
            o.error.apply(o, arguments)
        }), o.complete && this._completeHandlers.push(function() {
            o.complete.apply(o, arguments)
        }), this.request = getRequest.call(this, success, error)
    }

    function reqwest(a, b) {
        return new Reqwest(a, b)
    }

    function normalize(a) {
        return a ? a.replace(/\r?\n/g, "\r\n") : ""
    }

    function serial(a, b) {
        var c, d, e, f, g = a.name,
            h = a.tagName.toLowerCase(),
            i = function(a) {
                a && !a.disabled && b(g, normalize(a.attributes.value && a.attributes.value.specified ? a.value : a.text))
            };
        if (!a.disabled && g) switch (h) {
            case "input":
                /reset|button|image|file/i.test(a.type) || (c = /checkbox/i.test(a.type), d = /radio/i.test(a.type), e = a.value, (!(c || d) || a.checked) && b(g, normalize(c && "" === e ? "on" : e)));
                break;
            case "textarea":
                b(g, normalize(a.value));
                break;
            case "select":
                if ("select-one" === a.type.toLowerCase()) i(a.selectedIndex >= 0 ? a.options[a.selectedIndex] : null);
                else
                    for (f = 0; a.length && f < a.length; f++) a.options[f].selected && i(a.options[f])
        }
    }

    function eachFormElement() {
        var a, b, c = this,
            d = function(a, b) {
                var d, e, f;
                for (d = 0; d < b.length; d++)
                    for (f = a[byTag](b[d]), e = 0; e < f.length; e++) serial(f[e], c)
            };
        for (b = 0; b < arguments.length; b++) a = arguments[b], /input|select|textarea/i.test(a.tagName) && serial(a, c), d(a, ["input", "select", "textarea"])
    }

    function serializeQueryString() {
        return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments))
    }

    function serializeHash() {
        var a = {};
        return eachFormElement.apply(function(b, c) {
            b in a ? (a[b] && !isArray(a[b]) && (a[b] = [a[b]]), a[b].push(c)) : a[b] = c
        }, arguments), a
    }

    function buildParams(a, b, c, d) {
        var e, f, g, h = /\[\]$/;
        if (isArray(b))
            for (f = 0; b && f < b.length; f++) g = b[f], c || h.test(a) ? d(a, g) : buildParams(a + "[" + ("object" == typeof g ? f : "") + "]", g, c, d);
        else if (b && "[object Object]" === b.toString())
            for (e in b) buildParams(a + "[" + e + "]", b[e], c, d);
        else d(a, b)
    }
    var win = window,
        doc = document,
        httpsRe = /^http/,
        protocolRe = /(^\w+):\/\//,
        twoHundo = /^(20\d|1223)$/,
        byTag = "getElementsByTagName",
        readyState = "readyState",
        contentType = "Content-Type",
        requestedWith = "X-Requested-With",
        head = doc[byTag]("head")[0],
        uniqid = 0,
        callbackPrefix = "reqwest_" + +new Date,
        lastValue, xmlHttpRequest = "XMLHttpRequest",
        xDomainRequest = "XDomainRequest",
        noop = function() {},
        isArray = "function" == typeof Array.isArray ? Array.isArray : function(a) {
            return a instanceof Array
        },
        defaultHeaders = {
            contentType: "application/x-www-form-urlencoded",
            requestedWith: xmlHttpRequest,
            accept: {
                "*": "text/javascript, text/html, application/xml, text/xml, */*",
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                js: "application/javascript, text/javascript"
            }
        },
        xhr = function(a) {
            if (a.crossOrigin === !0) {
                var b = win[xmlHttpRequest] ? new XMLHttpRequest : null;
                if (b && "withCredentials" in b) return b;
                if (win[xDomainRequest]) return new XDomainRequest;
                throw new Error("Browser does not support cross-origin requests")
            }
            return win[xmlHttpRequest] ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
        },
        globalSetupOptions = {
            dataFilter: function(a) {
                return a
            }
        };
    return Reqwest.prototype = {
        abort: function() {
            this._aborted = !0, this.request.abort()
        },
        retry: function() {
            init.call(this, this.o, this.fn)
        },
        then: function(a, b) {
            return a = a || function() {}, b = b || function() {}, this._fulfilled ? this._responseArgs.resp = a(this._responseArgs.resp) : this._erred ? b(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(a), this._errorHandlers.push(b)), this
        },
        always: function(a) {
            return this._fulfilled || this._erred ? a(this._responseArgs.resp) : this._completeHandlers.push(a), this
        },
        fail: function(a) {
            return this._erred ? a(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(a), this
        },
        "catch": function(a) {
            return this.fail(a)
        }
    }, reqwest.serializeArray = function() {
        var a = [];
        return eachFormElement.apply(function(b, c) {
            a.push({
                name: b,
                value: c
            })
        }, arguments), a
    }, reqwest.serialize = function() {
        if (0 === arguments.length) return "";
        var a, b, c = Array.prototype.slice.call(arguments, 0);
        return a = c.pop(), a && a.nodeType && c.push(a) && (a = null), a && (a = a.type), b = "map" == a ? serializeHash : "array" == a ? reqwest.serializeArray : serializeQueryString, b.apply(null, c)
    }, reqwest.toQueryString = function(a, b) {
        var c, d, e = b || !1,
            f = [],
            g = encodeURIComponent,
            h = function(a, b) {
                b = "function" == typeof b ? b() : null == b ? "" : b, f[f.length] = g(a) + "=" + g(b)
            };
        if (isArray(a))
            for (d = 0; a && d < a.length; d++) h(a[d].name, a[d].value);
        else
            for (c in a) a.hasOwnProperty(c) && buildParams(c, a[c], e, h);
        return f.join("&").replace(/%20/g, "+")
    }, reqwest.getcallbackPrefix = function() {
        return callbackPrefix
    }, reqwest.compat = function(a, b) {
        return a && (a.type && (a.method = a.type) && delete a.type, a.dataType && (a.type = a.dataType), a.jsonpCallback && (a.jsonpCallbackName = a.jsonpCallback) && delete a.jsonpCallback, a.jsonp && (a.jsonpCallback = a.jsonp)), new Reqwest(a, b)
    }, reqwest.ajaxSetup = function(a) {
        a = a || {};
        for (var b in a) globalSetupOptions[b] = a[b]
    }, reqwest
}),
function(a) {
    "use strict";
    var b = function(a) {
        var b = Array.prototype.forEach,
            c = Array.prototype.map;
        this.each = function(a, c, d) {
            if (null !== a)
                if (b && a.forEach === b) a.forEach(c, d);
                else if (a.length === +a.length) {
                for (var e = 0, f = a.length; f > e; e++)
                    if (c.call(d, a[e], e, a) === {}) return
            } else
                for (var g in a)
                    if (a.hasOwnProperty(g) && c.call(d, a[g], g, a) === {}) return
        }, this.map = function(a, b, d) {
            var e = [];
            return null == a ? e : c && a.map === c ? a.map(b, d) : (this.each(a, function(a, c, f) {
                e[e.length] = b.call(d, a, c, f)
            }), e)
        }, "object" == typeof a ? (this.hasher = a.hasher, this.canvas = a.canvas) : "function" == typeof a && (this.hasher = a)
    };
    b.prototype = {
        get: function() {
            var a = [];
            a.push(navigator.userAgent), a.push(navigator.language), a.push(screen.colorDepth), a.push((new Date).getTimezoneOffset()), a.push(this.hasSessionStorage()), a.push(this.hasLocalStorage()), a.push(!!window.indexedDB), a.push(typeof document.body.addBehavior), a.push(typeof window.openDatabase), a.push(navigator.cpuClass), a.push(navigator.platform), a.push(navigator.doNotTrack);
            var b = this.map(navigator.plugins, function(a) {
                var b = this.map(a, function(a) {
                    return [a.type, a.suffixes].join("~")
                }).join(",");
                return [a.name, a.description, b].join("::")
            }, this).join(";");
            return a.push(b), this.canvas && this.isCanvasSupported() && a.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(a.join("###"), 31) : this.murmurhash3_32_gc(a.join("###"), 31)
        },
        murmurhash3_32_gc: function(a, b) {
            var c, d, e, f, g, h, i, j;
            for (c = 3 & a.length, d = a.length - c, e = b, g = 3432918353, h = 461845907, j = 0; d > j;) i = 255 & a.charCodeAt(j) | (255 & a.charCodeAt(++j)) << 8 | (255 & a.charCodeAt(++j)) << 16 | (255 & a.charCodeAt(++j)) << 24, ++j, i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i, e = e << 13 | e >>> 19, f = 5 * (65535 & e) + ((5 * (e >>> 16) & 65535) << 16) & 4294967295, e = (65535 & f) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
            switch (i = 0, c) {
                case 3:
                    i ^= (255 & a.charCodeAt(j + 2)) << 16;
                case 2:
                    i ^= (255 & a.charCodeAt(j + 1)) << 8;
                case 1:
                    i ^= 255 & a.charCodeAt(j), i = (65535 & i) * g + (((i >>> 16) * g & 65535) << 16) & 4294967295, i = i << 15 | i >>> 17, i = (65535 & i) * h + (((i >>> 16) * h & 65535) << 16) & 4294967295, e ^= i
            }
            return e ^= a.length, e ^= e >>> 16, e = 2246822507 * (65535 & e) + ((2246822507 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 13, e = 3266489909 * (65535 & e) + ((3266489909 * (e >>> 16) & 65535) << 16) & 4294967295, e ^= e >>> 16, e >>> 0
        },
        hasLocalStorage: function() {
            try {
                return !!a.localStorage
            } catch (b) {
                return !0
            }
        },
        hasSessionStorage: function() {
            try {
                return !!a.sessionStorage
            } catch (b) {
                return !0
            }
        },
        isCanvasSupported: function() {
            var a = document.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        },
        getCanvasFingerprint: function() {
            var a = document.createElement("canvas"),
                b = a.getContext("2d"),
                c = "http://valve.github.io";
            return b.textBaseline = "top", b.font = "14px 'Arial'", b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.fillText(c, 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.fillText(c, 4, 17), a.toDataURL()
        }
    }, "object" == typeof module && "object" == typeof exports && (module.exports = b), a.Fingerprint = b
}(window),
function(a) {
    if (void 0 === a.fuckAdBlock) {
        var b = function(b) {
            void 0 !== b && this.setOption(b);
            var c = this,
                d = function() {
                    setTimeout(function() {
                        c._options.checkOnLoad === !0 && (null === c._var.bait && c._creatBait(), setTimeout(function() {
                            c.check()
                        }, 1))
                    }, 1)
                };
            a.addEventListener ? a.addEventListener("load", d, !1) : a.attachEvent("onload", d)
        };
        b.prototype._options = {
            checkOnLoad: !0,
            resetOnEnd: !0,
            loopCheckTime: 50,
            loopMaxNumber: 5,
            baitClass: "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
            baitStyle: "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"
        }, b.prototype._var = {
            version: "3.0.1",
            bait: null,
            checking: !1,
            loop: null,
            loopNumber: 0,
            event: {
                detected: [],
                notDetected: []
            }
        }, b.prototype._bait = null, b.prototype.setOption = function(a, b) {
            if (void 0 !== b) {
                var c = a;
                a = {}, a[c] = b
            }
            for (option in a) this._options[option] = a[option];
            return this
        }, b.prototype._creatBait = function() {
            var b = document.createElement("div");
            b.setAttribute("class", this._options.baitClass), b.setAttribute("style", this._options.baitStyle), this._var.bait = a.document.body.appendChild(b), this._var.bait.offsetParent, this._var.bait.offsetHeight, this._var.bait.offsetLeft, this._var.bait.offsetTop, this._var.bait.offsetWidth, this._var.bait.clientHeight, this._var.bait.clientWidth
        }, b.prototype._destroyBait = function() {
            a.document.body.removeChild(this._var.bait), this._var.bait = null
        }, b.prototype.check = function(a) {
            if (void 0 === a && (a = !0), this._var.checking === !0) return !1;
            this._var.checking = !0, null === this._var.bait && this._creatBait();
            var b = this;
            return this._var.loopNumber = 0, a === !0 && (this._var.loop = setInterval(function() {
                b._checkBait(a)
            }, this._options.loopCheckTime)), this._checkBait(a), !0
        }, b.prototype._checkBait = function(b) {
            var c = !1;
            if (null === this._var.bait && this._creatBait(), (null !== a.document.body.getAttribute("abp") || null === this._var.bait.offsetParent || 0 == this._var.bait.offsetHeight || 0 == this._var.bait.offsetLeft || 0 == this._var.bait.offsetTop || 0 == this._var.bait.offsetWidth || 0 == this._var.bait.clientHeight || 0 == this._var.bait.clientWidth) && (c = !0), void 0 !== a.getComputedStyle) {
                var d = a.getComputedStyle(this._var.bait, null);
                ("none" == d.getPropertyValue("display") || "hidden" == d.getPropertyValue("visibility")) && (c = !0)
            }
            b === !0 && (this._var.loopNumber++, this._var.loopNumber >= this._options.loopMaxNumber && (clearInterval(this._var.loop), this._var.loop = null, this._var.loopNumber = 0)), c === !0 ? (b === !0 && (this._var.checking = !1), this._destroyBait(), this.emitEvent(!0)) : (null === this._var.loop || b === !1) && (b === !0 && (this._var.checking = !1), this._destroyBait(), this.emitEvent(!1))
        }, b.prototype.emitEvent = function(a) {
            var b = this._var.event[a === !0 ? "detected" : "notDetected"];
            for (var c in b) b.hasOwnProperty(c) && b[c]();
            return this._options.resetOnEnd === !0 && this.clearEvent(), this
        }, b.prototype.clearEvent = function() {
            this._var.event.detected = [], this._var.event.notDetected = []
        }, b.prototype.on = function(a, b) {
            return this._var.event[a === !0 ? "detected" : "notDetected"].push(b), this
        }, b.prototype.onDetected = function(a) {
            return this.on(!0, a)
        }, b.prototype.onNotDetected = function(a) {
            return this.on(!1, a)
        }, a.fuckAdBlock = new b
    }
}(window), app.tools = function(a, b, c) {
        "use strict";
        a.sendCookie = function(a, c, d, e) {
            "undefined" == typeof e && (e = "/");
            var f = new Date;
            f.setTime(f.getTime() + 1e3 * d);
            var g = "; expires=" + f.toGMTString();
            b.document.cookie = a + "=" + c + "; " + g + "; path=" + e
        }, a.readCookie = function(a) {
            var c = b.document.cookie;
            if (!c.length) return null;
            var d = c.indexOf(a + "=");
            if (-1 === d || !d && a !== c.substring(0, a.length)) return null;
            var e = d + a.length + 1,
                f = c.indexOf(";", e);
            return -1 === f && (f = c.length), decodeURIComponent(c.substring(e, f))
        }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var b = Array.prototype.slice.call(arguments, 1),
                c = this,
                d = function() {},
                e = function() {
                    return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                };
            return d.prototype = this.prototype, e.prototype = new d, e
        }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
            if (null == this) throw new TypeError;
            var b = Object(this),
                c = b.length;
            if (0 === c) return -1;
            var d = 0;
            if (arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
            for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                if (e in b && b[e] === a) return e;
            return -1
        }), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
            var c, d;
            if (null == this) throw new TypeError("this is null or not defined");
            var e, f = Object(this),
                g = f.length >>> 0;
            if ("[object Function]" !== {}.toString.call(a)) throw new TypeError(a + " is not a function");
            for (arguments.length >= 2 && (c = b), d = 0; g > d;) d in f && (e = f[d], a.call(c, e, d, f)), d++
        }), Array.prototype.map || (Array.prototype.map = function(a) {
            if (void 0 === this || null === this) throw new TypeError;
            var b = Object(this),
                c = b.length >>> 0;
            if ("function" != typeof a) throw new TypeError;
            for (var d = new Array(c), e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++) f in b && (d[f] = a.call(e, b[f], f, b));
            return d
        }), "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(a, b) {
            if (null === this || "undefined" == typeof this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof a) throw new TypeError(a + " is not a function");
            var c, d, e = this.length >>> 0,
                f = !1;
            for (1 < arguments.length && (d = b, f = !0), c = 0; e > c; ++c) this.hasOwnProperty(c) && (f ? d = a(d, this[c], c, this) : (d = this[c], f = !0));
            if (!f) throw new TypeError("Reduce of empty array with no initial value");
            return d
        });
        var d = document.getElementById;
        return document.getElementById = "function" == typeof document.getElementById && document.getElementById || function(a) {
            return d(a)
        }, String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }), String.prototype.truncate || (String.prototype.truncate = function() {
            var a = arguments[0],
                b = arguments[1] || "...";
            return this.length > a ? this.substring(0, a - b.length) + b : this.toString()
        }), String.prototype.sprintf || (String.prototype.sprintf = function() {
            for (var a = this, b = 0, c = arguments.length; c > b; b++) {
                var d = new RegExp("\\{" + b + "\\}", "g");
                a = a.replace(d, arguments[b])
            }
            return a
        }), a.toggle = function(a, b, c) {
            var d = new RegExp("\\b" + b + "\\b", "gi");
            c = c || "className", d.test(a[c]) ? a[c] = a[c].replace(d, "").trim() : a[c] = (a[c] += " " + b).trim()
        }, Function.prototype.bindParams = function() {
            var a = Array.prototype.slice.call(arguments),
                b = this;
            return function() {
                return b.apply(b, a.concat(Array.prototype.slice.call(arguments)))
            }
        }, a.mergeRecursive = function(b, d) {
            for (var e in d) d.hasOwnProperty(e) && (d[e] !== c && d[e].constructor === Object && b[e] && b[e].constructor === Object ? b[e] = a.mergeRecursive(b[e], d[e]) : b[e] = d[e]);
            return b
        }, a
    }(app.tools || {}, this), app.window = function() {
        "use strict";

        function a() {
            "undefined" != typeof document.hidden ? c = "hidden" : "undefined" != typeof document.mozHidden ? c = "mozHidden" : "undefined" != typeof document.msHidden ? c = "msHidden" : "undefined" != typeof document.webkitHidden && (c = "webkitHidden")
        }

        function b() {
            return "undefined" == typeof document[c] ? !0 : document[c] === !1
        }
        var c;
        return a(), {
            isVisible: b
        }
    }(),
    function(a, b) {
        "use strict";
        a.jsPopUnder = {}, a.jsPopUnder.init = function(a, c) {
            function d() {
                try {
                    r = Math.floor(document.cookie.split(s + "Cap=")[1].split(";")[0])
                } catch (a) {}
                return r >= q || -1 !== document.cookie.indexOf(s + "=")
            }

            function e(a, c, e, g, h, k) {
                if (!d()) {
                    var l = "toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=" + e.toString() + ",height=" + g.toString() + ",screenX=" + h + ",screenY=" + k,
                        m = function(e) {
                            if (e.stop(), b.off(document, "click", m), !d() && (j = i.window.open(a, c, l))) {
                                var g = new Date,
                                    h = new Date(g.setTime(g.getTime() + p));
                                document.cookie = s + "=1;expires=" + h.toGMTString() + ";path=/", document.cookie = s + "Cap=" + (r + 1) + ";expires=" + h.toGMTString() + ";path=/", f()
                            }
                            b.fire(e.target, "click")
                        };
                    b.on(document, "click", m)
                }
            }

            function f() {
                try {
                    j.blur(), j.opener.window.focus(), window.self.window.focus(), window.focus(), t.firefox && g(), t.webkit && h(), t.msie && setTimeout(function() {
                        j.blur(), j.opener.window.focus(), window.self.window.focus(), window.focus()
                    }, 1e3)
                } catch (a) {}
            }

            function g() {
                var a = window.open("about:blank");
                a.focus(), a.close()
            }

            function h() {
                var a = "",
                    b = document.createElement("a");
                b.href = "data:text/html,<scr" + a + "ipt>window.close();</scr" + a + "ipt>", document.getElementsByTagName("body")[0].appendChild(b);
                var c = document.createEvent("MouseEvents");
                c.initMouseEvent("click", !1, !0, window, 0, 0, 0, 0, 0, !0, !1, !1, !0, 0, null), b.dispatchEvent(c), b.parentNode.removeChild(b)
            }
            var i = top != self && "string" == typeof top.document.location.toString() ? top : self,
                j = null;
            c = c || {};
            var k = c.name || Math.floor(1e3 * Math.random() + 1),
                l = c.width || window.outerWidth || window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                m = c.height || window.outerHeight - 100 || window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                n = "undefined" != typeof c.left ? c.left.toString() : window.screenX || window.screenLeft,
                o = "undefined" != typeof c.top ? c.top.toString() : window.screenY || window.screenTop,
                p = c.wait || 3600;
            p = 1e3 * p;
            var q = c.cap || 2,
                r = 0,
                s = c.cookie || "__.popunder",
                t = function() {
                    var a = navigator.userAgent.toLowerCase(),
                        b = {
                            webkit: /webkit/.test(a),
                            mozilla: /mozilla/.test(a) && !/(compatible|webkit)/.test(a),
                            chrome: /chrome/.test(a),
                            msie: /msie/.test(a) && !/opera/.test(a),
                            firefox: /firefox/.test(a),
                            safari: /safari/.test(a) && !/chrome/.test(a),
                            opera: /opera/.test(a)
                        };
                    return b.version = b.safari ? (a.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (a.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1], b
                }();
            d() || e(a, k, l, m, n, o)
        }
    }(app || {}, bean), app.adSessionNotifier = function(a, b, c) {
        "use strict";

        function d(a) {
            h = a, i = new b({
                canvas: !0
            }).get()
        }

        function e() {
            app.redirectBlocker.stopBlocking(), app.skipClickNotify.hideSkipButton(), app.skipClickNotify.showError(c.intermediate.error.generalMessage), ga("send", "event", "interstitial", "callback", "error")
        }

        function f(a) {
            app.redirectBlocker.stopBlocking(), app.skipClickNotify.hideTimer(), app.skipClickNotify.showSkipButton(), c.intermediate.destinationUrl = a.destinationUrl, ga("send", "event", "interstitial", "callback", "success")
        }

        function g() {
            a({
                url: c.adSessionNotifier.callbackUrl,
                method: "post",
                data: {
                    sessionId: h,
                    browserToken: i
                },
                type: "jsonp",
                success: f,
                timeout: 5e3,
                error: e
            })
        }
        var h, i = "";
        return {
            init: d,
            makeRequest: g,
            successCallback: f,
            errorCallback: e
        }
    }(reqwest, Fingerprint, app.options), app.adsBlockerDetector = function(a) {
        "use strict";
        fuckAdBlock.onDetected(function() {
            fuckAdBlock.clearEvent(), a()
        }), fuckAdBlock.check()
    }, app.advertisement = function(a, b) {
        "use strict";
        var c = document.querySelector(a),
            d = "displayAdvertisementEventName",
            e = function() {
                return b ? void bean.fire(window, d) : void f()
            },
            f = function() {
                var a = c.getAttribute("data-advertisement");
                c && a && (c.innerHTML = a)
            };
        return {
            beforeDisplayingAdvertisementEventName: d,
            showAdvertisement: e,
            injectAdvertisement: f
        }
    }, app.captcha = function(a, b, c) {
        "use strict";
        var d = "validCaptchaEvent",
            e = function(a) {
                return a.valid ? (c.showSuccessMessage(), void bean.fire(window, d)) : void c.showErrorMessage()
            },
            f = function() {
                var b, d, e;
                b = {
                    sessionId: a,
                    captchaResponse: grecaptcha.getResponse()
                }, d = c.getFormData();
                for (e in d) d.hasOwnProperty(e) && (b[e] = d[e]);
                return b
            },
            g = function() {
                reqwest({
                    url: b,
                    method: "post",
                    data: f(),
                    type: "json",
                    success: e,
                    error: e
                })
            };
        return {
            validCaptchaEventName: d,
            verifyCallback: g,
            captchaInterface: c
        }
    }, app.captcha = app.captcha || {}, app.captcha.ux = function(a) {
        "use strict";
        var b = document.querySelector(a.captchaElementSelector),
            c = document.querySelector(a.captchaInfoSelector),
            d = document.querySelector(a.captchaErrorElementSelector),
            e = document.querySelector(a.captchaWaitSelector),
            f = a.hideCaptchaAfterSuccessMessage,
            g = function() {
                b.style.display = ""
            },
            h = function() {
                b.style.display = "none"
            },
            i = function() {
                d.style.display = "", c.style.display = "none"
            },
            j = function() {
                e.classList.add("active"), f && setTimeout(function() {
                    h()
                }, 500)
            },
            k = function() {
                var a, c, d = {};
                for (a = b.getElementsByTagName("input"), c = a.length - 1; c >= 0; c--) d[a[c].getAttribute("name")] = a[c].value;
                return d
            };
        return {
            showCaptcha: g,
            hideCaptcha: h,
            showErrorMessage: i,
            showSuccessMessage: j,
            getFormData: k
        }
    }, app.countdown = function(a, b) {
        "use strict";

        function c() {
            (a.timerPageVisibilityChecking === !1 || b.window.isVisible() !== !1) && (j(i), 0 === i && (k(), d()), i--)
        }

        function d() {
            clearInterval(g)
        }

        function e() {
            clearInterval(g), i = h, g = setInterval(c, 1e3)
        }

        function f(a, b, c) {
            h = a, i = h || 10, j = b || function() {}, k = c || function() {}
        }
        var g, h, i, j, k;
        return {
            init: f,
            start: e
        }
    }(app.options, {
        window: app.window
    }),
    function(a, b, c, d, e, f) {
        "use strict";
        a.skipClickNotify = {
            displayCaptcha: f,
            displayCaptchaAfterSkipButtonClick: f,
            skipButton: f,
            errorElement: f,
            timerElement: f,
            captchaInfoMsgElement: f,
            captchaErrorMsgElement: f,
            captchaWaitElement: f,
            skipButtonClickedEvent: f,
            skipButtonClickedEventName: "skipButtonClicked"
        }, a.skipClickNotify.init = function() {
            a.skipClickNotify.displayCaptcha = d.intermediate.displayCaptcha, a.skipClickNotify.displayCaptchaAfterSkipButtonClick = d.intermediate.captchaDisplayMoment === app.intermediatePage.captchaDisplayMoments.afterSkipButtonClick, a.skipClickNotify.skipButton = e(d.intermediate.skipButtonId), a.skipClickNotify.errorElement = e(d.intermediate.error.elementId), a.skipClickNotify.timerElement = e(d.intermediate.timerId), c.bean.on(a.skipClickNotify.skipButton, "click", a.skipClickNotify.skipButtonAction)
        }, a.skipClickNotify.skipButtonAction = function(b) {
            var e = a.skipClickNotify.displayCaptcha && a.skipClickNotify.displayCaptchaAfterSkipButtonClick;
            return d.framekiller = !1, app.redirectBlocker.stopBlocking(), b.stop(), e ? void c.bean.fire(window, a.skipClickNotify.skipButtonClickedEventName) : (c.bean.off(a.skipClickNotify.skipButton, "click", a.skipClickNotify.skipButtonAction), void a.skipClickNotify.trackRequest())
        }, a.skipClickNotify.notify = function() {
            d.intermediate.error.showTargetUrlError && a.skipClickNotify.showError(d.intermediate.error.wrongTargetUrlMessage)
        }, a.skipClickNotify.showError = function(b) {
            a.skipClickNotify.errorElement.innerHTML = b, a.skipClickNotify.errorElement.setAttribute("class", "wrong_url show")
        }, a.skipClickNotify.hideError = function() {
            a.skipClickNotify.errorElement.setAttribute("class", "wrong_url hidden")
        }, a.skipClickNotify.showSkipButton = function() {
            a.skipClickNotify.skipButton.setAttribute("class", "skip-btn show")
        }, a.skipClickNotify.hideSkipButton = function() {
            a.skipClickNotify.skipButton.setAttribute("class", "skip-btn")
        }, a.skipClickNotify.hideTimer = function() {
            a.skipClickNotify.timerElement.setAttribute("class", "skip-timer")
        }, a.skipClickNotify.trackRequest = function() {
            c.bean.fire(b, "click"), c.reqwest({
                url: "bundles/smeadvertisement/img/track.gif?nocache=" + (new Date).getTime(),
                success: a.skipClickNotify.redirectToTargetUrl,
                error: a.skipClickNotify.redirectToTargetUrl
            }), ga("send", "event", "interstitial", "click", "skip")
        }, a.skipClickNotify.redirectToTargetUrl = function() {
            b.location.href = d.intermediate.destinationUrl
        }, c.domready(a.skipClickNotify.init)
    }(app || {}, document, {
        domready: domready,
        reqwest: reqwest,
        bean: bean
    }, app.options, document.getElementById.bind(document)),
    function(a) {
        "use strict";
        app.options.adSessionNotifier.init === !0 && a(function() {
            app.adSessionNotifier.init(app.options.adSessionNotifier.sessionId)
        })
    }(domready), app.intermediatePage = app.intermediatePage || {}, app.intermediatePage.initAdvertisement = function() {
        "use strict";
        var a, b, c = "#intermediate-ad";
        b = app.options.intermediate.displayCaptcha && app.options.intermediate.captchaDisplayMoment === app.intermediatePage.captchaDisplayMoments.beforeAdvertisementDisplay, a = app.advertisement(c, b), b && (app.intermediatePage.captcha = app.intermediatePage.initCaptcha(function() {
            a.injectAdvertisement(), app.intermediatePage.initCountdownTimer()
        }, a.beforeDisplayingAdvertisementEventName, !0)), a.showAdvertisement()
    }, bean.on(window, "load", app.intermediatePage.initAdvertisement), app.intermediatePage = app.intermediatePage || {}, app.intermediatePage.initAdsBlockerDetector = function() {
        "use strict";
        var a = function() {
            app.intermediatePage.adsBlockerDetected = !0, app.redirectBlocker.stopBlocking()
        };
        app.adsBlockerDetector(a)
    }, bean.on(window, "load", app.intermediatePage.initAdsBlockerDetector), app.intermediatePage = app.intermediatePage || {}, app.intermediatePage.captchaDisplayMoments = {
        beforeAdvertisementDisplay: "beforeAdvertisementDisplay",
        afterSkipButtonClick: "afterSkipButtonClick"
    }, app.intermediatePage.initCaptcha = function(a, b, c) {
        "use strict";
        var d = app.captcha.ux({
                captchaElementSelector: app.options.intermediate.captchaElementSelector,
                captchaInfoSelector: app.options.intermediate.captchaInfoSelector,
                captchaErrorElementSelector: app.options.intermediate.captchaErrorElementSelector,
                captchaWaitSelector: app.options.intermediate.captchaWaitSelector,
                hideCaptchaAfterSuccessMessage: c
            }),
            e = app.captcha(app.options.adSessionNotifier.sessionId, app.options.captchaNotifier.callbackUrl, d);
        return bean.on(window, e.validCaptchaEventName, function() {
            a()
        }), bean.on(window, b, function() {
            e.captchaInterface.showCaptcha()
        }), e
    }, app.intermediatePage = app.intermediatePage || {}, app.intermediatePage.initCountdownTimer = function() {
        "use strict";
        var a = document.getElementById(app.options.intermediate.timerId),
            b = app.options.intermediate.displayCaptcha && app.options.intermediate.captchaDisplayMoment === app.intermediatePage.captchaDisplayMoments.afterSkipButtonClick;
        a.setAttribute("class", "skip-timer show"), app.countdown.init(app.options.intermediate.seconds, function(b) {
            a.innerHTML = app.options.intermediate.waitText.sprintf(b)
        }, function() {
            app.skipClickNotify.notify(), app.adSessionNotifier.makeRequest()
        }), setTimeout(function() {
            app.countdown.start()
        }, 1e3 * app.options.intermediate.timerDelay), b && (app.intermediatePage.captcha = app.intermediatePage.initCaptcha(app.skipClickNotify.trackRequest, app.skipClickNotify.skipButtonClickedEventName, !1))
    }, bean.on(window, "load", function() {
        "use strict";
        var a = app.options.intermediate.displayCaptcha && app.options.intermediate.captchaDisplayMoment === app.intermediatePage.captchaDisplayMoments.beforeAdvertisementDisplay;
        a || app.intermediatePage.initCountdownTimer()
    }),
    function(a, b, c) {
        "use strict";
        b(function() {
            c.popUnderUrl && a.jsPopUnder.init(a.options.popUnderUrl, {
                wait: 1800,
                cap: 1,
                cookie: "pucookie"
            })
        })
    }(app, domready, app.options), app.gaDimensionLocked = function() {
        "use strict";

        function a() {
            ga("set", "dimension5", app.options.gaTracker.dimensionUserLocked.userLocked)
        }
        return {
            setDimension: a
        }
    }(), app.gaPageviewTracker = function() {
        "use strict";

        function a() {
            for (var a in c) c.hasOwnProperty(a) && app[a][c[a]]()
        }

        function b(b) {
            c = b, a(), ga("send", "pageview")
        }
        var c = [];
        return {
            init: b
        }
    }(), app.gaServiceVersionDimensionSetter = function() {
        "use strict";

        function a() {
            ga("set", "dimension2", app.options.gaTracker.serviceVersionSetter.version)
        }
        return {
            setDimension: a
        }
    }(), app.gaServiceUserIdSetter = function() {
        "use strict";

        function a() {
            0 !== app.options.gaTracker.serviceUserIdSetter.userId && (ga("set", "userId", app.options.gaTracker.serviceUserIdSetter.userId), ga("set", "dimension7", app.options.gaTracker.serviceUserIdSetter.userId))
        }
        return {
            setUserId: a
        }
    }(),
    function() {
        "use strict";
        !0 === app.options.initializeModules.gaPageviewTracker && domready(function() {
            app.gaPageviewTracker.init(app.options.gaTracker.setters)
        })
    }();