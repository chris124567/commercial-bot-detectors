var OQQQ0O="length";
var O0QO0Q="charCodeAt";
var QOOOO0="fromCharCode";
var ooQoo0="String";
var o0QQQo="length";
var oooQoQ="charCodeAt";
var oOQo0o = null;
var OQoO0O = true;
var Q0QQ0Q = false;

function Q0QOO0(varName, OQOo0O, oOQ0QO) {
    var oQOQ00 = "";
    for (var OoooQ0 = 0; OoooQ0 < OQOo0O[OQQQ0O]; OoooQ0++) oQOQ00 += window[ooQoo0][QOOOO0](((OQOo0O[O0QO0Q](OoooQ0) - 32 ^ 31 & OoooQ0) + 95 - oOQ0QO) % 95 + 30);
    return "var " + varName + " = \"" + oQOQ00 + "\"";
}

function o000oO(OoOoo0) {
    for (var oO0oQ0 = arguments[o0QQQo], OOOo00 = window[QOOO00](oO0oQ0 > 1 ? oO0oQ0 - 1 : 0), oOQOOO = 1; oOQOOO < oO0oQ0; oOQOOO++) {
        OOOo00[oOQOOO - 1] = arguments[oOQOOO]
    }
    for (var QQooOO = 0, OQOO00 = arguments[o0QQQo]; QQooOO < OQOO00; QQooOO++) {
        for (var Q0Q0OQ in OOOo00[QQooOO]) {
            if (OOOo00[QQooOO][oQ0OOQ](Q0Q0OQ)) {
                OoOoo0[Q0Q0OQ] = OOOo00[QQooOO][Q0Q0OQ]
            }
        }
    }
    return OoOoo0
}

function QOOo0Q(o0o0OO) {
    if (o0o0OO instanceof window[QOOO00]) {
        if (!o0o0OO[0]) {
            return 1
        }
        return o0o0OO[1] ? 1 : 0
    }
    return o0o0OO ? 1 : 0
}
