function deobfuscateString(obfsucatedString, key) {
    var resultString = "";
    for (var index = 0; index < obfsucatedString.length; index++) {
        resultString += String.fromCharCode(((obfsucatedString.charCodeAt(index) - 32 ^ 31 & index) + 95 - key) % 95 + 30);
    }
    return resultString;
}

function Q0QOO0(OQOo0O, oOQ0QO) {
    return deobfuscateString(OQOo0O, oOQ0QO);
}

// demo
Q0QOO0('226622>>22IOIKIGY[Y_Y[YGIKIOIKIGY[Y_gacaoacagaca\x7Facagacaoacaga', 0);
