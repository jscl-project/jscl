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

---

## Hypotheses: Main Inefficiencies in Compiler-Generated Code

### Hypothesis 1: Strings Represented as Arrays (HIGH IMPACT)

**Evidence**: `ArrayPrototypeJoin` at 1.2% self-time; `make_lisp_string` called 3,864 times in generated code; `RegExpSplit` visible in profile.

**Problem**: JSCL represents Lisp strings as JavaScript arrays of single-character strings (for Unicode surrogate pair support):

```javascript
internals.make_lisp_string = function (string) {
  var array = codepoints(string);   // splits via regex
  array.stringp = 1;
  return array;
};
```

Every string literal is split into an array via a regex (`string.split(/(?![\udc00-\udfff])/)`), and every time the string is needed as a JS string, `.join("")` is called. This means:

- **O(n) allocation** for every string literal creation
- **O(n) reconstruction** every time the string is converted back via `xstring()`/`.join("")`
- String comparisons, concatenation, and output all pay this tax
- The compiler generates 3,864 `make_lisp_string` calls for constant strings alone

**Potential fix**: Use native JS strings directly, with surrogate-pair-aware indexing only when `CHAR`/`SCHAR` is called with an index. Most string operations (comparison, output, concatenation) don't need character-level access.

---

### Hypothesis 2: Excessive Use of Exceptions for Normal Control Flow (HIGH IMPACT)

**Evidence**: `BlockNLX` appears 439 times in generated code; 246 `throw new internals.BlockNLX`; 194 try/catch blocks; `withMV` called 780 times (many in exception paths).

**Problem**: The compiler uses JavaScript exceptions (`try`/`catch`/`throw`) to implement `BLOCK`/`RETURN-FROM`, which is used pervasively in Common Lisp (every `DEFUN` creates an implicit block). The generated pattern:

```javascript
(function(){try{var v2322=[];
  // ... body ...
  throw new internals.BlockNLX(v2322, result, mv, 'NIL');
  // ...
}catch(CF){if(CF instanceof internals.BlockNLX && CF.id==v2322) return CF.value;
 else throw CF;}})();
```

V8 de-optimizes functions containing try/catch. Every `RETURN-FROM` triggers exception creation, throwing, catching, and `instanceof` checking. Even local returns that could be simple `return` statements use this mechanism when in multiple-value context.

**Potential fix**: For blocks where all `RETURN-FROM` calls are in the lexically visible scope (no closures escape), generate plain JavaScript `return` statements instead of exceptions. Only use exception-based NLX for truly non-local exits.

---

### Hypothesis 3: Megamorphic Property Access / LoadIC Thrashing (HIGH IMPACT)

**Evidence**: `LoadIC` at 13.4% — the single largest hotspot; `KeyedHasIC_Megamorphic` at 1.9%; `StoreIC` at 1.4%.

**Problem**: V8's inline caches (ICs) work by caching the "shape" (hidden class) of objects at each property access site. When many different shapes flow through the same code path, the IC becomes "megamorphic" and falls back to slow dictionary lookup.

JSCL generates code where:
- Symbols are accessed via `.fvalue`, `.value`, `.name` on `internals.Symbol` objects
- But `nil` has a frozen shape (with `$$jscl_car`/`$$jscl_cdr` defined), `t` has a different shape, and regular symbols have yet another
- The `$$jscl_car`/`$$jscl_cdr` properties are defined on `Object.prototype` as getters (for type-error-on-non-cons), overridden on `Cons.prototype` and `nil`
- Lisp strings are arrays with an extra `.stringp` property, changing their hidden class
- This causes property access inline caches to see multiple shapes and go megamorphic

**Potential fix**: Ensure all Symbols, Cons cells, and string objects share consistent shapes. Avoid monkey-patching `Object.prototype`. Use a dedicated cons-type-check instead of relying on prototype getters.

---

### Hypothesis 4: Pervasive IIFE (Immediately Invoked Function Expression) Pattern (MEDIUM IMPACT)

**Evidence**: 7,239 `(function(){` occurrences in generated code; `CompileLazy` at 3.2%; `FastNewClosure` at 0.3%.

**Problem**: The compiler wraps many expressions in IIFEs (`selfcall` macro):

```javascript
(function(){
  // ... body ...
})()
```

This is used for: `BLOCK`, `LET`, `LET*`, `PROGN` in expression position, `RETURN-FROM`, and many other constructs. Each IIFE:
- Creates a new closure object (GC pressure)
- Requires V8 to compile/optimize a separate function
- Prevents many V8 optimizations that work within a single function scope (e.g., escape analysis, register allocation across the boundary)
- `CompileLazy` at 3.2% shows V8 spending significant time lazily compiling these micro-functions

**Potential fix**: Use JavaScript block-scoping (`let`/`const` with `{ }` blocks) instead of IIFEs where possible. Many `selfcall` uses are just for variable scoping — ES6 `let` achieves this without a function boundary.

---

### Hypothesis 5: Keyword Argument Parsing via Linear Scan (MEDIUM IMPACT)

**Evidence**: 553 keyword-argument loops in generated code; `ASSOC` at 4.3% self-time (though not all from keyword parsing).

**Problem**: Keyword arguments are parsed at runtime by linearly scanning the `arguments` object:

```javascript
for (I=2; I<arguments.length; I+=2)
  if (arguments[I] === l203.value) { v2314=arguments[I+1]; break; }
if (I >= arguments.length) v2314 = l3.value;
```

Each keyword parameter requires a separate scan of the arguments array. A function with 5 keyword arguments does 5 linear scans. The "unknown keyword" check is yet another scan. Combined with 553 such loops, this adds up.

