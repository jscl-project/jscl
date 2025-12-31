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

;;; Plain Javascript objects are the natural way to implement Common
;;; Lisp hash tables. However, there is a big differences between
;;; them which we need to work around. Javascript objects require the
;;; keys to be strings. To solve that, we map Lisp objects to strings
;;; such that "equivalent" values map to the same string, regarding
;;; the equality predicate used (one of `eq', `eql', `equal' and
;;; `equalp').
;;;

;;; Additionally, we want to iterate across the hash table
;;; key-values. So we use a cons (key  . value)
;;; as value in the Javascript object. It implicitly gives the
;;; inverse mapping of strings to our objects.

;;; If a hash table has `eq' as test, we need to generate unique
;;; strings for each Lisp object. To do this, we tag the objects with
;;; a `$$jscl_id' property. As a special case, numbers do not need to
;;; be tagged, as they can be used to index Javascript objects.

(/debug "loading hash-table.lisp!")

(defvar *eq-hash-counter* 0)

(defun eq-hash (x)
  (cond ((numberp x) x)
        (t (unless (in "$$jscl_id" x)
             (oset (concat "$" *eq-hash-counter*) x "$$jscl_id")
             (incf *eq-hash-counter*))
           (oget x "$$jscl_id"))))

;;; We do not have bignums, so eql is equivalent to eq.
(defun eql-hash (x)
  (eq-hash x))

;;; In the case of equal-based hash tables, we do not store the hash
;;; in the objects, but compute a hash from the elements it contains.
(defun equal-hash (x)
  (cond ((consp x)
         (concat "(" (equal-hash (car x)) (equal-hash (cdr x)) ")"))
        ((stringp x)
         ;; at this place x always string, so used (oget length)
         (concat "s" (storage-vector-size x) ":" (lisp-to-js x)))
        (t (eql-hash x))))

(defun equalp-hash (x)
  ;; equalp is not implemented as predicate. So I am skipping this one
  ;; by now.
  )

(defun hash-table-p (obj)
  (if (js-undefined-p obj)
      nil
      (eql (object-type-code obj) :hash-table)))

(defun %select-hash-fn (fn)
  (when (and (symbolp fn) (fboundp fn))
    (setq fn (symbol-function fn)))
  (cond
    ((eql fn #'eq)     'eq-hash )
    ((eql fn #'eql)    'eql-hash )
    ((eql fn #'equal)  'equal-hash )
    (t (error "Incorrect hash function: ~s." fn))))

(defun make-hash-table (&key (test #'eql) size)
  (let ((cell (cons (%select-hash-fn test) (new))))
    (set-object-type-code cell :hash-table)
    cell))

(defun gethash (key hash-table &optional default)
  (let ((table (cdr hash-table))
        (hash (funcall (car hash-table) key)))
    (if (in hash table)
        (values (cdr (oget table hash)) t)
        (values default nil))))

(defun sethash (new-value key hash-table)
  (let ((table (cdr hash-table))
        (hash (funcall (car hash-table) key)))
    (oset (cons key new-value) table hash)
    new-value))

(define-setf-expander gethash (key hash-table &optional defaults)
  (let ((g!key (gensym))
        (g!hash-table (gensym))
        (g!defaults (gensym))
        (g!new-value (gensym)))
    (values (list g!key g!hash-table g!defaults)            ; temporary variables
            (list key hash-table defaults)                  ; value forms
            (list g!new-value)                              ; store variables
            `(progn
               (sethash ,g!new-value ,g!key ,g!hash-table)  ; storing form
               ,g!new-value)              
            `(gethash ,g!key ,g!hash-table)    ; accessing form
            )))

(defun remhash (key table)
  (unless (hash-table-p table)
    (error 'type-error :datum table :expected-type 'hash-table))
  (let ((obj (cdr table))
        (hash (funcall (car table) key)))
    (prog1
        (in hash obj)
      (delete-property hash obj))))

(defun clrhash (obj)
  (if (hash-table-p obj)
      (progn
        (rplacd obj (new))
        obj)
      (error 'type-error :datum obj :expected-type 'hash-table)))

(defun hash-table-count (obj)
  (if (and (consp obj) (eql (object-type-code obj) :hash-table))
      (oget (#j:Object:entries (cdr obj)) "length")
      0))

(defun maphash (function table)
  (unless (hash-table-p table)
    (error 'type-error :datum table :expected-type 'hash-table))
  (map-for-in
   (lambda (x) (funcall function (car x) (cdr x)))
	 (cdr table))
  nil)

;;; the test value returned is always a symbol
(defun hash-table-test (obj)
  (unless (hash-table-p obj)
    (error 'type-error :datum obj :expected-type 'hash-table))
  (let ((test (car obj)))
    (cond ((eq test 'eq-hash) 'eq)
          ((eq test 'eql-hash) 'eql)
          (t 'equal))))

;;; copy-hash-table - not in standard
(defun copy-hash-table (origin)
  (unless (hash-table-p origin)
    (error 'type-error :datum origin :expected-type 'hash-table))
  (let ((cell (cons (car origin)
                    ;; todo: Object.assign as builtin method-call?
                    (#j:Object:assign (new) (cdr origin)))))
    (oset :hash-table cell "td_Name")
    cell))

;;; all keys containing
(defun hash-table-keys (table)
  (let ((keys nil))
    (maphash (lambda (k v)
               (declare (ignore v))
               (push k keys))
             table)
    keys))

;;; all values containing
(defun hash-table-values (table)
  (let ((values nil))
    (maphash (lambda (k v)
               (declare (ignore k))
               (push v values))
             table)
    values))

;;; EOF
