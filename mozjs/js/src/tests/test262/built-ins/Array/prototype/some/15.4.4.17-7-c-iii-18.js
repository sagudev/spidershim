// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.some
description: >
    Array.prototype.some - return value of callbackfn is a Boolean
    object
---*/

function callbackfn(val, idx, obj) {
  return new Boolean();
}

assert([11].some(callbackfn), '[11].some(callbackfn) !== true');

reportCompare(0, 0);
