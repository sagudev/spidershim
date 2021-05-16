// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Sogdian`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x000640
  ],
  ranges: [
    [0x010F30, 0x010F59]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Sogdian}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sogdian}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Sogd}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Sogd}"
);
testPropertyEscapes(
  /^\p{scx=Sogdian}+$/u,
  matchSymbols,
  "\\p{scx=Sogdian}"
);
testPropertyEscapes(
  /^\p{scx=Sogd}+$/u,
  matchSymbols,
  "\\p{scx=Sogd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00063F],
    [0x000641, 0x00DBFF],
    [0x00E000, 0x010F2F],
    [0x010F5A, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sogdian}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Sogd}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Sogd}"
);
testPropertyEscapes(
  /^\P{scx=Sogdian}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sogdian}"
);
testPropertyEscapes(
  /^\P{scx=Sogd}+$/u,
  nonMatchSymbols,
  "\\P{scx=Sogd}"
);

reportCompare(0, 0);
