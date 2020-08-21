/* Retrieved from https://web.archive.org/web/20140521175333js_/http://www.meinkauf.at/assets/application-74bbc9cea66102ea5766faa9209cf3e0.js */
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

    ! function(e, t) {
        function n(e) {
            var t = e.length,
                n = ut.type(e);
            return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        function i(e) {
            var t = Tt[e] = {};
            return ut.each(e.match(ht) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function o(e, n, i, o) {
            if (ut.acceptData(e)) {
                var r, a, s = ut.expando,
                    l = e.nodeType,
                    c = l ? ut.cache : e,
                    u = l ? e[s] : e[s] && s;
                if (u && c[u] && (o || c[u].data) || i !== t || "string" != typeof n) return u || (u = l ? e[s] = tt.pop() || ut.guid++ : s), c[u] || (c[u] = l ? {} : {
                    toJSON: ut.noop
                }), ("object" == typeof n || "function" == typeof n) && (o ? c[u] = ut.extend(c[u], n) : c[u].data = ut.extend(c[u].data, n)), a = c[u], o || (a.data || (a.data = {}), a = a.data), i !== t && (a[ut.camelCase(n)] = i), "string" == typeof n ? (r = a[n], null == r && (r = a[ut.camelCase(n)])) : r = a, r
            }
        }

        function r(e, t, n) {
            if (ut.acceptData(e)) {
                var i, o, r = e.nodeType,
                    a = r ? ut.cache : e,
                    l = r ? e[ut.expando] : ut.expando;
                if (a[l]) {
                    if (t && (i = n ? a[l] : a[l].data)) {
                        ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in i ? t = [t] : (t = ut.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !s(i) : !ut.isEmptyObject(i)) return
                    }(n || (delete a[l].data, s(a[l]))) && (r ? ut.cleanData([e], !0) : ut.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
                }
            }
        }

        function a(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var o = "data-" + n.replace(Pt, "-$1").toLowerCase();
                if (i = e.getAttribute(o), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : St.test(i) ? ut.parseJSON(i) : i
                    } catch (r) {}
                    ut.data(e, n, i)
                } else i = t
            }
            return i
        }

        function s(e) {
            var t;
            for (t in e)
                if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function c() {
            return !1
        }

        function u() {
            try {
                return K.activeElement
            } catch (e) {}
        }

        function p(e, t) {
            do e = e[t]; while (e && 1 !== e.nodeType);
            return e
        }

        function h(e, t, n) {
            if (ut.isFunction(t)) return ut.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return ut.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Bt.test(t)) return ut.filter(t, e, n);
                t = ut.filter(t, e)
            }
            return ut.grep(e, function(e) {
                return ut.inArray(e, t) >= 0 !== n
            })
        }

        function d(e) {
            var t = Ut.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function f(e, t) {
            return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function g(e) {
            return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e
        }

        function m(e) {
            var t = rn.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function v(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ut._data(n, "globalEval", !t || ut._data(t[i], "globalEval"))
        }

        function y(e, t) {
            if (1 === t.nodeType && ut.hasData(e)) {
                var n, i, o, r = ut._data(e),
                    a = ut._data(t, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) ut.event.add(t, n, s[n][i])
                }
                a.data && (a.data = ut.extend({}, a.data))
            }
        }

        function w(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                    o = ut._data(t);
                    for (i in o.events) ut.removeEvent(t, i, o.handle);
                    t.removeAttribute(ut.expando)
                }
                "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function b(e, n) {
            var i, o, r = 0,
                a = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
            if (!a)
                for (a = [], i = e.childNodes || e; null != (o = i[r]); r++) !n || ut.nodeName(o, n) ? a.push(o) : ut.merge(a, b(o, n));
            return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
        }

        function x(e) {
            tn.test(e.type) && (e.defaultChecked = e.checked)
        }

        function C(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = Tn.length; o--;)
                if (t = Tn[o] + n, t in e) return t;
            return i
        }

        function k(e, t) {
            return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
        }

        function $(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = ut._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && k(i) && (r[a] = ut._data(i, "olddisplay", E(i.nodeName)))) : r[a] || (o = k(i), (n && "none" !== n || !o) && ut._data(i, "olddisplay", o ? n : ut.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function T(e, t, n) {
            var i = yn.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function S(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += ut.css(e, n + $n[r], !0, o)), i ? ("content" === n && (a -= ut.css(e, "padding" + $n[r], !0, o)), "margin" !== n && (a -= ut.css(e, "border" + $n[r] + "Width", !0, o))) : (a += ut.css(e, "padding" + $n[r], !0, o), "padding" !== n && (a += ut.css(e, "border" + $n[r] + "Width", !0, o)));
            return a
        }

        function P(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = pn(e),
                a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = hn(e, t, r), (0 > o || null == o) && (o = e.style[t]), wn.test(o)) return o;
                i = a && (ut.support.boxSizingReliable || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + S(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function E(e) {
            var t = K,
                n = xn[e];
            return n || (n = M(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = M(e, t), un.detach()), xn[e] = n), n
        }

        function M(e, t) {
            var n = ut(t.createElement(e)).appendTo(t.body),
                i = ut.css(n[0], "display");
            return n.remove(), i
        }

        function I(e, t, n, i) {
            var o;
            if (ut.isArray(t)) ut.each(t, function(t, o) {
                n || Pn.test(e) ? i(e, o) : I(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== ut.type(t)) i(e, t);
            else
                for (o in t) I(e + "[" + o + "]", t[o], n, i)
        }

        function A(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(ht) || [];
                if (ut.isFunction(n))
                    for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function D(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, ut.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                a = e === qn;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function _(e, n) {
            var i, o, r = ut.ajaxSettings.flatOptions || {};
            for (o in n) n[o] !== t && ((r[o] ? e : i || (i = {}))[o] = n[o]);
            return i && ut.extend(!0, e, i), e
        }

        function N(e, n, i) {
            for (var o, r, a, s, l = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), r === t && (r = e.mimeType || n.getResponseHeader("Content-Type"));
            if (r)
                for (s in l)
                    if (l[s] && l[s].test(r)) {
                        c.unshift(s);
                        break
                    } if (c[0] in i) a = c[0];
            else {
                for (s in i) {
                    if (!c[0] || e.converters[s + " " + c[0]]) {
                        a = s;
                        break
                    }
                    o || (o = s)
                }
                a = a || o
            }
            return a ? (a !== c[0] && c.unshift(a), i[a]) : void 0
        }

        function j(e, t, n, i) {
            var o, r, a, s, l, c = {},
                u = e.dataTypes.slice();
            if (u[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (r = u.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (a = c[l + " " + r] || c["* " + r], !a)
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
                            break
                        } if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: a ? p : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function z() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }

        function L() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }

        function O() {
            return setTimeout(function() {
                Jn = t
            }), Jn = ut.now()
        }

        function W(e, t, n) {
            for (var i, o = (ri[t] || []).concat(ri["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function H(e, t, n) {
            var i, o, r = 0,
                a = oi.length,
                s = ut.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = Jn || O(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: ut.extend({}, t),
                    opts: ut.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Jn || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = ut.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                u = c.props;
            for (F(u, c.opts.specialEasing); a > r; r++)
                if (i = oi[r].call(c, e, u, c.opts)) return i;
            return ut.map(u, W, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), ut.fx.timer(ut.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function F(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = ut.camelCase(n), o = t[i], r = e[n], ut.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = ut.cssHooks[i], a && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function B(e, t, n) {
            var i, o, r, a, s, l, c = this,
                u = {},
                p = e.style,
                h = e.nodeType && k(e),
                d = ut._data(e, "fxshow");
            n.queue || (s = ut._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, ut.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], ti.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) continue;
                    u[i] = d && d[i] || ut.style(e, i)
                } if (!ut.isEmptyObject(u)) {
                d ? "hidden" in d && (h = d.hidden) : d = ut._data(e, "fxshow", {}), r && (d.hidden = !h), h ? ut(e).show() : c.done(function() {
                    ut(e).hide()
                }), c.done(function() {
                    var t;
                    ut._removeData(e, "fxshow");
                    for (t in u) ut.style(e, t, u[t])
                });
                for (i in u) a = W(h ? d[i] : 0, i, c), i in d || (d[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function R(e, t, n, i, o) {
            return new R.prototype.init(e, t, n, i, o)
        }

        function q(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = $n[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function X(e) {
            return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var U, V, Y = typeof t,
            G = e.location,
            K = e.document,
            Q = K.documentElement,
            Z = e.jQuery,
            J = e.$,
            et = {},
            tt = [],
            nt = "1.10.2",
            it = tt.concat,
            ot = tt.push,
            rt = tt.slice,
            at = tt.indexOf,
            st = et.toString,
            lt = et.hasOwnProperty,
            ct = nt.trim,
            ut = function(e, t) {
                return new ut.fn.init(e, t, V)
            },
            pt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ht = /\S+/g,
            dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^[\],:{}\s]*$/,
            vt = /(?:^|:|,)(?:\s*\[)+/g,
            yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            wt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            bt = /^-ms-/,
            xt = /-([\da-z])/gi,
            Ct = function(e, t) {
                return t.toUpperCase()
            },
            kt = function(e) {
                (K.addEventListener || "load" === e.type || "complete" === K.readyState) && ($t(), ut.ready())
            },
            $t = function() {
                K.addEventListener ? (K.removeEventListener("DOMContentLoaded", kt, !1), e.removeEventListener("load", kt, !1)) : (K.detachEvent("onreadystatechange", kt), e.detachEvent("onload", kt))
            };
        ut.fn = ut.prototype = {
                jquery: nt,
                constructor: ut,
                init: function(e, n, i) {
                    var o, r;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (o = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !o || !o[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (o[1]) {
                            if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : K, !0)), gt.test(o[1]) && ut.isPlainObject(n))
                                for (o in n) ut.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                            return this
                        }
                        if (r = K.getElementById(o[2]), r && r.parentNode) {
                            if (r.id !== o[2]) return i.find(e);
                            this.length = 1, this[0] = r
                        }
                        return this.context = K, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return rt.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function(e) {
                    var t = ut.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ut.each(this, e, t)
                },
                ready: function(e) {
                    return ut.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(rt.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(ut.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ot,
                sort: [].sort,
                splice: [].splice
            }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
                var e, n, i, o, r, a, s = arguments[0] || {},
                    l = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) e = s[o], i = r[o], s !== i && (u && i && (ut.isPlainObject(i) || (n = ut.isArray(i))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[o] = ut.extend(u, a, i)) : i !== t && (s[o] = i));
                return s
            }, ut.extend({
                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === ut && (e.$ = J), t && e.jQuery === ut && (e.jQuery = Z), ut
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ut.readyWait++ : ut.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                        if (!K.body) return setTimeout(ut.ready);
                        ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (U.resolveWith(K, [ut]), ut.fn.trigger && ut(K).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) {
                    return "function" === ut.type(e)
                },
                isArray: Array.isArray || function(e) {
                    return "array" === ut.type(e)
                },
                isWindow: function(e) {
                    return null != e && e == e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e
                },
                isPlainObject: function(e) {
                    var n;
                    if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    if (ut.support.ownLast)
                        for (n in e) return lt.call(e, n);
                    for (n in e);
                    return n === t || lt.call(e, n)
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw new Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t || K;
                    var i = gt.exec(e),
                        o = !n && [];
                    return i ? [t.createElement(i[1])] : (i = ut.buildFragment([e], t, o), o && ut(o).remove(), ut.merge([], i.childNodes))
                },
                parseJSON: function(t) {
                    return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && mt.test(t.replace(yt, "@").replace(wt, "]").replace(vt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
                },
                parseXML: function(n) {
                    var i, o;
                    if (!n || "string" != typeof n) return null;
                    try {
                        e.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (r) {
                        i = t
                    }
                    return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), i
                },
                noop: function() {},
                globalEval: function(t) {
                    t && ut.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(bt, "ms-").replace(xt, Ct)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, i) {
                    var o, r = 0,
                        a = e.length,
                        s = n(e);
                    if (i) {
                        if (s)
                            for (; a > r && (o = t.apply(e[r], i), o !== !1); r++);
                        else
                            for (r in e)
                                if (o = t.apply(e[r], i), o === !1) break
                    } else if (s)
                        for (; a > r && (o = t.call(e[r], r, e[r]), o !== !1); r++);
                    else
                        for (r in e)
                            if (o = t.call(e[r], r, e[r]), o === !1) break;
                    return e
                },
                trim: ct && !ct.call("﻿ ") ? function(e) {
                    return null == e ? "" : ct.call(e)
                } : function(e) {
                    return null == e ? "" : (e + "").replace(dt, "")
                },
                makeArray: function(e, t) {
                    var i = t || [];
                    return null != e && (n(Object(e)) ? ut.merge(i, "string" == typeof e ? [e] : e) : ot.call(i, e)), i
                },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (at) return at.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = n.length,
                        o = e.length,
                        r = 0;
                    if ("number" == typeof i)
                        for (; i > r; r++) e[o++] = n[r];
                    else
                        for (; n[r] !== t;) e[o++] = n[r++];
                    return e.length = o, e
                },
                grep: function(e, t, n) {
                    var i, o = [],
                        r = 0,
                        a = e.length;
                    for (n = !!n; a > r; r++) i = !!t(e[r], r), n !== i && o.push(e[r]);
                    return o
                },
                map: function(e, t, i) {
                    var o, r = 0,
                        a = e.length,
                        s = n(e),
                        l = [];
                    if (s)
                        for (; a > r; r++) o = t(e[r], r, i), null != o && (l[l.length] = o);
                    else
                        for (r in e) o = t(e[r], r, i), null != o && (l[l.length] = o);
                    return it.apply([], l)
                },
                guid: 1,
                proxy: function(e, n) {
                    var i, o, r;
                    return "string" == typeof n && (r = e[n], n = e, e = r), ut.isFunction(e) ? (i = rt.call(arguments, 2), o = function() {
                        return e.apply(n || this, i.concat(rt.call(arguments)))
                    }, o.guid = e.guid = e.guid || ut.guid++, o) : t
                },
                access: function(e, n, i, o, r, a, s) {
                    var l = 0,
                        c = e.length,
                        u = null == i;
                    if ("object" === ut.type(i)) {
                        r = !0;
                        for (l in i) ut.access(e, n, l, i[l], !0, a, s)
                    } else if (o !== t && (r = !0, ut.isFunction(o) || (s = !0), u && (s ? (n.call(e, o), n = null) : (u = n, n = function(e, t, n) {
                            return u.call(ut(e), n)
                        })), n))
                        for (; c > l; l++) n(e[l], i, s ? o : o.call(e[l], l, n(e[l], i)));
                    return r ? e : u ? n.call(e) : c ? n(e[0], i) : a
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(e, t, n, i) {
                    var o, r, a = {};
                    for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                    o = n.apply(e, i || []);
                    for (r in t) e.style[r] = a[r];
                    return o
                }
            }), ut.ready.promise = function(t) {
                if (!U)
                    if (U = ut.Deferred(), "complete" === K.readyState) setTimeout(ut.ready);
                    else if (K.addEventListener) K.addEventListener("DOMContentLoaded", kt, !1), e.addEventListener("load", kt, !1);
                else {
                    K.attachEvent("onreadystatechange", kt), e.attachEvent("onload", kt);
                    var n = !1;
                    try {
                        n = null == e.frameElement && K.documentElement
                    } catch (i) {}
                    n && n.doScroll && ! function o() {
                        if (!ut.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            $t(), ut.ready()
                        }
                    }()
                }
                return U.promise(t)
            }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                et["[object " + t + "]"] = t.toLowerCase()
            }), V = ut(K),
            function(e, t) {
                function n(e, t, n, i) {
                    var o, r, a, s, l, c, u, p, f, g;
                    if ((t ? t.ownerDocument || t : H) !== D && A(t), t = t || D, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (N && !i) {
                        if (o = wt.exec(e))
                            if (a = o[1]) {
                                if (9 === s) {
                                    if (r = t.getElementById(a), !r || !r.parentNode) return n;
                                    if (r.id === a) return n.push(r), n
                                } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && O(t, r) && r.id === a) return n.push(r), n
                            } else {
                                if (o[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                                if ((a = o[3]) && k.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n
                            } if (k.qsa && (!j || !j.test(e))) {
                            if (p = u = W, f = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                                for (c = h(e), (u = t.getAttribute("id")) ? p = u.replace(Ct, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + d(c[l]);
                                f = dt.test(e) && t.parentNode || t, g = c.join(",")
                            }
                            if (g) try {
                                return et.apply(n, f.querySelectorAll(g)), n
                            } catch (m) {} finally {
                                u || t.removeAttribute("id")
                            }
                        }
                    }
                    return x(e.replace(ct, "$1"), t, n, i)
                }

                function i() {
                    function e(n, i) {
                        return t.push(n += " ") > T.cacheLength && delete e[t.shift()], e[n] = i
                    }
                    var t = [];
                    return e
                }

                function o(e) {
                    return e[W] = !0, e
                }

                function r(e) {
                    var t = D.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), i = e.length; i--;) T.attrHandle[n[i]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || G) - (~e.sourceIndex || G);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return o(function(t) {
                        return t = +t, o(function(n, i) {
                            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function p() {}

                function h(e, t) {
                    var i, o, r, a, s, l, c, u = q[e + " "];
                    if (u) return t ? 0 : u.slice(0);
                    for (s = e, l = [], c = T.preFilter; s;) {
                        (!i || (o = pt.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ht.exec(s)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(ct, " ")
                        }), s = s.slice(i.length));
                        for (a in T.filter) !(o = vt[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: a,
                            matches: o
                        }), s = s.slice(i.length));
                        if (!i) break
                    }
                    return t ? s.length : s ? n.error(e) : q(e, l).slice(0)
                }

                function d(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        o = n && "parentNode" === i,
                        r = B++;
                    return t.first ? function(t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) return e(t, n, r)
                    } : function(t, n, a) {
                        var s, l, c, u = F + " " + r;
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || o)
                                    if (c = t[W] || (t[W] = {}), (l = c[i]) && l[0] === u) {
                                        if ((s = l[1]) === !0 || s === $) return s === !0
                                    } else if (l = c[i] = [u], l[1] = e(t, n, a) || $, l[1] === !0) return !0
                    }
                }

                function g(e) {
                    return e.length > 1 ? function(t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function m(e, t, n, i, o) {
                    for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
                    return a
                }

                function v(e, t, n, i, r, a) {
                    return i && !i[W] && (i = v(i)), r && !r[W] && (r = v(r, a)), o(function(o, a, s, l) {
                        var c, u, p, h = [],
                            d = [],
                            f = a.length,
                            g = o || b(t || "*", s.nodeType ? [s] : s, []),
                            v = !e || !o && t ? g : m(g, h, e, s, l),
                            y = n ? r || (o ? e : f || i) ? [] : a : v;
                        if (n && n(v, y, s, l), i)
                            for (c = m(y, d), i(c, [], s, l), u = c.length; u--;)(p = c[u]) && (y[d[u]] = !(v[d[u]] = p));
                        if (o) {
                            if (r || e) {
                                if (r) {
                                    for (c = [], u = y.length; u--;)(p = y[u]) && c.push(v[u] = p);
                                    r(null, y = [], c, l)
                                }
                                for (u = y.length; u--;)(p = y[u]) && (c = r ? nt.call(o, p) : h[u]) > -1 && (o[c] = !(a[c] = p))
                            }
                        } else y = m(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : et.apply(a, y)
                    })
                }

                function y(e) {
                    for (var t, n, i, o = e.length, r = T.relative[e[0].type], a = r || T.relative[" "], s = r ? 1 : 0, l = f(function(e) {
                            return e === t
                        }, a, !0), c = f(function(e) {
                            return nt.call(t, e) > -1
                        }, a, !0), u = [function(e, n, i) {
                            return !r && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                        }]; o > s; s++)
                        if (n = T.relative[e[s].type]) u = [f(g(u), n)];
                        else {
                            if (n = T.filter[e[s].type].apply(null, e[s].matches), n[W]) {
                                for (i = ++s; o > i && !T.relative[e[i].type]; i++);
                                return v(s > 1 && g(u), s > 1 && d(e.slice(0, s - 1).concat({
                                    value: " " === e[s - 2].type ? "*" : ""
                                })).replace(ct, "$1"), n, i > s && y(e.slice(s, i)), o > i && y(e = e.slice(i)), o > i && d(e))
                            }
                            u.push(n)
                        } return g(u)
                }

                function w(e, t) {
                    var i = 0,
                        r = t.length > 0,
                        a = e.length > 0,
                        s = function(o, s, l, c, u) {
                            var p, h, d, f = [],
                                g = 0,
                                v = "0",
                                y = o && [],
                                w = null != u,
                                b = M,
                                x = o || a && T.find.TAG("*", u && s.parentNode || s),
                                C = F += null == b ? 1 : Math.random() || .1;
                            for (w && (M = s !== D && s, $ = i); null != (p = x[v]); v++) {
                                if (a && p) {
                                    for (h = 0; d = e[h++];)
                                        if (d(p, s, l)) {
                                            c.push(p);
                                            break
                                        } w && (F = C, $ = ++i)
                                }
                                r && ((p = !d && p) && g--, o && y.push(p))
                            }
                            if (g += v, r && v !== g) {
                                for (h = 0; d = t[h++];) d(y, f, s, l);
                                if (o) {
                                    if (g > 0)
                                        for (; v--;) y[v] || f[v] || (f[v] = Z.call(c));
                                    f = m(f)
                                }
                                et.apply(c, f), w && !o && f.length > 0 && g + t.length > 1 && n.uniqueSort(c)
                            }
                            return w && (F = C, M = b), y
                        };
                    return r ? o(s) : s
                }

                function b(e, t, i) {
                    for (var o = 0, r = t.length; r > o; o++) n(e, t[o], i);
                    return i
                }

                function x(e, t, n, i) {
                    var o, r, a, s, l, c = h(e);
                    if (!i && 1 === c.length) {
                        if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && k.getById && 9 === t.nodeType && N && T.relative[r[1].type]) {
                            if (t = (T.find.ID(a.matches[0].replace(kt, $t), t) || [])[0], !t) return n;
                            e = e.slice(r.shift().value.length)
                        }
                        for (o = vt.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !T.relative[s = a.type]);)
                            if ((l = T.find[s]) && (i = l(a.matches[0].replace(kt, $t), dt.test(r[0].type) && t.parentNode || t))) {
                                if (r.splice(o, 1), e = i.length && d(r), !e) return et.apply(n, i), n;
                                break
                            }
                    }
                    return E(e, c)(i, t, !N, n, dt.test(e)), n
                }
                var C, k, $, T, S, P, E, M, I, A, D, _, N, j, z, L, O, W = "sizzle" + -new Date,
                    H = e.document,
                    F = 0,
                    B = 0,
                    R = i(),
                    q = i(),
                    X = i(),
                    U = !1,
                    V = function(e, t) {
                        return e === t ? (U = !0, 0) : 0
                    },
                    Y = typeof t,
                    G = 1 << 31,
                    K = {}.hasOwnProperty,
                    Q = [],
                    Z = Q.pop,
                    J = Q.push,
                    et = Q.push,
                    tt = Q.slice,
                    nt = Q.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ot = "[\\x20\\t\\r\\n\\f]",
                    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    at = rt.replace("w", "w#"),
                    st = "\\[" + ot + "*(" + rt + ")" + ot + "*(?:([*^$|!~]?=)" + ot + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + ot + "*\\]",
                    lt = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)",
                    ct = new RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
                    pt = new RegExp("^" + ot + "*," + ot + "*"),
                    ht = new RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
                    dt = new RegExp(ot + "*[+~]"),
                    ft = new RegExp("=" + ot + "*([^\\]'\"]*)" + ot + "*\\]", "g"),
                    gt = new RegExp(lt),
                    mt = new RegExp("^" + at + "$"),
                    vt = {
                        ID: new RegExp("^#(" + rt + ")"),
                        CLASS: new RegExp("^\\.(" + rt + ")"),
                        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + st),
                        PSEUDO: new RegExp("^" + lt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + it + ")$", "i"),
                        needsContext: new RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i")
                    },
                    yt = /^[^{]+\{\s*\[native \w/,
                    wt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /^(?:input|select|textarea|button)$/i,
                    xt = /^h\d$/i,
                    Ct = /'|\\/g,
                    kt = new RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
                    $t = function(e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                    };
                try {
                    et.apply(Q = tt.call(H.childNodes), H.childNodes), Q[H.childNodes.length].nodeType
                } catch (Tt) {
                    et = {
                        apply: Q.length ? function(e, t) {
                            J.apply(e, tt.call(t))
                        } : function(e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                P = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = n.support = {}, A = n.setDocument = function(e) {
                    var t = e ? e.ownerDocument || e : H,
                        n = t.defaultView;
                    return t !== D && 9 === t.nodeType && t.documentElement ? (D = t, _ = t.documentElement, N = !P(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                        A()
                    }), k.attributes = r(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), k.getElementsByTagName = r(function(e) {
                        return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                    }), k.getElementsByClassName = r(function(e) {
                        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                    }), k.getById = r(function(e) {
                        return _.appendChild(e).id = W, !t.getElementsByName || !t.getElementsByName(W).length
                    }), k.getById ? (T.find.ID = function(e, t) {
                        if (typeof t.getElementById !== Y && N) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, T.filter.ID = function(e) {
                        var t = e.replace(kt, $t);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete T.find.ID, T.filter.ID = function(e) {
                        var t = e.replace(kt, $t);
                        return function(e) {
                            var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), T.find.TAG = k.getElementsByTagName ? function(e, t) {
                        return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, T.find.CLASS = k.getElementsByClassName && function(e, t) {
                        return typeof t.getElementsByClassName !== Y && N ? t.getElementsByClassName(e) : void 0
                    }, z = [], j = [], (k.qsa = yt.test(t.querySelectorAll)) && (r(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || j.push("\\[" + ot + "*(?:value|" + it + ")"), e.querySelectorAll(":checked").length || j.push(":checked")
                    }), r(function(e) {
                        var n = t.createElement("input");
                        n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && j.push("[*^$]=" + ot + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
                    })), (k.matchesSelector = yt.test(L = _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(e) {
                        k.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), z.push("!=", lt)
                    }), j = j.length && new RegExp(j.join("|")), z = z.length && new RegExp(z.join("|")), O = yt.test(_.contains) || _.compareDocumentPosition ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, V = _.compareDocumentPosition ? function(e, n) {
                        if (e === n) return U = !0, 0;
                        var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                        return i ? 1 & i || !k.sortDetached && n.compareDocumentPosition(e) === i ? e === t || O(H, e) ? -1 : n === t || O(H, n) ? 1 : I ? nt.call(I, e) - nt.call(I, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                    } : function(e, n) {
                        var i, o = 0,
                            r = e.parentNode,
                            a = n.parentNode,
                            l = [e],
                            c = [n];
                        if (e === n) return U = !0, 0;
                        if (!r || !a) return e === t ? -1 : n === t ? 1 : r ? -1 : a ? 1 : I ? nt.call(I, e) - nt.call(I, n) : 0;
                        if (r === a) return s(e, n);
                        for (i = e; i = i.parentNode;) l.unshift(i);
                        for (i = n; i = i.parentNode;) c.unshift(i);
                        for (; l[o] === c[o];) o++;
                        return o ? s(l[o], c[o]) : l[o] === H ? -1 : c[o] === H ? 1 : 0
                    }, t) : D
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== D && A(e), t = t.replace(ft, "='$1']"), !(!k.matchesSelector || !N || z && z.test(t) || j && j.test(t))) try {
                        var i = L.call(e, t);
                        if (i || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (o) {}
                    return n(t, D, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== D && A(e), O(e, t)
                }, n.attr = function(e, n) {
                    (e.ownerDocument || e) !== D && A(e);
                    var i = T.attrHandle[n.toLowerCase()],
                        o = i && K.call(T.attrHandle, n.toLowerCase()) ? i(e, n, !N) : t;
                    return o === t ? k.attributes || !N ? e.getAttribute(n) : (o = e.getAttributeNode(n)) && o.specified ? o.value : null : o
                }, n.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        i = 0,
                        o = 0;
                    if (U = !k.detectDuplicates, I = !k.sortStable && e.slice(0), e.sort(V), U) {
                        for (; t = e[o++];) t === e[o] && (i = n.push(o));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return e
                }, S = n.getText = function(e) {
                    var t, n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[i]; i++) n += S(t);
                    return n
                }, T = n.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: vt,
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
                            return e[1] = e[1].replace(kt, $t), e[3] = (e[4] || e[5] || "").replace(kt, $t), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var n, i = !e[5] && e[2];
                            return vt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : i && gt.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(kt, $t).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = R[e + " "];
                            return t || (t = new RegExp("(^|" + ot + ")" + e + "(" + ot + "|$)")) && R(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, i) {
                            return function(o) {
                                var r = n.attr(o, e);
                                return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r + " ").indexOf(i) > -1 : "|=" === t ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === i && 0 === o ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, l) {
                                var c, u, p, h, d, f, g = r !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !l && !s;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (p = t; p = p[g];)
                                                if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                            f = g = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (u = m[W] || (m[W] = {}), c = u[e] || [], d = c[0] === F && c[1], h = c[0] === F && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (h = d = 0) || f.pop();)
                                            if (1 === p.nodeType && ++h && p === t) {
                                                u[e] = [F, d, h];
                                                break
                                            }
                                    } else if (y && (c = (t[W] || (t[W] = {}))[e]) && c[0] === F) h = c[1];
                                    else
                                        for (;
                                            (p = ++d && p && p[g] || (h = d = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++h || (y && ((p[W] || (p[W] = {}))[e] = [F, h]), p !== t)););
                                    return h -= o, h === i || 0 === h % i && h / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var i, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                            return r[W] ? r(t) : r.length > 1 ? (i = [e, e, "", t], T.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, n) {
                                for (var i, o = r(e, t), a = o.length; a--;) i = nt.call(e, o[a]), e[i] = !(n[i] = o[a])
                            }) : function(e) {
                                return r(e, 0, i)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: o(function(e) {
                            var t = [],
                                n = [],
                                i = E(e.replace(ct, "$1"));
                            return i[W] ? o(function(e, t, n, o) {
                                for (var r, a = i(e, null, o, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                            }) : function(e, o, r) {
                                return t[0] = e, i(t, null, r, n), !n.pop()
                            }
                        }),
                        has: o(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: o(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                        }),
                        lang: o(function(e) {
                            return mt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(kt, $t).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === _
                        },
                        focus: function(e) {
                            return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return xt.test(e.nodeName)
                        },
                        input: function(e) {
                            return bt.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(e, t) {
                            return [t - 1]
                        }),
                        eq: u(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: u(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: u(function(e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, T.pseudos.nth = T.pseudos.eq;
                for (C in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) T.pseudos[C] = l(C);
                for (C in {
                        submit: !0,
                        reset: !0
                    }) T.pseudos[C] = c(C);
                p.prototype = T.filters = T.pseudos, T.setFilters = new p, E = n.compile = function(e, t) {
                    var n, i = [],
                        o = [],
                        r = X[e + " "];
                    if (!r) {
                        for (t || (t = h(e)), n = t.length; n--;) r = y(t[n]), r[W] ? i.push(r) : o.push(r);
                        r = X(e, w(o, i))
                    }
                    return r
                }, k.sortStable = W.split("").sort(V).join("") === W, k.detectDuplicates = U, A(), k.sortDetached = r(function(e) {
                    return 1 & e.compareDocumentPosition(D.createElement("div"))
                }), r(function(e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || a("type|href|height|width", function(e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), k.attributes && r(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || a("value", function(e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), r(function(e) {
                    return null == e.getAttribute("disabled")
                }) || a(it, function(e, t, n) {
                    var i;
                    return n ? void 0 : (i = e.getAttributeNode(t)) && i.specified ? i.value : e[t] === !0 ? t.toLowerCase() : null
                }), ut.find = n, ut.expr = n.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = n.uniqueSort, ut.text = n.getText, ut.isXMLDoc = n.isXML, ut.contains = n.contains
            }(e);
        var Tt = {};
        ut.Callbacks = function(e) {
            e = "string" == typeof e ? Tt[e] || i(e) : ut.extend({}, e);
            var n, o, r, a, s, l, c = [],
                u = !e.once && [],
                p = function(t) {
                    for (o = e.memory && t, r = !0, s = l || 0, l = 0, a = c.length, n = !0; c && a > s; s++)
                        if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            o = !1;
                            break
                        } n = !1, c && (u ? u.length && p(u.shift()) : o ? c = [] : h.disable())
                },
                h = {
                    add: function() {
                        if (c) {
                            var t = c.length;
                            ! function i(t) {
                                ut.each(t, function(t, n) {
                                    var o = ut.type(n);
                                    "function" === o ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" !== o && i(n)
                                })
                            }(arguments), n ? a = c.length : o && (l = t, p(o))
                        }
                        return this
                    },
                    remove: function() {
                        return c && ut.each(arguments, function(e, t) {
                            for (var i;
                                (i = ut.inArray(t, c, i)) > -1;) c.splice(i, 1), n && (a >= i && a--, s >= i && s--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ut.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], a = 0, this
                    },
                    disable: function() {
                        return c = u = o = t, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return u = t, o || h.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(e, t) {
                        return !c || r && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : p(t)), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return h
        }, ut.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ut.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ut.Deferred(function(n) {
                                ut.each(t, function(t, r) {
                                    var a = r[0],
                                        s = ut.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = s && s.apply(this, arguments);
                                        e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ut.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, ut.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = rt.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : ut.Deferred(),
                    c = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? rt.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && ut.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        }), ut.support = function(t) {
            var n, i, o, r, a, s, l, c, u, p = K.createElement("div");
            if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*") || [], i = p.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
            r = K.createElement("select"), s = r.appendChild(K.createElement("option")), o = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== p.className, t.leadingWhitespace = 3 === p.firstChild.nodeType, t.tbody = !p.getElementsByTagName("tbody").length, t.htmlSerialize = !!p.getElementsByTagName("link").length, t.style = /top/.test(i.getAttribute("style")), t.hrefNormalized = "/a" === i.getAttribute("href"), t.opacity = /^0.5/.test(i.style.opacity), t.cssFloat = !!i.style.cssFloat, t.checkOn = !!o.value, t.optSelected = s.selected, t.enctype = !!K.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== K.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !s.disabled;
            try {
                delete p.test
            } catch (h) {
                t.deleteExpando = !1
            }
            o = K.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = K.createDocumentFragment(), a.appendChild(o), t.appendChecked = o.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function() {
                t.noCloneEvent = !1
            }), p.cloneNode(!0).click());
            for (u in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) p.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || p.attributes[l].expando === !1;
            p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === p.style.backgroundClip;
            for (u in ut(t)) break;
            return t.ownLast = "0" !== u, ut(function() {
                var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    a = K.getElementsByTagName("body")[0];
                a && (n = K.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(a, null != a.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    t.boxSizing = 4 === p.offsetWidth
                }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {
                    width: "4px"
                }).width, i = p.appendChild(K.createElement("div")), i.style.cssText = p.style.cssText = r, i.style.marginRight = i.style.width = "0", p.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof p.style.zoom !== Y && (p.innerHTML = "", p.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== p.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = p = o = i = null)
            }), n = r = a = s = i = o = null, t
        }({});
        var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            Pt = /([A-Z])/g;
        ut.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e)
            },
            data: function(e, t, n) {
                return o(e, t, n)
            },
            removeData: function(e, t) {
                return r(e, t)
            },
            _data: function(e, t, n) {
                return o(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return r(e, t, !0)
            },
            acceptData: function(e) {
                if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
                var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), ut.fn.extend({
            data: function(e, n) {
                var i, o, r = null,
                    s = 0,
                    l = this[0];
                if (e === t) {
                    if (this.length && (r = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
                        for (i = l.attributes; s < i.length; s++) o = i[s].name, 0 === o.indexOf("data-") && (o = ut.camelCase(o.slice(5)), a(l, o, r[o]));
                        ut._data(l, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ut.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ut.data(this, e, n)
                }) : l ? a(l, e, ut.data(l, e)) : null
            },
            removeData: function(e) {
                return this.each(function() {
                    ut.removeData(this, e)
                })
            }
        }), ut.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = ut._data(e, t), n && (!i || ut.isArray(n) ? i = ut._data(e, t, ut.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ut.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = ut._queueHooks(e, t),
                    a = function() {
                        ut.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ut._data(e, n) || ut._data(e, n, {
                    empty: ut.Callbacks("once memory").add(function() {
                        ut._removeData(e, t + "queue"), ut._removeData(e, n)
                    })
                })
            }
        }), ut.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? ut.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = ut.queue(this, e, n);
                    ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ut.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, o = 1,
                    r = ut.Deferred(),
                    a = this,
                    s = this.length,
                    l = function() {
                        --o || r.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = ut._data(a[s], e + "queueHooks"), i && i.empty && (o++, i.empty.add(l));
                return l(), r.promise(n)
            }
        });
        var Et, Mt, It = /[\t\r\n\f]/g,
            At = /\r/g,
            Dt = /^(?:input|select|textarea|button|object)$/i,
            _t = /^(?:a|area)$/i,
            Nt = /^(?:checked|selected)$/i,
            jt = ut.support.getSetAttribute,
            zt = ut.support.input;
        ut.fn.extend({
            attr: function(e, t) {
                return ut.access(this, ut.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ut.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ut.access(this, ut.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ut.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, i, o, r, a = 0,
                    s = this.length,
                    l = "string" == typeof e && e;
                if (ut.isFunction(e)) return this.each(function(t) {
                    ut(this).addClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ht) || []; s > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(It, " ") : " ")) {
                            for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            n.className = ut.trim(i)
                        } return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a = 0,
                    s = this.length,
                    l = 0 === arguments.length || "string" == typeof e && e;
                if (ut.isFunction(e)) return this.each(function(t) {
                    ut(this).removeClass(e.call(this, t, this.className))
                });
                if (l)
                    for (t = (e || "").match(ht) || []; s > a; a++)
                        if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(It, " ") : "")) {
                            for (r = 0; o = t[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            n.className = e ? ut.trim(i) : ""
                        } return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ut.isFunction(e) ? this.each(function(n) {
                    ut(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n)
                        for (var t, i = 0, o = ut(this), r = e.match(ht) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === Y || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(It, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, o, r = this[0]; {
                    if (arguments.length) return o = ut.isFunction(e), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = o ? e.call(this, n, ut(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ut.isArray(r) && (r = ut.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })), i = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, r, "value") !== t || (this.value = r))
                    });
                    if (r) return i = ut.valHooks[r.type] || ut.valHooks[r.nodeName.toLowerCase()], i && "get" in i && (n = i.get(r, "value")) !== t ? n : (n = r.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
                }
            }
        }), ut.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ut.find.attr(e, "value");
                        return null != t ? t : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                                if (t = ut(n).val(), r) return t;
                                a.push(t)
                            } return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = ut.makeArray(t), a = o.length; a--;) i = o[a], (i.selected = ut.inArray(ut(i).val(), r) >= 0) && (n = !0);
                        return n || (e.selectedIndex = -1), r
                    }
                }
            },
            attr: function(e, n, i) {
                var o, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === Y ? ut.prop(e, n, i) : (1 === a && ut.isXMLDoc(e) || (n = n.toLowerCase(), o = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? Mt : Et)), i === t ? o && "get" in o && null !== (r = o.get(e, n)) ? r : (r = ut.find.attr(e, n), null == r ? t : r) : null !== i ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : (e.setAttribute(n, i + ""), i) : (ut.removeAttr(e, n), void 0))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(ht);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = ut.propFix[n] || n, ut.expr.match.bool.test(n) ? zt && jt || !Nt.test(n) ? e[i] = !1 : e[ut.camelCase("default-" + n)] = e[i] = !1 : ut.attr(e, n, ""), e.removeAttribute(jt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, i) {
                var o, r, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, r = ut.propHooks[n]), i !== t ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o : e[n] = i : r && "get" in r && null !== (o = r.get(e, n)) ? o : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ut.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Dt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), Mt = {
            set: function(e, t, n) {
                return t === !1 ? ut.removeAttr(e, n) : zt && jt || !Nt.test(n) ? e.setAttribute(!jt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, ut.each(ut.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var i = ut.expr.attrHandle[n] || ut.find.attr;
            ut.expr.attrHandle[n] = zt && jt || !Nt.test(n) ? function(e, n, o) {
                var r = ut.expr.attrHandle[n],
                    a = o ? t : (ut.expr.attrHandle[n] = t) != i(e, n, o) ? n.toLowerCase() : null;
                return ut.expr.attrHandle[n] = r, a
            } : function(e, n, i) {
                return i ? t : e[ut.camelCase("default-" + n)] ? n.toLowerCase() : null
            }
        }), zt && jt || (ut.attrHooks.value = {
            set: function(e, t, n) {
                return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Et && Et.set(e, t, n)
            }
        }), jt || (Et = {
            set: function(e, n, i) {
                var o = e.getAttributeNode(i);
                return o || e.setAttributeNode(o = e.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
            }
        }, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, n, i) {
            var o;
            return i ? t : (o = e.getAttributeNode(n)) && "" !== o.value ? o.value : null
        }, ut.valHooks.button = {
            get: function(e, n) {
                var i = e.getAttributeNode(n);
                return i && i.specified ? i.value : t
            },
            set: Et.set
        }, ut.attrHooks.contenteditable = {
            set: function(e, t, n) {
                Et.set(e, "" === t ? !1 : t, n)
            }
        }, ut.each(["width", "height"], function(e, t) {
            ut.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ut.support.hrefNormalized || ut.each(["href", "src"], function(e, t) {
            ut.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ut.support.style || (ut.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), ut.support.optSelected || (ut.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ut.propFix[this.toLowerCase()] = this
        }), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each(["radio", "checkbox"], function() {
            ut.valHooks[this] = {
                set: function(e, t) {
                    return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
                }
            }, ut.support.checkOn || (ut.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var Lt = /^(?:input|select|textarea)$/i,
            Ot = /^key/,
            Wt = /^(?:mouse|contextmenu)|click/,
            Ht = /^(?:focusinfocus|focusoutblur)$/,
            Ft = /^([^.]*)(?:\.(.+)|)$/;
        ut.event = {
            global: {},
            add: function(e, n, i, o, r) {
                var a, s, l, c, u, p, h, d, f, g, m, v = ut._data(e);
                if (v) {
                    for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = ut.guid++), (s = v.events) || (s = v.events = {}), (p = v.handle) || (p = v.handle = function(e) {
                            return typeof ut === Y || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(p.elem, arguments)
                        }, p.elem = e), n = (n || "").match(ht) || [""], l = n.length; l--;) a = Ft.exec(n[l]) || [], f = m = a[1], g = (a[2] || "").split(".").sort(), f && (u = ut.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ut.event.special[f] || {}, h = ut.extend({
                        type: f,
                        origType: m,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && ut.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, c), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(e, o, g, p) !== !1 || (e.addEventListener ? e.addEventListener(f, p, !1) : e.attachEvent && e.attachEvent("on" + f, p))), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), ut.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, l, c, u, p, h, d, f, g, m = ut.hasData(e) && ut._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(ht) || [""], c = t.length; c--;)
                        if (s = Ft.exec(t[c]) || [], d = g = s[1], f = (s[2] || "").split(".").sort(), d) {
                            for (p = ut.event.special[d] || {}, d = (i ? p.delegateType : p.bindType) || d, h = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) a = h[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(r, 1), a.selector && h.delegateCount--, p.remove && p.remove.call(e, a));
                            l && !h.length && (p.teardown && p.teardown.call(e, f, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), delete u[d])
                        } else
                            for (d in u) ut.event.remove(e, d + t[c], n, i, !0);
                    ut.isEmptyObject(u) && (delete m.handle, ut._removeData(e, "events"))
                }
            },
            trigger: function(n, i, o, r) {
                var a, s, l, c, u, p, h, d = [o || K],
                    f = lt.call(n, "type") ? n.type : n,
                    g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = p = o = o || K, 3 !== o.nodeType && 8 !== o.nodeType && !Ht.test(f + ut.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), s = f.indexOf(":") < 0 && "on" + f, n = n[ut.expando] ? n : new ut.Event(f, "object" == typeof n && n), n.isTrigger = r ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = o), i = null == i ? [n] : ut.makeArray(i, [n]), u = ut.event.special[f] || {}, r || !u.trigger || u.trigger.apply(o, i) !== !1)) {
                    if (!r && !u.noBubble && !ut.isWindow(o)) {
                        for (c = u.delegateType || f, Ht.test(c + f) || (l = l.parentNode); l; l = l.parentNode) d.push(l), p = l;
                        p === (o.ownerDocument || K) && d.push(p.defaultView || p.parentWindow || e)
                    }
                    for (h = 0;
                        (l = d[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? c : u.bindType || f, a = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"), a && a.apply(l, i), a = s && l[s], a && ut.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = f, !r && !n.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), i) === !1) && ut.acceptData(o) && s && o[f] && !ut.isWindow(o)) {
                        p = o[s], p && (o[s] = null), ut.event.triggered = f;
                        try {
                            o[f]()
                        } catch (m) {}
                        ut.event.triggered = t, p && (o[s] = p)
                    }
                    return n.result
                }
            },
            dispatch: function(e) {
                e = ut.event.fix(e);
                var n, i, o, r, a, s = [],
                    l = rt.call(arguments),
                    c = (ut._data(this, "events") || {})[e.type] || [],
                    u = ut.event.special[e.type] || {};
                if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (s = ut.event.handlers.call(this, e, c), n = 0;
                        (r = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, a = 0;
                            (o = r.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, i = ((ut.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, n) {
                var i, o, r, a, s = [],
                    l = n.delegateCount,
                    c = e.target;
                if (l && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                            for (r = [], a = 0; l > a; a++) o = n[a], i = o.selector + " ", r[i] === t && (r[i] = o.needsContext ? ut(i, this).index(c) >= 0 : ut.find(i, this, null, [c]).length), r[i] && r.push(o);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        } return l < n.length && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }), s
            },
            fix: function(e) {
                if (e[ut.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Wt.test(o) ? this.mouseHooks : Ot.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || K), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, o, r, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (o = e.target.ownerDocument || K, r = o.documentElement, i = o.body, e.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== u() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === u() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return ut.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = ut.extend(new ut.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? ut.event.trigger(o, null, t) : ut.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ut.removeEvent = K.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Y && (e[i] = null), e.detachEvent(i, n))
        }, ut.Event = function(e, t) {
            return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
        }, ut.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ut.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ut.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return (!o || o !== i && !ut.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ut.support.submitBubbles || (ut.event.special.submit = {
            setup: function() {
                return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                    i && !ut._data(i, "submitBubbles") && (ut.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), ut._data(i, "submitBubbles", !0))
                }), void 0)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
            }
        }), ut.support.changeBubbles || (ut.event.special.change = {
            setup: function() {
                return Lt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), ut.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
                })), !1) : (ut.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Lt.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                    }), ut._data(t, "changeBubbles", !0))
                }), void 0)
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ut.event.remove(this, "._change"), !Lt.test(this.nodeName)
            }
        }), ut.support.focusinBubbles || ut.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    ut.event.simulate(t, e.target, ut.event.fix(e), !0)
                };
            ut.event.special[t] = {
                setup: function() {
                    0 === n++ && K.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && K.removeEventListener(e, i, !0)
                }
            }
        }), ut.fn.extend({
            on: function(e, n, i, o, r) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (a in e) this.on(a, n, i, e[a], r);
                    return this
                }
                if (null == i && null == o ? (o = n, i = n = t) : null == o && ("string" == typeof n ? (o = i, i = t) : (o = i, i = n, n = t)), o === !1) o = c;
                else if (!o) return this;
                return 1 === r && (s = o, o = function(e) {
                    return ut().off(e), s.apply(this, arguments)
                }, o.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
                    ut.event.add(this, e, o, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var o, r;
                if (e && e.preventDefault && e.handleObj) return o = e.handleObj, ut(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, n, e[r]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = c), this.each(function() {
                    ut.event.remove(this, e, i, n)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ut.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? ut.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Bt = /^.[^:#\[\.,]*$/,
            Rt = /^(?:parents|prev(?:Until|All))/,
            qt = ut.expr.match.needsContext,
            Xt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ut.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
                    for (t = 0; o > t; t++)
                        if (ut.contains(i[t], this)) return !0
                }));
                for (t = 0; o > t; t++) ut.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? ut.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            has: function(e) {
                var t, n = ut(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (ut.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(h(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(h(this, e || [], !1))
            },
            is: function(e) {
                return !!h(this, "string" == typeof e && qt.test(e) ? ut(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = qt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, e))) {
                            n = r.push(n);
                            break
                        } return this.pushStack(r.length > 1 ? ut.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
                    i = ut.merge(this.get(), n);
                return this.pushStack(ut.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ut.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ut.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ut.dir(e, "parentNode", n)
            },
            next: function(e) {
                return p(e, "nextSibling")
            },
            prev: function(e) {
                return p(e, "previousSibling")
            },
            nextAll: function(e) {
                return ut.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ut.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ut.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ut.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ut.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ut.sibling(e.firstChild)
            },
            contents: function(e) {
                return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
            }
        }, function(e, t) {
            ut.fn[e] = function(n, i) {
                var o = ut.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ut.filter(i, o)), this.length > 1 && (Xt[e] || (o = ut.unique(o)), Rt.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        }), ut.extend({
            filter: function(e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ut.find.matchesSelector(i, e) ? [i] : [] : ut.find.matches(e, ut.grep(t, function(e) {
                    return 1 === e.nodeType
                }))
            },
            dir: function(e, n, i) {
                for (var o = [], r = e[n]; r && 9 !== r.nodeType && (i === t || 1 !== r.nodeType || !ut(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
                return o
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Vt = / jQuery\d+="(?:null|\d+)"/g,
            Yt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
            Gt = /^\s+/,
            Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Qt = /<([\w:]+)/,
            Zt = /<tbody/i,
            Jt = /<|&#?\w+;/,
            en = /<(?:script|style|link)/i,
            tn = /^(?:checkbox|radio)$/i,
            nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
            on = /^$|\/(?:java|ecma)script/i,
            rn = /^true\/(.*)/,
            an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            sn = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ln = d(K),
            cn = ln.appendChild(K.createElement("div"));
        sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
            text: function(e) {
                return ut.access(this, function(e) {
                    return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || K).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = f(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? ut.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && v(b(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ut.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return ut.clone(this, e, t)
                })
            },
            html: function(e) {
                return ut.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        o = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                    if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Yt.test(e) || !ut.support.leadingWhitespace && Gt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Kt, "<$1></$2>");
                        try {
                            for (; o > i; i++) n = this[i] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                            n = 0
                        } catch (r) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = ut.map(this, function(e) {
                        return [e.nextSibling, e.parentNode]
                    }),
                    t = 0;
                return this.domManip(arguments, function(n) {
                    var i = e[t++],
                        o = e[t++];
                    o && (i && i.parentNode !== o && (i = this.nextSibling), ut(this).remove(), o.insertBefore(n, i))
                }, !0), t ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t, n) {
                e = it.apply([], e);
                var i, o, r, a, s, l, c = 0,
                    u = this.length,
                    p = this,
                    h = u - 1,
                    d = e[0],
                    f = ut.isFunction(d);
                if (f || !(1 >= u || "string" != typeof d || ut.support.checkClone) && nn.test(d)) return this.each(function(i) {
                    var o = p.eq(i);
                    f && (e[0] = d.call(this, i, o.html())), o.domManip(e, t, n)
                });
                if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                    for (a = ut.map(b(l, "script"), g), r = a.length; u > c; c++) o = l, c !== h && (o = ut.clone(o, !0, !0), r && ut.merge(a, b(o, "script"))), t.call(this[c], o, c);
                    if (r)
                        for (s = a[a.length - 1].ownerDocument, ut.map(a, m), c = 0; r > c; c++) o = a[c], on.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(s, o) && (o.src ? ut._evalUrl(o.src) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                    l = i = null
                }
                return this
            }
        }), ut.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ut.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = ut(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ut(r[i])[t](n), ot.apply(o, n.get());
                return this.pushStack(o)
            }
        }), ut.extend({
            clone: function(e, t, n) {
                var i, o, r, a, s, l = ut.contains(e.ownerDocument, e);
                if (ut.support.html5Clone || ut.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(r = cn.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))
                    for (i = b(r), s = b(e), a = 0; null != (o = s[a]); ++a) i[a] && w(o, i[a]);
                if (t)
                    if (n)
                        for (s = s || b(e), i = i || b(r), a = 0; null != (o = s[a]); a++) y(o, i[a]);
                    else y(e, r);
                return i = b(r, "script"), i.length > 0 && v(i, !l && b(e, "script")), i = s = o = null, r
            },
            buildFragment: function(e, t, n, i) {
                for (var o, r, a, s, l, c, u, p = e.length, h = d(t), f = [], g = 0; p > g; g++)
                    if (r = e[g], r || 0 === r)
                        if ("object" === ut.type(r)) ut.merge(f, r.nodeType ? [r] : r);
                        else if (Jt.test(r)) {
                    for (s = s || h.appendChild(t.createElement("div")), l = (Qt.exec(r) || ["", ""])[1].toLowerCase(), u = sn[l] || sn._default, s.innerHTML = u[1] + r.replace(Kt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!ut.support.leadingWhitespace && Gt.test(r) && f.push(t.createTextNode(Gt.exec(r)[0])), !ut.support.tbody)
                        for (r = "table" !== l || Zt.test(r) ? "<table>" !== u[1] || Zt.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) ut.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (ut.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = h.lastChild
                } else f.push(t.createTextNode(r));
                for (s && h.removeChild(s), ut.support.appendChecked || ut.grep(b(f, "input"), x), g = 0; r = f[g++];)
                    if ((!i || -1 === ut.inArray(r, i)) && (a = ut.contains(r.ownerDocument, r), s = b(h.appendChild(r), "script"), a && v(s), n))
                        for (o = 0; r = s[o++];) on.test(r.type || "") && n.push(r);
                return s = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, o, r, a = 0, s = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (n = e[a]); a++)
                    if ((t || ut.acceptData(n)) && (o = n[s], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) u[i] ? ut.event.remove(n, i) : ut.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = null, tt.push(o))
                    }
            },
            _evalUrl: function(e) {
                return ut.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ut.fn.extend({
            wrapAll: function(e) {
                if (ut.isFunction(e)) return this.each(function(t) {
                    ut(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ut.isFunction(e) ? this.each(function(t) {
                    ut(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ut(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ut.isFunction(e);
                return this.each(function(n) {
                    ut(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var un, pn, hn, dn = /alpha\([^)]*\)/i,
            fn = /opacity\s*=\s*([^)]*)/,
            gn = /^(top|right|bottom|left)$/,
            mn = /^(none|table(?!-c[ea]).+)/,
            vn = /^margin/,
            yn = new RegExp("^(" + pt + ")(.*)$", "i"),
            wn = new RegExp("^(" + pt + ")(?!px)[a-z%]+$", "i"),
            bn = new RegExp("^([+-])=(" + pt + ")", "i"),
            xn = {
                BODY: "block"
            },
            Cn = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            kn = {
                letterSpacing: 0,
                fontWeight: 400
            },
            $n = ["Top", "Right", "Bottom", "Left"],
            Tn = ["Webkit", "O", "Moz", "ms"];
        ut.fn.extend({
            css: function(e, n) {
                return ut.access(this, function(e, n, i) {
                    var o, r, a = {},
                        s = 0;
                    if (ut.isArray(n)) {
                        for (r = pn(e), o = n.length; o > s; s++) a[n[s]] = ut.css(e, n[s], !1, r);
                        return a
                    }
                    return i !== t ? ut.style(e, n, i) : ut.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return $(this, !0)
            },
            hide: function() {
                return $(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    k(this) ? ut(this).show() : ut(this).hide()
                })
            }
        }), ut.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = hn(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
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
                "float": ut.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, o) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, a, s, l = ut.camelCase(n),
                        c = e.style;
                    if (n = ut.cssProps[l] || (ut.cssProps[l] = C(c, l)), s = ut.cssHooks[n] || ut.cssHooks[l], i === t) return s && "get" in s && (r = s.get(e, !1, o)) !== t ? r : c[n];
                    if (a = typeof i, "string" === a && (r = bn.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || ut.cssNumber[l] || (i += "px"), ut.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(e, i, o)) === t))) try {
                        c[n] = i
                    } catch (u) {}
                }
            },
            css: function(e, n, i, o) {
                var r, a, s, l = ut.camelCase(n);
                return n = ut.cssProps[l] || (ut.cssProps[l] = C(e.style, l)), s = ut.cssHooks[n] || ut.cssHooks[l], s && "get" in s && (a = s.get(e, !0, i)), a === t && (a = hn(e, n, o)), "normal" === a && n in kn && (a = kn[n]), "" === i || i ? (r = parseFloat(a), i === !0 || ut.isNumeric(r) ? r || 0 : a) : a
            }
        }), e.getComputedStyle ? (pn = function(t) {
            return e.getComputedStyle(t, null)
        }, hn = function(e, n, i) {
            var o, r, a, s = i || pn(e),
                l = s ? s.getPropertyValue(n) || s[n] : t,
                c = e.style;
            return s && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, n)), wn.test(l) && vn.test(n) && (o = c.width, r = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = r, c.maxWidth = a)), l
        }) : K.documentElement.currentStyle && (pn = function(e) {
            return e.currentStyle
        }, hn = function(e, n, i) {
            var o, r, a, s = i || pn(e),
                l = s ? s[n] : t,
                c = e.style;
            return null == l && c && c[n] && (l = c[n]), wn.test(l) && !gn.test(n) && (o = c.left, r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, a && (r.left = a)), "" === l ? "auto" : l
        }), ut.each(["height", "width"], function(e, t) {
            ut.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Cn, function() {
                        return P(e, t, i)
                    }) : P(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o = i && pn(e);
                    return T(e, n, i ? S(e, t, i, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ut.support.opacity || (ut.cssHooks.opacity = {
            get: function(e, t) {
                return fn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(r.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = dn.test(r) ? r.replace(dn, o) : r + " " + o)
            }
        }), ut(function() {
            ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
                get: function(e, t) {
                    return t ? ut.swap(e, {
                        display: "inline-block"
                    }, hn, [e, "marginRight"]) : void 0
                }
            }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function(e, t) {
                ut.cssHooks[t] = {
                    get: function(e, n) {
                        return n ? (n = hn(e, t), wn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
                    }
                }
            })
        }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
        }, ut.expr.filters.visible = function(e) {
            return !ut.expr.filters.hidden(e)
        }), ut.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ut.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + $n[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, vn.test(e) || (ut.cssHooks[e + t].set = T)
        });
        var Sn = /%20/g,
            Pn = /\[\]$/,
            En = /\r?\n/g,
            Mn = /^(?:submit|button|image|reset|file)$/i,
            In = /^(?:input|select|textarea|keygen)/i;
        ut.fn.extend({
            serialize: function() {
                return ut.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ut.prop(this, "elements");
                    return e ? ut.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ut(this).is(":disabled") && In.test(this.nodeName) && !Mn.test(e) && (this.checked || !tn.test(e))
                }).map(function(e, t) {
                    var n = ut(this).val();
                    return null == n ? null : ut.isArray(n) ? ut.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(En, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(En, "\r\n")
                    }
                }).get()
            }
        }), ut.param = function(e, n) {
            var i, o = [],
                r = function(e, t) {
                    t = ut.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
                r(this.name, this.value)
            });
            else
                for (i in e) I(i, e[i], n, r);
            return o.join("&").replace(Sn, "+")
        }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ut.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ut.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
        var An, Dn, _n = ut.now(),
            Nn = /\?/,
            jn = /#.*$/,
            zn = /([?&])_=[^&]*/,
            Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Wn = /^(?:GET|HEAD)$/,
            Hn = /^\/\//,
            Fn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Bn = ut.fn.load,
            Rn = {},
            qn = {},
            Xn = "*/".concat("*");
        try {
            Dn = G.href
        } catch (Un) {
            Dn = K.createElement("a"), Dn.href = "", Dn = Dn.href
        }
        An = Fn.exec(Dn.toLowerCase()) || [], ut.fn.load = function(e, n, i) {
            if ("string" != typeof e && Bn) return Bn.apply(this, arguments);
            var o, r, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (o = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: n
            }).done(function(e) {
                r = arguments, s.html(o ? ut("<div>").append(ut.parseHTML(e)).find(o) : e)
            }).complete(i && function(e, t) {
                s.each(i, r || [e.responseText, t, e])
            }), this
        }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ut.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ut.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Dn,
                type: "GET",
                isLocal: On.test(An[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Xn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ut.parseJSON,
                    "text xml": ut.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? _(_(e, ut.ajaxSettings), t) : _(ut.ajaxSettings, e)
            },
            ajaxPrefilter: A(Rn),
            ajaxTransport: A(qn),
            ajax: function(e, n) {
                function i(e, n, i, o) {
                    var r, p, y, w, x, k = n;
                    2 !== b && (b = 2, l && clearTimeout(l), u = t, s = o || "", C.readyState = e > 0 ? 4 : 0, r = e >= 200 && 300 > e || 304 === e, i && (w = N(h, C, i)), w = j(h, w, C, r), r ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (ut.lastModified[a] = x), x = C.getResponseHeader("etag"), x && (ut.etag[a] = x)), 204 === e || "HEAD" === h.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = w.state, p = w.data, y = w.error, r = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || k) + "", r ? g.resolveWith(d, [p, k, C]) : g.rejectWith(d, [C, k, y]), C.statusCode(v), v = t, c && f.trigger(r ? "ajaxSuccess" : "ajaxError", [C, h, r ? p : y]), m.fireWith(d, [C, k]), c && (f.trigger("ajaxComplete", [C, h]), --ut.active || ut.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var o, r, a, s, l, c, u, p, h = ut.ajaxSetup({}, n),
                    d = h.context || h,
                    f = h.context && (d.nodeType || d.jquery) ? ut(d) : ut.event,
                    g = ut.Deferred(),
                    m = ut.Callbacks("once memory"),
                    v = h.statusCode || {},
                    y = {},
                    w = {},
                    b = 0,
                    x = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!p)
                                    for (p = {}; t = Ln.exec(s);) p[t[1].toLowerCase()] = t[2];
                                t = p[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? s : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = w[n] = w[n] || e, y[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (h.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else C.always(e[C.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || x;
                            return u && u.abort(t), i(0, t), this
                        }
                    };
                if (g.promise(C).complete = m.add, C.success = C.done, C.error = C.fail, h.url = ((e || h.url || Dn) + "").replace(jn, "").replace(Hn, An[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ut.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (o = Fn.exec(h.url.toLowerCase()), h.crossDomain = !(!o || o[1] === An[1] && o[2] === An[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (An[3] || ("http:" === An[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ut.param(h.data, h.traditional)), D(Rn, h, n, C), 2 === b) return C;
                c = h.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Wn.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (Nn.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = zn.test(a) ? a.replace(zn, "$1_=" + _n++) : a + (Nn.test(a) ? "&" : "?") + "_=" + _n++)), h.ifModified && (ut.lastModified[a] && C.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && C.setRequestHeader("If-None-Match", ut.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : h.accepts["*"]);
                for (r in h.headers) C.setRequestHeader(r, h.headers[r]);
                if (h.beforeSend && (h.beforeSend.call(d, C, h) === !1 || 2 === b)) return C.abort();
                x = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[r](h[r]);
                if (u = D(qn, h, n, C)) {
                    C.readyState = 1, c && f.trigger("ajaxSend", [C, h]), h.async && h.timeout > 0 && (l = setTimeout(function() {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        b = 1, u.send(y, i)
                    } catch (k) {
                        if (!(2 > b)) throw k;
                        i(-1, k)
                    }
                } else i(-1, "No Transport");
                return C
            },
            getJSON: function(e, t, n) {
                return ut.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ut.get(e, t, n, "script")
            }
        }), ut.each(["get", "post"], function(e, n) {
            ut[n] = function(e, i, o, r) {
                return ut.isFunction(i) && (r = r || o, o = i, i = t), ut.ajax({
                    url: e,
                    type: n,
                    dataType: r,
                    data: i,
                    success: o
                })
            }
        }), ut.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ut.globalEval(e), e
                }
            }
        }), ut.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), ut.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = K.head || ut("head")[0] || K.documentElement;
                return {
                    send: function(t, o) {
                        n = K.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(t, !0)
                    }
                }
            }
        });
        var Vn = [],
            Yn = /(=)\?(?=&|$)|\?\?/;
        ut.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Vn.pop() || ut.expando + "_" + _n++;
                return this[e] = !0, e
            }
        }), ut.ajaxPrefilter("json jsonp", function(n, i, o) {
            var r, a, s, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
            return l || "jsonp" === n.dataTypes[0] ? (r = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + r) : n.jsonp !== !1 && (n.url += (Nn.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
                return s || ut.error(r + " was not called"), s[0]
            }, n.dataTypes[0] = "json", a = e[r], e[r] = function() {
                s = arguments
            }, o.always(function() {
                e[r] = a, n[r] && (n.jsonpCallback = i.jsonpCallback, Vn.push(r)), s && ut.isFunction(a) && a(s[0]), s = a = t
            }), "script") : void 0
        });
        var Gn, Kn, Qn = 0,
            Zn = e.ActiveXObject && function() {
                var e;
                for (e in Gn) Gn[e](t, !0)
            };
        ut.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && z() || L()
        } : z, Kn = ut.ajaxSettings.xhr(), ut.support.cors = !!Kn && "withCredentials" in Kn, Kn = ut.support.ajax = !!Kn, Kn && ut.ajaxTransport(function(n) {
            if (!n.crossDomain || ut.support.cors) {
                var i;
                return {
                    send: function(o, r) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                            for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in o) l.setRequestHeader(s, o[s])
                        } catch (c) {}
                        l.send(n.hasContent && n.data || null), i = function(e, o) {
                            var s, c, u, p;
                            try {
                                if (i && (o || 4 === l.readyState))
                                    if (i = t, a && (l.onreadystatechange = ut.noop, Zn && delete Gn[a]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        p = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                        try {
                                            u = l.statusText
                                        } catch (h) {
                                            u = ""
                                        }
                                        s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                    }
                            } catch (d) {
                                o || r(-1, d)
                            }
                            p && r(s, u, p, c)
                        }, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Qn, Zn && (Gn || (Gn = {}, ut(e).unload(Zn)), Gn[a] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(t, !0)
                    }
                }
            }
        });
        var Jn, ei, ti = /^(?:toggle|show|hide)$/,
            ni = new RegExp("^(?:([+-])=|)(" + pt + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            oi = [B],
            ri = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = ni.exec(t),
                        r = o && o[3] || (ut.cssNumber[e] ? "" : "px"),
                        a = (ut.cssNumber[e] || "px" !== r && +i) && ni.exec(ut.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do s = s || ".5", a /= s, ut.style(n.elem, e, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ut.Animation = ut.extend(H, {
            tweener: function(e, t) {
                ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, o = e.length; o > i; i++) n = e[i], ri[n] = ri[n] || [], ri[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? oi.unshift(e) : oi.push(e)
            }
        }), ut.Tween = R, R.prototype = {
            constructor: R,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ut.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this
            }
        }, R.prototype.init.prototype = R.prototype, R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ut.each(["toggle", "show", "hide"], function(e, t) {
            var n = ut.fn[t];
            ut.fn[t] = function(e, i, o) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(q(t, !0), e, i, o)
            }
        }), ut.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(k).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var o = ut.isEmptyObject(e),
                    r = ut.speed(t, n, i),
                    a = function() {
                        var t = H(this, ut.extend({}, e), r);
                        (o || ut._data(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            },
            stop: function(e, n, i) {
                var o = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        r = ut.timers,
                        a = ut._data(this);
                    if (n) a[n] && a[n].stop && o(a[n]);
                    else
                        for (n in a) a[n] && a[n].stop && ii.test(n) && o(a[n]);
                    for (n = r.length; n--;) r[n].elem !== this || null != e && r[n].queue !== e || (r[n].anim.stop(i), t = !1, r.splice(n, 1));
                    (t || !i) && ut.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = ut._data(this),
                        i = n[e + "queue"],
                        o = n[e + "queueHooks"],
                        r = ut.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ut.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ut.each({
            slideDown: q("show"),
            slideUp: q("hide"),
            slideToggle: q("toggle"),
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
            ut.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ut.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ut.extend({}, e) : {
                complete: n || !n && t || ut.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ut.isFunction(t) && t
            };
            return i.duration = ut.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ut.fx.speeds ? ut.fx.speeds[i.duration] : ut.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ut.isFunction(i.old) && i.old.call(this), i.queue && ut.dequeue(this, i.queue)
            }, i
        }, ut.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, ut.timers = [], ut.fx = R.prototype.init, ut.fx.tick = function() {
            var e, n = ut.timers,
                i = 0;
            for (Jn = ut.now(); i < n.length; i++) e = n[i], e() || n[i] !== e || n.splice(i--, 1);
            n.length || ut.fx.stop(), Jn = t
        }, ut.fx.timer = function(e) {
            e() && ut.timers.push(e) && ut.fx.start()
        }, ut.fx.interval = 13, ut.fx.start = function() {
            ei || (ei = setInterval(ut.fx.tick, ut.fx.interval))
        }, ut.fx.stop = function() {
            clearInterval(ei), ei = null
        }, ut.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
            return ut.grep(ut.timers, function(t) {
                return e === t.elem
            }).length
        }), ut.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                ut.offset.setOffset(this, e, t)
            });
            var n, i, o = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                a = r && r.ownerDocument;
            if (a) return n = a.documentElement, ut.contains(n, r) ? (typeof r.getBoundingClientRect !== Y && (o = r.getBoundingClientRect()), i = X(a), {
                top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }, ut.offset = {
            setOffset: function(e, t, n) {
                var i = ut.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var o, r, a = ut(e),
                    s = a.offset(),
                    l = ut.css(e, "top"),
                    c = ut.css(e, "left"),
                    u = ("absolute" === i || "fixed" === i) && ut.inArray("auto", [l, c]) > -1,
                    p = {},
                    h = {};
                u ? (h = a.position(), o = h.top, r = h.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : a.css(p)
            }
        }, ut.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === ut.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ut.css(i, "marginTop", !0),
                        left: t.left - n.left - ut.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || Q; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                    return e || Q
                })
            }
        }), ut.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            ut.fn[e] = function(o) {
                return ut.access(this, function(e, o, r) {
                    var a = X(e);
                    return r === t ? a ? n in a ? a[n] : a.document.documentElement[o] : e[o] : (a ? a.scrollTo(i ? ut(a).scrollLeft() : r, i ? r : ut(a).scrollTop()) : e[o] = r, void 0)
                }, e, o, arguments.length, null)
            }
        }), ut.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            ut.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, o) {
                ut.fn[o] = function(o, r) {
                    var a = arguments.length && (i || "boolean" != typeof o),
                        s = i || (o === !0 || r === !0 ? "margin" : "border");
                    return ut.access(this, function(n, i, o) {
                        var r;
                        return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + e], r["scroll" + e], n.body["offset" + e], r["offset" + e], r["client" + e])) : o === t ? ut.css(n, i, s) : ut.style(n, i, o, s)
                    }, n, a ? o : t, a, null)
                }
            })
        }), ut.fn.size = function() {
            return this.length
        }, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut : (e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ut
        }))
    }(window), + function(e) {
        "use strict";

        function t() {
            var e = document.createElement("bootstrap"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in t)
                if (void 0 !== e.style[n]) return {
                    end: t[n]
                }
        }
        e.fn.emulateTransitionEnd = function(t) {
            var n = !1,
                i = this;
            e(this).one(e.support.transition.end, function() {
                n = !0
            });
            var o = function() {
                n || e(i).trigger(e.support.transition.end)
            };
            return setTimeout(o, t), this
        }, e(function() {
            e.support.transition = t()
        })
    }(window.jQuery), + function(e) {
        "use strict";
        var t = '[data-dismiss="alert"]',
            n = function(n) {
                e(n).on("click", t, this.close)
            };
        n.prototype.close = function(t) {
            function n() {
                r.trigger("closed.bs.alert").remove()
            }
            var i = e(this),
                o = i.attr("data-target");
            o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
            var r = e(o);
            t && t.preventDefault(), r.length || (r = i.hasClass("alert") ? i : i.parent()), r.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
        };
        var i = e.fn.alert;
        e.fn.alert = function(t) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.alert");
                o || i.data("bs.alert", o = new n(this)), "string" == typeof t && o[t].call(i)
            })
        }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
            return e.fn.alert = i, this
        }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
    }(window.jQuery), + function(e) {
        "use strict";
        var t = function(n, i) {
            this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i)
        };
        t.DEFAULTS = {
            loadingText: "loading..."
        }, t.prototype.setState = function(e) {
            var t = "disabled",
                n = this.$element,
                i = n.is("input") ? "val" : "html",
                o = n.data();
            e += "Text", o.resetText || n.data("resetText", n[i]()), n[i](o[e] || this.options[e]), setTimeout(function() {
                "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
            }, 0)
        }, t.prototype.toggle = function() {
            var e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
                "radio" === t.prop("type") && e.find(".active").removeClass("active")
            }
            this.$element.toggleClass("active")
        };
        var n = e.fn.button;
        e.fn.button = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.button"),
                    r = "object" == typeof n && n;
                o || i.data("bs.button", o = new t(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n)
            })
        }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
            return e.fn.button = n, this
        }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
            var n = e(t.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
        })
    }(window.jQuery), + function(e) {
        "use strict";
        var t = function(n, i) {
            this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
        };
        t.DEFAULTS = {
            toggle: !0
        }, t.prototype.dimension = function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        }, t.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var t = e.Event("show.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var i = n.data("bs.collapse");
                        if (i && i.transitioning) return;
                        n.collapse("hide"), i || n.data("bs.collapse", null)
                    }
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("in")[o]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return r.call(this);
                    var a = e.camelCase(["scroll", o].join("-"));
                    this.$element.one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350)[o](this.$element[0][a])
                }
            }
        }, t.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var t = e.Event("hide.bs.collapse");
                if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function() {
                        this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                    };
                    return e.support.transition ? (this.$element[n](0).one(e.support.transition.end, e.proxy(i, this)).emulateTransitionEnd(350), void 0) : i.call(this)
                }
            }
        }, t.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = e.fn.collapse;
        e.fn.collapse = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.collapse"),
                    r = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
                o || i.data("bs.collapse", o = new t(this, r)), "string" == typeof n && o[n]()
            })
        }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
            return e.fn.collapse = n, this
        }, e(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
            var n, i = e(this),
                o = i.attr("data-target") || t.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                r = e(o),
                a = r.data("bs.collapse"),
                s = a ? "toggle" : i.data(),
                l = i.attr("data-parent"),
                c = l && e(l);
            a && a.transitioning || (c && c.find('[data-toggle=collapse][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(s)
        })
    }(window.jQuery), + function(e) {
        "use strict";

        function t() {
            e(i).remove(), e(o).each(function(t) {
                var i = n(e(this));
                i.hasClass("open") && (i.trigger(t = e.Event("hide.bs.dropdown")), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"))
            })
        }

        function n(t) {
            var n = t.attr("data-target");
            n || (n = t.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && e(n);
            return i && i.length ? i : t.parent()
        }
        var i = ".dropdown-backdrop",
            o = "[data-toggle=dropdown]",
            r = function(t) {
                e(t).on("click.bs.dropdown", this.toggle)
            };
        r.prototype.toggle = function(i) {
            var o = e(this);
            if (!o.is(".disabled, :disabled")) {
                var r = n(o),
                    a = r.hasClass("open");
                if (t(), !a) {
                    if ("ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t), r.trigger(i = e.Event("show.bs.dropdown")), i.isDefaultPrevented()) return;
                    r.toggleClass("open").trigger("shown.bs.dropdown"), o.focus()
                }
                return !1
            }
        }, r.prototype.keydown = function(t) {
            if (/(38|40|27)/.test(t.keyCode)) {
                var i = e(this);
                if (t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var r = n(i),
                        a = r.hasClass("open");
                    if (!a || a && 27 == t.keyCode) return 27 == t.which && r.find(o).focus(), i.click();
                    var s = e("[role=menu] li:not(.divider):visible a", r);
                    if (s.length) {
                        var l = s.index(s.filter(":focus"));
                        38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).focus()
                    }
                }
            }
        };
        var a = e.fn.dropdown;
        e.fn.dropdown = function(t) {
            return this.each(function() {
                var n = e(this),
                    i = n.data("dropdown");
                i || n.data("dropdown", i = new r(this)), "string" == typeof t && i[t].call(n)
            })
        }, e.fn.dropdown.Constructor = r, e.fn.dropdown.noConflict = function() {
            return e.fn.dropdown = a, this
        }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
            e.stopPropagation()
        }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ", [role=menu]", r.prototype.keydown)
    }(window.jQuery), + function(e) {
        "use strict";

        function t(n, i) {
            var o, r = e.proxy(this.process, this);
            this.$element = e(n).is("body") ? e(window) : e(n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", r), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || (o = e(n).attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
        }
        t.DEFAULTS = {
            offset: 10
        }, t.prototype.refresh = function() {
            var t = this.$element[0] == window ? "offset" : "position";
            this.offsets = e([]), this.targets = e([]);
            var n = this;
            this.$body.find(this.selector).map(function() {
                var i = e(this),
                    o = i.data("target") || i.attr("href"),
                    r = /^#\w/.test(o) && e(o);
                return r && r.length && [
                    [r[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), o]
                ] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        }, t.prototype.process = function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset,
                n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                i = n - this.$scrollElement.height(),
                o = this.offsets,
                r = this.targets,
                a = this.activeTarget;
            if (t >= i) return a != (e = r.last()[0]) && this.activate(e);
            for (e = o.length; e--;) a != r[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(r[e])
        }, t.prototype.activate = function(t) {
            this.activeTarget = t, e(this.selector).parents(".active").removeClass("active");
            var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
                i = e(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
        };
        var n = e.fn.scrollspy;
        e.fn.scrollspy = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.scrollspy"),
                    r = "object" == typeof n && n;
                o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
            })
        }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
            return e.fn.scrollspy = n, this
        }, e(window).on("load", function() {
            e('[data-spy="scroll"]').each(function() {
                var t = e(this);
                t.scrollspy(t.data())
            })
        })
    }(window.jQuery), + function(e) {
        "use strict";
        var t = function(n, i) {
            this.options = e.extend({}, t.DEFAULTS, i), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = null, this.checkPosition()
        };
        t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
            offset: 0
        }, t.prototype.checkPositionWithEventLoop = function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, t.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var n = e(document).height(),
                    i = this.$window.scrollTop(),
                    o = this.$element.offset(),
                    r = this.options.offset,
                    a = r.top,
                    s = r.bottom;
                "object" != typeof r && (s = a = r), "function" == typeof a && (a = r.top()), "function" == typeof s && (s = r.bottom());
                var l = null != this.unpin && i + this.unpin <= o.top ? !1 : null != s && o.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= i ? "top" : !1;
                this.affixed !== l && (this.unpin && this.$element.css("top", ""), this.affixed = l, this.unpin = "bottom" == l ? o.top - i : null, this.$element.removeClass(t.RESET).addClass("affix" + (l ? "-" + l : "")), "bottom" == l && this.$element.offset({
                    top: document.body.offsetHeight - s - this.$element.height()
                }))
            }
        };
        var n = e.fn.affix;
        e.fn.affix = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("bs.affix"),
                    r = "object" == typeof n && n;
                o || i.data("bs.affix", o = new t(this, r)), "string" == typeof n && o[n]()
            })
        }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
            return e.fn.affix = n, this
        }, e(window).on("load", function() {
            e('[data-spy="affix"]').each(function() {
                var t = e(this),
                    n = t.data();
                n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
            })
        })
    }(window.jQuery), "function" != typeof Object.create && (Object.create = function(e) {
            function t() {}
            return t.prototype = e, new t
        }),
        function(e, t, n, i) {
            var o = {
                init: function(t, n) {
                    var i = this;
                    i.options = e.extend({}, e.fn.owlCarousel.options, t), i.userOptions = t;
                    var o = e(n);
                    i.$elem = o, i.loadContent()
                },
                loadContent: function() {
                    function t(e) {
                        if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [e]);
                        else {
                            var t = "";
                            for (var i in e.owl) t += e.owl[i].item;
                            n.$elem.html(t)
                        }
                        n.logIn()
                    }
                    var n = this;
                    if ("function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath) {
                        var i = n.options.jsonPath;
                        e.getJSON(i, t)
                    } else n.logIn()
                },
                logIn: function() {
                    var e = this;
                    e.$elem.css({
                        opacity: 0
                    }), e.orignalItems = e.options.items, e.checkBrowser(), e.wrapperWidth = 0, e.checkVisible, e.setVars()
                },
                setVars: function() {
                    var e = this;
                    return 0 === e.$elem.children().length ? !1 : (e.baseClass(), e.eventTypes(), e.$userItems = e.$elem.children(), e.itemsAmount = e.$userItems.length, e.wrapItems(), e.$owlItems = e.$elem.find(".owl-item"), e.$owlWrapper = e.$elem.find(".owl-wrapper"), e.playDirection = "next", e.prevItem = 0, e.currentItem = 0, e.customEvents(), e.onStartup(), void 0)
                },
                onStartup: function() {
                    var e = this;
                    e.updateItems(), e.calculateAll(), e.buildControls(), e.updateControls(), e.response(), e.moveEvents(), e.stopOnHover(), e.owlStatus(), e.options.transitionStyle !== !1 && e.transitionTypes(e.options.transitionStyle), e.options.autoPlay === !0 && (e.options.autoPlay = 5e3), e.play(), e.$elem.find(".owl-wrapper").css("display", "block"), e.$elem.is(":visible") ? e.$elem.css("opacity", 1) : e.watchVisibility(), e.onstartup = !1, e.eachMoveUpdate(), "function" == typeof e.options.afterInit && e.options.afterInit.apply(this, [e.$elem])
                },
                eachMoveUpdate: function() {
                    var e = this;
                    e.options.lazyLoad === !0 && e.lazyLoad(), e.options.autoHeight === !0 && e.autoHeight(), e.options.addClassActive === !0 && e.addClassActive(), "function" == typeof e.options.afterAction && e.options.afterAction.apply(this, [e.$elem])
                },
                updateVars: function() {
                    var e = this;
                    "function" == typeof e.options.beforeUpdate && e.options.beforeUpdate.apply(this, [e.$elem]), e.watchVisibility(), e.updateItems(), e.calculateAll(), e.updatePosition(), e.updateControls(), e.eachMoveUpdate(), "function" == typeof e.options.afterUpdate && e.options.afterUpdate.apply(this, [e.$elem])
                },
                reload: function() {
                    var e = this;
                    setTimeout(function() {
                        e.updateVars()
                    }, 0)
                },
                watchVisibility: function() {
                    var e = this;
                    return e.$elem.is(":visible") !== !1 ? !1 : (e.$elem.css({
                        opacity: 0
                    }), clearInterval(e.autoPlayInterval), clearInterval(e.checkVisible), e.checkVisible = setInterval(function() {
                        e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                            opacity: 1
                        }, 200), clearInterval(e.checkVisible))
                    }, 500), void 0)
                },
                wrapItems: function() {
                    var e = this;
                    e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), e.wrapperOuter = e.$elem.find(".owl-wrapper-outer"), e.$elem.css("display", "block")
                },
                baseClass: function() {
                    var e = this,
                        t = e.$elem.hasClass(e.options.baseClass),
                        n = e.$elem.hasClass(e.options.theme);
                    e.$elem.data("owl-originalStyles", e.$elem.attr("style")).data("owl-originalClasses", e.$elem.attr("class")), t || e.$elem.addClass(e.options.baseClass), n || e.$elem.addClass(e.options.theme)
                },
                updateItems: function() {
                    var t = this;
                    if (t.options.responsive === !1) return !1;
                    if (t.options.singleItem === !0) return t.options.items = t.orignalItems = 1, t.options.itemsDesktop = !1, t.options.itemsDesktopSmall = !1, t.options.itemsTablet = !1, t.options.itemsTabletSmall = !1, t.options.itemsMobile = !1, !1;
                    var n = e(t.options.responsiveBaseWidth).width();
                    n > (t.options.itemsDesktop[0] || t.orignalItems) && (t.options.items = t.orignalItems), n <= t.options.itemsDesktop[0] && t.options.itemsDesktop !== !1 && (t.options.items = t.options.itemsDesktop[1]), n <= t.options.itemsDesktopSmall[0] && t.options.itemsDesktopSmall !== !1 && (t.options.items = t.options.itemsDesktopSmall[1]), n <= t.options.itemsTablet[0] && t.options.itemsTablet !== !1 && (t.options.items = t.options.itemsTablet[1]), n <= t.options.itemsTabletSmall[0] && t.options.itemsTabletSmall !== !1 && (t.options.items = t.options.itemsTabletSmall[1]), n <= t.options.itemsMobile[0] && t.options.itemsMobile !== !1 && (t.options.items = t.options.itemsMobile[1]), t.options.items > t.itemsAmount && (t.options.items = t.itemsAmount)
                },
                response: function() {
                    var n, i = this;
                    if (i.options.responsive !== !0) return !1;
                    var o = e(t).width();
                    i.resizer = function() {
                        e(t).width() !== o && (i.options.autoPlay !== !1 && clearInterval(i.autoPlayInterval), clearTimeout(n), n = setTimeout(function() {
                            o = e(t).width(), i.updateVars()
                        }, i.options.responsiveRefreshRate))
                    }, e(t).resize(i.resizer)
                },
                updatePosition: function() {
                    var e = this;
                    e.browser.support3d === !0 ? e.positionsInArray[e.currentItem] > e.maximumPixels ? e.transition3d(e.positionsInArray[e.currentItem]) : (e.transition3d(0), e.currentItem = 0) : e.positionsInArray[e.currentItem] > e.maximumPixels ? e.css2slide(e.positionsInArray[e.currentItem]) : (e.css2slide(0), e.currentItem = 0), e.options.autoPlay !== !1 && e.checkAp()
                },
                appendItemsSizes: function() {
                    var t = this,
                        n = 0,
                        i = t.itemsAmount - t.options.items;
                    t.$owlItems.each(function(o) {
                        var r = e(this);
                        r.css({
                            width: t.itemWidth
                        }).data("owl-item", Number(o)), (0 === o % t.options.items || o === i) && (o > i || (n += 1)), r.data("owl-roundPages", n).data("owl-originalStyles", r.attr("style"))
                    })
                },
                appendWrapperSizes: function() {
                    var e = this,
                        t = 0,
                        t = e.$owlItems.length * e.itemWidth;
                    e.$owlWrapper.css({
                        width: 2 * t,
                        left: 0
                    }), e.appendItemsSizes()
                },
                calculateAll: function() {
                    var e = this;
                    e.calculateWidth(), e.appendWrapperSizes(), e.loops(), e.max()
                },
                calculateWidth: function() {
                    var e = this;
                    e.itemWidth = Math.round(e.$elem.width() / e.options.items)
                },
                max: function() {
                    var e = this;
                    e.maximumItem = e.itemsAmount - e.options.items;
                    var t = e.itemsAmount * e.itemWidth - e.options.items * e.itemWidth;
                    return t = -1 * t, e.maximumPixels = t, t
                },
                min: function() {
                    return 0
                },
                loops: function() {
                    var e = this;
                    e.positionsInArray = [0];
                    for (var t = 0, n = 0; n < e.itemsAmount; n++) t += e.itemWidth, e.positionsInArray.push(-t)
                },
                buildControls: function() {
                    var t = this;
                    (t.options.navigation === !0 || t.options.pagination === !0) && (t.owlControls = e('<div class="owl-controls"/>').toggleClass("clickable", !t.browser.isTouch).appendTo(t.$elem)), t.options.pagination === !0 && t.buildPagination(), t.options.navigation === !0 && t.buildButtons()
                },
                buildButtons: function() {
                    var t = this,
                        n = e('<div class="owl-buttons"/>');
                    t.owlControls.append(n), t.buttonPrev = e("<div/>", {
                        "class": "owl-prev",
                        html: t.options.navigationText[0] || ""
                    }), t.buttonNext = e("<div/>", {
                        "class": "owl-next",
                        html: t.options.navigationText[1] || ""
                    }), n.append(t.buttonPrev).append(t.buttonNext), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                        n.preventDefault(), e(this).hasClass("owl-next") ? t.next() : t.prev()
                    })
                },
                buildPagination: function() {
                    var t = this;
                    t.paginationWrapper = e('<div class="owl-pagination"/>'), t.owlControls.append(t.paginationWrapper), t.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                        n.preventDefault(), Number(e(this).data("owl-page")) !== t.currentItem && t.goTo(Number(e(this).data("owl-page")), !0)
                    })
                },
                updatePagination: function() {
                    var t = this;
                    if (t.options.pagination === !1) return !1;
                    t.paginationWrapper.html("");
                    for (var n = 0, i = t.itemsAmount - t.itemsAmount % t.options.items, o = 0; o < t.itemsAmount; o++)
                        if (0 === o % t.options.items) {
                            if (n += 1, i === o) var r = t.itemsAmount - t.options.items;
                            var a = e("<div/>", {
                                    "class": "owl-page"
                                }),
                                s = e("<span></span>", {
                                    text: t.options.paginationNumbers === !0 ? n : "",
                                    "class": t.options.paginationNumbers === !0 ? "owl-numbers" : ""
                                });
                            a.append(s), a.data("owl-page", i === o ? r : o), a.data("owl-roundPages", n), t.paginationWrapper.append(a)
                        } t.checkPagination()
                },
                checkPagination: function() {
                    var t = this;
                    return t.options.pagination === !1 ? !1 : (t.paginationWrapper.find(".owl-page").each(function() {
                        e(this).data("owl-roundPages") === e(t.$owlItems[t.currentItem]).data("owl-roundPages") && (t.paginationWrapper.find(".owl-page").removeClass("active"), e(this).addClass("active"))
                    }), void 0)
                },
                checkNavigation: function() {
                    var e = this;
                    return e.options.navigation === !1 ? !1 : (e.options.rewindNav === !1 && (0 === e.currentItem && 0 === e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.addClass("disabled")) : 0 === e.currentItem && 0 !== e.maximumItem ? (e.buttonPrev.addClass("disabled"), e.buttonNext.removeClass("disabled")) : e.currentItem === e.maximumItem ? (e.buttonPrev.removeClass("disabled"), e.buttonNext.addClass("disabled")) : 0 !== e.currentItem && e.currentItem !== e.maximumItem && (e.buttonPrev.removeClass("disabled"), e.buttonNext.removeClass("disabled"))), void 0)
                },
                updateControls: function() {
                    var e = this;
                    e.updatePagination(), e.checkNavigation(), e.owlControls && (e.options.items === e.itemsAmount ? e.owlControls.hide() : e.owlControls.show())
                },
                destroyControls: function() {
                    var e = this;
                    e.owlControls && e.owlControls.remove()
                },
                next: function(e) {
                    var t = this;
                    if (t.isTransition) return !1;
                    if (t.storePrevItem = t.currentItem, t.currentItem += t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem > t.maximumItem + (1 == t.options.scrollPerPage ? t.options.items - 1 : 0)) {
                        if (t.options.rewindNav !== !0) return t.currentItem = t.maximumItem, !1;
                        t.currentItem = 0, e = "rewind"
                    }
                    t.goTo(t.currentItem, e)
                },
                prev: function(e) {
                    var t = this;
                    if (t.isTransition) return !1;
                    if (t.storePrevItem = t.currentItem, t.options.scrollPerPage === !0 && t.currentItem > 0 && t.currentItem < t.options.items ? t.currentItem = 0 : t.currentItem -= t.options.scrollPerPage === !0 ? t.options.items : 1, t.currentItem < 0) {
                        if (t.options.rewindNav !== !0) return t.currentItem = 0, !1;
                        t.currentItem = t.maximumItem, e = "rewind"
                    }
                    t.goTo(t.currentItem, e)
                },
                goTo: function(e, t, n) {
                    var i = this;
                    if (i.isTransition) return !1;
                    if (i.getPrevItem(), "function" == typeof i.options.beforeMove && i.options.beforeMove.apply(this, [i.$elem]), e >= i.maximumItem ? e = i.maximumItem : 0 >= e && (e = 0), i.currentItem = i.owl.currentItem = e, i.options.transitionStyle !== !1 && "drag" !== n && 1 === i.options.items && i.browser.support3d === !0) return i.swapSpeed(0), i.browser.support3d === !0 ? i.transition3d(i.positionsInArray[e]) : i.css2slide(i.positionsInArray[e], 1), i.singleItemTransition(), i.afterGo(), !1;
                    var o = i.positionsInArray[e];
                    i.browser.support3d === !0 ? (i.isCss3Finish = !1, t === !0 ? (i.swapSpeed("paginationSpeed"), setTimeout(function() {
                        i.isCss3Finish = !0
                    }, i.options.paginationSpeed)) : "rewind" === t ? (i.swapSpeed(i.options.rewindSpeed), setTimeout(function() {
                        i.isCss3Finish = !0
                    }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), setTimeout(function() {
                        i.isCss3Finish = !0
                    }, i.options.slideSpeed)), i.transition3d(o)) : t === !0 ? i.css2slide(o, i.options.paginationSpeed) : "rewind" === t ? i.css2slide(o, i.options.rewindSpeed) : i.css2slide(o, i.options.slideSpeed), i.afterGo()
                },
                getPrevItem: function() {
                    var e = this;
                    e.prevItem = e.owl.prevItem = e.storePrevItem === i ? e.currentItem : e.storePrevItem, e.storePrevItem = i
                },
                jumpTo: function(e) {
                    var t = this;
                    t.getPrevItem(), "function" == typeof t.options.beforeMove && t.options.beforeMove.apply(this, [t.$elem]), e >= t.maximumItem || -1 === e ? e = t.maximumItem : 0 >= e && (e = 0), t.swapSpeed(0), t.browser.support3d === !0 ? t.transition3d(t.positionsInArray[e]) : t.css2slide(t.positionsInArray[e], 1), t.currentItem = t.owl.currentItem = e, t.afterGo()
                },
                afterGo: function() {
                    var e = this;
                    e.checkPagination(), e.checkNavigation(), e.eachMoveUpdate(), "function" == typeof e.options.afterMove && e.options.afterMove.apply(this, [e.$elem]), e.options.autoPlay !== !1 && e.checkAp()
                },
                stop: function() {
                    var e = this;
                    e.apStatus = "stop", clearInterval(e.autoPlayInterval)
                },
                checkAp: function() {
                    var e = this;
                    "stop" !== e.apStatus && e.play()
                },
                play: function() {
                    var e = this;
                    return e.apStatus = "play", e.options.autoPlay === !1 ? !1 : (clearInterval(e.autoPlayInterval), e.autoPlayInterval = setInterval(function() {
                        e.next(!0)
                    }, e.options.autoPlay), void 0)
                },
                swapSpeed: function(e) {
                    var t = this;
                    "slideSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)) : "paginationSpeed" === e ? t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)) : "string" != typeof e && t.$owlWrapper.css(t.addCssSpeed(e))
                },
                addCssSpeed: function(e) {
                    return {
                        "-webkit-transition": "all " + e + "ms ease",
                        "-moz-transition": "all " + e + "ms ease",
                        "-o-transition": "all " + e + "ms ease",
                        transition: "all " + e + "ms ease"
                    }
                },
                removeTransition: function() {
                    return {
                        "-webkit-transition": "",
                        "-moz-transition": "",
                        "-o-transition": "",
                        transition: ""
                    }
                },
                doTranslate: function(e) {
                    return {
                        "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                        "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                        "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                        "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                        transform: "translate3d(" + e + "px, 0px,0px)"
                    }
                },
                transition3d: function(e) {
                    var t = this;
                    t.$owlWrapper.css(t.doTranslate(e))
                },
                css2move: function(e) {
                    var t = this;
                    t.$owlWrapper.css({
                        left: e
                    })
                },
                css2slide: function(e, t) {
                    var n = this;
                    n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
                        left: e
                    }, {
                        duration: t || n.options.slideSpeed,
                        complete: function() {
                            n.isCssFinish = !0
                        }
                    })
                },
                checkBrowser: function() {
                    var e = this,
                        i = "translate3d(0px, 0px, 0px)",
                        o = n.createElement("div");
                    o.style.cssText = "  -moz-transform:" + i + "; -ms-transform:" + i + "; -o-transform:" + i + "; -webkit-transform:" + i + "; transform:" + i;
                    var r = /translate3d\(0px, 0px, 0px\)/g,
                        a = o.style.cssText.match(r),
                        s = null !== a && 1 === a.length,
                        l = "ontouchstart" in t || navigator.msMaxTouchPoints;
                    e.browser = {
                        support3d: s,
                        isTouch: l
                    }
                },
                moveEvents: function() {
                    var e = this;
                    (e.options.mouseDrag !== !1 || e.options.touchDrag !== !1) && (e.gestures(), e.disabledEvents())
                },
                eventTypes: function() {
                    var e = this,
                        t = ["s", "e", "x"];
                    e.ev_types = {}, e.options.mouseDrag === !0 && e.options.touchDrag === !0 ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : e.options.mouseDrag === !1 && e.options.touchDrag === !0 ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : e.options.mouseDrag === !0 && e.options.touchDrag === !1 && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), e.ev_types.start = t[0], e.ev_types.move = t[1], e.ev_types.end = t[2]
                },
                disabledEvents: function() {
                    var t = this;
                    t.$elem.on("dragstart.owl", function(e) {
                        e.preventDefault()
                    }), t.$elem.on("mousedown.disableTextSelect", function(t) {
                        return e(t.target).is("input, textarea, select, option")
                    })
                },
                gestures: function() {
                    function o(e) {
                        return e.touches ? {
                            x: e.touches[0].pageX,
                            y: e.touches[0].pageY
                        } : e.pageX !== i ? {
                            x: e.pageX,
                            y: e.pageY
                        } : {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }

                    function r(t) {
                        "on" === t ? (e(n).on(c.ev_types.move, s), e(n).on(c.ev_types.end, l)) : "off" === t && (e(n).off(c.ev_types.move), e(n).off(c.ev_types.end))
                    }

                    function a(n) {
                        var n = n.originalEvent || n || t.event;
                        if (c.isCssFinish === !1 && !c.options.dragBeforeAnimFinish) return !1;
                        if (c.isCss3Finish === !1 && !c.options.dragBeforeAnimFinish) return !1;
                        c.options.autoPlay !== !1 && clearInterval(c.autoPlayInterval), c.browser.isTouch === !0 || c.$owlWrapper.hasClass("grabbing") || c.$owlWrapper.addClass("grabbing"), c.newPosX = 0, c.newRelativeX = 0, e(this).css(c.removeTransition());
                        var i = e(this).position();
                        u.relativePos = i.left, u.offsetX = o(n).x - i.left, u.offsetY = o(n).y - i.top, r("on"), u.sliding = !1, u.targetElement = n.target || n.srcElement
                    }

                    function s(i) {
                        var i = i.originalEvent || i || t.event;
                        c.newPosX = o(i).x - u.offsetX, c.newPosY = o(i).y - u.offsetY, c.newRelativeX = c.newPosX - u.relativePos, "function" == typeof c.options.startDragging && u.dragging !== !0 && 0 !== c.newRelativeX && (u.dragging = !0, c.options.startDragging.apply(this)), (c.newRelativeX > 8 || c.newRelativeX < -8 && c.browser.isTouch === !0) && (i.preventDefault ? i.preventDefault() : i.returnValue = !1, u.sliding = !0), (c.newPosY > 10 || c.newPosY < -10) && u.sliding === !1 && e(n).off("touchmove.owl");
                        var r = function() {
                                return c.newRelativeX / 5
                            },
                            a = function() {
                                return c.maximumPixels + c.newRelativeX / 5
                            };
                        c.newPosX = Math.max(Math.min(c.newPosX, r()), a()), c.browser.support3d === !0 ? c.transition3d(c.newPosX) : c.css2move(c.newPosX)
                    }

                    function l(n) {
                        var n = n.originalEvent || n || t.event;
                        if (n.target = n.target || n.srcElement, u.dragging = !1, c.browser.isTouch !== !0 && c.$owlWrapper.removeClass("grabbing"), 0 !== c.newRelativeX) {
                            var i = c.getNewPosition();
                            if (c.goTo(i, !1, "drag"), u.targetElement === n.target && c.browser.isTouch !== !0) {
                                e(n.target).on("click.disable", function(t) {
                                    t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault(), e(n.target).off("click.disable")
                                });
                                var o = e._data(n.target, "events").click,
                                    a = o.pop();
                                o.splice(0, 0, a)
                            }
                        }
                        r("off")
                    }
                    var c = this,
                        u = {
                            offsetX: 0,
                            offsetY: 0,
                            baseElWidth: 0,
                            relativePos: 0,
                            position: null,
                            minSwipe: null,
                            maxSwipe: null,
                            sliding: null,
                            dargging: null,
                            targetElement: null
                        };
                    c.isCssFinish = !0, c.$elem.on(c.ev_types.start, ".owl-wrapper", a)
                },
                getNewPosition: function() {
                    var e, t = this,
                        e = t.improveClosest();
                    return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
                },
                improveClosest: function() {
                    var t = this,
                        n = t.positionsInArray,
                        i = t.newPosX,
                        o = null;
                    return e.each(n, function(e, r) {
                        i - t.itemWidth / 20 > n[e + 1] && i - t.itemWidth / 20 < r && "left" === t.moveDirection() ? (o = r, t.currentItem = e) : i + t.itemWidth / 20 < r && i + t.itemWidth / 20 > n[e + 1] && "right" === t.moveDirection() && (o = n[e + 1], t.currentItem = e + 1)
                    }), t.currentItem
                },
                moveDirection: function() {
                    var e, t = this;
                    return t.newRelativeX < 0 ? (e = "right", t.playDirection = "next") : (e = "left", t.playDirection = "prev"), e
                },
                customEvents: function() {
                    var e = this;
                    e.$elem.on("owl.next", function() {
                        e.next()
                    }), e.$elem.on("owl.prev", function() {
                        e.prev()
                    }), e.$elem.on("owl.play", function(t, n) {
                        e.options.autoPlay = n, e.play(), e.hoverStatus = "play"
                    }), e.$elem.on("owl.stop", function() {
                        e.stop(), e.hoverStatus = "stop"
                    }), e.$elem.on("owl.goTo", function(t, n) {
                        e.goTo(n)
                    }), e.$elem.on("owl.jumpTo", function(t, n) {
                        e.jumpTo(n)
                    })
                },
                stopOnHover: function() {
                    var e = this;
                    e.options.stopOnHover === !0 && e.browser.isTouch !== !0 && e.options.autoPlay !== !1 && (e.$elem.on("mouseover", function() {
                        e.stop()
                    }), e.$elem.on("mouseout", function() {
                        "stop" !== e.hoverStatus && e.play()
                    }))
                },
                lazyLoad: function() {
                    var t = this;
                    if (t.options.lazyLoad === !1) return !1;
                    for (var n = 0; n < t.itemsAmount; n++) {
                        var o = e(t.$owlItems[n]);
                        if ("loaded" !== o.data("owl-loaded")) {
                            var r, a = o.data("owl-item"),
                                s = o.find(".lazyOwl");
                            o.data("owl-loaded") === i && (s.hide(), o.addClass("loading").data("owl-loaded", "checked")), r = t.options.lazyFollow === !0 ? a >= t.currentItem : !0, r && a < t.currentItem + t.options.items && t.lazyPreload(o, s)
                        }
                    }
                },
                lazyPreload: function(e, t) {
                    function n() {
                        o += 1, i.completeImg(t.get(0)) ? (e.data("owl-loaded", "loaded").removeClass("loading"), t.removeAttr("data-src").fadeIn(400)) : 100 >= o ? setTimeout(n, 100) : t.fadeIn(400)
                    }
                    var i = this,
                        o = 0;
                    t[0].src = t.data("src"), n()
                },
                autoHeight: function() {
                    function t() {
                        a += 1, o.completeImg(r.get(0)) ? n() : 100 >= a ? setTimeout(t, 100) : o.wrapperOuter.css("height", "")
                    }

                    function n() {
                        var t = e(o.$owlItems[o.currentItem]).height();
                        o.wrapperOuter.css("height", t + "px"), o.wrapperOuter.hasClass("autoHeight") || setTimeout(function() {
                            o.wrapperOuter.addClass("autoHeight")
                        }, 0)
                    }
                    var o = this,
                        r = e(o.$owlItems[o.currentItem]).find("img");
                    if (r.get(0) !== i) {
                        var a = 0;
                        t()
                    } else n()
                },
                completeImg: function(e) {
                    return e.complete ? "undefined" != typeof e.naturalWidth && 0 == e.naturalWidth ? !1 : !0 : !1
                },
                addClassActive: function() {
                    var t = this;
                    t.$owlItems.removeClass("active");
                    for (var n = t.currentItem; n < t.currentItem + t.options.items; n++) e(t.$owlItems[n]).addClass("active")
                },
                transitionTypes: function(e) {
                    var t = this;
                    t.outClass = "owl-" + e + "-out", t.inClass = "owl-" + e + "-in"
                },
                singleItemTransition: function() {
                    function e(e) {
                        return {
                            position: "relative",
                            left: e + "px"
                        }
                    }
                    var t = this;
                    t.isTransition = !0;
                    var n = t.outClass,
                        i = t.inClass,
                        o = t.$owlItems.eq(t.currentItem),
                        r = t.$owlItems.eq(t.prevItem),
                        a = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                        s = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
                    t.$owlWrapper.addClass("owl-origin").css({
                        "-webkit-transform-origin": s + "px",
                        "-moz-perspective-origin": s + "px",
                        "perspective-origin": s + "px"
                    });
                    var l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                    r.css(e(a, 10)).addClass(n).on(l, function() {
                        t.endPrev = !0, r.off(l), t.clearTransStyle(r, n)
                    }), o.addClass(i).on(l, function() {
                        t.endCurrent = !0, o.off(l), t.clearTransStyle(o, i)
                    })
                },
                clearTransStyle: function(e, t) {
                    var n = this;
                    e.attr("style", e.data("owl-originalStyles")).removeClass(t), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
                },
                owlStatus: function() {
                    var e = this;
                    e.owl = {
                        userOptions: e.userOptions,
                        baseElement: e.$elem,
                        userItems: e.$userItems,
                        owlItems: e.$owlItems,
                        currentItem: e.currentItem,
                        prevItem: e.prevItem,
                        isTouch: e.browser.isTouch,
                        browser: e.browser
                    }
                },
                clearEvents: function() {
                    var i = this;
                    i.$elem.off(".owl owl mousedown.disableTextSelect"), e(n).off(".owl owl"), e(t).off("resize", i.resizer)
                },
                unWrap: function() {
                    var e = this;
                    0 !== e.$elem.children().length && (e.$owlWrapper.unwrap(), e.$userItems.unwrap().unwrap(), e.owlControls && e.owlControls.remove()), e.clearEvents(), e.$elem.attr("style", e.$elem.data("owl-originalStyles") || "").attr("class", e.$elem.data("owl-originalClasses"))
                },
                destroy: function() {
                    var e = this;
                    e.unWrap(), e.$elem.removeData()
                },
                reinit: function(t) {
                    var n = this,
                        i = e.extend({}, n.userOptions, t);
                    n.unWrap(), n.init(i, n.$elem)
                },
                addItem: function(e, t) {
                    var n, o = this;
                    return e ? 0 === o.$elem.children().length ? (o.$elem.append(e), o.setVars(), !1) : (o.unWrap(), n = t === i || -1 === t ? -1 : t, n >= o.$userItems.length || -1 === n ? o.$userItems.eq(-1).after(e) : o.$userItems.eq(n).before(e), o.setVars(), void 0) : !1
                },
                removeItem: function(e) {
                    var t, n = this;
                    return 0 === n.$elem.children().length ? !1 : (t = e === i || -1 === e ? -1 : e, n.unWrap(), n.$userItems.eq(t).remove(), n.setVars(), void 0)
                }
            };
            e.fn.owlCarousel = function(t) {
                return this.each(function() {
                    if (e(this).data("owl-init") === !0) return !1;
                    e(this).data("owl-init", !0);
                    var n = Object.create(o);
                    n.init(t, this), e.data(this, "owlCarousel", n)
                })
            }, e.fn.owlCarousel.options = {
                items: 5,
                itemsDesktop: [1199, 4],
                itemsDesktopSmall: [979, 3],
                itemsTablet: [768, 2],
                itemsTabletSmall: !1,
                itemsMobile: [479, 1],
                singleItem: !1,
                slideSpeed: 200,
                paginationSpeed: 800,
                rewindSpeed: 1e3,
                autoPlay: !1,
                stopOnHover: !1,
                navigation: !1,
                navigationText: ["prev", "next"],
                rewindNav: !0,
                scrollPerPage: !1,
                pagination: !0,
                paginationNumbers: !1,
                responsive: !0,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: t,
                baseClass: "owl-carousel",
                theme: "owl-theme",
                lazyLoad: !1,
                lazyFollow: !0,
                autoHeight: !1,
                jsonPath: !1,
                jsonSuccess: !1,
                dragBeforeAnimFinish: !0,
                mouseDrag: !0,
                touchDrag: !0,
                addClassActive: !1,
                transitionStyle: !1,
                beforeUpdate: !1,
                afterUpdate: !1,
                beforeInit: !1,
                afterInit: !1,
                beforeMove: !1,
                afterMove: !1,
                afterAction: !1,
                startDragging: !1
            }
        }(jQuery, window, document),
        function(e) {
            "use strict";
            var t, n = "",
                i = Math.PI,
                o = i / 2,
                r = "ontouchstart" in window,
                a = r ? {
                    start: "touchstart",
                    move: "touchmove",
                    end: "touchend"
                } : {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                },
                s = {
                    backward: ["bl", "tl"],
                    forward: ["br", "tr"],
                    all: ["tl", "bl", "tr", "br"]
                },
                l = ["single", "double"],
                c = {
                    page: 1,
                    gradients: !0,
                    duration: 600,
                    acceleration: !0,
                    display: "double",
                    when: null
                },
                u = {
                    folding: null,
                    corners: "forward",
                    cornerSize: 100,
                    gradients: !0,
                    duration: 600,
                    acceleration: !0
                },
                p = 6,
                h = {
                    0: {
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    },
                    1: {
                        top: 0,
                        right: 0,
                        left: "auto",
                        bottom: "auto"
                    }
                },
                d = function(e, t, n, i) {
                    return {
                        css: {
                            position: "absolute",
                            top: e,
                            left: t,
                            overflow: i || "hidden",
                            "z-index": n || "auto"
                        }
                    }
                },
                f = function(e, t, n, i, o) {
                    var r = 1 - o,
                        a = r * r * r,
                        s = o * o * o;
                    return m(Math.round(a * e.x + 3 * o * r * r * t.x + 3 * o * o * r * n.x + s * i.x), Math.round(a * e.y + 3 * o * r * r * t.y + 3 * o * o * r * n.y + s * i.y))
                },
                g = function(e) {
                    return 180 * (e / i)
                },
                m = function(e, t) {
                    return {
                        x: e,
                        y: t
                    }
                },
                v = function(e, n, i) {
                    return t && i ? " translate3d(" + e + "px," + n + "px, 0px) " : " translate(" + e + "px, " + n + "px) "
                },
                y = function(e) {
                    return " rotate(" + e + "deg) "
                },
                w = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                },
                b = function() {
                    for (var e = ["Moz", "Webkit", "Khtml", "O", "ms"], t = e.length, n = ""; t--;) e[t] + "Transform" in document.body.style && (n = "-" + e[t].toLowerCase() + "-");
                    return n
                },
                x = function(e, t, i, o, r) {
                    var a, s = [];
                    if ("-webkit-" == n) {
                        for (a = 0; r > a; a++) s.push("color-stop(" + o[a][0] + ", " + o[a][1] + ")");
                        e.css({
                            "background-image": "-webkit-gradient(linear, " + t.x + "% " + t.y + "%,  " + i.x + "% " + i.y + "%, " + s.join(",") + " )"
                        })
                    } else {
                        t = {
                            x: t.x / 100 * e.width(),
                            y: t.y / 100 * e.height()
                        }, i = {
                            x: i.x / 100 * e.width(),
                            y: i.y / 100 * e.height()
                        };
                        var l = i.x - t.x,
                            c = i.y - t.y,
                            u = Math.atan2(c, l),
                            p = u - Math.PI / 2,
                            h = Math.abs(e.width() * Math.sin(p)) + Math.abs(e.height() * Math.cos(p)),
                            d = Math.sqrt(c * c + l * l),
                            f = m(i.x < t.x ? e.width() : 0, i.y < t.y ? e.height() : 0),
                            g = Math.tan(u),
                            v = -1 / g,
                            y = (v * f.x - f.y - g * t.x + t.y) / (v - g),
                            w = {
                                x: y,
                                y: v * y - v * f.x + f.y
                            },
                            b = Math.sqrt(Math.pow(w.x - t.x, 2) + Math.pow(w.y - t.y, 2));
                        for (a = 0; r > a; a++) s.push(" " + o[a][1] + " " + 100 * (b + d * o[a][0]) / h + "%");
                        e.css({
                            "background-image": n + "linear-gradient(" + -u + "rad," + s.join(",") + ")"
                        })
                    }
                },
                C = {
                    init: function(i) {
                        void 0 === t && (t = "WebKitCSSMatrix" in window || "MozPerspective" in document.body.style, n = b());
                        var o, l = this.data(),
                            u = this.children();
                        if (i = e.extend({
                                width: this.width(),
                                height: this.height()
                            }, c, i), l.opts = i, l.pageObjs = {}, l.pages = {}, l.pageWrap = {}, l.pagePlace = {}, l.pageMv = [], l.totalPages = i.pages || 0, i.when)
                            for (o in i.when) w(o, i.when) && this.bind(o, i.when[o]);
                        for (this.css({
                                position: "relative",
                                width: i.width,
                                height: i.height
                            }), this.turn("display", i.display), t && !r && i.acceleration && this.transform(v(0, 0, !0)), o = 0; o < u.length; o++) this.turn("addPage", u[o], o + 1);
                        return this.turn("page", i.page), s = e.extend({}, s, i.corners), e(this).bind(a.start, function(e) {
                            for (var t in l.pages)
                                if (w(t, l.pages) && k._eventStart.call(l.pages[t], e) === !1) return !1
                        }), e(document).bind(a.move, function(e) {
                            for (var t in l.pages) w(t, l.pages) && k._eventMove.call(l.pages[t], e)
                        }).bind(a.end, function(e) {
                            for (var t in l.pages) w(t, l.pages) && k._eventEnd.call(l.pages[t], e)
                        }), l.done = !0, this
                    },
                    addPage: function(t, n) {
                        var i = !1,
                            o = this.data(),
                            r = o.totalPages + 1;
                        if (n) {
                            if (n == r) n = r, i = !0;
                            else if (n > r) throw new Error('It is impossible to add the page "' + n + '", the maximum value is: "' + r + '"')
                        } else n = r, i = !0;
                        return n >= 1 && r >= n && (o.done && this.turn("stop"), n in o.pageObjs && C._movePages.call(this, n, 1), i && (o.totalPages = r), o.pageObjs[n] = e(t).addClass("turn-page p" + n), C._addPage.call(this, n), o.done && this.turn("update"), C._removeFromDOM.call(this)), this
                    },
                    _addPage: function(t) {
                        var n = this.data(),
                            i = n.pageObjs[t];
                        if (i)
                            if (C._necessPage.call(this, t)) {
                                if (!n.pageWrap[t]) {
                                    var o = "double" == n.display ? this.width() / 2 : this.width(),
                                        r = this.height();
                                    i.css({
                                        width: o,
                                        height: r
                                    }), n.pagePlace[t] = t, n.pageWrap[t] = e("<div/>", {
                                        "class": "turn-page-wrapper",
                                        page: t,
                                        css: {
                                            position: "absolute",
                                            overflow: "hidden",
                                            width: o,
                                            height: r
                                        }
                                    }).css(h["double" == n.display ? t % 2 : 0]), this.append(n.pageWrap[t]), n.pageWrap[t].prepend(n.pageObjs[t])
                                }
                                t && 1 != C._setPageLoc.call(this, t) || C._makeFlip.call(this, t)
                            } else n.pagePlace[t] = 0, n.pageObjs[t] && n.pageObjs[t].remove()
                    },
                    hasPage: function(e) {
                        return e in this.data().pageObjs
                    },
                    _makeFlip: function(e) {
                        var t = this.data();
                        if (!t.pages[e] && t.pagePlace[e] == e) {
                            var n = "single" == t.display,
                                i = e % 2;
                            t.pages[e] = t.pageObjs[e].css({
                                width: n ? this.width() : this.width() / 2,
                                height: this.height()
                            }).flip({
                                page: e,
                                next: n && e === t.totalPages ? e - 1 : i || n ? e + 1 : e - 1,
                                turn: this,
                                duration: t.opts.duration,
                                acceleration: t.opts.acceleration,
                                corners: n ? "all" : i ? "forward" : "backward",
                                backGradient: t.opts.gradients,
                                frontGradient: t.opts.gradients
                            }).flip("disable", t.disabled).bind("pressed", C._pressed).bind("released", C._released).bind("start", C._start).bind("end", C._end).bind("flip", C._flip)
                        }
                        return t.pages[e]
                    },
                    _makeRange: function() {
                        var e, t = (this.data(), this.turn("range"));
                        for (e = t[0]; e <= t[1]; e++) C._addPage.call(this, e)
                    },
                    range: function(e) {
                        var t, n, i, o = this.data();
                        e = e || o.tpage || o.page;
                        var r = C._view.call(this, e);
                        if (1 > e || e > o.totalPages) throw new Error('"' + e + '" is not a page for range');
                        return r[1] = r[1] || r[0], r[0] >= 1 && r[1] <= o.totalPages ? (t = Math.floor((p - 2) / 2), o.totalPages - r[1] > r[0] ? (n = Math.min(r[0] - 1, t), i = 2 * t - n) : (i = Math.min(o.totalPages - r[1], t), n = 2 * t - i)) : (n = p - 1, i = p - 1), [Math.max(1, r[0] - n), Math.min(o.totalPages, r[1] + i)]
                    },
                    _necessPage: function(e) {
                        if (0 === e) return !0;
                        var t = this.turn("range");
                        return e >= t[0] && e <= t[1]
                    },
                    _removeFromDOM: function() {
                        var e, t = this.data();
                        for (e in t.pageWrap) w(e, t.pageWrap) && !C._necessPage.call(this, e) && C._removePageFromDOM.call(this, e)
                    },
                    _removePageFromDOM: function(e) {
                        var t = this.data();
                        if (t.pages[e]) {
                            var n = t.pages[e].data();
                            n.f && n.f.fwrapper && n.f.fwrapper.remove(), t.pages[e].remove(), delete t.pages[e]
                        }
                        t.pageObjs[e] && t.pageObjs[e].remove(), t.pageWrap[e] && (t.pageWrap[e].remove(), delete t.pageWrap[e]), delete t.pagePlace[e]
                    },
                    removePage: function(e) {
                        var t = this.data();
                        return t.pageObjs[e] && (this.turn("stop"), C._removePageFromDOM.call(this, e), delete t.pageObjs[e], C._movePages.call(this, e, -1), t.totalPages = t.totalPages - 1, C._makeRange.call(this), t.page > t.totalPages && this.turn("page", t.totalPages)), this
                    },
                    _movePages: function(e, t) {
                        var n, i = this.data(),
                            o = "single" == i.display,
                            r = function(e) {
                                var n = e + t,
                                    r = n % 2;
                                i.pageObjs[e] && (i.pageObjs[n] = i.pageObjs[e].removeClass("page" + e).addClass("page" + n)), i.pagePlace[e] && i.pageWrap[e] && (i.pagePlace[n] = n, i.pageWrap[n] = i.pageWrap[e].css(h[o ? 0 : r]).attr("page", n), i.pages[e] && (i.pages[n] = i.pages[e].flip("options", {
                                    page: n,
                                    next: o || r ? n + 1 : n - 1,
                                    corners: o ? "all" : r ? "forward" : "backward"
                                })), t && (delete i.pages[e], delete i.pagePlace[e], delete i.pageObjs[e], delete i.pageWrap[e], delete i.pageObjs[e]))
                            };
                        if (t > 0)
                            for (n = i.totalPages; n >= e; n--) r(n);
                        else
                            for (n = e; n <= i.totalPages; n++) r(n)
                    },
                    display: function(t) {
                        var n = this.data(),
                            i = n.display;
                        if (t) {
                            if (-1 == e.inArray(t, l)) throw new Error('"' + t + '" is not a value for display');
                            if ("single" == t ? n.pageObjs[0] || (this.turn("stop").css({
                                    overflow: "hidden"
                                }), n.pageObjs[0] = e("<div />", {
                                    "class": "turn-page p-temporal"
                                }).css({
                                    width: this.width(),
                                    height: this.height()
                                }).appendTo(this)) : n.pageObjs[0] && (this.turn("stop").css({
                                    overflow: ""
                                }), n.pageObjs[0].remove(), delete n.pageObjs[0]), n.display = t, i) {
                                var o = this.turn("size");
                                C._movePages.call(this, 1, 0), this.turn("size", o.width, o.height).turn("update")
                            }
                            return this
                        }
                        return i
                    },
                    animating: function() {
                        return this.data().pageMv.length > 0
                    },
                    disable: function(t) {
                        var n, i = this.data(),
                            o = this.turn("view");
                        i.disabled = void 0 === t || t === !0;
                        for (n in i.pages) w(n, i.pages) && i.pages[n].flip("disable", t ? e.inArray(n, o) : !1);
                        return this
                    },
                    size: function(e, t) {
                        if (e && t) {
                            var n, i = this.data(),
                                o = "double" == i.display ? e / 2 : e;
                            this.css({
                                width: e,
                                height: t
                            }), i.pageObjs[0] && i.pageObjs[0].css({
                                width: o,
                                height: t
                            });
                            for (n in i.pageWrap) w(n, i.pageWrap) && (i.pageObjs[n].css({
                                width: o,
                                height: t
                            }), i.pageWrap[n].css({
                                width: o,
                                height: t
                            }), i.pages[n] && i.pages[n].css({
                                width: o,
                                height: t
                            }));
                            return this.turn("resize"), this
                        }
                        return {
                            width: this.width(),
                            height: this.height()
                        }
                    },
                    resize: function() {
                        var e, t = this.data();
                        for (t.pages[0] && (t.pageWrap[0].css({
                                left: -this.width()
                            }), t.pages[0].flip("resize", !0)), e = 1; e <= t.totalPages; e++) t.pages[e] && t.pages[e].flip("resize", !0)
                    },
                    _removeMv: function(e) {
                        var t, n = this.data();
                        for (t = 0; t < n.pageMv.length; t++)
                            if (n.pageMv[t] == e) return n.pageMv.splice(t, 1), !0;
                        return !1
                    },
                    _addMv: function(e) {
                        var t = this.data();
                        C._removeMv.call(this, e), t.pageMv.push(e)
                    },
                    _view: function(e) {
                        var t = this.data();
                        return e = e || t.page, "double" == t.display ? e % 2 ? [e - 1, e] : [e, e + 1] : [e]
                    },
                    view: function(e) {
                        var t = this.data(),
                            n = C._view.call(this, e);
                        return "double" == t.display ? [n[0] > 0 ? n[0] : 0, n[1] <= t.totalPages ? n[1] : 0] : [n[0] > 0 && n[0] <= t.totalPages ? n[0] : 0]
                    },
                    stop: function() {
                        var e, t, n = this.data(),
                            i = n.pageMv;
                        n.pageMv = [], n.tpage && (n.page = n.tpage, delete n.tpage);
                        for (e in i) w(e, i) && (t = n.pages[i[e]].data().f.opts, k._moveFoldingPage.call(n.pages[i[e]], null), n.pages[i[e]].flip("hideFoldedPage"), n.pagePlace[t.next] = t.next, t.force && (t.next = 0 === t.page % 2 ? t.page - 1 : t.page + 1, delete t.force));
                        return this.turn("update"), this
                    },
                    pages: function(e) {
                        var t = this.data();
                        if (e) {
                            if (e < t.totalPages) {
                                for (var n = e + 1; n <= t.totalPages; n++) this.turn("removePage", n);
                                this.turn("page") > e && this.turn("page", e)
                            }
                            return t.totalPages = e, this
                        }
                        return t.totalPages
                    },
                    _fitPage: function(t, n) {
                        var i = this.data(),
                            o = this.turn("view", t);
                        i.page != t && (this.trigger("turning", [t, o]), -1 != e.inArray(1, o) && this.trigger("first"), -1 != e.inArray(i.totalPages, o) && this.trigger("last")), i.pageObjs[t] && (i.tpage = t, this.turn("stop", n), C._removeFromDOM.call(this), C._makeRange.call(this), this.trigger("turned", [t, o]))
                    },
                    _turnPage: function(t) {
                        var n, i, o = this.data(),
                            r = this.turn("view"),
                            a = this.turn("view", t);
                        if (o.page != t && (this.trigger("turning", [t, a]), -1 != e.inArray(1, a) && this.trigger("first"), -1 != e.inArray(o.totalPages, a) && this.trigger("last")), o.pageObjs[t] && (o.tpage = t, this.turn("stop"), C._makeRange.call(this), "single" == o.display ? (n = r[0], i = a[0]) : r[1] && t > r[1] ? (n = r[1], i = a[0]) : r[0] && t < r[0] && (n = r[0], i = a[1]), o.pages[n])) {
                            var s = o.pages[n].data().f.opts;
                            o.tpage = i, s.next != i && (s.next = i, o.pagePlace[i] = s.page, s.force = !0), "single" == o.display ? o.pages[n].flip("turnPage", a[0] > r[0] ? "br" : "bl") : o.pages[n].flip("turnPage")
                        }
                    },
                    page: function(t) {
                        t = parseInt(t, 10);
                        var n = this.data();
                        return t > 0 && t <= n.totalPages ? (n.done && -1 == e.inArray(t, this.turn("view")) ? C._turnPage.call(this, t) : C._fitPage.call(this, t), this) : n.page
                    },
                    next: function() {
                        var e = this.data();
                        return this.turn("page", C._view.call(this, e.page).pop() + 1)
                    },
                    previous: function() {
                        var e = this.data();
                        return this.turn("page", C._view.call(this, e.page).shift() - 1)
                    },
                    _addMotionPage: function() {
                        var t = e(this).data().f.opts,
                            n = t.turn,
                            i = n.data();
                        t.pageMv = t.page, C._addMv.call(n, t.pageMv), i.pagePlace[t.next] = t.page, n.turn("update")
                    },
                    _start: function(t, n, i) {
                        var o = n.turn.data(),
                            r = e.Event("start");
                        if (t.stopPropagation(), n.turn.trigger(r, [n, i]), r.isDefaultPrevented()) return t.preventDefault(), void 0;
                        if ("single" == o.display) {
                            var a = "l" == i.charAt(1);
                            1 == n.page && a || n.page == o.totalPages && !a ? t.preventDefault() : a ? (n.next = n.next < n.page ? n.next : n.page - 1, n.force = !0) : n.next = n.next > n.page ? n.next : n.page + 1
                        }
                        C._addMotionPage.call(this)
                    },
                    _end: function(t, n) {
                        var i = e(this),
                            o = i.data().f,
                            r = o.opts,
                            a = r.turn,
                            s = a.data();
                        t.stopPropagation(), n || s.tpage ? (s.tpage == r.next || s.tpage == r.page) && (delete s.tpage, C._fitPage.call(a, s.tpage || r.next, !0)) : (C._removeMv.call(a, r.pageMv), a.turn("update"))
                    },
                    _pressed: function() {
                        var t, n = e(this),
                            i = n.data().f,
                            o = i.opts.turn,
                            r = o.data().pages;
                        for (t in r) t != i.opts.page && r[t].flip("disable", !0);
                        return i.time = (new Date).getTime()
                    },
                    _released: function(t, n) {
                        var i = e(this),
                            o = i.data().f;
                        t.stopPropagation(), ((new Date).getTime() - o.time < 200 || n.x < 0 || n.x > e(this).width()) && (t.preventDefault(), o.opts.turn.data().tpage = o.opts.next, o.opts.turn.turn("update"), e(i).flip("turnPage"))
                    },
                    _flip: function() {
                        var t = e(this).data().f.opts;
                        t.turn.trigger("turn", [t.next])
                    },
                    calculateZ: function(e) {
                        var t, n, i, o, r, a = this,
                            s = this.data(),
                            l = this.turn("view"),
                            c = l[0] || l[1],
                            u = {
                                pageZ: {},
                                partZ: {},
                                pageV: {}
                            },
                            p = function(e) {
                                var t = a.turn("view", e);
                                t[0] && (u.pageV[t[0]] = !0), t[1] && (u.pageV[t[1]] = !0)
                            };
                        for (t = 0; t < e.length; t++) n = e[t], i = s.pages[n].data().f.opts.next, o = s.pagePlace[n], p(n), p(i), r = s.pagePlace[i] == i ? i : n, u.pageZ[r] = s.totalPages - Math.abs(c - r), u.partZ[o] = 2 * s.totalPages + Math.abs(c - r);
                        return u
                    },
                    update: function() {
                        var e, t = this.data();
                        if (t.pageMv.length && 0 !== t.pageMv[0]) {
                            var n, i = this.turn("calculateZ", t.pageMv),
                                o = this.turn("view", t.tpage);
                            t.pagePlace[o[0]] == o[0] ? n = o[0] : t.pagePlace[o[1]] == o[1] && (n = o[1]);
                            for (e in t.pageWrap) w(e, t.pageWrap) && (t.pageWrap[e].css({
                                display: i.pageV[e] ? "" : "none",
                                "z-index": i.pageZ[e] || 0
                            }), t.pages[e] && (t.pages[e].flip("z", i.partZ[e] || null), i.pageV[e] && t.pages[e].flip("resize"), t.tpage && t.pages[e].flip("disable", !0)))
                        } else
                            for (e in t.pageWrap)
                                if (w(e, t.pageWrap)) {
                                    var r = C._setPageLoc.call(this, e);
                                    t.pages[e] && t.pages[e].flip("disable", t.disabled || 1 != r).flip("z", null)
                                }
                    },
                    _setPageLoc: function(e) {
                        var t = this.data(),
                            n = this.turn("view");
                        return e == n[0] || e == n[1] ? (t.pageWrap[e].css({
                            "z-index": t.totalPages,
                            display: ""
                        }), 1) : "single" == t.display && e == n[0] + 1 || "double" == t.display && e == n[0] - 2 || e == n[1] + 2 ? (t.pageWrap[e].css({
                            "z-index": t.totalPages - 1,
                            display: ""
                        }), 2) : (t.pageWrap[e].css({
                            "z-index": 0,
                            display: "none"
                        }), 0)
                    }
                },
                k = {
                    init: function(e) {
                        return e.gradients && (e.frontGradient = !0, e.backGradient = !0), this.data({
                            f: {}
                        }), this.flip("options", e), k._addPageWrapper.call(this), this
                    },
                    setData: function(t) {
                        var n = this.data();
                        return n.f = e.extend(n.f, t), this
                    },
                    options: function(t) {
                        var n = this.data().f;
                        return t ? (k.setData.call(this, {
                            opts: e.extend({}, n.opts || u, t)
                        }), this) : n.opts
                    },
                    z: function(e) {
                        var t = this.data().f;
                        return t.opts["z-index"] = e, t.fwrapper.css({
                            "z-index": e || parseInt(t.parent.css("z-index"), 10) || 0
                        }), this
                    },
                    _cAllowed: function() {
                        return s[this.data().f.opts.corners] || this.data().f.opts.corners
                    },
                    _cornerActivated: function(t) {
                        if (void 0 === t.originalEvent) return !1;
                        t = r ? t.originalEvent.touches : [t];
                        var n = this.data().f,
                            i = n.parent.offset(),
                            o = this.width(),
                            a = this.height(),
                            s = {
                                x: Math.max(0, t[0].pageX - i.left),
                                y: Math.max(0, t[0].pageY - i.top)
                            },
                            l = n.opts.cornerSize,
                            c = k._cAllowed.call(this);
                        if (s.x <= 0 || s.y <= 0 || s.x >= o || s.y >= a) return !1;
                        if (s.y < l) s.corner = "t";
                        else {
                            if (!(s.y >= a - l)) return !1;
                            s.corner = "b"
                        }
                        if (s.x <= l) s.corner += "l";
                        else {
                            if (!(s.x >= o - l)) return !1;
                            s.corner += "r"
                        }
                        return -1 == e.inArray(s.corner, c) ? !1 : s
                    },
                    _c: function(e, t) {
                        return t = t || 0, {
                            tl: m(t, t),
                            tr: m(this.width() - t, t),
                            bl: m(t, this.height() - t),
                            br: m(this.width() - t, this.height() - t)
                        } [e]
                    },
                    _c2: function(e) {
                        return {
                            tl: m(2 * this.width(), 0),
                            tr: m(-this.width(), 0),
                            bl: m(2 * this.width(), this.height()),
                            br: m(-this.width(), this.height())
                        } [e]
                    },
                    _foldingPage: function() {
                        var e = this.data().f.opts;
                        if (e.folding) return e.folding;
                        if (e.turn) {
                            var t = e.turn.data();
                            return "single" == t.display ? t.pageObjs[e.next] ? t.pageObjs[0] : null : t.pageObjs[e.next]
                        }
                    },
                    _backGradient: function() {
                        var t = this.data().f,
                            n = t.opts.turn,
                            i = t.opts.backGradient && (!n || "single" == n.data().display || 2 != t.opts.page && t.opts.page != n.data().totalPages - 1);
                        return i && !t.bshadow && (t.bshadow = e("<div/>", d(0, 0, 1)).css({
                            position: "",
                            width: this.width(),
                            height: this.height()
                        }).appendTo(t.parent)), i
                    },
                    resize: function(e) {
                        var t = this.data().f,
                            n = this.width(),
                            i = this.height(),
                            o = Math.round(Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)));
                        e && (t.wrapper.css({
                            width: o,
                            height: o
                        }), t.fwrapper.css({
                            width: o,
                            height: o
                        }).children(":first-child").css({
                            width: n,
                            height: i
                        }), t.fpage.css({
                            width: i,
                            height: n
                        }), t.opts.frontGradient && t.ashadow.css({
                            width: i,
                            height: n
                        }), k._backGradient.call(this) && t.bshadow.css({
                            width: n,
                            height: i
                        })), t.parent.is(":visible") && (t.fwrapper.css({
                            top: t.parent.offset().top,
                            left: t.parent.offset().left
                        }), t.opts.turn && t.fparent.css({
                            top: -t.opts.turn.offset().top,
                            left: -t.opts.turn.offset().left
                        })), this.flip("z", t.opts["z-index"])
                    },
                    _addPageWrapper: function() {
                        var t = this.data().f,
                            n = this.parent();
                        if (!t.wrapper) {
                            var i = (this.css("left"), this.css("top"), this.width()),
                                o = this.height();
                            if (Math.round(Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2))), t.parent = n, t.fparent = t.opts.turn ? t.opts.turn.data().fparent : e("#turn-fwrappers"), !t.fparent) {
                                var r = e("<div/>", {
                                    css: {
                                        "pointer-events": "none"
                                    }
                                }).hide();
                                r.data().flips = 0, t.opts.turn ? (r.css(d(-t.opts.turn.offset().top, -t.opts.turn.offset().left, "auto", "visible").css).appendTo(t.opts.turn), t.opts.turn.data().fparent = r) : r.css(d(0, 0, "auto", "visible").css).attr("id", "turn-fwrappers").appendTo(e("body")), t.fparent = r
                            }
                            this.css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                bottom: "auto",
                                right: "auto"
                            }), t.wrapper = e("<div/>", d(0, 0, this.css("z-index"))).appendTo(n).prepend(this), t.fwrapper = e("<div/>", d(n.offset().top, n.offset().left)).hide().appendTo(t.fparent), t.fpage = e("<div/>", {
                                css: {
                                    cursor: "default"
                                }
                            }).appendTo(e("<div/>", d(0, 0, 0, "visible")).appendTo(t.fwrapper)), t.opts.frontGradient && (t.ashadow = e("<div/>", d(0, 0, 1)).appendTo(t.fpage)), k.setData.call(this, t), k.resize.call(this, !0)
                        }
                    },
                    _fold: function(e) {
                        var t, n, r, a, s, l, c = this,
                            u = 0,
                            p = 0,
                            h = m(0, 0),
                            d = m(0, 0),
                            f = m(0, 0),
                            w = this.width(),
                            b = this.height(),
                            C = k._foldingPage.call(this),
                            $ = (Math.tan(p), this.data().f),
                            T = $.opts.acceleration,
                            S = $.wrapper.height(),
                            P = k._c.call(this, e.corner),
                            E = "t" == e.corner.substr(0, 1),
                            M = "l" == e.corner.substr(1, 1),
                            I = function() {
                                var v, y = m(P.x ? P.x - e.x : e.x, P.y ? P.y - e.y : e.y),
                                    x = Math.atan2(y.y, y.x);
                                p = o - x, u = g(p), v = m(M ? w - y.x / 2 : e.x + y.x / 2, y.y / 2);
                                var C = p - Math.atan2(v.y, v.x),
                                    T = Math.max(0, Math.sin(C) * Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2)));
                                if (f = m(T * Math.sin(p), T * Math.cos(p)), p > o && (f.x = f.x + Math.abs(f.y * Math.tan(x)), f.y = 0, Math.round(f.x * Math.tan(i - p)) < b)) return e.y = Math.sqrt(Math.pow(b, 2) + 2 * v.x * y.x), E && (e.y = b - e.y), I();
                                if (p > o) {
                                    var A = i - p,
                                        D = S - b / Math.sin(A);
                                    h = m(Math.round(D * Math.cos(A)), Math.round(D * Math.sin(A))), M && (h.x = -h.x), E && (h.y = -h.y)
                                }
                                t = Math.round(f.y / Math.tan(p) + f.x);
                                var _ = w - t,
                                    N = _ * Math.cos(2 * p),
                                    j = _ * Math.sin(2 * p);
                                d = m(Math.round(M ? _ - N : t + N), Math.round(E ? j : b - j)), s = _ * Math.sin(p);
                                var z = k._c2.call(c, e.corner),
                                    L = Math.sqrt(Math.pow(z.x - e.x, 2) + Math.pow(z.y - e.y, 2));
                                return l = w > L ? L / w : 1, $.opts.frontGradient && (a = s > 100 ? (s - 100) / s : 0, n = m(100 * (s * Math.sin(o - p) / b), 100 * (s * Math.cos(o - p) / w)), E && (n.y = 100 - n.y), M && (n.x = 100 - n.x)), k._backGradient.call(c) && (r = m(100 * (s * Math.sin(p) / w), 100 * (s * Math.cos(p) / b)), M || (r.x = 100 - r.x), E || (r.y = 100 - r.y)), f.x = Math.round(f.x), f.y = Math.round(f.y), !0
                            },
                            A = function(e, t, i, o) {
                                var s = ["0", "auto"],
                                    u = (w - S) * i[0] / 100,
                                    f = (b - S) * i[1] / 100,
                                    g = {
                                        left: s[t[0]],
                                        top: s[t[1]],
                                        right: s[t[2]],
                                        bottom: s[t[3]]
                                    },
                                    C = 90 != o && -90 != o ? M ? -1 : 1 : 0;
                                i = i[0] + "% " + i[1] + "%", c.css(g).transform(y(o) + v(e.x + C, e.y, T), i), $.fpage.parent().css(g), $.wrapper.transform(v(-e.x + u - C, -e.y + f, T) + y(-o), i), $.fwrapper.transform(v(-e.x + h.x + u, -e.y + h.y + f, T) + y(-o), i), $.fpage.parent().transform(y(o) + v(e.x + d.x - h.x, e.y + d.y - h.y, T), i), $.opts.frontGradient && x($.ashadow, m(M ? 100 : 0, E ? 100 : 0), m(n.x, n.y), [
                                    [a, "rgba(0,0,0,0)"],
                                    [.8 * (1 - a) + a, "rgba(0,0,0," + .2 * l + ")"],
                                    [1, "rgba(255,255,255," + .2 * l + ")"]
                                ], 3, p), k._backGradient.call(c) && x($.bshadow, m(M ? 0 : 100, E ? 0 : 100), m(r.x, r.y), [
                                    [.8, "rgba(0,0,0,0)"],
                                    [1, "rgba(0,0,0," + .3 * l + ")"],
                                    [1, "rgba(0,0,0,0)"]
                                ], 3)
                            };
                        switch (e.corner) {
                            case "tl":
                                e.x = Math.max(e.x, 1), I(), A(f, [1, 0, 0, 1], [100, 0], u), $.fpage.transform(v(-b, -w, T) + y(90 - 2 * u), "100% 100%"), C.transform(y(90) + v(0, -b, T), "0% 0%");
                                break;
                            case "tr":
                                e.x = Math.min(e.x, w - 1), I(), A(m(-f.x, f.y), [0, 0, 0, 1], [0, 0], -u), $.fpage.transform(v(0, -w, T) + y(-90 + 2 * u), "0% 100%"), C.transform(y(270) + v(-w, 0, T), "0% 0%");
                                break;
                            case "bl":
                                e.x = Math.max(e.x, 1), I(), A(m(f.x, -f.y), [1, 1, 0, 0], [100, 100], -u), $.fpage.transform(v(-b, 0, T) + y(-90 + 2 * u), "100% 0%"), C.transform(y(270) + v(-w, 0, T), "0% 0%");
                                break;
                            case "br":
                                e.x = Math.min(e.x, w - 1), I(), A(m(-f.x, -f.y), [0, 1, 1, 0], [0, 100], u), $.fpage.transform(y(90 - 2 * u), "0% 0%"), C.transform(y(90) + v(0, -b, T), "0% 0%")
                        }
                        $.point = e
                    },
                    _moveFoldingPage: function(e) {
                        var t = this.data().f,
                            n = k._foldingPage.call(this);
                        n && (e ? t.fpage.children()[t.ashadow ? "1" : "0"] || (k.setData.call(this, {
                            backParent: n.parent()
                        }), t.fpage.prepend(n)) : t.backParent && t.backParent.prepend(n))
                    },
                    _showFoldedPage: function(t, n) {
                        var i = k._foldingPage.call(this),
                            o = this.data(),
                            r = o.f;
                        if (!r.point || r.point.corner != t.corner) {
                            var a = e.Event("start");
                            if (this.trigger(a, [r.opts, t.corner]), a.isDefaultPrevented()) return !1
                        }
                        if (i) {
                            if (n) {
                                var s = this,
                                    l = r.point && r.point.corner == t.corner ? r.point : k._c.call(this, t.corner, 1);
                                this.animatef({
                                    from: [l.x, l.y],
                                    to: [t.x, t.y],
                                    duration: 500,
                                    frame: function(e) {
                                        t.x = Math.round(e[0]), t.y = Math.round(e[1]), k._fold.call(s, t)
                                    }
                                })
                            } else k._fold.call(this, t), o.effect && !o.effect.turning && this.animatef(!1);
                            return r.fwrapper.is(":visible") || (r.fparent.show().data().flips++, k._moveFoldingPage.call(this, !0), r.fwrapper.show(), r.bshadow && r.bshadow.show()), !0
                        }
                        return !1
                    },
                    hide: function() {
                        var e = this.data().f,
                            t = k._foldingPage.call(this);
                        return 0 === --e.fparent.data().flips && e.fparent.hide(), this.css({
                            left: 0,
                            top: 0,
                            right: "auto",
                            bottom: "auto"
                        }).transform("", "0% 100%"), e.wrapper.transform("", "0% 100%"), e.fwrapper.hide(), e.bshadow && e.bshadow.hide(), t.transform("", "0% 0%"), this
                    },
                    hideFoldedPage: function(e) {
                        var t = this.data().f;
                        if (t.point) {
                            var n = this,
                                i = t.point,
                                o = function() {
                                    t.point = null, n.flip("hide"), n.trigger("end", [!1])
                                };
                            if (e) {
                                var r = k._c.call(this, i.corner),
                                    a = "t" == i.corner.substr(0, 1),
                                    s = a ? Math.min(0, i.y - r.y) / 2 : Math.max(0, i.y - r.y) / 2,
                                    l = m(i.x, i.y + s),
                                    c = m(r.x, r.y - s);
                                this.animatef({
                                    from: 0,
                                    to: 1,
                                    frame: function(e) {
                                        var t = f(i, l, c, r, e);
                                        i.x = t.x, i.y = t.y, k._fold.call(n, i)
                                    },
                                    complete: o,
                                    duration: 800,
                                    hiding: !0
                                })
                            } else this.animatef(!1), o()
                        }
                    },
                    turnPage: function(e) {
                        var t = this,
                            n = this.data().f;
                        e = {
                            corner: n.corner ? n.corner.corner : e || k._cAllowed.call(this)[0]
                        };
                        var i = n.point || k._c.call(this, e.corner, n.opts.turn ? n.opts.turn.data().opts.elevation : 0),
                            o = k._c2.call(this, e.corner);
                        this.trigger("flip").animatef({
                            from: 0,
                            to: 1,
                            frame: function(n) {
                                var r = f(i, i, o, o, n);
                                e.x = r.x, e.y = r.y, k._showFoldedPage.call(t, e)
                            },
                            complete: function() {
                                t.trigger("end", [!0])
                            },
                            duration: n.opts.duration,
                            turning: !0
                        }), n.corner = null
                    },
                    moving: function() {
                        return "effect" in this.data()
                    },
                    isTurning: function() {
                        return this.flip("moving") && this.data().effect.turning
                    },
                    _eventStart: function(e) {
                        var t = this.data().f;
                        if (!t.disabled && !this.flip("isTurning")) {
                            if (t.corner = k._cornerActivated.call(this, e), t.corner && k._foldingPage.call(this, t.corner)) return k._moveFoldingPage.call(this, !0), this.trigger("pressed", [t.point]), !1;
                            t.corner = null
                        }
                    },
                    _eventMove: function(e) {
                        var t = this.data().f;
                        if (!t.disabled)
                            if (e = r ? e.originalEvent.touches : [e], t.corner) {
                                var n = t.parent.offset();
                                t.corner.x = e[0].pageX - n.left, t.corner.y = e[0].pageY - n.top, k._showFoldedPage.call(this, t.corner)
                            } else if (!this.data().effect && this.is(":visible")) {
                            var i = k._cornerActivated.call(this, e[0]);
                            if (i) {
                                var o = k._c.call(this, i.corner, t.opts.cornerSize / 2);
                                i.x = o.x, i.y = o.y, k._showFoldedPage.call(this, i, !0)
                            } else k.hideFoldedPage.call(this, !0)
                        }
                    },
                    _eventEnd: function() {
                        var t = this.data().f;
                        if (!t.disabled && t.point) {
                            var n = e.Event("released");
                            this.trigger(n, [t.point]), n.isDefaultPrevented() || k.hideFoldedPage.call(this, !0)
                        }
                        t.corner = null
                    },
                    disable: function(e) {
                        return k.setData.call(this, {
                            disabled: e
                        }), this
                    }
                },
                $ = function(e, t, n) {
                    if (n[0] && "object" != typeof n[0]) {
                        if (t[n[0]] && "_" != n[0].toString().substr(0, 1)) return t[n[0]].apply(e, Array.prototype.slice.call(n, 1));
                        throw n[0] + " is an invalid value"
                    }
                    return t.init.apply(e, n)
                };
            e.extend(e.fn, {
                flip: function() {
                    return $(this, k, arguments)
                },
                turn: function() {
                    return $(this, C, arguments)
                },
                transform: function(e, t) {
                    var i = {};
                    return t && (i[n + "transform-origin"] = t), i[n + "transform"] = e, this.css(i)
                },
                animatef: function(e) {
                    var t = this.data();
                    if (t.effect && clearInterval(t.effect.handle), e) {
                        e.to.length || (e.to = [e.to]), e.from.length || (e.from = [e.from]), e.easing || (e.easing = function(e, t, n, i, o) {
                            return i * Math.sqrt(1 - (t = t / o - 1) * t) + n
                        });
                        var n, i = [],
                            o = e.to.length,
                            r = this,
                            a = e.fps || 30,
                            s = -a,
                            l = function() {
                                var n, l = [];
                                for (s = Math.min(e.duration, s + a), n = 0; o > n; n++) l.push(e.easing(1, s, e.from[n], i[n], e.duration));
                                e.frame(1 == o ? l[0] : l), s == e.duration && (clearInterval(t.effect.handle), delete t.effect, r.data(t), e.complete && e.complete())
                            };
                        for (n = 0; o > n; n++) i.push(e.to[n] - e.from[n]);
                        t.effect = e, t.effect.handle = setInterval(l, a), this.data(t), l()
                    } else delete t.effect
                }
            }), e.isTouch = r
        }(jQuery),
        function(e, t, n) {
            function i(n, i, o) {
                var r = t.createElement(n);
                return i && (r.id = J + i), o && (r.style.cssText = o), e(r)
            }

            function o() {
                return n.innerHeight ? n.innerHeight : e(n).height()
            }

            function r(e) {
                var t = $.length,
                    n = (B + e) % t;
                return 0 > n ? t + n : n
            }

            function a(e, t) {
                return Math.round((/%/.test(e) ? ("x" === t ? T.width() : o()) / 100 : 1) * parseInt(e, 10))
            }

            function s(e, t) {
                return e.photo || e.photoRegex.test(t)
            }

            function l(e, t) {
                return e.retinaUrl && n.devicePixelRatio > 1 ? t.replace(e.photoRegex, e.retinaSuffix) : t
            }

            function c(e) {
                "contains" in v[0] && !v[0].contains(e.target) && (e.stopPropagation(), v.focus())
            }

            function u() {
                var t, n = e.data(F, Z);
                null == n ? (z = e.extend({}, Q), console && console.log && console.log("Error: cboxElement missing settings object")) : z = e.extend({}, n);
                for (t in z) e.isFunction(z[t]) && "on" !== t.slice(0, 2) && (z[t] = z[t].call(F));
                z.rel = z.rel || F.rel || e(F).data("rel") || "nofollow", z.href = z.href || e(F).attr("href"), z.title = z.title || F.title, "string" == typeof z.href && (z.href = e.trim(z.href))
            }

            function p(n, i) {
                e(t).trigger(n), st.triggerHandler(n), e.isFunction(i) && i.call(F)
            }

            function h(n) {
                U || (F = n, u(), $ = e(F), B = 0, "nofollow" !== z.rel && ($ = e("." + et).filter(function() {
                    var t, n = e.data(this, Z);
                    return n && (t = e(this).data("rel") || n.rel || this.rel), t === z.rel
                }), B = $.index(F), -1 === B && ($ = $.add(F), B = $.length - 1)), m.css({
                    opacity: parseFloat(z.opacity),
                    cursor: z.overlayClose ? "pointer" : "auto",
                    visibility: "visible"
                }).show(), G && v.add(m).removeClass(G), z.className && v.add(m).addClass(z.className), G = z.className, z.closeButton ? N.html(z.close).appendTo(w) : N.appendTo("<div/>"), q || (q = X = !0, v.css({
                    visibility: "hidden",
                    display: "block"
                }), S = i(lt, "LoadedContent", "width:0; height:0; overflow:hidden"), w.css({
                    width: "",
                    height: ""
                }).append(S), L = b.height() + k.height() + w.outerHeight(!0) - w.height(), O = x.width() + C.width() + w.outerWidth(!0) - w.width(), W = S.outerHeight(!0), H = S.outerWidth(!0), z.w = a(z.initialWidth, "x"), z.h = a(z.initialHeight, "y"), S.css({
                    width: "",
                    height: z.h
                }), Y.position(), p(tt, z.onOpen), j.add(M).hide(), v.focus(), z.trapFocus && t.addEventListener && (t.addEventListener("focus", c, !0), st.one(rt, function() {
                    t.removeEventListener("focus", c, !0)
                })), z.returnFocus && st.one(rt, function() {
                    e(F).focus()
                })), g())
            }

            function d() {
                !v && t.body && (K = !1, T = e(n), v = i(lt).attr({
                    id: Z,
                    "class": e.support.opacity === !1 ? J + "IE" : "",
                    role: "dialog",
                    tabindex: "-1"
                }).hide(), m = i(lt, "Overlay").hide(), E = e([i(lt, "LoadingOverlay")[0], i(lt, "LoadingGraphic")[0]]), y = i(lt, "Wrapper"), w = i(lt, "Content").append(M = i(lt, "Title"), I = i(lt, "Current"), _ = e('<button type="button"/>').attr({
                    id: J + "Previous"
                }), D = e('<button type="button"/>').attr({
                    id: J + "Next"
                }), A = i("button", "Slideshow"), E), N = e('<button type="button"/>').attr({
                    id: J + "Close"
                }), y.append(i(lt).append(i(lt, "TopLeft"), b = i(lt, "TopCenter"), i(lt, "TopRight")), i(lt, !1, "clear:left").append(x = i(lt, "MiddleLeft"), w, C = i(lt, "MiddleRight")), i(lt, !1, "clear:left").append(i(lt, "BottomLeft"), k = i(lt, "BottomCenter"), i(lt, "BottomRight"))).find("div div").css({
                    "float": "left"
                }), P = i(lt, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), j = D.add(_).add(I).add(A), e(t.body).append(m, v.append(y, P)))
            }

            function f() {
                function n(e) {
                    e.which > 1 || e.shiftKey || e.altKey || e.metaKey || e.ctrlKey || (e.preventDefault(), h(this))
                }
                return v ? (K || (K = !0, D.click(function() {
                    Y.next()
                }), _.click(function() {
                    Y.prev()
                }), N.click(function() {
                    Y.close()
                }), m.click(function() {
                    z.overlayClose && Y.close()
                }), e(t).bind("keydown." + J, function(e) {
                    var t = e.keyCode;
                    q && z.escKey && 27 === t && (e.preventDefault(), Y.close()), q && z.arrowKey && $[1] && !e.altKey && (37 === t ? (e.preventDefault(), _.click()) : 39 === t && (e.preventDefault(), D.click()))
                }), e.isFunction(e.fn.on) ? e(t).on("click." + J, "." + et, n) : e("." + et).live("click." + J, n)), !0) : !1
            }

            function g() {
                var o, r, c, h = Y.prep,
                    d = ++ct;
                X = !0, R = !1, F = $[B], u(), p(at), p(nt, z.onLoad), z.h = z.height ? a(z.height, "y") - W - L : z.innerHeight && a(z.innerHeight, "y"), z.w = z.width ? a(z.width, "x") - H - O : z.innerWidth && a(z.innerWidth, "x"), z.mw = z.w, z.mh = z.h, z.maxWidth && (z.mw = a(z.maxWidth, "x") - H - O, z.mw = z.w && z.w < z.mw ? z.w : z.mw), z.maxHeight && (z.mh = a(z.maxHeight, "y") - W - L, z.mh = z.h && z.h < z.mh ? z.h : z.mh), o = z.href, V = setTimeout(function() {
                    E.show()
                }, 100), z.inline ? (c = i(lt).hide().insertBefore(e(o)[0]), st.one(at, function() {
                    c.replaceWith(S.children())
                }), h(e(o))) : z.iframe ? h(" ") : z.html ? h(z.html) : s(z, o) ? (o = l(z, o), R = t.createElement("img"), e(R).addClass(J + "Photo").bind("error", function() {
                    z.title = !1, h(i(lt, "Error").html(z.imgError))
                }).one("load", function() {
                    var t;
                    d === ct && (e.each(["alt", "longdesc", "aria-describedby"], function(t, n) {
                        var i = e(F).attr(n) || e(F).attr("data-" + n);
                        i && R.setAttribute(n, i)
                    }), z.retinaImage && n.devicePixelRatio > 1 && (R.height = R.height / n.devicePixelRatio, R.width = R.width / n.devicePixelRatio), z.scalePhotos && (r = function() {
                        R.height -= R.height * t, R.width -= R.width * t
                    }, z.mw && R.width > z.mw && (t = (R.width - z.mw) / R.width, r()), z.mh && R.height > z.mh && (t = (R.height - z.mh) / R.height, r())), z.h && (R.style.marginTop = Math.max(z.mh - R.height, 0) / 2 + "px"), $[1] && (z.loop || $[B + 1]) && (R.style.cursor = "pointer", R.onclick = function() {
                        Y.next()
                    }), R.style.width = R.width + "px", R.style.height = R.height + "px", setTimeout(function() {
                        h(R)
                    }, 1))
                }), setTimeout(function() {
                    R.src = o
                }, 1)) : o && P.load(o, z.data, function(t, n) {
                    d === ct && h("error" === n ? i(lt, "Error").html(z.xhrError) : e(this).contents())
                })
            }
            var m, v, y, w, b, x, C, k, $, T, S, P, E, M, I, A, D, _, N, j, z, L, O, W, H, F, B, R, q, X, U, V, Y, G, K, Q = {
                    html: !1,
                    photo: !1,
                    iframe: !1,
                    inline: !1,
                    transition: "elastic",
                    speed: 300,
                    fadeOut: 300,
                    width: !1,
                    initialWidth: "600",
                    innerWidth: !1,
                    maxWidth: !1,
                    height: !1,
                    initialHeight: "450",
                    innerHeight: !1,
                    maxHeight: !1,
                    scalePhotos: !0,
                    scrolling: !0,
                    href: !1,
                    title: !1,
                    rel: !1,
                    opacity: .9,
                    preloading: !0,
                    className: !1,
                    overlayClose: !0,
                    escKey: !0,
                    arrowKey: !0,
                    top: !1,
                    bottom: !1,
                    left: !1,
                    right: !1,
                    fixed: !1,
                    data: void 0,
                    closeButton: !0,
                    fastIframe: !0,
                    open: !1,
                    reposition: !0,
                    loop: !0,
                    slideshow: !1,
                    slideshowAuto: !0,
                    slideshowSpeed: 2500,
                    slideshowStart: "start slideshow",
                    slideshowStop: "stop slideshow",
                    photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
                    retinaImage: !1,
                    retinaUrl: !1,
                    retinaSuffix: "@2x.$1",
                    current: "image {current} of {total}",
                    previous: "previous",
                    next: "next",
                    close: "close",
                    xhrError: "This content failed to load.",
                    imgError: "This image failed to load.",
                    returnFocus: !0,
                    trapFocus: !0,
                    onOpen: !1,
                    onLoad: !1,
                    onComplete: !1,
                    onCleanup: !1,
                    onClosed: !1
                },
                Z = "colorbox",
                J = "cbox",
                et = J + "Element",
                tt = J + "_open",
                nt = J + "_load",
                it = J + "_complete",
                ot = J + "_cleanup",
                rt = J + "_closed",
                at = J + "_purge",
                st = e("<a/>"),
                lt = "div",
                ct = 0,
                ut = {},
                pt = function() {
                    function e() {
                        clearTimeout(a)
                    }

                    function t() {
                        (z.loop || $[B + 1]) && (e(), a = setTimeout(Y.next, z.slideshowSpeed))
                    }

                    function n() {
                        A.html(z.slideshowStop).unbind(l).one(l, i), st.bind(it, t).bind(nt, e), v.removeClass(s + "off").addClass(s + "on")
                    }

                    function i() {
                        e(), st.unbind(it, t).unbind(nt, e), A.html(z.slideshowStart).unbind(l).one(l, function() {
                            Y.next(), n()
                        }), v.removeClass(s + "on").addClass(s + "off")
                    }

                    function o() {
                        r = !1, A.hide(), e(), st.unbind(it, t).unbind(nt, e), v.removeClass(s + "off " + s + "on")
                    }
                    var r, a, s = J + "Slideshow_",
                        l = "click." + J;
                    return function() {
                        r ? z.slideshow || (st.unbind(ot, o), o()) : z.slideshow && $[1] && (r = !0, st.one(ot, o), z.slideshowAuto ? n() : i(), A.show())
                    }
                }();
            e.colorbox || (e(d), Y = e.fn[Z] = e[Z] = function(t, n) {
                var i = this;
                if (t = t || {}, d(), f()) {
                    if (e.isFunction(i)) i = e("<a/>"), t.open = !0;
                    else if (!i[0]) return i;
                    n && (t.onComplete = n), i.each(function() {
                        e.data(this, Z, e.extend({}, e.data(this, Z) || Q, t))
                    }).addClass(et), (e.isFunction(t.open) && t.open.call(i) || t.open) && h(i[0])
                }
                return i
            }, Y.position = function(t, n) {
                function i() {
                    b[0].style.width = k[0].style.width = w[0].style.width = parseInt(v[0].style.width, 10) - O + "px", w[0].style.height = x[0].style.height = C[0].style.height = parseInt(v[0].style.height, 10) - L + "px"
                }
                var r, s, l, c = 0,
                    u = 0,
                    p = v.offset();
                if (T.unbind("resize." + J), v.css({
                        top: -9e4,
                        left: -9e4
                    }), s = T.scrollTop(), l = T.scrollLeft(), z.fixed ? (p.top -= s, p.left -= l, v.css({
                        position: "fixed"
                    })) : (c = s, u = l, v.css({
                        position: "absolute"
                    })), u += z.right !== !1 ? Math.max(T.width() - z.w - H - O - a(z.right, "x"), 0) : z.left !== !1 ? a(z.left, "x") : Math.round(Math.max(T.width() - z.w - H - O, 0) / 2), c += z.bottom !== !1 ? Math.max(o() - z.h - W - L - a(z.bottom, "y"), 0) : z.top !== !1 ? a(z.top, "y") : Math.round(Math.max(o() - z.h - W - L, 0) / 2), v.css({
                        top: p.top,
                        left: p.left,
                        visibility: "visible"
                    }), y[0].style.width = y[0].style.height = "9999px", r = {
                        width: z.w + H + O,
                        height: z.h + W + L,
                        top: c,
                        left: u
                    }, t) {
                    var h = 0;
                    e.each(r, function(e) {
                        return r[e] !== ut[e] ? (h = t, void 0) : void 0
                    }), t = h
                }
                ut = r, t || v.css(r), v.dequeue().animate(r, {
                    duration: t || 0,
                    complete: function() {
                        i(), X = !1, y[0].style.width = z.w + H + O + "px", y[0].style.height = z.h + W + L + "px", z.reposition && setTimeout(function() {
                            T.bind("resize." + J, Y.position)
                        }, 1), n && n()
                    },
                    step: i
                })
            }, Y.resize = function(e) {
                var t;
                q && (e = e || {}, e.width && (z.w = a(e.width, "x") - H - O), e.innerWidth && (z.w = a(e.innerWidth, "x")), S.css({
                    width: z.w
                }), e.height && (z.h = a(e.height, "y") - W - L), e.innerHeight && (z.h = a(e.innerHeight, "y")), e.innerHeight || e.height || (t = S.scrollTop(), S.css({
                    height: "auto"
                }), z.h = S.height()), S.css({
                    height: z.h
                }), t && S.scrollTop(t), Y.position("none" === z.transition ? 0 : z.speed))
            }, Y.prep = function(n) {
                function o() {
                    return z.w = z.w || S.width(), z.w = z.mw && z.mw < z.w ? z.mw : z.w, z.w
                }

                function a() {
                    return z.h = z.h || S.height(), z.h = z.mh && z.mh < z.h ? z.mh : z.h, z.h
                }
                if (q) {
                    var c, u = "none" === z.transition ? 0 : z.speed;
                    S.empty().remove(), S = i(lt, "LoadedContent").append(n), S.hide().appendTo(P.show()).css({
                        width: o(),
                        overflow: z.scrolling ? "auto" : "hidden"
                    }).css({
                        height: a()
                    }).prependTo(w), P.hide(), e(R).css({
                        "float": "none"
                    }), c = function() {
                        function n() {
                            e.support.opacity === !1 && v[0].style.removeAttribute("filter")
                        }
                        var o, a, c = $.length,
                            h = "frameBorder",
                            d = "allowTransparency";
                        q && (a = function() {
                            clearTimeout(V), E.hide(), p(it, z.onComplete)
                        }, M.html(z.title).add(S).show(), c > 1 ? ("string" == typeof z.current && I.html(z.current.replace("{current}", B + 1).replace("{total}", c)).show(), D[z.loop || c - 1 > B ? "show" : "hide"]().html(z.next), _[z.loop || B ? "show" : "hide"]().html(z.previous), pt(), z.preloading && e.each([r(-1), r(1)], function() {
                            var n, i, o = $[this],
                                r = e.data(o, Z);
                            r && r.href ? (n = r.href, e.isFunction(n) && (n = n.call(o))) : n = e(o).attr("href"), n && s(r, n) && (n = l(r, n), i = t.createElement("img"), i.src = n)
                        })) : j.hide(), z.iframe ? (o = i("iframe")[0], h in o && (o[h] = 0), d in o && (o[d] = "true"), z.scrolling || (o.scrolling = "no"), e(o).attr({
                            src: z.href,
                            name: (new Date).getTime(),
                            "class": J + "Iframe",
                            allowFullScreen: !0,
                            webkitAllowFullScreen: !0,
                            mozallowfullscreen: !0
                        }).one("load", a).appendTo(S), st.one(at, function() {
                            o.src = "//web.archive.org/web/20140521175333/http://about:blank"
                        }), z.fastIframe && e(o).trigger("load")) : a(), "fade" === z.transition ? v.fadeTo(u, 1, n) : n())
                    }, "fade" === z.transition ? v.fadeTo(u, 0, function() {
                        Y.position(0, c)
                    }) : Y.position(u, c)
                }
            }, Y.next = function() {
                !X && $[1] && (z.loop || $[B + 1]) && (B = r(1), h($[B]))
            }, Y.prev = function() {
                !X && $[1] && (z.loop || B) && (B = r(-1), h($[B]))
            }, Y.close = function() {
                q && !U && (U = !0, q = !1, p(ot, z.onCleanup), T.unbind("." + J), m.fadeTo(z.fadeOut || 0, 0), v.stop().fadeTo(z.fadeOut || 0, 0, function() {
                    v.add(m).css({
                        opacity: 1,
                        cursor: "auto"
                    }).hide(), p(at), S.empty().remove(), setTimeout(function() {
                        U = !1, p(rt, z.onClosed)
                    }, 1)
                }))
            }, Y.remove = function() {
                v && (v.stop(), e.colorbox.close(), v.stop().remove(), m.remove(), U = !1, v = null, e("." + et).removeData(Z).removeClass(et), e(t).unbind("click." + J))
            }, Y.element = function() {
                return e(F)
            }, Y.settings = Q)
        }(jQuery, document, window),
        function(e, t) {
            "$:nomunge";
            var n, i = e.jQuery || e.Cowboy || (e.Cowboy = {});
            i.throttle = n = function(e, n, o, r) {
                function a() {
                    function i() {
                        l = +new Date, o.apply(c, p)
                    }

                    function a() {
                        s = t
                    }
                    var c = this,
                        u = +new Date - l,
                        p = arguments;
                    r && !s && i(), s && clearTimeout(s), r === t && u > e ? i() : n !== !0 && (s = setTimeout(r ? a : i, r === t ? e - u : e))
                }
                var s, l = 0;
                return "boolean" != typeof n && (r = o, o = n, n = t), i.guid && (a.guid = o.guid = o.guid || i.guid++), a
            }, i.debounce = function(e, i, o) {
                return o === t ? n(e, i, !1) : n(e, o, i !== !1)
            }
        }(this),
        function(e) {
            e.fn.customScrollbar = function(t, n) {
                var i = {
                        skin: void 0,
                        hScroll: !0,
                        vScroll: !0,
                        updateOnWindowResize: !1,
                        animationSpeed: 300,
                        onCustomScroll: void 0,
                        swipeSpeed: 1,
                        wheelSpeed: 40,
                        fixedThumbWidth: void 0,
                        fixedThumbHeight: void 0,
                        preventDefaultScroll: !1
                    },
                    o = function(t, n) {
                        this.$element = e(t), this.options = n, this.addScrollableClass(), this.addSkinClass(), this.addScrollBarComponents(), this.options.vScroll && (this.vScrollbar = new r(this, new s)), this.options.hScroll && (this.hScrollbar = new r(this, new a)), this.$element.data("scrollable", this), this.initKeyboardScrolling(), this.bindEvents()
                    };
                o.prototype = {
                    addScrollableClass: function() {
                        this.$element.hasClass("scrollable") || (this.scrollableAdded = !0, this.$element.addClass("scrollable"))
                    },
                    removeScrollableClass: function() {
                        this.scrollableAdded && this.$element.removeClass("scrollable")
                    },
                    addSkinClass: function() {
                        "string" != typeof this.options.skin || this.$element.hasClass(this.options.skin) || (this.skinClassAdded = !0, this.$element.addClass(this.options.skin))
                    },
                    removeSkinClass: function() {
                        this.skinClassAdded && this.$element.removeClass(this.options.skin)
                    },
                    addScrollBarComponents: function() {
                        this.assignViewPort(), 0 == this.$viewPort.length && (this.$element.wrapInner('<div class="viewport" />'), this.assignViewPort(), this.viewPortAdded = !0), this.assignOverview(), 0 == this.$overview.length && (this.$viewPort.wrapInner('<div class="overview" />'), this.assignOverview(), this.overviewAdded = !0), this.addScrollBar("vertical", "prepend"), this.addScrollBar("horizontal", "append")
                    },
                    removeScrollbarComponents: function() {
                        this.removeScrollbar("vertical"), this.removeScrollbar("horizontal"), this.overviewAdded && this.$element.unwrap(), this.viewPortAdded && this.$element.unwrap()
                    },
                    removeScrollbar: function(e) {
                        this[e + "ScrollbarAdded"] && this.$element.find(".scroll-bar." + e).remove()
                    },
                    assignViewPort: function() {
                        this.$viewPort = this.$element.find(".viewport")
                    },
                    assignOverview: function() {
                        this.$overview = this.$viewPort.find(".overview")
                    },
                    addScrollBar: function(e, t) {
                        0 == this.$element.find(".scroll-bar." + e).length && (this.$element[t]("<div class='scroll-bar " + e + "'><div class='thumb'></div></div>"), this[e + "ScrollbarAdded"] = !0)
                    },
                    resize: function(e) {
                        this.vScrollbar && this.vScrollbar.resize(e), this.hScrollbar && this.hScrollbar.resize(e)
                    },
                    scrollTo: function(e) {
                        this.vScrollbar && this.vScrollbar.scrollToElement(e), this.hScrollbar && this.hScrollbar.scrollToElement(e)
                    },
                    scrollToXY: function(e, t) {
                        this.scrollToX(e), this.scrollToY(t)
                    },
                    scrollToX: function(e) {
                        this.hScrollbar && this.hScrollbar.scrollOverviewTo(e, !0)
                    },
                    scrollToY: function(e) {
                        this.vScrollbar && this.vScrollbar.scrollOverviewTo(e, !0)
                    },
                    remove: function() {
                        this.removeScrollableClass(), this.removeSkinClass(), this.removeScrollbarComponents(), this.$element.data("scrollable", null), this.removeKeyboardScrolling(), this.vScrollbar && this.vScrollbar.remove(), this.hScrollbar && this.hScrollbar.remove()
                    },
                    setAnimationSpeed: function(e) {
                        this.options.animationSpeed = e
                    },
                    isInside: function(t, n) {
                        var i = e(t),
                            o = e(n),
                            r = i.offset(),
                            a = o.offset();
                        return r.top >= a.top && r.left >= a.left && r.top + i.height() <= a.top + o.height() && r.left + i.width() <= a.left + o.width()
                    },
                    initKeyboardScrolling: function() {
                        var e = this;
                        this.elementKeydown = function(t) {
                            document.activeElement === e.$element[0] && (e.vScrollbar && e.vScrollbar.keyScroll(t), e.hScrollbar && e.hScrollbar.keyScroll(t))
                        }, this.$element.attr("tabindex", "-1").keydown(this.elementKeydown)
                    },
                    removeKeyboardScrolling: function() {
                        this.$element.removeAttr("tabindex").unbind("keydown", this.elementKeydown)
                    },
                    bindEvents: function() {
                        this.options.onCustomScroll && this.$element.on("customScroll", this.options.onCustomScroll)
                    }
                };
                var r = function(e, t) {
                    this.scrollable = e, this.sizing = t, this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element), this.$thumb = this.$scrollBar.find(".thumb"), this.setScrollPosition(0, 0), this.resize(), this.initMouseMoveScrolling(), this.initMouseWheelScrolling(), this.initTouchScrolling(), this.initMouseClickScrolling(), this.initWindowResize()
                };
                r.prototype = {
                    resize: function(e) {
                        this.scrollable.$viewPort.height(this.scrollable.$element.height()), this.sizing.size(this.scrollable.$viewPort, this.sizing.size(this.scrollable.$element)), this.viewPortSize = this.sizing.size(this.scrollable.$viewPort), this.overviewSize = this.sizing.size(this.scrollable.$overview), this.ratio = this.viewPortSize / this.overviewSize, this.sizing.size(this.$scrollBar, this.viewPortSize), this.thumbSize = this.calculateThumbSize(), this.sizing.size(this.$thumb, this.thumbSize), this.maxThumbPosition = this.calculateMaxThumbPosition(), this.maxOverviewPosition = this.calculateMaxOverviewPosition(), this.enabled = this.overviewSize > this.viewPortSize, void 0 === this.scrollPercent && (this.scrollPercent = 0), this.enabled ? this.rescroll(e) : this.setScrollPosition(0, 0), this.$scrollBar.toggle(this.enabled)
                    },
                    calculateThumbSize: function() {
                        var e, t = this.sizing.fixedThumbSize(this.scrollable.options);
                        return e = t ? t : this.ratio * this.viewPortSize, Math.max(e, this.sizing.minSize(this.$thumb))
                    },
                    initMouseMoveScrolling: function() {
                        var t = this;
                        this.$thumb.mousedown(function(e) {
                            t.enabled && t.startMouseMoveScrolling(e)
                        }), this.documentMouseup = function(e) {
                            t.stopMouseMoveScrolling(e)
                        }, e(document).mouseup(this.documentMouseup), this.documentMousemove = function(e) {
                            t.mouseMoveScroll(e)
                        }, e(document).mousemove(this.documentMousemove), this.$thumb.click(function(e) {
                            e.stopPropagation()
                        })
                    },
                    removeMouseMoveScrolling: function() {
                        this.$thumb.unbind(), e(document).unbind("mouseup", this.documentMouseup), e(document).unbind("mousemove", this.documentMousemove)
                    },
                    initMouseWheelScrolling: function() {
                        var e = this;
                        this.scrollable.$element.mousewheel(function(t, n, i, o) {
                            if (e.enabled) {
                                var r = e.mouseWheelScroll(i, o);
                                e.stopEventConditionally(t, r)
                            }
                        })
                    },
                    removeMouseWheelScrolling: function() {
                        this.scrollable.$element.unbind("mousewheel")
                    },
                    initTouchScrolling: function() {
                        if (document.addEventListener) {
                            var e = this;
                            this.elementTouchstart = function(t) {
                                e.enabled && e.startTouchScrolling(t)
                            }, this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart), this.documentTouchmove = function(t) {
                                e.touchScroll(t)
                            }, document.addEventListener("touchmove", this.documentTouchmove), this.elementTouchend = function(t) {
                                e.stopTouchScrolling(t)
                            }, this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend)
                        }
                    },
                    removeTouchScrolling: function() {
                        document.addEventListener && (this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart), document.removeEventListener("touchmove", this.documentTouchmove), this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend))
                    },
                    initMouseClickScrolling: function() {
                        var e = this;
                        this.scrollBarClick = function(t) {
                            e.mouseClickScroll(t)
                        }, this.$scrollBar.click(this.scrollBarClick)
                    },
                    removeMouseClickScrolling: function() {
                        this.$scrollBar.unbind("click", this.scrollBarClick)
                    },
                    initWindowResize: function() {
                        if (this.scrollable.options.updateOnWindowResize) {
                            var t = this;
                            this.windowResize = function() {
                                t.resize()
                            }, e(window).resize(this.windowResize)
                        }
                    },
                    removeWindowResize: function() {
                        e(window).unbind("resize", this.windowResize)
                    },
                    isKeyScrolling: function(e) {
                        return null != this.keyScrollDelta(e)
                    },
                    keyScrollDelta: function(e) {
                        for (var t in this.sizing.scrollingKeys)
                            if (t == e) return this.sizing.scrollingKeys[e](this.viewPortSize);
                        return null
                    },
                    startMouseMoveScrolling: function(t) {
                        this.mouseMoveScrolling = !0, e("html").addClass("not-selectable"), this.setUnselectable(e("html"), "on"), this.setScrollEvent(t)
                    },
                    stopMouseMoveScrolling: function() {
                        this.mouseMoveScrolling = !1, e("html").removeClass("not-selectable"), this.setUnselectable(e("html"), null)
                    },
                    setUnselectable: function(e, t) {
                        e.attr("unselectable") != t && (e.attr("unselectable", t), e.find(":not(input)").attr("unselectable", t))
                    },
                    mouseMoveScroll: function(e) {
                        if (this.mouseMoveScrolling) {
                            var t = this.sizing.mouseDelta(this.scrollEvent, e);
                            this.scrollThumbBy(t), this.setScrollEvent(e)
                        }
                    },
                    startTouchScrolling: function(e) {
                        e.touches && 1 == e.touches.length && (this.setScrollEvent(e.touches[0]), this.touchScrolling = !0, e.stopPropagation())
                    },
                    touchScroll: function(e) {
                        if (this.touchScrolling && e.touches && 1 == e.touches.length) {
                            var t = -this.sizing.mouseDelta(this.scrollEvent, e.touches[0]) * this.scrollable.options.swipeSpeed,
                                n = this.scrollOverviewBy(t);
                            n && this.setScrollEvent(e.touches[0]), this.stopEventConditionally(e, n)
                        }
                    },
                    stopTouchScrolling: function(e) {
                        this.touchScrolling = !1, e.stopPropagation()
                    },
                    mouseWheelScroll: function(e, t) {
                        var n = -this.sizing.wheelDelta(e, t) * this.scrollable.options.wheelSpeed;
                        return 0 != n ? this.scrollOverviewBy(n) : void 0
                    },
                    mouseClickScroll: function(e) {
                        var t = this.viewPortSize - 20;
                        e["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()] && (t = -t), this.scrollOverviewBy(t)
                    },
                    keyScroll: function(e) {
                        var t = e.which;
                        if (this.enabled && this.isKeyScrolling(t)) {
                            var n = this.scrollOverviewBy(this.keyScrollDelta(t));
                            this.stopEventConditionally(e, n)
                        }
                    },
                    scrollThumbBy: function(e) {
                        var t = this.thumbPosition();
                        t += e, t = this.positionOrMax(t, this.maxThumbPosition);
                        var n = this.scrollPercent;
                        if (this.scrollPercent = t / this.maxThumbPosition, n != this.scrollPercent) {
                            var i = t * this.maxOverviewPosition / this.maxThumbPosition;
                            return this.setScrollPosition(i, t), this.triggerCustomScroll(n), !0
                        }
                        return !1
                    },
                    thumbPosition: function() {
                        return this.$thumb.position()[this.sizing.offsetComponent()]
                    },
                    scrollOverviewBy: function(e) {
                        var t = this.overviewPosition() + e;
                        return this.scrollOverviewTo(t, !1)
                    },
                    overviewPosition: function() {
                        return -this.scrollable.$overview.position()[this.sizing.offsetComponent()]
                    },
                    scrollOverviewTo: function(e, t) {
                        e = this.positionOrMax(e, this.maxOverviewPosition);
                        var n = this.scrollPercent;
                        if (this.scrollPercent = e / this.maxOverviewPosition, n != this.scrollPercent) {
                            var i = this.scrollPercent * this.maxThumbPosition;
                            return t ? this.setScrollPositionWithAnimation(e, i) : this.setScrollPosition(e, i), this.triggerCustomScroll(n), !0
                        }
                        return !1
                    },
                    positionOrMax: function(e, t) {
                        return 0 > e ? 0 : e > t ? t : e
                    },
                    triggerCustomScroll: function(e) {
                        this.scrollable.$element.trigger("customScroll", {
                            scrollAxis: this.sizing.scrollAxis(),
                            direction: this.sizing.scrollDirection(e, this.scrollPercent),
                            scrollPercent: 100 * this.scrollPercent
                        })
                    },
                    rescroll: function(e) {
                        if (e) {
                            var t = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
                            this.scrollPercent = t / this.maxOverviewPosition;
                            var n = this.scrollPercent * this.maxThumbPosition;
                            this.setScrollPosition(t, n)
                        } else {
                            var n = this.scrollPercent * this.maxThumbPosition,
                                t = this.scrollPercent * this.maxOverviewPosition;
                            this.setScrollPosition(t, n)
                        }
                    },
                    setScrollPosition: function(e, t) {
                        this.$thumb.css(this.sizing.offsetComponent(), t + "px"), this.scrollable.$overview.css(this.sizing.offsetComponent(), -e + "px")
                    },
                    setScrollPositionWithAnimation: function(e, t) {
                        var n = {},
                            i = {};
                        n[this.sizing.offsetComponent()] = t + "px", this.$thumb.animate(n, this.scrollable.options.animationSpeed), i[this.sizing.offsetComponent()] = -e + "px", this.scrollable.$overview.animate(i, this.scrollable.options.animationSpeed)
                    },
                    calculateMaxThumbPosition: function() {
                        return Math.max(0, this.sizing.size(this.$scrollBar) - this.thumbSize)
                    },
                    calculateMaxOverviewPosition: function() {
                        return Math.max(0, this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort))
                    },
                    setScrollEvent: function(e) {
                        var t = "page" + this.sizing.scrollAxis();
                        this.scrollEvent && this.scrollEvent[t] == e[t] || (this.scrollEvent = {
                            pageX: e.pageX,
                            pageY: e.pageY
                        })
                    },
                    scrollToElement: function(t) {
                        var n = e(t);
                        if (this.sizing.isInside(n, this.scrollable.$overview) && !this.sizing.isInside(n, this.scrollable.$viewPort)) {
                            var i = n.offset(),
                                o = this.scrollable.$overview.offset();
                            this.scrollable.$viewPort.offset(), this.scrollOverviewTo(i[this.sizing.offsetComponent()] - o[this.sizing.offsetComponent()], !0)
                        }
                    },
                    remove: function() {
                        this.removeMouseMoveScrolling(), this.removeMouseWheelScrolling(), this.removeTouchScrolling(), this.removeMouseClickScrolling(), this.removeWindowResize()
                    },
                    stopEventConditionally: function(e, t) {
                        (t || this.scrollable.options.preventDefaultScroll) && (e.preventDefault(), e.stopPropagation())
                    }
                };
                var a = function() {};
                a.prototype = {
                    size: function(e, t) {
                        return t ? e.width(t) : e.width()
                    },
                    minSize: function(e) {
                        return parseInt(e.css("min-width")) || 0
                    },
                    fixedThumbSize: function(e) {
                        return e.fixedThumbWidth
                    },
                    scrollBar: function(e) {
                        return e.find(".scroll-bar.horizontal")
                    },
                    mouseDelta: function(e, t) {
                        return t.pageX - e.pageX
                    },
                    offsetComponent: function() {
                        return "left"
                    },
                    wheelDelta: function(e) {
                        return e
                    },
                    scrollAxis: function() {
                        return "X"
                    },
                    scrollDirection: function(e, t) {
                        return t > e ? "right" : "left"
                    },
                    scrollingKeys: {
                        37: function() {
                            return -10
                        },
                        39: function() {
                            return 10
                        }
                    },
                    isInside: function(t, n) {
                        var i = e(t),
                            o = e(n),
                            r = i.offset(),
                            a = o.offset();
                        return r.left >= a.left && r.left + i.width() <= a.left + o.width()
                    }
                };
                var s = function() {};
                return s.prototype = {
                    size: function(e, t) {
                        return t ? e.height(t) : e.height()
                    },
                    minSize: function(e) {
                        return parseInt(e.css("min-height")) || 0
                    },
                    fixedThumbSize: function(e) {
                        return e.fixedThumbHeight
                    },
                    scrollBar: function(e) {
                        return e.find(".scroll-bar.vertical")
                    },
                    mouseDelta: function(e, t) {
                        return t.pageY - e.pageY
                    },
                    offsetComponent: function() {
                        return "top"
                    },
                    wheelDelta: function(e, t) {
                        return t
                    },
                    scrollAxis: function() {
                        return "Y"
                    },
                    scrollDirection: function(e, t) {
                        return t > e ? "down" : "up"
                    },
                    scrollingKeys: {
                        38: function() {
                            return -10
                        },
                        40: function() {
                            return 10
                        },
                        33: function(e) {
                            return -(e - 20)
                        },
                        34: function(e) {
                            return e - 20
                        }
                    },
                    isInside: function(t, n) {
                        var i = e(t),
                            o = e(n),
                            r = i.offset(),
                            a = o.offset();
                        return r.top >= a.top && r.top + i.height() <= a.top + o.height()
                    }
                }, this.each(function() {
                    if (void 0 == t && (t = i), "string" == typeof t) {
                        var r = e(this).data("scrollable");
                        r && r[t](n)
                    } else {
                        if ("object" != typeof t) throw "Invalid type of options";
                        t = e.extend(i, t), new o(e(this), t)
                    }
                })
            }
        }(jQuery),
        function(e) {
            function t(t) {
                var n = t || window.event,
                    i = [].slice.call(arguments, 1),
                    o = 0,
                    r = 0,
                    a = 0;
                return t = e.event.fix(n), t.type = "mousewheel", n.wheelDelta && (o = n.wheelDelta / 120), n.detail && (o = -n.detail / 3), a = o, void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (a = 0, r = o), void 0 !== n.wheelDeltaY && (a = n.wheelDeltaY / 120), void 0 !== n.wheelDeltaX && (r = n.wheelDeltaX / 120), i.unshift(t, o, r, a), (e.event.dispatch || e.event.handle).apply(this, i)
            }
            var n = ["DOMMouseScroll", "mousewheel"];
            if (e.event.fixHooks)
                for (var i = n.length; i;) e.event.fixHooks[n[--i]] = e.event.mouseHooks;
            e.event.special.mousewheel = {
                setup: function() {
                    if (this.addEventListener)
                        for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
                    else this.onmousewheel = t
                },
                teardown: function() {
                    if (this.removeEventListener)
                        for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
                    else this.onmousewheel = null
                }
            }, e.fn.extend({
                mousewheel: function(e) {
                    return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
                },
                unmousewheel: function(e) {
                    return this.unbind("mousewheel", e)
                }
            })
        }(jQuery),
        function(e) {
            "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
        }(function(e) {
            function t(e) {
                return s.raw ? e : encodeURIComponent(e)
            }

            function n(e) {
                return s.raw ? e : decodeURIComponent(e)
            }

            function i(e) {
                return t(s.json ? JSON.stringify(e) : String(e))
            }

            function o(e) {
                0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return e = decodeURIComponent(e.replace(a, " ")), s.json ? JSON.parse(e) : e
                } catch (t) {}
            }

            function r(t, n) {
                var i = s.raw ? t : o(t);
                return e.isFunction(n) ? n(i) : i
            }
            var a = /\+/g,
                s = e.cookie = function(o, a, l) {
                    if (void 0 !== a && !e.isFunction(a)) {
                        if (l = e.extend({}, s.defaults, l), "number" == typeof l.expires) {
                            var c = l.expires,
                                u = l.expires = new Date;
                            u.setTime(+u + 864e5 * c)
                        }
                        return document.cookie = [t(o), "=", i(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                    }
                    for (var p = o ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], d = 0, f = h.length; f > d; d++) {
                        var g = h[d].split("="),
                            m = n(g.shift()),
                            v = g.join("=");
                        if (o && o === m) {
                            p = r(v, a);
                            break
                        }
                        o || void 0 === (v = r(v)) || (p[m] = v)
                    }
                    return p
                };
            s.defaults = {}, e.removeCookie = function(t, n) {
                return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
                    expires: -1
                })), !e.cookie(t))
            }
        }),
        function() {
            window.lazyLoadBrochurePages = function() {
                return $("img[data-lazy-src]").each(function() {
                    return $(this).attr("src", $(this).data("lazy-src")), $(this).attr("data-lazy-src", null)
                })
            }, window.setButtons = function() {
                return $(".brochure-viewer").length ? ($(".brochure-viewer").on("click", ".jump-to-first", function(e) {
                    return analytics.track("Arrow-First", {
                        category: "BrochureInteraction"
                    }), e.preventDefault(), $(this).hasClass("disabled") ? !1 : $(this).closest(".brochure-viewer").find(".pages").turn("page", 1)
                }), $(".brochure-viewer").on("click", ".jump-to-last", function(e) {
                    var t;
                    return analytics.track("Arrow-Last", {
                        category: "BrochureInteraction"
                    }), e.preventDefault(), $(this).hasClass("disabled") ? !1 : (t = $(this).closest(".brochure-viewer").find(".pages"), t.turn("page", t.turn("pages")))
                }), $(".brochure-viewer").on("click", ".next", function(e) {
                    return analytics.track("Arrow-Next", {
                        category: "BrochureInteraction"
                    }), e.preventDefault(), $(this).hasClass("disabled") ? !1 : $(this).closest(".brochure-viewer").find(".pages").turn("next")
                }), $(".brochure-viewer").on("click", ".previous", function(e) {
                    return analytics.track("Arrow-Previous", {
                        category: "BrochureInteraction"
                    }), e.preventDefault(), $(this).hasClass("disabled") ? !1 : $(this).closest(".brochure-viewer").find(".pages").turn("previous")
                })) : void 0
            }, jQuery(function() {
                return setButtons()
            })
        }.call(this),
        function() {
            var e;
            window.Map = e = function() {
                function e() {
                    var e = this;
                    return this.$canvas = $("#map-canvas"), this.$controls = $(".map-controls"), this._setupControls(), void 0 !== window.google && 0 !== this.$canvas.length && (this.enabled = !0, this.googleMap = new google.maps.Map(this.$canvas[0], this.MAP_OPTIONS), $(window).on("load resize", function() {
                        return e.autoResize()
                    })), this
                }
                return e.prototype.enabled = !1, e.prototype.markers = [], e.prototype.center = null, e.prototype.MAP_OPTIONS = {
                    zoom: 15,
                    center: new google.maps.LatLng(48.2087105, 16.372654),
                    disableDefaultUI: !0,
                    scrollwheel: !1,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                }, e.prototype.setMarkers = function(e) {
                    var t, n, i, o, r, a, s, l;
                    for (i = new google.maps.InfoWindow, l = [], a = 0, s = e.length; s > a; a++) o = e[a], n = o.brochure_id ? 320 : 200, t = '<div style="width:' + n + 'px;height:150px"><div style="float:left">', null != o.merchant_logo_uri && (t += '<img src="' + o.merchant_logo_uri + '">'), t += "<p><br>" + o.shop_zip + " " + o.shop_city + "<br>" + o.shop_address + '</p><a class="solo-link" style="font-weight:bold" href="/filialen/' + o.city + "/" + o.merchant_slug + "/" + o.address_slug + "/o-" + o.shop_id + '">Details&Öffnungszeiten</a></div>', null != o.brochure_id && (t += '<div style="float:right;"><a href="/prospekt/angebote/' + o.merchant_slug + "/" + o.brochure_id + '/1"><img src="' + o.brochure_link + '"></img></a></div>'), t += "</div>", r = new google.maps.Marker({
                        position: new google.maps.LatLng(parseFloat(o.latitude), parseFloat(o.longitude)),
                        map: this.googleMap,
                        icon: o.uri,
                        info: t
                    }), this.markers.push(r), l.push(google.maps.event.addListener(r, "click", function() {
                        return i.setContent(this.info), i.open(this.map, this)
                    }));
                    return l
                }, e.prototype.setHomeMarker = function(e, t, n) {
                    var i;
                    return i = new google.maps.Marker({
                        position: new google.maps.LatLng(e, t),
                        map: this.googleMap,
                        icon: n
                    })
                }, e.prototype.setCenter = function(e, t) {
                    return this.googleMap.setCenter(new google.maps.LatLng(e, t)), this.center = {
                        latitude: e,
                        longitude: t
                    }
                }, e.prototype.setZoom = function(e) {
                    return "low" === e ? e = 12 : "medium" === e ? e = 14 : "high" === e && (e = 17), this.googleMap.setZoom(parseInt(e, 10))
                }, e.prototype.zoomIn = function() {
                    return this.googleMap.setZoom(this.googleMap.getZoom() + 1)
                }, e.prototype.zoomOut = function() {
                    return this.googleMap.setZoom(this.googleMap.getZoom() - 1)
                }, e.prototype.autoResize = function() {
                    return this.$canvas.height(this.$canvas.parent().height()), this.enabled && (google.maps.event.trigger(this.googleMap, "resize"), this.center) ? this.setCenter(this.center.latitude, this.center.longitude) : void 0
                }, e.prototype.resizeLandscape = function() {
                    var e = this;
                    return this.$canvas.hasClass("small") && (this.$canvas.parent().find(".map-overlay").hide(), this.cssOptions = {
                        marginTop: this.$canvas.css("marginTop"),
                        height: this.$canvas.css("height")
                    }, this.$canvas.animate({
                        marginTop: 0,
                        height: "100%"
                    }), $(".map-container").parent().toggleClass("col-sm-3 col-sm-12"), this.hideControls(), this._resizeMapHeight(340, "small landscape")), this.$canvas.hasClass("landscape") ? (this.hideControls(), this._resizeMapHeight(this.cssOptions.height, "small landscape", function() {
                        return $(".map-container").parent().toggleClass("col-sm-3 col-sm-12"), e.$canvas.animate({
                            marginTop: e.cssOptions.marginTop
                        }), e.$canvas.parent().find(".map-overlay").show()
                    })) : void 0
                }, e.prototype.resizePortrait = function() {
                    return this.$canvas.hasClass("medium") ? (this.cssOptions = {
                        height: this.$canvas.css("height")
                    }, this.hideControls(), this._resizeMapHeight(600, "medium portrait")) : this.$canvas.hasClass("portrait") ? (this.hideControls(), this._resizeMapHeight(this.cssOptions.height, "medium portrait")) : void 0
                }, e.prototype.showControls = function() {
                    return this.$controls.fadeIn()
                }, e.prototype.hideControls = function() {
                    return this.$controls.hide(), this.$controls.find(".resize").toggleClass("glyphicon-resize-full glyphicon-resize-small")
                }, e.prototype._setupControls = function() {
                    var e = this;
                    return this.$controls.on("click", ".zoom-in", function(t) {
                        return t.preventDefault(), e.zoomIn()
                    }), this.$controls.on("click", ".zoom-out", function(t) {
                        return t.preventDefault(), e.zoomOut()
                    })
                }, e.prototype._resizeMapHeight = function(e, t, n) {
                    var i = this;
                    return null == n && (n = null), this.$canvas.parent().animate({
                        height: e
                    }, function() {
                        return i.autoResize(), i.$canvas.toggleClass(t), i.showControls(), n ? n() : void 0
                    })
                }, e
            }()
        }.call(this),
        function() {
            var e;
            window.BoxedSlider = e = function() {
                function e(e) {
                    var t = this;
                    this.$rootElement = e, this.slideEndless = this.$rootElement.hasClass("endless"), this.$children = this.$rootElement.find(".items").children(), this.$container = this.$rootElement.find(".boxed-slider-container"), this.setupControls(), $(window).on("resize", function() {
                        return t.updateControlsVisibility()
                    }), $(window).on("load", function() {
                        return t.$rootElement.find(".items").children().css("float", "none"), t.$children.each(function(e, n) {
                            return t.childrenWidth += $(n).find("img").width() + parseInt($(n).css("marginRight"), 10)
                        }), t.updateContentWidth(t.childrenWidth, !0), t.slideEndless && t.isCloseToTheStart() && t.prependItems(), t.updateControlsVisibility(), t.$rootElement.find(".items").children().css("float", "left")
                    })
                }
                return e.prototype.childrenWidth = 0, e.prototype.contentWidth = 0, e.prototype.updateControlsVisibility = function() {
                    return this.$rootElement.find(".items").width() < this.$rootElement.width() ? this.$rootElement.find(".boxed-slider-nav").hide() : this.$rootElement.find(".boxed-slider-nav").show()
                }, e.prototype.appendItems = function() {
                    return this.$rootElement.find(".items").append(this.$children.clone()), this.updateContentWidth(this.contentWidth + this.childrenWidth)
                }, e.prototype.prependItems = function() {
                    return this.$rootElement.find(".items").prepend(this.$children.clone()), this.updateContentWidth(this.contentWidth + this.childrenWidth), this.$container.scrollLeft(this.currentScrollPosition + this.childrenWidth)
                }, e.prototype.isCloseToTheEnd = function() {
                    return this.currentScrollPosition = this.$container.scrollLeft(), this.contentWidth - 2 * this.$container.width() < this.currentScrollPosition
                }, e.prototype.isCloseToTheStart = function() {
                    return this.currentScrollPosition = this.$container.scrollLeft(), this.currentScrollPosition < this.$container.width()
                }, e.prototype.updateContentWidth = function(e, t) {
                    return null == t && (t = !1), this.contentWidth = e, this.$rootElement.find(".items").width(e + 2), t ? this.$container.scrollLeft(0) : void 0
                }, e.prototype.setupControls = function() {
                    var e = this;
                    return this.$rootElement.on("click", ".previous", function(t) {
                        return t.preventDefault(), e.$container.animate({
                            scrollLeft: "-=" + (e.$container.width() - 40)
                        }, function() {
                            return e.slideEndless && e.isCloseToTheStart() ? e.prependItems() : void 0
                        })
                    }), this.$rootElement.on("click", ".next", function(t) {
                        return t.preventDefault(), e.$container.animate({
                            scrollLeft: "+=" + (e.$container.width() - 40)
                        }, function() {
                            return e.slideEndless && e.isCloseToTheEnd() ? e.appendItems() : void 0
                        })
                    })
                }, e
            }()
        }.call(this),
        function() {
            var e;
            window.SearchTermCycle = e = function() {
                function e(e, t) {
                    var n = this;
                    return this.$input = e, this.words = t, this.$input.addClass("auto-cycle"), this.$input.on("focus", function() {
                        return n.stop()
                    }), this.$input.on("blur", function() {
                        return 0 === n.$input.val().length ? n.start() : void 0
                    }), this
                }
                return e.prototype.$input = null, e.prototype.words = null, e.prototype.timeout = null, e.prototype.loopTimeout = null, e.prototype.currentIndex = 0, e.prototype.enabled = !1, e.prototype.start = function(e) {
                    var t;
                    return null == e && (e = this.currentIndex), this.$input.addClass("auto-cycle"), e %= this.words.length, t = this.words[e], this.$input.val(""), this.type(t, t.length, 0, e)
                }, e.prototype.stop = function() {
                    return this.$input.hasClass("auto-cycle") && this.$input.val(""), clearTimeout(this.timeout), clearTimeout(this.loopTimeout), this.$input.removeClass("auto-cycle")
                }, e.prototype.type = function(e, t, n, i) {
                    var o = this;
                    return clearTimeout(this.timeout), this.timeout = setTimeout(function() {
                        var r;
                        return n++, r = e.substring(0, n), o.$input.val(r), o.type(e, t, n, i), n === t ? (o.currentIndex++, clearTimeout(o.loopTimeout), o.loopTimeout = setTimeout(function() {
                            return o.start()
                        }, 1e3)) : void 0
                    }, 150)
                }, e
            }()
        }.call(this),
        function() {
            jQuery(function() {
                var e, t, n;
                return n = function() {
                    var e;
                    return e = !1,
                        function(t) {
                            return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4)) ? e = !0 : void 0
                        }(navigator.userAgent || navigator.vendor || window.opera), e
                }, e = function() {
                    return navigator.userAgent.toLowerCase().indexOf("android") > -1
                }, t = function() {
                    return navigator.userAgent.toLowerCase().match(/(ipod|iphone|ipad)/)
                }, n() && (e() && $("#app-download-dialog").addClass("android"), t() && $("#app-download-dialog").addClass("ios"), $("#app-download-dialog").length > 0 && !$.cookie("viewed_app_download_dialog")) ? ($.colorbox({
                    href: "#app-download-dialog",
                    open: !0,
                    inline: !0,
                    opacity: .3,
                    returnFocus: !1,
                    width: 450,
                    maxWidth: "94%",
                    previous: "",
                    next: "",
                    onClosed: function() {
                        return $.cookie("viewed_app_download_dialog") ? void 0 : ($.cookie("viewed_app_download_dialog", !0, {
                            path: "/"
                        }), $("#app-download-dialog").hasClass("ios") ? analytics.track("Click-Overlay", {
                            category: "App",
                            label: "Close-iOS"
                        }) : $("#app-download-dialog").hasClass("android") ? analytics.track("Click-Overlay", {
                            category: "App",
                            label: "Close-Android"
                        }) : void 0)
                    },
                    onOpen: function() {
                        return $("#app-download-dialog").hasClass("ios") ? analytics.track("Open-Overlay", {
                            category: "App",
                            label: "Overlay-iOS"
                        }) : $("#app-download-dialog").hasClass("android") ? analytics.track("Open-Overlay", {
                            category: "App",
                            label: "Overlay-Android"
                        }) : void 0
                    }
                }), $("#app-download-dialog .close-overlay").on("click", function(e) {
                    return e.preventDefault(), $.colorbox.close()
                }), $("#app-download-dialog .go-to-appstore").on("click", function() {
                    return $.cookie("viewed_app_download_dialog", !0, {
                        path: "/"
                    }), $.colorbox.close()
                })) : void 0
            })
        }.call(this),
        function() {
            jQuery(function() {
                return $(".voting li").on("click", function() {
                    var e;
                    return e = parseInt($(".valuation-count").html(), 10) + 1, $(".valuation-count").html(e), $(".voting li").off("click")
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                var e;
                return $(".navbar-form, #search-form").on("submit", function() {
                    return 0 === $("#search-field").val().length ? !1 : void 0
                }), e = jQuery.debounce(250, function() {
                    return 0 === $("#search-field").val().length ? $(".autocomplete-dropdown").removeClass("open") : ($(".autocomplete-dropdown").removeClass("open"), $.ajax({
                        url: "/Suche",
                        type: "GET",
                        data: {
                            search_term: $("#search-field").val()
                        },
                        success: function(e) {
                            return $(".autocomplete-dropdown").addClass("open"), $(".autocomplete-dropdown").html(e)
                        }
                    }))
                }), $("#search-field").on("keyup", function(t) {
                    return 27 === t.keyCode || 13 === t.keyCode ? $(".autocomplete-dropdown").removeClass("open") : e()
                })
            })
        }.call(this),
        function(e) {
            "use strict";
            var t = function(e) {
                var t, n;
                t = Array.prototype.forEach, n = Array.prototype.map, this.each = function(e, n, i) {
                    if (null !== e)
                        if (t && e.forEach === t) e.forEach(n, i);
                        else if (e.length === +e.length) {
                        for (var o = 0, r = e.length; r > o; o++)
                            if (n.call(i, e[o], o, e) === {}) return
                    } else
                        for (var a in e)
                            if (e.hasOwnProperty(a) && n.call(i, e[a], a, e) === {}) return
                }, this.map = function(e, t, i) {
                    var o = [];
                    return null == e ? o : n && e.map === n ? e.map(t, i) : (this.each(e, function(e, n, r) {
                        o[o.length] = t.call(i, e, n, r)
                    }), o)
                }, "object" == typeof e ? (this.hasher = e.hasher, this.screen_resolution = e.screen_resolution, this.canvas = e.canvas, this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
            };
            t.prototype = {
                get: function() {
                    var e = [];
                    if (e.push(navigator.userAgent), e.push(navigator.language), e.push(screen.colorDepth), this.screen_resolution) {
                        var t = this.getScreenResolution();
                        "undefined" != typeof t && e.push(this.getScreenResolution().join("x"))
                    }
                    return e.push((new Date).getTimezoneOffset()), e.push(this.hasSessionStorage()), e.push(this.hasLocalStorage()), e.push(!!window.indexedDB), e.push(typeof document.body.addBehavior), e.push(typeof window.openDatabase), e.push(navigator.cpuClass), e.push(navigator.platform), e.push(navigator.doNotTrack), e.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
                },
                murmurhash3_32_gc: function(e, t) {
                    var n, i, o, r, a, s, l, c;
                    for (n = 3 & e.length, i = e.length - n, o = t, a = 3432918353, s = 461845907, c = 0; i > c;) l = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, l = 4294967295 & (65535 & l) * a + ((65535 & (l >>> 16) * a) << 16), l = l << 15 | l >>> 17, l = 4294967295 & (65535 & l) * s + ((65535 & (l >>> 16) * s) << 16), o ^= l, o = o << 13 | o >>> 19, r = 4294967295 & 5 * (65535 & o) + ((65535 & 5 * (o >>> 16)) << 16), o = (65535 & r) + 27492 + ((65535 & (r >>> 16) + 58964) << 16);
                    switch (l = 0, n) {
                        case 3:
                            l ^= (255 & e.charCodeAt(c + 2)) << 16;
                        case 2:
                            l ^= (255 & e.charCodeAt(c + 1)) << 8;
                        case 1:
                            l ^= 255 & e.charCodeAt(c), l = 4294967295 & (65535 & l) * a + ((65535 & (l >>> 16) * a) << 16), l = l << 15 | l >>> 17, l = 4294967295 & (65535 & l) * s + ((65535 & (l >>> 16) * s) << 16), o ^= l
                    }
                    return o ^= e.length, o ^= o >>> 16, o = 4294967295 & 2246822507 * (65535 & o) + ((65535 & 2246822507 * (o >>> 16)) << 16), o ^= o >>> 13, o = 4294967295 & 3266489909 * (65535 & o) + ((65535 & 3266489909 * (o >>> 16)) << 16), o ^= o >>> 16, o >>> 0
                },
                hasLocalStorage: function() {
                    try {
                        return !!e.localStorage
                    } catch (t) {
                        return !0
                    }
                },
                hasSessionStorage: function() {
                    try {
                        return !!e.sessionStorage
                    } catch (t) {
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
                    return this.isIE() ? this.getIEPluginsString() : this.getRegularPluginsString()
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
                    var t = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                    return this.ie_activex && e.ActiveXObject ? this.map(t, function(e) {
                        try {
                            return new ActiveXObject(e), e
                        } catch (t) {
                            return null
                        }
                    }).join(";") : ""
                },
                getScreenResolution: function() {
                    return [screen.height, screen.width]
                },
                getCanvasFingerprint: function() {
                    var e = document.createElement("canvas"),
                        t = e.getContext("2d"),
                        n = "https://web.archive.org/web/20140521175333/http://valve.github.io";
                    return t.textBaseline = "top", t.font = "14px 'Arial'", t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(125, 1, 62, 20), t.fillStyle = "#069", t.fillText(n, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.7)", t.fillText(n, 4, 17), e.toDataURL()
                }
            }, "object" == typeof module && "object" == typeof exports && (module.exports = t), e.Fingerprint = t
        }(window),
        function() {
            jQuery(function() {
                return analytics.trackLink($(".track-large-teaser-1"), "Large-Teaser-1", {
                    category: "Elements"
                }), analytics.trackLink($(".track-large-teaser-2"), "Large-Teaser-2", {
                    category: "Elements"
                }), analytics.trackLink($(".track-large-teaser-3"), "Large-Teaser-3", {
                    category: "Elements"
                }), analytics.trackLink($(".track-small-teaser-1"), "Small-Teaser-1", {
                    category: "Elements"
                }), analytics.trackLink($(".track-small-teaser-2"), "Small-Teaser-2", {
                    category: "Elements"
                }), analytics.trackLink($(".track-small-teaser-3"), "Small-Teaser-3", {
                    category: "Elements"
                }), analytics.trackForm($(".track-page-search"), "Search-AllPages", function(e) {
                    return {
                        category: "Search",
                        label: $(e).find("input").val()
                    }
                }), analytics.trackForm($(".track-no-offers-search"), "Search-AllPages", function(e) {
                    return {
                        category: "Search",
                        label: $(e).find("input").val()
                    }
                }), analytics.trackForm($(".track-brochure-search"), "Search-Brochure", function(e) {
                    return {
                        category: "Search",
                        label: $(e).find("input").val()
                    }
                }), analytics.trackForm($(".track-location-search"), "Search-Location", {
                    category: "Search",
                    label: $("#location-search-field input").val()
                }), $("ul").on("click", ".track-brochure-details:not(.active)", function() {
                    return analytics.track("Details", {
                        category: "BrochureInteraction",
                        label: "" + trackingMerchantName + " : " + trackingBrochureId
                    })
                }), $("ul").on("click", ".track-brochure-webshop", function() {
                    return analytics.track("External-Webshop", {
                        category: "BrochureInteraction",
                        label: "" + trackingMerchantName + " : " + trackingBrochureId
                    })
                }), $("ul").on("click", ".track-brochure-overview:not(.active)", function() {
                    return analytics.track("Overview", {
                        category: "BrochureInteraction",
                        label: "" + trackingMerchantName + " : " + trackingBrochureId
                    })
                }), $("ul").on("click", ".track-brochure-stores:not(.active)", function() {
                    return analytics.track("Stores", {
                        category: "BrochureInteraction",
                        label: "" + trackingMerchantName + " : " + trackingBrochureId
                    })
                }), $("ul").on("click", ".track-brochure-recommend:not(.active)", function() {
                    return analytics.track("Recommend", {
                        category: "BrochureInteraction",
                        label: "" + trackingMerchantName + " : " + trackingBrochureId
                    })
                }), $(".track-brochure-recommend-send").on("click", function() {
                    return analytics.track("Recommend-Send", {
                        category: "BrochureInteraction"
                    })
                }), $("ul").on("click", ".track-brochure-print:not(.active)", function() {
                    return analytics.track("Print", {
                        category: "BrochureInteraction",
                        label: "" + trackingMerchantName + " : " + trackingBrochureId
                    })
                }), $(".zoom .zoom-in").on("click", function() {
                    return analytics.track("Zoom-In", {
                        category: "BrochureInteraction"
                    })
                }), $(".zoom .zoom-out").on("click", function() {
                    return analytics.track("Zoom-Out", {
                        category: "BrochureInteraction"
                    })
                }), $("div.panel").on("click", ".external-viewer-link", function(e) {
                    var t, n;
                    return e.preventDefault(), t = $(e.currentTarget).data("brochure-id"), n = $(e.currentTarget).data("merchant-name"), analytics.track("Click-Brochure-Link", {
                        category: "OutboundLinks",
                        label: n + " : " + t
                    }, function() {
                        return window.location = $(e.currentTarget).attr("href")
                    })
                }), $("div.brochure-search-result-item").on("click", ".external-viewer-link", function(e) {
                    var t, n;
                    return e.preventDefault(), t = $(e.currentTarget).data("brochure-id"), n = $(e.currentTarget).data("merchant-name"), analytics.track("Click-Brochure-Link", {
                        category: "OutboundLinks",
                        label: n + " : " + t
                    }, function() {
                        return window.location = $(e.currentTarget).attr("href")
                    })
                }), analytics.trackLink($("#meinkauf-logo"), "Logo", {
                    category: "BrochureInteraction"
                }), analytics.trackLink($("#app-download-dialog.ios .go-to-appstore"), "Click-Overlay", {
                    category: "App",
                    label: "Download-iOS"
                }), analytics.trackLink($("#app-download-dialog.android .go-to-appstore"), "Click-Overlay", {
                    category: "App",
                    label: "Download-Android"
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                var e, t, n, i, o, r, a, s, l, c, u, p, h, d;
                return $("#main-navigation").on("click", "a", function(e) {
                    var t, i;
                    return e.preventDefault(), t = $(this).parent(), i = t.data("target"), t.hasClass("active") ? (n(), t.removeClass("active")) : $("#sub-navigation section:visible").length > 0 ? (n(i, function() {
                        return o(i, t)
                    }), $("#main-navigation li").removeClass("active")) : o(i, t)
                }), o = function(e, t) {
                    return $("#" + e).slideDown(), t.addClass("active")
                }, n = function(e, t) {
                    return $("#sub-navigation section:visible").slideUp(function() {
                        return t ? t.call(e) : void 0
                    })
                }, e = $(".category-carousel .carousel"), e.owlCarousel({
                    items: 10,
                    itemsDesktop: [1200, 8],
                    itemsDesktopSmall: !1,
                    itemsTablet: [996, 6],
                    itemsMobile: !1,
                    afterInit: function(e) {
                        return $(".category-carousel .item").innerWidth("100%"), e.parent().find(".next").addClass("visible")
                    },
                    afterUpdate: function() {
                        return $(".category-carousel .item").innerWidth("100%")
                    },
                    afterMove: function(e) {
                        return this.currentItem === this.maximumItem ? e.parent().find(".next").removeClass("visible") : e.parent().find(".next").addClass("visible"), 0 === this.currentItem ? e.parent().find(".previous").removeClass("visible") : e.parent().find(".previous").addClass("visible")
                    }
                }), $(".category-carousel .next").on("click", function(t) {
                    return t.preventDefault(), e.trigger("owl.next")
                }), $(".category-carousel .previous").on("click", function(t) {
                    return t.preventDefault(), e.trigger("owl.prev")
                }), $.cookie("location") && (t = $.cookie("location").charAt(0).toLowerCase() + $.cookie("location").slice(1)), "undefined" != typeof url_city && null !== url_city && "" !== url_city ? t === url_city && $(".locationCity").html($.cookie("address_formatted")) : null != t && $(".locationCity").html($.cookie("address_formatted")), window.map = new Map, window.createMapButtons = function() {
                    return $("#map-canvas.small.resizable, #map-canvas.landscape.resizable").parent().on("click", ".resize", function(e) {
                        return e.preventDefault(), map.resizeLandscape(), analytics.track("Map-Resize", {
                            category: "Map"
                        })
                    }), $("#map-canvas.medium.resizable, #map-canvas.portrait.resizable").find("+ .map-controls").on("click", " .resize", function(e) {
                        return e.preventDefault(), map.resizePortrait(), analytics.track("Map-Resize", {
                            category: "Map"
                        })
                    })
                }, createMapButtons(), l = function(e, t) {
                    var n, i, o, r, a;
                    return a = parseInt(t[0]), r = parseInt(t[1]), i = e.turn("pages"), 0 / 0 === a || 0 / 0 === r ? !1 : (1 === a.toString().length && (a = "0" + a), 1 === r.toString().length && (r = "0" + r), "00" !== a && "00" !== r ? o = a + "-" + r : "00" !== a ? o = a : "00" !== r && (o = r), e.closest(".brochure-viewer.small").find(".page-range").text(o), e.closest(".brochure-viewer.small").find(".page-count").text(i), n = e.closest(".brochure-viewer.small").find(".pager"), 0 === parseInt(a) ? n.find(".jump-to-first, .previous").addClass("disabled") : n.find(".jump-to-first, .previous").removeClass("disabled"), parseInt(r) === i || 0 === parseInt(r) ? n.find(".jump-to-last, .next").addClass("disabled") : n.find(".jump-to-last, .next").removeClass("disabled"))
                }, i = function() {
                    var e, t;
                    return $(".brochure-viewer.small .pages").length > 0 && (e = 420 / 588, t = $(".brochure-viewer.small .pages").length < 2 ? 1 : 2, $(".brochure-viewer.small .pages").turn({
                        display: "double",
                        acceleration: !0,
                        gradients: !0,
                        height: $(".brochure-viewer.small").width() * e,
                        width: "100%",
                        page: t,
                        when: {
                            turned: function(e, t, n) {
                                return l($(this), n), lazyLoadBrochurePages()
                            }
                        }
                    })), $(window).on("resize", function() {
                        var t, n;
                        return $(".brochure-viewer.small .pages").hide(), n = $(".brochure-viewer.small").width(), $(".brochure-viewer.small .pages").show(), t = n * e, $(".brochure-viewer.small .pages").turn("size", n, t)
                    })
                }, $.cookie("location") && (t = $.cookie("location").charAt(0).toLowerCase() + $.cookie("location").slice(1)), "undefined" != typeof url_city && null !== url_city && "" !== url_city && t !== url_city || null == t ? $(".boxed-slider").each(function() {
                    return new BoxedSlider($(this))
                }) : $(".little-slider .boxed-slider").each(function() {
                    return new BoxedSlider($(this))
                }), a = new SearchTermCycle($("#search-field"), ["Waschmittel", "Kaffee", "Milka", "Interspar", "Samsung", "Babykleidung", "Hochbeet", "Hofer"]), a.start(), $(".dropdown .dropdown-menu").on("click", "a", function(e) {
                    return "#" === $(this).attr("href") && e.preventDefault(), $(this).closest(".dropdown").find(".dropdown-toggle .toggle-label").text($(this).text())
                }), $(".shops-table").length && (h = [], $(".shops-table thead tr th").each(function() {
                    return h.push($(this).data("sort-type"))
                }), d = [], $(".shops-table tbody tr").each(function(e) {
                    return $(this).attr("id", "row-" + e), d[e] = {
                        index: e
                    }, $(this).find("td").each(function(t) {
                        return d[e][h[t]] = $(this).text()
                    })
                })), p = function(e, t, n) {
                    return e.sort(function(e, i) {
                        return "desc" === n ? i[t].localeCompare(e[t]) : e[t].localeCompare(i[t])
                    })
                }, u = function(e, t, n) {
                    return e.sort(function(e, i) {
                        return "desc" === n ? i[t] - e[t] : e[t] - i[t]
                    })
                }, c = function(e, t, n) {
                    return e.sort(function(e, i) {
                        return "desc" === n ? parseFloat(i[t]) - parseFloat(e[t]) : parseFloat(e[t]) - parseFloat(i[t])
                    })
                }, r = function(e) {
                    return $.each(e, function(e, t) {
                        var n;
                        return n = $(".table tr#row-" + t.index).clone(), $(".shops-table tr#row-" + t.index).remove(), $(".shops-table tbody").append(n)
                    })
                }, window.setShopListSortDropDown = function() {
                    return $(".shops-table").length && (h = [], $(".shops-table thead tr th").each(function() {
                        return h.push($(this).data("sort-type"))
                    }), d = [], $(".shops-table tbody tr").each(function(e) {
                        return $(this).attr("id", "row-" + e), d[e] = {
                            index: e
                        }, $(this).find("td").each(function(t) {
                            return d[e][h[t]] = $(this).text()
                        })
                    })), $(".table-filters .dropdown-menu").on("click", "a", function(e) {
                        var t;
                        switch (e.preventDefault(), t = $(this).data("sort-by")) {
                            case "distance":
                                c(d, t);
                                break;
                            case "zip":
                                u(d, t);
                                break;
                            default:
                                p(d, t)
                        }
                        return r(d)
                    })
                }, setShopListSortDropDown(), $("#location-search-field").on("focus", function() {
                    return $(this).val("")
                }), window.geocode = function(e, n, i) {
                    var o;
                    return o = {
                        region: "at"
                    }, null != e ? o.address = e : o.location = n, geocoder.geocode(o, function(e, n) {
                        var o, r, a, s, l, c, u;
                        if (n === google.maps.GeocoderStatus.OK) {
                            for (u = e[0].address_components, l = 0, c = u.length; c > l; l++) o = u[l], "locality" === o.types[0] && (t = o.long_name);
                            return r = e[0].geometry.location.lat(), a = e[0].geometry.location.lng(), s = {
                                location: t,
                                latitude: r,
                                longitude: a,
                                address_formatted: e[0].formatted_address,
                                country: "Österreich"
                            }, i(null, s)
                        }
                        return alert("Geocode was not successful for the following reason: " + n), i(new Error("An error has occured"))
                    })
                }, s = function(e, t) {
                    return $.cookie(e, t, {
                        path: "/",
                        expires: 30
                    })
                }, window.loadBrochure = function(e, t) {
                    return $(e).load(t, function() {
                        return $(e).find(".boxed-slider").each(function() {
                            var e, t, n;
                            return n = this, e = $(this).find("img").length, t = 0, $(this).find("img").one("load", function() {
                                return ++t, t >= e ? new BoxedSlider($(n)) : void 0
                            }).each(function() {
                                return $(this).width() > 0 || this.complete ? $(this).load() : void 0
                            })
                        })
                    })
                }, $(window).on("load", function() {
                    var e, n, o, r;
                    return window.geocoder = new google.maps.Geocoder, lazyLoadBrochurePages(), $.cookie("location") && (t = $.cookie("location").charAt(0).toLowerCase() + $.cookie("location").slice(1)), "undefined" != typeof shopId && null !== shopId && null != t && "undefined" != typeof url_city && null !== url_city && "" !== url_city && t === url_city ? $("#shop-inline-viewer").load("/dyn/shop_inline_viewer?shopId=" + shopId + "&latitude=" + $.cookie("latitude") + "&longitude=" + $.cookie("longitude"), function() {
                        return i(), setButtons()
                    }) : "undefined" != typeof merchantId && null !== merchantId && null != $.cookie("location") ? $("#inline-brochure-viewer").load("/dyn/inline_brochure_viewer?latitude=" + $.cookie("latitude") + "&longitude=" + $.cookie("longitude") + "&merchantId=" + merchantId, function() {
                        return i(), setButtons()
                    }) : null != t && "undefined" != typeof merchantId && null !== merchantId ? geocode(t, null, function(e, t) {
                        var n, o;
                        return e ? console.log(e) : (n = t.latitude, o = t.longitude, $("#inline-brochure-viewer").load("/dyn/inline_brochure_viewer?latitude=" + n + "&longitude=" + o + "&merchantId=" + merchantId, function() {
                            return i(), setButtons()
                        }))
                    }) : i(), e = $(".shops-table"), r = 15, e.find("tbody tr").length > r && (o = e.find("tbody tr:first").outerHeight() * r, o += 3 * r, n = $('<div class="scroll-container vertical scrollable-shops-table"/>').height(o), $(".shops-table").wrap(n)), $(".scroll-container.vertical").customScrollbar({
                        skin: "default-skin",
                        hScroll: !1,
                        updateOnWindowResize: !0
                    }), $(".navbar .change-location").colorbox({
                        href: "#location-change-form",
                        inline: !0,
                        opacity: .3,
                        returnFocus: !1,
                        maxWidth: "94%",
                        previous: "",
                        next: ""
                    }), navigator.geolocation ? ($("#location-change-form .use-current-location").on("click", function() {
                        var e;
                        return e = $(this).closest("form"), navigator.geolocation.getCurrentPosition(function(e) {
                            return geocode(null, new google.maps.LatLng(e.coords.latitude, e.coords.longitude), function(e, t) {
                                var n, i, o, r;
                                if (e) return e;
                                i = [];
                                for (o in t) r = t[o], n = new $.Deferred, s(o, r, 1, function() {
                                    return n.resolve(), i.push(n)
                                });
                                return $.when(i).done(function() {
                                    return window.location.href = "/geolocate?latitude=" + t.latitude + "&longitude=" + t.latitude + "&location=" + t.location
                                })
                            })
                        }, function() {
                            return alert("Standort kann nicht verwendet werden, da Zugriff soeben verweigert wurde")
                        })
                    }), $("#geocode-address").on("click", function() {
                        var e;
                        return e = $(".track-location-search").find('input[name="address"]').val(), geocode(e, null, function(e, t) {
                            var n, i, o, r;
                            if (e) return e;
                            i = [];
                            for (o in t) r = t[o], n = new $.Deferred, s(o, r, 1, function() {
                                return n.resolve(), i.push(n)
                            });
                            return $.when(i).done(function() {
                                return window.location.href = "/geolocate?latitude=" + t.latitude + "&longitude=" + t.latitude + "&location=" + t.location
                            })
                        })
                    })) : $("#location-change-form .use-current-location").hide()
                })
            })
        }.call(this);

}
/*
     FILE ARCHIVED ON 17:53:33 May 21, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 04:05:59 Jul 04, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots.policy: 0.312
  PetaboxLoader3.resolve: 103.875 (3)
  esindex: 0.013
  CDXLines.iter: 15.272 (3)
  exclusion.robots: 0.326
  PetaboxLoader3.datanode: 150.346 (4)
  captures_list: 224.658
  load_resource: 141.075
  RedisCDXSource: 5.691
  LoadShardBlock: 199.871 (3)
*/