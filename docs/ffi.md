# JSCL Foreign Function Interface (FFI)

JSCL provides a FFI to interact with JavaScript from Lisp code.

The FFI is a bit rought at the moment, but here is the documentation.

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

### With Type Conversion

`oget` and `oset` automatically convert values between Lisp and JavaScript:

```lisp
;; Read a property
(oget obj "property")

;; Read nested properties
(oget obj "foo" "bar" "baz")  ; obj.foo.bar.baz

;; Write a property (using setf)
(setf (oget obj "property") value)
```

### Without Type Conversion

`oget!` and `oset!` access properties without conversion (raw JavaScript values):

```lisp
;; Read without conversion
(oget! obj "property")

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
