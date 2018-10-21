;;; list.lisp --- 

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

(/debug "loading list.lisp!")

;;;; Various list functions

(defun cons (x y) (cons x y))
(defun consp (x) (consp x))

(defun listp (x)
  (or (consp x) (null x)))

(defun null (x)
  (eq x nil))

(defun endp (object)
  "It returns true if OBJECT is NIL, false if OBJECT is a CONS, and an error
   for any other type of OBJECT.

   This is the recommended way to test for the end of a proper list."
  (cond ((null object) t)
        ((consp object) nil)
        (t (error "The value `~S' is not a type list." object))))

(defun car (x)
  "Return the CAR part of a cons, or NIL if X is null."
  (car x))

(defun cdr (x) (cdr x))

(defun rplaca (cons x)
  (rplaca cons x))

(defun rplacd (cons x)
  (rplacd cons x))

(defun first   (x) (car    x))
(defun second  (x) (cadr   x))
(defun third   (x) (caddr  x))
(defun fourth  (x) (cadddr x))
(defun fifth   (x) (car    (cddddr x)))
(defun sixth   (x) (cadr   (cddddr x)))
(defun seventh (x) (caddr  (cddddr x)))
(defun eighth  (x) (cadddr (cddddr x)))
(defun ninth   (x) (car  (cddddr (cddddr x))))
(defun tenth   (x) (cadr (cddddr (cddddr x))))
(defun rest    (x) (cdr x))

(defun list (&rest args)
  args)

(defun list* (arg &rest others)
  (cond ((null others) arg)
        ((null (cdr others)) (cons arg (car others)))
        (t (do ((x others (cdr x)))
               ((null (cddr x)) (rplacd x (cadr x))))
           (cons arg others))))

(defun list-length (list)
  (let ((l 0))
    (while (not (null list))
      (incf l)
      (setq list (cdr list)))
    l))

(defun nthcdr (n list)
  (while (and (plusp n) list)
    (setq n (1- n))
    (setq list (cdr list)))
  list)

(defun nth (n list)
  (car (nthcdr n list)))

(define-setf-expander nth (n list)
  (let ((g!list (gensym))
        (g!index (gensym))
        (g!value (gensym)))
    (values (list g!list g!index)
            (list list n)
            (list g!value)
            `(rplaca (nthcdr ,g!index ,g!list) ,g!value)
            `(nth ,g!index ,g!list))))

(defun caar (x) (car (car x)))
(defun cadr (x) (car (cdr x)))
(defun cdar (x) (cdr (car x)))
(defun cddr (x) (cdr (cdr x)))

(defun caaar (x) (car (caar x)))
(defun caadr (x) (car (cadr x)))
(defun cadar (x) (car (cdar x)))
(defun caddr (x) (car (cddr x)))
(defun cdaar (x) (cdr (caar x)))
(defun cdadr (x) (cdr (cadr x)))
(defun cddar (x) (cdr (cdar x)))
(defun cdddr (x) (cdr (cddr x)))

(defun caaaar (x) (car (caaar x)))
(defun caaadr (x) (car (caadr x)))
(defun caadar (x) (car (cadar x)))
(defun caaddr (x) (car (caddr x)))
(defun cadaar (x) (car (cdaar x)))
(defun cadadr (x) (car (cdadr x)))
(defun caddar (x) (car (cddar x)))
(defun cadddr (x) (car (cdddr x)))
(defun cdaaar (x) (cdr (caaar x)))
(defun cdaadr (x) (cdr (caadr x)))
(defun cdadar (x) (cdr (cadar x)))
(defun cdaddr (x) (cdr (caddr x)))
(defun cddaar (x) (cdr (cdaar x)))
(defun cddadr (x) (cdr (cdadr x)))
(defun cdddar (x) (cdr (cddar x)))
(defun cddddr (x) (cdr (cdddr x)))

(defun append-two (list1 list2)
  (if (null list1)
      list2
      (cons (car list1)
            (append (cdr list1) list2))))

