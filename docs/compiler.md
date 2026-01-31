# Compiler Notes

## Multiple Values

JSCL implements Common Lisp multiple values via a side channel: the
global variable `internals._mv`.

### How it works

`_mv` has no meaningful value at an arbitrary point in the program.
Any Lisp function call can set it as a side effect, and nothing clears
it automatically. Its value is only meaningful inside a specific
**clear–call–read** window arranged by the caller:

1. **Clear**: the caller sets `_mv = null`.
2. **Call**: the caller invokes the function.
3. **Read**: immediately after the call returns, the caller reads
   `_mv`.

If the called function used `internals.values(v1, v2, ...)`, then
`_mv` holds the full values array. If it returned normally without
calling `values`, `_mv` is still `null` from step 1, which tells the
caller there is only a primary value.

The guarantee only holds within this window. Outside of it, `_mv` is
stale and must not be read.

Clearing is the caller's responsibility rather than something every
function does on entry. A callee that returns a single value does not
touch `_mv` at all. If the callee were responsible for clearing, every
function — including the vast majority that never use `values` — would
need an extra `_mv = null` on entry. Making it the caller's job means
only callers in a multiple-value context pay the cost.

### The callee side

A function that wants to return multiple values calls
`internals.values(v1, v2, ...)`. This stores the array `[v1, v2,
...]` in `_mv` and returns the primary value. A function that returns
a single value simply returns it — it does not need to clear `_mv`,
because that is the caller's responsibility.

### The caller side: `*multiple-value-p*`

The compiler variable `*multiple-value-p*` tracks whether the current
form's multiple values are observable by its caller. When false, the
compiler emits a plain call and nobody reads `_mv`. When true, the
compiler must arrange the clear–call–read window described above.

### Runtime helpers

The compiler never inlines `_mv = null` directly. Instead, two
runtime helpers in `prelude.js` encapsulate the clear–call–read
protocol. Every compilation form that cares about multiple values
uses one of these two helpers (the sole exception is `js-eval`,
which has its own special handling).

#### `mvcall(fn, ...args)` — call and discard `_mv`

```javascript
internals.mvcall = function(fn, ...args) {
  internals._mv = null;
  return fn(...args);
};
```

Clears `_mv`, calls `fn` with the given arguments, and returns the
primary value. The caller does **not** read `_mv` afterward — it is
left in whatever state the callee set it to, which the caller's own
caller may read.

This is used when the compiled form is itself a function call whose
multiple values (if any) should propagate to the enclosing context:
`compile-funcall`, the `funcall` builtin, `apply` (in
multiple-value context), and the final dispatch in
`multiple-value-call`.

The critical constraint is **when** the clear happens relative to
argument evaluation. In JavaScript, arguments to a function call are
fully evaluated before the function body executes. If any argument
expression calls a Lisp function that happens to use `values`
internally, it will overwrite `_mv` as a side effect. Because
`mvcall` is itself a function call, `fn` and all `args` are
evaluated first by JavaScript's normal evaluation order, and the
clear inside `mvcall` runs only after that — exactly when we need
it.

Compiler example (`compile-funcall`):

```lisp
(if *multiple-value-p*
    `(call-internal |mvcall| ,fn-expr ,@arglist)
    `(call ,fn-expr ,@arglist))
```

#### `withMV(fn)` — call and capture `_mv`

```javascript
internals.withMV = function(fn) {
  internals._mv = null;
  var result = fn();
  return { result, mv: internals._mv };
};
```

Clears `_mv`, calls a thunk, and returns an object
`{result, mv}` where `mv` is either `null` (single value) or
the values array set by `values`. This captures the multiple-value
state so the caller can inspect or save it.

This is used when the compiler needs to **observe** the secondary
values rather than just propagate them.
