// |reftest| shell-option(--enable-private-methods) skip-if(!xulRuntime.shell) error:SyntaxError -- requires shell-options
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-rest-not-final-id.case
// - src/dstr-binding/default/cls-expr-async-private-gen-meth-static-dflt.template
/*---
description: Rest element (identifier) may not be followed by any element (private static class expression async generator method (default parameter))
esid: sec-class-definitions-runtime-semantics-evaluation
features: [class, class-static-methods-private, async-iteration]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    ClassExpression : class BindingIdentifieropt ClassTail

    1. If BindingIdentifieropt is not present, let className be undefined.
    2. Else, let className be StringValue of BindingIdentifier.
    3. Let value be the result of ClassDefinitionEvaluation of ClassTail
       with argument className.
    [...]

    14.5.14 Runtime Semantics: ClassDefinitionEvaluation

    21. For each ClassElement m in order from methods
        a. If IsStatic of m is false, then
        b. Else,
           Let status be the result of performing PropertyDefinitionEvaluation
           for m with arguments F and false.
    [...]

    Runtime Semantics: PropertyDefinitionEvaluation

    AsyncGeneratorMethod :
        async [no LineTerminator here] * PropertyName ( UniqueFormalParameters )
            { AsyncGeneratorBody }

    1. Let propKey be the result of evaluating PropertyName.
    2. ReturnIfAbrupt(propKey).
    3. If the function code for this AsyncGeneratorMethod is strict mode code, let strict be true.
       Otherwise let strict be false.
    4. Let scope be the running execution context's LexicalEnvironment.
    5. Let closure be ! AsyncGeneratorFunctionCreate(Method, UniqueFormalParameters,
       AsyncGeneratorBody, scope, strict).
    [...]


    13.3.3 Destructuring Binding Patterns
    ArrayBindingPattern[Yield] :
        [ Elisionopt BindingRestElement[?Yield]opt ]
        [ BindingElementList[?Yield] ]
        [ BindingElementList[?Yield] , Elisionopt BindingRestElement[?Yield]opt ]
---*/
$DONOTEVALUATE();


var callCount = 0;
var C = class {
  static async * #method([...x, y] = [1, 2, 3]) {
    
    callCount = callCount + 1;
  }

  static get method() {
    return this.#method;
  }
};

C.method().next().then(() => {
    assert.sameValue(callCount, 1, 'invoked exactly once');    
}).then($DONE, $DONE);
