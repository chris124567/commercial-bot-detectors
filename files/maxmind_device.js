/* Retrieved from https://web.archive.org/web/20200628021728if_/https://device.maxmind.com/js/device.js */
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

    ! function() {
        /**
         * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
         *
         * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
         * @see http://github.com/garycourt/murmurhash-js
         * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
         * @see http://sites.google.com/site/murmurhash/
         * @license MIT. http://opensource.org/licenses/MIT
         *
         * @param {string} key ASCII only
         * @param {number} seed Positive integer only
         * @return {number} 32-bit positive integer hash
         */
        function e(e, t) {
            var n, o, r, i, a, c, l, u;
            for (n = 3 & e.length, o = e.length - n, r = t, a = 3432918353, c = 461845907, u = 0; u < o;) l = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24, ++u, l = (65535 & l) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295, l = l << 15 | l >>> 17, l = (65535 & l) * c + (((l >>> 16) * c & 65535) << 16) & 4294967295, r ^= l, r = r << 13 | r >>> 19, i = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295, r = (65535 & i) + 27492 + (((i >>> 16) + 58964 & 65535) << 16);
            switch (l = 0, n) {
                case 3:
                    l ^= (255 & e.charCodeAt(u + 2)) << 16;
                case 2:
                    l ^= (255 & e.charCodeAt(u + 1)) << 8;
                case 1:
                    l ^= 255 & e.charCodeAt(u), l = (65535 & l) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295, l = l << 15 | l >>> 17, l = (65535 & l) * c + (((l >>> 16) * c & 65535) << 16) & 4294967295, r ^= l
            }
            return r ^= e.length, r ^= r >>> 16, r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 13, r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295, r ^= r >>> 16, r >>> 0
        }
        /*!
         * Based on Detector function (v.0.3) from:
         * Author : Lalit Patel
         * Website: http://www.lalit.org/lab/javascript-css-font-detect/
         * License: Apache Software License 2.0
         *          http://www.apache.org/licenses/LICENSE-2.0
         */
        function t() {
            var e = ["monospace", "sans-serif", "serif"],
                t = [],
                n = "mmmmmmmmmmlli",
                o = "72px",
                r = document.body,
                i = document.createElement("span");
            i.style.fontSize = o, i.style.visibility = "hidden", i.innerHTML = n, r.appendChild(i);
            for (var a = function(e) {
                    return i.style.fontFamily = e, {
                        height: i.offsetHeight,
                        width: i.offsetWidth
                    }
                }, c = 0; c < e.length; c++) t[c] = a(e[c]);
            this.detect = function(n) {
                for (var o = 0; o < t.length; o++) {
                    var r = a('"' + n + '",' + e[o]),
                        i = t[o];
                    if (r.height !== i.height || r.width !== i.width) return !0
                }
                return !1
            }, this.finish = function() {
                r.removeChild(i)
            }
        }
        var n, o, r, i = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Arab", "Arabic Typesetting", "Arial Black", "Batang", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Calibri", "Californian FB", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Copperplate Gothic Light", "DejaVu LGC Sans Mono", "Desdemona", "DFKai-SB", "Dotum", "Engravers MT", "Eras Bold ITC", "Eurostile", "FangSong", "Forte", "Franklin Gothic Heavy", "French Script MT", "Gabriola", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GungSeo", "Haettenschweiler", "Harrington", "Hiragino Sans GB", "Impact", "Informal Roman", "KacstOne", "Kino MT", "Kozuka Gothic Pr6N", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Fax", "Magneto", "Malgun Gothic", "Matura MT Script Capitals", "Menlo", "MingLiU-ExtB", "MoolBoran", "MS PMincho", "MS Reference Sans Serif", "News Gothic MT", "Niagara Solid", "Nyala", "Palace Script MT", "Papyrus", "Perpetua", "Playbill", "PMingLiU", "Rachana", "Rockwell", "Sawasdee", "Script MT Bold", "Segoe Print", "Showcard Gothic", "SimHei", "Snap ITC", "TlwgMono", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Vladimir Script", "Wide Latin"],
            a = ["4game", "AdblockPlugin", "AdobeExManCCDetect", "AdobeExManDetect", "Alawar NPAPI utils", "Aliedit Plug-In", "Alipay Security Control 3", "AliSSOLogin plugin", "AmazonMP3DownloaderPlugin", "AOL Media Playback Plugin", "AppUp", "ArchiCAD", "AVG SiteSafety plugin", "Babylon ToolBar", "Battlelog Game Launcher", "BitCometAgent", "Bitdefender QuickScan", "BlueStacks Install Detector", "CatalinaGroup Update", "Citrix ICA Client", "Citrix online plug-in", "Citrix Receiver Plug-in", "Coowon Update", "DealPlyLive Update", "Default Browser Helper", "DivX Browser Plug-In", "DivX Plus Web Player", "DivX VOD Helper Plug-in", "doubleTwist Web Plugin", "Downloaders plugin", "downloadUpdater", "eMusicPlugin DLM6", "ESN Launch Mozilla Plugin", "ESN Sonar API", "Exif Everywhere", "Facebook Plugin", "File Downloader Plug-in", "FileLab plugin", "FlyOrDie Games Plugin", "Folx 3 Browser Plugin", "FUZEShare", "GDL Object Web Plug-in 16.00", "GFACE Plugin", "Ginger", "Gnome Shell Integration", "Google Earth Plugin", "Google Earth Plug-in", "Google Gears 0.5.33.0", "Google Talk Effects Plugin", "Google Update", "Harmony Firefox Plugin", "Harmony Plug-In", "Heroes & Generals live", "HPDetect", "Html5 location provider", "IE Tab plugin", "iGetterScriptablePlugin", "iMesh plugin", "Kaspersky Password Manager", "LastPass", "LogMeIn Plugin 1.0.0.935", "LogMeIn Plugin 1.0.0.961", "Ma-Config.com plugin", "Microsoft Office 2013", "MinibarPlugin", "Native Client", "Nitro PDF Plug-In", "Nokia Suite Enabler Plugin", "Norton Identity Safe", "npAPI Plugin", "NPLastPass", "NPPlayerShell", "npTongbuAddin", "NyxLauncher", "Octoshape Streaming Services", "Online Storage plug-in", "Orbit Downloader", "Pando Web Plugin", "Parom.TV player plugin", "PDF integrado do WebKit", "PDF-XChange Viewer", "PhotoCenterPlugin1.1.2.2", "Picasa", "PlayOn Plug-in", "QQ2013 Firefox Plugin", "QQDownload Plugin", "QQMiniDL Plugin", "QQMusic", "RealDownloader Plugin", "Roblox Launcher Plugin", "RockMelt Update", "Safer Update", "SafeSearch", "Scripting.Dictionary", "SefClient Plugin", "Shell.UIHelper", "Silverlight Plug-In", "Simple Pass", "Skype Web Plugin", "SumatraPDF Browser Plugin", "Symantec PKI Client", "Tencent FTN plug-in", "Thunder DapCtrl NPAPI Plugin", "TorchHelper", "Unity Player", "Uplay PC", "VDownloader", "Veetle TV Core", "VLC Multimedia Plugin", "Web Components", "WebKit-integrierte PDF", "WEBZEN Browser Extension", "Wolfram Mathematica", "WordCaptureX", "WPI Detector 1.4", "Yandex Media Plugin", "Yandex PDF Viewer", "YouTube Plug-in", "zako"],
            c = function() {
                var t, n;
                try {
                    t = document.createElement("canvas"), n = t.getContext("2d")
                } catch (o) {}
                return n ? (n.fillStyle = "red", n.fillRect(30, 10, 200, 100), n.strokeStyle = "#1a3bc1", n.lineWidth = 6, n.lineCap = "round", n.arc(50, 50, 20, 0, Math.PI, !1), n.stroke(), n.fillStyle = "#42e1a2", n.font = "15.4px 'Arial'", n.textBaseline = "alphabetic", n.fillText("PR flacks quiz gym: TV DJ box when? ☠", 15, 60), n.shadowOffsetX = 1, n.shadowOffsetY = 2, n.shadowColor = "white", n.fillStyle = "rgba(0, 0, 200, 0.5)", n.font = "60px 'Not a real font'", n.fillText("No骗", 40, 80), e(t.toDataURL())) : null
            },
            l = function() {
                var e = ['video/mp4; codecs="avc1.42c00d"', 'video/ogg; codecs="theora"', 'video/webm; codecs="vorbis,vp8"', 'video/webm; codecs="vorbis,vp9"', 'video/mp2t; codecs="avc1.42E01E,mp4a.40.2"'],
                    t = ["audio/mpeg", 'audio/mp4; codecs="mp4a.40.2"', 'audio/ogg; codecs="vorbis"', 'audio/ogg; codecs="opus"', 'audio/webm; codecs="vorbis"', 'audio/wav; codecs="1"'],
                    n = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) {
                            var o = e[n];
                            window.MediaSource ? t[o] = window.MediaSource.isTypeSupported(o) : window.WebKitMediaSource && (t[o] = window.WebKitMediaSource.isTypeSupported(o))
                        }
                        return t
                    };
                return {
                    audio: n(t),
                    video: n(e)
                }
            },
            u = function() {
                for (var e = [], n = new t, o = 0; o < i.length; o++) {
                    var r = i[o];
                    n.detect(r) && e.push(r)
                }
                return n.finish(), e
            },
            d = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            },
            s = function(e) {
                var t = [],
                    n = {};
                for (var o in e)("object" != typeof e[o] || d(e[o])) && (n[o] = e[o]), t.push(o);
                return n.enumerationOrder = t, n
            },
            g = function() {
                var e = s(navigator),
                    t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                t && (e.connection = s(t)), e.javaEnabled = navigator.javaEnabled();
                try {
                    e.taintEnabled = navigator.taintEnabled()
                } catch (n) {}
                return e
            },
            f = function() {
                for (var e = [], t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "rmocx.RealPlayer G2 Control", "Scripting.Dictionary", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "SWCtl.SWCtl", "TDCCtl.TDCCtl", "WMPlayer.OCX"], n = 0; n < t.length; n++) {
                    var o = t[n];
                    try {
                        var r = new ActiveXObject(o),
                            i = {
                                name: o
                            };
                        try {
                            i.version = r.GetVariable("$version")
                        } catch (a) {}
                        e.push(i)
                    } catch (a) {}
                }
                return e
            },
            h = function(e) {
                var t = {
                    name: e.name,
                    filename: e.filename.toLowerCase(),
                    description: e.description
                };
                "undefined" != typeof e.version && (t.version = e.version), t.mimeTypes = [];
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    t.mimeTypes.push({
                        description: o.description,
                        suffixes: o.suffixes,
                        type: o.type
                    })
                }
                return t
            },
            p = function() {
                var e, t, n, o = [],
                    r = {};
                for (t = 0; t < navigator.plugins.length; t++) e = navigator.plugins[t], "Shockwave Flash" === e.name && navigator.userAgent.indexOf("Chrome") > -1 || (r[e.name] = 1, o.push(h(e)));
                for (t = 0; t < a.length; t++) n = a[t], r[n] || (e = navigator.plugins[n], e && o.push(h(e)));
                return o
            },
            m = function() {
                return window.ActiveXObject ? f() : p()
            },
            v = function() {
                var e = {},
                    t = [];
                for (var n in window.screen) "object" != typeof window.screen[n] && (e[n] = window.screen[n]), t.push(n);
                return e.enumerationOrder = t, e
            },
            y = function() {
                try {
                    if ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) return !0;
                    var e = "(-webkit-touch-enabled),(-moz-touch-enabled),(-o-touch-enabled),(-ms-touch-enabled)";
                    return window.matchMedia(e).matches
                } catch (t) {
                    return !1
                }
            },
            w = function() {
                var e = {};
                return e.cookie = document.cookie.replace(/(?:(?:^|.*;\s*)__mmapiwsid\s*=\s*([^;]*).*$)|^.*$/, "$1"), window.localStorage && (e.localStorage = localStorage.getItem("__mmapiwsid")), n && (e.indexedDb = n), e
            },
            S = function() {
                var e = document.createElement("div"),
                    t = {},
                    n = ["ActiveBorder", "ActiveCaption", "AppWorkspace", "Background", "ButtonFace", "ButtonHighlight", "ButtonShadow", "ButtonText", "CaptionText", "GrayText", "Highlight", "HighlightText", "InactiveBorder", "InactiveCaption", "InactiveCaptionText", "InfoBackground", "InfoText", "Menu", "MenuText", "Scrollbar", "ThreeDDarkShadow", "ThreeDFace", "ThreeDHighlight", "ThreeDLightShadow", "ThreeDShadow", "Window", "WindowFrame", "WindowText"];
                if (!window.getComputedStyle) return t;
                for (var o = 0; o < n.length; o++) document.body.appendChild(e), e.style.color = n[o], t[n[o]] = window.getComputedStyle(e).getPropertyValue("color"), document.body.removeChild(e);
                return t
            },
            P = function(t, n) {
                var o = "attribute vec2 attrVertex; varying vec2 varyinTexCoordinate; uniform vec2 uniformOffset; void main() {   varyinTexCoordinate = attrVertex + uniformOffset;   gl_Position = vec4(attrVertex, 0, 1); }",
                    r = "precision mediump float; varying vec2 varyinTexCoordinate; void main() {   gl_FragColor = vec4(varyinTexCoordinate, 0, 1); }",
                    i = t.createBuffer();
                t.bindBuffer(t.ARRAY_BUFFER, i);
                var a = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                t.bufferData(t.ARRAY_BUFFER, a, t.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
                var c = t.createProgram(),
                    l = t.createShader(t.VERTEX_SHADER);
                t.shaderSource(l, o), t.compileShader(l);
                var u = t.createShader(t.FRAGMENT_SHADER);
                return t.shaderSource(u, r), t.compileShader(u), t.attachShader(c, l), t.attachShader(c, u), t.linkProgram(c), t.useProgram(c), c.vertexPosAttrib = t.getAttribLocation(c, "attrVertex"), c.offsetUniform = t.getUniformLocation(c, "uniformOffset"), t.enableVertexAttribArray(c.vertexPosArray), t.vertexAttribPointer(c.vertexPosAttrib, i.itemSize, t.FLOAT, !1, 0, 0), t.uniform2f(c.offsetUniform, 1, 1), t.drawArrays(t.TRIANGLE_STRIP, 0, i.numItems), e(n.toDataURL())
            },
            b = function() {
                var e, t = document.createElement("canvas"),
                    n = {};
                try {
                    e = t.getContext("webgl") || t.getContext("experimental-webgl")
                } catch (o) {}
                if (!e) return n;
                try {
                    n.extensions = e.getSupportedExtensions()
                } catch (o) {}
                try {
                    n.hash = P(e, t)
                } catch (o) {}
                return n
            },
            C = function(t) {
                var n = window.OfflineAudioContext || window.webkitOfflineAudioContext,
                    o = 2,
                    r = 4096,
                    i = 44100,
                    a = new n(o, r, i),
                    c = a.createOscillator();
                c.type = "triangle";
                var l = a.createDynamicsCompressor(),
                    u = 4096,
                    d = 2,
                    s = a.createScriptProcessor(u, d, d),
                    g = !1;
                s.onaudioprocess = function(n) {
                    if (!g) {
                        g = !0;
                        try {
                            for (var o = "", r = 0; r < n.inputBuffer.numberOfChannels; r++) {
                                var i = n.inputBuffer.getChannelData(r);
                                o += i.toString()
                            }
                            o += "," + (a.sampleRate || 0), o += "," + (a.destination.maxChannelCount || 0), o += "," + (a.destination.numberOfInputs || 0), o += "," + (a.destination.numberOfOutputs || 0), o += "," + (a.destination.channelCount || 0), o += "," + (a.destination.channelCountMode || 0), o += "," + (a.destination.channelInterpretation || 0);
                            var l = e(o);
                            c.stop();
                            try {
                                t(l)
                            } catch (u) {}
                        } catch (u) {
                            t(0)
                        }
                    }
                };
                var f = a.createGain();
                f.gain.setValueAtTime(0, a.currentTime);
                var h = a.destination;
                c.connect(l), l.connect(s), s.connect(f), f.connect(h), c.start(), a.startRendering(), window.setTimeout(function() {
                    g || (g = !0, t(0))
                }, 500)
            },
            T = function(e) {
                try {
                    C(e)
                } catch (t) {
                    e(0)
                }
            },
            A = function(e) {
                var t = o;
                if (t) {
                    var n = "StoredId",
                        r = t.transaction(n, "readwrite"),
                        i = r.objectStore(n);
                    try {
                        i.put({
                            id: 0,
                            value: e
                        })
                    } catch (a) {}
                }
            },
            D = function(e, t) {
                var n = "__mmapiwsid",
                    o = new Date;
                o.setFullYear(o.getFullYear() + 2), e || (e = document.domain);
                try {
                    document.cookie = n + "=" + t + "; expires=" + o.toGMTString() + "; domain=" + e + "; path=/"
                } catch (r) {}
                if (window.localStorage) try {
                    localStorage.setItem(n, t)
                } catch (r) {}
                A(t)
            };
        r = window.JSON && window.JSON.stringify ? function(e) {
            var t = "toJSON" in Array.prototype,
                n = "toJSON" in Object.prototype,
                o = Array.prototype.toJSON,
                r = Object.prototype.toJSON;
            try {
                return delete Array.prototype.toJSON, delete Object.prototype.toJSON, JSON.stringify(e)
            } finally {
                t && (Array.prototype.toJSON = o), n && (Object.prototype.toJSON = r)
            }
        } : function(e) {
            var t, n = typeof e;
            if ("undefined" === n || null === e) return "null";
            if ("number" === n || "boolean" === n) return String(e);
            if ("object" === n && e && e.constructor === Array) {
                t = [];
                for (var o = 0; o < e.length; o++) t.push(r(e[o]));
                return "[" + String(t) + "]"
            }
            if ("object" === n) {
                var i;
                t = [];
                for (i in e) e.hasOwnProperty(i) && t.push('"' + i + '":' + r(e[i]));
                return "{" + String(t) + "}"
            }
            var a = String(e);
            return a = a.replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0"), '"' + a + '"'
        };
        var M, x = function(e) {
                return "https://" + ("d-ipv" + e + ".mmapiws.com") + "/ant_squire"
            },
            O = function(e, t, n) {
                var o = e.responseText.split(/;/),
                    r = o[0],
                    i = o[1],
                    a = parseInt(o[2], 10);
                "undefined" != typeof i && D(r, i), 6 === t && 6 === a && M(n, 4)
            };
        M = function(e, t) {
            var n, o, i = x(t);
            if (e.storedIds = w(), o = r(e), "Microsoft Internet Explorer" === navigator.appName && window.XDomainRequest && 10 !== window.document.documentMode) n = new XDomainRequest, n.onload = function() {
                O(n, t)
            }, n.onprogress = function() {}, n.ontimeout = function() {}, n.onerror = function() {};
            else {
                try {
                    n = new window.XMLHttpRequest
                } catch (a) {}
                if (!n) try {
                    n = new window.ActiveXObject("Microsoft.XMLHTTP")
                } catch (a) {}
                if (!n) return;
                n.onreadystatechange = function() {
                    4 === n.readyState && 200 === n.status && O(n, t, e)
                }
            }
            try {
                n.open("POST", i, !0), "function" == typeof n.setRequestHeader && n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), n.send(o)
            } catch (a) {}
        };
        var B = function() {
                var e, t = new Date,
                    n = "undefined" != typeof survey_height_follow ? survey_height_follow : maxmind_user_id;
                try {
                    e = S()
                } catch (o) {}
                var r = {
                    canvas: {
                        "2dHash": c(),
                        webgl: b()
                    },
                    codecs: l(),
                    deviceTime: t.getTime() / 1e3,
                    documentUrl: document.URL,
                    documentMode: document.documentMode,
                    fonts: {
                        css: u()
                    },
                    navigator: g(),
                    plugins: m(),
                    screen: v(),
                    systemColors: e,
                    timezoneOffset: t.getTimezoneOffset(),
                    touchInput: y(),
                    userId: n
                };
                return r
            },
            F = function() {
                if (navigator.getBattery) navigator.getBattery().then(function(e) {
                    var t = B();
                    return t.battery = {
                        charging: e.charging,
                        chargingTime: e.chargingTime,
                        dischargingTime: e.dischargingTime,
                        level: e.level
                    }, t
                }).then(function(e) {
                    T(function(t) {
                        e.audio = t, M(e, 6)
                    })
                });
                else {
                    var e = B();
                    T(function(t) {
                        e.audio = t, M(e, 6)
                    })
                }
            };
        if (!document.__mmapiwsStateTestingDevice) {
            var I = "StoredId",
                k = function(e) {
                    var t = e.transaction(I, "readonly"),
                        o = t.objectStore(I),
                        r = o.get(0);
                    r.onsuccess = function(e) {
                        var t = e.target.result;
                        t && (n = t.value)
                    }
                },
                E = function() {
                    if (window.indexedDB) {
                        var e = indexedDB.open("__mmapiwsDb", 1);
                        null !== e && (e.onsuccess = function() {
                            o = this.result, k(o)
                        }, e.onupgradeneeded = function(e) {
                            e.currentTarget.result.createObjectStore(I, {
                                keyPath: "id"
                            })
                        })
                    }
                },
                R = function() {
                    E(), "undefined" != typeof document.body && document.body ? F() : setTimeout(R, 500)
                };
            R()
        }
    }();
    //# sourceMappingURL=device.js.map


}
