// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The valueOf function is not generic, it cannot be transferred
    to other kinds of objects for use as a method and there is should be
    a TypeError exception if its this value is not a Boolean object
esid: sec-boolean.prototype.valueof
description: transferring to the Object objects
---*/

//CHECK#1
try {
  var s1 = new Object();
  s1.valueOf = Boolean.prototype.valueOf;
  var v1 = s1.valueOf();
  $ERROR('#1: Boolean.prototype.valueOf on not a Boolean object should throw TypeError');
}
catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1: Boolean.prototype.valueOf on not a Boolean object should throw TypeError, not ' + e);
  }
}

//CHECK#1
try {
  var s2 = new Object();
  s2.myValueOf = Boolean.prototype.valueOf;
  var v2 = s2.myValueOf();
  $ERROR('#2: Boolean.prototype.valueOf on not a Boolean object should throw TypeError');
}
catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#2: Boolean.prototype.valueOf on not a Boolean object should throw TypeError, not ' + e);
  }
}

reportCompare(0, 0);
