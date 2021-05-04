//TODO: find a complete list
pub const RESERVED: &[&str] = &[
    // control flow
    "break",
    "if",
    "else",
    "continue",
    "goto",
    "do",
    "while",
    "for",
    "switch",
    "case",
    // types and values
    "void",
    "unsigned",
    "signed",
    "bool",
    "char",
    "int",
    "long",
    "float",
    "double",
    "char8_t",
    "wchar_t",
    "true",
    "false",
    "nullptr",
    "union",
    "class",
    "struct",
    "enum",
    // other
    "main",
    "using",
    "decltype",
    "sizeof",
    "typeof",
    "typedef",
    "explicit",
    "export",
    "friend",
    "namespace",
    "operator",
    "public",
    "template",
    "typename",
    "typeid",
    "co_await",
    "co_return",
    "co_yield",
    "module",
    "import",
    "ray_data",
    "vec_step",
    "visible",
    "as_type",
    // qualifiers
    "mutable",
    "static",
    "volatile",
    "restrict",
    "const",
    "non-temporal",
    "dereferenceable",
    "invariant",
    // exceptions
    "throw",
    "try",
    "catch",
    // operators
    "const_cast",
    "dynamic_cast",
    "reinterpret_cast",
    "static_cast",
    "new",
    "delete",
    "and",
    "and_eq",
    "bitand",
    "bitor",
    "compl",
    "not",
    "not_eq",
    "or",
    "or_eq",
    "xor",
    "xor_eq",
    "compl",
    // Metal-specific
    "constant",
    "device",
    "threadgroup",
    "threadgroup_imageblock",
    "kernel",
    "compute",
    "vertex",
    "fragment",
    "read_only",
    "write_only",
    "read_write",
];
