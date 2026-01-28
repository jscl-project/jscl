# JSCL Foreign Function Interface (FFI)

JSCL provides a FFI to interact with JavaScript from Lisp code.

The FFI is a bit rought at the moment, but here is the documentation, as an effort to facilitate coming up with an improved one.

## Accessing JavaScript Globals

Use the `#j:` reader macro to access JavaScript global variables and properties:

```lisp
;; Access the console object
#j:console

;; Access nested properties with colons
#j:console:log         ; equivalent to console.log in JavaScript
#j:document:body       ; equivalent to document.body

;; Call JavaScript functions
(funcall #j:console:log "Hello from JSCL!")
(funcall #j:alert "Hello!")
```

The `#j:` syntax expands to `(oget *root* ...)` where `*root*` is the global object (`window` in browsers, `global` in Node.js).

## Reading and Writing Object Properties

There are three variants of property access, differing in type conversion and safety:

| Reader   | Writer   | Type Conversion | Safe Chaining |
|----------|----------|-----------------|---------------|
| `oget`   | `oset`   | Yes             | Yes           |
| `oget*`  | `oset*`  | No              | Yes           |
| `oget!`  | `oset!`  | No              | No            |

### `oget` / `oset` — With Type Conversion

`oget` reads a property and converts the result from JavaScript to Lisp
using `js-to-lisp` (see [Type Conversions](#type-conversions) below).
When accessing nested properties, intermediate `undefined` values
short-circuit and return `nil` instead of throwing an error.

`oset` converts the value from Lisp to JavaScript using `lisp-to-js`
before writing. When writing to a nested path, intermediate properties
are traversed safely — if any intermediate is `undefined`, an error is
thrown rather than silently failing.

```lisp
;; Read a property (result is a Lisp value)
(oget obj "name")             ; JS string → Lisp string

;; Read nested properties safely
(oget obj "foo" "bar" "baz")  ; obj.foo.bar.baz
;; If obj.foo is undefined, returns nil instead of erroring

;; Write a property (value is converted from Lisp to JS)
(setf (oget obj "name") "Alice")

;; Write to a nested path (intermediate properties must exist)
(setf (oget obj "foo" "bar") 42)
;; Throws if obj.foo is undefined
```

### `oget*` / `oset*` — Raw Access with Safe Chaining

`oget*` reads a property without type conversion, returning the raw
JavaScript value. Like `oget`, nested access is safe: if any intermediate
property is `undefined`, it returns `nil` early instead of throwing.
The final value is also returned as `nil` if it is `undefined`.

`oset*` writes a raw JavaScript value without conversion. Like `oset`,
intermediate properties in a nested path are traversed safely — if any
intermediate is `undefined`, an error is thrown.

Use `oget*`/`oset*` when you want to work with raw JavaScript values
(e.g., a JS string rather than a Lisp string) but still want safe
nested access.

```lisp
;; Read a property (result is a raw JS value)
(oget* obj "name")            ; returns a JS string, not a Lisp string

;; Safe nested access
(oget* obj "foo" "bar" "baz") ; nil if any intermediate is undefined

;; Write a raw JS value (no lisp-to-js conversion)
(setf (oget* obj "name") raw-js-string)
```

### `oget!` / `oset!` — Raw Access without Safe Chaining

`oget!` reads a property without type conversion and without any safety
checks. It compiles to a direct JavaScript property access chain
(`obj.foo.bar.baz`). If any intermediate property is `undefined`,
accessing further properties will throw a JavaScript `TypeError`.

Use `oget!` when you need maximum performance and are certain the
property chain is valid, or when you intentionally want `undefined`
as a return value rather than `nil`.

```lisp
;; Direct property access (no conversion, no safety checks)
(oget! obj "property")

;; Nested access — throws if obj.foo is undefined
(oget! obj "foo" "bar")

;; Write without conversion
(setf (oget! obj "property") value)
```

## Creating JavaScript Objects

### Plain Objects

Use `new` to create plain JavaScript objects:

```lisp
;; Create an empty object {}
(new)

;; Create an object with properties
(new "name" "John" "age" 30)  ; {name: "John", age: 30}
```

### Constructor Calls

Use `make-new` to call JavaScript constructors:

```lisp
;; new Date()
(make-new #j:Date)

;; new Date(2024, 0, 1)
(make-new #j:Date 2024 0 1)

;; new RegExp("pattern", "g")
(make-new #j:RegExp "pattern" "g")
```

## Calling JavaScript Methods

Call methods by getting them with `oget` and using `funcall`:

```lisp
;; document.getElementById("myId")
(funcall (oget #j:document "getElementById") "myId")

;; array.push(item)
(funcall (oget my-array "push") item)

;; str.split(",")
(funcall (oget str "split") ",")
```

You can also use the function call syntax directly:

```lisp
;; Call console.log
((oget #j:console "log") "Hello!")
```

## Type Conversions

JSCL automatically converts types when using `oget`/`oset`:

| Lisp               | JavaScript      |
|--------------------|-----------------|
| `t`                | `true`          |
| `nil`              | `false`         |
| Lisp strings       | JS strings      |
| Numbers            | Numbers         |
| Lisp functions     | JS functions    |

### Explicit Conversion Functions

Use these functions when you need to convert values explicitly:

#### `lisp-to-js`

Converts a Lisp value to its JavaScript equivalent:

```lisp
(lisp-to-js t)      ; => true
(lisp-to-js nil)    ; => false
(lisp-to-js "foo")  ; => "foo" (JS string)
```

#### `js-to-lisp`

Converts a JavaScript value to its Lisp equivalent:

```lisp
(js-to-lisp +true+)   ; => t
(js-to-lisp +false+)  ; => nil
```

#### `fn-to-js`

Wraps a Lisp function to be called from JavaScript. The wrapped function receives its arguments as raw JavaScript values without any conversion, which is useful when you need to work with JavaScript objects directly:

```lisp
;; Create a callback for JavaScript
(setf (oget obj "onclick")
      (fn-to-js (lambda (event)
                  (print "clicked!")
                  t)))
```

## JavaScript Constants

JSCL provides constants for JavaScript's primitive values:

| Constant      | JavaScript Value |
|---------------|------------------|
| `+true+`      | `true`           |
| `+false+`     | `false`          |
| `+null+`      | `null`           |
| `+undefined+` | `undefined`      |

These are useful when you need to pass or compare against JavaScript primitive values directly, without automatic conversion.

## Testing JavaScript Values

```lisp
;; Check if value is null
(js-null-p value)

;; Check if value is undefined
(js-undefined-p value)

;; Check if value is a JavaScript object
(js-object-p value)
```

## Low-Level Access

For direct access to JavaScript global variables by name:

```lisp
;; Read a global variable
(%js-vref "variableName")

;; Write a global variable
(setf (%js-vref "variableName") value)
```

## Caveats

### JavaScript `false` and `null` are truthy in Lisp

The JavaScript constants `+false+` and `+null+` are *not* the same as `nil`. In Lisp, only `nil` is considered false in conditionals. This means `+false+` is still truthy:

```lisp
(if +false+ "truthy" "falsy")  ; => "truthy"
(if nil "truthy" "falsy")      ; => "falsy"
```

If you need to test JavaScript boolean values, use explicit checks or convert them to Lisp booleans first.
