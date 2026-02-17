# JSCL Compiler Profiling Analysis

## Test Results

- **All 1891 tests pass**
- **Compilation time**: ~30.4 seconds (compiling test files within JSCL)
- **Test execution time**: ~1.9 seconds
- Compilation dominates: 94% of wall time is spent compiling, 6% executing

## V8 Profiler Summary (24,129 ticks total)

### Top Hotspots by Self-Time

| Rank | Function | Ticks | % | Category |
|------|----------|-------|---|----------|
| 1 | `Builtin: LoadIC` | 3,222 | 13.4% | V8 property access inline cache |
| 2 | `ASSOC` | 1,029 | 4.3% | Linear search in association lists |
| 3 | `Builtin: CompileLazy` | 776 | 3.2% | V8 lazy compilation of closures |
| 4 | `ALPHANUMERICP` | 640 | 2.7% | Character classification |
| 5 | `Builtin: StrictEqual` | 493 | 2.0% | V8 equality checks |
| 6 | `Builtin: KeyedHasIC_Megamorphic` | 452 | 1.9% | Megamorphic property checks |
| 7 | `LIST-LENGTH` | 411 | 1.7% | Linear list length computation |
| 8 | `Builtin: StoreIC` | 334 | 1.4% | V8 property store inline cache |
| 9 | `Builtin: CallFunction` | 308 | 1.3% | V8 function call overhead |
| 10 | `Builtin: ArrayPrototypeJoin` | 288 | 1.2% | String joining (from string representation) |

### Pattern Counts in Generated Code (dist/jscl.js — 60,470 lines, 2.5MB)

| Pattern | Count | What it indicates |
|---------|-------|-------------------|
| `(function(){` (IIFEs) | 7,239 | Closure wrapping overhead |
| `l3.value` (NIL references) | 8,289 | NIL comparison hot path |
| `make_lisp_string` | 3,864 | String constant allocations |
| `internals.mvcall` | 2,539 | Multiple-value call protocol |
| `var FUNC=(function` | 1,985 | Function definition wrappers |
| `typeof x!='number'` | 1,548 | Arithmetic type guards |
| `internals.values1` | 1,269 | Single-value return protocol |
| `internals.withMV` | 780 | MV capture for exceptions |
| Keyword-argument loops | 553 | Linear keyword scanning |
| `typeof F==='function'?F:F.fvalue` | 436 | Function call indirection |
| `internals.BlockNLX` | 439 | Exception control flow objects |
| `try{var v...=[]` | 192 | Block NLX setup with try/catch |

---

## Hypothesis 1: Strings Represented as Arrays (HIGH IMPACT)

### What is it?

JSCL represents every Lisp string as a **JavaScript Array of single-character strings**, not as a native JS string. This is done to support Unicode surrogate pair handling at the character level.

The core infrastructure (in `prelude.js`, lines 368-426 of `dist/jscl.js`):

```javascript
// Split a JS string into an array of codepoints (1 or 2 UTF-16 code units each)
function codepoints(string) {
  return string.split(/(?![\udc00-\udfff])/);   // regex split on every position
}

// Create a "lisp string" — it's an Array with a marker property
internals.make_lisp_string = function (string) {
  var array = codepoints(string);    // O(n) regex split
  array.stringp = 1;                 // mark as string (mutates hidden class!)
  array.toString = function () { return internals.xstring(this); };
  return array;
};

// Convert a lisp string (array) back to a JS string — needed for any JS interop
internals.xstring = function (x) {
  if (typeof x === "string") return x;
  if (typeof x === "number") return x.toString();
  const hasFillPointer = typeof x.fillpointer === "number";
  const activechars = hasFillPointer ? x.slice(0, x.fillpointer) : x;
  return activechars.join("");       // O(n) array join
};
```

### Why does this cause performance issues?

**Every string constant pays O(n) allocation cost.** The compiler generates 3,864 `make_lisp_string` calls. Each one:
1. Calls `string.split()` with a regex — V8 must execute the regex engine
2. Allocates a new Array object with one element per character
3. Mutates the array's hidden class by adding `.stringp = 1` and `.toString`

For example, the string `"loading boot.lisp!"` (line 671):
```javascript
var l1=internals.make_lisp_string('loading boot.lisp!');
```
Becomes the array `['l','o','a','d','i','n','g',' ','b','o','o','t','.','l','i','s','p','!']` — 18 separate single-char string allocations plus the array itself.

**Every string *use* pays O(n) reconstruction cost.** Whenever JSCL needs to use a string as a native JS string (for console output, property access, comparison), it must call `xstring()` which calls `.join("")`:

```javascript
// Line 672: Console output requires joining the array
console.log(internals.xstring(l1));

// Lines 9458, 9754, 10062: Object property access requires joining
v2695[internals.xstring(v2696)] = v2698;    // (oset obj key value)
v2783[internals.xstring(v2784)] = v2786;    // (set-fill-pointer ...)
```

**String comparison is character-by-character instead of native.** `STRING=` (lines 10160-10246) compiles to a loop that extracts each character via the CHAR function (array index) and compares with CHAR=, rather than using native JS `===`:

```javascript
// STRING= compiled output (simplified from lines 10206-10224):
while (index < length) {
  if (l23.fvalue(                          // CHAR= function call
        l30.fvalue(string1, index),        // CHAR function: array[index]
        l30.fvalue(string2, index)         // CHAR function: array[index]
      ) !== l3.value)
    /* continue */;
  else
    throw new internals.BlockNLX(...);     // mismatch → exception exit
  index = index + 1;                       // with type checks on +1
}
```

Compare this to what native JS would do: `string1 === string2` — a single instruction.

**String concatenation uses Array.concat instead of `+`.** The `CONCAT` function (line 10738):
```javascript
var SV1 = v3079;
var R = SV1.concat(v3080);    // Array.concat() — allocates new array
R.stringp = SV1.stringp;      // copy the string marker
return R;
```

