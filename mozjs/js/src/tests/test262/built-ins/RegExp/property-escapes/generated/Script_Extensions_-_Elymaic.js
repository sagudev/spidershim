// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Elymaic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x010FE0, 0x010FF6]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Elymaic}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Elymaic}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Elym}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Elym}"
);
testPropertyEscapes(
  /^\p{scx=Elymaic}+$/u,
  matchSymbols,
  "\\p{scx=Elymaic}"
);
testPropertyEscapes(
  /^\p{scx=Elym}+$/u,
  matchSymbols,
  "\\p{scx=Elym}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x010FDF],
    [0x010FF7, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Elymaic}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Elymaic}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Elym}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Elym}"
);
testPropertyEscapes(
  /^\P{scx=Elymaic}+$/u,
  nonMatchSymbols,
  "\\P{scx=Elymaic}"
);
testPropertyEscapes(
  /^\P{scx=Elym}+$/u,
  nonMatchSymbols,
  "\\P{scx=Elym}"
);

reportCompare(0, 0);
