// This file was procedurally generated from the following sources:
// - src/dstr-binding/obj-ptrn-prop-id-init-skipped.case
// - src/dstr-binding/default/gen-func-expr.template
/*---
description: Destructuring initializer is not evaluated when value is not `undefined` (generator function expression)
esid: sec-generator-function-definitions-runtime-semantics-evaluation
features: [generators, destructuring-binding]
flags: [generated]
info: |
    GeneratorExpression : function * ( FormalParameters ) { GeneratorBody }

        [...]
        3. Let closure be GeneratorFunctionCreate(Normal, FormalParameters,
           GeneratorBody, scope, strict).
        [...]

    9.2.1 [[Call]] ( thisArgument, argumentsList)

    [...]
    7. Let result be OrdinaryCallEvaluateBody(F, argumentsList).
    [...]

    9.2.1.3 OrdinaryCallEvaluateBody ( F, argumentsList )

    1. Let status be FunctionDeclarationInstantiation(F, argumentsList).
    [...]

    9.2.12 FunctionDeclarationInstantiation(func, argumentsList)

    [...]
    23. Let iteratorRecord be Record {[[iterator]]:
        CreateListIterator(argumentsList), [[done]]: false}.
    24. If hasDuplicates is true, then
        [...]
    25. Else,
        b. Let formalStatus be IteratorBindingInitialization for formals with
           iteratorRecord and env as arguments.
    [...]

    13.3.3.7 Runtime Semantics: KeyedBindingInitialization

    BindingElement : BindingPattern Initializeropt

    [...]
    3. If Initializer is present and v is undefined, then
    [...]
---*/
var initCount = 0;
function counter() {
  initCount += 1;
}

var callCount = 0;
var f;
f = function*({ s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter() }) {
  assert.sameValue(t, null);
  assert.sameValue(v, 0);
  assert.sameValue(x, false);
  assert.sameValue(z, '');
  assert.sameValue(initCount, 0);

  assert.throws(ReferenceError, function() {
    s;
  });
  assert.throws(ReferenceError, function() {
    u;
  });
  assert.throws(ReferenceError, function() {
    w;
  });
  assert.throws(ReferenceError, function() {
    y;
  });
  callCount = callCount + 1;
};

f({ s: null, u: 0, w: false, y: '' }).next();
assert.sameValue(callCount, 1, 'generator function invoked exactly once');

reportCompare(0, 0);
