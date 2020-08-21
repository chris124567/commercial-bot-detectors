/* Retrieved from https://web.archive.org/web/20170109092628js_/http://scontent.lrcdn.net/outbound-cdn-static/js/LiveRail.AdManager-1.0.js. */

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

    /*
        LiveRail.AdManager
        release 2.5.5
        build 201604261307
    */

    ! function(a, b) {
        a.getVPAIDAd = b()
    }(this, function() {
        var requirejs, require, define;
        ! function(a) {
            function b(a, b) {
                return r.call(a, b)
            }

            function c(a, b) {
                var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"),
                    o = p.map,
                    q = o && o["*"] || {};
                if (a && "." === a.charAt(0))
                    if (b) {
                        for (n = n.slice(0, n.length - 1), a = a.split("/"), g = a.length - 1, p.nodeIdCompat && t.test(a[g]) && (a[g] = a[g].replace(t, "")), a = n.concat(a), k = 0; k < a.length; k += 1)
                            if (m = a[k], "." === m) a.splice(k, 1), k -= 1;
                            else if (".." === m) {
                            if (1 === k && (".." === a[2] || ".." === a[0])) break;
                            k > 0 && (a.splice(k - 1, 2), k -= 2)
                        }
                        a = a.join("/")
                    } else 0 === a.indexOf("./") && (a = a.substring(2));
                if ((n || q) && o) {
                    for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                        if (d = c.slice(0, k).join("/"), n)
                            for (l = n.length; l > 0; l -= 1)
                                if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                    f = e, h = k;
                                    break
                                } if (f) break;
                        !i && q && q[d] && (i = q[d], j = k)
                    }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"))
                }
                return a
            }

            function d(b, c) {
                return function() {
                    return k.apply(a, s.call(arguments, 0).concat([b, c]))
                }
            }

            function e(a) {
                return function(b) {
                    return c(b, a)
                }
            }

            function f(a) {
                return function(b) {
                    n[a] = b
                }
            }

            function g(c) {
                if (b(o, c)) {
                    var d = o[c];
                    delete o[c], q[c] = !0, j.apply(a, d)
                }
                if (!b(n, c) && !b(q, c)) throw new Error("No " + c);
                return n[c]
            }

            function h(a) {
                var b, c = a ? a.indexOf("!") : -1;
                return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
            }

            function i(a) {
                return function() {
                    return p && p.config && p.config[a] || {}
                }
            }
            var j, k, l, m, n = {},
                o = {},
                p = {},
                q = {},
                r = Object.prototype.hasOwnProperty,
                s = [].slice,
                t = /\.js$/;
            l = function(a, b) {
                var d, f = h(a),
                    i = f[0];
                return a = f[1], i && (i = c(i, b), d = g(i)), i ? a = d && d.normalize ? d.normalize(a, e(b)) : c(a, b) : (a = c(a, b), f = h(a), i = f[0], a = f[1], i && (d = g(i))), {
                    f: i ? i + "!" + a : a,
                    n: a,
                    pr: i,
                    p: d
                }
            }, m = {
                require: function(a) {
                    return d(a)
                },
                exports: function(a) {
                    var b = n[a];
                    return "undefined" != typeof b ? b : n[a] = {}
                },
                module: function(a) {
                    return {
                        id: a,
                        uri: "",
                        exports: n[a],
                        config: i(a)
                    }
                }
            }, j = function(c, e, h, i) {
                var j, k, p, r, s, t, u = [],
                    v = typeof h;
                if (i = i || c, "undefined" === v || "function" === v) {
                    for (e = !e.length && h.length ? ["require", "exports", "module"] : e, s = 0; s < e.length; s += 1)
                        if (r = l(e[s], i), k = r.f, "require" === k) u[s] = m.require(c);
                        else if ("exports" === k) u[s] = m.exports(c), t = !0;
                    else if ("module" === k) j = u[s] = m.module(c);
                    else if (b(n, k) || b(o, k) || b(q, k)) u[s] = g(k);
                    else {
                        if (!r.p) throw new Error(c + " missing " + k);
                        r.p.load(r.n, d(i, !0), f(k), {}), u[s] = n[k]
                    }
                    p = h ? h.apply(n[c], u) : void 0, c && (j && j.exports !== a && j.exports !== n[c] ? n[c] = j.exports : p === a && t || (n[c] = p))
                } else c && (n[c] = h)
            }, requirejs = require = k = function(b, c, d, e, f) {
                if ("string" == typeof b) return m[b] ? m[b](c) : g(l(b, c).f);
                if (!b.splice) {
                    if (p = b, p.deps && k(p.deps, p.callback), !c) return;
                    c.splice ? (b = c, c = d, d = null) : b = a
                }
                return c = c || function() {}, "function" == typeof d && (d = e, e = f), e ? j(a, b, c, d) : setTimeout(function() {
                    j(a, b, c, d)
                }, 4), k
            }, k.config = function(a) {
                return k(a)
            }, requirejs._defined = n, define = function(a, c, d) {
                c.splice || (d = c, c = []), b(n, a) || b(o, a) || (o[a] = [a, c, d])
            }, define.amd = {
                jQuery: !0
            }
        }(), define("../../lib/almond", function() {}),
            function() {
                var a = function() {
                    Function.prototype.bind || (Function.prototype.bind = function(a) {
                            function b() {
                                var b = c.prototype && this instanceof c;
                                return c.apply(!b && a || this, e.concat(d.call(arguments)))
                            }
                            if ("function" != typeof this) throw new TypeError("Bind must be called on a function");
                            var c = this,
                                d = Array.prototype.slice,
                                e = d.call(arguments, 1);
                            return b.prototype = c.prototype, b.displayName = "bound:" + (c.displayName || c.name || "(?)"), b.toString = function() {
                                return "bound: " + c
                            }, b
                        }), Object.create || (Object.create = function(a) {
                            var b = typeof a;
                            if ("object" != b && "function" != b) throw new TypeError("Object prototype may only be a Object or null");
                            var c = function() {
                                null === a && (this.__proto__ = a, delete this.__proto__)
                            };
                            return c.prototype = a, new c
                        }), Object.keys || (Object.keys = function(a) {
                            var b = typeof a;
                            if ("object" != b && "function" != b || null === a) throw new TypeError("Object.keys called on non-object");
                            var c = Object.prototype.hasOwnProperty,
                                d = [];
                            for (var e in a) c.call(a, e) && d.push(e);
                            return d
                        }), Object.freeze || (Object.freeze = function(a) {
                            return a
                        }), Object.seal || (Object.seal = function(a) {
                            return a
                        }),
                        function() {
                            if (!Object.assign) {
                                var a, b = Object.prototype.hasOwnProperty;
                                a = Object.keys && "object_keys_polyfill" !== Object.keys.name ? function(a, b) {
                                    for (var c = Object.keys(b), d = 0; d < c.length; d++) a[c[d]] = b[c[d]]
                                } : function(a, c) {
                                    for (var d in c) b.call(c, d) && (a[d] = c[d])
                                }, Object.assign = function(b, c) {
                                    if (null == b) throw new TypeError("Object.assign target cannot be null or undefined");
                                    for (var d = Object(b), e = 1; e < arguments.length; e++) {
                                        var f = arguments[e];
                                        null != f && a(d, Object(f))
                                    }
                                    return d
                                }
                            }
                        }(),
                        function(a) {
                            var b = a.babelHelpers = {},
                                c = Object.prototype.hasOwnProperty;
                            b.inherits = function(a, b) {
                                return Object.assign(a, b), a.prototype = Object.create(b && b.prototype), a.prototype.constructor = a, a.__superConstructor__ = b, b
                            }, b._extends = Object.assign, b["extends"] = b._extends, b.objectWithoutProperties = function(a, b) {
                                var d = {};
                                for (var e in a) !c.call(a, e) || b.indexOf(e) >= 0 || (d[e] = a[e]);
                                return d
                            }, b.taggedTemplateLiteralLoose = function(a, b) {
                                return a.raw = b, a
                            }, b.bind = Function.prototype.bind
                        }("undefined" == typeof global ? self : global), Array.isArray || (Array.isArray = function(a) {
                            return "[object Array]" == Object.prototype.toString.call(a)
                        }),
                        function() {
                            function a(a) {
                                return a = +a, a !== a ? a = 0 : 0 !== a && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))), a
                            }
                            var b = Object.prototype.toString,
                                c = Object("a"),
                                d = "a" != c[0];
                            Array.prototype.map || (Array.prototype.map = function(a, b) {
                                if ("function" != typeof a) throw new TypeError;
                                var c, d = this.length,
                                    e = new Array(d);
                                for (c = 0; d > c; ++c) c in this && (e[c] = a.call(b, this[c], c, this));
                                return e
                            }), Array.prototype.forEach || (Array.prototype.forEach = function(a, b) {
                                this.map(a, b)
                            }), Array.prototype.filter || (Array.prototype.filter = function(a, b) {
                                if ("function" != typeof a) throw new TypeError;
                                var c, d, e = this.length,
                                    f = [];
                                for (c = 0; e > c; ++c) c in this && (d = this[c], a.call(b, d, c, this) && f.push(d));
                                return f
                            }), Array.prototype.every || (Array.prototype.every = function(a, b) {
                                if ("function" != typeof a) throw new TypeError;
                                for (var c = new Object(this), d = c.length, e = 0; d > e; e++)
                                    if (e in c && !a.call(b, c[e], e, c)) return !1;
                                return !0
                            }), Array.prototype.some || (Array.prototype.some = function(a, b) {
                                if ("function" != typeof a) throw new TypeError;
                                for (var c = new Object(this), d = c.length, e = 0; d > e; e++)
                                    if (e in c && a.call(b, c[e], e, c)) return !0;
                                return !1
                            }), Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
                                var c = this.length;
                                for (b |= 0, 0 > b && (b += c); c > b; b++)
                                    if (b in this && this[b] === a) return b;
                                return -1
                            }), Array.prototype.lastIndexOf && -1 == [0, 1].lastIndexOf(0, -3) || (Array.prototype.lastIndexOf = function(c) {
                                var e = d && "[object String]" == b.call(this) ? this.split("") : Object(this),
                                    f = e.length >>> 0;
                                if (!f) return -1;
                                var g = f - 1;
                                for (arguments.length > 1 && (g = Math.min(g, a(arguments[1]))), g = g >= 0 ? g : f - Math.abs(g); g >= 0; g--)
                                    if (g in e && c === e[g]) return g;
                                return -1
                            }), Array.prototype.reduce || (Array.prototype.reduce = function(a) {
                                if ("function" != typeof a) throw new TypeError(a + " is not a function");
                                var b, c, d = this.length >>> 0,
                                    e = 2 === arguments.length;
                                for (e && (b = arguments[1]), c = 0; d > c; ++c) this.hasOwnProperty(c) && (e === !1 ? (b = this[c], e = !0) : b = a(b, this[c], c, this));
                                if (e === !1) throw new TypeError("Reduce of empty array with no initial value");
                                return b
                            }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(a) {
                                if ("function" != typeof a) throw new TypeError(a + " is not a function");
                                var b, c, d = this.length >>> 0,
                                    e = 2 === arguments.length;
                                for (e && (b = arguments[1]), c = d - 1; c > -1; --c) this.hasOwnProperty(c) && (e === !1 ? (b = this[c], e = !0) : b = a(b, this[c], c, this));
                                if (e === !1) throw new TypeError("Reduce of empty array with no initial value");
                                return b
                            })
                        }()
                };
                "undefined" != typeof exports ? module.exports = a : "undefined" != typeof define && define("instantiateBabelPolyfills", [], function() {
                    return a
                })
            }(), define("VPAIDEvents", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {}
                    return a.AdLoaded = "AdLoaded", a.AdStarted = "AdStarted", a.AdStopped = "AdStopped", a.AdSkipped = "AdSkipped", a.AdSkippableStateChange = "AdSkippableStateChange", a.AdSizeChange = "AdSizeChange", a.AdLinearChange = "AdLinearChange", a.AdDurationChange = "AdDurationChange", a.AdExpandedChange = "AdExpandedChange", a.AdVolumeChange = "AdVolumeChange", a.AdImpression = "AdImpression", a.AdVideoStart = "AdVideoStart", a.AdVideoFirstQuartile = "AdVideoFirstQuartile", a.AdVideoMidpoint = "AdVideoMidpoint", a.AdVideoThirdQuartile = "AdVideoThirdQuartile", a.AdVideoComplete = "AdVideoComplete", a.AdClickThru = "AdClickThru", a.AdInteraction = "AdInteraction", a.AdUserAcceptInvitation = "AdUserAcceptInvitation", a.AdUserMinimize = "AdUserMinimize", a.AdUserClose = "AdUserClose", a.AdPaused = "AdPaused", a.AdPlaying = "AdPlaying", a.AdLog = "AdLog", a.AdError = "AdError", a
                }();
                return c
            });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("AdManagerEvents", ["require", "exports", "VPAIDEvents"], function(a, b, c) {
            var d = function(a) {
                function b() {
                    a.apply(this, arguments)
                }
                return __extends(b, a), b.AdProgress = "AdProgress", b.LogEvent = "LogEvent", b
            }(c);
            return d
        }), define("EventSubscription", ["require", "exports"], function() {
            var a = function() {
                function a(a, b) {
                    this.fn = a, this.listenerScope = b
                }
                return a
            }();
            return a
        }), define("EventManager", ["require", "exports", "EventSubscription"], function(a, b, c) {
            var d = function() {
                function a(a) {
                    var b = this;
                    this.eventHandlerStore = {}, this.handlerDictionary = {}, this.eventDictionary = {}, this.onEventListenerObjectPropertyChange = function(a) {
                        b.validateEvent(a.propertyName) && b.handlerDictionary.hasOwnProperty(a.propertyName) && b.handlerDictionary[a.propertyName].apply(b.listenerScope, b.args)
                    }, this.validEvents = a, this.eventListenerObject = document.createElement("div"), this.eventListenerObject.addEventListener || (this.eventListenerObject.style.display = "none", this.eventListenerObject.attachEvent("onpropertychange", this.onEventListenerObjectPropertyChange), document.body.appendChild(this.eventListenerObject))
                }
                return a.prototype.subscribe = function(b, d, e) {
                    !this.validateEvent(d) || "function" != typeof b || "object" != typeof e && void 0 !== e || (this.eventDictionary.hasOwnProperty(d) || (this.eventDictionary[d] = this.createCustomEvent(d)), this.eventHandlerStore.hasOwnProperty(d) || (this.eventHandlerStore[d] = []), -1 === a.findSubscriptionIndex(b, this.eventHandlerStore[d]) && this.eventHandlerStore[d].push(new c(b, e)))
                }, a.prototype.unsubscribe = function(b, c) {
                    if (this.validateEvent(c) && this.eventHandlerStore.hasOwnProperty(c)) {
                        var d = a.findSubscriptionIndex(b, this.eventHandlerStore[c]);
                        d >= 0 && this.eventHandlerStore[c].splice(d, 1)
                    }
                }, a.prototype.dispatch = function(a, b) {
                    if ("undefined" == typeof b && (b = []), this.validateEvent(a) && this.eventHandlerStore.hasOwnProperty(a))
                        for (var c = 0; c < this.eventHandlerStore[a].length; c++) this.eventHandlerStore[a][c], this.dispatchSubscription(a, this.eventHandlerStore[a][c], b)
                }, a.prototype.createCustomEvent = function(a) {
                    var b = this;
                    if (this.eventListenerObject.addEventListener) {
                        this.eventListenerObject.addEventListener(a, function() {
                            b.handlerDictionary[a].apply(b.listenerScope, b.args)
                        }, !1);
                        var c = document.createEvent("UIEvents");
                        c.initEvent(a, !1, !1)
                    } else this.eventListenerObject.attachEvent && (this.eventListenerObject[a] = 0);
                    return c
                }, a.prototype.validateEvent = function(a) {
                    return "string" == typeof a && (!this.validEvents || this.validEvents.hasOwnProperty(a))
                }, a.findSubscriptionIndex = function(a, b) {
                    for (var c = -1, d = 0; d < b.length; d += 1)
                        if (b[d].fn === a) {
                            c = d;
                            break
                        } return c
                }, a.prototype.dispatchSubscription = function(a, b, c) {
                    this.handlerDictionary[a] = b.fn, this.listenerScope = b.listenerScope || {}, this.args = c, this.eventListenerObject.addEventListener ? this.eventListenerObject.dispatchEvent(this.eventDictionary[a]) : this.eventListenerObject.attachEvent && (this.eventListenerObject[a] += 1)
                }, a
            }();
            return d
        }), define("Handshake", ["require", "exports"], function() {
            var a;
            return function(a) {
                function b() {
                    var a, b, d, e = this;
                    if ("function" == typeof window.postMessage) {
                        for (("https:" === window.location.protocol || "http:" !== window.location.protocol && window.parent && "https:" === window.parent.location.protocol) && (b = !0), a = (b ? "https://web.archive.org/web/20170109092628/https://cdn-static-secure" : "https://web.archive.org/web/20170109092628/http://cdn-static") + ".liverail.com/js/handshake.html", h = "", d = 0; 50 > d; d += 1) h += Math.random().toString(36).substr(2, 5);
                        i = document.createElement("iframe"), i.style.display = "none", i.src = a, document.body.appendChild(i), i.onload = function() {
                            i.contentWindow && i.contentWindow.postMessage ? i.contentWindow.postMessage(h, a) : i && i.parentNode === document.body && document.body.removeChild(i)
                        }, window.addEventListener ? window.addEventListener("message", function(a) {
                            var b = a.origin,
                                d = a.data;
                            c.apply(e, [b, d])
                        }, !1) : window.attachEvent && window.attachEvent("onmessage", function(a) {
                            a || (a = window.event);
                            var b = a.origin,
                                d = a.data;
                            c.apply(e, [b, d])
                        })
                    }
                }

                function c(a, b) {
                    var c, e, f;
                    if (a.match(/^https?:\/\/cdn-static(-secure)?\.liverail\.com/) && b && "string" == typeof b && "lrHandshakeResponse=" === b.substr(0, 20)) {
                        for (c = b.substr(20), e = "", f = 0; f < c.length; f += 1) e += String.fromCharCode(c.charCodeAt(f) - h.charCodeAt(f));
                        i && i.parentNode === document.body && (document.body.removeChild(i), delete i), d(e.split("&"))
                    }
                }

                function d(b) {
                    var c, d;
                    for (a.handshakeResponse = {
                            debug: 0,
                            debugIdFilter: "",
                            inspector: !1
                        }, c = 0; c < b.length; c += 1) switch (d = b[c].split("="), d[0]) {
                        case "debug":
                            a.handshakeResponse.debug = parseInt(d[1], 10);
                            break;
                        case "debugIdFilter":
                            a.handshakeResponse.debugIdFilter = decodeURIComponent(d[1]);
                            break;
                        case "inspector":
                            a.handshakeResponse.inspector = "true" === d[1]
                    }
                    k = !0, e()
                }

                function e() {
                    var a;
                    for (a = 0; a < l.length; a += 1) l[a]();
                    l = []
                }

                function f(a) {
                    return "undefined" == typeof a && (a = window), a.location.href && "about:blank" !== a.location.href ? a : a.parent
                }

                function g(a) {
                    if ("undefined" == typeof a && (a = null), "function" == typeof a && l.push(a), k) e();
                    else if (!j) {
                        j = !0;
                        var c = f().location.href;
                        c.match(/^https?:\/\/[A-Za-z0-9.\-_]+\.liverail\.com/) ? d(document.cookie.split("; ")) : b()
                    }
                }
                a.handshakeResponse = {};
                var h, i, j, k, l = [];
                a.check = g
            }(a || (a = {})), a
        }), ! function() {
            var a = function() {
                var b = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,
                    c = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                    d = /[^-+\dA-Z]/g,
                    e = function(a, b) {
                        for (a = String(a), b = b || 2; a.length < b;) a = "0" + a;
                        return a
                    },
                    f = function(a) {
                        var b = new Date(a.getFullYear(), a.getMonth(), a.getDate());
                        b.setDate(b.getDate() - (b.getDay() + 6) % 7 + 3);
                        var c = new Date(b.getFullYear(), 0, 4);
                        c.setDate(c.getDate() - (c.getDay() + 6) % 7 + 3);
                        var d = b.getTimezoneOffset() - c.getTimezoneOffset();
                        b.setHours(b.getHours() - d);
                        var e = (b - c) / 6048e5;
                        return 1 + Math.floor(e)
                    },
                    g = function(a) {
                        var b = a.getDay();
                        return 0 === b && (b = 7), b
                    };
                return function(h, i, j, k) {
                    var l = a;
                    if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(h) || /\d/.test(h) || (i = h, h = void 0), h = h || new Date, h instanceof Date || (h = new Date(h)), isNaN(h)) throw TypeError("Invalid date");
                    i = String(l.masks[i] || i || l.masks["default"]);
                    var m = i.slice(0, 4);
                    ("UTC:" == m || "GMT:" == m) && (i = i.slice(4), j = !0, "GMT:" == m && (k = !0));
                    var n = j ? "getUTC" : "get",
                        o = h[n + "Date"](),
                        p = h[n + "Day"](),
                        q = h[n + "Month"](),
                        r = h[n + "FullYear"](),
                        s = h[n + "Hours"](),
                        t = h[n + "Minutes"](),
                        u = h[n + "Seconds"](),
                        v = h[n + "Milliseconds"](),
                        w = j ? 0 : h.getTimezoneOffset(),
                        x = f(h),
                        y = g(h),
                        z = {
                            d: o,
                            dd: e(o),
                            ddd: l.i18n.dayNames[p],
                            dddd: l.i18n.dayNames[p + 7],
                            m: q + 1,
                            mm: e(q + 1),
                            mmm: l.i18n.monthNames[q],
                            mmmm: l.i18n.monthNames[q + 12],
                            yy: String(r).slice(2),
                            yyyy: r,
                            h: s % 12 || 12,
                            hh: e(s % 12 || 12),
                            H: s,
                            HH: e(s),
                            M: t,
                            MM: e(t),
                            s: u,
                            ss: e(u),
                            l: e(v, 3),
                            L: e(Math.round(v / 10)),
                            t: 12 > s ? "a" : "p",
                            tt: 12 > s ? "am" : "pm",
                            T: 12 > s ? "A" : "P",
                            TT: 12 > s ? "AM" : "PM",
                            Z: k ? "GMT" : j ? "UTC" : (String(h).match(c) || [""]).pop().replace(d, ""),
                            o: (w > 0 ? "-" : "+") + e(100 * Math.floor(Math.abs(w) / 60) + Math.abs(w) % 60, 4),
                            S: ["th", "st", "nd", "rd"][o % 10 > 3 ? 0 : (o % 100 - o % 10 != 10) * o % 10],
                            W: x,
                            N: y
                        };
                    return i.replace(b, function(a) {
                        return a in z ? z[a] : a.slice(1, a.length - 1)
                    })
                }
            }();
            a.masks = {
                "default": "ddd mmm dd yyyy HH:MM:ss",
                shortDate: "m/d/yy",
                mediumDate: "mmm d, yyyy",
                longDate: "mmmm d, yyyy",
                fullDate: "dddd, mmmm d, yyyy",
                shortTime: "h:MM TT",
                mediumTime: "h:MM:ss TT",
                longTime: "h:MM:ss TT Z",
                isoDate: "yyyy-mm-dd",
                isoTime: "HH:MM:ss",
                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
            }, a.i18n = {
                dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            }, "undefined" != typeof exports ? module.exports = a : "undefined" != typeof define && define("DateFormat", [], function() {
                return a
            })
        }(), define("MessageData", ["require", "exports"], function() {
            var a = function() {
                function a(a, b, c, d) {
                    this.timestamp = new Date, this.priority = a, this.method = b, this.contextName = c, this.args = d
                }
                return a
            }();
            return a
        }), define("Logger", ["require", "exports", "Handshake", "DateFormat", "MessageData"], function(a, b, c, d, e) {
            var f = function() {
                function a(a) {
                    this.contextName = "", this.contextName = a || ""
                }
                return a.getDebugLevel = function() {
                    return null !== a.currentDebugLevelOverride ? a.currentDebugLevelOverride : c.handshakeResponse.debug
                }, a.setDebugLevelOverride = function(b) {
                    a.currentDebugLevelOverride = Math.max(0, Math.min(3, b))
                }, a.clearDebugLevelOverride = function() {
                    a.currentDebugLevelOverride = null
                }, a.getDebugIdFilter = function() {
                    return c.handshakeResponse.debugIdFilter
                }, a.dormant = function() {
                    return "object" != typeof console ? !0 : Function && Function.prototype && Function.prototype.bind ? !1 : !0
                }, a.handleMessage = function(b) {
                    return a.dormant() || 0 === a.getDebugLevel() ? void 0 : void 0 === a.getDebugLevel() ? (a.messageQueue.push(b), void(a.handshakeInitiated || (a.handshakeInitiated = !0, c.check(a.flushMessageQueue)))) : void a.outputMessage(b)
                }, a.flushMessageQueue = function() {
                    for (a.getDebugLevel() > 0 && a.getDebugIdFilter() && console.warn('Debug ID Filter set to "' + a.getDebugIdFilter() + '"'); a.messageQueue.length > 0;) a.outputMessage(a.messageQueue.shift())
                }, a.outputMessage = function(b) {
                    if (!(b.priority > a.getDebugLevel()) && b.contextName.match(new RegExp(a.getDebugIdFilter()))) {
                        var c = "LIVERAIL [" + d(b.timestamp, "HH:MM:ss.l") + "]";
                        b.contextName && (c += "[" + b.contextName + "]");
                        var e = [c].concat(b.args);
                        Function.prototype.bind.call(b.method, console).apply(this, e)
                    }
                }, a.prototype.log = function() {
                    for (var b = [], c = 0; c < arguments.length - 0; c++) b[c] = arguments[c + 0];
                    a.dormant() || a.handleMessage(new e(1, console.log, this.contextName, b))
                }, a.prototype.info = function() {
                    for (var b = [], c = 0; c < arguments.length - 0; c++) b[c] = arguments[c + 0];
                    a.dormant() || a.handleMessage(new e(1, console.info, this.contextName, b))
                }, a.prototype.warn = function() {
                    for (var b = [], c = 0; c < arguments.length - 0; c++) b[c] = arguments[c + 0];
                    a.dormant() || a.handleMessage(new e(1, console.warn, this.contextName, b))
                }, a.prototype.error = function() {
                    for (var b = [], c = 0; c < arguments.length - 0; c++) b[c] = arguments[c + 0];
                    a.dormant() || a.handleMessage(new e(1, console.error, this.contextName, b))
                }, a.prototype.debug = function() {
                    for (var b = [], c = 0; c < arguments.length - 0; c++) b[c] = arguments[c + 0];
                    a.dormant() || a.handleMessage(new e(2, console.log, this.contextName, b))
                }, a.prototype.verbose = function() {
                    for (var b = [], c = 0; c < arguments.length - 0; c++) b[c] = arguments[c + 0];
                    a.dormant() || a.handleMessage(new e(3, console.log, this.contextName, b))
                }, a.currentDebugLevelOverride = null, a.messageQueue = [], a
            }();
            return f
        }), define("Adapter", ["require", "exports", "AdManagerEvents", "EventManager", "Logger"], function(a, b, c, d, e) {
            var f = function() {
                function a(a, b) {
                    this._adapterConfiguration = null, this._adVolume = 1, this._eventManager = new d(c), this._logger = new e(a), this.destroy(), b && b(this)
                }
                return a.prototype.getAdLinear = function() {
                    return !1
                }, a.prototype.getAdWidth = function() {
                    return 0
                }, a.prototype.getAdHeight = function() {
                    return 0
                }, a.prototype.getAdExpanded = function() {
                    return !1
                }, a.prototype.getAdSkippableState = function() {
                    return !1
                }, a.prototype.getAdSkippableRemainingTime = function() {
                    return -2
                }, a.prototype.getAdRemainingTime = function() {
                    return -2
                }, a.prototype.getAdDuration = function() {
                    return -2
                }, a.prototype.getAdVolume = function() {
                    return this._adVolume
                }, a.prototype.setAdVolume = function(a) {
                    var b = a !== this._adVolume;
                    this._adVolume = a, b && this._onAdVolumeChange()
                }, a.prototype.getAdCompanions = function() {
                    return ""
                }, a.prototype.getAdIcons = function() {
                    return !1
                }, a.prototype.handshakeVersion = function(a) {
                    return a
                }, a.prototype.initAd = function(a, b, c, d, e, f) {
                    this._adapterConfiguration = f.adapterConfiguration
                }, a.prototype.resizeAd = function(a, b, c) {}, a.prototype.startAd = function() {}, a.prototype.stopAd = function() {}, a.prototype.pauseAd = function() {}, a.prototype.resumeAd = function() {}, a.prototype.expandAd = function() {}, a.prototype.collapseAd = function() {}, a.prototype.skipAd = function() {}, a.prototype.subscribe = function(a, b, c) {
                    this._eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this._eventManager.unsubscribe(a, b)
                }, a.prototype.destroy = function() {}, a.prototype.isPaused = function() {
                    return !1
                }, a.prototype.getAdapterConfiguration = function() {
                    return this._adapterConfiguration
                }, a.prototype.getAdElement = function() {
                    return null
                }, a.prototype.supports = function(a) {
                    return !1
                }, a.prototype._onAdLoaded = function() {
                    this._onEvent(c.AdLoaded)
                }, a.prototype._onAdStarted = function() {
                    this._onEvent(c.AdStarted)
                }, a.prototype._onAdStopped = function() {
                    this.destroy(), this._onEvent(c.AdStopped)
                }, a.prototype._onAdSkipped = function() {
                    this._onEvent(c.AdSkipped)
                }, a.prototype._onAdSkippableStateChange = function() {
                    this._onEvent(c.AdSkippableStateChange)
                }, a.prototype._onAdSizeChange = function() {
                    this._onEvent(c.AdSizeChange)
                }, a.prototype._onAdLinearChange = function() {
                    this._onEvent(c.AdLinearChange)
                }, a.prototype._onAdDurationChange = function() {
                    this._onEvent(c.AdDurationChange)
                }, a.prototype._onAdExpandedChange = function() {
                    this._onEvent(c.AdExpandedChange)
                }, a.prototype._onAdVolumeChange = function() {
                    this._onEvent(c.AdVolumeChange)
                }, a.prototype._onAdImpression = function() {
                    this._onEvent(c.AdImpression)
                }, a.prototype._onAdVideoStart = function() {
                    this._onEvent(c.AdVideoStart)
                }, a.prototype._onAdVideoFirstQuartile = function() {
                    this._onEvent(c.AdVideoFirstQuartile)
                }, a.prototype._onAdVideoMidpoint = function() {
                    this._onEvent(c.AdVideoMidpoint)
                }, a.prototype._onAdVideoThirdQuartile = function() {
                    this._onEvent(c.AdVideoThirdQuartile)
                }, a.prototype._onAdVideoComplete = function() {
                    this._onEvent(c.AdVideoComplete)
                }, a.prototype._onAdClickThru = function(a, b, d) {
                    this._onEvent(c.AdClickThru, [a, b, d])
                }, a.prototype._onAdInteraction = function() {
                    this._onEvent(c.AdInteraction)
                }, a.prototype._onAdUserAcceptInvitation = function() {
                    this._onEvent(c.AdUserAcceptInvitation)
                }, a.prototype._onAdUserMinimize = function() {
                    this._onEvent(c.AdUserMinimize)
                }, a.prototype._onAdUserClose = function() {
                    this._onEvent(c.AdUserClose)
                }, a.prototype._onAdPaused = function() {
                    this._onEvent(c.AdPaused)
                }, a.prototype._onAdPlaying = function() {
                    this._onEvent(c.AdPlaying)
                }, a.prototype._onAdLog = function(a) {
                    this._onEvent(c.AdLog, [a])
                }, a.prototype._onAdError = function(a) {
                    this.destroy(), this._onEvent(c.AdError, [a])
                }, a.prototype._onEvent = function(a, b) {
                    void 0 === b && (b = []), this._eventManager.dispatch(a, b)
                }, a
            }();
            return f
        }), define("Tracker", ["require", "exports"], function(a, b) {
            var c = function() {
                function a(a, b) {
                    this.urls = [], this.type = a;
                    var c = parseFloat(b);
                    isNaN(c) || (this.value = c)
                }
                return a.formTrackerKey = function(a, b) {
                    return a + ("number" == typeof b ? b.toString() : "")
                }, a.prototype.getType = function() {
                    return this.type
                }, a.prototype.getValue = function() {
                    return this.value
                }, a.prototype.addUrl = function(a) {
                    a && this.urls.push(a)
                }, a.prototype.getUrls = function() {
                    return this.urls
                }, a
            }();
            return c
        }), define("AdCandidate", ["require", "exports", "Tracker"], function(a, b, c) {
            var d = function() {
                function a() {
                    this.adChoicesUrl = "", this.clickThruUrl = "", this._adExtensionConfigs = [], this._companionAds = [], this._impressionRegistered = !1, this._lastProgressTime = 0, this._lastProgressTimestamp = 0, this._lastProgressBoundaryTime = 0, this._linearCreative = null, this._loadTime = 0, this._maxCreativeDuration = 0, this._nonLinearCreative = null, this._previousProgressTimestamp = 0, this._startTime = 0, this._stopTime = 0, this._thirdPartyData = {}, this._trackers = {}, this._viewableSeconds = 0
                }
                return a.prototype.addAdExtensionConfig = function(a) {
                    a && this._adExtensionConfigs.push(a)
                }, a.prototype.addCompanionAd = function(a) {
                    this._companionAds.push(a)
                }, a.prototype.addTracker = function(a) {
                    if (null !== a) {
                        var b = c.formTrackerKey(a.getType(), a.getValue());
                        this._trackers[b] || (this._trackers[b] = []), this._trackers[b].push(a)
                    }
                }, a.prototype.getAdapterInstance = function() {
                    return this._adapterInstance
                }, a.prototype.getAdExtensionConfigs = function() {
                    return this._adExtensionConfigs
                }, a.prototype.getAvgVolume = function() {
                    return this._progressCount > 0 ? this._sumVolume / this._progressCount : 0
                }, a.prototype.getCompanionAds = function() {
                    return this._companionAds
                }, a.prototype.getDuration = function() {
                    var a = 0;
                    return this.hadImpression() && (a = this._maxCreativeDuration ? this._maxCreativeDuration : this._linearCreative ? this._linearCreative.getDuration() : this._getElapsedRealtime()), Math.max(0, a)
                }, a.prototype.getLastProgressMeasurementTime = function() {
                    return this._lastProgressTimestamp - this._previousProgressTimestamp
                }, a.prototype.getLastProgressTime = function() {
                    return this._lastProgressTime
                }, a.prototype.getLastProgressBoundaryTime = function() {
                    return this._lastProgressBoundaryTime
                }, a.prototype.getLinearCreative = function() {
                    return this._linearCreative
                }, a.prototype.getLoadClock = function() {
                    return this._loadTime > 0 ? Date.now() - this._loadTime : 0
                }, a.prototype.getMinVolume = function() {
                    return this._minVolume
                }, a.prototype.getProgressCount = function() {
                    return this._progressCount
                }, a.prototype.getNonLinearCreative = function() {
                    return this._nonLinearCreative
                }, a.prototype.getThirdPartyData = function(a) {
                    return this._thirdPartyData[a]
                }, a.prototype.getTrackers = function(a, b) {
                    var d = c.formTrackerKey(a, b);
                    return this._trackers[d] || []
                }, a.prototype.getViewableSeconds = function() {
                    return this._viewableSeconds
                }, a.prototype.hadImpression = function() {
                    return this._impressionRegistered
                }, a.prototype.hasValidAdChoicesUrl = function() {
                    return this.adChoicesUrl.length > 0
                }, a.prototype.hasValidClickthruUrl = function() {
                    return this.clickThruUrl.length > 0
                }, a.prototype.registerAdapterInstance = function(a) {
                    this._adapterInstance = a
                }, a.prototype.registerComplete = function() {
                    this.hadImpression() && 0 === this._stopTime && (this._stopTime = Date.now())
                }, a.prototype.registerImpression = function() {
                    0 === this._startTime && (this._startTime = Date.now()), this._impressionRegistered = !0
                }, a.prototype.registerLoad = function() {
                    0 === this._loadTime && (this._loadTime = Date.now())
                }, a.prototype.registerProgress = function(a, b) {
                    this._previousProgressTimestamp = this._lastProgressTimestamp, this._lastProgressTimestamp = Date.now(), this._progressCount++, this._lastProgressTime = a, b >= 0 && (this._sumVolume += b, (this._minVolume < 0 || b < this._minVolume) && (this._minVolume = b))
                }, a.prototype.setLinearCreative = function(a) {
                    this._linearCreative = a
                }, a.prototype.setNonLinearCreative = function(a) {
                    this._nonLinearCreative = a
                }, a.prototype.setProgressBoundary = function(a, b, c) {
                    this._progressCount = 0, this._lastProgressBoundaryTime = a, this._minVolume = b, this._sumVolume = 0, c && (this._viewableSeconds += c.viewableSeconds)
                }, a.prototype.setThirdPartyData = function(a, b) {
                    this._thirdPartyData[a] = b
                }, a.prototype.updateCreativeDuration = function(a) {
                    a > this._maxCreativeDuration && (this._maxCreativeDuration = a)
                }, a.prototype._getElapsedRealtime = function() {
                    return Math.max(0, this._stopTime - this._startTime)
                }, a.TYPE_LINEAR = "in", a.TYPE_OVERLAY = "ov", a
            }();
            return d
        }), define("RendererEvents", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.Loaded = "Loaded", a.Impression = "Impression", a.Error = "Error", a
            }();
            return c
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LinearRendererEvents", ["require", "exports", "RendererEvents"], function(a, b, c) {
            var d = function(a) {
                function b() {
                    a.apply(this, arguments)
                }
                return __extends(b, a), b.Progress = "Progress", b.Ended = "Ended", b.Paused = "Paused", b.Resumed = "Resumed", b.VolumeChange = "VolumeChange", b
            }(c);
            return d
        }), define("LogEvent", ["require", "exports"], function(a, b) {
            var c = function() {
                function a(a, b, c) {
                    void 0 === c && (c = {}), this.id = a, this.detail = c || {}, this.message = b
                }
                return a.eventWithType = function(b, c, d) {
                    return void 0 === c && (c = {}), void 0 === d && (d = null), new a(b.id, d || b.message, c)
                }, a.prototype.description = function() {
                    var a = this,
                        b = "";
                    return Object.keys(this.detail).forEach(function(c) {
                        b += 0 === b.length ? " " : " ,", b += c + "=" + a.detail[c]
                    }), "(" + this.id + ") " + this.message + b
                }, a
            }();
            return c
        }), define("LogEventType", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.CreativeGeneralError = {
                    id: 400,
                    message: "General creative error"
                }, a.CreativeFileNotFound = {
                    id: 401,
                    message: "Creative file not found"
                }, a.CreativeFileTimeout = {
                    id: 402,
                    message: "Creative timed out"
                }, a.CreativeFileUnsupported = {
                    id: 405,
                    message: "Problem displaying creative file"
                }, a.CreativeComponentError = {
                    id: 901,
                    message: "Ad component emitted error event"
                }, a.NoFill = {
                    id: 1001,
                    message: "No fill"
                }, a.InvalidPlacement = {
                    id: 1003,
                    message: "Ad was loaded with no valid placement defined"
                }, a.NoAvailableEnvironment = {
                    id: 1020,
                    message: "No available environment"
                }, a.StartAdBeforeInitAd = {
                    id: 1021,
                    message: "initAd must be called before startAd"
                }, a.InvalidSlotElement = {
                    id: 1022,
                    message: "environmentVars.slot is not a valid DOM element"
                }, a.InvalidVideoElement = {
                    id: 1023,
                    message: "No valid video element"
                }, a.UnsupportedDevice = {
                    id: 1024,
                    message: "Unsupported device"
                }, a.UndefinedEnvironmentVars = {
                    id: 1025,
                    message: "environmentVars is not defined"
                }, a.AdManagerInitError = {
                    id: 1026,
                    message: "Error initializing AdManager instance"
                }, a.AdSourcesRequestFailed = {
                    id: 1101,
                    message: "LiveRail request for ad-sources failed"
                }, a.AdSourcesRequestTimeout = {
                    id: 1102,
                    message: "LiveRail request for ad-sources timed out"
                }, a.AdsRequestFailed = {
                    id: 1111,
                    message: "LiveRail request for ads failed"
                }, a.AdsRequestTimeout = {
                    id: 1112,
                    message: "LiveRail request for ads timed out"
                }, a.XMLParseFailure = {
                    id: 1201,
                    message: "Failed to parse LiveRail XML response"
                }, a.XMLUnknownResponse = {
                    id: 1202,
                    message: "Unknown LiveRail XML response type"
                }, a.XMLErrorMessage = {
                    id: 1203,
                    message: "LiveRail XML Error message"
                }, a.XMLDuplicateSources = {
                    id: 1204,
                    message: "Second LiveRail XML contains sources"
                }, a.NoAdSources = {
                    id: 1301,
                    message: "LiveRail returned no ad sources"
                }, a.NoAdSlots = {
                    id: 1302,
                    message: "No ad-slots available"
                }, a.AdapterMising = {
                    id: 2901,
                    message: "Adapter class not found"
                }, a.AdImpression = {
                    id: 9002,
                    message: "Creative AdImpression"
                }, a.AdClickThrough = {
                    id: 9003,
                    message: "Creative AdClickThrough"
                }, a.AdLoaded = {
                    id: 9004,
                    message: "Creative AdLoaded"
                }, a.AdChoicesClick = {
                    id: 9007,
                    message: "Creative AdChoices clicked"
                }, a.AdPodSlotLoaded = {
                    id: 9008,
                    message: "Ad pod slot loaded"
                }, a.AdProgressBoundary = {
                    id: 9009,
                    message: "Ad progress boundary"
                }, a.AdExtensionInitComplete = {
                    id: 9010,
                    message: "Ad extension init complete"
                }, a.AdVideoThirdQuartile = {
                    id: 9013,
                    message: "Creative AdVideoThirdQuartile"
                }, a.AdClickThroughFailed = {
                    id: 9910,
                    message: "Creative AdClickThrough failed"
                }, a.AdChoicesClickFailed = {
                    id: 9912,
                    message: "Creative AdChoices click failed"
                }, a.TrackingPixelLoadError = {
                    id: 9913,
                    message: "Tracking pixel load error"
                }, a.BrowserMeasurementError = {
                    id: 9914,
                    message: "Browser measurement error"
                }, a.AdExtensionUncaughtError = {
                    id: 9915,
                    message: "Ad extension uncaught error"
                }, a.MRCViewable = {
                    id: 9933,
                    message: "Ad placement met MRC viewable requirements"
                }, a.FBViewable = {
                    id: 9934,
                    message: "Ad placement met FB viewable requirements"
                }, a.ViewThrough = {
                    id: 9935,
                    message: "Ad placement met view through requirements"
                }, a
            }();
            return c
        }), define("GlobalConfig", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.MEASUREMENT_FREQUENCY = .25, a
            }();
            return c
        }), define("Renderer", ["require", "exports", "EventManager", "RendererEvents"], function(a, b, c, d) {
            var e = function() {
                function a(a) {
                    this._adAsset = null, this._bgColor = a.getAdParameters().bgcolor, this._eventManager = new c, this._slot = a.slot, this._slotWindow = a.parentWindow
                }
                return a.prototype.destroy = function() {}, a.prototype.load = function(a) {
                    this._adAsset = a
                }, a.prototype.start = function() {}, a.prototype.stop = function() {}, a.prototype.getAdElement = function() {
                    return this._slot
                }, a.prototype.getAsset = function() {
                    return this._adAsset
                }, a.prototype.getWidth = function() {
                    return 0
                }, a.prototype.getHeight = function() {
                    return 0
                }, a.prototype.impressionOccured = function() {
                    return !1
                }, a.prototype.subscribe = function(a, b, c) {
                    this._eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this._eventManager.unsubscribe(a, b)
                }, a.prototype.dispatchRendererLoaded = function() {
                    this._eventManager.dispatch(d.Loaded)
                }, a.prototype.dispatchRendererImpression = function() {
                    this._eventManager.dispatch(d.Impression)
                }, a.prototype.dispatchRendererError = function(a) {
                    this._eventManager.dispatch(d.Error, [a])
                }, a
            }();
            return e
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LinearRenderer", ["require", "exports", "LinearRendererEvents", "Renderer"], function(a, b, c, d) {
            var e = function(a) {
                function b(b) {
                    a.call(this, b), this._videoSlot = b.videoSlot
                }
                return __extends(b, a), b.prototype.pause = function() {}, b.prototype.resume = function() {}, b.prototype.getAdElement = function() {
                    return this._videoSlot
                }, b.prototype.getCurrentTime = function() {
                    return -2
                }, b.prototype.getDuration = function() {
                    return -2
                }, b.prototype.getVolume = function() {
                    return -2
                }, b.prototype.setVolume = function(a) {}, b.prototype.isPaused = function() {
                    return !1
                }, b.prototype.isSeeking = function() {
                    return !1
                }, b.prototype.dispatchRendererProgress = function() {
                    this._eventManager.dispatch(c.Progress)
                }, b.prototype.dispatchRendererPaused = function() {
                    this._eventManager.dispatch(c.Paused)
                }, b.prototype.dispatchRendererResumed = function() {
                    this._eventManager.dispatch(c.Resumed)
                }, b.prototype.dispatchRendererEnded = function() {
                    this._eventManager.dispatch(c.Ended)
                }, b.prototype.dispatchVolumeChange = function() {
                    this._eventManager.dispatch(c.VolumeChange)
                }, b
            }(d);
            return e
        }), define("Utils", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.returnString = function(a, b) {
                    var c = b || "",
                        d = "" + a;
                    return "undefined" !== d && "null" !== d && "NaN" !== d && (c = d), c
                }, a.returnFloat = function(a, b) {
                    var c = void 0 !== b ? b : NaN,
                        d = parseFloat(a);
                    return isNaN(d) || (c = d), c
                }, a.returnInt = function(a, b) {
                    var c = void 0 !== b ? b : NaN,
                        d = parseInt(a, 10);
                    return isNaN(d) || (c = d), c
                }, a.returnUnsignedInt = function(a, b) {
                    return Math.max(this.returnInt(a, b), 0)
                }, a.returnBoolean = function(a, b) {
                    var c = b || !1;
                    return "boolean" == typeof a && (c = a), null === a && (c = !1), void 0 !== a && "string" != typeof a && (a = a.toString().toLowerCase()), ("true" === a || "1" === a || "yes" === a) && (c = !0), ("false" === a || "0" === a || "no" === a) && (c = !1), c
                }, a.serialize = function(a) {
                    var b = [];
                    return Object.keys(a).forEach(function(c) {
                        if (Array.isArray(a[c]))
                            for (var d = 0; d < a[c].length; d++) {
                                var e = a[c][d];
                                b.push(encodeURIComponent(c) + "[]=" + encodeURIComponent(e))
                            } else {
                                var e = a[c];
                                b.push(encodeURIComponent(c) + "=" + encodeURIComponent(e))
                            }
                    }), b.join("&")
                }, a.retrieveCallingURL = function(a) {
                    for (var b = "", c = document.getElementsByTagName("script"), d = 0; d < c.length; d += 1)
                        if (-1 !== c[d].src.indexOf(a)) {
                            b = c[d].src;
                            break
                        } return b
                }, a.parseQueryString = function(a) {
                    var b, c, d = {},
                        e = a;
                    e.indexOf("?") > 0 && (e = e.slice(e.indexOf("?") + 1)), b = e.split("&");
                    for (var f = 0; f < b.length; f += 1)
                        if (b[f].length > 0 && (c = b[f].split("="), c[0] !== a && c[0].length > 0))
                            if (1 === c.length) d[c[0]] = null;
                            else if (2 === c.length) d[c[0]] = decodeURIComponent(c[1]);
                    else {
                        d[c[0]] = "";
                        for (var g = 1; g < c.length; g += 1) d[c[0]] += decodeURIComponent(c[g]), g < c.length - 1 && (d[c[0]] += "=")
                    }
                    return d
                }, a.detectFlash = function() {
                    var a, b, c = !1;
                    try {
                        if (window.navigator && window.navigator.plugins && window.navigator.plugins.length > 0) {
                            if (window.navigator.mimeTypes) {
                                var d = window.navigator.mimeTypes;
                                a = d["application/x-shockwave-flash"], a && a.enabledPlugin && a.enabledPlugin.description && (c = !0)
                            }
                        } else if (void 0 !== ActiveXObject) {
                            try {
                                b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                            } catch (e) {
                                b = {
                                    activeXError: !0
                                }
                            }
                            b.activeXError || (c = !0)
                        }
                    } catch (f) {}
                    return c
                }, a.detectHTML5 = function() {
                    return !!document.createElement("video").canPlayType
                }, a.stringifyParameterObject = function(a) {
                    var b, c = 0,
                        d = "";
                    for (b in a) a.hasOwnProperty(b) && (c > 0 && (d += "&"), d += encodeURIComponent(b) + "=" + encodeURIComponent(a[b]), c += 1);
                    return d
                }, a.base64encode = function(a) {
                    if (btoa) return btoa(a);
                    var b, c, d, e, f, g, h;
                    for (b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e = a.length, d = 0, c = ""; e > d;) {
                        if (f = 255 & a.charCodeAt(d++), d === e) {
                            c += b.charAt(f >> 2), c += b.charAt((3 & f) << 4), c += "==";
                            break
                        }
                        if (g = a.charCodeAt(d++), d === e) {
                            c += b.charAt(f >> 2), c += b.charAt((3 & f) << 4 | (240 & g) >> 4), c += b.charAt((15 & g) << 2), c += "=";
                            break
                        }
                        h = a.charCodeAt(d++), c += b.charAt(f >> 2), c += b.charAt((3 & f) << 4 | (240 & g) >> 4), c += b.charAt((15 & g) << 2 | (192 & h) >> 6), c += b.charAt(63 & h)
                    }
                    return c
                }, a.detectDevice = function(a) {
                    var b = 0;
                    try {
                        var c = navigator.userAgent.toLowerCase();
                        switch (a) {
                            case "android":
                                c.indexOf("android") > -1 && (b = parseFloat(c.match(/android ([\.0-9]+)/)[1]));
                                break;
                            case "msie":
                                c.indexOf("msie") > -1 && (b = parseFloat(c.match(/msie ([\.0-9]+)/)[1]));
                                break;
                            case "ios":
                                c.match(/(iphone|ipod|ipad)/) && (b = parseFloat(c.match(/os ([0-9]+(_[0-9]+)?)/)[1].replace("_", ".")));
                                break;
                            case "phone":
                                c.match(/(iphone|ipod)/) && (b = parseFloat(c.match(/os ([0-9]+(_[0-9]+)?)/)[1].replace("_", ".")))
                        }
                    } catch (d) {}
                    return b
                }, a.isFunction = function(a) {
                    return !!(a && a.constructor && a.call && a.apply)
                }, a.genUniqueId = function() {
                    var a, b, c = window.performance,
                        d = ["now", "webkitNow", "msNow", "mozNow"];
                    if (c)
                        for (var e = 0; e < d.length; e += 1)
                            if (c[d[e]]) {
                                b = d[e];
                                break
                            } return b && (a = function() {
                        return c[b]()
                    }), (a = a || Date.now || function() {
                        return (new Date).getTime()
                    })()
                }, a.checkWindowSanity = function() {
                    return window && window.parent && !!Object
                }, a.addElement = function(a) {
                    var b, c, d, e, f;
                    if (c = a.target, e = a.before, void 0 === c && (c = document.body), "string" == typeof c && (c = document.getElementById(a.target)), "string" == typeof e && (e = document.getElementById(a.before)), "object" == typeof c) {
                        if (d = "div", "string" == typeof a.type && (d = a.type), b = document.createElement(d), "string" == typeof a.text && (b.innerText = a.text), "string" == typeof a.html && (b.innerHTML = a.html), "object" == typeof a.attributes)
                            for (f in a.attributes) a.attributes.hasOwnProperty(f) && b.setAttribute(f, a.attributes[f]);
                        if ("object" == typeof a.events)
                            for (f in a.events) a.events.hasOwnProperty(f) && b.addEventListener(f, a.events[f]);
                        if ("function" == typeof a.onload && (b.onload = a.onload), "string" == typeof a.className && (b.className = a.className), "object" == typeof a.styles)
                            for (f in a.styles) a.styles.hasOwnProperty(f) && b.style.setProperty && b.style.setProperty(f, a.styles[f], "important");
                        return "object" == typeof e ? c.insertBefore(b, e) : c.appendChild(b), b
                    }
                    return null
                }, a.videoElementIsFullscreen = function(a) {
                    var b = a;
                    if (b.fullscreenEnabled || b.fullScreen || b.webkitIsFullScreen || b.mozFullScreen || b.msFullscreenEnabled) {
                        var c = b.fullscreenElement || b.webkitFullscreenElement || b.mozFullScreenElement || b.msFullscreenElement;
                        if (c && "video" === c.tagName.toLowerCase()) return !0
                    }
                    return !1
                }, a.addDocumentFullscreenEventListener = function(a, b, c) {
                    void 0 === c && (c = !1), a.addEventListener("fullscreenchange", b, c), a.addEventListener("webkitfullscreenchange", b, c), a.addEventListener("mozfullscreenchange", b, c), a.addEventListener("MSFullscreenChange", b, c)
                }, a.removeDocumentFullscreenEventListener = function(a, b, c) {
                    void 0 === c && (c = !1), a.removeEventListener("fullscreenchange", b, c), a.removeEventListener("webkitfullscreenchange", b, c), a.removeEventListener("mozfullscreenchange", b, c), a.removeEventListener("MSFullscreenChange", b, c)
                }, a.elementIsInstanceOfClass = function(a, b) {
                    var c = null;
                    try {
                        var d = a.ownerDocument,
                            e = a.ownerDocument.defaultView || d.parentWindow;
                        c = a instanceof e[b]
                    } catch (f) {}
                    return c
                }, a.getParentWindowOfElement = function(a) {
                    var b = null;
                    if (a && a.ownerDocument) {
                        var c = a.ownerDocument;
                        b = a.ownerDocument.defaultView || c.parentWindow
                    }
                    return b
                }, a.getCDNPrefix = function(a) {
                    return ("https:" === a.location.protocol ? "https" : "http") + "://scontent.lrcdn.net/outbound-cdn-static"
                }, a
            }();
            return c
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LRLinearFlashRenderer", ["require", "exports", "GlobalConfig", "LinearRenderer", "LogEvent", "Logger", "Utils"], function(a, b, c, d, e, f, g) {
            var h = function(a) {
                function b() {
                    var b = this;
                    a.apply(this, arguments), this._impressionOccurred = !1, this._logger = new f("LRLinearFlashRenderer"), this._paused = !1, this._progressMonitorInterval = null, this._volume = 1, this._onProgress = function() {
                        b.getCurrentTime() >= 0 && b.dispatchRendererProgress()
                    }
                }
                return __extends(b, a), b.prototype.destroy = function() {
                    this._stopProgressMonitor(), this._unloadFlashVPAID()
                }, b.prototype.load = function(b) {
                    a.prototype.load.call(this, b), this._logger.log("load(", b, ")"), this._loadFlashPlayer()
                }, b.prototype.start = function() {
                    this._logger.log("start()"), this._flashPlayer && (this._flashPlayer.setVolume(this._volume), this._flashPlayer.start())
                }, b.prototype.stop = function() {
                    this._logger.log("stop()"), this._flashPlayer && this._flashPlayer.stop()
                }, b.prototype.pause = function() {
                    this._logger.log("pause()"), this._flashPlayer && this._flashPlayer.pause()
                }, b.prototype.resume = function() {
                    this._logger.log("resume()"), this._flashPlayer && this._flashPlayer.resume()
                }, b.prototype.getAdElement = function() {
                    return this._flashPlayer
                }, b.prototype.getWidth = function() {
                    return this._flashPlayer ? this._flashPlayer.offsetWidth : 0
                }, b.prototype.getHeight = function() {
                    return this._flashPlayer ? this._flashPlayer.offsetHeight : 0
                }, b.prototype.getCurrentTime = function() {
                    return this._flashPlayer ? this._flashPlayer.getCurrentTime() : -2
                }, b.prototype.getDuration = function() {
                    return this._flashPlayer ? this._flashPlayer.getDuration() : -2
                }, b.prototype.getVolume = function() {
                    return this._volume
                }, b.prototype.setVolume = function(a) {
                    this._volume = a, this._flashPlayer && this._flashPlayer.setVolume(this._volume), this.dispatchVolumeChange()
                }, b.prototype.isPaused = function() {
                    return this._paused
                }, b.prototype.isSeeking = function() {
                    return !1
                }, b.prototype.impressionOccured = function() {
                    return this._impressionOccurred
                }, b.prototype.dispatchRendererEnded = function() {
                    a.prototype.dispatchRendererEnded.call(this)
                }, b.prototype.dispatchRendererError = function(b) {
                    a.prototype.dispatchRendererError.call(this, b)
                }, b.prototype._loadFlashPlayer = function() {
                    var a, c, d, f, h = this,
                        i = "",
                        j = {
                            onReady: function() {
                                return h._logger.log("Flash player dispatched Ready event"), h._logger.log("Calling load on Flash player with url:", h._adAsset.getUrl()), h._flashPlayer.load(h._adAsset.getUrl()), !0
                            },
                            onLoaded: function() {
                                return h._logger.log("Flash player dispatched Loaded event"), h.dispatchRendererLoaded(), !0
                            },
                            onImpression: function() {
                                return h._logger.log("Flash player dispatched Impression event"), h._impressionOccurred = !0, h._startProgressMonitor(), h.dispatchRendererImpression(), !0
                            },
                            onEnded: function() {
                                return h._logger.log("Flash player dispatched Ended event"), h.destroy(), h.dispatchRendererEnded(), !0
                            },
                            onError: function(a, b) {
                                return h._logger.error("Flash player dispatched Error event, id=" + a, "message=" + b), h.destroy(), h.dispatchRendererError(new e(a, b)), !0
                            },
                            onPaused: function() {
                                return h._logger.log("Flash player dispatched Paused event"), h._paused === !1 && (h._paused = !0, h.dispatchRendererPaused()), !0
                            },
                            onResumed: function() {
                                return h._logger.log("Flash player dispatched Resumed event"), h._paused === !0 && (h._paused = !1, h.dispatchRendererResumed()), !0
                            }
                        };
                    this._slotWindow.LiveRail || (this._slotWindow.LiveRail = {}), this._slotWindow.LiveRail.FlashPlayerListeners || (this._slotWindow.LiveRail.FlashPlayerListeners = {}), b._instanceCount += 1, c = "LiveRail.FlashPlayerListeners.FlashBridge_" + b._instanceCount, d = g.getCDNPrefix(this._slotWindow) + "/swf/v4/flv-renderer.swf", a = "jscontext=" + c, i += '<object style="display: block; width: 100%; height: 100%;"', navigator.userAgent.match(/MSIE/i) ? (i += ' id="' + c + '"', i += ' name="' + c + '"', i += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">', i += '<param name="movie" value="' + d + '" />') : (i += ' data="' + d + '"', i += ' type="application/x-shockwave-flash">'), i += '<param name="quality" value="high" />', i += '<param name="allowfullscreen" value="true" />', i += '<param name="allowscriptaccess" value="always" />', i += '<param name="flashvars" value="' + a + '" />', i += '<param name="bgcolor" value="#000000" />', i += '<param name="wmode" value="opaque" />', i += "</object>", this._slotWindow.LiveRail.FlashPlayerListeners["FlashBridge_" + b._instanceCount] = j, this._flashContainer = this._slotWindow.document.createElement("div"), this._flashContainer.style.setProperty("position", "absolute", "important"), this._flashContainer.style.setProperty("position", "absolute", "important"), this._flashContainer.style.setProperty("top", "0px", "important"), this._flashContainer.style.setProperty("left", "0px", "important"), this._flashContainer.style.setProperty("width", "100%", "important"), this._flashContainer.style.setProperty("height", "100%", "important");
                    var k = this._slot;
                    this._slotWindow.getComputedStyle ? f = this._slotWindow.getComputedStyle(this._slot, null).getPropertyValue("position") : k.currentStyle && (f = k.currentStyle.position), this._targetSlotOriginalStylePosition = void 0, this._targetSlotOriginalPriorityPosition = void 0, "static" === f && (this._targetSlotOriginalStylePosition = this._slot.style.getPropertyValue("position"), this._targetSlotOriginalPriorityPosition = this._slot.style.getPropertyPriority("position"), this._slot.style.setProperty("position", "relative", "important")), this._slot.appendChild(this._flashContainer), this._flashContainer.innerHTML = i, this._flashPlayer = this._flashContainer.childNodes[0], this._logger.verbose("Loaded JS-Flash event interface:", j)
                }, b.prototype._startProgressMonitor = function() {
                    this._progressMonitorInterval || (this._logger.debug("Starting progress monitor at currentTime=" + this._flashPlayer.getCurrentTime()), this._progressMonitorInterval = setInterval(this._onProgress, Math.round(1e3 * c.MEASUREMENT_FREQUENCY)), this._onProgress())
                }, b.prototype._stopProgressMonitor = function() {
                    if (this._progressMonitorInterval) {
                        this._logger.debug("Stopping progress monitor at currentTime=" + this._flashPlayer.getCurrentTime());
                        try {
                            clearInterval(this._progressMonitorInterval), this._progressMonitorInterval = null
                        } catch (a) {}
                    }
                }, b.prototype._unloadFlashVPAID = function() {
                    this._slot && this._flashContainer && (this._slot.removeChild(this._flashContainer), this._logger.log("Unloaded Flash player"), void 0 !== this._targetSlotOriginalStylePosition && (this._logger.log("Resetting slot element position to " + this._targetSlotOriginalStylePosition), this._slot.style.setProperty("position", this._targetSlotOriginalStylePosition, this._targetSlotOriginalPriorityPosition)), this._flashPlayer = null, this._flashContainer = null)
                }, b._instanceCount = 0, b
            }(d);
            return h
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LRLinearHtmlRenderer", ["require", "exports", "GlobalConfig", "LinearRenderer", "LogEvent", "LogEventType", "Logger", "Utils"], function(a, b, c, d, e, f, g, h) {
            var i = function(a) {
                function b() {
                    var b = this;
                    a.apply(this, arguments), this._impressionOccurred = !1, this._iosVersion = h.detectDevice("ios"), this._lastProgressTime = 0, this._lastRealTime = 0, this._logger = new g("LRLinearHtmlRenderer"), this._volume = 1, this._onProgress = function() {
                        return b._videoSlot.src !== b._adAsset.getUrl() ? void b.dispatchRendererError(e.eventWithType(f.CreativeGeneralError, {
                            message: "Video element src changed unexpectedly"
                        })) : (b._videoSlot.controls = !1, b._videoSlotWasSeeked(b._videoSlot.currentTime) ? void b._resetToLastProgressTime() : (b._lastProgressTime < b._videoSlot.currentTime && (b._lastProgressTime = b._videoSlot.currentTime), b._lastRealTime = Date.now(), !b._impressionOccurred && b._videoSlot.currentTime > 0 && (b._impressionOccurred = !0, b._videoSlot.addEventListener("ended", b._onVideoSlotEnded, !1), b.dispatchRendererImpression()), void(b._impressionOccurred && b.dispatchRendererProgress())))
                    }, this._onVideoSlotPause = function() {
                        !b._videoSlotPaused && b._impressionOccurred && b._videoSlot.currentTime < b._videoSlot.duration && (b._videoSlotPaused = !0, b.dispatchRendererPaused())
                    }, this._onVideoSlotPlay = function() {
                        b._videoSlotPaused && b._impressionOccurred && b._videoSlot.currentTime < b._videoSlot.duration && (b._videoSlotPaused = !1, b.dispatchRendererResumed())
                    }, this._onVideoSlotCanplay = function(a) {
                        if (b._videoSlot.removeEventListener("canplay", b._onVideoSlotCanplay, !1), b._videoSlot.currentTime >= 1) {
                            b._logger.log("Target element currentTime is " + b._videoSlot.currentTime + ", seeking to 0");
                            var c = function() {
                                b._videoSlot.removeEventListener("seeked", c, !1), b.dispatchRendererLoaded()
                            };
                            b._videoSlot.addEventListener("seeked", c, !1), b._videoSlot.currentTime = 0
                        } else b.dispatchRendererLoaded()
                    }, this._onVideoSlotLoadstart = function(a) {
                        b._videoSlot.removeEventListener("loadstart", b._onVideoSlotLoadstart, !1), b.dispatchRendererLoaded()
                    }, this._onVideoSlotEnded = function() {
                        if (h.checkWindowSanity()) {
                            b._logger.log("Video slot ended");
                            for (var a = 0, c = 0; c < b._videoSlot.seekable.length; c += 1) b._videoSlot.seekable.end(c) > a && (a = b._videoSlot.seekable.end(c));
                            if (b._videoSlotWasSeeked(a)) return b._resetToLastProgressTime(), void b._videoSlot.play();
                            b.dispatchRendererEnded()
                        }
                    }, this._onVideoSlotError = function() {
                        if (h.checkWindowSanity()) {
                            var a = f.CreativeGeneralError,
                                c = b._videoSlot.error;
                            if (b._logger.error("Ad video playback error:", c), c) switch (c.code) {
                                case c.MEDIA_ERR_NETWORK:
                                    a = f.CreativeFileNotFound;
                                    break;
                                case c.MEDIA_ERR_DECODE:
                                    a = f.CreativeFileUnsupported;
                                    break;
                                case c.MEDIA_ERR_SRC_NOT_SUPPORTED:
                                    a = f.CreativeFileUnsupported
                            }
                            b.dispatchRendererError(e.eventWithType(a, {
                                url: b._adAsset.getUrl(),
                                type: b._adAsset.getMimeType()
                            }))
                        }
                    }, this._onVideoSlotVolumeChange = function() {
                        b.dispatchVolumeChange()
                    }
                }
                return __extends(b, a), b.prototype.destroy = function() {
                    this._stopProgressMonitor(), this._unregisterVideoSlot(), this._videoSlot && this._videoSlot.pause()
                }, b.prototype.load = function(b) {
                    a.prototype.load.call(this, b), this._logger.log("load(", b, ")"), this._videoSlot.pause(), this._videoSlot.volume = this._volume, this._registerVideoSlot(), this._videoSlot.src = this._adAsset.getUrl(), this._videoSlot.load()
                }, b.prototype.start = function() {
                    this._logger.log("start()"), this._startProgressMonitor(), this._startAdVideoPlayback()
                }, b.prototype.stop = function() {
                    this._logger.log("stop()"), this.dispatchRendererEnded()
                }, b.prototype.pause = function() {
                    this._logger.log("pause()"), this._videoSlot && !this._videoSlot.paused && this._videoSlot.pause()
                }, b.prototype.resume = function() {
                    this._logger.log("resume()"), this._videoSlot && this._videoSlot.paused && this._videoSlot.play()
                }, b.prototype.getWidth = function() {
                    return this._videoSlot ? this._videoSlot.offsetWidth : 0
                }, b.prototype.getHeight = function() {
                    return this._videoSlot ? this._videoSlot.offsetHeight : 0
                }, b.prototype.getCurrentTime = function() {
                    return this._videoSlot && !isNaN(this._videoSlot.currentTime) ? this._videoSlot.currentTime : -2
                }, b.prototype.getDuration = function() {
                    return this._videoSlot ? this._videoSlot.duration : -2
                }, b.prototype.getVolume = function() {
                    return this._videoSlot ? this._videoSlot.volume : this._volume
                }, b.prototype.setVolume = function(a) {
                    this._volume = a, this._videoSlot && (this._videoSlot.volume = this._volume)
                }, b.prototype.isPaused = function() {
                    return this._videoSlot ? this._videoSlot.paused : !1
                }, b.prototype.isSeeking = function() {
                    return this._videoSlot ? this._videoSlot.seeking : !1
                }, b.prototype.impressionOccured = function() {
                    return this._impressionOccurred
                }, b.prototype.dispatchRendererEnded = function() {
                    this.destroy(), a.prototype.dispatchRendererEnded.call(this)
                }, b.prototype.dispatchRendererError = function(b) {
                    this.destroy(), a.prototype.dispatchRendererError.call(this, b)
                }, b.prototype._registerVideoSlot = function() {
                    this._logger.debug("Registering listeners on video slot element"), this._videoSlot.addEventListener("pause", this._onVideoSlotPause, !0), this._videoSlot.addEventListener("play", this._onVideoSlotPlay, !0), this._videoSlot.addEventListener("error", this._onVideoSlotError, !0), this._videoSlot.addEventListener("volumechange", this._onVideoSlotVolumeChange, !0), this._iosVersion ? (this._logger.debug("iOS version " + this._iosVersion + " detected, using canplay event to begin playback"), this._videoSlot.addEventListener("canplay", this._onVideoSlotCanplay, !1)) : this._videoSlot.addEventListener("loadstart", this._onVideoSlotLoadstart, !1)
                }, b.prototype._resetToLastProgressTime = function() {
                    var a = Math.max(0, this._lastProgressTime - .2);
                    this._logger.warn("Setting currentTime to:", a), this._videoSlot.currentTime = a
                }, b.prototype._startAdVideoPlayback = function() {
                    this._bgColor && this._videoSlot.style.setProperty("background-color", "#000", "important"), this._logger.debug("Calling _videoSlot.play()"), this._videoSlot.play()
                }, b.prototype._startProgressMonitor = function() {
                    this._progressMonitorInterval || (this._logger.debug("Starting progress monitor at currentTime=" + this._videoSlot.currentTime), this._progressMonitorInterval = setInterval(this._onProgress, Math.round(1e3 * c.MEASUREMENT_FREQUENCY)))
                }, b.prototype._stopProgressMonitor = function() {
                    if (this._progressMonitorInterval) {
                        this._logger.debug("Stopping progress monitor at currentTime=" + this._videoSlot.currentTime);
                        try {
                            clearInterval(this._progressMonitorInterval), this._progressMonitorInterval = null
                        } catch (a) {}
                    }
                }, b.prototype._unregisterVideoSlot = function() {
                    this._logger.debug("Unregistering listeners on video slot element"), this._videoSlot.removeEventListener("pause", this._onVideoSlotPause, !0), this._videoSlot.removeEventListener("play", this._onVideoSlotPlay, !0), this._videoSlot.removeEventListener("error", this._onVideoSlotError, !0), this._videoSlot.removeEventListener("ended", this._onVideoSlotEnded, !1), this._videoSlot.removeEventListener("canplay", this._onVideoSlotCanplay, !1), this._videoSlot.removeEventListener("loadstart", this._onVideoSlotLoadstart, !1), this._videoSlot.removeEventListener("volumechange", this._onVideoSlotVolumeChange, !0)
                }, b.prototype._videoSlotWasSeeked = function(a) {
                    var b = a - this._lastProgressTime,
                        c = (Date.now() - this._lastRealTime) / 1e3,
                        d = 1;
                    return b > c + d ? (this._logger.warn("Video slot was seeked, progress=" + b + "s realtime=" + c + "s margin=" + d + "s"), !0) : !1
                }, b
            }(d);
            return i
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LRAdapter", ["require", "exports", "Adapter", "AdCandidate", "AdManagerEvents", "LinearRendererEvents", "LogEvent", "LogEventType", "LRLinearFlashRenderer", "LRLinearHtmlRenderer", "Utils"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l = function(a) {
                function b(b) {
                    var c = this;
                    a.call(this, "LRAdapter"), this._renderer = null, this._handleVideoElementFullscreen = function() {
                        k.videoElementIsFullscreen(c._slotWindow.document) && c._onAdError(g.eventWithType(h.CreativeGeneralError, {}, "Video element went fullscreen during Flash operation"))
                    }, this._onAdapterEnded = function() {
                        k.checkWindowSanity() && (c._logger.log("Renderer ended"), c._eventManager.dispatch(e.AdProgress), 3 === c._quartile && c._onAdVideoComplete(), c._onAdStopped())
                    }, this._onProgress = function() {
                        var a;
                        if (!window) return a = "Ad unit has been removed", c._logger.error(a), void c._onAdError(g.eventWithType(h.CreativeGeneralError, {
                            message: a
                        }));
                        if (window.parent && Object) {
                            var b = c._renderer.getCurrentTime(),
                                d = c._renderer.getDuration();
                            if (c._lastAdDuration === d || isNaN(d) || (c._lastAdDuration = d, c._onAdDurationChange()), c._renderer.impressionOccured()) {
                                if (!c._rendererStarted) {
                                    if (!(c._renderer.getDuration() > 0)) return void c._logger.debug("Renderer has not yet started (currentTime=" + c._renderer.getCurrentTime() + " duration=" + c._renderer.getDuration() + ")");
                                    c._clearStreamTimeout(), c._logger.debug("Renderer has started"), c._rendererStarted = !0, c._onAdVideoStart()
                                }
                                if (!c._dispatchedAdSkippableStateChange && c.getAdSkippableState() && (c._dispatchedAdSkippableStateChange = !0, c._eventManager.dispatch(e.AdSkippableStateChange)), c._renderer.impressionOccured() && !c._renderer.isSeeking() && !c._renderer.isPaused()) {
                                    var f = d / 4;
                                    0 === c._quartile && b >= f && (c._quartile += 1, c._onAdVideoFirstQuartile()), 1 === c._quartile && b >= 2 * f && (c._quartile += 1, c._onAdVideoMidpoint()), 2 === c._quartile && b >= 3 * f && (c._quartile += 1, c._onAdVideoThirdQuartile()), c._eventManager.dispatch(e.AdProgress)
                                }
                            }
                        }
                    }, this._onStreamTimeout = function() {
                        c._logger.error("Ad video stream timed out after " + c._adapterConfiguration.adCreativeTimeout + " seconds"), c._onAdError(g.eventWithType(h.CreativeFileTimeout, {
                            url: c._renderer.getAsset().getUrl(),
                            kbps: c._renderer.getAsset().getKbps(),
                            type: c._renderer.getAsset().getMimeType(),
                            flash: c._renderer.getAsset().requiresFlash(),
                            timeout: c._adapterConfiguration.adCreativeTimeout
                        }))
                    }, b(this)
                }
                return __extends(b, a), b.prototype.getAdWidth = function() {
                    return this._renderer ? this._renderer.getWidth() : a.prototype.getAdWidth.call(this)
                }, b.prototype.getAdHeight = function() {
                    return this._renderer ? this._renderer.getHeight() : a.prototype.getAdHeight.call(this)
                }, b.prototype.getAdLinear = function() {
                    return this._adCandidate ? this._adCandidate.type === d.TYPE_LINEAR : a.prototype.getAdLinear.call(this)
                }, b.prototype.getAdVolume = function() {
                    return this._renderer && (this._adVolume = this._renderer.getVolume()), a.prototype.getAdVolume.call(this)
                }, b.prototype.setAdVolume = function(b) {
                    this._renderer ? this._renderer.setVolume(b) : a.prototype.setAdVolume.call(this, b)
                }, b.prototype.getAdSkippableState = function() {
                    return 0 === this.getAdSkippableRemainingTime() ? !0 : !1
                }, b.prototype.getAdSkippableRemainingTime = function() {
                    if (null !== this._linearCreative.getSkipOffset() && this._linearCreative.getSkipOffset() > -1) {
                        var a;
                        return a = this._linearCreative.getSkipIsPercent() ? this._renderer.getDuration() * this._linearCreative.getSkipOffset() / 100 - this._renderer.getCurrentTime() : this._linearCreative.getSkipOffset() - this._renderer.getCurrentTime(), Math.max(0, a)
                    }
                    return -2
                }, b.prototype.getAdDuration = function() {
                    return this._renderer ? this._renderer.getDuration() : a.prototype.getAdDuration.call(this)
                }, b.prototype.getAdRemainingTime = function() {
                    return this._renderer && this._renderer.getDuration() > 0 ? this._renderer.getCurrentTime() > 0 ? this._renderer.getDuration() - this._renderer.getCurrentTime() : this._renderer.getDuration() : -2
                }, b.prototype.initAd = function(b, c, d, e, f, k) {
                    a.prototype.initAd.call(this, b, c, d, e, f, k), this._logger.debug("initAd(", b, ",", c, ",", d, ",", e, ",", f, ",", k, ")");
                    var l = null,
                        m = null;
                    this._adCandidate = k.adCandidate;
                    var n = k.environmentData;
                    return this._slotWindow = n.parentWindow, this.getAdLinear() ? (this._linearCreative = this._adCandidate.getLinearCreative(), l = this._linearCreative.getAdAsset(e, this._adapterConfiguration.mimeTypePriorityList), m = l.requiresFlash() ? new i(n) : new j(n), this._registerRenderer(m), this._renderer.load(l), void 0) : void this._onAdError(g.eventWithType(h.CreativeFileUnsupported, {
                        type: this._adCandidate.type
                    }))
                }, b.prototype.startAd = function() {
                    if (this._logger.debug("startAd()"), this._renderer instanceof i) {
                        if (this._handleVideoElementFullscreen()) return;
                        k.addDocumentFullscreenEventListener(this._slotWindow.document, this._handleVideoElementFullscreen, !1)
                    }
                    this._setStreamTimeout(), this._renderer.start(), this._onAdStarted()
                }, b.prototype.stopAd = function() {
                    this._renderer ? this._renderer.stop() : this._onAdStopped()
                }, b.prototype.pauseAd = function() {
                    this._renderer.impressionOccured() && this._renderer.isPaused() === !1 && this._renderer.pause()
                }, b.prototype.resumeAd = function() {
                    this._renderer.impressionOccured() && this._renderer.isPaused() === !0 && this._renderer.resume()
                }, b.prototype.skipAd = function() {
                    this.getAdSkippableState() === !0 ? (this._logger.log("skipAd received -- initiating ad skip"), this._onAdSkipped(), this._onAdStopped()) : this._logger.warn("skipAd received -- ad not skippable at this time")
                }, b.prototype.expandAd = function() {
                    this._logger.log("expandAd is not supported for this creative")
                }, b.prototype.collapseAd = function() {
                    this._logger.log("collapseAd is not supported for this creative")
                }, b.prototype.destroy = function() {
                    this._clearStreamTimeout(), this._slotWindow && k.removeDocumentFullscreenEventListener(this._slotWindow.document, this._handleVideoElementFullscreen, !1), this._unregisterRenderer(), this._adCandidate = null, this._quartile = 0, this._dispatchedAdSkippableStateChange = !1, this._lastAdDuration = -2, this._lastProgressTime = 0, this._lastRealTime = 0, this._rendererStarted = !1
                }, b.prototype.getAdElement = function() {
                    return this._renderer ? this._renderer.getAdElement() : null
                }, b.prototype.isPaused = function() {
                    return this._renderer ? this._renderer.isPaused() : !1
                }, b.prototype.supports = function(a) {
                    return !0
                }, b.prototype._clearStreamTimeout = function() {
                    this._streamTimeout && (clearTimeout(this._streamTimeout), this._streamTimeout = null)
                }, b.prototype._onLinearRendererEnded = function() {
                    this._onAdapterEnded()
                }, b.prototype._onLinearRendererPaused = function() {
                    k.checkWindowSanity() && a.prototype._onAdPaused.call(this)
                }, b.prototype._onLinearRendererProgress = function() {
                    this._onProgress()
                }, b.prototype._onLinearRendererResumed = function() {
                    k.checkWindowSanity() && a.prototype._onAdPlaying.call(this)
                }, b.prototype._onLinearRendererVolumeChange = function() {
                    a.prototype.setAdVolume.call(this, this._renderer.getVolume())
                }, b.prototype._registerRenderer = function(a) {
                    this._renderer = a, this._renderer && (this._renderer.setVolume(this._adVolume), this._renderer.subscribe(this._onAdLoaded, f.Loaded, this), this._renderer.subscribe(this._onAdImpression, f.Impression, this), this._renderer.subscribe(this._onLinearRendererProgress, f.Progress, this), this._renderer.subscribe(this._onLinearRendererEnded, f.Ended, this), this._renderer.subscribe(this._onAdError, f.Error, this), this._renderer.subscribe(this._onLinearRendererPaused, f.Paused, this), this._renderer.subscribe(this._onLinearRendererResumed, f.Resumed, this), this._renderer.subscribe(this._onLinearRendererVolumeChange, f.VolumeChange, this))
                }, b.prototype._setStreamTimeout = function() {
                    this._logger.log("Stream timeout set to " + this._adapterConfiguration.adCreativeTimeout + " seconds"), this._streamTimeout && this._clearStreamTimeout(), this._streamTimeout = setTimeout(this._onStreamTimeout, Math.round(1e3 * this._adapterConfiguration.adCreativeTimeout))
                }, b.prototype._unregisterRenderer = function() {
                    this._renderer && (this._renderer.unsubscribe(this._onAdLoaded, f.Loaded), this._renderer.unsubscribe(this._onAdImpression, f.Impression), this._renderer.unsubscribe(this._onLinearRendererProgress, f.Progress), this._renderer.unsubscribe(this._onLinearRendererEnded, f.Ended), this._renderer.unsubscribe(this._onAdError, f.Error), this._renderer.unsubscribe(this._onLinearRendererPaused, f.Paused), this._renderer.unsubscribe(this._onLinearRendererResumed, f.Resumed), this._renderer.unsubscribe(this._onLinearRendererVolumeChange, f.VolumeChange), this._renderer.destroy()), this._renderer = null
                }, b
            }(c);
            return l
        }), define("MimeType", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.Flash = "application/x-shockwave-flash", a.FLV = "video/x-flv", a.JavaScript = "application/javascript", a.JavaScriptAlt = "application/x-javascript", a.HLS = "application/x-mpegURL", a.HLSAlt = "application/vnd.apple.mpegURL", a.Mobile3GP = "video/3gpp", a.MP4 = "video/mp4", a.OGG = "video/ogg", a.WebM = "video/webm", a
            }();
            return c
        }), define("FlashVPAIDBridge", ["require", "exports", "EventManager", "Logger", "Utils", "VPAIDEvents"], function(a, b, c, d, e, f) {
            var g = function() {
                function a(a, b, e, g) {
                    var h = this;
                    this._adVolume = -1, this._creativeUrl = a, this._eventManager = new c(f), this._flashBuild = "201406161543", this._flashVPAID = null, this._logger = new d("FlashVPAIDBridge"), this._slot = b.slot, this._slotWindow = b.parentWindow, this._bgcolor = b.getAdParameters().bgcolor, this._destroy(), this._loadFlashVPAID(function(a) {
                        h._flashVPAID = a, h._logger.log("Loaded Flash VPAID:", h._flashVPAID), e(h)
                    }, function(a) {
                        h._logger.error("Error loading Flash VPAID bridge:", a), g(a)
                    })
                }
                return a.prototype.getAdLinear = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdLinear() : !1
                }, a.prototype.getAdWidth = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdWidth() : 0
                }, a.prototype.getAdHeight = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdHeight() : 0
                }, a.prototype.getAdExpanded = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdExpanded() : !1
                }, a.prototype.getAdSkippableState = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdSkippableState() : !1
                }, a.prototype.getAdSkippableRemainingTime = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdSkippableRemainingTime() : -2
                }, a.prototype.getAdRemainingTime = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdRemainingTime() : -2
                }, a.prototype.getAdDuration = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdDuration() : -2
                }, a.prototype.getAdVolume = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdVolume() : this._adVolume
                }, a.prototype.setAdVolume = function(a) {
                    this._adVolume = a, this._bridgeInterfaceExists() && this._flashVPAID.setAdVolume(a)
                }, a.prototype.getAdCompanions = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdCompanions() : ""
                }, a.prototype.getAdIcons = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdIcons() : !1
                }, a.prototype.handshakeVersion = function(a) {
                    return a
                }, a.prototype.initAd = function(a, b, c, d, f, g) {
                    if (this._logger.log("initAd() width:", a, " height:", b, " viewMode:", c, "desiredBitrate:", d, "creativeData:", f, "environmentVars:", g), this._bridgeInterfaceExists()) {
                        this._adVolume > -1 && (this._logger.debug("Setting Flash VPAID adVolume property to " + this._adVolume), this._flashVPAID.setAdVolume(this._adVolume));
                        var h = f.AdParameters || "";
                        this._flashVPAID.initAd(-1, -1, c, d, h, e.stringifyParameterObject(g))
                    }
                }, a.prototype.resizeAd = function(a, b, c) {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.resizeAd(a, b, c) : void 0
                }, a.prototype.startAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.startAd() : void 0
                }, a.prototype.stopAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.stopAd() : void 0
                }, a.prototype.pauseAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.pauseAd() : void 0
                }, a.prototype.resumeAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.resumeAd() : void 0
                }, a.prototype.expandAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.expandAd() : void 0
                }, a.prototype.collapseAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.collapseAd() : void 0
                }, a.prototype.skipAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.skipAd() : void 0
                }, a.prototype.subscribe = function(a, b, c) {
                    this._eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this._eventManager.unsubscribe(a, b)
                }, a.prototype.getAdElement = function() {
                    return this._flashVPAID
                }, a.prototype._bridgeInterfaceExists = function() {
                    return this._flashVPAID && e.isFunction(this._flashVPAID.handshakeVersion)
                }, a.prototype._destroy = function() {
                    this._unloadFlashVPAID(), this._flashContainer = null, this._flashVPAID = null
                }, a.prototype._loadFlashVPAID = function(b, c) {
                    var d, f, g, h, i, j = this,
                        k = "",
                        l = {
                            onInitComplete: function() {
                                b(g)
                            },
                            onInitError: function(a) {
                                c(a)
                            },
                            onVPAIDEvent: function(a) {
                                return j._onVPAIDEvent(a)
                            }
                        };
                    this._slotWindow.LiveRail || (this._slotWindow.LiveRail = {}), this._slotWindow.LiveRail.VPAIDListeners || (this._slotWindow.LiveRail.VPAIDListeners = {}), a._instanceCount += 1, f = "LiveRail.VPAIDListeners.FlashVPAIDBridge_" + a._instanceCount, h = e.getCDNPrefix(this._slotWindow) + "/swf/ui/vpaid-player.swf", h += "?build=" + this._flashBuild, d = "jscontext=" + f, d += "&vpaidURL=" + encodeURIComponent(this._creativeUrl), d += "&allowDomains=*", d += "&currentSecurityDomain=false", k += '<object style="display: block; width: 100%; height: 100%;"', navigator.userAgent.match(/MSIE/i) ? (k += ' id="' + f + '"', k += ' name="' + f + '"', k += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">', k += '<param name="movie" value="' + h + '" />') : (k += ' data="' + h + '"', k += ' type="application/x-shockwave-flash">'), k += '<param name="quality" value="high" />', k += '<param name="allowfullscreen" value="true" />', k += '<param name="allowscriptaccess" value="always" />', k += '<param name="flashvars" value="' + d + '" />', this._bgcolor ? (k += '<param name="wmode" value="opaque" />', k += '<param name="bgcolor" value="#' + this._bgcolor + '" />') : k += '<param name="wmode" value="transparent" />', k += "</object>", this._slotWindow.LiveRail.VPAIDListeners["FlashVPAIDBridge_" + a._instanceCount] = l, this._flashContainer = this._slotWindow.document.createElement("div"), this._flashContainer.style.position = "absolute", this._flashContainer.style.top = "0px", this._flashContainer.style.left = "0px", this._flashContainer.style.width = "100%", this._flashContainer.style.height = "100%";
                    var m = this._slot;
                    this._slotWindow.getComputedStyle ? i = this._slotWindow.getComputedStyle(this._slot, null).getPropertyValue("position") : m.currentStyle && (i = m.currentStyle.position), this._targetSlotOriginalPosition = void 0, "static" === i && (this._targetSlotOriginalPosition = this._slot.style.position, this._slot.style.position = "relative"), this._slot.appendChild(this._flashContainer), this._flashContainer.innerHTML = k, g = this._flashContainer.childNodes[0], this._logger.verbose("Loaded JS-Flash event interface:", l)
                }, a.prototype._onVPAIDEvent = function(a) {
                    var b = this;
                    f.hasOwnProperty(a.type) && window.setTimeout(function() {
                        switch (b._logger.verbose("Received " + a.type + " event from Flash bridge:", a, ")"), a.type) {
                            case f.AdClickThru:
                                b._eventManager.dispatch(f.AdClickThru, [a.data.url, a.data.id, a.data.playerHandles]);
                                break;
                            case f.AdInteraction:
                                b._eventManager.dispatch(f.AdInteraction, [a.data.id]);
                                break;
                            case f.AdLog:
                                b._eventManager.dispatch(f.AdLog, [a.data.message]);
                                break;
                            case f.AdStopped:
                                b._destroy(), b._eventManager.dispatch(f.AdStopped);
                                break;
                            case f.AdError:
                                b._destroy(), b._eventManager.dispatch(f.AdError, [a.data]);
                                break;
                            default:
                                b._eventManager.dispatch(a.type)
                        }
                    }, 0)
                }, a.prototype._unloadFlashVPAID = function() {
                    this._slot && this._flashContainer && (this._slot.removeChild(this._flashContainer), this._logger.log("Unloaded Flash VPAID"), this._targetSlotOriginalPosition && (this._logger.log("Resetting slot element position to " + this._targetSlotOriginalPosition), this._slot.style.position = this._targetSlotOriginalPosition))
                }, a._instanceCount = 0, a
            }();
            return g
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("VPAIDFlashWrapper", ["require", "exports", "Adapter", "FlashVPAIDBridge", "LogEvent", "LogEventType", "Utils", "VPAIDEvents"], function(a, b, c, d, e, f, g, h) {
            var i = function(a) {
                function b() {
                    var b = this;
                    a.call(this, "VPAIDFlashWrapper"), this._clearVPAIDInitTimeout = function() {
                        b._initTimeout && (clearTimeout(b._initTimeout), b._initTimeout = null)
                    }, this._clearVPAIDStartTimeout = function() {
                        b._startTimeout && (clearTimeout(b._startTimeout), b._startTimeout = null)
                    }, this._handleVideoElementFullscreen = function() {
                        return g.videoElementIsFullscreen(b._slotWindow.document) ? (b._onLinearVPAIDError(e.eventWithType(f.CreativeGeneralError, {}, "Video element went fullscreen during Flash operation")), !0) : !1
                    }, this._onVPAIDInitTimeout = function() {
                        b._initTimeout = null, b._logger.error("VPAID initAd timed out after " + b._adapterConfiguration.timeoutVPAIDInit + " seconds"), b._onLinearVPAIDError(e.eventWithType(f.CreativeFileTimeout, {
                            url: b._adCandidate.getThirdPartyData("url"),
                            type: b._adCandidate.getThirdPartyData("type"),
                            method: "init",
                            timeout: b._adapterConfiguration.timeoutVPAIDInit
                        }))
                    }, this._onVPAIDStartTimeout = function() {
                        b._startTimeout = null, b._logger.error("VPAID startAd timed out after " + b._adapterConfiguration.timeoutVPAIDStart + " seconds"), b._onLinearVPAIDError(e.eventWithType(f.CreativeFileTimeout, {
                            url: b._adCandidate.getThirdPartyData("url"),
                            type: b._adCandidate.getThirdPartyData("type"),
                            method: "start",
                            timeout: b._adapterConfiguration.timeoutVPAIDStart
                        }))
                    }
                }
                return __extends(b, a), b.prototype.initAd = function(b, c, g, h, i, j) {
                    var k = this;
                    a.prototype.initAd.call(this, b, c, g, h, i, j), this._logger.debug("initAd(", b, ",", c, ",", g, ",", h, ",", i, ",", j, ")"), this._slot = j.slot, this._adCandidate = j.adCandidate;
                    var l = j.environmentData;
                    this._slotWindow = l.parentWindow, new d(this._adCandidate.getThirdPartyData("url"), l, function(a) {
                        k._flashBridge = a;
                        var d = k._adCandidate.getThirdPartyData("creativeData") || "";
                        k._registerBridge(k._flashBridge), k._startVPAIDInitTimeout(), a.initAd(b, c, g, h, {
                            AdParameters: d
                        }, {})
                    }, function(a) {
                        k._onLinearVPAIDError(e.eventWithType(f.CreativeGeneralError, {
                            message: a
                        }, "Flash VPAID bridge init error"))
                    })
                }, b.prototype.resizeAd = function(a, b, c) {
                    this._flashBridge && this._flashBridge.resizeAd(a, b, c)
                }, b.prototype.startAd = function() {
                    this._handleVideoElementFullscreen() || (g.addDocumentFullscreenEventListener(this._slotWindow.document, this._handleVideoElementFullscreen, !1), this._startVPAIDStartTimeout(), this._flashBridge.setAdVolume(this._adVolume), this._flashBridge.startAd())
                }, b.prototype.stopAd = function() {
                    this._flashBridge ? this._flashBridge.stopAd() : this._onAdStopped()
                }, b.prototype.pauseAd = function() {
                    this._flashBridge && this._flashBridge.pauseAd()
                }, b.prototype.resumeAd = function() {
                    this._flashBridge && this._flashBridge.resumeAd()
                }, b.prototype.expandAd = function() {
                    this._flashBridge && this._flashBridge.expandAd()
                }, b.prototype.collapseAd = function() {
                    this._flashBridge && this._flashBridge.collapseAd()
                }, b.prototype.skipAd = function() {
                    this._flashBridge && this._flashBridge.skipAd()
                }, b.prototype.getAdLinear = function() {
                    return this._flashBridge ? this._flashBridge.getAdLinear() : a.prototype.getAdLinear.call(this)
                }, b.prototype.getAdWidth = function() {
                    return this._flashBridge ? this._flashBridge.getAdWidth() : a.prototype.getAdWidth.call(this)
                }, b.prototype.getAdHeight = function() {
                    return this._flashBridge ? this._flashBridge.getAdHeight() : a.prototype.getAdHeight.call(this)
                }, b.prototype.getAdExpanded = function() {
                    return this._flashBridge ? this._flashBridge.getAdExpanded() : a.prototype.getAdExpanded.call(this)
                }, b.prototype.getAdSkippableState = function() {
                    return this._flashBridge ? this._flashBridge.getAdSkippableState() : a.prototype.getAdSkippableState.call(this)
                }, b.prototype.getAdRemainingTime = function() {
                    return this._flashBridge ? this._flashBridge.getAdRemainingTime() : a.prototype.getAdRemainingTime.call(this)
                }, b.prototype.getAdDuration = function() {
                    return this._flashBridge ? this._flashBridge.getAdDuration() : a.prototype.getAdDuration.call(this)
                }, b.prototype.getAdVolume = function() {
                    return this._flashBridge ? this._flashBridge.getAdVolume() : a.prototype.getAdVolume.call(this)
                }, b.prototype.setAdVolume = function(b) {
                    this._adVolume = b, this._flashBridge ? this._flashBridge.setAdVolume(this._adVolume) : a.prototype._onAdVolumeChange.call(this)
                }, b.prototype.destroy = function() {
                    this._flashBridge && (g.removeDocumentFullscreenEventListener(this._slotWindow.document, this._handleVideoElementFullscreen, !1), this._flashBridge.stopAd(), this._unregisterBridge(this._flashBridge), this._flashBridge = null), a.prototype.destroy.call(this)
                }, b.prototype.getAdElement = function() {
                    return this._flashBridge.getAdElement()
                }, b.prototype._onAdLoaded = function() {
                    this._clearVPAIDInitTimeout(), a.prototype._onAdLoaded.call(this)
                }, b.prototype._onAdStarted = function() {
                    this._clearVPAIDStartTimeout(), a.prototype._onAdStarted.call(this)
                }, b.prototype._onAdVolumeChange = function() {
                    this._adVolume = this._flashBridge.getAdVolume(), a.prototype._onAdVolumeChange.call(this)
                }, b.prototype._onLinearVPAIDError = function(a) {
                    this._onAdError(a)
                }, b.prototype._onVPAIDAdError = function(a) {
                    this._logger.error("VPAID creative dispatched AdError with message:", a), this._onLinearVPAIDError(e.eventWithType(f.CreativeComponentError, {
                        url: this._adCandidate.getThirdPartyData("url"),
                        message: g.returnString(a)
                    }))
                }, b.prototype._registerBridge = function(a) {
                    a && (this._logger.log("Registering event subscriptions on bridge instance:", a), a.subscribe(this._onAdLoaded, h.AdLoaded, this), a.subscribe(this._onAdStarted, h.AdStarted, this), a.subscribe(this._onAdStopped, h.AdStopped, this), a.subscribe(this._onAdSkipped, h.AdSkipped, this), a.subscribe(this._onAdSkippableStateChange, h.AdSkippableStateChange, this), a.subscribe(this._onAdSizeChange, h.AdSizeChange, this), a.subscribe(this._onAdLinearChange, h.AdLinearChange, this), a.subscribe(this._onAdDurationChange, h.AdDurationChange, this), a.subscribe(this._onAdExpandedChange, h.AdExpandedChange, this), a.subscribe(this._onAdVolumeChange, h.AdVolumeChange, this), a.subscribe(this._onAdImpression, h.AdImpression, this), a.subscribe(this._onAdVideoStart, h.AdVideoStart, this), a.subscribe(this._onAdVideoFirstQuartile, h.AdVideoFirstQuartile, this), a.subscribe(this._onAdVideoMidpoint, h.AdVideoMidpoint, this), a.subscribe(this._onAdVideoThirdQuartile, h.AdVideoThirdQuartile, this), a.subscribe(this._onAdVideoComplete, h.AdVideoComplete, this), a.subscribe(this._onAdClickThru, h.AdClickThru, this), a.subscribe(this._onAdInteraction, h.AdInteraction, this), a.subscribe(this._onAdUserAcceptInvitation, h.AdUserAcceptInvitation, this), a.subscribe(this._onAdUserMinimize, h.AdUserMinimize, this), a.subscribe(this._onAdUserClose, h.AdUserClose, this), a.subscribe(this._onAdPaused, h.AdPaused, this), a.subscribe(this._onAdPlaying, h.AdPlaying, this), a.subscribe(this._onAdLog, h.AdLog, this), a.subscribe(this._onVPAIDAdError, h.AdError, this))
                }, b.prototype._startVPAIDInitTimeout = function() {
                    this._logger.log("VPAID initAd timeout set to " + this._adapterConfiguration.timeoutVPAIDInit + " seconds"), this._initTimeout = setTimeout(this._onVPAIDInitTimeout, 1e3 * this._adapterConfiguration.timeoutVPAIDInit)
                }, b.prototype._startVPAIDStartTimeout = function() {
                    this._logger.log("VPAID start timeout set to " + this._adapterConfiguration.timeoutVPAIDStart + " seconds"), this._startTimeout = setTimeout(this._onVPAIDStartTimeout, 1e3 * this._adapterConfiguration.timeoutVPAIDStart)
                }, b.prototype._unregisterBridge = function(a) {
                    a && (this._logger.log("Unregistering event subscriptions on adapter instance:", a), a.unsubscribe(this._onAdLoaded, h.AdLoaded), a.unsubscribe(this._onAdStarted, h.AdStarted), a.unsubscribe(this._onAdStopped, h.AdStopped), a.unsubscribe(this._onAdSkipped, h.AdSkipped), a.unsubscribe(this._onAdSkippableStateChange, h.AdSkippableStateChange), a.unsubscribe(this._onAdSizeChange, h.AdSizeChange), a.unsubscribe(this._onAdLinearChange, h.AdLinearChange), a.unsubscribe(this._onAdDurationChange, h.AdDurationChange), a.unsubscribe(this._onAdExpandedChange, h.AdExpandedChange), a.unsubscribe(this._onAdVolumeChange, h.AdVolumeChange), a.unsubscribe(this._onAdImpression, h.AdImpression), a.unsubscribe(this._onAdVideoStart, h.AdVideoStart), a.unsubscribe(this._onAdVideoFirstQuartile, h.AdVideoFirstQuartile), a.unsubscribe(this._onAdVideoMidpoint, h.AdVideoMidpoint), a.unsubscribe(this._onAdVideoThirdQuartile, h.AdVideoThirdQuartile), a.unsubscribe(this._onAdVideoComplete, h.AdVideoComplete), a.unsubscribe(this._onAdClickThru, h.AdClickThru), a.unsubscribe(this._onAdInteraction, h.AdInteraction), a.unsubscribe(this._onAdUserAcceptInvitation, h.AdUserAcceptInvitation), a.unsubscribe(this._onAdUserMinimize, h.AdUserMinimize), a.unsubscribe(this._onAdUserClose, h.AdUserClose), a.unsubscribe(this._onAdPaused, h.AdPaused), a.unsubscribe(this._onAdPlaying, h.AdPlaying), a.unsubscribe(this._onAdLog, h.AdLog), a.unsubscribe(this._onVPAIDAdError, h.AdError))
                }, b
            }(c);
            return i
        }), define("VPAIDMethods", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.getAdLinear = "getAdLinear", a.getAdWidth = "getAdWidth", a.getAdHeight = "getAdHeight", a.getAdExpanded = "getAdExpanded", a.getAdSkippableState = "getAdSkippableState", a.getAdSkippableRemainingTime = "getAdSkippableRemainingTime", a.getAdRemainingTime = "getAdRemainingTime", a.getAdDuration = "getAdDuration", a.getAdVolume = "getAdVolume", a.setAdVolume = "setAdVolume", a.getAdCompanions = "getAdCompanions", a.getAdIcons = "getAdIcons", a.handshakeVersion = "handshakeVersion", a.initAd = "initAd", a.resizeAd = "resizeAd", a.startAd = "startAd", a.stopAd = "stopAd", a.pauseAd = "pauseAd", a.resumeAd = "resumeAd", a.expandAd = "expandAd", a.collapseAd = "collapseAd", a.skipAd = "skipAd", a.subscribe = "subscribe", a.unsubscribe = "unsubscribe", a
            }();
            return c
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("VPAIDHtmlWrapper", ["require", "exports", "Adapter", "LogEvent", "LogEventType", "Utils", "VPAIDEvents", "VPAIDMethods"], function(a, b, c, d, e, f, g, h) {
            var i = function(a) {
                function b() {
                    var b = this;
                    a.call(this, "VPAIDHtmlWrapper"), this._clearVPAIDInitTimeout = function() {
                        b._initTimeout && (clearTimeout(b._initTimeout), b._initTimeout = null)
                    }, this._clearVPAIDLoadTimeout = function() {
                        b._loadTimeout && (clearTimeout(b._loadTimeout), b._loadTimeout = null)
                    }, this._clearVPAIDStartTimeout = function() {
                        b._startTimeout && (clearTimeout(b._startTimeout), b._startTimeout = null)
                    }, this._onCreativeAdClickThru = function(a, c, d) {
                        b._onAdClickThru(f.returnString(a, "").trim(), f.returnString(c, ""), f.returnBoolean(d))
                    }, this._onCreativeAdDurationChange = function() {
                        b._onAdDurationChange()
                    }, this._onCreativeAdError = function(a) {
                        b._logger.error("VPAID creative dispatched AdError with message:", a), b._onLinearVPAIDError(d.eventWithType(e.CreativeComponentError, {
                            url: b._adCandidate.getThirdPartyData("url"),
                            message: f.returnString(a)
                        }))
                    }, this._onCreativeAdExpandedChange = function() {
                        b._onAdExpandedChange()
                    }, this._onCreativeAdImpression = function() {
                        b._clearVPAIDStartTimeout();
                        var a = b._callVPAIDInstanceMethod(h.getAdVolume);
                        "number" == typeof a && a !== b._adVolume && b.setAdVolume(a), b._onAdImpression()
                    }, this._onCreativeAdInteraction = function() {
                        b._onAdInteraction()
                    }, this._onCreativeAdLinearChange = function() {
                        b._onAdLinearChange()
                    }, this._onCreativeAdLoaded = function() {
                        b._clearVPAIDInitTimeout(), b._onAdLoaded()
                    }, this._onCreativeAdLog = function(a) {
                        b._logEvent(g.AdLog, [a])
                    }, this._onCreativeAdPaused = function() {
                        b._onAdPaused()
                    }, this._onCreativeAdPlaying = function() {
                        b._onAdPlaying()
                    }, this._onCreativeAdSizeChange = function() {
                        b._onAdSizeChange()
                    }, this._onCreativeAdSkippableStateChange = function() {
                        b._onAdSkippableStateChange()
                    }, this._onCreativeAdSkipped = function() {
                        b._onAdSkipped()
                    }, this._onCreativeAdStarted = function() {
                        b._onAdStarted()
                    }, this._onCreativeAdStopped = function() {
                        b._active && (b._logEvent(g.AdStopped), b._destroyThirdPartyVPAID(), b._onAdStopped())
                    }, this._onCreativeAdUserAcceptInvitation = function() {
                        b._onAdUserAcceptInvitation()
                    }, this._onCreativeAdUserClose = function() {
                        b._onAdUserClose()
                    }, this._onCreativeAdUserMinimize = function() {
                        b._onAdUserMinimize()
                    }, this._onCreativeAdVideoComplete = function() {
                        b._onAdVideoComplete()
                    }, this._onCreativeAdVideoFirstQuartile = function() {
                        b._onAdVideoFirstQuartile()
                    }, this._onCreativeAdVideoMidpoint = function() {
                        b._onAdVideoMidpoint()
                    }, this._onCreativeAdVideoStart = function() {
                        b._onAdVideoStart()
                    }, this._onCreativeAdVideoThirdQuartile = function() {
                        b._onAdVideoThirdQuartile()
                    }, this._onCreativeAdVolumeChange = function() {
                        var a = b._callVPAIDInstanceMethod(h.getAdVolume);
                        "number" == typeof a && (b._adVolume = a), b._onAdVolumeChange()
                    }, this._onVPAIDInitTimeout = function() {
                        b._initTimeout = null, b._onLinearVPAIDError(d.eventWithType(e.CreativeFileTimeout, {
                            url: b._adCandidate.getThirdPartyData("url"),
                            type: b._adCandidate.getThirdPartyData("type"),
                            method: "init",
                            timeout: b._adapterConfiguration.timeoutVPAIDInit
                        }))
                    }, this._onVPAIDLoadTimeout = function() {
                        b._loadTimeout = null, b._onLinearVPAIDError(d.eventWithType(e.CreativeFileTimeout, {
                            url: b._adCandidate.getThirdPartyData("url"),
                            type: b._adCandidate.getThirdPartyData("type"),
                            method: "load",
                            timeout: b._adapterConfiguration.timeoutVPAIDLoad
                        }))
                    }, this._onVPAIDStartTimeout = function() {
                        b._startTimeout = null, b._onLinearVPAIDError(d.eventWithType(e.CreativeFileTimeout, {
                            url: b._adCandidate.getThirdPartyData("url"),
                            type: b._adCandidate.getThirdPartyData("type"),
                            method: "start",
                            timeout: b._adapterConfiguration.timeoutVPAIDStart
                        }))
                    }, this._validateVPAIDCreative = function(a) {
                        var c = !0;
                        return "object" == typeof a ? [h.handshakeVersion, h.initAd, h.startAd, h.stopAd, h.subscribe, h.unsubscribe, h.getAdLinear, h.getAdVolume, h.setAdVolume].every(function(d) {
                            var e = a[d];
                            return "function" != typeof e ? (b._logger.error("VPAID creative is missing required " + d + " method"), c = !1, !1) : !0
                        }) : c = !1, c
                    }
                }
                return __extends(b, a), b.prototype.initAd = function(b, c, d, e, f, g) {
                    var i = this;
                    a.prototype.initAd.call(this, b, c, d, e, f, g), this._logger.debug("initAd(", b, ",", c, ",", d, ",", e, ",", f, ",", g, ")"), this._active = !0, this._slot = g.slot, this._videoSlot = g.videoSlot, this._adCandidate = g.adCandidate, this._instantiateThirdPartyVPAID(this._adCandidate.getThirdPartyData("url"), function(a) {
                        i._VPAIDInstance = a, i._registerVPAIDSubscriptions(i._VPAIDInstance);
                        var f = {},
                            j = i._adCandidate.getThirdPartyData("creativeData");
                        j && (f.AdParameters = j);
                        var k = {
                            slot: i._slot,
                            videoSlot: i._videoSlot,
                            videoSlotCanAutoPlay: g.videoSlotCanAutoPlay
                        };
                        i._logger.log("Calling initAd() on VPAID creative, timeout=" + i._adapterConfiguration.timeoutVPAIDInit, "width=" + b, "height=" + c, "viewMode=" + d, "desiredBitrate=" + e, "creativeData=", f, "environmentVars=", k), i._initTimeout = setTimeout(i._onVPAIDInitTimeout, 1e3 * i._adapterConfiguration.timeoutVPAIDInit), i._callVPAIDInstanceMethodOrDie(h.initAd, [b, c, d, e, f, k])
                    }, function(a) {
                        i._onLinearVPAIDError(a)
                    })
                }, b.prototype.resizeAd = function(a, b, c) {
                    this._callVPAIDInstanceMethod(h.resizeAd, [a, b, c])
                }, b.prototype.startAd = function() {
                    this._logger.log("Calling startAd() on VPAID creative, timeout=" + this._adapterConfiguration.timeoutVPAIDStart), this._startTimeout = setTimeout(this._onVPAIDStartTimeout, 1e3 * this._adapterConfiguration.timeoutVPAIDStart), this.setAdVolume(this._adVolume), this._callVPAIDInstanceMethodOrDie(h.startAd)
                }, b.prototype.stopAd = function() {
                    this._logger.log("Calling stopAd() on VPAID creative"), this._callVPAIDInstanceMethodOrDie(h.stopAd)
                }, b.prototype.pauseAd = function() {
                    this._logger.log("Calling pauseAd() on VPAID creative"), this._callVPAIDInstanceMethod(h.pauseAd)
                }, b.prototype.resumeAd = function() {
                    this._logger.log("Calling resumeAd() on VPAID creative"), this._callVPAIDInstanceMethod(h.resumeAd)
                }, b.prototype.expandAd = function() {
                    this._logger.log("Calling expandAd() on VPAID creative"), this._callVPAIDInstanceMethod(h.expandAd)
                }, b.prototype.collapseAd = function() {
                    this._logger.log("Calling collapseAd() on VPAID creative"), this._callVPAIDInstanceMethod(h.collapseAd)
                }, b.prototype.skipAd = function() {
                    this._logger.log("Calling skipAd() on VPAID creative"), this._callVPAIDInstanceMethod(h.skipAd)
                }, b.prototype.getAdLinear = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdLinear) || a.prototype.getAdLinear.call(this) : a.prototype.getAdLinear.call(this)
                }, b.prototype.getAdWidth = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdWidth) || a.prototype.getAdWidth.call(this) : a.prototype.getAdWidth.call(this)
                }, b.prototype.getAdHeight = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdHeight) || a.prototype.getAdHeight.call(this) : a.prototype.getAdHeight.call(this)
                }, b.prototype.getAdExpanded = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdExpanded) || a.prototype.getAdExpanded.call(this) : a.prototype.getAdExpanded.call(this)
                }, b.prototype.getAdSkippableState = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdSkippableState) || a.prototype.getAdSkippableState.call(this) : a.prototype.getAdSkippableState.call(this)
                }, b.prototype.getAdRemainingTime = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdRemainingTime) || a.prototype.getAdRemainingTime.call(this) : a.prototype.getAdRemainingTime.call(this)
                }, b.prototype.getAdDuration = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdDuration) || a.prototype.getAdDuration.call(this) : a.prototype.getAdDuration.call(this)
                }, b.prototype.getAdVolume = function() {
                    return this._VPAIDInstance ? this._callVPAIDInstanceMethod(h.getAdVolume) || a.prototype.getAdVolume.call(this) : a.prototype.getAdVolume.call(this)
                }, b.prototype.setAdVolume = function(b) {
                    var c = this;
                    this._VPAIDInstance ? (this._callVPAIDInstanceMethod(h.setAdVolume, [b], function() {
                        a.prototype.setAdVolume.call(c, b)
                    }), 0 === b ? 0 === this._videoSlot.volume || this._videoSlot.muted || (this._logger.log("Failed to set volume to 0, setting video slot to muted=true"), this._videoSlot.muted = !0) : this._videoSlot.volume !== b && (this._logger.log("Failed to set volume to " + b + " setting video slot volume directly"), this._videoSlot.volume = b)) : a.prototype.setAdVolume.call(this, b)
                }, b.prototype.destroy = function() {
                    this._active = !1, this._VPAIDInstance && (this.stopAd(), this._destroyThirdPartyVPAID()), this._videoSlot = null, this._slot = null, this._adapterConfiguration = null, this._adCandidate = null, a.prototype.destroy.call(this)
                }, b.prototype.getAdElement = function() {
                    return this._videoSlot
                }, b.prototype._onEvent = function(b, c) {
                    void 0 === c && (c = []), this._logEvent(b, c), a.prototype._onEvent.call(this, b, c)
                }, b.prototype._callVPAIDInstanceMethod = function(a, b, c) {
                    void 0 === b && (b = []), void 0 === c && (c = null);
                    try {
                        var d = this._VPAIDInstance;
                        return d[a].apply(d, b)
                    } catch (e) {
                        this._logger.error("VPAID instance uncaught error, method=" + a + " args=", b, "message=" + e.message, "error=", e), null !== c && c(e)
                    }
                }, b.prototype._callVPAIDInstanceMethodOrDie = function(a, b) {
                    var c = this;
                    void 0 === b && (b = []), this._callVPAIDInstanceMethod(a, b, function(b) {
                        c._onLinearVPAIDError(d.eventWithType(e.CreativeGeneralError, {
                            url: c._adCandidate.getThirdPartyData("url"),
                            message: "Exception thrown calling " + a + " method: " + b.message
                        }))
                    })
                }, b.prototype._destroyThirdPartyVPAID = function() {
                    this._clearVPAIDInitTimeout(), this._clearVPAIDLoadTimeout(), this._clearVPAIDStartTimeout(), this._unregisterVPAIDSubscriptions(this._VPAIDInstance), this._VPAIDInstance = null, document.body.removeChild(this._VPAIDLoader), this._VPAIDLoader = null, this._logger.log("Unloaded VPAID creative")
                }, b.prototype._instantiateThirdPartyVPAID = function(a, b, c) {
                    var f = this;
                    this._logger.log("Loading VPAID creative, timeout=" + this._adapterConfiguration.timeoutVPAIDLoad + " url=" + a), this._loadTimeout = setTimeout(this._onVPAIDLoadTimeout, 1e3 * this._adapterConfiguration.timeoutVPAIDLoad), this._VPAIDLoader = document.createElement("iframe"), this._VPAIDLoader.style.setProperty("display", "none", "important"), document.body.appendChild(this._VPAIDLoader), this._VPAIDLoader.contentWindow.document.open(), this._VPAIDLoader.contentWindow.document.close();
                    var g = this._VPAIDLoader.contentWindow.document.createElement("script");
                    g.onload = function() {
                        var g = f._VPAIDLoader.contentWindow;
                        if ("function" != typeof g.getVPAIDAd) return void c(d.eventWithType(e.CreativeGeneralError, {
                            url: a,
                            message: "Creative does not provide getVPAIDAd constructor"
                        }));
                        var i = g.getVPAIDAd();
                        return f._validateVPAIDCreative(i) ? (f._callVPAIDInstanceMethod(h.handshakeVersion, ["2.0"]), f._clearVPAIDLoadTimeout(), void(f._active && b(i))) : void c(d.eventWithType(e.CreativeGeneralError, {
                            url: a,
                            message: "Creative does not implement VPAID methods"
                        }))
                    }, g.onerror = function(b) {
                        f._clearVPAIDLoadTimeout(), f._active && c(d.eventWithType(e.CreativeGeneralError, {
                            message: "VPAID creative load failed with error: " + b.message,
                            url: a
                        }))
                    }, g.src = a, this._VPAIDLoader.contentWindow.document.body.appendChild(g)
                }, b.prototype._logEvent = function(a, b) {
                    void 0 === b && (b = []), this._logger.log("Received " + a + " event with arguments:", b)
                }, b.prototype._onLinearVPAIDError = function(a) {
                    var b = this;
                    a.id !== e.CreativeComponentError.id && this._VPAIDInstance && this._active === !0 && (this._active = !1, this.stopAd()), setTimeout(function() {
                        b._destroyThirdPartyVPAID(), b.destroy(), b._eventManager.dispatch(g.AdError, [a])
                    }, 0)
                }, b.prototype._registerVPAIDSubscriptions = function(a) {
                    this._logger.log("Registering event subscriptions on VPAID instance:", a), this._callVPAIDInstanceMethodOrDie(h.subscribe, [this._onCreativeAdLoaded, g.AdLoaded, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdStarted, g.AdStarted, this]), this._callVPAIDInstanceMethodOrDie(h.subscribe, [this._onCreativeAdStopped, g.AdStopped, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdSkipped, g.AdSkipped, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdSkippableStateChange, g.AdSkippableStateChange, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdSizeChange, g.AdSizeChange, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdLinearChange, g.AdLinearChange, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdDurationChange, g.AdDurationChange, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdExpandedChange, g.AdExpandedChange, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdVolumeChange, g.AdVolumeChange, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdImpression, g.AdImpression, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdVideoStart, g.AdVideoStart, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdVideoFirstQuartile, g.AdVideoFirstQuartile, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdVideoMidpoint, g.AdVideoMidpoint, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdVideoThirdQuartile, g.AdVideoThirdQuartile, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdVideoComplete, g.AdVideoComplete, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdClickThru, g.AdClickThru, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdInteraction, g.AdInteraction, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdUserAcceptInvitation, g.AdUserAcceptInvitation, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdUserMinimize, g.AdUserMinimize, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdUserClose, g.AdUserClose, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdPaused, g.AdPaused, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdPlaying, g.AdPlaying, this]), this._callVPAIDInstanceMethod(h.subscribe, [this._onCreativeAdLog, g.AdLog, this]), this._callVPAIDInstanceMethodOrDie(h.subscribe, [this._onCreativeAdError, g.AdError, this])
                }, b.prototype._unregisterVPAIDSubscriptions = function(a) {
                    this._logger.log("Unregistering event subscriptions on VPAID instance:", a), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdLoaded, g.AdLoaded]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdLoaded, g.AdLoaded]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdStarted, g.AdStarted]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdStopped, g.AdStopped]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdSkipped, g.AdSkipped]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdSkippableStateChange, g.AdSkippableStateChange]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdSizeChange, g.AdSizeChange]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdLinearChange, g.AdLinearChange]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdDurationChange, g.AdDurationChange]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdExpandedChange, g.AdExpandedChange]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdVolumeChange, g.AdVolumeChange]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdImpression, g.AdImpression]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdVideoStart, g.AdVideoStart]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdVideoFirstQuartile, g.AdVideoFirstQuartile]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdVideoMidpoint, g.AdVideoMidpoint]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdVideoThirdQuartile, g.AdVideoThirdQuartile]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdVideoComplete, g.AdVideoComplete]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdClickThru, g.AdClickThru]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdInteraction, g.AdInteraction]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdUserAcceptInvitation, g.AdUserAcceptInvitation]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdUserMinimize, g.AdUserMinimize]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdUserClose, g.AdUserClose]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdPaused, g.AdPaused]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdPlaying, g.AdPlaying]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdLog, g.AdLog]), this._callVPAIDInstanceMethod(h.unsubscribe, [this._onCreativeAdError, g.AdError])
                }, b
            }(c);
            return i
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("VPAIDAdapter", ["require", "exports", "Adapter", "AdManagerEvents", "GlobalConfig", "MimeType", "VPAIDEvents", "VPAIDFlashWrapper", "VPAIDHtmlWrapper"], function(a, b, c, d, e, f, g, h, i) {
                var j = function(a) {
                    function b(b) {
                        var c = this;
                        a.call(this, "VPAIDAdapter"), this._onProgress = function() {
                            c.isPaused() || c._eventManager.dispatch(d.AdProgress)
                        }, this.destroy(), b && b(this)
                    }
                    return __extends(b, a), b.prototype.supports = function(a) {
                        return !1
                    }, b.prototype.initAd = function(b, c, d, e, g, j) {
                        a.prototype.initAd.call(this, b, c, d, e, g, j), this._logger.debug("initAd(", b, ",", c, ",", d, ",", e, ",", g, ",", j, ")"),
                            this._active = !0;
                        var k = j.adCandidate;
                        k.getThirdPartyData("type") === f.JavaScript ? this._wrapper = new i : this._wrapper = new h, this._registerVPAIDWrapper(this._wrapper), this._wrapper.initAd(b, c, d, e, g, j)
                    }, b.prototype.resizeAd = function(a, b, c) {
                        this._wrapper.resizeAd(a, b, c)
                    }, b.prototype.startAd = function() {
                        this._wrapper.startAd()
                    }, b.prototype.stopAd = function() {
                        this._wrapper.stopAd()
                    }, b.prototype.pauseAd = function() {
                        this._wrapper.pauseAd()
                    }, b.prototype.resumeAd = function() {
                        this._wrapper.resumeAd()
                    }, b.prototype.expandAd = function() {
                        this._wrapper.expandAd()
                    }, b.prototype.collapseAd = function() {
                        this._wrapper.collapseAd()
                    }, b.prototype.skipAd = function() {
                        this._wrapper.skipAd()
                    }, b.prototype.getAdElement = function() {
                        return this._wrapper ? this._wrapper.getAdElement() : null
                    }, b.prototype.getAdLinear = function() {
                        return this._wrapper ? this._wrapper.getAdLinear() : a.prototype.getAdLinear.call(this)
                    }, b.prototype.getAdWidth = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdWidth() : a.prototype.getAdWidth.call(this)
                    }, b.prototype.getAdHeight = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdHeight() : a.prototype.getAdHeight.call(this)
                    }, b.prototype.getAdExpanded = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdExpanded() : a.prototype.getAdExpanded.call(this)
                    }, b.prototype.getAdSkippableState = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdSkippableState() : a.prototype.getAdSkippableState.call(this)
                    }, b.prototype.getAdRemainingTime = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdRemainingTime() : a.prototype.getAdRemainingTime.call(this)
                    }, b.prototype.getAdDuration = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdDuration() : a.prototype.getAdDuration.call(this)
                    }, b.prototype.getAdVolume = function() {
                        return this._active && this._wrapper ? this._wrapper.getAdVolume() : a.prototype.getAdVolume.call(this)
                    }, b.prototype.setAdVolume = function(b) {
                        this._active && this._wrapper && this._wrapper.setAdVolume(b), a.prototype.setAdVolume.call(this, b)
                    }, b.prototype.destroy = function() {
                        this._active = !1, this._stopProgressMonitor(), this._wrapper && (this._unregisterVPAIDWrapperInstance(), this._wrapper = null)
                    }, b.prototype.isPaused = function() {
                        return this._paused
                    }, b.prototype._onAdImpression = function() {
                        a.prototype._onAdImpression.call(this), this._startProgressMonitor()
                    }, b.prototype._onAdPaused = function() {
                        this._paused = !0, a.prototype._onAdPaused.call(this)
                    }, b.prototype._onAdPlaying = function() {
                        this._paused = !1, a.prototype._onAdPlaying.call(this)
                    }, b.prototype._onAdVideoComplete = function() {
                        this._eventManager.dispatch(d.AdProgress), a.prototype._onAdVideoComplete.call(this)
                    }, b.prototype._unregisterVPAIDWrapperInstance = function() {
                        this._logger.log("Unregistering VPAID wrapper"), this._unregisterVPAIDWrapper(this._wrapper), this._wrapper.destroy()
                    }, b.prototype._registerVPAIDWrapper = function(a) {
                        "object" == typeof a && "function" == typeof a.subscribe && (this._wrapper.setAdVolume(this._adVolume), this._logger.log("Registering event subscriptions on wrapper instance:", a), a.subscribe(this._onAdLoaded, g.AdLoaded, this), a.subscribe(this._onAdStarted, g.AdStarted, this), a.subscribe(this._onAdStopped, g.AdStopped, this), a.subscribe(this._onAdSkipped, g.AdSkipped, this), a.subscribe(this._onAdSkippableStateChange, g.AdSkippableStateChange, this), a.subscribe(this._onAdSizeChange, g.AdSizeChange, this), a.subscribe(this._onAdLinearChange, g.AdLinearChange, this), a.subscribe(this._onAdDurationChange, g.AdDurationChange, this), a.subscribe(this._onAdExpandedChange, g.AdExpandedChange, this), a.subscribe(this._onAdVolumeChange, g.AdVolumeChange, this), a.subscribe(this._onAdImpression, g.AdImpression, this), a.subscribe(this._onAdVideoStart, g.AdVideoStart, this), a.subscribe(this._onAdVideoFirstQuartile, g.AdVideoFirstQuartile, this), a.subscribe(this._onAdVideoMidpoint, g.AdVideoMidpoint, this), a.subscribe(this._onAdVideoThirdQuartile, g.AdVideoThirdQuartile, this), a.subscribe(this._onAdVideoComplete, g.AdVideoComplete, this), a.subscribe(this._onAdClickThru, g.AdClickThru, this), a.subscribe(this._onAdInteraction, g.AdInteraction, this), a.subscribe(this._onAdUserAcceptInvitation, g.AdUserAcceptInvitation, this), a.subscribe(this._onAdUserMinimize, g.AdUserMinimize, this), a.subscribe(this._onAdUserClose, g.AdUserClose, this), a.subscribe(this._onAdPaused, g.AdPaused, this), a.subscribe(this._onAdPlaying, g.AdPlaying, this), a.subscribe(this._onAdLog, g.AdLog, this), a.subscribe(this._onAdError, g.AdError, this))
                    }, b.prototype._unregisterVPAIDWrapper = function(a) {
                        "object" == typeof a && "function" == typeof a.unsubscribe && (this._logger.log("Unregistering event subscriptions on wrapper instance:", a), a.unsubscribe(this._onAdLoaded, g.AdLoaded), a.unsubscribe(this._onAdStarted, g.AdStarted), a.unsubscribe(this._onAdStopped, g.AdStopped), a.unsubscribe(this._onAdSkipped, g.AdSkipped), a.unsubscribe(this._onAdSkippableStateChange, g.AdSkippableStateChange), a.unsubscribe(this._onAdSizeChange, g.AdSizeChange), a.unsubscribe(this._onAdLinearChange, g.AdLinearChange), a.unsubscribe(this._onAdDurationChange, g.AdDurationChange), a.unsubscribe(this._onAdExpandedChange, g.AdExpandedChange), a.unsubscribe(this._onAdVolumeChange, g.AdVolumeChange), a.unsubscribe(this._onAdImpression, g.AdImpression), a.unsubscribe(this._onAdVideoStart, g.AdVideoStart), a.unsubscribe(this._onAdVideoFirstQuartile, g.AdVideoFirstQuartile), a.unsubscribe(this._onAdVideoMidpoint, g.AdVideoMidpoint), a.unsubscribe(this._onAdVideoThirdQuartile, g.AdVideoThirdQuartile), a.unsubscribe(this._onAdVideoComplete, g.AdVideoComplete), a.unsubscribe(this._onAdClickThru, g.AdClickThru), a.unsubscribe(this._onAdInteraction, g.AdInteraction), a.unsubscribe(this._onAdUserAcceptInvitation, g.AdUserAcceptInvitation), a.unsubscribe(this._onAdUserMinimize, g.AdUserMinimize), a.unsubscribe(this._onAdUserClose, g.AdUserClose), a.unsubscribe(this._onAdPaused, g.AdPaused), a.unsubscribe(this._onAdPlaying, g.AdPlaying), a.unsubscribe(this._onAdLog, g.AdLog), a.unsubscribe(this._onAdError, g.AdError))
                    }, b.prototype._startProgressMonitor = function() {
                        this._progressMonitorInterval || (this._logger.debug("Starting progress monitor at remainingTime=" + this._wrapper.getAdRemainingTime()), this._progressMonitorInterval = setInterval(this._onProgress, Math.round(1e3 * e.MEASUREMENT_FREQUENCY)), this._onProgress())
                    }, b.prototype._stopProgressMonitor = function() {
                        if (this._progressMonitorInterval) {
                            this._logger.debug("Stopping progress monitor at remainingTime=" + this._wrapper.getAdRemainingTime());
                            try {
                                clearInterval(this._progressMonitorInterval), this._progressMonitorInterval = null
                            } catch (a) {}
                        }
                    }, b
                }(c);
                return j
            }), define("AdapterFactory", ["require", "exports", "LRAdapter", "VPAIDAdapter"], function(a, b, c, d) {
                var e = function() {
                    function a() {
                        this._adapterInstances = {}
                    }
                    return a.getAvailableAdapters = function() {
                        var b = ["LR"];
                        return a._instanceData && a._instanceData.getDisableIframes() !== !0 && b.push("VPAID"), b
                    }, a.setInstanceData = function(b) {
                        a._instanceData = b
                    }, a.prototype.getAdapterInstance = function(b, e) {
                        var f = this,
                            g = function(a) {
                                f._adapterInstances[b] || (f._adapterInstances[b] = a), e(f._adapterInstances[b] || null)
                            };
                        if (-1 === a.getAvailableAdapters().indexOf(b) || this._adapterInstances.hasOwnProperty(b)) g(this._adapterInstances[b]);
                        else switch (b) {
                            case "LR":
                                new c(g);
                                break;
                            case "VPAID":
                                new d(g)
                        }
                    }, a
                }();
                return e
            }), define("AdapterConfiguration", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a(a, b) {
                        var c = a.getAdParameters();
                        this.adRequestTimeout = c.adRequestTimeout, this.adCreativeTimeout = c.adCreativeTimeout, this.timeoutVPAIDLoad = c.timeoutVPAIDLoad, this.timeoutVPAIDInit = c.timeoutVPAIDInit, this.timeoutVPAIDStart = c.timeoutVPAIDStart, this.desiredBitrate = c.desiredBitrate, this.linearSkin = c.linearSkin, this.indexMessage = c.indexMessage || b.indexMessage, this.countdownMessage = c.countdownMessage || b.countdownMessage, this.clickthroughMessage = c.clickthroughMessage || b.clickthroughMessage, this.skipCountdownMessage = c.skipCountdownMessage || b.skipCountdownMessage, this.skipMessage = c.skipMessage || b.skipMessage, this.showCountdown = c.showCountdown, this.clickElement = c.clickElement, this.playerHandlesClick = c.playerHandlesClick, this.pauseOnClick = c.pauseOnClick, this.placementType = b.placementType, this.allowExpand = b.allowExpand, this.allowSMS = b.allowSMS, this.allowTelephone = b.allowTelephone, this.allowWebcal = b.allowWebcal, this.allowResize = b.allowResize, this.allowPhoto = b.allowPhoto, this.allowCalendar = b.allowCalendar, this.mimeTypePriorityList = a.mimeTypePriorityList
                    }
                    return a.prototype.propertyOrDefault = function(a, b) {
                        return null !== a ? a : b
                    }, a
                }();
                return c
            }), define("AdExtensionManagerEvent", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {}
                    return a.InitComplete = "InitComplete", a.ExtensionUncaughtError = "ExtensionUncaughtError", a.ExtensionInitComplete = "ExtensionInitComplete", a
                }();
                return c
            }), define("AdExtensionConfig", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a(a, b) {
                        this._id = a, this._urls = b
                    }
                    return a.prototype.getId = function() {
                        return this._id
                    }, a.prototype.getUrls = function() {
                        return this._urls
                    }, a.ID_MOAT = "moat", a
                }();
                return c
            }), define("AdExtensionEvent", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {}
                    return a.InitComplete = "InitComplete", a
                }();
                return c
            }), define("AdExtension", ["require", "exports", "AdExtensionEvent", "EventManager"], function(a, b, c, d) {
                var e = function() {
                    function a(a) {
                        this._eventManager = new d(c), this._id = a
                    }
                    return a.prototype.destroy = function() {}, a.prototype.getId = function() {
                        return this._id
                    }, a.prototype.ingestAd = function(a, b) {}, a.prototype.initialize = function(a, b) {
                        this._eventManager.dispatch(c.InitComplete, [this])
                    }, a.prototype.onAdCandidateEnd = function(a) {}, a.prototype.onAdCandidateStart = function(a, b) {}, a.prototype.onAdCandidateVPAIDEvent = function(a, b, c) {}, a.prototype.subscribe = function(a, b, c) {
                        this._eventManager.subscribe(a, b, c)
                    }, a.prototype.unsubscribe = function(a, b) {
                        this._eventManager.unsubscribe(a, b)
                    }, a
                }();
                return e
            }),
            function() {
                eval('/*Copyright (c) 2011-2015 Moat Inc. All Rights Reserved.*/\nfunction initMoatTracking(c,g,h,p){var l=document.createElement("script"),e={events:[],addEvent:function(a){b.sendEvent?(e.events&&(b.sendEvent(e.events),e.events=null),b.sendEvent(a)):e.events.push(a)}},a=function(a){return function(){if("boolean"!=typeof events||events||m){var f=-2,b;c&&c.getAdVolume&&(b=c.getAdVolume())&&"number"==typeof b&&!isNaN(b)&&0<=b&&(f=b);e.addEvent({type:a,adVolume:f})}else if(m=!0,c&&c.unsubscribe&&!m)for(f in d)d.hasOwnProperty&&d.hasOwnProperty(f)&&c.unsubscribe(d[f],\nf)}},b={adData:{ids:h,vpaid:c,build:"b203011-clean"},dispatchEvent:e.addEvent};h="_moatApi"+Math.floor(1E8*Math.random());var d={AdStarted:a("AdStarted"),AdStopped:a("AdStopped"),AdSkipped:a("AdSkipped"),AdLoaded:a("AdLoaded"),AdLinearChange:a("AdLinearChange"),AdSizeChange:a("AdSizeChange"),AdExpandedChange:a("AdExpandedChange"),AdSkippableStateChange:a("AdSkippableStateChange"),AdDurationChange:a("AdDurationChange"),AdRemainingTimeChange:a("AdRemainingTimeChange"),AdVolumeChange:a("AdVolumeChange"),\nAdImpression:a("AdImpression"),AdClickThru:a("AdClickThru"),AdInteraction:a("AdInteraction"),AdVideoStart:a("AdVideoStart"),AdVideoFirstQuartile:a("AdVideoFirstQuartile"),AdVideoMidpoint:a("AdVideoMidpoint"),AdVideoThirdQuartile:a("AdVideoThirdQuartile"),AdVideoComplete:a("AdVideoComplete"),AdUserAcceptInvitation:a("AdUserAcceptInvitation"),AdUserMinimize:a("AdUserMinimize"),AdUserClose:a("AdUserClose"),AdPaused:a("AdPaused"),AdPlaying:a("AdPlaying"),AdError:a("AdError")},m=!1;(function(){if(c&&c.subscribe)for(var a in d)d.hasOwnProperty&&\nd.hasOwnProperty(a)&&c.subscribe(d[a],a)})();var k,n;try{k=g.ownerDocument,n=k.defaultView||k.parentWindow}catch(q){k=document,n=window}n[h]=b;l.type="text/javascript";g&&g.insertBefore(l,g.childNodes[0]||null);l.src="https://web.archive.org/web/20170109092628/https://z.moatads.com/"+p+"/moatvideo.js#"+h;return b};\n');
                var MoatIntegration = {
                    initMoatTracking: initMoatTracking
                };
                "undefined" != typeof exports ? module.exports = MoatIntegration : "undefined" != typeof define && define("MoatIntegration", [], function() {
                    return MoatIntegration
                })
            }(), define("VPAIDSanitizer", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {}
                    return a.sanitizeVPAIDInstance = function(a) {
                        return {
                            getAdLinear: function() {
                                return a.getAdLinear()
                            },
                            getAdWidth: function() {
                                return a.getAdWidth()
                            },
                            getAdHeight: function() {
                                return a.getAdHeight()
                            },
                            getAdExpanded: function() {
                                return a.getAdExpanded()
                            },
                            getAdSkippableState: function() {
                                return a.getAdSkippableState()
                            },
                            getAdSkippableRemainingTime: function() {
                                return a.getAdSkippableRemainingTime()
                            },
                            getAdRemainingTime: function() {
                                return a.getAdRemainingTime()
                            },
                            getAdDuration: function() {
                                return a.getAdDuration()
                            },
                            getAdVolume: function() {
                                return a.getAdVolume()
                            },
                            setAdVolume: function(b) {
                                return a.setAdVolume(b)
                            },
                            getAdCompanions: function() {
                                return a.getAdCompanions()
                            },
                            getAdIcons: function() {
                                return a.getAdIcons()
                            },
                            handshakeVersion: function(b) {
                                return a.handshakeVersion(b)
                            },
                            initAd: function(b, c, d, e, f, g) {
                                return a.initAd(b, c, d, e, f, g)
                            },
                            resizeAd: function(b, c, d) {
                                return a.resizeAd(b, c, d)
                            },
                            startAd: function() {
                                return a.startAd()
                            },
                            stopAd: function() {
                                return a.stopAd()
                            },
                            pauseAd: function() {
                                return a.pauseAd()
                            },
                            resumeAd: function() {
                                return a.resumeAd()
                            },
                            expandAd: function() {
                                return a.expandAd()
                            },
                            collapseAd: function() {
                                return a.collapseAd()
                            },
                            skipAd: function() {
                                return a.skipAd()
                            },
                            subscribe: function(b, c, d) {
                                return a.subscribe(b, c, d)
                            },
                            unsubscribe: function(b, c) {
                                return a.unsubscribe(b, c)
                            }
                        }
                    }, a
                }();
                return c
            });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("MoatAdExtension", ["require", "exports", "AdExtension", "AdExtensionConfig", "Logger", "MoatIntegration", "VPAIDSanitizer"], function(a, b, c, d, e, f, g) {
                var h = function(a) {
                    function b() {
                        a.call(this, d.ID_MOAT), this._logger = new e("MoatAdExtension")
                    }
                    return __extends(b, a), b.prototype.destroy = function() {
                        this._moatApiReference = null
                    }, b.prototype.initialize = function(b, c) {
                        this._environmentData = b, a.prototype.initialize.call(this, b, c)
                    }, b.prototype.onAdCandidateEnd = function(a) {
                        this.destroy()
                    }, b.prototype.onAdCandidateStart = function(a, b) {
                        if (b) {
                            var c = this._environmentData.getCurrentAdRequestParameters(),
                                d = {
                                    partnerCode: "liverailjsvp58397284",
                                    level1: a.orderOwner || "",
                                    level2: a.advertiserID || "",
                                    level3: a.uniqueCreativeID || a.creativeID || "",
                                    level4: a.orderID || "",
                                    level5: a.orderLineID || "",
                                    level6: this._environmentData.getUniqueInventoryId() || "",
                                    slicer1: this._environmentData.publisherId ? this._environmentData.publisherId.toString() : "",
                                    slicer2: c.LR_ADTYPE || "",
                                    slicer3: c.LR_MUTED || "",
                                    slicer4: c.LR_AUTOPLAY || "",
                                    slicer5: c.LR_DURATION || "",
                                    slicer6: c.LR_CONTENT || "",
                                    slicer7: c.LR_PARTNERS || "",
                                    slicer8: c.LR_VIDEO_ID || "",
                                    slicer9: c.LR_VERTICALS || "",
                                    slicer10: c.LR_URL || "",
                                    slicer11: c.LR_WIDTH || "",
                                    slicer12: c.LR_HEIGHT || ""
                                };
                            this._moatApiReference = f.initMoatTracking(g.sanitizeVPAIDInstance(a.getAdapterInstance()), b, d, "liverailjsvp58397284"), this._logger.log("Initialized Moat API:", this._moatApiReference)
                        } else this._logger.warn("No valid ad element, skipping Moat init")
                    }, b
                }(c);
                return h
            }), define("AdExtensionManager", ["require", "exports", "AdExtensionConfig", "AdExtensionEvent", "AdExtensionManagerEvent", "EventManager", "LogEvent", "LogEventType", "Logger", "MoatAdExtension"], function(a, b, c, d, e, f, g, h, i, j) {
                var k = function() {
                    function a(a) {
                        this._environmentData = a, this._eventManager = new f(e), this._extensionsInUse = {}, this._logger = new i("AdExtensionManager")
                    }
                    return a.prototype.destroy = function() {
                        var a = this;
                        this._enumerateAdExtensionsInUse(function(b) {
                            b.unsubscribe(a._onExtensionInitComplete, e.InitComplete), b.destroy()
                        })
                    }, a.prototype.initialize = function(b) {
                        var c = this;
                        this._adResponse = b, this._extensionsInUse = {}, this._totalExtensionsToInit = 0, this._numExtenstionsInitComplete = 0;
                        var e = "";
                        b.getAdSlots().forEach(function(b) {
                            b.getAdCandidates().forEach(function(b) {
                                b.getAdExtensionConfigs().forEach(function(d) {
                                    var f = d.getId();
                                    if (a._extensionIsSupported(f)) {
                                        var g = a._getAdExtensionForId(f);
                                        e += (e ? "," : "") + f;
                                        try {
                                            g.ingestAd(b, d), c._extensionsInUse[f] || (c._extensionsInUse[f] = g, c._totalExtensionsToInit++)
                                        } catch (h) {
                                            c._onExtensionError(f, h, "ingestAd")
                                        }
                                    } else c._logger.debug("Extension not supported id=" + f)
                                })
                            })
                        }), 0 === this._totalExtensionsToInit ? (this._logger.log("No ad extensions required"), this._onAllExtensionsCompleted()) : (this._logger.log("Ad Extensions required: " + e), this._enumerateAdExtensionsInUse(function(a) {
                            a.subscribe(c._onExtensionInitComplete, d.InitComplete, c), a.initialize(c._environmentData, b)
                        }))
                    }, a.prototype.onAdCandidateEnd = function(a) {
                        var b = this;
                        this._enumerateAdExtensionsInUse(function(c) {
                            try {
                                c.onAdCandidateEnd(a)
                            } catch (d) {
                                b._onExtensionError(c.getId(), d, "AdCandidateEnd")
                            }
                        })
                    }, a.prototype.onAdCandidateStart = function(a, b) {
                        var c = this;
                        this._enumerateAdExtensionsInUse(function(d) {
                            try {
                                d.onAdCandidateStart(a, b)
                            } catch (e) {
                                c._onExtensionError(d.getId(), e, "AdCandidateStart")
                            }
                        })
                    }, a.prototype.onVPAIDEvent = function(a, b, c) {
                        var d = this;
                        void 0 === c && (c = []), this._enumerateAdExtensionsInUse(function(e) {
                            try {
                                e.onAdCandidateVPAIDEvent(a, b, c)
                            } catch (f) {
                                d._onExtensionError(e.getId(), f, b)
                            }
                        })
                    }, a.prototype.subscribe = function(a, b, c) {
                        this._eventManager.subscribe(a, b, c)
                    }, a.prototype.unsubscribe = function(a, b) {
                        this._eventManager.unsubscribe(a, b)
                    }, a._extensionIsSupported = function(a) {
                        var b = {};
                        return b[c.ID_MOAT] = !0, b[a] || !1
                    }, a._getAdExtensionForId = function(b) {
                        if (a._extensionIsSupported(b) && !this._adExtensionInstances[b]) switch (b) {
                            case c.ID_MOAT:
                                this._adExtensionInstances[b] = new j
                        }
                        return this._adExtensionInstances[b]
                    }, a.prototype._enumerateAdExtensionsInUse = function(a) {
                        var b = this;
                        Object.keys(this._extensionsInUse).every(function(c) {
                            return a(b._extensionsInUse[c]) !== !1 ? !0 : !1
                        })
                    }, a.prototype._onAllExtensionsCompleted = function() {
                        this._logger.log("Ad extensions init complete"), this._eventManager.dispatch(e.InitComplete)
                    }, a.prototype._onExtensionError = function(a, b, c) {
                        var d = null;
                        try {
                            d = b.toString()
                        } catch (f) {
                            d = "Unknown error"
                        }
                        var i = g.eventWithType(h.AdExtensionUncaughtError, {
                            type: c,
                            id: a,
                            error: d
                        });
                        this._eventManager.dispatch(e.ExtensionUncaughtError, [i])
                    }, a.prototype._onExtensionInitComplete = function(a) {
                        this._numExtenstionsInitComplete++, this._logger.log("AdExtension " + this._numExtenstionsInitComplete + "/" + this._totalExtensionsToInit + " init complete:", a), this._eventManager.dispatch(e.ExtensionInitComplete, [g.eventWithType(h.AdExtensionInitComplete, {
                            id: a.getId()
                        })]), this._numExtenstionsInitComplete >= this._totalExtensionsToInit && this._onAllExtensionsCompleted()
                    }, a._adExtensionInstances = {}, a
                }();
                return k
            }), define("AdProviderEvent", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {}
                    return a.AdSourceRequestError = "AdSourceRequestError", a.Error = "Error", a.Success = "Success", a
                }();
                return c
            }), define("AdSourceRequest", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a(a, b) {
                        this._responses = [], this._adSource = b, this._id = a;
                        var c = b.getErc();
                        null !== c ? this._status = c : this._status = 0, this._totalDuration = 0, this._responses = []
                    }
                    return a.prototype.addResponse = function(a) {
                        this._responses.push(a)
                    }, a.prototype.getAdSource = function() {
                        return this._adSource
                    }, a.prototype.getId = function() {
                        return this._id
                    }, a.prototype.getResponses = function() {
                        return this._responses
                    }, a.prototype.getStatus = function() {
                        return this._status
                    }, a.prototype.getTotalDuration = function() {
                        return this._totalDuration
                    }, a.prototype.increaseTotalDuration = function(a) {
                        this._totalDuration += a
                    }, a.prototype.setStatus = function(a) {
                        this._status = a
                    }, a
                }();
                return c
            }), define("HTTPRequest", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {
                        this.aborted = !1
                    }
                    return a.prototype.setXMLHttpRequest = function(a) {
                        this.requestObject = a
                    }, a.prototype.getReadyState = function() {
                        return this.requestObject.readyState
                    }, a.prototype.abort = function() {
                        this.aborted = !0, this.requestObject.abort()
                    }, a.prototype.isAborted = function() {
                        return this.aborted
                    }, a
                }();
                return c
            }), ! function() {
                "use strict";
                var a = {};
                a.request = function(a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
                    if ("object" != typeof a || !a.url) return null;
                    d = "corserror", e = "error", f = "parsererror", g = "timeout", i = {
                        latency: null,
                        duration: null
                    }, q = a.url, o = "GET", "POST" === a.type && (o = "POST"), j = function(b) {
                        "function" == typeof a.onloadstart && a.onloadstart(b)
                    }, k = function(b) {
                        "function" == typeof a.onprogress && a.onprogress(b)
                    }, l = function(d) {
                        if (void 0 === c.responseText || null === c.responseText) return m(e), c;
                        if (r = d.responseText, "json" === a.dataType) try {
                            r = JSON.parse(d.responseText)
                        } catch (g) {
                            return void m(f, g)
                        }
                        if ("xml" === a.dataType) try {
                            if (r = d.responseXML || null, (!r || !d.responseXML.documentElement) && "string" == typeof d.responseText && d.responseText.length > 0) {
                                if (!window.DOMParser) throw null;
                                try {
                                    r = (new window.DOMParser).parseFromString(d.responseText, "text/xml")
                                } catch (h) {
                                    throw null
                                }
                            }
                            if (r && "parsererror" === r.documentElement.tagName) throw null;
                            if (r && r.getElementsByTagName("parsererror").length > 0) throw null
                        } catch (j) {
                            return void m(f)
                        }
                        b && (b = !1, "function" == typeof a.success && a.success(r, "success", c, i))
                    }, m = function(d, f) {
                        var g = e,
                            h = e;
                        s && (clearTimeout(s), s = void 0), b && (b = !1, "function" == typeof a.error && ("string" == typeof d && (g = d), "object" == typeof f && (h = f.message), a.error(c, g, h, i)))
                    }, b = !0;
                    try {
                        h = document.createElement("a"), h.href = q, n = h.hostname
                    } catch (v) {}
                    if (!window.XMLHttpRequest || "" !== n && window.location.hostname !== n && void 0 === (new window.XMLHttpRequest).withCredentials) {
                        if (!window.XDomainRequest) return window.setTimeout(function() {
                            m(d)
                        }, 0), null;
                        c = new window.XDomainRequest;
                        try {
                            c.open(o, q)
                        } catch (w) {
                            return window.setTimeout(function() {
                                m(e, w)
                            }, 0), c
                        }
                        c.onload = function() {
                            i.duration = Date.now() - p, l(c)
                        }, c.onprogress = function() {
                            i.latency = Date.now() - p
                        }, c.onerror = function(a) {
                            i.duration = Date.now() - p, m(e, a)
                        }, c.ontimeout = function(a) {
                            m(g, a)
                        }, "number" == typeof a.timeout && (c.timeout = a.timeout)
                    } else {
                        c = new window.XMLHttpRequest, c.overrideMimeType && ("json" === a.dataType && c.overrideMimeType("application/json"), "xml" === a.dataType && c.overrideMimeType("text/xml"));
                        try {
                            c.open(o, q, !0)
                        } catch (w) {
                            return window.setTimeout(function() {
                                m(e, w)
                            }, 0), c
                        }
                        if (c.withCredentials = !0, "POST" === o && c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), c.onreadystatechange = function() {
                                return b && (2 === c.readyState && (i.latency = Date.now() - p), 4 === c.readyState) ? (i.duration = Date.now() - p, 200 !== c.status ? void m(e) : void l(c)) : void 0
                            }, c.onloadstart = j, "object" == typeof a.xhrFields)
                            for (u in a.xhrFields) a.xhrFields.hasOwnProperty(u) && (c[u] = a.xhrFields[u]);
                        "number" == typeof a.timeout && (t = a.timeout)
                    }
                    try {
                        c.onprogress = k, "number" == typeof t && (s = setTimeout(function() {
                            m(g)
                        }, t)), p = Date.now(), c.send(a.data)
                    } catch (x) {
                        window.setTimeout(function() {
                            m(e, x)
                        }, 0)
                    }
                    return c
                }, "object" == typeof exports ? module.exports = a : "function" == typeof define && define("Ajax", [], function() {
                    return a
                })
            }(), ! function() {
                function a() {
                    function a() {
                        ! function(a) {
                            function b() {
                                function a(a) {
                                    var b, c, e, f, g, h, j = d.dyn_tree,
                                        k = d.stat_desc.static_tree,
                                        l = d.stat_desc.extra_bits,
                                        m = d.stat_desc.extra_base,
                                        n = d.stat_desc.max_length,
                                        p = 0;
                                    for (f = 0; i >= f; f++) a.bl_count[f] = 0;
                                    for (j[2 * a.heap[a.heap_max] + 1] = 0, b = a.heap_max + 1; o > b; b++) c = a.heap[b], f = j[2 * j[2 * c + 1] + 1] + 1, f > n && (f = n, p++), j[2 * c + 1] = f, c > d.max_code || (a.bl_count[f]++, g = 0, c >= m && (g = l[c - m]), h = j[2 * c], a.opt_len += h * (f + g), k && (a.static_len += h * (k[2 * c + 1] + g)));
                                    if (0 !== p) {
                                        do {
                                            for (f = n - 1; 0 === a.bl_count[f];) f--;
                                            a.bl_count[f]--, a.bl_count[f + 1] += 2, a.bl_count[n]--, p -= 2
                                        } while (p > 0);
                                        for (f = n; 0 !== f; f--)
                                            for (c = a.bl_count[f]; 0 !== c;) e = a.heap[--b], e > d.max_code || (j[2 * e + 1] != f && (a.opt_len += (f - j[2 * e + 1]) * j[2 * e], j[2 * e + 1] = f), c--)
                                    }
                                }

                                function b(a, b) {
                                    var c = 0;
                                    do c |= 1 & a, a >>>= 1, c <<= 1; while (--b > 0);
                                    return c >>> 1
                                }

                                function c(a, c, d) {
                                    var e, f, g, h = [],
                                        j = 0;
                                    for (e = 1; i >= e; e++) h[e] = j = j + d[e - 1] << 1;
                                    for (f = 0; c >= f; f++) g = a[2 * f + 1], 0 !== g && (a[2 * f] = b(h[g]++, g))
                                }
                                var d = this;
                                d.build_tree = function(b) {
                                    var e, f, g, h = d.dyn_tree,
                                        i = d.stat_desc.static_tree,
                                        j = d.stat_desc.elems,
                                        k = -1;
                                    for (b.heap_len = 0, b.heap_max = o, e = 0; j > e; e++) 0 !== h[2 * e] ? (b.heap[++b.heap_len] = k = e, b.depth[e] = 0) : h[2 * e + 1] = 0;
                                    for (; b.heap_len < 2;) g = b.heap[++b.heap_len] = 2 > k ? ++k : 0, h[2 * g] = 1, b.depth[g] = 0, b.opt_len--, i && (b.static_len -= i[2 * g + 1]);
                                    for (d.max_code = k, e = Math.floor(b.heap_len / 2); e >= 1; e--) b.pqdownheap(h, e);
                                    g = j;
                                    do e = b.heap[1], b.heap[1] = b.heap[b.heap_len--], b.pqdownheap(h, 1), f = b.heap[1], b.heap[--b.heap_max] = e, b.heap[--b.heap_max] = f, h[2 * g] = h[2 * e] + h[2 * f], b.depth[g] = Math.max(b.depth[e], b.depth[f]) + 1, h[2 * e + 1] = h[2 * f + 1] = g, b.heap[1] = g++, b.pqdownheap(h, 1); while (b.heap_len >= 2);
                                    b.heap[--b.heap_max] = b.heap[1], a(b), c(h, d.max_code, b.bl_count)
                                }
                            }

                            function c(a, b, c, d, e) {
                                var f = this;
                                f.static_tree = a, f.extra_bits = b, f.extra_base = c, f.elems = d, f.max_length = e
                            }

                            function d(a, b, c, d, e) {
                                var f = this;
                                f.good_length = a, f.max_lazy = b, f.nice_length = c, f.max_chain = d, f.func = e
                            }

                            function e(a, b, c, d) {
                                var e = a[2 * b],
                                    f = a[2 * c];
                                return f > e || e == f && d[b] <= d[c]
                            }

                            function f() {
                                function a() {
                                    var a;
                                    for (Ea = 2 * Aa, Ga[Ia - 1] = 0, a = 0; Ia - 1 > a; a++) Ga[a] = 0;
                                    Va = P[Wa].max_lazy, Ya = P[Wa].good_length, Za = P[Wa].nice_length, Ua = P[Wa].max_chain, Qa = 0, Ma = 0, Sa = 0, Na = Ta = ba - 1, Pa = 0, Ha = 0
                                }

                                function d() {
                                    var a;
                                    for (a = 0; n > a; a++) $a[2 * a] = 0;
                                    for (a = 0; j > a; a++) _a[2 * a] = 0;
                                    for (a = 0; k > a; a++) ab[2 * a] = 0;
                                    $a[2 * p] = 1, bb.opt_len = bb.static_len = 0, hb = jb = 0
                                }

                                function f() {
                                    cb.dyn_tree = $a, cb.stat_desc = c.static_l_desc, db.dyn_tree = _a, db.stat_desc = c.static_d_desc, eb.dyn_tree = ab, eb.stat_desc = c.static_bl_desc, lb = 0, mb = 0, kb = 8, d()
                                }

                                function g(a, b) {
                                    var c, d, e = -1,
                                        f = a[1],
                                        g = 0,
                                        h = 7,
                                        i = 4;
                                    for (0 === f && (h = 138, i = 3), a[2 * (b + 1) + 1] = 65535, c = 0; b >= c; c++) d = f, f = a[2 * (c + 1) + 1], ++g < h && d == f || (i > g ? ab[2 * d] += g : 0 !== d ? (d != e && ab[2 * d]++, ab[2 * r]++) : 10 >= g ? ab[2 * s]++ : ab[2 * t]++, g = 0, e = d, 0 === f ? (h = 138, i = 3) : d == f ? (h = 6, i = 3) : (h = 7, i = 4))
                                }

                                function h() {
                                    var a;
                                    for (g($a, cb.max_code), g(_a, db.max_code), eb.build_tree(bb), a = k - 1; a >= 3 && 0 === ab[2 * b.bl_order[a] + 1]; a--);
                                    return bb.opt_len += 3 * (a + 1) + 5 + 5 + 4, a
                                }

                                function i(a) {
                                    bb.pending_buf[bb.pending++] = a
                                }

                                function l(a) {
                                    i(255 & a), i(a >>> 8 & 255)
                                }

                                function o(a) {
                                    i(a >> 8 & 255), i(255 & a & 255)
                                }

                                function q(a, b) {
                                    var c, d = b;
                                    mb > u - d ? (c = a, lb |= c << mb & 65535, l(lb), lb = c >>> u - mb, mb += d - u) : (lb |= a << mb & 65535, mb += d)
                                }

                                function J(a, b) {
                                    var c = 2 * a;
                                    q(65535 & b[c], 65535 & b[c + 1])
                                }

                                function ea(a, b) {
                                    var c, d, e = -1,
                                        f = a[1],
                                        g = 0,
                                        h = 7,
                                        i = 4;
                                    for (0 === f && (h = 138, i = 3), c = 0; b >= c; c++)
                                        if (d = f, f = a[2 * (c + 1) + 1], !(++g < h && d == f)) {
                                            if (i > g) {
                                                do J(d, ab); while (0 !== --g)
                                            } else 0 !== d ? (d != e && (J(d, ab), g--), J(r, ab), q(g - 3, 2)) : 10 >= g ? (J(s, ab), q(g - 3, 3)) : (J(t, ab), q(g - 11, 7));
                                            g = 0, e = d, 0 === f ? (h = 138, i = 3) : d == f ? (h = 6, i = 3) : (h = 7, i = 4)
                                        }
                                }

                                function fa(a, c, d) {
                                    var e;
                                    for (q(a - 257, 5), q(c - 1, 5), q(d - 4, 4), e = 0; d > e; e++) q(ab[2 * b.bl_order[e] + 1], 3);
                                    ea($a, a - 1), ea(_a, c - 1)
                                }

                                function ga() {
                                    16 == mb ? (l(lb), lb = 0, mb = 0) : mb >= 8 && (i(255 & lb), lb >>>= 8, mb -= 8)
                                }

                                function ha() {
                                    q(_ << 1, 3), J(p, c.static_ltree), ga(), 9 > 1 + kb + 10 - mb && (q(_ << 1, 3), J(p, c.static_ltree), ga()), kb = 7
                                }

                                function ia(a, c) {
                                    var d, e, f;
                                    if (bb.pending_buf[ib + 2 * hb] = a >>> 8 & 255, bb.pending_buf[ib + 2 * hb + 1] = 255 & a, bb.pending_buf[fb + hb] = 255 & c, hb++, 0 === a ? $a[2 * c]++ : (jb++, a--, $a[2 * (b._length_code[c] + m + 1)]++, _a[2 * b.d_code(a)]++), 0 === (8191 & hb) && Wa > 2) {
                                        for (d = 8 * hb, e = Qa - Ma, f = 0; j > f; f++) d += _a[2 * f] * (5 + b.extra_dbits[f]);
                                        if (d >>>= 3, jb < Math.floor(hb / 2) && d < Math.floor(e / 2)) return !0
                                    }
                                    return hb == gb - 1
                                }

                                function ja(a, c) {
                                    var d, e, f, g, h = 0;
                                    if (0 !== hb)
                                        do d = bb.pending_buf[ib + 2 * h] << 8 & 65280 | 255 & bb.pending_buf[ib + 2 * h + 1], e = 255 & bb.pending_buf[fb + h], h++, 0 === d ? J(e, a) : (f = b._length_code[e], J(f + m + 1, a), g = b.extra_lbits[f], 0 !== g && (e -= b.base_length[f], q(e, g)), d--, f = b.d_code(d), J(f, c), g = b.extra_dbits[f], 0 !== g && (d -= b.base_dist[f], q(d, g))); while (hb > h);
                                    J(p, a), kb = a[2 * p + 1]
                                }

                                function ka() {
                                    mb > 8 ? l(lb) : mb > 0 && i(255 & lb), lb = 0, mb = 0
                                }

                                function la(a, b, c) {
                                    ka(), kb = 8, c && (l(b), l(~b)), bb.pending_buf.set(Da.subarray(a, a + b), bb.pending), bb.pending += b
                                }

                                function ma(a, b, c) {
                                    q(($ << 1) + (c ? 1 : 0), 3), la(a, b, !0)
                                }

                                function na(a, b, e) {
                                    var f, g, i = 0;
                                    Wa > 0 ? (cb.build_tree(bb), db.build_tree(bb), i = h(), f = bb.opt_len + 3 + 7 >>> 3, g = bb.static_len + 3 + 7 >>> 3, f >= g && (f = g)) : f = g = b + 5, f >= b + 4 && -1 != a ? ma(a, b, e) : g == f ? (q((_ << 1) + (e ? 1 : 0), 3), ja(c.static_ltree, c.static_dtree)) : (q((aa << 1) + (e ? 1 : 0), 3), fa(cb.max_code + 1, db.max_code + 1, i + 1), ja($a, _a)), d(), e && ka()
                                }

                                function oa(a) {
                                    na(Ma >= 0 ? Ma : -1, Qa - Ma, a), Ma = Qa, va.flush_pending()
                                }

                                function pa() {
                                    var a, b, c, d;
                                    do {
                                        if (d = Ea - Sa - Qa, 0 === d && 0 === Qa && 0 === Sa) d = Aa;
                                        else if (-1 == d) d--;
                                        else if (Qa >= Aa + Aa - da) {
                                            Da.set(Da.subarray(Aa, Aa + Aa), 0), Ra -= Aa, Qa -= Aa, Ma -= Aa, a = Ia, c = a;
                                            do b = 65535 & Ga[--c], Ga[c] = b >= Aa ? b - Aa : 0; while (0 !== --a);
                                            a = Aa, c = a;
                                            do b = 65535 & Fa[--c], Fa[c] = b >= Aa ? b - Aa : 0; while (0 !== --a);
                                            d += Aa
                                        }
                                        if (0 === va.avail_in) return;
                                        a = va.read_buf(Da, Qa + Sa, d), Sa += a, Sa >= ba && (Ha = 255 & Da[Qa], Ha = (Ha << La ^ 255 & Da[Qa + 1]) & Ka)
                                    } while (da > Sa && 0 !== va.avail_in)
                                }

                                function qa(a) {
                                    var b, c = 65535;
                                    for (c > xa - 5 && (c = xa - 5);;) {
                                        if (1 >= Sa) {
                                            if (pa(), 0 === Sa && a == z) return R;
                                            if (0 === Sa) break
                                        }
                                        if (Qa += Sa, Sa = 0, b = Ma + c, (0 === Qa || Qa >= b) && (Sa = Qa - b, Qa = b, oa(!1), 0 === va.avail_out)) return R;
                                        if (Qa - Ma >= Aa - da && (oa(!1), 0 === va.avail_out)) return R
                                    }
                                    return oa(a == C), 0 === va.avail_out ? a == C ? T : R : a == C ? U : S
                                }

                                function ra(a) {
                                    var b, c, d = Ua,
                                        e = Qa,
                                        f = Ta,
                                        g = Qa > Aa - da ? Qa - (Aa - da) : 0,
                                        h = Za,
                                        i = Ca,
                                        j = Qa + ca,
                                        k = Da[e + f - 1],
                                        l = Da[e + f];
                                    Ta >= Ya && (d >>= 2), h > Sa && (h = Sa);
                                    do
                                        if (b = a, Da[b + f] == l && Da[b + f - 1] == k && Da[b] == Da[e] && Da[++b] == Da[e + 1]) {
                                            e += 2, b++;
                                            do; while (Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && Da[++e] == Da[++b] && j > e);
                                            if (c = ca - (j - e), e = j - ca, c > f) {
                                                if (Ra = a, f = c, c >= h) break;
                                                k = Da[e + f - 1], l = Da[e + f]
                                            }
                                        } while ((a = 65535 & Fa[a & i]) > g && 0 !== --d);
                                    return Sa >= f ? f : Sa
                                }

                                function sa(a) {
                                    for (var b, c = 0;;) {
                                        if (da > Sa) {
                                            if (pa(), da > Sa && a == z) return R;
                                            if (0 === Sa) break
                                        }
                                        if (Sa >= ba && (Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, c = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa), 0 !== c && Aa - da >= (Qa - c & 65535) && Xa != x && (Na = ra(c)), Na >= ba)
                                            if (b = ia(Qa - Ra, Na - ba), Sa -= Na, Va >= Na && Sa >= ba) {
                                                Na--;
                                                do Qa++, Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, c = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa; while (0 !== --Na);
                                                Qa++
                                            } else Qa += Na, Na = 0, Ha = 255 & Da[Qa], Ha = (Ha << La ^ 255 & Da[Qa + 1]) & Ka;
                                        else b = ia(0, 255 & Da[Qa]), Sa--, Qa++;
                                        if (b && (oa(!1), 0 === va.avail_out)) return R
                                    }
                                    return oa(a == C), 0 === va.avail_out ? a == C ? T : R : a == C ? U : S
                                }

                                function ta(a) {
                                    for (var b, c, d = 0;;) {
                                        if (da > Sa) {
                                            if (pa(), da > Sa && a == z) return R;
                                            if (0 === Sa) break
                                        }
                                        if (Sa >= ba && (Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, d = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa), Ta = Na, Oa = Ra, Na = ba - 1, 0 !== d && Va > Ta && Aa - da >= (Qa - d & 65535) && (Xa != x && (Na = ra(d)), 5 >= Na && (Xa == w || Na == ba && Qa - Ra > 4096) && (Na = ba - 1)), Ta >= ba && Ta >= Na) {
                                            c = Qa + Sa - ba, b = ia(Qa - 1 - Oa, Ta - ba), Sa -= Ta - 1, Ta -= 2;
                                            do ++Qa <= c && (Ha = (Ha << La ^ 255 & Da[Qa + (ba - 1)]) & Ka, d = 65535 & Ga[Ha], Fa[Qa & Ca] = Ga[Ha], Ga[Ha] = Qa); while (0 !== --Ta);
                                            if (Pa = 0, Na = ba - 1, Qa++, b && (oa(!1), 0 === va.avail_out)) return R
                                        } else if (0 !== Pa) {
                                            if (b = ia(0, 255 & Da[Qa - 1]), b && oa(!1), Qa++, Sa--, 0 === va.avail_out) return R
                                        } else Pa = 1, Qa++, Sa--
                                    }
                                    return 0 !== Pa && (b = ia(0, 255 & Da[Qa - 1]), Pa = 0), oa(a == C), 0 === va.avail_out ? a == C ? T : R : a == C ? U : S
                                }

                                function ua(b) {
                                    return b.total_in = b.total_out = 0, b.msg = null, bb.pending = 0, bb.pending_out = 0, wa = W, za = z, f(), a(), D
                                }
                                var va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, _a, ab, bb = this,
                                    cb = new b,
                                    db = new b,
                                    eb = new b;
                                bb.depth = [];
                                var fb, gb, hb, ib, jb, kb, lb, mb;
                                bb.bl_count = [], bb.heap = [], $a = [], _a = [], ab = [], bb.pqdownheap = function(a, b) {
                                    for (var c = bb.heap, d = c[b], f = b << 1; f <= bb.heap_len && (f < bb.heap_len && e(a, c[f + 1], c[f], bb.depth) && f++, !e(a, d, c[f], bb.depth));) c[b] = c[f], b = f, f <<= 1;
                                    c[b] = d
                                }, bb.deflateInit = function(a, b, c, d, e, f) {
                                    return d || (d = Z), e || (e = L), f || (f = y), a.msg = null, b == v && (b = 6), 1 > e || e > K || d != Z || 9 > c || c > 15 || 0 > b || b > 9 || 0 > f || f > x ? G : (a.dstate = bb, Ba = c, Aa = 1 << Ba, Ca = Aa - 1, Ja = e + 7, Ia = 1 << Ja, Ka = Ia - 1, La = Math.floor((Ja + ba - 1) / ba), Da = new Uint8Array(2 * Aa), Fa = [], Ga = [], gb = 1 << e + 6, bb.pending_buf = new Uint8Array(4 * gb), xa = 4 * gb, ib = Math.floor(gb / 2), fb = 3 * gb, Wa = b, Xa = f, ya = 255 & d, ua(a))
                                }, bb.deflateEnd = function() {
                                    return wa != W && wa != X && wa != Y ? G : (bb.pending_buf = null, Ga = null, Fa = null, Da = null, bb.dstate = null, wa == X ? H : D)
                                }, bb.deflateParams = function(a, b, c) {
                                    var d = D;
                                    return b == v && (b = 6), 0 > b || b > 9 || 0 > c || c > x ? G : (P[Wa].func != P[b].func && 0 !== a.total_in && (d = a.deflate(A)), Wa != b && (Wa = b, Va = P[Wa].max_lazy, Ya = P[Wa].good_length, Za = P[Wa].nice_length, Ua = P[Wa].max_chain), Xa = c, d)
                                }, bb.deflateSetDictionary = function(a, b, c) {
                                    var d, e = c,
                                        f = 0;
                                    if (!b || wa != W) return G;
                                    if (ba > e) return D;
                                    for (e > Aa - da && (e = Aa - da, f = c - e), Da.set(b.subarray(f, f + e), 0), Qa = e, Ma = e, Ha = 255 & Da[0], Ha = (Ha << La ^ 255 & Da[1]) & Ka, d = 0; e - ba >= d; d++) Ha = (Ha << La ^ 255 & Da[d + (ba - 1)]) & Ka, Fa[d & Ca] = Ga[Ha], Ga[Ha] = d;
                                    return D
                                }, bb.deflate = function(a, b) {
                                    var c, d, e, f, g;
                                    if (b > C || 0 > b) return G;
                                    if (!a.next_out || !a.next_in && 0 !== a.avail_in || wa == Y && b != C) return a.msg = Q[F - G], G;
                                    if (0 === a.avail_out) return a.msg = Q[F - I], I;
                                    if (va = a, f = za, za = b, wa == W && (d = Z + (Ba - 8 << 4) << 8, e = (Wa - 1 & 255) >> 1, e > 3 && (e = 3), d |= e << 6, 0 !== Qa && (d |= V), d += 31 - d % 31, wa = X, o(d)), 0 !== bb.pending) {
                                        if (va.flush_pending(), 0 === va.avail_out) return za = -1, D
                                    } else if (0 === va.avail_in && f >= b && b != C) return va.msg = Q[F - I], I;
                                    if (wa == Y && 0 !== va.avail_in) return a.msg = Q[F - I], I;
                                    if (0 !== va.avail_in || 0 !== Sa || b != z && wa != Y) {
                                        switch (g = -1,
                                            P[Wa].func) {
                                            case M:
                                                g = qa(b);
                                                break;
                                            case N:
                                                g = sa(b);
                                                break;
                                            case O:
                                                g = ta(b)
                                        }
                                        if ((g == T || g == U) && (wa = Y), g == R || g == T) return 0 === va.avail_out && (za = -1), D;
                                        if (g == S) {
                                            if (b == A) ha();
                                            else if (ma(0, 0, !1), b == B)
                                                for (c = 0; Ia > c; c++) Ga[c] = 0;
                                            if (va.flush_pending(), 0 === va.avail_out) return za = -1, D
                                        }
                                    }
                                    return b != C ? D : E
                                }
                            }

                            function g() {
                                var a = this;
                                a.next_in_index = 0, a.next_out_index = 0, a.avail_in = 0, a.total_in = 0, a.avail_out = 0, a.total_out = 0
                            }

                            function h(a) {
                                var b = this,
                                    c = new g,
                                    d = 512,
                                    e = z,
                                    f = new Uint8Array(d);
                                "undefined" == typeof a && (a = v), c.deflateInit(a), c.next_out = f, b.append = function(a, b) {
                                    var g, h, i = [],
                                        j = 0,
                                        k = 0,
                                        l = 0;
                                    if (a.length) {
                                        c.next_in_index = 0, c.next_in = a, c.avail_in = a.length;
                                        do {
                                            if (c.next_out_index = 0, c.avail_out = d, g = c.deflate(e), g != D) throw "deflating: " + c.msg;
                                            c.next_out_index && i.push(c.next_out_index == d ? new Uint8Array(f) : new Uint8Array(f.subarray(0, c.next_out_index))), l += c.next_out_index, b && c.next_in_index > 0 && c.next_in_index != j && (b(c.next_in_index), j = c.next_in_index)
                                        } while (c.avail_in > 0 || 0 === c.avail_out);
                                        return h = new Uint8Array(l), i.forEach(function(a) {
                                            h.set(a, k), k += a.length
                                        }), h
                                    }
                                }, b.flush = function() {
                                    var a, b, e = [],
                                        g = 0,
                                        h = 0;
                                    do {
                                        if (c.next_out_index = 0, c.avail_out = d, a = c.deflate(C), a != E && a != D) throw "deflating: " + c.msg;
                                        d - c.avail_out > 0 && e.push(new Uint8Array(f.subarray(0, c.next_out_index))), h += c.next_out_index
                                    } while (c.avail_in > 0 || 0 === c.avail_out);
                                    return c.deflateEnd(), b = new Uint8Array(h), e.forEach(function(a) {
                                        b.set(a, g), g += a.length
                                    }), b
                                }
                            }
                            var i = 15,
                                j = 30,
                                k = 19,
                                l = 29,
                                m = 256,
                                n = m + 1 + l,
                                o = 2 * n + 1,
                                p = 256,
                                q = 7,
                                r = 16,
                                s = 17,
                                t = 18,
                                u = 16,
                                v = -1,
                                w = 1,
                                x = 2,
                                y = 0,
                                z = 0,
                                A = 1,
                                B = 3,
                                C = 4,
                                D = 0,
                                E = 1,
                                F = 2,
                                G = -2,
                                H = -3,
                                I = -5,
                                J = [0, 1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 0, 0, 16, 17, 18, 18, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29];
                            b._length_code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 27, 28], b.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0], b.base_dist = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576], b.d_code = function(a) {
                                return 256 > a ? J[a] : J[256 + (a >>> 7)]
                            }, b.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], b.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], b.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], b.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], c.static_ltree = [12, 8, 140, 8, 76, 8, 204, 8, 44, 8, 172, 8, 108, 8, 236, 8, 28, 8, 156, 8, 92, 8, 220, 8, 60, 8, 188, 8, 124, 8, 252, 8, 2, 8, 130, 8, 66, 8, 194, 8, 34, 8, 162, 8, 98, 8, 226, 8, 18, 8, 146, 8, 82, 8, 210, 8, 50, 8, 178, 8, 114, 8, 242, 8, 10, 8, 138, 8, 74, 8, 202, 8, 42, 8, 170, 8, 106, 8, 234, 8, 26, 8, 154, 8, 90, 8, 218, 8, 58, 8, 186, 8, 122, 8, 250, 8, 6, 8, 134, 8, 70, 8, 198, 8, 38, 8, 166, 8, 102, 8, 230, 8, 22, 8, 150, 8, 86, 8, 214, 8, 54, 8, 182, 8, 118, 8, 246, 8, 14, 8, 142, 8, 78, 8, 206, 8, 46, 8, 174, 8, 110, 8, 238, 8, 30, 8, 158, 8, 94, 8, 222, 8, 62, 8, 190, 8, 126, 8, 254, 8, 1, 8, 129, 8, 65, 8, 193, 8, 33, 8, 161, 8, 97, 8, 225, 8, 17, 8, 145, 8, 81, 8, 209, 8, 49, 8, 177, 8, 113, 8, 241, 8, 9, 8, 137, 8, 73, 8, 201, 8, 41, 8, 169, 8, 105, 8, 233, 8, 25, 8, 153, 8, 89, 8, 217, 8, 57, 8, 185, 8, 121, 8, 249, 8, 5, 8, 133, 8, 69, 8, 197, 8, 37, 8, 165, 8, 101, 8, 229, 8, 21, 8, 149, 8, 85, 8, 213, 8, 53, 8, 181, 8, 117, 8, 245, 8, 13, 8, 141, 8, 77, 8, 205, 8, 45, 8, 173, 8, 109, 8, 237, 8, 29, 8, 157, 8, 93, 8, 221, 8, 61, 8, 189, 8, 125, 8, 253, 8, 19, 9, 275, 9, 147, 9, 403, 9, 83, 9, 339, 9, 211, 9, 467, 9, 51, 9, 307, 9, 179, 9, 435, 9, 115, 9, 371, 9, 243, 9, 499, 9, 11, 9, 267, 9, 139, 9, 395, 9, 75, 9, 331, 9, 203, 9, 459, 9, 43, 9, 299, 9, 171, 9, 427, 9, 107, 9, 363, 9, 235, 9, 491, 9, 27, 9, 283, 9, 155, 9, 411, 9, 91, 9, 347, 9, 219, 9, 475, 9, 59, 9, 315, 9, 187, 9, 443, 9, 123, 9, 379, 9, 251, 9, 507, 9, 7, 9, 263, 9, 135, 9, 391, 9, 71, 9, 327, 9, 199, 9, 455, 9, 39, 9, 295, 9, 167, 9, 423, 9, 103, 9, 359, 9, 231, 9, 487, 9, 23, 9, 279, 9, 151, 9, 407, 9, 87, 9, 343, 9, 215, 9, 471, 9, 55, 9, 311, 9, 183, 9, 439, 9, 119, 9, 375, 9, 247, 9, 503, 9, 15, 9, 271, 9, 143, 9, 399, 9, 79, 9, 335, 9, 207, 9, 463, 9, 47, 9, 303, 9, 175, 9, 431, 9, 111, 9, 367, 9, 239, 9, 495, 9, 31, 9, 287, 9, 159, 9, 415, 9, 95, 9, 351, 9, 223, 9, 479, 9, 63, 9, 319, 9, 191, 9, 447, 9, 127, 9, 383, 9, 255, 9, 511, 9, 0, 7, 64, 7, 32, 7, 96, 7, 16, 7, 80, 7, 48, 7, 112, 7, 8, 7, 72, 7, 40, 7, 104, 7, 24, 7, 88, 7, 56, 7, 120, 7, 4, 7, 68, 7, 36, 7, 100, 7, 20, 7, 84, 7, 52, 7, 116, 7, 3, 8, 131, 8, 67, 8, 195, 8, 35, 8, 163, 8, 99, 8, 227, 8], c.static_dtree = [0, 5, 16, 5, 8, 5, 24, 5, 4, 5, 20, 5, 12, 5, 28, 5, 2, 5, 18, 5, 10, 5, 26, 5, 6, 5, 22, 5, 14, 5, 30, 5, 1, 5, 17, 5, 9, 5, 25, 5, 5, 5, 21, 5, 13, 5, 29, 5, 3, 5, 19, 5, 11, 5, 27, 5, 7, 5, 23, 5], c.static_l_desc = new c(c.static_ltree, b.extra_lbits, m + 1, n, i), c.static_d_desc = new c(c.static_dtree, b.extra_dbits, 0, j, i), c.static_bl_desc = new c(null, b.extra_blbits, 0, k, q);
                            var K = 9,
                                L = 8,
                                M = 0,
                                N = 1,
                                O = 2,
                                P = [new d(0, 0, 0, 0, M), new d(4, 4, 8, 4, N), new d(4, 5, 16, 8, N), new d(4, 6, 32, 32, N), new d(4, 4, 16, 16, O), new d(8, 16, 32, 32, O), new d(8, 16, 128, 128, O), new d(8, 32, 128, 256, O), new d(32, 128, 258, 1024, O), new d(32, 258, 258, 4096, O)],
                                Q = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
                                R = 0,
                                S = 1,
                                T = 2,
                                U = 3,
                                V = 32,
                                W = 42,
                                X = 113,
                                Y = 666,
                                Z = 8,
                                $ = 0,
                                _ = 1,
                                aa = 2,
                                ba = 3,
                                ca = 258,
                                da = ca + ba + 1;
                            g.prototype = {
                                deflateInit: function(a, b) {
                                    var c = this;
                                    return c.dstate = new f, b || (b = i), c.dstate.deflateInit(c, a, b)
                                },
                                deflate: function(a) {
                                    var b = this;
                                    return b.dstate ? b.dstate.deflate(b, a) : G
                                },
                                deflateEnd: function() {
                                    var a = this;
                                    if (!a.dstate) return G;
                                    var b = a.dstate.deflateEnd();
                                    return a.dstate = null, b
                                },
                                deflateParams: function(a, b) {
                                    var c = this;
                                    return c.dstate ? c.dstate.deflateParams(c, a, b) : G
                                },
                                deflateSetDictionary: function(a, b) {
                                    var c = this;
                                    return c.dstate ? c.dstate.deflateSetDictionary(c, a, b) : G
                                },
                                read_buf: function(a, b, c) {
                                    var d = this,
                                        e = d.avail_in;
                                    return e > c && (e = c), 0 === e ? 0 : (d.avail_in -= e, a.set(d.next_in.subarray(d.next_in_index, d.next_in_index + e), b), d.next_in_index += e, d.total_in += e, e)
                                },
                                flush_pending: function() {
                                    var a = this,
                                        b = a.dstate.pending;
                                    b > a.avail_out && (b = a.avail_out), 0 !== b && (a.next_out.set(a.dstate.pending_buf.subarray(a.dstate.pending_out, a.dstate.pending_out + b), a.next_out_index), a.next_out_index += b, a.dstate.pending_out += b, a.total_out += b, a.avail_out -= b, a.dstate.pending -= b, 0 === a.dstate.pending && (a.dstate.pending_out = 0))
                                }
                            };
                            var ea;
                            a.zip ? a.zip.Deflater = h : (ea = new h, a.addEventListener("message", function(b) {
                                var c = b.data;
                                c.init && (ea = new h(c.level), a.postMessage({
                                    oninit: !0
                                })), c.append && a.postMessage({
                                    onappend: !0,
                                    data: ea.append(c.data, function(b) {
                                        a.postMessage({
                                            progress: !0,
                                            current: b
                                        })
                                    })
                                }), c.flush && a.postMessage({
                                    onflush: !0,
                                    data: ea.flush()
                                })
                            }, !1))
                        }(this)
                    }! function(b) {
                        function c() {
                            var a = -1,
                                b = this;
                            b.append = function(c) {
                                var d, e = b.table;
                                for (d = 0; d < c.length; d++) a = a >>> 8 ^ e[255 & (a ^ c[d])]
                            }, b.get = function() {
                                return ~a
                            }
                        }

                        function d(a, b, c) {
                            return a.slice ? a.slice(b, b + c) : a.webkitSlice ? a.webkitSlice(b, b + c) : a.mozSlice ? a.mozSlice(b, b + c) : a.msSlice ? a.msSlice(b, b + c) : void 0
                        }

                        function e() {}

                        function f(a) {
                            function b(b, c) {
                                var f = new Blob([a], {
                                    type: s
                                });
                                d = new g(f), d.init(function() {
                                    e.size = d.size, b()
                                }, c)
                            }

                            function c(a, b, c, e) {
                                d.readUint8Array(a, b, c, e)
                            }
                            var d, e = this;
                            e.size = 0, e.init = b, e.readUint8Array = c
                        }

                        function g(a) {
                            function b(b) {
                                this.size = a.size, b()
                            }

                            function c(b, c, e, f) {
                                var g = new FileReader;
                                g.onload = function(a) {
                                    e(new Uint8Array(a.target.result))
                                }, g.onerror = f, g.readAsArrayBuffer(d(a, b, c))
                            }
                            var e = this;
                            e.size = 0, e.init = b, e.readUint8Array = c
                        }

                        function h() {}

                        function i(a) {
                            function b(b) {
                                e = new Blob([], {
                                    type: a
                                }), b()
                            }

                            function c(b, c) {
                                e = new Blob([e, o ? b : b.buffer], {
                                    type: a
                                }), c()
                            }

                            function d(a) {
                                a(e)
                            }
                            var e, f = this;
                            f.init = b, f.writeUint8Array = c, f.getData = d
                        }

                        function j(a, b, c, d, e, f, g, h, i, j, k) {
                            function l() {
                                a.removeEventListener(t, m, !1), i(p)
                            }

                            function m(a) {
                                var b = a.data,
                                    d = b.data;
                                b.onappend && (p += d.length, c.writeUint8Array(d, function() {
                                    f(!1, d), n()
                                }, k)), b.onflush && (d ? (p += d.length, c.writeUint8Array(d, function() {
                                    f(!1, d), l()
                                }, k)) : l()), b.progress && g && g(o + b.current, e)
                            }

                            function n() {
                                o = s * r, e > o ? b.readUint8Array(d + o, Math.min(r, e - o), function(b) {
                                    q || (q = !0, h && h()), a.postMessage({
                                        append: !0,
                                        data: b
                                    }), s++, f(!0, b)
                                }, j) : a.postMessage({
                                    flush: !0
                                })
                            }
                            var o, p, q, s = 0;
                            p = 0, a.addEventListener(t, m, !1), n()
                        }

                        function k(a, b, c, d, e, f, g, h, i, j, k) {
                            function l() {
                                var s;
                                m = n * r, e > m ? b.readUint8Array(d + m, Math.min(r, e - m), function(b) {
                                    q || (q = !0, h && h()), s = a.append(b, function() {}), p !== !1 && (g && g(d + m + r, e), o += s.length, f(!0, b), c.writeUint8Array(s, function() {
                                        f(!1, s), n++, setTimeout(l, 1)
                                    }, k))
                                }, j) : (s = a.flush(), s ? (o += s.length, c.writeUint8Array(s, function() {
                                    f(!1, s), i(o)
                                }, k)) : i(o))
                            }
                            var m, n = 0,
                                o = 0,
                                p = !0,
                                q = !1;
                            return l(), {
                                terminate: function() {
                                    p = !1
                                }
                            }
                        }

                        function l(d, e, f, g, h, i, l, m) {
                            function n(a, b) {
                                a && s.append(b)
                            }

                            function o(a) {
                                g(a, s.get()), URL.revokeObjectURL(r)
                            }

                            function p() {
                                q.removeEventListener(t, p, !1), j(q, d, e, 0, d.size, n, h, i, o, l, m)
                            }
                            var q, r, s = new c;
                            return b.Deflater.useWebWorkers ? (r = URL.createObjectURL(new Blob(["(", a.toString(), ")()"], {
                                type: "application/javascript"
                            })), q = new Worker(r), q.addEventListener(t, p, !1), q.postMessage({
                                init: !0,
                                level: f
                            })) : q = k(new b.zip.Deflater, d, e, 0, d.size, n, h, i, o, l, m), q
                        }

                        function m(a, b, d, e, f, g, h, i, j, k) {
                            function l() {
                                var c = m * r;
                                e > c ? a.readUint8Array(d + c, Math.min(r, e - c), function(a) {
                                    o || (o = !0, i && i()), f && n.append(a), h && h(c, e, a), b.writeUint8Array(a, function() {
                                        m++, l()
                                    }, k)
                                }, j) : g(e, n.get())
                            }
                            var m = 0,
                                n = new c,
                                o = !1;
                            l()
                        }

                        function n(a, b) {
                            function c(a, b) {
                                f && f.terminate(), f = null, a && a(b)
                            }

                            function d() {
                                c(b, p)
                            }

                            function e() {
                                c(b, q)
                            }
                            var f;
                            return {
                                deflate: function(b, g, h, i, j) {
                                    function k() {
                                        c(function() {
                                            a.getData(g)
                                        })
                                    }

                                    function n() {
                                        j = j || {}, b ? 0 === j.level ? m(b, a, 0, b.size, !0, k, h, i, e, d) : f = l(b, a, j.level, k, h, i, e, d) : k()
                                    }
                                    b ? b.init(n, e) : n()
                                },
                                cancel: c
                            }
                        }
                        var o, p = "Error while writing file data.",
                            q = "Error while reading file data.",
                            r = 16384,
                            s = "text/plain",
                            t = "message";
                        try {
                            o = 0 === new Blob([new DataView(new ArrayBuffer(0))]).size
                        } catch (u) {}
                        c.prototype.table = function() {
                            var a, b, c, d = [];
                            for (a = 0; 256 > a; a++) {
                                for (c = a, b = 0; 8 > b; b++) 1 & c ? c = c >>> 1 ^ 3988292384 : c >>>= 1;
                                d[a] = c
                            }
                            return d
                        }(), f.prototype = new e, f.prototype.constructor = f, g.prototype = new e, g.prototype.constructor = g, h.prototype.getData = function(a) {
                            a(this.data)
                        }, i.prototype = new h, i.prototype.constructor = i, b.zip = {}, b.Deflater = function() {}, b.Deflater.prototype = {
                            deflateText: function(a, b, c, d, e, g) {
                                var h = new i("application/octet-stream"),
                                    j = this;
                                h.init(function() {
                                    j.deflateWriter = n(h, c, !1);
                                    var i = new f(a);
                                    j.deflateWriter.deflate(i, b, d, e, g)
                                })
                            },
                            cancel: function() {
                                this.deflateWriter && (this.deflateWriter.cancel(), delete this.deflateWriter)
                            }
                        };
                        var v = !1;
                        try {
                            new Worker(URL.createObjectURL(new Blob(["//web.archive.org/web/20170109092628/http://test"], {
                                type: "application/javascript"
                            }))), v = !0
                        } catch (w) {}
                        b.Deflater.useWebWorkers = v
                    }(this);
                    var b = !1;
                    try {
                        new Worker(URL.createObjectURL(new Blob(["//web.archive.org/web/20170109092628/http://test"], {
                            type: "application/javascript"
                        }))), b = !0
                    } catch (c) {}
                    b || a.call(this)
                }
                var b = new a;
                "undefined" != typeof exports ? module.exports = b.Deflater : "undefined" != typeof define && define("Deflater", [], function() {
                    return b.Deflater
                })
            }(), define("HTTP", ["require", "exports", "HTTPRequest", "Ajax", "Logger", "Deflater"], function(a, b, c, d, e, f) {
                var g = function() {
                    function a() {}
                    return a.compressData = function(a, b) {
                        var c, d, e = this,
                            g = new f,
                            h = 0,
                            i = 0,
                            j = 200,
                            k = function() {
                                var d = i * h / 1024,
                                    f = Math.round(d / (Date.now() - c) * 1e4) / 10;
                                e.logger.debug("Compression performance after " + j + "ms: " + d + "KB compressed (" + f + "KB/sec)"), 0 === d && (g.cancel(), e.logger.debug("Cancelling POST compression due to low performance"), b(a, !1))
                            },
                            l = function() {
                                d = setTimeout(k, j), c = Date.now()
                            },
                            m = function(a, b) {
                                0 === h && (h = a), i += 1
                            },
                            n = function(f) {
                                var g = Date.now() - c;
                                d && (clearTimeout(d), d = null), e.logger.debug("Compressed request data in " + g + "ms, " + Math.round(f.size / 10.24) / 100 + "KB / " + Math.round(a.length / 10.24) / 100 + "KB (" + Math.round(f.size / a.length * 100) + "% of original):"), b(f, !0)
                            },
                            o = function(c) {
                                d && (clearTimeout(d), d = null), b(a, !1)
                            },
                            p = {};
                        try {
                            g.deflateText(a, n, o, m, l, p)
                        } catch (q) {
                            o()
                        }
                    }, a.request = function(a) {
                        var b = this,
                            e = new c,
                            f = {
                                url: a.url,
                                type: a.type,
                                data: a.data,
                                timeout: "number" == typeof a.timeout ? 1e3 * a.timeout : void 0,
                                xhrFields: a.xhrFields,
                                onloadstart: a.onloadstart,
                                onprogress: a.onprogress,
                                dataType: a.dataType,
                                success: function(c, d, e, f) {
                                    var g = (f.latency / 1e3).toFixed(1),
                                        h = (f.duration / 1e3).toFixed(1);
                                    b.logger.log("HTTP complete, status=" + e.status + ", latency=" + g + "s, duration=" + h + "s, url=" + a.url), a.success && a.success(c, d, e, f)
                                },
                                error: function(c, d, f, g) {
                                    var h = "unknown";
                                    c.readyState >= 4 && (h = c.status.toString()), e.isAborted() || b.logger.error("HTTP error, status=" + h + ", type=" + d + ", message=" + f + ", url=" + a.url), a.error && a.error(c, d, f, g)
                                }
                            };
                        return this.logger.log("HTTP load, timeout=" + a.timeout + " url=" + a.url), e.setXMLHttpRequest(d.request(f)), e
                    }, a.logger = new e("HTTP"), a
                }();
                return g
            }), define("HTTPRequestQueue", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a() {
                        this.requestQueue = []
                    }
                    return a.prototype.addRequest = function(a) {
                        var b = this.requestQueue.length;
                        return this.requestQueue.push(a), b
                    }, a.prototype.removeRequest = function(b) {
                        var c = this.requestQueue[b];
                        a.abortRequest(c), this.requestQueue.slice(b, 1)
                    }, a.prototype.removeAllRequests = function() {
                        this.requestQueue.forEach(function(b) {
                            a.abortRequest(b)
                        }), this.requestQueue = []
                    }, a.abortRequest = function(a) {
                        a && (a.getReadyState() > 1 || a.getReadyState() < 4) && a.abort()
                    }, a
                }();
                return c
            }), define("LiveRailResponse", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a(b) {
                        this._contentType = b || a.TYPE_UNKNOWN
                    }
                    return a.prototype.getContentType = function() {
                        return this._contentType
                    }, a.prototype.getVersion = function() {
                        return this._version
                    }, a.prototype.setVersion = function(a) {
                        this._version || (this._version = a)
                    }, a.TYPE_UNKNOWN = null, a.TYPE_SOURCES = "sources", a.TYPE_ADS = "ads", a.TYPE_ERROR = "error", a
                }();
                return c
            }), define("AdAsset", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a(a, b, c, d, e) {
                        this.mimeType = d, this.kbps = e, this.width = a, this.height = b, this.url = c
                    }
                    return a.prototype.getMimeType = function() {
                        return this.mimeType
                    }, a.prototype.getKbps = function() {
                        return this.kbps
                    }, a.prototype.getWidth = function() {
                        return this.width
                    }, a.prototype.getHeight = function() {
                        return this.height
                    }, a.prototype.getUrl = function() {
                        return this.url
                    }, a.prototype.toString = function() {
                        return "kbps=" + this.kbps + " width=" + this.width + " height=" + this.height + " mime=" + this.mimeType + " url=" + this.url
                    }, a.prototype.requiresFlash = function() {
                        return "video/x-flv" === this.mimeType || "application/x-shockwave-flash" === this.mimeType
                    }, a
                }();
                return c
            }), define("AdSlot", ["require", "exports", "AdCandidate", "Tracker"], function(a, b, c, d) {
                var e = function() {
                    function a(a, b) {
                        this._adCandidateIndex = -1, this._adCandidates = [], this._impressionOccurred = !1, this._rule = b, this._trackers = {}, this._type = a
                    }
                    return a.prototype.addAdCandidate = function(a) {
                        a && this._adCandidates.push(a)
                    }, a.prototype.addTracker = function(a) {
                        if (a) {
                            var b = d.formTrackerKey(a.getType(), a.getValue());
                            this._trackers[b] || (this._trackers[b] = []), this._trackers[b].push(a)
                        }
                    }, a.prototype.getAdCandidateCount = function() {
                        return this._adCandidates.length
                    }, a.prototype.getAdCandidates = function() {
                        return this._adCandidates
                    }, a.prototype.getNextAdCandidate = function() {
                        var a = null;
                        return this._adCandidateIndex + 1 < this._adCandidates.length && (this._adCandidateIndex += 1, a = this._adCandidates[this._adCandidateIndex]), a
                    }, a.prototype.getTrackers = function(a, b) {
                        var c = d.formTrackerKey(a, b);
                        return this._trackers[c] || null
                    }, a.prototype.getUniqueAdapterIds = function() {
                        var a = [],
                            b = {};
                        return this._adCandidates.forEach(function(c) {
                            b[c.adapter] || (a.push(c.adapter), b[c.adapter] = !0)
                        }), a
                    }, a.prototype.hadImpression = function() {
                        return this._impressionOccurred
                    }, a.prototype.registerImpression = function() {
                        var a = this._adCandidates[this._adCandidateIndex];
                        (a.type === c.TYPE_LINEAR || a.type === c.TYPE_OVERLAY) && (this._adCandidates[this._adCandidateIndex].registerImpression(), this._impressionOccurred = !0)
                    }, a.TYPE_LINEAR = "in", a.TYPE_OVERLAY = "ov", a
                }();
                return e
            }), define("AdSource", ["require", "exports"], function(a, b) {
                var c = function() {
                    function a(a) {
                        this._attributes = {}, this._erc = null, this._priorities = [], this._url = a
                    }
                    return a.prototype.addPriority = function(a) {
                        this._priorities.push(a)
                    }, a.prototype.getAttribute = function(a) {
                        return void 0 !== this._attributes[a] ? this._attributes[a] : null
                    }, a.prototype.getAttributes = function() {
                        return this._attributes
                    }, a.prototype.getErc = function() {
                        return this._erc
                    }, a.prototype.getOrderId = function() {
                        return this._attributes[a.AttrName_OrderId] && "0" !== this._attributes[a.AttrName_OrderId] ? this._attributes[a.AttrName_OrderId] : null
                    }, a.prototype.getConnectionId = function() {
                        return this._attributes[a.AttrName_ConnectionId] ? this._attributes[a.AttrName_ConnectionId] : null
                    }, a.prototype.getServedCreativeId = function() {
                        return this._attributes[a.AttrName_ServedCreativeId] ? this._attributes[a.AttrName_ServedCreativeId] : null
                    }, a.prototype.getPriorities = function() {
                        return this._priorities
                    }, a.prototype.getUrl = function() {
                        return this._url
                    }, a.prototype.hasValidUrl = function() {
                        return null !== this._url && this._url.trim().length > 0
                    }, a.prototype.setAttribute = function(a, b) {
                        this._attributes[a] = b
                    }, a.prototype.setErc = function(a) {
                        var b = parseInt(a, 10);
                        isNaN(b) || (this._erc = b)
                    }, a.prototype.setPriorityDepth = function(a) {
                        this._priorityDepth = a
                    }, a.AttrName_ErrorCode = "erc", a.AttrName_OrderId = "oid", a.AttrName_ConnectionId = "cid", a.AttrName_Priority = "asp", a.AttrName_ServedCreativeId = "sc", a
                }();
                return c
            }), define("CompanionAd", ["require", "exports", "Tracker"], function(a, b, c) {
                var d = function() {
                    function a(a, b, c, d) {
                        this.trackers = {}, this.type = a, this.size = b, this.content = c, this.clickUrl = d
                    }
                    return a.prototype.getType = function() {
                        return this.type
                    }, a.prototype.getSize = function() {
                        return this.size
                    }, a.prototype.getWidth = function() {
                        var a = null;
                        if (this.size) {
                            var b = parseInt(this.size.split("x")[0], 10);
                            isNaN(b) || (a = b)
                        }
                        return a
                    }, a.prototype.getHeight = function() {
                        var a = null;
                        if (this.size) {
                            var b = parseInt(this.size.split("x")[1], 10);
                            isNaN(b) || (a = b)
                        }
                        return a
                    }, a.prototype.getContent = function() {
                        return this.content
                    }, a.prototype.getClickUrl = function() {
                        return this.clickUrl
                    }, a.prototype.addTracker = function(a) {
                        if (null !== a) {
                            var b = c.formTrackerKey(a.getType(), a.getValue());
                            this.trackers[b] || (this.trackers[b] = []), this.trackers[b].push(a)
                        }
                    }, a.prototype.getTrackers = function(a, b) {
                        var d = c.formTrackerKey(a, b);
                        return this.trackers[d] || null
                    }, a
                }();
                return d
            }),
            function() {
                "use strict";
                var a = {};
                a.parse = function(a, b) {
                    function c(a) {
                        return /^\s*$/.test(a) ? null : a
                    }

                    function d(a, b) {
                        var e, f, g, h, i, j = null,
                            k = 0,
                            l = "",
                            m = !1;
                        if (a.attributes && a.attributes.length > 0)
                            for (j = {}, k = 0; k < a.attributes.length; k += 1) e = a.attributes.item(k), j["@" + e.name] = c(e.value.trim());
                        if (a.childNodes && a.childNodes.length > 0)
                            for (i = 0; i < a.childNodes.length; i += 1) f = a.childNodes.item(i), 4 === f.nodeType ? (0 === l.length && (m = !0, l = " "), l += f.nodeValue, m && l.length > 1 && (m = !1, l = l.substring(1))) : 3 === f.nodeType ? l += f.nodeValue.trim() : 1 !== f.nodeType || f.prefix || (0 === k && (j = {}), g = f.nodeName.toLowerCase(), h = d(f, b), j.hasOwnProperty(g) ? (j[g].constructor !== Array && (j[g] = [j[g]]), j[g].push(h)) : (b[f.nodeName.toLowerCase()] ? j[g] = [h] : j[g] = h, k += 1));
                        return l && (k > 0 ? j.cdata = c(l) : j = c(l)), k > 0 && "function" == typeof Object.freeze && Object.freeze(j), j
                    }
                    return "object" != typeof b && (b = {}), "object" == typeof a ? d(a, b) : null
                }, "object" == typeof exports ? module.exports = a : "function" == typeof define && define("JXONParser", [], function() {
                    return a
                })
            }(), define("LinearCreative", ["require", "exports", "Logger"], function(a, b, c) {
                var d = function() {
                    function a(a, b, d, e) {
                        this.logger = new c("LinearCreative"), this.skipOffset = null, this.skipIsPercent = !1, this.assets = [], this.type = a, this.duration = b, this.skipOffset = d, this.skipIsPercent = e
                    }
                    return a.prototype.getType = function() {
                        return this.type
                    }, a.prototype.getDuration = function() {
                        return this.duration
                    }, a.prototype.getSkipOffset = function() {
                        return this.skipOffset
                    }, a.prototype.getSkipIsPercent = function() {
                        return this.skipIsPercent
                    }, a.prototype.addAdAsset = function(a) {
                        null !== a && this.assets.push(a)
                    }, a.prototype.getAdAsset = function(a, b) {
                        var c = this,
                            d = null,
                            e = {},
                            f = {};
                        return this.assets.forEach(function(b, d) {
                            c.logger.debug("Considering linear asset at index " + d + " (" + b.toString() + ")");
                            var g = e[b.getMimeType()],
                                h = f[b.getMimeType()];
                            (!h || h.getKbps() > b.getKbps()) && (f[b.getMimeType()] = b), b.getKbps() <= a && (!g || b.getKbps() > g.getKbps()) && (e[b.getMimeType()] = b)
                        }), b.every(function(a) {
                            return d = e[a] || f[a], d ? !1 : !0
                        }), this.logger.debug("Selected linear asset: " + d.toString()), d
                    }, a
                }();
                return d
            });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LiveRailResponseSources", ["require", "exports", "LiveRailResponse"], function(a, b, c) {
            var d = function(a) {
                function b() {
                    a.call(this, c.TYPE_SOURCES), this._data = null
                }
                return __extends(b, a), b.prototype.addAdSource = function(a) {
                    this._adSources || (this._adSources = []), this._adSources.push(a)
                }, b.prototype.getAdSources = function() {
                    return this._adSources
                }, b.prototype.getData = function() {
                    return this._data
                }, b.prototype.setData = function(a) {
                    "string" == typeof a && a.trim().length > 0 && (this._data = a)
                }, b
            }(c);
            return d
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LiveRailResponseSlots", ["require", "exports", "LiveRailResponse"], function(a, b, c) {
            var d = function(a) {
                function b() {
                    a.call(this, c.TYPE_ADS), this._adSlots = [], this._adSlotIndex = -1, this._placementDefinition = null, this._setupGeo = "", this._trid = ""
                }
                return __extends(b, a), b.prototype.addAdSlot = function(a) {
                    this._adSlots.push(a)
                }, b.prototype.getAdCandidateCount = function() {
                    var a = 0;
                    return this._adSlots.forEach(function(b) {
                        a += b.getAdCandidateCount()
                    }), a
                }, b.prototype.getAdSlots = function() {
                    return this._adSlots
                }, b.prototype.getNextAdSlot = function() {
                    var a = null;
                    return this._adSlotIndex + 1 < this._adSlots.length && (this._adSlotIndex += 1, a = this._adSlots[this._adSlotIndex]), a
                }, b.prototype.getPlacementDefinition = function() {
                    return this._placementDefinition
                }, b.prototype.getSetupGeo = function() {
                    return this._setupGeo
                }, b.prototype.getTrid = function() {
                    return this._trid
                }, b.prototype.getUniqueAdapterIds = function() {
                    var a = [],
                        b = {};
                    return this._adSlots.forEach(function(c) {
                        c.getUniqueAdapterIds().forEach(function(c) {
                            b[c] || (a.push(c), b[c] = !0)
                        })
                    }), a
                }, b.prototype.setSetupGeo = function(a) {
                    this._setupGeo = a
                }, b.prototype.setPlacementDefinition = function(a) {
                    this._placementDefinition = a
                }, b.prototype.setTrid = function(a) {
                    this._trid = a
                }, b
            }(c);
            return d
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        define("LiveRailResponseError", ["require", "exports", "LiveRailResponse"], function(a, b, c) {
            var d = function(a) {
                function b(b) {
                    a.call(this, c.TYPE_ERROR), this.errorMsg = b
                }
                return __extends(b, a), b
            }(c);
            return d
        }), define("NonLinearCreative", ["require", "exports"], function(a, b) {
            var c = function() {
                function a(a) {
                    this.type = a
                }
                return a.prototype.getAdAsset = function() {
                    return this.asset
                }, a.prototype.setAdAsset = function(a) {
                    this.asset = a
                }, a
            }();
            return c
        }), define("PlacementDefinition", ["require", "exports", "Utils"], function(a, b, c) {
            var d = function() {
                function a(b) {
                    if (this.placementType = 0, this.minViewabilityPercentage = a.DEFAULT_MIN_VIEWABILITY_PERCENTAGE, this.minViewabilityDuration = 0, this.refreshInterval = a.DEFAULT_REFRESH_INTERVAL_SECONDS, this.refreshThreshold = a.DEFAULT_REFRESH_THRESHOLD_SECONDS, this.maxDuration = 0, this.maxPodSlots = 1, this.maxPodDuration = 0, this.allowExpand = !0, this.allowSMS = !0, this.allowTelephone = !0, this.allowWebcal = !0, this.allowResize = !0, this.allowPhoto = !0, this.allowCalendar = !0, this.indexMessage = null, this.countdownMessage = "Advertisement ({COUNTDOWNTIME})", this.clickthroughMessage = "Learn More »", this.skipCountdownMessage = "Skip ad in {COUNTDOWN}", this.skipMessage = "Skip ad »", this.hasServerData = !1, b) {
                        this.hasServerData = !0;
                        var d = c.returnString(b["@type"]);
                        d === a.PLACEMENT_NAME_INSTREAM ? this.placementType = 1 : d === a.PLACEMENT_NAME_OVERLAY && (this.placementType = 2), this.minViewabilityPercentage = c.returnUnsignedInt(b["@min_viewability_percentage"], this.minViewabilityPercentage), this.minViewabilityDuration = c.returnFloat(b["@min_viewability_duration"], this.minViewabilityDuration), this.refreshInterval = c.returnInt(b["@refresh"], this.refreshInterval), this.refreshThreshold = c.returnInt(b["@refresh_threshold"], this.refreshThreshold), this.maxDuration = c.returnFloat(b["@max_duration"], this.maxDuration), this.maxPodSlots = c.returnUnsignedInt(b["@max_pod_slots"], this.maxPodSlots), this.maxPodDuration = c.returnFloat(b["@max_pod_duration"], this.maxPodDuration), this.allowExpand = c.returnBoolean(b["@allow_expand"], this.allowExpand), this.allowSMS = c.returnBoolean(b["@allow_sms"], this.allowSMS), this.allowTelephone = c.returnBoolean(b["@allow_tel"], this.allowTelephone), this.allowWebcal = c.returnBoolean(b["@allow_webcal"], this.allowWebcal), this.allowResize = c.returnBoolean(b["@allow_resize"], this.allowResize), this.allowPhoto = c.returnBoolean(b["@allow_photo"], this.allowPhoto), this.allowCalendar = c.returnBoolean(b["@allow_calendar"], this.allowCalendar), this.indexMessage = c.returnString(b["@index_message"], this.indexMessage), this.countdownMessage = c.returnString(b["@countdown_message"], this.countdownMessage), this.clickthroughMessage = c.returnString(b["@click_through_message"], this.clickthroughMessage), this.skipCountdownMessage = c.returnString(b["@skip_countdown_message"], this.skipCountdownMessage), this.skipMessage = c.returnString(b["@skip_message"], this.skipMessage)
                    }
                }
                return a.placementNameForType = function(b) {
                    switch (b) {
                        case 1:
                            return a.PLACEMENT_NAME_INSTREAM;
                        case 2:
                            return a.PLACEMENT_NAME_OVERLAY;
                        default:
                            return null
                    }
                }, a.prototype.isFromServer = function() {
                    return this.hasServerData
                }, a.PLACEMENT_NAME_INSTREAM = "video-in", a.PLACEMENT_NAME_OVERLAY = "video-ov", a.PLACEMENT_NAME_BANNER = "banner", a.PLACEMENT_NAME_INTERSTITIAL = "interstitial", a.PLACEMENT_NAME_NATIVE = "native", a.DEFAULT_REFRESH_INTERVAL_SECONDS = -1, a.DEFAULT_REFRESH_THRESHOLD_SECONDS = -1, a.DEFAULT_MIN_VIEWABILITY_PERCENTAGE = 1, a
            }();
            return d
        }), define("LiveRailSchemaParser", ["require", "exports", "AdAsset", "AdCandidate", "AdExtensionConfig", "AdSlot", "AdSource", "CompanionAd", "JXONParser", "LinearCreative", "LiveRailResponse", "LiveRailResponseSources", "LiveRailResponseSlots", "LiveRailResponseError", "Logger", "NonLinearCreative", "PlacementDefinition", "Tracker", "Utils"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s) {
            var t = function() {
                function a() {
                    this._logger = new o("LiveRailSchemaParser")
                }
                return a.prototype.parseResponse = function(a) {
                    var b = null;
                    try {
                        var c = i.parse(a, {
                            adslot: !0,
                            ad: !0,
                            companion: !0,
                            param: !0,
                            plugin: !0,
                            source: !0,
                            tracker: !0,
                            url: !0
                        });
                        if (!c) throw "JXONParser failure";
                        this._logger.debug("Parsed LiveRail XML:", c);
                        var d = c.liverail;
                        switch (d["@content"]) {
                            case k.TYPE_SOURCES:
                                b = new l, this._parseDataNode(d, b), this._parseAdSources(d, b);
                                break;
                            case k.TYPE_ADS:
                                b = new m, this._parseAds(d, b);
                                break;
                            case k.TYPE_ERROR:
                                b = new n(d.message);
                                break;
                            default:
                                b = new k
                        }
                    } catch (e) {
                        return this._logger.error("Error parsing LiveRail response:", e), null
                    }
                    return b
                }, a.prototype._parseDataNode = function(a, b) {
                    try {
                        b.setData(a.data)
                    } catch (c) {
                        this._logger.error("Error parsing data node:", c.message)
                    }
                }, a.prototype._parseAdSources = function(a, b) {
                    var c = this;
                    try {
                        a.sources.source.forEach(function(a) {
                            var d = c._parseAdSource(a);
                            null !== d && b.addAdSource(d)
                        })
                    } catch (d) {
                        this._logger.error("Error parsing ad sources:", d.message)
                    }
                }, a.prototype._parseAdSource = function(a) {
                    var b, c, d = null;
                    try {
                        d = new g(a.url[0]);
                        for (var e in a)
                            if (a.hasOwnProperty(e) && "@" === e.substr(0, 1))
                                if (b = e.substr(1), c = a[e], "erc" === b) d.setErc(c);
                                else {
                                    if (d.setAttribute(b, c), "asp" === b && "string" == typeof c) {
                                        var f = c.split(":");
                                        f.forEach(function(a) {
                                            d.addPriority(parseInt(a, 10))
                                        })
                                    }
                                    "dpt" === b && d.setPriorityDepth(parseInt(c, 10) - 1)
                                }
                    } catch (h) {
                        this._logger.error("Error parsing ad source:", h.message)
                    }
                    return d
                }, a.prototype._parseAds = function(a, b) {
                    var c = this;
                    try {
                        if (b.setSetupGeo(a.setup.data.geo), b.setTrid(a.setup.data.trid), a.setup.placement) {
                            var d = new q(a.setup.placement.definition);
                            b.setPlacementDefinition(d)
                        }
                        a.ads && Array.isArray(a.ads.adslot) && a.ads.adslot.forEach(function(a) {
                            var d = c._parseAdSlot(a);
                            null !== d && b.addAdSlot(d)
                        })
                    } catch (e) {
                        this._logger.error("Error parsing ads:", e.message)
                    }
                }, a.prototype._parseAdSlot = function(a) {
                    var b = this,
                        c = null;
                    try {
                        var d = new f(a["@type"], a["@rule"]);
                        a.ad && a.ad.forEach(function(a) {
                            var c = b._parseAdCandidate(a);
                            null !== c && d.addAdCandidate(c)
                        }), a.trackers && a.trackers.tracker && a.trackers.tracker.forEach(function(a) {
                            var c = b._parseTracker(a);
                            null !== c && d.addTracker(c)
                        }), null !== d && (c = d)
                    } catch (e) {
                        this._logger.error("Error parsing ad slot node:", e.message)
                    }
                    return c
                }, a.prototype._parseAdCandidate = function(a) {
                    var b = this,
                        c = null;
                    try {
                        if (a) {
                            c = new d, c.adapter = a["@adapter"], c.advertiserID = a["@aid"], c.server = a["@server"], c.type = a["@type"], c.networkID = a["@nid"], c.connectionID = a["@coid"], c.scenarios = a["@ss"], c.values = a["@nr"], c.orderID = a["@oid"], c.orderLineID = a["@olid"], c.orderOwner = a["@oown"], c.creativeID = a["@cid"] || "", c.uniqueCreativeID = a["@ucid"] || "", a.thirdparty && a.thirdparty.param.forEach(function(a) {
                                c.setThirdPartyData(a["@name"], a.cdata)
                            }), c.textTitle = a.text_title || "", c.textDescription = a.text_description || "", c.textUrl = a.text_url || "", c.clickThruUrl = s.returnString(a.clickthru, "").trim(), c.adChoicesUrl = s.returnString(a.adchoices_url, "").trim();
                            var e = this._parseLinearCreative(a.linear);
                            null !== e && c.setLinearCreative(e);
                            var f = this._parseNonLinearCreative(a.nonlinear);
                            null !== f && c.setNonLinearCreative(f), a.trackers && a.trackers.tracker && a.trackers.tracker.forEach(function(a) {
                                var d = b._parseTracker(a);
                                null !== d && c.addTracker(d)
                            }), a.companions && a.companions.companion && a.companions.companion.forEach(function(a) {
                                var d = b._parseCompanion(a);
                                null !== d && c.addCompanionAd(d)
                            }), a.plugins && a.plugins.plugin && a.plugins.plugin.forEach(function(a) {
                                var d = b._parseAdExtensionConfig(a);
                                null !== d && c.addAdExtensionConfig(d)
                            })
                        }
                    } catch (g) {
                        this._logger.error("Error parsing ad candidate:", g.message)
                    }
                    return c
                }, a.prototype._parseLinearCreative = function(a) {
                    var b = null;
                    if (a) try {
                        b = new j(a["@type"], s.returnFloat(a["@duration"], null), s.returnFloat(a["@skipoffset"], -1), a["@skipoffset"].indexOf("%") > -1), a.url && a.url.forEach(function(a) {
                            var d = new c(s.returnUnsignedInt(a["@width"], null), s.returnUnsignedInt(a["@height"], null), a.cdata, a["@mimetype"], s.returnUnsignedInt(a["@kbps"], null));
                            b.addAdAsset(d)
                        })
                    } catch (d) {
                        this._logger.error("Error parsing linear ad:", d.message)
                    }
                    return b
                }, a.prototype._parseNonLinearCreative = function(a) {
                    var b = null;
                    if (a) try {
                        b = new p(a["@type"]);
                        var d = a.creative,
                            e = new c(d["@width"], d["@height"], d.url);
                        b.setAdAsset(e)
                    } catch (f) {
                        this._logger.error("Error parsing non linear ad:", f.message)
                    }
                    return b
                }, a.prototype._parseCompanion = function(a) {
                    var b = this,
                        c = null;
                    if (a) try {
                        c = new h(a["@type"], a["@size"], a.content, a.clickthru), a.trackers && a.trackers.tracker && a.trackers.tracker.forEach(function(a) {
                            var d = b._parseTracker(a);
                            null !== d && c.addTracker(d)
                        })
                    } catch (d) {
                        this._logger.error("Error parsing companion ad:", d.message);
                    }
                    return c
                }, a.prototype._parseTracker = function(a) {
                    var b = null;
                    try {
                        b = new r(a["@type"], a["@value"]), a.url && a.url.forEach(function(a) {
                            b.addUrl(a)
                        })
                    } catch (c) {
                        this._logger.error("Error parsing tracker:", c.message)
                    }
                    return b
                }, a.prototype._parseAdExtensionConfig = function(a) {
                    var b = null;
                    if (a) try {
                        var c = a["@id"],
                            d = [];
                        a.url && a.url.forEach(function(a) {
                            d.push(a)
                        }), b = new e(c, d)
                    } catch (f) {
                        this._logger.error("Error parsing ad extension:", f.message)
                    }
                    return b
                }, a
            }();
            return t
        }), define("VASTResponseType", ["require", "exports"], function(a, b) {
            var c;
            return function(a) {
                a[a.unknown = 0] = "unknown", a[a.nodata = 1] = "nodata", a[a.empty = 2] = "empty", a[a.inline = 3] = "inline", a[a.wrapper = 4] = "wrapper", a[a.error = 5] = "error"
            }(c || (c = {})), c
        }), define("VASTResponse", ["require", "exports", "VASTResponseType"], function(a, b, c) {
            var d = function() {
                function a(a, b) {
                    if (this.type = c.unknown, this.body = "", this.wrapperUrl = null, this.mediaFileNodeList = null, this.body = b.responseText, null === a || "function" != typeof a.getElementsByTagName) 0 === this.body.trim().length && (this.type = c.nodata);
                    else {
                        var d = a.querySelector("VAST") || a.querySelector("VideoAdServingTemplate");
                        if (d) {
                            var e = d.querySelector("Ad");
                            if (!e) return void(d.hasAttribute("error") ? this.type = c.error : this.type = c.empty);
                            if (e) {
                                var f = e.querySelector("Wrapper");
                                if (f) {
                                    this.type = c.wrapper;
                                    var g = f.getElementsByTagName("VASTAdTagURI")[0] || f.getElementsByTagName("VASTAdTagURL")[0];
                                    return void(g && (this.wrapperUrl = g.textContent))
                                }
                            }
                            this.type = c.inline, this.mediaFileNodeList = e.getElementsByTagName("MediaFile")
                        }
                    }
                }
                return a.prototype.getType = function() {
                    return this.type
                }, a.prototype.getBody = function() {
                    return this.body
                }, a.prototype.getWrapperUrl = function() {
                    return this.wrapperUrl
                }, a.prototype.hasValidWrapperUrl = function() {
                    return null !== this.wrapperUrl && this.wrapperUrl.trim().length > 0
                }, a.prototype.hasValidMediaFileInList = function(a) {
                    var b = !1;
                    if (this.mediaFileNodeList.length > 0)
                        for (var c, d, e = 0; e < this.mediaFileNodeList.length; e += 1)
                            if (d = this.mediaFileNodeList[e].attributes, d && d.type && "string" == typeof d.type.value) {
                                c = d.type.value.toLowerCase();
                                for (var f = 0; f < a.length; f += 1)
                                    if (a[f].toLowerCase() === c) {
                                        b = !0;
                                        break
                                    }
                            } return b
                }, a
            }();
            return d
        }), define("AdProvider", ["require", "exports", "AdProviderEvent", "AdSourceRequest", "EventManager", "HTTP", "HTTPRequestQueue", "LiveRailResponse", "LiveRailSchemaParser", "LogEvent", "LogEventType", "Logger", "Utils", "VASTResponse", "VASTResponseType"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
            var p = function() {
                function a(a) {
                    this._active = !1, this._adParameters = a.getAdParameters(), this._adSourceDataNode = null, this._endpointUrl = this._getAdServerEndpoint(a), this._eventManager = new e(c), this._liverailSchemaParser = new i, this._logger = new l("AdProvider"), this._mimeTypePriorityList = a.mimeTypePriorityList, this._requestQueue = new g, this._logger.debug("Using ad server endpoint:", this._endpointUrl)
                }
                return a.prototype.cancel = function() {
                    this._destroy()
                }, a.prototype.getAd = function(a) {
                    this._active = !0, this._logger.debug("getAd(", a, ")"), this._currentAdRequestParameters = a, this._makeFirstAdRequest()
                }, a.prototype.subscribe = function(a, b, c) {
                    this._eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this._eventManager.unsubscribe(a, b)
                }, a.prototype._destroy = function() {
                    this._active = !1, this._endpointUrl = null, this._requestQueue.removeAllRequests()
                }, a.prototype._getAdServerEndpoint = function(a) {
                    var b = "https:" === a.parentWindow.location.protocol ? "https:" : "http:",
                        c = b + "//web.archive.org/web/20170109092628/http://ad4.liverail.com/";
                    return a.urlPrefix && (c = b + "//web.archive.org/web/20170109092628/http://ad4." + a.urlPrefix + ".liverail.com/"), c
                }, a.prototype._handleFirstAdResponse = function(a, b) {
                    null !== b ? (this._destroy(), this._eventManager.dispatch(c.Error, [b])) : this._parseLiveRailResponse(a, !0)
                }, a.prototype._handleSecondAdResponse = function(a, b) {
                    null !== b ? (this._destroy(), this._eventManager.dispatch(c.Error, [b])) : this._parseLiveRailResponse(a, !1)
                }, a.prototype._makeFirstAdRequest = function() {
                    var a = this;
                    this._logger.log("Making first request to " + this._endpointUrl + " with parameters:", this._currentAdRequestParameters);
                    var b = [];
                    for (var c in this._currentAdRequestParameters) this._currentAdRequestParameters.hasOwnProperty(c) && b.push(c);
                    b.sort(), this._logger.log("Ad request parameters:");
                    for (var d = 0; d < b.length; d += 1) this._logger.log("    " + b[d] + " = " + this._currentAdRequestParameters[b[d]]);
                    var e = m.serialize(this._currentAdRequestParameters);
                    this._requestQueue.addRequest(f.request({
                        url: this._endpointUrl,
                        type: "POST",
                        data: e,
                        dataType: "xml",
                        timeout: this._adParameters.adDeliveryTimeout,
                        success: function(b) {
                            a._active && a._handleFirstAdResponse(b, null)
                        },
                        error: function(b, c, d) {
                            if (a._active) {
                                var e = j.eventWithType(k.AdSourcesRequestFailed, {
                                    status: b.status,
                                    textStatus: c
                                });
                                "timeout" === c && (e = j.eventWithType(k.AdSourcesRequestTimeout)), a._handleFirstAdResponse(null, e)
                            }
                        }
                    }))
                }, a.prototype._makeSecondAdRequest = function(a) {
                    var b = this;
                    this._logger.log("Making second request to " + this._endpointUrl + " with parameters:", a);
                    var c = this._endpointUrl,
                        d = m.serialize(a);
                    f.compressData(d, function(a, e) {
                        var g, h = l.getDebugLevel();
                        e && 3 > h ? (c += "?compressed", g = a) : (b._logger.verbose("Debug level " + h + ", passing uncompressed request data"), g = d), b._requestQueue.addRequest(f.request({
                            url: c,
                            type: "POST",
                            data: g,
                            dataType: "xml",
                            timeout: b._adParameters.adDeliveryTimeout,
                            success: function(a) {
                                b._active && b._handleSecondAdResponse(a, null)
                            },
                            error: function(a, c, d) {
                                if (b._active) {
                                    var e = j.eventWithType(k.AdsRequestFailed);
                                    "timeout" === c && (e = j.eventWithType(k.AdsRequestTimeout)), b._handleSecondAdResponse(null, e)
                                }
                            }
                        }))
                    })
                }, a.prototype._parseLiveRailResponse = function(a, b) {
                    this._logger.debug("Parsing LiveRail XML:", a);
                    var d = this._liverailSchemaParser.parseResponse(a);
                    if (d) {
                        this._logger.debug("Parsed LiveRail " + d.getContentType() + " response:", d);
                        var e = null;
                        switch (d.getContentType()) {
                            case h.TYPE_UNKNOWN:
                                e = j.eventWithType(k.XMLUnknownResponse);
                                break;
                            case h.TYPE_ERROR:
                                var f = d;
                                e = j.eventWithType(k.XMLErrorMessage, {
                                    message: f.errorMsg
                                });
                                break;
                            case h.TYPE_SOURCES:
                                var g = d;
                                if (b) {
                                    if (!(g.getAdSources().length <= 0)) return this._adSourceDataNode = g.getData(), void this._queryAdSources(g.getAdSources());
                                    e = j.eventWithType(k.NoAdSources)
                                } else e = j.eventWithType(k.XMLDuplicateSources);
                                break;
                            case h.TYPE_ADS:
                                var i = d;
                                if (!(i.getAdSlots().length <= 0)) return void this._eventManager.dispatch(c.Success, [d]);
                                e = j.eventWithType(k.NoAdSlots)
                        }
                        e && this._eventManager.dispatch(c.Error, [e])
                    } else this._eventManager.dispatch(c.Error, [j.eventWithType(k.XMLParseFailure)])
                }, a.prototype._prepareSecondAdRequest = function() {
                    var a = {},
                        b = this._currentAdRequestParameters;
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                    null !== this._adSourceDataNode && (a.data = this._adSourceDataNode), a.LR_POSTXML = "true", this._adSourceRequests.forEach(function(b) {
                        var c = b.getAdSource().getAttributes(),
                            d = b.getId();
                        for (var e in c) c.hasOwnProperty(e) && (a[e + d] = c[e] || "");
                        if (a["erc" + d] = b.getStatus().toString(), b.getTotalDuration() > 0 && (a["rtt" + d] = b.getTotalDuration().toString()), b.getAdSource().hasValidUrl() && 0 === b.getStatus()) {
                            var f = b.getResponses(),
                                g = [];
                            f.forEach(function(b, c) {
                                0 === c ? a["response" + d] = b : g.push(b)
                            }), g.length > 0 && (a["subresponse" + d] = g)
                        }
                    }), this._makeSecondAdRequest(a)
                }, a.prototype._queryAdSources = function(a) {
                    var b = this;
                    this._logger.log("Processing " + a.length + " ad sources"), this._adSourceRequests = [], this._adSourceQueryCount = 0, this._registeredAdSourceCount = 0, a.forEach(function(a, c) {
                        b._adSourceRequests[c] = new d(c, a), null !== a.getUrl() && 0 === a.getErc() && (b._adSourceQueryCount += 1, b._queryAdSourceURL(b._adSourceRequests[c]))
                    })
                }, a.prototype._queryAdSourceURL = function(a, b, d) {
                    var e = this;
                    void 0 === b && (b = null), void 0 === d && (d = !0);
                    var g = a.getId(),
                        h = a.getResponses().length,
                        i = null === b ? a.getAdSource().getUrl() : b;
                    this._logger.log("Querying ad source: id=" + g + " wrapper=" + h + " url=" + i);
                    this._requestQueue.addRequest(f.request({
                        url: i,
                        type: "GET",
                        dataType: "xml",
                        timeout: this._adParameters.adRequestTimeout,
                        xhrFields: {
                            withCredentials: d
                        },
                        success: function(b, c, d, f) {
                            if (e._active) {
                                e._logger.verbose("Retrieved VAST response for request id " + g + ":", b);
                                var i = new n(b, d);
                                switch (e._logger.verbose("Parsed VAST response for request id " + g + ":", i), f.duration && a.increaseTotalDuration(f.duration), i.getType()) {
                                    case o.unknown:
                                        e._logger.warn("Ad request id " + g + " completed with unknown status"), a.setStatus(0), a.addResponse(i.getBody());
                                        break;
                                    case o.nodata:
                                        e._logger.debug("Ad source for request id " + g + " responded with no data"), a.setStatus(1);
                                        break;
                                    case o.empty:
                                        e._logger.debug("Ad source for request id " + g + " responded with empty VAST"), a.setStatus(1);
                                        break;
                                    case o.wrapper:
                                        if (i.hasValidWrapperUrl()) {
                                            if (h < e._adParameters.wrapperLimit) return e._logger.debug("Ad source for request id " + g + " responded with wrapper url=" + i.getWrapperUrl()), a.addResponse(i.getBody()), void e._queryAdSourceURL(a, i.getWrapperUrl());
                                            e._logger.debug("Ad request id " + g + " has exceed the wrapper limit of " + e._adParameters.wrapperLimit), a.setStatus(302)
                                        } else e._logger.error("Ad source for request id " + g + " responded with invalid wrapper"), a.setStatus(0), a.addResponse(i.getBody());
                                        break;
                                    case o.inline:
                                        i.hasValidMediaFileInList(e._mimeTypePriorityList) ? (e._logger.log("Ad request id " + g + " completed successfully"), a.setStatus(0), a.addResponse(i.getBody())) : (e._logger.warn("Ad source response for request id " + g + " contains no usable MediaFile nodes"), a.setStatus(200));
                                        break;
                                    case o.error:
                                        e._logger.log("Ad request id " + g + " completed with C2S proxy error"), a.setStatus(0), a.addResponse(i.getBody())
                                }
                                e._registerAdSourceRequest()
                            }
                        },
                        error: function(f, h, j, k) {
                            if (e._active) {
                                if (k.duration && a.increaseTotalDuration(k.duration), d && "error" === h && 0 === f.status) return e._logger.error("Possible CORS error, retrying ad call using withCredentials:false"), void e._queryAdSourceURL(a, b, !1);
                                "timeout" !== h && 204 === f.status ? (e._logger.debug("Ad source for request id " + g + " responded with 204 No Content"), a.setStatus(1)) : (e._logger.error("Error loading ad source:" + h + ", id=" + g + ", ajaxObject=", f, ", url=" + i), "parsererror" === h ? (a.addResponse(f.responseText), a.setStatus(0)) : "timeout" === h ? a.setStatus(301) : a.setStatus(300)), (301 === a.getStatus() || 300 === a.getStatus()) && e._eventManager.dispatch(c.AdSourceRequestError, [a]), e._registerAdSourceRequest()
                            }
                        }
                    }))
                }, a.prototype._registerAdSourceRequest = function() {
                    this._active && (this._registeredAdSourceCount += 1, this._registeredAdSourceCount === this._adSourceQueryCount && this._prepareSecondAdRequest())
                }, a
            }();
            return p
        }), define("Rectangle.adquality", ["require", "exports"], function(a, b) {
            "use strict";

            function c(a, b, c, d) {
                this.x = a || 0, this.y = b || 0, this.width = c || 0, this.height = d || 0
            }
            return a.__markCompiled && a.__markCompiled(), c.RectangleZero = function() {
                return new c(0, 0, 0, 0)
            }, c.RectangleFromClientRect = function(a) {
                return new c(a.left || 0, a.top || 0, a.width || a.right - a.left || 0, a.height || a.bottom - a.top || 0)
            }, c.ClientRectFromRectangle = function(a) {
                return {
                    width: a.width,
                    height: a.height,
                    left: a.x,
                    top: a.y,
                    right: a.x + a.width,
                    bottom: a.y + a.height
                }
            }, c.RectangleFromWindow = function(a) {
                try {
                    var b = void 0,
                        d = void 0,
                        e = a.document.documentElement,
                        f = e.hasOwnProperty ? e.hasOwnProperty("ontouchstart") : !1;
                    return f ? (b = a.innerWidth, d = a.innerHeight) : (b = a.document.documentElement.clientWidth || a.innerWidth || a.document.body.clientWidth, d = a.document.documentElement.clientHeight || a.innerHeight || a.document.body.clientHeight), new c(0, 0, b, d)
                } catch (g) {
                    return null
                }
            }, c.prototype.area = function() {
                return this.width * this.height
            }, c.prototype.getData = function() {
                return {
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: this.height
                }
            }, c.prototype.intersection = function(a) {
                var b = Math.max(this.x, a.x),
                    d = Math.max(this.y, a.y),
                    e = Math.min(this.x + this.width, a.x + a.width),
                    f = Math.min(this.y + this.height, a.y + a.height);
                return e >= b && f >= d ? new c(b, d, e - b, f - d) : null
            }, c.prototype.offset = function(a, b) {
                return new c(this.x + a, this.y + b, this.width, this.height)
            }, c
        }), define("AdQualityMeasurementResult.adquality", ["require", "exports", "Rectangle.adquality"], function(a, b, c) {
            "use strict";

            function d(a, b, c, d) {
                null === a || void 0 === a || isNaN(a) ? this.$AdQualityMeasurementResult3 = null : this.$AdQualityMeasurementResult3 = a, this.$AdQualityMeasurementResult4 = b || null, c === !0 ? this.$AdQualityMeasurementResult2 = c : c === !1 ? (this.$AdQualityMeasurementResult2 = c, this.$AdQualityMeasurementResult3 = 0) : this.$AdQualityMeasurementResult2 = null, this.$AdQualityMeasurementResult1 = d || null
            }
            return a.__markCompiled && a.__markCompiled(), d.unknownResult = function() {
                return new d
            }, d.prototype.appendResult = function(a) {
                null === this.$AdQualityMeasurementResult2 && (this.$AdQualityMeasurementResult2 = a.$AdQualityMeasurementResult2), null === this.$AdQualityMeasurementResult3 && (this.$AdQualityMeasurementResult3 = a.$AdQualityMeasurementResult3), null === this.$AdQualityMeasurementResult4 && (this.$AdQualityMeasurementResult4 = a.$AdQualityMeasurementResult4)
            }, d.prototype.getData = function() {
                var a = null;
                if (this.$AdQualityMeasurementResult1) try {
                    a = this.$AdQualityMeasurementResult1.toString()
                } catch (b) {
                    a = "Unknown error"
                }
                return {
                    error: a,
                    focus: this.$AdQualityMeasurementResult2,
                    viewableRatio: this.$AdQualityMeasurementResult3,
                    visibleRect: this.$AdQualityMeasurementResult4 ? this.$AdQualityMeasurementResult4.getData() : null
                }
            }, d.prototype.getError = function() {
                return this.$AdQualityMeasurementResult1
            }, d.prototype.getFocus = function() {
                return this.$AdQualityMeasurementResult2
            }, d.prototype.getViewableRatio = function() {
                return this.$AdQualityMeasurementResult3
            }, d.prototype.getVisibleRectangle = function() {
                return this.$AdQualityMeasurementResult4
            }, d.prototype.isConclusive = function() {
                return this.$AdQualityMeasurementResult2 === !1 || null !== this.$AdQualityMeasurementResult3
            }, d
        }), define("AdQualityMeasurement.adquality", ["require", "exports", "AdQualityMeasurementResult.adquality"], function(a, b, c) {
            "use strict";

            function d(a, b) {}
            return a.__markCompiled && a.__markCompiled(), d.prototype.destroy = function() {}, d.prototype.getMeasurement = function(a) {
                a(new c)
            }, d
        }), define("AdQualityMeasurementQueue.adquality", ["require", "exports", "AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                this.$AdQualityMeasurementQueue1 = a
            }
            return a.__markCompiled && a.__markCompiled(), e.prototype.destroy = function() {
                this.$AdQualityMeasurementQueue1.forEach(function(a) {
                    a.destroy()
                }), this.$AdQualityMeasurementQueue1 = []
            }, e.prototype.getMeasurement = function(a) {
                this.$AdQualityMeasurementQueue2(0, new d, a)
            }, e.prototype.$AdQualityMeasurementQueue2 = function(a, b, c) {
                if (a < this.$AdQualityMeasurementQueue1.length) {
                    var d = this.$AdQualityMeasurementQueue1[a];
                    d.getMeasurement(function(d) {
                        b.appendResult(d), b.isConclusive() ? this.$AdQualityMeasurementQueue3(b, c) : this.$AdQualityMeasurementQueue2(a + 1, b, c)
                    }.bind(this))
                } else this.$AdQualityMeasurementQueue3(b, c)
            }, e.prototype.$AdQualityMeasurementQueue3 = function(a, b) {
                b(a)
            }, e
        }), define("AdQualityRule.adquality", ["require", "exports"], function(a, b) {
            "use strict";

            function c(a, b, c, d, e) {
                this.continuous = d, this.viewableSeconds = c, "function" == typeof e && (this.endCallback = e), this.startTimeSeconds = b, this.viewableRatio = a
            }
            return a.__markCompiled && a.__markCompiled(), c
        }), define("AdQualityStatistics.adquality", ["require", "exports", "AdQualityMeasurementResult.adquality"], function(a, b, c) {
            "use strict";

            function d(a) {
                this.$AdQualityStatistics1 = null, this.$AdQualityStatistics2 = null, this.$AdQualityStatistics3 = 0, this.$AdQualityStatistics4 = 0, this.$AdQualityStatistics5 = null, this.$AdQualityStatistics6 = null, this.$AdQualityStatistics7 = 0, this.$AdQualityStatistics8 = 0, this.$AdQualityStatistics9 = a
            }
            return a.__markCompiled && a.__markCompiled(), d.prototype.getData = function() {
                return {
                    avgViewableRatio: this.$AdQualityStatistics1,
                    curViewableRatio: this.$AdQualityStatistics2,
                    maxViewableRatio: this.$AdQualityStatistics5,
                    measurementCount: this.$AdQualityStatistics3,
                    measurementSeconds: this.$AdQualityStatistics4,
                    minViewableRatio: this.$AdQualityStatistics6,
                    viewableSeconds: this.$AdQualityStatistics8
                }
            }, d.prototype.registerProgress = function(a, b) {
                this.$AdQualityStatistics3++, this.$AdQualityStatistics4 += a;
                var c = b.getViewableRatio();
                null !== c && void 0 !== c && (this.$AdQualityStatistics2 = c, this.$AdQualityStatistics7 += c, this.$AdQualityStatistics1 = this.$AdQualityStatistics7 / this.$AdQualityStatistics3, (null === this.$AdQualityStatistics6 || void 0 === this.$AdQualityStatistics6 || this.$AdQualityStatistics6 > c) && (this.$AdQualityStatistics6 = c), (null === this.$AdQualityStatistics5 || void 0 === this.$AdQualityStatistics5 || this.$AdQualityStatistics5 < c) && (this.$AdQualityStatistics5 = c), c >= this.$AdQualityStatistics9 && (this.$AdQualityStatistics8 += a))
            }, d
        }), define("AdQualityTest.adquality", ["require", "exports", "AdQualityMeasurementResult.adquality", "AdQualityRule.adquality", "AdQualityStatistics.adquality"], function(a, b, c, d, e) {
            "use strict";

            function f(a) {
                this.$AdQualityTest1 = !1, this.$AdQualityTest3 = !1, this.$AdQualityTest4 = a, this.$AdQualityTest5 = new e(a.viewableRatio), this.$AdQualityTest6 = new e(a.viewableRatio)
            }
            return a.__markCompiled && a.__markCompiled(), f.prototype.registerEnd = function() {
                this.$AdQualityTest2 || this.$AdQualityTest7()
            }, f.prototype.registerProgress = function(a, b) {
                if (!this.$AdQualityTest2) {
                    this.$AdQualityTest5.registerProgress(a, b), this.$AdQualityTest6.registerProgress(a, b);
                    var c = this.$AdQualityTest6.getData().viewableSeconds,
                        d = b.getViewableRatio();
                    return this.$AdQualityTest4.continuous && (null === d || void 0 === d || d < this.$AdQualityTest4.viewableRatio) && (this.$AdQualityTest6 = new e(this.$AdQualityTest4.viewableRatio)), this.$AdQualityTest4.startTimeSeconds >= 0 && this.$AdQualityTest5.getData().measurementSeconds > this.$AdQualityTest4.startTimeSeconds && 0 === c ? void this.$AdQualityTest8() : void(c >= this.$AdQualityTest4.viewableSeconds && this.$AdQualityTest9())
                }
            }, f.prototype.$AdQualityTest8 = function() {
                this.$AdQualityTest1 = !0, this.$AdQualityTest7()
            }, f.prototype.$AdQualityTest7 = function() {
                this.$AdQualityTest2 = !0;
                var a = this.$AdQualityTest3 ? this.$AdQualityTest6 : this.$AdQualityTest5,
                    b = this.$AdQualityTest4.endCallback;
                b && b({
                    results: {
                        complete: this.$AdQualityTest1,
                        passed: this.$AdQualityTest3
                    },
                    statistics: a.getData()
                })
            }, f.prototype.$AdQualityTest9 = function() {
                this.$AdQualityTest3 = !0, this.$AdQualityTest8()
            }, f
        }), define("HTMLElementFrameContextResult.adquality", ["require", "exports", "Rectangle.adquality"], function(a, b, c) {
            "use strict";

            function d() {
                this.crossDomainWindowCount = 0, this.error = null, this.focus = null, this.locations = [], this.offsetHeight = null, this.offsetRect = null, this.offsetWidth = null, this.pageURL = null, this.parentWindow = null, this.topLocationURL = null, this.topReferrerURL = null, this.topURL = null, this.topWindow = null, this.topWindowLevel = 0, this.type = null, this.viewportRect = null, this.windowCount = 0, this.domainDetectionMethod = d.DOMAIN_DETECTION_UNKNOWN, this.pageDomain = null
            }
            return a.__markCompiled && a.__markCompiled(), d.TYPE_NONE = 0, d.TYPE_SAME_ORIGIN = 1, d.TYPE_CROSS_ORIGIN = 2, d.DOMAIN_DETECTION_UNKNOWN = 0, d.DOMAIN_DETECTION_LOCATION = 1, d.DOMAIN_DETECTION_REFERRER = 2, d.DOMAIN_DETECTION_ANCESTOR_ORIGINS = 3, d.prototype.getData = function() {
                var a = null;
                if (this.error) try {
                    a = this.error.toString()
                } catch (b) {
                    a = "Unknown error"
                }
                return {
                    crossDomainWindowCount: this.crossDomainWindowCount,
                    error: a,
                    focus: this.focus,
                    locations: this.locations,
                    offsetHeight: this.offsetHeight,
                    offsetRect: this.offsetRect ? this.offsetRect.getData() : null,
                    offsetWidth: this.offsetWidth,
                    pageDomain: this.pageDomain,
                    pageURL: this.pageURL,
                    domainDetectionMethod: this.domainDetectionMethod,
                    topWindowLevel: this.topWindowLevel,
                    topLocationURL: this.topLocationURL,
                    topReferrerURL: this.topReferrerURL,
                    topURL: this.topURL,
                    type: this.type,
                    viewportRect: this.viewportRect ? this.viewportRect.getData() : null,
                    windowCount: this.windowCount
                }
            }, d
        }), define("ManagedError", ["require", "exports"], function(a, b) {
            function c(a, b) {
                Error.prototype.constructor.call(this, a), this.message = a, this.innerError = b
            }
            return a.__markCompiled && a.__markCompiled(), c.prototype = new Error, c.prototype.constructor = c, c
        }), define("AssertionError", ["require", "exports", "ManagedError"], function(a, b, c) {
            function d(a) {
                c.prototype.constructor.apply(this, arguments)
            }
            return a.__markCompiled && a.__markCompiled(), d.prototype = new c, d.prototype.constructor = d, d
        }), define("sprintf", ["require", "exports"], function(a, b) {
            function c(a) {
                for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1; b > d; d++) c[d - 1] = arguments[d];
                var e = 0;
                return a.replace(/%s/g, function(a) {
                    return c[e++]
                })
            }
            return a.__markCompiled && a.__markCompiled(), c
        }), define("Assert", ["require", "exports", "AssertionError", "sprintf"], function(a, b, c, d) {
            function e(a, b) {
                if ("boolean" != typeof a || !a) throw new c(b);
                return a
            }

            function f(a, b, c) {
                var f;
                if (void 0 === b) f = "undefined";
                else if (null === b) f = "null";
                else {
                    var g = Object.prototype.toString.call(b);
                    f = /\s(\w*)/.exec(g)[1].toLowerCase()
                }
                return e(-1 !== a.indexOf(f), c || d("Expression is of type %s, not %s", f, a)), b
            }

            function g(a, b, c) {
                return e(b instanceof a, c || "Expression not instance of type"), b
            }

            function h(a, b) {
                i["is" + a] = b, i["maybe" + a] = function(a, c) {
                    null != a && b(a, c)
                }
            }
            a.__markCompiled && a.__markCompiled();
            var i = {
                isInstanceOf: g,
                isTrue: e,
                isTruthy: function(a, b) {
                    return e(!!a, b)
                },
                type: f,
                define: function(a, b) {
                    a = a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase(), h(a, function(a, c) {
                        e(b(a), c)
                    })
                }
            };
            return ["Array", "Boolean", "Date", "Function", "Null", "Number", "Object", "Regexp", "String", "Undefined"].forEach(function(a) {
                h(a, f.bind(null, a.toLowerCase()))
            }), i
        }), define("QueryString", ["require", "exports"], function(a, b) {
            function c(a) {
                var b = [];
                return Object.keys(a).sort().forEach(function(c) {
                    var d = a[c];
                    if ("undefined" != typeof d) return null === d ? void b.push(c) : void b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
                }), b.join("&")
            }

            function d(a, b) {
                var c = {};
                if ("" === a) return c;
                for (var d = a.split("&"), e = 0; e < d.length; e++) {
                    var f = d[e].split("=", 2),
                        g = decodeURIComponent(f[0]);
                    if (b && c.hasOwnProperty(g)) throw new URIError("Duplicate key: " + g);
                    c[g] = 2 === f.length ? decodeURIComponent(f[1]) : null
                }
                return c
            }

            function e(a, b) {
                return a + (-1 !== a.indexOf("?") ? "&" : "?") + ("string" == typeof b ? b : f.encode(b))
            }
            a.__markCompiled && a.__markCompiled();
            var f = {
                encode: c,
                decode: d,
                appendToUrl: e
            };
            return f
        }), define("URIRFC3986", ["require", "exports"], function(a, b) {
            a.__markCompiled && a.__markCompiled();
            var c = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?"),
                d = {
                    parse: function(a) {
                        if ("" === a.trim()) return null;
                        var b = a.match(c),
                            d = {};
                        return d.uri = b[0] ? b[0] : null, d.scheme = b[1] ? b[1].substr(0, b[1].length - 1) : null, d.authority = b[2] ? b[2].substr(2) : null, d.userinfo = b[3] ? b[3].substr(0, b[3].length - 1) : null, d.host = b[2] ? b[4] : null, d.port = b[5] && b[5].substr(1) ? parseInt(b[5].substr(1), 10) : null, d.path = b[6] ? b[6] : null, d.query = b[7] ? b[7].substr(1) : null, d.fragment = b[8] ? b[8].substr(1) : null, d.isGenericURI = null === d.authority && !!d.scheme, d
                    }
                };
            return d
        }), define("createObjectFrom", ["require", "exports"], function(a, b) {
            function c(a, b) {
                var c = {},
                    d = Array.isArray(b);
                void 0 === b && (b = !0);
                for (var e = a.length - 1; e >= 0; e--) c[a[e]] = d ? b[e] : b;
                return c
            }
            return a.__markCompiled && a.__markCompiled(), c
        }), define("URISchemes", ["require", "exports", "createObjectFrom"], function(a, b, c) {
            a.__markCompiled && a.__markCompiled();
            var d = c(["blob", "fb", "fb-ama", "fb-messenger", "fb-page-messages", "fbcf", "fbconnect", "fbmobilehome", "fbrpc", "file", "ftp", "http", "https", "mailto", "ms-app", "intent", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments"]),
                e = {
                    isAllowed: function(a) {
                        return a ? d.hasOwnProperty(a.toLowerCase()) : !0
                    }
                };
            return e
        }), define("eprintf", ["require", "exports"], function(a, b) {
            a.__markCompiled && a.__markCompiled();
            var c = function(a) {
                var b = Array.prototype.slice.call(arguments).map(function(a) {
                        return String(a)
                    }),
                    d = a.split("%s").length - 1;
                if (d !== b.length - 1) return c("eprintf args number mismatch: %s", JSON.stringify(b));
                var e = 1;
                return a.replace(/%s/g, function(a) {
                    return String(b[e++])
                })
            };
            return c
        }), define("ex", ["require", "exports", "eprintf"], function(a, b, c) {
            a.__markCompiled && a.__markCompiled();
            var d = function() {
                for (var a = arguments.length, b = Array(a), c = 0; a > c; c++) b[c] = arguments[c];
                return b = b.map(function(a) {
                    return String(a)
                }), b[0].split("%s").length !== b.length ? d("ex args number mismatch: %s", JSON.stringify(b)) : d._prefix + JSON.stringify(b) + d._suffix
            };
            return d._prefix = "<![EX[", d._suffix = "]]>", d
        }), define("invariant", ["require", "exports", "ex", "sprintf"], function(a, b, c, d) {
            "use strict";

            function e(a, b) {
                if (!a) {
                    var c = void 0;
                    if (void 0 === b) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        for (var d = [b], e = 2, g = arguments.length; g > e; e++) d.push(arguments[e]);
                        c = new Error(f.apply(null, d)), c.name = "Invariant Violation", c.messageWithParams = d
                    }
                    throw c.framesToPop = 1, c
                }
            }
            a.__markCompiled && a.__markCompiled();
            var f = c;
            return e
        }), define("URIBase", ["require", "exports", "URIRFC3986", "URISchemes", "ex", "invariant"], function(a, b, c, d, e, f) {
            function g(a, b, f, g) {
                if (!b) return !0;
                if (b instanceof h) return a.setProtocol(b.getProtocol()), a.setDomain(b.getDomain()), a.setPort(b.getPort()), a.setPath(b.getPath()), a.setQueryData(g.deserialize(g.serialize(b.getQueryData()))), a.setFragment(b.getFragment()), a.setForceFragmentSeparator(b.getForceFragmentSeparator()), !0;
                b = b.toString().trim();
                var k = c.parse(b) || {};
                if (!f && !d.isAllowed(k.scheme)) return !1;
                if (a.setProtocol(k.scheme || ""), !f && i.test(k.host)) return !1;
                if (a.setDomain(k.host || ""), a.setPort(k.port || ""), a.setPath(k.path || ""), f) a.setQueryData(g.deserialize(k.query) || {});
                else try {
                    a.setQueryData(g.deserialize(k.query) || {})
                } catch (l) {
                    return !1
                }
                if (a.setFragment(k.fragment || ""), "" === k.fragment && a.setForceFragmentSeparator(!0), null !== k.userinfo) {
                    if (f) throw new Error(e("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", a.toString()));
                    return !1
                }
                if (!a.getDomain() && -1 !== a.getPath().indexOf("\\")) {
                    if (f) throw new Error(e("URI.parse: invalid URI (no domain but multiple back-slashes): %s", a.toString()));
                    return !1
                }
                if (!a.getProtocol() && j.test(b)) {
                    if (f) throw new Error(e("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", a.toString()));
                    return !1
                }
                return !0
            }

            function h(a, b) {
                "use strict";
                b ? void 0 : f(0), this.$URIBase1 = b, this.$URIBase2 = "", this.$URIBase3 = "", this.$URIBase4 = "", this.$URIBase5 = "", this.$URIBase6 = "", this.$URIBase7 = {}, this.$URIBase8 = !1, g(this, a, !0, b)
            }
            a.__markCompiled && a.__markCompiled();
            var i = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
                j = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
                k = [];
            return h.prototype.setProtocol = function(a) {
                "use strict";
                return d.isAllowed(a) ? void 0 : f(0), this.$URIBase2 = a, this
            }, h.prototype.getProtocol = function(a) {
                "use strict";
                return this.$URIBase2
            }, h.prototype.setSecure = function(a) {
                "use strict";
                return this.setProtocol(a ? "https" : "http")
            }, h.prototype.isSecure = function() {
                "use strict";
                return "https" === this.getProtocol()
            }, h.prototype.setDomain = function(a) {
                "use strict";
                if (i.test(a)) throw new Error(e("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString()));
                return this.$URIBase3 = a, this
            }, h.prototype.getDomain = function() {
                "use strict";
                return this.$URIBase3
            }, h.prototype.setPort = function(a) {
                "use strict";
                return this.$URIBase4 = a, this
            }, h.prototype.getPort = function() {
                "use strict";
                return this.$URIBase4
            }, h.prototype.setPath = function(a) {
                "use strict";
                return this.$URIBase5 = a, this
            }, h.prototype.getPath = function() {
                "use strict";
                return this.$URIBase5
            }, h.prototype.addQueryData = function(a, b) {
                "use strict";
                return "[object Object]" === Object.prototype.toString.call(a) ? Object.assign(this.$URIBase7, a) : this.$URIBase7[a] = b, this
            }, h.prototype.setQueryData = function(a) {
                "use strict";
                return this.$URIBase7 = a, this
            }, h.prototype.getQueryData = function() {
                "use strict";
                return this.$URIBase7
            }, h.prototype.removeQueryData = function(a) {
                "use strict";
                Array.isArray(a) || (a = [a]);
                for (var b = 0, c = a.length; c > b; ++b) delete this.$URIBase7[a[b]];
                return this
            }, h.prototype.setFragment = function(a) {
                "use strict";
                return this.$URIBase6 = a, this.setForceFragmentSeparator(!1), this
            }, h.prototype.getFragment = function() {
                "use strict";
                return this.$URIBase6
            }, h.prototype.setForceFragmentSeparator = function(a) {
                "use strict";
                return this.$URIBase8 = a, this
            }, h.prototype.getForceFragmentSeparator = function() {
                "use strict";
                return this.$URIBase8
            }, h.prototype.isEmpty = function() {
                "use strict";
                return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
            }, h.prototype.toString = function() {
                "use strict";
                for (var a = this, b = 0; b < k.length; b++) a = k[b](a);
                return a.$URIBase9()
            }, h.prototype.$URIBase9 = function() {
                "use strict";
                var a = "",
                    b = this.getProtocol();
                b && (a += b + "://");
                var c = this.getDomain();
                c && (a += c);
                var d = this.getPort();
                d && (a += ":" + d);
                var e = this.getPath();
                e ? a += e : a && (a += "/");
                var f = this.$URIBase1.serialize(this.getQueryData());
                f && (a += "?" + f);
                var g = this.getFragment();
                return g ? a += "#" + g : this.getForceFragmentSeparator() && (a += "#"), a
            }, h.registerFilter = function(a) {
                "use strict";
                k.push(a)
            }, h.prototype.getOrigin = function() {
                "use strict";
                var a = this.getPort();
                return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
            }, h.isValidURI = function(a, b) {
                return g(new h(null, b), a, !1, b)
            }, h
        }), define("sdk.URI", ["require", "exports", "Assert", "QueryString", "URIBase"], function(a, b, c, d, e) {
            function f(a) {
                "use strict";
                c.isString(a, "The passed argument was of invalid type."), h.constructor.call(this, a, j)
            }
            var g, h;
            a.__markCompiled && a.__markCompiled();
            var i = /\.facebook\.com$/,
                j = {
                    serialize: function(a) {
                        return a ? d.encode(a) : ""
                    },
                    deserialize: function(a) {
                        return a ? d.decode(a) : {}
                    }
                };
            return g = babelHelpers.inherits(f, e), h = g && g.prototype, f.prototype.isFacebookURI = function() {
                "use strict";
                return i.test(this.getDomain())
            }, f.prototype.valueOf = function() {
                "use strict";
                return this.toString()
            }, f
        }), define("sdk.XFBML.Ad.NoThrowURI", ["require", "exports", "sdk.URI"], function(a, b, c) {
            "use strict";

            function d(a) {
                try {
                    this.$NoThrowURI1 = new c(a)
                } catch (b) {
                    this.$NoThrowURI1 = new c("")
                }
            }
            return a.__markCompiled && a.__markCompiled(), d.prototype.getDomain = function() {
                return this.$NoThrowURI1.getDomain()
            }, d.prototype.getOrigin = function() {
                return this.$NoThrowURI1.getOrigin()
            }, d
        }), define("HTMLElementFrameContext.adquality", ["require", "exports", "HTMLElementFrameContextResult.adquality", "Rectangle.adquality", "sdk.XFBML.Ad.NoThrowURI"], function(a, b, c, d, e) {
            "use strict";

            function f(a, b) {
                this.$HTMLElementFrameContext1 = a, this.$HTMLElementFrameContext2 = b
            }
            return a.__markCompiled && a.__markCompiled(), f.prototype.getContext = function(a) {
                var b = new c;
                try {
                    try {
                        b.offsetHeight = this.$HTMLElementFrameContext1.offsetHeight, b.offsetWidth = this.$HTMLElementFrameContext1.offsetWidth
                    } catch (f) {}
                    var g = this.$HTMLElementFrameContext1.ownerDocument;
                    if (b.parentWindow = this.$HTMLElementFrameContext2 || this.$HTMLElementFrameContext1.ownerDocument.defaultView || g.parentWindow, b.parentWindow) {
                        for (var h = this.$HTMLElementFrameContext1, i = b.parentWindow; i && b.windowCount < 100;) {
                            b.windowCount++;
                            var j = null,
                                k = null;
                            try {
                                k = i.document.referrer, j = i.location.href || i.document.location.href, b.topReferrerURL = k, b.topLocationURL = j, b.topWindow = i, b.topWindowLevel = b.windowCount
                            } catch (f) {
                                b.crossDomainWindowCount++
                            }
                            b.locations.push(j);
                            var l = null;
                            try {
                                l = i.document.hasFocus()
                            } catch (f) {}
                            var m = null;
                            if (h && h.getBoundingClientRect && 0 === b.crossDomainWindowCount) try {
                                m = h.getBoundingClientRect()
                            } catch (f) {}
                            if (m && 0 === b.crossDomainWindowCount && (b.offsetRect ? b.offsetRect = b.offsetRect.offset(m.left, m.top) : b.offsetRect = d.RectangleFromClientRect(m)), b.parentWindow && b.parentWindow.top)
                                if (i === b.parentWindow.top) j && (b.pageURL = j, b.pageDomain = new e(j).getDomain(), b.domainDetectionMethod = c.DOMAIN_DETECTION_LOCATION, b.focus = l), b.windowCount > 1 ? j ? b.type = c.TYPE_SAME_ORIGIN : b.type = c.TYPE_CROSS_ORIGIN : b.type = c.TYPE_NONE, b.type !== c.TYPE_CROSS_ORIGIN && (b.viewportRect = d.RectangleFromWindow(i)), i = null;
                                else {
                                    k && i.parent === b.parentWindow.top && (b.pageURL = k, b.pageDomain = new e(k).getDomain(), b.domainDetectionMethod = c.DOMAIN_DETECTION_REFERRER), h = null;
                                    try {
                                        h = i.frameElement
                                    } catch (f) {}
                                    i = i.parent
                                }
                            else i = null
                        }
                        if (b.topURL = b.pageURL || b.topReferrerURL || b.topLocationURL, !b.pageURL) {
                            var n = window.location.ancestorOrigins;
                            n && n.length > 0 && (b.pageDomain = new e(n[n.length - 1]).getDomain(), b.domainDetectionMethod = c.DOMAIN_DETECTION_ANCESTOR_ORIGINS)
                        }
                    }
                } catch (o) {
                    b.error = o
                }
                a(b)
            }, f
        }), define("GeometricMeasurement.adquality", ["require", "exports", "AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "HTMLElementFrameContext.adquality", "HTMLElementFrameContextResult.adquality", "Rectangle.adquality"], function(a, b, c, d, e, f, g) {
            "use strict";

            function h(a, b) {
                j.constructor.call(this, a, b),
                    this.$GeometricMeasurement1 = new e(a, b)
            }
            var i, j;
            return a.__markCompiled && a.__markCompiled(), i = babelHelpers.inherits(h, c), j = i && i.prototype, h.prototype.getMeasurement = function(a) {
                this.$GeometricMeasurement1.getContext(function(b) {
                    var c = null,
                        e = null,
                        f = null,
                        g = null;
                    try {
                        if (b.parentWindow) {
                            var h = b.parentWindow.document;
                            void 0 !== h.hidden ? e = !h.hidden : void 0 !== h.webkitHidden ? e = !h.webkitHidden : void 0 !== h.mozHidden ? e = !h.mozHidden : void 0 !== h.msHidden && (e = !h.msHidden)
                        }
                        var i = b.offsetRect;
                        null !== b.focus && (e = b.focus), b.viewportRect && i && 0 === b.crossDomainWindowCount && (g = b.viewportRect.intersection(i), f = g && i && i.area() > 0 ? g.area() / i.area() : 0)
                    } catch (j) {
                        c = j
                    }
                    a(new d(f, g, e, c), b)
                })
            }, h
        }), define("guid", ["require", "exports"], function(a, b) {
            function c() {
                return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
            }
            return a.__markCompiled && a.__markCompiled(), c
        }), define("NaclBeaconMeasurement.adquality", ["require", "exports", "AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "Rectangle.adquality", "guid"], function(a, b, c, d, e, f) {
            "use strict";

            function g(a, b) {
                i.constructor.call(this, a, b), this.$NaclBeaconMeasurement1 = a, this.$NaclBeaconMeasurement3 = l, this.$NaclBeaconMeasurement4 = b || window, this.$NaclBeaconMeasurement5 = []
            }
            var h, i;
            a.__markCompiled && a.__markCompiled();
            var j = "https://web.archive.org/web/20170109092628/https://scontent.lrcdn.net/outbound-cdn-static",
                k = 1e3,
                l = 0,
                m = 1,
                n = 2;
            return h = babelHelpers.inherits(g, c), i = h && h.prototype, g.isAvailable = function() {
                return navigator && navigator.mimeTypes && void 0 !== navigator.mimeTypes["application/x-pnacl"]
            }, g.prototype.destroy = function() {
                void 0 !== this.$NaclBeaconMeasurement2 && this.$NaclBeaconMeasurement1.removeChild(this.$NaclBeaconMeasurement2)
            }, g.prototype.getMeasurement = function(a) {
                if (!g.isAvailable()) return void a(d.unknownResult());
                var b = !1,
                    c = !1,
                    e = f(),
                    h = function(d) {
                        if (!c && this.$NaclBeaconMeasurement6(d.origin)) try {
                            var f = JSON.parse(d.data);
                            if ("nacl_data" !== f.event || f.id !== e) return;
                            b = !0, window.removeEventListener("message", h), a(this.$NaclBeaconMeasurement7(f, this.$NaclBeaconMeasurement8(this.$NaclBeaconMeasurement1)))
                        } catch (g) {}
                    }.bind(this);
                this.$NaclBeaconMeasurement9(function() {
                    c || (window.addEventListener("message", h, !1), this.$NaclBeaconMeasurement10(e))
                }.bind(this)), setTimeout(function() {
                    b || (c = !0, window.removeEventListener("message", h), a(d.unknownResult()))
                }, k)
            }, g.prototype.$NaclBeaconMeasurement6 = function(a) {
                return j.indexOf(a) > -1
            }, g.prototype.$NaclBeaconMeasurement11 = function() {
                var a = this.$NaclBeaconMeasurement4.document.createElement("iframe");
                return a.setAttribute("src", this.$NaclBeaconMeasurement12()), a.setAttribute("scrolling", "no"), a.style.position = "absolute", a.style.width = "100%", a.style.height = "100%", a.style.top = "0px", a.style.display = "block", a.style.border = "none", a.style.opacity = "0", a.style.zIndex = "-999999", a
            }, g.prototype.$NaclBeaconMeasurement8 = function(a) {
                return a.clientWidth * a.clientHeight
            }, g.prototype.$NaclBeaconMeasurement12 = function() {
                return j + "/measurement/nacl_beacon.html"
            }, g.prototype.$NaclBeaconMeasurement7 = function(a, b) {
                var c = e.RectangleZero(),
                    f = 0;
                if ("1" === a.isVisible) {
                    var g = a.width * a.height;
                    f = Math.min(1, g / b), c = new e(a.x, a.y, a.width, a.height)
                }
                return new d(f, c)
            }, g.prototype.$NaclBeaconMeasurement10 = function(a) {
                var b = this.$NaclBeaconMeasurement2;
                b.contentWindow.postMessage(a, "*")
            }, g.prototype.$NaclBeaconMeasurement9 = function(a) {
                if (this.$NaclBeaconMeasurement3 === n) return void a();
                if (this.$NaclBeaconMeasurement3 === m) return void this.$NaclBeaconMeasurement5.push(a);
                this.$NaclBeaconMeasurement3 = m, this.$NaclBeaconMeasurement5.push(a);
                var b = function(a) {
                    if (this.$NaclBeaconMeasurement6(a.origin)) try {
                        var c = JSON.parse(a.data);
                        if ("nacl_loaded" !== c.event) return;
                        for (this.$NaclBeaconMeasurement3 = n, window.removeEventListener("message", b); this.$NaclBeaconMeasurement5.length > 0;) this.$NaclBeaconMeasurement5.shift()()
                    } catch (d) {}
                }.bind(this);
                window.addEventListener("message", b, !1), this.$NaclBeaconMeasurement2 = this.$NaclBeaconMeasurement11(), this.$NaclBeaconMeasurement2.onload = function() {
                    var a = this.$NaclBeaconMeasurement2;
                    a.contentWindow.postMessage("handshake", "*")
                }.bind(this), this.$NaclBeaconMeasurement1.appendChild(this.$NaclBeaconMeasurement2)
            }, g
        }), define("SimplePromise.adquality", ["require", "exports"], function(a, b) {
            "use strict";

            function c(a) {
                this.$SimplePromise1 = d, this.$SimplePromise4 = [], this.$SimplePromise5 = [], a(this.$SimplePromise6.bind(this), this.$SimplePromise7.bind(this))
            }
            a.__markCompiled && a.__markCompiled();
            var d = 0,
                e = 1,
                f = 2;
            return c.prototype.then = function(a, b) {
                return this.$SimplePromise1 === d ? (this.$SimplePromise4.push(a), void(b && this.$SimplePromise5.push(b))) : void(this.$SimplePromise1 === e ? a(this.$SimplePromise2) : this.$SimplePromise1 === f && b && b(this.$SimplePromise3))
            }, c.prototype.$SimplePromise6 = function(a) {
                if (this.$SimplePromise1 === d)
                    for (this.$SimplePromise2 = a, this.$SimplePromise1 = e; this.$SimplePromise4.length > 0;) this.$SimplePromise4.shift()(this.$SimplePromise2)
            }, c.prototype.$SimplePromise7 = function(a) {
                if (this.$SimplePromise1 === d)
                    for (this.$SimplePromise3 = a, this.$SimplePromise1 = f; this.$SimplePromise5.length > 0;) this.$SimplePromise5.shift()(this.$SimplePromise3)
            }, c.resolve = function(a) {
                return new c(function(b, c) {
                    b(a)
                })
            }, c.reject = function(a) {
                return new c(function(b, c) {
                    c(a)
                })
            }, c.all = function(a) {
                return new c(function(b, c) {
                    for (var d = [], e = 0, f = function(f) {
                            var g = f;
                            a[f].then(function(c) {
                                d[g] = c, e++, e === a.length && b(d)
                            }, function(a) {
                                c(a)
                            })
                        }, g = 0; g < a.length; g++) f(g)
                })
            }, c
        }), define("RafBeaconMeasurement.adquality", ["require", "exports", "AdQualityMeasurement.adquality", "AdQualityMeasurementResult.adquality", "Rectangle.adquality", "SimplePromise.adquality"], function(a, b, c, d, e, f) {
            "use strict";

            function g(a, b) {
                i.constructor.call(this, a, b), this.$RafBeaconMeasurement1 = a, this.$RafBeaconMeasurement2 = [], this.$RafBeaconMeasurement3 = 0, this.$RafBeaconMeasurement4 = [], this.$RafBeaconMeasurement7()
            }
            var h, i;
            a.__markCompiled && a.__markCompiled();
            var j = 0,
                k = 1,
                l = 2,
                m = 3,
                n = 4,
                o = 5,
                p = 6,
                q = 5,
                r = 2,
                s = 0,
                t = 1;
            return h = babelHelpers.inherits(g, c), i = h && h.prototype, g.isAvailable = function() {
                var a = navigator.userAgent.toLowerCase(),
                    b = a.match(/firefox\/(\d+)/);
                if (void 0 !== b && null !== b) {
                    var c = parseInt(b[1], 10);
                    return c >= 40
                }
                var d = /safari\//.test(a) && !/chrome\//.test(a);
                if (d) {
                    var e = a.match(/version\/(\d+)/);
                    if (void 0 !== e && null !== e) {
                        var f = parseInt(e[1], 10);
                        return f >= 9
                    }
                }
                var g = a.match(/crios\/(\d+)/);
                if (g) {
                    var h = parseInt(g[1], 10);
                    return h >= 48
                }
                return !1
            }, g.prototype.destroy = function() {
                if (this.$RafBeaconMeasurement2)
                    for (; this.$RafBeaconMeasurement2.length > 0;) this.$RafBeaconMeasurement2.shift().then(function(a) {
                        this.$RafBeaconMeasurement1.removeChild(a), this.$RafBeaconMeasurement3 = 0
                    }.bind(this))
            }, g.prototype.getMeasurement = function(a) {
                if (!g.isAvailable()) return void a(d.unknownResult());
                var b = this.$RafBeaconMeasurement1,
                    c = this.$RafBeaconMeasurement8(b),
                    e = b.clientWidth * b.clientHeight;
                f.all([this.$RafBeaconMeasurement9(c[j]), this.$RafBeaconMeasurement9(c[k]), this.$RafBeaconMeasurement9(c[l]), this.$RafBeaconMeasurement9(c[m])]).then(function(g) {
                    switch (g.join("")) {
                        case "1111":
                            a(this.$RafBeaconMeasurement10(c[j].x, c[j].y, b.clientWidth, b.clientHeight, e));
                            break;
                        case "0000":
                            this.$RafBeaconMeasurement9(c[n]).then(function(b) {
                                return "0" === b ? void a(new d(0)) : void f.all([this.$RafBeaconMeasurement11(c[n], c[p]), this.$RafBeaconMeasurement11(c[n], c[o])]).then(function(b) {
                                    a(this.$RafBeaconMeasurement10(b[0].x, b[1].y, 2 * (b[1].x - b[0].x), 2 * (b[0].y - b[1].y), e))
                                }.bind(this), function() {
                                    a(d.unknownResult())
                                })
                            }.bind(this));
                            break;
                        case "1000":
                            f.all([this.$RafBeaconMeasurement11(c[j], c[k]), this.$RafBeaconMeasurement11(c[j], c[m])]).then(function(b) {
                                a(this.$RafBeaconMeasurement10(c[j].x, c[j].y, b[0].x - c[j].x, b[1].y - c[j].y, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "0100":
                            f.all([this.$RafBeaconMeasurement11(c[k], c[j]), this.$RafBeaconMeasurement11(c[k], c[l])]).then(function(b) {
                                a(this.$RafBeaconMeasurement10(b[0].x, c[k].y, c[k].x - b[0].x, b[1].y - c[k].y, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "0010":
                            f.all([this.$RafBeaconMeasurement11(c[l], c[m]), this.$RafBeaconMeasurement11(c[l], c[k])]).then(function(b) {
                                a(this.$RafBeaconMeasurement10(b[0].x, b[1].y, c[l].x - b[0].x, c[l].y - b[1].y, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "0001":
                            f.all([this.$RafBeaconMeasurement11(c[m], c[j]), this.$RafBeaconMeasurement11(c[m], c[l])]).then(function(b) {
                                a(this.$RafBeaconMeasurement10(b[0].x, b[0].y, b[1].x - c[m].x, c[m].y - b[0].y, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "1100":
                            this.$RafBeaconMeasurement11(c[j], c[m]).then(function(d) {
                                a(this.$RafBeaconMeasurement10(c[j].x, c[j].y, b.clientWidth, d.y - c[j].y, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "0110":
                            this.$RafBeaconMeasurement11(c[k], c[j]).then(function(d) {
                                a(this.$RafBeaconMeasurement10(d.x, d.y, c[k].x - d.x, b.clientHeight, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "0011":
                            this.$RafBeaconMeasurement11(c[l], c[k]).then(function(d) {
                                a(this.$RafBeaconMeasurement10(c[j].x, d.y, b.clientWidth, c[l].y - d.y, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        case "1001":
                            this.$RafBeaconMeasurement11(c[j], c[k]).then(function(d) {
                                a(this.$RafBeaconMeasurement10(c[j].x, c[j].y, d.x - c[j].x, b.clientHeight, e))
                            }.bind(this), function() {
                                a(d.unknownResult())
                            });
                            break;
                        default:
                            a(d.unknownResult())
                    }
                }.bind(this))
            }, g.prototype.$RafBeaconMeasurement12 = function(a, b, c, d, e) {
                return b >= c ? f.reject() : new f(function(f, g) {
                    var h = -1,
                        i = b + Math.floor((c - b) / 2);
                    e(i);
                    var j = a;
                    setTimeout(function() {
                        j.contentWindow.isVisible(function(j) {
                            d(j) ? (c = i, h = i) : b = i + 1, this.$RafBeaconMeasurement12(a, b, c, d, e).then(function(a) {
                                f(a)
                            }, function() {
                                -1 === h ? g() : f(h)
                            })
                        }.bind(this))
                    }.bind(this), this.$RafBeaconMeasurement6)
                }.bind(this))
            }, g.prototype.$RafBeaconMeasurement13 = function() {
                var a = document.createElement("iframe");
                return a.setAttribute("srcdoc", "\n      <script>\n        (function () {\n          window.isVisible = function(cb) {\n            var threshold = 24;\n            var stepsNeedToBeRun = 2;\n            var responseFinished = false;\n            var stepsNum = 0;\n            var last = performance.now();\n            var step = function(now) {\n              if (stepsNum !== stepsNeedToBeRun && !responseFinished) {\n                window.requestAnimationFrame(step)\n              }\n              if (stepsNum === stepsNeedToBeRun && !responseFinished) {\n                responseFinished = true;\n                cb(now - last < threshold);\n              }\n              last = now;\n              stepsNum++;\n            };\n            window.requestAnimationFrame(step);\n            setTimeout(function() {\n              if (!responseFinished) {\n                responseFinished = true;\n                cb(false);\n              }\n            }, threshold * 3);\n          }\n        })();\n      </script>\n    "), a.style.position = "absolute", a.style.display = "block", a.style.zIndex = "-999999", a.style.border = "none", a.style.width = r + "px", a.style.height = r + "px", new f(function(b, c) {
                    a.addEventListener("load", function() {
                        var c = a;
                        c.contentWindow.isVisible(function(c) {
                            b(a)
                        })
                    }, !1), this.$RafBeaconMeasurement1.appendChild(a)
                }.bind(this))
            }, g.prototype.$RafBeaconMeasurement7 = function() {
                this.$RafBeaconMeasurement5 = /firefox\//.test(navigator.userAgent.toLowerCase()) ? s : t, this.$RafBeaconMeasurement6 = this.$RafBeaconMeasurement5 === s ? 30 : 0
            }, g.prototype.$RafBeaconMeasurement9 = function(a) {
                return new f(function(b, c) {
                    this.$RafBeaconMeasurement14().then(function(c) {
                        c.style.left = a.x - r / 2 + "px", c.style.top = a.y - r / 2 + "px";
                        var d = c;
                        setTimeout(function() {
                            d.contentWindow.isVisible(function(a) {
                                this.$RafBeaconMeasurement15(c), b(a ? "1" : "0")
                            }.bind(this))
                        }.bind(this), this.$RafBeaconMeasurement6)
                    }.bind(this))
                }.bind(this))
            }, g.prototype.$RafBeaconMeasurement14 = function() {
                return this.$RafBeaconMeasurement2.length > 0 ? this.$RafBeaconMeasurement2.shift() : this.$RafBeaconMeasurement3 >= q ? new f(function(a, b) {
                    this.$RafBeaconMeasurement4.push(function(b) {
                        a(b)
                    })
                }.bind(this)) : (this.$RafBeaconMeasurement3++, this.$RafBeaconMeasurement13())
            }, g.prototype.$RafBeaconMeasurement8 = function(a) {
                return [{
                    x: 0,
                    y: 0
                }, {
                    x: 0 + a.clientWidth,
                    y: 0
                }, {
                    x: 0 + a.clientWidth,
                    y: 0 + a.clientHeight
                }, {
                    x: 0,
                    y: 0 + a.clientHeight
                }, {
                    x: 0 + a.clientWidth / 2,
                    y: 0 + a.clientHeight / 2
                }, {
                    x: 0 + a.clientWidth / 2,
                    y: 0
                }, {
                    x: 0,
                    y: 0 + a.clientHeight / 2
                }]
            }, g.prototype.$RafBeaconMeasurement11 = function(a, b) {
                return new f(function(c, d) {
                    this.$RafBeaconMeasurement14().then(function(e) {
                        if (a.x !== b.x && a.y !== b.y) return this.$RafBeaconMeasurement15(e), void d();
                        var f = a.x === b.x ? "Y" : "X",
                            g = void 0,
                            h = void 0,
                            i = void 0;
                        "X" === f ? (g = Math.min(a.x, b.x), h = Math.max(a.x, b.x), i = function(a) {
                            e.style.left = a - r / 2 + "px"
                        }, e.style.top = a.y - r / 2 + "px") : (g = Math.min(a.y, b.y), h = Math.max(a.y, b.y), i = function(a) {
                            e.style.top = a - r / 2 + "px"
                        }, e.style.left = a.x - r / 2 + "px");
                        var j = a.y > b.y || a.x > b.x ? function(a) {
                            return a
                        } : function(a) {
                            return !a
                        };
                        this.$RafBeaconMeasurement12(e, g, h, j, i).then(function(b) {
                            this.$RafBeaconMeasurement15(e), c("X" === f ? {
                                x: b,
                                y: a.y
                            } : {
                                x: a.x,
                                y: b
                            })
                        }.bind(this), function() {
                            this.$RafBeaconMeasurement15(e), d()
                        }.bind(this))
                    }.bind(this))
                }.bind(this))
            }, g.prototype.$RafBeaconMeasurement10 = function(a, b, c, f, g) {
                var h = c * f * 1 / g;
                return new d(h, new e(a, b, c, f))
            }, g.prototype.$RafBeaconMeasurement15 = function(a) {
                return 0 === this.$RafBeaconMeasurement4.length ? void this.$RafBeaconMeasurement2.push(f.resolve(a)) : void this.$RafBeaconMeasurement4.shift()(a)
            }, g
        }), define("AdQualityManager.adquality", ["require", "exports", "AdQualityMeasurementQueue.adquality", "AdQualityMeasurementResult.adquality", "AdQualityRule.adquality", "AdQualityStatistics.adquality", "AdQualityTest.adquality", "GeometricMeasurement.adquality", "NaclBeaconMeasurement.adquality", "RafBeaconMeasurement.adquality"], function(a, b, c, d, e, f, g, h, i, j) {
            "use strict";

            function k(a, b, d) {
                this.$AdQualityManager1 = !0, this.$AdQualityManager2 = a, this.$AdQualityManager3 = new c([new h(a, b), new i(a, b), new j(a, b)]), this.$AdQualityManager4 = b, this.$AdQualityManager6 = [], d.forEach(function(a) {
                    this.$AdQualityManager6.push(new g(a))
                }.bind(this)), this.$AdQualityManager7()
            }
            a.__markCompiled && a.__markCompiled();
            var l = .5;
            return k.prototype.destroy = function() {
                this.$AdQualityManager1 = !1, this.$AdQualityManager8(), this.$AdQualityManager3.destroy(), delete this.$AdQualityManager3
            }, k.prototype.getStatistics = function() {
                return this.$AdQualityManager5.getData()
            }, k.prototype.registerProgress = function(a) {
                this.$AdQualityManager1 && this.$AdQualityManager3.getMeasurement(function(b) {
                    this.$AdQualityManager1 && this.$AdQualityManager9(b, parseFloat(a))
                }.bind(this))
            }, k.prototype.resetStatistics = function() {
                this.$AdQualityManager7()
            }, k.prototype.$AdQualityManager8 = function() {
                this.$AdQualityManager6.forEach(function(a) {
                    a.registerEnd()
                })
            }, k.prototype.$AdQualityManager7 = function() {
                this.$AdQualityManager5 = new f(l)
            }, k.prototype.$AdQualityManager9 = function(a, b) {
                this.$AdQualityManager5.registerProgress(b, a), this.$AdQualityManager6.forEach(function(c) {
                    c.registerProgress(b, a)
                })
            }, k
        }), define("AdQualityRules.adquality", ["require", "exports", "AdQualityRule.adquality"], function(a, b, c) {
            "use strict";
            a.__markCompiled && a.__markCompiled();
            var d = {
                mrc: function(a) {
                    return new c(.5, -1, 2, !0, a)
                }
            };
            return d
        }), define("InterfaceAsset", ["require", "exports"], function(a, b) {
            var c = function() {
                function a(a) {
                    this.base64String = a.base64String
                }
                return a.getBase64ImgSrc = function(a) {
                    return "data:image/png;base64," + a.base64String
                }, a.getCSSBackgroundUrl = function(b) {
                    return "url('" + a.getBase64ImgSrc(b) + "')"
                }, a.AD_CHOICES_ICON = {
                    base64String: "iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAA58mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0wMS0wNVQxMjoyNjoxOC0wODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTAxLTA1VDEyOjI4OjI2LTA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0wMS0wNVQxMjoyODoyNi0wODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDoyYTM2ZTRjNy1iN2NlLTRmZDQtYTA5Yi02YWI0MWRlMmYzODY8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyYmM4ZWNjYS1mNDc5LTExNzgtYjM3ZC1jM2MyN2FlMjk1ZTI8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo1MDNkYjI2Ny1kOWFhLTQxNzQtODI0MC0yZDhhMzEwNTAzMGM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NTAzZGIyNjctZDlhYS00MTc0LTgyNDAtMmQ4YTMxMDUwMzBjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTAxLTA1VDEyOjI2OjE4LTA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MmEzNmU0YzctYjdjZS00ZmQ0LWEwOWItNmFiNDFkZTJmMzg2PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTAxLTA1VDEyOjI4OjI2LTA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+Mjg8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mjg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PqGe3N0AAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAi1JREFUeNrc1jGLE0EUAOAhxWFxBLEQOSRIOK46rERSiBxiEawsjJXVFSLCtVYWCweSHNmZN5udNyxJ3Mx7+AuuECsRK7G2sJAgV4iIiIWIhBAr75LdNWZzewouTLPszjfzZt6bEZPJRPzNJv4ZKKVb08jPNPJ7QGZl6Zoo8EmBGumptjyZacgvi4IzQP6aAguE0+AUAMgjQH4LSOOi4LmgsnxPCCFaQfe8RooAeZSEfeO2Cpyhuzj9sTS8DkhPkjMGyy8WheeC2tJm1k+yE29qpP3kGi8C5wZ3gmCl2YzKQgjhY1zTSM/zwLnAvWBQBUuftaXv0nD913uF7rq29GoROBeoQlc77My4u8nRK+SbgPQmC1adeGupkMrAXZaG657nlbJC5nleCdDdAUvDFIy0mwtsNBoljexrpM5OEKzM2xzNZlQG5HfJvM4XUnT1wxw17tY8UKn4dAb4OhcIxt0+KgpuOzuk8Skw7j4gHST6GvkY1woDW63+qjb0QCN9SKzdWCOxH7qN3JsmC3wUujPK8K5G/pJcL4XspOH1pdNiGtTWPdTIPiB9yyj48V4wqB478WfB5JbnkTbUV/i4unRpkx26NJOD4SADpJFG7ioVXzh+8Ub2AbpnJdLVdtirtMNeBSx/PIIoaoe9SmHH0yxOnzxjVr0gKCsc3JDSrRVyAIPlH78Bh3+qLsuB6eI7BiSnVHTuZC5Rhq6ApSEgHWikDmB/40Svif/tzfvnAOvtSxz/Lz6cAAAAAElFTkSuQmCC"
                }, a.LARGE_PLAY_BUTTON = {
                    base64String: "iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFZJREFUeNrs3dtLI1ccB/BcNJe1yU7cohN121wUjCL1FitUUUnBQl5WWHxSqP+AD4Kvviq+CL4JFYuXFx+0IIIvwS1aSBHUQrVBnGTKrsaUrk4mpslE1+zvBLObtkubpmDmJL8vDDPJHDLhw5n5nRn0RKn4e3QMw9TD2gILc/8ek7FdLBHul/Q2LwiCD9bxzEYlmS8ArjeZTHYajcbH3d3dzWaz2aLRaHRkn8FgYEtLS3XFIHdzcxOPRCIXZDuRSMSDwSC/s7NzCDZhpVLpBcgX6bbKDLxnAPe52+3utdvtnfAB0vHx8etAIBBJtzk9Pb0uBsDa2tqP0ttWq9XQ0NDwBDqQluM47+bm5gtRFH8ExO/eAQLcVwDYMzIy8rVWq/14e3v71d7e3msF5l2cTueTvr6+GkmSfl9YWPgWAL8HyC01wDHQLZ8PDw8/B+WalZWVE5/PJyLZn3N+fh7jeV5saWl5arPZKg4ODsI6ne5QDde43ra2ti9gx5eLi4u+s7OzGHJ9OHBZuyWIUB8c19fXPFiFVdD7LE1NTc1wrRMQ799DjIgVMSN2BJCFs5g9OTkRkCe7ECtiRuxU6SEKVJgI0mQXYkXMyLYq/ebl5WUCabJLppUKOf5fEBABERABERCDgAiIgAiIQUAEREAExCBg0QBOT0/XmEwmNQLmmMHBwcqtrS3HwMDAYwTMMZWVldqZmZna5eVlu81m0yBgjunq6mI2NjYco6OjFQiYY8rKykrGxsaeejweR2trqx4Bc4zdbn+0trbWQEORkfUwhoYiI/txoNyLDDUDabkWGaruRORYZKi8lZNTkaH6XlgORYb6hwn5LjIF8zQmX0WmoB5n5aPIFOTzQJZlNdAjDQ9xrJJCw9vd3RUmJiZe+v3+BAL+h4RCIWlqaurl+vp6+CGPWxCAq6urocnJyeDV1dWbhz421YAcx/0xPj7O7+/v5+2/C6gEjEajt3Nzc8HZ2dnf8v1dqAN86CJRMID5KhIFAZjPIkE1oByKBJWAcioS1AHKrUhQAyjXIkEFoJyLhKwBaSgSsgZ0uVy/0H4fjn8fiIAIiIAIiEFABERABMQgIAIiIAJiEBABaQMks9ZmTryK+ecQK2KWBhTIlL9ms/kR0mQXYnU/TbKQAgyFQnxdXR2DNNmFWBGzFODd3Z3P6/UeVlVVGfA0zu70JVbEjNipIGTm3vDFxYXP7XZb9Hq9Gpk+HGJDjIhVagZfsFPHIWS6d47j4k6ns7mxsbHC7/eLsVjsDZK9T3l5uWZoaKhOq9VKS0tLy+DzQzgc/jnV2yRJegUr69HR0Wl7e7ujo6PjU5PJVBqNRm/I3MnFDFddXa3v6elh+/v7P4GXV/Pz898A3K+iKJKp4G+VGW11RqPxGXTLepfL9ZnVaq1nWbYe+55CQU7ZQCDg83g8P5Hr3j1eahij/GtjhmEs0KiTTDINiw75FIpkMhmHhYfORX7Jgc/c91aAAQBVWxmAi5XwnAAAAABJRU5ErkJggg=="
                }, a.SMALL_PLAY_BUTTON = {
                    base64String: "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAActJREFUeNpiZAACAQEBAyAFwiCgwEA5eAClL3z48OECC9ACByDHITg42F5cXFyBlZWVg5eXV4Jc0z9//vzi9+/fP16+fPlg7dq1CkDzBVj+//9vERUV5S4mJmZ47Nix5+/fv//49OnTF9+/f/9LqgWcnJzM0tLSnIKCguyOjo42kZGRHMuWLfvBwsjIyKGsrGyxYsWKm3fu3PlCSRiBHAY14wvQsT8jIiIsgObvZOLj42MHKaDUAnQAMw9kPtOnT59+/vr16w8DjQDIfCYQg42NjYWBhoCJgQ6AaEu6urpkgKmGmaaWhIWFie/YsUMTmDR5aBpcwMzKPn/+fPXp06fLk+IrsuLE09NT5MiRIzqBgYH8NI14bm5ulv7+fhVQXNE0da1ateple3v7c0LqyMofwMLvZ0VFxYP9+/cTVUqQbMmcOXOetbS0PCdFD9GW3L1791tpaemDc+fOfSfVYURb4uzsfH14FCtDwxJQnayrq8tPTYNB5gFryg8wSz48evTogpOTkyyofqaGBSBzgEWPwoMHDy6AzGcEtVaAVaS7t7e3A6iup5ZPgEn+xNatWw8Aa8adjNB62IOJicmC2nHx79+/E0BLdgAEGACb67HFg0eK6wAAAABJRU5ErkJggg=="
                }, a.SMALL_PAUSE_BUTTON = {
                    base64String: "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV1JREFUeNpiZAACAQEBAyAFwiCgwEA5eAClL3z48OECC9ACByDHITg42F5cXFyBlZWVg5eXV4Jc0z9//vzi9+/fP16+fPlg7dq1CkDzBVj+//9vERUV5S4mJmZ47Nix5+/fv//49OnTF9+/f/9LqgWcnJzM0tLSnIKCguyOjo42kZGRHMuWLfvBwsjIyKGsrGyxYsWKm3fu3PlCSRiBHAY14wvQsT8jIiIsgObvZOLj42MHKaDUAnQAMw9kPtOnT59+/vr16w8DjQDIfCYQg42NjYWBhoCJgQ6AKEsePHhgDMKExAa/T0YtGbVk8FpCVHGioKBwlhix0TihniWgOllXV5efmgaDzAPWlB9glnx49OjRBScnJ1lQ/UwNC0DmeHp6KgBL6Qsg8xlBrRVgFenu7e3tAKrrqeWTu3fvnti6desBYM24kxFaD3swMTFZUDsu/v37dwJoyQ6AAAMA3I+OLwkeBn4AAAAASUVORK5CYII="
                }, a.SMALL_MUTE_BUTTON = {
                    base64String: "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjhJREFUeNpiZAACAQEBAyAFwiCgwEA5eAClL3z48OECC9ACByDHITg42F5cXFyBlZWVg5eXV4Jc0z9//vzi9+/fP16+fPlg7dq1CkDzBVj+//9vERUV5S4mJmZ47Nix5+/fv//49OnTF9+/f/9LqgWcnJzM0tLSnIKCguyOjo42kZGRHMuWLfvBwsjIyKGsrGyxYsWKm3fu3PlCSRiBHAY14wvQsT8jIiIsgObvZOLj42MHKaDUAnQAMw9kPtOnT59+/vr16w8DjQDIfCYQg42NjYWBhoCJgQ6AJEsSEhKEQbSSkhIbiJ4+fbq8kZERJ9UsAVnQ0NAAzqgZGRliIIu6u7ufL168WA2YZJkptgTZAhA4fvz459LSUsl79+79Aqai721tbTL49OON8AcPHhhjE1+/fv3HlpYWkKUPT58+/RmY6cRAbKpHPDc3Nws2NlUt+fr1KzxvAcupn2RbkpiYeBOE7969+w1ZHFgu8Rw6dOgDiG1qasp77ty5z2THyf79+8FFw4ULF24tWLBAWV9fnxfE9/T0FAClLFAKU1FR4QQmjLsUBxewsPvr7+9/a/v27W9A/BkzZrwCpSxQCqupqXkAkifbJ+ggMzMTnIJAFiDzh16xMvgtAdXJurq6/NQ0GGQesKb8ALPkw6NHjy44OTnJgupnalgAMgeYzBWAxdIFkPmMoNYKsIp09/b2dgDV9dTyCTADn9i6desBYM24kxFaD3swMTFZUDsu/v37dwJoyQ6AAAMA3dXxPPfPejcAAAAASUVORK5CYII="
                }, a.SMALL_UNMUTE_BUTTON = {
                    base64String: "iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZpJREFUeNpiZAACAQEBAyAFwiCgwEA5eAClL3z48OECC9ACByDHITg42F5cXFyBlZWVg5eXV4Jc0z9//vzi9+/fP16+fPlg7dq1CkDzBRj5+fkroqKi/MXExAyPHTv2/P379z+fPn36HQj+kmoBJycns7S0NKegoCC7o6OjzOPHj88sW7ZsIwsjIyOHsrKyxYoVK27euXPnCyVhBHIY1IwvIMdGRERYAM3fycLHx8cOUkCpBegAZh7IfKZPnz79/PXr1x8GGgGQ+UwgBhsbGwsDDQETAx0ASZZYWVkJ09QSkAX+/v4KNLOEEgtAAG+Ed3Z2Gg/PiKdJcC1YsOAmiPby8pIFlm1cNLHk+vXr4KLh4cOHt5KSkpRlZWV5aRZc3759+ztlypRbV65ceUPzOFm8ePHDkZ266GcJqE7W1dXlp6bBIPOANeUHmCUfHj16dMHJyUkWVD9TwwKQOZ6engoPHjy4ADKfEdRaAVaR7t7e3g6gup5aPrl79+6JrVu3HgDWjDsZofWwBxMTkwW14+Lfv38ngJbsAAgwAALln4vEJfLOAAAAAElFTkSuQmCC"
                }, a
            }();
            return c
        }), define("ClickToPlayInterface", ["require", "exports", "EventManager", "InterfaceAsset", "Utils"], function(a, b, c, d, e) {
            var f = function() {
                function a(b) {
                    var d = this;
                    this.eventManager = new c, this.onclick = function(b) {
                        b.preventDefault(), b.stopPropagation(), b.which > 1 || (d.environmentData.videoSlot.play(), d.environmentData.videoSlot.pause(), d.eventManager.dispatch(a.EVENT_CLICK))
                    }, this.environmentData = b
                }
                return a.prototype.register = function() {
                    this.frame = e.addElement({
                        target: this.environmentData.slot,
                        styles: {
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            cursor: "pointer",
                            top: "0px",
                            left: "0px",
                            "background-color": "#000"
                        },
                        events: {
                            contextmenu: function(a) {
                                a.preventDefault()
                            },
                            click: this.onclick
                        }
                    }), this.button = e.addElement({
                        target: this.frame,
                        type: "img",
                        styles: {
                            position: "absolute",
                            display: "block",
                            border: "0px none",
                            cursor: "pointer",
                            top: "50%",
                            left: "50%",
                            width: "80px",
                            height: "80px",
                            margin: "-40px 0px 0px -40px"
                        },
                        attributes: {
                            src: d.getBase64ImgSrc(new d(d.LARGE_PLAY_BUTTON))
                        },
                        events: {
                            contextmenu: function(a) {
                                a.preventDefault()
                            },
                            click: this.onclick
                        }
                    }), this.videoSlotOriginalStylePosition = this.environmentData.videoSlot.style.getPropertyValue("position"), this.videoSlotOriginalPriorityPosition = this.environmentData.videoSlot.style.getPropertyPriority("position"), this.videoSlotOriginalStyleLeft = this.environmentData.videoSlot.style.getPropertyValue("left"), this.videoSlotOriginalPriorityLeft = this.environmentData.videoSlot.style.getPropertyPriority("left"), this.videoSlotOriginalStyleRight = this.environmentData.videoSlot.style.getPropertyValue("right"), this.videoSlotOriginalPriorityRight = this.environmentData.videoSlot.style.getPropertyPriority("right"), this.environmentData.videoSlot.style.setProperty("position", "relative", "important"), this.environmentData.videoSlot.style.setProperty("left", "-100000px", "important"), this.environmentData.videoSlot.style.removeProperty("right")
                }, a.prototype.unregister = function() {
                    this.environmentData.videoSlot.style.setProperty("position", this.videoSlotOriginalStylePosition, this.videoSlotOriginalPriorityPosition), this.environmentData.videoSlot.style.setProperty("left", this.videoSlotOriginalStyleLeft, this.videoSlotOriginalPriorityLeft), this.environmentData.videoSlot.style.setProperty("right", this.videoSlotOriginalStyleRight, this.videoSlotOriginalPriorityRight), this.environmentData.slot && this.frame && this.environmentData.slot.removeChild(this.frame), this.frame = null, this.button = null
                }, a.prototype.subscribe = function(a, b, c) {
                    this.eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this.eventManager.unsubscribe(a, b)
                }, a.EVENT_CLICK = "click", a
            }();
            return f
        }), define("CompanionPlacement", ["require", "exports"], function(a, b) {
            var c = function() {
                function a(a, b, c, d, e) {
                    void 0 === d && (d = null), void 0 === e && (e = null), this.width = a, this.height = b, this.companionId = c, null !== d && (this.defaultId = d), null !== e && (this.purge = e)
                }
                return a.prototype.getWidth = function() {
                    return this.width
                }, a.prototype.getHeight = function() {
                    return this.height
                }, a.prototype.getCompanionId = function() {
                    return this.companionId
                }, a.prototype.getDefaultId = function() {
                    return this.defaultId
                }, a.prototype.getPurge = function() {
                    return this.purge
                }, a
            }();
            return c
        }), define("CompanionManager", ["require", "exports", "Logger", "CompanionPlacement", "Utils"], function(require, exports, Logger, CompanionPlacement, Utils) {
            var CompanionManager = function() {
                function CompanionManager() {
                    this.logger = new Logger("CompanionManager")
                }
                return CompanionManager.prototype.showCompanions = function(companionAds, companionPlacements, targetWindow) {
                    var _this = this;
                    return this.logger.log("showCompanions(", companionAds, ",", companionPlacements, ")"), "object" == typeof targetWindow && "object" == typeof targetWindow.document && targetWindow.document.getElementById ? void companionAds.forEach(function(companionAd) {
                        function onWrapperLoad() {
                            wrapper.contentWindow && wrapper.contentWindow.postMessage && ("https://web.archive.org/web/20170109092628/http://cdn-static.liverail.com" === content.substr(0, 30) ? wrapper.contentWindow.postMessage(uniqueId, "https://web.archive.org/web/20170109092628/http://cdn-static.liverail.com") : "https://web.archive.org/web/20170109092628/https://cdn-static-secure.liverail.com" === content.substr(0, 38) ? wrapper.contentWindow.postMessage(uniqueId, "https://web.archive.org/web/20170109092628/https://cdn-static-secure.liverail.com") : "https://web.archive.org/web/20170109092628/http://scontent.lrcdn.net" === content.substr(0, 25) ? wrapper.contentWindow.postMessage(uniqueId, "https://web.archive.org/web/20170109092628/http://scontent.lrcdn.net") : "https://web.archive.org/web/20170109092628/https://scontent.lrcdn.net" === content.substr(0, 26) && wrapper.contentWindow.postMessage(uniqueId, "https://web.archive.org/web/20170109092628/https://scontent.lrcdn.net"))
                        }

                        function handleMessage(a) {
                            var b = window;
                            a || (a = b.event), a.data === uniqueId && "function" == typeof lrCompanionClickThru && lrCompanionClickThru(companionFingerprint)
                        }
                        var content = companionAd.getContent(),
                            size = companionAd.getSize(),
                            width = companionAd.getWidth(),
                            height = companionAd.getHeight(),
                            companionPlacement = CompanionManager.resolveCompanionPlacement(companionAd, companionPlacements),
                            companionElement = CompanionManager.locateElement(companionPlacement.getCompanionId(), targetWindow),
                            defaultElement = CompanionManager.locateElement(companionPlacement.getDefaultId(), targetWindow);
                        if (!companionElement) return void _this.logger.log("Unable to find " + size + " placement, dropping companion ad");
                        var companionHTML = "";
                        companionAd.getTrackers("impression").forEach(function(a) {
                            a.getUrls().forEach(function(a) {
                                companionHTML += '<img src="' + a + '" width="1" height="1" style="display: none; visibility: hidden;" />'
                            })
                        });
                        var clickUrl = companionAd.getClickUrl();
                        clickUrl && null !== clickUrl.match(/^http(s)?:\/\/t4\.liverail\.com/) && (clickUrl = clickUrl.replace(/&redirect=(%20|%0A|%0D|%09|%0C|%0B|%00)+/, "&redirect="));
                        var lrCompanionClickThru = "function" == typeof targetWindow.lrCompanionClickThru ? targetWindow.lrCompanionClickThru : null,
                            wrapper = null,
                            lrCompanionDisplayCallback = targetWindow.lrCompanionDisplayCallback || {};
                        switch (typeof lrCompanionDisplayCallback[size]) {
                            case "function":
                                lrCompanionDisplayCallback[size]();
                                break;
                            case "string":
                                eval(lrCompanionDisplayCallback[size])
                        }
                        switch (companionAd.getType()) {
                            case "iframe":
                                lrCompanionClickThru ? wrapper = CompanionManager.createWrapperFrame(width, height, content, targetWindow) : companionHTML += '<iframe src="' + content + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="width: ' + width + "px; height: " + height + 'px; border: 0px; margin: 0px;"></iframe>';
                                break;
                            case "image":
                                if ("string" == typeof clickUrl && null !== clickUrl.match(/^http(s)?:\/\/t4.liverail.com/)) {
                                    var clickthruRedirect = clickUrl.split(/&redirect=/)[1];
                                    ("string" != typeof clickthruRedirect || clickthruRedirect.length <= 0) && (clickUrl = null)
                                }
                                companionHTML += (clickUrl ? '<a href="' + clickUrl + '" target="_blank">' : "") + '<img src="' + content + '" border="0" style="width: ' + width + "px; height: " + height + 'px; border: 0px; margin: 0px;" />' + (clickUrl ? "</a>" : "");
                                break;
                            case "flash":
                                var delimiter = -1 === content.indexOf("?") ? "?" : "&",
                                    clickTag = clickUrl && content.match(/scontent\.lrcdn\.net\/outbound-cdn-static/) ? delimiter + "clickTAG=" + encodeURIComponent(clickUrl) : delimiter;
                                companionHTML += '<object width="' + width + '" height="' + height + '"><param name="movie" value="' + content + clickTag + '"><param name="wmode" value="opaque"><param name="allowScriptAccess" value="always"><embed src="' + content + clickTag + '" type="application/x-shockwave-flash" allowScriptAccess="always" wmode="opaque" width="' + width + '" height="' + height + '"></embed></object>';
                                break;
                            case "js":
                                lrCompanionClickThru ? wrapper = CompanionManager.createWrapperFrame(width, height, Utils.getCDNPrefix(targetWindow) + "/js/companion_iframe.html?type=js&content=" + encodeURIComponent(content), targetWindow) : companionHTML += '<iframe src="' + Utils.getCDNPrefix(targetWindow) + "/js/companion_iframe.html?type=js&content=" + encodeURIComponent(content) + '" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="width: ' + width + "px; height: " + height + 'px; border: 0px; margin: 0px;"></iframe>';
                                break;
                            default:
                                companionHTML += content
                        }
                        if (_this.logger.log("Showing " + size + " " + companionAd.getType() + " companion ad"), lrCompanionClickThru) {
                            var companionFingerprint = {
                                type: companionAd.getType(),
                                width: width,
                                height: height,
                                companionElement: companionElement
                            };
                            if (wrapper) {
                                var uniqueId = Utils.genUniqueId().toString();
                                if (wrapper.onload = function() {
                                        onWrapperLoad()
                                    }, "function" != typeof wrapper.onload) {
                                    var legacyWrapper = wrapper;
                                    legacyWrapper.onreadystatechange = function() {
                                        ("loaded" === this.readyState || "complete" === this.readyState) && onWrapperLoad()
                                    }
                                }
                                targetWindow.addEventListener("message", handleMessage, !1), companionElement.innerHTML = "", companionElement.appendChild(wrapper)
                            } else {
                                var divWrapper = targetWindow.document.createElement("div");
                                divWrapper.onmouseup = function(a) {
                                    a || (a = targetWindow.event), 3 !== a.which && 2 !== a.button && "function" == typeof lrCompanionClickThru && lrCompanionClickThru(companionFingerprint)
                                }, divWrapper.innerHTML = companionHTML, companionElement.innerHTML = "", companionElement.appendChild(divWrapper)
                            }
                        } else companionElement.innerHTML = companionHTML;
                        defaultElement && (defaultElement.style.display = "none"), companionElement.style.display = "block"
                    }) : void this.logger.error("Invalid target window, dropping companion ads")
                }, CompanionManager.prototype.hideCompanions = function(companionAds, companionPlacements, targetWindow) {
                    var _this = this;
                    this.logger.log("hideCompanions(", companionAds, ",", companionPlacements), companionAds.forEach(function(companionAd) {
                        var size = companionAd.getSize(),
                            companionPlacement = CompanionManager.resolveCompanionPlacement(companionAd, companionPlacements),
                            companionElement = CompanionManager.locateElement(companionPlacement.getCompanionId(), targetWindow),
                            defaultElement = CompanionManager.locateElement(companionPlacement.getDefaultId(), targetWindow);
                        if (companionElement && companionPlacement.getPurge()) {
                            _this.logger.log("Hiding " + size + " " + companionAd.getType() + " companion ad");
                            var lrCompanionPurgeDelay = targetWindow.lrCompanionPurgeDelay || {},
                                lrCompanionPurgeCallback = targetWindow.lrCompanionPurgeCallback || {};
                            switch (typeof lrCompanionPurgeCallback[size]) {
                                case "function":
                                    lrCompanionPurgeCallback[size]();
                                    break;
                                case "string":
                                    eval(lrCompanionPurgeCallback[size])
                            }
                            lrCompanionPurgeDelay[size] > 0 ? setTimeout(function() {
                                CompanionManager.hideCompanionElement(companionElement, defaultElement)
                            }, lrCompanionPurgeDelay[size]) : CompanionManager.hideCompanionElement(companionElement, defaultElement)
                        }
                    })
                }, CompanionManager.resolveCompanionPlacement = function(a, b) {
                    return b[a.getSize()] || new CompanionPlacement(a.getWidth(), a.getHeight(), "lr_comp_" + a.getSize(), "lr_comp_default_" + a.getSize(), !1)
                }, CompanionManager.locateElement = function(a, b) {
                    try {
                        var c = b.document.getElementById(a);
                        if (null !== c) return c;
                        if (b !== window.top && b.parent && b.parent !== b) return this.locateElement(a, b.parent)
                    } catch (d) {}
                    return null
                }, CompanionManager.createWrapperFrame = function(a, b, c, d) {
                    var e = d.document.createElement("iframe");
                    return e.src = c, e.style.border = "0px", e.style.margin = "0px", e.style.width = a + "px", e.style.height = b + "px", e.style.overflow = "hidden", e.scrolling = "no", e.frameBorder = "0", e.marginWidth = "0", e.marginHeight = "0", e
                }, CompanionManager.hideCompanionElement = function(a, b) {
                    a.style.display = "none", b && (b.style.display = "block")
                }, CompanionManager
            }();
            return CompanionManager
        }), define("InventoryPodSlot", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {
                    this._adResponse = null, this._hadImpression = !1, this._retryCount = 0
                }
                return a.prototype.setAdResponse = function(a) {
                    this._adResponse = a
                }, a.prototype.getAdResponse = function() {
                    return this._adResponse
                }, a.prototype.getRetryCount = function() {
                    return this._retryCount
                }, a.prototype.registerRetry = function() {
                    this._retryCount += 1
                }, a.prototype.registerAdSlotCompletion = function(a) {
                    a.hadImpression() && (this._hadImpression = !0)
                }, a.prototype.hadImpression = function() {
                    return this._hadImpression
                }, a
            }();
            return c
        }), define("InventoryPod", ["require", "exports", "InventoryPodSlot", "PlacementDefinition"], function(a, b, c, d) {
            var e = function() {
                function a(a) {
                    this.adParameters = null, this.placementDefinition = new d, this.podSlotQueue = [], this.failedSlots = 0, this.playedDuration = 0, this.startTime = 0, this.adParameters = a
                }
                return a.prototype.getMaxDuration = function() {
                    return this.placementDefinition.isFromServer() ? this.placementDefinition.maxDuration : this.adParameters ? this.adParameters.maxDuration : 0
                }, a.prototype.getMaxPodSlots = function() {
                    return this.placementDefinition.isFromServer() ? this.placementDefinition.maxPodSlots : this.adParameters ? this.adParameters.maxPodSlots : 0
                }, a.prototype.getMaxPodDuration = function() {
                    return this.placementDefinition.isFromServer() ? this.placementDefinition.maxPodDuration : this.adParameters ? this.adParameters.maxPodDuration : 0
                }, a.prototype.getNewInventoryPodSlot = function() {
                    var a = null;
                    return this.hasCompleted() || (a = new c, this.podSlotQueue.push(a)), a
                }, a.prototype.setStartTime = function() {
                    0 === this.startTime && (this.startTime = Date.now())
                }, a.prototype.getElapsedRealtime = function() {
                    return (Date.now() - this.startTime) / 1e3
                }, a.prototype.increasePlayedDuration = function(a) {
                    this.playedDuration += Math.max(0, a)
                }, a.prototype.getPlayedDuration = function() {
                    return this.playedDuration
                }, a.prototype.getRemainingDuration = function() {
                    if (this.isDurationBased()) {
                        var a = Math.max(0, this.getMaxPodDuration() - this.getPlayedDuration());
                        return this.getMaxDuration() > 0 ? Math.round(Math.min(this.getMaxDuration(), a)) : a
                    }
                    return null
                }, a.prototype.getPodSlotIndex = function() {
                    return this.podSlotQueue.length - 1
                }, a.prototype.getCurrentPodPosition = function() {
                    return Math.max(this.podSlotQueue.length - this.failedSlots, 1)
                }, a.prototype.getTotalSlots = function() {
                    return Math.max(this.getMaxPodSlots() - this.failedSlots, 0)
                }, a.prototype.hasCompleted = function() {
                    return this.isDurationBased() && this.getRemainingDuration() < 3 ? !0 : this.isSlotBased() && this.podSlotQueue.length >= this.getMaxPodSlots() && this.podSlotQueue.length > 0 ? !0 : this.podSlotQueue.length >= 10 ? !0 : this.getPlayedDuration() >= 600
                }, a.prototype.isDurationBased = function() {
                    return this.getMaxPodDuration() > 0
                }, a.prototype.isSlotBased = function() {
                    return this.getMaxPodSlots() > 0 || !this.isDurationBased()
                }, a.prototype.setPlacementDefinition = function(a) {
                    null !== a && (this.placementDefinition = a)
                }, a.prototype.getPlacementDefinition = function() {
                    return this.placementDefinition
                }, a.prototype.registerInventoryPodSlotCompletion = function(a) {
                    a.hadImpression() || (this.failedSlots += 1)
                }, a.TYPE_INSTREAM = "in", a.TYPE_OVERLAY = "ov", a
            }();
            return e
        }), define("InventoryPodHistory", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {
                    this.failedConnectionIds = [], this.servedCreativeIds = [], this.failedCreativeIds = []
                }
                return a.prototype.registerAdSourceFailure = function(a) {
                    var b = a.getAttribute("cid");
                    b && this.failedConnectionIds.push(a.getAttribute("cid"))
                }, a.prototype.getFailedConnectionIds = function() {
                    return this.failedConnectionIds
                }, a.prototype.registerAdCandidateCompletion = function(a) {
                    var b = a.uniqueCreativeID || a.creativeID;
                    a.hadImpression() ? b && this.servedCreativeIds.push(b) : b && "0" !== b ? this.failedCreativeIds.push(b) : a.connectionID && this.failedConnectionIds.push(a.connectionID)
                }, a.prototype.getServedCreativeIds = function() {
                    return this.servedCreativeIds
                }, a.prototype.getFailedCreativeIds = function() {
                    return this.failedCreativeIds
                }, a
            }();
            return c
        }), define("LinearSkin", ["require", "exports", "AdManagerEvents", "EventManager", "Logger"], function(a, b, c, d, e) {
            var f = function() {
                function a(a, b, f) {
                    this.eventManager = new d(c), this.adapter = null, this.adCandidate = null, this.environmentData = b, this.inventoryPod = f, this.logger = new e(a)
                }
                return a.prototype.register = function(a, b) {
                    this.logger.debug("Registering adapter:", a, "adCandidate:", b), this.adapter = a, this.adCandidate = b, this.registerAdapterSubscriptions(this.adapter)
                }, a.prototype.unregister = function() {
                    null !== this.adapter && (this.logger.debug("Unregistering adapter:", this.adapter, "adCandidate:", this.adCandidate), this.unregisterAdapterSubscriptions(this.adapter), this.adapter = null, this.adCandidate = null)
                }, a.prototype.registerAdapterSubscriptions = function(a) {
                    this.logger.log("Registering event subscriptions on adapter:", a), a.subscribe(this.onAdStopped, c.AdStopped, this), a.subscribe(this.onAdSkipped, c.AdSkipped, this), a.subscribe(this.onAdSkippableStateChange, c.AdSkippableStateChange, this), a.subscribe(this.onAdSizeChange, c.AdSizeChange, this), a.subscribe(this.onAdLinearChange, c.AdLinearChange, this), a.subscribe(this.onAdDurationChange, c.AdDurationChange, this), a.subscribe(this.onAdExpandedChange, c.AdExpandedChange, this), a.subscribe(this.onAdVolumeChange, c.AdVolumeChange, this), a.subscribe(this.onAdImpression, c.AdImpression, this), a.subscribe(this.onAdVideoStart, c.AdVideoStart, this), a.subscribe(this.onAdVideoComplete, c.AdVideoComplete, this), a.subscribe(this.onAdClickThru, c.AdClickThru, this), a.subscribe(this.onAdInteraction, c.AdInteraction, this), a.subscribe(this.onAdUserAcceptInvitation, c.AdUserAcceptInvitation, this), a.subscribe(this.onAdUserMinimize, c.AdUserMinimize, this), a.subscribe(this.onAdUserClose, c.AdUserClose, this), a.subscribe(this.onAdPaused, c.AdPaused, this), a.subscribe(this.onAdPlaying, c.AdPlaying, this), a.subscribe(this.onAdError, c.AdError, this)
                }, a.prototype.unregisterAdapterSubscriptions = function(a) {
                    this.logger.log("Unregistering event subscriptions on adapter:", a), a.unsubscribe(this.onAdStopped, c.AdStopped), a.unsubscribe(this.onAdSkipped, c.AdSkipped), a.unsubscribe(this.onAdSkippableStateChange, c.AdSkippableStateChange), a.unsubscribe(this.onAdSizeChange, c.AdSizeChange), a.unsubscribe(this.onAdLinearChange, c.AdLinearChange), a.unsubscribe(this.onAdDurationChange, c.AdDurationChange), a.unsubscribe(this.onAdExpandedChange, c.AdExpandedChange), a.unsubscribe(this.onAdVolumeChange, c.AdVolumeChange), a.unsubscribe(this.onAdImpression, c.AdImpression), a.unsubscribe(this.onAdVideoStart, c.AdVideoStart), a.unsubscribe(this.onAdVideoComplete, c.AdVideoComplete), a.unsubscribe(this.onAdClickThru, c.AdClickThru), a.unsubscribe(this.onAdInteraction, c.AdInteraction), a.unsubscribe(this.onAdUserAcceptInvitation, c.AdUserAcceptInvitation), a.unsubscribe(this.onAdUserMinimize, c.AdUserMinimize), a.unsubscribe(this.onAdUserClose, c.AdUserClose), a.unsubscribe(this.onAdPaused, c.AdPaused), a.unsubscribe(this.onAdPlaying, c.AdPlaying), a.unsubscribe(this.onAdError, c.AdError)
                }, a.prototype.onAdLoaded = function() {}, a.prototype.onAdStarted = function() {}, a.prototype.onAdStopped = function() {}, a.prototype.onAdSkipped = function() {}, a.prototype.onAdSkippableStateChange = function() {}, a.prototype.onAdSizeChange = function() {}, a.prototype.onAdLinearChange = function() {}, a.prototype.onAdDurationChange = function() {}, a.prototype.onAdExpandedChange = function() {}, a.prototype.onAdVolumeChange = function() {}, a.prototype.onAdImpression = function() {}, a.prototype.onAdVideoStart = function() {}, a.prototype.onAdVideoFirstQuartile = function() {}, a.prototype.onAdVideoMidpoint = function() {}, a.prototype.onAdVideoThirdQuartile = function() {}, a.prototype.onAdVideoComplete = function() {}, a.prototype.onAdClickThru = function(a, b, c) {}, a.prototype.onAdInteraction = function() {}, a.prototype.onAdUserAcceptInvitation = function() {}, a.prototype.onAdUserMinimize = function() {}, a.prototype.onAdUserClose = function() {}, a.prototype.onAdPaused = function() {}, a.prototype.onAdPlaying = function() {}, a.prototype.onAdError = function() {}, a.prototype.subscribe = function(a, b, c) {
                    this.eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this.eventManager.unsubscribe(a, b)
                }, a
            }();
            return f
        });
        var __extends = this && this.__extends || function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
            a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        };
        return define("DefaultLinearSkin", ["require", "exports", "AdManagerEvents", "InterfaceAsset", "LinearSkin", "LogEvent", "LogEventType", "Utils"], function(a, b, c, d, e, f, g, h) {
            var i = function(a) {
                function b(b, d) {
                    var e = this;
                    a.call(this, "DefaultLinearSkin", b, d), this.onAdChoicesButtonClick = function(a) {
                        if (e.adapter && h.checkWindowSanity()) {
                            if (a.which > 1) return;
                            e.logger.log("AdChoices button was clicked"), a.stopPropagation(), a.preventDefault(), e.environmentData.parentWindow.open(e.adCandidate.adChoicesUrl, "_blank") ? e.dispatchLogEvent(f.eventWithType(g.AdChoicesClick, {
                                url: e.adCandidate.adChoicesUrl
                            })) : e.dispatchLogEvent(f.eventWithType(g.AdChoicesClickFailed, {
                                url: e.adCandidate.adChoicesUrl
                            }))
                        }
                    }, this.onClickElementClick = function(a) {
                        if (e.adapter && h.checkWindowSanity()) {
                            if (a.which > 1) return;
                            e.logger.log("Click element was clicked"), a.stopPropagation(), a.preventDefault(), e.adapter.supports(1) && (e.adapter.isPaused() ? e.adapter.resumeAd() : e.adCandidate.hasValidClickthruUrl() && (!e.adapter.getAdapterConfiguration().playerHandlesClick && e.adapter.getAdapterConfiguration().pauseOnClick && (e.logger.log("Pause-on-click is enabled, calling pauseAd()"), e.adapter.pauseAd()), e.eventManager.dispatch(c.AdClickThru, [e.adCandidate.clickThruUrl, "", !0])))
                        }
                    }, this.onPlayButtonClick = function(a) {
                        e.adapter.isPaused() ? e.adapter.resumeAd() : e.adapter.pauseAd()
                    }, this.onSkipElementClick = function(a) {
                        0 === e.adapter.getAdSkippableRemainingTime() && e.adapter.getAdSkippableState() === !0 ? (e.logger.log("Skip button pressed"), e.adapter.skipAd()) : e.logger.warn("Skip button pressed -- ad not skippable at this time")
                    }, this.onSmallMuteElementClick = function(a) {
                        e.adapter.getAdVolume() > 0 ? e.adapter.setAdVolume(0) : e.adapter.setAdVolume(1)
                    }, this.onSmallPlayElementClick = function(a) {
                        e.adapter.isPaused() ? e.adapter.resumeAd() : e.adapter.pauseAd()
                    }, this.onCountdownInterval = function() {
                        if (e._countdownFrame && e.adapter.getAdRemainingTime() >= 0) {
                            var a = e.adapter.getAdDuration() - e.adapter.getAdRemainingTime(),
                                b = Math.ceil(Math.round(e.adapter.getAdDuration()) - a),
                                c = Math.floor(b / 60),
                                d = Math.floor(b % 60),
                                f = c + ":" + (10 > d ? "0" : "") + d,
                                g = e._countdownMessage.replace(/\{COUNTDOWN\}/g, b.toString()).replace(/\{COUNTDOWNTIME\}/g, f);
                            e._countdownHTML !== g && (e._countdownHTML = g, e._countdownFrame.innerHTML = e._countdownHTML)
                        }
                        if (e._skipElement)
                            if (e.adapter.getAdSkippableRemainingTime() >= 0 || e.adapter.getAdSkippableState() === !0) {
                                var h, i;
                                e.adapter.getAdSkippableRemainingTime() > 0 ? (h = e.adapter.getAdapterConfiguration().skipCountdownMessage.replace("{COUNTDOWN}", Math.ceil(e.adapter.getAdSkippableRemainingTime()).toString()), i = "default") : (h = e.adapter.getAdapterConfiguration().skipMessage, i = "pointer"), e._skipHTML !== h && (e._skipHTML = h, e._skipElement.innerHTML = e._skipHTML, e._skipElement.style.setProperty("cursor", i, "important"), e._skipElement.style.setProperty("display", "block", "important"))
                            } else e._skipElement.style.setProperty("display", "none", "important")
                    }, this._countdownInterval = null, this._countdownMessage = "", this._largePlayButton = null, this._layoutAdded = !1, this._skipElement = null, this._smallMuteButton = null, this._smallPlayButton = null
                }
                return __extends(b, a), b.prototype.register = function(b, c) {
                    a.prototype.register.call(this, b, c)
                }, b.prototype.unregister = function() {
                    this.adapter && (this.removeSkinLayout(), a.prototype.unregister.call(this))
                }, b.prototype.addSkinLayout = function() {
                    if (this.logger.debug("Adding skin layout"), !this._layoutAdded && (this._layoutAdded = !0, this.skinIsEnabled() && (this.isLegacyInterstitial() || (this._countdownMessage = this.parseCountdownMessage(), this.adapter.getAdapterConfiguration().showCountdown && this.adapter.supports(0) && (this._countdownFrame = this.addElement({
                            target: this.environmentData.slot,
                            styles: {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "100%",
                                height: "18px",
                                "line-height": "19px",
                                "text-indent": "5px",
                                "text-align": "left",
                                "text-decoration": "none",
                                background: "rgba(0,0,0,0.5)",
                                color: "rgb(208,208,208)",
                                "font-family": "Helvetica, Arial, sans",
                                "font-size": "11px",
                                cursor: "default",
                                "user-select": "none",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-khtml-user-select": "none",
                                "-o-user-select": "none"
                            },
                            events: {
                                contextmenu: function(a) {
                                    a.preventDefault()
                                }
                            }
                        })))), !this._clickElement && this.adapter.supports(1) && (this._clickElement = this.addElement({
                            target: this.environmentData.slot,
                            styles: {
                                position: "absolute",
                                top: "0px",
                                left: "0px",
                                width: "100%",
                                height: "100%",
                                cursor: "default"
                            },
                            events: {
                                click: this.onClickElementClick,
                                contextmenu: function(a) {
                                    a.preventDefault()
                                }
                            }
                        }), this.adCandidate.hasValidClickthruUrl() && this._clickElement.style.setProperty("cursor", "pointer", "important")), this.skinIsEnabled() && (this.isLegacyInterstitial() || this.adapter.supports(2) && (this._largePlayButton = this.addElement({
                            target: this.environmentData.slot,
                            type: "img",
                            styles: {
                                position: "absolute",
                                opacity: "0.7",
                                display: "none",
                                border: "0px none",
                                cursor: "pointer",
                                top: "50%",
                                left: "50%",
                                width: "80px",
                                height: "80px",
                                margin: "-40px 0px 0px -40px",
                                transition: "opacity 250ms ease-out",
                                "-webkit-transition": "opacity 250ms ease-out",
                                "-moz-transition": "opacity 250ms ease-out",
                                "user-select": "none",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-khtml-user-select": "none",
                                "-o-user-select": "none"
                            },
                            attributes: {
                                src: d.getBase64ImgSrc(new d(d.LARGE_PLAY_BUTTON))
                            },
                            events: {
                                contextmenu: function(a) {
                                    a.preventDefault()
                                },
                                click: this.onPlayButtonClick,
                                mouseover: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "1.0", "important")
                                },
                                mouseout: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "0.7", "important")
                                }
                            }
                        })), this.adapter.supports(3) && (this._skipElement = this.addElement({
                            target: this.environmentData.slot,
                            styles: {
                                position: "absolute",
                                display: "none",
                                right: "0px",
                                bottom: "16%",
                                padding: "6px 12px 6px 12px",
                                "font-family": "Helvetica, Arial, sans",
                                "font-size": "14px",
                                "text-align": "left",
                                background: "rgba(0,0,0,0.5)",
                                color: "rgb(208,208,208)",
                                border: "1px solid rgb(76,76,76)",
                                "border-right-width": "0px",
                                "user-select": "none",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-khtml-user-select": "none",
                                "-o-user-select": "none"
                            },
                            events: {
                                contextmenu: function(a) {
                                    a.preventDefault()
                                },
                                click: this.onSkipElementClick
                            }
                        })), !this.isLegacyInterstitial() && (2 === this.adapter.getAdapterConfiguration().linearSkin && this.adapter.supports(2) && (this._smallMuteButton = this.addElement({
                            type: "img",
                            target: this.environmentData.slot,
                            styles: {
                                position: "absolute",
                                opacity: "0.7",
                                display: "block",
                                border: "0px none",
                                cursor: "pointer",
                                bottom: "5px",
                                left: "35px",
                                width: "25px",
                                height: "25px",
                                transition: "opacity 250ms ease-out",
                                "-webkit-transition": "opacity 250ms ease-out",
                                "-moz-transition": "opacity 250ms ease-out",
                                "user-select": "none",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-khtml-user-select": "none",
                                "-o-user-select": "none"
                            },
                            events: {
                                contextmenu: function(a) {
                                    a.preventDefault()
                                },
                                click: this.onSmallMuteElementClick,
                                mouseover: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "1.0", "important")
                                },
                                mouseout: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "0.7", "important")
                                }
                            }
                        }), this.renderSmallMuteAsset(), this._smallPlayButton = this.addElement({
                            type: "img",
                            target: this.environmentData.slot,
                            styles: {
                                position: "absolute",
                                opacity: "0.7",
                                display: "block",
                                border: "0px none",
                                cursor: "pointer",
                                bottom: "5px",
                                left: "5px",
                                width: "25px",
                                height: "25px",
                                transition: "opacity 250ms ease-out",
                                "-webkit-transition": "opacity 250ms ease-out",
                                "-moz-transition": "opacity 250ms ease-out",
                                "user-select": "none",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-khtml-user-select": "none",
                                "-o-user-select": "none"
                            },
                            events: {
                                contextmenu: function(a) {
                                    a.preventDefault()
                                },
                                click: this.onSmallPlayElementClick,
                                mouseover: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "1.0", "important")
                                },
                                mouseout: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "0.7", "important")
                                }
                            }
                        }), this.renderSmallPlayAsset()), this.adCandidate.hasValidAdChoicesUrl() && this.adapter.supports(2))))) {
                        var a = new d(d.AD_CHOICES_ICON);
                        this._adChoicesButton = this.addElement({
                            target: this.environmentData.slot,
                            text: "AdChoices",
                            styles: {
                                "background-color": "rgba(17,17,17,0.8)",
                                "background-image": d.getCSSBackgroundUrl(a),
                                "background-position": "right center",
                                "background-repeat": "no-repeat",
                                "background-size": "14px",
                                position: "absolute",
                                display: "inline-block",
                                top: "0px",
                                right: "0px",
                                height: "18px",
                                "line-height": "19px",
                                "text-align": "left",
                                padding: "0px 17px 0px 3px",
                                color: "rgb(208,208,208)",
                                opacity: "0.7",
                                "font-family": "Helvetica, Arial, sans",
                                "font-size": "11px",
                                cursor: "pointer",
                                "text-decoration": "none",
                                transition: "opacity 250ms ease-out",
                                "-webkit-transition": "opacity 250ms ease-out",
                                "-moz-transition": "opacity 250ms ease-out",
                                "user-select": "none",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-khtml-user-select": "none",
                                "-o-user-select": "none"
                            },
                            events: {
                                click: this.onAdChoicesButtonClick,
                                contextmenu: function(a) {
                                    a.preventDefault()
                                },
                                mouseover: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "1.0", "important")
                                },
                                mouseout: function(a) {
                                    var b = a.srcElement;
                                    b.style.setProperty("opacity", "0.7", "important")
                                }
                            }
                        })
                    }
                    this.registerCountdownInterval()
                }, b.prototype.renderSmallMuteAsset = function() {
                    this.adapter.getAdVolume() > 0 ? this._smallMuteButton.src = d.getBase64ImgSrc(new d(d.SMALL_MUTE_BUTTON)) : this._smallMuteButton.src = d.getBase64ImgSrc(new d(d.SMALL_UNMUTE_BUTTON))
                }, b.prototype.renderSmallPlayAsset = function() {
                    this.adapter.isPaused() ? this._smallPlayButton.src = d.getBase64ImgSrc(new d(d.SMALL_PLAY_BUTTON)) : this._smallPlayButton.src = d.getBase64ImgSrc(new d(d.SMALL_PAUSE_BUTTON))
                }, b.prototype.removeSkinLayout = function() {
                    this._layoutAdded && (this.unregisterCountdownInterval(), this._layoutAdded = !1, this._clickElement && (this.environmentData.slot.removeChild(this._clickElement), this._clickElement = null), this._skipElement && (this.environmentData.slot.removeChild(this._skipElement), this._skipElement = null), this._largePlayButton && (this.environmentData.slot.removeChild(this._largePlayButton), this._largePlayButton = null), this._countdownFrame && (this.environmentData.slot.removeChild(this._countdownFrame), this._countdownFrame = null), this._smallMuteButton && (this.environmentData.slot.removeChild(this._smallMuteButton), this._smallMuteButton = null), this._smallPlayButton && (this.environmentData.slot.removeChild(this._smallPlayButton), this._smallPlayButton = null), this._adChoicesButton && (this.environmentData.slot.removeChild(this._adChoicesButton), this._adChoicesButton = null), this.unsetSlotPosition())
                }, b.prototype.onAdImpression = function() {
                    this.addSkinLayout()
                }, b.prototype.onAdStopped = function() {
                    this.removeSkinLayout()
                }, b.prototype.onAdError = function() {
                    this.removeSkinLayout()
                }, b.prototype.onAdPaused = function() {
                    this._largePlayButton && this._largePlayButton.style.setProperty("display", "block", "important"), this._smallPlayButton && this.renderSmallPlayAsset()
                }, b.prototype.onAdPlaying = function() {
                    this._largePlayButton && this._largePlayButton.style.setProperty("display", "none", "important"), this._smallPlayButton && this.renderSmallPlayAsset()
                }, b.prototype.onAdVolumeChange = function() {
                    this._smallMuteButton && this.renderSmallMuteAsset()
                }, b.prototype.addElement = function(a) {
                    return this.setSlotPosition(), h.addElement(a)
                }, b.prototype.dispatchLogEvent = function(a) {
                    this.eventManager.dispatch(c.LogEvent, [a])
                }, b.prototype.registerCountdownInterval = function() {
                    null !== this._countdownInterval && this.unregisterCountdownInterval(), this._countdownInterval = setInterval(this.onCountdownInterval, 500), this.onCountdownInterval()
                }, b.prototype.unregisterCountdownInterval = function() {
                    clearInterval(this._countdownInterval), this._countdownInterval = null
                }, b.prototype.parseCountdownMessage = function() {
                    var a = "";
                    if (this.adapter.getAdapterConfiguration().indexMessage && this.inventoryPod.getTotalSlots() > 1) {
                        var b = this.adapter.getAdapterConfiguration().indexMessage;
                        b = b.replace(/\{ADINDEX\}/g, this.inventoryPod.getCurrentPodPosition().toString()), b = b.replace(/\{ADSTOTAL\}/g, this.inventoryPod.getTotalSlots().toString()), a = b
                    }
                    return this.adapter.getAdapterConfiguration().countdownMessage && (a.length > 0 && (a += " "), a += this.adapter.getAdapterConfiguration().countdownMessage), a
                }, b.prototype.skinIsEnabled = function() {
                    return (1 === this.adapter.getAdapterConfiguration().linearSkin || 2 === this.adapter.getAdapterConfiguration().linearSkin) && !h.detectDevice("phone")
                }, b.prototype.isLegacyInterstitial = function() {
                    return 1 === this.environmentData.integration && null === this.environmentData.integrationVersion
                }, b.prototype.setSlotPosition = function() {
                    if (!this._targetSlotPositionSet) {
                        this._targetSlotPositionSet = !0;
                        var a, b = this.environmentData.slot,
                            c = this.environmentData.parentWindow;
                        c.getComputedStyle && (a = c.getComputedStyle(b, null).getPropertyValue("position")), this._targetSlotOriginalStylePosition = void 0, this._targetSlotOriginalPriorityPosition = void 0, "static" === a && (this.logger.log("Setting slot element position to relative"), this._targetSlotOriginalStylePosition = b.style.getPropertyValue("position"), this._targetSlotOriginalPriorityPosition = b.style.getPropertyPriority("position"), b.style.setProperty("position", "relative", "important"))
                    }
                }, b.prototype.unsetSlotPosition = function() {
                    if (this._targetSlotPositionSet) {
                        this._targetSlotPositionSet = !1;
                        var a = this.environmentData.slot;
                        void 0 !== this._targetSlotOriginalStylePosition && (this.logger.log("Resetting slot element position to " + this._targetSlotOriginalStylePosition), a.style.setProperty("position", this._targetSlotOriginalStylePosition, this._targetSlotOriginalPriorityPosition))
                    }
                }, b
            }(e);
            return i
        }), define("LinearSkinFactory", ["require", "exports", "DefaultLinearSkin"], function(a, b, c) {
            var d = function() {
                function a() {}
                return a.getLinearSkinInstance = function(a, b) {
                    var d;
                    switch (a.getAdParameters().linearSkin) {
                        default:
                            d = new c(a, b)
                    }
                    return d
                }, a
            }();
            return d
        }), define("PigeonEvent", ["require", "exports"], function(a, b) {
            var c = function() {
                function a(a) {
                    this._extra = {}, this._name = a, this._time = Date.now() / 1e3
                }
                return a.prototype.addExtraParams = function(a) {
                    var b = this;
                    a && Object.keys(a).forEach(function(c) {
                        b._extra[c] = "" + a[c]
                    })
                }, a.prototype.addExtraParam = function(a, b) {
                    a && (this._extra[a] = "" + b)
                }, a.prototype.toDictionary = function() {
                    return {
                        name: this._name,
                        time: this._time,
                        extra: this._extra
                    }
                }, a
            }();
            return c
        }), define("PigeonLogger", ["require", "exports", "HTTP", "Logger", "Utils"], function(a, b, c, d, e) {
            var f = function() {
                function a() {}
                return a.logEvent = function(b) {
                    a._lastEventTime = Date.now(), a._eventQueue.push(b), null === a._delayTimer && (a._delayTimer = setTimeout(a.delayTimerHandler, 200))
                }, a.dispatchEventQueue = function() {
                    if (a._eventQueue.length > 0) {
                        a._logger.verbose("Logging " + a._eventQueue.length + " events");
                        var b = Date.now() / 1e3,
                            d = [];
                        a._eventQueue.forEach(function(a) {
                            d.push(a.toDictionary())
                        });
                        var f = {
                            seq: a._sequenceId++,
                            time: b,
                            app_id: 541974109282702,
                            app_ver: "2.5.5",
                            log_type: "client_event",
                            session_id: a.getSessionID(),
                            data: d
                        };
                        c.request({
                            url: "https://web.archive.org/web/20170109092628/https://graph.facebook.com/logging_client_events",
                            type: "POST",
                            timeout: null,
                            data: e.serialize({
                                access_token: "541974109282702|7d5d3313170a82367ae5fbb6f8d9aa6e",
                                message: JSON.stringify(f)
                            }),
                            xhrFields: {
                                withCredentials: !1
                            },
                            error: function(b, c, d) {
                                a._logger.error("Failed to communicate with logging endpoint, error=" + d)
                            }
                        }), a._eventQueue = []
                    }
                }, a.delayTimerHandler = function() {
                    a._delayTimer = null, a.dispatchEventQueue()
                }, a.getSessionID = function() {
                    var b = Date.now();
                    return (!a._sessionId || b - a._SESSION_TIMEOUT > a._lastEventTime) && (a._sessionId = b.toString(16) + "-" + (~~(16777215 * Math.random())).toString(16)), a._sessionId
                }, a._delayTimer = null, a._eventQueue = [], a._logger = new d("PigeonLogger"), a._sequenceId = 0, a._sessionId = null, a._SESSION_TIMEOUT = 18e4, a
            }();
            return f
        }), define("TrackingManager", ["require", "exports", "LogEvent", "LogEventType", "Logger", "PigeonEvent", "PigeonLogger"], function(a, b, c, d, e, f, g) {
            var h = function() {
                function a(a) {
                    this._environmentData = a, this._logger = new e("TrackingManager")
                }
                return a.prototype.dispatchTrackers = function(a, b) {
                    var e = this;
                    void 0 === a && (a = []), a.forEach(function(a) {
                        a.getUrls().forEach(function(f) {
                            b && Object.keys(b).forEach(function(a) {
                                var c = "\\[" + a + "\\]",
                                    d = b[a].toString();
                                f = f.replace(new RegExp(c, "gi"), d)
                            });
                            var g = "type=" + a.getType() + (a.getValue() ? ", value=" + a.getValue() : "") + ", url=" + f,
                                h = Date.now();
                            e._logger.log("Tracker load, " + g);
                            try {
                                var i = e._environmentData.topWindow ? e._environmentData.topWindow.document : document,
                                    j = i.createElement("img");
                                j.src = f, j.style.setProperty("display", "none", "important"), j.style.setProperty("width", "1px", "important"), j.style.setProperty("height", "1px", "important");
                                var k = function() {
                                    i.body.removeChild(j)
                                };
                                j.onload = function() {
                                    var a = (Date.now() - h) / 1e3;
                                    e._logger.log("Tracker complete, duration=" + a + "s, " + g), k()
                                }, j.onerror = function() {
                                    var a = (Date.now() - h) / 1e3;
                                    e._logger.log("Tracker error, duration=" + a + "s, " + g), k()
                                }, i.body.appendChild(j)
                            } catch (l) {
                                e._logger.error("Error loading tracker:", l);
                                var m = "Unknown error";
                                try {
                                    m = l.toString()
                                } catch (n) {}
                                e.registerLogEvent(c.eventWithType(d.TrackingPixelLoadError, {
                                    url: f,
                                    error: m
                                }))
                            }
                        })
                    })
                }, a.prototype.registerAdCandidate = function(a) {
                    this._adCandidate = a
                }, a.prototype.registerLogEvent = function(b) {
                    var c = new f(a.LIVERAIL_EVENT),
                        d = this._environmentData.getCurrentAdRequestParameters();
                    delete d.LR_BROWSER_FEATURES, delete d.LR_PLUGIN_BROWSER_FEATURES, c.addExtraParams(d), c.addExtraParam(a.ERROR_CODE, b.id), c.addExtraParam(a.ERROR_MSG, b.message), c.addExtraParam(a.ERROR_DETAIL, JSON.stringify(b.detail)), this._adCandidate && (c.addExtraParam(a.AD_LOAD_CLOCK, this._adCandidate.getLoadClock()), c.addExtraParam(a.AD_ADAPTER, this._adCandidate.adapter), c.addExtraParam(a.AD_SERVER, this._adCandidate.server), c.addExtraParam(a.AD_HAD_IMPRESSION, this._adCandidate.hadImpression()), c.addExtraParam(a.AD_TYPE, this._adCandidate.type), c.addExtraParam(a.AD_NID, this._adCandidate.networkID), c.addExtraParam(a.AD_COID, this._adCandidate.connectionID), c.addExtraParam(a.AD_SS, this._adCandidate.scenarios), c.addExtraParam(a.AD_NR, this._adCandidate.values), c.addExtraParam(a.AD_OID, this._adCandidate.orderID), c.addExtraParam(a.AD_OLID, this._adCandidate.orderLineID), c.addExtraParam(a.AD_CID, this._adCandidate.creativeID), c.addExtraParam(a.AD_UCID, this._adCandidate.uniqueCreativeID)), g.logEvent(c)
                }, a.prototype.unregisterAdCandidate = function() {
                    delete this._adCandidate
                }, a.LIVERAIL_EVENT = "liverail_sdk_internal", a.ERROR_CODE = "error_code", a.ERROR_MSG = "error_msg", a.ERROR_DETAIL = "error_detail", a.AD_ADAPTER = "ad_adapter", a.AD_SERVER = "ad_server", a.AD_LOAD_CLOCK = "ad_load_clock", a.AD_HAD_IMPRESSION = "ad_had_impression", a.AD_TYPE = "ad_type", a.AD_NID = "ad_nid", a.AD_COID = "ad_coid", a.AD_SS = "ad_ss", a.AD_NR = "ad_nr", a.AD_OID = "ad_oid", a.AD_OLID = "ad_olid", a.AD_CID = "ad_cid", a.AD_UCID = "ad_ucid", a
            }();
            return h
        }), define("VPAIDViewMode", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {}
                return a.normal = "normal", a.thumbnail = "thumbnail", a.fullscreen = "fullscreen", a
            }();
            return c
        }), define("AdManager", ["require", "exports", "AdapterConfiguration", "AdapterFactory", "AdExtensionManagerEvent", "AdExtensionManager", "AdManagerEvents", "AdProvider", "AdProviderEvent", "AdQualityManager.adquality", "AdQualityRules.adquality", "AdQualityStatistics.adquality", "ClickToPlayInterface", "CompanionManager", "EventManager", "InventoryPod", "InventoryPodHistory", "Logger", "LogEvent", "LogEventType", "LinearSkinFactory", "TrackingManager", "Utils", "VPAIDEvents", "VPAIDViewMode"], function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y) {
            var z = function() {
                function a(a) {
                    var b = this;
                    this._onVideoSlotContextMenu = function(a) {
                        w.checkWindowSanity() && a.preventDefault()
                    }, this._onVideoSlotVolumeChange = function() {
                        w.checkWindowSanity() && b._updateAdVolume(b._environmentData.videoSlot.muted ? 0 : b._environmentData.videoSlot.volume)
                    }, this._updateViewMode = function() {
                        if (w.checkWindowSanity()) {
                            var a = y.normal,
                                c = b._environmentData.parentWindow.document,
                                d = b._videoSlot;
                            (c.fullscreenEnabled || c.fullScreen || c.webkitIsFullScreen || c.mozFullScreen || c.msFullscreenEnabled || d && d.webkitDisplayingFullscreen) && (a = y.fullscreen), b._viewMode !== a && (b._adCandidate && b._state > 4 && b._state < 6 && (a === y.fullscreen ? b._trackingManager.dispatchTrackers(b._adCandidate.getTrackers("fullscreen")) : b._trackingManager.dispatchTrackers(b._adCandidate.getTrackers("leaveFullscreen"))), b._viewMode = a)
                        }
                    }, this._adapterFactory = new d, this._adLinear = a.getDefaultAdLinear(), this._adVolume = 1, this._adVolumeSet = !1, this._companionManager = new n, this._eventManager = new o(g), this._logger = new r("AdManager")
                }
                return a.prototype.getAdLinear = function() {
                    return this._adLinear
                }, a.prototype.getAdWidth = function() {
                    return this._adapter ? this._adapter.getAdWidth() : 0
                }, a.prototype.getAdHeight = function() {
                    return this._adapter ? this._adapter.getAdHeight() : 0
                }, a.prototype.getAdExpanded = function() {
                    return this._adapter ? this._adapter.getAdExpanded() : !1
                }, a.prototype.getAdSkippableState = function() {
                    return this._adapter ? this._adapter.getAdSkippableState() : !1
                }, a.prototype.getAdSkippableRemainingTime = function() {
                    return this._adapter ? this._adapter.getAdSkippableRemainingTime() : -2
                }, a.prototype.getAdRemainingTime = function() {
                    return this._adapter ? Math.ceil(this._adapter.getAdRemainingTime()) : -2
                }, a.prototype.getAdDuration = function() {
                    return this._adapter ? Math.ceil(this._adapter.getAdDuration()) : -2
                }, a.prototype.getAdVolume = function() {
                    return this._adapter && this._adapter.getAdVolume() >= 0 ? this._adapter.getAdVolume() : this._adVolume
                }, a.prototype.setAdVolume = function(a) {
                    var b = w.returnFloat(a);
                    isNaN(b) || (this._adVolumeSet = !0, this._updateAdVolume(b))
                }, a.prototype.getAdCompanions = function() {
                    return this._adapter ? this._adapter.getAdCompanions() : ""
                }, a.prototype.getAdIcons = function() {
                    return this._adapter ? this._adapter.getAdIcons() : !1
                }, a.prototype.handshakeVersion = function(a) {
                    return "2.0"
                }, a.prototype.initAd = function(a, b, c, d, e, g) {
                    this._destroy(), this._state = 1, this._registerEnvironmentData(g.environmentData), this._logger.log("Initializing with environmentData:", this._environmentData), this._inventoryPod = new p(this._environmentData.getAdParameters()), this._inventoryPodHistory = new q, this._trackingManager = new v(this._environmentData), this._registerAdProvider(this._environmentData), this._adExtensionManager = new f(this._environmentData), this._instantiateInventoryPodSlot()
                }, a.prototype.resizeAd = function(a, b, c) {
                    return this._adapter ? this._adapter.resizeAd(a, b, c) : void 0
                }, a.prototype.startAd = function() {
                    3 === this._state && this._startNextInventoryPodSlot()
                }, a.prototype.stopAd = function() {
                    if (this._state > 0) {
                        var a = this._state;
                        if (this._state = 2, a >= 4 && this._adapter) return this._adCandidate && this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("close")), void this._adapter.stopAd();
                        this._onInventoryPodComplete()
                    } else this._destroy(), this._eventManager.dispatch(g.AdStopped)
                }, a.prototype.pauseAd = function() {
                    return this._adapter ? this._adapter.pauseAd() : void 0
                }, a.prototype.resumeAd = function() {
                    return this._adapter ? this._adapter.resumeAd() : void 0
                }, a.prototype.expandAd = function() {
                    return this._adapter ? this._adapter.expandAd() : void 0
                }, a.prototype.collapseAd = function() {
                    return this._adapter ? this._adapter.collapseAd() : void 0
                }, a.prototype.skipAd = function() {
                    return this._adapter ? this._adapter.skipAd() : void 0
                }, a.prototype.subscribe = function(a, b, c) {
                    this._eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this._eventManager.unsubscribe(a, b)
                }, a.prototype._onAdClickThru = function(a, b, c) {
                    if (this._state < 5 || this._state >= 6) return void this._logger.debug("Video click occurred -- ad is not currently playing, ignoring");
                    if (this._logger.log("AdClickThru occurred, clickUrl=" + a, "clickId=" + b, "adManagerHandles=" + c), this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdClickThru, [a, b, c]), c && 0 === a.length) return void this._logger.log("Missing click URL, ignoring AdClickThru");
                    var d = "",
                        e = "",
                        f = !1;
                    if (c === !1) this._logger.log("Creative handles click, ignoring clickUrl");
                    else if (this._environmentData.getAdParameters().playerHandlesClick === !0) this._logger.log("Player handles click"), d = a, e = b, f = !0;
                    else if (this._logger.log("AdManager handles click, url=" + a), !this._environmentData.parentWindow.open(a, this._environmentData.getAdParameters().clickthruTarget)) return void this._registerLogEvent(s.eventWithType(t.AdClickThroughFailed, {
                        url: a
                    }));
                    this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("clickthru")), this._registerLogEvent(s.eventWithType(t.AdClickThrough, {
                        url: a,
                        playerHandles: f
                    })), this._eventManager.dispatch(g.AdClickThru, [d, e, f])
                }, a.prototype._onAdDurationChange = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdDurationChange), this._adCandidate.updateCreativeDuration(this._adapter.getAdDuration()), this._eventManager.dispatch(g.AdDurationChange)
                }, a.prototype._onAdError = function(a) {
                    this._logger.error("Received AdError from adapter, error=", a), this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdError, [a]), this._state = 6, this._adCandidate.registerComplete(), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("error"), {
                        ERRORCODE: a.id
                    }), this._registerLogEvent(a), this._onAdapterComplete()
                }, a.prototype._onAdExpandedChange = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdExpandedChange), this._eventManager.dispatch(g.AdExpandedChange)
                }, a.prototype._onAdImpression = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdImpression), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("impression")), this._registerLogEvent(s.eventWithType(t.AdImpression)), this._adSlot.registerImpression(), this._impressionCount += 1, this._state >= 3 && this._state < 5 && (this._state = 5, this._adCandidate.setProgressBoundary(0, this._adapter.getAdVolume(), null), this._registerAdQualityManager(), (0 === this._adVolume || this._environmentData.videoSlot && this._environmentData.videoSlot.muted) && this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("mute")), this._updateViewMode(), this._companionManager.showCompanions(this._adCandidate.getCompanionAds(), this._environmentData.companionPlacements, this._environmentData.parentWindow)), this._eventManager.dispatch(g.AdImpression)
                }, a.prototype._onAdInteraction = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdInteraction), this._eventManager.dispatch(g.AdInteraction)
                }, a.prototype._onAdLinearChange = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdLinearChange);
                    var a = this._adapter.getAdLinear();
                    this._adLinear !== a && (this._adLinear = a, this._eventManager.dispatch(g.AdLinearChange))
                }, a.prototype._onAdLoaded = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdLoaded), this._registerLogEvent(s.eventWithType(t.AdLoaded)), this._registerLinearSkin(), this._registerDocument(), this._adapter.startAd()
                }, a.prototype._onAdLog = function(a) {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdLog, [a]), this._eventManager.dispatch(g.AdLog, [a])
                }, a.prototype._onAdPaused = function() {
                    this._state >= 5 && this._state < 6 && (this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdPaused), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("pause")), this._eventManager.dispatch(g.AdPaused))
                }, a.prototype._onAdPlaying = function() {
                    this._state >= 5 && this._state < 6 && (this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdPlaying), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("resume")), this._eventManager.dispatch(g.AdPlaying))
                }, a.prototype._onAdSizeChange = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdSizeChange), this._updateViewMode(), this._eventManager.dispatch(g.AdSizeChange)
                }, a.prototype._onAdSkippableStateChange = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdSkippableStateChange), this._eventManager.dispatch(g.AdSkippableStateChange)
                }, a.prototype._onAdSkipped = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdSkipped), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("skip")), this._registerAdapterProgressFinalBoundary(), this._eventManager.dispatch(g.AdSkipped)
                }, a.prototype._onAdStarted = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdStarted), this._onAdLinearChange()
                }, a.prototype._onAdStopped = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdStopped), this._state > 3 && (this._state = 6), this._adCandidate.registerComplete(), this._onAdapterComplete()
                }, a.prototype._onAdUserAcceptInvitation = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdUserAcceptInvitation), this._eventManager.dispatch(g.AdUserAcceptInvitation)
                }, a.prototype._onAdUserClose = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdUserClose), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("close")), this._eventManager.dispatch(g.AdUserClose)
                }, a.prototype._onAdUserMinimize = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdUserMinimize), this._eventManager.dispatch(g.AdUserMinimize)
                }, a.prototype._onAdVideoComplete = function() {
                    this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("view", 100)), this._registerAdapterProgressFinalBoundary(), this._eventManager.dispatch(g.AdVideoComplete)
                }, a.prototype._onAdVideoFirstQuartile = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdVideoFirstQuartile), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("view", 25)), this._eventManager.dispatch(g.AdVideoFirstQuartile)
                }, a.prototype._onAdVideoMidpoint = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdVideoMidpoint), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("view", 50)), this._eventManager.dispatch(g.AdVideoMidpoint)
                }, a.prototype._onAdVideoStart = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdVideoStart), this._eventManager.dispatch(g.AdVideoStart)
                }, a.prototype._onAdVideoThirdQuartile = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdVideoThirdQuartile), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("view", 75));
                    var a = 0;
                    this._adQualityManager && (a = this._adCandidate.getViewableSeconds() + this._adQualityManager.getStatistics().viewableSeconds), this._registerLogEvent(s.eventWithType(t.AdVideoThirdQuartile, {
                        currentTime: this._getAdapterCurrentTime(),
                        duration: this._adapter.getAdDuration(),
                        viewableSeconds: a
                    })), this._eventManager.dispatch(g.AdVideoThirdQuartile)
                }, a.prototype._onAdVolumeChange = function() {
                    this._adExtensionManager.onVPAIDEvent(this._adCandidate, x.AdVolumeChange), this._adVolume > 0 && 0 === this._adapter.getAdVolume() ? this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("mute")) : 0 === this._adVolume && this._adapter.getAdVolume() > 0 && this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("unmute")), this._adVolume = this._adapter.getAdVolume(), this._eventManager.dispatch(g.AdVolumeChange)
                }, a.prototype._beginInventoryPod = function() {
                    this._linearSkin = u.getLinearSkinInstance(this._environmentData, this._inventoryPod), this._adVolumeSet || (this._adVolume = this._environmentData.videoSlot.volume), this._inventoryPod.setStartTime()
                }, a.prototype._destroy = function() {
                    if (this._logger.debug("destroy()"), this._state = 0, this._unregisterAdProvider(), this._unregisterAdQualityManager(), this._unregisterDocument(), this._adapter) {
                        var a = this._adapter;
                        this._unregisterAdapter(), a.destroy()
                    }
                    this._adExtensionManager && (this._adExtensionManager.unsubscribe(this._onAdExtensionManagerInitComplete, e.InitComplete), this._adExtensionManager.unsubscribe(this._onAdExtensionManagerExtensionUncaughtError, e.ExtensionUncaughtError), this._adExtensionManager.unsubscribe(this._onAdExtensionManagerExtensionInitComplete, e.ExtensionInitComplete), this._adExtensionManager.destroy(), this._adExtensionManager = null), this._unregisterLinearSkin(), this._unregisterEnvironmentData(), this._unregisterVideoSlot(), this._unregisterClickToPlayInterface(), this._impressionCount = 0, this._trackingManager = null, this._inventoryPodHistory = null, this._inventoryPod = null, this._inventoryPodSlot = null, this._adSlot = null, this._adCandidate = null, this._linearSkin = null, this._videoElementControls = void 0, this._viewMode = y.normal
                }, a.prototype._dumpAdQualityStats = function() {
                    if (!this._adQualityManager) return new l(.5).getData();
                    var a = this._adQualityManager.getStatistics();
                    return this._adQualityManager.resetStatistics(), a
                }, a.prototype._getAdapterCurrentTime = function() {
                    if (this._adapter) {
                        var a = this._adapter.getAdDuration(),
                            b = this._adapter.getAdRemainingTime();
                        if (a >= 0 && b >= 0) return this._adapter.getAdDuration() - this._adapter.getAdRemainingTime()
                    }
                    return -1
                }, a.prototype._getAdQualityElement = function() {
                    var a = "Element";
                    return w.elementIsInstanceOfClass(this._environmentData.slot, a) ? this._environmentData.slot : null
                }, a.prototype._initializeInventoryPodSlot = function() {
                    var a = this;
                    this._preInstantiateAdapters(this._inventoryPodSlot.getAdResponse().getUniqueAdapterIds(), function() {
                        a._onInventoryPodSlotLoaded()
                    })
                }, a.prototype._instantiateInventoryPodSlot = function() {
                    var a = this._inventoryPodSlot;
                    return this._inventoryPodSlot = this._inventoryPod.getNewInventoryPodSlot(), null !== this._inventoryPodSlot && (null === this._adSlot || this._inventoryPod.isSlotBased() || this._inventoryPod.isDurationBased() && a && a.getAdResponse() && a.getAdResponse().getAdCandidateCount() > 0) ? (this._logger.debug("Instantiated new inventory pod slot:", this._inventoryPodSlot), void this._startInventoryPodSlot()) : void this._onInventoryPodComplete()
                }, a.prototype._onAdapterComplete = function() {
                    this._state > 4 && (this._state = 4), this._unregisterAdQualityManager(), this._unregisterAdapter(), this._unregisterLinearSkin(), this._unregisterDocument(), this._onAdCandidateComplete()
                }, a.prototype._onAdapterInstantiated = function() {
                    3 === this._state && (this._state = 4, this._eventManager.dispatch(g.AdStarted))
                }, a.prototype._onAdapterProgress = function() {
                    var b = this._getAdapterCurrentTime(),
                        c = this._adCandidate.getLastProgressTime();
                    if (b >= 0) {
                        if (this._adQualityManager && this._adQualityManager.registerProgress(b - c), this._adCandidate.registerProgress(b, this._adapter.getAdVolume()), c > b) return void this._onAdapterProgressBoundary(Math.floor(c));
                        var d = 2 * this._adCandidate.getLastProgressMeasurementTime();
                        if (b > c + d) return void this._onAdapterProgressBoundary(Math.floor(c));
                        b - this._adCandidate.getLastProgressBoundaryTime() >= a._PROGRESS_BOUNDARY && this._onAdapterProgressBoundary(Math.floor(b))
                    }
                }, a.prototype._onAdapterProgressBoundary = function(a) {
                    if (0 !== this._adCandidate.getProgressCount()) {
                        var b = this._dumpAdQualityStats(),
                            c = this._adCandidate.getAvgVolume(),
                            d = this._adCandidate.getMinVolume();
                        this._logger.debug("Adapter progress boundary reached, boundaryTime=" + a + " avgVolume=" + c + " minVolume=" + d + " adQualityStats=", b), this._trackingManager.dispatchTrackers(this._adCandidate.getTrackers("time"), {
                            INTERVAL_START_TIME: this._adCandidate.getLastProgressBoundaryTime(),
                            INTERVAL_END_TIME: a,
                            VOLUME_AVG: c,
                            VOLUME_MIN: d,
                            VIEWABLE_RATIO_AVG: b.avgViewableRatio,
                            VIEWABLE_RATIO_MIN: b.minViewableRatio
                        }), this._registerLogEvent(s.eventWithType(t.AdProgressBoundary, {
                            startTime: this._adCandidate.getLastProgressBoundaryTime(),
                            endTime: a,
                            volumeAvg: c,
                            volumeMin: d,
                            stats: b
                        })), this._adCandidate.setProgressBoundary(a, this._adapter.getAdVolume(), b)
                    }
                }, a.prototype._onAdCandidateComplete = function() {
                    this._adExtensionManager.onAdCandidateEnd(this._adCandidate), this._companionManager.hideCompanions(this._adCandidate.getCompanionAds(), this._environmentData.companionPlacements, this._environmentData.parentWindow), this._adCandidate.hadImpression() && this._inventoryPod.increasePlayedDuration(this._adCandidate.getDuration()), this._logger.log("Ad pod playedDuration=" + this._inventoryPod.getPlayedDuration() + "s elapsedRealtime=" + this._inventoryPod.getElapsedRealtime() + "s"), this._inventoryPodHistory.registerAdCandidateCompletion(this._adCandidate), this._trackingManager.unregisterAdCandidate(), 2 === this._state ? this._onAdSlotComplete() : this._startNextAdCandidate()
                }, a.prototype._onAdExtensionManagerExtensionUncaughtError = function(a) {
                    this._logger.warn("AdExtension error:", a), this._registerLogEvent(a)
                }, a.prototype._onAdExtensionManagerExtensionInitComplete = function(a) {
                    this._registerLogEvent(a)
                }, a.prototype._onAdExtensionManagerInitComplete = function() {
                    this._adExtensionManager.unsubscribe(this._onAdExtensionManagerInitComplete, e.InitComplete), this._initializeInventoryPodSlot()
                }, a.prototype._onAdProviderError = function(a) {
                    this._registerLogEvent(a), this._onInventoryPodComplete(a)
                }, a.prototype._onAdProviderSuccess = function(a) {
                    0 === this._inventoryPod.getPodSlotIndex() && null !== a.getPlacementDefinition() && this._inventoryPod.setPlacementDefinition(a.getPlacementDefinition()), this._inventoryPodSlot.setAdResponse(a), this._environmentData.setSessionId(a.getTrid()), this._adExtensionManager.subscribe(this._onAdExtensionManagerInitComplete, e.InitComplete, this), this._adExtensionManager.subscribe(this._onAdExtensionManagerExtensionUncaughtError, e.ExtensionUncaughtError, this), this._adExtensionManager.subscribe(this._onAdExtensionManagerExtensionInitComplete, e.ExtensionInitComplete, this), this._adExtensionManager.initialize(a)
                }, a.prototype._onAdSlotComplete = function() {
                    var a = this._adSlot;
                    this._adSlot = null, this._inventoryPodSlot.registerAdSlotCompletion(a), a.hadImpression() || 2 === this._state ? this._onInventoryPodSlotComplete() : !a.hadImpression() && this._inventoryPodSlot.getRetryCount() < this._environmentData.getAdParameters().maximumRetry ? (this._logger.log("Inventory pod slot failed, retrying"), this._inventoryPodSlot.registerRetry(), this._environmentData.setRetryIndex(this._inventoryPodSlot.getRetryCount()), this._startInventoryPodSlot()) : this._startNextAdSlot()
                }, a.prototype._onAdSourceRequestError = function(a) {
                    var b = a.getAdSource();
                    this._inventoryPodHistory.registerAdSourceFailure(b)
                }, a.prototype._onClickToPlay = function() {
                    this._logger.log("User initiated click-to-play"), this._unregisterClickToPlayInterface(), this._runAdCandidate()
                }, a.prototype._onInventoryPodComplete = function(a) {
                    var b = this._impressionCount > 0,
                        c = this._state;
                    this._videoSlot && this._videoSlot.pause(), this._destroy(), b || 2 === c ? this._eventManager.dispatch(g.AdStopped) : this._eventManager.dispatch(g.AdError, [a || s.eventWithType(t.NoFill)])
                }, a.prototype._onInventoryPodSlotComplete = function() {
                    this._inventoryPod.registerInventoryPodSlotCompletion(this._inventoryPodSlot), 2 === this._state ? this._onInventoryPodComplete() : this._instantiateInventoryPodSlot()
                }, a.prototype._onInventoryPodSlotLoaded = function() {
                    return this._adSlot = this._inventoryPodSlot.getAdResponse().getNextAdSlot(), this._adSlot && this._trackingManager.dispatchTrackers(this._adSlot.getTrackers("adslot")), this._registerLogEvent(s.eventWithType(t.AdPodSlotLoaded, {
                        slotIsElement: this._environmentData.slotIsElement(),
                        videoSlotIsElement: this._environmentData.videoSlotIsElement()
                    })), this._adSlot && 0 !== this._adSlot.getAdCandidateCount() ? void(this._state < 3 ? (this._state = 3, this._eventManager.dispatch(g.AdLoaded)) : this._startNextInventoryPodSlot()) : void this._onInventoryPodSlotComplete()
                }, a.prototype._onLogEvent = function(a) {
                    this._registerLogEvent(a)
                }, a.prototype._preInstantiateAdapters = function(a, b) {
                    var c = this;
                    if (a.length > 0) {
                        this._logger.debug("Inventory pod slot requires adapters: " + a.join(","));
                        var d = 0,
                            e = function(e, f) {
                                null === f ? c._logger.error("Failed to instantiate " + e + "Adapter") : c._logger.debug(e + "Adapter instance ready"), d += 1, d === a.length && b()
                            };
                        a.forEach(function(a) {
                            c._adapterFactory.getAdapterInstance(a, function(b) {
                                e(a, b)
                            })
                        })
                    } else b()
                }, a.prototype._registerAdapter = function() {
                    this._logger.log("Setting " + this._adCandidate.adapter + "Adapter volume to " + this._adVolume), this._adapter.setAdVolume(this._adVolume), this._registerAdapterSubscriptions(this._adapter)
                }, a.prototype._registerAdapterProgressFinalBoundary = function() {
                    var a = this._getAdapterCurrentTime();
                    0 > a && (a = this._adCandidate.getLastProgressTime()), this._onAdapterProgressBoundary(Math.ceil(a))
                }, a.prototype._registerAdapterSubscriptions = function(a) {
                    this._logger.log("Registering event subscriptions on adapter instance:", a), a.subscribe(this._onAdLoaded, g.AdLoaded, this), a.subscribe(this._onAdStarted, g.AdStarted, this), a.subscribe(this._onAdStopped, g.AdStopped, this), a.subscribe(this._onAdSkipped, g.AdSkipped, this), a.subscribe(this._onAdSkippableStateChange, g.AdSkippableStateChange, this), a.subscribe(this._onAdSizeChange, g.AdSizeChange, this), a.subscribe(this._onAdLinearChange, g.AdLinearChange, this), a.subscribe(this._onAdDurationChange, g.AdDurationChange, this), a.subscribe(this._onAdExpandedChange, g.AdExpandedChange, this), a.subscribe(this._onAdVolumeChange, g.AdVolumeChange, this), a.subscribe(this._onAdImpression, g.AdImpression, this), a.subscribe(this._onAdVideoStart, g.AdVideoStart, this), a.subscribe(this._onAdVideoFirstQuartile, g.AdVideoFirstQuartile, this),
                        a.subscribe(this._onAdVideoMidpoint, g.AdVideoMidpoint, this), a.subscribe(this._onAdVideoThirdQuartile, g.AdVideoThirdQuartile, this), a.subscribe(this._onAdVideoComplete, g.AdVideoComplete, this), a.subscribe(this._onAdClickThru, g.AdClickThru, this), a.subscribe(this._onAdInteraction, g.AdInteraction, this), a.subscribe(this._onAdUserAcceptInvitation, g.AdUserAcceptInvitation, this), a.subscribe(this._onAdUserMinimize, g.AdUserMinimize, this), a.subscribe(this._onAdUserClose, g.AdUserClose, this), a.subscribe(this._onAdPaused, g.AdPaused, this), a.subscribe(this._onAdPlaying, g.AdPlaying, this), a.subscribe(this._onAdLog, g.AdLog, this), a.subscribe(this._onAdError, g.AdError, this), a.subscribe(this._onLogEvent, g.LogEvent, this), a.subscribe(this._onAdapterProgress, g.AdProgress, this)
                }, a.prototype._registerAdProvider = function(a) {
                    this._adProvider || (this._adProvider = new h(a), this._adProvider.subscribe(this._onAdProviderSuccess, i.Success, this), this._adProvider.subscribe(this._onAdProviderError, i.Error, this), this._adProvider.subscribe(this._onAdSourceRequestError, i.AdSourceRequestError, this))
                }, a.prototype._registerClickToPlayInterface = function() {
                    this._logger.log("Registering click-to-play interface"), this._clickToPlayInterface = new m(this._environmentData), this._clickToPlayInterface.subscribe(this._onClickToPlay, m.EVENT_CLICK, this), this._clickToPlayInterface.register()
                }, a.prototype._registerDocument = function() {
                    w.addDocumentFullscreenEventListener(this._environmentData.parentWindow.document, this._updateViewMode, !1), this._videoSlot && (this._videoSlot.addEventListener("webkitbeginfullscreen", this._updateViewMode, !1), this._videoSlot.addEventListener("webkitendfullscreen", this._updateViewMode, !1))
                }, a.prototype._registerEnvironmentData = function(a) {
                    this._unregisterEnvironmentData(), this._environmentData = a
                }, a.prototype._registerLinearSkin = function() {
                    this._linearSkin.subscribe(this._onAdClickThru, g.AdClickThru, this), this._linearSkin.subscribe(this._onLogEvent, g.LogEvent, this), this._linearSkin.register(this._adapter, this._adCandidate)
                }, a.prototype._registerLogEvent = function(a) {
                    this._trackingManager.registerLogEvent(a)
                }, a.prototype._registerVideoSlot = function(a) {
                    a && (this._videoSlot = a, this._videoSlot.pause(), this._videoSlot.controls !== !1 && (this._logger.verbose("Preserving controls from videoSlot:", this._videoSlot.controls), this._videoElementControls = this._videoSlot.controls), this._logger.verbose("Setting videoSlot controls to false"), this._videoSlot.controls = !1, this._videoSlot.addEventListener("volumechange", this._onVideoSlotVolumeChange, !1), this._videoSlot.addEventListener("contextmenu", this._onVideoSlotContextMenu, !0))
                }, a.prototype._registerAdQualityManager = function() {
                    var a = this;
                    if (!this._adQualityManager) {
                        var b = this._getAdQualityElement(),
                            c = w.getParentWindowOfElement(b);
                        if (b && c) {
                            var d = k.mrc(function(b) {
                                    a._logger.log("MRC viewability test complete:", b), b.results.passed && (a._trackingManager.dispatchTrackers(a._adCandidate.getTrackers("viewable_mrc")), a._registerLogEvent(s.eventWithType(t.MRCViewable, b)))
                                }),
                                e = [d];
                            this._logger.debug("Registering ad quality manager, element=", b, "parentWindow=", c, "rules=", e), this._adQualityManager = new j(b, c, e)
                        }
                    }
                }, a.prototype._runAdCandidate = function() {
                    var a = this;
                    3 === this._state && this._beginInventoryPod(), this._logger.log("Running ad candidate:", this._adCandidate), this._adapterFactory.getAdapterInstance(this._adCandidate.adapter, function(b) {
                        null !== b ? (a._onAdapterInstantiated(), a._adapter = b, a._logger.log("Registering " + a._adCandidate.adapter + "Adapter instance:", a._adapter), a._registerAdapter(), a._adCandidate.registerAdapterInstance(b), a._adCandidate.registerLoad(), a._adExtensionManager.onAdCandidateStart(a._adCandidate, a._getAdQualityElement()), a._adapter.initAd(a._environmentData.initWidth, a._environmentData.initHeight, a._environmentData.getAdParameters().viewMode, a._environmentData.getAdParameters().desiredBitrate, null, {
                            slot: a._environmentData.slot,
                            videoSlot: a._environmentData.videoSlot,
                            videoSlotCanAutoPlay: !0,
                            environmentData: a._environmentData,
                            adCandidate: a._adCandidate,
                            adapterConfiguration: new c(a._environmentData, a._inventoryPod.getPlacementDefinition())
                        })) : (a._logger.error(a._adCandidate.adapter + "Adapter not available"), a._registerLogEvent(s.eventWithType(t.AdapterMising, {
                            adapterID: a._adCandidate.adapter
                        })), a._onAdapterComplete())
                    })
                }, a.prototype._startInventoryPodSlot = function() {
                    var a = this;
                    this._logger.log("Inventory pod slot " + this._inventoryPod.getPodSlotIndex() + ", retries: " + this._inventoryPodSlot.getRetryCount() + " -------------------------------------------------------"), this._environmentData.setSlotIndex(this._inventoryPod.getPodSlotIndex()), this._environmentData.setRetryIndex(this._inventoryPodSlot.getRetryCount()), this._environmentData.setPodPosition(this._inventoryPod.getCurrentPodPosition()), this._environmentData.setRemainingDuration(this._inventoryPod.getRemainingDuration()), this._environmentData.setFailedConnectionIds(this._inventoryPodHistory.getFailedConnectionIds()), this._environmentData.setServedCreativeIds(this._inventoryPodHistory.getServedCreativeIds()), this._environmentData.setFailedCreativeIds(this._inventoryPodHistory.getFailedCreativeIds()), this._environmentData.updateCurrentAdParameters(function() {
                        a._environmentData.browserMeasurementError && (a._logger.warn("Browser measurement error:", a._environmentData.browserMeasurementError), a._registerLogEvent(s.eventWithType(t.BrowserMeasurementError, {
                            error: a._environmentData.browserMeasurementError
                        }))), a._adProvider.getAd(a._environmentData.getCurrentAdRequestParameters())
                    })
                }, a.prototype._startNextAdCandidate = function() {
                    if (this._adCandidate = this._adSlot.getNextAdCandidate(), null !== this._adCandidate) {
                        if (this._trackingManager.registerAdCandidate(this._adCandidate), this._videoSlot || this._registerVideoSlot(this._environmentData.videoSlot), 3 === this._state && !this._environmentData.videoSlotCanAutoPlay) return void this._registerClickToPlayInterface();
                        this._runAdCandidate()
                    } else this._onAdSlotComplete()
                }, a.prototype._startNextAdSlot = function() {
                    null === this._adSlot ? this._onInventoryPodSlotComplete() : this._startNextAdCandidate()
                }, a.prototype._startNextInventoryPodSlot = function() {
                    this._startNextAdSlot()
                }, a.prototype._updateAdVolume = function(a) {
                    this._adVolume !== a && (this._adapter ? this._adapter.setAdVolume(a) : (this._adVolume = a, this._eventManager.dispatch(g.AdVolumeChange)))
                }, a.prototype._unregisterAdapter = function() {
                    this._adapter && (this._unregisterAdapterSubscriptions(this._adapter), this._adapter = null)
                }, a.prototype._unregisterAdapterSubscriptions = function(a) {
                    this._logger.log("Unregistering event subscriptions on adapter instance:", a), a.unsubscribe(this._onAdLoaded, g.AdLoaded), a.unsubscribe(this._onAdStarted, g.AdStarted), a.unsubscribe(this._onAdStopped, g.AdStopped), a.unsubscribe(this._onAdSkipped, g.AdSkipped), a.unsubscribe(this._onAdSkippableStateChange, g.AdSkippableStateChange), a.unsubscribe(this._onAdSizeChange, g.AdSizeChange), a.unsubscribe(this._onAdLinearChange, g.AdLinearChange), a.unsubscribe(this._onAdDurationChange, g.AdDurationChange), a.unsubscribe(this._onAdExpandedChange, g.AdExpandedChange), a.unsubscribe(this._onAdVolumeChange, g.AdVolumeChange), a.unsubscribe(this._onAdImpression, g.AdImpression), a.unsubscribe(this._onAdVideoStart, g.AdVideoStart), a.unsubscribe(this._onAdVideoFirstQuartile, g.AdVideoFirstQuartile), a.unsubscribe(this._onAdVideoMidpoint, g.AdVideoMidpoint), a.unsubscribe(this._onAdVideoThirdQuartile, g.AdVideoThirdQuartile), a.unsubscribe(this._onAdVideoComplete, g.AdVideoComplete), a.unsubscribe(this._onAdClickThru, g.AdClickThru), a.unsubscribe(this._onAdInteraction, g.AdInteraction), a.unsubscribe(this._onAdUserAcceptInvitation, g.AdUserAcceptInvitation), a.unsubscribe(this._onAdUserMinimize, g.AdUserMinimize), a.unsubscribe(this._onAdUserClose, g.AdUserClose), a.unsubscribe(this._onAdPaused, g.AdPaused), a.unsubscribe(this._onAdPlaying, g.AdPlaying), a.unsubscribe(this._onAdLog, g.AdLog), a.unsubscribe(this._onAdError, g.AdError), a.unsubscribe(this._onLogEvent, g.LogEvent), a.unsubscribe(this._onAdapterProgress, g.AdProgress)
                }, a.prototype._unregisterAdProvider = function() {
                    this._adProvider && (this._adProvider.cancel(), this._adProvider.unsubscribe(this._onAdProviderSuccess, i.Success), this._adProvider.unsubscribe(this._onAdProviderError, i.Error), this._adProvider.unsubscribe(this._onAdSourceRequestError, i.AdSourceRequestError), this._adProvider = null)
                }, a.prototype._unregisterClickToPlayInterface = function() {
                    this._clickToPlayInterface && (this._logger.log("Unregistering click-to-play interface"), this._clickToPlayInterface.unsubscribe(this._onClickToPlay, m.EVENT_CLICK), this._clickToPlayInterface.unregister(), this._clickToPlayInterface = null)
                }, a.prototype._unregisterDocument = function() {
                    this._environmentData && this._environmentData.parentWindow && w.removeDocumentFullscreenEventListener(this._environmentData.parentWindow.document, this._updateViewMode, !1), this._videoSlot && (this._videoSlot.removeEventListener("webkitbeginfullscreen", this._updateViewMode, !1), this._videoSlot.removeEventListener("webkitendfullscreen", this._updateViewMode, !1))
                }, a.prototype._unregisterEnvironmentData = function() {
                    this._environmentData && (this._environmentData = null)
                }, a.prototype._unregisterLinearSkin = function() {
                    this._linearSkin && (this._linearSkin.unsubscribe(this._onAdClickThru, g.AdClickThru), this._linearSkin.unsubscribe(this._onLogEvent, g.LogEvent), this._linearSkin.unregister())
                }, a.prototype._unregisterVideoSlot = function() {
                    this._videoSlot && (void 0 !== this._videoElementControls && (this._logger.verbose("Restoring controls on videoSlot to:", this._videoElementControls), this._videoSlot.controls = this._videoElementControls), this._videoSlot.removeEventListener("volumechange", this._onVideoSlotVolumeChange, !1), this._videoSlot.removeEventListener("contextmenu", this._onVideoSlotContextMenu, !0), this._videoSlot = null)
                }, a.prototype._unregisterAdQualityManager = function() {
                    this._adQualityManager && this._adQualityManager.destroy(), this._adQualityManager = null
                }, a._PROGRESS_BOUNDARY = 5, a
            }();
            return z
        }), define("FlashVPAIDBridge", ["require", "exports", "EventManager", "Logger", "Utils", "VPAIDEvents"], function(a, b, c, d, e, f) {
            var g = function() {
                function a(a, b, e, g) {
                    var h = this;
                    this._adVolume = -1, this._creativeUrl = a, this._eventManager = new c(f), this._flashBuild = "201406161543", this._flashVPAID = null, this._logger = new d("FlashVPAIDBridge"), this._slot = b.slot, this._slotWindow = b.parentWindow, this._bgcolor = b.getAdParameters().bgcolor, this._destroy(), this._loadFlashVPAID(function(a) {
                        h._flashVPAID = a, h._logger.log("Loaded Flash VPAID:", h._flashVPAID), e(h)
                    }, function(a) {
                        h._logger.error("Error loading Flash VPAID bridge:", a), g(a)
                    })
                }
                return a.prototype.getAdLinear = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdLinear() : !1
                }, a.prototype.getAdWidth = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdWidth() : 0
                }, a.prototype.getAdHeight = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdHeight() : 0
                }, a.prototype.getAdExpanded = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdExpanded() : !1
                }, a.prototype.getAdSkippableState = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdSkippableState() : !1
                }, a.prototype.getAdSkippableRemainingTime = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdSkippableRemainingTime() : -2
                }, a.prototype.getAdRemainingTime = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdRemainingTime() : -2
                }, a.prototype.getAdDuration = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdDuration() : -2
                }, a.prototype.getAdVolume = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdVolume() : this._adVolume
                }, a.prototype.setAdVolume = function(a) {
                    this._adVolume = a, this._bridgeInterfaceExists() && this._flashVPAID.setAdVolume(a)
                }, a.prototype.getAdCompanions = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdCompanions() : ""
                }, a.prototype.getAdIcons = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.getAdIcons() : !1
                }, a.prototype.handshakeVersion = function(a) {
                    return a
                }, a.prototype.initAd = function(a, b, c, d, f, g) {
                    if (this._logger.log("initAd() width:", a, " height:", b, " viewMode:", c, "desiredBitrate:", d, "creativeData:", f, "environmentVars:", g), this._bridgeInterfaceExists()) {
                        this._adVolume > -1 && (this._logger.debug("Setting Flash VPAID adVolume property to " + this._adVolume), this._flashVPAID.setAdVolume(this._adVolume));
                        var h = f.AdParameters || "";
                        this._flashVPAID.initAd(-1, -1, c, d, h, e.stringifyParameterObject(g))
                    }
                }, a.prototype.resizeAd = function(a, b, c) {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.resizeAd(a, b, c) : void 0
                }, a.prototype.startAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.startAd() : void 0
                }, a.prototype.stopAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.stopAd() : void 0
                }, a.prototype.pauseAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.pauseAd() : void 0
                }, a.prototype.resumeAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.resumeAd() : void 0
                }, a.prototype.expandAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.expandAd() : void 0
                }, a.prototype.collapseAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.collapseAd() : void 0
                }, a.prototype.skipAd = function() {
                    return this._bridgeInterfaceExists() ? this._flashVPAID.skipAd() : void 0
                }, a.prototype.subscribe = function(a, b, c) {
                    this._eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this._eventManager.unsubscribe(a, b)
                }, a.prototype.getAdElement = function() {
                    return this._flashVPAID
                }, a.prototype._bridgeInterfaceExists = function() {
                    return this._flashVPAID && e.isFunction(this._flashVPAID.handshakeVersion)
                }, a.prototype._destroy = function() {
                    this._unloadFlashVPAID(), this._flashContainer = null, this._flashVPAID = null
                }, a.prototype._loadFlashVPAID = function(b, c) {
                    var d, f, g, h, i, j = this,
                        k = "",
                        l = {
                            onInitComplete: function() {
                                b(g)
                            },
                            onInitError: function(a) {
                                c(a)
                            },
                            onVPAIDEvent: function(a) {
                                return j._onVPAIDEvent(a)
                            }
                        };
                    this._slotWindow.LiveRail || (this._slotWindow.LiveRail = {}), this._slotWindow.LiveRail.VPAIDListeners || (this._slotWindow.LiveRail.VPAIDListeners = {}), a._instanceCount += 1, f = "LiveRail.VPAIDListeners.FlashVPAIDBridge_" + a._instanceCount, h = e.getCDNPrefix(this._slotWindow) + "/swf/ui/vpaid-player.swf", h += "?build=" + this._flashBuild, d = "jscontext=" + f, d += "&vpaidURL=" + encodeURIComponent(this._creativeUrl), d += "&allowDomains=*", d += "&currentSecurityDomain=false", k += '<object style="display: block; width: 100%; height: 100%;"', navigator.userAgent.match(/MSIE/i) ? (k += ' id="' + f + '"', k += ' name="' + f + '"', k += ' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">', k += '<param name="movie" value="' + h + '" />') : (k += ' data="' + h + '"', k += ' type="application/x-shockwave-flash">'), k += '<param name="quality" value="high" />', k += '<param name="allowfullscreen" value="true" />', k += '<param name="allowscriptaccess" value="always" />', k += '<param name="flashvars" value="' + d + '" />', this._bgcolor ? (k += '<param name="wmode" value="opaque" />', k += '<param name="bgcolor" value="#' + this._bgcolor + '" />') : k += '<param name="wmode" value="transparent" />', k += "</object>", this._slotWindow.LiveRail.VPAIDListeners["FlashVPAIDBridge_" + a._instanceCount] = l, this._flashContainer = this._slotWindow.document.createElement("div"), this._flashContainer.style.position = "absolute", this._flashContainer.style.top = "0px", this._flashContainer.style.left = "0px", this._flashContainer.style.width = "100%", this._flashContainer.style.height = "100%";
                    var m = this._slot;
                    this._slotWindow.getComputedStyle ? i = this._slotWindow.getComputedStyle(this._slot, null).getPropertyValue("position") : m.currentStyle && (i = m.currentStyle.position), this._targetSlotOriginalPosition = void 0, "static" === i && (this._targetSlotOriginalPosition = this._slot.style.position, this._slot.style.position = "relative"), this._slot.appendChild(this._flashContainer), this._flashContainer.innerHTML = k, g = this._flashContainer.childNodes[0], this._logger.verbose("Loaded JS-Flash event interface:", l)
                }, a.prototype._onVPAIDEvent = function(a) {
                    var b = this;
                    f.hasOwnProperty(a.type) && window.setTimeout(function() {
                        switch (b._logger.verbose("Received " + a.type + " event from Flash bridge:", a, ")"), a.type) {
                            case f.AdClickThru:
                                b._eventManager.dispatch(f.AdClickThru, [a.data.url, a.data.id, a.data.playerHandles]);
                                break;
                            case f.AdInteraction:
                                b._eventManager.dispatch(f.AdInteraction, [a.data.id]);
                                break;
                            case f.AdLog:
                                b._eventManager.dispatch(f.AdLog, [a.data.message]);
                                break;
                            case f.AdStopped:
                                b._destroy(), b._eventManager.dispatch(f.AdStopped);
                                break;
                            case f.AdError:
                                b._destroy(), b._eventManager.dispatch(f.AdError, [a.data]);
                                break;
                            default:
                                b._eventManager.dispatch(a.type)
                        }
                    }, 0)
                }, a.prototype._unloadFlashVPAID = function() {
                    this._slot && this._flashContainer && (this._slot.removeChild(this._flashContainer), this._logger.log("Unloaded Flash VPAID"), this._targetSlotOriginalPosition && (this._logger.log("Resetting slot element position to " + this._targetSlotOriginalPosition), this._slot.style.position = this._targetSlotOriginalPosition))
                }, a._instanceCount = 0, a
            }();
            return g
        }), define("FlashAdManagerController", ["require", "exports", "EventManager", "FlashVPAIDBridge", "LogEvent", "LogEventType", "Logger", "Utils", "VPAIDEvents"], function(a, b, c, d, e, f, g, h, i) {
            var j = function() {
                function a(a) {
                    this.logger = new g("FlashAdManagerBridge"), this.eventManager = new c(i), this.adVolume = -1, this.instanceData = a, this.destroy()
                }
                return a.prototype.getAdLinear = function() {
                    return this.flashBridge ? this.flashBridge.getAdLinear() : !1
                }, a.prototype.getAdWidth = function() {
                    return this.flashBridge ? this.flashBridge.getAdWidth() : 0
                }, a.prototype.getAdHeight = function() {
                    return this.flashBridge ? this.flashBridge.getAdHeight() : 0
                }, a.prototype.getAdExpanded = function() {
                    return this.flashBridge ? this.flashBridge.getAdExpanded() : !1
                }, a.prototype.getAdSkippableState = function() {
                    return this.flashBridge ? this.flashBridge.getAdSkippableState() : !1
                }, a.prototype.getAdSkippableRemainingTime = function() {
                    return this.flashBridge ? this.flashBridge.getAdSkippableRemainingTime() : -2
                }, a.prototype.getAdRemainingTime = function() {
                    return this.flashBridge ? this.flashBridge.getAdRemainingTime() : -2
                }, a.prototype.getAdDuration = function() {
                    return this.flashBridge ? this.flashBridge.getAdDuration() : -2
                }, a.prototype.getAdVolume = function() {
                    return this.flashBridge ? this.flashBridge.getAdVolume() : this.adVolume
                }, a.prototype.setAdVolume = function(a) {
                    this.adVolume = a, this.flashBridge && this.flashBridge.setAdVolume(a)
                }, a.prototype.getAdCompanions = function() {
                    return this.flashBridge ? this.flashBridge.getAdCompanions() : ""
                }, a.prototype.getAdIcons = function() {
                    return this.flashBridge ? this.flashBridge.getAdIcons() : !1
                }, a.prototype.handshakeVersion = function(a) {
                    return a
                }, a.prototype.initAd = function(a, b, c, g, i, j) {
                    var k = this;
                    this.logger.log("initAd(", a, ",", b, ",", c, ",", g, ",", i, ",", j), this.destroy();
                    var l = j.environmentData,
                        m = h.getCDNPrefix(l.parentWindow) + "/swf/v4/admanager.swf?adLinear=" + this.instanceData.getDefaultAdLinear();
                    new d(m, l, function(d) {
                        k.flashBridge = d, k.registerBridgeSubscriptions(k.flashBridge), k.flashBridge.initAd(a, b, c, g, {
                            AdParameters: ""
                        }, l.inputParameters)
                    }, function(a) {
                        k._dispatchAdError(e.eventWithType(f.AdManagerInitError))
                    })
                }, a.prototype.resizeAd = function(a, b, c) {
                    return this.flashBridge ? this.flashBridge.resizeAd(a, b, c) : void 0
                }, a.prototype.startAd = function() {
                    return this.flashBridge ? this.flashBridge.startAd() : void 0
                }, a.prototype.stopAd = function() {
                    return this.flashBridge ? this.flashBridge.stopAd() : void 0
                }, a.prototype.pauseAd = function() {
                    return this.flashBridge ? this.flashBridge.pauseAd() : void 0
                }, a.prototype.resumeAd = function() {
                    return this.flashBridge ? this.flashBridge.resumeAd() : void 0
                }, a.prototype.expandAd = function() {
                    return this.flashBridge ? this.flashBridge.expandAd() : void 0
                }, a.prototype.collapseAd = function() {
                    return this.flashBridge ? this.flashBridge.collapseAd() : void 0
                }, a.prototype.skipAd = function() {
                    return this.flashBridge ? this.flashBridge.skipAd() : void 0
                }, a.prototype.subscribe = function(a, b, c) {
                    this.eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this.eventManager.unsubscribe(a, b)
                }, a.prototype.destroy = function() {
                    this.flashBridge && (this.unregisterBridgeSubscriptions(this.flashBridge), this.flashBridge = null)
                }, a.prototype.registerBridgeSubscriptions = function(a) {
                    this.logger.log("Registering event subscriptions on bridge instance:", a), a.subscribe(this.onAdLoaded, i.AdLoaded, this), a.subscribe(this.onAdStarted, i.AdStarted, this), a.subscribe(this.onAdStopped, i.AdStopped, this), a.subscribe(this.onAdSkipped, i.AdSkipped, this), a.subscribe(this.onAdSkippableStateChange, i.AdSkippableStateChange, this), a.subscribe(this.onAdSizeChange, i.AdSizeChange, this), a.subscribe(this.onAdLinearChange, i.AdLinearChange, this), a.subscribe(this.onAdDurationChange, i.AdDurationChange, this), a.subscribe(this.onAdExpandedChange, i.AdExpandedChange, this), a.subscribe(this.onAdVolumeChange, i.AdVolumeChange, this), a.subscribe(this.onAdImpression, i.AdImpression, this), a.subscribe(this.onAdVideoStart, i.AdVideoStart, this), a.subscribe(this.onAdVideoFirstQuartile, i.AdVideoFirstQuartile, this), a.subscribe(this.onAdVideoMidpoint, i.AdVideoMidpoint, this), a.subscribe(this.onAdVideoThirdQuartile, i.AdVideoThirdQuartile, this), a.subscribe(this.onAdVideoComplete, i.AdVideoComplete, this), a.subscribe(this.onAdClickThru, i.AdClickThru, this), a.subscribe(this.onAdInteraction, i.AdInteraction, this), a.subscribe(this.onAdUserAcceptInvitation, i.AdUserAcceptInvitation, this), a.subscribe(this.onAdUserMinimize, i.AdUserMinimize, this), a.subscribe(this.onAdUserClose, i.AdUserClose, this), a.subscribe(this.onAdPaused, i.AdPaused, this), a.subscribe(this.onAdPlaying, i.AdPlaying, this), a.subscribe(this.onAdLog, i.AdLog, this), a.subscribe(this.onAdError, i.AdError, this)
                }, a.prototype.unregisterBridgeSubscriptions = function(a) {
                    this.logger.log("Unregistering event subscriptions on adapter instance:", a), a.unsubscribe(this.onAdLoaded, i.AdLoaded), a.unsubscribe(this.onAdStarted, i.AdStarted), a.unsubscribe(this.onAdStopped, i.AdStopped), a.unsubscribe(this.onAdSkipped, i.AdSkipped), a.unsubscribe(this.onAdSkippableStateChange, i.AdSkippableStateChange), a.unsubscribe(this.onAdSizeChange, i.AdSizeChange), a.unsubscribe(this.onAdLinearChange, i.AdLinearChange), a.unsubscribe(this.onAdDurationChange, i.AdDurationChange), a.unsubscribe(this.onAdExpandedChange, i.AdExpandedChange), a.unsubscribe(this.onAdVolumeChange, i.AdVolumeChange), a.unsubscribe(this.onAdImpression, i.AdImpression), a.unsubscribe(this.onAdVideoStart, i.AdVideoStart), a.unsubscribe(this.onAdVideoFirstQuartile, i.AdVideoFirstQuartile), a.unsubscribe(this.onAdVideoMidpoint, i.AdVideoMidpoint), a.unsubscribe(this.onAdVideoThirdQuartile, i.AdVideoThirdQuartile), a.unsubscribe(this.onAdVideoComplete, i.AdVideoComplete), a.unsubscribe(this.onAdClickThru, i.AdClickThru), a.unsubscribe(this.onAdInteraction, i.AdInteraction), a.unsubscribe(this.onAdUserAcceptInvitation, i.AdUserAcceptInvitation), a.unsubscribe(this.onAdUserMinimize, i.AdUserMinimize), a.unsubscribe(this.onAdUserClose, i.AdUserClose), a.unsubscribe(this.onAdPaused, i.AdPaused), a.unsubscribe(this.onAdPlaying, i.AdPlaying), a.unsubscribe(this.onAdLog, i.AdLog), a.unsubscribe(this.onAdError, i.AdError)
                }, a.prototype.onAdLoaded = function() {
                    this.eventManager.dispatch(i.AdLoaded)
                }, a.prototype.onAdStarted = function() {
                    this.eventManager.dispatch(i.AdStarted)
                }, a.prototype.onAdStopped = function() {
                    this.destroy(), this.eventManager.dispatch(i.AdStopped)
                }, a.prototype.onAdSkipped = function() {
                    this.eventManager.dispatch(i.AdSkipped)
                }, a.prototype.onAdSkippableStateChange = function() {
                    this.eventManager.dispatch(i.AdSkippableStateChange)
                }, a.prototype.onAdSizeChange = function() {
                    this.eventManager.dispatch(i.AdSizeChange)
                }, a.prototype.onAdLinearChange = function() {
                    this.eventManager.dispatch(i.AdLinearChange)
                }, a.prototype.onAdDurationChange = function() {
                    this.eventManager.dispatch(i.AdDurationChange)
                }, a.prototype.onAdExpandedChange = function() {
                    this.eventManager.dispatch(i.AdExpandedChange)
                }, a.prototype.onAdVolumeChange = function() {
                    this.eventManager.dispatch(i.AdVolumeChange)
                }, a.prototype.onAdImpression = function() {
                    this.eventManager.dispatch(i.AdImpression)
                }, a.prototype.onAdVideoStart = function() {
                    this.eventManager.dispatch(i.AdVideoStart)
                }, a.prototype.onAdVideoFirstQuartile = function() {
                    this.eventManager.dispatch(i.AdVideoFirstQuartile)
                }, a.prototype.onAdVideoMidpoint = function() {
                    this.eventManager.dispatch(i.AdVideoMidpoint)
                }, a.prototype.onAdVideoThirdQuartile = function() {
                    this.eventManager.dispatch(i.AdVideoThirdQuartile)
                }, a.prototype.onAdVideoComplete = function() {
                    this.eventManager.dispatch(i.AdVideoComplete)
                }, a.prototype.onAdClickThru = function(a, b, c) {
                    this.eventManager.dispatch(i.AdClickThru, [a, b, c])
                }, a.prototype.onAdInteraction = function() {
                    this.eventManager.dispatch(i.AdInteraction)
                }, a.prototype.onAdUserAcceptInvitation = function() {
                    this.eventManager.dispatch(i.AdUserAcceptInvitation)
                }, a.prototype.onAdUserMinimize = function() {
                    this.eventManager.dispatch(i.AdUserMinimize)
                }, a.prototype.onAdUserClose = function() {
                    this.eventManager.dispatch(i.AdUserClose)
                }, a.prototype.onAdPaused = function() {
                    this.eventManager.dispatch(i.AdPaused)
                }, a.prototype.onAdPlaying = function() {
                    this.eventManager.dispatch(i.AdPlaying)
                }, a.prototype.onAdLog = function(a) {
                    this.eventManager.dispatch(i.AdLog, [a])
                }, a.prototype.onAdError = function(a) {
                    this._dispatchAdError(a)
                }, a.prototype._dispatchAdError = function(a) {
                    this.destroy(), this.eventManager.dispatch(i.AdError, [a])
                }, a
            }();
            return j
        }), define("AdManagerFactory", ["require", "exports", "AdManager", "FlashAdManagerController"], function(a, b, c, d) {
            var e = function() {
                function a(a) {
                    this._adManagerInstances = {}, this._instanceData = a
                }
                return a.prototype.adManagerForEnvironment = function(a) {
                    if (!this._adManagerInstances[a]) switch (a) {
                        case 1:
                            this._adManagerInstances[a] = new c(this._instanceData);
                            break;
                        case 2:
                            this._adManagerInstances[a] = new d(this._instanceData);
                            break;
                        case 0:
                            this._adManagerInstances[a] = null
                    }
                    return this._adManagerInstances[a]
                }, a
            }();
            return e
        }), define("AdParameters", ["require", "exports"], function(a, b) {
            var c = function() {
                function a() {
                    this.maximumRetry = 1, this.maxPodSlots = 0, this.maxPodDuration = 0, this.maxDuration = 0, this.adDeliveryTimeout = 10, this.adRequestTimeout = 10, this.adCreativeTimeout = 15, this.timeoutVPAIDLoad = 10, this.timeoutVPAIDInit = 15, this.timeoutVPAIDStart = 10, this.viewMode = "normal", this.wrapperLimit = 3, this.desiredBitrate = 800, this.showCountdown = !1, this.clickthruTarget = "_blank", this.linearSkin = 1, this.countdownMessage = null, this.indexMessage = null, this.clickthroughMessage = null, this.clickElement = null, this.skipCountdownMessage = null, this.skipMessage = null, this.playerHandlesClick = !1, this.pauseOnClick = !0
                }
                return a
            }();
            return c
        }), define("BrowserDetectionFeature", ["require", "exports"], function(a, b) {
            return a.__markCompiled && a.__markCompiled(), {
                UA: "ua",
                VERSION: "version",
                PLATFORM: "platform",
                IS_IFRAME: "isIframe",
                REFERER: "ref",
                URL: "url",
                SCREEN_WIDTH: "width",
                SCREEN_HEIGHT: "height",
                AVAILABLE_WIDTH: "awidth",
                AVAILABLE_HEIGHT: "aheight",
                SCREEN_LEFT: "left",
                SCREEN_TOP: "top",
                CSS_ALL: "css_all",
                CSS_FEATURE_QUERIES: "cfq",
                CSS_VAR: "cssvar",
                SCOPED_CSS: "scope",
                STICKY: "sticky",
                HAS_SCROLL: "scroll",
                PLUGIN_COUNT: "plugins",
                PHANTOM_MODE: "pmode",
                COLOR_DEPTH: "colorDepth",
                WEBSQL: "websql",
                DRAG_AND_DROP: "dnd",
                CUSTOM_ELEMENT: "ce",
                HAS_IMPORTS: "imp",
                TIME_ZONE: "tz",
                OGG: "ogg",
                DIALOG: "dialog",
                VIDEO: "video",
                AUDIO: "audio",
                AUDIO_CONTEXT: "ac",
                ANCESTOR: "ancestor",
                CHROME: "chrome",
                CHROME_WEB_STORE: "chromewebstore",
                RANDOM: "random",
                IE: "ie",
                USERDATA: "userdata",
                SRCSET: "srcset",
                HAS_CANVAS: "canvas",
                EMOJI: "emoji",
                HAS_PIC_ELEMENT: "pic",
                WC: "wc",
                CHROME_EXTENSION: "ext",
                FOCUS: "focus",
                IS_POPUP: "pop",
                HREF: "href",
                DEVORIENT: "devorient",
                DEVMOTION: "devmotion",
                CANVAS_HASH: "canvasfp",
                TIME: "time",
                FEATURE_TIMES: "feature_times"
            }
        }), define("FastBrowserDetectionFeature", ["require", "exports"], function(a, b) {
            return a.__markCompiled && a.__markCompiled(), {
                UA: "ua",
                CSS_ALL: "css_all",
                CSS_FEATURE_QUERIES: "cfq",
                CSS_VAR: "cssvar",
                SCOPED_CSS: "scope",
                STICKY: "sticky",
                HAS_SCROLL: "scroll",
                PLUGIN_COUNT: "plugins",
                PHANTOM_MODE: "pmode",
                COLOR_DEPTH: "colorDepth",
                WEBSQL: "websql",
                DRAG_AND_DROP: "dnd",
                CUSTOM_ELEMENT: "ce",
                HAS_IMPORTS: "imp",
                TIME_ZONE: "tz",
                OGG: "ogg",
                DIALOG: "dialog",
                VIDEO: "video",
                AUDIO: "audio",
                CHROME: "chrome",
                CHROME_WEB_STORE: "chromewebstore",
                RANDOM: "random",
                IE: "ie",
                USERDATA: "userdata",
                SRCSET: "srcset",
                HAS_CANVAS: "canvas",
                HAS_PIC_ELEMENT: "pic",
                WC: "wc",
                CHROME_EXTENSION: "ext",
                DEVORIENT: "devorient",
                DEVMOTION: "devmotion",
                TIME: "time"
            }
        }), define("PluginBrowserFeatures", ["require", "exports", "BrowserDetectionFeature", "FastBrowserDetectionFeature"], function(a, b, c, d) {
            "use strict";

            function e(a) {
                var b = 0,
                    c = a.length;
                if (0 === c) return b;
                for (var d = 0; c > d; d++) {
                    var e = a.charCodeAt(d);
                    b = 32 * b - b + e, b |= 0
                }
                return b
            }

            function f() {
                return window.performance && window.performance.now ? window.performance.now() : Date.now ? Date.now() : new Date
            }
            var g;
            a.__markCompiled && a.__markCompiled();
            var h = {
                    getBrowserFeaturesMap: function(a) {
                        var b = f(),
                            e = {},
                            g = {},
                            h = a ? d : c;
                        return Object.keys(h).forEach(function(a) {
                            var b = h[a];
                            if (b in i) {
                                var c = f();
                                e[b] = i[b](), g[b] = f() - c
                            }
                        }), e[h.TIME] = f() - b, a || (e[c.FEATURE_TIMES] = g), e
                    },
                    getAllBrowserFeatures: function() {
                        return JSON.stringify(this.getBrowserFeaturesMap(!1))
                    },
                    getFastBrowserFeatures: function() {
                        return JSON.stringify(this.getBrowserFeaturesMap(!0))
                    }
                },
                i = (g = {}, g[c.CSS_ALL] = function() {
                        return "all" in document.documentElement.style
                    }, g[c.CSS_FEATURE_QUERIES] = function() {
                        var a = "CSS" in window && "supports" in window.CSS;
                        return a || "supportsCSS" in window
                    }, g[c.DRAG_AND_DROP] = function() {
                        var a = document.createElement("div");
                        return "draggable" in a || "ondragstart" in a && "ondrop" in a
                    }, g[c.OGG] = function() {
                        var a = document.createElement("video"),
                            b = !1;
                        try {
                            if (b = !!a.canPlayType) {
                                var c = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "");
                                b = "" != c
                            }
                        } catch (d) {}
                        return b
                    }, g[c.CSS_VAR] = function() {
                        return window.CSS && void 0 !== window.CSS.supports && null !== window.CSS.supports && window.CSS.supports("--fake-var", 0)
                    }, g[c.SCOPED_CSS] = function() {
                        var a = document.createElement("style");
                        return a.setAttribute("scoped", "true"), a.scoped === !0
                    }, g[c.STICKY] = function() {
                        var a = "position:",
                            b = "sticky",
                            c = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            d = document.createElement("a"),
                            e = d.style;
                        return e.cssText = a + c.join(b + ";" + a).slice(0, -a.length), -1 !== e.position.indexOf(b)
                    }, g[c.TIME_ZONE] = function() {
                        var a = new Date;
                        return a.getTimezoneOffset()
                    }, g[c.DIALOG] = function() {
                        var a = document.createElement("dialog");
                        return !!a.show
                    }, g[c.VIDEO] = function() {
                        var a = document.createElement("video");
                        return !!a.canPlayType
                    }, g[c.AUDIO] = function() {
                        var a = document.createElement("audio");
                        return !!a.canPlayType
                    }, g[c.AUDIO_CONTEXT] = function() {
                        try {
                            var a = new window.AudioContext,
                                b = a.createOscillator();
                            return b.frequency.value = 10, 10 == b.frequency.value
                        } catch (c) {
                            return !1
                        }
                    }, g[c.ANCESTOR] = function() {
                        var a = "";
                        if (window.location && location.ancestorOrigins && location.ancestorOrigins.length > 0) {
                            a = location.ancestorOrigins.item(0);
                            for (var b = 1; b < location.ancestorOrigins.length; ++b) a = a + "," + location.ancestorOrigins.item(b)
                        }
                        return a
                    }, g[c.RANDOM] = function() {
                        return !!window.crypto && !!window.crypto.getRandomValues || !!window.msCrypto && !!window.msCrypto.getRandomValues
                    }, g[c.USERDATA] = function() {
                        var a = document.createElement("div");
                        return !a.addBehavior
                    }, g[c.CHROME_EXTENSION] = function() {
                        return !!window.chrome && !!window.chrome.runtime && !!window.chrome.runtime.id
                    }, g[c.IS_POPUP] = function() {
                        return !!window.opener && window.opener !== window
                    }, g[c.HREF] = function() {
                        return window.opener && window.opener.location && window.opener.location.href ? window.opener.location.href : window.location && window.location.href ? window.location.href : ""
                    }, g[c.HAS_CANVAS] = function() {
                        var a = document.createElement("canvas");
                        return !(!a.getContext || !a.getContext("2d"))
                    }, g[c.EMOJI] = function() {
                        if (!i[c.HAS_CANVAS]()) return !1;
                        var a = window.devicePixelRatio || 1,
                            b = 12 * a,
                            d = document.createElement("canvas"),
                            e = d.getContext("2d");
                        return e.fillStyle = "#f00", e.textBaseline = "top", e.font = "32px Arial", e.fillText("🐨", 0, 0), 0 !== e.getImageData(b, b, 1, 1).data[0]
                    }, g[c.CANVAS_HASH] = function() {
                        if (!i[c.HAS_CANVAS]()) return 0;
                        var a = document.createElement("canvas"),
                            b = a.getContext("2d"),
                            d = "https://web.archive.org/web/20170109092628/https://facebook.com";
                        return b.textBaseline = "top", b.font = "14px Arial", b.textBaseline = "alphabetic", b.fillStyle = "#f60", b.fillRect(125, 1, 62, 20), b.fillStyle = "#069", b.fillText(d, 2, 15), b.fillStyle = "rgba(102, 204, 0, 0.7)", b.fillText(d, 4, 17), e(a.toDataURL())
                    }, g[c.UA] = function() {
                        return navigator.userAgent
                    },
                    g[c.VERSION] = function() {
                        return navigator.appVersion
                    }, g[c.PLATFORM] = function() {
                        return navigator.platform
                    }, g[c.IS_IFRAME] = function() {
                        return parent !== window
                    }, g[c.REFERER] = function() {
                        return document.referrer
                    }, g[c.URL] = function() {
                        return document.URL
                    }, g[c.SCREEN_HEIGHT] = function() {
                        return screen.height
                    }, g[c.SCREEN_WIDTH] = function() {
                        return screen.width
                    }, g[c.AVAILABLE_HEIGHT] = function() {
                        return screen.height
                    }, g[c.AVAILABLE_WIDTH] = function() {
                        return screen.width
                    }, g[c.SCREEN_LEFT] = function() {
                        return window.screenLeft ? window.screenLeft : window.screenX
                    }, g[c.SCREEN_TOP] = function() {
                        return window.screenTop ? window.screenTop : window.screenY
                    }, g[c.HAS_SCROLL] = function() {
                        return "scrollBehavior" in document.documentElement.style
                    }, g[c.HAS_PIC_ELEMENT] = function() {
                        return "HTMLPictureElement" in window
                    }, g[c.PLUGIN_COUNT] = function() {
                        return navigator.plugins.length
                    }, g[c.PHANTOM_MODE] = function() {
                        return !!window.callPhantom || !!window._phantom
                    }, g[c.COLOR_DEPTH] = function() {
                        return screen.colorDepth
                    }, g[c.WEBSQL] = function() {
                        return !!window.openDatabase
                    }, g[c.CUSTOM_ELEMENT] = function() {
                        return "registerElement" in document
                    }, g[c.HAS_IMPORTS] = function() {
                        return "import" in document.createElement("link")
                    }, g[c.CHROME] = function() {
                        return !!window.chrome
                    }, g[c.CHROME_WEB_STORE] = function() {
                        return !!window.chrome && !!window.chrome.webstore
                    }, g[c.IE] = function() {
                        return !window.ActiveXObject
                    }, g[c.WC] = function() {
                        return "willChange" in document.documentElement.style
                    }, g[c.DEVORIENT] = function() {
                        return "DeviceOrientationEvent" in window
                    }, g[c.DEVMOTION] = function() {
                        return "DeviceMotionEvent" in window
                    }, g[c.SRCSET] = function() {
                        return "srcset" in document.createElement("img")
                    }, g);
            return h
        }), define("sdk.BrowserFeatures", ["require", "exports", "PluginBrowserFeatures"], function(a, b, c) {
            "use strict";
            a.__markCompiled && a.__markCompiled();
            var d = null,
                e = {
                    getBrowserFeatures: function() {
                        return null === d && (d = c.getFastBrowserFeatures()), d
                    }
                };
            return e
        }), define("LRBrowserMeasurement.adquality", ["require", "exports", "sdk.BrowserFeatures", "PluginBrowserFeatures"], function(a, b, c, d) {
            "use strict";
            a.__markCompiled && a.__markCompiled();
            var e = function() {
                var a = "",
                    b = "",
                    e = null;
                try {
                    a = c.getBrowserFeatures(), b = d.getAllBrowserFeatures()
                } catch (f) {
                    try {
                        e = f.toString()
                    } catch (g) {
                        e = "Unknown error"
                    }
                }
                return {
                    browserFeatures: a,
                    pluginBrowserFeatures: b,
                    error: e
                }
            };
            return e
        }), define("EnvironmentData", ["require", "exports", "AdapterFactory", "AdParameters", "CompanionPlacement", "GeometricMeasurement.adquality", "InventoryPod", "LRBrowserMeasurement.adquality", "Logger", "MimeType", "Utils"], function(a, b, c, d, e, f, g, h, i, j, k) {
            var l = function() {
                function a(a, b) {
                    this.adUnitType = g.TYPE_INSTREAM, this.browserMeasurementError = null, this.companionPlacements = {}, this.inputParameters = {}, this.integration = 0, this.integrationVersion = null, this.mimeTypeBlockList = [], this.mimeTypePriorityList = [], this.placementId = null, this.topWindow = null, this.urlPrefix = null, this._adParameters = new d, this._adRequestParameters = {}, this._currentAdRequestParameters = {}, this._failedConnectionIds = "", this._failedCreativeIds = "", this._logger = new i("EnvironmentData"), this._podPosition = null, this._remainingDuration = 1, this._retryIndex = 0, this._servedCreativeIds = "", this._sessionId = null, this._slotIndex = 0, this._processInitData(a, b)
                }
                return a.prototype.getAdParameters = function() {
                    return this._adParameters
                }, a.prototype.getCurrentAdRequestParameters = function() {
                    var a = this,
                        b = {};
                    return Object.keys(this._currentAdRequestParameters).forEach(function(c) {
                        b[c] = a._currentAdRequestParameters[c]
                    }), b
                }, a.prototype.getUniqueInventoryId = function() {
                    return this._sessionId + "-" + this._slotIndex + "." + this._retryIndex
                }, a.prototype.setSlotIndex = function(a) {
                    this._slotIndex = a
                }, a.prototype.setRetryIndex = function(a) {
                    this._retryIndex = a
                }, a.prototype.setPodPosition = function(a) {
                    this._podPosition = a
                }, a.prototype.setRemainingDuration = function(a) {
                    this._remainingDuration = a
                }, a.prototype.setSessionId = function(a) {
                    this._sessionId = a
                }, a.prototype.setFailedConnectionIds = function(a) {
                    this._failedConnectionIds = a.join() || ""
                }, a.prototype.setServedCreativeIds = function(a) {
                    this._servedCreativeIds = a.join() || ""
                }, a.prototype.setFailedCreativeIds = function(a) {
                    this._failedCreativeIds = a.join() || ""
                }, a.prototype.slotIsElement = function() {
                    return k.elementIsInstanceOfClass(this.slot, "Element")
                }, a.prototype.updateCurrentAdParameters = function(a) {
                    var b = this,
                        c = {};
                    for (var d in this._adRequestParameters) this._adRequestParameters.hasOwnProperty(d) && (c[d] = this._adRequestParameters[d]);
                    var e = new f(this.videoSlot, this.parentWindow);
                    e.getMeasurement(function(d, e) {
                        b._logger.debug("Retrieved ad quality measurement:", d), b._logger.debug("Retrieved placement context:", e), b.topWindow = e.topWindow;
                        var f = d.getViewableRatio(),
                            g = 0;
                        null === f || isNaN(f) || (g = .5 > f ? 2 : 1), c.LR_VIEWABLE = k.returnString(g), c.LR_VIEWABLE_RATIO = k.returnString(d.getViewableRatio());
                        var i = h();
                        c.LR_BROWSER_FEATURES = i.browserFeatures, c.LR_PLUGIN_BROWSER_FEATURES = i.pluginBrowserFeatures, b.browserMeasurementError = i.error, c.LR_WINDOW_DEPTH = k.returnString(e.crossDomainWindowCount), c.LR_WINDOW_LOCATION = k.returnString(e.topLocationURL), c.LR_WINDOW_REFERRER = k.returnString(e.topReferrerURL), c.LR_IFRAME = k.returnString(e.type), c.LR_URL && "[LR_URL]" !== c.LR_URL.toUpperCase() || (c.LR_URL = k.returnString(e.topURL)), c.LR_PAGE_URL = k.returnString(e.pageURL || e.pageDomain), e.offsetRect && 0 === e.crossDomainWindowCount ? (c.LR_OFFSET_X = k.returnString(e.offsetRect.x), c.LR_OFFSET_Y = k.returnString(e.offsetRect.y)) : (c.LR_OFFSET_X = "", c.LR_OFFSET_Y = ""), c.LR_WIDTH = k.returnString(e.offsetWidth), c.LR_HEIGHT = k.returnString(e.offsetHeight);
                        var j = null,
                            l = null;
                        0 === e.crossDomainWindowCount && e.viewportRect && (j = e.viewportRect.width, l = e.viewportRect.height), c.LR_VIEWPORT_WIDTH = k.returnString(j), c.LR_VIEWPORT_HEIGHT = k.returnString(l);
                        var m = 3;
                        !e.offsetWidth || !e.offsetHeight || e.offsetWidth <= 300 || e.offsetHeight < 250 ? (b._logger.log("Detected in-banner placement"), m = 2) : 1 === b.integration && (b._logger.log("Detected interstitial placement"), m = 1), c.LR_ADTYPE = k.returnString(m);
                        var n = navigator.language || navigator.browserLanguage || "",
                            o = n.split("-");
                        c.LR_LOCALE = o[0] + (o[1] ? "_" + o[1].toUpperCase() : ""), delete c.LR_SESSION_ID, b._sessionId && (c.LR_SESSION_ID = b._sessionId), null !== b._remainingDuration && (c.LR_DURATION = Math.round(b._remainingDuration).toString()), c.LR_SLOT_INDEX = b._slotIndex.toString(), c.LR_RETRY_INDEX = b._retryIndex.toString(), c.LR_POD_CURRENT = b._podPosition.toString(), c.blacklist_connection_id = b._failedConnectionIds, c.served_creative_id = b._servedCreativeIds, c.failed_creative_id = b._failedCreativeIds, b._currentAdRequestParameters = c, a()
                    })
                }, a.prototype.videoSlotIsElement = function() {
                    return k.elementIsInstanceOfClass(this.videoSlot, "Element")
                }, a.prototype._addMimeTypeToPriorityList = function(a) {
                    -1 === this.mimeTypeBlockList.indexOf(a) && this.mimeTypePriorityList.push(a)
                }, a.prototype._ingestAdRequestParameter = function(a, b) {
                    null !== b && (this._adRequestParameters[a] = b)
                }, a.prototype._parseCompanionPlacements = function(a) {
                    if ("string" == typeof a)
                        for (var b = a.split("|"), c = 0; c < b.length; c += 1) {
                            var d = b[c].split(":");
                            if (d.length >= 3) {
                                var f = k.returnUnsignedInt(d[0], null),
                                    g = k.returnUnsignedInt(d[1], null),
                                    h = k.returnString(d[2], null),
                                    i = k.returnString(d[3], null),
                                    j = k.returnBoolean(d[4], null),
                                    l = f + "x" + g,
                                    m = new e(f, g, h, i, j);
                                this._logger.log("Parsed " + l + " companion placement:", m), this.companionPlacements[l] = m
                            }
                        }
                }, a.prototype._processInitData = function(a, b) {
                    var d = this;
                    this.videoSlot = b.videoSlot, this.slot = b.slot || this.videoSlot.parentNode, this.videoSlotCanAutoPlay = b.videoSlotCanAutoPlay;
                    var e = this.slot.ownerDocument;
                    "object" == typeof this.slot && "object" == typeof this.slot.ownerDocument ? this.parentWindow = this.slot.ownerDocument.defaultView || e.parentWindow : "object" == typeof this.videoSlot && "object" == typeof this.videoSlot.ownerDocument ? this.parentWindow = this.videoSlot.ownerDocument.defaultView || e.parentWindow : b.window && (this.parentWindow = b.window), this.initWidth = b.width, this.initHeight = b.height, this._adParameters.desiredBitrate = k.returnInt(b.desiredBitrate, this._adParameters.desiredBitrate), i.getDebugLevel() > 0 && (this._adRequestParameters.LR_DEBUG = k.returnString(i.getDebugLevel())), this._processParameterSet(b.environmentVars), delete this._adRequestParameters.LR_MUTED;
                    var f = null;
                    if (this.videoSlot && (f = this.videoSlot.muted || this.videoSlot.volume <= 0 ? 1 : 0), -1 !== b.adVolume && (f = b.adVolume <= 0 ? 1 : 0), null !== f && (this._adRequestParameters.LR_MUTED = k.returnString(f)), this._adRequestParameters.LR_SCHEMA = "liverail", delete this._adRequestParameters.LR_FORMAT, this.mimeTypePriorityList = [], 1 === b.environmentType && (this._logger.verbose("Determining format support:"), a.getDisableIframes() !== !0 && (this._addMimeTypeToPriorityList(j.JavaScript), this._addMimeTypeToPriorityList(j.JavaScriptAlt)), [j.HLS, j.HLSAlt, j.MP4, j.WebM, j.OGG, j.Mobile3GP].forEach(function(a) {
                            var b = d.videoSlot.canPlayType(a);
                            d._logger.verbose("    " + a + ":", b), "" !== b && "no" !== b.toLowerCase() && d._addMimeTypeToPriorityList(a)
                        }), k.detectFlash() && !k.videoElementIsFullscreen(this.parentWindow.document) && (this._addMimeTypeToPriorityList(j.FLV), this._addMimeTypeToPriorityList(j.Flash)), this._adRequestParameters.LR_FORMAT = this.mimeTypePriorityList.join(";")), this._adRequestParameters.LR_ADAPTERS = c.getAvailableAdapters().join(), this._adRequestParameters.LR_SDK = "js", this._adRequestParameters.LR_SDK_VERSION = "2.5.5", "string" == typeof this._adRequestParameters.LR_ADMAP) {
                        this._adRequestParameters.LR_ADMAP = this._adRequestParameters.LR_ADMAP.split(";", 1)[0];
                        var h = this._adRequestParameters.LR_ADMAP.split(":");
                        void 0 === this._adRequestParameters.LR_ADUNIT && (this._adRequestParameters.LR_ADUNIT = h[0]), void 0 === this._adRequestParameters.LR_SCENARIO && (this._adRequestParameters.LR_SCENARIO = h[1]), void 0 === this._adRequestParameters.LR_VIDEO_POSITION && (this._adRequestParameters.LR_VIDEO_POSITION = h[2])
                    }
                    this._adRequestParameters.LR_ADUNIT = this._adRequestParameters.LR_ADUNIT || g.TYPE_INSTREAM, this._adRequestParameters.LR_SCENARIO = this._adRequestParameters.LR_SCENARIO || "", this._adRequestParameters.LR_VIDEO_POSITION = this._adRequestParameters.LR_VIDEO_POSITION || "0", this._adRequestParameters.LR_ADUNIT === g.TYPE_INSTREAM || this._adRequestParameters.LR_ADUNIT === g.TYPE_OVERLAY ? (this.adUnitType = this._adRequestParameters.LR_ADUNIT, this._logger.log("Set adUnitType to:", this.adUnitType)) : this._logger.error("Invalid adUnitType passed to LR_ADUNIT:", this._adRequestParameters.LR_ADUNIT), this._adRequestParameters.LR_ADMAP = this._adRequestParameters.LR_ADUNIT + ":" + this._adRequestParameters.LR_SCENARIO + ":" + this._adRequestParameters.LR_VIDEO_POSITION
                }, a.prototype._processParameterSet = function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) {
                            var c = a[b],
                                d = null;
                            switch ("LR_" === b.substr(0, 3).toUpperCase() && (d = k.returnString(c)), d && (this.inputParameters[b] = d), b.toUpperCase()) {
                                case "LR_ENVIRONMENT":
                                    break;
                                case "LR_PUBLISHER_ID":
                                    d && (d.match(/[^0-9]/) || (this.publisherId = k.returnUnsignedInt(c, this.publisherId)), this._adRequestParameters[b] = d);
                                    break;
                                case "LR_PLACEMENT_ID":
                                    d && (this.placementId = d, this._adRequestParameters[b] = d);
                                    break;
                                case "LR_INTEGRATION":
                                    switch (d) {
                                        case "int":
                                            this.integration = 1;
                                            break;
                                        case "jw":
                                            this.integration = 2;
                                            break;
                                        case "bc":
                                            this.integration = 3;
                                            break;
                                        case "vjs":
                                            this.integration = 4;
                                            break;
                                        case "pdk":
                                            this.integration = 5;
                                            break;
                                        default:
                                            this.integration = 0
                                    }
                                    0 !== this.integration && this._logger.log("Set integration to " + this.integration + " (", d, ")"), this._ingestAdRequestParameter(b, d);
                                    break;
                                case "LR_INTEGRATION_VERSION":
                                    d && (this.integrationVersion = d, this._logger.log("Set integration version to " + this.integrationVersion), this._ingestAdRequestParameter(b, d));
                                    break;
                                case "LR_FORMAT_BLOCKLIST":
                                    if (d) {
                                        var e = d.split(";");
                                        e && (this.mimeTypeBlockList = e, this._logger.log("Set mime type blocklist to:", this.mimeTypeBlockList))
                                    }
                                    break;
                                case "LR_ALLOW_RETRY":
                                    this._adParameters.maximumRetry = Math.min(7, Math.max(0, k.returnInt(c, this._adParameters.maxDuration))), this._logger.log("Set maximumRetry to:", this._adParameters.maximumRetry);
                                    break;
                                case "LR_DURATION":
                                    this._adParameters.maxDuration = Math.max(0, k.returnFloat(c, this._adParameters.maxDuration)), this._ingestAdRequestParameter(b, d), this._logger.log("Set maxDuration to:", this._adParameters.maxDuration);
                                    break;
                                case "LR_POD_SLOTS":
                                    this._adParameters.maxPodSlots = k.returnUnsignedInt(c, this._adParameters.maxPodSlots), this._logger.log("Set maxPodSlots to:", this._adParameters.maxPodSlots);
                                    break;
                                case "LR_POD_DURATION":
                                    this._adParameters.maxPodDuration = Math.max(0, k.returnFloat(c, this._adParameters.maxPodDuration)), this._logger.log("Set maxPodDuration to:", this._adParameters.maxPodDuration);
                                    break;
                                case "LR_WRAPPER_LIMIT":
                                    this._adParameters.wrapperLimit = k.returnUnsignedInt(c, this._adParameters.wrapperLimit), this._logger.log("Set wrapper limit to:", this._adParameters.wrapperLimit);
                                    break;
                                case "LR_CLICK_TARGET":
                                    this._adParameters.clickthruTarget = k.returnString(c, this._adParameters.clickthruTarget), this._logger.log("Set clickthrough target to:", this._adParameters.clickthruTarget);
                                    break;
                                case "LR_TIMEOUT_DELIVERY":
                                    this._adParameters.adDeliveryTimeout = Math.max(0, k.returnFloat(c, this._adParameters.adDeliveryTimeout)), this._logger.log("Set delivery timeout to:", this._adParameters.adDeliveryTimeout);
                                    break;
                                case "LR_TIMEOUT_ADSOURCE":
                                    this._adParameters.adRequestTimeout = Math.max(0, k.returnFloat(c, this._adParameters.adRequestTimeout)), this._logger.log("Set ad source timeout to:", this._adParameters.adRequestTimeout);
                                    break;
                                case "LR_TIMEOUT_STREAM":
                                    this._adParameters.adCreativeTimeout = Math.max(0, k.returnFloat(c, this._adParameters.adCreativeTimeout)), this._logger.log("Set stream timeout to:", this._adParameters.adCreativeTimeout);
                                    break;
                                case "LR_TIMEOUT_VPAID_LOAD":
                                    this._adParameters.timeoutVPAIDLoad = Math.max(0, k.returnFloat(c, this._adParameters.timeoutVPAIDLoad)), this._logger.log("Set VPAID load timeout to:", this._adParameters.timeoutVPAIDLoad);
                                    break;
                                case "LR_TIMEOUT_VPAID_INIT":
                                    this._adParameters.timeoutVPAIDInit = Math.max(0, k.returnFloat(c, this._adParameters.timeoutVPAIDInit)), this._logger.log("Set VPAID init timeout to:", this._adParameters.timeoutVPAIDInit);
                                    break;
                                case "LR_TIMEOUT_VPAID_START":
                                    this._adParameters.timeoutVPAIDStart = Math.max(0, k.returnFloat(c, this._adParameters.timeoutVPAIDStart)), this._logger.log("Set VPAID start timeout to:", this._adParameters.timeoutVPAIDStart);
                                    break;
                                case "LR_LAYOUT_SKIN_ID":
                                    this._adParameters.linearSkin = k.returnUnsignedInt(c, this._adParameters.linearSkin), this._logger.log("Set layout skin id to:", this._adParameters.linearSkin);
                                    break;
                                case "LR_LAYOUT_SHOW_COUNTDOWN":
                                    this._adParameters.showCountdown = k.returnBoolean(c, this._adParameters.showCountdown), this._logger.log("Set showCountdown to:", this._adParameters.showCountdown);
                                    break;
                                case "LR_LAYOUT_SKIN_MESSAGE":
                                    this._adParameters.countdownMessage = k.returnString(c, this._adParameters.countdownMessage), this._adParameters.showCountdown = !0, this._logger.log("Set countdown message to:", this._adParameters.countdownMessage);
                                    break;
                                case "LR_LAYOUT_CLICK_MESSAGE":
                                    this._adParameters.clickthroughMessage = k.returnString(c, this._adParameters.clickthroughMessage), this._logger.log("Set clickthrough message to:", this._adParameters.clickthroughMessage);
                                    break;
                                case "LR_LAYOUT_LINEAR_PAUSEONCLICKTHRU":
                                    this._adParameters.pauseOnClick = k.returnBoolean(c, this._adParameters.pauseOnClick), this._logger.log("Set pause on clickthrough to:", this._adParameters.pauseOnClick);
                                    break;
                                case "LR_SKIP_COUNTDOWN":
                                    this._adParameters.skipCountdownMessage = k.returnString(c, this._adParameters.skipCountdownMessage), this._logger.log("Set skip countdown message to:", this._adParameters.skipCountdownMessage);
                                    break;
                                case "LR_SKIP_MESSAGE":
                                    this._adParameters.skipMessage = k.returnString(c, this._adParameters.skipMessage), this._logger.log("Set skip message to:", this._adParameters.skipMessage);
                                    break;
                                case "LR_LAYOUT_SKIN_ADINDEX":
                                    this._adParameters.indexMessage = k.returnString(c, this._adParameters.indexMessage), this._logger.log("Set index message to:", this._adParameters.indexMessage);
                                    break;
                                case "LR_BITRATE":
                                    this._adParameters.desiredBitrate = k.returnUnsignedInt(c, this._adParameters.desiredBitrate), this._logger.log("Set desired bitrate to:", this._adParameters.desiredBitrate);
                                    break;
                                case "LR_PLAYER_HANDLES_CLICK":
                                    this._adParameters.playerHandlesClick = k.returnBoolean(c, this._adParameters.playerHandlesClick), this._logger.log("Set playerHandlesClick to:", this._adParameters.playerHandlesClick);
                                    break;
                                case "LR_DEBUG":
                                    var f = k.returnUnsignedInt(c, null);
                                    null !== f && (this._adRequestParameters[b] = d, i.setDebugLevelOverride(f));
                                    break;
                                case "LR_COMPANIONS":
                                    this._parseCompanionPlacements(d), this._ingestAdRequestParameter(b, d);
                                    break;
                                case "BGCOLOR":
                                    this._adParameters.bgcolor = k.returnString(c, this._adParameters.bgcolor), this._logger.log("Set bgcolor to:", this._adParameters.bgcolor);
                                    break;
                                case "URLPREFIX":
                                    var g = k.returnString(c, null);
                                    g && !g.match(/[^A-Za-z0-9\.]/) && (this.urlPrefix = g, this._logger.log("Set urlPrefix to:", this.urlPrefix));
                                    break;
                                default:
                                    this._ingestAdRequestParameter(b, d)
                            }
                        }
                }, a
            }();
            return l
        }), define("EnvironmentManager", ["require", "exports", "AdManagerFactory", "EnvironmentData", "EventManager", "LogEvent", "LogEventType", "Logger", "Utils", "VPAIDEvents"], function(a, b, c, d, e, f, g, h, i, j) {
            var k = function() {
                function a(a) {
                    this.logger = new h("EnvironmentManager"), this.eventManager = new e(j), this.adVolume = 1, this.adVolumeSet = !1, this.instanceData = a, this.adManagerFactory = new c(this.instanceData), this.adLinear = this.instanceData.getDefaultAdLinear(), this.destroy()
                }
                return a.prototype.getAdLinear = function() {
                    return this.adManager ? this.adManager.getAdLinear() : this.adLinear
                }, a.prototype.getAdWidth = function() {
                    return this.adManager ? this.adManager.getAdWidth() : 0
                }, a.prototype.getAdHeight = function() {
                    return this.adManager ? this.adManager.getAdHeight() : 0
                }, a.prototype.getAdExpanded = function() {
                    return this.adManager ? this.adManager.getAdExpanded() : !1
                }, a.prototype.getAdSkippableState = function() {
                    return this.adManager ? this.adManager.getAdSkippableState() : !1
                }, a.prototype.getAdSkippableRemainingTime = function() {
                    return this.adManager ? this.adManager.getAdSkippableRemainingTime() : -2
                }, a.prototype.getAdRemainingTime = function() {
                    return this.adManager ? this.adManager.getAdRemainingTime() : -2
                }, a.prototype.getAdDuration = function() {
                    return this.adManager ? this.adManager.getAdDuration() : -2
                }, a.prototype.getAdVolume = function() {
                    return this.adManager ? this.adManager.getAdVolume() : this.adVolume
                }, a.prototype.setAdVolume = function(a) {
                    this.logger.log("--> setAdVolume(", a, ")"), a >= 0 && 1 >= a && (this.adVolume = a, this.adVolumeSet = !0, this.adManager ? this.adManager.setAdVolume(a) : this.onAdVolumeChange())
                }, a.prototype.getAdCompanions = function() {
                    return this.adManager ? this.adManager.getAdCompanions() : ""
                }, a.prototype.getAdIcons = function() {
                    return this.adManager ? this.adManager.getAdIcons() : !1
                }, a.prototype.handshakeVersion = function(a) {
                    return this.logger.log("--> handshakeVersion(" + a + ")"), "2.0"
                }, a.prototype.initAd = function(b, c, e, h, j, k) {
                    this.logger.log("--> initAd() width:", b, " height:", c, " viewMode:", e, "desiredBitrate:", h, "creativeData:", j, "environmentVars:", k), this.destroy(), this.state = 1;
                    var l = a.consolidateEnvironmentVars([this.instanceData.getQueryStringParameters(), j, k]),
                        m = this.chooseEnvironmentType(l.LR_ENVIRONMENT),
                        n = k.slot,
                        o = k.videoSlot,
                        p = i.returnBoolean(k.videoSlotCanAutoPlay, !0);
                    1 === m && void 0 === o && a.isValidElement(n) && (n.innerHTML = "", p = k.videoSlotCanAutoPlay || !1, o = document.createElement("video"), o.style.setProperty("display", "block", "important"), o.style.setProperty("width", b + "px", "important"), o.style.setProperty("height", c + "px", "important"), n.appendChild(o)), o && !this.adVolumeSet && (this.adVolume = o.volume);
                    var q = {
                        width: b,
                        height: c,
                        viewMode: e,
                        desiredBitrate: h,
                        environmentVars: l,
                        environmentType: m,
                        slot: n,
                        videoSlot: o,
                        videoSlotCanAutoPlay: p,
                        window: k.window,
                        adVolume: this.adVolume
                    };
                    switch (this.environmentData = new d(this.instanceData, q), m) {
                        case 0:
                            return void this.onAdError(f.eventWithType(g.NoAvailableEnvironment));
                        case 1:
                            if (!a.isValidPlayer(o)) return void this.onAdError(f.eventWithType(g.InvalidVideoElement));
                            break;
                        case 2:
                            if (!a.isValidElement(n)) return void this.onAdError(f.eventWithType(g.InvalidSlotElement))
                    }
                    this.environmentData.publisherId > 0 || null !== this.environmentData.placementId ? (this.adManager = this.adManagerFactory.adManagerForEnvironment(m), this.adVolumeSet && (this.logger.debug("Setting AdManager volume to " + this.adVolume), this.adManager.setAdVolume(this.adVolume)), this.registerEventSubscriptions(this.adManager), this.adManager.initAd(b, c, e, h, {}, {
                        environmentData: this.environmentData
                    })) : this.onAdError(f.eventWithType(g.InvalidPlacement))
                }, a.prototype.resizeAd = function(a, b, c) {
                    return this.adManager ? this.adManager.resizeAd(a, b, c) : void 0
                }, a.prototype.startAd = function() {
                    return this.logger.log("--> startAd()"), 0 === this.state ? void this.onAdError(f.eventWithType(g.StartAdBeforeInitAd)) : 1 === this.state ? void(this.startAdCalled = !0) : 4 === this.state ? void this.logger.error("AdManager already started, ignoring startAd") : void(3 === this.state && this.startAdManager())
                }, a.prototype.stopAd = function() {
                    return this.logger.log("--> stopAd()"), this.adManager ? this.adManager.stopAd() : void this.onAdStopped()
                }, a.prototype.pauseAd = function() {
                    return this.logger.log("--> pauseAd()"), this.adManager ? this.adManager.pauseAd() : void 0
                }, a.prototype.resumeAd = function() {
                    return this.logger.log("--> resumeAd()"), this.adManager ? this.adManager.resumeAd() : void 0
                }, a.prototype.expandAd = function() {
                    return this.logger.log("--> expandAd()"), this.adManager ? this.adManager.expandAd() : void 0
                }, a.prototype.collapseAd = function() {
                    return this.logger.log("--> collapseAd()"), this.adManager ? this.adManager.collapseAd() : void 0
                }, a.prototype.skipAd = function() {
                    return this.logger.log("--> skipAd()"), this.adManager ? this.adManager.skipAd() : void 0
                }, a.prototype.subscribe = function(a, b, c) {
                    this.eventManager.subscribe(a, b, c)
                }, a.prototype.unsubscribe = function(a, b) {
                    this.eventManager.unsubscribe(a, b)
                }, a.prototype.onAdLoaded = function() {
                    this.logger.log("<-- Dispatching AdLoaded event"), this.state = 3, this.eventManager.dispatch(j.AdLoaded), this.startAdCalled === !0 && 3 === this.state && (this.logger.log("startAd already called - calling lazy startAd"), this.startAdCalled = !1, this.startAdManager())
                }, a.prototype.onAdStarted = function() {
                    this.logger.log("<-- Dispatching AdStarted event"), this.eventManager.dispatch(j.AdStarted)
                }, a.prototype.onAdStopped = function() {
                    this.logger.log("<-- Dispatching AdStopped event"), this.eventManager.dispatch(j.AdStopped)
                }, a.prototype.onAdSkipped = function() {
                    this.logger.log("<-- Dispatching AdSkipped event"), this.eventManager.dispatch(j.AdSkipped)
                }, a.prototype.onAdSkippableStateChange = function() {
                    this.logger.log("<-- Dispatching AdSkippableStateChange event"), this.eventManager.dispatch(j.AdSkippableStateChange)
                }, a.prototype.onAdSizeChange = function() {
                    this.logger.log("<-- Dispatching AdSizeChange event"), this.eventManager.dispatch(j.AdSizeChange)
                }, a.prototype.onAdLinearChange = function() {
                    this.adLinear = this.adManager.getAdLinear(), this.logger.log("<-- Dispatching AdLinearChange event"), this.eventManager.dispatch(j.AdLinearChange)
                }, a.prototype.onAdDurationChange = function() {
                    this.logger.log("<-- Dispatching AdDurationChange event"), this.eventManager.dispatch(j.AdDurationChange)
                }, a.prototype.onAdExpandedChange = function() {
                    this.logger.log("<-- Dispatching AdExpandedChange event"), this.eventManager.dispatch(j.AdExpandedChange)
                }, a.prototype.onAdVolumeChange = function() {
                    this.logger.log("<-- Dispatching AdVolumeChange event"), this.eventManager.dispatch(j.AdVolumeChange)
                }, a.prototype.onAdImpression = function() {
                    this.logger.log("<-- Dispatching AdImpression event"), this.eventManager.dispatch(j.AdImpression)
                }, a.prototype.onAdVideoStart = function() {
                    this.logger.log("<-- Dispatching AdVideoStart event"), this.eventManager.dispatch(j.AdVideoStart)
                }, a.prototype.onAdVideoFirstQuartile = function() {
                    this.logger.log("<-- Dispatching AdVideoFirstQuartile event"), this.eventManager.dispatch(j.AdVideoFirstQuartile)
                }, a.prototype.onAdVideoMidpoint = function() {
                    this.logger.log("<-- Dispatching AdVideoMidpoint event"), this.eventManager.dispatch(j.AdVideoMidpoint)
                }, a.prototype.onAdVideoThirdQuartile = function() {
                    this.logger.log("<-- Dispatching AdVideoThirdQuartile event"), this.eventManager.dispatch(j.AdVideoThirdQuartile)
                }, a.prototype.onAdVideoComplete = function() {
                    this.logger.log("<-- Dispatching AdVideoComplete event"), this.eventManager.dispatch(j.AdVideoComplete)
                }, a.prototype.onAdClickThru = function(a, b, c) {
                    this.logger.log("<-- Dispatching AdClickThru event, url=" + a + " id=" + b + " playerHandles=" + c), this.eventManager.dispatch(j.AdClickThru, [a, b, c])
                }, a.prototype.onAdInteraction = function() {
                    this.logger.log("<-- Dispatching AdInteraction event"), this.eventManager.dispatch(j.AdInteraction)
                }, a.prototype.onAdUserAcceptInvitation = function() {
                    this.logger.log("<-- Dispatching AdUserAcceptInvitation event"), this.eventManager.dispatch(j.AdUserAcceptInvitation)
                }, a.prototype.onAdUserMinimize = function() {
                    this.logger.log("<-- Dispatching AdUserMinimize event"), this.eventManager.dispatch(j.AdUserMinimize)
                }, a.prototype.onAdUserClose = function() {
                    this.logger.log("<-- Dispatching AdUserClose event"), this.eventManager.dispatch(j.AdUserClose)
                }, a.prototype.onAdPaused = function() {
                    this.logger.log("<-- Dispatching AdPaused event"), this.eventManager.dispatch(j.AdPaused)
                }, a.prototype.onAdPlaying = function() {
                    this.logger.log("<-- Dispatching AdPlaying event"), this.eventManager.dispatch(j.AdPlaying)
                }, a.prototype.onAdLog = function(a) {
                    this.logger.log("<-- Dispatching AdLog event, message=" + a), this.eventManager.dispatch(j.AdLog, [a])
                }, a.prototype.onAdError = function(a) {
                    this.logger.log("<-- Dispatching AdError event, message=" + a.message + " id=" + a.id), this.destroy(), this.eventManager.dispatch(j.AdError, [a.message, a.id])
                }, a.prototype.destroy = function() {
                    this.adManager && (this.unregisterEventSubscriptions(this.adManager), this.adManager = null), this.state = 0, this.environmentData = null, this.startAdCalled = !1
                }, a.prototype.startAdManager = function() {
                    this.state = 4, this.adManager && this.adManager.startAd()
                }, a.prototype.registerEventSubscriptions = function(a) {
                    this.logger.log("Registering event subscriptions"), a.subscribe(this.onAdLoaded, j.AdLoaded, this), a.subscribe(this.onAdStarted, j.AdStarted, this), a.subscribe(this.onAdStopped, j.AdStopped, this), a.subscribe(this.onAdSkipped, j.AdSkipped, this), a.subscribe(this.onAdSkippableStateChange, j.AdSkippableStateChange, this), a.subscribe(this.onAdSizeChange, j.AdSizeChange, this), a.subscribe(this.onAdLinearChange, j.AdLinearChange, this), a.subscribe(this.onAdDurationChange, j.AdDurationChange, this), a.subscribe(this.onAdExpandedChange, j.AdExpandedChange, this), a.subscribe(this.onAdVolumeChange, j.AdVolumeChange, this), a.subscribe(this.onAdImpression, j.AdImpression, this), a.subscribe(this.onAdVideoStart, j.AdVideoStart, this), a.subscribe(this.onAdVideoFirstQuartile, j.AdVideoFirstQuartile, this), a.subscribe(this.onAdVideoMidpoint, j.AdVideoMidpoint, this), a.subscribe(this.onAdVideoThirdQuartile, j.AdVideoThirdQuartile, this), a.subscribe(this.onAdVideoComplete, j.AdVideoComplete, this), a.subscribe(this.onAdClickThru, j.AdClickThru, this), a.subscribe(this.onAdInteraction, j.AdInteraction, this), a.subscribe(this.onAdUserAcceptInvitation, j.AdUserAcceptInvitation, this), a.subscribe(this.onAdUserMinimize, j.AdUserMinimize, this), a.subscribe(this.onAdUserClose, j.AdUserClose, this), a.subscribe(this.onAdPaused, j.AdPaused, this), a.subscribe(this.onAdPlaying, j.AdPlaying, this), a.subscribe(this.onAdLog, j.AdLog, this), a.subscribe(this.onAdError, j.AdError, this)
                }, a.prototype.unregisterEventSubscriptions = function(a) {
                    this.logger.log("Unregistering event subscriptions"), a.unsubscribe(this.onAdLoaded, j.AdLoaded), a.unsubscribe(this.onAdStarted, j.AdStarted), a.unsubscribe(this.onAdStopped, j.AdStopped), a.unsubscribe(this.onAdSkipped, j.AdSkipped), a.unsubscribe(this.onAdSkippableStateChange, j.AdSkippableStateChange), a.unsubscribe(this.onAdSizeChange, j.AdSizeChange), a.unsubscribe(this.onAdLinearChange, j.AdLinearChange), a.unsubscribe(this.onAdDurationChange, j.AdDurationChange), a.unsubscribe(this.onAdExpandedChange, j.AdExpandedChange), a.unsubscribe(this.onAdVolumeChange, j.AdVolumeChange), a.unsubscribe(this.onAdImpression, j.AdImpression), a.unsubscribe(this.onAdVideoStart, j.AdVideoStart), a.unsubscribe(this.onAdVideoFirstQuartile, j.AdVideoFirstQuartile), a.unsubscribe(this.onAdVideoMidpoint, j.AdVideoMidpoint), a.unsubscribe(this.onAdVideoThirdQuartile, j.AdVideoThirdQuartile), a.unsubscribe(this.onAdVideoComplete, j.AdVideoComplete), a.unsubscribe(this.onAdClickThru, j.AdClickThru), a.unsubscribe(this.onAdInteraction, j.AdInteraction), a.unsubscribe(this.onAdUserAcceptInvitation, j.AdUserAcceptInvitation), a.unsubscribe(this.onAdUserMinimize, j.AdUserMinimize), a.unsubscribe(this.onAdUserClose, j.AdUserClose), a.unsubscribe(this.onAdPaused, j.AdPaused), a.unsubscribe(this.onAdPlaying, j.AdPlaying), a.unsubscribe(this.onAdLog, j.AdLog), a.unsubscribe(this.onAdError, j.AdError)
                }, a.consolidateEnvironmentVars = function(a) {
                    for (var b = {}, c = 0; c < a.length; c += 1)
                        for (var d in a[c]) a[c].hasOwnProperty(d) && (b[d] = a[c][d]);
                    return b
                }, a.prototype.chooseEnvironmentType = function(a) {
                    void 0 === a && (a = "html5");
                    for (var b = 0, c = a.split(","), d = 0; d < c.length; d += 1) {
                        switch (this.logger.log("Considering environment: " + c[d]), c[d]) {
                            case "flash":
                                i.detectFlash() && (b = 2);
                                break;
                            case "html5":
                                i.detectHTML5() && (b = 1)
                        }
                        if (0 !== b) {
                            this.logger.log("Selected environment: " + c[d]);
                            break
                        }
                    }
                    return 0 === b && this.logger.error("No available environment"), b
                }, a.isValidElement = function(a) {
                    return "object" == typeof a && null !== a && !!a.tagName
                }, a.isValidPlayer = function(a) {
                    return "object" == typeof a && null !== a && "function" == typeof a.canPlayType
                }, a
            }();
            return k
        }), define("InstanceData", ["require", "exports", "Utils"], function(a, b, c) {
            var d = function() {
                function a() {
                    this._debugLevel = null, this._defaultAdLinear = !0, this._disableIframes = !1, this.processInstanceData()
                }
                return a.prototype.getCallingURL = function() {
                    return this._callingURL
                }, a.prototype.getQueryStringParameters = function() {
                    return this._queryStringParameters
                }, a.prototype.getDefaultAdLinear = function() {
                    return this._defaultAdLinear
                }, a.prototype.getDisableIframes = function() {
                    return this._disableIframes
                }, a.prototype.getDebugLevel = function() {
                    return this._debugLevel
                }, a.prototype.processInstanceData = function() {
                    this._callingURL = c.retrieveCallingURL("LiveRail.AdManager"), this._queryStringParameters = c.parseQueryString(this._callingURL);
                    for (var a in this._queryStringParameters)
                        if (this._queryStringParameters.hasOwnProperty(a)) {
                            var b = this._queryStringParameters[a];
                            switch (a.toUpperCase()) {
                                case "DISABLEIFRAMES":
                                    this._disableIframes = c.returnBoolean(b, this._disableIframes);
                                    break;
                                case "LR_DEBUG":
                                    var d = c.returnUnsignedInt(b);
                                    isNaN(d) || (this._debugLevel = d);
                                    break;
                                case "ADLINEAR":
                                    this._defaultAdLinear = c.returnBoolean(b, this._defaultAdLinear)
                            }
                        }
                }, a
            }();
            return d
        }), define("getVPAIDAd", ["require", "exports", "AdapterFactory", "EnvironmentManager", "InstanceData", "Logger", "VPAIDSanitizer"], function(a, b, c, d, e, f, g) {
            function h() {
                var a = new e;
                a.getDisableIframes() && f.setDebugLevelOverride(0), null !== a.getDebugLevel() && f.setDebugLevelOverride(a.getDebugLevel()), c.setInstanceData(a);
                var b = new d(a),
                    h = g.sanitizeVPAIDInstance(b),
                    i = new f;
                return i.log("Loaded LiveRail.AdManager (release 2.5.5, build 201604261307):", h), i.log("Using calling URL:", a.getCallingURL()), i.log("Using instance data:", a), h
            }
            return h
        }), require("instantiateBabelPolyfills")(), require("getVPAIDAd")
    });

}
/*
     FILE ARCHIVED ON 09:26:28 Jan 09, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:08:44 Jul 14, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 313.573 (6)
  exclusion.robots: 0.262
  RedisCDXSource: 207.296
  captures_list: 1456.306
  PetaboxLoader3.resolve: 427.066 (2)
  esindex: 0.007
  CDXLines.iter: 107.242 (4)
  exclusion.robots.policy: 0.244
  LoadShardBlock: 399.789 (4)
  load_resource: 540.313
*/