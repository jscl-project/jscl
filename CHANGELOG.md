# Change Log
All notable changes to JSCL will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

### Fixed

## [0.6.1] - 2018-05-07

### Added
- This CHANGELOG.md file
- We have a logo!
- Run `text/x-common-lisp` scripts #289
- Experimental service worker-based synchronicity
- Fix SYMBOL-FUNCTION and (SETF SYMBOL-FUNCTION) (98e2f0d)
- Basic support for arrays with fill-pointers (c8af504)
- `defpackage` supports `:export` #288
- `format` directive `~C` #303
- Improve support for symbol property list
- Add `(SETF FIRST)` and `(SETF REST)` (e122dc5)
- Make the build reproducible (58beddf)
- Expose `jscl.evaluateString` from the jscl module #265

### Fixed
- `floor` returns multiple values #301
- Documentation string and declaration parsing (0234901)
- `reduce` for sequences of length 1 #261
- `(SETF GETHASH)` #307
- Many minor fixes

## [0.5.1] - 2016-11-06
### Added
- Implement the [LOOP](https://github.com/jscl-project/jscl/pull/253) macro

[Unreleased]: https://github.com/jscl-project/jscl/compare/v0.6.1...HEAD
[0.6.1]: https://github.com/jscl-project/jscl/compare/v0.5.1...v0.6.1
[0.5.1]: https://github.com/jscl-project/jscl/compare/v0.4.0...v0.5.1
