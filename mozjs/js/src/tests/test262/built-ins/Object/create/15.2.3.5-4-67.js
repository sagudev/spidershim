// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-4-67
description: >
    Object.create - one property in 'Properties' is the JSON object
    that uses Object's [[Get]] method to access the 'enumerable'
    property (8.10.5 step 3.a)
---*/

var accessed = false;

JSON.enumerable = true;

var newObj = Object.create({}, {
  prop: JSON
});
for (var property in newObj) {
  if (property === "prop") {
    accessed = true;
  }
}

assert(accessed, 'accessed !== true');

reportCompare(0, 0);
