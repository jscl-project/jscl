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
  (error 'type-error :datum thing :expected-type 'sequence))

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

(defmacro do-sequence-list ((elt seq &key from-end (start 0) end
                                       (index (gensym "I")))
                            &body body)
  (let ((nseq (gensym "SEQ"))
        (revlist (gensym "REVLIST"))
        (nstart (gensym "START"))
        (nend (gensym "END")))
    `(let* ((,nstart ,start)
            (,nend ,end)
            (,nseq (nthcdr ,nstart ,seq)))
       (if ,from-end
           ;; FROM-END = T
           (let ((,index ,nstart)
                 (,revlist '()))
             ;; Collect relevant elements in reverse first
             (dolist (,elt ,nseq)
               (when (and ,nend (<= ,nend ,index))
                 (return))
               (incf ,index)
               (push ,elt ,revlist))
             ;; Iterate through reversed elements
             (dolist (,elt ,revlist)
               (decf ,index)
               ,@body))
           ;; FROM-END = NIL
           (let ((,index ,nstart))
             (dolist (,elt ,nseq)
               (when (and ,nend (<= ,nend ,index))
                 (return))
               ,@body
               (incf ,index)))))))

(defmacro do-sequence-vector ((elt seq &key from-end (start 0) end
                                         (index (gensym "I")))
                              &body body)
  (let ((nseq (gensym "SEQ"))
        (nstart (gensym "START"))
        (nend (gensym "END")))
    `(let* ((,nseq ,seq)
            (,nstart ,start)
            (,nend (or ,end (length ,nseq))))
       (if ,from-end
           (do ((,index (1- ,nend) (1- ,index)))
               ((< ,index ,nstart))
             (let ((,elt (aref ,nseq ,index)))
               ,@body))
           (do ((,index ,nstart (1+ ,index)))
               ((<= ,nend ,index))
             (let ((,elt (aref ,nseq ,index)))
               ,@body))))))

