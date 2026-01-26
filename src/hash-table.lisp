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
;; We use a WeakMap to store hash codes without polluting objects
(defvar *sxhash-counter* 0)
(defvar *sxhash-table* (make-new (%js-vref "WeakMap" t)))

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
     ;; For other objects, use identity-based hash via WeakMap
     (if (eq ((oget! *sxhash-table* "has") x)
	     (%js-vref "true" t))
         ((oget! *sxhash-table* "get") x)
         (let ((new-hash (incf *sxhash-counter*)))
           ((oget! *sxhash-table* "set") x new-hash)
           new-hash)))))

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
         ;; For eq/eql tests, use native JS Map (faster, uses SameValueZero comparison)
         ;; This works because in JSCL, numbers and characters are JS primitives
         ;; compared by value, so eq and eql behave the same.
         ;; For equal, use EqualMap with custom hash and equality functions.
         (ht (if (eq test-symbol 'equal)
                 (make-new (oget! (%js-vref "internals" t) "EqualMap")
                           (fn-to-js #'equal-hash)
                           (fn-to-js #'equal))
                 (make-new (%js-vref "Map" t)))))
    (oset! t ht "$$jscl_hash_table")
    (oset! test-symbol ht "$$jscl_test")
    ht))

(defun check-is-hash-table (x)
  (unless (hash-table-p x)
    (error 'type-error :datum hash-table :expected-type 'hash-table)))

(defun gethash (key hash-table &optional default)
  (check-is-hash-table hash-table)
  (let ((has-key ((oget! hash-table "has") key)))
    (if has-key
        (values ((oget! hash-table "get") key) t)
        (values default nil))))

(defun (setf gethash) (new-value key hash-table &optional defaults)
  (declare (ignore defaults))
  (check-is-hash-table hash-table)
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
  (check-is-hash-table hash-table)
  ((oget! hash-table "clear"))
  hash-table)

(defun hash-table-count (hash-table)
  (if (hash-table-p hash-table)
      ;; Both native Map and EqualMap have a 'size' getter
      (oget hash-table "size")
      0))

(defun maphash (function hash-table)
  (check-is-hash-table hash-table)
  ((oget! hash-table "forEach")
   (lisp-to-js (lambda (value key &optional this-map)
                 (declare (ignore this-map))
                 (funcall function key value))))
  nil)

(defun hash-table-test (hash-table)
  (check-is-hash-table hash-table)
  (oget! hash-table "$$jscl_test"))

(defun copy-hash-table (origin)
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
