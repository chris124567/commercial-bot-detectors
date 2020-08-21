/* Retrieved from https://web.archive.org/web/20150223133426js_/http://myfreecams.com/mfc2/lib/o-mfccore.js */
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

    var t = t || {};
    var d = d || document;

    function SetHTML() {
        if (!SetHTML.hCache) {
            SetHTML.hCache = {};
        }
        var oDocRef;
        var sElementId;
        var sContent;
        var sMode;
        if (typeof(arguments[0]) == 'string') {
            oDocRef = document;
            sElementId = arguments[0];
            sContent = arguments[1] || '';
            sMode = arguments[2] || '';
        } else {
            oDocRef = arguments[0];
            sElementId = arguments[1];
            sContent = arguments[2] || '';
            sMode = arguments[3] || '';
        }
        for (oDocument in SetHTML.hCache) {
            if (!oDocument) {
                delete SetHTML.hCache[oDocument];
            }
        }
        var oEl = GetEl(oDocRef, sElementId);
        var sOutcome = 'no element';
        if (oEl && sMode == 'force') {
            oEl.innerHTML = sContent;
        } else if (oEl) {
            var bRefresh = true;
            if (sContent.length < 10000) {
                if (!SetHTML.hCache[oDocRef]) {
                    SetHTML.hCache[oDocRef] = {};
                }
                if (SetHTML.hCache[oDocRef][sElementId] != undefined && SetHTML.hCache[oDocRef][sElementId] == sContent) {
                    bRefresh = false;
                } else {
                    SetHTML.hCache[oDocRef][sElementId] = sContent;
                }
            } else if (SetHTML.hCache[oDocRef] && SetHTML.hCache[oDocRef][sElementId] != undefined) {
                delete SetHTML.hCache[oDocRef][sElementId];
            }
            if (bRefresh) {
                oEl.innerHTML = sContent;
            }
        }
    }

    function GetHTML() {
        if (typeof(arguments[0]) == 'string') {
            var oDocRef = document;
            var sElementId = arguments[0];
        } else {
            var oDocRef = arguments[0];
            var sElementId = arguments[1];
        }
        return GetEl(oDocRef, sElementId).innerHTML;
    }

    function GetEl() {
        if (!GetEl.hUA) GetEl.hUA = new MfcUserAgent();
        if (typeof(arguments[0]) == 'string') {
            var oDocRef = document;
            var sElementId = arguments[0];
        } else {
            var oDocRef = arguments[0];
            var sElementId = arguments[1];
        }
        return oDocRef.getElementById(sElementId);
        /* if(! GetEl.hUA.IE || GetEl.hUA.IE > 10 ) { return oDocRef.getElementById(sElementId ); } if(! oDocRef ) { Log("Element cache '" + sElementId + "' was requested but the document is inaccessible."); return; } if(! oDocRef.g_hElementCache || sElementId == 'flush') { oDocRef.g_hElementCache = {}; } if(oDocRef.g_hElementCache ) { var bRefresh = 0; if(! oDocRef.g_hElementCache[sElementId] ) { bRefresh = 1; } if(! bRefresh && oDocRef.g_hElementCache[sElementId] && oDocRef.g_hElementCache[sElementId]['ref'] && oDocRef.g_hElementCache[sElementId]['ref'].behaviorUrns != oDocRef.g_hElementCache[sElementId]['unq'] ) { bRefresh = 2; } if(bRefresh ) { oDocRef.g_hElementCache[sElementId] = {}; oDocRef.g_hElementCache[sElementId]['ref'] = oDocRef.getElementById(sElementId) || false; if(oDocRef.g_hElementCache[sElementId]['ref']) { oDocRef.g_hElementCache[sElementId]['unq'] = oDocRef.g_hElementCache[sElementId]['ref'].behaviorUrns; } else if(oDocRef.g_hElementCache[sElementId]) { delete oDocRef.g_hElementCache[sElementId]; return false; } }
         return oDocRef.g_hElementCache[sElementId]['ref']; } else { Log("Element cache '"+sElementId+"' was called but the element is inaccessible."); }*/
    }
    var IdCache = GetEl;
    document.IdCache = IdCache;

    function IsBroadcastState(nState) {
        if (nState < FCVIDEO_RX_IDLE) {
            return true;
        }
        return false;
    }

    function IsOnline(nState) {
        if (parseInt(nState) != FCVIDEO_UNKNOWN) {
            return true;
        }
        return false;
    }

    function IsSessionState(nState) {
        if (parseInt(nState) == FCVIDEO_TX_PVT || parseInt(nState) == FCVIDEO_RX_PVT || parseInt(nState) == FCVIDEO_RX_VOY || parseInt(nState) == FCVIDEO_RX_GRP || parseInt(nState) == FCVIDEO_TX_GRP) {
            return true;
        }
        return false;
    }

    function PublicChannel(nChan) {
        return 100000000 + parseInt(nChan);
    }

    function SessionChannel(nChan) {
        return 200000000 + parseInt(nChan);
    }

    function SessionToPublic(nChan) {
        if (parseInt(nChan) >= 100000000 && parseInt(nChan) < 200000000) return nChan;
        else if (parseInt(nChan) >= 200000000) return PublicChannel(parseInt(nChan) - 200000000);
        return parseInt(nChan) + 100000000;
    }

    function ChannelModel(nChan) {
        if (nChan > 200000000) return parseInt(nChan) - 200000000;
        else if (nChan > 100000000) return parseInt(nChan) - 100000000;
        return nChan;
    }

    function getFlashObject(sFlashId, oD, oW) {
        if (window.frames && window.frames.video_frame && window.frames.video_frame.GetVideo) {
            return window.frames.video_frame.GetVideo();
        }
        var oW = oW || window;
        var oD = oD || document;
        if (oW.document[sFlashId]) return oW.document[sFlashId];
        if (navigator.appName.indexOf("Microsoft Internet") == -1) {
            if (oD.embeds && oD.embeds[sFlashId]) {
                return oD.embeds[sFlashId];
            }
        } else {
            return oD.getElementById(sFlashId);
        }
    }

    function FindAbsoluteOffset(sIdOrElement) {
        var oElement;
        if (typeof(sIdOrElement) == 'string') {
            oElement = GetEl(sIdOrElement);
        } else {
            oElement = sIdOrElement;
        }
        var nTotalX = oElement.offsetLeft;
        var nTotalY = oElement.offsetTop;
        for (var a = 0; a < 20; a++) {
            if (oElement.parentNode) {
                oElement = oElement.parentNode;
                if (oElement && oElement.tagName == 'TR') {
                    nTotalX += oElement.offsetLeft;
                    nTotalY += oElement.offsetTop;
                }
            } else {
                break;
            }
        }
        return {
            x: nTotalX,
            y: nTotalY
        };
    }

    function createRequestObject() {
        if (window.navigator.appName.indexOf('Internet Explorer') > -1) return new ActiveXObject('Microsoft.XMLHTTP');
        else return new XMLHttpRequest();
    }

    function CallStack() {};
    CallStack.prototype.show = function() {
        var f = showCallStack,
            result = "Call stack:\n\n";
        while ((f = f.caller) !== null) {
            result += "F:" + f.toString().match(/^function (\w+)\(/)[1] + "\n";
            result += "A:" + parseArguments(f.arguments) + "\n";
            result += "\n";
        }
        alert(result);
    };
    CallStack.prototype.parseArguments = function(a) {
        var result = [];
        for (var i = 0; i < a.length; i++) {
            if ('string' == typeof a[i]) result.push("\"" + a[i] + "\"");
            else result.push(a[i]);
        }
        return "(" + result.join(", ") + ")";
    };

    function CaretPosition() {};
    CaretPosition.prototype.get = function(oTextarea) {
        var CaretPos = 0;
        if (document.selection) {
            oTextarea.focus();
            var Sel = document.selection.createRange();
            Sel.moveStart('character', -oTextarea.value.length);
            CaretPos = Sel.text.length;
        } else if (oTextarea.selectionStart || oTextarea.selectionStart == '0') CaretPos = oTextarea.selectionStart;
        return (CaretPos);
    };
    CaretPosition.prototype.set = function(oTextarea, nPos) {
        if (oTextarea.setSelectionRange) {
            oTextarea.focus();
            oTextarea.setSelectionRange(nPos, nPos);
        } else if (oTextarea.createTextRange) {
            var range = oTextarea.createTextRange();
            range.collapse(true);
            range.moveEnd('character', nPos);
            range.moveStart('character', nPos);
            range.select();
        }
    };

    function acopy(iterable) {
        if (!iterable) return [];
        if (iterable.toArray) return iterable.toArray();
        var length = iterable.length || 0,
            results = new Array(length);
        while (length--) results[length] = iterable[length];
        return results;
    }

    function bind() {
        if (arguments.length < 2) return null;
        var args = acopy(arguments),
            obj = args.shift(),
            func = args.shift();
        return function() {
            return func.apply(obj, args);
        };
    }
    var is = {
        Null: function(a) {
            return a === null;
        },
        Undefined: function(a) {
            return a === undefined;
        },
        nt: function(a) {
            return (a === null || a === undefined);
        },
        Function: function(a) {
            return (typeof(a) === 'function') ? a.constructor.toString().match(/Function/) !== null : false;
        },
        String: function(a) {
            return (typeof(a) === 'string') ? true : (typeof(a) === 'object') ? a.constructor.toString().match(/string/i) !== null : false;
        },
        Array: function(a) {
            return (typeof(a) === 'object') ? a.constructor.toString().match(/array/i) !== null || a.length !== undefined : false;
        },
        Boolean: function(a) {
            return (typeof(a) === 'boolean') ? true : (typeof(a) === 'object') ? a.constructor.toString().match(/boolean/i) !== null : false;
        },
        Date: function(a) {
            return (typeof(a) === 'date') ? true : (typeof(a) === 'object') ? a.constructor.toString().match(/date/i) !== null : false;
        },
        HTML: function(a) {
            return (typeof(a) === 'object') ? a.constructor.toString().match(/html/i) !== null : false;
        },
        Number: function(a) {
            return (typeof(a) === 'number') ? true : (typeof(a) === 'object') ? a.constructor.toString().match(/Number/) !== null : false;
        },
        Object: function(a) {
            return (typeof(a) === 'object') ? a.constructor.toString().match(/object/i) !== null : false;
        },
        RegExp: function(a) {
            return (typeof(a) === 'function') ? a.constructor.toString().match(/regexp/i) !== null : false;
        }
    };
    var type = {
        of: function(a) {
            for (var i in is) {
                if (is[i](a)) {
                    return i.toLowerCase();
                }
            }
        }
    };
    var MfcStringUtilities = {};
    MfcStringUtilities.parse_template = function(sTemplate, hSwaps, hOptions) {
        if (!sTemplate) {
            return;
        }
        if (!hSwaps) {
            hSwaps = {};
        }
        if (!hOptions) {
            hOptions = {};
        }
        sTemplate = sTemplate.replace(/%[A-Z0-9_]+%/g, function() {
            var sKey = arguments[0].substring(1, arguments[0].length - 1);
            if (hSwaps[sKey]) {
                return hSwaps[sKey];
            }
            if (hSwaps[sKey.toLowerCase()]) {
                return hSwaps[sKey.toLowerCase()];
            }
            return '';
        });
        return sTemplate;
    };
    MfcStringUtilities.query_string_append = function(sString, sKey, sValue) {
        var sJoint = '';
        if (sString.match(/\&$/)) {
            1;
        } else if (sString.match(/\?/)) {
            sJoint = '&';
        } else {
            sJoint = '?';
        }
        return (sJoint + sKey + "=" + sValue);
    };
    MfcStringUtilities.parse_query_string = function(sQueryString) {
        var hQS = new Array();
        var aPairs = new Array();
        if (aPairs = sQueryString.replace(/\?/g, "&").split("&")) {
            for (var i = 0; i < aPairs.length; i++) {
                var sKey = aPairs[i].split('=')[0];
                var sVal = aPairs[i].split('=')[1];
                if (typeof(sKey) == 'string') sKey = sKey.replace(/\W/g, '');
                if (typeof(sVal) == 'string') sVal = sVal.replace(/[^\w ]/g, '');
                hQS[sKey] = sVal;
            }
        }
        return hQS;
    };
    MfcStringUtilities.char_padding = function(sString, nWidth, cChar, sDirection) {
        if (typeof cChar == 'undefined') {
            cChar = ' ';
        }
        if (typeof(sString) == 'undefined') {
            return;
        }
        sString = sString.toString();
        var nDec = '';
        var cSign = '';
        if (sString.match(/^[\d\.\-]+$/)) {
            if (sString.charAt(0) == '-') {
                sString = sString.substr(1, sString.length);
                cSign = '-';
            }
            if (sString.indexOf('.') == -1) {
                sString += '.';
            }
            nDec = sString.split('.')[1];
            sString = sString.split('.')[0];
        }
        while (sString.length < nWidth) {
            if (sDirection == 'right') {
                sString = sString + cChar;
            } else {
                sString = cChar + sString;
            }
        }
        if (sString.match(/\d/)) {
            sString = cSign + sString;
            if (nDec) {
                sString += '.' + nDec;
            }
        }
        return sString;
    };

    function MfcCrc32() {};
    MfcCrc32.prototype.aCrc32Tab = new Array(0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D);
    MfcCrc32.prototype.string = function(str) {
        var n;
        var len = str.length;
        var crc;
        crc = 0xFFFFFFFF;
        for (var n = 0; n < len; n++) {
            crc = this.add(crc, str.charCodeAt(n));
        }
        return crc ^ 0xFFFFFFFF;
    };
    MfcCrc32.prototype.add = function(crc, c) {
        return this.aCrc32Tab[(crc ^ c) & 0xFF] ^ ((crc >> 8) & 0xFFFFFF);
    };

    function MfcTimer(fStartNow) {
        this.startTime = null;
        this.stopTime = null;
        this.elapsed = 0;
        if (fStartNow) {
            this.startTime = new Date();
        }
    }
    MfcTimer.prototype.Start = function() {
        this.startTime = new Date();
    };
    MfcTimer.prototype.Stop = function(nMax, sMsg) {
        this.stopTime = new Date();
        this.elapsed = (this.stopTime - this.startTime);
        if (nMax <= this.elapsed) {
            if (sMsg && Log) {
                Log("[mprof " + this.elapsed + "ms] " + sMsg);
            }
            return true;
        }
        return false;
    };
    MfcTimer.prototype.Seconds = function() {
        return this.elapsed / 1000;
    };
    iPhone_InputNoZoom = {};
    iPhone_InputNoZoom.MouseOver = function() {
        if (iPhone_InputNoZoom.ThisIsNotiOSDevice()) {
            return;
        }
        aMetaTags = top.document.getElementsByTagName("meta");
        for (n = 0; n < aMetaTags.length; n++)
            if (aMetaTags[n].getAttribute("name") == "viewport") aMetaTags[n].setAttribute('content', 'user-scalable=0');
    };
    iPhone_InputNoZoom.MouseUp = function() {
        if (iPhone_InputNoZoom.ThisIsNotiOSDevice()) {
            return;
        }
        aMetaTags = top.document.getElementsByTagName("meta");
        for (n = 0; n < aMetaTags.length; n++)
            if (aMetaTags[n].getAttribute("name") == "viewport") aMetaTags[n].setAttribute('content', 'user-scalable=1');
    };
    iPhone_InputNoZoom.ThisIsNotiOSDevice = function() {
        if (!iPhone_InputNoZoom.UA) {
            iPhone_InputNoZoom.UA = new MfcUserAgent();
        }
        if (!iPhone_InputNoZoom.UA.iOS) {
            return true;
        }
    };

    function CloneObject(obj) {
        var newObj = (obj instanceof Array) ? [] : {};
        for (var i in obj) {
            if (i == 'clone') continue;
            if (obj[i] && typeof obj[i] == "object") {
                newObj[i] = CloneObject(obj[i]);
            } else {
                newObj[i] = obj[i]
            }
        }
        return newObj;
    };

    function DumpObject(arr, level) {
        var dumped_text = "";
        if (!level) level = 0;
        var level_padding = "";
        for (var j = 0; j < level + 1; j++) level_padding += " ";
        if (typeof(arr) == 'object') {
            for (var item in arr) {
                var value = arr[item];
                if (typeof(value) == 'object') {
                    dumped_text += level_padding + "'" + item + "' ...\n";
                    dumped_text += DumpObject(value, level + 1);
                } else {
                    dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                }
            }
        } else {
            dumped_text = "===>" + arr + "<===(" + typeof(arr) + ")";
        }
        return dumped_text;
    };

    function a_tag(hAttributes) {
        var aHtml = new Array('<a ');
        for (var sK in hAttributes) {
            aHtml.push(sK + "=\"" + hAttributes[sK].replace(/"/g, "'") + "\" ");
        }
        aHtml.push('>');
        return aHtml.join('');
    }

    function MfcUserAgent() {
        if (!MfcUserAgent.bInitialized) {
            MfcUserAgent.hUA = this.GetUserAgentInfo();
            MfcUserAgent.bInitialized = true;
        }
        for (sK in MfcUserAgent.hUA) {
            this[sK] = MfcUserAgent.hUA[sK];
        }
        if (g_ExternalCaller) {
            this.oTop = window;
        } else {
            this.oTop = top;
            this.DeviceOrientation();
            top.window.onorientationchange = this.DeviceOrientation;
        }
    }
    MfcUserAgent.prototype.GetUserAgentInfo = function() {
        if (g_ExternalCaller && !this.top) this.oTop = window;
        else if (!this.oTop) this.oTop = top;
        var aMatches = [];
        aMatches = this.oTop.location.search.match(/user_agent=([^&]+)/);
        var sUserAgent = aMatches && aMatches[1] ? unescape(aMatches[1]) : navigator.userAgent;
        var hUA = {};
        hUA.FlashAvailable = true;
        if (sUserAgent.match(/Tablet;/)) {
            hUA.tablet = true;
        } else if (sUserAgent.match(/Mobile;/)) {
            hUA.mobile = true;
        } else {
            hUA.desktop = true;
        }
        hUA.pluginsSupported = this.PluginsSupported();
        hUA.FullWidth = screen.width == this.oTop.document.documentElement.clientWidth;
        hUA.FullHeight = (Math.abs(screen.height - this.oTop.document.documentElement.clientHeight) < 4);
        hUA.webkit = sUserAgent.indexOf('AppleWebKit') > -1 ? true : false;
        if (sUserAgent.indexOf("Mozilla/5.0 (X11; Linux x86_64; rv:13.0) Gecko/20100101 Firefox/13.0.1") > -1) {
            hUA.tablet = true;
            hUA.mobile = true;
            hUA.FlashAvailable = true;
        } else if (sUserAgent.indexOf("(iPad;") > -1) {
            sUserAgent.match(/OS (\d)_(\d)/);
            hUA.iOS = parseFloat(RegExp.$1 + '.' + RegExp.$2);
            hUA.iPad = true;
            hUA.tablet = true;
        } else if (sUserAgent.indexOf("(iPhone;") > -1 || sUserAgent.indexOf("(iPod;") > -1) {
            sUserAgent.match(/OS (\d)_(\d)/);
            hUA.iOS = parseFloat(RegExp.$1 + '.' + RegExp.$2);
            hUA.iPhone = true;
            hUA.FlashAvailable = false;
            hUA.mobile = true;
        } else if (sUserAgent.match(/Android ([0-9]{1,}[\.0-9]{0,})/)) {
            hUA.Android = RegExp.$1;
            hUA.tablet = true;
            hUA.mobile = true;
        } else if (sUserAgent.match(/(hpwOS|webOS)\/([\.\d]+)/)) {
            hUA.WebOS = RegExp.$2;
            hUA.tablet = true;
            hUA.mobile = true;
        } else if (sUserAgent.match(/Windows NT ([\.\d]+)/)) {
            var hWindowsVersionMap = {
                '4.0': 'NT4.0',
                '5.0': '2000',
                '5.01': '2000SP1',
                '5.1': 'XP',
                '5.2': 'XP64',
                '6.0': 'Vista',
                '6.1': '7',
                '6.2': '8'
            };
            hUA.Windows = hWindowsVersionMap[RegExp.$1] || true;
        } else if (sUserAgent.match(/\(Macintosh/)) {
            hUA.Mac = true;
        } else if (sUserAgent.indexOf("(X11;") > -1) {
            hUA.X11 = true;
            hUA.Linux = true;
        }
        if (navigator.appName == "Microsoft Internet Explorer" || sUserAgent.indexOf("Trident/") > -1) {
            hUA.IE = 0;
            if (sUserAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)) hUA.IE = parseFloat(RegExp.$1);
            else if (sUserAgent.match(/\Wrv[: ](\d+)/)) hUA.IE = parseFloat(RegExp.$1);
            if (hUA.IE >= 10 && hUA.desktop && hUA.Windows == 8 && hUA.FullWidth && hUA.FullHeight && !hUA.pluginsSupported) {
                hUA.IE_Desktop_Metro = true;
            }
        } else if (/Maxthon\/([\d\.]+)/.test(sUserAgent)) {
            hUA.Maxthon = new Number(RegExp.$1);
            hUA.no_native_popup_windows = true;
        } else if (/Chrome[\/ ](\d+\.\d+)/.test(sUserAgent)) {
            hUA.Chrome = new Number(RegExp.$1);
        } else if (/Firefox[\/ ](\d+\.\d+)/.test(sUserAgent)) {
            hUA.Firefox = new Number(RegExp.$1);
        } else if (sUserAgent.indexOf("Safari") > -1 && /Version\/(\d+)\.?([\d\.]*)/.test(sUserAgent)) {
            var sMajor = RegExp.$1;
            var sRevision = RegExp.$2.replace(/\./g, '');
            hUA.Safari = parseFloat(sMajor + '.' + sRevision);
        } else if (sUserAgent.indexOf("Opera") > -1) {
            sUserAgent.match(/Version\/([\d\.]+)/);
            hUA.Opera = parseFloat(RegExp.$1);
        }
        if (/\WAOL ([\d\.])+\W/.test(sUserAgent)) {
            hUA.AOL = new Number(RegExp.$1);
        }
        if (hUA.Android) {
            hUA.FlashAvailable = false;
            if (navigator.plugins != null && navigator.plugins.length > 0)
                if (navigator.plugins["Shockwave Flash"]) hUA.FlashAvailable = true;
        } else if (hUA.iOS) {
            hUA.FlashAvailable = false;
        }
        if (hUA.tablet || hUA.mobile) {
            hUA.no_native_popup_windows = true;
            hUA.desktop = false;
        } else {
            hUA.desktop = true;
        }
        if (!hUA.pluginsSupported || !hUA.FlashAvailable) {
            hUA.frameSnapVideo = true;
        }
        return hUA;
    };
    MfcUserAgent.prototype.DeviceOrientation = function() {
        return this.orientation = (this.oTop.window.orientation == 0 || this.oTop.window.orientation == 180) ? 'vertical' : 'horizontal';
    };
    MfcUserAgent.prototype.PluginsSupported = function() {
        this.errorName = '';
        var bSupported = null;
        try {
            new ActiveXObject("");
        } catch (e) {
            this.errorName = e.name;
        }
        try {
            bSupported = Boolean(new ActiveXObject("htmlfile"));
        } catch (e) {
            bSupported = false;
        }
        bSupported = (this.errorName != 'ReferenceError' && bSupported == false) ? false : true;
        return bSupported;
    };
    MfcUserAgent.prototype.GetViewportDimensions = function(sMode) {
        if (sMode == 'top') {
            return {
                width: this.oTop.window.innerWidth || this.oTop.document.documentElement.clientWidth || this.oTop.document.body.clientWidth,
                height: this.oTop.window.innerHeight || this.oTop.document.documentElement.clientHeight || this.oTop.document.body.clientHeight
            };
        } else {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        }
    };
    MfcUserAgent.prototype.GetDocumentDimensions = function() {
        return {
            width: Math.max(Math.max(document.body.scrollWidth, document.documentElement.scrollWidth), Math.max(document.body.offsetWidth, document.documentElement.offsetWidth), Math.max(document.body.clientWidth, document.documentElement.clientWidth)),
            height: Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight))
        };
    };

    function addEvent(sEvent, oElement, oFunction, bUseCapture) {
        if (oElement.addEventListener) {
            oElement.addEventListener(sEvent, oFunction, bUseCapture || false);
        } else if (oElement.attachEvent) {
            oElement.attachEvent("on" + sEvent, oFunction);
        } else {
            oElement['on' + sEvent] = oFunction;
        }
    }

    function crc32(str) {
        function Utf8Encode(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        };
        str = Utf8Encode(str);
        var table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
        if (typeof(crc) == "undefined") {
            crc = 0;
        }
        var x = 0;
        var y = 0;
        crc = crc ^ (-1);
        for (var i = 0, iTop = str.length; i < iTop; i++) {
            y = (crc ^ str.charCodeAt(i)) & 0xFF;
            x = "0x" + table.substr(y * 9, 8);
            crc = (crc >>> 8) ^ x;
        }
        return crc ^ (-1);
    };
    if (typeof FCS === 'undefined') FCS = {};
    FCS.EVSESSION_NONE = 0;
    FCS.EVSESSION_PRIVATE = 1;
    FCS.EVSESSION_VOYEUR = 2;
    FCS.EVSESSION_GROUP = 3;
    FCS.EVSESSION_FEATURE = 4;
    FCS.EVSESSION_AWAYPVT = 5;
    FCS.EVSESSION_TIP = 10;
    FCS.EVSESSION_PUBLIC = 100;
    FCS.EVSESSION_AWAY = 101;
    FCS.EVSESSION_START = 102;
    FCS.EVSESSION_UPDATE = 103;
    FCS.EVSESSION_STOP = 104;
    FCS.FCPROTOCOL_MAGIC = 0x8722aab2;
    FCS.FCTYPE_NULL = 0;
    FCS.FCTYPE_LOGIN = 1;
    FCS.FCTYPE_ADDFRIEND = 2;
    FCS.FCTYPE_PMESG = 3;
    FCS.FCTYPE_STATUS = 4;
    FCS.FCTYPE_DETAILS = 5;
    FCS.FCTYPE_TOKENINC = 6;
    FCS.FCTYPE_ADDIGNORE = 7;
    FCS.FCTYPE_PRIVACY = 8;
    FCS.FCTYPE_ADDFRIENDREQ = 9;
    FCS.FCTYPE_USERNAMELOOKUP = 10;
    FCS.FCTYPE_BROADCASTPROFILE = 11;
    FCS.FCTYPE_BROADCASTNEWS = 12;
    FCS.FCTYPE_ANNOUNCE = 13;
    FCS.FCTYPE_MANAGELIST = 14;
    FCS.FCTYPE_INBOX = 15;
    FCS.FCTYPE_GWCONNECT = 16;
    FCS.FCTYPE_RELOADSETTINGS = 17;
    FCS.FCTYPE_HIDEUSERS = 18;
    FCS.FCTYPE_RULEVIOLATION = 19;
    FCS.FCTYPE_SESSIONSTATE = 20;
    FCS.FCTYPE_REQUESTPVT = 21;
    FCS.FCTYPE_ACCEPTPVT = 22;
    FCS.FCTYPE_REJECTPVT = 23;
    FCS.FCTYPE_ENDSESSION = 24;
    FCS.FCTYPE_TXPROFILE = 25;
    FCS.FCTYPE_STARTVOYEUR = 26;
    FCS.FCTYPE_SERVERREFRESH = 27;
    FCS.FCTYPE_SETTING = 28;
    FCS.FCTYPE_BWSTATS = 29;
    FCS.FCTYPE_SETGUESTNAME = 30;
    FCS.FCTYPE_SETTEXTOPT = 31;
    FCS.FCTYPE_SERVERCONFIG = 32;
    FCS.FCTYPE_MODELGROUP = 33;
    FCS.FCTYPE_REQUESTGRP = 34;
    FCS.FCTYPE_STATUSGRP = 35;
    FCS.FCTYPE_GROUPCHAT = 36;
    FCS.FCTYPE_CLOSEGRP = 37;
    FCS.FCTYPE_UCR = 38;
    FCS.FCTYPE_MYUCR = 39;
    FCS.FCTYPE_SLAVECON = 40;
    FCS.FCTYPE_SLAVECMD = 41;
    FCS.FCTYPE_SLAVEFRIEND = 42;
    FCS.FCTYPE_SLAVEVSHARE = 43;
    FCS.FCTYPE_ROOMDATA = 44;
    FCS.FCTYPE_NEWSITEM = 45;
    FCS.FCTYPE_GUESTCOUNT = 46;
    FCS.FCTYPE_PRELOGINQ = 47;
    FCS.FCTYPE_MODELGROUPSZ = 48;
    FCS.FCTYPE_ROOMHELPER = 49;
    FCS.FCTYPE_CMESG = 50;
    FCS.FCTYPE_JOINCHAN = 51;
    FCS.FCTYPE_CREATECHAN = 52;
    FCS.FCTYPE_INVITECHAN = 53;
    FCS.FCTYPE_QUIETCHAN = 55;
    FCS.FCTYPE_BANCHAN = 56;
    FCS.FCTYPE_PREVIEWCHAN = 57;
    FCS.FCTYPE_SHUTDOWN = 58;
    FCS.FCTYPE_LISTBANS = 59;
    FCS.FCTYPE_UNBAN = 60;
    FCS.FCTYPE_SETWELCOME = 61;
    FCS.FCTYPE_PERMABAN = 62;
    FCS.FCTYPE_LISTCHAN = 63;
    FCS.FCTYPE_TAGS = 64;
    FCS.FCTYPE_SETPCODE = 65;
    FCS.FCTYPE_SETMINTIP = 66;
    FCS.FCTYPE_UEOPT = 67;
    FCS.FCTYPE_HDVIDEO = 68;
    FCS.FCTYPE_METRICS = 69;
    FCS.FCTYPE_OFFERCAM = 70;
    FCS.FCTYPE_REQUESTCAM = 71;
    FCS.FCTYPE_MYWEBCAM = 72;
    FCS.FCTYPE_MYCAMSTATE = 73;
    FCS.FCTYPE_PMHISTORY = 74;
    FCS.FCTYPE_CHATFLASH = 75;
    FCS.FCTYPE_TRUEPVT = 76;
    FCS.FCTYPE_BOOKMARKS = 77;
    FCS.FCTYPE_EVENT = 78;
    FCS.FCTYPE_STATEDUMP = 79;
    FCS.FCTYPE_RECOMMEND = 80;
    FCS.FCTYPE_DISCONNECTED = 98;
    FCS.FCTYPE_LOGOUT = 99;
    FCS.FCRESPONSE_SUCCESS = 0;
    FCS.FCRESPONSE_ERROR = 1;
    FCS.FCRESPONSE_NOTICE = 2;
    FCS.FCRESPONSE_SUSPEND = 3;
    FCS.FCRESPONSE_SHUTOFF = 4;
    FCS.FCRESPONSE_WARNING = 5;
    FCS.FCRESPONSE_QUEUED = 6;
    FCS.FCRESPONSE_NO_RESULTS = 7;
    FCS.FCERRTYPE_INVALIDUSER = 10;
    FCS.FCERRTYPE_NOACCESS = 11;
    FCS.FCERRTYPE_NOSPACE = 12;
    FCS.FCLEVEL_INVALID = -1;
    FCS.FCLEVEL_GUEST = 0;
    FCS.FCLEVEL_BASIC = 1;
    FCS.FCLEVEL_PREMIUM = 2;
    FCS.FCLEVEL_MODEL = 4;
    FCS.FCLEVEL_ADMIN = 5;
    FCS.FCCHAN_NOOPT = 0;
    FCS.FCCHAN_JOIN = 1;
    FCS.FCCHAN_PART = 2;
    FCS.FCCHAN_OLDMSG = 4;
    FCS.FCCHAN_HISTORY = 8;
    FCS.FCCHAN_LIST = 16;
    FCS.FCCHAN_WELCOME = 32;
    FCS.FCCHAN_BATCHPART = 64;
    FCS.FCCHAN_EXT_USERNAME = 128;
    FCS.FCCHAN_EXT_USERDATA = 256;
    FCS.FCCHAN_ERR_NOCHANNEL = 2;
    FCS.FCCHAN_ERR_NOTMEMBER = 3;
    FCS.FCCHAN_ERR_GUESTMUTE = 4;
    FCS.FCCHAN_ERR_GROUPMUTE = 5;
    FCS.FCCHAN_ERR_NOTALLOWED = 6;
    FCS.FCGROUP_NONE = 0;
    FCS.FCGROUP_EXPIRED = 1;
    FCS.FCGROUP_BUSY = 2;
    FCS.FCGROUP_EMPTY = 3;
    FCS.FCGROUP_DECLINED = 4;
    FCS.FCGROUP_UNAVAILABLE = 5;
    FCS.FCGROUP_SESSION = 9;
    FCS.FCACCEPT_NOBODY = 0;
    FCS.FCACCEPT_FRIENDS = 1;
    FCS.FCACCEPT_ALL = 2;
    FCS.FCACCEPT_V2_NONE = 8;
    FCS.FCACCEPT_V2_FRIENDS = 16;
    FCS.FCACCEPT_V2_MODELS = 32;
    FCS.FCACCEPT_V2_PREMIUMS = 64;
    FCS.FCACCEPT_V2_BASICS = 128;
    FCS.FCACCEPT_V2_ALL = 240;
    FCS.FCNOSESS_NONE = 0;
    FCS.FCNOSESS_PVT = 1;
    FCS.FCNOSESS_GRP = 2;
    FCS.FCMODEL_NONE = 0;
    FCS.FCMODEL_NOGROUP = 1;
    FCS.FCMODEL_FEATURE1 = 2;
    FCS.FCMODEL_FEATURE2 = 4;
    FCS.FCMODEL_FEATURE3 = 8;
    FCS.FCMODEL_FEATURE4 = 16;
    FCS.FCMODEL_FEATURE5 = 32;
    FCS.FCUCR_VM_LOUNGE = 0;
    FCS.FCUCR_VM_MYWEBCAM = 1;
    FCS.FCUCR_CREATOR = 0;
    FCS.FCUCR_FRIENDS = 1;
    FCS.FCUCR_MODELS = 2;
    FCS.FCUCR_PREMIUMS = 4;
    FCS.FCUCR_BASICS = 8;
    FCS.FCUCR_ALL = 15;
    FCS.FCUPDATE_NONE = 0;
    FCS.FCUPDATE_MISSMFC = 1;
    FCS.FCOPT_NONE = 0;
    FCS.FCOPT_BOLD = 1;
    FCS.FCOPT_ITALICS = 2;
    FCS.FCOPT_REMOTEPVT = 4;
    FCS.FCOPT_TRUEPVT = 8;
    FCS.FCOPT_CAM2CAM = 16;
    FCS.FCOPT_RGNBLOCK = 32;
    FCS.FCOPT_TOKENAPPROX = 64;
    FCS.FCOPT_TOKENHIDE = 128;
    FCS.FCOPT_RPAPPROX = 256;
    FCS.FCOPT_RPHIDE = 512;
    FCS.FCOPT_HDVIDEO = 1024;
    FCS.FCOPT_MODELSW = 2048;
    FCS.FCOPT_GUESTMUTE = 4096;
    FCS.FCOPT_BASICMUTE = 8192;
    FCS.FCOPT_BOOKMARK = 16384;
    FCS.FCBAN_NONE = 0;
    FCS.FCBAN_TEMP = 1;
    FCS.FCBAN_60DAY = 2;
    FCS.FCBAN_LIFE = 3;
    FCS.FCNEWSOPT_NONE = 0;
    FCS.FCNEWSOPT_IN_CHAN = 1;
    FCS.FCNEWSOPT_IN_PM = 2;
    FCS.FCNEWSOPT_AUTOFRIENDS_OFF = 4;
    FCS.FCNEWSOPT_IN_CHAN_NOPVT = 8;
    FCS.FCNEWSOPT_IN_CHAN_NOGRP = 16;
    FCS.FCSERV_NONE = 0;
    FCS.FCSERV_VIDEO_CAM2CAM = 1;
    FCS.FCSERV_VIDEO_MODEL = 2;
    FCS.FCSERV_VIDEO_RESV2 = 4;
    FCS.FCSERV_VIDEO_RESV3 = 8;
    FCS.FCSERV_CHAT_MASTER = 16;
    FCS.FCSERV_CHAT_SLAVE = 32;
    FCS.FCSERV_CHAT_RESV2 = 64;
    FCS.FCSERV_CHAT_RESV3 = 128;
    FCS.FCSERV_AUTH = 256;
    FCS.FCSERV_AUTH_RESV1 = 512;
    FCS.FCSERV_AUTH_RESV2 = 1024;
    FCS.FCSERV_AUTH_RESV3 = 2048;
    FCS.FCSERV_TRANS = 4096;
    FCS.FCSERV_TRANS_RESV1 = 8192;
    FCS.FCSERV_TRANS_RESV2 = 16384;
    FCS.FCSERV_TRANS_RESV3 = 32768;
    FCS.FCVIDEO_TX_IDLE = 0;
    FCS.FCVIDEO_TX_RESET = 1;
    FCS.FCVIDEO_TX_AWAY = 2;
    FCS.FCVIDEO_TX_CONFIRMING = 11;
    FCS.FCVIDEO_TX_PVT = 12;
    FCS.FCVIDEO_TX_GRP = 13;
    FCS.FCVIDEO_TX_RESERVED = 14;
    FCS.FCVIDEO_TX_KILLMODEL = 15;
    FCS.FCVIDEO_C2C_ON = 20;
    FCS.FCVIDEO_C2C_OFF = 21;
    FCS.FCVIDEO_RX_IDLE = 90;
    FCS.FCVIDEO_RX_PVT = 91;
    FCS.FCVIDEO_RX_VOY = 92;
    FCS.FCVIDEO_RX_GRP = 93;
    FCS.FCVIDEO_NULL = 126;
    FCS.FCVIDEO_OFFLINE = 127;
    FCS.MYWEBCAM_EVERYONE = 0;
    FCS.MYWEBCAM_ONLYUSERS = 1;
    FCS.MYWEBCAM_ONLYFRIENDS = 2;
    FCS.MYWEBCAM_ONLYMODELS = 3;
    FCS.MYWEBCAM_FRIENDSANDMODELS = 4;
    FCS.MYWEBCAM_WHITELIST = 5;
    FCS.HK_ACCEPT_CON = 0;
    FCS.HK_PRELOGIN_USER = 1;
    FCS.HK_PRELOGIN_SERVER = 2;
    FCS.HK_LOGIN_GUEST = 3;
    FCS.HK_LOGIN_BASIC = 4;
    FCS.HK_LOGIN_PREMIUM = 5;
    FCS.HK_LOGIN_MODEL = 6;
    FCS.HK_LOGIN_ADMIN = 7;
    FCS.HK_LOGIN_SERVER = 8;
    FCS.HK_LOGOUT_GUEST = 9;
    FCS.HK_LOGOUT_BASIC = 10;
    FCS.HK_LOGOUT_PREMIUM = 11;
    FCS.HK_LOGOUT_MODEL = 12;
    FCS.HK_LOGOUT_ADMIN = 13;
    FCS.HK_LOGOUT_SERVER = 14;
    FCS.HK_STATE_MODEL = 15;
    FCS.HK_STATE_USER = 16;
    FCS.HK_FRIENDSLOADED = 17;
    FCS.HK_SENDMODELS = 18;
    FCS.HK_CHAN_UPDATE = 19;
    FCS.HK_PUBLISH_MODEL = 20;
    FCS.HK_NOTIFY_ADD = 21;
    FCS.HK_NOTIFY_REMOVE = 22;
    FCS.HK_SERIALIZE_USER = 23;
    FCS.HK_SERIALIZE_MODEL = 24;
    FCS.HK_TOKENSESSION = 25;
    FCS.HK_CHATLOG = 26;
    FCS.MAX_HOOKTYPE = 27;
    FCS.REG_NONE = 0;
    FCS.REG_USER_IN = 1;
    FCS.REG_USER_OUT = 2;
    FCS.REG_SERVER_IN = 3;
    FCS.REG_SERVER_OUT = 4;
    FCS.REG_AUTH_IN = 5;
    FCS.REG_AUTH_OUT = 6;
    FCS.REG_SESS_EVENT = 7;
    FCS.REG_TIMER = 8;
    FCS.REG_HOOK = 9;
    FCS.REG_SERVICE = 10;
    FCS.MAX_REGTYPE = 11;
    FCS.TKOPT_NONE = 0;
    FCS.TKOPT_START = 1;
    FCS.TKOPT_STOP = 2;
    FCS.TKOPT_OPEN = 4;
    FCS.TKOPT_PVT = 8;
    FCS.TKOPT_VOY = 16;
    FCS.TKOPT_GRP = 32;
    FCS.TKOPT_TIP = 256;
    FCS.TKOPT_TIP_HIDDEN_AMT = 512;
    FCS.TKOPT_TIP_OFFLINE = 1024;
    FCS.TKOPT_TIP_MSG = 2048;
    FCS.TKOPT_TIP_ANON = 4096;
    FCS.TKOPT_TIP_PUBLIC = 8192;
    FCS.TKOPT_TIP_FROMROOM = 16384;
    FCS.TKOPT_HDVIDEO = 1048576;
    FCS.FCWOPT_NONE = 0;
    FCS.FCWOPT_ADD = 1;
    FCS.FCWOPT_REMOVE = 2;
    FCS.FCWOPT_LIST = 4;
    FCS.FCWOPT_NO_RECEIPT = 8;
    FCS.FCWOPT_USERID = 1024;
    FCS.FCWOPT_USERDATA = 2048;
    FCS.FCWOPT_USERNAME = 4096;
    FCS.FCWOPT_C_USERNAME = 32768;
    FCS.FCWOPT_C_MONTHSLOGIN = 65536;
    FCS.FCWOPT_C_LEVEL = 131072;
    FCS.FCWOPT_C_VSTATE = 262144;
    FCS.FCWOPT_C_CHATTEXT = 524288;
    FCS.FCWOPT_C_PROFILE = 1048576;
    FCS.FCWOPT_C_AVATAR = 2097152;
    FCS.FCWOPT_C_RANK = 4194304;
    FCS.FCWOPT_C_SDATE = 8388608;
    var sTop_ClearCode;
    if (!g_ExternalCaller) sTop_ClearCode = top.g_sClearCode;
    document.domain = 'myfreecams.com';
    var w = window;
    var d = document;
    w.FCTYPE_NULL = 0;
    w.FCTYPE_LOGIN = 1;
    w.FCTYPE_ADDFRIEND = 2;
    w.FCTYPE_PMESG = 3;
    w.FCTYPE_DETAILS = 5;
    w.FCTYPE_TOKENINC = 6;
    w.FCTYPE_ADDIGNORE = 7;
    w.FCTYPE_PRIVACY = 8;
    w.FCTYPE_ADDFRIENDREQ = 9;
    w.FCTYPE_USERNAMELOOKUP = 10;
    w.FCTYPE_ANNOUNCE = 13;
    w.FCTYPE_STUDIO = 14;
    w.FCTYPE_INBOX = 15;
    w.FCTYPE_RELOADSETTINGS = 17;
    w.FCTYPE_HIDEUSERS = 18;
    w.FCTYPE_RULEVIOLATION = 19;
    w.FCTYPE_SESSIONSTATE = 20;
    w.FCTYPE_REQUESTPVT = 21;
    w.FCTYPE_ACCEPTPVT = 22;
    w.FCTYPE_REJECTPVT = 23;
    w.FCTYPE_ENDSESSION = 24;
    w.FCTYPE_TXPROFILE = 25;
    w.FCTYPE_STARTVOYEUR = 26;
    w.FCTYPE_SERVERREFRESH = 27;
    w.FCTYPE_SETTING = 28;
    w.FCTYPE_BWSTATS = 29;
    w.FCTYPE_SETTEXTOPT = 31;
    w.FCTYPE_MODELGROUP = 33;
    w.FCTYPE_REQUESTGRP = 34;
    w.FCTYPE_STATUSGRP = 35;
    w.FCTYPE_GROUPCHAT = 36;
    w.FCTYPE_CLOSEGRP = 37;
    w.FCTYPE_UCR = 38;
    w.FCTYPE_MYUCR = 39;
    w.FCTYPE_SLAVEVSHARE = 43;
    w.FCTYPE_ROOMDATA = 44;
    w.FCTYPE_NEWSITEM = 45;
    w.FCTYPE_GUESTCOUNT = 46;
    w.FCTYPE_MODELGROUPSZ = 48;
    w.FCGROUP_NONE = 0;
    w.FCGROUP_EXPIRED = 1;
    w.FCGROUP_BUSY = 2;
    w.FCGROUP_EMPTY = 3;
    w.FCGROUP_DECLINED = 4;
    w.FCGROUP_UNAVAILABLE = 5;
    w.FCGROUP_SESSION = 9;
    w.FCTYPE_CMESG = 50;
    w.FCTYPE_JOINCHAN = 51;
    w.FCTYPE_CREATECHAN = 52;
    w.FCTYPE_INVITECHAN = 53;
    w.FCTYPE_KICKCHAN = 54;
    w.FCTYPE_BANCHAN = 56;
    w.FCTYPE_PREVIEWCHAN = 57;
    w.FCTYPE_SHUTDOWN = 58;
    w.FCTYPE_SETWELCOME = 61;
    w.FCTYPE_LISTCHAN = 63;
    w.FCTYPE_TAGS = 64;
    w.FCTYPE_UEOPT = 67;
    w.FCTYPE_METRICS = 69;
    w.FCTYPE_OFFERCAM = 70;
    w.FCTYPE_REQUESTCAM = 71;
    w.FCTYPE_MYWEBCAM = 72;
    w.FCTYPE_MYCAMSTATE = 73;
    w.FCTYPE_PMHISTORY = 74;
    w.FCTYPE_CHATFLASH = 75;
    w.FCTYPE_TRUEPVT = 76;
    w.FCTYPE_BOOKMARKS = 77;
    w.FCTYPE_RECOMMEND = 80;
    w.FCTYPE_ZGWINVALID = 95;
    w.FCTYPE_CONNECTING = 96;
    w.FCTYPE_CONNECTED = 97;
    w.FCTYPE_DISCONNECTED = 98;
    w.FCTYPE_LOGOUT = 99;
    w.FCMODE_NOPM = 0;
    w.FCMODE_FRIENDPM = 1;
    w.FCMODE_ALLPM = 2;
    w.FCRESPONSE_SUCCESS = 0;
    w.FCRESPONSE_ERROR = 1;
    w.FCRESPONSE_NOTICE = 2;
    w.FCERRTYPE_INVALIDUSER = 10;
    w.FCERRTYPE_NOACCESS = 11;
    w.FCERRTYPE_NOSPACE = 12;
    w.FCCHAN_NOOPT = 0;
    w.FCCHAN_JOIN = 1;
    w.FCCHAN_PART = 2;
    w.FCCHAN_BATCHPART = 64;
    w.FCCHAN_OLDMSG = 4;
    w.FCCHAN_HISTORY = 8;
    w.FCCHAN_CAMSTATE = 16;
    w.FCCHAN_WELCOME = 32;
    w.FCCHAN_ERR_NOCHANNEL = 2;
    w.FCCHAN_ERR_NOTMEMBER = 3;
    w.FCCHAN_ERR_GUESTMUTE = 4;
    w.FCCHAN_ERR_GROUPMUTE = 5;
    w.FCCHAN_ERR_NOTALLOWED = 6;
    w.FCVIDEO_TX_IDLE = 0;
    w.FCVIDEO_TX_RESET = 1;
    w.FCVIDEO_TX_AWAY = 2;
    w.FCVIDEO_TX_CONFIRMING = 11;
    w.FCVIDEO_TX_PVT = 12;
    w.FCVIDEO_TX_GRP = 13;
    w.FCVIDEO_TX_KILLMODEL = 15;
    w.FCVIDEO_RX_IDLE = 90;
    w.FCVIDEO_RX_PVT = 91;
    w.FCVIDEO_RX_VOY = 92;
    w.FCVIDEO_RX_GRP = 93;
    w.FCVIDEO_UNKNOWN = 127;
    w.EVSESSION_NONE = 0;
    w.EVSESSION_PRIVATE = 1;
    w.EVSESSION_VOYEUR = 2;
    w.EVSESSION_GROUP = 3;
    w.EVSESSION_FEATURE = 4;
    w.EVSESSION_PUBLIC = 100;
    w.EVSESSION_AWAY = 101;
    w.FCWINDOW_NO_USER_PM = 20;
    w.FCWINDOW_OPTIONS_ADD_FRIEND = 31;
    w.FCWINDOW_OPTIONS_ADD_IGNORE = 32;
    w.FCACCEPT_NOBODY = 0;
    w.FCACCEPT_FRIENDS = 1;
    w.FCACCEPT_ALL = 2;
    w.FCOPT_NONE = 0;
    w.FCOPT_BOLD = 1;
    w.FCOPT_ITALICS = 2;
    w.FCOPT_REMOTEPVT = 4;
    w.FCOPT_TRUEPVT = 8;
    w.FCOPT_CAM2CAM = 16;
    w.FCOPT_HDVIDEO = 1024;
    w.FCOPT_MODELSW = 2048;
    w.FCOPT_GUESTMUTE = 4096;
    w.FCOPT_BASICMUTE = 8192;
    w.FCUCR_CREATOR = 0;
    w.FCUCR_FRIENDS = 1;
    w.FCUCR_MODELS = 2;
    w.FCUCR_PREMIUMS = 4;
    w.FCUCR_BASIC = 8;
    w.FCUCR_ALL = 15;
    w.USEREXT_NUM = 0;
    w.USEREXT_STRING = 1;
    w.USEREXT_DATA = 2;
    w.USEREXT_STAMP = 3;
    w.WINDOW_MODE_DEFAULT = 0;
    w.WINDOW_MODE_DHTML = 1;
    w.WINDOW_MODE_BROWSER = 2;
    w.FCNEWSOPT_NONE = 0;
    w.FCNEWSOPT_IN_CHAN = 1;
    w.FCNEWSOPT_IN_PM = 2;
    w.FCNEWSOPT_ADDFRIENDS_OFF = 4;
    w.FCNEWSOPT_IN_CHAN_NOPVT = 8;
    w.FCNEWSOPT_IN_CHAN_NOGRP = 16;
    w.MODELORDER_NONE = 0;
    w.MODELORDER_PVT = 1;
    w.MODELORDER_TRUEPVT = 2;
    w.MODELORDER_GRP = 4;
    w.WINDOW_MODE_DEFAULT = 0;
    w.WINDOW_MODE_DESKTOP_DHTML = 1;
    w.WINDOW_MODE_MOBILE_DHTML = 2;
    w.MYFREECAMS_NEWS_USER_ID = 481462;
    w.DISPLAY_PM_INLINE_WHISPER = 1;
    w.DISPLAY_PM_INLINE_ALL = 2;
    w.WEBCAM_SECURITY_EVERYONE = 0;
    w.WEBCAM_SECURITY_MODELS = 3;
    w.WEBCAM_SECURITY_FRIENDS = 2;
    w.WEBCAM_SECURITY_MODELS_FRIENDS = 4;
    w.WEBCAM_SECURITY_ALLOWED = 5;
    w.MODEL_LIST_ICON_NEW_MODEL = 1;
    w.MODEL_LIST_ICON_RECOMMEND = 2;
    w.MODEL_LIST_ICON_POPULAR = 4;
    w.MODEL_LIST_ICON_RECENT = 8;
    w.LOUNGE_MASK_AUTO_CLICK = 1;
    w.LOUNGE_MASK_NO_CAMSNAPS = 2;
    w.LOUNGE_MASK_LOUNGE_MODE = 4;
    w.HIDE_MODEL_GROUPS_AWAY = 1;
    w.HIDE_MODEL_GROUPS_PRIVATE = 2;
    w.HIDE_MODEL_GROUPS_GROUP = 4;
    w.HIDE_MODEL_GROUPS_PUBLIC = 8;
    var g_hC = {
        'dhtml_path': '/mfc2/static/',
        'site_name': 'MyFreeCams.com',
        'site_path': '/mfc2',
        'master_path': 'https://web.archive.org/web/20150223133426/http://files.myfreecams.com/mfc2',
        'site_path_images': 'https://web.archive.org/web/20150223133426/http://imgs.myfreecams.com/mfc2',
        'domain': 'myfreecams.com'
    };
    var g_bUseImageDomain = true;
    var g_nLoungeReservedId = 486121;
    var g_hLoungeIds = {
        486121: 'Lounge',
        486123: 'Lounge1000',
        486124: 'Lounge10000'
    };
    for (var sK in g_hLoungeIds) {
        g_hLoungeIds[g_hLoungeIds[sK]] = sK;
    }
    var g_hResources = {
        change_model_group: {
            description: "View another group of models"
        },
        test_page: {
            page: "/mfc2/static/test_page.html",
            title: "Test Page",
            description: "Test Page"
        },
        bookmark: {
            description: "Bookmark or Add-To-Favorites her room"
        },
        cookies: {
            page: "/mfc2/static/cookies.html",
            description: "How to delete your MyFreeCams.com cookies"
        },
        online_models_splash: {
            page: "/mfc2/php/online_models_splash.php",
            description: "Online Models"
        },
        offline_models: {
            title: "Offline Models",
            page: "/mfc2/php/offline_models.php",
            description: "Offline Models"
        },
        user_notepad: {
            title: "User Notepad",
            page: "/mfc2/php/user_notepad.php",
            description: "User Notepad"
        },
        manage_friends: {
            title: "Manage Friends",
            page: "/mfc2/php/manage_lists.php?list_type=friends",
            description: "Manage Friends"
        },
        manage_friends2: {
            title: "Manage Friends",
            page: "/mfc2/php/manage_lists2.php?list_type=friends&data_mode=online",
            description: "Manage Friends"
        },
        bookmarks: {
            title: "Manage Friends",
            page: "/mfc2/php/manage_lists2.php?list_type=bookmarks&data_mode=online",
            description: "Bookmarks"
        },
        manage_hidden_models: {
            title: "Manage Hidden Models",
            page: "/mfc2/php/manage_lists.php?list_type=hidden_models",
            description: "Manage Hidden Models"
        },
        offline_friends: {
            title: "Offline Friends",
            page: "/mfc2/php/offline_friends.php",
            description: "Offline Friends"
        },
        token_transfer_wall: {
            title: "Token Transfer Wall",
            page: "/mfc2/php/token_transfer.php?request=token_transfer_wall"
        },
        miss_mfc: {
            title: "Miss MyFreeCams",
            sm_icon: "crown.16x16.png",
            sprite_css: "sprite-icons sprite-crown16x16",
            new_window: "height=750,width=820,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/php/miss_mfc.php",
            description: "Miss MyFreeCams Contest"
        },
        news_feed: {
            title: "News Feed",
            sm_icon: "newsfeed.16x16.png",
            sprite_css: "sprite-icons sprite-newsfeed16x16",
            new_window: "height=800,width=830,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/php/news_feed.php",
            description: "News Feed"
        },
        news_feed_popup: {
            title: "News Feed",
            sm_icon: "newsfeed.16x16.png",
            sprite_css: "sprite-icons sprite-newsfeed16x16",
            new_window: "height=600,width=300,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/php/news_feed.php",
            description: "News Feed"
        },
        top_rooms: {
            title: "Most Popular Rooms",
            sm_icon: "png/top_rooms.16x16.png",
            sprite_css: "sprite-icons sprite-top_rooms16x16",
            new_window: "height=700,width=830,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/static/popular_rooms.html",
            description: "Chat Rooms with the Most Viewers."
        },
        user_created_rooms: {
            title: "Member Rooms",
            sm_icon: "ucr.16x16.png",
            sprite_css: "sprite-icons sprite-ucr16x16",
            new_window: "height=700,width=1080,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/static/user_created_rooms.html",
            description: "Join Member Chat Rooms or create your own."
        },
        group_shows_board: {
            title: "Group Shows",
            sm_icon: "group_show_board.small.png",
            sprite_css: "sprite-icons sprite-group_show_boardsmall",
            page: "/mfc2/php/group_shows_board.php",
            description: "View Ongoing and Pending Group Shows."
        },
        model_recommendations: {
            title: "Models You May Like",
            sm_icon: "png/model_recommendations.16x16.png",
            sprite_css: "sprite-icons sprite-model_recommendations16x16",
            overwrite_page: true,
            page: "/mfc2/php/model_recommendations.php",
            new_window: "height=700,width=980,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "Find other Models You May Like."
        },
        model_explorer: {
            title: "Model Explorer",
            sm_icon: "model_matrix-sm.png",
            sprite_css: "sprite-icons sprite-model_matrix-sm",
            page: "/mfc2/php/model_explorer.php?explore_by=bio",
            new_window: "height=700,width=980,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "Explore Online Models by Interests."
        },
        model_tags: {
            title: "Model Tags",
            sm_icon: "tag_model.16x16.png",
            sprite_css: "sprite-icons sprite-tag_model16x16",
            overwrite_page: true,
            page: "/mfc2/php/model_tags.php",
            new_window: "height=700,width=830,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "Search Online Models by Keyword Tags."
        },
        user_tags: {
            title: "Member Tags",
            sm_icon: "tag_user.16x16.png",
            sprite_css: "sprite-icons sprite-tag_user16x16",
            page: "/mfc2/php/model_tags.php?member_mode=true",
            new_window: "height=700,width=830,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "Search Online Members by Keyword Tags."
        },
        member_webcams: {
            title: "Member Webcams",
            sm_icon: "png/member_webcams.16x16.png",
            sprite_css: "sprite-icons sprite-member_webcams16x16",
            page: "/mfc2/php/member_webcams.php",
            new_window: "height=750,width=650,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "View Webcams of other Members."
        },
        transfer_tokens: {
            title: "Transfer Tokens",
            page: "/mfc2/php/token_transfer.php?request=transfer_tokens",
            description: "Transfer tokens to another user account."
        },
        group_shows: {
            title: "Group Shows",
            page: "/mfc2/php/group_shows.php",
            description: "View active and initiated group shows."
        },
        user_chat_images: {
            title: "Chat Images",
            new_window: "height=700,width=950,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/php/user_chat_images.php",
            description: "Choose from and submit your own chat images."
        },
        bring_a_friend: {
            title: "Bring A Friend",
            page: "/mfc2/php/refer_a_friend.php",
            description: "You can get free tokens by bringing your friends to our site."
        },
        members_feature: {
            title: "Member Feature",
            page: "/mfc2/php/signup.php?members_feature=1",
            description: "This is a free members feature, create a for a free acount to gain access."
        },
        purchase_limit_info: {
            title: "Purchase Limit Info",
            page: "/mfc2/php/purchase_limit_info.php",
            description: "Click here to learn more about raising your purchase limits."
        },
        exclusive_gallery: {
            title: "Private Gallery",
            sm_icon: "png/exclusive_gallery.16x16.png",
            sprite_css: "sprite-icons sprite-exclusive_gallery16x16",
            new_window: "height=800,width=1080,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/php/exclusive_gallery.php",
            description: "Private Gallery"
        },
        close_pm_window: {
            description: "Close this Private Message window."
        },
        pm_friend: {
            title: "Private Message",
            new_window: "menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: g_hC['dhtml_path'] + (sTop_ClearCode ? 'pm.' + sTop_ClearCode + '.html' : 'pm.html'),
            description: "Send a Private Message to %USERNAME%."
        },
        pm_prompt: {
            description: "Click here to send a message to another user."
        },
        chat_logs: {
            title: "Archives",
            sm_icon: "png/archive.16x16.png",
            sprite_css: "sprite-icons sprite-archive16x16",
            new_window: "height=750,width=950,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: "/mfc2/php/chat_logs.php",
            description: "Archived Private Shows and Chat Logs."
        },
        user_settings: {
            title: "Personal Options",
            sm_icon: "png/user_settings.16x16.png",
            sprite_css: "sprite-icons sprite-user_settings16x16",
            new_window: "height=790,width=800,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=1",
            page: "/mfc2/php/user_settings.php",
            description: "Additional Options for Chat and More."
        },
        billing_support: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Billing_Help",
            target: '_blank',
            description: "Receive answers to questions regarding billing."
        },
        logout: {
            description: "Logout of your account."
        },
        create_profile: {
            title: "Create Profile",
            sm_icon: "png/my_profile.16x16.png",
            sprite_css: "sprite-icons sprite-my_profile16x16",
            page: "https://web.archive.org/web/20150223133426/http://profiles.myfreecams.com/?action=process_login",
            new_window: "",
            description: "Create your own profile."
        },
        edit_profile: {
            title: "Edit Profile",
            page: "https://web.archive.org/web/20150223133426/http://profiles.myfreecams.com/?action=process_login",
            new_window: "",
            description: "Edit your profile."
        },
        my_profile: {
            title: "My Profile",
            sm_icon: "my_profile_small.gif",
            sprite_css: "sprite-icons sprite-my_profile_small",
            page: "https://web.archive.org/web/20150223133426/http://profiles.myfreecams.com/%USERNAME%",
            new_window: "",
            description: "View your own profile."
        },
        profiles: {
            title: "Profiles",
            page: "https://web.archive.org/web/20150223133426/http://profiles.myfreecams.com/",
            new_window: "",
            description: "Create your own profile and view the profiles of others.",
            target: 'new_window'
        },
        connection_mode: {
            page: "/mfc2/static/connection_mode.html",
            description: "Choose a preferred connection method.",
            target: 'new_window'
        },
        bio: {
            title: "Profiles",
            page: "https://web.archive.org/web/20150223133426/http://profiles.myfreecams.com/%USERNAME%",
            new_window: "",
            description: "View Profile of %USERNAME%",
            target: 'new_window'
        },
        broadcast: {
            title: "My Webcam",
            sm_icon: "png/broadcast.16x16.png",
            sprite_css: "sprite-icons sprite-broadcast16x16",
            page: "/mfc2/static/broadcast.html",
            description: "Share your Webcam with Models and Members.",
            target: "new_window",
            new_window: "height=450,width=560,top=20,left=20,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0"
        },
        toggle_mute_guests: {
            description: "Ignore guests"
        },
        toggle_mute_regs: {
            description: "Ignore basic users"
        },
        toggle_video: {
            description: "Disable or enable video"
        },
        toggle_size: {
            description: "Toggle the size of the video"
        },
        toggle_away: {
            description: "Toggle your away status"
        },
        mute: {
            description: "Toggle the audio on or off"
        },
        toggle_header: {
            description: "Hide or reveal the top portion of MyFreeCams"
        },
        toggle_menu: {
            description: "Toggle this menu"
        },
        rate_a_private: {
            page: "/mfc2/php/account.php?request=rate_a_private",
            target: 'main'
        },
        model_signup: {
            page: "/models/",
            description: "Become a model",
            target: '_blank'
        },
        'terms': {
            title: "Terms",
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Terms_and_Conditions",
            target: '_blank',
            description: "Terms & Conditions"
        },
        '2257': {
            title: "2257",
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/18_U.S.C._2257_Record_Keeping_Requirements_Compliance_Statement",
            target: '_blank',
            description: "2257 Compliance"
        },
        privacy_policy: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Privacy_Policy",
            target: '_blank',
            description: "Privacy Policy"
        },
        contact: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Contact_Support",
            target: '_blank',
            description: "Contact Us"
        },
        contact_help: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Contact_Support",
            target: '_blank',
            description: "Contact Us"
        },
        homepage: {
            title: "Homepage",
            page: g_hC['dhtml_path'] + (sTop_ClearCode ? 'player.' + sTop_ClearCode + '.html' : 'player.html') + "?broadcaster_id=0",
            title: g_hC['site_name'],
            window_title: g_hC['site_name'] + " - The #1 adult webcam community! 24/7 Free webcams, featured live shows with sound!",
            description: "Back to Homepage",
            target: 'main'
        },
        asian_homepage: {
            page: g_hC['dhtml_path'] + (sTop_ClearCode ? 'player.' + sTop_ClearCode + '.html' : 'player.html') + "?broadcaster_id=0",
            title: g_hC['site_name'],
            window_title: g_hC['site_name'] + " - The #1 adult webcam community! 24/7 Free webcams, featured live shows with sound!",
            description: "Asian Webcams & information",
            target: 'main'
        },
        info: {
            title: "Info",
            page: g_hC['dhtml_path'] + "info.html",
            description: "Information",
            target: 'main'
        },
        toplist: {
            page: g_hC['dhtml_path'] + "toplist.html",
            description: "Top List"
        },
        webcams: {
            title: "Webcams",
            page: g_hC['dhtml_path'] + "webcams.html",
            title: "Webcams",
            description: "The webcams of MyFreeCams.com"
        },
        help: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Technical_Help",
            target: '_blank',
            title: "Technical Assistance",
            description: "Receive technical assistance."
        },
        faq: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Instructions_and_Features",
            target: '_blank',
            description: "Find answers to frequently asked questions."
        },
        player: {
            title: "Chat Room",
            page: g_hC['dhtml_path'] + (sTop_ClearCode ? 'player.' + sTop_ClearCode + '.html' : 'player.html'),
            title: "%USERNAME%'s Webcam",
            window_title: "MyFreeCams.com - Video Chat with %USERNAME%",
            new_window: "height=410,width=880,top=20,left=20,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "",
            target: 'main'
        },
        delete_account: {
            page: g_hC['dhtml_path'] + "delete_account.html?delete=1",
            title: "Delete Account"
        },
        under_construction: {
            title: "Under Construction",
            page: g_hC['dhtml_path'] + "under_construction.html",
            title: "Under Construction",
            target: 'main'
        },
        user_temp_banned: {
            page: g_hC['dhtml_path'] + "user_temp_banned.html",
            description: "A model has banned you from the site temporarily",
            target: 'main'
        },
        rule_violation: {
            page: g_hC['dhtml_path'] + "rule_violation.html",
            description: "Rule violation",
            target: 'main'
        },
        user_banned: {
            page: g_hC['dhtml_path'] + "user_banned.html",
            description: "A model has banned you from her room temporarily.",
            target: 'main'
        },
        server_connection_error: {
            page: g_hC['dhtml_path'] + "server_connection_error.html",
            description: "There was a problem connecting to the server.",
            target: 'main'
        },
        java_failed: {
            page: g_hC['dhtml_path'] + "java_failed.html",
            description: "Java or Flash versions are out of date or not installed.",
            target: 'main'
        },
        verified: {
            title: "Verification Complete",
            window_title: g_hC['site_name'] + " - The #1 adult webcam community! 24/7 Free webcams, featured live shows with sound!",
            page: g_hC['dhtml_path'] + "verified.html"
        },
        account: {
            title: "My Account",
            sm_icon: "png/my_account.16x16.png",
            sprite_css: "sprite-icons sprite-my_account16x16",
            page: g_hC['site_path'] + "/php/account.php?request=status",
            description: "View Settings and Options for your account."
        },
        login: {
            page: g_hC['site_path'] + "/php/login.php?request=login",
            description: "Login to your account.",
            target: 'main'
        },
        forgot_password: {
            title: "Retrieve Password",
            page: g_hC['site_path'] + "/php/account.php?request=password",
            description: "Retrieve your username and password."
        },
        unsubscribe: {
            page: g_hC['site_path'] + "/php/signup.php?request=unsubscribe",
            title: "Unsubscribe Confirmation",
            window_title: "Unsubscribe from " + g_hC['site_name'],
            description: " "
        },
        purchase: {
            title: "Purchase Tokens",
            new_window: "height=760,width=820,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            page: g_hC['site_path'] + "/php/purchase.php?request=tokens",
            description: "Buy Tokens"
        },
        tour: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Basic_Tour",
            target: '_blank',
            title: "Tour",
            description: "Tour MyFreeCams"
        },
        premium_feature: {
            title: "Premium Feature",
            page: g_hC['site_path'] + "/php/account.php?request=premium_feature",
            title: "Premium Feature",
            description: "Premium Feature",
            target: 'new_window',
            new_window: "height=600,width=700,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0"
        },
        register: {
            title: "Regsiter for Free",
            page: g_hC['site_path'] + "/php/signup.php?request=register",
            title: "Free Registration",
            description: "Register for your free account.",
            target: 'new_window',
            new_window: "height=500,width=800,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0"
        },
        message: {
            title: "MFC Mail",
            sm_icon: "png/message.16x16.png",
            sprite_css: "sprite-icons sprite-message16x16",
            page: g_hC['site_path'] + "/php/message.php?style_override=www",
            new_window: "height=640,width=820,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=0",
            description: "MyFreeCams Mail"
        },
        bad_link: {
            page: "bad_link.html"
        },
        messenger: {
            title: "Notifications",
            page: g_hC['site_path'] + "/php/account.php?request=messenger",
            description: "Messenger Notifications"
        },
        'private': {
            description: "Go private with %USERNAME% now!"
        },
        voyeur: {
            description: "Spy on %USERNAME%'s show now!"
        },
        tip: {
            title: "Tip",
            page: g_hC['site_path'] + "/php/tip.php?request=tip",
            new_window: "height=500,width=485,status=0,scrollbars=1",
            center_window: 1,
            position: 'center',
            description: "Give Tokens to %USERNAME%"
        },
        news: {
            page: "https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/News",
            sm_icon: "newsfeed.16x16.png",
            sprite_css: "sprite-icons sprite-newsfeed16x16",
            target: '_blank',
            title: "Recent News",
            description: "Recent news at MyFreeCams.com"
        },
        tx_remove_friend: {
            description: "Remove this person from your favorites list"
        },
        tx_add_friend: {
            description: "Add this person to your favorites list"
        },
        tx_remove_bookmark: {
            description: "Remove this person from your bookmarks"
        },
        tx_add_bookmark: {
            description: "Add this person to your bookmarks"
        },
        tx_add_ignore: {
            description: "Ignore this person. You can edit your ignore preferences in the Chat Options menu"
        },
        tx_remove_ignore: {
            description: "Discontinue ignoring this user"
        }
    };

    function MfcBrokenImageDetector(hOptions) {
        if (!hOptions) hOptions = {};
        this.hOptions = {
            nProfileUserId: 0,
            nUserId: 0,
            sToken: '',
            sImgSelector: '',
            sImgParentSelector: '',
            sReportUrl: 'https://web.archive.org/web/20150223133426/http://www.myfreecams.com/mfc2/php/MfcBrokenImageDetector.php',
            bDebug: false
        };
        this._MergeInOptions(hOptions);
        if (this.hOptions.bDebug) this._injectDebugConsole();
    }
    MfcBrokenImageDetector.prototype._MergeInOptions = function(hOptions) {
        for (var option in hOptions) {
            this.hOptions[option] = hOptions[option];
        }
    };
    MfcBrokenImageDetector.prototype._injectDebugConsole = function() {
        $('body').prepend('<div id="mfcImgValidatorDebug" style="position: fixed; top: 5px; left: 5px; color: yellow; background-color: #000; width: 600px; height: 100px; overflow: scroll; padding: 7px; font-size: 12px; font-family: Fixed, monospace; border: 2px #f00 dotted; z-index: 40000;"></div>');
        this.debugConsole = $('#mfcImgValidatorDebug');
    };
    MfcBrokenImageDetector.prototype._debug = function(sMsg) {
        if (!this.hOptions.bDebug) return;
        if (window.console && console.log) console.log(sMsg);
        this.debugConsole.html(this.debugConsole.html() + "<div>" + sMsg + "</div>").scrollTop(this.debugConsole.height());
    };
    MfcBrokenImageDetector.prototype.checkImages = function() {
        var self = this;
        $(this.hOptions.sImgSelector).one('error', function() {
            $(this).data('mfc-failed', true);
            self._debug('IMG FAILED: ' + $(this).attr('src'));
            var parentEl = $(this).closest(self.hOptions.sImgParentSelector);
            if (parentEl.length) self.reportImage(parentEl.attr('id'), $(this).attr('src'));
        }).each(function() {
            if (this.complete || this.readyState === 'completed') return;
            if (!$(this).data('mfc-failed')) {
                var origSrc = $(this).attr('src');
                $(this).attr('src', origSrc);
            }
        });
    };
    MfcBrokenImageDetector.prototype.reportImage = function(sIdentifier, sURL) {
        this._debug('parent id: ' + sIdentifier);
        var data = {
            token: this.hOptions.sToken,
            id: sIdentifier,
            url: sURL,
            profile_user: this.hOptions.nProfileUserId,
            user_id: this.hOptions.nUserId
        };
        $.ajax({
            cache: false,
            url: this.hOptions.sReportUrl,
            success: function(result) {},
            data: data
        });
    };
    /* MfcChatImageControls - places the pic and smily icon in the text input that allows people to choose and emoticon Requirements: ParseEmoteInput defintion (MfcChat.js) MfcDhtmlPopup object user object (g_hSelf) container for control icons object (a div) text input id (id of input element where the code is deposited) reference to A function (mfc a-tag maker & reference) Synopsis: var oChatImageControls = new MfcChatImageControls({ control_container: document.getElementById('chat_image_controls'), text_input_id: 'message_input', mfc_dhtml_popup: g_oDhtmlPopup, user: t.g_hSelf, A: t.A }); <input type=text id=message_input> <div id=chat_image_controls></div>
     oChatImageControls.place_controls(); */
    function MfcChatImageControls(hConstructorOptions) {
        this.hParams = {};
        this.hUA = new MfcUserAgent();
        MfcChatImageControls.nInstanceId = typeof MfcChatImageControls.nInstanceId == 'number' ? MfcChatImageControls.nInstanceId + 1 : 0;
        this.nInstanceId = MfcChatImageControls.nInstanceId;
        MfcChatImageControls.hObjectRef = MfcChatImageControls.hObjectRef || {};
        MfcChatImageControls.hObjectRef[this.nInstanceId] = this;
        if (hConstructorOptions) {
            for (var sK in hConstructorOptions) {
                this.hParams[sK] = hConstructorOptions[sK];
            }
        }
        if (t && t.g_hWindows) {
            for (sWindowKey in t.g_hWindows)
                if (t.g_hWindows[sWindowKey].window == window) this.sCallingWindowName = t.g_hWindows[sWindowKey].name;
        } else {
            this.sCallingWindowName = window.name;
        }
        if (!this.hParams.user) {
            this.hParams.user = 0;
        }
    }
    MfcChatImageControls.prototype.place_controls = function() {
        var sH;
        var sExtra = '';
        if (this.hUA.mobile || this.hUA.tablet) {
            sExtra = "style=\"padding-right:13px;\" ";
        }
        if (this.hParams.user.access_level < 2) {
            sH = this.hParams.A('purchase') + " <img " + sExtra + " id=insert_image_button title=\"Insert an image into chat\" src=\"http://imgs.myfreecams.com/mfc2/images/icons/pic_icon.gif\"></a> <img " + sExtra + " onClick=\"MfcChatImageControls.prototype.load_standard_emoticon_menu(" + this.nInstanceId + ");\" style='cursor:pointer;' src=\"http://imgs.myfreecams.com/mfc2/images/icons/emoticon_icon.png\" ></a> ";
        } else {
            sH = this.hParams.A('user_chat_images', {
                text_input_id: this.hParams.text_input_id,
                is_textarea: this.hParams.is_textarea,
                calling_window_name: this.sCallingWindowName
            }) + " <img " + sExtra + " id=insert_image_button title=\"Insert an image into chat\" src=\"http://imgs.myfreecams.com/mfc2/images/icons/pic_icon.gif\"></a> <img " + sExtra + " onClick=\"MfcChatImageControls.prototype.load_standard_emoticon_menu(" + this.nInstanceId + ");\" style='cursor:pointer;' src=\"http://imgs.myfreecams.com/mfc2/images/icons/emoticon_icon.png\" ></a> ";
        }
        this.hParams.control_container.innerHTML = sH;
    };
    MfcChatImageControls.prototype.load_standard_emoticon_menu = function(nInstanceId) {
        var oSelf = MfcChatImageControls.hObjectRef[nInstanceId];
        oSelf.hParams.mfc_dhtml_popup.open(oSelf.draw_standard_emoticon_menu(nInstanceId));
    };
    MfcChatImageControls.prototype.draw_standard_emoticon_menu = function() {
        var aAllowedEmoticons = new Array(1, 363, 343, 569, 364, 289, 551, 34, 115, 452, 270, 330, 463, 116, 278, 325, 367, 448, 369, 518, 152, 74, 301, 122, 123, 587, 563, 43, 155, 179, 314, 504, 200, 27, 406, 326, 203, 292, 348, 164, 132, 12, 13, 465, 259, 524, 535, 444, 47, 566, 139, 140, 3, 26, 417, 173, 175, 177, 178, 372, 176, 107, 71, 386, 573, 397, 210, 174, 231, 33, 430, 211, 119, 398, 449, 427, 163, 161, 214, 196, 284, 216, 129, 35, 470, 510, 531, 29, 321, 10, 19, 265, 153, 193, 320, 11, 28, 118, 221, 522, 383, 401, 146, 21, 22, 253, 255, 198, 127, 81, 70, 39, 97, 62, 513, 63, 281, 65, 156, 66, 327, 60, 394, 208, 52, 61, 53);
        hAllowedEmoticons_Reverse = {};
        for (var i = 0; i < aAllowedEmoticons.length; i++) {
            hAllowedEmoticons_Reverse[aAllowedEmoticons[i]] = 1;
        }
        var aEmotes = new Array();
        for (var sShortcut in ParseEmoteInput.prototype.m_hEmoticonMap) {
            if (!hAllowedEmoticons_Reverse[ParseEmoteInput.prototype.m_hEmoticonMap[sShortcut]]) continue;
            aEmotes.push("\
 <div style=\"height:28px;padding:0px;margin:0px;vertical-align:middle;float:left;overflow-y:hidden;\"> <i" + "mg style='cursor:pointer;' onClick=\"MfcChatImageControls.prototype.insert_emoticon('" + this.nInstanceId + "','" + sShortcut + "'); return false;\" src=http://img.myfreecams.com/mfc2/images/emoticons/" + ParseEmoteInput.prototype.m_hEmoticonMap[sShortcut] + ".gif border=0 title='" + sShortcut + "' > </div>");
        }
        if (!this.hParams.user.access_level) {
            return " <div style=\"width:410px;height:120px;text-align:right;\"> " + aEmotes.join('') + " <div style=\"float:clear;width:100%;height:25px;vertical-align:bottom;text-align:right;\"> &nbsp; &nbsp;" + this.hParams.A('register') + "Click here</a> to become a member free and access hundreds of emoticons! &nbsp;&nbsp; &nbsp;<a href=\"javascript:MfcChatImageControls.prototype.close_basic_menu('" + this.nInstanceId + "','');\"><b>Close</b></a>&nbsp;&nbsp;</div> </div> ";
        } else {
            aH = new Array();
            aH.push(" <div style=\"width:410px;height:245px;text-align:right;\"> <div style=\"text-align:right;width:410px;height:230px;clear:both;border:0px dashed blue;\"> " + aEmotes.join('') + " </div> ");
            aH.push("<div style=\"width:410px;height:15px;vertical-align:bottom;text-align:right;border:0px dashed red;\">");
            aH.push("<a href=\"#\" onClick=\" window.open('/emoticons/?instance_id=" + this.nInstanceId + "','more_emoticons'); return false; \">More Emoticons</a> | ");
            if (this.hParams.user.access_level >= 2) {
                aH.push(this.hParams.A('user_chat_images', {
                    category: 29,
                    text_input_id: this.hParams.text_input_id,
                    is_textarea: this.hParams.is_textarea,
                    calling_window_name: this.sCallingWindowName
                }));
            } else if (this.hParams.user.access_level == 1) {
                aH.push(this.hParams.A('premium_feature', {
                    style: 'color:gray;'
                }));
            } else {
                aH.push(this.hParams.A('members_feature', {
                    style: 'color:gray;'
                }));
            }
            aH.push("User Submitted Emoticons</span></a> | ");
            if (this.hParams.user.access_level >= 2) {
                aH.push(this.hParams.A('user_chat_images', {
                    text_input_id: this.hParams.text_input_id,
                    is_textarea: this.hParams.is_textarea,
                    calling_window_name: this.sCallingWindowName
                }) + "<span onClick=\"MfcChatImageControls.prototype.close_basic_menu('" + this.nInstanceId + "','');\">");
            } else if (this.hParams.user.access_level == 1) {
                aH.push(this.hParams.A('premium_feature', {
                    style: 'color:gray;'
                }));
            } else {
                aH.push(this.hParams.A('members_feature', {
                    style: 'color:gray;'
                }));
            }
            aH.push("Emoticon Lookup</span></a> |  <a href=\"javascript:MfcChatImageControls.prototype.close_basic_menu('" + this.nInstanceId + "','');\">Close</a></div> </div> ");
            return aH.join('');
        }
    };
    MfcChatImageControls.prototype.close_basic_menu = function(nInstanceId) {
        var oSelf = MfcChatImageControls.hObjectRef[nInstanceId];
        oSelf.hParams.mfc_dhtml_popup.close();
        document.getElementById(oSelf.hParams.text_input_id).focus();
    };
    MfcChatImageControls.prototype.insert_emoticon = function(nInstanceId, sEmoticon) {
        var oSelf = MfcChatImageControls.hObjectRef[nInstanceId];
        oSelf.hParams.mfc_dhtml_popup.close();
        if (sEmoticon && sEmoticon.indexOf(':') == -1) {
            sEmoticon = ':' + sEmoticon;
        }
        if (document.getElementById(oSelf.hParams.text_input_id)) {
            if (document.getElementById(oSelf.hParams.text_input_id).value == undefined) {
                try {
                    document.getElementById(oSelf.hParams.text_input_id).AddText(sEmoticon + ' ');
                } catch (oError) {}
            } else if (oSelf.hParams.is_textarea) {
                document.getElementById(oSelf.hParams.text_input_id).value += sEmoticon + ' ';
                var oTextArea = document.getElementById(oSelf.hParams.text_input_id);
                var nLength = oTextArea.value.length;
                if (oTextArea.setSelectionRange) {
                    oTextArea.setSelectionRange(nLength, nLength);
                    oTextArea.focus();
                } else if (oTextArea.createTextRange) {
                    var oTextRange = oTextArea.createTextRange();
                    oTextRange.moveStart('character', nLength);
                    oTextRange.select();
                }
            } else {
                document.getElementById(oSelf.hParams.text_input_id).value += sEmoticon + ' ';
                document.getElementById(oSelf.hParams.text_input_id).focus();
                document.getElementById(oSelf.hParams.text_input_id).value = document.getElementById(oSelf.hParams.text_input_id).value;
            }
        } else {
            alert("InsertEmoticons found no oSelf.hParams.text_input_id element");
        }
    };
    document.domain = 'myfreecams.com';
    /* ParseEmoteInput - Object for converting input streams into a mixed array of text and image data for formatting as output or sending to a chat server Dependencies: /mfc2/lib/MfcJSON.js - JSON Parser /mfc2/lib/MfcUtilities.js - Ajax helper functions Usage: var parseInput = new ParseEmoteInput(); function myCallback(sParsedString, aMsg) { document.getElementById('somediv').innerHTML = sParsedString; } parseInput.Process(sInput, myCallback);
     */
    function ParseEmoteInput() {
        this.oReq = createRequestObject();
        this.Reset();
        this.nImageRateLimit = 0;
        this.oImageRateLimit_Timer = 0;
    }
    ParseEmoteInput.prototype.Reset = function() {
        this.sParsedString = '';
        this.sPost = '';
        this.aMsg1 = [];
        this.aMsg2 = [];
        this.bDone = false;
        this.callbackFunc = null;
    };
    ParseEmoteInput.prototype.Process = function(sInp, fpCallback) {
        var nFound = 0;
        this.Reset();
        this.callbackFunc = fpCallback;
        sInp = sInp.replace(/#~[^~]*~#/g, '');
        this.DecodeInput(sInp);
        for (var nCx = 0; nCx < this.aMsg1.length; nCx++) {
            if (typeof(this.aMsg1[nCx]) == 'object') {
                this.sPost += "a" + nCx + "=" + escape(this.aMsg1[nCx].val) + "&";
                if ((nImg = this.m_hEmoticonMap[this.aMsg1[nCx].val]) != null && nFound == 0) {
                    var sUrl = "https://web.archive.org/web/20150223133426/http://img.myfreecams.com/mfc2/images/emoticons/" + nImg + ".gif";
                    var obj = {};
                    obj['txt'] = this.aMsg1[nCx].val;
                    obj['url'] = sUrl;
                    obj['code'] = "#~e," + nImg + "," + this.aMsg1[nCx].val + "~#";
                    this.aMsg2.push(obj);
                    this.sParsedString += obj['code'];
                } else {
                    nFound++;
                }
            } else {
                this.sPost += "t" + nCx + "=" + escape(this.aMsg1[nCx]) + "&";
                if (nFound == 0) {
                    this.sParsedString += this.aMsg1[nCx];
                    this.aMsg2.push(this.aMsg1[nCx]);
                }
            }
        }
        if (nFound == 0) {
            this.bDone = true;
            if (this.callbackFunc) this.callbackFunc(this.sParsedString, this.aMsg2);
        } else {
            this.aMsg2 = [];
            this.AjaxSend();
        }
        return this.bDone;
    };
    ParseEmoteInput.prototype.DecodeInput = function(sVal) {
        var sBefore = '',
            sMatch = '',
            sAfter = '';
        sVal = sVal.replace(";)", ":;)");
        var re = [];
        if (re = sVal.match(/^(.*?)(http[s]?:\/\/\S+)(.*)$/)) {
            sBefore = re[1];
            sMatch = re[2];
            sAfter = re[3];
        } else {
            sBefore = sVal;
        }
        this.SplitInput(sBefore);
        if (sMatch.match(/\.(gif|jpeg|jpg|png)$/i) || sMatch.match(/\.(gif|jpeg|jpg|png)\?\S*$/i)) {
            this.aMsg1.push({
                'val': sMatch
            });
        } else if (sMatch) {
            this.aMsg1.push(sMatch);
        }
        if (sAfter) this.SplitInput(sAfter);
    };
    ParseEmoteInput.prototype.SplitInput = function(sVal) {
        var nPos = 0,
            nIdx, nLen = sVal.length;
        var sTmp;
        while (nPos < nLen) {
            sTmp = sVal.substring(nPos);
            if (!sTmp.match(/:[\w\-\);\(=\?\*]/)) {
                this.aMsg1.push(sTmp);
                nPos = nLen;
            } else {
                nIdx = sTmp.indexOf(':');
                if (nIdx > 0) this.aMsg1.push(sTmp.substring(0, nIdx));
                var nTmpPos = nIdx + 1,
                    nTmpLen = sTmp.length;
                while (nTmpPos < nTmpLen) {
                    var ch = sTmp.charAt(nTmpPos);
                    if (ch == ' ' || ch == '\t' || ch == '\n' || ch == '\r' || ch == ':') break;
                    nTmpPos++;
                }
                var nCodeLen = nTmpPos - nIdx;
                if (nCodeLen > 0) {
                    var sCode = sTmp.substring(nIdx + 1, nTmpPos);
                    if (/\D/.test(sCode) == false && (nIdx > 0 && /\D/.test(sTmp.charAt(nIdx - 1)) == false)) this.aMsg1.push(":" + sCode);
                    else this.aMsg1.push({
                        'val': sCode
                    });
                }
                nPos += nIdx + nCodeLen;
            }
        }
    };
    ParseEmoteInput.prototype.AjaxSend = function() {
        var sRequest = "/mfc2/php/ParseChatStream.php?" + this.sPost + "&" + Math.random();
        this.oReq.open("get", sRequest);
        this.oReq.onreadystatechange = bind(this, this.AjaxResponse);
        this.oReq.send(null);
    };
    ParseEmoteInput.prototype.Reset_ImageRateLimit = function() {
        this.nImageRateLimit = 0;
    };
    ParseEmoteInput.prototype.AjaxResponse = function() {
        if (this.oReq.readyState != 4) return;
        this.oImageRateLimit_Timer = setTimeout(bind(this, this.Reset_ImageRateLimit), 60000);
        this.aMsg2 = [];
        this.sParsedString = '';
        try {
            this.aMsg2 = JSON.parse(this.oReq.responseText);
        } catch (e) {
            if (document.cookie.match(/=mfcuser;/)) {
                alert(this.oReq.responseText);
            }
            this.aMsg2[0] = {
                err: 1,
                txt: "error_invalid_image",
                code: "#~e,1000,error_invalid_image~#"
            };
        }
        if (this.aMsg2) {
            for (var n = 0; n < this.aMsg2.length; n++) {
                if (typeof(this.aMsg2[n]) == 'object') {
                    this.nImageRateLimit++;
                    if (this.nImageRateLimit > 9) {
                        this.aMsg2[n].code = "#~e,1000,too_many_images_posted_in_a_short_period_of_time~#";
                    } else if (this.aMsg2[n].err) {
                        if (this.aMsg2[n].txt.indexOf("error_") == -1) {
                            this.aMsg2[n].code = this.aMsg2[n].txt;
                        } else {
                            this.aMsg2[n].code = "#~e,1000," + this.aMsg2[n].txt + "~#";
                        }
                    }
                    this.sParsedString += this.aMsg2[n].code
                } else this.sParsedString += this.aMsg2[n];
            }
        } else {}
        this.bDone = true;
        if (this.callbackFunc) this.callbackFunc(this.sParsedString, this.aMsg2);
    };
    ParseEmoteInput.prototype.m_hEmoticonMap = {
        "08": 67,
        "-)": 1,
        ")": 1,
        ";)": 2,
        "1eye": 68,
        "(": 26,
        "2": 70,
        "=]": 34,
        "34": 71,
        "-$": 37,
        "?": 46,
        "48": 72,
        "49": 73,
        "59": 74,
        "_)": 6,
        "-*": 64,
        "*": 64,
        "838261": 75,
        "ablow": 76,
        "admin": 77,
        "afro2": 78,
        "afro": 79,
        "agasi": 80,
        "aggressive": 81,
        "ala": 82,
        "alien2": 83,
        "alien": 45,
        "alucard": 85,
        "angel": 86,
        "angel_hypocrite": 87,
        "angel_innocent": 88,
        "angel_not": 89,
        "angrier": 90,
        "angry": 20,
        "angry2": 91,
        "angst": 93,
        "animal_rooster": 94,
        "animals_bunny1": 95,
        "animals_bunny2": 96,
        "appl": 97,
        "arabia": 98,
        "argue3": 99,
        "arrow_1": 100,
        "arrow_2": 101,
        "arrow_3": 102,
        "arrow_4": 103,
        "arrow": 48,
        "arrow_5": 104,
        "arrow_6": 105,
        "badair": 106,
        "bag": 107,
        "balloon": 108,
        "bash": 109,
        "basketball": 110,
        "batman": 111,
        "bb": 112,
        "beaver": 41,
        "bee": 113,
        "beer": 52,
        "biggrin": 115,
        "biggrin2": 114,
        "biggrinthumb": 116,
        "bigsmile": 117,
        "bird": 59,
        "bleh": 118,
        "blink2": 119,
        "blink": 31,
        "blue_bandana": 120,
        "blush": 123,
        "blush2": 121,
        "blush-anim-cl": 122,
        "blushing": 125,
        "blushing2": 124,
        "boat": 126,
        "bomb": 127,
        "book": 128,
        "bored": 130,
        "bored2": 129,
        "borg": 131,
        "bot": 132,
        "boxed": 134,
        "boxed2": 133,
        "brokeheart": 63,
        "busted_blue": 136,
        "busted_cop": 137,
        "busted_red": 138,
        "bye": 139,
        "bye2": 140,
        "canadian": 143,
        "captain": 144,
        "cat": 62,
        "censored": 146,
        "censored2": 145,
        "chef": 147,
        "chefsp": 148,
        "chih": 149,
        "chinese": 150,
        "chris": 151,
        "cig": 53,
        "cigarette": 53,
        "clap_1": 152,
        "closedeyes": 154,
        "closedeyes2": 153,
        "cloud9": 155,
        "clover": 156,
        "clown": 158,
        "clown2": 157,
        "coffee": 54,
        "coke": 55,
        "cold": 160,
        "cold2": 159,
        "confused_1": 161,
        "confused": 32,
        "Confuzzled": 163,
        "console": 164,
        "construction": 165,
        "cool1": 166,
        "cool": 12,
        "cool2": 167,
        "cool3": 168,
        "cowboy": 170,
        "cranky": 171,
        "crash": 172,
        "cray": 173,
        "crazy": 19,
        "cry_1": 175,
        "cry": 26,
        "cryin_smilie": 177,
        "cryss": 178,
        "cuckoo": 29,
        "cupidarrow": 179,
        "curlers": 180,
        "_D": 6,
        "-D": 6,
        "D": 6,
        "dance": 181,
        "darthvader": 182,
        "death": 183,
        "detective": 185,
        "detective2": 184,
        "devil_1": 186,
        "devil": 188,
        "devil_2": 187,
        "director": 189,
        "dirol": 190,
        "disguise": 192,
        "disguise2": 191,
        "disgust1": 193,
        "disgust": 194,
        "doc": 195,
        "dont": 197,
        "dontgetit": 196,
        "dork": 35,
        "doublef": 198,
        "Dr_Evil": 199,
        "dribble": 200,
        "drinks_nologo": 201,
        "drinks_pepsi": 202,
        "drool": 203,
        "dry": 23,
        "dulya": 205,
        "dunno": 206,
        "Durak": 207,
        "eat": 208,
        "ee": 209,
        "eek": 210,
        "eek_yello": 211,
        "egg": 212,
        "egypt": 213,
        "eh": 214,
        "elvis": 215,
        "embarrassed": 14,
        "erm": 24,
        "ermm": 216,
        "essen": 217,
        "euro": 218,
        "evil_1": 219,
        "evil_3": 220,
        "evil": 39,
        "evil_4": 221,
        "evilguy": 223,
        "excl": 225,
        "exclamation": 224,
        "eye_red": 226,
        "fart": 227,
        "fartnew2": 228,
        "fartnew": 229,
        "fear_1": 230,
        "fear2": 231,
        "fear": 232,
        "figa": 233,
        "fingal": 234,
        "fireman_1": 235,
        "fireman": 236,
        "flag_austria": 237,
        "flag_french": 238,
        "flag_germany": 239,
        "flag_schweiz": 240,
        "flipoff": 59,
        "flower": 65,
        "flowers": 241,
        "flush": 242,
        "football": 243,
        "footinmouth": 244,
        "foyer": 245,
        "fredy": 246,
        "frown": 18,
        "fruits_apple": 248,
        "fruits_cherry": 249,
        "fruits_orange": 250,
        "frusty": 251,
        "fullmop": 252,
        "funny": 8,
        "furious": 253,
        "fuyou_1": 254,
        "fuyou_2": 255,
        "fyou": 256,
        "g": 260,
        "geek": 35,
        "gent": 258,
        "george": 259,
        "ghost1": 261,
        "ghost2": 262,
        "ghostface": 263,
        "gigi": 264,
        "glare": 265,
        "good": 266,
        "goss": 267,
        "greedy": 268,
        "grin": 6,
        "gulp": 271,
        "gun2": 272,
        "gun_guns": 273,
        "gun_rifle": 274,
        "ha": 8,
        "hammer_1": 275,
        "hammer": 276,
        "happy": 36,
        "happybirth": 277,
        "harhar": 279,
        "hat": 280,
        "hb": 281,
        "heart": 66,
        "hehe": 283,
        "helpsmilie": 284,
        "hi": 285,
        "hippi": 286,
        "hit": 287,
        "hitler": 288,
        "hmm": 289,
        "holloween": 290,
        "horns": 291,
        "horny": 27,
        "hug": 292,
        "huh": 17,
        "ibdrool": 294,
        "icecream": 295,
        "icon6": 296,
        "idea_1": 297,
        "idea": 298,
        "idiot": 299,
        "info": 300,
        "in_love": 301,
        "inlove": 43,
        "ispug": 302,
        "jc": 303,
        "jerk": 304,
        "jester": 305,
        "jockey": 306,
        "Jumpy": 307,
        "kamikaze": 308,
        "kar": 309,
        "kenshin2": 310,
        "kicher": 311,
        "kid": 312,
        "king": 313,
        "kiss1": 314,
        "kiss": 64,
        "kisss": 315,
        "kosoy": 316,
        "krider": 317,
        "krilin": 318,
        "kuss": 319,
        "kwasny": 320,
        "lac": 321,
        "lady": 322,
        "lamer": 323,
        "laugh_1": 324,
        "laugh": 8,
        "licklips": 326,
        "lips": 327,
        "lmao1": 328,
        "lock": 329,
        "lol_1": 330,
        "lol1": 331,
        "lol": 8,
        "lookaround": 333,
        "lu": 334,
        "mad": 21,
        "mad_2": 335,
        "mail1": 337,
        "mail2": 338,
        "man": 339,
        "marinheiro": 340,
        "matrix2": 341,
        "megalol": 342,
        "mellow": 343,
        "mobile": 344,
        "mog": 345,
        "moptop": 346,
        "mug": 52,
        "mushy": 348,
        "music": 57,
        "music_blues": 349,
        "music_dj": 350,
        "music_walkman": 352,
        "music_whistling_1": 353,
        "music_whistling": 354,
        "native": 355,
        "nerd": 35,
        "new": 360,
        "newconfus": 359,
        "ninja": 44,
        "no_1": 362,
        "no": 25,
        "noexpression": 363,
        "noimageemot": 365,
        "nono": 366,
        "nosweat": 367,
        "notify": 368,
        "notworthy": 369,
        "novicok": 370,
        "nuke": 58,
        "o)": 4,
        "ohmy": 16,
        "ohplease": 10,
        "omg": 33,
        "online2long": 373,
        "osama": 374,
        "P": 11,
        "paperbag1": 375,
        "paperbag3": 376,
        "pardon": 377,
        "partytime": 378,
        "peace": 379,
        "pepsi": 56,
        "phone_1": 380,
        "phone": 381,
        "photo": 382,
        "pig": 383,
        "pilot": 384,
        "pimp": 385,
        "pinch": 386,
        "pipe1": 387,
        "pirate2": 388,
        "pirate": 40,
        "pissed": 22,
        "plane": 390,
        "play_ball": 391,
        "pleasantry": 392,
        "point": 48,
        "police": 393,
        "poo": 61,
        "poop": 61,
        "pop": 55,
        "potty": 394,
        "pray": 395,
        "prop": 396,
        "puke": 397,
        "punch": 398,
        "pussy": 62,
        "question1": 399,
        "question": 46,
        "ranting_w": 401,
        "rasta": 402,
        "red_bandana": 403,
        "redface": 404,
        "red_indian": 405,
        "renske": 406,
        "respect": 407,
        "respekt": 408,
        "retard": 29,
        "rev": 409,
        "rinoa": 410,
        "rip": 411,
        "rofl": 412,
        "rolleyes": 10,
        "rose": 65,
        "rotate": 414,
        "row": 415,
        "rupor": 416,
        "sad_1": 417,
        "sad_2": 418,
        "sad": 26,
        "sad_3": 419,
        "sadbye": 3,
        "saddam": 420,
        "samurai": 44,
        "santa_1": 422,
        "santa": 423,
        "schmoll": 424,
        "schnauz": 425,
        "scooter": 426,
        "search": 427,
        "shifty": 428,
        "shit": 61,
        "shock_1": 430,
        "shock": 33,
        "shocked": 432,
        "shocking": 434,
        "shok": 435,
        "showoff": 436,
        "shrug": 437,
        "shuriken": 438,
        "shutup": 439,
        "sick_1": 440,
        "sick": 441,
        "slap": 442,
        "sleep_1": 443,
        "sleep": 444,
        "sleepy": 47,
        "sly": 38,
        "smartass": 447,
        "sm_clap": 448,
        "sm_crazy": 449,
        "sm_fool": 450,
        "sm_haha": 451,
        "smile_1": 452,
        "smile": 7,
        "smilewink": 454,
        "smilie1": 455,
        "smilie3": 456,
        "smilie4": 457,
        "Smilie": 458,
        "smilie_osx": 459,
        "smilie_palm": 460,
        "smilie_tux": 461,
        "smilie_xp": 462,
        "sm_lol": 463,
        "smoke_1": 464,
        "smoke": 465,
        "smoking": 13,
        "smurf": 466,
        "sm_victory": 467,
        "sm_yahoo": 468,
        "Sneaktongue": 469,
        "sneaky": 470,
        "snorkel": 471,
        "sombrero2": 472,
        "sorry": 473,
        "spidy": 474,
        "sp_ike": 475,
        "sq_yellow_angry": 476,
        "sq_yellow_arg": 477,
        "sq_yellow_biggrin": 478,
        "sq_yellow_blink": 479,
        "sq_yellow_blush": 480,
        "sq_yellow_closedeyes": 481,
        "sq_yellow_cool": 482,
        "sq_yellow_cry": 483,
        "sq_yellow_dry": 484,
        "sq_yellow_glare": 485,
        "sq_yellow_goodmood": 486,
        "sq_yellow_happy": 487,
        "sq_yellow_huh": 488,
        "sq_yellow_laugh": 489,
        "sq_yellow_mellow": 490,
        "sq_yellow_notti": 491,
        "sq_yellow_ohmy": 492,
        "sq_yellow_playful": 493,
        "sq_yellow_sad": 494,
        "sq_yellow_sick": 495,
        "sq_yellow_smile": 496,
        "sq_yellow_specky": 497,
        "sq_yellow_surprise": 498,
        "sq_yellow_tongue": 499,
        "sq_yellow_unhappy": 500,
        "sq_yellow_unsure": 501,
        "sq_yellow_wink": 502,
        "strongsad": 503,
        "suck": 504,
        "sumo": 505,
        "sun_smiley": 506,
        "super": 507,
        "superlol": 508,
        "surrender": 509,
        "suspect": 510,
        "sweatdrop": 511,
        "td": 51,
        "teehee": 512,
        "throb": 513,
        "thumb": 515,
        "thumbdown": 51,
        "thumbsdown": 51,
        "thumbsup": 50,
        "thumbs-up": 516,
        "thumbup": 50,
        "thumb_yello": 519,
        "tired": 47,
        "tongue1": 520,
        "tongue2": 521,
        "tongue": 523,
        "tongue5": 522,
        "tongue_ss": 524,
        "tooth": 525,
        "tounge": 11,
        "toxic": 58,
        "trumpet": 526,
        "tu": 50,
        "turned": 527,
        "tv": 60,
        "um": 24,
        "umnik": 528,
        "unknw": 529,
        "unlock": 530,
        "unsure": 531,
        "up": 532,
        "v": 535,
        "vertag": 533,
        "verysad": 534,
        "w00t1": 536,
        "w00t2": 537,
        "w00t": 538,
        "wacko": 539,
        "wallbash": 540,
        "wassat": 541,
        "watsup": 542,
        "wave": 139,
        "weep": 543,
        "weight_lift2": 544,
        "weight_lift": 545,
        "whatsthat": 546,
        "wheelchair": 547,
        "whistle": 28,
        "whistlesmile": 548,
        "whistling": 28,
        "wiggle": 549,
        "wince": 30,
        "wink_1": 550,
        "wink_2": 551,
        "wink_3": 552,
        "wink_5": 553,
        "wink": 556,
        "wink_6": 554,
        "wink_7": 555,
        "wolfwood": 557,
        "wolverine2": 558,
        "wolverine": 559,
        "wounded1": 560,
        "wounded2": 561,
        "wow": 5,
        "wub2": 562,
        "wub": 43,
        "x": 42,
        "xmas": 564,
        "yak": 565,
        "yawn": 566,
        "yeahright": 567,
        "yel": 568,
        "yes": 569,
        "yikes": 570,
        "yinyang": 571,
        "ymca": 572,
        "yucky": 573,
        "yuk1": 574,
        "zip": 575,
        "zippy": 576,
        "zoo_cat": 577,
        "zoo_donatello": 578,
        "zoo_fox_1": 579,
        "zoo_fox_2": 580,
        "zoo_fox": 583,
        "zoo_homestar": 584,
        "zoo_taz": 585,
        "zorro": 586
    };
    /* ParseEmoteOutput - 
     Requirement: blank.html, a minimal HTML file used for popup window permission clearance Method: Parse([ parsable message string ], [ associative array of options, must include access_level ] ) Synopse: var g_oParseEmoteOutput = new ParseEmoteOutput(); var sRawMessage = "hi, how are you! #~e,1,)~#"; var nUserAccessLevel = 2; var sParsedMessage = g_oParseEmoteOutput.Parse(sRawMessage, { access_level: nUserAccessLevel }); alert(sParsedMessage ); */
    function ParseEmoteOutput() {};
    ParseEmoteOutput.prototype.Parse = function(sMessage, hParams) {
        hParams = hParams || {};
        var nParseLimit = 0;
        var bAllowUserImages = true;
        if (typeof(hParams['access_level']) == 'undefined') hParams['access_level'] = 2;
        if (typeof(hParams['allow_user_images']) != 'undefined' && hParams['allow_user_images'] == 0) bAllowUserImages = false;
        oImgRegExPattern = /#~(e|c|u|ue),(\w+)(\.?)(jpeg|jpg|gif|png)?,([\w\-\:\);\(\]\=\$\?\*]{0,48})~#/;
        var re = [];
        while ((re = sMessage.match(oImgRegExPattern)) && nParseLimit < 10) {
            var sType = re[1] || '';
            var sFileCode = re[2] || '';
            var sDot = re[3] || '';
            var sFileExtension = re[4] || '';
            var sShortcut = re[5] || '';
            var sImg = sFileCode + sDot + sFileExtension;
            var sMediumImg = sFileCode + sDot + '200x.' + sFileExtension;
            this.mfcImageHost = new MfcImageHost();
            var sHost = this.mfcImageHost.host(sFileCode);
            var sTypeDir = sType;
            if (sType == 'e') {
                sImg += '.gif';
            } else if (sType == 'ue') {
                sTypeDir = 'u';
            }
            if (sShortcut) {
                sShortcut = ':' + sShortcut;
            }
            var sImgPath = '';
            sImgPath = "http://" + sHost + "/chat_images/" + sTypeDir + "/";
            if (sType != 'e') {
                sImgPath += sImg.substring(0, 2) + "/";
            }
            var sSrc = '';
            var sTitle = sShortcut;
            if (bAllowUserImages == false) {
                sSrc = "http://" + sHost + "/chat_images/e/588.gif";
            } else if (sType == 'e' || (sType == 'ue' && hParams['access_level'] > 0)) {
                sSrc = sImgPath + sImg;
            } else if (hParams['access_level'] > 1 || hParams['offline'] || hParams['access_level'] == -1) {
                sSrc = sImgPath + sFileCode + '.x50.' + sFileExtension;
            } else {
                sMessage = sMessage.replace(oImgRegExPattern, "<i" + "mg src=\"http://www.myfreecams.com/chat_images/e/1000.gif\" title='premium image'>");
                sTitle = 'premium image';
            }
            var sOnClickCode;
            if (sType == 'e') {
                sOnClickCode = '';
            } else if (hParams['onclick_code']) {
                sOnClickCode = hParams['onclick_code'];
                sOnClickCode = sOnClickCode.replace(/%IMAGE%/, sImgPath + sImg);
                sOnClickCode = sOnClickCode.replace(/%SHORTCUT%/, sShortcut);
            } else {
                sOnClickCode = " ParseEmoteOutput.prototype.Popup('" + sImgPath + sImg + "'); ";
            }
            sMessage = sMessage.replace(oImgRegExPattern, "<i" + "mg src=\"" + sSrc + "\" " + (hParams['onload_code'] ? " style='margin-top:30px;' onLoad=\"this.style.marginTop='0px';" + hParams['onload_code'] + "\"" : '') + (sOnClickCode ? " onClick=\"" + sOnClickCode + "\"" : '') + (sTitle ? " title='" + sTitle.replace(/'/, '') + "'" : '') + " onMouseover=\"if(this.height >= 50 ){ this.style.cursor='pointer'; }\">");
            nParseLimit++;
        }
        return sMessage;
    };
    ParseEmoteOutput.prototype.Popup = function(sImgUrl) {
        oWin = window.open('blank.html', '_blank', 'status=0,toolbar=0,height=10,width=10');
        oWin.document.write(" <ht" + "ml> <bo" + "dy style=margin:0px;> <im" + "g src=" + sImgUrl + " onLoad=\" window.resizeTo(this.width,this.height+25); \" onClick=\" window.close(); \" > </bo" + "dy> </ht" + "ml> ");
    };
    var d = d || document;
    var g_hC = g_hC || {};
    var hGraphicsSettings = hGraphicsSettings || {};
    var g_hCache = g_hCache || {};
    var g_hDocumentReferences = g_hDocumentReferences || {};

    function MfcGraphics(hConstructorOptions) {
        this.hCache = {};
        this.oSelf = this;
        hUA = new MfcUserAgent();
        var g_hC = g_hC || {};
        this.hSettings = {};
        for (var sK in g_hC) {
            this.hSettings[sK] = g_hC[sK];
        }
        if (hConstructorOptions) {
            for (var sK in hConstructorOptions) {
                this.hSettings[sK] = hConstructorOptions[sK];
            }
        }
        this.load_style();
    }
    MfcGraphics.prototype.load_style = function() {
        if (typeof(g_nVcc) == 'undefined') {
            g_nVcc = 1;
        }
        var sStyle = 'mfc';
        if (this.hSettings['no_style']) {
            return;
        }
        if (location.href.match(/\/mfc-/)) {
            this.hSettings['site_path'] = '';
            this.hSettings['img_path'] = "/mfc2/styles/" + sStyle + "/";
        } else {
            this.hSettings['site_path'] = "https://web.archive.org/web/20150223133426/http://www.myfreecams.com";
            this.hSettings['img_path'] = "https://web.archive.org/web/20150223133426/http://a.mfcimg.com/mfc2/styles/" + sStyle + "/";
        }
        var oCssNode = document.createElement('link');
        oCssNode.type = 'text/css';
        oCssNode.rel = 'stylesheet';
        oCssNode.href = this.hSettings['site_path'] + '/mfc2/lib/style.css?no_cache=' + g_nVcc;
        oCssNode.media = 'screen';
        document.getElementsByTagName("head")[0].appendChild(oCssNode);
        this.hSettings['style_path'] = this.hSettings['site_path'] + "/mfc2/styles/" + sStyle + "/";
        var oCssNode = document.createElement('link');
        oCssNode.type = 'text/css';
        oCssNode.rel = 'stylesheet';
        oCssNode.href = this.hSettings['style_path'] + "style.css?no_cache=" + g_nVcc;
        oCssNode.media = 'screen';
        document.getElementsByTagName("head")[0].appendChild(oCssNode);
    };
    MfcGraphics.prototype.container_sprites = function(sContainer) {
        hContainerSettings = {
            container: {
                tl: "<div class='sprite-icons sprite-tl'></div>",
                tr: "<div class='sprite-icons sprite-tr'></div>",
                bl: "<div class='sprite-icons sprite-bl'></div>",
                br: "<div class='sprite-icons sprite-br'></div>"
            }
        };
        return hContainerSettings[sContainer];
    };
    MfcGraphics.prototype.container = function(sOptions, sContent) {
        if (location.search.match(/nocontainers/)) return;
        var hOptions = {};
        for (var sK in this.hSettings) {
            hOptions[sK] = this.hSettings[sK];
        }
        aOptions = sOptions.match(/\w+/g);
        for (var n = 0; n < aOptions.length; n++) {
            hOptions[aOptions[n]] = true;
        }
        var sDimensions = "";
        var sExtraContentStyle = "";
        var sExtraContentClass = "";
        if (hOptions['menu_container']) sContainer = 'menu_container';
        else if (hOptions['input_container']) sContainer = 'input_container';
        else if (hOptions['sub_content_container']) sContainer = 'sub_content_container';
        else if (hOptions['alt_content_container']) sContainer = 'alt_content_container';
        else if (hOptions['content_container']) sContainer = 'content_container';
        else if (hOptions['popup_container']) sContainer = 'popup_container';
        else sContainer = 'container';
        var bIsFramed = 0;
        try {
            if ((!g_ExternalCaller && top.location.href != window.location.href) || (location.href.indexOf('style_override=profiles') > -1)) {
                bIsFramed = 1;
            }
        } catch (oError) {
            bIsFramed = 1;
        }
        if (bIsFramed && sContainer == 'container' && location.href.indexOf('/top') == -1 && location.href.indexOf('/player') == -1 && location.href.indexOf('/pm') == -1 && location.href.indexOf('chat_logs.php') == -1 && location.href.indexOf('user_notepad.php') == -1 && location.href.indexOf('user_settings.php') == -1 && !hOptions['no_override']) {
            if (sContainer == 'menu_container') {
                sContainer = 'alt_content_container';
            } else if (sContainer == 'input_container') {
                return;
            }
            hOptions['container_class_only'] = 1;
            document.body.style.margin = '0px';
            document.body.className = 'inner_body';
        } else if (!opener && parent) {
            var nEmbed = 0;
            try {
                if (!g_ExternalCaller && top.location.href.match(/profiles.myfreecams.com/) && (parent.location.href != location.href || parent.name == 'top_level')) {
                    nEmbed = 1;
                }
            } catch (oError) {
                nEmbed = 1;
            }
            try {
                if (nEmbed) {
                    hOptions['no_style'] = 1;
                    if (sContainer == 'container') {
                        sContainer = 'content_container';
                    } else if (sContainer == 'input_container') {
                        return;
                    }
                    sOptions += ' ' + sContainer;
                    document.body.className = 'inner_body';
                }
            } catch (oError) {}
        }
        if (!sContent && this.hCache[sOptions]) {
            return this.hCache[sOptions];
        }
        if (hOptions['expanded']) {
            sDimensions = " height=100% width=100% ";
            sExtraContentStyle = "font-size:13px;";
        } else if (hOptions['contracted'] || hOptions['input_container']) {
            sDimensions = " ";
            sExtraContentStyle = "font-size:1px;";
        } else {
            sDimensions = " width=100% ";
            sExtraContentStyle = "font-size:13px;";
        }
        if (sExtraContentClass) {
            sExtraContentClass = " class='" + sExtraContentClass + "'";
        }
        var sTop = '',
            sBottom = '',
            sStyleDivs = '';
        if (hOptions['container_class_only']) {
            sTop = " <div class=" + sContainer + "> <div class=" + sContainer + "_table_td> ";
            sBottom = " </div> </div> ";
        } else if (hOptions['stylesheet'] || hOptions['no_style']) {
            sTop = " <div class=container_padding> <div class=container_transparency > <div class=container > ";
            sBottom = " </div> </div> </div>\
 ";
        } else if (!hUA.IE || hUA.IE > 9) {
            sTop = " <table cellpadding=0 cellspacing=0 " + sDimensions + " border=0>\n <td class='" + sContainer + "_wrapper'>\n <table class='" + sContainer + "_table' " + sDimensions + " cellpadding=0 cellspacing=0 border=0> <td class='" + sContainer + " " + sContainer + "_css3 " + sContainer + "_table_td " + sContainer + "_outer_content " + sExtraContentClass + "' valign=top style=\"" + sExtraContentStyle + "\"> ";
            sBottom = " </td> </table> </td> </table> ";
        } else {
            var hCorners = this.container_sprites(sContainer);
            if (!hCorners) {
                if (sContainer !== 'popup_container') {
                    hCorners = {
                        tl: "<i" + "mg class=" + sContainer + "_img_tl src=\"" + hOptions['img_path'] + "/images/" + sContainer + "/tl.gif\">",
                        tr: "<i" + "mg class=" + sContainer + "_img_tr src=\"" + hOptions['img_path'] + "/images/" + sContainer + "/tr.gif\">",
                        bl: "<i" + "mg class=" + sContainer + "_img_bl src=\"" + hOptions['img_path'] + "/images/" + sContainer + "/bl.gif\">",
                        br: "<i" + "mg class=" + sContainer + "_img_br src=\"" + hOptions['img_path'] + "/images/" + sContainer + "/br.gif\">"
                    };
                } else {
                    hCorners = {
                        tl: '',
                        tr: '',
                        bl: '',
                        br: ''
                    };
                }
            }
            sTop = "\n <table cellpadding=0 cellspacing=0 " + sDimensions + " border=0>\n <td class='" + sContainer + "_wrapper'>\n <table class='" + sContainer + "_table' " + sDimensions + " cellpadding=0 cellspacing=0 border=0 width=100%>\n <tr>\n <td colspan=2 class='graphic " + sContainer + "_table_td " + sContainer + "_l' valign=top align=left style=\"background-image:url('" + hOptions['img_path'] + "/images/" + sContainer + "/t.gif'); \">" + hCorners.tl + "</td>\n <td rowspan=2 class='graphic " + sContainer + "_table_td graphic " + sContainer + "_t' valign=top align=right style=\"background:url('" + hOptions['img_path'] + "/images/" + sContainer + "/r.gif') repeat-y scroll top right;\">" + hCorners.tr + "</td>\n </tr>\n <tr>\n <td rowspan=2 class='graphic " + sContainer + "_table_td " + sContainer + "_l' valign=bottom align=left\n\
 style=\"background:url('" + hOptions['img_path'] + "/images/" + sContainer + "/l.gif') repeat-y scroll bottom left;vertical-align:bottom;\">" + hCorners.bl + "</td>\n <td height=100% width=100% class='" + sContainer + " " + sContainer + "_table_td " + sContainer + "_outer_content " + sExtraContentClass + "' valign=top style=\"" + sExtraContentStyle + "\">";
            sBottom = "</td>\n </tr>\n <tr>\n <td colspan=2 class='graphic " + sContainer + "_table_td " + sContainer + "_b' valign=bottom align=right\n style=\"background:url('" + hOptions['img_path'] + "/images/" + sContainer + "/b.gif') repeat-x scroll bottom right;\">" + hCorners.br + "</td>\n </tr>\n </table>\n </td>\n </table>\n ";
        }
        var sH = "";
        if (hOptions['top']) {
            sH = sTop;
        } else if (hOptions['bottom']) {
            sH = sBottom;
        } else {
            sH = sTop + sContent + sBottom;
        }
        this.hCache[sOptions] = sH;
        return sH;
    };
    MfcGraphics.prototype.heading = function(sText, sIcon, hOptions) {
        var sIconHtml = '';
        if (sIcon) {
            if (!this.mfcImageHost) {
                this.mfcImageHost = new MfcImageHost();
            }
            var sHost = this.mfcImageHost.host(sText);
            var sImagePath = '';
            if (sIcon.indexOf('ico/') > -1) {
                sImagePath = "http://" + sHost + "/";
            } else {
                sImagePath = "http://" + sHost + "/mfc2/images/icons/";
            }
            sIconHtml = "<div class=icon>";
            if (hOptions && hOptions['link']) {
                sIconHtml += hOptions['link'];
            }
            sIconHtml += "<i" + "mg src=\"" + sImagePath + sIcon + "\"></a></div>";
        }
        sH = " <div class=heading> &nbsp; " + sIconHtml + " <div class=text" + (sIconHtml ? ' style="margin-left:48px;" ' : '') + "> " + sText + " </div> </div> ";
        return sH;
    };

    function MfcPaging(sAction, sItemsPerPage, hOptions) {
        this.sAction = sAction;
        this.sItemsPerPage = sItemsPerPage;
        this.hOptions = hOptions || {};
        this.nTotalPages = 0;
        this.nPage = 1;
        if (typeof(MfcPaging.nInstanceId) == 'number') MfcPaging.nInstanceId++;
        else MfcPaging.nInstanceId = 1;
        this.nInstanceId = MfcPaging.nInstanceId;
        if (MfcPaging.hInstances == undefined) MfcPaging.hInstances = {};
        MfcPaging.hInstances[this.nInstanceId] = this;
    };
    MfcPaging.prototype.GetHTML = function(nTotalRecords) {
        this.nTotalPages = Math.ceil(nTotalRecords / this.sItemsPerPage);
        var sPagingHtml;
        if (this.hOptions.prefix_pattern) {
            sPagingHtml = this.hOptions.prefix_pattern;
            sPagingHtml = sPagingHtml.replace(/CURRENT_PAGE/, this.nPage);
            sPagingHtml = sPagingHtml.replace(/TOTAL_PAGES/, this.nTotalPages);
        } else {
            sPagingHtml = 'Page ' + this.nPage + " of " + this.nTotalPages + ": &nbsp;";
        }
        var sSpace = this.hOptions.compact ? '&nbsp;' : '';
        if (this.nPage > this.nTotalPages) {
            this.nPage = this.nTotalPages;
        }
        if (this.nTotalPages > 6) {
            if (this.nPage > 1) {
                sPagingHtml += " <a href=\"javascript: MfcPaging.hInstances[" + this.nInstanceId + "].nPage=1;" + this.sAction + "; \">First</a>" + sSpace + " <a href=\"javascript: MfcPaging.hInstances[" + this.nInstanceId + "].nPage--;" + this.sAction + "; \">&lt;</a> ";
            } else {
                sPagingHtml += "First&nbsp; &lt; ";
            }
        }
        var nNumericLinkCount = this.hOptions.numeric_link_count || 7;
        var nLowerBound = Math.floor(nNumericLinkCount / 2);
        nLookBack = this.nPage > (this.nTotalPages - nLowerBound) ? ((((nNumericLinkCount - 1) - this.nTotalPages) + this.nPage)) : nLowerBound;
        var nUpperBound = Math.ceil(nNumericLinkCount / 2);
        nLookAhead = this.nPage < nUpperBound ? ((nNumericLinkCount + 1) - this.nPage) : nUpperBound;
        for (var n = (this.nPage - nLookBack); n < (this.nPage + nLookAhead); n++) {
            if (n < 1 || n > this.nTotalPages) {
                continue;
            }
            if (this.nPage == n) {
                sPagingHtml += '<b>' + n + '</b>, ';
            } else {
                sPagingHtml += "<a href=\"javascript: MfcPaging.hInstances[" + this.nInstanceId + "].nPage=" + n + "; " + this.sAction + " ;\">" + n + "</a>, ";
            }
        }
        sPagingHtml = sPagingHtml.substring(0, sPagingHtml.length - 2);
        if (this.nTotalPages > 7) {
            if (this.nPage != this.nTotalPages) {
                sPagingHtml += " <a href=\"javascript: MfcPaging.hInstances[" + this.nInstanceId + "].nPage++;" + this.sAction + "; \">&gt;</a>" + sSpace + " <a href=\"javascript: MfcPaging.hInstances[" + this.nInstanceId + "].nPage=" + this.nTotalPages + ";" + this.sAction + "; \">Last</a> ";
            } else {
                sPagingHtml += " &gt;" + sSpace + " Last ";
            }
        }
        return sPagingHtml;
    };
    /* MfcDhtmlPopup Usage: Since the DHTML popup closes upon mouseout, there will only be one popup and it's child open at a given time. Therefore, only a single instance of MfcDhtmlPopup needs to be instantiated. The script should pass content to the popup object as it's being opened by the user.x Requirements: MfcGraphics MfcMouseTracker
     getEl SetHTML MfcUserAgent Synopsis: <html> <script src=/mfc2/lib/config.js></script> <script src=/mfc2/lib/utilities.js></script> <script src=/mfc2/lib/graphics.js></script> <script> var instanceOfMfcGraphics = new MfcGraphics(); var instanceOfMfcMouseTracker = new MfcMouseTracker(); document.onmousemove = function(e) { g_oMouseTracker.track_mouse(e); }; var g_oMfcDhtmlPopup = new MfcDhtmlPopup({ mfcGraphics: instanceOfMfcGraphics, mfcMouseTracker: instanceOfMfcMouseTracker }); </script> <body> <a href="javascript:g_oMfcDhtmlPopup.open('demo popup content')">open popup</a> </body> </html> Note: <img> tags in the popup must specify img height and/or width or else the popup sizing will not calculate properly due to image download lag time. */
    function MfcDhtmlPopup(hOptions) {
        hOptions = hOptions || {};
        sInstanceName = hOptions.instance_name || 'popup';
        this.mfcGraphics = hOptions.mfcGraphics || new MfcGraphics();
        this.mfcMouseTracker = hOptions.mfcMouseTracker;
        if (!MfcDhtmlPopup.register) {
            MfcDhtmlPopup.register = {};
        }
        MfcDhtmlPopup.register[sInstanceName] = this;
        PopUserMenu.nInstanceId = typeof PopUserMenu.nInstanceId == 'number' ? PopUserMenu.nInstanceId + 1 : 0;
        this.nInstanceId = PopUserMenu.nInstanceId;
        PopUserMenu.hObjectRef = PopUserMenu.hObjectRef || {};
        PopUserMenu.hObjectRef[this.nInstanceId] = this;
        this.oOpacityTimeout;
        this.sPopupInstanceName = sInstanceName;
        this.sNoCloseOnMouseout = [];
        this.sPopupChildId = this.sPopupInstanceName + '_child';
        this.sPopupResizeId;
        this.sPopupResizeOptions;
        this.nPopupResizeCounter = 0;
        this.sOptions = '';
        this.bIsOpen = 0;
        this.UA = new MfcUserAgent();
        this.dhtml_popop_html();
    };
    MfcDhtmlPopup.prototype.dhtml_popop_html = function() {
        if (!this.mfcGraphics) {
            this.mfcGraphics = new MfcGraphics();
        }
        var sHtml = " <div id=" + this.sPopupInstanceName + " style='z-index:100;position:absolute;display:none;width:50px;filter:progid:DXImageTransform.Microsoft.Shadow(color=#111111, Direction=155, Strength=12);border:0px dashed blue;' oncontextmenu=\"return false;\" onMouseOut=\" MfcDhtmlPopup.register['" + this.sPopupInstanceName + "'].popup_onmouseout(this,event,'" + this.sPopupInstanceName + "'); \" > " + this.mfcGraphics.container("top,popup_container,contracted") + " <div id=" + this.sPopupInstanceName + "_content style='font-size:11px;color:#000000;margin:6px;height:150px;border:0px dashed red;' oncontextmenu=\"return false;\"> </div> " + this.mfcGraphics.container("bottom,popup_container,contracted") + " </div>  <div id=" + this.sPopupChildId + " style='z-index:100;position:absolute;top:0px;left:0px;display:none;width:50px;filter:progid:DXImageTransform.Microsoft.Shadow(color=#111111, Direction=155, Strength=11);' onMouseOut=\" MfcDhtmlPopup.register['" + this.sPopupInstanceName + "'].popup_onmouseout(this,event,'" + this.sPopupChildId + "'); \" > " + this.mfcGraphics.container("top,popup_container,contracted") + " <div id=" + this.sPopupChildId + "_content style='font-size:11px;color:#000000;margin:6px;'> </div> " + this.mfcGraphics.container("bottom,popup_container,contracted") + " </div> ";
        this.oMasterDiv = document.createElement('div');
        this.oMasterDiv.style.zIndex = 150;
        this.oMasterDiv.style.position = 'absolute';
        this.oMasterDiv.style.top = '0px';
        this.oMasterDiv.style.left = '0px';
        this.oMasterDiv.style.width = '100%';
        this.oMasterDiv.innerHTML = sHtml;
        this.oBody = document.getElementsByTagName('body')[0];
        if (this.oBody && this.oBody.appendChild) this.oBody.appendChild(this.oMasterDiv);
    };
    MfcDhtmlPopup.prototype.containsDOM = function(container, containee) {
        var isParent = false;
        do {
            if ((isParent = container == containee)) break;
            containee = containee.parentNode;
        } while (containee != null);
        return isParent;
    };
    MfcDhtmlPopup.prototype.popup_onmouseout = function(oElement, oEvent, sInstanceName) {
        if (this.check_mouse_leave(oElement, oEvent)) this.close(sInstanceName, 'triggered_by_mouseout');
    };
    MfcDhtmlPopup.prototype.check_mouse_leave = function(oElement, oEvent) {
        if (oElement.contains && oEvent.toElement) return !oElement.contains(oEvent.toElement);
        else if (oEvent.relatedTarget) return !this.containsDOM(oElement, oEvent.relatedTarget);
    };
    MfcDhtmlPopup.prototype.check_mouse_enter = function(oElement, oEvent) {
        if (oElement.contains && oEvent.fromElement) {
            return !oElement.contains(oEvent.fromElement);
        } else if (oEvent.relatedTarget) {
            return !this.containsDOM(oElement, oEvent.relatedTarget);
        }
    };
    MfcDhtmlPopup.prototype.update = function(sHtml) {
        if (!this.bIsOpen) return;
        var sInstanceName = (this.sOptions.indexOf('child') > -1) ? this.sPopupChildId : this.sPopupInstanceName;
        SetHTML(sInstanceName + "_content", this.content_wrapper(sHtml, sInstanceName), 'force');
    };
    MfcDhtmlPopup.prototype.content_wrapper = function(sHtml, sInstanceName, sOptions) {
        var sInstanceName = (this.sOptions.indexOf('child') > -1) ? this.sPopupChildId : this.sPopupInstanceName;
        var sOptions = sOptions || this.sOptions || '';
        if (sOptions.indexOf('no_close_button') == -1) {
            if (this.UA.mobile || this.UA.tablet) {
                sHtml = "<div style=\"text-align:right;padding-bottom:10px;\"><input type=button value=\"Close\" style=\"font-size:17px;\" onClick=\"MfcDhtmlPopup.register['" + this.sPopupInstanceName + "'].close('" + sInstanceName + "');\"></div>" + sHtml;
            } else {
                sHtml = "<div style=\"position:absolute;top:10px;right:-13;font-size:11px;\"><input type=button value=\"Close\" style=\"font-size:11px;\" onClick=\"MfcDhtmlPopup.register['" + this.sPopupInstanceName + "'].close('" + sInstanceName + "');\"></div>" + sHtml;
            }
        }
        return (sHtml + " <div id=" + sInstanceName + "_content_foot style=\"text-align:right;\"><span id=" + sInstanceName + "_content_foot_right style=\"font-size:1px;border:0px solid red;\">&nbsp;</span></div> ");
    };
    MfcDhtmlPopup.prototype.open = function(sHtml, sOptions) {
        this.bIsOpen = 1;
        this.sOptions = sOptions || "";
        clearTimeout(this.oOpacityTimeout);
        this.nPopupResizeCounter = 0;
        var sInstanceName = (this.sOptions.indexOf('child') > -1) ? this.sPopupChildId : this.sPopupInstanceName;
        this.close(sInstanceName);
        this.sNoCloseOnMouseout[sInstanceName] = (this.sOptions.indexOf('no_close_on_mouseout') > -1) ? 1 : 0;
        this.set_opacity(sInstanceName, 10);
        SetHTML(sInstanceName + "_content", this.content_wrapper(sHtml, sInstanceName, sOptions));
        if (!GetEl(sInstanceName + '_content') || !GetEl(sInstanceName + '_content_foot') || !GetEl(sInstanceName + '_content_foot_right')) {
            return;
        }
        GetEl(sInstanceName).style.display = 'block';
        var sHeight;
        if (this.sOptions.match(/height:(\d+)/)) sHeight = parseInt(RegExp.$1);
        else sHeight = GetEl(sInstanceName + '_content_foot').offsetTop - GetEl(sInstanceName + '_content').offsetTop;
        var sWidth;
        if (this.sOptions.match(/width:(\d+)/)) sWidth = parseInt(RegExp.$1);
        else sWidth = GetEl(sInstanceName + '_content_foot_right').offsetLeft - GetEl(sInstanceName + '_content_foot').offsetLeft;
        this.sPopupHeight = sHeight;
        this.sPopupWidth = sWidth;
        this.sPopupResizeId = sInstanceName;
        this.sPopupResizeOptions = sOptions;
        this.popup_resize();
        this.popup_reposition();
    };
    MfcDhtmlPopup.prototype.popup_resize = function() {
        if (this.nPopupResizeCounter > 2) {
            return;
        }
        this.nPopupResizeCounter++;
        var sInstanceName = this.sPopupResizeId || 'popup';
        var sOptions = this.sPopupResizeOptions || '';
        var sHeight = this.sPopupHeight || 0;
        var sWidth = this.sPopupWidth || 0;
        var nTopPos = null;
        if (sOptions.indexOf('center') > -1) {
            var hDimensions = this.UA.GetViewportDimensions();
            nTopPos = parseInt((hDimensions.height / 2) - (sHeight / 2));
        } else if (sOptions.match(/top:(\d+)/)) {
            nTopPos = parseInt(RegExp.$1);
        } else {
            var nTopPos = (this.mfcMouseTracker.yPos - Math.round((sHeight + 60) * (this.mfcMouseTracker.dQuadY * 1.00)));
            if (nTopPos < 0) nTopPos = 0;
            if ((this.UA.tablet || this.UA.mobile) && nTopPos > 200 && nTopPos < 10000) {
                nTopPos -= 200;
            }
        }
        if (nTopPos != null && !isNaN(nTopPos)) {
            GetEl(sInstanceName).style.top = nTopPos + 'px';
        }
        GetEl(sInstanceName + '_content').style.height = sHeight + 'px';
        GetEl(sInstanceName + '_content').style.width = sWidth + 'px';
        GetEl(sInstanceName).style.height = (sHeight + 20) + 'px';
        GetEl(sInstanceName).style.width = (sWidth + 20) + 'px';
    };
    MfcDhtmlPopup.prototype.popup_reposition = function() {
        var sInstanceName = this.sPopupResizeId || 'popup';
        var sOptions = this.sPopupResizeOptions || '';
        var sHeight = this.sPopupHeight || 0;
        var sWidth = this.sPopupWidth || 0;
        var nLeftPos = null;
        var nRightPos = null;
        if (sOptions.indexOf('center') > -1) {
            var hDimensions = this.UA.GetViewportDimensions();
            nLeftPos = parseInt((hDimensions.width / 2) - (sWidth / 2));
        } else if (sOptions.match(/right:(\d+)/)) {
            nRightPos = parseInt(RegExp.$1);
        } else if (sOptions.match(/left:(\d+)/)) {
            nLeftPos = parseInt(RegExp.$1);
        } else if (sOptions.indexOf('hover') > -1) {
            var nHoverOffset;
            if (sOptions.match(/hover_offset:(\d+)/)) {
                nHoverOffset = parseInt(RegExp.$1);
            } else if (sOptions.indexOf('hover_over_text') > -1) {
                nHoverOffset = 180;
            } else {
                nHoverOffset = 90;
            }
            if (this.mfcMouseTracker.dQuadX < .5) {
                nLeftPos = this.mfcMouseTracker.xPos + nHoverOffset;
            } else {
                nLeftPos = (this.mfcMouseTracker.xPos - sWidth - nHoverOffset);
            }
        } else {
            nRight = (sOptions.match(/right:(\d+)/)) ? RegExp.$1 : 20;
            nLeftPos = (this.mfcMouseTracker.xPos - Math.round((sWidth + 20) * this.mfcMouseTracker.dQuadX) - nRight);
        }
        if (nRightPos != null && !isNaN(nRightPos)) {
            GetEl(sInstanceName).style.left = '';
            GetEl(sInstanceName).style.right = nRightPos + 'px';
        } else if (nLeftPos != null && !isNaN(nLeftPos)) {
            GetEl(sInstanceName).style.right = '';
            GetEl(sInstanceName).style.left = nLeftPos + 'px';
        }
    };
    MfcDhtmlPopup.prototype.close = function(sInstanceName, sOptions) {
        sInstanceName = sInstanceName || this.sPopupInstanceName;
        sOptions = sOptions || this.sOptions;
        var oPopupDiv = GetEl(sInstanceName);
        if (!oPopupDiv) {
            return;
        } else if (!oPopupDiv.style) {
            return;
        } else if (oPopupDiv.style.display == 'none') {
            return;
        }
        if (sOptions.indexOf('triggered_by_mouseout') > -1 && this.sNoCloseOnMouseout[sInstanceName]) {
            return;
        }
        if (sOptions.indexOf('hover') == -1 && sInstanceName != this.sPopupChildId && GetEl(this.sPopupChildId).style.display == 'block') {
            return;
        }
        this.sNoCloseOnMouseout[sInstanceName] = 0;
        if (this.UA.tablet || sOptions.indexOf('no_fade') > -1) {
            MfcDhtmlPopup.register[this.sPopupInstanceName].close_delayed(sInstanceName, sOptions);
        } else {
            this.set_opacity(sInstanceName, 5);
            var sPopupInstanceName = this.sPopupInstanceName;
            MfcDhtmlPopup.register[sPopupInstanceName].close_delayed(sInstanceName, sOptions);
        }
    };
    MfcDhtmlPopup.prototype.set_opacity = function(sInstanceName, nValue) {
        GetEl(sInstanceName).style.opacity = nValue / 10;
        GetEl(sInstanceName).style.filter = 'alpha(opacity=' + nValue * 10 + ') progid:DXImageTransform.Microsoft.Shadow(color=#111111, Direction=155, Strength=12);';
    };
    MfcDhtmlPopup.prototype.close_delayed = function(sInstanceName, sOptions) {
        SetHTML(sInstanceName + "_content", ' ');
        GetEl(sInstanceName).style.height = '';
        GetEl(sInstanceName + '_content').style.height = '';
        GetEl(sInstanceName).style.width = '';
        GetEl(sInstanceName + '_content').style.width = '';
        GetEl(sInstanceName).style.display = 'none';
        this.bIsOpen = 0;
        if (!this.UA.tablet) {
            this.set_opacity(sInstanceName, 10);
        }
    };

    function AvatarUrl(nUserId, nSize) {
        nSize = nSize || 90;
        if (!AvatarUrl.mfcImageHost) {
            AvatarUrl.mfcImageHost = new MfcImageHost();
        }
        return 'http://' + AvatarUrl.mfcImageHost.host(nUserId) + '/photos2/' + nUserId.toString().substr(0, 3) + '/' + nUserId + '/avatar.' + nSize + 'x' + nSize + '.jpg';
    }

    function MfcCustomFonts() {};
    MfcCustomFonts.prototype.fonts = {
        0: {
            name: 'Arial'
        },
        2: {
            name: 'Comic Sans MS'
        },
        3: {
            name: 'Courier New'
        },
        4: {
            name: 'Georgia'
        },
        5: {
            name: 'Lucida Console, Monaco'
        },
        6: {
            name: 'Lucida Sans Unicode'
        },
        7: {
            name: 'MS Sans Serif'
        },
        8: {
            name: 'Palatino Linotype, Book Antiqua'
        },
        9: {
            name: 'Tahoma, Geneva'
        },
        10: {
            name: 'Times New Roman'
        },
        11: {
            name: 'Helvetica'
        },
        12: {
            name: 'Verdana'
        },
        13: {
            name: 'Arial Narrow'
        },
        15: {
            name: 'Book Antiqua'
        },
        16: {
            name: 'Bookman Old Style'
        },
        17: {
            name: 'Bradley Hand ITC'
        },
        18: {
            name: 'Century Gothic'
        },
        19: {
            name: 'Copperplate Gothic Bold',
            no_bold: 1
        },
        20: {
            name: 'Copperplate Gothic Light'
        },
        21: {
            name: 'Engravers MT'
        },
        22: {
            name: 'Eras Demi ITC'
        },
        23: {
            name: 'Eras Light ITC'
        },
        24: {
            name: 'Estrangelo Edessa'
        },
        25: {
            name: 'Eurostile'
        },
        26: {
            name: 'Felix Titling'
        },
        27: {
            name: 'Fixedsys'
        },
        28: {
            name: 'Franklin Gothic Book'
        },
        29: {
            name: 'Franklin Gothic Demi',
            no_bold: 1
        },
        30: {
            name: 'Franklin Gothic Demi Cond'
        },
        31: {
            name: 'Franklin Gothic Medium'
        },
        32: {
            name: 'Franklin Gothic Medium Cond'
        },
        33: {
            name: 'Garamond'
        },
        35: {
            name: 'Kristen ITC'
        },
        36: {
            name: 'Latha, Mangal'
        },
        37: {
            name: 'Lucida Sans'
        },
        38: {
            name: 'Lucida Sans Unicode,Lucida Grande'
        },
        39: {
            name: 'Maiandra GD'
        },
        41: {
            name: 'Microsoft Sans Serif'
        },
        42: {
            name: 'Monospace'
        },
        43: {
            name: 'Monotype Corsiva',
            no_bold: 1
        },
        44: {
            name: 'MS Reference Sans Serif'
        },
        45: {
            name: 'MS Serif,New York'
        },
        46: {
            name: 'MV Boli'
        },
        47: {
            name: 'OCR A Extended'
        },
        48: {
            name: 'Papyrus'
        },
        49: {
            name: 'Perpetua'
        },
        50: {
            name: 'Raavi'
        },
        51: {
            name: 'Rockwell'
        },
        52: {
            name: 'Sans-serif'
        },
        53: {
            name: 'Serif'
        },
        54: {
            name: 'Shruti'
        },
        55: {
            name: 'Sydnie'
        },
        56: {
            name: 'Sylfaen'
        },
        57: {
            name: 'System'
        },
        58: {
            name: 'Tempus Sans ITC'
        },
        60: {
            name: 'Times'
        },
        61: {
            name: 'Trebuchet MS'
        }
    };
    MfcCustomFonts.prototype.get_style = function(hUser) {
        if (!hUser || hUser['access_level'] < 2 || !MfcCustomFonts.prototype.fonts[hUser['chat_text_font']]) {
            return '';
        }
        var fBold = hUser['chat_opts'] & w.FCOPT_BOLD ? 1 : 0;
        var fItalic = hUser['chat_opts'] & w.FCOPT_ITALICS ? 1 : 0;
        var aStyle = new Array();
        aStyle.push("font-family:" + MfcCustomFonts.prototype.fonts[hUser['chat_text_font']].name + ";");
        if (hUser['chat_text_color'] && hUser['chat_text_color'].match(/\w/)) aStyle.push("color:#" + hUser['chat_text_color'].replace(/[^0-9a-fA-F]/g, "") + " ! important;");
        if (fBold && !MfcCustomFonts.prototype.fonts[hUser['chat_text_font']]['no_bold']) aStyle.push("font-weight:bold;");
        else if (hUser['chat_text_color']) aStyle.push("font-weight:normal;");
        if (fItalic) aStyle.push("font-style:italic;");
        return aStyle.join('');
    };
    /* MfcModelListItemHTML - returns HTML for a model list item, takes model data, a template and link specifications requires utilities.js function MfcModelListItemHTML(hUser, sTemplate, hLinks ) hUser: An assoc. array of model values, see the example below for minimum required key/value pairs sTemplate: HTML with wildcards being a word enclosed with percent signs, ex. %USERNAME%. Model avatars are square sized and come in widths/heights of 20,30,40,50,55,60,65,70,75,80,85,90,95,100,150,300, swap in the URL of the image with %AVATAR_90% for a 90x90 avatar. hLinks: An assoc. array of assoc. arrays where the first level specified a tags and the second level specificies the attributes of the tag. The 1st level's key is the wildcard name, the second level key is the attribute name and the value is the attribute's value. See the synopsis for an example. Synopsis: var hModelData = { user_id: "3206500", username: "Horneypussy", chat_text_color: "FF0000", chat_text_font: "0", chat_opts: w.FCOPT_BOLD , city: "Wet City" }; var sTemplate = " <div style=font-size:13px;> <span style=\"%USER_FONT_STYLE%\">%USERNAME%</span><br> <img src=%AVATAR_90%><br> %profile%Profile</a> %LOAD_VIDEO%Load Video</a> </div> "; document.write(MfcModelListItemHTML(hSampleModel, sTemplate,
     { profile:{ href:"https://web.archive.org/web/20150223133426/http://profiles.myfreecams.com/%USERNAME%/", target: '_blank' }, load_video:{ href:'#', onclick:"alert(\"load video place-holder\"); return false;" } } ) );*/
    function MfcModelListItemHTML(hUser, sTemplate, hLinks) {
        var hSwaps = CloneObject(hUser);
        for (var sK in hLinks) hSwaps[sK] = a_tag(hLinks[sK]);
        var aAvatarSizes = new Array(20, 30, 40, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 150, 300);
        for (var nK in aAvatarSizes)
            if (sTemplate.indexOf('AVATAR_' + aAvatarSizes[nK]) > -1) hSwaps['AVATAR_' + aAvatarSizes[nK]] = AvatarUrl(hUser['user_id'], aAvatarSizes[nK]);
        hSwaps['USER_FONT_STYLE'] = MfcCustomFonts.get_style(hUser);
        sTemplate = MfcStringUtilities.parse_template(sTemplate, hSwaps);
        return MfcStringUtilities.parse_template(sTemplate, hSwaps);
    }

    function PossessiveApostrophe(sWord) {
        return (sWord + (sWord.charAt(sWord.length - 1) == "s" ? "'" : "'s"));
    }

    function MobileDevice_CloseWindowOption() {
        if (navigator.userAgent.indexOf("Android") == -1 && navigator.userAgent.indexOf("(iPad;") == -1 && navigator.userAgent.indexOf("(iPhone;") == -1 && navigator.userAgent.indexOf("(iPod;") == -1) {
            return;
        }
        if (location.href.match('/pm\.')) {
            return;
        }
        var nFontSize = navigator.userAgent.match(/iPhone|iPod/) ? 25 : 15;
        document.write(" <div style=\"position:absolute;right:17px;top:13px;z-index:100;\"> <input type=button value=\"Close\" style=\"font-size:" + nFontSize + "px;\" onClick=\"window.close();\"> </div> ");
    }
    if (!this.JSON) {
        JSON = {};
    }(function() {
        function f(n) {
            return n < 10 ? '0' + n : n;
        }
        if (typeof Date.prototype.toJSON !== 'function') {
            Date.prototype.toJSON = function(key) {
                return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';
            };
            String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
                return this.valueOf();
            };
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                '\b': '\\b',
                '\t': '\\t',
                '\n': '\\n',
                '\f': '\\f',
                '\r': '\\r',
                '"': '\\"',
                '\\': '\\\\'
            },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' : '"' + string + '"';
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }
            if (typeof rep === 'function') {
                value = rep.call(holder, key, value);
            }
            switch (typeof value) {
                case 'string':
                    return quote(value);
                case 'number':
                    return isFinite(value) ? String(value) : 'null';
                case 'boolean':
                case 'null':
                    return String(value);
                case 'object':
                    if (!value) {
                        return 'null';
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === '[object Array]') {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || 'null';
                        }
                        v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
                        gap = mind;
                        return v;
                    }
                    if (rep && typeof rep === 'object') {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            k = rep[i];
                            if (typeof k === 'string') {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
                    gap = mind;
                    return v;
            }
        }
        if (typeof JSON.stringify !== 'function') {
            JSON.stringify = function(value, replacer, space) {
                var i;
                gap = '';
                indent = '';
                if (typeof space === 'number') {
                    for (i = 0; i < space; i += 1) {
                        indent += ' ';
                    }
                } else if (typeof space === 'string') {
                    indent = space;
                }
                rep = replacer;
                if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                    throw new Error('JSON.stringify');
                }
                return str('', {
                    '': value
                });
            };
        }
        if (typeof JSON.parse !== 'function') {
            JSON.parse = function(text, reviver) {
                var j;

                function walk(holder, key) {
                    var k, v, value = holder[key];
                    if (value && typeof value === 'object') {
                        for (k in value) {
                            if (Object.hasOwnProperty.call(value, k)) {
                                v = walk(value, k);
                                if (v !== undefined) {
                                    value[k] = v;
                                } else {
                                    delete value[k];
                                }
                            }
                        }
                    }
                    return reviver.call(holder, key, value);
                }
                cx.lastIndex = 0;
                if (cx.test(text)) {
                    text = text.replace(cx, function(a) {
                        return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                    });
                }
                if (/^[\],:{} ]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?: *\[)+/g, ''))) {
                    j = eval('(' + text + ')');
                    return typeof reviver === 'function' ? walk({
                        '': j
                    }, '') : j;
                }
                throw new SyntaxError('JSON.parse');
            };
        }
    }());
    var LiveFrame = {
        nUserId: 0,
        rxImg: null,
        nTimerId: 0
    };
    LiveFrame.Download = function(nUserId, nErr) {
        LiveFrame.nUserId = nUserId ? nUserId : LiveFrame.nUserId;
        clearTimeout(LiveFrame.nTimerId);
        t.Log('SNAP: LiveFrame.Download(' + LiveFrame.nUserId + ', ' + nErr + ')');
        var frameSnap = document.getElementById('liveFrameSnap');
        if (!frameSnap) {
            if (nErr < 50) {
                t.Log('SNAP: LiveFrame.Download(): trying again with err: ' + (nErr + 1));
                clearTimeout(LiveFrame.nTimerId);
                LiveFrame.nTimerId = setTimeout(function() {
                    LiveFrame.Download(LiveFrame.nUserId, nErr + 1);
                }, 1000);
            } else {
                t.Log('SNAP: LiveFrame.Download(): no more retries, too many err...');
            }
            return;
        }
        t.Log('SNAP: LiveFrame.Download(): LiveFrame.rxImg = new image...');
        LiveFrame.rxImg = new Image();
        LiveFrame.rxImg.onload = LiveFrame.Render;
        LiveFrame.rxImg.src = t.LiveSnapUrl(LiveFrame.nUserId, 320) + "?nc=" + Math.random();
        t.Log('SNAP: LiveFrame.Download() set LiveFrame.rxImg to ' + LiveFrame.rxImg.src);
    };
    LiveFrame.Render = function() {
        t.Log('SNAP: LiveFrame.Render() for ' + LiveFrame.nUserId);
        var frameSnap = document.getElementById('liveFrameSnap');
        if (!frameSnap) return;
        t.Log('SNAP: LiveFrame.Render() setting LiveFrame.rxImg !');
        frameSnap.src = LiveFrame.rxImg.src;
        t.Log('SNAP: LiveFrame.Render() calling LiveFrame.Download() in 4 seconds...');
        clearTimeout(LiveFrame.nTimerId);
        LiveFrame.nTimerId = setTimeout(function() {
            LiveFrame.Download();
        }, 4000);
    };

    function MfcMouseTracker() {
        this.hUA = new MfcUserAgent();
        this.xPos;
        this.yPos;
        this.dQuadY;
        this.dQuadX;
        this.bMouseTrackerThrottle;
        this.test = Math.random();
        if (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("(iPad;") > -1 || navigator.userAgent.indexOf("(iPhone;") > -1 || navigator.userAgent.indexOf("(iPod;") > -1) {
            this.bIsMobileUA = 1;
        }
    };
    MfcMouseTracker.prototype.track_finger = function(e) {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
        e.pageX = e.touches[0].pageX;
        e.pageY = e.touches[0].pageY;
        e.screenX = e.touches[0].screenX;
        e.screenY = e.touches[0].screenY;
        if (this.track_mouse) this.track_mouse(e);
    };
    MfcMouseTracker.prototype.track_mouse = function(e) {
        if (!e) {
            e = event;
        }
        if (!this.bIsMobileUA) {
            if (this.bMouseTrackerThrottle) {
                return;
            } else {
                this.bMouseTrackerThrottle = 1;
                var self = this;
                setTimeout(function() {
                    self.bMouseTrackerThrottle = 0;
                }, 50);
            }
        }
        this.clientX = e.clientX;
        this.clientY = e.clientY;
        this.pageX = e.pageX;
        this.pageY = e.pageY;
        if (this.hUA.IE < 10 && event && event.clientX) {
            this.screenX = event.screenX;
            this.screenY = event.screenY;
            this.xPos = event.clientX + document.body.scrollLeft;
            this.yPos = event.clientY + document.body.scrollTop;
        } else if (e && e.clientX) {
            this.screenX = e.screenX;
            this.screenY = e.screenY;
            this.xPos = this.pageX;
            this.yPos = this.pageY;
        }
        if (document && document.body) {
            this.dQuadX = (this.xPos - document.body.scrollLeft) / document.body.clientWidth;
            this.dQuadY = (this.yPos - document.body.scrollTop) / document.body.clientHeight;
        }
        this.dScreenQuadX = this.screenX / screen.width;
        this.dScreenQuadY = this.screenY / screen.height;
        return;
    };

    function MfcMousePress(hNamedElements) {
        this.hUA = new MfcUserAgent();
        this.hNamedElements = hNamedElements;
        this.hPreviousHandlers = {};
        this.sActiveElement = '';
    };
    MfcMousePress.prototype.AddNamedElement = function(hNamedElement) {
        for (sK in hNamedElement) {
            this.hNamedElements[sK] = CloneObject(hNamedElement[sK]);
        }
    };
    MfcMousePress.prototype.RemoveNamedElement = function(sElementName) {
        delete this.hNamedElements[sElementName];
    };
    MfcMousePress.prototype.AttachEvents = function() {
        for (sElement in this.hNamedElements) {
            if (this.hNamedElements[sElement].left_click) {
                var oEl;
                if (oEl = document.getElementById(sElement)) {
                    if (this.hNamedElements[sElement].left_click.onmousedown) oEl.ontouchstart = this.hNamedElements[sElement].left_click.onmousedown;
                    if (this.hNamedElements[sElement].left_click.onmousemove) oEl.ontouchmove = this.hNamedElements[sElement].left_click.onmousemove;
                    if (this.hNamedElements[sElement].left_click.onmouseup) oEl.ontouchend = this.hNamedElements[sElement].left_click.onmouseup;
                }
            }
        }
    };
    MfcMousePress.prototype.Down = function(e) {
        if (!e) {
            var e = window.event;
        }
        var sButtonClick;
        if (e.which) {
            if (e.which == 1) {
                sButtonClick = 'left_click';
            } else if (e.which == 3) {
                sButtonClick = 'right_click';
            }
        } else if (e.button) {
            if (e.button == 1) {
                sButtonClick = 'left_click';
            } else if (e.button == 2) {
                sButtonClick = 'right_click';
            }
        }
        if (!sButtonClick) {
            return;
        }
        var oEvent = (this.hUA.IE && event && event.clientX) ? event : e;
        var oEFP;
        var sFoundName;
        if (oEFP = document.elementFromPoint(oEvent.clientX, oEvent.clientY)) {
            for (var nCounter = 0; nCounter < 15; nCounter++) {
                var sName, sId;
                if (oEFP && oEFP.getAttribute && ((sName = oEFP.getAttribute('name')) || (sId = oEFP.getAttribute('id')))) {
                    var sInspectName = sName || sId;
                    for (sWantedName in this.hNamedElements) {
                        var oWantedNamePattern = new RegExp(sWantedName, "i");
                        if (sInspectName.match(oWantedNamePattern)) {
                            sFoundName = sInspectName;
                            break;
                        }
                    }
                } else if (oEFP.parentNode) {
                    oEFP = oEFP.parentNode;
                } else {
                    break;
                }
            }
        }
        if (!sFoundName) {
            return;
        }
        this.sActiveElement = sFoundName;
        if (this.hNamedElements[sWantedName][sButtonClick]) {
            this.bypass_mouseout_failsafe = this.hNamedElements[sWantedName].bypass_mouseout_failsafe ? 1 : 0;
            if (this.hNamedElements[sWantedName][sButtonClick].onmousedown) this.hNamedElements[sWantedName][sButtonClick].onmousedown(e, this.sActiveElement);
            var aHandledEvents = ['onselectstart', 'onmousemove'];
            for (nK = 0; nK < aHandledEvents.length; nK++) {
                if (this.hNamedElements[sWantedName][sButtonClick][aHandledEvents[nK]]) {
                    this.hPreviousHandlers[aHandledEvents[nK]] = document[aHandledEvents[nK]];
                    document[aHandledEvents[nK]] = this.hNamedElements[sWantedName][sButtonClick][aHandledEvents[nK]];
                }
            }
            this.sButtonClick = sButtonClick;
            this.sEventClient = sWantedName;
            this.hPreviousHandlers.onmouseout = document.onmouseout;
        }
    };
    MfcMousePress.prototype.Up = function(e) {
        this.sActiveElement = '';
        if (this.hNamedElements[this.sEventClient] && this.hNamedElements[this.sEventClient][this.sButtonClick] && this.hNamedElements[this.sEventClient][this.sButtonClick].onmouseup) {
            this.hNamedElements[this.sEventClient][this.sButtonClick].onmouseup(e);
            var self = this;
            setTimeout(function() {
                self.ReleaseSelection();
            }, 500);
        }
        for (sK in this.hPreviousHandlers) {
            document[sK] = this.hPreviousHandlers[sK];
        }
        document.onmouseout = this.hPreviousHandlers.onmouseout = document.onmouseout;
    };
    MfcMousePress.prototype.onMouseOut_FailSafe = function(e) {
        if (this.bypass_mouseout_failsafe) {
            return;
        }
        e = e ? e : window.event;
        var from = e.relatedTarget || e.toElement;
        if (this.sActiveElement && (!from || from.nodeName == "HTML" || from.nodeName == "IFRAME")) {
            this.Up();
        }
    };
    MfcMousePress.prototype.ReleaseSelection = function(e) {
        try {
            var selectObj = window.getSelection();
            selectObj.collapseToStart();
        } catch (e) {};
    };

    function MfcClickDrag(hSets) {
        this.hSets = hSets;
        this.hUA = new MfcUserAgent();
        this.hMouseOffset = null;
        this.hSubjectOffset = null;
        this.hSpecifiedDimension = {};
        this.hAdjustmentResults = {};
    };
    MfcClickDrag.prototype.AddSet = function(hSet) {
        for (sK in hSet) {
            this.hSets[sK] = CloneObject(hSet[sK]);
        }
    };
    MfcClickDrag.prototype.RemoveSet = function(sSetName) {
        delete this.hSets[sSetName];
    };
    MfcClickDrag.prototype.OnMouseDown = function(sSetName) {
        Log('MfcClickDrag OnMouseDown LAST ' + this.sActiveSet);
        this.sActiveSet = sSetName;
        if (this.hUA.mobile || this.hUA.tablet) {
            document.ontouchmove = function(e) {
                e.preventDefault();
            };
        }
        Log('MfcClickDrag OnMouseDown ' + this.sActiveSet);
    };
    MfcClickDrag.prototype.OnMouseMove = function(oEvent) {
        if (oEvent == null) {
            oEvent = window.event;
        } else if (oEvent.touches) {
            oEvent = oEvent.touches[0];
        }
        var hSet = this.hSets[this.sActiveSet];
        if (!hSet) {
            return;
        }
        if (this.bThrottler) {
            return;
        } else if (hSet.throttle) {
            this.bThrottler = true;
            clearTimeout(this.ThrottleTimer);
            var self = this;
            this.ThrottleTimer = setTimeout(function() {
                self.bThrottler = false;
            }, hSet.throttle);
        }
        var oTarget = oEvent.target != null ? oEvent.target : oEvent.srcElement;
        if (!this.hMouseOffset) {
            this.hMouseOffset = {
                X: oEvent.clientX,
                Y: oEvent.clientY
            };
        }
        if (!this.hAdjustmentResults[hSet.subject_id]) {
            this.hAdjustmentResults[hSet.subject_id] = {};
        }
        for (sAxis in hSet.hAdjustments) {
            if (!this.hAdjustmentResults[hSet.subject_id][sAxis]) {
                this.hAdjustmentResults[hSet.subject_id][sAxis] = {};
            }
            for (sParam in hSet.hAdjustments[sAxis]) {
                nShift = oEvent['client' + sAxis] - this.hMouseOffset[sAxis];
                Log('MfcClickDrag OnMouseMove ' + this.sActiveSet + ' ax:' + sAxis + ':' + sParam);
                if (sParam == 'height' || sParam == 'width' || sParam == 'top' || sParam == 'left') {
                    var oEl = document.getElementById(hSet.subject_id);
                    if (oEl) {
                        if (this.hAdjustmentResults[hSet.subject_id][sAxis][sParam] == undefined) this.hAdjustmentResults[hSet.subject_id][sAxis][sParam] = {};
                        this.hAdjustmentResults[this.sActiveSet] = this.hAdjustmentResults[hSet.subject_id];
                        this.hAdjustmentResults[hSet.subject_id][sAxis][sParam].value = this.AdjustPx(sAxis, sParam, oEl, nShift, hSet, oEvent);
                    }
                }
            }
        }
    };
    MfcClickDrag.prototype.AdjustPx = function(sAxis, sParam, oEl, nShift, hSet, oEvent) {
        if (!this.sActiveSet) {
            return;
        }
        var hConditions = this.hSets[this.sActiveSet].hAdjustments[sAxis][sParam];
        if (!this.hSubjectOffset) {
            this.hSubjectOffset = {};
        }
        if (!this.hSubjectOffset[sParam]) {
            if (sParam == 'height') this.hSubjectOffset[sParam] = oEl.offsetHeight;
            else if (sParam == 'width') this.hSubjectOffset[sParam] = oEl.offsetWidth;
            else if (sParam == 'top') this.hSubjectOffset[sParam] = oEl.offsetTop;
            else if (sParam == 'left') this.hSubjectOffset[sParam] = oEl.offsetLeft;
        }
        var nNewSize;
        if (hSet.hAdjustments[sAxis][sParam].inverse) {
            nNewSize = this.hSubjectOffset[sParam] - nShift;
        } else {
            nNewSize = this.hSubjectOffset[sParam] + nShift;
        }
        if ((sParam == 'height' || sParam == 'width') && !(nNewSize > -1)) {
            return;
        }
        if (sParam == 'height' && this.hSets[this.sActiveSet].min_height && this.hSets[this.sActiveSet].min_height > nNewSize) {
            nNewSize = this.hSets[this.sActiveSet].min_height;
        } else if (sParam == 'width' && this.hSets[this.sActiveSet].min_width && this.hSets[this.sActiveSet].min_width > nNewSize) {
            nNewSize = this.hSets[this.sActiveSet].min_width;
        }
        if (sParam == 'height' && this.hSets[this.sActiveSet].max_when_scrollfree && oEl.scrollHeight < nNewSize) {
            oEl.style[sParam] = oEl.scrollHeight + 'px';
        } else {
            oEl.style[sParam] = nNewSize + 'px';
        }
        if (!this.hSpecifiedDimension[this.hSets[this.sActiveSet].subject_id]) this.hSpecifiedDimension[this.hSets[this.sActiveSet].subject_id] = {};
        if (sParam == 'height') {
            if (oEl.scrollHeight - oEl.offsetHeight > 10) {
                this.hSpecifiedDimension[this.hSets[this.sActiveSet].subject_id][sParam] = nNewSize;
                this.hAdjustmentResults[this.sActiveSet][sAxis][sParam].maximum = false;
            } else {
                this.hSpecifiedDimension[this.hSets[this.sActiveSet].subject_id][sParam] = null;
                this.hAdjustmentResults[this.sActiveSet][sAxis][sParam].maximum = true;
            }
        }
        return nNewSize;
    };
    MfcClickDrag.prototype.OnMouseUp = function() {
        Log('MfcClickDrag OnMouseUp ' + this.sActiveSet);
        if (this.hSets[this.sActiveSet] && this.hSets[this.sActiveSet].onmouseup) {
            this.hSets[this.sActiveSet].onmouseup(this.sActiveSet);
        }
        if (this.hUA.mobile || this.hUA.tablet) {
            document.ontouchmove = null;
        }
        this.hMouseOffset = null;
        this.hSubjectOffset = null;
        this.sActiveSet = '';
    };

    function PopUserMenu(hConfig) {
        this.hUsers = hConfig.hUsers;
        this.hSelf = hConfig.hSelf;
        this.FcTags = hConfig.FcTags;
        this.LiveSnapUrl = hConfig.LiveSnapUrl;
        this.HideModel = hConfig.HideModel;
        this.A = hConfig.A;
        this.Admin = hConfig.Admin;
        this.mfcImageHost = new MfcImageHost();
        this.nCurrentUserId = 0;
        this.hUser = {};
        this.hSelf = {};
        this.oDhtmlPopup = {};
        this.hOptions = {};
    };
    PopUserMenu.prototype.right_click_open = function() {
        var bRightClick;
        e = arguments[0];
        if (!e) var e = window.event;
        if (e.which) bRightClick = (e.which == 3);
        else if (e.button) bRightClick = (e.button == 2);
        if (bRightClick) {
            this.open(arguments[1], arguments[2], arguments[3], arguments[4]);
            return true;
        }
        return false;
    };
    PopUserMenu.prototype.open = function() {
        var hUser;
        var hSelf;
        var oDhtmlPopup;
        var hOptions;
        this.UA = new MfcUserAgent();
        PopUserMenu.nInstanceId = typeof PopUserMenu.nInstanceId == 'number' ? PopUserMenu.nInstanceId + 1 : 0;
        this.nInstanceId = PopUserMenu.nInstanceId;
        PopUserMenu.hObjectRef = PopUserMenu.hObjectRef || {};
        PopUserMenu.hObjectRef[this.nInstanceId] = this;
        if (typeof(arguments[0]) != 'object') {
            var nUserId = arguments[0];
            hUser = t.g_hUsers[nUserId];
            hSelf = t.g_hSelf;
            oDhtmlPopup = arguments[1];
            hOptions = arguments[2];
        } else {
            hUser = arguments[0];
            hSelf = arguments[1];
            oDhtmlPopup = arguments[2];
            hOptions = arguments[3];
        }
        this.hUser = hUser;
        this.hSelf = hSelf;
        this.oDhtmlPopup = oDhtmlPopup;
        this.hOptions = hOptions || {};
        this.nCurrentUserId = hUser.user_id;
        this.oDhtmlPopup.open(this.draw_user_details(hUser, hSelf, this.hOptions), (g_UA.tablet || g_UA.mobile ? 'width:480' : 'width:420'));
    };
    PopUserMenu.prototype.open_tags_in_popup = function(hUser, oDhtmlPopup) {
        this.hUser = hUser;
        this.oDhtmlPopup = oDhtmlPopup;
        if (!this || !this.hUser || !this.hUser.aTags || !this.hUser.aTags.length) {
            return;
        }
        this.oDhtmlPopup.open(this.get_all_tags());
    };
    PopUserMenu.prototype.update = function() {
        if (this.oDhtmlPopup.bIsOpen) {
            this.oDhtmlPopup.update(this.draw_user_details(this.hUser, this.hSelf, this.hOptions));
        }
    };
    PopUserMenu.prototype.people_icon_gender = function(hUser) {
        return hUser.access_level == 4 ? 'woman' : 'man';
    };
    PopUserMenu.prototype.people_icon_number = function(hUser) {
        if (hUser.username.match(/^..[abc1]/i)) return 1;
        else if (hUser.username.match(/^..[def2]/i)) return 2;
        else if (hUser.username.match(/^..[ghi3]/i)) return 3;
        else if (hUser.username.match(/^..[jkl4]/i)) return 4;
        else if (hUser.username.match(/^..[mno5]/i)) return 5;
        else if (hUser.username.match(/^..[pqr6]/i)) return 6;
        else if (hUser.username.match(/^..[stu7]/i)) return 7;
        else if (hUser.username.match(/^..[vwxy]/i)) return 8;
        else if (hUser.username.match(/^..[z890_]/i)) return 9;
    };
    PopUserMenu.prototype.userid_to_user = function(nUserId) {
        if (!t) return 1;
        if (t && !t.g_hUsers) return 2;
        if (t && t.g_hUsers && !t.g_hUsers[nUserId]) return 3;
        if (t && t.g_hUsers && t.g_hUsers[nUserId] && !t.g_hUsers[nUserId].username) return 4;
        return t.g_hUsers[nUserId];
    };
    PopUserMenu.prototype.people_icon = function(hUser) {
        if (typeof(hUser) !== "object" && typeof(hUser = this.userid_to_user(hUser)) !== "object") return 'http://' + this.mfcImageHost.host() + '/mfc2/images/misc/clear.gif?error=' + hUser;
        var nIcon = this.people_icon_number(hUser);
        var sGender = this.people_icon_gender(hUser);
        return 'http://' + this.mfcImageHost.host(nIcon) + '/mfc2/images/icons/people/small_' + sGender + '_' + nIcon + '.png';
    };
    PopUserMenu.prototype.people_icon_sprite_css = function(hUser) {
        if (typeof(hUser) !== "object" && typeof(hUser = this.userid_to_user(hUser)) !== "object") return 'sprite-people-icon-error' + hUser;
        var nIcon = this.people_icon_number(hUser);
        var sGender = this.people_icon_gender(hUser);
        return 'sprite-icons sprite-small_' + sGender + '_' + nIcon;
    };
    PopUserMenu.prototype.draw_user_details = function(hUser, hSelf, hOptions) {
        hOptions = hOptions || {};
        if (!hUser) return;
        this.hUser = hUser;
        nUserId = this.hUser.user_id;
        var hUserDetailKey;
        if (g_UA.tablet) {
            hUserDetailKey = {
                'region': 'Location',
                'age': 'Age/Ethnicity'
            };
        } else if (hUser.access_level < 4) {
            hUserDetailKey = {
                'region': 'Location',
                'occupation': 'Occupation',
                'age': 'Age/Ethnicity',
                'creation_date': 'Signed Up'
            };
        } else {
            hUserDetailKey = {
                'region': 'Location',
                'occupation': 'Occupation',
                'age': 'Age/Ethnicity'
            };
        }
        if (hOptions.menu == undefined) {
            hOptions.menu = (g_hLoungeIds[this.hUser.user_id] || hOptions.hover_bio) ? 0 : 1;
        }
        var sStyle = this.hSelf.chat_text_ignore ? '' : MfcCustomFonts.prototype.get_style(this.hUser);
        var aShortMonths = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
        var aDetails = new Array();
        var nKeyColumnWidth = 90;
        sUsernameStyle = MfcCustomFonts.prototype.get_style(this.hUser);
        for (var sK in hUserDetailKey) {
            if (sK != 'region' && sK != 'age' && (!hUser || !this.hUser[sK] || this.hUser[sK] == -1 || this.hUser[sK] == 0 || this.hUser[sK] == 'No Answer')) {
                continue;
            }
            var sValue;
            if (sK == 'creation_date') {
                if (this.hUser[sK] == 0) {
                    continue;
                }
                var oDate = new Date();
                oDate.setTime(parseInt(this.hUser[sK]) * 1000);
                sValue = aShortMonths[oDate.getMonth()] + " '" + MfcStringUtilities.char_padding(oDate.getFullYear() - 2000, 2, 0);
            } else if (sK == 'lastlogin') {
                if (this.hUser[sK] == 0) {
                    continue;
                }
                var oDate = new Date();
                oDate.setTime(parseInt(this.hUser[sK]) * 1000);
                var sDate = oDate.getDate().toString();
                if (sDate.match(/(11|12|13|4|5|6|7|8|9|0)$/)) sDate += 'th';
                else if (sDate.match(/3|23/)) sDate += 'rd';
                else if (sDate.match(/2$/)) sDate += 'nd';
                else if (sDate.match(/1$/)) sDate += 'st';
                sValue = "" + aShortMonths[oDate.getMonth()] + " " + sDate + " '" + MfcStringUtilities.char_padding(oDate.getFullYear() - 2000, 2, 0);
            } else if (sK == 'age') {
                sValue = '';
                if (this.hUser['age']) {
                    sValue += this.hUser['age'];
                    if (this.hUser['ethnic']) {
                        sValue += ', ';
                    }
                }
                if (this.hUser['ethnic']) {
                    sValue += this.hUser['ethnic'];
                }
            } else if (sK == 'region') {
                sValue = '';
                if (this.hUser['city']) {
                    sValue += this.hUser['city'];
                    if (this.hUser['country']) {
                        sValue += ', ';
                    }
                }
                if (this.hUser['country']) {
                    sValue += this.hUser['country'];
                }
            } else {
                sValue = this.hUser[sK];
            }
            if (sValue.length > 70) {
                if (hOptions.menu) {
                    sValue = sValue.substr(0, 70) + "..." + A('bio', this.hUser) + "More</a>";
                } else {
                    sValue = sValue.substr(0, 70) + "...";
                }
            }
            aDetails.push(" <div style='font-size:10px;position:relative;padding-bottom:2px;'> <div style='position:absolute;top:0px;left:0px;width:" + nKeyColumnWidth + "px;font-weight:bold;'>" + hUserDetailKey[sK] + ":</div> <div style='padding-left:" + nKeyColumnWidth + "px;font-size:10px;indent:" + nKeyColumnWidth + "px;'>" + sValue + "&nbsp;</div> </div> ");
        }
        if (this.hUser.aTags) {
            var sTags = '';
            nCount = 0;
            for (var n = 0; n < this.hUser.aTags.length; n++) {
                if (this.hUser.aTags[n].length > 18) {
                    continue;
                }
                if (n > 8) {
                    sTags += "[<a href=\"javascript:PopUserMenu.hObjectRef['" + this.nInstanceId + "'].all_tags_in_child();\"><b>view&nbsp;all</b></a>] .";
                    break;
                }
                if (t && t.FcTags && t.FcTags.hTagCounts && t.FcTags.hTagCounts[this.hUser.aTags[n].toLowerCase()] > 1) {
                    sTags += A('model_tags', {
                        selected_field: escape(this.hUser.aTags[n])
                    }) + this.hUser.aTags[n].toLowerCase() + "</a>, ";
                } else {
                    sTags += "<span style='text-decoration:underline;'>" + this.hUser.aTags[n].toLowerCase() + "</span>, ";
                }
            }
            if (sTags) {
                aDetails.push(" <div style='height:40px;position:relative;font-size:10px;padding-top:10px;padding-bottom:5px;'> <span style='font-weight:bold;'>Tags: &nbsp;</span> " + sTags.substr(0, sTags.length - 2) + " </div> ");
            }
        }
        var aHtml = new Array();
        aHtml.push(" <table border=0 cellpadding=0 cellspacing=0> <tr> <td valign=top style=\"padding-right:8px;\"> ");
        aHtml.push(" <div style=\"text-align:left;font-size:10px;padding-bottom:15px;white-space:nowrap;\"> <table width=235 cellpadding=0 cellspacing=0> <tr> <td style=\"font-size:10px;\"> ");
        aHtml.push(" <div style=\"cursor:pointer;line-height:15px;\" >" + A('bio', this.hUser) + "Profile</a> Avatar<br>");
        aHtml.push(" <i" + "mg class=avatar_border height=90 width=90 onClick=\"PopUserMenu.hObjectRef[" + this.nInstanceId + "].pop_image({ src:AvatarUrl(" + nUserId + ",300), height:300, width:300,style_class:'avatar_border' });\" ");
        if (this.hUser && this.hUser.avatars > 0) aHtml.push(" sr" + "c=" + AvatarUrl(nUserId, 90));
        else aHtml.push(" sr" + "c=" + g_hC.site_path_images + "/images/misc/clear.gif");
        aHtml.push(" ></td><td style=\"font-size:10px;\">");
        if (this.hUser.access_level == 4) {
            aHtml.push(" <div style=\"cursor:pointer;line-height:15px;\">" + A('player', {
                broadcaster_id: nUserId
            }) + "Chat Room</a> Preview<br><i" + "mg onClick=\" var o = PopUserMenu.hObjectRef['" + this.nInstanceId + "']; o.pop_image({src:o.LiveSnapUrl('" + nUserId + "',320),go_to_room:" + nUserId + ",height:240,width:320,style_class:'livesnap_border'}); \" class=livesnap_border height=90 sr" + "c=" + this.LiveSnapUrl(nUserId, 100) + "> </div> ");
        }
        aHtml.push(" </td> </tr> </table> </div> ");
        if (hOptions.menu) {
            var sHideModel = '';
            if (this.hSelf.access_level && this.hSelf.access_level >= 1 && hUser && this.hUser.access_level == 4) {
                if (this.hUser.hidden) {
                    sHideModel = "<a href=\"javascript:t.HideModel(" + nUserId + ",{ unhide: 1, pm_window: " + (hOptions.pm_window ? 1 : 0) + " });\" >Un-Hide Model</a><br>";
                } else {
                    sHideModel = "Hide Model (<a href=\"javascript:t.HideModel(" + nUserId + ", { pm_window: " + (hOptions.pm_window ? 1 : 0) + " });\">x</a>)<br>";
                }
            } else {
                sHideModel = "Hide Model (" + A('members_feature', {
                    style: 'color:gray;'
                }) + "x</a>)<br>";
            }
            if (this.hUser.active && this.hUser.access_level >= 2 && !hOptions.pm_window) {
                aDetails.push(" <div style='font-size:10px;position:relative;margin-top:10px;height:40px;'> <div style='position:absolute;top:0px;left:0px;width:" + nKeyColumnWidth + "px;font-weight:bold;'>New Images:</div> <div style='padding-left:" + nKeyColumnWidth + "px;indent:" + nKeyColumnWidth + "px;white-space:nowrap;height:35px;width:130px;overflow:hidden;''> ");
                for (var n = 1; n < 5; n++) {
                    aDetails.push(" <i" + "mg sr" + "c=\"http://" + this.mfcImageHost.host(nUserId) + "/photos2/" + nUserId.toString().substr(0, 3) + "/" + nUserId + "/pic" + n + ".x30.jpg\" style=\"cursor:pointer;\" onClick=\"PopUserMenu.hObjectRef[" + this.nInstanceId + "].pop_image({ src:'http://" + this.mfcImageHost.host(nUserId) + "/photos2/" + nUserId.toString().substr(0, 3) + "/" + nUserId + "/pic" + n + ".300x.jpg',container_height:Math.ceil(( 30 / this.width ) * 300) + 10,width:300});\"> ");
                }
                aDetails.push(" </div> </div> </div> ");
            }
            var aLinks = new Array();
            aLinks.push(" <div style='font-size:" + (g_UA.tablet || g_UA.mobile ? 13 : 10) + "px;position:relative;padding:14px 5px 0px 10px;white-space:nowrap;line-height:" + (g_UA.tablet || g_UA.mobile ? 23 : 15) + "px;'> ");
            aLinks.push("<i>Options for <b>" + this.hUser.username + "</b></i><br><br>");
            var sNewsLink = '';
            if (this.hUser.lastnews) {
                var nNewsAge = Math.round((new Date()).getTime() / 1000) - this.hUser.lastnews;
                sNewsLink += (A('news_feed', {
                    user_id: nUserId,
                    username: this.hUser.username
                }) + "View News Feed</a>");
                if (nNewsAge < 129600) {
                    sNewsLink += (" " + A('news_feed', {
                        user_id: nUserId,
                        username: this.hUser.username
                    }) + "<span style='background-color:yellow;'><b>New</b></span></a>");
                }
                sNewsLink += '<br>';
            }
            if (this.hUser.access_level == 4) {
                if (IsBroadcastState(this.hUser.state)) {
                    aLinks.push(A('player', {
                        broadcaster_id: nUserId
                    }) + "Go To Chat Room</a> <br>");
                    aLinks.push(' - ' + A('player', {
                        broadcaster_id: nUserId,
                        target: 'new_window'
                    }) + "Popup Chat Room</a> <br>");
                    aLinks.push('<br>');
                }
                if (!hOptions.pm_window) {
                    aLinks.push((this.hSelf.access_level >= -1 ? A('pm_friend', {
                        user_id: nUserId
                    }) : A('register', {
                        message: 'premium_feature'
                    })) + "Private Message</a> <br>");
                    if (IsBroadcastState(this.hUser.state)) {
                        aLinks.push(' - ' + (this.hSelf.access_level >= -1 ? A('pm_friend', {
                            user_id: nUserId,
                            load_video: 'true'
                        }) : A('register', {
                            message: 'premium_feature'
                        })) + "PM with Webcam</a> <br>");
                        aLinks.push(' - ' + (this.hSelf.access_level >= -1 ? A('pm_friend', {
                            user_id: nUserId,
                            load_video: 'true',
                            full_video: 'true'
                        }) : A('register', {
                            message: 'premium_feature'
                        })) + "Big Webcam</a> <br>");
                    }
                    aLinks.push('<br>');
                }
                if (IsBroadcastState(this.hUser.state)) {
                    if ((this.hSelf.access_level == 2 || this.hSelf.access_level == 5) && this.hUser.access_level == 4) {
                        aLinks.push(A('player', {
                            broadcaster_id: g_hLoungeIds.Lounge,
                            target: 'main',
                            title: 'Go to the Lounge',
                            lounge_model_id: nUserId
                        }) + "View Cam In Lounge</a> <br>");
                        if (t && t.g_hUsers) {
                            if (t.g_hUsers[g_hLoungeIds.Lounge1000]) {
                                aLinks.push(' - ' + A('player', {
                                    broadcaster_id: g_hLoungeIds.Lounge1000,
                                    target: 'main',
                                    title: 'Go to the Lounge',
                                    lounge_model_id: nUserId
                                }) + "In Lounge1000</a> <br>");
                            }
                            if (t.g_hUsers[g_hLoungeIds.Lounge10000]) {
                                aLinks.push(' - ' + A('player', {
                                    broadcaster_id: g_hLoungeIds.Lounge10000,
                                    target: 'main',
                                    title: 'Go to the Lounge',
                                    lounge_model_id: nUserId
                                }) + "In Lounge10000</a> <br>");
                            }
                        }
                        aLinks.push('<br>');
                    }
                }
                if (!IsBroadcastState(this.hUser.state)) {
                    aLinks.push(A('player', {
                        broadcaster_id: nUserId
                    }) + "Go To Chat Room</a> <br>");
                    aLinks.push(' - ' + A('player', {
                        broadcaster_id: nUserId,
                        target: 'new_window'
                    }) + "Popup Chat Room</a> <br>");
                }
                if (this.hSelf.access_level == 2 || this.hSelf.access_level == 5) {
                    aLinks.push(A('tip', {
                        broadcaster_id: nUserId,
                        username: this.hUser.username
                    }) + "Send A Tip</a> <br>");
                }
                if (this.hSelf.access_level >= 2) aLinks.push(A('message', {
                    user_id: nUserId
                }) + "Send MFC Mail</a> <br>");
                else aLinks.push(A('premium_feature', {
                    style: 'color:gray;'
                }) + "Send MFC Mail</a>" + "<br>");
                aLinks.push('<br>');
                aLinks.push("" + A('bio', this.hUser) + "View Full Profile</a> <br>");
                if (this.hSelf.access_level >= 1) aLinks.push(A('chat_logs', {
                    lookup_id: nUserId,
                    lookup_username: this.hUser.username
                }) + "View Chat Log</a>" + "<br>");
                else aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "View Chat Log</a>" + "<br>");
                aLinks.push(sNewsLink);
                if (this.hSelf.access_level == 0) aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "Add Notes</a> <br>");
                else if (this.hUser.notes) aLinks.push(A('user_notepad', {
                    load_user_id: nUserId,
                    target: 'new_window'
                }) + "<span style=\"background-color:yellow;\">View Notes</span></a> <br>");
                else aLinks.push(A('user_notepad', {
                    load_user_id: nUserId,
                    username: this.hUser.username,
                    target: 'new_window'
                }) + "Add Notes</a> <br>");
                aLinks.push(A('model_recommendations', {
                    view_single_model_id: nUserId
                }) + "+Models You May Like</a><br>");
                aLinks.push('<br>');
                if (this.hUser.friend) aLinks.push("Remove Friend (" + A('tx_remove_friend', {
                    remote_user_code: nUserId
                }) + "x</a>) <br>");
                else if (this.hSelf.access_level >= 1) aLinks.push("" + A('tx_add_friend', {
                    remote_user_code: nUserId
                }) + "Add Friend</a> <br>");
                else aLinks.push("" + A('members_feature', {
                    style: 'color:gray;'
                }) + "Add Friend</a> <br>");
                if (this.hSelf.username.match(/^mfcuser$/i)) {
                    if (this.hUser.bookmarked) aLinks.push("Remove Bookmark (" + A('tx_remove_bookmark', {
                        remote_user_code: nUserId
                    }) + "x</a>) <br>");
                    else if (this.hSelf.access_level >= 1) aLinks.push("" + A('tx_add_bookmark', {
                        remote_user_code: nUserId
                    }) + "Bookmark Model</a> <br>");
                    else aLinks.push("" + A('members_feature', {
                        style: 'color:gray;'
                    }) + "Bookmark Model</a> <br>");
                }
                aLinks.push(sHideModel);
            } else {
                if (this.hSelf.access_level > 0) aLinks.push(A('pm_friend', {
                    user_id: nUserId
                }) + "Send A Message</a><br>");
                else aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "Send A Message</a><br>");
                aLinks.push("<br>");
                if (this.hSelf.access_level == 0) aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "Send MFC Mail</a><br>");
                else aLinks.push(A('message', {
                    user_id: nUserId
                }) + "Send MFC Mail</a><br>");
                if (this.hUser.active) aLinks.push(A('bio', this.hUser) + "View Full Profile</a><br>");
                if (this.hSelf.access_level >= 1) aLinks.push(A('chat_logs', {
                    lookup_id: nUserId,
                    lookup_username: this.hUser.username
                }) + "View Chat Log</a>" + "<br>");
                else aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "View Chat Log</a>" + "<br>");
                aLinks.push(sNewsLink);
                if (this.hSelf.access_level == 0) aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "Add Notes</a> <br>");
                else if (this.hUser.notes) aLinks.push(A('user_notepad', {
                    load_user_id: nUserId,
                    target: 'new_window'
                }) + "<span style=\"background-color:yellow;\">View Notes</span></a> <br>");
                else aLinks.push(A('user_notepad', {
                    load_user_id: nUserId,
                    username: this.hUser.username,
                    target: 'new_window'
                }) + "Add Notes</a> <br>");
                aLinks.push("<br>");
                if (this.hSelf.access_level == 0 || !this.hSelf.access_level) aLinks.push(A('members_feature', {
                    style: 'color:gray;'
                }) + "Add Friend</a><br>");
                else if (this.hUser.friend) aLinks.push("Remove Friend (" + A('tx_remove_friend', {
                    remote_user_code: nUserId
                }) + "x</a>)<br>");
                else aLinks.push(A('tx_add_friend', {
                    remote_user_code: nUserId
                }) + "Add Friend</a><br>");
            }
            if (this.hSelf.access_level) {
                if (this.hUser.ignored) {
                    aLinks.push(A('tx_remove_ignore', {
                        remote_user_code: nUserId
                    }) + "Stop Ignoring</a>" + "<br>");
                } else {
                    aLinks.push("Ignore User (" + (A('tx_add_ignore', {
                        remote_user_code: nUserId
                    }) + "x</a>)" + "<br>"));
                }
            } else {
                aLinks.push("Ignore User (" + (A('members_feature', {
                    style: 'color:gray;'
                }) + "x</a>)" + "<br>"));
            }
            var bAdminLinks = false;
            if (top.g_sClearCode && top.g_sClearCode.length > 1 && !g_UA.tablet && !hOptions.pm_window && (this.hSelf.username.match(/^AdminAaron$|^adminleo$|^AdminAndrew$|^valmanway$|^mfcuser$/i))) {
                var bAdminLinks = true;
                aLinks.push("<br><div style='padding:3px;background-color:#E5EEE5;'>Admin Links<br>");
                aLinks.push("");
                aLinks.push("<a href=\"../php/admin_tools.php?command=id_lookup&arg1=" + escape(nUserId) + "&clear_code=" + top.g_sClearCode + "&" + Math.random() + "\" target=_blank >ID Lookup</a>" + "<br>");
                aLinks.push("<a href=# onClick=\"t.Admin('reset'," + nUserId + ");return false;\">Reset</a>" + "<br>");
                aLinks.push("<a href=# onClick=\"t.Admin('disable_user'," + nUserId + ");return false;\">Disable</a>" + "<br>");
                aLinks.push("<a href=../php/rule_violations.php?user_id=" + nUserId + "&code=" + top.g_sClearCode + " target=_blank >Rule Violations</a>" + "<br>");
                aLinks.push("</div>");
            }
            aLinks.push(" </div> ");
        }
        var sScore_MissMFCRank = '';
        if (this.hUser.cam_score > 0) {
            sScore_MissMFCRank += '<b>CamScore:</b> <span style=color:red;>' + Math.round(this.hUser.cam_score) + '</span> &nbsp; &nbsp; ';
        }
        if (this.hUser && this.hUser.access_level == 4) {
            if (this.hUser.state != w.FCVIDEO_UNKNOWN && !g_UA.tablet && !hOptions.pm_window) {
                if (!this.hUser.kbps) {
                    this.hUser.kbps = 100;
                }
                var sBitRateCategory = 2;
                this.hUser.kbps = parseInt(this.hUser.kbps);
                if (this.hUser.kbps > 201) sBitRateCategory = 4;
                else if (this.hUser.kbps > 120) sBitRateCategory = 3;
                else if (this.hUser.kbps > 90) sBitRateCategory = 2;
                else if (this.hUser.kbps > 48) sBitRateCategory = 1;
                else if (this.hUser.kbps > 0) sBitRateCategory = 0;
                hDescriptions = {
                    0: 'Very Bad',
                    1: 'Bad',
                    2: 'Average',
                    3: 'Good',
                    4: 'Very Good'
                };
                sValue = hDescriptions[sBitRateCategory];
            }
            if (this.hUser.missmfc_rank) sScore_MissMFCRank += A('miss_mfc') + "<b>Miss MFC</b></a>: #<span style=\"color:red;\">" + this.hUser.missmfc_rank + "</span>";
        }
        aHtml.push(" <div style='font-size:22px;margin-bottom:15px;font-weight:bold;border-bottom:3px solid #E4E4E4;" + sUsernameStyle + "'>" + (this.hUser.access_level == 4 ? A('player', {
            broadcaster_id: nUserId,
            style: 'text-decoration:none;'
        }) : '') + this.hUser.username + "</a></div> ");
        if (this.hUser.access_level == 4) {
            if (this.hUser.topic) {
                aHtml.push("<div style='font-size:10px;padding-bottom:10px;'><b>Room Topic:</b> " + this.hUser.topic + "</div>");
            }
            aHtml.push("<div style='font-size:10px;padding-bottom:15px;'>");
            if (this.hUser.room_count) {
                aHtml.push(A('player', {
                    broadcaster_id: nUserId
                }) + this.hUser.room_count + " in chat room</a>. ");
            }
            var sMuting = '';
            if (this.hUser.guests_muted) {
                sMuting += "Guests";
            }
            if (this.hUser.basics_muted) {
                if (sMuting) {
                    sMuting += "/";
                }
                sMuting += "Basics";
            }
            if (sMuting) {
                sMuting += " Muted. ";
            }
            aHtml.push(sMuting);
            if (sScore_MissMFCRank) {
                aHtml.push("<br><br><span style=white-space:nowrap;>" + sScore_MissMFCRank + "</span>");
            }
            aHtml.push("</div>");
        }
        aHtml.push(aDetails.join(''));
        aHtml.push(" </td> <td valign=top style=\"border-left:3px solid #E4E4E4;\"> ");
        aHtml.push(aLinks.join(''));
        aHtml.push(" </td> </tr> </table> ");
        return "<div style='padding:6px 0px 12px 10px;'>" + aHtml.join('') + "</div>";
    };
    PopUserMenu.prototype.pop_image = function(hOptions) {
        hOptions = hOptions || {};
        var sPopupChildContent = '';
        sPopupChildContent += "<i" + "mg sr" + "c='" + hOptions.src + "' onClick=\"g_oDhtmlPopup.close('popup_child');\" ";
        if (hOptions.width) sPopupChildContent += " width=" + hOptions.width + " ";
        if (hOptions.height) sPopupChildContent += " height=" + hOptions.height + " ";
        if (hOptions.style_class) sPopupChildContent += " class=" + hOptions.style_class + " ";
        sPopupChildContent += ">";
        if (hOptions.go_to_room && t && t.A) {
            sPopupChildContent += "<div style=white-space:nowrap;width:250px;>" + A('player', {
                broadcaster_id: hOptions.go_to_room
            }) + "Go to <b>" + this.hUser.username + "'s</b> Room</div>";
        }
        if (hOptions.container_height || hOptions.container_width) {
            var sContainer = "<div style=\"";
            if (hOptions.container_height) sContainer += "height:" + hOptions.container_height + "px;";
            if (hOptions.container_width) sContainer += "width:" + hOptions.container_width + "px;";
            sContainer += "\">";
            sPopupChildContent = sContainer + sPopupChildContent;
            sPopupChildContent += "</div>";
        }
        this.oDhtmlPopup.open(sPopupChildContent, 'child');
    };
    PopUserMenu.prototype.get_all_tags = function() {
        var sStyle = this.hSelf.chat_text_ignore ? '' : MfcCustomFonts.prototype.get_style(this.hUser);
        var sContent = '';
        var sTags = '';
        var nCount = 0;
        for (var n = 0; n < this.hUser.aTags.length; n++) {
            if (t && t.FcTags && t.FcTags.hTagCounts && t.FcTags.hTagCounts[this.hUser.aTags[n].toLowerCase()] > 1) {
                nCount++;
                sTags += A('model_tags', {
                    selected_field: escape(this.hUser.aTags[n])
                }) + this.hUser.aTags[n].toLowerCase() + "</a>, ";
            } else {
                sTags += "<span style='text-decoration:underline;'>" + this.hUser.aTags[n].toLowerCase() + "</span>, ";
            }
        }
        sContent = " <div style=\"font-size:13px;width:200px;\"> <div style='font-weight:bold;font-size:15px;'>Tags for " + this.hUser.username + "</div> <div style='padding:10px;'>" + sTags.substr(0, sTags.length - 2) + "</div> </div> ";
        return sContent;
    };
    PopUserMenu.prototype.all_tags_in_child = function() {
        this.oDhtmlPopup.open(this.get_all_tags(), 'child');
    };

    function MfcProgressBar(hOptions) {
        if (hOptions == undefined) {
            hOptions = {};
        }
        if (MfcProgressBar.nId == undefined) MfcProgressBar.nId = 0;
        MfcProgressBar.nId++;
        this.nId = MfcProgressBar.nId;
        this.hConstructorOptions = {};
        for (var sK in hOptions) {
            this.hConstructorOptions[sK] = hOptions[sK];
        }
        this.Initialize(hOptions);
    };
    MfcProgressBar.prototype.Initialize = function(hOptions) {
        if (hOptions == undefined) {
            hOptions = {};
        }
        for (var sK in this.hConstructorOptions) {
            if (hOptions[sK] == undefined) {
                hOptions[sK] = this.hConstructorOptions[sK];
            }
        }
        this.nTotalWidth = hOptions.width;
        this.nInitialValue = hOptions.initial_value;
        this.nFinalValue = hOptions.final_value;
        this.sOutputElement = hOptions.output_element;
        this.nSmoothingResolution = hOptions.smoothing_resolution || 20;
        this.nSmoothingTime = hOptions.smoothing_time || 20;
        this.nSmoothingTime = hOptions.smoothing_time || 20;
        this.completion_callback = hOptions.completion_callback || null;
        this.nTimeout = 0;
        this.nSmoothCounter = 1;
        this.nIncrementWidth = 0;
        this.nNewWidth = 0;
        this.sContainerStyle = hOptions.container_style;
        this.sBarStyle = hOptions.bar_style;
    };
    MfcProgressBar.prototype.DrawProgressBar = function() {
        var sHtml = " <div style=\"width:" + this.nTotalWidth + "px;" + this.sContainerStyle + "\"> <div id=ProgressBarDiv" + this.nId + " style=\"width:0px;" + this.sBarStyle + "\">&nbsp;</div> </div> ";
        if (this.sOutputElement) {
            document.getElementById(this.sOutputElement).innerHTML = sHtml;
        }
        return sHtml;
    };
    MfcProgressBar.prototype.Update = function(nCurrentValue) {
        if (this.nInitialValue == undefined) {
            this.nInitialValue = 0;
        }
        if (this.nOldWidth == undefined) {
            this.nOldWidth = (this.nInitialValue / this.nFinalValue) * this.nTotalWidth;
        }
        if (nCurrentValue <= 0) {
            this.nOldWidth = 0;
            this.AdvanceBar(0);
            return;
        } else {
            this.nNewWidth = (nCurrentValue / this.nFinalValue) * this.nTotalWidth;
            if (this.nNewWidth > this.nTotalWidth) {
                clearTimeout(this.nTimeout);
                this.nOldWidth = this.nTotalWidth;
                this.AdvanceBar(this.nTotalWidth);
                return;
            }
            this.nIncrementWidth = (this.nNewWidth - this.nOldWidth) / this.nSmoothingResolution;
            this.nSmoothCounter = 1;
            this.nOldWidth = this.nNewWidth;
            this.IncrementWidth();
        }
    };
    MfcProgressBar.prototype.IncrementWidth = function() {
        var nIncrementedWidth = this.nNewWidth - ((this.nSmoothingResolution - this.nSmoothCounter) * this.nIncrementWidth);
        if (nIncrementedWidth > this.nTotalWidth) {
            this.AdvanceBar(this.nTotalWidth);
            if (this.completion_callback) {
                this.completion_callback();
            }
            return;
        }
        this.AdvanceBar(nIncrementedWidth);
        if (this.nSmoothCounter <= this.nSmoothingResolution) {
            clearTimeout(this.nTimeout);
            this.nTimeout = setTimeout(this.Bind(this.IncrementWidth), this.nSmoothingTime);
            this.nSmoothCounter++;
        }
    };
    MfcProgressBar.prototype.AdvanceBar = function(nWidth) {
        if (document.getElementById('ProgressBarDiv' + this.nId) != undefined) document.getElementById('ProgressBarDiv' + this.nId).style.width = Math.round(nWidth) + 'px';
    };
    MfcProgressBar.prototype.Bind = function(Method) {
        var me = this;
        return (function() {
            return (Method.apply(me, arguments));
        });
    };

    function MfcQueue() {
        this.aCmdBuf = new Array();
        this.nInterval = null;
        this.nSuspend = null;
    };
    MfcQueue.prototype.Queue = function(sCommand) {
        if (sCommand) this.aCmdBuf.push(sCommand);
    };
    MfcQueue.prototype.Process = function() {
        while (this.aCmdBuf.length > 0) {
            ParseLine(this.aCmdBuf.shift());
        }
    };
    MfcQueue.prototype.Start = function() {
        this.Stop();
        this.nInterval = setInterval(bind(this, this.Process), 10);
    };
    MfcQueue.prototype.Stop = function() {
        if (this.nInterval) {
            clearInterval(this.nInterval);
            this.nInterval = null;
        }
    };
    MfcQueue.prototype.Suspend = function(nDelay) {
        if (!nDelay) nDelay = 1000;
        Log('Suspend for ' + nDelay);
        this.Stop();
        clearTimeout(clearTimeout);
        this.nSuspend = setTimeout(bind(this, this.Start), nDelay);
    };

    function MfcReportBack(sReportName) {
        this.oRequestObject = createRequestObject();
        this.sReportName = sReportName;
    }
    MfcReportBack.prototype.Send = function(sLabel, sMessage) {
        this.oRequestObject.open("get", "/mfc2/php/MfcReportBack.php?" + "report_name=" + escape(this.sReportName) + "&" + "label=" + escape(sLabel) + "&" + "message=" + escape(sMessage));
        this.oRequestObject.send(null);
    };

    function MfcDhtmlWindow(hOptions) {
        if (hOptions == undefined) {
            hOptions = {};
        }
        if (MfcDhtmlWindow.nId == undefined) MfcDhtmlWindow.nId = 10;
        MfcDhtmlWindow.nId++;
        this.nId = MfcDhtmlWindow.nId;
        this.height = hOptions.height || 400;
        this.width = hOptions.width || 100;
        this.left = hOptions.left;
        this.top = hOptions.top;
        this.nTopAdd = hOptions.top_add;
        this.url = hOptions.url;
        this.maximize_iframe = hOptions.maximize_iframe;
        this.hUA = new MfcUserAgent();
        this.mfcMouseTracker = hOptions.MfcMouseTracker;
        this.mfcClickDrag = hOptions.MfcClickDrag;
        this.mfcMousePress = hOptions.MfcMousePress;
        this.oCloseWindowHandler = hOptions.oCloseWindowHandler;
        this.use_plain_container = hOptions.use_plain_container;
        this.sTitle = hOptions.sTitle;
        this.nPadHeight = hOptions.pad_height || 43;
        this.nPadWidth = hOptions.pad_width || 20;
        this.sIconUrl = hOptions.icon_url;
        this.sIconSpriteCss = hOptions.icon_sprite_css;
        this.sTitle = hOptions.title;
        this.sContainingDivId = hOptions.containing_div_id;
        this.sSpecialClass = (this.hUA.mobile || this.hUA.tablet) ? 'MfcDhtmlWindow_mobile' : 'MfcDhtmlWindow_standard';
        if (this.sSpecialClass == 'MfcDhtmlWindow_mobile') {
            this.nPadHeight += 35;
            this.nPadWidth += 20;
        }
        if (this.use_plain_container) {
            this.nPadWidth -= 6;
        }
        var hViewportDimension = this.hUA.GetViewportDimensions();
        if ((this.height + 100) > hViewportDimension.height) {
            this.height = (hViewportDimension.height - 150);
        }
        this.Open();
    };
    MfcDhtmlWindow.zIndex = 1;
    MfcDhtmlWindow.prototype.Open = function() {
        var sDebugBorder = 0;
        var sIcon = '';
        if (this.sIconUrl) {
            sIcon = "<img src='" + this.sIconUrl + "'>";
        }
        sHtml = "\
 <div id='MfcDhtmlWindow_shield_" + this.nId + "' style=\"display:none;position:absolute;top:0px;left:0px;\"> &nbsp; </div> <div class='MfcDhtmlWindow_container MfcDhtmlWindow_container_shadow " + this.sSpecialClass + "_container' id='MfcDhtmlWindow_container_" + this.nId + "' style='position:absolute;opacity:1;height:" + (this.height + this.nPadHeight) + "px;width:" + (this.width + this.nPadWidth) + ";' > <div id='MfcDhtmlWindow_table_container_" + this.nId + "'> <table cellpadding=0 cellspacing=0 border=" + sDebugBorder + " id=MfcDhtmlWindow_table_" + this.nId + "> <tr> <td> <table width=100% cellpadding=0 cellspacing=0 border=" + sDebugBorder + "> <tr> <td width=10 class='MfcDhtmlWindow_grip_top_left " + this.sSpecialClass + "_grip_top_left' id='MfcDhtmlWindow_grip_top_left_" + this.nId + "'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td> <td width=100%> <div class='MfcDhtmlWindow_grip_top " + this.sSpecialClass + "_grip_top' id='MfcDhtmlWindow_grip_top_" + this.nId + "'>&nbsp;</div> </td> <td width=10 class='MfcDhtmlWindow_grip_top_right " + this.sSpecialClass + "_grip_top_right' id='MfcDhtmlWindow_grip_top_right_" + this.nId + "'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td> </table> </td> </tr> <tr> <td height=100%> <table height=100% width=100% cellpadding=0 cellspacing=0 border=" + sDebugBorder + "> <tr> <td rowspan=2 class='MfcDhtmlWindow_grip_left " + this.sSpecialClass + "_grip_left' id='MfcDhtmlWindow_grip_left_" + this.nId + "'> &nbsp; </td> <td class=MfcDhtmlWindow_grip_td > <div class='MfcDhtmlWindow_grip_move " + this.sSpecialClass + "_grip_move' id='MfcDhtmlWindow_grip_move_" + this.nId + "'> &nbsp; </div> <div class='MfcDhtmlWindow_icon " + this.sSpecialClass + "_icon' id='MfcDhtmlWindow_icon_" + this.nId + "'> ";
        if (this.sIconSpriteCss) sHtml += "<div class='" + this.sIconSpriteCss + "'></div>";
        else sHtml += sIcon;
        sHtml += " </div> <div class='MfcDhtmlWindow_heading " + this.sSpecialClass + "_heading' id='MfcDhtmlWindow_heading_" + this.nId + "'> " + (this.sTitle || '') + " </div> <div class='MfcDhtmlWindow_controls " + this.sSpecialClass + "_controls'> <div id='MfcDhtmlWindow_minimize_" + this.nId + "' class='MfcDhtmlWindow_minimize " + this.sSpecialClass + "_minimize'>Minimize</div> <div id='MfcDhtmlWindow_close_" + this.nId + "' class='MfcDhtmlWindow_close " + this.sSpecialClass + "_close'>&nbsp;</div> </div>\
 </td> <td rowspan=2 class='MfcDhtmlWindow_grip_right " + this.sSpecialClass + "_grip_right' id='MfcDhtmlWindow_grip_right_" + this.nId + "'> &nbsp; </td> </tr> <tr> <td height=100%> <div class='MfcDhtmlWindow_" + (this.use_plain_container ? 'plain_' : '') + "inner_container " + this.sSpecialClass + "_inner_container' id='MfcDhtmlWindow_inner_container_" + this.nId + "'> <iframe ALLOWTRANSPARENCY=\"true\" name=MfcDhtmlWindow_iframe_" + this.nId + " id='MfcDhtmlWindow_iframe_" + this.nId + "' style=\"\" src='" + this.url + "' frameborder=0 borderwidth=0 height=" + this.height + " width=" + this.width + " ></iframe> </div> </td> </tr> </table> </td> </tr> <tr> <td> <table width=100% cellpadding=0 cellspacing=0 border=" + sDebugBorder + "> <tr> <td width=20 class='MfcDhtmlWindow_grip_bottom_left " + this.sSpecialClass + "_grip_bottom_left' id='MfcDhtmlWindow_grip_bottom_left_" + this.nId + "'> &nbsp; </td> <td class='MfcDhtmlWindow_grip_bottom " + this.sSpecialClass + "_grip_bottom' id='MfcDhtmlWindow_grip_bottom_" + this.nId + "'> &nbsp; </td> <td width=20 class='MfcDhtmlWindow_grip_bottom_right " + this.sSpecialClass + "_grip_bottom_right' id='MfcDhtmlWindow_grip_bottom_right_" + this.nId + "'> &nbsp; </td> </table> </td> </tr> </table> </div> </div> ";
        this.oMasterDiv = document.createElement('div');
        this.oMasterDiv.innerHTML = sHtml;
        this.oContainingDiv = document.getElementById(this.sContainingDivId);
        this.oContainingDiv.appendChild(this.oMasterDiv);
        this.oContainerDiv = document.getElementById('MfcDhtmlWindow_container_' + this.nId);
        this.oShieldDiv = document.getElementById('MfcDhtmlWindow_shield_' + this.nId);
        this.oTableContainerDiv = document.getElementById('MfcDhtmlWindow_table_container_' + this.nId);
        this.oTableDiv = document.getElementById('MfcDhtmlWindow_table_' + this.nId);
        this.oInnerContainer = document.getElementById('MfcDhtmlWindow_inner_container_' + this.nId);
        this.oIframe = document.getElementById('MfcDhtmlWindow_iframe_' + this.nId);
        this.oGripMove = document.getElementById('MfcDhtmlWindow_grip_move_' + this.nId);
        this.oClose = document.getElementById('MfcDhtmlWindow_close_' + this.nId);
        this.oMinimize = document.getElementById('MfcDhtmlWindow_minimize_' + this.nId);
        this.oIframeHandle = window.frames['MfcDhtmlWindow_iframe_' + this.nId];
        var self = this;
        this.oIframe.onload = function() {
            self.AttachToIframeDocument();
        };
        this.oClose.onclick = function() {
            self.Close(self);
        };
        this.oMinimize.onclick = function() {
            self.Minimize(self);
        };
        this.oTableDiv.style.width = '100%';
        this.oTableDiv.style.height = '100%';
        var sSetName = 'MfcDhtmlWindow_grip_move_' + this.nId;
        var hClickDragSet = {};
        hClickDragSet[sSetName] = {
            subject_id: 'MfcDhtmlWindow_container_' + this.nId,
            hAdjustments: {
                Y: {
                    top: {}
                },
                X: {
                    left: {}
                }
            }
        };
        this.mfcClickDrag.AddSet(hClickDragSet);
        var self = this;
        var hMousePressElement = {};
        hMousePressElement[sSetName] = {
            bypass_mouseout_failsafe: this.hUA.IE ? 0 : 1,
            left_click: {
                onmousedown: function(e) {
                    self.OnMouseDown('move');
                    self.mfcClickDrag.OnMouseDown('MfcDhtmlWindow_grip_move_' + self.nId);
                },
                onmousemove: function(e) {
                    self.mfcClickDrag.OnMouseMove(e);
                },
                onmouseup: function(e) {
                    self.OnMouseUp();
                    self.mfcClickDrag.OnMouseUp(e);
                },
                onselectstart: function() {
                    return false;
                }
            }
        };
        this.mfcMousePress.AddNamedElement(hMousePressElement);
        var hSidesConfig = {
            bottom_right: {
                Y: {
                    height: {}
                },
                X: {
                    width: {}
                }
            },
            right: {
                X: {
                    width: {}
                }
            },
            left: {
                X: {
                    width: {
                        inverse: true
                    },
                    left: {}
                }
            },
            top: {
                Y: {
                    height: {
                        inverse: true
                    },
                    top: {}
                }
            },
            top_right: {
                Y: {
                    height: {
                        inverse: true
                    },
                    top: {}
                },
                X: {
                    width: {}
                }
            },
            top_left: {
                Y: {
                    height: {
                        inverse: true
                    },
                    top: {}
                },
                X: {
                    width: {
                        inverse: true
                    },
                    left: {}
                }
            },
            bottom_left: {
                Y: {
                    height: {}
                },
                X: {
                    width: {
                        inverse: true
                    },
                    left: {}
                }
            },
            bottom: {
                Y: {
                    height: {}
                }
            }
        };
        for (sSide in hSidesConfig) {
            var sSetName = 'MfcDhtmlWindow_grip_' + sSide + '_' + this.nId;
            var hClickDragSet = {};
            hClickDragSet[sSetName] = {
                min_height: 200,
                min_width: 200,
                subject_id: 'MfcDhtmlWindow_container_' + this.nId,
                hAdjustments: CloneObject(hSidesConfig[sSide])
            };
            this.mfcClickDrag.AddSet(hClickDragSet);
            with({
                sSide: sSide
            }) {
                var hMousePressElement = {};
                hMousePressElement[sSetName] = {
                    left_click: {
                        onmousedown: function(e) {
                            self.OnMouseDown(sSide);
                            self.mfcClickDrag.OnMouseDown('MfcDhtmlWindow_grip_' + sSide + '_' + self.nId);
                        },
                        onmousemove: function(e) {
                            self.mfcClickDrag.OnMouseMove(e);
                        },
                        onmouseup: function(e) {
                            self.OnMouseUp();
                            self.mfcClickDrag.OnMouseUp(e);
                        },
                        onselectstart: function() {
                            return false;
                        }
                    }
                };
                this.mfcMousePress.AddNamedElement(hMousePressElement);
            }
        }
        this.Position();
        this.mfcMousePress.AttachEvents();
        this.BringToFront();
        setTimeout(this.BringToFront, 500);
    };
    MfcDhtmlWindow.prototype.AttachToIframeDocument = function() {
        var self = this;
        this.oIframeHandle.onfocus = function() {
            self.BringToFront();
        };
        addEvent('touchstart', this.oIframeHandle, function() {
            self.BringToFront()
        }, true);
        if (this.maximize_iframe && (this.hUA.mobile || this.hUA.tablet)) {
            setTimeout(function() {
                self.ResizeIframe(self);
            }, 500);
            clearInterval(this.ResizeIframeInterval);
            this.ResizeIframeInterval = setInterval(function() {
                self.ResizeIframe(self);
            }, 1500);
        }
    };
    MfcDhtmlWindow.prototype.ResizeIframe = function(self) {
        self = self || this;
        this.height = self.GetDocSize('Height', self.oIframeHandle.document);
        self.oIframe.height = this.height + 'px';
        self.oContainerDiv.style.height = (this.height + self.nPadHeight) + 'px';
        this.width = self.GetDocSize('Width', self.oIframeHandle.document);
        self.oIframe.width = this.width + 'px';
        self.oContainerDiv.style.width = (this.width + self.nPadWidth) + 'px';
    };
    MfcDhtmlWindow.prototype.GetDocSize = function(sAxis, oDocument) {
        var oDocument = oDocument || document;
        return Math.max(Math.max(oDocument.body['scroll' + sAxis], oDocument.documentElement['scroll' + sAxis]), Math.max(oDocument.body['offset' + sAxis], oDocument.documentElement['offset' + sAxis]), Math.max(oDocument.body['client' + sAxis], oDocument.documentElement['client' + sAxis]));
    };
    MfcDhtmlWindow.prototype.BringToFront = function() {
        if (this.oContainerDiv && this.oContainerDiv.style) this.oContainerDiv.style.zIndex = MfcDhtmlWindow.zIndex++;
    };
    MfcDhtmlWindow.prototype.GetIframeReference = function(nValue) {
        return window.frames['MfcDhtmlWindow_iframe_' + this.nId];
    };
    MfcDhtmlWindow.prototype.SetOpacity = function(oSubject, nValue) {
        oSubject.style.opacity = nValue / 10;
        oSubject.style.filter = 'alpha(opacity=' + nValue * 10 + ')';
    };
    MfcDhtmlWindow.prototype.OnMouseDown = function(sSide) {
        this.sHighlightDiv = 'MfcDhtmlWindow_grip_' + sSide + '_' + this.nId;
        this.oContainingDiv.style.overflow = 'hidden';
        this.oContainerDiv.className = 'MfcDhtmlWindow_container ' + this.sSpecialClass + '_container';
        if (this.hUA.mobile || this.hUA.tablet) {
            document.getElementById(this.sHighlightDiv).style.backgroundColor = '#CCEECC';
            document.ontouchmove = function(e) {
                e.preventDefault();
            };
        }
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        viewportHeight -= 10;
        viewportWidth -= 10;
        this.oShieldDiv.style.display = 'block';
        this.oShieldDiv.style.height = viewportHeight + 'px';
        this.oShieldDiv.style.width = viewportWidth + 'px';
        this.original_zIndex = this.oContainingDiv.style.zIndex || 1;
        this.oContainingDiv.style.zIndex = 100;
        this.oShieldDiv.style.zIndex = this.oContainingDiv.style.zIndex - 1;
        this.oShieldDiv.style.backgroundColor = 'white';
        this.SetOpacity(this.oShieldDiv, 0);
        this.oInnerContainer.style.display = 'none';
        this.oGripMove.style.visibility = 'hidden';
        this.SetOpacity(this.oContainerDiv, 7.5);
        this.BringToFront();
    };
    MfcDhtmlWindow.prototype.OnMouseUp = function() {
        if (!this.oContainerDiv) {
            return;
        }
        this.oContainingDiv.style.zIndex = this.original_zIndex || 1;
        this.oContainingDiv.style.overflow = '';
        this.oContainerDiv.className = 'MfcDhtmlWindow_container MfcDhtmlWindow_container_shadow ' + this.sSpecialClass + '_container';
        if (this.hUA.mobile || this.hUA.tablet) {
            document.getElementById(this.sHighlightDiv).style.backgroundColor = '';
            document.ontouchmove = null;
        }
        this.oInnerContainer.style.display = 'block';
        this.oGripMove.style.visibility = 'visible';
        this.oShieldDiv.style.display = 'none';
        if (this.bDoubleClick) {
            this.MaximizeWindow();
        } else {
            this.bDoubleClick = 1;
            var self = this;
            setTimeout(function() {
                self.bDoubleClick = 0;
            }, 500);
            this.MouseResize();
        }
        this.SetOpacity(this.oContainerDiv, 10);
        if (this.hUA.IE) {
            this.oShieldDiv.style.backgroundColor = '';
            this.SetOpacity(this.oShieldDiv, 1);
        }
        if (this.maximize_iframe && (this.hUA.mobile || this.hUA.tablet)) {
            var self = this;
            setTimeout(function() {
                self.ResizeIframe(self);
            }, 500);
        }
    };
    MfcDhtmlWindow.prototype.MouseResize = function(self) {
        var oResult = this.mfcClickDrag.hAdjustmentResults['MfcDhtmlWindow_container_' + this.nId];
        if (oResult && oResult.Y && oResult.Y.height != undefined) {
            this.height = oResult.Y.height.value;
            var nHeight = this.height - this.nPadHeight;
            this.oIframe.height = nHeight;
            try {
                this.oIframeHandle.document.body.style.height = nHeight;
            } catch (e) {}
        }
        if (oResult && oResult.X && oResult.X.width != undefined) {
            this.width = oResult.X.width.value;
            var nWidth = this.width - this.nPadWidth;
            this.oIframe.width = nWidth;
            try {
                this.oIframeHandle.document.body.style.width = nWidth;
            } catch (e) {}
        }
        if (oResult && oResult.X && oResult.X.left != undefined) {
            var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (oResult.X.left.value > viewportWidth) {
                this.oContainerDiv.style.left = (viewportWidth - 100);
            } else if (oResult.X.left.value < 0 - this.width) {
                this.oContainerDiv.style.left = (100 - this.oIframe.width)
            };
        }
        if (oResult && oResult.Y && oResult.Y.top != undefined) {
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if (oResult.Y.top.value > viewportHeight) {
                this.oContainerDiv.style.top = (viewportHeight - 100);
            } else if (oResult.Y.top.value < 0) {
                this.oContainerDiv.style.top = 0;
            };
        }
    };
    MfcDhtmlWindow.prototype.Close = function(self) {
        clearInterval(this.ResizeIframeInterval);
        try {
            self.oMasterDiv.parentNode.removeChild(self.oMasterDiv);
        } catch (e) {}
        if (this.oCloseWindowHandler) {
            this.oCloseWindowHandler();
        }
    };
    MfcDhtmlWindow.prototype.Minimize = function(self) {
        self.MinMaxAnimation_Step = 0;
        self.MinMaxAnimation('away');
    };
    MfcDhtmlWindow.prototype.MinMaxAnimation = function(sDirection) {
        var aBrowserVariants = ['Webkit', 'Ms', 'O', 'Moz'];
        if (this.MinMaxAnimation_Step <= 10 && !this.hUA.mobile && !this.hUA.tablet) {
            this.oMasterDiv.style.display = 'block';
            var fScale;
            if (sDirection == 'towards') {
                fScale = (this.MinMaxAnimation_Step) / 10;
            } else {
                fScale = (10 - this.MinMaxAnimation_Step) / 10;
            }
            var sTransform = "scale(" + fScale + "," + fScale + ")";
            for (n = 0; n < aBrowserVariants.length; n++) this.oContainerDiv.style[aBrowserVariants[n] + 'Transform'] = sTransform;
            this.MinMaxAnimation_Step += 2;
            var self = this;
            setTimeout(function() {
                self.MinMaxAnimation(sDirection);
            }, 0);
        } else {
            this.oMasterDiv.style.display = sDirection == 'towards' ? 'block' : 'none';
        }
    };
    MfcDhtmlWindow.prototype.Restore = function(self) {
        self.BringToFront();
        if (self.oMasterDiv.style.display != 'none') {
            return;
        }
        self.oMasterDiv.style.display = 'block';
        self.MinMaxAnimation_Step = 0;
        self.MinMaxAnimation('towards');
    };
    MfcDhtmlWindow.prototype.Position = function() {
        var nRight = 0;
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var nWidth = this.width;
        var nHeight = this.height;
        var nLeftPos = this.left != undefined && !isNaN(this.left) ? this.left : (viewportWidth - nWidth) / 2;
        if (this.top == undefined || isNaN(this.top)) {
            if (this.maximize_iframe) {
                var sTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
                this.top = (sTop + this.mfcMouseTracker.clientY) - Math.round(nHeight / 2);
            } else {
                this.top = (viewportHeight - nHeight) / 2;
            }
        }
        var nTopPos = this.top;
        if (this.nTopAdd) {
            nTopPos += this.nTopAdd;
        }
        if (nTopPos < 0) {
            nTopPos = 0;
        }
        this.oContainerDiv.style.top = nTopPos + 'px';
        this.oContainerDiv.style.left = nLeftPos + 'px';
    };
    MfcDhtmlWindow.prototype.Size = function() {
        this.oIframe.height = this.height + 'px';
        this.oContainerDiv.style.height = (this.height + this.nPadHeight) + 'px';
        this.oIframe.width = this.width + 'px';
        this.oContainerDiv.style.width = (this.width + this.nPadWidth) + 'px';
    };
    MfcDhtmlWindow.prototype.MaximizeWindow = function() {
        this.hPriorToMaximized;
        if (this.hPriorToMaximized) {
            this.top = this.hPriorToMaximized.top;
            this.left = this.hPriorToMaximized.left;
            this.height = this.hPriorToMaximized.height;
            this.width = this.hPriorToMaximized.width;
            delete this.hPriorToMaximized;
            this.oContainerDiv.style.top = this.top + 'px';
            this.oContainerDiv.style.left = this.left + 'px';
            this.Size();
            return;
        }
        this.hPriorToMaximized = {
            top: this.top,
            left: this.left,
            height: this.height,
            width: this.width
        };
        this.top = 10;
        this.left = 10;
        this.oContainerDiv.style.top = this.top + 'px';
        this.oContainerDiv.style.left = this.left + 'px';
        var viewportWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.width = viewportWidth - this.nPadWidth - 210;
        this.height = viewportHeight - this.nPadHeight - 25;
        this.Size();
    };

    function ValidateEmail(sEmail) {
        hDomainList = new Array('10minutemail.com', '2prong.com', '4warding.com', '6url.com', 'afrobacon.com', 'antispam24.de', 'bugmenot.com', 'bumpymail.com', 'bupkiss.net', 'centermail.com', 'centermail.net', 'choicemail1.com', 'deadspam.com', 'despam.it', 'despammed.com', 'discardmail.com', 'discardmail.de', 'disposeamail.com', 'dodgeit.com', 'dodgit.com', 'dontreg.com', 'dontsendmespam.de', 'dumpandjunk.com', 'dumpmail.de', 'e4ward.com', 'emaildienst.de', 'emailias.com', 'emailto.de', 'emailxfer.com', 'emz.net', 'enterto.com', 'fificorp.com', 'fificorp.net', 'front14.org', 'getonemail.com', 'ghosttexter.de', 'gishpuppy.com', 'golfilla.info', 'gorillaswithdirtyarmpits.com', 'greensloth.com', 'guerrillamail.com', 'guerrillamail.net', 'h8s.org', 'haltospam.com', 'hatespam.org', 'hidemail.de', 'iheartspam.org', 'instig8.com', 'ipoo.org', 'jetable.com', 'jetable.net', 'jetable.org', 'kasmail.com', 'killmail.com', 'killmail.net', 'klassmaster.net', 'link2mail.net', 'loftmail.com', 'lortemail.dk', 'mail2rss.org', 'mail333.com', 'mailblocks.com', 'maileater.com', 'mailexpire.com', 'mailfreeonline.com', 'mailmoat.com', 'mailnull.com', 'mailshell.com', 'mailsiphon.com', 'mailzilla.com', 'meinspamschutz.de', 'messagebeamer.de', 'mintemail.com', 'myspamless.com', 'mytrashmail.com', 'neomailbox.com', 'nervmich.net', 'nervtmich.net', 'netmails.com', 'netmails.net', 'netzidiot.de', 'nobulk.com', 'noclickemail.com', 'nospamfor.us', 'nurfuerspam.de', 'oneoffemail.com', 'oopi.org', 'outlawspam.com', 'pancakemail.com', 'poofy.org', 'pookmail.com', 'privacy.net', 'punkass.com', 'put2.net', 'regbypass.com', 'rejectmail.com', 'safersignup.de', 'senseless-entertainment.com', 'shortmail.net', 'sibmail.com', 'slaskpost.se', 'sneakemail.com', 'sofort-mail.de', 'spam.la', 'spamavert.com', 'spambob.com', 'spambob.net', 'spambob.org', 'spambox.us', 'spambox.info', 'spamcon.org', 'spamday.com', 'spamex.com', 'spamfree24.com', 'spamfree24.net', 'spamfree24.org', 'spamgourmet.com', 'spamhole.com', 'spamify.com', 'spaminator.de', 'spamslicer.com', 'spaml.com', 'spammotel.com', 'spamoff.de', 'spamtrail.com', 'tailflames.com', 'tempemail.net', 'tempinbox.com', 'temporarily.de', 'temporaryforward.com', 'temporaryforwarding.com', 'temporaryinbox.com', 'throwaway.de', 'trashmail.com', 'trashmail.net', 'trashmail.org', 'trashmail.de', 'trash-mail.de', 'twinmail.de', 'ubuntwo.com', 'venompen.com', 'wegwerfadresse.de', 'wh4f.org', 'willselfdestruct.com', 'woodyland.org', 'wuzup.net', 'wuzupmail.net', 'wwwnew.eu', 'mx0.wwwnew.eu', 'bodhi.lawlita.com', 'xemaps.com', 'xents.com', 'xmaily.com', 'yep.it', 'yopmail.com', 'zoemail.org', 'fakeinformation.com', 'fastacura.com', 'fastchevy.com', 'fastchrysler.com', 'fastkawasaki.com', 'fastmazda.com', 'fastmitsubishi.com', 'fastnissan.com', 'fastsubaru.com', 'fastsuzuki.com', 'fasttoyota.com', 'fastyamaha.com', 'fuckingduh.com', 'fux0ringduh.com', 'klassmaster.com', 'mailin8r.com', 'mailinator.com', 'mailinator.net', 'mailinater.com', 'mailinator2.com', 'sogetthis.com', '675hosting.com', '675hosting.net', '675hosting.org', '75hosting.com', '75hosting.net', '75hosting.org', 'ajaxapp.net', 'amiri.net', 'amiriindustries.com', 'emailmiser.com', 'etranquil.com', 'etranquil.net', 'etranquil.org', 'gowikibooks.com', 'gowikicampus.com', 'gowikicars.com', 'gowikifilms.com', 'gowikigames.com', 'gowikimusic.com', 'gowikinetwork.com', 'gowikitravel.com', 'gowikitv.com', 'iwi.net', 'myspaceinc.com', 'myspaceinc.net', 'myspaceinc.org', 'myspacepimpedup.com', 'ourklips.com', 'pimpedupmyspace.com', 'rklips.com', 'turual.com', 'upliftnow.com', 'uplipht.com', 'viditag.com', 'viewcastmedia.com', 'viewcastmedia.net', 'viewcastmedia.org', 'wetrainbayarea.com', 'wetrainbayarea.org', 'xagloo.com');
        sErr = '';
        if (sEmail.indexOf("@") > 0) {
            var domain = sEmail.substr(sEmail.indexOf("@") + 1, 500);
            for (var sK in hDomainList) {
                if (hDomainList[sK] == domain) {
                    sErr += "In accordance with our Terms and Conditions, we do not accept so-called disposable e-mail addresses for registration with our site. We offer a full explanation for our decision on our Frequently Asked Questions page. We never spam our members and your privacy is always our primary concern. We encourage you to join our site with your real e-mail address. Thanks!\n";
                }
            }
        }
        var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (sEmail.length > 32) {
            sErr += "Your email must be 32 characters or less.\n";
        } else if (filter.test(sEmail) == false) {
            sErr += "Invalid email address. Please enter your own personal valid e-mail address in the form of user@domain.com to continue.\n";
        } else if (sEmail.indexOf("@domain.com") > -1) {
            sErr += "You need to enter your own personal email address.\n";
        } else if (sEmail.substring(0, 4) == "www.") {
            if (confirm("Are you sure the name " + sEmail + " is correct? It might be just " + sEmail.substring(4, 999) + ". You should probably remove the WWW before proceeding, so please hit Cancel and re-enter the correct email.") == true) return true;
        } else if (sEmail.substr(sEmail.length - 3, 3) == ".co") {
            if (confirm("Are you sure the email should end in .co? If you meant .com, hit 'cancel' and fix before submitting.") == true) return true;
        }
        if (sErr) {
            return sErr;
        } else {
            return 0;
        }
    }
    /*
     MfcChatCommands This object parses chat lines for commands of the style /[command] [-options] [argument 1] [argument 2] ... and calls a configured handler corresponding to the command if one is found. You can also configure a handler for input that doesn't match any configured commands, and handle that user input in a custom manner. This object also has an optional readline style up key/down key event handler for loading previously entered commands into the chat input, as well as a custom right key event handler for loading the last command the user typed, without any of the previous arguments. An empty global object can be passed in in order to allow multiple instances of this object to read and write to the same chat command history. The only built in command is /help, which returns an html formatted readout of configured commands, contained in divs with class attributes to allow for external styling. Constructor: Accepts as arg 1 an object of configurable values. Required members: 'more_info_a_tag': supply html for an anchor tag that users can click to see more information about chat commands for this client 'command_map': An object commands, where each member name is a command and it's value is an object containing configuration. Required members: 'handler': A function to be called if the entered command matches this configuration. First arg is an array of the input, split up by spaces, starting with the command, but excluding the options Second arg is an associative array of 'options', currently single characters passed like -x, the value is currently unused. This handler should return an object of form { message: [response message string], success: [boolean] } Optional members: 'description': An string explanation of what the command does. 'usage': A string example of the command. 'shorthand': A secondary alias for the command, intended to be shorter than the formal command name. 'options': An object of options that this command accepts, key is option char, value is a description of what the option does. 'arguments': An array of arrays to specify valid arguments. Each element of the outer array corresponds to an argument in order. The first element of the inner array is a RegExp that the argument must match. The second element of the inner array is a descriptive string, finishing the sentance "Arg 'n' must..." Optional members: 'command_not_found': Configured similar to a command, but called if no commands match the user input. All of the command_man configurations apply here also, except 'shorthand', which is inapplicable, and the addition of 'definition'
     'definition': This string is what is shown in place of a command name in the /help output 'history_retainer' Pass an empty object that MfcChatCommands will use for the chat command recall keys. This allows multiple isntances of MfcChatCommands can read and write to a common command history. 'debug': If true, debug information will be output to console 'pre_command_handler': Optional handler to be called prior to any chat command being executed, arguments are aArguments - array of all chat command arguments, including the command itself hOptions - assoc array of all the options, key is the option char oResponse - the success/message status returned by the validation process 'post_command_handler': Same as pre_command_handler, but called after the command is executed, and arg 3, oResponse, is the result of the command call. 'help_config': An associative array with the following optional configurations: 'overtake_help_output': Provide a handler to receive a string of HTML formatted help content. 'more_info_a_tag': Provide a string URL to more in depth information about chat commands. 'up_down_arrows': If true, show help info for up/down arrows if that functionality is implemented 'right_arrow': If true, show help info for up/down arrows if that functionality is implemented 'help_order': A means of specifying order and grouping of chat command help. Provide an array of arrays where each array is a group, and each sub array is list of commands in that group. Use 'command_not_found' to specify command_not_found placement. Methods: Parse(sChatInput ) Accepts a chat string for the first argument, return the object { message: [response message string], success: [boolean] } Object Instance Example: var mfcChatCommands = new MfcChatCommands({ history_retainer: t.g_oChatCommandHistory, command_not_found: { handler: ChatCommandHandlers.command_not_found, definition: "[model name]", description: "Go to [model name's] room." }, command_map: { tip: {
     handler: function(aArgs, hOptions ) { SendATip(to_id, aArgs[0], hOptions ); }, description: "Send a tip to the model you are talking to.", usage: "/tip [options(s)] [tip amount] [public message]", options: { 'a': "Anonymous tip.", 'p': "Private tip. (Tip & message not displayed in chat)", 'm': "Only Model sees Tip Message. (Tip displayed in chat)" } }, whisper: { handler: function(aArgs, hOptions ) { TxCmd(FCTYPE_PMESG, session_id, to_id, 0, 0, aArgs.join(' ') ); } description: "Send a Private Message (whisper) to the model whose chat room you are currently in.", usage: "/whisper [private message]", shorthand: "w" } } }); Chat Parsing Example: var hRes = mfcChatCommands.Parse(sChatLine ); if(hRes ) { if(hRes.message ) { AppendToChatRoom(hRes.message; ) } return; } else { SendChatToServer(sChatLine ); } Readline Style Handler Example: function KeyPress(e) { if(! e ) { e = event; } if(e.keyCode == 13 || e.keyCode == 10 ) {
     Send(); } else if(e.keyCode == 38 ) { mfcChatCommands.RecallPreviousCommands('older'); } else if(e.keyCode == 39 ) { mfcChatCommands.RecallPreviousCommands('last_command'); } else if(e.keyCode == 40 ) { mfcChatCommands.RecallPreviousCommands('newer'); } }*/
    function MfcChatCommands(hOpts) {
        hOpts = hOpts || {};
        var sCommand, aOptions, aArguments;
        this.command_map = {};
        this.config = {
            history_retainer: {}
        };
        for (var sK in hOpts) {
            this.config[sK] = hOpts[sK];
        }
        var self = this;
        var hDefaultCommandMap = {
            'help': {
                description: "Get a list of available commands",
                handler: function(aArgs) {
                    return self.CmdHelp(aArgs);
                },
                shorthand: "?"
            },
            'tip': {
                arguments: [
                    ["^\\d+$", "contain a number"]
                ]
            },
            'pm': {
                arguments: [
                    ["^\\w+$", "be a username"],
                    [".", "contain a message"]
                ],
                recall_args: 1
            },
            'me': {
                arguments: [
                    ["\\w", "contain a description of an action"]
                ],
                shorthand: "em"
            },
            'whisper': {
                arguments: [
                    ["\\w", "contain a private message"]
                ],
                shorthand: "w"
            },
            'next': {
                shorthand: "n"
            },
            'prev': {
                shorthand: "p"
            },
            'last': {
                shorthand: "l"
            },
            'homepage': {
                shorthand: "h"
            }
        };
        for (sCommandName in hDefaultCommandMap) {
            var oDefaultCommand = hDefaultCommandMap[sCommandName];
            if (!this.config.command_map[sCommandName]) this.config.command_map[sCommandName] = {};
            for (sProperty in oDefaultCommand) {
                if (!this.config.command_map[sCommandName][sProperty]) this.config.command_map[sCommandName][sProperty] = oDefaultCommand[sProperty];
            }
        }
    };
    MfcChatCommands.prototype.RecallPreviousCommands = function(sDirection) {
        if (!this.config.history_retainer) {
            return;
        }
        if (!this.config.text_input) {
            return;
        }
        if (!this.config.history_retainer.current_pos) {
            this.config.history_retainer.current_pos = 0;
        }
        if (!this.config.history_retainer.commands) {
            this.config.history_retainer.commands = [];
        }
        if (sDirection == 'last_command') {
            var sPrevCommand = '';
            if (this.config.history_retainer.commands.length &&
                (sPrevCommand = this.config.history_retainer.commands[this.config.history_retainer.commands.length - 1])) {
                if (this.config.text_input.value.length == 0 || sPrevCommand.indexOf(this.config.text_input.value) == 0) {
                    var sCommandString = this.config.history_retainer.commands[this.config.history_retainer.commands.length - 1];
                    var aMatches = sCommandString.match(/(\S+)/g);
                    var sCleanCommand = '';
                    var sCommand = aMatches[0].substring(1);
                    var nAllowNArgs = 0;
                    var nArgCount = 0;
                    if (sCommand == 'pm') {
                        nAllowNArgs = 1;
                    }
                    var oCommand;
                    if (oCommand = this.config.command_map[sCommand]) {
                        var nAllowNArgs = oCommand.recall_args || 0;
                    }
                    for (n = 0; n < aMatches.length; n++) {
                        if (n == 0 || aMatches[n].match(/^\-\w+/) || (nArgCount++ < nAllowNArgs)) {
                            sCleanCommand += aMatches[n] + ' ';
                        } else {
                            break;
                        }
                    }
                    if (sCleanCommand) {
                        this.config.text_input.value = sCleanCommand;
                        this.MoveCursorToEndOfInput();
                    }
                }
            }
            return;
        }
        if ((sDirection == 'older' || sDirection == 'newer') && this.config.history_retainer.current_pos == this.config.history_retainer.commands.length) {
            this.config.history_retainer.original_input = this.config.text_input.value;
        }
        if (this.config.history_retainer.current_pos > this.config.history_retainer.commands.length || this.config.history_retainer.current_pos < 0) {
            return;
        }
        if (sDirection == 'older' && this.config.history_retainer.current_pos > 0) {
            this.config.history_retainer.current_pos--;
        } else if (sDirection == 'newer' && this.config.history_retainer.current_pos < this.config.history_retainer.commands.length) {
            this.config.history_retainer.current_pos++;
        }
        if (this.config.history_retainer.current_pos == this.config.history_retainer.commands.length) {
            this.config.text_input.value = this.config.history_retainer.original_input || '';
        } else {
            this.config.text_input.value = this.config.history_retainer.commands[this.config.history_retainer.current_pos] || '';
        }
        this.MoveCursorToEndOfInput();
        var self = this;
        setTimeout(function() {
            self.MoveCursorToEndOfInput()
        }, 0);
    };
    MfcChatCommands.prototype.MoveCursorToEndOfInput = function() {
        if (!this.config.text_input) {
            return;
        }
        this.config.text_input.focus();
        var sContentRetainer = this.config.text_input.value;
        this.config.text_input.value = '';
        this.config.text_input.value = sContentRetainer;
    };
    MfcChatCommands.prototype.CmdHelp = function(aArgs, hOptions) {
        var sOutput = "<div class=MfcChatCommands_help_title>Chat Commands:</div>";
        var aSortedCommands = [];
        var hHelpConfig = this.config.help_config || {};
        if (hHelpConfig.help_order) {
            for (a = 0; a < hHelpConfig.help_order.length; a++) {
                for (b = 0; b < hHelpConfig.help_order[a].length; b++) {
                    var sCommand = hHelpConfig.help_order[a][b];
                    aSortedCommands.push(sCommand);
                }
                aSortedCommands.push('**BREAK**');
            }
        } else {
            for (var sCommand in this.config.command_map) {
                aSortedCommands.push(sCommand);
            }
            aSortedCommands.sort();
            aSortedCommands.push('command_not_found');
        }
        for (n = 0; n < aSortedCommands.length; n++) {
            sCommand = aSortedCommands[n];
            if (sCommand == '**BREAK**') {
                sOutput += "<div class=MfcChatCommands_help_command_break></div>\n";
            } else if (sCommand == 'command_not_found' && this.config.command_not_found && this.config.command_not_found.definition) {
                sOutput += this.CmdHelp_Item('/' + this.config.command_not_found.definition, this.config.command_not_found);
            } else if (this.config.command_map[sCommand] && this.config.command_map[sCommand].description) {
                sOutput += this.CmdHelp_Item('/' + sCommand, this.config.command_map[sCommand]);
            }
        }
        var sAddendum = '';
        if (hHelpConfig.up_down_arrows) sAddendum += this.CmdHelp_Item('Up/down arrows', {
            description: 'Cycle through previous command(s).'
        });
        if (hHelpConfig.right_arrow) sAddendum += this.CmdHelp_Item('Right arrow', {
            description: 'Show last command without any additional options.'
        });
        if (sAddendum) sOutput += sAddendum + "<br>";
        sOutput += " <div class=MfcChatCommands_help_wiki_link> " + hHelpConfig.more_info_a_tag + "Click here for instructions and examples using chat commands</a>. </div> ";
        var oResponse = {};
        if (hHelpConfig.overtake_help_output) {
            hHelpConfig.overtake_help_output(sOutput);
            oResponse.success = true;
        } else {
            oResponse.message = sOutput;
            oResponse.success = true;
        }
        return oResponse;
    };
    MfcChatCommands.prototype.CmdHelp_Item = function(sCommand, hCommandConfig) {
        if (!sCommand) {
            return '';
        }
        var sOutput = " <div class=MfcChatCommands_help_command_container> <div class=MfcChatCommands_help_command_name_description> <b>" + sCommand + "</b>";
        if (hCommandConfig.shorthand) {
            sOutput += " or <b>/" + hCommandConfig.shorthand + "</b>";
        }
        sOutput += ": " + (hCommandConfig.description || '') + "</div>";
        if (hCommandConfig.usage) sOutput += " <div class=MfcChatCommands_help_command_usage><b>Usage:</b> " + hCommandConfig.usage + "</div>\n";
        if (hCommandConfig.options) {
            sOutput += "\<div class=MfcChatCommands_help_command_options_title><b>Options:</b></div>\n";
            for (sOption in hCommandConfig.options) sOutput += "<div class=MfcChatCommands_help_command_option><b>-" + sOption + ":</b> " + hCommandConfig.options[sOption] + "</div>\n";
        }
        sOutput += "</div>\n";
        return sOutput;
    };
    MfcChatCommands.prototype.Log = function(sLog) {
        if (!this.config.debug) {
            return;
        }
        if (window.console && window.console.log) window.console && window.console.log(sLog);
    };
    MfcChatCommands.prototype.StorePreviousCommands = function(sCommand) {
        if (this.config.history_retainer) {
            if (!this.config.history_retainer.commands) this.config.history_retainer.commands = [];
            if (this.config.history_retainer.commands.length == 0 || (this.config.history_retainer.commands.length && sCommand != this.config.history_retainer.commands[this.config.history_retainer.commands.length - 1])) {
                this.config.history_retainer.commands.push(sCommand);
            }
            this.config.history_retainer.current_pos = this.config.history_retainer.commands.length;
        }
    };
    MfcChatCommands.prototype.Parse = function(sInput) {
        if (typeof(sInput) != "string" || sInput.charAt(0) != '/') return null;
        this.oCommand = {};
        this.sCommand = '';
        this.hOptions = {};
        this.aArguments = [];
        var oResponse = this.ParseChatString(sInput);
        this.LogCommand();
        if (oResponse.success) {
            oResponse = this.ValidateCommand();
        }
        if (oResponse.success) {
            oResponse = this.ValidateCommandHandler();
        }
        if (oResponse.success) {
            oResponse = this.ValidateArguments();
        }
        if (oResponse.success) {
            oResponse = this.ValidateOptions();
        }
        if (this.config.pre_command_handler) {
            this.config.pre_command_handler(this.aArguments, this.hOptions, oResponse);
        }
        if (oResponse.success) {
            oResponse = this.ExecuteCommand();
        }
        if (this.config.post_command_handler) {
            this.config.post_command_handler(this.aArguments, this.hOptions, oResponse);
        }
        this.LogResponse(oResponse);
        if (!oResponse.success && oResponse.message) oResponse.message = "Error: " + oResponse.message;
        return oResponse;
    };
    MfcChatCommands.prototype.LogCommand = function() {
        if (!this.config.debug) {
            return;
        }
        var sOptions = '';
        for (sOption in this.hOptions) {
            sOptions += sOption + ",";
        }
        sOptions = sOptions.substring(0, sOptions.length - 1);
        this.Log("Command: " + this.sCommand + "\n" + "Options: " + sOptions + "\n" + "Arguments: " + this.aArguments.join(' ') + "\n");
    };
    MfcChatCommands.prototype.LogResponse = function(oResponse) {
        if (!this.config.debug) {
            return;
        }
        var sResponse = '';
        for (var sK in oResponse) sResponse += sK + ": " + oResponse[sK] + "\n";
        this.Log("oResponse:\n" + sResponse);
    };
    MfcChatCommands.prototype.ParseChatString = function(sInput) {
        var oResponse = {
            success: true
        };
        this.StorePreviousCommands(sInput);
        sInput = sInput.replace(/ +/g, ' ');
        aInput = sInput.split(' ');
        this.sCommand = aInput[0].substr(1).toLowerCase();
        this.sCommand = this.sCommand.replace(/[^\w\?]/g, '');
        this.aArguments = aInput;
        if (!(this.oCommand = this.config.command_map[this.sCommand])) {
            for (var sFormalCommand in this.config.command_map) {
                if (this.config.command_map[sFormalCommand].shorthand == this.sCommand) {
                    this.sCommand = sFormalCommand;
                    this.oCommand = this.config.command_map[this.sCommand];
                    break;
                }
            }
        }
        if (!this.oCommand && this.config.command_not_found && this.config.command_not_found.handler) {
            if (this.config.command_not_found.qualifier) {
                var oQualifier = new RegExp(this.config.command_not_found.qualifier);
                if (sInput.match(oQualifier)) this.oCommand = this.config.command_not_found;
            } else {
                this.oCommand = this.config.command_not_found;
            }
        }
        this.hOptions = {};
        var nOptionTrim = 0;
        for (nArgCx = 1; nArgCx < this.aArguments.length; nArgCx++) {
            var aMatches;
            if (aMatches = this.aArguments[nArgCx].match(/\-(\w+)/)) {
                nOptionTrim++;
                for (var nMatchCx = 0; nMatchCx < aMatches[1].length; nMatchCx++) {
                    var cOption = aMatches[1].charAt(nMatchCx).toLowerCase();
                    this.hOptions[cOption] = true;
                }
            } else {
                break;
            }
        }
        this.aArguments.splice(1, nOptionTrim);
        return oResponse;
    };
    MfcChatCommands.prototype.ValidateOptions = function() {
        var oResponse = {
            success: true
        };
        for (cOption in this.hOptions) {
            if (!this.oCommand.options || !this.oCommand.options[cOption]) {
                oResponse = {
                    "success": false,
                    "message": "The command you have entered has no option \"-" + cOption + "\". Type /help for more information."
                };
                break;
            };
        }
        return oResponse;
    };
    MfcChatCommands.prototype.ValidateCommandHandler = function() {
        var oResponse = {
            success: true
        };
        if (this.oCommand && !this.oCommand.handler) {
            oResponse = {
                "success": false,
                "message": "/\"" + this.sCommand + "\" is not available in this client. Type <b>/help</b> for a full list of commands."
            };
        }
        return oResponse;
    };
    MfcChatCommands.prototype.ValidateCommand = function() {
        var oResponse = {
            success: true
        };
        if (!this.oCommand) {
            oResponse = {
                "success": false,
                "message": "There are no commands that match \"" + this.sCommand + "\". Type <b>/help</b> for a full list of commands."
            };
        }
        return oResponse;
    };
    MfcChatCommands.prototype.ValidateArguments = function() {
        var oResponse = {
            success: true
        };
        if (this.oCommand.arguments) {
            for (n = 0; n < this.oCommand.arguments.length; n++) {
                var oRE = new RegExp(this.oCommand.arguments[n][0]);
                if (!this.aArguments[n + 1] || !this.aArguments[n + 1].toString().match(oRE)) {
                    var sMessage = "Argument " + (n + 1) + " of the /" + this.sCommand + " command must " + this.oCommand.arguments[n][1] + ". ";
                    if (this.oCommand.usage) {
                        sMessage += " Usage: " + this.oCommand.usage;
                    } else {
                        sMessage += " Type <b>/help</b> for more information.";
                    }
                    oResponse = {
                        "success": false,
                        "message": sMessage
                    };
                    break;
                }
            }
        }
        return oResponse;
    };
    MfcChatCommands.prototype.ExecuteCommand = function() {
        var oResponse = this.oCommand.handler(this.aArguments, this.hOptions) || {
            success: true
        };
        return oResponse;
    };
    /* MfcTip.js - AJAX calls tip.php and returns a status message Requires ajax helper function createRequestObject() Requires JSON parser JSON.parse(string ) Method: Request(hArgs ) - Takes an assoc. array for arguments: Required Arguments: broadcaster_id who is being tipped tip_value amount being tipped token anti-xss security token access_level access level of tipper callback function to call back with status response, returns object: { message: [status message] } Optional Arguments: public_comment optional public comment
     tip_window_a_tag a function that provides this object with a URL to the normal tip page. Argument 1 is this object's 'config' member. If provided, the object will present a normal tip window link to the user when certain errors are detected.*/
    function MfcTip(hOptions) {
        this.oReq = createRequestObject();
        this.config = {};
        for (var sK in hOptions) {
            this.config[sK] = hOptions[sK];
        }
    };
    MfcTip.prototype.Request = function(hOptions) {
        for (var sK in hOptions) {
            this.config[sK] = hOptions[sK];
        }
        this.config.anonymous = this.config.anonymous != undefined ? this.config.anonymous : 0;
        this.config.public = this.config.public != undefined ? this.config.public : 1;
        this.config.public_comment = this.config.public_comment != undefined ? this.config.public_comment : 1;
        if (!this.config.token) {
            return {
                "success": false,
                "message": "token required."
            };
        }
        if (this.config.access_level != 2 && this.config.access_level != 5) {
            return {
                "success": false,
                "message": "You must be a Premium Member in order to use this feature."
            };
        }
        if (this.config.broadcaster_id) {
            this.config.broadcaster_id = this.config.broadcaster_id.toString().replace(/\D/g, '');
        }
        if (!this.config.broadcaster_id) {
            return {
                "success": false,
                "message": "broadcaster_id required."
            };
        }
        if (!this.config.tip_value) {
            return {
                "success": false,
                "message": "Tip amount required."
            };
        }
        if (this.config.tip_value.match(/\D/)) {
            return {
                "success": false,
                "message": "Tip amount must be a numeric value."
            };
        }
        if (this.config.comment && this.config.anonymous && this.config.public_comment && this.config.public) {
            return {
                "success": false,
                "message": " Anonymous tips may not have a public message. <a href='https://web.archive.org/web/20150223133426/http://wiki.myfreecams.com/wiki/Chat_Commands' target=_blank>Click here for usage examples</a>. "
            };
        }
        if (this.config.tip_value > 1000) {
            var sMessage = "The maximum tip amount using the tip chat command is 1000 tokens. ";
            if (this.config.tip_window_a_tag) sMessage += this.config.tip_window_a_tag(this.config) + "Click here to open the normal tip window</a>.";
            return {
                "success": false,
                "message": sMessage
            };
        }
        if (this.config.tip_value < 5 && typeof(this.config.comment) == 'string' && this.config.comment.match(/\S/)) {
            return {
                "success": false,
                "message": "Your tip of " + this.config.tip_value + " tokens was not sent because it contained a message. Only tips of 5 tokens and higher may contain a message."
            };
        }
        if (this.config.public != 1) {
            this.config.public_comment = 0;
        }
        var sRequest = "/mfc2/php/tip.php?" + 'submit_tip=' + 1 + '&' + 'api=' + 1 + '&' + 'json=' + 1 + '&' + 'broadcaster_id=' + this.config.broadcaster_id + '&' + 'tip_value=' + this.config.tip_value + '&' + 'anonymous=' + this.config.anonymous + '&' + 'comment=' + escape(this.config.comment) + '&' + 'public=' + this.config.public + '&' + 'public_comment=' + this.config.public_comment + '&' + 'token=' + this.config.token + '&' + 'no_cache=' + Math.random() + '&';
        this.oReq.open("get", sRequest);
        var self = this;
        this.oReq.onreadystatechange = function() {
            self.Response();
        };
        this.oReq.send(null);
    };
    MfcTip.prototype.Response = function() {
        if (this.oReq.readyState != 4) {
            return;
        }
        var oResponse = JSON.parse(unescape(this.oReq.responseText));
        if (this.config.callback) {
            this.config.callback(oResponse);
        } else {
            return oResponse;
        }
    };
    location.search.match(/mode=(\w+)/);
    var Tags = {
        MatchingTags: 0,
        bStandAlone: 0,
        nMatches: 0,
        sTagSort: 'cam_score',
        aField: new Array(),
        aTags: new Array(),
        aTagValues: new Array(),
        nLimitPerPage: 50,
        sMode: RegExp.$1,
        oTagReq: null,
        oLogReq: null,
        oModelReq: null,
        nCurrentPage: 1,
        bMemberMode: 0,
        sSelectedField: '',
        sStyleOverride: '',
        sSearch: '',
        nSearchTimer: null,
        hOptions: {
            selected_field: {
                val: ''
            },
            sort: {
                val: ''
            }
        }
    };
    Tags.SelectTag = function(sKey, sValue) {
        if (sKey == 'next') {
            sKey = 'selected_field';
            for (a = 0; a < Tags.aField.length; a++) {
                if (Tags.sSelectedField == Tags.aField[a] && a != Tags.aField.length) {
                    sValue = Tags.aField[a + 1];
                    break;
                }
            }
        } else if (sKey == 'previous') {
            sKey = 'selected_field';
            for (a = Tags.aField.length; a > 0; a--) {
                if (Tags.sSelectedField == Tags.aField[a] && a != 0) {
                    sValue = Tags.aField[a - 1];
                    break;
                }
            }
        }
        SetHTML('tags_content', "<span style='color:#aaaaaa;font-size:19px;'><b>Loading...</b></span>");
        Tags.Select(sKey, sValue);
        Tags.LoadSelection();
    };
    Tags.Select = function(sKey, sValue) {
        Tags.nCurrentPage = 1;
        if (sValue) {
            Tags.hOptions[sKey]['val'] = sValue;
        }
        if (GetEl(sKey + '_' + Tags.hOptions[sKey]['val'])) GetEl(sKey + '_' + Tags.hOptions[sKey]['val']).style.backgroundColor = 'yellow';
        if (Tags.hOptions[sKey]['previous_val'] && Tags.hOptions[sKey]['val'] != Tags.hOptions[sKey]['previous_val'] && GetEl(sKey + '_' + Tags.hOptions[sKey]['previous_val'])) {
            GetEl(sKey + '_' + Tags.hOptions[sKey]['previous_val']).style.backgroundColor = '';
        }
        Tags.hOptions[sKey]['previous_val'] = Tags.hOptions[sKey]['val'];
    };
    Tags.LoadTags = function() {
        if (Tags.oTagReq == null) {
            Tags.oTagReq = createRequestObject();
        }
        Tags.oTagReq.open("get", "../php/model_tags.php?get_tags=1&tag_sort=" + Tags.sTagSort + "&member_mode=" + Tags.bMemberMode + "&style_override=" + Tags.sStyleOverride + "&mode=" + Tags.sMode + "&" + Math.random());
        Tags.oTagReq.onreadystatechange = Tags.LoadTagsResponse;
        Tags.oTagReq.send(null);
    };
    Tags.LoadTagsResponse = function() {
        if (Tags.oTagReq.readyState != 4) {
            return;
        }
        eval(Tags.oTagReq.responseText);
        clearTimeout(Tags.nSearchTimer);
        Tags.nSearchTimer = setTimeout(Tags.RefineTags, 100);
    };
    Tags.LoadSelection = function() {
        if (Tags.oModelReq == null) {
            Tags.oModelReq = createRequestObject();
        }
        Tags.oModelReq.open("get", "../php/model_tags.php?get_users=1&selected_field=" + Tags.hOptions.selected_field.val + "&member_mode=" + Tags.bMemberMode + "&style_override=" + Tags.sStyleOverride + "&sort=" + Tags.hOptions.sort.val + "&mode=" + Tags.sMode + "&page=" + Tags.nCurrentPage + "&stand_alone=" + Tags.bStandAlone + "&" + Math.random());
        Tags.oModelReq.onreadystatechange = Tags.LoadSelectionResponse;
        Tags.oModelReq.send(null);
    };
    Tags.LoadSelectionResponse = function() {
        if (Tags.oModelReq.readyState != 4) {
            return;
        }
        var aList = new Array();
        var aListOrder = new Array();
        var nRows;
        var sLabel = '';
        eval(Tags.oModelReq.responseText);
        var aBuffer = new Array();
        for (nK = 0; nK < nRows; nK++) {
            if (!aListOrder[nK]) continue;
            var nUserId = aListOrder[nK];
            if (!Tags.bMemberMode && t && t.g_hUsers) {
                if (t.g_hUsers[nUserId]) {
                    var sItem = aList[nUserId].replace(/LIVESNAP/, 'img src=' + t.LiveSnapUrl(nUserId, 100));
                    if (Tags.sStyleOverride == 'player') {
                        if (t.g_hUsers[nUserId].state != FCVIDEO_TX_IDLE) {
                            continue;
                        }
                        sItem = sItem.replace(/<!-- POPUP_PLAYER -->/, t.A('player', {
                            broadcaster_id: nUserId,
                            target: 'new_window'
                        }));
                        sItem = sItem.replace(/POPUP_MENU_HANDLERS/, t.PopupBioHandlerCode(nUserId));
                        sItem = sItem.replace(/CAM_PREVIEW_HANDLER/, " onMouseOver=MouseOverIcons.Over('tags" + nUserId + "'," + nUserId + "); onMouseOut=if(g_oDhtmlPopup.check_mouse_leave(this,event)){MouseOverIcons.Out();} ");
                        sItem = sItem.replace(/<!-- CAM_PREVIEW_HTML -->/, MouseOverIcons.DrawElement(('tags' + nUserId), nUserId));
                    }
                    if (t.g_hUsers[nUserId].aTags) {
                        sItem = sItem.replace(/<!-- ALL_TAGS -->/, "<a href='javascript:popUserMenu.open_tags_in_popup(t.g_hUsers[" + nUserId + "],g_oDhtmlPopup);'>View All Tags</a>");
                    }
                    if (sItem.match(/MODEL_ICON_(\d+)/)) {
                        var oRE = new RegExp('MODEL_ICON_' + RegExp.$1);
                        sSrc = popUserMenu.people_icon(RegExp.$1);
                        sItem = sItem.replace(oRE, sSrc ? ('<img src=' + sSrc + '>') : '');
                    }
                    aBuffer.push(sItem);
                }
            } else {
                aBuffer.push(aList[nUserId]);
            }
        }
        Tags.nMatches = aBuffer.length;
        Tags.UpdatePlayerCount();
        if (Tags.sSelectedField) {
            if (Tags.sStyleOverride == 'player') {
                sLabel = '<span style=font-size:17px;>Online ' + (Tags.bMemberMode ? 'members' : 'models') + ' tagged <span style="font-size:15px;font-weight:bold;">"' + Tags.sSelectedField + '"</span></span><br><br>';
            } else {
                sLabel = '<br><span style=padding:3px;font-size:17px;>Online ' + (Tags.bMemberMode ? 'members' : 'models') + ' tagged <span style="font-size:20px;font-weight:bold;">"' + Tags.sSelectedField + '"</span></span><br><br>';
            }
            if (aBuffer.length == 0) {
                if (Tags.bMemberMode) aBuffer.push('<td style=color:#666666;><br><br>No online members found.</a></td>');
                else aBuffer.push('<td style=color:#666666;><br><br>This model has logged off. Please re-load the Model Tags page for an updated list of tags for online models.<br><br><a href=# onClick=window.location.reload();>Reload</a></td>');
            }
        }
        if (Tags.sStyleOverride != 'player') {
            aBuffer.splice(0, 0, '<table>');
            aBuffer.push('</table>');
        }
        SetHTML('tags_content', sLabel + aBuffer.join(''));
        if (Tags.sStyleOverride == 'player') {
            var oEl = document.getElementById('tags_content');
            var oContainingEl = document.getElementById('model_tag_region');
            if (oEl && oContainingEl) oContainingEl.style.height = oEl.scrollHeight + 100;
        }
    };
    Tags.UpdatePlayerCount = function() {
        if (Tags.bStandAlone == true) return;
        if (document.getElementById('tags_matching')) document.getElementById('tags_matching').innerHTML = ", <b>" + Tags.nMatches + "</b> <a href=#tag_section>tags</a>";
    };
    Tags.LogSearch = function() {
        if (Tags.sSearch.length < 2) return;
        location.href.match(/mfc2\/\w+\/(\w+)/);
        if (Tags.oLogReq == null) {
            Tags.oLogReq = createRequestObject();
        }
        Tags.oLogReq.open("get", "../php/model_tags.php?log_search=1&query=" + Tags.sSearch + "&" + Math.random());
        Tags.oLogReq.send(null);
    };
    Tags.RefineTags = function() {
        var aTags = new Array();
        if (Tags.sSearch) {
            SetHTML('clear_search', "<a href=# onClick=Tags.TagSearch('clear'); style=background-color:yellow;>Clear Search</a>");
            var sFirstMatch;
            for (nK = 0; nK < Tags.aTagValues.length; nK++) {
                if (Tags.aTagValues[nK].indexOf(Tags.sSearch.toLowerCase()) > -1) {
                    if (!sFirstMatch) sFirstMatch = Tags.aTagValues[nK];
                    var sTmp = Tags.aTags[nK];
                    var oRegExp = new RegExp(">" + Tags.aTagValues[nK]);
                    sTmp = sTmp.replace(oRegExp, ">" + Tags.aTagValues[nK].replace(Tags.sSearch, "<b>" + Tags.sSearch + "</b>"));
                    aTags.push(sTmp);
                }
            }
            Tags.MatchingTags = aTags.length;
            if (aTags.length == 0) {
                Tags.nMatches = 0;
                Tags.UpdatePlayerCount();
                if (Tags.sStyleOverride == 'player' && TagsInPlayer && TagsInPlayer.NoMatches) {
                    TagsInPlayer.NoMatches();
                } else {
                    aTags.push("<span style=color:#666666;><i>No results.</i></span>");
                    SetHTML('tags_content', '');
                }
            } else {
                if (Tags.sStyleOverride == 'player' && TagsInPlayer && TagsInPlayer.Load) {
                    TagsInPlayer.Load();
                }
                Tags.SelectTag('selected_field', sFirstMatch);
            }
        } else {
            aTags = Tags.aTags;
        }
        if (t && t.g_hSelf && (t.g_hSelf.access_level == 2 || t.g_hSelf.access_level == 5) && aTags.length == 0) {
            aTags.push(" <div style='font-size:11px;color:#444444;width:200px;'><br><br>To be listed here, <a href=http://profiles.myfreecams.com/?action=iframe&src=tags target=_blank>click here</a> to create or edit<br> your Member Tags </div> ");
        }
        SetHTML('tags', ' <table cellspacing=0 cellpadding=0> <td valign=top nowrap ' + (Tags.sStyleOverride != 'player' ? 'style=padding-left:15px;' : '') + '> ' + aTags.join('') + ' </td> </table> ');
        Tags.Select('selected_field', Tags.hOptions.selected_field.val);
    };
    Tags.TagSearch = function(sMode) {
        if (sMode == 'clear') {
            GetEl('tag_search').value = '';
            Tags.sSearch = '';
        } else if (GetEl('tag_search')) {
            Tags.sSearch = GetEl('tag_search').value;
        } else {
            Tags.sSearch = sMode;
        }
        clearTimeout(Tags.nSearchTimer);
        Tags.nSearchTimer = setTimeout(Tags.RefineTags, 100);
    };
    Tags.TagSort = function(sTagSort) {
        Tags.sTagSort = sTagSort || 'cam_score';
        aTypes = new Array('cam_score', 'tag', 'alphabetically');
        for (a = 0; a < aTypes.length; a++) {
            var sSortType;
            if (aTypes[a] == Tags.sTagSort) GetEl('sort_' + aTypes[a]).style.backgroundColor = 'yellow';
            else GetEl('sort_' + aTypes[a]).style.backgroundColor = '';
        }
        Tags.LoadTags();
    };
    Tags.Load = function() {
        for (sK in Tags.hOptions) {
            Tags.Select(sK);
        }
        Tags.LoadTags();
        if (!Tags.hOptions.selected_field.val && location.search.match(/selected_field=([%\w ]+)/)) {
            Tags.hOptions.selected_field.val = RegExp.$1;
        } else if (Tags.bMemberMode) {
            Tags.hOptions.selected_field.val = 'funny';
        } else {
            Tags.hOptions.selected_field.val = 'sexy';
        }
        if (Tags.bStandAlone == true) {
            Tags.LoadSelection();
        }
    };

    function MfcClientUID() {};
    MfcClientUID.prototype.PluginTest = function() {
        var aMatchPatterns = new Array('Adobe Acrobat', 'AdobeAAMDetect', 'Google Update', 'Identity Protection Technology', 'Microsoft Office', 'Silverlight Plug-In', 'Shockwave Flash', 'VLC Web Plugin', 'Windows Live');
        var message = '';
        var aPlugins = navigator.plugins;
        var aCommonPlugins = new Array();
        for (b = 0; b < aMatchPatterns.length; b++) {
            for (a = 0; a < aPlugins.length; a++) {
                if (aPlugins[a].name.indexOf(aMatchPatterns[b]) > -1) {
                    aCommonPlugins.push(aPlugins[a].name.replace(/[^\w ]/, ''));
                    break;
                }
            }
        }
        return aCommonPlugins;
    };
    MfcClientUID.prototype.GetDPI = function(sMode) {
        sMode == sMode || 'actual';
        this.oDPIDiv = document.createElement('div');
        this.oDPIDiv.id = 'dpi_test';
        this.oDPIDiv.style.position = 'absolute';
        this.oDPIDiv.style.whiteSpace = 'nowrap';
        if (sMode == 'entropic') {
            this.oDPIDiv.style.top = '3.141593in';
            this.oDPIDiv.style.left = '0px';
            this.oDPIDiv.style.fontSize = '20.33333pt';
            this.oDPIDiv.innerHTML = '!@#$%^&*()<99>®©¢<80>abcdefghijklmnopqrstuvwxyz';
        } else if (sMode == 'actual') {
            this.oDPIDiv.style.top = '1in';
            this.oDPIDiv.style.left = '1in';
        }
        this.oBody = document.getElementsByTagName('body')[0];
        this.oBody.appendChild(this.oDPIDiv);
        var sResult;
        if (sMode == 'entropic') {
            var nTop = document.getElementById('dpi_test').offsetTop;
            var nHeight = document.getElementById('dpi_test').offsetHeight;
            var nWidth = document.getElementById('dpi_test').offsetWidth;
            sResult = nTop.toString() + nHeight.toString() + nWidth.toString();
        } else if (sMode == 'actual') {
            sResult = document.getElementById('dpi_test').offsetTop;
        }
        this.oDPIDiv.style.display = 'none';
        this.oDPIDiv.parentNode.removeChild(this.oDPIDiv);
        return sResult;
    };
    MfcClientUID.prototype.FontTest = function() {
        var sOS;
        if (navigator.userAgent.match(/Linux /)) {
            sOS = 'linux';
        } else if (navigator.userAgent.match(/Macintosh /)) {
            sOS = 'mac';
        } else if (navigator.userAgent.match(/Windows /)) {
            sOS = 'win';
        }
        if (!MfcClientUID.hFonts[sOS]) {
            return [];
        }
        this.oTestDiv = document.createElement('div');
        this.oTestDiv.style.cssText = 'visibility: hidden; position: absolute; display: block !important';
        document.body.insertBefore(this.oTestDiv, document.body.firstChild);
        var aInstalledFonts = new Array();
        for (nK = 0; nK < MfcClientUID.hFonts[sOS].length; nK++) {
            if (this.FontSupported(MfcClientUID.hFonts[sOS][nK])) aInstalledFonts.push(MfcClientUID.hFonts[sOS][nK]);
        }
        document.body.removeChild(this.oTestDiv);
        Log("FontTest Found " + aInstalledFonts.length + " " + sOS + " fonts out of " + MfcClientUID.hFonts[sOS].length + " tested: \n\n" + aInstalledFonts.join());
        return aInstalledFonts;
    };
    MfcClientUID.prototype.FontSupported = function(sName) {
        this.oTestDiv.innerHTML = ' <b style="display:inline !important; width:auto !important; font:normal 10px/1 \'' + sName + '\',sans-serif !important">ii</b> <b style="display:inline !important; width:auto !important; font:normal 10px/1 \'' + sName + '\',monospace !important">ii</b> ';
        var aTestPair = this.oTestDiv.getElementsByTagName('b');
        Log('FontTest ' + sName + " (" + aTestPair[0].offsetWidth + ") (" + aTestPair[1].offsetWidth + ") ");
        return (aTestPair[0].offsetWidth === aTestPair[1].offsetWidth);
    };
    MfcClientUID.hFonts = {
        linux: ['aakar', 'AR PL UMing CN', 'Cantarell', 'Clean', 'ClearlyU', 'Cursor', 'East Syriac Adiabene', 'GentiumAlt', 'Gentium Basic', 'LKLUG', 'LMRomanSlant10', 'Luxi Mono', 'Luxi Serif', 'MarVoSym', 'MgOpen Modata', 'Monospace', 'Padauk', 'Samyak Malayalam', 'Samyak Oriya', 'serif-italic', 'STIXGeneral', 'STIXVariants', 'Suruma', 'TeXGyreHeros', 'Tibetan Machine Uni', 'Ume UI Gothic O5', 'UnGraphic', 'UnPilgi', 'Utopia', 'VL Gothic'],
        mac: ['Academy Engraved LET', 'Adobe Caslon Pro', 'Adobe Caslon Pro Italic', 'Adobe Hebrew Italic', 'Adobe Naskh Medium', 'Arno Pro', 'Avenir Roman', 'Bangla MN', 'Bank Gothic', 'Bank Gothic Medium', 'Bauhaus 93', 'Birch Std',
            'Blackmoor LET', 'BlairMdITC TT Medium', 'Braggadocio', 'Capitals', 'Chalkduster', 'Chaparral Pro', 'Chaparral Pro Italic', 'Chaparral Pro Light Italic', 'Cracked', 'Damascus', 'Desdemona', 'Eccentric Std', 'Eurostile', 'GB18030 Bitmap', 'Giddyup Std', 'Handwriting - Dakota', 'Hobo Std', 'Jazz LET', 'Kannada MN', 'Kefa Regular', 'Kokonor Regular', 'Kozuka Mincho Pr6N R', 'Kozuka Mincho Pro R', 'Letter Gothic Std', 'Letter Gothic Std Slanted', 'Lithos Pro', 'Lithos Pro Black', 'Malayalam MN', 'Marion Regular', 'Mesquite Std Medium', 'Minion Pro', 'Minion Pro Medium Italic', 'Minion Pro SmBd', 'Myanmar Sangam MN', 'Myriad Pro Cond', 'Myriad Pro Italic', 'Myriad Web Pro', 'Myriad Web Pro Italic', 'Noteworthy Light', 'Nueva Std', 'Nueva Std Cond', 'Nueva Std Italic', 'Orator Std', 'Orator Std Slanted', 'Oriya Sangam MN', 'Party LET', 'PilGi Regular', 'Poplar Std Black', 'PortagoITC TT', 'Princetown LET',
            'PT Sans Italic', 'Rosewood Std', 'Rosewood Std Regular', 'Santa Fe LET', 'SchoolHouse Printed A', 'Sinhala MN', 'Snell Roundhand', 'Snell Roundhand Black', 'STIXGeneral', 'STIXGeneral Italic', 'STIXGeneral-Regular', 'Stone Sans ITC TT-Semi', 'Stone Sans Sem ITC TT Semi', 'Synchro LET', 'Tamil MN', 'Tekton Pro', 'Telugu Sangam MN', 'Trajan Pro', 'Yuppy TC Regular'
        ],
        win: ['Academy Engraved LET', 'AcadEref', 'Adobe Gothic Std B', 'Adobe Ming Std L', 'Adobe Naskh Medium', 'Airstream', 'Alba', 'Aldhabi', 'Alfredo', 'Alien Encounters', 'Allegro BT', 'Almonte Snow', 'Amethyst', 'AMGDT', 'Amienne', 'AR CHRISTY', 'Arimo', 'Arno Pro', 'Arnprior', 'Autumn', 'AvantGarde Bk BT', 'AVGmdBU', 'Baby Kruffy', 'Balthazar', 'BankGothic Lt BT', 'BankGothic Md BT', 'Bastion', 'Bauhaus 93', 'Baveuse',
            'Benguiat Bk BT', 'BernhardFashion BT', 'BernhardMod BT', 'Berylium', 'Biondi', 'Birch Std', 'Blackletter686 BT', 'Blackoak Std', 'BN Jinx', 'BN Machine', 'Brandish', 'Bremen Bd BT', 'Brussels', 'Burnstown Dam', 'Buxton Sketch', 'Calligraph421 BT', 'Calligraphic', 'CALVIN', 'Candles', 'Candy Round BTN', 'Carbon Block', 'Cataneo BT', 'CatholicSchoolGirls Intl BB', 'Catriel', 'Chaparral Pro', 'Chaparral Pro Light', 'Charlemagne Std', 'Chick', 'Chinyen', 'chs_boot', 'cht_boot', 'CityBlueprint', 'Clarendon', 'Colbert', 'CommercialPi BT', 'CommonBullets', 'Complex', 'CountryBlueprint', 'Credit Valley', 'Dayton', 'Digifit', 'DINPro-Black', 'DINPro-Regular', 'Distant Galaxy', 'DomCasual BT', 'Dutch801 Rm BT', 'Dutch801 XBd BT', 'Earwig Factory', 'Eccentric Std', 'ELEGANCE',
            'Embassy BT', 'Emmett', 'English157 BT', 'Enliven', 'Ethnocentric', 'Euphorigenic S', 'EuroRoman', 'Euro Sign', 'Eurostile', 'Exotc350 Bd BT', 'Fat', 'Freehand521 BT', 'Freehand575 BT', 'Freehand591 BT', 'Freshbot', 'Frosty', 'Gadugi', 'GDT', 'Gentium Basic', 'GENUINE', 'Geotype TT', 'Giddyup Std', 'GothicG', 'Grad', 'Guitar Pro 5', 'Hand Me Down S BRK', 'Hanzel Extended', 'Heavy Heap', 'HGHangle', 'HGMinchoL', 'Hobo Std', 'HolidayPi BT', 'HP PSG', 'Humanst521 BT', 'Humanst521 XBd BT', 'Hurry Up', 'Huxtable', 'Impress BT', 'Induction', 'ISOCP', 'Jenkins v2.0', 'John Handy LET', 'jpn_boot', 'Kabel Bk BT', 'Kabel Ult BT', 'Kozuka Gothic Pr6N B', 'Kozuka Gothic Pro H', 'Kredit', 'La Bamba LET', 'LCD',
            'Letter Gothic Std', 'LetterOMatic', 'Ligurino', 'Linux Biolinum G', 'Lithos Pro Regular', 'Mael', 'Martina', 'Mekanik LET', 'Mesquite Std', 'Milano LET', 'Minion Pro', 'Minion Pro SmBd', 'Minya Nouvelle', 'MisterEarl BT', 'Monospac821 BT', 'Mufferaw', 'Myanmar Text', 'Myriad Condensed Web', 'Myriad Hebrew', 'Myriad Pro', 'Myriad Web', 'Myriad Web Pro', 'Myriad Web Pro Condensed', 'Nasalization', 'Neon Lights', 'Nirmala UI', 'November', 'Nueva Std', 'Orator Std', 'ParkAvenue BT', 'Parry Hotter', 'PenultimateLight', 'Poplar Std', 'Porkys', 'Pupcat', 'Pussycat', 'QuickType II', 'QuickType Mono', 'QuigleyWiggly', 'QuiverItal', 'RomanD', 'Rosewood Std Regular', 'Ruach LET', 'Russel Write TT', 'SansSerif', 'Scruff LET', 'SF Movie Poster', 'Simplex', 'SketchFlow Print', 'Smudger LET',
            'Sneakerhead BTN Shadow', 'Snowdrift', 'Souvenir Lt BT', 'Square721 BT', 'Staccato222 BT', 'Stereofidelic', 'Swis721 Blk BT', 'Swis721 BlkEx BT', 'Swis721 BT', 'Swis721 Cn BT', 'Swis721 Ex BT', 'Swis721 Hv BT', 'Swis721 LtCn BT', 'Swis721 LtEx BT', 'Swiss911 XCm BT', 'SWMacro', 'SWTOR Trajan', 'Syastro', 'Tandelle', 'Teen', 'Teen Light', 'Tekton Pro', 'Tele-Marines', 'Terminator Two', 'Ti73pc', 'Toledo', 'Trajan Pro', 'TtsNote', 'Txt', 'TypoUpright BT', 'UniversalMath1 BT', 'Urdu Typesetting', 'VAGRounded BT', 'Velvenda Cooler', 'Victorian LET', 'Vineta BT', 'Virtual DJ', 'Waker', 'Weltron Urban', 'Westwood LET', 'Wickenden Cafe NDP', 'Woodcut', 'WP CyrillicA', 'WP Greek Helve', 'WP MathExtendedB', 'X-Files', 'Zurich Ex BT', 'ZWAdobeF'
        ]
    };

    function MfcHash() {};

    MfcHash.prototype.aCrc32Tab = new Array(0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D);

    MfcHash.prototype.crc32 = function(str) {
        var n;
        var len = str.length;
        var crc;

        crc = 0xFFFFFFFF;
        for (var n = 0; n < len; n++) {
            crc = MfcHash.prototype.crc32_add(crc, str.charCodeAt(n));
        }
        return crc ^ 0xFFFFFFFF;
    };
    MfcHash.prototype.crc32_add = function(crc, c) {
        return MfcHash.prototype.aCrc32Tab[(crc ^ c) & 0xFF] ^ ((crc >> 8) & 0xFFFFFF);
    };

    function MfcImageHost(hOptions) {
        if (!hOptions) hOptions = {};
        this.hOptions = {
            nModulusValue: 12,
            sDomain: 'mfcimg.com',
            oMfcHash: new MfcHash()
        };
        this._MergeInOptions(hOptions);
    }
    MfcImageHost.prototype._MergeInOptions = function(hOptions) {
        for (var option in hOptions) {
            this.hOptions[option] = hOptions[option];
        }
    };
    MfcImageHost.prototype.host = function(imageIdentifier) {
        var nImageIdentifier = this.imageIdentifierToInt(imageIdentifier);
        var sDomainPrefix = this.domainPrefix(nImageIdentifier);
        if (!sDomainPrefix.match(/^[a-l]$/)) {
            g_oReportBack = new MfcReportBack('InvalidImgHost');
            g_oReportBack.Send('InvalidImgHost', imageIdentifier + ' = ' + sDomainPrefix + '.' + this.hOptions.sDomain);
        }
        return sDomainPrefix + '.' + this.hOptions.sDomain;
    };
    MfcImageHost.prototype.domainPrefix = function(nImageIdentifier) {
        var aChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        return aChars[nImageIdentifier % this.hOptions.nModulusValue];
    };
    MfcImageHost.prototype.imageIdentifierToInt = function(imageIdentifier) {
        if (typeof(imageIdentifier) === 'number') return Math.abs(imageIdentifier);
        if (typeof(imageIdentifier) !== 'string') return 0;
        return this.hOptions.oMfcHash.crc32(imageIdentifier) >>> 0;
    };
    var g_hWindows = {};
    var g_UA = new MfcUserAgent();
    var g = new MfcGraphics();
    var g_oMouseTracker = new MfcMouseTracker();
    document.onmousemove = function(event) {
        g_oMouseTracker.track_mouse(event);
    };
    if (!g_ExternalCaller && parent.name == 'top_level') addEvent('mousemove', document, function(event) {
        parent.g_oMouseTracker.track_mouse(event);
    });
    if (g_UA.tablet || g_UA.mobile) document.addEventListener('touchstart', function(event) {
        g_oMouseTracker.track_finger(event);
    });
    if (g_ExternalCaller) PageDimensionsInHash();

    function PageDimensionsInHash() {
        setTimeout(PageDimensionsInHash_Delayed, 500);
        setTimeout(PageDimensionsInHash_Delayed, 2501);
        setTimeout(PageDimensionsInHash_Delayed, 5500);
    }

    function PageDimensionsInHash_Delayed() {
        var nHeight = 1000;
        if (document.height) {
            nHeight = document.height;
        } else if (document.body) {
            if (document.body.scrollHeight) nHeight = scrollHeight = document.body.scrollHeight;
            if (document.body.offsetHeight) nHeight = offsetHeight = document.body.offsetHeight;
            if (scrollHeight && offsetHeight) nHeight = Math.max(scrollHeight, offsetHeight);
        }
        window.location.replace('#' + 'height=' + nHeight);
    }

    function ApplyStyle() {
        if (parent && parent.location != location && !opener && document.body && document.body.className == 'outer_body' && location.href.indexOf('/pm') == -1 && location.href.indexOf('chat_logs.php') == -1 && location.href.indexOf('user_settings.php') == -1 && location.href.indexOf('user_notepad.php') == -1) {
            document.body.className = 'inner_body';
        } else if (location.search.match(/dhtml_window/) && document && document.body && document.body.style) {
            document.body.style.background = "transparent";
        }
    }

    function AssertTop() {
        try {
            if (bPopup) {
                var nCase = 0;
                if (g_UA.IE && (!t || (t.name != 'top_level'))) nCase = 1;
                if (t && t.closed == true) nCase = 2;
                if (g_bCloseWindow == true) nCase = 3;
                if (nCase) {
                    window.close();
                    return;
                }
            }
        } catch (e) {
            window.close();
            return;
        }
        if (bPopup && (!t || (t && t.name != 'top_level')) && opener && opener.t) {
            t = opener.t;
        }
        setTimeout(AssertTop, 1000);
    }
    var g_bBypassResizeWindow = 0;

    function ResizeWindow() {
        if (g_bBypassResizeWindow) {
            return;
        }
        try {
            if (!opener || navigator.appName.indexOf('Microsoft') == -1 || location.href.indexOf('account.php') > -1 || location.href.indexOf('admin') > -1 || history.length > 0) {
                return;
            }
            if (document.readyState == 'complete') {
                if (document.body.offsetHeight > document.body.scrollHeight) {
                    window.resizeTo(document.body.offsetWidth, document.body.scrollHeight + 95);
                } else if (document.body.offsetHeight < t.oPopupHeight && document.body.scrollHeight > t.oPopupHeight) {
                    window.resizeTo(document.body.offsetWidth, t.oPopupHeight);
                }
            }
        } catch (e) {}
    }

    function Navigation() {
        return " <div class=footer_include style='clear:left;'> Visit <a href=http://www.myfreecams.com/><b>MyFreeCams.com</b></a> </div> ";
    }

    function CloseWindow() {
        if (t && t.g_hSelf && (((t.g_hSelf.window_mode & WINDOW_MODE_MOBILE_DHTML) && (g_UA.tablet || g_UA.mobile || t.location.search.match(/dhtmlwindow/))) || ((t.g_hSelf.window_mode & WINDOW_MODE_DESKTOP_DHTML) && (!g_UA.tablet && !g_UA.mobile)))) {
            for (sWindowKey in t.g_hWindows) {
                if (t.g_hWindows[sWindowKey].window == window) {
                    t.g_hWindows[sWindowKey].close();
                }
            }
        } else {
            window.close();
        }
    }

    function A_Click(sWindowKey, sPage, sNewWindowParams, sLoadEvent, sTarget, sResource) {
        if (!sTarget) {
            sTarget = '_blank';
        }
        if (t && t.g_hSelf && t.g_hSelf['rule_violation'] == 1) return;
        var nPMUserId;
        if (sWindowKey.substr(0, 9) == 'pm_friend') {
            nPMUserId = sWindowKey.substr(9, sWindowKey.length);
            var sGenericWindowKey = 'pm_friend' + nPMUserId;
            if (g_hWindows[sWindowKey] && g_hWindows[sWindowKey].type == 'dhtml_window') {
                g_hWindows[sWindowKey].restore();
            }
        }
        if (sResource && typeof(sResource) == 'string' && !sResource.match(/my_profile|bio|profiles/)) {
            sPage += MfcStringUtilities.query_string_append(sPage, 'cache_id', Math.random());
        }
        var hResource = {};
        if (g_hResources && sResource && g_hResources[sResource]) {
            hResource = g_hResources[sResource];
        }
        if (hResource.position == 'center' && sNewWindowParams) {
            var aMatches = sNewWindowParams.match(/height=(\d+)/);
            var nHeight = aMatches && aMatches[1] ? aMatches[1] : 0;
            var aMatches = sNewWindowParams.match(/width=(\d+)/);
            var nWidth = aMatches && aMatches[1] ? aMatches[1] : 0;
            if (nWidth && nHeight) {
                nLeft = parseInt(screen.width / 2) - parseInt(nWidth / 2);
                nTop = parseInt(screen.height / 2) - parseInt(nHeight / 2);
                if (sResource == 'tip' && nLeft < 500) {
                    nLeft = 500;
                }
                sNewWindowParams += ',left=' + nLeft;
                sNewWindowParams += ',top=' + nTop;
            }
        } else if (sNewWindowParams) {
            var aMatches = sNewWindowParams.match(/height=(\d+)/);
            var nHeight = aMatches && aMatches[1] ? aMatches[1] : 0;
            var aMatches = sNewWindowParams.match(/width=(\d+)/);
            var nWidth = aMatches && aMatches[1] ? aMatches[1] : 0;
            if (nWidth && nHeight) {
                sNewWindowParams += ',left=' + (g_oMouseTracker.screenX - parseInt(nWidth * g_oMouseTracker.dScreenQuadX));
                sNewWindowParams += ',top=' + (g_oMouseTracker.screenY - parseInt(nHeight * (g_oMouseTracker.dScreenQuadY * 1.3)));
            }
        }
        var bUsingDHTMLWindows = false;
        if (t.g_hSelf && (((t.g_hSelf.window_mode & WINDOW_MODE_MOBILE_DHTML) && (g_UA.tablet || g_UA.mobile || t.location.search.match(/dhtmlwindow/))) || ((t.g_hSelf.window_mode & WINDOW_MODE_DESKTOP_DHTML) && (!g_UA.tablet && !g_UA.mobile))) && (!sPage.match(/^http:/) || (sPage.match(/http:\/\/[\w\-]+.myfreecams.com/) && !sPage.match(/https:\/\/web.archive.org\/web\/20150223133426\/http:\/\/wiki.myfreecams.com/) && !sPage.match(/https:\/\/web.archive.org\/web\/20150223133426\/http:\/\/profiles.myfreecams.com/)))) {
            bUsingDHTMLWindows = true;
        }
        if (t && t.g_hWindows && t.name == 'top_level' && (
                !t.g_hWindows[sWindowKey] || (g_UA.no_native_popup_windows && t.g_hSelf.window_mode == WINDOW_MODE_DEFAULT))) {
            t.g_nPopupCount++;
            t.g_hWindows[sWindowKey] = {
                initializing: 1
            };
            if (t.g_hSelf && t.g_hSelf.window_mode == undefined) t.g_hSelf.window_mode = WINDOW_MODE_DEFAULT;
            if (bUsingDHTMLWindows) {
                var oDW = t.DhtmlWindowManager.Open(sWindowKey, sPage, sNewWindowParams, sLoadEvent, sTarget, sResource);
                t.g_hWindows[sWindowKey] = {
                    type: 'dhtml_window',
                    window: oDW.GetIframeReference(),
                    name: sWindowKey,
                    restore: function() {
                        window.focus();
                        oDW.Restore(oDW);
                    },
                    close: function() {
                        oDW.Close(oDW);
                    }
                };
                if (t.LoadWindowsList) {
                    t.LoadWindowsList();
                }
            } else {
                if (sWindowKey == 'user_chat_images') {
                    t.g_hWindows[sWindowKey].window = window.open(sPage, '_blank', sNewWindowParams);
                } else {
                    t.g_hWindows[sWindowKey].window = t.window.open(sPage, '_blank', sNewWindowParams);
                }
                t.g_hWindows[sWindowKey].restore = function() {
                    t.g_hWindows[sWindowKey].window.focus();
                };
                t.g_hWindows[sWindowKey].name = sWindowKey;
            }
            if (t.g_hWindows[sWindowKey].window) {
                t.g_hWindows[sWindowKey].window.name = sWindowKey;
            }
            eval(sLoadEvent);
        } else if (!t || (t && !t.g_hWindows)) {
            window.open(sPage, '_blank', sNewWindowParams);
        } else if (t && t.g_hWindows && t.g_hWindows[sWindowKey]) {
            if (hResource.overwrite_page) {
                t.g_hWindows[sWindowKey].window.location = sPage;
            } else {
                if (bUsingDHTMLWindows) t.g_hWindows[sWindowKey].restore();
                else t.g_hWindows[sWindowKey].window.focus();
            }
        } else if (sPage && t.name != 'top_level') {
            window.location = sPage;
        }
        return;
    }

    function A() {
        var oCaller;
        var sResource;
        var hOptions;
        if (typeof(arguments[0]) == 'object') {
            oCaller = arguments[0] || '';
            sResource = String(arguments[1]) || '';
            hOptions = arguments[2] || {};
        } else {
            sResource = String(arguments[0]) || '';
            hOptions = arguments[1] || {};
        }
        if (!A.hCache) A.hCache = {};
        var sOptions = "";
        var sCacheKey = "";
        for (sKey in hOptions) {
            if (sKey && hOptions[sKey]) {
                if (typeof hOptions[sKey] == 'string') {
                    hOptions[sKey] = hOptions[sKey].replace(/['"]/g, '');
                }
                if (sKey != 'title') {
                    if (typeof(hOptions[sKey]) == 'string') sOptions += sKey + ": '" + hOptions[sKey].replace(/'/g, "\\'") + "',";
                    else sOptions += sKey + ": '" + hOptions[sKey] + "',";
                }
                sCacheKey += sKey + hOptions[sKey];
            }
        }
        if (sOptions) {
            sOptions = sOptions.substring(0, sOptions.length - 1);
        }
        sCacheKey = MfcCrc32.prototype.string(sCacheKey);
        if (!oCaller && A.hCache[sResource] && A.hCache[sResource][sCacheKey] && g_hResources[sResource] && !g_hResources[sResource]['exclusive_window']) {
            if (oCaller) {
                oCaller.write(A.hCache[sResource][sCacheKey]);
                return;
            } else {
                return A.hCache[sResource][sCacheKey];
            }
        }
        if (sResource.match(/\?/)) sResource += '&';
        if (!g_hResources[sResource]) {
            g_hResources['MyFreeCams'] = hOptions || {};
            g_hResources['MyFreeCams']['page'] = sResource;
            sResource = 'MyFreeCams';
        }
        var sDescription = '';
        if (hOptions['title']) {
            sDescription = hOptions['title'];
        } else if (g_hResources[sResource]['description']) {
            sDescription = MfcStringUtilities.parse_template(g_hResources[sResource]['description'], hOptions);
        }
        var sTarget;
        if (hOptions['target']) {
            sTarget = hOptions['target'];
        } else if (g_hResources[sResource] && g_hResources[sResource]['target']) {
            sTarget = g_hResources[sResource]['target'];
        } else {
            sTarget = 'new_window';
        }
        var sPage = '';
        if (g_hResources[sResource]['page']) {
            sPage = MfcStringUtilities.parse_template(g_hResources[sResource]['page'], hOptions);
        }
        var sWindowStatus = '';
        if (g_hResources[sResource]['description']) {
            sWindowStatus = MfcStringUtilities.parse_template(g_hResources[sResource]['description'], hOptions);
        }
        var sQueryString = "";
        if (sPage && !sResource.match(/profiles|my_profile|bio/)) {
            for (sKey in hOptions) {
                if (sKey && hOptions[sKey] && sKey != 'title') {
                    sQueryString += sKey + "=" + escape(hOptions[sKey]) + "&";
                }
            }
            if (sQueryString) {
                sPage += ((-1 < sPage.indexOf("?")) ? '&' : '?') + sQueryString;
            }
        }
        var sLoadEvent = "if(t && t.Load ) { t.Load('" + sResource + "',{" + sOptions + "},self); } ";
        var sAction;
        if (!sPage || (sResource == 'homepage')) {
            sAction = " href=# onClick=\"" + sLoadEvent + "; return false;\"";
        } else if (sTarget == '_blank') {
            if (hOptions['anchor']) sPage += '#' + hOptions['anchor'];
            sAction = " href=\"" + sPage + "\" target=" + sTarget + " ";
        } else if (sTarget == 'new_window') {
            var sNewWindowParams = '';
            if (sResource == 'pm_friend') {
                if (!g_UA.tablet) {
                    var nHeight;
                    var nWidth;
                    if (hOptions['load_video']) {
                        if (hOptions['full_video']) {
                            nHeight = 580;
                            nWidth = 685;
                        } else {
                            nHeight = 470;
                            nWidth = 850;
                        }
                    } else {
                        nHeight = 470;
                        nWidth = 500;
                    }
                    sNewWindowParams = g_hResources[sResource]['new_window'] + ',width=' + nWidth + ',height=' + nHeight;
                }
                if (g_UA.tablet) {
                    sPage += "orientation=" + g_UA.orientation;
                }
            } else if (g_hResources[sResource]['new_window'] != undefined) {
                sNewWindowParams = g_hResources[sResource]['new_window'];
            } else {
                sNewWindowParams = "height=700,width=800,menubar=0,resizable=1,scrollbars=1,titlebar=0,toolbar=0,status=1";
            }
            var sWindowKey;
            if (sResource == 'player') {
                sWindowKey = PublicChannel(hOptions['broadcaster_id']);
            } else if (sResource == 'pm_friend') {
                sWindowKey = sResource + hOptions['user_id'];
            } else if (g_hResources[sResource]['exclusive_window']) {
                sWindowKey = sResource + parseInt(Math.random() * 100000);
            } else {
                sWindowKey = sResource + (hOptions['user_id'] || hOptions['broadcaster_id'] || '');
            }
            if (hOptions['anchor']) {
                sPage += '#' + hOptions['anchor'];
            }
            if (hOptions.do_click) {
                A_Click(sWindowKey, sPage, sNewWindowParams, sLoadEvent, sTarget, sResource);
                return;
            } else {
                sAction = "\n href=# title=\"" + sDescription + "\"\n onClick=\" A_Click('" + sWindowKey + "','" + sPage + "','" + sNewWindowParams.replace(/'/g, "\\'") + "','" + sLoadEvent.replace(/'/g, "\\'") + "','" + sTarget + "','" + sResource + "'); return false; \" oncontextmenu=\" return false;\" ";
            }
        } else if (sResource == 'player' || sResource == 'homepage') {
            sAction = " href=# onClick=\" if(t && t.frames['" + sTarget + "'] && t.frames['" + sTarget + "'].location && t.frames['" + sTarget + "'].location.toString().match(/player\\./) ) { " + sLoadEvent + " } else { t.frames['" + sTarget + "'].location.replace('" + sPage + "'); } return false;\" ";
        } else if (t && t.frames && t.frames[sTarget]) {
            if (!sResource.match(/profiles|my_profile/)) {
                sPage += ((-1 < sPage.indexOf("?")) ? '&' : '?') + "no-cache='+Math.random()+'";
            }
            if (hOptions['anchor']) {
                sPage += '#' + hOptions['anchor'];
            }
            if (t && t.g_hSelf && t.g_hSelf['rule_violation'] == 1 && (sResource == 'player' || sResource == 'homepage')) {
                sAction = " href=# onClick=\" if(g_hSelf['rule_violation'] == 1 ) { return false; } t.frames['" + sTarget + "'].location.replace('" + sPage + "');" + sLoadEvent + "; return false;\" ";
            } else {
                sAction = " href=# onClick=\"t.frames['" + sTarget + "'].location.replace('" + sPage + "');" + sLoadEvent + "; return false;\" ";
            }
        } else {
            if (!sResource.match(/profiles|my_profile/)) {
                sPage += ((-1 < sPage.indexOf("?")) ? '&' : '?') + "no-cache=" + Math.random();
            }
            if (hOptions['anchor']) sPage += '#' + hOptions['anchor'];
            sAction = " href=\"" + sPage + "\" onClick=\"" + sLoadEvent + "\"; return false;";
            if (sTarget && t && t.name == 'top_level') sAction += " target=" + sTarget + " ";
        }
        var sExtraTagDefs = "";
        if (hOptions['supress_decoration']) {
            sExtraTagDefs = " style=\"text-decoration:none;\" ";
        } else if (hOptions['style']) {
            sExtraTagDefs = " style=\"" + hOptions['style'] + "\" ";
        }
        var sLink = "<a " + sAction + "\n " + sExtraTagDefs + "\n title=\"" + sDescription + "\"\n >";
        if (t && t.g_hQS && t.g_hQS['mode'] == "under_construction") sLink = "<a href='#'></a>";
        if (!A.hCache[sResource]) A.hCache[sResource] = {};
        A.hCache[sResource][sCacheKey] = sLink;
        if (oCaller) {
            oCaller.write(sLink);
        } else {
            return sLink;
        }
    };

    function DhtmlPrompt(hOptions) {
        hOptions = hOptions || {};
        hOptions.popup_options = hOptions.popup_options || 'center';
        if (!DhtmlPrompt.oDhtmlPopup) DhtmlPrompt.oDhtmlPopup = new MfcDhtmlPopup({
            mfcMouseTracker: g_oMouseTracker,
            mfcGraphics: g
        });
        if (DhtmlPrompt.nIdCounter == undefined) {
            DhtmlPrompt.nIdCounter = 0;
        }
        if (hOptions.callback_args == undefined) {
            hOptions.callback_args = new Array();
        }
        var sControls = "<input type=submit style=\"font-size:17px;padding:2px 15px;\" id=DhtmlPrompt_ok_" + DhtmlPrompt.nIdCounter + " value=\"" + (hOptions.ok_label || 'OK') + "\">";
        if (hOptions.prompt_type == 'confirm') {
            sControls += "&nbsp;&nbsp;";
            sControls += "<input type=button style=\"font-size:17px;padding:2px 25px;\" id=DhtmlPrompt_cancel_" + DhtmlPrompt.nIdCounter + " value='Cancel'>";
        }
        var nFontSize = hOptions.message.length > 100 ? 15 : 17;
        var sAlign = hOptions.message.length > 100 ? 'left' : 'center';
        var sHtml = " <form id=DhtmlPrompt_form_" + DhtmlPrompt.nIdCounter + "> <table width=450 cellspacing=10> <tr> <td align=" + sAlign + " style=\"font-size:" + nFontSize + "px;\"> " + hOptions.message + " </td> </tr> <tr> <td align=center style=\"\"> <br> " + sControls + "\
 </td> </tr> </table> </form> ";
        DhtmlPrompt.oDhtmlPopup.open(sHtml, 'width:450,no_close_on_mouseout,no_close_button,' + hOptions.popup_options);
        GetEl('DhtmlPrompt_ok_' + DhtmlPrompt.nIdCounter).focus();
        DhtmlPrompt.bFormTimeLock = true;
        setTimeout(function() {
            DhtmlPrompt.bFormTimeLock = false;
        }, 250);
        GetEl('DhtmlPrompt_form_' + DhtmlPrompt.nIdCounter).onsubmit = function() {
            if (DhtmlPrompt.bFormTimeLock) {
                return false;
            }
            DhtmlPrompt.oDhtmlPopup.close();
            if (hOptions.callback) {
                hOptions.callback.apply(this, hOptions.callback_args);
            }
            return false;
        };
        if (hOptions.prompt_type == 'confirm') {
            GetEl('DhtmlPrompt_cancel_' + DhtmlPrompt.nIdCounter).onmousedown = function() {
                DhtmlPrompt.oDhtmlPopup.close();
            };
        }
        DhtmlPrompt.nIdCounter++;
    };

}