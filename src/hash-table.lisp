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
;;; Lisp hash tables. However, there is a big differences betweent
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

(defvar *eq-hash-counter* 0)

(defun %concat (&rest elements)
  (let ((string ""))
    (flet ((concat-two (str1 str2)
             (concatenate-storage-vector str1 str2)))
      (dolist (it elements string)
        (setq string (concat-two string it))))))

(defun eq-hash (x)
  (cond
    ((numberp x)
     x)
    (t
     (unless (in "$$jscl_id" x)
       (oset (%concat "$" *eq-hash-counter*) x "$$jscl_id")
       (incf *eq-hash-counter*))
     (oget x "$$jscl_id"))))

;;; We do not have bignums, so eql is equivalent to eq.
(defun eql-hash (x)
  (eq-hash x))


;;; In the case of equal-based hash tables, we do not store the hash
;;; in the objects, but compute a hash from the elements it contains.
;;; note: do not use equal-hash until numbers are defined in the bundle
;;;       integer-to-string use truncate from numbers
(defun equal-hash (x)
  (cond
    ((consp x)
     (%concat "(" (equal-hash (car x)) (equal-hash (cdr x)) ")"))
    ((stringp x)
     (%concat "s" (integer-to-string (length x)) ":" (lisp-to-js x)))
    (t
     (eql-hash x))))

(defun equalp-hash (x)
  ;; equalp is not implemented as predicate. So I am skipping this one
  ;; by now.
  )

;;; hash-table predicate
(defun hash-table-p (obj)
  (if (js-undefined-p obj)
      nil
      (eq (oget obj "td_Name") :hash-table)))

;;; make-hash-table
(defun %select-hash-fn (fn)
  (cond
    ((eql fn #'eq)     'eq-hash )
    ((eql fn #'eql)    'eql-hash )
    ((eql fn #'equal)  'equal-hash )
    (t (error "Incorrect hash function: ~s." test))))

(defun make-hash-table (&key (test #'eql) size)
  (let ((cell (cons (%select-hash-fn test) (new))))
    (oset :hash-table cell "td_Name")
    cell))

;;; gethash
(defun gethash (key hash-table &optional default)
  (let ((table (cdr hash-table))
        (hash (funcall (car hash-table) key)))
    (if (in hash table)
        (values (cdr (oget table hash)) t)
        (values default nil))))

;;; sethash
(defun sethash (new-value key hash-table)
  (let ((table (cdr hash-table))
        (hash (funcall (car hash-table) key)))
    (oset (cons key new-value) table hash)
    new-value))


;;; TODO: Please, implement (DEFUN (SETF foo) ...) syntax!
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

;;; remhash
(defun remhash (key table)
  (unless (hash-table-p table)
    (error "The value ~s is not of type HASH-TABLE" tale))
  (let ((obj (cdr table))
        (hash (funcall (car table) key)))
    (prog1
        (in hash obj)
      (delete-property hash obj))))

;;; clrhash
;;; clear hash-table
(defun clrhash (obj)
  (if (hash-table-p obj)
      (progn
        (rplacd obj (new))
        obj)
      (error "The value ~s is not of type HASH-TABLE" obj)))

;;; hash-table-count
(defun hash-table-count (obj)
  (if (and (consp obj) (eql (oget obj "td_Name") :hash-table))
      (oget (#j:Object:entries (cdr obj)) "length")
      0))

;;; maphash
(defun maphash (function table)
  (unless (hash-table-p table)
    (error "The value ~s is not of type HASH-TABLE" table))
  (map-for-in
   (lambda (x) (funcall function (car x) (cdr x)))
	 (cdr table))
  nil)

;;; hash-table-test
;;; the test value returned is always a symbol
(defun hash-table-test (obj)
  (unless (hash-table-p obj)
    (error "The value ~s is not of type HASH-TABLE" obj))
  (let ((test (car obj)))
    (cond ((eq test 'eq-hash) 'eq)
          ((eq test 'eql-hash) 'eql)
          (t 'equal))))

;;; copy-hash-table
;;; not in standard
(defun copy-hash-table (origin)
  (unless (hash-table-p origin)
    (error "The value ~s is not of type HASH-TABLE" origin))
  (let ((cell (cons (car origin)
                    (#j:Object:assign (new) (cdr origin)))))
    (oset :hash-table cell "td_Name")
    cell))

;;; all keys containing
(defun hash-table-keys (table)
  (let ((keys nil))
    (maphash-keys (lambda (k)
                    (push k keys))
                  table)
    keys))

;;; all values containing
(defun hash-table-values (table)
  (let ((values nil))
    (maphash-values (lambda (v)
                      (push v values))
                    table)
    values))

