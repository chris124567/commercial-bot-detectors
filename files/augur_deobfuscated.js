! function() {
    function e() {
        return Date.now() - c.start
    }

    function t(e, t, n) {
        e[F](L + t, n, d)
    }

    function n(e, t, n) {
        try {
            return e(t, n)
        } catch (a) {
            r("tryCatch", a)
        }
    }

    function r(e, t) {
        U++ < 10 && !v.noer && "tryCatch" !== e && ((new Image).src = j + "/info?source=" + e + "&error=" + g(t.stack) + "&SLT=" + P.SLT + "&CID=" + P.CID + "&BXCID=" + (P.BXInfo && P.BXInfo.clientid) + "&V=" + P.version), P.ERR.push([e, t])
    }

    function a(t, n) {
        var r = 5,
            a = 0,
            s = [],
            c = "",
            l = "",
            u = o("xxxID");
        "" != u && void 0 != u && (P.FP.xxxID = u);
        for (var d = 0; d < r; d++) {
            var f = "https://s" + d + ".cdnbasket.net";
            i(f, d, function(o) {
                if (v["obsR" + o.tag] = e(), s[o.tag] = o.data, 0 === o.tag && (c = void 0 !== o.oldID1 ? o.oldID1 : "", l = void 0 !== o.newID1 ? o.newID1 : ""), ++a === r) {
                    var d = s.join("");
                    d.length !== 3 * r && (d = "");
                    var f = "https://observer.augur.io/updateInfo?oldID1=" + c + "&newID1=" + l + "&ID2=" + d + "&xxxID=" + u;
                    i(f, "observer", function(r) {
                        v.obsEnd = e(), clearTimeout(t), void 0 !== r.xxxID && (document.cookie = "xxxSC=" + r.xxxID + "; expires=" + new Date(Date.now() + 12e4).toUTCString(), void 0 !== r.c && 5 !== r.c || (document.cookie = "xxxID=" + r.xxxID + "; expires=Sun, 26 Jan 2020 01:26:00 UTC; path=/; domain=." + n), P.FP.xxxID = r.xxxID), P.lib && P.lib.brain && P.lib.brain("xxx")
                    })
                }
            })
        }
    }

    function i(e, t, n) {
        var a = new XMLHttpRequest,
            i = {
                tag: t
            };
        a.onload = function() {
            if (4 === this.readyState) {
                if (200 === this.status) {
                    var e;
                    try {
                        e = JSON.parse(this.responseText), "observer" === t ? (i.xxxID = e.xxxID, i.c = e.c) : "pixel" === t ? i.data = e : (i.data = e.data, i.oldID1 = e.oldID, i.newID1 = e.newID)
                    } catch (a) {
                        r(t, a)
                    }
                }
                n(i)
            }
        }, a.ontimeout = function(e) {
            n(i)
        }, a.onerror = function(e) {
            n(i)
        }, a.open("GET", e, !0), a.timeout = 3e3, a.send()
    }

    function o(e) {
        for (var t = e + "=", n = m(document.cookie), r = n.split(";"), a = 0; a < r.length; a++) {
            for (var i = r[a];
                " " === i.charAt(0);) i = i.substring(1);
            if (0 === i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return ""
    }
    var s, c = {
            start: (new Date).getTime()
        },
        l = window,
        u = l.document,
        d = !0,
        f = !1,
        m = l.decodeURIComponent,
        g = l.encodeURIComponent,
        h = "?augurConfig=",
        p = u.getElementById("augur.js"),
        b = function() {
            if (p) return m(p.src);
            for (var e, t = u.scripts, n = t.length; n--;)
                if ((e = m(t[n].src)).indexOf(h) > -1) return p = t[n], e
        }(),
        v = {};
    ! function() {
        if (b.indexOf(h) > -1) try {
            var e = JSON.parse(b.split(h)[1]);
            for (var t in e) v[t.split("data-")[1]] = e[t]
        } catch (n) {} else
            for (var r, a, i = p.attributes, o = i.length; o--;) r = i[o], (r && r.constructor && "Attr" === r.constructor.name || r.specified === d) && ((a = r.name).indexOf("data-") > -1 && (v[a.slice(5)] = r.value), p.attributes.removeNamedItem(a))
    }();
    var y, w, k = "Augur",
        x = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        S = function() {},
        T = (v.wl || "").split(","),
        E = location,
        I = l.navigator,
        D = I.cookieEnabled,
        C = I.userAgent,
        O = C.indexOf("Firefox/") > -1 && C.indexOf("Android") > -1 && C.indexOf("Gecko/") > -1,
        A = function() {
            var e = E.hostname;
            if (!D) return e;
            for (var t = x + "=1", n = e.split("."), r = n.length - 1; r--;)
                if (e = n.slice(r).join("."), u.cookie = t + ";domain=." + e + ";", u.cookie.indexOf(t) > -1) return u.cookie = x + "=;domain=." + e + ";expires=Thu, 01 Jan 1970 00:00:00 UTC", e
        }(),
        M = v.warpspeed,
        _ = (v.prot || E.protocol) + (T[0] || "//request.augur.io"),
        R = "https:" + (T[1] || "//cdn.augur.io"),
        j = "https:" + (T[2] || "//info.augur.io"),
        P = function() {
            P = this, P.ERR = [], P.MEM = {}, Function.prototype.bind || (Function.prototype.bind = function(e) {
                if ("function" == typeof this) {
                    var t = Array.prototype.slice.call(arguments, 1),
                        n = this,
                        r = function() {},
                        a = function() {
                            return n.apply(this instanceof r ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                        };
                    return this.prototype && (r.prototype = this.prototype), a.prototype = new r, a
                }
            }), Date.now || (Date.now = function() {
                return (new Date).getTime()
            }), String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }), l.JSON || function() {
                function e(t, r) {
                    function i(e) {
                        if (i[e] !== p) return i[e];
                        var t;
                        if ("bug-string-char-index" == e) t = "a" != "a" [0];
                        else if ("json" == e) t = i("json-stringify") && i("json-parse");
                        else {
                            var n;
                            if ("json-stringify" == e) {
                                t = r.stringify;
                                var a = "function" == typeof t && v;
                                if (a) {
                                    (n = function() {
                                        return 1
                                    }).toJSON = n;
                                    try {
                                        a = "0" === t(0) && "0" === t(new o) && '""' == t(new s) && t(b) === p && t(p) === p && t() === p && "1" === t(n) && "[1]" == t([n]) && "[null]" == t([p]) && "null" == t(null) && "[null,null,null]" == t([p, b, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == t({
                                            a: [n, !0, !1, null, "\0\b\n\f\r\t"]
                                        }) && "1" === t(null, n) && "[\n 1,\n 2\n]" == t([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == t(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == t(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == t(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == t(new l(-1))
                                    } catch (c) {
                                        a = !1
                                    }
                                }
                                t = a
                            }
                            if ("json-parse" == e) {
                                if (t = r.parse, "function" == typeof t) try {
                                    if (0 === t("0") && !t(!1)) {
                                        n = t('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                        var u = 5 == n.a.length && 1 === n.a[0];
                                        if (u) {
                                            try {
                                                u = !t('"\t"')
                                            } catch (d) {}
                                            if (u) try {
                                                u = 1 !== t("01")
                                            } catch (f) {}
                                            if (u) try {
                                                u = 1 !== t("1.")
                                            } catch (m) {}
                                        }
                                    }
                                } catch (g) {
                                    u = !1
                                }
                                t = u
                            }
                        }
                        return i[e] = !!t
                    }
                    t || (t = a.Object()), r || (r = a.Object());
                    var o = t.Number || a.Number,
                        s = t.String || a.String,
                        c = t.Object || a.Object,
                        l = t.Date || a.Date,
                        u = t.SyntaxError || a.SyntaxError,
                        d = t.TypeError || a.TypeError,
                        f = t.Math || a.Math,
                        m = t.JSON || a.JSON;
                    "object" == typeof m && m && (r.stringify = m.stringify, r.parse = m.parse);
                    var g, h, p, c = c.prototype,
                        b = c.toString,
                        v = new l(-0xc782b5b800cec);
                    try {
                        v = -109252 == v.getUTCFullYear() && 0 === v.getUTCMonth() && 1 === v.getUTCDate() && 10 == v.getUTCHours() && 37 == v.getUTCMinutes() && 6 == v.getUTCSeconds() && 708 == v.getUTCMilliseconds()
                    } catch (y) {}
                    if (!i("json")) {
                        var w = i("bug-string-char-index");
                        if (!v) var k = f.floor,
                            x = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            S = function(e, t) {
                                return x[t] + 365 * (e - 1970) + k((e - 1969 + (t = +(1 < t))) / 4) - k((e - 1901 + t) / 100) + k((e - 1601 + t) / 400)
                            };
                        if ((g = c.hasOwnProperty) || (g = function(e) {
                                var t, n = {};
                                return (n.__proto__ = null, n.__proto__ = {
                                    toString: 1
                                }, n).toString != b ? g = function(e) {
                                    var t = this.__proto__;
                                    return e = e in (this.__proto__ = null, this), this.__proto__ = t, e
                                } : (t = n.constructor, g = function(e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }), n = null, g.call(this, e)
                            }), h = function(e, t) {
                                var r, a, i, o = 0;
                                (r = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, a = new r;
                                for (i in a) g.call(a, i) && o++;
                                return r = a = null, o ? h = 2 == o ? function(e, t) {
                                    var n, r = {},
                                        a = "[object Function]" == b.call(e);
                                    for (n in e) a && "prototype" == n || g.call(r, n) || !(r[n] = 1) || !g.call(e, n) || t(n)
                                } : function(e, t) {
                                    var n, r, a = "[object Function]" == b.call(e);
                                    for (n in e) a && "prototype" == n || !g.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || g.call(e, n = "constructor")) && t(n)
                                } : (a = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), h = function(e, t) {
                                    var r, i = "[object Function]" == b.call(e),
                                        o = !i && "function" != typeof e.constructor && n[typeof e.hasOwnProperty] && e.hasOwnProperty || g;
                                    for (r in e) i && "prototype" == r || !o.call(e, r) || t(r);
                                    for (i = a.length; r = a[--i]; o.call(e, r) && t(r));
                                }), h(e, t)
                            }, !i("json-stringify")) {
                            var T = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                },
                                E = function(e, t) {
                                    return ("000000" + (t || 0)).slice(-e)
                                },
                                I = function(e) {
                                    for (var t = '"', n = 0, r = e.length, a = !w || 10 < r, i = a && (w ? e.split("") : e); n < r; n++) {
                                        var o = e.charCodeAt(n);
                                        switch (o) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                t += T[o];
                                                break;
                                            default:
                                                if (32 > o) {
                                                    t += "\\u00" + E(2, o.toString(16));
                                                    break
                                                }
                                                t += a ? i[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                },
                                D = function(e, t, n, r, a, i, o) {
                                    var s, c, l, u, f, m, v, y, w;
                                    try {
                                        s = t[e]
                                    } catch (x) {}
                                    if ("object" == typeof s && s)
                                        if (c = b.call(s), "[object Date]" != c || g.call(s, "toJSON")) "function" == typeof s.toJSON && ("[object Number]" != c && "[object String]" != c && "[object Array]" != c || g.call(s, "toJSON")) && (s = s.toJSON(e));
                                        else if (s > -1 / 0 && s < 1 / 0) {
                                        if (S) {
                                            for (u = k(s / 864e5), c = k(u / 365.2425) + 1970 - 1; S(c + 1, 0) <= u; c++);
                                            for (l = k((u - S(c, 0)) / 30.42); S(c, l + 1) <= u; l++);
                                            u = 1 + u - S(c, l), f = (s % 864e5 + 864e5) % 864e5, m = k(f / 36e5) % 24, v = k(f / 6e4) % 60, y = k(f / 1e3) % 60, f %= 1e3
                                        } else c = s.getUTCFullYear(), l = s.getUTCMonth(), u = s.getUTCDate(), m = s.getUTCHours(), v = s.getUTCMinutes(), y = s.getUTCSeconds(), f = s.getUTCMilliseconds();
                                        s = (0 >= c || 1e4 <= c ? (0 > c ? "-" : "+") + E(6, 0 > c ? -c : c) : E(4, c)) + "-" + E(2, l + 1) + "-" + E(2, u) + "T" + E(2, m) + ":" + E(2, v) + ":" + E(2, y) + "." + E(3, f) + "Z"
                                    } else s = null;
                                    if (n && (s = n.call(t, e, s)), null === s) return "null";
                                    if (c = b.call(s), "[object Boolean]" == c) return "" + s;
                                    if ("[object Number]" == c) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                                    if ("[object String]" == c) return I("" + s);
                                    if ("object" == typeof s) {
                                        for (e = o.length; e--;)
                                            if (o[e] === s) throw d();
                                        if (o.push(s), w = [], t = i, i += a, "[object Array]" == c) {
                                            for (l = 0, e = s.length; l < e; l++) c = D(l, s, n, r, a, i, o), w.push(c === p ? "null" : c);
                                            e = w.length ? a ? "[\n" + i + w.join(",\n" + i) + "\n" + t + "]" : "[" + w.join(",") + "]" : "[]"
                                        } else h(r || s, function(e) {
                                            var t = D(e, s, n, r, a, i, o);
                                            t !== p && w.push(I(e) + ":" + (a ? " " : "") + t)
                                        }), e = w.length ? a ? "{\n" + i + w.join(",\n" + i) + "\n" + t + "}" : "{" + w.join(",") + "}" : "{}";
                                        return o.pop(), e
                                    }
                                };
                            r.stringify = function(e, t, r) {
                                var a, i, o, s;
                                if (n[typeof t] && t)
                                    if ("[object Function]" == (s = b.call(t))) i = t;
                                    else if ("[object Array]" == s) {
                                    o = {};
                                    for (var c, l = 0, u = t.length; l < u; c = t[l++], s = b.call(c), ("[object String]" == s || "[object Number]" == s) && (o[c] = 1));
                                }
                                if (r)
                                    if ("[object Number]" == (s = b.call(r))) {
                                        if (0 < (r -= r % 1))
                                            for (a = "", 10 < r && (r = 10); a.length < r; a += " ");
                                    } else "[object String]" == s && (a = 10 >= r.length ? r : r.slice(0, 10));
                                return D("", (c = {}, c[""] = e, c), i, o, a, "", [])
                            }
                        }
                        if (!i("json-parse")) {
                            var C, O, A = s.fromCharCode,
                                M = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "\t",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                },
                                _ = function() {
                                    throw C = O = null, u()
                                },
                                R = function() {
                                    for (var e, t, n, r, a, i = O, o = i.length; C < o;) switch (a = i.charCodeAt(C)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            C++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = w ? i.charAt(C) : i[C], C++, e;
                                        case 34:
                                            for (e = "@", C++; C < o;)
                                                if (a = i.charCodeAt(C), 32 > a) _();
                                                else if (92 == a) switch (a = i.charCodeAt(++C)) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    e += M[a], C++;
                                                    break;
                                                case 117:
                                                    for (t = ++C, n = C + 4; C < n; C++) a = i.charCodeAt(C), 48 <= a && 57 >= a || 97 <= a && 102 >= a || 65 <= a && 70 >= a || _();
                                                    e += A("0x" + i.slice(t, C));
                                                    break;
                                                default:
                                                    _()
                                            } else {
                                                if (34 == a) break;
                                                for (a = i.charCodeAt(C), t = C; 32 <= a && 92 != a && 34 != a;) a = i.charCodeAt(++C);
                                                e += i.slice(t, C)
                                            }
                                            if (34 == i.charCodeAt(C)) return C++, e;
                                            _();
                                        default:
                                            if (t = C, 45 == a && (r = !0, a = i.charCodeAt(++C)), 48 <= a && 57 >= a) {
                                                for (48 == a && (a = i.charCodeAt(C + 1), 48 <= a && 57 >= a) && _(); C < o && (a = i.charCodeAt(C), 48 <= a && 57 >= a); C++);
                                                if (46 == i.charCodeAt(C)) {
                                                    for (n = ++C; n < o && (a = i.charCodeAt(n), 48 <= a && 57 >= a); n++);
                                                    n == C && _(), C = n
                                                }
                                                if (a = i.charCodeAt(C), 101 == a || 69 == a) {
                                                    for (a = i.charCodeAt(++C), 43 != a && 45 != a || C++, n = C; n < o && (a = i.charCodeAt(n), 48 <= a && 57 >= a); n++);
                                                    n == C && _(), C = n
                                                }
                                                return +i.slice(t, C)
                                            }
                                            if (r && _(), "true" == i.slice(C, C + 4)) return C += 4, !0;
                                            if ("false" == i.slice(C, C + 5)) return C += 5, !1;
                                            if ("null" == i.slice(C, C + 4)) return C += 4, null;
                                            _()
                                    }
                                    return "$"
                                },
                                j = function(e) {
                                    var t, n;
                                    if ("$" == e && _(), "string" == typeof e) {
                                        if ("@" == (w ? e.charAt(0) : e[0])) return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; e = R(), "]" != e; n || (n = !0)) n && ("," == e ? (e = R(), "]" == e && _()) : _()), "," == e && _(), t.push(j(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; e = R(), "}" != e; n || (n = !0)) n && ("," == e ? (e = R(), "}" == e && _()) : _()), "," != e && "string" == typeof e && "@" == (w ? e.charAt(0) : e[0]) && ":" == R() || _(), t[e.slice(1)] = j(R());
                                            return t
                                        }
                                        _()
                                    }
                                    return e
                                },
                                P = function(e, t, n) {
                                    n = L(e, t, n), n === p ? delete e[t] : e[t] = n
                                },
                                L = function(e, t, n) {
                                    var r, a = e[t];
                                    if ("object" == typeof a && a)
                                        if ("[object Array]" == b.call(a))
                                            for (r = a.length; r--;) P(a, r, n);
                                        else h(a, function(e) {
                                            P(a, e, n)
                                        });
                                    return n.call(e, t, a)
                                };
                            r.parse = function(e, t) {
                                var n, r;
                                return C = 0, O = "" + e, n = j(R()), "$" != R() && _(), C = O = null, t && "[object Function]" == b.call(t) ? L((r = {}, r[""] = n, r), "", t) : n
                            }
                        }
                    }
                    return r.runInContext = e, r
                }
                var t = "function" == typeof define && define.amd,
                    n = {
                        "function": !0,
                        object: !0
                    },
                    r = n[typeof exports] && exports && !exports.nodeType && exports,
                    a = n[typeof window] && window || this,
                    i = r && n[typeof module] && module && !module.nodeType && "object" == typeof global && global;
                if (!i || i.global !== i && i.window !== i && i.self !== i || (a = i), r && !t) e(a, r);
                else {
                    var o = a.JSON,
                        s = a.JSON3,
                        c = !1,
                        l = e(a, a.JSON3 = {
                            noConflict: function() {
                                return c || (c = !0, a.JSON = o, a.JSON3 = s, o = s = null), l
                            }
                        });
                    a.JSON = {
                        parse: l.parse,
                        stringify: l.stringify
                    }
                }
                t && define(function() {
                    return l
                })
            }.call(this), Object.keys || (Object.keys = function() {
                var e = Object.prototype.hasOwnProperty,
                    t = !{
                        toString: null
                    }.propertyIsEnumerable("toString"),
                    n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    r = n.length;
                return function(a) {
                    if ("function" != typeof a && ("object" != typeof a || null === a)) throw new TypeError("Object.keys called on non-object");
                    var i, o, s = [];
                    for (i in a) e.call(a, i) && s.push(i);
                    if (t)
                        for (o = 0; o < r; o++) e.call(a, n[o]) && s.push(n[o]);
                    return s
                }
            }()), window.console = window.console || {
                info: S
            }, window.console.info = window.console.info || S, !![].indexOf || (Array.prototype.indexOf = function(e) {
                for (var t = this, n = t.length; n--;)
                    if (t[n] === e) return n;
                return -1
            }), P.responseTime = c, v.version = P.version = "3.16.38", P.cake.init(function(r) {
                function i(e) {
                    if (!(e >= 10)) return P.MEM.received !== !0 ? void setTimeout(function() {
                        i(e + 1)
                    }, 1e3) : void((new Image).src = "https://pixel.cdnwidget.com/redirect?deviceid=" + P.BXInfo.deviceid + "&clientid=" + P.BXInfo.clientid + "&wsid=" + P.BXInfo.wsid)
                }

                function s() {
                    void 0 === P.FP.xxxID && (P.FP.xxxID = "timeout"), P.lib && P.lib.brain && P.lib.brain("xxx"), clearTimeout(g)
                }
                var c = P.cake,
                    d = r.SLT,
                    f = r.UID;
                if (!M && !/(\.gov\.uk|augur\.(io|ai))/.test(A)) return P.lib.destruct();
                if (v.fatboy) return P.lib.fatBoy(), P.lib.destruct();
                if (v.fastcallback && c.getCache(), P.CID = M, P.SLT = d, P.UID = f, P.URL = "//" + E.hostname + E.pathname, v.id && "2^HIykD" === P.CID) {
                    v.BXInfo = P.BXInfo = n(JSON.parse, v.id) || {};
                    var m = l.bouncex;
                    P.BXInfo.wsid = m && m.ibx && m.ibx.wsid || void 0
                } else P.BXInfo = {};
                P.fingerprint.init(), "1" === v.fire && i(0);
                var g, h = (I.vendor || I.appName || "", window.navigator && window.navigator.userAgent && window.navigator.userAgent.toLowerCase() || ""),
                    p = /^((?!chrome|android|windows).)*safari/.test(h),
                    b = /version\/[0-8]{1}(\.[0-9]+)?(\.[0-9]+)? /.test(h),
                    y = o("xxxSC") || void 0;
                "1" !== v.noso && p === !0 && void 0 === y && b === !1 || "1" === v.observerdev ? "2^HIykD" === M && "1" === v.observer || "2^HIykD" !== M ? (g = setTimeout(s, 4e3), v.obsStart = e(), a(g, A)) : P.lib && P.lib.brain && P.lib.brain("xxx") : void 0 !== y ? (v.xxxSC = !0, P.FP.xxxID = y, P.lib && P.lib.brain && P.lib.brain("xxx")) : P.lib && P.lib.brain && P.lib.brain("xxx"), f || v.nopi || ("complete" === u.readyState ? P.anonymous.init() : t(u, "readystatechange", P.anonymous.init))
            })
        },
        L = l.attachEvent ? "on" : "",
        F = L ? "attachEvent" : "addEventListener",
        N = {
            UID: "",
            SLT: ""
        },
        U = 0;
    P.prototype = {
        constructor: P,
        anonymous: {
            init: function() {
                if ("complete" === u.readyState) {
                    var e, t = u.getElementsByTagName("iframe"),
                        n = t.length,
                        r = (P.anonymous || {}).m,
                        a = v.link;
                    if (P.MEM.at === d || !r) return;
                    if (P.MEM.at = d, a && P.lib.extractEmail(a)) return P.anonymous.sendNewDeviceOwner({
                        email: a,
                        meta: "link"
                    });
                    for (; n--;) try {
                        Object.keys(e = t[n]).length > 1 && r(e.contentWindow)
                    } catch (i) {}
                    r(l), setTimeout(P.anonymous.S, 5e3, l)
                }
            },
            m: function(e) {
                try {
                    var n = P.anonymous,
                        r = P.lib.extractEmail,
                        a = n.sendNewDeviceOwner;
                    e.navigator.cookieEnabled && (n.C(e, r, a), n.L(e, r, a)), n.U(e, r, a), n.F(e), t(e, "message", n.M)
                } catch (i) {}
            },
            sendNewDeviceOwner: function(e) {
                var t = P.cake,
                    n = t && t.send;
                P.MEM.sent && n ? n(e) : P.MEM.ndo = e
            },
            C: function(e, t, n) {
                try {
                    for (var a, i = e.document.cookie.split(";"), o = i.length; o--;)
                        if (a = t(i[o].split("=")[1])) return n({
                            email: a,
                            meta: "C"
                        })
                } catch (s) {
                    r("anon.C", s)
                }
            },
            F: function(e) {
                for (var n, r = [].slice.call(e.document.getElementsByTagName("input")), a = r.length; a--;) n = r[a], "hidden" !== n.type ? t(n, "blur", function() {
                    var e, t = r.length,
                        n = P.lib && P.lib.extractEmail;
                    if (n)
                        for (; 0 !== t--;)
                            if (e = n(r[t].value)) return P.anonymous.sendNewDeviceOwner({
                                email: e,
                                meta: "form"
                            })
                }) : r.splice(a, 1)
            },
            L: function(e, t, n) {
                for (var r, a = e.localStorage, i = a.length; i--;)
                    if (r = t(a.getItem(a.key(i)))) return n({
                        email: r,
                        meta: "L"
                    })
            },
            M: function(e) {
                var t, n = P.lib && P.lib.extractEmail,
                    r = P.anonymous && P.anonymous.sendNewDeviceOwner;
                n && r && (t = n(e.data)) && r({
                    email: t,
                    meta: "M"
                })
            },
            S: function(e) {
                e && e.FB && "function" == typeof e.FB.api && e.FB.api("/me", function(e) {
                    var t = P.anonymous;
                    e && (e.username || e.email) && t && t.sendNewDeviceOwner && t.sendNewDeviceOwner({
                        email: e.email,
                        facebook_handle: e.username,
                        meta: "S"
                    })
                })
            },
            U: function(e, t, n) {
                var a = e.document.URL,
                    i = [];
                if (a && a.constructor === String)
                    for (var o, s = a.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) || [], c = s.length; c--;)(o = t(s[c])) && i.indexOf(o) === -1 && i.push(o);
                if (i.length > 0) try {
                    n({
                        email: i[0],
                        meta: "url"
                    })
                } catch (l) {
                    r("U", l)
                }
            }
        },
        cake: {
            init: function(e) {
                var n = this;
                n.cache.get(e), t(l, "beforeunload", n.bake)
            },
            bake: function() {
                if (y) {
                    l.name = y;
                    try {
                        l.localStorage.setItem("Augur", y), N.SLT && this.cache.set("SLT", N.SLT)
                    } catch (e) {}
                }
            },
            crossDomainStorage: function(e, r, a) {
                var i = P.MEM.cds;
                if (!i) {
                    var o = function() {
                        var e, t = this;
                        t.id = 0, t.iframe = s, t.iframeReady = f, t.origin = (e = R.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)/)) && e[1] + "//" + e[3], t.path = (v.storage || "/_.htm") + (v.rt ? "?rt=" + v.rt : ""), t.queue = [], t.requests = {}
                    };
                    o.prototype = {
                        constructor: o,
                        init: function() {
                            var e = this,
                                n = e.iframe;
                            n || (n = u.createElement("iframe"), n.src = R + e.path, n.onload = e.iframeLoaded.bind(e), n.id = n.name = "exQuadrupedibus", n.style.display = "none", e.iframe = n, p.parentNode.appendChild(n), t(l, "message", e.handleMessage.bind(e)))
                        },
                        requestValue: function(e, t, n) {
                            var r = this,
                                a = {
                                    callback: n,
                                    request: {
                                        id: ++r.id,
                                        key: e,
                                        value: t
                                    }
                                };
                            r.iframeReady ? r.sendRequest(a) : (r.queue.push(a), r.iframe || r.init())
                        },
                        sendRequest: function(e) {
                            var t = this;
                            t.iframe.contentWindow.postMessage(JSON.stringify(e.request), t.origin), t.requests[e.request.id] = e
                        },
                        iframeLoaded: function() {
                            var e = this,
                                t = e.queue,
                                n = t.length;
                            for (e.iframeReady = d; n--;) e.sendRequest(t.pop())
                        },
                        handleMessage: function(e) {
                            var t = this;
                            if (e.origin === t.origin) {
                                var r = t.requests,
                                    a = n(JSON.parse, e.data) || {},
                                    i = a.id,
                                    o = r[i];
                                o && (o.callback && o.callback(a.value), delete r[i], P.MEM.fn && 0 === Object.keys(r).length && delete P.MEM.cds)
                            }
                        }
                    }, P.lib.brain("cds"), P.MEM.cds = i = new o
                }
                i.requestValue(e, r, a)
            },
            cache: {
                get: function(e) {
                    function t() {
                        w || (e(N), w = d, P.lib && P.lib.brain && P.lib.brain("cdsfin")), clearTimeout(s)
                    }
                    if (w) return e(N);
                    var r = this,
                        a = r.storage,
                        i = r.init(),
                        o = P.lib,
                        s = setTimeout(t, 200);
                    if (o) {
                        var c = o.b64Decode;
                        for (var l in a) n(function() {
                            a[l].get(function(e) {
                                if (e && e.constructor === String) {
                                    var r = n(JSON.parse, "{" === e.charAt(0) ? e : o.coffee.cl(c(e)) || c(e));
                                    r && (N.SLT = o.getOlderSLT(N.SLT, r.SLT), N.UID = r.UID || N.UID, t())
                                }
                                "crossDomainStorage" === l && P.lib && P.lib.brain && P.lib.brain("cdsfin"), i-- || t()
                            })
                        })
                    }
                },
                set: function(e, t) {
                    if (/SLT|UID/.test(e)) {
                        N[e] = t, y = P.lib.b64Encode(P.lib.coffee.glutiam(JSON.stringify(N)));
                        var n = this.storage;
                        for (var r in n) n[r].set(y)
                    }
                },
                clear: function() {
                    var e = this.storage;
                    for (var t in e) e[t].clear()
                },
                init: function() {
                    var e = this.storage,
                        t = I.vendor || I.appName;
                    return "1" === v.dwn && delete e.name, D || (delete e.cookie, delete e.localStorage, delete e.sessionStorage), /MSIE [1-9]\./.test(C) && (delete e.crossDomainStorage, delete e.indexedDB, P.MEM.cds = P.MEM.cdsfin = P.MEM.pr = P.MEM.ie = d), t && (t.indexOf("Google") === -1 && delete e.fileSystem, t.indexOf("Apple") > -1 && +(/([0-9]+)\.[0-9]+\.[0-9]+ Safari/.exec(C) || [s, 1])[1] < 8 && delete e.indexedDB), Object.keys(e).length
                },
                storage: {
                    name: {
                        get: function(e) {
                            e(l.name)
                        },
                        set: function(e) {
                            l.name = e
                        },
                        clear: function() {
                            l.name = ""
                        }
                    },
                    localStorage: {
                        get: function(e) {
                            e(l.localStorage[k])
                        },
                        set: function(e) {
                            void 0 !== l.localStorage && (l.localStorage[k] = e)
                        },
                        clear: function() {
                            l.localStorage.removeItem(k)
                        }
                    },
                    sessionStorage: {
                        get: function(e) {
                            e(l.sessionStorage[k])
                        },
                        set: function(e) {
                            void 0 !== l.sessionStorage && (l.sessionStorage[k] = e)
                        },
                        clear: function() {
                            l.sessionStorage.removeItem(k)
                        }
                    },
                    cookie: {
                        get: function(e) {
                            e((u.cookie.match("(^|;)\\s*__context\\s*=\\s*([^;]+)") || [])[2])
                        },
                        set: function(e) {
                            u.cookie = "__context=" + e + "; expires=Sun, 26 Jan 2020 01:26:00 UTC; path=/; domain=." + A
                        },
                        clear: function() {
                            u.cookie = "__context=;expires=Thu, 01 Jan 1970 00:00:00 UTC"
                        }
                    },
                    fileSystem: {
                        get: function(e) {
                            try {
                                (l.requestFileSystem || l.webkitRequestFileSystem)(l.TEMPORARY, 1024, function(t) {
                                    t.root.getFile(k, {}, function(t) {
                                        t.file(function(t) {
                                            var n = new FileReader;
                                            n.readAsText(t), n.onloadend = function() {
                                                e(this.result)
                                            }
                                        })
                                    })
                                }, e)
                            } catch (t) {
                                e()
                            }
                        },
                        set: function(e) {
                            n(function() {
                                (l.requestFileSystem || l.webkitRequestFileSystem)(l.TEMPORARY, 1024, function(t) {
                                    t.root.getFile(k, {
                                        create: d
                                    }, function(t) {
                                        t.createWriter(function(t) {
                                            t.truncate(0), t.onwriteend = function() {
                                                t.length || t.write(new Blob([e], {
                                                    type: "text/plain"
                                                }))
                                            }
                                        })
                                    })
                                })
                            })
                        },
                        clear: function() {
                            n(function() {
                                (l.requestFileSystem || l.webkitRequestFileSystem)(l.TEMPORARY, 1024, function(e) {
                                    e.root.getFile(k, {
                                        create: d
                                    }, function(e) {
                                        e.createWriter(function(e) {
                                            e.truncate(0)
                                        })
                                    })
                                })
                            })
                        }
                    },
                    indexedDB: {
                        get: function(e) {
                            try {
                                var t = l.indexedDB.open(k);
                                t.onerror = e, t.onsuccess = function(t) {
                                    try {
                                        t.target.result.transaction([k], "readonly").objectStore(k).get(k).onsuccess = function(t) {
                                            n(function() {
                                                e(t.target.result.value)
                                            })
                                        }
                                    } catch (r) {
                                        e()
                                    }
                                }
                            } catch (r) {
                                e()
                            }
                        },
                        set: function(e) {
                            n(function() {
                                var t = l.indexedDB;
                                t.deleteDatabase(k).onsuccess = function() {
                                    t.open(k).onupgradeneeded = function(t) {
                                        n(function() {
                                            t.target.result.createObjectStore(k, {
                                                keyPath: "key"
                                            }).add({
                                                key: k,
                                                value: e
                                            })
                                        })
                                    }
                                }
                            })
                        },
                        clear: function() {
                            n(function() {
                                l.indexedDB.deleteDatabase(k)
                            })
                        }
                    },
                    crossDomainStorage: {
                        get: function(e) {
                            P.cake.crossDomainStorage(" ", "", e)
                        },
                        set: function() {
                            P.cake.crossDomainStorage("SLT", N.SLT), P.cake.crossDomainStorage("UID", N.UID)
                        },
                        clear: function() {
                            P.cake.crossDomainStorage()
                        }
                    }
                }
            },
            getCache: function() {
                n(function() {
                    P.client.fastCallback(JSON.parse(l.localStorage.getItem("__augurCache")))
                })
            },
            getSet: function(e, t) {
                n(function(n) {
                    n.cache.set(e, t)
                }, this)
            },
            send: function(t) {
                var n = P.MEM,
                    a = n.ie !== d || /MSIE 7\./.test(C),
                    i = a ? new XMLHttpRequest : new XDomainRequest;
                if (t = t || n.ndo, !(--P.cake.maxSends < 0)) {
                    P.MEM.sent = d, i.open("POST", _ + "/beginPersonalization", d), 0 === i.timeout && (i.timeout = 6e3), i.onprogress = i.onerror = S;
                    var o = e();
                    i.onload = i.onreadystatechange = function() {
                        if (4 === i.readyState || !a) {
                            P.MEM.received = d;
                            var e;
                            try {
                                e = this.responseText
                            } catch (t) {
                                return
                            }
                            if (!P.MEM.cc && e) {
                                var o = this.status,
                                    t = {
                                        status: o
                                    };
                                switch (P.responseTime.roundTrip = Date.now() - P.responseTime.roundTrip, P.MEM.ie || (P.responseTime.server = +(this.getResponseHeader("X-Response-Time") || "").split(" ")[0]), o) {
                                    case 0:
                                    case 408:
                                    case 503:
                                        t.status = o || 503, t.message = "Service unreachable";
                                        break;
                                    case 403:
                                        t.message = "JavaScript being blocked";
                                        break;
                                    case 202:
                                        t.message = "Malformed request";
                                        break;
                                    default:
                                        /augur/.test(e) && (o = 200)
                                }
                                200 !== o && P.client.callback({}, t);
                                try {
                                    "<" !== e[0] && new Function(e)()
                                } catch (t) {
                                    r("responseText", t)
                                }
                            }
                            i.onreadystatechange = i.onload = S, clearTimeout(n.s)
                        }
                    }, i.ontimeout = function() {
                        var e = P.cake,
                            a = e && e.retryAttempts;
                        if (a && 0 < P.cake.retryAttempts-- && e.send) e.send(t);
                        else {
                            if (v.callback) try {
                                new Function("e", v.cb + "(e)")({
                                    status: 500,
                                    message: "Service unreachable"
                                })
                            } catch (i) {
                                r("xhr.ontimeout", i)
                            }
                            P.lib && P.lib.destruct && P.lib.destruct()
                        }
                        clearTimeout(n.s)
                    }, "undefined" === P.UID && (P.UID = ""), v.limit && P.UID && Math.random() > .4 || (i.send("&analytics=" + g(P.lib.coffee.glutiam("slt=" + N.SLT + "&scrtme=" + o + "&ms=" + P.cake.maxSends + "&uid=" + N.UID + (P.FP.routerFingerprint ? "&ip=" + P.FP.routerFingerprint : "") + "&fp=" + g(JSON.stringify(P.FP)) + "&options=" + g(JSON.stringify(v)) + (t ? "&newDeviceOwner=" + JSON.stringify(t) : "") + "&url=" + P.URL + "&augurOptOut=" + P.optOut))), P.responseTime.roundTrip = Date.now())
                }
            },
            retryAttempts: 5,
            maxSends: 5
        },
        client: {
            cleanUp: function(e) {
                "v4" === v.schema && e && e.device && n(function() {
                    delete e.device.fingerprint, delete e.device.isIncognito
                })
            },
            fastCallback: function(e) {
                var t = v.fastcallback;
                e && (this.consoleLogTime(), P.lib.api(e), P.MEM.fcc = d), t && n(l[t], e)
            },
            callback: function(e, t) {
                var r, a = (v.sendto || "").split("::"),
                    i = v.callback,
                    o = v.fastcallback,
                    c = v.cb;
                this.cleanUp(e), this.consoleLogTime(e && e.device && e.device.browser && e.device.browser.name), P.lib.api(e), o && !P.MEM.fcc && n(l[o], e), i && n(new Function("j", i + "(j)"), e), c && n(new Function("e,j", c + "(e,j)"), t || null, t ? s : e), v.id && !t && (e.id = v.id), 0 !== Object.keys(e).length && ("GET" === a[0] ? (new Image).src = a[1] + (a[2] === s ? "?json=" + g(JSON.stringify(e)) : e.device.ID) : "POST" === a[0] && (r = new XMLHttpRequest, r.open(a[0], a[1], d), r.withCredentials = "noCredentials" !== a[2], r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.send("json=" + g(JSON.stringify(e))))), e.consumer && e.consumer.UID && P.cake && P.cake.cache && (P.cake.cache.set("UID", e.consumer.UID), P.UID = e.consumer.UID), D && !t && n(function() {
                    l.localStorage.setItem("__augurCache", JSON.stringify(e))
                }), P.lib.brain("cc")
            },
            plugins: function(e, t) {
                var n, r, a = P.json,
                    i = new Image;
                if (i.onsuccess = i.onerror = S, "snowplow" === e) return void(i.src = "http://data.elasticbeanstalk.com/com.snowplowanalytics.iglu/v1?schema=iglu:com.au.mamamia/augur/jsonschema/1-0-0&augurDID=" + a.device.ID + "&augurIsMobile=" + (a.device.mobileFamily || f) + "&augurUID=" + a.consumer.UID + "&augurDeviceType=" + a.device.type + "&augurEventId=" + t);
                switch (e.name) {
                    case "snowplow":
                        r = e.schemaURL + "&augurDID=" + a.device.ID + "&augurIsMobile=" + (a.device.mobileFamily || f) + "&augurUID=" + a.consumer.UID + "&augurDeviceType=" + a.device.type, delete e.name, delete e.schemaURL;
                        for (n in e) r += "&" + n + "=" + e[n];
                        i.src = r;
                        break;
                    case "syncCookies":
                        var o, s, c = u.createElement("script"),
                            l = e.cookieNames.split(","),
                            d = u.cookie.split(";"),
                            m = d.length;
                        for (r = e.sendToURL + (a.consumer.UID ? "?uid=" + a.consumer.UID : "?did=" + a.device.ID) + "&cid=" + M; m--;) l.indexOf(o = (s = d[m].trim()).split("=")[0]) !== -1 && (r += "&cookie|" + o + "=" + s.slice(++o.length));
                        c.src = r, c.onload = c.onerror = function() {
                            this.parentNode.removeChild(this)
                        }, p.parentNode.appendChild(c);
                        break;
                    case "link":
                        if (P.cake && P.cake.send) {
                            if (e.email && !(e.email = P.lib.extractEmail(e.email))) return;
                            delete e.name, e.meta = "link", P.cake.send(e)
                        }
                        break;
                    case "track":
                        "?" === e.params[0] && (e.params = e.params.slice(1)), (new Image).src = _ + "exdiris?json=" + g(JSON.stringify(P.json)) + "&" + e.params
                }
            },
            consoleLogTime: function(t) {
                var n = P.responseTime,
                    r = P.MEM,
                    a = "Augur <https://Augur.io> personalized this page (" + (e() / 1e3).toFixed(2) + " sec) ";
                v.silent || r.t || ("Internet Explorer" === t ? console.info(a) : console.info("%c " + a, 'background:#08c;color:#fafafa;font-weight:100;font-family:"Inconsolata","Consolas","Deja Vu Sans Mono","Droid Sans Mono","Proggy","Monaco","Courier";'), r.t = d), n.dataAvailableIn || (n.dataAvailableIn = e()), n.thread = e(), n.wireTime = n.roundTrip - n.server
            }
        },
        fingerprint: {
            init: function() {
                var e = P.MEM,
                    t = P.lib,
                    n = this,
                    r = l.screen,
                    a = u.cookie.indexOf("augurOptOut") > -1,
                    i = I.doNotTrack || I.msDoNotTrack || a,
                    o = [],
                    c = t.sha256,
                    d = "v4" !== v.schema;
                if (P.optOut = a, P.FP = {
                        browser: {
                            fingerprint: v.dfp || d ? {} : {
                                audio: c(this.audio()),
                                canvas: !e.ie && c(n.canvas()),
                                font: c(n.fontDetect()),
                                locale: c(this.locale()),
                                plugin: c(this.plugins()),
                                webGL: !e.ie && c((o = n.webGL(I, t.turnObjToArray))[0])
                            },
                            is: {
                                blockingAds: n.adBlock(),
                                blockingCookies: !D,
                                blockingJava: !I.javaEnabled(),
                                spoofed: n.spoofDetect(I, r),
                                usingDoNotTrack: i && "0" !== i && "unspecified" !== i ? i : f
                            },
                            userAgent: C
                        },
                        geoLocation: {
                            timezone: {
                                device: (new Date).getTimezoneOffset() / -60
                            },
                            is: {}
                        },
                        network: {
                            address: {},
                            is: {}
                        },
                        os: {
                            batteryLevel: I.battery && I.battery.level || s,
                            languages: I.languages && I.languages.slice().sort().toString() || I.language || I.browserLanguage || I.systemLanguage || I.userLanguage || s,
                            platform: I.platform || s,
                            processors: I.hardwareConcurrency || s,
                            resolution: r.width + "x" + r.height + "x" + r.colorDepth + "x" + r.availWidth + "x" + r.availHeight,
                            screenDensity: (l.devicePixelRatio || "") + (r.deviceXDPI ? r.deviceXDPI + "x" + r.deviceYDPI : "") || s,
                            touchScreenSupport: [I.maxTouchPoints || I.msMaxTouchPoints || 0, "TouchEvent" in l, "ontouchstart" in l].toString(),
                            videoCardDriver: o[1]
                        }
                    }, d)
                    for (var m in P.FP) {
                        var g = P.FP[m];
                        for (var h in g) P.FP[h] = g[h]
                    }
                l.RTCIceGatherer ? n.O() : n.R(), n.mediaDevices(I), I.getBattery && I.getBattery().then(function(e) {
                    P.FP.batteryLevel = P.FP.os.batteryLevel = e.level
                }), e.pr ? P.FP.browser.is.incognito = P.FP.browserHasIncognitoEnabled = f : n.detectPM(), t.brain("fp")
            },
            audio: function() {
                try {
                    var e = new(l.AudioContext || l.webkitAudioContext),
                        t = e.destination;
                    return "" + e.sampleRate + t.maxChannelCount + t.numberOfInputs + t.numberOfOutputs + t.channelCount + t.channelCountMode + t.channelInterpretation
                } catch (n) {}
            },
            locale: function() {
                var e = new Date,
                    t = e.getTimezoneOffset();
                e.setTime(0);
                for (var n, r = 1e9, a = r.toLocaleString ? r.toLocaleString() + e.toLocaleString() : "", i = 0; i < 1769390779860; i += 864e5) e.setTime(i), n = e.getTimezoneOffset(), n !== t && (a += "" + n + Math.round(i / 1e3), t = n);
                return a
            },
            adBlock: function() {
                var e = u.body || u.head,
                    t = u.createElement("div");
                return t.innerHTML = "&nbsp;", t.className = "adsbox", t.id = "adboxCheck", e.appendChild(t), setTimeout(function() {
                    var n = P.lib && P.lib.brain;
                    n && (P.FP.browser.is.blockingAds = 0 === u.getElementById("adboxCheck").offsetHeight, n("ads"), e.removeChild(t))
                }, 0), !1
            },
            canvas: function() {
                var e = u.createElement("canvas");
                e.width = "500", e.height = "75";
                for (var t = e.getContext("2d"), n = ['9.5pt "Arial"', '9.5px "Arial"', '9.5pt "' + x + '"'], r = t.createLinearGradient(10, 0, 500, 0), a = ["violet", 1, "indigo", 5 / 6, "blue", 4 / 6, "green", .5, "yellow", 2 / 6, "orange", 1 / 6, "red", 0], i = a.length; i;) r.addColorStop(a[--i], a[--i]);
                for (t.fillStyle = r, t.fillRect(0, 0, 500, 65), t.textBaseline = "top", t.textBaseline = "alphabetic", t.shadowColor = "#000", t.shadowOffsetX = 5, t.shadowOffsetY = 5, t.shadowBlur = 7, t.fillStyle = "rgba(102,204,0,.7)", i = n.length; i--;) t.font = n[i], t.fillText(x + "��", 5, 18 * (1 + i));
                return e.toDataURL()
            },
            detectPM: function() {
                var e, t, n = function(e, t) {
                        var n = 0,
                            r = 100,
                            a = 1,
                            i = l.setInterval(function() {
                                e() && (l.clearInterval(i), t(f)), n++ > r && (l.clearInterval(i), t(d))
                            }, a)
                    },
                    r = D ? l.localStorage : s,
                    a = D ? l.indexedDB : s,
                    i = D ? l.requestFileSystem || l.webkitRequestFileSystem : s;
                try {
                    if (i !== s) i(l.TEMPORARY, 1, function() {
                        e = f
                    }, function() {
                        e = d
                    });
                    else if (a !== s && /Firefox/.test(C)) {
                        try {
                            t = a.open("test")
                        } catch (o) {
                            e = d
                        }
                        e === s && n(function() {
                            return "done" === t.readyState ? d : f
                        }, function(n) {
                            n === f && (e = t.result ? f : d)
                        })
                    } else if (r !== s && /Safari/.test(C)) try {
                        r.setItem("test", 1), r.removeItem("test"), e = f
                    } catch (o) {
                        e = d
                    } else if (/(MSIE 10\.)|(Windows.*(rv:11|Edge\/))/.test(C)) {
                        e = f;
                        try {
                            a === s && (e = d)
                        } catch (o) {
                            e = d
                        }
                    }
                } catch (o) {}
                n(function() {
                    return e !== s
                }, function() {
                    P.FP.browser.is.incognito = P.FP.browserHasIncognitoEnabled = e, P.lib.brain("pr")
                })
            },
            fontDetect: function() {
                var e, t, n = ["monospace", "serif", "sans-serif"],
                    r = n.length,
                    a = u.body,
                    i = u.createElement("span"),
                    o = [],
                    s = {},
                    c = "8514oem,abadi mt condensed light,academy engraved let,acaderef,adobe arabic,adobe caslon pro,adobe caslon pro bold,adobe devanagari,adobe fan heiti std b,adobe fangsong std,adobe fangsong std r,adobe garamond,adobe garamond pro,adobe garamond pro bold,adobe gothic std b,adobe hebrew,adobe heiti std r,adobe kaiti std r,adobe ming std,adobe ming std l,adobe myungjo std m,adobe naskh medium,adobe song std l,agency fb,aharoni,aigdt,albertus extra bold,albertus medium,alexandra script,algerian,amadeus,amazone bt,amdtsymbols,american typewriter,american typewriter condensed,amertype md bt,amgdt,anastasiascript,andale mono,andalus,angsana new,angsanaupc,annabelle,antique olive,aparajita,apple chancery,apple color emoji,apple sd gothic neo,arab,arabic transparent,arabic typesetting,archer,arial,arial baltic,arial black,arial ce,arial cyr,arial greek,arial hebrew,arial mt,arial narrow,arial rounded mt bold,arial tur,arial unicode ms,ariston,arno pro,arno pro caption,arno pro display,arno pro light display,arno pro smbd,arno pro smbd caption,arno pro smbd display,arno pro smbd smtext,arno pro smbd subhead,arno pro smtext,arno pro subhead,arrus bt,aurora cn bt,avantgarde bk bt,avantgarde md bt,avenir,ayuthaya,balker,bandy,bangla sangam mn,bank gothic,bankgothic lt bt,bankgothic md bt,baskerville,baskerville old face,batang,batangche,bauer bodoni,bauhaus 93,bazooka,bell gothic std black,bell gothic std light,bell mt,bembo,benguiat bk bt,berlin sans fb,berlin sans fb demi,bernard mt condensed,bernhardfashion bt,bernhardmod bt,bickham script one,bickham script pro regular,bickham script pro semibold,bickham script two,big caslon,binnerd,birch std,bitstream charter,bitstream vera sans mono,bitstream vera serif,blackadder itc,blackoak std,blairmditc tt,bodoni 72,bodoni 72 oldstyle,bodoni 72 smallcaps,bodoni mt,bodoni mt black,bodoni mt condensed,bodoni mt poster compressed,book antiqua,bookman old style,bookshelf symbol 7,boulder,bradley hand,bradley hand itc,braggadocio,brandon grotesque,bremen bd bt,britannic bold,broadway,browallia new,browalliaupc,brush script mt,brush script std,calibri,calibri light,californian fb,calisto mt,calligraph,calligrapher,cambria,cambria math,candara,carolina,caslonopnface bt,castellar,casual,centaur,century,century gothic,century schoolbook,century schoolbook l,ceremonious two,cezanne,cg omega,cg times,chalkboard,chalkboard se,chalkduster,chandas,chaparral pro,chaparral pro light,charcoal,charlemagne std,charlesworth,charter bd bt,charter bt,chaucer,chelthmitc bk bt,chicago,chiller,cityblueprint,clarendon,clarendon blk bt,clarendon bt,clarendon condensed,clarendon lt bt,cloisterblack bt,cochin,colonna mt,comic sans,comic sans ms,commercialpi bt,commercialscript bt,complex,consolas,constantia,contax pro,cooper black,cooper std black,copperplate,copperplate gothic,copperplate gothic bold,copperplate gothic light,copperplgoth bd bt,copyist,corbel,cordia new,cordiaupc,cornerstone,coronet,countryblueprint,courier,courier new,courier new baltic,courier new ce,courier new cyr,courier new greek,courier new tur,cuckoo,curlz mt,cursive,daunpenh,dauphin,david,db lcd temp,decor,default,deja vu sans mono,dejavu lgc sans mono,dejavu sans,dejavu sans condensed,dejavu sans light,dejavu sans mono,dejavu serif,dejavu serif condensed,delicious,denmark,desdemona,dfkai-sb,didot,dilleniaupc,din,dokchampa,dom casual,domestic manners,dotum,dotumche,droid sans,droid sans mono,droid serif,dutch801 rm bt,dutch801 xbd bt,ebrima,eccentric std,edwardian script itc,elephant,english 111 vivace bt,engravers mt,engraversgothic bt,eras bold itc,eras demi itc,eras light itc,eras medium itc,estrangelo edessa,eucrosiaupc,euphemia,euphemia ucas,euroroman,eurostile,exotc350 bd bt,expressway,fangsong,fantasy,felix titling,fixed,fixedsys,fontin,footlight mt light,forte,franklin gothic book,franklin gothic demi,franklin gothic demi cond,franklin gothic fs,franklin gothic heavy,franklin gothic medium,franklin gothic medium cond,frankruehl,fransiscan,freefrm721 blk bt,freehand521 bt,freesiaupc,freestyle script,french script mt,frnkgothitc bk bt,fruitger,frutiger,function pro,futura,futura bk bt,futura lt bt,futura md bt,futura zblk bt,futurablack bt,gabriola,gadugi,galliard bt,garamond,garamond premr pro,garamond premr pro smbd,gautami,gdt,geeza pro,geneva,geniso,gentium,gentium basic,gentium book basic,geometr231 bt,geometr231 hv bt,geometr231 lt bt,georgia,geoslab 703 lt bt,geoslab 703 xbd bt,giddyup std,gigi,gill sans,gill sans mt,gill sans mt condensed,gill sans mt ext condensed bold,gill sans ultra bold,gill sans ultra bold condensed,gisha,gloucester mt extra condensed,gotham,gotham bold,gothice,gothicg,gothici,goudy old style,goudy stout,goudyhandtooled bt,goudyolst bt,grecs du roi,greekc,greeks,gujarati sangam mn,gulim,gulimche,gungseo,gungsuh,gungsuhche,gurmukhi mn,haettenschweiler,hanacaraka,harlow solid italic,harrington,heather,heather script one,hei s,heisei kaku gothic,heit,heiti sc,heiti tc,helv,helvetica,helvetica neue,herald,herculanum,high tower text,hiragino kaku gothic pron,hiragino mincho pron,hiragino sans gb,hobo std,hoefler text,humanst 521 cn bt,humanst521 bt,humanst521 lt bt,impact,imprint mt shadow,incised901 bd bt,incised901 bt,incised901 lt bt,inconsolata,informal roman,informal011 bt,innovage,interstate,interval sans pro,irisupc,iskoola pota,isocp,isocp2,isocp3,isocpeur,isoct,isoct2,isoct3,isocteur,italic,italicc,italict,japanese gothic,jasmineupc,jazz let,jenson,jester,jokerman,jomolhari,juice itc,kabel bk bt,kabel ult bt,kacstone,kailasa,kaiti,kalinga,kannada sangam mn,kartika,kaufmann bd bt,kaufmann bt,khmer ui,king,kino mt,kodchiangupc,kokila,korinna bt,kozuka gothic pr6n,kozuka gothic pr6n b,kozuka gothic pr6n el,kozuka gothic pr6n h,kozuka gothic pr6n l,kozuka gothic pr6n m,kozuka gothic pr6n r,kozuka gothic pro b,kozuka gothic pro el,kozuka gothic pro h,kozuka gothic pro l,kozuka gothic pro m,kozuka gothic pro r,kozuka mincho pr6n b,kozuka mincho pr6n el,kozuka mincho pr6n h,kozuka mincho pr6n l,kozuka mincho pr6n m,kozuka mincho pr6n r,kozuka mincho pro b,kozuka mincho pro el,kozuka mincho pro h,kozuka mincho pro l,kozuka mincho pro m,kozuka mincho pro r,kristen itc,krungthep,kunstler script,lalit,lao ui,latha,leelawadee,letter gothic,letter gothic std,levenim mt,liberation sans narrow,lilyupc,lithograph,lithograph light,lithos pro regular,lobster,lohit gujarati,loma,long island,lucida bright,lucida calligraphy,lucida console,lucida fax,lucida grande,lucida handwriting,lucida sans,lucida sans typewriter,lucida sans unicode,lydian bt,magneto,maiandra gd,malayalam sangam mn,malgun gothic,mangal,marigold,marion,marker felt,market,marlett,matisse itc,matura mt script capitals,meiryo,meiryo ui,menlo,mesquite std,microsoft himalaya,microsoft jhenghei,microsoft jhenghei ui,microsoft new tai lue,microsoft phagspa,microsoft sans serif,microsoft tai le,microsoft uighur,microsoft yahei,microsoft yahei ui,microsoft yi baiti,mingliu,mingliu-extb,mingliu_hkscs,mingliu_hkscs-extb,minion,minion pro,minion pro cond,minion pro med,minion pro smbd,miriam,miriam fixed,mistral,modena,modern,modern no. 20,molengo,mona lisa solid itc tt,monaco,mongolian baiti,mono,monofur,monospac821 bt,monotxt,monotype corsiva,moolboran,mrs eaves,ms gothic,ms linedraw,ms mincho,ms outlook,ms pgothic,ms pmincho,ms reference sans serif,ms reference specialty,ms sans serif,ms serif,ms ui gothic,mt extra,museo,mv boli,myriad,myriad arabic,myriad hebrew,myriad pro,myriad pro cond,myriad pro light,myriad web pro,nadeem,narkisim,neutraface,nevis,news gothic,news gothic mt,news gothicmt,newsgoth bt,niagara engraved,niagara solid,nimbus mono l,nimbus sans l,nirmala ui,nobile,noteworthy,nsimsun,nueva std,nueva std cond,nyala,ocr a extended,ocr a std,ocr-a bt,ocr-b 10 bt,ofl sorts mill goudy tt,old century,old english text mt,onyx,onyx bt,open sans,opensymbol,optima,orator std,oriya sangam mn,osaka,ouverture script,ozhandicraft bt,palace script mt,palatino,palatino linotype,pandtos,panroman,papyrus,parchment,party let,pegasus,perpetua,perpetua titling mt,petitabold,pickwick,plantagenet cherokee,playbill,pmingliu,pmingliu-extb,poor richard,poplar std,poster,posterbodoni bt,prelude bold,prelude condensed bold,prelude condensed medium,prelude medium,preludecompressedwgl black,preludecompressedwgl bold,preludecompressedwgl light,preludecompressedwgl medium,preludecondensedwgl black,preludecondensedwgl bold,preludecondensedwgl light,preludecondensedwgl medium,preludewgl black,preludewgl bold,preludewgl light,preludewgl medium,prestige elite std,princetown let,pristina,profont,proggy,proxima nova,proxy 1,proxy 2,proxy 3,proxy 4,proxy 5,proxy 6,proxy 7,proxy 8,proxy 9,pt sans,ptbarnum bt,pythagoras,raavi,rachana,rage italic,ravie,reenie beanie,ribbon131 bd bt,rockwell,rockwell condensed,rockwell extra bold,rod,roman,romanc,romand,romans,romant,romantic,rosewood std regular,rotundus,sakkal majalla,san francisco,sansserif,santa fe let,savoye let,sawasdee,sceptre,script,script mt bold,scriptc,scriptina,scripts,segoe print,segoe script,segoe ui,segoe ui light,segoe ui semibold,segoe ui semilight,segoe ui symbol,serifa,serifa bt,serifa th bt,shelleyvolante bt,sherwood,shonar bangla,showcard gothic,shruti,signboard,silkscreen,simhei,simplex,simplified arabic,simplified arabic fixed,simsun,simsun-extb,sinhala sangam mn,sketch rockwell,skia,small fonts,snap itc,snell roundhand,socket,source sans pro,souvenir lt bt,square721 bt,staccato222 bt,steamer,stencil,stencil std,storybook,styllo,stylus bt,subway,superfrench,swift,swis721 bdcnoul bt,swis721 bdoul bt,swis721 blk bt,swis721 blkcn bt,swis721 blkex bt,swis721 blkoul bt,swis721 bt,swis721 cn bt,swis721 ex bt,swis721 hv bt,swis721 lt bt,swis721 ltcn bt,swis721 ltex bt,swiss911 xcm bt,syastro,sylfaen,symap,symath,symbol,symeteo,symusic,synchro let,system,tahoma,tamil sangam mn,teamviewer8,technic,technical,technicbold,techniclite,tekton pro,tekton pro cond,tekton pro ext,teletype,telugu sangam mn,tempus sans itc,terminal,tex,thonburi,tibetan machine uni,times,times new roman,times new roman baltic,times new roman ce,times new roman cyr,times new roman greek,times new roman ps,times new roman tur,tlwgmono,traditional arabic,trajan,trajan pro,trebuchet ms,tristan,tubular,tunga,tw cen mt,tw cen mt condensed,tw cen mt condensed extra bold,txt,typoupright bt,ubuntu,ubuntu mono,umpush,unicorn,univers,univers ce 55 medium,univers condensed,universalmath1 bt,urw bookman l,urw chancery l,urw gothic l,urw roman no9 l,utopia,utsaah,vagabond,vani,verdana,verona,vijaya,viner hand itc,vineta bt,visualui,vivaldi,vladimir script,vrinda,webdings,westminster,whitney,wide latin,wingdings,wingdings 2,wingdings 3,wp arabic sihafa,wp arabicscript sihafa,wp cyrillica,wp cyrillicb,wp greek century,wp greek courier,wp greek helve,wp hebrew david,wp multinationala courier,wp multinationala helve,wp multinationala roman,wp multinationalb courier,wp multinationalb helve,wp multinationalb roman,wst_czec,wst_engl,wst_fren,wst_germ,wst_ital,wst_span,wst_swed,yanone kaffeesatz,zapfellipt bt,zapfhumnst bt,zapfhumnst dm bt,zapfino,zurich blkex bt,zurich ex bt,zwadobef".split(",");
                for (i.style.position = "absolute", i.style.lineHeight = "normal", i.style.left = "-999em", i.style.fontSize = "100px", i.innerHTML = x, a.appendChild(i); r--;) i.style.fontFamily = n[r], t = i.offsetWidth + "" + i.offsetHeight, s[n[r]] = t, s[t] = d;
                for (r = c.length; r--;)
                    for (e = n.length; e--;)
                        if (i.style.fontFamily = '"' + c[r] + '",' + n[e], t = i.offsetWidth + "" + i.offsetHeight, s[n[e]] !== t) {
                            o[o.length] = c[r] + (s[t] ? ":default" : "");
                            break
                        } return a.removeChild(i), o.sort().toString()
            },
            mediaDevices: function(e) {
                !O && e.mediaDevices && e.mediaDevices.enumerateDevices && e.mediaDevices.enumerateDevices().then(function(e) {
                    for (var t, n = P.FP.os, r = e.length, a = {
                            audiooutput: "speakersInstalled",
                            audioinput: "microphonesInstalled",
                            videoinput: "webcamsInstalled"
                        }; r--;) t = a[e[r].kind], n[t] = (n[t] || 0) + 1
                })
            },
            plugins: function() {
                for (var e, t, n, r, a, i = I.plugins, o = i.length, s = []; o--;) {
                    for (t = i[o], n = [t.name + t.version + t.filename + t.description, []], r = n[1], e = t.length; e--;) a = t[e], r.push([a.type + a.suffixes + a.description]);
                    r.sort(), s.push(n)
                }
                return s.sort().toString()
            },
            spoofDetect: function(e, t) {
                var r = C.toLowerCase(),
                    a = function(e, t) {
                        return e.indexOf(t) !== -1
                    },
                    i = function() {
                        var t, n = e.productSub;
                        if (t = a(r, "firefox") ? "Firefox" : a(r, "opera") || a(r, "opr") ? "Opera" : a(r, "chrome") ? "Chrome" : a(r, "safari") ? "Safari" : a(r, "trident") ? "Internet Explorer" : "Other", ("Chrome" === t || "Safari" === t || "Opera" === t) && "20030107" !== n) return d;
                        var i = eval.toString().length;
                        if (37 === i && "Safari" !== t && "Firefox" !== t && "Other" !== t) return d;
                        if (39 === i && "Internet Explorer" !== t && "Other" !== t) return d;
                        if (33 === i && "Chrome" !== t && "Opera" !== t && "Other" !== t) return d;
                        var o;
                        try {
                            throw "a"
                        } catch (s) {
                            try {
                                s.toSource(), o = d
                            } catch (s) {
                                o = f
                            }
                        }
                        return o && "Firefox" !== t && "Other" !== t ? d : f
                    },
                    o = function() {
                        var t, i = e.oscpu && e.oscpu.toLowerCase(),
                            o = e.platform.toLowerCase();
                        if (t = a(r, "windows phone") ? "Windows Phone" : a(r, "win") ? "Windows" : a(r, "android") ? "Android" : a(r, "linux") ? "Linux" : a(r, "iphone") || a(r, "ipad") ? "iOS" : a(r, "mac") ? "Mac" : "Other", i) {
                            if (a(i, "win") && "Windows" !== t && "Windows Phone" !== t) return d;
                            if (a(i, "linux") && "Linux" !== t && "Android" !== t) return d;
                            if (a(i, "mac") && "Mac" !== t && "iOS" !== t) return d;
                            if (a(i, "win") && a(i, "linux") && a(i, "mac") && "other" !== t) return d
                        }
                        return a(o, "win") && "Windows" !== t && "Windows Phone" !== t ? d : (a(o, "linux") || a(o, "android") || a(o, "pike")) && "Linux" !== t && "Android" !== t ? d : (a(o, "mac") || a(o, "ipad") || a(o, "ipod") || a(o, "iphone")) && "Mac" !== t && "iOS" !== t ? d : a(o, "win") && a(o, "linux") && a(o, "mac") && "other" !== t ? d : (e.plugins || "Windows" === t || "Windows Phone" === t) && ("Android" !== t && "iOS" !== t && "Windows Phone" !== t || e.maxTouchPoints || e.msMaxTouchPoints || n(function() {
                            return !!u.createEvent("TouchEvent")
                        }) || "ontouchstart" in l) ? f : d
                    };
                return i() || o() || e.language && e.languages && e.languages[0] && e.languages[0].substr && e.languages[0].substr(0, 2) !== e.language.substr(0, 2) || t.width < t.availWidth || t.height < t.availHeight
            },
            O: function() {
                function e() {
                    t = setTimeout(o, 1e3, a)
                }
                var t, n = new l.RTCIceGatherer({
                        gatherPolicy: "all",
                        iceServers: []
                    }),
                    a = [],
                    i = this,
                    o = i.ORComplete;
                n.onerror = function(e) {
                    r("O", e), P.lib.brain("rd")
                }, n.onlocalcandidate = function(n) {
                    var r = n.candidate.ip;
                    clearTimeout(t), r ? a.indexOf(r) === -1 && (a.push(i.compactIPv6(r)), e()) : o(a)
                }, e()
            },
            compactIPv6: function(e) {
                return e.replace(/:0:/g, "::")
            },
            ORComplete: function(e) {
                P.FP && (P.FP.routerFingerprint = e.sort().toString()), P.lib && P.lib.brain && P.lib.brain("rc")
            },
            R: function() {
                function e(e) {
                    "0.0.0.0" !== e && s.indexOf(e) === -1 && s.push(c.compactIPv6(e)), clearTimeout(i), i = setTimeout(u, 1e3, s)
                }

                function t(t) {
                    t.split("\r\n").forEach(function(t) {
                        if (~t.indexOf("a=candidate")) {
                            var n = t.split(" ");
                            "host" === n[7] && e(n[4])
                        } else ~t.indexOf("c=") && e(t.split(" ")[2])
                    })
                }
                var a, i, o, s = [],
                    c = P.fingerprint,
                    u = c.ORComplete,
                    m = l.webkitRTCPeerConnection || l.RTCPeerConnection;
                return m ? void n(function() {
                    a = new m({
                        iceServers: []
                    }), a.createDataChannel("", {
                        reliable: f
                    }), a.onerror = function(e) {
                        r("R", e), P.lib.brain("rd")
                    }, a.onicecandidate = function(e) {
                        var n = e.candidate;
                        n ? t("a=" + n.candidate) : "complete" === a.iceGatheringState && (0 !== s.length || o || P.MEM.rc ? (u(s), clearTimeout(i)) : (c.R(), o = d))
                    }, a.createOffer(function(e) {
                        t(e.sdp), a.setLocalDescription(e)
                    }, S)
                }) : P.lib.brain("rd")
            },
            webGL: function(e, t) {
                function n(e) {
                    return "[" + e[0] + ", " + e[1] + "]"
                }

                function a(e) {
                    var t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t || (t = 2), t) : null
                }

                function i(e, t) {
                    return t ? "" + Math.pow(2, e) : "2^" + e
                }

                function o(e, t) {
                    return "[-" + i(e.rangeMin, t) + ", " + i(e.rangeMax, t) + "] (" + e.precision + (t ? " bit mantissa" : "") + ")"
                }

                function c(e, t) {
                    var n = t.getShaderPrecisionFormat(e, t.HIGH_FLOAT),
                        r = t.getShaderPrecisionFormat(e, t.MEDIUM_FLOAT);
                    return {
                        High: o(n, 1),
                        Medium: o(r, 1),
                        Low: o(t.getShaderPrecisionFormat(e, t.LOW_FLOAT), 1),
                        Best: o(n.precision ? n : r, 0)
                    }
                }

                function d(e) {
                    var t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT);
                    return (t.precision ? "highp/" : "mediump/") + (t = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT) && t.rangeMax ? "highp" : "lowp")
                }

                function f(e) {
                    return e && 0 === (e & e - 1)
                }

                function m(t) {
                    var r = n(t.getParameter(t.ALIASED_LINE_WIDTH_RANGE)),
                        a = "Win32" === e.platform && "Internet Explorer" !== t.getParameter(t.RENDERER) && r === n([1, 1]);
                    return a ? f(t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)) && f(t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)) ? 2 : 1 : 0
                }
                if (l.WebGLRenderingContext) {
                    for (var g, h, p = 4, b = u.createElement("canvas"), v = ["webkit-3d", "moz-webgl", "experimental-webgl", "webgl"]; p--;) try {
                        if ((g = b.getContext(h = v[p])) && "function" == typeof g.getParameter) return [t({
                            contextName: h,
                            glVersion: g.getParameter(g.VERSION),
                            shadingLanguageVersion: g.getParameter(g.SHADING_LANGUAGE_VERSION),
                            vendor: g.getParameter(g.VENDOR),
                            renderer: g.getParameter(g.RENDERER),
                            antialias: g.getContextAttributes().antialias ? "Available" : "Not available",
                            angle: m(g),
                            redBits: g.getParameter(g.RED_BITS),
                            greenBits: g.getParameter(g.GREEN_BITS),
                            blueBits: g.getParameter(g.BLUE_BITS),
                            alphaBits: g.getParameter(g.ALPHA_BITS),
                            depthBits: g.getParameter(g.DEPTH_BITS),
                            stencilBits: g.getParameter(g.STENCIL_BITS),
                            maxRenderBufferSize: g.getParameter(g.MAX_RENDERBUFFER_SIZE),
                            maxCombinedTextureImageUnits: g.getParameter(g.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                            maxCubeMapTextureSize: g.getParameter(g.MAX_CUBE_MAP_TEXTURE_SIZE),
                            maxFragmentUniformVectors: g.getParameter(g.MAX_FRAGMENT_UNIFORM_VECTORS),
                            maxTextureImageUnits: g.getParameter(g.MAX_TEXTURE_IMAGE_UNITS),
                            maxTextureSize: g.getParameter(g.MAX_TEXTURE_SIZE),
                            maxVaryingVectors: g.getParameter(g.MAX_VARYING_VECTORS),
                            maxVertexAttributes: g.getParameter(g.MAX_VERTEX_ATTRIBS),
                            maxVertexTextureImageUnits: g.getParameter(g.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                            maxVertexUniformVectors: g.getParameter(g.MAX_VERTEX_UNIFORM_VECTORS),
                            aliasedLineWidthRange: n(g.getParameter(g.ALIASED_LINE_WIDTH_RANGE)),
                            aliasedPointSizeRange: n(g.getParameter(g.ALIASED_POINT_SIZE_RANGE)),
                            maxViewportDimensions: n(g.getParameter(g.MAX_VIEWPORT_DIMS)),
                            maxAnisotropy: a(g),
                            extensions: g.getSupportedExtensions().sort().toString(),
                            vertexShaderBestPrecision: t(c(g.VERTEX_SHADER, g)),
                            fragmentShaderBestPrecision: t(c(g.FRAGMENT_SHADER, g)),
                            fragmentShaderFloatIntPrecision: d(g)
                        }), g.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") !== -1 ? g.getParameter(g.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL) + " " + g.getParameter(g.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL) : s]
                    } catch (y) {
                        r("webGL", y)
                    }
                    return "Supported. Disabled"
                }
                return "WebGL not supported"
            }
        },
        lib: {
            api: function(e) {
                P.json = e, P.device = e.device, P.consumer = e.consumer, P.webTraffic = e.webTraffic
            },
            b64Encode: function(e) {
                for (var t, n, r, a = x, i = 0, o = [], s = e.length; i < s;) {
                    switch (r = i % 3, t = e.charCodeAt(i++), r) {
                        case 0:
                            o.push(a.charAt(t >> 2));
                            break;
                        case 1:
                            o.push(a.charAt((3 & n) << 4 | t >> 4));
                            break;
                        case 2:
                            o.push(a.charAt((15 & n) << 2 | t >> 6)), o.push(a.charAt(63 & t))
                    }
                    n = t
                }
                return 0 === r ? (o.push(a.charAt((3 & n) << 4)), o.push("==")) : 1 === r && (o.push(a.charAt((15 & n) << 2)), o.push("=")), o.join("")
            },
            b64Decode: function(e) {
                for (var t, n, r = x, a = 0, i = [], o = (e = e.replace(/(\s|=)/g, "")).length; a < o;) {
                    switch (t = r.indexOf(e.charAt(a)), a++ % 4) {
                        case 1:
                            i.push(String.fromCharCode(n << 2 | t >> 4));
                            break;
                        case 2:
                            i.push(String.fromCharCode((15 & n) << 4 | t >> 2));
                            break;
                        case 3:
                            i.push(String.fromCharCode((3 & n) << 6 | t))
                    }
                    n = t
                }
                return i.join("")
            },
            brain: function(e, t) {
                var n = P.MEM;
                if (n[e] = !t, !n.fn && (n.rc || n.rd) && n.pr && n.ads && n.fp && n.cds && n.cdsfin && n.xxx && !n.s) {
                    var r = P.cake.send;
                    r(), n.s = setTimeout(r, 1e4)
                }
            },
            coffee: {
                auspicium: function(e) {
                    for (var t = 9, n = [99, 111, 114, 98, 111, 109, 105, 116, 101]; t--;) e[t] = String.fromCharCode(n[t]);
                    return e.join("")
                },
                arrayToString: function(e, t) {
                    var n = e.length,
                        r = n - 1 << 2,
                        a = 0;
                    if (t) {
                        var i = e[n - 1];
                        if (i < r - 3 || i > r) return null;
                        r = i
                    }
                    for (; a < n; ++a) e[a] = String.fromCharCode(255 & e[a], e[a] >>> 8 & 255, e[a] >>> 16 & 255, e[a] >>> 24 & 255);
                    return t ? e.join("").slice(0, r) : e.join("")
                },
                stringToArray: function(e, t) {
                    for (var n = e.length, r = [], a = 0; a < n; a += 4) r[a >> 2] = e.charCodeAt(a) | e.charCodeAt(a + 1) << 8 | e.charCodeAt(a + 2) << 16 | e.charCodeAt(a + 3) << 24;
                    return t && (r[r.length] = n), r
                },
                glutiam: function(e) {
                    if (!e) return e;
                    var t, n, r, a = this,
                        i = a.stringToArray(e, 1),
                        o = [1651666787, 1953066351, 101],
                        s = i.length - 1,
                        c = i[s],
                        l = i[0],
                        u = Math.floor(6 + 52 / (s + 1)),
                        d = 0;
                    for (o.length = 4; 0 <= --u;) {
                        for (d = d + 2654435769 & 4294967295, n = d >>> 2 & 3, r = 0; r < s; ++r) l = i[r + 1], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (d ^ l) + (o[3 & r ^ n] ^ c), c = i[r] = i[r] + t & 4294967295;
                        l = i[0], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (d ^ l) + (o[3 & r ^ n] ^ c), c = i[s] = i[s] + t & 4294967295
                    }
                    return a.arrayToString(i, 0)
                },
                cl: function(e) {
                    if (e) {
                        for (var t, n, r, a = this.stringToArray(e), i = [1651666787, 1953066351, 101, s], o = a.length - 1, c = a[o - 1], l = a[0], u = -1640531527, d = 4294967295, f = Math.floor(6 + 52 / (o + 1)) * u; f;) {
                            for (n = f >>> 2 & 3, r = o; r; --r) c = a[r - 1], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (f ^ l) + (i[3 & r ^ n] ^ c), l = a[r] = a[r] - t & d;
                            c = a[o], t = (c >>> 5 ^ l << 2) + (l >>> 3 ^ c << 4) ^ (f ^ l) + (i[3 & r ^ n] ^ c), l = a[0] = a[0] - t & d, f -= u
                        }
                        return this.arrayToString(a, 1)
                    }
                }
            },
            destruct: function() {
                if (l.augur = {
                        CID: P.CID,
                        ERR: P.ERR,
                        FP: P.FP,
                        MEM: P.MEM,
                        SLT: P.SLT,
                        UID: P.UID,
                        URL: P.URL,
                        client: {
                            plugins: P.client.plugins
                        },
                        consumer: P.consumer,
                        device: P.device,
                        json: P.json,
                        responseTime: c,
                        version: P.version
                    }, !P.UID) {
                    l.augur.anonymous = P.anonymous, l.augur.cake = {
                        send: P.cake.send,
                        maxSends: 3,
                        sendAttempts: 3
                    };
                    var e = P.lib;
                    l.augur.lib = {
                        coffee: e.coffee,
                        getOlderSLT: e.getOlderSLT,
                        isValidSLT: e.isValidSLT,
                        extractEmail: e.extractEmail
                    }
                }
                P = l.augur, P.MEM.fn = d
            },
            fatBoy: function() {
                y = s, N = {
                    SLT: "",
                    UID: ""
                }, P.cake.cache.clear()
            },
            getOlderSLT: function(e, t) {
                var n = this.isValidSLT,
                    r = n(e),
                    a = n(t);
                return r ? a ? +e.slice(0, 13) < +t.slice(0, 13) ? e : t : e : a ? t : ""
            },
            sha256: function() {
                function e(t) {
                    if (this.data = "", this.a = 0, "string" == typeof t) this.data = t;
                    else if (i.D(t) || i.L(t)) {
                        t = new Uint8Array(t);
                        try {
                            this.data = String.fromCharCode.apply(null, t)
                        } catch (n) {
                            for (var r = 0; r < t.length; ++r) this.M(t[r])
                        }
                    } else(t instanceof e || "object" == typeof t && "string" == typeof t.data && "number" == typeof t.a) && (this.data = t.data, this.a = t.a);
                    this.v = 0
                }

                function t(e, t, n) {
                    for (var r, a, i, o, s, c, u, d, f, m, g, h, p, b = n.length(); 64 <= b;) {
                        for (s = 0; 16 > s; ++s) t[s] = n.getInt32();
                        for (; 64 > s; ++s) r = t[s - 2], r = (r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10, a = t[s - 15], a = (a >>> 7 | a << 25) ^ (a >>> 18 | a << 14) ^ a >>> 3, t[s] = r + t[s - 7] + a + t[s - 16] | 0;
                        for (c = e.g, u = e.h, d = e.i, f = e.j, m = e.l, g = e.m, h = e.o, p = e.s, s = 0; 64 > s; ++s) r = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), i = h ^ m & (g ^ h), a = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10), o = c & u | d & (c ^ u), r = p + r + i + l[s] + t[s], a += o, p = h, h = g, g = m, m = f + r | 0, f = d, d = u, u = c, c = r + a | 0;
                        e.g = e.g + c | 0, e.h = e.h + u | 0, e.i = e.i + d | 0, e.j = e.j + f | 0, e.l = e.l + m | 0, e.m = e.m + g | 0, e.o = e.o + h | 0, e.s = e.s + p | 0, b -= 64
                    }
                }
                var n, r, a, i = n = n || {};
                i.D = function(e) {
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
                }, i.L = function(e) {
                    return e && i.D(e.buffer) && void 0 !== e.byteLength
                }, i.G = e, i.b = e, i.b.prototype.H = function(e) {
                    this.v += e, 4096 < this.v && (this.v = 0)
                }, i.b.prototype.length = function() {
                    return this.data.length - this.a
                }, i.b.prototype.M = function(e) {
                    this.u(String.fromCharCode(e))
                }, i.b.prototype.u = function(e) {
                    this.data += e, this.H(e.length)
                }, i.b.prototype.c = function(e) {
                    this.u(String.fromCharCode(e >> 24 & 255) + String.fromCharCode(e >> 16 & 255) + String.fromCharCode(e >> 8 & 255) + String.fromCharCode(255 & e))
                }, i.b.prototype.getInt16 = function() {
                    var e = this.data.charCodeAt(this.a) << 8 ^ this.data.charCodeAt(this.a + 1);
                    return this.a += 2, e
                }, i.b.prototype.getInt32 = function() {
                    var e = this.data.charCodeAt(this.a) << 24 ^ this.data.charCodeAt(this.a + 1) << 16 ^ this.data.charCodeAt(this.a + 2) << 8 ^ this.data.charCodeAt(this.a + 3);
                    return this.a += 4, e
                }, i.b.prototype.B = function() {
                    return this.data.slice(this.a)
                }, i.b.prototype.compact = function() {
                    return 0 < this.a && (this.data = this.data.slice(this.a), this.a = 0), this
                }, i.b.prototype.clear = function() {
                    return this.data = "", this.a = 0, this
                }, i.b.prototype.truncate = function(e) {
                    return e = Math.max(0, this.length() - e), this.data = this.data.substr(this.a, e), this.a = 0, this
                }, i.b.prototype.N = function() {
                    for (var e = "", t = this.a; t < this.data.length; ++t) {
                        var n = this.data.charCodeAt(t);
                        16 > n && (e += "0"), e += n.toString(16)
                    }
                    return e
                }, i.b.prototype.toString = function() {
                    return i.I(this.B())
                }, i.createBuffer = function(e, t) {
                    return void 0 !== e && "utf8" === (t || "raw") && (e = i.C(e)), new i.G(e)
                }, i.J = function() {
                    for (var e = String.fromCharCode(0), t = 64, n = ""; 0 < t;) 1 & t && (n += e), t >>>= 1, 0 < t && (e += e);
                    return n
                }, i.C = function(e) {
                    return unescape(g(e))
                }, i.I = function(e) {
                    return m(escape(e))
                }, i.K = function(e) {
                    e = e || [];
                    for (var t = 0; t < e.length; t++)
                        if (e.charCodeAt(t) >>> 8) return !0;
                    return !1
                };
                var o = r = r || {};
                a = a || {}, a.A = a.A || {}, a.F = a.A.F = o, o.create = function() {
                    c || (s = String.fromCharCode(128), s += n.J(), l = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], c = !0);
                    var e = null,
                        r = n.createBuffer(),
                        a = Array(64),
                        i = {
                            algorithm: "sha256",
                            O: 64,
                            P: 32,
                            w: 0,
                            f: [0, 0],
                            start: function() {
                                return i.w = 0, i.f = [0, 0], r = n.createBuffer(), e = {
                                    g: 1779033703,
                                    h: 3144134277,
                                    i: 1013904242,
                                    j: 2773480762,
                                    l: 1359893119,
                                    m: 2600822924,
                                    o: 528734635,
                                    s: 1541459225
                                }, i
                            }
                        };
                    return i.start(), i.update = function(o, s) {
                        return o = o || [], "utf8" === s && (o = n.C(o)), i.w += o.length, i.f[0] += o.length / 4294967296 >>> 0, i.f[1] += o.length >>> 0, r.u(o), t(e, a, r), (2048 < r.a || 0 === r.length()) && r.compact(), i
                    }, i.digest = function() {
                        var o = n.createBuffer();
                        o.u(r.B()), o.u(s.substr(0, 64 - (i.f[1] + 8 & 63))), o.c(i.f[0] << 3 | i.f[0] >>> 28), o.c(i.f[1] << 3);
                        var c = {
                            g: e.g,
                            h: e.h,
                            i: e.i,
                            j: e.j,
                            l: e.l,
                            m: e.m,
                            o: e.o,
                            s: e.s
                        };
                        return t(c, a, o), o = n.createBuffer(), o.c(c.g), o.c(c.h), o.c(c.i), o.c(c.j), o.c(c.l), o.c(c.m), o.c(c.o), o.c(c.s), o
                    }, i
                };
                var s = null,
                    c = !1,
                    l = null;
                return function(e) {
                    var t = a.F.create();
                    return t.update(e, i.K(e) ? "utf8" : void 0), t.digest().N()
                }
            }(),
            turnObjToArray: function(e) {
                var t = [];
                for (var n in e) t.push([n, e[n]]);
                return t.sort().toString()
            },
            extractEmail: function(e) {
                for (var t = 5; t--;) try {
                    e = m(e)
                } catch (n) {
                    return ""
                }
                return (/^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.exec(e) || [""])[0].toLowerCase()
            },
            isValidSLT: function(e) {
                return e && "1" === e.charAt(0) && 32 < e.length && e.length < 48
            }
        }
    }, !l.augur && p && (t(l, "error", function(e) {
        n(function() {
            m(e.filename).indexOf(b) > -1 && (r("surpress", e.error), e.preventDefault(), L || (e.stopPropagation(), e.stopImmediatePropagation()))
        })
    }), l.augur = new P)
}();