**Potential fix**: Parse keyword arguments in a single pass, building a map, then looking up each keyword. Or use a JavaScript object/Map for keyword arguments.

---

### Hypothesis 6: Runtime Type-Checking for Every Arithmetic Operation (MEDIUM IMPACT)

**Evidence**: 1,548 occurrences of `typeof x != 'number'` type checks in generated code.

**Problem**: Every arithmetic operation generates runtime type guards:

```javascript
var x1 = v1765;
if (typeof x1 != 'number') internals.typeError(x1, l9);
var x2 = v1768;
if (typeof x2 != 'number') internals.typeError(x2, l9);
return x1 + x2;
```

Even a simple `(+ counter 1)` where both operands are obviously numbers generates these checks. The `variable-arity` macro in `compiler.lisp:1174` always emits type checks, with no optimization for known-numeric values.

**Potential fix**:
- Add type inference/propagation so known-numeric expressions skip type checks
- At minimum, constant integers (like `1`, `0`) should not be type-checked
- Consider a `(declare (type fixnum x))` optimization path

---

### Hypothesis 7: NIL Comparison Overhead (LOW-MEDIUM IMPACT)

**Evidence**: 8,289 occurrences of `l3.value` in generated code; multiple `JSCL_USER_NIL` functions appear in top profile.

**Problem**: NIL is accessed as `l3.value` (a property lookup on a symbol object) rather than a direct variable reference. Every `null`/`nil` check in Lisp becomes `expr !== l3.value`, requiring:
1. A property load on `l3` (the NIL symbol)
2. A `StrictEqual` comparison

This is a very hot path since nearly every conditional in Lisp checks against NIL.

**Potential fix**: Cache `l3.value` in a local variable `nil` at the top of each function, or compile NIL references to a module-level constant `const NIL = l3.value;`.

---

### Hypothesis 8: Function Call Indirection (LOW-MEDIUM IMPACT)

**Evidence**: 436 occurrences of `typeof F==='function'?F:F.fvalue` pattern.

**Problem**: When calling a function passed as an argument (e.g., via `FUNCALL`, `MAPCAR`), the compiler doesn't know if it's a raw JS function or a Lisp symbol. It emits:

```javascript
var F = v305;
return (typeof F === 'function' ? F : F.fvalue)(args...);
```

This conditional on every call site prevents V8 from inlining and adds branch prediction overhead.

**Potential fix**: Normalize all function references to raw JS functions at the point of `SYMBOL-FUNCTION` / `#'` extraction, so call sites can always do `F(args)` directly.

---

### Hypothesis 9: `VALID-JS-IDENTIFIER` Hot Path in Code Generation (LOW-MEDIUM IMPACT)

**Evidence**: `ALPHANUMERICP` at 2.7% self-time; bottom-up analysis shows it's called from `VALID-JS-IDENTIFIER` → `EVERY` → character-by-character checks.

**Problem**: During code generation, the compiler checks every symbol name to see if it's a valid JavaScript identifier by calling `VALID-JS-IDENTIFIER`, which calls `EVERY` with `ALPHANUMERICP` over each character. Since this is written in Lisp (compiled to JS), each character check involves:
1. Array indexing into a Lisp string (which is an array)
2. `CHAR` extraction
3. `ALPHANUMERICP` call (which calls `ALPHA-CHAR-P` then `DIGIT-CHAR-P`)
4. Each of those does Unicode codepoint conversion

This runs on every symbol name during compilation.

**Potential fix**: Implement `VALID-JS-IDENTIFIER` as a built-in using a JavaScript regex test (`/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(str)`), which would be orders of magnitude faster.

---

### Hypothesis 10: `ASSOC` in Compiler Environment Lookups (LOW-MEDIUM IMPACT)

**Evidence**: `ASSOC` at 4.3% self-time (1,029 ticks — the #2 hotspot in JS code); `BINDING-NAME` at 0.7%.

**Problem**: The compiler's lexical environment is an association list. Every variable lookup, function lookup, macro expansion check, and binding search does a linear `ASSOC` scan. As environments grow during compilation of larger forms, these lookups get progressively slower.

**Potential fix**: Use hash tables for the compiler's lexical environment instead of alists, especially for the variable and function namespaces.

---

## Impact Summary

| # | Hypothesis | Impact | Effort |
|---|-----------|--------|--------|
| 1 | String-as-array representation | HIGH | HIGH |
| 2 | Exceptions for normal control flow | HIGH | MEDIUM |
| 3 | Megamorphic IC thrashing | HIGH | HIGH |
| 4 | Pervasive IIFE wrapping | MEDIUM | MEDIUM |
| 5 | Linear keyword argument scanning | MEDIUM | LOW |
| 6 | Redundant arithmetic type checks | MEDIUM | MEDIUM |
| 7 | NIL comparison overhead | LOW-MED | LOW |
| 8 | Function call indirection | LOW-MED | MEDIUM |
| 9 | VALID-JS-IDENTIFIER hot path | LOW-MED | LOW |
| 10 | ASSOC in compiler environments | LOW-MED | MEDIUM |

## Recommendations (Highest Impact, Ordered)

1. **Replace string-as-array with native JS strings** + surrogate-aware indexing only when needed
2. **Use plain `return` for local BLOCK/RETURN-FROM** instead of exceptions
3. **Replace IIFEs with ES6 block scoping** (`let`/`const` + `{ }`)
4. **Cache NIL as a local constant** in each generated function
5. **Implement VALID-JS-IDENTIFIER via native regex** instead of Lisp character iteration
6. **Single-pass keyword argument parsing** instead of N linear scans
7. **Skip type checks for constant numeric operands** in arithmetic