**STRING-UPCASE loops character-by-character** (lines 10752-10810) instead of calling `.toUpperCase()`:
```javascript
while (index < length) {
  result[index] = internals.safe_char_upcase(source[index]);  // per-char upcase
  index++;
}
```

### Impact from profiling

- `Builtin: ArrayPrototypeJoin` — **288 ticks (1.2%)** from `.join("")` calls
- `Builtin: RegExpSplit` — **52 ticks (0.2%)** from `codepoints()` splits
- The CHAR function (`l30.fvalue`) appears in the reader hot path consuming the bottom-up profile under `ALPHANUMERICP`, `WHITESPACEP`, `TERMINALP`, `TERMINATINGCHARP`
- The reader processes **every character of every source file** through this array-indexing pipeline

### Profiling data — reader hot path

The bottom-up profile shows the reader (`ls-read`, `read-list`, `read-symbol`) is the dominant consumer during compilation (30.4s). Character operations cascade:

```
CHAR (array index)                     → called from
  WHITESPACE-P (compare against ' ', tab, etc.)  → called from
    SKIP-WHITESPACE-AND-COMMENTS                  → called from
      READ-LIST, LS-READ                          → called for every form
```

```
CHAR (array index)                     → called from
  TERMINATING-CHAR-P                   → called from
    TERMINAL-P                         → called from
      READ-ESCAPED-UNTIL               → called for every symbol/string token
```

