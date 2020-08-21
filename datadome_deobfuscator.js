const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./datadome.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

/*
String deobfuscation functions, copied from original datadome.js
*/
var _0x1833 = ["bGVuZ3Ro", "Y2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVk", "Y2FsbA==", "cnVu", "YXBwbHk=", "YnJvd3Nlcg==", "ZW52", "cmVtb3ZlTGlzdGVuZXI=", "cmVtb3ZlQWxsTGlzdGVuZXJz", "cHJlcGVuZExpc3RlbmVy", "cHJlcGVuZE9uY2VMaXN0ZW5lcg==", "ZW5kcG9pbnQ=", "dmVyc2lvbg==", "Y3VzdG9tUGFyYW0=", "ZGRSZXNwb25zZVBhZ2U=", "YWpheExpc3RlbmVyUGF0aA==", "ZXhwb3NlQ2FwdGNoYUZ1bmN0aW9u", "ZXZlbnRzVHJhY2tpbmdFbmFibGVk", "cGF0dGVyblRvUmVtb3ZlRnJvbVJlZmVycmVyVXJs", "b3ZlcnJpZGVBYm9ydEZldGNo", "ZGF0YURvbWVDb29raWVOYW1l", "Z2V0Q29va2ll", "ZXhlYw==", "dW5kZWZpbmVk", "bG9n", "YWRkRXZlbnRMaXN0ZW5lcg==", "cmVtb3ZlRXZlbnRMaXN0ZW5lcg==", "ZGV0YWNoRXZlbnQ=", "ZGRBbmFseXplckRhdGE=", "c2xzZg==", "RXZlbnQ=", "ZnVuY3Rpb24=", "ZGlzcGF0Y2hFdmVudA==", "b25yZWFkeXN0YXRlY2hhbmdl", "ZGF0YURvbWVUb29scw==", "Y2hlY2tNb3VzZVBvc2l0aW9u", "YXN5bmNocm9uaXplVGFzaw==", "ZGRfYg==", "ZGRfZA==", "ZGRfZg==", "ZGRfbQ==", "ZGRfcQ==", "ZGRfcg==", "ZGRfdg==", "ZGRfeA==", "ZGRfQQ==", "ZGRfQg==", "ZGRfRQ==", "ZGRfRw==", "ZGRfSw==", "ZGRfTA==", "ZGRfTQ==", "ZGRfUQ==", "ZGRfUg==", "ZGRfUw==", "bmF2aWdhdG9y", "dXNlckFnZW50", "dG9Mb3dlckNhc2U=", "YW5kcm9pZA==", "aXBob25l", "ZGRfVQ==", "ZGRfWQ==", "ZGF0YURvbWVPcHRpb25z", "cGxnb2Q=", "Y3Zz", "cGhl", "c2xu", "bXBfY3g=", "bXBfbXk=", "bXBfc3g=", "bXBfc3k=", "cnNfdw==", "YXJzX2g=", "c3RyX2lkYg==", "cnRj", "d2JkbQ==", "d2RpZg==", "d2RpZnRz", "d2R3", "bGdzb2Q=", "aGRu", "YXdl", "Z2Vi", "YWNv", "YWNtYQ==", "Z2xyZA==", "Y2ZwcGY=", "Y2ZjcHc=", "c3F0", "Ymdhdg==", "Y2djYQ==", "aW5sZg==", "c2JjdA==", "YWZsdA==", "cmdw", "bXFvbA==", "c2xhdA==", "c3B3bg==", "ZW10", "d3dzaQ==", "aWZvdg==", "dGFncHU=", "dGJjZQ==", "dHRzdA==", "ZGRfYQ==", "bWF0Y2g=", "aGVhZA==", "Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycw==", "cHJvdG90eXBl", "aW5kZXhPZg==", "ZnVuY3Rpb24gZ2V0IGNvbnRlbnRXaW5kb3coKSB7IFtuYXRpdmUgY29kZV0gfQ==", "d2ViZHJpdmVy", "cGFyZW50RWxlbWVudA==", "YnJfaA==", "Y2xpZW50SGVpZ2h0", "ZG9jdW1lbnRFbGVtZW50", "YnJfb3c=", "aGVpZ2h0", "cnNfY2Q=", "ZGRfWA==", "Y2FudmFz", "Y2FsbFBoYW50b20=", "X3BoYW50b20=", "anNm", "cmVwbGFjZQ==", "RXJyb3I=", "dG9TdHJpbmc=", "ZGRfaw==", "aGFyZHdhcmVDb25jdXJyZW5jeQ==", "YXZhaWxIZWlnaHQ=", "YXJzX3c=", "YXZhaWxXaWR0aA==", "dHpw", "dGltZVpvbmU=", "ZGRfbg==", "c3RyX2xz", "cGx1Z2lucw==", "cGxn", "T2JqZWN0", "Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y", "cGx0b2Q=", "cGxhdGZvcm0=", "YWRzYm94", "YXBwZW5kQ2hpbGQ=", "Z2V0RWxlbWVudHNCeUNsYXNzTmFtZQ==", "Q2hyb21l", "ZmlyZWZveA==", "b3BlcmE=", "c2FmYXJp", "dHJpZGVudA==", "T3BlcmE=", "ZXZh", "U2FmYXJp", "SW50ZXJuZXQgRXhwbG9yZXI=", "T3RoZXI=", "V2luZG93cyBQaG9uZQ==", "d2lu", "V2luZG93cw==", "bWFj", "bWF4VG91Y2hQb2ludHM=", "bXNNYXhUb3VjaFBvaW50cw==", "QW5kcm9pZA==", "aU9T", "TWFj", "bGludXg=", "b3RoZXI=", "aXBhZA==", "dHNfbXRw", "dHNfdHNh", "dXNi", "dmVuZG9y", "Ymlk", "bW10", "bWltZVR5cGVz", "dHlwZQ==", "cGx1", "bmFtZQ==", "YXdlc29taXVt", "ZG9tQXV0b21hdGlvbkNvbnRyb2xsZXI=", "ZGF0", "bWVkaWFEZXZpY2Vz", "bWVk", "Y2FuUGxheVR5cGU=", "YWN3", "Y3JlYXRlRWxlbWVudA==", "dmNv", "dmN3", "Z2V0UGFyYW1ldGVy", "Z2x2ZA==", "ZGV2aWNlTWVtb3J5", "ZXh0ZXJuYWw=", "Ym9keQ==", "c2V0QXR0cmlidXRl", "c3R5bGU=", "ZHBp", "d2lkdGg=", "b2Zmc2V0SGVpZ2h0", "cG93", "bXNPcmllbnRhdGlvbg==", "ZGRfSg==", "b3JpZW50YXRpb24=", "LXdlYi1zY3JhcGVyLXNlbGVjdGlvbi1hY3RpdmU=", "ZXdzaQ==", "d2Jk", "ZGRfTg==", "ZWNwYw==", "b2JqZWN0", "cHJvY2Vzcw==", "Y2hyb21l", "ZGRfVg==", "cGVybWlzc2lvbnM=", "cXVlcnk=", "bm90aWZpY2F0aW9ucw==", "ZGVuaWVk", "cHJvbXB0", "c3RhdGU=", "cHJt", "bGFuZ3VhZ2Vz", "ZGRfUA==", "bW96SW5uZXJTY3JlZW5Y", "d2Via2l0VVJM", "W3BfXXszfXVwW3RlcF17NH1lclthZV92XXs0fWx1YVtub3RpXXs0fQ==", "c3BsaXQ=", "Y2ZwcA==", "YXN5bmNDaGFsbGVuZ2VGaW5pc2hlZA==", "Y2Z3cHc=", "c2VyaWFsaXplVG9TdHJpbmc=", "U1ZHRGlzY2FyZEVsZW1lbnQ=", "SFRNTFZpZGVvRWxlbWVudA==", "Qmx1ZXRvb3Ro", "SW50bA==", "RGF0ZVRpbWVGb3JtYXQ=", "aW5sYw==", "Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJE", "ZmxhdA==", "QmlnSW50", "X19kcml2ZXJfZXZhbHVhdGU=", "X193ZWJkcml2ZXJfZXZhbHVhdGU=", "X19zZWxlbml1bV91bndyYXBwZWQ=", "X1NlbGVuaXVtX0lERV9SZWNvcmRlcg==", "Y2FsbGVkU2VsZW5pdW0=", "ZG9tQXV0b21hdGlvbg==", "X19sYXN0V2F0aXJQcm9tcHQ=", "X193ZWJkcml2ZXJfc2NyaXB0X2Zu", "d2ViZHJpdmVyLWV2YWx1YXRl", "c2VsZW5pdW0tZXZhbHVhdGU=", "d2ViZHJpdmVyQ29tbWFuZA==", "c2xldnQ=", "JGNkY18=", "d2luZG93", "Y2FjaGVf", "ZW1pdA==", "ZGRfVA==", "Y29uc29sZQ==", "ZGJvdg==", "ZGVidWc=", "dGltZVN0YW1w", "bW91c2Vkb3du", "bW91c2V1cA==", "Y2xpZW50WA==", "bXBfdHI=", "bW92ZW1lbnRY", "bW92ZW1lbnRZ", "ZGRfYWE=", "dGVzdA==", "Z2V0UXVlcnlQYXJhbXNTdHJpbmc=", "YXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVk", "WE1MSHR0cFJlcXVlc3Q=", "UE9TVA==", "c2V0UmVxdWVzdEhlYWRlcg==", "Q29udGVudC10eXBl", "UmVxdWVzdCBzZW50Lg==", "c3RyaW5naWZ5", "JmV2ZW50cz0=", "JmRkaz0=", "cmVtb3ZlU3Vic3RyaW5nUGF0dGVybg==", "cmVmZXJyZXI=", "cGF0aG5hbWU=", "bG9jYXRpb24=", "JmRkdj0=", "Li8uLi9jb21tb24vRGF0YURvbWVUb29scw==", "RGF0YURvbWVDYXB0Y2hhRGlzcGxheWVk", "c3RyaW5n", "dHJpbQ==", "SGVhZGVycw==", "ZGF0YURvbWVTdGF0dXNIZWFkZXI=", "Z29vZ2xldGFnbWFuYWdlcg==", "Jmhhc2g9", "dXJs", "YWJvcnQ=", "ZGlzcGxheUNhcHRjaGFQYWdl", "aHR0cHM6Ly9jLmRhdGFkby5tZQ==", "aHR0cHM6Ly9nZW8uY2FwdGNoYS1kZWxpdmVyeS5jb20=", "ZGF0YQ==", "aHJlZg==", "b25tZXNzYWdl", "ICAgIDxpZnJhbWUgc3JjPSI=", "IiAgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgc3R5bGU9ImhlaWdodDoxMDB2aDsiIEZSQU1FQk9SREVSPSIwIiBib3JkZXI9IjAiIHNjcm9sbGluZz0ieWVzIj48L2lmcmFtZT4=", "WW91IGhhdmUgYmVlbiBibG9ja2Vk", "YmVmb3JlZW5k", "aW5zZXJ0QWRqYWNlbnRIVE1M", "ZGF0YURvbWVQcm9jZXNzZWQ=", "YWJvcnRBc3luY09uQ2FwdGNoYURpc3BsYXk=", "aXNTYWxlc2ZvcmNl", "Li9saXZlLWV2ZW50cy9EYXRhRG9tZUFzeW5jQ2hhbGxlbmdlc1RyYWNraW5n", "ZGRqc2tleQ==", "Li8uLi9odHRwL0RhdGFEb21lUmVxdWVzdA==", "bGFzdEV2ZW50VGltZXN0YW1w", "cHJvY2Vzc1RyYWNraW5nRXZlbnQ=", "Y291bnRlcg==", "d2luZG93U2Nyb2xsWQ==", "c2Nyb2xsWQ==", "Y3JlYXRl", "Y29uc3RydWN0b3I=", "ZXhwb3J0cw==", "bW91c2Vtb3Zl", "bW91c2UgbW92ZQ==", "c2Nyb2xs", "dG91Y2hzdGFydA==", "dG91Y2hlbmQ=", "dG91Y2ggZW5k", "a2V5ZG93bg==", "Z2V0VGltZQ==", "Y2FuY2VsQW5pbWF0aW9uRnJhbWU=", "ZXZlbnRNZXNzYWdl", "Li8uLi9odHRwL0RhdGFEb21lUmVzcG9uc2U=", "Y29udHJvbGxlcg==", "cG9ydDI=", "c2VydmljZVdvcmtlcg==", "cG9zdE1lc3NhZ2U=", "ZGRDYXB0Y2hhVXJs", "dGhlbg==", "anNvbg==", "cmVzcG9uc2VUeXBl", "cmVzcG9uc2VUZXh0", "Z2V0QWxsUmVzcG9uc2VIZWFkZXJz", "ZmV0Y2g=", "ZmlsdGVyQXN5bmNSZXNwb25zZQ==", "RERVc2VyLUNoYWxsZW5nZQ==", "c2xpY2U="];
var _0x335c = function (_0x154ea1, _0x4c27a2) {
  _0x154ea1 = _0x154ea1 - 0;
  var _0x195a8c = _0x1833[_0x154ea1];
  if (_0x335c.JURioR === undefined) {
    (function () {
      var _0x5ed427 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var _0x4133c9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      _0x5ed427.atob || (_0x5ed427.atob = function (_0x304629) {
        var _0x2c67c1 = String(_0x304629).replace(/=+$/, "");
        for (var _0x3c7acb = 0, _0x18ab40, _0x4922a0, _0x75b896 = 0, _0x146362 = ""; _0x4922a0 = _0x2c67c1.charAt(_0x75b896++); ~_0x4922a0 && (_0x18ab40 = _0x3c7acb % 4 ? _0x18ab40 * 64 + _0x4922a0 : _0x4922a0, _0x3c7acb++ % 4) ? _0x146362 += String.fromCharCode(255 & _0x18ab40 >> (-2 * _0x3c7acb & 6)) : 0) {
          _0x4922a0 = _0x4133c9.indexOf(_0x4922a0);
        }
        return _0x146362;
      });
    }());
    _0x335c.dYsAoy = function (_0x3a76bc) {
      var _0x352f07 = atob(_0x3a76bc);
      var _0x3c0d6c = [];
      for (var _0x35d07f = 0, _0x2c1448 = _0x352f07.length; _0x35d07f < _0x2c1448; _0x35d07f++) {
        _0x3c0d6c += "%" + ("00" + _0x352f07.charCodeAt(_0x35d07f).toString(16)).slice(-2);
      }
      return decodeURIComponent(_0x3c0d6c);
    };
    _0x335c.xSfzMc = {};
    _0x335c.JURioR = !![];
  }
  var _0x150063 = _0x335c.xSfzMc[_0x154ea1];
  if (_0x150063 === undefined) {
    _0x195a8c = _0x335c.dYsAoy(_0x195a8c);
    _0x335c.xSfzMc[_0x154ea1] = _0x195a8c;
  } else {
    _0x195a8c = _0x150063;
  }
  return _0x195a8c;
};
/* End copied functions */

// Get raw string value instead of encoded value
refactor.replace(
  `LiteralStringExpression`,

  node => {
    return new Shift.LiteralStringExpression({
      value: node.value,
    })
  }
);

// Replace _0x335c calls with real value
refactor.replace(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="_0x335c"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: _0x335c(node.arguments[0].value)
    })
  }
);

refactor.expandBoolean();
refactor.convertComputedToStatic();
// refactor.normalizeIdentifiers();
console.log("/* This file is the result of running `node datadome_deobfuscator.js > datadome_deobfuscated.js` */");
console.log(refactor.print());
