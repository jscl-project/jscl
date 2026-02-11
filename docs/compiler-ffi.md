# Compiler FFI Implementation Notes

This document describes how the FFI (Foreign Function Interface) is
implemented in the compiler and how it bootstraps across the host and
target environments. For the user-facing API, see `docs/ffi.md`.

## Dual-environment architecture

JavaScript values do not exist in the host (necessarily), yet the
compiler must be able to manipulate them at compile time (e.g. as
literals produced by reader macros).

To solve this, there is a set of structs emulating JS values during
cross-compilation:

```lisp
;; Only defined in the host (#-jscl)
(defstruct js-value)
(defstruct (js-string  (:include js-value)) value)
(defstruct (js-boolean (:include js-value)) value)
(defstruct (js-null    (:include js-value)))
(defstruct (js-undefined (:include js-value)))
```

When `#j"hello"` is read in the host, it produces a `js-string`
struct. When `#j:true` is read, it produces a `js-boolean` struct.
These are ordinary Lisp objects that the compiler can store in its
literal table and later dump as JavaScript code.

In the target, none of these structs exist. The same reader macros
produce actual JavaScript primitives instead.

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
S-expressions necessary to dump a `js-value`. This is done by
respective branches in `literal`.