The `TERMINATING-CHAR-P` function (line 27580) checks against 7 characters by calling CHAR= 7 times:
```javascript
// Each comparison is a function call that extracts from the character array:
(l23.fvalue('"',v8014))    // CHAR= with "
(l23.fvalue(')',v8014))    // CHAR= with )
(l23.fvalue('(',v8014))    // CHAR= with (
(l23.fvalue('`',v8014))    // CHAR= with `
(l23.fvalue(',',v8014))    // CHAR= with ,
(l23.fvalue("'",v8014))    // CHAR= with '
(l23.fvalue(';',v8014))    // CHAR= with ;
```

A native JS implementation would be: `"\"()`,';".includes(ch)` — one call instead of 7.

---

## Hypothesis 2: Exceptions for Normal Control Flow (HIGH IMPACT)

### What is it?

Common Lisp's `BLOCK`/`RETURN-FROM` is the standard way to do early returns. Every `DEFUN` creates an implicit block. JSCL compiles **all** `RETURN-FROM` (including purely local ones) using JavaScript exception machinery: `try`/`catch`/`throw` with `BlockNLX` objects.

The compiler code (`compiler.lisp:962-1013`):
```lisp
(define-compilation block (name &rest body)
  ;; We use Javascript exceptions to implement non local control transfer.
  (let* ((idvar (gvarname name))
         (b (make-binding :name name :type 'block :value idvar)))
    ;; ...
    `(selfcall
      (try
       (var (,idvar #()))         ;; unique identity marker
       ,cbody)
      (catch (cf)
        (if (and (instanceof cf (internal |BlockNLX|))
                 (== (get cf "id") ,idvar))
            (return (get cf "value"))   ;; our block → extract value
            (throw cf))))))             ;; not ours → rethrow
```

### Why does this cause performance issues?

**V8 de-optimizes functions containing try/catch.** When V8's TurboFan compiler encounters a `try` block, it limits the optimizations it can perform on the surrounding function. The function may stay in the interpreter or baseline compiler rather than being fully optimized.

**Exception creation is expensive.** Each `RETURN-FROM` in MV position creates:
1. An anonymous function wrapper (IIFE)
2. A `withMV` call to capture multiple-value state
3. A `new internals.BlockNLX(...)` object allocation
4. A `throw` — V8 must unwind the stack
5. A `catch` — `instanceof` check + identity comparison
6. Value extraction from the exception object

**The critical issue: most of these are LOCAL returns.** The `throw` and `catch` are in the *same lexical scope* — the exception never actually escapes. A plain `return` would suffice.

### Concrete examples

**Example 1: The `>` comparison function** (lines 4315-4338). This is a function called extremely frequently — every numeric comparison in the compiler:

```javascript
// Lisp: (defun > (x &rest args) (block nil ...))
l452.fvalue=(function(){var FUNC=(function JSCL_USER_(v1110){
  internals.checkArgsAtLeast(arguments.length,1);
  // ... argument collection ...
  return (function(){try{                           // <-- try/catch wrapper
    var v1113=[];                                   // <-- block ID (empty array)
    (function(){
      return (function(v1115,v1116){
        (function(){
          while (v1115!==l3.value){
            v1116=v1115.$$jscl_car;
            if (/* v1111 > v1116 */)
              v1111=v1116;
            else (function(){                       // <-- IIFE just for throw
              var _R=internals.withMV((function(){   // <-- capture MV state
                return internals.values1(l3.value);  // <-- just returning NIL!
              }));
              throw new internals.BlockNLX(          // <-- THROW for local return
                v1113,_R.result,_R.mv,'>'
              );
            })();
            v1115=v1115.$$jscl_cdr;
          }
          return l3.value;
        })();
        return l3.value;
      })(v1110,l3.value);
    })();
    return internals.values1(l2.value);
  }catch (CF){                                      // <-- CATCH
    if (CF instanceof internals.BlockNLX&&CF.id==v1113) {
      internals._mv=CF.mv;
      return CF.value;
    } else throw CF;                                // <-- rethrow if not ours
  }})();
});
```

The `throw` on the inner line is caught by the `catch` **5 lines below in the same function**. This is a local early return that should just be `return l3.value;`.

**Example 2: The EQL function** (lines 726-734) — the simplest possible case:

```javascript
l12.fvalue=(function(){                           // IIFE 1: fvalue assignment
  var FUNC=(function JSCL_USER_EQL(v12,v13){     // IIFE 2: named function
    internals.checkArgs(arguments.length,2);
    var v14=this;                                  // captured but never used
    return (function(){                            // IIFE 3: body wrapper
      return v12===v13?l2.value:l3.value;
    })();
  });
  FUNC.fname=internals.make_lisp_string('EQL');
  return FUNC;
})();
```

The Lisp source is: `(defun eql (x y) (eq x y))`. The actual logic is `v12===v13?l2.value:l3.value` — one ternary. But it's wrapped in **3 nested function creations and invocations**.

**Example 3: The withMV wrapping pattern** — appears 780 times. Even when returning a constant like NIL:

```javascript
// This pattern appears hundreds of times:
(function(){
  var _R = internals.withMV((function(){     // create function, call withMV
    return internals.values1(l3.value);      // just wrapping NIL
  }));
  throw new internals.BlockNLX(v131, _R.result, _R.mv, 'NIL');
})();
```

What `withMV` does (line 76-80):
```javascript
internals.withMV = function(fn) {
  internals._mv = null;        // clear MV
  var result = fn();            // call the wrapper function
  return { result, mv: internals._mv };  // allocate a result object
};
```

So returning NIL from a block involves: 1 IIFE creation, 1 inner function creation, 1 `withMV` call, 1 object allocation `{result, mv}`, 1 `BlockNLX` allocation, 1 `throw`, 1 `catch`, 1 `instanceof`, 1 identity check.

**What it should be:** `return l3.value;`

### Impact from profiling

- `Builtin: CompileLazy` at **776 ticks (3.2%)** — V8 lazily compiling the thousands of IIFE micro-functions
- `internals.BlockNLX` constructor at **33 ticks (0.1%)** in direct self-time
- `internals.withMV` at **37 ticks (0.2%)** in self-time
- The **indirect** cost is higher: try/catch prevents TurboFan optimization of surrounding code, showing up as inflated times in `LoadIC`, `StrictEqual`, and `CallFunction` builtins

---

## Hypothesis 3: Megamorphic Property Access / LoadIC Thrashing (HIGH IMPACT)

### What is it?

V8 uses **inline caches (ICs)** to speed up property access. When code does `obj.foo`, V8 remembers the "hidden class" (shape) of `obj` and generates fast code assuming future objects at that site have the same shape. This is called a **monomorphic** IC.

When 2-4 different shapes appear at the same site, V8 uses a **polymorphic** IC (slightly slower). When more shapes appear, it becomes **megamorphic** and falls back to a **slow dictionary lookup** every time.

JSCL creates objects with at least **4 fundamentally different shapes** that flow through the same code paths:

### Why does this cause performance issues?

**Shape 1: Regular Symbols** (line 123-130):
```javascript
internals.Symbol = function (name, pkg) {
  this.name = name;         // string
  this.package = pkg;       // package object or nil
  this.value = UNBOUND;     // Symbol sentinel
  this.fvalue = ...;        // function
  this.setfvalue = ...;     // function
  this.stack = [];           // array
};
// Hidden class: {name, package, value, fvalue, setfvalue, stack}
```

**Shape 2: NIL — a Symbol with extra properties** (lines 137-141):
```javascript
nil = new internals.Symbol("NIL", null);
Object.defineProperty(nil, "$$jscl_car", { value: nil, writable: false });
Object.defineProperty(nil, "$$jscl_cdr", { value: nil, writable: false });
// Hidden class: {name, package, value, fvalue, setfvalue, stack, $$jscl_car, $$jscl_cdr}
//   ↑ DIFFERENT from regular Symbol
```

**Shape 3: Cons cells** (lines 311-338):
```javascript
internals.Cons = function (car, cdr) {
  this["$$jscl_car"] = car;
  this["$$jscl_cdr"] = cdr;
};
// Hidden class: {$$jscl_car, $$jscl_cdr}
//   ↑ DIFFERENT from both Symbol variants
```

**Shape 4: Lisp strings — mutated arrays** (lines 374-379):
```javascript
var array = codepoints(string);
array.stringp = 1;              // mutates Array's hidden class
array.toString = function(){...};  // mutates again
// Hidden class: Array + {stringp, toString}
//   ↑ DIFFERENT from regular arrays
```

**Additionally**, `$$jscl_car`/`$$jscl_cdr` are defined as **getter/setter traps on `Object.prototype`** (lines 316-332):
```javascript
Object.defineProperty(Object.prototype, "$$jscl_car", {
  get: function () { internals.typeError(this, ...); },
  set: function () { internals.typeError(this, ...); },
});
```

This means every JavaScript object in the system has these trap accessors in its prototype chain, which V8 must account for.

### Where it hits in practice

**List traversal — the most common loop pattern.** Every `while (list !== nil)` loop accesses `$$jscl_car` and `$$jscl_cdr` on objects that alternate between Cons cells and nil:

```javascript
// REDUCE function (line 1562-1570) — called hundreds of times
while (v235 !== l3.value) {      // v235 is Cons or nil
  v236 = v235.$$jscl_car;        // Cons shape → fast IC
  // ... process element ...
  v235 = v235.$$jscl_cdr;        // Cons shape → fast IC
}
// After loop exits, the last v235 was nil (Symbol shape)
// V8 has seen TWO shapes at the $$jscl_cdr access site → polymorphic IC
```

The comparison `v235 !== l3.value` requires `l3.value` — a property load on the NIL Symbol object. This is the same `.value` property that regular symbols have, but because `nil` has a different hidden class (with the extra `$$jscl_car`/`$$jscl_cdr`), V8 can't use a monomorphic IC for `.value` access on mixed symbol populations.

**Function dispatch — 436 call sites with type polymorphism:**
```javascript
// In MAPCAR, EVERY, FUNCALL — called thousands of times:
var F = v4552;
return (typeof F === 'function' ? F : F.fvalue)(v4566);
```

Here `F` can be a raw JS function or a Symbol. The `.fvalue` access sees both Symbol shapes (with/without `$$jscl_car`), and the call site sees both function types.

### Impact from profiling

- `Builtin: LoadIC` — **3,222 ticks (13.4%)** — the #1 hotspot by far. LoadIC is V8's property load handler. High time here means ICs are frequently missing/megamorphic.
- `Builtin: KeyedHasIC_Megamorphic` — **452 ticks (1.9%)** — explicitly megamorphic key checks (the `in` operator or property existence checks)
- `Builtin: StoreIC` — **334 ticks (1.4%)** — property stores hitting IC misses
- `Builtin: StrictEqual` — **493 ticks (2.0%)** — identity comparisons (partly from `!== l3.value` on mixed shapes)

Combined, **IC-related builtins account for 18.7% of all time** (4,501 of 24,129 ticks).

---

## Hypothesis 4: Pervasive IIFE Wrapping (MEDIUM IMPACT)

### What is it?

The compiler's `selfcall` macro wraps expressions in Immediately Invoked Function Expressions (IIFEs): `(function(){ ... })()`. This is used for `BLOCK`, `LET`, `LET*`, `PROGN` in expression position, `RETURN-FROM`, and many other constructs — because pre-ES6 JavaScript had no block scoping.

### Why does this cause performance issues?

Each IIFE:
1. **Allocates a closure object** (even if it captures nothing, V8 must allocate)
2. **Requires lazy compilation** — V8 doesn't compile functions until first call. With 7,239 IIFEs, `CompileLazy` appears at 3.2% (776 ticks)
3. **Creates a function boundary** that prevents V8 from optimizing across it — register allocation, escape analysis, and inlining are all scoped to a single function
4. **Adds call overhead** — function prologue, argument setup, return value propagation

### Concrete examples

**NOT function** — trivial logic, 3 IIFE layers (lines 736-744):
```javascript
l13.fvalue=(function(){                                    // IIFE 1
  var FUNC=(function JSCL_USER_NOT(v16){                   // IIFE 2
    internals.checkArgs(arguments.length,1);
    var v14=this;
    return (function(){                                     // IIFE 3
      return v16!==l3.value?
        internals.values1(l3.value):
        internals.values1(l2.value);
    })();
  });
  FUNC.fname=internals.make_lisp_string('NOT');
  return FUNC;
})();
```

Lisp: `(defun not (x) (null x))`. The ternary is the whole logic. 3 function creations + 3 invocations for it.

**RPLACA** — nested redundant IIFEs (lines 6781-6792):
```javascript
return (function(){              // IIFE 1: no purpose
  return (function(){            // IIFE 2: also no purpose
    var TMP=v1590;
    TMP.$$jscl_car=v1591;
    return TMP;
  })();
})();
```

Two IIFEs for a simple assignment + return.

**EXPAND-DESTRUCTURING-BIND** — 41 function declarations, 51 IIFE invocations in a single 121-line function (lines 3697-3817). Maximum nesting depth of 6+ levels:

```javascript
return (function(){                      // Level 1
  return (function(v954,...){             // Level 2
    (function(v957){                      // Level 3
      (function(){                        // Level 4
        return (function(v959,v960){      // Level 5
          (function(){                    // Level 6: while loop body
            while (...) {
              (function(){                // Level 7: counter increment
                var v962=1;
                var v963=(function(){     // Level 8: addition IIFE!
                  // ...type checks for +1...
                  return x1+x2;
                })();
                return v957=v963;
              })();
            }
          })();
        })(...);
      })();
    })(0);
  })(...);
})();
```

Each layer adds ~50 bytes of syntax and a function call boundary. This function alone has **>2KB of pure wrapper overhead**.

### Impact from profiling

- `Builtin: CompileLazy` — **776 ticks (3.2%)** — V8 lazily compiling 7,239 IIFE micro-functions
- `Builtin: FastNewClosure` — **84 ticks (0.3%)** — allocating closure objects
- `Builtin: CallFunction_ReceiverIsNullOrUndefined` — **308 ticks (1.3%)** — function call dispatch
- Indirect cost: every function boundary prevents cross-function optimization

### What the fix looks like

ES6 block scoping eliminates IIFEs for variable scoping:

```javascript
// Current generated code:
(function(){
  var x = compute();
  return x + 1;
})()

// With ES6 block scoping:
{ let x = compute(); x + 1; }
```

---

## Hypothesis 5: Keyword Argument Parsing via N Linear Scans (MEDIUM IMPACT)

### What is it?

When a Lisp function takes keyword arguments (e.g., `&key test key from-end`), the compiler generates a separate `for` loop scanning the `arguments` array for **each** keyword parameter. A function with N keyword parameters does N+1 scans (N for keywords, 1 for unknown-keyword validation).

### Why does this cause performance issues?

The scan is O(args) per keyword, making the total O(N * args). For functions like `FIND` with 6 keyword parameters called with 12 arguments, that's 7 passes over a 12-element array.

### Concrete example: FIND with 6 keywords (lines 12209-12268)

The Lisp signature: `(defun find (item sequence &key from-end key start end test test-not))`

Generated code — 6 separate scans + 1 validation scan:

```javascript
l1284.fvalue=(function(){var FUNC=(function JSCL_USER_FIND(v3477,v3478){
  internals.checkArgsAtLeast(arguments.length,2);
  var v3479; var v3480; var v3481; var v3482; var v3484=l3.value;
  var v3483; var v3485=l3.value;
  var I;

  // SCAN 1: :FROM-END
  for (I=2;I<arguments.length;I+=2)
    if (arguments[I]===l1282.value) {v3478=arguments[I+1]; break;}
  if (I>=arguments.length) v3478=l3.value;

  // SCAN 2: :KEY
  for (I=2;I<arguments.length;I+=2)
    if (arguments[I]===l203.value) {v3479=arguments[I+1]; break;}
  if (I>=arguments.length) v3479=l3.value;

  // SCAN 3: :START
  for (I=2;I<arguments.length;I+=2)
    if (arguments[I]===l1262.value) {v3480=arguments[I+1]; break;}
  if (I>=arguments.length) v3480=0;

  // SCAN 4: :END
  for (I=2;I<arguments.length;I+=2)
    if (arguments[I]===l1263.value) {v3481=arguments[I+1]; break;}
  if (I>=arguments.length) v3481=l3.value;

  // SCAN 5: :TEST (with supplied-p variable)
  for (I=2;I<arguments.length;I+=2)
    if (arguments[I]===l204.value) {v3482=arguments[I+1]; v3484=l2.value; break;}
  if (I>=arguments.length) v3482=internals.symbolFunction(l12);

  // SCAN 6: :TEST-NOT (with supplied-p variable)
  for (I=2;I<arguments.length;I+=2)
    if (arguments[I]===l206.value) {v3483=arguments[I+1]; v3485=l2.value; break;}
  if (I>=arguments.length) v3483=internals.symbolFunction(l12);

  // SCAN 7: Validate no unknown keywords
  var START=2;
  if ((arguments.length-START)%2==1) throw 'Odd number of keyword arguments.';
  for (I=START;I<arguments.length;I+=2)
    if (arguments[I]!==l1282.value && arguments[I]!==l203.value &&
        arguments[I]!==l1262.value && arguments[I]!==l1263.value &&
        arguments[I]!==l204.value && arguments[I]!==l206.value)
      throw 'Unknown keyword argument '+arguments[I]['name'];
```

That's **7 loops** scanning the same array, all before the function body even starts.

### Impact

There are 553 keyword-argument loops across the codebase. Functions like `MEMBER`, `ASSOC`, `REMOVE`, `FIND`, `POSITION`, `COUNT`, `SUBSTITUTE` all take keywords and are called frequently during compilation. The V8 profiler shows `ASSOC` alone at 4.3% self-time (1,029 ticks) — partly due to its keyword overhead being invoked thousands of times during compilation's environment lookups.

### What a fix looks like

Single-pass parsing:
```javascript
var kw = {};
for (I=2; I<arguments.length; I+=2) kw[arguments[I].name] = arguments[I+1];
v3479 = kw['KEY'] !== undefined ? kw['KEY'] : l3.value;
v3480 = kw['START'] !== undefined ? kw['START'] : 0;
// ... etc
```

---

## Hypothesis 6: Redundant Arithmetic Type Checks (MEDIUM IMPACT)

### What is it?

The compiler's `variable-arity` macro (`compiler.lisp:1174-1197`) generates a `typeof x != 'number'` guard for **every** operand in every arithmetic operation, with no optimization for cases where the operand is obviously a number.

### Why does this cause performance issues?

**Constant operands are checked.** Adding 1 to a counter:

```lisp
(incf counter)   ; equivalent to (setq counter (+ counter 1))
```

Generates (from LIST-LENGTH, lines 7107-7114):
```javascript
(function(){
  var v1768 = 1;                                              // the constant 1
  var v1769 = (function(){
    var x1 = v1765;                                           // counter
    if (typeof x1 != 'number') internals.typeError(x1, l9);  // CHECK 1: is counter a number?
    var x2 = v1768;                                           // the constant 1
    if (typeof x2 != 'number') internals.typeError(x2, l9);  // CHECK 2: is 1 a number?!
    return x1 + x2;
  })();
  return v1765 = v1769;
})();
```

The literal `1` is **always** a number. This check can never fail. Yet it runs on **every iteration** of every loop that does arithmetic.

**The check count is enormous.** There are **1,548** `typeof x != 'number'` checks in the generated code. In a tight loop like LIST-LENGTH (counting list elements), these two type checks run once per element — for a 100-element list, that's 200 unnecessary typeof checks.

**The EVERY function** (lines 15967-15975) shows the same pattern — its loop counter increment has identical redundant checks:
```javascript
// Incrementing loop counter in EVERY:
(function(){
  var v4568 = 1;
  var v4569 = (function(){
    var x1 = v4563;                                            // loop counter
    if (typeof x1 != 'number') internals.typeError(x1, l9);   // always a number
    var x2 = v4568;                                            // literal 1
    if (typeof x2 != 'number') internals.typeError(x2, l9);   // obviously a number
    return x1 + x2;
  })();
  return v4563 = v4569;
})();
```

Note also that the simple `counter + 1` is wrapped in **two IIFEs** — one for the arithmetic and one for the assignment.

### Root cause in compiler.lisp

The `variable-arity-call` function (line 1174) unconditionally emits type checks:

```lisp
(defun variable-arity-call (args function)
  (let ((counter 0))
    (with-collector (fargs)
      (with-collector (prelude)
        (dolist (x args)
          (if (or (floatp x) (numberp x))    ;; only skips LITERAL numbers in source
              (collect-fargs x)
              (let ((v ...))
                (collect-fargs v)
                (collect-prelude `(var (,v ,(convert x))))
                (collect-prelude `(if (!= (typeof ,v) "number")  ;; ALWAYS emits check
                                      (call-internal "typeError" ,v ...))))))))))
```

It checks `(numberp x)` on the **source form**, but `x` is usually a variable name (symbol), not a literal number — so the check is always emitted. There's no type inference to know that `counter` is always numeric.

---

## Hypothesis 7: NIL Comparison Overhead (LOW-MEDIUM IMPACT)

### What is it?

NIL (false/empty list) is the most compared-against value in Lisp. In JSCL, it's accessed as `l3.value` — a property lookup on the symbol object stored in variable `l3`. There are **8,289** occurrences of `l3.value` in the generated code (vs 1,352 for `l2.value` / T).

### Why does this cause performance issues?

Every nil check is two operations:
1. **Property load**: read `.value` from the `l3` symbol object
2. **StrictEqual comparison**: `expr !== l3.value`

The `l3` object has a different hidden class than regular symbols (because of `$$jscl_car`/`$$jscl_cdr` additions), contributing to IC polymorphism at `.value` access sites.

In a typical list traversal:
```javascript
while (v235 !== l3.value) {    // l3.value loaded on EVERY iteration
  v236 = v235.$$jscl_car;
  v235 = v235.$$jscl_cdr;
}
```

A module-level `const NIL = l3.value;` would eliminate the repeated property load. Even better, using the JS `nil` variable directly (it exists in prelude.js line 137) would avoid the indirection entirely.

### Impact from profiling

- `Builtin: StrictEqual` — **493 ticks (2.0%)** — a significant portion from `!== l3.value` comparisons
- Multiple `JSCL_USER_NIL` functions appear in top profile entries (lines 1825, 25666, 9747, etc.)

---

## Hypothesis 8: Function Call Indirection (LOW-MEDIUM IMPACT)

### What is it?

When Lisp code calls a function through a variable (via `FUNCALL`, `MAPCAR`, `APPLY`, etc.), the compiler doesn't know if the value is a raw JavaScript function or a Lisp Symbol. It emits a runtime dispatch:

```javascript
var F = v4552;
return (typeof F === 'function' ? F : F.fvalue)(v4566);
```

This pattern occurs **436 times** in the generated code.

### Why does this cause performance issues?

1. The `typeof` check prevents V8 from specializing the call site
2. The `.fvalue` property access hits IC issues (Symbol shapes vary)
3. V8 can never inline through this dispatch since the callee varies
4. In hot loops like MAPCAR, EVERY, REDUCE, this check runs **per element**

Example from the EVERY inner loop (line 15960-15961):
```javascript
// Called once per element of the sequence:
if ((function(){
  var F = v4552;
  return (typeof F === 'function' ? F : F.fvalue)(v4566);  // dispatch per element
})() !== l3.value) l3.value;
```

If all function references were normalized to raw JS functions at the point of `#'func` or `SYMBOL-FUNCTION`, call sites could simply do `F(args)` without the type check.

---

## Hypothesis 9: VALID-JS-IDENTIFIER Hot Path in Code Generation (LOW-MEDIUM IMPACT)

### What is it?

During code generation, the compiler calls `VALID-JS-IDENTIFIER` on every symbol name to determine if it can be used directly as a JavaScript identifier or needs escaping. This function (lines 29720-29744) calls `EVERY` with a predicate that calls `ALPHANUMERICP` (which calls `ALPHA-CHAR-P` then `DIGIT-CHAR-P`) on each character.

### Why does this cause performance issues?

The call chain for checking **one character** of a symbol name:

```
VALID-JS-IDENTIFIER
  → EVERY (line 29723)
    → predicate function (line 29724-29729)
      → ALPHANUMERICP (line 29727)
        → ALPHA-CHAR-P (line 6246)
          → char_to_codepoint (JS helper)
          → codepoint range checks (Unicode tables)
        → DIGIT-CHAR-P (if alpha check fails)
          → char_to_codepoint
          → Unicode digit value lookup (linear scan of Unicode zero list)
      → MEMBER check against ('$' '_') (line 29726) if alphanumeric check fails
```

Each character thus involves **4-7 function calls**, each with `checkArgs`, IIFE wrappers, and nil comparisons.

The profiler shows `ALPHANUMERICP` at **640 ticks (2.7%)** — the 4th hottest JS function. The bottom-up profile confirms it's called almost entirely from `VALID-JS-IDENTIFIER`:
```
ALPHANUMERICP (640 ticks)
  └── called from EVERY inner loop (line 15995)
       └── called from VALID-JS-IDENTIFIER (line 29720)
```

A JavaScript regex `/^[a-zA-Z_$][a-zA-Z0-9_$]*$/` would check the entire string in one native call.

---

## Hypothesis 10: ASSOC in Compiler Environment Lookups (LOW-MEDIUM IMPACT)

### What is it?

The compiler maintains its lexical environment as **association lists** (alists). Every variable lookup, function lookup, block lookup, go-tag lookup, and compiler-macro check does a linear `ASSOC` scan.

From `compiler.lisp:75-80`:
```lisp
(def!struct lexenv
  variable         ; alist of variable bindings
  function         ; alist of function bindings
  block            ; alist of block bindings
  gotag            ; alist of go-tag bindings
  compiler-macro)  ; alist of compiler macros
```

`ASSOC` is the **#2 JavaScript hotspot** at **1,029 ticks (4.3%)**. Its implementation (lines 8248-8287) is itself not trivial — it has keyword argument parsing (3 scans), a while loop with function dispatch, and exception-based early return.

### Why does this cause performance issues?

As the compiler processes nested forms, environments grow. A deeply nested `let` with 20 bindings means every subsequent variable reference does a linear scan of 20+ entries. In compilation of complex functions (like the CLOS bootstrap), environments can be much larger.

The profiler's bottom-up view shows ASSOC is called from:
- `LOOKUP-IN-LEXENV` (line 30957) — **19 ticks** direct, but called from everywhere in the compiler
- `BINDING-NAME` (line 30688) — **161 ticks** — the comparator used inside ASSOC
- Environment extension functions

---

## V8 Optimization/Deoptimization Trace Analysis

Run with `node --trace-opt --trace-deopt` to observe TurboFan behavior across the full test suite.

### High-Level Numbers

| Metric | Count |
|--------|-------|
| Functions marked for TurboFan optimization | 1,309 |
| TurboFan compilations completed | 1,268 |
| **Deoptimization (bailout) events** | **265** |
| Dependency-based code invalidations | 15 |
| Total TurboFan compilation time | ~3,147 ms |

Of the 1,309 functions optimized, **918 are anonymous** (IIFEs / inner lambdas). These are the `(function(){...})()` wrappers generated by the compiler. V8 cannot share optimized code across identical IIFE patterns because each is a unique function object — so V8 compiles and optimizes each one independently.

Another 67 optimization events target functions named `JSCL_USER_NIL` — these are the anonymous inner lambdas the compiler names "NIL" (from implicit `BLOCK NIL` in `DEFUN`).

### Deoptimization Reasons

| Reason | Count | Meaning |
|--------|-------|---------|
| `wrong map` | 64 | Object had unexpected hidden class (shape) |
| `Insufficient type feedback for generic named access` | 52 | Property access on objects with too many shapes |
| `Insufficient type feedback for call` | 48 | Call site sees too many callee types |
| `(unknown)` / lazy deopt | 45 | Dependent code invalidated or cascading deopt |
| `not a Smi` | 25 | Expected small integer, got heap number or object |
| `Smi` | 7 | Expected object, got small integer |
| `Insufficient type feedback for binary operation` | 6 | Arithmetic on mixed types |
| `wrong call target` | 5 | Inlined call target changed |
| `Insufficient type feedback for generic keyed access` | 4 | Array/object index access with mixed types |
| `the array length changed` | 3 | Array mutated during optimized access |
| `Insufficient type feedback for compare operation` | 3 | Comparison on mixed types |
| `overflow` | 1 | Integer overflow |
| `lost precision or NaN` | 1 | Float precision issue |

### Key Insight: "wrong map" is the #1 Deopt Reason (64 events)

A "wrong map" deopt means V8 optimized a function assuming objects at a property access site would always have one hidden class (shape), but then encountered a different shape. This forces V8 to throw away the optimized code and fall back to the interpreter.

**Functions most affected by wrong-map deopts:**

| Function | wrong-map deopts | Opt cycles | Why |
|----------|-----------------|------------|-----|
| `LENGTH` | 4 | 6 | Called on lists (Cons), vectors (Array), strings (Array+stringp) — 3+ shapes |
| `EQUAL` | 4 | 5 | Compares Cons cells, symbols, numbers, strings — many shapes at each access |
| `CADR` | 2 | 3 | Accesses `$$jscl_car` on Cons vs nil (different maps) |
| `CHAR` | 1 | 4 | Accesses string array elements, sees Array vs Array+stringp |
| `VECTORP` | 1 | 3 | Tests object type, sees Symbol, Cons, Array shapes |
| `ARRAYP` | 1 | 1 | Same type-testing polymorphism |
| `FIND-SYMBOL` | 1 | 1 | Package symbol lookup across object shapes |
| `xstring` | 1 | 2 | Called on native strings AND lisp-string arrays |
| 37 anonymous fns | 37 | ~918 | IIFEs in polymorphic contexts |

### Case Study: LENGTH — The Optimize/Deopt/Re-optimize Cycle

`LENGTH` demonstrates the most severe deopt cycling. Its full lifecycle:

```
1. [optimize → TURBOFAN]  "hot and stable" — compiled in 3.2ms
2. [DEOPT: wrong map]     bytecode offset 16 — saw unexpected object shape
3. [re-optimize → TURBOFAN]  recompiled in 4.5ms (wider type assumptions)
4. [DEOPT: wrong map]     bytecode offset 61 — saw yet another shape
5. [re-optimize → TURBOFAN]  recompiled in 3.9ms
6. [DEOPT: wrong map]     bytecode offset 61 — still hitting new shapes
7. [re-optimize → TURBOFAN]  recompiled in 3.7ms
8. [DEOPT: wrong map]     bytecode offset 61
9. [re-optimize → TURBOFAN]  recompiled in 4.0ms
10. [DEOPT: Insufficient type feedback]  bytecode offset 201
11. [re-optimize → TURBOFAN]  recompiled in 4.4ms
    (finally stable)
```

**6 optimization attempts, 5 deoptimizations, ~24ms of wasted TurboFan compilation time — for a single function.**

This happens because `LENGTH` (line 11445-11452 of `dist/jscl.js`) dispatches on the argument type:
```javascript
function JSCL_USER_LENGTH(v3245) {
  return l112.fvalue(v3245) !== l3.value     // ARRAYP check
    ? l1195.fvalue(v3245) !== l3.value       //   has fill pointer?
      ? l1196.fvalue(v3245)                  //     → fill-pointer
      : v3245['length']                      //     → JS .length
    : l106.fvalue(v3245) !== l3.value        // LISTP check
      ? l1123.fvalue(v3245)                  //   → list-length (walk list)
      : l1277.fvalue(v3245);                 //   → error
}
```

Each time V8 optimizes it, it assumes `v3245` will be a specific type (e.g., Cons cell). Then a call comes with an Array, or a string-array, or a Symbol — and the optimized code is invalidated.

### Case Study: EQUAL — 5 Deopt Cycles

`EQUAL` gets optimized 5 times, deoptimized 4 times for "wrong map":

```
1. [optimize]  compiled in 7.2ms (large function)
2. [DEOPT: wrong map]  bytecode offset 16
3. [re-optimize]  compiled in 8.2ms
4. [DEOPT: wrong map]  bytecode offset 16  (same location!)
5. [re-optimize]  compiled in 3.8ms
6. [DEOPT: wrong map]  bytecode offset 16
7. [re-optimize]  compiled in 3.5ms
8. [DEOPT: wrong map]  bytecode offset 21  (different location)
9. [re-optimize]  compiled in 3.5ms (finally stable)
```

Total wasted: **~30ms of TurboFan compilation** just for `EQUAL`. The function compares any two Lisp objects — Cons cells, symbols, numbers, strings — so V8 can never settle on a monomorphic assumption for the first argument's shape.

### Case Study: JS-EXPR — Code Generator Hot Path with Cascading Deopts

`JS-EXPR` is the main code generation function. It gets optimized once, then suffers 1 "wrong map" deopt followed by **8 cascading lazy deopts** — all at the same bytecode offset (21), same deopt exit (60). This means V8 optimized the function, but dependent code changed, causing a cascade of invalidations as frames on the call stack are all deoptimized:

```
1. [optimize]  compiled in 4.4ms
2. [DEOPT: wrong map]  bytecode offset 21
3. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
4. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
5. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
6. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
7. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
8. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
9. [DEOPT: lazy (unknown)]  bytecode offset 21  ← cascading
10. [re-optimize]  compiled in 5.1ms
```

Since `JS-EXPR` is called recursively for every sub-expression during code generation, a single deopt at the top triggers lazy deopts for every active `JS-EXPR` frame on the stack. This is particularly harmful because it happens during the compilation phase (30.4s).

### Case Study: BlockNLX Constructor — Smi Deopt

The `internals.BlockNLX` constructor gets optimized, then deoptimized for reason "Smi":

```
1. [optimize]  compiled in 0.4ms
2. [DEOPT: Smi]  bytecode offset 8
3. [re-optimize]  compiled in 0.4ms (stable)
```

V8 expected the `value` argument to `BlockNLX(id, value, mv, name)` to be a heap object, but received a small integer (Smi). This happens because `RETURN-FROM` sometimes returns a number directly. V8 had to de-specialize and recompile.

### Case Study: JS-FORMAT — "array length changed"

`JS-FORMAT` (the code generation output function) gets deoptimized because the output array's length changes while being accessed:

```
1. [optimize]  compiled in 3.1ms
2. [DEOPT: the array length changed]  bytecode offset 141
3. [re-optimize]  compiled in 2.9ms (stable)
```

This happens because `JS-FORMAT` writes to a string-output-stream, which is backed by a JS array with a fill pointer. When the array needs to grow (via `vector-push-extend`), V8's assumption about the array length is violated.

### "not a Smi" Deopts — Numeric Type Confusion

25 functions deopt because V8 expected a small integer (Smi) but got a heap number or object. This hits arithmetic functions hard:

| Function | What happens |
|----------|-------------|
| `ZEROP` | Comparison with 0 — sometimes gets floats |
| `MINUSP` | Comparison with 0 — mixed int/float |
| `REM` | Remainder operation — mixed types |
| `INTEGER-TO-STRING` | Number conversion — mixed int/float |
| `DIGIT-CHAR` | Character code lookup — large codepoints exceed Smi |
| `handled_division` | Division result may not be Smi |
| `Bitwise_ash_L` | Shift result may overflow Smi range |
| 16 anonymous functions | Arithmetic in IIFEs |

This connects directly to **Hypothesis 6** (redundant type checks). The compiler always emits `typeof x != 'number'` guards, but doesn't distinguish between integer and float paths. V8 initially optimizes for Smi (fast integer path), then gets a heap number and deopts.

### "Insufficient type feedback for call" — 48 Events

These occur when V8 tries to inline a function call but the call site sees too many different callees. This is caused by:

1. **Function call indirection** (`typeof F==='function'?F:F.fvalue`) — 436 sites where V8 sees multiple call targets
2. **FUNCALL/APPLY patterns** — the callee varies per invocation
3. **Higher-order functions** (MAPCAR, EVERY, REDUCE) — the predicate/function argument differs each time

V8 can't inline through these megamorphic call sites, forcing expensive indirect calls.

### Total Optimization Overhead

V8 spent **~3,147 ms** compiling 1,268 TurboFan optimizations. Given that 265 of these were subsequently deoptimized (requiring recompilation), roughly **20% of TurboFan compilation effort was wasted** on code that was immediately invalidated.

The biggest compilation cost: anonymous functions (IIFEs) account for 918 of 1,268 optimizations — each one compiled independently even when they contain identical code patterns.

---

## Impact Summary

| # | Hypothesis | Profile Evidence | Trace Evidence | Impact | Fix Effort |
|---|-----------|-----------------|----------------|--------|------------|
| 1 | String-as-array representation | ArrayJoin 1.2%, RegExpSplit, reader char ops | xstring deopt (wrong map), JS-FORMAT deopt (array length changed) | HIGH | HIGH |
| 2 | Exceptions for local control flow | CompileLazy 3.2%, 194 try/catch | BlockNLX Smi deopt, try/catch prevents TurboFan optimization | HIGH | MEDIUM |
| 3 | Megamorphic IC thrashing | LoadIC **13.4%**, KeyedHasIC 1.9%, StoreIC 1.4% | **64 wrong-map deopts**, LENGTH 6x reopt, EQUAL 5x reopt | HIGH | HIGH |
| 4 | Pervasive IIFE wrapping | CompileLazy 3.2%, 7,239 IIFEs | 918 anonymous functions optimized independently, ~3.1s compile | MEDIUM | MEDIUM |
| 5 | N-scan keyword argument parsing | 553 loops, ASSOC 4.3% | ASSOC deopt (wrong call target) | MEDIUM | LOW |
| 6 | Redundant arithmetic type checks | 1,548 typeof guards | 25 "not a Smi" deopts, 6 binary-op feedback deopts | MEDIUM | MEDIUM |
| 7 | NIL comparison overhead | StrictEqual 2.0%, 8,289 refs | 52 "insufficient type feedback for named access" deopts | LOW-MED | LOW |
| 8 | Function call indirection | 436 typeof dispatches in hot loops | **48 "insufficient type feedback for call"** deopts | LOW-MED | MEDIUM |
| 9 | VALID-JS-IDENTIFIER hot path | ALPHANUMERICP **2.7%** | VALID-JS-IDENTIFIER deopt (insufficient call feedback) | LOW-MED | LOW |
| 10 | ASSOC in compiler environments | ASSOC **4.3%** (#2 JS hotspot) | Dependency invalidation of BINDING-NAME, LEXENV-VARIABLE | LOW-MED | MEDIUM |

## Recommendations (Highest Impact, Ordered)

1. **Replace string-as-array with native JS strings** + surrogate-aware indexing only when needed
2. **Use plain `return` for local BLOCK/RETURN-FROM** instead of exceptions
3. **Replace IIFEs with ES6 block scoping** (`let`/`const` + `{ }`)
4. **Ensure consistent object shapes** — don't add properties to `nil` that other Symbols lack
5. **Implement VALID-JS-IDENTIFIER via native regex** instead of Lisp character iteration
6. **Single-pass keyword argument parsing** instead of N linear scans
7. **Skip type checks for constant numeric operands** in arithmetic
8. **Cache NIL as a module-level constant** instead of `l3.value` property access
9. **Normalize function references** to raw JS functions so call sites don't need typeof dispatch
10. **Use hash tables for compiler environments** instead of association lists
