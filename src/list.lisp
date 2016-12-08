;;;; list.lisp — Lists and pairs and so forth

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.
(in-package :jscl)

(/debug "loading list.lisp!")

;;; Various list functions

;;; Compiler primitives
(defun jscl/cl::cons (x y) (jscl/js::cons x y))
(defun jscl/cl::consp (x) (jscl/js::consp x))

(defun jscl/cl::listp (x)
  (or (consp x) (null x)))

(defun jscl/cl::null (x)
  (eq x nil))

(defun jscl/cl::endp (object)
  "It returns true if OBJECT is NIL, false if OBJECT is a CONS, and an error
 for any other type of OBJECT.

 This is the recommended way to test for the end of a proper list."
  (cond ((null object) t)
        ((consp object) nil)
        (t (error "The value `~S' is not a type list." object))))


;;; CAR, CDR, and their kin

(defun jscl/cl::car (x)
  "Return the CAR part of a cons, or NIL if X is null."
  (jscl/js::car x))

(defun jscl/cl::cdr (x) (jscl/js::cdr x))

(defun jscl/cl::rplaca (cons x)
  (jscl/js::rplaca cons x))

(defun jscl/cl::rplacd (cons x)
  (jscl/js::rplacd cons x))

(defun jscl/cl::first 	(x) (car 	x))
(defun jscl/cl::second 	(x) (cadr 	x))
(defun jscl/cl::third 	(x) (caddr 	x))
(defun jscl/cl::fourth 	(x) (cadddr 	x))
(defun jscl/cl::fifth 	(x) (car 	(cddddr x)))
(defun jscl/cl::sixth 	(x) (cadr 	(cddddr x)))
(defun jscl/cl::seventh 	(x) (caddr 	(cddddr x)))
(defun jscl/cl::eighth 	(x) (cadddr 	(cddddr x)))
(defun jscl/cl::ninth 	(x) (car 	(cddddr (cddddr x))))
(defun jscl/cl::tenth 	(x) (cadr 	(cddddr (cddddr x))))
(defun jscl/cl::rest 	(x) (cdr x))

(defun jscl/cl::list-length (list)
  (let ((l 0))
    (while (not (null list))
      (incf l)
      (setq list (cdr list)))
    l))

(defun jscl/cl::nthcdr (n list)
  (while (and (plusp n) list)
    (setq n (1- n))
    (setq list (cdr list)))
  list)

(defun jscl/cl::nth (n list)
  (car (nthcdr n list)))

(defun jscl/cl::caar (x) (car (car x)))
(defun jscl/cl::cadr (x) (car (cdr x)))
(defun jscl/cl::cdar (x) (cdr (car x)))
(defun jscl/cl::cddr (x) (cdr (cdr x)))

(defun jscl/cl::caaar (x) (car (caar x)))
(defun jscl/cl::caadr (x) (car (cadr x)))
(defun jscl/cl::cadar (x) (car (cdar x)))
(defun jscl/cl::caddr (x) (car (cddr x)))
(defun jscl/cl::cdaar (x) (cdr (caar x)))
(defun jscl/cl::cdadr (x) (cdr (cadr x)))
(defun jscl/cl::cddar (x) (cdr (cdar x)))
(defun jscl/cl::cdddr (x) (cdr (cddr x)))

(defun jscl/cl::caaaar (x) (car (caaar x)))
(defun jscl/cl::caaadr (x) (car (caadr x)))
(defun jscl/cl::caadar (x) (car (cadar x)))
(defun jscl/cl::caaddr (x) (car (caddr x)))
(defun jscl/cl::cadaar (x) (car (cdaar x)))
(defun jscl/cl::cadadr (x) (car (cdadr x)))
(defun jscl/cl::caddar (x) (car (cddar x)))
(defun jscl/cl::cadddr (x) (car (cdddr x)))
(defun jscl/cl::cdaaar (x) (cdr (caaar x)))
(defun jscl/cl::cdaadr (x) (cdr (caadr x)))
(defun jscl/cl::cdadar (x) (cdr (cadar x)))
(defun jscl/cl::cdaddr (x) (cdr (caddr x)))
(defun jscl/cl::cddaar (x) (cdr (cdaar x)))
(defun jscl/cl::cddadr (x) (cdr (cdadr x)))
(defun jscl/cl::cdddar (x) (cdr (cddar x)))
(defun jscl/cl::cddddr (x) (cdr (cdddr x)))


;;; Construction

