/* Retrieved from https://web.archive.org/web/20200420105550js_/https://ct1.addthis.com/static/r07/core130.js */
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

    /* (c) 2008-2014 AddThis, Inc */
    if (!window._ate) {
        (function() {
            var _1, w = window,
                d = document;
            var l;
            try {
                l = window.location;
                if (l.protocol.indexOf("file") === 0 || l.protocol.indexOf("safari-extension") === 0 || l.protocol.indexOf("chrome-extension") === 0) {
                    _atr = "http:" + _atr;
                }
                if (l.hostname.indexOf("localhost") != -1) {
                    _atc.loc = 1;
                }
            } catch (e) {}
            var ua = navigator.userAgent.toLowerCase(),
                d = document,
                w = window,
                _6 = window.addthis || {},
                A = _6,
                dl = d.location,
                b = {
                    win: /windows/.test(ua),
                    xp: (/windows nt 5.1/.test(ua)) || (/windows nt 5.2/.test(ua)),
                    osx: /os x/.test(ua),
                    chb: /chrome/.test(ua) && parseInt((/chrome\/(.+?)\./.exec(ua)).pop(), 10) > 13,
                    chr: /chrome/.test(ua) && !(/rockmelt/.test(ua)),
                    cho: /chrome\/(1[2345678]|2\d)/.test(ua),
                    iph: /iphone/.test(ua) || (/ipod/.test(ua)),
                    dro: /android/.test(ua),
                    wph: /windows phone/.test(ua),
                    ipa: /ipad/.test(ua),
                    saf: /safari/.test(ua) && !(/chrome/.test(ua)),
                    opr: /opera/.test(ua),
                    ffx: /firefox/.test(ua),
                    ff2: /firefox\/2/.test(ua),
                    ffn: /firefox\/((3.[6789][0-9a-z]*)|(4.[0-9a-z]*))/.test(ua),
                    ie6: /msie 6.0/.test(ua),
                    ie7: /msie 7.0/.test(ua),
                    ie8: /msie 8.0/.test(ua),
                    ie9: /msie 9.0/.test(ua),
                    ie10: /msie 10.0/.test(ua),
                    ie11: /trident\/7.0/.test(ua),
                    msi: (/msie/.test(ua)) && !(/opera/.test(ua)),
                    mob: /(iphone|ipod|ipad|android|mobi|blackberry|opera mini|silk)/.test(ua),
                    mod: -1
                },
                _a = {
                    rev: "127626",
                    bro: b,
                    wlp: (l || {}).protocol,
                    dl: dl,
                    unj: w.JSON && typeof w.JSON.parse == "function" && typeof w.JSON.stringify == "function",
                    upm: !!w.postMessage && ("" + w.postMessage).toLowerCase().indexOf("[native code]") !== -1,
                    uls: (function() {
                        try {
                            var _b = "addthis-test",
                                _c = window.localStorage;
                            _c.setItem(_b, "1");
                            _c.removeItem(_b);
                            return _c != null;
                        } catch (error) {
                            return false;
                        }
                    }()),
                    bamp: _atc.bamp - Math.random(),
                    abmp: _atc.abmp - Math.random(),
                    camp: _atc.camp - Math.random(),
                    damp: _atc.damp - Math.random(),
                    cscs: _atc.cscs - Math.random(),
                    sfmp: _atc.sfmp - Math.random(),
                    xamp: _atc.xamp - Math.random(),
                    vamp: _atc.vamp - Math.random(),
                    tamp: _atc.tamp - Math.random(),
                    pamp: _atc.pamp - Math.random(),
                    ab: "-",
                    inst: 1,
                    wait: 500,
                    tmo: null,
                    sub: !!window.at_sub,
                    dbm: 0,
                    uid: null,
                    api: {},
                    imgz: [],
                    hash: window.location.hash
                };
            d.ce = d.createElement;
            d.gn = d.getElementsByTagName;
            window._ate = _a;
            _a.evl = function(_d, _e) {
                if (_e) {
                    var _f;
                    eval("evl = " + _d);
                    return _f;
                } else {
                    return eval(_d);
                }
            };

            function reduce(o, fn, acc, cxt) {
                if (!o) {
                    return acc;
                }
                if (o instanceof Array || (o.length && (typeof o !== "function"))) {
                    for (var i = 0, len = o.length, v = o[0]; i < len; v = o[++i]) {
                        acc = fn.call(cxt || o, acc, v, i, o);
                    }
                } else {
                    for (var _17 in o) {
                        acc = fn.call(cxt || o, acc, o[_17], _17, o);
                    }
                }
                return acc;
            }

            function mrg(o, n) {
                if (n && o !== n) {
                    for (var k in n) {
                        if (o[k] === u) {
                            o[k] = n[k];
                        }
                    }
                }
            }
            var _1c = function(_1d, _1e) {
                    try {
                        reduce(_1d, function(acc, v, k) {
                            var rv = _1e(k, v);
                            if (rv === false) {
                                throw {
                                    cancel: true
                                };
                            }
                        }, []);
                    } catch (e) {
                        if (e.cancel) {
                            return;
                        } else {
                            throw e;
                        }
                    }
                },
                _23 = function(_24, _25) {
                    try {
                        reduce(_24, function(acc, v, k) {
                            var rv = _25(k, v, _24);
                            if (rv === false) {
                                throw {
                                    cancel: true
                                };
                            }
                        }, []);
                    } catch (e) {
                        if (e.cancel) {
                            return;
                        } else {
                            throw e;
                        }
                    }
                },
                _2a = Array.prototype.map,
                map = function(obj, _2d, _2e) {
                    var _2f = [];
                    if (obj == null) {
                        return _2f;
                    }
                    if (_2a && obj.map === _2a) {
                        return obj.map(_2d, _2e);
                    }
                    _23(obj, function(_30, _31, _32) {
                        _2f[_2f.length] = _2d.call(_2e, _31, _30, _32);
                    });
                    return _2f;
                },
                _33 = function(a, b) {
                    var _36 = {},
                        i;
                    for (i = 0; i < a.length; i++) {
                        _36[a[i]] = 1;
                    }
                    for (i = 0; i < b.length; i++) {
                        if (!_36[b[i]]) {
                            a.push(b[i]);
                            _36[b[i]] = 1;
                        }
                    }
                    return a;
                },
                _38 = Array.prototype.slice,
                _39 = function(a) {
                    return _38.apply(a, _38.call(arguments, 1));
                },
                _3b = function(s) {
                    return ("" + s).replace(/(^\s+|\s+$)/g, "");
                },
                _3d = function(o) {
                    try {
                        return (w.JSON && typeof(w.JSON.stringify) == "function") ? JSON.stringify(o) : "";
                    } catch (e) {
                        return "";
                    }
                },
                _3f = function(s) {
                    try {
                        return (w.JSON && typeof(w.JSON.parse) == "function") ? JSON.parse(s) : null;
                    } catch (e) {
                        return null;
                    }
                },
                _41 = function(A, B) {
                    if (!B) {
                        B = A.object || A.obj;
                        A = A.subject || A.subj;
                    }
                    return reduce(_39(arguments, 1), function(A, _45) {
                        return reduce(_45, function(o, v, k) {
                            if (o) {
                                o[k] = v;
                            }
                            return o;
                        }, A);
                    }, A);
                },
                _49 = function(o, del, eq) {
                    return reduce(o, function(acc, v, k) {
                        k = _3b(k);
                        if (k) {
                            acc.push(_euc(k) + (eq || "=") + _euc(_3b((typeof(v) == "object" ? _49(v, del || "&", eq || "=") : (v)))));
                        }
                        return acc;
                    }, []).join(del || "&");
                },
                _50 = function(o, del) {
                    return reduce(o, function(acc, v, k) {
                        k = _3b(k);
                        if (k) {
                            acc.push(_euc(k) + "=" + _euc(_3b(v)));
                        }
                        return acc;
                    }, []).join(del || "&");
                },
                _56 = function(q, del, eq) {
                    return reduce((q || "").split(del || "&"), function(acc, _5b) {
                        try {
                            var kv = _5b.split((eq || "=")),
                                k = _3b(_duc(kv[0])),
                                v = _3b(_duc(kv.slice(1).join(eq || "=")));
                            if (v.indexOf(del || "&") > -1 || v.indexOf(eq || "=") > -1) {
                                v = _56(v, del || "&", eq || "=");
                            }
                            if (k) {
                                acc[k] = v;
                            }
                        } catch (e) {}
                        return acc;
                    }, {});
                },
                _5f = function(q, del) {
                    return reduce((q || "").split(del || "&"), function(acc, _63) {
                        try {
                            var kv = _63.split("="),
                                k = _3b(_duc(kv[0])),
                                v = _3b(_duc(kv.slice(1).join("=")));
                            if (k) {
                                acc[k] = v;
                            }
                        } catch (e) {}
                        return acc;
                    }, {});
                },
                _67 = function(obj) {
                    if (null == obj || "object" != typeof obj) {
                        return obj;
                    }
                    if (obj instanceof Object) {
                        var s = "";
                        for (var _6a in obj) {
                            if (obj.hasOwnProperty(_6a)) {
                                s += ((s.length > 0) ? "," : "") + obj[_6a];
                            }
                        }
                        return s;
                    }
                    return null;
                },
                _6b = function() {
                    var _6c = _39(arguments, 0),
                        fn = _6c.shift(),
                        _6e = _6c.shift();
                    return function() {
                        return fn.apply(_6e, _6c.concat(_39(arguments, 0)));
                    };
                },
                _6f = function(un, obj, evt, fn) {
                    if (!obj) {
                        return;
                    }
                    if (obj.attachEvent) {
                        obj[(un ? "detach" : "attach") + "Event"]("on" + evt, fn);
                    } else {
                        obj[(un ? "remove" : "add") + "EventListener"](evt, fn, false);
                    }
                },
                _74 = function(obj, evt, fn) {
                    _6f(0, obj, evt, fn);
                },
                _78 = function(obj, evt, fn) {
                    _6f(1, obj, evt, fn);
                },
                _7c = function(s) {
                    return (s.match(/(([^\/\/]*)\/\/|\/\/)?([^\/\?\&\#]+)/i))[0];
                },
                _7e = function(s) {
                    return s.replace(_7c(s), "");
                },
                _80 = function(obj) {
                    if (null == obj || "object" != typeof obj) {
                        return obj;
                    }
                    if (obj instanceof Object) {
                        var _82 = {};
                        if (typeof(obj.hasOwnProperty) == "function") {
                            for (var _83 in obj) {
                                if (_82[_83] === obj) {
                                    continue;
                                }
                                if (obj.hasOwnProperty(_83) && obj[_83] !== _1) {
                                    _82[_83] = _80(obj[_83]);
                                }
                            }
                        }
                        return _82;
                    }
                    return null;
                },
                _84 = function(url) {
                    if (!url) {
                        return;
                    }
                    var _86, _87;
                    if (url.search(/(?:\:|\/\/)/) !== -1) {
                        return url;
                    }
                    if (url.search(/^\//) !== -1) {
                        return window.location.origin + url;
                    }
                    if (url.search(/(?:^\.\/|^\.\.\/)/) !== -1) {
                        _86 = /\.\.\//g;
                        var _88 = (url.search(_86) === 0 && url.match(_86).length) || 1,
                            loc = window.location.href.replace(/\/$/, "").split("/");
                        console.log(_88 + ", " + url.match(_86).length);
                        url = url.replace(_86, "").replace(_87, "");
                        return loc.slice(0, loc.length - _88).join("/") + "/" + url;
                    }
                    return window.location.href.match(/(.*\/)/)[0] + url;
                },
                _8a = function() {
                    var _8b = function(_8c) {
                        var el, id, tag, _90;
                        tag = _8c.match(/^(\w+)(?:#|.|$)/);
                        tag = tag ? tag[1] : "div";
                        el = document.createElement(tag);
                        id = _8c.match(/#[\w][\w-]*/);
                        if (id) {
                            id = id[0].replace(/#/, "");
                            el.setAttribute("id", id);
                        }
                        _90 = _8c.match(/\.[\w][\w-]*/g);
                        if (_90) {
                            _90 = _90.join(" ").replace(/\./g, "");
                            el.className = _90;
                        }
                        return el;
                    };
                    return function(_91) {
                        if (!_91) {
                            return;
                        }
                        var i, _93, val, el, _96, _97, _98, obj, _9a, _9b;
                        for (i in _91) {
                            _93 = i;
                            break;
                        }
                        val = _91[_93];
                        el = _8b(_93);
                        if (val && typeof val === "object" && "length" in val) {
                            for (i in val) {
                                if (typeof val.hasOwnProperty !== "undefined" && !val.hasOwnProperty(i)) {
                                    continue;
                                }
                                var c = _8a(val[i]);
                                el.appendChild(c);
                            }
                            return el;
                        }
                        _97 = _91[_93];
                        _9a = ["a", "b", "body", "br", "div", "em", "font", "head", "h", "p", "span", "button", "h1", "h2", "h3", "h4"];
                        _9b = function(_9d) {
                            if (typeof _9a.indexOf === "function") {
                                return _9a.indexOf(_9d) > -1;
                            }
                            for (var i in _9a) {
                                if (_9d === _9a[i]) {
                                    return true;
                                }
                            }
                            return false;
                        };
                        if (typeof _97 === "string") {
                            el.appendChild(document.createTextNode(_97));
                        } else {
                            for (var _96 in _97) {
                                if (_97.hasOwnProperty(_96)) {
                                    _98 = _97[_96];
                                    if (typeof _98 === "string" && _96.indexOf(".") < 0 && (_96.indexOf("#") < 0 || _96.length === 1) && !_9b(_96.toLowerCase())) {
                                        if (_96 === "html") {
                                            el.appendChild(document.createTextNode(_98));
                                        } else {
                                            if (_96 === "style" && (_a.bro.ie6 || _a.bro.ie7 || (_a.bro.msi && d.compatMode.toLowerCase() === "backcompat"))) {
                                                var _9f = _98.split(";"),
                                                    x = -1,
                                                    _a1, _a2, _a3;
                                                while (++x < _9f.length) {
                                                    _a1 = _9f[x];
                                                    _a2 = _a1.substring(0, _a1.indexOf(":"));
                                                    _a3 = _a1.substring(_a1.indexOf(":") + 1, _a1.length);
                                                    if (_a2 && _a3) {
                                                        try {
                                                            el.style[_a2] = _a3;
                                                        } catch (e) {}
                                                    }
                                                }
                                            } else {
                                                el.setAttribute(_96, _98);
                                            }
                                        }
                                    } else {
                                        if (_96 == "children") {
                                            for (var c in _98) {
                                                el.appendChild(_8a(_98[c]));
                                            }
                                        } else {
                                            if ((_98 || {}).test === false) {
                                                continue;
                                            }
                                            obj = {};
                                            obj[_96] = _98;
                                            _98 = _8a(obj);
                                            el.appendChild(_98);
                                        }
                                    }
                                }
                            }
                        }
                        return el;
                    };
                }(),
                _a4 = function(obj) {
                    var _a6;
                    for (_a6 in obj) {
                        if (obj.hasOwnProperty(_a6)) {
                            return false;
                        }
                    }
                    return true;
                },
                _a7 = function(obj) {
                    var str = [];
                    for (var p in obj) {
                        str.push(_euc(p) + "=" + _euc(obj[p]));
                    }
                    return str.join("&");
                },
                _ab = {
                    unqconcat: _33,
                    reduce: reduce,
                    slice: _39,
                    strip: _3b,
                    extend: _41,
                    toKV: _50,
                    toJSON: _3d,
                    fromJSON: _3f,
                    rtoKV: _49,
                    fromKV: _5f,
                    rfromKV: _56,
                    otoCSV: _67,
                    bind: _6b,
                    listen: _74,
                    each: _1c,
                    map: map,
                    unlisten: _78,
                    gUD: _7c,
                    gUQS: _7e,
                    clone: _80,
                    mrg: mrg,
                    rel2abs: _84,
                    json2html: _8a,
                    isEmptyObj: _a4,
                    serialize: _a7,
                    misc: {}
                };
            _a.util = _ab;
            _41(_a, _ab);
            var u = _a.util;
            (function(j, l, m) {
                var h, e = w.JSON && "function" == typeof JSON.stringify,
                    p = j.util;

                function k(s, r, u, q, t) {
                    this.type = s;
                    this.triggerType = r || s;
                    this.target = u || q;
                    this.triggerTarget = q || u;
                    this.data = t || {};
                    this.serialize = function() {
                        if (e) {
                            var v = p.extend({}, this.data);
                            v.element = null;
                            return JSON.stringify({
                                remoteEvent: {
                                    data: v,
                                    type: this.type,
                                    triggerType: this.triggerType,
                                    target: {},
                                    triggerTarget: {}
                                }
                            });
                        }
                        return "";
                    };
                }
                p.extend(k.prototype, {
                    constructor: k,
                    bubbles: false,
                    preventDefault: p.noop,
                    stopPropagation: p.noop,
                    clone: function() {
                        return new this.constructor(this.type, this.triggerType, this.target, this.triggerTarget, p.extend({}, this.data));
                    }
                });

                function f(q, r) {
                    this.target = q;
                    this.queues = {};
                    this.remoteDispatcher = null;
                    this.remoteFilter = null;
                    this.defaultEventType = r || k;
                }

                function a(q) {
                    var r = this.queues;
                    if (!r[q]) {
                        r[q] = [];
                    }
                    return r[q];
                }

                function i(q, r) {
                    this.getQueue(q).push(r);
                }

                function o(r, q) {
                    if (r && r.postMessage) {
                        this.remoteDispatcher = r;
                        this.remoteFilter = q;
                    }
                }

                function d(s, t) {
                    var u = this.getQueue(s),
                        r = typeof u === "string" ? u.indexOf(t) : -1;
                    if (r !== -1) {
                        u.splice(r, 1);
                    }
                }

                function b(q, u, t, s) {
                    var r = this;
                    if (!s) {
                        setTimeout(function() {
                            r.dispatchEvent(new r.defaultEventType(q, q, u, r.target, t));
                        }, 10);
                    } else {
                        r.dispatchEvent(new r.defaultEventType(q, q, u, r.target, t));
                    }
                }

                function n(s) {
                    for (var t = 0, x = s.target, u = this.getQueue(s.type), r = u.length; t < r; t++) {
                        u[t].call(x, s.clone());
                    }
                    try {
                        if (e && this.remoteDispatcher && typeof this.remoteDispatcher.postMessage === "function" && (!this.remoteFilter || s.type.indexOf(this.remoteFilter) === 0)) {
                            this.remoteDispatcher.postMessage(s.serialize(), "*");
                        }
                    } catch (v) {}
                }

                function c(r) {
                    if (!r) {
                        return;
                    }
                    for (var q in g) {
                        r[q] = p.bind(g[q], this);
                    }
                    return r;
                }
                var g = {
                    constructor: f,
                    getQueue: a,
                    addEventListener: i,
                    removeEventListener: d,
                    addRemoteDispatcher: o,
                    dispatchEvent: n,
                    fire: b,
                    decorate: c
                };
                p.extend(f.prototype, g);
                j.event = {
                    PolyEvent: k,
                    EventDispatcher: f
                };
            })(_a, _a.api, _a);
            _a.ed = new _a.event.EventDispatcher(_a);
            var _d1 = {
                    isBound: 0,
                    isReady: 0,
                    readyList: [],
                    onReady: function() {
                        if (!_d1.isReady) {
                            _d1.isReady = 1;
                            var l = _d1.readyList.concat(window.addthis_onload || []);
                            for (var fn = 0; fn < l.length; fn++) {
                                l[fn].call(window);
                            }
                            _d1.readyList = [];
                        }
                    },
                    addLoad: function(_d4) {
                        var o = w.onload;
                        if (typeof w.onload != "function") {
                            w.onload = _d4;
                        } else {
                            w.onload = function() {
                                if (o) {
                                    o();
                                }
                                _d4();
                            };
                        }
                    },
                    bindReady: function() {
                        if (r.isBound || _atc.xol) {
                            return;
                        }
                        r.isBound = 1;
                        if (document.readyState === "complete") {
                            setTimeout(r.onReady, 1);
                            return;
                        }
                        if (d.addEventListener && !b.opr) {
                            d.addEventListener("DOMContentLoaded", r.onReady, false);
                        }
                        var apc = window.addthis_product;
                        if (apc && apc.indexOf("f") > -1) {
                            r.onReady();
                            return;
                        }
                        if (b.msi && !b.ie9 && window == top) {
                            (function() {
                                if (r.isReady) {
                                    return;
                                }
                                try {
                                    d.documentElement.doScroll("left");
                                } catch (error) {
                                    setTimeout(arguments.callee, 0);
                                    return;
                                }
                                r.onReady();
                            })();
                        }
                        if (b.opr) {
                            d.addEventListener("DOMContentLoaded", function() {
                                if (r.isReady) {
                                    return;
                                }
                                for (var i = 0; i < d.styleSheets.length; i++) {
                                    if (d.styleSheets[i].disabled) {
                                        setTimeout(arguments.callee, 0);
                                        return;
                                    }
                                }
                                r.onReady();
                            }, false);
                        }
                        if (b.saf) {
                            var _d8;
                            (function() {
                                if (r.isReady) {
                                    return;
                                }
                                if (d.readyState != "loaded" && d.readyState != "complete") {
                                    setTimeout(arguments.callee, 0);
                                    return;
                                }
                                if (_d8 === _1) {
                                    var _da = d.gn("link");
                                    for (var i = 0; i < _da.length; i++) {
                                        if (_da[i].getAttribute("rel") == "stylesheet") {
                                            _d8++;
                                        }
                                    }
                                    var _dc = d.gn("style");
                                    _d8 += _dc.length;
                                }
                                if (d.styleSheets.length != _d8) {
                                    setTimeout(arguments.callee, 0);
                                    return;
                                }
                                r.onReady();
                            })();
                        }
                        r.addLoad(r.onReady);
                    },
                    append: function(fn, _de) {
                        r.bindReady();
                        if (r.isReady) {
                            fn.call(window, []);
                        } else {
                            r.readyList.push(function() {
                                return fn.call(window, []);
                            });
                        }
                    }
                },
                r = _d1,
                a = _a;
            _41(_a, {
                plo: [],
                lad: function(x) {
                    _a.plo.push(x);
                }
            });
            (function(b, d, c) {
                b.pub = function() {
                    return _euc((w.addthis_config_msg || {}).pubid || (w.addthis_config_msg || {}).username || (w.addthis_config_msg || {}).pub || (w.addthis_config || {}).pubid || (w.addthis_config || {}).username || w.addthis_pub || "");
                };
                b.usu = function(e, g) {
                    if (!w.addthis_share) {
                        w.addthis_share = {};
                    }
                    if (g || e != addthis_share.url) {
                        addthis_share.imp_url = 0;
                    }
                };
                b.ver = function() {
                    return (!_atc.noup && _atc.ver >= 152) ? 300 : _atc.ver;
                };
                b.rsu = function() {
                    var j = document,
                        h = j.title,
                        e = j.location || {},
                        g = e.href,
                        f = g.split("#"),
                        i = f.pop();
                    if (_a.track.ich(i)) {
                        g = f.join("#");
                    }
                    if (b.ver() >= 250 && addthis_share.imp_url && g && g != w.addthis_share.url) {
                        w.addthis_share.url = w.addthis_url = g;
                        w.addthis_share.title = w.addthis_title = h;
                        return 1;
                    }
                    return 0;
                };
                b.igv = function(e, f) {
                    if (!w.addthis_config) {
                        w.addthis_config = {
                            username: w.addthis_pub
                        };
                    } else {
                        if (addthis_config.data_use_cookies === false) {
                            _atc.xck = 1;
                        }
                    }
                    if (!w.addthis_share) {
                        w.addthis_share = {};
                    }
                    if (!addthis_share.url) {
                        if (!w.addthis_url && addthis_share.imp_url === _1) {
                            addthis_share.imp_url = 1;
                        }
                        addthis_share.url = (w.addthis_url || e || "").split("#{").shift();
                    }
                    if (!addthis_share.title) {
                        addthis_share.title = (w.addthis_title || f || "").split("#{").shift();
                    }
                };
                if (!_atc.ost) {
                    if (!w.addthis_conf) {
                        w.addthis_conf = {};
                    }
                    if (l && (l.href.indexOf("_at_test300") > -1 || l.href.indexOf("_addthis_upgrade_test") > -1)) {
                        _atc.ver = 300;
                    }
                    for (var a in addthis_conf) {
                        _atc[a] = addthis_conf[a];
                    }
                    _atc.ost = 1;
                }
            })(_a, _a.api, _a);
            (function(g, j, k) {
                var c = w.console,
                    n = 0,
                    o = 1,
                    a = (!c || typeof c.log === "undefined"),
                    p = n,
                    b = Array.prototype.slice,
                    f = ["error", "warn", "info", "debug"],
                    h = f.length;

                function d() {
                    if (p && _a.bro.ie6) {
                        alert(Array.prototype.slice.call(arguments, 0).join(","));
                    }
                }
                try {
                    if (!a && (!o || l.hash.indexOf("atlog=1") > -1)) {
                        n = 1;
                    }
                } catch (m) {}
                g.log = {
                    level: n
                };
                while (--h >= 0) {
                    (function(e, q) {
                        g.log[q] = a ? function() {
                            return;
                        } : function() {
                            if (g.log.level <= 0) {
                                return;
                            }
                            var s = b.call(arguments),
                                r = ((((arguments || {}).callee || {}).caller || {}).name),
                                i = typeof c[q] === "function" ? c[q] : c.log;
                            if (r) {
                                s.unshift(r + ": ");
                            }
                            s.unshift("[" + q + "]");
                            if (c && typeof i == "function") {
                                if (c.firebug) {
                                    i.apply(w, s);
                                } else {
                                    if (typeof i.apply == "function") {
                                        try {
                                            i.apply(c, s);
                                        } catch (t) {
                                            i("failed apply");
                                            i(s);
                                        }
                                    } else {
                                        i(s);
                                    }
                                }
                            } else {
                                if (!Function.prototype.bind && typeof c.log == "object") {
                                    Function.prototype.call.call(c.log, c, b.call(arguments));
                                }
                            }
                        };
                    })(h, f[h]);
                }
            })(_a, _a.api, _a);
            (function(b, f, c) {
                var h, g = document,
                    a = b.util;
                b.ckv = a.fromKV(g.cookie, ";");

                function e(d) {
                    return a.fromKV(g.cookie, ";")[d];
                }
                if (!b.cookie) {
                    b.cookie = {};
                }
                b.cookie.rck = e;
            })(_a, _a.api, _a);
            (function(a, b, e) {
                var h = document,
                    l = window,
                    g = 0;

                function i() {
                    if (g) {
                        return 1;
                    }
                    j("xtc", 1);
                    if (1 == a.cookie.rck("xtc")) {
                        g = 1;
                    }
                    f("xtc", 1);
                    return g;
                }

                function c(o) {
                    var m, q, d, n = o || _a.dh || _a.du || (_a.dl ? _a.dl.hostname : "");
                    if (n.indexOf(".gov") > -1 || n.indexOf(".mil") > -1) {
                        return true;
                    }
                    q = typeof(a.pub) === "function" ? a.pub() : a.pub;
                    d = ["usarmymedia", "govdelivery"];
                    for (m in d) {
                        if (q == d[m]) {
                            return true;
                        }
                    }
                    return false;
                }

                function k(d) {
                    if (_atc.xck) {
                        return;
                    } else {
                        if (c(d)) {
                            _atc.xck = 1;
                        }
                    }
                }

                function f(m, d) {
                    if (h.cookie) {
                        h.cookie = m + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/" + (d ? "; domain=" + (a.bro.msi ? "" : ".") + "addthis.com" : "");
                    }
                }

                function j(o, n, p, d, m) {
                    if (!l.at_sub) {
                        k();
                    }
                    if (!_atc.xck && (!d || (l.addthis_config || {}).data_use_cookies_ondomain !== false) && (l.addthis_config || {}).data_use_cookies !== false) {
                        if (!m) {
                            m = new Date();
                            m.setYear(m.getFullYear() + 2);
                        }
                        document.cookie = o + "=" + n + (!p ? "; expires=" + m.toUTCString() : "") + "; path=/;" + (!d ? " domain=" + (a.bro.msi ? "" : ".") + "addthis.com" : "");
                    }
                }
                if (!a.cookie) {
                    a.cookie = {};
                }
                a.cookie.sck = j;
                a.cookie.kck = f;
                a.cookie.cww = i;
                a.cookie.gov = k;
                a.cookie.isgv = c;
            })(_a, _a.api, _a);
            (function(e, u, v) {
                var g, n = {
                        high: 4,
                        med: 2
                    },
                    m = (document.location.href.indexOf("addthis.com") > -1),
                    p = 10,
                    h = 20,
                    o = (!m ? "__at" : "") + "ssc",
                    s = {},
                    c = false,
                    q = [],
                    b = 0,
                    d, x = 0;

                function y() {
                    b = 0;
                    s = {};
                    q = [];
                }

                function j(z) {
                    if (z > n.high) {
                        return 3;
                    } else {
                        if (z > n.med) {
                            return 2;
                        }
                    }
                    return 1;
                }

                function a() {
                    var A = [],
                        z;
                    l();
                    for (z in s) {
                        A.push({
                            name: z,
                            score: j(s[z])
                        });
                    }
                    A.sort(function(C, B) {
                        return C.score > B.score ? 1 : -1;
                    });
                    return A;
                }

                function f() {
                    l();
                    var A = {},
                        z;
                    for (z in s) {
                        A[z] = j(s[z]);
                    }
                    return A;
                }

                function l() {
                    if (!b) {
                        var z = (e.cookie.rck(o) || "").split(","),
                            B, D, C, A;
                        for (B = 0, ssc_len = z.length; B < ssc_len; B++) {
                            D = z[B].split(";");
                            C = D.pop();
                            A = (D.pop() || "");
                            s[A] = C;
                            q.push(A);
                            if (C > x) {
                                x = C;
                                d = A;
                            }
                        }
                        b = 1;
                    }
                }

                function t(z) {
                    return s.hasOwnProperty(z);
                }

                function k() {
                    var z = false,
                        B, A = (e.cookie.rck("sshs") || "").split(",");
                    while (z === false && A.length != 0) {
                        B = A.pop();
                        if (s.hasOwnProperty(B) && s[B] == Math.min(s)) {
                            z = B;
                        }
                    }
                    if (z === false) {
                        z = q.pop();
                    }
                    delete s[z];
                }

                function i() {
                    var B = {},
                        z = [],
                        A;
                    for (A in s) {
                        if (s.hasOwnProperty(A)) {
                            if ((s[A] / 2) >= 1) {
                                B[A] = parseInt(s[A] / 2);
                                z.push(A);
                            }
                        }
                    }
                    s = B;
                    q = z;
                }

                function w(z) {
                    l();
                    if (typeof(z) !== "string") {
                        return false;
                    }
                    z = z.replace(/_[a-zA-Z0-9]*/i, "");
                    if (c === false) {
                        c = true;
                        if ((q.length + 1) >= p && !t(z)) {
                            k();
                        }
                        if (!t(z)) {
                            s[z] = "1";
                        } else {
                            s[z]++;
                        }
                        if (s[z] >= h) {
                            i();
                        }
                        var A = r(s);
                        e.cookie.sck(o, escape(A), false, !m);
                    }
                }

                function r(B) {
                    var z = [],
                        A, C;
                    if (typeof B !== "object") {
                        return false;
                    }
                    for (C in B) {
                        if (C.length > 1) {
                            z.push(C + ";" + B[C]);
                        }
                    }
                    A = z.join(",");
                    return A;
                }
                if (!e.cookie) {
                    e.cookie = {};
                }
                e.cookie.ssc = {
                    reset: y,
                    get: f,
                    getServices: a,
                    update: w
                };
            })(_a, _a.api, _a);
            (function(c, f, d) {
                var b = new Date(),
                    e = "__at",
                    h = "|",
                    a = "/";

                function g(o, n) {
                    var j = this,
                        m = 0,
                        l = 0,
                        i = !!n,
                        k = (i ? e : "") + o;
                    keys = {};
                    this.toString = function() {
                        var p = "";
                        _a.util.each(keys, function(r, q) {
                            p += (p.length ? h : "") + _euc(r) + a + ((q === _1 || q === null) ? "" : _euc(q));
                        });
                        return p;
                    };
                    this.get = function() {
                        j.load();
                        return keys;
                    };
                    this.load = function() {
                        if (!m) {
                            var p = c.cookie.rck(k) || "",
                                r = "";
                            if (p) {
                                var q = p.split(h);
                                _a.util.each(q, function(t, s) {
                                    r = s.split(a);
                                    if (r.length == 2) {
                                        l++;
                                        keys[_duc(r[0])] = _duc(r[1]);
                                    }
                                });
                            }
                            m = 1;
                        }
                        return keys;
                    };
                    this.save = function() {
                        this.load();
                        if (l) {
                            c.cookie.sck(k, j.toString(), i, i);
                        } else {
                            c.cookie.kck(k);
                        }
                    };
                    this.add = function(p, q) {
                        j.load();
                        l++;
                        keys[p] = q;
                        j.save();
                    };
                    this.remove = function(p) {
                        j.load();
                        if (keys[p]) {
                            delete keys[p];
                            l--;
                        }
                        j.save();
                    };
                    this.reset = function() {
                        keys = {};
                        l = 0;
                        j.save();
                    };
                }
                c.cookie = c.cookie || {};
                c.cookie.KV = g;
            })(_a, _a.api, _a);
            (function(f, i, k) {
                var d = new Date(),
                    b = "__attag",
                    o = "|",
                    l = ",",
                    m = 0,
                    e = 0,
                    q = [];

                function a() {
                    return q.join(l);
                }

                function h() {
                    if (!m) {
                        var r = f.cookie.rck(b) || "";
                        if (r) {
                            q = (_duc(r)).split(l);
                        }
                        m = 1;
                    }
                }

                function n() {
                    h();
                    if (q.length) {
                        f.cookie.sck(b, _euc(a()), 0, true);
                    }
                }

                function c() {
                    h();
                    return q;
                }

                function p(r) {
                    h();
                    if (typeof(r) == "string") {
                        r = [r];
                    }
                    for (var t = 0; t < q.length; t++) {
                        for (var s = 0; s < r.length; s++) {
                            if (q[t] == r[s]) {
                                return;
                            }
                        }
                    }
                    for (var s = 0; s < r.length; s++) {
                        q.push(r[s]);
                    }
                    n();
                }

                function g(r) {
                    for (var s = 0; s < q.length; s++) {
                        if (q[s] == r) {
                            q.splice(s, 1);
                            break;
                        }
                    }
                    n();
                }

                function j() {
                    q = [];
                }
                f.cookie = f.cookie || {};
                f.cookie.tag = {
                    reset: j,
                    add: p,
                    remove: g,
                    get: c,
                    toKV: a
                };
            })(_a, _a.api, _a);
            (function(d, q, s) {
                var u = new Date(),
                    m = ((document.location.href.indexOf(_atr) == -1) ? "__at" : "") + "uvc",
                    l = "|",
                    p = ",",
                    b = 0,
                    n = 0,
                    f = {
                        high: 250,
                        med: 75
                    },
                    i = [];

                function j() {
                    return i.slice(-5).join(p);
                }

                function k(x) {
                    if (!b || x) {
                        var y = d.cookie.rck(m) || "";
                        if (y) {
                            i = (_duc(y)).split(p);
                        }
                        b = 1;
                    }
                }

                function e(A) {
                    var z = new Date(A.getFullYear(), 0, 1),
                        x, y, B;
                    x = z.getDay();
                    x = (x >= 0 ? x : x + 7);
                    y = Math.floor((A.getTime() - z.getTime() - (A.getTimezoneOffset() - z.getTimezoneOffset()) * 60000) / 86400000) + 1;
                    if (x < 4) {
                        B = Math.floor((y + x - 1) / 7) + 1;
                        if (B > 52) {
                            nYear = new Date(A.getFullYear() + 1, 0, 1);
                            nday = nYear.getDay(A);
                            nday = nday >= 0 ? nday : nday + 7;
                            B = nday < 4 ? 1 : 53;
                        }
                    } else {
                        B = Math.floor((y + x - 1) / 7);
                    }
                    return B;
                }

                function c(B, z, A) {
                    for (var y = 0; y < z; y++) {
                        var x = A + y;
                        if (x >= 51) {
                            x = 1;
                        }
                        B.push("0" + l + x);
                    }
                }

                function w() {
                    if (!n) {
                        var x = e(u);
                        k();
                        g(x);
                        n = 1;
                    }
                }

                function g(y) {
                    var x, z;
                    if (!i.length) {
                        i.push("1" + l + y);
                    } else {
                        x = i[i.length - 1];
                        z = parseInt(x.split(l).pop(), 10);
                        if (z == y) {
                            i[i.length - 1] = (parseInt(x.split(l).shift(), 10) + 1) + l + y;
                        } else {
                            if (z + 1 == y || z >= 51) {
                                i.push("1" + l + y);
                            } else {
                                if (z < y) {
                                    c(i, y - z - 1, z + 1);
                                    i.push("1" + l + y);
                                } else {
                                    if (z > y) {
                                        i = [];
                                        i.push("1" + l + y);
                                    }
                                }
                            }
                        }
                        if (i.length > 5) {
                            i.slice(-5);
                        }
                    }
                }

                function a(x) {
                    u = x;
                }

                function r(x) {
                    k();
                    if (i.length) {
                        d.cookie.sck(m, _euc(j()), 0, x);
                    }
                }

                function h(x) {
                    k();
                    w();
                    r(x);
                }

                function t() {
                    var y = [];
                    k();
                    for (var x = 0; x < i.length; x++) {
                        y.push(i[x].split(l).shift());
                    }
                    return y.slice(-5);
                }

                function o() {
                    var y = t(),
                        z = 0;
                    for (var x = 0; x < y.length; x++) {
                        z += parseInt(y[x], 10) || 0;
                    }
                    if (z > f.high) {
                        return 3;
                    } else {
                        if (z > f.med) {
                            return 2;
                        } else {
                            if (z > n) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }
                    }
                }

                function v() {
                    b = 0;
                    n = 0;
                    i = [];
                }
                d.cookie = d.cookie || {};
                d.cookie.view = {
                    _sd: a,
                    _inc: g,
                    _name: m,
                    reset: v,
                    update: h,
                    get: t,
                    cla: o,
                    toKV: j
                };
            })(_a, _a.api, _a);
            (function(e, u, v) {
                var g, n = {
                        high: 4,
                        med: 2
                    },
                    m = (document.location.href.indexOf("addthis.com") > -1),
                    p = 10,
                    h = 20,
                    o = (!m ? "__at" : "") + "ssc",
                    s = {},
                    c = false,
                    q = [],
                    b = 0,
                    d, x = 0;

                function y() {
                    b = 0;
                    s = {};
                    q = [];
                }

                function j(z) {
                    if (z > n.high) {
                        return 3;
                    } else {
                        if (z > n.med) {
                            return 2;
                        }
                    }
                    return 1;
                }

                function a() {
                    var A = [],
                        z;
                    l();
                    for (z in s) {
                        A.push({
                            name: z,
                            score: j(s[z])
                        });
                    }
                    A.sort(function(C, B) {
                        return C.score > B.score ? 1 : -1;
                    });
                    return A;
                }

                function f() {
                    l();
                    var A = {},
                        z;
                    for (z in s) {
                        A[z] = j(s[z]);
                    }
                    return A;
                }

                function l() {
                    if (!b) {
                        var z = (e.cookie.rck(o) || "").split(","),
                            B, D, C, A;
                        for (B = 0, ssc_len = z.length; B < ssc_len; B++) {
                            D = z[B].split(";");
                            C = D.pop();
                            A = (D.pop() || "");
                            s[A] = C;
                            q.push(A);
                            if (C > x) {
                                x = C;
                                d = A;
                            }
                        }
                        b = 1;
                    }
                }

                function t(z) {
                    return s.hasOwnProperty(z);
                }

                function k() {
                    var z = false,
                        B, A = (e.cookie.rck("sshs") || "").split(",");
                    while (z === false && A.length != 0) {
                        B = A.pop();
                        if (s.hasOwnProperty(B) && s[B] == Math.min(s)) {
                            z = B;
                        }
                    }
                    if (z === false) {
                        z = q.pop();
                    }
                    delete s[z];
                }

                function i() {
                    var B = {},
                        z = [],
                        A;
                    for (A in s) {
                        if (s.hasOwnProperty(A)) {
                            if ((s[A] / 2) >= 1) {
                                B[A] = parseInt(s[A] / 2);
                                z.push(A);
                            }
                        }
                    }
                    s = B;
                    q = z;
                }

                function w(z) {
                    l();
                    if (typeof(z) !== "string") {
                        return false;
                    }
                    z = z.replace(/_[a-zA-Z0-9]*/i, "");
                    if (c === false) {
                        c = true;
                        if ((q.length + 1) >= p && !t(z)) {
                            k();
                        }
                        if (!t(z)) {
                            s[z] = "1";
                        } else {
                            s[z]++;
                        }
                        if (s[z] >= h) {
                            i();
                        }
                        var A = r(s);
                        e.cookie.sck(o, escape(A), false, !m);
                    }
                }

                function r(B) {
                    var z = [],
                        A, C;
                    if (typeof B !== "object") {
                        return false;
                    }
                    for (C in B) {
                        if (C.length > 1) {
                            z.push(C + ";" + B[C]);
                        }
                    }
                    A = z.join(",");
                    return A;
                }
                if (!e.cookie) {
                    e.cookie = {};
                }
                e.cookie.ssc = {
                    reset: y,
                    get: f,
                    getServices: a,
                    update: w
                };
            })(_a, _a.api, _a);
            (function(e, h, f) {
                var d = e.util,
                    a = {},
                    c = {};
                if (!e.cbs) {
                    e.cbs = {};
                }

                function b(j, l, k, o, m, i) {
                    var n = _a.util.scb("sc", j, o, m, i);
                    _a.ajs(j + "&callback=" + n, 1);
                }

                function g(l, k, o, m, i) {
                    k = (_euc(k)).replace(/[0-3][A-Z]|[^a-zA-Z0-9]/g, "").toLowerCase();
                    a[k] = a[k] || 0;
                    var j = a[k]++,
                        n = l + "_" + k + (!i ? j : "");
                    if (!_a.cbs[n]) {
                        _a.cbs[n] = function() {
                            if (c[n]) {
                                clearTimeout(c[n]);
                            }
                            o.apply(this, arguments);
                        };
                    }
                    _a.cbs["time_" + n] = (new Date()).getTime();
                    if (m) {
                        clearTimeout(c[n]);
                        c[n] = setTimeout(m, 10000);
                    }
                    return "_ate.cbs." + _euc(n);
                }
                d.scb = g;
                d.msc = b;
            })(_a, _a.api, _a);
            (function(c, f, e) {
                var h = {},
                    g = {};

                function b(l, m) {
                    var j = 291;
                    if (l) {
                        for (var k = 0; k < l.length; k++) {
                            j = (j * (l.charCodeAt(k) + k) + 3) & 1048575;
                        }
                    }
                    return (j & 16777215).toString(m || 32);
                }

                function a(j) {
                    if (!j) {
                        return false;
                    }
                    var s = j.id || j.name || j.className,
                        l = new Date();
                    if (!h[s] || (l.getTime() > h[s].getTime() + 3000)) {
                        h[s] = l;
                    } else {
                        return g[s];
                    }
                    var q = j.offsetTop,
                        k = j.offsetLeft,
                        i = j.offsetWidth,
                        t = j.offsetHeight,
                        n = w.pageYOffset ? w.pageYOffset : d.documentElement.scrollTop,
                        o = w.pageXOffset ? w.pageXOffset : d.documentElement.scrollLeft,
                        m = window.innerHeight || document.documentElement.clientHeight,
                        r = window.innerWidth || document.documentElement.clientWidth,
                        p = 0;
                    while (j.offsetParent) {
                        j = j.offsetParent;
                        q += j.offsetTop;
                        k += j.offsetLeft;
                        if (++p > 100) {
                            break;
                        }
                    }
                    g[s] = (q < (n + m) && k < (o + r) && (q + t) > n && (k + i) > o);
                    return g[s];
                }
                c.mun = b;
                c.ivz = a;
            })(_a, _a.api, _a);
            (function(b, d, c) {
                function a(m, j) {
                    var n, o, l, e, h, f, k, g;
                    n = m.length & 3;
                    o = m.length - n;
                    l = j;
                    h = 3432918353;
                    f = 461845907;
                    g = 0;
                    while (g < o) {
                        k = ((m.charCodeAt(g) & 255)) | ((m.charCodeAt(++g) & 255) << 8) | ((m.charCodeAt(++g) & 255) << 16) | ((m.charCodeAt(++g) & 255) << 24);
                        ++g;
                        k = ((((k & 65535) * h) + ((((k >>> 16) * h) & 65535) << 16))) & 4294967295;
                        k = (k << 15) | (k >>> 17);
                        k = ((((k & 65535) * f) + ((((k >>> 16) * f) & 65535) << 16))) & 4294967295;
                        l ^= k;
                        l = (l << 13) | (l >>> 19);
                        e = ((((l & 65535) * 5) + ((((l >>> 16) * 5) & 65535) << 16))) & 4294967295;
                        l = (((e & 65535) + 27492) + ((((e >>> 16) + 58964) & 65535) << 16));
                    }
                    k = 0;
                    switch (n) {
                        case 3:
                            k ^= (m.charCodeAt(g + 2) & 255) << 16;
                        case 2:
                            k ^= (m.charCodeAt(g + 1) & 255) << 8;
                        case 1:
                            k ^= (m.charCodeAt(g) & 255);
                            k = (((k & 65535) * h) + ((((k >>> 16) * h) & 65535) << 16)) & 4294967295;
                            k = (k << 15) | (k >>> 17);
                            k = (((k & 65535) * f) + ((((k >>> 16) * f) & 65535) << 16)) & 4294967295;
                            l ^= k;
                    }
                    l ^= m.length;
                    l ^= l >>> 16;
                    l = (((l & 65535) * 2246822507) + ((((l >>> 16) * 2246822507) & 65535) << 16)) & 4294967295;
                    l ^= l >>> 13;
                    l = ((((l & 65535) * 3266489909) + ((((l >>> 16) * 3266489909) & 65535) << 16))) & 4294967295;
                    l ^= l >>> 16;
                    return l >>> 0;
                }
                if (!b.math) {
                    b.math = {};
                }
                b.math.murmur32 = a;
            })(_a, _a.api, _a);
            (function(d, e, h) {
                var c, m = d.util,
                    k = 4294967295,
                    b = new Date().getTime();

                function i() {
                    return ((b / 1000) & k).toString(16) + ("00000000" + (Math.floor(Math.random() * (k + 1))).toString(16)).slice(-8);
                }

                function a(n) {
                    return l(n) ? (new Date((parseInt(n.substr(0, 8), 16) * 1000))) : new Date();
                }

                function j(n) {
                    var o = a();
                    return ((o.getTime() - 1000 * 86400) > (new Date()).getTime());
                }

                function g(n, p) {
                    var o = a(n);
                    return (((new Date()).getTime() - o.getTime()) > p * 1000);
                }

                function l(n) {
                    return n && n.match(/^[0-9a-f]{16}$/) && !j(n);
                }

                function f(n) {
                    return l(n) && n.match(/^0{16}$/);
                }
                m.cuid = i;
                m.ivc = l;
                m.iooc = f;
                m.ioc = g;
            })(_a, _a.api, _a);
            (function(c, f, e) {
                function b(g) {
                    if (!g) {
                        return "";
                    } else {
                        if (g.indexOf("%") > -1) {
                            g = _duc(g);
                        }
                    }
                    if (g.indexOf(",") > -1) {
                        g = g.split(",")[1];
                    }
                    g = _a.util.atob ? _a.util.atob(g) : (typeof window.atob == "function" ? window.atob(g) : "");
                    return g;
                }

                function d(h) {
                    var j = {},
                        g, i;
                    h = h.toUpperCase();
                    j.zip = h.substring(0, 5);
                    j.continent = h.substring(5, 7);
                    j.country = h.substring(7, 9);
                    j.region = h.substring(9, 11);
                    g = h.substring(11, 15);
                    if (g != "0000") {
                        j.lat = (parseInt(g) / 10 - 180).toFixed(1);
                    }
                    i = h.substring(15, 19);
                    if (i != "0000") {
                        j.lon = (parseInt(i) / 10 - 180).toFixed(1);
                    }
                    j.dma = h.substring(19, 22);
                    j.msa = h.substring(22, 26);
                    j.network_type = h.substring(26, 27);
                    j.throughput = h.substring(27, 28);
                    return j;
                }

                function a(j, k) {
                    var h, g;
                    j = j.toUpperCase().split(",");
                    for (h = 0; h < j.length; h++) {
                        g = j[h].replace(/ /g, "");
                        if (k.zip == g || k.continent == g || k.country == g || k.region == g) {
                            return 1;
                        }
                    }
                    return 0;
                }
                c.util = c.util || {};
                c.util.geo = {
                    dec: b,
                    parse: d,
                    isin: a
                };
            })(_a, _a.api, _a);
            (function(a, c, b) {
                function d(e) {
                    return e.split("//").pop().split("/").shift().split("#").shift().split("?").shift().split(".").slice(-2).join(".");
                }
                a.util = a.util || {};
                a.util.host = d;
            })(_a, _a.api, _a);
            (function(c, f, i) {
                var l = {},
                    b = [],
                    j = {},
                    e = 0;

                function m(r, q) {
                    if (b.length == 0) {
                        b = d.gn("script");
                    }
                    for (var o = 0; o < b.length; o++) {
                        var p = (b[o].src || "");
                        if (p) {
                            p = _a.mun(p);
                        }
                        if ((b[o].src || "").indexOf(q || "//web.archive.org/web/20200420105550/https://s7.addthis.com/js/250/addthis_widget.js") > -1 && !j[p]) {
                            j[p] = 1;
                            r(h(b[o].src));
                        }
                    }
                }

                function a(r) {
                    var q = _a.mun((r.adurl || "") + (r.adev || ""));
                    if (j[q]) {
                        return;
                    }
                    j[q] = 1;
                    if (r.adurl && typeof(r.adurl) == "string") {
                        _a.pixu = r.adurl;
                        e = 1;
                    }
                    if (r.adev && typeof(r.adev) == "string") {
                        var o = r.adev;
                        try {
                            o = _duc(o);
                        } catch (p) {}
                        o = o.split(";");
                        e = 1;
                        _a.ed.addEventListener("addthis-internal.data.uid", function() {
                            for (var u = 0; u < o.length; u++) {
                                var s = o[u].split(","),
                                    v = {};
                                for (var t = 0; t < s.length; t++) {
                                    var x = s[t].split("=");
                                    v[x[0]] = x[1];
                                }
                                if (w.addthis) {
                                    w.addthis.ad.event(v);
                                }
                            }
                        });
                    }
                    return e;
                }

                function h(r, o) {
                    var t = r.indexOf("#") > -1 && !o ? r.replace(/^[^\#]+\#?|^\#?/, "") : r.replace(/^[^\?]+\??|^\??/, ""),
                        u = c.util.fromKV(t);
                    return u;
                }

                function g() {
                    var o = d.getElementsByTagName("script");
                    return o[o.length - 1];
                }

                function k(o) {
                    if (l[o]) {
                        return l[o];
                    } else {
                        var q = document.gn("script");
                        for (var p = 0; p < q.length; p++) {
                            l[q[p].src.split(".").slice(-2).shift()] = q[p];
                            if ((q[p].src || "").indexOf(o) > -1) {
                                return q[p];
                            }
                        }
                    }
                    return null;
                }

                function n(u) {
                    var q = document.gn("script"),
                        v = q.length,
                        r = q[v - 1],
                        t = h(r.src);
                    if (u || (r.src && r.src.indexOf("addthis") == -1)) {
                        for (var o = 0; o < v; o++) {
                            if ((q[o].src || "").indexOf(u || "addthis.com") > -1) {
                                l[q[o].src.split(".").slice(-2).shift()] = q[o];
                                t = h(q[o].src);
                                break;
                            }
                        }
                    }
                    return t;
                }
                if (!c.util) {
                    c.util = {};
                }
                c.util.gsp = n;
                c.util.gst = k;
                c.util.gtt = g;
                c.util.ghp = h;
                c.util.pae = a;
                c.util.pas = m;
            })(_a, _a.api, _a);
            (function(e, g, f) {
                var d = e.util,
                    b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";

                function a(k) {
                    var j = "",
                        n, l, h, p, o, m = 0;
                    if (/[0-9a-fA-F]+/.test(k)) {
                        while (m < k.length) {
                            n = parseInt(k.charAt(m++), 16);
                            l = parseInt(k.charAt(m++), 16);
                            h = parseInt(k.charAt(m++), 16);
                            p = (n << 2) | (isNaN(h) ? l & 3 : (l >> 2));
                            o = ((l & 3) << 4) | h;
                            j += b.charAt(p) + (isNaN(h) ? "" : b.charAt(o));
                        }
                    }
                    return j;
                }

                function c(k) {
                    var j = "",
                        n, l, h, p, o, m = 0;
                    while (m < k.length) {
                        p = b.indexOf(k.charAt(m++));
                        o = m >= k.length ? NaN : b.indexOf(k.charAt(m++));
                        n = p >> 2;
                        l = isNaN(o) ? (p & 3) : (((p & 3) << 2) | (o >> 4));
                        h = o & 15;
                        j += n.toString(16) + l.toString(16) + (isNaN(o) ? "" : h.toString(16));
                    }
                    return j;
                }
                d.hbtoa = a;
                d.atohb = c;
            })(_a, _a.api, _a);
            (function(d, e, f) {
                var l = d.util,
                    a = {};

                function c(m) {
                    return (typeof document.querySelectorAll == "function") ? document.querySelectorAll(m) || [] : [];
                }

                function k(q) {
                    var n = (q || {}).childNodes,
                        p, m = q.textContent || q.innerText || "",
                        o = /^\s*$/;
                    if (!m) {
                        if (!n) {
                            return "";
                        }
                        for (p = 0; p < n.length; p++) {
                            q = n[p];
                            if (q.nodeName === "#text" && !(o.test(q.nodeValue))) {
                                m = q.nodeValue;
                                break;
                            }
                        }
                    }
                    return m;
                }

                function h(m) {
                    if (typeof m == "string") {
                        var n = m.substr(0, 1);
                        if (n == "#") {
                            m = document.getElementById(m.substr(1));
                        } else {
                            if (n == ".") {
                                m = j(body, "*", m.substr(1));
                            }
                        }
                    }
                    if (!m) {
                        m = [];
                    } else {
                        if (!(m instanceof Array)) {
                            m = [m];
                        }
                    }
                    return m;
                }

                function i(n, m) {
                    n = (n || {}).parentNode;
                    if (!m || !n) {
                        return n;
                    }
                    if (m.indexOf(".") === 0) {
                        m = m.substr(1);
                        while (n.parentNode && (n.className || "").indexOf(m) < 0) {
                            n = n.parentNode;
                        }
                    } else {
                        if (m.indexOf("#") === 0) {
                            m = m.substr(1);
                            while (n.parentNode && (n.id || "").indexOf(m) < 0) {
                                n = n.parentNode;
                            }
                        }
                    }
                    return n;
                }

                function g(m, x, v, t, w) {
                    x = x.toUpperCase();
                    var u = document,
                        r = (m == body && a[x] ? a[x] : (m || body || u.body).getElementsByTagName(x)),
                        q = [],
                        s, p;
                    if (m == body) {
                        a[x] = r;
                    }
                    if (w) {
                        for (s = 0; s < r.length; s++) {
                            p = r[s];
                            if ((p.className || "").indexOf(v) > -1) {
                                q.push(p);
                            }
                        }
                    } else {
                        v = v.replace(/\-/g, "\\-");
                        var n = new RegExp("\\b" + v + (t ? "\\w*" : "") + "\\b");
                        for (s = 0; s < r.length; s++) {
                            p = r[s];
                            if (n.test(p.className)) {
                                q.push(p);
                            }
                        }
                    }
                    return (q);
                }

                function b(r, v, s) {
                    r = r || document;
                    if (v == "*") {
                        v = null;
                    }
                    var n = (document.getElementsByClassName ? function(x, w) {
                            return x.getElementsByClassName(s);
                        } : (document.querySelectorAll ? function(x, w) {
                            return document.querySelectorAll(s);
                        } : function() {
                            return [];
                        })),
                        m = n(r, s),
                        u = (v) ? new RegExp("\\b" + v + "\\b", "i") : null,
                        o = [],
                        q;
                    for (var p = 0, t = m.length; p < t; p += 1) {
                        q = m[p];
                        if (!u || u.test(q.nodeName)) {
                            o.push(q);
                        }
                    }
                    return o;
                }
                var j = ((document.getElementsByClassName && typeof(document.getElementsByClassName) == "function") && (!_a.bro.msi || document.documentMode >= 9) || (document.querySelectorAll && typeof(document.querySelectorAll) == "function" && (!_a.bro.msi || document.documentMode >= 8))) ? b : g;
                l.gebcn = g;
                l.select = h;
                l.parent = i;
                l.qsa = c;
                l.gettxt = k;
            })(_a, _a.api, _a);
            var _240 = function(a) {
                    a = a.slice(1).split("&");
                    var c = {},
                        b;
                    u.each(a, function(f, d) {
                        b = d.split("=");
                        if (b.length > 1) {
                            c[b[0]] = b[1];
                        }
                    });
                    return c;
                },
                _245 = A.params = _240(l.search);
            u.misc.makeParams = _240;
            if ("at_tags" in _245) {
                _245.at_tag = _245.at_tags;
            }
            if ("at_tag" in _245) {
                _6.user.ready(function() {
                    _a.cookie.tag.add(_6.params.at_tag);
                });
            }
            if ("at_welcome" in _245) {
                if (!_duc(_245.at_welcome).match(/\{/)) {
                    _6.welcome_rule = _duc(_245.at_welcome);
                } else {
                    try {
                        _6.bar.initialize(_duc(_245.at_welcome));
                    } catch (e) {}
                }
            }
            _6.tip = function(e) {
                if (typeof e !== "object" || !("target" in e && "text" in e)) {
                    return;
                }
                var a = ".addthis.tip{position:absolute;z-index:20;} .addthis.tip .tip-body {position:relative;border:1px solid #ECE3E3;width:240px;box-shadow: 0px 0px 2px 0px #999;background-color:#F3F3F3;top:20px;} .addthis.tip .tip-body p {margin:1.5em;font-size:13px;font-family:arial;z-index:10;} .addthis.tip .tip-point {position:absolute;width:38px;height:20px;top:4px;margin:auto;width:240px;background-image:url('https://web.archive.org/web/20200420105550/http://cache.addthiscdn.com/downloads/img/surface/tip-pnt0.png');background-repeat:no-repeat;background-position:center; z-index:13;}";
                if (a) {
                    var d = {
                        style: {
                            type: "text/css"
                        }
                    };
                    if (!_a.bro.ie) {
                        d.style.html = a;
                    }
                    var c = _a.util.json2html(d);
                    document.getElementsByTagName("head")[0].appendChild(c);
                    if (_a.bro.ie) {
                        c.styleSheet.cssText = a;
                    }
                }
                var b = _a.util.json2html({
                    "div.addthis.tip": [{
                        "div.tip-point": ""
                    }, {
                        "div.tip-body": {
                            p: e.text
                        }
                    }]
                });
                document.getElementsByTagName("body")[0].appendChild(b);
                target = e.target;
                b.style.left = target.offsetLeft + target.offsetWidth / 2 - b.offsetWidth / 2 + "px";
                b.style.top = target.offsetTop + target.offsetHeight + "px";
                return b;
            };
            (function(a, c, b) {
                if (!a.ad) {
                    a.ad = {};
                }
                _a.extend(a.ad, {
                    type: {
                        NOOP: -1,
                        CLICK: 50,
                        VIEW: 100,
                        POP: 200,
                        COPY: 250,
                        SHARE: 300,
                        FOLLOW: 350,
                        COMMENT: 375,
                        UID: 1000,
                        CUSTOM: 2000
                    }
                });
            })(_a, _a.api, _a);
            (function(c, e, h) {
                var f = "_ati",
                    i = "_at.";
                c.data = c.data || {};
                c.data.storage = {
                    all: g,
                    clear: n,
                    add: o,
                    get: a,
                    remove: d,
                    exists: k,
                    preRemove: l
                };
                var m = b();

                function b() {
                    if (!_a.uls) {
                        return false;
                    }
                    var q = i + Math.floor(Math.random() * 100);
                    try {
                        localStorage.setItem(q, 1);
                        localStorage.removeItem(q);
                        return (_a.uls = true);
                    } catch (p) {
                        return (_a.uls = false);
                    }
                }

                function a(p) {
                    if (!m) {
                        return;
                    }
                    return window.localStorage.getItem(i + p);
                }

                function o(q, p) {
                    if (!m) {
                        return;
                    }
                    var r = i + q;
                    try {
                        window.localStorage[r] = p;
                    } catch (s) {
                        if (s.name === "QUOTA_EXCEEDED_ERR") {
                            n();
                            try {
                                window.localStorage[r] = p;
                            } catch (s) {}
                        }
                    }
                }

                function j(p) {
                    if (!p || typeof p !== "function") {
                        return;
                    }
                    _a.util.each(window.localStorage, function(s) {
                        var r = window.localStorage.key(s),
                            q = window.localStorage.getItem(r);
                        p(r, q);
                    });
                }

                function g(p) {
                    var q = {};
                    if (!m) {
                        return;
                    }
                    j(function(s, r) {
                        if (s && s.indexOf && s.indexOf(i + (p || "")) === 0) {
                            q[s] = r;
                        }
                    });
                    return q;
                }

                function k(q) {
                    var p = 0;
                    j(function(s, r) {
                        if (s && s.indexOf && s.indexOf(i + (q || "")) === 0) {
                            p++;
                        }
                    });
                    return p > 0;
                }

                function n() {
                    j(function(q, p) {
                        if (q.indexOf(i) === 0) {
                            window.localStorage.removeItem(q);
                        }
                    });
                }

                function l(q) {
                    var p = g();
                    _a.util.each(p, function(s, r) {
                        if (s.indexOf(i + q) === 0) {
                            window.localStorage.removeItem(s);
                        }
                    });
                }

                function d(p) {
                    if (!m) {
                        return;
                    }
                    var q = i + p;
                    window.localStorage.removeItem(p);
                }
            })(_a, _a.api, _a);
            (function(c, e, h) {
                c.data = c.data || {};
                c.data.bloom = {
                    filter: g
                };
                var f = c.data.storage;
                var a = typeof ArrayBuffer !== "undefined";

                function g(p, q, u, j) {
                    var v;
                    if (typeof p !== "number") {
                        v = p, p = v.length * 32;
                    }
                    this.m = p;
                    this.k = q;
                    var l = Math.ceil(p / 32),
                        s = -1;
                    if (a) {
                        var w = 1 << Math.ceil(Math.log(Math.ceil(Math.log(p) / Math.LN2 / 8)) / Math.LN2),
                            t = w === 1 ? Uint8Array : w === 2 ? Uint16Array : Uint32Array,
                            r = new ArrayBuffer(w * q),
                            o = this.buckets = new Int32Array(l);
                        if (v) {
                            while (++s < l) {
                                o[s] = v[s];
                            }
                        } else {
                            if (j) {
                                s = -1;
                                while (++s < l) {
                                    o[s] = j[s];
                                }
                            }
                        }
                        this._locations = new t(r);
                        if (u) {
                            for (s = 0; s < u.length; s++) {
                                this._locations[s] = u[s];
                            }
                        }
                    } else {
                        var o = this.buckets = j || [];
                        if (v) {
                            while (++s < l) {
                                o[s] = v[s];
                            }
                        } else {
                            while (++s < l) {
                                o[s] = 0;
                            }
                        }
                        this._locations = u || [];
                    }
                    this.locations = function(C) {
                        var B = this.k,
                            z = this.m,
                            E = this._locations,
                            A = d(C),
                            y = b(A),
                            D = -1,
                            n = A % z;
                        while (++D < B) {
                            E[D] = n < 0 ? (n + z) : n;
                            n = (n + y) % z;
                        }
                        return E;
                    };
                    this.add = function(x) {
                        var m = this.locations(x + ""),
                            y = -1,
                            n = this.k,
                            z = this.buckets;
                        while (++y < n) {
                            z[Math.floor(m[y] / 32)] |= 1 << (m[y] % 32);
                        }
                    };
                    this.test = function(y) {
                        var n = this.locations(y + ""),
                            z = -1,
                            x = this.k,
                            m, A = this.buckets;
                        while (++z < x) {
                            m = n[z];
                            if ((A[Math.floor(m / 32)] & (1 << (m % 32))) === 0) {
                                return false;
                            }
                        }
                        return true;
                    };
                    this.size = function() {
                        var m = this.buckets,
                            x = 0;
                        for (var k = 0, y = m.length; k < y; ++k) {
                            x += i(m[k]);
                        }
                        return -this.m * Math.log(1 - x / this.m) / this.k;
                    };
                }

                function i(j) {
                    j -= (j >> 1) & 1431655765;
                    j = (j & 858993459) + ((j >> 2) & 858993459);
                    return ((j + (j >> 4) & 252645135) * 16843009) >> 24;
                }

                function d(k) {
                    var p = k.length,
                        j = 2166136261,
                        o, m, l = -1;
                    while (++l < p) {
                        o = k.charCodeAt(l);
                        if (m = o & 4278190080) {
                            j ^= m >> 24;
                            j += (j << 1) + (j << 4) + (j << 7) + (j << 8) + (j << 24);
                        }
                        if (m = o & 16711680) {
                            j ^= m >> 16;
                            j += (j << 1) + (j << 4) + (j << 7) + (j << 8) + (j << 24);
                        }
                        if (m = o & 65280) {
                            j ^= m >> 8;
                            j += (j << 1) + (j << 4) + (j << 7) + (j << 8) + (j << 24);
                        }
                        j ^= o & 255;
                        j += (j << 1) + (j << 4) + (j << 7) + (j << 8) + (j << 24);
                    }
                    j += j << 13;
                    j ^= j >> 7;
                    j += j << 3;
                    j ^= j >> 17;
                    j += j << 5;
                    return j & 4294967295;
                }

                function b(j) {
                    j += (j << 1) + (j << 4) + (j << 7) + (j << 8) + (j << 24);
                    j += j << 13;
                    j ^= j >> 7;
                    j += j << 3;
                    j ^= j >> 17;
                    j += j << 5;
                    return j & 4294967295;
                }
            })(_a, _a.api, _a);
            (function(d, f, h) {
                var g = d.data.bloom.filter,
                    l = d.data.storage,
                    j = 3,
                    k = "hbs",
                    c = 600,
                    e = 2;
                d.data.bloom.pfilter = b;
                d.data.bloom.library = i;

                function i(m, o, p) {
                    var r = {},
                        q;
                    if (!m) {
                        return null;
                    }
                    this.name = m;
                    this.get = function(s) {
                        if (_a.ich) {
                            return null;
                        }
                        return (r[s] = b(s));
                    };
                    this.isEmpty = function() {
                        return (!(l.exists(this.name)));
                    };
                    this.add = function(s) {
                        if (!r[s]) {
                            this.get(s);
                            this.prune();
                        }
                        return r[s];
                    };
                    this.contains = function(s) {
                        return !!l.get(this.name + "." + s);
                    };

                    function n(s) {
                        s = (s || "").split(".").pop();
                        if (s.length != 4) {
                            return {};
                        } else {
                            return {
                                m: parseInt(s.substr(0, 2)),
                                d: parseInt(s.substr(2, 4))
                            };
                        }
                    }
                    this.prune = function(w) {
                        l.remove(this.name);
                        var x = this.getCurrentBlooms(),
                            w = Math.min(w || j, 31),
                            s = [],
                            v = n(this.generateName()),
                            t = v.m,
                            u = v.d;
                        _a.util.each(x, function(z, A) {
                            v = n(z);
                            if (v.m) {
                                var y = v.m,
                                    B = v.d;
                                if ((y > t) || (y == t && B < u - w) || (y < t - 1) || (y == t - 1 && (u > w || B < (31 - w)))) {
                                    l.remove(z);
                                } else {
                                    s.push(z);
                                }
                            }
                        });
                        s.sort(function(z, y) {
                            if (parseInt(z) < parseInt(y)) {
                                return 1;
                            }
                            return -1;
                        });
                        while (s.length > 3) {
                            l.remove(s.pop());
                        }
                    };
                    this.testAll = function(t) {
                        var v = false;
                        if (!q) {
                            var u = this.getCurrentBlooms(),
                                s = this;
                            _a.util.each(u, function(w, x) {
                                if (!r[w]) {
                                    r[w] = s.get(w);
                                }
                            });
                            q = 1;
                        }
                        _a.util.each(r, function(w, x) {
                            if (x && x.test(t)) {
                                v = true;
                                return false;
                            }
                        });
                        return v;
                    };
                    this.generateName = function() {
                        return ((p || a).call(this, this.name));
                    };
                    this.getCurrentBlooms = function() {
                        if (_a.ich) {
                            return [];
                        }
                        return (l.all(this.name));
                    };
                }

                function a(o) {
                    var n = _atc._date || new Date(),
                        m = n.getDate(),
                        p = (n.getMonth() + 1);
                    if (p < 10) {
                        p = "0" + p;
                    }
                    if (m < 10) {
                        m = "0" + m;
                    }
                    return o + "." + (p + "" + m);
                }

                function b(q, o, p, n, s) {
                    var t;
                    q = q || "pbf";
                    if (o && p && n && s) {
                        t = new g(o, p, n, s);
                    } else {
                        if (o && p) {
                            t = new g(o, p);
                        } else {
                            t = r(q);
                        }
                    }
                    t.name = q;

                    function r(y) {
                        if (_a.uls) {
                            var z = JSON.parse(l.get(y) || "{}"),
                                v = parseInt(z.m) || c,
                                x = parseInt(z.k) || e,
                                w = z.l,
                                u = z.b;
                            return new g(v, x, w, u);
                        }
                        return null;
                    }
                    t.save = function() {
                        if (_a.uls) {
                            var m = {
                                m: t.m,
                                k: t.k,
                                l: t._locations,
                                b: t.buckets
                            };
                            l.add(t.name, JSON.stringify(m));
                        }
                    };
                    t.remove = function() {
                        l.preRemove(t.name);
                    };
                    return t;
                }
            })(_a, _a.api, _a);
            (function(f, t, w) {
                var x = f,
                    j = new Date().getTime(),
                    s = function() {
                        return Math.floor(Math.random() * 4294967295).toString(36);
                    },
                    y = function() {
                        return Math.floor((new Date().getTime() - j) / 100).toString(16);
                    },
                    g = 0,
                    i = function(a) {
                        if (g === 0) {
                            x.sid = g = (a || x.util.cuid());
                        }
                        return g;
                    },
                    d = null,
                    c = function(a, z, A) {
                        if (d !== null) {
                            clearTimeout(d);
                        }
                        if (a) {
                            d = setTimeout(function() {
                                z(!!A);
                            }, _a.wait);
                        }
                    },
                    o = function(z, a) {
                        return _euc(z) + "=" + _euc(a) + ";" + y();
                    },
                    n = 1,
                    h = function(A, C) {
                        if (typeof A == "object") {
                            A = _a.util.toKV(A);
                        }
                        var z = (A || "").split("?"),
                            a = z.shift(),
                            B = (z.pop() || "").split("&");
                        return C(a, B);
                    },
                    k = function(a, z, B, A) {
                        if (!z) {
                            z = {};
                        }
                        if (!z.remove) {
                            z.remove = [];
                        }
                        if (z.remove.push) {
                            z.remove.push("sms_ss");
                            z.remove.push("at_xt");
                            z.remove.push("at_pco");
                            z.remove.push("fb_ref");
                            z.remove.push("fb_source");
                        }
                        if (z.remove) {
                            a = v(a, z.remove);
                        }
                        if (z.clean) {
                            a = l(a);
                        }
                        if (z.defrag) {
                            a = e(a);
                        }
                        if (z.add) {
                            a = m(a, z.add, B, A);
                        }
                        return a;
                    },
                    m = function(B, D, C, z) {
                        var a = {},
                            A;
                        if (D) {
                            for (A in D) {
                                if (B.indexOf(A + "=") > -1) {
                                    continue;
                                }
                                a[A] = p(D[A], B, C, z);
                            }
                            D = _a.util.toKV(a);
                        }
                        return B + (D.length ? ((B.indexOf("?") > -1 ? "&" : "?") + D) : "");
                    },
                    p = function(A, z, B, a) {
                        return A.replace(/\{\{service\}\}/g, _euc(a || "addthis-service-code")).replace(/\{\{code\}\}/g, _euc(a || "addthis-service-code")).replace(/\{\{title\}\}/g, _euc((B || addthis_share).title)).replace(/\{\{url\}\}/g, _euc(z));
                    },
                    v = function(z, B) {
                        var a = {},
                            C = B || [],
                            A;
                        for (A = 0; A < C.length; A++) {
                            a[C[A]] = 1;
                        }
                        return h(z, function(D, G) {
                            var H = [],
                                E, F;
                            if (G) {
                                for (E in G) {
                                    if (typeof(G[E]) == "string") {
                                        F = (G[E] || "").split("=");
                                        if (F.length != 2 && G[E]) {
                                            H.push(G[E]);
                                        } else {
                                            if (a[F[0]]) {
                                                continue;
                                            } else {
                                                if (G[E]) {
                                                    H.push(G[E]);
                                                }
                                            }
                                        }
                                    }
                                }
                                D += (H.length ? ("?" + H.join("&")) : "");
                            }
                            return D;
                        });
                    },
                    q = function(a) {
                        a = a || "";
                        if (_a.bro.msi && a instanceof Object && !a.length) {
                            var A = "";
                            _a.util.each(a, function(C, B) {
                                if (!A) {
                                    A = C + "=" + B;
                                } else {
                                    A += "&" + C + "=" + B;
                                }
                            });
                            a = A;
                        }
                        if (!a.length) {
                            a = "";
                        }
                        var z = a.split("#").pop().split(",").shift().split("=").pop();
                        if (_a.util.ivc(z)) {
                            return a.split("#").pop().split(",");
                        }
                        return [""];
                    },
                    e = function(a) {
                        if (!a.length) {
                            a = "";
                        }
                        var z = q(a).shift().split("=").pop();
                        if (_a.util.ivc(z) || a.indexOf("#at_pco=") > -1) {
                            return a.split("#").shift();
                        } else {
                            z = a.split("#").slice(1).join("#").split(";").shift();
                            if (z.split(".").length == 3) {
                                z = z.split(".").slice(0, -1).join(".");
                            }
                            if (z.length == 12 && z.substr(0, 1) == "." && (/[a-zA-Z0-9\-_]{11}/).test(z.substr(1))) {
                                return a.split("#").shift();
                            }
                        }
                        return a;
                    },
                    l = function(a) {
                        if (!a.length) {
                            a = "";
                        }
                        return h(a, function(A, D) {
                            var z = A.indexOf(";jsessionid"),
                                E = [],
                                B, C;
                            if (z > -1) {
                                A = A.substr(0, z);
                            }
                            if (D) {
                                for (B in D) {
                                    if (typeof(D[B]) == "string") {
                                        C = (D[B] || "").split("=");
                                        if (C.length == 2) {
                                            if (C[0].indexOf("utm_") === 0 || C[0] == "gclid" || C[0] == "sms_ss" || C[0] == "at_xt" || C[0] == "fb_ref" || C[0] == "fb_source") {
                                                continue;
                                            }
                                        }
                                        if (D[B]) {
                                            E.push(D[B]);
                                        }
                                    }
                                }
                                A += (E.length ? ("?" + E.join("&")) : "");
                            }
                            return A;
                        });
                    },
                    b = function() {
                        var a = (typeof(x.pub || "") == "function" ? x.pub() : x.pub) || "unknown";
                        return "AT-" + a + "/-/" + x.ab + "/" + i() + "/" + (n++) + (x.uid !== null ? "/" + x.uid : "");
                    },
                    r = function(B) {
                        B = B.split("/");
                        var z = B.shift(),
                            E = B.shift(),
                            A = B.shift(),
                            C = B.shift(),
                            D = B.shift(),
                            a = B.shift();
                        if (A) {
                            x.ab = x.ab;
                        }
                        if (C) {
                            x.sid = g = C;
                        }
                        if (D) {
                            n = D;
                        }
                        if (a) {
                            x.uid = a;
                        }
                    },
                    u = function(A) {
                        if (typeof A == "string") {
                            A = {
                                url: A
                            };
                        }
                        var a = A.url,
                            B = A.params,
                            z = A.js,
                            E = A.rand,
                            H = A.close,
                            G = a + (B ? "?" + (E ? (_a.track.ran() + (E == 2 ? ("&colc=" + (new Date()).getTime()) : "")) : "") + "&" + B : "");
                        if (z) {
                            _a.ajs(G, 1);
                        } else {
                            if (H) {
                                var F = document,
                                    C = F.createElement("iframe");
                                C.id = "_atf";
                                C.src = G;
                                _a.opp(C.style);
                                F.body.appendChild(C);
                                C = F.getElementById("_atf");
                            } else {
                                var D = new Image();
                                _a.imgz.push(D);
                                D.src = G;
                            }
                        }
                        x.log.debug("u=" + G);
                    };
                if (!_a.track) {
                    _a.track = {};
                }
                f.util.extend(_a.track, {
                    fcv: o,
                    ran: s,
                    rup: v,
                    aup: m,
                    cof: e,
                    gof: q,
                    clu: l,
                    mgu: k,
                    ssid: i,
                    sta: b,
                    uns: r,
                    lpx: u,
                    sxm: c
                });
            })(_a, _a.api, _a);
            (function(e, o, p) {
                var q = document,
                    t = ".",
                    k = ";",
                    g = ".",
                    f = t.length,
                    l = 0,
                    s = {
                        wpp: 1,
                        blg: 1
                    };

                function b(d) {
                    if (!d) {
                        return 0;
                    }
                    if (d.charAt(0) == "#") {
                        d = d.substr(1);
                    }
                    var u = d.split(";").shift();
                    if (u.split(".").length == 3) {
                        u = u.split(".").slice(0, -1).join(".");
                    }
                    if (u.length == 12 && u.substr(0, 1) == "." && (/[a-zA-Z0-9\-_]{11}/).test(u.substr(1))) {
                        return 1;
                    }
                    return 0;
                }

                function n(d) {
                    return (d.length == (11 + f) && (d.substr(0, f) == t) && (/[a-zA-Z0-9\-_]{11}/).test(d.substr(f)));
                }

                function r(S, Q) {
                    if (!S) {
                        S = document.location;
                    }
                    if (!Q) {
                        Q = q.referer || q.referrer || "";
                    }
                    var R, Z, H, X, K, C = 0,
                        D = 0,
                        M = S ? S.href : "",
                        J = (M || "").split("#").shift(),
                        x = S.hash.substr(1),
                        L = _a.util.ghp(S.search, 1),
                        O = _a.util.ghp(S.hash),
                        G = O.at_st,
                        V = O.at_pco,
                        P = O.at_ab,
                        U = O.at_pos,
                        d = O.at_tot,
                        N = O.at_si,
                        y = L.sms_ss,
                        F = L.fb_ref,
                        u = L.at_xt,
                        Y, z = L.at_st,
                        aa, W, E, I, A, v, T;
                    if (!G) {
                        if (n(x)) {
                            aa = _a.util.atohb(x.substr(f));
                            K = aa.substr(8, 8);
                            G = aa.substr(0, 8) + "00000000,";
                            G += parseInt(aa.substr(16), 10);
                        }
                    }
                    if (F && !G) {
                        W = g;
                        I = F.split(W);
                        if (I.length < 2 && F.indexOf("_") > -1) {
                            W = "_";
                            I = F.split(W);
                        }
                        A = I.length > 1 ? I.pop() : "";
                        v = I.join(W);
                        if (!n(v)) {
                            v = F;
                            A = "";
                        }
                        if (n(v)) {
                            aa = _a.util.atohb(v.substr(f));
                            u = aa.substr(0, 16) + "," + parseInt(aa.substr(16), 10);
                            y = "facebook_" + (A || "like");
                        } else {
                            Y = F.split("=").pop().split(g);
                            if (Y.length == 2 && _a.util.ivc(Y[0])) {
                                u = Y.join(",");
                                y = "facebook_" + (A || "like");
                            }
                        }
                    }
                    G = (G && _a.util.ivc(G.split(",").shift())) ? G : "";
                    if (!u) {
                        W = (x.indexOf(k) > -1) ? k : g;
                        E = x.substr(f).split(W);
                        if (E.length == 2 && n(x.substr(0, 1) + E[0])) {
                            aa = _a.util.atohb(E[0]);
                            u = aa.substr(0, 16) + "," + parseInt(aa.substr(16), 10);
                            y = E[1];
                            C = 1;
                        }
                    }
                    if (V) {
                        H = V;
                    }
                    if (G) {
                        D = parseInt(G.split(",").pop()) + 1;
                        Z = G.split(",").shift();
                    } else {
                        if (M.indexOf(_atd + "book") == -1 && J != Q) {
                            if (u) {
                                T = u.split(",");
                                R = _duc(T.shift());
                                if (R.indexOf(",") > -1) {
                                    T = R.split(",");
                                    R = T.shift();
                                }
                            } else {
                                if (z) {
                                    T = z.split(",");
                                    X = _duc(T.shift());
                                    if (X.indexOf(",") > -1) {
                                        T = X.split(",");
                                        X = T.shift();
                                    }
                                }
                            }
                            if (T && T.length) {
                                D = Math.min(3, parseInt(T.pop()) + 1);
                            }
                        }
                    }
                    if (!_a.util.ivc(Z)) {
                        Z = null;
                    }
                    if (!_a.util.ivc(X)) {
                        X = null;
                    }
                    y = (y || "").split("#").shift().split("?").shift();
                    var B = {
                        ab: P || null,
                        pos: U,
                        tot: d,
                        rsi: Z,
                        cfc: H,
                        hash: C,
                        rsiq: X,
                        fuid: K,
                        rxi: R,
                        rsc: y,
                        gen: D,
                        csi: N
                    };
                    return B;
                }

                function i(d) {
                    d = d || window.addthis_config;
                    return !d || (d.data_track_clickback !== false && d.data_track_linkback !== false);
                }

                function c(v, d) {
                    if (!d || (d.data_track_clickback !== false && d.data_track_linkback !== false)) {
                        if (l) {
                            return true;
                        }
                        if (_a.ver() >= 250) {
                            return (l = true);
                        }
                        v = (v || w.addthis_product || "").split(",");
                        for (var u = 0; u < v.length; u++) {
                            if (s[v[u].split("-").shift()]) {
                                return (l = true);
                            }
                        }
                    }
                    return false;
                }

                function h(d, u) {
                    d = d || _a.util.cuid();
                    return t + _a.util.hbtoa(d + Math.min(3, u || 0));
                }

                function j(u, v, d) {
                    d = d || _a.util.cuid();
                    return u.indexOf("#") > -1 ? u : u + "#" + h((v ? d : d.substr(0, 8) + _a.ad.gub()), (a.smd || {}).gen) + (v ? g + v : "");
                }

                function m(v) {
                    var u, y, A, B, z, d, x;
                    if (v.indexOf("#") > -1) {
                        z = v.split("#").slice(1).shift();
                        if (b(z)) {
                            d = z.substr(1).split(".");
                            x = (d.length) ? d.shift() : "";
                            y = (d.length) ? d.pop() : "";
                            if (x) {
                                x = _a.util.atohb(x);
                                u = x.substr(0, 16);
                                A = parseInt(x.substr(16), 10);
                                if (!isNaN(A)) {
                                    B = B || {};
                                    B.gen = A;
                                }
                            }
                            if (_a.util.ivc(u)) {
                                B = B || {};
                                B.xid = u;
                            }
                            if (y.search(/^[a-zA-Z0-9_]+$/) != -1) {
                                B = B || {};
                                B.rsc = y;
                            }
                        }
                    }
                    return B;
                }
                _a.extend(_a.track, {
                    cur: j,
                    dcu: m,
                    gcc: h,
                    cpf: t,
                    ctp: c,
                    eop: r,
                    ich: b,
                    ict: i
                });
            })(_a, _a.api, _a);
            (function(c, d, e) {
                var h, a = "hist",
                    i = 0,
                    f = new c.data.bloom.library(a, 3),
                    j = c.data.storage;

                function b(k) {
                    k = (k || _a.share.links.canonical || document.location.href).split("#").shift();
                    if (f.testAll(k)) {
                        return true;
                    } else {
                        return f.testAll(k + "/");
                    }
                }

                function g(l) {
                    if (_a.sub || !window.JSON) {
                        return;
                    }
                    l = (l || _a.share.links.canonical || document.location.href).split("#").shift();
                    var k = f.generateName();
                    if (!f.contains(k)) {
                        f.add(k);
                    }
                    if (!h) {
                        h = f.get(k);
                    }
                    if (h && !i && !h.test(l)) {
                        i = 1;
                        setTimeout(function() {
                            h.add(l);
                            h.save(k);
                        }, 5 * 1000);
                    }
                }
                if (!c.track) {
                    c.track = {};
                }
                c.track.hist = {
                    log: g,
                    seenBefore: b
                };
            })(_a, _a.api, _a);
            (function(g, h, l) {
                var q = {},
                    j = {},
                    b = 0,
                    d = new g.cookie.KV("rfs", 1),
                    f = null;

                function i(r) {
                    if (r == "t.co") {
                        return "twitter";
                    }
                    var s, t;
                    for (s in g.services.map) {
                        t = g.services.map[s];
                        if (t === "") {
                            t = s + ".com";
                        }
                        if (r.indexOf(t) != -1) {
                            return s;
                        }
                    }
                    return null;
                }

                function p(s) {
                    var t, v, u, r;
                    s = _duc(s);
                    s = s.toLowerCase();
                    s = s.replace(/[,;:\+\|]/g, " ");
                    s = s.replace(/[^a-z0-9. '\-]/g, "");
                    s = s.replace(/\s+/g, " ");
                    s = s.replace(/\s+$/g, "");
                    v = [];
                    u = s.split(" ");
                    for (r = 0; r < u.length; r++) {
                        t = u[r];
                        if (t.charAt(0) == "-") {
                            continue;
                        } else {
                            if (/'s$/.test(t)) {
                                v.push(t.substring(0, t.length - 2).replace(/[-']/g, "") + "'s");
                            } else {
                                v = v.concat(t.replace(/'/g, "").split("-"));
                            }
                        }
                    }
                    return v;
                }

                function c(s, r) {
                    return n(s === _1 ? true : s, r);
                }

                function n(u, t) {
                    var v = o(u),
                        x = u ? g.dr : (v.dr || g.dr),
                        r = (document.location || {}).href || "",
                        s = g.ad.clr(x),
                        y = {},
                        z, w, A;
                    if (b) {
                        g.log.debug("op=", v, "ref=" + x, "cla=" + s, "cache=" + f);
                    }
                    if (v.rsc) {
                        y.type = "social";
                        y.service = v.rsc;
                        y.click = true;
                        f = y;
                        return y;
                    }
                    if (f && !t) {
                        return f;
                    }
                    if (typeof(x) == "undefined" || x === "") {
                        y.type = "direct";
                        f = y;
                        return y;
                    }
                    z = g.util.host(x);
                    w = i(z);
                    if (b) {
                        g.log.debug("ref=" + x, "iss=" + g.ad.iss(x));
                    }
                    if (typeof(w) != "undefined" && w) {
                        if (b) {
                            g.log.debug("serviceCode", w);
                        }
                        y.type = "social";
                        y.service = w;
                    } else {
                        if (g.ad.iss(x)) {
                            y.type = "search";
                            y.domain = g.util.host(x);
                            A = g.ad.fst(x);
                            y.terms = p(A);
                        } else {
                            if (s & g.ad.ref.r_ondomain) {
                                y.type = "internal";
                                y.domain = document.location.hostname;
                            } else {
                                if (s & g.ad.ref.r_offdomain) {
                                    y.type = "referred";
                                    y.domain = g.util.host(x);
                                } else {
                                    y.type = "direct";
                                }
                            }
                        }
                    }
                    f = y;
                    return y;
                }

                function m() {
                    var r = d.get();
                    return r.count > 0;
                }

                function o(r) {
                    return r ? q : j || q || {};
                }

                function a(r) {
                    q = {};
                    _a.util.each(r, function(t, s) {
                        q[t] = s;
                    });
                    q.dr = g.dr;
                }

                function k(r) {
                    j = {};
                    if (!r.rsi && !r.rsc && !r.dr) {
                        return;
                    }
                    _a.util.each(r, function(t, s) {
                        j[t] = s;
                    });
                    if (b) {
                        g.log.debug("setting", j);
                    }
                    _a.util.each(j, function(t, s) {
                        d.add(t, s);
                    });
                    d.save();
                }

                function e(t, s) {
                    var r = s ? null : d.get();
                    if (b) {
                        g.log.debug("reset called; pageState=", t, " stored state=", r);
                    }
                    a(t);
                    if (!r) {
                        t.dr = g.dr;
                        k(t);
                        q = j;
                        if (b) {
                            g.log.debug("session state", j);
                        }
                    } else {
                        if (t.rsc) {
                            t.dr = g.dr;
                            k(t);
                            if (b) {
                                g.log.debug("formal referral", j);
                            }
                        } else {
                            if (!document.referrer) {
                                if (b) {
                                    g.log.debug("no referral - kill cookie, then start a new session");
                                }
                                d.reset();
                                t.dr = g.dr;
                                k(t);
                                q = j;
                                if (b) {
                                    g.log.debug("session state", j);
                                }
                            } else {
                                k(r);
                                if (b) {
                                    g.log.debug("referral - use stored state", j);
                                }
                            }
                        }
                    }
                }
                if (!g.track) {
                    g.track = {};
                }
                g.track.ts = {
                    get: c,
                    gst: p,
                    set: k,
                    reset: e
                };
            })(_a, _a.api, _a);
            (function() {
                var d = document,
                    a = _a,
                    _37d = 0,
                    cvt = [],
                    avt = null,
                    pix = "tev",
                    evu = "//web.archive.org/web/20200420105550/https://o.addthis.com/at/",
                    ssc = function(rsc) {
                        var _384 = _a.track.ts.get();
                        if (_384.type == "social") {
                            _a.cookie.ssc.update(_384.service);
                        } else {
                            if (rsc) {
                                _a.cookie.ssc.update(rsc);
                            }
                        }
                    },
                    _385 = {
                        ftho: 1,
                        aqe3: 1,
                        d99r: 1,
                        neud: 1,
                        "8elu": 1,
                        bqfn: 1
                    },
                    _386 = Math.random() < _atc.csmp,
                    _387 = true,
                    _388 = new RegExp(/\(?(\d{3})\)?[\- ]?(\d{3})[\- ]?(\d{4})/g),
                    _389 = new RegExp(/^((([a-z]|[0-9]|\-)+)\.)+([a-z])+$/ig),
                    qtp = [],
                    xtp = function() {
                        var p;
                        while (p = qtp.pop()) {
                            trk(p);
                        }
                    },
                    atf = null,
                    vpcs = [],
                    lvpc = null,
                    vpex = [],
                    pcs = [],
                    spc = null,
                    _393 = 0;

                function avpc(c) {
                    c = c.split("-").shift();
                    for (var i = 0; i < vpcs.length; i++) {
                        if (vpcs[i] == c) {
                            return;
                        }
                    }
                    msg("cmd=ttv&pco=" + c);
                    lvpc = c;
                    vpcs.push(c);
                }

                function apc(c) {
                    c = c.split("-").shift();
                    for (var i = 0; i < pcs.length; i++) {
                        if (pcs[i] == c) {
                            return;
                        }
                    }
                    pcs.push(c);
                }

                function addVisibleProduct(_398, pco, _39a) {
                    var id;
                    if (typeof _398 == "string" && _398 && _398.charAt(0) == "#") {
                        id = _398.substr(1);
                    }
                    if (id) {
                        _398 = document.getElementById(id);
                        if (!_398) {
                            setTimeout(function() {
                                addVisibleProduct("#" + id, pco, _39a);
                            }, 1000);
                            return;
                        }
                    }
                    if (_a.ivz(_398)) {
                        if (_39a) {
                            vpex.push(_39a);
                        }
                        avpc(pco);
                    } else {
                        var _39c, _39d = function() {
                            if (_a.ivz(_398)) {
                                if (_39a) {
                                    vpex.push(_39a);
                                }
                                avpc(pco);
                                _a.util.unlisten(window, "scroll", _39d);
                            } else {
                                if (_39c) {
                                    clearTimeout(_39c);
                                    _39c = _1;
                                }
                                _39c = setTimeout(_39d, 3000);
                            }
                        };
                        _a.util.listen(window, "scroll", _39d);
                    }
                }

                function get_atssh() {
                    var div = d.getElementById("_atssh");
                    if (!div) {
                        div = d.ce("div");
                        div.style.visibility = "hidden";
                        div.id = "_atssh";
                        a.opp(div.style);
                        d.body.insertBefore(div, d.body.firstChild);
                    }
                    return div;
                }

                function msg(s) {
                    if (!_a.bro.ie6 && !_a.bro.ie7 && atf && atf.contentWindow) {
                        atf.contentWindow.postMessage(s, "*");
                    }
                    return;
                }

                function ctf(url, _3a1) {
                    var ifr, r = Math.floor(Math.random() * 1000),
                        div = get_atssh();
                    if (!_3a1 && !atf && _atc._atf && !a.bro.ie6 && !a.bro.ie7) {
                        atf = _atc._atf;
                        if (a.bro.msi) {
                            atf.url = url;
                        }
                        return atf;
                    }
                    if (!a.bro.msi) {
                        ifr = d.ce("iframe");
                        ifr.id = "_atssh" + r;
                        ifr.title = "AddThis utility frame";
                    } else {
                        if (a.bro.ie6 && !url && d.location.protocol.indexOf("https") === 0) {
                            url = "javascript:''";
                        }
                        div.innerHTML = "<iframe id=\"_atssh" + r + "\" width=\"1\" height=\"1\" title=\"AddThis utility frame\" name=\"_atssh" + r + "\" " + (url ? "src=\"" + url + "\"" : "") + ">";
                        ifr = d.getElementById("_atssh" + r);
                    }
                    a.opp(ifr.style);
                    ifr.frameborder = ifr.style.border = 0;
                    ifr.style.top = ifr.style.left = 0;
                    return ifr;
                }

                function prod() {
                    if (document.getElementById("product")) {
                        return true;
                    }
                    if (typeof document.getElementsByClassName == "function" && (document.getElementsByClassName("product") || []).length > 0) {
                        return true;
                    }
                    if (document.getElementById("productDescription")) {
                        return true;
                    }
                    if (document.getElementById("page-product")) {
                        return true;
                    }
                    if (document.getElementById("vm_cart_products")) {
                        return true;
                    }
                    if (window.Virtuemart) {
                        return true;
                    }
                    var og = (a.ad.gog()),
                        _3a5;
                    _a.util.each(og, function(k, v) {
                        if (v == "type=product") {
                            _3a5 = 1;
                        }
                    });
                    if (_3a5) {
                        return true;
                    }
                }

                function jsl() {
                    var w = window;
                    return ((((w.jQuery || {}).fn || {}).jquery && 1) | ((w.Prototype || {}).Version && 2) | ((w.YUI || {}).version || (w.YAHOO || {}).VERSION && 4) | ((w.Ext || {}).version && 8) | ((w.dojo || {}).version && 16) | ((w._gaq || w._gat) && 32) | (w.google_ad_client && 64) | ((w.FB || w.fbAsyncInit) && 128) | (w.$BTB && 256) | (w.meebo && 512) | (w.gigya && 1024) | (w.SHARETHIS && 2048) | (w._qevents && 4096) | (w.twttr && 8192) | (w.postwidgetnamespace && 16384) | (w.a2a && 32768) | (w.SHRSB_Settings && 65536) | (w._sf_async_config && 131072) | (w.Shopify && 262144));
                }

                function onLinkClick(e) {
                    if (!e || !e.data || !e.data.pco || !e.data.url) {
                        return;
                    }
                    cvt.push(a.track.fcv("typ", "lnk"));
                    cvt.push(a.track.fcv("pco", e.data.pco));
                    cvt.push(a.track.fcv("pur", a.track.mgu(e.data.url, {
                        defrag: 1
                    })));
                    dirxmi(true);
                }

                function onMenuComment(e) {}

                function onMenuFollow(e) {
                    if (e && e.data && e.data.service && e.data.url) {
                        trk({
                            gen: a.ad.type.FOLLOW,
                            pix: "dest=" + e.data.service,
                            svc: e.data.service,
                            url: e.data.url
                        });
                    }
                }

                function onMenuShare(e) {
                    var uid = a.uid;
                    if (e && e.data && e.data.service) {
                        if (!_a.ssl && uid && _a.util.ivc(uid) && !_atc.xck && !_a.util.iooc(uid) && (e.data.service.indexOf("facebook") > -1 || e.data.service == "more" || e.data.service == "settings" || e.data.service == "link" || (_atc.ver >= 300 && e.data.service == "email"))) {
                            var img = new Image();
                            a.imgz.push(img);
                            img.src = "//web.archive.org/web/20200420105550/https://aidps.atdmt.com/AI/Api/v1/UserRest.svc/Provider/39CD8FF4-531A-4266-A340-45548C451F45/User/" + uid + "/gif";
                        }
                        trk({
                            gen: (e.data.service.indexOf("facebook") > -1 || e.data.service == "more" || e.data.service == "settings" || e.data.service == "link" || (_atc.ver >= 300 && e.data.service == "email")) ? a.ad.type.NOOP : a.ad.type.SHARE,
                            pix: "dest=" + e.data.service,
                            svc: e.data.service,
                            url: (e.data.url || null)
                        });
                        a.dcp = a.ad.type.SHARE;
                    }
                }
                var _3af, _3b0 = [];

                function onApiUsage(evt) {
                    if (Math.random() < 0.01) {
                        if (evt.data.call) {
                            _3b0.push(evt.data.call);
                        }
                        if (!_3af) {
                            _3af = setTimeout(function() {
                                img("ap", "3", "calls=" + _euc(_3b0.join(",")), {});
                            }, 10000);
                        }
                    }
                }

                function sendViewedProducts() {
                    if (vpcs.length && vpcs.length != _393) {
                        _393 = vpcs.length;
                        var t = {
                            vpc: lvpc
                        };
                        if (a.ab != "-") {
                            t.ab = a.ab;
                        }
                        img("plvp", "3", vpex.length ? vpex.join("&") : "", t);
                    }
                    setTimeout(sendViewedProducts, 100);
                }

                function onProductsGathered() {
                    if (Math.random() < _atc.plmp) {
                        sendViewedProducts();
                    }
                }

                function onMenuPop(evt) {
                    var t = {},
                        data = evt.data || {},
                        svc = data.svc,
                        pco = data.pco,
                        _3b8 = data.cmo,
                        _3b9 = data.crs,
                        _3ba = data.cso;
                    if (svc) {
                        t.sh = svc;
                    }
                    if (_3b8) {
                        t.cm = _3b8;
                    }
                    if (_3ba) {
                        t.cs = 1;
                    }
                    if (_3b9) {
                        t.cr = 1;
                    }
                    if (pco) {
                        t.spc = pco;
                    }
                    img("sh", "3", null, t);
                }

                function onWelcomeBarShow(evt) {
                    var t = {},
                        data = evt.data || {},
                        svc = data.svc,
                        pco = data.pco || "wmb-1.0";
                    if (data.showCount > 1) {
                        return;
                    }
                    t.sh = "wombat";
                    if (pco) {
                        t.spc = pco;
                    }
                    if (svc) {
                        t.sc = svc;
                    }
                    img("sh", "3", null, t);
                    apc(data.pco);
                }

                function trk(t, _3c1) {
                    var dr = a.dr,
                        rev = (a.rev || "");
                    if (!t) {
                        return;
                    }
                    t.xck = _atc.xck ? 1 : 0;
                    t.xxl = 1;
                    t.sid = a.track.ssid();
                    t.pub = a.pub();
                    t.ssl = a.ssl || 0;
                    t.du = a.tru(t.url || a.du || a.dl.href);
                    t.xtr = _3c1 !== _1 ? 0 : _atc.xtr;
                    if (a.dt) {
                        t.dt = a.dt;
                    }
                    if (a.cb) {
                        t.cb = a.cb;
                    }
                    if (a.kw) {
                        t.kw = a.kw;
                    }
                    t.lng = a.lng();
                    t.ver = _a.ver();
                    t.jsl = a.track.jsl();
                    t.prod = a.track.prod();
                    if (!a.upm && a.uid) {
                        t.uid = a.uid;
                    }
                    t.pc = t.spc || pcs.join(",");
                    if (vpcs) {
                        t.vpc = lvpc;
                    }
                    if (dr) {
                        t.dr = a.tru(dr);
                    }
                    if (a.dh) {
                        t.dh = a.dh;
                    }
                    if (rev) {
                        t.rev = rev;
                    }
                    if (a.xfr) {
                        if (a.upm) {
                            if (atf && atf.contentWindow) {
                                atf.contentWindow.postMessage(_50(t), "*");
                            }
                        } else {
                            var div = get_atssh(),
                                base = _atc.rsrcs.sh + (false ? "?t=" + new Date().getTime() : "");
                            if (atf) {
                                div.removeChild(div.firstChild);
                            }
                            atf = ctf();
                            atf.src = base + "#" + _50(t);
                            div.appendChild(atf);
                        }
                    } else {
                        qtp.push(t);
                    }
                }

                function img(i, c, x, obj, _3ca) {
                    if (!window.at_sub && !_atc.xtr) {
                        var t = obj || {};
                        t.evt = i;
                        if (x) {
                            t.ext = x;
                        }
                        avt = t;
                        if (_3ca === 1) {
                            xmi(true);
                        } else {
                            a.track.sxm(true, xmi);
                        }
                    }
                }

                function cev(k, v) {
                    cvt.push(a.track.fcv(k, v));
                    a.track.sxm(true, xmi);
                }

                function xmi(_3ce) {
                    var h = a.dl ? a.dl.hostname : "";
                    if (cvt.length > 0 || avt) {
                        a.track.sxm(false, xmi);
                        if (_atc.xtr) {
                            return;
                        }
                        var t = avt || {};
                        t.ce = cvt.join(",");
                        cvt = [];
                        avt = null;
                        trk(t);
                        if (_3ce) {
                            var i = d.ce("iframe");
                            i.id = "_atf";
                            _a.opp(i.style);
                            d.body.appendChild(i);
                            i = d.getElementById("_atf");
                        }
                    }
                }

                function dirxmi(_3d2) {
                    var a = _a,
                        i, lng = a.lng().split("-").shift(),
                        h = a.dl ? a.dl.hostname : "";
                    if (cvt.length > 0) {
                        if (_atc.xtr) {
                            return;
                        }
                        if (h.indexOf(".gov") > -1 || h.indexOf(".mil") > -1) {
                            _atc.xck = 1;
                        }
                        if (a.dt) {
                            cvt.push(a.track.fcv("pti", a.dt));
                        }
                        cvt.push(a.track.fcv("lng", lng));
                        if (a.cb) {
                            cvt.push(a.track.fcv("cb", a.cb));
                        }
                        var urp = pix + "-" + a.track.ran() + ".png?ev=" + a.track.sta() + "&ce=" + cvt.join(",") + (_atc.xck ? "&xck=1" : "") + (a.dr ? "&dr=" + _euc(a.track.mgu(a.dr, {
                                defrag: 1
                            })) : "") + (a.du ? "&PRE=" + _euc(a.track.mgu(a.du, {
                                defrag: 1
                            })) : ""),
                            url = evu + urp;
                        cvt = [];
                        a.track.lpx({
                            url: url,
                            close: _3d2
                        });
                    }
                }

                function onConversion(e) {
                    _a.log.debug(e);
                    trackConversion(e.data);
                }

                function trackConversion(_3da) {
                    var t = {},
                        ts = a.track.ts.get(false),
                        ref, ex = "",
                        _3df = {
                            sku: 1,
                            brand: 1,
                            model: 1,
                            id: 1,
                            value: 1,
                            label: 1,
                            category: 1
                        };
                    _a.util.each(_3df, function(k, v) {
                        ex += (_3da[k] ? "&" + k + "=" + _euc(_3da[k]) || "" : "");
                        t[k] = _3da[k];
                    });
                    ref = ts.type ? ts.type + (ts.type == "social" ? "&rsc=" + ts.service : "") : "";
                    if (!t.label) {
                        return;
                    }
                    img("pro", "3", (ref ? "ref=" + ref : "") + ex);
                }

                function trackSocial(typ, _3e3) {
                    var id = (_3e3 || {}).id || _a.uid,
                        _3e5 = (_3e3 || {}).service || "unk";
                    cev("typ", typ);
                    cev("pur", a.track.mgu(a.du, {
                        defrag: 1
                    }));
                    cev("sto", _3e5);
                }

                function onSocialConnect(_3e6) {
                    trackSocial("soc", _3e6);
                }

                function onCopy(e) {
                    var text = "",
                        _3e9 = "";
                    if (window.getSelection) {
                        _3e9 = window.getSelection() || "";
                        text = _a.trim(_3e9.toString()).replace(_388, " ").replace(/[\b]+/g, " ").split(" ");
                        if (text.length) {
                            if (_386 && _37d < 3) {
                                cev("cbc", text.length);
                            }
                            _37d++;
                            if (!_387) {
                                return;
                            }
                            var _3ea = [];
                            for (var i = 0; i < text.length; i++) {
                                if (text[i] && text[i].length <= 50 && text[i].indexOf("@") == -1 && text[i].indexOf("://") == -1 && (!(_389.test(text[i])))) {
                                    _3ea.push(text[i]);
                                }
                            }
                            if (_3ea.length && _3ea.length <= 5 && (!a.dcp || a.dcp < a.ad.type.COPY)) {
                                setTimeout(function() {
                                    trk({
                                        gen: a.ad.type.COPY,
                                        pix: "tt=" + _euc(_3ea.join(" "))
                                    });
                                    a.dcp = a.ad.type.COPY;
                                }, Math.random() * 10000);
                            }
                        }
                    }
                }
                _a.ed.addEventListener("addthis-internal.params.loaded", function() {
                    var tc = (w.addthis_config || {}).data_track_textcopy;
                    _387 = tc !== false && (_387 || ((!_a.sub && ((dl || {}).href || "").indexOf(".addthis.com") > -1) || _385[_a.mun(_a.pub())]) || (w.addthis_config || {}).data_track_textcopy || (window.addthis_product || "").indexOf("wpp") > -1 || (window.addthis_product || "").indexOf("blg") > -1);
                    try {
                        if (_386 || _387) {
                            if (a.bro.msi) {
                                document.body.attachEvent("oncopy", onCopy, true);
                            } else {
                                document.addEventListener("copy", onCopy, true);
                            }
                        }
                    } catch (e) {}
                });
                a.ed.addEventListener("addthis-internal.api", onApiUsage);
                a.ed.addEventListener("addthis-internal.compact", onMenuPop);
                a.ed.addEventListener("addthis-internal.bar.show", onWelcomeBarShow);
                a.ed.addEventListener("addthis-internal.link.click", onLinkClick);
                a.ed.addEventListener("addthis-internal.ready", onProductsGathered);
                a.ed.addEventListener("addthis-internal.conversion", onConversion);
                a.ed.addEventListener("addthis.bar.show", onWelcomeBarShow);
                a.ed.addEventListener("addthis.menu.share", onMenuShare);
                a.ed.addEventListener("addthis.menu.follow", onMenuFollow);
                a.ed.addEventListener("addthis.menu.comment", onMenuComment);
                if (!a.track) {
                    a.track = {};
                }
                a.util.extend(a.track, {
                    pcs: pcs,
                    apc: apc,
                    avpc: avpc,
                    avp: addVisibleProduct,
                    cev: cev,
                    ctf: ctf,
                    jsl: jsl,
                    prod: prod,
                    osc: onSocialConnect,
                    gtf: get_atssh,
                    qtp: function(p) {
                        qtp.push(p);
                    },
                    ssc: ssc,
                    stf: function(f) {
                        atf = f;
                    },
                    trk: trk,
                    trl: onLinkClick,
                    xtp: xtp,
                    msg: msg,
                    trc: trackConversion
                });
            })();
            _41(_a, {
                _rec: [],
                xfr: !_a.upm || !_a.bro.ffx,
                pmh: function(e) {
                    var data, r = _a._rec;
                    if (e.origin.slice(-12) == ".addthis.com") {
                        if (!e.data) {
                            return;
                        }
                        if (e.data.length) {
                            if (_a.unj && e.data.indexOf && e.data.indexOf("{") === 0) {
                                try {
                                    data = JSON.parse(e.data);
                                } catch (e) {
                                    data = _a.util.rfromKV(e.data);
                                }
                            } else {
                                data = _a.util.rfromKV(e.data);
                            }
                        } else {
                            data = e.data;
                        }
                        for (var n = 0; n < r.length; n++) {
                            r[n](data);
                        }
                    }
                }
            });
            _41(_a, {
                _tc: function(_3f2, _3f3, id, lng) {
                    var o = window.addthis_translations;
                    if (!o) {
                        _a._t._q = _a._t._q || [];
                        _a._t._q.push({
                            eng: _3f3,
                            id: id,
                            lng: lng
                        });
                        if (!_a._t._qw) {
                            var _3f7 = function() {
                                var _3f8 = _a._t._q;
                                if (window.addthis_translations) {
                                    for (var i = 0; i < _3f8.length; i++) {
                                        _3f2(_a._t(_3f8[i].eng, _3f8[i].id, _3f8[i].lng));
                                    }
                                } else {
                                    _a._t._qw = setTimeout(_3f7, 1000);
                                }
                            };
                            _a._t._qw = setTimeout(_3f7, 1000);
                        }
                    } else {
                        _3f2(_a._t(_3f3, id, lng));
                    }
                },
                _t: function(_3fa, id, lng) {
                    var o = window.addthis_translations;
                    lng = lng || _a.jlng();
                    if (lng == "en" || !o) {
                        return _3fa;
                    } else {
                        for (var q in o) {
                            for (var r in o[q][0]) {
                                if (o[q][0][r] === lng && o[q].length > id && o[q][id]) {
                                    return o[q][id];
                                }
                            }
                        }
                    }
                    return _3fa;
                },
                lng: function() {
                    return window.addthis_language || (window.addthis_config || {}).ui_language || (_a.bro.msi ? navigator.userLanguage : navigator.language) || "en";
                },
                jlng: function(lng) {
                    return (lng || _a.lng()).split("-").shift();
                },
                iwb: function(l) {
                    var wd = {
                        th: 1,
                        pl: 1,
                        sl: 1,
                        gl: 1,
                        hu: 1,
                        is: 1,
                        nb: 1,
                        se: 1,
                        su: 1,
                        sw: 1
                    };
                    return !!wd[l];
                },
                gfl: function(l) {
                    var map = {
                            ca: "es",
                            cs: "CZ",
                            cy: "GB",
                            da: "DK",
                            de: "DE",
                            eu: "ES",
                            ck: "US",
                            en: "US",
                            es: "LA",
                            fb: "FI",
                            gl: "ES",
                            ja: "JP",
                            ko: "KR",
                            nb: "NO",
                            nn: "NO",
                            sv: "SE",
                            ku: "TR",
                            zh: "CN",
                            "zh-tr": "CN",
                            "zh-hk": "HK",
                            "zh-tw": "TW",
                            fo: "FO",
                            fb: "LT",
                            af: "ZA",
                            sq: "AL",
                            hy: "AM",
                            be: "BY",
                            bn: "IN",
                            bs: "BA",
                            nl: "NL",
                            et: "EE",
                            fr: "FR",
                            ka: "GE",
                            el: "GR",
                            gu: "IN",
                            hi: "IN",
                            ga: "IE",
                            jv: "ID",
                            kn: "IN",
                            kk: "KZ",
                            la: "VA",
                            li: "NL",
                            ms: "MY",
                            mr: "IN",
                            ne: "NP",
                            pa: "IN",
                            pt: "PT",
                            rm: "CH",
                            sa: "IN",
                            sr: "RS",
                            sw: "KE",
                            tl: "PH",
                            ta: "IN",
                            pl: "PL",
                            tt: "RU",
                            te: "IN",
                            ml: "IN",
                            uk: "UA",
                            vi: "VN",
                            tr: "TR",
                            xh: "ZA",
                            zu: "ZA",
                            km: "KH",
                            tg: "TJ",
                            he: "IL",
                            ur: "PK",
                            fa: "IR",
                            yi: "DE",
                            gn: "PY",
                            qu: "PE",
                            ay: "BO",
                            se: "NO",
                            ps: "AF",
                            tl: "ST"
                        },
                        rv = map[l] || map[l.split("-").shift()];
                    if (rv) {
                        return l.split("-").shift() + "_" + rv;
                    } else {
                        return "en_US";
                    }
                },
                ivl: function(l) {
                    var lg = {
                        af: 1,
                        afr: "af",
                        ar: 1,
                        ara: "ar",
                        az: 1,
                        aze: "az",
                        be: 1,
                        bye: "be",
                        bg: 1,
                        bul: "bg",
                        bn: 1,
                        ben: "bn",
                        bs: 1,
                        bos: "bs",
                        ca: 1,
                        cat: "ca",
                        cs: 1,
                        ces: "cs",
                        cze: "cs",
                        cy: 1,
                        cym: "cy",
                        da: 1,
                        dan: "da",
                        de: 1,
                        deu: "de",
                        ger: "de",
                        el: 1,
                        gre: "el",
                        ell: "ell",
                        en: 1,
                        eo: 1,
                        es: 1,
                        esl: "es",
                        spa: "spa",
                        et: 1,
                        est: "et",
                        eu: 1,
                        fa: 1,
                        fas: "fa",
                        per: "fa",
                        fi: 1,
                        fin: "fi",
                        fo: 1,
                        fao: "fo",
                        fr: 1,
                        fra: "fr",
                        fre: "fr",
                        ga: 1,
                        gae: "ga",
                        gdh: "ga",
                        gl: 1,
                        glg: "gl",
                        gu: 1,
                        he: 1,
                        heb: "he",
                        hi: 1,
                        hin: "hin",
                        hr: 1,
                        ht: 1,
                        hy: 1,
                        cro: "hr",
                        hu: 1,
                        hun: "hu",
                        id: 1,
                        ind: "id",
                        is: 1,
                        ice: "is",
                        it: 1,
                        ita: "it",
                        iu: 1,
                        ike: "iu",
                        iku: "iu",
                        ja: 1,
                        jpn: "ja",
                        km: 1,
                        ko: 1,
                        kor: "ko",
                        ku: 1,
                        lb: 1,
                        ltz: "lb",
                        lt: 1,
                        lit: "lt",
                        lv: 1,
                        lav: "lv",
                        mk: 1,
                        mac: "mk",
                        mak: "mk",
                        ml: 1,
                        mn: 1,
                        ms: 1,
                        msa: "ms",
                        may: "ms",
                        nb: 1,
                        nl: 1,
                        nla: "nl",
                        dut: "nl",
                        no: 1,
                        nds: 1,
                        nn: 1,
                        nno: "no",
                        oc: 1,
                        oci: "oc",
                        pl: 1,
                        pol: "pl",
                        ps: 1,
                        pt: 1,
                        por: "pt",
                        ro: 1,
                        ron: "ro",
                        rum: "ro",
                        ru: 1,
                        rus: "ru",
                        sk: 1,
                        slk: "sk",
                        slo: "sk",
                        sl: 1,
                        slv: "sl",
                        sq: 1,
                        alb: "sq",
                        sr: 1,
                        se: 1,
                        si: 1,
                        ser: "sr",
                        su: 1,
                        sv: 1,
                        sve: "sv",
                        sw: 1,
                        swe: "sv",
                        ta: 1,
                        tam: "ta",
                        te: 1,
                        teg: "te",
                        th: 1,
                        tha: "th",
                        tl: 1,
                        tgl: "tl",
                        tn: 1,
                        tr: 1,
                        tur: "tr",
                        tpi: 1,
                        tt: 1,
                        uk: 1,
                        ukr: "uk",
                        ur: 1,
                        urd: "ur",
                        vi: 1,
                        vec: 1,
                        vie: "vi",
                        "zh-cn": 1,
                        "zh-hk": 1,
                        "chi-hk": "zh-hk",
                        "zho-hk": "zh-hk",
                        "zh-tr": 1,
                        "chi-tr": "zh-tr",
                        "zho-tr": "zh-tr",
                        "zh-tw": 1,
                        "chi-tw": "zh-tw",
                        "zho-tw": "zh-tw",
                        zh: 1,
                        chi: "zh",
                        zho: "zh"
                    };
                    if (lg[l]) {
                        return lg[l];
                    }
                    l = l.split("-").shift();
                    if (lg[l]) {
                        if (lg[l] === 1) {
                            return l;
                        } else {
                            return lg[l];
                        }
                    }
                    return 0;
                },
                ggl: function(l) {
                    var map = {
                        en: "en-US",
                        ar: "ar",
                        ca: "ca",
                        zh: "zh-CN",
                        hr: "hr",
                        cs: "cs",
                        da: "da",
                        nl: "nl",
                        et: "et",
                        fi: "fi",
                        fr: "fr",
                        de: "de",
                        el: "el",
                        he: "iw",
                        hi: "hi",
                        hu: "hu",
                        id: "id",
                        it: "it",
                        ja: "ja",
                        ko: "ko",
                        lv: "lv",
                        lt: "lt",
                        ms: "ms",
                        no: "no",
                        fa: "fa",
                        pl: "pl",
                        pt: "pt-BR",
                        ro: "ro",
                        ru: "ru",
                        sr: "sr",
                        sk: "sk",
                        sl: "sl",
                        es: "es",
                        sv: "sv",
                        th: "th",
                        tr: "tr",
                        uk: "uk",
                        vi: "vi"
                    };
                    return map[l] || null;
                },
                gvl: function(l) {
                    var rv = _a.ivl(l) || "en";
                    if (rv === 1) {
                        rv = l;
                    }
                    return rv;
                },
                ulg: function(_40c) {
                    if (!_40c || (_a.lng()).indexOf("en") === 0) {
                        return;
                    }
                    try {
                        var _40d = window.addthis_translations;
                        if (_40d) {
                            _40c(_40d);
                        } else {
                            setTimeout(function() {
                                _a.ulg(_40c);
                            }, 500);
                        }
                    } catch (e) {}
                },
                alg: function(al, f) {
                    var l = _a.gvl((al || _a.lng()).toLowerCase());
                    if (l.indexOf("en") !== 0 && (!_a.pll || f)) {
                        _a.pll = _a.ajs("static/r07/lang30/" + l + ".js");
                    }
                }
            });
            _41(_a, {
                trim: function(s, e) {
                    if (s && s.trim && typeof(s.trim) == "function") {
                        s = s.trim();
                    }
                    try {
                        s = s.replace(/^[\s\u3000]+/, "").replace(/[\s\u3000]+$/, "");
                    } catch (exc) {}
                    if (s && e) {
                        s = _euc(s);
                    }
                    return s || "";
                },
                trl: [],
                tru: function(u, k, _415) {
                    var rv = "",
                        _417 = 0,
                        _418 = -1;
                    if (_415 === _1) {
                        _415 = 300;
                    }
                    if (u) {
                        rv = u.substr(0, _415);
                        if (rv !== u) {
                            if ((_418 = rv.lastIndexOf("%")) >= rv.length - 4) {
                                rv = rv.substr(0, _418);
                            }
                            if (rv != u) {
                                for (var i in _a.trl) {
                                    if (_a.trl[i] == k) {
                                        _417 = 1;
                                    }
                                }
                                if (!_417) {
                                    _a.trl.push(k);
                                }
                            }
                        }
                    }
                    return rv;
                },
                opp: function(st) {
                    st.width = st.height = "1px";
                    st.position = "absolute";
                    st.zIndex = 100000;
                },
                jlr: {},
                ajs: function(name, _41c, _41d, id, el, _420) {
                    if (!_a.jlr[name] || _420) {
                        var o = d.ce("script"),
                            ssl = (window.location.protocol == "https:"),
                            _423 = "",
                            head = (el) ? el : d.gn("head")[0] || d.documentElement;
                        o.setAttribute("type", "text/javascript");
                        if (_41d) {
                            o.setAttribute("async", "true");
                        }
                        if (id) {
                            o.setAttribute("id", id);
                        }
                        if ((window.chrome && chrome.self) || (window.safari && safari.extension)) {
                            _423 = (ssl ? "https:" : "http:");
                            if (name.indexOf("//") === 0) {
                                name = _423 + name;
                            }
                        }
                        o.src = ((_41c || name.indexOf("//") === 0) ? "" : (_423 + _atr)) + name;
                        head.insertBefore(o, head.firstChild);
                        _a.jlr[name] = 1;
                        return o;
                    }
                    return 1;
                },
                jlo: function() {
                    try {
                        var a = _a,
                            al = a.lng(),
                            aig = function(src) {
                                var img = new Image();
                                _a.imgz.push(img);
                                img.src = src;
                            };
                        a.alg(al);
                        if (!a.pld) {
                            if (a.bro.ie6) {
                                aig(_atc.rsrcs.widgetpng);
                                aig(_atr + "static/t00/logo1414.gif");
                                aig(_atr + "static/t00/logo88.gif");
                                if (window.addthis_feed) {
                                    aig("static/r05/feed00.gif", 1);
                                }
                            }
                            if (a.pll && !window.addthis_translations) {
                                setTimeout(function() {
                                    a.pld = a.ajs(_atc.rsrcs.menujs);
                                }, 10);
                            } else {
                                a.pld = a.ajs(_atc.rsrcs.menujs);
                            }
                        }
                    } catch (e) {}
                },
                ao: function(elt, pane, iurl, _42d, _42e, _42f) {
                    _a.lad(["open", elt, pane, iurl, _42d, _42e, _42f]);
                    _a.jlo();
                    return false;
                },
                ac: function() {},
                as: function(s, cf, sh) {
                    _a.lad(["send", s, cf, sh]);
                    _a.jlo();
                }
            });
            (function(g, u, v) {
                var e = g.util.each,
                    y = g.util.map,
                    d;

                function h(C, B, A, F) {
                    var E = "Cwm fjordbank glyphs vext quiz",
                        D = C.getContext("2d");
                    D.font = B;
                    if (typeof(D.fillText) == "function") {
                        D.fillText(E, A || 2, F || 2);
                    } else {
                        if (typeof(D.fillRect) == "function") {
                            D.fillRect(100, 5, 30, 15);
                        }
                    }
                }

                function f() {
                    if (!window.HTMLCanvasElement) {
                        return 0;
                    }
                    try {
                        var D = "",
                            A = document.createElement("canvas"),
                            B = A.getContext("2d");
                        A.style.display = "none";
                        B.textBaseline = "top";
                        B.textBaseline = "alphabetic";
                        B.fillStyle = "#f60";
                        B.fillRect(125, 1, 62, 20);
                        B.fillStyle = "#069";
                        h(A, "11pt no-real-font-" + (Math.floor(Math.random * 1000)), 2, 15);
                        B.fillStyle = "rgba(102, 204, 0, 0.7)";
                        h(A, "18pt Arial", 4, 17);
                        try {
                            document.body.appendChild(A);
                        } catch (C) {}
                        D = A.toDataURL ? A.toDataURL() : "xxx";
                        try {
                            B.globalCompositeOperation = "screen";
                            D += (B.globalCompositeOperation === "screen") ? "gco" : "000";
                        } catch (C) {
                            D += "grr";
                        }
                        try {
                            B.clearRect(0, 0, 30, 30);
                            B.rect(0, 0, 10, 10);
                            B.rect(2, 2, 6, 6);
                            D += (B.isPointInPath(5, 5, "evenodd") === false) ? "ppn" : "ppy";
                        } catch (C) {
                            D += "prr";
                        }
                        try {
                            B.clearRect(0, 0, 30, 30);
                            B.textBaseline = "top";
                            B.font = "32px Arial";
                            B.fillText("\ud83d\ude03", 0, 0);
                            D += (B.getImageData(16, 16, 1, 1).data[0] !== 0) ? "emo" : "eno";
                        } catch (C) {
                            D += "irr";
                        }
                    } catch (C) {
                        return D + "1";
                    } finally {
                        try {
                            A.parentNode.removeChild(A);
                        } catch (C) {} finally {
                            return D;
                        }
                    }
                }

                function o() {
                    var D = false,
                        A = "",
                        F = null,
                        B = "",
                        C = "";
                    try {
                        B = "AcroPDF.PDF";
                        F = new ActiveXObject(B);
                    } catch (E) {}
                    if (!F) {
                        try {
                            B = "PDF.PdfCtrl";
                            F = new ActiveXObject(B);
                        } catch (E) {}
                    }
                    if (F) {
                        try {
                            D = true;
                            C = B;
                            A = F.GetVersions().split(",");
                            A = A[0].split("=");
                            A = parseFloat(A[1]);
                        } catch (E) {}
                    }
                    return {
                        isInstalled: D,
                        version: A,
                        name: C
                    };
                }

                function k() {
                    var D = false,
                        A = "",
                        F = null,
                        B = "",
                        C = "";
                    try {
                        B = "ShockwaveFlash.ShockwaveFlash";
                        F = new ActiveXObject(B);
                    } catch (E) {}
                    if (F) {
                        try {
                            D = true;
                            C = B;
                            A = F.GetVariable("$version").substring(4);
                            A = A.split(",");
                            A = parseFloat(A[0] + "." + A[1]);
                        } catch (E) {}
                    }
                    return {
                        isInstalled: D,
                        version: A,
                        name: C
                    };
                }

                function q() {
                    var D = false,
                        A = "",
                        F = null,
                        B = "",
                        C = "";
                    try {
                        B = "QuickTime.QuickTime";
                        F = new ActiveXObject(B);
                    } catch (E) {}
                    if (F) {
                        try {
                            D = true;
                            C = B;
                            A = F.QuickTimeVersion.toString(16);
                            A = A.substring(0, 1) + "." + A.substring(1, 3);
                            A = parseFloat(A);
                        } catch (E) {}
                    }
                    return {
                        isInstalled: D,
                        version: A,
                        name: C
                    };
                }

                function n() {
                    var E = false,
                        A = "",
                        F = ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"],
                        H = null,
                        B = "",
                        C = "";
                    for (var D = 0; D < F.length; D++) {
                        try {
                            H = new ActiveXObject(F[D]);
                        } catch (G) {
                            continue;
                        }
                        if (H) {
                            B = F[D];
                            break;
                        }
                    }
                    if (H) {
                        try {
                            E = true;
                            C = B;
                            A = H.GetVersionInfo();
                            A = parseFloat(A);
                        } catch (G) {}
                    }
                    return {
                        isInstalled: E,
                        version: A,
                        name: C
                    };
                }

                function b() {
                    var D = false,
                        A = "",
                        F = null,
                        B = "",
                        C = "";
                    try {
                        B = "WMPlayer.OCX";
                        F = new ActiveXObject(B);
                    } catch (E) {}
                    if (F) {
                        try {
                            D = true;
                            C = B;
                            A = parseFloat(F.versionInfo);
                        } catch (E) {}
                    }
                    return {
                        isInstalled: D,
                        version: A,
                        name: C
                    };
                }

                function s(A) {
                    if (!A) {
                        return "";
                    }
                    return ((A).isInstalled ? "i" : "n") + A.version + A.name;
                }

                function i() {
                    return [screen.height, screen.width];
                }

                function l() {
                    if (window.ActiveXObject) {
                        var A = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                        return y(A, function(B) {
                            try {
                                new ActiveXObject(B);
                                return B;
                            } catch (C) {
                                return null;
                            }
                        }).join(";");
                    } else {
                        return "";
                    }
                }

                function x() {
                    if (_a.bro.msi || _a.bro.ie11) {
                        return l();
                    } else {
                        return a();
                    }
                }

                function a() {
                    return y(navigator.plugins, function(B) {
                        var A = y(B, function(C) {
                            return [C.type, C.suffixes].join("~");
                        }).join(",");
                        return [B.name, B.description, A].join("::");
                    }, this).join(";");
                }

                function t() {
                    var C = "|",
                        K = "",
                        F = {},
                        D = [];
                    try {
                        if (window.navigator.plugins && window.navigator.plugins.length) {
                            for (var G = 0, E = window.navigator.plugins.length; G < E; G++) {
                                var B = window.navigator.plugins[G]["name"] || "",
                                    I = window.navigator.plugins[G]["version"] || "",
                                    A = window.navigator.plugins[G]["filename"] || "",
                                    J = window.navigator.plugins[G]["description"] || "";
                                if (!F[B]) {
                                    F[B] = 1;
                                    D.push(B + ";" + (I || A) + ";" + J);
                                }
                            }
                            K = D.join(C);
                        } else {
                            if (window.ActiveXObject) {
                                K = s(o()) + C + s(k()) + C + s(getJavaIE()) + C + s(q()) + C + s(n()) + C + s(b());
                            }
                        }
                    } catch (H) {}
                    return K;
                }

                function z() {
                    try {
                        return !!window.sessionStorage;
                    } catch (A) {
                        return true;
                    }
                }

                function r() {
                    return _a.uls;
                }

                function j() {
                    var A = document.createElement("canvas");
                    return !!(A.getContext && A.getContext("2d"));
                }

                function p(A) {
                    return (!!A) ? 1 : 0;
                }

                function m(A) {
                    var E = d || [],
                        C, G = "",
                        B, D;
                    if (!d) {
                        E.push(navigator.userAgent);
                        E.push(navigator.language || navigator.userLanguage);
                        E.push(screen.colorDepth);
                        B = i();
                        if (typeof B !== "undefined") {
                            E.push(i().join("x"));
                        } else {
                            E.push("000");
                        }
                        E.push(x());
                        E.push(new Date().getTimezoneOffset());
                        E.push(z());
                        E.push(r());
                        E.push(!!window.indexedDB);
                        E.push(!!window.WebGLRenderingContext);
                        E.push((navigator.battery ? "n" : "0") + (navigator.mozBattery ? "m" : "0"));
                        E.push(typeof _1);
                        E.push(typeof(window.openDatabase));
                        E.push(navigator.cpuClass);
                        E.push(navigator.platform);
                        E.push(navigator.doNotTrack);
                        E.push(f());
                        try {
                            D = document.ce("a");
                            E.push(!window.externalHost && "download" in D);
                            D = document.ce("audio");
                            E.push(p("loop" in D) + "" + p("preload" in D) + "" + p("webkitAudioContext" in window) + "" + p("AudioContext" in window));
                            E.push(p("crypto" in window && "getRandomValues" in window.crypto));
                            E.push(p((("ontouchstart" in window) || window.DocumentTouch && document instanceof DocumentTouch)));
                            E.push(p(("securityPolicy" in document || "SecurityPolicy" in document)));
                            E.push(p((typeof DataView !== "undefined" && "getFloat64" in DataView.prototype)));
                        } catch (F) {
                            console.log(F);
                            E.push("mtf");
                        }
                        d = E;
                    }
                    if (A) {
                        for (C = 0; C < E.length; C++) {
                            if (typeof(E[C]) == "boolean") {
                                E[C] = E[C] ? 1 : 0;
                            }
                            G += (G.length ? "&" : "") + "k" + C + "=" + (E[C] ? ((("" + E[C]).length < 10) ? E[C] : (_a.math.murmur32(E[C], 1))) : 0);
                        }
                        return G;
                    }
                    return E.join("###");
                }

                function c(A) {
                    if (A) {
                        return m(true);
                    }
                    return g.math.murmur32(m(), 31);
                }

                function w() {
                    var C = m(),
                        B = C.substr(0, Math.floor(C.length / 2)),
                        A = C.substr(Math.floor(C.length / 2));
                    return (g.math.murmur32(B, 31)) + "" + (g.math.murmur32(A, 31));
                }
                if (!g.ad) {
                    g.ad = {};
                }
                _a.extend(g.ad, {
                    gpl: t,
                    gce: f,
                    gfp: c,
                    glfp: w
                });
            })(_a, _a.api, _a);
            (function(e, g, f) {
                var c = e.mun,
                    d = e.ad.gpl(),
                    b = e.ad.gce();

                function h() {
                    var n = c(navigator.userAgent, 16),
                        j = ((new Date()).getTimezoneOffset()) + "" + navigator.javaEnabled() + (navigator.userLanguage || navigator.language),
                        l = w.screen.colorDepth + "" + w.screen.width + w.screen.height + w.screen.availWidth + w.screen.availHeight,
                        k = navigator.plugins,
                        o;
                    try {
                        o = k.length;
                        if (o > 0) {
                            for (var m = 0; m < Math.min(10, o); m++) {
                                if (m < 5) {
                                    j += k[m].name + k[m].description;
                                } else {
                                    l += k[m].name + k[m].description;
                                }
                            }
                        }
                    } catch (p) {}
                    return n.substr(0, 2) + c(j, 16).substr(0, 3) + c(l, 16).substr(0, 3);
                }

                function a() {
                    try {
                        var k = ((_a.math.murmur32(_a.uid, 1) % 10000) / 10000) <= _atc.stmp;
                        if (k) {
                            var j = 0,
                                i = 0,
                                m = 0;
                            try {
                                m = _euc(_a.ad.gfp(true));
                                j = _a.ad.gfp();
                                i = _a.ad.glfp();
                            } catch (l) {}
                            return "&fcu9s=" + j + "&fcu9l=" + i + ((m.length > 1000 && _a.bro.msi) ? "" : "&fcun=" + m);
                        }
                    } catch (l) {
                        return "fcun=1";
                    }
                }
                if (!e.ad) {
                    e.ad = {};
                }
                e.ad.gub = h;
                e.ad.gubr = a;
            })(_a, _a.api, _a);
            (function(b, B, l) {
                var L = document,
                    D = window,
                    F = 1,
                    N = ["cbea", "cbeab", "kkk", "zvys", "gvgf", "shpxf", "chfflyvcf", "pernzcvr", "svfgvat", "wvmm", "fcybbtr", "flovna"],
                    r = ["phz"],
                    H = N.length,
                    G = r.length,
                    t = {},
                    c = [],
                    m = 25,
                    C = /.html|.htm|.php|.jsp|.asp|.aspx|.pl|.cfm|.shtml|.cgi|.py/,
                    s = 15,
                    a = 10,
                    f = 5,
                    k = 5,
                    n = 0.333,
                    E, o = {},
                    u = {},
                    q = {
                        mr: 1,
                        a: 1,
                        able: 1,
                        about: 1,
                        above: 1,
                        abst: 1,
                        accordance: 1,
                        according: 1,
                        accordingly: 1,
                        across: 1,
                        act: 1,
                        actually: 1,
                        added: 1,
                        adj: 1,
                        adopted: 1,
                        affected: 1,
                        affecting: 1,
                        affects: 1,
                        after: 1,
                        afterwards: 1,
                        again: 1,
                        against: 1,
                        ah: 1,
                        all: 1,
                        almost: 1,
                        alone: 1,
                        along: 1,
                        already: 1,
                        also: 1,
                        although: 1,
                        always: 1,
                        am: 1,
                        among: 1,
                        amongst: 1,
                        an: 1,
                        and: 1,
                        announce: 1,
                        another: 1,
                        any: 1,
                        anybody: 1,
                        anyhow: 1,
                        anymore: 1,
                        anyone: 1,
                        anything: 1,
                        anyway: 1,
                        anyways: 1,
                        anywhere: 1,
                        apparently: 1,
                        approximately: 1,
                        are: 1,
                        aren: 1,
                        arent: 1,
                        arise: 1,
                        around: 1,
                        as: 1,
                        aside: 1,
                        ask: 1,
                        asking: 1,
                        at: 1,
                        auth: 1,
                        available: 1,
                        away: 1,
                        awfully: 1,
                        b: 1,
                        back: 1,
                        be: 1,
                        became: 1,
                        because: 1,
                        become: 1,
                        becomes: 1,
                        becoming: 1,
                        been: 1,
                        before: 1,
                        beforehand: 1,
                        begin: 1,
                        beginning: 1,
                        beginnings: 1,
                        begins: 1,
                        behind: 1,
                        being: 1,
                        believe: 1,
                        below: 1,
                        beside: 1,
                        besides: 1,
                        between: 1,
                        beyond: 1,
                        biol: 1,
                        both: 1,
                        brief: 1,
                        briefly: 1,
                        but: 1,
                        by: 1,
                        c: 1,
                        ca: 1,
                        came: 1,
                        can: 1,
                        cannot: 1,
                        "can't": 1,
                        cause: 1,
                        causes: 1,
                        certain: 1,
                        certainly: 1,
                        co: 1,
                        com: 1,
                        come: 1,
                        comes: 1,
                        contain: 1,
                        containing: 1,
                        contains: 1,
                        could: 1,
                        couldnt: 1,
                        d: 1,
                        date: 1,
                        did: 1,
                        "didn't": 1,
                        different: 1,
                        "do": 1,
                        does: 1,
                        "doesn't": 1,
                        doing: 1,
                        done: 1,
                        "don't": 1,
                        down: 1,
                        downwards: 1,
                        due: 1,
                        during: 1,
                        e: 1,
                        each: 1,
                        ed: 1,
                        edu: 1,
                        effect: 1,
                        eg: 1,
                        eight: 1,
                        eighty: 1,
                        either: 1,
                        "else": 1,
                        elsewhere: 1,
                        end: 1,
                        ending: 1,
                        enough: 1,
                        especially: 1,
                        et: 1,
                        "et-al": 1,
                        etc: 1,
                        even: 1,
                        ever: 1,
                        every: 1,
                        everybody: 1,
                        everyone: 1,
                        everything: 1,
                        everywhere: 1,
                        ex: 1,
                        except: 1,
                        f: 1,
                        far: 1,
                        few: 1,
                        ff: 1,
                        fifth: 1,
                        first: 1,
                        five: 1,
                        fix: 1,
                        followed: 1,
                        following: 1,
                        follows: 1,
                        "for": 1,
                        former: 1,
                        formerly: 1,
                        forth: 1,
                        found: 1,
                        four: 1,
                        from: 1,
                        further: 1,
                        furthermore: 1,
                        g: 1,
                        gave: 1,
                        get: 1,
                        gets: 1,
                        getting: 1,
                        give: 1,
                        given: 1,
                        gives: 1,
                        giving: 1,
                        go: 1,
                        goes: 1,
                        gone: 1,
                        got: 1,
                        gotten: 1,
                        h: 1,
                        had: 1,
                        happens: 1,
                        hardly: 1,
                        has: 1,
                        "hasn't": 1,
                        have: 1,
                        "haven't": 1,
                        having: 1,
                        he: 1,
                        hed: 1,
                        hence: 1,
                        her: 1,
                        here: 1,
                        hereafter: 1,
                        hereby: 1,
                        herein: 1,
                        heres: 1,
                        hereupon: 1,
                        hers: 1,
                        herself: 1,
                        hes: 1,
                        hi: 1,
                        hid: 1,
                        him: 1,
                        himself: 1,
                        his: 1,
                        hither: 1,
                        home: 1,
                        how: 1,
                        howbeit: 1,
                        however: 1,
                        hundred: 1,
                        i: 1,
                        id: 1,
                        ie: 1,
                        "if": 1,
                        "i'll": 1,
                        im: 1,
                        immediate: 1,
                        immediately: 1,
                        importance: 1,
                        important: 1,
                        "in": 1,
                        inc: 1,
                        indeed: 1,
                        index: 1,
                        information: 1,
                        instead: 1,
                        into: 1,
                        invention: 1,
                        inward: 1,
                        is: 1,
                        "isn't": 1,
                        it: 1,
                        itd: 1,
                        "it'll": 1,
                        its: 1,
                        itself: 1,
                        "i've": 1,
                        j: 1,
                        just: 1,
                        k: 1,
                        keep: 1,
                        keeps: 1,
                        kept: 1,
                        keys: 1,
                        kg: 1,
                        km: 1,
                        know: 1,
                        known: 1,
                        knows: 1,
                        l: 1,
                        largely: 1,
                        last: 1,
                        lately: 1,
                        later: 1,
                        latter: 1,
                        latterly: 1,
                        least: 1,
                        less: 1,
                        lest: 1,
                        let: 1,
                        lets: 1,
                        like: 1,
                        liked: 1,
                        likely: 1,
                        line: 1,
                        little: 1,
                        "'ll": 1,
                        look: 1,
                        looking: 1,
                        looks: 1,
                        ltd: 1,
                        m: 1,
                        made: 1,
                        mainly: 1,
                        make: 1,
                        makes: 1,
                        many: 1,
                        may: 1,
                        maybe: 1,
                        me: 1,
                        mean: 1,
                        means: 1,
                        meantime: 1,
                        meanwhile: 1,
                        merely: 1,
                        mg: 1,
                        might: 1,
                        million: 1,
                        miss: 1,
                        ml: 1,
                        more: 1,
                        moreover: 1,
                        most: 1,
                        mostly: 1,
                        mr: 1,
                        mrs: 1,
                        much: 1,
                        mug: 1,
                        must: 1,
                        my: 1,
                        myself: 1,
                        n: 1,
                        na: 1,
                        name: 1,
                        namely: 1,
                        nay: 1,
                        nd: 1,
                        near: 1,
                        nearly: 1,
                        necessarily: 1,
                        necessary: 1,
                        need: 1,
                        needs: 1,
                        neither: 1,
                        never: 1,
                        nevertheless: 1,
                        "new": 1,
                        next: 1,
                        nine: 1,
                        ninety: 1,
                        no: 1,
                        nobody: 1,
                        non: 1,
                        none: 1,
                        nonetheless: 1,
                        noone: 1,
                        nor: 1,
                        normally: 1,
                        nos: 1,
                        not: 1,
                        noted: 1,
                        nothing: 1,
                        now: 1,
                        nowhere: 1,
                        o: 1,
                        obtain: 1,
                        obtained: 1,
                        obviously: 1,
                        of: 1,
                        off: 1,
                        often: 1,
                        oh: 1,
                        ok: 1,
                        okay: 1,
                        old: 1,
                        omitted: 1,
                        on: 1,
                        once: 1,
                        one: 1,
                        ones: 1,
                        only: 1,
                        onto: 1,
                        or: 1,
                        ord: 1,
                        other: 1,
                        others: 1,
                        otherwise: 1,
                        ought: 1,
                        our: 1,
                        ours: 1,
                        ourselves: 1,
                        out: 1,
                        outside: 1,
                        over: 1,
                        overall: 1,
                        owing: 1,
                        own: 1,
                        p: 1,
                        page: 1,
                        pages: 1,
                        part: 1,
                        particular: 1,
                        particularly: 1,
                        past: 1,
                        per: 1,
                        perhaps: 1,
                        placed: 1,
                        please: 1,
                        plus: 1,
                        poorly: 1,
                        possible: 1,
                        possibly: 1,
                        potentially: 1,
                        pp: 1,
                        predominantly: 1,
                        present: 1,
                        previously: 1,
                        primarily: 1,
                        probably: 1,
                        promptly: 1,
                        proud: 1,
                        provides: 1,
                        put: 1,
                        q: 1,
                        que: 1,
                        quickly: 1,
                        quite: 1,
                        qv: 1,
                        r: 1,
                        ran: 1,
                        rather: 1,
                        rd: 1,
                        re: 1,
                        readily: 1,
                        really: 1,
                        recent: 1,
                        recently: 1,
                        ref: 1,
                        refs: 1,
                        regarding: 1,
                        regardless: 1,
                        regards: 1,
                        related: 1,
                        relatively: 1,
                        research: 1,
                        respectively: 1,
                        resulted: 1,
                        resulting: 1,
                        results: 1,
                        right: 1,
                        run: 1,
                        s: 1,
                        said: 1,
                        same: 1,
                        saw: 1,
                        say: 1,
                        saying: 1,
                        says: 1,
                        sec: 1,
                        section: 1,
                        see: 1,
                        seeing: 1,
                        seem: 1,
                        seemed: 1,
                        seeming: 1,
                        seems: 1,
                        seen: 1,
                        self: 1,
                        selves: 1,
                        sent: 1,
                        seven: 1,
                        several: 1,
                        shall: 1,
                        she: 1,
                        shed: 1,
                        "she'll": 1,
                        shes: 1,
                        should: 1,
                        "shouldn't": 1,
                        show: 1,
                        showed: 1,
                        shown: 1,
                        showns: 1,
                        shows: 1,
                        significant: 1,
                        significantly: 1,
                        similar: 1,
                        similarly: 1,
                        since: 1,
                        six: 1,
                        slightly: 1,
                        so: 1,
                        some: 1,
                        somebody: 1,
                        somehow: 1,
                        someone: 1,
                        somethan: 1,
                        something: 1,
                        sometime: 1,
                        sometimes: 1,
                        somewhat: 1,
                        somewhere: 1,
                        soon: 1,
                        sorry: 1,
                        specifically: 1,
                        specified: 1,
                        specify: 1,
                        specifying: 1,
                        state: 1,
                        states: 1,
                        still: 1,
                        stop: 1,
                        strongly: 1,
                        sub: 1,
                        substantially: 1,
                        successfully: 1,
                        such: 1,
                        sufficiently: 1,
                        suggest: 1,
                        sup: 1,
                        sure: 1,
                        t: 1,
                        take: 1,
                        taken: 1,
                        taking: 1,
                        tell: 1,
                        tends: 1,
                        th: 1,
                        than: 1,
                        thank: 1,
                        thanks: 1,
                        thanx: 1,
                        that: 1,
                        "that'll": 1,
                        thats: 1,
                        "that've": 1,
                        the: 1,
                        their: 1,
                        theirs: 1,
                        them: 1,
                        themselves: 1,
                        then: 1,
                        thence: 1,
                        there: 1,
                        thereafter: 1,
                        thereby: 1,
                        thered: 1,
                        therefore: 1,
                        therein: 1,
                        "there'll": 1,
                        thereof: 1,
                        therere: 1,
                        theres: 1,
                        thereto: 1,
                        thereupon: 1,
                        "there've": 1,
                        these: 1,
                        they: 1,
                        theyd: 1,
                        "they'll": 1,
                        theyre: 1,
                        "they've": 1,
                        think: 1,
                        "this": 1,
                        those: 1,
                        thou: 1,
                        though: 1,
                        thoughh: 1,
                        thousand: 1,
                        throug: 1,
                        through: 1,
                        throughout: 1,
                        thru: 1,
                        thus: 1,
                        til: 1,
                        tip: 1,
                        to: 1,
                        together: 1,
                        too: 1,
                        took: 1,
                        toward: 1,
                        towards: 1,
                        tried: 1,
                        tries: 1,
                        truly: 1,
                        "try": 1,
                        trying: 1,
                        ts: 1,
                        twice: 1,
                        two: 1,
                        u: 1,
                        un: 1,
                        under: 1,
                        unfortunately: 1,
                        unless: 1,
                        unlike: 1,
                        unlikely: 1,
                        until: 1,
                        unto: 1,
                        up: 1,
                        upon: 1,
                        ups: 1,
                        us: 1,
                        use: 1,
                        used: 1,
                        useful: 1,
                        usefully: 1,
                        usefulness: 1,
                        uses: 1,
                        using: 1,
                        usually: 1,
                        v: 1,
                        value: 1,
                        various: 1,
                        "'ve": 1,
                        very: 1,
                        via: 1,
                        viz: 1,
                        vol: 1,
                        vols: 1,
                        vs: 1,
                        w: 1,
                        want: 1,
                        wants: 1,
                        was: 1,
                        "wasn't": 1,
                        way: 1,
                        we: 1,
                        wed: 1,
                        welcome: 1,
                        "we'll": 1,
                        went: 1,
                        were: 1,
                        "weren't": 1,
                        "we've": 1,
                        what: 1,
                        whatever: 1,
                        "what'll": 1,
                        whats: 1,
                        when: 1,
                        whence: 1,
                        whenever: 1,
                        where: 1,
                        whereafter: 1,
                        whereas: 1,
                        whereby: 1,
                        wherein: 1,
                        wheres: 1,
                        whereupon: 1,
                        wherever: 1,
                        whether: 1,
                        which: 1,
                        "while": 1,
                        whim: 1,
                        whither: 1,
                        who: 1,
                        whod: 1,
                        whoever: 1,
                        whole: 1,
                        "who'll": 1,
                        whom: 1,
                        whomever: 1,
                        whos: 1,
                        whose: 1,
                        why: 1,
                        widely: 1,
                        willing: 1,
                        wish: 1,
                        "with": 1,
                        within: 1,
                        without: 1,
                        "won't": 1,
                        words: 1,
                        world: 1,
                        would: 1,
                        "wouldn't": 1,
                        www: 1,
                        x: 1,
                        y: 1,
                        yes: 1,
                        yet: 1,
                        you: 1,
                        youd: 1,
                        "you'll": 1,
                        your: 1,
                        youre: 1,
                        yours: 1,
                        yourself: 1,
                        yourselves: 1
                    };

                function v(d) {
                    return d.replace(/[a-zA-Z]/g, function(i) {
                        return String.fromCharCode((i <= "Z" ? 90 : 122) >= (i = i.charCodeAt(0) + 13) ? i : i - 26);
                    });
                }
                while (H--) {
                    u[v(N[H])] = 1;
                }
                while (G--) {
                    o[v(r[G])] = 1;
                }

                function A(d) {
                    var i = 0;
                    if (!d || typeof(d) != "string") {
                        return i;
                    }
                    d = ((d || "").toLowerCase() + "").replace(/ /g, "");
                    if (d == "mature" || d == "adult" || d == "rta-5042-1996-1400-1577-rta") {
                        i |= F;
                    }
                    return i;
                }

                function e(w, d) {
                    var P = 0,
                        j, O;
                    if (!w || typeof(w) != "string") {
                        return P;
                    }
                    w = ((w || "").toLowerCase() + "").replace(/[^a-zA-Z]/g, " ").split(" ");
                    for (j = 0, O = w.length; j < O; j++) {
                        if (u[w[j]] || (!d && o[w[j]])) {
                            P |= F;
                            return P;
                        }
                    }
                    return P;
                }

                function h() {
                    y();
                    var P = (D.addthis_title || L.title),
                        i = e(P),
                        w = (E || "").length,
                        d, R, Q, O;
                    i |= e(L.location.hostname, true);
                    p(P, a, false);
                    x("h1", f);
                    x("p", n, 150, 250);
                    if (E && w) {
                        while (w--) {
                            d = E[w] || {};
                            R = (d.name || (d.getAttribute ? d.getAttribute("property") : "") || "").toLowerCase();
                            Q = d.content;
                            if (R == "description" || R == "keywords") {
                                i |= e(Q);
                                if (R == "description") {
                                    p(Q, s, false);
                                }
                            }
                            if (R == "rating") {
                                i |= A(Q);
                            }
                            if (R == "keywords" && Q && Q.length) {
                                K(Q);
                                p(Q, s, true);
                            }
                        }
                    }
                    return i;
                }

                function x(w, P, i, d) {
                    if (!w) {
                        return;
                    }
                    var j = b.util.qsa(w),
                        O;
                    _a.util.each(j, function(Q, R) {
                        if (d && Q > d) {
                            return false;
                        }
                        O = b.util.gettxt(R);
                        if (!i || O.length > i) {
                            p(O, P, false);
                        }
                    });
                }

                function p(Q, P, w) {
                    var O = (Q || ""),
                        d, j;
                    if (!O) {
                        return;
                    }
                    O = w ? O.split(/[,\n\r]+/) : O.split(/[ ,\n\r]+/);
                    for (j = 0; j < O.length; j++) {
                        d = _a.trim(O[j].toLowerCase()).replace(/['"]/, "").replace(/['",.?!]+$/, "");
                        if (!d) {
                            continue;
                        }
                        if (d.length < 3) {
                            continue;
                        }
                        if (!q[d]) {
                            t[d] = (t[d] || 0) + (P || 1);
                        }
                    }
                }

                function K(P) {
                    var O = P.split(","),
                        j, w, d = 200;
                    for (w = 0; w < O.length; w++) {
                        j = _a.trim(O[w]);
                        if ((d -= (j.length + 1)) > 0) {
                            c.push(j);
                        } else {
                            break;
                        }
                    }
                }

                function I() {
                    y();
                    var O = [],
                        i = (E || "").length,
                        d, Q, P, w;
                    if (E && i) {
                        while (i--) {
                            d = E[i] || {};
                            Q = ((d.getAttribute ? d.getAttribute("property") : "") || d.name || "").toLowerCase();
                            P = d.content;
                            if (Q.indexOf("og:") === 0) {
                                w = Q.split(":").pop();
                                if (O.length < 7 || w == "type") {
                                    O.push(w == "type" ? w + "=" + P : w);
                                }
                            }
                        }
                    }
                    return O;
                }

                function y() {
                    if (!E) {
                        E = L.all && typeof(L.all.tags) == "function" ? L.all.tags("META") : L.getElementsByTagName ? L.getElementsByTagName("META") : new Array();
                        _a.meta = E;
                    }
                }

                function z() {
                    y();
                    var w = {},
                        j, d = "";
                    if (!E || E.length == 0) {
                        return w;
                    }
                    for (j = 0; j < E.length; j++) {
                        d = E[j].getAttribute("property") || "";
                        if (d.search(/^og:/i) != -1) {
                            w[d.replace("og:", "")] = E[j].content;
                        }
                    }
                    return _50(w);
                }

                function J() {
                    return c.join(",");
                }

                function M() {
                    var d = (new Date()).getTime(),
                        i, j = [];
                    _a.util.each(t, function(O, w) {
                        j.push({
                            name: "1|" + O,
                            weight: Math.round(w * 100) / 100
                        });
                    });
                    j.sort(function(O, w) {
                        if (O.weight > w.weight) {
                            return -1;
                        }
                        return 1;
                    });
                    j = j.slice(0, m);
                    i = (new Date()).getTime();
                    b.log.debug("gcv", j, "te=" + (i - d) + " ms");
                    return j;
                }

                function g() {
                    var d = document.charset || document.characterSet || document.inputEncoding || document.defaultCharset;
                    if (!d) {
                        y();
                        for (H = 0; H < E.length; H++) {
                            d = E[H].getAttribute("charset");
                            if (d) {
                                break;
                            }
                        }
                    }
                    return (!d || (d.length > 14) ? "" : d);
                }
                if (!b.ad) {
                    b.ad = {};
                }
                _a.extend(b.ad, {
                    cla: h,
                    gog: I,
                    og: z,
                    kw: J,
                    gcv: M,
                    gch: g
                });
            })(_a, _a.api, _a);
            (function(c, f, i) {
                var g = 0,
                    b = 1,
                    a = 2,
                    h = 4;

                function d(m, l, k) {
                    k = (k === _1 || k) || (window.location.protocol == "https:");
                    l = _a.util.host(l === _1 ? window.location.href : l);
                    var o = g;
                    if (m) {
                        var n = _a.util.host(m);
                        if (l == n) {
                            o |= a;
                        } else {
                            o |= h;
                        }
                    }
                    if (!k && j(m)) {
                        o |= b;
                    }
                    return o;
                }

                function j(k) {
                    var p = ".com/",
                        n = ".org/",
                        l = (k || "").toLowerCase(),
                        m = 0;
                    if (l && l.match(/ws\/results\/(web|images|video|news)/)) {
                        m = 1;
                    } else {
                        if (false && l && l.match(/\/relevance\/search\//)) {
                            m = 1;
                        } else {
                            if (l && l.indexOf("addthis" == -1) && (l.match(/google.*\/(search|url|aclk|m\?)/) || l.indexOf("/pagead/aclk?") > -1 || l.indexOf(p + "url") > -1 || l.indexOf(p + "l.php") > -1 || l.indexOf("/search?") > -1 || l.indexOf("/search/?") > -1 || l.indexOf("search?") > -1 || l.indexOf("yandex.ru/clck/jsredir?") > -1 || l.indexOf(p + "search") > -1 || l.indexOf(n + "search") > -1 || l.indexOf("/search.html?") > -1 || l.indexOf("search/results.") > -1 || l.indexOf(p + "s?bs") > -1 || l.indexOf(p + "s?wd") > -1 || l.indexOf(p + "mb?search") > -1 || l.indexOf(p + "mvc/search") > -1 || l.indexOf(p + "web") > -1 || l.match(/aol.*\/aol/) || l.indexOf("hotbot" + p) > -1)) {
                                if (e(k) != false) {
                                    m = 1;
                                }
                            }
                        }
                    }
                    if (m) {
                        return true;
                    } else {
                        return false;
                    }
                }

                function e(k) {
                    var m = k.split("?").pop().toLowerCase().split("&"),
                        l, n = /^(?:q|search|bs|wd|p|kw|keyword|query|qry|querytext|text|searchcriteria|searchstring|searchtext|sp_q)=(.*)/i;
                    for (l = 0; l < m.length; l++) {
                        if (matches = n.exec(m[l])) {
                            return matches[1];
                        }
                    }
                    return false;
                }
                if (!c.ad) {
                    c.ad = {};
                }
                c.ad.clr = d;
                c.ad.iss = j;
                c.ad.fst = e;
                c.ad.ref = {
                    r_direct: g,
                    r_search: b,
                    r_ondomain: a,
                    r_offdomain: h
                };
            })(_a, _a.api, _a);
            (function(d, e, g) {
                var i = d,
                    f = [],
                    h = !_a.upm || (_a.dat || {}).rdy;
                if (!i.du) {
                    i.du = document.location.href;
                }
                if (!i.dh) {
                    i.dh = document.location.hostname;
                }
                if (!i.dr) {
                    i.dr = document.referrer;
                }

                function c(a) {
                    if (h) {
                        setTimeout(function() {
                            _a.track.trk(a, true);
                        }, (!_a.upm ? _a.wait * 2 : 0));
                    } else {
                        f.push(a);
                    }
                }

                function b(l) {
                    var n = {
                            pco: "cnv-100"
                        },
                        a = {
                            pxid: 1,
                            ev: 1
                        };
                    if (l) {
                        for (var m in l) {
                            if (a[m]) {
                                n[m] = l[m];
                            }
                        }
                    }
                    c({
                        gen: 2000,
                        fcp: 1,
                        pix: i.util.toKV(n)
                    });
                }

                function j(a) {
                    c({
                        pixu: a
                    });
                }
                if (!d.ad) {
                    d.ad = {};
                }
                _a.extend(d.ad, {
                    event: b,
                    getPixels: j
                });
                _a.ed.addEventListener("addthis-internal.data.rdy", function() {
                    h = 1;
                    for (var a = 0; a < f.length; a++) {
                        c(f[a]);
                    }
                });
            })(_a, _a.api, _a);
            (function(g, i, j) {
                var e, n = window,
                    h = n.addthis_config || {},
                    k = document,
                    p = g.util,
                    c = g.event.EventDispatcher,
                    m = 25,
                    f = [];

                function o(s) {
                    var d, r;
                    if (s && s instanceof a) {
                        f.push(s);
                    }
                    for (d = 0; d < f.length;) {
                        r = f[d];
                        if (r && r.test()) {
                            f.splice(d, 1);
                            a.fire("load", r, {
                                resource: r
                            });
                        } else {
                            d++;
                        }
                    }
                    if (f.length) {
                        setTimeout(o, m);
                    }
                }

                function b() {
                    var d = this,
                        r = new c(d);
                    r.decorate(r).decorate(d);
                    this.resources = (arguments.length && arguments[0] instanceof Array) ? arguments[0] : (Array.prototype.slice.call(arguments) || []);
                    this.waiting = this.resources.length;
                    this.loading = false;
                    if (this.resources && !(this.resources[0] instanceof a)) {
                        this.resources = l(this.resources);
                    }
                    this.checkload = function() {
                        this.waiting--;
                        if (this.waiting == 0) {
                            r.fire("load", this.resources, {
                                resources: this.resources
                            });
                        }
                    };
                    this.add = function(s) {
                        if (s) {
                            this.waiting++;
                            this.resources.push(s);
                        }
                    };
                    this.load = function() {
                        if (!this.loading) {
                            for (var s = 0; s < this.resources.length; s++) {
                                this.resources[s].addEventListener("load", _a.util.bind(this.checkload, d));
                                this.resources[s].load();
                            }
                            this.loading = true;
                        }
                    };
                }

                function a(u, r, t) {
                    var d = this,
                        s = new c(d);
                    s.decorate(s).decorate(d);
                    this.ready = false;
                    this.loading = false;
                    this.id = u;
                    this.url = r;
                    if (typeof(t) === "function") {
                        this.test = t;
                    } else {
                        if (typeof(t) === "undefined") {
                            this.test = function() {
                                return true;
                            };
                        } else {
                            this.test = function() {
                                return (!!_window[t]);
                            };
                        }
                    }
                    a.addEventListener("load", function(v) {
                        var w = v.data ? v.data.resource : null;
                        if (!w || w.id !== d.id) {
                            return;
                        }
                        if (d.loading) {
                            d.loading = false;
                            d.ready = true;
                            s.fire(v.type, w, {
                                resource: w
                            });
                        }
                    });
                }
                p.extend(a.prototype, {
                    load: function() {
                        if (!this.loading) {
                            var d, r, s = h.ui_use_css === false ? false : true;
                            if (this.url.substr(this.url.length - 4) == ".css") {
                                if (s) {
                                    r = (k.gn("head")[0] || k.documentElement);
                                    d = k.ce("link");
                                    d.rel = "stylesheet";
                                    d.type = "text/css";
                                    d.href = this.url;
                                    d.media = "all";
                                    r.insertBefore(d, r.firstChild);
                                }
                            } else {
                                d = _a.ajs(this.url, 1);
                            }
                            this.loading = true;
                            a.monitor(this);
                            return d;
                        } else {
                            return 1;
                        }
                    }
                });
                var q = new c(a);
                q.decorate(q).decorate(a);
                p.extend(a, {
                    known: {},
                    loading: f,
                    monitor: o
                });

                function l(s) {
                    if (!(s instanceof Array)) {
                        s = [s];
                    }
                    var t = [];
                    for (var d = 0; d < s.length; d++) {
                        var r = s[d];
                        if (r instanceof a) {
                            t.push(r);
                        } else {
                            t.push(new _a.resource.Resource(r.name, r.href || r.url || ((window._atc || {}).rsrcs || {})[r.name], r.test ? r.test : function() {
                                return true;
                            }));
                        }
                    }
                    return t;
                }
                g.resource = {
                    Resource: a,
                    convert: l,
                    Bundle: b
                };
            })(_a, _a.api, _a);
            (function(b, f, d) {
                function e(m, i, h, k, j, g, l) {
                    if (typeof l == "function" && !l.ost) {
                        l();
                        l.ost = 1;
                    }
                    if (!h) {
                        h = window.addthis;
                    }
                    if (typeof g == "function") {
                        return function() {
                            if (k) {
                                k.apply(h, arguments);
                            }
                            var n = arguments;
                            if (j) {
                                _a.ed.addEventListener(j, function() {
                                    g.apply(h, n);
                                });
                            } else {
                                m.addEventListener("load", function() {
                                    g.apply(h, n);
                                });
                            }
                            m.load();
                        };
                    } else {
                        return function(p, n, o) {
                            if (p) {
                                p = _a.util.select(p);
                                if (p.length) {
                                    if (k) {
                                        k(p);
                                    }
                                    if (j) {
                                        _a.ed.addEventListener(j, function() {
                                            h[i](p, n, o);
                                        });
                                    } else {
                                        m.addEventListener("load", function() {
                                            h[i](p, n, o);
                                        });
                                    }
                                    m.load();
                                }
                            }
                        };
                    }
                }

                function a(i) {
                    var h = function() {
                            throw new Error("Invalid internal API request");
                        },
                        g = (i && i.context) || window.addthis,
                        j;
                    if (!i) {
                        h();
                    }
                    if (i.resources instanceof Array) {
                        i.resources = new _a.resource.Bundle(i.resources);
                    }
                    if (!i.resources) {
                        h();
                    }
                    if (!i.method) {
                        h();
                    }
                    j = e(i.resources, i.method, i.context, i.pre, i.event, i.callback, i.oncall);
                    g[i.method] = function() {
                        var k = arguments;
                        if (_atc.xol && !_d1.isReady) {
                            _d1.append(function() {
                                j.apply(g, k);
                            });
                        } else {
                            j.apply(g, k);
                        }
                    };
                }

                function c(g) {
                    if (!g.methods) {
                        return;
                    }
                    _a.util.each(g.methods, function(i, h) {
                        h.method = i;
                        if (g.context) {
                            h.context = g.context;
                        }
                        if (g.resources) {
                            h.resources = g.resources;
                        }
                        a(h);
                    });
                }
                b.api = {
                    ApiQueueFactory: e,
                    addAsync: a,
                    register: c
                };
            })(_a, _a.api, _a);
            (function(b, z, g) {
                var O = b,
                    s = [],
                    K = [],
                    C = N();

                function A() {
                    var a;
                    while ((a = s.pop())) {
                        a && typeof a.close == "function" && a.close();
                    }
                }

                function N() {
                    var P = d.gn("link"),
                        R = {},
                        Q, a;
                    for (Q = 0; Q < P.length; Q++) {
                        a = P[Q];
                        if (a.href && a.rel) {
                            R[a.rel] = a.href;
                        }
                    }
                    return R;
                }

                function G() {
                    var a = d.location.protocol;
                    if (a == "file:") {
                        a = "http:";
                    }
                    return a + "//" + _atd;
                }

                function E(T, U, S, Q) {
                    if (T == "more" && _a.ver() >= 300 && !_a.bro.wph && !_a.bro.iph && !_a.bro.dro) {
                        var R = _a.util.clone(S || (typeof _atw === "undefined" ? addthis_share : _atw.share));
                        R.url = _euc(R.url);
                        R.title = _euc(R.title || (addthis_share || {}).title || "");
                        var Q = typeof _atw === "undefined" ? Q : _atw.conf;
                        var P = _atc.rsrcs.bookmark + "#ats=" + _euc(_a.util.rtoKV(R)) + "&atc=" + _euc(_a.util.rtoKV(Q));
                        if (_a.bro.msi && P.length > 2000) {
                            P = P.split("&atc")[0];
                            var a = {
                                product: Q.product,
                                data_track_clickback: Q.data_track_clickback,
                                pubid: Q.pubid,
                                username: Q.username,
                                pub: Q.pub,
                                ui_email_to: Q.ui_email_to,
                                ui_email_from: Q.ui_email_from,
                                ui_email_note: Q.ui_email_note
                            };
                            if (_atw.ics(T)) {
                                a.services_custom = _atw.ics(T);
                            }
                            P += "&atc=" + _euc(_a.util.rtoKV(a));
                        }
                        return P;
                    }
                    return G() + (U ? "feed.php" : (T == "email" && _a.ver() >= 300 ? "tellfriend.php" : "bookmark.php")) + "?v=" + (_a.ver()) + "&winname=addthis&" + f(T, U, S, Q) + ((((S || {}).smd || {}).dr || O.dr) ? "&pre=" + _euc(O.track.cof(((S || {}).smd || {}).dr || O.dr)) : "") + "&tt=0" + (T === "more" && O.bro.ipa ? "&imore=1" : "") + "&captcha_provider=" + (O.bro.msi ? "recaptcha" : "nucaptcha");
                }

                function j(Q, P) {
                    var a = {
                            pinterest_share: "pinterest",
                            pinterest_pinit: "pinterest"
                        },
                        R = null;
                    if (a[P]) {
                        if (((Q || {}).passthrough || {})[P]) {
                            R = Q.passthrough[P];
                        } else {
                            if (((Q || {}).passthrough || {})[a[P]]) {
                                R = Q.passthrough[a[P]];
                            }
                        }
                    } else {
                        R = ((Q || {}).passthrough || {})[P];
                    }
                    return R ? "&passthrough=" + O.trim((typeof(R) == "object" ? O.util.toKV(R) : R), 1) : "";
                }

                function f(ah, V, ak, ap) {
                    var ab = O.trim,
                        am = w,
                        aj, R, U, al, af, ai = O.pub(),
                        ae = w._atw || {},
                        aa = (ak && ak.url ? ak.url : (ae.share && ae.share.url ? ae.share.url : (am.addthis_url || am.location.href))),
                        ao, T = function(at) {
                            if (aa && aa != "") {
                                al = aa.indexOf("#at" + at);
                                if (al > -1) {
                                    aa = aa.substr(0, al);
                                }
                            }
                        };
                    if (!ap) {
                        ap = w.conf || {};
                    } else {
                        for (aj in w.conf) {
                            if (!(ap[aj])) {
                                ap[aj] = w.conf[aj];
                            }
                        }
                    }
                    if (!ak) {
                        ak = w.share || {};
                    } else {
                        for (aj in w.share) {
                            if (!(ak[aj])) {
                                ak[aj] = w.share[aj];
                            }
                        }
                    }
                    if (O.rsu()) {
                        ak.url = w.addthis_url;
                        ak.title = w.addthis_title;
                        aa = ak.url;
                    }
                    if (C.canonical && !ak.trackurl && ak.imp_url && !_a.share.inBm()) {
                        ak.trackurl = C.canonical;
                    }
                    if (!ai || ai == "undefined") {
                        ai = "unknown";
                    }
                    ao = ap.services_custom;
                    T("pro");
                    T("opp");
                    T("cle");
                    T("clb");
                    T("abc");
                    T("_pco");
                    if (aa.indexOf("addthis.com/static/r07/ab") > -1) {
                        aa = aa.split("&");
                        for (al = 0; al < aa.length; al++) {
                            af = aa[al].split("=");
                            if (af.length == 2) {
                                if (af[0] == "url") {
                                    aa = af[1];
                                    break;
                                }
                            }
                        }
                    }
                    if (ao instanceof Object && "0" in ao) {
                        for (al in ao) {
                            if (ao[al].code == ah) {
                                ao = ao[al];
                                break;
                            }
                        }
                    }
                    var an = ((ak.templates && ak.templates[ah]) ? ak.templates[ah] : ""),
                        ad = ak.smd || O.smd,
                        P = ((ak.modules && ak.modules[ah]) ? ak.modules[ah] : ""),
                        S = ak.share_url_transforms || ak.url_transforms || {},
                        Y = ak.track_url_transforms || ak.url_transforms,
                        ar = ((S && S.shorten) && ah.indexOf("pinterest") === -1 ? (typeof(S.shorten) == "string" ? S.shorten : (S.shorten[ah] || S.shorten["default"] || "")) : ""),
                        W = "",
                        ag = (ap.product || am.addthis_product || ("men-" + _a.ver())),
                        Q = w.crs,
                        X = "",
                        ac = O.track.gof(aa),
                        aq = ac.length == 2 ? ac.shift().split("=").pop() : "",
                        a = ac.length == 2 ? ac.pop() : "",
                        Z = (ap.data_track_clickback || ap.data_track_linkback || !ai || ai == "AddThis") || (ap.data_track_clickback !== false && _a.ver() >= 250);
                    if (_a.ver() >= 300 && ap.data_track_clickback === false) {
                        Z = false;
                    }
                    if (ak.email_vars) {
                        for (aj in ak.email_vars) {
                            X += (X == "" ? "" : "&") + _euc(aj) + "=" + _euc(ak.email_vars[aj]);
                        }
                    }
                    if (O.track.spc && ag.indexOf(O.track.spc) == -1) {
                        ag += "," + O.track.spc;
                    }
                    if (S && S.shorten && ak.shorteners && ah.indexOf("pinterest") == -1) {
                        for (aj in ak.shorteners) {
                            for (R in ak.shorteners[aj]) {
                                W += (W.length ? "&" : "") + _euc(aj + "." + R) + "=" + _euc(ak.shorteners[aj][R]);
                            }
                        }
                    }
                    aa = O.track.cof(aa);
                    aa = O.track.mgu(aa, S, ak, ah);
                    if (Y) {
                        ak.trackurl = O.track.mgu(ak.trackurl || aa, Y, ak, ah);
                    }
                    U = "pub=" + ai + "&source=" + ag + "&lng=" + (O.lng() || "xx") + "&s=" + ah + (ap.ui_508_compliant ? "&u508=1" : "") + (V ? "&h1=" + ab((ak.feed || ak.url || "").replace("feed://", ""), 1) + "&t1=" : "&url=" + ab(aa, 1) + "&title=") + ab(ak.title || (am.addthis_title || "").replace(/AddThis\sSocial\sBookmarking\sSharing\sButton\sWidget/, ""), 1) + ((V && ak.userid) ? "&fid=" + ab(ak.userid) : "") + (_a.ver() < 200 ? "&logo=" + ab(am.addthis_logo, 1) + "&logobg=" + ab(am.addthis_logo_background, 1) + "&logocolor=" + ab(am.addthis_logo_color, 1) : "") + "&ate=" + O.track.sta() + ((ah != "email" || _a.ver() < 300) ? "&frommenu=1" : "") + ((w.addthis_ssh && (!Q || addthis_ssh != Q) && (addthis_ssh == ah || addthis_ssh.search(new RegExp("(?:^|,)(" + ah + ")(?:$|,)")) > -1)) ? "&ips=1" : "") + (Q ? "&cr=" + (ah == Q ? 1 : 0) : "") + "&uid=" + _euc(O.uid && O.uid != "x" ? O.uid : O.util.cuid()) + (ak.email_template ? "&email_template=" + _euc(ak.email_template) : "") + (X ? "&email_vars=" + _euc(X) : "") + (ar ? "&shortener=" + _euc(typeof(ar) == "array" ? ar.join(",") : ar) : "") + (ar && W ? "&" + W : "") + j(ak, ah) + (ak.description ? "&description=" + ab(ak.description, 1) : "") + (ak.html ? "&html=" + ab(ak.html, 1) : (ak.content ? "&html=" + ab(ak.content, 1) : "")) + (ak.trackurl && ak.trackurl != aa ? "&trackurl=" + ab(ak.trackurl, 1) : "") + (ak.screenshot ? "&screenshot=" + ab(ak.screenshot, 1) : "") + (ak.screenshot_secure ? "&screenshot_secure=" + ab(ak.screenshot_secure, 1) : "") + (ak.swfurl ? "&swfurl=" + ab(ak.swfurl, 1) : "") + (ak.swfurl_secure ? "&swfurl_secure=" + ab(ak.swfurl_secure, 1) : "") + (ap.hdl ? "&hdl=1" : "") + (O.cb ? "&cb=" + O.cb : "") + (O.ufbl ? "&ufbl=1" : "") + (O.uud ? "&uud=1" : "") + (ak.iframeurl ? "&iframeurl=" + ab(ak.iframeurl, 1) : "") + (ak.width ? "&width=" + ak.width : "") + (ak.height ? "&height=" + ak.height : "") + (ap.data_track_p32 ? "&p32=" + ap.data_track_p32 : "") + (Z || _a.track.ctp(ap.product, ap) ? "&ct=1" : "&ct=0") + ((Z || _a.track.ctp(ap.product, ap)) && aa.indexOf("#") > -1 ? "&uct=1" : "") + ((ao && ao.url) ? "&acn=" + _euc(ao.name) + "&acc=" + _euc(ao.code) + "&acu=" + _euc(ao.url) : "") + (ad ? (ad.rxi ? "&rxi=" + ad.rxi : "") + (ad.rsi ? "&rsi=" + ad.rsi : "") + (ad.gen ? "&gen=" + ad.gen : "") : ((aq ? "&rsi=" + aq : "") + (a ? "&gen=" + a : ""))) + (ak.xid ? "&xid=" + ab(ak.xid, 1) : "") + (an ? "&template=" + ab(an, 1) : "") + (P ? "&module=" + ab(P, 1) : "") + (ap.ui_cobrand ? "&ui_cobrand=" + ab(ap.ui_cobrand, 1) : "") + (ah == "email" && _a.ver() >= 300 ? "&ui_email_to=" + ab(ap.ui_email_to, 1) + "&ui_email_from=" + ab(ap.ui_email_from, 1) + "&ui_email_note=" + ab(ap.ui_email_note, 1) : "") + (_a.ver() < 300 ? ((ap.ui_header_color ? "&ui_header_color=" + ab(ap.ui_header_color, 1) : "") + (ap.ui_header_background ? "&ui_header_background=" + ab(ap.ui_header_background, 1) : "")) : "");
                    return U;
                }

                function J(Q, P, R) {
                    var a = Q.xid;
                    if (P.data_track_clickback || P.data_track_linkback || _a.track.ctp(P.product, P)) {
                        return O.track.gcc(a, (Q.smd || O.smd || {}).gen || 0) + (R || "");
                    } else {
                        return "";
                    }
                }

                function p(W, Y, S, X, P, Z) {
                    var V = O.pub(),
                        a = X || Y.url || "",
                        R = Y.xid || O.util.cuid(),
                        Q, U, T = (S.data_track_clickback || S.data_track_linkback || !V || V == "AddThis") || (S.data_track_clickback !== false && _a.ver() >= 250);
                    if (a.toLowerCase().indexOf("http%3a%2f%2f") === 0) {
                        a = _duc(a);
                    }
                    if (P) {
                        Q = {};
                        for (U in Y) {
                            Q[U] = Y[U];
                        }
                        Q.xid = R;
                        setTimeout(function() {
                            (new Image()).src = E(W == "twitter" && Z ? "tweet" : W, 0, Q, S);
                        }, 100);
                    }
                    return (T ? O.track.cur(a, W, R) : a);
                }

                function o(S, Q, a) {
                    var Q = Q || {},
                        R = S.share_url_transforms || S.url_transforms || {},
                        P = O.track.cof(O.track.mgu(S.url, R, S, "mailto")),
                        T = S.title ? S.title : P;
                    return "mailto:?body=" + _euc(p("mailto", S, Q, P, a)) + "&subject=" + (_a.bro.iph ? T : _euc(T));
                }

                function t(a) {
                    return ((!a.templates || !a.templates.twitter) && (!O.wlp || O.wlp == "http:"));
                }

                function i(P, R, a) {
                    var Q = w.open(P, R, a);
                    s.push(Q);
                    return Q;
                }

                function F(P, R, Z, Q, W) {
                    var V = R || 550,
                        S = Z || 450,
                        Y = screen.width,
                        T = screen.height,
                        U = Math.round((Y / 2) - (V / 2)),
                        a = 0;
                    if (T > S) {
                        a = Math.round((T / 2) - (S / 2));
                    }
                    var X = w.open(P, (_a.bro.msi ? "" : (Q || "addthis_share")), "left=" + U + ",top=" + a + ",width=" + V + ",height=" + S + ",personalbar=no,toolbar=no,scrollbars=yes,location=yes,resizable=yes");
                    s.push(X);
                    return W ? X : false;
                }

                function L(Q, R, P) {
                    if (l.href.search(_atc.rsrcs.bookmark) > -1) {
                        l = E(Q, 0, R, P);
                    } else {
                        var a = w.open(E(Q, 0, R, P), "addthis_share");
                        s.push(a);
                    }
                    return false;
                }

                function k(P) {
                    var a = {
                        twitter: 1,
                        wordpress: 1,
                        facebook: 1,
                        email: _a.ver() >= 300,
                        more: _a.ver() >= 300,
                        raiseyourvoice: 1,
                        vk: 1,
                        tumblr: 1
                    };
                    return a[P];
                }

                function x(Q, P, a, R) {
                    var S = {
                        googlebuzz: "https://web.archive.org/web/20200420105550/http://www.google.com/profiles/%s",
                        google_follow: "https://web.archive.org/web/20200420105550/https://plus.google.com/%s",
                        youtube: "https://web.archive.org/web/20200420105550/http://www.youtube.com/" + (a ? (a == "channel" ? "channel/" : "user/") : "user/") + "%s?sub_confirmation=1",
                        facebook: "https://web.archive.org/web/20200420105550/http://www.facebook.com/profile.php?id=%s",
                        facebook_url: "https://web.archive.org/web/20200420105550/http://www.facebook.com/%s",
                        rss: "%s",
                        flickr: "https://web.archive.org/web/20200420105550/http://www.flickr.com/photos/%s",
                        foursquare: "https://web.archive.org/web/20200420105550/http://foursquare.com/%s",
                        instagram: "https://web.archive.org/web/20200420105550/http://instagram.com/%s",
                        followgram: "https://web.archive.org/web/20200420105550/http://followgram.me/%s",
                        twitter: "https://web.archive.org/web/20200420105550/http://twitter.com/intent/follow?source=followbutton&variant=1.0&screen_name=%s",
                        linkedin: (a ? (a == "group" ? "https://web.archive.org/web/20200420105550/http://www.linkedin.com/groups?gid=%s" : "https://web.archive.org/web/20200420105550/http://www.linkedin.com/company/%s") : "https://web.archive.org/web/20200420105550/http://www.linkedin.com/in/%s"),
                        pinterest: "https://web.archive.org/web/20200420105550/http://www.pinterest.com/%s",
                        tumblr: "http://%s.tumblr.com",
                        vimeo: "https://web.archive.org/web/20200420105550/http://www.vimeo.com/%s"
                    };
                    if (Q == "facebook" && isNaN(P)) {
                        Q = "facebook_url";
                    }
                    if (Q == "twitter" && P == _1) {
                        P = (R || {})["tw:screen_name"];
                    }
                    return !P ? null : ((S[Q] || "").replace("%s", P) || null);
                }

                function r(V, U, W, S, R, X, Q, a) {
                    var T = {
                            wordpress: {
                                width: 720,
                                height: 570
                            },
                            linkedin: {
                                width: 600,
                                height: 400
                            },
                            twitter: {
                                width: 520,
                                height: 520
                            },
                            "default": {
                                width: 550,
                                height: 450
                            }
                        },
                        P = x(V, U, a);
                    q(V, 1, W, S);
                    if (S.ui_use_same_window) {
                        l.href = P;
                    } else {
                        if (S.ui_use_different_full_window) {
                            w.open(P, "_blank");
                        } else {
                            F(P, R || (T[V] || T["default"]).width, X || (T[V] || T["default"]).height, Q);
                        }
                    }
                    return false;
                }

                function H(V, U, R, T, a, Q) {
                    var S = {
                            wordpress: {
                                width: 720,
                                height: 570
                            },
                            linkedin: {
                                width: 600,
                                height: 400
                            },
                            facebook: {
                                width: 675,
                                height: 375
                            },
                            email: _a.ver() >= 300 ? {
                                width: 660,
                                height: 660
                            } : {
                                width: 735,
                                height: 450
                            },
                            more: _a.ver() >= 300 ? {
                                width: 660,
                                height: 716
                            } : {
                                width: 735,
                                height: 450
                            },
                            vk: {
                                width: 720,
                                height: 290
                            },
                            raiseyourvoice: {
                                width: 480,
                                height: 635
                            },
                            "default": {
                                width: 550,
                                height: 450
                            }
                        },
                        P = E(V, 0, U, R);
                    if (R.ui_use_same_window) {
                        l.href = P;
                    } else {
                        if (V != "more") {
                            F(P, T || (S[V] || S["default"]).width, a || (S[V] || S["default"]).height, Q);
                        } else {
                            _a.share.imgOcw(F(P, T || (S[V] || S["default"]).width, a || (S[V] || S["default"]).height, Q, true));
                        }
                    }
                    return false;
                }

                function n(T, R, U, P) {
                    var S = T.share_url_transforms || T.url_transforms || {},
                        a, Q = O.track.cof(O.track.mgu(T.url, S, T, "twitter"));
                    if (!T.templates) {
                        T.templates = {};
                    }
                    Q = E("twitter", 0, T, R);
                    if (a) {
                        T.title = a;
                    }
                    if (R.ui_use_same_window || P) {
                        l.href = Q;
                    } else {
                        F(Q, 550, 450, "twitter_tweet");
                    }
                    return false;
                }

                function m(S, R, a, P, U) {
                    var Q = (U ? "follow" : (S.indexOf("_comment") > -1 ? "comment" : "share")),
                        T = {
                            element: P || {},
                            service: S || "unknown",
                            url: U ? R.followUrl : (R.trackurl || R.url)
                        };
                    _a.ed.fire("addthis.menu." + Q, w.addthis || {}, T);
                }

                function q(S, U, W, Q, T) {
                    var P = {},
                        V = {},
                        R;
                    for (R in W) {
                        P[R] = W[R];
                    }
                    for (R in Q) {
                        V[R] = Q[R];
                    }
                    if (!P.xid) {
                        P.xid = O.util.cuid();
                    }
                    V.hdl = 1;
                    var a = E(S, U, P, V);
                    K.push(O.ajs(a, 1));
                    if (!T) {
                        m(S, P, Q, null, U);
                    }
                }
                var e = {};
                var c = {};
                var D = [];

                function h(a) {
                    _a.util.each(a, function(P, Q) {
                        e[P] = Q;
                    });
                }

                function B(a) {
                    D.push(a);
                }

                function M() {
                    _a.util.each(D, function(a, P) {
                        P();
                    });
                }

                function v(P, Q, a) {
                    if (e[P]) {
                        try {
                            e[P](Q, a, P);
                            if (Q) {
                                if ((Q.parentNode.className || "").indexOf("toolbox") > -1) {
                                    Q.parentNode.services = Q.parentNode.services || {};
                                    Q.parentNode.services[P] = 1;
                                }
                                if ((Q.className || "").indexOf("at300") == -1) {
                                    Q.className += " at300b";
                                }
                            }
                            return true;
                        } catch (R) {
                            return false;
                        }
                    }
                    return false;
                }

                function y(a) {
                    _a.util.each(a, function(P, Q) {
                        c[P] = {};
                        _a.util.each(Q, function(R, S) {
                            c[P][R] = S;
                        });
                    });
                }

                function u(P, Q, a) {
                    var R = function() {};
                    if (c[P]) {
                        if (!c[P].require || c[P].require(P, Q, a)) {
                            _a.util.each(c[P], function(S, T) {
                                if (S == "_after") {
                                    R = T;
                                } else {
                                    Q[S] = function(U) {
                                        U = U || {};
                                        U.el = Q;
                                        U.service = P;
                                        return T(U);
                                    };
                                }
                            });
                        }
                        R(Q);
                        return true;
                    }
                    return false;
                }

                function I(Q, P, a) {
                    return G() + "tellfriend.php?&fromname=aaa&fromemail=" + _euc(P.from) + "&frommenu=1&tofriend=" + _euc(P.to) + (Q.email_template ? "&template=" + _euc(Q.email_template) : "") + (P.vars ? "&vars=" + _euc(P.vars) : "") + "&lng=" + (O.lng() || "xx") + "&captcha_provider=nucaptcha&note=" + _euc(P.note) + "&" + f("email", null, null, a);
                }
                b.share = b.share || {};
                b.util.extend(b.share, {
                    auw: k,
                    ocw: F,
                    onw: i,
                    caw: A,
                    ftw: r,
                    stw: H,
                    siw: L,
                    pts: n,
                    unt: t,
                    uadd: f,
                    genurl: E,
                    geneurl: I,
                    genieu: o,
                    acb: p,
                    gcp: J,
                    gfu: x,
                    svcurl: G,
                    track: q,
                    notify: m,
                    links: C,
                    register: h,
                    registerListeners: y,
                    sub: M,
                    registerSubscriber: B,
                    extern: v,
                    externEvents: u
                });
            })(_a, _a.api, _a);
            (function(f, y, B) {
                var E = document,
                    i = {},
                    h = {},
                    q, D = [],
                    e = 0,
                    v = 0,
                    x = 0,
                    m = true,
                    G = 1,
                    z = 0,
                    j = E.domain.search(/\.addthis\.com$/i) != -1 ? 1 : 0,
                    o = _a.bro.mob ? "https://web.archive.org/web/20200420105550/http://m.facebook.com/sharer.php" : "https://web.archive.org/web/20200420105550/http://www.facebook.com/sharer/sharer.php";

                function s() {
                    return ((_atc.ltj && n()) || (t() && FB.XFBML && FB.XFBML.parse));
                }

                function p() {
                    if (q === _1) {
                        try {
                            var H = (document.getElementsByTagName("html"))[0];
                            if (H) {
                                if (H.getAttribute && H.getAttribute("xmlns:fb")) {
                                    q = true;
                                } else {
                                    if (_a.bro.msi) {
                                        var d = H.outerHTML.substr(0, H.outerHTML.indexOf(">"));
                                        if (d.indexOf("xmlns:fb") > -1) {
                                            q = true;
                                        }
                                    }
                                }
                            }
                        } catch (I) {
                            q = false;
                        }
                    }
                    return q;
                }

                function t() {
                    return (typeof(w.FB) == "object" && FB.Event && typeof(FB.Event.subscribe) == "function");
                }

                function n() {
                    return !w.FB_RequireFeatures && (!w.FB || (!FB.Share && !FB.Bootstrap));
                }

                function A(J, H) {
                    var d = {},
                        K = h[H],
                        I = (addthis_config.data_ga_tracker || addthis_config.data_ga_property);
                    for (k in addthis_share) {
                        d[k] = addthis_share[k];
                    }
                    if (K) {
                        for (k in K) {
                            d[k] = K[k];
                        }
                    }
                    d.url = H;
                    _a.share.track(J, 0, d, addthis_config);
                    if (I) {
                        _a.gat(J, H, addthis_config, d);
                    }
                }

                function g() {
                    var d, H;
                    if (E.location.href.indexOf(_atr) == -1 && !_a.sub && !e) {
                        if (t()) {
                            e = 1;
                            FB.Event.subscribe("message.send", function(I) {
                                A("facebook_send", I);
                            });
                            FB.Event.subscribe("edge.create", function(I) {
                                if (!i[I]) {
                                    A("facebook_like", I);
                                    i[I] = 1;
                                }
                            });
                            FB.Event.subscribe("edge.remove", function(I) {
                                if (i[I]) {
                                    A("facebook_unlike", I);
                                    i[I] = 0;
                                }
                            });
                            FB.Event.subscribe("comment.create", function(I) {
                                A("facebook_comment", I.href);
                            });
                            FB.Event.subscribe("comment.remove", function(I) {
                                A("facebook_uncomment", I.href);
                            });
                        } else {
                            if (w.fbAsyncInit && !x) {
                                if (v < 3) {
                                    setTimeout(g, 3000 + 1000 * 2 * (v++));
                                }
                                x = 1;
                            }
                        }
                    }
                }

                function u(d, L) {
                    var K = "fb-root",
                        I = E.getElementById(K),
                        H = w.fbAsyncInit,
                        N = false,
                        J = function() {
                            N = true;
                            for (var O = 0; O < D.length; O++) {
                                FB.XFBML.parse(D[O]);
                            }
                        };
                    D.push(d);
                    if (t() && FB.XFBML && FB.XFBML.parse) {
                        g();
                        FB.XFBML.parse(d);
                    } else {
                        if (!H) {
                            if (!I) {
                                I = E.ce("div");
                                I.id = K;
                                document.body.appendChild(I);
                            }
                            if (!H) {
                                var M = E.createElement("script");
                                M.src = E.location.protocol + "//web.archive.org/web/20200420105550/https://connect.facebook.net/" + (L || _a.gfl(_a.lng())) + "/all.js";
                                M.async = true;
                                I.appendChild(M);
                                H = function() {
                                    var Q = E.getElementsByTagName("meta"),
                                        O = null;
                                    for (var P = 0; P < Q.length; P++) {
                                        if (Q[P].property == "fb:app_id" || Q[P].name == "fb:app_id") {
                                            O = Q[P].content;
                                            break;
                                        }
                                    }
                                    FB.init({
                                        appId: O ? O : (j ? "140586622674265" : "172525162793917"),
                                        status: true,
                                        cookie: true
                                    });
                                };
                            }
                        }
                        if (m) {
                            m = false;
                            w.__orig__fbAsyncInit = H;
                            w.fbAsyncInit = function() {
                                w.__orig__fbAsyncInit();
                                g();
                                if (document && document.readyState === "complete") {
                                    J();
                                } else {
                                    if (window.addEventListener) {
                                        setTimeout(function() {
                                            if (!N) {
                                                J();
                                            }
                                        }, 3000);
                                        window.addEventListener("load", J, false);
                                    } else {
                                        J();
                                    }
                                }
                            };
                        }
                    }
                }

                function C(H, d) {
                    if (H.ost || _a.bro.ie6) {
                        return;
                    }
                    _a.ufbl = 1;
                    if (_a.share.fb.ready()) {
                        c("send", H, d);
                    } else {
                        H.className = "";
                        H.innerHTML = "<span></span>";
                        H.style.width = H.style.height = "0px";
                    }
                    H.noh = H.ost = 1;
                }

                function a(H, d) {
                    if (H.ost || _a.bro.ie6) {
                        return;
                    }
                    _a.ufbl = 1;
                    if (_a.share.fb.ready()) {
                        c("share", H, d);
                    } else {
                        H.className = "";
                        H.innerHTML = "<span></span>";
                        H.style.width = H.style.height = "0px";
                    }
                    H.noh = H.ost = 1;
                }

                function c(J, H, d, I) {
                    if (!I) {
                        I = _parseThirdPartyAttributes(H, "fb:" + J);
                    }
                    I.href = I.href || _a.track.mgu(d.share.url, {
                        defrag: 1
                    });
                    J = J === "share" ? J + "-button" : J;
                    H.innerHTML = "<div class=\"fb-" + J + "\" data-ref=\"" + _a.share.gcp(d.share, d.conf, "." + J).replace(",", "_") + "\"></div>";
                    _a.util.each(I, function(L, K) {
                        if (J === "share-button") {
                            if (L === "layout") {
                                L = "type";
                            }
                            if (K === "horizontal") {
                                K = "button_count";
                            } else {
                                if (K === "vertical") {
                                    K = "box_count";
                                }
                            }
                        }
                        H.firstChild.setAttribute("data-" + L, K);
                    });
                    if (I && (!I.type && !I.layout)) {
                        H.firstChild.setAttribute("data-type", "box_count");
                    }
                    u(H);
                }

                function r(N, L) {
                    if (N.ost) {
                        return;
                    }
                    var J, H, M = _a.api.ptpa(N, "fb:subscribe");
                    if (_a.util.isEmpty(M)) {
                        M = _a.api.ptpa(N, "fb:follow");
                    }
                    var K = M.layout || "button_count",
                        d = {
                            standard: [450, M.show_faces ? 80 : 35],
                            button_count: [90, 25],
                            box_count: [55, 65]
                        },
                        O = M.width || (d[K] ? d[K][0] : 100),
                        I = M.height || (d[K] ? d[K][1] : 25);
                    passthrough = _a.util.toKV(M);
                    _a.ufbl = 1;
                    if (s()) {
                        if (M.layout === _1) {
                            M.layout = "button_count";
                        }
                        if (M.show_faces === _1) {
                            M.show_faces = "false";
                        }
                        if (M.action === _1) {
                            M.action = "subscribe";
                        }
                        if (M.width === _1) {
                            M.width = O;
                        }
                        if (M.font === _1) {
                            M.font = "arial";
                        }
                        if (M.href === _1) {
                            M.href = _a.track.mgu(L.share.url, {
                                defrag: 1
                            });
                        }
                        if (!L.share.xid) {
                            L.share.xid = _a.util.cuid();
                        }
                        h[M.href] = {};
                        for (H in L.share) {
                            h[M.href][H] = L.share[H];
                        }
                        c("follow", N, L, M);
                    } else {
                        if (!_a.bro.msi) {
                            J = E.ce("iframe");
                        } else {
                            N.innerHTML = "<iframe frameborder=\"0\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                            J = N.firstChild;
                        }
                        J.style.overflow = "hidden";
                        J.style.scrolling = "no";
                        J.style.scrollbars = "no";
                        J.style.border = "none";
                        J.style.borderWidth = "0px";
                        J.style.width = O + "px";
                        J.style.height = I + "px";
                        J.src = "//web.archive.org/web/20200420105550/https://www.facebook.com/plugins/subscribe.php?href=" + _euc(_a.track.mgu(L.share.url, {
                            defrag: 1
                        })) + "&layout=button_count&show_faces=false&width=100&action=subscribe&font=arial&" + passthrough;
                        if (!_a.bro.msi) {
                            N.appendChild(J);
                        }
                    }
                    N.noh = N.ost = 1;
                }

                function F(N, L) {
                    if (N.ost) {
                        return;
                    }
                    var O, I, d, M = _a.api.ptpa(N, "fb:like"),
                        K = M.layout || "button_count",
                        H = {
                            standard: [450, M.show_faces ? 80 : 35],
                            button_count: [90, 25],
                            box_count: [55, 65]
                        },
                        P = M.width || (H[K] ? H[K][0] : 100),
                        J = M.height || (H[K] ? H[K][1] : 25);
                    passthrough = _a.util.toKV(M);
                    _a.ufbl = 1;
                    if (s()) {
                        if (M.layout === _1) {
                            M.layout = "button_count";
                        }
                        if (M.show_faces === _1) {
                            M.show_faces = "false";
                        }
                        if (M.action === _1) {
                            M.action = "like";
                        }
                        if (M.width === _1) {
                            M.width = P;
                        }
                        if (M.font === _1) {
                            M.font = "arial";
                        }
                        if (M.href === _1) {
                            d = _a.util.clone(L.share.url_transforms || {});
                            d.defrag = 1;
                            M.href = _a.track.mgu(L.share.url, d);
                        }
                        M.send = false;
                        if (!L.share.xid) {
                            L.share.xid = _a.util.cuid();
                        }
                        h[M.href] = {};
                        for (I in L.share) {
                            h[M.href][I] = L.share[I];
                        }
                        c("like", N, L, M);
                    } else {
                        if (!_a.bro.msi) {
                            O = E.ce("iframe");
                        } else {
                            N.innerHTML = "<iframe frameborder=\"0\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                            O = N.firstChild;
                        }
                        O.style.overflow = "hidden";
                        O.style.scrolling = "no";
                        O.style.scrollbars = "no";
                        O.style.border = "none";
                        O.style.borderWidth = "0px";
                        O.style.width = P + "px";
                        O.style.height = J + "px";
                        O.src = "//web.archive.org/web/20200420105550/https://www.facebook.com/plugins/like.php?href=" + _euc(_a.track.mgu(L.share.url, {
                            defrag: 1
                        })) + "&layout=button_count&show_faces=false&width=100&action=like&font=arial&" + passthrough;
                        if (!_a.bro.msi) {
                            N.appendChild(O);
                        }
                    }
                    N.noh = N.ost = 1;
                }

                function b(L, J, N, H) {
                    var M = (L.passthrough || {}).facebook || {},
                        K = {},
                        d, I = G ? (o + "?u=" + _euc(_a.share.acb("facebook", L, J)) + "&p[title]=" + _euc(L.title) + "&display=popup") : (z ? ("https://web.archive.org/web/20200420105550/http://www.facebook.com/connect/prompt_feed.php?message=" + _euc(L.title) + "%0A%0D" + _euc(_a.share.acb("facebook", L, J))) : j ? "https://web.archive.org/web/20200420105550/http://www.facebook.com/dialog/feed?redirect_uri=" + _euc("https://web.archive.org/web/20200420105550/http://s7.addthis.com/static/postshare/c00.html") + "&app_id=140586622674265&link=" + _euc(_a.share.acb("facebook", L, J)) + "&name=" + _euc(L.title) + "&description=" + _euc(L.description || "") + "&display=popup" : _a.share.genurl("facebook", 0, L, J));
                    if (G || z || j) {
                        for (d in J) {
                            K[d] = J[d];
                        }
                        K.hdl = 1;
                        _a.share.track("facebook", 0, L, K, 1);
                    }
                    if (J.ui_use_same_window || H) {
                        l.href = I;
                    } else {
                        _a.share.ocw(I, 640, 375, "facebook");
                    }
                    return false;
                }
                f.share = f.share || {};
                f.share.register({
                    facebook_like: F,
                    facebook_send: C,
                    facebook_share: a,
                    facebook_subscribe: r
                });
                f.share.registerSubscriber(g);
                f.share.registerListeners({
                    facebook: {
                        _after: function(d) {
                            d.ins = 1;
                            d.noh = 1;
                        },
                        onclick: function(H) {
                            var I = H.el,
                                d = H.service;
                            if (I.ins != 0 && window.addthis.auth && window.addthis.auth.fbishare) {
                                window.addthis.auth.lockiframe[d] = true;
                                window.addthis.auth.loadIframe(I, d, I.share, I.conf);
                            } else {
                                return _a.share.fb.share(I.share, I.conf);
                            }
                        },
                        onmouseover: function(H) {
                            var I = H.el,
                                d = H.service;
                            if (I.ins != 0 && window.addthis.auth && window.addthis.auth.fbishare) {
                                window.addthis.auth.keepiframe[d]++;
                                window.addthis.auth.loadIframe(I, d, I.share, I.conf);
                            }
                        },
                        onmouseout: function(H) {
                            var I = H.el,
                                d = H.service;
                            if (I.ins != 0 && window.addthis.auth && window.addthis.auth.fbishare) {
                                window.addthis.auth.keepiframe[d]--;
                                setTimeout(function() {
                                    window.addthis.auth.hideIframe(d);
                                }, 1000);
                            }
                        }
                    }
                });
                f.share.fb = {
                    like: F,
                    send: C,
                    subs: r,
                    has: t,
                    ns: p,
                    ready: s,
                    compat: n,
                    share: b,
                    sub: g,
                    load: u
                };
            })(_a, _a.api, _a);
            (function(e, f, i) {
                var j = document,
                    c = false,
                    g = 0;

                function b() {
                    return (window.getglue && window.getglue.on);
                }

                function h(m, l) {
                    var d = (((m || {}).passthrough || {}).objectId) || "none";
                    _a.share.ocw("https://web.archive.org/web/20200420105550/http://w.getglue.com/convo/checkins?type=conversation&objectId=" + _euc(d) + "&source=" + _euc(m.url));
                    setTimeout(function() {
                        (new Image()).src = genurl("getglue", 0, m, l);
                    }, 100);
                }

                function k(m, l, o) {
                    var d = (((q || {}).passthrough || {}).objectId);
                    if (!d) {
                        m.innerHTML = "<a class=\"glue-checkin-widget\"></a>";
                        window.console && console.log("Skipping Get Glue widget: no objectId defined");
                        return;
                    }
                    if (!b()) {
                        var p = document.createElement("script");
                        p.src = "//web.archive.org/web/20200420105550/https://widgets.getglue.com/checkin.js";
                        var t = document.getElementsByTagName("script")[0];
                    }
                    var r = _parseThirdPartyAttributes(m, "getglue"),
                        q = l.share;
                    t.parentNode.insertBefore(p, t);
                    m.innerHTML = "<a class=\"glue-checkin-widget\" href=\"http://getglue.com/" + d + "\" data-type=\"horizontal\">Checkin on Get Glue</a>";
                }

                function a(d) {
                    if (c) {
                        return;
                    }
                    var m = d ? d.share : addthis_share,
                        l = d ? d.conf : addthis_config;
                    if (b()) {
                        getglue.on("checkin", function(p) {
                            var n = {};
                            for (var o in m) {
                                n[o] = m[o];
                            }
                            _a.share.track("getglue", 0, n, l);
                        });
                        c = true;
                    } else {
                        if (g < 5) {
                            setTimeout(function() {
                                a(d);
                            }, 500 * (g++));
                        }
                    }
                }
                e.share = e.share || {};
                e.share.registerSubscriber(a);
                e.share.register({
                    getglue_checkin: k
                });
                e.share.getglue = {
                    sub: a,
                    ps: h,
                    gg: k
                };
            })(_a, _a.api, _a);
            (function(e, h, m) {
                var p = document,
                    f = {},
                    n = {},
                    a = 0,
                    k = 0,
                    g = 0,
                    o = true;

                function i() {
                    return (window.gapi && window.gapi.plusone);
                }

                function b() {
                    if (i()) {
                        if (gapi && gapi.plusone && Object.prototype.toString.call(gapi.plusone.go) === "[object Function]") {
                            gapi.plusone.go();
                        }
                        return;
                    } else {
                        if (!k) {
                            k = 1;
                            var d = new _a.resource.Resource("plusoneapi", "//web.archive.org/web/20200420105550/https://apis.google.com/js/plusone.js", i);
                            d.addEventListener("load", function() {
                                b();
                            });
                            d.load();
                        }
                    }
                }

                function c(d) {
                    var r = d ? d.share : addthis_share,
                        q = d ? d.conf : addthis_config;
                    window._at_plusonecallback = window._at_plusonecallback || function(u) {
                        var s = {};
                        for (var t in r) {
                            s[t] = r[t];
                        }
                        s.url = u.href;
                        _a.share.track("google_" + (u.state == "off" ? "un" : "") + "plusone", 0, s, q);
                    };
                    window._at_pluscallback = window._at_pluscallback || function(u) {
                        var s = {};
                        for (var t in r) {
                            s[t] = r[t];
                        }
                        s.url = u.href;
                        _a.share.track("googleplus_counter", 0, s, q);
                    };
                }

                function j(q, d, r) {
                    if (q.ost) {
                        return;
                    }
                    var v = r === "googleplus_counter" ? "plus" : "plusone",
                        t = _parseThirdPartyAttributes(q, "g:" + v),
                        s = document.ce("g:" + v),
                        u = "";
                    _a.gpl = _a.gpl || {}, _a.gpl.lang = _a.gpl.lang || null;
                    t.lang = _a.gpl.lang = _a.gpl.lang || ((typeof t.lang == "undefined") ? null : t.lang);
                    window.___gcfg = window.___gcfg || {};
                    window.___gcfg.lang = _a.gpl.lang || t.lang || _a.ggl((d.conf || {}).ui_language || window.addthis_language) || "en-US";
                    t.href = d.share.url = t.href || _a.track.mgu(d.share.url, {
                        defrag: 1
                    });
                    if (v == "plusone") {
                        t.size = t.size || (check32(q, true) ? "standard" : "small");
                        t.callback = t.callback || "_at_" + v + "callback";
                    } else {
                        t.href = _a.share.acb("google_plusone_share", d.share, addthis_config);
                        t.action = "share";
                    }
                    _a.share.goog.sub(d);
                    _a.util.each(t, function(y, x) {
                        s.setAttribute(y, x);
                    });
                    q.appendChild(s);
                    q.noh = q.ost = 1;
                    b();
                }

                function l(q, d) {
                    if (q.ost) {
                        return;
                    }
                    q.title = "Follow on Google+";
                    var v = _parseThirdPartyAttributes(q, "g:plusone");
                    v.size = (v.size || "").toLowerCase();
                    if (document.head) {
                        var x = document.createElement("link");
                        x.setAttribute("href", v.href);
                        x.setAttribute("rel", "publisher");
                        document.head.appendChild(x);
                    }
                    v.url = v.href = v.href || "";
                    if (v.size == "badge" || v.size == "smallbadge") {
                        var r = document.ce("g:plus"),
                            u = "";
                        _a.gpl = _a.gpl || {}, _a.gpl.lang = _a.gpl.lang || null;
                        v.lang = _a.gpl.lang = _a.gpl.lang || ((typeof v.lang == "undefined") ? null : v.lang);
                        window.___gcfg = window.___gcfg || {};
                        window.___gcfg.lang = _a.gpl.lang || v.lang || _a.ggl((d.conf || {}).ui_language || window.addthis_language) || "en-US";
                        _a.util.each(v, function(z, y) {
                            r.setAttribute(z, y);
                        });
                        q.appendChild(r);
                        q.noh = q.ost = 1;
                        b();
                    } else {
                        var s = "32";
                        if (v.size == "small") {
                            s = "16";
                        } else {
                            if (v.size == "large") {
                                s = "64";
                            }
                        }
                        var t = txt = txt2 = ieQ = "";
                        if (v.name) {
                            if (document.compatMode == "BackCompat" && _a.bro.msi) {
                                ieQ = "onclick=\"window.open(" + v.href + "?prsrc=3)\"";
                            }
                            t = "cursor:default;display:inline-block;text-decoration:none;color:#333;font:13px/16px arial,sans-serif;" + ((v.size == "large") ? "text-align:center;white-space:nowrap;" : "");
                            if (v.size == "large") {
                                txt2 = "<br/><span style=\"font-weight:bold;\">" + v.name + "</span><br/><span> on Google+ </span>";
                            } else {
                                txt = "<span style=\"display:inline-block;font-weight:bold;vertical-align:top;margin-right:5px;" + ((v.size == "medium") ? "margin-top:8px;" : "") + "\">" + v.name + "</span><span style=\"display:inline-block;vertical-align:top; margin-right:" + ((v.size == "medium") ? "15px;margin-top:8px;" : "13px;") + "\">on</span>";
                            }
                        }
                        q.setAttribute("target", "_blank");
                        q.style.textDecoration = "none";
                        q.style.cursor = "default";
                        q.innerHTML = "<span style=\"" + t + "\">" + txt + "<img " + ieQ + " src=\"https://ssl.gstatic.com/images/icons/gplus-" + s + ".png\" alt=\"" + q.title + "\" style=\"border:0;width:" + s + "px;height:" + s + "px;cursor:pointer;\" onmouseover=\"this.style.opacity=0.8;this.style.filter='alpha(opacity=80)';\" onmouseout=\"this.style.opacity=1.0;this.style.filter='alpha(opacity=100)';\">" + txt2 + "</span>";
                        q.noh = q.ost = 1;
                        q.onclick = function(y) {
                            if (!y) {
                                var y = window.event;
                            }
                            var A = y.originalTarget || y.relatedTarget || y.toElement || y.srcElement,
                                z = "";
                            if (!A) {
                                return;
                            }
                            while (A.nodeName != "A") {
                                A = A.parentNode;
                            }
                            z = ((A.attributes || {})["g:plusone:href"] || {}).value || window.location.href;
                            w.open(z + "?prsrc=3");
                            _a.share.track("google_plusone_badge", 1, v, config);
                            return false;
                        };
                    }
                    q.onmouseover = function() {
                        this.className = (this.className.indexOf("at300bo") > -1) ? this.className : this.className.replace(/at300b/i, "at300bo");
                    };
                    q.noh = q.ost = 1;
                }
                e.share = e.share || {};
                e.share.register({
                    google_plusone: j,
                    googleplus_counter: j,
                    google_plusone_badge: l
                });
                e.share.registerSubscriber(c);
                e.share.registerListeners({
                    google_plusone: {
                        onclick: function(d) {
                            return false;
                        }
                    }
                });
                e.share.goog = {
                    plusone: j,
                    badge: l,
                    has: i,
                    sub: c
                };
            })(_a, _a.api, _a);
            (function(a, e, b) {
                var f = document;

                function c(g, d) {
                    var h = function(j) {
                        if ((typeof window.Intent === "undefined" && typeof window.WebKitIntent === "undefined") || (!window.navigator || (typeof window.navigator.startActivity === "undefined" && typeof window.navigator.webkitStartActivity === "undefined"))) {
                            return false;
                        }
                        if (!window.Intent || (typeof window.Intent["native"] !== "undefined" && !window.Intent["native"])) {
                            return true;
                        }
                        if (_a.bro.chr) {
                            var l = navigator.userAgent;
                            var k = /Chrome\/(.*)\./.exec(l);
                            if (k.length >= 1) {
                                var i = parseInt(k[1].substring(0, 2));
                                if (i < 19) {
                                    var m = function() {
                                        if (typeof addthis_config === "undefined") {
                                            return false;
                                        }
                                        if (typeof addthis_config.webintents === "undefined") {
                                            return false;
                                        }
                                        if (!addthis_config.webintents) {
                                            return false;
                                        }
                                        return true;
                                    };
                                    return (m());
                                }
                            }
                        }
                        return true;
                    };
                    if (!h()) {
                        return;
                    }
                    options.noevents = true;
                    g.onclick = function(k) {
                        var i = window.Intent || window.WebKitIntent;
                        var j = new i("https://web.archive.org/web/20200420105550/http://webintents.org/share", "text/uri-list", d.share.url);
                        if (typeof navigator.startActivity !== "undefined") {
                            navigator.startActivity(j);
                        } else {
                            if (typeof navigator.webkitStartActivity !== "undefined") {
                                navigator.webkitStartActivity(j);
                            }
                        }
                        _a.share.track("intent_share_url", 0, d.share, d.conf);
                        return false;
                    };
                }
                a.share = a.share || {};
                a.share.register({
                    intent_share_url: c
                });
                a.share.registerListeners({
                    intent_share_url: {}
                });
            })(_a, _a.api, _a);
            (function(b, e, c) {
                var f = document;

                function a(g, d, h) {
                    if (g.ost) {
                        return;
                    }
                    var j = _parseThirdPartyAttributes(g, "pi:pinit"),
                        l = _a.util.clone(d.share),
                        k;
                    if (addthis_share && addthis_share.passthrough && addthis_share.passthrough.pinterest_share) {
                        k = addthis_share.passthrough.pinterest_share;
                    } else {
                        if (addthis_share && addthis_share.pinterest_share) {
                            k = addthis_share.pinterest_share;
                        } else {
                            if (addthis_share && addthis_share.passthrough) {
                                k = addthis_share.passthrough;
                            } else {
                                if (addthis_share) {
                                    k = addthis_share;
                                } else {
                                    k = {};
                                }
                            }
                        }
                    }
                    if (j.media || j.layout) {
                        j.url = l.url = j.url || k.url || _a.track.mgu(l.url, {
                            defrag: 1
                        });
                        j.url = _euc(_a.track.mgu(l.url));
                        if (j.layout == "horizontal") {
                            j.layout = "&layout=horizontal";
                            j.width = "100px";
                            j.height = "25px";
                        } else {
                            if (j.layout == "vertical") {
                                j.layout = "&layout=vertical";
                                j.width = "49px";
                                j.height = "59px";
                            } else {
                                j.layout = "";
                                j.width = "40px";
                                j.height = "25px";
                            }
                        }
                        g.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + j.width + "; height:" + j.height + ";\"></iframe>";
                        pinitButton = g.firstChild;
                        if (!d.conf.pubid) {
                            d.conf.pubid = addthis_config.pubid || _a.pub();
                        }
                        j.description = l.description = j.description || k.description || k.title || (addthis_share || {}).title || "";
                        pinitButton.src = _atc.rsrcs.pinit + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "url=" + _euc(j.url) + "&media=" + _euc(j.media || k.media || "") + "&description=" + _euc(j.description) + j.layout + "&ats=" + _euc(_a.util.rtoKV(l)) + "&atc=" + _euc(_a.util.rtoKV(addthis_config));
                        _a.ed.addEventListener("addthis.pinterest.image", function(n) {
                            if (!w.addthis_share) {
                                w.addthis_share = {};
                            }
                            if (!w.addthis_share.passthrough) {
                                w.addthis_share.passthrough = {};
                            }
                            if (!w.addthis_share.passthrough.pinterest_share) {
                                w.addthis_share.passthrough.pinterest_share = {};
                            }
                            var m = w.addthis_share.passthrough.pinterest_share;
                            m.pi_media = j.media;
                            m.pi_media_desc = j.description;
                            _a.share.img();
                        });
                    } else {
                        var i = f.createElement("img");
                        g.innerHTML = "<span class=\"at_PinItButton\"></span>";
                        g.onclick = function() {
                            if (!w.addthis_share) {
                                w.addthis_share = {};
                            }
                            if (!w.addthis_share.passthrough) {
                                w.addthis_share.passthrough = {};
                            }
                            if (!w.addthis_share.passthrough.pinterest_share) {
                                w.addthis_share.passthrough.pinterest_share = {};
                            }
                            var m = w.addthis_share.passthrough.pinterest_share;
                            m.pi_media = j.media;
                            m.pi_media_desc = j.description;
                            _a.share.img();
                            return false;
                        };
                    }
                    g.noh = g.ost = 1;
                }
                b.share = b.share || {};
                b.share.register({
                    pinterest: a,
                    pinterest_count: a,
                    pinterest_pinit: a
                });
                b.share.registerListeners({
                    pinterest_share: {
                        onclick: function(g) {
                            var h = g.el;
                            if (_atc.ver >= 300) {
                                var d = _a.util.clone(h.config || addthis_config);
                                d.ui_pane = "image";
                                d.image_service = "pinterest_share";
                                d.image_header = "Pin It on Pinterest";
                                window.addthis.menu(h, d, h.share || addthis_share);
                            } else {
                                _a.share.imgVer("pinterest_share");
                            }
                            return false;
                        }
                    }
                });
                b.share.pinterest = {
                    pinit: a
                };
            })(_a, _a.api, _a);
            (function(f, g, h, e) {
                var i = document;

                function a(n, l, q) {
                    if (n.ost) {
                        return;
                    }
                    var m = _a.util.clone(l.share),
                        k = {
                            type: "webpage",
                            url: l.share.url,
                            title: l.share.title,
                            style: "number"
                        },
                        r = _parseThirdPartyAttributes(n, "wb:like"),
                        p = j(),
                        o = c(r, p),
                        d = c(k, p);
                    meta_tags = _a.util.extend(d, o), wb_elem = i.createElement("wb:like");
                    if (_a.bro.ie6 || _a.bro.ie7 || _a.bro.ie8 || (_a.bro.msi && document.compatMode == "BackCompat")) {
                        n.parentNode.insertBefore(wb_elem, n.nextSibling);
                    } else {
                        n.appendChild(wb_elem);
                    }
                    b(wb_elem, meta_tags);
                    _a.ajs("//web.archive.org/web/20200420105550/https://tjs.sjs.sinajs.cn/open/api/js/wb.js", 1);
                    if (!l.conf.pubid) {
                        l.conf.pubid = addthis_config.pubid || _a.pub();
                    }
                    n.onclick = function() {
                        _a.share.track("sinaweibo_like", 0, l.share, l.conf);
                    };
                    n.noh = n.ost = 1;
                }

                function j() {
                    var o = i.getElementsByTagName("meta"),
                        d = {},
                        p, k, n, m;
                    for (var l = 0; l < o.length; l++) {
                        m = o[l];
                        p = m.getAttribute("property");
                        k = m.getAttribute("name");
                        n = m.getAttribute("content");
                        if (p && (p.indexOf("og:") !== -1 && n)) {
                            d[p.replace("og:", "")] = n;
                        } else {
                            if (p && (p.indexOf("weibo:", "") !== -1) && n) {
                                d[p.replace("weibo:", "")] = n;
                            } else {
                                if (k && (k.indexOf("weibo:") !== -1 && n)) {
                                    d[k.replace("weibo:", "")] = n;
                                }
                            }
                        }
                    }
                    return d;
                }

                function b(d, m) {
                    var l, n, k;
                    for (var n in m) {
                        if (m.hasOwnProperty(n)) {
                            l = m[n];
                            if (l) {
                                if (n === "style" && l !== "full") {
                                    d.setAttribute("type", l);
                                } else {
                                    if (n === "skin" || n === "language") {
                                        d.setAttribute(n, l);
                                    } else {
                                        k = document.createElement("meta");
                                        k.setAttribute("name", "weibo:" + n);
                                        k.setAttribute("content", l);
                                        document.getElementsByTagName("head")[0].appendChild(k);
                                    }
                                }
                            }
                        }
                    }
                }

                function c(k, l) {
                    var d = {},
                        m;
                    for (m in k) {
                        if (k.hasOwnProperty(m)) {
                            if (l[m] === e) {
                                d[m] = k[m];
                            }
                        }
                    }
                    return d;
                }
                f.share = f.share || {};
                f.share.register({
                    sinaweibo_like: a
                });
                f.share.sinaweibo = {
                    like: a
                };
            })(_a, _a.api, _a);
            (function(a, c, b) {
                var e = document;
                a.share = a.share || {};
                a.share.registerListeners({
                    thefancy: {
                        onclick: function(f) {
                            var g = f.el;
                            if (_a.ver() >= 300) {
                                var d = _a.util.clone(g.config || addthis_config);
                                d.ui_pane = "image";
                                d.image_service = "thefancy";
                                d.image_header = "Fancy It";
                                window.addthis.menu(g, d, g.share || addthis_share);
                            } else {
                                _a.share.imgVer("thefancy");
                            }
                            return false;
                        }
                    }
                });
            })(_a, _a.api, _a);
            (function(b, c, h) {
                var i = document,
                    f = 0,
                    m = 0,
                    a = 0;

                function k() {
                    return (window.twttr && window.twttr.events);
                }

                function g(d) {
                    if (k() && f == 1) {
                        e();
                        f = a = 0;
                        return;
                    } else {
                        if (!f) {
                            _a.ajs("//web.archive.org/web/20200420105550/https://platform.twitter.com/widgets.js", 1, null, null, null, true);
                            f = 1;
                        }
                    }
                    if (a < 3) {
                        setTimeout(g, 3000 + 1000 * 2 * (a++));
                    }
                }

                function e(d) {
                    if (window.twttr && !m && twttr.events) {
                        m = 1;
                        twttr.events.bind("click", function(s) {
                            if (s.region == "tweetcount") {
                                return;
                            }
                            if (((s.target || {}).conf || {}).follow) {
                                return false;
                            }
                            var r = (s.target.parentNode && s.target.parentNode.share) ? s.target.parentNode.share : {},
                                p = r.url || s.target.baseURI,
                                t = r.title || addthis_share.title,
                                n = {};
                            for (var o in addthis_share) {
                                n[o] = addthis_share[o];
                            }
                            for (var o in r) {
                                n[o] = r[o];
                            }
                            n.url = p;
                            if (t) {
                                n.title = t;
                            }
                            var q = (s.region == "follow" || s.region == "following") ? false : true;
                            _a.share.track(((q) ? "tweet" : "twitter_follow_native"), ((q) ? 0 : 1), n, addthis_config);
                        });
                    }
                }

                function j(u, r, y) {
                    if (u.ost) {
                        return;
                    }
                    var v = _parseThirdPartyAttributes(u, "tw"),
                        z = r.share,
                        s = v.width || 56,
                        o = v.height || 20,
                        t, B = "",
                        q;
                    r.share.url_transforms = r.share.url_transforms || {};
                    r.share.url_transforms.defrag = 1;
                    var n = _a.util.clone(r.share),
                        p = ((_a.bro.msi && i.compatMode == "BackCompat") || r.conf.ui_use_tweet_iframe || (r.share.url_transforms.shorten || {}).twitter == "bitly") ? true : false;
                    if (typeof v.url != "undefined") {
                        n.url = v.url;
                    } else {
                        n.url = v.url = _a.track.mgu((n.url || (addthis_share || {}).url), n.url_transforms, n, "twitter");
                    }
                    if (!v.counturl) {
                        v.counturl = (p) ? v.url.replace(/=/g, "%253D") : v.url;
                    }
                    if (n.url.search(/\.+.*(\/|\?)/) == -1) {
                        n.url += "/";
                    }
                    v.url = _a.share.acb("twitter", n, addthis_config);
                    v.count = v.count || "horizontal";
                    z.passthrough = z.passthrough || {};
                    var A = z.passthrough.twitter || {};
                    r.text = v.text = v.text || ((r.share.title == i.title) ? A.text : r.share.title) || "";
                    r.related = v.related = v.related || A.related || "";
                    r.hashtags = v.hashtags = v.hashtags || A.hashtags || "";
                    if (v.via || A.via || (r.text.match(/via\s+@[a-zA-Z0-9_\.]+/i))) {
                        r.via = v.via = v.via || A.via || (r.text.match(/via\s+@[a-zA-Z0-9_\.]+/i) ? r.text.match(/via\s+@[a-zA-Z0-9_\.]+/i).split("@")[1] : "");
                    }
                    B = _a.util.rtoKV(z, "#@!");
                    if (v.count === "vertical") {
                        o = 62;
                        v.height = v.height || o;
                    } else {
                        if (v.count === "horizontal") {
                            s = 110;
                            v.width = v.width || s;
                        }
                    }
                    if (v.width) {
                        s = v.width;
                    }
                    if (v.height) {
                        o = v.height;
                    }
                    t = _a.util.toKV(v, "#@!");
                    if (p) {
                        u.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + s + "px; height:" + o + "px;\"></iframe>";
                        q = u.firstChild;
                        if (!r.conf.pubid) {
                            r.conf.pubid = addthis_config.pubid || _a.pub();
                        }
                        q.src = _atc.rsrcs.tweet + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "href=" + _euc(v.url) + "&dr=" + _euc(_a.dr) + "&conf=" + _euc(_a.util.toKV(r.conf)) + "&share=" + _euc(B) + "&tw=" + _euc(t);
                    } else {
                        var x = (z.templates || {}).twitter || "";
                        if (!v.text) {
                            v.text = z.title == "" ? "" : z.title + ":";
                        }
                        var w = i.ce("a");
                        w.href = "https://web.archive.org/web/20200420105550/http://twitter.com/share";
                        w.className = "twitter-share-button";
                        w.innerHTML = "Tweet";
                        for (var d in v) {
                            if (v.hasOwnProperty(d)) {
                                w.setAttribute("data-" + d, v[d]);
                            }
                        }
                        u.appendChild(w);
                        if (!r.conf.pubid) {
                            r.conf.pubid = addthis_config.pubid || _a.pub();
                        }
                        g(u);
                    }
                    u.noh = u.ost = 1;
                }

                function l(o, n) {
                    var q = _parseThirdPartyAttributes(o, "tf"),
                        d = _parseThirdPartyAttributes(o, "tw"),
                        p = document.ce("a");
                    q.screen_name = d.screen_name || q.screen_name || "addthis";
                    p.href = "https://web.archive.org/web/20200420105550/http://twitter.com/" + q.screen_name;
                    p.className = "twitter-follow-button";
                    p.innerHTML = "Follow @" + q.screen_name;
                    _a.util.each(q, function(s, r) {
                        p.setAttribute("data-" + s, r);
                    });
                    _a.util.each(d, function(s, r) {
                        p.setAttribute("data-" + s, r);
                    });
                    o.ost = 1;
                    o.appendChild(p);
                    if (!n.conf.pubid) {
                        n.conf.pubid = addthis_config.pubid || _a.pub();
                    }
                    g(o);
                }
                b.share = b.share || {};
                b.share.register({
                    tweet: j,
                    twitter_follow_native: l
                });
                b.share.registerSubscriber(e);
                b.share.registerListeners({
                    twitter: {
                        _after: function(d) {
                            d.ins = 1;
                            d.noh = 1;
                        },
                        onclick: function(n) {
                            var p = n.el,
                                d = n.service;
                            if (p.ins != 0 && window.addthis.auth && window.addthis.auth.twishare) {
                                window.addthis.auth.lockiframe[d] = true;
                                window.addthis.auth.loadIframe(p, d, p.share, p.conf);
                            } else {
                                return _a.share.pts(p.share, p.conf);
                            }
                        },
                        onmouseover: function(n) {
                            var p = n.el,
                                d = n.service;
                            if (p.ins != 0 && window.addthis.auth && window.addthis.auth.twishare) {
                                window.addthis.auth.keepiframe[d]++;
                                window.addthis.auth.loadIframe(p, d, p.share, p.conf);
                            }
                        },
                        onmouseout: function(n) {
                            var p = n.el,
                                d = n.service;
                            if (p.ins != 0 && window.addthis.auth && window.addthis.auth.twishare) {
                                window.addthis.auth.keepiframe[d]--;
                                setTimeout(function() {
                                    window.addthis.auth.hideIframe(d);
                                }, 1000);
                            }
                        }
                    }
                });
                b.share.twitter = {
                    tweet: j,
                    follow: l,
                    sub: e
                };
            })(_a, _a.api, _a);
            (function(h, i, k) {
                var l = document;

                function g(p, o, q) {
                    if (p.ost || _a.bro.ie6) {
                        return;
                    }
                    var d = _parseThirdPartyAttributes(p, "su:badge"),
                        t = d.style || "1",
                        u = o.share.url = d.href || _a.track.mgu(o.share.url, {
                            defrag: 1
                        }),
                        s = d.height || "20px",
                        r = d.width || "75px";
                    if (t == "5") {
                        s = d.height || "60px";
                    } else {
                        if (t == "6") {
                            s = d.height || "31px";
                        }
                    }
                    p.innerHTML = "<iframe src=\"http" + (_a.ssl ? "s" : "") + "://www.stumbleupon.com/badge/embed/{{STYLE}}/?url={{URL}}\" scrolling=\"no\" frameborder=\"0\" style=\"border:none; overflow:hidden; width:{{WIDTH}}; height:{{HEIGHT}};\" allowtransparency=\"true\"></iframe>".replace("{{STYLE}}", t).replace("{{URL}}", _euc(u)).replace("{{HEIGHT}}", s).replace("{{WIDTH}}", r);
                    p.noh = p.ost = 1;
                }

                function c(A, y) {
                    if (A.ost) {
                        return;
                    }
                    var o = l.ce("div"),
                        p = "https://web.archive.org/web/20200420105550/http://userapi.com/js/api/openapi.js?52",
                        s = y.share.url.replace(/#.*$/, ""),
                        v = y.share.title,
                        d = y.share.description,
                        r = _parseThirdPartyAttributes(A, "vk"),
                        t = r && (r.apiId || r.apiid),
                        q = {
                            type: "full",
                            pageDescription: d,
                            pageTitle: v,
                            pageUrl: s
                        },
                        z = function() {
                            return w.VK && w.VK.init && w.VK.Widgets && w.VK.Widgets.Like;
                        },
                        u = function(B) {
                            VK.init({
                                apiId: t,
                                onlyWidgets: true
                            });
                            VK.Widgets.Like(B.id, B.configuration);
                        },
                        x = _a.util.bind(function() {
                            u(this);
                        }, o);
                    if (!t) {
                        return;
                    }
                    o.id = "addthis_vk_like" + _a.util.cuid();
                    o.configuration = q;
                    A.appendChild(o);
                    if (z()) {
                        u(o, q);
                    } else {
                        if (!i._vkr) {
                            i._vkr = new _a.resource.Resource("vklike", p, z);
                            i._vkr.load();
                        }
                        i._vkr.addEventListener("load", x);
                    }
                    A.noh = A.ost = 1;
                }

                function j(o, d) {
                    if (o.ost) {
                        return;
                    }
                    var p = _parseThirdPartyAttributes(o, "4sq"),
                        q = document.createElement("a");
                    q.href = "https://web.archive.org/web/20200420105550/https://foursquare.com/intent/venue.html";
                    q.className = "fourSq-widget";
                    if (p["data-variant"]) {
                        q.setAttribute("data-variant", p["data-variant"]);
                    }
                    o.appendChild(q);
                    _a.ajs("//web.archive.org/web/20200420105550/https://platform.foursquare.com/js/widgets.js", 1);
                    o.noh = o.ost = 1;
                }

                function f(o, d) {
                    if (o.ost) {
                        return;
                    }
                    var r = _parseThirdPartyAttributes(o, "rk:healthy"),
                        q = l.createElement("div"),
                        p = new _a.resource.Resource("runkeeperjs", "//web.archive.org/web/20200420105550/https://runkeeper.com/static/js/healthy/rkHealthyButton.js");
                    q.className = "rk-healthy";
                    q.setAttribute("data-healthyUrl", (r.url || d.share.url || window.location.href));
                    q.setAttribute("data-buttonType", (r.type || "normal"));
                    o.appendChild(q);
                    o.noh = o.ost = 1;
                    p.load();
                }

                function e(o, d) {
                    if (_a.bro.ie9 && _a.ver() < 300) {
                        return;
                    }
                    o.title = "Permalink";
                }

                function m(o, d) {
                    if (o.ost) {
                        return;
                    }
                    var r = _parseThirdPartyAttributes(o, "svejo:"),
                        q = document.ce("div"),
                        p = new _a.resource.Resource("svejojs", "//web.archive.org/web/20200420105550/https://svejo.net/button.js", function() {
                            return !!window.load_svejo_buttons;
                        });
                    p.addEventListener("load", function() {
                        window.load_svejo_buttons();
                    });
                    q.className = "svejo-button";
                    r.href = d.share.url = r.href || _a.track.mgu(d.share.url, {
                        defrag: 1
                    });
                    r.size = r.size || (check32(o, true) ? "standard" : "compact");
                    _a.util.each(r, function(t, s) {
                        q.setAttribute("data-" + t, s);
                    });
                    o.appendChild(q);
                    o.noh = o.ost = 1;
                    p.load();
                }

                function b(r, p) {
                    if (r.ost) {
                        return;
                    }
                    var d = _parseThirdPartyAttributes(r, "li"),
                        u = p.share,
                        s = d.width || 100,
                        o = d.height || 18,
                        q, v = "",
                        t;
                    if (!d.counter) {
                        d.counter = "horizontal";
                    }
                    if (!u.passthrough) {
                        u.passthrough = {};
                    }
                    u.passthrough.linkedin = _a.util.toKV(d);
                    v = _a.util.rtoKV(u);
                    if (d.counter === "top") {
                        o = 55;
                        s = 57;
                        if (!d.height) {
                            d.height = o;
                        }
                        if (!d.width) {
                            d.width = s;
                        }
                    } else {
                        if (d.counter === "right") {
                            s = 100;
                            if (!d.width) {
                                d.width = s;
                            }
                        } else {
                            if (d.counter === "none") {
                                s = 57;
                                if (!d.width) {
                                    d.width = s;
                                }
                            }
                        }
                    }
                    if (d.width) {
                        s = d.width;
                    }
                    if (d.height) {
                        o = d.height;
                    }
                    q = _a.util.toKV(d), r.innerHTML = "<iframe frameborder=\"0\" role=\"presentation\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + " style=\"width:" + s + "px; height:" + o + "px;\"></iframe>";
                    t = r.firstChild;
                    if (!p.conf.pubid) {
                        p.conf.pubid = addthis_config.pubid || _a.pub();
                    }
                    t.src = _atc.rsrcs.linkedin + ((_a.bro.ie6 || _a.bro.ie7) ? "?" : "#") + "href=" + _euc(p.share.url) + "&dr=" + _euc(_a.dr) + "&conf=" + _euc(_a.util.toKV(p.conf)) + "&share=" + _euc(v) + "&li=" + _euc(q);
                    r.noh = r.ost = 1;
                }

                function n(s, q) {
                    var r = _parseThirdPartyAttributes(s, "am:wishlist"),
                        v = q.share.url = r.url = r.url || _a.track.mgu(q.share.url, {
                            defrag: 1
                        }),
                        p = l.ce("div"),
                        t = l.ce("div"),
                        d = l.ce("div"),
                        u = l.ce("div"),
                        o = addthis_config || {};
                    o.hdl = 1;
                    if (!r.id) {
                        r.id = Math.floor(Math.random() * 10000);
                    }
                    p.style.display = t.style.display = d.style.display = u.style.display = "none";
                    p.id = "AUWLBkURL." + r.id;
                    p.innerHTML = r.url = _a.share.acb("amazonwishlist_native", q.share, o);
                    t.id = "AUWLBkPrice." + r.id;
                    t.innerHTML = r.price;
                    d.id = "AUWLBkTitle." + r.id;
                    d.innerHTML = r.title;
                    u.id = "AUWLBkImage." + r.id;
                    u.innerHTML = r.img || "";
                    s.appendChild(p);
                    if (r.price) {
                        s.appendChild(t);
                    }
                    if (r.title) {
                        s.appendChild(d);
                    }
                    s.appendChild(u);
                    _a.ajs("https://web.archive.org/web/20200420105550/http://www.amazon.com/wishlist/bookmarklet/getbutton.js?name=" + r.id + "&image=" + (r.style || "2"), 1, "1", "AddToAUWLButton." + r.id, s);
                    s.onclick = function() {
                        _a.share.track("amazonwishlist_native", 0, r, o);
                    };
                    s.noh = s.ost = 1;
                }

                function a(o, d) {
                    if (o.className.indexOf("chiclet_style") != -1) {
                        throw new Error("just do a chiclet");
                    }
                    if (o.ost) {
                        return;
                    }
                    var s = _parseThirdPartyAttributes(o, "tm"),
                        r = 50,
                        q = 61;
                    passthrough = _a.util.toKV(s);
                    if (s.style === "compact") {
                        r = 95;
                        q = 25;
                    }
                    o.innerHTML = "<iframe frameborder=\"0\" width=\"" + r + "\" height=\"" + q + "\" scrolling=\"no\" allowTransparency=\"true\" scrollbars=\"no\"" + (_a.bro.ie6 ? " src=\"javascript:''\"" : "") + "></iframe>";
                    var p = o.firstChild;
                    p.src = "//web.archive.org/web/20200420105550/https://api.tweetmeme.com/button.js?url=" + _euc(d.share.url) + "&" + passthrough;
                    o.noh = o.ost = 1;
                }
                h.share = h.share || {};
                h.share.register({
                    foursquare: j,
                    svejo_counter: m,
                    linkedin_counter: b,
                    runkeeper_healthy: f,
                    stumbleupon_badge: g,
                    tweetmeme: a,
                    vk_like: c
                });
                h.share.registerListeners({
                    more: {
                        require: function(o, p, d) {
                            return !p.noh && _a.ver() >= 300 && !_a.bro.iph && !_a.bro.wph && !_a.bro.dro;
                        },
                        onclick: function(d) {
                            var p = d.el || {};
                            window.addthis.menu(p, p.conf, p.share);
                            return false;
                        }
                    },
                    email: {
                        require: function(o, p, d) {
                            return !p.noh && _a.ver() >= 300 && !_a.bro.iph && !_a.bro.wph && !_a.bro.dro;
                        },
                        onclick: function(q) {
                            var r = q.el || {},
                                p = q.service,
                                d = _a.util.clone(r.conf);
                            d.ui_pane = p;
                            if (document.location.href.search(/bookmark\.php/) == -1) {
                                window.addthis.menu(r, d, r.share);
                            } else {
                                window.location = _a.share.genurl(p, 0, r.share, r.conf);
                            }
                            return false;
                        }
                    },
                    foursquare: {
                        onclick: function(p) {
                            var q = p.el || {},
                                d = p.service;
                            _a.share.track(d, 1, q.share, q.conf);
                            return false;
                        }
                    },
                    link: {
                        onclick: function(r) {
                            var s = r.el || {},
                                p = r.service,
                                d = _euc((s.share || {}).url || addthis_share.url);
                            if (_a.ver() >= 300) {
                                var q = _a.util.clone(s.config || addthis_config);
                                q.ui_pane = "link";
                                window.addthis.menu(s, q, s.share || addthis_share);
                            } else {
                                addthis_open(document.body, "link", d);
                                if (document.getElementById("at16p")) {
                                    document.getElementById("at16p").style.display = "block";
                                }
                                if (document.getElementById("at15s")) {
                                    document.getElementById("at15s").style.display = "none";
                                }
                            }
                            return false;
                        }
                    }
                });
            })(_a, _a.api, _a);
            (function(f, g, k) {
                function a() {
                    try {
                        if (_a.ver() >= 300) {
                            return (l.href.search(/bookmark\d+\.html/i) != -1);
                        }
                        return l.href.search(/addthis\.com\/static\/r07\/bookmark\d+\.html/i) != -1;
                    } catch (o) {
                        return 0;
                    }
                }
                var m = {
                        pinterest_share: {
                            img_service: "pinterest_share",
                            img_header: "Pin It to Pinterest",
                            img_base_url: "//web.archive.org/web/20200420105550/https://pinterest.com/pin/create/button/",
                            img_param: "media=",
                            ctype: "",
                            windowProps: {
                                height: "335",
                                width: "750"
                            }
                        },
                        pinterest: {
                            img_service: "pinterest",
                            img_header: "Pin It to Pinterest",
                            img_base_url: "//web.archive.org/web/20200420105550/https://pinterest.com/pin/create/button/",
                            img_param: "media=",
                            ctype: "",
                            windowProps: {
                                height: "335",
                                width: "750"
                            }
                        },
                        thefancy: {
                            img_service: "thefancy",
                            img_header: "Add to Fancy",
                            img_base_url: "//web.archive.org/web/20200420105550/https://thefancy.com/offer.html",
                            img_param: "imageurl=",
                            ctype: "&ctype=image",
                            windowProps: {
                                height: "500",
                                width: "700"
                            }
                        }
                    },
                    j = document.body;

                function b(t, Y, Z) {
                    var t = typeof t == "undefined" ? "pinterest_share" : t,
                        V = d.getElementById("atImgBox_" + t),
                        o = d.getElementById("at16pccImg"),
                        H = m[t] || m.pinterest_share,
                        U = (t.indexOf("pinterest") !== -1) ? true : false;
                    Y = a() ? (Y || w.addthis_media_msg) : Y;
                    if (V && !Y) {
                        if (a()) {
                            e("main");
                            e("filter");
                            e("details");
                            V.style.display = "block";
                        } else {
                            V.style.display = "block";
                            if (o) {
                                o.style.height = "100%";
                            }
                        }
                    } else {
                        var z = _a.util.gebcn(j, "DIV", "atPinWin", true, true);
                        for (var P in z) {
                            if (z[P].style) {
                                z[P].style.display = "none";
                            }
                        }
                        var s = d.getElementById("atImgBox_" + t) || d.createElement("div"),
                            Q = w.addthis_media_msg || null,
                            u = Q || Y || (n() || "").split(";"),
                            p = new Array(),
                            E, r = new Array(),
                            R = d.createElement("div"),
                            C = d.createElement("div"),
                            B = d.createElement("span"),
                            F = d.createElement("span"),
                            O = (((w.addthis_share_msg || w.addthis_share || {}).passthrough || {}).pinterest_share || {}).media,
                            K = false,
                            G = a() ? "3" : "",
                            y = a() ? "15" : 0;
                        if ((s.innerHTML || "").search(/at3/) != -1) {
                            s.innerHTML = "";
                        }
                        if (_a.ver() >= 300 && a() && Q) {
                            Y = Q;
                        }
                        if (Z) {
                            u.push(Z);
                        }
                        for (var T in u) {
                            if (typeof u[T].split !== "function") {
                                continue;
                            }
                            var W = (u[T] || "").split("!|");
                            if (!W[0] || typeof W[0] == "undefined") {
                                continue;
                            }
                            if (U && W.length > 2) {
                                if (W[1] !== "?" && W[2] !== "?") {
                                    if (parseInt(W[1], 10) * parseInt(W[2], 10) < 20000) {
                                        continue;
                                    }
                                }
                            }
                            p.push({
                                src: unescape(W[0]),
                                offsetHeight: W[1],
                                offsetWidth: W[2],
                                alt: W[3],
                                og: W[4]
                            });
                        }
                        if (!o && !Y && _a.ver() < 300) {
                            o = d.createElement("div");
                            o.id = "at16pccImg";
                            d.body.appendChild(o);
                            if (_a.bro.msi && d.compatMode.toLowerCase() == "backcompat") {
                                o.style.position = "absolute";
                            }
                        } else {
                            if (o && o.style) {
                                o.style.height = "100%";
                            }
                        }
                        R.className = "atPinHdr";
                        B.innerHTML = "<span style=\"cursor:default\" class=\"atImgIco at300bs at15nc at15t_" + (t) + "\"></span><span class=\"atImgMsg\">" + H.img_header + "</span>";
                        B.className = "atPinHdrMsg";
                        R.appendChild(B);
                        F.innerHTML = "X";
                        F.className = "atPinClose";
                        F.onclick = function() {
                            d.getElementById("atImgBox_" + t).style.display = "none";
                            o.style.height = "0";
                        };
                        R.appendChild(F);
                        s.appendChild(R);
                        var J = 0,
                            v = {};
                        for (var T in p) {
                            E = p[T];
                            if (!E || typeof E.src === "undefined") {
                                continue;
                            }
                            var I = d.createElement("img"),
                                L = d.createElement("span"),
                                q = d.createElement("span"),
                                A = d.createElement("span"),
                                X = d.createElement("div"),
                                N = 4;
                            I.alt = I.title = E.alt;
                            if (_a.ver() >= 300) {
                                X.className = "atImgActBtn  at300bs at15nc at15t_" + t;
                            }
                            X.style.display = "none";
                            X.onmouseover = function() {
                                (this.style || {}).opacity = "1";
                            };
                            I.src = E.src;
                            J++;
                            v = E;
                            if (isNaN(E.offsetHeight) || isNaN(E.offsetWidth)) {
                                I.height = 200 - y;
                            } else {
                                N = Math.min((E.offsetHeight / (205 - y)), (E.offsetWidth / (205 - y)));
                                I.height = E.offsetHeight / N;
                                I.width = E.offsetWidth / N;
                                I.style.marginTop = I.height > (202 - y) ? (-(I.height - (200 - y)) / 2) + "px" : 0 + "px";
                                I.style.marginLeft = I.width > (202 - y) ? (-(I.width - (200 - y)) / 2) + "px" : 0 + "px";
                            }
                            A.innerHTML = (E.og) ? "Preferred Image" : E.offsetHeight + " x " + E.offsetWidth;
                            q.className = "atImgSpanInner";
                            L.className = "at" + G + "ImgSpanOuter addthis_32x32_style";
                            A.className = "atImgSpanSize";
                            q.appendChild(I);
                            q.appendChild(X);
                            L.appendChild(q);
                            L.appendChild(A);
                            L.onmouseover = function(x) {
                                this.getElementsByTagName("div")[0].style.display = "block";
                                this.getElementsByTagName("img")[0].style.opacity = ("0.4");
                                this.getElementsByTagName("img")[0].style.filter = "alpha(opacity=40)";
                            };
                            L.onmouseout = function(x) {
                                this.getElementsByTagName("div")[0].style.display = "none";
                                this.getElementsByTagName("img")[0].style.opacity = ("1");
                                this.getElementsByTagName("img")[0].style.filter = "alpha(opacity=100)";
                            };
                            I.onclick = X.onclick = function() {
                                var x = _a.util.clone(Y ? addthis_share_msg : (g.share || w.addthis_share || {}));
                                g.config = g.config || w.addthis_config || {};
                                x.passthrough = x.passthrough || {};
                                x.passthrough.pinterest_share = {
                                    media: this.parentNode.getElementsByTagName("img")[0].src,
                                    description: (this.title || this.alt || x.description || x.title || this.parentNode.getElementsByTagName("img")[0].src.split("/").pop() || "")
                                };
                                if (Y) {
                                    x.url = _euc(x.url);
                                    if (_a.ver() >= 300) {
                                        _a.share.track((U ? "pinterest_share" : t), 0, x, addthis_config, this);
                                        h({
                                            windowUrl: H.img_base_url + "?" + H.img_param + _euc(x.passthrough.pinterest_share.media) + "&url=" + x.url + "&description=" + _euc(x.passthrough.pinterest_share.description) + H.ctype,
                                            width: H.windowProps.width,
                                            height: H.windowProps.height
                                        }, H.img_service);
                                    } else {
                                        w.location = f.share.genurl(t, 0, x, g.config);
                                    }
                                } else {
                                    x.url = _euc(x.url);
                                    _a.share.track((U ? "pinterest_share" : t), 0, w.addthis_share, w.addthis_config, this);
                                    h({
                                        windowUrl: H.img_base_url + "?" + H.img_param + _euc(x.passthrough.pinterest_share.media) + "&url=" + x.url + "&description=" + _euc(x.passthrough.pinterest_share.description) + H.ctype,
                                        width: H.windowProps.width,
                                        height: H.windowProps.height
                                    }, H.img_service);
                                    d.getElementById("atImgBox_" + t).style.display = "none";
                                    o.style.height = "0";
                                    return false;
                                }
                            };
                            if (_a.bro.msi && document.compatMode.toLowerCase() == "backcompat") {
                                L.style.margin = "5px";
                            }
                            C.appendChild(L);
                        }
                        if (J == 0) {
                            var D = d.createElement("span");
                            D.className = "atNoImg";
                            D.innerHTML = "There are no valid images to share.";
                            C.appendChild(D);
                        }
                        if (J == 1 && !a()) {
                            var S = _a.util.clone(a() ? addthis_share_msg : (g.share || w.addthis_share || {}));
                            S.url = _euc(S.url);
                            g.config = g.config || addthis_config || {};
                            S.passthrough = S.passthrough || {};
                            S.passthrough.pinterest_share = {
                                media: v.src,
                                description: (S.title || v.src.split("/").pop() || "")
                            };
                            if (_a.ver() >= 300 && _a.share.inBm()) {
                                _a.share.notify((U ? "pinterest_share" : t), S, addthis_config_msg, this);
                                h({
                                    windowUrl: H.img_base_url + "?" + H.img_param + _euc(S.passthrough.pinterest_share.media) + "&url=" + S.url + "&description=" + _euc(S.passthrough.pinterest_share.description) + H.ctype,
                                    width: H.windowProps.width,
                                    height: H.windowProps.height
                                }, H.img_service);
                                return false;
                            } else {
                                h({
                                    windowUrl: H.img_base_url + "?" + H.img_param + _euc(S.passthrough.pinterest_share.media) + "&url=" + S.url + "&description=" + _euc(S.passthrough.pinterest_share.description) + H.ctype,
                                    width: H.windowProps.width,
                                    height: H.windowProps.height
                                }, H.img_service);
                                ((d.getElementById("atImgBox_" + t) || {}).style || {}).display = "none";
                                if (_a.ver() < 300) {
                                    o.style.height = "0";
                                }
                                return false;
                            }
                        }
                        if (_a.ver() >= 300 && !a()) {
                            var M = _a.util.clone(w.addthis_config);
                            M.ui_pane = "image";
                            M.image_service = (U ? "pinterest" : t);
                            M.image_header = H.img_header;
                            if (!(f.menu || {}).open) {
                                w.addthis.menu((_a.maf && _a.maf.sib), M, w.addthis_share);
                            } else {
                                f.menu.open((_a.maf && _a.maf.sib), M, w.addthis_share);
                            }
                            return;
                        }
                        if (Y) {
                            C.lastChild.style.marginBottom = "40px";
                        }
                        s.appendChild(C);
                        if (!a()) {
                            if (_a.bro.msi && document.compatMode.toLowerCase() == "backcompat" || _a.bro.ie6) {
                                s.style.position = "absolute";
                            }
                            s.className = "atPinBox";
                            C.className = "atPinMn";
                            R.className = "atPinHdr";
                        } else {
                            s.className = s.id = "atPinWin";
                            s.style.display = "block";
                            C.className = "at" + G + "PinWinMn";
                            R.style.display = "none";
                            j.style.margin = "0px";
                            F.style.display = "none";
                            e("filter");
                            e("main");
                            e("details");
                        }
                        s.id = "atImgBox_" + t;
                        if (Y) {
                            if (typeof jQuery != "undefined") {
                                s.style.display = "none";
                                d.body.appendChild(s);
                                $(s).fadeIn();
                            } else {
                                d.body.appendChild(s);
                            }
                        } else {
                            if (!a()) {
                                o.appendChild(s);
                                o.onclick = function(ac) {
                                    if (!ac) {
                                        var ac = w.event || {};
                                    }
                                    if ((ac.target || {}).id != "at16pccImg" && (ac.srcElement || {}).id != "at16pccImg") {
                                        return;
                                    }
                                    var ab = _a.util.gebcn(j, "DIV", "atPinBox", true, true);
                                    for (var aa in ab) {
                                        if (ab[aa].style) {
                                            ab[aa].style.display = "none";
                                        }
                                    }
                                    o.style.height = "0";
                                };
                            }
                        }
                    }
                }

                function e(o) {
                    if (typeof jQuery == "undefined") {
                        ((d.getElementById(o) || {}).style || {}).display = "none";
                    } else {
                        $("#" + o).fadeOut();
                    }
                }

                function n(y, J, x, B) {
                    var C = "",
                        r = new Array(),
                        G = new Array(),
                        H, u = new Array(),
                        s = (((w.addthis_share_msg || w.addthis_share || {}).passthrough || {}).pinterest_share || {}),
                        A = s.media,
                        F = s.description,
                        t = s.pi_media,
                        I = s.pi_media_desc,
                        D = false,
                        z = null,
                        p = typeof x == "string" ? x : (typeof(w.addthis_config || {}).image_include == "string" ? addthis_config.image_include : null),
                        o = typeof B == "string" ? B : (typeof(w.addthis_config || {}).image_exclude == "string" ? addthis_config.image_exclude : null);
                    if (typeof y != "undefined" && y != null) {
                        if (y.search(/^\#/) > -1) {
                            z = (document.getElementById(y.replace(/\#/, "")) || document).getElementsByTagName("img");
                        } else {
                            if (y.search(/^\./) > -1 && typeof J != "undefined") {
                                var q = J,
                                    v = (y || "").replace(".", "");
                                while (q.className != v && q.nodeName.toLowerCase() != "body" && q.parentNode) {
                                    q = q.parentNode;
                                }
                                z = (q || document).getElementsByTagName("img");
                            } else {
                                z = document.getElementsByTagName("img");
                            }
                        }
                    } else {
                        z = document.getElementsByTagName("img");
                    }
                    if (A) {
                        r[A] = true;
                        G.push({
                            url: A,
                            title: F
                        });
                    }
                    if (t) {
                        r[t] = true;
                        G.push({
                            url: t,
                            title: I
                        });
                    }
                    for (var E in z) {
                        if (!z[E] || typeof z[E].src === "undefined") {
                            continue;
                        }
                        if (r[z[E].src]) {
                            if (z[E].src == A || z[E].src == t) {
                                D = true;
                                if (D && (z[E].src == A || z[E].src == t) && ((o && (z[E].className || "").search(o) > -1) || (p && (z[E].className || "").search(p) == -1))) {
                                    continue;
                                }
                                G[0] = z[E];
                            }
                            continue;
                        } else {
                            if (typeof z[E].nodeName == "undefined" || (p && (z[E].className || "").search(p) == -1) || (o && (z[E].className || "").search(o) > -1)) {
                                continue;
                            }
                            G.push(z[E]);
                            r[z[E].src] = true;
                        }
                    }
                    for (var E in G) {
                        if (typeof G.hasOwnProperty !== "undefined" && !G.hasOwnProperty(E)) {
                            continue;
                        }
                        H = G[E];
                        if (typeof H == "object" && H.url) {
                            C += H.url + "!|undefined!|undefined!|" + H.title + "!|true;";
                            continue;
                        }
                        if (!H.src || H.src == "undefined" || !H.offsetHeight || typeof H.offsetHeight == "undefined" || H.offsetHeight == "undefined" || !H.offsetWidth || H.offsetWidth == "undefined" || (parseInt(H.offsetWidth) == 16 && parseInt(H.offsetWidth == 16)) || (parseInt(H.offsetWidth) == 32 && parseInt(H.offsetWidth == 32)) || H.src.search("btn/v2/lg-share-") > -1 || (H.offsetWidth != "?" && H.offsetHeight != "?" && parseInt(H.offsetWidth) < 50 && parseInt(H.offsetWidth) < 50) || !!H.getAttribute("nopin")) {
                            continue;
                        }
                        C += escape(_a.util.rel2abs(H.src)) + "!|" + H.offsetHeight + "!|" + H.offsetWidth + "!|" + (H.alt || H.title) + "!|;";
                    }
                    return (C.replace(/;$/, ""));
                }

                function c(p) {
                    if (_a.ver() >= 300) {
                        var o = _a.util.clone(w.addthis_config);
                        o.ui_pane = "image";
                        o.image_service = p;
                        g.menu(_a.maf.pre, o, w.addthis_share);
                    } else {
                        ((document.getElementById("at16p") || {}).style || {}).display = "none";
                        _a.share.img(p);
                    }
                    return false;
                }

                function i(p) {
                    var r = r || _a.share.media();
                    if (_a.bro.msi) {
                        _a.track.msg("atimg_ie" + r);
                    } else {
                        var q = setInterval(function() {
                                p.postMessage("atimg_more" + r, "*");
                            }, 500),
                            o = setTimeout(function() {
                                clearInterval(q);
                            }, 10000);
                    }
                    return false;
                }

                function h(q, s) {
                    var u = {
                        height: 350,
                        left: 0,
                        location: 0,
                        menubar: 0,
                        resizable: 0,
                        scrollbars: 0,
                        status: 0,
                        width: 700,
                        windowName: null,
                        windowURL: null,
                        top: 0,
                        toolbar: 0
                    };
                    _a.util.mrg(q, u);
                    var p = "height=" + q.height + ",width=" + q.width + ",toolbar=" + q.toolbar + ",scrollbars=" + q.scrollbars + ",status=" + q.status + ",resizable=" + q.resizable + ",location=" + q.location + ",menuBar=" + q.menubar,
                        r = (screen.height - q.height) / 3,
                        t = (screen.width - q.width) / 2,
                        o = window.open(q.windowUrl, q.windowName, p + ",left=" + t + ",top=" + r);
                    if (o) {
                        o.focus();
                    }
                    _a.xf.send(window.parent, "addthis.menu.shareimg", {
                        service: s,
                        type: "share"
                    });
                }
                f.share = f.share || {};
                f.util.extend(f.share, {
                    img: b,
                    media: n,
                    imgVer: c,
                    imgOcw: i,
                    inBm: a
                });
            })(_a, _a.api, _a);
            (function() {
                var a = function() {
                    if (typeof addthis_config === "undefined") {
                        return false;
                    }
                    if (typeof addthis_config.webintents === "undefined") {
                        return false;
                    }
                    if (!addthis_config.webintents) {
                        return false;
                    }
                    return true;
                };
                if (!a()) {
                    return;
                }
                var b = function(d) {
                    if (typeof w.WebKitIntent !== "undefined") {
                        return true;
                    }
                    if ((typeof w.Intent === "undefined" && typeof w.WebKitIntent === "undefined") || (typeof w.navigator.startActivity === "undefined" && typeof w.navigator.webkitStartActivity === "undefined")) {
                        return false;
                    }
                    var f = navigator.userAgent;
                    if (/Chrome\/(.*)\./.test(f)) {
                        var e = /Chrome\/(.*)\./.exec(f);
                        if (e.length >= 1) {
                            var c = parseInt(e[1].substring(0, 2));
                            if (c < 19) {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                catchIntents = function() {
                    if (b()) {
                        return;
                    }
                    w.Intent = function(f, e, d, c) {
                        this.verb = f;
                        this.noun = e;
                        this.data = d;
                    };
                    w.navigator.startActivity = function(d) {
                        if (d.verb === "https://web.archive.org/web/20200420105550/http://webintents.org/share" && d.noun === "text/uri-list") {
                            _6.update("share", "url", d.data);
                            for (var c in d.extras) {
                                _6.update("share", c, d.extras);
                            }
                            var e = "https://web.archive.org/web/20200420105550/http://addthis.com/bookmark.php";
                            e += "?v=300&url=" + encodeURIComponent(d.data);
                            w.open(e, "", "width=700,height=500");
                        }
                    };
                };
                catchIntents();
            })();
            (function(b, c, e) {
                if (!b.services) {
                    b.services = {};
                }
                b.services.refget = function(f) {
                    f = f.split(".").slice(-3).join(".");
                    var g = {
                        "mail.google.com": "gmail",
                        "mail.yahoo.com": "yahoomail",
                        "mail.aol.com": "aolmail",
                        "mail.live.com": "hotmail"
                    };
                    if (g[f]) {
                        return g[f];
                    }
                    f = f.split(".").slice(-2).shift();
                    if (b.services.map[f]) {
                        return f;
                    }
                    return "";
                };
                b.services.map = {
                    facebook: "",
                    twitter: "",
                    reddit: "",
                    stumbleupon: "",
                    gmail: "mail.google.com",
                    blogger: "",
                    linkedin: "",
                    tumblr: "",
                    delicious: "",
                    yahoomail: "compose.mail.yahoo.com",
                    hotmail: "hotmail.msn.com",
                    "100zakladok": "100zakladok.ru",
                    "2tag": "2tag.nl",
                    "2linkme": "",
                    "7live7": "",
                    a1webmarks: "a1-webmarks.com",
                    a97abi: "",
                    addio: "add.io",
                    menu: "api.addthis.com",
                    adfty: "",
                    adifni: "",
                    aerosocial: "",
                    allmyfaves: "",
                    amazonwishlist: "amazon.com",
                    amenme: "",
                    aim: "lifestream.aol.com",
                    aolmail: "webmail.aol.com",
                    armenix: "",
                    arto: "",
                    baang: "baang.ir",
                    baidu: "cang.baidu.com",
                    biggerpockets: "",
                    bitly: "bit.ly",
                    bizsugar: "",
                    bleetbox: "",
                    blinklist: "",
                    bloggy: "bloggy.se",
                    blogmarks: "blogmarks.net",
                    blogtrottr: "",
                    blurpalicious: "",
                    bobrdobr: "bobrdobr.ru",
                    bonzobox: "",
                    socialbookmarkingnet: "social-bookmarking.net",
                    bookmarkycz: "bookmarky.cz",
                    bookmerkende: "bookmerken.de",
                    bordom: "bordom.net",
                    box: "box.net",
                    brainify: "",
                    bryderi: "bryderi.se",
                    buddymarks: "",
                    buzzzy: "",
                    camyoo: "",
                    care2: "",
                    chiq: "",
                    cirip: "cirip.ro",
                    citeulike: "citeulike.org",
                    classicalplace: "",
                    cndig: "cndig.org",
                    colivia: "colivia.de",
                    technerd: "",
                    cosmiq: "cosmiq.de",
                    curateus: "curate.us",
                    designmoo: "",
                    digaculturanet: "digacultura.net",
                    digg: "",
                    diggita: "diggita.it",
                    diglog: "",
                    digo: "digo.it",
                    diigo: "",
                    domelhor: "domelhor.net",
                    dotnetshoutout: "",
                    woscc: "wos.cc",
                    douban: "",
                    draugiem: "draugiem.lv",
                    dropjack: "",
                    dwellicious: "",
                    dzone: "",
                    efactor: "",
                    ekudos: "ekudos.nl",
                    elefantapl: "elefanta.pl",
                    embarkons: "",
                    evernote: "",
                    extraplay: "",
                    ezyspot: "",
                    stylishhome: "",
                    fabulously40: "",
                    informazione: "fai.informazione.it",
                    fark: "",
                    farkinda: "",
                    fashiolista: "",
                    fashionburner: "",
                    favable: "",
                    faves: "",
                    favlogde: "favlog.de",
                    favoritende: "favoriten.de",
                    favoritus: "",
                    financialjuice: "",
                    flaker: "flaker.pl",
                    folkd: "",
                    formspring: "formspring.me",
                    thefreedictionary: "",
                    fresqui: "",
                    friendfeed: "",
                    friendster: "",
                    funp: "",
                    fwisp: "",
                    gabbr: "",
                    gamekicker: "",
                    givealink: "givealink.org",
                    govn: "my.go.vn",
                    goodnoows: "",
                    googletranslate: "translate.google.com",
                    gravee: "",
                    greaterdebater: "",
                    hackernews: "news.ycombinator.com",
                    hatena: "b.hatena.ne.jp",
                    gluvsnap: "healthimize.com",
                    hedgehogs: "hedgehogs.net",
                    historious: "historio.us",
                    hitmarks: "",
                    hotklix: "",
                    hootsuite: "",
                    w3validator: "validator.w3.org",
                    idearef: "",
                    identica: "identi.ca",
                    ihavegot: "",
                    indexor: "indexor.co.uk",
                    instapaper: "",
                    iorbix: "",
                    isociety: "isociety.be",
                    iwiw: "iwiw.hu",
                    jamespot: "",
                    jappy: "jappy.de",
                    jumptags: "",
                    zooloo: "kablog.com",
                    kaboodle: "",
                    kaevur: "",
                    kaixin: "kaixin001.com",
                    kindleit: "fivefilters.org",
                    kirtsy: "",
                    kledy: "kledy.de",
                    kommenting: "",
                    latafaneracat: "latafanera.cat",
                    laaikit: "laaik.it",
                    ladenzeile: "ladenzeile.de",
                    librerio: "",
                    linkagogo: "",
                    linksgutter: "",
                    linkshares: "linkshares.net",
                    linkuj: "linkuj.cz",
                    livejournal: "",
                    lockerblogger: "",
                    logger24: "",
                    mymailru: "connect.mail.ru",
                    markme: "markme.me",
                    margarin: "mar.gar.in",
                    mashbord: "",
                    mawindo: "",
                    meinvz: "meinvz.net",
                    mekusharim: "mekusharim.walla.co.il",
                    memonic: "",
                    memori: "memori.ru",
                    meneame: "meneame.net",
                    myvidster: "",
                    live: "profile.live.com",
                    misterwong: "mister-wong.com",
                    misterwong_de: "mister-wong.de",
                    moemesto: "moemesto.ru",
                    moikrug: "moikrug.ru",
                    mrcnetworkit: "mrcnetwork.it",
                    myspace: "",
                    n4g: "",
                    naszaklasa: "nk.pl",
                    netlog: "",
                    netvibes: "",
                    netvouz: "",
                    newsmeback: "",
                    newstrust: "newstrust.net",
                    newsvine: "",
                    nujij: "nujij.nl",
                    odnoklassniki_ru: "odnoklassniki.ru",
                    oknotizie: "oknotizie.virgilio.it",
                    ongobee: "",
                    openthedoor: "otd.to",
                    orkut: "promote.orkut.com",
                    dashboard: "api.addthis.com",
                    oyyla: "",
                    packg: "",
                    pafnetde: "pafnet.de",
                    pdfonline: "savepageaspdf.pdfonline.com",
                    pdfmyurl: "",
                    phonefavs: "",
                    planypus: "planyp.us",
                    plaxo: "",
                    plurk: "",
                    popedition: "",
                    posteezy: "",
                    printfriendly: "",
                    pusha: "pusha.se",
                    qrfin: "qrf.in",
                    quantcast: "",
                    qzone: "sns.qzone.qq.com",
                    pocket: "getpocket.com",
                    rediff: "share.rediff.com",
                    redkum: "",
                    scoopat: "scoop.at",
                    scoopit: "scoop.it",
                    sekoman: "sekoman.lv",
                    select2gether: "www2.select2gether.com",
                    shaveh: "shaveh.co.il",
                    shetoldme: "",
                    shirintar: "shir.intar.in",
                    simpy: "",
                    sinaweibo: "v.t.sina.com.cn",
                    slashdot: "slashdot.org",
                    smiru: "smi2.ru",
                    sodahead: "",
                    sonico: "",
                    sphinn: "",
                    spinsnap: "",
                    sportpost: "",
                    sulia: "",
                    yiid: "spread.ly",
                    springpad: "springpadit.com",
                    startaid: "",
                    startlap: "startlap.hu",
                    storyfollower: "",
                    studivz: "studivz.net",
                    stuffpit: "",
                    stumpedia: "",
                    sunlize: "",
                    stylehive: "",
                    svejo: "svejo.net",
                    symbaloo: "",
                    taaza: "",
                    tagmarksde: "tagmarks.de",
                    tagvn: "",
                    tagza: "",
                    tellmypolitician: "",
                    thewebblend: "",
                    thinkfinity: "community.thinkfinity.org",
                    thisnext: "",
                    thrillon: "",
                    throwpile: "",
                    tipd: "",
                    topsitelernet: "ekle.topsiteler.net",
                    transferr: "",
                    tuenti: "",
                    tulinq: "",
                    tusul: "",
                    tvinx: "",
                    tweetmeme: "api.tweetmeme.com",
                    twitthis: "",
                    typepad: "",
                    upnews: "upnews.it",
                    urlaubswerkde: "urlaubswerk.de",
                    viadeo: "",
                    virb: "",
                    visitezmonsite: "",
                    vk: "vkontakte.ru",
                    vkrugudruzei: "vkrugudruzei.ru",
                    voxopolis: "",
                    vybralisme: "vybrali.sme.sk",
                    webnews: "webnews.de",
                    domaintoolswhois: "domaintools.com",
                    wanelo: "",
                    windows: "api.addthis.com",
                    wirefan: "",
                    wishmindr: "",
                    wordpress: "",
                    wykop: "wykop.pl",
                    xanga: "",
                    xing: "",
                    yahoobkm: "bookmarks.yahoo.com",
                    yammer: "",
                    yardbarker: "",
                    yigg: "yigg.de",
                    yoolink: "go.yoolink.to",
                    yorumcuyum: "",
                    youmob: "",
                    yuuby: "",
                    zakladoknet: "zakladok.net",
                    zanatic: "",
                    ziczac: "ziczac.it",
                    zingme: "link.apps.zing.vn",
                    zootool: ""
                };
                var d = {
                        more: 1,
                        compact: 1,
                        expanded: 1,
                        facebook: 1,
                        email: 1,
                        twitter: 1,
                        print: 1,
                        google: 1,
                        google_plusone_share: 1,
                        live: 1,
                        stumbleupon: 1,
                        vk: 1,
                        pinterest_share: 1,
                        myspace: 1,
                        favorites: 1,
                        digg: 1,
                        delicious: 1,
                        orkut: 1,
                        blogger: 1,
                        mailto: 1,
                        linkedin: 1,
                        mymailru: 1,
                        gmail: 1,
                        yahoomail: 1,
                        reddit: 1,
                        tumblr: 1,
                        live: 1
                    },
                    a = {
                        more: 1,
                        compact: 1,
                        expanded: 1,
                        "100zakladok": 1,
                        adifni: 1,
                        aim: 1,
                        amazonwishlist: 1,
                        arto: 1,
                        baidu: 1,
                        bitly: 1,
                        blogger: 1,
                        bloggy: 1,
                        bobrdobr: 1,
                        delicious: 1,
                        digg: 1,
                        diggita: 1,
                        draugiem: 1,
                        ekudos: 1,
                        email: 1,
                        facebook: 1,
                        favorites: 1,
                        friendfeed: 1,
                        gmail: 1,
                        google: 1,
                        google_plusone_share: 1,
                        hatena: 1,
                        hotmail: 1,
                        jappy: 1,
                        linkedin: 1,
                        live: 1,
                        livejournal: 1,
                        mailto: 1,
                        meinvz: 1,
                        meneame: 1,
                        misterwong: 1,
                        mymailru: 1,
                        myspace: 1,
                        netlog: 1,
                        nujij: 1,
                        oknotizie: 1,
                        orkut: 1,
                        oyyla: 1,
                        pinterest_share: 1,
                        plurk: 1,
                        print: 1,
                        pusha: 1,
                        reddit: 1,
                        settings: 1,
                        sonico: 1,
                        studivz: 1,
                        stumbleupon: 1,
                        tuenti: 1,
                        tumblr: 1,
                        twitter: 1,
                        viadeo: 1,
                        vk: 1,
                        wordpress: 1,
                        wykop: 1,
                        xing: 1,
                        yahoobkm: 1,
                        yahoomail: 1,
                        yorumcuyum: 1
                    };
                _a._top_services = d;
                _a._top_services16 = a;
                b.services.isTop = function(f, g) {
                    if (g == 16) {
                        return a[f];
                    } else {
                        return d[f];
                    }
                };
            })(_a, _a.api, _a);
            (function(b, d, e) {
                var a = {
                    googlebuzz: "Google Buzz",
                    googlereader: "Google Reader",
                    googletranslate: "Google Translate",
                    google_follow: "Google",
                    rss: "RSS"
                };
                var f = {
                    "100zakladok": "100zakladok",
                    "2linkme": "2linkme",
                    "2tag": "2 Tag",
                    a97abi: "A97abi",
                    adfty: "Adfty",
                    adifni: "Adifni",
                    advqr: "ADV QR",
                    aim: "Lifestream",
                    amazonwishlist: "Amazon",
                    amenme: "Amen Me!",
                    aolmail: "AOL Mail",
                    apsense: "APSense",
                    arto: "Arto",
                    azadegi: "Azadegi",
                    baang: "Baang",
                    baidu: "Baidu",
                    balltribe: "BallTribe",
                    beat100: "Beat100",
                    biggerpockets: "BiggerPockets",
                    bitly: "Bit.ly",
                    bizsugar: "BizSugar",
                    bland: "Bland takkinn",
                    blinklist: "Blinklist",
                    blogger: "Blogger",
                    bloggy: "Bloggy",
                    blogkeen: "Blogkeen",
                    blogmarks: "Blogmarks",
                    blurpalicious: "Blurpalicious",
                    bobrdobr: "Bobrdobr",
                    bonzobox: "BonzoBox",
                    bookmarkycz: "Bookmarky.cz",
                    bookmerkende: "Bookmerken",
                    box: "Box",
                    brainify: "Brainify",
                    bryderi: "Bryderi.se",
                    buddymarks: "BuddyMarks",
                    buffer: "Buffer",
                    buzzzy: "Buzzzy",
                    camyoo: "Camyoo",
                    care2: "Care2",
                    chimein: "Chime",
                    chiq: "Chiq",
                    cirip: "Cirip",
                    citeulike: "CiteULike",
                    classicalplace: "ClassicalPlace",
                    cleanprint: "CleanPrint",
                    cleansave: "CleanSave",
                    cndig: "Cndig",
                    colivia: "Colivia.de",
                    cosmiq: "COSMiQ",
                    cssbased: "CSS Based",
                    curateus: "Curate.us",
                    delicious: "Delicious",
                    digaculturanet: "DigaCultura",
                    digg: "Digg",
                    diggita: "Diggita",
                    digo: "Digo",
                    diigo: "Diigo",
                    domaintoolswhois: "Whois Lookup",
                    domelhor: "DoMelhor",
                    dotnetshoutout: ".netShoutout",
                    douban: "Douban",
                    draugiem: "Draugiem.lv",
                    dropjack: "Dropjack",
                    dudu: "Dudu",
                    dzone: "Dzone",
                    efactor: "EFactor",
                    ekudos: "eKudos",
                    elefantapl: "elefanta.pl",
                    email: "Email",
                    embarkons: "Embarkons",
                    evernote: "Evernote",
                    extraplay: "extraplay",
                    ezyspot: "EzySpot",
                    fabulously40: "Fabulously40",
                    facebook: "Facebook",
                    fark: "Fark",
                    farkinda: "Farkinda",
                    fashiolista: "Fashiolista",
                    favable: "FAVable",
                    faves: "Faves",
                    favlogde: "favlog",
                    favoritende: "Favoriten",
                    favorites: "Favorites",
                    favoritus: "Favoritus",
                    financialjuice: "Financial Juice",
                    flaker: "Flaker",
                    folkd: "Folkd",
                    foodlve: "Cherry Share",
                    formspring: "Formspring",
                    fresqui: "Fresqui",
                    friendfeed: "FriendFeed",
                    funp: "funP",
                    fwisp: "fwisp",
                    gabbr: "Gabbr",
                    gamekicker: "Gamekicker",
                    gg: "GG",
                    giftery: "Giftery.me",
                    gigbasket: "GigBasket",
                    givealink: "GiveALink",
                    gluvsnap: "Healthimize",
                    gmail: "Gmail",
                    goodnoows: "Good Noows",
                    google: "Google",
                    google_plusone_share: "Google+",
                    googletranslate: "Translate",
                    govn: "Go.vn",
                    greaterdebater: "GreaterDebater",
                    hackernews: "Hacker News",
                    hatena: "Hatena",
                    hedgehogs: "Hedgehogs",
                    historious: "historious",
                    hotklix: "Hotklix",
                    hotmail: "Outlook",
                    hootsuite: "Hootsuite",
                    identica: "Identi.ca",
                    ihavegot: "ihavegot",
                    indexor: "Indexor",
                    informazione: "Informazione",
                    instapaper: "Instapaper",
                    iorbix: "iOrbix",
                    irepeater: "IRepeater",
                    isociety: "iSociety",
                    iwiw: "iWiW",
                    jamespot: "Jamespot",
                    jappy: "Jappy Ticker",
                    jolly: "Jolly",
                    jumptags: "Jumptags",
                    kaboodle: "Kaboodle",
                    kaevur: "Kaevur",
                    kaixin: "Kaixin Repaste",
                    ketnooi: "Ketnooi",
                    kindleit: "Kindle It",
                    kledy: "Kledy",
                    kommenting: "Kommenting",
                    latafaneracat: "La tafanera",
                    librerio: "Librerio",
                    lidar: "LiDAR Online",
                    link: "Copy Link",
                    linkedin: "LinkedIn",
                    linksgutter: "Links Gutter",
                    linkshares: "LinkShares",
                    linkuj: "Linkuj.cz",
                    live: "Messenger",
                    livejournal: "LiveJournal",
                    lockerblogger: "LockerBlogger",
                    logger24: "Logger24",
                    mailto: "Email App",
                    margarin: "mar.gar.in",
                    markme: "Markme",
                    mashant: "Mashant",
                    mashbord: "Mashbord",
                    me2day: "me2day",
                    meinvz: "meinVZ",
                    mekusharim: "Mekusharim",
                    memonic: "Memonic",
                    memori: "Memori.ru",
                    mendeley: "Mendeley",
                    meneame: "Men\u221a\xa9ame",
                    misterwong: "Mister Wong",
                    mixi: "Mixi",
                    myvidster: "myVidster",
                    moemesto: "Moemesto.ru",
                    moikrug: "Moikrug",
                    mrcnetworkit: "mRcNEtwORK",
                    mymailru: "Mail.ru",
                    myspace: "Myspace",
                    n4g: "N4G",
                    naszaklasa: "Nasza-klasa",
                    netlog: "NetLog",
                    netvibes: "Netvibes",
                    netvouz: "Netvouz",
                    newsmeback: "NewsMeBack",
                    newstrust: "NewsTrust",
                    newsvine: "Newsvine",
                    nujij: "Nujij",
                    odnoklassniki_ru: "Odnoklassniki",
                    oknotizie: "OKNOtizie",
                    openthedoor: "OpenTheDoor",
                    orkut: "Orkut",
                    oyyla: "Oyyla",
                    packg: "Packg",
                    pafnetde: "Pafnet",
                    pdfmyurl: "PDFmyURL",
                    pdfonline: "PDF Online",
                    phonefavs: "PhoneFavs",
                    pinterest_share: "Pinterest",
                    planypus: "Planypus",
                    plaxo: "Plaxo",
                    plurk: "Plurk",
                    pocket: "Pocket",
                    posteezy: "Posteezy",
                    print: "Print",
                    printfriendly: "PrintFriendly",
                    pusha: "Pusha",
                    qrfin: "QRF.in",
                    qrsrc: "QRSrc.com",
                    quantcast: "Quantcast",
                    qzone: "Qzone",
                    raiseyourvoice: "Write Your Rep",
                    reddit: "Reddit",
                    rediff: "Rediff MyPage",
                    redkum: "RedKum",
                    researchgate: "ResearchGate",
                    safelinking: "Safelinking",
                    scoopat: "Scoop.at",
                    scoopit: "Scoop.it",
                    sekoman: "Sekoman",
                    select2gether: "Select2Gether",
                    sharer: "WebMoney",
                    shaveh: "Shaveh",
                    shetoldme: "She Told Me",
                    sinaweibo: "Sina Weibo",
                    skyrock: "Skyrock Blog",
                    smiru: "SMI",
                    socialbookmarkingnet: "BookmarkingNet",
                    sodahead: "SodaHead",
                    sonico: "Sonico",
                    spinsnap: "SpinSnap",
                    springpad: "springpad",
                    startaid: "Startaid",
                    startlap: "Startlap",
                    storyfollower: "StoryFollower",
                    studivz: "studiVZ",
                    stuffpit: "Stuffpit",
                    stumbleupon: "StumbleUpon",
                    stumpedia: "Stumpedia",
                    stylishhome: "FabDesign",
                    sulia: "Sulia",
                    sunlize: "Sunlize",
                    supbro: "SUP BRO",
                    surfingbird: "Surfingbird",
                    svejo: "Svejo",
                    symbaloo: "Symbaloo",
                    taaza: "TaazaShare",
                    tagza: "Tagza",
                    taringa: "Taringa!",
                    technerd: "Communicate",
                    textme: "Textme",
                    thefancy: "The Fancy",
                    thefreedictionary: "FreeDictionary",
                    thewebblend: "The Web Blend",
                    thinkfinity: "Thinkfinity",
                    thisnext: "ThisNext",
                    thrillon: "Thrill On",
                    throwpile: "Throwpile",
                    toly: "to.ly",
                    topsitelernet: "TopSiteler",
                    transferr: "Transferr",
                    tuenti: "Tuenti",
                    tulinq: "Tulinq",
                    tumblr: "Tumblr",
                    tvinx: "Tvinx",
                    twitter: "Twitter",
                    twitthis: "TwitThis",
                    typepad: "Typepad",
                    upnews: "Upnews.it",
                    urlaubswerkde: "Urlaubswerk",
                    wanelo: "Wanelo",
                    wishmindr: "WishMindr",
                    viadeo: "Viadeo",
                    virb: "Virb",
                    visitezmonsite: "VisitezMonSite",
                    vk: "VKontakte",
                    vkrugudruzei: "vKruguDruzei",
                    voxopolis: "VOX Social",
                    vybralisme: "VybraliSME",
                    w3validator: "HTML Validator",
                    webnews: "Webnews",
                    webshare: "WebShare",
                    werkenntwen: "WerKenntWen",
                    wirefan: "WireFan",
                    windows: "Windows Gadget",
                    wordpress: "WordPress",
                    wowbored: "WowBored",
                    wykop: "Wykop",
                    xanga: "Xanga",
                    xing: "XING",
                    yahoobkm: "Y! Bookmarks",
                    yahoomail: "Y! Mail",
                    yammer: "Yammer",
                    yardbarker: "Yardbarker",
                    yigg: "Yigg",
                    yiid: "Spreadly",
                    yookos: "Yookos",
                    yoolink: "Yoolink",
                    yorumcuyum: "Yorumcuyum",
                    youmob: "YouMob",
                    yuuby: "Yuuby",
                    zakladoknet: "Zakladok.net",
                    ziczac: "ZicZac",
                    zingme: "ZingMe"
                };

                function c(g, h) {
                    var i;
                    if (f[g]) {
                        i = f[g];
                    } else {
                        if (a[g]) {
                            i = a[g];
                        } else {
                            i = (h ? g : (g.substr(0, 1).toUpperCase() + g.substr(1)));
                        }
                    }
                    return (i || "").replace(/&nbsp;/g, " ");
                }
                if (!b.services) {
                    b.services = {};
                }
                b.services.list = f;
                b.services.getName = c;
                b.services.exists = function(g) {
                    return !!f[g];
                };
            })(_a, _a.api, _a);
            (function(g, s, u) {
                var v, d, c, k = {},
                    h, n, r, b, e = _a.util.each;

                function f(B) {
                    var D = new Array();
                    o: for (var C = 0; C < B.length; C++) {
                        for (var A = 0; A < D.length; A++) {
                            if (D[A] == B[C]) {
                                continue o;
                            }
                        }
                        D[D.length] = B[C];
                    }
                    return D;
                }

                function t(A) {
                    if (A) {
                        if (!(A instanceof Array)) {
                            A = [A];
                        }
                        for (i = 0; i < A.length; i++) {
                            var x = A[i];
                            if (x.name && x.icon && x.url && validateUrl(x.url)) {
                                x.code = x.url = x.url.replace(/ /g, "");
                                if (x.code.indexOf("http") === 0) {
                                    x.code = x.code.substr((x.code.indexOf("https") === 0 ? 8 : 7));
                                }
                                x.code = x.code.split("?").shift().split("/").shift().toLowerCase();
                                v = v || {};
                                d = d || {};
                                v[x.code] = x;
                                d[x.code] = "background:url(" + x.icon + ") no-repeat left";
                                A[i] = x;
                            }
                        }
                    } else {
                        A = [];
                    }
                    return A;
                }

                function q(D, A) {
                    var C, B, E, x;
                    if (v) {
                        return v[D];
                    } else {
                        if (A.services_custom) {
                            v = {};
                            C = A.services_custom;
                            for (E in C) {
                                B = C[E];
                                v[B.code] = B;
                                if (D === B.code) {
                                    x = B;
                                }
                            }
                            return x;
                        }
                    }
                    return false;
                }

                function w(x) {
                    return d[x];
                }

                function a() {
                    if (!h) {
                        h = {};
                        e(g.services.map, function(A, x) {
                            h[g.mun(A)] = A;
                        });
                    }
                }

                function j() {
                    if (n) {
                        return n;
                    } else {
                        return n = g.services.refget((g.dr || "").split("://").pop().split("/").shift().split("?").shift()) || (g.smd || {}).rsc || "";
                    }
                }

                function p(A, x) {
                    if (A.timestamp > x.timestamp) {
                        return -1;
                    }
                    return 1;
                }

                function m(x, B, A) {
                    if (!A) {
                        A = window;
                    }
                    if (A[x] === _1 || A[x] === "") {
                        A[x] = B;
                    }
                    return A[x];
                }

                function l(F) {
                    a();
                    var B = j(),
                        E = function() {
                            var K = g.cookie.ssc.getServices(),
                                I = g.ups || {},
                                J;
                            for (var H = 0; H < K.length; H++) {
                                J = K[H].name;
                                if (!I[J]) {
                                    I[J] = J;
                                }
                            }
                            return I;
                        }(),
                        A = [],
                        D, G = 0,
                        C = 0,
                        x;
                    r = [];
                    for (D = 0; D < F.length; D++) {
                        x = F[D];
                        if (g.services.map[x] !== _1 || (x.indexOf("facebook_") > -1 && g.services.map.facebook !== _1)) {
                            G++;
                        }
                        if (B == x) {
                            C = 1;
                        }
                        if (E[x]) {
                            delete E[x];
                        }
                    }
                    e(E, function(H, I) {
                        A.push(I);
                    });
                    A.sort(p);
                    for (D = 0; D < A.length; D++) {
                        x = A[D].name;
                        if (h[x]) {
                            x = h[x];
                            G++;
                            r.push(x);
                            F.push(x);
                            if (window.addthis_ssh) {
                                if (addthis_ssh.indexOf(x) == -1) {
                                    addthis_ssh += "," + x;
                                }
                            } else {
                                window.addthis_ssh = x;
                            }
                            if (B == x) {
                                C = 1;
                            }
                        }
                    }
                    r = r.join(",");
                    if (!C && g.services.map[B] !== _1) {
                        G++;
                        F.push(B);
                        addthis_ssh = (window.addthis_ssh ? addthis_ssh + "," : "") + B;
                        b = B;
                    }
                    return G;
                }

                function y(x) {
                    m("addthis_exclude", "");
                    m("addthis_use_personalization", true);
                    m("services_exclude", window.addthis_exclude, x);
                }

                function z(aa, X) {
                    if (aa === c) {
                        return {
                            conf: aa,
                            csl: r,
                            crs: b
                        };
                    }
                    c = aa;
                    var Q = window.addthis_ssh ? addthis_ssh.replace("misterwong_de", "misterwong").replace("misterwong_ru", "misterwong").replace(/(^more,)|(^more$)|(,more,)|(,more$)/, "").split(",") : [],
                        E = "facebook,twitter,email,print,gmail,stumbleupon,favorites,gmail,tumblr,pinterest_share,google,mailto,linkedin,blogger,delicious,yahoomail,hotmail,printfriendly,aolmail,livejournal,wordpress,friendfeed",
                        V = E,
                        O = (window.addthis_services_loc || E).replace(((_a.bro.xp || _a.bro.mob) ? (/,mailto,/) : (/,,/)), ","),
                        R = 0,
                        P = O,
                        N = j();
                    y(aa);
                    if (_a.bro.ipa) {
                        if (addthis_exclude.indexOf("print") == -1) {
                            addthis_exclude += ",";
                        }
                        addthis_exclude += "print";
                    }
                    aa.services_exclude = aa.services_exclude.replace(/\s/g, "");
                    if (!aa.services_exclude_natural) {
                        aa.services_exclude_natural = aa.services_exclude;
                    }
                    if (_a.ver() >= 300 && (aa || {}).parentServices) {
                        _a.util.each(aa.parentServices, function(ae, ad) {
                            aa.services_exclude += ((aa.services_exclude.length > 1) ? "," : "") + ae;
                        });
                    }
                    if (!X) {
                        X = [];
                    }
                    m("addthis_options_default", P.split(",").slice(0, 11).join(",") + ",more");
                    m("addthis_options_rank", P.split(",").join(","));
                    m("addthis_options", window.addthis_options_default);
                    a();
                    R = l(Q);
                    addthis_options = (Q != "" ? Q + "," : "") + addthis_options;
                    if (Q && ((addthis_options && addthis_options.indexOf(Q) == -1) || (aa.services_compact && aa.services_compact.indexOf(Q) == -1))) {
                        aa.services_compact = aa.services_compact ? (Q + "," + aa.services_compact) : addthis_options;
                    }
                    addthis_options = f(addthis_options.split(",")).join(",");
                    if (aa.services_compact) {
                        aa.services_compact = f(aa.services_compact.split(",")).join(",");
                    }
                    if (((window.addthis_ssh && window.addthis_use_personalization && R) || X.length || aa.services_exclude || addthis_exclude)) {
                        var D = addthis_options_rank.split(","),
                            L = [],
                            U, B = (aa.services_exclude || addthis_exclude || "").split(","),
                            H = {},
                            T, Z = Q.join(","),
                            ac = [],
                            A = {},
                            x = 0,
                            K = 11,
                            J = 0,
                            F = aa.product || "",
                            G = F.indexOf("ffext") > -1 || F.indexOf("fxe") > -1;
                        if (X.length && addthis_options.indexOf(X[0].code) == -1) {
                            addthis_options += "," + X[0].code;
                        }
                        if (X.length && X[0]) {
                            L.push(X[0].code);
                        }
                        for (W = 0; W < B.length; W++) {
                            H[B[W]] = 1;
                            T = k[B[W]] || new RegExp("(?:^|,)(" + B[W] + ")(?:$|,)");
                            k[B[W]] = T;
                            addthis_options = addthis_options.replace(T, ",").replace(",,", ",");
                            if (aa.services_compact) {
                                aa.services_compact = aa.services_compact.replace(T, ",").replace(",,", ",");
                            }
                        }
                        for (W = 0; W < D.length; W++) {
                            U = D[W];
                            if (!H[U]) {
                                T = k[U] || new RegExp("(?:^|,)(" + U + ")(?:$|,)");
                                k[U] = T;
                                if (Z.search(T) == -1) {
                                    L.unshift(U);
                                }
                            }
                        }
                        for (W = 0; W < Q.length && W < K; W++) {
                            U = Q[W];
                            T = k[U] || new RegExp("(?:^|,)(" + U + ")(?:$|,)");
                            k[U] = T;
                            if (addthis_options.search(T) > -1) {
                                x++;
                            }
                        }
                        for (W = 0; W < Q.length; W++) {
                            if (ac.length >= K) {
                                break;
                            }
                            U = Q[W];
                            if (!A[U] && !H[U] && (g.services.map[U] !== _1 || U.indexOf("facebook_") > -1)) {
                                A[U] = 1;
                                T = k[U] || new RegExp("(?:^|,)(" + U + ")(?:$|,)");
                                k[U] = T;
                                if (addthis_options.search(T) > -1) {
                                    ac.push(U);
                                    addthis_options = addthis_options.replace(T, ",").replace(",,", ",");
                                    J++;
                                } else {
                                    ac.push(U);
                                }
                            }
                        }
                        addthis_ssh = ac.join(",");
                        addthis_options = (window.addthis_ssh ? addthis_ssh + "," : "") + addthis_options.replace(/[,]+/g, ",").replace(/,$/, "").replace(/^,/, "").replace(/^more,|,more|^more$/, "");
                        if (addthis_options.indexOf("email") > -1 && g.pub() === "" && !G) {
                            addthis_options = addthis_options.replace(/^email,|,email|^email$/, "");
                        }
                        while (addthis_options.split(",").length > 11) {
                            addthis_options = addthis_options.split(",").slice(0, -1).join(",");
                        }
                        var S = g.util.fromKV(addthis_options.replace(/,|$/g, "=1&"));
                        var Y = addthis_options.split(",").length;
                        if (Y % 2 === 0 || Y < 11) {
                            var W = Math.min(Y, 11),
                                M = P.split(","),
                                I = Y;
                            while ((I < 11 || I % 2 === 0) && W < M.length) {
                                var C = M[W++];
                                if (S[C]) {
                                    if (W == M.length) {
                                        if (Y + (Math.min(Y, 11) - I) % 2 === 0) {
                                            addthis_options = addthis_options.split(",").slice(0, -1).join(",");
                                        }
                                        break;
                                    } else {
                                        continue;
                                    }
                                } else {
                                    if (!H[C]) {
                                        addthis_options += "," + C;
                                        S[C] = 1;
                                        I++;
                                    }
                                }
                            }
                        }
                        if (X.length && X[0] && addthis_options.indexOf(X[0].code) == -1) {
                            var ab = addthis_options.replace(",more", "").split(",").pop();
                            addthis_options = addthis_options.replace(ab, X[0].code);
                        }
                        if (addthis_options.indexOf(",more") == -1) {
                            addthis_options += ",more";
                        }
                    }
                    if (!aa.services_compact) {
                        aa.services_compact = addthis_options;
                    }
                    g.share.services.loc = (window.addthis_services_loc || E).replace(((_a.bro.xp || _a.bro.mob) ? /,mailto,/ : /,,/), ",");
                    return {
                        conf: aa,
                        csl: r,
                        crs: b
                    };
                }
                g.share = g.share || {};
                g.share.services = g.share.services || {};
                g.share.services.init = z;
            })(_a, _a.api, _a);
            (function(a, d, b) {
                function c(e) {
                    var f = this,
                        h = e || {};
                    if (e instanceof Array) {
                        h = {};
                        for (var g = 0; g < e.length; g++) {
                            h[e[g]] = e[g];
                        }
                    }
                    f.add = function(j, k) {
                        if (typeof j === "object") {
                            for (var i in j) {
                                if (j.hasOwnProperty(i)) {
                                    f.add(i, j[i]);
                                }
                            }
                        } else {
                            h[j] = k;
                        }
                    };
                    f.get = function(i) {
                        return h[i];
                    };
                    f.has = function(k) {
                        if (typeof(k) == "string") {
                            k = k.split(",");
                        }
                        if (k.length === 0) {
                            return false;
                        }
                        for (var j = 0; j < k.length; j++) {
                            if (!iskey(k[j])) {
                                return false;
                            }
                        }
                        return true;
                    };
                    f.iskey = function(l) {
                        if (typeof(l) == "string") {
                            l = l.split(",");
                        }
                        if (l instanceof Array) {
                            for (var k = 0; k < l.length; k++) {
                                var j = l[k].replace(/ /g, "");
                                if (h[j]) {
                                    return 1;
                                }
                            }
                        }
                        return 0;
                    };
                    f.remove = function(m) {
                        var n;
                        for (var k = 0; k < arguments.length; k++) {
                            n = arguments[k];
                            if (typeof m === "string") {
                                delete h[n];
                            } else {
                                if (n.length) {
                                    for (var l = 0; l < n.length; l++) {
                                        delete h[n[l]];
                                    }
                                }
                            }
                        }
                    };
                    f.has = function(i) {
                        return h.hasOwnProperty(i);
                    };
                    f.isEmpty = function() {
                        var i = 0;
                        _a.util.each(h, function(j, k) {
                            if (this.data.hasOwnProperty(j)) {
                                i = 1;
                                return false;
                            }
                        });
                        return !!i;
                    };
                    f.keys = function() {
                        return Object.keys(h);
                    };
                    f.clear = function() {
                        h = {};
                    };
                }
                if (!a.data) {
                    a.data = {};
                }
                a.data.Set = c;
            })(_a, _a.api, _a);
            (function(e, A, k) {
                e = e || {};
                e.data = e.data || {};
                var U = document,
                    G = window,
                    B = _a.abmp >= 0,
                    q = [1, 2, 3, 4, 11, 12, 13, 14, 15],
                    h = B ? q[Math.round((Math.random() * (q.length) - 1))] : 1,
                    l, i = G.addthis_feed_url || "//web.archive.org/web/20200420105550/https://q.addthis.com/feeds/1.0/",
                    p = "trending.json",
                    c = "viewsrnd.json",
                    O = "controlfeed.json",
                    n = "viewscf.json",
                    P = "views.json",
                    J = "views2.json",
                    F = "url.json",
                    t = "clusters.json",
                    X = "clusters2.json",
                    L = e.util.each,
                    z = {
                        feed: J,
                        vectors: null
                    },
                    W = {},
                    N, K = e.data.Set;

                function a(w, d) {
                    if (w.score > d.score) {
                        return -1;
                    } else {
                        if (w.score == d.score) {
                            return 0;
                        } else {
                            return 1;
                        }
                    }
                }

                function Q(d) {
                    return (Math.max(0, (d || "").length - 8) / 9);
                }

                function f(w, d) {
                    if (!d && z.ab) {
                        e.ab = "per-" + z.ab;
                        l = true;
                        return z.ab;
                    }
                    if (d) {
                        h += 100;
                    }
                    if (e.ab == "-" && !w) {
                        e.ab = "per-" + h;
                        l = true;
                    } else {
                        if (!l) {
                            h = parseInt(e.ab.split("-").pop(), 10);
                        }
                    }
                    return h;
                }

                function M(d) {
                    e.log.debug("u=" + (z._used ? 1 : 0), "c=", d);
                    if (!d) {
                        return;
                    }
                    z._set = 1;
                    z.ab = d["per-cell"];
                    z.feed = d["per-feed"];
                    if (d["per-vectors"] == "NONE") {
                        z.vectors = [];
                    } else {
                        z.vectors = typeof(d["per-vectors"]) == "string" ? d["per-vectors"].split(",") : d["per-vectors"];
                    }
                }

                function C(Y, ac, w) {
                    var Z = Y.pubid || e.pub(),
                        d = window.addthis_domain ? _a.util.gUD(window.addthis_domain) : "",
                        ab = d || Y.domain,
                        aa;
                    _a.ajs([i, w || P, "?pubid=", Z, ((Y.period) ? "&period=" + Y.period : ""), ((Y.service) ? "&service=" + Y.service : ""), (ab ? "&domain=" + ab : ""), (window.addthis_bt2 ? "&bt2=" + e.bt2 : ""), ((w.indexOf(F) > -1 || w.indexOf(n) > -1) && !!_a.dr ? "&referer=" + _a.dr : ""), (w.indexOf("views") > -1 ? "&limit=25" : ""), "&callback=", e.util.scb("fds", Z, function() {
                        clearTimeout(aa);
                        ac.apply(this, arguments);
                    })].join(""), 1, true, true, null, true);
                    aa = setTimeout(function() {
                        ac([]);
                    }, 4500);
                }

                function I(w) {
                    var Y = w.pubid || e.pub(),
                        d = p;
                    w._callback = w.callback;
                    w.callback = function(Z) {
                        w._callback(u(Z, w));
                    };
                    if (w.type) {
                        d = d.replace("trending", w.type);
                    }
                    C(w, w.callback, d);
                }

                function S(d) {
                    d = d || [];
                    if (d.length < 2) {
                        return d;
                    }
                    var w = parseInt(d.length / 2);
                    var Z = d.slice(0, w);
                    var Y = d.slice(w, d.length);
                    return H(S(Z), S(Y));
                }

                function H(aa, Z) {
                    var w = [],
                        Y, d;
                    while (aa.length && Z.length) {
                        Y = aa[0];
                        d = Z[0];
                        if (((!!Y.image && !!Y.title) || (!d.image || !d.title)) && (!m(Y) || m(d))) {
                            w.push(aa.shift());
                        } else {
                            w.push(Z.shift());
                        }
                    }
                    while (aa.length) {
                        w.push(aa.shift());
                    }
                    while (Z.length) {
                        w.push(Z.shift());
                    }
                    return w;
                }

                function v(d, Y, w) {
                    if (e.uid == "4e13435baa56415b") {
                        e.log.debug.call(this, d, Y, w);
                    }
                }

                function V() {
                    return true;
                    try {
                        var Z = _a.mun(document.location.hostname.split(".").slice(-2).join(".")),
                            w = Z.charAt(0),
                            d = {
                                ke4m: 1,
                                "1stj": 1,
                                u880: 1,
                                nl2f: 1,
                                cvt2: 1,
                                e86k: 1,
                                "6aio": 1,
                                o598: 1,
                                po2f: 1,
                                a462: 1,
                                n22r: 1,
                                kj68: 1
                            };
                        if (d[Z]) {
                            return true;
                        }
                    } catch (Y) {}
                    return false;
                }

                function m(d) {
                    try {
                        if (!V()) {
                            return false;
                        }
                        if (!d || !d.url) {
                            return false;
                        }
                        if (d.promoted == 1) {
                            return false;
                        }
                        if (W[d.url] !== _1) {
                            return W[d.url];
                        }
                        W[d.url] = _a.track.hist.seenBefore(d.url);
                        return W[d.url];
                    } catch (w) {}
                    return false;
                }

                function j(d) {
                    e.log.debug("sfc", z);
                    d.ab = z.ab;
                    var w = (z.vectors || []).length || 0;
                    if (!z.vectors || w === 0) {
                        if (z.feed == n) {
                            x(d, n, J);
                        } else {
                            C(d, d.callback, z.feed);
                        }
                    } else {
                        var Z = z.vectors[0],
                            Y = z.vectors[1];
                        if (w == 1) {
                            if (e.bt2 || (Z != t && Z != X)) {
                                E(d, z.feed, Z);
                            } else {
                                C(d, d.callback, z.feed);
                            }
                        } else {
                            if (e.bt2 || (Z != t && Z != X && Y != t && Y != X)) {
                                D(d, z.feed, z.vectors[0], z.vectors[1]);
                            } else {
                                if (Z == t || Z == X) {
                                    E(d, z.feed, Y);
                                } else {
                                    if (Y == t || Y == X) {
                                        E(d, z.feed, Z);
                                    } else {
                                        E(d, z.feed, Z);
                                        C(d, d.callback, z.feed);
                                    }
                                }
                            }
                        }
                    }
                }

                function r(Z) {
                    if (_a.sfmp > 0 && Z && !Z._wait && !z._set) {
                        Z._wait = 1;
                        setTimeout(function() {
                            r(Z);
                        }, 2500);
                        return;
                    }
                    f();
                    var Y = Z.pubid || e.pub(),
                        w = h,
                        d, ae = Math.floor(Z.total / 2),
                        aa = "__feed_" + Y + "_" + h,
                        af = false,
                        ab = 0;
                    if (!N && (V() || w == 14)) {
                        N = {
                            features: e.ad.gcv()
                        };
                    }
                    Z._callback = Z.callback;
                    Z.callback = function(ag) {
                        ag = ag || [];
                        if (e.bro.chr) {
                            ag = S(ag);
                        } else {
                            ag.sort(function(aj, ai) {
                                return !!aj.image ? (!!ai.image ? (!!aj.title ? (!!ai.title ? (m(aj) ? (m(ai) ? 0 : -1) : (m(ai) ? 1 : 0)) : -1) : (!!ai.title ? 0 : 1)) : -1) : 1;
                            });
                        }
                        if (ag.length && _a.uls && window.JSON) {
                            af = localStorage.getItem(aa);
                            if (af) {
                                try {
                                    af = JSON.parse(af);
                                } catch (ah) {}
                                if (af.o) {
                                    ab = af.o % 10;
                                    af.o = ab + 2;
                                } else {
                                    af = {
                                        o: 2
                                    };
                                }
                            } else {
                                af = {
                                    o: 2
                                };
                            }
                            if (ab > 0) {
                                while (ab-- > 0) {
                                    arguments[0].push(arguments[0].shift());
                                }
                            }
                            localStorage.setItem(aa, JSON.stringify(af));
                        }
                        Z._callback(u(ag, Z));
                    };
                    if (_a.sfmp > 0 && z._set && h < 100) {
                        z._used = 1;
                        j(Z);
                        return;
                    } else {
                        Z.ab = e.ab;
                    }
                    if (h >= 100) {
                        d = p;
                        w = h - 100;
                    }
                    e.log.debug("rec; c=" + h, "m=" + w, "hbt=" + (!!e.bt2), Z);
                    switch (w) {
                        case 1:
                            C(Z, Z.callback, c);
                            break;
                        case 2:
                            C(Z, Z.callback, J);
                            break;
                        case 3:
                            E(Z, d || J, F);
                            break;
                        case 4:
                            if (e.bt2) {
                                E(Z, d || J, t);
                            } else {
                                E(Z, d || J, F);
                            }
                            break;
                        case 5:
                            Z.split = ae;
                            R(Z, d || P, t, "merged");
                            break;
                        case 6:
                            Z.split = ae;
                            R(Z, P, t);
                            break;
                        case 7:
                            Z.split = ae;
                            R(Z, J, t, "merged");
                            break;
                        case 8:
                            Z.split = ae;
                            R(Z, J, t);
                            break;
                        case 9:
                            var ac = 0;
                            try {
                                ac = Q(e.bt2) || 0;
                            } catch (ad) {}
                            if (ac >= 3) {
                                E(Z, J, t);
                            } else {
                                C(Z, Z.callback, J);
                            }
                            break;
                        case 10:
                            var ac = 0;
                            try {
                                ac = Q(e.bt2) || 0;
                            } catch (ad) {}
                            if (ac >= 3) {
                                E(Z, J, X);
                            } else {
                                C(Z, Z.callback, J);
                            }
                            break;
                        case 11:
                            x(Z, n, d || J);
                            break;
                        case 12:
                            if (e.bt2) {
                                E(Z, J, X);
                            } else {
                                E(Z, d || J, F);
                            }
                            break;
                        case 13:
                            if (e.bt2) {
                                D(Z, d || J, X, F);
                            } else {
                                E(Z, d || J, F);
                            }
                            break;
                        case 14:
                            s(Z, d || J, N);
                            break;
                        case 15:
                            C(Z, Z.callback, O);
                            break;
                        default:
                            C(Z, Z.callback, d || J);
                            break;
                    }
                }

                function y(d) {
                    return ((d || {}).pvector || {}).features || {};
                }

                function b(af, ac, w) {
                    var Y, aa = new K(),
                        Z = 0,
                        ab = [],
                        d, ad, w = typeof w == "function" ? w : y,
                        ae;
                    L(ac.features || [], function(ah, ag) {
                        aa.add(ag.name, ag.weight);
                    });
                    L(af, function(ah, ag) {
                        Z = 0;
                        d = ag.url;
                        ad = d.split("#").shift();
                        if ((e.share.links.canonical || "").indexOf(ad) > -1) {
                            return;
                        }
                        ae = w(ag);
                        L(ae, function(aj, ai) {
                            if (typeof(Y = aa.get(ai.name)) != "undefined") {
                                Z += (Y + ai.weight);
                            }
                        });
                        af[ah].score = Z;
                        d.score = Z;
                        ab.push(ag);
                    });
                    ab.sort(a);
                    return ab;
                }

                function E(Y, d, Z, w) {
                    D(Y, d, Z, null, w);
                }

                function s(Y, d, aa, w) {
                    var Z, ab;
                    C(Y, function(ac) {
                        Z = ac;
                        ab = T(Y, Z, aa, w);
                        Y.callback(ab);
                    }, d);
                }

                function D(Y, ac, ab, aa, Z) {
                    var d, ae, ad, w;
                    C(Y, function(af) {
                        d = af;
                        if (ae !== _1 && (!aa || ad !== _1)) {
                            w = T(Y, d, ae, Z);
                            if (aa) {
                                w = T(Y, w, ad, Z);
                            }
                            Y.callback(w);
                        }
                    }, ac);
                    C(Y, function(af) {
                        ae = af;
                        if (d !== _1 && (!aa || ad !== _1)) {
                            w = T(Y, d, ae, Z);
                            if (aa) {
                                w = T(Y, w, ad, Z);
                            }
                            Y.callback(w);
                        }
                    }, ab);
                    if (aa) {
                        C(Y, function(af) {
                            ad = af;
                            if (d !== _1 && ae !== _1) {
                                w = T(Y, d, ae, Z);
                                w = T(Y, w, ad, Z);
                                Y.callback(w);
                            }
                        }, aa);
                    }
                }

                function R(w, Z, aa, d) {
                    var Y = 5;
                    if (w.split !== _1) {
                        w.split = Y;
                    }
                    E(w, Z, aa, d);
                }

                function x(aa, Z, w) {
                    var Y, d;
                    C(aa, function(ab) {
                        Y = ab;
                        if (ab && ab.length > 1) {
                            aa.callback(ab);
                        } else {
                            if (d && d.length > 1) {
                                aa.callback(d);
                            }
                        }
                    }, Z);
                    C(aa, function(ab) {
                        d = ab;
                        if (Y && Y.length <= 1) {
                            aa.callback(ab);
                        }
                    }, w);
                }

                function T(Y, d, aa, w) {
                    if (!d || !d.length) {
                        e.log.debug("no url data; returning []");
                        return [];
                    }
                    if (!aa || !aa.features || !aa.features.length) {
                        e.log.debug("no vector data; returning urls");
                        return d;
                    }
                    var ab = b(d, aa, y),
                        ad = ab,
                        Z = Y.split;
                    if (Z) {
                        ad = [];
                        var ac = w ? ab : d;
                        second = w ? d : ab;
                        ad = ad.concat(ac.slice(0, Z));
                        ad = ad.concat(second.slice(0, Z));
                    }
                    return ad;
                    Y.callback(ad);
                }

                function g(d) {
                    if (!d.ab) {
                        d.ab = e.ab;
                    }
                    if (!d.bt) {
                        d.bt = e.bt2;
                    }
                    return function(w) {
                        L(w, function(Z, Y) {
                            d[Z] = Y;
                        });
                        return o(d);
                    };
                }

                function u(d, w, Z) {
                    if (!Z || typeof(Z) !== "function") {
                        Z = o;
                    }
                    if (!w.total) {
                        w.total = d.length;
                    }
                    var Y = 0;
                    L(d, function(aa, ab) {
                        w.pos = Y++;
                        w.url = ab.url;
                        ab.url = Z(w);
                        ab.title = ab.title || "";
                    });
                    return d;
                }

                function o(Z) {
                    var Y = Z.url,
                        d = Z.pco,
                        ac = Z.total,
                        ae = Z.pos,
                        w = Z.bt,
                        ad = Z.ab || "-",
                        aa = "cfd-1.0";
                    if (Y && Y.indexOf("at_pco") > -1) {
                        Y = (d ? Y.replace(/at_pco=(.*)&/, "at_pco=" + d + "&") : Y);
                        if (Y.indexOf("at_ab") > -1) {
                            if (ad != "-") {
                                Y = Y.replace(/at_ab=(.*)&/, "at_ab=" + ad + "&");
                            }
                        } else {
                            Y += "&at_ab=" + (Z.ab || e.ab);
                        }
                        if (Y.indexOf("at_pos") > -1) {
                            if (ae !== _1) {
                                Y = Y.replace(/at_pos=([0-9]+)/, "at_pos=" + ae);
                            }
                        } else {
                            Y += "&at_pos=" + (ae || 0);
                        }
                        if (Y.indexOf("at_tot") > -1) {
                            if (ac !== _1) {
                                Y = Y.replace(/at_tot=([0-9]+)/, "at_tot=" + ac);
                            }
                        } else {
                            Y += "&at_tot=" + (ac || 0);
                        }
                        if (Y.indexOf("si=") === -1) {
                            Y += "&at_si=" + _a.sid;
                        }
                    }
                    return Y;
                }
                e.feeds = {
                    ab: f,
                    _ad: V,
                    configure: M,
                    get: C,
                    recommend: r,
                    trend: I,
                    decorator: g
                };
                e.dctu = o;
            })(_a, _a.api, _a);
            var w = window,
                ac = w.addthis_config || {},
                css = new _a.resource.Resource("widgetcss", _atc.rsrcs.widgetcss, function() {
                    return true;
                }),
                _853 = new _a.resource.Resource("widgetIE67css", _atc.rsrcs.widgetIE67css, function() {
                    return true;
                }),
                _854 = new _a.resource.Resource("widget32css", _atc.rsrcs.widget32css, function() {
                    return true;
                });
            if (w.addthis && w.addthis.timer) {
                w.addthis.timer.core = (new Date()).getTime();
            }

            function main() {
                if (w.addthis && w.addthis.timer) {
                    w.addthis.timer.main = (new Date()).getTime();
                }
                try {
                    if (_atc.xol && !_atc.xcs && ac.ui_use_css !== false) {
                        css.load();
                        if (_a.bro.ie6 || _a.bro.ie7) {
                            _853.load();
                        }
                        if (_a.bro.ipa) {
                            _854.load();
                        }
                    }
                    var a = _a,
                        msi = a.bro.msi,
                        hp = 0,
                        _858 = w.addthis_config || {},
                        dt = d.title,
                        dr = (typeof(a.rdr) !== "undefined") ? a.rdr : (d.referer || d.referrer || ""),
                        du = dl ? dl.href : null,
                        dh = dl.hostname,
                        _85d = du,
                        _85e = 0,
                        al = (_a.lng().split("-")).shift(),
                        _860 = _a.track.eop(dl, dr),
                        cvt = [],
                        nabc = !!a.cookie.rck("nabc"),
                        cfc = _860.cfc,
                        ab = _860.ab,
                        pos = _860.pos ? parseInt(_860.pos, 10) : null,
                        tot = _860.tot ? parseInt(_860.tot, 10) : null,
                        rsiq = _860.rsiq,
                        rsi = _860.rsi,
                        rxi = _860.rxi,
                        rsc = _860.rsc.split("&").shift().split("%").shift().replace(/[^a-z0-9_]/g, ""),
                        gen = _860.gen,
                        fuid = _860.fuid,
                        csi = _860.csi,
                        _86e, ifr, _870 = _atc.rsrcs.sh + "#",
                        data, _872 = function() {
                            if (!_a.track.pcs.length) {
                                _a.track.apc(w.addthis_product || ("men-" + _a.ver()));
                            }
                            data.pc = _a.track.pcs.join(",");
                        },
                        ljep = w.ljep || false,
                        _874 = a.pub(),
                        _875 = [2, 3, 4, 12];
                    if (dl && dl.hash && dl.hash.indexOf("sky_ab=1") > -1) {
                        a.sfmp = 1;
                    }
                    if ((du || "").indexOf(_atr) == -1) {
                        a.cookie.view.update(true);
                    }
                    if (rsc == "tweet") {
                        rsc = "twitter";
                    }
                    _860.rsc = rsc;
                    if (w.addthis_product) {
                        _a.track.apc(addthis_product);
                        if (addthis_product.indexOf("fxe") == -1 && addthis_product.indexOf("bkm") == -1) {
                            _a.track.spc = addthis_product;
                        }
                    }
                    var l = _a.share.links.canonical;
                    if (l) {
                        if (l.indexOf("http") !== 0) {
                            _85d = (du || "").split("//").pop().split("/");
                            if (l.indexOf("/") === 0) {
                                _85d = _85d.shift() + l;
                            } else {
                                _85d.pop();
                                _85d = _85d.join("/") + "/" + l;
                            }
                            _85d = dl.protocol + "//" + _85d;
                        } else {
                            _85d = l;
                        }
                        _a.usu(0, 1);
                    }
                    _85d = _85d.split("#{").shift();
                    a.igv(_85d, d.title || "");
                    if (_85d) {
                        _a.share.links.canonical = _85d;
                    }
                    var _877 = addthis_share.view_url_transforms || addthis_share.track_url_transforms || addthis_share.url_transforms || {};
                    _877.defrag = 1;
                    if (_877) {
                        _85d = _a.track.mgu(_85d, _877);
                    }
                    try {
                        var atsp = (addthis_share || {}).passthrough || {};
                        if (!(atsp.pinterest_share || {}).media) {
                            var tags = _a.ad.og(),
                                _87a = {},
                                og = typeof(tags) == "string" ? _a.util.fromKV(tags) : tags;
                            atsp = {};
                            if (og.image || _a.share.links.image_src) {
                                if (!w.addthis_share) {
                                    w.addthis_share = {};
                                }
                                addthis_share = w.addthis_share;
                                addthis_share.passthrough = atsp = addthis_share.passthrough || {};
                                atsp.pinterest_share = _87a = atsp.pinterest_share || {};
                                _87a.media = og.image || _a.share.links.image_src;
                                _87a.url = _87a.url || og.url || w.location.href;
                                _87a.description = _87a.description || og.title || addthis_share.description || addthis_share.title || "";
                            }
                        }
                    } catch (e) {}
                    if (rsi) {
                        rsi = rsi.substr(0, 8) + fuid;
                    }
                    if (a.bro.mod == -1) {
                        var m = document.compatMode;
                        if (m) {
                            var md = 1;
                            if (m == "BackCompat") {
                                md = 2;
                            } else {
                                if (m == "CSS1Compat") {
                                    md = 0;
                                }
                            }
                            a.bro.mode = md;
                            if (a.bro.msi) {
                                a.bro.mod = md;
                            }
                        }
                    }
                    a.dr = a.tru(dr, "fr");
                    a.du = a.tru(_85d, "fp");
                    a.dt = dt = w.addthis_share.title;
                    a.smd = {
                        rsi: rsi,
                        rxi: rxi,
                        gen: gen,
                        rsc: rsc
                    };
                    w.addthis_share.smd = a.smd;
                    if (a.upm) {
                        w.addthis_share.smd.dr = a.dr;
                    }
                    if (a.upm) {
                        w.addthis_share.smd.sta = a.track.sta();
                    }
                    a.cb = a.ad.cla();
                    a.kw = (a.cb !== 1 ? a.ad.kw() : "");
                    a.dh = dl.hostname;
                    a.ssl = du && du.indexOf("https") === 0 ? 1 : 0;
                    a.ab = ab || w.addthis_ab || "-";
                    w.addthis_config = w.addthis_config || {};
                    if (!w.addthis_config.ignore_server_config && _874) {
                        if (_a.upm && !a.bro.ie6 && !a.bro.ie7) {
                            _a.ipc = true;
                            var _87e = "__atpro_" + _874,
                                _87f = "",
                                _880 = false,
                                _881 = false,
                                _882 = _a.uls,
                                _883 = {
                                    cfs: true
                                },
                                _884 = function _884(_885) {
                                    _a.isProUser = true;
                                    if (!_885.sponsored && (_884.called || _881)) {
                                        return;
                                    }
                                    _a.ab = "per-" + _875[Math.round((Math.random() * (_875.length - 1)))];
                                    _885.cfs = true;
                                    _6.layers(_885, _883);
                                    _884.called = true;
                                },
                                _886 = function() {
                                    if (_6.layers.length) {
                                        _6.layers({
                                            cfs: true
                                        });
                                    } else {
                                        _a.ipc = false;
                                    }
                                },
                                _887 = function() {
                                    _881 = true;
                                    if (!_880) {
                                        _886();
                                    }
                                };
                            if (_882) {
                                _87f = localStorage.getItem(_87e);
                            }
                            if (_87f && _87f !== "false") {
                                try {
                                    _87f = JSON.parse(_87f);
                                } catch (e) {}
                                _884(_87f);
                                _87f = "false";
                            } else {
                                if (_87f === "false") {
                                    _886();
                                } else {
                                    setTimeout(_887, 5000);
                                }
                            }
                            _a.ed.addEventListener("addthis.pro.init", function(e) {
                                _880 = true;
                                if (e.data && e.data._default) {
                                    if (!_87f || _87f === "false" || e.data.sponsored === 1) {
                                        _884(e.data);
                                    }
                                    if (_882 && !e.data.sponsored) {
                                        localStorage.setItem(_87e, JSON.stringify(e.data));
                                    }
                                } else {
                                    if (_87f !== "false") {
                                        _886();
                                    }
                                    if (_882) {
                                        localStorage.setItem(_87e, "false");
                                    }
                                }
                            });
                        } else {
                            var _889 = "__atpro_" + _874,
                                _88a = _a.cookie.rck(_889),
                                _88b = new Date(),
                                _88c = {
                                    pubid: _874
                                },
                                cb = function(_88e) {
                                    _88b.setDate(_88b.getDate() + 7);
                                    if (_88e && _88e._default) {
                                        _a.cookie.sck(_889, "true", 0, 1, _88b);
                                    } else {
                                        _a.cookie.sck(_889, "false", 0, 1, _88b);
                                    }
                                    _88e.cfs = true;
                                    _6.layers(_88e, "cfs");
                                };
                            if (_88a != "false") {
                                _a.ipc = true;
                                a.feeds.get(_88c, cb, "config.json");
                            }
                        }
                    }
                    data = {
                        iit: (new Date()).getTime(),
                        tmr: _50((w.addthis || {}).timer || {}),
                        cb: a.cb,
                        cdn: _atc.cdn,
                        chr: _a.ad.gch(),
                        kw: a.kw,
                        ab: a.ab,
                        dh: a.dh,
                        dr: a.dr,
                        du: a.du,
                        dt: dt,
                        dbg: _a.log.level,
                        md: a.bro.mode,
                        cap: _50({
                            tc: _858.data_track_textcopy ? 1 : 0,
                            ab: _858.data_track_addressbar ? 1 : 0
                        }),
                        inst: a.inst,
                        vcl: a.cookie.view.cla(),
                        jsl: a.track.jsl(),
                        prod: a.track.prod(),
                        lng: a.lng(),
                        ogt: _a.ad.gog().join(","),
                        pc: w.addthis_product || "men",
                        pub: a.pub(),
                        ssl: a.ssl,
                        sid: _a.track.ssid(),
                        srpl: _atc.plmp,
                        srcs: _atc.cscs,
                        srd: _atc.damp,
                        srf: _atc.famp,
                        srx: _atc.xamp,
                        ver: _a.ver(),
                        xck: _atc.xck || 0,
                        xtr: _atc.xtr || 0,
                        og: _a.ad.og(),
                        aa: 0,
                        csi: csi
                    };
                    if (_atc.noup) {
                        data.noup = 1;
                    }
                    if (a.dcp == Number.MAX_VALUE) {
                        data.dnp = 1;
                    }
                    if (a.pixu) {
                        data.pixu = a.pixu;
                    }
                    if (a.trl.length) {
                        data.trl = a.trl.join(",");
                    }
                    if (a.rev) {
                        data.rev = a.rev;
                    }
                    data.ct = a.ct = (_858.data_track_clickback || _858.data_track_linkback || _a.track.ctp(data.pc, _858)) ? 1 : 0;
                    if (a.prv) {
                        data.prv = _50(a.prv);
                    }
                    if (rsc) {
                        data.sr = rsc;
                    }
                    _a.track.ssc(rsc);
                    if (ljep) {
                        data.ljep = ljep;
                    }
                    if (a.vamp >= 0 && !a.sub) {
                        if (cfc) {
                            cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
                            cvt.push(a.track.fcv("typ", "lnk"));
                            if (!isNaN(pos)) {
                                cvt.push(a.track.fcv("ttpos", pos));
                            }
                            if (!isNaN(tot)) {
                                cvt.push(a.track.fcv("ttnl", tot));
                            }
                            if (csi) {
                                cvt.push(a.track.fcv("csi", csi));
                            }
                            cvt.push(a.track.fcv("pco", ("string" === typeof cfc) ? cfc : "cfd-1.0"));
                            cvt.push(a.track.fcv("pur", a.track.mgu(_85d, {
                                defrag: 1
                            })));
                            if (a.dr) {
                                data.pre = a.track.mgu(a.dr, {
                                    defrag: 1
                                });
                            }
                            data.ce = cvt.join(",");
                        } else {
                            if (rsi && (fuid != a.ad.gub())) {
                                cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
                                cvt.push(a.track.fcv("rsi", rsi));
                                cvt.push(a.track.fcv("gen", gen));
                                cvt.push(a.track.fcv("abc", 1));
                                cvt.push(a.track.fcv("fcu", a.ad.gub()));
                                cvt.push(a.track.fcv("rcf", dl.hash));
                                data.ce = cvt.join(",");
                                _85e = "addressbar";
                                _860.rsc = rsc = "addressbar";
                            } else {
                                if (rxi || rsiq || rsc) {
                                    cvt.push(a.track.fcv("plv", Math.round(1 / _atc.vamp)));
                                    if (rsc) {
                                        cvt.push(a.track.fcv("rsc", rsc));
                                    }
                                    if (rxi) {
                                        cvt.push(a.track.fcv("rxi", rxi));
                                    } else {
                                        if (rsiq) {
                                            cvt.push(a.track.fcv("rsi", rsiq));
                                        }
                                    }
                                    if (rsiq || rxi) {
                                        cvt.push(a.track.fcv("gen", gen));
                                    }
                                    data.ce = cvt.join(",");
                                    _85e = rsc || "unknown";
                                }
                            }
                        }
                    }
                    a.track.ts.reset(_860);
                    if (a.feeds._ad()) {
                        a.track.hist.log();
                    }
                    if (_85e) {
                        if (a.bamp >= 0) {
                            data.clk = 1;
                            if (a.dcp != Number.MAX_VALUE) {
                                a.dcp = data.gen = a.ad.type.CLICK;
                            }
                        }
                        _a.ed.fire("addthis.user.clickback", w.addthis || {}, {
                            service: _85e,
                            hash: _a.hash
                        });
                    }
                    if (ab == "per-5" || ab == "per-6" || ab == "per-0" || ab == "per-7" || ab == "per-8" || ab == "per-9" || ab == "per-10") {
                        ab = _a.ab = "per-" + a.feeds.ab(true);
                    }
                    if (!w.at_noxld) {
                        data.xld = 1;
                    }
                    if (a.upm) {
                        data.xd = 1;
                    }
                    if (!nabc && w.history && typeof(history.replaceState) == "function" && (!_a.bro.chr || _a.bro.chb) && (_858.data_track_addressbar || _858.data_track_addressbar_paths) && ((du || "").split("#").shift() != dr) && (du.indexOf("#") == -1 || rsi || (_860.hash && rxi) || cfc)) {
                        var path = dl.pathname || "",
                            _890, _891 = path != "/";
                        if (_858.data_track_addressbar_paths) {
                            _891 = 0;
                            for (var i = 0; i < _858.data_track_addressbar_paths.length; i++) {
                                _890 = new RegExp(_858.data_track_addressbar_paths[i].replace(/\*/g, ".*") + "$");
                                if (_890.test(path)) {
                                    _891 = 1;
                                    break;
                                }
                            }
                        }
                        if (_891 && (!rsi || a.util.ioc(rsi, 5))) {
                            _86e = _a.track.cur(dl.href.split("#").shift(), null, _a.track.ssid());
                            history.replaceState({
                                d: (new Date()),
                                g: gen
                            }, d.title, _86e);
                            data.fcu = _86e.split("#.").pop();
                        }
                    }
                    if (w.addthis && w.addthis.timer) {
                        w.addthis.timer.ifr = (new Date()).getTime();
                        if (data.tmr) {
                            data.tmr += "&ifr=" + w.addthis.timer.ifr;
                        }
                    }
                    if (a.aa === 1 && w.postMessage) {
                        data.srd = 1;
                        data.aa = 1;
                        _a.ed.addEventListener("addthis.layers.warning.show", function(e) {
                            if (e.data && e.data.alertId) {
                                _a.swl = e.data.alertId;
                            }
                        });
                    }
                    _872();
                    if (dl.href.indexOf(_atr) == -1 && !a.sub) {
                        if (a.upm) {
                            if (_a.bro.ffx) {
                                ifr = a.track.ctf();
                                ifr.src = _870;
                                _a.track.qtp(data);
                            } else {
                                if (_a.bro.ie9) {
                                    setTimeout(function() {
                                        ifr = a.track.ctf(_870 + _50(data), true);
                                        a.track.stf(ifr);
                                    }, 0);
                                } else {
                                    ifr = a.track.ctf();
                                    ifr.src = _870 + _50(data);
                                    a.track.stf(ifr);
                                }
                            }
                        } else {
                            ifr = a.track.ctf();
                            ifr.src = _870 + _50(data);
                            a.track.gtf().appendChild(ifr);
                            a.track.stf(ifr);
                        }
                    }
                    _6._pmh.flushed = 1;
                    _6._pmh.flush(_a.pmh, _a);
                    if (w.addthis_language || ac.ui_language) {
                        a.alg();
                    }
                    if (a.plo.length > 0) {
                        a.jlo();
                    }
                } catch (e) {
                    _a.log.debug("lod", e);
                }
            }
            w._ate = a;
            w._adr = r;
            a._ssc = a._ssh = [];
            a.dat = {};
            a._rec.push(function(data) {
                var rdy = a.dat.rdy,
                    s, i;
                _1c(data, function(k, v) {
                    a.dat[k] = v;
                });
                if (data.rdy && !rdy) {
                    a.xfr = 1;
                    a.track.xtp();
                }
                if (data.ssc) {
                    a._ssc = data.ssc;
                }
                if (data.sshs) {
                    data.sshs = data.sshs.replace(/\bpinterest\b/, "pinterest_share");
                    s = w.addthis_ssh = _duc(data.sshs);
                    a.gssh = 1;
                    a._ssh = s.split(",");
                    _a.ed.fire("addthis-internal.data.ssh", {}, {
                        ssh: s
                    });
                }
                if (data.uss) {
                    data.uss = data.uss.replace(/\bpinterest\b/, "pinterest_share");
                    var u = a._uss = _duc(data.uss).split(",");
                    if (w.addthis_ssh) {
                        var seen = {},
                            _89c = [];
                        u = u.concat(a._ssh);
                        for (i = 0; i < u.length; i++) {
                            s = u[i];
                            if (!seen[s]) {
                                _89c.push(s);
                            }
                            seen[s] = 1;
                        }
                        u = _89c;
                    }
                    a._ssh = u;
                    w.addthis_ssh = u.join(",");
                }
                if (data.per) {
                    if (!a.ipc && a.sfmp > 0) {
                        var per = {
                            "per-feed": data["per-feed"],
                            "per-cell": data["per-cell"],
                            "per-vectors": (data["per-vectors"] || "NONE").split(",")
                        };
                        a.feeds && a.feeds.configure(per);
                    }
                }
                if (data.ups) {
                    s = data.ups.split(",");
                    a.ups = {};
                    for (i = 0; i < s.length; i++) {
                        if (s[i]) {
                            var o = _5f(_duc(s[i]));
                            a.ups[o.name] = o;
                        }
                    }
                    a._ups = a.ups;
                }
                if (data.uid) {
                    a.uid = data.uid;
                    _a.ed.fire("addthis-internal.data.uid", {}, {
                        uid: data.uid
                    });
                }
                if (data.bti) {
                    a.bti = data.bti;
                    _a.ed.fire("addthis-internal.data.bti", {}, {
                        bti: data.bti
                    });
                }
                if (w.addthis_bt2) {
                    a.bt2 = w.addthis_bt2;
                }
                if (!a.bt2 && data.bt2) {
                    a.bt2 = data.bt2;
                    _a.ed.fire("addthis-internal.data.bt2", {}, {
                        bt2: data.bt2
                    });
                }
                if (data.bts) {
                    a.bts = parseInt(data.bts, 10);
                    _a.ed.fire("addthis-internal.data.bts", {}, {
                        bts: data.bts
                    });
                }
                if (data.vts) {
                    a.vts = parseInt(data.vts, 10);
                    _a.ed.fire("addthis-internal.data.vts", {}, {
                        vts: data.vts
                    });
                }
                if (data.geo) {
                    try {
                        a.geo = (typeof data.geo == "string") ? _a.util.geo.parse(data.geo) : data.geo;
                    } catch (e) {}
                    _a.ed.fire("addthis-internal.data.geo", {}, {
                        geo: a.geo
                    });
                }
                if (data.dbm) {
                    a.dbm = data.dbm;
                }
                if (data.atgotcode) {
                    a.sau = data.atgotcode;
                }
                if (data.rdy && !rdy) {
                    _a.ed.fire("addthis-internal.data.rdy");
                    return;
                }
            });
            a._rec.push(function(msg) {
                var evt = (msg || {}).remoteEvent;
                if (evt && evt.type && evt.data) {
                    _a.ed.fire(evt.type, {}, evt.data);
                }
            });
            try {
                if (dl.href.indexOf(_atr) > -1) {
                    var ckv = _5f(d.cookie, ";");
                    a._rec[a._rec.length - 1](ckv);
                }
                var _8a2 = {},
                    _245 = _a.util.gsp("addthis_widget.js");
                if (typeof(_245) == "object") {
                    if (_245.provider) {
                        _8a2 = {
                            provider: _a.mun(_245.provider_code || _245.provider),
                            auth: _245.auth || _245.provider_auth || ""
                        };
                        if (_245.uid || _245.provider_uid) {
                            _8a2.uid = _a.mun(_245.uid || _245.provider_uid);
                        }
                        if (_245.logout) {
                            _8a2.logout = 1;
                        }
                        _a.prv = _8a2;
                    }
                    if (_245.headless) {
                        _atc.xcs = 1;
                    }
                    if (_245.dnp) {
                        _a.dcp = Number.MAX_VALUE;
                    }
                    if (_245.dnt) {
                        _atc.xtr = 1;
                    }
                    _a.util.pae(_245);
                    _a.util.pas(_a.util.pae);
                    if (_245.pubid || _245.pub || _245.username) {
                        w.addthis_pub = _duc(_245.pubid || _245.pub || _245.username);
                    }
                    if (w.addthis_pub && w.addthis_config) {
                        w.addthis_config.username = w.addthis_pub;
                    }
                    if (_245.domready) {
                        _atc.dr = 1;
                    }
                    if (_245.onready && _245.onready.match(/[a-zA-Z0-9_\.\$]+/)) {
                        try {
                            _a.onr = _a.evl(_245.onready);
                        } catch (e) {
                            w.console && console.log("addthis: onready function (" + _245.onready + ") not defined", e);
                        }
                    }
                    if (_245.async) {
                        _atc.xol = 1;
                    }
                }
                if (_245.delayupgrade) {
                    _atc.noup = 1;
                } else {
                    if (_atc.ver >= 152 || (w.addthis_conf || {}).ver >= 152) {
                        _atc.ver = 300;
                    }
                }
                _a.ed.fire("addthis-internal.params.loaded", {}, {
                    geo: a.geo
                });
                if ((w.addthis_conf || {}).xol) {
                    _atc.xol = 1;
                }
                if (_atc.ver === 120) {
                    var rc = "atb" + _a.util.cuid(),
                        _8a4 = _a.util.gst("addthis_widget"),
                        span = d.ce("span");
                    span.id = rc;
                    _8a4.parentNode.appendChild(span);
                    _a.igv();
                    _a.lad(["span", rc, addthis_share.url || "[url]", addthis_share.title || "[title]"]);
                }
                if (w.addthis_clickout) {
                    _a.lad(["cout"]);
                }
                if (!_atc.xol && !_atc.xcs && ac.ui_use_css !== false) {
                    css.load();
                    if (_a.bro.ie6 || _a.bro.ie7) {
                        _853.load();
                    }
                    if (_a.bro.ipa) {
                        _854.load();
                    }
                }
            } catch (e) {
                _a.log.error("main", e);
            }
            _d1.bindReady();
            _d1.append(main);
            (function(e, g, i) {
                var b;
                var a = false,
                    m = _a.upm && (w.postMessage && (typeof w.postMessage == "function" || (typeof(w.postMessage || {}).call == "function" && typeof(w.postMessage || {}).apply == "function")) && !_a.bro.ie6 && !_a.bro.ie7),
                    h = false;

                function f(n) {
                    if (_a.unj && !_a.bro.msi) {
                        return JSON.stringify(n);
                    } else {
                        return _a.util.rtoKV(n, "&&", "==");
                    }
                }

                function j(p) {
                    if (p && typeof(p) == "string") {
                        if (_a.unj && p.indexOf("{") === 0) {
                            try {
                                return JSON.parse(p);
                            } catch (n) {
                                return _a.util.rfromKV(p);
                            }
                        } else {
                            return _a.util.rfromKV(p, "&&", "==");
                        }
                    } else {
                        return p;
                    }
                }

                function c(o) {
                    var n;
                    if (!a || o.origin.slice(-12) == ".addthis.com") {
                        if (!o.data) {
                            return;
                        }
                        n = j(o.data);
                        n.origin = o.origin;
                        k(n);
                    }
                }

                function k(n) {
                    if (n.addthisxf) {
                        _a.ed.fire(n.addthisxf, n.target || n.payload, n.payload);
                    }
                }
                _41(_a, {
                    xf: {
                        upm: m,
                        listen: function() {
                            if (h) {
                                return;
                            }
                            if (m) {
                                if (l.href.indexOf(".addthis.com") == -1) {
                                    a = true;
                                }
                                if (w.attachEvent) {
                                    w.attachEvent("onmessage", c, false);
                                    d.attachEvent("onmessage", c, false);
                                } else {
                                    w.addEventListener("message", c, false);
                                }
                                window.addthis._pml.push(c);
                            }
                            h = true;
                        },
                        send: function(o, n, p) {
                            if (m) {
                                setTimeout(function() {
                                    o.postMessage(f({
                                        addthisxf: n,
                                        payload: p
                                    }), "*");
                                }, 0);
                            }
                        }
                    }
                });
            })(_a, _a.api, _a);
            (function(a, d, b) {
                d.HIGH = 3;
                d.MED = 2;
                d.LOW = 1;
                d.ASC = 1;
                d.DSC = d.DESC = 0;

                function c(j) {
                    var e = j || [],
                        f = e.length === 0 ? {} : h(e),
                        m = e;
                    e._map = f;

                    function g(n) {
                        e.sort(function(p, o) {
                            return i(p, o, d.ASC, n);
                        });
                    }

                    function k(n) {
                        e.sort(function(p, o) {
                            return i(p, o, d.DSC, n);
                        });
                    }

                    function i(p, n, r, s) {
                        var q = p[s],
                            o = n[s];
                        if (typeof(q) == "string" && !isNaN(parseInt(q, 10))) {
                            q = parseInt(q, 10);
                            o = parseInt(o, 10);
                            if (r) {
                                return q - q;
                            }
                            return q - o;
                        }
                        if (q > o) {
                            return r ? 1 : -1;
                        } else {
                            if (q == o) {
                                return 0;
                            }
                        }
                        return r ? -1 : 1;
                    }

                    function h() {
                        var o = {};
                        for (var n = 0; n < e.length; n++) {
                            if (e[n].name) {
                                o[e[n].name] = e[n];
                            } else {
                                o[e[n]] = e[n];
                            }
                        }
                        return o;
                    }
                    m.add = function(n) {
                        if (n) {
                            m.push(n);
                            m._map[n.name || n] = n;
                        }
                    };
                    m.addOne = function(n) {
                        if (n) {
                            if (m._map[n.name || n]) {
                                return;
                            }
                            m.add(n);
                        }
                    };
                    m.toMap = function(o) {
                        if (!o) {
                            o = "name";
                        }
                        var p = {};
                        for (var n = 0; n < e.length; n++) {
                            p[e[n][o]] = e[n];
                        }
                        return p;
                    };
                    m.map = m.toMap;
                    m.has = function(n) {
                        return m.iskey(n);
                    };
                    m.hasKeys = function(o) {
                        if (typeof(o) == "string") {
                            o = o.split(",");
                        }
                        if (o.length === 0) {
                            return false;
                        }
                        for (var n = 0; n < o.length; n++) {
                            if (!m.iskey(o[n])) {
                                return false;
                            }
                        }
                        return true;
                    };
                    m.iskey = function(p) {
                        if (typeof(p) == "string") {
                            p = p.split(",");
                        }
                        if (p instanceof Array) {
                            for (var o = 0; o < p.length; o++) {
                                var n = p[o].replace(/ /g, "");
                                if (m._map[n]) {
                                    return 1;
                                }
                            }
                        }
                        return 0;
                    };

                    function l(r, q) {
                        if (typeof(r) == "string") {
                            r = r.split(",");
                        }
                        if (r instanceof Array) {
                            for (var p = 0; p < r.length; p++) {
                                var n = r[p].replace(/ /g, "");
                                for (var o = 0; o < q.length; q++) {
                                    if (m._map[q[o]] == n) {
                                        return 1;
                                    }
                                }
                            }
                        }
                        return 0;
                    }
                    m.keys = function(p, o, q) {
                        if (!o) {
                            o = "name";
                        }
                        if (!q) {
                            q = "score";
                        }
                        var r = [];
                        if (p == d.ASC) {
                            g(q);
                        } else {
                            k(q);
                        }
                        for (var n = 0; n < e.length; n++) {
                            r.push(typeof(e[n]) == "object" ? e[n].name : e[n]);
                        }
                        return r;
                    };
                    m.top = function(o, p) {
                        if (!p) {
                            p = "score";
                        }
                        k(p);
                        var q = [];
                        for (var n = 0; n < Math.min(o || 1, e.length); n++) {
                            q.push(e[n].name);
                        }
                        return q;
                    };
                    m.filter = function(p) {
                        var o = [];
                        for (var n = 0; n < e.length; n++) {
                            _a.util.each(p, function(r, q) {
                                if (e[n][r] == q) {
                                    o.push(e[n]);
                                }
                            });
                        }
                        return c(o);
                    };
                    return m;
                }
                a.data = a.data || {};
                a.data.OrderedSet = c;
            })(_a, _a.api, _a);
            (function() {
                var _8e8 = 0,
                    _8e9 = [{
                        name: "menujs",
                        url: _atc.rsrcs.menujs,
                        test: function() {
                            return !!window._atw;
                        }
                    }],
                    _8ea = {
                        ".addthis-recommendedbox": "recommendedbox"
                    };
                if (!_8e8) {
                    window.addthis.auth = {};
                    window.addthis.bar = {};
                    window.addthis.login = {};
                    window.addthis.sharecounters = {};
                    _a.api.register({
                        context: window.addthis.login,
                        methods: {
                            initialize: {
                                callback: function() {
                                    _6.login.initialize.apply(_6.login, arguments);
                                }
                            },
                            connect: {
                                callback: function() {
                                    _6.login.connect.apply(_6.login, arguments);
                                }
                            }
                        },
                        resources: [{
                            name: "sso",
                            url: _atc.rsrcs.ssojs,
                            test: function() {
                                return _6.login.ost;
                            }
                        }, {
                            name: "ssocss",
                            url: _atc.rsrcs.ssocss
                        }]
                    });
                    _a.api.addAsync({
                        resources: [{
                            name: "lightboxcss"
                        }, {
                            name: "lightbox",
                            test: function() {
                                return _6.lightbox.ost;
                            }
                        }],
                        method: "lightbox",
                        context: window.addthis,
                        callback: function(_8eb) {
                            _6.lightbox(_8eb);
                        }
                    });
                    _a.api.addAsync({
                        resources: _8e9,
                        method: "menu",
                        event: "addthis.menu.ready",
                        callback: function() {
                            _a.menu.open.apply(_a.menu, arguments);
                        }
                    });
                    _a.api.addAsync({
                        context: window.addthis.menu,
                        method: "close",
                        resources: _8e9,
                        event: "addthis.menu.ready",
                        callback: function() {
                            _a.menu.close.apply(_a.menu.close, arguments);
                        }
                    });
                    _a.api.register({
                        context: window.addthis.bar,
                        methods: {
                            initialize: {
                                resources: [{
                                    name: "layersjs",
                                    url: _atc.rsrcs.layersjs
                                }],
                                oncall: function() {},
                                event: "addthis.bar.ready",
                                callback: function() {
                                    _a.track.apc("wmb-1.0");
                                    _6.bar.initialize.apply(_6.bar, arguments);
                                }
                            }
                        }
                    });
                    window.addthis.bar.show = function() {
                        var args = Array.prototype.slice.call(arguments);
                        args.push("render");
                        _6.bar.initialize.apply(_6.bar, args);
                    };
                    window.addthis.bar.render = function() {
                        var args = Array.prototype.slice.call(arguments);
                        args.push("render");
                        _6.bar.initialize.apply(_6.bar, args);
                    };
                    window.addthis.bar.hide = function() {
                        _a.ed.fire("addthis.welcome.hide", {}, {});
                    };
                    _a.api.addAsync({
                        resources: [{
                            name: "auth",
                            url: _atc.rsrcs.authjs
                        }],
                        method: "init",
                        context: window.addthis.auth,
                        event: "addthis.auth.ready",
                        callback: function() {}
                    });
                    _a.api.addAsync({
                        resources: [{
                            name: "contentjs",
                            url: _atc.rsrcs.contentjs,
                            test: function() {
                                return _6.box.ost;
                            }
                        }, {
                            name: "contentcss",
                            url: _atc.rsrcs.contentcss
                        }],
                        method: "box",
                        pre: function(what) {
                            for (var a = 0; a < what.length;) {
                                if (what[a]._loading) {
                                    what.splice(a, 1);
                                } else {
                                    what[a]._loading = 1;
                                    a++;
                                }
                            }
                        }
                    });
                    _a.api.addAsync({
                        context: window.addthis.ad,
                        callback: function() {
                            _6.ad.menu.apply(_6.ad, arguments);
                        },
                        method: "menu",
                        resources: new _a.resource.Bundle(new _a.resource.Resource("embedcss", _atc.rsrcs.embedcss, function() {
                            return true;
                        }), new _a.resource.Resource("embedjs", _atc.rsrcs.embed, function() {
                            return w.addthis && ((w.addthis.ad || {}).embed || {}).ost;
                        }))
                    });
                    _a.api.addAsync({
                        resources: [{
                            name: "overlayjs",
                            url: _atc.rsrcs.overlayjs,
                            test: function() {
                                return (_6.overlay || {}).ost;
                            }
                        }],
                        method: "overlay",
                        pre: function() {
                            _a.track.apc("ovr-" + _a.ver());
                        }
                    });
                    _a.api.register({
                        resources: [{
                            name: "layersjs",
                            url: _atc.rsrcs.layersjs
                        }],
                        methods: {
                            layers: {
                                event: "addthis.layers.ready",
                                callback: function() {
                                    _6.layers.apply(_6.layers, arguments);
                                },
                                oncall: function() {
                                    var i = -1,
                                        x, obj, args, _8f4 = true,
                                        _8f5 = {
                                            share: "smlsh-1.0",
                                            follow: "smlfw-1.0",
                                            recommended: "smlre-1.0",
                                            whatsnext: "smlwn-1.0",
                                            warning: "smlwrn-1.0",
                                            recommendedbox: "smlreb-1.0"
                                        },
                                        _8f6 = false;
                                    while (++i < _6.plo.length) {
                                        obj = _6.plo[i];
                                        if (obj.call === "layers") {
                                            args = obj.args[0];
                                            for (x in args) {
                                                if (_8f5[x]) {
                                                    _a.track.apc(_8f5[x]);
                                                    if (x === "warning") {
                                                        _a.aa = 1;
                                                    }
                                                }
                                            }
                                            _a.track.apc("sml-1.0");
                                        }
                                    }
                                    _d1.append(function() {
                                        for (var _8f7 in _8ea) {
                                            if (_8ea.hasOwnProperty(_8f7)) {
                                                var _8f8 = _a.util.select(_8f7),
                                                    _8f9 = {};
                                                if (_8f8.length) {
                                                    _8f9[_8ea[_8f7]] = true;
                                                    _8f9.pi = false;
                                                    _6.layers(_8f9);
                                                    _8f6 = true;
                                                }
                                            }
                                        }
                                        if (_8f6) {
                                            _6.layers({
                                                pii: true
                                            });
                                        }
                                    });
                                }
                            }
                        }
                    });
                    _a.api.register({
                        context: _6.sharecounters,
                        methods: {
                            getShareCounts: {
                                resources: [{
                                    name: "counter",
                                    url: _atc.rsrcs.counter,
                                    test: function() {
                                        return _6.sharecounters.ost === 1;
                                    }
                                }],
                                callback: function() {
                                    _6.sharecounters.getShareCounts.apply(_6.sharecounters, arguments);
                                }
                            }
                        }
                    });
                    var _8fa = [{
                        name: "countercss",
                        url: _atc.rsrcs.countercss
                    }, {
                        name: "counter",
                        url: _atc.rsrcs.counter,
                        test: function() {
                            return window.addthis.counter.ost;
                        }
                    }];
                    if (_a.bro.ie6 || _a.bro.ie7) {
                        _8fa.push({
                            name: "counterIE67css",
                            url: _atc.rsrcs.counterIE67css
                        });
                    }
                    if (!w.JSON || !w.JSON.stringify) {
                        _8fa.push({
                            name: "json2",
                            url: _atr + "static/r07/json2.js",
                            test: function() {
                                return w.JSON && w.JSON.stringify;
                            }
                        });
                    }
                    _a.api.addAsync({
                        method: "counter",
                        resources: _8fa
                    });
                    _a.api.addAsync({
                        method: "count",
                        resources: _8fa
                    });
                    _6.data.getShareCount = function(_8fb, _8fc) {
                        var _8fd = new _a.resource.ResourceBundle(_8fa);
                        _8fd.addEventListener("load", function() {
                            _6.data.getShareCount(_8fb, _8fc);
                        });
                        _8fd.load();
                    };
                    _8e8 = 1;
                }
            })();
            (function() {
                function validateServiceCode(_8fe) {
                    if (!_8fe || _8fe.length < 5 || _8fe.length > 30) {
                        throw new Error("Service code must be between 5 and 30 characters.");
                    } else {
                        if (_8fe.search(/^[a-zA-Z0-9_]+$/) == -1) {
                            throw new Error("Service code must consist entirely of letters, numbers and underscores.");
                        }
                    }
                    return true;
                }
                _6.logShare = function(url, _900, _901, _902) {
                    var c = _902 || addthis_config,
                        s = _901 || addthis_share;
                    c.product = "hdl-" + _a.ver();
                    s.imp_url = 0;
                    var url = url || (_901 && _901.url) || addthis_share.url,
                        ct = _a.track.dcu(url);
                    if (ct.rsc && !_900) {
                        _900 = ct.rsc;
                    }
                    if (validateServiceCode(_900)) {
                        s.url = url;
                        _a.share.track(_900, 0, s, c);
                    }
                };
                _6.addClickTag = function(url, _907, _908, _909) {
                    var url = url || _908 && _908.url || addthis_share.url;
                    if (validateServiceCode(_907)) {
                        url = _a.track.cur(_a.track.cof(url), _907);
                    }
                    return url;
                };
            })();
            if (!window.addthis) {
                window.addthis = {};
            }
            _6.user = (function() {
                var a = _a,
                    at = _6,
                    _90c = 1000,
                    u = {},
                    _90d = 0,
                    _90e = 0,
                    _90f = {
                        tags: a.cookie.tag.get()
                    },
                    _910 = false,
                    _911 = a.data.OrderedSet,
                    _912 = _a.data.Set,
                    _913;

                function apiReduce(fn, acc) {
                    return a.reduce(["getID", "getGeolocation", "getServiceShareHistory"], fn, acc);
                }

                function reply(key, def) {
                    return function(fn) {
                        setTimeout(function() {
                            fn(a[key] || def);
                        }, 0);
                    };
                }

                function setup(data) {
                    if (_90d) {
                        return;
                    }
                    if (!data || !data.uid) {
                        return;
                    }
                    if (_913 !== null) {
                        clearTimeout(_913);
                    }
                    _913 = null;
                    _90d = 1;
                    apiReduce(function(_91a, name, i) {
                        u[name] = u[name].queuer.flush(reply.apply(at, _91a[i]), at);
                        return _91a;
                    }, [
                        ["uid", ""],
                        ["geo", ""],
                        ["_ssh", []]
                    ]);
                }

                function fakeData() {
                    var data = {
                        uid: "x",
                        geo: {},
                        ssh: "",
                        ups: ""
                    };
                    _90e = 1;
                    setup(data);
                }
                _913 = setTimeout(fakeData, _90c);
                a._rec.push(setup);

                function arrmap(_91e) {
                    var map = {};
                    for (var i = 0; i < _91e.length; i++) {
                        map[_91e[i]] = _91e[i];
                    }
                    return map;
                }

                function isLocatedIn(desc) {
                    return a.util.geo.isin(desc, a.geo);
                }

                function hasInterest(desc) {
                    return _90f.interests.iskey(desc);
                }

                function hasTag(tag) {
                    return _90f.tags.iskey(tag);
                }

                function hasTags(tags) {
                    return _90f.tags.hasKeys(tags);
                }

                function ready(fn) {
                    if (!_a.uud) {
                        _a.ed.fire("addthis-internal.api", window.addthis || {}, {
                            call: "rdy"
                        });
                    }
                    _a.uud = 1;
                    if (_90d && (_a.jlng() == "en" || window.addthis_translations)) {
                        var _926 = _a.share.services.init(window.addthis_config),
                            opts = (window.addthis_options || "").replace(",more", "").split(",");
                        if (isOptedOut()) {
                            fn(_90f);
                            return;
                        }
                        var _928 = [];
                        var tags = a.cookie.tag.get();
                        for (var k in _a.bti) {
                            _928.push(_a.bti[k]);
                        }
                        _90f.interests = new _911(_928);
                        _90f.tags = new _911(tags);
                        var _92b = new _911();
                        _a.util.each(a._uss, function(k, name) {
                            _92b.addOne({
                                name: name,
                                score: _6.HIGH
                            });
                        });
                        _a.util.each(a._ssc, function(name, val) {
                            _92b.addOne({
                                name: name,
                                score: val
                            });
                        });
                        _90f.services = _92b;
                        _90f.activity = {};
                        _90f.activity.social = _a.bts;
                        _90f.activity.view = _a.vts;
                        _90f.source = getSource();
                        api.location = _90f.location = _a.geo || {};
                        _90f.location.contains = isLocatedIn;
                        if (fn) {
                            fn(_90f);
                        }
                        _a.ed.fire("addthis.user.data", window.addthis || {}, {});
                    } else {
                        if (_a.jlng() !== "en" && !window.addthis_translations) {
                            _a.ed.addEventListener("addthis.i18n.ready", function() {
                                ready(fn);
                            });
                            _a.alg();
                        } else {
                            setTimeout(function() {
                                ready(fn);
                            }, 250);
                        }
                    }
                }

                function getUserData(fn) {
                    ready(fn);
                }
                u.getData = getUserData;
                u.getPreferredServices = function(fn) {
                    if (_a.jlng() == "en" || window.addthis_translations) {
                        var _932 = _a.share.services.init(window.addthis_config),
                            opts = (window.addthis_options || "").replace(",more", "").split(",");
                        fn(opts);
                    } else {
                        _a.ed.addEventListener("addthis.i18n.ready", function() {
                            var _934 = _a.share.services.init(window.addthis_config),
                                opts = (window.addthis_options || "").replace(",more", "").split(",");
                            fn(opts);
                        });
                        _a.alg();
                    }
                };

                function isReturning() {
                    return (_a.cookie.view.cla()) > 0;
                }

                function tag(tag) {
                    var tags = tag;
                    if (typeof(tags) == "string") {
                        tags = tags.split(",");
                    }
                    _a.cookie.tag.add(tags);
                }

                function measuredCallFactory(code, _938) {
                    var rv = function(a, b, c) {
                        var args = Array.prototype.slice.call(arguments);
                        _a.ed.fire("addthis-internal.api", window.addthis || {}, {
                            call: code
                        });
                        return _938.apply(this, args);
                    };
                    return rv;
                }

                function measureCall(code) {
                    _a.ed.fire("addthis-internal.api", window.addthis || {}, {
                        call: code
                    });
                }

                function getInterests() {
                    measureCall("gti");
                    return _90f.interests;
                }

                function getServices() {
                    measureCall("gts");
                    return _90f.services;
                }

                function getSource() {
                    measureCall("gtt");
                    return a.track.ts.get();
                }

                function getLocation() {
                    measureCall("gtl");
                    return _90f.location;
                }

                function isOptedOut() {
                    return a.uid == "0000000000000000";
                }

                function isUserOf(_93f) {
                    return ((a._ssh && a._ssh.indexOf(_93f) > -1) || (a._ssc && a._ssc[_93f]));
                }

                function isSocial(_940) {
                    var _941 = getSource();
                    if (_941.type == "social") {
                        if (typeof(_940) == "string") {
                            _940 = _940.split(",");
                        }
                        if (_940 instanceof Array) {
                            var _942 = {};
                            for (var i = 0; i < _940.length; i++) {
                                _942[_940[i]] = 1;
                            }
                            if (!_942[_941.service]) {
                                return false;
                            }
                        }
                        return true;
                    }
                    return false;
                }

                function isSearch(_944) {
                    var _945 = getSource(),
                        i;
                    if (_945.type == "search") {
                        if (typeof(_944) == "string") {
                            _944 = _944.split(",");
                        }
                        if (_944 instanceof Array) {
                            var _947 = {};
                            for (i = 0; i < _944.length; i++) {
                                _947[_944[i]] = 1;
                            }
                            if (_945.terms && _945.terms.length) {
                                for (i = 0; i < _945.terms.length; i++) {
                                    if (!_947[_945.terms[i]]) {
                                        return false;
                                    }
                                }
                            }
                        }
                        return true;
                    }
                    return false;
                }
                var api = {
                    ready: ready,
                    isReturning: isReturning,
                    isOptedOut: measuredCallFactory("ioo", isOptedOut),
                    isUserOf: measuredCallFactory("iuf", isUserOf),
                    hasInterest: hasInterest,
                    hasTag: hasTag,
                    hasTags: hasTags,
                    isLocatedIn: isLocatedIn,
                    tag: tag,
                    interests: getInterests,
                    services: getServices,
                    location: getLocation
                };
                _6.session = {
                    source: getSource,
                    isSocial: measuredCallFactory("isl", isSocial),
                    isSearch: measuredCallFactory("ish", isSearch)
                };
                _a.extend(u, api);
                return apiReduce(function(o, name) {
                    o[name] = (new at._Queuer(name)).call;
                    return o;
                }, u);
            })();
            if (!window.addthis.osta) {
                _6.osta = 1;
                window.addthis.cache = {};
                window.addthis.ed = _a.ed;
                window.addthis.init = function() {
                    _d1.onReady();
                    _6.ready && _6.ready();
                };
                window.addthis.cleanup = function() {
                    _a.util.each(((window.addthis || {})._pml || []), function(i, _94c) {
                        _a.util.unlisten(window, "message", _94c);
                    });
                };
                _a.extend(window.addthis.util, {
                    getServiceName: _a.services.getName
                });
                window.addthis.addEventListener = _a.util.bind(_a.ed.addEventListener, _a.ed);
                window.addthis.removeEventListener = _a.util.bind(_a.ed.removeEventListener, _a.ed);
                _a.extend(_6, _a.api);
                var d = document,
                    _94d = 0,
                    u = _1,
                    w = window,
                    _94e = {},
                    _854 = new _a.resource.Resource("widget32css", _atc.rsrcs.widget32css),
                    _94f = new _a.resource.Resource("widget20css", _atc.rsrcs.widget20css),
                    _950 = false,
                    _951 = false,
                    _952, _953, _954, _955, _956 = {},
                    _957 = {},
                    body = null,
                    _959 = _a.util.select,
                    _95a = [],
                    _95b = [],
                    _95c = [],
                    v, _95d = {
                        rss: "Subscribe"
                    },
                    _95e = {
                        tweet: "Tweet",
                        pinterest_share: "Pinterest",
                        email: "Email",
                        mailto: "Email",
                        print: "Print",
                        favorites: "Favorites",
                        twitter: "Tweet",
                        digg: "Digg",
                        more: "View more services"
                    },
                    json = {
                        email_vars: 1,
                        passthrough: 1,
                        modules: 1,
                        templates: 1,
                        services_custom: 1
                    },
                    _960 = {
                        feed: 1,
                        more: _a.ver() < 300,
                        email: _a.ver() < 300,
                        mailto: 1
                    },
                    _961 = {
                        feed: 1,
                        email: _a.ver() < 300,
                        mailto: 1,
                        print: 1,
                        more: !_a.bro.ipa && _a.ver() < 300,
                        favorites: 1
                    },
                    _962 = {
                        print: 1,
                        favorites: 1,
                        mailto: 1
                    },
                    _963 = {
                        pinterest_pinit: (_a.ver() < 300),
                        pinterest_share: (_a.ver() < 300)
                    },
                    _964 = {
                        email: _a.ver() >= 300,
                        more: _a.ver() >= 300
                    };
                _a.ed.addEventListener("addthis-internal.data.ssh", function() {
                    _955 = 1;
                });
                _a.ulg(function(_965) {
                    _95e.email = _95e.mailto = _965[0][4];
                    _95e.print = _965[0][22];
                    _95e.favorites = _965[0][5];
                    _95e.more = _965[0][2];
                    while (_95c.length > 0) {
                        v = _95c.pop();
                        if (v && v.link && v.title) {
                            v.link.title = _95e[v.title] || v.link.title;
                        }
                    }
                });

                function unaccent(s) {
                    if (s.indexOf("&") > -1) {
                        s = s.replace(/&([aeiou]).+;/g, "$1");
                    }
                    return s;
                }

                function mrg(o, n) {
                    if (n && o !== n) {
                        for (var k in n) {
                            if (o[k] === u) {
                                o[k] = n[k];
                            }
                        }
                    }
                }

                function addIEHoverFix() {
                    if (_a.bro.msi && !d.getElementById("at300bhoveriefilter")) {
                        var head = d.getElementsByTagName("head")[0],
                            _96b = d.ce("style"),
                            _96c = d.createTextNode(".at300b:hover,.at300bs:hover {filter:alpha(opacity=80);}");
                        _96b.id = "at300bhoveriefilter";
                        _96b.type = "text/css";
                        if (_96b.styleSheet) {
                            _96b.styleSheet.cssText = _96c.nodeValue;
                        } else {
                            _96b.appendChild(_96c);
                        }
                        head.appendChild(_96b);
                    }
                }
                _6.addEvents = function(o, ss, au) {
                    if (!o) {
                        return;
                    }
                    var _970 = o.onclick || function() {},
                        _971 = _962[ss] ? function() {
                            _a.share.track(ss, 0, o.share, o.conf);
                        } : function() {
                            _a.share.notify(ss, o.share, o.conf, o);
                        };
                    if (o.conf.data_ga_tracker || addthis_config.data_ga_tracker || o.conf.data_ga_property || addthis_config.data_ga_property) {
                        o.onclick = function() {
                            _a.gat(ss, au, o.conf, o.share);
                            _971();
                            return _970();
                        };
                    } else {
                        o.onclick = function(e) {
                            if (!_963[ss]) {
                                _971();
                            }
                            return _970(e);
                        };
                    }
                };

                function check32(o, _974) {
                    if (_950 && !_974) {
                        return true;
                    }
                    var opc = _a.util.parent(o, ".addthis_toolbox");
                    _950 = ((opc.className || "").search(/32x32/i) > -1 || (o.className || "").search(/32x32/i) > -1);
                    return _950;
                }

                function check20(o, _977) {
                    if (_951 && !_977) {
                        return true;
                    }
                    var opc = _a.util.parent(o, ".addthis_toolbox");
                    _951 = ((opc.className || "").search(/20x20/i) > -1 || (o.className || "").search(/20x20/i) > -1);
                    return _951;
                }

                function registerProductCode(o) {
                    var opc = (o.parentNode || {}).className || "",
                        pc = o.conf && o.conf.product && opc.indexOf("toolbox") == -1 ? o.conf.product : "tbx" + (o.className.indexOf("32x32") > -1 || opc.indexOf("32x32") > -1 ? "32" : "") + "-" + _a.ver();
                    if (pc.indexOf(32) > -1) {
                        _950 = true;
                    }
                    _a.track.apc(pc);
                    return pc;
                }

                function rpl(o, n) {
                    var r = {};
                    for (var k in o) {
                        if (n[k]) {
                            r[k] = n[k];
                        } else {
                            r[k] = o[k];
                        }
                    }
                    return r;
                }

                function _makeButton(w, h, alt, url) {
                    var img = document.ce("img");
                    img.width = w;
                    img.height = h;
                    img.border = 0;
                    img.alt = alt;
                    img.src = url;
                    return img;
                }

                function _parseThirdPartyAttributes(el, _986) {
                    var key, attr = [],
                        rv = {},
                        len = Math.min((el.attributes || []).length || 0, 160),
                        _98b = _986.replace(/:/g, "-");
                    if (isNaN(len)) {
                        return rv;
                    }
                    for (var i = 0; i < len; i++) {
                        key = el.attributes[i];
                        if (!key) {
                            continue;
                        }
                        attr = key.name.split(_986 + ":");
                        if (!attr || attr.length == 1) {
                            if (key.name.indexOf("data-") == -1) {
                                continue;
                            }
                            attr = key.name.split("data-" + _98b + "-");
                            if (!attr || attr.length == 1) {
                                continue;
                            }
                        }
                        if (attr.length == 2) {
                            rv[attr.pop()] = key.value;
                        }
                    }
                    return rv;
                }
                _a.api.ptpa = _parseThirdPartyAttributes;

                function _parseAttributes(el, _98e, name, _990) {
                    var _98e = _98e || {},
                        rv = {},
                        _992 = _parseThirdPartyAttributes(el, "addthis");
                    if (Object.prototype.toString.call(_98e) === "[object Object]" && !_98e.nodeType) {
                        for (var k in _98e) {
                            rv[k] = _98e[k];
                        }
                    }
                    if (_990) {
                        for (var k in el[name]) {
                            rv[k] = el[name][k];
                        }
                    }
                    for (var k in _992) {
                        if (_992.hasOwnProperty(k)) {
                            if (_98e[k] && !_990) {
                                rv[k] = _98e[k];
                            } else {
                                var v = _992[k];
                                if (v) {
                                    rv[k] = v;
                                } else {
                                    if (_98e[k]) {
                                        rv[k] = _98e[k];
                                    }
                                }
                                if (rv[k] === "true") {
                                    rv[k] = true;
                                } else {
                                    if (rv[k] === "false") {
                                        rv[k] = false;
                                    }
                                }
                            }
                            if (rv[k] !== u && json[k] && (typeof rv[k] == "string")) {
                                try {
                                    rv[k] = JSON.parse(rv[k].replace(/'/g, "\""));
                                } catch (e) {
                                    rv[k] = _a.evl("(" + rv[k] + ");", true);
                                }
                            }
                        }
                    }
                    return rv;
                }

                function _processCustomServices(conf) {
                    var acs = (conf || {}).services_custom;
                    if (!acs) {
                        return;
                    }
                    if (!(acs instanceof Array)) {
                        acs = [acs];
                    }
                    for (var i = 0; i < acs.length; i++) {
                        var _998 = acs[i];
                        if (_998.name && _998.icon && _998.url) {
                            if (typeof _998.url == "object") {
                                _998.url = _a.util.toKV(_998.url);
                            }
                            _998.code = _998.url = _998.url.replace(/ /g, "");
                            _998.code = _998.code.split("//").pop().split("?").shift().split("/").shift().toLowerCase();
                            _94e[_998.code] = _998;
                        }
                    }
                }

                function _getCustomService(ss, conf) {
                    return _94e[ss] || {};
                }

                function _getATtributes(el, _99c, _99d, _99e) {
                    var rv = {
                        conf: _99c || {},
                        share: _99d || {}
                    };
                    rv.conf = _parseAttributes(el, _99c, "conf", _99e);
                    rv.share = _parseAttributes(el, _99d, "share", _99e);
                    return rv;
                }

                function _render(what, conf, _9a2, _9a3) {
                    _a.igv();
                    if (what) {
                        conf = conf || {};
                        _9a2 = _9a2 || {};
                        var _9a4 = conf.conf || _952,
                            _9a5 = conf.share || _953,
                            _9a6 = _9a2.onmouseover,
                            _9a7 = _9a2.onmouseout,
                            _9a8 = _9a2.onclick,
                            _9a9 = _9a2.internal,
                            u = _1,
                            ss = _9a2.singleservice;
                        if (ss) {
                            if (_9a8 === u) {
                                _9a8 = _960[ss] ? function(el, _9ac, _9ad) {
                                    var s = rpl(_9ad, _957);
                                    return addthis_open(el, ss, s.url, s.title, rpl(_9ac, _956), s);
                                } : _961[ss] ? function(el, _9b0, _9b1) {
                                    var s = rpl(_9b1, _957);
                                    return addthis_sendto(ss, rpl(_9b0, _956), s);
                                } : _964[ss] ? function(el, _9b4, _9b5) {
                                    var s = rpl(_9b5, _957);
                                    return _a.share.stw(ss, s, _9b4, 735);
                                } : null;
                            }
                        } else {
                            if (!_9a2.noevents) {
                                if (!_9a2.nohover) {
                                    if (_9a6 === u) {
                                        _9a6 = function(el, _9b8, _9b9) {
                                            return addthis_open(el, "", null, null, rpl(_9b8, _956), rpl(_9b9, _957));
                                        };
                                    }
                                    if (_9a7 === u) {
                                        _9a7 = function(el) {
                                            return addthis_close();
                                        };
                                    }
                                    if (_9a8 === u) {
                                        _9a8 = function(el, _9bc, _9bd) {
                                            return addthis_sendto("more", rpl(_9bc, _956), rpl(_9bd, _957));
                                        };
                                    }
                                } else {
                                    if (_9a8 === u) {
                                        _9a8 = function(el, _9bf, _9c0) {
                                            return addthis_open(el, "more", null, null, rpl(_9bf, _956), rpl(_9c0, _957));
                                        };
                                    }
                                }
                            }
                        }
                        what = _959(what);
                        for (var i = 0; i < what.length; i++) {
                            var o = what[i],
                                _9c3 = o.parentNode,
                                _9c4 = _getATtributes(o, _9a4, _9a5, !_9a3) || {};
                            mrg(_9c4.conf, _952);
                            mrg(_9c4.share, _953);
                            o.conf = _9c4.conf;
                            o.share = _9c4.share;
                            if (o.conf.ui_language) {
                                _a.alg(o.conf.ui_language);
                            }
                            _processCustomServices(o.conf);
                            if (_9c3 && _9c3.className.indexOf("toolbox") > -1 && (o.conf.product || "").indexOf("men") === 0) {
                                o.conf.product = "tbx" + (_9c3.className.indexOf("32x32") > -1 ? "32" : (_9c3.className.indexOf("20x20") > -1 ? "20" : "")) + "-" + _a.ver();
                                _a.track.apc(o.conf.product);
                            }
                            if (ss && ss !== "more") {
                                o.conf.product = registerProductCode(o);
                            }
                            if ((!o.conf || (!o.conf.ui_click && !o.conf.ui_window_panes)) && !_a.bro.ipa) {
                                _a.maf = _a.maf || {};
                                _a.maf.home = this;
                                _a.maf.key = null;
                                _a.maf.shift = null;
                                if (_9a6) {
                                    o.onfocus = o.onmouseover = function() {
                                        _a.maf.sib = this.nextSibling;
                                        while (_a.maf.sib && _a.maf.sib.nodeType == 3 && _a.maf.sib.nextSibling) {
                                            _a.maf.sib = _a.maf.sib.nextSibling;
                                        }
                                        if (!_a.maf.sib || _a.maf.sib.nodeType == 3) {
                                            var el = this.parentNode;
                                            if (!el) {
                                                el = document.body.firstChild || document.body;
                                                while (el.nodeType == 3 && el.nextSibling) {
                                                    el = el.nextSibling;
                                                }
                                            } else {
                                                while (el.nextSibling && el.nodeType == 3) {
                                                    el = el.nextSibling;
                                                }
                                            }
                                            _a.maf.sib = el;
                                        }
                                        _a.maf.sib.onfocus = function() {
                                            _a.maf.sib.tabIndex = "";
                                        };
                                        return _9a6(this, this.conf, this.share);
                                    };
                                }
                                if (_9a7) {
                                    o.onmouseout = function() {
                                        return _9a7(this);
                                    };
                                }
                                if (_9a8) {
                                    o.onclick = function() {
                                        return _9a8(o, (this.conf || o.conf), (this.share || o.share));
                                    };
                                }
                                if (_9a7 || _9a8) {
                                    o.onkeypress = o.onkeydown = function(e) {
                                        if (!e) {
                                            var e = window.event;
                                        }
                                        if (e.shiftKey) {
                                            _a.maf.shift = true;
                                        }
                                        if (e.keyCode) {
                                            _a.maf.key = e.keyCode;
                                        } else {
                                            if (e.which) {
                                                _a.maf.key = e.which;
                                            }
                                        }
                                        if (_a.maf.key == 13) {
                                            _a.maf.pre = this;
                                        } else {
                                            _a.maf.pre = null;
                                        }
                                    };
                                    o.onblur = function(e) {
                                        if (_a.maf.key == 9 && _a.maf.firstCompact && !_a.maf.shift && this.className.indexOf("compact") > -1) {
                                            _a.maf.key = null;
                                            _a.maf.acm = true;
                                            document.getElementById(_a.maf.firstCompact).focus();
                                        } else {
                                            _a.maf.key = null;
                                            _a.maf.shift = null;
                                            if (_9a7) {
                                                return _9a7(this);
                                            }
                                        }
                                    };
                                }
                            } else {
                                if (_9a8) {
                                    if (ss) {
                                        o.onclick = function() {
                                            return _9a8(this, this.conf, this.share);
                                        };
                                    } else {
                                        if (!o.conf.ui_window_panes) {
                                            o.onclick = function() {
                                                if (_a.bro.iph || _a.bro.wph || _a.bro.dro) {
                                                    return addthis_sendto("more", this.conf, this.share);
                                                } else {
                                                    return addthis_open(this, "", null, null, this.conf, this.share);
                                                }
                                            };
                                        } else {
                                            o.onclick = function() {
                                                return addthis_sendto("more", this.conf, this.share);
                                            };
                                        }
                                    }
                                }
                            }
                            if (o.tagName.toLowerCase() == "a") {
                                var url = o.share.url || addthis_share.url;
                                _a.usu(url);
                                if (ss) {
                                    var _9c9 = _getCustomService(ss, o.conf),
                                        cbtn = o.firstChild;
                                    if (_9c9 && _9c9.code && _9c9.icon) {
                                        if (cbtn && cbtn.className.indexOf("at300bs") > -1) {
                                            var size = "16";
                                            if (check32(o, 1)) {
                                                cbtn.className = cbtn.className.split("at15nc").join("");
                                                size = "32";
                                            } else {
                                                if (check20(o, 1)) {
                                                    cbtn.className = cbtn.className.split("at15nc").join("");
                                                    size = "20";
                                                }
                                            }
                                            cbtn.style.background = "url(" + _9c9.icon + ") no-repeat top left transparent";
                                            if (!cbtn.style.cssText) {
                                                cbtn.style.cssText = "";
                                            }
                                            cbtn.style.cssText = "line-height:" + size + "px!important;width:" + size + "px!important;height:" + size + "px!important;background:" + cbtn.style.background + "!important";
                                        }
                                    }
                                    if (!_961[ss]) {
                                        if (_9a2.follow) {
                                            if (ss != "twitter") {
                                                o.href = o.share.followUrl;
                                            } else {
                                                o.href = "https://web.archive.org/web/20200420105550/http://twitter.com/" + o.share.userid;
                                            }
                                            o.conf = (o.conf || {});
                                            o.conf.follow = true;
                                            o.onclick = function(ev) {
                                                _a.share.track(ss, 1, o.share, o.conf);
                                                if (ss == "twitter") {
                                                    ev.preventDefault();
                                                    return _a.share.ocw(o.share.followUrl, 520, 520);
                                                }
                                            };
                                            if (o.children && o.children.length == 1 && o.parentNode && o.parentNode.className.indexOf("toolbox") > -1) {
                                                var sp = document.ce("span");
                                                sp.className = "addthis_follow_label";
                                                sp.innerHTML = _a.services.getName(ss).replace("_follow", "");
                                                o.appendChild(sp);
                                            }
                                        } else {
                                            if (_a.share.externEvents(ss, o, _9a2)) {} else {
                                                if (!o.noh) {
                                                    if (o.conf.ui_open_windows || _a.share.auw(ss)) {
                                                        o.onclick = function(e) {
                                                            return _a.share.stw(ss, o.share, o.conf);
                                                        };
                                                    } else {
                                                        o.onclick = function(e) {
                                                            return _a.share.siw(ss, o.share, o.conf);
                                                        };
                                                        o.href = _a.share.genurl(ss, 0, o.share, o.conf);
                                                    }
                                                }
                                            }
                                        }
                                        if (!o.conf.follow) {
                                            _6.addEvents(o, ss, url);
                                        }
                                        if (!o.noh && !o.target) {
                                            o.target = "_blank";
                                        }
                                        _6.links.push(o);
                                    } else {
                                        if (ss == "mailto" || (ss == "email" && (o.conf.ui_use_mailto || _a.bro.iph || _a.bro.wph || _a.bro.ipa || _a.bro.dro))) {
                                            o.onclick = function() {
                                                o.share.xid = _a.util.cuid();
                                                (new Image()).src = _a.share.genurl("mailto", 0, o.share, o.config);
                                                _a.gat(ss, url, o.conf, o.share);
                                            };
                                            o.href = _a.share.genieu(o.share, o.config || o.conf);
                                            _6.ems.push(o);
                                        }
                                    }
                                    if (!o.title || o.at_titled) {
                                        var _9d0 = _a.services.getName(ss, !_9c9);
                                        if (_95e[ss]) {
                                            _95c.push({
                                                link: o,
                                                title: ss
                                            });
                                        }
                                        o.title = unaccent(_9a2.follow ? (_95d[ss] ? _95d[ss] : "Follow on " + _9d0) : (_95e[ss] ? _95e[ss] : _9d0));
                                        o.at_titled = 1;
                                    }
                                    if (!o.href) {
                                        o.href = "#";
                                    }
                                } else {
                                    if (o.conf.product && o.parentNode.className.indexOf("toolbox") == -1) {
                                        registerProductCode(o);
                                    }
                                }
                            }
                            var app;
                            switch (_9a9) {
                                case "img":
                                    if (!o.hasChildNodes()) {
                                        var lang = (o.conf.ui_language || _a.lng()).split("-").shift(),
                                            _9d3 = _a.ivl(lang);
                                        if (!_9d3) {
                                            lang = "en";
                                        } else {
                                            if (_9d3 !== 1) {
                                                lang = _9d3;
                                            }
                                        }
                                        app = _makeButton(_a.iwb(lang) ? 150 : 125, 16, "Share", _atr + "static/btn/v2/lg-share-" + lang.substr(0, 2) + ".gif");
                                    }
                                    break;
                            }
                            if (app) {
                                o.appendChild(app);
                            }
                        }
                    }
                }

                function _renderPreferredItem(b, _9d5, _9d6, _9d7, _9d8, _9d9, _9da) {
                    if (b._iss) {
                        return;
                    }
                    var _9db, excl, sv, _9de, c = b.className || "",
                        _9e0, opts, _9e2 = {
                            pinterest: "pinterest_share"
                        };
                    if (!_954) {
                        _954 = 1;
                        b.parentNode._atsharedconf = _9db = _a.share.services.init(b.conf);
                    } else {
                        _9db = b.parentNode._atsharedconf || {};
                    }
                    if (!b.parentNode.services) {
                        b.parentNode.services = {};
                    }
                    excl = _9db.services_exclude || "";
                    if (_a.bro.ie9) {
                        excl += (excl.length ? "," : "") + "link";
                    }
                    _9de = _a.share.services.loc;
                    _9e0 = b.parentNode.services;
                    opts = _a.util.unqconcat((window.addthis_options || "").replace(",more", "").split(","), _9de.split(","));
                    do {
                        sv = opts[_9d5++];
                        if (_9e2[sv]) {
                            sv = _9e2[sv];
                        }
                    } while (_9d5 < opts.length && (excl.indexOf(sv) > -1 || _9e0[sv]));
                    if (_9e0[sv]) {
                        _a.util.each(_a.services.list, function(k, v) {
                            if (!_9e0[k] && excl.indexOf(k) == -1) {
                                sv = k;
                                return false;
                            }
                        });
                    }
                    b._ips = 1;
                    if (b.className.indexOf(sv) == -1) {
                        b.className = "addthis_button_" + sv + " " + b.className;
                        b._iss = 1;
                    }
                    b.parentNode.services[sv] = 1;
                    if (_9d6) {
                        _renderToolbox([b], _9d7, _9d8, true, _9da);
                    }
                }

                function _renderToolbox(_9e5, _9e6, _9e7, _9e8, _9e9) {
                    for (var i = 0; i < _9e5.length; i++) {
                        var b = _9e5[i],
                            d = document;
                        if (b == null) {
                            continue;
                        }
                        if (_9e8 !== false || !b.ost) {
                            var attr = _getATtributes(b, _9e6, _9e7, !_9e9),
                                hc = 0,
                                c = b.className || "",
                                _9ef = "",
                                s = c.match(/addthis_button_([\w\-\.]+)(?:\s|$)/),
                                cArr = c.match(/addthis_counter_([\w\.]+)(?:\s|$)/),
                                _9f2 = {},
                                sv = s && s.length ? s[1] : 0,
                                csv = cArr && cArr.length ? cArr[1] : 0,
                                _9f5 = _getCustomService(sv);
                            mrg(attr.conf, _952);
                            mrg(attr.share, _953);
                            if (sv && !_a.share.extern(sv, b, attr)) {
                                if (sv.indexOf("preferred") > -1) {
                                    if (b._iss || b._iwps) {
                                        continue;
                                    }
                                    s = c.match(/addthis_button_preferred_([0-9]+)(?:\s|$)/);
                                    var _9f6 = ((s && s.length) ? Math.min(16, Math.max(1, parseInt(s[1]))) : 1) - 1;
                                    if (!b.conf || _9e9) {
                                        b.conf = attr.conf || b.conf || {};
                                    }
                                    if (!b.share || _9e9) {
                                        b.share = attr.share || b.share || {};
                                    }
                                    b.conf.product = "tbx-" + _a.ver();
                                    registerProductCode(b);
                                    if (!_955) {
                                        var _9f7 = _a.util.bind(_renderPreferredItem, b, b, _9f6, true, _9e6, _9e7, _9e8, _9e9);
                                        _a.ed.addEventListener("addthis-internal.data.ssh", _9f7);
                                        setTimeout(_9f7, 2000);
                                        b._iwps = 1;
                                        continue;
                                    } else {
                                        _renderPreferredItem(b, _9f6, true);
                                    }
                                } else {
                                    if (sv.indexOf("follow") > -1) {
                                        if (sv == "google_follow") {
                                            b.title = "Follow on Google";
                                        } else {
                                            sv = sv.split("_follow").shift();
                                        }
                                        _9f2.follow = true;
                                        _a.track.apc("flw-" + _a.ver());
                                        attr.share.followUrl = _a.share.gfu(sv, attr.share.userid, attr.share.usertype, attr.share) || attr.share.url;
                                    } else {
                                        if (!_a.services.exists(sv) && !_a.services.isTop(sv) && (!_9f5 || !_9f5.code)) {
                                            continue;
                                        }
                                    }
                                }
                                if (!_a.services.isTop(sv, 32) && (_950 || check32(b))) {
                                    _854.load();
                                }
                                if (!_a.services.isTop(sv, 16) && (_951 || check20(b))) {
                                    _94f.load();
                                }
                                var _9f8 = (_a.services.isTop(sv, 16) && !check32(b, true) && !check20(b, true));
                                if (!b.childNodes.length) {
                                    var sp = d.ce("span");
                                    b.appendChild(sp);
                                    sp.className = (_9f8 ? "at16nc " : " ") + "at300bs at15nc at15t_" + sv + (_9f8 ? " at16t_" + sv : "");
                                    if (((((b.parentNode || {}).parentNode || {}).parentNode || {}).className || "").indexOf("label_style") > -1) {
                                        var sp2 = d.createTextNode(_a.services.getName(sv));
                                        b.appendChild(sp2);
                                    } else {
                                        var _9fb = "";
                                        if (sp != _1 && (sv === "compact" || sv === "expanded")) {
                                            _9fb = "More Sharing Services";
                                        } else {
                                            if (sp != _1) {
                                                _9fb = "Share on " + sv;
                                            }
                                        }
                                        try {
                                            sp.innerHTML = "<span class=\"at_a11y\">" + _9fb + "</span>";
                                        } catch (e) {
                                            var _9fc = d.ce("span");
                                            _9fc.className = "at_a11y";
                                            _9fc.appendChild(document.createTextNode(_9fb));
                                            sp.appendChild(_9fc);
                                        }
                                    }
                                } else {
                                    if (b.childNodes.length == 1) {
                                        var cn = b.childNodes[0];
                                        if (cn.nodeType == 3) {
                                            var sp = d.ce("span");
                                            b.insertBefore(sp, cn);
                                            sp.className = (_9f8 ? "at16nc " : " ") + "at300bs at15nc at15t_" + sv + (_9f8 ? " at16t_" + sv : "");
                                        }
                                        if (sp != _1 && (sv === "compact" || sv === "expanded")) {
                                            sp.innerHTML = "<span class=\"at_a11y\">More Sharing Services</span>";
                                        } else {
                                            if (sp != _1) {
                                                sp.innerHTML = "<span class=\"at_a11y\">Share on " + sv + "</span>";
                                            }
                                        }
                                    } else {
                                        if (b.firstChild && b.firstChild.nodeType == 3 && b.firstChild.textContent == "\n") {} else {
                                            hc = 1;
                                        }
                                    }
                                }
                                if (sv === "compact" || sv === "expanded") {
                                    if (!hc && c.indexOf("at300") == -1) {
                                        b.className += " at300m";
                                    }
                                    if (attr.conf.product && attr.conf.product.indexOf("men-") == -1) {
                                        attr.conf.product += ",men-" + _a.ver();
                                    }
                                    if (!b.href) {
                                        b.href = "#";
                                    }
                                    if (b.parentNode && b.parentNode.services) {
                                        attr.conf.parentServices = b.parentNode.services;
                                    }
                                    if (sv === "expanded") {
                                        _9f2.nohover = true;
                                        _9f2.singleservice = "more";
                                    }
                                } else {
                                    if ((b.parentNode.className || "").indexOf("toolbox") > -1) {
                                        if (!b.parentNode.services) {
                                            b.parentNode.services = {};
                                        }
                                        b.parentNode.services[sv] = 1;
                                    }
                                    if (!hc && c.indexOf("at300") == -1) {
                                        b.className += " at300b";
                                    }
                                    _9f2.singleservice = sv;
                                }
                                if (b._ips) {
                                    _9f2.issh = true;
                                }
                                _render([b], attr, _9f2, _9e9);
                                b.ost = 1;
                                registerProductCode(b);
                            } else {
                                if (csv) {
                                    if (b.ost) {
                                        continue;
                                    }
                                    b.ost = 1;
                                    var _9fe = d.ce("a"),
                                        _9ff = d.ce("a");
                                    _9fe.className = "addthis_native_counter_sibling addthis_button_" + csv;
                                    _9ff.className = "addthis_native_counter addthis_counter addthis_bubble_style";
                                    b.className += " addthis_native_counter_parent";
                                    b.appendChild(_9fe);
                                    b.appendChild(_9ff);
                                    attr.conf.service = csv.indexOf("pinterest") > -1 ? "pinterest_share" : csv;
                                    _render(_9fe, attr, {
                                        singleservice: csv
                                    });
                                    _6.counter(_9ff, attr.conf, attr.share);
                                }
                            }
                        }
                    }
                }

                function gat(s, au, conf, _a03) {
                    if (s == "facebook_unlike" || s == "google_unplusone") {
                        return;
                    }
                    conf = conf || {};
                    var _a04 = conf.data_ga_tracker,
                        _a05 = conf.data_ga_property;
                    if (_a05) {
                        if (typeof(window._gat) == "object" && _gat._getTracker) {
                            _a04 = _gat._getTracker(_a05);
                        } else {
                            if (typeof(window._gaq) == "object" && _gaq._getAsyncTracker) {
                                _a04 = _gaq._getAsyncTracker(_a05);
                            } else {
                                if (window._gaq instanceof Array) {
                                    _gaq.push([function() {
                                        _a.gat(s, au, conf, _a03);
                                    }]);
                                }
                            }
                        }
                    }
                    if (_a04 && typeof(_a04) == "string") {
                        _a04 = window[_a04];
                    }
                    if (!_a04 && window.GoogleAnalyticsObject) {
                        var ga = window[window.GoogleAnalyticsObject];
                        if (ga.getAll) {
                            _a04 = ga.getAll();
                        }
                    }
                    if (_a04 && typeof(_a04) == "object") {
                        if (s == "more" || s == "settings") {
                            return;
                        }
                        var _a07 = au || (_a03 || {}).url || location.href,
                            _a08 = s,
                            _a09 = "share";
                        if (_a08.indexOf("_") > -1) {
                            _a08 = _a08.split("_");
                            _a09 = _a08.pop();
                            if (_a09.length <= 2) {
                                _a09 = "share";
                            }
                            _a08 = _a08.shift();
                        }
                        if (_a07.toLowerCase().replace("https", "http").indexOf("http%3a%2f%2f") == 0) {
                            _a07 = _duc(_a07);
                        }
                        try {
                            if (conf.data_ga_social && _a04._trackSocial && s != "google_plusone") {
                                _a04._trackSocial(_a08, _a09, _a03.url);
                            } else {
                                if (_a04._trackEvent) {
                                    _a04._trackEvent("addthis", s, _a07);
                                } else {
                                    if (conf.data_ga_social && s != "google_plusone") {
                                        ga("send", "social", _a08, _a09, _a07);
                                    } else {
                                        ga("send", "event", "addthis", s, _a07);
                                    }
                                }
                            }
                        } catch (e) {
                            try {
                                if (_a04._initData) {
                                    _a04._initData();
                                }
                                if (conf.data_ga_social && _a04._trackSocial && s != "google_plusone") {
                                    _a04._trackSocial(_a08, _a09, _a03.url);
                                } else {
                                    if (_a04._trackEvent) {
                                        _a04._trackEvent("addthis", s, _a07);
                                    } else {
                                        if (conf.data_ga_social && s != "google_plusone") {
                                            ga("send", "social", _a08, _a09, _a07);
                                        } else {
                                            ga("send", "event", "addthis", s, _a07);
                                        }
                                    }
                                }
                            } catch (e) {}
                        }
                    }
                }
                _a.gat = gat;
                _6.update = function(_a0a, what, _a0c) {
                    if (_a0a == "share") {
                        if (what == "url") {
                            _a.usu(0, 1);
                        }
                        if (!window.addthis_share) {
                            window.addthis_share = {};
                        }
                        window.addthis_share[what] = _a0c;
                        _957[what] = _a0c;
                        for (var i in _6.links) {
                            var o = _6.links[i],
                                rx = new RegExp("&" + what + "=(.*)&"),
                                ns = "&" + what + "=" + _euc(_a0c) + "&";
                            if ((o.conf || {}).follow || !o.nodeType) {
                                continue;
                            }
                            if (o.share) {
                                o.share[what] = _a0c;
                            }
                            if (!o.noh) {
                                o.href = o.href.replace(rx, ns);
                                if (o.href.indexOf(what) == -1) {
                                    o.href += ns;
                                }
                            }
                        }
                        for (var i in _6.ems) {
                            var o = _6.ems[i];
                            o.href = _a.share.genieu(addthis_share);
                        }
                    } else {
                        if (_a0a == "config") {
                            if (!window.addthis_config) {
                                window.addthis_config = {};
                            }
                            window.addthis_config[what] = _a0c;
                            _956[what] = _a0c;
                        }
                    }
                };
                _6._render = _render;
                _6.button = function(what, _a12, _a13) {
                    _a12 = _a12 || {};
                    if (!_a12.product) {
                        _a12.product = "men-" + _a.ver();
                    }
                    _render(what, {
                        conf: _a12,
                        share: _a13
                    }, {
                        internal: "img"
                    });
                };
                _6.toolbox = function(what, _a15, _a16, _a17, _a18) {
                    var _a19 = _959(what);
                    for (var i = 0; i < _a19.length; i++) {
                        var tb = _a19[i],
                            _a1c = window.jQuery,
                            attr = _getATtributes(tb, _a15, _a16, _a17),
                            sp = document.ce("div"),
                            c;
                        tb.services = {};
                        if (tb && tb.className) {
                            if (!attr.conf.product) {
                                attr.conf.product = "tbx" + (tb.className.indexOf("32x32") > -1 ? "32" : (tb.className.indexOf("20x20") > -1 ? "20" : "")) + "-" + _a.ver();
                            }
                            if (tb.className.indexOf("peekaboo_style") > -1) {
                                if (!_atc._ld_pkcss) {
                                    (new _a.resource.Resource("peekaboo", _atc.rsrcs.peekaboocss, function() {
                                        return true;
                                    })).load();
                                    _atc._ld_pkrcss = 1;
                                }
                                if (!tb.peekaboo) {
                                    tb.peekaboo = true;
                                    tb.onmouseover = function() {
                                        tb.is_hovered = 1;
                                        tb.timeout = setTimeout(function() {
                                            if (tb.is_hovered) {
                                                if (_a1c) {
                                                    _a1c(".addthis_peekaboo_style ul").slideDown("fast");
                                                } else {
                                                    tb.getElementsByTagName("ul")[0].style.display = "block";
                                                }
                                            }
                                        }, 500);
                                    };
                                    tb.onmouseout = function() {
                                        tb.is_hovered = 0;
                                        if (tb.timeout) {
                                            clearTimeout(tb.timeout);
                                        }
                                        tb.timeout = setTimeout(function() {
                                            if (!tb.is_hovered) {
                                                if (_a1c) {
                                                    _a1c(".addthis_peekaboo_style ul").slideUp("fast");
                                                } else {
                                                    tb.getElementsByTagName("ul")[0].style.display = "none";
                                                }
                                            }
                                        }, 500);
                                    };
                                }
                            }
                            if (tb.className.indexOf("floating_style") > -1) {
                                if (!_atc._ld_barcss) {
                                    (new _a.resource.Resource("fixedcss", _atc.rsrcs.fltcss, function() {
                                        return true;
                                    })).load();
                                    _atc._ld_barcss = 1;
                                }
                                if (!tb.fixed) {
                                    tb.fixed = true;

                                    function dce(t, c, i) {
                                        var el = d.ce(t);
                                        el.className = c;
                                        if (i) {
                                            el.id = i;
                                        }
                                        return el;
                                    }
                                    var _a24 = dce("DIV", "at-floatingbar-inner"),
                                        _a16 = dce("DIV", "at-floatingbar-share"),
                                        _a25 = dce("DIV", "addthis_internal_container");
                                    while (tb.childNodes.length > 0) {
                                        _a25.appendChild(tb.firstChild);
                                    }
                                    _a16.appendChild(_a25);
                                    _a24.appendChild(_a16);
                                    tb.appendChild(_a24);
                                    if (document.compatMode == "BackCompat" && _a.bro.msi && !_a18) {
                                        tb.setAttribute("className", tb.className.replace("addthis_bar", "").replace("addthis_bar_vertical", "").replace("addthis_floating_style", "addthis_quirks_mode"));
                                        if (tb.className.indexOf("addthis_32x32_style") > -1) {
                                            tb.setAttribute("className", tb.className + " addthis_bar_vertical_medium");
                                        } else {
                                            if (tb.className.indexOf("addthis_16x16_style") > -1) {
                                                tb.setAttribute("className", tb.className + " addthis_bar_vertical_small");
                                            } else {
                                                if (tb.className.indexOf("addthis_counter_style") > -1) {
                                                    tb.setAttribute("className", tb.className + " addthis_bar_vertical_large");
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (tb && tb.getElementsByTagName) {
                            c = tb.getElementsByTagName("a");
                            if (c) {
                                _renderToolbox(c, attr.conf, attr.share, !_a17, !_a17);
                            }
                            tb.appendChild(sp);
                        }
                        sp.className = "atclear";
                    }
                };
                _6.ready = function(_a26) {
                    if (_6.ost) {
                        return;
                    }
                    _6.ost = 1;
                    doRenderPass();
                    _a.ed.fire("addthis.ready", _6);
                    if (_a.onr) {
                        _a.onr(_6);
                    }
                    callPostLoads();
                    _a.share.sub();
                    w.addthis_config.eua = w.addthis_config.eua || true;
                    if (w.addthis_config.eua && _a.ver() >= 300 && !_atc.xck && !_a.bro.ie6 && !_a.bro.ie7) {
                        _6.auth.init();
                    }
                    if (_a26 && typeof _a26 == "function") {
                        _a26();
                    }
                };
                _6.util.getAttributes = _getATtributes;
                _6.ad = _a.extend(_6.ad, _a.ad);

                function doRenderPass() {
                    var at = _6,
                        a = ".addthis_";
                    if (at.osrp) {
                        return;
                    }
                    at.osrp = 1;
                    _953 = w.addthis_share;
                    _952 = w.addthis_config;
                    body = d.body;
                    _95a = _a.util.gebcn(body, "A", "addthis_button_", true, true);
                    _95b = _a.util.gebcn(body, "A", "addthis_counter_", true, true);
                    addIEHoverFix();
                    _6.toolbox(a + "toolbox", null, null, true, _95b.length);
                    _6.button(a + "button");
                    _6.counter(a + "counter");
                    _6.count(a + "count");
                    if (typeof _6.overlay === "function") {
                        _6.overlay(a + "shareable");
                    }
                    if (typeof _6.dock === "function") {
                        _6.dock(a + "bar");
                    }
                    _renderToolbox(_95a, null, null, false);
                    _renderToolbox(_95b, null, null, false);
                    if (((_952 || {}).login || {}).services) {
                        _6.login.initialize();
                    }
                }
                addEventListeners();
                if (_atc.xol) {
                    callPostLoads();
                    if (_d1.isReady) {
                        doRenderPass();
                    }
                } else {
                    _d1.append((function() {
                        window.addthis.ready();
                    }));
                }
                _a.ed.fire("addthis-internal.ready", _6);
            }

            function callPostLoads() {
                if (_94d) {
                    return;
                }
                var at = window.addthis,
                    func;
                for (var i = 0, plo = at.plo, q; i < plo.length; i++) {
                    q = plo[i];
                    if (!q.called) {
                        func = (q.ns ? (typeof q.ns == "string" ? at[q.ns] : q.ns) : at);
                        if (q && q.call && func[q.call]) {
                            func[q.call].apply(q.ctx ? (typeof(q.ctx == "string") ? at[q.ctx] : q.ctx) : this, q.args);
                        }
                    }
                }
                _94d = 1;
            }

            function addEventListeners() {
                if (_94d) {
                    return;
                }
                var at = window.addthis;
                for (var i = 0, plo = at.plo, q; i < plo.length; i++) {
                    q = plo[i];
                    if (q.call == "addEventListener") {
                        (q.ns ? (typeof q.ns == "string" ? at[q.ns] : q.ns) : at)[q.call].apply(q.ctx ? (typeof(q.ctx == "string") ? at[q.ctx] : q.ctx) : this, q.args);
                        q.called = 1;
                    }
                }
            }
        })();

        function addthis_open() {
            if (typeof iconf == "string") {
                iconf = null;
            }
            return _ate.ao.apply(_ate, arguments);
        }

        function addthis_close() {
            _ate.ac();
        }

        function addthis_sendto() {
            _ate.as.apply(_ate, arguments);
            return false;
        }
        if (_atc.dr) {
            _adr.onReady();
        }
    } else {
        _ate.inst++;
    }
    _ate.util.pae(_ate.util.gtt());
    if (_atc.abf) {
        addthis_open(document.getElementById("ab"), "emailab", window.addthis_url || "[URL]", window.addthis_title || "[TITLE]");
    }

}
/*
     FILE ARCHIVED ON 10:55:50 Apr 20, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:34:28 Jul 04, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.datanode: 282.281 (4)
  load_resource: 340.137
  PetaboxLoader3.resolve: 97.297
  RedisCDXSource: 0.975
  captures_list: 218.19
  exclusion.robots: 0.449
  CDXLines.iter: 17.808 (3)
  LoadShardBlock: 171.808 (3)
  esindex: 0.026
  exclusion.robots.policy: 0.429
*/