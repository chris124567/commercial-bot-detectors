const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./threatmetrix.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);


/*
String deobfuscation functions, from original threatmetrix.js
NOTE: The names are randomized every time you download the script.
*/
var deobfuscateSubstringFunctionName = "td_f";
var newDeobfuscateStringFunctionName = "td_0w";
var td_3i = td_3i || {};
td_3i.td_1h = function (td_p, td_k) {
  var td_G = [""];
  var td_D = 0;
  for (var td_s = 0; td_s < td_k.length; ++td_s) {
    td_G.push(String.fromCharCode(td_p.charCodeAt(td_D) ^ td_k.charCodeAt(td_s)));
    td_D++;
    if (td_D >= td_p.length) {
      td_D = 0;
    }
  }
  return td_G.join("");
};
td_3i.td_0w = function (td_l) {
  this.td_c = td_l;
  this.td_d = "";
  this.td_f = function (td_Y, td_E) {
    if (0 === this.td_d.length) {
      var td_X = this.td_c.substr(0, 32);
      var td_J = "";
      for (var td_j = 32; td_j < td_l.length; td_j += 2) {
        td_J += String.fromCharCode(parseInt(td_l.substr(td_j, 2), 16));
      }
      this.td_d = td_3i.td_1h(td_X, td_J);
    }
    return this.td_d.substr(td_Y, td_E);
  };
};
/* End copied string deobfuscation functions */

// get deobfuscation object
// const deobfuscationObject = script.query(`VariableDeclarator[init.type="BinaryExpression"][init.left.type="IdentifierExpression"][init.operator="||"][init.right.type="ObjectExpression"][init.right.properties.length=0]`).first()
// const deobfuscationObjectName = deobfuscationObject.nodes[0].binding.name;
// console.log(deobfuscationObjectName);

/*
They employ this obfuscation (on small strings) where they do Number(xxx).toString(radixAmount).
This replaces these with the raw value.
*/ 
refactor.replaceRecursive(
    `CallExpression[callee.property="toString"][callee.type="StaticMemberExpression"][callee.object.type="CallExpression"][callee.object.callee.type="IdentifierExpression"][callee.object.callee.name="Number"]`, 

    node => {
        var number = node.callee.object.arguments[0].value;
        var toStringRadix = node.arguments[0].value;
        return new Shift.LiteralStringExpression({
            value: Number(number).toString(toStringRadix),
        });
    }
);

/*
This replaces td_f calls for obfuscated strings that are not an attribute of an object (i.e. independent variables, like td_2P)
*/
refactor.replaceRecursive(
    `CallExpression[callee.type="StaticMemberExpression"][callee.object.type="IdentifierExpression"][callee.property="` + deobfuscateSubstringFunctionName + `"]`,

    node => {
        /* This is very inefficient, but the script isn't very large so it works. */
        var parentNode = refactor.query(`VariableDeclarator[binding.type="BindingIdentifier"][init.type="NewExpression"][init.callee.type="StaticMemberExpression"][init.callee.object.type="IdentifierExpression"][init.callee.object.name="td_3i"][init.callee.property="` + newDeobfuscateStringFunctionName + `"][init.arguments.length=1][init.arguments.0.type="LiteralStringExpression"]` + `[binding.name="` + node.callee.object.name + `"]`)[0]
        var newObfsString = new td_3i.td_0w(parentNode.init.arguments[0].value);
        return new Shift.LiteralStringExpression({
            value: newObfsString.td_f(node.arguments[0].value, node.arguments[1].value),
        });
    }
)


/*
This replaces td_f calls for obfuscated strings that are attributes of objects (i.e. the td_3i.tdz_xxxxxxx things)
*/
refactor.replaceRecursive(
    `CallExpression[callee.type="StaticMemberExpression"][callee.object.type="StaticMemberExpression"][callee.property="` + deobfuscateSubstringFunctionName + `"]`,

    node => {
        var parentNode = refactor.query(`ExpressionStatement[expression.type="AssignmentExpression"][expression.binding.type="StaticMemberAssignmentTarget"][expression.expression.type="NewExpression"][expression.expression.callee.type="StaticMemberExpression"][expression.expression.callee.object.type="IdentifierExpression"][expression.expression.callee.property="` + newDeobfuscateStringFunctionName + `"]` + `[expression.binding.property="` + node.callee.object.property + `"]`)[0]
        var newObfsString = new td_3i.td_0w(parentNode.expression.expression.arguments[0].value);
        return new Shift.LiteralStringExpression({
            value: newObfsString.td_f(node.arguments[0].value, node.arguments[1].value),
        });
    }
)

/*
This replaces `[][[]] + ""` with "undefined"
*/
refactor.replaceRecursive(
  `BinaryExpression[left.type="ComputedMemberExpression"][left.object.type="ArrayExpression"][left.object.elements.length=0][left.expression.type="ArrayExpression"][left.expression.elements.length=0][right.type="LiteralStringExpression"][right.value.length=0]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: "undefined",
    });
  }
)

console.log("/* This file is the result of running `node threatmetrix_deobfuscator.js > threatmetrix_deobfuscated.js` */");
console.log(refactor.print());
