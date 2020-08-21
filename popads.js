/* Retrieved from https://web.archive.org/web/20200820055715js_/https://c1.popads.net/pop.js. */
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

    (function(e, d, q) {
        function w(a, c, b, f, g) {
            null == d.body && (d.body = d.createElement("body"));
            null == d.head && (d.head = d.createElement("head"));
            var k = d.createElement("style");
            k.innerHTML = "#a_timer_oYvwGmQc,#a_title_nEYjMupI,.a_close_nEYjMupI{top:0;right:0;height:30px;line-height:30px;text-align:center}.top-left_vUTDnibMkZJIvuTH{position:fixed;top:0;left:0}.bottom-left_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:0}.top-right_vUTDnibMkZJIvuTH{position:fixed;top:0;right:0}.bottom-right_vUTDnibMkZJIvuTH{position:fixed;bottom:0;right:0}.top-center_vUTDnibMkZJIvuTH{position:fixed;top:0;left:50%;transform:translateX(-50%)}.bottom-center_vUTDnibMkZJIvuTH{position:fixed;bottom:0;left:50%;transform:translateX(-50%)}.c_window_xEucqIjg{z-index:9999999;overflow:hidden;position:fixed;background-color:#FFF;margin:20px;padding:0;border:1px solid #ccc;border-radius:5px;-webkit-box-shadow:0 0 5px 1px rgba(153,153,153,.5);-moz-box-shadow:0 0 5px 1px rgba(153,153,153,.5);box-shadow:0 0 5px 1px rgba(153,153,153,.5)}#alink_overlay_EPXdyaUf{position:absolute;z-index:1;background:rgba(0,0,0,0);cursor:pointer}#a_iframe_DwTGCjTm{z-index:-1;padding:0!important}.a_close_nEYjMupI{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}#a_title_nEYjMupI{position:absolute;color:rgba(0,0,0,1);font-size:18px}.a_close_nEYjMupI a{text-decoration:none!important}#a_timer_oYvwGmQc{position:absolute;color:rgba(0,0,0,.3);width:30px;font-size:30px}.a_close_nEYjMupI:focus,.a_close_nEYjMupI:hover{color:#000;cursor:pointer}.a_open_rrTmtfGj{display:block}.a_hide_qkasklrO{display:none}";
            d.head.appendChild(k);
            d.getElementById("c_window_xEucqIjg") && (clearTimeout(timedis), d.getElementById("c_window_xEucqIjg").remove());
            k = d.createElement("div");
            k.id = "c_window_xEucqIjg";
            d.body.appendChild(k);
            d.getElementById("c_window_xEucqIjg").classList.add("c_window_xEucqIjg");
            k.innerHTML = '<div style="height:30px;"><span id="a_title_nEYjMupI">Advertisement</span><span class="a_close_nEYjMupI a_hide_qkasklrO" data-alink="data-alink" id="a_close_nEYjMupI" data-dismiss_OLjQnDvi="c_xEucqIjg"><a href="#" data-alink="data-alink" data-dismiss_OLjQnDvi="c_xEucqIjg" style="text-decoration: none!important; color: rgba(0,0,0,0.3);">&times;</span></a><span id="a_timer_oYvwGmQc">5</span></div><div id="alink_overlay_EPXdyaUf" alink="alink"></div>';
            d.getElementById("c_window_xEucqIjg").classList.add(c + "_vUTDnibMkZJIvuTH");
            c = d.createElement("iframe");
            k = d.getElementById("c_window_xEucqIjg");
            var p = d.getElementById("a_title_nEYjMupI"),
                n = d.getElementById("alink_overlay_EPXdyaUf");
            k.style.width = b;
            var h = b.search(/px/i),
                m = f.search(/px/i),
                q = (Math.max(d.documentElement.clientWidth, e.innerWidth || 0), Math.max(d.documentElement.clientHeight, e.innerHeight || 0));
            if (-1 == h ? (n.style.width = "100%", c.style.width = "100%", p.style.width = "100%") : (n.style.width = b, c.style.width =
                    b, p.style.width = b), -1 == m) c.style.height = "100%", n.style.height = "96%", k.style.height = f;
            else {
                p = function(a) {
                    a.matches
                };
                h = function() {
                    Math.max(d.documentElement.clientWidth, e.innerWidth || 0);
                    Math.max(d.documentElement.clientHeight, e.innerHeight || 0) < l && (d.getElementById("c_window_xEucqIjg").style.top = "0")
                };
                m = f.split("px")[0];
                var l = Number(m) + 30;
                n.style.height = f;
                c.style.height = f;
                k.style.height = l + "px";
                b = b.split("px")[0];
                f = Number(b) + 40;
                e.onresize = h;
                e.onload = h;
                n = d.createElement("style");
                if (n.innerHTML = "@media all and (max-width: " +
                    f + "px){#c_window_xEucqIjg{position:fixed;top:0!important;left:0;right:0;width:90%!important;margin:10px auto auto!important;text-align:center}.bottom-center_vUTDnibMkZJIvuTH,.top-center_vUTDnibMkZJIvuTH{left:0!important;right:0!important;transform:none!important}#a_iframe_DwTGCjTm{width:100%!important;}#alink_overlay_EPXdyaUf{width:90%!important;height:90%!important},.bottom-right_vUTDnibMkZJIvuTH {top:0px!important;} }", d.head.appendChild(n), matchMedia) b = e.matchMedia("(min-width: " + b + "px)"), b.addListener(p),
                    p(b);
                e.matchMedia("(orientation: landscape)").matches && q < l && (d.getElementById("c_window_xEucqIjg").style.top = "0");
                e.addEventListener("orientationchange", function() {
                    e.matchMedia("(orientation:landscape)").matches || q < l && (d.getElementById("c_window_xEucqIjg").style.top = "0")
                })
            }
            c.src = a;
            c.name = "a_iframe_DwTGCjTm";
            c.id = "a_iframe_DwTGCjTm";
            c.frameBorder = "0";
            c.scrolling = "no";
            c.sandbox = "allow-forms allow-scripts";
            k.appendChild(c);
            d.getElementById("c_window_xEucqIjg").classList.add("a_open_rrTmtfGj");
            d.getElementById("a_iframe_DwTGCjTm").src =
                a;
            var r = 5,
                u = setInterval(function() {
                    r--;
                    d.getElementById("a_timer_oYvwGmQc").textContent = r;
                    0 >= r && clearInterval(u)
                }, 1E3);
            timedis = setTimeout(function() {
                d.getElementById("a_close_nEYjMupI").classList.remove("a_hide_qkasklrO");
                d.getElementById("a_timer_oYvwGmQc").classList.add("a_hide_qkasklrO")
            }, 5E3);
            d.addEventListener("click", function(a) {
                clearInterval(u);
                var b = 5;
                u = setInterval(function() {
                    b--;
                    d.getElementById("a_timer_oYvwGmQc").textContent = b;
                    0 >= b && clearInterval(u)
                }, 1E3);
                var c = (a = a || e.event).target || a.srcElement;
                if (c.hasAttribute("data-dismiss_OLjQnDvi") && "c_xEucqIjg" == c.getAttribute("data-dismiss_OLjQnDvi")) {
                    var f = d.getElementById("c_window_xEucqIjg");
                    d.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO");
                    f.classList.remove("a_open_rrTmtfGj");
                    d.getElementById("c_window_xEucqIjg").remove();
                    a.preventDefault()
                }
                c.hasAttribute("data-alink") && (f = d.getElementById("c_window_xEucqIjg"), d.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO"), f.classList.remove("a_open_rrTmtfGj"), a.preventDefault());
                c.hasAttribute("alink") && (f = d.getElementById("c_window_xEucqIjg"), d.getElementById("c_window_xEucqIjg").classList.add("a_hide_qkasklrO"), f.classList.remove("a_open_rrTmtfGj"), e.open(g, "_blank").focus())
            }, !1)
        }
        Function.prototype.bind || (Function.prototype.bind = function(a) {
            if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var c = Array.prototype.slice.call(arguments, 1),
                b = this,
                f = function() {},
                d = function() {
                    return b.apply(this instanceof f && a ? this : a, c.concat(Array.prototype.slice.call(arguments)))
                };
            f.prototype = this.prototype;
            d.prototype = new f;
            return d
        });
        if (!r) var r = {
            _cookieLockSet: function(a) {
                var c = "1";
                a && (c = "0");
                try {
                    return localStorage.setItem("PopJSLock", c), !0
                } catch (f) {}
                a = new Date;
                var b = 6E4;
                a.setTime(a.getTime() + b);
                b = "expires=" + a.toUTCString();
                d.cookie = "PopJSLock=" + c + ";" + b + ";path=/";
                return !0
            },
            _cookieLockGet: function() {
                var a = !1;
                try {
                    return localStorage.PopJSLock && (a = "1" == localStorage.PopJSLock), localStorage.setItem("PopJSLock", "0"),
                        a
                } catch (g) {}
                for (var c = decodeURIComponent(d.cookie).split(";"), b = 0; b < c.length; b++) {
                    for (var f = c[b];
                        " " == f.charAt(0);) f = f.substring(1);
                    0 == f.indexOf("PopJSLock=") && "1" == f.substring(10, f.length) && (a = !0)
                }
                a && this._cookieLockSet(!0);
                return a
            },
            _windowOpen: function(a, c) {
                var b = "" + Math.random();
                "msie" == this.cap.env.b && 9 >= this.cap.env.v && (b = "");
                b = c ? this.iframewin.open("", b, c) : this.iframewin.open("", b);
                this.settings.openernull && (b.opener = null);
                try {
                    b.location.replace(a)
                } catch (f) {}
                return b
            },
            _openTabup: function(a) {
                return this._windowOpen(a)
            },
            _openTabunder: function(a) {
                if (0 == this.cap.tabunder) this._openTabup(a);
                else {
                    this._cookieLockSet(!1);
                    var c = this._openTabup(d.location.href);
                    this.ti = setInterval(function() {
                        if (c) try {
                            d.location.replace(a)
                        } catch (b) {
                            clearInterval(this.ti)
                        }
                    }.bind(this), 10)
                }
                return !0
            },
            _getOptString: function() {
                return optstring = "top=" + (e.screenY || 0) + ",left=" + (e.screenX || 0) + ",width=" + (0 == e.outerWidth ? 9999 : e.outerWidth || e.screen.width) + ",height=" + (0 == e.outerHeight ? 9999 : e.outerHeight || e.screen.height) + ",status=0,location=1,toolbar=1,menubar=1,resizable=1,scrollbars=1"
            },
            _openPopup: function(a) {
                return this._windowOpen(a, this._getOptString())
            },
            _openPopunderSafari: function(a) {
                function c(a, c, g) {
                    var b = d.createElement("iframe");
                    b.style = "display:none;";
                    d.body.appendChild(b);
                    var f = b.contentWindow.document.createElement("script");
                    f.type = "text/javascript";
                    f.innerHTML = "window.parent = window.top = window.frameElement = null;window.mkp = function(url, name, opts) {var popWin = window.open(url, name, opts);try {popWin.opener = null} catch (e) {}return popWin;};";
                    b.contentWindow.document.body.appendChild(f);
                    a = b.contentWindow.mkp(a, c, g);
                    d.body.removeChild(b);
                    return a
                }
                e.name = "" + Math.random();
                a = c(a, "" + Math.random(), this._getOptString());
                c("", e.name, "");
                e.name = null;
                return a
            },
            _openPopunderBlur: function(a) {
                a = this._openPopup(a);
                try {
                    d.focus()
                } catch (c) {}
                e.focus();
                a.blur();
                return a
            },
            _openPopunderFF: function(a) {
                var c;
                setTimeout(function() {
                    c = this._openPopup(a);
                    "about:blank" == a && (this.prepop = c)
                }.bind(this), 0);
                setTimeout(function() {
                    var a = e.open("", "_self");
                    a && !a.closed && a.focus()
                }, 0);
                return !0
            },
            _openPopunderCRPre: function(a) {
                var c =
                    "<body>\t\t<script>\t\tvar s1i=0,s2i=0;window.name='';\t\tfunction posred(){window.resizeTo(100,100);if (window.screenY>100) window.moveTo(0,0); else window.moveTo(9999,9999)};\t\tfunction dance(){if (s1i==0 ){s1i=window.setInterval(function(){ posred(); }, 50);}posred();document.onmousemove=null;};\t\tdocument.onmousemove=dance;\t\tfunction phash(){return window.screenX+','+window.screenY+','+window.outerWidth+','+window.outerHeight};\t\tphashc=phash();s2i=setInterval(function(){if ((phashc!=phash())) { if(phashc.indexOf(',100,100') == -1) {dance();}; phashc=phash(); }},100);\t\tvar deploy=function()\t\t{\t\t\twindow.clearInterval(s1i);window.clearInterval(s2i);document.onmousemove=null;\t\t\twindow.moveTo(" +
                    e.screenX + "," + e.screenY + ");\t\t\twindow.resizeTo(" + e.outerWidth + ", " + e.outerHeight + ");\t\t\tif (window.name=='') window.name='ready'; else\t\t\twindow.location.replace(window.name);window.onblur=null;\t\t};window.onblur=deploy;\t\tvar toi=setInterval(function(){if (window.name.length>5) {clearInterval(toi);setTimeout(function(){deploy()}, " + a + ");} },50);\t\t\x3c/script>";
                a = this.iframewin.open("", "", "top=9999,left=9999,width=100,height=100");
                this.settings.openernull && (a.opener = null);
                try {
                    a.document.open(),
                        a.document.write(c), a.document.close()
                } catch (b) {}
                return a
            },
            _openPopunderCRPost: function(a) {
                "ready" == this.prepop.name ? this.prepop.location.replace(a) : this.prepop.name = a
            },
            _getMinipopStatus: function(a) {
                if (!a || a.closed || !a.location) return "closed";
                try {
                    var c = a.name
                } catch (b) {
                    c = "error"
                }
                return "error" == c ? "success" : "" == c ? "waiting" : "ready" == c ? "prepopready" : 0
            },
            _openPopunderCR: function(a, c) {
                var b = "<body>\t\t<script>\t\tvar s1i=0,s2i=0;\t\tfunction posred(){window.resizeTo(100,100);if (window.screenY>100) window.moveTo(0,0); else window.moveTo(9999,9999)};\t\tfunction dance(){if (s1i==0 ){s1i=window.setInterval(function(){ posred(); }, 50);}posred();document.onmousemove=null;};\t\tdocument.onmousemove=dance;\t\tfunction phash(){return window.screenX+','+window.screenY+','+window.outerWidth+','+window.outerHeight};\t\tphashc=phash();s2i=setInterval(function(){if (phashc!=phash()) { if(phashc.indexOf(',100,100') == -1) {dance();}; phashc=phash(); }},100);\t\tvar deploy=function()\t\t{\t\t\twindow.name='ready';\t\t\twindow.clearInterval(s1i);window.clearInterval(s2i);document.onmousemove=null;\t\t\twindow.moveTo(" +
                    e.screenX + "," + e.screenY + ");\t\t\twindow.resizeTo(" + e.outerWidth + ", " + e.outerHeight + ");\t\t\twindow.location.replace('" + a + "');\t\t};window.onblur=deploy;setTimeout(deploy, " + c + ")\x3c/script>";
                var f = this.iframewin.open("", "", "top=9999,left=9999,width=100,height=100");
                this.settings.openernull && (f.opener = null);
                try {
                    f.document.open(), f.document.write(b), f.document.close()
                } catch (g) {}
                return f
            },
            _openPopunderIE11: function(a) {
                this.tw = this._openPopup(a);
                this.focusInterval && clearInterval(this.focusInterval);
                this.runs =
                    0;
                this.focusInterval = setInterval(function() {
                    try {
                        this.tw && (this.tw.blur(), this.tw.opener.focus(), e.self.focus(), e.focus(), d.focus())
                    } catch (c) {}
                    this.runs++;
                    10 < this.runs && this.focusInterval && clearInterval(this.focusInterval)
                }.bind(this), 100);
                return this.tw
            },
            _detectBrowser: function(a) {
                var c, b;
                var f = "desktop";
                if (b = a.match(/^Mozilla\/5\.0 \([^\)]+\) AppleWebKit\/[0-9\.]+ \(KHTML, like Gecko\) Chrome\/([0-9]+)[0-9\.]+ Safari\/[0-9\.]+$/)) {
                    var d = "chrome";
                    var k = b[1]
                }
                if (b = a.match(/(Firefox|OPR)\/([0-9]+)/)) d =
                    b[1].toLowerCase(), k = b[2];
                if (b = a.match(/rv:([0-9]+)\.0\) like Gecko/)) d = "msie", k = b[1];
                if (b = a.match(/MSIE ([0-9]+)/)) d = "msie", k = b[1];
                a.match(/Windows NT/) && (c = "windows");
                if (b = a.match(/([0-9]+)(_([0-9]+)){0,} like Mac OS X/)) c = "ios", d = "safari", k = b[1], f = "mobile";
                if (b = a.match(/(CrOS)\/([0-9]+)/)) d = "chrome", k = b[2], f = "mobile";
                if (b = a.match(/(Edge)\/([0-9]+)/)) d = b[1].toLowerCase(), k = b[2];
                if (b = a.match(/\(KHTML, like Gecko\) Version\/([0-9]+)/)) d = "safari", k = b[1];
                a.match(/Macintosh; Intel Mac OS X /) && (c = "macosx");
                a.match(/Android|like Mac OS X|Mobile|Phone/) && (f = "mobile");
                a.match(/^Mozilla\/5\.0 \(Linux; Android/) && (c = "android");
                return {
                    o: c,
                    b: d,
                    v: k,
                    f: f,
                    i: e != e.top
                }
            },
            _getBrowserCapabilities: function() {
                var a = this._detectBrowser(navigator.userAgent),
                    c = !1,
                    b = !0,
                    f = !0,
                    d = !0;
                "desktop" == a.f ? ("chrome" == a.b && (c = !0), "firefox" == a.b && (c = !0), "msie" == a.b && 11 > a.v && (c = f = d = !0), "msie" == a.b && 11 == a.v && (c = !0), "safari" == a.b && (c = !0)) : d = b = !1;
                1 == a.i && (d = !1);
                return {
                    env: a,
                    popup: b,
                    popunder: c,
                    tabup: f,
                    tabunder: d
                }
            },
            _openPopunder: function(a,
                c) {
                var b = this.cap.env;
                if ("desktop" == b.f) {
                    if ("chrome" == b.b) return this.minipopmon = !0, this._openPopunderCR(a, c);
                    if ("firefox" == b.b) return this._openPopunderFF(a);
                    if ("msie" == b.b && 11 > b.v) return this._openPopunderBlur(a);
                    if ("msie" == b.b && 11 == b.v) return this._openPopunderIE11(a);
                    if ("safari" == b.b) return this._openPopunderSafari(a);
                    if ("edge" == b.b) return this.cap.tabunder ? this._openTabunder(a) : this._openPopup(a)
                } else return this.cap.tabunder ? this._openTabunder(a) : this._openTabup(a)
            },
            _prepopOpen: function(a) {
                "chrome" ==
                this.cap.env.b ? this.prepop = this._openPopunderCRPre(a) : this._openPopunder("about:blank")
            },
            _prepopReady: function() {
                return !(!this.prepop || this.prepop.closed || !this.prepop.location)
            },
            _prepopUse: function(a) {
                this.settings.onbeforeopen && (a = this.settings.onbeforeopen(a));
                try {
                    if ("chrome" == this.cap.env.b ? (this._openPopunderCRPost(a), this.prepop = !1) : this.prepop.location.replace(a), this.prepop = !1, this.settings.onafteropen instanceof Function) this.settings.onafteropen(a)
                } catch (c) {
                    return !1
                }
                return !0
            },
            _prepopClose: function() {
                try {
                    this.prepop.close()
                } catch (a) {
                    return !1
                }
                return !0
            },
            _openAd: function(a, c) {
                this.settings.onbeforeopen && (a = this.settings.onbeforeopen(a));
                var b = c.type;
                "popunder" != b || this.cap.popunder || (b = "tabup");
                "tabunder" != b || this.cap.tabunder || (b = "popup");
                "popup" != b || this.cap.popup || (b = "tabup");
                "tabup" != b || this.cap.tabup || (b = "popup");
                var f;
                "popunder" == b ? f = this._openPopunder(a, c.crtimeout || this.settings.crtimeout) : "popup" == b ? f = this._openPopup(a) : "tabup" == b ? f = this._openTabup(a) : "tabunder" == b && (f = this._openTabunder(a));
                if (this.settings.onafteropen instanceof Function) this.settings.onafteropen();
                return f
            },
            abortPop: function() {
                this._prepopReady() && this._prepopClose();
                this.catchalldiv && this._removeCatchAllDiv();
                this.settings.prepop = !1
            },
            _onExecute: function(a) {
                a = a || e.event;
                if ("click" == a.type || "mouseup" == a.type || "mousedown" == a.type) {
                    var c = !1;
                    "which" in a ? c = 3 == a.which : "button" in a && (c = 2 == a.button);
                    if (c) return !1
                }
                if (this.userActivation) {
                    try {
                        if (!navigator.userActivation.isActive) return !1
                    } catch (b) {}
                    try {
                        if (!this.iframewin.navigator.userActivation.isActive) return !1
                    } catch (b) {}
                }
                this.minipopmon && (a = this._getMinipopStatus(this.minipopmontw),
                    "prepopready" == a || "success" == a ? (this.urls.shift(), this.minipopmon = !1) : "closed" == a && (this.minipopmon = !1));
                0 == this.urls.length && this.settings.prepop && !this._prepopReady() && (this.settings.prepop = !1, this._prepopOpen(this.settings.crtimeout));
                this.catchalldiv && 0 == this.urls.length && this._removeCatchAllDiv();
                if (0 == this.urls.length) return !1;
                this.settings.prepop = !1;
                a = this.urls[0];
                this.minipopmon = !1;
                a = this._openAd(a.url, a.options);
                this.minipopmon ? (this.minipopmontw = a, this.catchalldiv && 2 > this.urls.length && this._removeCatchAllDiv()) :
                    a && this.urls.shift();
                this.catchalldiv && 0 == this.urls.length && this._removeCatchAllDiv()
            },
            _userActivationHandler: function() {
                var a = !1;
                try {
                    a = navigator.userActivation.isActive
                } catch (c) {}
                try {
                    a || (a = this.iframewin.navigator.userActivation.isActive)
                } catch (c) {}
                a && this._onExecute({
                    type: "uah"
                })
            },
            _onMouseDownHandler: function(a) {
                a = a.target || a.srcElement || a.toElement;
                if (this._prepopReady()) return !1;
                var c = !1;
                if (this.minipopmontw) {
                    var b = this._getMinipopStatus(this.minipopmontw);
                    "waiting" == b && (c = !0);
                    "prepopready" ==
                    b && (c = !0)
                }
                if (c || "A" != a.tagName) return !1;
                if (a.popjsoriginalhref && 0 == this.urls.length) return a.href = a.popjsoriginalhref, delete a.popjsoriginalhref, a.target = "_blank", !1;
                if ("_blank" != a.target && 0 < d.getElementsByTagName("BASE").length && "_blank" != (d.getElementsByTagName("BASE")[0].target || "").toLowerCase() || 0 == this.urls.length) return !1;
                a.popjsoriginalhref = a.href;
                a.href = "#";
                a.target = ""
            },
            _onBeforeUnloadHandler: function() {
                this._prepopReady() && this._prepopClose()
            },
            _isCatchAllNeeded: function() {
                function a(a) {
                    a =
                        d.getElementsByTagName(a);
                    for (var b = 0; b < a.length; b++)
                        if (100 < (a.item(b).clientHeight || a.item(b).offsetHeight || 0) || 100 < (a.item(b).clientWidth || a.item(b).offsetWidth || 0)) return !0;
                    return !1
                }
                return a("IFRAME") || a("VIDEO") || a("OBJECT")
            },
            _removeCatchAllDiv: function() {
                this.catchalldiv.parentNode.removeChild(this.catchalldiv);
                delete this.catchalldiv
            },
            _createCatchAllDiv: function() {
                if (0 == d.getElementsByTagName("body").length) return !1;
                var a = d.createElement("div");
                a.style = "position: fixed; display: block; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0); z-index: 300000;";
                d.addEventListener ? ("desktop" != this.cap.env.f && "ios" == this.cap.env.o && a.addEventListener("touchend", this._onExecute.bind(this)), a.addEventListener("click", this._onExecute.bind(this))) : a.attachEvent("onclick", this._onExecute.bind(this));
                d.getElementsByTagName("body")[0].appendChild(a);
                this.catchalldiv = a;
                return !0
            },
            _deployCatchAll: function() {
                this.settings.catchalldiv && (this._isCatchAllNeeded() && !this.catchalldiv ? this._createCatchAllDiv() : this.catchallmon || (this.catchallmon = setInterval(function() {
                    this.catchalldiv ?
                        clearInterval(this.catchallmon) : this._isCatchAllNeeded() && (clearInterval(this.catchallmon), this._createCatchAllDiv())
                }.bind(this), 500)))
            },
            init: function(a) {
                if (this._cookieLockGet()) return !1;
                iframe = d.createElement("iframe");
                iframe.src = "javascript:false";
                iframe.style.display = "none";
                iframe.width = "0";
                iframe.height = "0";
                where = d.getElementsByTagName("script")[0];
                where.parentNode.insertBefore(iframe, where);
                this.iframewin = win = iframe.contentWindow || iframe;
                this.userActivation = !0;
                try {
                    navigator.userActivation.isActive
                } catch (c) {
                    try {
                        win.navigator.userActivation.isActive
                    } catch (b) {
                        this.userActivation = !1
                    }
                }
                this.cap = this._getBrowserCapabilities();
                this.urls = [];
                this.settings = {};
                this.settings.prepop = (a.prepop || !1) && this.cap.popunder;
                this.settings.crtimeout = a.crtimeout || 6E4;
                this.settings.targetblankhandler = a.targetblankhandler || !0;
                this.settings.onbeforeopen = a.onbeforeopen;
                this.settings.onafteropen = a.onafteropen;
                this.settings.catchalldiv = a.catchalldiv || !this.userActivation;
                this.minipopmon = !1;
                this.settings.openernull = !0;
                this._deployCatchAll();
                this.userActivation && setInterval(this._userActivationHandler.bind(this),
                    50);
                d.addEventListener ? ("desktop" != this.cap.env.f && "ios" == this.cap.env.o && d.addEventListener("touchend", this._onExecute.bind(this)), d.addEventListener("click", this._onExecute.bind(this)), this.settings.targetblankhandler && d.addEventListener("mousedown", this._onMouseDownHandler.bind(this)), this.settings.prepop && e.addEventListener("beforeunload", this._onBeforeUnloadHandler.bind(this))) : (d.attachEvent("onclick", this._onExecute.bind(this)), this.settings.targetblankhandler && d.attachEvent("onmousedown",
                    this._onMouseDownHandler.bind(this)), this.settings.prepop && e.attachEvent("onbeforeunload", this._onBeforeUnloadHandler.bind(this)))
            },
            addUrl: function(a, c) {
                if (!this.cap) return !1;
                var b = !1;
                this._prepopReady() && ("popunder" == c.type ? this._prepopUse(a) && (b = !0) : this._prepopClose());
                b || (this.urls.push({
                    url: a,
                    options: c
                }), this._deployCatchAll())
            }
        };
        var t = {
            a: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(a) {
                var c = "",
                    b = 0;
                for (a = t.b(a); b < a.length;) {
                    var f = a.charCodeAt(b++);
                    var d =
                        a.charCodeAt(b++);
                    var e = a.charCodeAt(b++);
                    var p = f >> 2;
                    f = (3 & f) << 4 | d >> 4;
                    var n = (15 & d) << 2 | e >> 6;
                    var h = 63 & e;
                    isNaN(d) ? n = h = 64 : isNaN(e) && (h = 64);
                    c = c + this.a.charAt(p) + this.a.charAt(f) + this.a.charAt(n) + this.a.charAt(h)
                }
                return c
            },
            decode: function(a) {
                var c = "",
                    b = 0;
                for (a = a.replace(/[^A-Za-z0-9\+\/=]/g, ""); b < a.length;) {
                    var d = this.a.indexOf(a.charAt(b++));
                    var e = this.a.indexOf(a.charAt(b++));
                    var k = this.a.indexOf(a.charAt(b++));
                    var p = this.a.indexOf(a.charAt(b++));
                    d = d << 2 | e >> 4;
                    e = (15 & e) << 4 | k >> 2;
                    var n = (3 & k) << 6 | p;
                    c += String.fromCharCode(d);
                    64 != k && (c += String.fromCharCode(e));
                    64 != p && (c += String.fromCharCode(n))
                }
                return t.c(c)
            },
            b: function(a) {
                a = a.replace(/\r\n/g, "\n");
                for (var c = "", b = 0; b < a.length; b++) {
                    var d = a.charCodeAt(b);
                    128 > d ? c += String.fromCharCode(d) : 127 < d && 2048 > d ? (c += String.fromCharCode(d >> 6 | 192), c += String.fromCharCode(63 & d | 128)) : (c += String.fromCharCode(d >> 12 | 224), c += String.fromCharCode(d >> 6 & 63 | 128), c += String.fromCharCode(63 & d | 128))
                }
                return c
            },
            c: function(a) {
                var c = "",
                    b = 0;
                for (c1 = c2 = 0; b < a.length;) {
                    var d = a.charCodeAt(b);
                    128 > d ? (c += String.fromCharCode(d),
                        b++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(b + 1), c += String.fromCharCode((31 & d) << 6 | 63 & c2), b += 2) : (c2 = a.charCodeAt(b + 1), c3 = a.charCodeAt(b + 2), c += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3), b += 3)
                }
                return c
            }
        };
        ! function(a, c, b) {
            "undefined" != typeof module && module.exports ? module.exports = b(c, a) : "function" == typeof define && define.amd ? define("detect-zoom", function() {
                return b(c, a)
            }) : a[c] = b(c, a)
        }(e, "detectZoom", function() {
            var a = function() {
                    return e.devicePixelRatio || 1
                },
                c = function() {
                    return {
                        zoom: 1,
                        devicePxPerCssPx: 1
                    }
                },
                b =
                function() {
                    var b = Math.round(q.deviceXDPI / q.logicalXDPI * 100) / 100;
                    return {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                f = function() {
                    var b = Math.round(d.documentElement.offsetHeight / e.innerHeight * 100) / 100;
                    return {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                g = function() {
                    var b = Math.round(e.outerWidth / e.innerWidth * 100) / 100;
                    return {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                k = function() {
                    var b = Math.round(d.documentElement.clientWidth / e.innerWidth * 100) / 100;
                    return {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                p = function() {
                    var b = (90 == Math.abs(e.orientation) ? q.height :
                        q.width) / e.innerWidth;
                    return {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                n = function() {
                    var b = d.createElement("div");
                    b.innerHTML = "1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>0";
                    b.setAttribute("style", "font: 100px/1em sans-serif; -webkit-text-size-adjust: none; text-size-adjust: none; height: auto; width: 1em; padding: 0; overflow: visible;".replace(/;/g, " !important;"));
                    var c = d.createElement("div");
                    c.setAttribute("style", "width:0; height:0; overflow:hidden; visibility:hidden; position: absolute;".replace(/;/g,
                        " !important;"));
                    c.appendChild(b);
                    d.body.appendChild(c);
                    b = 1E3 / b.clientHeight;
                    return b = Math.round(100 * b) / 100, d.body.removeChild(c), {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                h = function() {
                    var a = r("min--moz-device-pixel-ratio", "", 0, 10, 20, 1E-4);
                    return a = Math.round(100 * a) / 100, {
                        zoom: a,
                        devicePxPerCssPx: a
                    }
                },
                m = function() {
                    return {
                        zoom: h().zoom,
                        devicePxPerCssPx: a()
                    }
                },
                l = function() {
                    var b = e.top.outerWidth / e.top.innerWidth;
                    return b = Math.round(100 * b) / 100, {
                        zoom: b,
                        devicePxPerCssPx: b * a()
                    }
                },
                r = function(a, b, c, f, g, k) {
                    function h(c,
                        d, f) {
                        var e = (c + d) / 2;
                        return 0 >= f || d - c < k ? e : p("(" + a + ":" + e + b + ")").matches ? h(e, d, f - 1) : h(c, e, f - 1)
                    }
                    var p, n, m, l;
                    e.matchMedia ? p = e.matchMedia : (n = d.getElementsByTagName("head")[0], m = d.createElement("style"), n.appendChild(m), l = d.createElement("div"), l.className = "mediaQueryBinarySearch", l.style.display = "none", d.body.appendChild(l), p = function(a) {
                        m.sheet.insertRule("@media " + a + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0);
                        a = "underline" == getComputedStyle(l, null).textDecoration;
                        return m.sheet.deleteRule(0), {
                            matches: a
                        }
                    });
                    c = h(c, f, g);
                    return l && (n.removeChild(m), d.body.removeChild(l)), c
                },
                t = function() {
                    var a = c;
                    return isNaN(q.logicalXDPI) || isNaN(q.systemXDPI) ? e.navigator.msMaxTouchPoints ? a = f : !e.chrome || e.opera || 0 <= navigator.userAgent.indexOf(" Opera") ? 0 < Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor") ? a = k : "orientation" in e && "webkitRequestAnimationFrame" in e ? a = p : "webkitRequestAnimationFrame" in e ? a = n : 0 <= navigator.userAgent.indexOf("Opera") ? a = l : e.devicePixelRatio ? a = m : .001 < h().zoom && (a = h) :
                        a = g : a = b, a
                }();
            return {
                zoom: function() {
                    return t().zoom
                },
                device: function() {
                    return t().devicePxPerCssPx
                }
            }
        });
        "use strict";
        t = e.Base64;
        var x = d.currentScript,
            v = null,
            l = {
                log: function(a) {}
            },
            h = {
                _set: function(a, c, b, f, e) {
                    var g = b || "";
                    g && ("number" === typeof g ? (b = new Date, b.setTime(b.getTime() + 1E3 * g)) : b = g, g = ";expires=" + b.toUTCString());
                    d.cookie = a + "=" + escape("" + c) + g + (e ? ";domain=" + e : "") + ";path=" + (f || "/")
                },
                _get: function(a) {
                    return (a = d.cookie.match(new RegExp(a + "=[^;]+", "i"))) ? decodeURIComponent(a[0].split("=")[1]) : null
                },
                _remove: function(a) {
                    this._set(a, 0, new Date(0))
                }
            },
            m = {
                _available: null,
                _isAvailable: function() {
                    if (null === this._available) try {
                        e.localStorage.setItem("localStorageTest", 1), e.localStorage.removeItem("localStorageTest"), this._available = !0
                    } catch (a) {
                        this._available = !1
                    }
                    return this._available
                },
                _set: function(a, c) {
                    this._isAvailable() ? e.localStorage.setItem(a, c) : h._set(a, c)
                },
                _get: function(a) {
                    try {
                        return this._isAvailable() ? e.localStorage.getItem(a) : h._get(a)
                    } catch (c) {
                        return null
                    }
                },
                _remove: function(a) {
                    this._isAvailable() ?
                        e.localStorage.removeItem(a) : h._remove(a)
                }
            };
        AdservingModule = {
            _inventory: {},
            _config: {
                _siteId: 0,
                _minBid: 0,
                _popPerDay: 0,
                _popDelay: 0,
                _inpagePerDay: 0,
                _inpageDelay: 0,
                _defaultDelay: 0,
                _blockedCountries: !1,
                _default: !1,
                _defaultType: "popunder",
                _defaultPerDay: 0,
                _useOverlay: !0,
                _trafficType: 0,
                _popunderFailover: "tabup",
                _prepop: null === h._get("_popprepop"),
                _adscorebp: null,
                _adscorept: null,
                _adscoreak: "QpUJAAAAAAAAGu98Hdz1l_lcSZ2rY60Ajjk9U1c"
            },
            _init: function() {
                var a = this;
                this._loadConfig();
                this._isDelayBetweenExpired() &&
                    r.init({
                        prepop: this._config._prepop,
                        catchalldiv: this._config._useOverlay,
                        onbeforeopen: function(c) {
                            try {
                                clearTimeout(v)
                            } catch (b) {}
                            return c + "&s=" + a._getScreenData() + "&v=&m="
                        },
                        onafteropen: function() {
                            a._updateFiredCount()
                        }
                    });
                this._adscoreDeploy()
            },
            _adscoreDeploy: function() {
                var a = this,
                    c = 0,
                    b = 0,
                    f = this._config;
                if (a._config._adscorebp) a._checkInventory(a._config._adscorebp);
                else if ("function" === typeof AdscoreInit) {
                    l.log("adscore already exists");
                    try {
                        AdscoreInit(a._config._adscoreak, {
                            sub_id: f._siteId,
                            callback: function(b) {
                                a._checkInventory(b.signature ||
                                    "e2 " + b.error)
                            }
                        })
                    } catch (g) {
                        a._checkInventory("e4 " + g.message)
                    }
                } else c = setInterval(function() {
                    var e = ["re", "adsco"];
                    e.push(e[1][3]);
                    var k = "//" + e.reverse().join(".") + "/";
                    if (d.body) {
                        clearInterval(c);
                        var h = d.createElement("script");
                        h.src = k;
                        try {
                            h.onerror = function() {
                                h.src == k ? h.src = "//" + Math.round(Math.pow(52292.244664, 2)) + "/a.js" : (clearTimeout(b), a._checkInventory("e1"))
                            }
                        } catch (n) {}
                        h.onload = function() {
                            clearTimeout(b);
                            try {
                                AdscoreInit(a._config._adscoreak, {
                                    sub_id: f._siteId,
                                    callback: function(b) {
                                        a._checkInventory(b.signature ||
                                            "e2 " + b.error)
                                    }
                                })
                            } catch (n) {
                                a._checkInventory("e4 " + n.message)
                            }
                        };
                        d.body.appendChild(h);
                        b = setTimeout(function() {
                            a._checkInventory("e3")
                        }, 8E3)
                    }
                }, 100)
            },
            _checkInventory: function(a) {
                l.log("CI " + a);
                var c = this,
                    b = 0,
                    f = this._config,
                    e, h;
                f._adscorept && f._adscorept(a);
                try {
                    clearTimeout(v)
                } catch (p) {}
                v = setTimeout(function() {
                    l.log("Retimer fired");
                    c._adscoreDeploy()
                }, 6E5);
                l.log("Retimer deployed " + v);
                b = setInterval(function() {
                    var g = "//web.archive.org/web/20200820055715/https://serve.popads.net/c";
                    if (d.body) {
                        clearInterval(b);
                        h = {
                            _: encodeURIComponent(a),
                            v: 4,
                            siteId: f._siteId,
                            minBid: f._minBid,
                            popundersPerIP: f._popPerDay + "," + f._inpagePerDay,
                            blockedCountries: f._blockedCountries || "",
                            documentRef: encodeURIComponent(d.referrer),
                            s: c._getScreenData()
                        };
                        for (e in h) h.hasOwnProperty(e) && (g += (-1 < g.indexOf("?") ? "&" : "?") + e + "=" + (h[e] || ""));
                        var k = d.createElement("script");
                        k.src = g;
                        try {
                            k.onerror = function() {
                                r.abortPop();
                                x.onerror()
                            }
                        } catch (y) {}
                        d.body.appendChild(k)
                    }
                }, 100)
            },
            _parseFloatingBanner: function(a) {
                0 < this._config._inpageDelayPerDay && this._getFiredCount("inpage") >= this._config._inpageDelayPerDay ?
                    l.log("Floating aborted due to delay") : this._isDelayBetweenExpired("inpage") && (this._updateFiredCount("inpage"), w(a.url, a.position, a.width, a.height, a.clickurl))
            },
            _parseInventory: function(a) {
                this._inventory = a || {};
                this._preparePop()
            },
            _preparePopDefault: function() {
                if (!1 === this._config._default || 0 < this._config._defaultPerDay && this._getFiredCount("fallback") >= this._config._defaultPerDay) l.log("Default aborted due to delay or nonset"), r.abortPop(), h._set("_popprepop", 1, 21600);
                else {
                    var a = this._config._popunderFailover;
                    r._prepopReady() && (a = "popunder");
                    if (/^https?:\/\//.test(this._config._default)) this._isDelayBetweenExpired() && r.addUrl(this._config._default, {
                        type: a
                    });
                    else {
                        this._updateFiredCount("fallback");
                        a = t.decode(this._config._default);
                        a = ("<script>" + a + "\x3c/script>").replace(/^\s*<script[^>]*>|<\/script>\s*$/g, "");
                        var c = d.createElement("script");
                        c.type = "text/javascript";
                        c.text = a;
                        d.body.appendChild(c)
                    }
                }
            },
            _preparePopInventory: function() {
                0 < this._config._popPerDay && this._getFiredCount() >= this._config._popPerDay ?
                    l.log("Pop aborted due to popPerDay") : this._isDelayBetweenExpired() && r.addUrl(this._inventory.url, {
                        type: this._inventory.type
                    })
            },
            _getScreenData: function() {
                try {
                    var a = e.detectZoom.zoom();
                    return [q.width, q.height, a, q.width * a, q.height * a, e.self != e.top ? "1" : "0"].join()
                } catch (c) {
                    return ""
                }
            },
            _getFiredCount: function(a) {
                var c = "_popfired" + (a || ""),
                    b = c + "_expires";
                b = m._isAvailable() ? m._get("_spop" + b) : h._get(b);
                var d = 0;
                b && ((new Date).getTime() < b && (d = m._isAvailable() ? m._get("_spop" + c) : h._get(c)), d = parseInt(d, 10) || 0,
                    isNaN(d) && (d = 0));
                l.log("getFiredCount for " + (a || "") + " is " + d);
                return d
            },
            _updateFiredCount: function(a) {
                l.log("Updating fired count for " + (a || ""));
                var c = "_popfired" + (a || ""),
                    b = c + "_expires",
                    d = m._isAvailable() ? m._get("_spop" + b) : h._get(b),
                    e = d ? d : (new Date).getTime() + 864E5;
                d = (new Date).getTime() < d ? this._getFiredCount(a) : 0;
                m._isAvailable() && (m._set("_spop" + c, d + 1), m._set("_spop" + b, e), m._set("_spoplastOpenAt", new Date));
                h._set(c, d + 1, new Date(e));
                h._set(b, (new Date(e)).toUTCString(), new Date(e));
                h._set("lastOpenAt_" +
                    (a || ""), (new Date).getTime(), 86400)
            },
            _getLastOpenAt: function(a) {
                return (a = m._isAvailable() ? m._get("_spoplastOpenAt_" + (a || "")) : h._get("lastOpenAt_" + (a || ""))) ? new Date(a) : null
            },
            _isDelayBetweenExpired: function(a, c) {
                var b = this._getLastOpenAt(a);
                return !b || (new Date(b.getTime() + 1E3 * (c || this._config._popDelay))).getTime() < (new Date).getTime()
            },
            _preparePop: function() {
                "" !== this._inventory.url ? (this._preparePopInventory(), h._remove("_popprepop")) : this._preparePopDefault()
            },
            _loadConfig: function() {
                var a = e._pop || [],
                    c = this._config,
                    b;
                for (b = 0; b < a.length; b++) {
                    var d = a[b][0];
                    var g = a[b][1];
                    switch (d) {
                        case "siteId":
                        case "popundersPerIP":
                        case "delayBetween":
                        case "defaultPerIP":
                        case "trafficType":
                            if (g = parseInt(g, 10), isNaN(g)) continue
                    }
                    switch (d) {
                        case "siteId":
                            c._siteId = g;
                            break;
                        case "minBid":
                            c._minBid = g;
                            break;
                        case "popundersPerIP":
                            c._popPerDay = g;
                            break;
                        case "delayBetween":
                            c._popDelay = g;
                            break;
                        case "blockedCountries":
                            c._blockedCountries = g;
                            break;
                        case "default":
                            c._default = g;
                            break;
                        case "defaultType":
                            c._defaultType = g;
                            break;
                        case "defaultPerIP":
                            c._defaultPerDay =
                                g;
                            break;
                        case "topmostLayer":
                            c._useOverlay = g;
                            break;
                        case "trafficType":
                            c._trafficType = g;
                            break;
                        case "popunderFailover":
                            c._popunderFailover = g;
                            break;
                        case "prepop":
                            c._prepop = g;
                            break;
                        case "adscorebp":
                            c._adscorebp = g;
                            break;
                        case "adscorept":
                            c._adscorept = g;
                            break;
                        case "adscoreak":
                            c._adscoreak = g;
                            break;
                        case "inpagePerIP":
                            c._inpagePerDay = g;
                            break;
                        case "inpageDelayBetween":
                            c._inpageDelay = g;
                            break;
                        case "defaultDelayBetween":
                            c._defaultDelay = g
                    }
                }
            }
        };
        AdservingModule._init();
        e._pao = {
            parse: function(a) {
                AdservingModule._parseInventory(a)
            },
            fbparse: function(a) {
                AdservingModule._parseFloatingBanner(a)
            }
        }
    })(window, window.document, window.screen);

}