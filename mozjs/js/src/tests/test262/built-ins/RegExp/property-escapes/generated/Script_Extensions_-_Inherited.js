// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Inherited`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x001DF9,
    0x0101FD
  ],
  ranges: [
    [0x000300, 0x000341],
    [0x000343, 0x000344],
    [0x000346, 0x000362],
    [0x000953, 0x000954],
    [0x001AB0, 0x001AC0],
    [0x001DC2, 0x001DF7],
    [0x001DFB, 0x001DFF],
    [0x00200C, 0x00200D],
    [0x0020D0, 0x0020EF],
    [0x00FE00, 0x00FE0F],
    [0x00FE20, 0x00FE2D],
    [0x01D167, 0x01D169],
    [0x01D17B, 0x01D182],
    [0x01D185, 0x01D18B],
    [0x01D1AA, 0x01D1AD],
    [0x0E0100, 0x0E01EF]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Inherited}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Inherited}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Zinh}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Zinh}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Qaai}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Qaai}"
);
testPropertyEscapes(
  /^\p{scx=Inherited}+$/u,
  matchSymbols,
  "\\p{scx=Inherited}"
);
testPropertyEscapes(
  /^\p{scx=Zinh}+$/u,
  matchSymbols,
  "\\p{scx=Zinh}"
);
testPropertyEscapes(
  /^\p{scx=Qaai}+$/u,
  matchSymbols,
  "\\p{scx=Qaai}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x000342,
    0x000345,
    0x001DF8,
    0x001DFA
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0002FF],
    [0x000363, 0x000952],
    [0x000955, 0x001AAF],
    [0x001AC1, 0x001DC1],
    [0x001E00, 0x00200B],
    [0x00200E, 0x0020CF],
    [0x0020F0, 0x00DBFF],
    [0x00E000, 0x00FDFF],
    [0x00FE10, 0x00FE1F],
    [0x00FE2E, 0x0101FC],
    [0x0101FE, 0x01D166],
    [0x01D16A, 0x01D17A],
    [0x01D183, 0x01D184],
    [0x01D18C, 0x01D1A9],
    [0x01D1AE, 0x0E00FF],
    [0x0E01F0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Inherited}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Inherited}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Zinh}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Zinh}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Qaai}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Qaai}"
);
testPropertyEscapes(
  /^\P{scx=Inherited}+$/u,
  nonMatchSymbols,
  "\\P{scx=Inherited}"
);
testPropertyEscapes(
  /^\P{scx=Zinh}+$/u,
  nonMatchSymbols,
  "\\P{scx=Zinh}"
);
testPropertyEscapes(
  /^\P{scx=Qaai}+$/u,
  nonMatchSymbols,
  "\\P{scx=Qaai}"
);

reportCompare(0, 0);
