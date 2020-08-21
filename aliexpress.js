/* Retrieved from https://web.archive.org/web/20200627004911js_/https://assets.alicdn.com/g/security/umscript/3.0.11/um.js */
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

    /* 2017-09-19 12:36:02 */
    ! function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        (function(e) {
            var t, r = n(1),
                i = n(2),
                o = n(3),
                a = n(6),
                u = n(9),
                c = n(15),
                s = e,
                l = (s.document, {}),
                f = {
                    version: "3.3.7",
                    getStatus: function(e) {
                        return t ? e ? t.status : t.status >= 200 : !!e && 0
                    },
                    getData: function() {
                        return t ? t.getData() : "{}"
                    },
                    getToken: function() {
                        return t ? t.getToken() : u()
                    },
                    init: function(e) {
                        var n = o.extend({}, c, e || {});
                        if (!n.enabled) return r.reject("not enabled");
                        var i = n.token || u();
                        if (l[i]) return l[i];
                        var s = r.defer();
                        return l[i] = s.promise, t = new a(n), t.init(), t.defer = s, s.promise
                    }
                };
            i.trigger("main.loaded", {
                um: f
            });
            var d = s.umx && s.umx.version >= "3.1.0";
            d || (s.umx = f, s.um = f), s.pointman && s.pointman.define("um", function() {
                return d ? s.umx : f
            })
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        function n(e) {
            return this instanceof n ? (this._state = c, this._onFulfilled = [], this._onRejected = [], this._value = null, this._reason = null, void(f(e) && e(o(this.resolve, this), o(this.reject, this)))) : new n(e)
        }

        function r(e, t, n) {
            return function(r) {
                if (f(t)) try {
                    var o = t(r);
                    i(o) ? o.then(function(t) {
                        e.resolve(t)
                    }, function(t) {
                        e.reject(t)
                    }) : e.resolve(o)
                } catch (a) {
                    e.reject(a)
                } else e[n](r)
            }
        }

        function i(e) {
            return e && f(e.then)
        }

        function o(e, t) {
            var n = [].slice,
                r = n.call(arguments, 2),
                i = function() {},
                o = function() {
                    return e.apply(this instanceof i ? this : t, r.concat(n.call(arguments)))
                };
            return i.prototype = e.prototype, o.prototype = new i, o
        }

        function a(e) {
            return function(t) {
                return {}.toString.call(t) == "[object " + e + "]"
            }
        }

        function u(e, t) {
            for (var n = 0, r = e.length; n < r; n++) t(e[n], n)
        }
        var c = 0,
            s = 1,
            l = 2;
        n.prototype = {
            constructor: n,
            then: function(e, t) {
                var i = new n,
                    o = r(i, e, "resolve"),
                    a = r(i, t, "reject");
                return this._state === s ? o(this._value) : this._state === l ? a(this._reason) : (this._onFulfilled.push(o), this._onRejected.push(a)), i
            },
            resolve: function(e) {
                this._state === c && (this._state = s, this._value = e, u(this._onFulfilled, function(t) {
                    t(e)
                }), this._onFulfilled = [])
            },
            reject: function(e) {
                this._state === c && (this._state = l, this._reason = e, u(this._onRejected, function(t) {
                    t(e)
                }), this._onRejected = [])
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            always: function(e) {
                return this.then(e, e)
            }
        }, n.defer = function() {
            var e = {};
            return e.promise = new n(function(t, n) {
                e.resolve = t, e.reject = n
            }), e
        }, n.race = function(e) {
            var t = n.defer();
            e.length;
            return u(e, function(e) {
                e.then(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                })
            }), t.promise
        }, n.all = function(e) {
            var t = n.defer(),
                r = e.length,
                i = [];
            return u(e, function(e, n) {
                e.then(function(e) {
                    i[n] = e, r--, 0 === r && t.resolve(i)
                }, function(e) {
                    t.reject(e)
                })
            }), t.promise
        }, n.resolve = function(e) {
            return new n(function(t) {
                t(e)
            })
        }, n.reject = function(e) {
            return new n(function(t, n) {
                n(e)
            })
        };
        var f = a("Function");
        e.exports = n
    }, function(e, t) {
        var n = [].slice,
            r = {},
            i = function(e, t) {
                var n = r[e] || (r[e] = []);
                n.push(t)
            },
            o = function(e, t) {
                var n = function() {
                    a(e, n), t.apply(null, arguments)
                };
                i(e, n)
            },
            a = function(e, t) {
                if (!e && !t) return void(r = {});
                var n = r[e];
                if (n)
                    if (t)
                        for (var i = n.length - 1; i >= 0; i--) n[i] === t && n.splice(i, 1);
                    else delete r[e]
            },
            u = function(e) {
                var t = r[e],
                    i = n.call(arguments, 1);
                if (t) {
                    t = t.slice();
                    for (var o = 0, a = t.length; o < a; o++) t[o].apply(null, i)
                }
            };
        e.exports = {
            on: i,
            one: o,
            off: a,
            trigger: u,
            __events: r
        }
    }, function(e, t, n) {
        (function(t) {
            function r(e) {
                return function(t) {
                    return {}.toString.call(t) == "[object " + e + "]"
                }
            }
            var i = t,
                o = i.document,
                a = n(4),
                u = n(1),
                c = n(5),
                s = (i.JSON || a).stringify,
                l = (i.JSON || a).parse,
                f = o.getElementsByTagName("script")[0].parentNode,
                d = function(e, t, n) {
                    if (e) {
                        var r = 0,
                            i = e.length;
                        if (i === +i)
                            for (; r < i && t.call(n, e[r], r, e) !== !1; r++);
                        else
                            for (r in e)
                                if (e.hasOwnProperty(r) && t.call(n, e[r], r, e) === !1) break
                    }
                },
                p = {
                    isObject: r("Object"),
                    isFunction: r("Function"),
                    wait: function(e) {
                        return new u(function(t, n) {
                            setTimeout(n, e)
                        })
                    },
                    allSettled: function(e) {
                        var t = u.defer(),
                            n = 0;
                        return d(e, function() {
                            n++
                        }), d(e, function(e) {
                            e.always(function() {
                                n--, 0 === n && t.resolve()
                            })
                        }), t.promise
                    },
                    each: d,
                    singleton: function(e, t) {
                        var n;
                        return function() {
                            return "undefined" != typeof n ? n : n = e.apply(t, arguments)
                        }
                    },
                    extend: function(e) {
                        for (var t, n, r = [].slice.call(arguments), i = r.length, o = 1; o < i; o++) {
                            t = r[o];
                            for (n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        }
                        return e
                    },
                    poll: function(e, t, n) {
                        n = n || 1e4, t = t || 500;
                        var r = null,
                            i = u.race([p.wait(n), new u(function(n, i) {
                                function o() {
                                    var t = e();
                                    return t ? (n(t), 1) : 0
                                }
                                o() || (r = setInterval(o, t))
                            })]);
                        return i.always(function() {
                            clearInterval(r)
                        }), i
                    },
                    append: function(e, t) {
                        e || (e = o.body);
                        var n = o.createElement("span");
                        n.innerHTML = t, e.insertBefore(n.firstChild, e.firstChild), n = null
                    },
                    post: function(e, t, n) {
                        var r = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                        if (!r || n) return p.jsonp(e, t);
                        var i = new u(function(n, r) {
                            var i, o = "POST",
                                a = function() {
                                    var e = i && i.responseText;
                                    n(l(e || "{}"))
                                },
                                u = function(e) {
                                    r(e)
                                };
                            setTimeout(r, 5e3), i = new XMLHttpRequest, i.open(o, e, !0), i.withCredentials = !0, i.setRequestHeader && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), i.onload = a, i.onerror = u, i.send("data=" + encodeURIComponent(t))
                        });
                        return i["catch"](function(n) {
                            return p.jsonp(e, t)
                        })
                    },
                    jsonp: function(e, t) {
                        return new u(function(n, r) {
                            var a = o.createElement("script"),
                                u = "_" + parseInt(1e4 * Math.random(), 10) + "_" + (new Date).getTime(),
                                c = [];
                            a.onerror = function(e) {
                                r(e)
                            }, setTimeout(r, 5e3), c.push("data=" + encodeURIComponent(t)), c.push("_callback=" + u), e += e.indexOf("?") > 0 ? "&" : "?", e += c.join("&"), a.src = e, i[u] = function(e) {
                                n(e);
                                try {
                                    f.removeChild(a), delete i[u]
                                } catch (t) {}
                            }, f.appendChild(a)
                        })
                    },
                    parseJson: l,
                    toJson: s,
                    log: function(e) {
                        var t = new Image,
                            n = "_um_img_" + Math.random();
                        i[n] = t, t.onload = t.onerror = function() {
                            i[n] = null
                        }, t.src = e
                    },
                    groupHash: function(e) {
                        if (0 === e.length) return "";
                        var t = {};
                        d(e, function(e) {
                            var n = e.charAt(0).toUpperCase();
                            (n < "A" || n > "Z") && (n = "zh"), t[n] = t[n] || [], t[n].push(e)
                        });
                        var n = [];
                        return d(t, function(e, t) {
                            n.push(("zh" === t ? "#" : t) + c.hash(e.join(",")))
                        }), n.join(",")
                    }
                };
            e.exports = p
        }).call(t, function() {
            return this
        }())
    }, function(module, exports) {
        var JSON = {};
        ! function() {
            "use strict";

            function f(e) {
                return e < 10 ? "0" + e : e
            }

            function this_value() {
                return this.valueOf()
            }

            function quote(e) {
                return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }

            function str(e, t) {
                var n, r, i, o, a, u = gap,
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
                        if (gap += indent, a = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                            for (o = c.length, n = 0; n < o; n += 1) a[n] = str(n, c) || "null";
                            return i = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + u + "]" : "[" + a.join(",") + "]", gap = u, i
                        }
                        if (rep && "object" == typeof rep)
                            for (o = rep.length, n = 0; n < o; n += 1) "string" == typeof rep[n] && (r = rep[n], i = str(r, c), i && a.push(quote(r) + (gap ? ": " : ":") + i));
                        else
                            for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (i = str(r, c), i && a.push(quote(r) + (gap ? ": " : ":") + i));
                        return i = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + u + "}" : "{" + a.join(",") + "}", gap = u, i
                }
            }
            var rx_one = /^[\],:{}\s]*$/,
                rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                rx_four = /(?:^|:|,)(?:\s*\[)+/g,
                rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
            var gap, indent, meta, rep;
            "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, JSON.stringify = function(e, t, n) {
                var r;
                if (gap = "", indent = "", "number" == typeof n)
                    for (r = 0; r < n; r += 1) indent += " ";
                else "string" == typeof n && (indent = n);
                if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(e, t) {
                    var n, r, i = e[t];
                    if (i && "object" == typeof i)
                        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), void 0 !== r ? i[n] = r : delete i[n]);
                    return reviver.call(e, t, i)
                }
                var j;
                if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                    "": j
                }, "") : j;
                throw new SyntaxError("JSON.parse")
            })
        }(), module.exports = JSON
    }, function(e, t) {
        var n = {};
        n.encode = function(e) {
            var t = e.replace(/[\u0080-\u07ff]/g, function(e) {
                var t = e.charCodeAt(0);
                return String.fromCharCode(192 | t >> 6, 128 | 63 & t)
            });
            return t = t.replace(/[\u0800-\uffff]/g, function(e) {
                var t = e.charCodeAt(0);
                return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t)
            })
        }, n.ROTL = function(e, t) {
            return e << t | e >>> 32 - t
        }, n.toHexStr = function(e) {
            for (var t, n = "", r = 7; r >= 0; r--) t = e >>> 4 * r & 15, n += t.toString(16);
            return n
        }, n.f = function(e, t, n, r) {
            switch (e) {
                case 0:
                    return t & n ^ ~t & r;
                case 1:
                    return t ^ n ^ r;
                case 2:
                    return t & n ^ t & r ^ n & r;
                case 3:
                    return t ^ n ^ r
            }
        }, n.hash = function(e, t) {
            t = "undefined" == typeof t || t, t && (e = n.encode(e));
            var r = [1518500249, 1859775393, 2400959708, 3395469782];
            e += String.fromCharCode(128);
            var i, o, a, u = e.length / 4 + 2,
                c = Math.ceil(u / 16),
                s = new Array(c);
            for (i = 0; i < c; i++)
                for (s[i] = new Array(16), a = 0; a < 16; a++) s[i][a] = e.charCodeAt(64 * i + 4 * a) << 24 | e.charCodeAt(64 * i + 4 * a + 1) << 16 | e.charCodeAt(64 * i + 4 * a + 2) << 8 | e.charCodeAt(64 * i + 4 * a + 3);
            s[c - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), s[c - 1][14] = Math.floor(s[c - 1][14]), s[c - 1][15] = 8 * (e.length - 1) & 4294967295;
            var l, f, d, p, h, m = 1732584193,
                g = 4023233417,
                v = 2562383102,
                T = 271733878,
                S = 3285377520,
                y = new Array(80);
            for (i = 0; i < c; i++) {
                for (o = 0; o < 16; o++) y[o] = s[i][o];
                for (o = 16; o < 80; o++) y[o] = n.ROTL(y[o - 3] ^ y[o - 8] ^ y[o - 14] ^ y[o - 16], 1);
                for (l = m, f = g, d = v, p = T, h = S, o = 0; o < 80; o++) {
                    var C = Math.floor(o / 20),
                        B = n.ROTL(l, 5) + n.f(C, f, d, p) + h + r[C] + y[o] & 4294967295;
                    h = p, p = d, d = n.ROTL(f, 30), f = l, l = B
                }
                m = m + l & 4294967295, g = g + f & 4294967295, v = v + d & 4294967295, T = T + p & 4294967295, S = S + h & 4294967295
            }
            return n.toHexStr(m) + n.toHexStr(g) + n.toHexStr(v) + n.toHexStr(T) + n.toHexStr(S)
        }, e.exports = n
    }, function(e, t, n) {
        (function(t) {
            function r(e, t) {
                e && i(e).then(function(e) {
                    o(e, t)
                })
            }

            function i(e) {
                return s.poll(function() {
                    return m.getElementById(e)
                }, 100, 2e3)
            }

            function o(e, t) {
                var n, r, i = e.getElementsByTagName("input");
                for (n = 0; n < i.length; n++)
                    if ("um_token" == i[n].getAttribute("name")) {
                        r = i[n];
                        break
                    } return r ? r.value = t : (r = m.createElement("input"), r.type = "hidden", r.name = "um_token", r.value = t, e.appendChild(r)), r
            }
            var a = n(7),
                u = n(8),
                c = n(9),
                s = n(3),
                l = n(14),
                f = n(11),
                d = n(12),
                p = {
                    cn: "https://web.archive.org/web/20200627004911/https://ynuf.alipay.com/service/um.json",
                    us: "https://web.archive.org/web/20200627004911/https://us.ynuf.alipay.com/service/um.json",
                    aliapp: "https://web.archive.org/web/20200627004911/https://ynuf.aliapp.org/service/um.json",
                    usaliapp: "https://web.archive.org/web/20200627004911/https://us.ynuf.aliapp.org/service/um.json",
                    "in": "https://web.archive.org/web/20200627004911/https://aprisk.paytm.in/service/um.json",
                    sg: "https://web.archive.org/web/20200627004911/https://sgynuf.alibaba.com/service/um.json",
                    daily: "https://web.archive.org/web/20200627004911/https://umidstable.alibaba-inc.com/service/um.json"
                },
                h = t,
                m = h.document,
                g = function(e) {
                    e = e || {}, e.serviceUrl = e.serviceUrl || p[e.serviceLocation], this.options = e, this.status = 0, this.clientToken = c(), this.data = {}
                };
            g.prototype = {
                getToken: function() {
                    return this.options.token || this.serverToken || this.clientToken
                },
                init: function() {
                    var e = this.options;
                    this.status = 1, this.startTime = new Date, s.extend(this.data, {
                        xv: "3.3.7",
                        xt: this.getToken(),
                        etf: e.token ? "b" : "u",
                        xa: e.appName,
                        siteId: e.siteId,
                        uid: e.userId,
                        eml: e.model,
                        etid: e.traceId,
                        esid: e.sessionId,
                        serverTime: e.serverTime
                    }), r(e.formId, this.getToken()), e.closeImage || s.log(e.serviceUrl.replace("um.json", "clear.png") + "?xt=" + this.getToken() + "&xa=" + e.appName), this.run()
                },
                run: function() {
                    var e = this,
                        t = e.options;
                    e.status = 2;
                    var n = l.init(t, e);
                    s.allSettled(n).then(function() {
                        var t = {};
                        s.each(n, function(e, n) {
                            null != e._value && (s.isObject(e._value) ? s.extend(t, e._value) : t[n] = e._value)
                        }), s.extend(e.data, t), e.send()
                    })["catch"](function() {})
                },
                getData: function() {
                    return s.toJson(this.data)
                },
                send: function() {
                    var e = this,
                        t = e.options;
                    if (t.noRequest) {
                        try {
                            t.callback()
                        } catch (n) {}
                        return void e.defer.resolve()
                    }
                    e.status = 4;
                    var i = "ENCODE~~V01~~" + u.encode(e.getData());
                    s.post(t.serviceUrl, i, t.jsonp).then(function(n) {
                        n && n.id ? (e.status = 255, f.set(d.storeKey, n.id)) : e.status = 200;
                        try {
                            t.callback(n)
                        } catch (i) {}
                        e.defer.resolve(n), a.set(d.storeTimeKey, new Date - e.startTime), n.tn && (e.serverToken = n.tn, r(t.formId, n.tn))
                    })["catch"](function(n) {
                        e.defer.reject(n), t.errorCallback && t.errorCallback(n)
                    })
                }
            }, e.exports = g
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        e.exports = {
            set: function(e, t) {
                try {
                    localStorage.setItem(e, t)
                } catch (n) {}
            },
            get: function(e) {
                try {
                    return localStorage.getItem(e)
                } catch (t) {}
            },
            remove: function(e) {
                try {
                    localStorage.removeItem(e)
                } catch (t) {}
            }
        }
    }, function(e, t) {
        var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            r = function(e) {
                if (!e) return "";
                for (var t, r, i, o, a, u, c, s = "", l = 0; l < e.length;) t = e.charCodeAt(l++), r = e.charCodeAt(l++), i = e.charCodeAt(l++), o = t >> 2, a = (3 & t) << 4 | r >> 4, u = (15 & r) << 2 | i >> 6, c = 63 & i, isNaN(r) ? u = c = 64 : isNaN(i) && (c = 64), s = s + n.charAt(o) + n.charAt(a) + n.charAt(u) + n.charAt(c);
                return s
            };
        e.exports = {
            encode: r
        }
    }, function(e, t, n) {
        (function(t) {
            function r(e) {
                for (var t = ""; t.length < e;) t += Math.random().toString().substr(2);
                return t.substring(t.length - e)
            }
            var i = t,
                o = n(10),
                a = n(7),
                u = n(11),
                c = n(12).collinaCookieKey,
                s = n(13).isTT,
                l = function() {
                    var e = i._sec_module = i._sec_module || {};
                    if (e.token) return "C" + e.token;
                    var t = +new Date,
                        n = u.get(c);
                    n ? n = n.value : (n = t + r(11), s ? a.set(c, n) : o.set(c, n, null, 3650, "/"));
                    var l = n + t + r(3);
                    return e.token = l, "C" + l
                };
            e.exports = l
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        var n = 864e5,
            r = encodeURIComponent,
            i = function(e) {
                return decodeURIComponent((e + "").replace(/\+/g, " "))
            },
            o = function(e) {
                return "string" == typeof e && "" !== e
            };
        e.exports = {
            get: function(e) {
                var t, n;
                return o(e) && (n = String(document.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"))) && (t = n[1] ? i(n[1]) : ""), t
            },
            set: function(e, t, i, a, u, c) {
                var s = String(r(t)),
                    l = a;
                return "number" == typeof l && (l = new Date, l.setTime(l.getTime() + a * n)), l instanceof Date && (s += "; expires=" + l.toUTCString()), o(i) && (s += "; domain=" + i), o(u) && (s += "; path=" + u), c && (s += "; secure"), document.cookie = e + "=" + s, this
            },
            remove: function(e, t, n, r) {
                return this.set(e, "", t, -1, n, r), this
            }
        }
    }, function(e, t, n) {
        var r = n(2),
            i = n(10),
            o = n(7),
            a = n(12),
            u = n(13).isTT;
        e.exports = {
            set: function(e, t) {
                r.trigger("store.set", {
                    name: e,
                    value: t
                }), o.set(e, t), e === a.storeKey && u ? i.set("um", t, u[1], 365, "/") : i.set(e, t, null, 365, "/")
            },
            get: function(e) {
                var t, n = {
                    name: e
                };
                return r.trigger("store.get", n), (t = n.value) ? {
                    type: n.type,
                    value: t
                } : (t = o.get(e)) ? {
                    type: 2,
                    value: t
                } : (t = e === a.storeKey && u ? i.get("um") || i.get(e) : i.get(e), t ? {
                    type: 16,
                    value: t
                } : void 0)
            },
            remove: function(e) {
                i.remove(e), o.remove(e), r.trigger("store.remove", {
                    name: e
                })
            }
        }
    }, function(e, t) {
        e.exports = {
            storeKey: "_umdata",
            storeTimeKey: "_umcost",
            tkCache: "_umtk",
            collinaCookieKey: "_uab_collina"
        }
    }, function(e, t, n) {
        (function(t) {
            var r = n(3),
                i = t,
                o = i.document,
                a = i.navigator,
                u = o.createElement("canvas"),
                c = {
                    canvas: !(!u.getContext || !u.getContext("2d")),
                    CORS: !!("undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest)
                },
                s = /firefox/i.test(navigator.userAgent),
                l = s && /(tmall\.com|taobao\.com)/.exec(location.hostname),
                f = {
                    support: c,
                    isTT: l
                };
            r.extend(c, {
                plugin: "undefined" != typeof a.plugins,
                ActiveXObject: "undefined" != typeof i.ActiveXObject,
                RTCPeerConnection: i.RTCPeerConnection || i.mozRTCPeerConnection || i.webkitRTCPeerConnection
            });
            var d = function(e, t) {
                    return !!(a.plugins && a.plugins[e] && a.mimeTypes && a.mimeTypes[t] && a.mimeTypes[t].enabledPlugin) && a.plugins[e]
                },
                p = function(e) {
                    var t = !1;
                    try {
                        t = new ActiveXObject(e)
                    } catch (n) {}
                    return t
                };
            r.extend(f, {
                detectPlugin: d,
                detectActiveXObject: p,
                isIE: "Microsoft Internet Explorer" === a.appName,
                getModVersion: function() {
                    var e, t = 0;
                    if (c.plugin && (e = d("Alipay webmod control", "application/alidcp"), e && (t = 1)), c.ActiveXObject && (e = p("Alim.webmod"))) try {
                        t = 1, "undefined" != typeof e.getHardVersion && (t = parseInt(e.getHardVersion().replace(/\./g, ""), 10) || 1)
                    } catch (n) {}
                    return t
                }
            }), e.exports = f
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        (function(t) {
            function r() {
                var e = top && top.location;
                if (!e) return "";
                var t = e.pathname;
                return "/" !== t.charAt(0) && (t = "/" + t), e.protocol + "//" + e.host + t
            }
            var i = n(1),
                o = n(5),
                a = n(2),
                u = n(10),
                c = n(7),
                s = n(11),
                l = n(3),
                f = n(12),
                d = n(13),
                p = d.support,
                h = l.each,
                m = (l.extend, l.singleton),
                g = l.groupHash,
                v = t,
                T = v.document,
                S = v.navigator,
                y = {
                    type: function() {
                        return "pc"
                    },
                    nce: function() {
                        return S.cookieEnabled
                    },
                    plat: function() {
                        var e = S.platform;
                        if (e) return e.split(" ").shift()
                    },
                    nacn: function() {
                        return S.appCodeName
                    },
                    nan: function() {
                        return S.appName
                    },
                    nlg: function() {
                        return S.language
                    },
                    sw: function() {
                        return v.screen.width
                    },
                    sh: function() {
                        return v.screen.height
                    },
                    saw: function() {
                        return v.screen.availWidth
                    },
                    sah: function() {
                        return v.screen.availHeight
                    },
                    bsw: function() {
                        return T.body && T.body.clientWidth
                    },
                    bsh: function() {
                        return T.body && T.body.clientHeight
                    },
                    eloc: function() {
                        return encodeURIComponent(r())
                    },
                    etz: function() {
                        var e = new Date;
                        e.setDate(1), e.setMonth(5);
                        var t = -e.getTimezoneOffset();
                        e.setMonth(11);
                        var n = -e.getTimezoneOffset();
                        return Math.min(t, n)
                    },
                    ett: function() {
                        return (new Date).getTime()
                    },
                    ecn: function() {
                        if (d.support.canvas) {
                            var e = T.createElement("canvas"),
                                t = e.getContext("2d");
                            return e.height = 60, e.width = 400, e.style.display = "inline", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.font = "11pt no-real-font-123", t.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.font = "18pt Arial", t.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 4, 45), o.hash(e.toDataURL() || "")
                        }
                    },
                    eca: function() {
                        return u.get("cna")
                    },
                    token: function() {
                        var e = s.get(f.storeKey);
                        if (e && e.value) return {
                            est: e.type,
                            xs: e.value
                        }
                    },
                    ms: function() {
                        return c.get(f.storeTimeKey)
                    },
                    erd: function() {
                        var e = i.defer();
                        return S.mediaDevices && S.mediaDevices.enumerateDevices ? navigator.mediaDevices.enumerateDevices().then(function(t) {
                            var n = t.map(function(e) {
                                return e.deviceId
                            });
                            e.resolve(n.join(","))
                        }, function() {
                            e.reject()
                        }) : e.reject(), e
                    }
                },
                C = m(function(e) {
                    var t = '<embed height="1" width="1" id="umDcp" type="application/alidcp" class="umidWrapper" tabindex="-1" />';
                    return l.append(e, t), 1
                }),
                B = function(e) {
                    var t = T.getElementById("umDcp");
                    try {
                        t && "undefined" != typeof t.getHardVersion && (e = parseInt(t.getHardVersion().replace(/\./g, ""), 10) || 1)
                    } catch (n) {}
                    return e
                },
                M = function(e) {
                    var t = e.enableMod ? d.getModVersion() : 0;
                    if (t && !d.isIE && e.containers.dcp && (C(e.containers.dcp), t = B(t)), t) try {
                        var n = p.ActiveXObject ? new ActiveXObject("Alim.webmod") : T.getElementById("umDcp");
                        return t >= 2001 && (n.timestamp = e.timestamp || "-"), t
                    } catch (r) {}
                };
            y.xh = function(e) {
                return M(e)
            };
            var b = [];
            ! function() {
                function e(e) {
                    function n(t) {
                        var n = t.match(a);
                        if (n) {
                            var r = n[1];
                            o[r] || (e(r), o[r] = !0)
                        }
                    }
                    if (t) {
                        try {
                            var r = new t({
                                iceServers: [{
                                    url: "stun:stun.services.mozilla.com"
                                }]
                            }, {
                                optional: [{
                                    RtpDataChannels: !0
                                }]
                            })
                        } catch (i) {
                            return
                        }
                        var o = {},
                            a = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
                        r.onicecandidate = function(e) {
                            e.candidate && n(e.candidate.candidate)
                        }, r.createDataChannel(""), r.createOffer(function(e) {
                            if (r.setLocalDescription(e, function() {}, function() {}), e.sdp) {
                                var t = e.sdp.split("\n");
                                t.forEach(function(e) {
                                    0 === e.indexOf("a=candidate:") && n(e)
                                })
                            }
                        }, function() {}), l.poll(function() {
                            if (r.localDescription && r.localDescription.sdp) {
                                var e = r.localDescription.sdp.split("\n");
                                return e.forEach(function(e) {
                                    0 === e.indexOf("a=candidate:") && n(e)
                                }), b.length >= 2
                            }
                        }, 50, 1500)
                    }
                }
                var t = p.RTCPeerConnection;
                e(function(e) {
                    e && b.push(e)
                })
            }(), y.ips = function(e) {
                return l.poll(function() {
                    return b.length >= e.maxIPNum
                }, 50, 1e3).always(function() {
                    return b.join(",")
                })
            };
            var x = function() {
                var e = ["monospace", "sans-serif", "serif"],
                    t = "mmmmmmmmmmlli",
                    n = "72px",
                    r = T.getElementsByTagName("body")[0],
                    i = document.createElement("span");
                i.style.fontSize = n, i.innerHTML = t;
                var o = {},
                    a = {};
                for (var u in e) i.style.fontFamily = e[u], r.appendChild(i), o[e[u]] = i.offsetWidth, a[e[u]] = i.offsetHeight, r.removeChild(i);
                var c = function(t) {
                        var n = !1;
                        for (var u in e) {
                            i.style.fontFamily = t + "," + e[u], r.appendChild(i);
                            var c = i.offsetWidth !== o[e[u]] || i.offsetHeight !== a[e[u]];
                            r.removeChild(i), n = n || c
                        }
                        return n
                    },
                    s = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
                    l = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                s = s.concat(l);
                for (var f = [], d = 0, p = s.length; d < p; d++) c(s[d]) && f.push(s[d]);
                return f
            };
            y.jsfonts = function(e) {
                if (p.CORS && e.enableJSFonts) {
                    var t = x(),
                        n = {
                            jfonts: o.hash(t.join(",")),
                            efcn: t.length,
                            efts: g(t),
                            efty: 1
                        };
                    return n.fonts = n.jfonts, n
                }
            };
            var A = function() {
                    var e = 0;
                    return p.plugin ? !!S.plugins["Silverlight Plug-In"] : p.ActiveXObject ? !!new ActiveXObject("AgControl.AgControl") : e
                },
                w = function() {
                    var e = [];
                    return h(S.plugins || [], function(t) {
                        try {
                            if (t) {
                                var n, r = [];
                                for (n = 0; n < t.length; n++) t.item(n) && r.push(t.item(n).type);
                                var i = t.name + "";
                                t.version && (i += t.version + ""), i += t.filename + "", i += r.join(""), e.push(i)
                            }
                        } catch (o) {}
                    }), e
                },
                k = function() {
                    var e = [],
                        t = function(t) {
                            if (t) {
                                for (var n = 0, r = null; null === r && n < t.ids.length;) {
                                    try {
                                        r = new ActiveXObject(t.ids[n])
                                    } catch (i) {}
                                    n++
                                }
                                if (r) try {
                                    e.push(t.name + "==" + t.getVersion(r, t.ids[n]))
                                } catch (i) {}
                            }
                        },
                        n = [{
                            name: "Quicktime",
                            ids: ["QuickTimeCheckObject.QuickTimeCheck", "QuickTime.QuickTime"],
                            getVersion: function(e) {
                                return e.QuickTimeVersion.toString(16).replace(/^(.)(.)(.).*/, "$1.$2.$3")
                            }
                        }, {
                            name: "Acrobat",
                            ids: ["AcroPDF.PDF", "PDF.PdfCtrl"],
                            getVersion: function(e) {
                                var t;
                                return t = e.GetVersions().split(","), t = t[0].split("="), t = parseFloat(t[1])
                            }
                        }, {
                            name: "RealPlayer",
                            ids: ["RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "rmocx.RealPlayer G2 Control"],
                            getVersion: function(e, t) {
                                return parseFloat(e.GetVersionInfo())
                            }
                        }, {
                            name: "Adobe SVG",
                            ids: ["Adobe.SVGCtl"],
                            getVersion: function(e, t) {
                                return e.getSVGViewerVersion().replace(/[a-zA-Z ]*([0-9.]+)/, "$1")
                            }
                        }, {
                            name: "Windows Media Player",
                            ids: ["WMPlayer.OCX", "MediaPlayer.MediaPlayer.1"],
                            getVersion: function(e, t) {
                                return e.versionInfo
                            }
                        }, {
                            name: "DivX",
                            ids: ["npdivx.DivXBrowserPlugin.1", "npdivx.DivXBrowserPlugin"],
                            getVersion: function(e, t) {
                                return e.GetVersion()
                            }
                        }, {
                            name: "WPFe (Silverlight)",
                            ids: ["AgControl.AgControl"],
                            getVersion: function(e, t) {
                                for (var n = "1", r = "0", i = "0"; e.IsVersionSupported(n + "." + r + "." + i);) n++;
                                for (n--; e.IsVersionSupported(n + "." + r + "." + i);) r++;
                                for (r--; e.IsVersionSupported(n + "." + r + "." + i);) i++;
                                return i--, n + "." + r + "." + i
                            }
                        }, {
                            name: "MSXML",
                            ids: ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0"],
                            getVersion: function(e, t) {
                                return t.replace(/^[a-zA-Z.2]+\.([0-9]+\.[0-9.]+)/, "$1")
                            }
                        }];
                    return h(n, t), e
                };
            y.plugin = function() {
                if (p.CORS) {
                    var e = [];
                    return p.plugin ? e = w() : p.ActiveXObject && (e = k()), {
                        epl: e.length,
                        ep: o.hash(e.join(",")),
                        epls: g(e),
                        esl: A()
                    }
                }
            }, a.one("main.loaded", function(e) {
                e.um
            }), a.on("store.set", function(e) {}), a.on("store.remove", function(e) {}), a.on("store.get", function(e) {}), e.exports = {
                init: function(e, t) {
                    var n = {};
                    return l.each(y, function(r, o) {
                        try {
                            var a = r(e, t);
                            "undefined" == typeof a ? n[o] = i.reject() : l.isObject(a) ? a instanceof i ? n[o] = a : a.promise instanceof i ? (setTimeout(function() {
                                a.reject(o + ": timeout")
                            }, 3e3), n[o] = a.promise) : n[o] = i.resolve(a) : n[o] = i.resolve(a)
                        } catch (u) {}
                    }), n
                }
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t, n) {
        function r(e) {
            var t = "g.alicdn.com";
            if (!e) return t;
            if (/aliexpress/.test(location.href)) return "aeis.alicdn.com";
            var n = u.exec(e);
            return n ? n[3] + (n[4] ? ":" + n[4] : "") : t
        }

        function i() {
            for (var e, t = c.getElementsByTagName("script"), n = /security\/umscript/, r = 0; r < t.length; r++)
                if (e = o(t[r]), n.test(e)) return t[r];
            return c.currentScript ? c.currentScript : t[t.length - 1]
        }

        function o(e) {
            return e.hasAttribute ? e.src : e.getAttribute("src", 4)
        }
        var a = n(3),
            u = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
            c = document,
            s = (r(o(i())), {
                enabled: !0,
                cache: !0,
                closeImage: !0,
                jsonp: !1,
                token: "",
                appName: "",
                siteId: "",
                sessionId: "",
                userId: n(16).get() || "",
                model: "AA",
                traceId: "",
                formId: "",
                serviceLocation: "cn",
                noRequest: !1,
                clientType: "M"
            });
        a.extend(s, {
            clientType: "P",
            maxIPNum: 2,
            enableJSFonts: !1,
            timeout: 3e3,
            timestamp: "-",
            enableMod: !0,
            containers: {
                dcp: null
            }
        }), e.exports = s
    }, function(e, t, n) {
        var r = n(10),
            i = n(7),
            o = n(3),
            a = o.parseJson,
            u = {
                taobao: function() {
                    return r.get("tracknick")
                },
                alipay: function() {
                    var e = i.get("home-username");
                    if (e) {
                        e = a(e);
                        var t = e.match(/^(\d+?)\|/);
                        return t && 2 === t.length ? a(e.replace(t[0], "")).value : void 0
                    }
                },
                alibaba: function() {
                    var e, t, n = document.getElementById("alibaba-login-box");
                    if (n && (e = n.src, t = /loginId=(?:([^&#]*)|&|#|$)/.exec(e))) return decodeURIComponent(t[1])
                }
            };
        e.exports = {
            get: function() {
                var e;
                return o.each(u, function(t) {
                    try {
                        e = t()
                    } catch (n) {}
                    if (e) return !1
                }), e
            }
        }
    }]);

}