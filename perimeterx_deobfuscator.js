const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./perimeterx.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);


/*
String deobfuscation functions, copied from perimeterx.js.
*/
var lf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var vf = /[^+\/=0-9A-Za-z]/;

function atob(a) {
    return new Buffer(a, 'base64').toString('binary');
};

function btoa(b) {
    return new Buffer(b).toString('base64');
};

function ot(t) {
    return it(t)
}

function it(t) {
    var n = [],
        e = void 0,
        r = void 0,
        o = void 0,
        i = 0,
        a = void 0,
        c = t.length;
    if (vf.test(t) || /=/.test(t) && (/=[^=]/.test(t) || /={3}/.test(t))) return null;
    for (c % 4 > 0 && (t += Array(4 - c % 4 + 1).join("="), c = t.length); i < c;) {
        for (r = [], a = i; i < a + 4;) r.push(lf.indexOf(t.charAt(i++)));
        for (e = (r[0] << 18) + (r[1] << 12) + ((63 & r[2]) << 6) + (63 & r[3]), o = [(e & 255 << 16) >> 16, 64 === r[2] ? -1 : (65280 & e) >> 8, 64 === r[3] ? -1 : 255 & e], a = 0; a < 3; ++a)(o[a] >= 0 || 0 === a) && n.push(String.fromCharCode(o[a]))
    }
    return n.join("")
}

function f(f) {
  for (var n = atob(f), r = n.charCodeAt(0), t = "", i = 1; i < n.length; ++i) t += String.fromCharCode(r ^ n.charCodeAt(i));
  return t;
}
function n(r) {
  var t = f;
  return (n = "function" == typeof Symbol && typeof Symbol.iterator === t("+omDl5iVlg") ? function (f) {
    return typeof f;
  } : function (n) {
    var r = f;
    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? r("3q2ns7yxsg") : typeof n;
  })(r);
}
function r(f, n) {
  return (r = Object.setPrototypeOf || function (f, n) {
    return f.__proto__ = n, f;
  })(f, n);
}
function t(f, n, i) {
  return (t = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if ("function" == typeof Proxy) return true;
    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), true;
    } catch (f) {
      return false;
    }
  }() ? Reflect.construct : function (f, n, t) {
    var i = [null];
    i.push.apply(i, n);
    var c = new (Function.bind.apply(f, i));
    return t && r(c, t.prototype), c;
  }).apply(null, arguments);
}
function i(n, r) {
  return function (f) {
    if (Array.isArray(f)) return f;
  }(n) || function (n, r) {
    var t = f, i = [], c = true, e = false, a = void 0;
    try {
      for (var o, u = n[Symbol.iterator](); !(c = (o = u.next()).done) && (i.push(o.value), !r || i.length !== r); c = true) ;
    } catch (f) {
      e = true, a = f;
    } finally {
      try {
        c || null == u[t("HG55aGlucg")] || u[t("VyUyIyIlOQ")]();
      } finally {
        if (e) throw a;
      }
    }
    return i;
  }(n, r) || function () {
    throw new TypeError(f("XhcwKD8yNzp+PyoqOzMuKn4qMX46Oy0qLCs9KissO34wMTBzNyo7LD88Mjt+NzAtKj8wPTs"));
  }();
}
function c(n) {
  return function (f) {
    if (Array.isArray(f)) {
      for (var n = 0, r = new Array(f.length); n < f.length; n++) r[n] = f[n];
      return r;
    }
  }(n) || function (n) {
    var r = f;
    if (Symbol.iterator in Object(n) || Object.prototype.toString.call(n) === r("aDMHCgINCxxIKRoPHQUNBhwbNQ")) return Array.from(n);
  }(n) || function () {
    throw new TypeError(f("oOnO1sHMycSAwdTUxc3Q1IDUz4DT0NLFwcSAzs/OjcnUxdLBwszFgMnO09TBzsPF"));
  }();
}


/*
End copied string deobfuscation functions
*/

/*
Replace ot calls with real values
*/
refactor.replaceRecursive(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="ot"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: ot(node.arguments[0].value)
    })
  }
);
console.log("/* Replaced ot calls with real values */")

/*
Replace f calls with real values
*/
refactor.replaceRecursive(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="f"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: f(node.arguments[0].value)
    })
  }
);
console.log("/* Replaced f calls with real values */")

/*
Replace r calls with real values
*/
refactor.replaceRecursive(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="r"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: f(node.arguments[0].value)
    })
  }
);
console.log("/* Replaced r calls with real values */")

/*
Replace e calls with real values
*/
refactor.replaceRecursive(
  `CallExpression[callee.type="IdentifierExpression"][callee.name="e"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: f(node.arguments[0].value)
    })
  }
);
console.log("/* Replaced e calls with real values */")

/*
Replace f referenced calls with real values
*/
refactor.replace(
  `CallExpression[callee.type="IdentifierExpression"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    var functionName = node.callee.name;
    var query = `VariableDeclarator[init.type="IdentifierExpression"][init.name="f"][binding.name="` + functionName + `"]`;
    if (refactor.query(query).length > 0) {
        return new Shift.LiteralStringExpression({
          value: f(node.arguments[0].value)
        })        
    }
    else {
        return node;
    }
  }
);
console.log("/* Replaced f referenced calls with real values */")

/*
Replace r referenced calls with real values
*/
refactor.replace(
  `CallExpression[callee.type="IdentifierExpression"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    var functionName = node.callee.name;
    var query = `VariableDeclarator[init.type="IdentifierExpression"][init.name="r"][binding.name="` + functionName + `"]`;
    if (refactor.query(query).length > 0) {
        return new Shift.LiteralStringExpression({
          value: f(node.arguments[0].value)
        })        
    }
    else {
        return node;
    }
  }
);
console.log("/* Replaced r referenced calls with real values */")


refactor.expandBoolean();
refactor.normalizeIdentifiers();
// refactor.convertComputedToStatic();

console.log("/* This file is the result of running `node perimeterx_deobfuscator.js > perimeterx_deobfuscated.js` */");
console.log(refactor.print());
