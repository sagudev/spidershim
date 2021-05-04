// This file was procedurally generated from the following sources:
// - src/class-elements/eval-contains-superproperty-2.case
// - src/class-elements/initializer-eval-super-property/cls-decl-fields-indirect-eval-nested.template
/*---
description: super['x'] in StatementList of eval (indirect eval)
esid: sec-performeval-rules-in-initializer
features: [class, class-fields-public]
flags: [generated]
info: |
    The remaining eval rules apply as outside a constructor, inside a method, and inside a function.

    Additional Early Error Rules for Eval Outside Methods

      These static semantics are applied by PerformEval when a direct eval call occurs outside of a MethodDefinition.

      ScriptBody : StatementList

      It is a Syntax Error if StatementList Contains SuperProperty.

---*/


var executed = false;
class A {}
class C extends A {
  x = (0, eval)('executed = true; super["x"];');
}

assert.throws(SyntaxError, function() {
  new C();
});

assert.sameValue(executed, false);

reportCompare(0, 0);
