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

(defmacro doseq ((elt seq &optional index) &body body)
  (let* ((nseq (gensym "seq"))
         (i (or index (gensym "i")))
         (list-body (if index
                        `(let ((,i -1))
                           (dolist (,elt ,nseq)
                             (incf ,i)
                             ,@body))
                        `(dolist (,elt ,nseq)
                           ,@body))))
    `(let ((,nseq ,seq))
       (if (listp ,nseq)
           ,list-body
           (dotimes (,i (length ,nseq))
             (let ((,elt (aref ,nseq ,i)))
               ,@body))))))

(defun find (item seq &key key (test #'eql))
  (if key
      (doseq (x seq)
        (when (funcall test (funcall key x) item)
          (return x)))
      (doseq (x seq)
        (when (funcall test x item)
          (return x)))))

(defun find-if (predicate sequence &key (key #'identity))
  (do-sequence (x sequence)
    (when (funcall predicate (funcall key x))
      (return x))))

(defun some (function seq)
  (do-sequence (elt seq)
    (when (funcall function elt)
      (return-from some t))))

(defun every (function seq)
  (do-sequence (elt seq)
    (unless (funcall function elt)
      (return-from every nil)))
  t)

(defun position (elt sequence)
  (let ((pos 0))
    (do-sequence (x seq)
      (when (eq elt x)
        (return))
      (incf pos))
    pos))


(defun remove (x seq)
  (cond
    ((null seq)
     nil)
    ((listp seq)
     (let* ((head (cons nil nil))
            (tail head))
       (doseq (elt seq)
         (unless (eql x elt)
           (let ((new (list elt)))
             (rplacd tail new)
             (setq tail new))))
       (cdr head)))
    (t
     (let (vector)
       (doseq (elt seq index)
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


;;; TODO: Support vectors

(defun remove-if (func list)
  (cond
    ((null list)
     nil)
    ((funcall func (car list))
     (remove-if func (cdr list)))
    (t
     ;;
     (cons (car list) (remove-if func (cdr list))))))

(defun remove-if-not (func list)
  (cond
    ((null list)
     nil)
    ((funcall func (car list))
     (cons (car list) (remove-if-not func (cdr list))))
    (t
     (remove-if-not func (cdr list)))))
