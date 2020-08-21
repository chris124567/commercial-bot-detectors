/* Retrieved from https://pastebin.com/raw/BwP6zAiq */
var _cf = _cf || [],
    cf = {
        get_cf_date: function() {
            return Date.now ? Date.now() : +new Date
        },
        kact: "",
        ver: .79,
        mact: "",
        mme_cnt: 0,
        mme_cnt_lmt: 100,
        mduce_cnt: 0,
        mduce_cnt_lmt: 100,
        me_vel: 0,
        ke_cnt: 0,
        ke_cnt_lmt: 1e3,
        ke_vel: 0,
        tact: "",
        tme_cnt: 0,
        tme_cnt_lmt: 100,
        te_cnt: 0,
        te_cnt_lmt: 100,
        te_vel: 0,
        doact: "",
        doe_cnt: 0,
        doe_cnt_lmt: 100,
        doe_vel: 0,
        dmact: "",
        dme_cnt: 0,
        dme_cnt_lmt: 100,
        dme_vel: 0,
        start_ts: Date.now ? Date.now() : +new Date,
        doa_throttle: 0,
        dma_throttle: 0,
        session_id: 0,
        js_post: !1,
        xmlhttp: null,
        xmlhttp_loc: null,
        loc: "",
        cf_url: ("https:" === document.location.protocol ? "https://" : "http://") + "api.cformanalytics.com/",
        auth: "",
        api_public_key: null,
        aj_indx: 0,
        aj_type: -1,
        ce_js_post: 0,
        init_time: 0,
        informinfo: "",
        prevfid: -1,
        fidcnt: 0,
        sensor_data: 0,
        ins: null,
        cns: null,
        enOnSubmitAdder: 0,
        enGetLoc: 0,
        enAddHidden: 0,
        enReadDocUrl: 1,
        xagg: -1,
        pen: -1,
        brow: "",
        browver: "",
        psub: "-",
        lang: "-",
        prod: "-",
        plen: -1,
        sdfn: [],
        get_dinfo: function() {
            var _user_agent = window.navigator.userAgent,
                awidth = window.screen.availWidth,
                aheight = window.screen.availHeight,
                width = window.screen.width,
                height = window.screen.height,
                winwidth = window.innerWidth || document.body.clientWidth,
                winheight = window.innerHeight || document.body.clientHeight,
                owidth = window.outerWidth || document.body.outerWidth;
            cf.get_browser(), cf.bc(), cf.bmisc();
            var dinfo = _user_agent + ",uaend," + cf.xagg + "," + cf.psub + "," + cf.lang + "," + cf.prod + "," + cf.plen + "," + cf.pen + "," + cf.wen + "," + cf.den + "," + awidth + "," + aheight + "," + width + "," + height + "," + winwidth + "," + winheight + "," + owidth + cf.bdetect() + ",loc:" + cf.loc;
            return dinfo
        },
        get_browser: function() {
            navigator.productSub && (cf.psub = navigator.productSub), navigator.languages && (cf.lang = navigator.language), navigator.product && (cf.prod = navigator.product), cf.plen = navigator.plugins.length
        },
        bc: function() {
            var aelen;
            aelen = window.addEventListener ? 1 : 0;
            var xhren;
            xhren = window.XMLHttpRequest ? 1 : 0;
            var xdren;
            xdren = window.XDomainRequest ? 1 : 0;
            var een;
            een = window.emit ? 1 : 0;
            var doeen;
            doeen = window.DeviceOrientationEvent ? 1 : 0;
            var dmeen;
            dmeen = window.DeviceMotionEvent ? 1 : 0;
            var teen;
            teen = window.TouchEvent ? 1 : 0;
            var sen;
            sen = window.spawn ? 1 : 0;
            var iwen;
            iwen = window.innerWidth ? 1 : 0;
            var owen;
            owen = window.outerWidth ? 1 : 0;
            var cen;
            cen = window.chrome ? 1 : 0;
            var fpben;
            fpben = Function.prototype.bind ? 1 : 0;
            var ben;
            ben = window.Buffer ? 1 : 0, cf.xagg = aelen + (xhren << 1) + (xdren << 2) + (een << 3) + (doeen << 4) + (dmeen << 5) + (teen << 6) + (sen << 7) + (iwen << 8) + (owen << 9) + (cen << 10) + (fpben << 11) + (ben << 12)
        },
        bmisc: function() {
            cf.pen = window._phantom ? 1 : 0;
            cf.wen = window.webdriver ? 1 : 0;
            cf.den = window.domAutomation ? 1 : 0
        },
        bdetect: function() {
            var cpen, b = [];
            cpen = window.callPhantom ? 1 : 0, b.push(",cpen:" + cpen);
            var i1;
            i1 = new Function("return/*@cc_on!@*/!1")(), b.push(i1 ? "i1:1" : "i1:0");
            var dm;
            dm = "number" == typeof document.documentMode ? 1 : 0, b.push("dm:" + dm);
            var cwen;
            cwen = window.chrome && window.chrome.webstore ? 1 : 0, b.push("cwen:" + cwen);
            var non;
            non = navigator.onLine ? 1 : 0, b.push("non:" + non);
            var opc;
            opc = window.opera ? 1 : 0, b.push("opc:" + opc);
            var fc;
            fc = "undefined" != typeof InstallTrigger ? 1 : 0, b.push("fc:" + fc);
            var sc;
            sc = Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0, b.push("sc:" + sc);
            var wrc;
            wrc = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0, b.push("wrc:" + wrc);
            var isc;
            isc = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0, b.push("isc:" + isc);
            var vib;
            vib = "function" == typeof navigator.vibrate ? 1 : 0, b.push("vib:" + vib);
            var bat;
            bat = "function" == typeof navigator.getBattery ? 1 : 0, b.push("bat:" + bat);
            var x11;
            x11 = Array.prototype.forEach ? 0 : 1, b.push("x11:" + x11);
            var x12;
            return x12 = "FileReader" in window ? 1 : 0, b.push("x12:" + x12), b.join(",")
        },
        cma: function(subEvent, eventtype) {
            if (1 == eventtype && cf.mme_cnt < cf.mme_cnt_lmt || 1 != eventtype && cf.mduce_cnt < cf.mduce_cnt_lmt) {
                var mainEvent = subEvent ? subEvent : window.event,
                    xcoord = "",
                    ycoord = "";
                mainEvent.pageX ? (xcoord = Math.floor(mainEvent.pageX), ycoord = Math.floor(mainEvent.pageY)) : (xcoord = Math.floor(mainEvent.clientX), ycoord = Math.floor(mainEvent.clientY));
                var ts = cf.get_cf_date() - cf.start_ts,
                    tot_me_cnt = cf.mduce_cnt + cf.mme_cnt,
                    new_mact = tot_me_cnt + "," + eventtype + "," + ts + "," + xcoord + "," + ycoord + ";";
                cf.me_vel = cf.me_vel + tot_me_cnt + eventtype + ts + xcoord + ycoord, cf.mact = cf.mact + new_mact, 1 == eventtype ? cf.mme_cnt++ : cf.mduce_cnt++
            }
            cf.js_post && 3 == eventtype && (cf.aj_type = 1, cf.bpd(), cf.pd(!0), cf.ce_js_post = 1)
        },
        str2sum: function(str) {
            if (null == str) return -1;
            var sum = 0,
                i = 0;
            for (i = 0; i < str.length; i++) sum += str.charCodeAt(i);
            return sum
        },
        getfid: function() {
            var x = document.activeElement,
                x_name = x.getAttribute("name");
            if (null == x_name) {
                var x_id = x.getAttribute("id");
                return null == x_id ? -1 : cf.str2sum(x_id)
            }
            return cf.str2sum(x_name)
        },
        isIgn: function(sk) {
            var el = document.activeElement,
                type_str = el.getAttribute("type"),
                type_int = null == type_str ? -1 : cf.get_type(type_str);
            return 1 == type_int && cf.fidcnt > 9 && (32 == sk || 48 == sk) ? 1 : 0
        },
        cka: function(subEvent, eventtype) {
            if (cf.ke_cnt < cf.ke_cnt_lmt) {
                var mainEvent = subEvent ? subEvent : window.event,
                    sk = mainEvent.keyCode,
                    sc = mainEvent.charCode,
                    shiftOn = mainEvent.shiftKey ? 1 : 0,
                    ctrlOn = mainEvent.ctrlKey ? 1 : 0,
                    metaOn = mainEvent.metaKey ? 1 : 0,
                    altOn = mainEvent.altKey ? 1 : 0,
                    flags = 8 * shiftOn + 4 * ctrlOn + 2 * metaOn + altOn,
                    ts = cf.get_cf_date() - cf.start_ts,
                    fid = cf.getfid(),
                    dbg = 0;
                sc && sk && (sk = 0 != sc && 0 != sk && sc != sk ? -1 : 0 != sk ? sk : sc), 0 == ctrlOn && 0 == metaOn && 0 == altOn && sk >= 32 && (sk = 3 == eventtype && sk >= 32 && 126 >= sk ? -2 : sk >= 33 && 47 >= sk ? -3 : sk >= 112 && 123 >= sk ? -4 : -2), fid != cf.prevfid ? (cf.fidcnt = 0, cf.prevfid = fid) : cf.fidcnt = cf.fidcnt + 1;
                var isIgn = cf.isIgn(sk);
                if (0 == isIgn) {
                    var new_kact = cf.ke_cnt + "," + eventtype + "," + ts + "," + sk + "," + dbg + "," + flags + "," + fid + ";";
                    cf.kact = cf.kact + new_kact, cf.ke_vel = cf.ke_vel + cf.ke_cnt + eventtype + ts + sk + flags + fid, cf.ke_cnt++
                }
            }!cf.js_post || 1 != eventtype || 13 != sk && 9 != sk || (cf.aj_type = 2, cf.bpd(), cf.pd(!0), cf.ce_js_post = 1)
        },
        cta: function(subEvent, eventtype) {
            if (1 == eventtype && cf.tme_cnt < cf.tme_cnt_lmt || 1 != eventtype && cf.te_cnt < cf.te_cnt_lmt) {
                var mainEvent = subEvent ? subEvent : window.event;
                mainEvent.pageX ? (xcoord = Math.floor(mainEvent.pageX), ycoord = Math.floor(mainEvent.pageY)) : (xcoord = Math.floor(mainEvent.clientX), ycoord = Math.floor(mainEvent.clientY));
                var ts = cf.get_cf_date() - cf.start_ts,
                    tot_te_cnt = cf.te_cnt + cf.tme_cnt,
                    new_tact = tot_te_cnt + "," + eventtype + "," + ts + "," + xcoord + "," + ycoord + ";";
                cf.tact = cf.tact + new_tact, cf.te_vel = cf.te_vel + tot_te_cnt + eventtype + ts + xcoord + ycoord, 1 == eventtype ? cf.tme_cnt++ : cf.te_cnt++, window.addEventListener && window.addEventListener("deviceorientation", cf.cdoa, !0), cf.doa_throttle = 0, window.addEventListener && window.addEventListener("devicemotion", cf.cdma, !0), cf.dma_throttle = 0
            }
        },
        cdoa: function(event) {
            if (cf.doe_cnt < cf.doe_cnt_lmt && cf.doa_throttle < 2) {
                var ts = cf.get_cf_date() - cf.start_ts,
                    alpha = parseFloat(cf.chknull(event.alpha)).toFixed(2),
                    beta = parseFloat(cf.chknull(event.beta)).toFixed(2),
                    gamma = parseFloat(cf.chknull(event.gamma)).toFixed(2),
                    new_doact = cf.doe_cnt + "," + ts + "," + alpha + "," + beta + "," + gamma + ";";
                cf.doact = cf.doact + new_doact, cf.doe_vel = cf.doe_vel + cf.doe_cnt + ts, cf.doe_cnt++
            }
            cf.doa_throttle++
        },
        cdma: function(event) {
            if (event.acceleration && event.accelerationIncludingGravity && event.rotationRate) {
                if (cf.dme_cnt < cf.dme_cnt_lmt && cf.dma_throttle < 2) {
                    var ts = cf.get_cf_date() - cf.start_ts,
                        xa = parseFloat(cf.chknull(event.acceleration.x)).toFixed(2),
                        ya = parseFloat(cf.chknull(event.acceleration.y)).toFixed(2),
                        za = parseFloat(cf.chknull(event.acceleration.z)).toFixed(2),
                        xag = parseFloat(cf.chknull(event.accelerationIncludingGravity.x)).toFixed(2),
                        yag = parseFloat(cf.chknull(event.accelerationIncludingGravity.y)).toFixed(2),
                        zag = parseFloat(cf.chknull(event.accelerationIncludingGravity.z)).toFixed(2),
                        ralpha = parseFloat(cf.chknull(event.rotationRate.alpha)).toFixed(2),
                        rbeta = parseFloat(cf.chknull(event.rotationRate.beta)).toFixed(2),
                        rgamma = parseFloat(cf.chknull(event.rotationRate.gamma)).toFixed(2),
                        new_dmact = cf.dme_cnt + "," + ts + "," + xa + "," + ya + "," + za + "," + xag + "," + yag + "," + zag + "," + ralpha + "," + rbeta + "," + rgamma + ";";
                    cf.dmact = cf.dmact + new_dmact, cf.dme_vel = cf.dme_vel + cf.dme_cnt + ts, cf.dme_cnt++
                }
                cf.dma_throttle++
            }
        },
        get_type: function(type_str) {
            return "text" == type_str || "search" == type_str || "url" == type_str || "email" == type_str || "tel" == type_str ? 0 : "password" == type_str ? 1 : 2
        },
        chknull: function(val) {
            return null == val ? -1 : val
        },
        forminfo: function() {
            var txt = "",
                ins = "",
                inputEl = document.getElementsByTagName("input"),
                ac = -1,
                i = 0;
            for (i = 0; i < inputEl.length; i++) {
                var el = inputEl[i],
                    el_name = cf.str2sum(el.getAttribute("name")),
                    el_id = cf.str2sum(el.getAttribute("id")),
                    req_str = el.getAttribute("required"),
                    req_int = null == req_str ? 0 : 1,
                    type_str = el.getAttribute("type"),
                    type_int = null == type_str ? -1 : cf.get_type(type_str),
                    ac_str = el.getAttribute("autocomplete");
                null == ac_str ? ac = -1 : (ac_str = ac_str.toLowerCase(), ac = "off" == ac_str ? 0 : "on" == ac_str ? 1 : 2);
                var defaultVal_str = el.defaultValue,
                    val = el.value,
                    newVal = 0;
                val && newVal ? 0 != val.length && val != defaultVal_str && (newVal = 1) : val && 0 != val.length && (newVal = 1), txt = txt + type_int + "," + ac + "," + newVal + "," + req_int + "," + el_id + "," + el_name + ";", ins = ins + newVal + ";"
            }
            return null == cf.ins && (cf.ins = ins), cf.cns = ins, txt
        },
        startdoa: function() {
            window.addEventListener && window.addEventListener("deviceorientation", cf.cdoa, !0), cf.doa_throttle = 0
        },
        startdma: function() {
            window.addEventListener && window.addEventListener("devicemotion", cf.cdma, !0), cf.dma_throttle = 0
        },
        updatet: function() {
            return cf.get_cf_date() - cf.start_ts
        },
        htm: function(event) {
            cf.cta(event, 1)
        },
        hts: function(event) {
            cf.cta(event, 2)
        },
        hte: function(event) {
            cf.cta(event, 3)
        },
        htc: function(event) {
            cf.cta(event, 4)
        },
        hmm: function(event) {
            cf.cma(event, 1)
        },
        hc: function(event) {
            cf.cma(event, 2)
        },
        hmd: function(event) {
            cf.cma(event, 3)
        },
        hmu: function(event) {
            cf.cma(event, 4)
        },
        hkd: function(event) {
            cf.cka(event, 1)
        },
        hku: function(event) {
            cf.cka(event, 2)
        },
        hkp: function(event) {
            cf.cka(event, 3)
        },
        cfsubmit: function() {
            cf.js_post ? (cf.aj_type = 4, cf.bpd(), 0 == cf.ce_js_post && cf.cns != cf.ins && cf.pd(!0)) : cf.bpd()
        },
        getdurl: function() {
            return cf.enReadDocUrl ? document.URL : ""
        },
        bpd: function() {
            var deltat = cf.updatet(),
                tot_vel = cf.ke_vel + cf.me_vel + cf.doe_vel + cf.dme_vel + cf.te_vel,
                misc_stat = cf.ke_vel + "," + cf.me_vel + "," + cf.te_vel + "," + cf.doe_vel + "," + cf.dme_vel + "," + tot_vel + "," + deltat + "," + cf.init_time + "," + cf.start_ts,
                dinfo = cf.get_dinfo(),
                do_str = window.DeviceOrientationEvent ? "do_en" : "do_dis",
                dm_str = window.DeviceMotionEvent ? "dm_en" : "dm_dis",
                touch_str = window.TouchEvent ? "t_en" : "t_dis",
                event_en_mask = do_str + "," + dm_str + "," + touch_str,
                forminfo = cf.forminfo(),
                page_url = cf.getdurl(),
                aj_stat = cf.aj_type + "," + cf.aj_indx;
            if (cf.sensor_data = "cfv," + cf.ver + ":dlm:d," + dinfo + ":dlm:e," + event_en_mask + ":dlm:if," + cf.informinfo + ":dlm:f," + forminfo + ":dlm:l," + cf.kact + ":dlm:n," + cf.mact + ":dlm:u," + cf.tact + ":dlm:doe," + cf.doact + ":dlm:dme," + cf.dmact + ":dlm:page_url," + page_url + ":dlm:misc," + misc_stat + ":dlm:aj," + aj_stat, !cf.fpcf.fpValCalculated && (0 == cf.js_post || cf.aj_indx > 0) && cf.fpcf.fpVal(), cf.sensor_data = cf.sensor_data + ":dlm:df," + cf.fpcf.fpValstr.replace(/\"/g, '\\"') + ":dlm:xx:dlm:yy:dlm:zz", 0 == cf.js_post)
                if (0 == cf.sdfn.length) document.getElementById("sensor_data").value = cf.sensor_data;
                else
                    for (var x = 0; x < cf.sdfn.length; x++)
                        if (document.getElementById(cf.sdfn[x])) document.getElementById(cf.sdfn[x]).value = cf.sensor_data
        },
        getLoc: function() {
            var x;
            ua = navigator.userAgent, x = ua.indexOf("MSIE") > -1 ? 0 : 1;
            var en;
            en = cf.pd_en(), en && window.XMLHttpRequest && (xmlhttp_loc = new XMLHttpRequest, x && (xmlhttp_loc.onreadystatechange = function() {
                if (4 == xmlhttp_loc.readyState)
                    if (200 == xmlhttp_loc.status) {
                        var json_resp = xmlhttp_loc.responseText;
                        cf.loc = null == json_resp ? "err-json_null" : json_resp
                    } else cf.loc = "err-" + xmlhttp_loc.status
            }, xmlhttp_loc.open("GET", cf.cf_url + "api/v1/getloc", !0), xmlhttp_loc.send()))
        },
        startTracking: function() {
            cf.enOnSubmitAdder && cf.addOnSubmitActions(), setInterval(function() {
                cf.startdma()
            }, 3e3), setInterval(function() {
                cf.startdoa()
            }, 3e3), document.addEventListener ? (document.addEventListener("touchmove", cf.htm, !0), document.addEventListener("touchstart", cf.hts, !0), document.addEventListener("touchend", cf.hte, !0), document.addEventListener("touchcancel", cf.htc, !0), document.addEventListener("mousemove", cf.hmm, !0), document.addEventListener("click", cf.hc, !0), document.addEventListener("mousedown", cf.hmd, !0), document.addEventListener("mouseup", cf.hmu, !0), document.addEventListener("keydown", cf.hkd, !0), document.addEventListener("keyup", cf.hku, !0), document.addEventListener("keypress", cf.hkp, !0)) : (document.attachEvent("touchmove", cf.htm), document.attachEvent("touchstart", cf.hts), document.attachEvent("touchend", cf.hte), document.attachEvent("touchcancel", cf.htc), document.attachEvent("onmousemove", cf.hmm), document.attachEvent("onclick", cf.hc), document.attachEvent("onmousedown", cf.hmd), document.attachEvent("onmouseup", cf.hmu), document.attachEvent("onkeydown", cf.hkd), document.attachEvent("onkeyup", cf.hku), document.attachEvent("onkeypress", cf.hkp)), cf.enGetLoc && cf.getLoc(), cf.informinfo = cf.forminfo(), cf.js_post ? (cf.aj_type = 0, cf.bpd(), cf.pd(!0)) : cf.insertFields()
        },
        addOnSubmitActions: function() {
            for (forms = document.forms, i = 0; i < forms.length; i++) formobj = forms[i], formobj.addEventListener ? formobj.addEventListener("submit", cf.cfsubmit, !1) : formobj.attachEvent && formobj.attachEvent("onsubmit", cf.cfsubmit)
        },
        insertFields: function() {
            var i;
            for (forms = document.forms, i = 0; i < forms.length && 1 > i; i++) formobj = forms[i], cf.enAddHidden && cf.addHidden(formobj, "sensor_data", "default")
        },
        addHidden: function(theForm, key, value) {
            var input = document.createElement("input");
            input.type = "hidden", input.name = key, input.value = value, input.id = key, theForm.appendChild(input)
        },
        getbyte: function(s, i) {
            var x = s.charCodeAt(i);
            if (x > 255) throw base64.makeDOMException();
            return x
        },
        encode: function(s) {
            if (1 !== arguments.length) throw new SyntaxError("Not enough arguments");
            var i, b10, padchar = "=",
                alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                x = [];
            s = "" + s;
            var imax = s.length - s.length % 3;
            if (0 === s.length) return s;
            for (i = 0; imax > i; i += 3) b10 = cf.getbyte(s, i) << 16 | cf.getbyte(s, i + 1) << 8 | cf.getbyte(s, i + 2), x.push(alpha.charAt(b10 >> 18)), x.push(alpha.charAt(b10 >> 12 & 63)), x.push(alpha.charAt(b10 >> 6 & 63)), x.push(alpha.charAt(63 & b10));
            switch (s.length - imax) {
                case 1:
                    b10 = cf.getbyte(s, i) << 16, x.push(alpha.charAt(b10 >> 18) + alpha.charAt(b10 >> 12 & 63) + padchar + padchar);
                    break;
                case 2:
                    b10 = cf.getbyte(s, i) << 16 | cf.getbyte(s, i + 1) << 8, x.push(alpha.charAt(b10 >> 18) + alpha.charAt(b10 >> 12 & 63) + alpha.charAt(b10 >> 6 & 63) + padchar)
            }
            return x.join("")
        },
        loadXMLDoc_new: function(url, ptype) {
            xmlhttp = window.XDomainRequest ? new XDomainRequest : window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"), xmlhttp.open("POST", url, ptype);
            var val = cf.encode(cf.api_public_key + ":");
            cf.auth = ',"auth" : "' + val + '"', xmlhttp.setRequestHeader && (xmlhttp.setRequestHeader("Content-type", "application/json"), xmlhttp.setRequestHeader("Authorization", "Basic " + val), cf.auth = "");
            var obj = '{"session_id" : "' + cf.session_id + '","sensor_data" : "' + cf.sensor_data + '"' + cf.auth + "}";
            xmlhttp.send(obj)
        },
        pd_en: function() {
            var x, url = cf.getdurl();
            return 1;
            return x = url.indexOf("home.html") > -1 ? 1 : 0, cf.start_ts % 10 != 0 ? 0 : cf.aj_indx > 3 ? 0 : x && cf.aj_indx > 0 ? 0 : 1
        },
        pd: function(ptype) {
            var en;
            en = cf.pd_en(), en && (cf.loadXMLDoc_new(cf.cf_url + "api/v1/attempt", ptype), cf.aj_indx = cf.aj_indx + 1)
        },
        listFunctions: {
            _setJsPost: function(a) {
                cf.js_post = a
            },
            _setSessionId: function(a) {
                cf.session_id = a
            },
            _setJavaScriptKey: function(a) {
                cf.api_public_key = a
            },
            _setEnOnSubmitAdder: function(a) {
                cf.enOnSubmitAdder = a
            },
            _setEnAddHidden: function(a) {
                cf.enAddHidden = a
            },
            _setInitTime: function(a) {
                cf.init_time = a
            },
            _setApiUrl: function(a) {
                cf.cf_url = a
            },
            _setEnGetLoc: function(a) {
                cf.enGetLoc = a
            },
            _setEnReadDocUrl: function(a) {
                cf.enReadDocUrl = a
            },
            _setSDFieldNames: function() {
                var y;
                for (y = 0; y < arguments.length; y += 1) cf.sdfn.push(arguments[y])
            }
        },
        applyFunc: function() {
            var a, b, c;
            for (a = 0; a < arguments.length; a += 1) c = arguments[a];
            b = c.shift(), cf.listFunctions[b].apply(cf.listFunctions, c)
        }
    };
for (i = 0; i < _cf.length; i++) cf.applyFunc(_cf[i]);
_cf = {
        push: cf.applyFunc
    },
    function(context) {
        function crc32(array, previous) {
            "function" == typeof CanvasPixelArray && array instanceof CanvasPixelArray || "function" != typeof Uint8Array || array instanceof Uint8Array || (array = new Uint8Array(array.buffer instanceof ArrayBuffer ? array.buffer : array));
            for (var crc = -1 ^ ~~previous, n = 0; n < array.length; n++) crc = CRC_TABLE[255 & (crc ^ array[n])] ^ crc >>> 8;
            return -1 ^ crc
        }
        var fpcf = {};
        context.fpcf = fpcf, fpcf.filter = function(arr, fun) {
            "use strict";
            var t = arr,
                len = t.length >>> 0;
            if ("function" != typeof fun) throw new TypeError;
            for (var res = [], thisp = this, i = 0; len > i; i++)
                if (i in t) {
                    var val = t[i];
                    fun.call(thisp, val, i, t) && res.push(val)
                }
            return res
        }, fpcf.forEach = function(arr, fun) {
            var len = arr.length >>> 0;
            if ("function" != typeof fun) throw new TypeError;
            for (var thisp = this, i = 0; len > i; i++) i in arr && fun.call(thisp, arr[i])
        }, fpcf.fpValstr = "-1", fpcf.fpValCalculated = !1, fpcf.cache = {}, fpcf.clearCache = function() {
            fpcf.cache = {}
        }, fpcf.stringify = function(obj) {
            if ("JSON" in window) return JSON.stringify(obj);
            var t = typeof obj;
            if ("object" != t || null === obj) return "string" == t && (obj = '"' + obj + '"'), String(obj);
            var n, v, json = [],
                arr = obj && obj.constructor == Array;
            for (n in obj) v = obj[n], t = typeof v, obj.hasOwnProperty(n) && ("string" == t ? v = '"' + v + '"' : "object" == t && null !== v && (v = fpcf.stringify(v)), json.push((arr ? "" : '"' + n + '":') + String(v)));
            return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
        }, fpcf.fpVal = function() {
            fpcf.fpValCalculated = !0;
            var data = fpcf.data();
            fpcf.fpValstr = fpcf.stringify(data)
        }, fpcf.timezoneOffsetKey = function() {
            return (new Date).getTimezoneOffset()
        }, fpcf.data = function() {
            return {
                cfp: fpcf.canvas(),
                fonts: fpcf.fonts(),
                browser: fpcf.browser(),
                plugins: fpcf.pluginNames(),
                screen: fpcf.screen(),
                ss: fpcf.sessionStorageKey(),
                ls: fpcf.localStorageKey(),
                idb: fpcf.indexedDbKey(),
                tzo: fpcf.timezoneOffsetKey(),
                rtc: fpcf.webrtcKey()
            }
        }, fpcf.screen = function() {
            return {
                colorDepth: screen.colorDepth,
                pixelDepth: screen.pixelDepth
            }
        }, fpcf.browser = function() {
            return {
                cookies: navigator.cookieEnabled,
                java: navigator.javaEnabled(),
                dnt: navigator.doNotTrack
            }
        }, fpcf.PLUGINS = ["Google Talk Plugin Video Renderer", "Google Talk Plugin", "Java Applet Plug-in", "QuickTime Plug-in 7.7.3", "Default Browser Helper", "Shockwave Flash", "AdobeAAMDetect", "AdobeExManDetect", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Google Earth Plug-in", "RealPlayer Plugin.plugin", "DivX Web Player", "Wacom Pressure Plug-In", "Microsoft Office Live Plug-in", "Widevine Content Decryption Module", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Google Talk Plugin Video Renderer", "Unity Player", "Default Browser Helper", "Silverlight Plug-In", "Wacom Tablet Plug-In", "WebKit-integrierte PDF"], fpcf.plugins = function() {
            if (!navigator.plugins) return null;
            var plugins = [];
            return fpcf.forEach(fpcf.PLUGINS, function(plugin) {
                var p = navigator.plugins[plugin];
                void 0 !== p && (plugins[plugin] = p)
            }), plugins.sort()
        }, fpcf.pluginNames = function() {
            return navigator.plugins ? fpcf.filter(fpcf.PLUGINS, function(plugin) {
                return void 0 !== navigator.plugins[plugin] ? !0 : !1
            }) : null
        }, fpcf.canvas = function() {
            if (void 0 !== fpcf.cache.canvas) return fpcf.cache.canvas;
            var canvas = document.createElement("canvas");
            canvas.width = 280, canvas.height = 60, canvas.style.display = "none", canvas.id = "cfc";
            var result = -1;
            if ("function" == typeof canvas.getContext) {
                var c = canvas.getContext("2d"),
                    text = "fpcf canvasing text";
                c.fillStyle = "rgb(178, 214, 232)", c.fillRect(10, 20, 60, 80), c.fillStyle = "#111", c.font = "16pt Arial", c.fillText(text, 2, 40), c.strokeStyle = "rgb(120, 186, 176)", c.arc(80, 10, 20, 0, Math.PI, !1), c.stroke();
                var imageData = c.getImageData(0, 0, 280, 60);
                result = crc32(imageData.data).toString(), fpcf.cache.canvas = result
            }
            return result
        }, fpcf.fonts = function(customFonts) {
            if (void 0 !== fpcf.cache.fonts) return fpcf.cache.fonts;
            var fonts = ["Arial", "Times New Roman", "Helvetica", "Open Sans", "Source Sans Pro", "Comic Sans MS", "Century", "Century Gothic", "Monaco", "Lato", "Geneva", "Futura", "Fantasque Sans Mono", "Courier", "Courier New", "Corsiva Hebrew", "Comic Neue", "Cambria", "Calibri", "TI-Nspire", "Adobe Braille", "Adobe Hebrew", "Apple LiGothic", "Apple Farben-Emoji", "Avenir", "Avenir Next", "Batang", "Bell MT", "Birch Std", "Damascus", "Microsoft Sans Serif", "Minion Pro", "Times", "Roboto", "Oswald", "Droid Sans", "Droid Serif", "Roboto Condensed", "Ubuntu", "Raleway", "Lobster", "Ubuntu Condensed", "Helvetica Neue"];
            "undefined" != typeof customFonts && (fonts = customFonts);
            var STRING = "wwzrllTNMLllllliiimmqÃŸmmmmiiillâ—ï¸ðŸ”»llplÃ¶ðŸ˜„Â©_~Ã±",
                defaults = [{
                    name: "serif"
                }, {
                    name: "sans-serif"
                }, {
                    name: "monospace"
                }],
                span = document.createElement("span");
            span.innerHTML = STRING, span.style.fontSize = "86px", fpcf.forEach(defaults, function(font) {
                span.style.fontFamily = font.name, document.body.appendChild(span), font.width = span.offsetWidth, font.height = span.offsetHeight, document.body.removeChild(span)
            });
            var foundFonts = [];
            fpcf.forEach(fonts, function(font) {
                for (var found = !1, len = defaults.length, i = 0; len > i && (defaultFont = defaults[i], span.style.fontFamily = font + "," + defaultFont.name, document.body.appendChild(span), (span.offsetWidth !== defaultFont.width || span.offsetHeight !== defaultFont.height) && (found = !0), document.body.removeChild(span), !found); i++);
                found && foundFonts.push(font)
            });
            var output = foundFonts.sort();
            return fpcf.cache.fonts = output, output
        }, fpcf.webrtcKey = function() {
            return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection
        }, fpcf.indexedDbKey = function() {
            return fpcf.hasIndexedDB() ? !0 : !1
        }, fpcf.sessionStorageKey = function() {
            return fpcf.hasSessionStorage() ? !0 : !1
        }, fpcf.localStorageKey = function() {
            return fpcf.hasLocalStorage() ? !0 : !1
        }, fpcf.hasSessionStorage = function() {
            try {
                return !!window.sessionStorage
            } catch (e) {
                return !0
            }
        }, fpcf.hasLocalStorage = function() {
            try {
                return !!window.localStorage
            } catch (e) {
                return !0
            }
        }, fpcf.hasIndexedDB = function() {
            return !!window.indexedDB
        };
        var CRC_TABLE = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
    }(cf), cf.startTracking(), setTimeout(cf.fpcf.fpVal, 100);