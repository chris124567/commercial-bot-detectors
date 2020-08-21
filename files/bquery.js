/* Retrieved from https://web.archive.org/web/20170212170205js_/https://s3-ap-southeast-1.amazonaws.com/af-bdaz/bquery.js */
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

    ! function(t) {
        "use strict";
        var e = function(t) {
            var e, n;
            e = Array.prototype.forEach, n = Array.prototype.map, this.each = function(t, n, r) {
                if (null !== t)
                    if (e && t.forEach === e) t.forEach(n, r);
                    else if (t.length === +t.length) {
                    for (var i = 0, a = t.length; a > i; i++)
                        if (n.call(r, t[i], i, t) === {}) return
                } else
                    for (var o in t)
                        if (t.hasOwnProperty(o) && n.call(r, t[o], o, t) === {}) return
            }, this.map = function(t, e, r) {
                var i = [];
                return null == t ? i : n && t.map === n ? t.map(e, r) : (this.each(t, function(t, n, a) {
                    i[i.length] = e.call(r, t, n, a)
                }), i)
            }, "object" == typeof t ? (this.hasher = t.hasher, this.screen_resolution = t.screen_resolution, this.canvas = t.canvas, this.ie_activex = t.ie_activex) : "function" == typeof t && (this.hasher = t)
        };
        e.prototype = {
            get: function() {
                var t = [];
                if (t.push(navigator.userAgent), t.push(navigator.language), t.push(screen.colorDepth), this.screen_resolution) {
                    var e = this.getScreenResolution();
                    "undefined" != typeof e && t.push(this.getScreenResolution().join("x"))
                }
                return t.push((new Date).getTimezoneOffset()), t.push(this.hasSessionStorage()), t.push(this.hasLocalStorage()), t.push(!!window.indexedDB), t.push(typeof document.body.addBehavior), t.push(typeof window.openDatabase), t.push(navigator.cpuClass), t.push(navigator.platform), t.push(navigator.doNotTrack), t.push(this.getPluginsString()), this.canvas && this.isCanvasSupported() && t.push(this.getCanvasFingerprint()), this.hasher ? this.hasher(t.join("###"), 31) : this.murmurhash3_32_gc(t.join("###"), 31)
            },
            murmurhash3_32_gc: function(t, e) {
                var n, r, i, a, o, s, c, h;
                for (n = 3 & t.length, r = t.length - n, i = e, o = 3432918353, s = 461845907, h = 0; r > h;) c = 255 & t.charCodeAt(h) | (255 & t.charCodeAt(++h)) << 8 | (255 & t.charCodeAt(++h)) << 16 | (255 & t.charCodeAt(++h)) << 24, ++h, c = 4294967295 & (65535 & c) * o + ((65535 & (c >>> 16) * o) << 16), c = c << 15 | c >>> 17, c = 4294967295 & (65535 & c) * s + ((65535 & (c >>> 16) * s) << 16), i ^= c, i = i << 13 | i >>> 19, a = 4294967295 & 5 * (65535 & i) + ((65535 & 5 * (i >>> 16)) << 16), i = (65535 & a) + 27492 + ((65535 & (a >>> 16) + 58964) << 16);
                switch (c = 0, n) {
                    case 3:
                        c ^= (255 & t.charCodeAt(h + 2)) << 16;
                    case 2:
                        c ^= (255 & t.charCodeAt(h + 1)) << 8;
                    case 1:
                        c ^= 255 & t.charCodeAt(h), c = 4294967295 & (65535 & c) * o + ((65535 & (c >>> 16) * o) << 16), c = c << 15 | c >>> 17, c = 4294967295 & (65535 & c) * s + ((65535 & (c >>> 16) * s) << 16), i ^= c
                }
                return i ^= t.length, i ^= i >>> 16, i = 4294967295 & 2246822507 * (65535 & i) + ((65535 & 2246822507 * (i >>> 16)) << 16), i ^= i >>> 13, i = 4294967295 & 3266489909 * (65535 & i) + ((65535 & 3266489909 * (i >>> 16)) << 16), i ^= i >>> 16, i >>> 0
            },
            hasLocalStorage: function() {
                try {
                    return !!t.localStorage
                } catch (e) {
                    return !0
                }
            },
            hasSessionStorage: function() {
                try {
                    return !!t.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            isCanvasSupported: function() {
                var t = document.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
            },
            getPluginsString: function() {
                return this.isIE() ? this.getIEPluginsString() : this.getRegularPluginsString()
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(t) {
                    var e = this.map(t, function(t) {
                        return [t.type, t.suffixes].join("~")
                    }).join(",");
                    return [t.name, t.description, e].join("::")
                }, this).join(";")
            },
            getIEPluginsString: function() {
                var e = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                return this.ie_activex && t.ActiveXObject ? this.map(e, function(t) {
                    try {
                        return new ActiveXObject(t), t
                    } catch (e) {
                        return null
                    }
                }).join(";") : ""
            },
            getScreenResolution: function() {
                return [screen.height, screen.width]
            },
            getCanvasFingerprint: function() {
                var t = document.createElement("canvas"),
                    e = t.getContext("2d"),
                    n = "Centillion";
                return e.textBaseline = "top", e.font = "14px 'Arial'", e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(0, 1, 64, 20), e.fillStyle = "#069", e.fillText(n, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(n, 4, 17), t.toDataURL()
            }
        }, "object" == typeof module && "object" == typeof exports && (module.exports = e), t.Fingerprint = e
    }(window);

    (function() {
        if (typeof _gAFBrowserBeacon == "undefined") {
            _gAFBrowserBeacon = true;
            queryBrowserData();
        }

        var mouseMoved = false,
            mouseMoveCounter = 0,
            keyDown = false,
            keyDownCounter = 0;

        function queryBrowserData() {
            // Get browser finger print
            var fingerprint = new Fingerprint({
                canvas: true,
                screen_resolution: true,
                ie_activex: true
            }).get();
            // Gather browser data
            var m = getBrowserInfo(),
                b = m[0],
                v = m[1],
                w = window,
                l = w.location,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                sw = w.screen.width,
                sh = w.screen.height,
                ww = w.innerWidth || e.clientWidth || g.clientWidth,
                wh = w.innerHeight || e.clientHeight || g.clientHeight,
                px = w.screenX || w.screenLeft,
                py = w.screenY || w.screenTop,
                c = w.screen.colorDepth,
                org = (l.protocol + '//' + l.hostname.toLowerCase()).substring(0, 255),
                path = (l.pathname).substring(0, 255),
                fp = fingerprint;

            var nilID = '00000000-0000-0000-0000-000000000000';
            var idKey = _idkey;
            var cookie = nilID;
            if (!isEmpty(idKey)) {
                cookie = getCookie(idKey);
                cookie = !isEmpty(cookie) ? cookie : nilID;
            }
            var adNetworkUID = _adnuid;
            adNetworkUID = !isEmpty(adNetworkUID) ? adNetworkUID : nilID;
            var bdazUrl = _bdazUrl;
            if (!isEmpty(bdazUrl) && adNetworkUID != '$AF_UUID$') {
                addEvent(d, 'mousemove', mouseMoveHandler);
                addEvent(d, 'keydown', keyDownHandler);
                if (d.addEventListener) {
                    d.addEventListener('touchmove', mouseMoveHandler);
                }

                window.setTimeout(
                    (function() {
                        mouseMoved = mouseMoved ? 1 : 0;
                        keyDown = keyDown ? 1 : 0;
                        ts = new Date().getTime();
                        var imgSrc = (document.location.protocol == "https:" ? "https://" : "http://") + bdazUrl +
                            '/bdaz.php' +
                            '?ts=' + ts +
                            '&uuid=' + cookie +
                            '&adnuid=' + adNetworkUID +
                            '&fp=' + fp +
                            '&br=' + b +
                            '&vr=' + v +
                            '&sw=' + sw +
                            '&sh=' + sh +
                            '&ww=' + ww +
                            '&wh=' + wh +
                            '&px=' + px +
                            '&py=' + py +
                            '&cd=' + c +
                            '&mm=' + mouseMoved +
                            '&kd=' + keyDown +
                            '&host=' + org +
                            '&path=' + path;
                        createImageTag(imgSrc);
                    }), 10000);
            }
        }

        function createImageTag(src) {
            var scriptTag = document.getElementById("af_bquery");
            var divTag = document.createElement("div");
            divTag.style.cssText = "POSITION: absolute; VISIBILITY: hidden; TOP: 0px; LEFT: 0px; MARGIN: 0; PADDING:0; WIDTH: 0; HEIGHT:0;";
            var beacon = document.createElement("img");
            beacon.style.cssText = "visibility:hidden;width:0px;height:0px;";
            beacon.setAttribute("src", src);
            divTag.appendChild(beacon);
            scriptTag.parentNode.insertBefore(divTag, scriptTag.nextSibling);
        }

        function getCookie(key) {
            var m = key + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; ++i) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(m) == 0) {
                    return c.substring(m.length, c.length);
                }
            }
            return null;
        }

        function getBrowserInfo() {
            var N = navigator.appName,
                ua = navigator.userAgent,
                tem;
            var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i) || [];
            if (M.length === 0) M = ua.match(/(webkit)\/?\s*(\.?\d+(\.\d+)*)/i) || [];
            if (M && (tem = ua.match(/version\/([\.\d]+)_/i)) != null) M[2] = tem[1];
            M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
            return M;
        }

        function addEvent(element, event, func) {
            if (element.addEventListener) {
                element.addEventListener(event, func, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + event, func);
            }
        }

        function mouseMoveHandler(event) {
            mouseMoveCounter++;
            if (mouseMoveCounter > 10) {
                mouseMoved = true;
                if (this.removeEventListener) {
                    this.removeEventListener('mousemove', mouseMoveHandler, false);
                    this.removeEventListener('touchmove', mouseMoveHandler, false);
                } else if (this.detachEvent) {
                    this.detachEvent('onmousemove', mouseMoveHandler);
                }
            }
        }

        function keyDownHandler(event) {
            keyDownCounter++;
            if (keyDownCounter > 3) {
                keyDown = true;
                if (this.removeEventListener) {
                    this.removeEventListener('keydown', keyDownHandler, false);
                } else if (this.detachEvent) {
                    this.detachEvent('keydown', keyDownHandler);
                }
            }
        }

        function isEmpty(str) {
            return (!str || str.length === 0);
        }
    })()


}