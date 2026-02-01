# JSCL FFI

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

(oget obj #j"name")                ; read with conversion
(oget obj "name")                  ; also works, because CL strings support .toString()
(oget obj #j"foo" #j"bar" #j"baz") ; chained access; nil if intermediate is undefined
(setf (oget obj #j"name") value)   ; write with conversion (via oset)
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

Therere is still a need for conversions. But those can be explicit:


- `(jsstring x)` convert to js string
- `(clstring x)` convert to cl string
- `(jsbool x)` could convert t/nil to `#j:true` / `#j:false`
- `(clbool x)` could convert `#j:true` to `t`, `#j:false` (and other falsy values?) to `nil`.

etc.

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
