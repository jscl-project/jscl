;;;; compat-misc.lisp — Create  some definitions to run  JSCL code under
;;;; an ANSI CL. Misc. functions that aren't built in.

;; Copyright © 2012, 2013 David Vazquez
;;; Copyright © 2012 Raimon Grau

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.

(in-package #-jscl :jscl #+jscl :jscl/impl)

(defmacro while (condition &body body)
  "Continue to repeatedly execute BODY while CONDITION is true."
  `(do ()
       ((not ,condition))
     ,@body))

(defconstant +most-positive-fixnum+ (1- (expt 2 53)))
(defconstant +most-negative-fixnum+ (- +most-positive-fixnum+))

(defun aset (array idx value)
  "Set the index IDX of the vector ARRAY to VALUE."
  (setf (aref array idx) value))

(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun concat (&rest strs)
    "Shorthand for `CONCATENATE' 'STRING"
    (apply #'concatenate 'string strs)))

(defun /debug (message)
  "Print a trace message."
  (format *trace-output* "~&DEBUG: ~a" message))


;;; Defined later, in read.lisp
(declaim (ftype (function (character) t) terminalp)
         (ftype (function (stream (function (character) t)) t) read-until))

(defun read-#j ()
  "Establish  #J reader  macros  for  the current  file.  Does NOT  save
the readtable. See `WITH-SHARP-J' for details."
  (set-dispatch-macro-character #\# #\J #'j-reader))

(defmacro with-sharp-j (&body body)
  "Install  a  readtable  which  provides   the  #J  macro  for  reading
JavaScript forms.

In particular,  #J:a:b:c is  equivalent to (JSCL/FFI:OGET*  *ROOT* \"a\"
\"b\"  \"c\"),   which  in   turn  is   equivalent  to   the  JavaScript
window[\"a\"][\"b\"][\"c\"]  or (when  the keys  are valid  identifiers)
also the same as window.a.b.c and a.b.c.

Note  that the  #J: sequence  is \emph{case-sensitive}  and begins  with
a colon  (:) after  the #J.  Each :-delimited substring  is the  name of
a key on the preceding object in the sequence.

TODO: An equivalent form where the  reference object does not have to be
*ROOT*  or where  identifiers  may  not have  to  be  strings. There  is
a discussion in http://github.com/jscl-project/jscl/Issues/

An experimental version is incorporated here. In this notation:

Begin with “#J”. Follow this with :  to refer to the root object (normally
“window”). Follow it instead with @ to NOT refer to the root object, but
instead,  name   an  object  (locally   in  scope)  to   be  referenced.
For example, #J@foo is identical to FOO.

Each  subsequent section  is  introduced  by either  a  colon or  comma.
A  section introduced  by  : is  treated  as a  string  name. A  section
introduced by  a , is instead  the name of a  locally available (current
package) symbol, which is bound to the string value to be used as a key.

Examples:

#J:foo:bar → window[\"foo\"][\"bar\"]
#J@foo:bar → foo[\"bar\"]
#J:foo,bar → window[\"foo\"][ bar ]
#J@foo,bar → foo[ bar ]

Note that @  in the first position BOTH suppresses  the automatic use of
the root  object (window) AND  ALSO acts  like a comma,  “unquoting” the
following argument.

Note that the @ and , options  are EXPERIMENTAL and local to the Romance
Ⅱbranch. The discussion upstream may substantially change the meaning of
these options.

Rationale: @  and , are used  in Lisp as quasi-quote  operators, and are
not  valid JavaScript  identifier components,  so they  are unlikely  to
occur in either language in normal use.
"
  (let ((readtable-before (gensym "READTABLE-BEFORE-")))
    `(let ((,readtable-before (copy-readtable))
           (*readtable* (copy-readtable)))
       (read-#j)
       (unwind-protect
            (progn ,@body)
         (setf *readtable* ,readtable-before)))))

(defun rational-float-p (rational)
  "Determine   whether  a   rational  number   can  be   represented  as
a       floating-point      number       accurately      at       double
precision (like JavaScript.)

Returns  multiple  values; the  first  value  is a  generalized  boolean
telling whether the number is  equal to its nearest float representation
under =; the secondary value is a list that represents the division that
produces the rational number. If the  number provided is not rational at
all, it returns only a single value: nil.

EG:

 (rational-float-p 1/3) → (values nil '(/ 1 3))

 (rational-float-p 1/2) → (values T '(/ 1 3))"
  (and (rationalp rational)
       (let ((float (coerce rational 'double-float)))
         (values (= float rational)
                 (list '/
                       (numerator rational)
                       (denominator rational))))))

(defun fdefinition-soft (name)
  "Return  the  `FDEFINITION' of  NAME,  or  NIL  if  it does  not  have
 a function value or is not a valid function name."
  (ignore-errors (fdefinition name)))
