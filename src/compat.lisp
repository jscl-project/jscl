;;; compat.lisp --- Create some definitions to fix CL compatibility

;; Copyright (C) 2012, 2013 David Vazquez Copyright (C) 2012 Raimon Grau

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

(in-package :jscl)

(defmacro while (condition &body body)
  "Continue to repeatedly execute BODY while CONDITION is true."
  `(do ()
       ((not ,condition))
     ,@body))

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

(defparameter jscl/ffi:*root* (make-hash-table :test 'equal)
  "The *ROOT* object is “window” (in a browser) or the Node root object.
  This provides access to whichever root  object happens to exist in the
  active JavaScript Virtual Machine.")

(defun jscl/ffi:make-new (class)
  "Create a new  instance of CLASS with the  JavaScript special operator
“new”"
  (declare (ignore class))
  (make-hash-table :test 'equal))

(defun (setf jscl/ffi:oget) (value object key)
  "Set the field named by KEY on the JavaScript object OBJECT to VALUE."
  (setf (gethash key object) value))

(defun jscl/ffi:oget* (object &rest keys)
  "Retrieve from  OBJECT the value of  the first of KEYS,  then from the
resulting  object, use  the  next of  KEYS to  retrieve  its value,  and
so forth.

Thus, (OGET* SOMETHING \"foo\" \"bar\" \"baz\")
is equivalent to the JavaScript something[\"foo\"][\"bar\"][\"baz\"]
 and also (when the KEYS are valid identifiers) something.foo.bar.baz"
  (cond ((null keys)
         nil)
        ((null (cdr keys))
         (jscl/ffi:oget object (first keys)))
        (t
         (jscl/ffi:oget (jscl/ffi:oget* object (rest keys))
                        (first keys)))))

(defun jscl/ffi:oget (object key)
  "Retrieve from  OBJECT the value  identified by  KEY. When KEY  is not
defined, returns NIL."
  (gethash key object))

(defun j-reader (stream subchar arg)
  "The   reader  macro   for   the  #J   notation.  See   `WITH-SHARP-J'
for details.'"
  (declare (ignorable subchar arg))
  (assert (char= #\: (read-char stream nil :eof))
          nil "FFI descriptor must start with a colon.")
  (let ((descriptor (subseq (read-until stream #'terminalp) 0))
        (subdescriptors nil))
    (do* ((start 0 (1+ end))
          (end (position #\: descriptor :start start)
               (position #\: descriptor :start start)))
         ((null end)
          (push (subseq descriptor start) subdescriptors)
          `(lambda (&rest args)
             (apply (jscl/ffi::oget* jscl/ffi::*root* ,@(reverse subdescriptors)) args)))
      (push (subseq descriptor start end) subdescriptors))))

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
"
  (let ((readtable-before (gensym "READTABLE-BEFORE-")))
    `(let ((,readtable-before (copy-readtable))
           (*readtable* (copy-readtable)))
       (set-dispatch-macro-character #\# #\J #'j-reader)
       (unwind-protect
            (progn ,@body)
         (setf *readtable* ,readtable-before)))))

(defun read-#j ()
  "Establish  #J reader  macros  for  the current  file.  Does NOT  save
the readtable. See `WITH-SHARP-J' for details."
  (set-dispatch-macro-character #\# #\J #'j-reader))

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

;;; Storage Vectors
;;;
;;; Provide a ANSI compatible implementation of storage vectors.
(defstruct (storage-vector
             (:constructor make-storage-vector-1))
  kind
  underlying-vector)

(defun make-storage-vector (initial-size kind)
  "Allocate a  STORAGE-VECTOR with a type  tag of KIND. The  type tag is
expected to  be a  CONS, the CAR  of which is  something like  'ARRAY or
'STRUCTURE-OBJECT or 'CLOS-OBJECT, the CDR  is reserved for the specific
type to use as it likes. "
  (check-type initial-size (integer 0 *))
  (check-type kind cons)
  (check-type (car kind) symbol)
  (make-storage-vector-1
   :kind kind
   :underlying-vector (make-array initial-size :adjustable t)))

(defun storage-vector-size (storage-vector)
  "Return the size of the (underlying) vector wrapped by STORAGE-VECTOR"
  (check-type storage-vector storage-vector)
  (length (storage-vector-underlying-vector storage-vector)))

(defun resize-storage-vector (storage-vector new-size)
  "Adjust the size of the  (underlying) vector wrapped by STORAGE-VECTOR
to NEW-SIZE."
  (check-type storage-vector storage-vector)
  (check-type new-size (integer 0 *))
  (let ((underlying-vector (storage-vector-underlying-vector
                            storage-vector)))
    (adjust-array underlying-vector new-size)
    storage-vector))

(defun storage-vector-ref (storage-vector index)
  "Get the value at index INDEX of the STORAGE-VECTOR"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (aref (storage-vector-underlying-vector storage-vector) index))

(defun (setf storage-vector-ref) (new-value storage-vector index)
  "Set the value at index INDEX of the STORAGE-VECTOR to NEW-VALUE"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (aref (storage-vector-underlying-vector storage-vector) index))

(defun storage-vector-set (storage-vector index new-value)
  "Set the value at index INDEX of the STORAGE-VECTOR to NEW-VALUE"
  (check-type storage-vector storage-vector)
  (check-type index (integer 0 *))
  (setf (aref (storage-vector-underlying-vector storage-vector) index)
        new-value))

(defun concatenate-storage-vector (sv1 sv2)
  "Concatenate  the two  storage vectors  SV1 and  SV2. The  CAR of  the
`STORAGE-VECTOR-KIND' for  both must  match. The resulting,  new storage
vector does not share structure with SV1 nor SV2. The “kind” tag will be
copied from SV1;  the caller is expected to make  any corrections to the
metadata in it."
  (check-type sv1 storage-vector)
  (check-type sv2 storage-vector)
  (assert (eql (car (storage-vector-kind sv1))
               (car (storage-vector-kind sv2))))
  (let* ((sv (make-storage-vector (+ (storage-vector-size sv1)
                                     (storage-vector-size sv2))
                                  (copy-list (storage-vector-kind sv1))))
         (v (storage-vector-underlying-vector sv)))
    (setf (subseq v 0 (storage-vector-size sv1))
          (storage-vector-underlying-vector sv1))
    (setf (subseq v (storage-vector-size sv1))
          (storage-vector-underlying-vector sv2))
    sv))


(defun !fdefinition-soft (name)
  Return  the  `FDEFINITION' of  NAME,  or  NIL  if  it does  not  have
  a function value or is not a valid function name.
  (ignore-errors (fdefinition name)))
