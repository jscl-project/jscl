;;; hash-table.lisp ---

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

;;; Hash tables implemented using the EqualMap JavaScript class from
;;; prelude.js. EqualMap supports custom hash and equality functions.

(/debug "loading hash-table.lisp!")

;;; sxhash - Standard hash function
;;; Returns a non-negative fixnum hash code for any object.
;;; Objects that are EQUAL must return the same hash code.

;; Counter for identity-based hash codes
;; We use a property on objects to store their hash, since WeakMap
;; operations were causing issues during bootstrap
(defvar *sxhash-counter* 0)
(defvar *sxhash-property* "$$jscl_sxhash")

(defun sxhash-string (s)
  "Hash a string based on its content using a simple hash algorithm."
  (let ((hash 5381)
        (len (length s)))
    (dotimes (i len)
      ;; djb2-like hash: hash * 33 + char
      (setq hash (logand (+ (ash hash 5) hash (char-code (char s i)))
                         #x7FFFFFFF)))
    hash))

(defun sxhash-cons (x)
  "Recursively hash a cons cell."
  (let ((car-hash (sxhash (car x)))
        (cdr-hash (sxhash (cdr x))))
    ;; Combine hashes
    (logand (+ (* car-hash 31) cdr-hash) #x7FFFFFFF)))

(defun sxhash (x)
  "Return a hash code for any object. Objects that are EQUAL have the same hash."
  (cond
    ((null x) 0)
    ((numberp x)
     (logand (truncate (if (< x 0) (- x) x)) #x7FFFFFFF))
    ((characterp x)
     (char-code x))
    ((stringp x)
     (sxhash-string x))
    ((consp x)
     (sxhash-cons x))
    (t
     ;; For other objects, use identity-based hash via property
     (if (in *sxhash-property* x)
         (oget! x *sxhash-property*)
         (let ((new-hash (incf *sxhash-counter*)))
           (oset! new-hash x *sxhash-property*)
           new-hash)))))

;;; Hash functions for different equality predicates

(defun eq-hash (x)
  "Hash function for eq-based hash tables."
  (cond
    ((null x) 0)
    ((numberp x)
     (logand (truncate (if (< x 0) (- x) x)) #x7FFFFFFF))
    ((characterp x)
     (char-code x))
    (t
     ;; For objects, use identity hash via property
     (if (in *sxhash-property* x)
         (oget! x *sxhash-property*)
         (let ((new-hash (incf *sxhash-counter*)))
           (oset! new-hash x *sxhash-property*)
           new-hash)))))

;; eql is equivalent to eq for us (no bignums)
(defun eql-hash (x)
  (eq-hash x))

;; equal uses sxhash which handles structural equality
(defun equal-hash (x)
  (sxhash x))

;;; Hash table structure:
;;; An EqualMap instance (JS object) with additional properties:
;;;   $$jscl_hash_table = t (marker to identify hash tables)
;;;   $$jscl_test = test function symbol (eq, eql, or equal)

(defun hash-table-p (obj)
  (and (objectp obj)
       (in "$$jscl_hash_table" obj)))

(defun make-hash-table (&key (test #'eql) size)
  (declare (ignore size))
  (let* ((test-symbol (cond
                        ((or (eq test #'eq) (eq test 'eq)) 'eq)
                        ((or (eq test #'eql) (eq test 'eql)) 'eql)
                        ((or (eq test #'equal) (eq test 'equal)) 'equal)
                        (t (error "Invalid hash table test: ~S" test))))
         (hash-fn (case test-symbol
                    (eq #'eq-hash)
                    (eql #'eql-hash)
                    (equal #'equal-hash)))
         (equality-fn (case test-symbol
                        (eq #'eq)
                        (eql #'eql)
                        (equal #'equal)))
         (js-hash-fn (lisp-to-js hash-fn))
         (js-test-fn (lisp-to-js equality-fn))
         (ht (make-new (oget! (%js-vref "internals" t) "EqualMap")
                       js-hash-fn
                       js-test-fn)))
    (oset! t ht "$$jscl_hash_table")
    (oset! test-symbol ht "$$jscl_test")
    ht))

(defun gethash (key hash-table &optional default)
  (let ((has-key ((oget! hash-table "has") key)))
    (if has-key
        (values ((oget! hash-table "get") key) t)
        (values default nil))))

(defun (setf gethash) (new-value key hash-table &optional defaults)
  (declare (ignore defaults))
  ((oget! hash-table "set") key new-value)
  new-value)

(defun remhash (key hash-table)
  (unless (hash-table-p hash-table)
    (error 'type-error :datum hash-table :expected-type 'hash-table))
  ;; Use js-to-lisp to convert JS boolean to Lisp boolean
  (let ((had-key (js-to-lisp ((oget! hash-table "has") key))))
    ((oget! hash-table "delete") key)
    had-key))

(defun clrhash (hash-table)
  (unless (hash-table-p hash-table)
    (error 'type-error :datum hash-table :expected-type 'hash-table))
  ((oget! hash-table "clear"))
  hash-table)

(defun hash-table-count (hash-table)
  (if (hash-table-p hash-table)
      (oget! hash-table "_size")
      0))

(defun maphash (function hash-table)
  (unless (hash-table-p hash-table)
    (error 'type-error :datum hash-table :expected-type 'hash-table))
  ((oget! hash-table "forEach")
   (lisp-to-js (lambda (value key &optional this-map)
                 (declare (ignore this-map))
                 (funcall function key value))))
  nil)

(defun hash-table-test (hash-table)
  (unless (hash-table-p hash-table)
    (error 'type-error :datum hash-table :expected-type 'hash-table))
  (oget! hash-table "$$jscl_test"))

(defun copy-hash-table (origin)
  (unless (hash-table-p origin)
    (error 'type-error :datum origin :expected-type 'hash-table))
  (let ((new-ht (make-hash-table :test (hash-table-test origin))))
    (maphash (lambda (k v)
               (setf (gethash k new-ht) v))
             origin)
    new-ht))

(defun hash-table-keys (hash-table)
  (let ((keys nil))
    (maphash (lambda (k v)
               (declare (ignore v))
               (push k keys))
             hash-table)
    keys))

(defun hash-table-values (hash-table)
  (let ((values nil))
    (maphash (lambda (k v)
               (declare (ignore k))
               (push v values))
             hash-table)
    values))

;;; EOF
