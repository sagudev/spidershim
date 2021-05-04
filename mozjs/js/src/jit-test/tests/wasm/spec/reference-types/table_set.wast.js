
// table_set.wast:1
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\xa2\x80\x80\x80\x00\x07\x60\x00\x00\x60\x01\x7f\x01\x6f\x60\x01\x7f\x01\x70\x60\x02\x7f\x6f\x00\x60\x02\x7f\x70\x00\x60\x02\x7f\x7f\x00\x60\x01\x7f\x01\x7f\x03\x88\x80\x80\x80\x00\x07\x00\x01\x02\x03\x04\x05\x06\x04\x87\x80\x80\x80\x00\x02\x6f\x00\x01\x70\x00\x02\x07\xe2\x80\x80\x80\x00\x06\x0d\x67\x65\x74\x2d\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x01\x0b\x67\x65\x74\x2d\x66\x75\x6e\x63\x72\x65\x66\x00\x02\x0d\x73\x65\x74\x2d\x65\x78\x74\x65\x72\x6e\x72\x65\x66\x00\x03\x0b\x73\x65\x74\x2d\x66\x75\x6e\x63\x72\x65\x66\x00\x04\x10\x73\x65\x74\x2d\x66\x75\x6e\x63\x72\x65\x66\x2d\x66\x72\x6f\x6d\x00\x05\x0f\x69\x73\x5f\x6e\x75\x6c\x6c\x2d\x66\x75\x6e\x63\x72\x65\x66\x00\x06\x09\x89\x80\x80\x80\x00\x01\x02\x01\x41\x01\x0b\x00\x01\x00\x0a\xd3\x80\x80\x80\x00\x07\x82\x80\x80\x80\x00\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x25\x00\x0b\x86\x80\x80\x80\x00\x00\x20\x00\x25\x01\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x26\x00\x0b\x88\x80\x80\x80\x00\x00\x20\x00\x20\x01\x26\x01\x0b\x8a\x80\x80\x80\x00\x00\x20\x00\x20\x01\x25\x01\x26\x01\x0b\x87\x80\x80\x80\x00\x00\x20\x00\x10\x02\xd1\x0b");

// table_set.wast:29
assert_return(() => call($1, "get-externref", [0]), null);

// table_set.wast:30
assert_return(() => call($1, "set-externref", [0, externref(1)]));

// table_set.wast:31
assert_return(() => call($1, "get-externref", [0]), externref(1));

// table_set.wast:32
assert_return(() => call($1, "set-externref", [0, null]));

// table_set.wast:33
assert_return(() => call($1, "get-externref", [0]), null);

// table_set.wast:35
assert_return(() => call($1, "get-funcref", [0]), null);

// table_set.wast:36
assert_return(() => call($1, "set-funcref-from", [0, 1]));

// table_set.wast:37
assert_return(() => call($1, "is_null-funcref", [0]), 0);

// table_set.wast:38
assert_return(() => call($1, "set-funcref", [0, null]));

// table_set.wast:39
assert_return(() => call($1, "get-funcref", [0]), null);

// table_set.wast:41
assert_trap(() => call($1, "set-externref", [2, null]));

// table_set.wast:42
assert_trap(() => call($1, "set-funcref", [3, null]));

// table_set.wast:43
assert_trap(() => call($1, "set-externref", [-1, null]));

// table_set.wast:44
assert_trap(() => call($1, "set-funcref", [-1, null]));

// table_set.wast:46
assert_trap(() => call($1, "set-externref", [2, externref(0)]));

// table_set.wast:47
assert_trap(() => call($1, "set-funcref-from", [3, 1]));

// table_set.wast:48
assert_trap(() => call($1, "set-externref", [-1, externref(0)]));

// table_set.wast:49
assert_trap(() => call($1, "set-funcref-from", [-1, 1]));

// table_set.wast:54
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x6f\x00\x0a\x0a\x8a\x80\x80\x80\x00\x01\x84\x80\x80\x80\x00\x00\x26\x00\x0b");

// table_set.wast:63
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x6f\x00\x0a\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\xd0\x6f\x26\x00\x0b");

// table_set.wast:72
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x6f\x00\x0a\x0a\x8c\x80\x80\x80\x00\x01\x86\x80\x80\x80\x00\x00\x41\x01\x26\x00\x0b");

// table_set.wast:81
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x84\x80\x80\x80\x00\x01\x60\x00\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x6f\x00\x0a\x0a\x91\x80\x80\x80\x00\x01\x8b\x80\x80\x80\x00\x00\x43\x00\x00\x80\x3f\xd0\x6f\x26\x00\x0b");

// table_set.wast:90
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x6f\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x70\x00\x0a\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x41\x01\x20\x00\x26\x00\x0b");

// table_set.wast:100
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x01\x6f\x00\x03\x82\x80\x80\x80\x00\x01\x00\x04\x87\x80\x80\x80\x00\x02\x6f\x00\x01\x70\x00\x01\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x41\x00\x20\x00\x26\x01\x0b");

// table_set.wast:111
assert_invalid("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x82\x80\x80\x80\x00\x01\x00\x04\x84\x80\x80\x80\x00\x01\x6f\x00\x0a\x0a\x8e\x80\x80\x80\x00\x01\x88\x80\x80\x80\x00\x00\x41\x00\xd0\x6f\x26\x00\x0b");
