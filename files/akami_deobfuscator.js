const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./akami.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

refactor.replace(
  `ComputedMemberExpression[expression.type="LiteralNumericExpression"][object.type="IdentifierExpression"]`,

  node => {
    var referencedArrayName = node.object.name;
    var arrayQuery = `VariableDeclarator[binding.name="` + referencedArrayName + `"][init.type="ArrayExpression"]`;
    var referencedArrayDeclaration = refactor.query(arrayQuery)[0];
    if (!referencedArrayDeclaration) {
      return node;
    }
    if (referencedArrayDeclaration.init.elements[node.expression.value].type !== "LiteralStringExpression") { // if we're working with a non string, return
      return node;
    }
    var newValue = referencedArrayDeclaration.init.elements[node.expression.value].value;
    if (!newValue) {
      return node;
    }
    else {
      return new Shift.LiteralStringExpression({
        value: newValue,
      });      
    }
  }
);
console.log("/* Replaced all array references with real value */")


refactor.expandBoolean();
// refactor.convertComputedToStatic();
refactor.normalizeIdentifiers();
console.log("/* This file is the result of running `node akami_deobfuscator.js > akami_deobfuscated.js` */");
console.log(refactor.print());
