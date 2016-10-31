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
(defun eq-hash (x)
  (cond
    ((numberp x)
     x)
    (t
     (unless (in "$$jscl_id" x)
       (oset (format nil "$~d" *eq-hash-counter*) x "$$jscl_id")
       (incf *eq-hash-counter*))
     (oget x "$$jscl_id"))))

;;; We do not have bignums, so eql is equivalent to eq.
(defun eql-hash (x)
  (eq-hash x))


;;; In the case of equal-based hash tables, we do not store the hash
;;; in the objects, but compute a hash from the elements it contains.
(defun equal-hash (x)
  (typecase x
    (cons
     (concat "(" (equal-hash (car x)) (equal-hash (cdr x)) ")"))
    (string
     (concat "s" (integer-to-string (length x)) ":" (lisp-to-js x)))
    (t
     (eql-hash x))))

(defun equalp-hash (x)
  ;; equalp is not implemented as predicate. So I am skipping this one
  ;; by now.
  )


(defun make-hash-table (&key (test #'eql) size)
  (let* ((test-fn (fdefinition test))
         (hash-fn
          (cond
            ((eq test-fn #'eq)    #'eq-hash)
            ((eq test-fn #'eql)   #'eql-hash)
            ((eq test-fn #'equal) #'equal-hash)
            ((eq test-fn #'equalp) #'equalp-hash))))
    ;; TODO: Replace list with a storage-vector and tag
    ;; conveniently to implemnet `hash-table-p'.
    `(hash-table ,hash-fn ,(new))))

(defun gethash (key hash-table &optional default)
  (let* ((obj (caddr hash-table))
         (hash (funcall (cadr hash-table) key))
         (exists (in hash obj)))
    (if exists
        (values (cdr (oget obj hash)) t)
        (values default nil))))

(defun sethash (new-value key hash-table)
  (let ((obj (caddr hash-table))
        (hash (funcall (cadr hash-table) key)))
    (oset (cons key new-value) obj hash)
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
            `(gethash ,g!new-value ,g!key ,g!hash-table)    ; accessing form
            )))


(defun remhash (key hash-table)
  (let ((obj (caddr hash-table))
        (hash (funcall (cadr hash-table) key)))
    (prog1 (in hash obj)
      (delete-property hash obj))))


(defun hash-table-count (hash-table)
  (let ((count 0))
    (map-for-in (lambda (x)
                  (declare (ignore x))
                  (incf count))
                (caddr hash-table))
    count))


(defun maphash (function hash-table)
  (map-for-in (lambda (x)
		(funcall function (car x) (cdr x)))
	      (caddr hash-table))
  nil)
