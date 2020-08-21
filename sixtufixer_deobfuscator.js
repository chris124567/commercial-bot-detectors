const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./sixtufixer.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

/*
String deobfuscation functions, copied from sixtufixer.js
*/
var _0x44e0 = [
  'ZG9uZQ==',
  'a2V5',
  'c3RyaW5n',
  'JywgewogICAgICAgICAgICB0b2tlbjogJ0dMWF9NVVJNVVInLAogICAgICAgICAgICBrZXksCiAgICAgICAgICAgIGhvc3RuYW1lCiAgICAgICAgfSk7ICAgCiAgICB9Cn0pOw==',
  'Z2V0T3duUHJvcGVydHlEZXNjcmlwdG9y',
  'X2ludm9rZQ==',
  'Y2F0Y2g=',
  'cmVtb3Zl',
  'dGFyZ2V0',
  'aGFuZGxlRXZlcnlWaXNpdEZhbGxiYWNr',
  'YXJn',
  'cHJvdG90eXBl',
  'YXBwbHk=',
  'bG9jYXRpb24=',
  'c2VudA==',
  'R2VuZXJhdG9y',
  'dGhyb3c=',
  'dHJ5RW50cmllcw==',
  'dHlwZQ==',
  'c2V0dGluZ3M=',
  'cmVtb3ZlRXZlbnRMaXN0ZW5lcg==',
  'dG9TdHJpbmc=',
  'ZGVmaW5lUHJvcGVydHk=',
  'Y2FsbA==',
  'am9pbg==',
  'cGFyc2U=',
  'b2JqZWN0',
  'dmFsdWVz',
  'aHJlZg==',
  'R2VuZXJhdG9yRnVuY3Rpb24=',
  'ZG9jdW1lbnQ=',
  'bmV4dA==',
  'ZnVuY3Rpb24=',
  'c3RvcmFnZQ==',
  'Y29uY2F0',
  'Y29uc29sZQ==',
  'bm9ybWFs',
  'T2JqZWN0',
  'YXBwZW5k',
  'Z2V0SW1wcmVzc2lvbnM=',
  'bGFuZ3VhZ2U=',
  'dmFsdWU=',
  'YXN5bmM=',
  'cmVkdWNl',
  'Y29udGludWU=',
  'c3ltYm9s',
  'bGVuZ3Ro',
  'Zm9yRWFjaA==',
  'TWFw',
  'dHJ5TG9j',
  'aGVpZ2h0',
  'ZnVuY3Rpb24gcG9zdChwYXRoLCBwYXJhbXMsIG1ldGhvZCA9ICdwb3N0JykgewogICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTsKICAgIGZvcm0ubWV0aG9kID0gbWV0aG9kOwogICAgZm9ybS5hY3Rpb24gPSBwYXRoOwoKICAgIGZvciAoY29uc3Qga2V5IGluIHBhcmFtcykgewogICAgICAgIGNvbnN0IGhpZGRlbkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsKICAgICAgICBoaWRkZW5GaWVsZC50eXBlID0gJ2hpZGRlbic7CiAgICAgICAgaGlkZGVuRmllbGQubmFtZSA9IGtleTsKICAgICAgICBoaWRkZW5GaWVsZC52YWx1ZSA9IHBhcmFtc1trZXldOwogICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuRmllbGQpOwogICAgfQoKICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZm9ybSk7CiAgICBmb3JtLnN1Ym1pdCgpOwp9Cgp3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIG1lc3NhZ2UgPT4gewogICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZS5kYXRhKTsKICAgIGlmIChkYXRhLnR5cGUgPT0gJ0dFVF9NVVJNVVInKSB7CiAgICAgICAgY29uc3QgeyBrZXksIGhvc3RuYW1lIH0gPSBkYXRhOwogICAgICAgIHBvc3QoJw==',
  'ZGVidWc=',
  'cHVzaA==',
  'aW5uZXJIVE1M',
  'ZGF0YQ==',
  'c2V0UHJvdG90eXBlT2Y=',
  'cGFyZW50RWxlbWVudA==',
  'bWFyaw==',
  'ZXJyb3I=',
  'Z2V0RWxlbWVudHNCeVRhZ05hbWU=',
  'X2JlZm9yZXVubG9hZA==',
  'cmVmZXJyZXI=',
  'amF2YXNjcmlwdA==',
  'c2tpcCwgb24gY2xpY2sgbW9kZSAyLzQ=',
  'Z2V0T3duUHJvcGVydHlTeW1ib2xz',
  'Y2xhc3NOYW1l',
  'bm93',
  'X2JsYW5r',
  'YWZ0ZXJMb2M=',
  'ZXhwb3J0cw==',
  'Y3JlYXRlRWxlbWVudA==',
  'Y29udGVudERvY3VtZW50',
  'Y2FwcGluZw==',
  'c2xpY2U=',
  'cHJldg==',
  'ZGVmaW5lUHJvcGVydGllcw==',
  'Y29tcGxldGlvbg==',
  'a2V5cw==',
  'bmFtZQ==',
  'cnZhbA==',
  'ZmluYWxseUxvYw==',
  'Y29tcGxldGVk',
  'YXBwZW5kQ2hpbGQ=',
  'aXRlcmF0b3I=',
  'cmV0dXJu',
  'ZXhlY3V0aW5n',
  'bWV0aG9k'
];
(function(_0x18595e, _0x44e025) {
  var _0x323f38 = function(_0x2b574f) {
    while (--_0x2b574f) {
      _0x18595e['push'](_0x18595e['shift']());
    }
  };
  _0x323f38(++_0x44e025);
})(_0x44e0, 202);
var _0x323f = function(_0x18595e, _0x44e025) {
  _0x18595e = _0x18595e - 0;
  var _0x323f38 = _0x44e0[_0x18595e];
  if (_0x323f['difuUj'] === undefined) {
    (function() {
      var _0x348f43;
      try {
        var _0x2c449a = Function(
          'return (function() ' + '{}.constructor("return this")( )' + ');'
        );
        _0x348f43 = _0x2c449a();
      } catch (_0x384f2e) {
        _0x348f43 = window;
      }
      var _0x4e6833 =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0x348f43['atob'] ||
        (_0x348f43['atob'] = function(_0x4935a5) {
          var _0x46d45c = String(_0x4935a5)['replace'](/=+$/, '');
          var _0x174972 = '';
          for (
            var _0x2320c1 = 0, _0x4ac724, _0x5b0eac, _0x3850ad = 0;
            (_0x5b0eac = _0x46d45c['charAt'](_0x3850ad++));
            ~_0x5b0eac &&
            ((_0x4ac724 =
              _0x2320c1 % 4 ? _0x4ac724 * 64 + _0x5b0eac : _0x5b0eac),
            _0x2320c1++ % 4)
              ? (_0x174972 += String['fromCharCode'](
                  255 & (_0x4ac724 >> ((-2 * _0x2320c1) & 6))
                ))
              : 0
          ) {
            _0x5b0eac = _0x4e6833['indexOf'](_0x5b0eac);
          }
          return _0x174972;
        });
    })();
    _0x323f['rxnglZ'] = function(_0x52ae38) {
      var _0x4bb968 = atob(_0x52ae38);
      var _0x3a17d4 = [];
      for (
        var _0x4addab = 0, _0x388474 = _0x4bb968['length'];
        _0x4addab < _0x388474;
        _0x4addab++
      ) {
        _0x3a17d4 +=
          '%' +
          ('00' + _0x4bb968['charCodeAt'](_0x4addab)['toString'](16))['slice'](
            -2
          );
      }
      return decodeURIComponent(_0x3a17d4);
    };
    _0x323f['pVDFJf'] = {};
    _0x323f['difuUj'] = !![];
  }
  var _0x2b574f = _0x323f['pVDFJf'][_0x18595e];
  if (_0x2b574f === undefined) {
    _0x323f38 = _0x323f['rxnglZ'](_0x323f38);
    _0x323f['pVDFJf'][_0x18595e] = _0x323f38;
  } else {
    _0x323f38 = _0x2b574f;
  }
  return _0x323f38;
};

/* End copied string deobfuscation functions */

refactor.replaceRecursive(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="_0x323f"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: _0x323f(node.arguments[0].value),
    });
  }
);
console.log("/* Replaced all array references with real value */")


refactor.expandBoolean();
// refactor.convertComputedToStatic();
refactor.normalizeIdentifiers();
console.log("/* This file is the result of running `node sixtufixer_deobfuscator.js > sixtufixer_deobfuscated.js` */");
console.log(refactor.print());
