// |reftest| error:SyntaxError module
// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  ExportDeclaration : HoistableDeclaration : AsyncFunctionDeclaration
  esid: prod-HoistableDeclaration
info: |
  ExportDeclaration :
    HoistableDeclaration[Yield, Await, Default]:

  HoistableDeclaration[Yield, Await, Default]:
    AsyncFunctionDeclaration[?Yield, ?Await, ?Default]

flags: [module]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

class A {};
export default async function A() {}
