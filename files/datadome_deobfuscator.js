const { refactor } = require('shift-refactor');
const { parseScript } = require('shift-parser');
const Shift = require('shift-ast');

const fileContents = require('fs').readFileSync('./datadome.js', 'utf8');

const script = refactor(fileContents);

// get first big array
const stringArrayQuery = script.query(`VariableDeclarationStatement[declaration.declarators.length=1][declaration.declarators.0.init.type="ArrayExpression"][declaration.declarators.0.init.elements.length>10]`)
// get first function assigned to variable that takes two arguments (this is the standard obfuscator.io deobfuscation function)
const deobfuscationFunctionQuery = script.query(`VariableDeclarator[init.type="FunctionExpression"][init.params.items.length=2][init.name=null][init.body.statements.length>5]`)

var deobfuscationFunctionName = deobfuscationFunctionQuery.nodes[0].binding.name;
// evaluate the obfuscated string array and deobfuscation function assignment 
eval(stringArrayQuery.print());
eval(deobfuscationFunctionQuery.print())

// Replace deobfuscation calls calls with real value
script.query(`CallExpression[callee.type="IdentifierExpression"][callee.name="${deobfuscationFunctionName}"][arguments.length=1][arguments.0.type="LiteralStringExpression"]`).replace(
  node => {
    return new Shift.LiteralStringExpression({
      value: global[deobfuscationFunctionName](node.arguments[0].value)
    });
});

console.log("/* This file is the result of running `node datadome_deobfuscator.js > datadome_deobfuscated.js` */");
console.log(script.print());
