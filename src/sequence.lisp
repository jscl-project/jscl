;;; sequence.lisp

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

(defmacro do-sequence ((elt seq &optional (index (gensym "i") index-p)) &body body)
  (let ((nseq (gensym "seq")))
    (unless (symbolp elt)
      (error "`~S' must be a symbol." elt))
    `(let ((,nseq ,seq))
       (if (listp ,nseq)
           ,(if index-p
                `(let ((,index -1))
                   (dolist (,elt ,nseq)
                     (incf ,index)
                     ,@body))
                `(dolist (,elt ,nseq)
                   ,@body))
           (dotimes (,index (length ,nseq))
             (let ((,elt (aref ,nseq ,index)))
               ,@body))))))

(defun find (item seq &key key (test #'eql))
  (if key
      (do-sequence (x seq)
        (when (funcall test (funcall key x) item)
          (return x)))
      (do-sequence (x seq)
        (when (funcall test x item)
          (return x)))))

(defun find-if (predicate sequence &key key)
  (if key
      (do-sequence (x sequence)
        (when (funcall predicate (funcall key x))
          (return x)))
      (do-sequence (x sequence)
        (when (funcall predicate x)
          (return x)))))

(defun position (elt sequence &key (test #'eql))
  (do-sequence (x seq index)
    (when (funcall test elt x)
      (return index))))

(defun remove (x seq)
  (cond
    ((null seq)
     nil)
    ((listp seq)
     (let* ((head (cons nil nil))
            (tail head))
       (do-sequence (elt seq)
         (unless (eql x elt)
           (let ((new (list elt)))
             (rplacd tail new)
             (setq tail new))))
       (cdr head)))
    (t
     (let (vector)
       (do-sequence (elt seq index)
         (if (eql x elt)
             ;; Copy the beginning of the vector only when we find an element
             ;; that does not match.
             (unless vector
               (setq vector (make-array 0))
               (dotimes (i index)
                 (vector-push-extend (aref seq i) vector)))
             (when vector
               (vector-push-extend elt vector))))
       (or vector seq)))))


(defun some (function seq)
  (do-sequence (elt seq)
    (when (funcall function elt)
      (return-from some t))))

(defun every (function seq)
  (do-sequence (elt seq)
    (unless (funcall function elt)
      (return-from every nil)))
  t)

(defun remove-if (func seq)
  (cond
    ((listp  seq) (list-remove-if   func seq nil))
    ((arrayp seq) (vector-remove-if func seq nil))
    (t (error "`~S' is not of type SEQUENCE" seq))))

(defun remove-if-not (func seq)
  (cond
    ((listp  seq) (list-remove-if   func seq t))
    ((arrayp seq) (vector-remove-if func seq t))
    (t (error "`~S' is not of type SEQUENCE" seq))))

(defun list-remove-if (func list negate)
  (if (endp list)
    ()
    (let ((test (funcall func (car list))))
      (if (if negate (not test) test)
        (list-remove-if func (cdr list) negate)
        (cons (car list) (list-remove-if func (cdr list) negate))))))

(defun vector-remove-if (func vector negate)
  (let ((out-vector (make-array 0)))
    (dotimes (i (length vector))
      (let* ((element (aref vector i))
             (test (funcall func element)))
        (when (if negate test (not test))
          (vector-push-extend element out-vector))))
    out-vector))

;;; TODO: Support both List and vectors in the following functions

(defun subseq (seq a &optional b)
  (if b
      (slice seq a b)
      (slice seq a)))
