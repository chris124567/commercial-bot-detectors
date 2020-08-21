! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/", t(t.s = 116)
}([function(e, t, n) {
    "use strict";
    (function(e) {
        function r(e) {
            return e
        }

        function i() {}

        function o(e, t, n, r, i) {
            void 0 === i && (i = !1);
            var o = function(t) {
                    return e()[t].bind(n())
                },
                a = function(e) {
                    return function() {
                        return t[e] = o(e), t[e].apply(null, arguments)
                    }
                };
            return r = r || Object.keys(e()), r.reduce(function(e, t) {
                return e[t] = i ? a(t) : o(t), e
            }, t)
        }

        function a(e, t) {
            return -1 !== e.indexOf(t)
        }

        function s(e, t) {
            var n = e.indexOf(t);
            return n >= 0 && e.splice(n, 1), e
        }

        function c(e, t) {
            return e.push(t), t
        }

        function u(e) {
            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
            var i = n.concat({}).reverse(),
                o = t.extend.apply(null, i);
            return t.extend({}, o, f(e || {}, Object.keys(o)))
        }

        function l(e, t) {
            var n = [];
            for (var r in e.path) {
                if (e.path[r] !== t.path[r]) break;
                n.push(e.path[r])
            }
            return n
        }

        function f(e, t) {
            var n = {};
            for (var r in e) - 1 !== t.indexOf(r) && (n[r] = e[r]);
            return n
        }

        function p(e, n) {
            return Object.keys(e).filter(A.not(t.inArray(n))).reduce(function(t, n) {
                return t[n] = e[n], t
            }, {})
        }

        function d(e, t) {
            return g(e, A.prop(t))
        }

        function h(e, n) {
            var r = x.isArray(e),
                i = r ? [] : {},
                o = r ? function(e) {
                    return i.push(e)
                } : function(e, t) {
                    return i[t] = e
                };
            return t.forEach(e, function(e, t) {
                n(e, t) && o(e, t)
            }), i
        }

        function v(e, n) {
            var r;
            return t.forEach(e, function(e, t) {
                r || n(e, t) && (r = e)
            }), r
        }

        function g(e, n, r) {
            return r = r || (x.isArray(e) ? [] : {}), t.forEach(e, function(e, t) {
                return r[t] = n(e, t)
            }), r
        }

        function m(e, t) {
            return e.push(t), e
        }

        function $(e, t) {
            return void 0 === t && (t = "assert failure"),
                function(n) {
                    var r = e(n);
                    if (!r) throw new Error(x.isFunction(t) ? t(n) : t);
                    return r
                }
        }

        function y() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (0 === e.length) return [];
            for (var n = e.reduce(function(e, t) {
                    return Math.min(t.length, e)
                }, 9007199254740991), r = [], i = function(t) {
                    switch (e.length) {
                        case 1:
                            r.push([e[0][t]]);
                            break;
                        case 2:
                            r.push([e[0][t], e[1][t]]);
                            break;
                        case 3:
                            r.push([e[0][t], e[1][t], e[2][t]]);
                            break;
                        case 4:
                            r.push([e[0][t], e[1][t], e[2][t], e[3][t]]);
                            break;
                        default:
                            r.push(e.map(function(e) {
                                return e[t]
                            }))
                    }
                }, o = 0; o < n; o++) i(o);
            return r
        }

        function b(e, t) {
            var n, r;
            if (x.isArray(t) && (n = t[0], r = t[1]), !x.isString(n)) throw new Error("invalid parameters to applyPairs");
            return e[n] = r, e
        }

        function w(e) {
            return e.length && e[e.length - 1] || void 0
        }

        function S(e, n) {
            return n && Object.keys(n).forEach(function(e) {
                return delete n[e]
            }), n || (n = {}), t.extend(n, e)
        }

        function C(e, t, n) {
            if (x.isArray(e)) return e.forEach(t, n);
            Object.keys(e).forEach(function(n) {
                return t(e[n], n)
            })
        }

        function k(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (n)
                    for (var r = Object.keys(n), i = 0; i < r.length; i++) e[r[i]] = n[r[i]]
            }
            return e
        }

        function E(e, t) {
            if (e === t) return !0;
            if (null === e || null === t) return !1;
            if (e !== e && t !== t) return !0;
            var n = typeof e;
            if (n !== typeof t || "object" !== n) return !1;
            var r = [e, t];
            if (A.all(x.isArray)(r)) return _(e, t);
            if (A.all(x.isDate)(r)) return e.getTime() === t.getTime();
            if (A.all(x.isRegExp)(r)) return e.toString() === t.toString();
            if (A.all(x.isFunction)(r)) return !0;
            if ([x.isFunction, x.isArray, x.isDate, x.isRegExp].map(A.any).reduce(function(e, t) {
                    return e || !!t(r)
                }, !1)) return !1;
            var i = {};
            for (var o in e) {
                if (!E(e[o], t[o])) return !1;
                i[o] = !0
            }
            for (var o in t)
                if (!i[o]) return !1;
            return !0
        }

        function _(e, t) {
            return e.length === t.length && y(e, t).reduce(function(e, t) {
                return e && E(t[0], t[1])
            }, !0)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var x = n(1),
            A = n(2),
            T = n(4);
        t.root = "object" == typeof self && self.self === self && self || "object" == typeof e && e.global === e && e || this;
        var R = t.root.angular || {};
        t.fromJson = R.fromJson || JSON.parse.bind(JSON), t.toJson = R.toJson || JSON.stringify.bind(JSON), t.forEach = R.forEach || C, t.extend = Object.assign || k, t.equals = R.equals || E, t.identity = r, t.noop = i, t.createProxyFunctions = o, t.inherit = function(e, n) {
            return t.extend(Object.create(e), n)
        }, t.inArray = A.curry(a), t._inArray = a, t.removeFrom = A.curry(s), t._removeFrom = s, t.pushTo = A.curry(c), t._pushTo = c, t.deregAll = function(e) {
            return e.slice().forEach(function(n) {
                "function" == typeof n && n(), t.removeFrom(e, n)
            })
        }, t.defaults = u, t.mergeR = function(e, n) {
            return t.extend(e, n)
        }, t.ancestors = l, t.pick = f, t.omit = p, t.pluck = d, t.filter = h, t.find = v, t.mapObj = g, t.map = g, t.values = function(e) {
            return Object.keys(e).map(function(t) {
                return e[t]
            })
        }, t.allTrueR = function(e, t) {
            return e && t
        }, t.anyTrueR = function(e, t) {
            return e || t
        }, t.unnestR = function(e, t) {
            return e.concat(t)
        }, t.flattenR = function(e, n) {
            return x.isArray(n) ? e.concat(n.reduce(t.flattenR, [])) : m(e, n)
        }, t.pushR = m, t.uniqR = function(e, n) {
            return t.inArray(e, n) ? e : m(e, n)
        }, t.unnest = function(e) {
            return e.reduce(t.unnestR, [])
        }, t.flatten = function(e) {
            return e.reduce(t.flattenR, [])
        }, t.assertPredicate = $, t.assertMap = $, t.assertFn = $, t.pairs = function(e) {
            return Object.keys(e).map(function(t) {
                return [t, e[t]]
            })
        }, t.arrayTuples = y, t.applyPairs = b, t.tail = w, t.copy = S, t._extend = k, t.silenceUncaughtInPromise = function(e) {
            return e.catch(function(e) {
                return 0
            }) && e
        }, t.silentRejection = function(e) {
            return t.silenceUncaughtInPromise(T.services.$q.reject(e))
        }
    }).call(t, n(115))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (t.isArray(e) && e.length) {
            var n = e.slice(0, -1),
                r = e.slice(-1);
            return !(n.filter(i.not(t.isString)).length || r.filter(i.not(t.isFunction)).length)
        }
        return t.isFunction(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(2),
        o = n(25),
        a = Object.prototype.toString,
        s = function(e) {
            return function(t) {
                return typeof t === e
            }
        };
    t.isUndefined = s("undefined"), t.isDefined = i.not(t.isUndefined), t.isNull = function(e) {
        return null === e
    }, t.isNullOrUndefined = i.or(t.isNull, t.isUndefined), t.isFunction = s("function"), t.isNumber = s("number"), t.isString = s("string"), t.isObject = function(e) {
        return null !== e && "object" == typeof e
    }, t.isArray = Array.isArray, t.isDate = function(e) {
        return "[object Date]" === a.call(e)
    }, t.isRegExp = function(e) {
        return "[object RegExp]" === a.call(e)
    }, t.isState = o.StateObject.isState, t.isInjectable = r, t.isPromise = i.and(t.isObject, i.pipe(i.prop("then"), t.isFunction))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        function t(n) {
            return n.length >= r ? e.apply(null, n) : function() {
                return t(n.concat([].slice.apply(arguments)))
            }
        }
        var n = [].slice.apply(arguments, [1]),
            r = e.length;
        return t(n)
    }

    function i() {
        var e = arguments,
            t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--;) r = e[n].call(this, r);
            return r
        }
    }

    function o() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return i.apply(null, [].slice.call(arguments).reverse())
    }

    function a(e, t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.apply(null, n) && t.apply(null, n)
        }
    }

    function s(e, t) {
        return function() {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return e.apply(null, n) || t.apply(null, n)
        }
    }

    function c(e, t) {
        return function(n) {
            return n[e].apply(n, t)
        }
    }

    function u(e) {
        return function(t) {
            for (var n = 0; n < e.length; n++)
                if (e[n][0](t)) return e[n][1](t)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.curry = r, t.compose = i, t.pipe = o, t.prop = function(e) {
        return function(t) {
            return t && t[e]
        }
    }, t.propEq = r(function(e, t, n) {
        return n && n[e] === t
    }), t.parse = function(e) {
        return o.apply(null, e.split(".").map(t.prop))
    }, t.not = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return !e.apply(null, t)
        }
    }, t.and = a, t.or = s, t.all = function(e) {
        return function(t) {
            return t.reduce(function(t, n) {
                return t && !!e(n)
            }, !0)
        }
    }, t.any = function(e) {
        return function(t) {
            return t.reduce(function(t, n) {
                return t || !!e(n)
            }, !1)
        }
    }, t.is = function(e) {
        return function(t) {
            return null != t && t.constructor === e || t instanceof e
        }
    }, t.eq = function(e) {
        return function(t) {
            return e === t
        }
    }, t.val = function(e) {
        return function() {
            return e
        }
    }, t.invoke = c, t.pattern = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = {
        username: "mikaela",
        password: "prot3cted",
        pronoun: "her"
    };
    t.BASE_API_HOST = "https://bank-app.behaviosec.com", t.DEBUG = !1, t.ACCOUNT_TAKEOVER_CREDENTIALS = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.notImplemented = function(e) {
        return function() {
            throw new Error(e + "(): No coreservices implementation for UI-Router is loaded.")
        }
    };
    var r = {
        $q: void 0,
        $injector: void 0
    };
    t.services = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(0)), r(n(4)), r(n(21)), r(n(2)), r(n(1)), r(n(22)), r(n(6)), r(n(7))
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return t.length <= e ? t : t.substr(0, e - 3) + "..."
    }

    function i(e, t) {
        for (; t.length < e;) t += " ";
        return t
    }

    function o(e) {
        return e.replace(/^([A-Z])/, function(e) {
            return e.toLowerCase()
        }).replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        })
    }

    function a(e) {
        var t = s(e),
            n = t.match(/^(function [^ ]+\([^)]*\))/),
            r = n ? n[1] : t,
            i = e.name || "";
        return i && r.match(/function \(/) ? "function " + i + r.substr(9) : r
    }

    function s(e) {
        var t = f.isArray(e) ? e.slice(-1)[0] : e;
        return t && t.toString() || "undefined"
    }

    function c(e) {
        function t(e) {
            if (f.isObject(e)) {
                if (-1 !== n.indexOf(e)) return "[circular ref]";
                n.push(e)
            }
            return $(e)
        }
        var n = [];
        return JSON.stringify(e, function(e, n) {
            return t(n)
        }).replace(/\\"/g, '"')
    }

    function u(e) {
        var t = new RegExp("(" + e + ")", "g");
        return function(e) {
            return e.split(t).filter(d.identity)
        }
    }

    function l(e, t) {
        return f.isString(d.tail(e)) && f.isString(t) ? e.slice(0, -1).concat(d.tail(e) + t) : d.pushR(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var f = n(1),
        p = n(12),
        d = n(0),
        h = n(2),
        v = n(17),
        g = n(13);
    t.maxLength = r, t.padString = i, t.kebobString = o, t.functionToString = a, t.fnToString = s;
    var m = null,
        $ = function(e) {
            var t = p.Rejection.isRejectionPromise;
            return (m = m || h.pattern([
                [h.not(f.isDefined), h.val("undefined")],
                [f.isNull, h.val("null")],
                [f.isPromise, h.val("[Promise]")],
                [t, function(e) {
                    return e._transitionRejection.toString()
                }],
                [h.is(p.Rejection), h.invoke("toString")],
                [h.is(v.Transition), h.invoke("toString")],
                [h.is(g.Resolvable), h.invoke("toString")],
                [f.isInjectable, a],
                [h.val(!0), d.identity]
            ]))(e)
        };
    t.stringify = c, t.beforeAfterSubstr = function(e) {
        return function(t) {
            if (!t) return ["", ""];
            var n = t.indexOf(e);
            return -1 === n ? [t, ""] : [t.substr(0, n), t.substr(n + 1)]
        }
    }, t.hostRegex = new RegExp("^(?:[a-z]+:)?//[^/]+/"), t.stripLastPathElement = function(e) {
        return e.replace(/\/[^\/]*$/, "")
    }, t.splitHash = t.beforeAfterSubstr("#"), t.splitQuery = t.beforeAfterSubstr("?"), t.splitEqual = t.beforeAfterSubstr("="), t.trimHashVal = function(e) {
        return e ? e.replace(/^#/, "") : ""
    }, t.splitOnDelim = u, t.joinNeighborsR = l
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (!e) return "ui-view (defunct)";
        var t = e.creationContext ? e.creationContext.name || "(root)" : "(none)";
        return "[ui-view#" + e.id + " " + e.$type + ":" + e.fqn + " (" + e.name + "@" + t + ")]"
    }

    function i(e) {
        return s.isNumber(e) ? o[e] : o[o[e]]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, a = n(2),
        s = n(1),
        c = n(6),
        u = function(e) {
            var t = e.viewDecl,
                n = t.$context.name || "(root)";
            return "[View#" + e.$id + " from '" + n + "' state]: target ui-view: '" + t.$uiViewName + "@" + t.$uiViewContextAnchor + "'"
        },
        l = Function.prototype.bind.call(console.log, console),
        f = s.isFunction(console.table) ? console.table.bind(console) : l.bind(console);
    ! function(e) {
        e[e.RESOLVE = 0] = "RESOLVE", e[e.TRANSITION = 1] = "TRANSITION", e[e.HOOK = 2] = "HOOK", e[e.UIVIEW = 3] = "UIVIEW", e[e.VIEWCONFIG = 4] = "VIEWCONFIG"
    }(o || (o = {})), t.Category = o;
    var p = a.parse("$id"),
        d = a.parse("router.$id"),
        h = function(e) {
            return "Transition #" + p(e) + "-" + d(e)
        },
        v = function() {
            function e() {
                this._enabled = {}, this.approximateDigests = 0
            }
            return e.prototype._set = function(e, t) {
                var n = this;
                t.length || (t = Object.keys(o).map(function(e) {
                    return parseInt(e, 10)
                }).filter(function(e) {
                    return !isNaN(e)
                }).map(function(e) {
                    return o[e]
                })), t.map(i).forEach(function(t) {
                    return n._enabled[t] = e
                })
            }, e.prototype.enable = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._set(!0, e)
            }, e.prototype.disable = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._set(!1, e)
            }, e.prototype.enabled = function(e) {
                return !!this._enabled[i(e)]
            }, e.prototype.traceTransitionStart = function(e) {
                this.enabled(o.TRANSITION) && console.log(h(e) + ": Started  -> " + c.stringify(e))
            }, e.prototype.traceTransitionIgnored = function(e) {
                this.enabled(o.TRANSITION) && console.log(h(e) + ": Ignored  <> " + c.stringify(e))
            }, e.prototype.traceHookInvocation = function(e, t, n) {
                if (this.enabled(o.HOOK)) {
                    var r = a.parse("traceData.hookType")(n) || "internal",
                        i = a.parse("traceData.context.state.name")(n) || a.parse("traceData.context")(n) || "unknown",
                        s = c.functionToString(e.registeredHook.callback);
                    console.log(h(t) + ":   Hook -> " + r + " context: " + i + ", " + c.maxLength(200, s))
                }
            }, e.prototype.traceHookResult = function(e, t, n) {
                this.enabled(o.HOOK) && console.log(h(t) + ":   <- Hook returned: " + c.maxLength(200, c.stringify(e)))
            }, e.prototype.traceResolvePath = function(e, t, n) {
                this.enabled(o.RESOLVE) && console.log(h(n) + ":         Resolving " + e + " (" + t + ")")
            }, e.prototype.traceResolvableResolved = function(e, t) {
                this.enabled(o.RESOLVE) && console.log(h(t) + ":               <- Resolved  " + e + " to: " + c.maxLength(200, c.stringify(e.data)))
            }, e.prototype.traceError = function(e, t) {
                this.enabled(o.TRANSITION) && console.log(h(t) + ": <- Rejected " + c.stringify(t) + ", reason: " + e)
            }, e.prototype.traceSuccess = function(e, t) {
                this.enabled(o.TRANSITION) && console.log(h(t) + ": <- Success  " + c.stringify(t) + ", final state: " + e.name)
            }, e.prototype.traceUIViewEvent = function(e, t, n) {
                void 0 === n && (n = ""), this.enabled(o.UIVIEW) && console.log("ui-view: " + c.padString(30, e) + " " + r(t) + n)
            }, e.prototype.traceUIViewConfigUpdated = function(e, t) {
                this.enabled(o.UIVIEW) && this.traceUIViewEvent("Updating", e, " with ViewConfig from context='" + t + "'")
            }, e.prototype.traceUIViewFill = function(e, t) {
                this.enabled(o.UIVIEW) && this.traceUIViewEvent("Fill", e, " with: " + c.maxLength(200, t))
            }, e.prototype.traceViewSync = function(e) {
                if (this.enabled(o.VIEWCONFIG)) {
                    var t = "uiview component fqn",
                        n = "view config state (view name)",
                        r = e.map(function(e) {
                            var r = e.uiView,
                                i = e.viewConfig,
                                o = r && r.fqn,
                                a = i && i.viewDecl.$context.name + ": (" + i.viewDecl.$name + ")";
                            return s = {}, s[t] = o, s[n] = a, s;
                            var s
                        }).sort(function(e, n) {
                            return (e[t] || "").localeCompare(n[t] || "")
                        });
                    f(r)
                }
            }, e.prototype.traceViewServiceEvent = function(e, t) {
                this.enabled(o.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + u(t))
            }, e.prototype.traceViewServiceUIViewEvent = function(e, t) {
                this.enabled(o.VIEWCONFIG) && console.log("VIEWCONFIG: " + e + " " + r(t))
            }, e
        }();
    t.Trace = v;
    var g = new v;
    t.trace = g
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function() {
            function e(t) {
                r(this, e), this.username = t, this.credentials = 0, this.transfers = 0, this.pending_transfers = 0, this.pending_credentials = 0
            }
            return i(e, [{
                key: "total_transfers",
                value: function() {
                    return this.transfers + this.pending_transfers
                }
            }, {
                key: "total_credentials",
                value: function() {
                    return this.credentials + this.pending_credentials
                }
            }]), e
        }(),
        a = function e(t, n, i) {
            r(this, e), this.token = t, this.sessionId = n, this.user = i
        },
        s = function e(t, n, i) {
            r(this, e), this.id = t, this.name = n, this.balance = i
        },
        c = function() {
            function e(t, n, i, o, a) {
                r(this, e), this.id = t, this.timestamp = n, this.description = i, this.amount = o, this.balance = a
            }
            return i(e, [{
                key: "date",
                value: function() {
                    return new Date(this.timestamp).toDateString()
                }
            }]), e
        }(),
        u = function e(t, n, i) {
            r(this, e), this.id = t, this.name = n, this.fee = i
        },
        l = function e(t, n, i) {
            r(this, e), this.id = t, this.type = n, this.balance = i
        },
        f = {
            NOT_STARTED: 0,
            IN_PROGRESS: 1,
            COMPLETED: 2
        },
        p = function() {
            function e(t, n, i) {
                r(this, e), this.key = t, this.name = n, this.steps = i, this.step = 0, this.state = f.NOT_STARTED, this.enabled = !1
            }
            return i(e, [{
                key: "enable",
                value: function() {
                    this.enabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this.enabled = !1
                }
            }]), e
        }();
    t.User = o, t.AuthSession = a, t.BankAccount = s, t.Transaction = c, t.CreditCardType = u, t.CreditCard = l, t.Tutorial = p, t.TUTORIAL_STATE = f
}, function(e, t, n) {
    "use strict";

    function r(e) {
        function t() {
            return e.value
        }
        return e = h(e) && {
            value: e
        } || e, t.__cacheable = !0, c.extend(e, {
            $$fn: l.isInjectable(e.value) ? e.value : t
        })
    }

    function i(e, t, n, r, i) {
        if (e.type && t && "string" !== t.name) throw new Error("Param '" + r + "' has two type configurations.");
        if (e.type && t && "string" === t.name && i.type(e.type)) return i.type(e.type);
        if (t) return t;
        if (!e.type) {
            var o = n === s.CONFIG ? "any" : n === s.PATH ? "path" : n === s.SEARCH ? "query" : "string";
            return i.type(o)
        }
        return e.type instanceof p.ParamType ? e.type : i.type(e.type)
    }

    function o(e, t, n) {
        var r = e.squash;
        if (!t || !1 === r) return !1;
        if (!l.isDefined(r) || null == r) return n;
        if (!0 === r || l.isString(r)) return r;
        throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
    }

    function a(e, t, n, r) {
        var i = [{
                from: "",
                to: n || t ? void 0 : ""
            }, {
                from: null,
                to: n || t ? void 0 : ""
            }],
            o = l.isArray(e.replace) ? e.replace : [];
        l.isString(r) && o.push({
            from: r,
            to: void 0
        });
        var a = c.map(o, u.prop("from"));
        return c.filter(i, function(e) {
            return -1 === a.indexOf(e.from)
        }).concat(o)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, c = n(0),
        u = n(2),
        l = n(1),
        f = n(4),
        p = n(23),
        d = Object.prototype.hasOwnProperty,
        h = function(e) {
            return 0 === ["value", "type", "squash", "array", "dynamic"].filter(d.bind(e || {})).length
        };
    ! function(e) {
        e[e.PATH = 0] = "PATH", e[e.SEARCH = 1] = "SEARCH", e[e.CONFIG = 2] = "CONFIG"
    }(s || (s = {})), t.DefType = s;
    var v = function() {
        function e(e, t, n, u, f) {
            function p() {
                var t = {
                        array: u === s.SEARCH && "auto"
                    },
                    r = e.match(/\[\]$/) ? {
                        array: !0
                    } : {};
                return c.extend(t, r, n).array
            }
            n = r(n), t = i(n, t, u, e, f.paramTypes);
            var d = p();
            t = d ? t.$asArray(d, u === s.SEARCH) : t;
            var h = void 0 !== n.value || u === s.SEARCH,
                v = l.isDefined(n.dynamic) ? !!n.dynamic : !!t.dynamic,
                g = l.isDefined(n.raw) ? !!n.raw : !!t.raw,
                m = o(n, h, f.defaultSquashPolicy()),
                $ = a(n, d, h, m),
                y = l.isDefined(n.inherit) ? !!n.inherit : !!t.inherit;
            c.extend(this, {
                id: e,
                type: t,
                location: u,
                isOptional: h,
                dynamic: v,
                raw: g,
                squash: m,
                replace: $,
                inherit: y,
                array: d,
                config: n
            })
        }
        return e.values = function(e, t) {
            void 0 === t && (t = {});
            for (var n = {}, r = 0, i = e; r < i.length; r++) {
                var o = i[r];
                n[o.id] = o.value(t[o.id])
            }
            return n
        }, e.changed = function(e, t, n) {
            return void 0 === t && (t = {}), void 0 === n && (n = {}), e.filter(function(e) {
                return !e.type.equals(t[e.id], n[e.id])
            })
        }, e.equals = function(t, n, r) {
            return void 0 === n && (n = {}), void 0 === r && (r = {}), 0 === e.changed(t, n, r).length
        }, e.validates = function(e, t) {
            return void 0 === t && (t = {}), e.map(function(e) {
                return e.validates(t[e.id])
            }).reduce(c.allTrueR, !0)
        }, e.prototype.isDefaultValue = function(e) {
            return this.isOptional && this.type.equals(this.value(), e)
        }, e.prototype.value = function(e) {
            var t = this,
                n = function() {
                    if (t._defaultValueCache) return t._defaultValueCache.defaultValue;
                    if (!f.services.$injector) throw new Error("Injectable functions cannot be called at configuration time");
                    var e = f.services.$injector.invoke(t.config.$$fn);
                    if (null !== e && void 0 !== e && !t.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + t.id + "' is not an instance of ParamType (" + t.type.name + ")");
                    return t.config.$$fn.__cacheable && (t._defaultValueCache = {
                        defaultValue: e
                    }), e
                };
            return e = function(e) {
                for (var n = 0, r = t.replace; n < r.length; n++) {
                    var i = r[n];
                    if (i.from === e) return i.to
                }
                return e
            }(e), l.isUndefined(e) ? n() : this.type.$normalize(e)
        }, e.prototype.isSearch = function() {
            return this.location === s.SEARCH
        }, e.prototype.validates = function(e) {
            if ((l.isUndefined(e) || null === e) && this.isOptional) return !0;
            var t = this.type.$normalize(e);
            if (!this.type.is(t)) return !1;
            var n = this.type.encode(t);
            return !(l.isString(n) && !this.type.pattern.exec(n))
        }, e.prototype.toString = function() {
            return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}"
        }, e
    }();
    t.Param = v
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n(6),
        o = n(5),
        a = function() {
            function e(e, t, n, r) {
                this._stateRegistry = e, this._identifier = t, this._identifier = t, this._params = o.extend({}, n || {}), this._options = o.extend({}, r || {}), this._definition = e.matcher.find(t, this._options.relative)
            }
            return e.prototype.name = function() {
                return this._definition && this._definition.name || this._identifier
            }, e.prototype.identifier = function() {
                return this._identifier
            }, e.prototype.params = function() {
                return this._params
            }, e.prototype.$state = function() {
                return this._definition
            }, e.prototype.state = function() {
                return this._definition && this._definition.self
            }, e.prototype.options = function() {
                return this._options
            }, e.prototype.exists = function() {
                return !(!this._definition || !this._definition.self)
            }, e.prototype.valid = function() {
                return !this.error()
            }, e.prototype.error = function() {
                var e = this.options().relative;
                if (!this._definition && e) {
                    var t = e.name ? e.name : e;
                    return "Could not resolve '" + this.name() + "' from state '" + t + "'"
                }
                return this._definition ? this._definition.self ? void 0 : "State '" + this.name() + "' has an invalid definition" : "No such state '" + this.name() + "'"
            }, e.prototype.toString = function() {
                return "'" + this.name() + "'" + i.stringify(this.params())
            }, e.prototype.withState = function(t) {
                return new e(this._stateRegistry, t, this._params, this._options)
            }, e.prototype.withParams = function(t, n) {
                void 0 === n && (n = !1);
                var r = n ? t : o.extend({}, this._params, t);
                return new e(this._stateRegistry, this._identifier, r, this._options)
            }, e.prototype.withOptions = function(t, n) {
                void 0 === n && (n = !1);
                var r = n ? t : o.extend({}, this._options, t);
                return new e(this._stateRegistry, this._identifier, this._params, r)
            }, e.isDef = function(e) {
                return e && e.state && (r.isString(e.state) || r.isString(e.state.name))
            }, e
        }();
    t.TargetState = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r;
    ! function(e) {
        e[e.CREATE = 0] = "CREATE", e[e.BEFORE = 1] = "BEFORE", e[e.RUN = 2] = "RUN", e[e.SUCCESS = 3] = "SUCCESS", e[e.ERROR = 4] = "ERROR"
    }(r || (r = {})), t.TransitionHookPhase = r;
    var i;
    ! function(e) {
        e[e.TRANSITION = 0] = "TRANSITION", e[e.STATE = 1] = "STATE"
    }(i || (i = {})), t.TransitionHookScope = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = n(0),
        o = n(6),
        a = n(2);
    ! function(e) {
        e[e.SUPERSEDED = 2] = "SUPERSEDED", e[e.ABORTED = 3] = "ABORTED", e[e.INVALID = 4] = "INVALID", e[e.IGNORED = 5] = "IGNORED", e[e.ERROR = 6] = "ERROR"
    }(r || (r = {})), t.RejectType = r;
    var s = 0,
        c = function() {
            function e(e, t, n) {
                this.$id = s++, this.type = e, this.message = t, this.detail = n
            }
            return e.isRejectionPromise = function(t) {
                return t && "function" == typeof t.then && a.is(e)(t._transitionRejection)
            }, e.superseded = function(t, n) {
                var i = "The transition has been superseded by a different transition",
                    o = new e(r.SUPERSEDED, i, t);
                return n && n.redirected && (o.redirected = !0), o
            }, e.redirected = function(t) {
                return e.superseded(t, {
                    redirected: !0
                })
            }, e.invalid = function(t) {
                return new e(r.INVALID, "This transition is invalid", t)
            }, e.ignored = function(t) {
                return new e(r.IGNORED, "The transition was ignored", t)
            }, e.aborted = function(t) {
                return new e(r.ABORTED, "The transition has been aborted", t)
            }, e.errored = function(t) {
                return new e(r.ERROR, "The transition errored", t)
            }, e.normalize = function(t) {
                return a.is(e)(t) ? t : e.errored(t)
            }, e.prototype.toString = function() {
                var e = function(e) {
                        return e && e.toString !== Object.prototype.toString ? e.toString() : o.stringify(e)
                    },
                    t = e(this.detail),
                    n = this;
                return "Transition Rejection($id: " + n.$id + " type: " + n.type + ", message: " + n.message + ", detail: " + t + ")"
            }, e.prototype.toPromise = function() {
                return i.extend(i.silentRejection(this), {
                    _transitionRejection: this
                })
            }, e
        }();
    t.Rejection = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(4),
        o = n(7),
        a = n(6),
        s = n(1),
        c = n(1);
    t.defaultResolvePolicy = {
        when: "LAZY",
        async: "WAIT"
    };
    var u = function() {
        function e(t, n, o, a, u) {
            if (this.resolved = !1, this.promise = void 0, t instanceof e) r.extend(this, t);
            else if (s.isFunction(n)) {
                if (c.isNullOrUndefined(t)) throw new Error("new Resolvable(): token argument is required");
                if (!s.isFunction(n)) throw new Error("new Resolvable(): resolveFn argument must be a function");
                this.token = t, this.policy = a, this.resolveFn = n, this.deps = o || [], this.data = u, this.resolved = void 0 !== u, this.promise = this.resolved ? i.services.$q.when(this.data) : void 0
            } else if (s.isObject(t) && t.token && (t.hasOwnProperty("resolveFn") || t.hasOwnProperty("data"))) {
                var l = t;
                return new e(l.token, l.resolveFn, l.deps, l.policy, l.data)
            }
        }
        return e.prototype.getPolicy = function(e) {
            var n = this.policy || {},
                r = e && e.resolvePolicy || {};
            return {
                when: n.when || r.when || t.defaultResolvePolicy.when,
                async: n.async || r.async || t.defaultResolvePolicy.async
            }
        }, e.prototype.resolve = function(e, t) {
            var n = this,
                a = i.services.$q,
                s = function() {
                    return a.all(e.getDependencies(n).map(function(n) {
                        return n.get(e, t)
                    }))
                },
                c = function(e) {
                    return n.resolveFn.apply(null, e)
                },
                u = function(e) {
                    var t = e.cache(1);
                    return t.take(1).toPromise().then(function() {
                        return t
                    })
                },
                l = e.findNode(this),
                f = l && l.state,
                p = "RXWAIT" === this.getPolicy(f).async ? u : r.identity,
                d = function(e) {
                    return n.data = e, n.resolved = !0, n.resolveFn = null, o.trace.traceResolvableResolved(n, t), n.data
                };
            return this.promise = a.when().then(s).then(c).then(p).then(d)
        }, e.prototype.get = function(e, t) {
            return this.promise || this.resolve(e, t)
        }, e.prototype.toString = function() {
            return "Resolvable(token: " + a.stringify(this.token) + ", requires: [" + this.deps.map(a.stringify) + "])"
        }, e.prototype.clone = function() {
            return new e(this)
        }, e.fromData = function(t, n) {
            return new e(t, function() {
                return n
            }, null, null, n)
        }, e
    }();
    t.Resolvable = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(11),
        i = n(0),
        o = n(6),
        a = n(1),
        s = n(2),
        c = n(7),
        u = n(4),
        l = n(12),
        f = n(10),
        p = {
            current: i.noop,
            transition: null,
            traceData: {},
            bind: null
        },
        d = function() {
            function e(e, t, n, o) {
                var a = this;
                this.transition = e, this.stateContext = t, this.registeredHook = n, this.options = o, this.isSuperseded = function() {
                    return a.type.hookPhase === r.TransitionHookPhase.RUN && !a.options.transition.isActive()
                }, this.options = i.defaults(o, p), this.type = n.eventType
            }
            return e.chain = function(e, t) {
                var n = function(e, t) {
                    return e.then(function() {
                        return t.invokeHook()
                    })
                };
                return e.reduce(n, t || u.services.$q.when())
            }, e.invokeHooks = function(t, n) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r].invokeHook();
                    if (a.isPromise(i)) {
                        var o = t.slice(r + 1);
                        return e.chain(o, i).then(n)
                    }
                }
                return n()
            }, e.runAllHooks = function(e) {
                e.forEach(function(e) {
                    return e.invokeHook()
                })
            }, e.prototype.logError = function(e) {
                this.transition.router.stateService.defaultErrorHandler()(e)
            }, e.prototype.invokeHook = function() {
                var e = this,
                    t = this.registeredHook;
                if (!t._deregistered) {
                    var n = this.getNotCurrentRejection();
                    if (n) return n;
                    var r = this.options;
                    c.trace.traceHookInvocation(this, this.transition, r);
                    var i = function() {
                            return t.callback.call(r.bind, e.transition, e.stateContext)
                        },
                        o = function(e) {
                            return l.Rejection.normalize(e).toPromise()
                        },
                        s = function(n) {
                            return t.eventType.getErrorHandler(e)(n)
                        },
                        u = function(n) {
                            return t.eventType.getResultHandler(e)(n)
                        };
                    try {
                        var f = i();
                        return !this.type.synchronous && a.isPromise(f) ? f.catch(o).then(u, s) : u(f)
                    } catch (e) {
                        return s(l.Rejection.normalize(e))
                    } finally {
                        t.invokeLimit && ++t.invokeCount >= t.invokeLimit && t.deregister()
                    }
                }
            }, e.prototype.handleHookResult = function(e) {
                var t = this,
                    n = this.getNotCurrentRejection();
                return n || (a.isPromise(e) ? e.then(function(e) {
                    return t.handleHookResult(e)
                }) : (c.trace.traceHookResult(e, this.transition, this.options), !1 === e ? l.Rejection.aborted("Hook aborted transition").toPromise() : s.is(f.TargetState)(e) ? l.Rejection.redirected(e).toPromise() : void 0))
            }, e.prototype.getNotCurrentRejection = function() {
                var e = this.transition.router;
                return e._disposed ? l.Rejection.aborted("UIRouter instance #" + e.$id + " has been stopped (disposed)").toPromise() : this.transition._aborted ? l.Rejection.aborted().toPromise() : this.isSuperseded() ? l.Rejection.superseded(this.options.current()).toPromise() : void 0
            }, e.prototype.toString = function() {
                var e = this,
                    t = e.options,
                    n = e.registeredHook,
                    r = s.parse("traceData.hookType")(t) || "internal",
                    i = s.parse("traceData.context.state.name")(t) || s.parse("traceData.context")(t) || "unknown",
                    a = o.fnToString(n.callback);
                return r + " context: " + i + ", " + o.maxLength(200, a)
            }, e.HANDLE_RESULT = function(e) {
                return function(t) {
                    return e.handleHookResult(t)
                }
            }, e.LOG_REJECTED_RESULT = function(e) {
                return function(t) {
                    a.isPromise(t) && t.catch(function(t) {
                        return e.logError(l.Rejection.normalize(t))
                    })
                }
            }, e.LOG_ERROR = function(e) {
                return function(t) {
                    return e.logError(t)
                }
            }, e.REJECT_ERROR = function(e) {
                return function(e) {
                    return i.silentRejection(e)
                }
            }, e.THROW_ERROR = function(e) {
                return function(e) {
                    throw e
                }
            }, e
        }();
    t.TransitionHook = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(2),
        o = n(10),
        a = n(24),
        s = function() {
            function e() {}
            return e.makeTargetState = function(e, t) {
                var n = r.tail(t).state;
                return new o.TargetState(e, n, t.map(i.prop("paramValues")).reduce(r.mergeR, {}), {})
            }, e.buildPath = function(e) {
                var t = e.params();
                return e.$state().path.map(function(e) {
                    return new a.PathNode(e).applyRawParams(t)
                })
            }, e.buildToPath = function(t, n) {
                var r = e.buildPath(n);
                return n.options().inherit ? e.inheritParams(t, r, Object.keys(n.params())) : r
            }, e.applyViewConfigs = function(t, n, i) {
                n.filter(function(e) {
                    return r.inArray(i, e.state)
                }).forEach(function(i) {
                    var o = r.values(i.state.views || {}),
                        a = e.subPath(n, function(e) {
                            return e === i
                        }),
                        s = o.map(function(e) {
                            return t.createViewConfig(a, e)
                        });
                    i.views = s.reduce(r.unnestR, [])
                })
            }, e.inheritParams = function(e, t, n) {
                function o(e, t) {
                    var n = r.find(e, i.propEq("state", t));
                    return r.extend({}, n && n.paramValues)
                }

                function s(t) {
                    var i = r.extend({}, t && t.paramValues),
                        s = r.pick(i, n);
                    i = r.omit(i, n);
                    var u = r.omit(o(e, t.state) || {}, c),
                        l = r.extend(i, u, s);
                    return new a.PathNode(t.state).applyRawParams(l)
                }
                void 0 === n && (n = []);
                var c = e.map(function(e) {
                    return e.paramSchema
                }).reduce(r.unnestR, []).filter(function(e) {
                    return !e.inherit
                }).map(i.prop("id"));
                return t.map(s)
            }, e.treeChanges = function(t, n, r) {
                function i(e, t) {
                    var r = e.clone();
                    return r.paramValues = n[t].paramValues, r
                }
                for (var o = Math.min(t.length, n.length), a = 0, s = function(t, n) {
                        return t.equals(n, e.nonDynamicParams)
                    }; a < o && t[a].state !== r && s(t[a], n[a]);) a++;
                var c, u, l, f, p;
                c = t, u = c.slice(0, a), l = c.slice(a);
                var d = u.map(i);
                return f = n.slice(a), p = d.concat(f), {
                    from: c,
                    to: p,
                    retained: u,
                    retainedWithToParams: d,
                    exiting: l,
                    entering: f
                }
            }, e.matching = function(e, t, n) {
                var i = !1;
                return r.arrayTuples(e, t).reduce(function(e, t) {
                    var r = t[0],
                        o = t[1];
                    return i = i || !r.equals(o, n), i ? e : e.concat(r)
                }, [])
            }, e.equals = function(t, n, r) {
                return t.length === n.length && e.matching(t, n, r).length === t.length
            }, e.subPath = function(e, t) {
                var n = r.find(e, t),
                    i = e.indexOf(n);
                return -1 === i ? void 0 : e.slice(0, i + 1)
            }, e.nonDynamicParams = function(e) {
                return e.state.parameters({
                    inherit: !1
                }).filter(function(e) {
                    return !e.dynamic
                })
            }, e.paramValues = function(e) {
                return e.reduce(function(e, t) {
                    return r.extend(e, t.paramValues)
                }, {})
            }, e
        }();
    t.PathUtils = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(2),
        o = n(7),
        a = n(4),
        s = n(34),
        c = n(13),
        u = n(15),
        l = n(6),
        f = n(5),
        p = s.resolvePolicies.when,
        d = [p.EAGER, p.LAZY],
        h = [p.EAGER];
    t.NATIVE_INJECTOR_TOKEN = "Native Injector";
    var v = function() {
        function e(e) {
            this._path = e
        }
        return e.prototype.getTokens = function() {
            return this._path.reduce(function(e, t) {
                return e.concat(t.resolvables.map(function(e) {
                    return e.token
                }))
            }, []).reduce(r.uniqR, [])
        }, e.prototype.getResolvable = function(e) {
            var t = this._path.map(function(e) {
                return e.resolvables
            }).reduce(r.unnestR, []).filter(function(t) {
                return t.token === e
            });
            return r.tail(t)
        }, e.prototype.getPolicy = function(e) {
            var t = this.findNode(e);
            return e.getPolicy(t.state)
        }, e.prototype.subContext = function(t) {
            return new e(u.PathUtils.subPath(this._path, function(e) {
                return e.state === t
            }))
        }, e.prototype.addResolvables = function(e, t) {
            var n = r.find(this._path, i.propEq("state", t)),
                o = e.map(function(e) {
                    return e.token
                });
            n.resolvables = n.resolvables.filter(function(e) {
                return -1 === o.indexOf(e.token)
            }).concat(e)
        }, e.prototype.resolvePath = function(e, t) {
            var n = this;
            void 0 === e && (e = "LAZY");
            var c = r.inArray(d, e) ? e : "LAZY",
                u = c === s.resolvePolicies.when.EAGER ? h : d;
            o.trace.traceResolvePath(this._path, e, t);
            var l = function(e, t) {
                    return function(i) {
                        return r.inArray(e, n.getPolicy(i)[t])
                    }
                },
                f = this._path.reduce(function(e, r) {
                    var o = r.resolvables.filter(l(u, "when")),
                        a = o.filter(l(["NOWAIT"], "async")),
                        s = o.filter(i.not(l(["NOWAIT"], "async"))),
                        c = n.subContext(r.state),
                        f = function(e) {
                            return e.get(c, t).then(function(t) {
                                return {
                                    token: e.token,
                                    value: t
                                }
                            })
                        };
                    return a.forEach(f), e.concat(s.map(f))
                }, []);
            return a.services.$q.all(f)
        }, e.prototype.injector = function() {
            return this._injector || (this._injector = new g(this))
        }, e.prototype.findNode = function(e) {
            return r.find(this._path, function(t) {
                return r.inArray(t.resolvables, e)
            })
        }, e.prototype.getDependencies = function(e) {
            var t = this,
                n = this.findNode(e),
                i = u.PathUtils.subPath(this._path, function(e) {
                    return e === n
                }) || this._path,
                o = i.reduce(function(e, t) {
                    return e.concat(t.resolvables)
                }, []).filter(function(t) {
                    return t !== e
                }),
                a = function(e) {
                    var n = o.filter(function(t) {
                        return t.token === e
                    });
                    if (n.length) return r.tail(n);
                    var i = t.injector().getNative(e);
                    if (f.isUndefined(i)) throw new Error("Could not find Dependency Injection token: " + l.stringify(e));
                    return new c.Resolvable(e, function() {
                        return i
                    }, [], i)
                };
            return e.deps.map(a)
        }, e
    }();
    t.ResolveContext = v;
    var g = function() {
        function e(e) {
            this.context = e, this.native = this.get(t.NATIVE_INJECTOR_TOKEN) || a.services.$injector
        }
        return e.prototype.get = function(e) {
            var t = this.context.getResolvable(e);
            if (t) {
                if ("NOWAIT" === this.context.getPolicy(t).async) return t.get(this.context);
                if (!t.resolved) throw new Error("Resolvable async .get() not complete:" + l.stringify(t.token));
                return t.data
            }
            return this.getNative(e)
        }, e.prototype.getAsync = function(e) {
            var t = this.context.getResolvable(e);
            return t ? t.get(this.context) : a.services.$q.when(this.native.get(e))
        }, e.prototype.getNative = function(e) {
            return this.native && this.native.get(e)
        }, e
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(7),
        i = n(4),
        o = n(6),
        a = n(0),
        s = n(1),
        c = n(2),
        u = n(11),
        l = n(14),
        f = n(26),
        p = n(41),
        d = n(15),
        h = n(9),
        v = n(13),
        g = n(16),
        m = n(12),
        $ = c.prop("self"),
        y = function() {
            function e(e, t, n) {
                var r = this;
                if (this._deferred = i.services.$q.defer(), this.promise = this._deferred.promise, this._registeredHooks = {}, this._hookBuilder = new p.HookBuilder(this), this.isActive = function() {
                        return r.router.globals.transition === r
                    }, this.router = n, this._targetState = t, !t.valid()) throw new Error(t.error());
                this._options = a.extend({
                    current: c.val(this)
                }, t.options()), this.$id = n.transitionService._transitionCount++;
                var o = d.PathUtils.buildToPath(e, t);
                this._treeChanges = d.PathUtils.treeChanges(e, o, this._options.reloadState), this.createTransitionHookRegFns();
                var s = this._hookBuilder.buildHooksForPhase(u.TransitionHookPhase.CREATE);
                l.TransitionHook.invokeHooks(s, function() {
                    return null
                }), this.applyViewConfigs(n)
            }
            return e.prototype.onBefore = function(e, t, n) {}, e.prototype.onStart = function(e, t, n) {}, e.prototype.onExit = function(e, t, n) {}, e.prototype.onRetain = function(e, t, n) {}, e.prototype.onEnter = function(e, t, n) {}, e.prototype.onFinish = function(e, t, n) {}, e.prototype.onSuccess = function(e, t, n) {}, e.prototype.onError = function(e, t, n) {}, e.prototype.createTransitionHookRegFns = function() {
                var e = this;
                this.router.transitionService._pluginapi._getEvents().filter(function(e) {
                    return e.hookPhase !== u.TransitionHookPhase.CREATE
                }).forEach(function(t) {
                    return f.makeEvent(e, e.router.transitionService, t)
                })
            }, e.prototype.getHooks = function(e) {
                return this._registeredHooks[e]
            }, e.prototype.applyViewConfigs = function(e) {
                var t = this._treeChanges.entering.map(function(e) {
                    return e.state
                });
                d.PathUtils.applyViewConfigs(e.transitionService.$view, this._treeChanges.to, t)
            }, e.prototype.$from = function() {
                return a.tail(this._treeChanges.from).state
            }, e.prototype.$to = function() {
                return a.tail(this._treeChanges.to).state
            }, e.prototype.from = function() {
                return this.$from().self
            }, e.prototype.to = function() {
                return this.$to().self
            }, e.prototype.targetState = function() {
                return this._targetState
            }, e.prototype.is = function(t) {
                return t instanceof e ? this.is({
                    to: t.$to().name,
                    from: t.$from().name
                }) : !(t.to && !f.matchState(this.$to(), t.to) || t.from && !f.matchState(this.$from(), t.from))
            }, e.prototype.params = function(e) {
                return void 0 === e && (e = "to"), Object.freeze(this._treeChanges[e].map(c.prop("paramValues")).reduce(a.mergeR, {}))
            }, e.prototype.injector = function(e, t) {
                void 0 === t && (t = "to");
                var n = this._treeChanges[t];
                return e && (n = d.PathUtils.subPath(n, function(t) {
                    return t.state === e || t.state.name === e
                })), new g.ResolveContext(n).injector()
            }, e.prototype.getResolveTokens = function(e) {
                return void 0 === e && (e = "to"), new g.ResolveContext(this._treeChanges[e]).getTokens()
            }, e.prototype.addResolvable = function(e, t) {
                void 0 === t && (t = ""), e = c.is(v.Resolvable)(e) ? e : new v.Resolvable(e);
                var n = "string" == typeof t ? t : t.name,
                    r = this._treeChanges.to,
                    i = a.find(r, function(e) {
                        return e.state.name === n
                    });
                new g.ResolveContext(r).addResolvables([e], i.state)
            }, e.prototype.redirectedFrom = function() {
                return this._options.redirectedFrom || null
            }, e.prototype.originalTransition = function() {
                var e = this.redirectedFrom();
                return e && e.originalTransition() || this
            }, e.prototype.options = function() {
                return this._options
            }, e.prototype.entering = function() {
                return a.map(this._treeChanges.entering, c.prop("state")).map($)
            }, e.prototype.exiting = function() {
                return a.map(this._treeChanges.exiting, c.prop("state")).map($).reverse()
            }, e.prototype.retained = function() {
                return a.map(this._treeChanges.retained, c.prop("state")).map($)
            }, e.prototype.views = function(e, t) {
                void 0 === e && (e = "entering");
                var n = this._treeChanges[e];
                return n = t ? n.filter(c.propEq("state", t)) : n, n.map(c.prop("views")).filter(a.identity).reduce(a.unnestR, [])
            }, e.prototype.treeChanges = function(e) {
                return e ? this._treeChanges[e] : this._treeChanges
            }, e.prototype.redirect = function(e) {
                for (var t = 1, n = this; null != (n = n.redirectedFrom());)
                    if (++t > 20) throw new Error("Too many consecutive Transition redirects (20+)");
                var r = {
                    redirectedFrom: this,
                    source: "redirect"
                };
                "url" === this.options().source && !1 !== e.options().location && (r.location = "replace");
                var i = a.extend({}, this.options(), e.options(), r);
                e = e.withOptions(i, !0);
                var o = this.router.transitionService.create(this._treeChanges.from, e),
                    s = this._treeChanges.entering,
                    u = o._treeChanges.entering,
                    l = function(e) {
                        return function(t) {
                            return e && t.state.includes[e.name]
                        }
                    };
                return d.PathUtils.matching(u, s, d.PathUtils.nonDynamicParams).filter(c.not(l(e.options().reloadState))).forEach(function(e, t) {
                    e.resolvables = s[t].resolvables
                }), o
            }, e.prototype._changedParams = function() {
                var e = this._treeChanges;
                if (!this._options.reload && !e.exiting.length && !e.entering.length && e.to.length === e.from.length) {
                    if (!a.arrayTuples(e.to, e.from).map(function(e) {
                            return e[0].state !== e[1].state
                        }).reduce(a.anyTrueR, !1)) {
                        var t = e.to.map(function(e) {
                                return e.paramSchema
                            }),
                            n = [e.to, e.from].map(function(e) {
                                return e.map(function(e) {
                                    return e.paramValues
                                })
                            }),
                            r = n[0],
                            i = n[1];
                        return a.arrayTuples(t, r, i).map(function(e) {
                            var t = e[0],
                                n = e[1],
                                r = e[2];
                            return h.Param.changed(t, n, r)
                        }).reduce(a.unnestR, [])
                    }
                }
            }, e.prototype.dynamic = function() {
                var e = this._changedParams();
                return !!e && e.map(function(e) {
                    return e.dynamic
                }).reduce(a.anyTrueR, !1)
            }, e.prototype.ignored = function() {
                return !!this._ignoredReason()
            }, e.prototype._ignoredReason = function() {
                var e = this.router.globals.transition,
                    t = this._options.reloadState,
                    n = function(e, n) {
                        if (e.length !== n.length) return !1;
                        var r = d.PathUtils.matching(e, n);
                        return e.length === r.filter(function(e) {
                            return !t || !e.state.includes[t.name]
                        }).length
                    },
                    r = this.treeChanges(),
                    i = e && e.treeChanges();
                return i && n(i.to, r.to) && n(i.exiting, r.exiting) ? "SameAsPending" : 0 === r.exiting.length && 0 === r.entering.length && n(r.from, r.to) ? "SameAsCurrent" : void 0
            }, e.prototype.run = function() {
                var e = this,
                    t = l.TransitionHook.runAllHooks,
                    n = function(t) {
                        return e._hookBuilder.buildHooksForPhase(t)
                    },
                    o = function() {
                        r.trace.traceSuccess(e.$to(), e), e.success = !0, e._deferred.resolve(e.to()), t(n(u.TransitionHookPhase.SUCCESS))
                    },
                    a = function(i) {
                        r.trace.traceError(i, e), e.success = !1, e._deferred.reject(i), e._error = i, t(n(u.TransitionHookPhase.ERROR))
                    },
                    s = function() {
                        var e = n(u.TransitionHookPhase.RUN),
                            t = function() {
                                return i.services.$q.when(void 0)
                            };
                        return l.TransitionHook.invokeHooks(e, t)
                    },
                    c = function() {
                        var t = e.router.globals;
                        return t.lastStartedTransitionId = e.$id, t.transition = e, t.transitionHistory.enqueue(e), r.trace.traceTransitionStart(e), i.services.$q.when(void 0)
                    },
                    f = n(u.TransitionHookPhase.BEFORE);
                return l.TransitionHook.invokeHooks(f, c).then(s).then(o, a), this.promise
            }, e.prototype.valid = function() {
                return !this.error() || void 0 !== this.success
            }, e.prototype.abort = function() {
                s.isUndefined(this.success) && (this._aborted = !0)
            }, e.prototype.error = function() {
                var e = this.$to();
                if (e.self.abstract) return m.Rejection.invalid("Cannot transition to abstract state '" + e.name + "'");
                var t = e.parameters(),
                    n = this.params(),
                    r = t.filter(function(e) {
                        return !e.validates(n[e.id])
                    });
                if (r.length) {
                    var i = r.map(function(e) {
                            return "[" + e.id + ":" + o.stringify(n[e.id]) + "]"
                        }).join(", "),
                        a = "The following parameter values are not valid for state '" + e.name + "': " + i;
                    return m.Rejection.invalid(a)
                }
                return !1 === this.success ? this._error : void 0
            }, e.prototype.toString = function() {
                var e = this.from(),
                    t = this.to(),
                    n = function(e) {
                        return null !== e["#"] && void 0 !== e["#"] ? e : a.omit(e, ["#"])
                    };
                return "Transition#" + this.$id + "( '" + (s.isObject(e) ? e.name : e) + "'" + o.stringify(n(this._treeChanges.from.map(c.prop("paramValues")).reduce(a.mergeR, {}))) + " -> " + (this.valid() ? "" : "(X) ") + "'" + (s.isObject(t) ? t.name : t) + "'" + o.stringify(n(this.params())) + " )"
            }, e.diToken = e, e
        }();
    t.Transition = y
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = ["", ""],
            r = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!t) return r;
        switch (t.squash) {
            case !1:
                n = ["(", ")" + (t.isOptional ? "?" : "")];
                break;
            case !0:
                r = r.replace(/\/$/, ""), n = ["(?:/(", ")|/)?"];
                break;
            default:
                n = ["(" + t.squash + "|", ")?"]
        }
        return r + n[0] + t.type.pattern.source + n[1]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(2),
        a = n(1),
        s = n(9),
        c = n(6),
        u = function(e, t, n) {
            return e[t] = e[t] || n()
        },
        l = c.splitOnDelim("/"),
        f = function() {
            function e(t, n, a, s) {
                var c = this;
                this.config = s, this._cache = {
                    path: [this]
                }, this._children = [], this._params = [], this._segments = [], this._compiled = [], this.pattern = t, this.config = i.defaults(this.config, {
                    params: {},
                    strict: !0,
                    caseInsensitive: !1,
                    paramMap: i.identity
                });
                for (var u, l, f, p = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, d = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, h = [], v = 0, g = function(n) {
                        if (!e.nameValidator.test(n)) throw new Error("Invalid parameter name '" + n + "' in pattern '" + t + "'");
                        if (i.find(c._params, o.propEq("id", n))) throw new Error("Duplicate parameter name '" + n + "' in pattern '" + t + "'")
                    }, m = function(e, r) {
                        var o = e[2] || e[3],
                            a = r ? e[4] : e[4] || ("*" === e[1] ? "[\\s\\S]*" : null),
                            s = function(e) {
                                return i.inherit(n.type(r ? "query" : "path"), {
                                    pattern: new RegExp(e, c.config.caseInsensitive ? "i" : void 0)
                                })
                            };
                        return {
                            id: o,
                            regexp: a,
                            cfg: c.config.params[o],
                            segment: t.substring(v, e.index),
                            type: a ? n.type(a) || s(a) : null
                        }
                    };
                    (u = p.exec(t)) && (l = m(u, !1), !(l.segment.indexOf("?") >= 0));) g(l.id), this._params.push(a.fromPath(l.id, l.type, this.config.paramMap(l.cfg, !1))), this._segments.push(l.segment), h.push([l.segment, i.tail(this._params)]), v = p.lastIndex;
                f = t.substring(v);
                var $ = f.indexOf("?");
                if ($ >= 0) {
                    var y = f.substring($);
                    if (f = f.substring(0, $), y.length > 0)
                        for (v = 0; u = d.exec(y);) l = m(u, !0), g(l.id), this._params.push(a.fromSearch(l.id, l.type, this.config.paramMap(l.cfg, !0))), v = p.lastIndex
                }
                this._segments.push(f), this._compiled = h.map(function(e) {
                    return r.apply(null, e)
                }).concat(r(f))
            }
            return e.encodeDashes = function(e) {
                return encodeURIComponent(e).replace(/-/g, function(e) {
                    return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
                })
            }, e.pathSegmentsAndParams = function(e) {
                var t = e._segments,
                    n = e._params.filter(function(e) {
                        return e.location === s.DefType.PATH
                    });
                return i.arrayTuples(t, n.concat(void 0)).reduce(i.unnestR, []).filter(function(e) {
                    return "" !== e && a.isDefined(e)
                })
            }, e.queryParams = function(e) {
                return e._params.filter(function(e) {
                    return e.location === s.DefType.SEARCH
                })
            }, e.compare = function(t, n) {
                var r = function(t) {
                        return t._cache.segments = t._cache.segments || t._cache.path.map(e.pathSegmentsAndParams).reduce(i.unnestR, []).reduce(c.joinNeighborsR, []).map(function(e) {
                            return a.isString(e) ? l(e) : e
                        }).reduce(i.unnestR, [])
                    },
                    o = function(e) {
                        return e._cache.weights = e._cache.weights || r(e).map(function(e) {
                            return "/" === e ? 1 : a.isString(e) ? 2 : e instanceof s.Param ? 3 : void 0
                        })
                    },
                    u = function(e, t, n) {
                        for (var r = Math.max(e.length, t.length); e.length < r;) e.push(n);
                        for (; t.length < r;) t.push(n)
                    },
                    f = o(t),
                    p = o(n);
                u(f, p, 0);
                var d, h, v = i.arrayTuples(f, p);
                for (h = 0; h < v.length; h++)
                    if (0 !== (d = v[h][0] - v[h][1])) return d;
                return 0
            }, e.prototype.append = function(e) {
                return this._children.push(e), e._cache = {
                    path: this._cache.path.concat(e),
                    parent: this,
                    pattern: null
                }, e
            }, e.prototype.isRoot = function() {
                return this._cache.path[0] === this
            }, e.prototype.toString = function() {
                return this.pattern
            }, e.prototype.exec = function(e, t, n, r) {
                function s(e) {
                    var t = function(e) {
                            return e.split("").reverse().join("")
                        },
                        n = function(e) {
                            return e.replace(/\\-/g, "-")
                        },
                        r = t(e).split(/-(?!\\)/),
                        o = i.map(r, t);
                    return i.map(o, n).reverse()
                }
                var c = this;
                void 0 === t && (t = {}), void 0 === r && (r = {});
                var l = u(this._cache, "pattern", function() {
                    return new RegExp(["^", i.unnest(c._cache.path.map(o.prop("_compiled"))).join(""), !1 === c.config.strict ? "/?" : "", "$"].join(""), c.config.caseInsensitive ? "i" : void 0)
                }).exec(e);
                if (!l) return null;
                var f = this.parameters(),
                    p = f.filter(function(e) {
                        return !e.isSearch()
                    }),
                    d = f.filter(function(e) {
                        return e.isSearch()
                    }),
                    h = this._cache.path.map(function(e) {
                        return e._segments.length - 1
                    }).reduce(function(e, t) {
                        return e + t
                    }),
                    v = {};
                if (h !== l.length - 1) throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
                for (var g = 0; g < h; g++) {
                    for (var m = p[g], $ = l[g + 1], y = 0; y < m.replace.length; y++) m.replace[y].from === $ && ($ = m.replace[y].to);
                    $ && !0 === m.array && ($ = s($)), a.isDefined($) && ($ = m.type.decode($)), v[m.id] = m.value($)
                }
                return d.forEach(function(e) {
                    for (var n = t[e.id], r = 0; r < e.replace.length; r++) e.replace[r].from === n && (n = e.replace[r].to);
                    a.isDefined(n) && (n = e.type.decode(n)), v[e.id] = e.value(n)
                }), n && (v["#"] = n), v
            }, e.prototype.parameters = function(e) {
                return void 0 === e && (e = {}), !1 === e.inherit ? this._params : i.unnest(this._cache.path.map(function(e) {
                    return e._params
                }))
            }, e.prototype.parameter = function(e, t) {
                var n = this;
                void 0 === t && (t = {});
                var r = function() {
                        for (var t = 0, r = n._params; t < r.length; t++) {
                            var i = r[t];
                            if (i.id === e) return i
                        }
                    },
                    i = this._cache.parent;
                return r() || !1 !== t.inherit && i && i.parameter(e, t) || null
            }, e.prototype.validates = function(e) {
                var t = function(e, t) {
                    return !e || e.validates(t)
                };
                return e = e || {}, this.parameters().filter(function(t) {
                    return e.hasOwnProperty(t.id)
                }).map(function(n) {
                    return t(n, e[n.id])
                }).reduce(i.allTrueR, !0)
            }, e.prototype.format = function(t) {
                function n(e) {
                    var n = e.value(t[e.id]),
                        r = e.validates(n),
                        i = e.isDefaultValue(n);
                    return {
                        param: e,
                        value: n,
                        isValid: r,
                        isDefaultValue: i,
                        squash: !!i && e.squash,
                        encoded: e.type.encode(n)
                    }
                }
                void 0 === t && (t = {});
                var r = this._cache.path,
                    o = r.map(e.pathSegmentsAndParams).reduce(i.unnestR, []).map(function(e) {
                        return a.isString(e) ? e : n(e)
                    }),
                    s = r.map(e.queryParams).reduce(i.unnestR, []).map(n),
                    c = function(e) {
                        return !1 === e.isValid
                    };
                if (o.concat(s).filter(c).length) return null;
                var u = o.reduce(function(t, n) {
                        if (a.isString(n)) return t + n;
                        var r = n.squash,
                            o = n.encoded,
                            s = n.param;
                        return !0 === r ? t.match(/\/$/) ? t.slice(0, -1) : t : a.isString(r) ? t + r : !1 !== r ? t : null == o ? t : a.isArray(o) ? t + i.map(o, e.encodeDashes).join("-") : s.raw ? t + o : t + encodeURIComponent(o)
                    }, ""),
                    l = s.map(function(e) {
                        var t = e.param,
                            n = e.squash,
                            r = e.encoded,
                            o = e.isDefaultValue;
                        if (!(null == r || o && !1 !== n) && (a.isArray(r) || (r = [r]), 0 !== r.length)) return t.raw || (r = i.map(r, encodeURIComponent)), r.map(function(e) {
                            return t.id + "=" + e
                        })
                    }).filter(i.identity).reduce(i.unnestR, []).join("&");
                return u + (l ? "?" + l : "") + (t["#"] ? "#" + t["#"] : "")
            }, e.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/, e
        }();
    t.UrlMatcher = f
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5),
        i = n(28),
        o = function() {
            function e(e, t) {
                var n = this;
                this.fireAfterUpdate = t, this._listeners = [], this._listener = function(e) {
                    return n._listeners.forEach(function(t) {
                        return t(e)
                    })
                }, this.hash = function() {
                    return i.parseUrl(n._get()).hash
                }, this.path = function() {
                    return i.parseUrl(n._get()).path
                }, this.search = function() {
                    return i.getParams(i.parseUrl(n._get()).search)
                }, this._location = r.root.location, this._history = r.root.history
            }
            return e.prototype.url = function(e, t) {
                return void 0 === t && (t = !0), r.isDefined(e) && e !== this._get() && (this._set(null, null, e, t), this.fireAfterUpdate && this._listeners.forEach(function(t) {
                    return t({
                        url: e
                    })
                })), i.buildUrl(this)
            }, e.prototype.onChange = function(e) {
                var t = this;
                return this._listeners.push(e),
                    function() {
                        return r.removeFrom(t._listeners, e)
                    }
            }, e.prototype.dispose = function(e) {
                r.deregAll(this._listeners)
            }, e
        }();
    t.BaseLocationServices = o
}, function(e, t, n) {
    n(110), e.exports = angular
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.text = e, this.glob = e.split(".");
            var t = this.text.split(".").map(function(e) {
                return "**" === e ? "(?:|(?:\\.[^.]*)*)" : "*" === e ? "\\.[^.]*" : "\\." + e
            }).join("");
            this.regexp = new RegExp("^" + t + "$")
        }
        return e.is = function(e) {
            return !!/[!,*]+/.exec(e)
        }, e.fromString = function(t) {
            return e.is(t) ? new e(t) : null
        }, e.prototype.matches = function(e) {
            return this.regexp.test("." + e)
        }, e
    }();
    t.Glob = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e, t) {
                void 0 === e && (e = []), void 0 === t && (t = null), this._items = e, this._limit = t, this._evictListeners = [], this.onEvict = r.pushTo(this._evictListeners)
            }
            return e.prototype.enqueue = function(e) {
                var t = this._items;
                return t.push(e), this._limit && t.length > this._limit && this.evict(), e
            }, e.prototype.evict = function() {
                var e = this._items.shift();
                return this._evictListeners.forEach(function(t) {
                    return t(e)
                }), e
            }, e.prototype.dequeue = function() {
                if (this.size()) return this._items.splice(0, 1)[0]
            }, e.prototype.clear = function() {
                var e = this._items;
                return this._items = [], e
            }, e.prototype.size = function() {
                return this._items.length
            }, e.prototype.remove = function(e) {
                var t = this._items.indexOf(e);
                return t > -1 && this._items.splice(t, 1)[0]
            }, e.prototype.peekTail = function() {
                return this._items[this._items.length - 1]
            }, e.prototype.peekHead = function() {
                if (this.size()) return this._items[0]
            }, e
        }();
    t.Queue = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        function n(e) {
            return o.isArray(e) ? e : o.isDefined(e) ? [e] : []
        }

        function r(e) {
            switch (e.length) {
                case 0:
                    return;
                case 1:
                    return "auto" === t ? e[0] : e;
                default:
                    return e
            }
        }

        function a(e, t) {
            return function(a) {
                if (o.isArray(a) && 0 === a.length) return a;
                var s = n(a),
                    c = i.map(s, e);
                return !0 === t ? 0 === i.filter(c, function(e) {
                    return !e
                }).length : r(c)
            }
        }

        function s(e) {
            return function(t, r) {
                var i = n(t),
                    o = n(r);
                if (i.length !== o.length) return !1;
                for (var a = 0; a < i.length; a++)
                    if (!e(i[a], o[a])) return !1;
                return !0
            }
        }
        var c = this;
        ["encode", "decode", "equals", "$normalize"].forEach(function(t) {
            var n = e[t].bind(e),
                r = "equals" === t ? s : a;
            c[t] = r(n)
        }), i.extend(this, {
            dynamic: e.dynamic,
            name: e.name,
            pattern: e.pattern,
            inherit: e.inherit,
            is: a(e.is.bind(e), !0),
            $arrayMode: t
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(1),
        a = function() {
            function e(e) {
                this.pattern = /.*/, this.inherit = !0, i.extend(this, e)
            }
            return e.prototype.is = function(e, t) {
                return !0
            }, e.prototype.encode = function(e, t) {
                return e
            }, e.prototype.decode = function(e, t) {
                return e
            }, e.prototype.equals = function(e, t) {
                return e == t
            }, e.prototype.$subPattern = function() {
                var e = this.pattern.toString();
                return e.substr(1, e.length - 2)
            }, e.prototype.toString = function() {
                return "{ParamType:" + this.name + "}"
            }, e.prototype.$normalize = function(e) {
                return this.is(e) ? e : this.decode(e)
            }, e.prototype.$asArray = function(e, t) {
                if (!e) return this;
                if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
                return new r(this, e)
            }, e
        }();
    t.ParamType = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(2),
        o = n(9),
        a = function() {
            function e(t) {
                if (t instanceof e) {
                    var n = t;
                    this.state = n.state, this.paramSchema = n.paramSchema.slice(), this.paramValues = r.extend({}, n.paramValues), this.resolvables = n.resolvables.slice(), this.views = n.views && n.views.slice()
                } else {
                    var i = t;
                    this.state = i, this.paramSchema = i.parameters({
                        inherit: !1
                    }), this.paramValues = {}, this.resolvables = i.resolvables.map(function(e) {
                        return e.clone()
                    })
                }
            }
            return e.prototype.clone = function() {
                return new e(this)
            }, e.prototype.applyRawParams = function(e) {
                var t = function(t) {
                    return [t.id, t.value(e[t.id])]
                };
                return this.paramValues = this.paramSchema.reduce(function(e, n) {
                    return r.applyPairs(e, t(n))
                }, {}), this
            }, e.prototype.parameter = function(e) {
                return r.find(this.paramSchema, i.propEq("id", e))
            }, e.prototype.equals = function(e, t) {
                var n = this.diff(e, t);
                return n && 0 === n.length
            }, e.prototype.diff = function(e, t) {
                if (this.state !== e.state) return !1;
                var n = t ? t(this) : this.paramSchema;
                return o.Param.changed(n, this.paramValues, e.paramValues)
            }, e.clone = function(e) {
                return e.clone()
            }, e
        }();
    t.PathNode = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(2),
        o = n(21),
        a = n(1),
        s = function() {
            function e(t) {
                return e.create(t || {})
            }
            return e.create = function(t) {
                t = e.isStateClass(t) ? new t : t;
                var n = r.inherit(r.inherit(t, e.prototype));
                return t.$$state = function() {
                    return n
                }, n.self = t, n.__stateObjectCache = {
                    nameGlob: o.Glob.fromString(n.name)
                }, n
            }, e.prototype.is = function(e) {
                return this === e || this.self === e || this.fqn() === e
            }, e.prototype.fqn = function() {
                if (!(this.parent && this.parent instanceof this.constructor)) return this.name;
                var e = this.parent.fqn();
                return e ? e + "." + this.name : this.name
            }, e.prototype.root = function() {
                return this.parent && this.parent.root() || this
            }, e.prototype.parameters = function(e) {
                return e = r.defaults(e, {
                    inherit: !0,
                    matchingKeys: null
                }), (e.inherit && this.parent && this.parent.parameters() || []).concat(r.values(this.params)).filter(function(t) {
                    return !e.matchingKeys || e.matchingKeys.hasOwnProperty(t.id)
                })
            }, e.prototype.parameter = function(e, t) {
                return void 0 === t && (t = {}), this.url && this.url.parameter(e, t) || r.find(r.values(this.params), i.propEq("id", e)) || t.inherit && this.parent && this.parent.parameter(e)
            }, e.prototype.toString = function() {
                return this.fqn()
            }, e.isStateClass = function(e) {
                return a.isFunction(e) && !0 === e.__uiRouterState
            }, e.isState = function(e) {
                return a.isObject(e.__stateObjectCache)
            }, e
        }();
    t.StateObject = s
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        function n(e) {
            for (var t = r, n = 0; n < t.length; n++) {
                var i = new o.Glob(t[n]);
                if (i && i.matches(e.name) || !i && t[n] === e.name) return !0
            }
            return !1
        }
        var r = o.isString(t) ? [t] : t;
        return !!(o.isFunction(r) ? r : n)(e)
    }

    function i(e, t, n) {
        function r(e, r, i) {
            void 0 === i && (i = {});
            var o = new s(t, n, r, e, c, i);
            return a.push(o), o.deregister.bind(o)
        }
        var i = e._registeredHooks = e._registeredHooks || {},
            a = i[n.name] = [],
            c = o.removeFrom(a);
        return e[n.name] = r, r
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(5),
        a = n(11);
    t.matchState = r;
    var s = function() {
        function e(e, t, n, r, i, o) {
            void 0 === o && (o = {}), this.tranSvc = e, this.eventType = t, this.callback = n, this.matchCriteria = r, this.removeHookFromRegistry = i, this.invokeCount = 0, this._deregistered = !1, this.priority = o.priority || 0, this.bind = o.bind || null, this.invokeLimit = o.invokeLimit
        }
        return e.prototype._matchingNodes = function(e, t) {
            if (!0 === t) return e;
            var n = e.filter(function(e) {
                return r(e.state, t)
            });
            return n.length ? n : null
        }, e.prototype._getDefaultMatchCriteria = function() {
            return o.mapObj(this.tranSvc._pluginapi._getPathTypes(), function() {
                return !0
            })
        }, e.prototype._getMatchingNodes = function(e) {
            var t = this,
                n = o.extend(this._getDefaultMatchCriteria(), this.matchCriteria);
            return o.values(this.tranSvc._pluginapi._getPathTypes()).reduce(function(r, i) {
                var s = i.scope === a.TransitionHookScope.STATE,
                    c = e[i.name] || [],
                    u = s ? c : [o.tail(c)];
                return r[i.name] = t._matchingNodes(u, n[i.name]), r
            }, {})
        }, e.prototype.matches = function(e) {
            var t = this._getMatchingNodes(e);
            return o.values(t).every(o.identity) ? t : null
        }, e.prototype.deregister = function() {
            this.removeHookFromRegistry(this), this._deregistered = !0
        }, e
    }();
    t.RegisteredHook = s, t.makeEvent = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(11),
        i = n(17),
        o = n(26),
        a = n(88),
        s = n(92),
        c = n(91),
        u = n(93),
        l = n(96),
        f = n(94),
        p = n(95),
        d = n(30),
        h = n(42),
        v = n(14),
        g = n(1),
        m = n(0),
        $ = n(2),
        y = n(89),
        b = n(90);
    t.defaultTransOpts = {
        location: !0,
        relative: null,
        inherit: !1,
        notify: !0,
        reload: !1,
        custom: {},
        current: function() {
            return null
        },
        source: "unknown"
    };
    var w = function() {
        function e(e) {
            this._transitionCount = 0, this._eventTypes = [], this._registeredHooks = {}, this._criteriaPaths = {}, this._router = e, this.$view = e.viewService, this._deregisterHookFns = {}, this._pluginapi = m.createProxyFunctions($.val(this), {}, $.val(this), ["_definePathType", "_defineEvent", "_getPathTypes", "_getEvents", "getHooks"]), this._defineCorePaths(), this._defineCoreEvents(), this._registerCoreTransitionHooks(), e.globals.successfulTransitions.onEvict(a.treeChangesCleanup)
        }
        return e.prototype.onCreate = function(e, t, n) {}, e.prototype.onBefore = function(e, t, n) {}, e.prototype.onStart = function(e, t, n) {}, e.prototype.onExit = function(e, t, n) {}, e.prototype.onRetain = function(e, t, n) {}, e.prototype.onEnter = function(e, t, n) {}, e.prototype.onFinish = function(e, t, n) {}, e.prototype.onSuccess = function(e, t, n) {}, e.prototype.onError = function(e, t, n) {}, e.prototype.dispose = function(e) {
            m.values(this._registeredHooks).forEach(function(e) {
                return e.forEach(function(t) {
                    t._deregistered = !0, m.removeFrom(e, t)
                })
            })
        }, e.prototype.create = function(e, t) {
            return new i.Transition(e, t, this._router)
        }, e.prototype._defineCoreEvents = function() {
            var e = r.TransitionHookPhase,
                t = v.TransitionHook,
                n = this._criteriaPaths,
                i = !1,
                o = !0;
            this._defineEvent("onCreate", e.CREATE, 0, n.to, i, t.LOG_REJECTED_RESULT, t.THROW_ERROR, o), this._defineEvent("onBefore", e.BEFORE, 0, n.to), this._defineEvent("onStart", e.RUN, 0, n.to), this._defineEvent("onExit", e.RUN, 100, n.exiting, !0), this._defineEvent("onRetain", e.RUN, 200, n.retained), this._defineEvent("onEnter", e.RUN, 300, n.entering), this._defineEvent("onFinish", e.RUN, 400, n.to), this._defineEvent("onSuccess", e.SUCCESS, 0, n.to, i, t.LOG_REJECTED_RESULT, t.LOG_ERROR, o), this._defineEvent("onError", e.ERROR, 0, n.to, i, t.LOG_REJECTED_RESULT, t.LOG_ERROR, o)
        }, e.prototype._defineCorePaths = function() {
            var e = r.TransitionHookScope.STATE,
                t = r.TransitionHookScope.TRANSITION;
            this._definePathType("to", t), this._definePathType("from", t), this._definePathType("exiting", e), this._definePathType("retained", e), this._definePathType("entering", e)
        }, e.prototype._defineEvent = function(e, t, n, r, i, a, s, c) {
            void 0 === i && (i = !1), void 0 === a && (a = v.TransitionHook.HANDLE_RESULT), void 0 === s && (s = v.TransitionHook.REJECT_ERROR), void 0 === c && (c = !1);
            var u = new h.TransitionEventType(e, t, n, r, i, a, s, c);
            this._eventTypes.push(u), o.makeEvent(this, this, u)
        }, e.prototype._getEvents = function(e) {
            return (g.isDefined(e) ? this._eventTypes.filter(function(t) {
                return t.hookPhase === e
            }) : this._eventTypes.slice()).sort(function(e, t) {
                var n = e.hookPhase - t.hookPhase;
                return 0 === n ? e.hookOrder - t.hookOrder : n
            })
        }, e.prototype._definePathType = function(e, t) {
            this._criteriaPaths[e] = {
                name: e,
                scope: t
            }
        }, e.prototype._getPathTypes = function() {
            return this._criteriaPaths
        }, e.prototype.getHooks = function(e) {
            return this._registeredHooks[e]
        }, e.prototype._registerCoreTransitionHooks = function() {
            var e = this._deregisterHookFns;
            e.addCoreResolves = a.registerAddCoreResolvables(this), e.ignored = y.registerIgnoredTransitionHook(this), e.invalid = b.registerInvalidTransitionHook(this), e.redirectTo = s.registerRedirectToHook(this), e.onExit = c.registerOnExitHook(this), e.onRetain = c.registerOnRetainHook(this), e.onEnter = c.registerOnEnterHook(this), e.eagerResolve = u.registerEagerResolvePath(this), e.lazyResolve = u.registerLazyResolveState(this), e.resolveAll = u.registerResolveRemaining(this), e.loadViews = l.registerLoadEnteringViews(this), e.activateViews = l.registerActivateViews(this), e.updateGlobals = f.registerUpdateGlobalState(this), e.updateUrl = p.registerUpdateUrl(this), e.lazyLoad = d.registerLazyLoadHook(this)
        }, e
    }();
    t.TransitionService = w
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = function(e) {
                return e || ""
            },
            n = o.splitHash(e).map(t),
            r = n[0],
            i = n[1],
            a = o.splitQuery(r).map(t);
        return {
            path: a[0],
            search: a[1],
            hash: i,
            url: e
        }
    }

    function i(e, t, n, r) {
        return function(i) {
            function o(e) {
                e.dispose(a), e.dispose(s)
            }
            var a = i.locationService = new n(i),
                s = i.locationConfig = new r(i, t);
            return {
                name: e,
                service: a,
                configuration: s,
                dispose: o
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(5);
    t.keyValsToObjectR = function(e, t) {
        var n = t[0],
            r = t[1];
        return e.hasOwnProperty(n) ? o.isArray(e[n]) ? e[n].push(r) : e[n] = [e[n], r] : e[n] = r, e
    }, t.getParams = function(e) {
        return e.split("&").filter(o.identity).map(o.splitEqual).reduce(t.keyValsToObjectR, {})
    }, t.parseUrl = r, t.buildUrl = function(e) {
        var t = e.path(),
            n = e.search(),
            r = e.hash(),
            i = Object.keys(n).map(function(e) {
                var t = n[e];
                return (o.isArray(t) ? t : [t]).map(function(t) {
                    return e + "=" + t
                })
            }).reduce(o.unnestR, []).join("&");
        return t + (i ? "?" + i : "") + (r ? "#" + r : "")
    }, t.locationPluginFactory = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(32),
        i = n(22),
        o = function() {
            function e() {
                this.params = new r.StateParams, this.lastStartedTransitionId = -1, this.transitionHistory = new i.Queue([], 1), this.successfulTransitions = new i.Queue([], 1)
            }
            return e.prototype.dispose = function() {
                this.transitionHistory.clear(), this.successfulTransitions.clear(), this.transition = null
            }, e
        }();
    t.UIRouterGlobals = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        function n(t) {
            return t && Array.isArray(t.states) && t.states.forEach(function(t) {
                return e.router.stateRegistry.register(t)
            }), t
        }
        var r = t.$$state().lazyLoad,
            o = r._promise;
        if (!o) {
            var a = function(e) {
                    return delete t.lazyLoad, delete t.$$state().lazyLoad, delete r._promise, e
                },
                s = function(e) {
                    return delete r._promise, i.services.$q.reject(e)
                };
            o = r._promise = i.services.$q.when(r(e, t)).then(n).then(a, s)
        }
        return o
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(4),
        o = function(e) {
            function t() {
                if ("url" !== e.originalTransition().options().source) {
                    var t = e.targetState();
                    return n.stateService.target(t.identifier(), t.params(), t.options())
                }
                var r = n.urlService,
                    i = r.match(r.parts()),
                    o = i && i.rule;
                if (o && "STATE" === o.type) {
                    var a = o.state,
                        s = i.match;
                    return n.stateService.target(a, s, e.options())
                }
                n.urlService.sync()
            }
            var n = e.router,
                o = e.entering().filter(function(e) {
                    return !!e.$$state().lazyLoad
                }).map(function(t) {
                    return r(e, t)
                });
            return i.services.$q.all(o).then(t)
        };
    t.registerLazyLoadHook = function(e) {
        return e.onBefore({
            entering: function(e) {
                return !!e.lazyLoad
            }
        }, o)
    }, t.lazyLoadState = r
}, function(e, t, n) {
    "use strict";

    function r() {
        var e = function(e) {
            var t = function(e) {
                    return null != e ? e.toString() : e
                },
                n = {
                    encode: t,
                    decode: t,
                    is: a.is(String),
                    pattern: /.*/,
                    equals: function(e, t) {
                        return e == t
                    }
                };
            return i.extend({}, n, e)
        };
        i.extend(u.prototype, {
            string: e({}),
            path: e({
                pattern: /[^\/]*/
            }),
            query: e({}),
            hash: e({
                inherit: !1
            }),
            int: e({
                decode: function(e) {
                    return parseInt(e, 10)
                },
                is: function(e) {
                    return !o.isNullOrUndefined(e) && this.decode(e.toString()) === e
                },
                pattern: /-?\d+/
            }),
            bool: e({
                encode: function(e) {
                    return e && 1 || 0
                },
                decode: function(e) {
                    return 0 !== parseInt(e, 10)
                },
                is: a.is(Boolean),
                pattern: /0|1/
            }),
            date: e({
                encode: function(e) {
                    return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : void 0
                },
                decode: function(e) {
                    if (this.is(e)) return e;
                    var t = this.capture.exec(e);
                    return t ? new Date(t[1], t[2] - 1, t[3]) : void 0
                },
                is: function(e) {
                    return e instanceof Date && !isNaN(e.valueOf())
                },
                equals: function(e, t) {
                    return ["getFullYear", "getMonth", "getDate"].reduce(function(n, r) {
                        return n && e[r]() === t[r]()
                    }, !0)
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
            }),
            json: e({
                encode: i.toJson,
                decode: i.fromJson,
                is: a.is(Object),
                equals: i.equals,
                pattern: /[^\/]*/
            }),
            any: e({
                encode: i.identity,
                decode: i.identity,
                is: function() {
                    return !0
                },
                equals: i.equals
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(1),
        a = n(2),
        s = n(4),
        c = n(23),
        u = function() {
            function e() {
                this.enqueue = !0, this.typeQueue = [], this.defaultTypes = i.pick(e.prototype, ["hash", "string", "query", "path", "int", "bool", "date", "json", "any"]);
                var t = function(e, t) {
                    return new c.ParamType(i.extend({
                        name: t
                    }, e))
                };
                this.types = i.inherit(i.map(this.defaultTypes, t), {})
            }
            return e.prototype.dispose = function() {
                this.types = {}
            }, e.prototype.type = function(e, t, n) {
                if (!o.isDefined(t)) return this.types[e];
                if (this.types.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
                return this.types[e] = new c.ParamType(i.extend({
                    name: e
                }, t)), n && (this.typeQueue.push({
                    name: e,
                    def: n
                }), this.enqueue || this._flushTypeQueue()), this
            }, e.prototype._flushTypeQueue = function() {
                for (; this.typeQueue.length;) {
                    var e = this.typeQueue.shift();
                    if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    i.extend(this.types[e.name], s.services.$injector.invoke(e.def))
                }
            }, e
        }();
    t.ParamTypes = u, r()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function() {
            function e(e) {
                void 0 === e && (e = {}), r.extend(this, e)
            }
            return e.prototype.$inherit = function(e, t, n) {
                var i, o = r.ancestors(t, n),
                    a = {},
                    s = [];
                for (var c in o)
                    if (o[c] && o[c].params && (i = Object.keys(o[c].params), i.length))
                        for (var u in i) s.indexOf(i[u]) >= 0 || (s.push(i[u]), a[i[u]] = this[i[u]]);
                return r.extend({}, a, e)
            }, e
        }();
    t.StateParams = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(34)), r(n(13)), r(n(16))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.resolvePolicies = {
        when: {
            LAZY: "LAZY",
            EAGER: "EAGER"
        },
        async: {
            WAIT: "WAIT",
            NOWAIT: "NOWAIT",
            RXWAIT: "RXWAIT"
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(43),
        i = n(44),
        o = n(27),
        a = n(54),
        s = n(39),
        c = n(40),
        u = n(29),
        l = n(0),
        f = n(1),
        p = n(46),
        d = n(7),
        h = 0,
        v = function() {
            function e(e, t) {
                void 0 === e && (e = p.UrlService.locationServiceStub), void 0 === t && (t = p.UrlService.locationConfigStub), this.locationService = e, this.locationConfig = t, this.$id = h++, this._disposed = !1, this._disposables = [], this.trace = d.trace, this.viewService = new a.ViewService, this.globals = new u.UIRouterGlobals, this.transitionService = new o.TransitionService(this), this.urlMatcherFactory = new r.UrlMatcherFactory, this.urlRouter = new i.UrlRouter(this), this.stateRegistry = new s.StateRegistry(this), this.stateService = new c.StateService(this), this.urlService = new p.UrlService(this), this._plugins = {}, this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()), this.globals.$current = this.stateRegistry.root(), this.globals.current = this.globals.$current.self, this.disposable(this.globals), this.disposable(this.stateService), this.disposable(this.stateRegistry), this.disposable(this.transitionService), this.disposable(this.urlRouter), this.disposable(e), this.disposable(t)
            }
            return e.prototype.disposable = function(e) {
                this._disposables.push(e)
            }, e.prototype.dispose = function(e) {
                var t = this;
                if (e && f.isFunction(e.dispose)) return void e.dispose(this);
                this._disposed = !0, this._disposables.slice().forEach(function(e) {
                    try {
                        "function" == typeof e.dispose && e.dispose(t), l.removeFrom(t._disposables, e)
                    } catch (e) {}
                })
            }, e.prototype.plugin = function(e, t) {
                void 0 === t && (t = {});
                var n = new e(this, t);
                if (!n.name) throw new Error("Required property `name` missing on plugin: " + n);
                return this._disposables.push(n), this._plugins[n.name] = n
            }, e.prototype.getPlugin = function(e) {
                return e ? this._plugins[e] : l.values(this._plugins)
            }, e
        }();
    t.UIRouter = v
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e.name
    }

    function i(e) {
        return e.self.$$state = function() {
            return e
        }, e.self
    }

    function o(e) {
        return e.parent && e.parent.data && (e.data = e.self.data = u.inherit(e.parent.data, e.data)), e.data
    }

    function a(e) {
        return e.parent ? e.parent.path.concat(e) : [e]
    }

    function s(e) {
        var t = e.parent ? u.extend({}, e.parent.includes) : {};
        return t[e.name] = !0, t
    }

    function c(e) {
        var t = function(e, t) {
                return Object.keys(e || {}).map(function(n) {
                    return {
                        token: n,
                        val: e[n],
                        deps: void 0,
                        policy: t[n]
                    }
                })
            },
            n = function(e) {
                var t = h.services.$injector;
                return e.$inject || t && t.annotate(e, t.strictDi) || "deferred"
            },
            r = function(e) {
                return !(!e.token || !e.resolveFn)
            },
            i = function(e) {
                return !(!e.provide && !e.token || !(e.useValue || e.useFactory || e.useExisting || e.useClass))
            },
            o = function(e) {
                return !!(e && e.val && (l.isString(e.val) || l.isArray(e.val) || l.isFunction(e.val)))
            },
            a = function(e) {
                return e.provide || e.token
            },
            s = p.pattern([
                [p.prop("resolveFn"), function(e) {
                    return new d.Resolvable(a(e), e.resolveFn, e.deps, e.policy)
                }],
                [p.prop("useFactory"), function(e) {
                    return new d.Resolvable(a(e), e.useFactory, e.deps || e.dependencies, e.policy)
                }],
                [p.prop("useClass"), function(e) {
                    return new d.Resolvable(a(e), function() {
                        return new e.useClass
                    }, [], e.policy)
                }],
                [p.prop("useValue"), function(e) {
                    return new d.Resolvable(a(e), function() {
                        return e.useValue
                    }, [], e.policy, e.useValue)
                }],
                [p.prop("useExisting"), function(e) {
                    return new d.Resolvable(a(e), u.identity, [e.useExisting], e.policy)
                }]
            ]),
            c = p.pattern([
                [p.pipe(p.prop("val"), l.isString), function(e) {
                    return new d.Resolvable(e.token, u.identity, [e.val], e.policy)
                }],
                [p.pipe(p.prop("val"), l.isArray), function(e) {
                    return new d.Resolvable(e.token, u.tail(e.val), e.val.slice(0, -1), e.policy)
                }],
                [p.pipe(p.prop("val"), l.isFunction), function(e) {
                    return new d.Resolvable(e.token, e.val, n(e.val), e.policy)
                }]
            ]),
            v = p.pattern([
                [p.is(d.Resolvable), function(e) {
                    return e
                }],
                [r, s],
                [i, s],
                [o, c],
                [p.val(!0), function(e) {
                    throw new Error("Invalid resolve value: " + f.stringify(e))
                }]
            ]),
            g = e.resolve;
        return (l.isArray(g) ? g : t(g, e.resolvePolicy || {})).map(v)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0),
        l = n(1),
        f = n(6),
        p = n(2),
        d = n(13),
        h = n(4),
        v = function(e) {
            if (!l.isString(e)) return !1;
            var t = "^" === e.charAt(0);
            return {
                val: t ? e.substring(1) : e,
                root: t
            }
        },
        g = function(e, t) {
            return function(n) {
                var r = n;
                r && r.url && r.name && r.name.match(/\.\*\*$/) && (r.url += "{remainder:any}");
                var i = v(r.url),
                    o = n.parent,
                    a = i ? e.compile(i.val, {
                        params: n.params || {},
                        paramMap: function(e, t) {
                            return !1 === r.reloadOnSearch && t && (e = u.extend(e || {}, {
                                dynamic: !0
                            })), e
                        }
                    }) : r.url;
                if (!a) return null;
                if (!e.isMatcher(a)) throw new Error("Invalid url '" + a + "' in state '" + n + "'");
                return i && i.root ? a : (o && o.navigable || t()).url.append(a)
            }
        },
        m = function(e) {
            return function(t) {
                return !e(t) && t.url ? t : t.parent ? t.parent.navigable : null
            }
        },
        $ = function(e) {
            return function(t) {
                var n = function(t, n) {
                        return e.fromConfig(n, null, t)
                    },
                    r = t.url && t.url.parameters({
                        inherit: !1
                    }) || [],
                    i = u.values(u.mapObj(u.omit(t.params || {}, r.map(p.prop("id"))), n));
                return r.concat(i).map(function(e) {
                    return [e.id, e]
                }).reduce(u.applyPairs, {})
            }
        };
    t.resolvablesBuilder = c;
    var y = function() {
        function e(e, t) {
            function n(t) {
                return f(t) ? null : e.find(u.parentName(t)) || l()
            }
            this.matcher = e;
            var u = this,
                l = function() {
                    return e.find("")
                },
                f = function(e) {
                    return "" === e.name
                };
            this.builders = {
                name: [r],
                self: [i],
                parent: [n],
                data: [o],
                url: [g(t, l)],
                navigable: [m(f)],
                params: [$(t.paramFactory)],
                views: [],
                path: [a],
                includes: [s],
                resolvables: [c]
            }
        }
        return e.prototype.builder = function(e, t) {
            var n = this.builders,
                r = n[e] || [];
            return l.isString(e) && !l.isDefined(t) ? r.length > 1 ? r : r[0] : l.isString(e) && l.isFunction(t) ? (n[e] = r, n[e].push(t), function() {
                return n[e].splice(n[e].indexOf(t, 1)) && null
            }) : void 0
        }, e.prototype.build = function(e) {
            var t = this,
                n = t.matcher,
                r = t.builders,
                i = this.parentName(e);
            if (i && !n.find(i, void 0, !1)) return null;
            for (var o in r)
                if (r.hasOwnProperty(o)) {
                    var a = r[o].reduce(function(e, t) {
                        return function(n) {
                            return t(n, e)
                        }
                    }, u.noop);
                    e[o] = a(e)
                } return e
        }, e.prototype.parentName = function(e) {
            var t = e.name || "",
                n = t.split(".");
            if ("**" === n.pop() && n.pop(), n.length) {
                if (e.parent) throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + t + ")");
                return n.join(".")
            }
            return e.parent ? l.isString(e.parent) ? e.parent : e.parent.name : ""
        }, e.prototype.name = function(e) {
            var t = e.name;
            if (-1 !== t.indexOf(".") || !e.parent) return t;
            var n = l.isString(e.parent) ? e.parent : e.parent.name;
            return n ? n + "." + t : t
        }, e
    }();
    t.StateBuilder = y
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n(0),
        o = function() {
            function e(e) {
                this._states = e
            }
            return e.prototype.isRelative = function(e) {
                return e = e || "", 0 === e.indexOf(".") || 0 === e.indexOf("^")
            }, e.prototype.find = function(e, t, n) {
                if (void 0 === n && (n = !0), e || "" === e) {
                    var o = r.isString(e),
                        a = o ? e : e.name;
                    this.isRelative(a) && (a = this.resolvePath(a, t));
                    var s = this._states[a];
                    if (s && (o || !(o || s !== e && s.self !== e))) return s;
                    if (o && n) {
                        var c = i.values(this._states),
                            u = c.filter(function(e) {
                                return e.__stateObjectCache.nameGlob && e.__stateObjectCache.nameGlob.matches(a)
                            });
                        return u.length > 1 && console.log("stateMatcher.find: Found multiple matches for " + a + " using glob: ", u.map(function(e) {
                            return e.name
                        })), u[0]
                    }
                }
            }, e.prototype.resolvePath = function(e, t) {
                if (!t) throw new Error("No reference point given for path '" + e + "'");
                for (var n = this.find(t), r = e.split("."), i = r.length, o = 0, a = n; o < i; o++)
                    if ("" !== r[o] || 0 !== o) {
                        if ("^" !== r[o]) break;
                        if (!a.parent) throw new Error("Path '" + e + "' not valid for state '" + n.name + "'");
                        a = a.parent
                    } else a = n;
                var s = r.slice(o).join(".");
                return a.name + (a.name && s ? "." : "") + s
            }, e
        }();
    t.StateMatcher = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(1),
        o = n(25),
        a = n(2),
        s = function() {
            function e(e, t, n, r, i) {
                this.$registry = e, this.$urlRouter = t, this.states = n, this.builder = r, this.listeners = i, this.queue = [], this.matcher = e.matcher
            }
            return e.prototype.dispose = function() {
                this.queue = []
            }, e.prototype.register = function(e) {
                var t = this.queue,
                    n = o.StateObject.create(e),
                    s = n.name;
                if (!i.isString(s)) throw new Error("State must have a valid name");
                if (this.states.hasOwnProperty(s) || r.inArray(t.map(a.prop("name")), s)) throw new Error("State '" + s + "' is already defined");
                return t.push(n), this.flush(), n
            }, e.prototype.flush = function() {
                for (var e = this, t = this, n = t.queue, r = t.states, i = t.builder, o = [], a = [], s = {}, c = function(t) {
                        return e.states.hasOwnProperty(t) && e.states[t]
                    }, u = function() {
                        o.length && e.listeners.forEach(function(e) {
                            return e("registered", o.map(function(e) {
                                return e.self
                            }))
                        })
                    }; n.length > 0;) {
                    var l = n.shift(),
                        f = l.name,
                        p = i.build(l),
                        d = a.indexOf(l);
                    if (p) {
                        var h = c(f);
                        if (h && h.name === f) throw new Error("State '" + f + "' is already defined");
                        var v = c(f + ".**");
                        v && this.$registry.deregister(v), r[f] = l, this.attachRoute(l), d >= 0 && a.splice(d, 1), o.push(l)
                    } else {
                        var g = s[f];
                        if (s[f] = n.length, d >= 0 && g === n.length) return n.push(l), u(), r;
                        d < 0 && a.push(l), n.push(l)
                    }
                }
                return u(), r
            }, e.prototype.attachRoute = function(e) {
                !e.abstract && e.url && this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(e))
            }, e
        }();
    t.StateQueueManager = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(37),
        i = n(36),
        o = n(38),
        a = n(0),
        s = n(2),
        c = function() {
            function e(e) {
                this._router = e, this.states = {}, this.listeners = [], this.matcher = new r.StateMatcher(this.states), this.builder = new i.StateBuilder(this.matcher, e.urlMatcherFactory), this.stateQueue = new o.StateQueueManager(this, e.urlRouter, this.states, this.builder, this.listeners), this._registerRoot()
            }
            return e.prototype._registerRoot = function() {
                var e = {
                    name: "",
                    url: "^",
                    views: null,
                    params: {
                        "#": {
                            value: null,
                            type: "hash",
                            dynamic: !0
                        }
                    },
                    abstract: !0
                };
                (this._root = this.stateQueue.register(e)).navigable = null
            }, e.prototype.dispose = function() {
                var e = this;
                this.stateQueue.dispose(), this.listeners = [], this.get().forEach(function(t) {
                    return e.get(t) && e.deregister(t)
                })
            }, e.prototype.onStatesChanged = function(e) {
                return this.listeners.push(e),
                    function() {
                        a.removeFrom(this.listeners)(e)
                    }.bind(this)
            }, e.prototype.root = function() {
                return this._root
            }, e.prototype.register = function(e) {
                return this.stateQueue.register(e)
            }, e.prototype._deregisterTree = function(e) {
                var t = this,
                    n = this.get().map(function(e) {
                        return e.$$state()
                    }),
                    r = function(e) {
                        var t = n.filter(function(t) {
                            return -1 !== e.indexOf(t.parent)
                        });
                        return 0 === t.length ? t : t.concat(r(t))
                    },
                    i = r([e]),
                    o = [e].concat(i).reverse();
                return o.forEach(function(e) {
                    var n = t._router.urlRouter;
                    n.rules().filter(s.propEq("state", e)).forEach(n.removeRule.bind(n)), delete t.states[e.name]
                }), o
            }, e.prototype.deregister = function(e) {
                var t = this.get(e);
                if (!t) throw new Error("Can't deregister state; not found: " + e);
                var n = this._deregisterTree(t.$$state());
                return this.listeners.forEach(function(e) {
                    return e("deregistered", n.map(function(e) {
                        return e.self
                    }))
                }), n
            }, e.prototype.get = function(e, t) {
                var n = this;
                if (0 === arguments.length) return Object.keys(this.states).map(function(e) {
                    return n.states[e].self
                });
                var r = this.matcher.find(e, t);
                return r && r.self || null
            }, e.prototype.decorator = function(e, t) {
                return this.builder.builder(e, t)
            }, e
        }();
    t.StateRegistry = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(1),
        o = n(22),
        a = n(4),
        s = n(15),
        c = n(24),
        u = n(27),
        l = n(12),
        f = n(10),
        p = n(9),
        d = n(21),
        h = n(16),
        v = n(30),
        g = n(2),
        m = function() {
            function e(t) {
                this.router = t, this.invalidCallbacks = [], this._defaultErrorHandler = function(e) {
                    e instanceof Error && e.stack ? (console.error(e), console.error(e.stack)) : e instanceof l.Rejection ? (console.error(e.toString()), e.detail && e.detail.stack && console.error(e.detail.stack)) : console.error(e)
                };
                var n = ["current", "$current", "params", "transition"],
                    i = Object.keys(e.prototype).filter(g.not(r.inArray(n)));
                r.createProxyFunctions(g.val(e.prototype), this, g.val(this), i)
            }
            return Object.defineProperty(e.prototype, "transition", {
                get: function() {
                    return this.router.globals.transition
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "params", {
                get: function() {
                    return this.router.globals.params
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "current", {
                get: function() {
                    return this.router.globals.current
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "$current", {
                get: function() {
                    return this.router.globals.$current
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function() {
                this.defaultErrorHandler(r.noop), this.invalidCallbacks = []
            }, e.prototype._handleInvalidTargetState = function(e, t) {
                function n() {
                    var e = d.dequeue();
                    return void 0 === e ? l.Rejection.invalid(t.error()).toPromise() : a.services.$q.when(e(t, i, v)).then(g).then(function(e) {
                        return e || n()
                    })
                }
                var r = this,
                    i = s.PathUtils.makeTargetState(this.router.stateRegistry, e),
                    c = this.router.globals,
                    u = function() {
                        return c.transitionHistory.peekTail()
                    },
                    p = u(),
                    d = new o.Queue(this.invalidCallbacks.slice()),
                    v = new h.ResolveContext(e).injector(),
                    g = function(e) {
                        if (e instanceof f.TargetState) {
                            var t = e;
                            return t = r.target(t.identifier(), t.params(), t.options()), t.valid() ? u() !== p ? l.Rejection.superseded().toPromise() : r.transitionTo(t.identifier(), t.params(), t.options()) : l.Rejection.invalid(t.error()).toPromise()
                        }
                    };
                return n()
            }, e.prototype.onInvalid = function(e) {
                return this.invalidCallbacks.push(e),
                    function() {
                        r.removeFrom(this.invalidCallbacks)(e)
                    }.bind(this)
            }, e.prototype.reload = function(e) {
                return this.transitionTo(this.current, this.params, {
                    reload: !i.isDefined(e) || e,
                    inherit: !1,
                    notify: !1
                })
            }, e.prototype.go = function(e, t, n) {
                var i = {
                        relative: this.$current,
                        inherit: !0
                    },
                    o = r.defaults(n, i, u.defaultTransOpts);
                return this.transitionTo(e, t, o)
            }, e.prototype.target = function(e, t, n) {
                if (void 0 === n && (n = {}), i.isObject(n.reload) && !n.reload.name) throw new Error("Invalid reload state object");
                var r = this.router.stateRegistry;
                if (n.reloadState = !0 === n.reload ? r.root() : r.matcher.find(n.reload, n.relative), n.reload && !n.reloadState) throw new Error("No such reload state '" + (i.isString(n.reload) ? n.reload : n.reload.name) + "'");
                return new f.TargetState(this.router.stateRegistry, e, t, n)
            }, e.prototype.getCurrentPath = function() {
                var e = this,
                    t = this.router.globals,
                    n = t.successfulTransitions.peekTail(),
                    r = function() {
                        return [new c.PathNode(e.router.stateRegistry.root())]
                    };
                return n ? n.treeChanges().to : r()
            }, e.prototype.transitionTo = function(e, t, n) {
                var i = this;
                void 0 === t && (t = {}), void 0 === n && (n = {});
                var o = this.router,
                    s = o.globals;
                n = r.defaults(n, u.defaultTransOpts);
                var c = function() {
                    return s.transition
                };
                n = r.extend(n, {
                    current: c
                });
                var p = this.target(e, t, n),
                    d = this.getCurrentPath();
                if (!p.exists()) return this._handleInvalidTargetState(d, p);
                if (!p.valid()) return r.silentRejection(p.error());
                var h = function(e) {
                        return function(t) {
                            if (t instanceof l.Rejection) {
                                var n = o.globals.lastStartedTransitionId === e.$id;
                                if (t.type === l.RejectType.IGNORED) return n && o.urlRouter.update(), a.services.$q.when(s.current);
                                var r = t.detail;
                                if (t.type === l.RejectType.SUPERSEDED && t.redirected && r instanceof f.TargetState) {
                                    var c = e.redirect(r);
                                    return c.run().catch(h(c))
                                }
                                if (t.type === l.RejectType.ABORTED) return n && o.urlRouter.update(), a.services.$q.reject(t)
                            }
                            return i.defaultErrorHandler()(t), a.services.$q.reject(t)
                        }
                    },
                    v = this.router.transitionService.create(d, p),
                    g = v.run().catch(h(v));
                return r.silenceUncaughtInPromise(g), r.extend(g, {
                    transition: v
                })
            }, e.prototype.is = function(e, t, n) {
                n = r.defaults(n, {
                    relative: this.$current
                });
                var o = this.router.stateRegistry.matcher.find(e, n.relative);
                if (i.isDefined(o)) {
                    if (this.$current !== o) return !1;
                    if (!t) return !0;
                    var a = o.parameters({
                        inherit: !0,
                        matchingKeys: t
                    });
                    return p.Param.equals(a, p.Param.values(a, t), this.params)
                }
            }, e.prototype.includes = function(e, t, n) {
                n = r.defaults(n, {
                    relative: this.$current
                });
                var o = i.isString(e) && d.Glob.fromString(e);
                if (o) {
                    if (!o.matches(this.$current.name)) return !1;
                    e = this.$current.name
                }
                var a = this.router.stateRegistry.matcher.find(e, n.relative),
                    s = this.$current.includes;
                if (i.isDefined(a)) {
                    if (!i.isDefined(s[a.name])) return !1;
                    if (!t) return !0;
                    var c = a.parameters({
                        inherit: !0,
                        matchingKeys: t
                    });
                    return p.Param.equals(c, p.Param.values(c, t), this.params)
                }
            }, e.prototype.href = function(e, t, n) {
                var o = {
                    lossy: !0,
                    inherit: !0,
                    absolute: !1,
                    relative: this.$current
                };
                n = r.defaults(n, o), t = t || {};
                var a = this.router.stateRegistry.matcher.find(e, n.relative);
                if (!i.isDefined(a)) return null;
                n.inherit && (t = this.params.$inherit(t, this.$current, a));
                var s = a && n.lossy ? a.navigable : a;
                return s && void 0 !== s.url && null !== s.url ? this.router.urlRouter.href(s.url, t, {
                    absolute: n.absolute
                }) : null
            }, e.prototype.defaultErrorHandler = function(e) {
                return this._defaultErrorHandler = e || this._defaultErrorHandler
            }, e.prototype.get = function(e, t) {
                var n = this.router.stateRegistry;
                return 0 === arguments.length ? n.get() : n.get(e, t || this.$current)
            }, e.prototype.lazyLoad = function(e, t) {
                var n = this.get(e);
                if (!n || !n.lazyLoad) throw new Error("Can not lazy load " + e);
                var r = this.getCurrentPath(),
                    i = s.PathUtils.makeTargetState(this.router.stateRegistry, r);
                return t = t || this.router.transitionService.create(r, i), v.lazyLoadState(t, n)
            }, e
        }();
    t.StateService = m
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return void 0 === e && (e = !1),
            function(t, n) {
                var r = e ? -1 : 1,
                    i = (t.node.state.path.length - n.node.state.path.length) * r;
                return 0 !== i ? i : n.hook.priority - t.hook.priority
            }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0),
        o = n(1),
        a = n(11),
        s = n(14),
        c = function() {
            function e(e) {
                this.transition = e
            }
            return e.prototype.buildHooksForPhase = function(e) {
                var t = this;
                return this.transition.router.transitionService._pluginapi._getEvents(e).map(function(e) {
                    return t.buildHooks(e)
                }).reduce(i.unnestR, []).filter(i.identity)
            }, e.prototype.buildHooks = function(e) {
                var t = this.transition,
                    n = t.treeChanges(),
                    o = this.getMatchingHooks(e, n);
                if (!o) return [];
                var c = {
                        transition: t,
                        current: t.options().current
                    },
                    u = function(r) {
                        return r.matches(n)[e.criteriaMatchPath.name].map(function(n) {
                            var o = i.extend({
                                    bind: r.bind,
                                    traceData: {
                                        hookType: e.name,
                                        context: n
                                    }
                                }, c),
                                u = e.criteriaMatchPath.scope === a.TransitionHookScope.STATE ? n.state.self : null,
                                l = new s.TransitionHook(t, u, r, o);
                            return {
                                hook: r,
                                node: n,
                                transitionHook: l
                            }
                        })
                    };
                return o.map(u).reduce(i.unnestR, []).sort(r(e.reverseSort)).map(function(e) {
                    return e.transitionHook
                })
            }, e.prototype.getMatchingHooks = function(e, t) {
                var n = e.hookPhase === a.TransitionHookPhase.CREATE,
                    r = this.transition.router.transitionService;
                return (n ? [r] : [this.transition, r]).map(function(t) {
                    return t.getHooks(e.name)
                }).filter(i.assertPredicate(o.isArray, "broken event named: " + e.name)).reduce(i.unnestR, []).filter(function(e) {
                    return e.matches(t)
                })
            }, e
        }();
    t.HookBuilder = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(14),
        i = function() {
            function e(e, t, n, i, o, a, s, c) {
                void 0 === o && (o = !1), void 0 === a && (a = r.TransitionHook.HANDLE_RESULT), void 0 === s && (s = r.TransitionHook.REJECT_ERROR), void 0 === c && (c = !1), this.name = e, this.hookPhase = t, this.hookOrder = n, this.criteriaMatchPath = i, this.reverseSort = o, this.getResultHandler = a, this.getErrorHandler = s, this.synchronous = c
            }
            return e
        }();
    t.TransitionEventType = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(1),
        o = n(18),
        a = n(9),
        s = n(31),
        c = function() {
            function e() {
                var e = this;
                this.paramTypes = new s.ParamTypes, this._isCaseInsensitive = !1, this._isStrictMode = !0, this._defaultSquashPolicy = !1, this.paramFactory = {
                    fromConfig: function(t, n, r) {
                        return new a.Param(t, n, r, a.DefType.CONFIG, e)
                    },
                    fromPath: function(t, n, r) {
                        return new a.Param(t, n, r, a.DefType.PATH, e)
                    },
                    fromSearch: function(t, n, r) {
                        return new a.Param(t, n, r, a.DefType.SEARCH, e)
                    }
                }, this._getConfig = function(t) {
                    return r.extend({
                        strict: e._isStrictMode,
                        caseInsensitive: e._isCaseInsensitive
                    }, t)
                }, r.extend(this, {
                    UrlMatcher: o.UrlMatcher,
                    Param: a.Param
                })
            }
            return e.prototype.caseInsensitive = function(e) {
                return this._isCaseInsensitive = i.isDefined(e) ? e : this._isCaseInsensitive
            }, e.prototype.strictMode = function(e) {
                return this._isStrictMode = i.isDefined(e) ? e : this._isStrictMode
            }, e.prototype.defaultSquashPolicy = function(e) {
                if (i.isDefined(e) && !0 !== e && !1 !== e && !i.isString(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
                return this._defaultSquashPolicy = i.isDefined(e) ? e : this._defaultSquashPolicy
            }, e.prototype.compile = function(e, t) {
                return new o.UrlMatcher(e, this.paramTypes, this.paramFactory, this._getConfig(t))
            }, e.prototype.isMatcher = function(e) {
                if (!i.isObject(e)) return !1;
                var t = !0;
                return r.forEach(o.UrlMatcher.prototype, function(n, r) {
                    i.isFunction(n) && (t = t && i.isDefined(e[r]) && i.isFunction(e[r]))
                }), t
            }, e.prototype.type = function(e, t, n) {
                var r = this.paramTypes.type(e, t, n);
                return i.isDefined(t) ? this : r
            }, e.prototype.$get = function() {
                return this.paramTypes.enqueue = !1, this.paramTypes._flushTypeQueue(), this
            }, e.prototype.dispose = function() {
                this.paramTypes.dispose()
            }, e
        }();
    t.UrlMatcherFactory = c
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r) {
        return "/" === r ? e : t ? p.stripLastPathElement(r) + e : n ? r.slice(1) + e : e
    }

    function i(e) {
        if (!(s.isFunction(e) || s.isString(e) || u.is(f.TargetState)(e) || f.TargetState.isDef(e))) throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
        return s.isFunction(e) ? e : u.val(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, a = n(0),
        s = n(1),
        c = n(18),
        u = n(2),
        l = n(45),
        f = n(10),
        p = n(5),
        d = function(e, t) {
            return (t.priority || 0) - (e.priority || 0)
        },
        h = function(e, t) {
            var n = {
                STATE: 4,
                URLMATCHER: 4,
                REGEXP: 3,
                RAW: 2,
                OTHER: 1
            };
            return (n[e.type] || 0) - (n[t.type] || 0)
        },
        v = function(e, t) {
            return e.urlMatcher && t.urlMatcher ? c.UrlMatcher.compare(e.urlMatcher, t.urlMatcher) : 0
        },
        g = function(e, t) {
            var n = {
                STATE: !0,
                URLMATCHER: !0
            };
            return n[e.type] && n[t.type] ? 0 : (e.$id || 0) - (t.$id || 0)
        };
    o = function(e, t) {
        var n = d(e, t);
        return 0 !== n ? n : 0 !== (n = h(e, t)) ? n : (n = v(e, t), 0 !== n ? n : g(e, t))
    };
    var m = function() {
        function e(t) {
            this._sortFn = o, this._rules = [], this.interceptDeferred = !1, this._id = 0, this._sorted = !1, this._router = t, this.urlRuleFactory = new l.UrlRuleFactory(t), a.createProxyFunctions(u.val(e.prototype), this, u.val(this))
        }
        return e.prototype.dispose = function() {
            this.listen(!1), this._rules = [], delete this._otherwiseFn
        }, e.prototype.sort = function(e) {
            this._rules = this.stableSort(this._rules, this._sortFn = e || this._sortFn), this._sorted = !0
        }, e.prototype.ensureSorted = function() {
            this._sorted || this.sort()
        }, e.prototype.stableSort = function(e, t) {
            var n = e.map(function(e, t) {
                return {
                    elem: e,
                    idx: t
                }
            });
            return n.sort(function(e, n) {
                var r = t(e.elem, n.elem);
                return 0 === r ? e.idx - n.idx : r
            }), n.map(function(e) {
                return e.elem
            })
        }, e.prototype.match = function(e) {
            var t = this;
            this.ensureSorted(), e = a.extend({
                path: "",
                search: {},
                hash: ""
            }, e);
            var n = this.rules();
            this._otherwiseFn && n.push(this._otherwiseFn);
            for (var r, i = function(n) {
                    var r = n.match(e, t._router);
                    return r && {
                        match: r,
                        rule: n,
                        weight: n.matchPriority(r)
                    }
                }, o = 0; o < n.length && (!r || 0 === this._sortFn(n[o], r.rule)); o++) {
                var s = i(n[o]);
                r = !r || s && s.weight > r.weight ? s : r
            }
            return r
        }, e.prototype.sync = function(e) {
            if (!e || !e.defaultPrevented) {
                var t = this._router,
                    n = t.urlService,
                    r = t.stateService,
                    i = {
                        path: n.path(),
                        search: n.search(),
                        hash: n.hash()
                    },
                    o = this.match(i);
                u.pattern([
                    [s.isString, function(e) {
                        return n.url(e, !0)
                    }],
                    [f.TargetState.isDef, function(e) {
                        return r.go(e.state, e.params, e.options)
                    }],
                    [u.is(f.TargetState), function(e) {
                        return r.go(e.state(), e.params(), e.options())
                    }]
                ])(o && o.rule.handler(o.match, i, t))
            }
        }, e.prototype.listen = function(e) {
            var t = this;
            if (!1 !== e) return this._stopFn = this._stopFn || this._router.urlService.onChange(function(e) {
                return t.sync(e)
            });
            this._stopFn && this._stopFn(), delete this._stopFn
        }, e.prototype.update = function(e) {
            var t = this._router.locationService;
            if (e) return void(this.location = t.url());
            t.url() !== this.location && t.url(this.location, !0)
        }, e.prototype.push = function(e, t, n) {
            var r = n && !!n.replace;
            this._router.urlService.url(e.format(t || {}), r)
        }, e.prototype.href = function(e, t, n) {
            var i = e.format(t);
            if (null == i) return null;
            n = n || {
                absolute: !1
            };
            var o = this._router.urlService.config,
                a = o.html5Mode();
            if (a || null === i || (i = "#" + o.hashPrefix() + i), i = r(i, a, n.absolute, o.baseHref()), !n.absolute || !i) return i;
            var s = !a && i ? "/" : "",
                c = o.port(),
                u = 80 === c || 443 === c ? "" : ":" + c;
            return [o.protocol(), "://", o.host(), u, s, i].join("")
        }, e.prototype.rule = function(e) {
            var t = this;
            if (!l.UrlRuleFactory.isUrlRule(e)) throw new Error("invalid rule");
            return e.$id = this._id++, e.priority = e.priority || 0, this._rules.push(e), this._sorted = !1,
                function() {
                    return t.removeRule(e)
                }
        }, e.prototype.removeRule = function(e) {
            a.removeFrom(this._rules, e)
        }, e.prototype.rules = function() {
            return this.ensureSorted(), this._rules.slice()
        }, e.prototype.otherwise = function(e) {
            var t = i(e);
            this._otherwiseFn = this.urlRuleFactory.create(u.val(!0), t), this._sorted = !1
        }, e.prototype.initial = function(e) {
            var t = i(e),
                n = function(e, t) {
                    return 0 === t.globals.transitionHistory.size() && !!/^\/?$/.exec(e.path)
                };
            this.rule(this.urlRuleFactory.create(n, t))
        }, e.prototype.when = function(e, t, n) {
            var r = this.urlRuleFactory.create(e, t);
            return s.isDefined(n && n.priority) && (r.priority = n.priority), this.rule(r), r
        }, e.prototype.deferIntercept = function(e) {
            void 0 === e && (e = !0), this.interceptDeferred = e
        }, e
    }();
    t.UrlRouter = m
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18),
        i = n(1),
        o = n(0),
        a = n(2),
        s = function() {
            function e(e) {
                this.router = e
            }
            return e.prototype.compile = function(e) {
                return this.router.urlMatcherFactory.compile(e)
            }, e.prototype.create = function(e, t) {
                var n = this,
                    o = a.pattern([
                        [i.isString, function(e) {
                            return o(n.compile(e))
                        }],
                        [a.is(r.UrlMatcher), function(e) {
                            return n.fromUrlMatcher(e, t)
                        }],
                        [i.isState, function(e) {
                            return n.fromState(e, n.router)
                        }],
                        [a.is(RegExp), function(e) {
                            return n.fromRegExp(e, t)
                        }],
                        [i.isFunction, function(e) {
                            return new c(e, t)
                        }]
                    ]),
                    s = o(e);
                if (!s) throw new Error("invalid 'what' in when()");
                return s
            }, e.prototype.fromUrlMatcher = function(e, t) {
                function n(t) {
                    var n = e.exec(t.path, t.search, t.hash);
                    return e.validates(n) && n
                }

                function s(t) {
                    var n = e.parameters().filter(function(e) {
                        return e.isOptional
                    });
                    return n.length ? n.filter(function(e) {
                        return t[e.id]
                    }).length / n.length : 1e-6
                }
                var u = t;
                i.isString(t) && (t = this.router.urlMatcherFactory.compile(t)), a.is(r.UrlMatcher)(t) && (u = function(e) {
                    return t.format(e)
                });
                var l = {
                    urlMatcher: e,
                    matchPriority: s,
                    type: "URLMATCHER"
                };
                return o.extend(new c(n, u), l)
            }, e.prototype.fromState = function(e, t) {
                var n = function(n) {
                        var r = t.stateService,
                            i = t.globals;
                        r.href(e, n) !== r.href(i.current, i.params) && r.transitionTo(e, n, {
                            inherit: !0,
                            source: "url"
                        })
                    },
                    r = {
                        state: e,
                        type: "STATE"
                    };
                return o.extend(this.fromUrlMatcher(e.url, n), r)
            }, e.prototype.fromRegExp = function(e, t) {
                if (e.global || e.sticky) throw new Error("Rule RegExp must not be global or sticky");
                var n = function(e) {
                        return t.replace(/\$(\$|\d{1,2})/, function(t, n) {
                            return e["$" === n ? 0 : Number(n)]
                        })
                    },
                    r = i.isString(t) ? n : t,
                    a = function(t) {
                        return e.exec(t.path)
                    },
                    s = {
                        regexp: e,
                        type: "REGEXP"
                    };
                return o.extend(new c(a, r), s)
            }, e.isUrlRule = function(e) {
                return e && ["type", "match", "handler"].every(function(t) {
                    return i.isDefined(e[t])
                })
            }, e
        }();
    t.UrlRuleFactory = s;
    var c = function() {
        function e(e, t) {
            var n = this;
            this.match = e, this.type = "RAW", this.matchPriority = function(e) {
                return 0 - n.$id
            }, this.handler = t || o.identity
        }
        return e
    }();
    t.BaseUrlRule = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(4),
        i = n(0),
        o = function(e) {
            return e.reduce(function(e, t) {
                return e[t] = r.notImplemented(t), e
            }, {
                dispose: i.noop
            })
        },
        a = ["url", "path", "search", "hash", "onChange"],
        s = ["port", "protocol", "host", "baseHref", "html5Mode", "hashPrefix"],
        c = ["type", "caseInsensitive", "strictMode", "defaultSquashPolicy"],
        u = ["sort", "when", "initial", "otherwise", "rules", "rule", "removeRule"],
        l = ["deferIntercept", "listen", "sync", "match"],
        f = function() {
            function e(e, t) {
                void 0 === t && (t = !0), this.router = e, this.rules = {}, this.config = {};
                var n = function() {
                    return e.locationService
                };
                i.createProxyFunctions(n, this, n, a, t);
                var r = function() {
                    return e.locationConfig
                };
                i.createProxyFunctions(r, this.config, r, s, t);
                var o = function() {
                    return e.urlMatcherFactory
                };
                i.createProxyFunctions(o, this.config, o, c);
                var f = function() {
                    return e.urlRouter
                };
                i.createProxyFunctions(f, this.rules, f, u), i.createProxyFunctions(f, this, f, l)
            }
            return e.prototype.url = function(e, t, n) {}, e.prototype.path = function() {}, e.prototype.search = function() {}, e.prototype.hash = function() {}, e.prototype.onChange = function(e) {}, e.prototype.parts = function() {
                return {
                    path: this.path(),
                    search: this.search(),
                    hash: this.hash()
                }
            }, e.prototype.dispose = function() {}, e.prototype.sync = function(e) {}, e.prototype.listen = function(e) {}, e.prototype.deferIntercept = function(e) {}, e.prototype.match = function(e) {}, e.locationServiceStub = o(a), e.locationConfigStub = o(s), e
        }();
    t.UrlService = f
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = function() {
            function e(e, t) {
                void 0 === t && (t = !1), this._isHtml5 = t, this._baseHref = void 0, this._hashPrefix = ""
            }
            return e.prototype.port = function() {
                return location.port ? Number(location.port) : "https" === this.protocol() ? 443 : 80
            }, e.prototype.protocol = function() {
                return location.protocol.replace(/:/g, "")
            }, e.prototype.host = function() {
                return location.hostname
            }, e.prototype.html5Mode = function() {
                return this._isHtml5
            }, e.prototype.hashPrefix = function(e) {
                return r.isDefined(e) ? this._hashPrefix = e : this._hashPrefix
            }, e.prototype.baseHref = function(e) {
                return r.isDefined(e) ? this._baseHref = e : r.isDefined(this._baseHref) ? this._baseHref : this.applyDocumentBaseHref()
            }, e.prototype.applyDocumentBaseHref = function() {
                var e = document.getElementsByTagName("base")[0];
                return this._baseHref = e ? e.href.substr(location.origin.length) : location.pathname || "/"
            }, e.prototype.dispose = function() {}, e
        }();
    t.BrowserLocationConfig = i
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(5),
        o = n(19),
        a = function(e) {
            function t(t) {
                var n = e.call(this, t, !1) || this;
                return i.root.addEventListener("hashchange", n._listener, !1), n
            }
            return r(t, e), t.prototype._get = function() {
                return i.trimHashVal(this._location.hash)
            }, t.prototype._set = function(e, t, n, r) {
                this._location.hash = n
            }, t.prototype.dispose = function(t) {
                e.prototype.dispose.call(this, t), i.root.removeEventListener("hashchange", this._listener)
            }, t
        }(o.BaseLocationServices);
    t.HashLocationService = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5),
        i = {},
        o = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        a = /([^\s,]+)/g;
    t.$injector = {
        get: function(e) {
            return i[e]
        },
        has: function(e) {
            return null != t.$injector.get(e)
        },
        invoke: function(e, n, o) {
            var a = r.extend({}, i, o || {}),
                s = t.$injector.annotate(e),
                c = r.assertPredicate(function(e) {
                    return a.hasOwnProperty(e)
                }, function(e) {
                    return "DI can't find injectable: '" + e + "'"
                }),
                u = s.filter(c).map(function(e) {
                    return a[e]
                });
            return r.isFunction(e) ? e.apply(n, u) : e.slice(-1)[0].apply(n, u)
        },
        annotate: function(e) {
            if (!r.isInjectable(e)) throw new Error("Not an injectable function: " + e);
            if (e && e.$inject) return e.$inject;
            if (r.isArray(e)) return e.slice(0, -1);
            var t = e.toString().replace(o, "");
            return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(a) || []
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n(0),
        o = function() {
            function e() {
                var e = this;
                this.dispose = i.noop, this._baseHref = "", this._port = 80, this._protocol = "http", this._host = "localhost", this._hashPrefix = "", this.port = function() {
                    return e._port
                }, this.protocol = function() {
                    return e._protocol
                }, this.host = function() {
                    return e._host
                }, this.baseHref = function() {
                    return e._baseHref
                }, this.html5Mode = function() {
                    return !1
                }, this.hashPrefix = function(t) {
                    return r.isDefined(t) ? e._hashPrefix = t : e._hashPrefix
                }
            }
            return e
        }();
    t.MemoryLocationConfig = o
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(19),
        o = function(e) {
            function t(t) {
                return e.call(this, t, !0) || this
            }
            return r(t, e), t.prototype._get = function() {
                return this._url
            }, t.prototype._set = function(e, t, n, r) {
                this._url = n
            }, t
        }(i.BaseLocationServices);
    t.MemoryLocationService = o
}, function(e, t, n) {
    "use strict";
    var r = this && this.__extends || function() {
        var e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        };
        return function(t, n) {
            function r() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(19),
        o = n(5),
        a = function(e) {
            function t(t) {
                var n = e.call(this, t, !0) || this;
                return n._config = t.urlService.config, o.root.addEventListener("popstate", n._listener, !1), n
            }
            return r(t, e), t.prototype._getBasePrefix = function() {
                return o.stripLastPathElement(this._config.baseHref())
            }, t.prototype._get = function() {
                var e = this._location,
                    t = e.pathname,
                    n = e.hash,
                    r = e.search;
                r = o.splitQuery(r)[1], n = o.splitHash(n)[1];
                var i = this._getBasePrefix(),
                    a = t === this._config.baseHref(),
                    s = t.substr(0, i.length) === i;
                return (t = a ? "/" : s ? t.substring(i.length) : t) + (r ? "?" + r : "") + (n ? "#" + n : "")
            }, t.prototype._set = function(e, t, n, r) {
                var i = this._getBasePrefix(),
                    o = n && "/" !== n[0] ? "/" : "",
                    a = "" === n || "/" === n ? this._config.baseHref() : i + o + n;
                r ? this._history.replaceState(e, t, a) : this._history.pushState(e, t, a)
            }, t.prototype.dispose = function(t) {
                e.prototype.dispose.call(this, t), o.root.removeEventListener("popstate", this._listener)
            }, t
        }(i.BaseLocationServices);
    t.PushStateLocationService = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(5);
    t.$q = {
        when: function(e) {
            return new Promise(function(t, n) {
                return t(e)
            })
        },
        reject: function(e) {
            return new Promise(function(t, n) {
                n(e)
            })
        },
        defer: function() {
            var e = {};
            return e.promise = new Promise(function(t, n) {
                e.resolve = t, e.reject = n
            }), e
        },
        all: function(e) {
            if (r.isArray(e)) return Promise.all(e);
            if (r.isObject(e)) {
                var n = Object.keys(e).map(function(t) {
                    return e[t].then(function(e) {
                        return {
                            key: t,
                            val: e
                        }
                    })
                });
                return t.$q.all(n).then(function(e) {
                    return e.reduce(function(e, t) {
                        return e[t.key] = t.val, e
                    }, {})
                })
            }
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(2),
        o = n(1),
        a = n(7),
        s = function() {
            function e() {
                var e = this;
                this._uiViews = [], this._viewConfigs = [], this._viewConfigFactories = {}, this._listeners = [], this._pluginapi = {
                    _rootViewContext: this._rootViewContext.bind(this),
                    _viewConfigFactory: this._viewConfigFactory.bind(this),
                    _registeredUIViews: function() {
                        return e._uiViews
                    },
                    _activeViewConfigs: function() {
                        return e._viewConfigs
                    },
                    _onSync: function(t) {
                        return e._listeners.push(t),
                            function() {
                                return r.removeFrom(e._listeners, t)
                            }
                    }
                }
            }
            return e.normalizeUIViewTarget = function(e, t) {
                void 0 === t && (t = "");
                var n = t.split("@"),
                    r = n[0] || "$default",
                    i = o.isString(n[1]) ? n[1] : "^",
                    a = /^(\^(?:\.\^)*)\.(.*$)/.exec(r);
                (a && (i = a[1], r = a[2]), "!" === r.charAt(0) && (r = r.substr(1), i = ""), /^(\^(?:\.\^)*)$/.exec(i)) ? i = i.split(".").reduce(function(e, t) {
                    return e.parent
                }, e).name: "." === i && (i = e.name);
                return {
                    uiViewName: r,
                    uiViewContextAnchor: i
                }
            }, e.prototype._rootViewContext = function(e) {
                return this._rootContext = e || this._rootContext
            }, e.prototype._viewConfigFactory = function(e, t) {
                this._viewConfigFactories[e] = t
            }, e.prototype.createViewConfig = function(e, t) {
                var n = this._viewConfigFactories[t.$type];
                if (!n) throw new Error("ViewService: No view config factory registered for type " + t.$type);
                var r = n(e, t);
                return o.isArray(r) ? r : [r]
            }, e.prototype.deactivateViewConfig = function(e) {
                a.trace.traceViewServiceEvent("<- Removing", e), r.removeFrom(this._viewConfigs, e)
            }, e.prototype.activateViewConfig = function(e) {
                a.trace.traceViewServiceEvent("-> Registering", e), this._viewConfigs.push(e)
            }, e.prototype.sync = function() {
                function t(e) {
                    var t = function(e) {
                        return e && e.parent ? t(e.parent) + 1 : 1
                    };
                    return 1e4 * e.fqn.split(".").length + t(e.creationContext)
                }

                function n(e) {
                    for (var t = e.viewDecl.$context, n = 0; ++n && t.parent;) t = t.parent;
                    return n
                }
                var o = this,
                    s = this._uiViews.map(function(e) {
                        return [e.fqn, e]
                    }).reduce(r.applyPairs, {}),
                    c = i.curry(function(e, t, n, r) {
                        return t * (e(n) - e(r))
                    }),
                    u = function(t) {
                        var r = o._viewConfigs.filter(e.matches(s, t));
                        return r.length > 1 && r.sort(c(n, -1)), {
                            uiView: t,
                            viewConfig: r[0]
                        }
                    },
                    l = function(e) {
                        -1 !== o._uiViews.indexOf(e.uiView) && e.uiView.configUpdated(e.viewConfig)
                    },
                    f = this._uiViews.sort(c(t, 1)).map(u),
                    p = f.map(function(e) {
                        return e.viewConfig
                    }),
                    d = this._viewConfigs.filter(function(e) {
                        return !r.inArray(p, e)
                    }).map(function(e) {
                        return {
                            uiView: void 0,
                            viewConfig: e
                        }
                    });
                f.forEach(l);
                var h = f.concat(d);
                this._listeners.forEach(function(e) {
                    return e(h)
                }), a.trace.traceViewSync(h)
            }, e.prototype.registerUIView = function(e) {
                a.trace.traceViewServiceUIViewEvent("-> Registering", e);
                var t = this._uiViews,
                    n = function(t) {
                        return t.fqn === e.fqn && t.$type === e.$type
                    };
                return t.filter(n).length && a.trace.traceViewServiceUIViewEvent("!!!! duplicate uiView named:", e), t.push(e), this.sync(),
                    function() {
                        if (-1 === t.indexOf(e)) return void a.trace.traceViewServiceUIViewEvent("Tried removing non-registered uiView", e);
                        a.trace.traceViewServiceUIViewEvent("<- Deregistering", e), r.removeFrom(t)(e)
                    }
            }, e.prototype.available = function() {
                return this._uiViews.map(i.prop("fqn"))
            }, e.prototype.active = function() {
                return this._uiViews.filter(i.prop("$config")).map(i.prop("name"))
            }, e.matches = function(e, t) {
                return function(n) {
                    if (t.$type !== n.viewDecl.$type) return !1;
                    var i = n.viewDecl,
                        o = i.$uiViewName.split("."),
                        a = t.fqn.split(".");
                    if (!r.equals(o, a.slice(0 - o.length))) return !1;
                    var s = 1 - o.length || void 0,
                        c = a.slice(0, s).join("."),
                        u = e[c].creationContext;
                    return i.$uiViewContextAnchor === (u && u.name)
                }
            }, e
        }();
    t.ViewService = s
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function i(e) {
        return /^[0-9\.]+$/.test(e) && r(e) ? Math.round(e) : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isNumber = r, t.getRoundedMoney = i
}, function(e, t, n) {
    /**
     * State-based routing for AngularJS 1.x
     * This bundle requires the ui-router-core.js bundle from the @uirouter/core package.
     * @version v1.0.17
     * @link https://ui-router.github.io
     * @license MIT License, http://www.opensource.org/licenses/MIT
     */
    ! function(e, r) {
        r(t, n(20), n(97))
    }(0, function(e, t, n) {
        "use strict";

        function r() {
            var e = null;
            return function(t, r) {
                return e = e || n.services.$injector.get("$templateFactory"), [new E(t, r, e)]
            }
        }

        function i(e) {
            if (!e.parent) return {};
            var t = ["templateProvider", "templateUrl", "template", "notify", "async"],
                r = ["controller", "controllerProvider", "controllerAs", "resolveAs"],
                i = ["component", "bindings", "componentProvider"],
                o = t.concat(r),
                a = i.concat(o);
            if (n.isDefined(e.views) && C(a, e)) throw new Error("State '" + e.name + "' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  " + a.filter(function(t) {
                return n.isDefined(e[t])
            }).join(", "));
            var s = {},
                c = e.views || {
                    $default: n.pick(e, a)
                };
            return n.forEach(c, function(t, r) {
                if (r = r || "$default", n.isString(t) && (t = {
                        component: t
                    }), t = n.extend({}, t), C(i, t) && C(o, t)) throw new Error("Cannot combine: " + i.join("|") + " with: " + o.join("|") + " in stateview: '" + r + "@" + e.name + "'");
                t.resolveAs = t.resolveAs || "$resolve", t.$type = "ng1", t.$context = e, t.$name = r;
                var a = n.ViewService.normalizeUIViewTarget(t.$context, t.$name);
                t.$uiViewName = a.uiViewName, t.$uiViewContextAnchor = a.uiViewContextAnchor, s[r] = t
            }), s
        }

        function o(e) {
            var t = n.services.$injector.get(e + "Directive");
            if (!t || !t.length) throw new Error("Unable to find component named '" + e + "'");
            return t.map(x).reduce(n.unnestR, [])
        }

        function a(e) {
            function t(e, t, n, r, i, a) {
                return o._runtimeServices(r, e, n, t), delete U.router, delete U.$get, U
            }
            U = this.router = new n.UIRouter, U.stateProvider = new T(U.stateRegistry, U.stateService), U.stateRegistry.decorator("views", i), U.stateRegistry.decorator("onExit", R("onExit")), U.stateRegistry.decorator("onRetain", R("onRetain")), U.stateRegistry.decorator("onEnter", R("onEnter")), U.viewService._pluginapi._viewConfigFactory("ng1", r());
            var o = U.locationService = U.locationConfig = new O(e);
            return O.monkeyPatchPathParameterType(U), U.router = U, U.$get = t, t.$inject = ["$location", "$browser", "$sniffer", "$rootScope", "$http", "$templateCache"], U
        }

        function s(e, t, r) {
            n.services.$injector = e, n.services.$q = t, r.stateRegistry.get().map(function(e) {
                return e.$$state().resolvables
            }).reduce(n.unnestR, []).filter(function(e) {
                return "deferred" === e.deps
            }).forEach(function(t) {
                return t.deps = e.annotate(t.resolveFn, e.strictDi)
            })
        }

        function c(e) {
            e.$watch(function() {
                n.trace.approximateDigests++
            })
        }

        function u(e) {
            var t, n = e.match(/^\s*({[^}]*})\s*$/);
            if (n && (e = "(" + n[1] + ")"), !(t = e.replace(/\n/g, " ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/)) || 4 !== t.length) throw new Error("Invalid state ref '" + e + "'");
            return {
                state: t[1] || null,
                paramExpr: t[3] || null
            }
        }

        function l(e) {
            var t = e.parent().inheritedData("$uiView"),
                r = n.parse("$cfg.path")(t);
            return r ? n.tail(r).state.name : void 0
        }

        function f(e, t, r) {
            var i = r.uiState || e.current.name,
                o = n.extend(h(t, e), r.uiStateOpts || {}),
                a = e.href(i, r.uiStateParams, o);
            return {
                uiState: i,
                uiStateParams: r.uiStateParams,
                uiStateOpts: o,
                href: a
            }
        }

        function p(e) {
            var t = "[object SVGAnimatedString]" === Object.prototype.toString.call(e.prop("href")),
                n = "FORM" === e[0].nodeName;
            return {
                attr: n ? "action" : t ? "xlink:href" : "href",
                isAnchor: "A" === e.prop("tagName").toUpperCase(),
                clickable: !n
            }
        }

        function d(e, t, n, r, i) {
            return function(o) {
                var a = o.which || o.button,
                    s = i();
                if (!(a > 1 || o.ctrlKey || o.metaKey || o.shiftKey || e.attr("target"))) {
                    var c = n(function() {
                        t.go(s.uiState, s.uiStateParams, s.uiStateOpts)
                    });
                    o.preventDefault();
                    var u = r.isAnchor && !s.href ? 1 : 0;
                    o.preventDefault = function() {
                        u-- <= 0 && n.cancel(c)
                    }
                }
            }
        }

        function h(e, t) {
            return {
                relative: l(e) || t.$current,
                inherit: !0,
                source: "sref"
            }
        }

        function v(e, t, r, i) {
            var o;
            i && (o = i.events), n.isArray(o) || (o = ["click"]);
            for (var a = e.on ? "on" : "bind", s = 0, c = o; s < c.length; s++) {
                var u = c[s];
                e[a](u, r)
            }
            t.$on("$destroy", function() {
                for (var t = e.off ? "off" : "unbind", n = 0, i = o; n < i.length; n++) {
                    var a = i[n];
                    e[t](a, r)
                }
            })
        }

        function g(e) {
            var t = function(t, n, r) {
                return e.is(t, n, r)
            };
            return t.$stateful = !0, t
        }

        function m(e) {
            var t = function(t, n, r) {
                return e.includes(t, n, r)
            };
            return t.$stateful = !0, t
        }

        function $(e, t, r, i, o, a) {
            var s = n.parse("viewDecl.controllerAs"),
                c = n.parse("viewDecl.resolveAs");
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(i) {
                    var a = i.html();
                    return i.empty(),
                        function(i, u) {
                            var l = u.data("$uiView");
                            if (!l) return u.html(a), void e(u.contents())(i);
                            var f = l.$cfg || {
                                    viewDecl: {},
                                    getTemplate: n.noop
                                },
                                p = f.path && new n.ResolveContext(f.path);
                            u.html(f.getTemplate(u, p) || a), n.trace.traceUIViewFill(l.$uiView, u.html());
                            var d = e(u.contents()),
                                h = f.controller,
                                v = s(f),
                                g = c(f),
                                m = p && H(p);
                            if (i[g] = m, h) {
                                var $ = t(h, n.extend({}, m, {
                                    $scope: i,
                                    $element: u
                                }));
                                v && (i[v] = $, i[v][g] = m), u.data("$ngControllerController", $), u.children().data("$ngControllerController", $), y(o, r, $, i, f)
                            }
                            if (n.isString(f.viewDecl.component)) var b = f.viewDecl.component,
                                w = n.kebobString(b),
                                C = new RegExp("^(x-|data-)?" + w + "$", "i"),
                                k = function() {
                                    var e = [].slice.call(u[0].children).filter(function(e) {
                                        return e && e.tagName && C.exec(e.tagName)
                                    });
                                    return e && S.element(e).data("$" + b + "Controller")
                                },
                                E = i.$watch(k, function(e) {
                                    e && (y(o, r, e, i, f), E())
                                });
                            d(i)
                        }
                }
            }
        }

        function y(e, t, r, i, o) {
            !n.isFunction(r.$onInit) || o.viewDecl.component && W || r.$onInit();
            var a = n.tail(o.path).state.self,
                s = {
                    bind: r
                };
            if (n.isFunction(r.uiOnParamsChanged)) {
                var c = new n.ResolveContext(o.path),
                    u = c.getResolvable("$transition$").data,
                    l = function(e) {
                        if (e !== u && -1 === e.exiting().indexOf(a)) {
                            var t = e.params("to"),
                                i = e.params("from"),
                                o = function(e) {
                                    return e.paramSchema
                                },
                                s = e.treeChanges("to").map(o).reduce(n.unnestR, []),
                                c = e.treeChanges("from").map(o).reduce(n.unnestR, []),
                                l = s.filter(function(e) {
                                    var n = c.indexOf(e);
                                    return -1 === n || !c[n].type.equals(t[e.id], i[e.id])
                                });
                            if (l.length) {
                                var f = l.map(function(e) {
                                        return e.id
                                    }),
                                    p = n.filter(t, function(e, t) {
                                        return -1 !== f.indexOf(t)
                                    });
                                r.uiOnParamsChanged(p, e)
                            }
                        }
                    };
                i.$on("$destroy", t.onSuccess({}, l, s))
            }
            if (n.isFunction(r.uiCanExit)) {
                var f = K++,
                    p = "_uiCanExitIds",
                    d = function(e) {
                        return !!e && (e[p] && !0 === e[p][f] || d(e.redirectedFrom()))
                    },
                    h = function(t) {
                        var n, i = t[p] = t[p] || {};
                        return d(t) || (n = e.when(r.uiCanExit(t)), n.then(function(e) {
                            return i[f] = !1 !== e
                        })), n
                    },
                    v = {
                        exiting: a.name
                    };
                i.$on("$destroy", t.onBefore(v, h, s))
            }
        }

        function b() {
            var e = !1;
            this.useAnchorScroll = function() {
                e = !0
            }, this.$get = ["$anchorScroll", "$timeout", function(t, n) {
                return e ? t : function(e) {
                    return n(function() {
                        e[0].scrollIntoView()
                    }, 0, !1)
                }
            }]
        }
        var w = angular,
            S = t && t.module ? t : w,
            C = function(e, t) {
                return e.reduce(function(e, r) {
                    return e || n.isDefined(t[r])
                }, !1)
            },
            k = 0,
            E = function() {
                function e(e, t, n) {
                    var r = this;
                    this.path = e, this.viewDecl = t, this.factory = n, this.$id = k++, this.loaded = !1, this.getTemplate = function(e, t) {
                        return r.component ? r.factory.makeComponentTemplate(e, t, r.component, r.viewDecl.bindings) : r.template
                    }
                }
                return e.prototype.load = function() {
                    var e = this,
                        t = n.services.$q,
                        r = new n.ResolveContext(this.path),
                        i = this.path.reduce(function(e, t) {
                            return n.extend(e, t.paramValues)
                        }, {}),
                        o = {
                            template: t.when(this.factory.fromConfig(this.viewDecl, i, r)),
                            controller: t.when(this.getController(r))
                        };
                    return t.all(o).then(function(t) {
                        return n.trace.traceViewServiceEvent("Loaded", e), e.controller = t.controller, n.extend(e, t.template), e
                    })
                }, e.prototype.getController = function(e) {
                    var t = this.viewDecl.controllerProvider;
                    if (!n.isInjectable(t)) return this.viewDecl.controller;
                    var r = n.services.$injector.annotate(t),
                        i = n.isArray(t) ? n.tail(t) : t;
                    return new n.Resolvable("", i, r).get(e)
                }, e
            }(),
            _ = function() {
                function e() {
                    var e = this;
                    this._useHttp = S.version.minor < 3, this.$get = ["$http", "$templateCache", "$injector", function(t, n, r) {
                        return e.$templateRequest = r.has && r.has("$templateRequest") && r.get("$templateRequest"), e.$http = t, e.$templateCache = n, e
                    }]
                }
                return e.prototype.useHttpService = function(e) {
                    this._useHttp = e
                }, e.prototype.fromConfig = function(e, t, r) {
                    var i = function(e) {
                            return n.services.$q.when(e).then(function(e) {
                                return {
                                    template: e
                                }
                            })
                        },
                        o = function(e) {
                            return n.services.$q.when(e).then(function(e) {
                                return {
                                    component: e
                                }
                            })
                        };
                    return n.isDefined(e.template) ? i(this.fromString(e.template, t)) : n.isDefined(e.templateUrl) ? i(this.fromUrl(e.templateUrl, t)) : n.isDefined(e.templateProvider) ? i(this.fromProvider(e.templateProvider, t, r)) : n.isDefined(e.component) ? o(e.component) : n.isDefined(e.componentProvider) ? o(this.fromComponentProvider(e.componentProvider, t, r)) : i("<ui-view></ui-view>")
                }, e.prototype.fromString = function(e, t) {
                    return n.isFunction(e) ? e(t) : e
                }, e.prototype.fromUrl = function(e, t) {
                    return n.isFunction(e) && (e = e(t)), null == e ? null : this._useHttp ? this.$http.get(e, {
                        cache: this.$templateCache,
                        headers: {
                            Accept: "text/html"
                        }
                    }).then(function(e) {
                        return e.data
                    }) : this.$templateRequest(e)
                }, e.prototype.fromProvider = function(e, t, r) {
                    var i = n.services.$injector.annotate(e),
                        o = n.isArray(e) ? n.tail(e) : e;
                    return new n.Resolvable("", o, i).get(r)
                }, e.prototype.fromComponentProvider = function(e, t, r) {
                    var i = n.services.$injector.annotate(e),
                        o = n.isArray(e) ? n.tail(e) : e;
                    return new n.Resolvable("", o, i).get(r)
                }, e.prototype.makeComponentTemplate = function(e, t, r, i) {
                    i = i || {};
                    var a = S.version.minor >= 3 ? "::" : "",
                        s = function(e) {
                            var t = n.kebobString(e);
                            return /^(x|data)-/.exec(t) ? "x-" + t : t
                        },
                        c = function(r) {
                            var o = r.name,
                                c = r.type,
                                u = s(o);
                            if (e.attr(u) && !i[o]) return u + "='" + e.attr(u) + "'";
                            var l = i[o] || o;
                            if ("@" === c) return u + "='{{" + a + "$resolve." + l + "}}'";
                            if ("&" === c) {
                                var f = t.getResolvable(l),
                                    p = f && f.data,
                                    d = p && n.services.$injector.annotate(p) || [];
                                return u + "='$resolve." + l + (n.isArray(p) ? "[" + (p.length - 1) + "]" : "") + "(" + d.join(",") + ")'"
                            }
                            return u + "='" + a + "$resolve." + l + "'"
                        },
                        u = o(r).map(c).join(" "),
                        l = s(r);
                    return "<" + l + " " + u + "></" + l + ">"
                }, e
            }(),
            x = function(e) {
                return A(n.isObject(e.bindToController) ? e.bindToController : e.scope)
            },
            A = function(e) {
                return Object.keys(e || {}).map(function(t) {
                    return [t, /^([=<@&])[?]?(.*)/.exec(e[t])]
                }).filter(function(e) {
                    return n.isDefined(e) && n.isArray(e[1])
                }).map(function(e) {
                    return {
                        name: e[1][2] || e[0],
                        type: e[1][1]
                    }
                })
            },
            T = function() {
                function e(t, r) {
                    this.stateRegistry = t, this.stateService = r, n.createProxyFunctions(n.val(e.prototype), this, n.val(this))
                }
                return e.prototype.decorator = function(e, t) {
                    return this.stateRegistry.decorator(e, t) || this
                }, e.prototype.state = function(e, t) {
                    return n.isObject(e) ? t = e : t.name = e, this.stateRegistry.register(t), this
                }, e.prototype.onInvalid = function(e) {
                    return this.stateService.onInvalid(e)
                }, e
            }(),
            R = function(e) {
                return function(t, r) {
                    function i(e, t) {
                        var r = new n.ResolveContext(e.treeChanges(a)),
                            i = r.subContext(t.$$state()),
                            s = n.extend(H(i), {
                                $state$: t,
                                $transition$: e
                            });
                        return n.services.$injector.invoke(o, this, s)
                    }
                    var o = t[e],
                        a = "onExit" === e ? "from" : "to";
                    return o ? i : void 0
                }
            },
            O = function() {
                function e(e) {
                    this._urlListeners = [], this.$locationProvider = e;
                    var t = n.val(e);
                    n.createProxyFunctions(t, this, t, ["hashPrefix"])
                }
                return e.monkeyPatchPathParameterType = function(e) {
                    var t = e.urlMatcherFactory.type("path");
                    t.encode = function(e) {
                        return null != e ? e.toString().replace(/(~|\/)/g, function(e) {
                            return {
                                "~": "~~",
                                "/": "~2F"
                            } [e]
                        }) : e
                    }, t.decode = function(e) {
                        return null != e ? e.toString().replace(/(~~|~2F)/g, function(e) {
                            return {
                                "~~": "~",
                                "~2F": "/"
                            } [e]
                        }) : e
                    }
                }, e.prototype.dispose = function() {}, e.prototype.onChange = function(e) {
                    var t = this;
                    return this._urlListeners.push(e),
                        function() {
                            return n.removeFrom(t._urlListeners)(e)
                        }
                }, e.prototype.html5Mode = function() {
                    var e = this.$locationProvider.html5Mode();
                    return (e = n.isObject(e) ? e.enabled : e) && this.$sniffer.history
                }, e.prototype.url = function(e, t, r) {
                    return void 0 === t && (t = !1), n.isDefined(e) && this.$location.url(e), t && this.$location.replace(), r && this.$location.state(r), this.$location.url()
                }, e.prototype._runtimeServices = function(e, t, r, i) {
                    var o = this;
                    this.$location = t, this.$sniffer = r, e.$on("$locationChangeSuccess", function(e) {
                        return o._urlListeners.forEach(function(t) {
                            return t(e)
                        })
                    });
                    var a = n.val(t),
                        s = n.val(i);
                    n.createProxyFunctions(a, this, a, ["replace", "path", "search", "hash"]), n.createProxyFunctions(a, this, a, ["port", "protocol", "host"]), n.createProxyFunctions(s, this, s, ["baseHref"])
                }, e
            }(),
            D = function() {
                function e(e) {
                    this._router = e, this._urlRouter = e.urlRouter
                }
                return e.injectableHandler = function(e, t) {
                    return function(r) {
                        return n.services.$injector.invoke(t, null, {
                            $match: r,
                            $stateParams: e.globals.params
                        })
                    }
                }, e.prototype.$get = function() {
                    var e = this._urlRouter;
                    return e.update(!0), e.interceptDeferred || e.listen(), e
                }, e.prototype.rule = function(e) {
                    var t = this;
                    if (!n.isFunction(e)) throw new Error("'rule' must be a function");
                    var r = function() {
                            return e(n.services.$injector, t._router.locationService)
                        },
                        i = new n.BaseUrlRule(r, n.identity);
                    return this._urlRouter.rule(i), this
                }, e.prototype.otherwise = function(e) {
                    var t = this,
                        r = this._urlRouter;
                    if (n.isString(e)) r.otherwise(e);
                    else {
                        if (!n.isFunction(e)) throw new Error("'rule' must be a string or function");
                        r.otherwise(function() {
                            return e(n.services.$injector, t._router.locationService)
                        })
                    }
                    return this
                }, e.prototype.when = function(t, r) {
                    return (n.isArray(r) || n.isFunction(r)) && (r = e.injectableHandler(this._router, r)), this._urlRouter.when(t, r), this
                }, e.prototype.deferIntercept = function(e) {
                    this._urlRouter.deferIntercept(e)
                }, e
            }();
        S.module("ui.router.angular1", []);
        var P = S.module("ui.router.init", []),
            M = S.module("ui.router.util", ["ng", "ui.router.init"]),
            I = S.module("ui.router.router", ["ui.router.util"]),
            j = S.module("ui.router.state", ["ui.router.router", "ui.router.util", "ui.router.angular1"]),
            V = S.module("ui.router", ["ui.router.init", "ui.router.state", "ui.router.angular1"]),
            U = (S.module("ui.router.compat", ["ui.router"]), null);
        a.$inject = ["$locationProvider"];
        var L = function(e) {
            return ["$uiRouterProvider", function(t) {
                var n = t.router[e];
                return n.$get = function() {
                    return n
                }, n
            }]
        };
        s.$inject = ["$injector", "$q", "$uiRouter"];
        var N = function(e) {
                return e.urlRouterProvider = new D(e)
            },
            F = function() {
                return n.extend(U.stateProvider, {
                    $get: function() {
                        return U.stateService
                    }
                })
            };
        c.$inject = ["$rootScope"], P.provider("$uiRouter", a), I.provider("$urlRouter", ["$uiRouterProvider", N]), M.provider("$urlService", L("urlService")), M.provider("$urlMatcherFactory", ["$uiRouterProvider", function() {
            return U.urlMatcherFactory
        }]), M.provider("$templateFactory", function() {
            return new _
        }), j.provider("$stateRegistry", L("stateRegistry")), j.provider("$uiRouterGlobals", L("globals")), j.provider("$transitions", L("transitionService")), j.provider("$state", ["$uiRouterProvider", F]), j.factory("$stateParams", ["$uiRouter", function(e) {
            return e.globals.params
        }]), V.factory("$view", function() {
            return U.viewService
        }), V.service("$trace", function() {
            return n.trace
        }), V.run(c), M.run(["$urlMatcherFactory", function(e) {}]), j.run(["$state", function(e) {}]), I.run(["$urlRouter", function(e) {}]), P.run(s);
        var B, H = function(e) {
            return e.getTokens().filter(n.isString).map(function(t) {
                var n = e.getResolvable(t);
                return [t, "NOWAIT" === e.getPolicy(n).async ? n.promise : n.data]
            }).reduce(n.applyPairs, {})
        };
        B = ["$uiRouter", "$timeout", function(e, t) {
            var r = e.stateService;
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, o, a, s) {
                    function c() {
                        var e = y();
                        m && m(), g && (m = g.$$addStateInfo(e.uiState, e.uiStateParams)), null != e.href && a.$set(h.attr, e.href)
                    }
                    var l, h = p(o),
                        g = s[1] || s[0],
                        m = null,
                        $ = {},
                        y = function() {
                            return f(r, o, $)
                        },
                        b = u(a.uiSref);
                    $.uiState = b.state, $.uiStateOpts = a.uiSrefOpts ? i.$eval(a.uiSrefOpts) : {}, b.paramExpr && (i.$watch(b.paramExpr, function(e) {
                        $.uiStateParams = n.extend({}, e), c()
                    }, !0), $.uiStateParams = n.extend({}, i.$eval(b.paramExpr))), c(), i.$on("$destroy", e.stateRegistry.onStatesChanged(c)), i.$on("$destroy", e.transitionService.onSuccess({}, c)), h.clickable && (l = d(o, r, t, h, y), v(o, i, l, $.uiStateOpts))
                }
            }
        }];
        var q;
        q = ["$uiRouter", "$timeout", function(e, t) {
            var r = e.stateService;
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(i, o, a, s) {
                    function c() {
                        var e = $();
                        g && g(), h && (g = h.$$addStateInfo(e.uiState, e.uiStateParams)), null != e.href && a.$set(l.attr, e.href)
                    }
                    var u, l = p(o),
                        h = s[1] || s[0],
                        g = null,
                        m = {},
                        $ = function() {
                            return f(r, o, m)
                        },
                        y = ["uiState", "uiStateParams", "uiStateOpts"],
                        b = y.reduce(function(e, t) {
                            return e[t] = n.noop, e
                        }, {});
                    y.forEach(function(e) {
                        m[e] = a[e] ? i.$eval(a[e]) : null, a.$observe(e, function(t) {
                            b[e](), b[e] = i.$watch(t, function(t) {
                                m[e] = t, c()
                            }, !0)
                        })
                    }), c(), i.$on("$destroy", e.stateRegistry.onStatesChanged(c)), i.$on("$destroy", e.transitionService.onSuccess({}, c)), l.clickable && (u = d(o, r, t, l, $), v(o, i, u, m.uiStateOpts))
                }
            }
        }];
        var G;
        G = ["$state", "$stateParams", "$interpolate", "$uiRouter", function(e, t, r, i) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs", function(t, o, a) {
                    function s(e) {
                        e.promise.then(h, n.noop)
                    }

                    function c() {
                        var e = i.stateRegistry.onStatesChanged(f),
                            n = i.transitionService.onStart({}, s),
                            r = t.$on("$stateChangeSuccess", h);
                        return function() {
                            e(), n(), r()
                        }
                    }

                    function f() {
                        p(g)
                    }

                    function p(e) {
                        n.isObject(e) && (m = [], n.forEach(e, function(e, r) {
                            var i = function(e, n) {
                                var r = u(e);
                                d(r.state, t.$eval(r.paramExpr), n)
                            };
                            n.isString(e) ? i(e, r) : n.isArray(e) && n.forEach(e, function(e) {
                                i(e, r)
                            })
                        }))
                    }

                    function d(t, r, i) {
                        var a = e.get(t, l(o)),
                            s = {
                                state: a || {
                                    name: t
                                },
                                params: r,
                                activeClass: i
                            };
                        return m.push(s),
                            function() {
                                n.removeFrom(m)(s)
                            }
                    }

                    function h() {
                        var r = function(e) {
                                return e.split(/\s/).filter(n.identity)
                            },
                            i = function(e) {
                                return e.map(function(e) {
                                    return e.activeClass
                                }).map(r).reduce(n.unnestR, [])
                            },
                            a = i(m).concat(r(v)).reduce(n.uniqR, []),
                            s = i(m.filter(function(t) {
                                return e.includes(t.state.name, t.params)
                            })),
                            c = !!m.filter(function(t) {
                                return e.is(t.state.name, t.params)
                            }).length,
                            u = c ? r(v) : [],
                            l = s.concat(u).reduce(n.uniqR, []),
                            f = a.filter(function(e) {
                                return !n.inArray(l, e)
                            });
                        t.$evalAsync(function() {
                            l.forEach(function(e) {
                                return o.addClass(e)
                            }), f.forEach(function(e) {
                                return o.removeClass(e)
                            })
                        })
                    }
                    var v, g, m = [];
                    v = r(a.uiSrefActiveEq || "", !1)(t);
                    try {
                        g = t.$eval(a.uiSrefActive)
                    } catch (e) {}
                    g = g || r(a.uiSrefActive || "", !1)(t), p(g), this.$$addStateInfo = function(e, t) {
                        if (!(n.isObject(g) && m.length > 0)) {
                            var r = d(e, t, g);
                            return h(), r
                        }
                    }, t.$on("$destroy", c()), i.globals.transition && s(i.globals.transition), h()
                }]
            }
        }], S.module("ui.router.state").directive("uiSref", B).directive("uiSrefActive", G).directive("uiSrefActiveEq", G).directive("uiState", q), g.$inject = ["$state"], m.$inject = ["$state"], S.module("ui.router.state").filter("isState", g).filter("includedByState", m);
        var z;
        z = ["$view", "$animate", "$uiViewScroll", "$interpolate", "$q", function(e, t, r, i, o) {
            function a(e, n) {
                return {
                    enter: function(e, n, r) {
                        S.version.minor > 2 ? t.enter(e, null, n).then(r) : t.enter(e, null, n, r)
                    },
                    leave: function(e, n) {
                        S.version.minor > 2 ? t.leave(e).then(n) : t.leave(e, n)
                    }
                }
            }

            function s(e, t) {
                return e === t
            }
            var c = {
                    $cfg: {
                        viewDecl: {
                            $context: e._pluginapi._rootViewContext()
                        }
                    },
                    $uiView: {}
                },
                u = {
                    count: 0,
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(t, l, f) {
                        return function(t, l, p) {
                            function d(e) {
                                (!e || e instanceof E) && (s(y, e) || (n.trace.traceUIViewConfigUpdated(x, e && e.viewDecl && e.viewDecl.$context), y = e, v(e)))
                            }

                            function h() {
                                if (g && (n.trace.traceUIViewEvent("Removing (previous) el", g.data("$uiView")), g.remove(), g = null), $ && (n.trace.traceUIViewEvent("Destroying scope", x), $.$destroy(), $ = null), m) {
                                    var e = m.data("$uiViewAnim");
                                    n.trace.traceUIViewEvent("Animate out", e), C.leave(m, function() {
                                        e.$$animLeave.resolve(), g = null
                                    }), g = m, m = null
                                }
                            }

                            function v(e) {
                                var i = t.$new(),
                                    a = o.defer(),
                                    s = o.defer(),
                                    c = {
                                        $cfg: e,
                                        $uiView: x
                                    },
                                    u = {
                                        $animEnter: a.promise,
                                        $animLeave: s.promise,
                                        $$animLeave: s
                                    };
                                i.$emit("$viewContentLoading", _);
                                var p = f(i, function(e) {
                                    e.data("$uiViewAnim", u), e.data("$uiView", c), C.enter(e, l, function() {
                                        a.resolve(), $ && $.$emit("$viewContentAnimationEnded"), (n.isDefined(S) && !S || t.$eval(S)) && r(e)
                                    }), h()
                                });
                                m = p, $ = i, $.$emit("$viewContentLoaded", e || y), $.$eval(w)
                            }
                            var g, m, $, y, b, w = p.onload || "",
                                S = p.autoscroll,
                                C = a(p, t),
                                k = l.inheritedData("$uiView") || c,
                                _ = i(p.uiView || p.name || "")(t) || "$default",
                                x = {
                                    $type: "ng1",
                                    id: u.count++,
                                    name: _,
                                    fqn: k.$uiView.fqn ? k.$uiView.fqn + "." + _ : _,
                                    config: null,
                                    configUpdated: d,
                                    get creationContext() {
                                        var e = n.parse("$cfg.viewDecl.$context")(k),
                                            t = n.parse("$uiView.creationContext")(k);
                                        return e || t
                                    }
                                };
                            n.trace.traceUIViewEvent("Linking", x), l.data("$uiView", {
                                $uiView: x
                            }), v(), b = e.registerUIView(x), t.$on("$destroy", function() {
                                n.trace.traceUIViewEvent("Destroying/Unregistering", x), b()
                            })
                        }
                    }
                };
            return u
        }], $.$inject = ["$compile", "$controller", "$transitions", "$view", "$q", "$timeout"];
        var W = "function" == typeof S.module("ui.router").component,
            K = 0;
        S.module("ui.router.state").directive("uiView", z), S.module("ui.router.state").directive("uiView", $), S.module("ui.router.state").provider("$uiViewScroll", b), Object.keys(n).forEach(function(t) {
            e[t] = n[t]
        }), e.core = n, e.default = "ui.router", e.watchDigests = c, e.getLocals = H, e.getNg1ViewConfigFactory = r, e.ng1ViewsBuilder = i, e.Ng1ViewConfig = E, e.StateProvider = T, e.UrlRouterProvider = D, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    })
}, function(e, t, n) {
    n(108), e.exports = "ngAnimate"
}, function(e, t, n) {
    n(20), n(109);
    e.exports = "ui.mask"
}, function(e, t, n) {
    "use strict"; /*! angular-progress-arc - v1.0.0 (http://mathewbyrne.github.io/angular-progress-arc/) */
    ! function(e) {
        var t = e.module("angular-progress-arc", []);
        t.provider("progressArcDefaults", function() {
            var t = {
                size: 200,
                strokeWidth: 20,
                stroke: "black",
                background: null
            };
            this.setDefault = function(e, n) {
                return t[e] = n, this
            }, this.$get = function() {
                return function(n) {
                    e.forEach(t, function(e, t) {
                        n[t] || (n[t] = e)
                    })
                }
            }
        }), t.directive("progressArc", ["progressArcDefaults", function(e) {
            return {
                restrict: "E",
                scope: {
                    size: "@",
                    strokeWidth: "@",
                    stroke: "@",
                    counterClockwise: "@",
                    complete: "&",
                    background: "@"
                },
                compile: function(t, n) {
                    return e(n),
                        function(e) {
                            e.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
                            var t = function() {
                                e.strokeWidthCapped = Math.min(e.strokeWidth, e.size / 2 - 1), e.radius = Math.max((e.size - e.strokeWidthCapped) / 2 - 1, 0), e.circumference = 2 * Math.PI * e.radius
                            };
                            e.$watchCollection("[size, strokeWidth]", t), t()
                        }
                },
                template: '<svg ng-attr-width="{{size}}" ng-attr-height="{{size}}"><circle fill="none" ng-if="background" ng-attr-cx="{{size/2}}" ng-attr-cy="{{size/2}}" ng-attr-r="{{radius}}" ng-attr-stroke="{{background}}" ng-attr-stroke-width="{{strokeWidthCapped}}"/><circle fill="none" ng-attr-cx="{{size/2}}" ng-attr-cy="{{size/2}}" ng-attr-r="{{radius}}" ng-attr-stroke="{{stroke}}" ng-attr-stroke-width="{{strokeWidthCapped}}"ng-attr-stroke-dasharray="{{circumference}}"ng-attr-stroke-dashoffset="{{(1 - complete()) * circumference}}"ng-attr-transform="rotate({{offset}}, {{size/2}}, {{size/2}})' + "{{ (counterClockwise && counterClockwise != 'false') ? ' translate(0, ' + size + ') scale(1, -1)' : '' }}\"/></svg>"
            }
        }])
    }(window.angular)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        e.subscribe("login.relogin", function(t, n) {
            e.publish("assistant.message", "Hey, you must login to use the banking demo!")
        }), e.subscribe("login.success", function() {
            t()
        });
        var t = function() {
            e.publish("assistant.clear")
        };
        return {
            clear: t,
            message: function(t) {
                e.publish("assistant.message", t)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AssistantService = t.assistantMessage = t.assistant = t.AssistantController = void 0;
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(3);
    i.$inject = ["EventBus"];
    var s = function() {
        function e(t, n, i, o, s, c, u, l) {
            var f = this;
            r(this, e), this.assistantService = t, this.eventBus = n, this.authService = l, this.tutorialService = c, this.$scope = i, this.$state = s, this.$rootScope = o, this.$window = u, this.$scope.$state = s, this.$scope.confirmedAssistant = !1, this.$scope.isMessageVisible = !1, this.$scope.messageKey = null;
            var p = n.subscribe("assistant.key", function(e, t) {
                    i.isMessageVisible = !0, i.messageKey = t, a.DEBUG && console.log("message key", t)
                }),
                d = n.subscribe("assistant.clear", function() {
                    i.isMessageVisible = !1, i.messageKey = null
                }),
                h = n.subscribe("tutorial.step", function(e, t) {
                    a.DEBUG && console.log("assistant.step", t), o.tutorialStepIndex = c.getTutorial(t.tutorial).step, o.tutorialStepMax = c.getTutorial(t.tutorial).steps.length, i.messageKey = "tutorial." + t.tutorial + "." + t.step, i.isMessageVisible = !0
                });
            this.$scope.messageVisible = function(e) {
                return f.$scope.messageKey === e
            }, o.myMouseMove = function(e) {
                var t = u.innerWidth,
                    n = u.innerHeight,
                    r = document.getElementById("mouseTracker");
                r && (r.style.top = e.screenY / n * 100 + "px", r.style.left = e.screenX / t * 150 + "px")
            };
            var v = n.subscribe("logout", function() {
                f.$scope.messageKey = null, f.$scope.isMessageVisible = !1, f.$scope.confirmedAssistant = !1, f.$rootScope.showSenseResults = !1
            });
            i.$on("$destroy", function() {
                p(), d(), h(), v()
            })
        }
        return o(e, [{
            key: "toggle",
            value: function() {
                this.$scope.isMessageVisible = !this.$scope.isMessageVisible
            }
        }, {
            key: "hide",
            value: function() {
                this.$scope.isMessageVisible = !1
            }
        }, {
            key: "startAdvancedUseCases",
            value: function(e) {
                switch (e) {
                    case "remote":
                        this.eventBus.publish("tutorial.start_remote");
                        break;
                    case "bot":
                        this.eventBus.publish("tutorial.start_bot");
                        break;
                    case "ato":
                        this.eventBus.publish("tutorial.start_ato");
                        break;
                    default:
                        this.eventBus.publish("tutorial.start_remote")
                }
            }
        }, {
            key: "startTutorial",
            value: function() {
                this.tutorialService.startTutorial("onboarding", !0)
            }
        }, {
            key: "moreDetails",
            value: function() {
                a.DEBUG && console.log("set showSenseResults to true"), this.$rootScope.showSenseResults = !0
            }
        }, {
            key: "hideDetails",
            value: function() {
                a.DEBUG && console.log("set showSenseResults to false"), this.$rootScope.showSenseResults = !1
            }
        }, {
            key: "assistantStyle",
            value: function() {
                return "height:" + $window.innerHeight / 3 + "px"
            }
        }, {
            key: "openDashboard",
            value: function() {
                var e = function(e, t, n) {
                        return e + "/BehavioSenseDashboard/usertimeline.jsp?sessionid=" + t + "&userid=bankapp-" + n
                    },
                    t = this.authService.getSession();
                t && this.$window.open(e(this.$rootScope.dashboardHost, t.sessionId, t.user.username))
            }
        }, {
            key: "confirmAssistant",
            value: function() {
                this.$scope.confirmedAssistant = !0
            }
        }]), e
    }();
    s.$inject = ["AssistantService", "EventBus", "$scope", "$rootScope", "$state", "TutorialService", "$window", "AuthService"];
    var c = function() {
            return {
                template: n(111),
                controller: "AssistantController",
                controllerAs: "assistant"
            }
        },
        u = function() {
            return {
                restrict: "E",
                transclude: !0,
                template: '<div ng-transclude style="padding: 30px 20px;" class="message-block"></div>'
            }
        };
    t.AssistantController = s, t.assistant = c, t.assistantMessage = u, t.AssistantService = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.botHelper = t.BotScenarioController = void 0;
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(3),
        s = function() {
            function e(t, n, r, o, a, s, c) {
                var u = this;
                i(this, e), this.$rootScope = t, this.$scope = n, this.$state = r, this.$parse = o, this.$timeout = a, this.eventBus = s, this.BotRunner = c, this.$rootScope.bot = {
                    isRunning: !1
                };
                var l = s.subscribe("bot.play", function() {
                    u.play()
                });
                this.$scope.$on("$destroy", function() {
                    l()
                })
            }
            return o(e, [{
                key: "play",
                value: function() {
                    var e = this;
                    this.$rootScope.bot.isRunning || (this.$rootScope.bot.isRunning = !0, this.BotRunner.getEventsForPage("").then(function(t) {
                        e._playEvents(t)
                    }, function(e) {
                        a.DEBUG && console.log("couldn't fetch bot events for the specified page")
                    }))
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "_playEvents",
                value: function(e) {
                    var t = this;
                    a.DEBUG && console.log("bot: play");
                    var n = {};
                    this._clearFields(e);
                    var i = function(e, n) {
                            if (t.$rootScope.browsers.isIE) {
                                var r = document.createEvent("KeyboardEvent");
                                return r.initKeyboardEvent(e, !0, !0, window, n, n, 0, !1, 0), r
                            }
                            return new KeyboardEvent(e, {
                                keyCode: n
                            })
                        },
                        o = function(r) {
                            setTimeout(function() {
                                var o = e[r],
                                    s = n[o.target] = n[o.target] || document.querySelector(o.target);
                                if (a.DEBUG && console.log("targetElement", s), s) {
                                    var c = angular.element(s).scope(),
                                        u = s.getAttribute("ng-model"),
                                        l = t.$parse(u),
                                        f = i(o.eventType, o.keyCode);
                                    s.dispatchEvent(f), "keydown" === o.eventType && (a.DEBUG && console.log(u, String.fromCharCode(o.keyCode)), c.$apply(function() {
                                        l.assign(c, (l(c) || "") + String.fromCharCode(o.keyCode))
                                    }))
                                }
                                a.DEBUG && console.log(e[r], o.time, (new Date).getTime())
                            }, e[r].time)
                        };
                    for (var s in e) o(s);
                    var c = Math.max.apply(Math, r(e.map(function(e) {
                        return e.time
                    })));
                    setTimeout(function() {
                        a.DEBUG && console.log("bot finished"), t.$timeout(function() {
                            t.$rootScope.bot.isRunning = !1
                        }), t.eventBus.publish("bot.submit_transfer")
                    }, c + 2500)
                }
            }, {
                key: "_clearFields",
                value: function(e) {
                    var t = this;
                    this.eventBus.publish("collector.reset");
                    var n = {};
                    for (var r in e) {
                        n[e[r].target] = !0
                    }
                    for (var i in n) {
                        var o = document.querySelector(i);
                        o && function() {
                            var e = angular.element(o).scope(),
                                n = o.getAttribute("ng-model"),
                                r = t.$parse(n);
                            t.$timeout(function() {
                                return r.assign(e, "")
                            })
                        }()
                    }
                }
            }, {
                key: "run",
                value: function() {
                    a.DEBUG && console.log("bot.run"), this.play()
                }
            }]), e
        }();
    s.$inject = ["$rootScope", "$scope", "$state", "$parse", "$timeout", "EventBus", "BotRunner"];
    var c = function() {
        return {
            template: n(112),
            controller: "BotScenarioController as $bot"
        }
    };
    t.BotScenarioController = s, t.botHelper = c
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AccountListController = t.AccountDetailsController = void 0;
    var i = n(3),
        o = function e(t, n, o, a, s) {
            var c = this;
            if (r(this, e), this.$scope = t, this.bankAccountService = n, i.DEBUG && console.log("x-current step", a.getCurrentStep()), "onboarding.browse_to_accounts" == a.getCurrentStep()) {
                var u = a.getNextStep();
                i.DEBUG && console.log("account list: next step", a.getCurrentStep(), u)
            }
            this.$scope.accounts = [], this.$scope.accountsLoaded = !1, this.bankAccountService.getAccounts().then(function(e) {
                c.$scope.accounts = e, c.$scope.accountsLoaded = !0
            }, function(e) {
                c.$scope.accounts = null, c.$scope.accountsLoaded = !0
            })
        };
    o.$inject = ["$scope", "BankAccountService", "AuthService", "TutorialService", "AssistantService"];
    var a = function e(t, n, o, a, s, c, u) {
        var l = this;
        r(this, e), this.$scope = t, this.$stateParams = n, this.$state = o, this.bankAccountService = a, this.$scope.account = null, this.$scope.transactions = [], this.$scope.accountLoaded = !1, this.$scope.transactionLoading = !0;
        var f = n.id;
        this.bankAccountService.getAccount(f).then(function(e) {
            l.$scope.account = e, l.$scope.accountLoaded = !0
        }, function(e) {
            l.$scope.accountLoaded = !0, o.go("accounts"), i.DEBUG && console.log("error fetching account:" + n.id)
        }), this.bankAccountService.getTransactionsForAccount(f).then(function(e) {
            l.$scope.transactions = e
        }, function(e) {
            i.DEBUG && console.log("error")
        })
    };
    a.$inject = ["$scope", "$stateParams", "$state", "BankAccountService", "AuthService", "TutorialService", "AssistantService"], t.AccountDetailsController = a, t.AccountListController = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CreditCardDetailsController = t.CreditCardController = void 0;
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = n(3),
        a = n(55),
        s = function e(t, n, i, a, s, c, u, l, f) {
            var p = this;
            if (r(this, e), this.$rootScope = t, this.$scope = n, this.$state = i, this.CreditCardService = f, this.$scope.creditCardView = "overview", this.$scope.applyCreditCardCredentials = {}, this.$scope.hasCreditCards = !1, this.$scope.creditCardsLoading = !0, this.$scope.applyCreditCardErrors = [], o.DEBUG && console.log("CreditCardController", l.getCurrentStep()), "onboarding.transfer_from_checking_account.completed" === l.getCurrentStep()) {
                var d = l.getNextStep();
                o.DEBUG && console.log("creditcard: next step", l.getCurrentStep(), d)
            } else "onboarding.credit_card.select_card" === l.getCurrentStep() && l.goToStep("credit_card.intro");
            this.$scope.applyCreditCard = function(e) {
                p.$scope.creditCardView = "apply", p.$scope.creditCardType = e, "onboarding.credit_card.intro" === l.getCurrentStep() && l.getNextStep()
            }, this.$scope.applyForCreditCard = function() {
                o.DEBUG && console.log("applyForCreditCard", p.$scope), f.applyForCreditCard(p.$scope.applyCreditCardCredentials.username, p.$scope.applyCreditCardCredentials.password, p.$scope.creditCardType.id).then(function(e) {
                    if (a.publish("transaction.credentials"), i.go("creditcards.details", {
                            id: e.id
                        }), t.tutorialCreatedCreditCardId = e.id, "onboarding.credit_card.select_card" === l.getCurrentStep()) {
                        var n = l.getNextStep();
                        o.DEBUG && console.log("creditcard: next step", l.getCurrentStep(), n)
                    }
                }, function(e) {
                    p.$scope.applyCreditCardErrors = e.errors
                })
            }, this.$scope.cancelCard = function(e, t) {
                p.$state.go("creditcards.cancel", {
                    id: t.id
                })
            }, f.getCreditCardTypes().then(function(e) {
                p.$scope.cardTypes = e
            }, function(e) {}), f.getCreditCards().then(function(e) {
                p.$scope.creditCardsLoading = !1, p.$scope.cards = e, e.length > 0 && (p.$scope.hasCreditCards = !0)
            }, function(e) {
                p.$scope.creditCardsLoading = !1
            })
        };
    s.$inject = ["$rootScope", "$scope", "$state", "EventBus", "AuthService", "BankAccountService", "AssistantService", "TutorialService", "CreditCardService"];
    var c = function() {
        function e(t, n, i, s, c, u, l, f, p, d) {
            var h = this;
            r(this, e), this.$scope = n, this.$state = i, this.$stateParams = u, this.creditCardService = f, this.eventBus = c, n.creditCardView = "overview", n.payment = {}, this.$scope.card = t, this.$scope.cancelCreditCardCredentials = {}, this.$scope.makePayment = function() {
                if (n.creditCardView = "pay", "onboarding.credit_card.confirm" === d.getCurrentStep()) {
                    var e = d.getNextStep();
                    o.DEBUG && console.log("card details", e)
                }
                p.getAccounts().then(function(e) {
                    n.fromAccounts = e
                }, function(e) {})
            }, this.$scope.submitForm = function() {
                if (!h.$scope.isSubmitted) {
                    h.$scope.isSubmitted = !0, h.$scope.errors = null;
                    var e = null,
                        t = [],
                        n = (0, a.getRoundedMoney)(h.$scope.payment.amount);
                    if (null == n && t.push({
                            amount: "The amount must be a valid positive number (e.g. 99 or 99.00)"
                        }), h.$scope.payment.account || t.push({
                            account: "Account cannot be empty"
                        }), h.$scope.payment.amount || t.push({
                            amount: "Amount cannot be empty"
                        }), h.$scope.payment.date) {
                        if (h.$scope.payment.date) {
                            var r = new Date;
                            r.setHours(0, 0, 0, 0), r.setDate(r.getDate() - 1), e = Date.parse(h.$scope.payment.date), e || t.push({
                                date: "Invalid date format, use MM/DD/YYYY such as " + s("date")(new Date, "MM/dd/yyyy")
                            })
                        }
                    } else t.push({
                        date: "Date cannot be empty"
                    });
                    if (t.length > 0) return h.$scope.errors = t, void(h.$scope.isSubmitted = !1);
                    f.makePayment(h.$scope.card.id, h.$scope.payment.account, n, h.$scope.payment.date, h.$scope.payment.notes).then(function(e) {
                        h.$scope.isSubmitted = !1, c.publish("transaction.transfer"), h.$state.reload(), "onboarding.credit_card.payment.review" == d.getCurrentStep() && d.getNextStep()
                    }, function(e) {
                        h.$scope.isSubmitted = !1, h.$scope.errors = e.errors
                    })
                }
            }, this.$scope.$watch("payment.account", function(e, t) {
                if (o.DEBUG && console.log("current: ", d.getCurrentStep()), "onboarding.credit_card.payment.account" === d.getCurrentStep() && e && e.length > 0) {
                    var n = d.goToStep("credit_card.payment.amount");
                    o.DEBUG && console.log("creditcard: next step", d.getCurrentStep(), n)
                }
            }), this.$scope.$watch("payment.amount", function(e, t) {
                if (o.DEBUG && console.log("current: ", d.getCurrentStep()), "onboarding.credit_card.payment.amount" === d.getCurrentStep() && e && e.length > 0) {
                    var n = d.goToStep("credit_card.payment.date");
                    o.DEBUG && console.log("creditcard: next step", d.getCurrentStep(), n)
                }
            }), this.$scope.$watch("payment.date", function(e, t) {
                if (o.DEBUG && console.log("current: ", d.getCurrentStep()), "onboarding.credit_card.payment.date" === d.getCurrentStep() && e && e.length > 0) {
                    var n = d.goToStep("credit_card.payment.review");
                    o.DEBUG && console.log("creditcard: next step", d.getCurrentStep(), n)
                }
            }), o.DEBUG && console.log("CreditCardDetails", d.getCurrentStep(), d.isStepBetween("credit_card.confirm", "credit_card.payment.completed")), d.isStepBetween("credit_card.confirm", "credit_card.payment.completed") && d.goToStep("credit_card.confirm")
        }
        return i(e, [{
            key: "cancelCreditCard",
            value: function() {
                var e = this;
                this.creditCardService.cancelCard(this.$scope.card.id, this.$scope.cancelCreditCardCredentials.username, this.$scope.cancelCreditCardCredentials.password).then(function(t) {
                    e.$state.go("creditcards"), e.eventBus.publish("transaction.credentials")
                }, function(t) {
                    o.DEBUG && console.log("cancelCreditCard", t), e.$scope.cancelCreditCardErrors = t.errors
                })
            }
        }]), e
    }();
    c.$inject = ["card", "$scope", "$state", "$filter", "EventBus", "$stateParams", "AuthService", "CreditCardService", "BankAccountService", "TutorialService"], t.CreditCardController = s, t.CreditCardDetailsController = c
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = n(3),
        a = n(8),
        s = function() {
            function e(t, n, i, s, c, u, l) {
                var f = this;
                r(this, e), this.$scope = n, this.$scope.displayTutorial = !1, this.tutorialService = s, this.assistantService = c;
                var p = this.tutorialService.getTutorial("onboarding");
                p && p.state == a.TUTORIAL_STATE.NOT_STARTED && (this.$scope.displayTutorial = !0), this.$scope.transactionsLoading = !0, l.getLatestTransactions().then(function(e) {
                    o.DEBUG && console.log("getLatestTransactions", "success"), f.$scope.latestTransactions = e.transactions, f.$scope.transactionsLoading = !1
                }, function(e) {
                    o.DEBUG && console.log("getLatestTransactions: fail", e), f.$scope.latestTransactions = null, f.$scope.transactionsLoading = !1
                })
            }
            return i(e, [{
                key: "startTutorial",
                value: function(e) {
                    o.DEBUG && console.log("assistant.startTutorial", this.tutorialService.getTutorial()), null == this.tutorialService.getTutorial() && (this.tutorialService.startTutorial("onboarding", e), o.DEBUG && console.log("enable the onboarding tutorial"))
                }
            }, {
                key: "jumpToCreditCard",
                value: function() {
                    this.tutorialService.goToStep("transfer_from_checking_account.completed")
                }
            }]), e
        }();
    s.$inject = ["$rootScope", "$scope", "AuthService", "TutorialService", "AssistantService", "EventBus", "BankAccountService"], t.default = s
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = n(3),
        a = function() {
            function e(t, n, i, o, a, s, c) {
                r(this, e), a.isAuthenticated() && a.logout(), this.scope = t, this.$rootScope = n, this.state = i, this.$timeout = o, this.authService = a, this.scope.loginFormVisible = !1, this.scope.registerFormVisible = !1, this.EventBus = s, this.TutorialService = c, this.scope.login = {}, this.scope.register = {}, n.account_takeover_progress && n.account_takeover_progress.enabled && (this.scope.loginFormVisible = !0)
            }
            return i(e, [{
                key: "login",
                value: function() {
                    var e = this,
                        t = [];
                    if (this.scope.login.username || t.push({
                            username: "Username cannot be empty"
                        }), this.scope.login.password || t.push({
                            password: "Password cannot be empty"
                        }), t.length > 0) return void(this.scope.errors = t);
                    this.scope.loginFormSubmitted = !0, this.scope.errors = null, this.authService.login(this.scope.login.username, this.scope.login.password).then(function(t) {
                        if (e.scope.loginFormSubmitted = !1, o.DEBUG && console.log("login success"), e.EventBus.publish("transaction.credentials"), e.scope.loginFormVisible = !1, e.scope.registerFormVisible = !1, e.scope.errors = null, e.state.go("landing"), o.DEBUG && console.log("login.account_takevoer", e.$rootScope.account_takeover_progress), e.$rootScope.account_takeover_progress && e.$rootScope.account_takeover_progress.enabled) {
                            e.TutorialService.getTutorial("usecase_ato").enable(), e.TutorialService.startTutorial("usecase_ato"), e.TutorialService.goToStep("attack"), o.DEBUG && console.log("starting tutorial"), e.$rootScope.account_takeover_progress = {}
                        }
                    }, function(t) {
                        e.scope.loginFormSubmitted = !1, o.DEBUG && console.log("login err", t), e.scope.errors = t.errors
                    })
                }
            }, {
                key: "showLoginForm",
                value: function() {
                    this.scope.registerFormVisible = !1, this.scope.loginFormVisible = !0, this.clearLoginFields()
                }
            }, {
                key: "showRegisterForm",
                value: function() {
                    this.scope.loginFormVisible = !1, this.scope.registerFormVisible = !0, this.clearLoginFields()
                }
            }, {
                key: "hideLoginForm",
                value: function() {
                    this.scope.registerFormVisible = !1, this.scope.loginFormVisible = !1, this.clearLoginFields()
                }
            }, {
                key: "hideRegisterForm",
                value: function() {
                    this.scope.loginFormVisible = !1, this.scope.registerFormVisible = !1, this.clearLoginFields()
                }
            }, {
                key: "clearLoginFields",
                value: function() {
                    this.scope.login = {}, this.scope.register = {}, this.scope.errors = null, this.scope.registrationCompleted = null, this.EventBus.publish("collector.reset")
                }
            }, {
                key: "register",
                value: function() {
                    var e = this,
                        t = [];
                    if (this.scope.register.username || t.push({
                            username: "Username cannot be empty"
                        }), this.scope.register.password || t.push({
                            password: "Password cannot be empty"
                        }), this.scope.register.password != this.scope.register.confirm_password && t.push({
                            confirm_password: "Passwords must be equal"
                        }), t.length > 0) return void(this.scope.errors = t);
                    this.scope.registerFormSubmitted = !0, this.authService.register(this.scope.register.username, this.scope.register.password).then(function(t) {
                        var n = e.scope.register.username.toString();
                        e.scope.registerFormSubmitted = !1, e.showLoginForm(), e.$timeout(function() {
                            return e.EventBus.publish("collector.reset", 250)
                        }), e.scope.registrationCompleted = {
                            username: n
                        }
                    }, function(t) {
                        e.scope.register = {}, e.$timeout(function() {
                            return e.EventBus.publish("collector.reset")
                        }, 250), e.scope.errors = t.errors, e.scope.registerFormSubmitted = !1
                    })
                }
            }]), e
        }();
    a.$inject = ["$scope", "$rootScope", "$state", "$timeout", "AuthService", "EventBus", "TutorialService"], t.default = a
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = n(55),
        a = function e(t, n, a, s, c, u, l, f, p, d, h) {
            var v = this;
            if (r(this, e), this.$scope = n, this.$scope.transfer = {}, this.$scope.transferStatus = "initialized", this.$scope.errors = null, this.$scope.isSubmitted = !1, this.$scope.submitForm = function(e) {
                    if (!v.$scope.isSubmitted) {
                        v.$scope.isSubmitted = !0, v.$scope.errors = null, v.$scope.transferStatus = "in_progress";
                        var t = null,
                            r = [],
                            a = (0, o.getRoundedMoney)(v.$scope.transfer.amount);
                        if (null == a && r.push({
                                amount: "The amount must be a valid positive number (e.g. 99 or 99.00)"
                            }), v.$scope.transfer.from_account || r.push({
                                from_account: "From account cannot be empty"
                            }), v.$scope.transfer.to_account || r.push({
                                from_account: "From account cannot be empty"
                            }), v.$scope.transfer.amount || r.push({
                                from_account: "Amount cannot be empty"
                            }), v.$scope.transfer.transfer_date) {
                            if (v.$scope.transfer.transfer_date) {
                                var u = new Date;
                                u.setHours(0, 0, 0, 0), u.setDate(u.getDate() - 1), t = Date.parse(v.$scope.transfer.transfer_date), t || r.push({
                                    transfer_date: "Invalid date format, use MM/DD/YYYY such as " + s("date")(new Date, "MM/dd/yyyy")
                                })
                            }
                        } else r.push({
                            from_account: "Date cannot be empty"
                        });
                        if (r.length > 0) return v.$scope.errors = r, v.$scope.transferStatus = "initialized", void(v.$scope.isSubmitted = !1);
                        l.transfer(n.transfer.from_account, n.transfer.to_account, a, (new Date).getTime(), n.transfer.notes).then(function(e) {
                            v.$scope.transferStatus = "completed", v.$scope.isSubmitted = !1, c.publish("scroll.reset"), v.$scope.transfer_from_account = e.account, c.publish("transaction.transfer");
                            var t = p.getTutorial();
                            i.DEBUG && console.log("completed", v.$scope.transferStatus, t, t.key), "completed" === v.$scope.transferStatus && p.isStepBetween("transfer_from_checking_account.to_account", "transfer_from_checking_account.completed") ? p.goToStep("transfer_from_checking_account.completed") : "completed" !== v.$scope.transferStatus || "usecase_remote.transfer" !== p.getCurrentStep() && "usecase_remote.intro" !== p.getCurrentStep() && "usecase_bot.transfer" !== p.getCurrentStep() && "usecase_bot.intro" !== p.getCurrentStep() ? "completed" !== v.$scope.transferStatus || "usecase_remote.transfer.attack" !== p.getCurrentStep() && "usecase_bot.transfer.attack" !== p.getCurrentStep() || p.goToStep("transfer.result") : (p.goToStep("transfer.completed"), d.setTransaction(n.transfer.from_account, n.transfer.to_account, n.transfer.amount), h.setTransaction(n.transfer.from_account, n.transfer.to_account, n.transfer.amount))
                        }, function(e) {
                            v.$scope.isSubmitted = !1, v.$scope.withErrors = !0, v.$scope.transferStatus = "initialized", v.$scope.errors = e.errors
                        })
                    }
                }, i.DEBUG && console.log("between", p.isStepBetween("transfer_from_checking_account.to_account", "transfer_from_checking_account.notes"), p.isStepAfter("transfer_from_checking_account.to_account"), p.isStepBefore("transfer_from_checking_account.notes")), p.getTutorial() && "onboarding" === p.getTutorial().key && p.isStepBetween("transfer_from_checking_account.to_account", "transfer_from_checking_account.completed") ? p.goToStep("transfer_from_checking_account.from_account") : "usecase_remote.transfer.completed" !== p.getCurrentStep() && "usecase_bot.transfer.completed" !== p.getCurrentStep() || p.goToStep("transfer.attack"), "onboarding.transfer_from_checking_account" == p.getCurrentStep()) {
                var g = p.getNextStep();
                i.DEBUG && console.log("transfer: next step", p.getCurrentStep(), g)
            }
            this.$scope.$watch("transfer.from_account", function(e, t) {
                if (i.DEBUG && console.log("transfer.from_account changed", e, t), "onboarding.transfer_from_checking_account.from_account" === p.getCurrentStep() && e && e.length > 1) {
                    var n = p.getNextStep();
                    i.DEBUG && console.log("transfer: next step", p.getCurrentStep(), n)
                }
            }), this.$scope.$watch("transfer.to_account", function(e, t) {
                if (i.DEBUG && console.log("transfer.to_account changed", e, t), "onboarding.transfer_from_checking_account.to_account" === p.getCurrentStep() && e && e.length > 0) {
                    var n = p.getNextStep();
                    i.DEBUG && console.log("transfer: next step", p.getCurrentStep(), n)
                }
            }), this.$scope.$watch("transfer.amount", function(e, t) {
                if (i.DEBUG && console.log("transfer.amount changed", e, t), "onboarding.transfer_from_checking_account.amount" === p.getCurrentStep() && e > 0) {
                    var n = p.getNextStep();
                    i.DEBUG && console.log("transfer: next step", p.getCurrentStep(), n)
                }
            }), this.$scope.$watch("transfer.transfer_date", function(e, t) {
                if (i.DEBUG && console.log("transfer.transfer_date changed", e, t), "onboarding.transfer_from_checking_account.date" === p.getCurrentStep() && e && e.length > 0) {
                    var n = p.getNextStep();
                    i.DEBUG && console.log("transfer: next step", p.getCurrentStep(), n)
                }
            }), this.$scope.$watch("transfer.notes", function(e, t) {
                if (i.DEBUG && console.log("transfer.notes changed", e, t), "onboarding.transfer_from_checking_account.notes" === p.getCurrentStep() && e && e.length > 0) {
                    var n = p.getNextStep();
                    i.DEBUG && console.log("transfer: next step", p.getCurrentStep(), n)
                }
            }), "usecase_remote.intro" === p.getCurrentStep() && p.getNextStep(), "usecase_bot.intro" === p.getCurrentStep() && p.getNextStep(), p.isStepAfter("transfer.completed") && p.isStepBefore("transfer.result") && (this.$scope.remoteWillAttack = !0);
            var m = c.subscribe("remote.submit_transfer", function() {
                    i.DEBUG && console.log("remote.submit form"), v.$scope.submitForm()
                }),
                $ = c.subscribe("bot.submit_transfer", function() {
                    i.DEBUG && console.log("bot.submit form"), v.$scope.submitForm()
                }),
                y = c.subscribe("tutorial.start", function(e, t) {
                    i.DEBUG && console.log("sub: tutorial.start", t, a.current.name), "usecase_remote" === t && "transfer" == a.current.name && i.DEBUG && console.log("moving usecase_remote to transfer")
                });
            l.getAccounts().then(function(e) {
                v.$scope.accounts = e
            }, function(e) {}), this.$scope.$on("$destroy", function() {
                m(), $(), y()
            })
        };
    a.$inject = ["$rootScope", "$scope", "$state", "$filter", "EventBus", "AuthService", "BankAccountService", "AssistantService", "TutorialService", "RemoteRunner", "BotRunner"], t.default = a
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
        return Array.from(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.remoteHelper = t.RemoteScenarioController = void 0;
    var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        a = n(3),
        s = function() {
            function e(t, n, r, o, a, s, c) {
                var u = this;
                i(this, e), this.$rootScope = t, this.$scope = n, this.$state = r, this.$parse = o, this.$timeout = a, this.eventBus = s, this.RemoteRunner = c, this.$rootScope.remote = {
                    isRunning: !1
                };
                var l = s.subscribe("remote.play", function() {
                    u.play()
                });
                this.$scope.$on("$destroy", function() {
                    l()
                })
            }
            return o(e, [{
                key: "play",
                value: function() {
                    var e = this;
                    this.$rootScope.remote.isRunning || (this.$rootScope.remote.isRunning = !0, this.RemoteRunner.getEventsForPage("").then(function(t) {
                        e._playEvents(t)
                    }, function(e) {
                        a.DEBUG && console.log("couldn't fetch remote events for the specified page")
                    }))
                }
            }, {
                key: "stop",
                value: function() {}
            }, {
                key: "_playEvents",
                value: function(e) {
                    var t = this;
                    a.DEBUG && console.log("remote: play");
                    var n = {};
                    this._clearFields(e);
                    var i = function(e, n) {
                            if (t.$rootScope.browsers.isIE) {
                                var r = document.createEvent("KeyboardEvent");
                                return r.initKeyboardEvent(e, !0, !0, window, n, n, 0, !1, 0), r
                            }
                            return new KeyboardEvent(e, {
                                keyCode: n
                            })
                        },
                        o = function(r) {
                            setTimeout(function() {
                                var o = e[r],
                                    s = n[o.target] = n[o.target] || document.querySelector(o.target);
                                if (a.DEBUG && console.log("targetElement", s), s) {
                                    var c = angular.element(s).scope(),
                                        u = s.getAttribute("ng-model"),
                                        l = t.$parse(u),
                                        f = i(o.eventType, o.keyCode);
                                    s.dispatchEvent(f), "keydown" === o.eventType && (a.DEBUG && console.log(u, String.fromCharCode(o.keyCode)), c.$apply(function() {
                                        l.assign(c, (l(c) || "") + String.fromCharCode(o.keyCode))
                                    }))
                                }
                                a.DEBUG && console.log(e[r], o.time, (new Date).getTime())
                            }, e[r].time)
                        };
                    for (var s in e) o(s);
                    var c = Math.max.apply(Math, r(e.map(function(e) {
                        return e.time
                    })));
                    setTimeout(function() {
                        a.DEBUG && console.log("remote finished"), t.$timeout(function() {
                            t.$rootScope.remote.isRunning = !1
                        }), t.eventBus.publish("remote.submit_transfer")
                    }, c + 2500)
                }
            }, {
                key: "_clearFields",
                value: function(e) {
                    var t = this;
                    this.eventBus.publish("collector.reset");
                    var n = {};
                    for (var r in e) {
                        n[e[r].target] = !0
                    }
                    for (var i in n) {
                        var o = document.querySelector(i);
                        o && function() {
                            var e = angular.element(o).scope(),
                                n = o.getAttribute("ng-model"),
                                r = t.$parse(n);
                            t.$timeout(function() {
                                return r.assign(e, "")
                            })
                        }()
                    }
                }
            }, {
                key: "run",
                value: function() {
                    a.DEBUG && console.log("remote.run"), this.play()
                }
            }]), e
        }();
    s.$inject = ["$rootScope", "$scope", "$state", "$parse", "$timeout", "EventBus", "RemoteRunner"];
    var c = function() {
        return {
            template: n(113),
            controller: "RemoteScenarioController as $remote"
        }
    };
    t.RemoteScenarioController = s, t.remoteHelper = c
}, function(e, t, n) {
    "use strict";

    function r(e, t, n, r, s) {
        var c = null,
            u = function() {
                return !(!c || !c.user)
            },
            l = function() {
                return c && c.user
            },
            f = function() {
                return c
            },
            p = function() {},
            d = function(n, r) {
                var i = e.defer(),
                    a = {
                        username: n,
                        password: r,
                        bd: window.bw.getData()
                    };
                return t.post(o.BASE_API_HOST + "/api/x/login", a).then(function(e) {
                    var t = e.data;
                    "ok" === t.status ? (o.DEBUG && console.log("login", t.token, t.username), h(t.token), c.user.credentials = m(t.profiles), c.user.transfers = $(t.profiles), window.sessionStorage.setItem("auth.token", t.token), s.publish("behavior", {
                        behavior: t.behavior
                    }), s.publish("profile", {
                        profiles: t.profiles
                    }), i.resolve(c)) : i.reject()
                }, function(e) {
                    i.reject("error" === e.data.status ? {
                        errors: e.data.errors || []
                    } : {
                        errors: []
                    })
                }), i.promise
            },
            h = function(e) {
                o.DEBUG && console.log("setAuthSession", e);
                var t = e.split("."),
                    n = i(t, 2),
                    r = n[0],
                    u = (n[1], JSON.parse(atob(r))),
                    l = u.username,
                    f = new a.User(l);
                c = new a.AuthSession(e, u.sessionid, f), o.DEBUG && console.log("setAuthSession: publish auth session", c), s.publish("login.success", c)
            },
            v = function(n, r) {
                var i = e.defer(),
                    a = {
                        username: n,
                        password: r,
                        bd: window.bw.getData()
                    };
                return t.post(o.BASE_API_HOST + "/api/x/register", a).then(function(e) {
                    i.resolve()
                }, function(e) {
                    i.reject("error" === e.data.status ? {
                        errors: e.data.errors || []
                    } : {
                        errors: []
                    })
                }), i.promise
            },
            g = function() {
                o.DEBUG && console.log("logout", c), t.post(o.BASE_API_HOST + "/api/x/logout", {}, {
                    headers: {
                        Authorization: "Bearer " + c.token
                    }
                }), c = null, s.publish("logout")
            },
            m = function(e) {
                var t = y({
                    "text#username": 0,
                    "password#password": 0
                }, e);
                return Math.min(t["text#username"], t["password#password"])
            },
            $ = function(e) {
                var t = y({
                    "text#amount": 0,
                    "text#transfer_date": 0
                }, e);
                return Math.min(t["text#amount"], t["text#transfer_date"])
            },
            y = function(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    e[r.target] || 0 === e[r.target] ? e[r.target] = r.updates : o.DEBUG && console.log("target not found: ", r.target)
                }
                return o.DEBUG && console.log("get target updates", e, t), e
            };
        return s.subscribe("auth.refresh", function() {
            c && t.get(o.BASE_API_HOST + "/api/x/me").then(function(e) {
                var t = e.data;
                "ok" === t.status && (c.user.credentials = m(t.profiles), c.user.transfers = $(t.profiles), s.publish("profiles", {
                    profiles: t.profiles
                }), o.DEBUG && console.log("refresh", c.user.logins, c.user.transfers, c.user))
            }, function(e) {
                o.DEBUG && console.log("auth.refresh: failed")
            })
        }), {
            isAuthenticated: u,
            requireAuth: p,
            logout: g,
            login: d,
            register: v,
            getUser: l,
            getSession: f,
            setAuthSession: h
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && s.return && s.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        o = n(3),
        a = n(8);
    r.$inject = ["$q", "$http", "$rootScope", "$state", "EventBus"], t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        function r() {
            var n = e.defer(),
                r = [];
            return t.get(i.BASE_API_HOST + "/api/x/accounts").then(function(e) {
                var t = e.data;
                if ("ok" === t.status) {
                    for (var i = t.accounts, a = 0; a < i.length; a++) {
                        var s = i[a];
                        r.push(new o.BankAccount(s.id, s.name, s.balance))
                    }
                    n.resolve(r)
                } else n.reject()
            }, function(e) {
                n.reject()
            }), n.promise
        }

        function a(n) {
            var r = e.defer();
            return t.get(i.BASE_API_HOST + "/api/x/accounts/" + n).then(function(e) {
                var t = e.data;
                if ("ok" === t.status) {
                    var n = t.account;
                    r.resolve(new o.BankAccount(n.id, n.name, n.balance))
                } else r.reject()
            }, function(e) {
                r.reject()
            }), r.promise
        }

        function s() {
            var n = e.defer();
            return t.get(i.BASE_API_HOST + "/api/x/transactions/latest").then(function(e) {
                var t = e.data;
                "ok" === t.status ? n.resolve({
                    transactions: t.transactions.map(function(e) {
                        return new o.Transaction(e.id, e.timestamp, e.notes, e.amount, e.balance)
                    })
                }) : n.reject()
            }, function(e) {
                n.reject()
            }), n.promise
        }

        function c(n) {
            var r = e.defer();
            return t.get(i.BASE_API_HOST + "/api/x/accounts/" + n + "/transactions").then(function(e) {
                var t = e.data;
                if ("ok" === t.status) {
                    var n = t.transactions;
                    r.resolve(n.map(function(e) {
                        return new o.Transaction(e.id, e.timestamp, e.notes, e.amount, e.balance)
                    }))
                } else r.reject()
            }, function(e) {
                r.reject()
            }), r.promise
        }

        function u(r, a, s, c, u) {
            var l = {
                    fromId: r,
                    toId: a,
                    amount: s,
                    date: (new Date).getTime(),
                    notes: u,
                    bd: window.bw.getData()
                },
                f = e.defer();
            return t.post(i.BASE_API_HOST + "/api/x/transactions", l).then(function(e) {
                var t = e.data;
                if ("ok" === t.status) {
                    var r = t.account;
                    n.publish("behavior", {
                        behavior: t.behavior
                    }), f.resolve({
                        account: new o.BankAccount(r.id, r.name, r.balance)
                    })
                } else f.reject()
            }, function(e) {
                f.reject({
                    errors: e.data.errors
                })
            }), f.promise
        }
        return {
            getAccounts: r,
            getAccount: a,
            getTransactionsForAccount: c,
            transfer: u,
            getLatestTransactions: s
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = n(8);
    t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        var t = null;
        return {
            getEventsForPage: function(n) {
                var r = e.defer();
                return setTimeout(function() {
                    var e = (new Date).toJSON(),
                        n = 1,
                        i = function(e) {
                            return n += 1 + (e || 0)
                        },
                        s = [];
                    null == t && (t = {
                        amount: 1234,
                        fromAccount: "9263172018060001",
                        toAccount: "9263172018060001"
                    });
                    for (var c = t.amount.toString(), u = 0; u < c.length; u++) s.push(new a("#amount", i(), "keydown", c.charCodeAt(u)));
                    for (var l = 0; l < c.length; l++) s.push(new a("#amount", i(), "keyup", c.charCodeAt(l)));
                    s.push(new a("#transfer_date", i(), "keydown", e.charCodeAt(5)), new a("#transfer_date", i(), "keydown", e.charCodeAt(6)), new a("#transfer_date", i(), "keydown", "/".charCodeAt(0)), new a("#transfer_date", i(), "keyup", e.charCodeAt(5)), new a("#transfer_date", i(), "keyup", e.charCodeAt(6)), new a("#transfer_date", i(), "keyup", "/".charCodeAt(0)), new a("#transfer_date", i(500), "keydown", e.charCodeAt(8)), new a("#transfer_date", i(), "keydown", e.charCodeAt(9)), new a("#transfer_date", i(), "keydown", "/".charCodeAt(0)), new a("#transfer_date", i(), "keyup", e.charCodeAt(8)), new a("#transfer_date", i(), "keyup", e.charCodeAt(9)), new a("#transfer_date", i(), "keyup", "/".charCodeAt(0)), new a("#transfer_date", i(500), "keydown", e.charCodeAt(0)), new a("#transfer_date", i(), "keydown", e.charCodeAt(1)), new a("#transfer_date", i(), "keydown", e.charCodeAt(2)), new a("#transfer_date", i(), "keydown", e.charCodeAt(3)), new a("#transfer_date", i(), "keyup", e.charCodeAt(0)), new a("#transfer_date", i(), "keyup", e.charCodeAt(1)), new a("#transfer_date", i(), "keyup", e.charCodeAt(2)), new a("#transfer_date", i(), "keyup", e.charCodeAt(3)));
                    for (var f = t.fromAccount, p = t.toAccount, d = 0; d < p.length; d++) s.push(new a("#from_account", i(), "keydown", p.charCodeAt(d))), s.push(new a("#from_account", i(), "keyup", p.charCodeAt(d)));
                    for (var d = 0; d < f.length; d++) s.push(new a("#to_account", i(), "keydown", f.charCodeAt(d))), s.push(new a("#to_account", i(), "keyup", f.charCodeAt(d)));
                    o.DEBUG && console.log("Bot events", s), r.resolve(s)
                }, 500), r.promise
            },
            setTransaction: function(e, n, r) {
                t = {
                    fromAccount: e,
                    toAccount: n,
                    amount: r
                }, o.DEBUG && console.log("setTransaction", t)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        a = function e(t, n, i, o) {
            r(this, e), this.target = t, this.time = n, this.eventType = i, this.keyCode = o
        };
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = function() {
                var n = e.defer();
                return t.get(i.BASE_API_HOST + "/api/x/cards/types").then(function(e) {
                    var t = e.data;
                    if ("ok" === t.status) {
                        var r = t.types;
                        n.resolve(r.map(function(e) {
                            return new o.CreditCardType(e.id, e.name, e.fee)
                        }))
                    } else n.reject()
                }, function(e) {
                    n.reject()
                }), n.promise
            },
            a = function() {
                var n = e.defer();
                return t.get(i.BASE_API_HOST + "/api/x/cards").then(function(e) {
                    var t = e.data;
                    if ("ok" === t.status) {
                        var r = t.cards;
                        n.resolve(r.map(function(e) {
                            return new o.CreditCard(e.id, new o.CreditCardType(e.type.id, e.type.name, e.type.fee), e.balance)
                        }))
                    } else n.reject()
                }, function(e) {
                    n.reject()
                }), n.promise
            },
            s = function(n) {
                var r = e.defer();
                return t.get(i.BASE_API_HOST + "/api/x/cards/" + n).then(function(e) {
                    var t = e.data;
                    if ("ok" === t.status) {
                        var n = t.card;
                        r.resolve(new o.CreditCard(n.id, new o.CreditCardType(n.type.id, n.type.name, n.type.fee), n.balance))
                    } else r.reject()
                }, function(e) {
                    r.reject()
                }), r.promise
            };
        return {
            getCreditCardTypes: r,
            applyForCreditCard: function(r, a, s) {
                var c = e.defer(),
                    u = {
                        username: r,
                        password: a,
                        cardId: s,
                        bd: window.bw.getData()
                    };
                return t.post(i.BASE_API_HOST + "/api/x/cards/apply", u).then(function(e) {
                    var t = e.data;
                    if ("ok" === t.status) {
                        var r = t.card;
                        n.publish("behavior", {
                            behavior: t.behavior
                        }), c.resolve(new o.CreditCard(r.id, new o.CreditCardType(r.type.id, r.type.name, r.type.fee), r.balance))
                    } else c.reject()
                }, function(e) {
                    c.reject({
                        errors: e.data.errors
                    })
                }), c.promise
            },
            getCreditCards: a,
            getCreditCard: s,
            makePayment: function(r, o, a, s, c) {
                var u = e.defer(),
                    l = {
                        accountId: o,
                        amount: a,
                        date: s,
                        notes: c,
                        bd: window.bw.getData()
                    };
                return t.post(i.BASE_API_HOST + "/api/x/cards/" + r + "/pay", l).then(function(e) {
                    var t = e.data;
                    "ok" === t.status ? (n.publish("behavior", {
                        behavior: t.behavior
                    }), u.resolve()) : u.reject({
                        errors: []
                    })
                }, function(e) {
                    u.reject({
                        errors: e.data.errors
                    })
                }), u.promise
            },
            cancelCard: function(n, r, o) {
                var a = e.defer(),
                    s = {
                        username: r,
                        password: o,
                        bd: window.bw.getData()
                    };
                return t.post(i.BASE_API_HOST + "/api/x/cards/" + n + "/cancel", s).then(function(e) {
                    a.resolve(!0)
                }, function(e) {
                    a.reject({
                        errors: e.data.errors
                    })
                }), a.promise
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = n(8);
    r.$inject = ["$q", "$http", "EventBus"], t.default = r
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        o = function() {
            function e(t) {
                r(this, e), this.$rootScope = t
            }
            return i(e, [{
                key: "subscribe",
                value: function(e, t) {
                    return this.$rootScope.$on(e, t)
                }
            }, {
                key: "publish",
                value: function(e, t) {
                    this.$rootScope.$emit(e, t)
                }
            }]), e
        }();
    o.$inject = ["$rootScope"], t.default = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e) {
        var t = null;
        return {
            getEventsForPage: function(n) {
                var r = e.defer();
                return setTimeout(function() {
                    var e = (new Date).toJSON(),
                        n = 150,
                        i = function(e) {
                            return n += 1 + (e || 0)
                        },
                        s = [];
                    null == t && (t = {
                        amount: 1234,
                        fromAccount: "9263172018060001",
                        toAccount: "9263172018060001"
                    });
                    for (var c = t.amount.toString(), u = 0; u < c.length; u++) s.push(new a("#amount", i(100), "keydown", c.charCodeAt(u))), s.push(new a("#amount", i(), "keyup", c.charCodeAt(u)));
                    s.push(new a("#transfer_date", i(), "keydown", e.charCodeAt(5)), new a("#transfer_date", i(), "keyup", e.charCodeAt(5)), new a("#transfer_date", i(100), "keydown", e.charCodeAt(6)), new a("#transfer_date", i(), "keyup", e.charCodeAt(6)), new a("#transfer_date", i(110), "keydown", "/".charCodeAt(0)), new a("#transfer_date", i(), "keyup", "/".charCodeAt(0)), new a("#transfer_date", i(500), "keydown", e.charCodeAt(8)), new a("#transfer_date", i(), "keyup", e.charCodeAt(8)), new a("#transfer_date", i(140), "keydown", e.charCodeAt(9)), new a("#transfer_date", i(), "keyup", e.charCodeAt(9)), new a("#transfer_date", i(130), "keydown", "/".charCodeAt(0)), new a("#transfer_date", i(), "keyup", "/".charCodeAt(0)), new a("#transfer_date", i(1e3), "keydown", e.charCodeAt(0)), new a("#transfer_date", i(), "keyup", e.charCodeAt(0)), new a("#transfer_date", i(100), "keydown", e.charCodeAt(1)), new a("#transfer_date", i(), "keyup", e.charCodeAt(1)), new a("#transfer_date", i(150), "keydown", e.charCodeAt(2)), new a("#transfer_date", i(), "keyup", e.charCodeAt(2)), new a("#transfer_date", i(120), "keydown", e.charCodeAt(3)), new a("#transfer_date", i(), "keyup", e.charCodeAt(3)));
                    for (var l = t.fromAccount, f = t.toAccount, p = 0; p < f.length; p++) s.push(new a("#from_account", i(70), "keydown", f.charCodeAt(p))), s.push(new a("#from_account", i(), "keyup", f.charCodeAt(p)));
                    for (var p = 0; p < l.length; p++) s.push(new a("#to_account", i(70), "keydown", l.charCodeAt(p))), s.push(new a("#to_account", i(), "keyup", l.charCodeAt(p)));
                    o.DEBUG && console.log("remote events", s), r.resolve(s)
                }, 500), r.promise
            },
            setTransaction: function(e, n, r) {
                t = {
                    fromAccount: e,
                    toAccount: n,
                    amount: r
                }, o.DEBUG && console.log("setTransaction", t)
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(3),
        a = function e(t, n, i, o) {
            r(this, e), this.target = t, this.time = n, this.eventType = i, this.keyCode = o
        };
    t.default = i
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = {
            onboarding: new o.Tutorial("onboarding", "Onboarding tutorial", ["browse_to_accounts", "transfer_from_checking_account", "transfer_from_checking_account.from_account", "transfer_from_checking_account.to_account", "transfer_from_checking_account.amount", "transfer_from_checking_account.date", "transfer_from_checking_account.notes", "transfer_from_checking_account.submit", "transfer_from_checking_account.completed", "credit_card.intro", "credit_card.select_card", "credit_card.confirm", "credit_card.payment.account", "credit_card.payment.amount", "credit_card.payment.date", "credit_card.payment.review", "credit_card.payment.completed"]),
            usecase_remote: new o.Tutorial("usecase_remote", "Remote Session", ["intro", "transfer", "transfer.completed", "transfer.attack", "transfer.result"]),
            usecase_bot: new o.Tutorial("usecase_bot", "Bot Attack", ["intro", "transfer", "transfer.completed", "transfer.attack", "transfer.result"]),
            usecase_ato: new o.Tutorial("usecase_ato", "Account takeover", ["intro", "attack"])
        };
        t.onboarding.enable();
        var n = "done",
            r = null,
            a = function() {
                return r ? r.step > r.steps.length ? r.key + "." + n : r.key + "." + r.steps[r.step] : null
            },
            s = function() {
                if (!r) return null;
                if (r.steps.length >= r.step) {
                    var t = r.steps[++r.step];
                    return e.publish("tutorial.step", {
                        step: t,
                        tutorial: r.key
                    }), r.key + "." + t
                }
                return r.state = o.TUTORIAL_STATE.COMPLETED, r.key + "." + n
            },
            c = function(t) {
                if (!r) return !1;
                if (r.steps.length >= r.step) {
                    var n = r.steps.indexOf(t);
                    if (i.DEBUG && console.log("goToStep", n, r.step), n > 0) {
                        r.step = n, i.DEBUG && console.log("goToStep>0", n, r.step);
                        var o = r.steps[n];
                        return e.publish("tutorial.step", {
                            step: o,
                            tutorial: r.key
                        }), !0
                    }
                }
                return !1
            },
            u = function(e) {
                if (!r) return !1;
                var t = r.step,
                    n = r.steps.indexOf(e);
                return i.DEBUG && console.log("isStepBefore", n, t), n > 0 && t < n
            },
            l = function(e) {
                if (!r) return !1;
                var t = r.step,
                    n = r.steps.indexOf(e);
                return i.DEBUG && console.log("isStepAfter", n, t), n > 0 && t > n
            },
            f = function(e, t) {
                return l(e) && u(t)
            },
            p = function(n, a) {
                var s = t[n];
                if (i.DEBUG && console.log("startTutorial", s), s && a && (s.step = 0, i.DEBUG && console.log("reset tutorial", s)), !s || 0 !== s.step || !s.enabled) return void(i.DEBUG && console.log("exit tutorial", s));
                r = s, r.state = o.TUTORIAL_STATE.IN_PROGRESS, e.publish("tutorial.start", r.key), e.publish("tutorial.step", {
                    step: r.steps[0],
                    tutorial: r.key
                })
            },
            d = function(e) {
                return e ? t[e] : r
            },
            h = function() {
                return r ? r.state : null
            },
            v = function() {
                t.usecase_remote.disable(), t.usecase_remote.step = 0, t.usecase_bot.disable(), t.usecase_bot.step = 0, t.usecase_ato.disable(), t.usecase_ato.step = 0, t.onboarding.step = 0, r = null
            };
        return e.subscribe("tutorial.start_remote", function(e) {
            t.usecase_remote.enable(), p("usecase_remote", !0), i.DEBUG && console.log("starting remote tutorial")
        }), e.subscribe("tutorial.start_bot", function(e) {
            t.usecase_bot.enable(), p("usecase_bot", !0), i.DEBUG && console.log("starting bot tutorial")
        }), e.subscribe("tutorial.start_ato", function(e) {
            t.usecase_ato.enable(), p("usecase_ato", !0), i.DEBUG && console.log("starting ato tutorial")
        }), {
            getCurrentStep: a,
            getNextStep: s,
            getState: h,
            startTutorial: p,
            getTutorial: d,
            goToStep: c,
            isStepAfter: l,
            isStepBefore: u,
            isStepBetween: f,
            reset: v
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(3),
        o = n(8);
    r.$inject = ["EventBus"], t.default = r
}, function(e, t, n) {
    "use strict";
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(e, t, n, i) {
        function o() {
            n in e || void 0 !== e[n] || (a(i), e[n] = {
                startMonitor: g,
                stopMonitor: $,
                getData: b,
                reset: v
            }, Ee.autoload && g())
        }

        function a(e) {
            if (!f()) {
                e || (e = {}), Ee = {
                    collectMouse: void 0 !== e.collectMouse ? e.collectMouse : ke.collectMouse,
                    collectMouseMovement: void 0 !== e.collectMouseMovement ? e.collectMouseMovement : ke.collectMouseMovement,
                    ignoreFields: {
                        by_id: e.ignoreFields && void 0 !== e.ignoreFields.by_id ? e.ignoreFields.by_id : ke.ignoreFields.by_id,
                        by_name: e.ignoreFields && void 0 !== e.ignoreFields.by_name ? e.ignoreFields.by_name : ke.ignoreFields.by_name
                    },
                    anonymous: {
                        by_id: e.anonymous && void 0 !== e.anonymous.by_id ? e.anonymous.by_id : ke.anonymous.by_id,
                        by_name: e.anonymous && void 0 !== e.anonymous.by_name ? e.anonymous.by_name : ke.anonymous.by_name,
                        by_type: e.anonymous && void 0 !== e.anonymous.by_type ? e.anonymous.by_type : ke.anonymous.by_type
                    },
                    metaPageId: e.metaPageId ? e.metaPageId : ke.metaPageId,
                    pageIdCallback: "function" == typeof e.pageIdCallback ? e.pageIdCallback : ke.pageIdCallback,
                    autoload: void 0 !== e.autoload ? e.autoload : ke.autoload,
                    container: e.container
                };
                var t, n;
                _e = {
                    ids: [],
                    names: []
                }, xe = {
                    ids: [],
                    names: [],
                    types: []
                };
                for (t in Ee.ignoreFields.by_id) n = Ee.ignoreFields.by_id[t], _e.ids[n] = !0;
                for (t in Ee.ignoreFields.by_name) n = Ee.ignoreFields.by_name[t], _e.names[n] = !0;
                for (t in Ee.anonymous.by_id) n = Ee.anonymous.by_id[t], xe.ids[n] = !0;
                for (t in Ee.anonymous.by_name) n = Ee.anonymous.by_name[t], xe.names[n] = !0;
                for (t in Ee.anonymous.by_type) n = Ee.anonymous.by_type[t], xe.types[n] = !0
            }
        }

        function s(t) {
            var n, r;
            for (n = ce.length - 1; n >= -1; n--) {
                if (-1 === n) {
                    r = null == ce[0] ? 0 : ce.length, ce[r] = [], ce[r][0] = "c", ce[r][1] = [], ce[r][1][0] = t, ce[r][2] = e.location.pathname.split("?")[0];
                    break
                }
                if ("c" === ce[n][0]) {
                    ce[n][1][ce[n][1].length] = t;
                    break
                }
            }
        }

        function c(e, n) {
            var r = t.elementFromPoint(e.clientX, e.clientY),
                i = [];
            null !== r && r !== ve && void 0 !== r && void 0 !== r.parentNode && (i[0] = "t", i[1] = r.nodeName + "#" + r.id + "#" + r.parentNode.nodeName + "#" + r.parentNode.id, i[2] = n || l(), ve = r, s(i))
        }

        function u(e) {
            if (he[0] !== t.documentElement.clientWidth || he[1] !== t.documentElement.clientHeight) {
                var n = [];
                n[0] = "v", n[1] = t.documentElement.clientWidth, n[2] = t.documentElement.clientHeight, n[3] = e || l(), he[0] = t.documentElement.clientWidth, he[1] = t.documentElement.clientHeight, s(n)
            }
        }

        function l() {
            return (new Date).getTime() - de
        }

        function f() {
            return Ce === Se.STARTED
        }

        function p() {
            return Ce === Se.STOPPED
        }

        function d() {
            return Ce !== Se.STARTED && (Ce = Se.STARTED, !0)
        }

        function h() {
            return Ce !== Se.STOPPED && (Ce = Se.STOPPED, !0)
        }

        function v() {
            var t, n = {};
            for (t in e.navigator) n[t] = e.navigator[t];
            delete n.plugins, delete n.mimeTypes;
            var r = {};
            for (t in e.screen) r[t] = e.screen[t];
            de = (new Date).getTime(), ye = {
                ptype: null,
                ptypes: {},
                k229: 0,
                kn: 0,
                tz: (new Date).getTimezoneOffset()
            }, fe = {
                meta: {},
                events: []
            }, ue = {}, le = ["w", [], F()], ce = [], ce[0] = ["m", "n", n], ce[1] = ["m", "s", r], ce[2] = ["m", "v", we], ce[3] = ["m", "e", ye], ce[4] = ["m", "k", [fe.meta, fe.events]], ce[5] = le, q("Z", (new Date).getTime()), V("input"), V("textarea")
        }

        function g(n) {
            if (!f()) {
                n && a(n), d();
                var r = L(Ee.container);
                v(), t.addEventListener ? (r.addEventListener("keydown", S, !0), r.addEventListener("keyup", S, !0), r.addEventListener("input", U, !0), be.isAndroid && !be.isFirefox && j()) : t.attachEvent && (r.attachEvent("onkeydown", S), r.attachEvent("onkeyup", S)), Ee.collectMouse && (t.addEventListener ? (e.PointerEvent ? (t.addEventListener("pointerdown", k, !1), t.addEventListener("pointerup", E, !1), Ee.collectMouseMovement && t.addEventListener("pointermove", C, !1)) : (ye.ptype = "mm", t.addEventListener("mousedown", x, !1), t.addEventListener("mouseup", A, !1), Ee.collectMouseMovement && t.addEventListener("mousemove", _, !1)), "onwheel" in t ? e.addEventListener("wheel", T, !1) : void 0 !== t.onmousewheel ? e.addEventListener("mousewheel", T, !1) : t.addEventListener && e.addEventListener("DOMMouseScroll", T), e.addEventListener("scroll", R)) : t.attachEvent && (ye.ptype = "mm", t.attachEvent("onmousedown", x), t.attachEvent("onmouseup", A), Ee.collectMouseMovement && t.attachEvent("onmousemove", _, !1), t.attachEvent("onmousewheel", T), t.attachEvent("onscroll", R))), m()
            }
        }

        function m() {
            J(), Z(), Q(), X(), ee(), te(), ne(), "string" == typeof Ee.stateChangeEventListener && e.addEventListener(Ee.stateChangeEventListener, ie)
        }

        function $() {
            h(), t.removeEventListener ? (t.removeEventListener("keydown", S, !1), t.removeEventListener("keyup", S, !1), t.removeEventListener("input", U, !1), t.removeEventListener("textInput", M, !1), t.removeEventListener("compositionupdate", I, !1)) : t.detachEvent && (t.detachEvent("onkeydown", S), t.detachEvent("onkeyup", S)), t.addEventListener ? e.PointerEvent ? (t.removeEventListener("pointerdown", k, !1), t.removeEventListener("pointerup", E, !1), Ee.collectMouseMovement && t.removeEventListener("pointermove", C, !1)) : (t.removeEventListener("mousedown", x, !1), t.removeEventListener("mouseup", A, !1), Ee.collectMouseMovement && t.removeEventListener("mousemove", _, !1)) : t.attachEvent && (ye.ptype = "mm", t.detachEvent("onmousedown", x), t.detachEvent("onmouseup", A), Ee.collectMouseMovement && t.detachEvent("onmousemove", _, !1))
        }

        function y() {
            return le[1] = B(), le[2] = F(), ce
        }

        function b(e, t) {
            p() && (a(), v());
            var n = Ae.stringify(y());
            return e && v(), t && $(), n
        }

        function w(e, t, n) {
            var r, i;
            for (r = ce.length - 1; r >= -1; r--) {
                if (-1 === r) {
                    null == ce[0] ? (ce[0] = [], "a" === t ? ce[0][0] = "fa" : "n" === t && (ce[0][0] = "f"), ce[0][1] = e, ce[0][2] = [], ce[0][2][0] = n) : (i = ce.length, ce[i] = [], "a" === t ? ce[i][0] = "fa" : "n" === t && (ce[i][0] = "f"), ce[i][1] = e, ce[i][2] = [], ce[i][2][0] = n);
                    break
                }
                if ("a" === t) {
                    if ("fa" !== ce[r][0]) continue
                } else if ("n" === t && "f" !== ce[r][0]) continue;
                if (ce[r][1] === e) {
                    ce[r][2][ce[r][2].length] = n;
                    break
                }
            }
        }

        function S(e) {
            var n = [],
                r = 0 === e.keyCode ? 229 : e.keyCode,
                i = r,
                o = null,
                a = e.target || e.srcElement,
                s = "n",
                c = 0;
            if (!("text" !== a.type && "password" !== a.type && "date" !== a.type && "datetime-local" !== a.type && "email" !== a.type && "month" !== a.type && "number" !== a.type && "search" !== a.type && "tel" !== a.type && "time" !== a.type && "url" !== a.type && "week" !== a.type && "textarea" !== a.type || _e.names[a.name] || _e.ids[a.id]) && a.name) {
                if (229 !== r || "keydown" !== e.type || be.isFirefox || $e || (j(), $e = !0), o = a.type + "#" + (a.name || a.id), null == r && (r = -500, i = -500), "a" !== s && (xe.types[a.type] || xe.names[a.name] || xe.ids[a.id]) && (s = "a"), "a" === s) {
                    if (9 === r || 13 === r) return;
                    if (t.selection) {
                        a.focus();
                        var u = t.selection.createRange(),
                            f = t.selection.createRange().text.length;
                        u.moveStart("character", -a.value.length), c = u.text.length - f
                    } else(a.selectionStart || "0" === a.selectionStart) && (c = a.selectionStart);
                    8 === r ? "keydown" === e.type ? (null == pe[r] && (pe[r] = c), n[0] = -1, n[1] = c) : "keyup" === e.type && (n[0] = -2, n[1] = pe[r], pe[r] = null) : 46 === r ? "keydown" === e.type ? (null == pe[r] && (pe[r] = c), n[0] = -3, n[1] = c) : "keyup" === e.type && (n[0] = -4, n[1] = pe[r], pe[r] = null) : "keydown" === e.type ? (null == pe[r] && (pe[r] = c), n[0] = 0, n[1] = c) : "keyup" === e.type && (n[0] = 1, n[1] = pe[r], pe[r] = null)
                } else {
                    if (229 === r && "keydown" === e.type) P(o, a.value.length);
                    else if (229 === r && "keyup" === e.type) {
                        var p = me[o] || [],
                            d = a.value.length,
                            h = p.pop() || 0;
                        if (-1 !== ge || d < h) {
                            d - h <= 1 && (i = d < h ? 8 : ge);
                            var v = O(o),
                                g = v[v.length - 1];
                            229 === g[1] && (g[1] = i), ge = -1
                        }
                    }
                    "keyup" === e.type ? (ge = -1, n[0] = 1, n[1] = i) : "keydown" === e.type && (n[0] = 0, n[1] = i)
                }
                n[2] = l(), 229 === r ? ye.k229++ : ye.kn++, null != n[1] && (w(o, s, n), ue[o] = a.value.length)
            }
        }

        function C(e) {
            if (e.getCoalescedEvents) {
                var t = e.getCoalescedEvents() || [];
                0 === t.length && t.push(e);
                for (var n = l(), r = e.timeStamp, i = 0; i < t.length; i++) {
                    var o = t[i],
                        a = n - Math.round(r - (o.timeStamp || r)),
                        f = [];
                    f[0] = "mm", f[1] = o.clientX, f[2] = o.clientY, f[3] = a, c(e, a), u(a), s(f);
                    var p = o.pointerType || "unknown";
                    ye.ptypes[p] = (ye.ptypes[p] || 0) + 1
                }
                ye.ptype = "pc"
            } else {
                var a = l(),
                    f = [];
                f[0] = "mm", f[1] = e.clientX, f[2] = e.clientY, f[3] = a, c(e, a), u(a), s(f);
                var p = e.pointerType || "unknown";
                ye.ptypes[p] = (ye.ptypes[p] || 0) + 1, ye.ptype = "pm"
            }
        }

        function k(e) {
            var t = l(),
                n = [];
            n[0] = "md", n[1] = e.clientX, n[2] = e.clientY, n[3] = t, n[4] = e.button, c(e, t), u(t), s(n);
            var r = e.pointerType || "unknown";
            ye.ptypes[r] = (ye.ptypes[r] || 0) + 1
        }

        function E(e) {
            var t = l(),
                n = [];
            n[0] = "mu", n[1] = e.clientX, n[2] = e.clientY, n[3] = t, n[4] = e.button, c(e, t), u(t), s(n);
            var r = e.pointerType || "unknown";
            ye.ptypes[r] = (ye.ptypes[r] || 0) + 1
        }

        function _(e) {
            var t = [];
            t[0] = "mm", t[1] = e.clientX, t[2] = e.clientY, t[3] = l(), c(e), u(), s(t)
        }

        function x(e) {
            var t = [];
            t[0] = "md", t[1] = e.clientX, t[2] = e.clientY, t[3] = l(), t[4] = e.button, c(e), u(), s(t)
        }

        function A(e) {
            var t = [];
            t[0] = "mu", t[1] = e.clientX, t[2] = e.clientY, t[3] = l(), t[4] = e.button, c(e), u(), s(t)
        }

        function T(e) {
            G("M")
        }

        function R(e) {
            G("k")
        }

        function O(e) {
            for (var t = ce.length - 1; t >= 0; t--)
                if (ce[t][1] === e) return ce[t][2]
        }

        function D(e) {
            ge = e
        }

        function P(e, t) {
            (me[e] = me[e] || []).push(t)
        }

        function M(e) {
            e.data && 1 === e.data.length && D(e.data.toUpperCase().charCodeAt(0))
        }

        function I(e) {
            e.data && D(e.data.toUpperCase().charCodeAt(e.data.length - 1))
        }

        function j(e) {
            e && e.addEventListener ? (e.addEventListener("textInput", M, !1), e.addEventListener("compositionupdate", I, !1)) : t.addEventListener && (t.addEventListener("textInput", M, !1), t.addEventListener("compositionupdate", I, !1))
        }

        function V(e) {
            for (var t = L(Ee.container), n = t.getElementsByTagName(e), r = 0; r < n.length; r++) {
                var i = n[r];
                i.type;
                if (!("text" !== i.type && "password" !== i.type && "date" !== i.type && "datetime-local" !== i.type && "email" !== i.type && "month" !== i.type && "number" !== i.type && "search" !== i.type && "tel" !== i.type && "time" !== i.type && "url" !== i.type && "week" !== i.type && "textarea" !== i.type || _e.names[i.name] || _e.ids[i.id]) && i.name) {
                    var o = i.type + "#" + (i.name || i.id);
                    ue[o] = i.value.length
                }
            }
        }

        function U(e) {
            var t = e.target || e.srcElement;
            if (!("text" !== t.type && "password" !== t.type && "date" !== t.type && "datetime-local" !== t.type && "email" !== t.type && "month" !== t.type && "number" !== t.type && "search" !== t.type && "tel" !== t.type && "time" !== t.type && "url" !== t.type && "week" !== t.type && "textarea" !== t.type || _e.names[t.name] || _e.ids[t.id]) && t.name) {
                var n = t.type + "#" + (t.name || t.id);
                ue[n] = t.value.length
            }
        }

        function L(e) {
            if ("string" == typeof e) {
                var n = t.querySelector(e);
                if (n) return n
            } else if (e && (e.addEventListener || e.attachEvent)) return e;
            return t
        }

        function N(e) {
            var n, r, i = "";
            for (r = t.getElementsByTagName("meta"), n = 0; n < r.length; n++) e !== r[n].name && e !== r[n].getAttribute("property") || (i = r[n].content);
            return i
        }

        function F() {
            if (Ee.pageIdCallback) return Ee.pageIdCallback();
            var t = N(Ee.metaPageId);
            return t || (e.location.pathname.split("?")[0] || "/")
        }

        function B() {
            var e = [];
            for (var t in ue) {
                var n = {};
                n[t] = ue[t], e.push(n)
            }
            for (var r = 0; r < ce.length; ++r)
                if ("c" === ce[r][0]) {
                    e.push({
                        movement: 0
                    });
                    break
                } return e
        }

        function H(e) {
            var t = e.target || e.srcElement || {};
            return t.type && (t.id || t.name) ? t.type + "#" + (t.name || t.id) : t && t.parentNode ? t.nodeName + "#" + (t.id || t.name || "") + "#" + t.parentNode.nodeName + "#" + (t.parentNode.id || t.parentNode.name || "") : void 0
        }

        function q(e, t) {
            fe.events.push([e, l(), t])
        }

        function G(e) {
            fe.meta[e] = e in fe.meta ? ++fe.meta[e] : 1
        }

        function z(e) {
            var n = t.visibilityState;
            n ? q("o", n) : q("p", t.hidden)
        }

        function W(e) {
            q(oe(e.type), H(e))
        }

        function K(e) {
            q(ae(e.type), "")
        }

        function Y(e) {
            var t = "keydown" === e.type ? "a" : "s",
                n = e.target || e.srcElement,
                r = e.which || e.keyCode;
            9 === r || "Tab" === e.key ? q(t + "f", H(e)) : 13 === r || "Enter" === e.key ? q(t + "v", H(e)) : 16 === r || "Shift" === e.key ? q(t + "n", H(e)) : 17 === r || "Control" === e.key ? q(t + "z", H(e)) : 18 === r || "Alt" === e.key ? q(t + "a", H(e)) : 20 === r || "CapsLock" === e.key ? q(t + "w", H(e)) : 37 === r || "ArrowLeft" === e.key ? q(t + "r", H(e)) : 38 === r || "ArrowUp" === e.key ? q(t + "t", H(e)) : 39 === r || "ArrowRight" === e.key ? q(t + "d", H(e)) : 40 === r || "ArrowDown" === e.key ? q(t + "k", H(e)) : n && void 0 === n.type && G(se(e.type))
        }

        function J() {
            void 0 !== t.visibilityState ? t.addEventListener("visibilitychange", z, !1) : void 0 !== t.mozHidden ? t.addEventListener("mozvisibilitychange", z, !1) : void 0 !== t.webkitHidden ? t.addEventListener("webkitvisibilitychange", z, !1) : void 0 !== t.msHidden && t.addEventListener("msvisibilitychange", z, !1)
        }

        function Z() {
            t.addEventListener ? (t.addEventListener("copy", W, !0), t.addEventListener("paste", W, !0), t.addEventListener("cut", W, !0)) : t.attachEvent && t.body && t.body.attachEvent("onpaste", W)
        }

        function Q() {
            t.addEventListener ? t.addEventListener("contextmenu", W, !0) : t.attachEvent && t.attachEvent("oncontextmenu", W)
        }

        function X() {
            t.addEventListener ? (t.addEventListener("focus", W, !0), t.addEventListener("blur", W, !0), e.addEventListener("focus", K, !1), e.addEventListener("blur", K, !1)) : t.attachEvent && (t.attachEvent("onfocus", W), t.attachEvent("onblur", W), e.attachEvent("onfocus", K), e.attachEvent("onblur", K))
        }

        function ee() {
            t.addEventListener ? t.addEventListener("submit", W, !0) : t.attachEvent && t.attachEvent("onsubmit", W)
        }

        function te() {
            t.addEventListener ? (t.addEventListener("mouseup", W), t.addEventListener("mousedown", W)) : t.attachEvent && (t.attachEvent("onmouseup", W), t.attachEvent("onmousedown", W))
        }

        function ne() {
            t.addEventListener ? (t.addEventListener("keydown", Y), t.addEventListener("keyup", Y)) : t.attachEvent && (t.attachEvent("onkeydown", Y), t.attachEvent("onkeyup", Y))
        }

        function re(e) {
            q("d", e)
        }

        function ie(e) {
            re("function" == typeof Ee.stateChangeEventCallback ? Ee.stateChangeEventCallback(e) : "")
        }

        function oe(e) {
            switch (e) {
                case "mousedown":
                    return "D";
                case "mouseup":
                    return "E";
                case "submit":
                    return "i";
                case "focus":
                    return "n";
                case "blur":
                    return "U";
                case "paste":
                    return "z";
                case "copy":
                    return "u";
                case "cut":
                    return "c";
                case "contextmenu":
                    return "X";
                default:
                    return "T"
            }
        }

        function ae(e) {
            switch (e) {
                case "blur":
                    return "r";
                case "focus":
                    return "v";
                default:
                    return "I"
            }
        }

        function se(e) {
            switch (e) {
                case "keydown":
                    return "e";
                case "keyup":
                    return "w";
                default:
                    return "T"
            }
        }
        var ce = [],
            ue = {},
            le = [],
            fe = {
                meta: {},
                events: []
            },
            pe = [],
            de = (new Date).getTime(),
            he = [-1, -1],
            ve = null,
            ge = -1,
            me = {},
            $e = !1,
            ye = {
                ptype: null,
                ptypes: {},
                k229: 0,
                kn: 0,
                tz: (new Date).getTimezoneOffset()
            },
            be = {
                isAndroid: /android (\d+)/i.test(e.navigator.userAgent),
                isFirefox: /firefox/i.test(e.navigator.userAgent)
            },
            we = 270,
            Se = {
                STARTED: 1,
                STOPPED: 0
            },
            Ce = Se.STOPPED,
            ke = {
                autoload: !0,
                cointainer: null,
                collectMouse: !0,
                collectMouseMovement: !0,
                ignoreFields: {
                    by_id: [],
                    by_name: []
                },
                anonymous: {
                    by_name: [],
                    by_id: [],
                    by_type: ["password"]
                },
                metaPageId: "bwpageid",
                pageIdCallback: null
            },
            Ee = {},
            _e = {
                ids: {},
                names: {}
            },
            xe = {
                ids: {},
                names: {},
                types: {}
            };
        o(), "undefined" == typeof console && (this.console = {
            log: function() {},
            info: function() {},
            error: function() {},
            warn: function() {}
        }), Date.now = Date.now || function() {
            return +new Date
        };
        var Ae;
        Ae || (Ae = {}),
            function() {
                function e(e) {
                    return e < 10 ? "0" + e : e
                }

                function t(e) {
                    return s.lastIndex = 0, s.test(e) ? '"' + e.replace(s, function(e) {
                        var t = c[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function n(e, s) {
                    var c, u, l, f, p, d = i,
                        h = s[e];
                    switch (h && "object" == (void 0 === h ? "undefined" : r(h)) && "function" == typeof h.toJSON && (h = h.toJSON(e)), "function" == typeof a && (h = a.call(s, e, h)), void 0 === h ? "undefined" : r(h)) {
                        case "string":
                            return t(h);
                        case "number":
                            return isFinite(h) ? String(h) : "null";
                        case "boolean":
                        case "null":
                            return String(h);
                        case "object":
                            if (!h) return "null";
                            if (i += o, p = [], "[object Array]" == Object.prototype.toString.apply(h)) {
                                for (f = h.length, c = 0; c < f; c += 1) p[c] = n(c, h) || "null";
                                return l = 0 == p.length ? "[]" : i ? "[\n" + i + p.join(",\n" + i) + "\n" + d + "]" : "[" + p.join(",") + "]", i = d, l
                            }
                            if (a && "object" == (void 0 === a ? "undefined" : r(a)))
                                for (f = a.length, c = 0; c < f; c += 1) "string" == typeof a[c] && (u = a[c], (l = n(u, h)) && p.push(t(u) + (i ? ": " : ":") + l));
                            else
                                for (u in h) Object.prototype.hasOwnProperty.call(h, u) && (l = n(u, h)) && p.push(t(u) + (i ? ": " : ":") + l);
                            return l = 0 == p.length ? "{}" : i ? "{\n" + i + p.join(",\n" + i) + "\n" + d + "}" : "{" + p.join(",") + "}", i = d, l
                    }
                }
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(t) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
                    return this.valueOf()
                });
                var i, o, a, s = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    c = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };
                "function" != typeof Ae.stringify && (Ae.stringify = function(e, t, s) {
                    var c;
                    if (i = "", o = "", "number" == typeof s)
                        for (c = 0; c < s; c += 1) o += " ";
                    else "string" == typeof s && (o = s);
                    if (a = t, t && "function" != typeof t && ("object" !== (void 0 === t ? "undefined" : r(t)) || "number" != typeof t.length)) throw new Error("JSON.stringify");
                    return n("", {
                        "": e
                    })
                })
            }(), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                var n, r;
                for (n = t || 0, r = this.length; n < r; n++)
                    if (this[n] === e) return n;
                return -1
            })
    }(window, document, "bw", {
        autoload: !0,
        pageIdCallback: function() {
            return "bankapp." + window._pageId || document.location.hash
        }
    })
}, function(e, t) {}, function(e, t) {}, function(e, t) {}, function(e, t) {
    e.exports = '<div class="page accounts-page" id="accounts-details">\r\n    <section class="basicWidth" ng-if="!accountLoaded">\r\n        <div>\r\n            <a ui-sref="accounts">Back to all accounts</a>\r\n        </div>\r\n        <div>\r\n            <div id="activitySpinner"><div></div><div></div><div></div></div>\r\n        </div>\r\n    </section>\r\n    <section class="basicWidth" ng-if="account && accountLoaded">\r\n        <div>\r\n            <a ui-sref="accounts">Back to all accounts</a>\r\n        </div>\r\n        <h1>\r\n            {{ account.name }}\r\n        </h1>\r\n        <p>\r\n            Account number: {{ account.id }}\r\n        </p>\r\n        <p>\r\n            Balance: <span class="account-balance">{{ account.balance | currency }}</span>\r\n        </p>\r\n        <h2>Transactions</h2>\r\n        <ul id="account-transactions">\r\n            <li class="table-head">\r\n                <div>\r\n                    Description\r\n                </div>\r\n                \x3c!-- <div style="display: table-cell; text-align: right; padding: 10px; border-bottom: 1px solid #f2f2f2; width: 150px;">\r\n                    Deposit\r\n                </div>\r\n                <div style="display: table-cell; text-align: right; padding: 10px; border-bottom: 1px solid #f2f2f2; width: 150px;">\r\n                    Withdrawal\r\n                </div> --\x3e\r\n                <div style="text-align: right; width: 15%;">\r\n                    Amount\r\n                </div>\r\n                \x3c!--<div style="display: table-cell; text-align: right; padding: 10px; width: 15%;">\r\n                    Balance\r\n                </div>--\x3e\r\n            </li>\r\n            <li ng-repeat="trans in transactions" class="table-row">\r\n                <div class="table-cell">\r\n                    <div>{{ trans.description | limitTo : 128 }}</div>\r\n                    <div style="color: #ccc; font-size: 13px; padding: 4px 0 0;">{{ trans.date() }}</div>\r\n                </div>\r\n                <div class="table-cell" style="text-align: right; vertical-align: middle;">\r\n                    <span class="amount">{{ trans.amount | currency }}</span>\r\n                </div>\r\n                \x3c!--<div style="display: table-cell;  padding: 10px; text-align: right;">\r\n                    {{ trans.amount }}\r\n                </div>--\x3e\r\n                \x3c!--<div style="display: table-cell;  padding: 10px; text-align: right; border-bottom: 1px solid #f2f2f2; vertical-align: middle;">\r\n                    {{ trans.balance | currency }}\r\n                </div>--\x3e\r\n            </li>\r\n        </ul>\r\n        <div class="no-transactions" ng-if="transactions.length == 0 && !transactionsLoading">\r\n            No transactions\r\n        </div>\r\n    </section>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="page accounts-page">\r\n    <section class="basicWidth">\r\n        <h1>\r\n            My Accounts\r\n            \x3c!-- <button class="account-open">Open new account</button> --\x3e\r\n        </h1>\r\n        \r\n        <ul id="accounts-list" ng-if="accountsLoaded">\r\n            <li ng-repeat="account in accounts" ng-class="{\'tutorial-box\': (tutorialStep(\'onboarding.transfer_from_checking_account\') && account.name == \'Checking account\')}">\r\n                <a ui-sref="accounts.details({id: account.id})">\r\n                    <div class="account-name">\r\n                        {{ account.name }}\r\n                        <span class="account-id" ng-bind="account.id"></span>\r\n                    </div>\r\n                    <div class="account-balance" ng-bind="account.balance | currency">\r\n                    </div>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n        <div ng-if="!accountsLoaded">\r\n            <div id="activitySpinner"><div></div><div></div><div></div></div>\r\n        </div>\r\n        <div ng-if="accountsLoaded && accounts.length === 0">\r\n            <p>You don\'t have any accounts at the moment.</p>\r\n        </div>\r\n    </section>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="page creditcards-page">\r\n    <section>\r\n        <div>\r\n            <a ui-sref="creditcards">Back to all credit cards</a>\r\n        </div>\r\n    </section>\r\n    <section style="width:700px">\r\n        <h1 ng-bind="card.type.name"></h1>\r\n\r\n        <div style="overflow: auto; padding:10px 10px 10px 0">\r\n            <div>\r\n                Current balance:\r\n                <span ng-bind="card.balance | currency"></span>\r\n            </div>\r\n        </div>\r\n        <div ng-if="card.balance == 0">\r\n            <p>\r\n                Enter your username and password to confirm\r\n            </p>\r\n\r\n            <form class="validate-form" >\r\n                <p>\r\n                    <label for="username">Username</label>\r\n                    <input name="username" id="username" ng-model="cancelCreditCardCredentials.username" type="text">\r\n                </p>\r\n                <p>\r\n                    <label for="password">Password</label>\r\n                    <input name="password" id="password" ng-model="cancelCreditCardCredentials.password" type="password">\r\n                </p>\r\n                <div ng-if="cancelCreditCardErrors" class="form-alert">\r\n                    <div class="message">\r\n                        Couldn\'t cancel the credit card. Please correct the errors.\r\n                    </div>\r\n                    <ul>\r\n                        <li ng-repeat="error in cancelCreditCardErrors">\r\n                            <span ng-repeat="(err, val) in error" ng-bind="val"></span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <p>\r\n                    <button ng-click="creditCardCtrl.cancelCreditCard()" ng-disabled="!(cancelCreditCardCredentials.username && cancelCreditCardCredentials.password)" ng-class="{\'disabled\': !(cancelCreditCardCredentials.username && cancelCreditCardCredentials.password)}" class="form-submit">Cancel Card</button>\r\n                </p>\r\n            </form>\r\n        </div>\r\n        <div class="form-alert" ng-if="card.balance > 0">\r\n            <div class="message">You can only cancel a card with no outstanding balance</div>\r\n        </div>\r\n    </section>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="page creditcards-page">\r\n    <section>\r\n        <div>\r\n            <a ui-sref="creditcards">Back to all credit cards</a>\r\n        </div>\r\n    </section>\r\n    <section class="basicWidth">\r\n        <h1>{{ card.type.name }}</h1>\r\n\r\n        <div style="overflow: auto; padding:10px 10px 10px 0"> \x3c!-- clearfix + space for pulse animation --\x3e\r\n            <div style="float: left; clear: right;">\r\n                Current balance: {{ card.balance | currency }}\r\n            </div>\r\n            <div style="float: right;" ng-if="creditCardView != \'pay\'">\r\n                <button ng-click="makePayment()" ng-disabled="card.balance <= 0" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.credit_card.confirm\'), \'disabled\': card.balance <= 0}">Make payment</button>\r\n            </div>\r\n        </div>\r\n        <div ng-if="creditCardView==\'pay\'">\r\n            <form class="cc-payment-form">\r\n                <p>\r\n                    <label for="from_account">From Account</label>\r\n                    <ui-select ng-model="payment.account" theme="selectize">\r\n                        <ui-select-match placeholder="Select Account">\r\n                            <span style="overflow: hidden; width: 90%;">\r\n                                <span ng-bind="$select.selected.name"></span>\r\n                                <span style="float: right; margin-left: 10px;" ng-bind="$select.selected.balance | currency"></span>\r\n                            </span>\r\n                        </ui-select-match>\r\n                        <ui-select-choices repeat="account.id as account in fromAccounts | filter: $select.search">\r\n                            <span style="overflow: hidden">\r\n                                <span ng-bind="account.name"></span>\r\n                                <span style="float: right;" ng-bind="account.balance | currency"></span>\r\n                            </span>\r\n                        </ui-select-choices>\r\n                    </ui-select>\r\n                </p>\r\n                <p>\r\n                    <label for="amount">Amount (USD)</label>\r\n                    \x3c!-- TODO: js dropdown --\x3e\r\n                    <input type="text" name="amount" id="amount" ng-model="payment.amount" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.credit_card.payment.amount\')}" />\r\n                </p>\r\n                <p>\r\n                    <label for="transfer_date">Date</label>\r\n                    \x3c!-- TODO: datepicker --\x3e\r\n                    <input type="text" name="transfer_date" id="transfer_date" ng-model="payment.date" model-view-value="true" ui-mask="99/99/9999" ui-mask-placeholder="MM/DD/YYYY"  ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.credit_card.payment.date\')}" min="2000-01-01">\r\n                </p>\r\n                <p>\r\n                    <label for="notes">Notes</label>\r\n                    <textarea rows="5" name="notes" id="notes" ng-model="payment.notes" ng-class="{\'tutorial-cue\': tutorialStep(\'transfer_from_checking_account.notes\')}"></textarea>\r\n                </p>\r\n                <div ng-if="errors" class="form-alert">\r\n                    <div class="message">\r\n                        Couldn\'t make the payment. Please correct the errors.\r\n                    </div>\r\n                    <ul ng-show="errors">\r\n                        <li ng-repeat="error in errors">\r\n                            <span ng-repeat="(err, val) in error" ng-bind="val"></span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <p>\r\n                    \x3c!-- TODO: swipe to confirm? --\x3e\r\n                    <button ng-click="submitForm()" ng-disabled="!(payment.account && payment.amount && payment.date)" ng-class="{\'tutorial-box\': tutorialStep(\'TODO\'), \'disabled\': !(payment.account && payment.amount && payment.date)}">Confirm Payment</button>\r\n                </p>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="page creditcards-page">\r\n    <section ng-if="creditCardView==\'overview\'">\r\n        <h1>Credit cards</h1>\r\n\r\n        <div ng-if="creditCardsLoading">\r\n            <div id="activitySpinner"><div></div><div></div><div></div></div>\r\n        </div>\r\n\r\n        <div ng-if="hasCreditCards && !creditCardsLoading">\r\n            <ul class="cc-list">\r\n                <li ng-repeat="card in cards" class="cc-list-item" ng-class="{\'removed\': card.removed}">\r\n                    <a ng-bind="card.type.name" ui-sref="creditcards.details({id: card.id})"></a><button class="cc-cancel-card" ng-class="{\'disabled\': (card.balance > 0)}" ng-disabled="card.balance > 0" ng-click="cancelCard($event, card)">Cancel Card</button>\r\n                    <div class="cc-balance">Balance: <span ng-bind="card.balance | currency"></span></div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <div ng-if="!hasCreditCards && !creditCardsLoading">\r\n            <h2>You do not currently have a Credit Card with us</h2>\r\n            <p>Would you like to apply for one?</p>\r\n        </div>\r\n\r\n        <div>\r\n            <button ng-repeat="card in cardTypes" ng-click="applyCreditCard(card)" class="cc-xl-button {{ card.id }}">\r\n                {{ card.name }}\r\n                <span class="fee">({{card.fee | currency }} annual fee)</span>\r\n            </button>\r\n        </div>\r\n    </section>\r\n    <section ng-if="creditCardView==\'apply\'">\r\n        <h1>Are you sure you would like to apply for a {{ creditCardType.name }}?</h1>\r\n\r\n        <p>\r\n            Enter your username and password to confirm\r\n        </p>\r\n\r\n        <div>\r\n            <form class="validate-form">\r\n                <p>\r\n                    <label for="username">Username</label>\r\n                    <input name="username" id="username" ng-model="applyCreditCardCredentials.username" type="text" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.credit_card.select_card\') && !applyCreditCardCredentials.username}">\r\n                </p>\r\n                <p>\r\n                    <label for="password">Password</label>\r\n                    <input name="password" id="password" ng-model="applyCreditCardCredentials.password" type="password" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.credit_card.select_card\') && !applyCreditCardCredentials.password}">\r\n                </p>\r\n                <div ng-if="applyCreditCardErrors.length > 0" class="form-alert">\r\n                    <div class="message">\r\n                        Couldn\'t apply the credit card. Please correct the errors.\r\n                    </div>\r\n                    <ul>\r\n                        <li ng-repeat="error in applyCreditCardErrors">\r\n                            <span ng-repeat="(err, val) in error" ng-bind="val"></span>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <p>\r\n                    <button ng-click="applyForCreditCard(creditCardType)" ng-disabled="!(applyCreditCardCredentials.username && applyCreditCardCredentials.password)" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.credit_card.select_card\') && applyCreditCardCredentials.username && applyCreditCardCredentials.password}" class="form-submit">Submit Application</button>\r\n                </p>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</div>\r\n'
}, function(e, t) {
    e.exports = '<div class="page start-page">\r\n    <h1>Welcome to the BehavioSec Banking Demo</h1>\r\n    <p class="lead">This website is for demonstration purposes only and is not a real bank.</p>\r\n    <button ng-click="loginCtrl.showLoginForm()" class="btn start-demo">Start Demo</button>\r\n    <div ng-if="loginFormVisible" id="login-form">\r\n        <div class="icon-close" ng-click="loginCtrl.hideLoginForm()"></div>\r\n        <form ng-if="!loginFormSubmitted">\r\n            <h1>Enter credentials to Login</h1>\r\n            <p>\r\n                <label for="username">Username</label>\r\n                <input type="text" name="username" id="username" ng-model="login.username" autocomplete="off" />\r\n            </p>\r\n            <p>\r\n                <label for="password">Password</label>\r\n                <input type="password" name="password" id="password" ng-model="login.password" autocomplete="off" />\r\n            </p>\r\n            <div ng-if="errors" class="form-alert">\r\n                <div>\r\n                    Couldn\'t login. Please correct the errors.\r\n                </div>\r\n                <ul ng-show="errors">\r\n                    <li ng-repeat="error in errors">\r\n                        <span ng-repeat="(err, val) in error" ng-bind="val"></span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <div class="form-success" ng-show="registrationCompleted && !errors">\r\n                <div class="message">\r\n                    Registration successful, login with <span ng-bind="registrationCompleted.username"></span>\r\n                </div>\r\n            </div>\r\n            <p>\r\n                <button ng-click="loginCtrl.login()" class="btn sign-in">Sign In</button>\r\n            </p>\r\n            <p style="position: absolute;bottom: 40px;">Is this your first visit? <a href="" ng-click="loginCtrl.showRegisterForm()">Register here</a></p>\r\n        </form>\r\n        <div ng-show="loginFormSubmitted">\r\n            <div id="activitySpinner" class="inline"><div></div><div></div><div></div></div>\r\n        </div>\r\n    </div>\r\n    <div ng-if="registerFormVisible" id="register-form">\r\n        <div class="icon-close" ng-click="loginCtrl.hideRegisterForm()"></div>\r\n        <form ng-if="!registerFormSubmitted">\r\n            <h1>Enter credentials to Register</h1>\r\n            <p>\r\n                Enter the credentials you want to use. The username and password must be at least 6 characters to continue.\r\n            </p>\r\n            <p>\r\n                <label for="username">Username</label>\r\n                <input type="text" name="username" id="username" ng-model="register.username" autocomplete="off"  />\r\n            </p>\r\n            <p>\r\n                <label for="password">Password</label>\r\n                <input type="password" name="password" id="password" ng-model="register.password" autocomplete="off"  />\r\n            </p>\r\n            <p>\r\n                <label for="rpasswordc">Password confirm</label>\r\n                <input type="password" name="rpasswordc" id="rpasswordc" ng-model="register.confirm_password" autocomplete="off"  />\r\n            </p>\r\n            <div ng-if="errors" class="form-alert">\r\n                <div>\r\n                    Couldn\'t register. Please correct the errors.\r\n                </div>\r\n                <ul ng-show="errors">\r\n                    <li ng-repeat="error in errors">\r\n                        <span ng-repeat="(err, val) in error" ng-bind="val"></span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <p>\r\n                <button ng-click="loginCtrl.register()" class="btn sign-in">Register</button>\r\n            </p>\r\n        </form>\r\n        <div ng-show="registerFormSubmitted">\r\n            <div id="activitySpinner" class="inline"><div></div><div></div><div></div></div>\r\n        </div>\r\n    </div>\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="page">\r\n    <section class="basicWidth" ng-show="authSession.user.transfers > 1">\r\n    <h1>Advanced Use Cases</h1>\r\n    <button ng-click="assistant.startAdvancedUseCases(\'remote\')"  ng-disabled="progressComplete(authSession.user.transfers,RATLimit)" class="btn use-case" ng-class="progressComplete(authSession.user.transfers,RATLimit)? \'\':\'completed\'" ng-attr-title="Unlock progress: {{authSession.user.transfers}} / {{RATLimit}}" progress-tooltip progress-unlocked="authSession.user.transfers >= RATLimit">Remote Attack\r\n        <div class="button-progress-container" ng-show="progressComplete(authSession.user.transfers,RATLimit)">\r\n            <div class="button-progress" style="width:{{progressPercentage(authSession.user.transfers,RATLimit)}}%"></div>\r\n        </div>\r\n        <div class="badge" ng-show="!progressComplete(authSession.user.transfers,RATLimit)">{{authSession.user.transfers}}</div>\r\n    </button>\r\n    <button ng-click="assistant.startAdvancedUseCases(\'bot\')" ng-disabled="progressComplete(authSession.user.transfers,BotLimit)" class="btn use-case" ng-class="progressComplete(authSession.user.transfers,BotLimit)? \'\':\'completed\'" ng-attr-title="Unlock progress: {{authSession.user.transfers}} / {{BotLimit}}" progress-tooltip progress-unlocked="authSession.user.transfers >= BotLimit">Bot Attack\x3c!-- Page Overlay Attack // --\x3e\r\n        <div class="button-progress-container" ng-show="progressComplete(authSession.user.transfers,BotLimit)">\r\n            <div class="button-progress" style="width:{{progressPercentage(authSession.user.transfers,BotLimit)}}%"></div>\r\n        </div>\r\n        <div class="badge" ng-show="!progressComplete(authSession.user.transfers,BotLimit)">{{authSession.user.transfers}}</div>\r\n    </button>\r\n    <button ng-click="assistant.startAdvancedUseCases(\'ato\')" ng-disabled="progressComplete(authSession.user.credentials,ATOLimit)" class="btn use-case" ng-class="progressComplete(authSession.user.credentials,ATOLimit)? \'\':\'completed\'" ng-attr-title="Unlock progress: {{authSession.user.credentials}} / {{ATOLimit}}" progress-tooltip progress-unlocked="authSession.user.credentials >= ATOLimit">Account Takeover\x3c!--<p>Other Account</p>--\x3e\r\n        <div class="button-progress-container" ng-show="progressComplete(authSession.user.credentials,ATOLimit)">\r\n            <div class="button-progress" style="width:{{progressPercentage(authSession.user.credentials,ATOLimit)}}%"></div>\r\n        </div>\r\n        <div class="badge" ng-show="!progressComplete(authSession.user.credentials,ATOLimit)">{{authSession.user.transfers}}</div>\r\n    </button>\r\n    \x3c!--<button class="btn use-case" ng-disabled="progressComplete(authSession.user.credentials,ATOOLimit)" ng-attr-title="Unlock progress: {{authSession.user.credentials}} / {{ATOOLimit}}" progress-tooltip progress-unlocked="authSession.user.credentials >= ATOLimit">Account Takeover<p>Own Account (Requires a friend)</p>\r\n        <div class="button-progress-container" ng-show="progressComplete(authSession.user.credentials,ATOOLimit)">\r\n            <div class="button-progress" style="width:{{progressPercentage(authSession.user.credentials,ATOOLimit)}}%"></div>\r\n        </div>\r\n    </button>\r\n    <button class="btn use-case disabled" disabled title="Disabled" progress-tooltip progress-unlocked="false">Man-in-the-Browser<p>(MITB)</p>\r\n        <div class="button-progress-container" ng-show="progressComplete(authSession.user.transfers,MITBLimit)">\r\n            <div class="button-progress" style="width:{{progressPercentage(authSession.user.transfers,MITBLimit)}}%"></div>\r\n        </div>\r\n    </button>\r\n    <button class="btn use-case in-progress disabled" disabled title="Disabled" progress-tooltip progress-unlocked="false">Overlay A\r\n        <div class="button-progress-container" ng-show="progressComplete(authSession.user.transfers,OverlayALimit)">\r\n            <div class="button-progress" style="width:{{progressPercentage(authSession.user.transfers,OverlayALimit)}}%"></div>\r\n        </div>\r\n    </button>--\x3e\r\n    \r\n \x3c!--\r\n       <div class="delimit">&bullet;&bullet;&bullet;</div> --\x3e\r\n    </section>\r\n    <h1>Overview</h1>\r\n    <section class="basicWidth">\r\n        <h2>Latest Transactions</h2>\r\n        <ul id="account-transactions" ng-show="!transactionsLoading">\r\n            <li class="table-head">\r\n                <div>\r\n                    Description\r\n                </div>\r\n                <div style="text-align: right; width: 15%;">\r\n                    Amount\r\n                </div>\r\n            </li>\r\n            <li ng-repeat="trans in latestTransactions" class="table-row">\r\n                <div class="table-cell">\r\n                    <div>{{ trans.description | limitTo : 128 }}</div>\r\n                    <div style="color: #ccc; font-size: 13px; padding: 4px 0 0;">{{ trans.date() }}</div>\r\n                </div>\r\n                <div class="table-cell" style="text-align: right; vertical-align: middle;">\r\n                    <span class="amount">{{ trans.amount | currency }}</span>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <div class="no-transactions" ng-if="latestTransactions.length == 0 && !transactionsLoading">\r\n            No transactions\r\n        </div>\r\n        <div ng-show="transactionsLoading">\r\n            <div id="activitySpinner"><div></div><div></div><div></div></div>\r\n        </div>\r\n    </section>\r\n\r\n   \x3c!--\r\n    <section ng-if="displayTutorial">\r\n        <button ng-click="landing.startTutorial(); tutorialButtonState = \'disabled\'" class="tutorial-button {{tutorialButtonState}}">Start tutorial</button>\r\n    </section>\r\n\r\n    <section>\r\n        <button ng-click="enableAdvancedUseCases(); botButtonState = \'disabled\'" class="tutorial-button {{botButtonState}}" >Start bot scenario</button>\r\n    </section>\r\n\r\n    <section>\r\n        <button ng-click="landing.jumpToCreditCard(); ccButtonState = \'disabled\'" class="tutorial-button {{ccButtonState}}">Jump to credit card step in onboarding tutorial</button>\r\n    </section>\r\n--\x3e\r\n</div>'
}, function(e, t) {
    e.exports = '<div class="page payment-page">\r\n    <section ng-if="transferStatus==\'initialized\'">\r\n        <h1>Transfer</h1>\r\n\r\n        <form class="transfer-form" >\r\n            <p>\r\n                <label for="from_account">From Account</label>\r\n                \x3c!--<input type="text" name="from_account" id="from_account" ng-model="transfer.from_account" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.from_account\')}"/>--\x3e\r\n                \x3c!-- TODO: fix the input to have name or id --\x3e\r\n                <ui-select ng-model="transfer.from_account" ng-disabled="remote.isRunning || bot.isRunning" id="from_account" theme="selectize" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.from_account\')}">\r\n                    <ui-select-match placeholder="Select Account">\r\n                        \x3c!--<span ng-bind="$select.selected.name"></span>--\x3e\r\n                        <span style="overflow: hidden; width: 90%;">\r\n                            <span ng-bind="$select.selected.name"></span>\r\n                            <span style="float: right; margin-left: 10px;" ng-bind="$select.selected.balance | currency"></span>\r\n                        </span>\r\n                    </ui-select-match>\r\n                    <ui-select-choices repeat="account.id as account in accounts | filter: $select.search">\r\n                        <span style="overflow: hidden">\r\n                            <span ng-bind="account.name"></span>\r\n                            <span style="float: right;" ng-bind="account.balance | currency"></span>\r\n                        </span>\r\n                    </ui-select-choices>\r\n                </ui-select>\r\n            </p>\r\n            <p>\r\n                <label for="to_account">To Account</label>\r\n                \x3c!-- TODO: js dropdown --\x3e\r\n                \x3c!--<input type="text" name="to_account" id="to_account" ng-model="transfer.to_account" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.to_account\')}"/>--\x3e\r\n                <ui-select ng-model="transfer.to_account" ng-disabled="remote.isRunning || bot.isRunning" id="to_account" theme="selectize" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.to_account\')}">\r\n                    <ui-select-match placeholder="Select Account">\r\n                        \x3c!--<span ng-bind="$select.selected.name"></span>--\x3e\r\n                        <span style="overflow: hidden; width: 90%;">\r\n                            <span ng-bind="$select.selected.name"></span>\r\n                            <span style="float: right; margin-left: 10px;" ng-bind="$select.selected.balance | currency"></span>\r\n                        </span>\r\n                    </ui-select-match>\r\n                    <ui-select-choices repeat="account.id as account in accounts | filter: $select.search">\r\n                        <span style="overflow: hidden">\r\n                            <span ng-bind="account.name"></span>\r\n                            <span style="float: right;" ng-bind="account.balance | currency"></span>\r\n                        </span>\r\n                    </ui-select-choices>\r\n                </ui-select>\r\n            </p>\r\n            <p>\r\n                <label for="amount">Amount (USD)</label>\r\n                \x3c!-- TODO: js dropdown --\x3e\r\n                <input type="text" name="amount" id="amount" autocomplete="off" ng-model="transfer.amount" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.amount\')}" ng-disabled="(remote.isRunning || bot.isRunning) && !browsers.isFirefox"/>\r\n            </p>\r\n            <p>\r\n                <label for="transfer_date">Date</label>\r\n                \x3c!-- TODO: datepicker --\x3e\r\n                <input type="text" ng-if="!(remote.isRunning || bot.isRunning)" name="transfer_date" id="transfer_date" autocomplete="off" ng-model="transfer.transfer_date" model-view-value="true" ui-mask="99/99/9999" ui-mask-placeholder="MM/DD/YYYY" min="2000-01-01" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.date\')}">\r\n                <input type="text" ng-if="remote.isRunning || bot.isRunning" name="transfer_date" id="transfer_date" autocomplete="off" ng-model="transfer.transfer_date" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.date\')}" ng-disabled="(remote.isRunning || bot.isRunning) && !browsers.isFirefox" min="2000-01-01">\r\n            </p>\r\n            <p>\r\n                <label for="notes">Notes</label>\r\n                <textarea rows="5" name="notes" id="notes" ng-model="transfer.notes" autocomplete="off" ng-class="{\'tutorial-cue\': tutorialStep(\'onboarding.transfer_from_checking_account.notes\')}" ng-disabled="(remote.isRunning || bot.isRunning) && !browsers.isFirefox"></textarea>\r\n            </p>\r\n            <div ng-if="errors" class="form-alert">\r\n                <div class="message">\r\n                    Couldn\'t make the transfer. Please correct the errors.\r\n                </div>\r\n                <ul ng-show="errors">\r\n                    <li ng-repeat="error in errors">\r\n                        <span ng-repeat="(err, val) in error" ng-bind="val"></span>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <p>\r\n                \x3c!-- TODO: swipe to confirm? --\x3e\r\n                <button ng-click="submitForm()" ng-class="{\'tutorial-cue\': tutorialStep([\'onboarding.transfer_from_checking_account.submit\', \'usecase_remote.transfer\', \'usecase_bot.transfer\'])}" ng-disabled="remote.isRunning || isSubmitted || remoteWillAttack || bot.isRunning">Confirm Transfer</button>\r\n            </p>\r\n        </form>\r\n    </section>\r\n\r\n    <section ng-if="transferStatus==\'in_progress\'">\r\n        <div id="activitySpinner"><div></div><div></div><div></div></div>\r\n    </section>\r\n\r\n    <section ng-if="transferStatus==\'completed\'" class="response">\r\n        <h1>Transfer complete</h1>\r\n        <p>\r\n            Transferred <amount>{{ transfer.amount | currency }}</amount> from <acc-no>{{ transfer_from_account.id }}</acc-no> to <acc-no>{{ transfer.to_account }}</acc-no>\r\n        </p>\r\n        <h4 style="line-height: 1em;padding: 0;margin: 0;">New balance</h4>\r\n        <p>\r\n            <balance>{{ transfer_from_account.balance | currency }}</balance>\r\n        </p>\r\n    </section>\r\n</div>\r\n'
}, function(e, t, n) {
    n(114), e.exports = "ui.select"
}, function(e, t, n) {
    "use strict";

    function r(e) {
        e.addResolvable(a.Resolvable.fromData(o.UIRouter, e.router), ""), e.addResolvable(a.Resolvable.fromData(i.Transition, e), ""), e.addResolvable(a.Resolvable.fromData("$transition$", e), ""), e.addResolvable(a.Resolvable.fromData("$stateParams", e.params()), ""), e.entering().forEach(function(t) {
            e.addResolvable(a.Resolvable.fromData("$state$", t), t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(17),
        o = n(35),
        a = n(33),
        s = n(5);
    t.registerAddCoreResolvables = function(e) {
        return e.onCreate({}, r)
    };
    var c = ["$transition$", i.Transition],
        u = s.inArray(c);
    t.treeChangesCleanup = function(e) {
        var t = function(e) {
            return u(e.token) ? a.Resolvable.fromData(e.token, null) : e
        };
        s.values(e.treeChanges()).reduce(s.unnestR, []).reduce(s.uniqR, []).forEach(function(e) {
            e.resolvables = e.resolvables.map(t)
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e._ignoredReason();
        if (t) {
            i.trace.traceTransitionIgnored(e);
            var n = e.router.globals.transition;
            return "SameAsCurrent" === t && n && n.abort(), o.Rejection.ignored().toPromise()
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(7),
        o = n(12);
    t.registerIgnoredTransitionHook = function(e) {
        return e.onBefore({}, r, {
            priority: -9999
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (!e.valid()) throw new Error(e.error().toString())
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.registerInvalidTransitionHook = function(e) {
        return e.onBefore({}, r, {
            priority: -1e4
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return function(t, n) {
            return (0, n.$$state()[e])(t, n)
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = r("onExit");
    t.registerOnExitHook = function(e) {
        return e.onExit({
            exiting: function(e) {
                return !!e.onExit
            }
        }, i)
    };
    var o = r("onRetain");
    t.registerOnRetainHook = function(e) {
        return e.onRetain({
            retained: function(e) {
                return !!e.onRetain
            }
        }, o)
    };
    var a = r("onEnter");
    t.registerOnEnterHook = function(e) {
        return e.onEnter({
            entering: function(e) {
                return !!e.onEnter
            }
        }, a)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(1),
        i = n(4),
        o = n(10),
        a = function(e) {
            function t(t) {
                if (t) return t instanceof o.TargetState ? t : r.isString(t) ? a.target(t, e.params(), e.options()) : t.state || t.params ? a.target(t.state || e.to(), t.params || e.params(), e.options()) : void 0
            }
            var n = e.to().redirectTo;
            if (n) {
                var a = e.router.stateService;
                return r.isFunction(n) ? i.services.$q.when(n(e)).then(t) : t(n)
            }
        };
    t.registerRedirectToHook = function(e) {
        return e.onStart({
            to: function(e) {
                return !!e.redirectTo
            }
        }, a)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(16),
        o = n(2);
    t.RESOLVE_HOOK_PRIORITY = 1e3;
    var a = function(e) {
        return new i.ResolveContext(e.treeChanges().to).resolvePath("EAGER", e).then(r.noop)
    };
    t.registerEagerResolvePath = function(e) {
        return e.onStart({}, a, {
            priority: t.RESOLVE_HOOK_PRIORITY
        })
    };
    var s = function(e, t) {
        return new i.ResolveContext(e.treeChanges().to).subContext(t.$$state()).resolvePath("LAZY", e).then(r.noop)
    };
    t.registerLazyResolveState = function(e) {
        return e.onEnter({
            entering: o.val(!0)
        }, s, {
            priority: t.RESOLVE_HOOK_PRIORITY
        })
    };
    var c = function(e) {
        return new i.ResolveContext(e.treeChanges().to).resolvePath("LAZY", e).then(r.noop)
    };
    t.registerResolveRemaining = function(e) {
        return e.onFinish({}, c, {
            priority: t.RESOLVE_HOOK_PRIORITY
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = function(e) {
            var t = e.router.globals,
                n = function() {
                    t.successfulTransitions.enqueue(e), t.$current = e.$to(), t.current = t.$current.self, r.copy(e.params(), t.params)
                },
                i = function() {
                    t.transition === e && (t.transition = null)
                };
            e.onSuccess({}, n, {
                priority: 1e4
            }), e.promise.then(i, i)
        };
    t.registerUpdateGlobalState = function(e) {
        return e.onCreate({}, i)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        var t = e.options(),
            n = e.router.stateService,
            r = e.router.urlRouter;
        if ("url" !== t.source && t.location && n.$current.navigable) {
            var i = {
                replace: "replace" === t.location
            };
            r.push(n.$current.navigable.url, n.params, i)
        }
        r.update(!0)
    };
    t.registerUpdateUrl = function(e) {
        return e.onSuccess({}, r, {
            priority: 9999
        })
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(0),
        i = n(4),
        o = function(e) {
            var t = i.services.$q,
                n = e.views("entering");
            if (n.length) return t.all(n.map(function(e) {
                return t.when(e.load())
            })).then(r.noop)
        };
    t.registerLoadEnteringViews = function(e) {
        return e.onFinish({}, o)
    };
    var a = function(e) {
        var t = e.views("entering"),
            n = e.views("exiting");
        if (t.length || n.length) {
            var r = e.router.viewService;
            n.forEach(function(e) {
                return r.deactivateViewConfig(e)
            }), t.forEach(function(e) {
                return r.activateViewConfig(e)
            }), r.sync()
        }
    };
    t.registerActivateViews = function(e) {
        return e.onSuccess({}, a)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(5)), r(n(99)), r(n(100)), r(n(33)), r(n(101)), r(n(102)), r(n(103)), r(n(107)), r(n(29)), r(n(35)), r(n(104)), r(n(98))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {}
        return e.prototype.dispose = function(e) {}, e
    }();
    t.UIRouterPluginBase = r
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(9)), r(n(31)), r(n(32)), r(n(23))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(24)), r(n(15))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(36)), r(n(25)), r(n(37)), r(n(38)), r(n(39)), r(n(40)), r(n(10))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(11)), r(n(41)), r(n(26)), r(n(12)), r(n(17)), r(n(14)), r(n(42)), r(n(27))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(18)), r(n(43)), r(n(44)), r(n(45)), r(n(46))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(105))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(53)), r(n(49)), r(n(19)), r(n(48)), r(n(51)), r(n(52)), r(n(50)), r(n(47)), r(n(28)), r(n(106))
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return p.services.$injector = l.$injector, p.services.$q = f.$q, {
            name: "vanilla.services",
            $q: f.$q,
            $injector: l.$injector,
            dispose: function() {
                return null
            }
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(47),
        o = n(48),
        a = n(28),
        s = n(52),
        c = n(51),
        u = n(50),
        l = n(49),
        f = n(53),
        p = n(4);
    t.servicesPlugin = r, t.hashLocationPlugin = a.locationPluginFactory("vanilla.hashBangLocation", !1, o.HashLocationService, i.BrowserLocationConfig), t.pushStateLocationPlugin = a.locationPluginFactory("vanilla.pushStateLocation", !0, s.PushStateLocationService, i.BrowserLocationConfig), t.memoryLocationPlugin = a.locationPluginFactory("vanilla.memoryLocation", !1, c.MemoryLocationService, u.MemoryLocationConfig)
}, function(e, t, n) {
    "use strict";

    function r(e) {
        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r(n(54))
}, function(e, t) {
    /**
     * @license AngularJS v1.7.2
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    ! function(e, t) {
        "use strict";

        function n(e, t, n) {
            if (!e) throw he("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function r(e, t) {
            return e || t ? e ? t ? (K(e) && (e = e.join(" ")), K(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function i(e) {
            var t = {};
            return e && (e.to || e.from) && (t.to = e.to, t.from = e.from), t
        }

        function o(e, t, n) {
            var r = "";
            return e = K(e) ? e : e && X(e) && e.length ? e.split(/\s+/) : [], W(e, function(e, i) {
                e && e.length > 0 && (r += i > 0 ? " " : "", r += n ? t + e : e + t)
            }), r
        }

        function a(e, t) {
            var n = e.indexOf(t);
            t >= 0 && e.splice(n, 1)
        }

        function s(e) {
            if (e instanceof te) switch (e.length) {
                case 0:
                    return e;
                case 1:
                    if (e[0].nodeType === V) return e;
                    break;
                default:
                    return te(c(e))
            }
            if (e.nodeType === V) return te(e)
        }

        function c(e) {
            if (!e[0]) return e;
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType === V) return n
            }
        }

        function u(e, t, n) {
            W(t, function(t) {
                e.addClass(t, n)
            })
        }

        function l(e, t, n) {
            W(t, function(t) {
                e.removeClass(t, n)
            })
        }

        function f(e) {
            return function(t, n) {
                n.addClass && (u(e, t, n.addClass), n.addClass = null), n.removeClass && (l(e, t, n.removeClass), n.removeClass = null)
            }
        }

        function p(e) {
            if (e = e || {}, !e.$$prepared) {
                var t = e.domOperation || ne;
                e.domOperation = function() {
                    e.$$domOperationFired = !0, t(), t = ne
                }, e.$$prepared = !0
            }
            return e
        }

        function d(e, t) {
            h(e, t), v(e, t)
        }

        function h(e, t) {
            t.from && (e.css(t.from), t.from = null)
        }

        function v(e, t) {
            t.to && (e.css(t.to), t.to = null)
        }

        function g(e, t, n) {
            var r = t.options || {},
                i = n.options || {},
                o = (r.addClass || "") + " " + (i.addClass || ""),
                a = (r.removeClass || "") + " " + (i.removeClass || ""),
                s = m(e.attr("class"), o, a);
            i.preparationClasses && (r.preparationClasses = k(i.preparationClasses, r.preparationClasses), delete i.preparationClasses);
            var c = r.domOperation !== ne ? r.domOperation : null;
            return z(r, i), c && (r.domOperation = c), s.addClass ? r.addClass = s.addClass : r.addClass = null, s.removeClass ? r.removeClass = s.removeClass : r.removeClass = null, t.addClass = r.addClass, t.removeClass = r.removeClass, r
        }

        function m(e, t, n) {
            function r(e) {
                X(e) && (e = e.split(" "));
                var t = {};
                return W(e, function(e) {
                    e.length && (t[e] = !0)
                }), t
            }
            var i = 1,
                o = -1,
                a = {};
            e = r(e), t = r(t), W(t, function(e, t) {
                a[t] = i
            }), n = r(n), W(n, function(e, t) {
                a[t] = a[t] === i ? null : o
            });
            var s = {
                addClass: "",
                removeClass: ""
            };
            return W(a, function(t, n) {
                var r, a;
                t === i ? (r = "addClass", a = !e[n] || e[n + L]) : t === o && (r = "removeClass", a = e[n] || e[n + U]), a && (s[r].length && (s[r] += " "), s[r] += n)
            }), s
        }

        function $(e) {
            return e instanceof te ? e[0] : e
        }

        function y(e, t, n) {
            var r = "";
            t && (r = o(t, N, !0)), n.addClass && (r = k(r, o(n.addClass, U))), n.removeClass && (r = k(r, o(n.removeClass, L))), r.length && (n.preparationClasses = r, e.addClass(r))
        }

        function b(e, t) {
            t.preparationClasses && (e.removeClass(t.preparationClasses), t.preparationClasses = null), t.activeClasses && (e.removeClass(t.activeClasses), t.activeClasses = null)
        }

        function w(e, t) {
            var n = t ? "-" + t + "s" : "";
            return C(e, [pe, n]), [pe, n]
        }

        function S(e, t) {
            var n = t ? "paused" : "",
                r = I + ce;
            return C(e, [r, n]), [r, n]
        }

        function C(e, t) {
            var n = t[0],
                r = t[1];
            e.style[n] = r
        }

        function k(e, t) {
            return e ? t ? e + " " + t : e : t
        }

        function E(e) {
            return [fe, e + "s"]
        }

        function _(e, t) {
            return [t ? le : pe, e + "s"]
        }

        function x(e, t, n) {
            var r = Object.create(null),
                i = e.getComputedStyle(t) || {};
            return W(n, function(e, t) {
                var n = i[e];
                if (n) {
                    var o = n.charAt(0);
                    ("-" === o || "+" === o || o >= 0) && (n = A(n)), 0 === n && (n = null), r[t] = n
                }
            }), r
        }

        function A(e) {
            var t = 0,
                n = e.split(/\s*,\s*/);
            return W(n, function(e) {
                "s" === e.charAt(e.length - 1) && (e = e.substring(0, e.length - 1)), e = parseFloat(e) || 0, t = t ? Math.max(e, t) : e
            }), t
        }

        function T(e) {
            return 0 === e || null != e
        }

        function R(e, t) {
            var n = P,
                r = e + "s";
            return t ? n += re : r += " linear all", [n, r]
        }

        function O() {
            var e = Object.create(null);
            return {
                flush: function() {
                    e = Object.create(null)
                },
                count: function(t) {
                    var n = e[t];
                    return n ? n.total : 0
                },
                get: function(t) {
                    var n = e[t];
                    return n && n.value
                },
                put: function(t, n) {
                    e[t] ? e[t].total++ : e[t] = {
                        total: 1,
                        value: n
                    }
                }
            }
        }

        function D(e, t, n) {
            W(n, function(n) {
                e[n] = Y(e[n]) ? e[n] : t.style.getPropertyValue(n)
            })
        }
        var P, M, I, j, V = 1,
            U = "-add",
            L = "-remove",
            N = "ng-",
            F = "-active",
            B = "-prepare",
            H = "ng-animate",
            q = "$$ngAnimateChildren";
        void 0 === e.ontransitionend && void 0 !== e.onwebkittransitionend ? ("-webkit-", P = "WebkitTransition", M = "webkitTransitionEnd transitionend") : (P = "transition", M = "transitionend"), void 0 === e.onanimationend && void 0 !== e.onwebkitanimationend ? ("-webkit-", I = "WebkitAnimation", j = "webkitAnimationEnd animationend") : (I = "animation", j = "animationend");
        var G, z, W, K, Y, J, Z, Q, X, ee, te, ne, re = "Duration",
            ie = "Property",
            oe = "Delay",
            ae = "TimingFunction",
            se = "IterationCount",
            ce = "PlayState",
            ue = 9999,
            le = I + oe,
            fe = I + re,
            pe = P + oe,
            de = P + re,
            he = t.$$minErr("ng"),
            ve = ["$$rAF", function(e) {
                function t(e) {
                    r = r.concat(e), n()
                }

                function n() {
                    if (r.length) {
                        for (var t = r.shift(), o = 0; o < t.length; o++) t[o]();
                        i || e(function() {
                            i || n()
                        })
                    }
                }
                var r, i;
                return r = t.queue = [], t.waitUntilQuiet = function(t) {
                    i && i(), i = e(function() {
                        i = null, t(), n()
                    })
                }, t
            }],
            ge = ["$interpolate", function(e) {
                return {
                    link: function(t, n, r) {
                        function i(e) {
                            e = "on" === e || "true" === e, n.data(q, e)
                        }
                        var o = r.ngAnimateChildren;
                        X(o) && 0 === o.length ? n.data(q, !0) : (i(e(o)(t)), r.$observe("ngAnimateChildren", i))
                    }
                }
            }],
            me = "$$animateCss",
            $e = 1e3,
            ye = 3,
            be = 1.5,
            we = {
                transitionDuration: de,
                transitionDelay: pe,
                transitionProperty: P + ie,
                animationDuration: fe,
                animationDelay: le,
                animationIterationCount: I + se
            },
            Se = {
                transitionDuration: de,
                transitionDelay: pe,
                animationDuration: fe,
                animationDelay: le
            },
            Ce = ["$animateProvider", function(e) {
                var t = O(),
                    n = O();
                this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(e, r, s, c, u, l, g, m) {
                    function y(e, t) {
                        var n = "$$ngAnimateParentKey",
                            r = e.parentNode;
                        return (r[n] || (r[n] = ++B)) + "-" + e.getAttribute("class") + "-" + t
                    }

                    function b(n, r, i, o) {
                        var a = t.get(i);
                        return a || (a = x(e, n, o), "infinite" === a.animationIterationCount && (a.animationIterationCount = 1)), t.put(i, a), a
                    }

                    function k(i, a, s, c) {
                        var u;
                        if (t.count(s) > 0 && !(u = n.get(s))) {
                            var l = o(a, "-stagger");
                            r.addClass(i, l), u = x(e, i, c), u.animationDuration = Math.max(u.animationDuration, 0), u.transitionDuration = Math.max(u.transitionDuration, 0), r.removeClass(i, l), n.put(s, u)
                        }
                        return u || {}
                    }

                    function A(e) {
                        H.push(e), g.waitUntilQuiet(function() {
                            t.flush(), n.flush();
                            for (var e = u(), r = 0; r < H.length; r++) H[r](e);
                            H.length = 0
                        })
                    }

                    function O(e, t, n) {
                        var r = b(e, t, n, we),
                            i = r.animationDelay,
                            o = r.transitionDelay;
                        return r.maxDelay = i && o ? Math.max(i, o) : i || o, r.maxDuration = Math.max(r.animationDuration * r.animationIterationCount, r.transitionDuration), r
                    }
                    var V = f(r),
                        B = 0,
                        H = [];
                    return function(e, n) {
                        function u() {
                            g()
                        }

                        function f() {
                            g(!0)
                        }

                        function g(t) {
                            if (!(J || Q && Z)) {
                                J = !0, Z = !1, q.$$skipPreparationClasses || r.removeClass(e, Ce), r.removeClass(e, Ee), S(Y, !1), w(Y, !1), W(le, function(e) {
                                    Y.style[e[0]] = ""
                                }), V(e, q), d(e, q), Object.keys(z).length && W(z, function(e, t) {
                                    e ? Y.style.setProperty(t, e) : Y.style.removeProperty(t)
                                }), q.onDone && q.onDone(), de && de.length && e.off(de.join(" "), B);
                                var n = e.data(me);
                                n && (c.cancel(n[0].timer), e.removeData(me)), X && X.complete(!t)
                            }
                        }

                        function b(e) {
                            Ue.blockTransition && w(Y, e), Ue.blockKeyframeAnimation && S(Y, !!e)
                        }

                        function x() {
                            return X = new s({
                                end: u,
                                cancel: f
                            }), A(ne), g(), {
                                $$willAnimate: !1,
                                start: function() {
                                    return X
                                },
                                end: u
                            }
                        }

                        function B(e) {
                            e.stopPropagation();
                            var t = e.originalEvent || e;
                            if (t.target === Y) {
                                var n = t.$manualTimeStamp || Date.now(),
                                    r = parseFloat(t.elapsedTime.toFixed(ye));
                                Math.max(n - ce, 0) >= re && r >= oe && (Q = !0, g())
                            }
                        }

                        function H() {
                            function t() {
                                if (!J) {
                                    if (b(!1), W(le, function(e) {
                                            var t = e[0],
                                                n = e[1];
                                            Y.style[t] = n
                                        }), V(e, q), r.addClass(e, Ee), Ue.recalculateTimingStyles) {
                                        if (ke = Y.getAttribute("class") + " " + Ce, xe = y(Y, ke), je = O(Y, ke, xe), Ve = je.maxDelay, te = Math.max(Ve, 0), 0 === (oe = je.maxDuration)) return void g();
                                        Ue.hasTransitions = je.transitionDuration > 0, Ue.hasAnimations = je.animationDuration > 0
                                    }
                                    if (Ue.applyAnimationDelay && (Ve = "boolean" != typeof q.delay && T(q.delay) ? parseFloat(q.delay) : Ve, te = Math.max(Ve, 0), je.animationDelay = Ve, Le = _(Ve, !0), le.push(Le), Y.style[Le[0]] = Le[1]), re = te * $e, se = oe * $e, q.easing) {
                                        var t, i = q.easing;
                                        Ue.hasTransitions && (t = P + ae, le.push([t, i]), Y.style[t] = i), Ue.hasAnimations && (t = I + ae, le.push([t, i]), Y.style[t] = i)
                                    }
                                    je.transitionDuration && de.push(M), je.animationDuration && de.push(j), ce = Date.now();
                                    var o = re + be * se,
                                        a = ce + o,
                                        s = e.data(me) || [],
                                        u = !0;
                                    if (s.length) {
                                        var l = s[0];
                                        u = a > l.expectedEndTime, u ? c.cancel(l.timer) : s.push(g)
                                    }
                                    if (u) {
                                        var f = c(n, o, !1);
                                        s[0] = {
                                            timer: f,
                                            expectedEndTime: a
                                        }, s.push(g), e.data(me, s)
                                    }
                                    de.length && e.on(de.join(" "), B), q.to && (q.cleanupStyles && D(z, Y, Object.keys(q.to)), v(e, q))
                                }
                            }

                            function n() {
                                var t = e.data(me);
                                if (t) {
                                    for (var n = 1; n < t.length; n++) t[n]();
                                    e.removeData(me)
                                }
                            }
                            if (!J) {
                                if (!Y.parentNode) return void g();
                                var i = function(e) {
                                        if (Q) Z && e && (Z = !1, g());
                                        else if (Z = !e, je.animationDuration) {
                                            var t = S(Y, Z);
                                            Z ? le.push(t) : a(le, t)
                                        }
                                    },
                                    o = Me > 0 && (je.transitionDuration && 0 === Ae.transitionDuration || je.animationDuration && 0 === Ae.animationDuration) && Math.max(Ae.animationDelay, Ae.transitionDelay);
                                o ? c(t, Math.floor(o * Me * $e), !1) : t(), ee.resume = function() {
                                    i(!0)
                                }, ee.pause = function() {
                                    i(!1)
                                }
                            }
                        }
                        var q = n || {};
                        q.$$prepared || (q = p(G(q)));
                        var z = {},
                            Y = $(e);
                        if (!Y || !Y.parentNode || !m.enabled()) return x();
                        var J, Z, Q, X, ee, te, re, oe, se, ce, le = [],
                            fe = e.attr("class"),
                            pe = i(q),
                            de = [];
                        if (0 === q.duration || !l.animations && !l.transitions) return x();
                        var he = q.event && K(q.event) ? q.event.join(" ") : q.event,
                            ve = he && q.structural,
                            ge = "",
                            we = "";
                        ve ? ge = o(he, N, !0) : he && (ge = he), q.addClass && (we += o(q.addClass, U)), q.removeClass && (we.length && (we += " "), we += o(q.removeClass, L)), q.applyClassesEarly && we.length && V(e, q);
                        var Ce = [ge, we].join(" ").trim(),
                            ke = fe + " " + Ce,
                            Ee = o(Ce, F),
                            _e = pe.to && Object.keys(pe.to).length > 0;
                        if (!((q.keyframeStyle || "").length > 0 || _e || Ce)) return x();
                        var xe, Ae;
                        if (q.stagger > 0) {
                            var Te = parseFloat(q.stagger);
                            Ae = {
                                transitionDelay: Te,
                                animationDelay: Te,
                                transitionDuration: 0,
                                animationDuration: 0
                            }
                        } else xe = y(Y, ke), Ae = k(Y, Ce, xe, Se);
                        q.$$skipPreparationClasses || r.addClass(e, Ce);
                        var Re;
                        if (q.transitionStyle) {
                            var Oe = [P, q.transitionStyle];
                            C(Y, Oe), le.push(Oe)
                        }
                        if (q.duration >= 0) {
                            Re = Y.style[P].length > 0;
                            var De = R(q.duration, Re);
                            C(Y, De), le.push(De)
                        }
                        if (q.keyframeStyle) {
                            var Pe = [I, q.keyframeStyle];
                            C(Y, Pe), le.push(Pe)
                        }
                        var Me = Ae ? q.staggerIndex >= 0 ? q.staggerIndex : t.count(xe) : 0,
                            Ie = 0 === Me;
                        Ie && !q.skipBlocking && w(Y, ue);
                        var je = O(Y, ke, xe),
                            Ve = je.maxDelay;
                        te = Math.max(Ve, 0), oe = je.maxDuration;
                        var Ue = {};
                        if (Ue.hasTransitions = je.transitionDuration > 0, Ue.hasAnimations = je.animationDuration > 0, Ue.hasTransitionAll = Ue.hasTransitions && "all" === je.transitionProperty, Ue.applyTransitionDuration = _e && (Ue.hasTransitions && !Ue.hasTransitionAll || Ue.hasAnimations && !Ue.hasTransitions), Ue.applyAnimationDuration = q.duration && Ue.hasAnimations, Ue.applyTransitionDelay = T(q.delay) && (Ue.applyTransitionDuration || Ue.hasTransitions), Ue.applyAnimationDelay = T(q.delay) && Ue.hasAnimations, Ue.recalculateTimingStyles = we.length > 0, (Ue.applyTransitionDuration || Ue.applyAnimationDuration) && (oe = q.duration ? parseFloat(q.duration) : oe, Ue.applyTransitionDuration && (Ue.hasTransitions = !0, je.transitionDuration = oe, Re = Y.style[P + ie].length > 0, le.push(R(oe, Re))), Ue.applyAnimationDuration && (Ue.hasAnimations = !0, je.animationDuration = oe, le.push(E(oe)))), 0 === oe && !Ue.recalculateTimingStyles) return x();
                        if (null != q.delay) {
                            var Le;
                            "boolean" != typeof q.delay && (Le = parseFloat(q.delay), te = Math.max(Le, 0)), Ue.applyTransitionDelay && le.push(_(Le)), Ue.applyAnimationDelay && le.push(_(Le, !0))
                        }
                        return null == q.duration && je.transitionDuration > 0 && (Ue.recalculateTimingStyles = Ue.recalculateTimingStyles || Ie), re = te * $e, se = oe * $e, q.skipBlocking || (Ue.blockTransition = je.transitionDuration > 0, Ue.blockKeyframeAnimation = je.animationDuration > 0 && Ae.animationDelay > 0 && 0 === Ae.animationDuration), q.from && (q.cleanupStyles && D(z, Y, Object.keys(q.from)), h(e, q)), Ue.blockTransition || Ue.blockKeyframeAnimation ? b(oe) : q.skipBlocking || w(Y, !1), {
                            $$willAnimate: !0,
                            end: u,
                            start: function() {
                                if (!J) return ee = {
                                    end: u,
                                    cancel: f,
                                    resume: null,
                                    pause: null
                                }, X = new s(ee), A(H), X
                            }
                        }
                    }
                }]
            }],
            ke = ["$$animationProvider", function(e) {
                function t(e) {
                    return e.parentNode && 11 === e.parentNode.nodeType
                }
                e.drivers.push("$$animateCssDriver");
                var n = "ng-animate-shim",
                    r = "ng-anchor-out";
                this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(e, i, o, a, s, c, u) {
                    function l(e) {
                        return e.replace(/\bng-\S+\b/g, "")
                    }

                    function f(e, t) {
                        return X(e) && (e = e.split(" ")), X(t) && (t = t.split(" ")), e.filter(function(e) {
                            return -1 === t.indexOf(e)
                        }).join(" ")
                    }

                    function p(t, i, a) {
                        function s(e) {
                            var t = {},
                                n = $(e).getBoundingClientRect();
                            return W(["width", "height", "top", "left"], function(e) {
                                var r = n[e];
                                switch (e) {
                                    case "top":
                                        r += v.scrollTop;
                                        break;
                                    case "left":
                                        r += v.scrollLeft
                                }
                                t[e] = Math.floor(r) + "px"
                            }), t
                        }

                        function c() {
                            var t = e(h, {
                                addClass: r,
                                delay: !0,
                                from: s(i)
                            });
                            return t.$$willAnimate ? t : null
                        }

                        function u(e) {
                            return e.attr("class") || ""
                        }

                        function p() {
                            var t = l(u(a)),
                                n = f(t, g),
                                i = f(g, t),
                                o = e(h, {
                                    to: s(a),
                                    addClass: "ng-anchor-in " + n,
                                    removeClass: r + " " + i,
                                    delay: !0
                                });
                            return o.$$willAnimate ? o : null
                        }

                        function d() {
                            h.remove(), i.removeClass(n), a.removeClass(n)
                        }
                        var h = te($(i).cloneNode(!0)),
                            g = l(u(h));
                        i.addClass(n), a.addClass(n), h.addClass("ng-anchor"), m.append(h);
                        var y, b = c();
                        if (!b && !(y = p())) return d();
                        var w = b || y;
                        return {
                            start: function() {
                                function e() {
                                    n && n.end()
                                }
                                var t, n = w.start();
                                return n.done(function() {
                                    if (n = null, !y && (y = p())) return n = y.start(), n.done(function() {
                                        n = null, d(), t.complete()
                                    }), n;
                                    d(), t.complete()
                                }), t = new o({
                                    end: e,
                                    cancel: e
                                })
                            }
                        }
                    }

                    function d(e, t, n, r) {
                        var i = h(e, ne),
                            a = h(t, ne),
                            s = [];
                        if (W(r, function(e) {
                                var t = e.out,
                                    r = e.in,
                                    i = p(n, t, r);
                                i && s.push(i)
                            }), i || a || 0 !== s.length) return {
                            start: function() {
                                function e() {
                                    W(t, function(e) {
                                        e.end()
                                    })
                                }
                                var t = [];
                                i && t.push(i.start()), a && t.push(a.start()), W(s, function(e) {
                                    t.push(e.start())
                                });
                                var n = new o({
                                    end: e,
                                    cancel: e
                                });
                                return o.all(t, function(e) {
                                    n.complete(e)
                                }), n
                            }
                        }
                    }

                    function h(t) {
                        var n = t.element,
                            r = t.options || {};
                        t.structural && (r.event = t.event, r.structural = !0, r.applyClassesEarly = !0, "leave" === t.event && (r.onDone = r.domOperation)), r.preparationClasses && (r.event = k(r.event, r.preparationClasses));
                        var i = e(n, r);
                        return i.$$willAnimate ? i : null
                    }
                    if (!s.animations && !s.transitions) return ne;
                    var v = u[0].body,
                        g = $(a),
                        m = te(t(g) || v.contains(g) ? g : v);
                    return function(e) {
                        return e.from && e.to ? d(e.from, e.to, e.classes, e.anchors) : h(e)
                    }
                }]
            }],
            Ee = ["$animateProvider", function(e) {
                this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(t, n, r) {
                    function i(n) {
                        n = K(n) ? n : n.split(" ");
                        for (var r = [], i = {}, o = 0; o < n.length; o++) {
                            var a = n[o],
                                s = e.$$registeredAnimations[a];
                            s && !i[a] && (r.push(t.get(s)), i[a] = !0)
                        }
                        return r
                    }
                    var o = f(r);
                    return function(e, t, r, a) {
                        function s() {
                            a.domOperation(), o(e, a)
                        }

                        function c() {
                            h = !0, s(), d(e, a)
                        }

                        function u(e, t, r, i, o) {
                            var a;
                            switch (r) {
                                case "animate":
                                    a = [t, i.from, i.to, o];
                                    break;
                                case "setClass":
                                    a = [t, m, $, o];
                                    break;
                                case "addClass":
                                    a = [t, m, o];
                                    break;
                                case "removeClass":
                                    a = [t, $, o];
                                    break;
                                default:
                                    a = [t, o]
                            }
                            a.push(i);
                            var s = e.apply(e, a);
                            if (s)
                                if (Z(s.start) && (s = s.start()), s instanceof n) s.done(o);
                                else if (Z(s)) return s;
                            return ne
                        }

                        function l(e, t, r, i, o) {
                            var a = [];
                            return W(i, function(i) {
                                var s = i[o];
                                s && a.push(function() {
                                    var i, o, a = !1,
                                        c = function(e) {
                                            a || (a = !0, (o || ne)(e), i.complete(!e))
                                        };
                                    return i = new n({
                                        end: function() {
                                            c()
                                        },
                                        cancel: function() {
                                            c(!0)
                                        }
                                    }), o = u(s, e, t, r, function(e) {
                                        c(!1 === e)
                                    }), i
                                })
                            }), a
                        }

                        function f(e, t, r, i, o) {
                            var a = l(e, t, r, i, o);
                            if (0 === a.length) {
                                var s, c;
                                "beforeSetClass" === o ? (s = l(e, "removeClass", r, i, "beforeRemoveClass"), c = l(e, "addClass", r, i, "beforeAddClass")) : "setClass" === o && (s = l(e, "removeClass", r, i, "removeClass"), c = l(e, "addClass", r, i, "addClass")), s && (a = a.concat(s)), c && (a = a.concat(c))
                            }
                            if (0 !== a.length) return function(e) {
                                var t = [];
                                return a.length && W(a, function(e) {
                                        t.push(e())
                                    }), t.length ? n.all(t, e) : e(),
                                    function(e) {
                                        W(t, function(t) {
                                            e ? t.cancel() : t.end()
                                        })
                                    }
                            }
                        }
                        var h = !1;
                        3 === arguments.length && Q(r) && (a = r, r = null), a = p(a), r || (r = e.attr("class") || "", a.addClass && (r += " " + a.addClass), a.removeClass && (r += " " + a.removeClass));
                        var v, g, m = a.addClass,
                            $ = a.removeClass,
                            y = i(r);
                        if (y.length) {
                            var b, w;
                            "leave" === t ? (w = "leave", b = "afterLeave") : (w = "before" + t.charAt(0).toUpperCase() + t.substr(1), b = t), "enter" !== t && "move" !== t && (v = f(e, t, a, y, w)), g = f(e, t, a, y, b)
                        }
                        if (v || g) {
                            var S;
                            return {
                                $$willAnimate: !0,
                                end: function() {
                                    return S ? S.end() : (c(), S = new n, S.complete(!0)), S
                                },
                                start: function() {
                                    function e(e) {
                                        c(e), S.complete(e)
                                    }

                                    function t(t) {
                                        h || ((r || ne)(t), e(t))
                                    }
                                    if (S) return S;
                                    S = new n;
                                    var r, i = [];
                                    return v && i.push(function(e) {
                                        r = v(e)
                                    }), i.length ? i.push(function(e) {
                                        s(), e(!0)
                                    }) : s(), g && i.push(function(e) {
                                        r = g(e)
                                    }), S.setHost({
                                        end: function() {
                                            t()
                                        },
                                        cancel: function() {
                                            t(!0)
                                        }
                                    }), n.chain(i, e), S
                                }
                            }
                        }
                    }
                }]
            }],
            _e = ["$$animationProvider", function(e) {
                e.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(e, t) {
                    function n(t) {
                        var n = t.element,
                            r = t.event,
                            i = t.options,
                            o = t.classes;
                        return e(n, r, o, i)
                    }
                    return function(e) {
                        if (e.from && e.to) {
                            var r = n(e.from),
                                i = n(e.to);
                            if (!r && !i) return;
                            return {
                                start: function() {
                                    function e() {
                                        return function() {
                                            W(o, function(e) {
                                                e.end()
                                            })
                                        }
                                    }

                                    function n(e) {
                                        a.complete(e)
                                    }
                                    var o = [];
                                    r && o.push(r.start()), i && o.push(i.start()), t.all(o, n);
                                    var a = new t({
                                        end: e(),
                                        cancel: e()
                                    });
                                    return a
                                }
                            }
                        }
                        return n(e)
                    }
                }]
            }],
            xe = "data-ng-animate",
            Ae = "$ngAnimatePin",
            Te = ["$animateProvider", function(t) {
                function r(e) {
                    if (!e) return null;
                    var t = e.split(h),
                        n = Object.create(null);
                    return W(t, function(e) {
                        n[e] = !0
                    }), n
                }

                function i(e, t) {
                    if (e && t) {
                        var n = r(t);
                        return e.split(h).some(function(e) {
                            return n[e]
                        })
                    }
                }

                function o(e, t, n) {
                    return v[e].some(function(e) {
                        return e(t, n)
                    })
                }

                function a(e, t) {
                    var n = (e.addClass || "").length > 0,
                        r = (e.removeClass || "").length > 0;
                    return t ? n && r : n || r
                }
                var u = 1,
                    l = 2,
                    h = " ",
                    v = this.rules = {
                        skip: [],
                        cancel: [],
                        join: []
                    };
                v.join.push(function(e, t) {
                    return !e.structural && a(e)
                }), v.skip.push(function(e, t) {
                    return !e.structural && !a(e)
                }), v.skip.push(function(e, t) {
                    return "leave" === t.event && e.structural
                }), v.skip.push(function(e, t) {
                    return t.structural && t.state === l && !e.structural
                }), v.cancel.push(function(e, t) {
                    return t.structural && e.structural
                }), v.cancel.push(function(e, t) {
                    return t.state === l && e.structural
                }), v.cancel.push(function(e, t) {
                    if (t.structural) return !1;
                    var n = e.addClass,
                        r = e.removeClass,
                        o = t.addClass,
                        a = t.removeClass;
                    return !(ee(n) && ee(r) || ee(o) && ee(a)) && (i(n, a) || i(r, o))
                }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$Map", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", "$$isDocumentHidden", function(r, i, h, v, m, w, S, C, k, E, _) {
                    function x() {
                        var e = !1;
                        return function(t) {
                            e ? t() : i.$$postDigest(function() {
                                e = !0, t()
                            })
                        }
                    }

                    function A(e, t) {
                        return g(e, t, {})
                    }

                    function T(e, t, n) {
                        var r = [],
                            i = B[n];
                        return i && W(i, function(i) {
                            ae.call(i.node, t) ? r.push(i.callback) : "leave" === n && ae.call(i.node, e) && r.push(i.callback)
                        }), r
                    }

                    function R(e, t, n) {
                        var r = c(t);
                        return e.filter(function(e) {
                            return !(e.node === r && (!n || e.callback === n))
                        })
                    }

                    function O(e, t) {
                        "close" !== e || t.parentNode || se.off(t)
                    }

                    function D(e, t, n) {
                        function c(e, t, n, i) {
                            E(function() {
                                var e = T(C, m, t);
                                e.length ? r(function() {
                                    W(e, function(e) {
                                        e(v, n, i)
                                    }), O(n, m)
                                }) : O(n, m)
                            }), e.progress(t, n, i)
                        }

                        function f(e) {
                            b(v, h), oe(v, h), d(v, h), h.domOperation(), k.complete(!e)
                        }
                        var h = G(n),
                            v = s(e),
                            m = $(v),
                            C = m && m.parentNode;
                        h = p(h);
                        var k = new S,
                            E = x();
                        if (K(h.addClass) && (h.addClass = h.addClass.join(" ")), h.addClass && !X(h.addClass) && (h.addClass = null), K(h.removeClass) && (h.removeClass = h.removeClass.join(" ")), h.removeClass && !X(h.removeClass) && (h.removeClass = null), h.from && !Q(h.from) && (h.from = null), h.to && !Q(h.to) && (h.to = null), !(N && m && re(m, t, n) && ie(m, h))) return f(), k;
                        var R = ["enter", "move", "leave"].indexOf(t) >= 0,
                            D = _(),
                            V = D || L.get(m),
                            F = !V && U.get(m) || {},
                            B = !!F.state;
                        if (V || B && F.state === u || (V = !I(m, C, t)), V) return D && c(k, t, "start"), f(), D && c(k, t, "close"), k;
                        R && P(m);
                        var H = {
                            structural: R,
                            element: v,
                            event: t,
                            addClass: h.addClass,
                            removeClass: h.removeClass,
                            close: f,
                            options: h,
                            runner: k
                        };
                        if (B) {
                            if (o("skip", H, F)) return F.state === l ? (f(), k) : (g(v, F, H), F.runner);
                            if (o("cancel", H, F))
                                if (F.state === l) F.runner.end();
                                else {
                                    if (!F.structural) return g(v, F, H), F.runner;
                                    F.close()
                                }
                            else {
                                if (o("join", H, F)) {
                                    if (F.state !== l) return y(v, R ? t : null, h), t = H.event = F.event, h = g(v, F, H), F.runner;
                                    A(v, H)
                                }
                            }
                        } else A(v, H);
                        var q = H.structural;
                        if (q || (q = "animate" === H.event && Object.keys(H.options.to || {}).length > 0 || a(H)), !q) return f(), M(m), k;
                        var z = (F.counter || 0) + 1;
                        return H.counter = z, j(m, u, H), i.$$postDigest(function() {
                            v = s(e);
                            var n = U.get(m),
                                r = !n;
                            n = n || {};
                            var i = v.parent() || [],
                                o = i.length > 0 && ("animate" === n.event || n.structural || a(n));
                            if (r || n.counter !== z || !o) return r && (oe(v, h), d(v, h)), (r || R && n.event !== t) && (h.domOperation(), k.end()), void(o || M(m));
                            t = !n.structural && a(n, !0) ? "setClass" : n.event, j(m, l);
                            var u = w(v, t, n.options);
                            k.setHost(u), c(k, t, "start", {}), u.done(function(e) {
                                f(!e);
                                var n = U.get(m);
                                n && n.counter === z && M(m), c(k, t, "close", {})
                            })
                        }), k
                    }

                    function P(e) {
                        var t = e.querySelectorAll("[" + xe + "]");
                        W(t, function(e) {
                            var t = parseInt(e.getAttribute(xe), 10),
                                n = U.get(e);
                            if (n) switch (t) {
                                case l:
                                    n.runner.end();
                                case u:
                                    U.delete(e)
                            }
                        })
                    }

                    function M(e) {
                        e.removeAttribute(xe), U.delete(e)
                    }

                    function I(e, t, n) {
                        var r, i = v[0].body,
                            o = $(h),
                            a = e === i || "HTML" === e.nodeName,
                            s = e === o,
                            c = !1,
                            u = L.get(e),
                            l = te.data(e, Ae);
                        for (l && (t = $(l)); t && (s || (s = t === o), t.nodeType === V);) {
                            var f = U.get(t) || {};
                            if (!c) {
                                var p = L.get(t);
                                if (!0 === p && !1 !== u) {
                                    u = !0;
                                    break
                                }!1 === p && (u = !1), c = f.structural
                            }
                            if (ee(r) || !0 === r) {
                                var d = te.data(t, q);
                                Y(d) && (r = d)
                            }
                            if (c && !1 === r) break;
                            if (a || (a = t === i), a && s) break;
                            t = s || !(l = te.data(t, Ae)) ? t.parentNode : $(l)
                        }
                        return (!c || r) && !0 !== u && s && a
                    }

                    function j(e, t, n) {
                        n = n || {}, n.state = t, e.setAttribute(xe, t);
                        var r = U.get(e),
                            i = r ? z(r, n) : n;
                        U.set(e, i)
                    }
                    var U = new m,
                        L = new m,
                        N = null,
                        F = i.$watch(function() {
                            return 0 === C.totalPendingRequests
                        }, function(e) {
                            e && (F(), i.$$postDigest(function() {
                                i.$$postDigest(function() {
                                    null === N && (N = !0)
                                })
                            }))
                        }),
                        B = Object.create(null),
                        H = t.customFilter(),
                        Z = t.classNameFilter(),
                        ne = function() {
                            return !0
                        },
                        re = H || ne,
                        ie = Z ? function(e, t) {
                            var n = [e.getAttribute("class"), t.addClass, t.removeClass].join(" ");
                            return Z.test(n)
                        } : ne,
                        oe = f(k),
                        ae = e.Node.prototype.contains || function(e) {
                            return this === e || !!(16 & this.compareDocumentPosition(e))
                        },
                        se = {
                            on: function(e, t, n) {
                                var r = c(t);
                                B[e] = B[e] || [], B[e].push({
                                    node: r,
                                    callback: n
                                }), te(t).on("$destroy", function() {
                                    U.get(r) || se.off(e, t, n)
                                })
                            },
                            off: function(e, t, n) {
                                if (1 !== arguments.length || X(arguments[0])) {
                                    var r = B[e];
                                    r && (B[e] = 1 === arguments.length ? null : R(r, t, n))
                                } else {
                                    t = arguments[0];
                                    for (var i in B) B[i] = R(B[i], t)
                                }
                            },
                            pin: function(e, t) {
                                n(J(e), "element", "not an element"), n(J(t), "parentElement", "not an element"), e.data(Ae, t)
                            },
                            push: function(e, t, n, r) {
                                return n = n || {}, n.domOperation = r, D(e, t, n)
                            },
                            enabled: function(e, t) {
                                var n = arguments.length;
                                if (0 === n) t = !!N;
                                else {
                                    if (J(e)) {
                                        var r = $(e);
                                        1 === n ? t = !L.get(r) : L.set(r, !t)
                                    } else t = N = !!e
                                }
                                return t
                            }
                        };
                    return se
                }]
            }],
            Re = ["$animateProvider", function(e) {
                function t(e, t) {
                    e.data(s, t)
                }

                function n(e) {
                    e.removeData(s)
                }

                function i(e) {
                    return e.data(s)
                }
                var o = "ng-animate-ref",
                    a = this.drivers = [],
                    s = "$$animationRunner";
                this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$Map", "$$rAFScheduler", function(e, s, c, u, l, h) {
                    function v(e) {
                        function t(e) {
                            if (e.processed) return e;
                            e.processed = !0;
                            var n = e.domNode,
                                r = n.parentNode;
                            o.set(n, e);
                            for (var a; r;) {
                                if (a = o.get(r)) {
                                    a.processed || (a = t(a));
                                    break
                                }
                                r = r.parentNode
                            }
                            return (a || i).children.push(e), e
                        }

                        function n(e) {
                            var t, n = [],
                                r = [];
                            for (t = 0; t < e.children.length; t++) r.push(e.children[t]);
                            var i = r.length,
                                o = 0,
                                a = [];
                            for (t = 0; t < r.length; t++) {
                                var s = r[t];
                                i <= 0 && (i = o, o = 0, n.push(a), a = []), a.push(s.fn), s.children.forEach(function(e) {
                                    o++, r.push(e)
                                }), i--
                            }
                            return a.length && n.push(a), n
                        }
                        var r, i = {
                                children: []
                            },
                            o = new l;
                        for (r = 0; r < e.length; r++) {
                            var a = e[r];
                            o.set(a.domNode, e[r] = {
                                domNode: a.domNode,
                                fn: a.fn,
                                children: []
                            })
                        }
                        for (r = 0; r < e.length; r++) t(e[r]);
                        return n(i)
                    }
                    var g = [],
                        m = f(e);
                    return function(l, f, y) {
                        function b(e) {
                            var t = "[" + o + "]",
                                n = e.hasAttribute(o) ? [e] : e.querySelectorAll(t),
                                r = [];
                            return W(n, function(e) {
                                var t = e.getAttribute(o);
                                t && t.length && r.push(e)
                            }), r
                        }

                        function w(e) {
                            var t = [],
                                n = {};
                            W(e, function(e, r) {
                                var i = e.element,
                                    a = $(i),
                                    s = e.event,
                                    c = ["enter", "move"].indexOf(s) >= 0,
                                    u = e.structural ? b(a) : [];
                                if (u.length) {
                                    var l = c ? "to" : "from";
                                    W(u, function(e) {
                                        var t = e.getAttribute(o);
                                        n[t] = n[t] || {}, n[t][l] = {
                                            animationID: r,
                                            element: te(e)
                                        }
                                    })
                                } else t.push(e)
                            });
                            var r = {},
                                i = {};
                            return W(n, function(n, o) {
                                var a = n.from,
                                    s = n.to;
                                if (!a || !s) {
                                    var c = a ? a.animationID : s.animationID,
                                        u = c.toString();
                                    return void(r[u] || (r[u] = !0, t.push(e[c])))
                                }
                                var l = e[a.animationID],
                                    f = e[s.animationID],
                                    p = a.animationID.toString();
                                if (!i[p]) {
                                    var d = i[p] = {
                                        structural: !0,
                                        beforeStart: function() {
                                            l.beforeStart(), f.beforeStart()
                                        },
                                        close: function() {
                                            l.close(), f.close()
                                        },
                                        classes: S(l.classes, f.classes),
                                        from: l,
                                        to: f,
                                        anchors: []
                                    };
                                    d.classes.length ? t.push(d) : (t.push(l), t.push(f))
                                }
                                i[p].anchors.push({
                                    out: a.element,
                                    in: s.element
                                })
                            }), t
                        }

                        function S(e, t) {
                            e = e.split(" "), t = t.split(" ");
                            for (var n = [], r = 0; r < e.length; r++) {
                                var i = e[r];
                                if ("ng-" !== i.substring(0, 3))
                                    for (var o = 0; o < t.length; o++)
                                        if (i === t[o]) {
                                            n.push(i);
                                            break
                                        }
                            }
                            return n.join(" ")
                        }

                        function C(e) {
                            for (var t = a.length - 1; t >= 0; t--) {
                                var n = a[t],
                                    r = c.get(n),
                                    i = r(e);
                                if (i) return i
                            }
                        }

                        function k() {
                            l.addClass(H), O && e.addClass(l, O), D && (e.removeClass(l, D), D = null)
                        }

                        function E(e, t) {
                            function n(e) {
                                var n = i(e);
                                n && n.setHost(t)
                            }
                            e.from && e.to ? (n(e.from.element), n(e.to.element)) : n(e.element)
                        }

                        function _() {
                            var e = i(l);
                            !e || "leave" === f && y.$$domOperationFired || e.end()
                        }

                        function x(t) {
                            l.off("$destroy", _), n(l), m(l, y), d(l, y), y.domOperation(), O && e.removeClass(l, O), l.removeClass(H), T.complete(!t)
                        }
                        y = p(y);
                        var A = ["enter", "move", "leave"].indexOf(f) >= 0,
                            T = new u({
                                end: function() {
                                    x()
                                },
                                cancel: function() {
                                    x(!0)
                                }
                            });
                        if (!a.length) return x(), T;
                        t(l, T);
                        var R = r(l.attr("class"), r(y.addClass, y.removeClass)),
                            O = y.tempClasses;
                        O && (R += " " + O, y.tempClasses = null);
                        var D;
                        return A && (D = "ng-" + f + B, e.addClass(l, D)), g.push({
                            element: l,
                            classes: R,
                            event: f,
                            structural: A,
                            options: y,
                            beforeStart: k,
                            close: x
                        }), l.on("$destroy", _), g.length > 1 ? T : (s.$$postDigest(function() {
                            var e = [];
                            W(g, function(t) {
                                i(t.element) ? e.push(t) : t.close()
                            }), g.length = 0;
                            var t = w(e),
                                n = [];
                            W(t, function(e) {
                                n.push({
                                    domNode: $(e.from ? e.from.element : e.element),
                                    fn: function() {
                                        e.beforeStart();
                                        var t, n = e.close;
                                        if (i(e.anchors ? e.from.element || e.to.element : e.element)) {
                                            var r = C(e);
                                            r && (t = r.start)
                                        }
                                        if (t) {
                                            var o = t();
                                            o.done(function(e) {
                                                n(!e)
                                            }), E(e, o)
                                        } else n()
                                    }
                                })
                            }), h(v(n))
                        }), T)
                    }
                }]
            }],
            Oe = ["$animate", function(e) {
                return {
                    restrict: "A",
                    transclude: "element",
                    terminal: !0,
                    priority: 600,
                    link: function(t, n, r, i, o) {
                        var a, s;
                        t.$watchCollection(r.ngAnimateSwap || r.for, function(t) {
                            a && e.leave(a), s && (s.$destroy(), s = null), (t || 0 === t) && o(function(t, r) {
                                a = t, s = r, e.enter(t, null, n)
                            })
                        })
                    }
                }
            }];
        t.module("ngAnimate", [], function() {
            ne = t.noop, G = t.copy, z = t.extend, te = t.element, W = t.forEach, K = t.isArray, X = t.isString, Q = t.isObject, ee = t.isUndefined, Y = t.isDefined, Z = t.isFunction, J = t.isElement
        }).info({
            angularVersion: "1.7.2"
        }).directive("ngAnimateSwap", Oe).directive("ngAnimateChildren", ge).factory("$$rAFScheduler", ve).provider("$$animateQueue", Te).provider("$$animation", Re).provider("$animateCss", Ce).provider("$$animateCssDriver", ke).provider("$$animateJs", Ee).provider("$$animateJsDriver", _e)
    }(window, window.angular)
}, function(e, t) {
    /*!
     * angular-ui-mask
     * https://github.com/angular-ui/ui-mask
     * Version: 1.8.7 - 2016-07-26T16:01:23.393Z
     * License: MIT
     */
    ! function() {
        "use strict";
        angular.module("ui.mask", []).value("uiMaskConfig", {
            maskDefinitions: {
                9: /\d/,
                A: /[a-zA-Z]/,
                "*": /[a-zA-Z0-9]/
            },
            clearOnBlur: !0,
            clearOnBlurPlaceholder: !1,
            escChar: "\\",
            eventsToHandle: ["input", "keyup", "click", "focus"],
            addDefaultPlaceholder: !0,
            allowInvalidValue: !1
        }).provider("uiMask.Config", function() {
            var e = {};
            this.maskDefinitions = function(t) {
                return e.maskDefinitions = t
            }, this.clearOnBlur = function(t) {
                return e.clearOnBlur = t
            }, this.clearOnBlurPlaceholder = function(t) {
                return e.clearOnBlurPlaceholder = t
            }, this.eventsToHandle = function(t) {
                return e.eventsToHandle = t
            }, this.addDefaultPlaceholder = function(t) {
                return e.addDefaultPlaceholder = t
            }, this.allowInvalidValue = function(t) {
                return e.allowInvalidValue = t
            }, this.$get = ["uiMaskConfig", function(t) {
                var n = t;
                for (var r in e) angular.isObject(e[r]) && !angular.isArray(e[r]) ? angular.extend(n[r], e[r]) : n[r] = e[r];
                return n
            }]
        }).directive("uiMask", ["uiMask.Config", function(e) {
            function t(e) {
                return e === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }
            return {
                priority: 100,
                require: "ngModel",
                restrict: "A",
                compile: function() {
                    var n = angular.copy(e);
                    return function(e, r, i, o) {
                        function a(e) {
                            return angular.isDefined(e) ? (b(e), q ? (p(), d(), !0) : f()) : f()
                        }

                        function s(e) {
                            e && (P = e, !q || 0 === r.val().length && angular.isDefined(i.placeholder) || r.val(m(g(r.val()))))
                        }

                        function c() {
                            return a(i.uiMask)
                        }

                        function u(e) {
                            return q ? (j = g(e || ""), U = v(j), o.$setValidity("mask", U), j.length && (U || J.allowInvalidValue) ? m(j) : void 0) : e
                        }

                        function l(e) {
                            return q ? (j = g(e || ""), U = v(j), o.$viewValue = j.length ? m(j) : "", o.$setValidity("mask", U), U || J.allowInvalidValue ? Y ? o.$viewValue : j : void 0) : e
                        }

                        function f() {
                            return q = !1, h(), angular.isDefined(z) ? r.attr("placeholder", z) : r.removeAttr("placeholder"), angular.isDefined(W) ? r.attr("maxlength", W) : r.removeAttr("maxlength"), r.val(o.$modelValue), o.$viewValue = o.$modelValue, !1
                        }

                        function p() {
                            j = N = g(o.$modelValue || ""), V = L = m(j), U = v(j), i.maxlength && r.attr("maxlength", 2 * O[O.length - 1]), !z && J.addDefaultPlaceholder && r.attr("placeholder", P);
                            for (var e = o.$modelValue, t = o.$formatters.length; t--;) e = o.$formatters[t](e);
                            o.$viewValue = e || "", o.$render()
                        }

                        function d() {
                            G || (r.bind("blur", w), r.bind("mousedown mouseup", C), r.bind("keydown", E), r.bind(J.eventsToHandle.join(" "), _), G = !0)
                        }

                        function h() {
                            G && (r.unbind("blur", w), r.unbind("mousedown", C), r.unbind("mouseup", C), r.unbind("keydown", E), r.unbind("input", _), r.unbind("keyup", _), r.unbind("click", _), r.unbind("focus", _), G = !1)
                        }

                        function v(e) {
                            return !e.length || e.length >= I
                        }

                        function g(e) {
                            var t, n, i = "",
                                o = r[0],
                                a = D.slice(),
                                s = F,
                                c = s + R(o),
                                u = "";
                            return e = e.toString(), t = 0, n = e.length - P.length, angular.forEach(M, function(r) {
                                var i = r.position;
                                i >= s && i < c || (i >= s && (i += n), e.substring(i, i + r.value.length) === r.value && (u += e.slice(t, i), t = i + r.value.length))
                            }), e = u + e.slice(t), angular.forEach(e.split(""), function(e) {
                                a.length && a[0].test(e) && (i += e, a.shift())
                            }), i
                        }

                        function m(e) {
                            var t = "",
                                n = O.slice();
                            return angular.forEach(P.split(""), function(r, i) {
                                e.length && i === n[0] ? (t += e.charAt(0) || "_", e = e.substr(1), n.shift()) : t += r
                            }), t
                        }

                        function $(e) {
                            var t, n = angular.isDefined(i.uiMaskPlaceholder) ? i.uiMaskPlaceholder : i.placeholder;
                            return angular.isDefined(n) && n[e] ? n[e] : (t = angular.isDefined(i.uiMaskPlaceholderChar) && i.uiMaskPlaceholderChar ? i.uiMaskPlaceholderChar : "_", "space" === t.toLowerCase() ? " " : t[0])
                        }

                        function y() {
                            var e, t, n = P.split("");
                            O && !isNaN(O[0]) && angular.forEach(O, function(e) {
                                n[e] = "_"
                            }), e = n.join(""), t = e.replace(/[_]+/g, "_").split("_"), t = t.filter(function(e) {
                                return "" !== e
                            });
                            var r = 0;
                            return t.map(function(t) {
                                var n = e.indexOf(t, r);
                                return r = n + 1, {
                                    value: t,
                                    position: n
                                }
                            })
                        }

                        function b(e) {
                            var t = 0;
                            if (O = [], D = [], P = "", angular.isString(e)) {
                                I = 0;
                                var n = !1,
                                    r = 0,
                                    i = e.split(""),
                                    o = !1;
                                angular.forEach(i, function(e, i) {
                                    o ? (o = !1, P += e, t++) : J.escChar === e ? o = !0 : J.maskDefinitions[e] ? (O.push(t), P += $(i - r), D.push(J.maskDefinitions[e]), t++, n || I++, n = !1) : "?" === e ? (n = !0, r++) : (P += e, t++)
                                })
                            }
                            O.push(O.slice().pop() + 1), M = y(), q = O.length > 1
                        }

                        function w() {
                            if ((J.clearOnBlur || J.clearOnBlurPlaceholder && 0 === j.length && i.placeholder) && (F = 0, B = 0, U && 0 !== j.length || (V = "", r.val(""), e.$apply(function() {
                                    o.$pristine || o.$setViewValue("")
                                }))), j !== Z) {
                                var t = r.val(),
                                    n = "" === j && t && angular.isDefined(i.uiMaskPlaceholderChar) && "space" === i.uiMaskPlaceholderChar;
                                n && r.val(""), S(r[0]), n && r.val(t)
                            }
                            Z = j
                        }

                        function S(e) {
                            var t;
                            angular.isFunction(window.Event) && !e.fireEvent ? (t = new Event("change", {
                                view: window,
                                bubbles: !0,
                                cancelable: !1
                            }), e.dispatchEvent(t)) : "createEvent" in document ? (t = document.createEvent("HTMLEvents"), t.initEvent("change", !1, !0), e.dispatchEvent(t)) : e.fireEvent && e.fireEvent("onchange")
                        }

                        function C(e) {
                            "mousedown" === e.type ? r.bind("mouseout", k) : r.unbind("mouseout", k)
                        }

                        function k() {
                            B = R(this), r.unbind("mouseout", k)
                        }

                        function E(e) {
                            var t = 8 === e.which,
                                n = A(this) - 1 || 0,
                                i = 90 === e.which && e.ctrlKey;
                            if (t) {
                                for (; n >= 0;) {
                                    if (x(n)) {
                                        T(this, n + 1);
                                        break
                                    }
                                    n--
                                }
                                H = -1 === n
                            }
                            i && (r.val(""), e.preventDefault())
                        }

                        function _(t) {
                            t = t || {};
                            var n = t.which,
                                i = t.type;
                            if (16 !== n && 91 !== n) {
                                var a, s = r.val(),
                                    c = L,
                                    u = !1,
                                    l = g(s),
                                    f = N,
                                    p = A(this) || 0,
                                    d = F || 0,
                                    h = p - d,
                                    v = O[0],
                                    $ = O[l.length] || O.slice().shift(),
                                    y = B || 0,
                                    b = R(this) > 0,
                                    w = y > 0,
                                    S = s.length > c.length || y && s.length > c.length - y,
                                    C = s.length < c.length || y && s.length === c.length - y,
                                    k = n >= 37 && n <= 40 && t.shiftKey,
                                    E = 37 === n,
                                    _ = 8 === n || "keyup" !== i && C && -1 === h,
                                    D = 46 === n || "keyup" !== i && C && 0 === h && !w,
                                    M = (E || _ || "click" === i) && p > v;
                                if (B = R(this), !k && (!b || "click" !== i && "keyup" !== i && "focus" !== i)) {
                                    if (_ && H) return r.val(P), e.$apply(function() {
                                        o.$setViewValue("")
                                    }), void T(this, d);
                                    if ("input" === i && C && !w && l === f) {
                                        for (; _ && p > v && !x(p);) p--;
                                        for (; D && p < $ && -1 === O.indexOf(p);) p++;
                                        var I = O.indexOf(p);
                                        l = l.substring(0, I) + l.substring(I + 1), l !== f && (u = !0)
                                    }
                                    for (a = m(l), L = a, N = l, !u && s.length > a.length && (u = !0), r.val(a), u && e.$apply(function() {
                                            o.$setViewValue(a)
                                        }), S && p <= v && (p = v + 1), M && p--, p = p > $ ? $ : p < v ? v : p; !x(p) && p > v && p < $;) p += M ? -1 : 1;
                                    (M && p < $ || S && !x(d)) && p++, F = p, T(this, p)
                                }
                            }
                        }

                        function x(e) {
                            return O.indexOf(e) > -1
                        }

                        function A(e) {
                            if (!e) return 0;
                            if (void 0 !== e.selectionStart) return e.selectionStart;
                            if (document.selection && t(r[0])) {
                                e.focus();
                                var n = document.selection.createRange();
                                return n.moveStart("character", e.value ? -e.value.length : 0), n.text.length
                            }
                            return 0
                        }

                        function T(e, n) {
                            if (!e) return 0;
                            if (0 !== e.offsetWidth && 0 !== e.offsetHeight)
                                if (e.setSelectionRange) t(r[0]) && (e.focus(), e.setSelectionRange(n, n));
                                else if (e.createTextRange) {
                                var i = e.createTextRange();
                                i.collapse(!0), i.moveEnd("character", n), i.moveStart("character", n), i.select()
                            }
                        }

                        function R(e) {
                            return e ? void 0 !== e.selectionStart ? e.selectionEnd - e.selectionStart : window.getSelection ? window.getSelection().toString().length : document.selection ? document.selection.createRange().text.length : 0 : 0
                        }
                        var O, D, P, M, I, j, V, U, L, N, F, B, H, q = !1,
                            G = !1,
                            z = i.placeholder,
                            W = i.maxlength,
                            K = o.$isEmpty;
                        o.$isEmpty = function(e) {
                            return K(q ? g(e || "") : e)
                        };
                        var Y = !1;
                        i.$observe("modelViewValue", function(e) {
                            "true" === e && (Y = !0)
                        }), i.$observe("allowInvalidValue", function(e) {
                            J.allowInvalidValue = "" === e || !!e, u(o.$modelValue)
                        });
                        var J = {};
                        i.uiOptions ? (J = e.$eval("[" + i.uiOptions + "]"), J = angular.isObject(J[0]) ? function(e, t) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (void 0 === t[n] ? t[n] = angular.copy(e[n]) : angular.isObject(t[n]) && !angular.isArray(t[n]) && (t[n] = angular.extend({}, e[n], t[n])));
                            return t
                        }(n, J[0]) : n) : J = n, i.$observe("uiMask", a), angular.isDefined(i.uiMaskPlaceholder) ? i.$observe("uiMaskPlaceholder", s) : i.$observe("placeholder", s), angular.isDefined(i.uiMaskPlaceholderChar) && i.$observe("uiMaskPlaceholderChar", c), o.$formatters.unshift(u), o.$parsers.unshift(l);
                        var Z = r.val();
                        r.bind("mousedown mouseup", C), Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                            if (null === this) throw new TypeError;
                            var t = Object(this),
                                n = t.length >>> 0;
                            if (0 === n) return -1;
                            var r = 0;
                            if (arguments.length > 1 && (r = Number(arguments[1]), r !== r ? r = 0 : 0 !== r && r !== 1 / 0 && r !== -1 / 0 && (r = (r > 0 || -1) * Math.floor(Math.abs(r)))), r >= n) return -1;
                            for (var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0); i < n; i++)
                                if (i in t && t[i] === e) return i;
                            return -1
                        })
                    }
                }
            }
        }])
    }()
}, function(e, t) {
    /**
     * @license AngularJS v1.7.0
     * (c) 2010-2018 Google, Inc. http://angularjs.org
     * License: MIT
     */
    ! function(e) {
        "use strict";

        function t(e) {
            if (!w(e)) return li;
            b(e.objectMaxDepth) && (li.objectMaxDepth = n(e.objectMaxDepth) ? e.objectMaxDepth : NaN)
        }

        function n(e) {
            return k(e) && e > 0
        }

        function r(e, t) {
            t = t || Error;
            var n = "https://errors.angularjs.org/1.7.0/",
                r = n.replace(".", "\\.") + "[\\s\\S]*",
                i = new RegExp(r, "g");
            return function() {
                var r, o, a = arguments[0],
                    s = arguments[1],
                    c = "[" + (e ? e + ":" : "") + a + "] ",
                    u = K(arguments, 2).map(function(e) {
                        return _e(e, li.objectMaxDepth)
                    });
                for (c += s.replace(/\{\d+\}/g, function(e) {
                        var t = +e.slice(1, -1);
                        return t < u.length ? u[t].replace(i, "") : e
                    }), c += "\n" + n + (e ? e + "/" : "") + a, o = 0, r = "?"; o < u.length; o++, r = "&") c += r + "p" + o + "=" + encodeURIComponent(u[o]);
                return new t(c)
            }
        }

        function i(e) {
            if (null == e || R(e)) return !1;
            if (_(e) || C(e) || si && e instanceof si) return !0;
            var t = "length" in Object(e) && e.length;
            return k(t) && (t >= 0 && t - 1 in e || "function" == typeof e.item)
        }

        function o(e, t, n) {
            var r, a;
            if (e)
                if (A(e))
                    for (r in e) "prototype" !== r && "length" !== r && "name" !== r && e.hasOwnProperty(r) && t.call(n, e[r], r, e);
                else if (_(e) || i(e)) {
                var s = "object" != typeof e;
                for (r = 0, a = e.length; r < a; r++)(s || r in e) && t.call(n, e[r], r, e)
            } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
            else if (S(e))
                for (r in e) t.call(n, e[r], r, e);
            else if ("function" == typeof e.hasOwnProperty)
                for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e);
            else
                for (r in e) di.call(e, r) && t.call(n, e[r], r, e);
            return e
        }

        function a(e, t, n) {
            for (var r = Object.keys(e).sort(), i = 0; i < r.length; i++) t.call(n, e[r[i]], r[i]);
            return r
        }

        function s(e) {
            return function(t, n) {
                e(n, t)
            }
        }

        function c() {
            return ++Ci
        }

        function u(e, t) {
            t ? e.$$hashKey = t : delete e.$$hashKey
        }

        function l(e, t, n) {
            for (var r = e.$$hashKey, i = 0, o = t.length; i < o; ++i) {
                var a = t[i];
                if (w(a) || A(a))
                    for (var s = Object.keys(a), c = 0, f = s.length; c < f; c++) {
                        var p = s[c],
                            d = a[p];
                        n && w(d) ? E(d) ? e[p] = new Date(d.valueOf()) : T(d) ? e[p] = new RegExp(d) : d.nodeName ? e[p] = d.cloneNode(!0) : L(d) ? e[p] = d.clone() : (w(e[p]) || (e[p] = _(d) ? [] : {}), l(e[p], [d], !0)) : e[p] = d
                    }
            }
            return u(e, r), e
        }

        function f(e) {
            return l(e, gi.call(arguments, 1), !1)
        }

        function p(e) {
            return l(e, gi.call(arguments, 1), !0)
        }

        function d(e) {
            return parseInt(e, 10)
        }

        function h(e, t) {
            return f(Object.create(e), t)
        }

        function v() {}

        function g(e) {
            return e
        }

        function m(e) {
            return function() {
                return e
            }
        }

        function $(e) {
            return A(e.toString) && e.toString !== yi
        }

        function y(e) {
            return void 0 === e
        }

        function b(e) {
            return void 0 !== e
        }

        function w(e) {
            return null !== e && "object" == typeof e
        }

        function S(e) {
            return null !== e && "object" == typeof e && !bi(e)
        }

        function C(e) {
            return "string" == typeof e
        }

        function k(e) {
            return "number" == typeof e
        }

        function E(e) {
            return "[object Date]" === yi.call(e)
        }

        function _(e) {
            return Array.isArray(e) || e instanceof Array
        }

        function x(e) {
            switch (yi.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error
            }
        }

        function A(e) {
            return "function" == typeof e
        }

        function T(e) {
            return "[object RegExp]" === yi.call(e)
        }

        function R(e) {
            return e && e.window === e
        }

        function O(e) {
            return e && e.$evalAsync && e.$watch
        }

        function D(e) {
            return "[object File]" === yi.call(e)
        }

        function P(e) {
            return "[object FormData]" === yi.call(e)
        }

        function M(e) {
            return "[object Blob]" === yi.call(e)
        }

        function I(e) {
            return "boolean" == typeof e
        }

        function j(e) {
            return e && A(e.then)
        }

        function V(e) {
            return e && k(e.length) && Ei.test(yi.call(e))
        }

        function U(e) {
            return "[object ArrayBuffer]" === yi.call(e)
        }

        function L(e) {
            return !(!e || !(e.nodeName || e.prop && e.attr && e.find))
        }

        function N(e) {
            var t, n = {},
                r = e.split(",");
            for (t = 0; t < r.length; t++) n[r[t]] = !0;
            return n
        }

        function F(e) {
            return hi(e.nodeName || e[0] && e[0].nodeName)
        }

        function B(e, t) {
            return -1 !== Array.prototype.indexOf.call(e, t)
        }

        function H(e, t) {
            var n = e.indexOf(t);
            return n >= 0 && e.splice(n, 1), n
        }

        function q(e, t, r) {
            function i(e, t, n) {
                if (--n < 0) return "...";
                var r, i = t.$$hashKey;
                if (_(e))
                    for (var o = 0, s = e.length; o < s; o++) t.push(a(e[o], n));
                else if (S(e))
                    for (r in e) t[r] = a(e[r], n);
                else if (e && "function" == typeof e.hasOwnProperty)
                    for (r in e) e.hasOwnProperty(r) && (t[r] = a(e[r], n));
                else
                    for (r in e) di.call(e, r) && (t[r] = a(e[r], n));
                return u(t, i), t
            }

            function a(e, t) {
                if (!w(e)) return e;
                var n = c.indexOf(e);
                if (-1 !== n) return l[n];
                if (R(e) || O(e)) throw wi("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
                var r = !1,
                    o = s(e);
                return void 0 === o && (o = _(e) ? [] : Object.create(bi(e)), r = !0), c.push(e), l.push(o), r ? i(e, o, t) : o
            }

            function s(e) {
                switch (yi.call(e)) {
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return new e.constructor(a(e.buffer), e.byteOffset, e.length);
                    case "[object ArrayBuffer]":
                        if (!e.slice) {
                            var t = new ArrayBuffer(e.byteLength);
                            return new Uint8Array(t).set(new Uint8Array(e)), t
                        }
                        return e.slice(0);
                    case "[object Boolean]":
                    case "[object Number]":
                    case "[object String]":
                    case "[object Date]":
                        return new e.constructor(e.valueOf());
                    case "[object RegExp]":
                        var n = new RegExp(e.source, e.toString().match(/[^\/]*$/)[0]);
                        return n.lastIndex = e.lastIndex, n;
                    case "[object Blob]":
                        return new e.constructor([e], {
                            type: e.type
                        })
                }
                if (A(e.cloneNode)) return e.cloneNode(!0)
            }
            var c = [],
                l = [];
            if (r = n(r) ? r : NaN, t) {
                if (V(t) || U(t)) throw wi("cpta", "Can't copy! TypedArray destination cannot be mutated.");
                if (e === t) throw wi("cpi", "Can't copy! Source and destination are identical.");
                return _(t) ? t.length = 0 : o(t, function(e, n) {
                    "$$hashKey" !== n && delete t[n]
                }), c.push(e), l.push(t), i(e, t, r)
            }
            return a(e, r)
        }

        function G(e, t) {
            return e === t || e !== e && t !== t
        }

        function z(e, t) {
            if (e === t) return !0;
            if (null === e || null === t) return !1;
            if (e !== e && t !== t) return !0;
            var n, r, i, o = typeof e,
                a = typeof t;
            if (o === a && "object" === o) {
                if (!_(e)) {
                    if (E(e)) return !!E(t) && G(e.getTime(), t.getTime());
                    if (T(e)) return !!T(t) && e.toString() === t.toString();
                    if (O(e) || O(t) || R(e) || R(t) || _(t) || E(t) || T(t)) return !1;
                    i = we();
                    for (r in e)
                        if ("$" !== r.charAt(0) && !A(e[r])) {
                            if (!z(e[r], t[r])) return !1;
                            i[r] = !0
                        } for (r in t)
                        if (!(r in i) && "$" !== r.charAt(0) && b(t[r]) && !A(t[r])) return !1;
                    return !0
                }
                if (!_(t)) return !1;
                if ((n = e.length) === t.length) {
                    for (r = 0; r < n; r++)
                        if (!z(e[r], t[r])) return !1;
                    return !0
                }
            }
            return !1
        }

        function W(e, t, n) {
            return e.concat(gi.call(t, n))
        }

        function K(e, t) {
            return gi.call(e, t || 0)
        }

        function Y(e, t) {
            var n = arguments.length > 2 ? K(arguments, 2) : [];
            return !A(t) || t instanceof RegExp ? t : n.length ? function() {
                return arguments.length ? t.apply(e, W(n, arguments, 0)) : t.apply(e, n)
            } : function() {
                return arguments.length ? t.apply(e, arguments) : t.call(e)
            }
        }

        function J(t, n) {
            var r = n;
            return "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1) ? r = void 0 : R(n) ? r = "$WINDOW" : n && e.document === n ? r = "$DOCUMENT" : O(n) && (r = "$SCOPE"), r
        }

        function Z(e, t) {
            if (!y(e)) return k(t) || (t = t ? 2 : null), JSON.stringify(e, J, t)
        }

        function Q(e) {
            return C(e) ? JSON.parse(e) : e
        }

        function X(e, t) {
            e = e.replace(Ri, "");
            var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
            return ki(n) ? t : n
        }

        function ee(e, t) {
            return e = new Date(e.getTime()), e.setMinutes(e.getMinutes() + t), e
        }

        function te(e, t, n) {
            n = n ? -1 : 1;
            var r = e.getTimezoneOffset();
            return ee(e, n * (X(t, r) - r))
        }

        function ne(e) {
            e = si(e).clone().empty();
            var t = si("<div></div>").append(e).html();
            try {
                return e[0].nodeType === Vi ? hi(t) : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function(e, t) {
                    return "<" + hi(t)
                })
            } catch (e) {
                return hi(t)
            }
        }

        function re(e) {
            try {
                return decodeURIComponent(e)
            } catch (e) {}
        }

        function ie(e) {
            var t = {};
            return o((e || "").split("&"), function(e) {
                var n, r, i;
                e && (r = e = e.replace(/\+/g, "%20"), n = e.indexOf("="), -1 !== n && (r = e.substring(0, n), i = e.substring(n + 1)), r = re(r), b(r) && (i = !b(i) || re(i), di.call(t, r) ? _(t[r]) ? t[r].push(i) : t[r] = [t[r], i] : t[r] = i))
            }), t
        }

        function oe(e) {
            var t = [];
            return o(e, function(e, n) {
                _(e) ? o(e, function(e) {
                    t.push(se(n, !0) + (!0 === e ? "" : "=" + se(e, !0)))
                }) : t.push(se(n, !0) + (!0 === e ? "" : "=" + se(e, !0)))
            }), t.length ? t.join("&") : ""
        }

        function ae(e) {
            return se(e, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function se(e, t) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, t ? "%20" : "+")
        }

        function ce(e, t) {
            var n, r, i = Oi.length;
            for (r = 0; r < i; ++r)
                if (n = Oi[r] + t, C(n = e.getAttribute(n))) return n;
            return null
        }

        function ue(t) {
            var n = t.currentScript;
            if (!n) return !0;
            if (!(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)) return !1;
            var r = n.attributes;
            return [r.getNamedItem("src"), r.getNamedItem("href"), r.getNamedItem("xlink:href")].every(function(e) {
                if (!e) return !0;
                if (!e.value) return !1;
                var n = t.createElement("a");
                if (n.href = e.value, t.location.origin === n.origin) return !0;
                switch (n.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "blob:":
                    case "file:":
                    case "data:":
                        return !0;
                    default:
                        return !1
                }
            })
        }

        function le(t, n) {
            var r, i, a = {};
            if (o(Oi, function(e) {
                    var n = e + "app";
                    !r && t.hasAttribute && t.hasAttribute(n) && (r = t, i = t.getAttribute(n))
                }), o(Oi, function(e) {
                    var n, o = e + "app";
                    !r && (n = t.querySelector("[" + o.replace(":", "\\:") + "]")) && (r = n, i = n.getAttribute(o))
                }), r) {
                if (!Di) return void e.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match.");
                a.strictDi = null !== ce(r, "strict-di"), n(r, i ? [i] : [], a)
            }
        }

        function fe(t, n, r) {
            w(r) || (r = {}), r = f({
                strictDi: !1
            }, r);
            var i = function() {
                    if (t = si(t), t.injector()) {
                        var i = t[0] === e.document ? "document" : ne(t);
                        throw wi("btstrpd", "App already bootstrapped with this element '{0}'", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    n = n || [], n.unshift(["$provide", function(e) {
                        e.value("$rootElement", t)
                    }]), r.debugInfoEnabled && n.push(["$compileProvider", function(e) {
                        e.debugInfoEnabled(!0)
                    }]), n.unshift("ng");
                    var o = vt(n, r.strictDi);
                    return o.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(e, t, n, r) {
                        e.$apply(function() {
                            t.data("$injector", r), n(t)(e)
                        })
                    }]), o
                },
                a = /^NG_ENABLE_DEBUG_INFO!/,
                s = /^NG_DEFER_BOOTSTRAP!/;
            if (e && a.test(e.name) && (r.debugInfoEnabled = !0, e.name = e.name.replace(a, "")), e && !s.test(e.name)) return i();
            e.name = e.name.replace(s, ""), Si.resumeBootstrap = function(e) {
                return o(e, function(e) {
                    n.push(e)
                }), i()
            }, A(Si.resumeDeferredBootstrap) && Si.resumeDeferredBootstrap()
        }

        function pe() {
            e.name = "NG_ENABLE_DEBUG_INFO!" + e.name, e.location.reload()
        }

        function de(e) {
            var t = Si.element(e).injector();
            if (!t) throw wi("test", "no injector found for element argument to getTestability");
            return t.get("$$testability")
        }

        function he(e, t) {
            return t = t || "_", e.replace(Pi, function(e, n) {
                return (n ? t : "") + e.toLowerCase()
            })
        }

        function ve() {
            var t;
            if (!Mi) {
                var n = Ti();
                ci = y(n) ? e.jQuery : n ? e[n] : void 0, ci && ci.fn.on ? (si = ci, f(ci.fn, {
                    scope: eo.scope,
                    isolateScope: eo.isolateScope,
                    controller: eo.controller,
                    injector: eo.injector,
                    inheritedData: eo.inheritedData
                })) : si = Ue, t = si.cleanData, si.cleanData = function(e) {
                    for (var n, r, i = 0; null != (r = e[i]); i++)(n = si._data(r).events) && n.$destroy && si(r).triggerHandler("$destroy");
                    t(e)
                }, Si.element = si, Mi = !0
            }
        }

        function ge(e, t, n) {
            if (!e) throw wi("areq", "Argument '{0}' is {1}", t || "?", n || "required");
            return e
        }

        function me(e, t, n) {
            return n && _(e) && (e = e[e.length - 1]), ge(A(e), t, "not a function, got " + (e && "object" == typeof e ? e.constructor.name || "Object" : typeof e)), e
        }

        function $e(e, t) {
            if ("hasOwnProperty" === e) throw wi("badname", "hasOwnProperty is not a valid {0} name", t)
        }

        function ye(e, t, n) {
            if (!t) return e;
            for (var r, i = t.split("."), o = e, a = i.length, s = 0; s < a; s++) r = i[s], e && (e = (o = e)[r]);
            return !n && A(e) ? Y(o, e) : e
        }

        function be(e) {
            for (var t, n = e[0], r = e[e.length - 1], i = 1; n !== r && (n = n.nextSibling); i++)(t || e[i] !== n) && (t || (t = si(gi.call(e, 0, i))), t.push(n));
            return t || e
        }

        function we() {
            return Object.create(null)
        }

        function Se(e) {
            if (null == e) return "";
            switch (typeof e) {
                case "string":
                    break;
                case "number":
                    e = "" + e;
                    break;
                default:
                    e = !$(e) || _(e) || E(e) ? Z(e) : e.toString()
            }
            return e
        }

        function Ce(e) {
            function t(e, t, n) {
                return e[t] || (e[t] = n())
            }
            var n = r("$injector"),
                i = r("ng"),
                o = t(e, "angular", Object);
            return o.$$minErr = o.$$minErr || r, t(o, "module", function() {
                var e = {};
                return function(r, o, a) {
                    var s = {};
                    return function(e, t) {
                        if ("hasOwnProperty" === e) throw i("badname", "hasOwnProperty is not a valid {0} name", t)
                    }(r, "module"), o && e.hasOwnProperty(r) && (e[r] = null), t(e, r, function() {
                        function e(e, t, n, r) {
                            return r || (r = c),
                                function() {
                                    return r[n || "push"]([e, t, arguments]), p
                                }
                        }

                        function t(e, t, n) {
                            return n || (n = c),
                                function(i, o) {
                                    return o && A(o) && (o.$$moduleName = r), n.push([e, t, arguments]), p
                                }
                        }
                        if (!o) throw n("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", r);
                        var c = [],
                            u = [],
                            l = [],
                            f = e("$injector", "invoke", "push", u),
                            p = {
                                _invokeQueue: c,
                                _configBlocks: u,
                                _runBlocks: l,
                                info: function(e) {
                                    if (b(e)) {
                                        if (!w(e)) throw i("aobj", "Argument '{0}' must be an object", "value");
                                        return s = e, this
                                    }
                                    return s
                                },
                                requires: o,
                                name: r,
                                provider: t("$provide", "provider"),
                                factory: t("$provide", "factory"),
                                service: t("$provide", "service"),
                                value: e("$provide", "value"),
                                constant: e("$provide", "constant", "unshift"),
                                decorator: t("$provide", "decorator", u),
                                animation: t("$animateProvider", "register"),
                                filter: t("$filterProvider", "register"),
                                controller: t("$controllerProvider", "register"),
                                directive: t("$compileProvider", "directive"),
                                component: t("$compileProvider", "component"),
                                config: f,
                                run: function(e) {
                                    return l.push(e), this
                                }
                            };
                        return a && f(a), p
                    })
                }
            })
        }

        function ke(e, t) {
            if (_(e)) {
                t = t || [];
                for (var n = 0, r = e.length; n < r; n++) t[n] = e[n]
            } else if (w(e)) {
                t = t || {};
                for (var i in e) "$" === i.charAt(0) && "$" === i.charAt(1) || (t[i] = e[i])
            }
            return t || e
        }

        function Ee(e, t) {
            var r = [];
            return n(t) && (e = Si.copy(e, null, t)), JSON.stringify(e, function(e, t) {
                if (t = J(e, t), w(t)) {
                    if (r.indexOf(t) >= 0) return "...";
                    r.push(t)
                }
                return t
            })
        }

        function _e(e, t) {
            return "function" == typeof e ? e.toString().replace(/ \{[\s\S]*$/, "") : y(e) ? "undefined" : "string" != typeof e ? Ee(e, t) : e
        }

        function xe(n) {
            f(n, {
                errorHandlingConfig: t,
                bootstrap: fe,
                copy: q,
                extend: f,
                merge: p,
                equals: z,
                element: si,
                forEach: o,
                injector: vt,
                noop: v,
                bind: Y,
                toJson: Z,
                fromJson: Q,
                identity: g,
                isUndefined: y,
                isDefined: b,
                isString: C,
                isFunction: A,
                isObject: w,
                isNumber: k,
                isElement: L,
                isArray: _,
                version: Fi,
                isDate: E,
                callbacks: {
                    $$counter: 0
                },
                getTestability: de,
                reloadWithDebugInfo: pe,
                $$minErr: r,
                $$csp: Ai,
                $$encodeUriSegment: ae,
                $$encodeUriQuery: se,
                $$lowercase: hi,
                $$stringify: Se,
                $$uppercase: vi
            }), ui = Ce(e), ui("ng", ["ngLocale"], ["$provide", function(e) {
                e.provider({
                    $$sanitizeUri: Ln
                }), e.provider("$compile", _t).directive({
                    a: ha,
                    input: Ma,
                    textarea: Ma,
                    form: ba,
                    script: As,
                    select: Os,
                    option: Ds,
                    ngBind: Va,
                    ngBindHtml: La,
                    ngBindTemplate: Ua,
                    ngClass: Fa,
                    ngClassEven: Ha,
                    ngClassOdd: Ba,
                    ngCloak: qa,
                    ngController: Ga,
                    ngForm: wa,
                    ngHide: ws,
                    ngIf: Ka,
                    ngInclude: Ya,
                    ngInit: Za,
                    ngNonBindable: ps,
                    ngPluralize: gs,
                    ngRepeat: ms,
                    ngShow: bs,
                    ngStyle: Ss,
                    ngSwitch: Cs,
                    ngSwitchWhen: ks,
                    ngSwitchDefault: Es,
                    ngOptions: vs,
                    ngTransclude: xs,
                    ngModel: us,
                    ngList: Qa,
                    ngChange: Na,
                    pattern: Ms,
                    ngPattern: Ms,
                    required: Ps,
                    ngRequired: Ps,
                    minlength: js,
                    ngMinlength: js,
                    maxlength: Is,
                    ngMaxlength: Is,
                    ngValue: ja,
                    ngModelOptions: fs
                }).directive({
                    ngInclude: Ja
                }).directive(va).directive(za), e.provider({
                    $anchorScroll: gt,
                    $animate: yo,
                    $animateCss: So,
                    $$animateJs: mo,
                    $$animateQueue: $o,
                    $$AnimateRunner: wo,
                    $$animateAsyncRun: bo,
                    $browser: St,
                    $cacheFactory: Ct,
                    $controller: Dt,
                    $document: Pt,
                    $$isDocumentHidden: Mt,
                    $exceptionHandler: It,
                    $filter: ir,
                    $$forceReflow: To,
                    $interpolate: Yt,
                    $interval: Jt,
                    $http: Gt,
                    $httpParamSerializer: Vt,
                    $httpParamSerializerJQLike: Ut,
                    $httpBackend: Wt,
                    $xhrFactory: zt,
                    $jsonpCallbacks: Uo,
                    $location: dn,
                    $log: hn,
                    $parse: Rn,
                    $rootScope: Un,
                    $q: On,
                    $$q: Dn,
                    $sce: qn,
                    $sceDelegate: Hn,
                    $sniffer: Gn,
                    $templateCache: kt,
                    $templateRequest: zn,
                    $$testability: Wn,
                    $timeout: Kn,
                    $window: tr,
                    $$rAF: Vn,
                    $$jqLite: ct,
                    $$Map: ao,
                    $$cookieReader: rr
                })
            }]).info({
                angularVersion: "1.7.0"
            })
        }

        function Ae() {
            return ++Hi
        }

        function Te(e) {
            return Oe(e.replace(Gi, "ms-"))
        }

        function Re(e, t) {
            return t.toUpperCase()
        }

        function Oe(e) {
            return e.replace(qi, Re)
        }

        function De(e) {
            return !Yi.test(e)
        }

        function Pe(e) {
            var t = e.nodeType;
            return t === Ii || !t || t === Li
        }

        function Me(e) {
            for (var t in Bi[e.ng339]) return !0;
            return !1
        }

        function Ie(e, t) {
            var n, r, i, a, s = t.createDocumentFragment(),
                c = [];
            if (De(e)) c.push(t.createTextNode(e));
            else {
                for (n = s.appendChild(t.createElement("div")), r = (Ji.exec(e) || ["", ""])[1].toLowerCase(), i = Qi[r] || Qi._default, n.innerHTML = i[1] + e.replace(Zi, "<$1></$2>") + i[2], a = i[0]; a--;) n = n.lastChild;
                c = W(c, n.childNodes), n = s.firstChild, n.textContent = ""
            }
            return s.textContent = "", s.innerHTML = "", o(c, function(e) {
                s.appendChild(e)
            }), s
        }

        function je(t, n) {
            n = n || e.document;
            var r;
            return (r = Ki.exec(t)) ? [n.createElement(r[1])] : (r = Ie(t, n)) ? r.childNodes : []
        }

        function Ve(e, t) {
            var n = e.parentNode;
            n && n.replaceChild(t, e), t.appendChild(e)
        }

        function Ue(e) {
            if (e instanceof Ue) return e;
            var t;
            if (C(e) && (e = _i(e), t = !0), !(this instanceof Ue)) {
                if (t && "<" !== e.charAt(0)) throw Wi("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new Ue(e)
            }
            t ? Je(this, je(e)) : A(e) ? nt(e) : Je(this, e)
        }

        function Le(e) {
            return e.cloneNode(!0)
        }

        function Ne(e, t) {
            !t && Pe(e) && si.cleanData([e]), e.querySelectorAll && si.cleanData(e.querySelectorAll("*"))
        }

        function Fe(e) {
            var t;
            for (t in e) return !1;
            return !0
        }

        function Be(e) {
            var t = e.ng339,
                n = t && Bi[t],
                r = n && n.events,
                i = n && n.data;
            i && !Fe(i) || r && !Fe(r) || (delete Bi[t], e.ng339 = void 0)
        }

        function He(e, t, n, r) {
            if (b(r)) throw Wi("offargs", "jqLite#off() does not support the `selector` argument");
            var i = Ge(e),
                a = i && i.events,
                s = i && i.handle;
            if (s) {
                if (t) {
                    var c = function(t) {
                        var r = a[t];
                        b(n) && H(r || [], n), b(n) && r && r.length > 0 || (e.removeEventListener(t, s), delete a[t])
                    };
                    o(t.split(" "), function(e) {
                        c(e), zi[e] && c(zi[e])
                    })
                } else
                    for (t in a) "$destroy" !== t && e.removeEventListener(t, s), delete a[t];
                Be(e)
            }
        }

        function qe(e, t) {
            var n = e.ng339,
                r = n && Bi[n];
            r && (t ? delete r.data[t] : r.data = {}, Be(e))
        }

        function Ge(e, t) {
            var n = e.ng339,
                r = n && Bi[n];
            return t && !r && (e.ng339 = n = Ae(), r = Bi[n] = {
                events: {},
                data: {},
                handle: void 0
            }), r
        }

        function ze(e, t, n) {
            if (Pe(e)) {
                var r, i = b(n),
                    o = !i && t && !w(t),
                    a = !t,
                    s = Ge(e, !o),
                    c = s && s.data;
                if (i) c[Oe(t)] = n;
                else {
                    if (a) return c;
                    if (o) return c && c[Oe(t)];
                    for (r in t) c[Oe(r)] = t[r]
                }
            }
        }

        function We(e, t) {
            return !!e.getAttribute && (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + t + " ") > -1
        }

        function Ke(e, t) {
            if (t && e.setAttribute) {
                var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                    r = n;
                o(t.split(" "), function(e) {
                    e = _i(e), r = r.replace(" " + e + " ", " ")
                }), r !== n && e.setAttribute("class", _i(r))
            }
        }

        function Ye(e, t) {
            if (t && e.setAttribute) {
                var n = (" " + (e.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " "),
                    r = n;
                o(t.split(" "), function(e) {
                    e = _i(e), -1 === r.indexOf(" " + e + " ") && (r += e + " ")
                }), r !== n && e.setAttribute("class", _i(r))
            }
        }

        function Je(e, t) {
            if (t)
                if (t.nodeType) e[e.length++] = t;
                else {
                    var n = t.length;
                    if ("number" == typeof n && t.window !== t) {
                        if (n)
                            for (var r = 0; r < n; r++) e[e.length++] = t[r]
                    } else e[e.length++] = t
                }
        }

        function Ze(e, t) {
            return Qe(e, "$" + (t || "ngController") + "Controller")
        }

        function Qe(e, t, n) {
            e.nodeType === Li && (e = e.documentElement);
            for (var r = _(t) ? t : [t]; e;) {
                for (var i = 0, o = r.length; i < o; i++)
                    if (b(n = si.data(e, r[i]))) return n;
                e = e.parentNode || e.nodeType === Ni && e.host
            }
        }

        function Xe(e) {
            for (Ne(e, !0); e.firstChild;) e.removeChild(e.firstChild)
        }

        function et(e, t) {
            t || Ne(e);
            var n = e.parentNode;
            n && n.removeChild(e)
        }

        function tt(t, n) {
            n = n || e, "complete" === n.document.readyState ? n.setTimeout(t) : si(n).on("load", t)
        }

        function nt(t) {
            function n() {
                e.document.removeEventListener("DOMContentLoaded", n), e.removeEventListener("load", n), t()
            }
            "complete" === e.document.readyState ? e.setTimeout(t) : (e.document.addEventListener("DOMContentLoaded", n), e.addEventListener("load", n))
        }

        function rt(e, t) {
            var n = to[t.toLowerCase()];
            return n && no[F(e)] && n
        }

        function it(e) {
            return ro[e]
        }

        function ot(e, t) {
            var n = function(n, r) {
                n.isDefaultPrevented = function() {
                    return n.defaultPrevented
                };
                var i = t[r || n.type],
                    o = i ? i.length : 0;
                if (o) {
                    if (y(n.immediatePropagationStopped)) {
                        var a = n.stopImmediatePropagation;
                        n.stopImmediatePropagation = function() {
                            n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), a && a.call(n)
                        }
                    }
                    n.isImmediatePropagationStopped = function() {
                        return !0 === n.immediatePropagationStopped
                    };
                    var s = i.specialHandlerWrapper || at;
                    o > 1 && (i = ke(i));
                    for (var c = 0; c < o; c++) n.isImmediatePropagationStopped() || s(e, n, i[c])
                }
            };
            return n.elem = e, n
        }

        function at(e, t, n) {
            n.call(e, t)
        }

        function st(e, t, n) {
            var r = t.relatedTarget;
            r && (r === e || Xi.call(e, r)) || n.call(e, t)
        }

        function ct() {
            this.$get = function() {
                return f(Ue, {
                    hasClass: function(e, t) {
                        return e.attr && (e = e[0]), We(e, t)
                    },
                    addClass: function(e, t) {
                        return e.attr && (e = e[0]), Ye(e, t)
                    },
                    removeClass: function(e, t) {
                        return e.attr && (e = e[0]), Ke(e, t)
                    }
                })
            }
        }

        function ut(e, t) {
            var n = e && e.$$hashKey;
            if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
            var r = typeof e;
            return n = "function" === r || "object" === r && null !== e ? e.$$hashKey = r + ":" + (t || c)() : r + ":" + e
        }

        function lt() {
            this._keys = [], this._values = [], this._lastKey = NaN, this._lastIndex = -1
        }

        function ft(e) {
            return Function.prototype.toString.call(e)
        }

        function pt(e) {
            var t = ft(e).replace(fo, "");
            return t.match(so) || t.match(co)
        }

        function dt(e) {
            var t = pt(e);
            return t ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function ht(e, t, n) {
            var r, i, a;
            if ("function" == typeof e) {
                if (!(r = e.$inject)) {
                    if (r = [], e.length) {
                        if (t) throw C(n) && n || (n = e.name || dt(e)), po("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", n);
                        i = pt(e), o(i[1].split(uo), function(e) {
                            e.replace(lo, function(e, t, n) {
                                r.push(n)
                            })
                        })
                    }
                    e.$inject = r
                }
            } else _(e) ? (a = e.length - 1, me(e[a], "fn"), r = e.slice(0, a)) : me(e, "fn", !0);
            return r
        }

        function vt(e, t) {
            function n(e) {
                return function(t, n) {
                    if (!w(t)) return e(t, n);
                    o(t, s(e))
                }
            }

            function r(e, t) {
                if ($e(e, "service"), (A(t) || _(t)) && (t = S.instantiate(t)), !t.$get) throw po("pget", "Provider '{0}' must define $get factory method.", e);
                return b[e + v] = t
            }

            function i(e, t) {
                return function() {
                    var n = x.invoke(t, this);
                    if (y(n)) throw po("undef", "Provider '{0}' must return a value from $get factory method.", e);
                    return n
                }
            }

            function a(e, t, n) {
                return r(e, {
                    $get: !1 !== n ? i(e, t) : t
                })
            }

            function c(e, t) {
                return a(e, ["$injector", function(e) {
                    return e.instantiate(t)
                }])
            }

            function u(e, t) {
                return a(e, m(t), !1)
            }

            function l(e, t) {
                $e(e, "constant"), b[e] = t, k[e] = t
            }

            function f(e, t) {
                var n = S.get(e + v),
                    r = n.$get;
                n.$get = function() {
                    var e = x.invoke(r, n);
                    return x.invoke(t, null, {
                        $delegate: e
                    })
                }
            }

            function p(e) {
                ge(y(e) || _(e), "modulesToLoad", "not an array");
                var t, n = [];
                return o(e, function(e) {
                    function r(e) {
                        var t, n;
                        for (t = 0, n = e.length; t < n; t++) {
                            var r = e[t],
                                i = S.get(r[0]);
                            i[r[1]].apply(i, r[2])
                        }
                    }
                    if (!$.get(e)) {
                        $.set(e, !0);
                        try {
                            C(e) ? (t = ui(e), x.modules[e] = t, n = n.concat(p(t.requires)).concat(t._runBlocks), r(t._invokeQueue), r(t._configBlocks)) : A(e) ? n.push(S.invoke(e)) : _(e) ? n.push(S.invoke(e)) : me(e, "module")
                        } catch (t) {
                            throw _(e) && (e = e[e.length - 1]), t.message && t.stack && -1 === t.stack.indexOf(t.message) && (t = t.message + "\n" + t.stack), po("modulerr", "Failed to instantiate module {0} due to:\n{1}", e, t.stack || t.message || t)
                        }
                    }
                }), n
            }

            function d(e, n) {
                function r(t, r) {
                    if (e.hasOwnProperty(t)) {
                        if (e[t] === h) throw po("cdep", "Circular dependency found: {0}", t + " <- " + g.join(" <- "));
                        return e[t]
                    }
                    try {
                        return g.unshift(t), e[t] = h, e[t] = n(t, r), e[t]
                    } catch (n) {
                        throw e[t] === h && delete e[t], n
                    } finally {
                        g.shift()
                    }
                }

                function i(e, n, i) {
                    for (var o = [], a = vt.$$annotate(e, t, i), s = 0, c = a.length; s < c; s++) {
                        var u = a[s];
                        if ("string" != typeof u) throw po("itkn", "Incorrect injection token! Expected service name as string, got {0}", u);
                        o.push(n && n.hasOwnProperty(u) ? n[u] : r(u, i))
                    }
                    return o
                }

                function o(e) {
                    if (ai || "function" != typeof e) return !1;
                    var t = e.$$ngIsClass;
                    return I(t) || (t = e.$$ngIsClass = /^class\b/.test(ft(e))), t
                }

                function a(e, t, n, r) {
                    "string" == typeof n && (r = n, n = null);
                    var a = i(e, n, r);
                    return _(e) && (e = e[e.length - 1]), o(e) ? (a.unshift(null), new(Function.prototype.bind.apply(e, a))) : e.apply(t, a)
                }

                function s(e, t, n) {
                    var r = _(e) ? e[e.length - 1] : e,
                        o = i(e, t, n);
                    return o.unshift(null), new(Function.prototype.bind.apply(r, o))
                }
                return {
                    invoke: a,
                    instantiate: s,
                    get: r,
                    annotate: vt.$$annotate,
                    has: function(t) {
                        return b.hasOwnProperty(t + v) || e.hasOwnProperty(t)
                    }
                }
            }
            t = !0 === t;
            var h = {},
                v = "Provider",
                g = [],
                $ = new oo,
                b = {
                    $provide: {
                        provider: n(r),
                        factory: n(a),
                        service: n(c),
                        value: n(u),
                        constant: n(l),
                        decorator: f
                    }
                },
                S = b.$injector = d(b, function(e, t) {
                    throw Si.isString(t) && g.push(t), po("unpr", "Unknown provider: {0}", g.join(" <- "))
                }),
                k = {},
                E = d(k, function(e, t) {
                    var n = S.get(e + v, t);
                    return x.invoke(n.$get, n, void 0, e)
                }),
                x = E;
            b["$injector" + v] = {
                $get: m(E)
            }, x.modules = S.modules = we();
            var T = p(e);
            return x = E.get("$injector"), x.strictDi = t, o(T, function(e) {
                e && x.invoke(e)
            }), x.loadNewModules = function(e) {
                o(p(e), function(e) {
                    e && x.invoke(e)
                })
            }, x
        }

        function gt() {
            var e = !0;
            this.disableAutoScrolling = function() {
                e = !1
            }, this.$get = ["$window", "$location", "$rootScope", function(t, n, r) {
                function i(e) {
                    var t = null;
                    return Array.prototype.some.call(e, function(e) {
                        if ("a" === F(e)) return t = e, !0
                    }), t
                }

                function o() {
                    var e = s.yOffset;
                    if (A(e)) e = e();
                    else if (L(e)) {
                        var n = e[0],
                            r = t.getComputedStyle(n);
                        e = "fixed" !== r.position ? 0 : n.getBoundingClientRect().bottom
                    } else k(e) || (e = 0);
                    return e
                }

                function a(e) {
                    if (e) {
                        e.scrollIntoView();
                        var n = o();
                        if (n) {
                            var r = e.getBoundingClientRect().top;
                            t.scrollBy(0, r - n)
                        }
                    } else t.scrollTo(0, 0)
                }

                function s(e) {
                    e = C(e) ? e : k(e) ? e.toString() : n.hash();
                    var t;
                    e ? (t = c.getElementById(e)) ? a(t) : (t = i(c.getElementsByName(e))) ? a(t) : "top" === e && a(null) : a(null)
                }
                var c = t.document;
                return e && r.$watch(function() {
                    return n.hash()
                }, function(e, t) {
                    e === t && "" === e || tt(function() {
                        r.$evalAsync(s)
                    })
                }), s
            }]
        }

        function mt(e, t) {
            return e || t ? e ? t ? (_(e) && (e = e.join(" ")), _(t) && (t = t.join(" ")), e + " " + t) : e : t : ""
        }

        function $t(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if (n.nodeType === vo) return n
            }
        }

        function yt(e) {
            C(e) && (e = e.split(" "));
            var t = we();
            return o(e, function(e) {
                e.length && (t[e] = !0)
            }), t
        }

        function bt(e) {
            return w(e) ? e : {}
        }

        function wt(e, t, n, r) {
            function i(e) {
                try {
                    e.apply(null, K(arguments, 1))
                } finally {
                    if (0 === --m)
                        for (; $.length;) try {
                            $.pop()()
                        } catch (e) {
                            n.error(e)
                        }
                }
            }

            function a(e) {
                var t = e.indexOf("#");
                return -1 === t ? "" : e.substr(t)
            }

            function s() {
                k = null, u()
            }

            function c() {
                b = E(), b = y(b) ? null : b, z(b, A) && (b = A), A = b, w = b
            }

            function u() {
                var e = w;
                c(), S === l.url() && e === b || (S = l.url(), w = b, o(_, function(e) {
                    e(l.url(), b)
                }))
            }
            var l = this,
                f = e.location,
                p = e.history,
                d = e.setTimeout,
                h = e.clearTimeout,
                g = {};
            l.isMock = !1;
            var m = 0,
                $ = [];
            l.$$completeOutstandingRequest = i, l.$$incOutstandingRequestCount = function() {
                m++
            }, l.notifyWhenNoOutstandingRequests = function(e) {
                0 === m ? e() : $.push(e)
            };
            var b, w, S = f.href,
                C = t.find("base"),
                k = null,
                E = r.history ? function() {
                    try {
                        return p.state
                    } catch (e) {}
                } : v;
            c(), l.url = function(t, n, i) {
                if (y(i) && (i = null), f !== e.location && (f = e.location), p !== e.history && (p = e.history), t) {
                    var o = w === i;
                    if (S === t && (!r.history || o)) return l;
                    var s = S && rn(S) === rn(t);
                    return S = t, w = i, !r.history || s && o ? (s || (k = t), n ? f.replace(t) : s ? f.hash = a(t) : f.href = t, f.href !== t && (k = t)) : (p[n ? "replaceState" : "pushState"](i, "", t), c()), k && (k = t), l
                }
                return k || f.href
            }, l.state = function() {
                return b
            };
            var _ = [],
                x = !1,
                A = null;
            l.onUrlChange = function(t) {
                return x || (r.history && si(e).on("popstate", s), si(e).on("hashchange", s), x = !0), _.push(t), t
            }, l.$$applicationDestroyed = function() {
                si(e).off("hashchange popstate", s)
            }, l.$$checkUrlChange = u, l.baseHref = function() {
                var e = C.attr("href");
                return e ? e.replace(/^(https?:)?\/\/[^\/]*/, "") : ""
            }, l.defer = function(e, t) {
                var n;
                return m++, n = d(function() {
                    delete g[n], i(e)
                }, t || 0), g[n] = !0, n
            }, l.defer.cancel = function(e) {
                return !!g[e] && (delete g[e], h(e), i(v), !0)
            }
        }

        function St() {
            this.$get = ["$window", "$log", "$sniffer", "$document", function(e, t, n, r) {
                return new wt(e, r, t, n)
            }]
        }

        function Ct() {
            this.$get = function() {
                function e(e, n) {
                    function i(e) {
                        e !== p && (d ? d === e && (d = e.n) : d = e, o(e.n, e.p), o(e, p), p = e, p.n = null)
                    }

                    function o(e, t) {
                        e !== t && (e && (e.p = t), t && (t.n = e))
                    }
                    if (e in t) throw r("$cacheFactory")("iid", "CacheId '{0}' is already taken!", e);
                    var a = 0,
                        s = f({}, n, {
                            id: e
                        }),
                        c = we(),
                        u = n && n.capacity || Number.MAX_VALUE,
                        l = we(),
                        p = null,
                        d = null;
                    return t[e] = {
                        put: function(e, t) {
                            if (!y(t)) {
                                if (u < Number.MAX_VALUE) {
                                    i(l[e] || (l[e] = {
                                        key: e
                                    }))
                                }
                                return e in c || a++, c[e] = t, a > u && this.remove(d.key), t
                            }
                        },
                        get: function(e) {
                            if (u < Number.MAX_VALUE) {
                                var t = l[e];
                                if (!t) return;
                                i(t)
                            }
                            return c[e]
                        },
                        remove: function(e) {
                            if (u < Number.MAX_VALUE) {
                                var t = l[e];
                                if (!t) return;
                                t === p && (p = t.p), t === d && (d = t.n), o(t.n, t.p), delete l[e]
                            }
                            e in c && (delete c[e], a--)
                        },
                        removeAll: function() {
                            c = we(), a = 0, l = we(), p = d = null
                        },
                        destroy: function() {
                            c = null, s = null, l = null, delete t[e]
                        },
                        info: function() {
                            return f({}, s, {
                                size: a
                            })
                        }
                    }
                }
                var t = {};
                return e.info = function() {
                    var e = {};
                    return o(t, function(t, n) {
                        e[n] = t.info()
                    }), e
                }, e.get = function(e) {
                    return t[e]
                }, e
            }
        }

        function kt() {
            this.$get = ["$cacheFactory", function(e) {
                return e("templates")
            }]
        }

        function Et() {}

        function _t(t, n) {
            function r(e, t, n) {
                var r = /^([@&<]|=(\*?))(\??)\s*([\w$]*)$/,
                    i = we();
                return o(e, function(e, o) {
                    if ((e = e.trim()) in T) return void(i[o] = T[e]);
                    var a = e.match(r);
                    if (!a) throw Co("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", t, o, e, n ? "controller bindings definition" : "isolate scope definition");
                    i[o] = {
                        mode: a[1][0],
                        collection: "*" === a[2],
                        optional: "?" === a[3],
                        attrName: a[4] || o
                    }, a[4] && (T[e] = i[o])
                }), i
            }

            function i(e, t) {
                var n = {
                    isolateScope: null,
                    bindToController: null
                };
                if (w(e.scope) && (!0 === e.bindToController ? (n.bindToController = r(e.scope, t, !0), n.isolateScope = {}) : n.isolateScope = r(e.scope, t, !1)), w(e.bindToController) && (n.bindToController = r(e.bindToController, t, !0)), n.bindToController && !e.controller) throw Co("noctrl", "Cannot bind to controller without directive '{0}'s controller.", t);
                return n
            }

            function a(e) {
                var t = e.charAt(0);
                if (!t || t !== hi(t)) throw Co("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", e);
                if (e !== e.trim()) throw Co("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", e)
            }

            function c(e) {
                var t = e.require || e.controller && e.name;
                return !_(t) && w(t) && o(t, function(e, n) {
                    var r = e.match(k);
                    e.substring(r[0].length) || (t[n] = r[0] + n)
                }), t
            }

            function u(e, t) {
                if (e && (!C(e) || !/[EACM]/.test(e))) throw Co("badrestrict", "Restrict property '{0}' of directive '{1}' is invalid", e, t);
                return e || "EA"
            }
            var l = {},
                p = "Directive",
                d = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
                $ = /(([\w-]+)(?::([^;]+))?;?)/,
                S = N("ngSrc,ngSrcset,src,srcset"),
                k = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                E = /^(on[a-z]+|formaction)$/,
                T = we();
            this.directive = function e(n, r) {
                return ge(n, "name"), $e(n, "directive"), C(n) ? (a(n), ge(r, "directiveFactory"), l.hasOwnProperty(n) || (l[n] = [], t.factory(n + p, ["$injector", "$exceptionHandler", function(e, t) {
                    var r = [];
                    return o(l[n], function(i, o) {
                        try {
                            var a = e.invoke(i);
                            A(a) ? a = {
                                compile: m(a)
                            } : !a.compile && a.link && (a.compile = m(a.link)), a.priority = a.priority || 0, a.index = o, a.name = a.name || n, a.require = c(a), a.restrict = u(a.restrict, n), a.$$moduleName = i.$$moduleName, r.push(a)
                        } catch (e) {
                            t(e)
                        }
                    }), r
                }])), l[n].push(r)) : o(n, s(e)), this
            }, this.component = function e(t, n) {
                function r(e) {
                    function t(t) {
                        return A(t) || _(t) ? function(n, r) {
                            return e.invoke(t, this, {
                                $element: n,
                                $attrs: r
                            })
                        } : t
                    }
                    var r = n.template || n.templateUrl ? n.template : "",
                        a = {
                            controller: i,
                            controllerAs: Ot(n.controller) || n.controllerAs || "$ctrl",
                            template: t(r),
                            templateUrl: t(n.templateUrl),
                            transclude: n.transclude,
                            scope: {},
                            bindToController: n.bindings || {},
                            restrict: "E",
                            require: n.require
                        };
                    return o(n, function(e, t) {
                        "$" === t.charAt(0) && (a[t] = e)
                    }), a
                }
                if (!C(t)) return o(t, s(Y(this, e))), this;
                var i = n.controller || function() {};
                return o(n, function(e, t) {
                    "$" === t.charAt(0) && (r[t] = e, A(i) && (i[t] = e))
                }), r.$inject = ["$injector"], this.directive(t, r)
            }, this.aHrefSanitizationWhitelist = function(e) {
                return b(e) ? (n.aHrefSanitizationWhitelist(e), this) : n.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(e) {
                return b(e) ? (n.imgSrcSanitizationWhitelist(e), this) : n.imgSrcSanitizationWhitelist()
            };
            var R = !0;
            this.debugInfoEnabled = function(e) {
                return b(e) ? (R = e, this) : R
            };
            var D = !1;
            this.strictComponentBindingsEnabled = function(e) {
                return b(e) ? (D = e, this) : D
            };
            var P = 10;
            this.onChangesTtl = function(e) {
                return arguments.length ? (P = e, this) : P
            };
            var M = !0;
            this.commentDirectivesEnabled = function(e) {
                return arguments.length ? (M = e, this) : M
            };
            var j = !0;
            this.cssClassDirectivesEnabled = function(e) {
                return arguments.length ? (j = e, this) : j
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", function(t, n, r, a, s, c, u, m, b) {
                function T() {
                    try {
                        if (!--Re) throw Ee = void 0, Co("infchng", "{0} $onChanges() iterations reached. Aborting!\n", P);
                        u.$apply(function() {
                            for (var e = 0, t = Ee.length; e < t; ++e) try {
                                Ee[e]()
                            } catch (e) {
                                r(e)
                            }
                            Ee = void 0
                        })
                    } finally {
                        Re++
                    }
                }

                function V(e, t) {
                    if (t) {
                        var n, r, i, o = Object.keys(t);
                        for (n = 0, r = o.length; n < r; n++) i = o[n], this[i] = t[i]
                    } else this.$attr = {};
                    this.$$element = e
                }

                function U(e, t, n) {
                    xe.innerHTML = "<span " + t + ">";
                    var r = xe.firstChild.attributes,
                        i = r[0];
                    r.removeNamedItem(i.name), i.value = n, e.attributes.setNamedItem(i)
                }

                function L(e, t) {
                    try {
                        e.addClass(t)
                    } catch (e) {}
                }

                function N(e, t, n, r, i) {
                    e instanceof si || (e = si(e));
                    var o = q(e, t, e, n, r, i);
                    N.$$addScopeClass(e);
                    var a = null;
                    return function(t, n, r) {
                        if (!e) throw Co("multilink", "This element has already been linked.");
                        ge(t, "scope"), i && i.needsNewScope && (t = t.$parent.$new()), r = r || {};
                        var s = r.parentBoundTranscludeFn,
                            c = r.transcludeControllers,
                            u = r.futureParentElement;
                        s && s.$$boundTransclude && (s = s.$$boundTransclude), a || (a = B(u));
                        var l;
                        if (l = "html" !== a ? si(ve(a, si("<div></div>").append(e).html())) : n ? eo.clone.call(e) : e, c)
                            for (var f in c) l.data("$" + f + "Controller", c[f].instance);
                        return N.$$addScopeInfo(l, t), n && n(l, t), o && o(t, l, l, s), n || (e = o = null), l
                    }
                }

                function B(e) {
                    var t = e && e[0];
                    return t && "foreignobject" !== F(t) && yi.call(t).match(/SVG/) ? "svg" : "html"
                }

                function q(e, t, n, r, i, o) {
                    function a(e, n, r, i) {
                        var o, a, s, c, u, l, f, p, v;
                        if (d) {
                            var g = n.length;
                            for (v = new Array(g), u = 0; u < h.length; u += 3) f = h[u], v[f] = n[f]
                        } else v = n;
                        for (u = 0, l = h.length; u < l;) s = v[h[u++]], o = h[u++], a = h[u++], o ? (o.scope ? (c = e.$new(), N.$$addScopeInfo(si(s), c)) : c = e, p = o.transcludeOnThisElement ? J(e, o.transclude, i) : !o.templateOnThisElement && i ? i : !i && t ? J(e, t) : null, o(a, c, s, r, p)) : a && a(e, s.childNodes, void 0, i)
                    }
                    for (var s, c, u, l, f, p, d, h = [], v = _(e) || e instanceof si, g = 0; g < e.length; g++) s = new V, 11 === ai && W(e, g, v), c = Z(e[g], [], s, 0 === g ? r : void 0, i), u = c.length ? re(c, e[g], s, t, n, null, [], [], o) : null, u && u.scope && N.$$addScopeClass(s.$$element), f = u && u.terminal || !(l = e[g].childNodes) || !l.length ? null : q(l, u ? (u.transcludeOnThisElement || !u.templateOnThisElement) && u.transclude : t), (u || f) && (h.push(g, u, f), p = !0, d = d || u), o = null;
                    return p ? a : null
                }

                function W(e, t, n) {
                    var r, i = e[t],
                        o = i.parentNode;
                    if (i.nodeType === Vi)
                        for (;;) {
                            if (!(r = o ? i.nextSibling : e[t + 1]) || r.nodeType !== Vi) break;
                            i.nodeValue = i.nodeValue + r.nodeValue, r.parentNode && r.parentNode.removeChild(r), n && r === e[t + 1] && e.splice(t + 1, 1)
                        }
                }

                function J(e, t, n) {
                    function r(r, i, o, a, s) {
                        return r || (r = e.$new(!1, s), r.$$transcluded = !0), t(r, i, {
                            parentBoundTranscludeFn: n,
                            transcludeControllers: o,
                            futureParentElement: a
                        })
                    }
                    var i = r.$$slots = we();
                    for (var o in t.$$slots) t.$$slots[o] ? i[o] = J(e, t.$$slots[o], n) : i[o] = null;
                    return r
                }

                function Z(e, t, n, r, i) {
                    var o, a, s, c = e.nodeType,
                        u = n.$attr;
                    switch (c) {
                        case Ii:
                            a = F(e), se(t, At(a), "E", r, i);
                            for (var l, f, p, d, h, v, g = e.attributes, m = 0, y = g && g.length; m < y; m++) {
                                var b = !1,
                                    S = !1;
                                l = g[m], f = l.name, h = l.value, d = At(f), v = Ie.test(d), v && (f = f.replace(Eo, "").substr(8).replace(/_(.)/g, function(e, t) {
                                    return t.toUpperCase()
                                }));
                                var k = d.match(je);
                                k && ce(k[1]) && (b = f, S = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), p = At(f.toLowerCase()), u[p] = f, !v && n.hasOwnProperty(p) || (n[p] = h, rt(e, p) && (n[p] = !0)), $e(e, t, h, p, v), se(t, p, "A", r, i, b, S)
                            }
                            if ("input" === a && "hidden" === e.getAttribute("type") && e.setAttribute("autocomplete", "off"), !Te) break;
                            if (s = e.className, w(s) && (s = s.animVal), C(s) && "" !== s)
                                for (; o = $.exec(s);) p = At(o[2]), se(t, p, "C", r, i) && (n[p] = _i(o[3])), s = s.substr(o.index + o[0].length);
                            break;
                        case Vi:
                            de(t, e.nodeValue);
                            break;
                        case Ui:
                            if (!Ae) break;
                            Q(e, t, n, r, i)
                    }
                    return t.sort(fe), t
                }

                function Q(e, t, n, r, i) {
                    try {
                        var o = d.exec(e.nodeValue);
                        if (o) {
                            var a = At(o[1]);
                            se(t, a, "M", r, i) && (n[a] = _i(o[2]))
                        }
                    } catch (e) {}
                }

                function X(e, t, n) {
                    var r = [],
                        i = 0;
                    if (t && e.hasAttribute && e.hasAttribute(t))
                        do {
                            if (!e) throw Co("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", t, n);
                            e.nodeType === Ii && (e.hasAttribute(t) && i++, e.hasAttribute(n) && i--), r.push(e), e = e.nextSibling
                        } while (i > 0);
                    else r.push(e);
                    return si(r)
                }

                function ee(e, t, n) {
                    return function(r, i, o, a, s) {
                        return i = X(i[0], t, n), e(r, i, o, a, s)
                    }
                }

                function te(e, t, n, r, i, o) {
                    var a;
                    return e ? N(t, n, r, i, o) : function() {
                        return a || (a = N(t, n, r, i, o), t = n = o = null), a.apply(this, arguments)
                    }
                }

                function re(e, t, n, i, a, s, c, u, l) {
                    function p(e, t, n, r) {
                        e && (n && (e = ee(e, n, r)), e.require = h.require, e.directiveName = v, (k === h || h.$$isolateScope) && (e = be(e, {
                            isolateScope: !0
                        })), c.push(e)), t && (n && (t = ee(t, n, r)), t.require = h.require, t.directiveName = v, (k === h || h.$$isolateScope) && (t = be(t, {
                            isolateScope: !0
                        })), u.push(t))
                    }

                    function d(e, i, a, s, l) {
                        function p(e, t, n, r) {
                            var i;
                            if (O(e) || (r = n, n = t, t = e, e = void 0), D && (i = $), n || (n = D ? x.parent() : x), !r) return l(e, t, i, n, U);
                            var o = l.$$slots[r];
                            if (o) return o(e, t, i, n, U);
                            if (y(o)) throw Co("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', r, ne(x))
                        }
                        var d, h, v, g, m, $, b, x, T, R;
                        t === a ? (T = n, x = n.$$element) : (x = si(a), T = new V(x, n)), m = i, k ? g = i.$new(!0) : S && (m = i.$parent), l && (b = p, b.$$boundTransclude = l, b.isSlotFilled = function(e) {
                            return !!l.$$slots[e]
                        }), C && ($ = oe(x, T, b, C, g, i, k)), k && (N.$$addScopeInfo(x, g, !0, !(E && (E === k || E === k.$$originalDirective))), N.$$addScopeClass(x, !0), g.$$isolateBindings = k.$$isolateBindings, R = ke(i, T, g, g.$$isolateBindings, k), R.removeWatches && g.$on("$destroy", R.removeWatches));
                        for (var P in $) {
                            var M = C[P],
                                I = $[P],
                                j = M.$$bindings.bindToController;
                            I.instance = I(), x.data("$" + M.name + "Controller", I.instance), I.bindingInfo = ke(m, T, I.instance, j, M)
                        }
                        for (o(C, function(e, t) {
                                var n = e.require;
                                e.bindToController && !_(n) && w(n) && f($[t].instance, ie(t, n, x, $))
                            }), o($, function(e) {
                                var t = e.instance;
                                if (A(t.$onChanges)) try {
                                    t.$onChanges(e.bindingInfo.initialChanges)
                                } catch (e) {
                                    r(e)
                                }
                                if (A(t.$onInit)) try {
                                    t.$onInit()
                                } catch (e) {
                                    r(e)
                                }
                                A(t.$doCheck) && (m.$watch(function() {
                                    t.$doCheck()
                                }), t.$doCheck()), A(t.$onDestroy) && m.$on("$destroy", function() {
                                    t.$onDestroy()
                                })
                            }), d = 0, h = c.length; d < h; d++) v = c[d], Se(v, v.isolateScope ? g : i, x, T, v.require && ie(v.directiveName, v.require, x, $), b);
                        var U = i;
                        for (k && (k.template || null === k.templateUrl) && (U = g), e && e(U, a.childNodes, void 0, l), d = u.length - 1; d >= 0; d--) v = u[d], Se(v, v.isolateScope ? g : i, x, T, v.require && ie(v.directiveName, v.require, x, $), b);
                        o($, function(e) {
                            var t = e.instance;
                            A(t.$postLink) && t.$postLink()
                        })
                    }
                    l = l || {};
                    for (var h, v, g, m, $, b = -Number.MAX_VALUE, S = l.newScopeDirective, C = l.controllerDirectives, k = l.newIsolateScopeDirective, E = l.templateDirective, x = l.nonTlbTranscludeDirective, T = !1, R = !1, D = l.hasElementTranscludeDirective, P = n.$$element = si(t), M = s, I = i, j = !1, U = !1, L = 0, B = e.length; L < B; L++) {
                        h = e[L];
                        var H = h.$$start,
                            q = h.$$end;
                        if (H && (P = X(t, H, q)), g = void 0, b > h.priority) break;
                        if ($ = h.scope, $ && (h.templateUrl || (w($) ? (pe("new/isolated scope", k || S, h, P), k = h) : pe("new/isolated scope", k, h, P)), S = S || h), v = h.name, !j && (h.replace && (h.templateUrl || h.template) || h.transclude && !h.$$tlb)) {
                            for (var G, z = L + 1; G = e[z++];)
                                if (G.transclude && !G.$$tlb || G.replace && (G.templateUrl || G.template)) {
                                    U = !0;
                                    break
                                } j = !0
                        }
                        if (!h.templateUrl && h.controller && (C = C || we(), pe("'" + v + "' controller", C[v], h, P), C[v] = h), $ = h.transclude)
                            if (T = !0, h.$$tlb || (pe("transclusion", x, h, P), x = h), "element" === $) D = !0, b = h.priority, g = P, P = n.$$element = si(N.$$createComment(v, n[v])), t = P[0], ye(a, K(g), t), I = te(U, g, i, b, M && M.name, {
                                nonTlbTranscludeDirective: x
                            });
                            else {
                                var W = we();
                                if (w($)) {
                                    g = [];
                                    var J = we(),
                                        Q = we();
                                    o($, function(e, t) {
                                        var n = "?" === e.charAt(0);
                                        e = n ? e.substring(1) : e, J[e] = t, W[t] = null, Q[t] = n
                                    }), o(P.contents(), function(e) {
                                        var t = J[At(F(e))];
                                        t ? (Q[t] = !0, W[t] = W[t] || [], W[t].push(e)) : g.push(e)
                                    }), o(Q, function(e, t) {
                                        if (!e) throw Co("reqslot", "Required transclusion slot `{0}` was not filled.", t)
                                    });
                                    for (var re in W) W[re] && (W[re] = te(U, W[re], i))
                                } else g = si(Le(t)).contents();
                                P.empty(), I = te(U, g, i, void 0, void 0, {
                                    needsNewScope: h.$$isolateScope || h.$$newScope
                                }), I.$$slots = W
                            } if (h.template)
                            if (R = !0, pe("template", E, h, P), E = h, $ = A(h.template) ? h.template(P, n) : h.template, $ = Me($), h.replace) {
                                if (M = h, g = De($) ? [] : Rt(ve(h.templateNamespace, _i($))), t = g[0], 1 !== g.length || t.nodeType !== Ii) throw Co("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", v, "");
                                ye(a, P, t);
                                var se = {
                                        $attr: {}
                                    },
                                    ce = Z(t, [], se),
                                    fe = e.splice(L + 1, e.length - (L + 1));
                                (k || S) && ae(ce, k, S), e = e.concat(ce).concat(fe), ue(n, se), B = e.length
                            } else P.html($);
                        if (h.templateUrl) R = !0, pe("template", E, h, P), E = h, h.replace && (M = h), d = le(e.splice(L, e.length - L), P, n, a, T && I, c, u, {
                            controllerDirectives: C,
                            newScopeDirective: S !== h && S,
                            newIsolateScopeDirective: k,
                            templateDirective: E,
                            nonTlbTranscludeDirective: x
                        }), B = e.length;
                        else if (h.compile) try {
                            m = h.compile(P, n, I);
                            var de = h.$$originalDirective || h;
                            A(m) ? p(null, Y(de, m), H, q) : m && p(Y(de, m.pre), Y(de, m.post), H, q)
                        } catch (e) {
                            r(e, ne(P))
                        }
                        h.terminal && (d.terminal = !0, b = Math.max(b, h.priority))
                    }
                    return d.scope = S && !0 === S.scope, d.transcludeOnThisElement = T, d.templateOnThisElement = R, d.transclude = I, l.hasElementTranscludeDirective = D, d
                }

                function ie(e, t, n, r) {
                    var i;
                    if (C(t)) {
                        var a = t.match(k),
                            s = t.substring(a[0].length),
                            c = a[1] || a[3],
                            u = "?" === a[2];
                        if ("^^" === c ? n = n.parent() : (i = r && r[s], i = i && i.instance), !i) {
                            var l = "$" + s + "Controller";
                            i = c ? n.inheritedData(l) : n.data(l)
                        }
                        if (!i && !u) throw Co("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", s, e)
                    } else if (_(t)) {
                        i = [];
                        for (var f = 0, p = t.length; f < p; f++) i[f] = ie(e, t[f], n, r)
                    } else w(t) && (i = {}, o(t, function(t, o) {
                        i[o] = ie(e, t, n, r)
                    }));
                    return i || null
                }

                function oe(e, t, n, r, i, o, a) {
                    var s = we();
                    for (var u in r) {
                        var l = r[u],
                            f = {
                                $scope: l === a || l.$$isolateScope ? i : o,
                                $element: e,
                                $attrs: t,
                                $transclude: n
                            },
                            p = l.controller;
                        "@" === p && (p = t[l.name]);
                        var d = c(p, f, !0, l.controllerAs);
                        s[l.name] = d, e.data("$" + l.name + "Controller", d.instance)
                    }
                    return s
                }

                function ae(e, t, n) {
                    for (var r = 0, i = e.length; r < i; r++) e[r] = h(e[r], {
                        $$isolateScope: t,
                        $$newScope: n
                    })
                }

                function se(e, n, r, o, a, s, c) {
                    if (n === a) return null;
                    var u = null;
                    if (l.hasOwnProperty(n))
                        for (var f, d = t.get(n + p), v = 0, g = d.length; v < g; v++)
                            if (f = d[v], (y(o) || o > f.priority) && -1 !== f.restrict.indexOf(r)) {
                                if (s && (f = h(f, {
                                        $$start: s,
                                        $$end: c
                                    })), !f.$$bindings) {
                                    var m = f.$$bindings = i(f, f.name);
                                    w(m.isolateScope) && (f.$$isolateBindings = m.isolateScope)
                                }
                                e.push(f), u = f
                            } return u
                }

                function ce(e) {
                    if (l.hasOwnProperty(e))
                        for (var n, r = t.get(e + p), i = 0, o = r.length; i < o; i++)
                            if (n = r[i], n.multiElement) return !0;
                    return !1
                }

                function ue(e, t) {
                    var n = t.$attr,
                        r = e.$attr;
                    o(e, function(r, i) {
                        "$" !== i.charAt(0) && (t[i] && t[i] !== r && (r.length ? r += ("style" === i ? ";" : " ") + t[i] : r = t[i]), e.$set(i, r, !0, n[i]))
                    }), o(t, function(t, i) {
                        e.hasOwnProperty(i) || "$" === i.charAt(0) || (e[i] = t, "class" !== i && "style" !== i && (r[i] = n[i]))
                    })
                }

                function le(e, t, n, i, s, c, u, l) {
                    var f, p, d = [],
                        v = t[0],
                        g = e.shift(),
                        m = h(g, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: g
                        }),
                        $ = A(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
                        y = g.templateNamespace;
                    return t.empty(), a($).then(function(r) {
                            var a, h, b, S;
                            if (r = Me(r), g.replace) {
                                if (b = De(r) ? [] : Rt(ve(y, _i(r))), a = b[0], 1 !== b.length || a.nodeType !== Ii) throw Co("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", g.name, $);
                                h = {
                                    $attr: {}
                                }, ye(i, t, a);
                                var C = Z(a, [], h);
                                w(g.scope) && ae(C, !0), e = C.concat(e), ue(n, h)
                            } else a = v, t.html(r);
                            for (e.unshift(m), f = re(e, a, n, s, t, g, c, u, l), o(i, function(e, n) {
                                    e === a && (i[n] = t[0])
                                }), p = q(t[0].childNodes, s); d.length;) {
                                var k = d.shift(),
                                    E = d.shift(),
                                    _ = d.shift(),
                                    x = d.shift(),
                                    A = t[0];
                                if (!k.$$destroyed) {
                                    if (E !== v) {
                                        var T = E.className;
                                        l.hasElementTranscludeDirective && g.replace || (A = Le(a)), ye(_, si(E), A), L(si(A), T)
                                    }
                                    S = f.transcludeOnThisElement ? J(k, f.transclude, x) : x, f(p, k, A, i, S)
                                }
                            }
                            d = null
                        }).catch(function(e) {
                            x(e) && r(e)
                        }),
                        function(e, t, n, r, i) {
                            var o = i;
                            t.$$destroyed || (d ? d.push(t, n, r, o) : (f.transcludeOnThisElement && (o = J(t, f.transclude, i)), f(p, t, n, r, o)))
                        }
                }

                function fe(e, t) {
                    var n = t.priority - e.priority;
                    return 0 !== n ? n : e.name !== t.name ? e.name < t.name ? -1 : 1 : e.index - t.index
                }

                function pe(e, t, n, r) {
                    function i(e) {
                        return e ? " (module: " + e + ")" : ""
                    }
                    if (t) throw Co("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", t.name, i(t.$$moduleName), n.name, i(n.$$moduleName), e, ne(r))
                }

                function de(e, t) {
                    var r = n(t, !0);
                    r && e.push({
                        priority: 0,
                        compile: function(e) {
                            var t = e.parent(),
                                n = !!t.length;
                            return n && N.$$addBindingClass(t),
                                function(e, t) {
                                    var i = t.parent();
                                    n || N.$$addBindingClass(i), N.$$addBindingInfo(i, r.expressions), e.$watch(r, function(e) {
                                        t[0].nodeValue = e
                                    })
                                }
                        }
                    })
                }

                function ve(t, n) {
                    switch (t = hi(t || "html")) {
                        case "svg":
                        case "math":
                            var r = e.document.createElement("div");
                            return r.innerHTML = "<" + t + ">" + n + "</" + t + ">", r.childNodes[0].childNodes;
                        default:
                            return n
                    }
                }

                function me(e, t) {
                    if ("srcdoc" === t) return m.HTML;
                    var n = F(e);
                    return "src" === t || "ngSrc" === t ? -1 === ["img", "video", "audio", "source", "track"].indexOf(n) ? m.RESOURCE_URL : m.MEDIA_URL : "xlinkHref" === t ? "image" === n ? m.MEDIA_URL : "a" === n ? m.URL : m.RESOURCE_URL : "form" === n && "action" === t || "base" === n && "href" === t || "link" === n && "href" === t ? m.RESOURCE_URL : "a" !== n || "href" !== t && "ngHref" !== t ? void 0 : m.URL
                }

                function $e(e, t, r, i, o) {
                    var a = me(e, i),
                        s = !o,
                        c = S[i] || o,
                        u = n(r, s, a, c);
                    if (u) {
                        if ("multiple" === i && "select" === F(e)) throw Co("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", ne(e));
                        if (E.test(i)) throw Co("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                        t.push({
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function(e, t, o) {
                                        var s = o.$$observers || (o.$$observers = we()),
                                            l = o[i];
                                        l !== r && (u = l && n(l, !0, a, c), r = l), u && (o[i] = u(e), (s[i] || (s[i] = [])).$$inter = !0, (o.$$observers && o.$$observers[i].$$scope || e).$watch(u, function(e, t) {
                                            "class" === i && e !== t ? o.$updateClass(e, t) : o.$set(i, e)
                                        }))
                                    }
                                }
                            }
                        })
                    }
                }

                function ye(t, n, r) {
                    var i, o, a = n[0],
                        s = n.length,
                        c = a.parentNode;
                    if (t)
                        for (i = 0, o = t.length; i < o; i++)
                            if (t[i] === a) {
                                t[i++] = r;
                                for (var u = i, l = u + s - 1, f = t.length; u < f; u++, l++) l < f ? t[u] = t[l] : delete t[u];
                                t.length -= s - 1, t.context === a && (t.context = r);
                                break
                            } c && c.replaceChild(r, a);
                    var p = e.document.createDocumentFragment();
                    for (i = 0; i < s; i++) p.appendChild(n[i]);
                    for (si.hasData(a) && (si.data(r, si.data(a)), si(a).off("$destroy")), si.cleanData(p.querySelectorAll("*")), i = 1; i < s; i++) delete n[i];
                    n[0] = r, n.length = 1
                }

                function be(e, t) {
                    return f(function() {
                        return e.apply(null, arguments)
                    }, e, t)
                }

                function Se(e, t, n, i, o, a) {
                    try {
                        e(t, n, i, o, a)
                    } catch (e) {
                        r(e, ne(n))
                    }
                }

                function Ce(e, t) {
                    if (D) throw Co("missingattr", "Attribute '{0}' of '{1}' is non-optional and must be set!", e, t)
                }

                function ke(e, t, r, i, a) {
                    function c(t, n, i) {
                        A(r.$onChanges) && !G(n, i) && (Ee || (e.$$postDigest(T), Ee = []), l || (l = {}, Ee.push(u)), l[t] && (i = l[t].previousValue), l[t] = new xt(i, n))
                    }

                    function u() {
                        r.$onChanges(l), l = void 0
                    }
                    var l, f = [],
                        p = {};
                    return o(i, function(i, o) {
                        var u, l, d, h, g, m = i.attrName,
                            $ = i.optional,
                            y = i.mode;
                        switch (y) {
                            case "@":
                                $ || di.call(t, m) || (Ce(m, a.name), r[o] = t[m] = void 0), g = t.$observe(m, function(e) {
                                    if (C(e) || I(e)) {
                                        var t = r[o];
                                        c(o, e, t), r[o] = e
                                    }
                                }), t.$$observers[m].$$scope = e, u = t[m], C(u) ? r[o] = n(u)(e) : I(u) && (r[o] = u), p[o] = new xt(ko, r[o]), f.push(g);
                                break;
                            case "=":
                                if (!di.call(t, m)) {
                                    if ($) break;
                                    Ce(m, a.name), t[m] = void 0
                                }
                                if ($ && !t[m]) break;
                                l = s(t[m]), h = l.literal ? z : G, d = l.assign || function() {
                                    throw u = r[o] = l(e), Co("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", t[m], m, a.name)
                                }, u = r[o] = l(e);
                                var b = function(t) {
                                    return h(t, r[o]) || (h(t, u) ? d(e, t = r[o]) : r[o] = t), u = t
                                };
                                b.$stateful = !0, g = i.collection ? e.$watchCollection(t[m], b) : e.$watch(s(t[m], b), null, l.literal), f.push(g);
                                break;
                            case "<":
                                if (!di.call(t, m)) {
                                    if ($) break;
                                    Ce(m, a.name), t[m] = void 0
                                }
                                if ($ && !t[m]) break;
                                l = s(t[m]);
                                var w = l.literal,
                                    S = r[o] = l(e);
                                p[o] = new xt(ko, r[o]), g = e.$watch(l, function(e, t) {
                                    if (t === e) {
                                        if (t === S || w && z(t, S)) return;
                                        t = S
                                    }
                                    c(o, e, t), r[o] = e
                                }), f.push(g);
                                break;
                            case "&":
                                if ($ || di.call(t, m) || Ce(m, a.name), (l = t.hasOwnProperty(m) ? s(t[m]) : v) === v && $) break;
                                r[o] = function(t) {
                                    return l(e, t)
                                }
                        }
                    }), {
                        initialChanges: p,
                        removeWatches: f.length && function() {
                            for (var e = 0, t = f.length; e < t; ++e) f[e]()
                        }
                    }
                }
                var Ee, _e = /^\w/,
                    xe = e.document.createElement("div"),
                    Ae = M,
                    Te = j,
                    Re = P;
                V.prototype = {
                    $normalize: At,
                    $addClass: function(e) {
                        e && e.length > 0 && b.addClass(this.$$element, e)
                    },
                    $removeClass: function(e) {
                        e && e.length > 0 && b.removeClass(this.$$element, e)
                    },
                    $updateClass: function(e, t) {
                        var n = Tt(e, t);
                        n && n.length && b.addClass(this.$$element, n);
                        var r = Tt(t, e);
                        r && r.length && b.removeClass(this.$$element, r)
                    },
                    $set: function(e, t, n, i) {
                        var a = this.$$element[0],
                            s = rt(a, e),
                            c = it(e),
                            u = e;
                        if (s ? (this.$$element.prop(e, t), i = s) : c && (this[c] = t, u = c), this[e] = t, i ? this.$attr[e] = i : (i = this.$attr[e]) || (this.$attr[e] = i = he(e, "-")), "img" === F(this.$$element) && "srcset" === e && t) {
                            if (!C(t)) throw Co("srcset", "Can't pass trusted values to `$set('srcset', value)`: \"{0}\"", t.toString());
                            for (var l = "", f = _i(t), p = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, d = /\s/.test(f) ? p : /(,)/, h = f.split(d), v = Math.floor(h.length / 2), g = 0; g < v; g++) {
                                var $ = 2 * g;
                                l += m.getTrustedMediaUrl(_i(h[$])), l += " " + _i(h[$ + 1])
                            }
                            var b = _i(h[2 * g]).split(/\s/);
                            l += m.getTrustedMediaUrl(_i(b[0])), 2 === b.length && (l += " " + _i(b[1])), this[e] = t = l
                        }!1 !== n && (null === t || y(t) ? this.$$element.removeAttr(i) : _e.test(i) ? this.$$element.attr(i, t) : U(this.$$element[0], i, t));
                        var w = this.$$observers;
                        w && o(w[u], function(e) {
                            try {
                                e(t)
                            } catch (e) {
                                r(e)
                            }
                        })
                    },
                    $observe: function(e, t) {
                        var n = this,
                            r = n.$$observers || (n.$$observers = we()),
                            i = r[e] || (r[e] = []);
                        return i.push(t), u.$evalAsync(function() {
                                i.$$inter || !n.hasOwnProperty(e) || y(n[e]) || t(n[e])
                            }),
                            function() {
                                H(i, t)
                            }
                    }
                };
                var Oe = n.startSymbol(),
                    Pe = n.endSymbol(),
                    Me = "{{" === Oe && "}}" === Pe ? g : function(e) {
                        return e.replace(/\{\{/g, Oe).replace(/}}/g, Pe)
                    },
                    Ie = /^ngAttr[A-Z]/,
                    je = /^(.+)Start$/;
                return N.$$addBindingInfo = R ? function(e, t) {
                    var n = e.data("$binding") || [];
                    _(t) ? n = n.concat(t) : n.push(t), e.data("$binding", n)
                } : v, N.$$addBindingClass = R ? function(e) {
                    L(e, "ng-binding")
                } : v, N.$$addScopeInfo = R ? function(e, t, n, r) {
                    var i = n ? r ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                    e.data(i, t)
                } : v, N.$$addScopeClass = R ? function(e, t) {
                    L(e, t ? "ng-isolate-scope" : "ng-scope")
                } : v, N.$$createComment = function(t, n) {
                    var r = "";
                    return R && (r = " " + (t || "") + ": ", n && (r += n + " ")), e.document.createComment(r)
                }, N
            }]
        }

        function xt(e, t) {
            this.previousValue = e, this.currentValue = t
        }

        function At(e) {
            return e.replace(Eo, "").replace(_o, function(e, t, n) {
                return n ? t.toUpperCase() : t
            })
        }

        function Tt(e, t) {
            var n = "",
                r = e.split(/\s+/),
                i = t.split(/\s+/);
            e: for (var o = 0; o < r.length; o++) {
                for (var a = r[o], s = 0; s < i.length; s++)
                    if (a === i[s]) continue e;
                n += (n.length > 0 ? " " : "") + a
            }
            return n
        }

        function Rt(e) {
            e = si(e);
            var t = e.length;
            if (t <= 1) return e;
            for (; t--;) {
                var n = e[t];
                (n.nodeType === Ui || n.nodeType === Vi && "" === n.nodeValue.trim()) && mi.call(e, t, 1)
            }
            return e
        }

        function Ot(e, t) {
            if (t && C(t)) return t;
            if (C(e)) {
                var n = Ao.exec(e);
                if (n) return n[3]
            }
        }

        function Dt() {
            var e = {};
            this.has = function(t) {
                return e.hasOwnProperty(t)
            }, this.register = function(t, n) {
                $e(t, "controller"), w(t) ? f(e, t) : e[t] = n
            }, this.$get = ["$injector", function(t) {
                function n(e, t, n, i) {
                    if (!e || !w(e.$scope)) throw r("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", i, t);
                    e.$scope[t] = n
                }
                return function(r, i, o, a) {
                    var s, c, u, l;
                    if (o = !0 === o, a && C(a) && (l = a), C(r)) {
                        if (!(c = r.match(Ao))) throw xo("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", r);
                        if (u = c[1], l = l || c[3], !(r = e.hasOwnProperty(u) ? e[u] : ye(i.$scope, u, !0))) throw xo("ctrlreg", "The controller with the name '{0}' is not registered.", u);
                        me(r, u, !0)
                    }
                    if (o) {
                        var p = (_(r) ? r[r.length - 1] : r).prototype;
                        return s = Object.create(p || null), l && n(i, l, s, u || r.name), f(function() {
                            var e = t.invoke(r, s, i, u);
                            return e !== s && (w(e) || A(e)) && (s = e, l && n(i, l, s, u || r.name)), s
                        }, {
                            instance: s,
                            identifier: l
                        })
                    }
                    return s = t.instantiate(r, i, u), l && n(i, l, s, u || r.name), s
                }
            }]
        }

        function Pt() {
            this.$get = ["$window", function(e) {
                return si(e.document)
            }]
        }

        function Mt() {
            this.$get = ["$document", "$rootScope", function(e, t) {
                function n() {
                    i = r.hidden
                }
                var r = e[0],
                    i = r && r.hidden;
                return e.on("visibilitychange", n), t.$on("$destroy", function() {
                        e.off("visibilitychange", n)
                    }),
                    function() {
                        return i
                    }
            }]
        }

        function It() {
            this.$get = ["$log", function(e) {
                return function(t, n) {
                    e.error.apply(e, arguments)
                }
            }]
        }

        function jt(e) {
            return w(e) ? E(e) ? e.toISOString() : Z(e) : e
        }

        function Vt() {
            this.$get = function() {
                return function(e) {
                    if (!e) return "";
                    var t = [];
                    return a(e, function(e, n) {
                        null === e || y(e) || A(e) || (_(e) ? o(e, function(e) {
                            t.push(se(n) + "=" + se(jt(e)))
                        }) : t.push(se(n) + "=" + se(jt(e))))
                    }), t.join("&")
                }
            }
        }

        function Ut() {
            this.$get = function() {
                return function(e) {
                    function t(e, r, i) {
                        _(e) ? o(e, function(e, n) {
                            t(e, r + "[" + (w(e) ? n : "") + "]")
                        }) : w(e) && !E(e) ? a(e, function(e, n) {
                            t(e, r + (i ? "" : "[") + n + (i ? "" : "]"))
                        }) : (A(e) && (e = e()), n.push(se(r) + "=" + (null == e ? "" : se(jt(e)))))
                    }
                    if (!e) return "";
                    var n = [];
                    return t(e, "", !0), n.join("&")
                }
            }
        }

        function Lt(e, t) {
            if (C(e)) {
                var n = e.replace(Mo, "").trim();
                if (n) {
                    var r = t("Content-Type"),
                        i = r && 0 === r.indexOf(Ro);
                    if (i || Nt(n)) try {
                        e = Q(n)
                    } catch (t) {
                        if (!i) return e;
                        throw Io("baddata", 'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"', e, t)
                    }
                }
            }
            return e
        }

        function Nt(e) {
            var t = e.match(Do);
            return t && Po[t[0]].test(e)
        }

        function Ft(e) {
            function t(e, t) {
                e && (r[e] = r[e] ? r[e] + ", " + t : t)
            }
            var n, r = we();
            return C(e) ? o(e.split("\n"), function(e) {
                n = e.indexOf(":"), t(hi(_i(e.substr(0, n))), _i(e.substr(n + 1)))
            }) : w(e) && o(e, function(e, n) {
                t(hi(n), _i(e))
            }), r
        }

        function Bt(e) {
            var t;
            return function(n) {
                if (t || (t = Ft(e)), n) {
                    var r = t[hi(n)];
                    return void 0 === r && (r = null), r
                }
                return t
            }
        }

        function Ht(e, t, n, r) {
            return A(r) ? r(e, t, n) : (o(r, function(r) {
                e = r(e, t, n)
            }), e)
        }

        function qt(e) {
            return 200 <= e && e < 300
        }

        function Gt() {
            var e = this.defaults = {
                    transformResponse: [Lt],
                    transformRequest: [function(e) {
                        return !w(e) || D(e) || M(e) || P(e) ? e : Z(e)
                    }],
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        post: ke(Oo),
                        put: ke(Oo),
                        patch: ke(Oo)
                    },
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    paramSerializer: "$httpParamSerializer",
                    jsonpCallbackParam: "callback"
                },
                t = !1;
            this.useApplyAsync = function(e) {
                return b(e) ? (t = !!e, this) : t
            };
            var n = this.interceptors = [],
                i = this.xsrfWhitelistedOrigins = [];
            this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function(a, s, c, u, l, p, d, h) {
                function g(t) {
                    function n(e, t) {
                        for (var n = 0, r = t.length; n < r;) {
                            var i = t[n++],
                                o = t[n++];
                            e = e.then(i, o)
                        }
                        return t.length = 0, e
                    }

                    function i() {
                        a.$$completeOutstandingRequest(v)
                    }

                    function s(e, t) {
                        var n, r = {};
                        return o(e, function(e, i) {
                            A(e) ? null != (n = e(t)) && (r[i] = n) : r[i] = e
                        }), r
                    }

                    function c(t) {
                        var n, r, i, o = e.headers,
                            a = f({}, t.headers);
                        o = f({}, o.common, o[hi(t.method)]);
                        e: for (n in o) {
                            r = hi(n);
                            for (i in a)
                                if (hi(i) === r) continue e;
                            a[n] = o[n]
                        }
                        return s(a, ke(t))
                    }

                    function u(t) {
                        var n = t.headers,
                            r = Ht(t.data, Bt(n), void 0, t.transformRequest);
                        return y(r) && o(n, function(e, t) {
                            "content-type" === hi(t) && delete n[t]
                        }), y(t.withCredentials) && !y(e.withCredentials) && (t.withCredentials = e.withCredentials), S(t, r).then(l, l)
                    }

                    function l(e) {
                        var t = f({}, e);
                        return t.data = Ht(e.data, e.headers, e.status, g.transformResponse), qt(e.status) ? t : p.reject(t)
                    }
                    if (!w(t)) throw r("$http")("badreq", "Http request configuration must be an object.  Received: {0}", t);
                    if (!C(h.valueOf(t.url))) throw r("$http")("badreq", "Http request configuration url must be a string or a $sce trusted object.  Received: {0}", t.url);
                    var g = f({
                        method: "get",
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse,
                        paramSerializer: e.paramSerializer,
                        jsonpCallbackParam: e.jsonpCallbackParam
                    }, t);
                    g.headers = c(t), g.method = vi(g.method), g.paramSerializer = C(g.paramSerializer) ? d.get(g.paramSerializer) : g.paramSerializer, a.$$incOutstandingRequestCount();
                    var m = [],
                        $ = [],
                        b = p.resolve(g);
                    return o(T, function(e) {
                        (e.request || e.requestError) && m.unshift(e.request, e.requestError), (e.response || e.responseError) && $.push(e.response, e.responseError)
                    }), b = n(b, m), b = b.then(u), b = n(b, $), b = b.finally(i)
                }

                function m(e) {
                    o(arguments, function(e) {
                        g[e] = function(t, n) {
                            return g(f({}, n || {}, {
                                method: e,
                                url: t
                            }))
                        }
                    })
                }

                function $(e) {
                    o(arguments, function(e) {
                        g[e] = function(t, n, r) {
                            return g(f({}, r || {}, {
                                method: e,
                                url: t,
                                data: n
                            }))
                        }
                    })
                }

                function S(n, r) {
                    function i(e) {
                        if (e) {
                            var n = {};
                            return o(e, function(e, r) {
                                n[r] = function(n) {
                                    function r() {
                                        e(n)
                                    }
                                    t ? l.$applyAsync(r) : l.$$phase ? r() : l.$apply(r)
                                }
                            }), n
                        }
                    }

                    function a(e, n, r, i, o) {
                        function a() {
                            u(n, e, r, i, o)
                        }
                        v && (qt(e) ? v.put(O, [e, n, Ft(r), i, o]) : v.remove(O)), t ? l.$applyAsync(a) : (a(), l.$$phase || l.$apply())
                    }

                    function u(e, t, r, i, o) {
                        t = t >= -1 ? t : 0, (qt(t) ? $.resolve : $.reject)({
                            data: e,
                            status: t,
                            headers: Bt(r),
                            config: n,
                            statusText: i,
                            xhrStatus: o
                        })
                    }

                    function f(e) {
                        u(e.data, e.status, ke(e.headers()), e.statusText, e.xhrStatus)
                    }

                    function d() {
                        var e = g.pendingRequests.indexOf(n); - 1 !== e && g.pendingRequests.splice(e, 1)
                    }
                    var v, m, $ = p.defer(),
                        S = $.promise,
                        A = n.headers,
                        T = "jsonp" === hi(n.method),
                        O = n.url;
                    if (T ? O = h.getTrustedResourceUrl(O) : C(O) || (O = h.valueOf(O)), O = k(O, n.paramSerializer(n.params)), T && (O = E(O, n.jsonpCallbackParam)), g.pendingRequests.push(n), S.then(d, d), !n.cache && !e.cache || !1 === n.cache || "GET" !== n.method && "JSONP" !== n.method || (v = w(n.cache) ? n.cache : w(e.cache) ? e.cache : x), v && (m = v.get(O), b(m) ? j(m) ? m.then(f, f) : _(m) ? u(m[1], m[0], ke(m[2]), m[3], m[4]) : u(m, 200, {}, "OK", "complete") : v.put(O, S)), y(m)) {
                        var D = R(n.url) ? c()[n.xsrfCookieName || e.xsrfCookieName] : void 0;
                        D && (A[n.xsrfHeaderName || e.xsrfHeaderName] = D), s(n.method, O, r, a, A, n.timeout, n.withCredentials, n.responseType, i(n.eventHandlers), i(n.uploadEventHandlers))
                    }
                    return S
                }

                function k(e, t) {
                    return t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
                }

                function E(e, t) {
                    var n = e.split("?");
                    if (n.length > 2) throw Io("badjsonp", 'Illegal use more than one "?", in url, "{1}"', e);
                    return o(ie(n[1]), function(n, r) {
                        if ("JSON_CALLBACK" === n) throw Io("badjsonp", 'Illegal use of JSON_CALLBACK in url, "{0}"', e);
                        if (r === t) throw Io("badjsonp", 'Illegal use of callback param, "{0}", in url, "{1}"', t, e)
                    }), e += (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK"
                }
                var x = u("$http");
                e.paramSerializer = C(e.paramSerializer) ? d.get(e.paramSerializer) : e.paramSerializer;
                var T = [];
                o(n, function(e) {
                    T.unshift(C(e) ? d.get(e) : d.invoke(e))
                });
                var R = Qn(i);
                return g.pendingRequests = [], m("get", "delete", "head", "jsonp"), $("post", "put", "patch"), g.defaults = e, g
            }]
        }

        function zt() {
            this.$get = function() {
                return function() {
                    return new e.XMLHttpRequest
                }
            }
        }

        function Wt() {
            this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(e, t, n, r) {
                return Kt(e, r, e.defer, t, n[0])
            }]
        }

        function Kt(e, t, n, r, i) {
            function a(e, t, n) {
                e = e.replace("JSON_CALLBACK", t);
                var o = i.createElement("script"),
                    a = null;
                return o.type = "text/javascript", o.src = e, o.async = !0, a = function(e) {
                    o.removeEventListener("load", a), o.removeEventListener("error", a), i.body.removeChild(o), o = null;
                    var s = -1,
                        c = "unknown";
                    e && ("load" !== e.type || r.wasCalled(t) || (e = {
                        type: "error"
                    }), c = e.type, s = "error" === e.type ? 404 : 200), n && n(s, c)
                }, o.addEventListener("load", a), o.addEventListener("error", a), i.body.appendChild(o), a
            }
            return function(i, s, c, u, l, f, p, d, h, v) {
                function g(e) {
                    C = "timeout" === e, w && w(), S && S.abort()
                }

                function m(e, t, r, i, o, a) {
                    b(x) && n.cancel(x), w = S = null, e(t, r, i, o, a)
                }
                if (s = s || e.url(), "jsonp" === hi(i)) var $ = r.createCallback(s),
                    w = a(s, $, function(e, t) {
                        var n = 200 === e && r.getResponse($);
                        m(u, e, n, "", t, "complete"), r.removeCallback($)
                    });
                else {
                    var S = t(i, s),
                        C = !1;
                    S.open(i, s, !0), o(l, function(e, t) {
                        b(e) && S.setRequestHeader(t, e)
                    }), S.onload = function() {
                        var e = S.statusText || "",
                            t = "response" in S ? S.response : S.responseText,
                            n = 1223 === S.status ? 204 : S.status;
                        0 === n && (n = t ? 200 : "file" === Yn(s).protocol ? 404 : 0), m(u, n, t, S.getAllResponseHeaders(), e, "complete")
                    };
                    var k = function() {
                            m(u, -1, null, null, "", "error")
                        },
                        E = function() {
                            m(u, -1, null, null, "", C ? "timeout" : "abort")
                        },
                        _ = function() {
                            m(u, -1, null, null, "", "timeout")
                        };
                    if (S.onerror = k, S.ontimeout = _, S.onabort = E, o(h, function(e, t) {
                            S.addEventListener(t, e)
                        }), o(v, function(e, t) {
                            S.upload.addEventListener(t, e)
                        }), p && (S.withCredentials = !0), d) try {
                        S.responseType = d
                    } catch (e) {
                        if ("json" !== d) throw e
                    }
                    S.send(y(c) ? null : c)
                }
                if (f > 0) var x = n(function() {
                    g("timeout")
                }, f);
                else j(f) && f.then(function() {
                    g(b(f.$$timeoutId) ? "timeout" : "abort")
                })
            }
        }

        function Yt() {
            var e = "{{",
                t = "}}";
            this.startSymbol = function(t) {
                return t ? (e = t, this) : e
            }, this.endSymbol = function(e) {
                return e ? (t = e, this) : t
            }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(n, r, i) {
                function o(e) {
                    return "\\\\\\" + e
                }

                function a(n) {
                    return n.replace(p, e).replace(d, t)
                }

                function s(e, t, n, r) {
                    var i = e.$watch(function(e) {
                        return i(), r(e)
                    }, t, n);
                    return i
                }

                function c(o, c, p, d) {
                    function h(e) {
                        try {
                            return e = p && !v ? i.getTrusted(p, e) : i.valueOf(e), d && !b(e) ? e : Se(e)
                        } catch (e) {
                            r(jo.interr(o, e))
                        }
                    }
                    var v = p === i.URL || p === i.MEDIA_URL;
                    if (!o.length || -1 === o.indexOf(e)) {
                        if (c && !v) return;
                        var g = a(o);
                        v && (g = i.getTrusted(p, g));
                        var $ = m(g);
                        return $.exp = o, $.expressions = [], $.$$watchDelegate = s, $
                    }
                    d = !!d;
                    for (var w, S, C, k, E, _ = 0, x = [], A = o.length, T = [], R = []; _ < A;) {
                        if (-1 === (w = o.indexOf(e, _)) || -1 === (S = o.indexOf(t, w + u))) {
                            _ !== A && T.push(a(o.substring(_)));
                            break
                        }
                        _ !== w && T.push(a(o.substring(_, w))), k = o.substring(w + u, S), x.push(k), _ = S + l, R.push(T.length), T.push("")
                    }
                    E = 1 === T.length && 1 === R.length;
                    var O = v && E ? void 0 : h;
                    if (C = x.map(function(e) {
                            return n(e, O)
                        }), !c || x.length) {
                        var D = function(e) {
                            for (var t = 0, n = x.length; t < n; t++) {
                                if (d && y(e[t])) return;
                                T[R[t]] = e[t]
                            }
                            return v ? i.getTrusted(p, E ? T[0] : T.join("")) : (p && T.length > 1 && jo.throwNoconcat(o), T.join(""))
                        };
                        return f(function(e) {
                            var t = 0,
                                n = x.length,
                                i = new Array(n);
                            try {
                                for (; t < n; t++) i[t] = C[t](e);
                                return D(i)
                            } catch (e) {
                                r(jo.interr(o, e))
                            }
                        }, {
                            exp: o,
                            expressions: x,
                            $$watchDelegate: function(e, t) {
                                var n;
                                return e.$watchGroup(C, function(r, i) {
                                    var o = D(r);
                                    t.call(this, o, r !== i ? n : o, e), n = o
                                })
                            }
                        })
                    }
                }
                var u = e.length,
                    l = t.length,
                    p = new RegExp(e.replace(/./g, o), "g"),
                    d = new RegExp(t.replace(/./g, o), "g");
                return c.startSymbol = function() {
                    return e
                }, c.endSymbol = function() {
                    return t
                }, c
            }]
        }

        function Jt() {
            this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(e, t, n, r, i) {
                function o(o, s, c, u) {
                    function l() {
                        f ? o.apply(null, p) : o(v)
                    }
                    var f = arguments.length > 4,
                        p = f ? K(arguments, 4) : [],
                        d = t.setInterval,
                        h = t.clearInterval,
                        v = 0,
                        g = b(u) && !u,
                        m = (g ? r : n).defer(),
                        $ = m.promise;
                    return c = b(c) ? c : 0, $.$$intervalId = d(function() {
                        g ? i.defer(l) : e.$evalAsync(l), m.notify(v++), c > 0 && v >= c && (m.resolve(v), h($.$$intervalId), delete a[$.$$intervalId]), g || e.$apply()
                    }, s), a[$.$$intervalId] = m, $
                }
                var a = {};
                return o.cancel = function(e) {
                    if (!e) return !1;
                    if (!e.hasOwnProperty("$$intervalId")) throw Vo("badprom", "`$interval.cancel()` called with a promise that was not generated by `$interval()`.");
                    if (!a.hasOwnProperty(e.$$intervalId)) return !1;
                    var n = e.$$intervalId,
                        r = a[n];
                    return jn(r.promise), r.reject("canceled"), t.clearInterval(n), delete a[n], !0
                }, o
            }]
        }

        function Zt(e) {
            for (var t = e.split("/"), n = t.length; n--;) t[n] = ae(t[n].replace(/%2F/g, "/"));
            return t.join("/")
        }

        function Qt(e, t) {
            for (var n = e.split("/"), r = n.length; r--;) n[r] = decodeURIComponent(n[r]), t && (n[r] = n[r].replace(/\//g, "%2F"));
            return n.join("/")
        }

        function Xt(e, t) {
            var n = Yn(e);
            t.$$protocol = n.protocol, t.$$host = n.hostname, t.$$port = d(n.port) || No[n.protocol] || null
        }

        function en(e, t, n) {
            if (Bo.test(e)) throw Fo("badpath", 'Invalid url "{0}".', e);
            var r = "/" !== e.charAt(0);
            r && (e = "/" + e);
            var i = Yn(e),
                o = r && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname;
            t.$$path = Qt(o, n), t.$$search = ie(i.search), t.$$hash = decodeURIComponent(i.hash), t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path)
        }

        function tn(e, t) {
            return e.slice(0, t.length) === t
        }

        function nn(e, t) {
            if (tn(t, e)) return t.substr(e.length)
        }

        function rn(e) {
            var t = e.indexOf("#");
            return -1 === t ? e : e.substr(0, t)
        }

        function on(e) {
            return e.replace(/(#.+)|#$/, "$1")
        }

        function an(e) {
            return e.substr(0, rn(e).lastIndexOf("/") + 1)
        }

        function sn(e) {
            return e.substring(0, e.indexOf("/", e.indexOf("//") + 2))
        }

        function cn(e, t, n) {
            this.$$html5 = !0, n = n || "", Xt(e, this), this.$$parse = function(e) {
                var n = nn(t, e);
                if (!C(n)) throw Fo("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', e, t);
                en(n, this, !0), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var e = oe(this.$$search),
                    n = this.$$hash ? "#" + ae(this.$$hash) : "";
                this.$$url = Zt(this.$$path) + (e ? "?" + e : "") + n, this.$$absUrl = t + this.$$url.substr(1), this.$$urlUpdatedByLocation = !0
            }, this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a, s;
                return b(o = nn(e, r)) ? (a = o, s = n && b(o = nn(n, o)) ? t + (nn("/", o) || o) : e + a) : b(o = nn(t, r)) ? s = t + o : t === r + "/" && (s = t), s && this.$$parse(s), !!s
            }
        }

        function un(e, t, n) {
            Xt(e, this), this.$$parse = function(r) {
                function i(e, t, n) {
                    var r, i = /^\/[A-Z]:(\/.*)/;
                    return tn(t, n) && (t = t.replace(n, "")), i.exec(t) ? e : (r = i.exec(e), r ? r[1] : e)
                }
                var o, a = nn(e, r) || nn(t, r);
                y(a) || "#" !== a.charAt(0) ? this.$$html5 ? o = a : (o = "", y(a) && (e = r, this.replace())) : (o = nn(n, a), y(o) && (o = a)), en(o, this, !1), this.$$path = i(this.$$path, o, e), this.$$compose()
            }, this.$$compose = function() {
                var t = oe(this.$$search),
                    r = this.$$hash ? "#" + ae(this.$$hash) : "";
                this.$$url = Zt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + (this.$$url ? n + this.$$url : ""), this.$$urlUpdatedByLocation = !0
            }, this.$$parseLinkUrl = function(t, n) {
                return rn(e) === rn(t) && (this.$$parse(t), !0)
            }
        }

        function ln(e, t, n) {
            this.$$html5 = !0, un.apply(this, arguments), this.$$parseLinkUrl = function(r, i) {
                if (i && "#" === i[0]) return this.hash(i.slice(1)), !0;
                var o, a;
                return e === rn(r) ? o = r : (a = nn(t, r)) ? o = e + n + a : t === r + "/" && (o = t), o && this.$$parse(o), !!o
            }, this.$$compose = function() {
                var t = oe(this.$$search),
                    r = this.$$hash ? "#" + ae(this.$$hash) : "";
                this.$$url = Zt(this.$$path) + (t ? "?" + t : "") + r, this.$$absUrl = e + n + this.$$url, this.$$urlUpdatedByLocation = !0
            }
        }

        function fn(e) {
            return function() {
                return this[e]
            }
        }

        function pn(e, t) {
            return function(n) {
                return y(n) ? this[e] : (this[e] = t(n), this.$$compose(), this)
            }
        }

        function dn() {
            var e = "!",
                t = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function(t) {
                return b(t) ? (e = t, this) : e
            }, this.html5Mode = function(e) {
                return I(e) ? (t.enabled = e, this) : w(e) ? (I(e.enabled) && (t.enabled = e.enabled), I(e.requireBase) && (t.requireBase = e.requireBase), (I(e.rewriteLinks) || C(e.rewriteLinks)) && (t.rewriteLinks = e.rewriteLinks), this) : t
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(n, r, i, o, a) {
                function s(e, t, n) {
                    var i = u.url(),
                        o = u.$$state;
                    try {
                        r.url(e, t, n), u.$$state = r.state()
                    } catch (e) {
                        throw u.url(i), u.$$state = o, e
                    }
                }

                function c(e, t) {
                    n.$broadcast("$locationChangeSuccess", u.absUrl(), e, u.$$state, t)
                }
                var u, l, f, p = r.baseHref(),
                    d = r.url();
                if (t.enabled) {
                    if (!p && t.requireBase) throw Fo("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                    f = sn(d) + (p || "/"), l = i.history ? cn : ln
                } else f = rn(d), l = un;
                var h = an(f);
                u = new l(f, h, "#" + e), u.$$parseLinkUrl(d, d), u.$$state = r.state();
                var v = /^\s*(javascript|mailto):/i;
                o.on("click", function(e) {
                    var i = t.rewriteLinks;
                    if (i && !e.ctrlKey && !e.metaKey && !e.shiftKey && 2 !== e.which && 2 !== e.button) {
                        for (var a = si(e.target);
                            "a" !== F(a[0]);)
                            if (a[0] === o[0] || !(a = a.parent())[0]) return;
                        if (!C(i) || !y(a.attr(i))) {
                            var s = a.prop("href"),
                                c = a.attr("href") || a.attr("xlink:href");
                            w(s) && "[object SVGAnimatedString]" === s.toString() && (s = Yn(s.animVal).href), v.test(s) || !s || a.attr("target") || e.isDefaultPrevented() || u.$$parseLinkUrl(s, c) && (e.preventDefault(), u.absUrl() !== r.url() && n.$apply())
                        }
                    }
                }), on(u.absUrl()) !== on(d) && r.url(u.absUrl(), !0);
                var g = !0;
                return r.onUrlChange(function(e, t) {
                    if (!tn(e, h)) return void(a.location.href = e);
                    n.$evalAsync(function() {
                        var r, i = u.absUrl(),
                            o = u.$$state;
                        e = on(e), u.$$parse(e), u.$$state = t, r = n.$broadcast("$locationChangeStart", e, i, t, o).defaultPrevented, u.absUrl() === e && (r ? (u.$$parse(i), u.$$state = o, s(i, !1, o)) : (g = !1, c(i, o)))
                    }), n.$$phase || n.$digest()
                }), n.$watch(function() {
                    if (g || u.$$urlUpdatedByLocation) {
                        u.$$urlUpdatedByLocation = !1;
                        var e = on(r.url()),
                            t = on(u.absUrl()),
                            o = r.state(),
                            a = u.$$replace,
                            l = e !== t || u.$$html5 && i.history && o !== u.$$state;
                        (g || l) && (g = !1, n.$evalAsync(function() {
                            var t = u.absUrl(),
                                r = n.$broadcast("$locationChangeStart", t, e, u.$$state, o).defaultPrevented;
                            u.absUrl() === t && (r ? (u.$$parse(e), u.$$state = o) : (l && s(t, a, o === u.$$state ? null : u.$$state), c(e, o)))
                        }))
                    }
                    u.$$replace = !1
                }), u
            }]
        }

        function hn() {
            var e = !0,
                t = this;
            this.debugEnabled = function(t) {
                return b(t) ? (e = t, this) : e
            }, this.$get = ["$window", function(n) {
                function r(e) {
                    return x(e) && (e.stack && a ? e = e.message && -1 === e.stack.indexOf(e.message) ? "Error: " + e.message + "\n" + e.stack : e.stack : e.sourceURL && (e = e.message + "\n" + e.sourceURL + ":" + e.line)), e
                }

                function i(e) {
                    var t = n.console || {},
                        i = t[e] || t.log || v;
                    return function() {
                        var e = [];
                        return o(arguments, function(t) {
                            e.push(r(t))
                        }), Function.prototype.apply.call(i, t, e)
                    }
                }
                var a = ai || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
                return {
                    log: i("log"),
                    info: i("info"),
                    warn: i("warn"),
                    error: i("error"),
                    debug: function() {
                        var n = i("debug");
                        return function() {
                            e && n.apply(t, arguments)
                        }
                    }()
                }
            }]
        }

        function vn(e) {
            return e + ""
        }

        function gn(e, t) {
            return void 0 !== e ? e : t
        }

        function mn(e, t) {
            return void 0 === e ? t : void 0 === t ? e : e + t
        }

        function $n(e, t) {
            return !e(t).$stateful
        }

        function yn(e, t) {
            switch (e.type) {
                case Yo.MemberExpression:
                    if (e.computed) return !1;
                    break;
                case Yo.UnaryExpression:
                    return Jo;
                case Yo.BinaryExpression:
                    return "+" !== e.operator && Jo;
                case Yo.CallExpression:
                    return !1
            }
            return void 0 === t ? Zo : t
        }

        function bn(e, t, n) {
            var r, i, a, s = e.isPure = yn(e, n);
            switch (e.type) {
                case Yo.Program:
                    r = !0, o(e.body, function(e) {
                        bn(e.expression, t, s), r = r && e.expression.constant
                    }), e.constant = r;
                    break;
                case Yo.Literal:
                    e.constant = !0, e.toWatch = [];
                    break;
                case Yo.UnaryExpression:
                    bn(e.argument, t, s), e.constant = e.argument.constant, e.toWatch = e.argument.toWatch;
                    break;
                case Yo.BinaryExpression:
                    bn(e.left, t, s), bn(e.right, t, s), e.constant = e.left.constant && e.right.constant, e.toWatch = e.left.toWatch.concat(e.right.toWatch);
                    break;
                case Yo.LogicalExpression:
                    bn(e.left, t, s), bn(e.right, t, s), e.constant = e.left.constant && e.right.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case Yo.ConditionalExpression:
                    bn(e.test, t, s), bn(e.alternate, t, s), bn(e.consequent, t, s), e.constant = e.test.constant && e.alternate.constant && e.consequent.constant, e.toWatch = e.constant ? [] : [e];
                    break;
                case Yo.Identifier:
                    e.constant = !1, e.toWatch = [e];
                    break;
                case Yo.MemberExpression:
                    bn(e.object, t, s), e.computed && bn(e.property, t, s), e.constant = e.object.constant && (!e.computed || e.property.constant), e.toWatch = e.constant ? [] : [e];
                    break;
                case Yo.CallExpression:
                    a = !!e.filter && $n(t, e.callee.name), r = a, i = [], o(e.arguments, function(e) {
                        bn(e, t, s), r = r && e.constant, i.push.apply(i, e.toWatch)
                    }), e.constant = r, e.toWatch = a ? i : [e];
                    break;
                case Yo.AssignmentExpression:
                    bn(e.left, t, s), bn(e.right, t, s), e.constant = e.left.constant && e.right.constant, e.toWatch = [e];
                    break;
                case Yo.ArrayExpression:
                    r = !0, i = [], o(e.elements, function(e) {
                        bn(e, t, s), r = r && e.constant, i.push.apply(i, e.toWatch)
                    }), e.constant = r, e.toWatch = i;
                    break;
                case Yo.ObjectExpression:
                    r = !0, i = [], o(e.properties, function(e) {
                        bn(e.value, t, s), r = r && e.value.constant, i.push.apply(i, e.value.toWatch), e.computed && (bn(e.key, t, !1), r = r && e.key.constant, i.push.apply(i, e.key.toWatch))
                    }), e.constant = r, e.toWatch = i;
                    break;
                case Yo.ThisExpression:
                case Yo.LocalsExpression:
                    e.constant = !1, e.toWatch = []
            }
        }

        function wn(e) {
            if (1 === e.length) {
                var t = e[0].expression,
                    n = t.toWatch;
                return 1 !== n.length ? n : n[0] !== t ? n : void 0
            }
        }

        function Sn(e) {
            return e.type === Yo.Identifier || e.type === Yo.MemberExpression
        }

        function Cn(e) {
            if (1 === e.body.length && Sn(e.body[0].expression)) return {
                type: Yo.AssignmentExpression,
                left: e.body[0].expression,
                right: {
                    type: Yo.NGValueParameter
                },
                operator: "="
            }
        }

        function kn(e) {
            return 0 === e.body.length || 1 === e.body.length && (e.body[0].expression.type === Yo.Literal || e.body[0].expression.type === Yo.ArrayExpression || e.body[0].expression.type === Yo.ObjectExpression)
        }

        function En(e) {
            return e.constant
        }

        function _n(e) {
            this.$filter = e
        }

        function xn(e) {
            this.$filter = e
        }

        function An(e, t, n) {
            this.ast = new Yo(e, n), this.astCompiler = n.csp ? new xn(t) : new _n(t)
        }

        function Tn(e) {
            return A(e.valueOf) ? e.valueOf() : Go.call(e)
        }

        function Rn() {
            var e, t, n = we(),
                r = {
                    true: !0,
                    false: !1,
                    null: null,
                    undefined: void 0
                };
            this.addLiteral = function(e, t) {
                r[e] = t
            }, this.setIdentifierFns = function(n, r) {
                return e = n, t = r, this
            }, this.$get = ["$filter", function(i) {
                function a(e, t) {
                    var r, o;
                    switch (typeof e) {
                        case "string":
                            if (e = e.trim(), o = e, !(r = n[o])) {
                                r = new An(new Ko(y), i, y).parse(e), n[o] = d(r)
                            }
                            return m(r, t);
                        case "function":
                            return m(e, t);
                        default:
                            return m(v, t)
                    }
                }

                function s(e) {
                    return new An(new Ko(y), i, y).getAst(e).ast
                }

                function c(e, t, n) {
                    return null == e || null == t ? e === t : !("object" == typeof e && "object" == typeof(e = Tn(e)) && !n) && (e === t || e !== e && t !== t)
                }

                function u(e, t, n, r, i) {
                    var o, a = r.inputs;
                    if (1 === a.length) {
                        var s = c;
                        return a = a[0], e.$watch(function(e) {
                            var t = a(e);
                            return c(t, s, a.isPure) || (o = r(e, void 0, void 0, [t]), s = t && Tn(t)), o
                        }, t, n, i)
                    }
                    for (var u = [], l = [], f = 0, p = a.length; f < p; f++) u[f] = c, l[f] = null;
                    return e.$watch(function(e) {
                        for (var t = !1, n = 0, i = a.length; n < i; n++) {
                            var s = a[n](e);
                            (t || (t = !c(s, u[n], a[n].isPure))) && (l[n] = s, u[n] = s && Tn(s))
                        }
                        return t && (o = r(e, void 0, void 0, l)), o
                    }, t, n, i)
                }

                function l(e, t, n, r, i) {
                    function o() {
                        u(c) && s()
                    }

                    function a(e, t, n, r) {
                        return c = h && r ? r[0] : l(e, t, n, r), u(c) && e.$$postDigest(o), p(c)
                    }
                    var s, c, u = r.literal ? f : b,
                        l = r.$$intercepted || r,
                        p = r.$$interceptor || g,
                        h = r.inputs && !l.inputs;
                    return a.literal = r.literal, a.constant = r.constant, a.inputs = r.inputs, d(a), s = e.$watch(a, t, n, i)
                }

                function f(e) {
                    var t = !0;
                    return o(e, function(e) {
                        b(e) || (t = !1)
                    }), t
                }

                function p(e, t, n, r) {
                    var i = e.$watch(function(e) {
                        return i(), r(e)
                    }, t, n);
                    return i
                }

                function d(e) {
                    return e.constant ? e.$$watchDelegate = p : e.oneTime ? e.$$watchDelegate = l : e.inputs && (e.$$watchDelegate = u), e
                }

                function h(e, t) {
                    function n(n) {
                        return t(e(n))
                    }
                    return n.$stateful = e.$stateful || t.$stateful, n.$$pure = e.$$pure && t.$$pure, n
                }

                function m(e, t) {
                    if (!t) return e;
                    e.$$interceptor && (t = h(e.$$interceptor, t), e = e.$$intercepted);
                    var n = !1,
                        r = function(r, i, o, a) {
                            var s = n && a ? a[0] : e(r, i, o, a);
                            return t(s)
                        };
                    return r.$$intercepted = e, r.$$interceptor = t, r.literal = e.literal, r.oneTime = e.oneTime, r.constant = e.constant, t.$stateful || (n = !e.inputs, r.inputs = e.inputs ? e.inputs : [e], t.$$pure || (r.inputs = r.inputs.map(function(e) {
                        return e.isPure === Zo ? function(t) {
                            return e(t)
                        } : e
                    }))), d(r)
                }
                var $ = Ai().noUnsafeEval,
                    y = {
                        csp: $,
                        literals: q(r),
                        isIdentifierStart: A(e) && e,
                        isIdentifierContinue: A(t) && t
                    };
                return a.$$getAst = s, a
            }]
        }

        function On() {
            var e = !0;
            this.$get = ["$rootScope", "$exceptionHandler", function(t, n) {
                return Pn(function(e) {
                    t.$evalAsync(e)
                }, n, e)
            }], this.errorOnUnhandledRejections = function(t) {
                return b(t) ? (e = t, this) : e
            }
        }

        function Dn() {
            var e = !0;
            this.$get = ["$browser", "$exceptionHandler", function(t, n) {
                return Pn(function(e) {
                    t.defer(e)
                }, n, e)
            }], this.errorOnUnhandledRejections = function(t) {
                return b(t) ? (e = t, this) : e
            }
        }

        function Pn(e, t, n) {
            function i() {
                return new a
            }

            function a() {
                var e = this.promise = new s;
                this.resolve = function(t) {
                    p(e, t)
                }, this.reject = function(t) {
                    h(e, t)
                }, this.notify = function(t) {
                    g(e, t)
                }
            }

            function s() {
                this.$$state = {
                    status: 0
                }
            }

            function c(r) {
                var i, o, a;
                a = r.pending, r.processScheduled = !1, r.pending = void 0;
                try {
                    for (var s = 0, c = a.length; s < c; ++s) {
                        In(r), o = a[s][0], i = a[s][r.status];
                        try {
                            A(i) ? p(o, i(r.value)) : 1 === r.status ? p(o, r.value) : h(o, r.value)
                        } catch (e) {
                            h(o, e), e && !0 === e.$$passToExceptionHandler && t(e)
                        }
                    }
                } finally {
                    --T, n && 0 === T && e(u)
                }
            }

            function u() {
                for (; !T && R.length;) {
                    var e = R.shift();
                    if (!Mn(e)) {
                        In(e);
                        var n = "Possibly unhandled rejection: " + _e(e.value);
                        x(e.value) ? t(e.value, n) : t(n)
                    }
                }
            }

            function l(t) {
                !n || t.pending || 2 !== t.status || Mn(t) || (0 === T && 0 === R.length && e(u), R.push(t)), !t.processScheduled && t.pending && (t.processScheduled = !0, ++T, e(function() {
                    c(t)
                }))
            }

            function p(e, t) {
                e.$$state.status || (t === e ? v(e, E("qcycle", "Expected promise to be resolved with value other than itself '{0}'", t)) : d(e, t))
            }

            function d(e, t) {
                function n(t) {
                    a || (a = !0, d(e, t))
                }

                function r(t) {
                    a || (a = !0, v(e, t))
                }

                function i(t) {
                    g(e, t)
                }
                var o, a = !1;
                try {
                    (w(t) || A(t)) && (o = t.then), A(o) ? (e.$$state.status = -1, o.call(t, n, r, i)) : (e.$$state.value = t, e.$$state.status = 1, l(e.$$state))
                } catch (e) {
                    r(e)
                }
            }

            function h(e, t) {
                e.$$state.status || v(e, t)
            }

            function v(e, t) {
                e.$$state.value = t, e.$$state.status = 2, l(e.$$state)
            }

            function g(n, r) {
                var i = n.$$state.pending;
                n.$$state.status <= 0 && i && i.length && e(function() {
                    for (var e, n, o = 0, a = i.length; o < a; o++) {
                        n = i[o][0], e = i[o][3];
                        try {
                            g(n, A(e) ? e(r) : r)
                        } catch (e) {
                            t(e)
                        }
                    }
                })
            }

            function m(e) {
                var t = new s;
                return h(t, e), t
            }

            function $(e, t, n) {
                var r = null;
                try {
                    A(n) && (r = n())
                } catch (e) {
                    return m(e)
                }
                return j(r) ? r.then(function() {
                    return t(e)
                }, m) : t(e)
            }

            function b(e, t, n, r) {
                var i = new s;
                return p(i, e), i.then(t, n, r)
            }

            function S(e) {
                var t = new s,
                    n = 0,
                    r = _(e) ? [] : {};
                return o(e, function(e, i) {
                    n++, b(e).then(function(e) {
                        r[i] = e, --n || p(t, r)
                    }, function(e) {
                        h(t, e)
                    })
                }), 0 === n && p(t, r), t
            }

            function C(e) {
                var t = i();
                return o(e, function(e) {
                    b(e).then(t.resolve, t.reject)
                }), t.promise
            }

            function k(e) {
                function t(e) {
                    p(r, e)
                }

                function n(e) {
                    h(r, e)
                }
                if (!A(e)) throw E("norslvr", "Expected resolverFn, got '{0}'", e);
                var r = new s;
                return e(t, n), r
            }
            var E = r("$q", TypeError),
                T = 0,
                R = [];
            f(s.prototype, {
                then: function(e, t, n) {
                    if (y(e) && y(t) && y(n)) return this;
                    var r = new s;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([r, e, t, n]), this.$$state.status > 0 && l(this.$$state), r
                },
                catch: function(e) {
                    return this.then(null, e)
                },
                finally: function(e, t) {
                    return this.then(function(t) {
                        return $(t, O, e)
                    }, function(t) {
                        return $(t, m, e)
                    }, t)
                }
            });
            var O = b;
            return k.prototype = s.prototype, k.defer = i, k.reject = m, k.when = b, k.resolve = O, k.all = S, k.race = C, k
        }

        function Mn(e) {
            return !!e.pur
        }

        function In(e) {
            e.pur = !0
        }

        function jn(e) {
            In(e.$$state)
        }

        function Vn() {
            this.$get = ["$window", "$timeout", function(e, t) {
                var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
                    r = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.webkitCancelRequestAnimationFrame,
                    i = !!n,
                    o = i ? function(e) {
                        var t = n(e);
                        return function() {
                            r(t)
                        }
                    } : function(e) {
                        var n = t(e, 16.66, !1);
                        return function() {
                            t.cancel(n)
                        }
                    };
                return o.supported = i, o
            }]
        }

        function Un() {
            function e(e) {
                function t() {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = c(), this.$$ChildScope = null, this.$$suspended = !1
                }
                return t.prototype = e, t
            }
            var t = 10,
                n = r("$rootScope"),
                a = null,
                s = null;
            this.digestTtl = function(e) {
                return arguments.length && (t = e), t
            }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(r, u, l) {
                function f(e) {
                    e.currentScope.$$destroyed = !0
                }

                function p(e) {
                    9 === ai && (e.$$childHead && p(e.$$childHead), e.$$nextSibling && p(e.$$nextSibling)), e.$parent = e.$$nextSibling = e.$$prevSibling = e.$$childHead = e.$$childTail = e.$root = e.$$watchers = null
                }

                function d() {
                    this.$id = c(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$suspended = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
                }

                function h(e) {
                    if (k.$$phase) throw n("inprog", "{0} already in progress", k.$$phase);
                    k.$$phase = e
                }

                function g() {
                    k.$$phase = null
                }

                function m(e, t) {
                    do {
                        e.$$watchersCount += t
                    } while (e = e.$parent)
                }

                function $(e, t, n) {
                    do {
                        e.$$listenerCount[n] -= t, 0 === e.$$listenerCount[n] && delete e.$$listenerCount[n]
                    } while (e = e.$parent)
                }

                function b() {}

                function S() {
                    for (; x.length;) try {
                        x.shift()()
                    } catch (e) {
                        r(e)
                    }
                    s = null
                }

                function C() {
                    null === s && (s = l.defer(function() {
                        k.$apply(S)
                    }))
                }
                d.prototype = {
                    constructor: d,
                    $new: function(t, n) {
                        var r;
                        return n = n || this, t ? (r = new d, r.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = e(this)), r = new this.$$ChildScope), r.$parent = n, r.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = r, n.$$childTail = r) : n.$$childHead = n.$$childTail = r, (t || n !== this) && r.$on("$destroy", f), r
                    },
                    $watch: function(e, t, n, r) {
                        var i = u(e),
                            o = A(t) ? t : v;
                        if (i.$$watchDelegate) return i.$$watchDelegate(this, o, n, i, e);
                        var s = this,
                            c = s.$$watchers,
                            l = {
                                fn: o,
                                last: b,
                                get: i,
                                exp: r || e,
                                eq: !!n
                            };
                        return a = null, c || (c = s.$$watchers = [], c.$$digestWatchIndex = -1), c.unshift(l), c.$$digestWatchIndex++, m(this, 1),
                            function() {
                                var e = H(c, l);
                                e >= 0 && (m(s, -1), e < c.$$digestWatchIndex && c.$$digestWatchIndex--), a = null
                            }
                    },
                    $watchGroup: function(e, t) {
                        function n() {
                            c = !1;
                            try {
                                u ? (u = !1, t(i, i, s)) : t(i, r, s)
                            } finally {
                                for (var n = 0; n < e.length; n++) r[n] = i[n]
                            }
                        }
                        var r = new Array(e.length),
                            i = new Array(e.length),
                            a = [],
                            s = this,
                            c = !1,
                            u = !0;
                        if (!e.length) {
                            var l = !0;
                            return s.$evalAsync(function() {
                                    l && t(i, i, s)
                                }),
                                function() {
                                    l = !1
                                }
                        }
                        return 1 === e.length ? this.$watch(e[0], function(e, n, o) {
                            i[0] = e, r[0] = n, t(i, e === n ? i : r, o)
                        }) : (o(e, function(e, t) {
                            var r = s.$watch(e, function(e) {
                                i[t] = e, c || (c = !0, s.$evalAsync(n))
                            });
                            a.push(r)
                        }), function() {
                            for (; a.length;) a.shift()()
                        })
                    },
                    $watchCollection: function(e, t) {
                        function n(e) {
                            o = e;
                            var t, n, r, s;
                            if (!y(o)) {
                                if (w(o))
                                    if (i(o)) {
                                        a !== d && (a = d, g = a.length = 0, f++), t = o.length, g !== t && (f++, a.length = g = t);
                                        for (var c = 0; c < t; c++) s = a[c], r = o[c], s !== s && r !== r || s === r || (f++, a[c] = r)
                                    } else {
                                        a !== h && (a = h = {}, g = 0, f++), t = 0;
                                        for (n in o) di.call(o, n) && (t++, r = o[n], s = a[n], n in a ? s !== s && r !== r || s === r || (f++, a[n] = r) : (g++, a[n] = r, f++));
                                        if (g > t) {
                                            f++;
                                            for (n in a) di.call(o, n) || (g--, delete a[n])
                                        }
                                    }
                                else a !== o && (a = o, f++);
                                return f
                            }
                        }

                        function r() {
                            if (v ? (v = !1, t(o, o, c)) : t(o, s, c), l)
                                if (w(o))
                                    if (i(o)) {
                                        s = new Array(o.length);
                                        for (var e = 0; e < o.length; e++) s[e] = o[e]
                                    } else {
                                        s = {};
                                        for (var n in o) di.call(o, n) && (s[n] = o[n])
                                    }
                            else s = o
                        }
                        n.$$pure = u(e).literal, n.$stateful = !n.$$pure;
                        var o, a, s, c = this,
                            l = t.length > 1,
                            f = 0,
                            p = u(e, n),
                            d = [],
                            h = {},
                            v = !0,
                            g = 0;
                        return this.$watch(p, r)
                    },
                    $digest: function() {
                        var e, i, o, c, u, f, p, d, v, m, $, y = t,
                            w = E.length ? k : this,
                            C = [];
                        h("$digest"), l.$$checkUrlChange(), this === k && null !== s && (l.defer.cancel(s), S()), a = null;
                        do {
                            p = !1, v = w;
                            for (var x = 0; x < E.length; x++) {
                                try {
                                    $ = E[x], c = $.fn, c($.scope, $.locals)
                                } catch (e) {
                                    r(e)
                                }
                                a = null
                            }
                            E.length = 0;
                            e: do {
                                if (f = !v.$$suspended && v.$$watchers)
                                    for (f.$$digestWatchIndex = f.length; f.$$digestWatchIndex--;) try {
                                        if (e = f[f.$$digestWatchIndex])
                                            if (u = e.get, (i = u(v)) === (o = e.last) || (e.eq ? z(i, o) : ki(i) && ki(o))) {
                                                if (e === a) {
                                                    p = !1;
                                                    break e
                                                }
                                            } else p = !0, a = e, e.last = e.eq ? q(i, null) : i, c = e.fn, c(i, o === b ? i : o, v), y < 5 && (m = 4 - y, C[m] || (C[m] = []), C[m].push({
                                                msg: A(e.exp) ? "fn: " + (e.exp.name || e.exp.toString()) : e.exp,
                                                newVal: i,
                                                oldVal: o
                                            }))
                                    } catch (e) {
                                        r(e)
                                    }
                                if (!(d = !v.$$suspended && v.$$watchersCount && v.$$childHead || v !== w && v.$$nextSibling))
                                    for (; v !== w && !(d = v.$$nextSibling);) v = v.$parent
                            } while (v = d);
                            if ((p || E.length) && !y--) throw g(), n("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", t, C)
                        } while (p || E.length);
                        for (g(); T < _.length;) try {
                            _[T++]()
                        } catch (e) {
                            r(e)
                        }
                        _.length = T = 0, l.$$checkUrlChange()
                    },
                    $suspend: function() {
                        this.$$suspended = !0
                    },
                    $isSuspended: function() {
                        return this.$$suspended
                    },
                    $resume: function() {
                        this.$$suspended = !1
                    },
                    $destroy: function() {
                        if (!this.$$destroyed) {
                            var e = this.$parent;
                            this.$broadcast("$destroy"), this.$$destroyed = !0, this === k && l.$$applicationDestroyed(), m(this, -this.$$watchersCount);
                            for (var t in this.$$listenerCount) $(this, this.$$listenerCount[t], t);
                            e && e.$$childHead === this && (e.$$childHead = this.$$nextSibling), e && e.$$childTail === this && (e.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = v, this.$on = this.$watch = this.$watchGroup = function() {
                                return v
                            }, this.$$listeners = {}, this.$$nextSibling = null, p(this)
                        }
                    },
                    $eval: function(e, t) {
                        return u(e)(this, t)
                    },
                    $evalAsync: function(e, t) {
                        k.$$phase || E.length || l.defer(function() {
                            E.length && k.$digest()
                        }), E.push({
                            scope: this,
                            fn: u(e),
                            locals: t
                        })
                    },
                    $$postDigest: function(e) {
                        _.push(e)
                    },
                    $apply: function(e) {
                        try {
                            h("$apply");
                            try {
                                return this.$eval(e)
                            } finally {
                                g()
                            }
                        } catch (e) {
                            r(e)
                        } finally {
                            try {
                                k.$digest()
                            } catch (e) {
                                throw r(e), e
                            }
                        }
                    },
                    $applyAsync: function(e) {
                        function t() {
                            n.$eval(e)
                        }
                        var n = this;
                        e && x.push(t), e = u(e), C()
                    },
                    $on: function(e, t) {
                        var n = this.$$listeners[e];
                        n || (this.$$listeners[e] = n = []), n.push(t);
                        var r = this;
                        do {
                            r.$$listenerCount[e] || (r.$$listenerCount[e] = 0), r.$$listenerCount[e]++
                        } while (r = r.$parent);
                        var i = this;
                        return function() {
                            var r = n.indexOf(t); - 1 !== r && (delete n[r], $(i, 1, e))
                        }
                    },
                    $emit: function(e, t) {
                        var n, i, o, a = [],
                            s = this,
                            c = !1,
                            u = {
                                name: e,
                                targetScope: s,
                                stopPropagation: function() {
                                    c = !0
                                },
                                preventDefault: function() {
                                    u.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            },
                            l = W([u], arguments, 1);
                        do {
                            for (n = s.$$listeners[e] || a, u.currentScope = s, i = 0, o = n.length; i < o; i++)
                                if (n[i]) try {
                                    n[i].apply(null, l)
                                } catch (e) {
                                    r(e)
                                } else n.splice(i, 1), i--, o--;
                            if (c) break;
                            s = s.$parent
                        } while (s);
                        return u.currentScope = null, u
                    },
                    $broadcast: function(e, t) {
                        var n = this,
                            i = n,
                            o = n,
                            a = {
                                name: e,
                                targetScope: n,
                                preventDefault: function() {
                                    a.defaultPrevented = !0
                                },
                                defaultPrevented: !1
                            };
                        if (!n.$$listenerCount[e]) return a;
                        for (var s, c, u, l = W([a], arguments, 1); i = o;) {
                            for (a.currentScope = i, s = i.$$listeners[e] || [], c = 0, u = s.length; c < u; c++)
                                if (s[c]) try {
                                    s[c].apply(null, l)
                                } catch (e) {
                                    r(e)
                                } else s.splice(c, 1), c--, u--;
                            if (!(o = i.$$listenerCount[e] && i.$$childHead || i !== n && i.$$nextSibling))
                                for (; i !== n && !(o = i.$$nextSibling);) i = i.$parent
                        }
                        return a.currentScope = null, a
                    }
                };
                var k = new d,
                    E = k.$$asyncQueue = [],
                    _ = k.$$postDigestQueue = [],
                    x = k.$$applyAsyncQueue = [],
                    T = 0;
                return k
            }]
        }

        function Ln() {
            var e = /^\s*(https?|s?ftp|mailto|tel|file):/,
                t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(t) {
                return b(t) ? (e = t, this) : e
            }, this.imgSrcSanitizationWhitelist = function(e) {
                return b(e) ? (t = e, this) : t
            }, this.$get = function() {
                return function(n, r) {
                    var i = r ? t : e,
                        o = Yn(n && n.trim()).href;
                    return "" === o || o.match(i) ? n : "unsafe:" + o
                }
            }
        }

        function Nn(e) {
            return e.replace(ta, Re)
        }

        function Fn(e) {
            if ("self" === e) return e;
            if (C(e)) {
                if (e.indexOf("***") > -1) throw Xo("iwcard", "Illegal sequence *** in string matcher.  String: {0}", e);
                return e = xi(e).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*"), new RegExp("^" + e + "$")
            }
            if (T(e)) return new RegExp("^" + e.source + "$");
            throw Xo("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Bn(e) {
            var t = [];
            return b(e) && o(e, function(e) {
                t.push(Fn(e))
            }), t
        }

        function Hn() {
            this.SCE_CONTEXTS = ea;
            var e = ["self"],
                t = [];
            this.resourceUrlWhitelist = function(t) {
                return arguments.length && (e = Bn(t)), e
            }, this.resourceUrlBlacklist = function(e) {
                return arguments.length && (t = Bn(e)), t
            }, this.$get = ["$injector", "$$sanitizeUri", function(n, r) {
                function i(e, t) {
                    return "self" === e ? Jn(t) || Zn(t) : !!e.exec(t.href)
                }

                function o(n) {
                    var r, o, a = Yn(n.toString()),
                        s = !1;
                    for (r = 0, o = e.length; r < o; r++)
                        if (i(e[r], a)) {
                            s = !0;
                            break
                        } if (s)
                        for (r = 0, o = t.length; r < o; r++)
                            if (i(t[r], a)) {
                                s = !1;
                                break
                            } return s
                }

                function a(e) {
                    var t = function(e) {
                        this.$$unwrapTrustedValue = function() {
                            return e
                        }
                    };
                    return e && (t.prototype = new e), t.prototype.valueOf = function() {
                        return this.$$unwrapTrustedValue()
                    }, t.prototype.toString = function() {
                        return this.$$unwrapTrustedValue().toString()
                    }, t
                }

                function s(e, t) {
                    var n = p.hasOwnProperty(e) ? p[e] : null;
                    if (!n) throw Xo("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", e, t);
                    if (null === t || y(t) || "" === t) return t;
                    if ("string" != typeof t) throw Xo("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", e);
                    return new n(t)
                }

                function c(e) {
                    return e instanceof f ? e.$$unwrapTrustedValue() : e
                }

                function u(e, t) {
                    if (null === t || y(t) || "" === t) return t;
                    var n = p.hasOwnProperty(e) ? p[e] : null;
                    if (n && t instanceof n) return t.$$unwrapTrustedValue();
                    if (A(t.$$unwrapTrustedValue) && (t = t.$$unwrapTrustedValue()), e === ea.MEDIA_URL || e === ea.URL) return r(t, e === ea.MEDIA_URL);
                    if (e === ea.RESOURCE_URL) {
                        if (o(t)) return t;
                        throw Xo("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", t.toString())
                    }
                    if (e === ea.HTML) return l(t);
                    throw Xo("unsafe", "Attempting to use an unsafe value in a safe context.")
                }
                var l = function(e) {
                    throw Xo("unsafe", "Attempting to use an unsafe value in a safe context.")
                };
                n.has("$sanitize") && (l = n.get("$sanitize"));
                var f = a(),
                    p = {};
                return p[ea.HTML] = a(f), p[ea.CSS] = a(f), p[ea.MEDIA_URL] = a(f), p[ea.URL] = a(p[ea.MEDIA_URL]), p[ea.JS] = a(f), p[ea.RESOURCE_URL] = a(p[ea.URL]), {
                    trustAs: s,
                    getTrusted: u,
                    valueOf: c
                }
            }]
        }

        function qn() {
            var e = !0;
            this.enabled = function(t) {
                return arguments.length && (e = !!t), e
            }, this.$get = ["$parse", "$sceDelegate", function(t, n) {
                if (e && ai < 8) throw Xo("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                var r = ke(ea);
                r.isEnabled = function() {
                    return e
                }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, e || (r.trustAs = r.getTrusted = function(e, t) {
                    return t
                }, r.valueOf = g), r.parseAs = function(e, n) {
                    var i = t(n);
                    return i.literal && i.constant ? i : t(n, function(t) {
                        return r.getTrusted(e, t)
                    })
                };
                var i = r.parseAs,
                    a = r.getTrusted,
                    s = r.trustAs;
                return o(ea, function(e, t) {
                    var n = hi(t);
                    r[Nn("parse_as_" + n)] = function(t) {
                        return i(e, t)
                    }, r[Nn("get_trusted_" + n)] = function(t) {
                        return a(e, t)
                    }, r[Nn("trust_as_" + n)] = function(t) {
                        return s(e, t)
                    }
                }), r
            }]
        }

        function Gn() {
            this.$get = ["$window", "$document", function(e, t) {
                var n = {},
                    r = e.nw && e.nw.process,
                    i = !r && e.chrome && (e.chrome.app && e.chrome.app.runtime || !e.chrome.app && e.chrome.runtime && e.chrome.runtime.id),
                    o = !i && e.history && e.history.pushState,
                    a = d((/android (\d+)/.exec(hi((e.navigator || {}).userAgent)) || [])[1]),
                    s = /Boxee/i.test((e.navigator || {}).userAgent),
                    c = t[0] || {},
                    u = c.body && c.body.style,
                    l = !1,
                    f = !1;
                return u && (l = !!("transition" in u || "webkitTransition" in u), f = !!("animation" in u || "webkitAnimation" in u)), {
                    history: !(!o || a < 4 || s),
                    hasEvent: function(e) {
                        if ("input" === e && ai) return !1;
                        if (y(n[e])) {
                            var t = c.createElement("div");
                            n[e] = "on" + e in t
                        }
                        return n[e]
                    },
                    csp: Ai(),
                    transitions: l,
                    animations: f,
                    android: a
                }
            }]
        }

        function zn() {
            var e;
            this.httpOptions = function(t) {
                return t ? (e = t, this) : e
            }, this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function(t, n, r, i, o) {
                function a(s, c) {
                    function u(e) {
                        return c || (e = na("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", s, e.status, e.statusText), t(e)), i.reject(e)
                    }
                    a.totalPendingRequests++, C(s) && !y(n.get(s)) || (s = o.getTrustedResourceUrl(s));
                    var l = r.defaults && r.defaults.transformResponse;
                    return _(l) ? l = l.filter(function(e) {
                        return e !== Lt
                    }) : l === Lt && (l = null), r.get(s, f({
                        cache: n,
                        transformResponse: l
                    }, e)).finally(function() {
                        a.totalPendingRequests--
                    }).then(function(e) {
                        return n.put(s, e.data)
                    }, u)
                }
                return a.totalPendingRequests = 0, a
            }]
        }

        function Wn() {
            this.$get = ["$rootScope", "$browser", "$location", function(e, t, n) {
                var r = {};
                return r.findBindings = function(e, t, n) {
                    var r = e.getElementsByClassName("ng-binding"),
                        i = [];
                    return o(r, function(e) {
                        var r = Si.element(e).data("$binding");
                        r && o(r, function(r) {
                            if (n) {
                                new RegExp("(^|\\s)" + xi(t) + "(\\s|\\||$)").test(r) && i.push(e)
                            } else -1 !== r.indexOf(t) && i.push(e)
                        })
                    }), i
                }, r.findModels = function(e, t, n) {
                    for (var r = ["ng-", "data-ng-", "ng\\:"], i = 0; i < r.length; ++i) {
                        var o = n ? "=" : "*=",
                            a = "[" + r[i] + "model" + o + '"' + t + '"]',
                            s = e.querySelectorAll(a);
                        if (s.length) return s
                    }
                }, r.getLocation = function() {
                    return n.url()
                }, r.setLocation = function(t) {
                    t !== n.url() && (n.url(t), e.$digest())
                }, r.whenStable = function(e) {
                    t.notifyWhenNoOutstandingRequests(e)
                }, r
            }]
        }

        function Kn() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(e, t, n, r, i) {
                function o(o, s, c) {
                    A(o) || (c = s, s = o, o = v);
                    var u, l = K(arguments, 3),
                        f = b(c) && !c,
                        p = (f ? r : n).defer(),
                        d = p.promise;
                    return u = t.defer(function() {
                        try {
                            p.resolve(o.apply(null, l))
                        } catch (e) {
                            p.reject(e), i(e)
                        } finally {
                            delete a[d.$$timeoutId]
                        }
                        f || e.$apply()
                    }, s), d.$$timeoutId = u, a[u] = p, d
                }
                var a = {};
                return o.cancel = function(e) {
                    if (!e) return !1;
                    if (!e.hasOwnProperty("$$timeoutId")) throw ra("badprom", "`$timeout.cancel()` called with a promise that was not generated by `$timeout()`.");
                    if (!a.hasOwnProperty(e.$$timeoutId)) return !1;
                    var n = e.$$timeoutId,
                        r = a[n];
                    return jn(r.promise), r.reject("canceled"), delete a[n], t.defer.cancel(n)
                }, o
            }]
        }

        function Yn(e) {
            if (!C(e)) return e;
            var t = e;
            return ai && (ia.setAttribute("href", t), t = ia.href), ia.setAttribute("href", t), {
                href: ia.href,
                protocol: ia.protocol ? ia.protocol.replace(/:$/, "") : "",
                host: ia.host,
                search: ia.search ? ia.search.replace(/^\?/, "") : "",
                hash: ia.hash ? ia.hash.replace(/^#/, "") : "",
                hostname: ia.hostname,
                port: ia.port,
                pathname: "/" === ia.pathname.charAt(0) ? ia.pathname : "/" + ia.pathname
            }
        }

        function Jn(e) {
            return Xn(e, oa)
        }

        function Zn(e) {
            return Xn(e, er())
        }

        function Qn(e) {
            var t = [oa].concat(e.map(Yn));
            return function(e) {
                var n = Yn(e);
                return t.some(Xn.bind(null, n))
            }
        }

        function Xn(e, t) {
            return e = Yn(e), t = Yn(t), e.protocol === t.protocol && e.host === t.host
        }

        function er() {
            return e.document.baseURI ? e.document.baseURI : (Qo || (Qo = e.document.createElement("a"), Qo.href = ".", Qo = Qo.cloneNode(!1)), Qo.href)
        }

        function tr() {
            this.$get = m(e)
        }

        function nr(e) {
            function t(e) {
                try {
                    return e.cookie || ""
                } catch (e) {
                    return ""
                }
            }

            function n(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }
            var r = e[0] || {},
                i = {},
                o = "";
            return function() {
                var e, a, s, c, u, l = t(r);
                if (l !== o)
                    for (o = l, e = o.split("; "), i = {}, s = 0; s < e.length; s++) a = e[s], (c = a.indexOf("=")) > 0 && (u = n(a.substring(0, c)), y(i[u]) && (i[u] = n(a.substring(c + 1))));
                return i
            }
        }

        function rr() {
            this.$get = nr
        }

        function ir(e) {
            function t(r, i) {
                if (w(r)) {
                    var a = {};
                    return o(r, function(e, n) {
                        a[n] = t(n, e)
                    }), a
                }
                return e.factory(r + n, i)
            }
            var n = "Filter";
            this.register = t, this.$get = ["$injector", function(e) {
                return function(t) {
                    return e.get(t + n)
                }
            }], t("currency", ur), t("date", kr), t("filter", or), t("json", Er), t("limitTo", _r), t("lowercase", pa), t("number", lr), t("orderBy", Ar), t("uppercase", da)
        }

        function or() {
            return function(e, t, n, o) {
                if (!i(e)) {
                    if (null == e) return e;
                    throw r("filter")("notarray", "Expected array but received: {0}", e)
                }
                o = o || "$";
                var a, s, c = cr(t);
                switch (c) {
                    case "function":
                        a = t;
                        break;
                    case "boolean":
                    case "null":
                    case "number":
                    case "string":
                        s = !0;
                    case "object":
                        a = ar(t, n, o, s);
                        break;
                    default:
                        return e
                }
                return Array.prototype.filter.call(e, a)
            }
        }

        function ar(e, t, n, r) {
            var i = w(e) && n in e;
            return !0 === t ? t = z : A(t) || (t = function(e, t) {
                    return !y(e) && (null === e || null === t ? e === t : !(w(t) || w(e) && !$(e)) && (e = hi("" + e), t = hi("" + t), -1 !== e.indexOf(t)))
                }),
                function(o) {
                    return i && !w(o) ? sr(o, e[n], t, n, !1) : sr(o, e, t, n, r)
                }
        }

        function sr(e, t, n, r, i, o) {
            var a = cr(e),
                s = cr(t);
            if ("string" === s && "!" === t.charAt(0)) return !sr(e, t.substring(1), n, r, i);
            if (_(e)) return e.some(function(e) {
                return sr(e, t, n, r, i)
            });
            switch (a) {
                case "object":
                    var c;
                    if (i) {
                        for (c in e)
                            if (c.charAt && "$" !== c.charAt(0) && sr(e[c], t, n, r, !0)) return !0;
                        return !o && sr(e, t, n, r, !1)
                    }
                    if ("object" === s) {
                        for (c in t) {
                            var u = t[c];
                            if (!A(u) && !y(u)) {
                                var l = c === r;
                                if (!sr(l ? e : e[c], u, n, r, l, l)) return !1
                            }
                        }
                        return !0
                    }
                    return n(e, t);
                case "function":
                    return !1;
                default:
                    return n(e, t)
            }
        }

        function cr(e) {
            return null === e ? "null" : typeof e
        }

        function ur(e) {
            var t = e.NUMBER_FORMATS;
            return function(e, n, r) {
                y(n) && (n = t.CURRENCY_SYM), y(r) && (r = t.PATTERNS[1].maxFrac);
                var i = n ? /\u00A4/g : /\s*\u00A4\s*/g;
                return null == e ? e : dr(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, r).replace(i, n)
            }
        }

        function lr(e) {
            var t = e.NUMBER_FORMATS;
            return function(e, n) {
                return null == e ? e : dr(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n)
            }
        }

        function fr(e) {
            var t, n, r, i, o, a = 0;
            for ((n = e.indexOf(sa)) > -1 && (e = e.replace(sa, "")), (r = e.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +e.slice(r + 1), e = e.substring(0, r)) : n < 0 && (n = e.length), r = 0; e.charAt(r) === ca; r++);
            if (r === (o = e.length)) t = [0], n = 1;
            else {
                for (o--; e.charAt(o) === ca;) o--;
                for (n -= r, t = [], i = 0; r <= o; r++, i++) t[i] = +e.charAt(r)
            }
            return n > aa && (t = t.splice(0, aa - 1), a = n - 1, n = 1), {
                d: t,
                e: a,
                i: n
            }
        }

        function pr(e, t, n, r) {
            var i = e.d,
                o = i.length - e.i;
            t = y(t) ? Math.min(Math.max(n, o), r) : +t;
            var a = t + e.i,
                s = i[a];
            if (a > 0) {
                i.splice(Math.max(e.i, a));
                for (var c = a; c < i.length; c++) i[c] = 0
            } else {
                o = Math.max(0, o), e.i = 1, i.length = Math.max(1, a = t + 1), i[0] = 0;
                for (var u = 1; u < a; u++) i[u] = 0
            }
            if (s >= 5)
                if (a - 1 < 0) {
                    for (var l = 0; l > a; l--) i.unshift(0), e.i++;
                    i.unshift(1), e.i++
                } else i[a - 1]++;
            for (; o < Math.max(0, t); o++) i.push(0);
            var f = i.reduceRight(function(e, t, n, r) {
                return t += e, r[n] = t % 10, Math.floor(t / 10)
            }, 0);
            f && (i.unshift(f), e.i++)
        }

        function dr(e, t, n, r, i) {
            if (!C(e) && !k(e) || isNaN(e)) return "";
            var o, a = !isFinite(e),
                s = !1,
                c = Math.abs(e) + "",
                u = "";
            if (a) u = "âˆž";
            else {
                o = fr(c), pr(o, i, t.minFrac, t.maxFrac);
                var l = o.d,
                    f = o.i,
                    p = o.e,
                    d = [];
                for (s = l.reduce(function(e, t) {
                        return e && !t
                    }, !0); f < 0;) l.unshift(0), f++;
                f > 0 ? d = l.splice(f, l.length) : (d = l, l = [0]);
                var h = [];
                for (l.length >= t.lgSize && h.unshift(l.splice(-t.lgSize, l.length).join("")); l.length > t.gSize;) h.unshift(l.splice(-t.gSize, l.length).join(""));
                l.length && h.unshift(l.join("")), u = h.join(n), d.length && (u += r + d.join("")), p && (u += "e+" + p)
            }
            return e < 0 && !s ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf
        }

        function hr(e, t, n, r) {
            var i = "";
            for ((e < 0 || r && e <= 0) && (r ? e = 1 - e : (e = -e, i = "-")), e = "" + e; e.length < t;) e = ca + e;
            return n && (e = e.substr(e.length - t)), i + e
        }

        function vr(e, t, n, r, i) {
            return n = n || 0,
                function(o) {
                    var a = o["get" + e]();
                    return (n > 0 || a > -n) && (a += n), 0 === a && -12 === n && (a = 12), hr(a, t, r, i)
                }
        }

        function gr(e, t, n) {
            return function(r, i) {
                var o = r["get" + e]();
                return i[vi((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o]
            }
        }

        function mr(e, t, n) {
            var r = -1 * n,
                i = r >= 0 ? "+" : "";
            return i += hr(Math[r > 0 ? "floor" : "ceil"](r / 60), 2) + hr(Math.abs(r % 60), 2)
        }

        function $r(e) {
            var t = new Date(e, 0, 1).getDay();
            return new Date(e, 0, (t <= 4 ? 5 : 12) - t)
        }

        function yr(e) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay()))
        }

        function br(e) {
            return function(t) {
                var n = $r(t.getFullYear()),
                    r = yr(t),
                    i = +r - +n;
                return hr(1 + Math.round(i / 6048e5), e)
            }
        }

        function wr(e, t) {
            return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1]
        }

        function Sr(e, t) {
            return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1]
        }

        function Cr(e, t) {
            return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1]
        }

        function kr(e) {
            function t(e) {
                var t;
                if (t = e.match(n)) {
                    var r = new Date(0),
                        i = 0,
                        o = 0,
                        a = t[8] ? r.setUTCFullYear : r.setFullYear,
                        s = t[8] ? r.setUTCHours : r.setHours;
                    t[9] && (i = d(t[9] + t[10]), o = d(t[9] + t[11])), a.call(r, d(t[1]), d(t[2]) - 1, d(t[3]));
                    var c = d(t[4] || 0) - i,
                        u = d(t[5] || 0) - o,
                        l = d(t[6] || 0),
                        f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
                    return s.call(r, c, u, l, f), r
                }
                return e
            }
            var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(n, r, i) {
                var a, s, c = "",
                    u = [];
                if (r = r || "mediumDate", r = e.DATETIME_FORMATS[r] || r, C(n) && (n = fa.test(n) ? d(n) : t(n)), k(n) && (n = new Date(n)), !E(n) || !isFinite(n.getTime())) return n;
                for (; r;) s = la.exec(r), s ? (u = W(u, s, 1), r = u.pop()) : (u.push(r), r = null);
                var l = n.getTimezoneOffset();
                return i && (l = X(i, l), n = te(n, i, !0)), o(u, function(t) {
                    a = ua[t], c += a ? a(n, e.DATETIME_FORMATS, l) : "''" === t ? "'" : t.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), c
            }
        }

        function Er() {
            return function(e, t) {
                return y(t) && (t = 2), Z(e, t)
            }
        }

        function _r() {
            return function(e, t, n) {
                return t = Math.abs(Number(t)) === 1 / 0 ? Number(t) : d(t), ki(t) ? e : (k(e) && (e = e.toString()), i(e) ? (n = !n || isNaN(n) ? 0 : d(n), n = n < 0 ? Math.max(0, e.length + n) : n, t >= 0 ? xr(e, n, n + t) : 0 === n ? xr(e, t, e.length) : xr(e, Math.max(0, n + t), n)) : e)
            }
        }

        function xr(e, t, n) {
            return C(e) ? e.slice(t, n) : gi.call(e, t, n)
        }

        function Ar(e) {
            function t(t) {
                return t.map(function(t) {
                    var n = 1,
                        r = g;
                    if (A(t)) r = t;
                    else if (C(t) && ("+" !== t.charAt(0) && "-" !== t.charAt(0) || (n = "-" === t.charAt(0) ? -1 : 1, t = t.substring(1)), "" !== t && (r = e(t), r.constant))) {
                        var i = r();
                        r = function(e) {
                            return e[i]
                        }
                    }
                    return {
                        get: r,
                        descending: n
                    }
                })
            }

            function n(e) {
                switch (typeof e) {
                    case "number":
                    case "boolean":
                    case "string":
                        return !0;
                    default:
                        return !1
                }
            }

            function o(e) {
                return A(e.valueOf) && (e = e.valueOf(), n(e)) ? e : ($(e) && (e = e.toString(), n(e)), e)
            }

            function a(e, t) {
                var n = typeof e;
                return null === e ? n = "null" : "object" === n && (e = o(e)), {
                    value: e,
                    type: n,
                    index: t
                }
            }

            function s(e, t) {
                var n = 0,
                    r = e.type,
                    i = t.type;
                if (r === i) {
                    var o = e.value,
                        a = t.value;
                    "string" === r ? (o = o.toLowerCase(), a = a.toLowerCase()) : "object" === r && (w(o) && (o = e.index), w(a) && (a = t.index)), o !== a && (n = o < a ? -1 : 1)
                } else n = "undefined" === r ? 1 : "undefined" === i ? -1 : "null" === r ? 1 : "null" === i ? -1 : r < i ? -1 : 1;
                return n
            }
            return function(e, n, o, c) {
                function u(e, t) {
                    return {
                        value: e,
                        tieBreaker: {
                            value: t,
                            type: "number",
                            index: t
                        },
                        predicateValues: f.map(function(n) {
                            return a(n.get(e), t)
                        })
                    }
                }

                function l(e, t) {
                    for (var n = 0, r = f.length; n < r; n++) {
                        var i = d(e.predicateValues[n], t.predicateValues[n]);
                        if (i) return i * f[n].descending * p
                    }
                    return (d(e.tieBreaker, t.tieBreaker) || s(e.tieBreaker, t.tieBreaker)) * p
                }
                if (null == e) return e;
                if (!i(e)) throw r("orderBy")("notarray", "Expected array but received: {0}", e);
                _(n) || (n = [n]), 0 === n.length && (n = ["+"]);
                var f = t(n),
                    p = o ? -1 : 1,
                    d = A(c) ? c : s,
                    h = Array.prototype.map.call(e, u);
                return h.sort(l), e = h.map(function(e) {
                    return e.value
                })
            }
        }

        function Tr(e) {
            return A(e) && (e = {
                link: e
            }), e.restrict = e.restrict || "AC", m(e)
        }

        function Rr(e, t) {
            e.$name = t
        }

        function Or(e, t, n, r, i) {
            this.$$controls = [], this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = i(t.name || t.ngForm || "")(n), this.$dirty = !1, this.$pristine = !0, this.$valid = !0, this.$invalid = !1, this.$submitted = !1, this.$$parentForm = ga, this.$$element = e, this.$$animate = r, Dr(this)
        }

        function Dr(e) {
            e.$$classCache = {}, e.$$classCache[es] = !(e.$$classCache[Xa] = e.$$element.hasClass(Xa))
        }

        function Pr(e) {
            function t(e, t, n, r) {
                e[t] || (e[t] = {}), a(e[t], n, r)
            }

            function n(e, t, n, r) {
                e[t] && s(e[t], n, r), Mr(e[t]) && (e[t] = void 0)
            }

            function r(e, t, n) {
                n && !e.$$classCache[t] ? (e.$$animate.addClass(e.$$element, t), e.$$classCache[t] = !0) : !n && e.$$classCache[t] && (e.$$animate.removeClass(e.$$element, t), e.$$classCache[t] = !1)
            }

            function i(e, t, n) {
                t = t ? "-" + he(t, "-") : "", r(e, Xa + t, !0 === n), r(e, es + t, !1 === n)
            }
            var o = e.clazz,
                a = e.set,
                s = e.unset;
            o.prototype.$setValidity = function(e, o, c) {
                y(o) ? t(this, "$pending", e, c) : n(this, "$pending", e, c), I(o) ? o ? (s(this.$error, e, c), a(this.$$success, e, c)) : (a(this.$error, e, c), s(this.$$success, e, c)) : (s(this.$error, e, c), s(this.$$success, e, c)), this.$pending ? (r(this, ma, !0), this.$valid = this.$invalid = void 0, i(this, "", null)) : (r(this, ma, !1), this.$valid = Mr(this.$error), this.$invalid = !this.$valid, i(this, "", this.$valid));
                var u;
                u = this.$pending && this.$pending[e] ? void 0 : !this.$error[e] && (!!this.$$success[e] || null), i(this, e, u), this.$$parentForm.$setValidity(e, u, this)
            }
        }

        function Mr(e) {
            if (e)
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
            return !0
        }

        function Ir(e) {
            e.$formatters.push(function(t) {
                return e.$isEmpty(t) ? t : t.toString()
            })
        }

        function jr(e, t, n, r, i, o) {
            Vr(e, t, n, r, i, o), Ir(r)
        }

        function Vr(e, t, n, r, i, o) {
            var a = hi(t[0].type);
            if (!i.android) {
                var s = !1;
                t.on("compositionstart", function() {
                    s = !0
                }), t.on("compositionupdate", function(e) {
                    (y(e.data) || "" === e.data) && (s = !1)
                }), t.on("compositionend", function() {
                    s = !1, u()
                })
            }
            var c, u = function(e) {
                if (c && (o.defer.cancel(c), c = null), !s) {
                    var i = t.val(),
                        u = e && e.type;
                    "password" === a || n.ngTrim && "false" === n.ngTrim || (i = _i(i)), (r.$viewValue !== i || "" === i && r.$$hasNativeValidators) && r.$setViewValue(i, u)
                }
            };
            if (i.hasEvent("input")) t.on("input", u);
            else {
                var l = function(e, t, n) {
                    c || (c = o.defer(function() {
                        c = null, t && t.value === n || u(e)
                    }))
                };
                t.on("keydown", function(e) {
                    var t = e.keyCode;
                    91 === t || 15 < t && t < 19 || 37 <= t && t <= 40 || l(e, this, this.value)
                }), i.hasEvent("paste") && t.on("paste cut drop", l)
            }
            t.on("change", u), Da[a] && r.$$hasNativeValidators && a === n.type && t.on(Oa, function(e) {
                if (!c) {
                    var t = this[pi],
                        n = t.badInput,
                        r = t.typeMismatch;
                    c = o.defer(function() {
                        c = null, t.badInput === n && t.typeMismatch === r || u(e)
                    })
                }
            }), r.$render = function() {
                var e = r.$isEmpty(r.$viewValue) ? "" : r.$viewValue;
                t.val() !== e && t.val(e)
            }
        }

        function Ur(e, t) {
            if (E(e)) return e;
            if (C(e)) {
                Aa.lastIndex = 0;
                var n = Aa.exec(e);
                if (n) {
                    var r = +n[1],
                        i = +n[2],
                        o = 0,
                        a = 0,
                        s = 0,
                        c = 0,
                        u = $r(r),
                        l = 7 * (i - 1);
                    return t && (o = t.getHours(), a = t.getMinutes(), s = t.getSeconds(), c = t.getMilliseconds()), new Date(r, 0, u.getDate() + l, o, a, s, c)
                }
            }
            return NaN
        }

        function Lr(e, t) {
            return function(n, r) {
                var i, a;
                if (E(n)) return n;
                if (C(n)) {
                    if ('"' === n.charAt(0) && '"' === n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Sa.test(n)) return new Date(n);
                    if (e.lastIndex = 0, i = e.exec(n)) {
                        i.shift(), a = r ? {
                            yyyy: r.getFullYear(),
                            MM: r.getMonth() + 1,
                            dd: r.getDate(),
                            HH: r.getHours(),
                            mm: r.getMinutes(),
                            ss: r.getSeconds(),
                            sss: r.getMilliseconds() / 1e3
                        } : {
                            yyyy: 1970,
                            MM: 1,
                            dd: 1,
                            HH: 0,
                            mm: 0,
                            ss: 0,
                            sss: 0
                        }, o(i, function(e, n) {
                            n < t.length && (a[t[n]] = +e)
                        });
                        var s = new Date(a.yyyy, a.MM - 1, a.dd, a.HH, a.mm, a.ss || 0, 1e3 * a.sss || 0);
                        return a.yyyy < 100 && s.setFullYear(a.yyyy), s
                    }
                }
                return NaN
            }
        }

        function Nr(e, t, n, r) {
            return function(i, o, a, s, c, u, l) {
                function f(e) {
                    return e && !(e.getTime && e.getTime() !== e.getTime())
                }

                function p(e) {
                    return b(e) && !E(e) ? d(e) || void 0 : e
                }

                function d(e, t) {
                    var r = s.$options.getOption("timezone");
                    v && v !== r && (t = ee(t, X(v)));
                    var i = n(e, t);
                    return !isNaN(i) && r && (i = te(i, r)), i
                }
                Fr(i, o, a, s, e), Vr(i, o, a, s, c, u);
                var h, v;
                if (s.$parsers.push(function(n) {
                        return s.$isEmpty(n) ? null : t.test(n) ? d(n, h) : void(s.$$parserName = e)
                    }), s.$formatters.push(function(e) {
                        if (e && !E(e)) throw ss("datefmt", "Expected `{0}` to be a date", e);
                        if (f(e)) {
                            h = e;
                            var t = s.$options.getOption("timezone");
                            return t && (v = t, h = te(h, t, !0)), l("date")(e, r, t)
                        }
                        return h = null, v = null, ""
                    }), b(a.min) || a.ngMin) {
                    var g;
                    s.$validators.min = function(e) {
                        return !f(e) || y(g) || n(e) >= g
                    }, a.$observe("min", function(e) {
                        g = p(e), s.$validate()
                    })
                }
                if (b(a.max) || a.ngMax) {
                    var m;
                    s.$validators.max = function(e) {
                        return !f(e) || y(m) || n(e) <= m
                    }, a.$observe("max", function(e) {
                        m = p(e), s.$validate()
                    })
                }
            }
        }

        function Fr(e, t, n, r, i) {
            var o = t[0];
            (r.$$hasNativeValidators = w(o.validity)) && r.$parsers.push(function(e) {
                var n = t.prop(pi) || {};
                return n.badInput || n.typeMismatch ? void(r.$$parserName = i) : e
            })
        }

        function Br(e) {
            e.$parsers.push(function(t) {
                return e.$isEmpty(t) ? null : Ea.test(t) ? parseFloat(t) : void(e.$$parserName = "number")
            }), e.$formatters.push(function(t) {
                if (!e.$isEmpty(t)) {
                    if (!k(t)) throw ss("numfmt", "Expected `{0}` to be a number", t);
                    t = t.toString()
                }
                return t
            })
        }

        function Hr(e) {
            return b(e) && !k(e) && (e = parseFloat(e)), ki(e) ? void 0 : e
        }

        function qr(e) {
            return (0 | e) === e
        }

        function Gr(e) {
            var t = e.toString(),
                n = t.indexOf(".");
            if (-1 === n) {
                if (-1 < e && e < 1) {
                    var r = /e-(\d+)$/.exec(t);
                    if (r) return Number(r[1])
                }
                return 0
            }
            return t.length - n - 1
        }

        function zr(e, t, n) {
            var r = Number(e),
                i = !qr(r),
                o = !qr(t),
                a = !qr(n);
            if (i || o || a) {
                var s = i ? Gr(r) : 0,
                    c = o ? Gr(t) : 0,
                    u = a ? Gr(n) : 0,
                    l = Math.max(s, c, u),
                    f = Math.pow(10, l);
                r *= f, t *= f, n *= f, i && (r = Math.round(r)), o && (t = Math.round(t)), a && (n = Math.round(n))
            }
            return (r - t) % n == 0
        }

        function Wr(e, t, n, r, i, o) {
            Fr(e, t, n, r, "number"), Br(r), Vr(e, t, n, r, i, o);
            var a, s;
            if ((b(n.min) || n.ngMin) && (r.$validators.min = function(e, t) {
                    return r.$isEmpty(t) || y(a) || t >= a
                }, n.$observe("min", function(e) {
                    a = Hr(e), r.$validate()
                })), (b(n.max) || n.ngMax) && (r.$validators.max = function(e, t) {
                    return r.$isEmpty(t) || y(s) || t <= s
                }, n.$observe("max", function(e) {
                    s = Hr(e), r.$validate()
                })), b(n.step) || n.ngStep) {
                var c;
                r.$validators.step = function(e, t) {
                    return r.$isEmpty(t) || y(c) || zr(t, a || 0, c)
                }, n.$observe("step", function(e) {
                    c = Hr(e), r.$validate()
                })
            }
        }

        function Kr(e, t, n, r, i, o) {
            function a(e, r) {
                t.attr(e, n[e]), n.$observe(e, r)
            }

            function s(e) {
                if (f = Hr(e), !ki(r.$modelValue))
                    if (l) {
                        var n = t.val();
                        f > n && (n = f, t.val(n)), r.$setViewValue(n)
                    } else r.$validate()
            }

            function c(e) {
                if (p = Hr(e), !ki(r.$modelValue))
                    if (l) {
                        var n = t.val();
                        p < n && (t.val(p), n = p < f ? f : p), r.$setViewValue(n)
                    } else r.$validate()
            }

            function u(e) {
                d = Hr(e), ki(r.$modelValue) || (l && r.$viewValue !== t.val() ? r.$setViewValue(t.val()) : r.$validate())
            }
            Fr(e, t, n, r, "range"), Br(r), Vr(e, t, n, r, i, o);
            var l = r.$$hasNativeValidators && "range" === t[0].type,
                f = l ? 0 : void 0,
                p = l ? 100 : void 0,
                d = l ? 1 : void 0,
                h = t[0].validity,
                v = b(n.min),
                g = b(n.max),
                m = b(n.step),
                $ = r.$render;
            r.$render = l && b(h.rangeUnderflow) && b(h.rangeOverflow) ? function() {
                $(), r.$setViewValue(t.val())
            } : $, v && (r.$validators.min = l ? function() {
                return !0
            } : function(e, t) {
                return r.$isEmpty(t) || y(f) || t >= f
            }, a("min", s)), g && (r.$validators.max = l ? function() {
                return !0
            } : function(e, t) {
                return r.$isEmpty(t) || y(p) || t <= p
            }, a("max", c)), m && (r.$validators.step = l ? function() {
                return !h.stepMismatch
            } : function(e, t) {
                return r.$isEmpty(t) || y(d) || zr(t, f || 0, d)
            }, a("step", u))
        }

        function Yr(e, t, n, r, i, o) {
            Vr(e, t, n, r, i, o), Ir(r), r.$validators.url = function(e, t) {
                var n = e || t;
                return r.$isEmpty(n) || Ca.test(n)
            }
        }

        function Jr(e, t, n, r, i, o) {
            Vr(e, t, n, r, i, o), Ir(r), r.$validators.email = function(e, t) {
                var n = e || t;
                return r.$isEmpty(n) || ka.test(n)
            }
        }

        function Zr(e, t, n, r) {
            var i = !n.ngTrim || "false" !== _i(n.ngTrim);
            y(n.name) && t.attr("name", c());
            var o = function(e) {
                var o;
                t[0].checked && (o = n.value, i && (o = _i(o)), r.$setViewValue(o, e && e.type))
            };
            t.on("change", o), r.$render = function() {
                var e = n.value;
                i && (e = _i(e)), t[0].checked = e === r.$viewValue
            }, n.$observe("value", r.$render)
        }

        function Qr(e, t, n, r, i) {
            var o;
            if (b(r)) {
                if (o = e(r), !o.constant) throw ss("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", n, r);
                return o(t)
            }
            return i
        }

        function Xr(e, t, n, r, i, o, a, s) {
            var c = Qr(s, e, "ngTrueValue", n.ngTrueValue, !0),
                u = Qr(s, e, "ngFalseValue", n.ngFalseValue, !1),
                l = function(e) {
                    r.$setViewValue(t[0].checked, e && e.type)
                };
            t.on("change", l), r.$render = function() {
                t[0].checked = r.$viewValue
            }, r.$isEmpty = function(e) {
                return !1 === e
            }, r.$formatters.push(function(e) {
                return z(e, c)
            }), r.$parsers.push(function(e) {
                return e ? c : u
            })
        }

        function ei(e, t) {
            function n(e, t) {
                if (!e || !e.length) return [];
                if (!t || !t.length) return e;
                var n = [];
                e: for (var r = 0; r < e.length; r++) {
                    for (var i = e[r], o = 0; o < t.length; o++)
                        if (i === t[o]) continue e;
                    n.push(i)
                }
                return n
            }

            function r(e) {
                return e && e.split(" ")
            }

            function i(e) {
                var t = e;
                return _(e) ? t = e.map(i).join(" ") : w(e) && (t = Object.keys(e).filter(function(t) {
                    return e[t]
                }).join(" ")), t
            }
            e = "ngClass" + e;
            var a;
            return ["$parse", function(s) {
                return {
                    restrict: "AC",
                    link: function(c, u, l) {
                        function f(e) {
                            e = h(r(e), 1), l.$addClass(e)
                        }

                        function p(e) {
                            e = h(r(e), -1), l.$removeClass(e)
                        }

                        function d(e, t) {
                            var i = r(e),
                                o = r(t),
                                a = n(i, o),
                                s = n(o, i),
                                c = h(a, -1),
                                u = h(s, 1);
                            l.$addClass(u), l.$removeClass(c)
                        }

                        function h(e, t) {
                            var n = [];
                            return o(e, function(e) {
                                (t > 0 || $[e]) && ($[e] = ($[e] || 0) + t, $[e] === +(t > 0) && n.push(e))
                            }), n.join(" ")
                        }

                        function v(e) {
                            e === t ? f(m) : p(m), y = e
                        }

                        function g(e) {
                            y === t && d(m, e), m = e
                        }
                        var m, $ = u.data("$classCounts"),
                            y = !0;
                        $ || ($ = we(), u.data("$classCounts", $)), "ngClass" !== e && (a || (a = s("$index", function(e) {
                            return 1 & e
                        })), c.$watch(a, v)), c.$watch(s(l[e], i), g)
                    }
                }
            }]
        }

        function ti(e, t, n, r, i, o, a, s, c) {
            this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(e), this.$$parentForm = ga, this.$options = cs, this.$$updateEvents = "", this.$$updateEventHandler = this.$$updateEventHandler.bind(this), this.$$parsedNgModel = i(n.ngModel), this.$$parsedNgModelAssign = this.$$parsedNgModel.assign, this.$$ngModelGet = this.$$parsedNgModel, this.$$ngModelSet = this.$$parsedNgModelAssign, this.$$pendingDebounce = null, this.$$parserValid = void 0, this.$$parserName = "parse", this.$$currentValidationRunId = 0, this.$$scope = e, this.$$attr = n, this.$$element = r, this.$$animate = o, this.$$timeout = a, this.$$parse = i, this.$$q = s, this.$$exceptionHandler = t, Dr(this), ni(this)
        }

        function ni(e) {
            e.$$scope.$watch(function(t) {
                var n = e.$$ngModelGet(t);
                return n === e.$modelValue || e.$modelValue !== e.$modelValue && n !== n || e.$$setModelValue(n), n
            })
        }

        function ri(e) {
            this.$$options = e
        }

        function ii(e, t) {
            o(t, function(t, n) {
                b(e[n]) || (e[n] = t)
            })
        }

        function oi(e, t) {
            e.prop("selected", t), e.attr("selected", t)
        }
        var ai, si, ci, ui, li = {
                objectMaxDepth: 5
            },
            fi = /^\/(.+)\/([a-z]*)$/,
            pi = "validity",
            di = Object.prototype.hasOwnProperty,
            hi = function(e) {
                return C(e) ? e.toLowerCase() : e
            },
            vi = function(e) {
                return C(e) ? e.toUpperCase() : e
            },
            gi = [].slice,
            mi = [].splice,
            $i = [].push,
            yi = Object.prototype.toString,
            bi = Object.getPrototypeOf,
            wi = r("ng"),
            Si = e.angular || (e.angular = {}),
            Ci = 0;
        ai = e.document.documentMode;
        var ki = Number.isNaN || function(e) {
            return e !== e
        };
        v.$inject = [], g.$inject = [];
        var Ei = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
            _i = function(e) {
                return C(e) ? e.trim() : e
            },
            xi = function(e) {
                return e.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            },
            Ai = function() {
                function t() {
                    try {
                        return new Function(""), !1
                    } catch (e) {
                        return !0
                    }
                }
                if (!b(Ai.rules)) {
                    var n = e.document.querySelector("[ng-csp]") || e.document.querySelector("[data-ng-csp]");
                    if (n) {
                        var r = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
                        Ai.rules = {
                            noUnsafeEval: !r || -1 !== r.indexOf("no-unsafe-eval"),
                            noInlineStyle: !r || -1 !== r.indexOf("no-inline-style")
                        }
                    } else Ai.rules = {
                        noUnsafeEval: t(),
                        noInlineStyle: !1
                    }
                }
                return Ai.rules
            },
            Ti = function() {
                if (b(Ti.name_)) return Ti.name_;
                var t, n, r, i, o = Oi.length;
                for (n = 0; n < o; ++n)
                    if (r = Oi[n], t = e.document.querySelector("[" + r.replace(":", "\\:") + "jq]")) {
                        i = t.getAttribute(r + "jq");
                        break
                    } return Ti.name_ = i
            },
            Ri = /:/g,
            Oi = ["ng-", "data-ng-", "ng:", "x-ng-"],
            Di = ue(e.document),
            Pi = /[A-Z]/g,
            Mi = !1,
            Ii = 1,
            ji = 2,
            Vi = 3,
            Ui = 8,
            Li = 9,
            Ni = 11,
            Fi = {
                full: "1.7.0",
                major: 1,
                minor: 7,
                dot: 0,
                codeName: "nonexistent-physiology"
            };
        Ue.expando = "ng339";
        var Bi = Ue.cache = {},
            Hi = 1;
        Ue._data = function(e) {
            return this.cache[e[this.expando]] || {}
        };
        var qi = /-([a-z])/g,
            Gi = /^-ms-/,
            zi = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            },
            Wi = r("jqLite"),
            Ki = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Yi = /<|&#?\w+;/,
            Ji = /<([\w:-]+)/,
            Zi = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Qi = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Qi.optgroup = Qi.option, Qi.tbody = Qi.tfoot = Qi.colgroup = Qi.caption = Qi.thead, Qi.th = Qi.td;
        var Xi = e.Node.prototype.contains || function(e) {
                return !!(16 & this.compareDocumentPosition(e))
            },
            eo = Ue.prototype = {
                ready: nt,
                toString: function() {
                    var e = [];
                    return o(this, function(t) {
                        e.push("" + t)
                    }), "[" + e.join(", ") + "]"
                },
                eq: function(e) {
                    return si(e >= 0 ? this[e] : this[this.length + e])
                },
                length: 0,
                push: $i,
                sort: [].sort,
                splice: [].splice
            },
            to = {};
        o("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(e) {
            to[hi(e)] = e
        });
        var no = {};
        o("input,select,option,textarea,button,form,details".split(","), function(e) {
            no[e] = !0
        });
        var ro = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern",
            ngStep: "step"
        };
        o({
            data: ze,
            removeData: qe,
            hasData: Me,
            cleanData: function(e) {
                for (var t = 0, n = e.length; t < n; t++) qe(e[t]), He(e[t])
            }
        }, function(e, t) {
            Ue[t] = e
        }), o({
            data: ze,
            inheritedData: Qe,
            scope: function(e) {
                return si.data(e, "$scope") || Qe(e.parentNode || e, ["$isolateScope", "$scope"])
            },
            isolateScope: function(e) {
                return si.data(e, "$isolateScope") || si.data(e, "$isolateScopeNoTemplate")
            },
            controller: Ze,
            injector: function(e) {
                return Qe(e, "$injector")
            },
            removeAttr: function(e, t) {
                e.removeAttribute(t)
            },
            hasClass: We,
            css: function(e, t, n) {
                if (t = Te(t), !b(n)) return e.style[t];
                e.style[t] = n
            },
            attr: function(e, t, n) {
                var r, i = e.nodeType;
                if (i !== Vi && i !== ji && i !== Ui && e.getAttribute) {
                    var o = hi(t),
                        a = to[o];
                    if (!b(n)) return r = e.getAttribute(t), a && null !== r && (r = o), null === r ? void 0 : r;
                    null === n || !1 === n && a ? e.removeAttribute(t) : e.setAttribute(t, a ? o : n)
                }
            },
            prop: function(e, t, n) {
                if (!b(n)) return e[t];
                e[t] = n
            },
            text: function() {
                function e(e, t) {
                    if (y(t)) {
                        var n = e.nodeType;
                        return n === Ii || n === Vi ? e.textContent : ""
                    }
                    e.textContent = t
                }
                return e.$dv = "", e
            }(),
            val: function(e, t) {
                if (y(t)) {
                    if (e.multiple && "select" === F(e)) {
                        var n = [];
                        return o(e.options, function(e) {
                            e.selected && n.push(e.value || e.text)
                        }), n
                    }
                    return e.value
                }
                e.value = t
            },
            html: function(e, t) {
                if (y(t)) return e.innerHTML;
                Ne(e, !0), e.innerHTML = t
            },
            empty: Xe
        }, function(e, t) {
            Ue.prototype[t] = function(t, n) {
                var r, i, o = this.length;
                if (e !== Xe && y(2 === e.length && e !== We && e !== Ze ? t : n)) {
                    if (w(t)) {
                        for (r = 0; r < o; r++)
                            if (e === ze) e(this[r], t);
                            else
                                for (i in t) e(this[r], i, t[i]);
                        return this
                    }
                    for (var a = e.$dv, s = y(a) ? Math.min(o, 1) : o, c = 0; c < s; c++) {
                        var u = e(this[c], t, n);
                        a = a ? a + u : u
                    }
                    return a
                }
                for (r = 0; r < o; r++) e(this[r], t, n);
                return this
            }
        }), o({
            removeData: qe,
            on: function(e, t, n, r) {
                if (b(r)) throw Wi("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (Pe(e)) {
                    var i = Ge(e, !0),
                        o = i.events,
                        a = i.handle;
                    a || (a = i.handle = ot(e, o));
                    for (var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t], c = s.length, u = function(t, r, i) {
                            var s = o[t];
                            s || (s = o[t] = [], s.specialHandlerWrapper = r, "$destroy" === t || i || e.addEventListener(t, a)), s.push(n)
                        }; c--;) t = s[c], zi[t] ? (u(zi[t], st), u(t, void 0, !0)) : u(t)
                }
            },
            off: He,
            one: function(e, t, n) {
                e = si(e), e.on(t, function r() {
                    e.off(t, n), e.off(t, r)
                }), e.on(t, n)
            },
            replaceWith: function(e, t) {
                var n, r = e.parentNode;
                Ne(e), o(new Ue(t), function(t) {
                    n ? r.insertBefore(t, n.nextSibling) : r.replaceChild(t, e), n = t
                })
            },
            children: function(e) {
                var t = [];
                return o(e.childNodes, function(e) {
                    e.nodeType === Ii && t.push(e)
                }), t
            },
            contents: function(e) {
                return e.contentDocument || e.childNodes || []
            },
            append: function(e, t) {
                var n = e.nodeType;
                if (n === Ii || n === Ni) {
                    t = new Ue(t);
                    for (var r = 0, i = t.length; r < i; r++) {
                        var o = t[r];
                        e.appendChild(o)
                    }
                }
            },
            prepend: function(e, t) {
                if (e.nodeType === Ii) {
                    var n = e.firstChild;
                    o(new Ue(t), function(t) {
                        e.insertBefore(t, n)
                    })
                }
            },
            wrap: function(e, t) {
                Ve(e, si(t).eq(0).clone()[0])
            },
            remove: et,
            detach: function(e) {
                et(e, !0)
            },
            after: function(e, t) {
                var n = e,
                    r = e.parentNode;
                if (r) {
                    t = new Ue(t);
                    for (var i = 0, o = t.length; i < o; i++) {
                        var a = t[i];
                        r.insertBefore(a, n.nextSibling), n = a
                    }
                }
            },
            addClass: Ye,
            removeClass: Ke,
            toggleClass: function(e, t, n) {
                t && o(t.split(" "), function(t) {
                    var r = n;
                    y(r) && (r = !We(e, t)), (r ? Ye : Ke)(e, t)
                })
            },
            parent: function(e) {
                var t = e.parentNode;
                return t && t.nodeType !== Ni ? t : null
            },
            next: function(e) {
                return e.nextElementSibling
            },
            find: function(e, t) {
                return e.getElementsByTagName ? e.getElementsByTagName(t) : []
            },
            clone: Le,
            triggerHandler: function(e, t, n) {
                var r, i, a, s = t.type || t,
                    c = Ge(e),
                    u = c && c.events,
                    l = u && u[s];
                l && (r = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return !0 === this.defaultPrevented
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function() {
                        return !0 === this.immediatePropagationStopped
                    },
                    stopPropagation: v,
                    type: s,
                    target: e
                }, t.type && (r = f(r, t)), i = ke(l), a = n ? [r].concat(n) : [r], o(i, function(t) {
                    r.isImmediatePropagationStopped() || t.apply(e, a)
                }))
            }
        }, function(e, t) {
            Ue.prototype[t] = function(t, n, r) {
                for (var i, o = 0, a = this.length; o < a; o++) y(i) ? (i = e(this[o], t, n, r), b(i) && (i = si(i))) : Je(i, e(this[o], t, n, r));
                return b(i) ? i : this
            }
        }), Ue.prototype.bind = Ue.prototype.on, Ue.prototype.unbind = Ue.prototype.off;
        var io = Object.create(null);
        lt.prototype = {
            _idx: function(e) {
                return e === this._lastKey ? this._lastIndex : (this._lastKey = e, this._lastIndex = this._keys.indexOf(e), this._lastIndex)
            },
            _transformKey: function(e) {
                return ki(e) ? io : e
            },
            get: function(e) {
                e = this._transformKey(e);
                var t = this._idx(e);
                if (-1 !== t) return this._values[t]
            },
            set: function(e, t) {
                e = this._transformKey(e);
                var n = this._idx(e); - 1 === n && (n = this._lastIndex = this._keys.length), this._keys[n] = e, this._values[n] = t
            },
            delete: function(e) {
                e = this._transformKey(e);
                var t = this._idx(e);
                return -1 !== t && (this._keys.splice(t, 1), this._values.splice(t, 1), this._lastKey = NaN, this._lastIndex = -1, !0)
            }
        };
        var oo = lt,
            ao = [function() {
                this.$get = [function() {
                    return oo
                }]
            }],
            so = /^([^(]+?)=>/,
            co = /^[^(]*\(\s*([^)]*)\)/m,
            uo = /,/,
            lo = /^\s*(_?)(\S+?)\1\s*$/,
            fo = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            po = r("$injector");
        vt.$$annotate = ht;
        var ho = r("$animate"),
            vo = 1,
            go = "ng-animate",
            mo = function() {
                this.$get = v
            },
            $o = function() {
                var e = new oo,
                    t = [];
                this.$get = ["$$AnimateRunner", "$rootScope", function(n, r) {
                    function i(e, t, n) {
                        var r = !1;
                        return t && (t = C(t) ? t.split(" ") : _(t) ? t : [], o(t, function(t) {
                            t && (r = !0, e[t] = n)
                        })), r
                    }

                    function a() {
                        o(t, function(t) {
                            var n = e.get(t);
                            if (n) {
                                var r = yt(t.attr("class")),
                                    i = "",
                                    a = "";
                                o(n, function(e, t) {
                                    e !== !!r[t] && (e ? i += (i.length ? " " : "") + t : a += (a.length ? " " : "") + t)
                                }), o(t, function(e) {
                                    i && Ye(e, i), a && Ke(e, a)
                                }), e.delete(t)
                            }
                        }), t.length = 0
                    }

                    function s(n, o, s) {
                        var c = e.get(n) || {},
                            u = i(c, o, !0),
                            l = i(c, s, !1);
                        (u || l) && (e.set(n, c), t.push(n), 1 === t.length && r.$$postDigest(a))
                    }
                    return {
                        enabled: v,
                        on: v,
                        off: v,
                        pin: v,
                        push: function(e, t, r, i) {
                            i && i(), r = r || {}, r.from && e.css(r.from), r.to && e.css(r.to), (r.addClass || r.removeClass) && s(e, r.addClass, r.removeClass);
                            var o = new n;
                            return o.complete(), o
                        }
                    }
                }]
            },
            yo = ["$provide", function(e) {
                var t = this,
                    n = null,
                    r = null;
                this.$$registeredAnimations = Object.create(null), this.register = function(n, r) {
                    if (n && "." !== n.charAt(0)) throw ho("notcsel", "Expecting class selector starting with '.' got '{0}'.", n);
                    var i = n + "-animation";
                    t.$$registeredAnimations[n.substr(1)] = i, e.factory(i, r)
                }, this.customFilter = function(e) {
                    return 1 === arguments.length && (r = A(e) ? e : null), r
                }, this.classNameFilter = function(e) {
                    if (1 === arguments.length && (n = e instanceof RegExp ? e : null)) {
                        if (new RegExp("[(\\s|\\/)]" + go + "[(\\s|\\/)]").test(n.toString())) throw n = null, ho("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', go)
                    }
                    return n
                }, this.$get = ["$$animateQueue", function(e) {
                    function t(e, t, n) {
                        if (n) {
                            var r = $t(n);
                            !r || r.parentNode || r.previousElementSibling || (n = null)
                        }
                        n ? n.after(e) : t.prepend(e)
                    }
                    return {
                        on: e.on,
                        off: e.off,
                        pin: e.pin,
                        enabled: e.enabled,
                        cancel: function(e) {
                            e.cancel && e.cancel()
                        },
                        enter: function(n, r, i, o) {
                            return r = r && si(r), i = i && si(i), r = r || i.parent(), t(n, r, i), e.push(n, "enter", bt(o))
                        },
                        move: function(n, r, i, o) {
                            return r = r && si(r), i = i && si(i), r = r || i.parent(), t(n, r, i), e.push(n, "move", bt(o))
                        },
                        leave: function(t, n) {
                            return e.push(t, "leave", bt(n), function() {
                                t.remove()
                            })
                        },
                        addClass: function(t, n, r) {
                            return r = bt(r), r.addClass = mt(r.addclass, n), e.push(t, "addClass", r)
                        },
                        removeClass: function(t, n, r) {
                            return r = bt(r), r.removeClass = mt(r.removeClass, n), e.push(t, "removeClass", r)
                        },
                        setClass: function(t, n, r, i) {
                            return i = bt(i), i.addClass = mt(i.addClass, n), i.removeClass = mt(i.removeClass, r), e.push(t, "setClass", i)
                        },
                        animate: function(t, n, r, i, o) {
                            return o = bt(o), o.from = o.from ? f(o.from, n) : n, o.to = o.to ? f(o.to, r) : r, i = i || "ng-inline-animate", o.tempClasses = mt(o.tempClasses, i), e.push(t, "animate", o)
                        }
                    }
                }]
            }],
            bo = function() {
                this.$get = ["$$rAF", function(e) {
                    function t(t) {
                        n.push(t), n.length > 1 || e(function() {
                            for (var e = 0; e < n.length; e++) n[e]();
                            n = []
                        })
                    }
                    var n = [];
                    return function() {
                        var e = !1;
                        return t(function() {
                                e = !0
                            }),
                            function(n) {
                                e ? n() : t(n)
                            }
                    }
                }]
            },
            wo = function() {
                this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function(e, t, n, r, i) {
                    function a(e) {
                        this.setHost(e);
                        var t = n(),
                            o = function(e) {
                                i(e, 0, !1)
                            };
                        this._doneCallbacks = [], this._tick = function(e) {
                            r() ? o(e) : t(e)
                        }, this._state = 0
                    }
                    var s = 2;
                    return a.chain = function(e, t) {
                        function n() {
                            if (r === e.length) return void t(!0);
                            e[r](function(e) {
                                if (!1 === e) return void t(!1);
                                r++, n()
                            })
                        }
                        var r = 0;
                        n()
                    }, a.all = function(e, t) {
                        function n(n) {
                            i = i && n, ++r === e.length && t(i)
                        }
                        var r = 0,
                            i = !0;
                        o(e, function(e) {
                            e.done(n)
                        })
                    }, a.prototype = {
                        setHost: function(e) {
                            this.host = e || {}
                        },
                        done: function(e) {
                            this._state === s ? e() : this._doneCallbacks.push(e)
                        },
                        progress: v,
                        getPromise: function() {
                            if (!this.promise) {
                                var t = this;
                                this.promise = e(function(e, n) {
                                    t.done(function(t) {
                                        !1 === t ? n() : e()
                                    })
                                })
                            }
                            return this.promise
                        },
                        then: function(e, t) {
                            return this.getPromise().then(e, t)
                        },
                        catch: function(e) {
                            return this.getPromise().catch(e)
                        },
                        finally: function(e) {
                            return this.getPromise().finally(e)
                        },
                        pause: function() {
                            this.host.pause && this.host.pause()
                        },
                        resume: function() {
                            this.host.resume && this.host.resume()
                        },
                        end: function() {
                            this.host.end && this.host.end(), this._resolve(!0)
                        },
                        cancel: function() {
                            this.host.cancel && this.host.cancel(), this._resolve(!1)
                        },
                        complete: function(e) {
                            var t = this;
                            0 === t._state && (t._state = 1, t._tick(function() {
                                t._resolve(e)
                            }))
                        },
                        _resolve: function(e) {
                            this._state !== s && (o(this._doneCallbacks, function(t) {
                                t(e)
                            }), this._doneCallbacks.length = 0, this._state = s)
                        }
                    }, a
                }]
            },
            So = function() {
                this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(e, t, n) {
                    return function(t, r) {
                        function i() {
                            return e(function() {
                                o(), s || c.complete(), s = !0
                            }), c
                        }

                        function o() {
                            a.addClass && (t.addClass(a.addClass), a.addClass = null), a.removeClass && (t.removeClass(a.removeClass), a.removeClass = null), a.to && (t.css(a.to), a.to = null)
                        }
                        var a = r || {};
                        a.$$prepared || (a = q(a)), a.cleanupStyles && (a.from = a.to = null), a.from && (t.css(a.from), a.from = null);
                        var s, c = new n;
                        return {
                            start: i,
                            end: i
                        }
                    }
                }]
            },
            Co = r("$compile"),
            ko = new Et;
        _t.$inject = ["$provide", "$$sanitizeUriProvider"], xt.prototype.isFirstChange = function() {
            return this.previousValue === ko
        };
        var Eo = /^((?:x|data)[:\-_])/i,
            _o = /[:\-_]+(.)/g,
            xo = r("$controller"),
            Ao = /^(\S+)(\s+as\s+([\w$]+))?$/,
            To = function() {
                this.$get = ["$document", function(e) {
                    return function(t) {
                        return t ? !t.nodeType && t instanceof si && (t = t[0]) : t = e[0].body, t.offsetWidth + 1
                    }
                }]
            },
            Ro = "application/json",
            Oo = {
                "Content-Type": Ro + ";charset=utf-8"
            },
            Do = /^\[|^\{(?!\{)/,
            Po = {
                "[": /]$/,
                "{": /}$/
            },
            Mo = /^\)]\}',?\n/,
            Io = r("$http"),
            jo = Si.$interpolateMinErr = r("$interpolate");
        jo.throwNoconcat = function(e) {
            throw jo("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", e)
        }, jo.interr = function(e, t) {
            return jo("interr", "Can't interpolate: {0}\n{1}", e, t.toString())
        };
        var Vo = r("$interval"),
            Uo = function() {
                this.$get = function() {
                    function e(e) {
                        var t = function(e) {
                            t.data = e, t.called = !0
                        };
                        return t.id = e, t
                    }
                    var t = Si.callbacks,
                        n = {};
                    return {
                        createCallback: function(r) {
                            var i = "_" + (t.$$counter++).toString(36),
                                o = "angular.callbacks." + i,
                                a = e(i);
                            return n[o] = t[i] = a, o
                        },
                        wasCalled: function(e) {
                            return n[e].called
                        },
                        getResponse: function(e) {
                            return n[e].data
                        },
                        removeCallback: function(e) {
                            var r = n[e];
                            delete t[r.id], delete n[e]
                        }
                    }
                }
            },
            Lo = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
            No = {
                http: 80,
                https: 443,
                ftp: 21
            },
            Fo = r("$location"),
            Bo = /^\s*[\\\/]{2,}/,
            Ho = {
                $$absUrl: "",
                $$html5: !1,
                $$replace: !1,
                absUrl: fn("$$absUrl"),
                url: function(e) {
                    if (y(e)) return this.$$url;
                    var t = Lo.exec(e);
                    return (t[1] || "" === e) && this.path(decodeURIComponent(t[1])), (t[2] || t[1] || "" === e) && this.search(t[3] || ""), this.hash(t[5] || ""), this
                },
                protocol: fn("$$protocol"),
                host: fn("$$host"),
                port: fn("$$port"),
                path: pn("$$path", function(e) {
                    return e = null !== e ? e.toString() : "", "/" === e.charAt(0) ? e : "/" + e
                }),
                search: function(e, t) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (C(e) || k(e)) e = e.toString(), this.$$search = ie(e);
                            else {
                                if (!w(e)) throw Fo("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                e = q(e, {}), o(e, function(t, n) {
                                    null == t && delete e[n]
                                }), this.$$search = e
                            }
                            break;
                        default:
                            y(t) || null === t ? delete this.$$search[e] : this.$$search[e] = t
                    }
                    return this.$$compose(), this
                },
                hash: pn("$$hash", function(e) {
                    return null !== e ? e.toString() : ""
                }),
                replace: function() {
                    return this.$$replace = !0, this
                }
            };
        o([ln, un, cn], function(e) {
            e.prototype = Object.create(Ho), e.prototype.state = function(t) {
                if (!arguments.length) return this.$$state;
                if (e !== cn || !this.$$html5) throw Fo("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = y(t) ? null : t, this.$$urlUpdatedByLocation = !0, this
            }
        });
        var qo = r("$parse"),
            Go = {}.constructor.prototype.valueOf,
            zo = we();
        o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(e) {
            zo[e] = !0
        });
        var Wo = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "\t",
                v: "\v",
                "'": "'",
                '"': '"'
            },
            Ko = function(e) {
                this.options = e
            };
        Ko.prototype = {
            constructor: Ko,
            lex: function(e) {
                for (this.text = e, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var t = this.text.charAt(this.index);
                    if ('"' === t || "'" === t) this.readString(t);
                    else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
                    else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: t
                    }), this.index++;
                    else if (this.isWhitespace(t)) this.index++;
                    else {
                        var n = t + this.peek(),
                            r = n + this.peek(2),
                            i = zo[t],
                            o = zo[n],
                            a = zo[r];
                        if (i || o || a) {
                            var s = a ? r : o ? n : t;
                            this.tokens.push({
                                index: this.index,
                                text: s,
                                operator: !0
                            }), this.index += s.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            },
            is: function(e, t) {
                return -1 !== t.indexOf(e)
            },
            peek: function(e) {
                var t = e || 1;
                return this.index + t < this.text.length && this.text.charAt(this.index + t)
            },
            isNumber: function(e) {
                return "0" <= e && e <= "9" && "string" == typeof e
            },
            isWhitespace: function(e) {
                return " " === e || "\r" === e || "\t" === e || "\n" === e || "\v" === e || "Â " === e
            },
            isIdentifierStart: function(e) {
                return this.options.isIdentifierStart ? this.options.isIdentifierStart(e, this.codePointAt(e)) : this.isValidIdentifierStart(e)
            },
            isValidIdentifierStart: function(e) {
                return "a" <= e && e <= "z" || "A" <= e && e <= "Z" || "_" === e || "$" === e
            },
            isIdentifierContinue: function(e) {
                return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(e, this.codePointAt(e)) : this.isValidIdentifierContinue(e)
            },
            isValidIdentifierContinue: function(e, t) {
                return this.isValidIdentifierStart(e, t) || this.isNumber(e)
            },
            codePointAt: function(e) {
                return 1 === e.length ? e.charCodeAt(0) : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888
            },
            peekMultichar: function() {
                var e = this.text.charAt(this.index),
                    t = this.peek();
                if (!t) return e;
                var n = e.charCodeAt(0),
                    r = t.charCodeAt(0);
                return n >= 55296 && n <= 56319 && r >= 56320 && r <= 57343 ? e + t : e
            },
            isExpOperator: function(e) {
                return "-" === e || "+" === e || this.isNumber(e)
            },
            throwError: function(e, t, n) {
                n = n || this.index;
                var r = b(t) ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]" : " " + n;
                throw qo("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", e, r, this.text)
            },
            readNumber: function() {
                for (var e = "", t = this.index; this.index < this.text.length;) {
                    var n = hi(this.text.charAt(this.index));
                    if ("." === n || this.isNumber(n)) e += n;
                    else {
                        var r = this.peek();
                        if ("e" === n && this.isExpOperator(r)) e += n;
                        else if (this.isExpOperator(n) && r && this.isNumber(r) && "e" === e.charAt(e.length - 1)) e += n;
                        else {
                            if (!this.isExpOperator(n) || r && this.isNumber(r) || "e" !== e.charAt(e.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({
                    index: t,
                    text: e,
                    constant: !0,
                    value: Number(e)
                })
            },
            readIdent: function() {
                var e = this.index;
                for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                    var t = this.peekMultichar();
                    if (!this.isIdentifierContinue(t)) break;
                    this.index += t.length
                }
                this.tokens.push({
                    index: e,
                    text: this.text.slice(e, this.index),
                    identifier: !0
                })
            },
            readString: function(e) {
                var t = this.index;
                this.index++;
                for (var n = "", r = e, i = !1; this.index < this.text.length;) {
                    var o = this.text.charAt(this.index);
                    if (r += o, i) {
                        if ("u" === o) {
                            var a = this.text.substring(this.index + 1, this.index + 5);
                            a.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + a + "]"), this.index += 4, n += String.fromCharCode(parseInt(a, 16))
                        } else {
                            n += Wo[o] || o
                        }
                        i = !1
                    } else if ("\\" === o) i = !0;
                    else {
                        if (o === e) return this.index++, void this.tokens.push({
                            index: t,
                            text: r,
                            constant: !0,
                            value: n
                        });
                        n += o
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", t)
            }
        };
        var Yo = function(e, t) {
            this.lexer = e, this.options = t
        };
        Yo.Program = "Program", Yo.ExpressionStatement = "ExpressionStatement", Yo.AssignmentExpression = "AssignmentExpression", Yo.ConditionalExpression = "ConditionalExpression", Yo.LogicalExpression = "LogicalExpression", Yo.BinaryExpression = "BinaryExpression", Yo.UnaryExpression = "UnaryExpression", Yo.CallExpression = "CallExpression", Yo.MemberExpression = "MemberExpression", Yo.Identifier = "Identifier", Yo.Literal = "Literal", Yo.ArrayExpression = "ArrayExpression", Yo.Property = "Property", Yo.ObjectExpression = "ObjectExpression", Yo.ThisExpression = "ThisExpression", Yo.LocalsExpression = "LocalsExpression", Yo.NGValueParameter = "NGValueParameter", Yo.prototype = {
            ast: function(e) {
                this.text = e, this.tokens = this.lexer.lex(e);
                var t = this.program();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
            },
            program: function() {
                for (var e = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && e.push(this.expressionStatement()), !this.expect(";")) return {
                        type: Yo.Program,
                        body: e
                    }
            },
            expressionStatement: function() {
                return {
                    type: Yo.ExpressionStatement,
                    expression: this.filterChain()
                }
            },
            filterChain: function() {
                for (var e = this.expression(); this.expect("|");) e = this.filter(e);
                return e
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var e = this.ternary();
                if (this.expect("=")) {
                    if (!Sn(e)) throw qo("lval", "Trying to assign a value to a non l-value");
                    e = {
                        type: Yo.AssignmentExpression,
                        left: e,
                        right: this.assignment(),
                        operator: "="
                    }
                }
                return e
            },
            ternary: function() {
                var e, t, n = this.logicalOR();
                return this.expect("?") && (e = this.expression(), this.consume(":")) ? (t = this.expression(), {
                    type: Yo.ConditionalExpression,
                    test: n,
                    alternate: e,
                    consequent: t
                }) : n
            },
            logicalOR: function() {
                for (var e = this.logicalAND(); this.expect("||");) e = {
                    type: Yo.LogicalExpression,
                    operator: "||",
                    left: e,
                    right: this.logicalAND()
                };
                return e
            },
            logicalAND: function() {
                for (var e = this.equality(); this.expect("&&");) e = {
                    type: Yo.LogicalExpression,
                    operator: "&&",
                    left: e,
                    right: this.equality()
                };
                return e
            },
            equality: function() {
                for (var e, t = this.relational(); e = this.expect("==", "!=", "===", "!==");) t = {
                    type: Yo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.relational()
                };
                return t
            },
            relational: function() {
                for (var e, t = this.additive(); e = this.expect("<", ">", "<=", ">=");) t = {
                    type: Yo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.additive()
                };
                return t
            },
            additive: function() {
                for (var e, t = this.multiplicative(); e = this.expect("+", "-");) t = {
                    type: Yo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.multiplicative()
                };
                return t
            },
            multiplicative: function() {
                for (var e, t = this.unary(); e = this.expect("*", "/", "%");) t = {
                    type: Yo.BinaryExpression,
                    operator: e.text,
                    left: t,
                    right: this.unary()
                };
                return t
            },
            unary: function() {
                var e;
                return (e = this.expect("+", "-", "!")) ? {
                    type: Yo.UnaryExpression,
                    operator: e.text,
                    prefix: !0,
                    argument: this.unary()
                } : this.primary()
            },
            primary: function() {
                var e;
                this.expect("(") ? (e = this.filterChain(), this.consume(")")) : this.expect("[") ? e = this.arrayDeclaration() : this.expect("{") ? e = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? e = q(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? e = {
                    type: Yo.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? e = this.identifier() : this.peek().constant ? e = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var t; t = this.expect("(", "[", ".");) "(" === t.text ? (e = {
                    type: Yo.CallExpression,
                    callee: e,
                    arguments: this.parseArguments()
                }, this.consume(")")) : "[" === t.text ? (e = {
                    type: Yo.MemberExpression,
                    object: e,
                    property: this.expression(),
                    computed: !0
                }, this.consume("]")) : "." === t.text ? e = {
                    type: Yo.MemberExpression,
                    object: e,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
                return e
            },
            filter: function(e) {
                for (var t = [e], n = {
                        type: Yo.CallExpression,
                        callee: this.identifier(),
                        arguments: t,
                        filter: !0
                    }; this.expect(":");) t.push(this.expression());
                return n
            },
            parseArguments: function() {
                var e = [];
                if (")" !== this.peekToken().text)
                    do {
                        e.push(this.filterChain())
                    } while (this.expect(","));
                return e
            },
            identifier: function() {
                var e = this.consume();
                return e.identifier || this.throwError("is not a valid identifier", e), {
                    type: Yo.Identifier,
                    name: e.text
                }
            },
            constant: function() {
                return {
                    type: Yo.Literal,
                    value: this.consume().value
                }
            },
            arrayDeclaration: function() {
                var e = [];
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        e.push(this.expression())
                    } while (this.expect(","));
                return this.consume("]"), {
                    type: Yo.ArrayExpression,
                    elements: e
                }
            },
            object: function() {
                var e, t = [];
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        e = {
                            type: Yo.Property,
                            kind: "init"
                        }, this.peek().constant ? (e.key = this.constant(), e.computed = !1, this.consume(":"), e.value = this.expression()) : this.peek().identifier ? (e.key = this.identifier(), e.computed = !1, this.peek(":") ? (this.consume(":"), e.value = this.expression()) : e.value = e.key) : this.peek("[") ? (this.consume("["), e.key = this.expression(), this.consume("]"), e.computed = !0, this.consume(":"), e.value = this.expression()) : this.throwError("invalid key", this.peek()), t.push(e)
                    } while (this.expect(","));
                return this.consume("}"), {
                    type: Yo.ObjectExpression,
                    properties: t
                }
            },
            throwError: function(e, t) {
                throw qo("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", t.text, e, t.index + 1, this.text, this.text.substring(t.index))
            },
            consume: function(e) {
                if (0 === this.tokens.length) throw qo("ueoe", "Unexpected end of expression: {0}", this.text);
                var t = this.expect(e);
                return t || this.throwError("is unexpected, expecting [" + e + "]", this.peek()), t
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw qo("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(e, t, n, r) {
                return this.peekAhead(0, e, t, n, r)
            },
            peekAhead: function(e, t, n, r, i) {
                if (this.tokens.length > e) {
                    var o = this.tokens[e],
                        a = o.text;
                    if (a === t || a === n || a === r || a === i || !t && !n && !r && !i) return o
                }
                return !1
            },
            expect: function(e, t, n, r) {
                var i = this.peek(e, t, n, r);
                return !!i && (this.tokens.shift(), i)
            },
            selfReferential: {
                this: {
                    type: Yo.ThisExpression
                },
                $locals: {
                    type: Yo.LocalsExpression
                }
            }
        };
        var Jo = 1,
            Zo = 2;
        _n.prototype = {
            compile: function(e) {
                var t = this;
                this.state = {
                    nextId: 0,
                    filters: {},
                    fn: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    assign: {
                        vars: [],
                        body: [],
                        own: {}
                    },
                    inputs: []
                }, bn(e, t.$filter);
                var n, r = "";
                if (this.stage = "assign", n = Cn(e)) {
                    this.state.computing = "assign";
                    var i = this.nextId();
                    this.recurse(n, i), this.return_(i), r = "fn.assign=" + this.generateFunction("assign", "s,v,l")
                }
                var a = wn(e.body);
                t.stage = "inputs", o(a, function(e, n) {
                    var r = "fn" + n;
                    t.state[r] = {
                        vars: [],
                        body: [],
                        own: {}
                    }, t.state.computing = r;
                    var i = t.nextId();
                    t.recurse(e, i), t.return_(i), t.state.inputs.push({
                        name: r,
                        isPure: e.isPure
                    }), e.watchId = n
                }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
                var s = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + r + this.watchFns() + "return fn;",
                    c = new Function("$filter", "getStringValue", "ifDefined", "plus", s)(this.$filter, vn, gn, mn);
                return this.state = this.stage = void 0, c
            },
            USE: "use",
            STRICT: "strict",
            watchFns: function() {
                var e = [],
                    t = this.state.inputs,
                    n = this;
                return o(t, function(t) {
                    e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")), t.isPure && e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";")
                }), t.length && e.push("fn.inputs=[" + t.map(function(e) {
                    return e.name
                }).join(",") + "];"), e.join("")
            },
            generateFunction: function(e, t) {
                return "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
            },
            filterPrefix: function() {
                var e = [],
                    t = this;
                return o(this.state.filters, function(n, r) {
                    e.push(n + "=$filter(" + t.escape(r) + ")")
                }), e.length ? "var " + e.join(",") + ";" : ""
            },
            varsPrefix: function(e) {
                return this.state[e].vars.length ? "var " + this.state[e].vars.join(",") + ";" : ""
            },
            body: function(e) {
                return this.state[e].body.join("")
            },
            recurse: function(e, t, n, r, i, a) {
                var s, c, u, l, f, p = this;
                if (r = r || v, !a && b(e.watchId)) return t = t || this.nextId(), void this.if_("i", this.lazyAssign(t, this.computedMember("i", e.watchId)), this.lazyRecurse(e, t, n, r, i, !0));
                switch (e.type) {
                    case Yo.Program:
                        o(e.body, function(t, n) {
                            p.recurse(t.expression, void 0, void 0, function(e) {
                                c = e
                            }), n !== e.body.length - 1 ? p.current().body.push(c, ";") : p.return_(c)
                        });
                        break;
                    case Yo.Literal:
                        l = this.escape(e.value), this.assign(t, l), r(t || l);
                        break;
                    case Yo.UnaryExpression:
                        this.recurse(e.argument, void 0, void 0, function(e) {
                            c = e
                        }), l = e.operator + "(" + this.ifDefined(c, 0) + ")", this.assign(t, l), r(l);
                        break;
                    case Yo.BinaryExpression:
                        this.recurse(e.left, void 0, void 0, function(e) {
                            s = e
                        }), this.recurse(e.right, void 0, void 0, function(e) {
                            c = e
                        }), l = "+" === e.operator ? this.plus(s, c) : "-" === e.operator ? this.ifDefined(s, 0) + e.operator + this.ifDefined(c, 0) : "(" + s + ")" + e.operator + "(" + c + ")", this.assign(t, l), r(l);
                        break;
                    case Yo.LogicalExpression:
                        t = t || this.nextId(), p.recurse(e.left, t), p.if_("&&" === e.operator ? t : p.not(t), p.lazyRecurse(e.right, t)), r(t);
                        break;
                    case Yo.ConditionalExpression:
                        t = t || this.nextId(), p.recurse(e.test, t), p.if_(t, p.lazyRecurse(e.alternate, t), p.lazyRecurse(e.consequent, t)), r(t);
                        break;
                    case Yo.Identifier:
                        t = t || this.nextId(), n && (n.context = "inputs" === p.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", e.name) + "?l:s"), n.computed = !1, n.name = e.name), p.if_("inputs" === p.stage || p.not(p.getHasOwnProperty("l", e.name)), function() {
                            p.if_("inputs" === p.stage || "s", function() {
                                i && 1 !== i && p.if_(p.isNull(p.nonComputedMember("s", e.name)), p.lazyAssign(p.nonComputedMember("s", e.name), "{}")), p.assign(t, p.nonComputedMember("s", e.name))
                            })
                        }, t && p.lazyAssign(t, p.nonComputedMember("l", e.name))), r(t);
                        break;
                    case Yo.MemberExpression:
                        s = n && (n.context = this.nextId()) || this.nextId(), t = t || this.nextId(), p.recurse(e.object, s, void 0, function() {
                            p.if_(p.notNull(s), function() {
                                e.computed ? (c = p.nextId(), p.recurse(e.property, c), p.getStringValue(c), i && 1 !== i && p.if_(p.not(p.computedMember(s, c)), p.lazyAssign(p.computedMember(s, c), "{}")), l = p.computedMember(s, c), p.assign(t, l), n && (n.computed = !0, n.name = c)) : (i && 1 !== i && p.if_(p.isNull(p.nonComputedMember(s, e.property.name)), p.lazyAssign(p.nonComputedMember(s, e.property.name), "{}")), l = p.nonComputedMember(s, e.property.name), p.assign(t, l), n && (n.computed = !1, n.name = e.property.name))
                            }, function() {
                                p.assign(t, "undefined")
                            }), r(t)
                        }, !!i);
                        break;
                    case Yo.CallExpression:
                        t = t || this.nextId(), e.filter ? (c = p.filter(e.callee.name), u = [], o(e.arguments, function(e) {
                            var t = p.nextId();
                            p.recurse(e, t), u.push(t)
                        }), l = c + "(" + u.join(",") + ")", p.assign(t, l), r(t)) : (c = p.nextId(), s = {}, u = [], p.recurse(e.callee, c, s, function() {
                            p.if_(p.notNull(c), function() {
                                o(e.arguments, function(t) {
                                    p.recurse(t, e.constant ? void 0 : p.nextId(), void 0, function(e) {
                                        u.push(e)
                                    })
                                }), l = s.name ? p.member(s.context, s.name, s.computed) + "(" + u.join(",") + ")" : c + "(" + u.join(",") + ")", p.assign(t, l)
                            }, function() {
                                p.assign(t, "undefined")
                            }), r(t)
                        }));
                        break;
                    case Yo.AssignmentExpression:
                        c = this.nextId(), s = {}, this.recurse(e.left, void 0, s, function() {
                            p.if_(p.notNull(s.context), function() {
                                p.recurse(e.right, c), l = p.member(s.context, s.name, s.computed) + e.operator + c, p.assign(t, l), r(t || l)
                            })
                        }, 1);
                        break;
                    case Yo.ArrayExpression:
                        u = [], o(e.elements, function(t) {
                            p.recurse(t, e.constant ? void 0 : p.nextId(), void 0, function(e) {
                                u.push(e)
                            })
                        }), l = "[" + u.join(",") + "]", this.assign(t, l), r(t || l);
                        break;
                    case Yo.ObjectExpression:
                        u = [], f = !1, o(e.properties, function(e) {
                            e.computed && (f = !0)
                        }), f ? (t = t || this.nextId(), this.assign(t, "{}"), o(e.properties, function(e) {
                            e.computed ? (s = p.nextId(), p.recurse(e.key, s)) : s = e.key.type === Yo.Identifier ? e.key.name : "" + e.key.value, c = p.nextId(), p.recurse(e.value, c), p.assign(p.member(t, s, e.computed), c)
                        })) : (o(e.properties, function(t) {
                            p.recurse(t.value, e.constant ? void 0 : p.nextId(), void 0, function(e) {
                                u.push(p.escape(t.key.type === Yo.Identifier ? t.key.name : "" + t.key.value) + ":" + e)
                            })
                        }), l = "{" + u.join(",") + "}", this.assign(t, l)), r(t || l);
                        break;
                    case Yo.ThisExpression:
                        this.assign(t, "s"), r(t || "s");
                        break;
                    case Yo.LocalsExpression:
                        this.assign(t, "l"), r(t || "l");
                        break;
                    case Yo.NGValueParameter:
                        this.assign(t, "v"), r(t || "v")
                }
            },
            getHasOwnProperty: function(e, t) {
                var n = e + "." + t,
                    r = this.current().own;
                return r.hasOwnProperty(n) || (r[n] = this.nextId(!1, e + "&&(" + this.escape(t) + " in " + e + ")")), r[n]
            },
            assign: function(e, t) {
                if (e) return this.current().body.push(e, "=", t, ";"), e
            },
            filter: function(e) {
                return this.state.filters.hasOwnProperty(e) || (this.state.filters[e] = this.nextId(!0)), this.state.filters[e]
            },
            ifDefined: function(e, t) {
                return "ifDefined(" + e + "," + this.escape(t) + ")"
            },
            plus: function(e, t) {
                return "plus(" + e + "," + t + ")"
            },
            return_: function(e) {
                this.current().body.push("return ", e, ";")
            },
            if_: function(e, t, n) {
                if (!0 === e) t();
                else {
                    var r = this.current().body;
                    r.push("if(", e, "){"), t(), r.push("}"), n && (r.push("else{"), n(), r.push("}"))
                }
            },
            not: function(e) {
                return "!(" + e + ")"
            },
            isNull: function(e) {
                return e + "==null"
            },
            notNull: function(e) {
                return e + "!=null"
            },
            nonComputedMember: function(e, t) {
                var n = /^[$_a-zA-Z][$_a-zA-Z0-9]*$/,
                    r = /[^$_a-zA-Z0-9]/g;
                return n.test(t) ? e + "." + t : e + '["' + t.replace(r, this.stringEscapeFn) + '"]'
            },
            computedMember: function(e, t) {
                return e + "[" + t + "]"
            },
            member: function(e, t, n) {
                return n ? this.computedMember(e, t) : this.nonComputedMember(e, t)
            },
            getStringValue: function(e) {
                this.assign(e, "getStringValue(" + e + ")")
            },
            lazyRecurse: function(e, t, n, r, i, o) {
                var a = this;
                return function() {
                    a.recurse(e, t, n, r, i, o)
                }
            },
            lazyAssign: function(e, t) {
                var n = this;
                return function() {
                    n.assign(e, t)
                }
            },
            stringEscapeRegex: /[^ a-zA-Z0-9]/g,
            stringEscapeFn: function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            },
            escape: function(e) {
                if (C(e)) return "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
                if (k(e)) return e.toString();
                if (!0 === e) return "true";
                if (!1 === e) return "false";
                if (null === e) return "null";
                if (void 0 === e) return "undefined";
                throw qo("esc", "IMPOSSIBLE")
            },
            nextId: function(e, t) {
                var n = "v" + this.state.nextId++;
                return e || this.current().vars.push(n + (t ? "=" + t : "")), n
            },
            current: function() {
                return this.state[this.state.computing]
            }
        }, xn.prototype = {
            compile: function(e) {
                var t = this;
                bn(e, t.$filter);
                var n, r;
                (n = Cn(e)) && (r = this.recurse(n));
                var i, a = wn(e.body);
                a && (i = [], o(a, function(e, n) {
                    var r = t.recurse(e);
                    r.isPure = e.isPure, e.input = r, i.push(r), e.watchId = n
                }));
                var s = [];
                o(e.body, function(e) {
                    s.push(t.recurse(e.expression))
                });
                var c = 0 === e.body.length ? v : 1 === e.body.length ? s[0] : function(e, t) {
                    var n;
                    return o(s, function(r) {
                        n = r(e, t)
                    }), n
                };
                return r && (c.assign = function(e, t, n) {
                    return r(e, n, t)
                }), i && (c.inputs = i), c
            },
            recurse: function(e, t, n) {
                var r, i, a, s = this;
                if (e.input) return this.inputs(e.input, e.watchId);
                switch (e.type) {
                    case Yo.Literal:
                        return this.value(e.value, t);
                    case Yo.UnaryExpression:
                        return i = this.recurse(e.argument), this["unary" + e.operator](i, t);
                    case Yo.BinaryExpression:
                    case Yo.LogicalExpression:
                        return r = this.recurse(e.left), i = this.recurse(e.right), this["binary" + e.operator](r, i, t);
                    case Yo.ConditionalExpression:
                        return this["ternary?:"](this.recurse(e.test), this.recurse(e.alternate), this.recurse(e.consequent), t);
                    case Yo.Identifier:
                        return s.identifier(e.name, t, n);
                    case Yo.MemberExpression:
                        return r = this.recurse(e.object, !1, !!n), e.computed || (i = e.property.name), e.computed && (i = this.recurse(e.property)), e.computed ? this.computedMember(r, i, t, n) : this.nonComputedMember(r, i, t, n);
                    case Yo.CallExpression:
                        return a = [], o(e.arguments, function(e) {
                            a.push(s.recurse(e))
                        }), e.filter && (i = this.$filter(e.callee.name)), e.filter || (i = this.recurse(e.callee, !0)), e.filter ? function(e, n, r, o) {
                            for (var s = [], c = 0; c < a.length; ++c) s.push(a[c](e, n, r, o));
                            var u = i.apply(void 0, s, o);
                            return t ? {
                                context: void 0,
                                name: void 0,
                                value: u
                            } : u
                        } : function(e, n, r, o) {
                            var s, c = i(e, n, r, o);
                            if (null != c.value) {
                                for (var u = [], l = 0; l < a.length; ++l) u.push(a[l](e, n, r, o));
                                s = c.value.apply(c.context, u)
                            }
                            return t ? {
                                value: s
                            } : s
                        };
                    case Yo.AssignmentExpression:
                        return r = this.recurse(e.left, !0, 1), i = this.recurse(e.right),
                            function(e, n, o, a) {
                                var s = r(e, n, o, a),
                                    c = i(e, n, o, a);
                                return s.context[s.name] = c, t ? {
                                    value: c
                                } : c
                            };
                    case Yo.ArrayExpression:
                        return a = [], o(e.elements, function(e) {
                                a.push(s.recurse(e))
                            }),
                            function(e, n, r, i) {
                                for (var o = [], s = 0; s < a.length; ++s) o.push(a[s](e, n, r, i));
                                return t ? {
                                    value: o
                                } : o
                            };
                    case Yo.ObjectExpression:
                        return a = [], o(e.properties, function(e) {
                                e.computed ? a.push({
                                    key: s.recurse(e.key),
                                    computed: !0,
                                    value: s.recurse(e.value)
                                }) : a.push({
                                    key: e.key.type === Yo.Identifier ? e.key.name : "" + e.key.value,
                                    computed: !1,
                                    value: s.recurse(e.value)
                                })
                            }),
                            function(e, n, r, i) {
                                for (var o = {}, s = 0; s < a.length; ++s) a[s].computed ? o[a[s].key(e, n, r, i)] = a[s].value(e, n, r, i) : o[a[s].key] = a[s].value(e, n, r, i);
                                return t ? {
                                    value: o
                                } : o
                            };
                    case Yo.ThisExpression:
                        return function(e) {
                            return t ? {
                                value: e
                            } : e
                        };
                    case Yo.LocalsExpression:
                        return function(e, n) {
                            return t ? {
                                value: n
                            } : n
                        };
                    case Yo.NGValueParameter:
                        return function(e, n, r) {
                            return t ? {
                                value: r
                            } : r
                        }
                }
            },
            "unary+": function(e, t) {
                return function(n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = b(a) ? +a : 0, t ? {
                        value: a
                    } : a
                }
            },
            "unary-": function(e, t) {
                return function(n, r, i, o) {
                    var a = e(n, r, i, o);
                    return a = b(a) ? -a : -0, t ? {
                        value: a
                    } : a
                }
            },
            "unary!": function(e, t) {
                return function(n, r, i, o) {
                    var a = !e(n, r, i, o);
                    return t ? {
                        value: a
                    } : a
                }
            },
            "binary+": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a),
                        c = t(r, i, o, a),
                        u = mn(s, c);
                    return n ? {
                        value: u
                    } : u
                }
            },
            "binary-": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a),
                        c = t(r, i, o, a),
                        u = (b(s) ? s : 0) - (b(c) ? c : 0);
                    return n ? {
                        value: u
                    } : u
                }
            },
            "binary*": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) * t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary/": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) / t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary%": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) % t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary===": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) === t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!==": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) !== t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary==": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) == t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary!=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) != t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) < t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) > t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary<=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) <= t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary>=": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) >= t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary&&": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) && t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "binary||": function(e, t, n) {
                return function(r, i, o, a) {
                    var s = e(r, i, o, a) || t(r, i, o, a);
                    return n ? {
                        value: s
                    } : s
                }
            },
            "ternary?:": function(e, t, n, r) {
                return function(i, o, a, s) {
                    var c = e(i, o, a, s) ? t(i, o, a, s) : n(i, o, a, s);
                    return r ? {
                        value: c
                    } : c
                }
            },
            value: function(e, t) {
                return function() {
                    return t ? {
                        context: void 0,
                        name: void 0,
                        value: e
                    } : e
                }
            },
            identifier: function(e, t, n) {
                return function(r, i, o, a) {
                    var s = i && e in i ? i : r;
                    n && 1 !== n && s && null == s[e] && (s[e] = {});
                    var c = s ? s[e] : void 0;
                    return t ? {
                        context: s,
                        name: e,
                        value: c
                    } : c
                }
            },
            computedMember: function(e, t, n, r) {
                return function(i, o, a, s) {
                    var c, u, l = e(i, o, a, s);
                    return null != l && (c = t(i, o, a, s), c = vn(c), r && 1 !== r && l && !l[c] && (l[c] = {}), u = l[c]), n ? {
                        context: l,
                        name: c,
                        value: u
                    } : u
                }
            },
            nonComputedMember: function(e, t, n, r) {
                return function(i, o, a, s) {
                    var c = e(i, o, a, s);
                    r && 1 !== r && c && null == c[t] && (c[t] = {});
                    var u = null != c ? c[t] : void 0;
                    return n ? {
                        context: c,
                        name: t,
                        value: u
                    } : u
                }
            },
            inputs: function(e, t) {
                return function(n, r, i, o) {
                    return o ? o[t] : e(n, r, i)
                }
            }
        }, An.prototype = {
            constructor: An,
            parse: function(e) {
                var t = this.getAst(e),
                    n = this.astCompiler.compile(t.ast);
                return n.literal = kn(t.ast), n.constant = En(t.ast), n.oneTime = t.oneTime, n
            },
            getAst: function(e) {
                var t = !1;
                return e = e.trim(), ":" === e.charAt(0) && ":" === e.charAt(1) && (t = !0, e = e.substring(2)), {
                    ast: this.ast.ast(e),
                    oneTime: t
                }
            }
        };
        var Qo, Xo = r("$sce"),
            ea = {
                HTML: "html",
                CSS: "css",
                MEDIA_URL: "mediaUrl",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            },
            ta = /_([a-z])/g,
            na = r("$templateRequest"),
            ra = r("$timeout"),
            ia = e.document.createElement("a"),
            oa = Yn(e.location.href);
        nr.$inject = ["$document"], ir.$inject = ["$provide"];
        var aa = 22,
            sa = ".",
            ca = "0";
        ur.$inject = ["$locale"], lr.$inject = ["$locale"];
        var ua = {
                yyyy: vr("FullYear", 4, 0, !1, !0),
                yy: vr("FullYear", 2, 0, !0, !0),
                y: vr("FullYear", 1, 0, !1, !0),
                MMMM: gr("Month"),
                MMM: gr("Month", !0),
                MM: vr("Month", 2, 1),
                M: vr("Month", 1, 1),
                LLLL: gr("Month", !1, !0),
                dd: vr("Date", 2),
                d: vr("Date", 1),
                HH: vr("Hours", 2),
                H: vr("Hours", 1),
                hh: vr("Hours", 2, -12),
                h: vr("Hours", 1, -12),
                mm: vr("Minutes", 2),
                m: vr("Minutes", 1),
                ss: vr("Seconds", 2),
                s: vr("Seconds", 1),
                sss: vr("Milliseconds", 3),
                EEEE: gr("Day"),
                EEE: gr("Day", !0),
                a: wr,
                Z: mr,
                ww: br(2),
                w: br(1),
                G: Sr,
                GG: Sr,
                GGG: Sr,
                GGGG: Cr
            },
            la = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
            fa = /^-?\d+$/;
        kr.$inject = ["$locale"];
        var pa = m(hi),
            da = m(vi);
        Ar.$inject = ["$parse"];
        var ha = m({
                restrict: "E",
                compile: function(e, t) {
                    if (!t.href && !t.xlinkHref) return function(e, t) {
                        if ("a" === t[0].nodeName.toLowerCase()) {
                            var n = "[object SVGAnimatedString]" === yi.call(t.prop("href")) ? "xlink:href" : "href";
                            t.on("click", function(e) {
                                t.attr(n) || e.preventDefault()
                            })
                        }
                    }
                }
            }),
            va = {};
        o(to, function(e, t) {
            function n(e, n, i) {
                e.$watch(i[r], function(e) {
                    i.$set(t, !!e)
                })
            }
            if ("multiple" !== e) {
                var r = At("ng-" + t),
                    i = n;
                "checked" === e && (i = function(e, t, i) {
                    i.ngModel !== i[r] && n(e, t, i)
                }), va[r] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: i
                    }
                }
            }
        }), o(ro, function(e, t) {
            va[t] = function() {
                return {
                    priority: 100,
                    link: function(e, n, r) {
                        if ("ngPattern" === t && "/" === r.ngPattern.charAt(0)) {
                            var i = r.ngPattern.match(fi);
                            if (i) return void r.$set("ngPattern", new RegExp(i[1], i[2]))
                        }
                        e.$watch(r[t], function(e) {
                            r.$set(t, e)
                        })
                    }
                }
            }
        }), o(["src", "srcset", "href"], function(e) {
            var t = At("ng-" + e);
            va[t] = function() {
                return {
                    priority: 99,
                    link: function(n, r, i) {
                        var o = e,
                            a = e;
                        "href" === e && "[object SVGAnimatedString]" === yi.call(r.prop("href")) && (a = "xlinkHref", i.$attr[a] = "xlink:href", o = null), i.$observe(t, function(t) {
                            if (!t) return void("href" === e && i.$set(a, null));
                            i.$set(a, t), ai && o && r.prop(o, i[a])
                        })
                    }
                }
            }
        });
        var ga = {
                $addControl: v,
                $$renameControl: Rr,
                $removeControl: v,
                $setValidity: v,
                $setDirty: v,
                $setPristine: v,
                $setSubmitted: v,
                $$setSubmitted: v
            },
            ma = "ng-pending",
            $a = "ng-submitted";
        Or.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"], Or.prototype = {
            $rollbackViewValue: function() {
                o(this.$$controls, function(e) {
                    e.$rollbackViewValue()
                })
            },
            $commitViewValue: function() {
                o(this.$$controls, function(e) {
                    e.$commitViewValue()
                })
            },
            $addControl: function(e) {
                $e(e.$name, "input"), this.$$controls.push(e), e.$name && (this[e.$name] = e), e.$$parentForm = this
            },
            $$renameControl: function(e, t) {
                var n = e.$name;
                this[n] === e && delete this[n], this[t] = e, e.$name = t
            },
            $removeControl: function(e) {
                e.$name && this[e.$name] === e && delete this[e.$name], o(this.$pending, function(t, n) {
                    this.$setValidity(n, null, e)
                }, this), o(this.$error, function(t, n) {
                    this.$setValidity(n, null, e)
                }, this), o(this.$$success, function(t, n) {
                    this.$setValidity(n, null, e)
                }, this), H(this.$$controls, e), e.$$parentForm = ga
            },
            $setDirty: function() {
                this.$$animate.removeClass(this.$$element, ts), this.$$animate.addClass(this.$$element, ns), this.$dirty = !0, this.$pristine = !1, this.$$parentForm.$setDirty()
            },
            $setPristine: function() {
                this.$$animate.setClass(this.$$element, ts, ns + " " + $a), this.$dirty = !1, this.$pristine = !0, this.$submitted = !1, o(this.$$controls, function(e) {
                    e.$setPristine()
                })
            },
            $setUntouched: function() {
                o(this.$$controls, function(e) {
                    e.$setUntouched()
                })
            },
            $setSubmitted: function() {
                for (var e = this; e.$$parentForm && e.$$parentForm !== ga;) e = e.$$parentForm;
                e.$$setSubmitted()
            },
            $$setSubmitted: function() {
                this.$$animate.addClass(this.$$element, $a), this.$submitted = !0, o(this.$$controls, function(e) {
                    e.$$setSubmitted && e.$$setSubmitted()
                })
            }
        }, Pr({
            clazz: Or,
            set: function(e, t, n) {
                var r = e[t];
                if (r) {
                    -1 === r.indexOf(n) && r.push(n)
                } else e[t] = [n]
            },
            unset: function(e, t, n) {
                var r = e[t];
                r && (H(r, n), 0 === r.length && delete e[t])
            }
        });
        var ya = function(e) {
                return ["$timeout", "$parse", function(t, n) {
                    function r(e) {
                        return "" === e ? n('this[""]').assign : n(e).assign || v
                    }
                    return {
                        name: "form",
                        restrict: e ? "EAC" : "E",
                        require: ["form", "^^?form"],
                        controller: Or,
                        compile: function(n, i) {
                            n.addClass(ts).addClass(Xa);
                            var o = i.name ? "name" : !(!e || !i.ngForm) && "ngForm";
                            return {
                                pre: function(e, n, i, a) {
                                    var s = a[0];
                                    if (!("action" in i)) {
                                        var c = function(t) {
                                            e.$apply(function() {
                                                s.$commitViewValue(), s.$setSubmitted()
                                            }), t.preventDefault()
                                        };
                                        n[0].addEventListener("submit", c), n.on("$destroy", function() {
                                            t(function() {
                                                n[0].removeEventListener("submit", c)
                                            }, 0, !1)
                                        })
                                    }(a[1] || s.$$parentForm).$addControl(s);
                                    var u = o ? r(s.$name) : v;
                                    o && (u(e, s), i.$observe(o, function(t) {
                                        s.$name !== t && (u(e, void 0), s.$$parentForm.$$renameControl(s, t), (u = r(s.$name))(e, s))
                                    })), n.on("$destroy", function() {
                                        s.$$parentForm.$removeControl(s), u(e, void 0), f(s, ga)
                                    })
                                }
                            }
                        }
                    }
                }]
            },
            ba = ya(),
            wa = ya(!0),
            Sa = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
            Ca = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
            ka = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
            Ea = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
            _a = /^(\d{4,})-(\d{2})-(\d{2})$/,
            xa = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Aa = /^(\d{4,})-W(\d\d)$/,
            Ta = /^(\d{4,})-(\d\d)$/,
            Ra = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Oa = "keydown wheel mousedown",
            Da = we();
        o("date,datetime-local,month,time,week".split(","), function(e) {
            Da[e] = !0
        });
        var Pa = {
                text: jr,
                date: Nr("date", _a, Lr(_a, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": Nr("datetimelocal", xa, Lr(xa, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: Nr("time", Ra, Lr(Ra, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: Nr("week", Aa, Ur, "yyyy-Www"),
                month: Nr("month", Ta, Lr(Ta, ["yyyy", "MM"]), "yyyy-MM"),
                number: Wr,
                url: Yr,
                email: Jr,
                radio: Zr,
                range: Kr,
                checkbox: Xr,
                hidden: v,
                button: v,
                submit: v,
                reset: v,
                file: v
            },
            Ma = ["$browser", "$sniffer", "$filter", "$parse", function(e, t, n, r) {
                return {
                    restrict: "E",
                    require: ["?ngModel"],
                    link: {
                        pre: function(i, o, a, s) {
                            s[0] && (Pa[hi(a.type)] || Pa.text)(i, o, a, s[0], t, e, n, r)
                        }
                    }
                }
            }],
            Ia = /^(true|false|\d+)$/,
            ja = function() {
                function e(e, t, n) {
                    var r = b(n) ? n : 9 === ai ? "" : null;
                    e.prop("value", r), t.$set("value", n)
                }
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(t, n) {
                        return Ia.test(n.ngValue) ? function(t, n, r) {
                            e(n, r, t.$eval(r.ngValue))
                        } : function(t, n, r) {
                            t.$watch(r.ngValue, function(t) {
                                e(n, r, t)
                            })
                        }
                    }
                }
            },
            Va = ["$compile", function(e) {
                return {
                    restrict: "AC",
                    compile: function(t) {
                        return e.$$addBindingClass(t),
                            function(t, n, r) {
                                e.$$addBindingInfo(n, r.ngBind), n = n[0], t.$watch(r.ngBind, function(e) {
                                    n.textContent = Se(e)
                                })
                            }
                    }
                }
            }],
            Ua = ["$interpolate", "$compile", function(e, t) {
                return {
                    compile: function(n) {
                        return t.$$addBindingClass(n),
                            function(n, r, i) {
                                var o = e(r.attr(i.$attr.ngBindTemplate));
                                t.$$addBindingInfo(r, o.expressions), r = r[0], i.$observe("ngBindTemplate", function(e) {
                                    r.textContent = y(e) ? "" : e
                                })
                            }
                    }
                }
            }],
            La = ["$sce", "$parse", "$compile", function(e, t, n) {
                return {
                    restrict: "A",
                    compile: function(r, i) {
                        var o = t(i.ngBindHtml),
                            a = t(i.ngBindHtml, function(t) {
                                return e.valueOf(t)
                            });
                        return n.$$addBindingClass(r),
                            function(t, r, i) {
                                n.$$addBindingInfo(r, i.ngBindHtml), t.$watch(a, function() {
                                    var n = o(t);
                                    r.html(e.getTrustedHtml(n) || "")
                                })
                            }
                    }
                }
            }],
            Na = m({
                restrict: "A",
                require: "ngModel",
                link: function(e, t, n, r) {
                    r.$viewChangeListeners.push(function() {
                        e.$eval(n.ngChange)
                    })
                }
            }),
            Fa = ei("", !0),
            Ba = ei("Odd", 0),
            Ha = ei("Even", 1),
            qa = Tr({
                compile: function(e, t) {
                    t.$set("ngCloak", void 0), e.removeClass("ng-cloak")
                }
            }),
            Ga = [function() {
                return {
                    restrict: "A",
                    scope: !0,
                    controller: "@",
                    priority: 500
                }
            }],
            za = {},
            Wa = {
                blur: !0,
                focus: !0
            };
        o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(e) {
            var t = At("ng-" + e);
            za[t] = ["$parse", "$rootScope", function(n, r) {
                return {
                    restrict: "A",
                    compile: function(i, o) {
                        var a = n(o[t]);
                        return function(t, n) {
                            n.on(e, function(n) {
                                var i = function() {
                                    a(t, {
                                        $event: n
                                    })
                                };
                                Wa[e] && r.$$phase ? t.$evalAsync(i) : t.$apply(i)
                            })
                        }
                    }
                }
            }]
        });
        var Ka = ["$animate", "$compile", function(e, t) {
                return {
                    multiElement: !0,
                    transclude: "element",
                    priority: 600,
                    terminal: !0,
                    restrict: "A",
                    $$tlb: !0,
                    link: function(n, r, i, o, a) {
                        var s, c, u;
                        n.$watch(i.ngIf, function(n) {
                            n ? c || a(function(n, o) {
                                c = o, n[n.length++] = t.$$createComment("end ngIf", i.ngIf), s = {
                                    clone: n
                                }, e.enter(n, r.parent(), r)
                            }) : (u && (u.remove(), u = null), c && (c.$destroy(), c = null), s && (u = be(s.clone), e.leave(u).done(function(e) {
                                !1 !== e && (u = null)
                            }), s = null))
                        })
                    }
                }
            }],
            Ya = ["$templateRequest", "$anchorScroll", "$animate", function(e, t, n) {
                return {
                    restrict: "ECA",
                    priority: 400,
                    terminal: !0,
                    transclude: "element",
                    controller: Si.noop,
                    compile: function(r, i) {
                        var o = i.ngInclude || i.src,
                            a = i.onload || "",
                            s = i.autoscroll;
                        return function(r, i, c, u, l) {
                            var f, p, d, h = 0,
                                v = function() {
                                    p && (p.remove(), p = null), f && (f.$destroy(), f = null), d && (n.leave(d).done(function(e) {
                                        !1 !== e && (p = null)
                                    }), p = d, d = null)
                                };
                            r.$watch(o, function(o) {
                                var c = function(e) {
                                        !1 === e || !b(s) || s && !r.$eval(s) || t()
                                    },
                                    p = ++h;
                                o ? (e(o, !0).then(function(e) {
                                    if (!r.$$destroyed && p === h) {
                                        var t = r.$new();
                                        u.template = e;
                                        var s = l(t, function(e) {
                                            v(), n.enter(e, null, i).done(c)
                                        });
                                        f = t, d = s, f.$emit("$includeContentLoaded", o), r.$eval(a)
                                    }
                                }, function() {
                                    r.$$destroyed || p === h && (v(), r.$emit("$includeContentError", o))
                                }), r.$emit("$includeContentRequested", o)) : (v(), u.template = null)
                            })
                        }
                    }
                }
            }],
            Ja = ["$compile", function(t) {
                return {
                    restrict: "ECA",
                    priority: -400,
                    require: "ngInclude",
                    link: function(n, r, i, o) {
                        if (yi.call(r[0]).match(/SVG/)) return r.empty(), void t(Ie(o.template, e.document).childNodes)(n, function(e) {
                            r.append(e)
                        }, {
                            futureParentElement: r
                        });
                        r.html(o.template), t(r.contents())(n)
                    }
                }
            }],
            Za = Tr({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(e, t, n) {
                            e.$eval(n.ngInit)
                        }
                    }
                }
            }),
            Qa = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(e, t, n, r) {
                        var i = n.ngList || ", ",
                            a = "false" !== n.ngTrim,
                            s = a ? _i(i) : i,
                            c = function(e) {
                                if (!y(e)) {
                                    var t = [];
                                    return e && o(e.split(s), function(e) {
                                        e && t.push(a ? _i(e) : e)
                                    }), t
                                }
                            };
                        r.$parsers.push(c), r.$formatters.push(function(e) {
                            if (_(e)) return e.join(i)
                        }), r.$isEmpty = function(e) {
                            return !e || !e.length
                        }
                    }
                }
            },
            Xa = "ng-valid",
            es = "ng-invalid",
            ts = "ng-pristine",
            ns = "ng-dirty",
            rs = "ng-untouched",
            is = "ng-touched",
            os = "ng-empty",
            as = "ng-not-empty",
            ss = r("ngModel");
        ti.$inject = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$q", "$interpolate"], ti.prototype = {
            $$initGetterSetters: function() {
                if (this.$options.getOption("getterSetter")) {
                    var e = this.$$parse(this.$$attr.ngModel + "()"),
                        t = this.$$parse(this.$$attr.ngModel + "($$$p)");
                    this.$$ngModelGet = function(t) {
                        var n = this.$$parsedNgModel(t);
                        return A(n) && (n = e(t)), n
                    }, this.$$ngModelSet = function(e, n) {
                        A(this.$$parsedNgModel(e)) ? t(e, {
                            $$$p: n
                        }) : this.$$parsedNgModelAssign(e, n)
                    }
                } else if (!this.$$parsedNgModel.assign) throw ss("nonassign", "Expression '{0}' is non-assignable. Element: {1}", this.$$attr.ngModel, ne(this.$$element))
            },
            $render: v,
            $isEmpty: function(e) {
                return y(e) || "" === e || null === e || e !== e
            },
            $$updateEmptyClasses: function(e) {
                this.$isEmpty(e) ? (this.$$animate.removeClass(this.$$element, as), this.$$animate.addClass(this.$$element, os)) : (this.$$animate.removeClass(this.$$element, os), this.$$animate.addClass(this.$$element, as))
            },
            $setPristine: function() {
                this.$dirty = !1, this.$pristine = !0, this.$$animate.removeClass(this.$$element, ns), this.$$animate.addClass(this.$$element, ts)
            },
            $setDirty: function() {
                this.$dirty = !0, this.$pristine = !1, this.$$animate.removeClass(this.$$element, ts), this.$$animate.addClass(this.$$element, ns), this.$$parentForm.$setDirty()
            },
            $setUntouched: function() {
                this.$touched = !1, this.$untouched = !0, this.$$animate.setClass(this.$$element, rs, is)
            },
            $setTouched: function() {
                this.$touched = !0, this.$untouched = !1, this.$$animate.setClass(this.$$element, is, rs)
            },
            $rollbackViewValue: function() {
                this.$$timeout.cancel(this.$$pendingDebounce), this.$viewValue = this.$$lastCommittedViewValue, this.$render()
            },
            $validate: function() {
                if (!ki(this.$modelValue)) {
                    var e = this.$$lastCommittedViewValue,
                        t = this.$$rawModelValue,
                        n = this.$valid,
                        r = this.$modelValue,
                        i = this.$options.getOption("allowInvalid"),
                        o = this;
                    this.$$runValidators(t, e, function(e) {
                        i || n === e || (o.$modelValue = e ? t : void 0, o.$modelValue !== r && o.$$writeModelToScope())
                    })
                }
            },
            $$runValidators: function(e, t, n) {
                function r() {
                    var e = l.$$parserName;
                    return y(l.$$parserValid) ? (s(e, null), !0) : (l.$$parserValid || (o(l.$validators, function(e, t) {
                        s(t, null)
                    }), o(l.$asyncValidators, function(e, t) {
                        s(t, null)
                    })), s(e, l.$$parserValid), l.$$parserValid)
                }

                function i() {
                    var n = !0;
                    return o(l.$validators, function(r, i) {
                        var o = Boolean(r(e, t));
                        n = n && o, s(i, o)
                    }), !!n || (o(l.$asyncValidators, function(e, t) {
                        s(t, null)
                    }), !1)
                }

                function a() {
                    var n = [],
                        r = !0;
                    o(l.$asyncValidators, function(i, o) {
                        var a = i(e, t);
                        if (!j(a)) throw ss("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", a);
                        s(o, void 0), n.push(a.then(function() {
                            s(o, !0)
                        }, function() {
                            r = !1, s(o, !1)
                        }))
                    }), n.length ? l.$$q.all(n).then(function() {
                        c(r)
                    }, v) : c(!0)
                }

                function s(e, t) {
                    u === l.$$currentValidationRunId && l.$setValidity(e, t)
                }

                function c(e) {
                    u === l.$$currentValidationRunId && n(e)
                }
                this.$$currentValidationRunId++;
                var u = this.$$currentValidationRunId,
                    l = this;
                return r() && i() ? void a() : void c(!1)
            },
            $commitViewValue: function() {
                var e = this.$viewValue;
                this.$$timeout.cancel(this.$$pendingDebounce), (this.$$lastCommittedViewValue !== e || "" === e && this.$$hasNativeValidators) && (this.$$updateEmptyClasses(e), this.$$lastCommittedViewValue = e, this.$pristine && this.$setDirty(), this.$$parseAndValidate())
            },
            $$parseAndValidate: function() {
                function e() {
                    r.$modelValue !== o && r.$$writeModelToScope()
                }
                var t = this.$$lastCommittedViewValue,
                    n = t,
                    r = this;
                if (this.$$parserValid = !y(n) || void 0, this.$setValidity(this.$$parserName, null), this.$$parserName = "parse", this.$$parserValid)
                    for (var i = 0; i < this.$parsers.length; i++)
                        if (n = this.$parsers[i](n), y(n)) {
                            this.$$parserValid = !1;
                            break
                        } ki(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
                var o = this.$modelValue,
                    a = this.$options.getOption("allowInvalid");
                this.$$rawModelValue = n, a && (this.$modelValue = n, e()), this.$$runValidators(n, this.$$lastCommittedViewValue, function(t) {
                    a || (r.$modelValue = t ? n : void 0, e())
                })
            },
            $$writeModelToScope: function() {
                this.$$ngModelSet(this.$$scope, this.$modelValue), o(this.$viewChangeListeners, function(e) {
                    try {
                        e()
                    } catch (e) {
                        this.$$exceptionHandler(e)
                    }
                }, this)
            },
            $setViewValue: function(e, t) {
                this.$viewValue = e, this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(t)
            },
            $$debounceViewValueCommit: function(e) {
                var t = this.$options.getOption("debounce");
                k(t[e]) ? t = t[e] : k(t.default) && -1 === this.$options.getOption("updateOn").indexOf(e) ? t = t.default : k(t["*"]) && (t = t["*"]), this.$$timeout.cancel(this.$$pendingDebounce);
                var n = this;
                t > 0 ? this.$$pendingDebounce = this.$$timeout(function() {
                    n.$commitViewValue()
                }, t) : this.$$scope.$root.$$phase ? this.$commitViewValue() : this.$$scope.$apply(function() {
                    n.$commitViewValue()
                })
            },
            $overrideModelOptions: function(e) {
                this.$options = this.$options.createChild(e), this.$$setUpdateOnEvents()
            },
            $processModelValue: function() {
                var e = this.$$format();
                this.$viewValue !== e && (this.$$updateEmptyClasses(e), this.$viewValue = this.$$lastCommittedViewValue = e, this.$render(), this.$$runValidators(this.$modelValue, this.$viewValue, v))
            },
            $$format: function() {
                for (var e = this.$formatters, t = e.length, n = this.$modelValue; t--;) n = e[t](n);
                return n
            },
            $$setModelValue: function(e) {
                this.$modelValue = this.$$rawModelValue = e, this.$$parserValid = void 0, this.$processModelValue()
            },
            $$setUpdateOnEvents: function() {
                this.$$updateEvents && this.$$element.off(this.$$updateEvents, this.$$updateEventHandler), this.$$updateEvents = this.$options.getOption("updateOn"), this.$$updateEvents && this.$$element.on(this.$$updateEvents, this.$$updateEventHandler)
            },
            $$updateEventHandler: function(e) {
                this.$$debounceViewValueCommit(e && e.type)
            }
        }, Pr({
            clazz: ti,
            set: function(e, t) {
                e[t] = !0
            },
            unset: function(e, t) {
                delete e[t]
            }
        });
        var cs, us = ["$rootScope", function(e) {
                return {
                    restrict: "A",
                    require: ["ngModel", "^?form", "^?ngModelOptions"],
                    controller: ti,
                    priority: 1,
                    compile: function(t) {
                        return t.addClass(ts).addClass(rs).addClass(Xa), {
                            pre: function(e, t, n, r) {
                                var i = r[0],
                                    o = r[1] || i.$$parentForm,
                                    a = r[2];
                                a && (i.$options = a.$options), i.$$initGetterSetters(), o.$addControl(i), n.$observe("name", function(e) {
                                    i.$name !== e && i.$$parentForm.$$renameControl(i, e)
                                }), e.$on("$destroy", function() {
                                    i.$$parentForm.$removeControl(i)
                                })
                            },
                            post: function(t, n, r, i) {
                                function o() {
                                    a.$setTouched()
                                }
                                var a = i[0];
                                a.$$setUpdateOnEvents(), n.on("blur", function() {
                                    a.$touched || (e.$$phase ? t.$evalAsync(o) : t.$apply(o))
                                })
                            }
                        }
                    }
                }
            }],
            ls = /(\s+|^)default(\s+|$)/;
        ri.prototype = {
            getOption: function(e) {
                return this.$$options[e]
            },
            createChild: function(e) {
                var t = !1;
                return e = f({}, e), o(e, function(n, r) {
                    "$inherit" === n ? "*" === r ? t = !0 : (e[r] = this.$$options[r], "updateOn" === r && (e.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === r && (e.updateOnDefault = !1, e[r] = _i(n.replace(ls, function() {
                        return e.updateOnDefault = !0, " "
                    })))
                }, this), t && (delete e["*"], ii(e, this.$$options)), ii(e, cs.$$options), new ri(e)
            }
        }, cs = new ri({
            updateOn: "",
            updateOnDefault: !0,
            debounce: 0,
            getterSetter: !1,
            allowInvalid: !1,
            timezone: null
        });
        var fs = function() {
                function e(e, t) {
                    this.$$attrs = e, this.$$scope = t
                }
                return e.$inject = ["$attrs", "$scope"], e.prototype = {
                    $onInit: function() {
                        var e = this.parentCtrl ? this.parentCtrl.$options : cs,
                            t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                        this.$options = e.createChild(t)
                    }
                }, {
                    restrict: "A",
                    priority: 10,
                    require: {
                        parentCtrl: "?^^ngModelOptions"
                    },
                    bindToController: !0,
                    controller: e
                }
            },
            ps = Tr({
                terminal: !0,
                priority: 1e3
            }),
            ds = r("ngOptions"),
            hs = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
            vs = ["$compile", "$document", "$parse", function(t, n, r) {
                function a(e, t, n) {
                    function o(e, t, n, r, i) {
                        this.selectValue = e, this.viewValue = t, this.label = n, this.group = r, this.disabled = i
                    }

                    function a(e) {
                        var t;
                        if (!u && i(e)) t = e;
                        else {
                            t = [];
                            for (var n in e) e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n)
                        }
                        return t
                    }
                    var s = e.match(hs);
                    if (!s) throw ds("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", e, ne(t));
                    var c = s[5] || s[7],
                        u = s[6],
                        l = / as /.test(s[0]) && s[1],
                        f = s[9],
                        p = r(s[2] ? s[1] : c),
                        d = l && r(l),
                        h = d || p,
                        v = f && r(f),
                        g = f ? function(e, t) {
                            return v(n, t)
                        } : function(e) {
                            return ut(e)
                        },
                        m = function(e, t) {
                            return g(e, C(e, t))
                        },
                        $ = r(s[2] || s[1]),
                        y = r(s[3] || ""),
                        b = r(s[4] || ""),
                        w = r(s[8]),
                        S = {},
                        C = u ? function(e, t) {
                            return S[u] = t, S[c] = e, S
                        } : function(e) {
                            return S[c] = e, S
                        };
                    return {
                        trackBy: f,
                        getTrackByValue: m,
                        getWatchables: r(w, function(e) {
                            var t = [];
                            e = e || [];
                            for (var r = a(e), i = r.length, o = 0; o < i; o++) {
                                var c = e === r ? o : r[o],
                                    u = e[c],
                                    l = C(u, c),
                                    f = g(u, l);
                                if (t.push(f), s[2] || s[1]) {
                                    var p = $(n, l);
                                    t.push(p)
                                }
                                if (s[4]) {
                                    var d = b(n, l);
                                    t.push(d)
                                }
                            }
                            return t
                        }),
                        getOptions: function() {
                            for (var e = [], t = {}, r = w(n) || [], i = a(r), s = i.length, c = 0; c < s; c++) {
                                var u = r === i ? c : i[c],
                                    l = r[u],
                                    p = C(l, u),
                                    d = h(n, p),
                                    v = g(d, p),
                                    S = $(n, p),
                                    k = y(n, p),
                                    E = b(n, p),
                                    _ = new o(v, d, S, k, E);
                                e.push(_), t[v] = _
                            }
                            return {
                                items: e,
                                selectValueMap: t,
                                getOptionFromViewValue: function(e) {
                                    return t[m(e)]
                                },
                                getViewValueFromOption: function(e) {
                                    return f ? q(e.viewValue) : e.viewValue
                                }
                            }
                        }
                    }
                }

                function s(e, r, i, s) {
                    function l(e, t) {
                        var n = c.cloneNode(!1);
                        t.appendChild(n), p(e, n)
                    }

                    function f(e) {
                        var t = S.getOptionFromViewValue(e),
                            n = t && t.element;
                        return n && !n.selected && (n.selected = !0), t
                    }

                    function p(e, t) {
                        e.element = t, t.disabled = e.disabled, e.label !== t.label && (t.label = e.label, t.textContent = e.label), t.value = e.selectValue
                    }

                    function d() {
                        var e = S && h.readValue();
                        if (S)
                            for (var t = S.items.length - 1; t >= 0; t--) {
                                var n = S.items[t];
                                et(b(n.group) ? n.element.parentNode : n.element)
                            }
                        S = C.getOptions();
                        var i = {};
                        if (S.items.forEach(function(e) {
                                var t;
                                b(e.group) ? (t = i[e.group], t || (t = u.cloneNode(!1), k.appendChild(t), t.label = null === e.group ? "null" : e.group, i[e.group] = t), l(e, t)) : l(e, k)
                            }), r[0].appendChild(k), v.$render(), !v.$isEmpty(e)) {
                            var o = h.readValue();
                            (C.trackBy || g ? z(e, o) : e === o) || (v.$setViewValue(o), v.$render())
                        }
                    }
                    for (var h = s[0], v = s[1], g = i.multiple, m = 0, $ = r.children(), y = $.length; m < y; m++)
                        if ("" === $[m].value) {
                            h.hasEmptyOption = !0, h.emptyOption = $.eq(m);
                            break
                        } r.empty();
                    var w = !!h.emptyOption;
                    si(c.cloneNode(!1)).val("?");
                    var S, C = a(i.ngOptions, r, e),
                        k = n[0].createDocumentFragment();
                    h.generateUnknownOptionValue = function(e) {
                        return "?"
                    }, g ? (h.writeValue = function(e) {
                        if (S) {
                            var t = e && e.map(f) || [];
                            S.items.forEach(function(e) {
                                e.element.selected && !B(t, e) && (e.element.selected = !1)
                            })
                        }
                    }, h.readValue = function() {
                        var e = r.val() || [],
                            t = [];
                        return o(e, function(e) {
                            var n = S.selectValueMap[e];
                            n && !n.disabled && t.push(S.getViewValueFromOption(n))
                        }), t
                    }, C.trackBy && e.$watchCollection(function() {
                        if (_(v.$viewValue)) return v.$viewValue.map(function(e) {
                            return C.getTrackByValue(e)
                        })
                    }, function() {
                        v.$render()
                    })) : (h.writeValue = function(e) {
                        if (S) {
                            var t = r[0].options[r[0].selectedIndex],
                                n = S.getOptionFromViewValue(e);
                            t && t.removeAttribute("selected"), n ? (r[0].value !== n.selectValue && (h.removeUnknownOption(), r[0].value = n.selectValue, n.element.selected = !0), n.element.setAttribute("selected", "selected")) : h.selectUnknownOrEmptyOption(e)
                        }
                    }, h.readValue = function() {
                        var e = S.selectValueMap[r.val()];
                        return e && !e.disabled ? (h.unselectEmptyOption(), h.removeUnknownOption(), S.getViewValueFromOption(e)) : null
                    }, C.trackBy && e.$watch(function() {
                        return C.getTrackByValue(v.$viewValue)
                    }, function() {
                        v.$render()
                    })), w && (t(h.emptyOption)(e), r.prepend(h.emptyOption), h.emptyOption[0].nodeType === Ui ? (h.hasEmptyOption = !1, h.registerOption = function(e, t) {
                        "" === t.val() && (h.hasEmptyOption = !0, h.emptyOption = t, h.emptyOption.removeClass("ng-scope"), v.$render(), t.on("$destroy", function() {
                            var e = h.$isEmptyOptionSelected();
                            h.hasEmptyOption = !1, h.emptyOption = void 0, e && v.$render()
                        }))
                    }) : h.emptyOption.removeClass("ng-scope")), e.$watchCollection(C.getWatchables, d)
                }
                var c = e.document.createElement("option"),
                    u = e.document.createElement("optgroup");
                return {
                    restrict: "A",
                    terminal: !0,
                    require: ["select", "ngModel"],
                    link: {
                        pre: function(e, t, n, r) {
                            r[0].registerOption = v
                        },
                        post: s
                    }
                }
            }],
            gs = ["$locale", "$interpolate", "$log", function(e, t, n) {
                var r = /{}/g,
                    i = /^when(Minus)?(.+)$/;
                return {
                    link: function(a, s, c) {
                        function u(e) {
                            s.text(e || "")
                        }
                        var l, f = c.count,
                            p = c.$attr.when && s.attr(c.$attr.when),
                            d = c.offset || 0,
                            h = a.$eval(p) || {},
                            g = {},
                            m = t.startSymbol(),
                            $ = t.endSymbol(),
                            b = m + f + "-" + d + $,
                            w = Si.noop;
                        o(c, function(e, t) {
                            var n = i.exec(t);
                            if (n) {
                                var r = (n[1] ? "-" : "") + hi(n[2]);
                                h[r] = s.attr(c.$attr[t])
                            }
                        }), o(h, function(e, n) {
                            g[n] = t(e.replace(r, b))
                        }), a.$watch(f, function(t) {
                            var r = parseFloat(t),
                                i = ki(r);
                            if (i || r in h || (r = e.pluralCat(r - d)), !(r === l || i && ki(l))) {
                                w();
                                var o = g[r];
                                y(o) ? (null != t && n.debug("ngPluralize: no rule defined for '" + r + "' in " + p), w = v, u()) : w = a.$watch(o, u), l = r
                            }
                        })
                    }
                }
            }],
            ms = ["$parse", "$animate", "$compile", function(e, t, n) {
                var a = "$$NG_REMOVED",
                    s = r("ngRepeat"),
                    c = function(e, t, n, r, i, o, a) {
                        e[n] = r, i && (e[i] = o), e.$index = t, e.$first = 0 === t, e.$last = t === a - 1, e.$middle = !(e.$first || e.$last), e.$odd = !(e.$even = 0 == (1 & t))
                    },
                    u = function(e) {
                        return e.clone[0]
                    },
                    l = function(e) {
                        return e.clone[e.clone.length - 1]
                    };
                return {
                    restrict: "A",
                    multiElement: !0,
                    transclude: "element",
                    priority: 1e3,
                    terminal: !0,
                    $$tlb: !0,
                    compile: function(r, f) {
                        var p = f.ngRepeat,
                            d = n.$$createComment("end ngRepeat", p),
                            h = p.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                        if (!h) throw s("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", p);
                        var v = h[1],
                            g = h[2],
                            m = h[3],
                            $ = h[4];
                        if (!(h = v.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/))) throw s("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", v);
                        var y = h[3] || h[1],
                            b = h[2];
                        if (m && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m))) throw s("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", m);
                        var w, S, C, k, E = {
                            $id: ut
                        };
                        return $ ? w = e($) : (C = function(e, t) {
                                return ut(t)
                            }, k = function(e) {
                                return e
                            }),
                            function(e, n, r, f, h) {
                                w && (S = function(t, n, r) {
                                    return b && (E[b] = t), E[y] = n, E.$index = r, w(e, E)
                                });
                                var v = we();
                                e.$watchCollection(g, function(r) {
                                    var f, g, $, w, E, _, x, A, T, R, O, D, P = n[0],
                                        M = we();
                                    if (m && (e[m] = r), i(r)) T = r, A = S || C;
                                    else {
                                        A = S || k, T = [];
                                        for (var I in r) di.call(r, I) && "$" !== I.charAt(0) && T.push(I)
                                    }
                                    for (w = T.length, O = new Array(w), f = 0; f < w; f++)
                                        if (E = r === T ? f : T[f], _ = r[E], x = A(E, _, f), v[x]) R = v[x], delete v[x], M[x] = R, O[f] = R;
                                        else {
                                            if (M[x]) throw o(O, function(e) {
                                                e && e.scope && (v[e.id] = e)
                                            }), s("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", p, x, _);
                                            O[f] = {
                                                id: x,
                                                scope: void 0,
                                                clone: void 0
                                            }, M[x] = !0
                                        } for (var j in v) {
                                        if (R = v[j], D = be(R.clone), t.leave(D), D[0].parentNode)
                                            for (f = 0, g = D.length; f < g; f++) D[f][a] = !0;
                                        R.scope.$destroy()
                                    }
                                    for (f = 0; f < w; f++)
                                        if (E = r === T ? f : T[f], _ = r[E], R = O[f], R.scope) {
                                            $ = P;
                                            do {
                                                $ = $.nextSibling
                                            } while ($ && $[a]);
                                            u(R) !== $ && t.move(be(R.clone), null, P), P = l(R), c(R.scope, f, y, _, b, E, w)
                                        } else h(function(e, n) {
                                            R.scope = n;
                                            var r = d.cloneNode(!1);
                                            e[e.length++] = r, t.enter(e, null, P), P = r, R.clone = e, M[R.id] = R, c(R.scope, f, y, _, b, E, w)
                                        });
                                    v = M
                                })
                            }
                    }
                }
            }],
            $s = "ng-hide",
            ys = "ng-hide-animate",
            bs = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngShow, function(t) {
                            e[t ? "removeClass" : "addClass"](n, $s, {
                                tempClasses: ys
                            })
                        })
                    }
                }
            }],
            ws = ["$animate", function(e) {
                return {
                    restrict: "A",
                    multiElement: !0,
                    link: function(t, n, r) {
                        t.$watch(r.ngHide, function(t) {
                            e[t ? "addClass" : "removeClass"](n, $s, {
                                tempClasses: ys
                            })
                        })
                    }
                }
            }],
            Ss = Tr(function(e, t, n) {
                e.$watchCollection(n.ngStyle, function(e, n) {
                    n && e !== n && o(n, function(e, n) {
                        t.css(n, "")
                    }), e && t.css(e)
                })
            }),
            Cs = ["$animate", "$compile", function(e, t) {
                return {
                    require: "ngSwitch",
                    controller: ["$scope", function() {
                        this.cases = {}
                    }],
                    link: function(n, r, i, a) {
                        var s = i.ngSwitch || i.on,
                            c = [],
                            u = [],
                            l = [],
                            f = [],
                            p = function(e, t) {
                                return function(n) {
                                    !1 !== n && e.splice(t, 1)
                                }
                            };
                        n.$watch(s, function(n) {
                            for (var r, i; l.length;) e.cancel(l.pop());
                            for (r = 0, i = f.length; r < i; ++r) {
                                var s = be(u[r].clone);
                                f[r].$destroy();
                                (l[r] = e.leave(s)).done(p(l, r))
                            }
                            u.length = 0, f.length = 0, (c = a.cases["!" + n] || a.cases["?"]) && o(c, function(n) {
                                n.transclude(function(r, i) {
                                    f.push(i);
                                    var o = n.element;
                                    r[r.length++] = t.$$createComment("end ngSwitchWhen");
                                    var a = {
                                        clone: r
                                    };
                                    u.push(a), e.enter(r, o.parent(), o)
                                })
                            })
                        })
                    }
                }
            }],
            ks = Tr({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    o(n.ngSwitchWhen.split(n.ngSwitchWhenSeparator).sort().filter(function(e, t, n) {
                        return n[t - 1] !== e
                    }), function(e) {
                        r.cases["!" + e] = r.cases["!" + e] || [], r.cases["!" + e].push({
                            transclude: i,
                            element: t
                        })
                    })
                }
            }),
            Es = Tr({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(e, t, n, r, i) {
                    r.cases["?"] = r.cases["?"] || [], r.cases["?"].push({
                        transclude: i,
                        element: t
                    })
                }
            }),
            _s = r("ngTransclude"),
            xs = ["$compile", function(e) {
                return {
                    restrict: "EAC",
                    compile: function(t) {
                        var n = e(t.contents());
                        return t.empty(),
                            function(e, t, r, i, o) {
                                function a(e, n) {
                                    e.length && c(e) ? t.append(e) : (s(), n.$destroy())
                                }

                                function s() {
                                    n(e, function(e) {
                                        t.append(e)
                                    })
                                }

                                function c(e) {
                                    for (var t = 0, n = e.length; t < n; t++) {
                                        var r = e[t];
                                        if (r.nodeType !== Vi || r.nodeValue.trim()) return !0
                                    }
                                }
                                if (!o) throw _s("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", ne(t));
                                r.ngTransclude === r.$attr.ngTransclude && (r.ngTransclude = "");
                                var u = r.ngTransclude || r.ngTranscludeSlot;
                                o(a, null, u), u && !o.isSlotFilled(u) && s()
                            }
                    }
                }
            }],
            As = ["$templateCache", function(e) {
                return {
                    restrict: "E",
                    terminal: !0,
                    compile: function(t, n) {
                        if ("text/ng-template" === n.type) {
                            var r = n.id,
                                i = t[0].text;
                            e.put(r, i)
                        }
                    }
                }
            }],
            Ts = {
                $setViewValue: v,
                $render: v
            },
            Rs = ["$element", "$scope", function(t, n) {
                function r() {
                    s || (s = !0, n.$$postDigest(function() {
                        s = !1, o.ngModelCtrl.$render()
                    }))
                }

                function i(e) {
                    c || (c = !0, n.$$postDigest(function() {
                        n.$$destroyed || (c = !1, o.ngModelCtrl.$setViewValue(o.readValue()), e && o.ngModelCtrl.$render())
                    }))
                }
                var o = this,
                    a = new oo;
                o.selectValueMap = {}, o.ngModelCtrl = Ts, o.multiple = !1, o.unknownOption = si(e.document.createElement("option")), o.hasEmptyOption = !1, o.emptyOption = void 0, o.renderUnknownOption = function(e) {
                    var n = o.generateUnknownOptionValue(e);
                    o.unknownOption.val(n), t.prepend(o.unknownOption), oi(o.unknownOption, !0), t.val(n)
                }, o.updateUnknownOption = function(e) {
                    var n = o.generateUnknownOptionValue(e);
                    o.unknownOption.val(n), oi(o.unknownOption, !0), t.val(n)
                }, o.generateUnknownOptionValue = function(e) {
                    return "? " + ut(e) + " ?"
                }, o.removeUnknownOption = function() {
                    o.unknownOption.parent() && o.unknownOption.remove()
                }, o.selectEmptyOption = function() {
                    o.emptyOption && (t.val(""), oi(o.emptyOption, !0))
                }, o.unselectEmptyOption = function() {
                    o.hasEmptyOption && oi(o.emptyOption, !1)
                }, n.$on("$destroy", function() {
                    o.renderUnknownOption = v
                }), o.readValue = function() {
                    var e = t.val(),
                        n = e in o.selectValueMap ? o.selectValueMap[e] : e;
                    return o.hasOption(n) ? n : null
                }, o.writeValue = function(e) {
                    var n = t[0].options[t[0].selectedIndex];
                    if (n && oi(si(n), !1), o.hasOption(e)) {
                        o.removeUnknownOption();
                        var r = ut(e);
                        t.val(r in o.selectValueMap ? r : e);
                        var i = t[0].options[t[0].selectedIndex];
                        oi(si(i), !0)
                    } else o.selectUnknownOrEmptyOption(e)
                }, o.addOption = function(e, t) {
                    if (t[0].nodeType !== Ui) {
                        $e(e, '"option value"'), "" === e && (o.hasEmptyOption = !0, o.emptyOption = t);
                        var n = a.get(e) || 0;
                        a.set(e, n + 1), r()
                    }
                }, o.removeOption = function(e) {
                    var t = a.get(e);
                    t && (1 === t ? (a.delete(e), "" === e && (o.hasEmptyOption = !1, o.emptyOption = void 0)) : a.set(e, t - 1))
                }, o.hasOption = function(e) {
                    return !!a.get(e)
                }, o.$hasEmptyOption = function() {
                    return o.hasEmptyOption
                }, o.$isUnknownOptionSelected = function() {
                    return t[0].options[0] === o.unknownOption[0]
                }, o.$isEmptyOptionSelected = function() {
                    return o.hasEmptyOption && t[0].options[t[0].selectedIndex] === o.emptyOption[0]
                }, o.selectUnknownOrEmptyOption = function(e) {
                    null == e && o.emptyOption ? (o.removeUnknownOption(), o.selectEmptyOption()) : o.unknownOption.parent().length ? o.updateUnknownOption(e) : o.renderUnknownOption(e)
                };
                var s = !1,
                    c = !1;
                o.registerOption = function(e, t, n, a, s) {
                    if (n.$attr.ngValue) {
                        var c, u = NaN;
                        n.$observe("value", function(e) {
                            var n, r = t.prop("selected");
                            b(u) && (o.removeOption(c), delete o.selectValueMap[u], n = !0), u = ut(e), c = e, o.selectValueMap[u] = e, o.addOption(e, t), t.attr("value", u), n && r && i()
                        })
                    } else a ? n.$observe("value", function(e) {
                        o.readValue();
                        var n, r = t.prop("selected");
                        b(c) && (o.removeOption(c), n = !0), c = e, o.addOption(e, t), n && r && i()
                    }) : s ? e.$watch(s, function(e, r) {
                        n.$set("value", e);
                        var a = t.prop("selected");
                        r !== e && o.removeOption(r), o.addOption(e, t), r && a && i()
                    }) : o.addOption(n.value, t);
                    n.$observe("disabled", function(e) {
                        ("true" === e || e && t.prop("selected")) && (o.multiple ? i(!0) : (o.ngModelCtrl.$setViewValue(null), o.ngModelCtrl.$render()))
                    }), t.on("$destroy", function() {
                        var e = o.readValue(),
                            t = n.value;
                        o.removeOption(t), r(), (o.multiple && e && -1 !== e.indexOf(t) || e === t) && i(!0)
                    })
                }
            }],
            Os = function() {
                function e(e, t, n, r) {
                    var i = r[0],
                        a = r[1];
                    if (!a) return void(i.registerOption = v);
                    if (i.ngModelCtrl = a, t.on("change", function() {
                            i.removeUnknownOption(), e.$apply(function() {
                                a.$setViewValue(i.readValue())
                            })
                        }), n.multiple) {
                        i.multiple = !0, i.readValue = function() {
                            var e = [];
                            return o(t.find("option"), function(t) {
                                if (t.selected && !t.disabled) {
                                    var n = t.value;
                                    e.push(n in i.selectValueMap ? i.selectValueMap[n] : n)
                                }
                            }), e
                        }, i.writeValue = function(e) {
                            o(t.find("option"), function(t) {
                                var n = !!e && (B(e, t.value) || B(e, i.selectValueMap[t.value]));
                                n !== t.selected && oi(si(t), n)
                            })
                        };
                        var s, c = NaN;
                        e.$watch(function() {
                            c !== a.$viewValue || z(s, a.$viewValue) || (s = ke(a.$viewValue), a.$render()), c = a.$viewValue
                        }), a.$isEmpty = function(e) {
                            return !e || 0 === e.length
                        }
                    }
                }

                function t(e, t, n, r) {
                    var i = r[1];
                    if (i) {
                        var o = r[0];
                        i.$render = function() {
                            o.writeValue(i.$viewValue)
                        }
                    }
                }
                return {
                    restrict: "E",
                    require: ["select", "?ngModel"],
                    controller: Rs,
                    priority: 1,
                    link: {
                        pre: e,
                        post: t
                    }
                }
            },
            Ds = ["$interpolate", function(e) {
                return {
                    restrict: "E",
                    priority: 100,
                    compile: function(t, n) {
                        var r, i;
                        return b(n.ngValue) || (b(n.value) ? r = e(n.value, !0) : (i = e(t.text(), !0)) || n.$set("value", t.text())),
                            function(e, t, n) {
                                var o = "$selectController",
                                    a = t.parent(),
                                    s = a.data(o) || a.parent().data(o);
                                s && s.registerOption(e, t, n, r, i)
                            }
                    }
                }
            }],
            Ps = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        r && (n.required = !0, r.$validators.required = function(e, t) {
                            return !n.required || !r.$isEmpty(t)
                        }, n.$observe("required", function() {
                            r.$validate()
                        }))
                    }
                }
            },
            Ms = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, i) {
                        if (i) {
                            var o, a = n.ngPattern || n.pattern;
                            n.$observe("pattern", function(e) {
                                if (C(e) && e.length > 0 && (e = new RegExp("^" + e + "$")), e && !e.test) throw r("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", a, e, ne(t));
                                o = e || void 0, i.$validate()
                            }), i.$validators.pattern = function(e, t) {
                                return i.$isEmpty(t) || y(o) || o.test(t)
                            }
                        }
                    }
                }
            },
            Is = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = -1;
                            n.$observe("maxlength", function(e) {
                                var t = d(e);
                                i = ki(t) ? -1 : t, r.$validate()
                            }), r.$validators.maxlength = function(e, t) {
                                return i < 0 || r.$isEmpty(t) || t.length <= i
                            }
                        }
                    }
                }
            },
            js = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(e, t, n, r) {
                        if (r) {
                            var i = 0;
                            n.$observe("minlength", function(e) {
                                i = d(e) || 0, r.$validate()
                            }), r.$validators.minlength = function(e, t) {
                                return r.$isEmpty(t) || t.length >= i
                            }
                        }
                    }
                }
            };
        if (e.angular.bootstrap) return void(e.console && console.log("WARNING: Tried to load AngularJS more than once."));
        ve(), xe(Si), Si.module("ngLocale", [], ["$provide", function(e) {
            function t(e) {
                e += "";
                var t = e.indexOf(".");
                return -1 == t ? 0 : e.length - t - 1
            }

            function n(e, n) {
                var r = n;
                void 0 === r && (r = Math.min(t(e), 3));
                var i = Math.pow(10, r);
                return {
                    v: r,
                    f: (e * i | 0) % i
                }
            }
            var r = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other"
            };
            e.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    short: "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                },
                NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 2,
                        minFrac: 2,
                        minInt: 1,
                        negPre: "-Â¤",
                        negSuf: "",
                        posPre: "Â¤",
                        posSuf: ""
                    }]
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function(e, t) {
                    var i = 0 | e,
                        o = n(e, t);
                    return 1 == i && 0 == o.v ? r.ONE : r.OTHER
                }
            })
        }]), si(function() {
            le(e.document, fe)
        })
    }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>')
}, function(e, t) {
    e.exports = '<div id="assistant-floater" ng-show="authSession">\r\n    <div id="assistant-message" ng-show="isMessageVisible">\r\n        <assistant-header>Assistant</assistant-header>\r\n        <div class="icon-close" ng-click="assistant.hide()"></div>\r\n        <div class="assistant-message-wrapper" style="height:{{innerWindowHeight - 272}}px">\r\n            <assistant-message ng-show="messageVisible(\'intro.first_time\') && authSession.user.total_transfers() == 0">\r\n                <p>Hello <strong><span ng-bind="authSession.user.username"></span></strong></p>\r\n                <p>If this is your first time, you can follow the assistant-guided tour which will demonstrate how to use this demo.</p>\r\n                <p ng-show="confirmedAssistant">To start, click the <strong>Start Tutorial</strong> button below.</p>\r\n                <p ng-show="!confirmedAssistant">\r\n                    <button ng-click="assistant.confirmAssistant()" class="tutorial-cue">Ok, I understand</button>\r\n                </p>\r\n                <p ng-show="confirmedAssistant">\r\n                    <button ng-click="assistant.startTutorial()" class="tutorial-cue">Start Tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'intro.welcome_back\')">\r\n                <p>Welcome back, <span ng-bind="authSession.user.username"></span></p>\r\n                <p ng-show="authSession.user.total_transfers() < RATLimit">\r\n                    Maybe you should do the tutorial again? Let\'s do some more <strong>Transfers</strong> and I will unlock more use cases for you.\r\n                </p>\r\n                <p ng-show="authSession.user.total_transfers() < RATLimit">\r\n                    You can also play around and be notified once you\'ve unlocked more use cases.\r\n                </p>\r\n                <p ng-show="authSession.user.total_transfers() < RATLimit && authSession.user.total_transfers() > 3">\r\n                    You\'re almost there! Let\'s do some more transfers and credit card payments and I will unlock more use cases for you.\r\n                </p>\r\n                \x3c!-- completed, ready for use cases --\x3e\r\n                <div ng-show="authSession.user.transfers >= RATLimit">\r\n                    <p>\r\n                       \x3c!--  You\'ve completed the tutorial and is well-aware of this banking application now, press the <strong>Advanced Use Cases</strong> button to unlock the first use case. --\x3e\r\n                       You can use the buttons on the left on the Overview tab to launch your unlocked Use Cases.\r\n                    </p>\r\n                    \x3c!--\r\n                    <p ng-show="authSession.user.transfers >= RATLimit">\r\n                        <button ng-click="assistant.startAdvancedUseCases()" class="tutorial-cue">Advanced Use Cases</button>\r\n                    </p>\r\n                    --\x3e\r\n                    <p>\r\n                        Or you can do another run of the tutorial.\r\n                    </p>\r\n                    <p>\r\n                        <button ng-click="assistant.startTutorial()">Repeat Tutorial</button>\r\n                    </p>\r\n                </div>\r\n            </assistant-message>\r\n            \x3c!-- onboarding tutorial --\x3e\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.browse_to_accounts\')">\r\n                <p>\r\n                    Let\'s start by looking at your <strong>Checking Account</strong>.\r\n                </p>\r\n                <p>\r\n                    During the tutorial I will <span class="tutorial-line tutorial-cue">highlight</span> the next step.\r\n                </p>\r\n                <p>\r\n                    Now click the <strong>Accounts</strong> tab in the top navigation.\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account\')">\r\n                <p>In your account is a lot of money! Letâ€™s move some of that money to a higher yielding Savings Account. Begin the process by clicking the  <span class="tutorial-line tutorial-cue">Transfer</span> button that is highlighted for you.</p>\r\n            </assistant-message>\r\n            \x3c!-- transfer tutorial --\x3e\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.from_account\')">\r\n                <p>Click the <span class="tutorial-line tutorial-cue">From Account</span> field and select your <strong>Checking Account</strong></p>\r\n                <p ng-if="$state.current.name != \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.to_account\')">\r\n                <p>Click the <span class="tutorial-line tutorial-cue">To Account</span> field and select your <strong>Savings Account</strong></p>\r\n                <p ng-if="$state.current.name != \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.amount\')">\r\n                <p>I\'d suggest you transfer at least half of that pile to your <strong>Savings Account</strong> but feel free to go with another amount.</p>\r\n                <p>Please enter the amount you wish to transfer in the <span class="tutorial-line tutorial-cue">Amount field</span>.</p>\r\n                <p ng-if="$state.current.name != \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.date\')">\r\n                <p>Letâ€™s put that money to work today by entering <span ng-bind="currentDate.getTime() | date : \'MM/dd/yyyy\'"></span> into the <span class="tutorial-line tutorial-cue">Date</span> field.</p>\r\n                \r\n                <p ng-if="$state.current.name != \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.notes\')">\r\n                <p>In the <strong>Notes field</strong>, you can enter any description or note that corresponds to this transaction.<br />\r\n                For example: Transferred 8k for a new boat.</p>\r\n                <p ng-if="$state.current.name != \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.submit\')">\r\n                <p>Be sure to verify that all the information you entered is correct. Once you are satisfied, select the <span class="tutorial-line tutorial-cue">Confirm Transfer button.</span></p>\r\n                <p ng-if="$state.current.name != \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.transfer_from_checking_account.completed\')">\r\n                <p>\r\n                    Great job! Now that you have plenty of savings, maybe you should reward yourself with a new credit card? To apply for a new credit card, select the <span class="tutorial-line tutorial-cue">Credit Cards tab</span>.\r\n                </p>\r\n                <p>\r\n                    If not, you can always make another <strong>Transfer</strong>.\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.intro\')">\r\n                <p>Wow! You have a great credit score which allows you to receive the <strong>Viking Platinum</strong> card. If you do not wish to have so much credit, you can also apply for the <strong>Viking Basic</strong> card as well.<p>\r\n                <p>Simply click the corresponding button for the card of your choice to apply.</p>\r\n                \x3c!-- continue the tutorial --\x3e\r\n                <div ng-if="!$state.current.name.startsWith(\'creditcards\')">\r\n                    <button ng-click="$state.go(\'creditcards\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.select_card\')">\r\n                <p>Nice choice! Confirm your application by entering your  <span class="tutorial-line tutorial-cue">Username and Password</span> in the corresponding fields. Click <strong>Submit Application</strong> when finished.</p>\r\n                <div ng-if="!$state.current.name.startsWith(\'creditcards\')">\r\n                    <button ng-click="$state.go(\'creditcards\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.confirm\')">\r\n                <p>\r\n                    Nice job! It looks like your credit card application was approved right away!\r\n                </p>\r\n                <p>Now that you have a balance, maybe you should pay it off before you forget. You can start the process by clicking the <span class="tutorial-line tutorial-cue">Make payment button.</span></p>\r\n                <div ng-if="$state.current.name !== \'creditcards.details\'">\r\n                    <button ng-click="$state.go(\'creditcards.details\', {id: tutorialCreatedCreditCardId})">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.payment.account\')">\r\n                <p>Select which account you would like to pay from. You can select from either your <strong>Checking</strong> or <strong>Savings</strong> account.</p>\r\n                <div ng-if="$state.current.name !== \'creditcards.details\'">\r\n                    <button ng-click="$state.go(\'creditcards.details\', {id: tutorialCreatedCreditCardId})">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.payment.amount\')">\r\n                <p>\r\n                    Now that you have selected an account, entered an <strong>amount</strong> and a <strong>date</strong> for your payment. You can also enter a reason for the payment into the <strong>Notes section</strong>. Select <strong>Confirm</strong> when finished.\r\n                </p>\r\n                <div ng-if="$state.current.name !== \'creditcards.details\'">\r\n                    <button ng-click="$state.go(\'creditcards.details\', {id: tutorialCreatedCreditCardId})">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.payment.date\')">\r\n                <p>\r\n                    Select the <strong>date</strong> for when the payment should process. For example, you can enter a date in one or two weeks from today.\r\n                </p>\r\n                <div ng-if="$state.current.name !== \'creditcards.details\'">\r\n                    <button ng-click="$state.go(\'creditcards.details\', {id: tutorialCreatedCreditCardId})">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.payment.review\')">\r\n                <p>That should do it.</p>\r\n                \x3c!-- <p>Enter a note if you like and if you agree, do the usual swipe to confirm</p> --\x3e\r\n                <p>Enter a note if you like and if you agree, click <span class="tutorial-line tutorial-cue">Confirm Payment</span>.</p>\r\n                <div ng-if="$state.current.name !== \'creditcards.details\'">\r\n                    <button ng-click="$state.go(\'creditcards.details\', {id: tutorialCreatedCreditCardId})">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.payment.completed\') && authSession.user.transfers < 4">\r\n                <p>Great work! Now that you have completed the tutorial, you are free to practice some more transfers and credit card payments. The more you practice using these features, the more use cases you can unlock.</p>\r\n                <p>You can also repeat the tutorial again by selecting the <strong>Restart Tutorial button</strong>.</p>\r\n                <p ng-show="authSession.user.transfers < 4">\r\n                    Let\'s do some more transfers and credit card payments and you will unlock use cases along the way.\r\n                </p>\r\n                \x3c!--<p ng-show="authSession.user.total_transfers() >= 10 && authSession.user.transfers < 10">\r\n                    You\'re close to unlocking more use cases, please logout and login again to unlock.\r\n                </p>--\x3e\r\n                \x3c!--<p ng-show="authSession.user.total_transfers() >= 10 && authSession.user.transfers < 10">\r\n                    <button ng-click="$state.go(\'logout\')">Logout</button>\r\n                </p>--\x3e\r\n                <p>\r\n                    <button ng-click="assistant.startTutorial()">Restart Tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.onboarding.credit_card.payment.completed\') && authSession.user.transfers >= 4">\r\n                <p>\r\n                    Now that youâ€™re all set up we can look at some behavioral use cases.\r\n                </p>\r\n                \x3c!-- <button ng-click="assistant.startAdvancedUseCases()">Advanced Use Cases</button> --\x3e\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'remote\')" ng-show="authSession.user.transfers >= RATLimit">Start Remote Access scenario</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'bot\')" ng-show="authSession.user.transfers >= BotLimit">Start Bot Attack scenario</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'ato\')" ng-show="authSession.user.credentials >= ATOLimit">Start Account Takeover scenario</button>\r\n                </p>\r\n            </assistant-message>\r\n            \x3c!-- bot tutorial --\x3e\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_bot.intro\')">\r\n                \r\n                <p>This scenario will demonstrate what it looks like when your profile is attacked by a <strong>Bot</strong>.</p>\r\n                <p>We start by conducting a transaction.</p>\r\n                <p>Click the <span class="tutorial-line tutorial-cue">Transfer</span> link in the navigation.</p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_bot.transfer\')">\r\n                <p>This time you can move money between your accounts, such as between the <strong>Savings account</strong> back to your <strong>Checking Account</strong>.</p>\r\n                <div ng-if="$state.current.name !== \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_bot.transfer.completed\')">\r\n                <p>\r\n                    Transfer completed.    \r\n                </p>\r\n                <p>\r\n                    Let\'s go to the <span class="tutorial-line tutorial-cue">Transfer</span> page again to make a new transaction.\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_bot.transfer.attack\')">\r\n                <p>Great!</p>\r\n                <p>\r\n                    Now let\'s watch the <span class="emphasis">Bot</span> reverse the transaction and put the money back.\r\n                </p>\r\n                \x3c!-- bot runner button --\x3e\r\n                <div bot ng-show="$state.current.name == \'transfer\'"></div>\r\n                \r\n                <div ng-if="$state.current.name !== \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_bot.transfer.result\')">\r\n                <div ng-show="latestTransaction.isBot || latestTransaction.isRemoteAccess">\r\n                    <p>Here BehavioSense engine caught the bot.</p>\r\n                    <div class="flags-container">\r\n                    <div class="single-icon flag-icon red" ng-class="{\'red\': latestTransaction.isBot}">\r\n                        <span class="icn-bot-detection"></span><br>\r\n                        <div class="icon-caption">Bot detection</div>\r\n                    </div>\r\n                    </div>\r\n                    <label>Score</label><span class="score"> {{latestTransaction.score * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.score" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n\r\n                    <label>Risk</label> <span class="risk">{{latestTransaction.risk * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.risk" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n                    <hr style="clear:both; border:none">\r\n                    <span ng-show="latestTransaction.score <= 0.8 && latestTransaction.risk < 0.9">This transaction resulted in a low score, a typical indication that the usual person didn\'t made the transaction.</span>\r\n                    <span ng-show="latestTransaction.score > 0.8 && latestTransaction.risk >= 0.9">This transaction resulted in a high risk score</span>\r\n                </div>\r\n                <p>\r\n                    <button ng-click="assistant.moreDetails()">More details</button>\r\n                </p>\r\n                <p>\r\n                    For a more advanced view, you can view the session timeline in the <strong>BehavioSense Dashboard</strong>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.openDashboard()">Open BehavioSense Dashboard</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'bot\')">Restart Bot Scenario</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startTutorial()">Restart tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            \x3c!-- remote tutorial --\x3e\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.intro\')">\r\n                \x3c!-- <p>It\'s time to look at how behavioral biometrics can be used to stop advanced use cases. You unlock use cases continuously as we observe and learn more of your unique latestTransaction.</p> --\x3e\r\n                <p>This scenario will demonstrate what it can look like when your profile is attacked by a <strong>Remote session</strong>.</p>\r\n                <p>We start by conducting a transaction.</p>\r\n                <p>Click the <span class="tutorial-line tutorial-cue">Transfer</span> link in the navigation.</p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer\')">\r\n                <p>This time you can move money between your accounts, such as between the <strong>Savings account</strong> back to your <strong>Checking Account</strong>.</p>\r\n                <div ng-if="$state.current.name !== \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer.completed\')">\r\n                <p>\r\n                    Transfer completed.    \r\n                </p>\r\n                <p>\r\n                    Let\'s go to the <span class="tutorial-line tutorial-cue">Transfer</span> page again to make a new transaction.\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer.attack\')">\r\n                <p>Great!</p>\r\n                <p>\r\n                    Now let\'s watch <strong>Philip from BehavioSec</strong> reverse the transaction via a <span class="emphasis">Remote session</span> and put the money back.\r\n                </p>\r\n                \x3c!-- bot runner button --\x3e\r\n                <div remote ng-show="$state.current.name == \'transfer\'"></div>\r\n                \r\n                <div ng-if="$state.current.name !== \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer.result\')">\r\n                <div ng-show="latestTransaction.isBot || latestTransaction.isRemoteAccess">\r\n                    Here BehavioSense engine caught the remote session.\r\n                    <div class="flags-container">\r\n                    <div class="single-icon flag-icon red" ng-class="{\'red\': latestTransaction.isRemoteAccess}">\r\n                        <span class="icn-remote-access"></span><br>\r\n                        <div class="icon-caption">Remote Access</div>\r\n                    </div>\r\n                    </div>\r\n                    <label>Score</label><span class="score"> {{latestTransaction.score * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.score" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n\r\n                <label>Risk</label> <span class="risk">{{latestTransaction.risk * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.risk" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n                <hr style="clear:both; border:none">\r\n                <span ng-show="latestTransaction.score >= 0.8 && latestTransaction.risk < 0.9">This transaction resulted in a low score, a typical indication that the usual person didn\'t made the transaction.</span>\r\n                <span ng-show="latestTransaction.score > 0.8 && latestTransaction.risk >= 0.9">This transaction resulted in a high risk score</span>\r\n                </div>\r\n                <p>\r\n                    <button ng-click="assistant.moreDetails()">More details</button>\r\n                </p>\r\n                <p>\r\n                    For a more advanced view, you can view the session timeline in the <strong>BehavioSense Dashboard</strong>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.openDashboard()">Open BehavioSense Dashboard</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'remote\')">Restart Remote Attack Scenario</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startTutorial()">Restart tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            \x3c!-- ato tutorial --\x3e\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.intro\')">\r\n                <p>It\'s time to look at how behavioral biometrics can be used to stop advanced use cases. You unlock use cases continuously as we observe and learn more of your unique latestTransaction.</p>\r\n                <p>Let\'s start by looking at what it looks like when your profile is attacked by a <strong>Remote session</strong>.</p>\r\n                <p>We start by conducting a transaction, just like we did before.</p>\r\n                <p>Click the <span class="tutorial-line tutorial-cue">Transfer</span> link in the navigation.</p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer\')">\r\n                <p>This time you can move money between your accounts, such as between the <strong>Savings account</strong> back to your <strong>Checking Account</strong>.</p>\r\n                <div ng-if="$state.current.name !== \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer.completed\')">\r\n                <p>\r\n                    Transfer completed.    \r\n                </p>\r\n                <p>\r\n                    Let\'s go to the <span class="tutorial-line tutorial-cue">Transfer</span> page again to make a new transaction.\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer.attack\')">\r\n                <p>Great!</p>\r\n                <p>\r\n                    Now let\'s watch the <span class="emphasis">Remote session</span> reverse the transaction and put the money back.\r\n                </p>\r\n                \x3c!-- bot runner button --\x3e\r\n                <div remote ng-show="$state.current.name == \'transfer\'"></div>\r\n                \r\n                <div ng-if="$state.current.name !== \'transfer\'">\r\n                    <button ng-click="$state.go(\'transfer\')">Continue the tutorial</button>\r\n                </div>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_remote.transfer.result\')">\r\n                <div ng-show="latestTransaction.isBot || latestTransaction.isRemoteAccess">\r\n                    <p>\r\n                        Here BehavioSense engine caught the remote session.\r\n                    </p>\r\n                    <div class="flags-container">\r\n                    <div class="single-icon flag-icon red" ng-class="{\'red\': latestTransaction.isRemoteAccess}">\r\n                        <span class="icn-remote-access"></span><br>\r\n                        <div class="icon-caption">Remote Access</div>\r\n                    </div>\r\n                    </div>\r\n                    <label>Score</label><span class="score"> {{latestTransaction.score * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.score" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n\r\n                <label>Risk</label> <span class="risk">{{latestTransaction.risk * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.risk" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n                <hr style="clear:both; border:none">\r\n                <span ng-show="latestTransaction.score <= 0.8 && latestTransaction.risk < 0.9">This transaction resulted in a low score, a typical indication that the usual person didn\'t made the transaction.</span>\r\n                <span ng-show="latestTransaction.score > 0.8 && latestTransaction.risk >= 0.9">This transaction resulted in a high risk score</span>\r\n                </div>\r\n                <p>\r\n                    <button ng-click="assistant.moreDetails()">More details</button>\r\n                </p>\r\n                <p>\r\n                    For a more advanced view, you can view the session timeline in the <strong>BehavioSense Dashboard</strong>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.openDashboard()">Open BehavioSense Dashboard</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'remote\')">Restart Remote Attack Scenario</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startTutorial()">Restart tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_ato.intro\')">\r\n                <p>\r\n                    This scenario will demonstrate <strong>Account Takeover</strong> Fraud.\r\n                </p>\r\n                <p>\r\n                    Note the credentials with username <span class="emphasis" ng-bind="account_takeover.username"></span> and password <span class="emphasis" ng-bind="account_takeover.password"></span>.\r\n                </p>\r\n                <p>Use the provided credentials to login and see when BehavioSense detects that you\'re a fraudster accessing <span ng-bind="account_takeover.pronoun"></span> account.</p>\r\n                <p>\r\n                    You can also give away your credentials to a friend to test against your account.\r\n                </p>\r\n                <p>\r\n                    <button ui-sref="logout">Logout</button>\r\n                </p>\r\n            </assistant-message>\r\n            <assistant-message ng-show="messageVisible(\'tutorial.usecase_ato.attack\')">\r\n                <div ng-show="latestTransaction.score < 0.9">\r\n                    <p>Here BehavioSense engine caught the account takeover.</p>\r\n                    \x3c!--<div class="flags-container">\r\n                    <div class="single-icon flag-icon red" ng-class="{\'red\': latestTransaction.isRemoteAccess}">\r\n                        <span class="icn-remote-access"></span><br>\r\n                        <div class="icon-caption">Remote Access</div>\r\n                    </div>\r\n                    </div>--\x3e\r\n                    <label>Score</label><span class="score"> {{latestTransaction.score * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.score" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n    \r\n                    <label>Risk</label> <span class="risk">{{latestTransaction.risk * 100 | number : 2}}</span><span class="progress-arc"><progress-arc size="50" stroke="#389ac4" stroke-width="50" complete="latestTransaction.risk" background="#6eceed" counter-clockwise=""></progress-arc></span>\r\n                    <hr style="clear:both; border:none">\r\n                    <span ng-show="latestTransaction.score <= 0.8 && latestTransaction.risk < 0.9">This transaction resulted in a low score, a typical indication that the usual person didn\'t made the transaction.</span>\r\n                    <span ng-show="latestTransaction.score > 0.8 && latestTransaction.risk > 0.9">This transaction resulted in a high risk score</span>\r\n                </div>\r\n                <div ng-show="latestTransaction.score >= 0.9">\r\n                    Do you have a twin?\r\n                </div>\r\n                <p>\r\n                    <button ng-click="assistant.moreDetails()">More details</button>\r\n                </p>\r\n                <p>\r\n                    For a more advanced view, you can view the session timeline in the <strong>BehavioSense Dashboard</strong>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.openDashboard()">Open BehavioSense Dashboard</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startAdvancedUseCases(\'ato\')">Restart Account Takeover</button>\r\n                </p>\r\n                <p>\r\n                    <button ng-click="assistant.startTutorial()">Restart tutorial</button>\r\n                </p>\r\n            </assistant-message>\r\n            <input class="assistant-input" placeholder="<command>" spellcheck="false" autocorrect="off" autocomplete="off">\r\n    </div>\r\n    \r\n</div>\r\n<div id="assistant-icon" ng-click="assistant.toggle()"><div id="assistant-badge">1</div></div>\r\n\r\n'
}, function(e, t) {
    e.exports = '<div style="z-index: 3000;">\r\n    <div>\r\n        <button id="startBot" ng-click="$bot.run()" ng-class="{\'disabled\': bot.isRunning}" ng-disabled="remote.isRunning">Start Attack</button>\r\n        <div class="bot-attack-indicator" ng-show="bot.isRunning">Bot is running...</div>\r\n    </div>\r\n</div>\r\n'
}, function(e, t) {
    e.exports = '<div style="z-index: 3000;">\r\n    <div>\r\n        <button id="startBot" ng-click="$remote.run()" ng-class="{\'disabled\': remote.isRunning}" ng-disabled="remote.isRunning">Start Remote Session</button>\r\n        <div class="bot-attack-indicator" ng-show="remote.isRunning">Remote session in progress...</div>\r\n\r\n        \x3c!--<input id="amount" name="botField" placeholder="amount">\r\n\r\n        <input id="transfer_date" name="botField" placeholder="date">--\x3e\r\n    </div>\r\n</div>\r\n'
}, function(e, t) {
    /*!
     * ui-select
     * http://github.com/angular-ui/ui-select
     * Version: 0.19.8 - 2017-04-18T05:43:43.673Z
     * License: MIT
     */
    ! function() {
        "use strict";

        function e(e) {
            return angular.isUndefined(e) || null === e
        }
        var t = {
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            HOME: 36,
            END: 35,
            BACKSPACE: 8,
            DELETE: 46,
            COMMAND: 91,
            MAP: {
                91: "COMMAND",
                8: "BACKSPACE",
                9: "TAB",
                13: "ENTER",
                16: "SHIFT",
                17: "CTRL",
                18: "ALT",
                19: "PAUSEBREAK",
                20: "CAPSLOCK",
                27: "ESC",
                32: "SPACE",
                33: "PAGE_UP",
                34: "PAGE_DOWN",
                35: "END",
                36: "HOME",
                37: "LEFT",
                38: "UP",
                39: "RIGHT",
                40: "DOWN",
                43: "+",
                44: "PRINTSCREEN",
                45: "INSERT",
                46: "DELETE",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                61: "=",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NUMLOCK",
                145: "SCROLLLOCK",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            },
            isControl: function(e) {
                switch (e.which) {
                    case t.COMMAND:
                    case t.SHIFT:
                    case t.CTRL:
                    case t.ALT:
                        return !0
                }
                return !!(e.metaKey || e.ctrlKey || e.altKey)
            },
            isFunctionKey: function(e) {
                return (e = e.which ? e.which : e) >= 112 && e <= 123
            },
            isVerticalMovement: function(e) {
                return ~[t.UP, t.DOWN].indexOf(e)
            },
            isHorizontalMovement: function(e) {
                return ~[t.LEFT, t.RIGHT, t.BACKSPACE, t.DELETE].indexOf(e)
            },
            toSeparator: function(e) {
                var n = {
                    ENTER: "\n",
                    TAB: "\t",
                    SPACE: " "
                } [e];
                return n || (t[e] ? void 0 : e)
            }
        };
        void 0 === angular.element.prototype.querySelectorAll && (angular.element.prototype.querySelectorAll = function(e) {
            return angular.element(this[0].querySelectorAll(e))
        }), void 0 === angular.element.prototype.closest && (angular.element.prototype.closest = function(e) {
            for (var t = this[0], n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector; t;) {
                if (n.bind(t)(e)) return t;
                t = t.parentElement
            }
            return !1
        });
        var n = 0,
            r = angular.module("ui.select", []).constant("uiSelectConfig", {
                theme: "bootstrap",
                searchEnabled: !0,
                sortable: !1,
                placeholder: "",
                refreshDelay: 1e3,
                closeOnSelect: !0,
                skipFocusser: !1,
                dropdownPosition: "auto",
                removeSelected: !0,
                resetSearchInput: !0,
                generateId: function() {
                    return n++
                },
                appendToBody: !1,
                spinnerEnabled: !1,
                spinnerClass: "glyphicon glyphicon-refresh ui-select-spin",
                backspaceReset: !0
            }).service("uiSelectMinErr", function() {
                var e = angular.$$minErr("ui.select");
                return function() {
                    var t = e.apply(this, arguments),
                        n = t.message.replace(new RegExp("\nhttp://errors.angularjs.org/.*"), "");
                    return new Error(n)
                }
            }).directive("uisTranscludeAppend", function() {
                return {
                    link: function(e, t, n, r, i) {
                        i(e, function(e) {
                            t.append(e)
                        })
                    }
                }
            }).filter("highlight", function() {
                function e(e) {
                    return ("" + e).replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
                }
                return function(t, n) {
                    return n && t ? ("" + t).replace(new RegExp(e(n), "gi"), '<span class="ui-select-highlight">$&</span>') : t
                }
            }).factory("uisOffset", ["$document", "$window", function(e, t) {
                return function(n) {
                    var r = n[0].getBoundingClientRect();
                    return {
                        width: r.width || n.prop("offsetWidth"),
                        height: r.height || n.prop("offsetHeight"),
                        top: r.top + (t.pageYOffset || e[0].documentElement.scrollTop),
                        left: r.left + (t.pageXOffset || e[0].documentElement.scrollLeft)
                    }
                }
            }]);
        r.directive("uiSelectChoices", ["uiSelectConfig", "uisRepeatParser", "uiSelectMinErr", "$compile", "$window", function(e, t, n, r, i) {
            return {
                restrict: "EA",
                require: "^uiSelect",
                replace: !0,
                transclude: !0,
                templateUrl: function(t) {
                    return t.addClass("ui-select-choices"), (t.parent().attr("theme") || e.theme) + "/choices.tpl.html"
                },
                compile: function(r, o) {
                    if (!o.repeat) throw n("repeat", "Expected 'repeat' expression.");
                    var a = o.groupBy,
                        s = o.groupFilter;
                    if (a) {
                        var c = r.querySelectorAll(".ui-select-choices-group");
                        if (1 !== c.length) throw n("rows", "Expected 1 .ui-select-choices-group but got '{0}'.", c.length);
                        c.attr("ng-repeat", t.getGroupNgRepeatExpression())
                    }
                    var u = t.parse(o.repeat),
                        l = r.querySelectorAll(".ui-select-choices-row");
                    if (1 !== l.length) throw n("rows", "Expected 1 .ui-select-choices-row but got '{0}'.", l.length);
                    l.attr("ng-repeat", u.repeatExpression(a)).attr("ng-if", "$select.open");
                    var f = r.querySelectorAll(".ui-select-choices-row-inner");
                    if (1 !== f.length) throw n("rows", "Expected 1 .ui-select-choices-row-inner but got '{0}'.", f.length);
                    return f.attr("uis-transclude-append", ""), (i.document.addEventListener ? l : f).attr("ng-click", "$select.select(" + u.itemName + ",$select.skipFocusser,$event)"),
                        function(t, n, i, o) {
                            o.parseRepeatAttr(i.repeat, a, s), o.disableChoiceExpression = i.uiDisableChoice, o.onHighlightCallback = i.onHighlight, o.minimumInputLength = parseInt(i.minimumInputLength) || 0, o.dropdownPosition = i.position ? i.position.toLowerCase() : e.dropdownPosition, t.$watch("$select.search", function(e) {
                                e && !o.open && o.multiple && o.activate(!1, !0), o.activeIndex = o.tagging.isActivated ? -1 : 0, !i.minimumInputLength || o.search.length >= i.minimumInputLength ? o.refresh(i.refresh) : o.items = []
                            }), i.$observe("refreshDelay", function() {
                                var n = t.$eval(i.refreshDelay);
                                o.refreshDelay = void 0 !== n ? n : e.refreshDelay
                            }), t.$watch("$select.open", function(e) {
                                e ? (r.attr("role", "listbox"), o.refresh(i.refresh)) : n.removeAttr("role")
                            })
                        }
                }
            }
        }]), r.controller("uiSelectCtrl", ["$scope", "$element", "$timeout", "$filter", "$$uisDebounce", "uisRepeatParser", "uiSelectMinErr", "uiSelectConfig", "$parse", "$injector", "$window", function(n, r, i, o, a, s, c, u, l, f, p) {
            function d(e, t, n) {
                if (e.findIndex) return e.findIndex(t, n);
                for (var r, i = Object(e), o = i.length >>> 0, a = 0; a < o; a++)
                    if (r = i[a], t.call(n, r, a, i)) return a;
                return -1
            }

            function h() {
                w.resetSearchInput && (w.search = S, w.selected && w.items.length && !w.multiple && (w.activeIndex = d(w.items, function(e) {
                    return angular.equals(this, e)
                }, w.selected)))
            }

            function v(e, t) {
                var n, r, i = [];
                for (n = 0; n < t.length; n++)
                    for (r = 0; r < e.length; r++) e[r].name == [t[n]] && i.push(e[r]);
                return i
            }

            function g(e, t) {
                var n = E.indexOf(e);
                t && -1 === n && E.push(e), !t && n > -1 && E.splice(n, 1)
            }

            function m(e) {
                return E.indexOf(e) > -1
            }

            function $(e) {
                function t(e, t) {
                    var n = r.indexOf(e);
                    t && -1 === n && r.push(e), !t && n > -1 && r.splice(n, 1)
                }

                function n(e) {
                    return r.indexOf(e) > -1
                }
                if (e) {
                    var r = [];
                    w.isLocked = function(e, r) {
                        var i = !1,
                            o = w.selected[r];
                        return o && (e ? (i = !!e.$eval(w.lockChoiceExpression), t(o, i)) : i = n(o)), i
                    }
                }
            }

            function y(e) {
                var n = !0;
                switch (e) {
                    case t.DOWN:
                        if (!w.open && w.multiple) w.activate(!1, !0);
                        else if (w.activeIndex < w.items.length - 1)
                            for (var r = ++w.activeIndex; m(w.items[r]) && r < w.items.length;) w.activeIndex = ++r;
                        break;
                    case t.UP:
                        var i = 0 === w.search.length && w.tagging.isActivated ? -1 : 0;
                        if (!w.open && w.multiple) w.activate(!1, !0);
                        else if (w.activeIndex > i)
                            for (var o = --w.activeIndex; m(w.items[o]) && o > i;) w.activeIndex = --o;
                        break;
                    case t.TAB:
                        w.multiple && !w.open || w.select(w.items[w.activeIndex], !0);
                        break;
                    case t.ENTER:
                        w.open && (w.tagging.isActivated || w.activeIndex >= 0) ? w.select(w.items[w.activeIndex], w.skipFocusser) : w.activate(!1, !0);
                        break;
                    case t.ESC:
                        w.close();
                        break;
                    default:
                        n = !1
                }
                return n
            }

            function b() {
                var e = r.querySelectorAll(".ui-select-choices-content"),
                    t = e.querySelectorAll(".ui-select-choices-row");
                if (t.length < 1) throw c("choices", "Expected multiple .ui-select-choices-row but got '{0}'.", t.length);
                if (!(w.activeIndex < 0)) {
                    var n = t[w.activeIndex],
                        i = n.offsetTop + n.clientHeight - e[0].scrollTop,
                        o = e[0].offsetHeight;
                    i > o ? e[0].scrollTop += i - o : i < n.clientHeight && (w.isGrouped && 0 === w.activeIndex ? e[0].scrollTop = 0 : e[0].scrollTop -= n.clientHeight - i)
                }
            }
            var w = this,
                S = "";
            if (w.placeholder = u.placeholder, w.searchEnabled = u.searchEnabled, w.sortable = u.sortable, w.refreshDelay = u.refreshDelay, w.paste = u.paste, w.resetSearchInput = u.resetSearchInput, w.refreshing = !1, w.spinnerEnabled = u.spinnerEnabled, w.spinnerClass = u.spinnerClass, w.removeSelected = u.removeSelected, w.closeOnSelect = !0, w.skipFocusser = !1, w.search = S, w.activeIndex = 0, w.items = [], w.open = !1, w.focus = !1, w.disabled = !1, w.selected = void 0, w.dropdownPosition = "auto", w.focusser = void 0, w.multiple = void 0, w.disableChoiceExpression = void 0, w.tagging = {
                    isActivated: !1,
                    fct: void 0
                }, w.taggingTokens = {
                    isActivated: !1,
                    tokens: void 0
                }, w.lockChoiceExpression = void 0, w.clickTriggeredSelect = !1, w.$filter = o, w.$element = r, w.$animate = function() {
                    try {
                        return f.get("$animate")
                    } catch (e) {
                        return null
                    }
                }(), w.searchInput = r.querySelectorAll("input.ui-select-search"), 1 !== w.searchInput.length) throw c("searchInput", "Expected 1 input.ui-select-search but got '{0}'.", w.searchInput.length);
            w.isEmpty = function() {
                return e(w.selected) || "" === w.selected || w.multiple && 0 === w.selected.length
            }, w.activate = function(e, t) {
                if (w.disabled || w.open) w.open && !w.searchEnabled && w.close();
                else {
                    t || h(), n.$broadcast("uis:activate"), w.open = !0, w.activeIndex = w.activeIndex >= w.items.length ? 0 : w.activeIndex, -1 === w.activeIndex && !1 !== w.taggingLabel && (w.activeIndex = 0);
                    var o = r.querySelectorAll(".ui-select-choices-content"),
                        a = r.querySelectorAll(".ui-select-search");
                    if (w.$animate && w.$animate.on && w.$animate.enabled(o[0])) {
                        var s = function(t, n) {
                            "start" === n && 0 === w.items.length ? (w.$animate.off("removeClass", a[0], s), i(function() {
                                w.focusSearchInput(e)
                            })) : "close" === n && (w.$animate.off("enter", o[0], s), i(function() {
                                w.focusSearchInput(e)
                            }))
                        };
                        w.items.length > 0 ? w.$animate.on("enter", o[0], s) : w.$animate.on("removeClass", a[0], s)
                    } else i(function() {
                        w.focusSearchInput(e), !w.tagging.isActivated && w.items.length > 1 && b()
                    })
                }
            }, w.focusSearchInput = function(e) {
                w.search = e || w.search, w.searchInput[0].focus()
            }, w.findGroupByName = function(e) {
                return w.groups && w.groups.filter(function(t) {
                    return t.name === e
                })[0]
            }, w.parseRepeatAttr = function(e, t, r) {
                function i(e) {
                    var i = n.$eval(t);
                    if (w.groups = [], angular.forEach(e, function(e) {
                            var t = angular.isFunction(i) ? i(e) : e[i],
                                n = w.findGroupByName(t);
                            n ? n.items.push(e) : w.groups.push({
                                name: t,
                                items: [e]
                            })
                        }), r) {
                        var o = n.$eval(r);
                        angular.isFunction(o) ? w.groups = o(w.groups) : angular.isArray(o) && (w.groups = v(w.groups, o))
                    }
                    w.items = [], w.groups.forEach(function(e) {
                        w.items = w.items.concat(e.items)
                    })
                }

                function o(e) {
                    w.items = e || []
                }
                w.setItemsFn = t ? i : o, w.parserResult = s.parse(e), w.isGrouped = !!t, w.itemProperty = w.parserResult.itemName;
                var a = w.parserResult.source,
                    u = function() {
                        var e = a(n);
                        n.$uisSource = Object.keys(e).map(function(t) {
                            var n = {};
                            return n[w.parserResult.keyName] = t, n.value = e[t], n
                        })
                    };
                w.parserResult.keyName && (u(), w.parserResult.source = l("$uisSource" + w.parserResult.filters), n.$watch(a, function(e, t) {
                    e !== t && u()
                }, !0)), w.refreshItems = function(e) {
                    e = e || w.parserResult.source(n);
                    var t = w.selected;
                    if (w.isEmpty() || angular.isArray(t) && !t.length || !w.multiple || !w.removeSelected) w.setItemsFn(e);
                    else if (void 0 !== e && null !== e) {
                        var r = e.filter(function(e) {
                            return angular.isArray(t) ? t.every(function(t) {
                                return !angular.equals(e, t)
                            }) : !angular.equals(e, t)
                        });
                        w.setItemsFn(r)
                    }
                    "auto" !== w.dropdownPosition && "up" !== w.dropdownPosition || n.calculateDropdownPos(), n.$broadcast("uis:refresh")
                }, n.$watchCollection(w.parserResult.source, function(e) {
                    if (void 0 === e || null === e) w.items = [];
                    else {
                        if (!angular.isArray(e)) throw c("items", "Expected an array but got '{0}'.", e);
                        w.refreshItems(e), angular.isDefined(w.ngModel.$modelValue) && (w.ngModel.$modelValue = null)
                    }
                })
            };
            var C;
            w.refresh = function(e) {
                void 0 !== e && (C && i.cancel(C), C = i(function() {
                    if (n.$select.search.length >= n.$select.minimumInputLength) {
                        var t = n.$eval(e);
                        t && angular.isFunction(t.then) && !w.refreshing && (w.refreshing = !0, t.finally(function() {
                            w.refreshing = !1
                        }))
                    }
                }, w.refreshDelay))
            }, w.isActive = function(e) {
                if (!w.open) return !1;
                var t = w.items.indexOf(e[w.itemProperty]),
                    n = t == w.activeIndex;
                return !(!n || t < 0) && (n && !angular.isUndefined(w.onHighlightCallback) && e.$eval(w.onHighlightCallback), n)
            };
            var k = function(e) {
                    return w.selected && angular.isArray(w.selected) && w.selected.filter(function(t) {
                        return angular.equals(t, e)
                    }).length > 0
                },
                E = [];
            w.isDisabled = function(e) {
                if (w.open) {
                    var t = e[w.itemProperty],
                        n = w.items.indexOf(t),
                        r = !1;
                    if (n >= 0 && (angular.isDefined(w.disableChoiceExpression) || w.multiple)) {
                        if (t.isTag) return !1;
                        w.multiple && (r = k(t)), !r && angular.isDefined(w.disableChoiceExpression) && (r = !!e.$eval(w.disableChoiceExpression)), g(t, r)
                    }
                    return r
                }
            }, w.select = function(t, r, i) {
                if (e(t) || !m(t)) {
                    if (!w.items && !w.search && !w.tagging.isActivated) return;
                    if (!t || !m(t)) {
                        if (w.clickTriggeredSelect = !1, i && ("click" === i.type || "touchend" === i.type) && t && (w.clickTriggeredSelect = !0), w.tagging.isActivated && !1 === w.clickTriggeredSelect) {
                            if (!1 === w.taggingLabel)
                                if (w.activeIndex < 0) {
                                    if (void 0 === t && (t = void 0 !== w.tagging.fct ? w.tagging.fct(w.search) : w.search), !t || angular.equals(w.items[0], t)) return
                                } else t = w.items[w.activeIndex];
                            else if (0 === w.activeIndex) {
                                if (void 0 === t) return;
                                if (void 0 !== w.tagging.fct && "string" == typeof t) {
                                    if (!(t = w.tagging.fct(t))) return
                                } else "string" == typeof t && (t = t.replace(w.taggingLabel, "").trim())
                            }
                            if (k(t)) return void w.close(r)
                        }
                        h(), n.$broadcast("uis:select", t), w.closeOnSelect && w.close(r)
                    }
                }
            }, w.close = function(e) {
                w.open && (w.ngModel && w.ngModel.$setTouched && w.ngModel.$setTouched(), w.open = !1, h(), n.$broadcast("uis:close", e))
            }, w.setFocus = function() {
                w.focus || w.focusInput[0].focus()
            }, w.clear = function(e) {
                w.select(null), e.stopPropagation(), i(function() {
                    w.focusser[0].focus()
                }, 0, !1)
            }, w.toggle = function(e) {
                w.open ? (w.close(), e.preventDefault(), e.stopPropagation()) : w.activate()
            }, w.isLocked = function() {
                return !1
            }, n.$watch(function() {
                return angular.isDefined(w.lockChoiceExpression) && "" !== w.lockChoiceExpression
            }, $);
            var _ = null,
                x = !1;
            w.sizeSearchInput = function() {
                var e = w.searchInput[0],
                    t = w.$element[0],
                    r = function() {
                        return t.clientWidth * !!e.offsetParent
                    },
                    o = function(t) {
                        if (0 === t) return !1;
                        var n = t - e.offsetLeft;
                        return n < 50 && (n = t), w.searchInput.css("width", n + "px"), !0
                    };
                w.searchInput.css("width", "10px"), i(function() {
                    null !== _ || o(r()) || (_ = n.$watch(function() {
                        x || (x = !0, n.$$postDigest(function() {
                            x = !1, o(r()) && (_(), _ = null)
                        }))
                    }, angular.noop))
                })
            }, w.searchInput.on("keydown", function(e) {
                var r = e.which;
                ~[t.ENTER, t.ESC].indexOf(r) && (e.preventDefault(), e.stopPropagation()), n.$apply(function() {
                    var n = !1;
                    if ((w.items.length > 0 || w.tagging.isActivated) && (y(r) || w.searchEnabled || (e.preventDefault(), e.stopPropagation()), w.taggingTokens.isActivated)) {
                        for (var o = 0; o < w.taggingTokens.tokens.length; o++) w.taggingTokens.tokens[o] === t.MAP[e.keyCode] && w.search.length > 0 && (n = !0);
                        n && i(function() {
                            w.searchInput.triggerHandler("tagged");
                            var n = w.search.replace(t.MAP[e.keyCode], "").trim();
                            w.tagging.fct && (n = w.tagging.fct(n)), n && w.select(n, !0)
                        })
                    }
                }), t.isVerticalMovement(r) && w.items.length > 0 && b(), r !== t.ENTER && r !== t.ESC || (e.preventDefault(), e.stopPropagation())
            }), w.searchInput.on("paste", function(e) {
                var n;
                if (n = window.clipboardData && window.clipboardData.getData ? window.clipboardData.getData("Text") : (e.originalEvent || e).clipboardData.getData("text/plain"), (n = w.search + n) && n.length > 0)
                    if (w.taggingTokens.isActivated) {
                        for (var r = [], i = 0; i < w.taggingTokens.tokens.length; i++) {
                            var o = t.toSeparator(w.taggingTokens.tokens[i]) || w.taggingTokens.tokens[i];
                            if (n.indexOf(o) > -1) {
                                r = n.split(o);
                                break
                            }
                        }
                        0 === r.length && (r = [n]);
                        var a = w.search;
                        angular.forEach(r, function(e) {
                            var t = w.tagging.fct ? w.tagging.fct(e) : e;
                            t && w.select(t, !0)
                        }), w.search = a || S, e.preventDefault(), e.stopPropagation()
                    } else w.paste && (w.paste(n), w.search = S, e.preventDefault(), e.stopPropagation())
            }), w.searchInput.on("tagged", function() {
                i(function() {
                    h()
                })
            });
            var A = a(function() {
                w.sizeSearchInput()
            }, 50);
            angular.element(p).bind("resize", A), n.$on("$destroy", function() {
                w.searchInput.off("keyup keydown tagged blur paste"), angular.element(p).off("resize", A)
            }), n.$watch("$select.activeIndex", function(e) {
                e && r.find("input").attr("aria-activedescendant", "ui-select-choices-row-" + w.generatedId + "-" + e)
            }), n.$watch("$select.open", function(e) {
                e || r.find("input").removeAttr("aria-activedescendant")
            })
        }]), r.directive("uiSelect", ["$document", "uiSelectConfig", "uiSelectMinErr", "uisOffset", "$compile", "$parse", "$timeout", function(e, t, n, r, i, o, a) {
            return {
                restrict: "EA",
                templateUrl: function(e, n) {
                    return (n.theme || t.theme) + (angular.isDefined(n.multiple) ? "/select-multiple.tpl.html" : "/select.tpl.html")
                },
                replace: !0,
                transclude: !0,
                require: ["uiSelect", "^ngModel"],
                scope: !0,
                controller: "uiSelectCtrl",
                controllerAs: "$select",
                compile: function(i, s) {
                    var c = /{(.*)}\s*{(.*)}/.exec(s.ngClass);
                    if (c) {
                        var u = "{" + c[1] + ", " + c[2] + "}";
                        s.ngClass = u, i.attr("ng-class", u)
                    }
                    return angular.isDefined(s.multiple) ? i.append("<ui-select-multiple/>").removeAttr("multiple") : i.append("<ui-select-single/>"), s.inputId && (i.querySelectorAll("input.ui-select-search")[0].id = s.inputId),
                        function(i, s, c, u, l) {
                            function f(e) {
                                if (h.open) {
                                    if (!(window.jQuery ? window.jQuery.contains(s[0], e.target) : s[0].contains(e.target)) && !h.clickTriggeredSelect) {
                                        var t;
                                        if (h.skipFocusser) t = !0;
                                        else {
                                            var n = ["input", "button", "textarea", "select"],
                                                r = angular.element(e.target).controller("uiSelect");
                                            t = r && r !== h, t || (t = ~n.indexOf(e.target.tagName.toLowerCase()))
                                        }
                                        h.close(t), i.$digest()
                                    }
                                    h.clickTriggeredSelect = !1
                                }
                            }

                            function p() {
                                var t = r(s);
                                m = angular.element('<div class="ui-select-placeholder"></div>'), m[0].style.width = t.width + "px", m[0].style.height = t.height + "px", s.after(m), $ = s[0].style.width, e.find("body").append(s), s[0].style.position = "absolute", s[0].style.left = t.left + "px", s[0].style.top = t.top + "px", s[0].style.width = t.width + "px"
                            }

                            function d() {
                                null !== m && (m.replaceWith(s), m = null, s[0].style.position = "", s[0].style.left = "", s[0].style.top = "", s[0].style.width = $, h.setFocus())
                            }
                            var h = u[0],
                                v = u[1];
                            h.generatedId = t.generateId(), h.baseTitle = c.title || "Select box", h.focusserTitle = h.baseTitle + " focus", h.focusserId = "focusser-" + h.generatedId, h.closeOnSelect = function() {
                                return angular.isDefined(c.closeOnSelect) ? o(c.closeOnSelect)() : t.closeOnSelect
                            }(), i.$watch("skipFocusser", function() {
                                var e = i.$eval(c.skipFocusser);
                                h.skipFocusser = void 0 !== e ? e : t.skipFocusser
                            }), h.onSelectCallback = o(c.onSelect), h.onRemoveCallback = o(c.onRemove), h.ngModel = v, h.choiceGrouped = function(e) {
                                return h.isGrouped && e && e.name
                            }, c.tabindex && c.$observe("tabindex", function(e) {
                                h.focusInput.attr("tabindex", e), s.removeAttr("tabindex")
                            }), i.$watch(function() {
                                return i.$eval(c.searchEnabled)
                            }, function(e) {
                                h.searchEnabled = void 0 !== e ? e : t.searchEnabled
                            }), i.$watch("sortable", function() {
                                var e = i.$eval(c.sortable);
                                h.sortable = void 0 !== e ? e : t.sortable
                            }), c.$observe("backspaceReset", function() {
                                var e = i.$eval(c.backspaceReset);
                                h.backspaceReset = void 0 === e || e
                            }), c.$observe("limit", function() {
                                h.limit = angular.isDefined(c.limit) ? parseInt(c.limit, 10) : void 0
                            }), i.$watch("removeSelected", function() {
                                var e = i.$eval(c.removeSelected);
                                h.removeSelected = void 0 !== e ? e : t.removeSelected
                            }), c.$observe("disabled", function() {
                                h.disabled = void 0 !== c.disabled && c.disabled
                            }), c.$observe("resetSearchInput", function() {
                                var e = i.$eval(c.resetSearchInput);
                                h.resetSearchInput = void 0 === e || e
                            }), c.$observe("paste", function() {
                                h.paste = i.$eval(c.paste)
                            }), c.$observe("tagging", function() {
                                if (void 0 !== c.tagging) {
                                    var e = i.$eval(c.tagging);
                                    h.tagging = {
                                        isActivated: !0,
                                        fct: !0 !== e ? e : void 0
                                    }
                                } else h.tagging = {
                                    isActivated: !1,
                                    fct: void 0
                                }
                            }), c.$observe("taggingLabel", function() {
                                void 0 !== c.tagging && ("false" === c.taggingLabel ? h.taggingLabel = !1 : h.taggingLabel = void 0 !== c.taggingLabel ? c.taggingLabel : "(new)")
                            }), c.$observe("taggingTokens", function() {
                                if (void 0 !== c.tagging) {
                                    var e = void 0 !== c.taggingTokens ? c.taggingTokens.split("|") : [",", "ENTER"];
                                    h.taggingTokens = {
                                        isActivated: !0,
                                        tokens: e
                                    }
                                }
                            }), c.$observe("spinnerEnabled", function() {
                                var e = i.$eval(c.spinnerEnabled);
                                h.spinnerEnabled = void 0 !== e ? e : t.spinnerEnabled
                            }), c.$observe("spinnerClass", function() {
                                var e = c.spinnerClass;
                                h.spinnerClass = void 0 !== e ? c.spinnerClass : t.spinnerClass
                            }), angular.isDefined(c.autofocus) && a(function() {
                                h.setFocus()
                            }), angular.isDefined(c.focusOn) && i.$on(c.focusOn, function() {
                                a(function() {
                                    h.setFocus()
                                })
                            }), e.on("click", f), i.$on("$destroy", function() {
                                e.off("click", f)
                            }), l(i, function(e) {
                                var t = angular.element("<div>").append(e),
                                    r = t.querySelectorAll(".ui-select-match");
                                if (r.removeAttr("ui-select-match"), r.removeAttr("data-ui-select-match"), 1 !== r.length) throw n("transcluded", "Expected 1 .ui-select-match but got '{0}'.", r.length);
                                s.querySelectorAll(".ui-select-match").replaceWith(r);
                                var i = t.querySelectorAll(".ui-select-choices");
                                if (i.removeAttr("ui-select-choices"), i.removeAttr("data-ui-select-choices"), 1 !== i.length) throw n("transcluded", "Expected 1 .ui-select-choices but got '{0}'.", i.length);
                                s.querySelectorAll(".ui-select-choices").replaceWith(i);
                                var o = t.querySelectorAll(".ui-select-no-choice");
                                o.removeAttr("ui-select-no-choice"), o.removeAttr("data-ui-select-no-choice"), 1 == o.length && s.querySelectorAll(".ui-select-no-choice").replaceWith(o)
                            });
                            var g = i.$eval(c.appendToBody);
                            (void 0 !== g ? g : t.appendToBody) && (i.$watch("$select.open", function(e) {
                                e ? p() : d()
                            }), i.$on("$destroy", function() {
                                d()
                            }));
                            var m = null,
                                $ = "",
                                y = null,
                                b = "direction-up";
                            i.$watch("$select.open", function() {
                                "auto" !== h.dropdownPosition && "up" !== h.dropdownPosition || i.calculateDropdownPos()
                            });
                            var w = function(e, t) {
                                    e = e || r(s), t = t || r(y), y[0].style.position = "absolute", y[0].style.top = -1 * t.height + "px", s.addClass(b)
                                },
                                S = function(e, t) {
                                    s.removeClass(b), e = e || r(s), t = t || r(y), y[0].style.position = "", y[0].style.top = ""
                                },
                                C = function() {
                                    a(function() {
                                        if ("up" === h.dropdownPosition) w();
                                        else {
                                            s.removeClass(b);
                                            var t = r(s),
                                                n = r(y),
                                                i = e[0].documentElement.scrollTop || e[0].body.scrollTop;
                                            t.top + t.height + n.height > i + e[0].documentElement.clientHeight ? w(t, n) : S(t, n)
                                        }
                                        y[0].style.opacity = 1
                                    })
                                },
                                k = !1;
                            i.calculateDropdownPos = function() {
                                if (h.open) {
                                    if (y = angular.element(s).querySelectorAll(".ui-select-dropdown"), 0 === y.length) return;
                                    if ("" !== h.search || k || (y[0].style.opacity = 0, k = !0), !r(y).height && h.$animate && h.$animate.on && h.$animate.enabled(y)) {
                                        var e = !0;
                                        h.$animate.on("enter", y, function(t, n) {
                                            "close" === n && e && (C(), e = !1)
                                        })
                                    } else C()
                                } else {
                                    if (null === y || 0 === y.length) return;
                                    y[0].style.opacity = 0, y[0].style.position = "", y[0].style.top = "", s.removeClass(b)
                                }
                            }
                        }
                }
            }
        }]), r.directive("uiSelectMatch", ["uiSelectConfig", function(e) {
            function t(e, t) {
                return e[0].hasAttribute(t) ? e.attr(t) : e[0].hasAttribute("data-" + t) ? e.attr("data-" + t) : e[0].hasAttribute("x-" + t) ? e.attr("x-" + t) : void 0
            }
            return {
                restrict: "EA",
                require: "^uiSelect",
                replace: !0,
                transclude: !0,
                templateUrl: function(n) {
                    n.addClass("ui-select-match");
                    var r = n.parent();
                    return (t(r, "theme") || e.theme) + (angular.isDefined(t(r, "multiple")) ? "/match-multiple.tpl.html" : "/match.tpl.html")
                },
                link: function(t, n, r, i) {
                    function o(e) {
                        i.allowClear = !!angular.isDefined(e) && ("" === e || "true" === e.toLowerCase())
                    }
                    i.lockChoiceExpression = r.uiLockChoice, r.$observe("placeholder", function(t) {
                        i.placeholder = void 0 !== t ? t : e.placeholder
                    }), r.$observe("allowClear", o), o(r.allowClear), i.multiple && i.sizeSearchInput()
                }
            }
        }]), r.directive("uiSelectMultiple", ["uiSelectMinErr", "$timeout", function(n, r) {
            return {
                restrict: "EA",
                require: ["^uiSelect", "^ngModel"],
                controller: ["$scope", "$timeout", function(e, t) {
                    var n, r = this,
                        i = e.$select;
                    angular.isUndefined(i.selected) && (i.selected = []), e.$evalAsync(function() {
                        n = e.ngModel
                    }), r.activeMatchIndex = -1, r.updateModel = function() {
                        n.$setViewValue(Date.now()), r.refreshComponent()
                    }, r.refreshComponent = function() {
                        i.refreshItems && i.refreshItems(), i.sizeSearchInput && i.sizeSearchInput()
                    }, r.removeChoice = function(n) {
                        if (i.isLocked(null, n)) return !1;
                        var o = i.selected[n],
                            a = {};
                        return a[i.parserResult.itemName] = o, i.selected.splice(n, 1), r.activeMatchIndex = -1, i.sizeSearchInput(), t(function() {
                            i.onRemoveCallback(e, {
                                $item: o,
                                $model: i.parserResult.modelMapper(e, a)
                            })
                        }), r.updateModel(), !0
                    }, r.getPlaceholder = function() {
                        if (!i.selected || !i.selected.length) return i.placeholder
                    }
                }],
                controllerAs: "$selectMultiple",
                link: function(i, o, a, s) {
                    function c(e) {
                        return angular.isNumber(e.selectionStart) ? e.selectionStart : e.value.length
                    }

                    function u(e) {
                        function n() {
                            switch (e) {
                                case t.LEFT:
                                    return ~h.activeMatchIndex ? u : o;
                                case t.RIGHT:
                                    return ~h.activeMatchIndex && a !== o ? s : (p.activate(), !1);
                                case t.BACKSPACE:
                                    return ~h.activeMatchIndex ? h.removeChoice(a) ? u : a : o;
                                case t.DELETE:
                                    return !!~h.activeMatchIndex && (h.removeChoice(h.activeMatchIndex), a)
                            }
                        }
                        var r = c(p.searchInput[0]),
                            i = p.selected.length,
                            o = i - 1,
                            a = h.activeMatchIndex,
                            s = h.activeMatchIndex + 1,
                            u = h.activeMatchIndex - 1,
                            l = a;
                        return !(r > 0 || p.search.length && e == t.RIGHT || (p.close(), l = n(), p.selected.length && !1 !== l ? h.activeMatchIndex = Math.min(o, Math.max(0, l)) : h.activeMatchIndex = -1, 0))
                    }

                    function l(e) {
                        return void 0 !== e && void 0 !== p.search && e.filter(function(e) {
                            return void 0 !== p.search.toUpperCase() && void 0 !== e && e.toUpperCase() === p.search.toUpperCase()
                        }).length > 0
                    }

                    function f(e, t) {
                        var n = -1;
                        if (angular.isArray(e))
                            for (var r = angular.copy(e), i = 0; i < r.length; i++)
                                if (void 0 === p.tagging.fct) r[i] + " " + p.taggingLabel === t && (n = i);
                                else {
                                    var o = r[i];
                                    angular.isObject(o) && (o.isTag = !0), angular.equals(o, t) && (n = i)
                                } return n
                    }
                    var p = s[0],
                        d = i.ngModel = s[1],
                        h = i.$selectMultiple;
                    p.multiple = !0, p.focusInput = p.searchInput, d.$isEmpty = function(e) {
                        return !e || 0 === e.length
                    }, d.$parsers.unshift(function() {
                        for (var e, t = {}, n = [], r = p.selected.length - 1; r >= 0; r--) t = {}, t[p.parserResult.itemName] = p.selected[r], e = p.parserResult.modelMapper(i, t), n.unshift(e);
                        return n
                    }), d.$formatters.unshift(function(e) {
                        var t, n = p.parserResult && p.parserResult.source(i, {
                                $select: {
                                    search: ""
                                }
                            }),
                            r = {};
                        if (!n) return e;
                        var o = [],
                            a = function(e, n) {
                                if (e && e.length) {
                                    for (var a = e.length - 1; a >= 0; a--) {
                                        if (r[p.parserResult.itemName] = e[a], t = p.parserResult.modelMapper(i, r), p.parserResult.trackByExp) {
                                            var s = /(\w*)\./.exec(p.parserResult.trackByExp),
                                                c = /\.([^\s]+)/.exec(p.parserResult.trackByExp);
                                            if (s && s.length > 0 && s[1] == p.parserResult.itemName && c && c.length > 0 && t[c[1]] == n[c[1]]) return o.unshift(e[a]), !0
                                        }
                                        if (angular.equals(t, n)) return o.unshift(e[a]), !0
                                    }
                                    return !1
                                }
                            };
                        if (!e) return o;
                        for (var s = e.length - 1; s >= 0; s--) a(p.selected, e[s]) || a(n, e[s]) || o.unshift(e[s]);
                        return o
                    }), i.$watchCollection(function() {
                        return d.$modelValue
                    }, function(e, t) {
                        t != e && (angular.isDefined(d.$modelValue) && (d.$modelValue = null), h.refreshComponent())
                    }), d.$render = function() {
                        if (!angular.isArray(d.$viewValue)) {
                            if (!e(d.$viewValue)) throw n("multiarr", "Expected model value to be array but got '{0}'", d.$viewValue);
                            d.$viewValue = []
                        }
                        p.selected = d.$viewValue, h.refreshComponent(), i.$evalAsync()
                    }, i.$on("uis:select", function(e, t) {
                        if (!(p.selected.length >= p.limit)) {
                            p.selected.push(t);
                            var n = {};
                            n[p.parserResult.itemName] = t, r(function() {
                                p.onSelectCallback(i, {
                                    $item: t,
                                    $model: p.parserResult.modelMapper(i, n)
                                })
                            }), h.updateModel()
                        }
                    }), i.$on("uis:activate", function() {
                        h.activeMatchIndex = -1
                    }), i.$watch("$select.disabled", function(e, t) {
                        t && !e && p.sizeSearchInput()
                    }), p.searchInput.on("keydown", function(e) {
                        var n = e.which;
                        i.$apply(function() {
                            var r = !1;
                            t.isHorizontalMovement(n) && (r = u(n)), r && n != t.TAB && (e.preventDefault(), e.stopPropagation())
                        })
                    }), p.searchInput.on("keyup", function(e) {
                        if (t.isVerticalMovement(e.which) || i.$evalAsync(function() {
                                p.activeIndex = !1 === p.taggingLabel ? -1 : 0
                            }), p.tagging.isActivated && p.search.length > 0) {
                            if (e.which === t.TAB || t.isControl(e) || t.isFunctionKey(e) || e.which === t.ESC || t.isVerticalMovement(e.which)) return;
                            if (p.activeIndex = !1 === p.taggingLabel ? -1 : 0, !1 === p.taggingLabel) return;
                            var n, r, o, a, s = angular.copy(p.items),
                                c = angular.copy(p.items),
                                u = !1,
                                d = -1;
                            if (void 0 !== p.tagging.fct) {
                                if (o = p.$filter("filter")(s, {
                                        isTag: !0
                                    }), o.length > 0 && (a = o[0]), s.length > 0 && a && (u = !0, s = s.slice(1, s.length), c = c.slice(1, c.length)), n = p.tagging.fct(p.search), c.some(function(e) {
                                        return angular.equals(e, n)
                                    }) || p.selected.some(function(e) {
                                        return angular.equals(e, n)
                                    })) return void i.$evalAsync(function() {
                                    p.activeIndex = 0, p.items = s
                                });
                                n && (n.isTag = !0)
                            } else {
                                if (o = p.$filter("filter")(s, function(e) {
                                        return e.match(p.taggingLabel)
                                    }), o.length > 0 && (a = o[0]), r = s[0], void 0 !== r && s.length > 0 && a && (u = !0, s = s.slice(1, s.length), c = c.slice(1, c.length)), n = p.search + " " + p.taggingLabel, f(p.selected, p.search) > -1) return;
                                if (l(c.concat(p.selected))) return void(u && (s = c, i.$evalAsync(function() {
                                    p.activeIndex = 0, p.items = s
                                })));
                                if (l(c)) return void(u && (p.items = c.slice(1, c.length)))
                            }
                            u && (d = f(p.selected, n)), d > -1 ? s = s.slice(d + 1, s.length - 1) : (s = [], n && s.push(n), s = s.concat(c)), i.$evalAsync(function() {
                                if (p.activeIndex = 0, p.items = s, p.isGrouped) {
                                    var e = n ? s.slice(1) : s;
                                    p.setItemsFn(e), n && (p.items.unshift(n), p.groups.unshift({
                                        name: "",
                                        items: [n],
                                        tagging: !0
                                    }))
                                }
                            })
                        }
                    }), p.searchInput.on("blur", function() {
                        r(function() {
                            h.activeMatchIndex = -1
                        })
                    })
                }
            }
        }]), r.directive("uiSelectNoChoice", ["uiSelectConfig", function(e) {
            return {
                restrict: "EA",
                require: "^uiSelect",
                replace: !0,
                transclude: !0,
                templateUrl: function(t) {
                    return t.addClass("ui-select-no-choice"), (t.parent().attr("theme") || e.theme) + "/no-choice.tpl.html"
                }
            }
        }]), r.directive("uiSelectSingle", ["$timeout", "$compile", function(n, r) {
            return {
                restrict: "EA",
                require: ["^uiSelect", "^ngModel"],
                link: function(i, o, a, s) {
                    var c = s[0],
                        u = s[1];
                    u.$parsers.unshift(function(t) {
                        if (e(t)) return t;
                        var n = {};
                        return n[c.parserResult.itemName] = t, c.parserResult.modelMapper(i, n)
                    }), u.$formatters.unshift(function(t) {
                        if (e(t)) return t;
                        var n, r = c.parserResult && c.parserResult.source(i, {
                                $select: {
                                    search: ""
                                }
                            }),
                            o = {};
                        if (r) {
                            var a = function(e) {
                                return o[c.parserResult.itemName] = e, (n = c.parserResult.modelMapper(i, o)) === t
                            };
                            if (c.selected && a(c.selected)) return c.selected;
                            for (var s = r.length - 1; s >= 0; s--)
                                if (a(r[s])) return r[s]
                        }
                        return t
                    }), i.$watch("$select.selected", function(e) {
                        u.$viewValue !== e && u.$setViewValue(e)
                    }), u.$render = function() {
                        c.selected = u.$viewValue
                    }, i.$on("uis:select", function(t, r) {
                        c.selected = r;
                        var o = {};
                        o[c.parserResult.itemName] = r, n(function() {
                            c.onSelectCallback(i, {
                                $item: r,
                                $model: e(r) ? r : c.parserResult.modelMapper(i, o)
                            })
                        })
                    }), i.$on("uis:close", function(e, t) {
                        n(function() {
                            c.focusser.prop("disabled", !1), t || c.focusser[0].focus()
                        }, 0, !1)
                    }), i.$on("uis:activate", function() {
                        l.prop("disabled", !0)
                    });
                    var l = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
                    r(l)(i), c.focusser = l, c.focusInput = l, o.parent().append(l), l.bind("focus", function() {
                        i.$evalAsync(function() {
                            c.focus = !0
                        })
                    }), l.bind("blur", function() {
                        i.$evalAsync(function() {
                            c.focus = !1
                        })
                    }), l.bind("keydown", function(e) {
                        if (e.which === t.BACKSPACE && !1 !== c.backspaceReset) return e.preventDefault(), e.stopPropagation(), c.select(void 0), void i.$apply();
                        e.which === t.TAB || t.isControl(e) || t.isFunctionKey(e) || e.which === t.ESC || (e.which != t.DOWN && e.which != t.UP && e.which != t.ENTER && e.which != t.SPACE || (e.preventDefault(), e.stopPropagation(), c.activate()), i.$digest())
                    }), l.bind("keyup input", function(e) {
                        e.which === t.TAB || t.isControl(e) || t.isFunctionKey(e) || e.which === t.ESC || e.which == t.ENTER || e.which === t.BACKSPACE || (c.activate(l.val()), l.val(""), i.$digest())
                    })
                }
            }
        }]), r.directive("uiSelectSort", ["$timeout", "uiSelectConfig", "uiSelectMinErr", function(e, t, n) {
            return {
                require: ["^^uiSelect", "^ngModel"],
                link: function(t, r, i, o) {
                    if (null === t[i.uiSelectSort]) throw n("sort", "Expected a list to sort");
                    var a = o[0],
                        s = o[1],
                        c = angular.extend({
                            axis: "horizontal"
                        }, t.$eval(i.uiSelectSortOptions)),
                        u = c.axis,
                        l = "dragging",
                        f = "dropping",
                        p = "dropping-before",
                        d = "dropping-after";
                    t.$watch(function() {
                        return a.sortable
                    }, function(e) {
                        e ? r.attr("draggable", !0) : r.removeAttr("draggable")
                    }), r.on("dragstart", function(e) {
                        r.addClass(l), (e.dataTransfer || e.originalEvent.dataTransfer).setData("text", t.$index.toString())
                    }), r.on("dragend", function() {
                        g(l)
                    });
                    var h, v = function(e, t) {
                            this.splice(t, 0, this.splice(e, 1)[0])
                        },
                        g = function(e) {
                            angular.forEach(a.$element.querySelectorAll("." + e), function(t) {
                                angular.element(t).removeClass(e)
                            })
                        },
                        m = function(e) {
                            e.preventDefault(), ("vertical" === u ? e.offsetY || e.layerY || (e.originalEvent ? e.originalEvent.offsetY : 0) : e.offsetX || e.layerX || (e.originalEvent ? e.originalEvent.offsetX : 0)) < this["vertical" === u ? "offsetHeight" : "offsetWidth"] / 2 ? (g(d), r.addClass(p)) : (g(p), r.addClass(d))
                        },
                        $ = function(t) {
                            t.preventDefault();
                            var n = parseInt((t.dataTransfer || t.originalEvent.dataTransfer).getData("text"), 10);
                            e.cancel(h), h = e(function() {
                                y(n)
                            }, 20)
                        },
                        y = function(e) {
                            var n = t.$eval(i.uiSelectSort),
                                o = n[e],
                                a = null;
                            a = r.hasClass(p) ? e < t.$index ? t.$index - 1 : t.$index : e < t.$index ? t.$index : t.$index + 1, v.apply(n, [e, a]), s.$setViewValue(Date.now()), t.$apply(function() {
                                t.$emit("uiSelectSort:change", {
                                    array: n,
                                    item: o,
                                    from: e,
                                    to: a
                                })
                            }), g(f), g(p), g(d), r.off("drop", $)
                        };
                    r.on("dragenter", function() {
                        r.hasClass(l) || (r.addClass(f), r.on("dragover", m), r.on("drop", $))
                    }), r.on("dragleave", function(e) {
                        e.target == r && (g(f), g(p), g(d), r.off("dragover", m), r.off("drop", $))
                    })
                }
            }
        }]), r.factory("$$uisDebounce", ["$timeout", function(e) {
            return function(t, n) {
                var r;
                return function() {
                    var i = this,
                        o = Array.prototype.slice.call(arguments);
                    r && e.cancel(r), r = e(function() {
                        t.apply(i, o)
                    }, n)
                }
            }
        }]), r.directive("uisOpenClose", ["$parse", "$timeout", function(e, t) {
            return {
                restrict: "A",
                require: "uiSelect",
                link: function(n, r, i, o) {
                    o.onOpenCloseCallback = e(i.uisOpenClose), n.$watch("$select.open", function(e, r) {
                        e !== r && t(function() {
                            o.onOpenCloseCallback(n, {
                                isOpen: e
                            })
                        })
                    })
                }
            }
        }]), r.service("uisRepeatParser", ["uiSelectMinErr", "$parse", function(e, t) {
            var n = this;
            n.parse = function(n) {
                var r;
                if (!(r = n.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/))) throw e("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                var i = r[5],
                    o = "";
                if (r[3]) {
                    i = r[5].replace(/(^\()|(\)$)/g, "");
                    var a = r[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);
                    a && a[1].trim() && (o = a[1], i = i.replace(o, ""))
                }
                return {
                    itemName: r[4] || r[2],
                    keyName: r[3],
                    source: t(i),
                    filters: o,
                    trackByExp: r[6],
                    modelMapper: t(r[1] || r[4] || r[2]),
                    repeatExpression: function(e) {
                        var t = this.itemName + " in " + (e ? "$group.items" : "$select.items");
                        return this.trackByExp && (t += " track by " + this.trackByExp), t
                    }
                }
            }, n.getGroupNgRepeatExpression = function() {
                return "$group in $select.groups track by $group.name"
            }
        }])
    }(), angular.module("ui.select").run(["$templateCache", function(e) {
        e.put("bootstrap/choices.tpl.html", '<ul class="ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu" ng-show="$select.open && $select.items.length > 0"><li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}"><div class="divider" ng-show="$select.isGrouped && $index > 0"></div><div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div><div ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option"><span class="ui-select-choices-row-inner"></span></div></li></ul>'), e.put("bootstrap/match-multiple.tpl.html", '<span class="ui-select-match"><span ng-repeat="$item in $select.selected track by $index"><span class="ui-select-match-item btn btn-default btn-xs" tabindex="-1" type="button" ng-disabled="$select.disabled" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span class="close ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span> <span uis-transclude-append=""></span></span></span></span>'), e.put("bootstrap/match.tpl.html", '<div class="ui-select-match" ng-hide="$select.open && $select.searchEnabled" ng-disabled="$select.disabled" ng-class="{\'btn-default-focus\':$select.focus}"><span tabindex="-1" class="btn btn-default form-control ui-select-toggle" aria-label="{{ $select.baseTitle }} activate" ng-disabled="$select.disabled" ng-click="$select.activate()" style="outline: 0;"><span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="ui-select-match-text pull-left" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span> <i class="caret pull-right" ng-click="$select.toggle($event)"></i> <a ng-show="$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)" aria-label="{{ $select.baseTitle }} clear" style="margin-right: 10px" ng-click="$select.clear($event)" class="btn btn-xs btn-link pull-right"><i class="glyphicon glyphicon-remove" aria-hidden="true"></i></a></span></div>'), e.put("bootstrap/no-choice.tpl.html", '<ul class="ui-select-no-choice dropdown-menu" ng-show="$select.items.length == 0"><li ng-transclude=""></li></ul>'), e.put("bootstrap/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control" ng-class="{open: $select.open}"><div><div class="ui-select-match"></div><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" class="ui-select-search input-xs" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-click="$select.activate()" ng-model="$select.search" role="combobox" aria-expanded="{{$select.open}}" aria-label="{{$select.baseTitle}}" ng-class="{\'spinner\': $select.refreshing}" ondrop="return false;"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'), e.put("bootstrap/select.tpl.html", '<div class="ui-select-container ui-select-bootstrap dropdown" ng-class="{open: $select.open}"><div class="ui-select-match"></div><span ng-show="$select.open && $select.refreshing && $select.spinnerEnabled" class="ui-select-refreshing {{$select.spinnerClass}}"></span> <input type="search" autocomplete="off" tabindex="-1" aria-expanded="true" aria-label="{{ $select.baseTitle }}" aria-owns="ui-select-choices-{{ $select.generatedId }}" class="form-control ui-select-search" ng-class="{ \'ui-select-search-hidden\' : !$select.searchEnabled }" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-show="$select.open"><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'), e.put("select2/choices.tpl.html", '<ul tabindex="-1" class="ui-select-choices ui-select-choices-content select2-results"><li class="ui-select-choices-group" ng-class="{\'select2-result-with-children\': $select.choiceGrouped($group) }"><div ng-show="$select.choiceGrouped($group)" class="ui-select-choices-group-label select2-result-label" ng-bind="$group.name"></div><ul id="ui-select-choices-{{ $select.generatedId }}" ng-class="{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }"><li role="option" ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row" ng-class="{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}"><div class="select2-result-label ui-select-choices-row-inner"></div></li></ul></li></ul>'), e.put("select2/match-multiple.tpl.html", '<span class="ui-select-match"><li class="ui-select-match-item select2-search-choice" ng-repeat="$item in $select.selected track by $index" ng-class="{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}" ui-select-sort="$select.selected"><span uis-transclude-append=""></span> <a href="javascript:;" class="ui-select-match-close select2-search-choice-close" ng-click="$selectMultiple.removeChoice($index)" tabindex="-1"></a></li></span>'), e.put("select2/match.tpl.html", '<a class="select2-choice ui-select-match" ng-class="{\'select2-default\': $select.isEmpty()}" ng-click="$select.toggle($event)" aria-label="{{ $select.baseTitle }} select"><span ng-show="$select.isEmpty()" class="select2-chosen">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty()" class="select2-chosen" ng-transclude=""></span> <abbr ng-if="$select.allowClear && !$select.isEmpty()" class="select2-search-choice-close" ng-click="$select.clear($event)"></abbr> <span class="select2-arrow ui-select-toggle"><b></b></span></a>'), e.put("select2/no-choice.tpl.html", '<div class="ui-select-no-choice dropdown" ng-show="$select.items.length == 0"><div class="dropdown-content"><div data-selectable="" ng-transclude=""></div></div></div>'), e.put("select2/select-multiple.tpl.html", '<div class="ui-select-container ui-select-multiple select2 select2-container select2-container-multi" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}"><ul class="select2-choices"><span class="ui-select-match"></span><li class="select2-search-field"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" aria-activedescendant="ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}" class="select2-input ui-select-search" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-disabled="$select.disabled" ng-hide="$select.disabled" ng-model="$select.search" ng-click="$select.activate()" style="width: 34px;" ondrop="return false;"></li></ul><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open || $select.items.length === 0}"><div class="ui-select-choices"></div></div></div>'), e.put("select2/select.tpl.html", '<div class="ui-select-container select2 select2-container" ng-class="{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}"><div class="ui-select-match"></div><div class="ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active" ng-class="{\'select2-display-none\': !$select.open}"><div class="search-container" ng-class="{\'ui-select-search-hidden\':!$select.searchEnabled, \'select2-search\':$select.searchEnabled}"><input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ng-class="{\'select2-active\': $select.refreshing}" role="combobox" aria-expanded="true" aria-owns="ui-select-choices-{{ $select.generatedId }}" aria-label="{{ $select.baseTitle }}" class="ui-select-search select2-input" ng-model="$select.search"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div></div>'), e.put("selectize/choices.tpl.html", '<div ng-show="$select.open" class="ui-select-choices ui-select-dropdown selectize-dropdown" ng-class="{\'single\': !$select.multiple, \'multi\': $select.multiple}"><div class="ui-select-choices-content selectize-dropdown-content"><div class="ui-select-choices-group optgroup"><div ng-show="$select.isGrouped" class="ui-select-choices-group-label optgroup-header" ng-bind="$group.name"></div><div role="option" class="ui-select-choices-row" ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}"><div class="option ui-select-choices-row-inner" data-selectable=""></div></div></div></div></div>'), e.put("selectize/match-multiple.tpl.html", '<div class="ui-select-match" data-value="" ng-repeat="$item in $select.selected track by $index" ng-click="$selectMultiple.activeMatchIndex = $index;" ng-class="{\'active\':$selectMultiple.activeMatchIndex === $index}" ui-select-sort="$select.selected"><span class="ui-select-match-item" ng-class="{\'select-locked\':$select.isLocked(this, $index)}"><span uis-transclude-append=""></span> <span class="remove ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&times;</span></span></div>'), e.put("selectize/match.tpl.html", '<div ng-hide="$select.searchEnabled && ($select.open || $select.isEmpty())" class="ui-select-match"><span ng-show="!$select.searchEnabled && ($select.isEmpty() || $select.open)" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span> <span ng-hide="$select.isEmpty() || $select.open" ng-transclude=""></span></div>'), e.put("selectize/no-choice.tpl.html", '<div class="ui-select-no-choice selectize-dropdown" ng-show="$select.items.length == 0"><div class="selectize-dropdown-content"><div data-selectable="" ng-transclude=""></div></div></div>'), e.put("selectize/select-multiple.tpl.html", '<div class="ui-select-container selectize-control multi plugin-remove_button" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" class="ui-select-search" ng-class="{\'ui-select-search-hidden\':!$select.searchEnabled}" placeholder="{{$selectMultiple.getPlaceholder()}}" ng-model="$select.search" ng-disabled="$select.disabled" aria-expanded="{{$select.open}}" aria-label="{{ $select.baseTitle }}" ondrop="return false;"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>'), e.put("selectize/select.tpl.html", '<div class="ui-select-container selectize-control single" ng-class="{\'open\': $select.open}"><div class="selectize-input" ng-class="{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}" ng-click="$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()"><div class="ui-select-match"></div><input type="search" autocomplete="off" tabindex="-1" class="ui-select-search ui-select-toggle" ng-class="{\'ui-select-search-hidden\':!$select.searchEnabled}" ng-click="$select.toggle($event)" placeholder="{{$select.placeholder}}" ng-model="$select.search" ng-hide="!$select.isEmpty() && !$select.open" ng-disabled="$select.disabled" aria-label="{{ $select.baseTitle }}"></div><div class="ui-select-choices"></div><div class="ui-select-no-choice"></div></div>')
    }])
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.behaviobank = void 0;
    var i = n(20),
        o = r(i),
        a = n(56),
        s = r(a),
        c = n(87),
        u = r(c),
        l = n(58),
        f = r(l),
        p = n(57),
        d = r(p);
    n(59), n(78), n(76), n(77), n(75);
    var h = n(3),
        v = n(72),
        g = r(v),
        m = n(73),
        $ = r(m),
        y = n(70),
        b = r(y),
        w = n(69),
        S = r(w),
        C = n(71),
        k = r(C),
        E = n(68),
        _ = r(E),
        x = n(74),
        A = r(x),
        T = n(65),
        R = r(T),
        O = n(64),
        D = r(O),
        P = n(62),
        M = n(66),
        I = r(M),
        j = n(63),
        V = n(60),
        U = n(67),
        L = n(61),
        N = (n(8), t.behaviobank = o.default.module("behaviobank", [s.default, u.default, f.default, "angular-progress-arc", d.default]));
    N.run(["$rootScope", "TutorialService", "EventBus", "$state", "$transitions", "AuthService", "$window", "$timeout", function(e, t, n, r, i, a, s, c) {
        e.tutorialStep = function(e) {
            if ("string" == typeof e) return t.getCurrentStep() === e;
            for (var n in e)
                if (t.getCurrentStep() === e[n]) return !0
        }, e.ATOLimit = 10, e.RATLimit = 4, e.BotLimit = 5, e.OverlayALimit = 100, e.MITBLimit = 100, e.ATOOLimit = 10, e.account_takeover = {
            username: h.ACCOUNT_TAKEOVER_CREDENTIALS.username,
            password: h.ACCOUNT_TAKEOVER_CREDENTIALS.password,
            pronoun: h.ACCOUNT_TAKEOVER_CREDENTIALS.pronoun
        }, e.progressPercentage = function(e, t) {
            return e / t > 1 ? 100 : e / t * 100
        }, e.progressComplete = function(e, t) {
            return !(e / t >= 1)
        }, e.$state = r, e.currentDate = new Date, e.showSenseResults = !1, e.enableHud = !1, e.innerWindowHeight = window.innerHeight, o.default.element(window).on("resize", function() {
            e.innerWindowHeight = window.innerHeight
        }), e.browsers = {
            isFirefox: /firefox/i.test(window.navigator.userAgent),
            isIE: /trident/i.test(window.navigator.userAgent)
        }, i.onSuccess({}, function(e) {
            h.DEBUG && console.log("transition", e.from().name, e.to().name), c(function() {
                return n.publish("collector.reset")
            }, 250), n.publish("scroll.reset"), n.publish("auth.refresh"), window._pageId = e.to().name
        }), n.subscribe("collector.reset", function() {
            h.DEBUG && console.log("collector: reset"), window.bw.reset()
        }), n.subscribe("scroll.reset", function() {
            window.scrollTo(0, 0)
        }), n.subscribe("behavior", function(t, n) {
            e.behavior = n.behavior, e.latestTransaction = l(n.behavior)
        });
        var u = function(e, t) {
                return e.risk = t.risk, e
            },
            l = function(e) {
                var t = e && e.data;
                return t ? u(t[t.length - 1], e) : null
            };
        if (n.subscribe("transaction.transfer", function() {}), n.subscribe("transaction.credentials", function() {}), e.$watch("authSession.user", function(t, r) {
                t && r && (r.transfers > 0 && t.transfers > r.transfers && (t.transfers == e.RATLimit ? n.publish("usecase.unlocked", "usecase_remote") : t.transfers == e.BotLimit && n.publish("usecase.unlocked", "usecase_bot")), r.credentials > 0 && t.credentials > r.credentials && t.credentials == e.ATOLimit && (console.log("credentials", t.credentials, r.credentials), n.publish("usecase.unlocked", "usecase_ato")))
            }, !0), n.subscribe("usecase.unlocked", function(t, n) {
                e.usecaseUnlocked = !0, e.usecaseUnlockedScenario = n, c(function() {
                    return e.usecaseUnlocked = !1
                }, 1e4)
            }), e.triggerUsecaseUnlocked = function() {
                h.DEBUG && console.log("usecase unlocked!"), n.publish("usecase.unlocked", "usecase_bot")
            }, h.DEBUG) {
            e.behavior = {
                isBot: !1,
                botDesc: [],
                isRemoteAccess: !1,
                raDesc: [],
                ratProtocol: {},
                isTrained: !0,
                ipChanged: !1,
                isWhitelisted: !1,
                isSessionCorrupted: !1,
                deviceChanged: !1,
                deviceDesc: [],
                deviceScore: 0,
                ipSeverity: 0,
                isDataCorrupted: !1,
                isReplay: !1,
                userid: "mikael",
                score: .9324566816671279,
                confidence: .7803505258464545,
                policy: "Green",
                policyId: 1,
                startDate: "2018-05-29T20:37+0200",
                endDate: "2018-05-29T20:39+0200",
                startTimestamp: 1527619063332,
                endTimestamp: 1527619155691,
                sessionid: "bankapp-cb3395dd35b6bcbf8883539f633cee18f00fadc18252590cd80c7484481dee3c",
                recognitionRatio: .7086956521739131,
                uiScore: .6875631367589309,
                uiScoreFlag: !1,
                uiConfidence: .7661594590988937,
                uiConfidenceFlag: !1,
                tabAnomaly: !1,
                numpadAnomaly: !1,
                pocAnomaly: !1,
                diDesc: [2],
                diError: !1,
                pdDesc: [4],
                pdError: !0,
                risk: .641168358903588,
                riskDesc: {
                    "Behavioral Score": .07282321023789108,
                    "Remote Access": .013106325706570653,
                    "Bot Detection": .6021399122391566,
                    "Page Definitions": .3119305518163816
                },
                data: [{
                    isReplay: !1,
                    isTrained: !0,
                    isBot: !1,
                    botDesc: [],
                    isRemoteAccess: !1,
                    raDesc: [],
                    ratProtocol: {},
                    deviceChanged: !1,
                    deviceDesc: [],
                    deviceScore: 0,
                    isDataCorrupted: !1,
                    useragent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3391.0 Safari/537.36",
                    device: "DESKTOP",
                    sdkVersion: "JavaScript 270",
                    score: .9616362181902189,
                    policy: "Green",
                    policyId: 1,
                    confidence: .8781652555561369,
                    date: 1527619063332,
                    ip: "10.0.2.2",
                    notes: "Transfer",
                    recognitionRatio: .7878048780487804,
                    tabAnomaly: !1,
                    numpadAnomaly: !1,
                    pocAnomaly: !1,
                    diDesc: [2, 1],
                    diError: !1,
                    pdDesc: [4],
                    pdError: !0,
                    path: "#!/transfer",
                    targets: [{
                        target: "mouse",
                        type: "c",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 77,
                        updates: 77,
                        isTrained: !0,
                        score: .5,
                        confidence: 0,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#amount",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .8,
                        training: 18,
                        updates: 48,
                        isTrained: !0,
                        score: .9951630475139408,
                        confidence: .8676522880896388,
                        tabUsed: !1,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .02083333333333334,
                        numpadRatio: 0,
                        pocRatio: .020833333333333336,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#transfer_date",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 31,
                        updates: 26,
                        isTrained: !0,
                        score: .9907284122195703,
                        confidence: .8854524421152324,
                        tabUsed: !0,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .5483870967741934,
                        numpadRatio: 0,
                        pocRatio: .06451612903225803,
                        diDesc: [1],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "textarea#notes",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .5,
                        training: 8,
                        updates: 16,
                        isTrained: !0,
                        score: .8656224940835727,
                        confidence: .867977064960118,
                        tabUsed: !1,
                        numpadUsed: !1,
                        numrowUsed: !1,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .8260869565217389,
                        numpadRatio: .5,
                        pocRatio: 0,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }]
                }, {
                    isReplay: !1,
                    isTrained: !0,
                    isBot: !1,
                    botDesc: [],
                    isRemoteAccess: !1,
                    raDesc: [],
                    ratProtocol: {},
                    deviceChanged: !1,
                    deviceDesc: [],
                    deviceScore: 0,
                    isDataCorrupted: !1,
                    useragent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3391.0 Safari/537.36",
                    device: "DESKTOP",
                    sdkVersion: "JavaScript 270",
                    score: .9998076381946196,
                    policy: "Green",
                    policyId: 1,
                    confidence: .9777417468369438,
                    date: 1527619073477,
                    ip: "10.0.2.2",
                    notes: "Credit Card apply",
                    recognitionRatio: 1,
                    tabAnomaly: !1,
                    numpadAnomaly: !1,
                    pocAnomaly: !1,
                    diDesc: [2, 1],
                    diError: !1,
                    pdDesc: [4],
                    pdError: !0,
                    path: "#!/credit-cards",
                    targets: [{
                        target: "mouse",
                        type: "c",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 77,
                        updates: 77,
                        isTrained: !0,
                        score: .5,
                        confidence: 0,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#username",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 29,
                        updates: 29,
                        isTrained: !0,
                        score: .9998160890909996,
                        confidence: .9554834936738875,
                        tabUsed: !1,
                        numpadUsed: !1,
                        numrowUsed: !1,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: 0,
                        numpadRatio: 0,
                        pocRatio: 0,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "password#password",
                        type: "fa",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 28,
                        updates: 28,
                        isTrained: !0,
                        score: .9997995635026217,
                        confidence: 1,
                        pocUsed: !1,
                        pocAnomaly: !1,
                        pocRatio: 0,
                        diDesc: [1],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }]
                }, {
                    isReplay: !1,
                    isTrained: !0,
                    isBot: !1,
                    botDesc: [],
                    isRemoteAccess: !1,
                    raDesc: [],
                    ratProtocol: {},
                    deviceChanged: !1,
                    deviceDesc: [],
                    deviceScore: 0,
                    isDataCorrupted: !1,
                    useragent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3391.0 Safari/537.36",
                    device: "DESKTOP",
                    sdkVersion: "JavaScript 270",
                    score: .8507870753485602,
                    policy: "Yellow",
                    policyId: 2,
                    confidence: .7393261352633708,
                    date: 1527619124159,
                    ip: "10.0.2.2",
                    notes: "Credit Card payment",
                    recognitionRatio: .6820512820512821,
                    tabAnomaly: !1,
                    numpadAnomaly: !1,
                    pocAnomaly: !1,
                    diDesc: [2],
                    diError: !1,
                    pdDesc: [4],
                    pdError: !0,
                    path: "#!/credit-cards/1",
                    targets: [{
                        target: "mouse",
                        type: "c",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 77,
                        updates: 77,
                        isTrained: !0,
                        score: .5,
                        confidence: 0,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#amount",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .9166666666666666,
                        training: 13,
                        updates: 48,
                        isTrained: !0,
                        score: .9999980133846327,
                        confidence: .778435210509574,
                        tabUsed: !1,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .02083333333333334,
                        numpadRatio: 0,
                        pocRatio: .020833333333333336,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#transfer_date",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 31,
                        updates: 26,
                        isTrained: !0,
                        score: .7646245838006562,
                        confidence: .8838042303145276,
                        tabUsed: !0,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .5483870967741934,
                        numpadRatio: 0,
                        pocRatio: .06451612903225803,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "textarea#notes",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .5922222222222222,
                        training: 9,
                        updates: 16,
                        isTrained: !0,
                        score: .8679295473481837,
                        confidence: .6895847289055105,
                        tabUsed: !0,
                        numpadUsed: !1,
                        numrowUsed: !1,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .8260869565217389,
                        numpadRatio: .5,
                        pocRatio: 0,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }]
                }, {
                    isReplay: !1,
                    isTrained: !0,
                    isBot: !1,
                    botDesc: [],
                    isRemoteAccess: !1,
                    raDesc: [],
                    ratProtocol: {},
                    deviceChanged: !1,
                    deviceDesc: [],
                    deviceScore: 0,
                    isDataCorrupted: !1,
                    useragent: "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3391.0 Safari/537.36",
                    device: "DESKTOP",
                    sdkVersion: "JavaScript 270",
                    score: .9778016620697371,
                    policy: "Green",
                    policyId: 1,
                    confidence: .7258500024089832,
                    date: 1527619155691,
                    ip: "10.0.2.2",
                    notes: "Transfer",
                    recognitionRatio: .647863247863248,
                    tabAnomaly: !1,
                    numpadAnomaly: !1,
                    pocAnomaly: !1,
                    diDesc: [2],
                    diError: !1,
                    pdDesc: [4],
                    pdError: !0,
                    path: "#!/transfer",
                    targets: [{
                        target: "mouse",
                        type: "c",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: 1,
                        training: 77,
                        updates: 77,
                        isTrained: !0,
                        score: .5,
                        confidence: 0,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#amount",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .8300000000000001,
                        training: 19,
                        updates: 48,
                        isTrained: !0,
                        score: .9191392884417886,
                        confidence: .7384580673553507,
                        tabUsed: !1,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .02083333333333334,
                        numpadRatio: 0,
                        pocRatio: .020833333333333336,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "text#transfer_date",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .8125,
                        training: 23,
                        updates: 26,
                        isTrained: !0,
                        score: .9959540103234116,
                        confidence: .7315710656669383,
                        tabUsed: !0,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .5483870967741934,
                        numpadRatio: 0,
                        pocRatio: .06451612903225803,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }, {
                        target: "textarea#notes",
                        type: "f",
                        isBot: !1,
                        botDesc: [],
                        isRemoteAccess: !1,
                        raDesc: [],
                        ratProtocol: {},
                        recognitionRatio: .503125,
                        training: 8,
                        updates: 16,
                        isTrained: !0,
                        score: .995670674936109,
                        confidence: .7142920061362743,
                        tabUsed: !0,
                        numpadUsed: !1,
                        numrowUsed: !0,
                        pocUsed: !1,
                        tabAnomaly: !1,
                        numpadAnomaly: !1,
                        pocAnomaly: !1,
                        tabRatio: .8260869565217389,
                        numpadRatio: .5,
                        pocRatio: 0,
                        diDesc: [2],
                        diError: !1,
                        pdDesc: [4],
                        pdError: !0
                    }]
                }]
            }, e.behaviorOutput = "";
            for (var f in e.behavior)
                if (e.behavior.hasOwnProperty(f)) {
                    var p = e.behavior[f];
                    for (var d in p) console.log(d), p.hasOwnProperty(d) && console.log("obj", p, "prop", d)
                }
        }
        e.enableAdvancedUseCases = function() {
            n.publish("tutorial.start_remote")
        }, e.nextTutorialStep = function() {
            var e = t.getNextStep();
            h.DEBUG && console.log("nextTutorialStep", e)
        }, n.subscribe("login.success", function(t, r) {
            e.usecaseUnlocked = !1, e.authSession = r, h.DEBUG && console.log("login.success subscribe", r), 0 == r.user.total_credentials() && n.publish("auth.refresh")
        }), n.subscribe("profiles", function() {
            null === t.getTutorial() && e.authSession && 0 == e.authSession.user.transfers ? n.publish("assistant.key", "intro.first_time") : null === t.getTutorial() && e.authSession && e.authSession.user.transfers > 0 && n.publish("assistant.key", "intro.welcome_back")
        }), n.subscribe("logout", function() {
            "usecase_ato.intro" === t.getCurrentStep() && (e.account_takeover_progress = {
                enabled: !0,
                account: e.authSession.user.username
            }), e.authSession = null, t.reset(), window.sessionStorage.removeItem("auth.token")
        });
        var v = window.sessionStorage.getItem("auth.token");
        v && a.setAuthSession(v)
    }]), N.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "uiMask.ConfigProvider", function(e, t, r, i) {
        function o(e, t, n, r, i) {
            var o = e.defer();
            return i.remote.isRunning || i.bot.isRunning ? (n(function() {
                return o.reject({
                    scenarioRunning: !0
                })
            }), o.promise) : (h.DEBUG && console.log("is authenticated", r.isAuthenticated()), r.isAuthenticated() ? o.resolve() : (o.reject({
                isAuthenticated: !1
            }), t.go("login")), o.promise)
        }

        function a(e, t, n, r) {
            var i = e.defer();
            return r.getCreditCard(n.id).then(function(e) {
                i.resolve(e)
            }, function(e) {
                i.reject({
                    card: "not found"
                }), t.go("creditcards")
            }), i.promise
        }
        e.state("login", {
            url: "/login",
            controller: "LoginController as loginCtrl",
            template: n(84)
        }).state("logout", {
            url: "/logout",
            controller: ["$state", "AuthService", function(e, t) {
                t.logout(), e.go("login")
            }],
            resolve: {
                auth: o
            }
        }).state("landing", {
            url: "/",
            controller: "LandingController",
            controllerAs: "landing",
            template: n(85),
            resolve: {
                auth: o
            }
        }).state("accounts", {
            url: "/accounts",
            template: n(80),
            controller: "AccountListController as accountsCtrl",
            resolve: {
                auth: o
            }
        }).state("accounts.details", {
            url: "/:id",
            views: {
                "@": {
                    controller: "AccountDetailsController as accountsCtrl",
                    template: n(79)
                }
            },
            resolve: {
                auth: o
            }
        }).state("transfer", {
            url: "/transfer",
            controller: "TransferController as transferCtrl",
            template: n(86),
            resolve: {
                auth: o
            }
        }).state("creditcards", {
            url: "/credit-cards",
            controller: "CreditCardController as creditCardCtrl",
            template: n(83),
            resolve: {
                auth: o
            }
        }).state("creditcards.details", {
            url: "/:id",
            views: {
                "@": {
                    controller: "CreditCardDetailsController as creditCardCtrl",
                    template: n(82)
                }
            },
            resolve: {
                auth: o,
                card: a
            }
        }).state("creditcards.cancel", {
            url: "/:id/cancel",
            views: {
                "@": {
                    controller: "CreditCardDetailsController as creditCardCtrl",
                    template: n(81)
                }
            },
            resolve: {
                auth: o,
                card: a
            }
        }), o.$inject = ["$q", "$state", "$timeout", "AuthService", "$rootScope"], a.$inject = ["$q", "$state", "$stateParams", "CreditCardService"], t.otherwise("/"), r.interceptors.push(["$q", "$injector", function(e, t) {
            return {
                request: function(e) {
                    var n = t.get("AuthService");
                    return n.isAuthenticated() && (e.headers.Authorization = "Bearer " + n.getSession().token), e
                }
            }
        }]), i.maskDefinitions({})
    }]);
    var F = function(e) {
        return {
            scope: {
                content: "@title",
                progressUnlocked: "<progressUnlocked"
            },
            link: function(t, n, r) {
                var i = o.default.element('<div class="tooltip-text">{{ content }}</div>');
                e(i)(t), t.$watch("progressUnlocked", function(e) {
                    e && i.text("Unlocked")
                }), n.addClass("tooltip-wrap").append(i).attr("title", null)
            }
        }
    };
    F.$inject = ["$compile"], N.factory("EventBus", ["$rootScope", function(e) {
        return new g.default(e)
    }]).factory("RemoteRunner", ["$q", function(e) {
        return new $.default(e)
    }]).factory("BotRunner", ["$q", function(e) {
        return new b.default(e)
    }]).factory("BankAccountService", ["$q", "$http", "EventBus", function(e, t, n) {
        return new S.default(e, t, n)
    }]).factory("CreditCardService", k.default).factory("TutorialService", A.default).factory("AuthService", _.default).factory("AssistantService", V.AssistantService).controller("LoginController", R.default).controller("LandingController", D.default).controller("AccountListController", P.AccountListController).controller("AccountDetailsController", P.AccountDetailsController).controller("TransferController", I.default).controller("AssistantController", V.AssistantController).controller("CreditCardController", j.CreditCardController).controller("CreditCardDetailsController", j.CreditCardDetailsController).directive("assistant", V.assistant).directive("assistantMessage", V.assistantMessage).controller("RemoteScenarioController", U.RemoteScenarioController).directive("remote", U.remoteHelper).controller("BotScenarioController", L.BotScenarioController).directive("bot", L.botHelper).directive("progressTooltip", F)
}]);