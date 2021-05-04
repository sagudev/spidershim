// |reftest| shell-option(--enable-private-methods) skip-if(!xulRuntime.shell) -- requires shell-options
// Copyright (C) 2019 Jaideep Bhoosreddy (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Every new evaluation of a class creates a different brand (private setter)
esid: sec-privatefieldget
info: |
  ClassTail : ClassHeritage { ClassBody }
    ...
    11. Let proto be ObjectCreate(protoParent).
    ...
    31. If PrivateBoundIdentifiers of ClassBody contains a Private Name P such that the P's [[Kind]] field is either "method" or "accessor",
      a. Set F.[[PrivateBrand]] to proto.
    ...

  PrivateBrandCheck(O, P)
    1. If O.[[PrivateBrands]] does not contain an entry e such that SameValue(e, P.[[Brand]]) is true,
      a. Throw a TypeError exception.
features: [class, class-methods-private]
flags: [noStrict]
---*/

let classStringExpression = `(
class {
  set #m(v) { this._v = v; }

  access(o, v) {
    o.#m = v;
  }
}
)`;

let createAndInstantiateClass = function (_eval) {
  return new (_eval(classStringExpression));
};

let c1 = createAndInstantiateClass(eval);
let c2 = createAndInstantiateClass(eval);

c1.access(c1, 'test262');
assert.sameValue(c1._v, 'test262');
c2.access(c2, 'test262');
assert.sameValue(c2._v, 'test262');

assert.throws(TypeError, function() {
  c1.access(c2, 'foo');
}, 'invalid access of c1 private method');

assert.throws(TypeError, function() {
  c2.access(c1, 'foo');
}, 'invalid access of c2 private method');

reportCompare(0, 0);
