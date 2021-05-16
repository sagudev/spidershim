// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.11-1
description: >
    Object.isSealed does not throw TypeError if type of first param is
    not Object
---*/

Object.isSealed(0);

reportCompare(0, 0);
