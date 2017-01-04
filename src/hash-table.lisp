;;; hash-table.lisp —

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

;;; Plain Javascript  objects are  the natural  way to  implement Common
;;; Lisp hash tables.  However, there is a big  differences between them
;;; which we need to work around. Javascript objects require the keys to
;;; be strings. To solve that, we  map Lisp objects to strings such that
;;; "equivalent" values map  to the same string,  regarding the equality
;;; predicate used (one of `eq', `eql', `equal' and `equalp').

;;; Additionally, we want  to iterate across the  hash table key-values.
;;; So we use  a cons (key .  value) as value in  the Javascript object.
;;; It implicitly gives the inverse mapping of strings to our objects.

;;; If a hash table has `eq' as test, we need to generate unique strings
;;; for  each  Lisp  object.  To  do  this,  we  tag  the  objects  with
;;; a  `$$jscl_id'  property.  As  a special  case,  numbers  (that  are
;;; `floatp' or  `fixnump', at  least; once  bignums or  complex numbers
;;; exist, they are  special) do not need  to be tagged, as  they can be
;;; used to index Javascript objects.
(defvar *eq-hash-counter* 0)
(defun eq-hash (x)
  (typecase x
    ((or float fixnum) x)
    (t
     (unless (jscl/js::in "$$jscl_id" x)
       (jscl/ffi::oset (format nil "$~d" *eq-hash-counter*) x "$$jscl_id")
       (incf *eq-hash-counter*))
     (jscl/ffi:oget x "$$jscl_id"))))

;;; We do not have bignums, so eql is equivalent to eq.
(defun eql-hash (x)
  (eq-hash x))

;;; In the case of equal-based hash tables,  we do not store the hash in
;;; the objects, but compute a hash from the elements it contains.
(defun equal-hash (x)
  (typecase x
    (cons
     (concat "(" (equal-hash (car x)) (equal-hash (cdr x)) ")"))
    (string
     (concat "s" (integer-to-string (length x)) ":" (jscl/js::lisp-to-js x)))
    (t
     (eql-hash x))))

(defun equalp-hash (x)
  ;; FIXME
  ;; equalp is now implemented as predicate. So this should get implemented now.
  (declare (ignore x))
  (error "HASH-TABLE :TEST 'EQUALP is unimplemented"))

(defun hash-table-function (test)
  (ecase test
    (eq 	#'eq-hash)
    (eql 	#'eql-hash)
    (equal 	#'equal-hash)
    (equalp 	#'equalp-hash)))

(defun hash-table-function/invert (test)
  (let* ((test-fn (fdefinition test)))
    (cond
      ((eq test-fn #'eq) 	'eq)
      ((eq test-fn #'eql) 	'eql)
      ((eq test-fn #'equal) 	'equal)
      ((eq test-fn #'equalp) 	'equalp))))

(defun jscl/cl::make-hash-table (&key (test 'eql) size)
  (declare (ignore size))
  (let ((sv (make-storage-vector 1 (list 'hash-table (hash-table-function/invert test)))))
    (setf (storage-vector-ref sv 0) (jscl/js::new))
    sv))

(defun hash-key-for-table (key hash-table)
  (funcall (hash-table-function (second (storage-vector-kind hash-table))) key))

(defun jscl/cl::gethash (key hash-table &optional default)
  (let* ((obj (storage-vector-ref hash-table 0))
         (hash (hash-key-for-table key hash-table))
         (exists (jscl/js::in hash obj)))
    (if exists
        (values (cdr (jscl/ffi:oget obj hash)) t)
        (values default nil))))

(defun sethash (new-value key hash-table)
  (let ((obj (storage-vector-ref hash-table 0))
        (hash (hash-key-for-table key hash-table)))
    (jscl/ffi:oset (cons key new-value) obj hash)
    new-value))

(define-setf-expander jscl/cl::gethash (key hash-table &optional defaults)
  (let ((g!key (gensym "KEY-"))
        (g!hash-table (gensym "HASH-TABLE-"))
        (g!defaults (gensym "DEFAULTS-"))
        (g!new-value (gensym "NEW-VALUE-")))
    (values (list g!key g!hash-table g!defaults)            ; temporary variables
            (list key hash-table defaults)                  ; value forms
            (list g!new-value)                              ; store variables
            `(progn
               (sethash ,g!new-value ,g!key ,g!hash-table)  ; storing form
               ,g!new-value)
            `(gethash ,g!new-value ,g!key ,g!hash-table)    ; accessing form
            )))

(defun jscl/cl::remhash (key hash-table)
  (let ((obj (storage-vector-ref hash-table 0))
        (hash (hash-key-for-table key hash-table)))
    (prog1 (jscl/js::in hash obj)
      (jscl/js::delete-property hash obj))))

(defun jscl/cl::hash-table-count (hash-table)
  (let ((count 0))
    (jscl/js::map-for-in (lambda (x)
                           (declare (ignore x))
                           (incf count))
                         (storage-vector-ref hash-table 0))
    count))

(defun jscl/cl::maphash (function hash-table)
  (jscl/js::map-for-in (lambda (x)
                         (funcall function (car x) (cdr x)))
                       (storage-vector-ref hash-table 0))
  nil)
