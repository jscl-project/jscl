# Change Log
All notable changes to JSCL will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

- Deno runtime support. [#408](https://github.com/jscl-project/jscl/pull/408)
- Full `format` implementation ported from CMUCL. [f1d6c4b](https://github.com/jscl-project/jscl/commit/f1d6c4b)
- Multi-dimensional arrays. [5a4c175](https://github.com/jscl-project/jscl/commit/5a4c175)
- `coerce` function. [254c3bd](https://github.com/jscl-project/jscl/commit/254c3bd)
- `equalp` function. [b5e16f6](https://github.com/jscl-project/jscl/commit/b5e16f6)
- Compiler macros via `define-compiler-macro`. [a003b35](https://github.com/jscl-project/jscl/commit/a003b35)
- `compile-file` and `compile-application` available at runtime. [312e407](https://github.com/jscl-project/jscl/commit/312e407)
- `defstruct` now supports `:print-function` and docstrings. [#559](https://github.com/jscl-project/jscl/issues/559)
- New sequence functions: `delete`, `delete-if`, `delete-if-not`, `delete-duplicates`, `nsubstitute`, `nsubstitute-if`, `nsubstitute-if-not`, `nunion`, `nintersection`, `replace`. [d78dc62](https://github.com/jscl-project/jscl/commit/d78dc62), [47deb25](https://github.com/jscl-project/jscl/commit/47deb25)
- New package functions: `shadow`, `rename-package`, `shadowing-import`, `unintern`, `unexport`, `package-used-by-list`. [b8ec8cd](https://github.com/jscl-project/jscl/commit/b8ec8cd), [0097766](https://github.com/jscl-project/jscl/commit/0097766)
- Package nicknames support. [8550aec](https://github.com/jscl-project/jscl/commit/8550aec)
- `rotatef`, `shiftf`, `psetf`, and `(setf values)`. [61b3dc4](https://github.com/jscl-project/jscl/commit/61b3dc4)
- `define-modify-macro`. [51e9552](https://github.com/jscl-project/jscl/commit/51e9552)
- `read-line` function. [9d8390e](https://github.com/jscl-project/jscl/commit/9d8390e)
- `fresh-line` function. [852ced1](https://github.com/jscl-project/jscl/commit/852ced1)
- `copy-symbol`, `gentemp`, `svref`, `prog*`, `row-major-aref`. [692444f](https://github.com/jscl-project/jscl/commit/692444f)
- `concatenate` function. [#432](https://github.com/jscl-project/jscl/pull/432)
- `log` function. [4d7e110](https://github.com/jscl-project/jscl/commit/4d7e110)
- `locally` special form. [9333c11](https://github.com/jscl-project/jscl/commit/9333c11)
- `&environment` parameter support in macros. [e69bca2](https://github.com/jscl-project/jscl/commit/e69bca2)
- Basic bit array support. [e5fdd31](https://github.com/jscl-project/jscl/commit/e5fdd31)
- `with-standard-io-syntax`. [caee919](https://github.com/jscl-project/jscl/commit/caee919)
- `:method` option in `defgeneric`. [ae7783d](https://github.com/jscl-project/jscl/commit/ae7783d)
- `*error-output*` and `*trace-output*` streams. [9d8390e](https://github.com/jscl-project/jscl/commit/9d8390e)
- ANSI-style condition hierarchy. [81cbef3](https://github.com/jscl-project/jscl/commit/81cbef3)
- Stack traces on errors in REPLs. [989010a](https://github.com/jscl-project/jscl/commit/989010a)
- Numbers can now be used as hash table keys. [#431](https://github.com/jscl-project/jscl/pull/431)
- `assert` macro. [efcc7af](https://github.com/jscl-project/jscl/commit/efcc7af)

### Fixed

- Printer now handles JavaScript `null` and `undefined` values correctly. [44bd5b0](https://github.com/jscl-project/jscl/commit/44bd5b0), [c9d5304](https://github.com/jscl-project/jscl/commit/c9d5304)
- Array printer works correctly with fill pointers. [1fdfe33](https://github.com/jscl-project/jscl/commit/1fdfe33)
- `destructuring-bind` handles dotted lists and `&key` correctly. [#493](https://github.com/jscl-project/jscl/issues/493), [c47db15](https://github.com/jscl-project/jscl/commit/c47db15)
- `defmacro` `&whole` now binds the complete form. [#517](https://github.com/jscl-project/jscl/issues/517)
- `typep` bug fix. [#514](https://github.com/jscl-project/jscl/issues/514)
- `&allow-other-keys` handling. [3da16dd](https://github.com/jscl-project/jscl/commit/3da16dd)
- `(setf getf)` now works correctly. [c03d583](https://github.com/jscl-project/jscl/commit/c03d583)
- `reduce` with `:key` argument. [#502](https://github.com/jscl-project/jscl/issues/502)
- `vector-push-extend` maintains array dimensions correctly. [#488](https://github.com/jscl-project/jscl/issues/488)
- Multi-argument numeric comparisons. [218fa27](https://github.com/jscl-project/jscl/commit/218fa27)
- Synchronous XHR timeout issue. [#557](https://github.com/jscl-project/jscl/issues/557)
- `special-operator-p` now works correctly. [#532](https://github.com/jscl-project/jscl/issues/532)
- Backquote on dotted pairs. [#492](https://github.com/jscl-project/jscl/issues/492)
- `*package*` is now bound during `load`. [#258](https://github.com/jscl-project/jscl/issues/258)
- Various stream and REPL fixes.

## [0.8.2] - 2021-05-09

### Added

- `describe` is implemented on top of CLOS now. [#343](https://github.com/jscl-project/jscl/pull/343)
- `apropos` and `apropos-list` support regular expressions. [#343](https://github.com/jscl-project/jscl/pull/343)
- Basic `load` is supported in browser and node environments [#343](https://github.com/jscl-project/jscl/pull/343)
- Improved support for `defstruct` https://github.com/jscl-project/jscl/pull/393
- Improved support for types and conditions https://github.com/jscl-project/jscl/pull/390
- Added 32bit bitwise functions https://github.com/jscl-project/jscl/pull/379
- Support for `#B`, `#O`, `#X` macro reader characters https://github.com/jscl-project/jscl/pull/357

### Fixed

- Handle files with multi-byte character encodings [#348](https://github.com/jscl-project/jscl/pull/348)

## [0.7.0] - 2018-11-27

### Added

- CLOS support and improved compliance (by @vlad-km)
  [#338](https://github.com/jscl-project/jscl/pull/338)
  [#337](https://github.com/jscl-project/jscl/pull/337)
  [#334](https://github.com/jscl-project/jscl/pull/334)

### Fixed
- Infinite loop in the experimental service-worker REPL on EOF [#318](https://github.com/jscl-project/jscl/issues/318)


## [0.6.1] - 2018-05-07

### Added
- This CHANGELOG.md file
- We have a logo!
- Run `text/x-common-lisp` scripts [#289](https://github.com/jscl-project/jscl/pull/289)
- Experimental service worker-based synchronicity
- Fix `SYMBOL-FUNCTION` and `(SETF SYMBOL-FUNCTION)` [98e2f0d](https://github.com/jscl-project/jscl/commit/4f44bd131fc1bf7f32ce47578b336f6349d0bc5f)
- Basic support for arrays with fill-pointers [c8af504](https://github.com/jscl-project/jscl/commit/c8af5049194550624202b58374ed0c3c907ce2a7)
- `defpackage` supports `:export` [#288](https://github.com/jscl-project/jscl/issues/288)
- `format` directive `~C` [#303](https://github.com/jscl-project/jscl/issues/303)
- Improve support for symbol property list
- Add `(SETF FIRST)` and `(SETF REST)` [e122dc5](https://github.com/jscl-project/jscl/commit/e122dc5efc29b3ebfe3606d18976dff2777414c6)
- Make the build reproducible [58beddf](https://github.com/jscl-project/jscl/commit/58beddfae32ca5f75d6568a3ebcf23195f69fe52)
- Expose `jscl.evaluateString` from the jscl module [#265](https://github.com/jscl-project/jscl/issues/265)

### Fixed
- `floor` returns multiple values [#301](https://github.com/jscl-project/jscl/issues/301)
- Documentation string and declaration parsing [0234901](https://github.com/jscl-project/jscl/commit/0234901c953c5651616609dc49254866b503befd)
- `reduce` for sequences of length 1 [#261](https://github.com/jscl-project/jscl/issues/261)
- `(SETF GETHASH)` [#307](https://github.com/jscl-project/jscl/issues/307)
- Many minor fixes


## [0.5.1] - 2016-11-06
### Added
- Implement the [LOOP](https://github.com/jscl-project/jscl/pull/253) macro

[Unreleased]: https://github.com/jscl-project/jscl/compare/v0.8.2...HEAD
[0.8.2]: https://github.com/jscl-project/jscl/compare/v0.7.0...v0.8.2
[0.7.0]: https://github.com/jscl-project/jscl/compare/v0.6.1...v0.7.0
[0.6.1]: https://github.com/jscl-project/jscl/compare/v0.5.1...v0.6.1
[0.5.1]: https://github.com/jscl-project/jscl/compare/v0.4.0...v0.5.1
