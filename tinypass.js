/* Retrieved from https://cdn.tinypass.com/api/tinypass.min.js */
window.___tp = function() {
        var tp, __tp;
        if (window.tp !== undefined) {
            if (window.tp.isInitialized !== undefined) {
                window.tp.loadRequireJs();
                return
            }
            __tp = window.tp
        }
        tp = function() {
                function t() {
                    function i(e, t, r) {
                        var i, s, o;
                        for (var u = 0; u < n.length; u++) {
                            var a = n[u];
                            e === a.module && t.substring(0, a.prefix.length) === a.prefix && (i = t.substring(a.prefix.length, a.prefix.length + 1).toLowerCase() + t.substring(a.prefix.length + 1, t.length), s = tp[e].registerCallback(i, r), s !== undefined && (o = s))
                        }
                        return o
                    }
                    var t = ["offer", "template", "meter", "experience", "myaccount", "pianoId", "tinypassLogin", "swg", "user"],
                        n = [{
                            module: "offer",
                            prefix: "checkout"
                        }, {
                            module: "pianoId",
                            prefix: "pianoId"
                        }],
                        r = function(e, n) {
                            return function() {
                                var r;
                                for (var s = 0; s < t.length; s++) {
                                    var o = t[s],
                                        u = tp[o].registerCallback(e, n);
                                    u !== undefined && (r = u), u = i(o, e, n), u !== undefined && (r = u)
                                }
                                return r
                            }
                        };
                    e.addHandler = function() {
                        var t = r.apply(null, arguments);
                        tp.isInitialized ? t() : e.events.push(t)
                    }
                }
                var e = this;
                this.aid = "", this.setAid = function(e) {
                    this.aid = e
                }, this.reload = function() {
                    location.href = tp.util.removeVoucherCodeFromUrl(location.href)
                }, this.removeSharedAccountCodeFromUrl = function() {
                    location.href = tp.util.removeSharedAccountCodeFromUrl(location.href)
                }, this.gaClientId = null, this.setGAClientId = function(e) {
                    this.gaClientId = e, this.gaService && this.gaService.setClientId(e)
                }, this.getGAClientId = function() {
                    return this.gaClientId
                }, this.gaCrossDomainLinking = null, this.enableGACrossDomainLinking = function(e) {
                    this.gaCrossDomainLinking = !0;
                    var t = this,
                        n = 500,
                        r = 6e4,
                        i = Date.now(),
                        s = function() {
                            var o = window.ga;
                            if (o && typeof o == "function") try {
                                o(function(n) {
                                    if (typeof n != "undefined" && typeof e == "undefined") t.setGAClientId(n.get("clientId"));
                                    else if (typeof e != "undefined") {
                                        var r = o.getAll();
                                        for (var i = 0; i < r.length; ++i) {
                                            n = r[i];
                                            if (e !== n.get("trackingId")) continue;
                                            t.setGAClientId(n.get("clientId"))
                                        }
                                    }
                                })
                            } catch (u) {} else Date.now() - i < r && setTimeout(s, n)
                        };
                    s()
                }, this.tags = "", this.setTags = function(e) {
                    e instanceof Array ? this.tags = e.join(",") : this.tags = e
                }, this.dontScrollTopModal = !1, this.setDontScrollTopModal = function(e) {
                    this.dontScrollTopModal = e
                }, this.useExperience = !1, this.setUseExperience = function(e) {
                    this.useExperience = e
                }, this.experimentalIosModal = !1, this.setExperimentalIosModal = function(e) {}, this.applePayMerchantId = "", this.setApplePayMerchantId = function(e) {
                    this.applePayMerchantId = e
                }, this.contentIsNative = "", this.setContentIsNative = function(e) {
                    this.contentIsNative = e
                }, this.endpoint = "", this.setEndpoint = function(e) {
                    this.endpoint = e
                }, this.espEndpoint = "", this.setEspEndpoint = function(e) {
                    this.espEndpoint = e
                }, this.cxCdnUrl = "https://cdn.cxense.com", this.setCxCdnUrl = function(e) {
                    this.cxCdnUrl = e
                }, this.c1XLoadCce = !0, this.setC1XLoadCce = function(e) {
                    this.c1XLoadCce = e
                }, this.c1XIntegrationVersion = "v2", this.setC1XIntegrationVersion = function(e) {
                    this.c1XIntegrationVersion = e
                }, this.cxenseSiteId = "", this.setCxenseSiteId = function(e) {
                    this.cxenseSiteId = e
                }, this.cxenseLibAwaitingTimeout = 0, this.setCxenseLibAwaitingTimeout = function(e) {
                    this.cxenseLibAwaitingTimeout = e
                }, this.cxenseLibAwaitingRetryCount = 0, this.setCxenseLibAwaitingRetryCount = function(e) {
                    this.cxenseLibAwaitingRetryCount = e
                }, this.contentId = "", this.setContentId = function(e) {
                    this.contentId = e
                }, this.trackPages = !0, this.setTrackPages = function(e) {
                    this.trackPages = e
                }, this.debug = !1, this.setDebug = function(e) {
                    this.debug = e
                }, this.userRef = "", this.setUserRef = function(e) {
                    this.userRef = e
                }, this.usePianoIdLiteUserProvider = !1, this.setUsePianoIdLiteUserProvider = function(e) {
                    this.usePianoIdLiteUserProvider = e
                }, this.externalJWT = null, this.setExternalJWT = function(e) {
                    this.externalJWT = e
                }, this.getExternalJWT = function() {
                    return this.externalJWT
                }, this.useTinypassAccounts = !1, this.setUseTinypassAccounts = function(e) {
                    this.useTinypassAccounts = e
                }, this.useCondeUserProvider = !1, this.setUseCondeUserProvider = function(e) {
                    this.useCondeUserProvider = e
                }, this.useGigyaUserProvider = !1, this.setUseGigyaUserProvider = function(e) {
                    this.useGigyaUserProvider = e
                }, this.usePianoIdUserProvider = !1, this.setUsePianoIdUserProvider = function(e) {
                    this.usePianoIdUserProvider = e
                }, this.pianoIdUrl = "", this.setPianoIdUrl = function(e) {
                    this.pianoIdUrl = e
                }, this.useAidSpecifiedCookies = !1, this.setUseAidSpecifiedCookies = function(e) {
                    this.useAidSpecifiedCookies = e
                }, this.sandbox = !1, this.setSandbox = function(e) {
                    this.sandbox = e
                }, this.isNonProdEndpoint = function() {
                    var e = /^https?:\/\/(.*sandbox.*|\d+\.dev)\.(tinypass\.com|piano\.io)/i;
                    return this.endpoint === "sandbox" ? !0 : e.test(this.endpoint)
                }, this.contentCreatedSelector = "", this.setContentCreatedSelector = function(e) {
                    this.contentCreatedSelector = e
                }, this.contentCreated = "", this.setContentCreated = function(e) {
                    this.contentCreated = e
                }, this.contentAuthor = "", this.setContentAuthor = function(e) {
                    this.contentAuthor = e
                }, this.contentSection = "", this.setContentSection = function(e) {
                    this.contentSection = e
                }, this.zone = "", this.setZone = function(e) {
                    this.zone = e || ""
                }, this.zIndexes = {
                    backdrop: 3e5,
                    modal: 300050,
                    close: 300100
                }, this.setZIndexes = function(e) {
                    this.zIndexes = e
                }, this.customPreChecks = [], this.setCustomPreCheck = function(e) {
                    this.customPreChecks.push(e)
                }, this.customParams = {}, this.setCustomParam = function(e, t, n, r) {
                    var i = ["content", "user", "request"];
                    n || (n = "content"), n = n.toLowerCase();
                    if (i.indexOf(n) < 0) throw new Error("Undefined scope " + n + "\nAvailable scopes: " + i.join(", "));
                    this.customParams[n] === undefined && (this.customParams[n] = {});
                    if (this.customParams[n][e] === undefined || r) this.customParams[n][e] = [];
                    var s = [].concat(t);
                    for (var o = 0; o < s.length; o++) {
                        if (typeof s[o] != "string") throw new Error("setCustomParam accept only string values or array of strings");
                        this.customParams[n][e].push(s[o])
                    }
                }, this.resetCustomParam = function(e) {
                    e || (e = "content"), delete this.customParams[e]
                }, this.externalLibraries = [], this.externalLibrariesCallbacks = [], this.addExternalLibrary = function(e, t) {
                    if (this.isInitialized) e = typeof e == "string" ? [e] : e, this.require(e, function() {
                        t && t()
                    });
                    else {
                        if (typeof e == "string") this.externalLibraries.push(e);
                        else
                            for (var n = 0; n < e.length; ++n) this.externalLibraries.push(e[n]);
                        t && this.externalLibrariesCallbacks.push(t)
                    }
                }, this.customVariables = {}, this.setCustomVariable = function(e, t) {
                    this.customVariables[e] = t
                }, this.trackPageView = !0, this.setTrackPageView = function(e) {
                    this.trackPageView = e
                }, this.setTrackPageview = function(e) {
                    this.trackPageView = e
                }, this.customPageUrl = "", this.setPageURL = function(e) {
                    this.customPageUrl = e
                }, this.adblockerCookieName = "", this.setAdblockerCookieName = function(e) {
                    this.adblockerCookieName = e
                }, this.maxCookieExpirationInDays = null, this.setMaxCookieExpirationInDays = function(e) {
                    var e = parseInt(e, 10);
                    if (!(isFinite(e) && e > 0)) throw new Error("maxCookieExpirationInDays must be a positive number");
                    this.maxCookieExpirationInDays = e
                }, this.getMaxCookieExpirationInDays = function() {
                    return this.maxCookieExpirationInDays
                }, this.fbPixelId = null, this.setFbPixelId = function(e) {
                    this.fbPixelId = e
                }, this.getFbPixelId = function() {
                    return this.fbPixelId
                }, this.redirectToFbTimeout = 3, this.setRedirectToFbTimeout = function(e) {
                    this.redirectToFbTimeout = e
                }, this.isDoubleOptInCheckOnAccessCheckEnabled = !1, this.enableDoubleOptInCheckOnAccessCheck = function() {
                    this.isDoubleOptInCheckOnAccessCheckEnabled = !0
                }, this.cloudflareWorkerUrl = "", this.setCloudflareWorkerUrl = function(e) {
                    this.cloudflareWorkerUrl = e
                }, this.isMockMode = !1, this.inappBrowserReturn = !1, this.events = [], t()
            },
            function() {
                var require, requirejs, define;
                (function(ba) {
                    function G(e) {
                        return "[object Function]" === K.call(e)
                    }

                    function H(e) {
                        return "[object Array]" === K.call(e)
                    }

                    function v(e, t) {
                        if (e) {
                            var n;
                            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
                        }
                    }

                    function T(e, t) {
                        if (e) {
                            var n;
                            for (n = e.length - 1; - 1 < n && (!e[n] || !t(e[n], n, e)); n -= 1);
                        }
                    }

                    function t(e, t) {
                        return fa.call(e, t)
                    }

                    function m(e, n) {
                        return t(e, n) && e[n]
                    }

                    function B(e, n) {
                        for (var r in e)
                            if (t(e, r) && n(e[r], r)) break
                    }

                    function U(e, n, r, i) {
                        return n && B(n, function(n, s) {
                            if (r || !t(e, s)) i && "object" == typeof n && n && !H(n) && !G(n) && !(n instanceof RegExp) ? (e[s] || (e[s] = {}), U(e[s], n, r, i)) : e[s] = n
                        }), e
                    }

                    function u(e, t) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function ca(e) {
                        throw e
                    }

                    function da(e) {
                        if (!e) return e;
                        var t = ba;
                        return v(e.split("."), function(e) {
                            t = t[e]
                        }), t
                    }

                    function C(e, t, n, r) {
                        return t = Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e), t.requireType = e, t.requireModules = r, n && (t.originalError = n), t
                    }

                    function ga(e) {
                        function n(e, t, n) {
                            var r, i, s, o, u, a, f, l, t = t && t.split("/"),
                                c = A.map,
                                h = c && c["*"];
                            if (e) {
                                e = e.split("/"), i = e.length - 1, A.nodeIdCompat && Q.test(e[i]) && (e[i] = e[i].replace(Q, "")), "." === e[0].charAt(0) && t && (i = t.slice(0, t.length - 1), e = i.concat(e)), i = e;
                                for (s = 0; s < i.length; s++)(o = i[s], "." === o) ? (i.splice(s, 1), s -= 1) : ".." === o && 0 !== s && (1 != s || ".." !== i[2]) && ".." !== i[s - 1] && 0 < s && (i.splice(s - 1, 2), s -= 2);
                                e = e.join("/")
                            }
                            if (n && c && (t || h)) {
                                i = e.split("/"), s = i.length;
                                e: for (; 0 < s; s -= 1) {
                                    u = i.slice(0, s).join("/");
                                    if (t)
                                        for (o = t.length; 0 < o; o -= 1)
                                            if (n = m(c, t.slice(0, o).join("/")))
                                                if (n = m(n, u)) {
                                                    r = n, a = s;
                                                    break e
                                                }! f && h && m(h, u) && (f = m(h, u), l = s)
                                }!r && f && (r = f, a = l), r && (i.splice(0, a, r), e = i.join("/"))
                            }
                            return (r = m(A.pkgs, e)) ? r : e
                        }

                        function r(e) {
                            z && v(document.getElementsByTagName("script"), function(t) {
                                if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === x.contextName) return t.parentNode.removeChild(t), !0
                            })
                        }

                        function i(e) {
                            var t = m(A.paths, e);
                            if (t && H(t) && 1 < t.length) return t.shift(), x.require.undef(e), x.makeRequire(null, {
                                skipMap: !0
                            })([e]), !0
                        }

                        function s(e) {
                            var t, n = e ? e.indexOf("!") : -1;
                            return -1 < n && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                        }

                        function o(e, t, r, i) {
                            var o, u, a = null,
                                f = t ? t.name : null,
                                l = e,
                                c = !0,
                                h = "";
                            return e || (c = !1, e = "_@r" + (q += 1)), e = s(e), a = e[0], e = e[1], a && (a = n(a, f, i), u = m(j, a)), e && (a ? h = u && u.normalize ? u.normalize(e, function(e) {
                                return n(e, f, i)
                            }) : -1 === e.indexOf("!") ? n(e, f, i) : e : (h = n(e, f, i), e = s(h), a = e[0], h = e[1], r = !0, o = x.nameToUrl(h))), r = a && !u && !r ? "_unnormalized" + (W += 1) : "", {
                                prefix: a,
                                name: h,
                                parentMap: t,
                                unnormalized: !!r,
                                url: o,
                                originalName: l,
                                isDefine: c,
                                id: (a ? a + "!" + h : h) + r
                            }
                        }

                        function a(e) {
                            var t = e.id,
                                n = m(O, t);
                            return n || (n = O[t] = new x.Module(e)), n
                        }

                        function f(e, n, r) {
                            var i = e.id,
                                s = m(O, i);
                            t(j, i) && (!s || s.defineEmitComplete) ? "defined" === n && r(j[i]) : (s = a(e), s.error && "error" === n) ? r(s.error) : s.on(n, r)
                        }

                        function l(e, t) {
                            var n = e.requireModules,
                                r = !1;
                            t ? t(e) : (v(n, function(t) {
                                if (t = m(O, t)) t.error = e, t.events.error && (r = !0, t.emit("error", e))
                            }), !r) && g.onError(e)
                        }

                        function c() {
                            R.length && (ha.apply(P, [P.length, 0].concat(R)), R = [])
                        }

                        function h(e) {
                            delete O[e], delete _[e]
                        }

                        function p(e, t, n) {
                            var r = e.map.id;
                            e.error ? e.emit("error", e.error) : (t[r] = !0, v(e.depMaps, function(r, i) {
                                var s = r.id,
                                    o = m(O, s);
                                o && !e.depMatched[i] && !n[s] && (m(t, s) ? (e.defineDep(i, j[s]), e.check()) : p(o, t, n))
                            }), n[r] = !0)
                        }

                        function d() {
                            var e, t, n = (e = 1e3 * A.waitSeconds) && x.startTime + e < (new Date).getTime(),
                                s = [],
                                o = [],
                                u = !1,
                                a = !0;
                            if (!E) {
                                E = !0, B(_, function(e) {
                                    var f = e.map,
                                        l = f.id;
                                    if (e.enabled && (f.isDefine || o.push(e), !e.error))
                                        if (!e.inited && n) i(l) ? u = t = !0 : (s.push(l), r(l));
                                        else if (!e.inited && e.fetched && f.isDefine && (u = !0, !f.prefix)) return a = !1
                                });
                                if (n && s.length) return e = C("timeout", "Load timeout for modules: " + s, null, s), e.contextName = x.contextName, l(e);
                                a && v(o, function(e) {
                                    p(e, {}, {})
                                }), (!n || t) && u && (z || ea) && !L && (L = setTimeout(function() {
                                    L = 0, d()
                                }, 50)), E = !1
                            }
                        }

                        function y(e) {
                            t(j, e[0]) || a(o(e[0], null, !0)).init(e[1], e[2])
                        }

                        function b(e) {
                            var e = e.currentTarget || e.srcElement,
                                t = x.onScriptLoad;
                            return e.detachEvent && !Y ? e.detachEvent("onreadystatechange", t) : e.removeEventListener("load", t, !1), t = x.onScriptError, (!e.detachEvent || Y) && e.removeEventListener("error", t, !1), {
                                node: e,
                                id: e && e.getAttribute("data-requiremodule")
                            }
                        }

                        function w() {
                            var e;
                            for (c(); P.length;) {
                                e = P.shift();
                                if (null === e[0]) return l(C("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                                y(e)
                            }
                        }
                        var E, S, x, k, L, A = {
                                waitSeconds: 7,
                                baseUrl: "./",
                                paths: {},
                                bundles: {},
                                pkgs: {},
                                shim: {},
                                config: {}
                            },
                            O = {},
                            _ = {},
                            D = {},
                            P = [],
                            j = {},
                            F = {},
                            I = {},
                            q = 1,
                            W = 1;
                        return k = {
                            require: function(e) {
                                return e.require ? e.require : e.require = x.makeRequire(e.map)
                            },
                            exports: function(e) {
                                e.usingExports = !0;
                                if (e.map.isDefine) return e.exports ? j[e.map.id] = e.exports : e.exports = j[e.map.id] = {}
                            },
                            module: function(e) {
                                return e.module ? e.module : e.module = {
                                    id: e.map.id,
                                    uri: e.map.url,
                                    config: function() {
                                        return m(A.config, e.map.id) || {}
                                    },
                                    exports: e.exports || (e.exports = {})
                                }
                            }
                        }, S = function(e) {
                            this.events = m(D, e.id) || {}, this.map = e, this.shim = m(A.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
                        }, S.prototype = {
                            init: function(e, t, n, r) {
                                r = r || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = u(this, function(e) {
                                    this.emit("error", e)
                                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
                            },
                            defineDep: function(e, t) {
                                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
                            },
                            fetch: function() {
                                if (!this.fetched) {
                                    this.fetched = !0, x.startTime = (new Date).getTime();
                                    var e = this.map;
                                    if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                                    x.makeRequire(this.map, {
                                        enableBuildCallback: !0
                                    })(this.shim.deps || [], u(this, function() {
                                        return e.prefix ? this.callPlugin() : this.load()
                                    }))
                                }
                            },
                            load: function() {
                                var e = this.map.url;
                                F[e] || (F[e] = !0, x.load(this.map.id, e))
                            },
                            check: function() {
                                if (this.enabled && !this.enabling) {
                                    var e, t, n = this.map.id;
                                    t = this.depExports;
                                    var r = this.exports,
                                        i = this.factory;
                                    if (this.inited) {
                                        if (this.error) this.emit("error", this.error);
                                        else if (!this.defining) {
                                            this.defining = !0;
                                            if (1 > this.depCount && !this.defined) {
                                                if (G(i)) {
                                                    if (this.events.error && this.map.isDefine || g.onError !== ca) try {
                                                        r = x.execCb(n, i, t, r)
                                                    } catch (s) {
                                                        e = s
                                                    } else r = x.execCb(n, i, t, r);
                                                    this.map.isDefine && void 0 === r && ((t = this.module) ? r = t.exports : this.usingExports && (r = this.exports));
                                                    if (e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", l(this.error = e)
                                                } else r = i;
                                                this.exports = r, this.map.isDefine && !this.ignore && (j[n] = r, g.onResourceLoad) && g.onResourceLoad(x, this.map, this.depMaps), h(n), this.defined = !0
                                            }
                                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                                        }
                                    } else this.fetch()
                                }
                            },
                            callPlugin: function() {
                                var e = this.map,
                                    r = e.id,
                                    i = o(e.prefix);
                                this.depMaps.push(i), f(i, "defined", u(this, function(i) {
                                    var s, c;
                                    c = m(I, this.map.id);
                                    var p = this.map.name,
                                        d = this.map.parentMap ? this.map.parentMap.name : null,
                                        v = x.makeRequire(e.parentMap, {
                                            enableBuildCallback: !0
                                        });
                                    if (this.map.unnormalized) {
                                        if (i.normalize && (p = i.normalize(p, function(e) {
                                                return n(e, d, !0)
                                            }) || ""), i = o(e.prefix + "!" + p, this.map.parentMap), f(i, "defined", u(this, function(e) {
                                                this.init([], function() {
                                                    return e
                                                }, null, {
                                                    enabled: !0,
                                                    ignore: !0
                                                })
                                            })), c = m(O, i.id)) this.depMaps.push(i), this.events.error && c.on("error", u(this, function(e) {
                                            this.emit("error", e)
                                        })), c.enable()
                                    } else c ? (this.map.url = x.nameToUrl(c), this.load()) : (s = u(this, function(e) {
                                        this.init([], function() {
                                            return e
                                        }, null, {
                                            enabled: !0
                                        })
                                    }), s.error = u(this, function(e) {
                                        this.inited = !0, this.error = e, e.requireModules = [r], B(O, function(e) {
                                            0 === e.map.id.indexOf(r + "_unnormalized") && h(e.map.id)
                                        }), l(e)
                                    }), s.fromText = u(this, function(n, i) {
                                        var u = e.name,
                                            f = o(u),
                                            c = M;
                                        i && (n = i), c && (M = !1), a(f), t(A.config, r) && (A.config[u] = A.config[r]);
                                        try {
                                            g.exec(n)
                                        } catch (h) {
                                            return l(C("fromtexteval", "fromText eval for " + r + " failed: " + h, h, [r]))
                                        }
                                        c && (M = !0), this.depMaps.push(f), x.completeLoad(u), v([u], s)
                                    }), i.load(e.name, v, s, A))
                                })), x.enable(i, this), this.pluginMaps[i.id] = i
                            },
                            enable: function() {
                                _[this.map.id] = this, this.enabling = this.enabled = !0, v(this.depMaps, u(this, function(e, n) {
                                    var r, i;
                                    if ("string" == typeof e) {
                                        e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[n] = e;
                                        if (r = m(k, e.id)) {
                                            this.depExports[n] = r(this);
                                            return
                                        }
                                        this.depCount += 1, f(e, "defined", u(this, function(e) {
                                            this.defineDep(n, e), this.check()
                                        })), this.errback && f(e, "error", u(this, this.errback))
                                    }
                                    r = e.id, i = O[r], !t(k, r) && i && !i.enabled && x.enable(e, this)
                                })), B(this.pluginMaps, u(this, function(e) {
                                    var t = m(O, e.id);
                                    t && !t.enabled && x.enable(e, this)
                                })), this.enabling = !1, this.check()
                            },
                            on: function(e, t) {
                                var n = this.events[e];
                                n || (n = this.events[e] = []), n.push(t)
                            },
                            emit: function(e, t) {
                                v(this.events[e], function(e) {
                                    e(t)
                                }), "error" === e && delete this.events[e]
                            }
                        }, x = {
                            config: A,
                            contextName: e,
                            registry: O,
                            defined: j,
                            urlFetched: F,
                            defQueue: P,
                            Module: S,
                            makeModuleMap: o,
                            nextTick: g.nextTick,
                            onError: l,
                            configure: function(e) {
                                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                                var t = A.shim,
                                    n = {
                                        paths: !0,
                                        bundles: !0,
                                        config: !0,
                                        map: !0
                                    };
                                B(e, function(e, t) {
                                    n[t] ? (A[t] || (A[t] = {}), U(A[t], e, !0, !0)) : A[t] = e
                                }), e.bundles && B(e.bundles, function(e, t) {
                                    v(e, function(e) {
                                        e !== t && (I[e] = t)
                                    })
                                }), e.shim && (B(e.shim, function(e, n) {
                                    H(e) && (e = {
                                        deps: e
                                    }), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = x.makeShimExports(e)), t[n] = e
                                }), A.shim = t), e.packages && v(e.packages, function(e) {
                                    var t, e = "string" == typeof e ? {
                                        name: e
                                    } : e;
                                    t = e.name, e.location && (A.paths[t] = e.location), A.pkgs[t] = e.name + "/" + (e.main || "main").replace(ia, "").replace(Q, "")
                                }), B(O, function(e, t) {
                                    !e.inited && !e.map.unnormalized && (e.map = o(t))
                                }), (e.deps || e.callback) && x.require(e.deps || [], e.callback)
                            },
                            makeShimExports: function(e) {
                                return function() {
                                    var t;
                                    return e.init && (t = e.init.apply(ba, arguments)), t || e.exports && da(e.exports)
                                }
                            },
                            makeRequire: function(i, s) {
                                function u(n, r, f) {
                                    var c, h;
                                    return s.enableBuildCallback && r && G(r) && (r.__requireJsBuild = !0), "string" == typeof n ? G(r) ? l(C("requireargs", "Invalid require call"), f) : i && t(k, n) ? k[n](O[i.id]) : g.get ? g.get(x, n, i, u) : (c = o(n, i, !1, !0), c = c.id, t(j, c) ? j[c] : l(C("notloaded", 'Module name "' + c + '" has not been loaded yet for context: ' + e + (i ? "" : ". Use require([])")))) : (w(), x.nextTick(function() {
                                        w(), h = a(o(null, i)), h.skipMap = s.skipMap, h.init(n, r, f, {
                                            enabled: !0
                                        }), d()
                                    }), u)
                                }
                                return s = s || {}, U(u, {
                                    isBrowser: z,
                                    toUrl: function(e) {
                                        var t, r = e.lastIndexOf("."),
                                            s = e.split("/")[0];
                                        return -1 !== r && ("." !== s && ".." !== s || 1 < r) && (t = e.substring(r, e.length), e = e.substring(0, r)), x.nameToUrl(n(e, i && i.id, !0), t, !0)
                                    },
                                    defined: function(e) {
                                        return t(j, o(e, i, !1, !0).id)
                                    },
                                    specified: function(e) {
                                        return e = o(e, i, !1, !0).id, t(j, e) || t(O, e)
                                    }
                                }), i || (u.undef = function(e) {
                                    c();
                                    var t = o(e, i, !0),
                                        n = m(O, e);
                                    r(e), delete j[e], delete F[t.url], delete D[e], T(P, function(t, n) {
                                        t[0] === e && P.splice(n, 1)
                                    }), n && (n.events.defined && (D[e] = n.events), h(e))
                                }), u
                            },
                            enable: function(e) {
                                m(O, e.id) && a(e).enable()
                            },
                            completeLoad: function(e) {
                                var n, r, s = m(A.shim, e) || {},
                                    o = s.exports;
                                for (c(); P.length;) {
                                    r = P.shift();
                                    if (null === r[0]) {
                                        r[0] = e;
                                        if (n) break;
                                        n = !0
                                    } else r[0] === e && (n = !0);
                                    y(r)
                                }
                                r = m(O, e);
                                if (!n && !t(j, e) && r && !r.inited) {
                                    if (A.enforceDefine && (!o || !da(o))) return i(e) ? void 0 : l(C("nodefine", "No define call for " + e, null, [e]));
                                    y([e, s.deps || [], s.exportsFn])
                                }
                                d()
                            },
                            nameToUrl: function(e, t, n) {
                                var r, i, s;
                                (r = m(A.pkgs, e)) && (e = r);
                                if (r = m(I, e)) return x.nameToUrl(r, t, n);
                                if (g.jsExtRegExp.test(e)) r = e + (t || "");
                                else {
                                    r = A.paths, e = e.split("/");
                                    for (i = e.length; 0 < i; i -= 1)
                                        if (s = e.slice(0, i).join("/"), s = m(r, s)) {
                                            H(s) && (s = s[0]), e.splice(0, i, s);
                                            break
                                        } r = e.join("/"), r += t || (/^data\:|\?/.test(r) || n ? "" : ".js"), r = ("/" === r.charAt(0) || r.match(/^[\w\+\.\-]+:/) ? "" : A.baseUrl) + r
                                }
                                return A.urlArgs ? r + ((-1 === r.indexOf("?") ? "?" : "&") + A.urlArgs) : r
                            },
                            load: function(e, t) {
                                g.load(x, e, t)
                            },
                            execCb: function(e, t, n, r) {
                                return t.apply(r, n)
                            },
                            onScriptLoad: function(e) {
                                if ("load" === e.type || ja.test((e.currentTarget || e.srcElement).readyState)) N = null, e = b(e), x.completeLoad(e.id)
                            },
                            onScriptError: function(e) {
                                var t = b(e);
                                if (!i(t.id)) return l(C("scripterror", "Script error for: " + t.id, e, [t.id]))
                            }
                        }, x.require = x.makeRequire(), x
                    }
                    var g, x, y, D, I, E, N, J, s, O, ka = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
                        la = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                        Q = /\.js$/,
                        ia = /^\.\//;
                    x = Object.prototype;
                    var K = x.toString,
                        fa = x.hasOwnProperty,
                        ha = Array.prototype.splice,
                        z = "undefined" != typeof window && "undefined" != typeof navigator && !!window.document,
                        ea = !z && "undefined" != typeof importScripts,
                        ja = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
                        Y = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
                        F = {},
                        q = {},
                        R = [],
                        M = !1;
                    if ("undefined" == typeof define) {
                        if ("undefined" != typeof requirejs) {
                            if (G(requirejs)) return;
                            q = requirejs, requirejs = void 0
                        }
                        "undefined" != typeof require && !G(require) && (q = require, require = void 0), g = requirejs = function(e, t, n, r) {
                            var i, s = "_";
                            return !H(e) && "string" != typeof e && (i = e, H(t) ? (e = t, t = n, n = r) : e = []), i && i.context && (s = i.context), (r = m(F, s)) || (r = F[s] = g.s.newContext(s)), i && r.configure(i), r.require(e, t, n)
                        }, g.config = function(e) {
                            return g(e)
                        }, g.nextTick = "undefined" != typeof setTimeout ? function(e) {
                            setTimeout(e, 4)
                        } : function(e) {
                            e()
                        }, require || (require = g), g.version = "2.1.14", g.jsExtRegExp = /^\/|:|\?|\.js$/, g.isBrowser = z, x = g.s = {
                            contexts: F,
                            newContext: ga
                        }, g({}), v(["toUrl", "undef", "defined", "specified"], function(e) {
                            g[e] = function() {
                                var t = F._;
                                return t.require[e].apply(t, arguments)
                            }
                        }), z && (y = x.head = document.getElementsByTagName("head")[0], D = document.getElementsByTagName("base")[0]) && (y = x.head = D.parentNode), g.onError = ca, g.createNode = function(e) {
                            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                            return t.type = e.scriptType || "text/javascript", t.charset = "utf-8", t.async = !0, t
                        }, g.load = function(e, t, n) {
                            var r = e && e.config || {};
                            if (z) return r = g.createNode(r, t, n), r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), r.attachEvent && !(r.attachEvent.toString && 0 > r.attachEvent.toString().indexOf("[native code")) && !Y ? (M = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)) : (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)), r.src = n, J = r, D ? y.insertBefore(r, D) : y.appendChild(r), J = null, r;
                            if (ea) try {
                                importScripts(n), e.completeLoad(t)
                            } catch (i) {
                                e.onError(C("importscripts", "importScripts failed for " + t + " at " + n, i, [t]))
                            }
                        }, q.skipDataMain = !0, z && !q.skipDataMain && T(document.getElementsByTagName("script"), function(e) {
                            y || (y = e.parentNode);
                            if (I = e.getAttribute("data-main")) return s = I, q.baseUrl || (E = s.split("/"), s = E.pop(), O = E.length ? E.join("/") + "/" : "./", q.baseUrl = O), s = s.replace(Q, ""), g.jsExtRegExp.test(s) && (s = I), q.deps = q.deps ? q.deps.concat(s) : [s], !0
                        }), define = function(e, t, n) {
                            var r, i;
                            "string" != typeof e && (n = t, t = e, e = null), H(t) || (n = t, t = null), !t && G(n) && (t = [], n.length && (n.toString().replace(ka, "").replace(la, function(e, n) {
                                t.push(n)
                            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), M && ((r = J) || (N && "interactive" === N.readyState || T(document.getElementsByTagName("script"), function(e) {
                                if ("interactive" === e.readyState) return N = e
                            }), r = N), r && (e || (e = r.getAttribute("data-requiremodule")), i = F[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : R).push([e, t, n])
                        }, define.amd = {
                            jQuery: !0
                        }, g.exec = function(b) {
                            return eval(b)
                        }, g(q)
                    }
                    tp.prototype = function() {
                        function t(e, t) {
                            return e.lastIndexOf("/") === e.length - 1 && (e = e.substr(0, e.length - 1)), e.match(/\/v3$/) && (e = e.substr(0, e.lastIndexOf("/v3"))), e.match(/\/api$/) && (e = e.substr(0, e.lastIndexOf("/api"))), e.match(/^(http[s]?:)?\/\//) || (e = "//" + e), typeof t != "undefined" && t && !e.match(/^http[s]?:/) && (e = "https:" + e), e
                        }
                        var e = [],
                            n = function(e) {
                                var n = "https://buy.tinypass.com";
                                return tp.sandbox === !0 && (tp.endpoint = "sandbox"), tp.endpoint && (tp.endpoint === "sandbox" ? n = "https://sandbox.tinypass.com" : tp.endpoint !== "prod" && tp.endpoint !== "production" && (n = tp.endpoint)), t(n, e)
                            },
                            r = function() {
                                return n() + "/api/v3"
                            },
                            s = function() {
                                var e;
                                return tp.sandbox === !0 ? e = "https://sandbox.tinypass.com" : typeof tp.endpoint == "undefined" || tp.endpoint === null || tp.endpoint === "" || tp.endpoint === "prod" || tp.endpoint === "production" || tp.endpoint.match(/(buy|api|api-v3)\.tinypass\.com/) ? e = "https://api-v3.tinypass.com" : e = tp.endpoint, t(e, !0)
                            },
                            o = function(e) {
                                var n = "https://experience.tinypass.com";
                                return tp.sandbox === !0 && (tp.endpoint = "sandbox"), tp.endpoint && (tp.endpoint === "sandbox" ? n = "https://sandbox.tinypass.com" : tp.endpoint !== "prod" && tp.endpoint !== "production" && (n = tp.endpoint, n = n.replace("//buy.tinypass.com", "//experience.tinypass.com"), n = n.replace("//api.tinypass.com", "//experience.tinypass.com"), n = n.replace("//buy-au.piano.io", "//experience-au.piano.io"), n = n.replace("//api-au.piano.io", "//experience-au.piano.io"), n = n.replace("//buy-ap.piano.io", "//experience-ap.piano.io"), n = n.replace("//api-ap.piano.io", "//experience-ap.piano.io"))), t(n, e)
                            },
                            u = function() {
                                return tp.sandbox === !0 || tp.endpoint === "sandbox" || tp.endpoint.indexOf("//sandbox.tinypass.com") !== -1
                            },
                            a = {
                                constructor: tp,
                                pageTrack: function(e, t) {
                                    tp.require(["main"], function(n) {
                                        n.pageTrack(e, t)
                                    })
                                },
                                trackPage: function(e, t) {
                                    tp.require(["main"], function(n) {
                                        n.pageTrack(e, t)
                                    })
                                },
                                trackPageUnload: function() {
                                    tp.require(["main"], function(e) {
                                        e.trackPageUnload()
                                    })
                                },
                                trackAds: function(e) {
                                    tp.require(["main"], function(t) {
                                        t.trackAds(e)
                                    })
                                },
                                trackAd: function(e, t, n) {
                                    tp.require(["main"], function(r) {
                                        r.trackAd(e, t, n)
                                    })
                                },
                                onLoad: function(t) {
                                    e.push(t)
                                },
                                getEndpointRoot: function(e) {
                                    return n(e)
                                },
                                getExperienceEndpoint: function(e) {
                                    return o(e)
                                },
                                getApiEndpoint: function() {
                                    return r()
                                },
                                getTrackingEndpoint: function() {
                                    return s()
                                },
                                isSandbox: function() {
                                    return u()
                                }
                            };
                        return a.require = require, a.define = define, a.loadRequireJs = function(e) {
                            a.isInitRequired = !0;
                            var t = ["jq", "main", "api", "offer", "template", "myaccount", "require-css/css", "util", "postmessage", "user", "meter", "fingerprint", "jwtDecode", "janrain", "gigya", "tinypassAccounts", "tinypassLogin", "containerUtils", "eventUtils", "experience", "activetimer", "scrollDepth", "ifvisible", "doubleClickForPublisher", "viewportExit", "condeUserProvider", "log", "pianoId", "pianoIdLite", "observer", "applePay", "applePayIntegrationService", "stripeApplePayIntegrationService", "obi3DSChallenge", "idle", "gaService", "interaction", "pianoEsp", "versionService", "amp", "performanceMetrics", "swg", "fbpixel", "fbsubscriptions", "doubleOptIn", "tinypassErrorHandler", "newscycle", "cxense", "recWidgetService", "sha1", "itp"];
                            for (var n = t.length; n--;) window.tp[t[n]] = null;
                            var r = function() {
                                    var e = tp.getEndpointRoot();
                                    return e.indexOf("//buy.tinypass.com") !== -1 && (e = e.replace(/\/\/buy.tinypass.com/, "//cdn.tinypass.com")), e + "/api/libs"
                                },
                                i = function() {
                                    var e = tp.getEndpointRoot();
                                    return e.indexOf("//buy.tinypass.com") !== -1 && (e = e.replace(/\/\/buy.tinypass.com/, "//cdn.tinypass.com")), e + "/api/libs/external"
                                };
                            window.tp.require.config({
                                baseUrl: r(),
                                urlArgs: tp.debug ? "cachebust=" + (new Date).getTime() : ""
                            }), tp.require(["jq", "main", "api", "offer", "template", "myaccount", "require-css/css", "util", "postmessage", "user", "meter", "fingerprint", "jwtDecode", "janrain", "gigya", "tinypassAccounts", "tinypassLogin", "containerUtils", "eventUtils", "experience", "activetimer", "scrollDepth", "ifvisible", "doubleClickForPublisher", "viewportExit", "condeUserProvider", "pianoId", "pianoIdLite", "observer", "applePay", "applePayIntegrationService", "stripeApplePayIntegrationService", "obi3DSChallenge", "idle", "interaction", "require-css/css!styles/offer", "log", "gaService", "pianoEsp", "versionService", "amp", "performanceMetrics", "swg", "fbpixel", "fbsubscriptions", "doubleOptIn", "tinypassErrorHandler", "newscycle", "cxense", "recWidgetService", "sha1", "itp"], function(t) {
                                var n;
                                window.tp.require.config({
                                    baseUrl: i(),
                                    urlArgs: tp.debug ? "cachebust=" + (new Date).getTime() : ""
                                });
                                for (n = 0; n < arguments.length; ++n) {
                                    if (!arguments[n] || !arguments[n].name) continue;
                                    if (arguments[n].name === "main" && !arguments[n].init) continue;
                                    window.tp[arguments[n].name] = arguments[n]
                                }
                                window.tp.jq = t, window.tp.isRequireLoaded = !0;
                                if (__tp) {
                                    var r = [];
                                    for (n = 0; n < __tp.length; n++) __tp[n][0] === "init" && r.push(__tp[n][1]);
                                    r.length && tp._init(r), __tp = null
                                }
                                tp.externalLibraries.length ? require(tp.externalLibraries, function() {
                                    tp.externalLibraries = [];
                                    if (tp.externalLibrariesCallbacks)
                                        for (var t = 0; t < tp.externalLibrariesCallbacks.length; ++t) tp.externalLibrariesCallbacks[t]();
                                    tp.externalLibrariesCallbacks = [], e && e()
                                }) : e && e(), tp.loadRequireReady(), window.tp.getGAClientId() && window.tp.gaService.setClientId(window.tp.getGAClientId())
                            })
                        }, a.loadRequireReady = function() {
                            a.isInitRequireFinished = !0;
                            for (i = 0; i < a.initFinishedCallbacks.length; ++i) a.initFinishedCallbacks[i]();
                            a.initFinishedCallbacks = []
                        }, a.push = function() {
                            var e, t, n;
                            for (e = 0; e < arguments.length; e++) {
                                n = arguments[e], t = n.shift();
                                if (typeof t == "string" || t instanceof String) {
                                    if (!window.tp[t]) {
                                        console.error("Undefined method " + t);
                                        return
                                    }
                                    window.tp[t].apply(window.tp, n)
                                } else t.apply(window.tp, n)
                            }
                        }, a.appList = [], a.isInitRequired = !1, a.isInitRequireFinished = !1, a.isRequireLoaded = !1, a.isInitialized = !1, a.initCallbacks = [], a.initFinishedCallbacks = [], a._init = function(e) {
                            var t, n = [];
                            Array.isArray(e) ? n = e : e && n.push(e);
                            if (!tp.isRequireLoaded) {
                                for (var r = 0; r < n.length; r++) tp.initCallbacks.push(function(e) {
                                    return function() {
                                        try {
                                            n[e]()
                                        } catch (t) {
                                            console.error(t), tp.tinypassErrorHandler.addError(t)
                                        }
                                    }
                                }(r));
                                setTimeout(function() {
                                    tp._init()
                                }, 50)
                            } else {
                                window.tp.util && window.tp.util.hasQueryParamByName("xpdebug") && tp.setDebug(!0), tp.api.setUserProvider(tp.user.getProvider()), tp.util.setTpccCookies();
                                if (tp.util.isIOsUiWebView() && !tp.user.isUserValid() && tp.util.getQueryParamByName("userToken")) {
                                    var i = tp.util.getQueryParamByName("cookieDomain"),
                                        s = tp.util.getQueryParamByName("userToken"),
                                        o = tp.util.getQueryParamByName("tokenListValue");
                                    tp.util.setAccessTokenListCookie({
                                        cookie_domain: i,
                                        value: o
                                    }, s), tp.util.removeQueryParamByName("userToken"), tp.util.removeQueryParamByName("cookieDomain"), tp.util.removeQueryParamByName("tokenListValue")
                                }
                                var u = tp.aid;
                                tp.user.providerInit();
                                for (t = 0; t < tp.initCallbacks.length; ++t) try {
                                    tp.initCallbacks[t]()
                                } catch (a) {
                                    console.error(a), tp.tinypassErrorHandler.addError(a)
                                }
                                tp.isInitialized = !0, tp.initCallbacks = [];
                                if (tp.events) {
                                    for (t = 0; t < tp.events.length; t++) tp.events[t]();
                                    tp.events = []
                                }
                                for (var r = 0; r < n.length; r++) try {
                                    n[r]()
                                } catch (a) {
                                    console.error(a), tp.tinypassErrorHandler.addError(a)
                                }
                                tp.appList.indexOf(tp.aid) < 0 && (tp.appList.push(tp.aid), tp.main.init()), u || tp.api.callApi("/anon/error/log", {
                                    log_message: "Incorrect aid integration: " + tp.aid + " url: " + window.location.href
                                })
                            }
                        }, a.init = function(e) {
                            var t = function() {
                                a._init(e)
                            };
                            a.isInitRequired ? a.isInitRequireFinished ? t() : a.initFinishedCallbacks.push(t) : window.tp.loadRequireJs(t)
                        }, a
                    }()
                })(this)
            }(), tp = new tp, window.tp = tp;
        if (__tp) {
            for (var i = 0; i < __tp.length; i++) __tp[i][0] !== "init" && tp.push(__tp[i]);
            tp.loadRequireJs()
        }
    }, window.___tp(), tp.define("tinypass", function() {}),
    function(e) {
        (function(e, t) {
            typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        })(typeof e != "undefined" ? e : this, function(e, t) {
            function y(e) {
                var t = !!e && "length" in e && e.length,
                    n = p.type(e);
                return n === "function" || p.isWindow(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
            }

            function N(e, t, n) {
                if (p.isFunction(t)) return p.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return p.grep(e, function(e) {
                    return e === t !== n
                });
                if (typeof t == "string") {
                    if (T.test(t)) return p.filter(t, e, n);
                    t = p.filter(t, e)
                }
                return p.grep(e, function(e) {
                    return p.inArray(e, t) > -1 !== n
                })
            }

            function M(e, t) {
                do e = e[t]; while (e && e.nodeType !== 1);
                return e
            }

            function D(e) {
                var t = {};
                return p.each(e.match(_) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function H() {
                r.addEventListener ? (r.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B)) : (r.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
            }

            function B() {
                if (r.addEventListener || e.event.type === "load" || r.readyState === "complete") H(), p.ready()
            }

            function R(e, t, n) {
                if (n === undefined && e.nodeType === 1) {
                    var r = "data-" + t.replace(q, "-$1").toLowerCase();
                    n = e.getAttribute(r);
                    if (typeof n == "string") {
                        try {
                            n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                        } catch (i) {}
                        p.data(e, t, n)
                    } else n = undefined
                }
                return n
            }

            function U(e) {
                var t;
                for (t in e) {
                    if (t === "data" && p.isEmptyObject(e[t])) continue;
                    if (t !== "toJSON") return !1
                }
                return !0
            }

            function z(e, t, r, i) {
                if (!F(e)) return;
                var s, o, u = p.expando,
                    a = e.nodeType,
                    f = a ? p.cache : e,
                    l = a ? e[u] : e[u] && u;
                if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
                l || (a ? l = e[u] = n.pop() || p.guid++ : l = u), f[l] || (f[l] = a ? {} : {
                    toJSON: p.noop
                });
                if (typeof t == "object" || typeof t == "function") i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t);
                return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== undefined && (o[p.camelCase(t)] = r), typeof t == "string" ? (s = o[t], s == null && (s = o[p.camelCase(t)])) : s = o, s
            }

            function W(e, t, n) {
                if (!F(e)) return;
                var r, i, s = e.nodeType,
                    o = s ? p.cache : e,
                    u = s ? e[p.expando] : p.expando;
                if (!o[u]) return;
                if (t) {
                    r = n ? o[u] : o[u].data;
                    if (r) {
                        p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                        while (i--) delete r[t[i]];
                        if (n ? !U(r) : !p.isEmptyObject(r)) return
                    }
                }
                if (!n) {
                    delete o[u].data;
                    if (!U(o[u])) return
                }
                s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = undefined
            }

            function K(e, t, n, r) {
                var i, s = 1,
                    o = 20,
                    u = r ? function() {
                        return r.cur()
                    } : function() {
                        return p.css(e, t, "")
                    },
                    a = u(),
                    f = n && n[3] || (p.cssNumber[t] ? "" : "px"),
                    l = (p.cssNumber[t] || f !== "px" && +a) && V.exec(p.css(e, t));
                if (l && l[3] !== f) {
                    f = f || l[3], n = n || [], l = +a || 1;
                    do s = s || ".5", l /= s, p.style(e, t, l + f); while (s !== (s = u() / a) && s !== 1 && --o)
                }
                return n && (l = +l || +a || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = f, r.start = l, r.end = i)), i
            }

            function nt(e) {
                var t = tt.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    while (t.length) n.createElement(t.pop());
                return n
            }

            function it(e, t) {
                var n, r, i = 0,
                    s = typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll(t || "*") : undefined;
                if (!s)
                    for (s = [], n = e.childNodes || e;
                        (r = n[i]) != null; i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, it(r, t));
                return t === undefined || t && p.nodeName(e, t) ? p.merge([e], s) : s
            }

            function st(e, t) {
                var n, r = 0;
                for (;
                    (n = e[r]) != null; r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
            }

            function at(e) {
                G.test(e.type) && (e.defaultChecked = e.checked)
            }

            function ft(e, t, n, r, i) {
                var s, o, u, a, f, l, h, d = e.length,
                    v = nt(t),
                    m = [],
                    g = 0;
                for (; g < d; g++) {
                    o = e[g];
                    if (o || o === 0)
                        if (p.type(o) === "object") p.merge(m, o.nodeType ? [o] : o);
                        else if (!ot.test(o)) m.push(t.createTextNode(o));
                    else {
                        a = a || v.appendChild(t.createElement("div")), f = (Y.exec(o) || ["", ""])[1].toLowerCase(), h = rt[f] || rt._default, a.innerHTML = h[1] + p.htmlPrefilter(o) + h[2], s = h[0];
                        while (s--) a = a.lastChild;
                        !c.leadingWhitespace && et.test(o) && m.push(t.createTextNode(et.exec(o)[0]));
                        if (!c.tbody) {
                            o = f === "table" && !ut.test(o) ? a.firstChild : h[1] === "<table>" && !ut.test(o) ? a : 0, s = o && o.childNodes.length;
                            while (s--) p.nodeName(l = o.childNodes[s], "tbody") && !l.childNodes.length && o.removeChild(l)
                        }
                        p.merge(m, a.childNodes), a.textContent = "";
                        while (a.firstChild) a.removeChild(a.firstChild);
                        a = v.lastChild
                    }
                }
                a && v.removeChild(a), c.appendChecked || p.grep(it(m, "input"), at), g = 0;
                while (o = m[g++]) {
                    if (r && p.inArray(o, r) > -1) {
                        i && i.push(o);
                        continue
                    }
                    u = p.contains(o.ownerDocument, o), a = it(v.appendChild(o), "script"), u && st(a);
                    if (n) {
                        s = 0;
                        while (o = a[s++]) Z.test(o.type || "") && n.push(o)
                    }
                }
                return a = null, v
            }

            function vt() {
                return !0
            }

            function mt() {
                return !1
            }

            function gt() {
                try {
                    return r.activeElement
                } catch (e) {}
            }

            function yt(e, t, n, r, i, s) {
                var o, u;
                if (typeof t == "object") {
                    typeof n != "string" && (r = r || n, n = undefined);
                    for (u in t) yt(e, u, n, r, t[u], s);
                    return e
                }
                r == null && i == null ? (i = n, r = n = undefined) : i == null && (typeof n == "string" ? (i = r, r = undefined) : (i = r, r = n, n = undefined));
                if (i === !1) i = mt;
                else if (!i) return e;
                return s === 1 && (o = i, i = function(e) {
                    return p().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = p.guid++)), e.each(function() {
                    p.event.add(this, t, i, r, n)
                })
            }

            function Lt(e, t) {
                return p.nodeName(e, "table") && p.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function At(e) {
                return e.type = (p.find.attr(e, "type") !== null) + "/" + e.type, e
            }

            function Ot(e) {
                var t = Tt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Mt(e, t) {
                if (t.nodeType !== 1 || !p.hasData(e)) return;
                var n, r, i, s = p._data(e),
                    o = p._data(t, s),
                    u = s.events;
                if (u) {
                    delete o.handle, o.events = {};
                    for (n in u)
                        for (r = 0, i = u[n].length; r < i; r++) p.event.add(t, n, u[n][r])
                }
                o.data && (o.data = p.extend({}, o.data))
            }

            function _t(e, t) {
                var n, r, i;
                if (t.nodeType !== 1) return;
                n = t.nodeName.toLowerCase();
                if (!c.noCloneEvent && t[p.expando]) {
                    i = p._data(t);
                    for (r in i.events) p.removeEvent(t, r, i.handle);
                    t.removeAttribute(p.expando)
                }
                if (n === "script" && t.text !== e.text) At(t).text = e.text, Ot(t);
                else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
                else if (n === "input" && G.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
                else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            }

            function Dt(e, t, n, r) {
                t = s.apply([], t);
                var i, o, u, a, f, l, h = 0,
                    d = e.length,
                    v = d - 1,
                    m = t[0],
                    g = p.isFunction(m);
                if (g || d > 1 && typeof m == "string" && !c.checkClone && xt.test(m)) return e.each(function(i) {
                    var s = e.eq(i);
                    g && (t[0] = m.call(this, i, s.html())), Dt(s, t, n, r)
                });
                if (d) {
                    l = ft(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, l.childNodes.length === 1 && (l = i);
                    if (i || r) {
                        a = p.map(it(l, "script"), At), u = a.length;
                        for (; h < d; h++) o = l, h !== v && (o = p.clone(o, !0, !0), u && p.merge(a, it(o, "script"))), n.call(e[h], o, h);
                        if (u) {
                            f = a[a.length - 1].ownerDocument, p.map(a, Ot);
                            for (h = 0; h < u; h++) o = a[h], Z.test(o.type || "") && !p._data(o, "globalEval") && p.contains(f, o) && (o.src ? p._evalUrl && p._evalUrl(o.src) : p.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Nt, "")))
                        }
                        l = i = null
                    }
                }
                return e
            }

            function Pt(e, t, n) {
                var r, i = t ? p.filter(t, e) : e,
                    s = 0;
                for (;
                    (r = i[s]) != null; s++) !n && r.nodeType === 1 && p.cleanData(it(r)), r.parentNode && (n && p.contains(r.ownerDocument, r) && st(it(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function jt(e, t) {
                var n = p(t.createElement(e)).appendTo(t.body),
                    r = p.css(n[0], "display");
                return n.detach(), r
            }

            function Ft(e) {
                var t = r,
                    n = Bt[e];
                if (!n) {
                    n = jt(e, t);
                    if (n === "none" || !n) Ht = (Ht || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ht[0].contentWindow || Ht[0].contentDocument).document, t.write(), t.close(), n = jt(e, t), Ht.detach();
                    Bt[e] = n
                }
                return n
            }

            function Vt(e, t) {
                return {
                    get: function() {
                        if (e()) {
                            delete this.get;
                            return
                        }
                        return (this.get = t).apply(this, arguments)
                    }
                }
            }

            function tn(e) {
                if (e in en) return e;
                var t = e.charAt(0).toUpperCase() + e.slice(1),
                    n = Zt.length;
                while (n--) {
                    e = Zt[n] + t;
                    if (e in en) return e
                }
            }

            function nn(e, t) {
                var n, r, i, s = [],
                    o = 0,
                    u = e.length;
                for (; o < u; o++) {
                    r = e[o];
                    if (!r.style) continue;
                    s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && J(r) && (s[o] = p._data(r, "olddisplay", Ft(r.nodeName)))) : (i = J(r), (n && n !== "none" || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display")))
                }
                for (o = 0; o < u; o++) {
                    r = e[o];
                    if (!r.style) continue;
                    if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
                }
                return e
            }

            function rn(e, t, n) {
                var r = Qt.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function sn(e, t, n, r, i) {
                var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                    o = 0;
                for (; s < 4; s += 2) n === "margin" && (o += p.css(e, n + $[s], !0, i)), r ? (n === "content" && (o -= p.css(e, "padding" + $[s], !0, i)), n !== "margin" && (o -= p.css(e, "border" + $[s] + "Width", !0, i))) : (o += p.css(e, "padding" + $[s], !0, i), n !== "padding" && (o += p.css(e, "border" + $[s] + "Width", !0, i)));
                return o
            }

            function on(e, t, n) {
                var r = !0,
                    i = t === "width" ? e.offsetWidth : e.offsetHeight,
                    s = zt(e),
                    o = c.boxSizing && p.css(e, "boxSizing", !1, s) === "border-box";
                if (i <= 0 || i == null) {
                    i = Wt(e, t, s);
                    if (i < 0 || i == null) i = e.style[t];
                    if (qt.test(i)) return i;
                    r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + sn(e, t, n || (o ? "border" : "content"), r, s) + "px"
            }

            function un(e, t, n, r, i) {
                return new un.prototype.init(e, t, n, r, i)
            }

            function hn() {
                return e.setTimeout(function() {
                    an = undefined
                }), an = p.now()
            }

            function pn(e, t) {
                var n, r = {
                        height: e
                    },
                    i = 0;
                t = t ? 1 : 0;
                for (; i < 4; i += 2 - t) n = $[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function dn(e, t, n) {
                var r, i = (gn.tweeners[t] || []).concat(gn.tweeners["*"]),
                    s = 0,
                    o = i.length;
                for (; s < o; s++)
                    if (r = i[s].call(n, t, e)) return r
            }

            function vn(e, t, n) {
                var r, i, s, o, u, a, f, l, h = this,
                    d = {},
                    v = e.style,
                    m = e.nodeType && J(e),
                    g = p._data(e, "fxshow");
                n.queue || (u = p._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || a()
                }), u.unqueued++, h.always(function() {
                    h.always(function() {
                        u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
                    })
                })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = f === "none" ? p._data(e, "olddisplay") || Ft(e.nodeName) : f, l === "inline" && p.css(e, "float") === "none" && (!c.inlineBlockNeedsLayout || Ft(e.nodeName) === "inline" ? v.display = "inline-block" : v.zoom = 1)), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
                    v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
                }));
                for (r in t) {
                    i = t[r];
                    if (ln.exec(i)) {
                        delete t[r], s = s || i === "toggle";
                        if (i === (m ? "hide" : "show")) {
                            if (i !== "show" || !g || g[r] === undefined) continue;
                            m = !0
                        }
                        d[r] = g && g[r] || p.style(e, r)
                    } else f = undefined
                }
                if (!p.isEmptyObject(d)) {
                    g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(function() {
                        p(e).hide()
                    }), h.done(function() {
                        var t;
                        p._removeData(e, "fxshow");
                        for (t in d) p.style(e, t, d[t])
                    });
                    for (r in d) o = dn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
                } else(f === "none" ? Ft(e.nodeName) : f) === "inline" && (v.display = f)
            }

            function mn(e, t) {
                var n, r, i, s, o;
                for (n in e) {
                    r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r];
                    if (o && "expand" in o) {
                        s = o.expand(s), delete e[r];
                        for (n in s) n in e || (e[n] = s[n], t[n] = i)
                    } else t[r] = i
                }
            }

            function gn(e, t, n) {
                var r, i, s = 0,
                    o = gn.prefilters.length,
                    u = p.Deferred().always(function() {
                        delete a.elem
                    }),
                    a = function() {
                        if (i) return !1;
                        var t = an || hn(),
                            n = Math.max(0, f.startTime + f.duration - t),
                            r = n / f.duration || 0,
                            s = 1 - r,
                            o = 0,
                            a = f.tweens.length;
                        for (; o < a; o++) f.tweens[o].run(s);
                        return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
                    },
                    f = u.promise({
                        elem: e,
                        props: p.extend({}, t),
                        opts: p.extend(!0, {
                            specialEasing: {},
                            easing: p.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: an || hn(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                            return f.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? f.tweens.length : 0;
                            if (i) return this;
                            i = !0;
                            for (; n < r; n++) f.tweens[n].run(1);
                            return t ? (u.notifyWith(e, [f, 1, 0]), u.resolveWith(e, [f, t])) : u.rejectWith(e, [f, t]), this
                        }
                    }),
                    l = f.props;
                mn(l, f.opts.specialEasing);
                for (; s < o; s++) {
                    r = gn.prefilters[s].call(f, e, l, f.opts);
                    if (r) return p.isFunction(r.stop) && (p._queueHooks(f.elem, f.opts.queue).stop = p.proxy(r.stop, r)), r
                }
                return p.map(l, dn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
                    elem: e,
                    anim: f,
                    queue: f.opts.queue
                })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
            }

            function An(e) {
                return p.attr(e, "class") || ""
            }

            function Vn(e) {
                return function(t, n) {
                    typeof t != "string" && (n = t, t = "*");
                    var r, i = 0,
                        s = t.toLowerCase().match(_) || [];
                    if (p.isFunction(n))
                        while (r = s[i++]) r.charAt(0) === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function $n(e, t, n, r) {
                function o(u) {
                    var a;
                    return i[u] = !0, p.each(e[u] || [], function(e, u) {
                        var f = u(t, n, r);
                        if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                        if (s) return !(a = f)
                    }), a
                }
                var i = {},
                    s = e === Un;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function Jn(e, t) {
                var n, r, i = p.ajaxSettings.flatOptions || {};
                for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                return n && p.extend(!0, e, n), e
            }

            function Kn(e, t, n) {
                var r, i, s, o, u = e.contents,
                    a = e.dataTypes;
                while (a[0] === "*") a.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (o in u)
                        if (u[o] && u[o].test(i)) {
                            a.unshift(o);
                            break
                        } if (a[0] in n) s = a[0];
                else {
                    for (o in n) {
                        if (!a[0] || e.converters[o + " " + a[0]]) {
                            s = o;
                            break
                        }
                        r || (r = o)
                    }
                    s = s || r
                }
                if (s) return s !== a[0] && a.unshift(s), n[s]
            }

            function Qn(e, t, n, r) {
                var i, s, o, u, a, f = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
                s = l.shift();
                while (s) {
                    e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
                    if (s)
                        if (s === "*") s = a;
                        else if (a !== "*" && a !== s) {
                        o = f[a + " " + s] || f["* " + s];
                        if (!o)
                            for (i in f) {
                                u = i.split(" ");
                                if (u[1] === s) {
                                    o = f[a + " " + u[0]] || f["* " + u[0]];
                                    if (o) {
                                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                        break
                                    }
                                }
                            }
                        if (o !== !0)
                            if (o && e["throws"]) t = o(t);
                            else try {
                                t = o(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: o ? c : "No conversion from " + a + " to " + s
                                }
                            }
                    }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function Gn(e) {
                return e.style && e.style.display || p.css(e, "display")
            }

            function Yn(e) {
                if (!p.contains(e.ownerDocument || r, e)) return !0;
                while (e && e.nodeType === 1) {
                    if (Gn(e) === "none" || e.type === "hidden") return !0;
                    e = e.parentNode
                }
                return !1
            }

            function ir(e, t, n, r) {
                var i;
                if (p.isArray(t)) p.each(t, function(t, i) {
                    n || er.test(e) ? r(e, i) : ir(e + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, n, r)
                });
                else if (!n && p.type(t) === "object")
                    for (i in t) ir(e + "[" + i + "]", t[i], n, r);
                else r(e, t)
            }

            function ar() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            }

            function fr() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }

            function pr(e) {
                return p.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
            }
            var n = [],
                r = e.document,
                i = n.slice,
                s = n.concat,
                o = n.push,
                u = n.indexOf,
                a = {},
                f = a.toString,
                l = a.hasOwnProperty,
                c = {},
                h = "1.12.4",
                p = function(e, t) {
                    return new p.fn.init(e, t)
                },
                d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                v = /^-ms-/,
                m = /-([\da-z])/gi,
                g = function(e, t) {
                    return t.toUpperCase()
                };
            p.fn = p.prototype = {
                jquery: h,
                constructor: p,
                selector: "",
                length: 0,
                toArray: function() {
                    return i.call(this)
                },
                get: function(e) {
                    return e != null ? e < 0 ? this[e + this.length] : this[e] : i.call(this)
                },
                pushStack: function(e) {
                    var t = p.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e) {
                    return p.each(this, e)
                },
                map: function(e) {
                    return this.pushStack(p.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(i.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: o,
                sort: n.sort,
                splice: n.splice
            }, p.extend = p.fn.extend = function() {
                var e, t, n, r, i, s, o = arguments[0] || {},
                    u = 1,
                    a = arguments.length,
                    f = !1;
                typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !p.isFunction(o) && (o = {}), u === a && (o = this, u--);
                for (; u < a; u++)
                    if ((i = arguments[u]) != null)
                        for (r in i) {
                            e = o[r], n = i[r];
                            if (o === n) continue;
                            f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : n !== undefined && (o[r] = n)
                        }
                return o
            }, p.extend({
                expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return p.type(e) === "function"
                },
                isArray: Array.isArray || function(e) {
                    return p.type(e) === "array"
                },
                isWindow: function(e) {
                    return e != null && e == e.window
                },
                isNumeric: function(e) {
                    var t = e && e.toString();
                    return !p.isArray(e) && t - parseFloat(t) + 1 >= 0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || p.type(e) !== "object" || e.nodeType || p.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (!c.ownFirst)
                        for (t in e) return l.call(e, t);
                    for (t in e);
                    return t === undefined || l.call(e, t)
                },
                type: function(e) {
                    return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? a[f.call(e)] || "object" : typeof e
                },
                globalEval: function(t) {
                    t && p.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(v, "ms-").replace(m, g)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t) {
                    var n, r = 0;
                    if (y(e)) {
                        n = e.length;
                        for (; r < n; r++)
                            if (t.call(e[r], r, e[r]) === !1) break
                    } else
                        for (r in e)
                            if (t.call(e[r], r, e[r]) === !1) break;
                    return e
                },
                trim: function(e) {
                    return e == null ? "" : (e + "").replace(d, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return e != null && (y(Object(e)) ? p.merge(n, typeof e == "string" ? [e] : e) : o.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (u) return u.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for (; n < r; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, t) {
                    var n = +t.length,
                        r = 0,
                        i = e.length;
                    while (r < n) e[i++] = t[r++];
                    if (n !== n)
                        while (t[r] !== undefined) e[i++] = t[r++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        s = 0,
                        o = e.length,
                        u = !n;
                    for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
                    return i
                },
                map: function(e, t, n) {
                    var r, i, o = 0,
                        u = [];
                    if (y(e)) {
                        r = e.length;
                        for (; o < r; o++) i = t(e[o], o, n), i != null && u.push(i)
                    } else
                        for (o in e) i = t(e[o], o, n), i != null && u.push(i);
                    return s.apply([], u)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, r, s;
                    return typeof t == "string" && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = i.call(arguments, 2), r = function() {
                        return e.apply(t || this, n.concat(i.call(arguments)))
                    }, r.guid = e.guid = e.guid || p.guid++, r) : undefined
                },
                now: function() {
                    return +(new Date)
                },
                support: c
            }), typeof Symbol == "function" && (p.fn[Symbol.iterator] = n[Symbol.iterator]), p.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                a["[object " + t + "]"] = t.toLowerCase()
            });
            var b = function(e) {
                function st(e, t, r, i) {
                    var s, u, f, l, c, d, g, y, S = t && t.ownerDocument,
                        x = t ? t.nodeType : 9;
                    r = r || [];
                    if (typeof e != "string" || !e || x !== 1 && x !== 9 && x !== 11) return r;
                    if (!i) {
                        (t ? t.ownerDocument || t : E) !== p && h(t), t = t || p;
                        if (v) {
                            if (x !== 11 && (d = Y.exec(e)))
                                if (s = d[1]) {
                                    if (x === 9) {
                                        if (!(f = t.getElementById(s))) return r;
                                        if (f.id === s) return r.push(f), r
                                    } else if (S && (f = S.getElementById(s)) && b(t, f) && f.id === s) return r.push(f), r
                                } else {
                                    if (d[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                                    if ((s = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return D.apply(r, t.getElementsByClassName(s)), r
                                } if (n.qsa && !C[e + " "] && (!m || !m.test(e))) {
                                if (x !== 1) S = t, y = e;
                                else if (t.nodeName.toLowerCase() !== "object") {
                                    (l = t.getAttribute("id")) ? l = l.replace(et, "\\$&"): t.setAttribute("id", l = w), g = o(e), u = g.length, c = $.test(l) ? "#" + l : "[id='" + l + "']";
                                    while (u--) g[u] = c + " " + mt(g[u]);
                                    y = g.join(","), S = Z.test(e) && dt(t.parentNode) || t
                                }
                                if (y) try {
                                    return D.apply(r, S.querySelectorAll(y)), r
                                } catch (T) {} finally {
                                    l === w && t.removeAttribute("id")
                                }
                            }
                        }
                    }
                    return a(e.replace(U, "$1"), t, r, i)
                }

                function ot() {
                    function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function ut(e) {
                    return e[w] = !0, e
                }

                function at(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function ft(e, t) {
                    var n = e.split("|"),
                        i = n.length;
                    while (i--) r.attrHandle[n[i]] = t
                }

                function lt(e, t) {
                    var n = t && e,
                        r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || L) - (~e.sourceIndex || L);
                    if (r) return r;
                    if (n)
                        while (n = n.nextSibling)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ct(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e
                    }
                }

                function ht(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e
                    }
                }

                function pt(e) {
                    return ut(function(t) {
                        return t = +t, ut(function(n, r) {
                            var i, s = e([], n.length, t),
                                o = s.length;
                            while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function dt(e) {
                    return e && typeof e.getElementsByTagName != "undefined" && e
                }

                function vt() {}

                function mt(e) {
                    var t = 0,
                        n = e.length,
                        r = "";
                    for (; t < n; t++) r += e[t].value;
                    return r
                }

                function gt(e, t, n) {
                    var r = t.dir,
                        i = n && r === "parentNode",
                        s = x++;
                    return t.first ? function(t, n, s) {
                        while (t = t[r])
                            if (t.nodeType === 1 || i) return e(t, n, s)
                    } : function(t, n, o) {
                        var u, a, f, l = [S, s];
                        if (o) {
                            while (t = t[r])
                                if (t.nodeType === 1 || i)
                                    if (e(t, n, o)) return !0
                        } else
                            while (t = t[r])
                                if (t.nodeType === 1 || i) {
                                    f = t[w] || (t[w] = {}), a = f[t.uniqueID] || (f[t.uniqueID] = {});
                                    if ((u = a[r]) && u[0] === S && u[1] === s) return l[2] = u[2];
                                    a[r] = l;
                                    if (l[2] = e(t, n, o)) return !0
                                }
                    }
                }

                function yt(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function bt(e, t, n) {
                    var r = 0,
                        i = t.length;
                    for (; r < i; r++) st(e, t[r], n);
                    return n
                }

                function wt(e, t, n, r, i) {
                    var s, o = [],
                        u = 0,
                        a = e.length,
                        f = t != null;
                    for (; u < a; u++)
                        if (s = e[u])
                            if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                    return o
                }

                function Et(e, t, n, r, i, s) {
                    return r && !r[w] && (r = Et(r)), i && !i[w] && (i = Et(i, s)), ut(function(s, o, u, a) {
                        var f, l, c, h = [],
                            p = [],
                            d = o.length,
                            v = s || bt(t || "*", u.nodeType ? [u] : u, []),
                            m = e && (s || !t) ? wt(v, h, e, u, a) : v,
                            g = n ? i || (s ? e : d || r) ? [] : o : m;
                        n && n(m, g, u, a);
                        if (r) {
                            f = wt(g, p), r(f, [], u, a), l = f.length;
                            while (l--)
                                if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                        }
                        if (s) {
                            if (i || e) {
                                if (i) {
                                    f = [], l = g.length;
                                    while (l--)(c = g[l]) && f.push(m[l] = c);
                                    i(null, g = [], f, a)
                                }
                                l = g.length;
                                while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                            }
                        } else g = wt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
                    })
                }

                function St(e) {
                    var t, n, i, s = e.length,
                        o = r.relative[e[0].type],
                        u = o || r.relative[" "],
                        a = o ? 1 : 0,
                        l = gt(function(e) {
                            return e === t
                        }, u, !0),
                        c = gt(function(e) {
                            return H(t, e) > -1
                        }, u, !0),
                        h = [function(e, n, r) {
                            var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                            return t = null, i
                        }];
                    for (; a < s; a++)
                        if (n = r.relative[e[a].type]) h = [gt(yt(h), n)];
                        else {
                            n = r.filter[e[a].type].apply(null, e[a].matches);
                            if (n[w]) {
                                i = ++a;
                                for (; i < s; i++)
                                    if (r.relative[e[i].type]) break;
                                return Et(a > 1 && yt(h), a > 1 && mt(e.slice(0, a - 1).concat({
                                    value: e[a - 2].type === " " ? "*" : ""
                                })).replace(U, "$1"), n, a < i && St(e.slice(a, i)), i < s && St(e = e.slice(i)), i < s && mt(e))
                            }
                            h.push(n)
                        } return yt(h)
                }

                function xt(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        s = function(s, o, u, a, l) {
                            var c, d, m, g = 0,
                                y = "0",
                                b = s && [],
                                w = [],
                                E = f,
                                x = s || i && r.find.TAG("*", l),
                                T = S += E == null ? 1 : Math.random() || .1,
                                N = x.length;
                            l && (f = o === p || o || l);
                            for (; y !== N && (c = x[y]) != null; y++) {
                                if (i && c) {
                                    d = 0, !o && c.ownerDocument !== p && (h(c), u = !v);
                                    while (m = e[d++])
                                        if (m(c, o || p, u)) {
                                            a.push(c);
                                            break
                                        } l && (S = T)
                                }
                                n && ((c = !m && c) && g--, s && b.push(c))
                            }
                            g += y;
                            if (n && y !== g) {
                                d = 0;
                                while (m = t[d++]) m(b, w, o, u);
                                if (s) {
                                    if (g > 0)
                                        while (y--) !b[y] && !w[y] && (w[y] = M.call(a));
                                    w = wt(w)
                                }
                                D.apply(a, w), l && !s && w.length > 0 && g + t.length > 1 && st.uniqueSort(a)
                            }
                            return l && (S = T, f = E), b
                        };
                    return n ? ut(s) : s
                }
                var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
                    E = e.document,
                    S = 0,
                    x = 0,
                    T = ot(),
                    N = ot(),
                    C = ot(),
                    k = function(e, t) {
                        return e === t && (c = !0), 0
                    },
                    L = 1 << 31,
                    A = {}.hasOwnProperty,
                    O = [],
                    M = O.pop,
                    _ = O.push,
                    D = O.push,
                    P = O.slice,
                    H = function(e, t) {
                        var n = 0,
                            r = e.length;
                        for (; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    I = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + j + "*\\]",
                    q = ":(" + F + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|" + ".*" + ")\\)|)",
                    R = new RegExp(j + "+", "g"),
                    U = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    z = new RegExp("^" + j + "*," + j + "*"),
                    W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    X = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
                    V = new RegExp(q),
                    $ = new RegExp("^" + F + "$"),
                    J = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F + "|[*])"),
                        ATTR: new RegExp("^" + I),
                        PSEUDO: new RegExp("^" + q),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + B + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                    },
                    K = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    G = /^[^{]+\{\s*\[native \w/,
                    Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Z = /[+~]/,
                    et = /'|\\/g,
                    tt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                    nt = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                    },
                    rt = function() {
                        h()
                    };
                try {
                    D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
                } catch (it) {
                    D = {
                        apply: O.length ? function(e, t) {
                            _.apply(e, P.call(t))
                        } : function(e, t) {
                            var n = e.length,
                                r = 0;
                            while (e[n++] = t[r++]);
                            e.length = n - 1
                        }
                    }
                }
                n = st.support = {}, s = st.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }, h = st.setDocument = function(e) {
                    var t, i, o = e ? e.ownerDocument || e : E;
                    if (o === p || o.nodeType !== 9 || !o.documentElement) return p;
                    p = o, d = p.documentElement, v = !s(p), (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", rt, !1) : i.attachEvent && i.attachEvent("onunload", rt)), n.attributes = at(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = at(function(e) {
                        return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = G.test(p.getElementsByClassName), n.getById = at(function(e) {
                        return d.appendChild(e).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    }), n.getById ? (r.find.ID = function(e, t) {
                        if (typeof t.getElementById != "undefined" && v) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, r.filter.ID = function(e) {
                        var t = e.replace(tt, nt);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete r.find.ID, r.filter.ID = function(e) {
                        var t = e.replace(tt, nt);
                        return function(e) {
                            var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e);
                        if (n.qsa) return t.querySelectorAll(e)
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            s = t.getElementsByTagName(e);
                        if (e === "*") {
                            while (n = s[i++]) n.nodeType === 1 && r.push(n);
                            return r
                        }
                        return s
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName != "undefined" && v) return t.getElementsByClassName(e)
                    }, g = [], m = [];
                    if (n.qsa = G.test(p.querySelectorAll)) at(function(e) {
                        d.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                    }), at(function(e) {
                        var t = p.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    });
                    return (n.matchesSelector = G.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && at(function(e) {
                        n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", q)
                    }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = G.test(d.compareDocumentPosition), b = t || G.test(d.contains) ? function(e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, k = t ? function(e, t) {
                        if (e === t) return c = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === E && b(E, e) ? -1 : t === p || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : r & 4 ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            s = t.parentNode,
                            o = [e],
                            u = [t];
                        if (!i || !s) return e === p ? -1 : t === p ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                        if (i === s) return lt(e, t);
                        n = e;
                        while (n = n.parentNode) o.unshift(n);
                        n = t;
                        while (n = n.parentNode) u.unshift(n);
                        while (o[r] === u[r]) r++;
                        return r ? lt(o[r], u[r]) : o[r] === E ? -1 : u[r] === E ? 1 : 0
                    }, p
                }, st.matches = function(e, t) {
                    return st(e, null, null, t)
                }, st.matchesSelector = function(e, t) {
                    (e.ownerDocument || e) !== p && h(e), t = t.replace(X, "='$1']");
                    if (n.matchesSelector && v && !C[t + " "] && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
                    } catch (i) {}
                    return st(t, p, null, [e]).length > 0
                }, st.contains = function(e, t) {
                    return (e.ownerDocument || e) !== p && h(e), b(e, t)
                }, st.attr = function(e, t) {
                    (e.ownerDocument || e) !== p && h(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
                    return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
                }, st.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, st.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        s = 0;
                    c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k);
                    if (c) {
                        while (t = e[s++]) t === e[s] && (i = r.push(s));
                        while (i--) e.splice(r[i], 1)
                    }
                    return l = null, e
                }, i = st.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        s = e.nodeType;
                    if (!s)
                        while (t = e[r++]) n += i(t);
                    else if (s === 1 || s === 9 || s === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (s === 3 || s === 4) return e.nodeValue;
                    return n
                }, r = st.selectors = {
                    cacheLength: 50,
                    createPseudo: ut,
                    match: J,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(tt, nt), e[3] = (e[3] || e[4] || e[5] || "").replace(tt, nt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && st.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(tt, nt).toLowerCase();
                            return e === "*" ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = T[e + " "];
                            return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                                return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute != "undefined" && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = st.attr(r, e);
                                return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(R, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var s = e.slice(0, 3) !== "nth",
                                o = e.slice(-4) !== "last",
                                u = t === "of-type";
                            return r === 1 && i === 0 ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, a) {
                                var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = u && t.nodeName.toLowerCase(),
                                    y = !a && !u,
                                    b = !1;
                                if (m) {
                                    if (s) {
                                        while (v) {
                                            h = t;
                                            while (h = h[v])
                                                if (u ? h.nodeName.toLowerCase() === g : h.nodeType === 1) return !1;
                                            d = v = e === "only" && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    d = [o ? m.firstChild : m.lastChild];
                                    if (o && y) {
                                        h = m, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p && f[2], h = p && m.childNodes[p];
                                        while (h = ++p && h && h[v] || (b = p = 0) || d.pop())
                                            if (h.nodeType === 1 && ++b && h === t) {
                                                l[e] = [S, p, b];
                                                break
                                            }
                                    } else {
                                        y && (h = t, c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), f = l[e] || [], p = f[0] === S && f[1], b = p);
                                        if (b === !1)
                                            while (h = ++p && h && h[v] || (b = p = 0) || d.pop())
                                                if ((u ? h.nodeName.toLowerCase() === g : h.nodeType === 1) && ++b) {
                                                    y && (c = h[w] || (h[w] = {}), l = c[h.uniqueID] || (c[h.uniqueID] = {}), l[e] = [S, b]);
                                                    if (h === t) break
                                                }
                                    }
                                    return b -= i, b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                            return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? ut(function(e, n) {
                                var r, s = i(e, t),
                                    o = s.length;
                                while (o--) r = H(e, s[o]), e[r] = !(n[r] = s[o])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: ut(function(e) {
                            var t = [],
                                n = [],
                                r = u(e.replace(U, "$1"));
                            return r[w] ? ut(function(e, t, n, i) {
                                var s, o = r(e, null, i, []),
                                    u = e.length;
                                while (u--)
                                    if (s = o[u]) e[u] = !(t[u] = s)
                            }) : function(e, i, s) {
                                return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: ut(function(e) {
                            return function(t) {
                                return st(e, t).length > 0
                            }
                        }),
                        contains: ut(function(e) {
                            return e = e.replace(tt, nt),
                                function(t) {
                                    return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                }
                        }),
                        lang: ut(function(e) {
                            return $.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(tt, nt).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0; while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === d
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return Q.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        text: function(e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                        },
                        first: pt(function() {
                            return [0]
                        }),
                        last: pt(function(e, t) {
                            return [t - 1]
                        }),
                        eq: pt(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: pt(function(e, t) {
                            var n = 0;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: pt(function(e, t) {
                            var n = 1;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: pt(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: pt(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, r.pseudos.nth = r.pseudos.eq;
                for (t in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = ct(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = ht(t);
                return vt.prototype = r.filters = r.pseudos, r.setFilters = new vt, o = st.tokenize = function(e, t) {
                    var n, i, s, o, u, a, f, l = N[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    u = e, a = [], f = r.preFilter;
                    while (u) {
                        if (!n || (i = z.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
                        n = !1;
                        if (i = W.exec(u)) n = i.shift(), s.push({
                            value: n,
                            type: i[0].replace(U, " ")
                        }), u = u.slice(n.length);
                        for (o in r.filter)(i = J[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                            value: n,
                            type: o,
                            matches: i
                        }), u = u.slice(n.length));
                        if (!n) break
                    }
                    return t ? u.length : u ? st.error(e) : N(e, a).slice(0)
                }, u = st.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        s = C[e + " "];
                    if (!s) {
                        t || (t = o(e)), n = t.length;
                        while (n--) s = St(t[n]), s[w] ? r.push(s) : i.push(s);
                        s = C(e, xt(i, r)), s.selector = e
                    }
                    return s
                }, a = st.select = function(e, t, i, s) {
                    var a, f, l, c, h, p = typeof e == "function" && e,
                        d = !s && o(e = p.selector || e);
                    i = i || [];
                    if (d.length === 1) {
                        f = d[0] = d[0].slice(0);
                        if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
                            t = (r.find.ID(l.matches[0].replace(tt, nt), t) || [])[0];
                            if (!t) return i;
                            p && (t = t.parentNode), e = e.slice(f.shift().value.length)
                        }
                        a = J.needsContext.test(e) ? 0 : f.length;
                        while (a--) {
                            l = f[a];
                            if (r.relative[c = l.type]) break;
                            if (h = r.find[c])
                                if (s = h(l.matches[0].replace(tt, nt), Z.test(f[0].type) && dt(t.parentNode) || t)) {
                                    f.splice(a, 1), e = s.length && mt(f);
                                    if (!e) return D.apply(i, s), i;
                                    break
                                }
                        }
                    }
                    return (p || u(e, d))(s, t, !v, i, !t || Z.test(e) && dt(t.parentNode) || t), i
                }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = at(function(e) {
                    return e.compareDocumentPosition(p.createElement("div")) & 1
                }), at(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
                }) || ft("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                }), (!n.attributes || !at(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
                })) && ft("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
                }), at(function(e) {
                    return e.getAttribute("disabled") == null
                }) || ft(B, function(e, t, n) {
                    var r;
                    if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), st
            }(e);
            p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.uniqueSort = p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
            var w = function(e, t, n) {
                    var r = [],
                        i = n !== undefined;
                    while ((e = e[t]) && e.nodeType !== 9)
                        if (e.nodeType === 1) {
                            if (i && p(e).is(n)) break;
                            r.push(e)
                        } return r
                },
                E = function(e, t) {
                    var n = [];
                    for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                    return n
                },
                S = p.expr.match.needsContext,
                x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                T = /^.[^:#\[\.,]*$/;
            p.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
                    return e.nodeType === 1
                }))
            }, p.fn.extend({
                find: function(e) {
                    var t, n = [],
                        r = this,
                        i = r.length;
                    if (typeof e != "string") return this.pushStack(p(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (p.contains(r[t], this)) return !0
                    }));
                    for (t = 0; t < i; t++) p.find(e, r[t], n);
                    return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                },
                filter: function(e) {
                    return this.pushStack(N(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(N(this, e || [], !0))
                },
                is: function(e) {
                    return !!N(this, typeof e == "string" && S.test(e) ? p(e) : e || [], !1).length
                }
            });
            var C, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                L = p.fn.init = function(e, t, n) {
                    var i, s;
                    if (!e) return this;
                    n = n || C;
                    if (typeof e == "string") {
                        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [null, e, null] : i = k.exec(e);
                        if (i && (i[1] || !t)) {
                            if (i[1]) {
                                t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0));
                                if (x.test(i[1]) && p.isPlainObject(t))
                                    for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this
                            }
                            s = r.getElementById(i[2]);
                            if (s && s.parentNode) {
                                if (s.id !== i[2]) return C.find(e);
                                this.length = 1, this[0] = s
                            }
                            return this.context = r, this.selector = e, this
                        }
                        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? typeof n.ready != "undefined" ? n.ready(e) : e(p) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
                };
            L.prototype = p.fn, C = p(r);
            var A = /^(?:parents|prev(?:Until|All))/,
                O = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            p.fn.extend({
                has: function(e) {
                    var t, n = p(e, this),
                        r = n.length;
                    return this.filter(function() {
                        for (t = 0; t < r; t++)
                            if (p.contains(this, n[t])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        s = [],
                        o = S.test(e) || typeof e != "string" ? p(e, t || this.context) : 0;
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && p.find.matchesSelector(n, e))) {
                                s.push(n);
                                break
                            } return this.pushStack(s.length > 1 ? p.uniqueSort(s) : s)
                },
                index: function(e) {
                    return e ? typeof e == "string" ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(p.uniqueSort(p.merge(this.get(), p(e, t))))
                },
                addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                }
            }), p.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null
                },
                parents: function(e) {
                    return w(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return w(e, "parentNode", n)
                },
                next: function(e) {
                    return M(e, "nextSibling")
                },
                prev: function(e) {
                    return M(e, "previousSibling")
                },
                nextAll: function(e) {
                    return w(e, "nextSibling")
                },
                prevAll: function(e) {
                    return w(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return w(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return w(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return E((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return E(e.firstChild)
                },
                contents: function(e) {
                    return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
                }
            }, function(e, t) {
                p.fn[e] = function(n, r) {
                    var i = p.map(this, t, n);
                    return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = p.filter(r, i)), this.length > 1 && (O[e] || (i = p.uniqueSort(i)), A.test(e) && (i = i.reverse())), this.pushStack(i)
                }
            });
            var _ = /\S+/g;
            p.Callbacks = function(e) {
                e = typeof e == "string" ? D(e) : p.extend({}, e);
                var t, n, r, i, s = [],
                    o = [],
                    u = -1,
                    a = function() {
                        i = e.once, r = t = !0;
                        for (; o.length; u = -1) {
                            n = o.shift();
                            while (++u < s.length) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1)
                        }
                        e.memory || (n = !1), t = !1, i && (n ? s = [] : s = "")
                    },
                    f = {
                        add: function() {
                            return s && (n && !t && (u = s.length - 1, o.push(n)), function r(t) {
                                p.each(t, function(t, n) {
                                    p.isFunction(n) ? (!e.unique || !f.has(n)) && s.push(n) : n && n.length && p.type(n) !== "string" && r(n)
                                })
                            }(arguments), n && !t && a()), this
                        },
                        remove: function() {
                            return p.each(arguments, function(e, t) {
                                var n;
                                while ((n = p.inArray(t, s, n)) > -1) s.splice(n, 1), n <= u && u--
                            }), this
                        },
                        has: function(e) {
                            return e ? p.inArray(e, s) > -1 : s.length > 0
                        },
                        empty: function() {
                            return s && (s = []), this
                        },
                        disable: function() {
                            return i = o = [], s = n = "", this
                        },
                        disabled: function() {
                            return !s
                        },
                        lock: function() {
                            return i = !0, n || f.disable(), this
                        },
                        locked: function() {
                            return !!i
                        },
                        fireWith: function(e, n) {
                            return i || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || a()), this
                        },
                        fire: function() {
                            return f.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return f
            }, p.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", p.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return p.Deferred(function(n) {
                                    p.each(t, function(t, s) {
                                        var o = p.isFunction(e[t]) && e[t];
                                        i[s[1]](function() {
                                            var e = o && o.apply(this, arguments);
                                            e && p.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return e != null ? p.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, p.each(t, function(e, s) {
                        var o = s[2],
                            u = s[3];
                        r[s[1]] = o.add, u && o.add(function() {
                            n = u
                        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                            return i[s[0] + "With"](this === i ? r : this, arguments), this
                        }, i[s[0] + "With"] = o.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t = 0,
                        n = i.call(arguments),
                        r = n.length,
                        s = r !== 1 || e && p.isFunction(e.promise) ? r : 0,
                        o = s === 1 ? e : p.Deferred(),
                        u = function(e, t, n) {
                            return function(r) {
                                t[e] = this, n[e] = arguments.length > 1 ? i.call(arguments) : r, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                            }
                        },
                        a, f, l;
                    if (r > 1) {
                        a = new Array(r), f = new Array(r), l = new Array(r);
                        for (; t < r; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().progress(u(t, f, a)).done(u(t, l, n)).fail(o.reject) : --s
                    }
                    return s || o.resolveWith(l, n), o.promise()
                }
            });
            var P;
            p.fn.ready = function(e) {
                return p.ready.promise().done(e), this
            }, p.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? p.readyWait++ : p.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? --p.readyWait : p.isReady) return;
                    p.isReady = !0;
                    if (e !== !0 && --p.readyWait > 0) return;
                    P.resolveWith(r, [p]), p.fn.triggerHandler && (p(r).triggerHandler("ready"), p(r).off("ready"))
                }
            }), p.ready.promise = function(t) {
                if (!P) {
                    P = p.Deferred();
                    if (r.readyState === "complete" || r.readyState !== "loading" && !r.documentElement.doScroll) e.setTimeout(p.ready);
                    else if (r.addEventListener) r.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B);
                    else {
                        r.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
                        var n = !1;
                        try {
                            n = e.frameElement == null && r.documentElement
                        } catch (i) {}
                        n && n.doScroll && function s() {
                            if (!p.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (t) {
                                    return e.setTimeout(s, 50)
                                }
                                H(), p.ready()
                            }
                        }()
                    }
                }
                return P.promise(t)
            }, p.ready.promise();
            var j;
            for (j in p(c)) break;
            c.ownFirst = j === "0", c.inlineBlockNeedsLayout = !1, p(function() {
                    var e, t, n, i;
                    n = r.getElementsByTagName("body")[0];
                    if (!n || !n.style) return;
                    t = r.createElement("div"), i = r.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom != "undefined" && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", c.inlineBlockNeedsLayout = e = t.offsetWidth === 3, e && (n.style.zoom = 1)), n.removeChild(i)
                }),
                function() {
                    var e = r.createElement("div");
                    c.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        c.deleteExpando = !1
                    }
                    e = null
                }();
            var F = function(e) {
                    var t = p.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
                },
                I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                q = /([A-Z])/g;
            p.extend({
                    cache: {},
                    noData: {
                        "applet ": !0,
                        "embed ": !0,
                        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                    },
                    hasData: function(e) {
                        return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
                    },
                    data: function(e, t, n) {
                        return z(e, t, n)
                    },
                    removeData: function(e, t) {
                        return W(e, t)
                    },
                    _data: function(e, t, n) {
                        return z(e, t, n, !0)
                    },
                    _removeData: function(e, t) {
                        return W(e, t, !0)
                    }
                }), p.fn.extend({
                    data: function(e, t) {
                        var n, r, i, s = this[0],
                            o = s && s.attributes;
                        if (e === undefined) {
                            if (this.length) {
                                i = p.data(s);
                                if (s.nodeType === 1 && !p._data(s, "parsedAttrs")) {
                                    n = o.length;
                                    while (n--) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = p.camelCase(r.slice(5)), R(s, r, i[r])));
                                    p._data(s, "parsedAttrs", !0)
                                }
                            }
                            return i
                        }
                        return typeof e == "object" ? this.each(function() {
                            p.data(this, e)
                        }) : arguments.length > 1 ? this.each(function() {
                            p.data(this, e, t)
                        }) : s ? R(s, e, p.data(s, e)) : undefined
                    },
                    removeData: function(e) {
                        return this.each(function() {
                            p.removeData(this, e)
                        })
                    }
                }), p.extend({
                    queue: function(e, t, n) {
                        var r;
                        if (e) return t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []
                    },
                    dequeue: function(e, t) {
                        t = t || "fx";
                        var n = p.queue(e, t),
                            r = n.length,
                            i = n.shift(),
                            s = p._queueHooks(e, t),
                            o = function() {
                                p.dequeue(e, t)
                            };
                        i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
                    },
                    _queueHooks: function(e, t) {
                        var n = t + "queueHooks";
                        return p._data(e, n) || p._data(e, n, {
                            empty: p.Callbacks("once memory").add(function() {
                                p._removeData(e, t + "queue"), p._removeData(e, n)
                            })
                        })
                    }
                }), p.fn.extend({
                    queue: function(e, t) {
                        var n = 2;
                        return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : t === undefined ? this : this.each(function() {
                            var n = p.queue(this, e, t);
                            p._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && p.dequeue(this, e)
                        })
                    },
                    dequeue: function(e) {
                        return this.each(function() {
                            p.dequeue(this, e)
                        })
                    },
                    clearQueue: function(e) {
                        return this.queue(e || "fx", [])
                    },
                    promise: function(e, t) {
                        var n, r = 1,
                            i = p.Deferred(),
                            s = this,
                            o = this.length,
                            u = function() {
                                --r || i.resolveWith(s, [s])
                            };
                        typeof e != "string" && (t = e, e = undefined), e = e || "fx";
                        while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
                        return u(), i.promise(t)
                    }
                }),
                function() {
                    var e;
                    c.shrinkWrapBlocks = function() {
                        if (e != null) return e;
                        e = !1;
                        var t, n, i;
                        n = r.getElementsByTagName("body")[0];
                        if (!n || !n.style) return;
                        return t = r.createElement("div"), i = r.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom != "undefined" && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(r.createElement("div")).style.width = "5px", e = t.offsetWidth !== 3), n.removeChild(i), e
                    }
                }();
            var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                V = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
                $ = ["Top", "Right", "Bottom", "Left"],
                J = function(e, t) {
                    return e = t || e, p.css(e, "display") === "none" || !p.contains(e.ownerDocument, e)
                },
                Q = function(e, t, n, r, i, s, o) {
                    var u = 0,
                        a = e.length,
                        f = n == null;
                    if (p.type(n) === "object") {
                        i = !0;
                        for (u in n) Q(e, t, u, n[u], !0, s, o)
                    } else if (r !== undefined) {
                        i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                            return f.call(p(e), n)
                        }));
                        if (t)
                            for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
                    }
                    return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
                },
                G = /^(?:checkbox|radio)$/i,
                Y = /<([\w:-]+)/,
                Z = /^$|\/(?:java|ecma)script/i,
                et = /^\s+/,
                tt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            (function() {
                var e = r.createElement("div"),
                    t = r.createDocumentFragment(),
                    n = r.createElement("input");
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", c.leadingWhitespace = e.firstChild.nodeType === 3, c.tbody = !e.getElementsByTagName("tbody").length, c.htmlSerialize = !!e.getElementsByTagName("link").length, c.html5Clone = r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", n.type = "checkbox", n.checked = !0, t.appendChild(n), c.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = r.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), c.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !!e.addEventListener, e[p.expando] = 1, c.attributes = !e.getAttribute(p.expando)
            })();
            var rt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            rt.optgroup = rt.option, rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead, rt.th = rt.td;
            var ot = /<|&#?\w+;/,
                ut = /<tbody/i;
            (function() {
                var t, n, i = r.createElement("div");
                for (t in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) n = "on" + t, (c[t] = n in e) || (i.setAttribute(n, "t"), c[t] = i.attributes[n].expando === !1);
                i = null
            })();
            var lt = /^(?:input|select|textarea)$/i,
                ct = /^key/,
                ht = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                pt = /^(?:focusinfocus|focusoutblur)$/,
                dt = /^([^.]*)(?:\.(.+)|)/;
            p.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
                    if (!g) return;
                    n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                        return typeof p == "undefined" || !!e && p.event.triggered === e.type ? undefined : p.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = e), t = (t || "").match(_) || [""], u = t.length;
                    while (u--) {
                        s = dt.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort();
                        if (!d) continue;
                        f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                            type: d,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && p.expr.match.needsContext.test(i),
                            namespace: v.join(".")
                        }, a);
                        if (!(h = o[d])) {
                            h = o[d] = [], h.delegateCount = 0;
                            if (!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l)
                        }
                        f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0
                    }
                    e = null
                },
                remove: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
                    if (!g || !(l = g.events)) return;
                    t = (t || "").match(_) || [""], f = t.length;
                    while (f--) {
                        u = dt.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort();
                        if (!d) {
                            for (d in l) p.event.remove(e, d + t[f], n, r, !0);
                            continue
                        }
                        c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], (i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && ((!c.teardown || c.teardown.call(e, v, g.handle) === !1) && p.removeEvent(e, d, g.handle), delete l[d])
                    }
                    p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
                },
                trigger: function(t, n, i, s) {
                    var o, u, a, f, c, h, d, v = [i || r],
                        m = l.call(t, "type") ? t.type : t,
                        g = l.call(t, "namespace") ? t.namespace.split(".") : [];
                    a = h = i = i || r;
                    if (i.nodeType === 3 || i.nodeType === 8) return;
                    if (pt.test(m + p.event.triggered)) return;
                    m.indexOf(".") > -1 && (g = m.split("."), m = g.shift(), g.sort()), u = m.indexOf(":") < 0 && "on" + m, t = t[p.expando] ? t : new p.Event(m, typeof t == "object" && t), t.isTrigger = s ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = i), n = n == null ? [t] : p.makeArray(n, [t]), c = p.event.special[m] || {};
                    if (!s && c.trigger && c.trigger.apply(i, n) === !1) return;
                    if (!s && !c.noBubble && !p.isWindow(i)) {
                        f = c.delegateType || m, pt.test(f + m) || (a = a.parentNode);
                        for (; a; a = a.parentNode) v.push(a), h = a;
                        h === (i.ownerDocument || r) && v.push(h.defaultView || h.parentWindow || e)
                    }
                    d = 0;
                    while ((a = v[d++]) && !t.isPropagationStopped()) t.type = d > 1 ? f : c.bindType || m, o = (p._data(a, "events") || {})[t.type] && p._data(a, "handle"), o && o.apply(a, n), o = u && a[u], o && o.apply && F(a) && (t.result = o.apply(a, n), t.result === !1 && t.preventDefault());
                    t.type = m;
                    if (!s && !t.isDefaultPrevented() && (!c._default || c._default.apply(v.pop(), n) === !1) && F(i) && u && i[m] && !p.isWindow(i)) {
                        h = i[u], h && (i[u] = null), p.event.triggered = m;
                        try {
                            i[m]()
                        } catch (y) {}
                        p.event.triggered = undefined, h && (i[u] = h)
                    }
                    return t.result
                },
                dispatch: function(e) {
                    e = p.event.fix(e);
                    var t, n, r, s, o, u = [],
                        a = i.call(arguments),
                        f = (p._data(this, "events") || {})[e.type] || [],
                        l = p.event.special[e.type] || {};
                    a[0] = e, e.delegateTarget = this;
                    if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                    u = p.event.handlers.call(this, e, f), t = 0;
                    while ((s = u[t++]) && !e.isPropagationStopped()) {
                        e.currentTarget = s.elem, n = 0;
                        while ((o = s.handlers[n++]) && !e.isImmediatePropagationStopped())
                            if (!e.rnamespace || e.rnamespace.test(o.namespace)) e.handleObj = o, e.data = o.data, r = ((p.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation())
                    }
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                },
                handlers: function(e, t) {
                    var n, r, i, s, o = [],
                        u = t.delegateCount,
                        a = e.target;
                    if (u && a.nodeType && (e.type !== "click" || isNaN(e.button) || e.button < 1))
                        for (; a != this; a = a.parentNode || this)
                            if (a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
                                r = [];
                                for (n = 0; n < u; n++) s = t[n], i = s.selector + " ", r[i] === undefined && (r[i] = s.needsContext ? p(i, this).index(a) > -1 : p.find(i, this, null, [a]).length), r[i] && r.push(s);
                                r.length && o.push({
                                    elem: a,
                                    handlers: r
                                })
                            } return u < t.length && o.push({
                        elem: this,
                        handlers: t.slice(u)
                    }), o
                },
                fix: function(e) {
                    if (e[p.expando]) return e;
                    var t, n, i, s = e.type,
                        o = e,
                        u = this.fixHooks[s];
                    u || (this.fixHooks[s] = u = ht.test(s) ? this.mouseHooks : ct.test(s) ? this.keyHooks : {}), i = u.props ? this.props.concat(u.props) : this.props, e = new p.Event(o), t = i.length;
                    while (t--) n = i[t], e[n] = o[n];
                    return e.target || (e.target = o.srcElement || r), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, u.filter ? u.filter(e, o) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, i, s, o = t.button,
                            u = t.fromElement;
                        return e.pageX == null && t.clientX != null && (i = e.target.ownerDocument || r, s = i.documentElement, n = i.body, e.pageX = t.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? t.toElement : u), !e.which && o !== undefined && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== gt() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === gt() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (p.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                        },
                        _default: function(e) {
                            return p.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n) {
                    var r = p.extend(new p.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    p.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
                }
            }, p.removeEvent = r.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
            }, p.Event = function(e, t) {
                if (!(this instanceof p.Event)) return new p.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? vt : mt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), this[p.expando] = !0
            }, p.Event.prototype = {
                constructor: p.Event,
                isDefaultPrevented: mt,
                isPropagationStopped: mt,
                isImmediatePropagationStopped: mt,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = vt;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = vt;
                    if (!e || this.isSimulated) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = vt, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, p.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                p.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj;
                        if (!i || i !== r && !p.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                        return n
                    }
                }
            }), c.submit || (p.event.special.submit = {
                setup: function() {
                    if (p.nodeName(this, "form")) return !1;
                    p.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = p.nodeName(t, "input") || p.nodeName(t, "button") ? p.prop(t, "form") : undefined;
                        n && !p._data(n, "submit") && (p.event.add(n, "submit._submit", function(e) {
                            e._submitBubble = !0
                        }), p._data(n, "submit", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e))
                },
                teardown: function() {
                    if (p.nodeName(this, "form")) return !1;
                    p.event.remove(this, "._submit")
                }
            }), c.change || (p.event.special.change = {
                setup: function() {
                    if (lt.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._justChanged = !0)
                        }), p.event.add(this, "click._change", function(e) {
                            this._justChanged && !e.isTrigger && (this._justChanged = !1), p.event.simulate("change", this, e)
                        });
                        return !1
                    }
                    p.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        lt.test(t.nodeName) && !p._data(t, "change") && (p.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && p.event.simulate("change", this.parentNode, e)
                        }), p._data(t, "change", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return p.event.remove(this, "._change"), !lt.test(this.nodeName)
                }
            }), c.focusin || p.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    p.event.simulate(t, e.target, p.event.fix(e))
                };
                p.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = p._data(r, t);
                        i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = p._data(r, t) - 1;
                        i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
                    }
                }
            }), p.fn.extend({
                on: function(e, t, n, r) {
                    return yt(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                    return yt(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if (typeof e == "object") {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    if (t === !1 || typeof t == "function") n = t, t = undefined;
                    return n === !1 && (n = mt), this.each(function() {
                        p.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        p.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return p.event.trigger(e, t, n, !0)
                }
            });
            var bt = / jQuery\d+="(?:null|\d+)"/g,
                wt = new RegExp("<(?:" + tt + ")[\\s/>]", "i"),
                Et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                St = /<script|<style|<link/i,
                xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Tt = /^true\/(.*)/,
                Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                Ct = nt(r),
                kt = Ct.appendChild(r.createElement("div"));
            p.extend({
                htmlPrefilter: function(e) {
                    return e.replace(Et, "<$1></$2>")
                },
                clone: function(e, t, n) {
                    var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
                    c.html5Clone || p.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(s = kt.firstChild));
                    if ((!c.noCloneEvent || !c.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !p.isXMLDoc(e)) {
                        r = it(s), u = it(e);
                        for (o = 0;
                            (i = u[o]) != null; ++o) r[o] && _t(i, r[o])
                    }
                    if (t)
                        if (n) {
                            u = u || it(e), r = r || it(s);
                            for (o = 0;
                                (i = u[o]) != null; o++) Mt(i, r[o])
                        } else Mt(e, s);
                    return r = it(s, "script"), r.length > 0 && st(r, !a && it(e, "script")), r = u = i = null, s
                },
                cleanData: function(e, t) {
                    var r, i, s, o, u = 0,
                        a = p.expando,
                        f = p.cache,
                        l = c.attributes,
                        h = p.event.special;
                    for (;
                        (r = e[u]) != null; u++)
                        if (t || F(r)) {
                            s = r[a], o = s && f[s];
                            if (o) {
                                if (o.events)
                                    for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                                f[s] && (delete f[s], !l && typeof r.removeAttribute != "undefined" ? r.removeAttribute(a) : r[a] = undefined, n.push(s))
                            }
                        }
                }
            }), p.fn.extend({
                domManip: Dt,
                detach: function(e) {
                    return Pt(this, e, !0)
                },
                remove: function(e) {
                    return Pt(this, e)
                },
                text: function(e) {
                    return Q(this, function(e) {
                        return e === undefined ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Dt(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = Lt(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return Dt(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = Lt(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Dt(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return Dt(this, arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                empty: function() {
                    var e, t = 0;
                    for (;
                        (e = this[t]) != null; t++) {
                        e.nodeType === 1 && p.cleanData(it(e, !1));
                        while (e.firstChild) e.removeChild(e.firstChild);
                        e.options && p.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                        return p.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return Q(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(bt, "") : undefined;
                        if (typeof e == "string" && !St.test(e) && (c.htmlSerialize || !wt.test(e)) && (c.leadingWhitespace || !et.test(e)) && !rt[(Y.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = p.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (p.cleanData(it(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = [];
                    return Dt(this, arguments, function(t) {
                        var n = this.parentNode;
                        p.inArray(this, e) < 0 && (p.cleanData(it(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), p.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                p.fn[e] = function(e) {
                    var n, r = 0,
                        i = [],
                        s = p(e),
                        u = s.length - 1;
                    for (; r <= u; r++) n = r === u ? this : this.clone(!0), p(s[r])[t](n), o.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Ht, Bt = {
                    HTML: "block",
                    BODY: "block"
                },
                It = /^margin/,
                qt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
                Rt = function(e, t, n, r) {
                    var i, s, o = {};
                    for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                    i = n.apply(e, r || []);
                    for (s in t) e.style[s] = o[s];
                    return i
                },
                Ut = r.documentElement;
            (function() {
                function l() {
                    var l, c, h = r.documentElement;
                    h.appendChild(a), f.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = u = !1, n = o = !0, e.getComputedStyle && (c = e.getComputedStyle(f), t = (c || {}).top !== "1%", u = (c || {}).marginLeft === "2px", i = (c || {
                        width: "4px"
                    }).width === "4px", f.style.marginRight = "50%", n = (c || {
                        marginRight: "4px"
                    }).marginRight === "4px", l = f.appendChild(r.createElement("div")), l.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", f.style.width = "1px", o = !parseFloat((e.getComputedStyle(l) || {}).marginRight), f.removeChild(l)), f.style.display = "none", s = f.getClientRects().length === 0, s && (f.style.display = "", f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f.childNodes[0].style.borderCollapse = "separate", l = f.getElementsByTagName("td"), l[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = l[0].offsetHeight === 0, s && (l[0].style.display = "", l[1].style.display = "none", s = l[0].offsetHeight === 0)), h.removeChild(a)
                }
                var t, n, i, s, o, u, a = r.createElement("div"),
                    f = r.createElement("div");
                if (!f.style) return;
                f.style.cssText = "float:left;opacity:.5", c.opacity = f.style.opacity === "0.5", c.cssFloat = !!f.style.cssFloat, f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = f.style.backgroundClip === "content-box", a = r.createElement("div"), a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", f.innerHTML = "", a.appendChild(f), c.boxSizing = f.style.boxSizing === "" || f.style.MozBoxSizing === "" || f.style.WebkitBoxSizing === "", p.extend(c, {
                    reliableHiddenOffsets: function() {
                        return t == null && l(), s
                    },
                    boxSizingReliable: function() {
                        return t == null && l(), i
                    },
                    pixelMarginRight: function() {
                        return t == null && l(), n
                    },
                    pixelPosition: function() {
                        return t == null && l(), t
                    },
                    reliableMarginRight: function() {
                        return t == null && l(), o
                    },
                    reliableMarginLeft: function() {
                        return t == null && l(), u
                    }
                })
            })();
            var zt, Wt, Xt = /^(top|right|bottom|left)$/;
            e.getComputedStyle ? (zt = function(t) {
                var n = t.ownerDocument.defaultView;
                if (!n || !n.opener) n = e;
                return n.getComputedStyle(t)
            }, Wt = function(e, t, n) {
                var r, i, s, o, u = e.style;
                return n = n || zt(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, (o === "" || o === undefined) && !p.contains(e.ownerDocument, e) && (o = p.style(e, t)), n && !c.pixelMarginRight() && qt.test(o) && It.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s), o === undefined ? o : o + ""
            }) : Ut.currentStyle && (zt = function(e) {
                return e.currentStyle
            }, Wt = function(e, t, n) {
                var r, i, s, o, u = e.style;
                return n = n || zt(e), o = n ? n[t] : undefined, o == null && u && u[t] && (o = u[t]), qt.test(o) && !Xt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = t === "fontSize" ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), o === undefined ? o : o + "" || "auto"
            });
            var $t = /alpha\([^)]*\)/i,
                Jt = /opacity\s*=\s*([^)]*)/i,
                Kt = /^(none|table(?!-c[ea]).+)/,
                Qt = new RegExp("^(" + X + ")(.*)$", "i"),
                Gt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Yt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Zt = ["Webkit", "O", "Moz", "ms"],
                en = r.createElement("div").style;
            p.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Wt(e, "opacity");
                                return n === "" ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": c.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, r) {
                    if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                    var i, s, o, u = p.camelCase(t),
                        a = e.style;
                    t = p.cssProps[u] || (p.cssProps[u] = tn(u) || u), o = p.cssHooks[t] || p.cssHooks[u];
                    if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
                    s = typeof n, s === "string" && (i = V.exec(n)) && i[1] && (n = K(e, t, i), s = "number");
                    if (n == null || n !== n) return;
                    s === "number" && (n += i && i[3] || (p.cssNumber[u] ? "" : "px")), !c.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
                    if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
                        a[t] = n
                    } catch (f) {}
                },
                css: function(e, t, n, r) {
                    var i, s, o, u = p.camelCase(t);
                    return t = p.cssProps[u] || (p.cssProps[u] = tn(u) || u), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), s === undefined && (s = Wt(e, t, r)), s === "normal" && t in Yt && (s = Yt[t]), n === "" || n ? (i = parseFloat(s), n === !0 || isFinite(i) ? i || 0 : s) : s
                }
            }), p.each(["height", "width"], function(e, t) {
                p.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return Kt.test(p.css(e, "display")) && e.offsetWidth === 0 ? Rt(e, Gt, function() {
                            return on(e, t, r)
                        }) : on(e, t, r)
                    },
                    set: function(e, n, r) {
                        var i = r && zt(e);
                        return rn(e, n, r ? sn(e, t, r, c.boxSizing && p.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                    }
                }
            }), c.opacity || (p.cssHooks.opacity = {
                get: function(e, t) {
                    return Jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = p.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                        s = r && r.filter || n.filter || "";
                    n.zoom = 1;
                    if ((t >= 1 || t === "") && p.trim(s.replace($t, "")) === "" && n.removeAttribute) {
                        n.removeAttribute("filter");
                        if (t === "" || r && !r.filter) return
                    }
                    n.filter = $t.test(s) ? s.replace($t, i) : s + " " + i
                }
            }), p.cssHooks.marginRight = Vt(c.reliableMarginRight, function(e, t) {
                if (t) return Rt(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"])
            }), p.cssHooks.marginLeft = Vt(c.reliableMarginLeft, function(e, t) {
                if (t) return (parseFloat(Wt(e, "marginLeft")) || (p.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - Rt(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px"
            }), p.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                p.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0,
                            i = {},
                            s = typeof n == "string" ? n.split(" ") : [n];
                        for (; r < 4; r++) i[e + $[r] + t] = s[r] || s[r - 2] || s[0];
                        return i
                    }
                }, It.test(e) || (p.cssHooks[e + t].set = rn)
            }), p.fn.extend({
                css: function(e, t) {
                    return Q(this, function(e, t, n) {
                        var r, i, s = {},
                            o = 0;
                        if (p.isArray(t)) {
                            r = zt(e), i = t.length;
                            for (; o < i; o++) s[t[o]] = p.css(e, t[o], !1, r);
                            return s
                        }
                        return n !== undefined ? p.style(e, t, n) : p.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return nn(this, !0)
                },
                hide: function() {
                    return nn(this)
                },
                toggle: function(e) {
                    return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                        J(this) ? p(this).show() : p(this).hide()
                    })
                }
            }), p.Tween = un, un.prototype = {
                constructor: un,
                init: function(e, t, n, r, i, s) {
                    this.elem = e, this.prop = n, this.easing = i || p.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = un.propHooks[this.prop];
                    return e && e.get ? e.get(this) : un.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = un.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : un.propHooks._default.set(this), this
                }
            }, un.prototype.init.prototype = un.prototype, un.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = p.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t)
                    },
                    set: function(e) {
                        p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.nodeType !== 1 || e.elem.style[p.cssProps[e.prop]] == null && !p.cssHooks[e.prop] ? e.elem[e.prop] = e.now : p.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, un.propHooks.scrollTop = un.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, p.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            }, p.fx = un.prototype.init, p.fx.step = {};
            var an, fn, ln = /^(?:toggle|show|hide)$/,
                cn = /queueHooks$/;
            p.Animation = p.extend(gn, {
                    tweeners: {
                        "*": [function(e, t) {
                            var n = this.createTween(e, t);
                            return K(n.elem, e, V.exec(t), n), n
                        }]
                    },
                    tweener: function(e, t) {
                        p.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_);
                        var n, r = 0,
                            i = e.length;
                        for (; r < i; r++) n = e[r], gn.tweeners[n] = gn.tweeners[n] || [], gn.tweeners[n].unshift(t)
                    },
                    prefilters: [vn],
                    prefilter: function(e, t) {
                        t ? gn.prefilters.unshift(e) : gn.prefilters.push(e)
                    }
                }), p.speed = function(e, t, n) {
                    var r = e && typeof e == "object" ? p.extend({}, e) : {
                        complete: n || !n && t || p.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !p.isFunction(t) && t
                    };
                    r.duration = p.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default;
                    if (r.queue == null || r.queue === !0) r.queue = "fx";
                    return r.old = r.complete, r.complete = function() {
                        p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
                    }, r
                }, p.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(J).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = p.isEmptyObject(e),
                            s = p.speed(t, n, r),
                            o = function() {
                                var t = gn(this, p.extend({}, e), s);
                                (i || p._data(this, "finish")) && t.stop(!0)
                            };
                        return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = e != null && e + "queueHooks",
                                s = p.timers,
                                o = p._data(this);
                            if (i) o[i] && o[i].stop && r(o[i]);
                            else
                                for (i in o) o[i] && o[i].stop && cn.test(i) && r(o[i]);
                            for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                            (t || !n) && p.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = p._data(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                s = p.timers,
                                o = r ? r.length : 0;
                            n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                            for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), p.each(["toggle", "show", "hide"], function(e, t) {
                    var n = p.fn[t];
                    p.fn[t] = function(e, r, i) {
                        return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(pn(t, !0), e, r, i)
                    }
                }), p.each({
                    slideDown: pn("show"),
                    slideUp: pn("hide"),
                    slideToggle: pn("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    p.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), p.timers = [], p.fx.tick = function() {
                    var e, t = p.timers,
                        n = 0;
                    an = p.now();
                    for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
                    t.length || p.fx.stop(), an = undefined
                }, p.fx.timer = function(e) {
                    p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
                }, p.fx.interval = 13, p.fx.start = function() {
                    fn || (fn = e.setInterval(p.fx.tick, p.fx.interval))
                }, p.fx.stop = function() {
                    e.clearInterval(fn), fn = null
                }, p.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, p.fn.delay = function(t, n) {
                    return t = p.fx ? p.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                        var i = e.setTimeout(n, t);
                        r.stop = function() {
                            e.clearTimeout(i)
                        }
                    })
                },
                function() {
                    var e, t = r.createElement("input"),
                        n = r.createElement("div"),
                        i = r.createElement("select"),
                        s = i.appendChild(r.createElement("option"));
                    n = r.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", c.getSetAttribute = n.className !== "t", c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = e.getAttribute("href") === "/a", c.checkOn = !!t.value, c.optSelected = s.selected, c.enctype = !!r.createElement("form").enctype, i.disabled = !0, c.optDisabled = !s.disabled, t = r.createElement("input"), t.setAttribute("value", ""), c.input = t.getAttribute("value") === "", t.value = "t", t.setAttribute("type", "radio"), c.radioValue = t.value === "t"
                }();
            var yn = /\r/g,
                bn = /[\x20\t\r\n\f]+/g;
            p.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    if (!arguments.length) {
                        if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(yn, "") : n == null ? "" : n);
                        return
                    }
                    return r = p.isFunction(e), this.each(function(n) {
                        var i;
                        if (this.nodeType !== 1) return;
                        r ? i = e.call(this, n, p(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                            return e == null ? "" : e + ""
                        })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                        if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
                    })
                }
            }), p.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = p.find.attr(e, "value");
                            return t != null ? t : p.trim(p.text(e)).replace(bn, " ")
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r = e.options,
                                i = e.selectedIndex,
                                s = e.type === "select-one" || i < 0,
                                o = s ? null : [],
                                u = s ? i + 1 : r.length,
                                a = i < 0 ? u : s ? i : 0;
                            for (; a < u; a++) {
                                n = r[a];
                                if ((n.selected || a === i) && (c.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                                    t = p(n).val();
                                    if (s) return t;
                                    o.push(t)
                                }
                            }
                            return o
                        },
                        set: function(e, t) {
                            var n, r, i = e.options,
                                s = p.makeArray(t),
                                o = i.length;
                            while (o--) {
                                r = i[o];
                                if (p.inArray(p.valHooks.option.get(r), s) > -1) try {
                                    r.selected = n = !0
                                } catch (u) {
                                    r.scrollHeight
                                } else r.selected = !1
                            }
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), p.each(["radio", "checkbox"], function() {
                p.valHooks[this] = {
                    set: function(e, t) {
                        if (p.isArray(t)) return e.checked = p.inArray(p(e).val(), t) > -1
                    }
                }, c.checkOn || (p.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                })
            });
            var wn, En, Sn = p.expr.attrHandle,
                xn = /^(?:checked|selected)$/i,
                Tn = c.getSetAttribute,
                Nn = c.input;
            p.fn.extend({
                attr: function(e, t) {
                    return Q(this, p.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        p.removeAttr(this, e)
                    })
                }
            }), p.extend({
                attr: function(e, t, n) {
                    var r, i, s = e.nodeType;
                    if (s === 3 || s === 8 || s === 2) return;
                    if (typeof e.getAttribute == "undefined") return p.prop(e, t, n);
                    if (s !== 1 || !p.isXMLDoc(e)) t = t.toLowerCase(), i = p.attrHooks[t] || (p.expr.match.bool.test(t) ? En : wn);
                    if (n !== undefined) {
                        if (n === null) {
                            p.removeAttr(e, t);
                            return
                        }
                        return i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n)
                    }
                    return i && "get" in i && (r = i.get(e, t)) !== null ? r : (r = p.find.attr(e, t), r == null ? undefined : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!c.radioValue && t === "radio" && p.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0,
                        s = t && t.match(_);
                    if (s && e.nodeType === 1)
                        while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? Nn && Tn || !xn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(Tn ? n : r)
                }
            }), En = {
                set: function(e, t, n) {
                    return t === !1 ? p.removeAttr(e, n) : Nn && Tn || !xn.test(n) ? e.setAttribute(!Tn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = Sn[t] || p.find.attr;
                Nn && Tn || !xn.test(t) ? Sn[t] = function(e, t, r) {
                    var i, s;
                    return r || (s = Sn[t], Sn[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, Sn[t] = s), i
                } : Sn[t] = function(e, t, n) {
                    if (!n) return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            });
            if (!Nn || !Tn) p.attrHooks.value = {
                set: function(e, t, n) {
                    if (!p.nodeName(e, "input")) return wn && wn.set(e, t, n);
                    e.defaultValue = t
                }
            };
            Tn || (wn = {
                set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "";
                    if (n === "value" || t === e.getAttribute(n)) return t
                }
            }, Sn.id = Sn.name = Sn.coords = function(e, t, n) {
                var r;
                if (!n) return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
            }, p.valHooks.button = {
                get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified) return n.value
                },
                set: wn.set
            }, p.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    wn.set(e, t === "" ? !1 : t, n)
                }
            }, p.each(["width", "height"], function(e, t) {
                p.attrHooks[t] = {
                    set: function(e, n) {
                        if (n === "") return e.setAttribute(t, "auto"), n
                    }
                }
            })), c.style || (p.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || undefined
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Cn = /^(?:input|select|textarea|button|object)$/i,
                kn = /^(?:a|area)$/i;
            p.fn.extend({
                prop: function(e, t) {
                    return Q(this, p.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = p.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = undefined, delete this[e]
                        } catch (t) {}
                    })
                }
            }), p.extend({
                prop: function(e, t, n) {
                    var r, i, s = e.nodeType;
                    if (s === 3 || s === 8 || s === 2) return;
                    if (s !== 1 || !p.isXMLDoc(e)) t = p.propFix[t] || t, i = p.propHooks[t];
                    return n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = p.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Cn.test(e.nodeName) || kn.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
                p.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), c.optSelected || (p.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                },
                set: function(e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                }
            }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                p.propFix[this.toLowerCase()] = this
            }), c.enctype || (p.propFix.enctype = "encoding");
            var Ln = /[\t\r\n\f]/g;
            p.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, s, o, u, a = 0;
                    if (p.isFunction(e)) return this.each(function(t) {
                        p(this).addClass(e.call(this, t, An(this)))
                    });
                    if (typeof e == "string" && e) {
                        t = e.match(_) || [];
                        while (n = this[a++]) {
                            i = An(n), r = n.nodeType === 1 && (" " + i + " ").replace(Ln, " ");
                            if (r) {
                                o = 0;
                                while (s = t[o++]) r.indexOf(" " + s + " ") < 0 && (r += s + " ");
                                u = p.trim(r), i !== u && p.attr(n, "class", u)
                            }
                        }
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, s, o, u, a = 0;
                    if (p.isFunction(e)) return this.each(function(t) {
                        p(this).removeClass(e.call(this, t, An(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if (typeof e == "string" && e) {
                        t = e.match(_) || [];
                        while (n = this[a++]) {
                            i = An(n), r = n.nodeType === 1 && (" " + i + " ").replace(Ln, " ");
                            if (r) {
                                o = 0;
                                while (s = t[o++])
                                    while (r.indexOf(" " + s + " ") > -1) r = r.replace(" " + s + " ", " ");
                                u = p.trim(r), i !== u && p.attr(n, "class", u)
                            }
                        }
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
                        p(this).toggleClass(e.call(this, n, An(this), t), t)
                    }) : this.each(function() {
                        var t, r, i, s;
                        if (n === "string") {
                            r = 0, i = p(this), s = e.match(_) || [];
                            while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                        } else if (e === undefined || n === "boolean") t = An(this), t && p._data(this, "__className__", t), p.attr(this, "class", t || e === !1 ? "" : p._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    var t, n, r = 0;
                    t = " " + e + " ";
                    while (n = this[r++])
                        if (n.nodeType === 1 && (" " + An(n) + " ").replace(Ln, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                p.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), p.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var On = e.location,
                Mn = p.now(),
                _n = /\?/,
                Dn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            p.parseJSON = function(t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
                var n, r = null,
                    i = p.trim(t + "");
                return i && !p.trim(i.replace(Dn, function(e, t, i, s) {
                    return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
                })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
            }, p.parseXML = function(t) {
                var n, r;
                if (!t || typeof t != "string") return null;
                try {
                    e.DOMParser ? (r = new e.DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
                } catch (i) {
                    n = undefined
                }
                return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + t), n
            };
            var Pn = /#.*$/,
                Hn = /([?&])_=[^&]*/,
                Bn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
                jn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Fn = /^(?:GET|HEAD)$/,
                In = /^\/\//,
                qn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Rn = {},
                Un = {},
                zn = "*/".concat("*"),
                Wn = On.href,
                Xn = qn.exec(Wn.toLowerCase()) || [];
            p.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Wn,
                    type: "GET",
                    isLocal: jn.test(Xn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": zn,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": p.parseJSON,
                        "text xml": p.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? Jn(Jn(e, p.ajaxSettings), t) : Jn(p.ajaxSettings, e)
                },
                ajaxPrefilter: Vn(Rn),
                ajaxTransport: Vn(Un),
                ajax: function(t, n) {
                    function T(t, n, r, i) {
                        var l, y, b, E, x, T = n;
                        if (w === 2) return;
                        w = 2, u && e.clearTimeout(u), f = undefined, o = i || "", S.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || t === 304, r && (E = Kn(c, S, r)), E = Qn(c, E, S, l);
                        if (l) c.ifModified && (x = S.getResponseHeader("Last-Modified"), x && (p.lastModified[s] = x), x = S.getResponseHeader("etag"), x && (p.etag[s] = x)), t === 204 || c.type === "HEAD" ? T = "nocontent" : t === 304 ? T = "notmodified" : (T = E.state, y = E.data, b = E.error, l = !b);
                        else {
                            b = T;
                            if (t || !T) T = "error", t < 0 && (t = 0)
                        }
                        S.status = t, S.statusText = (n || T) + "", l ? v.resolveWith(h, [y, T, S]) : v.rejectWith(h, [S, T, b]), S.statusCode(g), g = undefined, a && d.trigger(l ? "ajaxSuccess" : "ajaxError", [S, c, l ? y : b]), m.fireWith(h, [S, T]), a && (d.trigger("ajaxComplete", [S, c]), --p.active || p.event.trigger("ajaxStop"))
                    }
                    typeof t == "object" && (n = t, t = undefined), n = n || {};
                    var r, i, s, o, u, a, f, l, c = p.ajaxSetup({}, n),
                        h = c.context || c,
                        d = c.context && (h.nodeType || h.jquery) ? p(h) : p.event,
                        v = p.Deferred(),
                        m = p.Callbacks("once memory"),
                        g = c.statusCode || {},
                        y = {},
                        b = {},
                        w = 0,
                        E = "canceled",
                        S = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (w === 2) {
                                    if (!l) {
                                        l = {};
                                        while (t = Bn.exec(o)) l[t[1].toLowerCase()] = t[2]
                                    }
                                    t = l[e.toLowerCase()]
                                }
                                return t == null ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return w === 2 ? o : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return w || (e = b[n] = b[n] || e, y[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return w || (c.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (w < 2)
                                        for (t in e) g[t] = [g[t], e[t]];
                                    else S.always(e[S.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || E;
                                return f && f.abort(t), T(0, t), this
                            }
                        };
                    v.promise(S).complete = m.add, S.success = S.done, S.error = S.fail, c.url = ((t || c.url || Wn) + "").replace(Pn, "").replace(In, Xn[1] + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = p.trim(c.dataType || "*").toLowerCase().match(_) || [""], c.crossDomain == null && (r = qn.exec(c.url.toLowerCase()), c.crossDomain = !(!r || r[1] === Xn[1] && r[2] === Xn[2] && (r[3] || (r[1] === "http:" ? "80" : "443")) === (Xn[3] || (Xn[1] === "http:" ? "80" : "443")))), c.data && c.processData && typeof c.data != "string" && (c.data = p.param(c.data, c.traditional)), $n(Rn, c, n, S);
                    if (w === 2) return S;
                    a = p.event && c.global, a && p.active++ === 0 && p.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Fn.test(c.type), s = c.url, c.hasContent || (c.data && (s = c.url += (_n.test(s) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Hn.test(s) ? s.replace(Hn, "$1_=" + Mn++) : s + (_n.test(s) ? "&" : "?") + "_=" + Mn++)), c.ifModified && (p.lastModified[s] && S.setRequestHeader("If-Modified-Since", p.lastModified[s]), p.etag[s] && S.setRequestHeader("If-None-Match", p.etag[s])), (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", c.contentType), S.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + zn + "; q=0.01" : "") : c.accepts["*"]);
                    for (i in c.headers) S.setRequestHeader(i, c.headers[i]);
                    if (!c.beforeSend || c.beforeSend.call(h, S, c) !== !1 && w !== 2) {
                        E = "abort";
                        for (i in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) S[i](c[i]);
                        f = $n(Un, c, n, S);
                        if (!f) T(-1, "No Transport");
                        else {
                            S.readyState = 1, a && d.trigger("ajaxSend", [S, c]);
                            if (w === 2) return S;
                            c.async && c.timeout > 0 && (u = e.setTimeout(function() {
                                S.abort("timeout")
                            }, c.timeout));
                            try {
                                w = 1, f.send(y, T)
                            } catch (x) {
                                if (!(w < 2)) throw x;
                                T(-1, x)
                            }
                        }
                        return S
                    }
                    return S.abort()
                },
                getJSON: function(e, t, n) {
                    return p.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return p.get(e, undefined, t, "script")
                }
            }), p.each(["get", "post"], function(e, t) {
                p[t] = function(e, n, r, i) {
                    return p.isFunction(n) && (i = i || r, r = n, n = undefined), p.ajax(p.extend({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    }, p.isPlainObject(e) && e))
                }
            }), p._evalUrl = function(e) {
                return p.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, p.fn.extend({
                wrapAll: function(e) {
                    if (p.isFunction(e)) return this.each(function(t) {
                        p(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            var e = this;
                            while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return p.isFunction(e) ? this.each(function(t) {
                        p(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = p(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = p.isFunction(e);
                    return this.each(function(n) {
                        p(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), p.expr.filters.hidden = function(e) {
                return c.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : Yn(e)
            }, p.expr.filters.visible = function(e) {
                return !p.expr.filters.hidden(e)
            };
            var Zn = /%20/g,
                er = /\[\]$/,
                tr = /\r?\n/g,
                nr = /^(?:submit|button|image|reset|file)$/i,
                rr = /^(?:input|select|textarea|keygen)/i;
            p.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        t = p.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                t === undefined && (t = p.ajaxSettings && p.ajaxSettings.traditional);
                if (p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) ir(n, e[n], t, i);
                return r.join("&").replace(Zn, "+")
            }, p.fn.extend({
                serialize: function() {
                    return p.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = p.prop(this, "elements");
                        return e ? p.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !p(this).is(":disabled") && rr.test(this.nodeName) && !nr.test(e) && (this.checked || !G.test(e))
                    }).map(function(e, t) {
                        var n = p(this).val();
                        return n == null ? null : p.isArray(n) ? p.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(tr, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(tr, "\r\n")
                        }
                    }).get()
                }
            }), p.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
                return this.isLocal ? fr() : r.documentMode > 8 ? ar() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ar() || fr()
            } : ar;
            var sr = 0,
                or = {},
                ur = p.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in or) or[e](undefined, !0)
            }), c.cors = !!ur && "withCredentials" in ur, ur = c.ajax = !!ur, ur && p.ajaxTransport(function(t) {
                if (!t.crossDomain || c.cors) {
                    var n;
                    return {
                        send: function(r, i) {
                            var s, o = t.xhr(),
                                u = ++sr;
                            o.open(t.type, t.url, t.async, t.username, t.password);
                            if (t.xhrFields)
                                for (s in t.xhrFields) o[s] = t.xhrFields[s];
                            t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), !t.crossDomain && !r["X-Requested-With"] && (r["X-Requested-With"] = "XMLHttpRequest");
                            for (s in r) r[s] !== undefined && o.setRequestHeader(s, r[s] + "");
                            o.send(t.hasContent && t.data || null), n = function(e, r) {
                                var s, a, f;
                                if (n && (r || o.readyState === 4)) {
                                    delete or[u], n = undefined, o.onreadystatechange = p.noop;
                                    if (r) o.readyState !== 4 && o.abort();
                                    else {
                                        f = {}, s = o.status, typeof o.responseText == "string" && (f.text = o.responseText);
                                        try {
                                            a = o.statusText
                                        } catch (l) {
                                            a = ""
                                        }!s && t.isLocal && !t.crossDomain ? s = f.text ? 200 : 404 : s === 1223 && (s = 204)
                                    }
                                }
                                f && i(s, a, f, o.getAllResponseHeaders())
                            }, t.async ? o.readyState === 4 ? e.setTimeout(n) : o.onreadystatechange = or[u] = n : n()
                        },
                        abort: function() {
                            n && n(undefined, !0)
                        }
                    }
                }
            }), p.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        return p.globalEval(e), e
                    }
                }
            }), p.ajaxPrefilter("script", function(e) {
                e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), p.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = r.head || p("head")[0] || r.documentElement;
                    return {
                        send: function(i, s) {
                            t = r.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                if (n || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || s(200, "success")
                            }, n.insertBefore(t, n.firstChild)
                        },
                        abort: function() {
                            t && t.onload(undefined, !0)
                        }
                    }
                }
            });
            var lr = [],
                cr = /(=)\?(?=&|$)|\?\?/;
            p.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = lr.pop() || p.expando + "_" + Mn++;
                    return this[e] = !0, e
                }
            }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, s, o, u = t.jsonp !== !1 && (cr.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && cr.test(t.data) && "data");
                if (u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(cr, "$1" + i) : t.jsonp !== !1 && (t.url += (_n.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return o || p.error(i + " was not called"), o[0]
                }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
                    o = arguments
                }, r.always(function() {
                    s === undefined ? p(e).removeProp(i) : e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, lr.push(i)), o && p.isFunction(s) && s(o[0]), o = s = undefined
                }), "script"
            }), p.parseHTML = function(e, t, n) {
                if (!e || typeof e != "string") return null;
                typeof t == "boolean" && (n = t, t = !1), t = t || r;
                var i = x.exec(e),
                    s = !n && [];
                return i ? [t.createElement(i[1])] : (i = ft([e], t, s), s && s.length && p(s).remove(), p.merge([], i.childNodes))
            };
            var hr = p.fn.load;
            return p.fn.load = function(e, t, n) {
                    if (typeof e != "string" && hr) return hr.apply(this, arguments);
                    var r, i, s, o = this,
                        u = e.indexOf(" ");
                    return u > -1 && (r = p.trim(e.slice(u, e.length)), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (i = "POST"), o.length > 0 && p.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(e) {
                        s = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
                    }).always(n && function(e, t) {
                        o.each(function() {
                            n.apply(this, s || [e.responseText, t, e])
                        })
                    }), this
                }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                    p.fn[t] = function(e) {
                        return this.on(t, e)
                    }
                }), p.expr.filters.animated = function(e) {
                    return p.grep(p.timers, function(t) {
                        return e === t.elem
                    }).length
                }, p.offset = {
                    setOffset: function(e, t, n) {
                        var r, i, s, o, u, a, f, l = p.css(e, "position"),
                            c = p(e),
                            h = {};
                        l === "static" && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f = (l === "absolute" || l === "fixed") && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, p.extend({}, u))), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
                    }
                }, p.fn.extend({
                    offset: function(e) {
                        if (arguments.length) return e === undefined ? this : this.each(function(t) {
                            p.offset.setOffset(this, e, t)
                        });
                        var t, n, r = {
                                top: 0,
                                left: 0
                            },
                            i = this[0],
                            s = i && i.ownerDocument;
                        if (!s) return;
                        return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect != "undefined" && (r = i.getBoundingClientRect()), n = pr(s), {
                            top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        }) : r
                    },
                    position: function() {
                        if (!this[0]) return;
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            r = this[0];
                        return p.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                            top: t.top - n.top - p.css(r, "marginTop", !0),
                            left: t.left - n.left - p.css(r, "marginLeft", !0)
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            var e = this.offsetParent;
                            while (e && !p.nodeName(e, "html") && p.css(e, "position") === "static") e = e.offsetParent;
                            return e || Ut
                        })
                    }
                }), p.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, function(e, t) {
                    var n = /Y/.test(t);
                    p.fn[e] = function(r) {
                        return Q(this, function(e, r, i) {
                            var s = pr(e);
                            if (i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
                            s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i
                        }, e, r, arguments.length, null)
                    }
                }), p.each(["top", "left"], function(e, t) {
                    p.cssHooks[t] = Vt(c.pixelPosition, function(e, n) {
                        if (n) return n = Wt(e, t), qt.test(n) ? p(e).position()[t] + "px" : n
                    })
                }), p.each({
                    Height: "height",
                    Width: "width"
                }, function(e, t) {
                    p.each({
                        padding: "inner" + e,
                        content: t,
                        "": "outer" + e
                    }, function(n, r) {
                        p.fn[r] = function(r, i) {
                            var s = arguments.length && (n || typeof r != "boolean"),
                                o = n || (r === !0 || i === !0 ? "margin" : "border");
                            return Q(this, function(t, n, r) {
                                var i;
                                return p.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? p.css(t, n, o) : p.style(t, n, r, o)
                            }, t, s ? r : undefined, s, null)
                        }
                    })
                }), p.fn.extend({
                    bind: function(e, t, n) {
                        return this.on(e, null, t, n)
                    },
                    unbind: function(e, t) {
                        return this.off(e, null, t)
                    },
                    delegate: function(e, t, n, r) {
                        return this.on(t, e, n, r)
                    },
                    undelegate: function(e, t, n) {
                        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                    }
                }), p.fn.size = function() {
                    return this.length
                }, p.fn.andSelf = p.fn.addBack, typeof tp.define == "function" && tp.define.amd && tp.define("jquery", [], function() {
                    return p
                }), "undefined" == typeof p.migrateMute && (p.migrateMute = !0),
                function(e, t, n) {
                    function i(n) {
                        var r = t.console;
                        o[n] || (o[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
                    }

                    function s(t, n, r, s) {
                        if (Object.defineProperty) try {
                            return void Object.defineProperty(t, n, {
                                configurable: !0,
                                enumerable: !0,
                                get: function() {
                                    return i(s), r
                                },
                                set: function(e) {
                                    i(s), r = e
                                }
                            })
                        } catch (o) {}
                        e._definePropertyBroken = !0, t[n] = r
                    }
                    e.migrateVersion = "1.4.1";
                    var o = {};
                    e.migrateWarnings = [], e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
                        o = {}, e.migrateWarnings.length = 0
                    }, "BackCompat" === r.compatMode && i("jQuery is not compatible with Quirks Mode");
                    var u = e("<input/>", {
                            size: 1
                        }).attr("size") && e.attrFn,
                        a = e.attr,
                        f = e.attrHooks.value && e.attrHooks.value.get || function() {
                            return null
                        },
                        l = e.attrHooks.value && e.attrHooks.value.set || function() {
                            return n
                        },
                        c = /^(?:input|button)$/i,
                        h = /^[238]$/,
                        p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                        d = /^(?:checked|selected)$/i;
                    s(e, "attrFn", u || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, r, s, o) {
                        var f = r.toLowerCase(),
                            l = t && t.nodeType;
                        return o && (a.length < 4 && i("jQuery.fn.attr( props, pass ) is deprecated"), t && !h.test(l) && (u ? r in u : e.isFunction(e.fn[r]))) ? e(t)[r](s) : ("type" === r && s !== n && c.test(t.nodeName) && t.parentNode && i("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[f] && p.test(f) && (e.attrHooks[f] = {
                            get: function(t, r) {
                                var i, s = e.prop(t, r);
                                return s === !0 || "boolean" != typeof s && (i = t.getAttributeNode(r)) && i.nodeValue !== !1 ? r.toLowerCase() : n
                            },
                            set: function(t, n, r) {
                                var i;
                                return n === !1 ? e.removeAttr(t, r) : (i = e.propFix[r] || r, i in t && (t[i] = !0), t.setAttribute(r, r.toLowerCase())), r
                            }
                        }, d.test(f) && i("jQuery.fn.attr('" + f + "') might use property instead of attribute")), a.call(e, t, r, s))
                    }, e.attrHooks.value = {
                        get: function(e, t) {
                            var n = (e.nodeName || "").toLowerCase();
                            return "button" === n ? f.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
                        },
                        set: function(e, t) {
                            var n = (e.nodeName || "").toLowerCase();
                            return "button" === n ? l.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value', val) no longer sets properties"), void(e.value = t))
                        }
                    };
                    var v, m, g = e.fn.init,
                        y = e.find,
                        b = e.parseJSON,
                        w = /^\s*</,
                        E = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
                        S = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
                        x = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
                    e.fn.init = function(t, s, o) {
                        var u, a;
                        return t && "string" == typeof t && !e.isPlainObject(s) && (u = x.exec(e.trim(t))) && u[0] && (w.test(t) || i("$(html) HTML strings must start with '<' character"), u[3] && i("$(html) HTML text after last tag is ignored"), "#" === u[0].charAt(0) && (i("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), s && s.context && s.context.nodeType && (s = s.context), e.parseHTML) ? g.call(this, e.parseHTML(u[2], s && s.ownerDocument || s || r, !0), s, o) : (a = g.apply(this, arguments), t && t.selector !== n ? (a.selector = t.selector, a.context = t.context) : (a.selector = "string" == typeof t ? t : "", t && (a.context = t.nodeType ? t : s || r)), a)
                    }, e.fn.init.prototype = e.fn, e.find = function(e) {
                        var t = Array.prototype.slice.call(arguments);
                        if ("string" == typeof e && E.test(e)) try {
                            r.querySelector(e)
                        } catch (n) {
                            e = e.replace(S, function(e, t, n, r) {
                                return "[" + t + n + '"' + r + '"]'
                            });
                            try {
                                r.querySelector(e), i("Attribute selector with '#' must be quoted: " + t[0]), t[0] = e
                            } catch (s) {
                                i("Attribute selector with '#' was not fixed: " + t[0])
                            }
                        }
                        return y.apply(this, t)
                    };
                    var T;
                    for (T in y) Object.prototype.hasOwnProperty.call(y, T) && (e.find[T] = y[T]);
                    e.parseJSON = function(e) {
                        return e ? b.apply(this, arguments) : (i("jQuery.parseJSON requires a valid JSON string"), null)
                    }, e.uaMatch = function(e) {
                        e = e.toLowerCase();
                        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                        return {
                            browser: t[1] || "",
                            version: t[2] || "0"
                        }
                    }, e.browser || (v = e.uaMatch(navigator.userAgent), m = {}, v.browser && (m[v.browser] = !0, m.version = v.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), e.browser = m), s(e, "browser", e.browser, "jQuery.browser is deprecated"), e.boxModel = e.support.boxModel = "CSS1Compat" === r.compatMode, s(e, "boxModel", e.boxModel, "jQuery.boxModel is deprecated"), s(e.support, "boxModel", e.support.boxModel, "jQuery.support.boxModel is deprecated"), e.sub = function() {
                        function t(e, n) {
                            return new t.fn.init(e, n)
                        }
                        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(r, i) {
                            var s = e.fn.init.call(this, r, i, n);
                            return s instanceof t ? s : t(s)
                        }, t.fn.init.prototype = t.fn;
                        var n = t(r);
                        return i("jQuery.sub() is deprecated"), t
                    }, e.fn.size = function() {
                        return i("jQuery.fn.size() is deprecated; use the .length property"), this.length
                    };
                    var N = !1;
                    e.swap && e.each(["height", "width", "reliableMarginRight"], function(t, n) {
                        var r = e.cssHooks[n] && e.cssHooks[n].get;
                        r && (e.cssHooks[n].get = function() {
                            var e;
                            return N = !0, e = r.apply(this, arguments), N = !1, e
                        })
                    }), e.swap = function(e, t, n, r) {
                        var s, o, u = {};
                        N || i("jQuery.swap() is undocumented and deprecated");
                        for (o in t) u[o] = e.style[o], e.style[o] = t[o];
                        s = n.apply(e, r || []);
                        for (o in t) e.style[o] = u[o];
                        return s
                    }, e.ajaxSetup({
                        converters: {
                            "text json": e.parseJSON
                        }
                    });
                    var C = e.fn.data;
                    e.fn.data = function(t) {
                        var r, s, o = this[0];
                        return !o || "events" !== t || 1 !== arguments.length || (r = e.data(o, t), s = e._data(o, t), r !== n && r !== s || s === n) ? C.apply(this, arguments) : (i("Use of jQuery.fn.data('events') is deprecated"), s)
                    };
                    var k = /\/(java|ecma)script/i;
                    e.clean || (e.clean = function(t, n, s, o) {
                        n = n || r, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, i("jQuery.clean() is deprecated");
                        var u, a, f, l, c = [];
                        if (e.merge(c, e.buildFragment(t, n).childNodes), s)
                            for (f = function(e) {
                                    return !e.type || k.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : s.appendChild(e) : void 0
                                }, u = 0; null != (a = c[u]); u++) e.nodeName(a, "script") && f(a) || (s.appendChild(a), "undefined" != typeof a.getElementsByTagName && (l = e.grep(e.merge([], a.getElementsByTagName("script")), f), c.splice.apply(c, [u + 1, 0].concat(l)), u += l.length));
                        return c
                    });
                    var L = e.event.add,
                        A = e.event.remove,
                        O = e.event.trigger,
                        M = e.fn.toggle,
                        _ = e.fn.live,
                        D = e.fn.die,
                        P = e.fn.load,
                        H = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
                        B = new RegExp("\\b(?:" + H + ")\\b"),
                        j = /(?:^|\s)hover(\.\S+|)\b/,
                        F = function(t) {
                            return "string" != typeof t || e.event.special.hover ? t : (j.test(t) && i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(j, "mouseenter$1 mouseleave$1"))
                        };
                    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && s(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, s, o) {
                        e !== r && B.test(t) && i("AJAX events should be attached to document: " + t), L.call(this, e, F(t || ""), n, s, o)
                    }, e.event.remove = function(e, t, n, r, i) {
                        A.call(this, e, F(t) || "", n, r, i)
                    }, e.each(["load", "unload", "error"], function(t, n) {
                        e.fn[n] = function() {
                            var e = Array.prototype.slice.call(arguments, 0);
                            return "load" === n && "string" == typeof e[0] ? P.apply(this, e) : (i("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this))
                        }
                    }), e.fn.toggle = function(t, n) {
                        if (!e.isFunction(t) || !e.isFunction(n)) return M.apply(this, arguments);
                        i("jQuery.fn.toggle(handler, handler...) is deprecated");
                        var r = arguments,
                            s = t.guid || e.guid++,
                            o = 0,
                            u = function(n) {
                                var i = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                                return e._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), r[i].apply(this, arguments) || !1
                            };
                        for (u.guid = s; o < r.length;) r[o++].guid = s;
                        return this.click(u)
                    }, e.fn.live = function(t, n, r) {
                        return i("jQuery.fn.live() is deprecated"), _ ? _.apply(this, arguments) : (e(this.context).on(t, this.selector, n, r), this)
                    }, e.fn.die = function(t, n) {
                        return i("jQuery.fn.die() is deprecated"), D ? D.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
                    }, e.event.trigger = function(e, t, n, s) {
                        return n || B.test(e) || i("Global events are undocumented and deprecated"), O.call(this, e, t, n || r, s)
                    }, e.each(H.split("|"), function(t, n) {
                        e.event.special[n] = {
                            setup: function() {
                                var t = this;
                                return t !== r && (e.event.add(r, n + "." + e.guid, function() {
                                    e.event.trigger(n, Array.prototype.slice.call(arguments, 1), t, !0)
                                }), e._data(this, n, e.guid++)), !1
                            },
                            teardown: function() {
                                return this !== r && e.event.remove(r, n + "." + e._data(this, n)), !1
                            }
                        }
                    }), e.event.special.ready = {
                        setup: function() {
                            this === r && i("'ready' event is deprecated")
                        }
                    };
                    var I = e.fn.andSelf || e.fn.addBack,
                        q = e.fn.find;
                    if (e.fn.andSelf = function() {
                            return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), I.apply(this, arguments)
                        }, e.fn.find = function(e) {
                            var t = q.apply(this, arguments);
                            return t.context = this.context, t.selector = this.selector ? this.selector + " " + e : e, t
                        }, e.Callbacks) {
                        var R = e.Deferred,
                            U = [
                                ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                                ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                                ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
                            ];
                        e.Deferred = function(t) {
                            var n = R(),
                                r = n.promise();
                            return n.pipe = r.pipe = function() {
                                var t = arguments;
                                return i("deferred.pipe() is deprecated"), e.Deferred(function(i) {
                                    e.each(U, function(s, o) {
                                        var u = e.isFunction(t[s]) && t[s];
                                        n[o[1]](function() {
                                            var t = u && u.apply(this, arguments);
                                            t && e.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === r ? i.promise() : this, u ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            }, n.isResolved = function() {
                                return i("deferred.isResolved is deprecated"), "resolved" === n.state()
                            }, n.isRejected = function() {
                                return i("deferred.isRejected is deprecated"), "rejected" === n.state()
                            }, t && t.call(n, n), n
                        }
                    }
                }(p, e),
                function(e) {
                    var t, n, i = 1,
                        s, o = this,
                        u = !1,
                        a = "postMessage",
                        f = "addEventListener",
                        l, c = o[a] && !e.browser.opera;
                    e[a] = function(t, n, r) {
                        if (!n) return;
                        t = typeof t == "string" ? t : e.param(t), r = r || parent, c ? r[a](t, n.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : n && (r.location = n.replace(/#.*$/, "") + "#" + +(new Date) + i++ + "&" + t)
                    }, e.receiveMessage = l = function(i, a, h) {
                        c ? (i && (s && l(), s = function(t) {
                            if (typeof a == "string" && t.origin !== a || e.isFunction(a) && a(t.origin) === u) return u;
                            i(t)
                        }), o[f] ? o[i ? f : "removeEventListener"]("message", s, u) : o[i ? "attachEvent" : "detachEvent"]("onmessage", s)) : (t && clearInterval(t), t = null, i && (h = typeof a == "number" ? a : typeof h == "number" ? h : 100, t = setInterval(function() {
                            var e = r.location.hash,
                                t = /^#?\d+&/;
                            e !== n && t.test(e) && (n = e, i({
                                data: e.replace(t, "")
                            }))
                        }, h)))
                    }
                }(p),
                function(e) {
                    e.deparam = function(t, n) {
                        var r = {},
                            i = {
                                "true": !0,
                                "false": !1,
                                "null": null
                            };
                        return e.each(t.replace(/\+/g, " ").split("&"), function(t, s) {
                            var o = s.split("="),
                                u = "";
                            try {
                                u = decodeURIComponent(o[0])
                            } catch (a) {
                                return
                            }
                            var f, l = r,
                                c = 0,
                                h = u.split("]["),
                                p = h.length - 1;
                            /\[/.test(h[0]) && /\]$/.test(h[p]) ? (h[p] = h[p].replace(/\]$/, ""), h = h.shift().split("[").concat(h), p = h.length - 1) : p = 0;
                            if (o.length === 2) {
                                f = decodeURIComponent(o[1]), n && (f = f && !isNaN(f) ? +f : f === "undefined" ? undefined : i[f] !== undefined ? i[f] : f);
                                if (p)
                                    for (; c <= p; c++) u = h[c] === "" ? l.length : h[c], l = l[u] = c < p ? l[u] || (h[c + 1] && isNaN(h[c + 1]) ? {} : []) : f;
                                else e.isArray(r[u]) ? r[u].push(f) : r[u] !== undefined ? r[u] = [r[u], f] : r[u] = f
                            } else u && (r[u] = n ? undefined : "")
                        }), r
                    }
                }(p),
                function(t) {
                    var n = {},
                        i = Math.max,
                        s = Math.min;
                    n.c = {}, n.c.d = t(r), n.c.t = function(e) {
                        return e.originalEvent.touches.length - 1
                    }, n.o = function() {
                        var i = this;
                        this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
                            var n = function(e, t) {
                                var n;
                                for (n in t) i.o[n] = t[n];
                                i.init(), i._configure()._draw()
                            };
                            if (this.$.data("kontroled")) return;
                            this.$.data("kontroled", !0), this.extend(), this.o = t.extend({
                                min: this.$.data("min") || 0,
                                max: this.$.data("max") || 100,
                                stopper: !0,
                                readOnly: this.$.data("readonly") || this.$.attr("readonly") == "readonly",
                                cursor: this.$.data("cursor") === !0 && 30 || this.$.data("cursor") || 0,
                                thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                                lineCap: this.$.data("linecap") || "butt",
                                width: this.$.data("width") || 200,
                                height: this.$.data("height") || 200,
                                displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
                                displayPrevious: this.$.data("displayprevious"),
                                fgColor: this.$.data("fgcolor") || "#87CEEB",
                                inputColor: this.$.data("inputcolor"),
                                font: this.$.data("font") || "Arial",
                                fontWeight: this.$.data("font-weight") || "bold",
                                inline: !1,
                                step: this.$.data("step") || 1,
                                draw: null,
                                change: null,
                                cancel: null,
                                release: null,
                                error: null
                            }, this.o), this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(e) {
                                var n = t(this);
                                i.i[e] = n, i.v[e] = n.val(), n.bind("change", function() {
                                    var t = {};
                                    t[e] = n.val(), i.val(t)
                                })
                            }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.$.val(), this.v == "" && (this.v = this.o.min), this.$.bind("change", function() {
                                i.val(i._validate(i.$.val()))
                            })), !this.o.displayInput && this.$.hide(), this.$c = t(r.createElement("canvas")), typeof G_vmlCanvasManager != "undefined" && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;
                            if (!this.c) {
                                this.o.error && this.o.error();
                                return
                            }
                            return this.scale = (e.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + '"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", n).parent().bind("configure", n), this._listen()._configure()._xy().init(), this.isInit = !0, this._draw(), this
                        }, this._carve = function() {
                            if (this.relative) {
                                var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                                    t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                                this.w = this.h = Math.min(e, t)
                            } else this.w = this.o.width, this.h = this.o.height;
                            return this.$div.css({
                                width: this.w + "px",
                                height: this.h + "px"
                            }), this.$c.attr({
                                width: this.w,
                                height: this.h
                            }), this.scale !== 1 && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
                        }, this._draw = function() {
                            var e = !0;
                            i.g = i.c, i.clear(), i.dH && (e = i.dH()), e !== !1 && i.draw()
                        }, this._touch = function(e) {
                            var t = function(e) {
                                var t = i.xy2val(e.originalEvent.touches[i.t].pageX, e.originalEvent.touches[i.t].pageY);
                                if (t == i.cv) return;
                                if (i.cH && i.cH(t) === !1) return;
                                i.change(i._validate(t)), i._draw()
                            };
                            return this.t = n.c.t(e), t(e), n.c.d.bind("touchmove.k", t).bind("touchend.k", function() {
                                n.c.d.unbind("touchmove.k touchend.k");
                                if (i.rH && i.rH(i.cv) === !1) return;
                                i.val(i.cv)
                            }), this
                        }, this._mouse = function(e) {
                            var t = function(e) {
                                var t = i.xy2val(e.pageX, e.pageY);
                                if (t == i.cv) return;
                                if (i.cH && i.cH(t) === !1) return;
                                i.change(i._validate(t)), i._draw()
                            };
                            return t(e), n.c.d.bind("mousemove.k", t).bind("keyup.k", function(e) {
                                if (e.keyCode === 27) {
                                    n.c.d.unbind("mouseup.k mousemove.k keyup.k");
                                    if (i.eH && i.eH() === !1) return;
                                    i.cancel()
                                }
                            }).bind("mouseup.k", function(e) {
                                n.c.d.unbind("mousemove.k mouseup.k keyup.k");
                                if (i.rH && i.rH(i.cv) === !1) return;
                                i.val(i.cv)
                            }), this
                        }, this._xy = function() {
                            var e = this.$c.offset();
                            return this.x = e.left, this.y = e.top, this
                        }, this._listen = function() {
                            return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(e) {
                                e.preventDefault(), i._xy()._mouse(e)
                            }).bind("touchstart", function(e) {
                                e.preventDefault(), i._xy()._touch(e)
                            }), this.listen()), this.relative && t(e).resize(function() {
                                i._carve().init(), i._draw()
                            }), this
                        }, this._configure = function() {
                            return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
                        }, this._clear = function() {
                            this.$c[0].width = this.$c[0].width
                        }, this._validate = function(e) {
                            return ~~((e < 0 ? -0.5 : .5) + e / this.o.step) * this.o.step
                        }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function(e) {}, this.val = function(e) {}, this.xy2val = function(e, t) {}, this.draw = function() {}, this.clear = function() {
                            this._clear()
                        }, this.h2rgba = function(e, t) {
                            var n;
                            return e = e.substring(1, 7), n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)], "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")"
                        }, this.copy = function(e, t) {
                            for (var n in e) t[n] = e[n]
                        }
                    }, n.Dial = function() {
                        n.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
                            this.o = t.extend({
                                bgColor: this.$.data("bgcolor") || "#EEEEEE",
                                angleOffset: this.$.data("angleoffset") || 0,
                                angleArc: this.$.data("anglearc") || 360,
                                inline: !0
                            }, this.o)
                        }, this.val = function(e) {
                            if (null == e) return this.v;
                            this.cv = this.o.stopper ? i(s(e, this.o.max), this.o.min) : e, this.v = this.cv, this.$.val(this.v), this._draw()
                        }, this.xy2val = function(e, t) {
                            var n, r;
                            return n = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset, this.angleArc != this.PI2 && n < 0 && n > -0.5 ? n = 0 : n < 0 && (n += this.PI2), r = ~~(.5 + n * (this.o.max - this.o.min) / this.angleArc) + this.o.min, this.o.stopper && (r = i(s(r, this.o.max), this.o.min)), r
                        }, this.listen = function() {
                            var n = this,
                                r = function(e) {
                                    e.preventDefault();
                                    var t = e.originalEvent,
                                        r = t.detail || t.wheelDeltaX,
                                        i = t.detail || t.wheelDeltaY,
                                        s = parseInt(n.$.val()) + (r > 0 || i > 0 ? n.o.step : r < 0 || i < 0 ? -n.o.step : 0);
                                    if (n.cH && n.cH(s) === !1) return;
                                    n.val(s)
                                },
                                o, u, a = 1,
                                f = {
                                    37: -n.o.step,
                                    38: n.o.step,
                                    39: n.o.step,
                                    40: -n.o.step
                                };
                            this.$.bind("keydown", function(r) {
                                var l = r.keyCode;
                                l >= 96 && l <= 105 && (l = r.keyCode = l - 48), o = parseInt(String.fromCharCode(l));
                                if (isNaN(o)) {
                                    l !== 13 && l !== 8 && l !== 9 && l !== 189 && r.preventDefault();
                                    if (t.inArray(l, [37, 38, 39, 40]) > -1) {
                                        r.preventDefault();
                                        var c = parseInt(n.$.val()) + f[l] * a;
                                        n.o.stopper && (c = i(s(c, n.o.max), n.o.min)), n.change(c), n._draw(), u = e.setTimeout(function() {
                                            a *= 2
                                        }, 30)
                                    }
                                }
                            }).bind("keyup", function(t) {
                                isNaN(o) ? u && (e.clearTimeout(u), u = null, a = 1, n.val(n.$.val())) : n.$.val() > n.o.max && n.$.val(n.o.max) || n.$.val() < n.o.min && n.$.val(n.o.min)
                            }), this.$c.bind("mousewheel DOMMouseScroll", r), this.$.bind("mousewheel DOMMouseScroll", r)
                        }, this.init = function() {
                            if (this.v < this.o.min || this.v > this.o.max) this.v = this.o.min;
                            this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
                            var e = i(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                            this.o.displayInput && this.i.css({
                                width: (this.w / 2 + 4 >> 0) + "px",
                                height: (this.w / 3 >> 0) + "px",
                                position: "absolute",
                                "vertical-align": "middle",
                                "margin-top": (this.w / 3 >> 0) + "px",
                                "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
                                border: 0,
                                background: "none",
                                font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
                                "text-align": "center",
                                color: this.o.inputColor || this.o.fgColor,
                                padding: "0px",
                                "-webkit-appearance": "none"
                            }) || this.i.css({
                                width: "0px",
                                visibility: "hidden"
                            })
                        }, this.change = function(e) {
                            this.cv = e, this.$.val(e)
                        }, this.angle = function(e) {
                            return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min)
                        }, this.draw = function() {
                            var e = this.g,
                                t = this.angle(this.cv),
                                n = this.startAngle,
                                r = n + t,
                                i, s, o = 1;
                            e.lineWidth = this.lineWidth, e.lineCap = this.lineCap, this.o.cursor && (n = r - this.cursorExt) && (r += this.cursorExt), e.beginPath(), e.strokeStyle = this.o.bgColor, e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), e.stroke(), this.o.displayPrevious && (s = this.startAngle + this.angle(this.v), i = this.startAngle, this.o.cursor && (i = s - this.cursorExt) && (s += this.cursorExt), e.beginPath(), e.strokeStyle = this.pColor, e.arc(this.xy, this.xy, this.radius, i, s, !1), e.stroke(), o = this.cv == this.v), e.beginPath(), e.strokeStyle = o ? this.o.fgColor : this.fgColor, e.arc(this.xy, this.xy, this.radius, n, r, !1), e.stroke()
                        }, this.cancel = function() {
                            this.val(this.v)
                        }
                    }, t.fn.dial = t.fn.knob = function(e) {
                        return this.each(function() {
                            var r = new n.Dial;
                            r.o = e, r.$ = t(this), r.run()
                        }).parent()
                    }
                }(p),
                function(e) {
                    function n(e) {
                        if (s.raw) return e;
                        try {
                            return decodeURIComponent(e.replace(t, " "))
                        } catch (n) {}
                    }

                    function i(e) {
                        e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = n(e);
                        try {
                            return s.json ? JSON.parse(e) : e
                        } catch (t) {}
                    }
                    var t = /\+/g,
                        s = e.cookie = function(t, o, u) {
                            if (o !== undefined) {
                                u = e.extend({}, s.defaults, u);
                                if (typeof u.expires == "number") {
                                    var a = u.expires,
                                        f = u.expires = new Date;
                                    f.setDate(f.getDate() + a)
                                }
                                return o = s.json ? JSON.stringify(o) : String(o), r.cookie = [s.raw ? t : encodeURIComponent(t), "=", s.raw ? o : encodeURIComponent(o), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : "", u.samesite ? "; samesite=" + u.samesite : ""].join("")
                            }
                            var l = t ? undefined : {},
                                c = r.cookie ? r.cookie.split("; ") : [];
                            for (var h = 0, p = c.length; h < p; h++) {
                                var d = c[h].split("="),
                                    v = n(d.shift()),
                                    m = d.join("=");
                                if (t && t === v) {
                                    l = i(m);
                                    break
                                }!t && (m = i(m)) !== undefined && (l[v] = m)
                            }
                            return l
                        };
                    s.defaults = {}, e.removeCookie = function(t, n) {
                        return e.cookie(t) !== undefined ? (e.cookie(t, "", e.extend({}, n, {
                            expires: -1
                        })), !0) : !1
                    }
                }(p),
                function(t) {
                    function i(n) {
                        var r = arguments.length,
                            i = e[n],
                            s = arguments,
                            o = s[1],
                            u, a, f;
                        if (r < 2) throw new Error("Minimum 2 arguments must be given");
                        if (t.isArray(o)) {
                            a = {};
                            for (var l in o) {
                                u = o[l];
                                try {
                                    a[u] = JSON.parse(i.getItem(u))
                                } catch (c) {
                                    a[u] = i.getItem(u)
                                }
                            }
                            return a
                        }
                        if (r != 2) {
                            try {
                                a = JSON.parse(i.getItem(o))
                            } catch (c) {
                                throw new ReferenceError(o + " is not defined in this storage")
                            }
                            for (var l = 2; l < r - 1; l++) {
                                a = a[s[l]];
                                if (a === undefined) throw new ReferenceError([].slice.call(s, 1, l + 1).join(".") + " is not defined in this storage")
                            }
                            if (t.isArray(s[l])) {
                                f = a, a = {};
                                for (var h in s[l]) a[s[l][h]] = f[s[l][h]];
                                return a
                            }
                            return a[s[l]]
                        }
                        try {
                            return JSON.parse(i.getItem(o))
                        } catch (c) {
                            return i.getItem(o)
                        }
                    }

                    function s(n) {
                        var r = arguments.length,
                            i = e[n],
                            s = arguments,
                            o = s[1],
                            u = s[2],
                            a, f = {},
                            l;
                        if (r < 2 || !t.isPlainObject(o) && r < 3) throw new Error("Minimum 3 arguments must be given or second parameter must be an object");
                        if (t.isPlainObject(o)) {
                            for (var c in o) a = o[c], t.isPlainObject(a) ? i.setItem(c, JSON.stringify(a)) : i.setItem(c, a);
                            return o
                        }
                        if (r == 3) return typeof u == "object" ? i.setItem(o, JSON.stringify(u)) : i.setItem(o, u), u;
                        try {
                            l = i.getItem(o), l != null && (f = JSON.parse(l))
                        } catch (h) {}
                        l = f;
                        for (var c = 2; c < r - 2; c++) {
                            a = s[c];
                            if (!l[a] || !t.isPlainObject(l[a])) l[a] = {};
                            l = l[a]
                        }
                        return l[s[c]] = s[c + 1], i.setItem(o, JSON.stringify(f)), f
                    }

                    function o(n) {
                        var r = arguments.length,
                            i = e[n],
                            s = arguments,
                            o = s[1],
                            u, a;
                        if (r < 2) throw new Error("Minimum 2 arguments must be given");
                        if (t.isArray(o)) {
                            for (var f in o) i.removeItem(o[f]);
                            return !0
                        }
                        if (r == 2) return i.removeItem(o), !0;
                        try {
                            u = a = JSON.parse(i.getItem(o))
                        } catch (l) {
                            throw new ReferenceError(o + " is not defined in this storage")
                        }
                        for (var f = 2; f < r - 1; f++) {
                            a = a[s[f]];
                            if (a === undefined) throw new ReferenceError([].slice.call(s, 1, f).join(".") + " is not defined in this storage")
                        }
                        if (t.isArray(s[f]))
                            for (var c in s[f]) delete a[s[f][c]];
                        else delete a[s[f]];
                        return i.setItem(o, JSON.stringify(u)), !0
                    }

                    function u(e, n) {
                        var r = l(e);
                        for (var i in r) o(e, r[i]);
                        if (n)
                            for (var i in t.namespaceStorages) c(i)
                    }

                    function a(n) {
                        var r = arguments.length,
                            s = arguments,
                            o = e[n],
                            u = s[1];
                        if (r == 1) return l(n).length == 0;
                        if (t.isArray(u)) {
                            for (var f = 0; f < u.length; f++)
                                if (!a(n, u[f])) return !1;
                            return !0
                        }
                        try {
                            var c = i.apply(this, arguments);
                            t.isArray(s[r - 1]) || (c = {
                                totest: c
                            });
                            for (var f in c)
                                if (!(t.isPlainObject(c[f]) && t.isEmptyObject(c[f]) || t.isArray(c[f]) && !c[f].length || !c[f])) return !1;
                            return !0
                        } catch (h) {
                            return !0
                        }
                    }

                    function f(n) {
                        var r = arguments.length,
                            s = arguments,
                            o = e[n],
                            u = s[1];
                        if (r < 2) throw new Error("Minimum 2 arguments must be given");
                        if (t.isArray(u)) {
                            for (var a = 0; a < u.length; a++)
                                if (!f(n, u[a])) return !1;
                            return !0
                        }
                        try {
                            var l = i.apply(this, arguments);
                            t.isArray(s[r - 1]) || (l = {
                                totest: l
                            });
                            for (var a in l)
                                if (l[a] === undefined || l[a] === null) return !1;
                            return !0
                        } catch (c) {
                            return !1
                        }
                    }

                    function l(n) {
                        var r = arguments.length,
                            s = e[n],
                            o = arguments,
                            u = o[1],
                            a = [],
                            f = {};
                        r > 1 ? f = i.apply(this, o) : f = s;
                        if (f._cookie)
                            for (var l in t.cookie()) l != "" && a.push(l.replace(f._prefix, ""));
                        else
                            for (var c in f) a.push(c);
                        return a
                    }

                    function c(n) {
                        if (!n || typeof n != "string") throw new Error("First parameter must be a string");
                        d ? (e.localStorage.getItem(n) || e.localStorage.setItem(n, "{}"), e.sessionStorage.getItem(n) || e.sessionStorage.setItem(n, "{}")) : (e.localCookieStorage.getItem(n) || e.localCookieStorage.setItem(n, "{}"), e.sessionCookieStorage.getItem(n) || e.sessionCookieStorage.setItem(n, "{}"));
                        var r = {
                            localStorage: t.extend({}, t.localStorage, {
                                _ns: n
                            }),
                            sessionStorage: t.extend({}, t.sessionStorage, {
                                _ns: n
                            })
                        };
                        return t.cookie && (e.cookieStorage.getItem(n) || e.cookieStorage.setItem(n, "{}"), r.cookieStorage = t.extend({}, t.cookieStorage, {
                            _ns: n
                        })), t.namespaceStorages[n] = r, r
                    }

                    function h(t) {
                        var n = "jsapi";
                        try {
                            return e[t] ? (e[t].setItem(n, n), e[t].removeItem(n), !0) : !1
                        } catch (r) {
                            return !1
                        }
                    }
                    var n = "ls_",
                        r = "ss_",
                        d = h("localStorage"),
                        v = {
                            _type: "",
                            _ns: "",
                            _callMethod: function(e, t) {
                                var n = [this._type],
                                    t = Array.prototype.slice.call(t),
                                    r = t[0];
                                return this._ns && n.push(this._ns), typeof r == "string" && r.indexOf(".") !== -1 && (t.shift(), [].unshift.apply(t, r.split("."))), [].push.apply(n, t), e.apply(this, n)
                            },
                            get: function() {
                                return this._callMethod(i, arguments)
                            },
                            set: function() {
                                var e = arguments.length,
                                    n = arguments,
                                    r = n[0];
                                if (e < 1 || !t.isPlainObject(r) && e < 2) throw new Error("Minimum 2 arguments must be given or first parameter must be an object");
                                if (t.isPlainObject(r) && this._ns) {
                                    for (var i in r) s(this._type, this._ns, i, r[i]);
                                    return r
                                }
                                var o = this._callMethod(s, n);
                                return this._ns ? o[r.split(".")[0]] : o
                            },
                            remove: function() {
                                if (arguments.length < 1) throw new Error("Minimum 1 argument must be given");
                                return this._callMethod(o, arguments)
                            },
                            removeAll: function(e) {
                                return this._ns ? (s(this._type, this._ns, {}), !0) : u(this._type, e)
                            },
                            isEmpty: function() {
                                return this._callMethod(a, arguments)
                            },
                            isSet: function() {
                                if (arguments.length < 1) throw new Error("Minimum 1 argument must be given");
                                return this._callMethod(f, arguments)
                            },
                            keys: function() {
                                return this._callMethod(l, arguments)
                            }
                        };
                    if (t.cookie) {
                        e.name || (e.name = Math.floor(Math.random() * 1e8));
                        var m = {
                            _cookie: !0,
                            _prefix: "",
                            _expires: null,
                            _path: null,
                            _domain: null,
                            setItem: function(e, n) {
                                t.cookie(this._prefix + e, n, {
                                    expires: this._expires,
                                    path: this._path,
                                    domain: this._domain
                                })
                            },
                            getItem: function(e) {
                                return t.cookie(this._prefix + e)
                            },
                            removeItem: function(e) {
                                return t.removeCookie(this._prefix + e)
                            },
                            clear: function() {
                                for (var e in t.cookie()) e != "" && (!this._prefix && e.indexOf(n) === -1 && e.indexOf(r) === -1 || this._prefix && e.indexOf(this._prefix) === 0) && t.removeCookie(e)
                            },
                            setExpires: function(e) {
                                return this._expires = e, this
                            },
                            setPath: function(e) {
                                return this._path = e, this
                            },
                            setDomain: function(e) {
                                return this._domain = e, this
                            },
                            setConf: function(e) {
                                return e.path && (this._path = e.path), e.domain && (this._domain = e.domain), e.expires && (this._expires = e.expires), this
                            },
                            setDefaultConf: function() {
                                this._path = this._domain = this._expires = null
                            }
                        };
                        d || (e.localCookieStorage = t.extend({}, m, {
                            _prefix: n,
                            _expires: 3650
                        }), e.sessionCookieStorage = t.extend({}, m, {
                            _prefix: r + e.name + "_"
                        })), p.cookieStorage = t.extend({}, m), t.cookieStorage = t.extend({}, v, {
                            _type: "cookieStorage",
                            setExpires: function(e) {
                                return p.cookieStorage.setExpires(e), this
                            },
                            setPath: function(e) {
                                return p.cookieStorage.setPath(e), this
                            },
                            setDomain: function(e) {
                                return p.cookieStorage.setDomain(e), this
                            },
                            setConf: function(e) {
                                return p.cookieStorage.setConf(e), this
                            },
                            setDefaultConf: function() {
                                return p.cookieStorage.setDefaultConf(), this
                            }
                        })
                    }
                    t.initNamespaceStorage = function(e) {
                        return c(e)
                    }, d ? (t.localStorage = t.extend({}, v, {
                        _type: "localStorage"
                    }), t.sessionStorage = t.extend({}, v, {
                        _type: "sessionStorage"
                    })) : (t.localStorage = t.extend({}, v, {
                        _type: "localCookieStorage"
                    }), t.sessionStorage = t.extend({}, v, {
                        _type: "sessionCookieStorage"
                    })), t.namespaceStorages = {}, t.removeAllStorages = function(e) {
                        t.localStorage.removeAll(e), t.sessionStorage.removeAll(e), t.cookieStorage && t.cookieStorage.removeAll(e), e || (t.namespaceStorages = {})
                    }
                }(p), tp.define("jq", [], function() {
                    return p
                }), p
        })
    }(window), tp.define("jq", function() {}), tp.define("main", ["jq", "util", "api", "fingerprint", "user", "sha1", "activetimer", "scrollDepth", "doubleClickForPublisher", "offer", "viewportExit", "idle", "log", "experience", "pianoId", "pianoEsp", "applePayIntegrationService", "cxense"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g) {
        function b() {
            return t.getCurrentDomainFromCookie(y.__private__.VISIT_ID_COOKIE)
        }

        function w(e, t) {
            var n = y.__private__.collectedAds;
            y.__private__.collectedAds = {};
            var r = {};
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    r[i] = r[i] || [];
                    for (var s in n[i]) n[i].hasOwnProperty(s) && r[i].push(n[i][s])
                } y.trackAds(r, e, t)
        }

        function E() {
            if (y.__private__.isCxenseActivated()) return y.__private__.generateCxCompatibleRandomId();
            var e = t.randomString(16),
                n = s.hash([r.getFingerprint(), window.location.href].join("")),
                i = new Date,
                o = [a(i.getFullYear(), 4), a(i.getMonth() + 1, 2), a(i.getDate(), 2), a(i.getHours(), 2), a(i.getMinutes(), 2), a(i.getSeconds(), 2), a(i.getMilliseconds(), 3)].join("-"),
                u = [o, e, n].join("-");
            return u;

            function a(e, t, n) {
                return n = n || "0", e += "", e.length >= t ? e : (new Array(t - e.length + 1)).join(n) + e
            }
        }

        function S() {
            var e;
            try {
                e = JSON.parse(t.__protected__.getCookie(y.__private__.VISIT_ID_COOKIE))
            } catch (n) {
                e = {}
            }
            return e
        }

        function x(e) {
            var t = {
                path: "/",
                expires: 1,
                domain: y.__private__.visitContainer.currentDomain
            };
            return e && (t.domain = e), t
        }

        function T(e, n) {
            e.domain = n.domain, e.time = (new Date).getTime(), t.__protected__.setCookie(y.__private__.VISIT_ID_COOKIE, JSON.stringify(e), n)
        }

        function N(e) {
            var n = y.__private__.getVisitCookieOptions();
            !e.domain && !y.__private__.visitContainer.currentDomain ? t.waitCall("domainIsReceived", function(t) {
                y.__private__.setVisitCurrentDomain(t), n.domain = t, y.__private__.saveVisitCookie(e, n)
            }) : y.__private__.saveVisitCookie(e, n)
        }

        function C(e) {
            var n = (new Date).getTime(),
                r = 864e5,
                i = 6e4,
                s = 18e5,
                o = t.getBrowserTimezoneOffset() * i,
                u = t.getAppTimezoneOffset(),
                a = (new Date(e.time)).setHours(0, 0, 0, 0) + r - o - u;
            return e.time + s < n || n >= a
        }

        function k() {
            if (t.__protected__.cameFromFbSubscriptions()) return !1;
            if (!y.__private__.visitContainer.currentDomain) return !1;
            var e = t.getReferrer();
            if (y.__private__.lastReferrer && y.__private__.lastReferrer === e) return !1;
            var n = t.getHostname(e),
                r = (new RegExp(y.__private__.visitContainer.currentDomain.replace(/\./g, "\\.").replace(/^\\./, "\\.?") + "$")).test(n);
            return Boolean(n) && !r
        }

        function L() {
            var e = y.__private__.loadLastVisit(),
                t = !e || !e.id || !e.time;
            if (t || y.__private__.isTimeExpired(e) || y.__private__.hasExternalReferrer()) e.id = "v-" + y.__private__.generatePageViewId();
            y.__private__.saveLastVisit(e), y.__private__.visitContainer.visit = e
        }

        function A(n, i, s) {
            var o = "manual";
            if (typeof i == "undefined") i = window.location.href;
            else {
                if (typeof i != "object") throw new Error("First parameter to track page must be a URL or an object");
                var u = i;
                if (typeof u.url == "undefined") throw new Error("Must supply url property");
                i = u.url, typeof u.tags != "undefined" && (s = u.tags), typeof u.submitType != "undefined" && (o = u.submitType)
            }
            s || (s = tp.tags), tp.customPageUrl && (n.custom_page_url = t.prepareUrlParameter(tp.customPageUrl)), typeof s != "undefined" ? Object.prototype.toString.call(s) !== "[object Array]" && Object.prototype.toString.call(s) !== "[object String]" ? (t.log("Tags must be an array or a comma-separated string, ignoring supplied tags"), s = "") : Object.prototype.toString.call(s) === "[object Array]" && (s = s.join(",")) : s = "", y.__private__.pageView.track(), n.page_session_id = y.__private__.pageView.pageSessionId, n.track_count = y.__private__.pageView.trackCount, y.__private__.setPageViewId(n);
            var a;
            tp.contentCreated ? a = tp.contentCreated : tp.contentCreatedSelector && e(tp.contentCreatedSelector).length === 1 && (a = e(tp.contentCreatedSelector).html()), a && (n.content_created = a), typeof tp.contentIsNative == "boolean" && (n.content_is_native = tp.contentIsNative), tp.zone && (n.zone = tp.zone);
            var f = tp.contentSection || y.__private__.getMetaTagContent("section");
            f && (n.content_section = f);
            var l = tp.contentAuthor || y.__private__.getMetaTagContent("author");
            l && (n.content_author = l);
            var c = tp.contentId || y.__private__.getMetaTagContent("id");
            c && (n.content_id = c);
            var h = t.__protected__.getCookie("sailthru_hid");
            h && (n.sailthru_hid = h);
            var p;
            y.__private__.lastReferrer && y.__private__.lastReferrer === t.getReferrer() ? p = "" : (p = t.getReferrer(), y.__private__.lastReferrer = p), n.referer = t.prepareUrlParameter(p), s && (n.tags = s), n.url = t.prepareUrlParameter(i), n.fingerprint = r.getFingerprint(), n.adblocker = t.getAdblockStatus();
            if (n.adblocker === t.ADBLOCKER_STATUS.ENABLED_AFTER_DISABLED || n.adblocker === t.ADBLOCKER_STATUS.ENABLED) tp.setCustomParam("_abr", t.getAdblockerStatusReason(), "user", !0), tp.setCustomParam("_absh", t.getAdblockerHistoryCookieInfo().cookieValue + "", "user", !0);
            n.timezone_offset = t.getBrowserTimezoneOffset(), n.submit_type = o;
            var d = y.__protected__.fetchVisitId();
            return n.visit_id = d, n.new_visit = y.__private__.checkIfNewVisitAndUpdateLastTrackedVisitId(d), n.keywords = e('meta[name="keywords"]').attr("content") || e('meta[name="news_keywords"]').attr("content") || "", n.title = e('meta[property="og:title"]').attr("content") || "", n.description = e('meta[property="og:description"]').attr("content") || "", n.content_type = e('meta[property="og:type"]').attr("content") || "", e.each(["keywords", "title", "description", "content_type"], function(e, t) {
                n[t] = n[t].substr(0, 8192)
            }), n.custom_variables = JSON.stringify(tp.customVariables), y.__private__.buildPageCustomParams(n), n
        }

        function O() {
            var n = {
                    aid: tp.aid
                },
                r = t.getTbcCookie(),
                i = {
                    active: o.getActiveTimeInSeconds(),
                    total: o.getTotalTimeInSeconds()
                };
            r && (n.tbc = r), i.total < i.active && (i.total = i.active), n.time_spent = JSON.stringify(i), n.scroll = JSON.stringify({
                max_page_height: u.getMaxDocumentHeight(),
                max_depth: u.getMaxScrollDepth()
            }), n.viewport_exit = l.getSumOfCodesDirection(), n.url = t.prepareUrlParameter(window.location.href), y.__private__.setPageViewId(n), n.visit_id = y.__protected__.fetchVisitId(), y.__private__.markVisitToCheckForRefresh();
            var s = {},
                f = 200,
                c = a.getAds(f);
            return c.length && (s.dfp = c), e.isEmptyObject(s) || (n.ads = JSON.stringify(s)), n
        }

        function M(t) {
            var n = {};
            return tp.customParams && (n = e.extend(!0, {}, tp.customParams)), e.isEmptyObject(n) || (t.custom_params = JSON.stringify(n)), t
        }

        function _() {
            return y.__private__.pageView.id
        }

        function D(e) {
            var t = y.__private__.visitContainer.lastTrackedVisitId !== e;
            return y.__private__.visitContainer.lastTrackedVisitId = e, t
        }

        function P() {
            y.__private__.visitContainer.checkForRefresh = !0
        }

        function H() {
            return y.__private__.visitContainer.checkForRefresh && (y.__private__.refreshVisit(), y.__private__.visitContainer.checkForRefresh = !1), y.__private__.visitContainer.visit.id
        }

        function B(e) {
            var t = document.head.querySelector("meta[name=" + e + "]");
            return (t || {}).content
        }

        function j(e) {
            y.__private__.visitContainer.currentDomain = e
        }

        function F() {
            var t = y.__private__.getVisitCookieOptions();
            e.removeCookie(y.__private__.VISIT_ID_COOKIE, t)
        }

        function I() {
            return !tp.endpoint || !tp.endpoint.match(/sandbox/)
        }

        function q(e, r, i, s) {
            if (tp.aid.length === 0) {
                t.log("Must supply a valid tp.aid before calling tp.init()");
                return
            }
            if (!y.__private__.currentEnvironmentSupportsPageTrack()) return !1;
            t.waitCall("refreshAccessTokenList", function() {
                t.waitCall("offerCreate", function() {
                    t.startCall("pageTrack"), n.callApi(e, r, function(e) {
                        t.doneCall("pageTrack"), i && i(e)
                    }, tp.getTrackingEndpoint() + "/api/v3", s)
                })
            })
        }

        function R() {
            y.__private__.unloadRegistered && y.__private__.pageView.trackCount > 0 && (y.trackPageUnload(), y.resetTimer())
        }

        function U(e) {
            if (!y.__private__.currentEnvironmentSupportsPageTrack()) return;
            try {
                var n = y.__private__.buildPageUnloadParams();
                l.isInitialized() && l.resetSumOfCodesDirectionToDefault(), h.__private__.logBeaconRequest(tp.getTrackingEndpoint() + "/api/v3/page/unload", n), y.unregisterTrackUnload()
            } catch (r) {
                t.error("main: error on tracking page unload event: ", r)
            }
        }

        function z() {
            y.__private__.unloadTriggered || (y.__private__.unloadTriggered = !0, y.trackPageUnload(!0))
        }

        function W() {
            y.__private__.unloadRegistered = !0
        }

        function X() {
            return y.__private__.unloadRegistered
        }

        function V() {
            y.__private__.unloadRegistered = !1
        }

        function $() {
            y.__private__.unloadRegistered && y.__private__.unloadAction(), y.__private__.trackCollectedAds(!0, y.__private__.BEACON_REQUEST), p.__protected__.sendStatisticsExecutedNodes("unload")
        }

        function J() {
            o.resetRecordedTime()
        }

        function K() {
            a.resetAds()
        }

        function Q(e) {
            e && (e.pageview_id = y.fetchPageViewId())
        }

        function G(e, n) {
            if (!y.__private__.currentEnvironmentSupportsPageTrack()) return !1;
            try {
                y.__protected__.trackPageUnloadIfNecessary();
                var r = y.buildPageTrackParams({}, e, n);
                y.__private__.track("/page/track", r), y.registerTrackUnload()
            } catch (i) {
                t.error("main: error on page tracking event: ", i)
            }
        }

        function Y(n, r, i) {
            return;
            var s, o
        }

        function Z(e, t, n) {
            y.__private__.collectedAds[e] || (y.__private__.collectedAds[e] = {}), y.__private__.collectedAds[e][t] = n, y.__private__.debouncedTrackAds()
        }

        function et() {
            var e = t.getQueryParamByName(y.__private__.VOUCHER_QUERY);
            e && f.startRedeemVoucher({
                voucherCode: e
            })
        }

        function tt() {
            var e = t.getQueryParamByName(y.__private__.VERIFICATION_CODE_QUERY);
            if (!e || i.getProvider().name !== "pianoId") return;
            t.waitCall("offerCreate", function() {
                d.isUserValid() ? d.__protected__.showEmailConfirmation({
                    verification_code: e
                }) : d.show({
                    verification_code: e
                })
            })
        }

        function nt() {
            f.checkThreeDSRedirect()
        }

        function rt() {
            return y.__private__.externalResourcesDef ? y.__private__.externalResourcesDef.promise() : (y.__private__.externalResourcesDef = e.Deferred(), t.__protected__.getLocalStorageItem(y.__private__.EXTERNAL_RESOURCES) !== null && y.__private__.externalResourcesDef.resolve({
                has_active_apple_pay_card: t.__protected__.getLocalStorageItem(y.__private__.EXTERNAL_RESOURCES)
            }), tp.applePayMerchantId ? (m.__protected__.applePayCanMakePaymentsWithActiveCard().then(function(e) {
                y.__private__.externalResourcesDef.resolve({
                    has_active_apple_pay_card: e
                }), t.__protected__.setLocalStorageItem(y.__private__.EXTERNAL_RESOURCES, e, y.__private__.EXTERNAL_RESOURCES_TTL)
            }), y.__private__.externalResourcesDef.promise()) : (y.__private__.externalResourcesDef.resolve({
                has_active_apple_pay_card: null
            }), y.__private__.externalResourcesDef.promise()))
        }

        function it() {
            return g.__protected__.isActivated()
        }

        function st() {
            return t.__protected__.randomStringCxCompatible()
        }

        function ot() {
            if (tp.aid.length === 0) {
                t.log("Must supply a valid tp.aid before calling tp.init()");
                return
            }
            tp.isMockMode || (a.initialize(), o.initialize(), u.initialize()), c.initialize(), m.initialize(), y.__private__.checkVoucher(), y.__private__.checkVerificationCode(), y.__private__.initPianoEsp(), y.__private__.checkThreeDSRedirect(), i.refreshAccessToken(), y.__protected__.externalResourcesDelay()
        }
        var y = {
            __private__: {},
            __protected__: {}
        };
        return y.name = "main", y.pageTrack = G, y.trackPage = y.pageTrack, y.buildPageTrackParams = A, y.fetchPageViewId = _, y.trackPageUnload = U, y.registerTrackUnload = W, y.isRegisteredTrackUnload = X, y.unregisterTrackUnload = V, y.resetTimer = J, y.resetAds = K, y.trackAds = Y, y.trackAd = Z, y.init = ot, y.__protected__.fetchVisitId = H, y.__protected__.trackPageUnloadIfNecessary = R, y.__protected__.externalResourcesDelay = rt, y.__private__.BEACON_REQUEST = "beacon_request", y.__private__.saveVisitCookie = T, y.__private__.trackCollectedAds = w, y.__private__.getCurrentDomain = b, y.__private__.generatePageViewId = E, y.__private__.loadLastVisit = S, y.__private__.getVisitCookieOptions = x, y.__private__.saveLastVisit = N, y.__private__.isTimeExpired = C, y.__private__.hasExternalReferrer = k, y.__private__.refreshVisit = L, y.__private__.setPageViewId = Q, y.__private__.buildPageUnloadParams = O, y.__private__.buildPageCustomParams = M, y.__private__.checkIfNewVisitAndUpdateLastTrackedVisitId = D, y.__private__.markVisitToCheckForRefresh = P, y.__private__.getMetaTagContent = B, y.__private__.setVisitCurrentDomain = j, y.__private__.invalidateLastVisit = F, y.__private__.currentEnvironmentSupportsPageTrack = I, y.__private__.track = q, y.__private__.unloadAction = z, y.__private__.unloadHandler = $, y.__private__.checkVoucher = et, y.__private__.checkVerificationCode = tt, y.__private__.initPianoEsp = v.__protected__.init, y.__private__.checkThreeDSRedirect = nt, y.__private__.isCxenseActivated = it, y.__private__.generateCxCompatibleRandomId = st, y.__private__.VOUCHER_QUERY = "voucher_code", y.__private__.VERIFICATION_CODE_QUERY = "verification_code", y.__private__.VISIT_ID_COOKIE = "__pvi", y.__private__.unloadRegistered = !1, y.__private__.unloadTriggered = !1, y.__private__.collectedAds = {}, y.__private__.debouncedTrackAds = t.debounce(y.__private__.trackCollectedAds, 3e3), y.__private__.lastReferrer = null, y.__private__.pageView = {
            id: y.__private__.generatePageViewId(),
            pageSessionId: "s-" + y.__private__.generatePageViewId(),
            trackCount: 0,
            tracked: !1,
            track: function() {
                this.tracked ? this.id = y.__private__.generatePageViewId() : this.tracked = !0, this.trackCount++
            }
        }, y.__private__.visitContainer = {
            currentDomain: y.__private__.getCurrentDomain(),
            lastTrackedVisitId: y.__private__.loadLastVisit().id,
            visit: {},
            checkForRefresh: !1
        }, y.__private__.refreshVisit(), y.__private__.EXTERNAL_RESOURCES = "exrs", y.__private__.EXTERNAL_RESOURCES_TTL = 7200, y.__private__.externalResourcesDef = null, e(window).on("beforeunload unload", y.__private__.unloadHandler), y
    }), tp.define("api", ["jq", "util"], function(e, t) {
        var n = t.findCookieByName(/__TP_*/),
            r = function() {
                var e = function() {
                        return "mock"
                    },
                    t = function() {
                        return ""
                    },
                    n = function() {
                        return !1
                    };
                return {
                    getName: function() {
                        return e()
                    },
                    getToken: function() {
                        return t()
                    },
                    isUserValid: function() {
                        return n()
                    }
                }
            }(),
            i = function(e) {
                r = e
            },
            s;
        typeof window._tpm != "undefined" && typeof window._tpm.paywallID != "undefined" && (paywallID = window._tpm.paywallID, s = t.__protected__.getCookie("umc_" + window._tpm.paywallID));
        var o = t.__protected__.getCookie("__tac"),
            u = function() {
                return tp.getApiEndpoint()
            },
            a = function(e) {
                if (typeof e == "undefined" || !e) e = {};
                e.aid = tp.aid, s && (e.umc = s), n && (e.tp_access_token_v2 = n), o && (e.tac = o);
                if (typeof e.user_provider == "undefined" || !e.user_provider) e.user_provider = r.getName();
                if (typeof e.user_token == "undefined" || !e.user_token) e.user_token = r.getToken() && r.getToken().length > 0 ? r.getToken() : ""
            },
            f = function(e) {
                var t = "/access/list",
                    n = "/access/check",
                    r = "/user/access/list",
                    i = "/user/access/check.jwt",
                    s = e === t || e === n || e === r || e === i;
                if (!s) return null;
                var o = Math.floor((new Date).getTime() / 1e3),
                    u = {
                        code: 0,
                        count: 0,
                        data: [],
                        limit: 0,
                        offset: 0,
                        total: 0,
                        ts: o
                    },
                    a = {
                        code: 0,
                        ts: 1548942314,
                        access: {
                            access_id: null,
                            parent_access_id: null,
                            granted: !1,
                            resource: null,
                            user: null,
                            expire_date: o
                        }
                    },
                    f = {
                        code: 403,
                        ts: o,
                        message: "User doesn't have permission to call this method"
                    };
                return e === t ? u : e === n ? a : f
            },
            l = function(e) {
                var t = "/access/check";
                if (!tp.isDoubleOptInCheckOnAccessCheckEnabled) return;
                e === t && tp.doubleOptIn.check()
            },
            c = function(n, r, i, s, o) {
                t.debug("Calling API method: " + n);
                var c;
                typeof s != "undefined" ? c = s : c = u(), c += n;
                if (typeof r == "undefined" || !r) r = {};
                var h = t.getTbcCookie();
                h && (r.tbc = h), a(r);
                var p;
                typeof i == "undefined" ? p = function(e) {
                    t.debug("API Response", e), t.setTbcCookieFromResponse(e), t.setAppTimezoneOffsetFromResponse(e), t.setCurrentDomainFromResponse(e)
                } : p = function(e) {
                    t.debug("API Response", e), t.setTbcCookieFromResponse(e), t.setAppTimezoneOffsetFromResponse(e), t.setCurrentDomainFromResponse(e), i(e)
                };
                var d = f(n);
                if (d !== null && !tp.user.getProvider().isUserValid()) {
                    p(d);
                    return
                }
                l(n), c = c + "?" + e.param(r, !0);
                var v = {
                    url: c,
                    dataType: "jsonp"
                };
                o && (v.async = !1), e.ajax(v).done(p).fail(function() {
                    var e = {
                        code: 503,
                        message: "Error: Received error when requesting API response from URL: " + c
                    };
                    t.log(e.message), p(e)
                })
            };
        return {
            name: "api",
            callApi: function(e, t, n, r, i) {
                return c(e, t, n, r, i)
            },
            getEndpoint: function() {
                return u()
            },
            setUserProvider: function(e) {
                return i(e)
            },
            getCallParams: function(e) {
                return a(e)
            }
        }
    }), tp.define("offer", ["jq", "util", "postmessage", "user", "require-css/css!styles/offer", "containerUtils", "eventUtils", "viewportExit"], function(e, t, n, r, i, s, o, u) {
        function T(e, t, n, i, o) {
            r.logout(function() {
                var e = {};
                e.userProvider = r.getProvider().getName(), e.userToken = r.getProvider().getToken() && r.getProvider().getToken().length > 0 ? r.getProvider().getToken() : "", e.noNeedStartCheckout = !0, G(e)
            }, p), t.closeOnLogout && s.closeModalContainer(n, i)
        }

        function N(e, t, n, i) {
            t.source = p, r.getProvider().onLoginSuccess(t), w.fireCallbacks("loginSuccess", t, n, i);
            if (!y) {
                var s = {
                    userToken: t.user_token,
                    user: t.user,
                    reloadAfterLogin: !0
                };
                G(s, n)
            }
        }

        function C(t, n) {
            var r = ["debug", "aid", "gaClientId", "tags", "contentSection", "contentAuthor", "debug", "zone"];
            e.each(r, function(e, r) {
                n[r] && (t[r] = n[r])
            }), n.customVariables && (b[t.iframeId] = JSON.stringify(n.customVariables));
            var i = n.contentCreated;
            return i && (t.contentCreated = i), n && n.main && (t.pageViewId = n.main.fetchPageViewId(), t.visitId = n.main.__protected__.fetchVisitId()), t
        }

        function k(n) {
            var r = {};
            n.termIds && (n.termIds instanceof Array || (n.termIds = [n.termIds]));
            var i = ["displayMode", "containerSelector", "templateId", "templateVariantId", "offerId", "termId", "termIds", "rid", "aid", "isCheckout", "isOpenedFromInlineCheckout", "pw_id", "paywallId", "width", "preview", "previewUncached", "previewTemplateType", "previewTemplateVersion", "tokenType", "janrainCaptureToken", "closeOnLogout", "voucherCode", "isRedemption", "allowReturnToStartState", "startFromInlineCheckout", "formNameByTermId", "hideCompletedFields", "startFromInlineCheckout", "reloadAfterLogin", "preventReloadAfterLogin", "isAuth", "authStartScreen", "showCloseButton", "closeButtonType", "checkoutFlowId", "offerState", "oid", "promoCodeId", "promoCodeTermId", "rurl_3ds", "thirdPartyParams", "termId3ds", "providerId"],
                s = ["trackingId", "experienceId", "activeMeters"],
                o = n.additionalParamNames ? n.additionalParamNames : [],
                u = i.concat(s, o);
            e.each(u, function(e, t) {
                n[t] && (r[t] = n[t]), t === "showCloseButton" && (n[t] === undefined ? r[t] = !0 : r[t] = n[t])
            });
            var a = decodeURIComponent(t.getQueryParamByName("_ptid"));
            return a && (r.trackingId = a), n.preview && (r.activeMeters = JSON.stringify([{
                meterName: "preview-meter",
                views: 10,
                viewsLeft: 5,
                maxViews: 20,
                totalViews: 20
            }])), r
        }

        function L(e) {
            var t = e.displayMode || "modal";
            return [e.offerId, t, e.containerSelector].join("|")
        }

        function A(e) {
            var t = L(e);
            return !!f[t]
        }

        function O(e) {
            var t = L(e);
            f[t] = !0
        }

        function M(e) {
            var t = L(e);
            delete f[t]
        }

        function D(e, i) {
            var o = k(e),
                u = t.getTbcCookie();
            u && u.length > 0 && (o.tbc = u), o.iframeId = "offer-" + l++ + "-" + t.randomString(), o.url = t.prepareUrlParameter(window.location.href), o.parentDualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left, o.parentDualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top, o.parentWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width, o.parentHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height, o.parentOuterHeight = window.parent.outerHeight, e.previewNonLoggedUser && (o.previewNonLoggedUser = e.previewNonLoggedUser), e.isPreload && (o.preload = 1), C(o, tp);
            var f = w.hasCallback("loginRequired");
            if (tp.janrain.isConfigured() && (typeof e.loginRequired == "undefined" || !e.loginRequired)) {
                var h = [];
                tp.janrain.addEventHandler("onModalClose", function() {
                    s.activateContainers(h)
                }), q(), e.loginRequired = function(e) {
                    return h = s.hideModalContainer(), g = e.allowReturnToStartState, d = !1, v = e.termId, m = o.iframeId, t.waitCall("refreshUserToken", function() {
                        tp.janrain.login(null, e)
                    }), !1
                }
            } else if (tp.gigya.isConfigured() && (typeof e.loginRequired == "undefined" || !e.loginRequired)) {
                var h = [];
                tp.gigya.registerCallback("onHide", function(e) {
                    s.activateContainers(h), n.send("gigyaHide", e, m)
                }), I(), e.loginRequired = function(e) {
                    return g = e.allowReturnToStartState, d = !1, h = s.hideModalContainer(), v = e.termId, m = o.iframeId, t.waitCall("refreshUserToken", function() {
                        tp.gigya.login()
                    }), !1
                }
            } else if (tp.pianoId.isConfigured()) {
                if (typeof e.loginRequired == "undefined" || !e.loginRequired) e.loginRequired = function(e) {
                    if (e.preventExternalLogin) return;
                    return v = e.termId, m = o.iframeId, tp.pianoId.show({
                        screen: e.startScreen
                    }), !1
                };
                R(), o.pianoIdUrl = tp.pianoId.getIframeUrl();
                var p = tp.pianoId.getLang();
                p && (o.lang = p), tp.pianoId.onLangChange(function(e) {
                    n.send("langChanged", {
                        lang: e
                    }, o.iframeId)
                }, o.iframeId)
            } else tp.pianoIdLite.isConfigured() && (o.pianoIdUrl = tp.pianoId.getIframeUrl());
            o.userProvider = r.getProvider().getName(), e.userToken ? o.userToken = e.userToken : o.userToken = r.getProvider().getToken() && r.getProvider().getToken().length > 0 ? r.getProvider().getToken() : "", t.getCampaigns(o), o.customCookies = JSON.stringify(t.getCustomCookies()), w.registerCallback(e, o.iframeId), o.hasLoginRequiredCallback = w.hasIframeCallback("loginRequired", o.iframeId) || f, P(o);
            var y = e.iframeUrl ? e.iframeUrl : o.isCheckout ? S() : E(),
                b = e.postMessageUrl ? e.postMessageUrl : E(),
                T = H(o, e),
                N = s.createContainer({
                    url: y,
                    config: e,
                    parent: e.parent,
                    postMessageUrl: b,
                    receive: x,
                    iframeParams: o,
                    singleContainer: e.singleContainer,
                    close: function() {
                        w.fireCallbacks("close", {
                            state: c
                        }, o.iframeId, !0)
                    }
                });
            return N.statParams = T, N.browserId = e.browserId, a.push(N), N
        }

        function P(e) {
            var n = t.getQueryParamByName("termId"),
                r = t.getQueryParamByName("paySource");
            n && (e.termId = n), r && (e.paySource = r)
        }

        function H(t, n) {
            var r = {};
            if (n.trackStatsOnShow) return r;
            var i = ["tbc", "trackingId", "pageViewId", "visitId", "tags", "contentCreated", "contentSection", "contentAuthor"];
            return e.each(i, function(e, n) {
                t[n] && (r[n] = t[n], delete t[n])
            }), e.each(t, function(e, n) {
                e.indexOf("tpcc_") === 0 && (r[e] = n, delete t[e])
            }), r
        }

        function B(e) {
            var t = F(e.iframeParams, e.statParams);
            n.send("trackStat", t, e.iframeId)
        }

        function j(e) {
            var t = {
                browserId: e.browserId
            };
            n.send("passBrowserId", t, e.iframeId)
        }

        function F(t, n) {
            var r = {};
            return e.each(t, function(e, t) {
                r[e] = t
            }), e.each(n, function(e, t) {
                r[e] = t
            }), r
        }

        function I() {
            y || (tp.gigya.registerCallback("userChanged", function(e) {
                if (e && e.user_token) {
                    var t = {
                        token_list: e.access_token.value,
                        user_token: e.user_token,
                        userToken: e.user_token,
                        cookie_domain: e.access_token.cookie_domain,
                        user: e.user,
                        allowReturnToStartState: g,
                        termId: v
                    };
                    if (m) {
                        var r = s.getIframe(m);
                        r ? (n.send("externalLoginSuccess", t, m), delete t.termId, G(t, m)) : G(t)
                    } else G(t)
                }
            }), tp.gigya.registerCallback("logout", function() {
                var e = {};
                e.userProvider = r.getProvider().getName(), e.userToken = r.getProvider().getToken() && r.getProvider().getToken().length > 0 ? r.getProvider().getToken() : "", e.noNeedStartCheckout = !0;
                var t = s.getIframe(m);
                t && t.config.displayMode === "inline" && s.closeModalContainer(), v = null, m = null, g = !1, G(e)
            }), y = !0)
        }

        function q() {
            y || (tp.janrain.registerCallback("userChanged", function(t) {
                if (t && t.user_token) {
                    var r = {
                        token_list: t.access_token.value,
                        user_token: t.user_token,
                        userToken: t.user_token,
                        cookie_domain: t.access_token.cookie_domain,
                        user: t.user,
                        allowReturnToStartState: g,
                        termId: v
                    };
                    if (m) {
                        var i = s.getIframe(m);
                        i ? (n.send("externalLoginSuccess", r, m), delete r.termId, G(r, m)) : G(r)
                    } else G(r)
                }
            }), tp.janrain.addEventHandler("onCaptureSessionEnded", function() {
                var e = {};
                e.userProvider = r.getProvider().getName(), e.userToken = r.getProvider().getToken() && r.getProvider().getToken().length > 0 ? r.getProvider().getToken() : "", e.noNeedStartCheckout = !0;
                var t = s.getIframe(m);
                t && t.config.displayMode === "inline" && s.closeModalContainer(), v = null, m = null, g = !1, G(e)
            }), y = !0)
        }

        function R() {
            y || (tp.pianoId.setCallbacks({
                loggedIn: function(e) {
                    t.log("offer.js - piano id user logged in");
                    var r = {
                        user_token: e.token,
                        userToken: e.token,
                        user: e.user,
                        reloadAfterLogin: !0,
                        termId: v
                    };
                    if (m) {
                        var i = s.getIframe(m);
                        i ? (n.send("externalLoginSuccess", r, m), Q(m, r), delete r.termId, G(r, m)) : G(r)
                    } else G(r)
                },
                loggedOut: function(e) {
                    if (e.source !== p) {
                        var t = {};
                        t.userProvider = r.getProvider().getName(), t.userToken = r.getProvider().getToken() && r.getProvider().getToken().length > 0 ? r.getProvider().getToken() : "", t.noNeedStartCheckout = !0, G(t)
                    }
                    v = null, m = null
                }
            }), y = !0)
        }

        function U(e) {
            return s.showPreloadedContainer(e)
        }

        function Y(t, n) {
            var r = {
                reloadAfterLogin: !0
            };
            return e.extend(r, t.config), r.singleContainer && delete r.singleContainer, n.termId && (r.termId = n.termId), n.term && (r.term = {}, r.term = F(r.term, n.term)), n.startScreen && (r.startScreen = n.startScreen), n.isRedemption && (r.isRedemption = n.isRedemption, r.voucherCode = n.redemption && n.redemption.form && n.redemption.form.redeemCode, r.termId = null), n && n.currentState && t.config.displayMode === "modal" && (r.allowReturnToStartState = !0), n.preventExternalLogin && (r.preventExternalLogin = n.preventExternalLogin), r.displayMode = "modal", r
        }
        var a = [],
            f = {},
            l = 0,
            c = "close",
            h = 1e4,
            p = "OFFER",
            d = !1,
            v = null,
            m = null,
            g = !1,
            y = !1,
            b = {},
            w = o.createEventManager(["complete", "cancel", "close", "error", "loginRequired", "loginSuccess", "loaded", "customEvent", "startCheckout", "resize", "onMeterExpired", "onMeterActive", "onAccessGranted", "onShowOffer", "pianoIdEvent", "parentSize"]),
            E = function() {
                return tp.offerBaseUrl ? tp.offerBaseUrl : tp.getEndpointRoot() + "/checkout/offer/show"
            },
            S = function() {
                return tp.getEndpointRoot(!0) + "/checkout/offer/show"
            },
            x = function(i, o) {
                var a = s.getIframe(i.sender),
                    f = !0;
                a && a.config && (f = !a.config.parent);
                switch (i.event) {
                    case "fullRedirectThreeDS":
                        window.location.href = i.params.bankSecureUrl;
                        break;
                    case "resize":
                        i.params.iframeId === i.sender && (s.resizeIframe(a, i.params), a.config.displayMode === "modal" && (i.params.closeButtonType === "boilerplate" && s.hideCloseButton(a.container), s.centerIt(a.container)), n.send("afterResize", {}, a.iframeId)), w.fireCallbacks(i.event, i.params, i.sender, f);
                        break;
                    case "startCheckout":
                        i.params.width = null;
                        if (i.displayMode === "inline") {
                            i.params.closeOnLogout = !0;
                            var l = F(i.params, a.statParams);
                            l.browserId = a.browserId, l.isOpenedFromInlineCheckout = !0, J(l, i.sender)
                        }
                        i.params.iframeId === i.sender && w.fireCallbacks(i.event, i.params, i.sender, f);
                        break;
                    case "loaded":
                        if (i.params.iframeId === i.sender) {
                            n.send("setupCustomVariables", b[i.params.iframeId], i.params.iframeId), n.send("setupEVTFields", a.config.externalVerificationFields, i.params.iframeId);
                            if (a.waitFinishProcesses) {
                                s.__protected__.closeAndRemoveIframe(a);
                                return
                            }
                            a.config.displayMode === "modal" && (s.resizeIframe(a, i.params), a.config.isPreload || s.checkBackdropAndContainer(a, !0)), a.config.displayMode === "popup" && s.resizeIframe(a, i.params), !a.config.isPreload && !a.config.trackStatsOnShow && B(a), j(a), w.fireCallbacks(i.event, i.params, i.sender, f), a.config.displayMode === "inline" && (a.containerReady ? s.resizeIframe(a, i.params) : s.operationWithContainer(a.iframeParams.containerSelector, function(t) {
                                var n = e("#temp-inline-" + a.iframeId);
                                t.html(n.html()), n.remove(), a.element = t.children("iframe"), a.containerReady = !0, s.resizeIframe(a, i.params)
                            })), M(a.config), t.doneCall("offerCreate")
                        }
                        break;
                    case "downForMaintenance":
                        s.resizeIframe(a, {
                            width: 300,
                            height: 200
                        }), a.config.displayMode === "modal" && (a.config.isPreload || s.checkBackdropAndContainer(a));
                        break;
                    case "purge":
                        o || (i && i.params && i.params.alreadyPurchased && (c = "alreadyHasAccess"), i && i.params && i.params.completePayment && (c = "checkoutCompleted"), s.purgeIframe(i.sender, a.config.parent), M(a.config));
                        break;
                    case "close":
                        o || (i && i.params && i.params.alreadyPurchased && (c = "alreadyHasAccess"), i && i.params && i.params.completePayment && (c = "checkoutCompleted"), t.hasQueryParamByName("voucher_code") && (c = "voucherRedemptionCompleted"), s.closeContainer(i.sender, a.config.parent), M(a.config));
                        break;
                    case "closeAndRefresh":
                        var h = i.params;
                        h ? window.location.assign(h) : window.location.reload(!0);
                        break;
                    case "selectTerm":
                        i && i.params && i.params.alreadyPurchased ? c = "alreadyHasAccess" : c = "close";
                        break;
                    case "submitPayment":
                        w.fireCallbacks(i.event, F(i.params, {
                            offerId: a.iframeParams.offerId
                        }), i.sender, f);
                        break;
                    case "complete":
                        if (typeof i.params.token_list != "undefined") {
                            var p = i.params.user_token;
                            !p && r.isUserValid() && r.getProvider().name === "pianoId" && (p = r.getProvider().getToken()), t.setAccessTokenListCookie({
                                value: i.params.token_list,
                                cookie_domain: i.params.cookie_domain
                            }, p)
                        }
                        var v = F(i.params, {
                            offerId: a.iframeParams.offerId
                        });
                        w.fireCallbacks(i.event, v, i.sender, f), c = "checkoutCompleted";
                        break;
                    case "checkoutSelectTerm":
                        w.fireCallbacks(i.event, F(i.params, {
                            offerId: a.iframeParams.offerId
                        }), i.sender, f);
                        break;
                    case "checkoutStateChange":
                    case "checkoutPaymentError":
                    case "alreadyPurchased":
                    case "startThreeDBankSecure":
                    case "cancel":
                    case "error":
                    case "customEvent":
                        w.fireCallbacks(i.event, i.params, i.sender, f);
                        break;
                    case "loginRequired":
                        d = !0, w.fireCallbacks(i.event, Y(a, i.params), i.sender, f);
                        break;
                    case "logout":
                        T(i.event, i.params, i.sender, a.config.parent, f);
                        break;
                    case "loginSuccess":
                        N(i.event, i.params, i.sender, f);
                        break;
                    case "inputFocus":
                        e("tp-modal").css("z-index", 300051).css("z-index", 300050);
                        break;
                    case "inputBlur":
                        e("tp-modal").css("z-index", 300051).css("z-index", 300050);
                        break;
                    case "getLocation":
                        i.params && i.params.resultCallbackId && (i.params.result = window.location.href, n.send("resultCallback", i.params, i.sender));
                        break;
                    case "setLocationHash":
                        i.params && i.params.hash && (window.location.hash = i.params.hash);
                        break;
                    case "langChangedWithinOffer":
                        tp.pianoId.isConfigured() && tp.pianoId.updateLang(i.params.lang);
                        break;
                    case "loginStart":
                        u.disable();
                        break;
                    case "loginEnd":
                        u.enable();
                        break;
                    case "pianoIdEvent":
                        i.params.event === "passwordlessEmailSent" && s.closeContainer(i.sender), i.params.iframeId === i.sender && tp.pianoId.__protected__.offerMessageReceiver(i);
                        break;
                    case "swgCheckoutStart":
                        break;
                    case "sharedAccountsSuccessfullyAdded":
                        n.broadcast("refreshMyAccount", {
                            userToken: r.getProvider().getToken()
                        });
                        break;
                    case "newsletterSignupImpression":
                    case "newsletterSignupSubmission":
                        tp.pianoEsp.__protected__.offerMessageReceiver(i), w.fireCallbacks(i.event, i.params, i.sender, f);
                        break;
                    case "parentSize":
                        var g = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                        n.send("parentSize", g, i.sender);
                        break;
                    case "gigyaPasswordlessLogin":
                        i.params.iframeId === i.sender && (m = i.params.iframeId, tp.gigya.loginByPasswordless(i.params));
                        break;
                    default:
                        t.debug("Received invalid event type: " + i.event);
                        return
                }
            },
            _ = function(n) {
                c = "close";
                if (typeof n.displayMode == "undefined") n.displayMode = "modal";
                else if (n.displayMode !== "modal" && n.displayMode !== "inline" && n.displayMode !== "popup") {
                    t.log("Invalid offer displayMode; must be one of: modal, inline, popup"), M(n);
                    return
                }
                if (n.displayMode === "modal" && !n.isPreload && s.hasModalIframe()) {
                    t.log("Modal offer is already shown; must be one modal offer per time"), M(n);
                    return
                }
                var r;
                if (n.displayMode !== "modal") {
                    if (!n.isPreload) {
                        var i;
                        return e(n.containerSelector).each(function(e, t) {
                            var r = F({}, n);
                            r.singleContainer = t, i = D(r)
                        }), i
                    }
                    var o = e(n.containerSelector).last();
                    o && (r = o.length ? o[0] : undefined, n.singleContainer = r)
                }
                return D(n)
            },
            z = function(e) {
                var t = e.offerId === s.fakeOfferId ? "showTemplate" : "showOffer";
                w.hasCallback(t) && w.fireCallbacks(t, e, null, !0)
            },
            W = function(e) {
                if (!e.offerId && e.preview !== !0) {
                    t.error("Must specify offerId");
                    return
                }
                if (A(e)) return !1;
                e.preview || O(e), setTimeout(function() {
                    M(e)
                }, h), t.waitCall("refreshUserToken", function() {
                    t.waitCall("refreshAccessTokenList", function() {
                        t.waitCall("myAccountLogin", function() {
                            t.startCall("offerCreate");
                            var n = e.createIframeFn ? e.createIframeFn : _,
                                r = n(e);
                            if (!r) {
                                t.doneCall("offerCreate"), t.error("Could not initialize offer; check configuration");
                                return
                            }
                            V(e) && $(r.iframeId), z(e)
                        })
                    })
                })
            },
            X = function(n) {
                var r = e.Deferred(),
                    i = r.promise(),
                    s = e.Deferred(),
                    o = {
                        promise: i,
                        show: function() {
                            i.pipe(U).pipe(s.promise).then(function(e) {
                                B(e), V(n) && $(e.iframeId), z(n)
                            }, function() {
                                delete n.isPreload, W(n)
                            })
                        }
                    };
                return n.displayMode !== "popup" && n.offerId ? t.waitCall("refreshAccessTokenList", function() {
                    n.isPreload = !0, t.startCall("offerCreate");
                    var e = n.createIframeFn ? n.createIframeFn : _,
                        i = e(n);
                    i ? (i.element.load(function() {
                        s.resolve(i)
                    }), r.resolve(i)) : (t.doneCall("offerCreate"), t.error("Could not initialize offer; check configuration"), r.reject())
                }) : r.reject(), o
            },
            V = function(e) {
                return !!e.directCheckout && e.displayMode !== "inline"
            },
            $ = function(e) {
                t.waitCall("offerCreate", function() {
                    n.send("startDirectCheckout", {}, e)
                })
            },
            J = function(e, n) {
                s.hasModalIframe() && s.closeModalContainer(), t.debug("creating checkout: ", e), e.displayMode = e.displayMode === "popup" ? "popup" : "modal", e.isCheckout = !0, e.parent = n, t.waitCall("refreshUserToken", function() {
                    t.waitCall("refreshAccessTokenList", function() {
                        t.startCall("offerCreate");
                        var i = _(e);
                        s.__protected__.addChildToInlineIframe(i, n), i ? d && t.waitCall("offerCreate", function() {
                            d = !1;
                            var e = {};
                            e.userProvider = r.getProvider().getName(), e.userToken = r.getProvider().getToken() && r.getProvider().getToken().length > 0 ? r.getProvider().getToken() : "", e.noNeedStartCheckout = !0, e.noNeedStartCheckoutAfterLogin = !0, G(e, i.iframeId)
                        }) : (t.doneCall("offerCreate"), t.error("Could not start checkout; check configuration"))
                    })
                })
            },
            K = function(e, n) {
                s.closeModalContainer(), e || (e = {}), e.isRedemption = !0, t.debug("starting redeem voucher: ", e), e.displayMode = e.displayMode === "popup" ? "popup" : "modal", e.isCheckout = !1, e.parent = n, t.waitCall("refreshAccessTokenList", function() {
                    t.startCall("offerCreate"), _(e) || (t.doneCall("offerCreate"), t.error("Could not start redeem; check configuration"))
                })
            },
            Q = function(e, t) {
                n.send("reloadOffer", t, e)
            },
            G = function(e, t) {
                n.broadcast("reloadOffer", e, t)
            },
            Z = function() {
                var n = "pn_rurl_3ds",
                    r = t.getQueryParamByName(n);
                if (r) {
                    var i = {
                            offerId: "pn_offer_id",
                            oid: "pn_oid",
                            termId3ds: "pn_term_id",
                            providerId: "pn_provider_id",
                            thirdPartyParams: "third_party_params"
                        },
                        s = [n],
                        o = Object.keys(i).reduce(function(n, r) {
                            var o = e.extend({}, n);
                            return o[r] = t.getQueryParamByName(i[r]), s.push(i[r]), o
                        }, {});
                    t.removeQueryParamByName(s), W(e.extend({
                        displayMode: "modal",
                        rurl_3ds: r
                    }, o))
                }
            };
        return {
            name: "offer",
            show: function(e) {
                e.displayMode === "inline" ? s.operationWithContainer(e.containerSelector, function() {
                    W(e)
                }) : W(e)
            },
            deferredShow: function(e) {
                return X(e)
            },
            close: function() {
                s.closeModalContainer()
            },
            closeInline: function(e) {
                s.__protected__.closeInlineContainers(e)
            },
            startCheckout: function(e) {
                J(e)
            },
            startRedeemVoucher: function(e) {
                K(e)
            },
            createOfferIframe: function(e) {
                return _(e)
            },
            showBackdrop: function() {
                s.showBackdrop()
            },
            hideBackdrop: function() {
                s.hideBackdrop()
            },
            centerBackdrop: function(e) {
                s.centerBackdrop(e)
            },
            registerCallback: function(e, t) {
                w.addEvent(e), w.registerCallback(e, t)
            },
            reload: function(e, t) {
                Q(e, t)
            },
            reloadAll: function(e, n) {
                var r = e || {};
                t.waitCall("refreshUserToken", function() {
                    G(Object.assign(r, {
                        userToken: tp.user.getProvider().getToken()
                    }), n)
                })
            },
            resetUserAndReloadAll: function(e, t) {
                var n = e || {};
                G(Object.assign(n, {
                    userToken: ""
                }), t)
            },
            checkThreeDSRedirect: function() {
                Z()
            }
        }
    }), tp.define("template", ["jq", "util", "postmessage", "containerUtils", "user"], function(e, t, n, r, i) {
        function s(e) {
            var t = tp.getEndpointRoot(!0) + "/checkout/template/show";
            return e.iframeUrl = t, e.postMessageUrl = t, tp.offer.createOfferIframe(e)
        }
        return {
            name: "template",
            show: function(e) {
                return e.offerId = r.fakeOfferId, e.createIframeFn = s, e.trackStatsOnShow = !0, tp.offer.show(e)
            },
            deferredShow: function(e) {
                return e.offerId = r.fakeOfferId, e.createIframeFn = s, tp.offer.deferredShow(e)
            },
            close: function() {
                r.closeModalContainer()
            },
            closeInline: function(e) {
                r.__protected__.closeInlineContainers(e)
            },
            createTemplateIframe: function(e) {
                return s(e)
            },
            showBackdrop: function() {
                r.showBackdrop()
            },
            hideBackdrop: function() {
                r.hideBackdrop()
            },
            centerBackdrop: function(e) {
                r.centerBackdrop(e)
            },
            registerCallback: function(e, t) {},
            refreshUser: function(e) {
                i.refreshAccessToken(!0, function() {
                    n.send("externalLoginSuccess", {
                        user_token: i.getProvider().getToken()
                    }, e)
                })
            }
        }
    }), tp.define("myaccount", ["jq", "util", "postmessage", "offer", "user", "containerUtils", "pianoId"], function(e, t, n, r, i, s, o) {
        function g(t) {
            t.outerHeight() > e(window).height() ? (f === !1 && (t.css({
                position: "absolute"
            }), f = !0), t.css({
                marginTop: e(window).scrollTop() - e(window).height() * .5
            })) : (f === !0 && (t.css({
                position: "fixed"
            }), f = !1), t.css({
                marginTop: 0 - t.outerHeight() * .5
            })), r.centerBackdrop(t), t.css({
                marginLeft: 0 - t.outerWidth() * .5
            })
        }
        var u = "verification_code",
            a = {},
            f = !1,
            l = {
                loginRequired: [],
                loginSuccess: []
            },
            c = function() {
                return tp.getEndpointRoot() + "/checkout/myaccount/show"
            },
            h = function() {
                var t = e(document.createElement("div")).addClass("tp-modal"),
                    n = e(document.createElement("div")).addClass("tp-close");
                return n.on("click", _closeContainer), t.append(n), e("body").append(t), t
            },
            p = function(e, t) {
                e.element.css("height", (e.config.maxHeight ? Math.min(t.height, e.config.maxHeight) : t.height) + "px"), e.container.css("height", (e.config.maxHeight ? Math.min(t.height, e.config.maxHeight) : t.height) + "px"), e.config.displayMode === "modal" && (e.element.css("width", t.width + "px"), e.container.css("width", t.width + "px")), n.send("resized", {
                    height: e.config.maxHeight ? Math.min(t.height, e.config.maxHeight) : t.height,
                    width: t.width
                }, e.iframeId)
            },
            d = null,
            v = function(t, n) {
                var i = e(document.createElement("div")).addClass("tp-modal"),
                    s = e(document.createElement("div")).addClass("tp-close"),
                    o = e(document.createElement("div")).addClass("tp-message");
                i.css("width", (t.width ? t.width : 400) + "px"), o.html(t.message);
                var u = e(document.createElement("div")).addClass("tp-btn-container"),
                    a = e(document.createElement("button")).addClass("tp-btn").addClass("tp-ok-btn");
                a.html(t.ok ? t.ok : "Ok");
                var f = e(document.createElement("button")).addClass("tp-btn").addClass("tp-cancel-btn");
                f.html(t.cancel ? t.cancel : "Cancel"), s.on("click", m(n, t, "cancel")), f.on("click", m(n, t, "cancel")), a.on("click", m(n, t, "ok")), i.append(s), i.append(o), u.append(a), u.append(f), i.append(u), e("body").append(i), r.showBackdrop(), i.addClass("tp-active"), g(i), d = i
            },
            m = function(e, t, n) {
                return function() {
                    d && (d.removeClass("tp-active"), r.hideBackdrop(), window.setTimeout(function() {
                        d.remove()
                    }, 250), t.result = n, e(t))
                }
            },
            y = function(e, t) {
                v(t.params, function(e) {
                    n.send("closeDialog", e, a[t.sender].iframeId)
                })
            },
            b = function(e, t) {
                l[e] = l[e] || [], l[e].push(t)
            },
            w = function(e, r, i) {
                t.debug("received event: " + e, r);
                if (typeof l[e] == "undefined") return;
                for (var s = 0; s < l[e].length; ++s) {
                    t.debug("firing callback for event: " + e);
                    var o = l[e][s](r);
                    r && r.resultCallbackId && (r.result = o, r.event = e, n.send("resultCallback", r, i))
                }!l[e].length && r && r.resultCallbackId && (r.callbackNotFound = !0, r.event = e, n.send("resultCallback", r, i))
            },
            E = function(e) {
                t.log("*** My account event received", e.event, e.params);
                switch (e.event) {
                    case "resize":
                        t.debug("*** Resize event", e.params.width, e.params.height), p(a[e.sender], e.params), a[e.sender].config.displayMode === "modal" && g(a[e.sender].container);
                        break;
                    case "startCheckout":
                        _startCheckout(e.params);
                        break;
                    case "loaded":
                        p(a[e.sender], e.params), a[e.sender].config.displayMode === "modal" && (backdrop.show(), window.setTimeout(function() {
                            backdrop.addClass("tp-active"), a[e.sender].container.addClass("tp-active"), g(a[e.sender].container)
                        }, 25));
                        break;
                    case "close":
                        break;
                    case "cancel":
                    case "complete":
                    case "error":
                    case "loginRequired":
                    case "customEvent":
                        w(e.event, e.params, e.sender);
                        break;
                    case "openDialog":
                        y(e.event, e);
                        break;
                    case "pianoIdProfileUpdated":
                        o.onProfileUpdate(e.params, function() {
                            var t = e.params;
                            t && t.resultCallbackId && n.send("resultCallback", t, e.sender)
                        });
                        break;
                    case "loginSuccess":
                        i.getProvider().onLoginSuccess(e.params);
                        var r = {
                            reloadAfterLogin: !0,
                            userToken: e.params.user_token,
                            user: e.params.user
                        };
                        S(r), w(e.event, e.params, e.sender);
                        break;
                    case "logout":
                        i.logout(function() {
                            var e = {};
                            e.userProvider = i.getProvider().getName(), e.userToken = i.getProvider().getToken() && i.getProvider().getToken().length > 0 ? i.getProvider().getToken() : "", S(e)
                        }), w(e.event, e.params, e.sender);
                        break;
                    case "userProfileUpdateSuccess":
                        var s = e,
                            u = s.event,
                            f = s.params,
                            l = s.sender;
                        i.getProvider().onLoginSuccess(f);
                        var c = {
                            userProvider: f.user_provider,
                            userToken: f.user_token
                        };
                        S(c), w(u, f, l);
                        for (var h in a)
                            if (a.hasOwnProperty(h)) {
                                var d = a[h],
                                    v = d.config;
                                v.hasOwnProperty("userToken") && delete v.userToken, k(v)
                            } break;
                    case "langChangedWithinMyAccount":
                        tp.pianoId.isConfigured() && tp.pianoId.updateLang(e.params.lang);
                        break;
                    case "requestScrollData":
                        T(e.sender);
                        break;
                    case "downForMaintenance":
                        p(a[e.sender], {
                            width: 300,
                            height: 200
                        });
                        break;
                    case "removeQueryParamByName":
                        Array.isArray(e.params.paramsToRemove) && e.params.paramsToRemove.forEach(function(e) {
                            t.removeQueryParamByName(e)
                        });
                        break;
                    default:
                        t.log("Received invalid event type: " + e.event);
                        return
                }
            },
            S = function(e) {
                n.broadcast("reloadOffer", e)
            },
            x = function(n) {
                n.keyCode === 27 && e.map(a, t.mapArrayIndex).length > 0 && _closeContainer()
            },
            T = function(e) {
                var t = a[e].element[0].getBoundingClientRect(),
                    r = {
                        iframeRect: {
                            bottom: t.bottom,
                            height: t.height,
                            left: t.left,
                            right: t.right,
                            top: t.top,
                            width: t.width
                        }
                    };
                n.send("returnScrollData", r, e)
            },
            N = function() {
                for (var e in a) {
                    var t = a[e],
                        r = !1;
                    t.container.width() !== t.containerWidth && (t.element.css("width", t.container.width()), t.containerWidth = t.container.width(), r = !0), t.container.height() !== t.containerHeight && (t.element.css("height", t.container.height()), t.containerHeight = t.container.height(), r = !0), r && n.send("resize", {
                        width: t.container.width(),
                        height: t.container.height()
                    }, e)
                }
            },
            C = function(r) {
                var o = {};
                r.templateId && (o.templateId = r.templateId);
                if (typeof r.displayMode == "undefined") r.displayMode = "inline";
                else if (r.displayMode !== "modal" && r.displayMode !== "inline") {
                    t.log("Invalid offer displayMode; must be one of: modal, inline");
                    return
                }
                o.displayMode = r.displayMode, o.iframeId = t.randomString(16), o.url = window.location.href, o.initialWidth = r.width, o.initialHeight = r.height, o.maxHeight = r.maxHeight;
                if (tp.janrain.isConfigured() && (typeof r.loginRequired == "undefined" || !r.loginRequired)) {
                    var f = [],
                        p = r;
                    tp.janrain.addEventHandler("onModalClose", function() {
                        s.activateContainers(f), t.doneCall("myAccountLogin")
                    }), tp.janrain.registerCallback("userChanged", function(e) {
                        if (e && e.user_token) {
                            var t;
                            r.loginSuccess && (t = r.loginSuccess(e));
                            if (typeof t == "undefined" || t) p.userToken = e.user_token, k(p)
                        }
                    }), tp.janrain.addEventHandler("onCaptureSessionEnded", function(e) {
                        var t;
                        r.loginSuccess && (t = r.loginSuccess(e));
                        if (typeof t == "undefined" || t) p.userToken = null, k(p)
                    }), r.loginRequired = function() {
                        return t.waitCall("refreshAccessTokenList", function() {
                            t.waitCall("offerCreate", function() {
                                t.startCall("myAccountLogin"), f = s.hideModalContainer(), tp.janrain.login()
                            })
                        }), !1
                    }
                } else if (tp.gigya.isConfigured() && (typeof r.loginRequired == "undefined" || !r.loginRequired)) {
                    var f = [];
                    tp.gigya.registerCallback("onHide", function() {
                        s.activateContainers(f), t.doneCall("myAccountLogin")
                    }), r.loginRequired = function() {
                        var e = r;
                        t.waitCall("refreshAccessTokenList", function() {
                            t.waitCall("offerCreate", function() {
                                t.startCall("myAccountLogin"), f = s.hideModalContainer(), tp.gigya.login(function(t) {
                                    var n;
                                    r.loginSuccess && (n = r.loginSuccess(t));
                                    if (typeof n == "undefined" || n) e.userToken = t.user_token, k(e)
                                })
                            })
                        })
                    }
                } else if (tp.pianoId.isConfigured()) {
                    var p = r;
                    tp.pianoId.setCallbacks({
                        loggedIn: function(e) {
                            if (o.userToken === e.token) return;
                            var t;
                            r.loginSuccess && (t = r.loginSuccess(e));
                            if (typeof t == "undefined" || t) p.userToken = e.token, k(p)
                        },
                        loggedOut: function() {
                            var e = {};
                            e.userProvider = i.getProvider().getName(), e.userToken = i.getProvider().getToken() && i.getProvider().getToken().length > 0 ? i.getProvider().getToken() : "", S(e)
                        }
                    });
                    if (typeof r.loginRequired == "undefined" || !r.loginRequired) {
                        var d = 0;
                        r.loginRequired = function() {
                            d++;
                            if (d > 10) {
                                t.log("Too many attemps to login for myAccount");
                                return
                            }
                            var e = t.getQueryParamByName(u);
                            tp.pianoId.show({
                                verificationCode: e
                            })
                        }
                    }
                    o.pianoIdUrl = tp.pianoId.getIframeUrl();
                    var v = tp.pianoId.getLang();
                    v && (o.lang = v), tp.pianoId.onLangChange(function(e) {
                        n.send("langChanged", {
                            lang: e
                        }, o.iframeId)
                    }, o.iframeId)
                } else tp.pianoIdLite.isConfigured() && (o.pianoIdUrl = tp.pianoId.getIframeUrl());
                var m = e.Deferred();
                return t.waitCall("refreshUserToken", function() {
                    var s;
                    if (r.displayMode === "inline") {
                        if (!r.containerSelector) {
                            t.log("My account must have a valid containerSelector");
                            return
                        }
                        if (e(r.containerSelector).length === 0) {
                            t.log("My account must have a valid containerSelector");
                            return
                        }
                        s = e(r.containerSelector), o.width = s.width()
                    } else s = h();
                    o.userProvider = i.getProvider().getName(), r.userToken ? o.userToken = r.userToken : o.userToken = i.getProvider().getToken();
                    for (var u in l) typeof r[u] == "function" && (t.debug("Registering " + u + " callback for iframe " + o.iframeId), b(u, r[u]));
                    o.aid = tp.aid;
                    var f = c() + "?" + e.param(o, !0),
                        p = e(document.createElement("iframe"));
                    p.attr("scrolling", "no"), p.attr("allowtransparency", "true"), p.css("overflow", "hidden"), p.css("border", "0"), p.css("height", "0px"), p.attr("src", f), p.attr("id", o.iframeId), r.displayMode === "inline" ? p.css("width", o.width + "px") : p.css("width", "0px"), a[o.iframeId] = {
                        iframeId: o.iframeId,
                        config: r,
                        element: p,
                        container: s,
                        containerWidth: s.width(),
                        containerHeight: s.height()
                    }, n.init({
                        postMessageUrl: c(),
                        receive: E,
                        iframe: a[o.iframeId]
                    }), e(window).on("keyup", x), r.displayMode === "modal" && e(window).resize(function() {
                        g(s)
                    }.bind(this)), r.displayMode === "modal" ? (g(s), s.append(p)) : s.html(p), e(window).resize(N), tp.offer && tp.offer.registerCallback("complete", function() {
                        n.send("refreshNow", {}, o.iframeId)
                    }), m.resolve(a[o.iframeId])
                }), m.promise()
            },
            k = function(e) {
                t.waitCall("offerCreate", function() {
                    t.waitCall("refreshAccessTokenList", function() {
                        C(e).then(function(e) {
                            e || t.log("Could not initialize my account; check configuration")
                        })
                    })
                })
            };
        return {
            name: "myaccount",
            show: function(e) {
                k(e)
            },
            registerCallback: function(e, t) {
                b(e, t)
            }
        }
    }), tp.define("require-css/css", [], function() {
        if (typeof window == "undefined") return {
            load: function(e, t, n) {
                n()
            }
        };
        var e = document.getElementsByTagName("head")[0],
            t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0,
            n = !1,
            r = !0;
        t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] ? r = !1 : t[4] && (n = parseInt(t[4]) < 18);
        var i = {};
        i.pluginBuilder = "./css-builder";
        var s, o, u = function() {
                s = document.createElement("style"), e.appendChild(s), o = s.styleSheet || s.sheet
            },
            a = 0,
            f = [],
            l, c = function(e) {
                a++, a === 32 && (u(), a = 0), o.addImport(e), s.onload = function() {
                    h()
                }
            },
            h = function() {
                l();
                var e = f.shift();
                if (!e) {
                    l = null;
                    return
                }
                l = e[1], c(e[0])
            },
            p = function(e, t) {
                (!o || !o.addImport) && u();
                if (o && o.addImport) l ? f.push([e, t]) : (c(e), l = t);
                else {
                    s.textContent = '@import "' + e + '";';
                    var n = setInterval(function() {
                        try {
                            s.sheet.cssRules, clearInterval(n), t()
                        } catch (e) {}
                    }, 10)
                }
            },
            d = function(t, n) {
                var i = document.createElement("link");
                i.type = "text/css", i.rel = "stylesheet";
                if (r) i.onload = function() {
                    i.onload = function() {}, setTimeout(n, 7)
                };
                else var s = setInterval(function() {
                    for (var e = 0; e < document.styleSheets.length; e++) {
                        var t = document.styleSheets[e];
                        if (t.href === i.href) return clearInterval(s), n()
                    }
                }, 10);
                i.href = t, e.appendChild(i)
            };
        return i.normalize = function(e, t) {
            return e.substr(e.length - 4, 4) === ".css" && (e = e.substr(0, e.length - 4)), t(e)
        }, i.load = function(e, t, r, i) {
            (n ? p : d)(t.toUrl(e + ".css"), r)
        }, i
    }), tp.define("util", ["jq", "versionService", "itp"], function(e, t, n) {
        function v(e) {
            var t = "";
            try {
                for (var n = 0; n < e.length; n++) try {
                    t += JSON.stringify(e[n]) + ", "
                } catch (r) {
                    t += "" + r
                }
                return [t]
            } catch (r) {
                return e
            }
        }

        function P(e) {
            return tp.useAidSpecifiedCookies && tp.aid ? e + "_" + tp.aid : e
        }

        function H() {
            var e = P("__ut"),
                t = a(e);
            if (typeof t != "undefined" && t && t.length >= 0) return t
        }

        function B() {
            return -Math.round((new Date).getTimezoneOffset())
        }

        function F() {
            if (r === undefined || r === null) r = At("__pat");
            return r || 0
        }

        function I(e) {
            r = e;
            var t = _();
            Ot("__pat", r, {
                path: "/",
                expires: 30,
                domain: t
            })
        }

        function q(e) {
            e.browser && e.browser.app_timezone_offset !== undefined ? I(e.browser.app_timezone_offset) : e.timezone_offset !== undefined && I(e.timezone_offset)
        }

        function R(t) {
            var n = f(/^tpcc_.+/);
            e.each(n, function(e, n) {
                t[n.name] = n.value
            })
        }

        function U() {
            var t = {},
                n = f(/^_pc_.+/);
            return e.each(n, function(e, n) {
                t[decodeURIComponent(n.name)] = n.value
            }), t
        }

        function z() {
            var e = [];
            e.push(document.domain);
            var t = document.domain.split(".");
            while (t.length >= 2) e.push("." + t.join(".")), t.shift();
            return e
        }

        function W(t) {
            var n = At(t);
            return e.type(n) === "boolean" || e.type(n) === "string" && n.length ? n === !0 || n === "true" ? i.ENABLED : i.DISABLED : i.NOT_DETECTED
        }

        function X() {
            var e = At("__pnahc"),
                t = !1;
            return typeof e == "undefined" && (e = "0", t = !0), {
                cookieValue: parseInt(e, 10),
                isFirst: t
            }
        }

        function V(e, t) {
            e <<= 1, t === i.ENABLED ? e |= 1 : e &= -2, t !== i.NOT_DETECTED && Ot("__pnahc", e + "", {
                path: "/",
                expires: 90
            })
        }

        function $(e) {
            var t = e >> 0 & 1;
            return t === 1
        }

        function J() {
            var e = i.NOT_DETECTED,
                t = X();
            return tp.adblockerCookieName && (e = W(tp.adblockerCookieName)), e === i.NOT_DETECTED && (e = W("__pac")), e === i.NOT_DETECTED && (e = W("__adblocker")), V(t.cookieValue, e), e === i.ENABLED && (t.isFirst || $(t.cookieValue) || (e = i.ENABLED_AFTER_DISABLED)), e
        }

        function K() {
            var e = "";
            return typeof window.blockAdBlock != "undefined" ? e = "1" : e = "0", e
        }

        function G(e) {
            return !!Q[e]
        }

        function Y(e, t) {
            Q[e] ? Q[e].waiters.push(t) : t()
        }

        function Z(e) {
            Q[e] ? Q[e].counter++ : Q[e] = {
                counter: 1,
                waiters: []
            }
        }

        function et(e, t) {
            if (Q[e]) {
                Q[e].counter--;
                if (Q[e].counter <= 0) {
                    var n = [];
                    Q[e].waiters.forEach(function(e) {
                        n.push(e)
                    }), delete Q[e], n.forEach(function(e) {
                        e(t !== undefined ? t : {})
                    })
                }
            }
        }

        function tt(e) {
            if (typeof e == "undefined" || e.length === 0) return;
            typeof e != "string" && (e = "" + e), e = e.trim();
            if (e.match(/^[0-9]{0,10}$/)) return parseInt(e);
            if (e.match(/^[0-9]{13,}$/)) return parseInt(e) / 1e3;
            var t = Date.parse(e);
            if (t) return t / 1e3;
            e = e.replace(/00:([0-9]{2}(:[0-9]{2})?\s*[AP]M)/i, "12:$1").replace(/([0-9]{2})([AP|M])/i, "$1 $2"), e = e.replace(/\s*(at|@|\-|on|\|)\s*/gi, " "), e = e.replace(/\s*(mon(day)?|tue(s?day)?|wed(nesday)?|thu((rs)?day)?|fri(day)?|sat(urday)?|sun(day)?)\s*/gi, ""), e = e.replace(/([0-9]{1,2})(st|nd|rd|th)/, "$1"), e.match(/\s+ET$/) && (d.getTimezoneOffset() === 240 ? e = e.replace(/\s+ET$/, " EDT") : e = e.replace(/\s+ET$/, " EST")), e = e.trim(), t = Date.parse(e);
            if (t) return t / 1e3;
            if (m = e.match(/!^([a-z]+)[-/ ]([0-9]+)[-/ ]([0-9]+)(.*)$!i/)) e = m[2] + " " + m[1] + " " + m[3] + m[4];
            else if (m = e.match(/!^([0-9]+)[-/ ]([a-z]+)[-/ ]([0-9]+)(.*)$!i/)) e = m[1] + " " + m[2] + " " + m[3] + m[4];
            t = Date.parse(e);
            if (t) return t / 1e3
        }

        function nt() {
            var e = ut();
            return /iPad|iPhone|iPod/.test(e) && !window.MSStream
        }

        function rt() {
            var e = ut();
            return /iPhone/.test(e) && !window.MSStream
        }

        function it() {
            var e = ut();
            return /(iPhone|iPod|iPad).*AppleWebKit/i.test(e)
        }

        function st() {
            var e = ut();
            return /(android)/i.test(e)
        }

        function ot() {
            var e = ut();
            return /(cxensebot)/i.test(e)
        }

        function ut() {
            return navigator.userAgent || navigator.vendor || window.opera
        }

        function at() {
            return t.getTinypassVersion().indexOf("SNAPSHOT") >= 0
        }

        function ft() {
            var e = !1;
            try {
                e = window.ApplePaySession && window.ApplePaySession.canMakePayments()
            } catch (t) {
                h("ApplePay error", t)
            }
            return at() ? e : lt() && e
        }

        function lt() {
            return document.location.protocol === "https:"
        }

        function ct(e, t) {
            var n = [],
                r = e.indexOf(t);
            return r === -1 ? n.push(e) : (n.push(e.substr(0, r)), n.push(e.substr(r + 1))), n
        }

        function ht(e) {
            var t = e.indexOf("?"),
                n = e.indexOf("#"),
                r = !1;
            n !== -1 && (r = !0);
            var i = !1;
            t !== -1 && (i = !0), r && i && n < t && (i = !1);
            var s, o, u;
            if (i) {
                var a = ct(e, "?");
                s = a[0];
                if (r) {
                    var f = ct(a[1], "#");
                    o = f[0], u = f[1]
                } else o = a[1]
            } else if (r) {
                var l = ct(e, "#");
                s = l[0], u = l[1]
            } else s = e;
            return {
                schemeDomainAndPath: s,
                queryString: o,
                hash: u,
                hasQueryString: i,
                hasHash: r
            }
        }

        function pt(e) {
            var t = ct(e, "="),
                n, r;
            typeof e != "undefined" && (n = t[0], r = t[1]);
            var i = "";
            return typeof n != "undefined" && (i += encodeURIComponent(decodeURIComponent(n))), typeof r != "undefined" && (i += "=" + encodeURIComponent(decodeURIComponent(r))), i
        }

        function dt(e) {
            var t = "";
            if (typeof e != "undefined") {
                var n = e.split("&");
                for (var r = 0; r < n.length; r++) r > 0 && (t += "&"), t += pt(n[r])
            }
            return t
        }

        function vt(e) {
            if (!e) return "";
            e = e.replace(/^((%20)|\s)+/, "");
            var t = ht(e),
                n = encodeURI(decodeURI(t.schemeDomainAndPath));
            return t.hasQueryString && (n += "?" + dt(t.queryString)), t.hasHash && (n += "#" + encodeURIComponent(decodeURIComponent(t.hash))), n
        }

        function mt(e) {
            var t = parseInt(e, 10);
            return !(isNaN(parseFloat(t)) || t < 0 || t > 255)
        }

        function gt(e) {
            var t = e.split("."),
                n = !0;
            if (t.length === 4) {
                if (!mt(t[0]) || !mt(t[1]) || !mt(t[2]) || !mt(t[3])) n = !1
            } else n = !1;
            return n
        }

        function yt(e) {
            var t = document.createElement("a"),
                n = /^https?:\/\//i;
            return t.href = n.test(e) ? e : "http://" + e, t.hostname
        }

        function bt(e, t, n) {
            var r;
            return function() {
                var i = this,
                    s = Array.prototype.slice.call(arguments),
                    o = function() {
                        r = null, n || e.apply(i, s)
                    },
                    u = n && !r;
                clearTimeout(r), r = setTimeout(o, t), u && e.apply(i, s)
            }
        }

        function wt(e, t) {
            function s() {
                if (n) {
                    r = arguments, i = this;
                    return
                }
                e.apply(this, arguments), n = !0, setTimeout(function() {
                    n = !1, r && (s.apply(i, r), r = i = null)
                }, t)
            }
            var n = !1,
                r, i;
            return s
        }

        function Et() {
            var e = (navigator && navigator.userAgent || "").toLowerCase(),
                t = e.match(/version\/(\d+).+?safari/);
            return t !== null
        }

        function St() {
            var t = (navigator && navigator.appVersion || "").indexOf("MSIE") !== -1,
                n = e.browser || {},
                r = n.mozilla && n.version === "11.0";
            return t || r
        }

        function xt(e, t) {
            return (new RegExp("\\?" + t, "gi")).test(e) ? e.split("&").length > 1 ? e.replace(new RegExp(t + "[^&]+&?", "gi"), "") : e.replace(new RegExp("\\?" + t + "[^&]+&?", "gi"), "") : (new RegExp("\\&" + t, "gi")).test(e) ? e.replace(new RegExp("\\&" + t + "[^&]+", "gi"), "") : e
        }

        function Tt(e) {
            if (e && e.length && e[0] === ".") return e;
            var t = e || window.location.href,
                n = yt(t);
            return gt(n) ? n : n === "localhost" ? null : "." + n
        }

        function Nt(e, t) {
            try {
                var n = new Error,
                    r = tp.user.getProvider().getName(),
                    i = JSON.stringify({
                        aid: tp.aid,
                        description: "clearing __tp cookie",
                        userProvider: r,
                        accessTokenList: e,
                        userToken: t,
                        url: window.location.href,
                        trace: n.stack
                    });
                tp.api.callApi("/anon/error/log", {
                    log_message: i
                })
            } catch (s) {}
        }

        function Ct(e) {
            try {
                var t = new Error,
                    n = tp.user.getProvider().getName(),
                    r = JSON.stringify({
                        aid: tp.aid,
                        description: "clearing __utp cookie",
                        userProvider: n,
                        userToken: e,
                        url: window.location.href,
                        trace: t.stack
                    });
                tp.api.callApi("/anon/error/log", {
                    log_message: r
                })
            } catch (i) {}
        }

        function kt(e) {
            var t = function() {
                document.removeEventListener("DOMContentLoaded", t), window.removeEventListener("load", t), e()
            };
            document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll ? window.setTimeout(e) : (document.addEventListener("DOMContentLoaded", t), window.addEventListener("load", t))
        }

        function Lt(e) {
            e || (e = 730);
            var t = tp.getMaxCookieExpirationInDays();
            if (t !== null) {
                var n;
                typeof e == "number" ? (n = new Date, n.setDate(n.getDate() + e)) : n = e;
                var r = new Date;
                r.setDate(r.getDate() + t);
                if (n > r) return t
            }
            return e
        }

        function At(t) {
            return e.cookie(t)
        }

        function Ot(t, r, i) {
            i = i || {}, tp.aid === "11C6aYHwtb" ? (i.samesite = "none", i.secure = !0) : i.samesite = "lax", i.expires && (i.expires = Lt(i.expires)), e.cookie(t, r, i), n.synchronizeCookie()
        }

        function Dt() {
            return Math.floor((new Date).getTime() / 1e3)
        }

        function Pt() {
            try {
                return typeof window.localStorage == "object" && typeof window.localStorage.getItem == "function"
            } catch (e) {
                return !1
            }
        }

        function Ht() {
            var e = (new Date).getTime().toString(36);
            while (e.length < 16) e += Math.round(Math.random() * 2147483647).toString(36);
            return e.substr(0, 16)
        }

        function Bt(t) {
            var n = Mt + t,
                r = e.localStorage.get(n),
                i = e.localStorage.get(n + _t);
            return i && i < Dt() ? (Ft(t), null) : r
        }

        function jt(t, n, r) {
            var i = Mt + t;
            e.localStorage.set(i, n), r && e.localStorage.set(i + _t, Dt() + r)
        }

        function Ft(t) {
            var n = Mt + t;
            e.localStorage.remove(n), e.localStorage.remove(n + _t)
        }

        function It() {
            var e = x("redirect_uri");
            return e.indexOf("https://www.facebook.com/subscriptions/account-linking/confirm/") === 0
        }

        function qt(t) {
            var n = e.Deferred();
            return e.when.apply(e, t).done(function() {
                n.resolve()
            }), n.promise()
        }

        function Rt(t) {
            var n = e.Deferred();
            return t.forEach(function(t) {
                t.then(function() {
                    n.resolve.apply(e, arguments)
                })
            }), n.promise()
        }

        function Ut() {
            var e = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"],
                t = ["_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"];
            for (var n in t) {
                var r = t[n];
                if (window[r]) return !0
            }
            for (var i in e) {
                var s = e[i];
                if (window.document[s]) return !0
            }
            for (var o in window.document)
                if (o.match(/\$[a-z]dc_/) && window.document[o].cache_) return !0;
            return window.external && window.external.toString && window.external.toString() && window.external.toString().indexOf("Sequentum") !== -1 ? !0 : window.document.documentElement.getAttribute("selenium") ? !0 : window.document.documentElement.getAttribute("webdriver") ? !0 : window.document.documentElement.getAttribute("driver") ? !0 : !1
        }

        function zt(e) {
            return e.slice().replace(/_[a-z]/g, function(e) {
                return e.replace("_", "").toUpperCase()
            })
        }
        var r, i = {
            ENABLED_AFTER_DISABLED: -2,
            NOT_DETECTED: -1,
            DISABLED: 0,
            ENABLED: 1
        };
        typeof "testString".toHex == "undefined" && Object.defineProperty(String.prototype, "toHex", {
            enumerable: !1,
            value: function() {
                var e = "";
                for (var t = 0; t < this.length; ++t) e += "" + this.charCodeAt(t).toString(16);
                return e
            }
        });
        var s = function(e) {
                e || (e = 5);
                var t = "",
                    n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
                if (window.crypto && window.crypto.getRandomValues && typeof Uint32Array == "function") {
                    var r = new Uint32Array(e);
                    window.crypto.getRandomValues(r);
                    for (var i = 0; i < e; i++) t += n.charAt(r[i] % n.length)
                } else
                    for (var i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
                return t
            },
            o = function(t, n) {
                var r = {
                    path: "/",
                    expires: 0
                };
                typeof n != "undefined" && (r.domain = n), e.removeCookie(t, r)
            },
            u = function(e, t) {
                t.indexOf("abril.com.br") !== -1 && o(e, ".abril.com.br")
            },
            a = function(e) {
                if (document.cookie.length === 0) return null;
                if (e instanceof RegExp) {
                    var t = document.cookie.split(";");
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n].indexOf("=");
                        if (r !== -1) {
                            var i = t[n].substr(0, r).trim(),
                                s;
                            if (e.test(i)) {
                                s = t[n].substr(r + 1).trim();
                                try {
                                    return decodeURIComponent(s)
                                } catch (o) {
                                    l('Could not uri-decode cookie "' + e.toString() + '"', o)
                                }
                                return s
                            }
                        }
                    }
                } else {
                    var u = "; " + document.cookie,
                        a = u.split("; " + e + "=");
                    if (a.length >= 2) {
                        var f = a.pop().split(";").shift();
                        try {
                            return decodeURIComponent(f)
                        } catch (o) {
                            l('Could not uri-decode cookie "' + e + '"', o)
                        }
                        return f
                    }
                }
                return null
            },
            f = function(e) {
                if (document.cookie.length === 0) return [];
                var t = [],
                    n = document.cookie.split(";");
                for (var r = 0; r < n.length; r++) {
                    var i = n[r].indexOf("=");
                    if (i !== -1) {
                        var s = n[r].substr(0, i).trim(),
                            o;
                        if (e instanceof RegExp && e.test(s)) {
                            o = n[r].substr(i + 1).replace(/^\s+|\s+$/g, "");
                            try {
                                o = decodeURIComponent(o)
                            } catch (u) {
                                l('Could not uri-decode cookie "' + e.toString() + '"', u)
                            }
                            t.push({
                                name: s,
                                value: o
                            })
                        } else if (s === e) {
                            o = n[r].substr(i + 1).replace(/^\s+|\s+$/g, "");
                            try {
                                o = decodeURIComponent(o)
                            } catch (u) {
                                l('Could not uri-decode cookie "' + e + '"', u)
                            }
                            t.push({
                                name: s,
                                value: o
                            })
                        }
                    }
                }
                return t
            },
            l = function() {
                tp.debug === !0 && h.apply(null, arguments)
            },
            c = function() {
                h.apply(null, arguments);
                var e;
                typeof arguments[0] == "string" ? e = new Error(arguments[0]) : e = new Error, e.stack && h(e.stack)
            },
            h = function() {
                window.console || (window.console = {});
                if (!window.console.log) return;
                if (!window.console.log.apply) return;
                if (!window.console.log.apply.call) return;
                if (typeof window.console != "undefined" && typeof window.console.log != "undefined") {
                    var e = ["TP:"];
                    try {
                        for (var t = 0; t < arguments.length; t++) e.push(arguments[t])
                    } catch (n) {
                        e = arguments
                    }
                    Ut() && (e = v(e)), Ut() && (e = v(e)), typeof window.console.log == "object" ? window.console.log.apply.call(console.log, console, e) : console.log.apply(console, e)
                }
            },
            p = function() {
                var e = 0;
                return window.pageYOffset ? e = window.pageYOffset : (e = document.documentElement || document.body.parentNode, e = "number" == typeof e.scrollTop ? e.scrollTop : document.body.scrollTop), e
            },
            g = function(e) {
                return typeof e == "number" && isFinite(e) && Math.floor(e) === e
            },
            y = function() {
                var e, t;
                return e = Math.max(document.documentElement.clientWidth, document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth), t = Math.max(document.documentElement.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight), {
                    x: e,
                    y: t
                }
            },
            b = function() {
                var e, t;
                return "CSS1Compat" === document.compatMode ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : (e = document.body.clientWidth, t = document.body.clientHeight), {
                    x: e,
                    y: t
                }
            },
            w = function(e, t) {
                var n = p(),
                    r = b();
                return r = {
                    x: r.x / 2 - e / 2,
                    y: r.y / 2 - t / 2 + n
                }, r.x = Math.max(0, r.x), r.y = Math.max(10, r.y), r
            },
            E = function(e, t) {
                e = e || 0, t = t || 0;
                var n = window.screenLeft !== undefined ? window.screenLeft : window.screen.left,
                    r = window.screenTop !== undefined ? window.screenTop : window.screen.top,
                    i = window.innerWidth || document.documentElement.clientWidth || window.screen.width,
                    s = window.innerHeight || document.documentElement.clientHeight || window.screen.height,
                    o = i / 2 - e / 2 + n,
                    u = s / 2 - t / 2 + r;
                return {
                    left: o,
                    top: u
                }
            },
            S = function(e) {
                var t = {};
                return location.search.substr(1).split("&").forEach(function(e) {
                    var n = e.split("="),
                        r = n[0],
                        i = n[1] && decodeURIComponent(n[1]);
                    r in t ? t[r].push(i) : t[r] = [i]
                }), t.hasOwnProperty(e)
            },
            x = function(e) {
                e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
                    n = t.exec(location.search);
                return n === null ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
            },
            T = function(e, t) {
                var n, r = e.split("#"),
                    i = r[0].split("?");
                r.length >= 2 && (n = r[1]), t = Array.isArray(t) ? t : [t];
                if (i.length >= 2) {
                    var s = i[1].split(/[&;]/g);
                    for (j = 0; j < t.length; j++) {
                        var o = encodeURIComponent(t[j]) + "=";
                        for (var u = s.length; u-- > 0;) s[u].lastIndexOf(o, 0) !== -1 && s.splice(u, 1)
                    }
                    return e = i[0] + (s.length > 0 ? "?" + s.join("&") : ""), n ? e + "#" + n : e
                }
                return e
            },
            N = function() {
                return typeof window.next == "object" && typeof window.next.router == "object"
            },
            C = function(e) {
                var t = T(location.href, e);
                if (history && typeof history.replaceState == "function") {
                    var n = N() ? {
                        url: T(history.state.url, e),
                        as: T(history.state.as, e),
                        options: history.state.options
                    } : history.state;
                    history.replaceState(n, document.title, t)
                } else location.href = t
            },
            k = function(t, n, r) {
                var i = P("__ut");
                if (t && e.type(t.value) === "string") {
                    var s = new Date,
                        u = {
                            path: "/",
                            expires: 730
                        };
                    t.cookie_domain && t.cookie_domain !== "localhost" && e.inArray(t.cookie_domain, z()) >= 0 && (u.domain = t.cookie_domain), Ot("__tac", t.value, u), Ot("__tae", s.getTime(), u), Ot(i, n, u), n === "" && !r && Nt(t, n)
                } else {
                    var a = z();
                    for (var f in a) o("__tac", a[f]), o("__tae", a[f]), o(i, a[f]);
                    o("__tac"), o("__tae"), o(i), r || Nt(t, n)
                }
            },
            L = function(e) {
                typeof e.browser != "undefined" && typeof e.browser.cookie_domain != "undefined" && et("domainIsReceived", e.browser.cookie_domain), e.tbc && e.tbc.cookie_domain && et("domainIsReceived", e.tbc.cookie_domain)
            },
            A = function(e) {
                try {
                    return JSON.parse(At(e)).domain
                } catch (t) {
                    Z("domainIsReceived")
                }
            },
            O = function(e) {
                var t;
                typeof e.browser != "undefined" && typeof e.browser.tbc != "undefined" && (t = {
                    path: "/",
                    expires: 730
                }, e.browser.cookie_domain && (t.domain = e.browser.cookie_domain, u("__tbc", e.browser.cookie_domain)), o("__tbc"), Ot("__tbc", e.browser.tbc, t)), e.tbc && e.tbc.cookie_value && (t = {
                    path: "/",
                    expires: 730
                }, e.tbc.cookie_domain && (t.domain = e.tbc.cookie_domain, u("__tbc", e.tbc.cookie_domain)), o("__tbc"), Ot("__tbc", e.tbc.cookie_value, t))
            },
            M = function() {
                return At("__tbc")
            },
            _ = function() {
                var e, t, n = "get_top_level_domain_cookie",
                    r = document.location.hostname.split(".");
                for (e = r.length - 1; e >= 0; e--) {
                    t = "." + r.slice(e).join(".");
                    var i = {
                        path: "/",
                        domain: t
                    };
                    Ot(n, t, i);
                    if (At(n)) return i.expires = new Date(1), Ot(n, t, i), t
                }
            },
            D = function() {
                var e = x("tpcc");
                if (e) {
                    var t = new Date,
                        n = JSON.stringify({
                            date: t.getTime()
                        }),
                        r = _();
                    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(location.hostname) && (r = ""), r || (r = ""), Ot("tpcc_" + e, n, {
                        path: "/",
                        expires: 90,
                        domain: r
                    })
                }
            },
            Q = {},
            Mt = "__tp-",
            _t = "-expiration";
        return {
            name: "util",
            __private__: {
                getAdjustedCookieExpiration: Lt
            },
            __protected__: {
                deleteTLDCookieForSpecificDomains: u,
                documentReady: kt,
                getCookie: At,
                setCookie: Ot,
                getLocalStorageItem: Bt,
                hasLocalStorage: Pt,
                randomStringCxCompatible: Ht,
                setLocalStorageItem: jt,
                removeLocalStorageItem: Ft,
                cameFromFbSubscriptions: It,
                logRemoveTokens: Ct,
                waitAllPromises: qt,
                isInteger: g,
                racePromise: Rt,
                isCxenseBot: ot,
                isHttpsProtocol: lt,
                isApplePayAllowed: ft,
                isDevEndpoint: at
            },
            fromUnderscoreToCamelCase: function(e) {
                return zt(e)
            },
            randomString: function(e) {
                return s(e)
            },
            log: function() {
                h.apply(null, arguments)
            },
            debug: function() {
                l.apply(null, arguments)
            },
            error: function() {
                c.apply(null, arguments)
            },
            findCookieByName: function(e) {
                return a(e)
            },
            findCookiesByName: function(e) {
                return f(e)
            },
            removeVoucherCodeFromUrl: function(e) {
                return xt(e, "voucher_code")
            },
            removeSharedAccountCodeFromUrl: function(e) {
                return xt(e, "shared_account_code")
            },
            deleteCookie: function(e, t) {
                return o(e, t)
            },
            mapArrayIndex: function(e, t) {
                return t
            },
            getScroll: function() {
                return p()
            },
            getPageSize: function() {
                return y()
            },
            getViewport: function() {
                return b()
            },
            center: function(e, t) {
                return w(e, t)
            },
            centerScreen: function(e, t) {
                return E(e, t)
            },
            getQueryParamByName: function(e) {
                return x(e)
            },
            hasQueryParamByName: function(e) {
                return S(e)
            },
            removeQueryParamByName: function(e) {
                return C(e)
            },
            setAccessTokenListCookie: function(e, t, n) {
                return k(e, t, n)
            },
            setTpccCookies: function() {
                return D()
            },
            getCampaigns: function(e) {
                return R(e)
            },
            getCustomCookies: function() {
                return U()
            },
            ADBLOCKER_STATUS: i,
            getAdblockStatus: function() {
                return J()
            },
            getAdblockerStatusReason: function() {
                return K()
            },
            getAdblockerHistoryCookieInfo: function() {
                return X()
            },
            waitCall: function(e, t) {
                Y(e, t)
            },
            startCall: function(e) {
                Z(e)
            },
            doneCall: function(e, t) {
                et(e, t)
            },
            hasCall: G,
            debounce: bt,
            throttle: wt,
            setTbcCookieFromResponse: function(e) {
                O(e)
            },
            getTbcCookie: function() {
                return M()
            },
            getTacCookie: function() {
                return At("__tac")
            },
            getAidSpecifiedName: function(e) {
                return P(e)
            },
            getUserTokenCookie: function() {
                return H()
            },
            setAppTimezoneOffsetFromResponse: function(e) {
                return q(e)
            },
            setAppTimezoneOffset: function(e) {
                return I(e)
            },
            getAppTimezoneOffset: function() {
                return F()
            },
            getBrowserTimezoneOffset: function() {
                return B()
            },
            str2timestamp: function(e) {
                return tt(e)
            },
            getPossibleCookieDomains: function() {
                return z()
            },
            isMobileTabletIOs: function() {
                return nt()
            },
            isIphone: function() {
                return rt()
            },
            isIOsUiWebView: function() {
                return it()
            },
            isAndroid: function() {
                return st()
            },
            isIE: function() {
                return St()
            },
            prepareUrlParameter: function(e) {
                return vt(e)
            },
            getReferrer: function() {
                return document.referrer
            },
            getHostname: function(e) {
                return yt(e)
            },
            extractCookieDomain: function(e) {
                return Tt(e)
            },
            setCurrentDomainFromResponse: function(e) {
                return L(e)
            },
            getCurrentDomainFromCookie: function(e) {
                return A(e)
            },
            isBot: Ut
        }
    }), tp.define("util", function() {}), tp.define("postmessage", ["jq", "util"], function(e, t) {
        function g(e) {
            var t = s[e.event] || [];
            t.forEach(function(t) {
                t(e)
            })
        }
        var n = {},
            r = {},
            i = [],
            s = {},
            o = function(e) {
                return function() {
                    var t = i.filter(function(t) {
                        return t.recipient === e
                    });
                    i = i.filter(function(t) {
                        return t.recipient !== e
                    });
                    for (var n = t.length; n--;) {
                        var r = t.pop();
                        f(r.event, r.params, r.recipient)
                    }
                }
            },
            u = function(e, n, s) {
                if (!(!v(s) || s in r)) {
                    t.error("Cannot send message to unmanaged iframe: " + s);
                    return
                }
                r[s].element && (r[s].config.displayMode === "popup" || r[s].config.displayMode !== "popup" && r[s].element.get(0).contentWindow ? f(e, n, s) : (i.push({
                    event: e,
                    params: n,
                    recipient: s
                }), r[s].element.on("load", o(s))))
            },
            a = function(e) {
                var t = r[e];
                return t && v(t)
            },
            f = function(t, i, s) {
                var o, u = {},
                    a = r[s].config.displayMode === "popup" ? "opener" : "parent";
                u.sender = v(s) ? a : s, u.recipient = v(s) ? s : a, u.event = t, u.params = i;
                var f = r[s].element.get(0);
                f && f.contentWindow ? o = r[s].element.get(0).contentWindow : f && f.toString() === "[object Window]" ? o = r[s].element.get(0) : r[s].config.displayMode === "popup" ? o = r[s].container : o = window[a], e.postMessage(JSON.stringify(u), n[s].postMessageUrl, o)
            },
            l = function(e) {
                e.keyCode === 27 && d(e.data.iframeId) && u("close", null, e.data.iframeId)
            },
            c = function(r, i) {
                h(r.iframe);
                if (!r.postMessageUrl) {
                    t.error("Must specify postMessageUrl to send and receive postMessages");
                    return
                }
                n[r.iframe.iframeId].initializedKeystrokeHandler || (n[r.iframe.iframeId].initializedKeystrokeHandler = !0, e(window).on("keyup", r.iframe, l)), n[r.iframe.iframeId].postMessageUrl = r.postMessageUrl, n[r.iframe.iframeId].initializedListener || (n[r.iframe.iframeId].initializedListener = !0, n[r.iframe.iframeId].receive = r.receive, e.receiveMessage(m));
                if (r.iframe.iframeId) {
                    n[r.iframe.iframeId].iframeConfig = r;
                    var s = i || {};
                    s.height = e("html").outerHeight(), s.width = r.iframeParams && r.iframeParams.width ? r.iframeParams.width : e("html").outerWidth(), u("loaded", s, r.iframe.iframeId)
                }
            },
            h = function(e) {
                n[e.iframeId] = {
                    iframeConfig: null,
                    receive: null,
                    postMessageUrl: null,
                    initializedListener: !1,
                    initializedKeystrokeHandler: !1
                }, r[e.iframeId] = e
            },
            p = function(e) {
                delete r[e], delete n[e]
            },
            d = function(e) {
                return n[e] && n[e].iframeConfig ? !0 : !1
            },
            v = function(e) {
                return n[e] && n[e].iframeConfig ? !1 : !0
            },
            m = function(i) {
                var s, o = !1,
                    u;
                try {
                    s = JSON.parse(i.data)
                } catch (a) {
                    try {
                        s = e.deparam(i.data), s && (o = !0)
                    } catch (a) {
                        t.debug("Error parsing postMessage: " + i.data);
                        return
                    }
                }
                g(s);
                if (o) {
                    var f;
                    for (var l in r) {
                        u = r[l];
                        if (!u.config.isCurtain) continue;
                        f = !0, u.config.parent && n[u.config.parent].receive && n[u.config.parent].receive(s), n[l].receive && n[l].receive(s)
                    }
                    f || t.debug("Error parsing postMessage: " + i.data);
                    return
                }
                if (!(!v(s.sender) || !!s.sender && s.sender in r)) {
                    t.debug("Received message from unmanaged iframe: " + s.sender);
                    return
                }
                t.debug((d(s.sender) ? "iframe(" + s.recipient : "the parent") + ") received event '" + s.event + "' from iframe(" + s.sender + ")", s), n[s.sender].receive && n[s.sender].receive(s);
                if (r[s.sender]) {
                    u = r[s.sender];
                    if (u.config.parent && n[u.config.parent].receive) {
                        var c = !0;
                        s.sender = u.config.parent, n[u.config.parent].receive(s, c)
                    }
                }
            };
        return {
            name: "postmessage",
            init: function(e, t) {
                c(e, t)
            },
            __protected__: {
                isIframeManaged: a
            },
            send: function(e, t, n) {
                u(e, t, n)
            },
            removeIframe: function(e) {
                p(e)
            },
            broadcast: function(e, t, n) {
                for (var i in r) {
                    if (i === n) continue;
                    u(e, t, i)
                }
            },
            subscribe: function(e, t) {
                s[e] = s[e] || [], s[e].push(t)
            },
            unsubscribe: function(e, t) {
                if (!(s[e] instanceof Array)) return;
                s[e] = s[e].filter(function(e) {
                    return e !== t
                })
            }
        }
    }), tp.define("postmessage", function() {}), tp.define("user", ["api", "util", "jq", "janrain", "tinypassAccounts", "condeUserProvider", "gigya", "pianoId", "pianoIdLite", "eventUtils"], function(e, t, n, r, i, s, o, u, a, f) {
        var l = f.createEventManager([]),
            c = function() {
                function i(e) {
                    t.setAccessTokenListCookie({
                        value: e.token_list,
                        cookie_domain: e.cookie_domain
                    }, e.user_token)
                }
                var e = function() {
                        return "publisher_user_ref"
                    },
                    n = function() {
                        if (!tp.userRef) return null;
                        if (tp.userRef.constructor === "".constructor) return tp.userRef;
                        if (tp.userRef.constructor === {}.constructor) return "{jox}" + JSON.stringify(tp.userRef)
                    },
                    r = function() {
                        return typeof tp.userRef != "undefined" && tp.userRef && tp.userRef.length > 0 ? !0 : !1
                    };
                return {
                    getName: function() {
                        return e()
                    },
                    getToken: function() {
                        return n()
                    },
                    isUserValid: function() {
                        return r()
                    },
                    onLoginSuccess: i,
                    logout: function(e) {
                        t.setAccessTokenListCookie(), e && e()
                    }
                }
            }(),
            h = function() {
                return r.isConfigured() ? r : i.isConfigured() ? i : s.isConfigured() ? s : o.isConfigured() ? o : u.isConfigured() ? u : a.isConfigured() ? a : c
            },
            p = function(n, r) {
                if (typeof r == "undefined" || !r) r = function() {};
                var i = !1;
                if (typeof n != "undefined" && n) i = !0;
                else {
                    var s = t.__protected__.getCookie("__tae");
                    if (typeof s == "undefined" || !s) i = !0;
                    else {
                        var o = new Date(parseInt(s)),
                            u = new Date;
                        u.getTime() - o.getTime() > 864e5 && (i = !0)
                    }
                }
                if (!i) {
                    r(null);
                    return
                }
                t.waitCall("refreshUserToken", function() {
                    t.waitCall("offerCreate", function() {
                        t.waitCall("experienceExecute", function() {
                            if (!h().isUserValid()) {
                                r("");
                                return
                            }
                            t.startCall("refreshAccessTokenList");
                            var n = {
                                url: t.prepareUrlParameter(window.location.href)
                            };
                            e.callApi("/access/token/list", n, function(e) {
                                t.doneCall("refreshAccessTokenList");
                                if (typeof e.access_token_list == "undefined") {
                                    r(null);
                                    return
                                }
                                t.setAccessTokenListCookie(e.access_token_list), r(e.access_token_list.value)
                            })
                        })
                    })
                })
            },
            d = function(e) {
                var t = h().getName();
                if (t === "tinypass_accounts") i.login(e);
                else if (t === "piano_id") {
                    var n = e || {};
                    u.show(n)
                } else t === "publisher_user_ref" && l.fireCallbacks("loginRequired", {}, null, !0)
            },
            v = function() {
                return h().isUserValid()
            },
            m = function(e, t) {
                h().logout(e, t)
            },
            g = function(e) {
                if (typeof e == "undefined" || !e) e = function() {};
                var t = h();
                typeof t.prepare == "function" ? t.prepare().then(e, e) : e()
            };
        return {
            name: "user",
            getProvider: function() {
                return h()
            },
            providerInit: function(e) {
                g(e)
            },
            refreshAccessToken: function(e, t) {
                p(e, t)
            },
            showLogin: function(e) {
                d(e)
            },
            isUserValid: function() {
                return v()
            },
            logout: function(e, t) {
                m(e, t)
            },
            registerCallback: function(e, t) {
                l.addEvent(e), l.registerCallback(e, t)
            }
        }
    }), tp.define("user", function() {}), tp.define("meter", ["jq", "util", "api", "offer", "eventUtils", "main"], function(e, t, n, r, i, s) {
        var o = function() {
                return tp.offerBaseUrl ? tp.offerBaseUrl : tp.endpoint ? tp.endpoint + "/../../" : tp.endpoint === "sandbox" ? "https://sandbox.tinypass.com/" : "https://offers.tinypass.com/"
            },
            u = i.createEventManager(["onCheckoutSuccess", "onMeterExpired", "onMeterError", "onAccessGranted", "onMeterActive", "onMeterInactive", "meterSelector"]),
            a = {
                state: "ok",
                views_left: null,
                offer_id: "",
                curtain_template_id: "",
                reminder_template_id: "",
                cookie_name: "",
                cookie_value: "",
                cookie_expires: "",
                show_reminder: !1,
                show_close_button: !1
            },
            f = function() {
                return a.state && a.state === "ex"
            },
            l = function() {
                return typeof a.views_left != "undefined" && a.views_left === 0 ? !0 : !1
            },
            c = function(e) {
                e && h("onCheckoutSuccess", e)
            },
            h = function(e, n) {
                return u.fire(undefined, e, !0, n), S[e] && typeof S[e] == "function" ? (t.debug("_customCaller called with " + e), S[e](n)) : !0
            },
            p = function(t) {
                t = t || {}, t.offerId || (t.offerId = a.offer_id), t.templateId || (t.templateId = a.curtain_template_id), t.displayMode || (t.displayMode = S.displayMode), t.containerSelector || (t.containerSelector = S.containerSelector), t.showCloseButton || (t.showCloseButton = a.show_close_button), e.type(S.close) === "function" && (t.close = S.close), e.type(S.loginRequired) === "function" && (t.loginRequired = S.loginRequired), e.type(S.customEvent) === "function" && (t.customEvent = S.customEvent), e.type(S.onCheckoutSuccess) === "function" && (t.complete = S.onCheckoutSuccess), r.createOfferIframe(t)
            },
            d = function(e) {
                t.debug("_handleExpired", e), h("onMeterExpired", e);
                if (e.track_page_view) {
                    var n = h("onShowOffer", e);
                    n && p()
                }
            },
            v = function(e) {
                t.debug("_handleMeterActive", e);
                if (e.show_reminder && e.reminder_template_id && e.track_page_view) {
                    var n = h("onShowOffer", e);
                    n && p({
                        templateId: e.reminder_template_id
                    })
                }
                h("onMeterActive", e)
            },
            m = function(e) {
                t.debug("_handleMeterInactive", e), h("onMeterInactive", e)
            },
            g = function(e) {
                t.debug("_handleAccessGranted", e), h("onAccessGranted", e)
            },
            y = function(e) {
                h("onMeterError", e)
            },
            b = function(e) {
                h("___onProcessMeter", e);
                if (!e.user_meter) {
                    t.log("Could not load meter", e), y(e);
                    return
                }
                a = e.user_meter;
                if (a && a.cookie_name && a.cookie_value && a.cookie_expires) {
                    var n = {
                        path: "/",
                        expires: a.cookie_expires
                    };
                    a.cookie_domain && (n.domain = a.cookie_domain), t.__protected__.setCookie(a.cookie_name, a.cookie_value, n)
                }
                a.state === "ok" ? v(a) : a.state === "ap" ? g(a) : a.state === "ia" ? m(a) : d(a)
            },
            w = function(e, r, i) {
                if (S.paywallId === null || S.paywallId === "") {
                    t.debug("You must specify a paywallId in your configuration");
                    return
                }
                var o = document.URL;
                e && typeof e.getAttribute == "function" && e.getAttribute("href") ? o = e.getAttribute("href") : e && typeof e.attr == "function" && e.attr("href") && (o = e.attr("href"));
                var u = S.trackPageview;
                u && delete S.trackPageview;
                var a = S.meterSelector();
                a || (a = "");
                var f = {
                    paywall_id: S.paywallId,
                    url: encodeURI(o),
                    referer: encodeURI(S.referer),
                    track_page_view: u,
                    meter_name: a,
                    pageview_id: s.fetchPageViewId()
                };
                r && (f.transaction_id = r), S.referer = "";
                var l = t.__protected__.getCookie("umc");
                if (l) f.umc = l;
                else {
                    var c = t.__protected__.getCookie("umc_" + S.paywallId);
                    c && (f.umc = c)
                }
                n.callApi("/anon/meter/load", f, function(e) {
                    b(e), typeof i == "function" && i()
                })
            },
            E = function(e) {
                if (typeof e == "undefined") {
                    t.error("Must specify paywall configuration to load Tinypass paywall");
                    return
                }
                if (typeof e.paywallID == "undefined" && typeof e.paywallId == "undefined") {
                    t.error("Must specify paywallId to load Tinypass paywall");
                    return
                }
                typeof e.paywallId == "undefined" && (e.paywallId = e.paywallID);
                for (var n in e) S[n] = e[n];
                S.referer = document.referrer, t.debug("Initializing paywall: " + S.paywallId), w()
            },
            S = {
                paywallId: null,
                trackPageview: !0,
                trackExternalReferrer: !0,
                referer: document.referrer,
                offerURL: "",
                displayMode: "modal",
                containerSelector: "",
                onCheckoutSuccess: function() {},
                onMeterExpired: function() {},
                onMeterError: function() {},
                onAccessGranted: function() {},
                onMeterActive: function() {},
                onMeterInactive: function() {},
                meterSelector: function() {}
            },
            x = {
                style: "<div> </div><style type=\"text/css\"> .tpm-counter { position: fixed; padding: 30px; line-height: 60px; z-index: 99999; cursor: pointer; font-family: Arial, Helvetica, sans-serif; color: #fff; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .pos-1 { top: 0; bottom: auto; left: auto; right: 0; } .pos-2 { top: 0; bottom: auto; left: 0; right: auto; } .pos-3 { top: auto; bottom: 0; left: 0; right: auto; } .pos-4 { top: auto; bottom: 0; left: auto; right: 0; } .tpm-counter > div { display: block; } .tpm-ticker { background: #173c6f; -webkit-border-top-left-radius: 4px; -webkit-border-bottom-left-radius: 4px; -moz-border-radius-topleft: 4px; -moz-border-radius-bottomleft: 4px; border-top-left-radius: 4px; border-bottom-left-radius: 4px; text-align: center; float: left; position: relative; } .tpm-numeral { font-size: 36px; font-weight: 700; padding: 0 15px; } .tpm-shadow { background: #072850; opacity: 0.2; height: 30px; -webkit-border-top-left-radius: 4px; -moz-border-radius-topleft: 4px; width: 100%; position: absolute; top: 0; z-index: 1;    } .tpm-caption { float: left; background: url('//code.tinypass.com/images2/counter-middle.png') #3b7ad9 repeat-x; padding: 0 15px; font-size: 20px; font-weight: 400; } .tpm-edge { height: 60px; width: 10px; float: left; background: url('//code.tinypass.com/images2/counter-edge.png') no-repeat; } @media only screen and (max-width : 640px) { .tpm-counter { display: none; }  } </style>",
                init: function(e) {
                    this.tmpl = e.template || "", this.count = e.count, this.caption = e.caption || "", this.padding = e.padding || "20px"
                },
                display: function() {
                    var t = e(".tpm-counter"),
                        n = e(".tpm-counter .tpm-numeral"),
                        r = e(".tpm-counter .tpm-caption");
                    if (n.length === 0) {
                        var i = e("body");
                        i.append(this.style), i.append(this.tmpl)
                    }
                    n.html(this.count), r.html(this.caption), t.css("padding", this.padding), t.click(function() {
                        p()
                    })
                }
            },
            T = function() {
                e.removeCookie("umc"), e.removeCookie("umc_" + S.paywallId), e.ajax({
                    url: o() + "/tpl/m/logout",
                    data: {
                        paywall_id: S.paywallId
                    },
                    dataType: "jsonp",
                    action: "get",
                    success: function(t) {
                        if (t.ctd) var n = t.ctd;
                        for (var r = 0; r < n.length; ++r) e.removeCookie(n[r])
                    }
                })
            };
        return {
            name: "meter",
            init: function(e) {
                E(e)
            },
            isExpired: function() {
                return f()
            },
            isExpiredNextClick: function() {
                return l()
            },
            checkMeter: function(e) {
                S.trackPageview = !0, w(e)
            },
            showCurtain: function(e) {
                p(e)
            },
            last: function() {
                return a
            },
            registerCallback: function(e, t) {
                u.addEvent(e), u.registerCallback(e, t)
            }
        }
    }), tp.define("fingerprint", ["jq", "util", "sha1"], function(e, t, n) {
        var r = "",
            i = function() {
                try {
                    var e, t;
                    return t = window.navigator.userLanguage || window.navigator.language, e = (new Date).getTimezoneOffset(), e + ":" + t
                } catch (n) {
                    return ""
                }
            },
            s = function() {
                if (window.ActiveXObject) return o();
                try {
                    var e = "",
                        t = navigator.plugins.length;
                    if (t > 0)
                        for (var n = 0; n < t; n++) e += navigator.plugins[n].name + "|";
                    return e
                } catch (r) {
                    return ""
                }
            },
            o = function() {
                var e = ["ShockwaveFlash.ShockwaveFlash.6", "ShockwaveFlash.ShockwaveFlash.7", "SWCt1.SWCt1.9", "SWCtl.SWCtl", "Adobe.SVGCtl", "WMPlayer.OCX", "AgControl.AgControl", "AcroPDF.PDF", "PDF.PdfCtrl", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealPlayer", "Skype.Detection", "3dmlw.IEPlugin", "GoogleTalk.Plugin", "GoogleTalk.Plugin.1"],
                    t = "";
                return e.map(function(e) {
                    try {
                        new ActiveXObject(e), t += e + "|"
                    } catch (n) {}
                }), t
            },
            u = function() {
                try {
                    return screen.height + "x" + screen.width + "+" + screen.colorDepth
                } catch (e) {
                    return ""
                }
            },
            a = function() {
                return navigator.userAgent;
                var e
            },
            f = function() {
                var e = "";
                try {
                    e += document.getElementById ? 1 : 0, e += window.getComputedStyle ? 1 : 0, e += screen.globalStorage ? 1 : 0, e += window.localStorage ? 1 : 0, e += window.sessionStorage ? 1 : 0, e += document.getElementsByClassName ? 1 : 0, e += document.querySelector ? 1 : 0, e += document.all ? 1 : 0, e += window.attachEvent ? 1 : 0, e += window.createPopup ? 1 : 0, e += window.XMLHttpRequest ? 1 : 0, e += window.ActiveXObject ? 1 : 0, e += window.XDomainRequest ? 1 : 0, e += window.msPerformance ? 1 : 0, e += document.documentMode ? 1 : 0, e += navigator.cpuClass ? 1 : 0, e += navigator.browserLanguage ? 1 : 0, e += window.opera ? 1 : 0, e += window.chrome ? 1 : 0
                } catch (t) {}
                return e
            },
            l = function() {
                if (r) return r;
                var e = i();
                return e += s(), e += u(), e += a(), e += f(), r = n.hash(e), t.debug("Current browser fingerprint is: " + r), r
            };
        return l(), {
            name: "fingerprint",
            getFingerprint: function() {
                return l()
            }
        }
    }), tp.define("jwtDecode", [], function() {
        function t(e) {
            this.message = e
        }

        function n(n) {
            var r = String(n).replace(/=+$/, "");
            if (r.length % 4 === 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var i = 0, s, o, u = 0, a = ""; o = r.charAt(u++); ~o && (s = i % 4 ? s * 64 + o : o, i++ % 4) ? a += String.fromCharCode(255 & s >> (-2 * i & 6)) : 0) o = e.indexOf(o);
            return a
        }

        function i(e) {
            return decodeURIComponent(r(e).replace(/(.)/g, function(e, t) {
                var n = t.charCodeAt(0).toString(16).toUpperCase();
                return n.length < 2 && (n = "0" + n), "%" + n
            }))
        }
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        t.prototype = new Error, t.prototype.name = "InvalidCharacterError";
        var r = window.atob && window.atob.bind(window) || n,
            s = function(e) {
                var t = e.replace(/-/g, "+").replace(/_/g, "/");
                switch (t.length % 4) {
                    case 0:
                        break;
                    case 2:
                        t += "==";
                        break;
                    case 3:
                        t += "=";
                        break;
                    default:
                        throw "Illegal base64url string!"
                }
                try {
                    return i(t)
                } catch (n) {
                    return r(t)
                }
            };
        return function(e, t) {
            if (typeof e != "string") throw new Error("Invalid token specified");
            t = t || {};
            var n = t.header === !0 ? 0 : 1;
            return JSON.parse(s(e.split(".")[n]))
        }
    }), tp.define("jwtDecode", function() {}), tp.define("janrain", ["jq", "api", "util", "eventUtils"], function(e, t, n, r) {
        function b() {
            f.disableLogout || n.setAccessTokenListCookie(undefined, undefined, !0)
        }

        function E() {
            return janrain && janrain.capture && janrain.capture.ui && janrain.capture.ui.hasActiveSession()
        }

        function S() {
            n.log("JANRAIN:", "Processing janrain user"), w ? w = !1 : n.startCall("refreshUserToken"), n.log("JANRAIN:", "hasActiveSession:" + E());
            var e = x();
            if (!E()) {
                n.log("JANRAIN:", "No token found.  Done processing user"), b(), n.doneCall("refreshUserToken");
                return
            }
            if (s.isUserValid()) {
                n.log("JANRAIN:", "Using __ut.  Done processing user"), n.doneCall("refreshUserToken");
                return
            }
            var r = {
                janrain_capture_token: e,
                url: n.prepareUrlParameter(window.location.href)
            };
            t.callApi("/anon/janrain/verifyAccountInfo", r, function(e) {
                if (e && e.access) try {
                    n.log("JANRAIN:", "Verify success.  Done processing user"), n.setAccessTokenListCookie(e.access.access_token, e.access.user_token);
                    var t = {
                        access_token: e.access.access_token,
                        user_token: e.access.user_token
                    };
                    e.access.user && (t.user = {
                        uid: e.access.user.uid,
                        email: e.access.user.email,
                        firstName: e.access.user.first_name,
                        lastName: e.access.user.last_name,
                        valid: e.access.user.valid
                    }), v("onCaptureSessionCreated", t), i.fireCallbacks("userChanged", t, null, !0)
                } finally {
                    n.doneCall("refreshUserToken")
                } else n.log("JANRAIN:", "Verify failed")
            })
        }

        function x() {
            return e.localStorage.get("janrainCaptureToken")
        }

        function T() {
            janrain.events.onProviderLogoutComplete.addHandler(function() {
                b()
            }), janrain.events.onCaptureSessionEnded.addHandler(function(e) {
                n.log("JANRAIN: Events received for logout", e), b()
            }), N()
        }

        function N() {
            if (E()) {
                n.log("JANRAIN:", "Found early active session via function"), S();
                return
            }
            if (!E() && !s.isUserValid() && !x()) {
                n.log("JANRAIN:", "not found __ut cookie and janrain token"), S();
                return
            }
            var e = !1;
            janrain.events.onCaptureSessionFound.addHandler(function(t) {
                C() ? e && (n.log("JANRAIN: Events received for logged in user", t), S()) : S()
            }), janrain.events.onCaptureSessionNotFound.addHandler(function(t) {
                C() ? e && (n.log("JANRAIN: Events received for logged out user", t), S()) : S()
            }), janrain.events.onCaptureFederateNoLogin.addHandler(function(t) {
                e = t
            }), janrain.events.onCaptureFederateLogin.addHandler(function(e) {
                n.log("JANRAIN: Events received for SSO login", e), S()
            })
        }

        function C() {
            return janrain && janrain.settings && janrain.settings.capture && janrain.settings.capture.federate
        }

        function k(e, t) {
            function i() {
                if (u) janrain.events[e].addHandler(t);
                else {
                    if (r > n) throw "Janrain is not initialized";
                    r++, window.setTimeout(i, 100)
                }
            }
            if (!o) throw "Janrain is not configured";
            var n = 100,
                r = 0;
            i()
        }

        function L() {
            function e(e) {
                janrain.events[e].addHandler(function() {
                    n.log("JANRAIN: ", e, arguments)
                })
            }
            tp.debug && janrain.events.captureEvents.forEach(e)
        }
        var i = r.createEventManager(["userChanged", "logout"]),
            s = function() {
                var e = function() {
                        return "janrain"
                    },
                    t = function() {
                        return n.getUserTokenCookie()
                    },
                    r = function() {
                        var e = t();
                        return typeof e != "undefined" && e && e.length >= 0
                    };
                return {
                    getName: e,
                    getToken: t,
                    isUserValid: r,
                    onLoginSuccess: function(e) {
                        n.setAccessTokenListCookie({
                            value: e.token_list,
                            cookie_domain: e.cookie_domain
                        }, e.user_token)
                    }
                }
            }(),
            o = !1,
            u = !1,
            a = {
                onCaptureSessionCreated: []
            },
            f = {
                loginRequiredScreen: "signIn",
                appName: null,
                appId: null,
                clientId: null,
                settings: null,
                disableLogout: !1,
                startCapture: !1
            },
            l = {
                register: "traditionalRegistration",
                login: "signIn"
            },
            c = function(e) {
                if (o) return;
                if (!e.appName || !e.appId || !e.clientId) throw "Must specify appName, appId, and clientId to initialize janrain";
                for (var r in f) typeof e[r] != "undefined" && (f[r] = e[r]);
                e.settings && (f.settings = e.settings), e.loginRequiredScreen && (f.loginRequiredScreen = e.loginRequiredScreen);
                if (f.settings) {
                    typeof window.janrain != "object" && (window.janrain = {}), typeof window.janrain.settings != "object" && (window.janrain.settings = {}), janrain.settings = f.settings, typeof window.janrain.settings.capture != "object" && (window.janrain.settings.capture = {}), janrain.settings.appUrl = "https://" + f.appName + ".rpxnow.com", janrain.settings.capture.captureServer = "https://" + f.appName + ".janraincapture.com", janrain.settings.capture.appId = f.appId, janrain.settings.capture.clientId = f.clientId;
                    var i = f.appName.replace(/\./g, "-"),
                        u = "http://widget-cdn.rpxnow.com/load/" + i,
                        a = "https://rpxnow.com/load/" + i,
                        l;
                    n.__protected__.isHttpsProtocol() ? l = a : l = u, tp.push(["addExternalLibrary", l, function() {
                        janrain.ready = !0
                    }])
                }
                n.log("JANRAIN:", "start refresh user token"), n.startCall("refreshUserToken", 3e4), n.waitCall("refreshUserToken", function() {
                    n.log("JANRAIN:", "end refresh user token")
                }), h(), o = !0, t.setUserProvider(s), tp.zIndexes = {
                    backdrop: 900,
                    modal: 950,
                    close: 990
                };
                var c = function(e) {
                    n.log("JANRAIN: onLogin"), janrain.capture.ui.modal.close(), S()
                };
                tp.janrain.addEventHandler("onCaptureLoginSuccess", c), tp.janrain.addEventHandler("onCaptureRegistrationSuccess", c)
            },
            h = function() {
                function n() {
                    if (window.janrain && window.janrain.ready && window.janrain.capture && window.janrain.capture.ui && window.janrain.capture.ui.hasActiveSession) L(), T(), f.startCapture && janrain.capture.ui.start(), u = !0;
                    else {
                        if (t > e) throw "Janrain is not initialized";
                        t++, window.setTimeout(n, 100)
                    }
                }
                var e = 100,
                    t = 0;
                n()
            },
            p = function(e) {
                return e && l.hasOwnProperty(e.startScreen) ? l[e.startScreen] : f.loginRequiredScreen
            },
            d = function(e, t) {
                a[e] = [], a[e].push(t)
            },
            v = function(e) {
                if (typeof a[e] == "undefined" || a[e].length === 0) return;
                for (var t = 0; t < a[e].length; ++t) a[e][t].apply(null, arguments)
            },
            m = function(e, t) {
                function i() {
                    if (u) try {
                        janrain.capture.ui.renderScreen(p(t)), typeof e == "function" && d("onCaptureSessionCreated", e)
                    } catch (s) {
                        r++, window.setTimeout(i, 100);
                        return
                    } else {
                        if (r > n) throw "Janrain is not initialized";
                        r++, window.setTimeout(i, 100)
                    }
                }
                if (!o) throw "Janrain is not configured";
                var n = 100,
                    r = 0;
                i()
            },
            g = function(e) {
                function s() {
                    if (r > t) {
                        e();
                        return
                    }
                    E() ? (r++, window.setTimeout(s, 100)) : e()
                }

                function a() {
                    if (u) janrain.capture.ui.modal.close(), janrain.capture.ui.endCaptureSession(), i.fireCallbacks("logout", null, null, !0), e && s();
                    else {
                        if (n > t) throw "Janrain is not initialized";
                        n++, window.setTimeout(a, 100)
                    }
                }
                if (!o) throw "Janrain is not configured";
                var t = 100,
                    n = 0,
                    r = 0;
                b(), a()
            },
            y = function() {
                return o
            },
            w = !0;
        return {
            name: "janrain",
            init: function(e) {
                c(e)
            },
            isUserValid: function() {
                return s.isUserValid()
            },
            getToken: function() {
                return s.getToken()
            },
            getName: function() {
                return s.getName()
            },
            onLoginSuccess: function(e) {
                return s.onLoginSuccess(e)
            },
            login: function(e, t) {
                return m(e, t)
            },
            logout: function(e, t) {
                return g(t)
            },
            isConfigured: function() {
                return y()
            },
            getLoginRequiredScreen: function() {
                return p()
            },
            addEventHandler: k,
            registerCallback: function(e, t) {
                i.addEvent(e), i.registerCallback(e, t)
            }
        }
    }), tp.define("janrain", function() {}), tp.define("gigya", ["jq", "api", "util", "eventUtils"], function(e, t, n, r) {
        function y() {
            if (!s()) throw "Gigya is not initialized"
        }
        var i = !1,
            s = function() {
                return window.gigya && window.gigya.__initialized
            },
            o = r.createEventManager(["userChanged", "onHide", "logout"]),
            u = {
                apiKey: null,
                screenSet: "Default-RegistrationLogin",
                startScreen: null,
                enabledProviders: null,
                lang: null
            },
            a = function() {
                var e = function() {
                        return "gigya"
                    },
                    t = function() {
                        var e = n.getUserTokenCookie();
                        if (e) {
                            var t = n.findCookieByName("glt_" + u.apiKey),
                                r = n.findCookieByName("__utg_" + u.apiKey);
                            if (t === r) return e
                        }
                        return null
                    },
                    r = function() {
                        var e = t();
                        return typeof e != "undefined" && e && e.length >= 0
                    };
                return {
                    getName: function() {
                        return e()
                    },
                    getToken: function() {
                        return t()
                    },
                    isUserValid: function() {
                        return r()
                    },
                    onLoginSuccess: function(e) {
                        n.setAccessTokenListCookie({
                            value: e.token_list,
                            cookie_domain: e.cookie_domain
                        }, e.user_token)
                    }
                }
            }(),
            f = function(e) {
                if (i) return;
                for (var n in e) typeof e[n] != "undefined" && (u[n] = e[n]);
                if (!u.screenSet) throw "Gigya is not configured: screenSet parameter required";
                if (!u.apiKey) throw "Gigya is not configured: apiKey parameter required";
                d(), i = !0, t.setUserProvider(a), c()
            },
            l = [],
            c = function(r, s) {
                function c(r) {
                    if (r.errorCode === 0) {
                        var i = {
                            uid: r.UID,
                            signature: r.UIDSignature,
                            signature_timestamp: r.signatureTimestamp,
                            url: n.prepareUrlParameter(window.location.href)
                        };
                        n.startCall("refreshUserToken"), t.callApi("/anon/gigya/verifyAccountInfo", i, function(t) {
                            if (t && t.result) {
                                n.setAccessTokenListCookie(t.result.access_token, t.result.user_token);
                                var r = {
                                    path: "/",
                                    expires: 730
                                };
                                if (t.result.access_token) {
                                    var i = t.result.access_token.cookie_domain;
                                    i && i !== "localhost" && e.inArray(i, n.getPossibleCookieDomains()) >= 0 && (r.domain = i)
                                }
                                var s = n.findCookieByName("glt_" + u.apiKey);
                                n.__protected__.setCookie("__utg_" + u.apiKey, s, r);
                                for (var a = 0; a < l.length; a++) {
                                    var f = l[a];
                                    f && f(t.result)
                                }
                                t.result.user && (t.result.user = {
                                    uid: t.result.user.uid,
                                    email: t.result.user.email,
                                    firstName: t.result.user.first_name,
                                    lastName: t.result.user.last_name,
                                    valid: t.result.user.valid
                                }), o.fireCallbacks("userChanged", t.result, null, !0)
                            } else n.log("Can't verify gigya user: may be the configuration of gigya user provider is invalid"), n.setAccessTokenListCookie();
                            l = [], n.doneCall("refreshUserToken")
                        })
                    } else n.setAccessTokenListCookie(), l = []
                }
                if (!i) throw "Gigya is not configured";
                y();
                var a = n.findCookieByName("glt_" + u.apiKey),
                    f = n.findCookieByName("__utg_" + u.apiKey);
                if (a !== f || r) l.push(s), l.length === 1 && gigya.accounts.getAccountInfo({
                    callback: c
                })
            },
            h = function(e) {
                if (!i) throw "Gigya is not configured";
                y(), e && gigya.accounts.addEventHandlers({
                    onLogin: function() {
                        c(!0, e)
                    }
                });
                var t = {
                        screenSet: u.screenSet,
                        onHide: function() {
                            o.fireCallbacks("onHide", {
                                afterLogin: p
                            }, null, !0)
                        }
                    },
                    n = ["apiKey", "screenSet"];
                for (var r in u) {
                    var s = r in n;
                    s || (t[r] = u[r])
                }
                p = !1, gigya.accounts.showScreenSet(t)
            },
            p = !1,
            d = function() {
                y(), gigya.accounts.addEventHandlers({
                    onLogin: function() {
                        p = !0, c()
                    },
                    onLogout: function() {
                        n.setAccessTokenListCookie({
                            value: null
                        }, null, !0), o.fireCallbacks("logout", null, null, !0)
                    }
                })
            },
            v = function(e) {
                if (!e) throw "Session info is empty";
                var t = e.accessTokenName,
                    r = e.accessToken;
                n.__protected__.setCookie(t, r);
                var i = "glt_" + u.apiKey;
                n.__protected__.setCookie(i, r), c(!0)
            },
            m = function(e) {
                if (!i) throw "Gigya is not configured";
                y(), gigya.accounts.logout({
                    callback: function() {
                        o.fireCallbacks("logout", null, null, !0), e && e(), n.setAccessTokenListCookie({
                            value: null
                        }, null, !0)
                    }
                }), n.setAccessTokenListCookie({
                    value: null
                }, null, !0)
            },
            g = function() {
                return tp.useGigyaUserProvider === !0 || tp.useGigyaUserProvider === "true"
            };
        return {
            name: "gigya",
            init: function(e) {
                f(e)
            },
            isUserValid: function() {
                return a.isUserValid()
            },
            getToken: function() {
                return a.getToken()
            },
            getName: function() {
                return a.getName()
            },
            onLoginSuccess: function(e) {
                return a.onLoginSuccess(e)
            },
            login: function(e) {
                return h(e)
            },
            logout: function(e) {
                return m(e)
            },
            isConfigured: function() {
                return g()
            },
            registerCallback: function(e, t) {
                o.addEvent(e), o.registerCallback(e, t)
            },
            loginByPasswordless: function(e) {
                return v(e)
            }
        }
    }), tp.define("gigya", function() {}), tp.define("tinypassAccounts", ["jq", "api", "util", "tinypassLogin", "eventUtils"], function(e, t, n, r, i) {
        var s = i.createEventManager(["logout"]),
            o = function() {
                function i(e) {
                    n.setAccessTokenListCookie({
                        value: e.token_list,
                        cookie_domain: e.cookie_domain
                    }, e.user_token)
                }
                var e = function() {
                        return "tinypass_accounts"
                    },
                    t = function() {
                        return n.getUserTokenCookie() || null
                    },
                    r = function() {
                        return !!n.getUserTokenCookie()
                    };
                return {
                    getName: function() {
                        return e()
                    },
                    getToken: function() {
                        return t()
                    },
                    isUserValid: function() {
                        return r()
                    },
                    onLoginSuccess: i
                }
            }(),
            u = function() {
                return tp.useTinypassAccounts === !0 || tp.useTinypassAccounts === "true"
            },
            a = function(e) {
                return e = e || {}, e.userToken = o.getToken(), r.show(e)
            },
            f = function(t) {
                var r = {
                        aid: tp.aid,
                        url: document.location.href
                    },
                    i = tp.getEndpointRoot(!0) + "/checkout/user/logout?" + e.param(r, !0);
                n.setAccessTokenListCookie({
                    value: null
                }, null, !0), e.ajax({
                    url: i,
                    dataType: "jsonp"
                }).done(function(e) {
                    n.setAccessTokenListCookie({
                        value: "",
                        cookie_domain: e.models.cookie_domain
                    }, e.models.user_token, !0), s.fireCallbacks("logout", null, null, !0), t && t(e)
                }).fail(function(e) {
                    n.setAccessTokenListCookie(null, null, !0), s.fireCallbacks("logout", null, null, !0), t && t(e)
                })
            };
        return {
            name: "tinypassAccounts",
            isUserValid: function() {
                return o.isUserValid()
            },
            getToken: function(e) {
                return o.getToken(e)
            },
            getName: function() {
                return o.getName()
            },
            onLoginSuccess: function(e) {
                return o.onLoginSuccess(e)
            },
            isConfigured: function() {
                return u()
            },
            login: function(e) {
                return a(e)
            },
            logout: function(e) {
                return f(e)
            },
            registerCallback: function(e, t) {
                s.addEvent(e), s.registerCallback(e, t)
            }
        }
    }), tp.define("tinypassAccounts", function() {}), tp.define("tinypassLogin", ["jq", "util", "postmessage", "require-css/css!styles/offer", "containerUtils", "eventUtils"], function(e, t, n, r, i, s) {
        function d(e) {
            n.broadcast("reloadOffer", e)
        }

        function m(t, n) {
            var r = ["aid", "gaClientId", "tags", "contentSection", "contentAuthor"];
            e.each(r, function(e, r) {
                n[r] && (t[r] = n[r])
            });
            var i = n.contentCreated;
            return i && (t.contentCreated = i), t
        }

        function g(t) {
            var n = {},
                r = ["displayMode", "aid", "width", "height", "state"];
            return e.each(r, function(e, r) {
                t[r] && (n[r] = t[r])
            }), n
        }
        var o = null,
            u = !1,
            a = s.createEventManager(["resize", "loginSuccess", "logout"]),
            f = function() {
                return tp.getEndpointRoot(!0) + "/checkout/user/loginShow"
            },
            l = function() {
                return tp.getEndpointRoot(!0) + "/checkout/user/check"
            },
            c = function(e) {
                t.debug("Login event received", e.event, e.params, e);
                var n = i.getIframe(e.sender),
                    r = !n.config.parent;
                switch (e.event) {
                    case "loaded":
                        o = !1, u = !0;
                        break;
                    case "close":
                        i.closeModalContainer(), a.fireCallbacks(e.event, e.params, e.sender, r);
                        break;
                    case "cancel":
                    case "error":
                    case "customEvent":
                        a.fireCallbacks(e.event, e.params, e.sender, r);
                        break;
                    case "loginSuccess":
                        p(e.event, e.params, e.sender, r);
                        break;
                    case "logoutSuccess":
                        h(e.event, e.params, e.sender, r);
                        break;
                    default:
                        t.debug("Received invalid event type: " + e.event);
                        return
                }
            },
            h = function(e, n, r) {
                a.fireCallbacks("logout", null, null, !0), t.setAccessTokenListCookie({
                    value: n.token_list,
                    cookie_domain: n.cookie_domain
                }, n.user_token, !0)
            },
            p = function(e, n, r, s) {
                var o = i.getIframe(r);
                t.setAccessTokenListCookie({
                    value: n.token_list,
                    cookie_domain: n.cookie_domain
                }, n.user_token), o.config.userToken = n.user_token, o && o.config && o.config.loginSuccess && o.config.loginSuccess(n.event, n.params, n.sender), a.fireCallbacks(e, n, r, s), o && o.config && o.config.closeAfterSuccess && i.closeModalContainer(r);
                var u = {
                    reloadAfterLogin: !0,
                    userToken: n.user_token,
                    user: n.user
                };
                d(u)
            },
            v = function(e, n, r, s) {
                var o = i.getIframe(s.iframeId),
                    u = !o.config.parent;
                t.setAccessTokenListCookie({
                    value: e,
                    cookie_domain: n
                }, r), o.config.userToken = r, o && o.config && o.config.loginSuccess && o.config.loginSuccess("loginSuccess", {}, {}), a.fireCallbacks("loginSuccess", {}, {}, u)
            },
            y = null,
            b = function(n) {
                y && i.closeModalContainer(y);
                var r = {
                        closeAfterSuccess: !0
                    },
                    s = {};
                e.extend(s, r, n), s.displayMode = "popup", s.width = 360, s.height = 660, s.state = s.state ? s.state : "login";
                var o = g(s);
                o.iframeId = t.randomString(16), o.url = window.location.href, o.host_url = window.location.href, y = o.iframeId, m(o, tp), o.user_provider = "tinypass_accounts", n.userToken && (o.user_token = n.userToken), t.getCampaigns(o);
                var u;
                return s.iframeId ? (o.iframeId = s.iframeId, u = i.redirectContainer(s.iframeId, {
                    url: f(),
                    config: s,
                    postMessageUrl: f(),
                    receive: c,
                    iframeParams: o
                })) : u = i.createContainer({
                    url: f(),
                    config: s,
                    postMessageUrl: f(),
                    receive: c,
                    iframeParams: o
                }), a.registerCallback(s, o.iframeId), u
            },
            w = function(e) {
                if (o) return !1;
                o = !0, setTimeout(function() {
                    o = !1
                }, 1e4), b(e) || t.error("Could not initialize login; check configuration")
            },
            E = function(e) {
                a.registerCallback(e, e.iframeId);
                var t = {
                    iframeId: e.iframeId,
                    config: e,
                    iframeParams: e
                };
                n.init({
                    postMessageUrl: f(),
                    receive: c,
                    iframe: t,
                    iframeParams: {}
                })
            };
        return {
            name: "tinypassLogin",
            show: function(e) {
                w(e)
            },
            close: function() {
                i.closeModalContainer()
            },
            showBackdrop: function() {
                i.showBackdrop()
            },
            hideBackdrop: function() {
                i.hideBackdrop()
            },
            centerBackdrop: function(e) {
                i.centerBackdrop(e)
            },
            registerCallback: function(e, t) {
                a.registerCallback(e, t)
            },
            listenLogin: function(e) {
                E(e)
            }
        }
    }), tp.define("tinypassLogin", function() {}), tp.define("containerUtils", ["util", "jq", "postmessage", "eventUtils", "sha1"], function(e, t, n, r, i) {
        function p(e) {
            var t = document.querySelector(".tp-iframe-wrapper");
            if (e) return t.classList.contains("no-shadow") && t.classList.remove("no-shadow");
            t.classList.add("no-shadow")
        }

        function N(e) {
            var t = b(e);
            t.config.child && T(t.config.child), T(e)
        }

        function C(e) {
            var t = Array.prototype.slice.call(document.querySelectorAll(e + " > ." + f + " > iframe"));
            t.forEach(function(e) {
                e.id && N(e.id)
            })
        }

        function k(e) {
            var t = D.shift();
            L && !t && L.removeClass("tp-active"), e.iframeParams.shown = !1, e.container.removeClass("tp-active"), t ? (_.hide(), _ = t, _.show()) : j()
        }

        function I(e) {
            L && L.css({
                height: "100%"
            }), e.find(".tp-close").removeClass("tp-square")
        }

        function W(e, n) {
            var r = t(e);
            z[e] || (z[e] = 0), r.length ? (delete z[e], n(r)) : z[e] < 100 && (z[e] += 1, setTimeout(function() {
                W(e, n)
            }, 50))
        }

        function X(e, t) {
            typeof e.showCloseButton == "undefined" && (e.showCloseButton = !0);
            if (e.container) return e.container;
            var n = new w;
            return e.isPreload || (_ = n.element), n.getContainer(e.showCloseButton, t)
        }

        function V(n) {
            var r = {
                container: null,
                containerReady: !1
            };
            if (!n.iframeParams.containerSelector) return e.log("Inline offer must have a valid containerSelector"), r;
            r.container = t(n.singleContainer), r.container.empty();
            if (!r.container.length) {
                if (t.isReady) return e.log("Invalid containerSelector"), r
            } else {
                var i = n.config,
                    s = typeof i == "object" && i !== null;
                if (s) {
                    var o = !!i.preview == 1;
                    o || (n.iframeParams.width = r.container.width())
                } else n.iframeParams.width = n.iframeParams.width || r.container.width();
                r.containerReady = !0
            }
            return r
        }

        function $(t) {
            var n = t.width ? t.width : window.innerWidth,
                r = t.height ? t.height : window.innerHeight,
                i = e.centerScreen(n, r);
            return {
                width: n,
                height: r,
                top: i.top,
                left: i.left
            }
        }

        function J(t, n) {
            var r = $(t),
                i = window.open(n, e.randomString(16), "scrollbars=yes,location=yes,status=0,toolbar=0,resizable=1, width=" + r.width + ", height=" + r.height + ", top=" + r.top + ", left=" + r.left);
            return window.focus && i.focus(), i
        }

        function Q(n, r, i) {
            var s = "iframe-" + K++ + "-" + e.randomString();
            r.iframeId && (s = r.iframeId);
            var o = t(document.createElement("iframe")).attr({
                id: s,
                name: s,
                title: s,
                scrolling: "no",
                allowtransparency: "true",
                src: i
            }).css({
                overflow: "hidden",
                backgroundColor: "transparent",
                border: "0",
                width: n.displayMode === "inline" ? r.width + "px" : "0px",
                height: "0px"
            });
            try {
                o.attr("frameBorder", "0"), o.get(0).setAttribute("frameBorder", "0"), o.get(0).frameBorder = "0"
            } catch (u) {
                e.log(u)
            }
            return o
        }

        function G() {
            return t("<div>").css({
                overflow: "hidden",
                backgroundColor: "transparent",
                border: "0",
                width: "0px",
                height: "0px",
                position: "absolute",
                display: "block",
                top: "-1px",
                left: "-1px"
            })
        }

        function Y(t) {
            if (t.config.displayMode === "modal") {
                if (y()) {
                    e.log("Modal is already shown; must be one modal per time");
                    return
                }
                S(t)
            } else t.config.displayMode === "inline" ? E(t) : e.log("Unexpected displayMode of preloaded iframe\n");
            return t.config.isPreload = !1, t.iframeParams.isPreload = !1, e.debug("show preloaded iframe: ", t.config), t
        }

        function Z(r) {
            var a, l = !0,
                c = r.iframeParams;
            c.displayMode !== "inline" && !c.width && (c.width = t(window).width());
            var h = function(e) {
                var n = t.param(e, !0);
                return n + "&_qh=" + i.hash(n, 10)
            };
            if (c.displayMode === "inline") {
                r.config.showCloseButton !== undefined && delete r.config.showCloseButton;
                var p = V(r);
                a = p.container, l = p.containerReady
            } else if (c.displayMode === "modal") a = X(r.config, function() {
                T(c.iframeId, r.parent)
            });
            else if (c.displayMode === "popup") {
                c.width || (c.width = t(window).width());
                var d = r.url + "?" + h(c);
                a = J(c, d)
            }
            var v = r.url + "?" + h(c),
                m = null;
            if (c.displayMode === "popup") {
                try {
                    m = t(a.document)
                } catch (g) {
                    try {
                        m = t(a)
                    } catch (y) {
                        m = null, console.warn("Unable to get popup element")
                    }
                }
                o[c.iframeId] = {}, o[c.iframeId].container = a, o[c.iframeId].interval = setInterval(function() {
                    o[c.iframeId].container.closed && (clearInterval(o[c.iframeId].interval), o[c.iframeId].container.close(), r.onCloseCallback && r.onCloseCallback())
                }, 100)
            } else m = Q(r.config, c, v);
            u.registerCallback(r, c.iframeId);
            var b = s[c.iframeId] = {
                iframeId: c.iframeId,
                config: r.config,
                element: m,
                container: a,
                iframeParams: c,
                containerReady: l
            };
            n.init({
                postMessageUrl: r.postMessageUrl,
                parent: r.parent,
                receive: r.receive,
                iframe: b,
                iframeParams: c
            }), t(window).on("keyup", x);
            if (c.displayMode === "modal") t(window).resize(function() {
                I(a)
            }), a.append(m);
            else if (c.displayMode === "inline")
                if (s[c.iframeId].containerReady) {
                    var w = t(document.createElement("div")).addClass(f).append(m);
                    r.config.isPreload && w.hide(), (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) && a && a.length > 0 ? (a.empty(), a.append(w)) : tt(a, w)
                } else {
                    var E = t(document.createElement("div")).attr("id", "temp-inline-" + c.iframeId).hide();
                    W("body", function(e) {
                        e.append(E)
                    }), E.append(m)
                } return e.debug("creating iframe: ", r), b
        }

        function et(e, r) {
            var i = r.url + "?" + t.param(r.iframeParams, !0),
                o = s[e];
            if (o.config.displayMode === "popup") o.container.location = i;
            else {
                var u = o.element.get(0),
                    a = u.contentWindow || u;
                a.location = i
            }
            o.config = r.config, n.init({
                postMessageUrl: r.postMessageUrl,
                receive: r.receive,
                iframe: s[r.iframeParams.iframeId],
                iframeParams: r.iframeParams
            })
        }

        function tt(e, n) {
            var r = setInterval(function() {
                e.empty()
            }, 150);
            t(document).ready(function() {
                clearInterval(r), e.append(n)
            })
        }

        function nt() {
            for (var e in s) {
                var t = s[e];
                !t.config.preview && t.config.displayMode === "inline" && t.container && q(t, {
                    width: t.container.width()
                });
                if (t.config.displayMode === "modal" && t.container) {
                    var r = Math.max(document.documentElement.clientWidth, document.body.offsetWidth, document.documentElement.offsetWidth);
                    n.send("RESIZE_MODAL_CHECKOUT", {
                        iframe: t,
                        width: r
                    }, t.iframeId)
                }
            }
        }

        function rt(e, t) {
            if (!e) return;
            t.width !== undefined && (e.css({
                width: t.width + "px"
            }), e.toggleClass("no-width", t.width === 0)), t.height !== undefined && (t.animate ? e.animate({
                height: t.height + "px"
            }, 200) : e.css({
                height: t.height + "px"
            }), e.toggleClass("no-height", t.height === 0))
        }

        function it(e) {
            var t = [];
            for (var n in s) {
                var r = s[n];
                if (e && n !== e) continue;
                if (r.config.displayMode === "inline") continue;
                r.config.displayMode === "modal" && (k(r), r.container.hide(), t.push(n))
            }
            return t
        }

        function st(e) {
            if (!e || !e.length) return;
            for (var t in s) {
                var n = s[t];
                for (var r = 0; r < e.length; r++)
                    if (t === e[r]) {
                        var i = n.container;
                        B(i.parent()), i.addClass("tp-active").show()
                    }
            }
        }

        function ot(e, t) {
            if (e) {
                var n = b(t);
                n && n.config && (n.config.child = e.iframeId)
            }
        }

        function ut(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(), t.firstChild
        }

        function at() {
            if (l) return;
            l = ut('<div class="tp-please-wait tp-active tp-overlap"><div class="tp-icon tp-centered"></div></div>'), document.body.appendChild(l)
        }

        function ft() {
            if (!l) return;
            document.body.removeChild(l), l = null
        }
        var s = {},
            o = [],
            u = r.createEventManager(["close"]),
            a = "fakeOfferId",
            f = "tp-container-inner",
            l = null,
            c = {
                iOSBottomToolbarHeight: 100,
                _initialScrollPosition: {
                    x: null,
                    y: null
                },
                applyFix: function() {
                    var e = window.visualViewport ? Math.max(window.scrollY, document.documentElement.scrollTop, window.visualViewport.pageTop) : Math.max(window.scrollY, document.documentElement.scrollTop),
                        t = tp.dontScrollTopModal ? e : 0,
                        n = "100%";
                    this.saveInitialScroll(window.scrollX, e), _ && (tp.dontScrollTopModal ? (document.body.style.touchAction = "none", document.documentElement.style.touchAction = "none", this.addEvents("scroll"), this.addEvents("touchmove")) : (document.body.style.position = "fixed", document.body.style.width = "100%", document.body.style.margin = "0", n = "calc(100% - " + this.iOSBottomToolbarHeight + "px)", h(0, 0)), setTimeout(function() {
                        _.css({
                            "overscroll-behavior": "contain",
                            position: "absolute",
                            top: t + "px",
                            height: n,
                            width: "100%",
                            "overflow-x": "unset",
                            "overflow-y": "scroll"
                        })
                    }, 500))
                },
                addEvents: function(e) {
                    document.body.addEventListener(e, this.scrollRevert, {
                        passive: !1
                    }), document.addEventListener(e, this.scrollRevert, {
                        passive: !1
                    })
                },
                removeEvents: function(e) {
                    document.body.removeEventListener(e, this.scrollRevert, !1), document.removeEventListener(e, this.scrollRevert, !1)
                },
                removeFix: function() {
                    if (document.querySelectorAll(".tp-iframe-wrapper.tp-active").length) return;
                    tp.dontScrollTopModal ? (document.body.style.removeProperty("touch-action"), document.documentElement.style.removeProperty("touch-action"), this.removeEvents("scroll"), this.removeEvents("touchmove")) : (document.body.style.removeProperty("position"), document.body.style.removeProperty("width"), document.body.style.removeProperty("margin"), this._scrollBack())
                },
                _scrollBack: function() {
                    (this._initialScrollPosition.y || this._initialScrollPosition.x) && h(this._initialScrollPosition.x, this._initialScrollPosition.y)
                },
                scrollRevert: function(e) {
                    var t = e || window.event;
                    return t.preventDefault && t.preventDefault(), c._scrollBack(), !1
                },
                saveInitialScroll: function(e, t) {
                    this._initialScrollPosition.x = e, this._initialScrollPosition.y = t
                },
                modalOpened: function() {
                    this.applyFix()
                },
                modalClosed: function() {
                    this.removeFix()
                }
            },
            h = function(e, t) {
                function n(e) {
                    return /\{\s*\[native code\]\s*\}/.test("" + e)
                }
                try {
                    if (n(window.scrollTo)) {
                        window.scrollTo(e, t);
                        return
                    }
                    if (n(window.scroll)) {
                        window.scroll(e, t);
                        return
                    }
                    document.body && (document.body.scrollTop = 0)
                } catch (r) {
                    console.warn("Can not perform scroll: " + r.message)
                }
            };
        t(window).resize(function() {
            nt()
        }), n.subscribe("close", function() {
            c.modalClosed()
        }), n.subscribe("toggleIframeShadow", function(e) {
            p(e.params.isEnabled)
        }), n.subscribe("toggleLoadingContainer", function(e) {
            if (e.params.isEnabled) return at();
            ft()
        });
        var d = function(t) {
                e.debug("Removing iframe", t), t.element && (t.element.hide(), t.config.displayMode === "inline" && t.element.parent().hide()), m(t);
                if (t.config.displayMode === "modal" || t.config.displayMode === "inline") t.waitFinishProcesses = !0
            },
            v = function(r) {
                e.debug("Purging iframe", r);
                var i = s[r];
                try {
                    n.removeIframe(i.iframeId), i.element.remove(), i.config.displayMode === "inline" && t(i.container).find(".tp-container-inner").remove()
                } catch (o) {}
                delete s[r]
            },
            m = function(e) {
                n.send("checkProccessesForClose", {}, e.iframeId)
            },
            g = function(e) {
                e.config.displayMode === "popup" && e.container.close(), d(e)
            },
            y = function() {
                for (var e in s) {
                    var t = s[e];
                    if (t.config.displayMode === "modal" && !t.waitFinishProcesses && !t.config.isPreload) return !0
                }
                return !1
            },
            b = function(e) {
                return s[e]
            },
            w = function() {
                var e, n, r, i, s = function() {
                    return e ? e : (e = t(document.createElement("div")).addClass("tp-modal"), n = t(document.createElement("button")).attr("type", "button").attr("aria-label", "Close").addClass("tp-close"), r = t(document.createElement("div")).addClass("tp-iframe-wrapper"), r.append(n), e.css("z-index", tp.zIndexes.modal), n.css("z-index", tp.zIndexes.close), n.on("click", function() {
                        typeof i == "function" && i()
                    }), e.append(r), W("body", function(t) {
                        t.append(e)
                    }), e)
                };
                s(), this.element = e, this.getContainer = function(e, t) {
                    return s(), i = t, typeof e == "undefined" && (e = !0), e ? this.showCloseButton() : this.hideCloseButton(), r
                }, this.show = function(t) {
                    s(), typeof t == "undefined" && (t = !0), t ? this.showCloseButton() : this.hideCloseButton(), e.addClass("tp-active")
                }, this.hide = function() {
                    s(), e.removeClass("tp-active")
                }, this.showCloseButton = function() {
                    s(), n.addClass("tp-active")
                }, this.hideCloseButton = function() {
                    s(), n.removeClass("tp-active")
                }
            },
            E = function(e) {
                t("." + f, e.container).show(), q(e, {
                    width: e.container.width()
                })
            },
            S = function(e) {
                _ = e.container.closest(".tp-modal"), R(e, !0, !0)
            },
            x = function(n) {
                n.keyCode === 27 && t.map(s, e.mapArrayIndex).length > 0
            },
            T = function(t, n, r) {
                e.debug("Search container to close", t, n, r);
                for (var i in s) {
                    var o = s[i];
                    if (t && i !== t) continue;
                    if (r && o.config.displayMode === "inline") continue;
                    if (r && o.config.isPreload) continue;
                    g(o), o.config.displayMode === "modal" && k(o)
                }
                u.fireCallbacks("close", null, t, !0)
            },
            L, A, O = 250,
            M = function() {
                if (L) return L;
                var e = t(document.createElement("div"));
                return e.addClass("tp-backdrop"), e.css("z-index", tp.zIndexes.backdrop), W("body", function(t) {
                    t.append(e)
                }), L = e, e
            },
            _, D = [],
            P = function(t) {
                if (t.is(":visible")) return;
                W("body", function(e) {
                    e.removeClass("tp-modal-close"), e.addClass("tp-modal-open")
                }), _timer = setTimeout(function() {
                    t.show()
                }, 100), (e.isIphone() || e.isIOsUiWebView() || e.isAndroid()) && c.modalOpened()
            },
            H = function() {
                if (!_) return;
                W("body", function(e) {
                    e.addClass("tp-modal-close"), e.removeClass("tp-modal-open"), e.hasClass("body-fixed") && e.removeClass("body-fixed")
                }), _.hide()
            },
            B = function(e, n, r) {
                M();
                if (L.is(":visible")) {
                    var i = t(".tp-modal:visible");
                    n && !r ? (i && (i.hide(), D.unshift(i)), e.show()) : n && (i ? (D.push(e), _ = i) : e.show());
                    return
                }
                P(e), L.show(), A = window.setTimeout(function() {
                    L.addClass("tp-active")
                }, O)
            },
            j = function() {
                L && (H(), L.removeClass("tp-active"), L.hide(), clearTimeout(A)), c.modalClosed()
            },
            F = function(e) {
                if (!L) return;
                e.outerHeight() > t(window).height() ? L.css({
                    height: t(document).height()
                }) : L.css({
                    height: "100%"
                })
            },
            q = function(e, n) {
                if (!e) return;
                rt(e.element, n);
                var r = t.extend({}, n, {
                    animate: !1
                });
                switch (e.config.displayMode) {
                    case "modal":
                        rt(e.container, r), W("body", function(e) {
                            e.addClass("tp-modal-resizing"), setTimeout(function() {
                                e.removeClass("tp-modal-resizing")
                            }, 50)
                        });
                        break;
                    case "inline":
                        var i = t("." + f, e.container);
                        rt(i, n);
                        break;
                    default:
                        e.container.focus()
                }
            },
            R = function(e, t, n) {
                var r = e.container,
                    i = r.parent();
                !i || !i.hasClass("tp-modal") ? i = _ : _ = i, e.iframeParams = e.iframeParams || {}, e.iframeParams.shown || (e.iframeParams.shown = !0, B(i, t, n), n || (r.hasClass("tp-active") || r.addClass("tp-active"), I(r)))
            },
            U = function(e) {
                if (e) {
                    var n = t(e).find(".tp-close");
                    n && n.hasClass("tp-active") && n.removeClass("tp-active")
                }
            },
            z = {},
            K = 1;
        return {
            name: "containerUtils",
            fakeOfferId: a,
            createContainer: function(e) {
                return Z(e)
            },
            showPreloadedContainer: function(e) {
                return Y(e)
            },
            redirectContainer: function(e, t) {
                return et(e, t)
            },
            hasModalIframe: function() {
                return y()
            },
            getIframe: function(e) {
                return b(e)
            },
            generateIframe: function(e, t, n) {
                return Q(e, t, n)
            },
            generateIframeWrapper: function() {
                return G()
            },
            getPopupPosition: function(e) {
                return $(e)
            },
            generatePopup: function(e, t) {
                return J(e, t)
            },
            initInlineContainer: function(e) {
                return V(e)
            },
            getModalContainer: function(e, t) {
                return X(e, t)
            },
            centerBackdrop: function(e) {
                return F(e)
            },
            checkBackdropAndContainer: function(e, t, n) {
                R(e, t, n)
            },
            resizeIframe: function(e, t) {
                q(e, t)
            },
            centerIt: function(e) {
                I(e)
            },
            operationWithContainer: function(e, t) {
                W(e, t)
            },
            closeContainer: function(e, t) {
                T(e, t)
            },
            closeModalContainer: function(e, t) {
                T(e, t, !0)
            },
            purgeIframe: function(e, t) {
                v(e, t)
            },
            hideModalContainer: it,
            closeModal: k,
            hideCloseButton: U,
            activateContainers: st,
            showWaitPanel: at,
            hideWaitPanel: ft,
            __protected__: {
                setElementSizes: rt,
                closeInlineContainers: C,
                addChildToInlineIframe: ot,
                closeAndRemoveIframe: g
            },
            __private__: {
                mobileModalFix: c
            }
        }
    }), tp.define("containerUtils", function() {}), tp.define("eventUtils", ["jq", "util", "postmessage"], function(e, t, n) {
        var r = function(r) {
            var i = {},
                s;
            for (s = 0; s < r.length; s++) i[r[s]] = [];
            var o = {
                addEvent: function(e) {
                    i[e] === undefined && (i[e] = [])
                },
                hasIframeCallback: function(e, t) {
                    var n, r, s;
                    if (i[e] && i[e].length > 0)
                        for (s = 0, n = null, r = null; s < i[e].length; ++s) {
                            r = i[e][s];
                            if (typeof r == "object" && t === r.iframeId) return !0
                        }
                    return !1
                },
                hasCallback: function(e) {
                    return i[e] && i[e].length > 0
                },
                registerCallback: function(e, n) {
                    var r = typeof e == "string" ? e : null,
                        s = typeof e == "object" ? e : null,
                        o, u, a;
                    if (r) {
                        o = typeof n == "function" ? n : null;
                        if (i[r] === undefined) return;
                        i[r].push(o)
                    }
                    if (s) {
                        u = typeof n == "string" ? n : null;
                        for (a in i) typeof s[a] == "function" && (t.debug("Registering " + a + " callback for iframe " + u), i[a].push({
                            iframeId: u,
                            callback: s[a]
                        }))
                    }
                },
                fireCallbacks: function(e, t, n, r) {
                    o.fire(n, e, r, t)
                },
                fire: function(r, s, o, u) {
                    function d() {
                        if (o) try {
                            if (h.length > 1) return f.apply(null, h);
                            if (s === "loginRequired") {
                                var n = e.extend(!0, {}, u.term);
                                return delete u.term, f(u, r, n)
                            }
                            return f(u, r)
                        } catch (i) {
                            t.debug(i)
                        }
                    }
                    var a, f, l, c = !1,
                        h = [].slice.call(arguments);
                    h.splice(0, 3);
                    var p = u && u.resultCallbackId;
                    if (typeof i[s] == "undefined") return;
                    for (l = 0, a = null, f = null; l < i[s].length; ++l) {
                        f = i[s][l];
                        if (typeof f == "function") t.debug("firing callback for event '" + s + "'" + " from iframe(" + r + ")"), a = d(), c = !0;
                        else if (typeof f == "object") {
                            if (r !== f.iframeId) continue;
                            t.debug("firing callback for event '" + s + "'" + " from iframe(" + r + ")"), f = f.callback, a = d(), c = !0
                        }
                        p && (u.result = a, u.event = s, n.send("resultCallback", u, r))
                    }!c && p && (u.callbackNotFound = !0, u.event = s, n.send("resultCallback", u, r))
                },
                fireCallbacksAndStopOnFirstFalse: function(e) {
                    if (typeof i[e] == "undefined") return !0;
                    var n = !0;
                    for (var r = 0; r < i[e].length; r++) {
                        var s = i[e][r];
                        if (typeof s == "function") {
                            t.debug("firing callback for event '" + e + "'");
                            try {
                                var o = [].slice.call(arguments).slice(1);
                                if (s.apply(null, o) === !1) {
                                    t.debug("callback for event '" + e + "' returned false"), n = !1;
                                    break
                                }
                            } catch (u) {
                                t.debug("firing callback for event '" + e + "' failed", u)
                            }
                        }
                    }
                    return n
                }
            };
            return o
        };
        return {
            name: "eventUtils",
            createEventManager: function(e) {
                return r(e)
            }
        }
    }), tp.define("eventUtils", function() {}), tp.define("experience", ["jq", "util", "postmessage", "api", "eventUtils", "scrollDepth", "viewportExit", "idle", "interaction", "log", "pianoEsp", "swg", "fbsubscriptions", "user", "cxense"], function($, util, postmessage, api, eventUtils, scrollDepth, viewportExit, idle, interaction, log, pianoEsp, swg, fbsubscriptions, user, cxense) {
        function buildHandlers(e) {
            function n(e, t) {
                return function(n, r, i) {
                    if (e.isAction) {
                        var s = checkPreActionHandlers(n);
                        if (!s) return;
                        var o = getEventConditionsCount(n),
                            u = getConditionInPreloadCard(n);
                        (o || u) && me.__private__.addModuleToExecuted(n.eventModuleParams.moduleId, n)
                    }
                    var a = n.eventModuleParams.moduleId;
                    !me.__private__.executedHandlers[a] && a !== "N/A" && (me.__private__.executedHandlers[a] = {
                        experienceId: n.eventExecutionContext.experienceId,
                        moduleName: n.eventModuleParams.moduleName
                    }), e.fn(n, r, i), e.shouldFireCallback && _buildCallbackEventHandler(t)(n)
                }
            }
            var t = {};
            return $.each(e, function(e, r) {
                if (typeof r.fn != "function") throw new Error("Unsupported config for " + e + " handler");
                t[e] = n(r, e)
            }), t
        }

        function _init() {
            if (me.__private__.initialized || util.__protected__.isCxenseBot()) return;
            me.__private__.initialized = !0;
            var e = !0;
            if (tp.customPreChecks && tp.customPreChecks.length) {
                var t = null;
                for (var n = tp.customPreChecks.length; n--;) try {
                    t = tp.customPreChecks[n](), t !== 1 && t !== !0 && (e = !1)
                } catch (r) {}
            }
            e && _executePromise("auto")
        }

        function getExecutedNodes() {
            return me.__private__.executedNodes
        }

        function addEventToExecutedNodes(e) {
            me.__private__.executedNodes.push(e)
        }

        function clearExecutedNodes() {
            me.__private__.executedNodes = []
        }

        function getTrackingEndpoint() {
            return tp.getTrackingEndpoint() + "/api/v3"
        }

        function getComposerUrl() {
            var e;
            return util.__protected__.cameFromFbSubscriptions() ? (e = "/xbuilder/experience/executeFbia", initializeFbSubscriptions()) : e = "/xbuilder/experience/execute", tp.getExperienceEndpoint(!1) + e
        }

        function setPianoEspVisitorId(e) {
            pianoEsp.__protected__.setVisitorId(e.bid)
        }

        function sendCxensePageViewEvent(e) {
            return cxense.__protected__.sendPageViewEvent({
                browserId: e.bid,
                uid: e.uid,
                cxenseCustomerPrefix: e.cxenseCustomerPrefix,
                pageViewId: tp.main.fetchPageViewId()
            })
        }

        function isCxenseActivated() {
            return cxense.__protected__.isActivated()
        }

        function isCxenseConfiguredPollingAsync() {
            return cxense.__protected__.isConfiguredPollingAsync(!0, tp.cxenseLibAwaitingTimeout, tp.cxenseLibAwaitingRetryCount)
        }

        function getOrGenerateCxCompatibleBid() {
            return cxense.__protected__.getOrGenerateCxCompatibleBid()
        }

        function getC1XIntegrationVersion() {
            return cxense.__protected__.getC1XIntegrationVersion()
        }

        function loadCxLibIfNeeded() {
            return cxense.__protected__.loadCxLibIfNeeded()
        }

        function initBrowserId(e) {
            browserId = e.bid
        }

        function injectSwgMarkup(e) {
            swg.__protected__.injectMarkup(e)
        }

        function addSwgLibrary() {
            swg.__protected__.addLibrary()
        }

        function initSwgFlow() {
            swg.__protected__.initSwgFlow()
        }

        function initializeFbSubscriptions() {
            fbsubscriptions.__protected__.init()
        }

        function sendStatisticsExecutedNodes(e) {
            var t = me.__private__.getExecutedNodes();
            t.length && (log.__private__.logBeaconRequest(me.__private__.getTrackingEndpoint() + "/composer/logExecutionStats", {
                aid: tp.aid,
                items: JSON.stringify(t),
                execution_stats_context: me.__private__.lastExecutionStatsContext,
                ts: (new Date).getTime(),
                source: e
            }), me.__private__.clearExecutedNodes()), window.clearTimeout(sendStatisticsTimerId), sendStatisticsTimerId = window.setTimeout(function() {
                me.__protected__.sendStatisticsExecutedNodes("timer" + sendStatisticsTimerId)
            }, statisticsRequestInterval)
        }

        function _executePromise(e, t, n) {
            var r = 3e4,
                i = $.Deferred();
            return setTimeout(function() {
                i.resolve({})
            }, r), util.__protected__.racePromise([tp.main.__protected__.externalResourcesDelay(), i.promise()]).then(function(r) {
                $.isPlainObject(r) || (util.error("exp: error get external resources ", r), r = {});
                if (me.__private__.isCxenseActivated()) {
                    var i = me.__private__.getC1XIntegrationVersion();
                    util.debug("c1x: integration is activated"), i === "v2" ? (util.debug("c1x: v2"), me.__private__.loadCxLibIfNeeded(), _execute(e, $.extend(!0, t, r, {
                        c1x_integration_version: i,
                        new_bid: me.__private__.getOrGenerateCxCompatibleBid()
                    }), n)) : (util.debug("c1x: v1, awaiting until cx.js will be available"), $.when(me.__private__.isCxenseConfiguredPollingAsync()).then(function() {
                        var s = window.cX.getPageContext();
                        util.debug("c1x: getting userId and pageViewRandom using cX.getPageContext()", s), _execute(e, $.extend(!0, t, r, {
                            c1x_integration_version: i,
                            cxense_pageview_id: s.pageViewRandom,
                            cxense_user_id: s.userId
                        }), n)
                    }, function(i) {
                        util.debug(i), util.debug("Composer execution will be proceed normally."), _execute(e, $.extend(!0, t, r), n)
                    }))
                } else _execute(e, $.extend(!0, t, r), n)
            })
        }

        function _execute(e, t, n) {
            t = t || {};
            var r = $.extend(!0, {
                protocol_version: 1
            }, t);
            _applyCookieParameters(r), util.hasQueryParamByName(me.__private__.READER_ID) && (r[me.__private__.READER_ID] = util.getQueryParamByName(me.__private__.READER_ID)), util.waitCall("refreshUserToken", function() {
                if (!n) {
                    tp.main.__protected__.trackPageUnloadIfNecessary(), _applyTpConfigurationParameters(r), api.getCallParams(r);
                    var t = {
                        url: window.location.href,
                        tags: tp.tags,
                        submitType: e
                    };
                    tp.main.buildPageTrackParams(r, t)
                } else r.executed_nodes = JSON.stringify(me.__private__.executedHandlers);
                util.debug("exp: Experience initialized with params:", r), util.waitCall("refreshAccessTokenList", function() {
                    util.startCall("experienceExecute");
                    var e = getComposerUrl(),
                        t = navigator.appVersion.indexOf("MSIE 9") !== -1,
                        i;
                    if (t) i = {
                        dataType: "jsonp",
                        url: e + "?" + $.param(r, !0)
                    };
                    else {
                        var s = "?" + $.param({
                            aid: r.aid
                        }, !0);
                        i = {
                            type: "post",
                            url: e + s,
                            data: r,
                            xhrFields: {
                                withCredentials: !0
                            }
                        }
                    }
                    i.success = function(e) {
                        util.doneCall("experienceExecute");
                        var t = $.extend(!0, {}, r);
                        n || (me.__private__.resetExperienceState(), tp.main.registerTrackUnload()), processErrors(e.errors), processResult(e.models, t)
                    }, i.error = function() {
                        util.doneCall("experienceExecute"), n || me.__private__.resetExperienceState();
                        var t = {
                            code: 503,
                            message: "Error: Received error when requesting API response from URL: " + e
                        };
                        util.debug(t.message)
                    }, $.ajax(i)
                })
            })
        }

        function _applyCookieParameters(e) {
            var t = util.__protected__.getCookie(XB_COOKIE);
            t && (e.xbc = t);
            var n = util.getTbcCookie();
            n && n.length > 0 && (e.tbc = n), util.getCampaigns(e), e.custom_cookies = JSON.stringify(util.getCustomCookies())
        }

        function _applyTpConfigurationParameters(e) {
            var t = [{
                property: "debug",
                parameter: "debug"
            }, {
                property: "trackPageView",
                parameter: "increment_pageview_meter"
            }];
            return $.each(t, function(t, n) {
                tp[n.property] !== undefined && (e[n.parameter] = tp[n.property])
            }), e
        }

        function processErrors(e) {
            Array.isArray(e) && (e.length && util.debug("exp: composer execution has been failed with errors"), $.each(e, function(e, t) {
                util.debug("exp: " + t.msg)
            }))
        }

        function addModuleToExecuted(e, t) {
            me.__private__.addEventToExecutedNodes({
                mId: e,
                eId: t.eventExecutionContext.experienceId,
                eV: t.eventExecutionContext.experienceVersion,
                eeId: t.eventExecutionContext.executionId
            })
        }

        function createLinkedNodeHandler(e, t, n, r) {
            return function() {
                return {
                    type: linkedNodeTypes.HANDLER,
                    eventType: t.eventType,
                    children: [],
                    run: function() {
                        $.proxy(e, this, t, n, r)()
                    }
                }
            }()
        }

        function getConditionInPreloadCard(e) {
            var t = e.eventParams.delayBy || {},
                n;
            return t.value && (t.type === "time" ? n = {
                type: "timer",
                timer: t.value
            } : t.type === "scroll" && (n = {
                type: "scrollDepth",
                scrollDepth: t.value,
                measureType: "pixels"
            })), n
        }

        function getEventConditionsCount(e) {
            return e.eventConditions && $.isArray(e.eventConditions) ? e.eventConditions.length : 0
        }

        function createLinkedNodeForPreloadHandler(e, t) {
            return function() {
                var n = !1,
                    r;
                return {
                    type: linkedNodeTypes.PRELOAD,
                    eventType: t.eventType,
                    children: [],
                    run: function() {
                        n === !1 && (r = e(t), n = !0)
                    },
                    getPreloadResult: function() {
                        return r
                    }
                }
            }()
        }

        function subscribeToEventListener(e, t) {
            var n = function() {
                return eventManager.fireCallbacksAndStopOnFirstFalse("beforeBrowserEvent", e)
            };
            switch (e.type) {
                case "viewportExit":
                    viewportExit.addListener(t, {
                        detectExitMode: e.detectExitMode,
                        detectBackButtonForMobile: e.detectBackButtonForMobile,
                        clientDevice: e.clientDevice
                    }, n);
                    break;
                case "scrollDepth":
                    scrollDepth.addListener(t, {
                        scrollDepth: e.scrollDepth,
                        measureType: e.measureType
                    }, n);
                    break;
                case "timer":
                    var r = setTimeout(function() {
                        n() && t()
                    }, 1e3 * e.timer);
                    timers.push(r);
                    break;
                case "interaction":
                    interaction.bind(t, e.interactions, n);
                    break;
                case "idle":
                    idle.addListener(t, e.idleTime, n)
            }
        }

        function canUseNodeInLoop(e) {
            var t = ["continueExecution", "meterActive", "meterExpired"];
            return e.type === linkedNodeTypes.HANDLER && t.indexOf(e.eventType) === -1
        }

        function createLinkedNodeEventCondition(e, t) {
            return function() {
                var n = !1,
                    r = function() {
                        me.__private__.addModuleToExecuted(e.moduleId, t);
                        var r = me.__private__.linkedNodes[e.moduleId].children;
                        for (var i = 0; i < r.length; i++) {
                            var s = r[i],
                                o = me.__private__.linkedNodes[s];
                            if (n === !1 || canUseNodeInLoop(o)) try {
                                o.run()
                            } catch (u) {
                                util.error("exp: error execute chain event", o, u)
                            }
                        }
                        n = !0, me.__private__.smallExpereinceMode && me.__protected__.sendStatisticsExecutedNodes("chain")
                    };
                return {
                    type: linkedNodeTypes.EVENT_CONDITION,
                    children: [],
                    run: function() {
                        me.__private__.subscribeToEventListener(e, r)
                    }
                }
            }()
        }

        function createLinkedNodeForInnerEventCondition(e, t) {
            return function() {
                var n = !1,
                    r = function() {
                        var e = me.__private__.linkedNodes[t + linkedNodeTypes.INNER_EVENT_CONDITION].children;
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r],
                                s = me.__private__.linkedNodes[i];
                            if (n === !1 || canUseNodeInLoop(s)) try {
                                s.run()
                            } catch (o) {
                                util.error("exp: error execute chain event", s, o)
                            }
                        }
                        n = !0
                    };
                return {
                    type: linkedNodeTypes.INNER_EVENT_CONDITION,
                    children: [t],
                    run: function() {
                        me.__private__.subscribeToEventListener(e, r)
                    }
                }
            }()
        }

        function initSwgIfNeeded(e) {
            e.swgMarkupData && (util.debug("exp: swg markup data :", e.swgMarkupData), me.__private__.injectSwgMarkup(e.swgMarkupData), e.swgMarkupData.isAccessibleForFree || me.__private__.addSwgLibrary()), e.swgEnabled && me.__private__.initSwgFlow()
        }

        function processResult(e, t) {
            if (!e) return;
            util.setTbcCookieFromResponse(e), util.setAppTimezoneOffsetFromResponse(e), util.setCurrentDomainFromResponse(e), me.__private__.setPianoEspVisitorId(e), me.__private__.sendCxensePageViewEvent(e), me.__private__.initBrowserId(e);
            if (e.xbc && e.xbc.cookie_value) {
                var n = {
                    path: "/",
                    expires: 730
                };
                e.xbc.cookie_domain && e.xbc.cookie_domain !== "localhost" && (n.domain = e.xbc.cookie_domain, util.__protected__.deleteTLDCookieForSpecificDomains(XB_COOKIE, e.xbc.cookie_domain)), util.deleteCookie(XB_COOKIE), util.__protected__.setCookie(XB_COOKIE, e.xbc.cookie_value, n)
            }
            var r = e.result,
                i = {};
            if (!r) {
                util.debug("exp: no composer execution result");
                return
            }
            initSwgIfNeeded(r), util.debug("exp: processed experiences :", r.experiences), me.__private__.lastExecutionStatsContext = e.executionStatsContext, $.each(r.debugMessages, function(e, t) {
                util.debug("exp: execute :", t)
            });
            var s = function(e, t, n) {
                    var r = e.eventConditions;
                    for (var i = 0; i < r.length; i++) {
                        var s = r[i],
                            o = s.moduleId,
                            u = r[i - 1],
                            a = !r[i + 1];
                        me.__private__.linkedNodes[o] || (me.__private__.linkedNodes[o] = me.__private__.createLinkedNodeEventCondition(s, e));
                        if (a) {
                            me.__private__.linkedNodes[o].children.push(t);
                            var f = eventTypesWithPreload.indexOf(e.eventType) !== -1;
                            if (f && s.type === "viewportExit" && !getConditionInPreloadCard(e)) {
                                var l = me.__private__.preloadHandlers[e.eventType];
                                if (!l) {
                                    util.error("exp: not found preload handler for event: ", e);
                                    continue
                                }
                                var c = t + linkedNodeTypes.PRELOAD;
                                me.__private__.linkedNodes[c] = createLinkedNodeForPreloadHandler(l, e), u ? me.__private__.linkedNodes[u.moduleId].children.push(c) : n.push(c)
                            }
                        }
                        u && me.__private__.linkedNodes[u.moduleId].children.indexOf(o) === -1 && me.__private__.linkedNodes[u.moduleId].children.push(o)
                    }
                },
                o = [],
                u, a = 0;
            for (var f = 0; f < r.events.length; f++) {
                var l = r.events[f];
                try {
                    var c = l.eventType,
                        h = l.eventModuleParams || {};
                    util.debug("exp: process event '" + c + "'" + " (" + h.moduleId + ")"), c === "experienceExecute" && ($.extend(!0, i, l.eventExecutionContext), i.result = {}, $.extend(!0, i.result, r)), u = h.moduleId;
                    if (!u) {
                        util.error("exp: not found moduleId for linked node event: ", l);
                        continue
                    }
                    var p = me.__private__.handlers[c];
                    if (!p) {
                        util.error("exp: not found handler for event: ", l);
                        continue
                    }
                    me.__private__.linkedNodes[u] = createLinkedNodeHandler(p, l, t, r);
                    var d = getEventConditionsCount(l),
                        v = getConditionInPreloadCard(l);
                    if (d || v) {
                        var m = u;
                        if (v) {
                            var g = createLinkedNodeForInnerEventCondition(v, u);
                            m = u + linkedNodeTypes.INNER_EVENT_CONDITION, me.__private__.linkedNodes[m] = g
                        }
                        d ? o.indexOf(l.eventConditions[0].moduleId) === -1 && o.push(l.eventConditions[0].moduleId) : v && o.push(m), s(l, m, o), a++
                    } else o.push(u)
                } catch (y) {
                    util.error("exp: error on execute event: ", l, y)
                }
            }
            a <= 3 && (me.__private__.smallExpereinceMode = !0);
            for (var b = 0; b < o.length; b++) u = o[b], me.__private__.linkedNodes[u] && me.__private__.linkedNodes[u].run();
            window.clearTimeout(sendStatisticsTimerId), sendStatisticsTimerId = window.setTimeout(function() {
                me.__protected__.sendStatisticsExecutedNodes("rootTimer" + sendStatisticsTimerId)
            }, statisticsRequestInterval), _lastExecutionResult = i
        }

        function _dumpElementWithChildren(e) {
            var t = me.__private__.linkedNodes[e.moduleId];
            e.type = t.type;
            for (var n = 0; n < t.children.length; n++) e.children.push(_dumpElementWithChildren({
                moduleId: t.children[n],
                children: []
            }));
            return e
        }

        function _dumpRootEventConditions(e) {
            var t = [];
            for (var n = 0; n < e.length; n++) t.push(_dumpElementWithChildren({
                moduleId: e[n],
                children: []
            }));
            util.debug("exp: root event conditions ", t)
        }

        function _setCookieHandler(e) {
            var t = e.eventParams;
            if (t && typeof t.cookieName != "undefined" && typeof t.cookieValue != "undefined") {
                util.debug("exp: set cookie with parameters:", t);
                var n = (t.isReadableCookie ? "_pc_" : "") + t.cookieName,
                    r = {
                        domain: t.cookieDomain,
                        path: t.cookiePath
                    };
                if (!t.isSessionCookie) {
                    var i = new Date;
                    switch (t.expirationUnit) {
                        case "seconds":
                            i.setSeconds(i.getSeconds() + t.expirationValue);
                            break;
                        case "minutes":
                            i.setMinutes(i.getMinutes() + t.expirationValue);
                            break;
                        case "hours":
                            i.setHours(i.getHours() + t.expirationValue);
                            break;
                        case "days":
                            i.setDate(i.getDate() + t.expirationValue);
                            break;
                        case "months":
                            i.setMonth(i.getMonth() + t.expirationValue);
                            break;
                        case "years":
                            i.setFullYear(i.getFullYear() + t.expirationValue);
                            break;
                        default:
                            util.log("Wrong eventParams.expirationUnit : ", t.expirationUnit)
                    }
                    r.expires = i
                }
                util.__protected__.setCookie(n, t.cookieValue, r)
            }
        }

        function _runJsHandler(e) {
            if (e.eventParams && e.eventParams.snippet) {
                var t = e.eventParams.snippet;
                util.debug("exp: run js with snippet:", t);
                var n = e.eventExecutionContext;
                util.debug("exp: set publisher's context and custom:", n);
                var r = "var context = " + JSON.stringify(n) + ";\n" + "var custom = " + JSON.stringify(tp.customVariables) + ";\n" + t;
                _runScript(r)
            }
        }

        function _nonSiteHandler(e) {
            util.debug("exp: non-site action:", e)
        }

        function _logHandler(e) {
            me.__private__.addModuleToExecuted(e.eventModuleParams.moduleId, e)
        }

        function _logIfAfterConditionsHandler(e) {
            var t = getEventConditionsCount(e);
            t && me.__private__.addModuleToExecuted(e.eventModuleParams.moduleId, e)
        }

        function _continueExecutionHandler(e, t) {
            util.debug("exp: continue execution action:", e, "with requestParameters", t);
            var n = t || {};
            n.experience_id = e.eventExecutionContext.experienceId, n.experience_version = e.eventExecutionContext.experienceVersion, n.context_data = e.eventParams.contextData, _executePromise("auto", n, !0)
        }

        function _runScript(snippet) {
            try {
                eval.call(window, "(function () {" + snippet + "\n})();")
            } catch (e) {
                util.log("Error occurred in RunJS\n", e)
            }
        }

        function _applyCssHandler(e) {
            $.each(e.eventParams.ruleList, function(e, t) {
                var n = t.classes;
                n && (n = n.replace(/[,.]/g, " "), t.type === "add" && $(t.elements).addClass(n), t.type === "remove" && $(t.elements).removeClass(n)), util.debug("exp: css applied with rule:", t)
            })
        }

        function _showHandler(e, t) {
            var n = me.__private__.linkedNodes[e.eventModuleParams.moduleId + linkedNodeTypes.PRELOAD];
            return n && n.getPreloadResult ? n.getPreloadResult().show() : me.__private__.show(e, t)
        }

        function _showOfferHandler(e) {
            return _showHandler(e, tp.offer.show)
        }

        function _showTemplateHandler(e) {
            return _showHandler(e, tp.template.show)
        }

        function _showNewsletterSignupHandler(e) {
            return _showHandler(e, pianoEsp.__protected__.showNewsletterSignup)
        }

        function _showLoginHandler() {
            user.showLogin({})
        }

        function _deferredShowHandler(e, t) {
            return util.debug("exp: run preloading for:", e), me.__private__.show(e, t)
        }

        function _deferredShowOfferHandler(e) {
            return _deferredShowHandler(e, tp.offer.deferredShow)
        }

        function _deferredShowTemplateHandler(e) {
            return _deferredShowHandler(e, tp.template.deferredShow)
        }

        function resetExperienceState() {
            me.__protected__.sendStatisticsExecutedNodes("reset"), me.__private__.removeEventListeners(), me.__private__.linkedNodes = {}, me.__private__.executedHandlers = {}
        }

        function removeEventListeners() {
            $.each(timers, function(e, t) {
                clearTimeout(t)
            }), timers = [], viewportExit.removeListeners(), idle.removeListeners(), scrollDepth.removeListeners(), interaction.unbindAll()
        }

        function show(e, t) {
            var n = $.extend(!0, {}, e.eventParams),
                r = e.eventExecutionContext.splitTests,
                i = e.eventExecutionContext.activeMeters,
                s = e.eventParams.formNameByTermId,
                o = e.eventParams.hideCompletedFields;
            n.trackingId = e.eventExecutionContext.trackingId, n.experienceId = e.eventExecutionContext.experienceId, n.experienceExecutionId = e.eventExecutionContext.executionId, n.experienceActionId = e.eventModuleParams.moduleId, n.experienceConditions = e.eventConditions, n.browserId = browserId;
            if (r && r.length > 0) {
                var u = $.map(r, function(e) {
                    return e.variantId
                });
                n.splitTestIds = JSON.stringify(u)
            }
            n.additionalParamNames = [], i && i.length > 0 && (n.activeMeters = JSON.stringify(i));
            if (e.eventType === "showZuoraOffer") {
                var a = e.eventParams.ratePlanIds;
                a && a.length > 0 && (n.zuoraSelectedRatePlanIds = JSON.stringify(a), n.additionalParamNames.push("zuoraSelectedRatePlanIds"))
            }
            if (e.eventType === "showNewscycleOffer") {
                var f = e.eventParams.ids;
                f && f.length > 0 && (n.newscycleSelectedIds = JSON.stringify(f), n.additionalParamNames.push("newscycleSelectedIds"))
            }
            if (e.eventType === "showNewsletterSignup") {
                var l = e.eventParams.mailingListIds,
                    c = e.eventParams.siteId;
                l && l.length > 0 && (n.mailingListIds = JSON.stringify(l), n.siteId = c, n.additionalParamNames.push("mailingListIds", "siteId"))
            }
            return e.eventType === "showRecommendations" && (n.widgetId = e.eventParams.widgetId, n.placeholder = e.eventParams.placeholder), s && (n.formNameByTermId = JSON.stringify(s), n.hideCompletedFields = o), util.debug("exp: show with params:", n), t(n)
        }

        function _showRecommendationsHandler(e) {
            return _showHandler(e, _getShowRecommendationHandler(e.eventParams.type))
        }

        function _getShowRecommendationHandler(e) {
            var t = {
                ESP: pianoEsp.__protected__.showRecommendation,
                CXENSE: cxense.__protected__.showRecommendation
            };
            return t[e] || buildEmptyHandler()
        }

        function _showFormHandler(e) {
            var t = e.eventParams;
            if (t && t.formName) {
                var n = {
                    formName: t.formName,
                    hideIfComplete: t.hideCompletedFields,
                    trackingId: e.eventExecutionContext.trackingId,
                    displayMode: t.displayMode,
                    containerSelector: t.containerSelector,
                    showCloseButton: t.showCloseButton,
                    accessToken: user.getProvider().getToken()
                };
                t.formWidth && t.formWidth.enabled && (n = $.extend(!0, {
                    width: t.formWidth.width
                }, n)), util.debug("exp: show form with params:", t), tp.pianoId.showForm(n)
            }
        }

        function _experienceExecuteHandler(e, t, n) {
            var r = e.eventParams;
            r.result = n
        }

        function _buildCallbackEventHandler(e) {
            return function(t) {
                var n = t.eventParams.callback,
                    r = t.eventParams,
                    i = t.eventModuleParams,
                    s = t.eventExecutionContext;
                util.debug("exp: fire event ", e, " with eventParams:", r, ", moduleParams:", i, ", context:", s), eventManager.fire("experience", e, !0, r, i, s), n && e !== n && (util.debug("exp: execute event ", e, " with callback: ", n), _runScript(n))
            }
        }

        function buildEmptyHandler() {
            return function() {}
        }

        function checkPreActionHandlers(e) {
            var t = e.eventParams,
                n = e.eventModuleParams,
                r = e.eventExecutionContext;
            return util.debug("exp: fire event 'beforeComposerAction' with eventParams:", t, ", moduleParams:", n, ", context:", r), eventManager.fireCallbacksAndStopOnFirstFalse("beforeComposerAction", t, n, r)
        }
        var me = {
            __private__: {},
            __protected__: {}
        };
        me.name = "experience", me.execute = function(e) {
            _executePromise("manual", e, !1)
        }, me.init = _init, me.registerCallback = function(e, t) {
            eventManager.addEvent(e), eventManager.registerCallback(e, t)
        }, me._getLastExecutionResult = function() {
            return _lastExecutionResult
        }, me.__private__.handlers = [], me.__private__.preloadHandlers = [], me.__private__.executedNodes = [], me.__private__.linkedNodes = {}, me.__private__.lastExecutionStatsContext = "", me.__private__.smallExpereinceMode = !1, me.__private__.processResult = processResult, me.__private__.processErrors = processErrors, me.__private__.createLinkedNodeHandler = createLinkedNodeHandler, me.__private__.createLinkedNodeEventCondition = createLinkedNodeEventCondition, me.__private__._applyCssHandler = _applyCssHandler, me.__private__._runJsHandler = _runJsHandler, me.__private__._setCookieHandler = _setCookieHandler, me.__private__._nonSiteHandler = _nonSiteHandler, me.__private__._logHandler = _logHandler, me.__private__._continueExecutionHandler = _continueExecutionHandler, me.__private__._experienceExecuteHandler = _experienceExecuteHandler, me.__private__._buildCallbackEventHandler = _buildCallbackEventHandler, me.__private__.show = show, me.__private__.removeEventListeners = removeEventListeners, me.__private__.resetExperienceState = resetExperienceState, me.__private__.subscribeToEventListener = subscribeToEventListener, me.__private__.checkPreActionHandlers = checkPreActionHandlers, me.__private__.getExecutedNodes = getExecutedNodes, me.__private__.addEventToExecutedNodes = addEventToExecutedNodes, me.__private__.clearExecutedNodes = clearExecutedNodes, me.__private__.addModuleToExecuted = addModuleToExecuted, me.__private__.getTrackingEndpoint = getTrackingEndpoint, me.__private__.setPianoEspVisitorId = setPianoEspVisitorId, me.__private__.sendCxensePageViewEvent = sendCxensePageViewEvent, me.__private__.isCxenseActivated = isCxenseActivated, me.__private__.isCxenseConfiguredPollingAsync = isCxenseConfiguredPollingAsync, me.__private__.getOrGenerateCxCompatibleBid = getOrGenerateCxCompatibleBid, me.__private__.getC1XIntegrationVersion = getC1XIntegrationVersion, me.__private__.loadCxLibIfNeeded = loadCxLibIfNeeded, me.__private__.initBrowserId = initBrowserId, me.__private__.injectSwgMarkup = injectSwgMarkup, me.__private__.addSwgLibrary = addSwgLibrary, me.__private__.initSwgFlow = initSwgFlow, me.__protected__.sendStatisticsExecutedNodes = sendStatisticsExecutedNodes, me.__private__.READER_ID = "reader_id", me.__private__.initialized = !1, me.__private__.executedHandlers = {};
        var XB_COOKIE = "xbc",
            _lastExecutionResult = {},
            browserId = "",
            timers = [],
            linkedNodeTypes = {
                HANDLER: "handler",
                EVENT_CONDITION: "eventCondition",
                INNER_EVENT_CONDITION: "innerEventCondition",
                PRELOAD: "preload"
            },
            eventManager = eventUtils.createEventManager([]);
        me.__private__.handlers = buildHandlers({
            applyCss: {
                fn: _applyCssHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            runJs: {
                fn: _runJsHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            setCookie: {
                fn: _setCookieHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            nonSite: {
                fn: _nonSiteHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            showForm: {
                fn: _showFormHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            showRecommendations: {
                fn: _showRecommendationsHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            showOffer: {
                fn: _showOfferHandler,
                isAction: !0,
                shouldFireCallback: !1
            },
            showTemplate: {
                fn: _showTemplateHandler,
                isAction: !0,
                shouldFireCallback: !1
            },
            showZuoraOffer: {
                fn: _showTemplateHandler,
                isAction: !0,
                shouldFireCallback: !1
            },
            showNewscycleOffer: {
                fn: _showTemplateHandler,
                isAction: !0,
                shouldFireCallback: !1
            },
            showNewsletterSignup: {
                fn: _showNewsletterSignupHandler,
                isAction: !0,
                shouldFireCallback: !1
            },
            showLogin: {
                fn: _showLoginHandler,
                isAction: !0,
                shouldFireCallback: !0
            },
            continueExecution: {
                fn: _continueExecutionHandler,
                shouldFireCallback: !0
            },
            continueExecutionCompleted: {
                fn: buildEmptyHandler,
                shouldFireCallback: !0
            },
            meterActive: {
                fn: buildEmptyHandler,
                shouldFireCallback: !0
            },
            meterExpired: {
                fn: buildEmptyHandler,
                shouldFireCallback: !0
            },
            userSegmentTrue: {
                fn: _logIfAfterConditionsHandler,
                shouldFireCallback: !0
            },
            userSegmentFalse: {
                fn: _logIfAfterConditionsHandler,
                shouldFireCallback: !0
            },
            experienceExecutionFailed: {
                fn: buildEmptyHandler,
                shouldFireCallback: !0
            },
            log: {
                fn: _logHandler,
                shouldFireCallback: !1
            },
            experienceExecute: {
                fn: _experienceExecuteHandler,
                shouldFireCallback: !0
            }
        });
        var eventTypesWithPreload = ["showOffer", "showZuoraOffer", "showNewscycleOffer", "showTemplate"];
        me.__private__.preloadHandlers = {
            showOffer: _deferredShowOfferHandler,
            showTemplate: _deferredShowTemplateHandler,
            showZuoraOffer: _deferredShowTemplateHandler,
            showNewscycleOffer: _deferredShowTemplateHandler
        };
        var statisticsRequestInterval = 2e3,
            sendStatisticsTimerId;
        return me
    }), tp.define("experience", function() {}), tp.define("activetimer", ["ifvisible", "jq"], function(e, t) {
        function a() {
            b();
            var e = r[r.length - 1];
            if (e !== undefined && e.stopTime === undefined) return;
            r.push({
                startTime: new Date,
                startMinute: n,
                stopTime: undefined
            })
        }

        function f() {
            if (r.length === 0) return;
            if (o) return;
            if (m()) {
                y();
                return
            }
            var e = r[r.length - 1];
            e.stopTime === undefined && (e.stopTime = new Date, e.stopMinute = n)
        }

        function l() {
            var e = 0;
            for (var t = 0; t < r.length; t++) {
                var i = r[t].startTime,
                    s = r[t].stopTime,
                    o = r[t].startMinute,
                    u = r[t].stopMinute;
                s === undefined && (s = new Date, u = n), e += h(s, i, u, o)
            }
            return Math.floor(e / 1e3)
        }

        function c() {
            var e = 0,
                t = r[0];
            if (t !== undefined) {
                var i = t.startTime,
                    s = t.startMinute,
                    o = new Date,
                    u = n;
                e = h(o, i, u, s)
            }
            return Math.floor(e / 1e3)
        }

        function h(e, t, n, r) {
            var i = 10,
                s = Math.abs(e.getTime() - t.getTime()),
                o = n - r;
            return s > (o + i) * 6e4 && (s = o * 6e4), s
        }

        function p(t) {
            var n = parseFloat(t);
            if (isNaN(n) !== !1) throw {
                name: "InvalidDurationException",
                message: "An invalid duration time (" + t + ") was provided."
            };
            e.setIdleDuration(n), i = n
        }

        function d() {
            r = [], a()
        }

        function v() {
            e.on("blur", function() {
                o = !1, f()
            }), e.on("focus", function() {
                o = !0, a()
            }), e.on("idle", function() {
                i > 0 && (o = !1, f())
            }), e.on("wakeup", function() {
                i > 0 && (o = !0, a())
            })
        }

        function m() {
            return u = t("video,audio").filter(function() {
                return !this.paused
            }), !!u.length
        }

        function g() {
            setTimeout(f, s * 1e3)
        }

        function y() {
            if (!u) return;
            u.each(function() {
                this.addEventListener("pause", g)
            })
        }

        function b() {
            if (!u) return;
            u.each(function() {
                this.removeEventListener("pause", g)
            })
        }

        function w(e) {
            e && p(e), v(), a(), setInterval(function() {
                n++
            }, 6e4)
        }
        var n = 0,
            r = [],
            i = 60,
            s = 15,
            o = !0,
            u;
        return {
            name: "activetimer",
            setIdleDurationInSeconds: p,
            getActiveTimeInSeconds: l,
            getTotalTimeInSeconds: c,
            resetRecordedTime: d,
            startTimer: a,
            stopTimer: f,
            initialize: w
        }
    }), tp.define("scrollDepth", ["jq"], function(e) {
        function s(s) {
            var o = document,
                u = e(document),
                a = e(window);
            s && s > 0 && (r = s || r),
                function f() {
                    var e = o.body || {},
                        s = o.documentElement || {},
                        l = Math.max(e.scrollHeight, s.scrollHeight, e.offsetHeight, s.offsetHeight, e.clientHeight, s.clientHeight);
                    l > t && (t = l);
                    var c = u.scrollTop() + a.height();
                    c > n && (n = c, n > t && (t = n)), i && clearTimeout(i), i = setTimeout(f, r)
                }()
        }

        function o() {
            return n
        }

        function u() {
            return t
        }

        function a(e, t, n) {
            typeof n != "function" && (n = function() {
                return !0
            }), h.push({
                callback: e,
                position: t.scrollDepth,
                measureType: t.measureType,
                repeat: "once",
                consumeEventFn: n
            }), p(), m()
        }

        function f() {
            c = 0
        }

        function l() {
            h = []
        }

        function p() {
            var t = e(window).scrollTop();
            t > c && (c = t)
        }

        function d() {
            p(), m()
        }

        function v(n) {
            if (!n.consumeEventFn()) return;
            if (n.measureType === "pixels") return n.position <= c;
            if (n.measureType === "percentage") return c / (t - e(window).height()) >= n.position / 100
        }

        function m() {
            var e = [],
                t = [],
                n;
            for (var r = 0; r < h.length; r++) n = h[r], v(n) ? e.push(n) : t.push(n);
            h = t;
            for (var r = 0; r < e.length; r++) e[r].callback()
        }
        var t = 0,
            n = 0,
            r = 200,
            i, c = 0,
            h = [];
        return e(window).scroll(d), {
            name: "scrollDepth",
            initialize: s,
            getMaxScrollDepth: o,
            getMaxDocumentHeight: u,
            addListener: a,
            removeListeners: l,
            clearMaxScrolledPosition: f
        }
    }), tp.define("ifvisible", [], function() {
        var e, t, n, r, i, s, o, u, a, f, l, c, h, p;
        return a = {}, n = document, l = !1, c = "active", o = 6e4, s = !1, t = function() {
            var e, t, n, r, i, s, o;
            return e = function() {
                return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
            }, i = function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }, s = {}, n = "__ceGUID", t = function(e, t, r) {
                return e[n] = undefined, e[n] || (e[n] = "ifvisible.object.event.identifier"), s[e[n]] || (s[e[n]] = {}), s[e[n]][t] || (s[e[n]][t] = []), s[e[n]][t].push(r)
            }, r = function(e, t, r) {
                var i, o, u, a, f;
                if (e[n] && s[e[n]] && s[e[n]][t]) {
                    a = s[e[n]][t], f = [];
                    for (o = 0, u = a.length; o < u; o++) i = a[o], f.push(i(r || {}));
                    return f
                }
            }, o = function(e, t, r) {
                var i, o, u, a, f;
                if (r) {
                    if (e[n] && s[e[n]] && s[e[n]][t]) {
                        f = s[e[n]][t];
                        for (o = u = 0, a = f.length; u < a; o = ++u) {
                            i = f[o];
                            if (i === r) return s[e[n]][t].splice(o, 1), i
                        }
                    }
                } else if (e[n] && s[e[n]] && s[e[n]][t]) return delete s[e[n]][t]
            }, {
                add: t,
                remove: o,
                fire: r
            }
        }(), e = function() {
            var e;
            return e = !1,
                function(t, n, r) {
                    return e || (t.addEventListener ? e = function(e, t, n) {
                        return e.addEventListener(t, n, !1)
                    } : t.attachEvent ? e = function(e, t, n) {
                        return e.attachEvent("on" + t, n, !1)
                    } : e = function(e, t, n) {
                        return e["on" + t] = n
                    }), e(t, n, r)
                }
        }(), r = function(e, t) {
            var r;
            return n.createEventObject ? e.fireEvent("on" + t, r) : (r = n.createEvent("HTMLEvents"), r.initEvent(t, !0, !0), !e.dispatchEvent(r))
        }, u = function() {
            var e, t, r, i, s;
            i = void 0, s = 3, r = n.createElement("div"), e = r.getElementsByTagName("i"), t = function() {
                return r.innerHTML = "<!--[if gt IE " + ++s + "]><i></i><![endif]-->", e[0]
            };
            while (t()) continue;
            return s > 4 ? s : i
        }(), i = !1, p = void 0, typeof n.hidden != "undefined" ? (i = "hidden", p = "visibilitychange") : typeof n.mozHidden != "undefined" ? (i = "mozHidden", p = "mozvisibilitychange") : typeof n.msHidden != "undefined" ? (i = "msHidden", p = "msvisibilitychange") : typeof n.webkitHidden != "undefined" && (i = "webkitHidden", p = "webkitvisibilitychange"), h = function() {
            var t, r;
            return t = !1, r = function() {
                return clearTimeout(t), c !== "active" && a.wakeup(), s = +(new Date), t = setTimeout(function() {
                    if (c === "active") return a.idle()
                }, o)
            }, r(), e(n, "mousemove", r), e(n, "mouseup", r), e(n, "keyup", r), e(n, "touchstart", r), e(window, "scroll", r), e(window, "resize", r), a.focus(r), a.wakeup(r)
        }, f = function() {
            var t;
            return l ? !0 : (i === !1 ? (t = "blur", u < 9 && (t = "focusout"), e(window, t, function() {
                return a.blur()
            }), e(window, "focus", function() {
                return a.focus()
            })) : e(n, p, function() {
                return n[i] ? a.blur() : a.focus()
            }, !1), l = !0, h())
        }, a = {
            setIdleDuration: function(e) {
                return o = e * 1e3
            },
            getIdleDuration: function() {
                return o
            },
            getIdleInfo: function() {
                var e, t;
                return e = +(new Date), t = {}, c === "idle" ? (t.isIdle = !0, t.idleFor = e - s, t.timeLeft = 0, t.timeLeftPer = 100) : (t.isIdle = !1, t.idleFor = e - s, t.timeLeft = s + o - e, t.timeLeftPer = (100 - t.timeLeft * 100 / o).toFixed(2)), t
            },
            focus: function(e) {
                return typeof e == "function" ? this.on("focus", e) : (c = "active", t.fire(this, "focus"), t.fire(this, "wakeup"), t.fire(this, "statusChanged", {
                    status: c
                })), this
            },
            blur: function(e) {
                return typeof e == "function" ? this.on("blur", e) : (c = "hidden", t.fire(this, "blur"), t.fire(this, "idle"), t.fire(this, "statusChanged", {
                    status: c
                })), this
            },
            idle: function(e) {
                return typeof e == "function" ? this.on("idle", e) : (c = "idle", t.fire(this, "idle"), t.fire(this, "statusChanged", {
                    status: c
                })), this
            },
            wakeup: function(e) {
                return typeof e == "function" ? this.on("wakeup", e) : (c = "active", t.fire(this, "wakeup"), t.fire(this, "statusChanged", {
                    status: c
                })), this
            },
            on: function(e, n) {
                return f(), t.add(this, e, n), this
            },
            off: function(e, n) {
                return f(), t.remove(this, e, n), this
            },
            onEvery: function(e, t) {
                var n, r;
                return f(), n = !1, t && (r = setInterval(function() {
                    if (c === "active" && n === !1) return t()
                }, e * 1e3)), {
                    stop: function() {
                        return clearInterval(r)
                    },
                    pause: function() {
                        return n = !0
                    },
                    resume: function() {
                        return n = !1
                    },
                    code: r,
                    callback: t
                }
            },
            now: function(e) {
                return f(), c === (e || "active")
            }
        }, a.name = "ifvisible", a
    }), tp.define("doubleClickForPublisher", [], function() {
        function s(e) {
            e && (c(), n = !1), o()
        }

        function o() {
            if (n) return !1;
            n = !0;
            try {
                var e = window.googletag = window.googletag || {};
                return e.cmd = e.cmd || [], e.cmd.push(function() {
                    e.pubads().addEventListener("slotRenderEnded", v), e.pubads().addEventListener("impressionViewable", m), e.companionAds().addEventListener("slotRenderEnded", v), e.companionAds().addEventListener("impressionViewable", m)
                }), e.apiReady && e.cmd.push(function() {
                    p(e.pubads().getSlots()), p(e.companionAds().getSlots())
                }), !0
            } catch (t) {
                return y(t), !1
            }
        }

        function u(e) {
            r = e
        }

        function a(e, t) {
            typeof r == "function" && r(e, t)
        }

        function f(n) {
            var r = [],
                i = 0,
                s = t.length;
            h(n) && n > 0 && n < s && (i = s - n);
            for (var o = i; o < s; o++) {
                var u = t[o];
                if (!l(u)) continue;
                r.push(e[u])
            }
            return r
        }

        function l(t) {
            return t && e[t] !== undefined && e[t] !== null && e.hasOwnProperty(t)
        }

        function c() {
            e = {}, t = []
        }

        function h(e) {
            return typeof e == "number" && isFinite(e) && Math.floor(e) === e
        }

        function p(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                v({
                    eventSource: i.RECIEVED_FROM_GET_SLOTS,
                    slot: n
                })
            }
        }

        function d(e) {
            var t;
            try {
                var n = e.serviceName,
                    r = e.slot;
                if (!n) {
                    var i = e.slot.getServices();
                    i && i.length && (n = i[0].getName())
                }
                var s = r.getResponseInformation() || {},
                    o = r.getSlotId ? r.getSlotId() : {},
                    u = r.getSlotElementId ? r.getSlotElementId() : o.getDomId ? o.getDomId() : null;
                t = {
                    companion: n ? n === "companion_ads" : !1,
                    adUnit: r.getAdUnitPath ? r.getAdUnitPath() : 0,
                    isEmpty: e.isEmpty,
                    elementId: u,
                    advertiserId: e.advertiserId || s.advertiserId,
                    campaignId: e.campaignId || s.campaignId,
                    lineItemId: e.lineItemId || s.lineItemId,
                    creativeId: e.creativeId || s.creativeId,
                    eventSource: e.eventSource || null,
                    size: e.size && e.size.slice(0, 2) || null,
                    viewed: !1,
                    position: null
                };
                var a = document.getElementById(u);
                if (u && a) {
                    t.position = {
                        top: a.offsetTop,
                        left: a.offsetLeft
                    };
                    if (e.isEmpty === undefined) {
                        t.isEmpty = a.offsetWidth <= 0 && a.offsetHeight <= 0;
                        if (!t.isEmpty && !t.size) {
                            var f = r.getSizes();
                            f && f.length && (t.size = [f[0].getWidth(), f[0].getHeight()])
                        }
                    }
                }
            } catch (l) {
                y(l)
            }
            return t
        }

        function v(n) {
            n.eventSource = n.eventSource || i.RENDERED_FOR_CURRENT_UNIT;
            var r = d(n),
                s = g(n.slot);
            e[s] ? r.viewed = e[s].viewed : t.push(s), e[s] = r, a(r, s)
        }

        function m(n) {
            var r = g(n.slot),
                s = e[r] || d(n);
            l(r) || (e[r] = s, t.push(r)), s.companion === undefined && (s.companion = n.serviceName === "companion_ads");
            if (!s.eventSource || s.eventSource > i.DID_NOT_RENDER_BUT_VIEWED) s.eventSource = i.DID_NOT_RENDER_BUT_VIEWED;
            s.viewed = !0, a(s, r)
        }

        function g(e) {
            try {
                var t = e.getSlotId ? e.getSlotId() : {},
                    n = e.getSlotElementId ? e.getSlotElementId() : t.getDomId ? t.getDomId() : null,
                    r = e.getAdUnitPath ? e.getAdUnitPath() : 0,
                    i = t.getId ? t.getId() : 0;
                return [n, i, r].join(":")
            } catch (s) {
                y(s)
            }
        }

        function y(e) {
            window.tp && window.tp.util && window.tp.util.error && window.tp.util.error("DFP module error: ", e)
        }
        var e = {},
            t = [],
            n = !1,
            r, i = {
                RENDERED_FOR_CURRENT_UNIT: 1,
                DID_NOT_RENDER_BUT_VIEWED: 2,
                RECIEVED_FROM_GET_SLOTS: 3
            };
        return s(), {
            name: "doubleClickForPublisher",
            initialize: s,
            setCustomHandler: u,
            getAds: f,
            resetAds: c
        }
    }), tp.define("doubleClickForPublisher", function() {}), tp.define("viewportExit", ["jq", "util"], function(e, t) {
        function m() {
            if (l) return;
            l = !0, v = p, e(document).on("mouseleave", x), e(document).on("mousemove", T)
        }

        function g() {
            if (c) return;
            c = !0, window.addEventListener("popstate", function(e) {
                i && e.state && e.state.pianoViewportExitState === n && (i = !1, N("back"))
            });
            var e = window.history.state || {};
            e && e.pianoViewportExitState !== r && (e.pianoViewportExitState !== n && (e.pianoViewportExitState = n, window.history.replaceState(e, document.title)), window.history.pushState({
                pianoViewportExitState: r
            }, document.title)), i = !0
        }

        function y(e) {
            a.indexOf(e) !== -1 ? d[e].visited || (d[e].visited = !0, v += d[e].value) : t.debug("viewportExit: the detect of the exit side failed")
        }

        function b(t, n) {
            function o() {
                return n <= 0
            }

            function u() {
                return t >= r
            }

            function a() {
                return n >= i
            }

            function f() {
                return t <= 0
            }
            var r = e(window).width(),
                i = e(window).height(),
                s = "";
            return u() && (s = "right"), a() && (s = "bottom"), f() && (s = "left"), o() && (s = "top"), s
        }

        function w(e) {
            if (e.length === 0) return -1;
            var t = e[0],
                n = 0;
            for (var r = 1; r < e.length; r++) e[r] < t && (n = r, t = e[r]);
            return n
        }

        function E() {
            if (!s) return "";
            var t = e(window).width(),
                n = e(window).height(),
                r = [u, t - o, n - u, o];
            return a[w(r)]
        }

        function S(e) {
            return e.clientX === e.clientY && e.clientX < 0 && e.clientX >= -1
        }

        function x(e) {
            var n;
            n = S(e) ? "" : b(e.clientX, e.clientY), n || (n = E(), n || t.debug("viewportExit: the detect of the exit side failed")), n && y(n), N("all"), n === "top" && N("top")
        }

        function T(e) {
            s = !0, u = e.clientY, o = e.clientX
        }

        function N(e) {
            if (!f) return;
            var n, r = [],
                i = [];
            for (var s = 0; s < h.length; s++) n = h[s], (n.detectExitMode === e || e === "back" && n.detectBackButtonForMobile) && n.consumeEventFn() ? r.push(n) : i.push(n);
            r.length && t.debug("viewportExit: listeners was run fire with type: ", e), h = i;
            for (var s = 0; s < r.length; s++) n = r[s], n.callback()
        }

        function C(e, t, n) {
            (t.clientDevice === "mobile" || t.clientDevice === "tablet") && !!t.detectBackButtonForMobile && g(), m(), typeof n != "function" && (n = function() {
                return !0
            }), h.push({
                callback: e,
                detectExitMode: t.detectExitMode,
                detectBackButtonForMobile: t.detectBackButtonForMobile,
                consumeEventFn: n
            })
        }

        function k() {
            h = []
        }

        function L() {
            return l
        }

        function A() {
            return v
        }

        function O() {
            v = p
        }
        var n = "viewport-exit-activated",
            r = "viewport-exit-prepared",
            i = !1,
            s = !1,
            o = 0,
            u = 0,
            a = ["top", "right", "bottom", "left"],
            f = !0,
            l = !1,
            c = !1,
            h = [],
            p = 0,
            d = {
                top: {
                    visited: !1,
                    value: 1
                },
                right: {
                    visited: !1,
                    value: 2
                },
                bottom: {
                    visited: !1,
                    value: 4
                },
                left: {
                    visited: !1,
                    value: 8
                }
            },
            v = p;
        return {
            name: "viewportExit",
            initialize: m,
            isInitialized: L,
            addListener: C,
            resetSumOfCodesDirectionToDefault: O,
            getSumOfCodesDirection: A,
            removeListeners: k,
            enable: function() {
                f = !0
            },
            disable: function() {
                f = !1
            }
        }
    }), tp.define("viewportExit", function() {}), tp.define("condeUserProvider", ["jq", "api", "util", "eventUtils"], function(e, t, n, r) {
        var i = r.createEventManager(["logout"]),
            s = function() {
                function o(e) {
                    n.setAccessTokenListCookie({
                        value: null
                    }, null, !0);
                    var t = n.getPossibleCookieDomains();
                    for (var r in t) n.deleteCookie("amg_user", t[r]), n.deleteCookie("amg_user_partner", t[r]), n.deleteCookie("amg_user_info", t[r]), n.deleteCookie("amg_user_ext", t[r]), n.deleteCookie("amg_user_update", t[r]);
                    n.deleteCookie("amg_user"), n.deleteCookie("amg_user_partner"), n.deleteCookie("amg_user_info"), n.deleteCookie("amg_user_ext"), n.deleteCookie("amg_user_update"), i.fireCallbacks("logout", null, null, !0), e && e()
                }

                function u(t) {
                    n.setAccessTokenListCookie({
                        value: t.token_list,
                        cookie_domain: t.cookie_domain
                    }, t.user_token);
                    var r = {
                        path: "/",
                        expires: 730
                    };
                    t.cookie_domain && t.cookie_domain !== "localhost" && e.inArray(t.cookie_domain, n.getPossibleCookieDomains()) >= 0 && (r.domain = t.cookie_domain), e.cookie.raw = !0, n.__protected__.setCookie(t.params.cookieName, t.params.cookieValue, r), n.__protected__.setCookie("amg_user_partner", t.params.externalId, r), n.__protected__.setCookie("amg_user_info", t.params.userName, r), n.__protected__.setCookie("amg_user_ext", t.params.siteUserId, r), t.params.updateToken && n.__protected__.setCookie("amg_user_update", t.params.updateToken, r), e.cookie.raw = !1
                }
                var t = function() {
                        return "conde"
                    },
                    r = function() {
                        var e = n.findCookieByName("amg_user_partner");
                        return typeof e != "undefined" && e && e.length >= 0 ? e : null
                    },
                    s = function() {
                        return !!n.getUserTokenCookie()
                    };
                return {
                    getName: function() {
                        return t()
                    },
                    getToken: function() {
                        return r()
                    },
                    isUserValid: function() {
                        return s()
                    },
                    onLoginSuccess: u,
                    logout: o
                }
            }(),
            o = function() {
                return tp.useCondeUserProvider === !0 || tp.useCondeUserProvider === "true"
            };
        return {
            name: "condeUserProvider",
            isUserValid: function() {
                return s.isUserValid()
            },
            getToken: function() {
                return s.getToken()
            },
            getName: function() {
                return s.getName()
            },
            onLoginSuccess: function(e) {
                return s.onLoginSuccess(e)
            },
            logout: function(e) {
                return s.logout(e)
            },
            isConfigured: function() {
                return o()
            },
            registerCallback: function(e, t) {
                i.addEvent(e), i.registerCallback(e, t)
            }
        }
    }), tp.define("condeUserProvider", function() {}), tp.define("pianoId", ["jq", "jwtDecode", "util", "containerUtils", "postmessage", "log", "observer", "main", "gaService", "api", "pianoIdLite"], function(e, t, n, r, i, s, o, u, a, f, l) {
        function j(e) {
            k.filter(function(e) {
                return e.config.displayMode === "inline"
            }).filter(function(t) {
                return !e || e.some(function(e) {
                    return t.container.is(e)
                })
            }).forEach(function(e) {
                r.resizeIframe(e, {
                    width: e.container.width()
                }), i.send("resize", {
                    width: e.container.width()
                }, e.iframeId)
            })
        }

        function F(e, n) {
            var r = t(e);
            r.rememberMe = !!n, Bt({
                user: r,
                token: e
            })
        }

        function I(t) {
            if (D && !t) return D;
            C = t || {};
            var r = e.Deferred();
            D = r.promise(), l.isConfigured() || tp.setUsePianoIdUserProvider(!0), ht(C);
            var i = n.getQueryParamByName(c);
            C.resetPasswordToken === undefined && i && (C.resetPasswordToken = i);
            var s = n.getQueryParamByName(h);
            C.passwordlessToken === undefined && s && (C.passwordlessToken = s);
            var o = n.getQueryParamByName(p);
            return o && (n.removeQueryParamByName(p), zt() || (tp.inappBrowserReturn = !0, F(o, !0))), setTimeout(r.resolve, 50), D
        }

        function q(t, r) {
            function s() {
                n.doneCall("refreshUserToken"), i.resolve()
            }
            if (_ && !t) return _;
            var i = e.Deferred();
            return _ = i.promise(), t && t.preview ? (setTimeout(i.resolve, 10), _) : (n.startCall("refreshUserToken"), I(t).then(function() {
                return C.passwordlessToken ? J() : r ? e.when() : Wt()
            }).then(s, s), _)
        }

        function R() {
            return I()
        }

        function U(t) {
            q().then(function() {
                var r = e.extend({}, C, t, {
                    isRegistration: !0
                });
                zt() ? rt(r) : L ? (ht(t), n.log("Modal login window already shown")) : (ht(t), pt(r), Dt(r))
            })
        }

        function z(t) {
            if (L) {
                n.log("Modal window already shown");
                return
            }
            q().then(function() {
                var n = e.extend({
                    screen: "email_confirmation_required"
                }, C, t);
                ht(t), pt(n), Dt(n)
            })
        }

        function W(t) {
            if (L) {
                n.log("Modal window already shown");
                return
            }
            q().then(function() {
                var n = e.extend({
                    screen: "email_confirmation"
                }, C, t);
                ht(t), pt(n), Dt(n)
            })
        }

        function X(t) {
            if (L) {
                n.log("Modal window already shown");
                return
            }
            var r = e.extend({}, t, C);
            t.customEvents && typeof t.customEvents == "object" && (O = t.customEvents), pt(r), ht(t), Dt(r)
        }

        function V(t) {
            q().then(function() {
                var r = e.extend({}, C, t, {
                        isRegistration: !1
                    }),
                    s = r.formName;
                if (!s) throw new Error('Form name should be specified, like\ntp.pianosId.showForm({formName: "..."});');
                var o = function() {
                    if (L) n.log("Modal login window already shown");
                    else {
                        pt(r), ht(t);
                        if (!r.preview && P) {
                            n.log("Skip show form, register new user");
                            return
                        }
                        if (!r.hideIfComplete) return e.extend(r, {
                            readyCallback: function(e) {
                                i.send("setToken", Rt(), e.iframeId)
                            }
                        }), Dt(r);
                        an(r).then(function(t) {
                            if (t && t.has_all_custom_field_values_filled && r.hideIfComplete) {
                                n.log("Skip show form, all fields are completed");
                                return
                            }
                            var s = e.extend({}, r, {
                                readyCallback: function(e) {
                                    i.send("userData", t, e.iframeId)
                                }
                            });
                            Dt(s)
                        })
                    }
                };
                if (!t.preview && !zt()) {
                    var u = e.extend({}, t, {
                        closedCallback: function() {
                            zt() && o()
                        }
                    });
                    U(u)
                } else o()
            })
        }

        function $() {
            i.send("submitLoginForm", null, L.iframeId)
        }

        function J() {
            var t = e.Deferred();
            return e.ajax({
                url: Lt() + "api/v1/identity/passwordless/authorization/code",
                dataType: "jsonp",
                data: {
                    aid: C.aid || tp.aid,
                    passwordless_token: C.passwordlessToken
                },
                success: function(e) {
                    e.error ? (nt(e), t.reject()) : (K(e), t.resolve())
                },
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }), t.promise()
        }

        function K(e) {
            !e.error && e.access_token && (Q(e.access_token, e.login_token_id), Ut({
                source: b,
                token: e.access_token,
                user: t(e.access_token)
            }, !1, !0), delete C.passwordlessToken, n.removeQueryParamByName("passwordless_token")), n.doneCall("refreshUserToken")
        }

        function Q(e, t) {
            var n = {
                aid: C.aid || tp.aid,
                login_token_id: t,
                user_token: e
            };
            G(n)
        }

        function G(e) {
            r.showWaitPanel(), f.callApi("/anon/passwordless/complete", e, function(e) {
                if (e.result && e.result.polling_enabled) return Y(e).then(tt);
                tt(e)
            })
        }

        function Y(t) {
            var n = e.Deferred(),
                r = {
                    aid: tp.aid,
                    oid: t.result.oid,
                    process_id: t.result.process_id,
                    user_token: tp.user.getProvider().getToken()
                };
            return Z(r, 0, t.result.polling_timeouts, n.resolve), n.promise()
        }

        function Z(e, t, r, i) {
            f.callApi("/anon/passwordless/check", e, function(s) {
                t++, s && s.result && s.result.poll_status !== "waiting" ? i(s) : !s.result && s.message ? (n.error("Passwordless purchase failed", s.message), i()) : t <= r.length ? setTimeout(function() {
                    Z(e, t, r, i)
                }, r[t - 1]) : i()
            })
        }

        function et(e) {
            var t = {
                screen: "passwordless_confirmation"
            };
            return e ? Object.assign(t, e) : Object.assign(t, {
                passwordlessSuccess: !0
            })
        }

        function tt(e) {
            try {
                var t = e.result.resource || {},
                    n = JSON.parse(e.result.show_offer_params),
                    i = et();
                if (!Object.keys(t).length && !Object.keys(n).length) return X(i);
                t.name ? i = et({
                    customParams: {
                        resourceName: t.name
                    }
                }) : i = et({
                    customEvents: {
                        checkoutContinue: function() {
                            Pt(), r.closeModalContainer(), tp.offer.show(n)
                        }
                    }
                }), X(i)
            } catch (s) {
                X(et())
            } finally {
                r.hideWaitPanel()
            }
        }

        function nt(e) {
            X({
                screen: "passwordless_confirmation",
                jsonpError: e
            }), delete C.passwordlessToken, n.removeQueryParamByName("passwordless_token")
        }

        function rt(e, t) {
            var n = It();
            if (!n) return;
            var r = jt(),
                i = {
                    token: r,
                    user: n,
                    source: t
                };
            if (e) {
                e.loggedIn && e.loggedIn(i);
                return
            }
            at("loggedIn", i), C.loggedIn && C.loggedIn(i), at("loginSuccess", i);
            if (t === b) {
                var s = {
                    event: "loginSuccess",
                    source: t,
                    params: i.user,
                    user_token: i.token,
                    registration: P
                };
                at("fire_loginSuccess", s), ft("loginSuccess", s)
            }
        }

        function it(e) {
            var t = {
                source: e
            };
            at("loggedOut", t), C.loggedOut && C.loggedOut(t), ft("logout", t)
        }

        function st(e, t) {
            var n = {
                    login: "loginDisplayed",
                    register: "registerDisplayed"
                },
                r = n[e];
            lt(r, {}, t)
        }

        function ot(e) {
            at("profileUpdate", e), C.profileUpdate && C.profileUpdate(e)
        }

        function ut(e, t) {
            e && e.customEvent && e.customEvent(t), ft("customEvent", t)
        }

        function at(e, t) {
            A[e] && A[e].forEach(function(e) {
                e(t)
            })
        }

        function ft(e, t) {
            M[e] && M[e].forEach(function(e) {
                e(t)
            })
        }

        function lt(e, t, n) {
            !n && at(e, t), ft(e, t)
        }

        function ct(e) {
            O && typeof O[e] == "function" && O[e]()
        }

        function ht(e) {
            if (!e) return;
            Object.keys(A).forEach(function(t) {
                e[t] && A[t].push(e[t])
            })
        }

        function pt(e) {
            e.aid || (e.aid = tp.aid), e.displayMode || (e.displayMode = "modal"), e.displayMode === "popup" ? (e.width = e.width || vt(), e.height = e.height || 460) : e.displayMode === "modal" && (e.width = e.width || vt()), e.accessToken = jt()
        }

        function dt(e) {
            T = e
        }

        function vt() {
            var e = window.innerWidth || document.documentElement.clientWidth || window.screen.width;
            return Math.min(e, 400)
        }

        function mt(e) {
            var n = t(e);
            Ut({
                user: n,
                token: e
            })
        }

        function gt(e, t, r) {
            P = !1, Ft(), n.setAccessTokenListCookie({
                value: null
            }, null, !0), Xt().then(function() {
                r || it(t), e && e()
            })
        }

        function yt(e) {
            function t(t) {
                var i = e.config.trackingId,
                    o = e.config.formName;
                switch (t.event) {
                    case "loaded":
                        e.config.displayMode === "modal" && r.checkBackdropAndContainer(e, !0), e.config.loadedCallback && e.config.loadedCallback(e);
                        break;
                    case "stateReady":
                        e.config.readyCallback && e.config.readyCallback(e);
                        break;
                    case "resize":
                        r.resizeIframe(e, t.params);
                        break;
                    case "restoreSize":
                        e.config.displayMode === "inline" && r.resizeIframe(e, {
                            width: e.container.width()
                        });
                        break;
                    case "loginSuccess":
                        Nt(t, function() {
                            e.config.callback && e.config.callback(), tp.user.refreshAccessToken(!0)
                        });
                        break;
                    case "loginFailed":
                        lt("loginFailed", t.params);
                        break;
                    case "registrationSuccess":
                        Nt(t, function() {
                            lt("registrationSuccess")
                        });
                        break;
                    case "registrationFailed":
                        lt("registrationFailed", t.params);
                        break;
                    case "lang":
                        Kt(t.params.lang, !0);
                        break;
                    case "customEvent":
                        ut(e.config, t.params);
                        break;
                    case "closed":
                        $t(e, !0), e.config.closedCallback && e.config.closedCallback(e);
                        break;
                    case "cfFormSubmission":
                        s.__protected__.logCustomFormSubmission(i, o, E);
                        break;
                    case "formSend":
                    case "formSkip":
                        $t(e);
                        break;
                    case "cfAppImpression":
                        s.__protected__.logCustomFormImpression(i, o, S);
                        break;
                    case "cfAppSubmission":
                        s.__protected__.logCustomFormSubmission(i, o, S);
                        break;
                    case "cfFormImpression":
                        s.__protected__.logCustomFormImpression(i, o, E);
                        break;
                    case "changeScreen":
                        st(t.params.screen);
                        break;
                    case "screenReady":
                        lt("onShow");
                        break;
                    case "layoutReady":
                        lt("layoutReady", t.params);
                        break;
                    case "confirmationEmailSent":
                        $t(e);
                        break;
                    case "verificationCodeStartCheckout":
                        var u = {};
                        try {
                            u = JSON.parse(t.params.startCheckoutParams)
                        } catch (a) {
                            n.log("error parse start checkout params"), u = {}
                        }
                        $t(e, !0), Wt(!0, !0), n.waitCall("refreshUserToken", function() {
                            tp.offer.show(u)
                        });
                        break;
                    case "removeParamFromGlobalConfig":
                        wt(t);
                        break;
                    case "verifyCode":
                        xt(t, e);
                        break;
                    case "openPasswordlessLoginWithCreatingUser":
                        bt();
                        break;
                    case "gaScriptInserted":
                        Et(e);
                        break;
                    case "fireCustomEvent":
                        ct(t.params.name);
                        break;
                    case "passwordRestored":
                        n.removeQueryParamByName("reset_token"), C.resetPasswordToken = undefined;
                        break;
                    default:
                        n.debug("Received invalid event type: " + t.event)
                }
            }
            return t
        }

        function bt() {
            U({
                createPasswordlessUser: !0
            })
        }

        function wt(e) {
            var t = e.params.name;
            camelCaseName = n.fromUnderscoreToCamelCase(t), delete C[camelCaseName], e.params.removeFromUrl && n.removeQueryParamByName(t)
        }

        function Et(e) {
            window.ga ? window.ga(function(t) {
                var n = t && typeof t.get == "function" ? t.get("clientId") : a.__protected__.getClientId();
                St(e.iframeId, n)
            }) : St(e.iframeId)
        }

        function St(e, t) {
            i.broadcast("initGaWithOptions", {
                clientId: t
            })
        }

        function xt(t, n) {
            var r = t.params.verificationCode,
                i = C.aid || tp.aid,
                s = Rt(),
                o = document.location.origin || document.location.href;
            e.ajax({
                url: Lt() + "api/v1/identity/verification/code",
                dataType: "jsonp",
                data: {
                    client_id: i,
                    access_token: s,
                    site: o,
                    verification_code: r
                },
                success: function(e) {
                    e.error || Tt(e, n)
                },
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            })
        }

        function Tt(e, n) {
            !e.error && e.access_token && Bt({
                token: e.access_token,
                user: t(e.access_token),
                cookie_domain: e.site_cookie_domain
            }), i.send("verificationCodeComplete", e, n.iframeId)
        }

        function Nt(e, t) {
            e && e.params && !e.params.areCookiesSet ? (e.params.source = b, P = !!e.params.registration, Ut(e.params).then(t)) : typeof t == "function" && t()
        }

        function Ct(e) {
            switch (e.params.event) {
                case "cfAppImpression":
                case "cfFormImpression":
                    s.__protected__.logCustomFormImpression(e.params.trackingId, e.params.trackingId, x);
                    break;
                case "cfFormSubmission":
                    s.__protected__.logCustomFormSubmission(e.params.trackingId, e.params.trackingId, x);
                    break;
                case "changeScreen":
                    st(e.params.params.screen, !0);
                    break;
                case "loginFailed":
                case "registrationFailed":
                case "registrationSuccess":
                    lt(e.params.event, e.params.params, !0);
                    break;
                case "gaScriptInserted":
                    Et({
                        iframeId: e.params.params.iframeId
                    });
                    break;
                default:
                    n.debug("Received invalid event type: " + e.params.event);
                    return
            }
        }

        function kt() {
            var e = tp.sandbox || tp.isNonProdEndpoint(),
                t = C.iframeUrl || tp.pianoIdUrl || !e && w || "/";
            return t === "/" && (t = tp.getEndpointRoot(!0)), t.replace(/\/$/, "")
        }

        function Lt() {
            var e = kt();
            return e + "/id/"
        }

        function At() {
            return Ot() ? "index3.html" : ""
        }

        function Ot() {
            var e = C.aid || tp.aid;
            return B.indexOf(e) >= 0
        }

        function Mt(t, n, r, i) {
            t.match("proxy.html") || (t += At());
            var s = {
                    client_id: n.aid,
                    sender: r.iframeId,
                    origin: i || document.location.origin || document.location.href,
                    site: document.location.origin || document.location.href,
                    display_mode: n.displayMode
                },
                o = Gt();
            o && (s.lang = o), n.disableSignUp && (s.disable_sign_up = !0), n.screen && (s.screen = n.screen), n.resetPasswordToken && (s.reset = n.resetPasswordToken), n.verification_code && (s.verification_code = n.verification_code), n.stage && (s.stage = n.stage), n.resetPasswordLandingUrl && (s.reset_uri = n.resetPasswordLandingUrl), n.width && n.displayMode === "modal" && (s.width = n.width), n.formName && (s.form_name = n.formName), _t(n, t) && (t += "form"), n.hideIfComplete && (s.hide_if_complete = n.hideIfComplete), n.preview && (s.preview = n.preview), n.templateVersion && (s.templateVersion = n.templateVersion), n.template && (s.template = n.template), n.accessToken && (s.access_token = n.accessToken), n.email && (s.email = n.email), n.singleStep && (s.single_step = !0), n.createPasswordlessUser && (s.create_passwordless_user = !0), n.customParams && (s.custom_params = JSON.stringify(n.customParams));
            if (n.customEvents) {
                var u = [];
                Object.keys(n.customEvents).forEach(function(e) {
                    u.push(e)
                }), u.length && (s.custom_events = JSON.stringify(u))
            }
            return n.jsonpError && (s.jsonp_error = JSON.stringify(n.jsonpError)), n.passwordlessSuccess && (s.passwordless_success = !0), r.iframeUrl && (s.url = r.iframeUrl), n.returnBack && (s.return_back = n.returnBack), r.pos && (s.width = r.pos.width, s.height = r.pos.height, s.top = r.pos.top, s.left = r.pos.left), [t, e.param(s)].join("?")
        }

        function _t(e, t) {
            var n = Ot(),
                r = !e.isRegistration,
                i = !/\.html$/.test(t) || n;
            return e.formName && i && r
        }

        function Dt(t) {
            var s = e(t.containerSelector).first(),
                u = "piano-id-" + (t.isRegistration ? "" : "form-") + n.randomString();
            t.singleContainer = s.length ? s[0] : undefined;
            var a = {
                    iframeId: u,
                    containerSelector: t.containerSelector,
                    width: t.width,
                    height: t.height
                },
                f = Mt(Lt(), t, a),
                l = Lt(),
                c, h, p = !0,
                d;
            t.iframeParams = a;
            if (t.displayMode === "inline") {
                var v = r.initInlineContainer(t);
                c = v.container, h = r.generateIframe(t, a, f), p = v.containerReady, t.observeContainer && (d = o.create(c, j))
            } else if (t.displayMode === "modal") c = r.getModalContainer(t, function() {
                return $t(L)
            }), h = r.generateIframe(t, a, f);
            else if (t.displayMode === "popup")
                if (n.isIE()) {
                    c = r.generateIframeWrapper(), f = Mt(Lt(), t, a, Lt() + "proxy.html"), a.iframeUrl = f, a.pos = r.getPopupPosition(a);
                    var m = Mt(Lt() + "proxy.html", t, a);
                    t.displayMode = "inlinePopup", h = r.generateIframe({}, a, m)
                } else {
                    c = r.generatePopup(a, f);
                    try {
                        try {
                            h = e(c.document)
                        } catch (g) {
                            h = e(c)
                        }
                    } catch (g) {
                        h = e()
                    }
                } var b = {
                    iframeId: a.iframeId,
                    config: t,
                    element: h,
                    container: c,
                    iframeParams: a,
                    containerReady: p
                },
                w = {
                    center: n.centerScreen(),
                    originUrl: document.location.href
                };
            i.init({
                postMessageUrl: l,
                receive: yt(b),
                iframe: b,
                iframeParams: a
            }, w);
            if (t.displayMode === "inline") {
                var E = e("<div>", {
                    "class": y
                });
                E.append(h), c.append(E)
            } else t.displayMode === "modal" ? c.append(h) : t.displayMode === "inlinePopup" && (c.append(h), e("body").append(c));
            return n.debug("creating iframe: ", t), k.push(b), t.displayMode === "modal" && (L = b, L.observer = d, (n.isIphone() || n.isIOsUiWebView() || n.isAndroid()) && tp.containerUtils.__private__.mobileModalFix.modalOpened()), b
        }

        function Pt() {
            if (!L) return;
            var e = tp.containerUtils.__private__.mobileModalFix;
            r.closeModal(L), L.element.remove(), L.observer && L.observer.disconnect(), e.isIphoneCaretFixed && e.modalClosed(), L = null
        }

        function Ht(e) {
            var t = {
                    path: "/"
                },
                r = n.__protected__.getCookie(m),
                i = n.extractCookieDomain(e || r);
            return i && (t.domain = i), t
        }

        function Bt(e) {
            if (!e || !e.user || !e.token) return;
            Ft(null, !0);
            var t = Ht(e.cookie_domain);
            if (e.user.rememberMe || tn()) t.expires = new Date(e.user.exp * 1e3), Zt(t);
            n.__protected__.setCookie(d, e.token, t), e.cookie_domain && (t.expires = 30, n.__protected__.setCookie(m, e.cookie_domain, t))
        }

        function jt() {
            var e = n.findCookieByName(d);
            return e ? e : null
        }

        function Ft(t, r) {
            var i = Ht(),
                s = n.getPossibleCookieDomains(i.domain);
            t && n.__protected__.logRemoveTokens(t), s.forEach(function(t) {
                var n = e.extend({}, i, {
                    domain: t
                });
                e.removeCookie(d, n), r || en(n)
            })
        }

        function It() {
            var e = null,
                r = jt();
            if (r) try {
                e = t(r);
                if (e) {
                    e.firstName = e.given_name, e.lastName = e.family_name, e.valid = !0, e.uid = e.sub, e.confirmed = !e.email_confirmation_required;
                    var i = new Date,
                        s = new Date(e.exp * 1e3);
                    s < i && (n.log("Removing expired tokens"), Ft(r), e = null)
                }
            } catch (o) {}
            return e
        }

        function qt(t) {
            var n = e.extend({}, C, t);
            an(n).then(function(t) {
                var r = e.extend({}, t);
                t && Array.isArray(t.custom_field_values) && (t.custom_field_values = t.custom_field_values.map(function(e) {
                    var t;
                    try {
                        t = JSON.parse(e.value)
                    } catch (n) {
                        t = e.value
                    }
                    return {
                        field_name: e.field_name,
                        value: t,
                        created: e.created
                    }
                })), typeof n.extendedUserLoaded == "function" && n.extendedUserLoaded(r), ft("extendedUserLoaded", r)
            })
        }

        function Rt() {
            return tp.externalJWT && l.isConfigured() ? tp.externalJWT : jt()
        }

        function Ut(e, t, n) {
            Bt(e);
            var i = Vt(e).pipe(function() {
                !t && rt(null, e.source)
            });
            n = n || e.withoutCloseModal;
            if (!n) {
                var s = e && e.user && e.user.email_confirmation_required,
                    o = L && L.config && L.config.verification_code;
                s || o ? r.hideCloseButton() : Jt()
            }
            return i
        }

        function zt() {
            return l.isConfigured() ? !!tp.externalJWT : !!It()
        }

        function Wt(r, i) {
            n.startCall("refreshUserToken");
            var s = e.Deferred(),
                o = function(e) {
                    e ? s.resolve() : s.reject(), n.doneCall("refreshUserToken")
                },
                u = function(e) {
                    !e.error && e.access_token ? Ut({
                        token: e.access_token,
                        user: t(e.access_token),
                        cookie_domain: e.site_cookie_domain
                    }, r, i).then(o.bind(this, !0)) : (Ft(Rt()), o(!1))
                };
            return e.ajax({
                url: Lt() + "api/v1/identity/token/verify",
                data: {
                    client_id: C.aid || tp.aid,
                    token: Rt() || "",
                    site: document.location.origin || document.location.href
                },
                dataType: "jsonp",
                success: u,
                error: o,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }), setTimeout(o, T * 10), s.promise()
        }

        function Xt() {
            var t = e.Deferred();
            return e.ajax({
                url: Lt() + "api/v1/identity/logout",
                data: {
                    client_id: C.aid || tp.aid
                },
                dataType: "jsonp",
                complete: t.resolve,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }), setTimeout(t.resolve, T), t.promise()
        }

        function Vt(t) {
            var n = e.Deferred(),
                r = !(t && t.user && t.user.rememberMe || tn());
            return e.ajax({
                url: Lt() + "api/v1/identity/vxauth/cookie",
                data: {
                    client_id: C.aid || tp.aid,
                    token: t.token,
                    session_cookie: r
                },
                dataType: "jsonp",
                complete: n.resolve,
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }), setTimeout(n.resolve, T), n.promise()
        }

        function $t(e, t) {
            if (!e) return;
            t ? e.closed || (e.closed = !0, e.config.displayMode === "inline" ? e.container.empty() : e.config.displayMode === "popup" ? e.container.close() : e.config.displayMode === "modal" && (Pt(e), e.container.detach())) : (i.send("close", {}, e.iframeId), k = k.filter(function(t) {
                return t.iframeId !== e.iframeId
            }), setTimeout(function() {
                $t(e, !0)
            }, N))
        }

        function Jt() {
            k.forEach(function(e) {
                $t(e)
            }), k = []
        }

        function Kt(e, t) {
            var r = Ht();
            r.expires = 30, n.__protected__.setCookie(v, e, r), t || k.forEach(function(t) {
                i.send("lang", {
                    lang: e
                }, t.iframeId)
            }), Object.keys(A.langChangeFromIframe).forEach(function(t) {
                var n = A.langChangeFromIframe[t];
                i.__protected__.isIframeManaged(t) && n ? n(e) : delete A.langChangeFromIframe[t]
            }), lt("langChange", e)
        }

        function Qt(e, t) {
            return A.langChangeFromIframe[t] = e,
                function() {
                    delete A.langChangeFromIframe[t]
                }
        }

        function Gt() {
            return n.__protected__.getCookie(v) || ""
        }

        function Yt() {
            return n.__protected__.getCookie(g) || !1
        }

        function Zt(e) {
            n.__protected__.setCookie(g, 1, e)
        }

        function en(t) {
            t && e.removeCookie(g, t)
        }

        function tn() {
            return !!Yt()
        }

        function nn(e) {
            if (H) return;
            H = !0;
            var t = {
                source: e.source,
                token: e.user_token,
                user: e.params,
                cookie_domain: e.cookie_domain
            };
            n.setAccessTokenListCookie({
                value: e.token_list,
                cookie_domain: e.cookie_domain
            }, e.user_token), Ut(t).then(function() {
                H = !1
            })
        }

        function rn(e, t) {
            var n = {
                token: e.token,
                user: e.user,
                cookie_domain: e.cookie_domain
            };
            Ut(n, !0).pipe(function() {
                t(), ot(n)
            })
        }

        function sn() {
            return tp.usePianoIdUserProvider === !0 || tp.usePianoIdUserProvider === "true"
        }

        function on() {
            return "piano_id"
        }

        function un(e, t) {
            M[e] = M[e] || [], M[e].push(t)
        }

        function an(t) {
            var n = e.extend({}, C, t),
                r = e.Deferred();
            return e.ajax({
                url: Lt() + "api/v1/identity/userinfo",
                data: {
                    client_id: C.aid || tp.aid,
                    access_token: Rt(),
                    form_name: n.formName
                },
                dataType: "jsonp",
                success: r.resolve,
                complete: function() {
                    return r.resolve()
                },
                xhrFields: {
                    withCredentials: !0
                },
                crossDomain: !0
            }), setTimeout(r.resolve, T * 10), r.promise()
        }

        function fn() {
            k.forEach(function(e) {
                i.send("isAOT", {}, e.iframeId)
            })
        }
        var c = "reset_token",
            h = "passwordless_token",
            p = "piano_social_token",
            d = n.getAidSpecifiedName("__utp"),
            v = "__pil",
            m = "__pid",
            g = "__idr",
            y = "piano-id-container",
            b = "PIANOID",
            w = "https://id.tinypass.com",
            E = "show_form",
            S = "registration",
            x = "checkout",
            T = 300,
            N = 600,
            C = {},
            k = [],
            L, A = {
                loggedIn: [],
                loggedOut: [],
                loginSuccess: [],
                registrationSuccess: [],
                profileUpdate: [],
                langChange: [],
                langChangeFromIframe: {},
                fire_loginSuccess: [],
                loginDisplayed: [],
                registerDisplayed: [],
                loginFailed: [],
                registrationFailed: [],
                onShow: [],
                layoutReady: []
            },
            O = {},
            M = {},
            _, D, P, H, B = ["G18rIJWQ2G", "45L2BaS6pu"];
        return e(window).resize(function() {
            return j()
        }), {
            name: "pianoId",
            init: q,
            prepare: R,
            show: U,
            showForm: V,
            showEmailConfirmationRequired: z,
            submitLoginForm: $,
            loginByToken: mt,
            logout: gt,
            getToken: Rt,
            getUser: It,
            loadExtendedUser: qt,
            getName: on,
            isConfigured: sn,
            onLoginSuccess: nn,
            onProfileUpdate: rn,
            isUserValid: zt,
            setCallbacks: ht,
            getIframeUrl: Lt,
            updateLang: Kt,
            onLangChange: Qt,
            getLang: Gt,
            isAot: fn,
            registerCallback: un,
            __protected__: {
                offerMessageReceiver: Ct,
                showEmailConfirmation: W,
                closeModalContainer: Pt
            },
            __private__: {
                prepareConfig: pt,
                setRequestTimeout: dt
            }
        }
    }), tp.define("pianoId", function() {}), tp.define("pianoIdLite", ["jq", "api", "util", "eventUtils"], function(e, t, n, r) {
        function u() {
            return tp.usePianoIdLiteUserProvider === !0 || tp.usePianoIdLiteUserProvider === "true"
        }

        function a(e) {
            n.waitCall("refreshUserToken", function() {
                typeof e == "function" && e()
            })
        }
        var i = r.createEventManager(["userChanged", "onHide"]),
            s = n.getAidSpecifiedName("__utp"),
            o = function() {
                var e = function() {
                        return "piano_id_lite"
                    },
                    t = function() {
                        return tp.externalJWT || i()
                    },
                    r = function() {
                        return !!t()
                    },
                    i = function() {
                        return n.findCookieByName(s) || null
                    },
                    o = function(e) {
                        n.setAccessTokenListCookie({
                            value: e.token_list,
                            cookie_domain: e.cookie_domain
                        }, e.user_token)
                    };
                return {
                    getName: e,
                    getToken: t,
                    isUserValid: r,
                    onLoginSuccess: o
                }
            }();
        return {
            name: "pianoIdLite",
            isConfigured: u,
            isUserValid: function() {
                return o.isUserValid()
            },
            getToken: function() {
                return o.getToken()
            },
            getName: function() {
                return o.getName()
            },
            onLoginSuccess: function() {
                o.onLoginSuccess()
            },
            registerCallback: function(e, t) {
                i.addEvent(e), i.registerCallback(e, t)
            },
            logout: a
        }
    }), tp.define("pianoIdLite", function() {}), tp.define("observer", ["util", "jq"], function(e, t) {
        function s(e) {
            this.callback = e, this._isActive = !1, this.targets = [], this.timeout = 200
        }
        var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            r = !!n,
            i = {
                attributes: !0
            };
        return s.prototype._mutationSearch = function() {
            var e = this;
            this.targets.forEach(function(t) {
                var n = e._getState(t.element);
                !n === t.currentState && (t.currentState = n, e.callback([{
                    target: t.element
                }]))
            }), this._isActive && setTimeout(this._mutationSearch.bind(this), this.timeout)
        }, s.prototype._getState = function(e) {
            var t = [].slice.call(e.attributes),
                n = t.reduce(function(t, n) {
                    return t[n.name] = e.getAttribute(n.name), t
                }, {});
            return JSON.stringify(n)
        }, s.prototype.observe = function(t) {
            this.targets.push({
                id: e.randomString(),
                element: t,
                currentState: this._getState(t)
            }), this._isActive || (this._isActive = !0, this._mutationSearch())
        }, s.prototype.disconnect = function() {
            this._isActive = !1, delete this.targets
        }, {
            name: "observer",
            create: function(o, u) {
                o.length || e.error("element must be NODE");
                var a = r ? n : s,
                    f = new a(function(e) {
                        var n = e.map(function(e) {
                            return t(e.target)
                        });
                        return typeof u == "function" && u(n)
                    });
                return f.observe(o[0], i), f
            }
        }
    }), tp.define("applePay", ["jq", "postmessage", "util", "api"], function(e, t, n, r) {
        function m(e) {
            try {
                u = JSON.parse(e.data)
            } catch (r) {}
            if (["loaded", "startCheckout"].indexOf(u.event) !== -1) {
                var s = n.__protected__.isApplePayAllowed();
                t.broadcast("EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS", {
                    canMakePayments: s
                })
            } else if (u.clientToken) b(u.clientToken);
            else if (u.event === "applePayCheckoutFlowProperties") p = u.params.isBillingAddressShown;
            else if (u.event === "applyTaxFailed") l.abort();
            else if (u.event === "checkApplePayBtInstance") c && t.broadcast("applePayInit", {});
            else if (u.event === "applyTaxCompleted") y(u.params.nonce);
            else if (u.beginSession) {
                var o = {};
                u.resourceTitle && (o = u), u.termId && (v = u.termId);
                var a = {
                    currencyCode: u.currencyCode,
                    total: {
                        label: u.resourceTitle,
                        amount: u.chargeAmount
                    }
                };
                p && (a.requiredShippingContactFields = ["email"], a.requiredBillingContactFields = ["postalAddress"]);
                try {
                    h = c.createPaymentRequest(a)
                } catch (f) {
                    t.broadcast("payment-error", {
                        errorCode: 101
                    })
                }
                l = new ApplePaySession(i, h), l.onvalidatemerchant = function(e) {
                    c.performValidation({
                        validationURL: e.validationURL,
                        displayName: u.resourceTitle || o.resourceTitle
                    }, function(e, n) {
                        if (e) {
                            l.abort(), t.broadcast("payment-error", {
                                errorCode: 102
                            });
                            return
                        }
                        l.completeMerchantValidation(n)
                    })
                }, l.onpaymentauthorized = function(e) {
                    c.tokenize({
                        token: e.payment.token
                    }, function(n, r) {
                        if (n) {
                            t.broadcast("payment-error", {
                                errorCode: 103
                            }), l.completePayment(ApplePaySession.STATUS_FAILURE);
                            return
                        }
                        var i = {
                            nonce: r.nonce
                        };
                        p && e.payment.shippingContact ? (i.user = {
                            email: e.payment.shippingContact.emailAddress
                        }, g(e.payment.billingContact, i)) : y(i)
                    })
                }, l.begin()
            }
        }

        function g(e, n) {
            var r = {
                countryCode: e.countryCode ? e.countryCode.toUpperCase() : e.countryCode,
                zipCode: e.postalCode,
                billingZipCode: e.postalCode,
                nonce: n
            };
            t.broadcast("applePayPaymentAuthorized" + v, r)
        }

        function y(e) {
            l.completePayment(ApplePaySession.STATUS_SUCCESS), t.broadcast("applePayNonce" + v, e)
        }

        function b(e) {
            d = e, E()
        }

        function w() {
            braintree.client.create({
                authorization: d
            }, function(e, r) {
                if (e) {
                    t.broadcast("payment-error", {
                        errorCode: 100
                    }), n.log("[TP] Client error: " + e.message);
                    return
                }
                braintree.applePay.create({
                    client: r
                }, function(e, n) {
                    if (e) {
                        t.broadcast("payment-error", {
                            errorCode: 101
                        });
                        return
                    }
                    c = n, t.broadcast("applePayInit", {})
                })
            })
        }

        function E() {
            if (T()) return;
            x(a, function() {
                s = !0, S()
            })
        }

        function S() {
            if (N()) return;
            x(f, function() {
                o = !0, w()
            })
        }

        function x(e, t) {
            var n = document.createElement("script"),
                r = document.getElementsByTagName("script")[0];
            r.parentNode.insertBefore(n, r), n.type = "text/javascript", n.async = !0, n.onload = t, n.src = e
        }

        function T() {
            var e = document.getElementsByTagName("script");
            for (var t = 0, n = e.length; t < n; t++)
                if (e[t].src.indexOf(a) > -1) return !0
        }

        function N() {
            var e = document.getElementsByTagName("script");
            for (var t = 0, n = e.length; t < n; t++)
                if (e[t].src.indexOf(f) > -1) return !0
        }
        var i = 2,
            s = !1,
            o = !1,
            u = {},
            a = "https://js.braintreegateway.com/web/3.22.2/js/client.min.js",
            f = "https://js.braintreegateway.com/web/3.22.2/js/apple-pay.min.js",
            l, c, h, p, d, v = "";
        return window.addEventListener("message", m, !1), {
            name: "applePay"
        }
    }), tp.define("applePay", function() {}), tp.define("applePayIntegrationService", ["jq", "postmessage", "util"], function(e, t, n) {
        function f(e) {
            function c(e) {
                return a ? a === e : !0
            }

            function h() {
                var e = {
                    countryCode: i.params.countryCode,
                    currencyCode: i.params.currencyCode,
                    supportedNetworks: ["visa", "masterCard", "amex", "discover"],
                    merchantCapabilities: ["supports3DS"],
                    requiredShippingContactFields: i.params.requiredShippingContactFields || [],
                    requiredBillingContactFields: i.params.requiredBillingContactFields || [],
                    total: {
                        label: i.params.resourceName,
                        amount: i.params.chargeAmount
                    }
                };
                return e
            }

            function p() {
                try {
                    o.abort()
                } catch (e) {
                    console.error(e)
                }
            }

            function d(e, n) {
                var r = {
                    validationUrl: e,
                    displayedCaption: n,
                    userToken: null,
                    userProvider: null,
                    userRef: null,
                    janrainCaptureToken: null,
                    domainName: window.location.hostname,
                    aid: null,
                    termId: a
                };
                t.broadcast("apple-pay-pay-session-request", r)
            }
            try {
                i = JSON.parse(e.data)
            } catch (f) {}
            switch (i.event) {
                case "provider-component-initiated":
                    u && t.broadcast("apple-pay-init", {});
                    break;
                case "initPwApplePay":
                case "startCheckout":
                    u = n.__protected__.isApplePayAllowed(), t.broadcast("EVENT_APPLE_PAY_CAN_MAKE_PAYMENTS", {
                        canMakePayments: u
                    });
                    break;
                case "pay-session-received":
                    try {
                        o.completeMerchantValidation(i.params.applePaySession)
                    } catch (l) {
                        t.broadcast("payment-error", {
                            errorCode: 111,
                            errors: l
                        })
                    }
                    break;
                case "apple-pay-complete-payment":
                    if (!c(i.params.termId)) return;
                    o.completePayment(i.params.status, i.params.errors);
                    break;
                case "start-purchase":
                    a = i.params.termId || "", s = i.params.resourceName, o = new ApplePaySession(r, h()), o.onvalidatemerchant = function(e) {
                        d(e.validationURL, s)
                    }, o.onpaymentauthorized = function(e) {
                        try {
                            t.broadcast("apple-pay-payment-authorized", {
                                paymentData: e.payment,
                                termId: a
                            })
                        } catch (n) {
                            t.broadcast("payment-error", {
                                errorCode: 110,
                                error: n
                            })
                        }
                    };
                    try {
                        o.begin()
                    } catch (l) {
                        t.broadcast("payment-error", {
                            errorCode: 112,
                            error: l,
                            termId: a
                        })
                    }
                    break;
                case "abort-apple-pay-session":
                    p()
            }
        }

        function l() {
            window.addEventListener("message", f, !1)
        }

        function c() {
            var e = {
                then: function(e) {
                    return e(null)
                },
                "catch": function() {}
            };
            if (!tp.applePayMerchantId) return e;
            var t = n.__protected__.isApplePayAllowed();
            return t && tp.applePayMerchantId ? ApplePaySession.canMakePaymentsWithActiveCard(tp.applePayMerchantId) : e
        }
        var r = 3,
            i = {},
            s, o, u = !1,
            a;
        return {
            name: "applePayIntegrationService",
            initialize: l,
            __protected__: {
                applePayCanMakePaymentsWithActiveCard: c
            }
        }
    }), tp.define("applePayIntegrationService", function() {}), tp.define("stripeApplePayIntegrationService", ["postmessage"], function(e) {
        function u() {
            if (n != null) return n;
            var e = document.getElementById("stripe.js");
            if (!e) {
                var t = document.createElement("script");
                return t.src = "https://js.stripe.com/v3/", t.id = "stripe.js", document.body.appendChild(t), n = new Promise(function(e) {
                    t.onload = function() {
                        e()
                    }
                }), n
            }
        }

        function a(n) {
            try {
                t = JSON.parse(n.data)
            } catch (a) {}
            switch (t.event) {
                case "stripe-applepay-initialized":
                    u();
                    break;
                case "stripe-applepay-initiate-purchase":
                    var f = t;
                    u().then(function() {
                        var e = f.params.apiKey;
                        r === null && (r = Stripe(e));
                        var t = f.params.paymentRequestPayload;
                        return r.paymentRequest(t)
                    }).then(function(e) {
                        return i = e, e.canMakePayment()
                    }).then(function(t) {
                        s = t && t.applePay, e.broadcast("stripe-applepay-initiate-purchase-complete", {
                            canMakePayment: s
                        });
                        if (!s) return;
                        i.on("cancel", function() {
                            e.broadcast("stripe-applepay-start-purchase-complete" + o, {
                                status: "fail"
                            })
                        }), i.on("paymentmethod", function(t) {
                            var n = t.paymentMethod.billing_details.address,
                                r = {
                                    countryCode: n.country,
                                    zipCode: n.postal_code,
                                    billingZipCode: n.postal_code
                                },
                                i = t.paymentMethod.id;
                            e.broadcast("stripe-applepay-start-purchase-complete" + o, {
                                status: "success",
                                paymentMethodId: i,
                                payerEmail: t.payerEmail,
                                billingAddress: r
                            }), t.complete("success")
                        })
                    }).catch(function(t) {
                        console.error(t), e.broadcast("stripe-applepay-initiate-purchase-complete", {
                            canMakePayment: !1
                        })
                    });
                    break;
                case "stripe-applepay-start-purchase":
                    o = t.params.termId || "";
                    var l = t.params.paymentRequestPayload;
                    i.update(l), i.show();
                    break;
                case "stripe-applepay-abort-request":
                    i && i.abort(), e.broadcast("stripe-applepay-reopen-request")
            }
            return {
                name: "stripeApplePayIntegrationService"
            }
        }
        var t = {},
            n = null,
            r = null,
            i = null,
            s = !1,
            o = "";
        window.addEventListener("message", a, !1)
    }), tp.define("stripeApplePayIntegrationService", function() {}), tp.define("obi3DSChallenge", ["postmessage", "jq"], function(e, t) {
        function r(t) {
            var n = {
                stepUpUrl: t.stepUpUrl,
                jwt: t.jwt,
                transactionId: t.transactionId,
                zIndex: t.zIndex
            };
            obick.handle3dsChallenge(n).then(function(t) {
                console.warn(t), e.broadcast("obi-3ds-challenge-complete", {
                    threeDSTransactionId: t.threeDSTransactionId,
                    challengeStatus: t.challengeStatus
                })
            }).catch(function(t) {
                console.warn(t), e.broadcast("obi-3ds-challenge-complete", {
                    error: "challenge-error",
                    payload: t
                })
            })
        }

        function i(e) {
            try {
                n = JSON.parse(e.data)
            } catch (t) {}
            if (n.event === "obi-handle-3ds-challenge") {
                var i = n.params;
                console.warn(i);
                if (!window.obick) {
                    console.warn("obick loading " + i.obickUrl);
                    var s = document.createElement("script");
                    s.src = i.obickUrl, s.id = "obick.js", document.body.appendChild(s), s.onload = function() {
                        console.warn("onload"), r(i)
                    }
                } else r(i)
            }
            return {
                name: "obi3DSChallenge"
            }
        }
        var n = {};
        window.addEventListener("message", i, !1)
    }), tp.define("obi3DSChallenge", function() {}), tp.define("idle", ["jq", "util"], function(e, t) {
        function o() {
            if (n) return;
            n = !0, e(document).on("mousemove", a), e(document).on("keypress", a), e(window).scroll(a)
        }

        function u() {
            r.length && f(), i && clearTimeout(i), r.length && (i = setTimeout(u, s))
        }

        function a() {
            var e = Date.now();
            for (var t = 0; t < r.length; t++) r[t].startTime = e;
            clearTimeout(i), r.length && (i = setTimeout(u, s))
        }

        function f() {
            var e, n = [],
                i = [],
                s, o, u = Date.now();
            for (var a = 0; a < r.length; a++) e = r[a], s = u - e.startTime, o = !1, s >= e.idleTime && (e.consumeEventFn() ? o = !0 : e.startTime = u), o ? n.push(e) : i.push(e);
            n.length && t.debug("idle: run fire"), r = i;
            for (var a = 0; a < n.length; a++) e = n[a], e.callback()
        }

        function l(e, t, n) {
            o(), typeof n != "function" && (n = function() {
                return !0
            }), r.push({
                callback: e,
                idleTime: t * 1e3,
                startTime: Date.now(),
                consumeEventFn: n
            }), i || (i = setTimeout(u, s))
        }

        function c() {
            r = []
        }
        var n = !1,
            r = [],
            i, s = 200;
        return {
            name: "idle",
            initialize: o,
            addListener: l,
            removeListeners: c
        }
    }), tp.define("idle", function() {}), tp.define("interaction", ["jq", "util"], function(e, t) {
        function r(r, i, s) {
            var o = function(e) {
                var t = {
                        click: "click",
                        doubleClick: "dblclick",
                        rightClick: "contextmenu",
                        mouseOut: "mouseout",
                        mouseIn: "mouseenter"
                    },
                    n = [];
                for (var r = 0; r < e.length; r++) {
                    var i = e[r];
                    n.push(t[i])
                }
                return n
            };
            typeof s != "function" && (s = function() {
                return !0
            }), t.__protected__.documentReady(function() {
                for (var t = 0; t < i.length; t++) {
                    var u = i[t],
                        a = o(u.elementActions).join(" "),
                        f = u.elementSelector,
                        l = u.repetitive;
                    a.trim().length && function(t, i, o) {
                        var u = function() {
                            if (!s()) return;
                            o || e("body").off(i, t, u), r()
                        };
                        e("body").on(i, t, u), n.__private__.boundInteractions.push({
                            action: a,
                            selector: f,
                            func: u
                        })
                    }(f, a, l)
                }
            })
        }

        function i() {
            e.each(n.__private__.boundInteractions, function(t, n) {
                e("body").off(n.action, n.selector, n.func)
            }), n.__private__.boundInteractions = []
        }
        var n = {
            __private__: {},
            __protected__: {}
        };
        return n.name = "interaction", n.bind = r, n.unbindAll = i, n.__private__.boundInteractions = [], n
    }), tp.define("interaction", function() {}), tp.define("require-css/css!styles/offer", [], function() {}), tp.define("log", ["jq", "util", "postmessage"], function(e, t, n) {
        n.subscribe("iframeLogRequest", function(e) {
            i(e.url, e.queryParams)
        });
        var r = function(e) {
                var t = [];
                for (var n in e) {
                    var r = e[n];
                    t.push(encodeURIComponent(n) + "=" + encodeURIComponent(typeof r == "object" ? JSON.stringify(r) : r))
                }
                return t.join("&")
            },
            i = function(t, n) {
                var i = r(n);
                i.length > 6e3 ? e.ajax({
                    type: "POST",
                    url: tp.getTrackingEndpoint() + t,
                    data: i
                }) : e.ajax({
                    url: tp.getTrackingEndpoint() + t + "?" + i,
                    dataType: "jsonp"
                })
            },
            s = function(e, n, r) {
                var s = {
                    tracking_id: e,
                    event_group_id: n,
                    custom_params: r || ""
                };
                if (!e) {
                    t.log("Parameter trackingId is required to log micro conversion.");
                    return
                }
                if (!n) {
                    t.log("Parameter eventGroupId is required to log micro conversion.");
                    return
                }
                i("/api/v3/conversion/logMicroConversion", s)
            },
            o = function(e, n, r, s, o) {
                var u = {
                    tracking_id: e,
                    esp_widget_id: n,
                    event_type: s,
                    event_group_id: r,
                    custom_params: o || ""
                };
                if (!e) {
                    t.log("Parameter trackingId is required to log esp micro conversion.");
                    return
                }
                if (!r) {
                    t.log("Parameter eventGroupId is required to log esp micro conversion.");
                    return
                }
                if (!n) {
                    t.log("Parameter espWidgetId is required to log esp micro conversion.");
                    return
                }
                i("/api/v3/conversion/logEspMicroConversion", u)
            },
            u = function(e, n, r, s, o, u, a, f) {
                var l = {
                    tracking_id: e,
                    term_id: n,
                    term_name: r
                };
                if (!e) {
                    t.log("Parameter trackingId is required to log conversion.");
                    return
                }
                if (!n) {
                    t.log("Parameter termId is required to log conversion.");
                    return
                }
                if (!r) {
                    t.log("Parameter termName is required to log conversion.");
                    return
                }
                typeof s != "undefined" && (l.step_number = s), typeof o != "undefined" && (l.amount = o), typeof u != "undefined" && (l.currency = u), typeof a != "undefined" && (l.custom_params = a), typeof f != "undefined" && (l.conversion_category = f), i("/api/v3/conversion/log", l)
            },
            a = function(e) {
                typeof e == "object" ? u(e.tracking_id, e.term_id, e.term_name, e.step_number, e.amount, e.currency, e.custom_params, e.conversion_category) : u.apply(this, arguments)
            },
            f = function(e, n, r, s) {
                var o = {
                    tracking_id: e,
                    step_number: n,
                    step_name: r,
                    custom_params: s || ""
                };
                if (!e) {
                    t.log("Parameter trackingId is required to log funnel step.");
                    return
                }
                if (!n) {
                    t.log("Parameter stepNumber is required to log funnel step.");
                    return
                }
                if (!r) {
                    t.log("Parameter stepName is required to log funnel step.");
                    return
                }
                i("/api/v3/conversion/logFunnelStep", o)
            },
            l = function(e, n, r) {
                n || t.log("Parameter formName is required to log impression."), r || t.log("Parameter source is required to log impression.");
                var s = {
                        aid: tp.aid,
                        pageview_id: tp.main.fetchPageViewId(),
                        custom_form_name: n,
                        custom_form_source: r
                    },
                    o = tp.user.getProvider().getToken();
                return o && (s.user_token = o), e && (s.tracking_id = e), i("/api/v3/customform/log/impression", s)
            },
            c = function(e, n, r) {
                n || t.log("Parameter formName is required to log submission."), r || t.log("Parameter source is required to log submission.");
                var s = {
                        aid: tp.aid,
                        pageview_id: tp.main.fetchPageViewId(),
                        custom_form_name: n,
                        custom_form_source: r
                    },
                    o = tp.user.getProvider().getToken();
                return o && (s.user_token = o), e && (s.tracking_id = e), i("/api/v3/customform/log/submission", s)
            },
            h = function(n, i) {
                var s = r(i),
                    o = n + "?" + s;
                if (navigator.sendBeacon)
                    if (o.length > 6e3) {
                        var u = new Blob([s], {
                            type: "application/x-www-form-urlencoded"
                        });
                        navigator.sendBeacon(n, u)
                    } else navigator.sendBeacon(o);
                else {
                    var a = navigator.appVersion.indexOf("MSIE 9") !== -1,
                        f;
                    a ? f = {
                        dataType: "jsonp",
                        url: o
                    } : f = {
                        type: "post",
                        url: o,
                        async: !1,
                        xhrFields: {
                            withCredentials: !0
                        }
                    }, f.error = function() {
                        t.debug("Beacon request has been failed", arguments)
                    }, e.ajax(f)
                }
            };
        return {
            name: "log",
            logMicroConversion: s,
            logConversion: a,
            logFunnelStep: f,
            __protected__: {
                logCustomFormImpression: l,
                logCustomFormSubmission: c,
                logEspMicroConversion: o
            },
            __private__: {
                doLog: i,
                logBeaconRequest: h
            }
        }
    }), tp.define("gaService", ["jq", "util", "postmessage"], function(e, t, n) {
        function o() {
            n.subscribe("loaded", function(e) {
                i && e.params && u(e.params.iframeId, i)
            }), n.subscribe("resize", function(e) {
                i && e.params && u(e.params.iframeId, i)
            })
        }

        function u(e, t) {
            if (r[e + t]) return;
            n.send(s, {
                clientId: t
            }, e), r[e + t] = !0
        }

        function a(e) {
            i = e, l(i)
        }

        function f() {
            return i
        }

        function l(e) {
            c(s, {
                clientId: e
            })
        }

        function c(e, t) {
            n.broadcast(e, t)
        }
        var r = {},
            i = null,
            s = "ga.setClientId";
        return o(), {
            name: "gaService",
            setClientId: a,
            __protected__: {
                getClientId: f
            }
        }
    }), tp.define("pianoEsp", ["jq", "util", "log", "recWidgetService", "user"], function(e, t, n, r, i) {
        var s = "__pnml",
            o, u = "EXTERNAL_LINK",
            a = "EXTERNAL_EVENT",
            f = r.__protected__.getInstance(),
            l = "300",
            c = function() {
                if (o) return o;
                var n = e.Deferred(),
                    i = window.PianoESPConfig || {};
                return i.id ? (e.extend(i, {
                    onload: n.resolve,
                    widget_init_on_event: {
                        rec: !0,
                        "opt-in": !1
                    },
                    onclick: function(e) {
                        f.fireWidgetCallback("click", e.widgetId, e)
                    },
                    onwidgetinit: function(e) {
                        f.fireWidgetCallback("init", e.widgetId, e)
                    },
                    onrecsloaded: function(e) {
                        f.fireWidgetCallback("recsloaded", e.widgetId, e)
                    }
                }), window.PianoESPConfig = i, t.debug("pianoESP: loading PianoESP with config:", window.PianoESPConfig), r.__protected__.insertWidgetLib({
                    id: "pnesplucidsdksel",
                    src: p() + "/public/sdk/v04/sdk.js?v=" + (localStorage && localStorage.lucidsdkver || "xxx"),
                    onerror: n.reject
                })) : n.reject(), o = n.promise(), o
            },
            h = function(t) {
                window.PianoESPConfig = e.extend(window.PianoESPConfig || {}, {
                    visitor: t
                })
            },
            p = function() {
                var e = "//api-esp.piano.io";
                return tp.espEndpoint ? e = tp.espEndpoint : tp.isSandbox() && (e = "//sandbox-api-esp.piano.io"), e
            },
            d = function(e) {
                var t = w();
                return f.showRecommendation({
                    widgetConfig: e,
                    widgetCallbacks: t,
                    createPlaceholderFn: b(e.placeholder)
                }), c().then(function() {
                    window.PianoESP.initWidget(parseInt(e.widgetId))
                })
            },
            v = function(e) {
                try {
                    var n = JSON.stringify(e);
                    localStorage.setItem(s, n)
                } catch (r) {
                    t.debug("can't save mailing lists to storage", r)
                }
            },
            m = function() {
                var e = [];
                try {
                    e = JSON.parse(localStorage.getItem(s));
                    if (!Array.isArray(e)) throw new Error("MAINLING_LIST should be array")
                } catch (n) {
                    t.debug("can't load mailing lists from storage", n)
                }
                return e || []
            },
            g = function(e) {
                if (!e || !e.mailingListIds) {
                    t.log("mailingListIds should be specified");
                    return
                }
                var n = m(),
                    r = n.indexOf(e.mailingListIds) > -1;
                e.notShowIfFilled && r ? t.log("Mailing list with ids " + e.mailingListIds + " already shown") : tp.template.show(e)
            },
            y = function(e) {
                switch (e.event) {
                    case "newsletterSignupSubmission":
                        var t = m();
                        t.indexOf(e.params.mailingListIds) === -1 && (t.push(e.params.mailingListIds), v(t))
                }
            },
            b = function(t) {
                return function() {
                    return e('<pnespwgtplaceholder holdername="' + t + '"></pnespwgtplaceholder>')
                }
            },
            w = function() {
                return {
                    onrecsloaded: function(e) {
                        return function(r) {
                            if (r.countOfRecs === 0) {
                                f.closeWidget({
                                    widget: e,
                                    skipOnclose: !0
                                });
                                return
                            }
                            f.fixWidgetModalWidth(e, !0), n.__protected__.logEspMicroConversion(e.trackingId, e.widgetId, "init", a), t.debug("creating recommendation widget: ", e.config)
                        }
                    },
                    onclick: function(e) {
                        return function(t) {
                            var r = {
                                href: t.url
                            };
                            n.__protected__.logEspMicroConversion(e.trackingId, e.widgetId, "click", u, r)
                        }
                    },
                    onclose: function(e) {
                        return function() {
                            var t = {
                                event: "widgetClosed"
                            };
                            n.__protected__.logEspMicroConversion(e.trackingId, e.widgetId, "close", a, t)
                        }
                    }
                }
            },
            E = function() {
                f.clearWidgets(), o = null, delete window.PianoESP
            },
            S = function(e) {
                if (!o) return;
                typeof e == "function" && o.then(e)
            };
        return setTimeout(function() {
            tp.addHandler("logout", function() {
                v([])
            });
            var e = i.getProvider();
            e.registerCallback && e.registerCallback("logout", function() {
                v([])
            })
        }, l), {
            name: "pianoEsp",
            __protected__: {
                init: c,
                setVisitorId: h,
                showRecommendation: d,
                showNewsletterSignup: g,
                offerMessageReceiver: y
            },
            __private__: {
                removeWidgetsAndSdk: E,
                getWidgetCallbacks: w,
                onInit: S
            }
        }
    }), tp.define("versionService", [], function() {
        function t() {
            return e
        }

        function n() {
            window.__tpVersion = t()
        }
        var e = "10.33.0, server-v10.33.0";
        return n(), {
            name: "versionService",
            getTinypassVersion: t
        }
    }), tp.define("versionService", function() {}), tp.define("amp", ["jq", "util", "api", "user", "pianoId"], function(e, t, n, r, i) {
        function o() {
            window.location.href = t.getQueryParamByName(s.__private__.RETURN_URL) + "#success=true"
        }

        function u(n) {
            if (n && n.userState && e.isPlainObject(n.userState)) {
                var r = Object.keys(n.userState);
                if (r.filter(s.__private__.isUserStateNameValid).length !== r.length) return t.error("user_state accept only contain letters, numbers and underscore"), !1
            }
            return !0
        }

        function a(n) {
            n = n ? n : {};
            var u = r.getProvider();
            if (u.getName() !== i.getName()) {
                t.log("Current user provider" + u.name + " is not allowed for amp");
                return
            }
            var a;
            n.loginSuccess && e.isFunction(n.loginSuccess) ? a = n.loginSuccess : a = o;
            var f = function() {
                    s.__private__.bindUserWithReaderId({}, a)
                },
                l = e.extend({}, s.__private__.globalConfig, n);
            if (r.isUserValid()) {
                f();
                return
            }
            l.loginSuccess = f, i.show(l)
        }

        function f(t) {
            t = e.isFunction(t) ? t : o;
            var n = r.getProvider();
            n.getName() === i.getName() ? i.logout(function() {
                s.__private__.unbindUserWithReaderId(t)
            }) : s.__private__.unbindUserWithReaderId(t)
        }

        function l(e) {
            return /^\w+$/i.test(e)
        }

        function c(t) {
            var n = r.getProvider().getName();
            n === i.getName() && (t ? t = e.extend(!0, t, {
                userProvider: n
            }) : t = {
                userProvider: n
            });
            var o = {
                user_transient: !0,
                user_provider: s.__private__.composerOnlyProvider
            };
            t && t.readerId && (o.reader_id = t.readerId), t && t.userToken && (o.user_token = t.userToken), t && t.userProvider && (o.user_provider = t.userProvider, o.user_transient = !1);
            if (!u(t)) return !1;
            t && t.userState && (o.user_state = JSON.stringify(t.userState));
            var a = function(n) {
                n.code === 0 ? t.loginSuccess && e.isFunction(t.loginSuccess) && t.loginSuccess() : t.loginFail && e.isFunction(t.loginFail) && t.loginFail()
            };
            s.__private__.bindUserWithReaderId(o, a)
        }

        function h(e) {
            var r = {};
            r.reader_id = t.getQueryParamByName(s.__private__.READER_ID);
            if (!r.reader_id) {
                t.log("reader_id cannot be empty");
                return
            }
            n.callApi(s.__private__.unbindURL, r, e)
        }

        function p(e, r) {
            var i = e || {};
            i.reader_id || (i.reader_id = t.getQueryParamByName(s.__private__.READER_ID));
            if (!i.reader_id) {
                t.log("reader_id cannot be empty");
                return
            }
            n.callApi(s.__private__.bindURL, i, r)
        }
        var s = {
            __private__: {},
            __protected__: {}
        };
        return s.name = "amp", s.showLogin = a, s.logout = f, s.login = c, s.__private__.composerOnlyProvider = "publisher_user", s.__private__.globalConfig = {
            displayMode: "inline",
            containerSelector: "body",
            loginSuccess: s.__private__.bindUserWithReaderId
        }, s.__private__.bindURL = "/amp/login", s.__private__.unbindURL = "/amp/logout", s.__private__.READER_ID = "reader_id", s.__private__.RETURN_URL = "return", s.__private__.bindUserWithReaderId = p, s.__private__.unbindUserWithReaderId = h, s.__private__.isUserStateNameValid = l, s
    }), tp.define("amp", function() {}), tp.define("performanceMetrics", ["postmessage"], function(e) {
        function u() {
            if (!window.performance || !window.PerformanceObserver) return;
            if (typeof performance.getEntries != "function") return;
            var t = window.PerformanceObserver.prototype.observe;
            window.PerformanceObserver.prototype.observe = function() {
                try {
                    t.apply(this, arguments)
                } catch (e) {}
            }, e.subscribe(o, function(e) {
                r = e.sender, n = !0, c()
            });
            var i = performance.getEntries();
            a(i);
            var s = new PerformanceObserver(function(e) {
                a(e.getEntries())
            });
            s.observe({
                entryTypes: ["measure", "resource"]
            })
        }

        function a(e) {
            e.forEach(function(e) {
                f(e)
            })
        }

        function f(e) {
            if (!p(e)) return;
            l(e)
        }

        function l(e) {
            if (!h()) {
                i.push(e);
                return
            }
            i.push(e), c()
        }

        function c() {
            if (!h()) return;
            i.forEach(function(t) {
                e.send(s, {
                    entry: t
                }, r)
            }), i = []
        }

        function h() {
            return n && r
        }

        function p(e) {
            return t.some(function(t) {
                return e.name.match(t.resourceRegExp)
            })
        }
        var t = [{
                resourceRegExp: new RegExp("/checkout/offer/show"),
                label: "showOffer"
            }, {
                resourceRegExp: new RegExp("tinypass.min.js$"),
                label: "tinypassMinJS"
            }, {
                resourceRegExp: new RegExp("/xbuilder/experience/execute"),
                label: "experienceExecute"
            }],
            n = !1,
            r, i = [],
            s = "EVENT_TP_PERFORMANCE_DATA",
            o = "EVENT_LOGGER_READY";
        return u(), {
            name: "performanceMetrics"
        }
    }), tp.define("swg", ["postmessage", "user", "jq", "util", "eventUtils"], function(e, t, n, r, i) {
        function h(e) {
            if (u.hasCallback(s)) {
                var t = {
                    type: "swg",
                    flow: e
                };
                u.fireCallbacks(s, t, null, !0)
            }
        }

        function p(e) {
            var t = n.Deferred();
            return tp.api.callApi("/swg/check", {
                entitlement: JSON.stringify(e)
            }, function(e) {
                e.code !== 0 && (r.log("swg: check subscription response - " + e.message), t.reject()), t.resolve(e.CheckSubscriptionResponse)
            }), t.promise()
        }

        function d(e) {
            var t = n.Deferred();
            return tp.api.callApi("/swg/check/external", {
                entitlements: JSON.stringify(e)
            }, function(e) {
                e.code !== 0 && (r.log("swg: check external entitlement response - " + e.message), t.reject());
                var n = e.data;
                n || (r.log("swg: check external entitlement empty response"), t.reject()), t.resolve(n)
            }), t.promise()
        }

        function v(t, n, i, s, o) {
            tp.api.callApi("/swg/subscribe", {
                term_id: s,
                purchase_data: JSON.stringify(n),
                user_data: JSON.stringify(i)
            }, function(n) {
                if (n.code !== 0) {
                    r.log("swg: subscribe response - " + n.message);
                    return
                }
                var i = n.data;
                m(i), e.broadcast("swgCheckoutComplete"), t.complete().then(function() {
                    h(o)
                }).catch(function(e) {
                    r.log("swg: complete failed:", e)
                })
            })
        }

        function m(e) {
            e && t.getProvider().loginByToken && t.getProvider().loginByToken(e)
        }
        var s = "externalCheckoutComplete",
            o = {
                LOGIN_PROMPT: "loginPrompt",
                DEFERRED_ACCOUNT_CREATION: "deferredAccountCreation",
                BUY: "buy"
            },
            u = i.createEventManager([s]),
            a = !1,
            f = !1,
            l;
        window.SWG = window.SWG || [], window.SWG.push(function(e) {
            e.setOnPaymentResponse(function(e) {
                if (f) return;
                r.debug("swg: onPaymentResponse is triggered"), f = !0, e.then(function(e) {
                    r.debug("swg: onPaymentResponse", e), v(e, e.purchaseData, e.userData, l, o.BUY)
                }).catch(function(e) {
                    r.log("swg: onPaymentResponse failed", e)
                })
            })
        });
        var c = function() {
            window.SWG.push(function(e) {
                e.getEntitlements().then(function(t) {
                    a = !0, r.debug("swg: getEntitlements", t);
                    if (t.enablesThis()) {
                        var n = t.getEntitlementForSource("google");
                        if (!n) {
                            var i = t.entitlements;
                            i && d(i).then(function() {
                                r.debug("swg: checkExternalEntitlement"), t.ack()
                            }, function() {
                                r.log("swg: checkExternalEntitlement failed")
                            });
                            return
                        }
                        p(n).then(function(n) {
                            if (f) {
                                r.debug("swg: onPaymentResponse is already triggered. Skipping entitlements flow.");
                                return
                            }
                            if (!n) return;
                            switch (n.type) {
                                case "USER_FOUND":
                                    r.debug("swg: user found, initiate login prompt");
                                    var i = n.user_token;
                                    e.showLoginPrompt().then(function() {
                                        m(i), h(o.LOGIN_PROMPT)
                                    }).catch(function(e) {
                                        r.log("swg: showLoginPrompt failed", e)
                                    });
                                    break;
                                case "TERM_FOUND":
                                    r.debug("swg: term found, initiate deferred account creation");
                                    var s = n.term_id;
                                    e.completeDeferredAccountCreation({
                                        entitlements: t,
                                        consent: !0
                                    }).then(function(e) {
                                        r.debug("swg: completeDeferredAccountCreation", e), v(e, e.purchaseData, e.userData, s, o.DEFERRED_ACCOUNT_CREATION)
                                    }).catch(function(e) {
                                        r.log("swg: completeDeferredAccountCreation failed", e)
                                    });
                                    break;
                                default:
                                    r.debug("swg: check subscription response type " + n.type + ". Nothing to do")
                            }
                        }, function() {
                            r.log("swg: checkSubscription failed")
                        }), t.ack()
                    }
                }).catch(function(e) {
                    r.log("swg: get entitlements failed", e)
                })
            })
        };
        e.subscribe("swgCheckoutStart", function(e) {
            a || r.log("swg: incorrect SwG configuration. Please make sure that Experience user segment is configured properly. Details at https://docs.piano.io/subscribe-with-google/#SwGscript");
            var t = e.params.sku;
            l = e.params.termId, window.SWG.push(function(e) {
                e.subscribe(t)
            })
        });
        var g = !1,
            y = function(e) {
                if (g) return;
                if (e) {
                    r.debug("swg: rendering swg markup with config:", e);
                    var t = '{\n   "@context": "http://schema.org",\n   "@type": "CreativeWork",\n   "isAccessibleForFree": ' + e.isAccessibleForFree;
                    e.isAccessibleForFree === !1 && e.productId && (t = t + ",\n" + '   "isPartOf": {\n' + '       "@type": ["CreativeWork", "Product"],\n' + '       "name" : "' + e.resourceName + '",\n' + '       "productID": "' + e.productId + '"\n' + "   }"), t += "\n}";
                    var n = document.createElement("script");
                    n.type = "application/ld+json", n.innerHTML = t, document.getElementsByTagName("script")[0].parentNode.appendChild(n), g = !0
                }
            },
            b = !1,
            w = function() {
                if (b) return;
                r.debug("swg: adding swg.js library");
                var e = document.createElement("script");
                e.type = "text/javascript", e.setAttribute("subscriptions-control", "manual"), e.async = !0, e.src = "https://news.google.com/swg/js/v1/swg.js", document.getElementsByTagName("script")[0].parentNode.appendChild(e), b = !0
            };
        return {
            name: "swg",
            __protected__: {
                injectMarkup: y,
                addLibrary: w,
                initSwgFlow: c
            },
            registerCallback: function(e, t) {
                u.addEvent(e), u.registerCallback(e, t)
            }
        }
    }), tp.define("swg", function() {}), tp.define("fbpixel", ["jq", "util"], function(e, t) {
        var n = !1,
            r = function() {
                if (n) return;
                var e = tp.getFbPixelId();
                if (!e) {
                    t.error("fbpixel: Facebook Pixel ID is not defined");
                    return
                }
                t.log("fbpixel: Initialize Facebook Pixel tracking", e), ! function(e, t, n, r, i, s, o) {
                    if (e.fbq) return;
                    i = e.fbq = function() {
                        i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments)
                    }, e._fbq || (e._fbq = i), i.push = i, i.loaded = !0, i.version = "2.0", i.queue = [], s = t.createElement(n), s.async = !0, s.src = r, o = t.getElementsByTagName(n)[0], o.parentNode.insertBefore(s, o)
                }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js"), fbq("set", "autoConfig", "false", e), fbq("init", e), n = !0
            },
            i = function(e, r, i) {
                if (!n) {
                    t.log("fbpixel: Skip tracking event - Facebook Pixel is not initalized", r, i);
                    return
                }
                i || (i = {}), t.log("fbpixel: Track Facebook Pixel event", r, i), fbq(e, r, i)
            },
            s = function(e, t) {
                i("track", e, t)
            },
            o = function(e, t) {
                i("trackCustom", e, t)
            },
            u = function() {
                return n
            };
        return {
            name: "fbpixel",
            __private__: {
                isInitialized: u
            },
            __protected__: {
                init: r
            },
            trackEvent: s,
            trackCustomEvent: o
        }
    }), tp.define("fbsubscriptions", ["jq", "util", "fbpixel", "offer", "pianoId", "user", "api"], function(e, t, n, r, i, s, o) {
        function c() {
            if (u) return;
            n.__protected__.init(), r.registerCallback("loaded", function() {
                var e = t.getQueryParamByName("surface");
                (e === "meter_limit_reached" || e === "locked_article") && !tp.inappBrowserReturn && b("ViewPaywall", {
                    surface: "IA"
                })
            });
            var e = function(e) {
                    p().then(function() {
                        e.registration ? b("CreateAccount") : b("LogIntoAccount", {
                            is_subscriber: !!a
                        }), !a || setTimeout(function() {
                            m()
                        }, 200)
                    })
                },
                i = function() {
                    s.isUserValid() && d()
                };
            tp.addHandler("loginSuccess", e), tp.addHandler("experienceExecute", i), r.registerCallback("alreadyPurchased", function(e) {
                v(e.rid)
            }), r.registerCallback("startCheckout", function(e) {
                y("InitiateCheckout", {
                    offer_code: e.offerId,
                    campaign_code: e.termId
                })
            }), r.registerCallback("complete", function(e) {
                e.hasOwnProperty("chargeCurrency") && e.hasOwnProperty("chargeAmount") && y("Purchase", {
                    currency: e.chargeCurrency,
                    value: e.chargeAmount,
                    offer_code: e.offerId,
                    campaign_code: e.termId
                }), v(e.rid)
            }), r.registerCallback("close", function() {
                m()
            }), u = !0
        }

        function h() {
            var t = e.Deferred();
            return setTimeout(function() {
                t.resolve()
            }, tp.redirectToFbTimeout * 1e3), t.promise()
        }

        function p(n) {
            var r = e.Deferred(),
                i = {
                    aid: tp.aid,
                    rid: "",
                    account_linking_token: t.getQueryParamByName("account_linking_token"),
                    user_token: s.getProvider().getToken(),
                    user_provider: s.getProvider().getName()
                };
            return n && (i.rid = n), o.callApi("/fbia/subscriptionPayload/generate", i, function(e) {
                e && e.data && (a = e.data), r.resolve()
            }), r.promise()
        }

        function d() {
            p().then(function() {
                a && m()
            })
        }

        function v(e) {
            if (!e) {
                t.error("fbsubscriptions: 'rid' could not be empty on generating subscription payload");
                return
            }
            var n = h(),
                r = p(e);
            t.__protected__.waitAllPromises([n, r]).then(function() {
                m()
            })
        }

        function m() {
            var e = t.getQueryParamByName("account_linking_token"),
                n = t.getQueryParamByName("redirect_uri") + "?account_linking_token=" + encodeURIComponent(e);
            a && (n += "&subscription_payload=" + encodeURIComponent(a)), window.location = n
        }

        function g() {
            p().then(function() {
                m()
            })
        }

        function y(e, t) {
            if (f[e]) return;
            f[e] = !0, n.trackEvent(e, t)
        }

        function b(e, t) {
            if (l[e]) return;
            l[e] = !0, n.trackCustomEvent(e, t)
        }
        var u = !1,
            a = "",
            f = {},
            l = {},
            w = function() {
                return u
            };
        return {
            name: "fbsubscriptions",
            checkUserAccessAndRedirectToFb: g,
            __private__: {
                isInitialized: w
            },
            __protected__: {
                init: c
            }
        }
    }), tp.define("doubleOptIn", ["jq", "util", "api", "user", "pianoId"], function(e, t, n, r, i) {
        function o() {
            var t = e.Deferred();
            return n.callApi(s, {}, function(e) {
                t.resolve(e)
            }), t.promise()
        }

        function u() {
            if (!tp.user.isUserValid()) return;
            o().then(function(e) {
                e && e.data === !1 && i.showEmailConfirmationRequired()
            })
        }
        var s = "/email/confirmation/check";
        return {
            name: "doubleOptIn",
            check: function() {
                return u()
            }
        }
    }), tp.define("doubleOptIn", function() {}), tp.define("tinypassErrorHandler", ["postmessage", "api", "jq"], function(e, t, n) {
        function f(e, t) {
            var n = e.map(JSON.stringify);
            return n.indexOf(JSON.stringify(t)) !== -1
        }

        function l(e, t) {
            var n = e - .5 + Math.random() * (t - e + 1);
            return n = Math.round(n), n
        }

        function c(e) {
            if (f(u, e)) return;
            u.push(e)
        }

        function h(e) {
            var t = e.params;
            if (!Array.isArray(t)) return;
            for (var n = 0; n < t.length; n++) c(t[n])
        }

        function p(e) {
            return e.indexOf("tinypass") === -1
        }

        function d(e) {
            var t = {},
                n = "error" in e && e.error;
            t.stack = n ? e.error.stack : "n/a", t.message = n ? e.error.message : "n/a", t.userAgent = navigator.userAgent;
            if (p(t.stack)) return;
            c(t)
        }

        function v() {
            window.addEventListener && window.addEventListener("error", d)
        }

        function m() {
            window.removeEventListener("error", d), e.unsubscribe(r, h)
        }

        function g() {
            e.subscribe(r, h), v(), w()
        }

        function y() {
            return l(0, s) !== 0
        }

        function b(e, t) {
            m();
            if (u.length === 0) return;
            n.post(e, {
                log_message: JSON.stringify(t)
            })
        }

        function w() {
            if (y()) return;
            if (a.indexOf("sandbox") !== -1) return;
            setTimeout(function() {
                b(a, u)
            }, o)
        }

        function S(e) {
            try {
                var t = {};
                e instanceof Error ? (t.stack = e.stack, t.message = e.message) : t.stack = JSON.stringify(e);
                if (p(t.stack)) return;
                c(t)
            } catch (n) {}
        }
        var r = "EVENT_TP_ERROR_HANDLER",
            i = "/anon/error/log",
            s = 1e4,
            o = 3e4,
            u = [],
            a = t.getEndpoint() + i;
        try {
            g()
        } catch (E) {
            console.warn("Cannot start watching errors")
        }
        return {
            name: "tinypassErrorHandler",
            addError: S
        }
    }), tp.define("tinypassErrorHandler", function() {}), tp.define("newscycle", ["jq", "user", "api", "postmessage", "util"], function(e, t, n, r, i) {
        function o() {
            var t = e.Deferred(),
                r = {
                    aid: tp.aid
                };
            return n.callApi(s.__private__.SYNCHRONIZE_SUBSCRIPTIONS_URL, r, function(e) {
                e && e.data && t.resolve(e.data), t.reject(e.message)
            }), t.promise()
        }

        function u(e) {
            r.broadcast("NEWSCYCLE_HAS_BEEN_SYNCHRONIZED_SUCCESS", {
                data: e
            })
        }

        function a(e) {
            i.error("newscycle module: sync request failed with error: " + e)
        }

        function f() {
            s.__private__.callSynchronization().then(s.__private__.subscriptionsHasBeenSynchronize, s.__private__.subscriptionsHasNotBeenSynchronize)
        }
        var s = {
            __private__: {},
            __protected__: {}
        };
        return s.name = "newscycle", s.syncSubscriptions = i.debounce(f, 1500), s.__private__.SYNCHRONIZE_SUBSCRIPTIONS_URL = "/externalVerification/synchronizeSubscriptions", s.__private__.callSynchronization = o, s.__private__.subscriptionsHasBeenSynchronize = u, s.__private__.subscriptionsHasNotBeenSynchronize = a, s
    }), tp.define("cxense", ["jq", "util", "recWidgetService"], function(e, t, n) {
        var r = n.__protected__.getInstance(),
            i = function() {
                var e = tp.cxenseSiteId;
                t.debug("c1x: setting siteId: ", e), window.cX.setSiteId(e)
            },
            s = function() {
                return typeof tp.c1XIntegrationVersion != "undefined" && tp.cxenseSiteId !== "" ? tp.c1XIntegrationVersion : "N/A"
            },
            o = function() {
                return typeof tp.cxCdnUrl != "undefined" && tp.cxCdnUrl !== "" ? tp.cxCdnUrl : "https://cdn.cxense.com"
            },
            u = function() {
                return typeof tp.cxenseSiteId != "undefined" && tp.cxenseSiteId !== ""
            },
            a = function(e) {
                return typeof window.cX != "undefined" && (e || typeof window.cX.CCE != "undefined")
            },
            f = function(e) {
                return typeof e.cxenseCustomerPrefix != "undefined" && e.cxenseCustomerPrefix !== ""
            },
            l = function(e) {
                if (!u() && !f(e)) return;
                if (!u() && f(e)) {
                    t.debug("cxense: can not send pageview because siteId is not configured using `setCxenseSiteId`");
                    return
                }
                if (u() && !f(e)) {
                    t.debug("cxense: can not send pageview because customer prefix is not configured in app settings");
                    return
                }
                s() === "v2" ? c(e) : g(e)
            },
            c = function(e) {
                var n = window.cX = window.cX || {};
                n.callQueue = n.callQueue || [], n.callQueue.push(["setSiteId", tp.cxenseSiteId]), e.uid && e.uid !== "anon" && e.uid !== "" && (n.callQueue.push(["addExternalId", {
                    id: e.uid,
                    type: e.cxenseCustomerPrefix
                }]), t.debug("c1x: adding externalId", {
                    uid: e.uid,
                    prefix: e.cxenseCustomerPrefix
                })), n.callQueue.push(["invoke", function() {
                    t.debug("c1x: sending pageview event"), window.cXNative = {
                        getUserId: function() {
                            return e.browserId
                        }
                    }
                }]), n.callQueue.push(["setRandomId", e.pageViewId]), n.callQueue.push(["sendPageViewEvent"])
            },
            h = function() {
                var e = t.__protected__.getCookie("cX_P"),
                    n = null;
                try {
                    t.__protected__.hasLocalStorage() && (n = localStorage.getItem("_cX_P"))
                } catch (r) {}
                var i = e || n;
                return i ? (t.debug("c1x: existing cX_P value has been found: ", i), i) : (t.debug("c1x: can not find existing cX_P value, generating a new one"), t.__protected__.randomStringCxCompatible())
            },
            p = function() {
                if (u() && a(!0)) return;
                var e = document.getElementsByTagName("script")[0],
                    n = document.createElement("script");
                n.onerror = function(e) {
                    t.debug("c1x: error during load of cx.js. ", e)
                }, n.onload = function() {
                    t.debug("c1x: cx.js has been successfully loaded")
                }, n.async = !0, n.type = "text/javascript", tp.c1XLoadCce ? n.src = o() + "/" + "cx.cce.js" : n.src = o() + "/" + "cx.js", t.debug("c1x: start loading cx.js on the page..."), e.parentNode.insertBefore(n, e)
            },
            d = function(e) {
                if (!u()) {
                    t.debug("c1x: can not show recommendation because siteId is not configured using `setCxenseSiteId`");
                    return
                }
                if (!a()) {
                    t.debug("c1x: can not show recommendation because cX.CCE object is not found");
                    return
                }
                var n = e || {};
                r.showRecommendation({
                    widgetConfig: n,
                    createPlaceholderFn: v(n.widgetId, n.displayMode)
                }), m(function() {
                    i(), window.cX.CCE.run({
                        widgetId: n.widgetId,
                        targetElementId: "cxense-" + n.widgetId
                    }, null, function(e) {
                        n.displayMode === "modal" && e && e.response && !e.response.error && r.fixWidgetModalWidth(r.findWidget(n.widgetId))
                    })
                })
            },
            v = function(t, n) {
                return function() {
                    return e('<div class="tp-cxense-placeholder-' + n + ' tp-widget-placeholder">' + '<div id="cxense-' + t + '"></div></div>')
                }
            },
            m = function(e) {
                window.cX.CCE.callQueue.push(["invoke", e])
            },
            g = function(e) {
                if (!a(!0)) {
                    t.debug("c1x: can not send pageview because cX object is not found");
                    return
                }
                t.debug("c1x: sending pageview event"), window.cX.callQueue.push(["invoke", function() {
                    i(), e.uid && e.uid !== "anon" && e.uid !== "" && (window.cX.addExternalId({
                        id: e.uid,
                        type: e.cxenseCustomerPrefix
                    }), t.debug("c1x: adding externalId", {
                        uid: e.uid,
                        prefix: e.cxenseCustomerPrefix
                    })), window.cX.sendPageViewEvent()
                }])
            },
            y = function(e) {
                return a(e)
            },
            b = function(t, n, r) {
                n = n || 0, r = r || 0;
                var i = 0,
                    s = e.Deferred(),
                    o = function() {
                        y(t) ? s.resolve(!0) : i >= r ? s.reject(t ? "c1x: cX object is not found after " + r + " retries with " + n + "ms interval" : "c1x: cX and cX.CCE objects are not found after " + r + " retries with " + n + "ms interval") : (i++, setTimeout(o, n))
                    };
                return y(t) ? s.resolve(!0) : setTimeout(o, n), s
            };
        return {
            name: "cxense",
            __protected__: {
                showRecommendation: d,
                sendPageViewEvent: l,
                isActivated: u,
                isConfiguredPollingAsync: b,
                invokeCxenseFn: m,
                getC1XIntegrationVersion: s,
                getOrGenerateCxCompatibleBid: h,
                loadCxLibIfNeeded: p
            }
        }
    }), tp.define("recWidgetService", ["jq", "util", "containerUtils"], function(e, t, n) {
        var r = function(e) {
                return e.displayMode === "inline"
            },
            i = function(e) {
                return e.displayMode === "modal"
            },
            s = function(n) {
                var r = e(n.containerSelector).first(),
                    i = "widget-id-" + t.randomString(),
                    s = {
                        singleContainer: r.length ? r[0] : undefined,
                        displayMode: n.displayMode || "modal",
                        showCloseButton: n.showCloseButton,
                        iframeParams: {
                            iframeId: i,
                            containerSelector: n.containerSelector,
                            width: n.width,
                            height: n.height
                        }
                    };
                return {
                    uuid: i,
                    widgetId: n.widgetId,
                    placeholder: n.placeholder,
                    trackingId: n.trackingId,
                    config: s
                }
            },
            o = function(t, s) {
                var o;
                if (r(t)) {
                    var u = n.initInlineContainer(t);
                    o = u.container
                } else i(t) && (o = n.getModalContainer(t, function() {
                    e.isFunction(s) && s()
                }));
                return o
            },
            u = function(t, n) {
                e.each(n, function(n, r) {
                    e.isFunction(r) && (t[n] = r(t))
                })
            },
            a = function() {
                var a = [],
                    f = null,
                    l = function(e) {
                        var r = e.widgetConfig || {},
                            l = e.createPlaceholderFn,
                            c = r.widgetId;
                        if (!c) throw new Error("widgetId should be specified");
                        if (d(c)) {
                            t.log("widget with id " + r.widgetId + " already initialize");
                            return
                        }
                        if (i(r) && f) {
                            t.log("modal widget already shown");
                            return
                        }
                        var p = s(r),
                            v = p.config,
                            m = l();
                        return p.container = o(v, function() {
                            h({
                                widget: p
                            })
                        }), p.element = m.appendTo(p.container), i(v) && (f = p, (t.isIphone() || t.isIOsUiWebView() || t.isAndroid()) && n.__private__.mobileModalFix.modalOpened()), u(p, e.widgetCallbacks), a.push(p), p
                    },
                    c = function(t, n, r) {
                        a.forEach(function(i) {
                            if (i.widgetId !== n.toString()) return;
                            var s = i["on" + t];
                            e.isFunction(s) && s(r)
                        })
                    },
                    h = function(t) {
                        var n = t || {},
                            s = n.widget || {};
                        r(s.config) ? s.container.empty() : i(s.config) && (v(s), s.container.detach()), !n.skipOnclose && e.isFunction(s.onclose) && s.onclose(), a = a.filter(function(e) {
                            return e.uuid !== s.uuid
                        })
                    },
                    p = function() {
                        a = [], f = null
                    },
                    d = function(e) {
                        return a.filter(function(t) {
                            return e === t.widgetId
                        })[0]
                    },
                    v = function() {
                        if (!f) return;
                        n.closeModal(f), f.container.empty();
                        var e = n.__private__.mobileModalFix;
                        e.isIphoneCaretFixed && e.modalClosed(), f = null
                    },
                    m = function(e, t) {
                        if (e && !i(e.config)) return;
                        var r = e.container,
                            s = t ? r.find("iframe") : r.find(".tp-widget-placeholder");
                        n.checkBackdropAndContainer(e, !0, !0), setTimeout(function() {
                            n.__protected__.setElementSizes(r, {
                                width: s.width()
                            })
                        }, 100)
                    };
                return {
                    showRecommendation: l,
                    fireWidgetCallback: c,
                    findWidget: d,
                    clearWidgets: p,
                    closeWidget: h,
                    fixWidgetModalWidth: m
                }
            },
            f = function(t) {
                var n = document.getElementsByTagName("script")[0],
                    r = document.createElement("script");
                t.id && r.setAttribute("id", t.id), e.isFunction(t.onerror) && (r.onerror = t.onerror), e.isFunction(t.onload) && (r.onload = t.onload), t.defer && (r.defer = !0), r.type = "text/javascript", r.src = t.src, n.parentNode.insertBefore(r, n)
            },
            l = function() {
                return a()
            };
        return {
            name: "recWidgetService",
            __protected__: {
                getInstance: l,
                insertWidgetLib: f
            }
        }
    }), tp.define("sha1", [], function() {
        function e(e, t) {
            function n(e, t) {
                var n = e << t | e >>> 32 - t;
                return n
            }

            function r(e) {
                var t = "",
                    n, r, i;
                for (n = 0; n <= 6; n += 2) r = e >>> n * 4 + 4 & 15, i = e >>> n * 4 & 15, t += r.toString(16) + i.toString(16);
                return t
            }

            function i(e) {
                var t = "",
                    n, r;
                for (n = 7; n >= 0; n--) r = e >>> n * 4 & 15, t += r.toString(16);
                return t
            }

            function s(e) {
                e = e.replace(/\r\n/g, "\n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(r & 63 | 128))
                }
                return t
            }
            t = t || 32;
            var o, u, a, f = new Array(80),
                l = 1732584193,
                c = 4023233417,
                h = 2562383102,
                p = 271733878,
                d = 3285377520,
                v, m, g, y, b, w;
            e = s(e);
            var E = e.length,
                S = new Array;
            for (u = 0; u < E - 3; u += 4) a = e.charCodeAt(u) << 24 | e.charCodeAt(u + 1) << 16 | e.charCodeAt(u + 2) << 8 | e.charCodeAt(u + 3), S.push(a);
            switch (E % 4) {
                case 0:
                    u = 2147483648;
                    break;
                case 1:
                    u = e.charCodeAt(E - 1) << 24 | 8388608;
                    break;
                case 2:
                    u = e.charCodeAt(E - 2) << 24 | e.charCodeAt(E - 1) << 16 | 32768;
                    break;
                case 3:
                    u = e.charCodeAt(E - 3) << 24 | e.charCodeAt(E - 2) << 16 | e.charCodeAt(E - 1) << 8 | 128
            }
            S.push(u);
            while (S.length % 16 != 14) S.push(0);
            S.push(E >>> 29), S.push(E << 3 & 4294967295);
            for (o = 0; o < S.length; o += 16) {
                for (u = 0; u < 16; u++) f[u] = S[o + u];
                for (u = 16; u <= 79; u++) f[u] = n(f[u - 3] ^ f[u - 8] ^ f[u - 14] ^ f[u - 16], 1);
                v = l, m = c, g = h, y = p, b = d;
                for (u = 0; u <= 19; u++) w = n(v, 5) + (m & g | ~m & y) + b + f[u] + 1518500249 & 4294967295, b = y, y = g, g = n(m, 30), m = v, v = w;
                for (u = 20; u <= 39; u++) w = n(v, 5) + (m ^ g ^ y) + b + f[u] + 1859775393 & 4294967295, b = y, y = g, g = n(m, 30), m = v, v = w;
                for (u = 40; u <= 59; u++) w = n(v, 5) + (m & g | m & y | g & y) + b + f[u] + 2400959708 & 4294967295, b = y, y = g, g = n(m, 30), m = v, v = w;
                for (u = 60; u <= 79; u++) w = n(v, 5) + (m ^ g ^ y) + b + f[u] + 3395469782 & 4294967295, b = y, y = g, g = n(m, 30), m = v, v = w;
                l = l + v & 4294967295, c = c + m & 4294967295, h = h + g & 4294967295, p = p + y & 4294967295, d = d + b & 4294967295
            }
            var w = i(l) + i(c) + i(h) + i(p) + i(d);
            return w.toLowerCase().slice(0, t)
        }
        return {
            name: "sha1",
            hash: e
        }
    }), tp.define("sha1", function() {}), tp.define("itp", ["jq"], function(e) {
        function i(i, s) {
            if (!n) return;
            var o = i || 730,
                u = s || 2500;
            t && clearTimeout(t), t = setTimeout(function() {
                e.ajax({
                    url: n,
                    data: {
                        maxAge: o * r
                    },
                    crossDomain: !0,
                    xhrFields: {
                        withCredentials: !0
                    },
                    error: function(e, t) {
                        console.error(t)
                    }
                })
            }, u)
        }
        var t, n = tp.cloudflareWorkerUrl,
            r = 3600;
        return {
            name: "itp",
            synchronizeCookie: i
        }
    }),
    function(e) {
        var t = document,
            n = "appendChild",
            r = "styleSheet",
            i = t.createElement("style");
        i.type = "text/css", t.getElementsByTagName("head")[0][n](i), i[r] ? i[r].cssText = e : i[n](t.createTextNode(e))
    }("/*---------------------------------------------------------------------------------------\n    Backdrop\n---------------------------------------------------------------------------------------*/\n\n.tp-backdrop {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: #121214;\n    z-index: 300000;\n    opacity: 0;\n    transition: opacity .25s linear;\n}\n\n.tp-backdrop.tp-active {\n    opacity: .9;\n}\n\n/*---------------------------------------------------------------------------------------\n    Modal container close button\n---------------------------------------------------------------------------------------*/\n\n.tp-modal .tp-close.tp-square {\n    background: #ccc;\n    border-radius: 0;\n    border: 0;\n    top: 0;\n    right: -40px;\n}\n\n.tp-modal .tp-close {\n    display: none;\n    position: absolute;\n    top: -20px;\n    right: -20px;\n    width: 40px;\n    height: 40px;\n    background: #fff url(\"data:image/svg+xml,%3Csvg width='11' height='11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 1.368L9.632 0 5.5 4.142 1.368 0 0 1.368 4.142 5.5 0 9.632 1.368 11 5.5 6.858 9.632 11 11 9.632 6.858 5.5 11 1.368z' fill='%23959595'/%3E%3C/svg%3E\") center center no-repeat;\n    border: none;\n    box-shadow: 0 0 10px 0 rgba(28, 37, 68, 0.15);\n    outline: none;\n    z-index: 300100;\n    border-radius: 40px;\n    opacity: 0;\n    cursor: pointer;\n    transform: scale(.25, .25);\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n}\n\n.tp-modal .tp-close:hover,\n.tp-modal .tp-close:focus {\n    box-shadow: 0 0 10px 2px rgba(28, 37, 68, 0.15);\n}\n\n.tp-modal .tp-close.tp-active {\n    display: block;\n    opacity: 1;\n    transform: scale(1, 1);\n}\n\n.tp-modal {\n    z-index: 300050;\n}\n\n@media screen and (max-width: 650px) {\n    .tp-modal .tp-close {\n        right: 0;\n    }\n}\n\n\n/*---------------------------------------------------------------------------------------\n    Modal\n---------------------------------------------------------------------------------------*/\n.tp-modal .tp-iframe-wrapper.tp-curtain {\n    width: 600px;\n    height: 480px;\n}\n\n.tp-modal-open {\n    overflow: hidden !important;\n    height: 100vh;\n    -webkit-overflow-scrolling: touch;\n}\n\n.tp-modal-open.tp-modal-resizing {\n    -webkit-overflow-scrolling: auto;\n}\n\n/*Bug fix of firefox v57*/\n.tp-modal-close {\n    overflow: auto;\n}\n\n.tp-iframe-wrapper {\n    position: relative;\n    margin: 50px auto;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.21);\n}\n\n.tp-iframe-wrapper.no-shadow {\n  box-shadow: unset;\n}\n\n.tp-modal {\n    overflow-x: hidden;\n    overflow-y: scroll;\n    display: none;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    transform: translate3d(0, 0, 0);\n}\n\n.tp-modal .tp-iframe-wrapper.tp-active {\n    transform: scale(1, 1);\n}\n\n.tp-modal .tp-message {\n    font-family: \"Graphik Web Regular\", Helvetica, Arial, sans-serif;\n    padding: 10px;\n}\n\n.tp-modal .tp-btn-container {\n    padding-left: 10px;\n    padding-bottom: 10px;\n}\n\n.tp-cxense-placeholder-modal {\n    width: 100%;\n    background-color: #fff;\n    max-width: 912px;\n    display: block;\n    overflow: hidden;\n    height: auto;\n    opacity: 1;\n}\n\n.tp-widget-placeholder > div::after {\n    display: block;\n    content: \"\";\n    clear: both;\n}\n\n.tp-btn {\n    text-decoration: none;\n    cursor: pointer;\n    padding: 0 18px;\n    line-height: 40px;\n    border-collapse: separate;\n    border-radius: 4px;\n    text-align: center;\n    vertical-align: middle;\n    display: inline-block;\n    color: #fff;\n    border: none;\n    box-shadow: inset 0 -1px 0 rgba(216, 218, 221, 0.0);\n    background: #3878D8;\n    background-position: bottom;\n    text-shadow: none;\n    font-family: \"Graphik Web Regular\", Helvetica, Arial, sans-serif;\n    white-space: nowrap;\n    outline: 0;\n}\n\n.tp-please-wait.tp-active {\n    display: block;\n    opacity: .9;\n    transition: opacity .25s linear;\n}\n\n.tp-please-wait {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background-color: #999;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    display: none;\n    text-align: center;\n    color: #fff;\n    font-weight: lighter;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 15px;\n}\n\n.tp-please-wait.tp-overlap {\n  position: fixed;\n  z-index: 300150;\n}\n\n.tp-please-wait > .tp-icon {\n    width: 46px;\n    height: 46px;\n    background-image: url('data:image/gif;base64,R0lGODlhMAAwAOZnAJmZmbe3t7m5uf39/bu7u7a2tri4uL29vcHBwfv7+/f397+/v/n5+cXFxf///7q6uv7+/svLy8nJydHR0fPz88PDw83NzcfHx76+vvX19by8vPHx8evr6+3t7ePj47W1tefn593d3e/v79vb2+np6c/Pz/z8/NfX19/f38DAwMLCwtPT09nZ2dXV1eXl5crKysbGxuHh4fr6+vj4+MTExJqamszMzMjIyM7OzvLy8tDQ0PT09NTU1Pb29tbW1t7e3uDg4Jubm+7u7urq6tjY2Ozs7Nra2vDw8NLS0uTk5Nzc3JycnObm5ujo6LGxsbKysrOzs+Li4qKiorS0tK+vr6ysrK2traioqKSkpK6urqmpqaWlpaOjo6ampqqqqqGhoZ6enqenp7CwsKCgoKurq5+fn52dnf///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMGY5MTc1YS1jNWIyLWQ5NDUtYTFjMS1kM2MwZjY3MmM3NWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjkyNDJGODQzODBBMTFFNDgzNzJBMzE2M0M3NkExREYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjkyNDJGODMzODBBMTFFNDgzNzJBMzE2M0M3NkExREYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGY0YmQyN2MtY2Q5Mi0xNTQzLTk4NzgtODVmNTVmNDQxOTkyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YTQ3MGYzNGUtMzgwOC0xMWU0LTkwNzctZjkzMmE2MjQ3OTQ2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQQAZwAsAAAAADAAMAAAB/+AZ4KDhIWGh4iJiouMjY6IZmINK0AkHUIcHj43T2aPnwBiJSRFHZciIkcbGzk5FEctUACfi1AjQxwcpaepq60UFDsZSQW0h1grJCS4uqZCqKqswMEZGT0hXcaDUx5NykO4RaXPvdLBwtY9OQLGAAggIE3eyxxAN1BhZUFBY2EfNiDQ9eihoOCLWY4ANGDCBN68FVYYURlhraCCGTOQIGSEwIULhvBYePlkxUVBjAwY2GgEJUkSjwwvbHwEYMLFGSkZEFjEBYUHlx7ZaROEAGdKGRmyJcLhoalLA0MJpTgqQwaQRGJiRInStEHUQhOqJhgrtBAAHjG0Rmkx8yuAJmP/x5Joe8YKECBpY1z5ashKXBMmPhi6gOIukJV8DaEADNhIoSUhUEhGQSaxISeABwyQ4WlQlR+gUfiwfOiIZs2CBx0IEQJ0CtKGJpwegIPQDdass8AuZEAzBAhXB01QQlwJlt2EtPz+LYSQjxHQR4BBPujLcggKCLGIPiIIdUFLHIh3MIAQESPojXj/XiPB+ASEeLCYz2L69yBJxichVIKIfyJcfHcGGAQMMcAQARDSABEnNFiFgFIUUMAHH0Q0yAMNNrjTd1pIKOFeg5Dhw4g+WCAgFAEEIOEXhCzBQwswtgDibmOkmGIBNRSCAIw88FABdVTYGICFhHjRIw8rrLDF/25lGOBkilIYAoAESa6AhEykAQCFAE4a8ARdZ1RhJRITTPAAaVUIoCaXASJSAZll6kBFYmE88MCaYijyBQ4T6KBDCSXMGVUYBBBgpwAB2JdIFX4CigMOAYC5CABWaFCooQ8cx0gBjuJggQUVtOnIFwUcoIGlhY7UCAAGPPqpDRFEoMGSi0gxBQYH5IqqFZIeAsAUr8IawQsSqIDPGEvUUMMSZWxBBQELLIABrqZqQEaviZDxgrDESnDDBRfA0EADNFSgAgIIpJBCtNQSQKs2Y2AQa7ffhjtuuSqcmy67GEChaFRaICCBt9/CIC4N5ZqL7roLGPBuYgCEIQC44R6csB++C0CBBbZRBdGFEwZgoEIFFaRwQAFZYLGegCy3zEggACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFQVYpJSNRTExJShMqVEGFlZaXgmQSUSAgTSQkQxwcRUUdHUM6VpishVk8Li5MnZ+ho6YdQkIiIihPrZhSFh5JSbGznrakp7siR0cbJ1zAhWIhUR7Ex7TKuM3QGxtFBdSCGjExUdjFLj8wT1djYGBnWlMvLrzgOTkUDdQpgABBh82DDirAnhAJx4+CwwitHqBAIRBdiyrlBFGJ0s/hjh00MFH58WPiQB2UMgoK8sPjjgwZyFX6wiIEyYkLVFaS8BFmhiNYKt1QEsLmDww6Lb3w2aPHiEJkRighGsJC0ksomvZQoAAKIQsjwirRUeOqpSVMuHJ1MUiLESNh/0d4MXvJidoZM5wIUsGCxdsXdDH9wDuDgY8zQXz07YsxsCUohRkw2LHEC5HLLJA4xiRCsuQnBk6IJoJ08yUGMlJLUCFa9CrTllLLSKAkgo/bh2FXIpOgdwISJVoIb1FGdyXfCShM4DHcjHFCYExIN6FgOY/rS54Pij5dAY4V4FdoHyRlgPkBOy4gWY8k6Pgq5s8M4JACyYT7ZMafeXB+QIgp990ngH4rQGDgAC+EocOCOkigHwUGGghFEBaUYGEJ4wXgwIYQMJAdARbigEMK2lGw4YZPnRGGiDhYYEEXxo2Rw4YMOKCXIBW4aIENFZQFmxgICAFBDhUQcoWLNtgQQetOplFRQAEfRPlFIQcoGUEEL3jlmBYBPPnka4SUccOVL7wggZZmcRlAlwVMkV0lWpQpwZw3aOCjSjU4YcCaaxYwzSVizCnBDRdcgIF7GUEhgAF7rnlFK1MMWugFMDQwIDBcOPGAAJwyGsBcwIhBKKUNNEADDRg40cWUQVAyBhZWBEAAAZt2asCj5VxBAwyVmlpBBSoggEAKCyyAwQEHaKDBrA/UGsCfGYEhQKmn/hrssMUem+yytG4qhnNXdXEADdZeS6yx2nJLABRSbMbFFAioYG626T5AxZS61QDrFAIgewABATxBhhR3AhMIACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFggs2RCgeLlFGgk5LhpOUhjVVNz9RHh5JLi5MICBNJCQgE041lauFSEAxMZudn6GjpUMcHCFTrJVfNigor7GcnqCjpLgcRUUdZ1u9hU9GPz/Bw5vGoaQkys0dQkPRhEohIdbCMUQqTltlQUFlXU4wP7nfQiIi4wsjSuXnUESo0ssKjw7g8ok4Es3ICH/lJmgZJ4hMCIVHjmy4sYqFEYf+UgCgOAiAjYUaN2wQMElKCxYeHfIiWQhDyg05hHQxBIMIEZgsPtCcdABnDgoUQhSycuKETxYLhlKycRQpBaGDIvhoesLGSKmGAMRAumNHElWCWvhYe2In2ElW/8ruyJDhiSAELfL6oPG2Egu6dAch4cEj75W+lJwA7kFB0IoVhG0grjSkh2UFZwI8fvxgMiUcCkIreHEGiekVXjxPKiBagZEbE2IjkaLa0JUZuGecsRA7tpnahnIz2FBCh3EdaIELWsKgOYMzJaJH/6r8TBDnz21IL/G7+pkyMsLLOAMDh3kcX7yf0ZIgQfghByzIt5Da+4f27VHstmDDBtbqOuCXgA1X9BdBBA2o14EJDCZQwBkvHHigW8A9MQCDJpwBxhkPRPDChwRUh8IAJA6ghCBdfCjBilgAl0WJJM50RgorSnDDAtRNxgEEEJBYRHJn2HjDBRdAoVoLPCbJEuIhGgxJJAxkTIaCA1Ty6IEhYzRwAQwwNNAAQW9hMUACVDrAQBiTeMGllw3Q8ESO4wDgxQdHODAAlRpU4gSbNFRQAQG0UTSGEwUUgMAGJoSAAytPtNlnBSog8AEXvXyRRQABFFrABx9M1AsVj6oQKQIpCEAFFmWcUYMqYHBBxgcGGIBppoWSFAYCoiJAagoLLIDBAQdoQAABDzwggACxzhrABy2SVEYAupLaKwa/BjssscciK2sAVPT1QAq8+lqtsMMae2ysdk2GBRQY+AqsteWem4V3VTwRAAEaPGBAAWLUR1EgACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFghoSLSExQEonNhhZhpOUkwBnDSw/KChAMTFRHh5JLi4eFlSXlauEOkohIZudn6FJpExMICBGUKyVUhIjI0qvsp6go6W5IE0kJDxYvoViPixGwq+xs8ikLsvNJEMgAdKCAUQs1tevLQhUWGAAS2NbZzQjzM5DQxwcMNIHTpxAZ23EBS/SdOjrV6SILwE+BBJBZyFMOUFejDAs0qFDg1UtfEQcKOFioRscOHYUYmBSmQktYkZ8YNLQg5VCRHCoV0gFDx4xWzypOYmAkJwiRLAoVGWF058aiFJ6kVTEkSMnkThd8UJqpR9Xj2yIourMhAlItFr0OomM2A1w/50IwnD2LAK2lU7AzZEDiSAcOnScXYvXEBW+OSgIOaOlhGMdNwpXIkGhMgUoHxw7Jid5koXKO3bAwICjNA4tnSmFDk2kgYXXFr6kNhQmg+0MIF7AtjDbkJTbGTrYGD68bG9BPZL3oBChefPjhAAomK7gzA3nEZZAFzSGuoINFV6IfzFm+5krM9IrIPFAgnsJV8yfSZ9eiZP3N6aYL8GgP4MIYdwg4AUqmFeEfwycUUMDFzR4AU+9OSHDhDL0oF0ADcIAQ0vH/ZAAhUYMoiEMDTQgRW9WJKCiioRgUGKJUc1GggkrDlFWGCXSQEMFcnW2gglA0miIADpWYCRChakwwMSSQLqEgJEqqIAAamyVcMaSS1Y3yRUVRInAl1R4BQIEEAxw5QAHVEKFlF+mkIIBsl0kgAIOOEDmkr440WYKCyyAARQnsjKGFTnUaSeZPJTjZp9+HnBAAFZMciIUBRSQgAMi1AlBBCYd0CcGGDiqAQGkPiCAAAYYEMCqlYJgqAwY1ATGB6A6esCoBDxgKqqqsloAAU0MQAJhNW1hgKi46npqqqsGUGkBYnTGhROklrors6t+UAV0XHghxgcBpFoAFFnEZ1IgACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFZ1UEFzonI0pEKxEHhpOUlV4VPiwsRiONISE/KChAKC9WlaiFVREnJ0REm51Kn6GjMVFRPmKplV8NLS0+rbBGnLOgtrceHkk6XLyFVjo8wMKumsa0yVHLSS4xU9CDKys81MEnJQdVgjU1YFhZCCfczC4uTEwI0ARISOTnaGjhVcWCPXwgQFxIVWDCBH/kbnQRJ0iLD4QJm1SoVEWHDof+CFAsBINJRhIkPkwaY6OER4e7RhoC0QQlCRBYDKXAUaKnjpgyCwmwOYSDj0JaLODgWUJAUEo3hhTlwAEKIRoWsuKg8bSSEaocivwYFMaGjawWcnad5CVskQ4d/2ISiGDWBoa1lVbAhTtBkIQIgCNMxDspC1whQjicufKicQSuhClFQSxCxJMnEiQ0Vhl50ovKlRsQyJw5TOdJTyofOeIDwY3XEk5TWn1kgwcaFy68XiK7UJkNwDdwgJE7d43ehIJsyMF8QwMY0GEcR96OefMKMBpopz6oDIXvFIRg0L6du6AdO767MNCAhvvB1KegR2+EivsKFZyYt5ChfwYJW+CHnyTckdCDf1MEgUAFKjT4DHU9RNgDBWacMUWDCCDAWW8jKOBhDycIgkWGJH6B3AweemiVIA9kmEIKBvQGwgw0KgACIV28mMICC1Bx2gQMBEljAIUUwCOPGFwRGdMCMgQZJAqGgHEAkhgcoORaCCQgQ5MM7AAfjhiEecCYpzy1QgJobimDSJRYMeaYGhAwxRgjZUGCCSagqaUNqVABZ5wEPCCGiak8gcIAA+CppzhVaABooA8IMIUXUoARBAAABHEGFRlQAAEEiCaapwUUbSEAAZAKoKoBBgQQQAEFfPCBEA448GmoJsygQVBPpCoAq66+GusHENR66wBnJPHlSFxMoeqvrboKq6xFGPtpEU4RJgUVrEYrrKwH0JpACBueJoUWWTzxAaxQOGFFGAFUKE4gACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFS2QGFRETLS0rOA0EVYWUlZaDVws6SCsrPC0+PidELCxGRA1kl6uFXg06ExOcno2ipKYjI0oTWayXYyklJbCynZ+go6VGuUohITZSvoVkETg4wrBInMe2yrrOPyhKTtKCUDYWFtfDExICXlJmgmZcVRhI3yHhKEAL0gER0Km7tiCMLy8S9KHgByQGDVZQIkgUSGNLOUFXJjCMESNKikteXryQGNDAxUIqGnb04AGKpQsSJIyM0OtkoQArWQLhQknDjZgyrdisFIClhyRJdBS6cuHGTwkfhlpqgNSFVXKDFlzYesOfVEs+rLpgQmTQFhgwtl7g+bWSlrFM/0CAqFmgAVoYAtpeKiFXLg5BFRoIhoFFryUrcps0cXFmCw3BDbwarhSiCYnLTrLQ2EzjyWRLMC5frhCggukKXT5XcjKk9RAkGk5XGKOaUhcOuDn8WKCit4ralMDk5sAkBYLjCIAXqlGkeREOyI8rJxSkg/UORTCk2J4iyPRBQq43ecB9QZnvZ8IIWS8EyJQF8BcU/v5EhH0RPqzEx1Bz+osjR9hHGAYEYmDSd0lsAOARnh3goIPRKEfFBhRuIMQSZzjx4AGeKXdCDjlQyIMgXBygwYka0FZbFRRQAGIOHZ5RwIkEEDAFcFG02KIHhGBR44+TfFZCBjvs0GIBhTxR49IDTKZm2AIZRFlkCJUIwOQDAgjg5Fcp9NBDlBlsYBElWzCZpQAGqCKVDgoo4GWUeVnixZkG1OnEeRchNsMMbXr5AitVoFlnAIRaoSIrITCgKJ9tKuWLFoMSGkABBTihxRdajFFDDWNcUYAORSQgg6IM7KnAn+VgUYCklH5wQBEOOAABBAPUaoIJCYg6qqI7EGCTGVQQ2ioHscpKq6245rorEHo50SoExc5a6wC35ioqCQFM9kUVU3QQ7bHU4jrDCDcCl8UOIIigALU9tGdDAWBcFAgAIfkEBQQAZwAsAgACACwALAAAB/+AZ4KDhIVBV1AYMBE4JRYSCAVeQYWVlpeCYQQRFjiNOjoTSCsrPC1IKV6Yq4VaKhE2NhadJSWho6UtLT4nNlasqwcvLxGws422oqSmuycnRDfAlV4wEhLExrTJuKa8zywsJ2LSgk8XN9bXxQ0FgmVBQWBSZAQ43kTgRiMC0lMX/+iuaegC7EoDfCz0jRiBgJUYGDD+nUvBhZygLhaMKFQS4gAmLQ0aQPw3xWKhCAs5hgjxxFIZFSFFwiBjspIGlT9+jPhSyUAFGjRC0qxZ6UOInChQRCjUpYJToC2JWkLwIykQIOMGEVDhtAIBqZhWoLgao8UgLAhUqK0gBSwmIDH/4kb5dQYKgrsq2rm9ZCNGlL9La2C4e7fiXktk/nrwAOQMlhSQU2g4jInF4iRJqFRZsAByVsqVKmBO4gIBFM6ct4C2RMWFaxclBGDAwLnM6kpbXDDZPULD7NmUbhfaDQJElAPIkQMQTghA8efJlTMn1KR6EyYPNGifPF3QFxLgSUQJsF0DmO5ntoQnEcIJgfcEDE+HMqT+kAn04FdBL4GDfw4qcEHAAwR+gJ4HRRThnxM1CECgAALwxFwWHXSQYBOCZAEhhFRMx0OFFZYgiBQbCmCAbbeRIYIQLHbwGRQmGmBAVKv9IMKNQjQ2CBcyGhBAAKqAZsMRR9woQkmEiOHj2I8BqHbYARtsQKQILFRiRgFMFlDAFXsdkEMOUW5QBEGVYPGjlgV8kAVYFlBAwZdRrqIFmgQ0MQAJHVpUhQc77ODml9Gs4kWaIDhgqANA0IiJGEb0kEEGfrqJgzRhfGCCA0IYCgEEOaxgwBlSLLEEF1oEgAMHCijgKKR+msQFBYduCsEAtJqQwK0yMMDADDOk2sOqRxBlwA6azlqrrbjququvjv7glgAdbErrACYgm0CuuvaaKhOfHlYACzMce+u12M6QARHMLVHACyEUkQOvRwwxwg1TmGFRIAAh+QQFBABnACwCAAIALAAsAAAH/4BngoOEhYJPGhUSNjYvMBhnV4aTlJRdAhcSLxERNhYWOCUlOhMlC5KVqYRXCxc3EpqcnqCipBNIKxJkqpVlDzAXrrCbnZ+hOqS4Kzw8DWO8hVcVDcCury+bs8cTtyvLLS0r0INUNA3n1TcqU2FfZjU1ZmdeBi+4POA+PicP0E4VNMxRgyFgCzQV+FrsO0HkgCoqFSIGbOBw3KAXC4kQYdGP0hUVKiIChGKxkAaGG1kYoUJpAQKQEUtOepLSiBEiUgwVQMDzpReZk6aoHEH0RaEtKZLyFAOUUgqiI5QoYTnIwIIFSQU0rVRCaogQE2oI4nL1aoqtlcJ8DfHjRxVBTv8wYLg6BW0lCW1/oLhxJogGuXLtptKLAkUIQQcSH9AqmFILFEAiZzmj+ICVxpQQAInBeYETDaAPYME8KQtnzhYKgAZNmlKU11F8CCBAm0DrSR5ye/hRm/btQjVyJ0niQcCD4w/E/h40fHgUA8g7Lj9TxoV1FyimCNjOePoZJuCZGBHDXUDO6U5AqAeBw8t2AwZ+TofRZP0ZKfDh153+g0ST/ywFYEAABHpHwoEkMCGIFQQSONlvKwwxxIE4CPJFgwEUsBwHHEpI1RlPZFhAAUy1pkQRHHIQgnL3jTjiB61J0EEHRaD4RCFZFPDBjjA2poEQM9J4QlA7IpCDAx7YhYHECCIIASQJBhnCxY4dOOAABDygdQSTTQphQFofWAnBmEPIREYMG2ywJZMwqMLDlWMOIOcZJPFCBAU5pKmmCBFAU8KYEMg5gAkmCKGDhWfUMMYVUFgAwg47UIBnmke0OQ4GDAg6qAkJJCCDDAwwMIMCCvTQQwYZRIpnDh0EIFMXHshJaKeegioqqaWiqioFRkQJlAEczNrpp6GOSuqpqe7ggYZ21QDFCGcMG+qtx2aQwwlPsNiYGVPYoESZpObQhBIS9DhOIAAh+QQFBABnACwCAAIALAAsAAAH/4BngoOEhTVbVAYYNDCNKgRPXTWFlJWWglxTFQ0wFxc3EhIvERE2Ni8PXZerhVsENDQNnJ6goqQ2FhY4JTRXrJdgBSoVFbGcnbWjpbm7JTopv5RdGAjDxcbIoMq4OLs6OhMWZNGCVSkI1dY0KVBXUmdLS4JaATfN4BNISB/RWSnn6IYZUPULwbd8SFaseMCKzIIF/9AxJCcozIV8CnnwKHBpC4aHEFMYmERRUJAGGXm0aGGlkhkCGD4+zFKSkgGNK30gGUPpyYEDMTG0rGkz54kTDQpx0fDzJz+ilS74OHqCyLhBHzQwPRCAJFRDNqoSYWEDgKAvBAho1fD10hUiY/9ZsNAiiEratFDaXroh14iRCmdqGLhLQO+lKn5HjCAS5MuDxw8CGL60QvEIJV60CIBcZbKlBUpCK3lARYBpAVw8V6ISonWIC1BOC1BdqUvrHz8mfDDAW4A82oTK4P6BgkUB3ryDACdkBoVzFCM+BJgeQPlyQWaAaAeiZAr1AL+vn4lBPsYIJ9/LiD8TJkr5FVYCFJi/XpCHKPgjXJlPfz0NDwB6gMEX833wwRPrKZHEgh50NoWBBq7nwoRJAKEcGQh0MEAOKlw3ARMTuiCBIGNs4MCJDiBIWxUggMDEi50JYgKKEBRh3WRBGNFEiyCcYJYgBZwIwZBMqOYDCU3sCALqFYUAMSQEAwyAw2QNDEHClU1MQMkWM0AZpZR6NcABB1aSkMQ7lDzwZZQmuHAjRTWwUMSYZA6RlyUvfGmCCQmc4URJWaDQQQdzjrkAKxMMsGcCjMoQwxS/ICiCEEIMOicM0bzAJ6MJyCADAyKcEYAXZ4ABxhdeFGDDGRscIcKkg3bQITkCZNDopwwwMIMCCvSQQQY7UEBBDhu0+uqkTTxF0RY/dIrrDLv2+muwwxJrrAgtpAbVFEzkqmu0vgJLrbVH/KBiWwA44cMO0UorrrA5dIBEFj96tsQTF7DgghBHHNGBBz7A4ER4vwQCACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFQVhZHwQpKhUIGAFOZ0GFlZaXglhPCykICI0VNDQNDTAXDQZhmKuVAQucnZ8VoaMwphc3EimsrFAHGK+cnqCipaY3uRIvB7yVWwQHv8DCn42jpRe4EsoRETfNg2QaGtG/rwRUXWNLNTVLY2FQCMkv3TYWU81WBATj0RhQpPB6Vi+CjXsWBLDywo8fuQJjwGVSYdCCBRw4VmF58KChhiwAJA4CEMAixhIlqlwKIIAjP1UiC1E5WUKHhS+VxAjYyRFmTJkodeiYoKLSzqNWfl4SMHTCBCSFnhgwsBNKSKWVAMBwigSJBEIBpk6NiNXSlq4r0g6yEqCtASpl/zGpSMuDx64zBdq2xRnXUpi6PFqsWHJGbwAofTFZaMG4xZkrBSIH8JL4EoEWPjILsBI5ssDKlar4OEGahpMPqAuAAV2JC2nSOAQMGTDkASXWhMAQ2U1khQsHwD3UwE0oCIvjLE6YAO5AxnDigoIYmW6EiALmDvhCBzOi+wgfIhxAGK8FeibvIyYAGT/egPkzWZTIV3IDB/sBE94vCME/xIEPAwQ4wBHvtfDDgSGcYYYMAg7wBHReoCDhD0oQNkKAZ5iAAnQRACEhChcI8oEJJJKYFGtXxBADECyeeMYQJCaQAAlXJQYAD1GoGMMKhAgg449QVdaABx5EkaMYlfwog9gMd8VlQBJEFllCJV30sKQMDDCAQFwCuOBCElCiwMUlS2bJwAwT1CgRABeAwISXYK5ig5kzzKAAEypJpAULTbj5pgtbspJlnQoo0MMISLJixQokkNCnn+BEQGihPWSQQRMRfBBGGUEEUUYXUNwQAwccDNHoo4E2Q0AOlFaawQ4UUJDDBhscIYIIQnRQBKmmOprET12c0YOrO8AqK6224qrrrkOYygMWWAXggqXGHlvrrbnqSuoIiPWF2Aax5jDrtcp2QIIOiYJmxhk3nJAEB7iSEAUPDSgoUSAAIfkEBQQAZwAsAgACACwALAAAB/+AZ4KDhIU1Ul5OAQ8ajQZQVVg1hZSVloJfWQIEjQcHGBgLCykICClQXJeqhVJQDwSwnZ+ho6UqKhUEW6uXZlQCAg+vnBqeoKKkCLgVNDQGYLyFXAXAwcOcxqEpycs0DQ0qV9GCVwbm1cIGVliCQUGCXWIH3d8wMGLRXgEB58BO4wa8NbB34QKUVWH27TMH5cu4QQcGFrxxA5+laQr3OZn0UFANAgUv3JAgQRylJVMKqNynpSOlJyJJSrhQhpKVDypVtnT5kuSLFxE0FPryoShOKjwtYfgZoWkYQhVyDBCCwGJSSjVUNI1gQ8UgJw7COthw9VIXrjYsWOgiaIRYBzn/yl7CoFYtgTNLGEAQG0DuJbU4cESoMQWCYQgU/F66gaOE4zARDkPgodiSAccldEwJMaDzgAeVK3nRQVrHAg6eB1QJTQnLhNcTYOwYcKZzKtaFXiNBYkGBid8mauIetGT3ihU6fAMXPhzv8eM6KCSYnqD5oDI8svMoQYJ6AjLWBbUY3+KFEuoywp+x4sPHeBUSZMhPH/7AiRPtAzyRz4CBiPAT3HefFkvs0F9/UzRXBQtENMjDOz4cOMMPzUnAwoVEeHWGEzN0OIMCVlWmxQhGGHGhSWe48KECCjDxTmU16DACiUZYQMgULLLYAxChWaCEEjOOsBohIyjQw5EZvKAY2gYhNPnjDa0d0UMGVCYpFwYo/PBDk0Q4REkAVWawAwU/cNRRjECgkOWWSFlCg5hjUkCBB1l0REYLMcSQZpZ3qRJBnBTksMEGRDzBSxY6eBBFFHmmmUI0DciZg6AbHCGCCy9MocUYYJgxxhVPwPCDC0l4oGijQo0TQBGUHmGpCEJ0UAQHHAxBQhMggMCEC6SaGoUSIUbDxQmDvipErLPWSsKtuvJaqgcWSHEVFCgY24GstNrKbLMu8FCnX4hyECu2ym4bhQRDhraEGBUgoUQSukYxQgkpWPFiNIEAACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFg1QfAQ+LBU+Gj5CRglYBApaLBAQaGgcHGAdnWJKjhE8BBgaWApianJ4YCwsCpJJZAbeoqqybnbCxKQgFtIVYHwW3uKmrD5munr/ACClhw4LGBce4U2RcYGc1NUFlWFkGvwgIKioVVLRaH/DYt1lfpFIf0esVFY6SFiEyNiAw5mRMtTNfBKjbR4OGJA0OHAxwcOSDFwAHBQFwwpBGgwZaHoVhENFBggGiMhIi0/BjAxoGC3mAQDMiCpWGyHyEAeOCIQEDaNL0gfPRE54XkhKqUWTAGZocij4CcCDphRspBk0ZwJVrFqmPuFy9IUECoa4DboJ99KBs2VmC/0yY4NpvbaEuZV+8uBGkgFy5QuxCovEiguEzNhIoNjFB8KMPhg1DQaFY8QfHhrTY2GxDw5nKCUJiJvTFgmkLDc7IWC2jzGhCZk5bMMtaRpDXg2rg2I3DAoPfvzHi/laieAkcZ4AzcD3cjI7nOmycmUF9xpXhZ6RM2K7jgpHqCgJg97J9O4IXCtIrsIBdAJL3SM58UK9gCPYXK/Kv8GKGQo//PTiB2xU8FLjCBEsI0kMGDBqBWwUttFAgAoI8wSCDO1gxWhc++BBhC6LVkEQGO5QYg3B2ARDBCR36EAEhH5RIwYzsCbYAESfk6IOGhIQwIwU55ADKWlOwwAIROMJgSM0XIgCZwwYbYAAWFCMYYSQRLUjxiABBQrnBETagWA0AKSgxQpVGSnKDl0eIIMIPZBx0xQQhmHmmEQ+MYsOXboogRAc8fDVKFS+g8EMIdZ65AC0w9PlnB0VwgMIFTnRRRjhlbOGECifEAAQKhiKqxJDDcCDEo5FyMAQJTYAAAhMuJOGBB1F4CuqhRtQ1zBZndABppEOs2uqrsc5aq60oSFfUFGekuiqrrsJa7LFArGBXDWKc0cSzw0oraxRACFLDaJs2FgUTSaDAgg2LHhQIACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFgldZUAUCBgUfYl5chpOUlVUfAZkGBgKdDw8EoWKSlaWFYgWpmQGbnQKgoRoaBwGmpWFnH7qqmpyeoQSzBwcYU7aGBxAmTQQfvKy+r7HCGBgLB8eDLw7cDiDOBVBnUmdBAGdLYGdVAdQL7ylZxzwQEN0JH1Zjx0/V8CkInJjCMaCePQcbymQbZAAegodUKh0YMOCMwQwfFhKiAvChChVXJmGZQZEihBIaDWnxqKICAoWFgJgoOUBFyklaPlbYKcCQiZ8UV9yk5GQnjaOEAAxJ8NPEmRpDKRE42qABtkEJsjIVE5WSlKpVYWwRZERrgh9dKxloAKNtrTMK/2TIyJq2Epa2Fy40qPFBrtwOdSupyHvhxpkIDBIz0BGY0pQbkG84CaGYQWNKVyRolvBgyIwZiUNeLjRm84sKOT5/3jeaEJgXsF/AgKug9rnWg4JE2B3hRe3fuJPaGD78SI/jPYITsmBhuIQzyHvgUv6FOfMGRDJoz1BA+RktOMLjwHBhewYc3gOUWF/iA5Qd8Hd4P3NDB3stS0RQ2E+BK+4wE0yggw44BHHGCvxRcEJwCAQYIAaDUJDDhBtU0doWKyCh4QSDAOBBDhuECERrEqxgIhKGERLiBkccEcFlGrTAAw8mWkiIESweIYIIGgT2hA8tyMgDDYZsUYSOOwrxQMJaBJxwApAtIPHFJAbsKIIQHXTw3FAvEOHkky2UcoEQWGZZxAheaBQGDiyw4KWTPZmSZQdFcMDBEBPYWIoXN4wwghFtegnhMXTaeScJJITQgCBjLHHGPhH5EEIISvwJKAsGLGRAE3YOgWgTIIDAhAtJeOBBFDEAgcIPP1DqpxE++KeRD0N4SgKoopJqKqqqrjpppS+kpcStoY6q66mpouBrCBzWdQ4OLuR6LKrJGrHobZdRsYAFLIQQQwwj+BBBjxoFAgAh+QQFBABnACwCAAIALAAsAAAH/4BngoOEhWYBZ1ZiUAUFH09ZWlKFlJWWg1MhCQ5CBx8fjQGiAQYBVJOXqYQGRRCuDg5Fn6GiBgYCuFNcqpddHgMDrhCwDrMFo7a4Ag8PT7yUGjPAwK+cxsi3uA8EBAJbz4I2JuPTrhQZWYI1AEFnUl5T2tvcGmTgCQnkwChQvF9U8who0HAgXSob+PCNI0EFnKAxUwQSPHDAyqUHMmQkNLECgENCViYewIChS6UuOzJqTIDgI6UrFEkuOACGEgoGDFS2dPlS5oIFHwoFwEkUCU9LVH4uSJHi2yAQM2bgBOHxaCUDS1MgeDAIioKoUQ1apfSFKYKzWAQRUcB2hpKxl/8+nEWgYsoZMzvYsnUC1xIXuipUIGjXo7CCIX0vaajAuMIWCRkyFMaR2JKTxhWoGIkc2W5lSltoiKYRgAnnDJ8tNVjdAIOIHbB3lEldaAnrBipyUNhNoQZtQjVgCIfRQDfvdr/VXVh+AUaRHNBzJB+0hPkFGklybNg+fdCN7zcQnNi+vd/0MBLSSyAAY8OR9y+6f3jxIv2TJ+9FiPDQnUYE+i9ccUYR+uknVmpd2BDBghIMIoIQELaQHAY2VBgBAYI4AWEHHNqTGhYWhGiBDWEMggKHHRTxVmoN4IBDiDQQMkWKRRTBQYOVCVDCji56UcgJNnLAwRBc9SXGBDrsWELWCpRgAYKQQwxBgpFITICkDjaMUUkBQ5LgZRMwWEXACkhUiWQVl9DgJQlNgADCCVp81IUEPKxAZpWIpCIBm26CwIQLlPGiBQ0+tNBCnWRiyIsKbfrpggtJeECECllgAUYNNYCBRRUY6EDECScUykOdH33gARN/JhFpFDHEAAQKP4QQwggjGMHCp6EaOsGBz2AxwaOResCqq7DKqkStLNwKqg8wfGGVEycEy+qrxYZwrK3KWmBRX1ZEAESr1MZqba1G+FCBh6llQSEPRlhLxAQ3EFDFEg4FAgAh+QQFBABnACwCAAIALAAsAAAH/4BngoOEhWBnFigdPSYmCkIgO1aFlJWWhCMzCY0DnRCfDg4dU1Vfl6eFASQyCa2cnhChDhAfHwVOUqinKAwyrK4mnQOgoUW1BQUBVGa6hQ87DNG+wMLERQe2yAEBBVjNgi8zM9G9rB06BVpjQUFjXgFaTtnb2wZazRMKCuLkIU/NVpLVMyCgCqoXPfTtmwEiyzdBZZwEMEBRgAAvlwT02KhwwsNCZCpafOCt0oYMGxOm+Eipi0UBDx4YqKQkg02UC1hWchnzAYF/hArs2HGzhE5LVnwSWFpSkAcKQ3d4OHppylICGgoMekKhK1SDVCuNwaqhLBdBPHLk6Eok7KUnZf8PHHByZkkHtWrFuLUkRa5cDTWebBi8gcneSwYOYFiMpcERwhEOW8qyGMMCKz6OaD4CRXIlLAtCL5gSQ4RpEWE8UyojesGDIadFqKYUJIXtFBg6CNktJMjsQgiCBy/SoXiHGr8JCUeQoonxDoeSC1JBXcUCFEWyF+ki/cyYCuAraFjBoTwHutK3hK8QgIZ5Dhe6O6FBnwYVJ0PyD/nRfUGD/zRscQYIJBRIwiS/YQHDfw1UIEgJBTbRhEe/CXABDBgGIAgVEjYBAggYqcbFBSReyJ0gRnwIAhMnzJbCDTeQmNNWHzLBhAsweFaABDzCeEUhE9zoggtJzLSXFS+8wKPVBBpUEsOQSXjggYZhZRHBlUrGV8kUSUQpZRQOHhWABTZcGcELIVaCgJQeRBFDDEj8+FBjOFhA5pWdndJAm28CgQIKEqR5SRgp6FACDnWSSSUqC/TpJwo/hLDCAlWcJYgZUnghwAtITGDooXZO8dATPzwaaQhKjGAECywQcYIPLfCwwgqdelpCCTaA9ZAUifwQqRKprtrqqy3ESusEtiIwBlVUIBECqiOoyqqrsBp77AWCUlXFBSxEuyoR1BYr6wQpyKlaFQRcUAIPJ5yAhA00GJAtKoEAACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFZlM3I0NHCjM5RSEvBUuFlZaXglBEGTMMnjIyCaImJgMzLAWYqpVMCq6dn6EJpAO1AxAdAquqIRk9ro2woKOlthAQDjsLu5UbGb6/wbHExscODhRczIISOzvPvq5DJQFnXEtLUloGKzm3yNcmH2HMJRQU3s89Rk67T0DwHID48MHLqhs57uHb4aHKNkFZGAxoQuBDgQJXVG3IkfCehYeFshC8WKCcpS0dNmxMeABkpSskAwT4QKkQiyMqVbZ0WWlLSZkBshSaIuKI0Q02eF7yAtSAAW2DgIiYegSFUkxPAjg1AGWQEyFCpoogcxXTVgECpAgq0QGskBZl/zFRQYtW6BkSHfJ2sBu30he6aM84KVIkr4e+mKY8WPyAiwoOhItIQHypymICBMgg4cCZA+VLXDBjdvJjyBDOWz5XAiOaQIEkpk2DUV1Jg20ND0jo1g2ANiEAB4IHb0KceG/fg4Qf0OCBOAgQZZAPwkAdw4MRz5+nll6mOgYDOpiIZyJGuqAF6BdAQcDEhXsa5sWkSF+Finv3RsxrSME/BZYzUSQhYEPIcYHAgQhgUMMZEXjgoAcf+VaACgh2dUYWDkahYUaqSVGBCiCq8J8gLWgYQwwr0KZBBSyqQAAhTpwYAxBAIPDZEzTQwGIFXRRSwoxAoIDCB4iR0cCRORpQCc0XIQiJwg8h7HQVGRfAcGQDKkRXCRRCQhlCCEkphcgFVR6pBSYYeBmCEiPgQM9DXKQgwQ1kVtmPKgh8yeYIRrAAw5mrbKFBBC9IMCeZRO7ywJ5G9EnECTq0pFYQQWgZAAw2RECooTfc8MRDThDBJwssPOqDDy3wsAISE0ygQwk4WGBBppteYJBLEpD66Amoprpqq6/GOqumL2BQlhU47Nqrqqy6WgKss9pQAaBxkYHACqjywCywz+IQgQa+BcGUCi/g8KoNF2AAxRVBPBQIACH5BAUEAGcALAIAAgAsACwAAAf/gGeCg4SFghJnTRtnPWdDIzZThpOUkzVPJxsZPT0KCjMzDAwyMglnRlA1lauEBR47OxmbnZ+ho6UJCSZDBqyVW0YUwrGznqCipLm6JgMeW76FAR05OcPEtMejyibMAwMzGNCCMBvl1cNNFlNXY6pfgjpCy94DEBAl0C9HR+bVLGK+oKCgV8/eClYXRIjYVy6GuEFUOJyxB8GBAwuVDAhRuPDIQ0M87Fl04IELJRJCNioM97GQipEJZEwxY4hIh5spNbScRMPBAAcdPlgp9KRIkZsdXuykxMLEBgQFCkgZVEMJB6NFQiytJOZD1AJOIHIYe7XKVkplvgYI8O4MjiFD/8YePEvJytq1Q80wIQF3CBW6le4GKCCIhGESKABXgrLWgIGpTSKTgKGYEhnHjrWUAMG5yZPKk6QYEEBazAjOnLuAnkSa9JQYTGIzWc26dQAXuHHTLlTjge8HApLkdqFq9yACyAk8QJGkeRIwxo8nN3DCg3UP0aUjL4DjepQs2bFoGK/ByYIo6GMgyG7lgPsDZLLEmB/jRHYD7w+YRBEDiH8y0WEg4AE6nSEBECgkqNRuUyywgICfnVFFgij88EMYu6XgoIMmnVHDChaGEIIOtAmQgoYL9ALRDyKGoMRqYiAg44nPEBKBi0qMMEJlXqiggoxQGSIFCzmOYAQqgFVQgbyPCCxAiWlGGsECCyztBAUNNCjp4xWVEHDklEScEMFOBzTQAJZK/rUKBmCecIIPLVQgzgMXwACDmViG5QsBRIT5Zgst8BCBAACaUUMNZnwRxgcqSHDDBXWa2YCa0IjBw5+BrrACEhPoUEIJOFhgQwQRvODoo3VWwOVHX8AAZ6acdvppqKOWKoGjkD5QxlZkvMCDprF6CqqopJrqaAqr0qVFChMEO6uoo75wwwOq0abFGSlcEIEFFrxAw1KBAAAh+QQFBABnACwCAAIALAAsAAAH/4BngoOEhUFiND4eRUdHQi4sF05BhZWWl2cAWRMdORQUOzsZGT09CgozFD5iAJiuhE4oRxsbOZ6go6WnMzMMDC5Tr5hcLSIis7W3oqSmqL4MMjI/wpVTTULGjbTKuafOvtEJGQbUgiodHULYxxsgZwVeX2BgZ16D4DIJ+iYv1DBFRdCtIwJF2BQg+fQlMGFiwqsUHDgERAckSzlBTobsMzFggARMUIZElNiBBaWLgpYkYcix4wNLUpIMERmxAcpKOFp2nLGl0gQSQEXavIlzwJkBECAAKUSlSROgJE4QveQCaVIIBQYBOAHCaZMRJ6caKpLUgYMhg6qAWNvVithLT//MmqUwRtALJkzWInmLiYLcDWTOBInhwgVevpgE5BjQAUGwKoULh0CM6cmHyx/GYEjCOclQypW0FBhdIEwED6g9OAF9iXQBKy1SewjD2lKA2wGcKInCO0qZ2oWW4A4wJUSM4zHMACcUZPgH48iVLxcUxIB1AwVYANmOou50QdcNfECCojyKLt8FCVgvAMqNH/B/UEnPhb0AKhp+hNifIn2VBwAKoAUZ++3HQ3oBAAigFEGwoMSDI1QxnRQEVEiAAILQMMKGI3y0HBQWEjDfGVpsaIQRLGixnAYsakCAFIIAYAGKLLCAQw2s1RDAAQew+AEhZNTIAhFE3MDaBxjwyCPqF4XAQOQJUL6EmBULYJDkAU9UMgYPUJ7gQwsYvpVFCgtUiYEG0hVihZdftsBDAzjeVIMBCKRAZpk9XRJAmzzwsIKRNxGAwKB2LhCYKw+46ecKSEygAjVdGFBBBSoMWueIrxSwaKMT6FCCBAbYc8YSS5whxRVQpNAADZOqUCkCbpVTRQlIcOopDjhYYEMEEbwgwQ0XXABDA6u2ugB6KI2BwASdllBCrrr26iuwwhLLagUB0DOVFg14+qwF0b4wbbDDrqpBnnx1QYANudqwq7i/kkvDB1gAV0MXUGigwgU33NDAAgKIsUWc1AQCADs=');\n    margin: 100px auto 20px auto;\n}\n\n.tp-please-wait > .tp-icon.tp-centered {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n/*---------------------------------------------------------------------------------------\n    Close Button\n---------------------------------------------------------------------------------------*/\n\n.tp-iframe-wrapper.no-width .tp-close,\n.tp-iframe-wrapper.no-height .tp-close,\n.tp-modal.no-width .tp-close,\n.tp-modal.no-height .tp-close {\n    display: none;\n}\n");