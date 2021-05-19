
// traps.wast:5
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x00\x60\x02\x7e\x7e\x00\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xcd\x80\x80\x80\x00\x04\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x64\x69\x76\x5f\x73\x00\x00\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x64\x69\x76\x5f\x75\x00\x01\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x00\x02\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x00\x03\x0a\xb5\x80\x80\x80\x00\x04\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6d\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6e\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x7f\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x80\x1a\x0b");

// traps.wast:16
assert_trap(() => call($1, "no_dce.i32.div_s", [1, 0]));

// traps.wast:17
assert_trap(() => call($1, "no_dce.i32.div_u", [1, 0]));

// traps.wast:18
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x00\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_trap(() => call($1, "no_dce.i64.div_s", [int64("1"), int64("0")]))

// traps.wast:19
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x00\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_trap(() => call($1, "no_dce.i64.div_u", [int64("1"), int64("0")]))

// traps.wast:20
assert_trap(() => call($1, "no_dce.i32.div_s", [-2_147_483_648, -1]));

// traps.wast:21
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x00\x02\x97\x80\x80\x80\x00\x01\x02\x24\x31\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x64\x69\x76\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x9c\x80\x80\x80\x00\x01\x96\x80\x80\x80\x00\x00\x02\x40\x42\x80\x80\x80\x80\x80\x80\x80\x80\x80\x7f\x42\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$1", $1)),  "run", []));  // assert_trap(() => call($1, "no_dce.i64.div_s", [int64("-9_223_372_036_854_775_808"), int64("-1")]))

// traps.wast:23
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x8b\x80\x80\x80\x00\x02\x60\x02\x7f\x7f\x00\x60\x02\x7e\x7e\x00\x03\x85\x80\x80\x80\x00\x04\x00\x00\x01\x01\x07\xcd\x80\x80\x80\x00\x04\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x72\x65\x6d\x5f\x73\x00\x00\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x72\x65\x6d\x5f\x75\x00\x01\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x00\x02\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x00\x03\x0a\xb5\x80\x80\x80\x00\x04\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x6f\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x70\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x81\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x82\x1a\x0b");

// traps.wast:34
assert_trap(() => call($2, "no_dce.i32.rem_s", [1, 0]));

// traps.wast:35
assert_trap(() => call($2, "no_dce.i32.rem_u", [1, 0]));

// traps.wast:36
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x00\x02\x97\x80\x80\x80\x00\x01\x02\x24\x32\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_trap(() => call($2, "no_dce.i64.rem_s", [int64("1"), int64("0")]))

// traps.wast:37
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x00\x00\x60\x02\x7e\x7e\x00\x02\x97\x80\x80\x80\x00\x01\x02\x24\x32\x10\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x72\x65\x6d\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x93\x80\x80\x80\x00\x01\x8d\x80\x80\x80\x00\x00\x02\x40\x42\x01\x42\x00\x10\x00\x0f\x0b\x00\x0b", exports("$2", $2)),  "run", []));  // assert_trap(() => call($2, "no_dce.i64.rem_u", [int64("1"), int64("0")]))

// traps.wast:39
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x89\x80\x80\x80\x00\x02\x60\x01\x7d\x00\x60\x01\x7c\x00\x03\x89\x80\x80\x80\x00\x08\x00\x00\x01\x01\x00\x00\x01\x01\x07\xc9\x81\x80\x80\x00\x08\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x73\x00\x00\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x75\x00\x01\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x73\x00\x02\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x75\x00\x03\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x73\x00\x04\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x75\x00\x05\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x73\x00\x06\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x75\x00\x07\x0a\xd9\x80\x80\x80\x00\x08\x86\x80\x80\x80\x00\x00\x20\x00\xa8\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xa9\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xaa\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xab\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xae\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xaf\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb0\x1a\x0b\x86\x80\x80\x80\x00\x00\x20\x00\xb1\x1a\x0b");

// traps.wast:50
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i32.trunc_f32_s", [NaN]))

// traps.wast:51
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i32.trunc_f32_u", [NaN]))

// traps.wast:52
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i32.trunc_f64_s", [NaN]))

// traps.wast:53
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i32.trunc_f64_u", [NaN]))

// traps.wast:54
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i64.trunc_f32_s", [NaN]))

