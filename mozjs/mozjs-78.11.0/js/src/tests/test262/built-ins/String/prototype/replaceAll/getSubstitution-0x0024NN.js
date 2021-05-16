// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.replaceall
description: >
  Replacement Text Symbol Substitutions ($NN)
info: |
  String.prototype.replaceAll ( searchValue, replaceValue )

  10. Let position be ! StringIndexOf(string, searchString, 0).
  11. Repeat, while position is not -1
    a. Append position to the end of matchPositions.
    b. Let position be ! StringIndexOf(string, searchString, position + advanceBy). 
  ...
  14. For each position in matchPositions, do
    a. If functionalReplace is true, then
      ...
    b. Else,
      ...
      ii. Let captures be a new empty List.
      iii. Let replacement be GetSubstitution(searchString, string, position, captures, undefined, replaceValue).

  StringIndexOf ( string, searchValue, fromIndex )

  ...
  4. Let len be the length of string.
  5. If searchValue is the empty string, and fromIndex <= len, return fromIndex.
  6. Let searchLen be the length of searchValue.
  7. If there exists any integer k such that fromIndex ≤ k ≤ len - searchLen and for all nonnegative integers j less than searchLen, the code unit at index k + j within string is the same as the code unit at index j within searchValue, let pos be the smallest (closest to -∞) such integer. Otherwise, let pos be -1.
  8. Return pos. 

  Runtime Semantics: GetSubstitution ( matched, str, position, captures, namedCaptures, replacement )

  ...
  2. Let matchLength be the number of code units in matched.
  ...
  4. Let stringLength be the number of code units in str.
  ...
  9. Let tailPos be position + matchLength.
  10. Let m be the number of elements in captures.
  11. Let result be the String value derived from replacement by copying code unit elements from replacement to result while performing replacements as specified in Table 53. These $ replacements are done left-to-right, and, once such a replacement is performed, the new replacement text is not subject to further replacements.
  12 Return result.

  Table 53: Replacement Text Symbol Substitutions
  ...

  The nnth element of captures, where nn is a two-digit decimal number in the range 01 to 99. If nn ≤ m and the nnth element of captures is undefined, use the empty String instead. If nn is 00 or nn > m, no replacement is done.
features: [String.prototype.replaceAll, Symbol.replace]
---*/

var str = 'aaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaa';

var result;

// captures is always an empty list if GetSubstitution is called from the string value of SearchValue

result = str.replaceAll('a', '$11');
assert.sameValue(result, '$11$11$11$11$11$11$11$11$11$11$11$11$11$11$11$11 $11$11$11$11$11$11$11$11 $11$11$11$11$11$11$11$11$11$11$11$11$11$11$11$11');

result = str.replaceAll('a', '$29');
assert.sameValue(result, '$29$29$29$29$29$29$29$29$29$29$29$29$29$29$29$29 $29$29$29$29$29$29$29$29 $29$29$29$29$29$29$29$29$29$29$29$29$29$29$29$29');

var customRE = /./g;

Object.defineProperty(customRE, Symbol.replace, {
  value: undefined
});

result = '------------------- /./g -------/./g'.replaceAll(customRE, 'a($12$11)');
assert.sameValue(result, '------------------- a($12$11) -------a($12$11)');


reportCompare(0, 0);
