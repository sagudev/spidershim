// |reftest| shell-option(--enable-private-fields) skip-if(!xulRuntime.shell) error:SyntaxError -- requires shell-options
// This file was procedurally generated from the following sources:
// - src/class-elements/init-err-contains-super.case
// - src/class-elements/initializer-error/cls-expr-fields-private-typeof-nested.template
/*---
description: Syntax error if `super()` used in class field (private field, typeof expression)
esid: sec-class-definitions-static-semantics-early-errors
features: [class, class-fields-public, class-fields-private]
flags: [generated]
negative:
  phase: parse
  type: SyntaxError
info: |
    Static Semantics: Early Errors

      FieldDefinition:
        PropertyNameInitializeropt

      - It is a Syntax Error if Initializer is present and Initializer Contains SuperCall is true.

---*/

$DONOTEVALUATE();

var C = class {
  #x = () => typeof super();
}
