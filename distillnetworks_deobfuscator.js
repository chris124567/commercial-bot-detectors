const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./distillnetworks.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);

refactor.expandBoolean();

var coveredArrays = [];
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
      coveredArrays.push(arrayQuery);
      return new Shift.LiteralStringExpression({
        value: newValue,
      });      
    }
  }
);
console.log("/* Replaced all array references with real value */")

// Makes debugging annoying - turned off for now
// for (var i = 0; i < coveredArrays.length; ++i) {
//   refactor.delete(coveredArrays[i]);
// }
// console.log("/* Deleted original arrays */")

refactor.replaceRecursive(
  `UnaryExpression[operator="!"][operand.type="UnaryExpression"][operand.operator="!"][operand.operand.type="ArrayExpression"][operand.operand.elements.length=0]`,

  node => {
    return new Shift.LiteralNumericExpression({
      value: 1,
    });
  }
);
console.log("/* Replaced !![] with 1 */")


refactor.replaceRecursive(
  `UnaryExpression[operator="+"][operand.type="ArrayExpression"][operand.elements.length=0]`,

  node => {
    return new Shift.LiteralNumericExpression({
      value: 0,
    });
  }
);
console.log("/* Replaced +[] with 0 */")


var _0x9e50x4List = ["Snow Leopard", "Lion/Mountain Lion", "Yosemite", "Mavericks"];
refactor.replaceRecursive(
  `CallExpression[callee.name="_0x9e50x4"][callee.type="IdentifierExpression"]`,

  node => {
    if (node.arguments.value="O") {
      var newArray = new Shift.ArrayExpression({elements: []});
      for (var i = 0; i < _0x9e50x4List.length; ++i) {
        newArray.elements.push(new Shift.LiteralStringExpression({value: _0x9e50x4List[i]}));
      }
      return newArray;
    }
    else {
      return new Shift.ArrayExpression({
        elements: [],
      })
    }
    return node;
  }
);
console.log("/* Replaced _0x9e50x4 calls */")

refactor.replace(
  `ComputedMemberExpression[object.type="ArrayExpression"][expression.type="LiteralStringExpression"][expression.value="length"]`,

  node => {
    return new Shift.LiteralNumericExpression({
      value: node.object.elements.length,
    })
  }
);
console.log("/* Replaced static array lengths with integers")


var windowObjectName = "_0x9e50x1";
refactor.replace(
  `IdentifierExpression[name="` + windowObjectName + `"]`,

  node => {
    return new Shift.IdentifierExpression({
      name: "window",
    })
  }
);
console.log("/* Done renaming " + windowObjectName + " with window");

refactor.replaceRecursive(
  `UnaryExpression[operator="!"][operand.type="ArrayExpression"]`,

  node => {
    return new Shift.LiteralNumericExpression({
      value: 0,
    });
  }
);
console.log("/* Replaced !Array with 0 */")


refactor.replaceRecursive(
  `UnaryExpression[operand.type="LiteralBooleanExpression"]`,

  node => {
    var returnInt = 0;
    console.log(node);
    if (node.operator === "+") {
      if (node.operand.value) {
        returnInt = 1;
      }
      else {
        returnInt = 0;
      }
    }
    else if (node.operator === "-") {
      if (node.operand.value) {
        returnInt = -1;
      }
      else {
        returnInt = 0;
      }
    }
    return new shift.LiteralNumericExpression({
      value: returnInt,
    })
  }
);
console.log("Replace +/- bool values with their integer forms (no one says -true for -1).");

// /*
// Normalize identifiers so that the code below doesn't replace the wrong variable
// */
// refactor.normalizeIdentifiers();
// console.log("Normalized identifiers");
// /*
// If a variable is just a static string, this replaces all references to it with simply its value (and deletes the original declaration).
// */
// var replacedVariablesQueries = [];
// refactor.replace(
//     `IdentifierExpression`,

//     node => {
//         var referencedVariableName = node.name;
//         var referencedVariableDeclaration = `VariableDeclarator[binding.type="BindingIdentifier"][init.type="LiteralStringExpression"][binding.name="` + referencedVariableName + `"]`;
//         var queryResults = refactor.query(referencedVariableDeclaration);
//         if (queryResults.length === 0) {
//             return node;
//         }
//         else {
//             replacedVariablesQueries.push(referencedVariableDeclaration);
//             return new Shift.LiteralStringExpression({
//                 value: queryResults[0].init.value,
//             });
//         }
//         return node;
//     }
// );
// console.log("/* Done replacing variable references with values */")
// for (var i = 0; i < replacedVariablesQueries.length; i++) {
//     refactor.delete(replacedVariablesQueries[i]);
// }
// console.log("/* Done deleting original variable declarations */")

// refactor.convertComputedToStatic();
console.log("/* This file is the result of running `node distillnetworks_deobfuscator.js > distillnetworks_deobfuscated.js` */");
console.log(refactor.print());