// traps.wast:55
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7d\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x33\x32\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x94\x80\x80\x80\x00\x01\x8e\x80\x80\x80\x00\x00\x02\x40\x43\x00\x00\xc0\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i64.trunc_f32_u", [NaN]))

// traps.wast:56
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x73\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i64.trunc_f64_s", [NaN]))

// traps.wast:57
assert_trap(() => call(instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x88\x80\x80\x80\x00\x02\x60\x00\x00\x60\x01\x7c\x00\x02\x9d\x80\x80\x80\x00\x01\x02\x24\x33\x16\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x74\x72\x75\x6e\x63\x5f\x66\x36\x34\x5f\x75\x00\x01\x03\x82\x80\x80\x80\x00\x01\x00\x07\x87\x80\x80\x80\x00\x01\x03\x72\x75\x6e\x00\x01\x0a\x98\x80\x80\x80\x00\x01\x92\x80\x80\x80\x00\x00\x02\x40\x44\x00\x00\x00\x00\x00\x00\xf8\x7f\x10\x00\x0f\x0b\x00\x0b", exports("$3", $3)),  "run", []));  // assert_trap(() => call($3, "no_dce.i64.trunc_f64_u", [NaN]))

// traps.wast:59
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x7f\x00\x03\x8f\x80\x80\x80\x00\x0e\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x05\x83\x80\x80\x80\x00\x01\x00\x01\x07\xa1\x82\x80\x80\x00\x0e\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x6c\x6f\x61\x64\x00\x00\x13\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x73\x00\x01\x13\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x75\x00\x02\x12\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x6c\x6f\x61\x64\x38\x5f\x73\x00\x03\x12\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x33\x32\x2e\x6c\x6f\x61\x64\x38\x5f\x75\x00\x04\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x00\x05\x13\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x33\x32\x5f\x73\x00\x06\x13\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x33\x32\x5f\x75\x00\x07\x13\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x73\x00\x08\x13\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x31\x36\x5f\x75\x00\x09\x12\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x38\x5f\x73\x00\x0a\x12\x6e\x6f\x5f\x64\x63\x65\x2e\x69\x36\x34\x2e\x6c\x6f\x61\x64\x38\x5f\x75\x00\x0b\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x66\x33\x32\x2e\x6c\x6f\x61\x64\x00\x0c\x0f\x6e\x6f\x5f\x64\x63\x65\x2e\x66\x36\x34\x2e\x6c\x6f\x61\x64\x00\x0d\x0a\xb7\x81\x80\x80\x00\x0e\x88\x80\x80\x80\x00\x00\x20\x00\x28\x02\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x2e\x01\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x2f\x01\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x2c\x00\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x2d\x00\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x29\x03\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x34\x02\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x35\x02\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x32\x01\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x33\x01\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x30\x00\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x31\x00\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x2a\x02\x00\x1a\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x2b\x03\x00\x1a\x0b");

// traps.wast:78
assert_trap(() => call($4, "no_dce.i32.load", [65_536]));

// traps.wast:79
assert_trap(() => call($4, "no_dce.i32.load16_s", [65_536]));

// traps.wast:80
assert_trap(() => call($4, "no_dce.i32.load16_u", [65_536]));

// traps.wast:81
assert_trap(() => call($4, "no_dce.i32.load8_s", [65_536]));

// traps.wast:82
assert_trap(() => call($4, "no_dce.i32.load8_u", [65_536]));

// traps.wast:83
assert_trap(() => call($4, "no_dce.i64.load", [65_536]));

// traps.wast:84
assert_trap(() => call($4, "no_dce.i64.load32_s", [65_536]));

// traps.wast:85
assert_trap(() => call($4, "no_dce.i64.load32_u", [65_536]));

// traps.wast:86
assert_trap(() => call($4, "no_dce.i64.load16_s", [65_536]));

// traps.wast:87
assert_trap(() => call($4, "no_dce.i64.load16_u", [65_536]));

// traps.wast:88
assert_trap(() => call($4, "no_dce.i64.load8_s", [65_536]));

// traps.wast:89
assert_trap(() => call($4, "no_dce.i64.load8_u", [65_536]));

// traps.wast:90
assert_trap(() => call($4, "no_dce.f32.load", [65_536]));

// traps.wast:91
assert_trap(() => call($4, "no_dce.f64.load", [65_536]));