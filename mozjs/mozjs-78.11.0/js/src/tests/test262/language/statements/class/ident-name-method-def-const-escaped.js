// This file was procedurally generated from the following sources:
// - src/identifier-names/const-escaped.case
// - src/identifier-names/default/class-statement-method-def.template
/*---
description: const is a valid identifier name, using escape (MethodDefinition)
esid: prod-PropertyDefinition
features: [class]
flags: [generated]
info: |
    ObjectLiteral :
      { PropertyDefinitionList }
      { PropertyDefinitionList , }

    PropertyDefinitionList:
      PropertyDefinition
      PropertyDefinitionList , PropertyDefinition

    PropertyDefinition:
      MethodDefinition
      ...

    MethodDefinition:
      PropertyName ( UniqueFormalParameters ){ FunctionBody }

    PropertyName:
      LiteralPropertyName
      ...

    LiteralPropertyName:
      IdentifierName
      ...

    Reserved Words

    A reserved word is an IdentifierName that cannot be used as an Identifier.

---*/


class C {
  \u0063onst() { return 42; }
}

var obj = new C();

assert.sameValue(obj['const'](), 42, 'property exists');

reportCompare(0, 0);
