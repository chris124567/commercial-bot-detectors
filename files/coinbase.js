/* Retrieved from https://web.archive.org/web/20130416034908js_/https://coinbase.com/assets/application-773afba0b6ee06b45ba4363a99637610.js */
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

    (function(a, b) {
        var c = function() {
            var b = a._data(document, "events");
            return b && b.click && a.grep(b.click, function(a) {
                return a.namespace === "rails"
            }).length
        };
        c() && a.error("jquery-ujs has already been loaded!");
        var d;
        a.rails = d = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input:file",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function(b) {
                var c = a('meta[name="csrf-token"]').attr("content");
                c && b.setRequestHeader("X-CSRF-Token", c)
            },
            fire: function(b, c, d) {
                var e = a.Event(c);
                return b.trigger(e, d), e.result !== !1
            },
            confirm: function(a) {
                return confirm(a)
            },
            ajax: function(b) {
                return a.ajax(b)
            },
            href: function(a) {
                return a.attr("href")
            },
            handleRemote: function(c) {
                var e, f, g, h, i, j, k, l;
                if (d.fire(c, "ajax:before")) {
                    h = c.data("cross-domain"), i = h === b ? null : h, j = c.data("with-credentials") || null, k = c.data("type") || a.ajaxSettings && a.ajaxSettings.dataType;
                    if (c.is("form")) {
                        e = c.attr("method"), f = c.attr("action"), g = c.serializeArray();
                        var m = c.data("ujs:submit-button");
                        m && (g.push(m), c.data("ujs:submit-button", null))
                    } else c.is(d.inputChangeSelector) ? (e = c.data("method"), f = c.data("url"), g = c.serialize(), c.data("params") && (g = g + "&" + c.data("params"))) : (e = c.data("method"), f = d.href(c), g = c.data("params") || null);
                    l = {
                        type: e || "GET",
                        data: g,
                        dataType: k,
                        beforeSend: function(a, e) {
                            return e.dataType === b && a.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), d.fire(c, "ajax:beforeSend", [a, e])
                        },
                        success: function(a, b, d) {
                            c.trigger("ajax:success", [a, b, d])
                        },
                        complete: function(a, b) {
                            c.trigger("ajax:complete", [a, b])
                        },
                        error: function(a, b, d) {
                            c.trigger("ajax:error", [a, b, d])
                        },
                        xhrFields: {
                            withCredentials: j
                        },
                        crossDomain: i
                    }, f && (l.url = f);
                    var n = d.ajax(l);
                    return c.trigger("ajax:send", n), n
                }
                return !1
            },
            handleMethod: function(c) {
                var e = d.href(c),
                    f = c.data("method"),
                    g = c.attr("target"),
                    h = a("meta[name=csrf-token]").attr("content"),
                    i = a("meta[name=csrf-param]").attr("content"),
                    j = a('<form method="post" action="' + e + '"></form>'),
                    k = '<input name="_method" value="' + f + '" type="hidden" />';
                i !== b && h !== b && (k += '<input name="' + i + '" value="' + h + '" type="hidden" />'), g && j.attr("target", g), j.hide().append(k).appendTo("body"), j.submit()
            },
            disableFormElements: function(b) {
                b.find(d.disableSelector).each(function() {
                    var b = a(this),
                        c = b.is("button") ? "html" : "val";
                    b.data("ujs:enable-with", b[c]()), b[c](b.data("disable-with")), b.prop("disabled", !0)
                })
            },
            enableFormElements: function(b) {
                b.find(d.enableSelector).each(function() {
                    var b = a(this),
                        c = b.is("button") ? "html" : "val";
                    b.data("ujs:enable-with") && b[c](b.data("ujs:enable-with")), b.prop("disabled", !1)
                })
            },
            allowAction: function(a) {
                var b = a.data("confirm"),
                    c = !1,
                    e;
                return b ? (d.fire(a, "confirm") && (c = d.confirm(b), e = d.fire(a, "confirm:complete", [c])), c && e) : !0
            },
            blankInputs: function(b, c, d) {
                var e = a(),
                    f, g, h = c || "input,textarea",
                    i = b.find(h);
                return i.each(function() {
                    f = a(this), g = f.is(":checkbox,:radio") ? f.is(":checked") : f.val();
                    if (!g == !d) {
                        if (f.is(":radio") && i.filter('input:radio:checked[name="' + f.attr("name") + '"]').length) return !0;
                        e = e.add(f)
                    }
                }), e.length ? e : !1
            },
            nonBlankInputs: function(a, b) {
                return d.blankInputs(a, b, !0)
            },
            stopEverything: function(b) {
                return a(b.target).trigger("ujs:everythingStopped"), b.stopImmediatePropagation(), !1
            },
            callFormSubmitBindings: function(c, d) {
                var e = c.data("events"),
                    f = !0;
                return e !== b && e.submit !== b && a.each(e.submit, function(a, b) {
                    if (typeof b.handler == "function") return f = b.handler(d)
                }), f
            },
            disableElement: function(a) {
                a.data("ujs:enable-with", a.html()), a.html(a.data("disable-with")), a.bind("click.railsDisable", function(a) {
                    return d.stopEverything(a)
                })
            },
            enableElement: function(a) {
                a.data("ujs:enable-with") !== b && (a.html(a.data("ujs:enable-with")), a.data("ujs:enable-with", !1)), a.unbind("click.railsDisable")
            }
        }, d.fire(a(document), "rails:attachBindings") && (a.ajaxPrefilter(function(a, b, c) {
            a.crossDomain || d.CSRFProtection(c)
        }), a(document).delegate(d.linkDisableSelector, "ajax:complete", function() {
            d.enableElement(a(this))
        }), a(document).delegate(d.linkClickSelector, "click.rails", function(c) {
            var e = a(this),
                f = e.data("method"),
                g = e.data("params");
            if (!d.allowAction(e)) return d.stopEverything(c);
            e.is(d.linkDisableSelector) && d.disableElement(e);
            if (e.data("remote") !== b) {
                if ((c.metaKey || c.ctrlKey) && (!f || f === "GET") && !g) return !0;
                var h = d.handleRemote(e);
                return h === !1 ? d.enableElement(e) : h.error(function() {
                    d.enableElement(e)
                }), !1
            }
            if (e.data("method")) return d.handleMethod(e), !1
        }), a(document).delegate(d.inputChangeSelector, "change.rails", function(b) {
            var c = a(this);
            return d.allowAction(c) ? (d.handleRemote(c), !1) : d.stopEverything(b)
        }), a(document).delegate(d.formSubmitSelector, "submit.rails", function(c) {
            var e = a(this),
                f = e.data("remote") !== b,
                g = d.blankInputs(e, d.requiredInputSelector),
                h = d.nonBlankInputs(e, d.fileInputSelector);
            if (!d.allowAction(e)) return d.stopEverything(c);
            if (g && e.attr("novalidate") == b && d.fire(e, "ajax:aborted:required", [g])) return d.stopEverything(c);
            if (f) {
                if (h) {
                    setTimeout(function() {
                        d.disableFormElements(e)
                    }, 13);
                    var i = d.fire(e, "ajax:aborted:file", [h]);
                    return i || setTimeout(function() {
                        d.enableFormElements(e)
                    }, 13), i
                }
                return !a.support.submitBubbles && a().jquery < "1.7" && d.callFormSubmitBindings(e, c) === !1 ? d.stopEverything(c) : (d.handleRemote(e), !1)
            }
            setTimeout(function() {
                d.disableFormElements(e)
            }, 13)
        }), a(document).delegate(d.formInputClickSelector, "click.rails", function(b) {
            var c = a(this);
            if (!d.allowAction(c)) return d.stopEverything(b);
            var e = c.attr("name"),
                f = e ? {
                    name: e,
                    value: c.val()
                } : null;
            c.closest("form").data("ujs:submit-button", f)
        }), a(document).delegate(d.formSubmitSelector, "ajax:beforeSend.rails", function(b) {
            this == b.target && d.disableFormElements(a(this))
        }), a(document).delegate(d.formSubmitSelector, "ajax:complete.rails", function(b) {
            this == b.target && d.enableFormElements(a(this))
        }), a(function() {
            csrf_token = a("meta[name=csrf-token]").attr("content"), csrf_param = a("meta[name=csrf-param]").attr("content"), a('form input[name="' + csrf_param + '"]').val(csrf_token)
        }))
    })(jQuery), jQuery.effects || function(a, b) {
            var c = a.uiBackCompat !== !1,
                d = "ui-effects-";
            a.effects = {
                    effect: {}
                },
                function(b, c) {
                    function n(a, b, c) {
                        var d = i[b.type] || {};
                        return a == null ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
                    }

                    function o(a) {
                        var c = g(),
                            d = c._rgba = [];
                        return a = a.toLowerCase(), m(f, function(b, e) {
                            var f, g = e.re.exec(a),
                                i = g && e.parse(g),
                                j = e.space || "rgba";
                            if (i) return f = c[j](i), c[h[j].cache] = f[h[j].cache], d = c._rgba = f._rgba, !1
                        }), d.length ? (d.join() === "0,0,0,0" && b.extend(d, l.transparent), c) : l[a]
                    }

                    function p(a, b, c) {
                        return c = (c + 1) % 1, c * 6 < 1 ? a + (b - a) * c * 6 : c * 2 < 1 ? b : c * 3 < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
                    }
                    var d = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                        e = /^([\-+])=\s*(\d+\.?\d*)/,
                        f = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                            parse: function(a) {
                                return [a[1], a[2], a[3], a[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                            parse: function(a) {
                                return [a[1] * 2.55, a[2] * 2.55, a[3] * 2.55, a[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function(a) {
                                return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function(a) {
                                return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function(a) {
                                return [a[1], a[2] / 100, a[3] / 100, a[4]]
                            }
                        }],
                        g = b.Color = function(a, c, d, e) {
                            return new b.Color.fn.parse(a, c, d, e)
                        },
                        h = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0,
                                        type: "byte"
                                    },
                                    green: {
                                        idx: 1,
                                        type: "byte"
                                    },
                                    blue: {
                                        idx: 2,
                                        type: "byte"
                                    }
                                }
                            },
                            hsla: {
                                props: {
                                    hue: {
                                        idx: 0,
                                        type: "degrees"
                                    },
                                    saturation: {
                                        idx: 1,
                                        type: "percent"
                                    },
                                    lightness: {
                                        idx: 2,
                                        type: "percent"
                                    }
                                }
                            }
                        },
                        i = {
                            "byte": {
                                floor: !0,
                                max: 255
                            },
                            percent: {
                                max: 1
                            },
                            degrees: {
                                mod: 360,
                                floor: !0
                            }
                        },
                        j = g.support = {},
                        k = b("<p>")[0],
                        l, m = b.each;
                    k.style.cssText = "background-color:rgba(1,1,1,.5)", j.rgba = k.style.backgroundColor.indexOf("rgba") > -1, m(h, function(a, b) {
                        b.cache = "_" + a, b.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        }
                    }), g.fn = b.extend(g.prototype, {
                        parse: function(d, e, f, i) {
                            if (d === c) return this._rgba = [null, null, null, null], this;
                            if (d.jquery || d.nodeType) d = b(d).css(e), e = c;
                            var j = this,
                                k = b.type(d),
                                p = this._rgba = [];
                            e !== c && (d = [d, e, f, i], k = "array");
                            if (k === "string") return this.parse(o(d) || l._default);
                            if (k === "array") return m(h.rgba.props, function(a, b) {
                                p[b.idx] = n(d[b.idx], b)
                            }), this;
                            if (k === "object") return d instanceof g ? m(h, function(a, b) {
                                d[b.cache] && (j[b.cache] = d[b.cache].slice())
                            }) : m(h, function(b, c) {
                                var e = c.cache;
                                m(c.props, function(a, b) {
                                    if (!j[e] && c.to) {
                                        if (a === "alpha" || d[a] == null) return;
                                        j[e] = c.to(j._rgba)
                                    }
                                    j[e][b.idx] = n(d[a], b, !0)
                                }), j[e] && a.inArray(null, j[e].slice(0, 3)) < 0 && (j[e][3] = 1, c.from && (j._rgba = c.from(j[e])))
                            }), this
                        },
                        is: function(a) {
                            var b = g(a),
                                c = !0,
                                d = this;
                            return m(h, function(a, e) {
                                var f, g = b[e.cache];
                                return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], m(e.props, function(a, b) {
                                    if (g[b.idx] != null) return c = g[b.idx] === f[b.idx], c
                                })), c
                            }), c
                        },
                        _space: function() {
                            var a = [],
                                b = this;
                            return m(h, function(c, d) {
                                b[d.cache] && a.push(c)
                            }), a.pop()
                        },
                        transition: function(a, b) {
                            var c = g(a),
                                d = c._space(),
                                e = h[d],
                                f = this.alpha() === 0 ? g("transparent") : this,
                                j = f[e.cache] || e.to(f._rgba),
                                k = j.slice();
                            return c = c[e.cache], m(e.props, function(a, d) {
                                var e = d.idx,
                                    f = j[e],
                                    g = c[e],
                                    h = i[d.type] || {};
                                if (g === null) return;
                                f === null ? k[e] = g : (h.mod && (g - f > h.mod / 2 ? f += h.mod : f - g > h.mod / 2 && (f -= h.mod)), k[e] = n((g - f) * b + f, d))
                            }), this[d](k)
                        },
                        blend: function(a) {
                            if (this._rgba[3] === 1) return this;
                            var c = this._rgba.slice(),
                                d = c.pop(),
                                e = g(a)._rgba;
                            return g(b.map(c, function(a, b) {
                                return (1 - d) * e[b] + d * a
                            }))
                        },
                        toRgbaString: function() {
                            var a = "rgba(",
                                c = b.map(this._rgba, function(a, b) {
                                    return a == null ? b > 2 ? 1 : 0 : a
                                });
                            return c[3] === 1 && (c.pop(), a = "rgb("), a + c.join() + ")"
                        },
                        toHslaString: function() {
                            var a = "hsla(",
                                c = b.map(this.hsla(), function(a, b) {
                                    return a == null && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(a * 100) + "%"), a
                                });
                            return c[3] === 1 && (c.pop(), a = "hsl("), a + c.join() + ")"
                        },
                        toHexString: function(a) {
                            var c = this._rgba.slice(),
                                d = c.pop();
                            return a && c.push(~~(d * 255)), "#" + b.map(c, function(a) {
                                return a = (a || 0).toString(16), a.length === 1 ? "0" + a : a
                            }).join("")
                        },
                        toString: function() {
                            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                        }
                    }), g.fn.parse.prototype = g.fn, h.hsla.to = function(a) {
                        if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
                        var b = a[0] / 255,
                            c = a[1] / 255,
                            d = a[2] / 255,
                            e = a[3],
                            f = Math.max(b, c, d),
                            g = Math.min(b, c, d),
                            h = f - g,
                            i = f + g,
                            j = i * .5,
                            k, l;
                        return g === f ? k = 0 : b === f ? k = 60 * (c - d) / h + 360 : c === f ? k = 60 * (d - b) / h + 120 : k = 60 * (b - c) / h + 240, j === 0 || j === 1 ? l = j : j <= .5 ? l = h / i : l = h / (2 - i), [Math.round(k) % 360, l, j, e == null ? 1 : e]
                    }, h.hsla.from = function(a) {
                        if (a[0] == null || a[1] == null || a[2] == null) return [null, null, null, a[3]];
                        var b = a[0] / 360,
                            c = a[1],
                            d = a[2],
                            e = a[3],
                            f = d <= .5 ? d * (1 + c) : d + c - d * c,
                            g = 2 * d - f;
                        return [Math.round(p(g, f, b + 1 / 3) * 255), Math.round(p(g, f, b) * 255), Math.round(p(g, f, b - 1 / 3) * 255), e]
                    }, m(h, function(a, d) {
                        var f = d.props,
                            h = d.cache,
                            i = d.to,
                            j = d.from;
                        g.fn[a] = function(a) {
                            i && !this[h] && (this[h] = i(this._rgba));
                            if (a === c) return this[h].slice();
                            var d, e = b.type(a),
                                k = e === "array" || e === "object" ? a : arguments,
                                l = this[h].slice();
                            return m(f, function(a, b) {
                                var c = k[e === "object" ? a : b.idx];
                                c == null && (c = l[b.idx]), l[b.idx] = n(c, b)
                            }), j ? (d = g(j(l)), d[h] = l, d) : g(l)
                        }, m(f, function(c, d) {
                            if (g.fn[c]) return;
                            g.fn[c] = function(f) {
                                var g = b.type(f),
                                    h = c === "alpha" ? this._hsla ? "hsla" : "rgba" : a,
                                    i = this[h](),
                                    j = i[d.idx],
                                    k;
                                return g === "undefined" ? j : (g === "function" && (f = f.call(this, j), g = b.type(f)), f == null && d.empty ? this : (g === "string" && (k = e.exec(f), k && (f = j + parseFloat(k[2]) * (k[1] === "+" ? 1 : -1))), i[d.idx] = f, this[h](i)))
                            }
                        })
                    }), m(d, function(a, c) {
                        b.cssHooks[c] = {
                            set: function(a, d) {
                                var e, f, h = "";
                                if (b.type(d) !== "string" || (e = o(d))) {
                                    d = g(e || d);
                                    if (!j.rgba && d._rgba[3] !== 1) {
                                        f = c === "backgroundColor" ? a.parentNode : a;
                                        while ((h === "" || h === "transparent") && f && f.style) try {
                                            h = b.css(f, "backgroundColor"), f = f.parentNode
                                        } catch (i) {}
                                        d = d.blend(h && h !== "transparent" ? h : "_default")
                                    }
                                    d = d.toRgbaString()
                                }
                                try {
                                    a.style[c] = d
                                } catch (k) {}
                            }
                        }, b.fx.step[c] = function(a) {
                            a.colorInit || (a.start = g(a.elem, c), a.end = g(a.end), a.colorInit = !0), b.cssHooks[c].set(a.elem, a.start.transition(a.end, a.pos))
                        }
                    }), b.cssHooks.borderColor = {
                        expand: function(a) {
                            var b = {};
                            return m(["Top", "Right", "Bottom", "Left"], function(c, d) {
                                b["border" + d + "Color"] = a
                            }), b
                        }
                    }, l = b.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }
                }(jQuery),
                function() {
                    function e() {
                        var b = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                            c = {},
                            d, e;
                        if (b && b.length && b[0] && b[b[0]]) {
                            e = b.length;
                            while (e--) d = b[e], typeof b[d] == "string" && (c[a.camelCase(d)] = b[d])
                        } else
                            for (d in b) typeof b[d] == "string" && (c[d] = b[d]);
                        return c
                    }

                    function f(b, c) {
                        var e = {},
                            f, g;
                        for (f in c) g = c[f], b[f] !== g && !d[f] && (a.fx.step[f] || !isNaN(parseFloat(g))) && (e[f] = g);
                        return e
                    }
                    var c = ["add", "remove", "toggle"],
                        d = {
                            border: 1,
                            borderBottom: 1,
                            borderColor: 1,
                            borderLeft: 1,
                            borderRight: 1,
                            borderTop: 1,
                            borderWidth: 1,
                            margin: 1,
                            padding: 1
                        };
                    a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, c) {
                        a.fx.step[c] = function(a) {
                            if (a.end !== "none" && !a.setAttr || a.pos === 1 && !a.setAttr) jQuery.style(a.elem, c, a.end), a.setAttr = !0
                        }
                    }), a.effects.animateClass = function(b, d, g, h) {
                        var i = a.speed(d, g, h);
                        return this.queue(function() {
                            var d = a(this),
                                g = d.attr("class") || "",
                                h, j = i.children ? d.find("*").andSelf() : d;
                            j = j.map(function() {
                                var b = a(this);
                                return {
                                    el: b,
                                    start: e.call(this)
                                }
                            }), h = function() {
                                a.each(c, function(a, c) {
                                    b[c] && d[c + "Class"](b[c])
                                })
                            }, h(), j = j.map(function() {
                                return this.end = e.call(this.el[0]), this.diff = f(this.start, this.end), this
                            }), d.attr("class", g), j = j.map(function() {
                                var b = this,
                                    c = a.Deferred(),
                                    d = jQuery.extend({}, i, {
                                        queue: !1,
                                        complete: function() {
                                            c.resolve(b)
                                        }
                                    });
                                return this.el.animate(this.diff, d), c.promise()
                            }), a.when.apply(a, j.get()).done(function() {
                                h(), a.each(arguments, function() {
                                    var b = this.el;
                                    a.each(this.diff, function(a) {
                                        b.css(a, "")
                                    })
                                }), i.complete.call(d[0])
                            })
                        })
                    }, a.fn.extend({
                        _addClass: a.fn.addClass,
                        addClass: function(b, c, d, e) {
                            return c ? a.effects.animateClass.call(this, {
                                add: b
                            }, c, d, e) : this._addClass(b)
                        },
                        _removeClass: a.fn.removeClass,
                        removeClass: function(b, c, d, e) {
                            return c ? a.effects.animateClass.call(this, {
                                remove: b
                            }, c, d, e) : this._removeClass(b)
                        },
                        _toggleClass: a.fn.toggleClass,
                        toggleClass: function(c, d, e, f, g) {
                            return typeof d == "boolean" || d === b ? e ? a.effects.animateClass.call(this, d ? {
                                add: c
                            } : {
                                remove: c
                            }, e, f, g) : this._toggleClass(c, d) : a.effects.animateClass.call(this, {
                                toggle: c
                            }, d, e, f)
                        },
                        switchClass: function(b, c, d, e, f) {
                            return a.effects.animateClass.call(this, {
                                add: c,
                                remove: b
                            }, d, e, f)
                        }
                    })
                }(),
                function() {
                    function e(b, c, d, e) {
                        a.isPlainObject(b) && (c = b, b = b.effect), b = {
                            effect: b
                        }, c == null && (c = {}), a.isFunction(c) && (e = c, d = null, c = {});
                        if (typeof c == "number" || a.fx.speeds[c]) e = d, d = c, c = {};
                        return a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : typeof d == "number" ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
                    }

                    function f(b) {
                        return !b || typeof b == "number" || a.fx.speeds[b] ? !0 : typeof b == "string" && !a.effects.effect[b] ? c && a.effects[b] ? !1 : !0 : !1
                    }
                    a.extend(a.effects, {
                        version: "1.9.2",
                        save: function(a, b) {
                            for (var c = 0; c < b.length; c++) b[c] !== null && a.data(d + b[c], a[0].style[b[c]])
                        },
                        restore: function(a, c) {
                            var e, f;
                            for (f = 0; f < c.length; f++) c[f] !== null && (e = a.data(d + c[f]), e === b && (e = ""), a.css(c[f], e))
                        },
                        setMode: function(a, b) {
                            return b === "toggle" && (b = a.is(":hidden") ? "show" : "hide"), b
                        },
                        getBaseline: function(a, b) {
                            var c, d;
                            switch (a[0]) {
                                case "top":
                                    c = 0;
                                    break;
                                case "middle":
                                    c = .5;
                                    break;
                                case "bottom":
                                    c = 1;
                                    break;
                                default:
                                    c = a[0] / b.height
                            }
                            switch (a[1]) {
                                case "left":
                                    d = 0;
                                    break;
                                case "center":
                                    d = .5;
                                    break;
                                case "right":
                                    d = 1;
                                    break;
                                default:
                                    d = a[1] / b.width
                            }
                            return {
                                x: d,
                                y: c
                            }
                        },
                        createWrapper: function(b) {
                            if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                            var c = {
                                    width: b.outerWidth(!0),
                                    height: b.outerHeight(!0),
                                    "float": b.css("float")
                                },
                                d = a("<div></div>").addClass("ui-effects-wrapper").css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                e = {
                                    width: b.width(),
                                    height: b.height()
                                },
                                f = document.activeElement;
                            try {
                                f.id
                            } catch (g) {
                                f = document.body
                            }
                            return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), b.css("position") === "static" ? (d.css({
                                position: "relative"
                            }), b.css({
                                position: "relative"
                            })) : (a.extend(c, {
                                position: b.css("position"),
                                zIndex: b.css("z-index")
                            }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                                c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                            }), b.css({
                                position: "relative",
                                top: 0,
                                left: 0,
                                right: "auto",
                                bottom: "auto"
                            })), b.css(e), d.css(c).show()
                        },
                        removeWrapper: function(b) {
                            var c = document.activeElement;
                            return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                        },
                        setTransition: function(b, c, d, e) {
                            return e = e || {}, a.each(c, function(a, c) {
                                var f = b.cssUnit(c);
                                f[0] > 0 && (e[c] = f[0] * d + f[1])
                            }), e
                        }
                    }), a.fn.extend({
                        effect: function() {
                            function i(c) {
                                function h() {
                                    a.isFunction(e) && e.call(d[0]), a.isFunction(c) && c()
                                }
                                var d = a(this),
                                    e = b.complete,
                                    f = b.mode;
                                (d.is(":hidden") ? f === "hide" : f === "show") ? h(): g.call(d[0], b, h)
                            }
                            var b = e.apply(this, arguments),
                                d = b.mode,
                                f = b.queue,
                                g = a.effects.effect[b.effect],
                                h = !g && c && a.effects[b.effect];
                            return a.fx.off || !g && !h ? d ? this[d](b.duration, b.complete) : this.each(function() {
                                b.complete && b.complete.call(this)
                            }) : g ? f === !1 ? this.each(i) : this.queue(f || "fx", i) : h.call(this, {
                                options: b,
                                duration: b.duration,
                                callback: b.complete,
                                mode: b.mode
                            })
                        },
                        _show: a.fn.show,
                        show: function(a) {
                            if (f(a)) return this._show.apply(this, arguments);
                            var b = e.apply(this, arguments);
                            return b.mode = "show", this.effect.call(this, b)
                        },
                        _hide: a.fn.hide,
                        hide: function(a) {
                            if (f(a)) return this._hide.apply(this, arguments);
                            var b = e.apply(this, arguments);
                            return b.mode = "hide", this.effect.call(this, b)
                        },
                        __toggle: a.fn.toggle,
                        toggle: function(b) {
                            if (f(b) || typeof b == "boolean" || a.isFunction(b)) return this.__toggle.apply(this, arguments);
                            var c = e.apply(this, arguments);
                            return c.mode = "toggle", this.effect.call(this, c)
                        },
                        cssUnit: function(b) {
                            var c = this.css(b),
                                d = [];
                            return a.each(["em", "px", "%", "pt"], function(a, b) {
                                c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                            }), d
                        }
                    })
                }(),
                function() {
                    var b = {};
                    a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                        b[c] = function(b) {
                            return Math.pow(b, a + 2)
                        }
                    }), a.extend(b, {
                        Sine: function(a) {
                            return 1 - Math.cos(a * Math.PI / 2)
                        },
                        Circ: function(a) {
                            return 1 - Math.sqrt(1 - a * a)
                        },
                        Elastic: function(a) {
                            return a === 0 || a === 1 ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin(((a - 1) * 80 - 7.5) * Math.PI / 15)
                        },
                        Back: function(a) {
                            return a * a * (3 * a - 2)
                        },
                        Bounce: function(a) {
                            var b, c = 4;
                            while (a < ((b = Math.pow(2, --c)) - 1) / 11);
                            return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((b * 3 - 2) / 22 - a, 2)
                        }
                    }), a.each(b, function(b, c) {
                        a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                            return 1 - c(1 - a)
                        }, a.easing["easeInOut" + b] = function(a) {
                            return a < .5 ? c(a * 2) / 2 : 1 - c(a * -2 + 2) / 2
                        }
                    })
                }()
        }(jQuery),
        function(a, b) {
            a.effects.effect.highlight = function(b, c) {
                var d = a(this),
                    e = ["backgroundImage", "backgroundColor", "opacity"],
                    f = a.effects.setMode(d, b.mode || "show"),
                    g = {
                        backgroundColor: d.css("backgroundColor")
                    };
                f === "hide" && (g.opacity = 0), a.effects.save(d, e), d.show().css({
                    backgroundImage: "none",
                    backgroundColor: b.color || "#ffff99"
                }).animate(g, {
                    queue: !1,
                    duration: b.duration,
                    easing: b.easing,
                    complete: function() {
                        f === "hide" && d.hide(), a.effects.restore(d, e), c()
                    }
                })
            }
        }(jQuery), ! function(a) {
            "use strict",
            a(function() {
                a.support.transition = function() {
                    var a = function() {
                        var a = document.createElement("bootstrap"),
                            b = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            },
                            c;
                        for (c in b)
                            if (a.style[c] !== undefined) return b[c]
                    }();
                    return a && {
                        end: a
                    }
                }()
            })
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b, c) {
                this.options = a.extend({}, a.fn.affix.defaults, c), this.$window = a(window).on("scroll.affix.data-api", a.proxy(this.checkPosition, this)).on("click.affix.data-api", a.proxy(function() {
                    setTimeout(a.proxy(this.checkPosition, this), 1)
                }, this)), this.$element = a(b), this.checkPosition()
            };
            b.prototype.checkPosition = function() {
                if (!this.$element.is(":visible")) return;
                var b = a(document).height(),
                    c = this.$window.scrollTop(),
                    d = this.$element.offset(),
                    e = this.options.offset,
                    f = e.bottom,
                    g = e.top,
                    h = "affix affix-top affix-bottom",
                    i;
                typeof e != "object" && (f = g = e), typeof g == "function" && (g = e.top()), typeof f == "function" && (f = e.bottom()), i = this.unpin != null && c + this.unpin <= d.top ? !1 : f != null && d.top + this.$element.height() >= b - f ? "bottom" : g != null && c <= g ? "top" : !1;
                if (this.affixed === i) return;
                this.affixed = i, this.unpin = i == "bottom" ? d.top - c : null, this.$element.removeClass(h).addClass("affix" + (i ? "-" + i : ""))
            };
            var c = a.fn.affix;
            a.fn.affix = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("affix"),
                        f = typeof c == "object" && c;
                    e || d.data("affix", e = new b(this, f)), typeof c == "string" && e[c]()
                })
            }, a.fn.affix.Constructor = b, a.fn.affix.defaults = {
                offset: 0
            }, a.fn.affix.noConflict = function() {
                return a.fn.affix = c, this
            }, a(window).on("load", function() {
                a('[data-spy="affix"]').each(function() {
                    var b = a(this),
                        c = b.data();
                    c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
                })
            })
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = '[data-dismiss="alert"]',
                c = function(c) {
                    a(c).on("click", b, this.close)
                };
            c.prototype.close = function(b) {
                function f() {
                    e.trigger("closed").remove()
                }
                var c = a(this),
                    d = c.attr("data-target"),
                    e;
                d || (d = c.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), e = a(d), b && b.preventDefault(), e.length || (e = c.hasClass("alert") ? c : c.parent()), e.trigger(b = a.Event("close"));
                if (b.isDefaultPrevented()) return;
                e.removeClass("in"), a.support.transition && e.hasClass("fade") ? e.on(a.support.transition.end, f) : f()
            };
            var d = a.fn.alert;
            a.fn.alert = function(b) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("alert");
                    e || d.data("alert", e = new c(this)), typeof b == "string" && e[b].call(d)
                })
            }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
                return a.fn.alert = d, this
            }, a(document).on("click.alert.data-api", b, c.prototype.close)
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b, c) {
                this.$element = a(b), this.options = a.extend({}, a.fn.button.defaults, c)
            };
            b.prototype.setState = function(a) {
                var b = "disabled",
                    c = this.$element,
                    d = c.data(),
                    e = c.is("input") ? "val" : "html";
                a += "Text", d.resetText || c.data("resetText", c[e]()), c[e](d[a] || this.options[a]), setTimeout(function() {
                    a == "loadingText" ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
                }, 0)
            }, b.prototype.toggle = function() {
                var a = this.$element.closest('[data-toggle="buttons-radio"]');
                a && a.find(".active").removeClass("active"), this.$element.toggleClass("active")
            };
            var c = a.fn.button;
            a.fn.button = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("button"),
                        f = typeof c == "object" && c;
                    e || d.data("button", e = new b(this, f)), c == "toggle" ? e.toggle() : c && e.setState(c)
                })
            }, a.fn.button.defaults = {
                loadingText: "loading..."
            }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
                return a.fn.button = c, this
            }, a(document).on("click.button.data-api", "[data-toggle^=button]", function(b) {
                var c = a(b.target);
                c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle")
            })
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b, c) {
                this.$element = a(b), this.options = c, this.options.pause == "hover" && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
            };
            b.prototype = {
                cycle: function(b) {
                    return b || (this.paused = !1), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
                },
                to: function(b) {
                    var c = this.$element.find(".item.active"),
                        d = c.parent().children(),
                        e = d.index(c),
                        f = this;
                    if (b > d.length - 1 || b < 0) return;
                    return this.sliding ? this.$element.one("slid", function() {
                        f.to(b)
                    }) : e == b ? this.pause().cycle() : this.slide(b > e ? "next" : "prev", a(d[b]))
                },
                pause: function(b) {
                    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle()), clearInterval(this.interval), this.interval = null, this
                },
                next: function() {
                    if (this.sliding) return;
                    return this.slide("next")
                },
                prev: function() {
                    if (this.sliding) return;
                    return this.slide("prev")
                },
                slide: function(b, c) {
                    var d = this.$element.find(".item.active"),
                        e = c || d[b](),
                        f = this.interval,
                        g = b == "next" ? "left" : "right",
                        h = b == "next" ? "first" : "last",
                        i = this,
                        j;
                    this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h](), j = a.Event("slide", {
                        relatedTarget: e[0]
                    });
                    if (e.hasClass("active")) return;
                    if (a.support.transition && this.$element.hasClass("slide")) {
                        this.$element.trigger(j);
                        if (j.isDefaultPrevented()) return;
                        e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), this.$element.one(a.support.transition.end, function() {
                            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                                i.$element.trigger("slid")
                            }, 0)
                        })
                    } else {
                        this.$element.trigger(j);
                        if (j.isDefaultPrevented()) return;
                        d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
                    }
                    return f && this.cycle(), this
                }
            };
            var c = a.fn.carousel;
            a.fn.carousel = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("carousel"),
                        f = a.extend({}, a.fn.carousel.defaults, typeof c == "object" && c),
                        g = typeof c == "string" ? c : f.slide;
                    e || d.data("carousel", e = new b(this, f)), typeof c == "number" ? e.to(c) : g ? e[g]() : f.interval && e.cycle()
                })
            }, a.fn.carousel.defaults = {
                interval: 5e3,
                pause: "hover"
            }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
                return a.fn.carousel = c, this
            }, a(document).on("click.carousel.data-api", "[data-slide]", function(b) {
                var c = a(this),
                    d, e = a(c.attr("data-target") || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")),
                    f = a.extend({}, e.data(), c.data());
                e.carousel(f), b.preventDefault()
            })
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b, c) {
                this.$element = a(b), this.options = a.extend({}, a.fn.collapse.defaults, c), this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
            };
            b.prototype = {
                constructor: b,
                dimension: function() {
                    var a = this.$element.hasClass("width");
                    return a ? "width" : "height"
                },
                show: function() {
                    var b, c, d, e;
                    if (this.transitioning) return;
                    b = this.dimension(), c = a.camelCase(["scroll", b].join("-")), d = this.$parent && this.$parent.find("> .accordion-group > .in");
                    if (d && d.length) {
                        e = d.data("collapse");
                        if (e && e.transitioning) return;
                        d.collapse("hide"), e || d.data("collapse", null)
                    }
                    this.$element[b](0), this.transition("addClass", a.Event("show"), "shown"), a.support.transition && this.$element[b](this.$element[0][c])
                },
                hide: function() {
                    var b;
                    if (this.transitioning) return;
                    b = this.dimension(), this.reset(this.$element[b]()), this.transition("removeClass", a.Event("hide"), "hidden"), this.$element[b](0)
                },
                reset: function(a) {
                    var b = this.dimension();
                    return this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth, this.$element[a !== null ? "addClass" : "removeClass"]("collapse"), this
                },
                transition: function(b, c, d) {
                    var e = this,
                        f = function() {
                            c.type == "show" && e.reset(), e.transitioning = 0, e.$element.trigger(d)
                        };
                    this.$element.trigger(c);
                    if (c.isDefaultPrevented()) return;
                    this.transitioning = 1, this.$element[b]("in"), a.support.transition && this.$element.hasClass("collapse") ? this.$element.one(a.support.transition.end, f) : f()
                },
                toggle: function() {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }
            };
            var c = a.fn.collapse;
            a.fn.collapse = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("collapse"),
                        f = typeof c == "object" && c;
                    e || d.data("collapse", e = new b(this, f)), typeof c == "string" && e[c]()
                })
            }, a.fn.collapse.defaults = {
                toggle: !0
            }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
                return a.fn.collapse = c, this
            }, a(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(b) {
                var c = a(this),
                    d, e = c.attr("data-target") || b.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
                    f = a(e).data("collapse") ? "toggle" : c.data();
                c[a(e).hasClass("in") ? "addClass" : "removeClass"]("collapsed"), a(e).collapse(f)
            })
        }(window.jQuery), ! function(a) {
            function d() {
                a(b).each(function() {
                    e(a(this)).removeClass("open")
                })
            }

            function e(b) {
                var c = b.attr("data-target"),
                    d;
                return c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")), d = a(c), d.length || (d = b.parent()), d
            }
            "use strict";
            var b = "[data-toggle=dropdown]",
                c = function(b) {
                    var c = a(b).on("click.dropdown.data-api", this.toggle);
                    a("html").on("click.dropdown.data-api", function() {
                        c.parent().removeClass("open")
                    })
                };
            c.prototype = {
                constructor: c,
                toggle: function(b) {
                    var c = a(this),
                        f, g;
                    if (c.is(".disabled, :disabled")) return;
                    return f = e(c), g = f.hasClass("open"), d(), g || f.toggleClass("open"), c.focus(), !1
                },
                keydown: function(b) {
                    var c, d, f, g, h, i;
                    if (!/(38|40|27)/.test(b.keyCode)) return;
                    c = a(this), b.preventDefault(), b.stopPropagation();
                    if (c.is(".disabled, :disabled")) return;
                    g = e(c), h = g.hasClass("open");
                    if (!h || h && b.keyCode == 27) return c.click();
                    d = a("[role=menu] li:not(.divider):visible a", g);
                    if (!d.length) return;
                    i = d.index(d.filter(":focus")), b.keyCode == 38 && i > 0 && i--, b.keyCode == 40 && i < d.length - 1 && i++, ~i || (i = 0), d.eq(i).focus()
                }
            };
            var f = a.fn.dropdown;
            a.fn.dropdown = function(b) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("dropdown");
                    e || d.data("dropdown", e = new c(this)), typeof b == "string" && e[b].call(d)
                })
            }, a.fn.dropdown.Constructor = c, a.fn.dropdown.noConflict = function() {
                return a.fn.dropdown = f, this
            }, a(document).on("click.dropdown.data-api touchstart.dropdown.data-api", d).on("click.dropdown touchstart.dropdown.data-api", ".dropdown form", function(a) {
                a.stopPropagation()
            }).on("touchstart.dropdown.data-api", ".dropdown-menu", function(a) {
                a.stopPropagation()
            }).on("click.dropdown.data-api touchstart.dropdown.data-api", b, c.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api", b + ", [role=menu]", c.prototype.keydown)
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b, c) {
                this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
            };
            b.prototype = {
                constructor: b,
                toggle: function() {
                    return this[this.isShown ? "hide" : "show"]()
                },
                show: function() {
                    var b = this,
                        c = a.Event("show");
                    this.$element.trigger(c);
                    if (this.isShown || c.isDefaultPrevented()) return;
                    this.isShown = !0, this.escape(), this.backdrop(function() {
                        var c = a.support.transition && b.$element.hasClass("fade");
                        b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                            b.$element.focus().trigger("shown")
                        }) : b.$element.focus().trigger("shown")
                    })
                },
                hide: function(b) {
                    b && b.preventDefault();
                    var c = this;
                    b = a.Event("hide"), this.$element.trigger(b);
                    if (!this.isShown || b.isDefaultPrevented()) return;
                    this.isShown = !1, this.escape(), a(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
                },
                enforceFocus: function() {
                    var b = this;
                    a(document).on("focusin.modal", function(a) {
                        b.$element[0] !== a.target && !b.$element.has(a.target).length && b.$element.focus()
                    })
                },
                escape: function() {
                    var a = this;
                    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(b) {
                        b.which == 27 && a.hide()
                    }) : this.isShown || this.$element.off("keyup.dismiss.modal")
                },
                hideWithTransition: function() {
                    var b = this,
                        c = setTimeout(function() {
                            b.$element.off(a.support.transition.end), b.hideModal()
                        }, 500);
                    this.$element.one(a.support.transition.end, function() {
                        clearTimeout(c), b.hideModal()
                    })
                },
                hideModal: function(a) {
                    this.$element.hide().trigger("hidden"), this.backdrop()
                },
                removeBackdrop: function() {
                    this.$backdrop.remove(), this.$backdrop = null
                },
                backdrop: function(b) {
                    var c = this,
                        d = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var e = a.support.transition && d;
                        this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(document.body), this.$backdrop.click(this.options.backdrop == "static" ? a.proxy(this.$element[0].focus, this.$element[0]) : a.proxy(this.hide, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), e ? this.$backdrop.one(a.support.transition.end, b) : b()
                    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, a.proxy(this.removeBackdrop, this)) : this.removeBackdrop()) : b && b()
                }
            };
            var c = a.fn.modal;
            a.fn.modal = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("modal"),
                        f = a.extend({}, a.fn.modal.defaults, d.data(), typeof c == "object" && c);
                    e || d.data("modal", e = new b(this, f)), typeof c == "string" ? e[c]() : f.show && e.show()
                })
            }, a.fn.modal.defaults = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
                return a.fn.modal = c, this
            }, a(document).on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
                var c = a(this),
                    d = c.attr("href"),
                    e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                    f = e.data("modal") ? "toggle" : a.extend({
                        remote: !/#/.test(d) && d
                    }, e.data(), c.data());
                b.preventDefault(), e.modal(f).one("hide", function() {
                    c.focus()
                })
            })
        }(window.jQuery), ! function(a) {
            function b(b, c) {
                var d = a.proxy(this.process, this),
                    e = a(b).is("body") ? a(window) : a(b),
                    f;
                this.options = a.extend({}, a.fn.scrollspy.defaults, c), this.$scrollElement = e.on("scroll.scroll-spy.data-api", d), this.selector = (this.options.target || (f = a(b).attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.$body = a("body"), this.refresh(), this.process()
            }
            "use strict", b.prototype = {
                constructor: b,
                refresh: function() {
                    var b = this,
                        c;
                    this.offsets = a([]), this.targets = a([]), c = this.$body.find(this.selector).map(function() {
                        var c = a(this),
                            d = c.data("target") || c.attr("href"),
                            e = /^#\w/.test(d) && a(d);
                        return e && e.length && [
                            [e.position().top + b.$scrollElement.scrollTop(), d]
                        ] || null
                    }).sort(function(a, b) {
                        return a[0] - b[0]
                    }).each(function() {
                        b.offsets.push(this[0]), b.targets.push(this[1])
                    })
                },
                process: function() {
                    var a = this.$scrollElement.scrollTop() + this.options.offset,
                        b = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
                        c = b - this.$scrollElement.height(),
                        d = this.offsets,
                        e = this.targets,
                        f = this.activeTarget,
                        g;
                    if (a >= c) return f != (g = e.last()[0]) && this.activate(g);
                    for (g = d.length; g--;) f != e[g] && a >= d[g] && (!d[g + 1] || a <= d[g + 1]) && this.activate(e[g])
                },
                activate: function(b) {
                    var c, d;
                    this.activeTarget = b, a(this.selector).parent(".active").removeClass("active"), d = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', c = a(d).parent("li").addClass("active"), c.parent(".dropdown-menu").length && (c = c.closest("li.dropdown").addClass("active")), c.trigger("activate")
                }
            };
            var c = a.fn.scrollspy;
            a.fn.scrollspy = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("scrollspy"),
                        f = typeof c == "object" && c;
                    e || d.data("scrollspy", e = new b(this, f)), typeof c == "string" && e[c]()
                })
            }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.defaults = {
                offset: 10
            }, a.fn.scrollspy.noConflict = function() {
                return a.fn.scrollspy = c, this
            }, a(window).on("load", function() {
                a('[data-spy="scroll"]').each(function() {
                    var b = a(this);
                    b.scrollspy(b.data())
                })
            })
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b) {
                this.element = a(b)
            };
            b.prototype = {
                constructor: b,
                show: function() {
                    var b = this.element,
                        c = b.closest("ul:not(.dropdown-menu)"),
                        d = b.attr("data-target"),
                        e, f, g;
                    d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, ""));
                    if (b.parent("li").hasClass("active")) return;
                    e = c.find(".active:last a")[0], g = a.Event("show", {
                        relatedTarget: e
                    }), b.trigger(g);
                    if (g.isDefaultPrevented()) return;
                    f = a(d), this.activate(b.parent("li"), c), this.activate(f, f.parent(), function() {
                        b.trigger({
                            type: "shown",
                            relatedTarget: e
                        })
                    })
                },
                activate: function(b, c, d) {
                    function g() {
                        e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), f ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
                    }
                    var e = c.find("> .active"),
                        f = d && a.support.transition && e.hasClass("fade");
                    f ? e.one(a.support.transition.end, g) : g(), e.removeClass("in")
                }
            };
            var c = a.fn.tab;
            a.fn.tab = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("tab");
                    e || d.data("tab", e = new b(this)), typeof c == "string" && e[c]()
                })
            }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
                return a.fn.tab = c, this
            }, a(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
                b.preventDefault(), a(this).tab("show")
            })
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(a, b) {
                this.init("tooltip", a, b)
            };
            b.prototype = {
                constructor: b,
                init: function(b, c, d) {
                    var e, f;
                    this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.enabled = !0, this.options.trigger == "click" ? this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)) : this.options.trigger != "manual" && (e = this.options.trigger == "hover" ? "mouseenter" : "focus", f = this.options.trigger == "hover" ? "mouseleave" : "blur", this.$element.on(e + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this))), this.options.selector ? this._options = a.extend({}, this.options, {
                        trigger: "manual",
                        selector: ""
                    }) : this.fixTitle()
                },
                getOptions: function(b) {
                    return b = a.extend({}, a.fn[this.type].defaults, b, this.$element.data()), b.delay && typeof b.delay == "number" && (b.delay = {
                        show: b.delay,
                        hide: b.delay
                    }), b
                },
                enter: function(b) {
                    var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                    if (!c.options.delay || !c.options.delay.show) return c.show();
                    clearTimeout(this.timeout), c.hoverState = "in", this.timeout = setTimeout(function() {
                        c.hoverState == "in" && c.show()
                    }, c.options.delay.show)
                },
                leave: function(b) {
                    var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                    this.timeout && clearTimeout(this.timeout);
                    if (!c.options.delay || !c.options.delay.hide) return c.hide();
                    c.hoverState = "out", this.timeout = setTimeout(function() {
                        c.hoverState == "out" && c.hide()
                    }, c.options.delay.hide)
                },
                show: function() {
                    var a, b, c, d, e, f, g;
                    if (this.hasContent() && this.enabled) {
                        a = this.tip(), this.setContent(), this.options.animation && a.addClass("fade"), f = typeof this.options.placement == "function" ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement, b = /in/.test(f), a.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).insertAfter(this.$element), c = this.getPosition(b), d = a[0].offsetWidth, e = a[0].offsetHeight;
                        switch (b ? f.split(" ")[1] : f) {
                            case "bottom":
                                g = {
                                    top: c.top + c.height,
                                    left: c.left + c.width / 2 - d / 2
                                };
                                break;
                            case "top":
                                g = {
                                    top: c.top - e,
                                    left: c.left + c.width / 2 - d / 2
                                };
                                break;
                            case "left":
                                g = {
                                    top: c.top + c.height / 2 - e / 2,
                                    left: c.left - d
                                };
                                break;
                            case "right":
                                g = {
                                    top: c.top + c.height / 2 - e / 2,
                                    left: c.left + c.width
                                }
                        }
                        a.offset(g).addClass(f).addClass("in")
                    }
                },
                setContent: function() {
                    var a = this.tip(),
                        b = this.getTitle();
                    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
                },
                hide: function() {
                    function d() {
                        var b = setTimeout(function() {
                            c.off(a.support.transition.end).detach()
                        }, 500);
                        c.one(a.support.transition.end, function() {
                            clearTimeout(b), c.detach()
                        })
                    }
                    var b = this,
                        c = this.tip();
                    return c.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d() : c.detach(), this
                },
                fixTitle: function() {
                    var a = this.$element;
                    (a.attr("title") || typeof a.attr("data-original-title") != "string") && a.attr("data-original-title", a.attr("title") || "").removeAttr("title")
                },
                hasContent: function() {
                    return this.getTitle()
                },
                getPosition: function(b) {
                    return a.extend({}, b ? {
                        top: 0,
                        left: 0
                    } : this.$element.offset(), {
                        width: this.$element[0].offsetWidth,
                        height: this.$element[0].offsetHeight
                    })
                },
                getTitle: function() {
                    var a, b = this.$element,
                        c = this.options;
                    return a = b.attr("data-original-title") || (typeof c.title == "function" ? c.title.call(b[0]) : c.title), a
                },
                tip: function() {
                    return this.$tip = this.$tip || a(this.options.template)
                },
                validate: function() {
                    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
                },
                enable: function() {
                    this.enabled = !0
                },
                disable: function() {
                    this.enabled = !1
                },
                toggleEnabled: function() {
                    this.enabled = !this.enabled
                },
                toggle: function(b) {
                    var c = a(b.currentTarget)[this.type](this._options).data(this.type);
                    c[c.tip().hasClass("in") ? "hide" : "show"]()
                },
                destroy: function() {
                    this.hide().$element.off("." + this.type).removeData(this.type)
                }
            };
            var c = a.fn.tooltip;
            a.fn.tooltip = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("tooltip"),
                        f = typeof c == "object" && c;
                    e || d.data("tooltip", e = new b(this, f)), typeof c == "string" && e[c]()
                })
            }, a.fn.tooltip.Constructor = b, a.fn.tooltip.defaults = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover",
                title: "",
                delay: 0,
                html: !1
            }, a.fn.tooltip.noConflict = function() {
                return a.fn.tooltip = c, this
            }
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(a, b) {
                this.init("popover", a, b)
            };
            b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype, {
                constructor: b,
                setContent: function() {
                    var a = this.tip(),
                        b = this.getTitle(),
                        c = this.getContent();
                    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in")
                },
                hasContent: function() {
                    return this.getTitle() || this.getContent()
                },
                getContent: function() {
                    var a, b = this.$element,
                        c = this.options;
                    return a = b.attr("data-content") || (typeof c.content == "function" ? c.content.call(b[0]) : c.content), a
                },
                tip: function() {
                    return this.$tip || (this.$tip = a(this.options.template)), this.$tip
                },
                destroy: function() {
                    this.hide().$element.off("." + this.type).removeData(this.type)
                }
            });
            var c = a.fn.popover;
            a.fn.popover = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("popover"),
                        f = typeof c == "object" && c;
                    e || d.data("popover", e = new b(this, f)), typeof c == "string" && e[c]()
                })
            }, a.fn.popover.Constructor = b, a.fn.popover.defaults = a.extend({}, a.fn.tooltip.defaults, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"></div></div></div>'
            }), a.fn.popover.noConflict = function() {
                return a.fn.popover = c, this
            }
        }(window.jQuery), ! function(a) {
            "use strict";
            var b = function(b, c) {
                this.$element = a(b), this.options = a.extend({}, a.fn.typeahead.defaults, c), this.matcher = this.options.matcher || this.matcher, this.sorter = this.options.sorter || this.sorter, this.highlighter = this.options.highlighter || this.highlighter, this.updater = this.options.updater || this.updater, this.source = this.options.source, this.$menu = a(this.options.menu), this.shown = !1, this.listen()
            };
            b.prototype = {
                constructor: b,
                select: function() {
                    var a = this.$menu.find(".active").attr("data-value");
                    return this.$element.val(this.updater(a)).change(), this.hide()
                },
                updater: function(a) {
                    return a
                },
                show: function() {
                    var b = a.extend({}, this.$element.position(), {
                        height: this.$element[0].offsetHeight
                    });
                    return this.$menu.insertAfter(this.$element).css({
                        top: b.top + b.height,
                        left: b.left
                    }).show(), this.shown = !0, this
                },
                hide: function() {
                    return this.$menu.hide(), this.shown = !1, this
                },
                lookup: function(b) {
                    var c;
                    return this.query = this.$element.val(), !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (c = a.isFunction(this.source) ? this.source(this.query, a.proxy(this.process, this)) : this.source, c ? this.process(c) : this)
                },
                process: function(b) {
                    var c = this;
                    return b = a.grep(b, function(a) {
                        return c.matcher(a)
                    }), b = this.sorter(b), b.length ? this.render(b.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
                },
                matcher: function(a) {
                    return ~a.toLowerCase().indexOf(this.query.toLowerCase())
                },
                sorter: function(a) {
                    var b = [],
                        c = [],
                        d = [],
                        e;
                    while (e = a.shift()) e.toLowerCase().indexOf(this.query.toLowerCase()) ? ~e.indexOf(this.query) ? c.push(e) : d.push(e) : b.push(e);
                    return b.concat(c, d)
                },
                highlighter: function(a) {
                    var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                    return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
                        return "<strong>" + b + "</strong>"
                    })
                },
                render: function(b) {
                    var c = this;
                    return b = a(b).map(function(b, d) {
                        return b = a(c.options.item).attr("data-value", d), b.find("a").html(c.highlighter(d)), b[0]
                    }), b.first().addClass("active"), this.$menu.html(b), this
                },
                next: function(b) {
                    var c = this.$menu.find(".active").removeClass("active"),
                        d = c.next();
                    d.length || (d = a(this.$menu.find("li")[0])), d.addClass("active")
                },
                prev: function(a) {
                    var b = this.$menu.find(".active").removeClass("active"),
                        c = b.prev();
                    c.length || (c = this.$menu.find("li").last()), c.addClass("active")
                },
                listen: function() {
                    this.$element.on("blur", a.proxy(this.blur, this)).on("keypress", a.proxy(this.keypress, this)).on("keyup", a.proxy(this.keyup, this)), this.eventSupported("keydown") && this.$element.on("keydown", a.proxy(this.keydown, this)), this.$menu.on("click", a.proxy(this.click, this)).on("mouseenter", "li", a.proxy(this.mouseenter, this))
                },
                eventSupported: function(a) {
                    var b = a in this.$element;
                    return b || (this.$element.setAttribute(a, "return;"), b = typeof this.$element[a] == "function"), b
                },
                move: function(a) {
                    if (!this.shown) return;
                    switch (a.keyCode) {
                        case 9:
                        case 13:
                        case 27:
                            a.preventDefault();
                            break;
                        case 38:
                            a.preventDefault(), this.prev();
                            break;
                        case 40:
                            a.preventDefault(), this.next()
                    }
                    a.stopPropagation()
                },
                keydown: function(b) {
                    this.suppressKeyPressRepeat = ~a.inArray(b.keyCode, [40, 38, 9, 13, 27]), this.move(b)
                },
                keypress: function(a) {
                    if (this.suppressKeyPressRepeat) return;
                    this.move(a)
                },
                keyup: function(a) {
                    switch (a.keyCode) {
                        case 40:
                        case 38:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        case 9:
                        case 13:
                            if (!this.shown) return;
                            this.select();
                            break;
                        case 27:
                            if (!this.shown) return;
                            this.hide();
                            break;
                        default:
                            this.lookup()
                    }
                    a.stopPropagation(), a.preventDefault()
                },
                blur: function(a) {
                    var b = this;
                    setTimeout(function() {
                        b.hide()
                    }, 150)
                },
                click: function(a) {
                    a.stopPropagation(), a.preventDefault(), this.select()
                },
                mouseenter: function(b) {
                    this.$menu.find(".active").removeClass("active"), a(b.currentTarget).addClass("active")
                }
            };
            var c = a.fn.typeahead;
            a.fn.typeahead = function(c) {
                return this.each(function() {
                    var d = a(this),
                        e = d.data("typeahead"),
                        f = typeof c == "object" && c;
                    e || d.data("typeahead", e = new b(this, f)), typeof c == "string" && e[c]()
                })
            }, a.fn.typeahead.defaults = {
                source: [],
                items: 8,
                menu: '<ul class="typeahead dropdown-menu"></ul>',
                item: '<li><a href="#"></a></li>',
                minLength: 1
            }, a.fn.typeahead.Constructor = b, a.fn.typeahead.noConflict = function() {
                return a.fn.typeahead = c, this
            }, a(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(b) {
                var c = a(this);
                if (c.data("typeahead")) return;
                b.preventDefault(), c.typeahead(c.data())
            })
        }(window.jQuery), ! function(a) {
            function d(a) {
                return function(b) {
                    if (this === b.target) return a.apply(this, arguments)
                }
            }
            "use strict";
            var b = function(a, b) {
                this.init(a, b)
            };
            b.prototype = {
                constructor: b,
                init: function(b, c) {
                    this.$element = a(b), this.options = a.extend({}, a.fn.modalmanager.defaults, this.$element.data(), typeof c == "object" && c), this.stack = [], this.backdropCount = 0;
                    if (this.options.resize) {
                        var d, e = this;
                        a(window).on("resize.modal", function() {
                            d && clearTimeout(d), d = setTimeout(function() {
                                for (var a = 0; a < e.stack.length; a++) e.stack[a].isShown && e.stack[a].layout()
                            }, 10)
                        })
                    }
                },
                createModal: function(b, c) {
                    a(b).modal(a.extend({
                        manager: this
                    }, c))
                },
                appendModal: function(b) {
                    this.stack.push(b);
                    var c = this;
                    b.$element.on("show.modalmanager", d(function(d) {
                        var e = function() {
                            b.isShown = !0;
                            var d = a.support.transition && b.$element.hasClass("fade");
                            c.$element.toggleClass("modal-open", c.hasOpenModal()).toggleClass("page-overflow", a(window).height() < c.$element.height()), b.$parent = b.$element.parent(), b.$container = c.createContainer(b), b.$element.appendTo(b.$container), c.backdrop(b, function() {
                                b.$element.show(), d && b.$element[0].offsetWidth, b.layout(), b.$element.addClass("in").attr("aria-hidden", !1);
                                var e = function() {
                                    c.setFocus(), b.$element.trigger("shown")
                                };
                                d ? b.$element.one(a.support.transition.end, e) : e()
                            })
                        };
                        b.options.replace ? c.replace(e) : e()
                    })), b.$element.on("hidden.modalmanager", d(function(d) {
                        c.backdrop(b), b.$backdrop ? a.support.transition && b.$element.hasClass("fade") ? b.$backdrop.one(a.support.transition.end, function() {
                            c.destroyModal(b)
                        }) : c.destroyModal(b) : c.destroyModal(b)
                    })), b.$element.on("destroy.modalmanager", d(function(a) {
                        c.removeModal(b)
                    }))
                },
                destroyModal: function(a) {
                    a.destroy();
                    var b = this.hasOpenModal();
                    this.$element.toggleClass("modal-open", b), b || this.$element.removeClass("page-overflow"), this.removeContainer(a), this.setFocus()
                },
                hasOpenModal: function() {
                    for (var a = 0; a < this.stack.length; a++)
                        if (this.stack[a].isShown) return !0;
                    return !1
                },
                setFocus: function() {
                    var a;
                    for (var b = 0; b < this.stack.length; b++) this.stack[b].isShown && (a = this.stack[b]);
                    if (!a) return;
                    a.focus()
                },
                removeModal: function(a) {
                    a.$element.off(".modalmanager"), a.$backdrop && this.removeBackdrop.call(a), this.stack.splice(this.getIndexOfModal(a), 1)
                },
                getModalAt: function(a) {
                    return this.stack[a]
                },
                getIndexOfModal: function(a) {
                    for (var b = 0; b < this.stack.length; b++)
                        if (a === this.stack[b]) return b
                },
                replace: function(b) {
                    var c;
                    for (var e = 0; e < this.stack.length; e++) this.stack[e].isShown && (c = this.stack[e]);
                    c ? (this.$backdropHandle = c.$backdrop, c.$backdrop = null, b && c.$element.one("hidden", d(a.proxy(b, this))), c.hide()) : b && b()
                },
                removeBackdrop: function(a) {
                    a.$backdrop.remove(), a.$backdrop = null
                },
                createBackdrop: function(b) {
                    var c;
                    return this.$backdropHandle ? (c = this.$backdropHandle, c.off(".modalmanager"), this.$backdropHandle = null, this.isLoading && this.removeSpinner()) : c = a('<div class="modal-backdrop ' + b + '" />').appendTo(this.$element), c
                },
                removeContainer: function(a) {
                    a.$container.remove(), a.$container = null
                },
                createContainer: function(b) {
                    var e;
                    return e = a('<div class="modal-scrollable">').css("z-index", c("modal", b ? this.getIndexOfModal(b) : this.stack.length)).appendTo(this.$element), b && b.options.backdrop != "static" ? e.on("click.modal", d(function(a) {
                        b.hide()
                    })) : b && e.on("click.modal", d(function(a) {
                        b.attention()
                    })), e
                },
                backdrop: function(b, d) {
                    var e = b.$element.hasClass("fade") ? "fade" : "",
                        f = b.options.backdrop && this.backdropCount < this.options.backdropLimit;
                    if (b.isShown && f) {
                        var g = a.support.transition && e && !this.$backdropHandle;
                        b.$backdrop = this.createBackdrop(e), b.$backdrop.css("z-index", c("backdrop", this.getIndexOfModal(b))), g && b.$backdrop[0].offsetWidth, b.$backdrop.addClass("in"), this.backdropCount += 1, g ? b.$backdrop.one(a.support.transition.end, d) : d()
                    } else if (!b.isShown && b.$backdrop) {
                        b.$backdrop.removeClass("in"), this.backdropCount -= 1;
                        var h = this;
                        a.support.transition && b.$element.hasClass("fade") ? b.$backdrop.one(a.support.transition.end, function() {
                            h.removeBackdrop(b)
                        }) : h.removeBackdrop(b)
                    } else d && d()
                },
                removeSpinner: function() {
                    this.$spinner && this.$spinner.remove(), this.$spinner = null, this.isLoading = !1
                },
                removeLoading: function() {
                    this.$backdropHandle && this.$backdropHandle.remove(), this.$backdropHandle = null, this.removeSpinner()
                },
                loading: function(b) {
                    b = b || function() {}, this.$element.toggleClass("modal-open", !this.isLoading || this.hasOpenModal()).toggleClass("page-overflow", a(window).height() < this.$element.height());
                    if (!this.isLoading) {
                        this.$backdropHandle = this.createBackdrop("fade"), this.$backdropHandle[0].offsetWidth, this.$backdropHandle.css("z-index", c("backdrop", this.stack.length)).addClass("in");
                        var d = a(this.options.spinner).css("z-index", c("modal", this.stack.length)).appendTo(this.$element).addClass("in");
                        this.$spinner = a(this.createContainer()).append(d).on("click.modalmanager", a.proxy(this.loading, this)), this.isLoading = !0, a.support.transition ? this.$backdropHandle.one(a.support.transition.end, b) : b()
                    } else if (this.isLoading && this.$backdropHandle) {
                        this.$backdropHandle.removeClass("in");
                        var e = this;
                        a.support.transition ? this.$backdropHandle.one(a.support.transition.end, function() {
                            e.removeLoading()
                        }) : e.removeLoading()
                    } else b && b(this.isLoading)
                }
            };
            var c = function() {
                var b, c = {};
                return function(d, e) {
                    if (typeof b == "undefined") {
                        var f = a('<div class="modal hide" />').appendTo("body"),
                            g = a('<div class="modal-backdrop hide" />').appendTo("body");
                        c.modal = +f.css("z-index"), c.backdrop = +g.css("z-index"), b = c.modal - c.backdrop, f.remove(), g.remove(), g = f = null
                    }
                    return c[d] + b * e
                }
            }();
            a.fn.modalmanager = function(c, d) {
                return this.each(function() {
                    var e = a(this),
                        f = e.data("modalmanager");
                    f || e.data("modalmanager", f = new b(this, c)), typeof c == "string" && f[c].apply(f, [].concat(d))
                })
            }, a.fn.modalmanager.defaults = {
                backdropLimit: 999,
                resize: !0,
                spinner: '<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>'
            }, a.fn.modalmanager.Constructor = b
        }(jQuery), ! function(a) {
            "use strict";
            var b = function(a, b) {
                this.init(a, b)
            };
            b.prototype = {
                constructor: b,
                init: function(b, c) {
                    this.options = c, this.$element = a(b).delegate('[data-dismiss="modal"]', "click.dismiss.modal", a.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
                    var d = typeof this.options.manager == "function" ? this.options.manager.call(this) : this.options.manager;
                    d = d.appendModal ? d : a(d).modalmanager().data("modalmanager"), d.appendModal(this)
                },
                toggle: function() {
                    return this[this.isShown ? "hide" : "show"]()
                },
                show: function() {
                    var b = a.Event("show");
                    if (this.isShown) return;
                    this.$element.trigger(b);
                    if (b.isDefaultPrevented()) return;
                    this.escape(), this.tab(), this.options.loading && this.loading()
                },
                hide: function(b) {
                    b && b.preventDefault(), b = a.Event("hide"), this.$element.trigger(b);
                    if (!this.isShown || b.isDefaultPrevented()) return this.isShown = !1;
                    this.isShown = !1, this.escape(), this.tab(), this.isLoading && this.loading(), a(document).off("focusin.modal"), this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal()
                },
                layout: function() {
                    var b = this.options.height ? "height" : "max-height",
                        c = this.options.height || this.options.maxHeight;
                    if (this.options.width) {
                        this.$element.css("width", this.options.width);
                        var d = this;
                        this.$element.css("margin-left", function() {
                            return /%/ig.test(d.options.width) ? -(parseInt(d.options.width) / 2) + "%" : -(a(this).width() / 2) + "px"
                        })
                    } else this.$element.css("width", ""), this.$element.css("margin-left", "");
                    this.$element.find(".modal-body").css("overflow", "").css(b, "");
                    var e = a(window).height() - 10 < this.$element.height();
                    c && this.$element.find(".modal-body").css("overflow", "auto").css(b, c), e || this.options.modalOverflow ? this.$element.css("margin-top", 0).addClass("modal-overflow") : this.$element.css("margin-top", 0 - this.$element.height() / 2).removeClass("modal-overflow")
                },
                tab: function() {
                    var b = this;
                    this.isShown && this.options.consumeTab ? this.$element.on("keydown.tabindex.modal", "[data-tabindex]", function(c) {
                        if (c.keyCode && c.keyCode == 9) {
                            var d = a(this),
                                e = a(this);
                            b.$element.find("[data-tabindex]:enabled:not([readonly])").each(function(b) {
                                b.shiftKey ? d = d.data("tabindex") > a(this).data("tabindex") ? d = a(this) : e = a(this) : d = d.data("tabindex") < a(this).data("tabindex") ? d = a(this) : e = a(this)
                            }), d[0] !== a(this)[0] ? d.focus() : e.focus(), c.preventDefault()
                        }
                    }) : this.isShown || this.$element.off("keydown.tabindex.modal")
                },
                escape: function() {
                    var a = this;
                    this.isShown && this.options.keyboard ? (this.$element.attr("tabindex") || this.$element.attr("tabindex", -1), this.$element.on("keyup.dismiss.modal", function(b) {
                        b.which == 27 && a.hide()
                    })) : this.isShown || this.$element.off("keyup.dismiss.modal")
                },
                hideWithTransition: function() {
                    var b = this,
                        c = setTimeout(function() {
                            b.$element.off(a.support.transition.end), b.hideModal()
                        }, 500);
                    this.$element.one(a.support.transition.end, function() {
                        clearTimeout(c), b.hideModal()
                    })
                },
                hideModal: function() {
                    this.$element.hide().trigger("hidden");
                    var a = this.options.height ? "height" : "max-height",
                        b = this.options.height || this.options.maxHeight;
                    b && this.$element.find(".modal-body").css("overflow", "").css(a, "")
                },
                removeLoading: function() {
                    this.$loading.remove(), this.$loading = null, this.isLoading = !1
                },
                loading: function(b) {
                    b = b || function() {};
                    var c = this.$element.hasClass("fade") ? "fade" : "";
                    if (!this.isLoading) {
                        var d = a.support.transition && c;
                        this.$loading = a('<div class="loading-mask ' + c + '">').append(this.options.spinner).appendTo(this.$element), d && this.$loading[0].offsetWidth, this.$loading.addClass("in"), this.isLoading = !0, d ? this.$loading.one(a.support.transition.end, b) : b()
                    } else if (this.isLoading && this.$loading) {
                        this.$loading.removeClass("in");
                        var e = this;
                        a.support.transition && this.$element.hasClass("fade") ? this.$loading.one(a.support.transition.end, function() {
                            e.removeLoading()
                        }) : e.removeLoading()
                    } else b && b(this.isLoading)
                },
                focus: function() {
                    var a = this.$element.find(this.options.focusOn);
                    a = a.length ? a : this.$element, a.focus()
                },
                attention: function() {
                    if (this.options.attentionAnimation) {
                        this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);
                        var a = this;
                        setTimeout(function() {
                            a.$element.addClass("animated").addClass(a.options.attentionAnimation)
                        }, 0)
                    }
                    this.focus()
                },
                destroy: function() {
                    var b = a.Event("destroy");
                    this.$element.trigger(b);
                    if (b.isDefaultPrevented()) return;
                    this.teardown()
                },
                teardown: function() {
                    if (!this.$parent.length) {
                        this.$element.remove(), this.$element = null;
                        return
                    }
                    this.$parent !== this.$element.parent() && this.$element.appendTo(this.$parent), this.$element.off(".modal"), this.$element.removeData("modal"), this.$element.removeClass("in").attr("aria-hidden", !0)
                }
            }, a.fn.modal = function(c, d) {
                return this.each(function() {
                    var e = a(this),
                        f = e.data("modal"),
                        g = a.extend({}, a.fn.modal.defaults, e.data(), typeof c == "object" && c);
                    f || e.data("modal", f = new b(this, g)), typeof c == "string" ? f[c].apply(f, [].concat(d)) : g.show && f.show()
                })
            }, a.fn.modal.defaults = {
                keyboard: !0,
                backdrop: !0,
                loading: !1,
                show: !0,
                width: null,
                height: null,
                maxHeight: null,
                modalOverflow: !1,
                consumeTab: !0,
                focusOn: null,
                replace: !1,
                resize: !1,
                attentionAnimation: "shake",
                manager: "body",
                spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>'
            }, a.fn.modal.Constructor = b, a(function() {
                a(document).off(".modal").on("click.modal.data-api", '[data-toggle="modal"]', function(b) {
                    var c = a(this),
                        d = c.attr("href"),
                        e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
                        f = e.data("modal") ? "toggle" : a.extend({
                            remote: !/#/.test(d) && d
                        }, e.data(), c.data());
                    b.preventDefault(), e.modal(f).one("hide", function() {
                        c.focus()
                    })
                })
            })
        }(window.jQuery),
        function(a) {
            a.cookie = function(b, c, d) {
                if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(c)) || c === null || c === undefined)) {
                    d = a.extend({}, d);
                    if (c === null || c === undefined) d.expires = -1;
                    if (typeof d.expires == "number") {
                        var e = d.expires,
                            f = d.expires = new Date;
                        f.setDate(f.getDate() + e)
                    }
                    return c = String(c), document.cookie = [encodeURIComponent(b), "=", d.raw ? c : encodeURIComponent(c), d.expires ? "; expires=" + d.expires.toUTCString() : "", d.path ? "; path=" + d.path : "", d.domain ? "; domain=" + d.domain : "", d.secure ? "; secure" : ""].join("")
                }
                d = c || {};
                var g = d.raw ? function(a) {
                        return a
                    } : decodeURIComponent,
                    h = document.cookie.split("; ");
                for (var i = 0, j; j = h[i] && h[i].split("="); i++)
                    if (g(j[0]) === b) return g(j[1] || "");
                return null
            }
        }(jQuery),
        function(a) {
            jQuery.fn.observe_field = function(b, c) {
                return b *= 1e3, this.each(function() {
                    var d = a(this),
                        e = d.val(),
                        f = function() {
                            var a = d.val();
                            e != a && (e = a, d.map(c))
                        },
                        g = function() {
                            h && (clearInterval(h), h = setInterval(f, b))
                        };
                    f();
                    var h = setInterval(f, b);
                    d.bind("keyup click mousemove", g)
                })
            }
        }(jQuery),
        function(a, b, c, d) {
            "use strict";
            var e = c(a),
                f = c(b),
                g = c.fancybox = function() {
                    g.open.apply(this, arguments)
                },
                h = null,
                i = b.createTouch !== d,
                j = function(a) {
                    return a && a.hasOwnProperty && a instanceof c
                },
                k = function(a) {
                    return a && c.type(a) === "string"
                },
                l = function(a) {
                    return k(a) && a.indexOf("%") > 0
                },
                m = function(a) {
                    return a && (!a.style.overflow || a.style.overflow !== "hidden") && (a.clientWidth && a.scrollWidth > a.clientWidth || a.clientHeight && a.scrollHeight > a.clientHeight)
                },
                n = function(a, b) {
                    var c = parseInt(a, 10);
                    return b && l(a) && (c = g.getViewport()[b] / 100 * c), Math.ceil(c)
                },
                o = function(a, b) {
                    return n(a, b) + "px"
                };
            c.extend(g, {
                version: "2.1.0",
                defaults: {
                    padding: 15,
                    margin: 20,
                    width: 800,
                    height: 600,
                    minWidth: 100,
                    minHeight: 100,
                    maxWidth: 9999,
                    maxHeight: 9999,
                    autoSize: !0,
                    autoHeight: !1,
                    autoWidth: !1,
                    autoResize: !i,
                    autoCenter: !i,
                    fitToView: !0,
                    aspectRatio: !1,
                    topRatio: .5,
                    leftRatio: .5,
                    scrolling: "auto",
                    wrapCSS: "",
                    arrows: !0,
                    closeBtn: !0,
                    closeClick: !1,
                    nextClick: !1,
                    mouseWheel: !0,
                    autoPlay: !1,
                    playSpeed: 3e3,
                    preload: 3,
                    modal: !1,
                    loop: !0,
                    ajax: {
                        dataType: "html",
                        headers: {
                            "X-fancyBox": !0
                        }
                    },
                    iframe: {
                        scrolling: "auto",
                        preload: !0
                    },
                    swf: {
                        wmode: "transparent",
                        allowfullscreen: "true",
                        allowscriptaccess: "always"
                    },
                    keys: {
                        next: {
                            13: "left",
                            34: "up",
                            39: "left",
                            40: "up"
                        },
                        prev: {
                            8: "right",
                            33: "down",
                            37: "right",
                            38: "down"
                        },
                        close: [27],
                        play: [32],
                        toggle: [70]
                    },
                    direction: {
                        next: "left",
                        prev: "right"
                    },
                    scrollOutside: !0,
                    index: 0,
                    type: null,
                    href: null,
                    content: null,
                    title: null,
                    tpl: {
                        wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                        image: '<img class="fancybox-image" src="{href}" alt="" />',
                        iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"' + (c.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                        error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                        closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                        next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                        prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                    },
                    openEffect: "fade",
                    openSpeed: 250,
                    openEasing: "swing",
                    openOpacity: !0,
                    openMethod: "zoomIn",
                    closeEffect: "fade",
                    closeSpeed: 250,
                    closeEasing: "swing",
                    closeOpacity: !0,
                    closeMethod: "zoomOut",
                    nextEffect: "elastic",
                    nextSpeed: 250,
                    nextEasing: "swing",
                    nextMethod: "changeIn",
                    prevEffect: "elastic",
                    prevSpeed: 250,
                    prevEasing: "swing",
                    prevMethod: "changeOut",
                    helpers: {
                        overlay: {
                            closeClick: !0,
                            speedOut: 200,
                            showEarly: !0,
                            css: {}
                        },
                        title: {
                            type: "float"
                        }
                    },
                    onCancel: c.noop,
                    beforeLoad: c.noop,
                    afterLoad: c.noop,
                    beforeShow: c.noop,
                    afterShow: c.noop,
                    beforeChange: c.noop,
                    beforeClose: c.noop,
                    afterClose: c.noop
                },
                group: {},
                opts: {},
                previous: null,
                coming: null,
                current: null,
                isActive: !1,
                isOpen: !1,
                isOpened: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null,
                player: {
                    timer: null,
                    isActive: !1
                },
                ajaxLoad: null,
                imgPreload: null,
                transitions: {},
                helpers: {},
                open: function(a, b) {
                    if (!a) return;
                    c.isPlainObject(b) || (b = {});
                    if (!1 === g.close(!0)) return;
                    return c.isArray(a) || (a = j(a) ? c(a).get() : [a]), c.each(a, function(e, f) {
                        var h = {},
                            i, l, m, n, o, p, q;
                        c.type(f) === "object" && (f.nodeType && (f = c(f)), j(f) ? (h = {
                            href: f.attr("href"),
                            title: f.attr("title"),
                            isDom: !0,
                            element: f
                        }, c.metadata && c.extend(!0, h, f.metadata())) : h = f), i = b.href || h.href || (k(f) ? f : null), l = b.title !== d ? b.title : h.title || "", m = b.content || h.content, n = m ? "html" : b.type || h.type, !n && h.isDom && (n = f.data("fancybox-type"), n || (o = f.prop("class").match(/fancybox\.(\w+)/), n = o ? o[1] : null)), k(i) && (n || (g.isImage(i) ? n = "image" : g.isSWF(i) ? n = "swf" : i.charAt(0) === "#" ? n = "inline" : k(f) && (n = "html", m = f)), n === "ajax" && (p = i.split(/\s+/, 2), i = p.shift(), q = p.shift())), m || (n === "inline" ? i ? m = c(k(i) ? i.replace(/.*(?=#[^\s]+$)/, "") : i) : h.isDom && (m = f) : n === "html" ? m = i : !n && !i && h.isDom && (n = "inline", m = f)), c.extend(h, {
                            href: i,
                            type: n,
                            content: m,
                            title: l,
                            selector: q
                        }), a[e] = h
                    }), g.opts = c.extend(!0, {}, g.defaults, b), b.keys !== d && (g.opts.keys = b.keys ? c.extend({}, g.defaults.keys, b.keys) : !1), g.group = a, g._start(g.opts.index)
                },
                cancel: function() {
                    var a = g.coming;
                    if (!a || !1 === g.trigger("onCancel")) return;
                    g.hideLoading(), g.ajaxLoad && g.ajaxLoad.abort(), g.ajaxLoad = null, g.imgPreload && (g.imgPreload.onload = g.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0).trigger("onReset").remove(), g.current || g.trigger("afterClose"), g.coming = null
                },
                close: function(a) {
                    g.cancel();
                    if (!1 === g.trigger("beforeClose")) return;
                    g.unbindEvents(), !g.isOpen || a === !0 ? (c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), g._afterZoomOut()) : (g.isOpen = g.isOpened = !1, g.isClosing = !0, c(".fancybox-item, .fancybox-nav").remove(), g.wrap.stop(!0, !0).removeClass("fancybox-opened"), g.wrap.css("position") === "fixed" && g.wrap.css(g._getPosition(!0)), g.transitions[g.current.closeMethod]())
                },
                play: function(a) {
                    var b = function() {
                            clearTimeout(g.player.timer)
                        },
                        d = function() {
                            b(), g.current && g.player.isActive && (g.player.timer = setTimeout(g.next, g.current.playSpeed))
                        },
                        e = function() {
                            b(), c("body").unbind(".player"), g.player.isActive = !1, g.trigger("onPlayEnd")
                        },
                        f = function() {
                            g.current && (g.current.loop || g.current.index < g.group.length - 1) && (g.player.isActive = !0, c("body").bind({
                                "afterShow.player onUpdate.player": d,
                                "onCancel.player beforeClose.player": e,
                                "beforeLoad.player": b
                            }), d(), g.trigger("onPlayStart"))
                        };
                    a === !0 || !g.player.isActive && a !== !1 ? f() : e()
                },
                next: function(a) {
                    var b = g.current;
                    b && (k(a) || (a = b.direction.next), g.jumpto(b.index + 1, a, "next"))
                },
                prev: function(a) {
                    var b = g.current;
                    b && (k(a) || (a = b.direction.prev), g.jumpto(b.index - 1, a, "prev"))
                },
                jumpto: function(a, b, c) {
                    var e = g.current;
                    if (!e) return;
                    a = n(a), g.direction = b || e.direction[a >= e.index ? "next" : "prev"], g.router = c || "jumpto", e.loop && (a < 0 && (a = e.group.length + a % e.group.length), a %= e.group.length), e.group[a] !== d && (g.cancel(), g._start(a))
                },
                reposition: function(a, b) {
                    var c;
                    g.isOpen && (c = g._getPosition(b), a && a.type === "scroll" ? (delete c.position, g.wrap.stop(!0, !0).animate(c, 200)) : g.wrap.css(c))
                },
                update: function(a) {
                    var b = a && a.type,
                        c = !b || b === "orientationchange";
                    c && (clearTimeout(h), h = null);
                    if (!g.isOpen || h) return;
                    if (c || i) g.wrap.removeAttr("style").addClass("fancybox-tmp"), g.trigger("onUpdate");
                    h = setTimeout(function() {
                        var c = g.current;
                        if (!c) return;
                        g.wrap.removeClass("fancybox-tmp"), b !== "scroll" && g._setDimension(), (b !== "scroll" || !c.canShrink) && g.reposition(a), g.trigger("onUpdate"), h = null
                    }, i ? 500 : c ? 20 : 300)
                },
                toggle: function(a) {
                    g.isOpen && (g.current.fitToView = c.type(a) === "boolean" ? a : !g.current.fitToView, g.update())
                },
                hideLoading: function() {
                    f.unbind("keypress.fb"), c("#fancybox-loading").remove()
                },
                showLoading: function() {
                    var a, b;
                    g.hideLoading(), f.bind("keypress.fb", function(a) {
                        (a.which || a.keyCode) === 27 && (a.preventDefault(), g.cancel())
                    }), a = c('<div id="fancybox-loading"><div></div></div>').click(g.cancel).appendTo("body"), g.defaults.fixed || (b = g.getViewport(), a.css({
                        position: "absolute",
                        top: b.h * .5 + b.y,
                        left: b.w * .5 + b.x
                    }))
                },
                getViewport: function() {
                    var b = g.current ? g.current.locked : !1,
                        c = {
                            x: e.scrollLeft(),
                            y: e.scrollTop()
                        };
                    return b ? (c.w = b[0].clientWidth, c.h = b[0].clientHeight) : (c.w = i && a.innerWidth ? a.innerWidth : e.width(), c.h = i && a.innerHeight ? a.innerHeight : e.height()), c
                },
                unbindEvents: function() {
                    g.wrap && j(g.wrap) && g.wrap.unbind(".fb"), f.unbind(".fb"), e.unbind(".fb")
                },
                bindEvents: function() {
                    var a = g.current,
                        b;
                    if (!a) return;
                    e.bind("orientationchange.fb" + (i ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), g.update), b = a.keys, b && f.bind("keydown.fb", function(e) {
                        var f = e.which || e.keyCode,
                            h = e.target || e.srcElement;
                        !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!h || !h.type && !c(h).is("[contenteditable]")) && c.each(b, function(b, h) {
                            if (a.group.length > 1 && h[f] !== d) return g[b](h[f]), e.preventDefault(), !1;
                            if (c.inArray(f, h) > -1) return g[b](), e.preventDefault(), !1
                        })
                    }), c.fn.mousewheel && a.mouseWheel && g.wrap.bind("mousewheel.fb", function(b, d, e, f) {
                        var h = b.target || null,
                            i = c(h),
                            j = !1;
                        while (i.length) {
                            if (j || i.is(".fancybox-skin") || i.is(".fancybox-wrap")) break;
                            j = m(i[0]), i = c(i).parent()
                        }
                        d !== 0 && !j && g.group.length > 1 && !a.canShrink && (f > 0 || e > 0 ? g.prev(f > 0 ? "down" : "left") : (f < 0 || e < 0) && g.next(f < 0 ? "up" : "right"), b.preventDefault())
                    })
                },
                trigger: function(a, b) {
                    var d, e = b || g.coming || g.current;
                    if (!e) return;
                    c.isFunction(e[a]) && (d = e[a].apply(e, Array.prototype.slice.call(arguments, 1)));
                    if (d === !1) return !1;
                    a === "onCancel" && !g.isOpened && (g.isActive = !1), e.helpers && c.each(e.helpers, function(b, d) {
                        d && g.helpers[b] && c.isFunction(g.helpers[b][a]) && g.helpers[b][a](d, e)
                    }), c.event.trigger(a + ".fb")
                },
                isImage: function(a) {
                    return k(a) && a.match(/\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$/i)
                },
                isSWF: function(a) {
                    return k(a) && a.match(/\.(swf)((\?|#).*)?$/i)
                },
                _start: function(a) {
                    var b = {},
                        d, e, f, h, j;
                    a = n(a), d = g.group[a] || null;
                    if (!d) return !1;
                    b = c.extend(!0, {}, g.opts, d), h = b.margin, j = b.padding, c.type(h) === "number" && (b.margin = [h, h, h, h]), c.type(j) === "number" && (b.padding = [j, j, j, j]), b.modal && c.extend(!0, b, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), b.autoSize && (b.autoWidth = b.autoHeight = !0), b.width === "auto" && (b.autoWidth = !0), b.height === "auto" && (b.autoHeight = !0), b.group = g.group, b.index = a, g.coming = b;
                    if (!1 === g.trigger("beforeLoad")) {
                        g.coming = null;
                        return
                    }
                    f = b.type, e = b.href;
                    if (!f) return g.coming = null, g.current && g.router && g.router !== "jumpto" ? (g.current.index = a, g[g.router](g.direction)) : !1;
                    g.isActive = !0;
                    if (f === "image" || f === "swf") b.autoHeight = b.autoWidth = !1, b.scrolling = "visible";
                    f === "image" && (b.aspectRatio = !0), f === "iframe" && i && (b.scrolling = "scroll"), b.wrap = c(b.tpl.wrap).addClass("fancybox-" + (i ? "mobile" : "desktop") + " fancybox-type-" + f + " fancybox-tmp " + b.wrapCSS).appendTo(b.parent), c.extend(b, {
                        skin: c(".fancybox-skin", b.wrap),
                        outer: c(".fancybox-outer", b.wrap),
                        inner: c(".fancybox-inner", b.wrap)
                    }), c.each(["Top", "Right", "Bottom", "Left"], function(a, c) {
                        b.skin.css("padding" + c, o(b.padding[a]))
                    }), g.trigger("onReady");
                    if (f === "inline" || f === "html") {
                        if (!b.content || !b.content.length) return g._error("content")
                    } else if (!e) return g._error("href");
                    f === "image" ? g._loadImage() : f === "ajax" ? g._loadAjax() : f === "iframe" ? g._loadIframe() : g._afterLoad()
                },
                _error: function(a) {
                    c.extend(g.coming, {
                        type: "html",
                        autoWidth: !0,
                        autoHeight: !0,
                        minWidth: 0,
                        minHeight: 0,
                        scrolling: "no",
                        hasError: a,
                        content: g.coming.tpl.error
                    }), g._afterLoad()
                },
                _loadImage: function() {
                    var a = g.imgPreload = new Image;
                    a.onload = function() {
                        this.onload = this.onerror = null, g.coming.width = this.width, g.coming.height = this.height, g._afterLoad()
                    }, a.onerror = function() {
                        this.onload = this.onerror = null, g._error("image")
                    }, a.src = g.coming.href, (a.complete === d || !a.complete) && g.showLoading()
                },
                _loadAjax: function() {
                    var a = g.coming;
                    g.showLoading(), g.ajaxLoad = c.ajax(c.extend({}, a.ajax, {
                        url: a.href,
                        error: function(a, b) {
                            g.coming && b !== "abort" ? g._error("ajax", a) : g.hideLoading()
                        },
                        success: function(b, c) {
                            c === "success" && (a.content = b, g._afterLoad())
                        }
                    }))
                },
                _loadIframe: function() {
                    var a = g.coming,
                        b = c(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", i ? "auto" : a.iframe.scrolling).attr("src", a.href);
                    c(a.wrap).bind("onReset", function() {
                        try {
                            c(this).find("iframe").hide().attr("src", "//web.archive.org/web/20130416034908/https://about:blank").end().empty()
                        } catch (a) {}
                    }), a.iframe.preload && (g.showLoading(), b.one("load", function() {
                        c(this).data("ready", 1), i || c(this).bind("load.fb", g.update), c(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), g._afterLoad()
                    })), a.content = b.appendTo(a.inner), a.iframe.preload || g._afterLoad()
                },
                _preloadImages: function() {
                    var a = g.group,
                        b = g.current,
                        c = a.length,
                        d = b.preload ? Math.min(b.preload, c - 1) : 0,
                        e, f;
                    for (f = 1; f <= d; f += 1) e = a[(b.index + f) % c], e.type === "image" && e.href && ((new Image).src = e.href)
                },
                _afterLoad: function() {
                    var a = g.coming,
                        b = g.current,
                        d = "fancybox-placeholder",
                        e, f, h, i, k, l;
                    g.hideLoading();
                    if (!a || g.isActive === !1) return;
                    if (!1 === g.trigger("afterLoad", a, b)) {
                        a.wrap.stop(!0).trigger("onReset").remove(), g.coming = null;
                        return
                    }
                    b && (g.trigger("beforeChange", b), b.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove(), b.wrap.css("position") === "fixed" && b.wrap.css(g._getPosition(!0))), g.unbindEvents(), e = a, f = a.content, h = a.type, i = a.scrolling, c.extend(g, {
                        wrap: e.wrap,
                        skin: e.skin,
                        outer: e.outer,
                        inner: e.inner,
                        current: e,
                        previous: b
                    }), k = e.href;
                    switch (h) {
                        case "inline":
                        case "ajax":
                        case "html":
                            e.selector ? f = c("<div>").html(f).find(e.selector) : j(f) && (f.data(d) || f.data(d, c('<div class="' + d + '"></div>').insertAfter(f).hide()), f = f.show().detach(), e.wrap.bind("onReset", function() {
                                c(this).find(f).length && f.hide().replaceAll(f.data(d)).data(d, !1)
                            }));
                            break;
                        case "image":
                            f = e.tpl.image.replace("{href}", k);
                            break;
                        case "swf":
                            f = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + k + '"></param>', l = "", c.each(e.swf, function(a, b) {
                                f += '<param name="' + a + '" value="' + b + '"></param>', l += " " + a + '="' + b + '"'
                            }), f += '<embed src="' + k + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                    }(!j(f) || !f.parent().is(e.inner)) && e.inner.append(f), g.trigger("beforeShow"), e.inner.css("overflow", i === "yes" ? "scroll" : i === "no" ? "hidden" : i), g._setDimension(), e.wrap.removeClass("fancybox-tmp"), e.pos = c.extend({}, e.dim, g._getPosition(!0)), g.isOpen = !1, g.coming = null, g.bindEvents(), g.isOpened ? b.prevMethod && g.transitions[b.prevMethod]() : c(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), g.transitions[g.isOpened ? e.nextMethod : e.openMethod](), g._preloadImages()
                },
                _setDimension: function() {
                    var a = g.getViewport(),
                        b = 0,
                        d = !1,
                        e = !1,
                        f = g.wrap,
                        h = g.skin,
                        i = g.inner,
                        j = g.current,
                        k = j.width,
                        m = j.height,
                        p = j.minWidth,
                        q = j.minHeight,
                        r = j.maxWidth,
                        s = j.maxHeight,
                        t = j.scrolling,
                        u = j.scrollOutside ? j.scrollbarWidth : 0,
                        v = j.margin,
                        w = v[1] + v[3],
                        x = v[0] + v[2],
                        y, z, A, B, C, D, E, G, H, I, J, K, L, M, N;
                    f.add(h).add(i).width("auto").height("auto"), y = h.outerWidth(!0) - h.width(), z = h.outerHeight(!0) - h.height(), A = w + y, B = x + z, C = l(k) ? (a.w - A) * n(k) / 100 : k, D = l(m) ? (a.h - B) * n(m) / 100 : m;
                    if (j.type === "iframe") {
                        M = j.content;
                        if (j.autoHeight && M.data("ready") === 1) try {
                            M[0].contentWindow.document.location && (i.width(C).height(9999), N = M.contents().find("body"), u && N.css("overflow-x", "hidden"), D = N.height())
                        } catch (O) {}
                    } else if (j.autoWidth || j.autoHeight) i.addClass("fancybox-tmp"), j.autoWidth || i.width(C), j.autoHeight || i.height(D), j.autoWidth && (C = i.width()), j.autoHeight && (D = i.height()), i.removeClass("fancybox-tmp");
                    k = n(C), m = n(D), H = C / D, p = n(l(p) ? n(p, "w") - A : p), r = n(l(r) ? n(r, "w") - A : r), q = n(l(q) ? n(q, "h") - B : q), s = n(l(s) ? n(s, "h") - B : s), E = r, G = s, K = a.w - w, L = a.h - x, j.aspectRatio ? (k > r && (k = r, m = k / H), m > s && (m = s, k = m * H), k < p && (k = p, m = k / H), m < q && (m = q, k = m * H)) : (k = Math.max(p, Math.min(k, r)), m = Math.max(q, Math.min(m, s)));
                    if (j.fitToView) {
                        r = Math.min(a.w - A, r), s = Math.min(a.h - B, s), i.width(n(k)).height(n(m)), f.width(n(k + y)), I = f.width(), J = f.height();
                        if (j.aspectRatio)
                            while ((I > K || J > L) && k > p && m > q) {
                                if (b++ > 19) break;
                                m = Math.max(q, Math.min(s, m - 10)), k = m * H, k < p && (k = p, m = k / H), k > r && (k = r, m = k / H), i.width(n(k)).height(n(m)), f.width(n(k + y)), I = f.width(), J = f.height()
                            } else k = Math.max(p, Math.min(k, k - (I - K))), m = Math.max(q, Math.min(m, m - (J - L)))
                    }
                    u && t === "auto" && m < D && k + y + u < K && (k += u), i.width(n(k)).height(n(m)), f.width(n(k + y)), I = f.width(), J = f.height(), d = (I > K || J > L) && k > p && m > q, e = j.aspectRatio ? k < E && m < G && k < C && m < D : (k < E || m < G) && (k < C || m < D), c.extend(j, {
                        dim: {
                            width: o(I),
                            height: o(J)
                        },
                        origWidth: C,
                        origHeight: D,
                        canShrink: d,
                        canExpand: e,
                        wPadding: y,
                        hPadding: z,
                        wrapSpace: J - h.outerHeight(!0),
                        skinSpace: h.height() - m
                    }), !M && j.autoHeight && m > q && m < s && !e && i.height("auto")
                },
                _getPosition: function(a) {
                    var b = g.current,
                        c = g.getViewport(),
                        d = b.margin,
                        e = g.wrap.width() + d[1] + d[3],
                        f = g.wrap.height() + d[0] + d[2],
                        h = {
                            position: "absolute",
                            top: d[0],
                            left: d[3]
                        };
                    return b.autoCenter && b.fixed && !a && f <= c.h && e <= c.w ? h.position = "fixed" : b.locked || (h.top += c.y, h.left += c.x), h.top = o(Math.max(h.top, h.top + (c.h - f) * b.topRatio)), h.left = o(Math.max(h.left, h.left + (c.w - e) * b.leftRatio)), h
                },
                _afterZoomIn: function() {
                    var a = g.current;
                    if (!a) return;
                    g.isOpen = g.isOpened = !0, g.wrap.addClass("fancybox-opened").css("overflow", "visible"), g.reposition(), (a.closeClick || a.nextClick) && g.inner.css("cursor", "pointer").bind("click.fb", function(b) {
                        !c(b.target).is("a") && !c(b.target).parent().is("a") && g[a.closeClick ? "close" : "next"]()
                    }), a.closeBtn && c(a.tpl.closeBtn).appendTo(g.skin).bind("click.fb", g.close), a.arrows && g.group.length > 1 && ((a.loop || a.index > 0) && c(a.tpl.prev).appendTo(g.outer).bind("click.fb", g.prev), (a.loop || a.index < g.group.length - 1) && c(a.tpl.next).appendTo(g.outer).bind("click.fb", g.next)), g.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? g.play(!1) : g.opts.autoPlay && !g.player.isActive && (g.opts.autoPlay = !1, g.play())
                },
                _afterZoomOut: function() {
                    var a = g.current;
                    c(".fancybox-wrap").stop(!0).trigger("onReset").remove(), c.extend(g, {
                        group: {},
                        opts: {},
                        router: !1,
                        current: null,
                        isActive: !1,
                        isOpened: !1,
                        isOpen: !1,
                        isClosing: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    }), g.trigger("afterClose", a)
                }
            }), g.transitions = {
                getOrigPosition: function() {
                    var a = g.current,
                        b = a.element,
                        c = a.orig,
                        d = {},
                        e = 50,
                        f = 50,
                        h = a.hPadding,
                        i = a.wPadding,
                        k = g.getViewport();
                    return !c && a.isDom && b.is(":visible") && (c = b.find("img:first"), c.length || (c = b)), j(c) ? (d = c.offset(), c.is("img") && (e = c.outerWidth(), f = c.outerHeight())) : (d.top = k.y + (k.h - f) * a.topRatio, d.left = k.x + (k.w - e) * a.leftRatio), a.locked && (d.top -= k.y, d.left -= k.x), d = {
                        top: o(d.top - h * a.topRatio),
                        left: o(d.left - i * a.leftRatio),
                        width: o(e + i),
                        height: o(f + h)
                    }, d
                },
                step: function(a, b) {
                    var c, d, e, f = b.prop,
                        h = g.current,
                        i = h.wrapSpace,
                        j = h.skinSpace;
                    if (f === "width" || f === "height") c = b.end === b.start ? 1 : (a - b.start) / (b.end - b.start), g.isClosing && (c = 1 - c), d = f === "width" ? h.wPadding : h.hPadding, e = a - d, g.skin[f](n(f === "width" ? e : e - i * c)), g.inner[f](n(f === "width" ? e : e - i * c - j * c))
                },
                zoomIn: function() {
                    var a = g.current,
                        b = a.pos,
                        d = a.openEffect,
                        e = d === "elastic",
                        f = c.extend({
                            opacity: 1
                        }, b);
                    delete f.position, e ? (b = this.getOrigPosition(), a.openOpacity && (b.opacity = .1)) : d === "fade" && (b.opacity = .1), g.wrap.css(b).animate(f, {
                        duration: d === "none" ? 0 : a.openSpeed,
                        easing: a.openEasing,
                        step: e ? this.step : null,
                        complete: g._afterZoomIn
                    })
                },
                zoomOut: function() {
                    var a = g.current,
                        b = a.closeEffect,
                        c = b === "elastic",
                        d = {
                            opacity: .1
                        };
                    c && (d = this.getOrigPosition(), a.closeOpacity && (d.opacity = .1)), g.wrap.animate(d, {
                        duration: b === "none" ? 0 : a.closeSpeed,
                        easing: a.closeEasing,
                        step: c ? this.step : null,
                        complete: g._afterZoomOut
                    })
                },
                changeIn: function() {
                    var a = g.current,
                        b = a.nextEffect,
                        c = a.pos,
                        d = {
                            opacity: 1
                        },
                        e = g.direction,
                        f = 200,
                        h;
                    c.opacity = .1, b === "elastic" && (h = e === "down" || e === "up" ? "top" : "left", e === "down" || e === "right" ? (c[h] = o(n(c[h]) - f), d[h] = "+=" + f + "px") : (c[h] = o(n(c[h]) + f), d[h] = "-=" + f + "px")), b === "none" ? g._afterZoomIn() : g.wrap.css(c).animate(d, {
                        duration: a.nextSpeed,
                        easing: a.nextEasing,
                        complete: g._afterZoomIn
                    })
                },
                changeOut: function() {
                    var a = g.previous,
                        b = a.prevEffect,
                        d = {
                            opacity: .1
                        },
                        e = g.direction,
                        f = 200;
                    b === "elastic" && (d[e === "down" || e === "up" ? "top" : "left"] = (e === "up" || e === "left" ? "-" : "+") + "=" + f + "px"), a.wrap.animate(d, {
                        duration: b === "none" ? 0 : a.prevSpeed,
                        easing: a.prevEasing,
                        complete: function() {
                            c(this).trigger("onReset").remove()
                        }
                    })
                }
            }, g.helpers.overlay = {
                overlay: null,
                update: function() {
                    var a = "100%",
                        d;
                    this.overlay.width(a).height("100%"), c.browser.msie ? (d = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), f.width() > d && (a = f.width())) : f.width() > e.width() && (a = f.width()), this.overlay.width(a).height(f.height())
                },
                onReady: function(a, d) {
                    c(".fancybox-overlay").stop(!0, !0), this.overlay || c.extend(this, {
                        overlay: c('<div class="fancybox-overlay"></div>').appendTo(d.parent),
                        margin: f.height() > e.height() || c("body").css("overflow-y") === "scroll" ? c("body").css("margin-right") : !1,
                        el: b.all && !b.querySelector ? c("html") : c("body")
                    }), d.fixed && !i && (this.overlay.addClass("fancybox-overlay-fixed"), d.autoCenter && (this.overlay.append(d.wrap), d.locked = this.overlay)), a.showEarly === !0 && this.beforeShow.apply(this, arguments)
                },
                beforeShow: function(a, b) {
                    var d = this.overlay.unbind(".fb").width("auto").height("auto").css(a.css);
                    a.closeClick && d.bind("click.fb", function(a) {
                        c(a.target).hasClass("fancybox-overlay") && g.close()
                    }), b.fixed && !i ? b.locked && (this.el.addClass("fancybox-lock"), this.margin !== !1 && c("body").css("margin-right", n(this.margin) + b.scrollbarWidth)) : this.update(), d.show()
                },
                onUpdate: function(a, b) {
                    (!b.fixed || i) && this.update()
                },
                afterClose: function(a) {
                    var b = this,
                        d = a.speedOut || 0;
                    b.overlay && !g.isActive && b.overlay.fadeOut(d || 0, function() {
                        c("body").css("margin-right", b.margin), b.el.removeClass("fancybox-lock"), b.overlay.remove(), b.overlay = null
                    })
                }
            }, g.helpers.title = {
                beforeShow: function(a) {
                    var b = g.current.title,
                        d = a.type,
                        e, f;
                    if (!k(b) || c.trim(b) === "") return;
                    e = c('<div class="fancybox-title fancybox-title-' + d + '-wrap">' + b + "</div>");
                    switch (d) {
                        case "inside":
                            f = g.skin;
                            break;
                        case "outside":
                            f = g.wrap;
                            break;
                        case "over":
                            f = g.inner;
                            break;
                        default:
                            f = g.skin, e.appendTo("body").width(e.width()).wrapInner('<span class="child"></span>'), g.current.margin[2] += Math.abs(n(e.css("margin-bottom")))
                    }
                    a.position === "top" ? e.prependTo(f) : e.appendTo(f)
                }
            }, c.fn.fancybox = function(a) {
                var b, d = c(this),
                    e = this.selector || "",
                    h = function(f) {
                        var h = c(this).blur(),
                            i = b,
                            j, k;
                        !(f.ctrlKey || f.altKey || f.shiftKey || f.metaKey) && !h.is(".fancybox-wrap") && (j = a.groupAttr || "data-fancybox-group", k = h.attr(j), k || (j = "rel", k = h.get(0)[j]), k && k !== "" && k !== "nofollow" && (h = e.length ? c(e) : d, h = h.filter("[" + j + '="' + k + '"]'), i = h.index(this)), a.index = i, g.open(h, a) !== !1 && f.preventDefault())
                    };
                return a = a || {}, b = a.index || 0, !e || a.live === !1 ? d.unbind("click.fb-start").bind("click.fb-start", h) : f.undelegate(e, "click.fb-start").delegate(e + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", h), this
            }, f.ready(function() {
                c.scrollbarWidth === d && (c.scrollbarWidth = function() {
                    var a = c('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        b = a.children(),
                        d = b.innerWidth() - b.height(99).innerWidth();
                    return a.remove(), d
                }), c.support.fixedPosition === d && (c.support.fixedPosition = function() {
                    var a = c('<div style="position:fixed;top:20px;"></div>').appendTo("body"),
                        b = a[0].offsetTop === 20 || a[0].offsetTop === 15;
                    return a.remove(), b
                }()), c.extend(g.defaults, {
                    scrollbarWidth: c.scrollbarWidth(),
                    fixed: c.support.fixedPosition,
                    parent: c("body")
                })
            })
        }(window, document, jQuery),
        function(a) {
            var b = a.fancybox;
            b.helpers.buttons = {
                tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',
                list: null,
                buttons: null,
                beforeLoad: function(a, b) {
                    if (a.skipSingle && b.group.length < 2) {
                        b.helpers.buttons = !1, b.closeBtn = !0;
                        return
                    }
                    b.margin[a.position === "bottom" ? 2 : 0] += 30
                },
                onPlayStart: function() {
                    this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
                },
                onPlayEnd: function() {
                    this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
                },
                afterShow: function(c, d) {
                    var e = this.buttons;
                    e || (this.list = a(c.tpl || this.tpl).addClass(c.position || "top").appendTo("body"), e = {
                        prev: this.list.find(".btnPrev").click(b.prev),
                        next: this.list.find(".btnNext").click(b.next),
                        play: this.list.find(".btnPlay").click(b.play),
                        toggle: this.list.find(".btnToggle").click(b.toggle)
                    }), d.index > 0 || d.loop ? e.prev.removeClass("btnDisabled") : e.prev.addClass("btnDisabled"), d.loop || d.index < d.group.length - 1 ? (e.next.removeClass("btnDisabled"), e.play.removeClass("btnDisabled")) : (e.next.addClass("btnDisabled"), e.play.addClass("btnDisabled")), this.buttons = e, this.onUpdate(c, d)
                },
                onUpdate: function(a, b) {
                    var c;
                    if (!this.buttons) return;
                    c = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"), b.canShrink ? c.addClass("btnToggleOn") : b.canExpand || c.addClass("btnDisabled")
                },
                beforeClose: function() {
                    this.list && this.list.remove(), this.list = null, this.buttons = null
                }
            }
        }(jQuery),
        function(a) {
            var b = a.fancybox;
            b.helpers.thumbs = {
                wrap: null,
                list: null,
                width: 0,
                source: function(b) {
                    var c;
                    return b.element && (c = a(b.element).find("img").attr("src")), !c && b.type === "image" && b.href && (c = b.href), c
                },
                init: function(b, c) {
                    var d = this,
                        e, f = b.width || 50,
                        g = b.height || 50,
                        h = b.source || this.source;
                    e = "";
                    for (var i = 0; i < c.group.length; i++) e += '<li><a style="width:' + f + "px;height:" + g + 'px;" href="javascript:jQuery.fancybox.jumpto(' + i + ');"></a></li>';
                    this.wrap = a('<div id="fancybox-thumbs"></div>').addClass(b.position || "bottom").appendTo("body"), this.list = a("<ul>" + e + "</ul>").appendTo(this.wrap), a.each(c.group, function(b) {
                        var e = h(c.group[b]);
                        if (!e) return;
                        a("<img />").load(function() {
                            var c = this.width,
                                e = this.height,
                                h, i, j;
                            if (!d.list || !c || !e) return;
                            h = c / f, i = e / g, j = d.list.children().eq(b).find("a"), h >= 1 && i >= 1 && (h > i ? (c = Math.floor(c / i), e = g) : (c = f, e = Math.floor(e / h))), a(this).css({
                                width: c,
                                height: e,
                                top: Math.floor(g / 2 - e / 2),
                                left: Math.floor(f / 2 - c / 2)
                            }), j.width(f).height(g), a(this).hide().appendTo(j).fadeIn(300)
                        }).attr("src", e)
                    }), this.width = this.list.children().eq(0).outerWidth(!0), this.list.width(this.width * (c.group.length + 1)).css("left", Math.floor(a(window).width() * .5 - (c.index * this.width + this.width * .5)))
                },
                beforeLoad: function(a, b) {
                    if (b.group.length < 2) {
                        b.helpers.thumbs = !1;
                        return
                    }
                    b.margin[a.position === "top" ? 0 : 2] += (a.height || 50) + 15
                },
                afterShow: function(a, b) {
                    this.list ? this.onUpdate(a, b) : this.init(a, b), this.list.children().removeClass("active").eq(b.index).addClass("active")
                },
                onUpdate: function(b, c) {
                    this.list && this.list.stop(!0).animate({
                        left: Math.floor(a(window).width() * .5 - (c.index * this.width + this.width * .5))
                    }, 150)
                },
                beforeClose: function() {
                    this.wrap && this.wrap.remove(), this.wrap = null, this.list = null, this.width = 0
                }
            }
        }(jQuery),
        function(a) {
            "use strict";
            var b = a.fancybox,
                c = function(b, c, d) {
                    return d = d || "", a.type(d) === "object" && (d = a.param(d, !0)), a.each(c, function(a, c) {
                        b = b.replace("$" + a, c || "")
                    }), d.length && (b += (b.indexOf("?") > 0 ? "&" : "?") + d), b
                };
            b.helpers.media = {
                types: {
                    youtube: {
                        matcher: /(youtube\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed)?([\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                        params: {
                            autoplay: 1,
                            autohide: 1,
                            fs: 1,
                            rel: 0,
                            hd: 1,
                            wmode: "opaque",
                            enablejsapi: 1
                        },
                        type: "iframe",
                        url: "//web.archive.org/web/20130416034908/https://www.youtube.com/embed/$3"
                    },
                    vimeo: {
                        matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                        params: {
                            autoplay: 1,
                            hd: 1,
                            show_title: 1,
                            show_byline: 1,
                            show_portrait: 0,
                            color: "",
                            fullscreen: 1
                        },
                        type: "iframe",
                        url: "//web.archive.org/web/20130416034908/https://player.vimeo.com/video/$1"
                    },
                    metacafe: {
                        matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                        params: {
                            autoPlay: "yes"
                        },
                        type: "swf",
                        url: function(b, c, d) {
                            return d.swf.flashVars = "playerVars=" + a.param(c, !0), "//web.archive.org/web/20130416034908/https://www.metacafe.com/fplayer/" + b[1] + "/.swf"
                        }
                    },
                    dailymotion: {
                        matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                        params: {
                            additionalInfos: 0,
                            autoStart: 1
                        },
                        type: "swf",
                        url: "//web.archive.org/web/20130416034908/https://www.dailymotion.com/swf/video/$1"
                    },
                    twitvid: {
                        matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                        params: {
                            autoplay: 0
                        },
                        type: "iframe",
                        url: "//web.archive.org/web/20130416034908/https://www.twitvid.com/embed.php?guid=$1"
                    },
                    twitpic: {
                        matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                        type: "image",
                        url: "//web.archive.org/web/20130416034908/https://twitpic.com/show/full/$1/"
                    },
                    instagram: {
                        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                        type: "image",
                        url: "//$1/p/$2/media/"
                    },
                    google_maps: {
                        matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                        type: "iframe",
                        url: function(a) {
                            return "//maps.google." + a[1] + "/" + a[3] + "" + a[4] + "&output=" + (a[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        }
                    }
                },
                beforeLoad: function(b, d) {
                    var e = d.href || "",
                        f = !1,
                        g, h, i, j;
                    for (g in this.types) {
                        h = this.types[g], i = e.match(h.matcher);
                        if (i) {
                            f = h.type, j = a.extend(!0, {}, h.params, d[g] || (a.isPlainObject(b[g]) ? b[g].params : null)), e = a.type(h.url) === "function" ? h.url.call(this, i, j, d) : c(h.url, i, j);
                            break
                        }
                    }
                    f && (d.href = e, d.type = f, d.autoHeight = !1)
                }
            }
        }(jQuery),
        function() {
            jQuery(function() {
                if ($.cookie("df") === null) return $.cookie("df", jQuery.fingerprint(), {
                    expires: 99999,
                    path: "/",
                    secure: !0
                })
            })
        }.call(this),
        function(a) {
            a.fontlist = function() {
                function f(b) {
                    return a(b).css("width")
                }

                function g() {
                    return a(d).css("height")
                }
                var b = ["ACaslonPro-Bold", "ACaslonPro-BoldItalic", "ACaslonPro-Italic", "ACaslonPro-Regular", "ACaslonPro-Semibold", "ACaslonPro-SemiboldItalic", "AGaramondPro-Bold", "AGaramondPro-BoldItalic", "AGaramondPro-Italic", "AGaramondPro-Regular", "Academy Engraved LET", "AdobeArabic-Bold", "AdobeArabic-BoldItalic", "AdobeArabic-Italic", "AdobeArabic-Regular", "AdobeFanHeitiStd-Bold", "AdobeFangsongStd-Regular", "AdobeGothicStd-Bold", "AdobeHebrew-Bold", "AdobeHebrew-BoldItalic", "AdobeHebrew-Italic", "AdobeHebrew-Regular", "AdobeHeitiStd-Regular", "AdobeKaitiStd-Regular", "AdobeMingStd-Light", "AdobeMyungjoStd-Medium", "AdobeSongStd-Light", "AlBayan", "AlBayan-Bold", "AmericanTypewriter", "Andale Mono", "Apple Chancery", "AppleMyungjo", "Ayuthaya", "Baghdad", "Bank Gothic", "Baskerville", "BellGothicStd-Black", "BellGothicStd-Bold", "BiauKai", "Big Caslon", "BirchStd", "Blackmoor LET", "BlackoakStd", "Bodoni Ornaments ITC TT", "Bodoni SvtyTwo ITC TT", "Bodoni SvtyTwo OS ITC TT", "Bodoni SvtyTwo SC ITC TT", "Bordeaux Roman Bold LET", "Brush Script MT", "BrushScriptStd", "Capitals", "Chalkboard", "Chalkduster", "ChaparralPro-Bold", "ChaparralPro-BoldIt", "ChaparralPro-Italic", "ChaparralPro-Regular", "CharcoalCY", "CharlemagneStd-Bold", "Cochin", "CooperBlackStd", "CooperBlackStd-Italic", "Copperplate", "Corsiva Hebrew", "DecoTypeNaskh", "DevanagariMT", "DevanagariMT-Bold", "Didot", "Doremi", "EccentricStd", "EuphemiaUCAS", "EuphemiaUCAS-Bold", "EuphemiaUCAS-Italic", "Futura", "Geneva", "GiddyupStd", "GillSans", "GujaratiMT", "GujaratiMT-Bold", "Gungseo", "Gurmukhi MT", "HeadlineA", "Hei", "Helvetica Neue", "Herculanum", "Hiragino Sans GB", "HoboStd", "Hoefler Text", "Impact", "InaiMathi", "Jazz LET", "Kai", "Kailasa", "Kokonor", "KozGoPro-Bold", "KozGoPro-ExtraLight", "KozGoPro-Heavy", "KozGoPro-Light", "KozGoPro-Medium", "KozGoPro-Regular", "KozMinPro-Bold", "KozMinPro-ExtraLight", "KozMinPro-Heavy", "KozMinPro-Light", "KozMinPro-Medium", "KozMinPro-Regular", "Krungthep", "KufiStandardGK", "LetterGothicStd", "LetterGothicStd-Bold", "LetterGothicStd-BoldSlanted", "LetterGothicStd-Slanted", "LithosPro-Black", "LithosPro-Regular", "MarkerFelt-Thin", "MarkerFelt-Wide", "MesquiteStd", "Microsoft Sans Serif", "MinionPro-Bold", "MinionPro-BoldCn", "MinionPro-BoldCnIt", "MinionPro-BoldIt", "MinionPro-It", "MinionPro-Medium", "MinionPro-MediumIt", "MinionPro-Regular", "MinionPro-Semibold", "MinionPro-SemiboldIt", "Mona Lisa Solid ITC TT", "Mshtakan", "MshtakanBold", "MshtakanBoldOblique", "MshtakanOblique", "MyriadPro-Bold", "MyriadPro-BoldCond", "MyriadPro-BoldCondIt", "MyriadPro-BoldIt", "MyriadPro-Cond", "MyriadPro-CondIt", "MyriadPro-It", "MyriadPro-Regular", "MyriadPro-Semibold", "MyriadPro-SemiboldIt", "Nadeem", "NewPeninimMT", "NewPeninimMT-Bold", "NewPeninimMT-BoldInclined", "NewPeninimMT-Inclined", "NuevaStd-BoldCond", "NuevaStd-BoldCondItalic", "NuevaStd-Cond", "NuevaStd-CondItalic", "OCRAStd", "Optima", "OratorStd", "OratorStd-Slanted", "Osaka", "Osaka-Mono", "Palatino", "Papyrus", "Party LET", "Pilgi", "PlantagenetCherokee", "PoplarStd", "PortagoITC TT", "PrestigeEliteStd-Bd", "Princetown LET", "Raanana", "RaananaBold", "RosewoodStd-Regular", "STHeiti", "Santa Fe LET", "Sathu", "Savoye LET", "SchoolHouse Cursive B", "SchoolHouse Printed A", "Silom", "Skia", "Snell Roundhand", "StencilStd", "Stone Sans ITC TT", "Synchro LET", "Tahoma", "Tahoma-Bold", "TektonPro-Bold", "TektonPro-BoldCond", "TektonPro-BoldExt", "TektonPro-BoldObl", "TrajanPro-Bold", "TrajanPro-Regular", "Trebuchet MS", "Type Embellishments One LET", "Zapfino"],
                    c = [],
                    d = "#fontlist_test";
                a("<p>").appendTo("body").html("abcdefghijklmnopqrstuvwxyz0123456789").attr("id", d.replace("#", "")).css({
                    fontSize: "13.47px",
                    position: "absolute",
                    opacity: 0,
                    top: "0px",
                    left: "0px"
                });
                var e = {
                    w: f(d),
                    h: g(d)
                };
                return a.each(b, function(b, h) {
                    a(d).css({
                        fontFamily: h
                    }), (e.w !== f(d) || e.h !== g(d)) && c.push(h)
                }), c
            }
        }(jQuery),
        function(a) {
            a.fingerprint = function() {
                function b() {
                    return [navigator.userAgent, [screen.height, screen.width, screen.colorDepth].join("x"), (new Date).getTimezoneOffset(), a.map(navigator.plugins, function(b) {
                        return [b.name, b.description, a.map(b, function(a) {
                            return [a.type, a.suffixes].join("~")
                        }).join(",")].join("::")
                    }).join(";"), d().join("+")].join("###")
                }

                function c() {
                    if (typeof window.md5 == "function") return md5(b());
                    throw "md5 unavailable, please get it from http://github.com/wbond/md5-js/"
                }

                function d() {
                    return typeof a.fontlist == "function" ? a.fontlist() : []
                }
                return c()
            }
        }(jQuery),
        function() {
            function a(a, b) {
                var g = a[0],
                    h = a[1],
                    i = a[2],
                    j = a[3];
                g = c(g, h, i, j, b[0], 7, -680876936), j = c(j, g, h, i, b[1], 12, -389564586), i = c(i, j, g, h, b[2], 17, 606105819), h = c(h, i, j, g, b[3], 22, -1044525330), g = c(g, h, i, j, b[4], 7, -176418897), j = c(j, g, h, i, b[5], 12, 1200080426), i = c(i, j, g, h, b[6], 17, -1473231341), h = c(h, i, j, g, b[7], 22, -45705983), g = c(g, h, i, j, b[8], 7, 1770035416), j = c(j, g, h, i, b[9], 12, -1958414417), i = c(i, j, g, h, b[10], 17, -42063), h = c(h, i, j, g, b[11], 22, -1990404162), g = c(g, h, i, j, b[12], 7, 1804603682), j = c(j, g, h, i, b[13], 12, -40341101), i = c(i, j, g, h, b[14], 17, -1502002290), h = c(h, i, j, g, b[15], 22, 1236535329), g = d(g, h, i, j, b[1], 5, -165796510), j = d(j, g, h, i, b[6], 9, -1069501632), i = d(i, j, g, h, b[11], 14, 643717713), h = d(h, i, j, g, b[0], 20, -373897302), g = d(g, h, i, j, b[5], 5, -701558691), j = d(j, g, h, i, b[10], 9, 38016083), i = d(i, j, g, h, b[15], 14, -660478335), h = d(h, i, j, g, b[4], 20, -405537848), g = d(g, h, i, j, b[9], 5, 568446438), j = d(j, g, h, i, b[14], 9, -1019803690), i = d(i, j, g, h, b[3], 14, -187363961), h = d(h, i, j, g, b[8], 20, 1163531501), g = d(g, h, i, j, b[13], 5, -1444681467), j = d(j, g, h, i, b[2], 9, -51403784), i = d(i, j, g, h, b[7], 14, 1735328473), h = d(h, i, j, g, b[12], 20, -1926607734), g = e(g, h, i, j, b[5], 4, -378558), j = e(j, g, h, i, b[8], 11, -2022574463), i = e(i, j, g, h, b[11], 16, 1839030562), h = e(h, i, j, g, b[14], 23, -35309556), g = e(g, h, i, j, b[1], 4, -1530992060), j = e(j, g, h, i, b[4], 11, 1272893353), i = e(i, j, g, h, b[7], 16, -155497632), h = e(h, i, j, g, b[10], 23, -1094730640), g = e(g, h, i, j, b[13], 4, 681279174), j = e(j, g, h, i, b[0], 11, -358537222), i = e(i, j, g, h, b[3], 16, -722521979), h = e(h, i, j, g, b[6], 23, 76029189), g = e(g, h, i, j, b[9], 4, -640364487), j = e(j, g, h, i, b[12], 11, -421815835), i = e(i, j, g, h, b[15], 16, 530742520), h = e(h, i, j, g, b[2], 23, -995338651), g = f(g, h, i, j, b[0], 6, -198630844), j = f(j, g, h, i, b[7], 10, 1126891415), i = f(i, j, g, h, b[14], 15, -1416354905), h = f(h, i, j, g, b[5], 21, -57434055), g = f(g, h, i, j, b[12], 6, 1700485571), j = f(j, g, h, i, b[3], 10, -1894986606), i = f(i, j, g, h, b[10], 15, -1051523), h = f(h, i, j, g, b[1], 21, -2054922799), g = f(g, h, i, j, b[8], 6, 1873313359), j = f(j, g, h, i, b[15], 10, -30611744), i = f(i, j, g, h, b[6], 15, -1560198380), h = f(h, i, j, g, b[13], 21, 1309151649), g = f(g, h, i, j, b[4], 6, -145523070), j = f(j, g, h, i, b[11], 10, -1120210379), i = f(i, j, g, h, b[2], 15, 718787259), h = f(h, i, j, g, b[9], 21, -343485551), a[0] = l(g, a[0]), a[1] = l(h, a[1]), a[2] = l(i, a[2]), a[3] = l(j, a[3])
            }

            function b(a, b, c, d, e, f) {
                return b = l(l(b, a), l(d, f)), l(b << e | b >>> 32 - e, c)
            }

            function c(a, c, d, e, f, g, h) {
                return b(c & d | ~c & e, a, c, f, g, h)
            }

            function d(a, c, d, e, f, g, h) {
                return b(c & e | d & ~e, a, c, f, g, h)
            }

            function e(a, c, d, e, f, g, h) {
                return b(c ^ d ^ e, a, c, f, g, h)
            }

            function f(a, c, d, e, f, g, h) {
                return b(d ^ (c | ~e), a, c, f, g, h)
            }

            function g(b) {
                /[\x80-\xFF]/.test(b) && (b = unescape(encodeURI(b))), txt = "";
                var c = b.length,
                    d = [1732584193, -271733879, -1732584194, 271733878],
                    e;
                for (e = 64; e <= b.length; e += 64) a(d, h(b.substring(e - 64, e)));
                b = b.substring(e - 64);
                var f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (e = 0; e < b.length; e++) f[e >> 2] |= b.charCodeAt(e) << (e % 4 << 3);
                f[e >> 2] |= 128 << (e % 4 << 3);
                if (e > 55) {
                    a(d, f);
                    for (e = 0; e < 16; e++) f[e] = 0
                }
                return f[14] = c * 8, a(d, f), d
            }

            function h(a) {
                var b = [],
                    c;
                for (c = 0; c < 64; c += 4) b[c >> 2] = a.charCodeAt(c) + (a.charCodeAt(c + 1) << 8) + (a.charCodeAt(c + 2) << 16) + (a.charCodeAt(c + 3) << 24);
                return b
            }

            function j(a) {
                var b = "",
                    c = 0;
                for (; c < 4; c++) b += i[a >> c * 8 + 4 & 15] + i[a >> c * 8 & 15];
                return b
            }

            function k(a) {
                for (var b = 0; b < a.length; b++) a[b] = j(a[b]);
                return a.join("")
            }

            function l(a, b) {
                return a + b & 4294967295
            }
            var i = "0123456789abcdef".split("");
            md5 = function(a) {
                return k(g(a))
            };
            if (md5("hello") != "5d41402abc4b2a76b9719d911017c592")
            function l(a, b) {
                var c = (a & 65535) + (b & 65535),
                    d = (a >> 16) + (b >> 16) + (c >> 16);
                return d << 16 | c & 65535
            }
        }(),
        function() {
            jQuery(function() {
                $(".alert").alert(), $(".carousel").carousel(), $(".dropdown-toggle").dropdown(), $("a[rel=popover]").popover(), $(".tooltip").tooltip(), $("[rel=tooltip]").tooltip(), $(".typeahead").typeahead(), $(".focus").focus(), $(document).on("shown", ".modal", function() {
                    return $(this).find(".focus").focus()
                }), $(document).on("click", ".flash .alert .close", function() {
                    return $(this).parent(".alert").fadeOut("fast")
                }), $(document).on("click", ".toggle", function(a) {
                    var b;
                    return b = $($(this).attr("href")), b.is(":visible") ? $(this).text($(this).text().replace("Hide", "Show")) : $(this).text($(this).text().replace("Show", "Hide")), b.slideToggle(), a.preventDefault()
                }), $(document).on("click", ".toggle-checkbox", function(a) {
                    var b;
                    return b = $($(this).data("target")), $(this).is(":checked") ? b.slideDown() : b.slideUp()
                }), $(document).on("shown", ".accordion-group", function(a) {
                    return $(this).find(".focus").focus()
                }), $(document).on("click", "a.accordion-toggle", function(a) {
                    return $(".accordion").on("hidden", function(a) {
                        return a.stopPropagation()
                    })
                }), $(document).on("shown", ".accordion-group", function(a) {
                    return $(this).find(".copy-button").each(function(a, b) {
                        return initializeCopyButton($(b).attr("id"))
                    })
                });
                if ($.prototype.fancybox) return $("a.fancybox").fancybox()
            })
        }.call(this),
        function() {
            jQuery(function() {
                return $("#send_money_btn").click(function() {
                    return $("#send_money").modal("show")
                }), $("#send_money").on("shown", function() {
                    return $("#send_money #transaction_to").focus()
                }), $("#request_money_btn").click(function() {
                    return $("#request_money").modal("show")
                }), $("#request_money").on("shown", function() {
                    return $("#request_money #transaction_from").focus()
                }), $(document).on("click", "#send_money_submit", function() {
                    return $("#send_money_spinner").show(), $("#send_money form").submit()
                }), $(document).on("click", "#request_money_submit", function() {
                    return $("#request_money_spinner").show(), $("#request_money form").submit()
                }), $("table#transactions_list").on("click", "tr", function() {
                    var a;
                    return a = $(this).attr("id").split("_"), window.location = "/transactions/" + a[a.length - 1]
                }), $(".balance-btc").mouseenter(function() {
                    return $(".balance-btc .abbr").hide(), $(".balance-btc .full").fadeIn("fast")
                }), $(".balance-btc").mouseleave(function() {
                    return $(".balance-btc .full").hide(), $(".balance-btc .abbr").fadeIn("fast")
                }), setupTypeahead()
            }), this.setupTypeahead = function() {
                return $("#send_money #transaction_to, #request_money #transaction_from, #new_button #button_to").typeahead({
                    source: function(a, b) {
                        return $.get("/contacts", {
                            query: a
                        }, function(a) {
                            return b(a)
                        })
                    }
                })
            }
        }.call(this),
        function() {
            var a;
            a = {
                AD: "376",
                AE: "971",
                AF: "93",
                AG: "1",
                AI: "1",
                AL: "355",
                AM: "374",
                AN: "599",
                AO: "244",
                AQ: "672",
                AR: "54",
                AS: "1",
                AT: "43",
                AU: "61",
                AW: "297",
                AX: "358",
                AZ: "994",
                BA: "387",
                BB: "1",
                BD: "880",
                BE: "32",
                BF: "226",
                BG: "359",
                BH: "973",
                BI: "257",
                BJ: "229",
                BL: "590",
                BM: "1",
                BN: "673",
                BO: "591",
                BR: "55",
                BS: "1",
                BT: "975",
                BV: "",
                BW: "267",
                BY: "375",
                BZ: "501",
                CA: "1",
                CC: "61",
                CD: "243",
                CF: "236",
                CG: "242",
                CH: "41",
                CI: "225",
                CK: "682",
                CL: "56",
                CM: "237",
                CN: "86",
                CO: "57",
                CR: "506",
                CU: "53",
                CV: "238",
                CX: "61",
                CY: "357",
                CZ: "420",
                DE: "49",
                DJ: "253",
                DK: "45",
                DM: "1",
                DO: "1",
                DZ: "213",
                EC: "593",
                EE: "372",
                EG: "20",
                EH: "212",
                ER: "291",
                ES: "34",
                ET: "251",
                FI: "358",
                FJ: "679",
                FK: "500",
                FM: "691",
                FO: "298",
                FR: "33",
                GA: "241",
                GB: "44",
                GD: "1",
                GE: "995",
                GF: "594",
                GG: "44",
                GH: "233",
                GI: "350",
                GL: "299",
                GM: "220",
                GN: "224",
                GP: "590",
                GQ: "240",
                GR: "30",
                GS: "500",
                GT: "502",
                GU: "1",
                GW: "245",
                GY: "592",
                HK: "852",
                HM: "",
                HN: "504",
                HR: "385",
                HT: "509",
                HU: "36",
                ID: "62",
                IE: "353",
                IL: "972",
                IM: "44",
                IN: "91",
                IO: "246",
                IQ: "964",
                IR: "98",
                IS: "354",
                IT: "39",
                JE: "44",
                JM: "1",
                JO: "962",
                JP: "81",
                KE: "254",
                KG: "996",
                KH: "855",
                KI: "686",
                KM: "269",
                KN: "1",
                KP: "850",
                KR: "82",
                KW: "965",
                KY: "1",
                KZ: "7",
                LA: "856",
                LB: "961",
                LC: "1",
                LI: "423",
                LK: "94",
                LR: "231",
                LS: "266",
                LT: "370",
                LU: "352",
                LV: "371",
                LY: "218",
                MA: "212",
                MC: "377",
                MD: "373",
                ME: "382",
                MF: "590",
                MG: "261",
                MH: "692",
                MK: "389",
                ML: "223",
                MM: "95",
                MN: "976",
                MO: "853",
                MP: "1",
                MQ: "596",
                MR: "222",
                MS: "1",
                MT: "356",
                MU: "230",
                MV: "960",
                MW: "265",
                MX: "52",
                MY: "60",
                MZ: "258",
                NA: "264",
                NC: "687",
                NE: "227",
                NF: "672",
                NG: "234",
                NI: "505",
                NL: "31",
                NO: "47",
                NP: "977",
                NR: "674",
                NU: "683",
                NZ: "64",
                OM: "968",
                PA: "507",
                PE: "51",
                PF: "689",
                PG: "675",
                PH: "63",
                PK: "92",
                PL: "48",
                PM: "508",
                PN: "",
                PR: "1",
                PS: "970",
                PT: "351",
                PW: "680",
                PY: "595",
                QA: "974",
                RE: "262",
                RO: "40",
                RS: "381",
                RU: "7",
                RW: "250",
                SA: "966",
                SB: "677",
                SC: "248",
                SD: "249",
                SE: "46",
                SG: "65",
                SH: "290",
                SI: "386",
                SJ: "47",
                SK: "421",
                SL: "232",
                SM: "378",
                SN: "221",
                SO: "252",
                SR: "597",
                ST: "239",
                SV: "503",
                SY: "963",
                SZ: "268",
                TC: "1",
                TD: "235",
                TF: "",
                TG: "228",
                TH: "66",
                TJ: "992",
                TK: "690",
                TL: "670",
                TM: "993",
                TN: "216",
                TO: "676",
                TR: "90",
                TT: "1",
                TV: "688",
                TW: "886",
                TZ: "255",
                UA: "380",
                UG: "256",
                UM: "",
                US: "1",
                UY: "598",
                UZ: "998",
                VA: "39",
                VC: "1",
                VE: "58",
                VG: "1",
                VI: "1",
                VN: "84",
                VU: "678",
                WF: "681",
                WS: "685",
                YE: "967",
                YT: "269",
                ZA: "27",
                ZM: "260",
                ZW: "263"
            }, jQuery(function() {
                return $(document).on("change", "#phone_number_country", function() {
                    return $("#country_code_prepend").html("+" + a[$("#phone_number_country").val()])
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                return $(document).on("click", ".modal-footer .btn, .modal .btn, .accordion .btn", function(a) {
                    if ($(this).attr("disabled") === "disabled") return;
                    if ($(this).data("dismiss") === "modal") return;
                    $(this).attr("disabled", "disabled"), $(this).siblings(".spinner").show();
                    if ($(this).hasClass("submit-form")) return $(this).closest(".modal, .accordion-group").find("form").submit(), !1
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                var a;
                return a = function(a, b) {
                    var c;
                    return c = Math.pow(10, b), Math.round(a * c) / c
                }, $(document).on("keyup", "[data-convert-target]", function(b) {
                    var c, d, e, f, g;
                    c = b.keyCode || b.which;
                    if (c === 9 || c === 16) return;
                    return d = $(this).data("convert-from"), f = $(this).data("convert-to"), e = $(this).data("convert-target"), e = $("#" + e), g = parseFloat($(this).val()) * exchangeRatesGlobal[(d + "_to_" + f).toLowerCase()], f === "BTC" ? g = a(g, 4) : g = a(g, 2), isNaN(g) && (g = ""), e.val(g)
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                return $(document).on("change", "#select_bank_account", function(a) {
                    $(this).val() === "" && (window.location = $(this).data("redirect")), $("#buy_limit").length > 0 && $.ajax({
                        type: "GET",
                        url: "/buys/limit",
                        data: {
                            bank_account_id: $(this).val()
                        },
                        dataType: "script"
                    });
                    if ($("#sell_limit").length > 0) return $.ajax({
                        type: "GET",
                        url: "/sells/limit",
                        data: {
                            bank_account_id: $(this).val()
                        },
                        dataType: "script"
                    })
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                var a, b, c;
                return a = "https://web.archive.org/web/20130416034908/https://coinbase.com", c = function(b) {
                    if (b === "development") return a = "https://web.archive.org/web/20130416034908/http://localhost:3000";
                    if (b === "test") return a = "http://" + window.document.location.host
                }, b = function(b) {
                    var c, d, e, f;
                    f = b.data.split("|"), d = f[0], c = f[1], c = escape(c);
                    if (b.origin !== a && d !== "show modal") return;
                    if (d === "show modal") {
                        e = $("#coinbase_modal");
                        if (e.data("code") === c) return e.modal("show"), e.find(".load-step1").click()
                    }
                }, window.addEventListener("message", b, !1), c($("body").data("env")), $(".coinbase-button2").click(function() {
                    var b;
                    return b = $(this).data("code"), top.postMessage("show modal iframe|" + b, "*"), parent.frames["coinbase_modal_iframe_" + b].postMessage("show modal|" + b, a)
                }), $("#coinbase_modal").on("hidden", function() {
                    return top.postMessage("hide modal|" + $(this).data("code"), "*")
                })
            }), this.markPaid = function(a) {
                return top.postMessage("mark paid|" + a, "*")
            }
        }.call(this),
        function() {
            jQuery(function() {
                var a;
                return $("#new_button").on("click", ".coinbase-button2", function(a) {
                    return a.preventDefault(), $(this).parents(".radio").click()
                }), a = function() {
                    var a, b, c;
                    return c = $('input[name="button[type]"]:checked').val(), $(".button-group").hide(), $(".button-group.button-group-" + c).show(), a = "<i class='icon-shopping-cart icon-white'></i> ", a += $('input[name="button[type]"]:checked').data("button-text"), $(".button-group.button-group-custom a.coinbase-button2").html(unescape(a)), $(".button-group.button-group-custom").show(), $(".button-group.button-group-none").show(), $('input[name="button[style]"]:checked').is(":visible") || $('input[name="button[style]"]:visible:first').click(), b = $('input[name="button[type]"]:checked').data("subject-line"), $("#button_subject").val(b)
                }, $('input[name="button[type]"]').on("change", function(b) {
                    return a()
                }), $("#generated_code_scroll_target").length > 0 && $("html, body").animate({
                    scrollTop: $("#generated_code_scroll_target").offset().top
                }, 3e3), $(document).on("click", ".update-order-price", function(a) {
                    return $("#update_order_price_spinner").show(), $.ajax({
                        type: "PUT",
                        url: $(this).data("url"),
                        data: {
                            price_choice: $(this).val()
                        },
                        dataType: "script"
                    })
                })
            })
        }.call(this),
        function(a) {
            a.fn.zclip = function(b) {
                if (typeof b == "object" && !b.length) {
                    var c = a.extend({
                        path: "ZeroClipboard.swf",
                        copy: null,
                        beforeCopy: null,
                        afterCopy: null,
                        clickAfter: !0,
                        setHandCursor: !0,
                        setCSSEffects: !0
                    }, b);
                    return this.each(function() {
                        var b = a(this);
                        if (b.is(":visible") && (typeof c.copy == "string" || a.isFunction(c.copy))) {
                            ZeroClipboard.setMoviePath(c.path);
                            var d = new ZeroClipboard.Client;
                            a.isFunction(c.copy) && b.bind("zClip_copy", c.copy), a.isFunction(c.beforeCopy) && b.bind("zClip_beforeCopy", c.beforeCopy), a.isFunction(c.afterCopy) && b.bind("zClip_afterCopy", c.afterCopy), d.setHandCursor(c.setHandCursor), d.setCSSEffects(c.setCSSEffects), d.addEventListener("mouseOver", function(a) {
                                b.trigger("mouseenter")
                            }), d.addEventListener("mouseOut", function(a) {
                                b.trigger("mouseleave")
                            }), d.addEventListener("mouseDown", function(e) {
                                b.trigger("mousedown"), a.isFunction(c.copy) ? d.setText(b.triggerHandler("zClip_copy")) : d.setText(c.copy), a.isFunction(c.beforeCopy) && b.trigger("zClip_beforeCopy")
                            }), d.addEventListener("complete", function(d, e) {
                                a.isFunction(c.afterCopy) ? b.trigger("zClip_afterCopy") : (e.length > 500 && (e = e.substr(0, 500) + "...\n\n(" + (e.length - 500) + " characters not shown)"), b.removeClass("hover"), alert("Copied text to clipboard:\n\n " + e)), c.clickAfter && b.trigger("click")
                            }), d.glue(b[0], b.parent()[0]), a(window).bind("load resize", function() {
                                d.reposition()
                            })
                        }
                    })
                }
                if (typeof b == "string") return this.each(function() {
                    var c = a(this);
                    b = b.toLowerCase();
                    var d = c.data("zclipId"),
                        e = a("#" + d + ".zclip");
                    b == "remove" ? (e.remove(), c.removeClass("active hover")) : b == "hide" ? (e.hide(), c.removeClass("active hover")) : b == "show" && e.show()
                })
            }
        }(jQuery);
    var ZeroClipboard = {
        version: "1.0.7",
        clients: {},
        moviePath: "ZeroClipboard.swf",
        nextId: 1,
        $: function(a) {
            return typeof a == "string" && (a = document.getElementById(a)), a.addClass || (a.hide = function() {
                this.style.display = "none"
            }, a.show = function() {
                this.style.display = ""
            }, a.addClass = function(a) {
                this.removeClass(a), this.className += " " + a
            }, a.removeClass = function(a) {
                var b = this.className.split(/\s+/),
                    c = -1;
                for (var d = 0; d < b.length; d++) b[d] == a && (c = d, d = b.length);
                return c > -1 && (b.splice(c, 1), this.className = b.join(" ")), this
            }, a.hasClass = function(a) {
                return !!this.className.match(new RegExp("\\s*" + a + "\\s*"))
            }), a
        },
        setMoviePath: function(a) {
            this.moviePath = a
        },
        dispatch: function(a, b, c) {
            var d = this.clients[a];
            d && d.receiveEvent(b, c)
        },
        register: function(a, b) {
            this.clients[a] = b
        },
        getDOMObjectPosition: function(a, b) {
            var c = {
                left: 0,
                top: 0,
                width: a.width ? a.width : a.offsetWidth,
                height: a.height ? a.height : a.offsetHeight
            };
            return a && a != b && (c.left += a.offsetLeft, c.top += a.offsetTop), c
        },
        Client: function(a) {
            this.handlers = {}, this.id = ZeroClipboard.nextId++, this.movieId = "ZeroClipboardMovie_" + this.id, ZeroClipboard.register(this.id, this), a && this.glue(a)
        }
    };
    ZeroClipboard.Client.prototype = {
            id: 0,
            ready: !1,
            movie: null,
            clipText: "",
            handCursorEnabled: !0,
            cssEffects: !0,
            handlers: null,
            glue: function(a, b, c) {
                this.domElement = ZeroClipboard.$(a);
                var d = 99;
                this.domElement.style.zIndex && (d = parseInt(this.domElement.style.zIndex, 10) + 1), typeof b == "string" ? b = ZeroClipboard.$(b) : typeof b == "undefined" && (b = document.getElementsByTagName("body")[0]);
                var e = ZeroClipboard.getDOMObjectPosition(this.domElement, b);
                this.div = document.createElement("div"), this.div.className = "zclip", this.div.id = "zclip-" + this.movieId, $(this.domElement).data("zclipId", "zclip-" + this.movieId);
                var f = this.div.style;
                f.position = "absolute", f.left = "" + e.left + "px", f.top = "" + e.top + "px", f.width = "" + e.width + "px", f.height = "" + e.height + "px", f.zIndex = d;
                if (typeof c == "object")
                    for (addedStyle in c) f[addedStyle] = c[addedStyle];
                b.appendChild(this.div), this.div.innerHTML = this.getHTML(e.width, e.height)
            },
            getHTML: function(a, b) {
                var c = "",
                    d = "id=" + this.id + "&width=" + a + "&height=" + b;
                if (navigator.userAgent.match(/MSIE/)) {
                    var e = location.href.match(/^https/i) ? "https://" : "http://";
                    c += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + e + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + a + '" height="' + b + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + d + '"/><param name="wmode" value="transparent"/></object>'
                } else c += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + a + '" height="' + b + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="https://web.archive.org/web/20130416034908/http://www.macromedia.com/go/getflashplayer" flashvars="' + d + '" wmode="transparent" />';
                return c
            },
            hide: function() {
                this.div && (this.div.style.left = "-2000px")
            },
            show: function() {
                this.reposition()
            },
            destroy: function() {
                if (this.domElement && this.div) {
                    this.hide(), this.div.innerHTML = "";
                    var a = document.getElementsByTagName("body")[0];
                    try {
                        a.removeChild(this.div)
                    } catch (b) {}
                    this.domElement = null, this.div = null
                }
            },
            reposition: function(a) {
                a && (this.domElement = ZeroClipboard.$(a), this.domElement || this.hide());
                if (this.domElement && this.div) {
                    var b = ZeroClipboard.getDOMObjectPosition(this.domElement),
                        c = this.div.style;
                    c.left = "" + b.left + "px", c.top = "" + b.top + "px"
                }
            },
            setText: function(a) {
                this.clipText = a, this.ready && this.movie.setText(a)
            },
            addEventListener: function(a, b) {
                a = a.toString().toLowerCase().replace(/^on/, ""), this.handlers[a] || (this.handlers[a] = []), this.handlers[a].push(b)
            },
            setHandCursor: function(a) {
                this.handCursorEnabled = a, this.ready && this.movie.setHandCursor(a)
            },
            setCSSEffects: function(a) {
                this.cssEffects = !!a
            },
            receiveEvent: function(a, b) {
                a = a.toString().toLowerCase().replace(/^on/, "");
                switch (a) {
                    case "load":
                        this.movie = document.getElementById(this.movieId);
                        if (!this.movie) {
                            var c = this;
                            setTimeout(function() {
                                c.receiveEvent("load", null)
                            }, 1);
                            return
                        }
                        if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                            var c = this;
                            setTimeout(function() {
                                c.receiveEvent("load", null)
                            }, 100), this.ready = !0;
                            return
                        }
                        this.ready = !0;
                        try {
                            this.movie.setText(this.clipText)
                        } catch (d) {}
                        try {
                            this.movie.setHandCursor(this.handCursorEnabled)
                        } catch (d) {}
                        break;
                    case "mouseover":
                        this.domElement && this.cssEffects && (this.domElement.addClass("hover"), this.recoverActive && this.domElement.addClass("active"));
                        break;
                    case "mouseout":
                        this.domElement && this.cssEffects && (this.recoverActive = !1, this.domElement.hasClass("active") && (this.domElement.removeClass("active"), this.recoverActive = !0), this.domElement.removeClass("hover"));
                        break;
                    case "mousedown":
                        this.domElement && this.cssEffects && this.domElement.addClass("active");
                        break;
                    case "mouseup":
                        this.domElement && this.cssEffects && (this.domElement.removeClass("active"), this.recoverActive = !1)
                }
                if (this.handlers[a])
                    for (var e = 0, f = this.handlers[a].length; e < f; e++) {
                        var g = this.handlers[a][e];
                        typeof g == "function" ? g(this, b) : typeof g == "object" && g.length == 2 ? g[0][g[1]](this, b) : typeof g == "string" && window[g](this, b)
                    }
            }
        },
        function() {
            this.initializeCopyButton = function(a) {
                var b;
                return b = $("#" + a), b.zclip({
                    path: "/flash/ZeroClipboard.swf",
                    copy: b.data("copy"),
                    afterCopy: function() {
                        return b.attr("data-original-title", "Copied!").tooltip("fixTitle").tooltip("show")
                    }
                }), b.tooltip({
                    title: "Copy address to clipboard",
                    placement: "top"
                })
            }
        }.call(this),
        function() {
            jQuery(function() {
                var a;
                return $(".test-ipn").click(function(a) {
                    return $.ajax({
                        type: "POST",
                        url: "/merchant_settings/test_ipn",
                        data: {
                            url: $("#user_callback_url").val()
                        },
                        dataType: "script"
                    }), a.preventDefault()
                }), a = function() {
                    return $("#user_minimum_balance_amount").prop("disabled", !$("#user_maintain_minimum_balance").is(":checked"))
                }, a(), $("#user_maintain_minimum_balance").on("change", function(b) {
                    return a()
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                return $("table#orders_list").on("click", "tr", function() {
                    var a;
                    return a = $(this).attr("id").split("_"), window.location = "/orders/" + a[a.length - 1]
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                return updateTotals()
            }), this.updateTotals = function() {
                return $(".transfers-observe-field").observe_field(.3, function() {
                    return $.ajax({
                        type: "POST",
                        url: $(this).data("url"),
                        data: $(this).parents("form").serialize(),
                        dataType: "script"
                    })
                })
            }
        }.call(this),
        function() {
            jQuery(function() {
                return $("#api_key_modal").on("hide", function() {
                    return $.ajax({
                        type: "GET",
                        url: "/api_key/close",
                        dataType: "script"
                    })
                })
            })
        }.call(this),
        function() {
            jQuery(function() {
                return maybeScrollToHash(), setTimeout(function() {
                    return maybeScrollToHash()
                }, 100)
            }), $(window).bind("hashchange", function() {
                return maybeScrollToHash()
            }), this.maybeScrollToHash = function() {
                var a, b, c;
                if (window.location.hash) {
                    a = window.location.hash.split("#")[1], c = $("a[name='" + a + "']"), c.length === 0 && (c = $("#" + a));
                    if (c.length) return b = c.offset().top - $(".navbar").height(), $(window).scrollTop(b)
                }
            }
        }.call(this),
        function() {
            jQuery(function() {
                return $("#payment_verification_select #select_bank_account").on("change", function(a) {
                    return $.ajax({
                        type: "GET",
                        url: "/verifications/" + $("#select_bank_account").val(),
                        dataType: "script"
                    })
                })
            })
        }.call(this),
        function() {
            Function.prototype.scopedTo === void 0 && (Function.prototype.scopedTo = function(a, b) {
                var c = this;
                return function() {
                    return c.apply(a, Array.prototype.slice.call(b || []).concat(Array.prototype.slice.call(arguments)))
                }
            });
            var a = function(b, d) {
                this.options = d || {}, this.key = b, this.channels = new a.Channels, this.global_emitter = new a.EventsDispatcher;
                var e = this;
                this.checkAppKey(), this.connection = new a.Connection(this.key, this.options), this.connection.bind("connected", function() {
                    e.subscribeAll()
                }).bind("message", function(a) {
                    var b = a.event.indexOf("pusher_internal:") === 0;
                    if (a.channel) {
                        var c;
                        (c = e.channel(a.channel)) && c.emit(a.event, a.data)
                    }
                    b || e.global_emitter.emit(a.event, a.data)
                }).bind("disconnected", function() {
                    e.channels.disconnect()
                }).bind("error", function(b) {
                    a.warn("Error", b)
                }), a.instances.push(this), a.isReady && e.connect()
            };
            a.instances = [], a.prototype = {
                channel: function(a) {
                    return this.channels.find(a)
                },
                connect: function() {
                    this.connection.connect()
                },
                disconnect: function() {
                    this.connection.disconnect()
                },
                bind: function(a, b) {
                    return this.global_emitter.bind(a, b), this
                },
                bind_all: function(a) {
                    return this.global_emitter.bind_all(a), this
                },
                subscribeAll: function() {
                    for (channelName in this.channels.channels) this.channels.channels.hasOwnProperty(channelName) && this.subscribe(channelName)
                },
                subscribe: function(a) {
                    var b = this,
                        c = this.channels.add(a, this);
                    return this.connection.state === "connected" && c.authorize(this.connection.socket_id, this.options, function(d, f) {
                        d ? c.emit("pusher:subscription_error", f) : b.send_event("pusher:subscribe", {
                            channel: a,
                            auth: f.auth,
                            channel_data: f.channel_data
                        })
                    }), c
                },
                unsubscribe: function(a) {
                    this.channels.remove(a), this.connection.state === "connected" && this.send_event("pusher:unsubscribe", {
                        channel: a
                    })
                },
                send_event: function(a, b, c) {
                    return this.connection.send_event(a, b, c)
                },
                checkAppKey: function() {
                    (this.key === null || this.key === void 0) && a.warn("Warning", "You must pass your app key when you instantiate Pusher.")
                }
            }, a.Util = {
                extend: function b(a, c) {
                    for (var d in c) a[d] = c[d] && c[d].constructor && c[d].constructor === Object ? b(a[d] || {}, c[d]) : c[d];
                    return a
                },
                stringify: function() {
                    for (var a = ["Pusher"], b = 0; b < arguments.length; b++) typeof arguments[b] == "string" ? a.push(arguments[b]) : window.JSON == void 0 ? a.push(arguments[b].toString()) : a.push(JSON.stringify(arguments[b]));
                    return a.join(" : ")
                },
                arrayIndexOf: function(a, b) {
                    var c = Array.prototype.indexOf;
                    if (a == null) return -1;
                    if (c && a.indexOf === c) return a.indexOf(b);
                    for (i = 0, l = a.length; i < l; i++)
                        if (a[i] === b) return i;
                    return -1
                }
            }, a.debug = function() {
                a.log && a.log(a.Util.stringify.apply(this, arguments))
            }, a.warn = function() {
                window.console && window.console.warn ? window.console.warn(a.Util.stringify.apply(this, arguments)) : a.log && a.log(a.Util.stringify.apply(this, arguments))
            }, a.VERSION = "1.12.5", a.host = "ws.pusherapp.com", a.ws_port = 80, a.wss_port = 443, a.sockjs_host = "sockjs.pusher.com", a.sockjs_http_port = 80, a.sockjs_https_port = 443, a.sockjs_path = "/pusher", a.channel_auth_endpoint = "/pusher/auth", a.cdn_http = "https://web.archive.org/web/20130416034908/http://js.pusher.com/", a.cdn_https = "https://web.archive.org/web/20130416034908/https://d3dy5gmtp8yhk7.cloudfront.net/", a.dependency_suffix = ".min", a.channel_auth_transport = "ajax", a.activity_timeout = 12e4, a.pong_timeout = 3e4, a.isReady = !1, a.ready = function() {
                a.isReady = !0;
                for (var b = 0, d = a.instances.length; b < d; b++) a.instances[b].connect()
            }, this.Pusher = a
        }.call(this),
        function() {
            function a() {
                this._callbacks = {}
            }

            function b(b) {
                this.callbacks = new a, this.global_callbacks = [], this.failThrough = b
            }
            a.prototype.get = function(a) {
                return this._callbacks[this._prefix(a)]
            }, a.prototype.add = function(a, b) {
                var c = this._prefix(a);
                this._callbacks[c] = this._callbacks[c] || [], this._callbacks[c].push(b)
            }, a.prototype.remove = function(a, b) {
                if (this.get(a)) {
                    var c = Pusher.Util.arrayIndexOf(this.get(a), b);
                    this._callbacks[this._prefix(a)].splice(c, 1)
                }
            }, a.prototype._prefix = function(a) {
                return "_" + a
            }, b.prototype.bind = function(a, b) {
                return this.callbacks.add(a, b), this
            }, b.prototype.unbind = function(a, b) {
                return this.callbacks.remove(a, b), this
            }, b.prototype.emit = function(a, b) {
                for (var c = 0; c < this.global_callbacks.length; c++) this.global_callbacks[c](a, b);
                var d = this.callbacks.get(a);
                if (d)
                    for (c = 0; c < d.length; c++) d[c](b);
                else this.failThrough && this.failThrough(a, b);
                return this
            }, b.prototype.bind_all = function(a) {
                return this.global_callbacks.push(a), this
            }, this.Pusher.EventsDispatcher = b
        }.call(this),
        function() {
            function a(a, b, c) {
                b[a] !== void 0 && b[a](c)
            }

            function b(a, b, d) {
                c.EventsDispatcher.call(this), this.state = void 0, this.errors = [], this.stateActions = d, this.transitions = b, this.transition(a)
            }
            var c = this.Pusher;
            b.prototype.transition = function(b, d) {
                var e = this.state,
                    f = this.stateActions;
                if (e && c.Util.arrayIndexOf(this.transitions[e], b) == -1) throw this.emit("invalid_transition_attempt", {
                    oldState: e,
                    newState: b
                }), Error("Invalid transition [" + e + " to " + b + "]");
                a(e + "Exit", f, d), a(e + "To" + (b.substr(0, 1).toUpperCase() + b.substr(1)), f, d), a(b + "Pre", f, d), this.state = b, this.emit("state_change", {
                    oldState: e,
                    newState: b
                }), a(b + "Post", f, d)
            }, b.prototype.is = function(a) {
                return this.state === a
            }, b.prototype.isNot = function(a) {
                return this.state !== a
            }, c.Util.extend(b.prototype, c.EventsDispatcher.prototype), this.Pusher.Machine = b
        }.call(this),
        function() {
            var a = function() {
                var a = this;
                Pusher.EventsDispatcher.call(this), window.addEventListener !== void 0 && (window.addEventListener("online", function() {
                    a.emit("online", null)
                }, !1), window.addEventListener("offline", function() {
                    a.emit("offline", null)
                }, !1))
            };
            a.prototype.isOnLine = function() {
                return window.navigator.onLine === void 0 ? !0 : window.navigator.onLine
            }, Pusher.Util.extend(a.prototype, Pusher.EventsDispatcher.prototype), this.Pusher.NetInfo = a
        }.call(this),
        function() {
            function a(a) {
                a.connectionWait = 0, a.openTimeout = c.TransportType === "native" ? 4e3 : c.TransportType === "flash" ? 7e3 : 6e3, a.connectedTimeout = 2e3, a.connectionSecure = a.compulsorySecure, a.failedAttempts = 0
            }

            function b(b, i) {
                function k() {
                    x.openTimeout < g && (x.openTimeout += e), x.connectedTimeout < h && (x.connectedTimeout += f), x.compulsorySecure !== !0 && (x.connectionSecure = !x.connectionSecure), x.failedAttempts++
                }

                function l(a) {
                    return a = a || document.location.protocol === "https:", (a ? "wss://" : "ws://") + c.host + ":" + (a ? c.wss_port : c.ws_port)
                }

                function m(a) {
                    return a = a || document.location.protocol === "https:", (a ? "https://" : "http://") + c.sockjs_host + ":" + (a ? c.sockjs_https_port : c.sockjs_http_port) + c.sockjs_path
                }

                function n() {
                    x._machine.transition("impermanentlyClosing")
                }

                function o() {
                    x._activityTimer && clearTimeout(x._activityTimer), x.ping && (x._activityTimer = setTimeout(function() {
                        x.send_event("pusher:ping", {}), x._activityTimer = setTimeout(function() {
                            x.socket.close()
                        }, x.options.pong_timeout || c.pong_timeout)
                    }, x.options.activity_timeout || c.activity_timeout))
                }

                function p() {
                    var a = x.connectionWait;
                    if (a === 0 && x.connectedAt) {
                        var b = (new Date).getTime() - x.connectedAt;
                        b < 1e3 && (a = 1e3 - b)
                    }
                    return a
                }

                function q(a) {
                    a = s(a);
                    if (a !== void 0)
                        if (a.event === "pusher:connection_established") x._machine.transition("connected", a.data.socket_id);
                        else if (a.event === "pusher:error") {
                        var b = a.data.code;
                        x.emit("error", {
                            type: "PusherError",
                            data: {
                                code: b,
                                message: a.data.message
                            }
                        }), b === 4e3 ? (x.compulsorySecure = !0, x.connectionSecure = !0, x.options.encrypted = !0, n()) : b < 4100 ? x._machine.transition("permanentlyClosing") : b < 4200 ? (x.connectionWait = 1e3, x._machine.transition("waiting")) : b < 4300 ? n() : x._machine.transition("permanentlyClosing")
                    }
                }

                function r(a) {
                    o(), a = s(a);
                    if (a !== void 0) {
                        c.debug("Event recd", a);
                        switch (a.event) {
                            case "pusher:error":
                                x.emit("error", {
                                    type: "PusherError",
                                    data: a.data
                                });
                                break;
                            case "pusher:ping":
                                x.send_event("pusher:pong", {})
                        }
                        x.emit("message", a)
                    }
                }

                function s(a) {
                    try {
                        var b = JSON.parse(a.data);
                        if (typeof b.data == "string") try {
                            b.data = JSON.parse(b.data)
                        } catch (c) {
                            if (!(c instanceof SyntaxError)) throw c
                        }
                        return b
                    } catch (d) {
                        x.emit("error", {
                            type: "MessageParseError",
                            error: d,
                            data: a.data
                        })
                    }
                }

                function u() {
                    x._machine.transition("waiting")
                }

                function v(a) {
                    x.emit("error", {
                        type: "WebSocketError",
                        error: a
                    })
                }

                function w(a, b) {
                    var d = x.state;
                    x.state = a, d !== a && (c.debug("State changed", d + " -> " + a), x.emit("state_change", {
                        previous: d,
                        current: a
                    }), x.emit(a, b))
                }
                var x = this;
                c.EventsDispatcher.call(this), this.ping = !0, this.options = c.Util.extend({
                    encrypted: !1
                }, i), this.netInfo = new c.NetInfo, this.netInfo.bind("online", function() {
                    x._machine.is("waiting") && (x._machine.transition("connecting"), w("connecting"))
                }), this.netInfo.bind("offline", function() {
                    x._machine.is("connected") && (x.socket.onclose = void 0, x.socket.onmessage = void 0, x.socket.onerror = void 0, x.socket.onopen = void 0, x.socket.close(), x.socket = void 0, x._machine.transition("waiting"))
                }), this._machine = new c.Machine("initialized", d, {
                    initializedPre: function() {
                        x.compulsorySecure = x.options.encrypted, x.key = b, x.socket = null, x.socket_id = null, x.state = "initialized"
                    },
                    waitingPre: function() {
                        x.netInfo.isOnLine() ? (x.failedAttempts < 2 ? w("connecting") : (w("unavailable"), x.connectionWait = 1e4), x.connectionWait > 0 && x.emit("connecting_in", p()), x._waitingTimer = setTimeout(function() {
                            x._machine.transition("connecting")
                        }, p())) : w("unavailable")
                    },
                    waitingExit: function() {
                        clearTimeout(x._waitingTimer)
                    },
                    connectingPre: function() {
                        if (x.netInfo.isOnLine() === !1) x._machine.transition("waiting"), w("unavailable");
                        else {
                            var a = "/app/" + x.key + "?protocol=5&client=js&version=" + c.VERSION + "&flash=" + (c.TransportType === "flash" ? "true" : "false");
                            if (c.TransportType === "sockjs") {
                                c.debug("Connecting to sockjs", c.sockjs);
                                var b = m(x.connectionSecure);
                                x.ping = !1, x.socket = new SockJS(b), x.socket.onopen = function() {
                                    x.socket.send(JSON.stringify({
                                        path: a
                                    })), x._machine.transition("open")
                                }
                            } else b = l(x.connectionSecure) + a, c.debug("Connecting", b), x.socket = new c.Transport(b), x.socket.onopen = function() {
                                x._machine.transition("open")
                            };
                            x.socket.onclose = u, x.socket.onerror = v, x._connectingTimer = setTimeout(n, x.openTimeout)
                        }
                    },
                    connectingExit: function() {
                        clearTimeout(x._connectingTimer), x.socket.onopen = void 0
                    },
                    connectingToWaiting: function() {
                        k()
                    },
                    connectingToImpermanentlyClosing: function() {
                        k()
                    },
                    openPre: function() {
                        x.socket.onmessage = q, x.socket.onerror = v, x.socket.onclose = u, x._openTimer = setTimeout(n, x.connectedTimeout)
                    },
                    openExit: function() {
                        clearTimeout(x._openTimer), x.socket.onmessage = void 0
                    },
                    openToWaiting: function() {
                        k()
                    },
                    openToImpermanentlyClosing: function() {
                        k()
                    },
                    connectedPre: function(b) {
                        x.socket_id = b, x.socket.onmessage = r, x.socket.onerror = v, x.socket.onclose = u, a(x), x.connectedAt = (new Date).getTime(), o()
                    },
                    connectedPost: function() {
                        w("connected")
                    },
                    connectedExit: function() {
                        x._activityTimer && clearTimeout(x._activityTimer), w("disconnected")
                    },
                    impermanentlyClosingPost: function() {
                        x.socket && (x.socket.onclose = u, x.socket.close())
                    },
                    permanentlyClosingPost: function() {
                        x.socket ? (x.socket.onclose = function() {
                            a(x), x._machine.transition("permanentlyClosed")
                        }, x.socket.close()) : (a(x), x._machine.transition("permanentlyClosed"))
                    },
                    failedPre: function() {
                        w("failed"), c.debug("WebSockets are not available in this browser.")
                    },
                    permanentlyClosedPost: function() {
                        w("disconnected")
                    }
                })
            }
            var c = this.Pusher,
                d = {
                    initialized: ["waiting", "failed"],
                    waiting: ["connecting", "permanentlyClosed"],
                    connecting: ["open", "permanentlyClosing", "impermanentlyClosing", "waiting"],
                    open: ["connected", "permanentlyClosing", "impermanentlyClosing", "waiting"],
                    connected: ["permanentlyClosing", "waiting"],
                    impermanentlyClosing: ["waiting", "permanentlyClosing"],
                    permanentlyClosing: ["permanentlyClosed"],
                    permanentlyClosed: ["waiting", "failed"],
                    failed: ["permanentlyClosed"]
                },
                e = 2e3,
                f = 2e3,
                g = 1e4,
                h = 1e4;
            b.prototype.connect = function() {
                !this._machine.is("failed") && !c.Transport ? this._machine.transition("failed") : this._machine.is("initialized") ? (a(this), this._machine.transition("waiting")) : this._machine.is("waiting") && this.netInfo.isOnLine() === !0 ? this._machine.transition("connecting") : this._machine.is("permanentlyClosed") && (a(this), this._machine.transition("waiting"))
            }, b.prototype.send = function(a) {
                if (this._machine.is("connected")) {
                    var b = this;
                    return setTimeout(function() {
                        b.socket.send(a)
                    }, 0), !0
                }
                return !1
            }, b.prototype.send_event = function(a, b, d) {
                return a = {
                    event: a,
                    data: b
                }, d && (a.channel = d), c.debug("Event sent", a), this.send(JSON.stringify(a))
            }, b.prototype.disconnect = function() {
                this._machine.is("permanentlyClosed") || (this._machine.is("waiting") || this._machine.is("failed") ? this._machine.transition("permanentlyClosed") : this._machine.transition("permanentlyClosing"))
            }, c.Util.extend(b.prototype, c.EventsDispatcher.prototype), this.Pusher.Connection = b
        }.call(this),
        function() {
            Pusher.Channels = function() {
                this.channels = {}
            }, Pusher.Channels.prototype = {
                add: function(a, b) {
                    var c = this.find(a);
                    return c || (c = Pusher.Channel.factory(a, b), this.channels[a] = c), c
                },
                find: function(a) {
                    return this.channels[a]
                },
                remove: function(a) {
                    delete this.channels[a]
                },
                disconnect: function() {
                    for (var a in this.channels) this.channels[a].disconnect()
                }
            }, Pusher.Channel = function(a, b) {
                var c = this;
                Pusher.EventsDispatcher.call(this, function(b) {
                    Pusher.debug("No callbacks on " + a + " for " + b)
                }), this.pusher = b, this.name = a, this.subscribed = !1, this.bind("pusher_internal:subscription_succeeded", function(a) {
                    c.onSubscriptionSucceeded(a)
                })
            }, Pusher.Channel.prototype = {
                init: function() {},
                disconnect: function() {
                    this.subscribed = !1, this.emit("pusher_internal:disconnected")
                },
                onSubscriptionSucceeded: function() {
                    this.subscribed = !0, this.emit("pusher:subscription_succeeded")
                },
                authorize: function(a, b, c) {
                    return c(!1, {})
                },
                trigger: function(a, b) {
                    return this.pusher.send_event(a, b, this.name)
                }
            }, Pusher.Util.extend(Pusher.Channel.prototype, Pusher.EventsDispatcher.prototype), Pusher.Channel.PrivateChannel = {
                authorize: function(a, b, c) {
                    var d = this;
                    return (new Pusher.Channel.Authorizer(this, Pusher.channel_auth_transport, b)).authorize(a, function(a, b) {
                        a || d.emit("pusher_internal:authorized", b), c(a, b)
                    })
                }
            }, Pusher.Channel.PresenceChannel = {
                init: function() {
                    this.members = new a(this)
                },
                onSubscriptionSucceeded: function() {
                    this.subscribed = !0
                }
            };
            var a = function(a) {
                var b = this,
                    c = function() {
                        this._members_map = {}, this.count = 0, this.me = null
                    };
                c.call(this), a.bind("pusher_internal:authorized", function(c) {
                    var d = JSON.parse(c.channel_data);
                    a.bind("pusher_internal:subscription_succeeded", function(c) {
                        b._members_map = c.presence.hash, b.count = c.presence.count, b.me = b.get(d.user_id), a.emit("pusher:subscription_succeeded", b)
                    })
                }), a.bind("pusher_internal:member_added", function(c) {
                    b.get(c.user_id) === null && b.count++, b._members_map[c.user_id] = c.user_info, a.emit("pusher:member_added", b.get(c.user_id))
                }), a.bind("pusher_internal:member_removed", function(c) {
                    var d = b.get(c.user_id);
                    d && (delete b._members_map[c.user_id], b.count--, a.emit("pusher:member_removed", d))
                }), a.bind("pusher_internal:disconnected", function() {
                    c.call(b)
                })
            };
            a.prototype = {
                each: function(a) {
                    for (var b in this._members_map) a(this.get(b))
                },
                get: function(a) {
                    return this._members_map.hasOwnProperty(a) ? {
                        id: a,
                        info: this._members_map[a]
                    } : null
                }
            }, Pusher.Channel.factory = function(a, b) {
                var c = new Pusher.Channel(a, b);
                return a.indexOf("private-") === 0 ? Pusher.Util.extend(c, Pusher.Channel.PrivateChannel) : a.indexOf("presence-") === 0 && (Pusher.Util.extend(c, Pusher.Channel.PrivateChannel), Pusher.Util.extend(c, Pusher.Channel.PresenceChannel)), c.init(), c
            }
        }.call(this),
        function() {
            Pusher.Channel.Authorizer = function(a, b, c) {
                this.channel = a, this.type = b, this.authOptions = (c || {}).auth || {}
            }, Pusher.Channel.Authorizer.prototype = {
                composeQuery: function(a) {
                    var a = "&socket_id=" + encodeURIComponent(a) + "&channel_name=" + encodeURIComponent(this.channel.name),
                        b;
                    for (b in this.authOptions.params) a += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(this.authOptions.params[b]);
                    return a
                },
                authorize: function(a, b) {
                    return Pusher.authorizers[this.type].call(this, a, b)
                }
            }, Pusher.auth_callbacks = {}, Pusher.authorizers = {
                ajax: function(a, b) {
                    var c;
                    c = Pusher.XHR ? new Pusher.XHR : window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), c.open("POST", Pusher.channel_auth_endpoint, !0), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                    for (var d in this.authOptions.headers) c.setRequestHeader(d, this.authOptions.headers[d]);
                    return c.onreadystatechange = function() {
                        if (c.readyState == 4)
                            if (c.status == 200) {
                                var a, d = !1;
                                try {
                                    a = JSON.parse(c.responseText), d = !0
                                } catch (e) {
                                    b(!0, "JSON returned from webapp was invalid, yet status code was 200. Data was: " + c.responseText)
                                }
                                d && b(!1, a)
                            } else Pusher.warn("Couldn't get auth info from your webapp", c.status), b(!0, c.status)
                    }, c.send(this.composeQuery(a)), c
                },
                jsonp: function(a, b) {
                    this.authOptions.headers !== void 0 && Pusher.warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
                    var c = document.createElement("script");
                    Pusher.auth_callbacks[this.channel.name] = function(a) {
                        b(!1, a)
                    }, c.src = Pusher.channel_auth_endpoint + "?callback=" + encodeURIComponent("Pusher.auth_callbacks['" + this.channel.name + "']") + this.composeQuery(a);
                    var d = document.getElementsByTagName("head")[0] || document.documentElement;
                    d.insertBefore(c, d.firstChild)
                }
            }
        }.call(this);
    var _require = function() {
        function a(a, b) {
            document.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onreadystatechange", function() {
                (a.readyState == "loaded" || a.readyState == "complete") && b()
            })
        }

        function b(b, d) {
            var e = document.getElementsByTagName("head")[0],
                f = document.createElement("script");
            f.setAttribute("src", b), f.setAttribute("type", "text/javascript"), f.setAttribute("async", !0), a(f, function() {
                d()
            }), e.appendChild(f)
        }
        return function(a, c) {
            for (var d = 0, e = 0; e < a.length; e++) b(a[e], function() {
                a.length == ++d && setTimeout(c, 0)
            })
        }
    }();
    (function() {
        !window.WebSocket && window.MozWebSocket && (window.WebSocket = window.MozWebSocket), window.WebSocket && (Pusher.Transport = window.WebSocket, Pusher.TransportType = "native");
        var a = (document.location.protocol == "http:" ? Pusher.cdn_http : Pusher.cdn_https) + Pusher.VERSION,
            b = [];
        window.JSON || b.push(a + "/json2" + Pusher.dependency_suffix + ".js"), window.WebSocket || (window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0, window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = !0, b.push(a + "/flashfallback" + Pusher.dependency_suffix + ".js"));
        var c = function() {
                return window.WebSocket ? function() {
                    Pusher.ready()
                } : function() {
                    window.WebSocket ? (Pusher.Transport = window.WebSocket, Pusher.TransportType = "flash", window.WEB_SOCKET_SWF_LOCATION = a + "/WebSocketMain.swf", WebSocket.__addTask(function() {
                        Pusher.ready()
                    }), WebSocket.__initialize()) : (sockjsPath = a + "/sockjs" + Pusher.dependency_suffix + ".js", _require([sockjsPath], function() {
                        Pusher.Transport = SockJS, Pusher.TransportType = "sockjs", Pusher.ready()
                    }))
                }
            }(),
            d = function(a) {
                var b = function() {
                    document.body ? a() : setTimeout(b, 0)
                };
                b()
            },
            e = function() {
                d(c)
            };
        b.length > 0 ? _require(b, e) : e()
    })(),
    function() {
        jQuery(function() {
            return $(".accept-terms-buttons .btn").click(function() {
                return $(this).addClass("disabled"), $(".spinner").show()
            })
        })
    }.call(this);

}