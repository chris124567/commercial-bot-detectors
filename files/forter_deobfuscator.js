const { RefactorSession } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./forter.js', 'utf8');

const tree = parseScript(fileContents);

const refactor = new RefactorSession(tree);


/*
String deobfuscation functions, copied from forter.js
*/
var deobfuscateFunction = "f1i";
var f1i = function(L1i) {
    var q7e = "abcdefghijklmnopqrstuvwxyz";
    var A7e = "reverse";
    var S1i, A1i;
    S1i = q7e;
    A1i = L1i["split"]("")["map"](function(y1i) {
        var Z5J = 13;
        var k1i, R8i;
        k1i = S1i["indexOf"](y1i["toLowerCase"]());
        if (k1i == -1) return y1i;
        R8i = S1i[(k1i + Z5J) % S1i["length"]];
        return y1i["toLowerCase"]() === y1i ? R8i : R8i["toUpperCase"]();
    });
    return A1i["reverse"]()["join"]("");
};
/*
End copied string deobfuscation functions
*/

refactor.replace(
  `StaticMemberExpression[object.type="IdentifierExpression"][property]`,

  node => {
    var referencedDict = node.object.name;
    var referencedProperty = node.property;
    var query = `AssignmentExpression[binding.property="` + referencedProperty + `"][binding.object.name="` + referencedDict + `"]`;
    var referencedProperty = refactor.query(query)[0];
    if (!referencedProperty) {
      return node;
    }
    else {
      var newValue = referencedProperty.expression.value;
      var newType = typeof(newValue);
      if (newValue === undefined) {
        return new Shift.IdentifierExpression({
          name: "undefined",
        });
      }
      else if (newValue === null) {
        return new Shift.LiteralNullExpression({});
      }
      else if (newType === "number") {
        return new Shift.LiteralNumericExpression({
          value: newValue,
        })
      }
      else if (newType === "string") {
        return new Shift.LiteralStringExpression({
          value: newValue,
        });        
      }
      else {
        return node;
      }
    }
  }
);
console.log("/* Replaced static dictionary references with real value */")

refactor.replace(
  `StaticMemberExpression[object.type="IdentifierExpression"][property]`,

  node => {
    var referencedDict = node.object.name;
    var referencedProperty = node.property;
    var originalDictionaryQuery = `VariableDeclarator[init.type="IdentifierExpression"][binding.name="` + referencedDict + `"]`;
    var originalDictionary = refactor.query(originalDictionaryQuery)[0];
    if (!originalDictionary) {
      return node;
    }
    var originalDictionaryName = originalDictionary.init.name;
    var query = `AssignmentExpression[expression.type="LiteralStringExpression"][binding.property="` + referencedProperty + `"][binding.object.name="` + originalDictionaryName + `"]`;

    var referencedProperty = refactor.query(query)[0];
    if (!referencedProperty) {
      return node;
    }
    else {
      var newValue = referencedProperty.expression.value;
      var newType = typeof(newValue);
      if (newValue === undefined) {
        return new Shift.IdentifierExpression({
          name: "undefined",
        });
      }
      else if (newValue === null) {
        return new Shift.LiteralNullExpression({});
      }
      else if (newType === "number") {
        return new Shift.LiteralNumericExpression({
          value: newValue,
        })
      }
      else if (newType === "string") {
        return new Shift.LiteralStringExpression({
          value: newValue,
        });        
      }
      else {
        return node;
      }
    }
  }
);
console.log("/* Replaced variable dictionary references with real value */")


/*
If a variable is just a static string, this replaces all references to it with simply its value (and deletes the original declaration).
*/
var replacedVariablesQueries = [];
refactor.replace(
    `IdentifierExpression`,

    node => {
        var referencedVariableName = node.name;
        var referencedVariableDeclaration = `VariableDeclarator[binding.type="BindingIdentifier"][init][init.value][binding.name="` + referencedVariableName + `"]`;
        var queryResult = refactor.query(referencedVariableDeclaration)[0];
        if (!queryResult) {
            return node;
        }
        else {
            var newValue = queryResult.init.value;
            var resultType = typeof(newValue);
            if (resultType === "string") {
              replacedVariablesQueries.push(referencedVariableDeclaration);            
              return new Shift.LiteralStringExpression({
                  value: newValue,
              });
            }
            else if (resultType === "number") {
              replacedVariablesQueries.push(referencedVariableDeclaration);            
              return new Shift.LiteralNumericExpression({
                  value: newValue,
              });              
            }
        }
        return node;
    }
);
console.log("/* Done replacing variable references with values */")
for (var i = 0; i < replacedVariablesQueries.length; i++) {
    refactor.delete(replacedVariablesQueries[i]);
}
console.log("/* Done deleting original variable declarations */")

/*
Combine strings that are assembled by addition ("a" + "b" + ...)
*/
refactor.replaceRecursive(
    `BinaryExpression[left.type="LiteralStringExpression"][right.type="LiteralStringExpression"]`,

    node => {
        return new Shift.LiteralStringExpression({
            value: node.left.value + node.right.value,
        });
    }
);
console.log("/* Done combining strings that are added together */");

/*
Replace f1i (string obfuscation function) calls with real value.
*/ 
refactor.replace(
  `CallExpression[callee.name="` + deobfuscateFunction + `"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`,

  node => {
    return new Shift.LiteralStringExpression({
      value: f1i(node.arguments[0].value)
    })
  }
);
console.log("/* Done replacing f1i calls with real values */");


console.log("/* This file is the result of running `node forter_deobfuscator.js > forter_deobfuscated.js` */");
console.log(refactor.print());
