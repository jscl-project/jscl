# JSCL FFI

The `JSCL/FFI` package exports the public API for JavaScript interop.

```lisp
(use-package :jscl/ffi)
```

## Basic values and constants

```
1
#j:true
#j:false
#j:null
#j:undefined
;; Immutable JS Strings
#j"foo"
```

## Object creation: `object`

Previously `new`. Creates a plain JS object:

```lisp
(object)                            ; => {}
(object "name" #j"Alice" "age" 30)  ; => {name: "Alice", age: 30}
```

Note: for now, key strings are constants. So no need for #j.

## Property access: `oget` / `oset`

```lisp
(oget obj "name")                   ; property access
(oget obj "foo" "bar" "baz")        ; chained: obj.foo.bar.baz
(setf (oget obj "name") value)      ; write (via oset)
```

## Optional chaining: `oget?`

Uses JavaScript's `?.` operator. Returns `#j:undefined` instead of
throwing when an intermediate value is nullish.

```lisp
(oget? obj "foo" "bar")             ; obj?.["foo"]?.["bar"]
```

## `#j:` reader macro for references

Access global JS properties.

```lisp
#j:document:title                ; (oget *root* #j"document" #j"title")
(#j:console:log #j"hello")       ; direct method call, converts args, preserves this
(#j:Math:floor 3.7)              ; => 3
```

## Type checking: `typeof` / `instanceof`

```lisp
(typeof x)                       ; => #j"string", #j"number", etc.
(instanceof x #j:Date)           ; => #j:true or #j:false
```

## Constructor calls: `new`

Previously `make-new`. Calls a JS constructor:

```lisp
(new #j:Date 2024 0 1)				; new Date(2024, 0, 1)
(new #j:RegExp #j"pattern" #j"g")
```

## Functions

Lisp functions are JS functions. No special treatment.

## Conversions

There is still a need for conversions. But those can be explicit:

- `(jsstring x)` convert a Lisp string to a JS string
- `(clstring x)` convert a JS string to a Lisp string
- `(jsbool x)` convert any Lisp value to a JS boolean: non-nil becomes `#j:true`, nil becomes `#j:false`
- `(clbool x)` convert a JS boolean to a Lisp boolean: `#j:true` becomes `t`; `#j:false`, `#j:null`, and `#j:undefined` become `nil`. Signals a type error for other values.

## Conditionals

CLHS mandates that only NIL is considered false in conditionals.

```
(if X ...consequent... ...alternative...)
```

But then

```
(if #j:false .... )
```

would be highly unintuitive. We need

```
(if (clbool ...) ...)
```

when working with FFI.

What if we would make `if` work with false and other falsy values?  it sounds dangerous as code like
```
(if x ...)
```
becomes different from
```
(if (null x)
  ....)
```
