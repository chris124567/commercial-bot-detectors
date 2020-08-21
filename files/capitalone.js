/* Retrieved from https://deviceinfo.capitalone.com/collector/cc.js?tid=HOME_b3c366c0-f3e8-4c00-849f-4463eee539e3&namespace=cofdfp */
try {
    (function() {
        var ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va;

        function l(a, b) {
            try {
                var c = Array.prototype.slice.call(arguments);
                if (u) {
                    var d = B();
                    a.apply(null, c.slice(2));
                    u.apply(null, [b, Math.round(B() - d)])
                } else a.apply(null, c.slice(2))
            } catch (e) {
                k(e)
            }
        }

        function M(a) {
            H -= 1;
            wa();
            f.methods & v && a && (C(q), w(), s = x(I))
        }

        function wa() {
            return 0 == H && N ? (q && q.apply(null, []), f.methods & xa || (q = null), !0) : !1
        }

        function D(a, b) {
            var c = !1;
            setTimeout(function() {
                c || (c = !0, M(!1))
            }, ya);
            try {
                H += 1;
                var d = Array.prototype.slice.call(arguments),
                    e = u ? [function() {
                        var a = new Date;
                        return function(d) {
                            u.apply(null, [b, (new Date).getTime() - a.getTime()]);
                            c || (c = !0, M(d))
                        }
                    }, g] : [function() {
                        return function(a) {
                            c || (c = !0, M(a))
                        }
                    }, g];
                e.push(d.slice(2));
                a.apply(null, e)
            } catch (h) {
                k(h)
            }
        }

        function Ua(a) {
            function b() {
                if (c >= a.length) return !1;
                var b = h(c),
                    b = (254 >>> d & b) << d,
                    b = b >> 1;
                d += 7;
                if (8 > d) return b;
                d -= 8;
                c++;
                if (c >= a.length) return b;
                var e = h(c),
                    e = 65280 >>> d & e & 255,
                    e = e >> 8 - d;
                return b | e
            }
            for (var c = 0, d = 0, e = [], h = ("string" == typeof a ? Aa : Va) == Aa ? function(b) {
                        return a.codePointAt(b)
                    } :
                    function(b) {
                        return a[b]
                    };;) {
                var g = b();
                if (!1 === g) break;
                var n = Wa.indexOf(g);
                if (-1 != n) {
                    var f = b(),
                        r = 194,
                        k = 128;
                    !1 === f ? (r |= (7 & Xa) << 2, f = g) : r |= (7 & n) << 2;
                    r |= 0 < (f & 64) ? 1 : 0;
                    k |= f & 63;
                    e.push(r);
                    e.push(k)
                } else e.push(g)
            }
            return e
        }

        function Ba(a) {
            try {
                for (var b = "", c = [89, 231, 225, 55], d = 0; d < a.length; d++) b += String.fromCharCode(a.charCodeAt(d) ^ c[d % c.length]);
                return b
            } catch (e) {
                return k(e), ""
            }
        }

        function Ca() {
            f.methods & Ya && "undefined" !== typeof Storage ? Da(localStorage) : f.methods & Za && "undefined" !== typeof Storage ? Da(sessionStorage) :
                0 < Object.keys(m.bfd).length && g("bfd", m.bfd);
            void 0 != window.accertifyNamespace && (window.accertifyNamespace.sendPtno(), window.accertifyNamespace.sendAll(), 0 < P.length && g("uba", P));
            if (f.methods & $a) {
                for (var a = "", b = Ua(Ba(unescape(encodeURIComponent(Q.stringify(s))))), c = 0; c < b.length; c++) a += String.fromCharCode(b[c]);
                return "x9x91" + a
            }
            return Ea.encode(Ba(Q.stringify(s)))
        }

        function Da(a) {
            var b = a.getItem("persistentBfdData");
            if (void 0 == b) b = {};
            else try {
                b = JSON.parse(b)
            } catch (c) {
                b = {}
            }
            0 < Object.keys(m.bfd).length &&
                (b[location.href + ":" + (new Date).getTime()] = m.bfd);
            a.setItem("persistentBfdData", Q.stringify(b));
            0 < Object.keys(b).length && g("bfd", b)
        }

        function y(a, b, c) {
            "add" === c ? window.addEventListener ? window.addEventListener(a, b) : window.attachEvent ? window.attachEvent(a, b) : "" : "rm" === c && (window.removeEventListener ? window.removeEventListener(a, b) : window.detachEvent ? window.detachEvent(a, b) : "")
        }

        function ab() {
            m.bfd.mousemove = [];
            y("mousemove", Fa, "add")
        }

        function bb() {
            m.bfd.keydown = [];
            y("keydown", cb, "add");
            y("keyup", db, "add");
            y("keydown", Ga, "add")
        }

        function eb() {
            m.bfd.click = [];
            addEventListener("click", Ha, "add")
        }

        function w() {
            for (var a = 0; a < R.length; a++) S(R[a])
        }

        function C(a) {
            S(z, a)
        }

        function S(a, b) {
            try {
                var c = a || z,
                    d = null;
                try {
                    d = document.createElement('\x3ciframe name\x3d"' + encodeURIComponent(t) + "-" + E + '"/\x3e')
                } catch (e) {
                    d = document.createElement("iframe"), d.name = encodeURIComponent(t + "-" + E), k(e)
                }
                d.id = encodeURIComponent(t) + "-" + E;
                d.width = "0";
                d.height = "0";
                d.style.display = "none";
                d.border = "0";
                document.body.appendChild(d);
                var h = d.contentDocument ||
                    d.contentWindow.document;
                h.open();
                h.write("\x3chtml\x3e\x3cbody\x3e\x3c/body\x3e\x3c/html\x3e");
                h.close();
                var g = [];
                g.push("t\x3d" + encodeURIComponent(t));
                g.push("x\x3d" + encodeURIComponent(E));
                for (var n in F) g.push(n + "\x3d" + encodeURIComponent(F[n]));
                var f = h.createElement("form");
                f.enctype = "multipart/form-data";
                f.method = "POST";
                f.action = c + "/s2?" + g.join("\x26");
                f.acceptCharset = "UTF-8";
                f.target = d.id;
                E += 1;
                var r = h.createElement("input");
                r.name = "_f";
                r.type = "hidden";
                r.value = Ca();
                f.appendChild(r);
                h.body.appendChild(f);
                c = function() {
                    b && b()
                };
                d.attachEvent ? d.attachEvent("onload", c) : d.addEventListener ? d.addEventListener("load", c, !1) : d.onload = c;
                f.submit()
            } catch (K) {
                b(K), k(K)
            }
        }

        function x(a) {
            var b;
            if (null == a || "object" != typeof a) return a;
            if (a instanceof Date) return b = new Date, b.setTime(a.getTime()), b;
            if (a instanceof Array) {
                b = [];
                for (var c = 0, d = a.length; c < d; c++) b[c] = x(a[c]);
                return b
            }
            if (a instanceof Object) {
                b = {};
                for (c in a) a.hasOwnProperty(c) && (b[c] = x(a[c]));
                return b
            }
            throw Error("Unable to copy obj! Its type isn't supported.");
        }

        function fb(a, b, c) {
            if (a || b || c) {
                m.bfd.hvunits = [];
                var d = document.createElement("div");
                d.setAttribute("id", "restest");
                d.setAttribute("style", "width: 0.5cm; height: 0.5cm; padding: 0px");
                document.body.appendChild(d);
                var d = document.getElementById("restest").offsetWidth,
                    e = document.getElementById("restest").offsetHeight;
                m.bfd.hvunits.push({
                    hunit: d,
                    vunit: e
                })
            } else "";
            a ? l(ab, ea) : "";
            b ? l(bb, da) : "";
            c ? l(eb, ca) : ""
        }

        function gb() {
            for (var a = document.getElementsByTagName("script"), b, c = 0; c < a.length; c++)
                if (a[c].src.includes("/cc.js")) {
                    b =
                        a[c];
                    break
                } a = b.src.replace(/cc.js.*/, "uba.js");
            b = document.createElement("script");
            b.setAttribute("src", a);
            document.head.appendChild(b)
        }

        function T(a, b) {
            try {
                String.prototype.trim || (String.prototype.trim = function() {
                    return this.replace(/^\s+|\s+$/g, "")
                });
                for (var c = b.split(","), d = 0; d < c.length; d++)
                    for (var e = c[d].trim(), h = a, f = e.split("."), n = 0; n < f.length; n++)
                        if (0 != n) {
                            var O = h[f[n]];
                            if (O) n == f.length - 1 ? g(e, O.toString()) : h = O;
                            else break
                        }
            } catch (r) {
                k(r)
            }
        }

        function hb() {
            var a = document.createElement("canvas");
            if (a) {
                var b =
                    null;
                try {
                    b = a.getContext("webgl") || a.getContext("experimental-webgl") || a.getContext("moz-webgl") || a.getContext("webkit-3d")
                } catch (c) {
                    k("failed to get webgl context: " + c);
                    return
                }
                if (b) {
                    g("webgl-supported", !0);
                    g("webgl-extensions", b.getSupportedExtensions());
                    try {
                        var d = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        d ? g("webgl-max-aa", b.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)) : g("webgl-max-aa",
                            null)
                    } catch (e) {
                        k(e)
                    }
                    try {
                        g("webgl-version", b.getParameter(b.VERSION)), g("webgl-glsl-version", b.getParameter(b.SHADING_LANGUAGE_VERSION)), g("webgl-vendor", b.getParameter(b.VENDOR)), g("webgl-renderer", b.getParameter(b.RENDERER))
                    } catch (h) {
                        k(h)
                    }
                    try {
                        b.getExtension("WEBGL_debug_renderer_info"), g("webgl-vendor-real", b.getParameter(37445)), g("webgl-renderer-real", b.getParameter(37446))
                    } catch (f) {
                        k(f)
                    }
                } else g("webgl-supported", !1)
            } else k("canvas not available for webgl")
        }

        function ib(a) {
            var b = a(),
                c = {
                    iceServers: [{
                        url: "stun:stun.cdn-net.com:3478"
                    }]
                },
                d, e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
            if (e) {
                var h = function(a) {},
                    f = [];
                (function() {
                    d = new e(c);
                    d.onicecandidate = function(a) {
                        a.candidate && f.push(a.candidate);
                        if ("complete" == d.iceGatheringState) {
                            a = {};
                            for (var c = 0; c < f.length; c++) try {
                                var e = f[c].candidate.split(" ");
                                8 <= e.length && (e[4] in a || (a[e[4]] = {
                                    type: e[7]
                                }))
                            } catch (h) {}
                            g("webrtc-addrs", a);
                            g("webrtc-sdp", d.localDescription.sdp);
                            b(!0)
                        }
                    };
                    d.createDataChannel("", {
                        reliable: !1
                    });
                    d.createOffer(function(a) {
                        d.setLocalDescription(a,
                            function(a) {}, h)
                    }, h)
                })()
            } else k("webrtc not supported")
        }

        function jb(a) {
            var b = document.createElement("canvas");
            if (!b) return null;
            b.width = 999;
            if (!b.getContext) return null;
            b = b.getContext("2d");
            if (!b) return null;
            b.font = "100pt Arial";
            b.textBaseline = "top";
            return b.measureText(a).width
        }

        function kb() {
            for (var a = [100], b = 0; b < a.length; b++) {
                var c = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",
                    d = a[b],
                    e = document.createElement("canvas");
                if (e && (jb(c), e.getContext)) {
                    var h = e.getContext("2d");
                    h && (e.width =
                        999, h.font = d + "pt Arial", h.textBaseline = "top", h.fillText(c, 2, 2), e.toDataURL(), c = G.algo.SHA1.create(), c.update(e.toDataURL().toString()), g("canvas-print-" + d + "-999", c.finalize().toString(G.enc.Hex)))
                }
            }
        }

        function lb(a) {
            if (null == document.cookie) return null;
            var b = document.cookie.split(";");
            String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^\s+|\s+$/g, "")
            });
            for (var c = 0; c < b.length; c++) {
                var d = b[c].split("\x3d");
                if (2 <= d.length && d[0].trim() == a) return decodeURIComponent(d[1])
            }
            return null
        }

        function mb() {
            var a = lb("_cc");
            null == a && (g("fresh-cookie", "true"), a = encodeURIComponent(t));
            var b = new Date;
            b.setTime(b.getTime() + 31536E6);
            document.cookie = "_cc\x3d" + a + ";expires\x3d" + b + ";path\x3d/";
            g("cookie-_cc", a)
        }

        function nb() {
            var a = null;
            try {
                a = new ActiveXObject("AcroPDF.PDF")
            } catch (b) {
                k(b)
            }
            if (!a) try {
                a = new ActiveXObject("PDF.PdfCtrl")
            } catch (c) {
                k(c);
                return
            }
            a && (isInstalled = !0, version = a.GetVersions(), g("msie-plugin-pdf", version))
        }

        function ob() {
            var a = null;
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (b) {
                k(b);
                return
            }
            a && g("msie-plugin-flash", a.GetVariable("$version"))
        }

        function pb() {
            var a = null;
            try {
                a = new ActiveXObject("WMPlayer.OCX")
            } catch (b) {
                k(b);
                return
            }
            a && g("msie-plugin-wmplayer", a.versionInfo)
        }

        function qb() {
            for (var a = ["rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer"], b = null, c = 0; c < a.length; c++) {
                try {
                    b = new ActiveXObject(a[c])
                } catch (d) {
                    k(d);
                    continue
                }
                if (b) break
            }
            b && g("msie-plugin-realplayer",
                b.GetVersionInfo())
        }

        function rb() {
            var a = null;
            try {
                a = new ActiveXObject("SWCtl.SWCtl")
            } catch (b) {
                k(b);
                return
            }
            a && g("msie-plugin-shockwave", a.ShockwaveVersion("").split("r"))
        }

        function sb() {
            new ActiveXObject("AgControl.AgControl") && g("msie-plugin-silverlight", !0)
        }

        function tb() {
            navigator.javaEnabled() && g("msie-plugin-java", "true")
        }

        function ub() {
            for (var a = ["DevalVRXCtrl.DevalVRXCtrl", "DevalVRXCtrl.DevalVRXCtrl.1"], b = 0; b < a.length; b++) new ActiveXObject(a[b]) && g("msie-plugin-devalvr-" + a[b], !0)
        }

        function vb() {
            (new ActiveXObject("SharePoint.OpenDocuments.5") ||
                new ActiveXObject("SharePoint.OpenDocuments")) && g("msie-plugin-sharepoint", !0)
        }

        function wb() {
            var a = [nb, pb, ob, qb, rb, tb, sb, ub, vb];
            if (window.ActiveXObject || "Microsoft Internet Explorer" == navigator.appName || "Netscape" == navigator.appName && null != /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent))
                for (var b = 0; b < a.length; b++) try {
                    a[b].apply(null, [])
                } catch (c) {
                    k(c)
                }
        }

        function xb(a) {
            var b = a();
            a = document.createElement("script");
            a.type = "text/javascript";
            a.async = !0;
            a.src = z + "/et.js";
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a, c);
            window[collectorNamespaceName]._cc.et = function(a) {
                g("_et", a);
                b(!0)
            }
        }

        function yb(a) {
            var b = a();
            a = document.createElement("script");
            a.type = "text/javascript";
            a.async = !0;
            a.src = "//six.cdn-net.com/6.js" + ("__DEFAULT_NAMESPACE" == collectorNamespaceName ? "" : "?namespace\x3d" + collectorNamespaceName);
            var c = document.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a, c);
            window[collectorNamespaceName]._cc.six = function(a) {
                g("_six", a);
                b(!0)
            }
        }

        function zb(a) {
            var b = a();
            try {
                var c =
                    "undefined" == typeof navigator.plugins || 0 == navigator.plugins.length ? !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash") : navigator.plugins["Shockwave Flash"];
                g("flash-installed", null == c ? "false" : "true")
            } catch (d) {
                k(d)
            }
            if (0 == (f.methods & Ia) && 0 == (f.methods & Ja) && 0 == (f.methods & Ka)) b(!1);
            else {
                a = document;
                c = [];
                c.push("t\x3d" + encodeURIComponent(t));
                c.push("cm\x3d" + encodeURIComponent(f.methods));
                for (var e in F) c.push(e + "\x3d" + encodeURIComponent(F[e]));
                e = !1;
                navigator.userAgent && -1 != navigator.userAgent.indexOf("MSIE ") &&
                    (e = !0);
                var h = a.createElement("div");
                h.innerHTML = "\x3cobject type\x3d'application/x-shockwave-flash' id\x3d'cc_swf' " + (e ? "" : "data\x3d'" + z + "/s.swf?" + c.join("\x26") + "' ") + (e ? "classid\x3d'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'" : "") + "\x3e\x3cparam name\x3d'allowScriptAccess' value\x3d'always'\x3e" + (e ? "\x3cparam name\x3d'movie' value\x3d'" + z + "/s.swf?" + c.join("\x26") + "'/\x3e" : "") + "\x3c/object\x3e";
                e = h.firstChild;
                e.setAttribute("style", "position: absolute; top: -9999px; left: -9999px;");
                e.setAttribute("width",
                    "1");
                e.setAttribute("height", "1");
                h = a.createElement("param");
                h.setAttribute("FlashVars", c.join("\x26"));
                e.appendChild(h);
                window._fli = function(a) {
                    try {
                        g("flash-ip", a), b(!0)
                    } catch (c) {
                        b(!1)
                    }
                };
                window._sft = function(a) {
                    try {
                        g("flash-tag", a), g("flash-enabled", "true"), b(!0)
                    } catch (c) {
                        b(!1)
                    }
                };
                window._gfl = function(a) {
                    try {
                        for (var c = 0; c < a.length; c++) g("flash-font-" + a[c], "true");
                        b(!0)
                    } catch (d) {
                        b(!1)
                    }
                };
                a.body.appendChild(e)
            }
        }

        function La(a, b) {
            if (a) {
                var c = a.getItem(U);
                c || a.setItem(U, t);
                (c = a.getItem(U)) && g(b, c)
            }
        }

        function Ab() {
            La(localStorage,
                "dom-local-tag")
        }

        function Bb() {
            La(sessionStorage, "dom-session-tag")
        }

        function Cb() {
            var a = new Date,
                b = a.getTimezoneOffset();
            g("time-unix-epoch-ms", a.getTime());
            g("time-local", a.toLocaleString());
            g("time-string", a.toString());
            g("time-tz-offset-minutes", b);
            var c = new Date(a.getFullYear(), 0, 1),
                d = new Date(a.getFullYear(), 6, 1),
                e = c.getTimezoneOffset() != d.getTimezoneOffset();
            g("time-tz-has-dst", e ? "true" : "false");
            var h = !1;
            e && a.getTimezoneOffset() == d.getTimezoneOffset() && (h = !0);
            g("time-tz-dst-active", h ? "true" :
                "false");
            a = b;
            h && (c = d.getTimezoneOffset() - c.getTimezoneOffset(), a = b - c);
            g("time-tz-std-offset", a);
            b = new Date(2014, 2, 6);
            b.setHours(7);
            b.setMinutes(58);
            b.setSeconds(39);
            g("time-tz-fixed-locale-string", b.toLocaleString())
        }

        function Db(a) {
            var b = null;
            try {
                var c = document.createElement('\x3cobject id\x3d"dialogHelperId" classid\x3d"clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width\x3d"0" height\x3d"0"\x3e\x3c/object\x3e');
                document.body.appendChild(c);
                setTimeout(function() {
                    b = a();
                    var d = document.getElementById("dialogHelperId");
                    if (d && d.fonts) {
                        for (var h = 1; h <= d.fonts.count; h++) g("ie-font-" + d.fonts(h), "true");
                        b(!0)
                    } else b(!1);
                    document.body.removeChild(c)
                }, 500)
            } catch (d) {
                null == b && (b = a()), b(!1), k(d)
            }
        }

        function Eb() {
            try {
                for (var a = (new Fb).detect(Ma), b = 0; b < a.length; b++) try {
                    g("font-" + Ma[b], a[b])
                } catch (c) {
                    k(c)
                }
            } catch (d) {
                k(d)
            }
        }

        function Gb() {
            if (navigator.plugins) {
                for (var a = {}, b = {}, c = 0; c < navigator.plugins.length; c++) {
                    var d = navigator.plugins[c];
                    d.filename && d.name && g("plugin-" + d.name + "-filename", d.filename);
                    d.description && d.name && g("plugin-" +
                        d.name + "-desc", d.description);
                    for (var e = 0; e < d.length; e++)
                        if (d[e].type && (b[d[e].type] = !0), d[e].suffixes) {
                            var h = d[e].suffixes.split(",");
                            if (h && 0 < h.length)
                                for (var f = 0; f < h.length; f++) a[h[f]] = !0
                        }
                }
                g("plugin-suffixes", Na(a).join(","));
                g("plugin-mimes", Na(b).join(","))
            }
        }

        function Na(a) {
            var b = [],
                c;
            for (c in a) b.push(c);
            return b.sort()
        }

        function g(a, b, c, d) {
            V && V.apply(null, [a, b]);
            s[a] = b
        }

        function Oa(a) {
            try {
                var b = Hb[a[0]];
                b && b.apply(null, a.slice(1))
            } catch (c) {
                k(c)
            }
        }

        function k(a) {
            try {
                "js-errors" in s || (s["js-errors"] = []), s["js-errors"].push(a.toString())
            } catch (b) {}
        }

        function Ib() {
            var a = F.sid;
            if (a) {
                var b = G.algo.SHA1.create();
                b.update(a);
                a = b.finalize().toString(G.enc.Hex).toLowerCase();
                for (b = 0; b < Pa.length; b++)
                    if (a.startsWith(Pa[b])) return !0
            }
            return !1
        }
        var Ia = 8,
            Ja = 1024,
            Ka = 8192,
            xa = 32768,
            v = 2097152,
            $a = 33554432,
            Ya = 268435456,
            Za = 536870912,
            U = "_cc_ck",
            Hb = {
                run: function(a) {
                    var b = B();
                    z = a;
                    J = "ASqzQFRnvlmbDfqyadmJPmedRergqvqhVgzXKigseHNuPfQXXJ0KNFdph9H2mhY3I5DMH1Ii4n+bqJBIt/YNCKS05D1D4fm/+J+/tABEF/058HXNU3gF3CK/Z3ySdGmfE7t1rJiKjRVTo+8NOXvDOZRiIZSd4BSzRMUwI9TeuuNoX5XN/cOHZRV3Gk4EuL6rM46SdoiXSq9Mp4d8A4uXo3W8q5cnU7oEhH6kMOVeSr3bOcbM36M4RO6G9Kin+MvovsQWneRTnMDblP68V0xjmbrCwoGyawHO2ovRA8Fh/gwAia1y1i8Mi75bS/i72IDrnt652nF2QVzrCEuNn/JKTuAscQ==";
                    t = 24 < J.length ? J.substring(0, 24) : J;
                    g("_t", J);
                    false ? f.methods |= 461298 : Ib() &&
                        (f.methods |= 461298);
                    g("cf_flags", f.methods);
                    f.methods & 1048576 && g("cdfr", !0);
                    f.methods & v && g("cidfr", !0);
                    f.methods & 67108864 && g("csap", !0);
                    var c = q;
                    q = function() {
                        f.methods & xa ? (w(), c && c()) : f.methods & v || (C(function(a) {
                            c && c();
                            N = !1
                        }), w())
                    };
                    var d = u;
                    u = function(a, b) {
                        try {
                            g("timing-" + a, b)
                        } catch (c) {
                            k(c)
                        }
                        d && d.apply(null, [a, b])
                    };
                    I = x(s);
                    for (a = 0; a < W.length; a++) D(W[a], va);
                    (f.methods & Ka || f.methods & Ja || f.methods & Ia) && D(zb, ka);
                    f.methods & 134217728 || D(yb, ba);
                    f.methods & 524288 && D(xb, fa);
                    f.methods & 131072 &&
                        D(ib, ha);
                    f.methods & 4096 && l(mb, la);
                    f.methods & 2 && l(Cb, ua);
                    f.methods & 1 && l(Ab, oa);
                    f.methods & 512 && l(Bb, na);
                    f.methods & v && (C(q), w(), s = x(I));
                    var e = function() {
                        f.methods & 16 && l(Gb, ta);
                        f.methods & 2048 && l(wb, ma);
                        f.methods & 65536 && l(kb, ia);
                        f.methods & 256 && (D(Db, ja), l(Eb, pa));
                        f.methods & 262144 && l(hb, ga);
                        f.methods & v ? (C(q), w(), s = x(I)) : (N = !0, wa())
                    };
                    a = function() {
                        f.methods & 32 && l(T, sa, navigator, "navigator.appVersion,navigator.buildid,navigator.appName,navigator.buildID,navigator.product,navigator.platform,navigator.appMinorVersion,navigator.language,navigator.oscpu,navigator.cpuClass,navigator.userAgent,navigator.systemLanguage,navigator.cookieEnabled,navigator.browserLanguage,navigator.msPointerEnabled,navigator.msManipulationViewsEnabled,navigator.userLanguage,navigator.appCodeName,navigator.vendor,navigator.productSub");
                        f.methods & 64 && l(T, ra, window, "window.clientInformation.language,window.doNotTrack,window.screen.pixeldepth,window.history.length,window.devicePixelRatio,window.screen.height,window.screen.width");
                        f.methods & 128 && l(T, qa, document, "document.width");
                        f.methods & v ? (C(q), w(), s = x(I), setTimeout(e, 50)) : e()
                    };
                    f.methods & v ? setTimeout(a, 50) : a();
                    fb(f.methods & 4194304, f.methods & 8388608, f.methods & 16777216);
                    f.methods & 1073741824 && gb();
                    g("timing-sync-collection", Math.round(B() - b));
                    g("timing-generation", Number("1"))
                },
                cf: function(a) {
                    f.methods = a
                },
                sr: function(a) {
                    V = a
                },
                srt: function(a) {
                    u = a
                },
                sf: function(a) {
                    q = a
                },
                st: function(a) {
                    ya = a
                },
                cac: function(a) {
                    W.push(a)
                },
                ci: function(a) {
                    F = a;
                    for (var b in a) s[b] = a[b]
                },
                cag: function(a) {
                    C(a)
                },
                csd: function(a) {
                    S(z, a);
                    w()
                },
                cfp: function(a) {
                    a(Ca())
                },
                crdi: function(a) {
                    s.crdi = !0;
                    var b = function(b) {
                        try {
                            var d = JSON.parse(b.data);
                            d && (d.dp || d.drg) && a(d)
                        } catch (e) {}
                    };
                    window.attachEvent ? window.attachEvent("onmessage", b) : window.addEventListener && window.addEventListener("message", b)
                },
                bfdc: function(a) {
                    Qa =
                        a[0];
                    Ra = a[1];
                    L = a[2]
                },
                mrd: function(a) {
                    R.push(a)
                },
                kft: function(a) {
                    Sa = a
                }
            },
            f = {
                methods: 999419
            },
            V = null,
            u = null,
            q = null,
            ya = 2E3,
            Sa = 3E3,
            s = {},
            N = !1,
            m = {
                bfd: {}
            },
            Qa = 2,
            Ra = 300,
            L = 11,
            W = [],
            F = {},
            J = "",
            t = "",
            z = "",
            R = [],
            Pa = [],
            Ma = "Times New Roman CYR;Arial CYR;Courier New CYR;\u5b8b\u4f53;Arial Cyr;Times New Roman Cyr;Courier New Cyr;\u534e\u6587\u7ec6\u9ed1;\u5137\u9ed1 Pro;WP CyrillicB;WP CyrillicA;\uad81\uc11c\uccb4;\u7d30\u660e\u9ad4;\u5c0f\u585a\u660e\u671d Pr6N B;\u5b8b\u4f53-PUA;\u65b9\u6b63\u6d41\u884c\u4f53\u7e41\u4f53;\u6c49\u4eea\u5a03\u5a03\u7bc6\u7b80;\ub3cb\uc6c0;GaramondNo4CyrTCYLig;HelveticaInseratCyr Upright;HelveticaCyr Upright;TL Help Cyrillic;\uac00\ub294\uc548\uc0c1\uc218\uccb4;TLCyrillic2;AGRevueCyr-Roman;AGOptimaCyr;HelveticaInseratCyrillicUpright;HelveticaCyrillicUpright;HelveticaCyrillic;CyrillicRibbon;CyrillicHover;\u6587\u9f0e\uff30\uff2f\uff30\uff0d\uff14;\u65b9\u6b63\u4e2d\u5029\u7b80\u4f53;\u521b\u827a\u7b80\u4e2d\u5706;Zrnic Cyr;Zipper1 Cyr;Xorx_windy Cyr;Xorx_Toothy Cyr;\uc18c\uc57c\uc1949;\u0426\u0432\u0435\u0442\u043d\u044b\u0435 \u044d\u043c\u043e\u0434\u0437\u0438 Apple;Chinese Generic1;Korean Generic1;Bullets 5(Korean);UkrainianFuturisExtra;VNI-Viettay;UkrainianCompact;UkrainianBrushScript;TiffanyUkraine;Baltica_Russian-ITV;Vietnamese font;Unicorn Ukrainian;UkrainianTimesET;UkrainianCourier;Tiff-HeavyUkraine;\u4875\u6e67\u4c61\u6e20\u4172\u7464\u6573\u6967\u6e20\u3230\u3032\u202d\u2041\u6c6c\u2072\u6967\u6874\u7320\u7265\u7365\u7276\u6564\u2e54\u6875\u2070\u6861\u7020\u564e\u5468\u7566\u6170\u3032\u2020\u4e6f\u726d\u616c\u312e\u3020\u436f\u6465\u2056\u4e49\u2066\u6f72\u2057\u696e\u646f\u7773\u5468\u7566\u6170\u3032\u4e6f\u726d\u616cHungLan Artdesign - http://www.vietcomic.comVNI-Thufap2  Normalv2.0 Code VNI for WindowsVNI-Thufap2 Normal\u0002;Vietnam;Bwviet;Soviet;Soviet Expanded;Soviet Bold;Russian;UVN Han Viet;UkrainianAcademy;Symbol;Verdana;Webdings;Arial;Georgia;Courier New;Trebuchet MS;Times New Roman;Impact;Comic Sans MS;Wingdings;Tahoma;Microsoft Sans Serif;Arial Black;Plantagenet Cherokee;Arial Narrow;Wingdings 2;Wingdings 3;Arial Unicode MS;Papyrus;Calibri;Cambria;Consolas;Candara;Franklin Gothic Medium;Corbel;Constantia;Marlett;Lucida Console;Lucida Sans Unicode;MS Mincho;Arial Rounded MT Bold;Palatino Linotype;Batang;MS Gothic;PMingLiU;SimSun;MS PGothic;MS PMincho;Gulim;Cambria Math;Garamond;Bookman Old Style;Book Antiqua;Century Gothic;Monotype Corsiva;Courier;Meiryo;Century;MT Extra;MS Reference Sans Serif;MS Reference Specialty;Mistral;Bookshelf Symbol 7;Lucida Bright;Cooper Black;Modern No. 20;Bernard MT Condensed;Bell MT;Baskerville Old Face;Bauhaus 93;Britannic Bold;Wide Latin;Playbill;Harrington;Onyx;Footlight MT Light;Stencil;Colonna MT;Matura MT Script Capitals;Copperplate Gothic Bold;Copperplate Gothic Light;Edwardian Script ITC;Rockwell;Curlz MT;Engravers MT;Rockwell Extra Bold;Haettenschweiler;MingLiU;Mongolian Baiti;Microsoft Yi Baiti;Microsoft Himalaya;SimHei;SimSun-ExtB;PMingLiU-ExtB;MingLiU-ExtB;MingLiU_HKSCS-ExtB;MingLiU_HKSCS;Gabriola;Goudy Old Style;Calisto MT;Imprint MT Shadow;Gill Sans Ultra Bold;Century Schoolbook;Gloucester MT Extra Condensed;Perpetua;Franklin Gothic Book;Brush Script MT;Microsoft Tai Le;Gill Sans MT;Tw Cen MT;Lucida Handwriting;Lucida Sans;Segoe UI;Lucida Fax;MV Boli;Sylfaen;Estrangelo Edessa;Mangal;Gautami;Tunga;Shruti;Raavi;Latha;Lucida Calligraphy;Lucida Sans Typewriter;Kartika;Vrinda;Perpetua Titling MT;Cordia New;Angsana New;IrisUPC;CordiaUPC;FreesiaUPC;Miriam;Traditional Arabic;Miriam Fixed;JasmineUPC;KodchiangUPC;LilyUPC;Levenim MT;EucrosiaUPC;DilleniaUPC;Rod;Narkisim;FrankRuehl;David;Andalus;Browallia New;AngsanaUPC;BrowalliaUPC;MS UI Gothic;Aharoni;Simplified Arabic Fixed;Simplified Arabic;GulimChe;Dotum;DotumChe;GungsuhChe;Gungsuh;BatangChe;Meiryo UI;NSimSun;Segoe Script;Segoe Print;DaunPenh;Kalinga;Iskoola Pota;Euphemia;DokChampa;Nyala;MoolBoran;Leelawadee;Gisha;Microsoft Uighur;Arabic Typesetting;Malgun Gothic;Microsoft JhengHei;DFKai-SB;Microsoft YaHei;FangSong;KaiTi;Helvetica;Segoe UI Light;Segoe UI Semibold;Andale Mono;Palatino;Geneva;Monaco;Lucida Grande;Gill Sans;Helvetica Neue;Baskerville;Hoefler Text;Thonburi;Herculanum;Apple Chancery;Didot;Zapf Dingbats;Apple Symbols;Copperplate;American Typewriter;Zapfino;Cochin;Chalkboard;Sathu;Osaka;BiauKai;Segoe UI Symbol;Aparajita;Krungthep;Ebrima;Silom;Kokila;Shonar Bangla;Sakkal Majalla;Microsoft PhagsPa;Microsoft New Tai Lue;Khmer UI;Vijaya;Utsaah;Charcoal CY;Ayuthaya;InaiMathi;Euphemia UCAS;Vani;Lao UI;GB18030 Bitmap;KufiStandardGK;Geeza Pro;Chalkduster;Tempus Sans ITC;Kristen ITC;Apple Braille;Juice ITC;STHeiti;LiHei Pro;DecoType Naskh;New Peninim MT;Nadeem;Mshtakan;Gujarati MT;Devanagari MT;Arial Hebrew;Corsiva Hebrew;Baghdad;STFangsong".split(";"),
            B = "undefined" !== typeof performance && "undefined" !== typeof performance.now ? function() {
                return performance.now()
            } : Date.now,
            Q = function(a) {
                var b = function(a) {
                        return "undefined" !== typeof a
                    },
                    c = b(a.Prototype) && "1.7" > a.Prototype.Version && b(Array.prototype.toJSON),
                    d = b(Object.toJSON),
                    b = a.JSON && b(a.JSON.stringify) && b(a.JSON.parse);
                return !d && c || !b ? null : {
                    stringify: c ? Object.toJSON : a.JSON.stringify,
                    parse: function(b) {
                        try {
                            return a.JSON.parse(b)
                        } catch (c) {
                            return null
                        }
                    }
                }
            }(window),
            G = G || function(a, b) {
                var c = {},
                    d = c.lib = {},
                    e =
                    function() {},
                    f = d.Base = {
                        extend: function(a) {
                            e.prototype = this;
                            var b = new e;
                            a && b.mixIn(a);
                            b.hasOwnProperty("init") || (b.init = function() {
                                b.$super.init.apply(this, arguments)
                            });
                            b.init.prototype = b;
                            b.$super = this;
                            return b
                        },
                        create: function() {
                            var a = this.extend();
                            a.init.apply(a, arguments);
                            return a
                        },
                        init: function() {},
                        mixIn: function(a) {
                            for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                            a.hasOwnProperty("toString") && (this.toString = a.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    g = d.WordArray =
                    f.extend({
                        init: function(a, c) {
                            a = this.words = a || [];
                            this.sigBytes = c != b ? c : 4 * a.length
                        },
                        toString: function(a) {
                            return (a || k).stringify(this)
                        },
                        concat: function(a) {
                            var b = this.words,
                                c = a.words,
                                d = this.sigBytes;
                            a = a.sigBytes;
                            this.clamp();
                            if (d % 4)
                                for (var e = 0; e < a; e++) b[d + e >>> 2] |= (c[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((d + e) % 4);
                            else if (65535 < c.length)
                                for (e = 0; e < a; e += 4) b[d + e >>> 2] = c[e >>> 2];
                            else b.push.apply(b, c);
                            this.sigBytes += a;
                            return this
                        },
                        clamp: function() {
                            var b = this.words,
                                c = this.sigBytes;
                            b[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                            b.length =
                                a.ceil(c / 4)
                        },
                        clone: function() {
                            var a = f.clone.call(this);
                            a.words = this.words.slice(0);
                            return a
                        },
                        random: function(b) {
                            for (var c = [], d = 0; d < b; d += 4) c.push(4294967296 * a.random() | 0);
                            return new g.init(c, b)
                        }
                    }),
                    n = c.enc = {},
                    k = n.Hex = {
                        stringify: function(a) {
                            var b = a.words;
                            a = a.sigBytes;
                            for (var c = [], d = 0; d < a; d++) {
                                var e = b[d >>> 2] >>> 24 - 8 * (d % 4) & 255;
                                c.push((e >>> 4).toString(16));
                                c.push((e & 15).toString(16))
                            }
                            return c.join("")
                        },
                        parse: function(a) {
                            for (var b = a.length, c = [], d = 0; d < b; d += 2) c[d >>> 3] |= parseInt(a.substr(d, 2), 16) << 24 - 4 * (d % 8);
                            return new g.init(c, b / 2)
                        }
                    },
                    r = n.Latin1 = {
                        stringify: function(a) {
                            var b = a.words;
                            a = a.sigBytes;
                            for (var c = [], d = 0; d < a; d++) c.push(String.fromCharCode(b[d >>> 2] >>> 24 - 8 * (d % 4) & 255));
                            return c.join("")
                        },
                        parse: function(a) {
                            for (var b = a.length, c = [], d = 0; d < b; d++) c[d >>> 2] |= (a.charCodeAt(d) & 255) << 24 - 8 * (d % 4);
                            return new g.init(c, b)
                        }
                    },
                    K = n.Utf8 = {
                        stringify: function(a) {
                            try {
                                return decodeURIComponent(escape(r.stringify(a)))
                            } catch (b) {
                                throw Error("Malformed UTF-8 data");
                            }
                        },
                        parse: function(a) {
                            return r.parse(unescape(encodeURIComponent(a)))
                        }
                    },
                    za = d.BufferedBlockAlgorithm = f.extend({
                        reset: function() {
                            this._data = new g.init;
                            this._nDataBytes = 0
                        },
                        _append: function(a) {
                            "string" == typeof a && (a = K.parse(a));
                            this._data.concat(a);
                            this._nDataBytes += a.sigBytes
                        },
                        _process: function(b) {
                            var c = this._data,
                                d = c.words,
                                e = c.sigBytes,
                                f = this.blockSize,
                                h = e / (4 * f),
                                h = b ? a.ceil(h) : a.max((h | 0) - this._minBufferSize, 0);
                            b = h * f;
                            e = a.min(4 * b, e);
                            if (b) {
                                for (var n = 0; n < b; n += f) this._doProcessBlock(d, n);
                                n = d.splice(0, b);
                                c.sigBytes -= e
                            }
                            return new g.init(n, e)
                        },
                        clone: function() {
                            var a = f.clone.call(this);
                            a._data = this._data.clone();
                            return a
                        },
                        _minBufferSize: 0
                    });
                d.Hasher = za.extend({
                    cfg: f.extend(),
                    init: function(a) {
                        this.cfg = this.cfg.extend(a);
                        this.reset()
                    },
                    reset: function() {
                        za.reset.call(this);
                        this._doReset()
                    },
                    update: function(a) {
                        this._append(a);
                        this._process();
                        return this
                    },
                    finalize: function(a) {
                        a && this._append(a);
                        return this._doFinalize()
                    },
                    blockSize: 16,
                    _createHelper: function(a) {
                        return function(b, c) {
                            return (new a.init(c)).finalize(b)
                        }
                    },
                    _createHmacHelper: function(a) {
                        return function(b, c) {
                            return (new m.HMAC.init(a,
                                c)).finalize(b)
                        }
                    }
                });
                var m = c.algo = {};
                return c
            }(Math);
        (function() {
            var a = G,
                b = a.lib,
                c = b.WordArray,
                d = b.Hasher,
                e = [],
                b = a.algo.SHA1 = d.extend({
                    _doReset: function() {
                        this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(a, b) {
                        for (var c = this._hash.words, d = c[0], f = c[1], g = c[2], k = c[3], m = c[4], p = 0; 80 > p; p++) {
                            if (16 > p) e[p] = a[b + p] | 0;
                            else {
                                var l = e[p - 3] ^ e[p - 8] ^ e[p - 14] ^ e[p - 16];
                                e[p] = l << 1 | l >>> 31
                            }
                            l = (d << 5 | d >>> 27) + m + e[p];
                            l = 20 > p ? l + ((f & g | ~f & k) + 1518500249) : 40 > p ? l + ((f ^ g ^ k) + 1859775393) :
                                60 > p ? l + ((f & g | f & k | g & k) - 1894007588) : l + ((f ^ g ^ k) - 899497514);
                            m = k;
                            k = g;
                            g = f << 30 | f >>> 2;
                            f = d;
                            d = l
                        }
                        c[0] = c[0] + d | 0;
                        c[1] = c[1] + f | 0;
                        c[2] = c[2] + g | 0;
                        c[3] = c[3] + k | 0;
                        c[4] = c[4] + m | 0
                    },
                    _doFinalize: function() {
                        var a = this._data,
                            b = a.words,
                            c = 8 * this._nDataBytes,
                            d = 8 * a.sigBytes;
                        b[d >>> 5] |= 128 << 24 - d % 32;
                        b[(d + 64 >>> 9 << 4) + 14] = Math.floor(c / 4294967296);
                        b[(d + 64 >>> 9 << 4) + 15] = c;
                        a.sigBytes = 4 * b.length;
                        this._process();
                        return this._hash
                    },
                    clone: function() {
                        var a = d.clone.call(this);
                        a._hash = this._hash.clone();
                        return a
                    }
                });
            a.SHA1 = d._createHelper(b);
            a.HmacSHA1 =
                d._createHmacHelper(b)
        })();
        var Ea = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d",
                encode: function(a) {
                    var b = "",
                        c, d, e, f, g, k, l = 0;
                    for (a = Ea._utf8_encode(a); l < a.length;) c = a.charCodeAt(l++), d = a.charCodeAt(l++), e = a.charCodeAt(l++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, k = e & 63, isNaN(d) ? g = k = 64 : isNaN(e) && (k = 64), b = b + this._keyStr.charAt(f) + this._keyStr.charAt(c) + this._keyStr.charAt(g) + this._keyStr.charAt(k);
                    return b
                },
                _utf8_encode: function(a) {
                    for (var b = "", c = 0; c < a.length; c++) {
                        var d =
                            a.charCodeAt(c);
                        128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128)), b += String.fromCharCode(d & 63 | 128))
                    }
                    return b
                }
            },
            Fb = function() {
                var a = ["monospace", "sans-serif", "serif"],
                    b = document.getElementsByTagName("body")[0],
                    c = document.createElement("div");
                c.setAttribute("id", "inauth_font_detector");
                c.setAttribute("style", "visibility: hidden;position: absolute; top: 0px; left: -999px;");
                b.appendChild(c);
                b = document.createElement("span");
                b.style.fontSize = "72px";
                b.innerHTML = "mmmmmmmmmmlli";
                var d = {},
                    e = {},
                    f;
                for (f in a) b.style.fontFamily = a[f], c.appendChild(b), d[a[f]] = b.offsetWidth, e[a[f]] = b.offsetHeight, c.removeChild(b);
                this.detect = function(b) {
                    var f = document.createElement("div");
                    f.setAttribute("style", "visibility: hidden;position: absolute; top: 0px; left: -999px;");
                    for (var g = [], h = [], k = B(), l = 0; l < b.length && !(B() - k > Sa); l++) {
                        var m = [];
                        h.push(!1);
                        for (var p in a) {
                            var s = document.createElement("div"),
                                q = document.createElement("span");
                            q.style.fontSize =
                                "72px";
                            q.innerHTML = "mmmmmmmmmmlli";
                            q.style.fontFamily = b[l] + "," + a[p];
                            s.appendChild(q);
                            f.appendChild(s);
                            m.push(q)
                        }
                        g.push(m)
                    }
                    c.appendChild(f);
                    for (l = 0; l < b.length; l++)
                        if (g.length < l) h.push(!1);
                        else
                            for (p in m = g[l], a) q = m[p], k = q.offsetWidth != d[a[p]] || q.offsetHeight != e[a[p]], h[l] = h[l] || k;
                    c.removeChild(f);
                    return h
                }
            },
            H = 0,
            Aa = 0,
            Va = 1,
            Wa = [0, 10, 13, 34, 38, 92],
            Xa = 7,
            P = [];
        window.inauthNamespace || (window.inauthNamespace = {});
        window.inauthNamespace.addUBAData = function(a) {
            P.push(a)
        };
        var Ta = !1,
            X = 0,
            Y = 0,
            Z = 0,
            Fa = function(a) {
                Ta ||
                    (X = a.pageX, Y = a.pageY, Z = Date.now(), Ta = !0);
                var b = Date.now();
                Math.sqrt(Math.pow(a.pageX - X, 2) + Math.pow(a.pageY - Y, 2)) >= Qa && b - Z >= Ra && (m.bfd.mousemove.length >= L ? y("mousemove", Fa, "rm") : (m.bfd.mousemove.push({
                    x: a.pageX,
                    y: a.pageY
                }), X = a.pageX, Y = a.pageY, Z = b))
            },
            A = !1,
            $, cb = function(a) {
                17 == a.keyCode ? (A = !0, $ = 17) : 91 == a.keyCode && (A = !0, $ = 91)
            },
            db = function(a) {
                if (17 == a.keyCode || 91 == a.keyCode) A = !1
            },
            Ga = function(a) {
                if (m.bfd.keydown.length >= L) y("keydown", Ga, "rm");
                else if (a = a || window.event, a = a.keyCode, "password" != document.activeElement.type ||
                    A && 67 == a || A && 86 == a || A && 88 == a) A && m.bfd.keydown.push($), m.bfd.keydown.push(a)
            },
            Ha = function(a) {
                m.bfd.click.length >= L ? y("click", Ha, "rm") : m.bfd.click.push({
                    x: a.pageX,
                    y: a.pageY
                })
            },
            E = 1;
        va = "cust";
        ua = "ti";
        ta = "np";
        sa = "no";
        ra = "wo";
        qa = "do";
        pa = "kf";
        oa = "ls";
        na = "ss";
        ma = "iepl";
        la = "sc";
        ka = "fc";
        ja = "gief";
        ia = "cp";
        ha = "wr";
        ga = "wgl";
        fa = "et";
        ea = "bfdm";
        da = "bfdk";
        ca = "bfdc";
        ba = "i6";
        var I = {};
        collectorNamespaceName = "cofdfp";
        window[collectorNamespaceName] || (window[collectorNamespaceName] = {});
        "__DEFAULT_NAMESPACE" ==
        collectorNamespaceName && window._cc && (window[collectorNamespaceName]._cc = window._cc);
        if (window[collectorNamespaceName]._cc) {
            window[collectorNamespaceName]._cc.loaded = !0;
            for (var aa = 0; aa < window[collectorNamespaceName]._cc.length; aa++) Oa(window[collectorNamespaceName]._cc[aa])
        } else window[collectorNamespaceName]._cc = [], window[collectorNamespaceName]._cc.loaded = !0, "__DEFAULT_NAMESPACE" == collectorNamespaceName && (window._cc = window[collectorNamespaceName]._cc);
        window[collectorNamespaceName]._cc.push = function(a) {
            Oa(a)
        }
    })()
} catch (e$$48) {};