(defun jscl/cl::make-list (size &key (initial-element nil))
  "Create a list of size `size` of `initial-element`s."
  (when (< size 0)
    (error "Size must be non-negative"))
  (let ((newlist))
    (dotimes (i size newlist)
      (push initial-element newlist))))

(defun jscl/cl::list (&rest args)
  args)

(defun jscl/cl::list* (arg &rest others)
  (cond ((null others) arg)
        ((null (cdr others)) (cons arg (car others)))
        (t (do ((x others (cdr x)))
               ((null (cddr x)) (rplacd x (cadr x))))
           (cons arg others))))


;;; APPEND, SUBLIS, &c.

(defun append-two (list1 list2)
  (if (null list1)
      list2
      (cons (car list1)
            (append (cdr list1) list2))))

(defun jscl/cl::append (&rest lists)
  (reduce #'append-two lists))

(defun jscl/cl::revappend (list1 list2)
  (while list1
    (push (car list1) list2)
    (setq list1 (cdr list1)))
  list2)

(defun jscl/cl::sublis (alist tree
                        &key key (test #'eql testp) (test-not #'eql test-not-p))
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

(defun jscl/cl::subst (new old tree
                       &key key (test #'eql testp) (test-not #'eql test-not-p))
  (labels ((s (x)
             (cond ((satisfies-test-p old x
                                      :key key :test test :testp testp
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

(defun jscl/cl::copy-list (x)
  (if (null x)
      nil
      (let* ((new-list (list (car x)))
             (last-cell new-list))
        (do ((orig (cdr x) (cdr orig)))
            ((atom orig) (rplacd last-cell orig))
          (rplacd last-cell (cons (car orig) nil))
          (setq last-cell (cdr last-cell)))
        new-list)))


;;; Trees

(defun jscl/cl::copy-tree (tree)
  (if (consp tree)
      (cons (copy-tree (car tree))
            (copy-tree (cdr tree)))
      tree))

(defun jscl/cl::tree-equal (tree1 tree2 &key (test #'eql testp)
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


;;; The end

(defun jscl/cl::tailp (object list)
  (do ((tail list (cdr tail)))
      ((atom tail) (eq object tail))
    (when (eql tail object)
      (return-from jscl/cl::tailp t))))

(defun jscl/cl::last (x)
  (while (consp (cdr x))
    (setq x (cdr x)))
  x)

(defun jscl/cl::butlast (x &optional (n 1))
  "Returns x, less the n last elements in the list."
  (nbutlast (copy-list x) n))

(defun jscl/cl::nbutlast (x &optional (n 1))
  "Destructively returns x, less the n last elements in the list."
  (cond
    ((not (and (integerp n) (>= n 0)))
     ;; TODO: turn this error into a type error, per CLHS spec.
     (error "n must be a non-negative integer"))
    ;; trivial optimizations
    ((zerop n) x)
    (t
     ;; O(n)  walk of  the  linked  list, trimming  out  the link  where
     ;; appropriate
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


;;; Sets

(defun jscl/cl::member (x list
                        &key key (test #'eql testp) (test-not #'eql test-not-p))
  (while list
    (when (satisfies-test-p x (car list)
                            :key key :test test :testp testp
                            :test-not test-not :test-not-p test-not-p)
      (return list))
    (setq list (cdr list))))

(defun jscl/cl::intersction (list1 list2 &key (test #'eql) (key #'identity))
  (let ((new-list ()))
    (dolist (x list1)
      (when (member (funcall key x) list2 :test test :key key)
        (push x new-list)))
    new-list))


;;; Associative Lists

(defun jscl/cl::assoc (x alist
                       &key key (test #'eql testp) (test-not #'eql test-not-p))
  (while alist
    (if (satisfies-test-p x (caar alist)
                          :key key :test test :testp testp
                          :test-not test-not :test-not-p test-not-p)
        (return)
        (setq alist (cdr alist))))
  (car alist))

(defun jscl/cl::rassoc (x alist
                        &key key (test #'eql testp) (test-not #'eql test-not-p))
  (while alist
    (if (satisfies-test-p x (cdar alist)
                          :key key :test test :testp testp
                          :test-not test-not :test-not-p test-not-p)
        (return)
        (setq alist (cdr alist))))
  (car alist))

(defun jscl/cl::acons (key datum alist)
  (cons (cons key datum) alist))

(defun jscl/cl::pairlis (keys data &optional (alist ()))
  (while keys
    (setq alist (acons (car keys) (car data) alist))
    (setq keys (cdr keys))
    (setq data (cdr data)))
  alist)

(defun jscl/cl::copy-alist (alist)
  "Return a new association list which is EQUAL to ALIST."
  (with-collect
    (while alist
      (collect (cons (caar alist) (cdar alist)))
      (setq alist (cdr alist)))))


;;; SETFs

(defun (setf jscl/cl::car) (value cell)
  (rplaca cell value)
  value)

(defun (setf jscl/cl::cdr) (value cell)
  (rplacd cell value)
  value)

(defun (setf jscl/cl::nth) (value n list)
  (check-type n (integer 0 *) "a list index")
  (check-type list list)
  (let ((nthcdr (nthcdr n list)))
    (rplaca nthcdr value)))

;; The NCONC function is based on the SBCL's one.
(defun jscl/cl::nconc (&rest lists)
  (flet ((fail (object)
           (error "type-error in nconc (object ~s)" object)))
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


(defun jscl/cl::nreconc (x y)
  (do ((1st (cdr x) (if (endp 1st) 1st (cdr 1st)))
       (2nd x 1st)                ; 2nd follows first down the list.
       (3rd y 2nd))               ;3rd follows 2nd down the list.
      ((atom 2nd) 3rd)
    (rplacd 2nd 3rd)))

(defun jscl/cl::adjoin (item list &key (test #'eql) (key #'identity))
  (if (member item list :key key :test test)
      list
      (cons item list)))


;;; Property lists

(defun jscl/cl::get-properties (plist indicator-list)
  (do* ((plist plist (cddr plist))
        (cdr (cdr plist) (cdr plist))
        (car (car plist) (car plist)))
       ((null plist) (values nil nil nil))
    (when (null cdr)
      (error "malformed property list ~S" plist))
    (let ((found (member car indicator-list :test #'eq)))
      (when found
        (return (values car (cadr plist) plist))))))

(defun jscl/cl::getf (plist indicator &optional default)
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

(define-setf-expander jscl/cl::getf (plist indicator &optional default)
  (multiple-value-bind (dummies vals newval setter getter)
      (get-setf-expansion plist)
    (let ((store (gensym "GETF-STORE-"))
          (indicator-sym (gensym "GETF-INDICATOR-"))
          (default-sym (and default (gensym "GETF-DEFAULT-"))))
      (values `(,indicator-sym ,@(and default `(,default-sym)) ,@dummies)
              `(,indicator ,@(and default `(,default)) ,@vals)
              `(,store)
              `(let ((,(car newval) (%putf ,getter ,indicator-sym ,store))
                     ,@(cdr newval))
                 ,setter
                 ,store)
              `(getf ,getter ,indicator-sym ,@(and default `(,default-sym)))))))


;;; Mapping

;; The following code has been taken from SBCL

;; mapping functions

;; a helper function  for implementation of MAPC,  MAPCAR, MAPCAN, MAPL,
;; MAPLIST, and MAPCON
;;
;; Map the designated function over the arglists in the appropriate way.
;; It is  done when any  of the arglists runs  out. Until then,  it CDRs
;; down  the  arglists calling  the  function  and accumulating  results
;; as desired.
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
         ;; KLUDGE:  it is  said  that MAPCON  is  equivalent to  (apply
         ;; #'nconc (maplist ...)) which means (nconc 1) would return 1,
         ;; but (nconc 1 1) should  signal an error. The transformed MAP
         ;; code  returns the  last result,  do  that here  as well  for
         ;; consistency and simplicity.
         (when (consp res)
           (setf temp (last res)))))
      (:list (setf (cdr temp) (list res)
                   temp (cdr temp))))))

(defun jscl/cl::mapc (function list &rest more-lists)
  "Apply FUNCTION to successive elements of lists. Return the second argument."
  (map1 function (cons list more-lists) nil t))

(defun jscl/cl::mapcar (function list &rest more-lists)
  "Apply FUNCTION to successive elements of LIST. Return list of FUNCTION
 return values."
  (map1 function (cons list more-lists) :list t))

(defun jscl/cl::mapcan (function list &rest more-lists)
  "Apply FUNCTION to successive elements of LIST. Return NCONC of FUNCTION
 results."
  (map1 function (cons list more-lists) :nconc t))

(defun jscl/cl::maplist (function list &rest more-lists)
  "Apply FUNCTION to successive CDRs of list. Return list of results."
  (map1 function (cons list more-lists) :list nil))

(defun jscl/cl::mapcon (function list &rest more-lists)
  "Apply FUNCTION to successive CDRs of lists. Return NCONC of results."
  (map1 function (cons list more-lists) :nconc nil))
