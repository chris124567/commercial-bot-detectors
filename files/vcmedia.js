/* Retrieved from https://web.archive.org/web/20160619223627js_/http://admicro1.vcmedia.vn/fingerprint/figp.js */
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

    if (void 0 === murmur3) var murmur3 = {
        version: "1.0.0"
    };
    (function() {
        murmur3.rotl = function(a, c) {
            return 0 == a[0] && 0 == a[1] ? a : [(a[0] << c >>> 0 | a[1] >>> 32 - c >>> 0) >>> 0, (a[1] << c >>> 0 | a[0] >>> 32 - c >>> 0) >>> 0]
        };
        murmur3.shiftl = function(a, c) {
            if (0 == a[0] && 0 == a[1]) return a;
            if (64 == c) return [0, 0];
            31 < c && (a[0] = a[1], a[1] = 0, c -= 32);
            return [(a[0] << c >>> 0 | a[1] >>> 32 - c >>> 0) >>> 0, a[1] << c >>> 0]
        };
        murmur3.shiftr = function(a, c) {
            if (0 == a[0] && 0 == a[1]) return a;
            if (64 == c) return [0, 0];
            31 < c && (a[1] = a[0] >>> 0, a[0] = 0, c -= 32);
            return [a[0] >>> c >>> 0, (a[1] >>> c >>> 0 | a[0] << 32 - c >>> 0) >>> 0]
        };
        murmur3.xor64 = function(a, c) {
            return [(a[0] ^
                c[0]) >>> 0, (a[1] ^ c[1]) >>> 0]
        };
        murmur3.add64 = function(a, c) {
            if (0 == a[0] && 0 == a[1]) return c;
            if (0 == c[0] && 0 == c[1]) return a;
            var b = a[1] + c[1],
                l = 4294967295 < b ? Math.floor(b / Math.pow(2, 32)) >>> 0 : 0;
            return [a[0] + c[0] + l >>> 0, b >>> 0]
        };
        murmur3.mult64 = function(a, c) {
            a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
            c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
            var b = [0, 0, 0, 0];
            b[3] += a[3] * c[3];
            b[2] += b[3] >>> 16;
            b[3] &= 65535;
            b[2] += a[2] * c[3];
            b[1] += b[2] >>> 16;
            b[2] &= 65535;
            b[2] += a[3] * c[2];
            b[1] += b[2] >>> 16;
            b[2] &= 65535;
            b[1] += a[1] * c[3];
            b[0] +=
                b[1] >>> 16;
            b[1] &= 65535;
            b[1] += a[2] * c[2];
            b[0] += b[1] >>> 16;
            b[1] &= 65535;
            b[1] += a[3] * c[1];
            b[0] += b[1] >>> 16;
            b[1] &= 65535;
            b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
            b[0] &= 65535;
            b[0] >>>= 0;
            b[1] >>>= 0;
            b[2] >>>= 0;
            b[3] >>>= 0;
            return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
        };
        murmur3.fmix64 = function(a) {
            a = murmur3.xor64(a, [0, a[0] >>> 1]);
            a = murmur3.mult64(a, [4283543511, 3981806797]);
            a = murmur3.xor64(a, [0, a[0] >>> 1]);
            a = murmur3.mult64(a, [3301882366, 444984403]);
            return a = murmur3.xor64(a, [0, a[0] >>> 1])
        };
        murmur3.hash128 = function(a, c) {
            a = a || "";
            c = c || 0;
            for (var b = a.length % 16, l = Math.floor(a.length / 16), d = [0, c], k = [0, c], h = [0, 0], e = [0, 0], n = [2277735313, 289559509], m = [1291169091, 658871167], g = 0; g < l; g += 16) h = [a.charCodeAt(g + 4) & 255 | (a.charCodeAt(g + 5) & 255) << 8 | (a.charCodeAt(g + 6) & 255) << 16 | (a.charCodeAt(g + 7) & 255) << 24, a.charCodeAt(g) & 255 | (a.charCodeAt(g + 1) & 255) << 8 | (a.charCodeAt(g + 2) & 255) << 16 | (a.charCodeAt(g + 3) & 255) << 24], e = [a.charCodeAt(g + 12) & 255 | (a.charCodeAt(g + 13) & 255) << 8 | (a.charCodeAt(g + 14) & 255) << 16 | (a.charCodeAt(g + 15) & 255) << 24, a.charCodeAt(g + 8) & 255 | (a.charCodeAt(g +
                9) & 255) << 8 | (a.charCodeAt(g + 10) & 255) << 16 | (a.charCodeAt(g + 11) & 255) << 24], h = murmur3.mult64(h, n), h = murmur3.rotl(h, 31), h = murmur3.mult64(h, m), d = murmur3.xor64(d, h), d = murmur3.rotl(d, 27), d = murmur3.add64(d, k), d = murmur3.add64(murmur3.mult64(d, [0, 5]), [0, 1390208809]), e = murmur3.mult64(e, m), e = murmur3.rotl(e, 33), e = murmur3.mult64(e, n), k = murmur3.xor64(k, e), k = murmur3.rotl(k, 31), k = murmur3.add64(k, d), k = murmur3.add64(murmur3.mult64(k, [0, 5]), [0, 944331445]);
            h = [0, 0];
            e = [0, 0];
            switch (b) {
                case 15:
                    e = murmur3.xor64(e, murmur3.shiftl([0,
                        a.charCodeAt(g + 14)
                    ], 48));
                case 14:
                    e = murmur3.xor64(e, murmur3.shiftl([0, a.charCodeAt(g + 13)], 40));
                case 13:
                    e = murmur3.xor64(e, murmur3.shiftl([0, a.charCodeAt(g + 12)], 32));
                case 12:
                    e = murmur3.xor64(e, murmur3.shiftl([0, a.charCodeAt(g + 11)], 24));
                case 11:
                    e = murmur3.xor64(e, murmur3.shiftl([0, a.charCodeAt(g + 10)], 16));
                case 10:
                    e = murmur3.xor64(e, murmur3.shiftl([0, a.charCodeAt(g + 9)], 8));
                case 9:
                    e = murmur3.xor64(e, [0, a.charCodeAt(g + 8)]), e = murmur3.mult64(e, m), e = murmur3.rotl(e, 33), e = murmur3.mult64(e, n), k = murmur3.xor64(k, e);
                case 8:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 7)], 56));
                case 7:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 6)], 48));
                case 6:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 5)], 40));
                case 5:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 4)], 32));
                case 4:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 3)], 24));
                case 3:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 2)], 16));
                case 2:
                    h = murmur3.xor64(h, murmur3.shiftl([0, a.charCodeAt(g + 1)], 8));
                case 1:
                    h = murmur3.xor64(h, [0, a.charCodeAt(g)]),
                        h = murmur3.mult64(h, n), h = murmur3.rotl(h, 31), h = murmur3.mult64(h, m), d = murmur3.xor64(d, h)
            }
            d = murmur3.xor64(d, [0, a.length]);
            k = murmur3.xor64(k, [0, a.length]);
            d = murmur3.add64(d, k);
            k = murmur3.add64(k, d);
            d = murmur3.fmix64(d);
            k = murmur3.fmix64(k);
            d = murmur3.add64(d, k);
            k = murmur3.add64(k, d);
            murmur3.hash_raw = [d[1] >>> 0, d[0] >>> 0, k[1] >>> 0, k[0] >>> 0];
            return murmur3
        };
        murmur3.raw = function() {
            return murmur3.hash_raw
        };
        murmur3.hex = function() {
            return murmur3.hash_raw[0].toString(16) + "" + murmur3.hash_raw[1].toString(16) + "" + murmur3.hash_raw[2].toString(16) +
                "" + murmur3.hash_raw[3].toString(16)
        }
    })();
    (function() {
        var a = function() {
                var b = "Lingoes Unicode;Gadugi;Aldhabi;TeamViewer10;Javanese Text;Buxton Sketch;Trajan Pro;VNI-Silver;A Charming Font;VNI-Calligraphic;Arimo;TeamViewer9;VNI-Centur;Vinhan;VNI-Baybuom;Arial Unicode MS;Agency FB;Aharoni;DaunPenh;Segoe Print;Haettenschweiler;MS Outlook;VNI Greece;Gentium Basic;OpenSymbol;Helvetica;Letter Gothic Std;Minion Pro SmBd;Myriad Arabic;Sitka Banner;Yu Gothic;Myanmar Text;Urdu Typesetting".split(";"),
                    a =
                    function() {
                        function b(g) {
                            a.appendChild(c);
                            var d = [];
                            d[0] = e.style.fontFamily = g;
                            d[1] = e.offsetWidth;
                            d[2] = e.offsetHeight;
                            a.removeChild(c);
                            g = g.toLowerCase();
                            d[3] = "serif" == g ? !0 : d[1] != l || d[2] != m;
                            return d
                        }
                        var a = document.getElementsByTagName("BODY")[0],
                            c = document.createElement("DIV"),
                            e = document.createElement("SPAN");
                        c.setAttribute("style", "opacity: 0; filter: alpha(opacity=0)");
                        c.appendChild(e);
                        c.style.fontFamily = "thisfontdoesnotexist";
                        e.style.fontFamily = "thisfontdoesnotexist";
                        e.style.fontSize = "72px";
                        e.innerHTML =
                            "mmmmmmmmmmlil";
                        a.appendChild(c);
                        var l = e.offsetWidth,
                            m = e.offsetHeight;
                        a.removeChild(c);
                        this.detailedTest = b;
                        this.test = function(a) {
                            f = b(a);
                            return f[3]
                        }
                    };
                return function() {
                    for (var c = "", k = 0, h = b.length; k < h; k++) c = (new a).test(b[k]) ? c + "1" : c + "0";
                    return c
                }()
            }(),
            c = function(a) {
                var c, d;
                c = Array.prototype.forEach;
                d = Array.prototype.map;
                this.each = function(a, b, e) {
                    if (null !== a)
                        if (c && a.forEach === c) a.forEach(b, e);
                        else if (a.length === +a.length)
                        for (var d = 0, m = a.length; d < m && b.call(e, a[d], d, a) !== {}; d++);
                    else
                        for (d in a)
                            if (a.hasOwnProperty(d) &&
                                b.call(e, a[d], d, a) === {}) break
                };
                this.map = function(a, b, c) {
                    var l = [];
                    if (null == a) return l;
                    if (d && a.map === d) return a.map(b, c);
                    this.each(a, function(a, d, k) {
                        l[l.length] = b.call(c, a, d, k)
                    });
                    return l
                };
                "object" == typeof a ? (this.hasher = a.hasher, this.screen_resolution = a.screen_resolution, this.canvas = a.canvas, this.ie_activex = a.ie_activex) : "function" == typeof a && (this.hasher = a)
            };
        c.prototype = {
            list_fonts: a,
            get: function() {
                var b = [];
                b.push(navigator.userAgent);
                b.push(navigator.language);
                b.push(screen.colorDepth);
                this.screen_resolution &&
                    "undefined" !== typeof this.getScreenResolution() && b.push(this.getScreenResolution().join("x"));
                b.push((new Date).getTimezoneOffset());
                b.push(this.hasSessionStorage());
                b.push(this.hasLocalStorage());
                b.push(!!window.indexedDB);
                document.body ? b.push(typeof document.body.addBehavior) : b.push("undefined");
                b.push(typeof window.openDatabase);
                b.push(navigator.cpuClass);
                b.push(navigator.platform);
                b.push(navigator.doNotTrack);
                b.push(this.getPluginsString());
                b.push(a);
                var c = "";
                /*"undefined"!=typeof adm_headers.accept&&
                (c+=adm_headers.accept);"undefined"!=typeof adm_headers["accept-language"]&&(c+=adm_headers["accept-language"]);"undefined"!=typeof adm_headers["accept-encoding"]&&(c+=adm_headers["accept-encoding"]);*/
                b.push(c);
                this.canvas && this.isCanvasSupported() && b.push(this.getCanvasFingerprint());
                return this.hasher ? this.hasher(b.join("###"), 31) : this.murmurhash3_32_gc(b.join("###"), 31)
            },
            murmurhash3_32_gc: function(a, c) {
                return murmur3.hash128(a, c).hex()
            },
            hashFont: function() {
                return void 0 != ADM_AdsTracking && "undefined" !=
                    typeof ADM_AdsTracking.fonts ? ADM_AdsTracking.fonts : ""
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (a) {
                    return !0
                }
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (a) {
                    return !0
                }
            },
            isCanvasSupported: function() {
                var a = document.createElement("canvas");
                return !(!a.getContext || !a.getContext("2d"))
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
            },
            getPluginsString: function() {
                return this.isIE() &&
                    this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(a) {
                    var c = this.map(a, function(a) {
                        return [a.type, a.suffixes].join("~")
                    }).join(",");
                    return [a.name, a.description, c].join("::")
                }, this).join(";")
            },
            getIEPluginsString: function() {
                return window.ActiveXObject ? this.map("ShockwaveFlash.ShockwaveFlash;AcroPDF.PDF;PDF.PdfCtrl;QuickTime.QuickTime;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);RealPlayer;SWCtl.SWCtl;WMPlayer.OCX;AgControl.AgControl;Skype.Detection".split(";"),
                    function(a) {
                        try {
                            return new ActiveXObject(a), a
                        } catch (c) {
                            return null
                        }
                    }).join(";") : ""
            },
            getScreenResolution: function() {
                return [screen.height, screen.width]
            },
            getFont: function() {},
            getCanvasFingerprint: function() {
                var a = document.createElement("canvas"),
                    c = a.getContext("2d");
                c.textBaseline = "top";
                c.font = "14px 'Arial'";
                c.textBaseline = "alphabetic";
                c.fillStyle = "#f60";
                c.fillRect(125, 1, 62, 20);
                c.fillStyle = "#069";
                c.fillText("https://web.archive.org/web/20160619223627/http://admicro.vn/", 2, 15);
                c.fillStyle = "rgba(102, 204, 0, 0.7)";
                c.fillText("https://web.archive.org/web/20160619223627/http://admicro.vn/",
                    4, 17);
                return a.toDataURL()
            }
        };
        window.Fingerprint = c
    })();

    (function() {
        try {
            var fp1 = new Fingerprint();
            var fp2 = new Fingerprint({
                canvas: true
            });
            var fp3 = new Fingerprint({
                ie_activex: true
            });
            var fp4 = new Fingerprint({
                screen_resolution: true
            });
            var fp5 = new Fingerprint({
                canvas: true,
                screen_resolution: true,
                ie_activex: true
            });
            var fp6 = new Fingerprint({
                canvas: true,
                ie_activex: true
            });
            var fp = fp1.list_fonts + '_' + fp1.get() + '_' + fp2.get() + '_' + fp3.get() + '_' + fp4.get() + '_' + fp5.get() + '_' + fp6.get() + '_' + _ADMFlashDetect.raw + '_' + ADM_AdsTracking.get('__uid') + '_' + (screen.width + 'X' + screen.height);
            var img = new Image();
            img.src = '//web.archive.org/web/20160619223627/http://lg.logging.admicro.vn/fig?fps=' + fp + '&guid=' + ADM_AdsTracking.get('__uid') + ADM_AdsTracking.getParam();
        } catch (e) {
            var fp = ' _ _ _ _ _ _ _' + _ADMFlashDetect.raw + '_' + ADM_AdsTracking.get('__uid');
            var img = new Image();
            img.src = '//web.archive.org/web/20160619223627/http://lg.logging.admicro.vn/fig?fps=' + fp + '&guid=' + ADM_AdsTracking.get('__uid') + ADM_AdsTracking.getParam();
        }
    })();


}
/*
     FILE ARCHIVED ON 22:36:27 Jun 19, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 03:37:54 Jul 04, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 63.093 (3)
  exclusion.robots: 0.216
  captures_list: 97.851
  load_resource: 104.624
  PetaboxLoader3.datanode: 87.774 (5)
  exclusion.robots.policy: 0.202
  RedisCDXSource: 13.77
  CDXLines.iter: 15.189 (3)
  esindex: 0.012
  PetaboxLoader3.resolve: 73.973 (3)
*/