(defun append (&rest lists)
  (!reduce #'append-two lists nil))

(defun revappend (list1 list2)
  (while list1
    (push (car list1) list2)
    (setq list1 (cdr list1)))
  list2)

(defun sublis (alist tree &key key (test #'eql testp) (test-not #'eql test-not-p))
  (when (and testp test-not-p)
    (error "Both test and test-not are set"))
  (labels ((s (tree)
             (let* ((key-val (if key (funcall key tree) tree))
                    (replace (if test-not-p
                                 (assoc key-val alist :test-not test-not)
                                 (assoc key-val alist :test test)))
                    (x (if replace (cdr replace) tree)))
               (if (atom x)
                   x
                   (cons (s (car x)) (s (cdr x)))))))
    (s tree)))

(defun subst (new old tree &key key (test #'eql testp) (test-not #'eql test-not-p))
  (labels ((s (x)
             (cond ((satisfies-test-p old x :key key :test test :testp testp
                                      :test-not test-not :test-not-p test-not-p)
                    new)
                   ((atom x) x)
                   (t (let ((a (s (car x)))
                            (b (s (cdr x))))
                        (if (and (eq a (car x))
                                 (eq b (cdr x)))
                            x
                            (cons a b)))))))
    (s tree)))

(defun copy-list (x)
  (if (null x)
    nil
    (let* ((new-list (list (car x)))
           (last-cell new-list))
      (do ((orig (cdr x) (cdr orig)))
        ((atom orig) (rplacd last-cell orig))
        (rplacd last-cell (cons (car orig) nil))
        (setq last-cell (cdr last-cell)))
      new-list)))

(defun copy-tree (tree)
  (if (consp tree)
    (cons (copy-tree (car tree))
          (copy-tree (cdr tree)))
    tree))

(defun tree-equal (tree1 tree2 &key (test #'eql testp)
                         (test-not #'eql test-not-p))
  (when (and testp test-not-p) (error "Both test and test-not are set"))
  (let ((func (if test-not-p (complement test-not) test)))
    (labels ((%tree-equal (tree1 tree2)
               (if (atom tree1)
                 (and (atom tree2) (funcall func tree1 tree2))
                 (and (consp tree2)
                      (%tree-equal (car tree1) (car tree2))
                      (%tree-equal (cdr tree1) (cdr tree2))))))
      (%tree-equal tree1 tree2))))

(defun tailp (object list)
  (do ((tail list (cdr tail)))
    ((atom tail) (eq object tail))
    (when (eql tail object)
      (return-from tailp t))))

(defun make-list (size &key (initial-element nil))
  "Create a list of size `size` of `initial-element`s."
  (when (< size 0)
    (error "Size must be non-negative"))
  (let ((newlist))
    (dotimes (i size newlist)
      (push initial-element newlist))))



(defun last (x)
  (while (consp (cdr x))
    (setq x (cdr x)))
  x)

(defun butlast (x &optional (n 1))
  "Returns x, less the n last elements in the list."
  (nbutlast (copy-list x) n))

(defun nbutlast (x &optional (n 1))
  "Destructively returns x, less the n last elements in the list."
  (cond
    ((not (and (integerp n) (>= n 0)))
     ;; TODO: turn this error into a type error, per CLHS spec.
     (error "n must be a non-negative integer"))
    ;; trivial optimizations
    ((zerop n) x)
    (t
     ;; O(n) walk of the linked list, trimming out the link where appropriate
     (let* ((head x)
            (trailing (nthcdr n x)))
       ;; If there are enough conses
       (when (consp trailing)
         (while (consp (cdr trailing))
           (setq head (cdr head))
           (setq trailing (cdr trailing)))
         ;; snip
         (rplacd head nil)
         x)))))

(defun member (x list &key key (test #'eql testp) (test-not #'eql test-not-p))
  (while list
    (when (satisfies-test-p x (car list) :key key :test test :testp testp
                            :test-not test-not :test-not-p test-not-p)
      (return list))
    (setq list (cdr list))))


(defun assoc (x alist &key key (test #'eql testp) (test-not #'eql test-not-p))
  (while alist
    (if (satisfies-test-p x (caar alist) :key key :test test :testp testp
                          :test-not test-not :test-not-p test-not-p)
      (return)
      (setq alist (cdr alist))))
  (car alist))

(defun rassoc (x alist &key key (test #'eql) (test #'eql testp)
                 (test-not #'eql test-not-p))
  (while alist
    (if (satisfies-test-p x (cdar alist) :key key :test test :testp testp
                          :test-not test-not :test-not-p test-not-p)
      (return)
      (setq alist (cdr alist))))
  (car alist))

(defun acons (key datum alist)
  (cons (cons key datum) alist))

(defun pairlis (keys data &optional (alist ()))
  (while keys
    (setq alist (acons (car keys) (car data) alist))
    (setq keys (cdr keys))
    (setq data (cdr data)))
  alist)

(defun copy-alist (alist)
  "Return a new association list which is EQUAL to ALIST."
  (with-collect
    (while alist
      (collect (cons (caar alist) (cdar alist)))
      (setq alist (cdr alist)))))

(define-setf-expander car (x)
  (let ((cons (gensym))
        (new-value (gensym)))
    (values (list cons)
            (list x)
            (list new-value)
            `(progn (rplaca ,cons ,new-value) ,new-value)
            `(car ,cons))))

(define-setf-expander cdr (x)
  (let ((cons (gensym))
        (new-value (gensym)))
    (values (list cons)
            (list x)
            (list new-value)
            `(progn (rplacd ,cons ,new-value) ,new-value)
            `(cdr ,cons))))

(define-setf-expander first (x)
  (get-setf-expansion `(car ,x)))

(define-setf-expander rest (x)
  (get-setf-expansion `(cdr ,x)))


;; The NCONC function is based on the SBCL's one.
(defun nconc (&rest lists)
  (flet ((fail (object)
           (error "type-error in nconc")))
    (do ((top lists (cdr top)))
        ((null top) nil)
      (let ((top-of-top (car top)))
        (typecase top-of-top
          (cons
           (let* ((result top-of-top)
                  (splice result))
             (do ((elements (cdr top) (cdr elements)))
                 ((endp elements))
               (let ((ele (car elements)))
                 (typecase ele
                   (cons (rplacd (last splice) ele)
                         (setf splice ele))
                   (null (rplacd (last splice) nil))
                   (atom (if (cdr elements)
                             (fail ele)
                             (rplacd (last splice) ele))))))
             (return result)))
          (null)
          (atom
           (if (cdr top)
               (fail top-of-top)
               (return top-of-top))))))))


(defun nreconc (x y)
  (do ((1st (cdr x) (if (endp 1st) 1st (cdr 1st)))
       (2nd x 1st)                ; 2nd follows first down the list.
       (3rd y 2nd))               ;3rd follows 2nd down the list.
      ((atom 2nd) 3rd)
    (rplacd 2nd 3rd)))


(defun adjoin (item list &key (test #'eql) (key #'identity))
  (if (member item list :key key :test test)
    list
    (cons item list)))

(defun intersection (list1 list2 &key (test #'eql) (key #'identity))
  (let ((new-list ()))
    (dolist (x list1)
      (when (member (funcall key x) list2 :test test :key key)
        (push x new-list)))
    new-list))

(defun get-properties (plist indicator-list)
  (do* ((plist plist (cddr plist))
        (cdr (cdr plist) (cdr plist))
        (car (car plist) (car plist)))
      ((null plist) (values nil nil nil))
    (when (null cdr)
      (error "malformed property list ~S" plist))
    (let ((found (member car indicator-list :test #'eq)))
      (when found
        (return (values car (cadr plist) plist))))))

(defun getf (plist indicator &optional default)
  (do* ((plist plist (cddr plist))
        (cdr (cdr plist) (cdr plist))
        (car (car plist) (car plist)))
      ((null plist) default)
    (when (null cdr)
      (error "malformed property list ~S" plist))
    (when (eq indicator car)
      (return (cadr plist)))))

(defun %putf (plist indicator new-value)
  (do* ((tail plist (cddr tail))
        (cdr (cdr tail) (cdr tail))
        (car (car tail) (car tail)))
      ((null tail) (list* indicator new-value plist))
    (when (null cdr)
      (error "malformed property list ~S" tail))
    (when (eq indicator car)
      ;; TODO: should be cadr, needs a defsetf for that
      (setf (car (cdr tail)) new-value)
      (return tail))))

(define-setf-expander getf (plist indicator &optional default)
  (multiple-value-bind (dummies vals newval setter getter)
      (get-setf-expansion plist)
    (let ((store (gensym))
          (indicator-sym (gensym))
          (default-sym (and default (gensym))))
      (values `(,indicator-sym ,@(and default `(,default-sym)) ,@dummies)
              `(,indicator ,@(and default `(,default)) ,@vals)
              `(,store)
              `(let ((,(car newval) (%putf ,getter ,indicator-sym ,store))
                     ,@(cdr newval))
                 ,setter
                 ,store)
              `(getf ,getter ,indicator-sym ,@(and default `(,default-sym)))))))



;;; 
;;; The following code has been taken from SBCL
;;; 

;;; mapping functions

;;; a helper function for implementation of MAPC, MAPCAR, MAPCAN,
;;; MAPL, MAPLIST, and MAPCON
;;;
;;; Map the designated function over the arglists in the appropriate
;;; way. It is done when any of the arglists runs out. Until then, it
;;; CDRs down the arglists calling the function and accumulating
;;; results as desired.
(defun map1 (fun-designator arglists accumulate take-car)
  (do* ((fun fun-designator)
        (non-acc-result (car arglists))
        (ret-list (list nil))
        (temp ret-list)
        (res nil)
        (args (make-list (length arglists))))
       ((dolist (x arglists) (or x (return t)))
        (if accumulate
            (cdr ret-list)
            non-acc-result))
    (do ((l arglists (cdr l))
         (arg args (cdr arg)))
        ((null l))
      (setf (car arg) (if take-car (caar l) (car l)))
      (setf (car l) (cdar l)))
    (setq res (apply fun args))
    (case accumulate
      (:nconc
       (when res
         (setf (cdr temp) res)
         ;; KLUDGE: it is said that MAPCON is equivalent to
         ;; (apply #'nconc (maplist ...)) which means (nconc 1) would
         ;; return 1, but (nconc 1 1) should signal an error.
         ;; The transformed MAP code returns the last result, do that
         ;; here as well for consistency and simplicity.
         (when (consp res)
           (setf temp (last res)))))
      (:list (setf (cdr temp) (list res)
                   temp (cdr temp))))))

(defun mapc (function list &rest more-lists)
  "Apply FUNCTION to successive elements of lists. Return the second argument."
  (map1 function (cons list more-lists) nil t))

(defun mapcar (function list &rest more-lists)
  "Apply FUNCTION to successive elements of LIST. Return list of FUNCTION
   return values."
  (map1 function (cons list more-lists) :list t))

(defun mapcan (function list &rest more-lists)
  "Apply FUNCTION to successive elements of LIST. Return NCONC of FUNCTION
   results."
  (map1 function (cons list more-lists) :nconc t))

(defun maplist (function list &rest more-lists)
  "Apply FUNCTION to successive CDRs of list. Return list of results."
  (map1 function (cons list more-lists) :list nil))

(defun mapcon (function list &rest more-lists)
  "Apply FUNCTION to successive CDRs of lists. Return NCONC of results."
  (map1 function (cons list more-lists) :nconc nil))


;;; set-difference
(defun set-difference (list1 list2 &key key (test #'eq))
  (cond (list2
         (let ((result '()))
           (dolist (it list1)
             (when (not (member it list2 :key key :test test))
               (push it result)))
           result))
        (t list1)))

;;; makeset
(defun makeset (lst &key (test #'eq))
  (prog ((result)
         (seq lst))
   feed
     (when (null seq) (return (reverse result)))
     (if (not (member (car seq) result :test test))
         (setq result (cons (car seq) result)))
     (setq seq (cdr seq))
     (go feed)))

;;; union
(defun union (list1 list2 &key key (test #'eq))
  (cond ((and list1 list2)
         (let ((result (makeset list2 :test #'equal)))
           (dolist (it list1)
             (when (not (member it list2 :key key :test test))
               (push it result)))
           result))
        (list1)
        (list2)))


;;; selection sort algoritm
;;; see https://en.wikipedia.org/wiki/Selection_sort
;;; also many examples: http://rosettacode.org/wiki/Category:Sorting_Algorithms
;;;
;;; Release note:
;;;
;;; Usually i use (#j:sort). Implementation of this function is done as it is used in CLOS.
;;; Considering that  in two last years, no one has opened issue about the absence of a sort function,
;;; I consider the price of the question to be minimal. The selection criteria is very simple:
;;; a) do not used additional memory b) without recursion c)simple pseudocode and fast implementation.
;;; So, was implemented selection_sort algoritm. If somebody needs a better sort, they can do it later.
;;;
;;; VKM
;;;
(defun sort (lst fn &key (key 'identity))
  (if (vectorp lst) 
      (error "Array sort yet not implemented."))
  (if (endp lst) 
      '()
      (block selection-sort
        (let* ((j lst)
               (imin j))
          (while t
            (when (null j)
              (return lst))
            (tagbody
               (let ((i (cdr j)))
                 (while t
                   (if (null i) (return nil))
                   (if (funcall fn
                                (funcall key (car i))
                                (funcall key (car imin)))
                       (setq imin i))
                   (setq i (cdr i))))
               (when (not (eq imin j))
                 (let ((swap-j (car j))
                       (swap-imin (car imin)))
                   (setf (car j) swap-imin (car imin) swap-j))))
            (setq j (cdr j) imin j)))) ))

