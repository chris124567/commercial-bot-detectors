const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./malvertising.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

/* Deobfuscation functions, copied from malvertising.js */
var _0x23c1 = ['origin', '<script>setTimeout(function() { location.href = \'', 'aa_redirect_delay', ' );</script>', 'DOMContentLoaded', 'parentNode', 'removeChild', 'ppu_main', 'iosVer', 'delay', 'sendClickMetrics', 'isA', 'windowOpenerNull', '//ie8eamus.com/sfp.js', 'type', 'text/javascript', '//grownuplieutenant.com/', 'substr', 'hasOwnProperty', 'result', 'vendor', 'opera', 'some', 'documentMode', 'prototype', 'call', 'operamini', 'text/css', 'fake', 'styleSheet', 'cssText', 'overflow', 'hidden', 'offsetHeight', 'push', 'forEach', 'function', 'truePoints', 'addTest', 'hasFileInputMultiple', 'multiple', 'hasCustomProtocolHandler', 'registerProtocolHandler', 'hasCrypto', 'crypto', 'Notification', 'requestPermission', 'granted', 'permission', 'TypeError', 'hasSharedWorkers', 'SharedWorker', 'capture', 'input', 'hasTouchEvents', '@media (touch-enabled),(-webkit-touch-enabled),(-moz-touch-enabled),', '(-o-touch-enabled),(-ms-touch-enabled){#liedetector{top:7px;position:absolute}}', 'offsetTop', 'hasWindowOrientationProperty', 'orientation', 'hasDevToolsOpen', 'console', 'firebug', 'undefined', '__defineGetter__', 'log', 'clear', 'hasLiedResolution', 'availWidth', 'hasLiedOs', 'platform', 'windows phone', 'Windows Phone', 'xbox', 'Xbox', 'win', 'Windows', 'Android', 'Chrome OS', 'Linux', 'iphone', 'ipad', 'iOS', 'Mac', 'Other', 'maxTouchPoints', 'msMaxTouchPoints', 'linux', 'plugins', 'productSub', 'Firefox', 'edge', 'Edge', 'presto', 'opr', 'Safari', 'trident', 'Internet Explorer', 'StyleMedia', 'Chrome', 'Opera', 'search', 'length', 'toSource', 'hasLiedLanguage', 'languages', 'language', '&adb=', '//d24ak3f2b.top/advertisers.js', 'setA', 'onerror', 'rtl', 'direction', 'className', 'adsBox', 'absolute', 'right', '-99999px', 'checkScript', 'readyState', 'checkBlock', 'detect', 'trim', 'pages', 'simple', 'simple', '10', '0', '4', '0', '1', '&scrHeight=', '&tz=', '&v=20.7.v.1', 'LieDetector', 'runTests', '&dev=', 'false', 'https://cdn15.acloudimages.com/36/template/pu1473410272.pdf', 'true', '', 'false', 'true', 'false', '100', 'getArr', 'include', 'exclude', 'ppu_main_', 'key', 'ppu_exp_', 'ppu_clicks_', 'ppu_show_on_', 'ppu_sub_', 'ppu_delay_', 'total_count_', 'No available storage', 'ppu_show_on', 'setStorage', '; expires=', 'toUTCString', 'cookie', ' expires=', ' path=/', 'localStorage', 'parse', 'now', 'storageDelete', 'setAttribute', 'save', 'auth', 'addBehavior', '#default#userData', 'getAttribute', 'load', 'removeAttribute', 'setItem', 'storageSupport', 'removeItem', 'code', 'QUOTA_EXCEEDED_ERR', 'querySelectorAll', 'getQuery', 'pvarr', 'pearr', 'isDescendant', 'dtnoppu', 'charAt', 'isNotAnchorOrJSLink', 'appendFingerprint', 'defineProperty', 'blackberry', 'winphone', 'addMobileEventListener', 'touchend', 'new_webview', 'firefox', 'ontouchstart', 'mousemove', 'touchmove', 'removeTransparentLayer', 'html', 'clientX', 'isLink', 'attachEvent', 'msie', 'onclick', 'srcElement', 'hardcore', 'onbeforeunload', 'init_delay', 'overlay', 'overlayName', 'getElementsByClassName', '100%', 'fixed', 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)', 'createTransparentLayer', '', 'sendSuccessfulExecutionMetrics', 'sendErrorMetrics', 'stack', 'message', 'dom3ic8zudi28v8lr6fgphwffqoz0j6c', 'substring', 'GET', 'timeout', 'onload', 'responseText', 'setTime', ';expires=', ';path=/', 'ontimeout', 'UUID request timed out or failed', 'freeze', 'true', 'true', '//grownuplieutenant.com/pixel/', '70', '20.7.v.1', '1db529b27eda122f886542bd8972f3cf', 'placementKey', 'slice', '.js', 'script', 'initiatorType', 'test', 'name', 'domainLookupEnd', 'domainLookupStart', 'connectEnd', 'secureConnectionStart', 'responseEnd', 'responseStart', 'requestStart', 'buildVersion', 'templateId', 'map', 'join', 'src', 'baseURL', 'performance', 'getEntriesByType', 'findPopsScriptEntry', 'preparePopsScriptRequestData', 'purst', 'serializeQueryData', 'touchPixel', 'isMetricsEnabled', '&bv=', 'puclc?tmpl=', 'open', 'POST', 'setRequestHeader', 'Content-Type', 'send', 'sendNetworkMetrics', 'document', 'getElementsByTagName', 'head', 'title', 'textContent', 'innerText', 'floor', 'random', 'abcdefghijklmnopqrstuvwxyz', 'split', 'toLowerCase', 'replace', 'top', 'location', 'href', '&refer=', '&kw=', 'stringify', 'userAgent', 'match', 'safari', 'ios', 'mac', 'toString', '_parent', 'screen', 'number', 'window', 'innerHeight', 'documentElement', 'clientHeight', 'body', 'innerWidth', 'clientWidth', 'screenTop', 'screenY', 'screenLeft', 'template', 'period', 'getCookie', 'ppu_total_count', 'max_per_page', 'ppu_sub', 'timing', 'max', 'shown', 'ppu_idelay', 'isArray', 'show_on', 'indexOf', 'showOnCounter', 'ppu_delay', 'clicks', 'clickedUrl', 'target', 'popunder', 'popunderCondition', 'tagName', 'ftg', 'brs', 'chrome', 'android', 'stopEventPropagation', 'addEventListener', 'click', 'artificialClick', 'preventDefault', 'returnValue', 'inXP', 'init', 'setCookieCount', 'touchstart', 'preventIosClick', 'swipe', 'ios9', 'mself', 'swipeEvent', 'removeEventListener', 'clickCounter', 'setCookie', 'ppu_clicks', 'ppu_exp', 'getTime', 'opener', 'stopPropagation', 'cancelBubble', 'stopImmediatePropagation', 'url', 'aParam', 'AaDetector', 'isDetect', 'getElementById', 'transpLayerId', 'prepareURL', 'div', 'createElement', 'style', 'position', 'bottom', 'left', 'zIndex', '2147483650', 'background', 'black', '.01', 'height', 'width', 'GetWindowWidth', '_blank', 'display', 'block', 'inherit', 'appendChild', 'write', '<body>'];
(function (_0x2ed428, _0x4acc9e) {
    var _0x410b4d = function (_0xda4eff) {
        while (--_0xda4eff) {
            _0x2ed428['push'](_0x2ed428['shift']());
        }
    };
    _0x410b4d(++_0x4acc9e);
}(_0x23c1, 0xea));
var _0xfec0 = function (_0x35cc87, _0x3ae3e8) {
    _0x35cc87 = _0x35cc87 - 0x0;
    var _0xc4915b = _0x23c1[_0x35cc87];
    return _0xc4915b;
};
/* End copied deobfuscation functions */

refactor.replace(
  `CallExpression[callee.name="_0xfec0"][arguments.0.type="LiteralStringExpression"]`,

  node => {
      return new Shift.LiteralStringExpression({
        value: _0xfec0(node.arguments[0].value),
      }); 
  }
);
console.log("/* Replaced all array references with real value */")

refactor.expandBoolean();
refactor.convertComputedToStatic();
refactor.normalizeIdentifiers();
console.log("/* This file is the result of running `node malvertising_deobfuscator.js > malvertising_deobfuscated.js` */");
console.log(refactor.print());