;;; TODO: more error checking for out of bound START/END
(defmacro do-sequence ((elt seq &rest options) &body body)
  (let ((nseq (gensym "SEQ")))
    (check-type elt symbol)
    `(let ((,nseq ,seq))
       (cond ((listp ,nseq)
              (do-sequence-list (,elt ,nseq ,@options) ,@body))
             ((vectorp ,nseq)
              (do-sequence-vector (,elt ,nseq ,@options) ,@body))
             (t (not-seq-error ,nseq))))))

(defmacro define-seq-variants
    (op if-op if-not-op (&key more-reqs more-keys) &body body)
  "Define *, *-IF and *-IF-NOT variants for sequence function OP.

BODY has access to SEQUENCE, FROM-END, START, END arguments, and a
local macro TEST. (TEST x) expand to the appropriate test for each
variant.

MORE-REQS are prepended as required arguments and MORE-KEYS are
appended as keyword arguments, to all variants' lambda list."
  `(progn
     (defun ,op (,@more-reqs item sequence &key from-end key (start 0) end
                                 (test #'eql testp) (test-not #'eql test-not-p)
                                 ,@more-keys)
       (let ((test-fn (make-test-p :key key :test test :testp testp
                                   :test-not test-not :test-not-p test-not-p)))
         (macrolet ((test (x) `(funcall test-fn item ,x)))
           ,@body)))
     (defun ,if-op (,@more-reqs predicate sequence
                    &key from-end (start 0) end key ,@more-keys)
       (macrolet ((test (x)
                    `(funcall predicate (if key (funcall key ,x) ,x))))
         ,@body))
     (defun ,if-not-op (,@more-reqs predicate sequence
                        &key from-end (start 0) end key ,@more-keys)
       (macrolet ((test (x)
                    `(not (funcall predicate (if key (funcall key ,x) ,x)))))
         ,@body))))

(define-seq-variants count count-if count-if-not ()
  (let ((result 0))
    (do-sequence (x sequence
                    :from-end from-end :index index :start start :end end)
      (when (test x)
        (incf result)))
    result))

(define-seq-variants find find-if find-if-not ()
  (do-sequence (x sequence
                  :from-end from-end :start start :end end)
    (when (test x)
      (return x))))

(define-seq-variants position position-if position-if-not ()
  (do-sequence (x sequence
                  :from-end from-end :index index :start start :end end)
    (when (test x)
      (return index))))

(defmacro do-sequence-maybe-collect-list
    ((elt sequence &key (start 0) end count) test-form &body body)
  ;; @kchan smart (maximal sharing) list remove algorithm ;)
  ;;
  ;; Don't just copy when we see element to retain; instead, when
  ;; we see an element to drop, copy the segment starting from
  ;; last retainable element. Finally, share the tail.
  `(let* ((head (cons nil nil))
          (tail head)
          (last-retain ,sequence)
          (n-changed 0))
     (macrolet ((collect (elt)
                  `(progn
                     (rplacd tail (cons ,elt nil))
                     (setq tail (cdr tail)))))
       (do ((scan (nthcdr ,start ,sequence) (cdr scan))
            (index ,start (1+ index)))
           ((or (null scan)
                (and ,end (<= ,end index))
                (and ,count (<= ,count n-changed))))
         (let ((,elt (car scan)))
           (when ,test-form
             (incf n-changed)
             (while (not (eq last-retain scan))
               (collect (car last-retain))
               (setq last-retain (cdr last-retain)))
             (setq last-retain (cdr last-retain))
             ,@body))))
     (rplacd tail last-retain)
     (cdr head)))

(defmacro do-sequence-maybe-collect-vector
    ((elt sequence &key (start 0) end count) test-form &body body)
  `(let ((vector nil)
         (n-changed 0))
     ;; Phase 1 - search if there's any element to drop
     (macrolet ((collect (elt)
                  `(vector-push-extend ,elt vector)))
       (do-sequence-vector (,elt ,sequence :index index :start ,start :end ,end)
         (when ,test-form
           ;; Copy the beginning of the sequence only when we find an element
           ;; that does not match.
           (setq vector (make-array 0 :fill-pointer t
                                      :element-type (array-element-type ,sequence)))
           (dotimes (i index)
             (collect (aref ,sequence i)))
           (incf n-changed)
           ,@body
           ;; Phase 2 - if we have to copy, filter the rest of
           ;; SEQUENCE into VECTOR
           (do-sequence-vector (,elt ,sequence :index index :start (1+ index) :end ,end)
             ;; Early stop because of COUNT. Tell phase 3 to
             ;; start from INDEX.
             (when (and ,count (<= ,count n-changed))
               (setq ,end index)
               (return))
             (if ,test-form
                 (progn
                   (incf n-changed)
                   ,@body)
                 (vector-push-extend ,elt vector)))
           (return))))
     ;; Phase 3 - Copy elements after END if needed
     (when (and vector ,end)
       (do-sequence-vector (elt ,sequence :start ,end)
         (vector-push-extend elt vector)))
     (or vector ,sequence)))

;;; @kchan - TODO: support FROM-END
(defmacro do-sequence-maybe-collect ((elt seq &key (start 0) end count)
                                     test-form &body body)
  "Iterate through SEQ and collect into a sequence of the same type.

If TEST-FORM evaluates to false, copy the elements verbatim. If
TEST-FORM evaluates to true, run BODY. BODY has access to a local
macro COLLECT which can be used to accumulate value (if COLLECT is not
used, the element is effectively dropped).

The return value will share structure with SEQ if possible."
  (let ((nstart (gensym "START"))
        (nend (gensym "END"))
        (ncount (gensym "NCOUNT"))
        (nseq (gensym "NSEQ")))
    `(let ((,nstart ,start)
           (,nend ,end)
           (,ncount ,count)
           (,nseq ,seq))
       (cond ((and ,ncount (<= ,ncount 0)) ,nseq)
             ((listp ,nseq)
              (do-sequence-maybe-collect-list
                  (,elt ,nseq :start ,nstart :end ,nend :count ,ncount)
                ,test-form ,@body))
             ((vectorp ,nseq)
              (do-sequence-maybe-collect-vector
                  (,elt ,nseq :start ,nstart :end ,nend :count ,ncount)
                ,test-form ,@body))
             (t (not-seq-error ,nseq))))))

(define-seq-variants remove remove-if remove-if-not (:more-keys (count))
  (when from-end
    (warn "FROM-END not implemented, ignoring"))
  (do-sequence-maybe-collect (elt sequence :start start :end end :count count)
    (test elt)))

(define-seq-variants substitute substitute-if substitute-if-not
  (:more-reqs (newitem) :more-keys (count))
  (when from-end
    (warn "FROM-END not implemented, ignoring"))
  (do-sequence-maybe-collect (elt sequence :start start :end end :count count)
    (test elt)
    (collect newitem)))

(define-seq-variants delete delete-if delete-if-not (:more-keys (count))
  (when from-end
    (warn "FROM-END not implemented, ignoring"))
  (cond ((and count (<= count 0)) sequence)
        ((listp sequence)
         (let* ((n-removed 0)
                (handle (cons nil sequence))
                (prev (nthcdr start handle)))
           (do ((scan (cdr prev) (cdr scan))
                (index start (1+ index)))
               ((or (null scan)
                    (and end (<= end index))
                    (and count (<= count n-removed))))
             (cond ((test (car scan))
                    (rplacd prev (cdr scan))
                    (incf n-removed))
                   (t (pop prev))))
           (cdr handle)))
        ((vectorp sequence)
         (let* ((length (length sequence))
                (end (or end length))
                (ic start) ; destination to write into
                (n-removed 0))
           ;; Phase 1 - filter from START to END
           (do-sequence-vector (elt sequence :index index :start start :end end)
             ;; Early stop because of COUNT. Tell phase 2 to
             ;; start from INDEX.
             (when (and count (<= count n-removed))
               (setq end index)
               (return))
             (cond ((test elt)
                    (incf n-removed))
                   (t
                    (setf (aref sequence ic) elt)
                    (incf ic))))
           ;; Phase 2 - copy the rest if needed
           (when (plusp n-removed)
             (do-sequence-vector (elt sequence :start end :end length)
               (setf (aref sequence ic) elt)
               (incf ic))
             (shrink-vector sequence ic))
           sequence))
        (t (not-seq-error sequence))))

(define-seq-variants nsubstitute nsubstitute-if nsubstitute-if-not
  (:more-reqs (newitem) :more-keys (count))
  (when from-end
    (warn "FROM-END not implemented, ignoring"))
  (cond ((and count (<= count 0)) sequence)
        ((listp sequence)
         (let ((n-changed 0))
           (do ((scan (nthcdr start sequence) (cdr scan))
                (index start (1+ index)))
               ((or (null scan)
                    (and end (<= end index))
                    (and count (<= count n-changed)))
                sequence)
             (when (test (car scan))
               (rplaca scan newitem)
               (incf n-changed)))))
        ((vectorp sequence)
         (let ((n-changed 0))
           (do-sequence-vector (elt sequence :index index :start start :end end)
             (when (test elt)
               (setf (aref sequence index) newitem)
               (incf n-changed))
             (when (and count (<= count n-changed))
               (return)))
           sequence))
        (t (not-seq-error sequence))))


(macrolet ((def (op found-test found-result unfound-result)
             `(defun ,op (predicate first-seq &rest more-sequences)
                (if more-sequences
                    (apply #'map nil (lambda (&rest elts)
                                       (,found-test (apply predicate elts)
                                         (return-from ,op ,found-result)))
                           first-seq more-sequences)
                    (do-sequence (elt first-seq)
                      (,found-test (funcall predicate elt)
                         (return-from ,op ,found-result))))
                ,unfound-result)))
  (def some awhen it nil)
  (def every unless nil t)
  (def notany when nil t)
  (def notevery unless t nil))

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

(defun set-subseq (new-val seq a &optional b)
  (cond
    ((listp seq)
     (let ((tail (nthcdr a seq)))
       (do-sequence (elt new-val)
         (rplaca tail elt)
         (setq tail (cdr tail))
         (incf a)
         (when (or (null tail) (and b (<= b a)))
           (return)))
       new-val))
    ((vectorp seq)
     (let ((b (or b (length seq))))
       (do-sequence (elt new-val)
         (setf (aref seq a) elt)
         (incf a)
         (when (<= b a)
           (return)))
       new-val))
    (t (not-seq-error seq))))

(define-setf-expander subseq (sequence a &optional b)
  (let ((g!sequence (gensym "SEQUENCE"))
        (g!a (gensym "A"))
        (g!b (gensym "B"))
        (g!value (gensym "VALUE")))
    (values (list g!sequence g!a g!b)
            (list sequence a b)
            (list g!value)
            `(set-subseq ,g!value ,g!sequence ,g!a ,g!b)
            `(subseq ,g!sequence ,g!a ,g!b))))

(defun copy-seq (sequence)
  (subseq sequence 0))

(defun elt (sequence index)
  (when (< index 0)
    (error "The index ~D is below zero." index))
  (etypecase sequence
    (list
     (let ((tail (nthcdr index sequence)))
       (if tail (car tail)
           (error "The index ~D is too large for ~A of length ~D."
                  index 'list (length sequence)))))
    (array
     (aref sequence index))))

(defun set-elt (sequence index new-value)
  (when (< index 0)
    (error "The index ~D is below zero." index))
  (etypecase sequence
    (list
     (let ((tail (nthcdr index sequence)))
       (if tail
           (progn
             (rplaca tail new-value)
             new-value)
           (error "The index ~D is too large for ~A of length ~D."
                  index 'list (length sequence)))))
    (array
     (aset sequence index new-value))))

(define-setf-expander elt (sequence index)
  (let ((g!sequence (gensym))
        (g!index (gensym))
        (g!value (gensym)))
    (values (list g!sequence g!index)
            (list sequence index)
            (list g!value)
            `(set-elt ,g!sequence ,g!index ,g!value)
            `(elt ,g!sequence ,g!index))))

(defun zero-args-reduce (function initial-value initial-value-p)
  (if initial-value-p
      initial-value
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
  (let ((end (or end (length sequence))))
    (case (- end start)
      (0 (zero-args-reduce function initial-value initial-value-p))
      (1 (one-args-reduce function (funcall key (elt sequence start)) from-end initial-value initial-value-p))
      (t (let ((value (funcall key (elt sequence (if from-end (1- end) start))))
               (function (if from-end
                             (lambda (x y) (funcall function y x))
                             function)))
           (when initial-value-p
             (setf value (funcall function initial-value (funcall key value))))
           (do-sequence (elt sequence :start (if from-end start (1+ start))
                                      :end (if from-end (1- end) end)
                                      :from-end from-end)
             (setf value (funcall function value (funcall key elt))))
           value)))))

(defun mismatch (sequence1 sequence2 &key key (test #'eql testp) (test-not nil test-not-p)
                                       (start1 0) (end1 (length sequence1))
                                       (start2 0) (end2 (length sequence2)))
  (let ((index1 start1)
        (index2 start2)
        (test-fn (make-test-p :key key :test test :testp testp
                              :test-not test-not :test-not-p test-not-p)))
    (while (and (<= index1 end1) (<= index2 end2))
      (when (or (eql index1 end1) (eql index2 end2))
        (return-from mismatch (if (eql end1 end2) NIL index1)))
      (unless (funcall test-fn (elt sequence1 index1) (elt sequence2 index2))
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
		 (t (not-seq-error sequence)))
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

(defun %delete-duplicates-from-end (seq start end key test testp test-not test-not-p)
  ;; We always use the FROM-END = T algorithm. Outer loop: START <= i
  ;; < END, inner loop: START <= j < i. Remove i if we ever find (elt
  ;; SEQ i) = (elt SEQ j). This algorithm is efficient because the
  ;; inner loop doesn't scan duplicated element (they are already
  ;; filtered).
  (let ((key (or key #'identity))
        (test-fn (make-test-p :test test :testp testp
                              :test-not test-not :test-not-p test-not-p)))
    (cond ((listp seq)
           (let* ((handle (cons nil seq))
                  (prev (nthcdr start handle))
                  (scan-start (cdr prev)))
             (do ((scan scan-start (cdr scan))
                  (index start (1+ index)))
                 ((or (null scan)
                      (and end (<= end index))))
               (do ((scan-inner scan-start (cdr scan-inner))
                    (index start (1+ index)))
                   ((eq scan-inner scan)
                    (pop prev))
                 (when (funcall test-fn
                                (funcall key (car scan))
                                (funcall key (car scan-inner)))
                   (rplacd prev (cdr scan))
                   (return))))
             (setq seq (cdr handle))))
          ((vectorp seq)
           (let ((ic start)
                 (end (or end (length seq))))
             (do ((i start (1+ i)))
                 ((<= end i))
               (do ((j start (1+ j)))
                   ((<= i j)
                    (setf (aref seq ic) (aref seq i))
                    (incf ic))
                 (when (funcall test-fn
                                (funcall key (aref seq i))
                                (funcall key (aref seq j)))
                   (return))))
             (shrink-vector seq ic)))
          (t (not-seq-error seq))))
  seq)

(defun delete-duplicates (seq &key from-end (start 0) end
                                (test #'eql testp) (test-not #'eql test-not-p) key)
  (unless from-end
    (let ((length (length seq)))
      (psetq seq (nreverse seq)
             start (if end (- length end) 0)
             end (- length start))))
  (setq seq (%delete-duplicates-from-end seq start end key test testp test-not test-not-p))
  (if from-end seq (nreverse seq)))

(defun remove-duplicates (seq &key from-end (start 0) end
                                (test #'eql testp) (test-not #'eql test-not-p) key)
  (if from-end
      (setq seq (copy-seq seq))
      (let ((length (length seq)))
        (psetq seq (reverse seq)
               start (if end (- length end) 0)
               end (- length start))))
  (setq seq (%delete-duplicates-from-end seq start end key test testp test-not test-not-p))
  (if from-end seq (nreverse seq)))


(defun %replace-seq (seq-1 seq-2 start1 end1 start2 end2)
  (let* ((trimed-end (min (- end1 start1) (- end2 start2)))
         (back nil))
    (setq end1 (+ start1 trimed-end)
          end2 (+ start2 trimed-end))
    ;; set copy backward flag
    (when (and (eq seq-1 seq-2)
               (<= start2 start1)
               (or (and (<= start1 start2) (< start2 end1))
                   (and (< start1 end2) (<= end2 end1))
                   (and (<= start2 start1) (< start1 end2))
                   (and (< start2 end1) (<= end1 end2))))
      (when (eq start1 start2)
        ;; nothing to copy
        (return-from %replace-seq seq-1))
      (setq back t))
    (cond ((vectorp seq-1)
           (let ((delta (- start1 start2)))
             (do-sequence (elt seq-2 :index index :start start2 :end end2 :from-end back)
               (setf (aref seq-1 (+ delta index)) elt))))
          ((listp seq-1)
           (let ((tail (nthcdr start1 seq-1)))
             (if back
                 (do-sequence-list (elt (subseq seq-2 start2 end2))
                   (rplaca tail elt)
                   (setq tail (cdr tail)))
                 (do-sequence (elt seq-2 :start start2 :end end2)
                   (rplaca tail elt)
                   (setq tail (cdr tail))))))
          (t (not-seq-error seq-1)))
    seq-1))

(defun replace (sequence-1
                sequence-2
                &key (start1 0)
                (end1 (length sequence-1))
                (start2 0) (end2 (length sequence-2)))
  (let ((region-nondecreasing-order-seq-1 (<= 0 start1 end1 (length sequence-1)))
        (region-nondecreasing-order-seq-2 (<= 0 start2 end2 (length sequence-2))))
    ;; check region monotonically nondecreasing order
    (assert region-nondecreasing-order-seq-1)
    (assert region-nondecreasing-order-seq-2))
  (%replace-seq sequence-1 sequence-2 start1 end1 start2 end2))

;;; EOF
