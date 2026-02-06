# Compiler FFI Implementation Notes

This document describes how the FFI (Foreign Function Interface) is
implemented in the compiler and how it bootstraps across the host and
target environments. For the user-facing API, see `docs/ffi.md`.

## #j string literal in the host

Some `#j` syntax (currently `#j:true`, `#j:false`, `#j:null`,
`#j:undefined` and `#j"string"`) expands to literal JS values. These
aren't represented in the host, so doing so in cross-compiled code
throws an error. Use `(jsbool t)`, `(jsbool nil)`, `(jsnull)`,
`(jsundefined)` and `(jsstring "string")` instead.

## Primitives

In addition to the basic JS values, there is a small set of primitive
forms, e.g. `typeof`, `jsstring`, `clstring%`.

These primitives are implemented both for the compatibility structs
and as compiler builtins that emit inline JavaScript.

Everything else is defined in terms of these primitives, including the
`compiler.lisp` support for dumping JS values.

## The compiler

`codegen.lisp` generates JS code as a string from pure S-expressions;
it does not take `js-value`s as input.

Therefore, `compiler.lisp` is responsible for generating the
S-expressions necessary to dump a `js-value`. This is done by the
respective branches in `literal`.
