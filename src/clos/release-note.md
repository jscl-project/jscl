# JSCL CLOS release v1.0 (13-OCT-2018)

The implementation is based on a subset of CLOS known as CLOSETTE. 

Closette is an implementation of a subset of CLOS with a metaobject protocol as described in the book
- **Gregor Kiczales, Jim des Rivieres, and Daniel G. Bobrow, "The
   Art of the Metaobject Protocol", MIT Press, 1991. 335 pages.
   ISBN 0-262-61074-4**

CLOSETTE original code:
-  http://www.cs.cmu.edu/afs/cs/project/ai-repository/ai/lang/lisp/oop/clos/closette/closette.tgz


## Restrictions

**No class redefinitions**

**No forward-referenced superclasses**

**Explicit generic function defenition** 
- The release requires that a generic functions be explicitly introduced with `defgeneric` form before any methods are defined on it.

**Standard method-combination only**  
-`primary` 
-`before` 
-`after` 

**No eql specializers**

**No slots with :class allocations**

**Types and classes not fully integrated** 

## Modification original

Source code is in `./closette` subdirectory.

Original file `./closette/closette.lisp` has been divided into parts:
- `kludges.lisp` (from closette.lisp lines 116-154)
- `std-object.lisp` (from closette.lisp lines 155-728)
- `std-generic.lisp` (from closette.lisp lines 729-918)
- `std-method.lisp` (from closette.lisp lines 919-1316)
- `bootstrap.lisp` (from closette.lisp lines 1317-1403)
- `macros.lisp` (see notes inside)
- `tools.lisp` (see notes inside. Source code is in ./closette/closette-test.lisp)
- `methods.lisp` (from closette.lisp lines 919-1316)

All source code modifications (marked with tag `mvk`) are associated with:
- features of JSCL compilation
- performance generic functions and some standard functions

2019, Vladimir Mezentsev, @vlad-km
 
