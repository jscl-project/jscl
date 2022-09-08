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

(defun sequencep (thing)
  (or (listp thing) (vectorp thing)))

(defun not-seq-error (thing)
  (error "`~S' is not of type SEQUENCE" thing))

(defun length (seq)
  (cond
    ((arrayp seq)
     (if (array-has-fill-pointer-p seq)
         (fill-pointer seq)
         (oget seq "length")))
    ((listp seq)
     (list-length seq))
    (t
     (not-seq-error seq))))

(defun vector-reverse (vector)
  (let* ((length (length vector))
         (new-vector (make-array length :element-type (array-element-type vector))))
    (dotimes (index length new-vector)
      (setf (aref new-vector index) (aref vector (- length (1+ index)))))))

(defun reverse (sequence)
  "Return a new sequence containing the same elements but in reverse order."
  (etypecase sequence
    (list (revappend sequence '()))
    (vector (vector-reverse sequence))))


(defun list-nreverse (list)
  (do ((1st (cdr list) (if (endp 1st) 1st (cdr 1st)))
       (2nd list 1st)
       (3rd '() 2nd))
      ((atom 2nd) 3rd)
    (rplacd 2nd 3rd)))

(defun nreverse (sequence)
  (etypecase sequence
    (list (list-nreverse sequence))
    (vector
     (let ((size (length sequence)))
       (do ((i 0 (1+ i)))
           ((< i (/ size 2)) sequence)
         (set (elt sequence i) (elt sequence (- size i 1))))))))


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

(defun count (item sequence &key from-end (start 0) end
                                 key (test #'eql testp)
                                 (test-not #'eql test-not-p))
  ;; TODO: Implement START and END efficiently for all the sequence
  ;; functions.
  (let* ((l (length sequence))
         (end (or end l))
         (result 0))
    (if from-end
      (do-sequence (x (reverse sequence) index)
        (when (and (<= start (- l index 1))
                   (< (- l index 1) end)
                   (satisfies-test-p item x
                                     :key key :test test :testp testp
                                     :test-not test-not :test-not-p test-not-p))
          (incf result)))
      (do-sequence (x sequence index)
        (when (and (<= start index)
                   (< index end)
                   (satisfies-test-p item x
                                     :key key :test test :testp testp
                                     :test-not test-not :test-not-p test-not-p))
          (incf result))))
    result))

(defun count-if (predicate sequence &key from-end (start 0) end key)
  ;; TODO: Implement START and END efficiently for all the sequence
  ;; functions.
  (let* ((l (length sequence))
         (end (or end l))
         (result 0))
    (if from-end
      (do-sequence (x (reverse sequence) index)
        (when (and (<= start (- l index 1))
                   (< (- l index 1) end)
                   (funcall predicate (if key (funcall key x) x)))
          (incf result)))
      (do-sequence (x sequence index)
        (when (and (<= start index)
                   (< index end)
                   (funcall predicate (if key (funcall key x) x)))
          (incf result))))
    result))

(defun count-if-not (predicate sequence &key from-end (start 0) end key)
  (count-if (complement predicate) sequence :from-end from-end
            :start start :end end :key key))

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
                 &key from-end key (test #'eql testp)
                   (test-not #'eql test-not-p)
                   (start 0) end)
  ;; TODO: Implement START and END efficiently for all the sequence
  ;; functions.
  (let ((end (or end (length sequence)))
        (result nil))
    (do-sequence (x sequence index)
      (when (and (<= start index)
                 (< index end)
                 (satisfies-test-p elt x
                                   :key key :test test :testp testp
                                   :test-not test-not :test-not-p test-not-p))
        (setf result index)
        (unless from-end
            (return))))
    result))

(defun position-if (predicate sequence
                 &key from-end key (start 0) end)
  ;; TODO: Implement START and END efficiently for all the sequence
  ;; functions.
  (let ((end (or end (length sequence)))
        (result nil))
    (do-sequence (x sequence index)
      (when (and (<= start index)
                 (< index end)
                 (funcall predicate (if key (funcall key x) x)))
        (setf result index)
        (unless from-end
          (return))))
    result))

(defun position-if-not (predicate sequence
                 &key from-end key (start 0) end)
  (position-if (complement predicate) sequence
               :from-end from-end :key key :start start :end end))

(defun substitute (new old seq 
                   &key (key #'identity) (test #'eql))
  (and seq
       (map (cond
              ((stringp seq) 'string)
              ((vectorp seq) 'vector)
              ((listp seq) 'list)) 
            (lambda (elt)
              (if (funcall test old (funcall key elt))
                  new
                  elt))
            seq)))

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
               (setq vector (make-array 0 :fill-pointer 0))
               (dotimes (i index)
                 (vector-push-extend (aref seq i) vector)))
             (when vector
               (vector-push-extend elt vector))))
       (or vector seq)))))


(defun some (function seq)
  (do-sequence (elt seq)
    (when (funcall function elt)
      (return-from some t))))

;;; more sequences version
(defun every (predicate first-seq &rest more-sequences)
  (apply #'map nil (lambda (&rest seqs)
                     (when (not (apply predicate seqs))
                       (return-from every nil)))
         first-seq more-sequences)
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
  (let ((out-vector (make-array 0 :fill-pointer 0)))
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

(defun zero-args-reduce (function initial-value initial-value-p)
  (if initial-value-p
      (funcall function initial-value)
      (funcall function)))

(defun one-args-reduce (function element from-end initial-value initial-value-p)
  (if from-end
      (if initial-value-p
          (funcall function element initial-value)
          element)
      (if initial-value-p
          (funcall function initial-value element)
          element)))

(defun reduce (function sequence &key (key #'identity) from-end (start 0) end (initial-value nil initial-value-p))
  (let* ((sequence (subseq sequence start (when end end)))
         (sequence-length (length sequence)))
    (case sequence-length
      (0 (zero-args-reduce function initial-value initial-value-p))
      (1 (one-args-reduce function (funcall key (elt sequence 0)) from-end initial-value initial-value-p))
      (t (let* ((function (if from-end
                             #'(lambda (x y) (funcall function y x))
                             function))
                (sequence (if from-end
                              (reverse sequence)
                              sequence))
                (value (elt sequence 0)))
           (when initial-value-p
             (setf value (funcall function initial-value (funcall key value))))
           (etypecase sequence
             (list (dolist (elt (cdr sequence) value)
                     (setf value (funcall function value (funcall key elt)))))
             (vector (dotimes (index (1- sequence-length) value)
                       (setf value (funcall function value (funcall key (elt sequence (1+ index)))))))))))))

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

(defun check-sequence-type-specifier (specifier)
  (unless (member specifier '(vector string list))
    (error "Not a valid sequence type specifier")))

(defun concatenate (result-type &rest sequences)
  (check-sequence-type-specifier result-type)
  (let ((iterators (mapcar #'make-iterator sequences))
        (result-collector (make-collector result-type)))
    (dolist (it iterators)
      (do ((arg (funcall it) (funcall it)))
          ((eq *iterator-done* arg))
        (funcall result-collector arg)))
    (funcall result-collector)))

;;; remove duplicates
(defun %remove-duplicates (seq from-end test test-not key start end)
  (let ((result)
        (test-fn test)
        (sequence (if from-end seq (reverse seq))))
    (when test-not 
      (setq test-fn (complement test-not)))
    (when (or (not (eql start 0))
              end)
      (setq sequence (subseq sequence start end)))
    (dolist (it sequence)
      (unless (find (funcall key it) result :key key :test test-fn)
        (push it result)))
    (if from-end
        (reverse result)
        result)))

(defun remove-duplicates (seq &key from-end (test 'eq) test-not (key 'identity) (start 0) end)
  (cond ((listp seq)
         (%remove-duplicates seq from-end test test-not key start end))
        ((stringp seq)
         (apply #'concat (%remove-duplicates (vector-to-list seq) from-end test test-not key start end)))
        ((vectorp seq)
         (list-to-vector (%remove-duplicates (vector-to-list seq) from-end test test-not key start end)))
        (t (error "Its not sequence ~a" seq))))


;;; replace sequences - http://clhs.lisp.se/Body/f_replac.htm
;;;   string <- string
;;;   vector <- vector
;;;   otherwise =>error

(defun %replace-seq-eql (x y)
  (typecase x
    (number (and (numberp y) (= x y)))
    (character (and (characterp y) (char-equal x y)))
    (string
     (and (stringp y)
          (equal x y) ))
    (vector
     (and (vectorp y)
          (let ((lex (length x)))
            (= lex (length y))
            (dotimes (i lex t)
              (when (not (%replace-seq-eql (aref x i) (aref y i)))
                (return nil))))))
    (t (equal x y))))

(defun %replace-seq (seq-1 seq-2 start1 end1 start2 end2)
  (let* ((trimed-end (min (- end1 start1) (- end2 start2)))
         (back nil))
    (setq end1 (+ start1 trimed-end)
          end2 (+ start2 trimed-end))
    ;; set copy backward flag
    (when (and (%replace-seq-eql seq-1 seq-2)
               (<= start2 start1)
               (or (and (<= start1 start2) (< start2 end1))
                   (and (< start1 end2) (<= end2 end1))
                   (and (<= start2 start1) (< start1 end2))
                   (and (< start2 end1) (<= end1 end2))))
      (when (eq start1 start2)
        ;; nothing to copy
        (return-from %replace-seq seq-1))
      (setq back t))
    (cond (back
           (dotimes (i trimed-end seq-1)
             (setf (aref seq-1 (- (+ start1 trimed-end) i 1))
                   (aref seq-2 (- (+ start2 trimed-end) i 1)))))
          (t
           (dotimes (i trimed-end seq-1)
             (setf (aref seq-1 (+ start1 i))
                   (aref seq-2 (+ start2 i))))))
    ))

(defun replace (sequence-1
                sequence-2
                &key (start1 0)
                (end1 (length sequence-1))
                (start2 0) (end2 (length sequence-2)))
  (let ((compatible-types-replace (eql (array-element-type sequence-1)
                                       (array-element-type sequence-2)))
        (region-nondecreasing-order-seq-1 (<= 0 start1 end1 (length sequence-1)))
        (region-nondecreasing-order-seq-2 (<= 0 start2 end2 (length sequence-2))))
    (assert compatible-types-replace)
    ;; check region monotonically nondecreasing order
    (assert region-nondecreasing-order-seq-1)
    (assert region-nondecreasing-order-seq-2))
  (%replace-seq sequence-1 sequence-2 start1 end1 start2 end2))

;;; EOF
