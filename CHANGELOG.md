# Change Log
All notable changes to JSCL will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

- `Deno` support. [#408](https://github.com/jscl-project/jscl/pull/408)

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
