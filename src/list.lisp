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

(defun endp (x)
  (if (null x)
      t
      (if (consp x)
          nil
          (error "The value `~S' is not a type list." x))))

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

(defun reverse (list)
  (revappend list '()))

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

(defun map1 (func list)
  (with-collect
    (while list
      (collect (funcall func (car list)))
      (setq list (cdr list)))))

(defun mapcar (func list &rest lists)
  (let ((lists (cons list lists)))
    (with-collect
      (block loop
        (loop
           (let ((elems (map1 #'car lists)))
             (do ((tail lists (cdr tail)))
                 ((null tail))
               (when (null (car tail)) (return-from loop))
               (rplaca tail (cdar tail)))
             (collect (apply func elems))))))))

(defun mapn (func list)
  (with-collect
    (while list
      (collect (funcall func list))
      (setq list (cdr list)))))

(defun maplist (func list &rest lists)
  (let ((lists (cons list lists)))
    (with-collect
      (block loop
        (loop
           (let ((elems (mapn #'car lists)))
             (do ((tail lists (cdr tail)))
                 ((null tail))
               (when (null (car tail)) (return-from loop))
               (rplaca tail (cdar tail)))
             (collect (apply func elems))))))))

(defun mapc (func &rest lists)
  (do* ((tails lists (map1 #'cdr tails))
        (elems (map1 #'car tails)
               (map1 #'car tails)))
       ((dolist (x tails) (when (null x) (return t)))
        (car lists))
    (apply func elems)))

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
  (let ((new-alist ()))
    (while alist
      (push (cons (caar alist) (cdar alist)) new-alist)
      (setq alist (cdr alist)))
    (reverse new-alist)))


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
