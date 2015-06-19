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

(/debug "loading sequence.lisp!")

(defun length (seq)
  (cond
    ((stringp seq)
     (string-length seq))
    ((arrayp seq)
     (oget seq "length"))
    ((listp seq)
     (list-length seq))))

(defun sequencep (thing)
  (or (listp thing) (vectorp thing)))

(defun not-seq-error (thing)
  (error "`~S' is not of type SEQUENCE" thing))

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

(defun find (item seq &key key (test #'eql testp) (test-not #'eql test-not-p))
  (do-sequence (x seq)
    (when (satisfies-test-p item x :key key :test test :testp testp
                            :test-not test-not :test-not-p test-not-p)
      (return x))))

(defun find-if (predicate sequence &key key)
  (if key
      (do-sequence (x sequence)
        (when (funcall predicate (funcall key x))
          (return x)))
      (do-sequence (x sequence)
        (when (funcall predicate x)
          (return x)))))

(defun position (elt sequence
                 &key key (test #'eql testp)
                   (test-not #'eql test-not-p)
                   (start 0) end)
  ;; TODO: Implement START and END efficiently for all the sequence
  ;; functions.
  (let ((end (or end (length sequence))))
    (do-sequence (x sequence index)
      (when (and (<= start index)
                 (< index end)
                 (satisfies-test-p elt x
                                   :key key :test test :testp testp
                                   :test-not test-not :test-not-p test-not-p))
        (return index)))))

;; TODO: need to support &key from-end
(defun position-if (predicate sequence
                 &key key (start 0) end)
  ;; TODO: Implement START and END efficiently for all the sequence
  ;; functions.
  (let ((end (or end (length sequence))))
    (do-sequence (x sequence index)
      (when (and (<= start index)
                 (< index end)
                 (funcall predicate (if key (funcall key x) x)))
        (return index)))))

(defun position-if-not (predicate sequence
                 &key key (start 0) end)
  (position-if (complement predicate) sequence :key key :start start :end end))

(defun remove (x seq &key key (test #'eql testp) (test-not #'eql test-not-p))
  (cond
    ((null seq)
     nil)
    ((listp seq)
     (let* ((head (cons nil nil))
            (tail head))
       (do-sequence (elt seq)
         (unless (satisfies-test-p x elt :key key :test test :testp testp
                                   :test-not test-not :test-not-p test-not-p)
           (let ((new (list elt)))
             (rplacd tail new)
             (setq tail new))))
       (cdr head)))
    (t
     (let (vector)
       (do-sequence (elt seq index)
         (if (satisfies-test-p x elt :key key :test test :testp testp
                               :test-not test-not :test-not-p test-not-p)
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
    (t (not-seq-error seq))))

(defun remove-if-not (func seq)
  (cond
    ((listp  seq) (list-remove-if   func seq t))
    ((arrayp seq) (vector-remove-if func seq t))
    (t (not-seq-error seq))))

(defun list-remove-if (func list negate)
  (if (endp list)
    ()
    (let ((test (funcall func (car list))))
      (if (if negate (not test) test)
        (list-remove-if func (cdr list) negate)
        (cons (car list) (list-remove-if func (cdr list) negate))))))

(defun vector-remove-if (func vector negate)
  (let ((out-vector (make-array 0)))
    (do-sequence (element vector i)
      (let ((test (funcall func element)))
        (when (if negate test (not test))
          (vector-push-extend element out-vector))))
    out-vector))

(defun subseq (seq a &optional b)
  (cond
    ((listp seq)
     (if b
       (let ((diff (- b a)))
         (cond
           ((zerop  diff) ())
           ((minusp diff)
            (error "Start index must be smaller than end index"))
           (t
            (let* ((drop-a (copy-list (nthcdr a seq)))
                   (pointer drop-a))
              (dotimes (_ (1- diff))
                (setq pointer (cdr pointer))
                (when (null pointer)
                  (error "Ending index larger than length of list")))
              (rplacd pointer ())
              drop-a))))
       (copy-list (nthcdr a seq))))
    ((vectorp seq)
     (let* ((b (or b (length seq)))
            (size (- b a))
            (new (make-array size :element-type (array-element-type seq))))
       (do ((i 0 (1+ i))
            (j a (1+ j)))
           ((= j b) new)
         (aset new i (aref seq j)))))
    (t (not-seq-error seq))))

(defun copy-seq (sequence)
  (subseq sequence 0))


;;; Reduce (based on SBCL's version)

(defun reduce (function sequence &key key from-end (start 0) end (initial-value nil ivp))
  (let ((key (or key #'identity))
        (end (or end (length sequence))))
    (if (= end start)
        (if ivp initial-value (funcall function))
        (macrolet ((reduce-list (function sequence key start end initial-value ivp from-end)
                     `(let ((sequence
                             ,(if from-end
                                  `(reverse (nthcdr ,start ,sequence))
                                  `(nthcdr ,start ,sequence))))
                        (do ((count (if ,ivp ,start (1+ ,start))
                                    (1+ count))
                             (sequence (if ,ivp sequence (cdr sequence))
                                       (cdr sequence))
                             (value (if ,ivp ,initial-value (funcall ,key (car sequence)))
                                    ,(if from-end
                                         `(funcall ,function (funcall ,key (car sequence)) value)
                                         `(funcall ,function value (funcall ,key (car sequence))))))
                            ((>= count ,end) value)))))
          (if from-end
              (reduce-list function sequence key start end initial-value ivp t)
              (reduce-list function sequence key start end initial-value ivp nil))))))

(defun elt (sequence index)
  (when (< index 0)
    (error "The index ~D is below zero." index))
  (etypecase sequence
    (list
     (let ((i 0))
       (dolist (elt sequence)
         (when (eql index i)
           (return-from elt elt))
         (incf i))
       (error "The index ~D is too large for ~A of length ~D." index 'list i)))
    (array
     (let ((length (length sequence)))
       (when (>= index length)
         (error "The index ~D is too large for ~A of length ~D." index 'vector length))
       (aref sequence index)))))

(defun mismatch (sequence1 sequence2 &key key (test #'eql testp) (test-not nil test-not-p)
                                       (start1 0) (end1 (length sequence1))
                                       (start2 0) (end2 (length sequence2)))
  (let ((index1 start1)
        (index2 start2))
    (while (and (<= index1 end1) (<= index2 end2))
      (when (or (eql index1 end1) (eql index2 end2))
        (return-from mismatch (if (eql end1 end2) NIL index1)))
      (unless (satisfies-test-p (elt sequence1 index1) (elt sequence2 index2)
                                :key key :test test :testp testp
                                :test-not test-not :test-not-p test-not-p)
        (return-from mismatch index1))
      (incf index1)
      (incf index2))))

(defun list-search (sequence1 list2 args)
  (let ((length1 (length sequence1))
        (position 0))
    (while list2
      (let ((mismatch (apply #'mismatch sequence1 list2 args)))
        (when (or (not mismatch) (>= mismatch length1))
          (return-from list-search position)))
      (pop list2)
      (incf position))))

(defun vector-search (sequence1 vector2 args)
  (let ((length1 (length sequence1)))
    (dotimes (position (length vector2))
      (let ((mismatch (apply #'mismatch sequence1 (subseq vector2 position) args)))
        (when (or (not mismatch) (>= mismatch length1))
          (return-from vector-search position))))))

(defun search (sequence1 sequence2 &rest args &key key test test-not)
  (unless (sequencep sequence1)
    (not-seq-error sequence1))
  (when (or (and (listp sequence1) (null sequence1))
            (and (vectorp sequence1) (zerop (length sequence1))))
    (return-from search 0))
  (funcall
   (typecase sequence2
     (list #'list-search)
     (array #'vector-search)
     (t (not-seq-error sequence2)))
   sequence1 sequence2 args))

(defparameter *iterator-done* (gensym))

(defun make-list-iterator (the-list)
  (let ((tail the-list))
    (lambda ()
      (if (null tail)
	  *iterator-done*
	  (pop tail)))))

(defun make-vector-iterator (the-vector)
  (let ((i 0)
	(len (length the-vector)))
    (lambda ()
      (if (= i len)
	  *iterator-done*
	  (let ((item (aref the-vector i)))
	    (incf i)
	    item)))))

(defun make-iterator (sequence)
  (funcall (cond ((listp sequence) #'make-list-iterator)
		 ((vectorp sequence) #'make-vector-iterator)
		 (t (error "Not of type SEQUENCE")))
	   sequence))

(defun make-list-collector ()
  (let* (the-list tail)
    (lambda (&rest item)
      (cond ((and item (null the-list))
	     (setf the-list item
		   tail item))
	    (item (setf (cdr tail) item
			tail (cdr tail))))
      the-list)))

(defun make-vector-collector (&key (element-type t))
  (let* ((the-vector (make-array 0 :adjustable t :element-type element-type :fill-pointer 0)))
    (lambda (&rest item)
      (when item
	(vector-push-extend (first item) the-vector))
      the-vector)))

(defun make-collector (type)
  (case type
    (list (make-list-collector))
    (string (make-vector-collector :element-type 'character))
    (vector (make-vector-collector))
    (t
     (when (and (listp type)
		(eql 'vector (first type)))
       (make-vector-collector :element-type (or (second type) t))))))
  

(defun map (result-type function &rest sequences)
  (let ((iterators (mapcar #'make-iterator sequences))
	(result-collector (make-collector result-type)))
    (do ((args (mapcar #'funcall iterators) (mapcar #'funcall iterators)))
	((find *iterator-done* args)
	 (when result-type (funcall result-collector)))
      (if result-type
	  (funcall result-collector (apply function args))
	  (apply function args)))))

