// Copyright (C) 2020 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: >
  TypeError is thrown if CreateDataProperty fails.
  (result object is non-extensible)
info: |
  Array.prototype.map ( callbackfn [ , thisArg ] )

  [...]
  6. Repeat, while k < len
    [...]
    c. If kPresent is true, then
      [...]
      iii. Perform ? CreateDataPropertyOrThrow(A, Pk, mappedValue).
    [...]

  CreateDataPropertyOrThrow ( O, P, V )

  [...]
  3. Let success be ? CreateDataProperty(O, P, V).
  4. If success is false, throw a TypeError exception.
features: [Symbol.species]
---*/

var A = function(_length) {
  this.length = 0;
  Object.preventExtensions(this);
};

var arr = [1];
arr.constructor = {};
arr.constructor[Symbol.species] = A;

assert.throws(TypeError, function() {
  arr.map(function() {});
});

reportCompare(0, 0);
