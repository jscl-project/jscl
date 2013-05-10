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

;;;; Various list functions

(defun cons (x y ) (cons x y))
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

(defun nthcdr (n list)
  (while (and (plusp n) list)
    (setq n (1- n))
    (setq list (cdr list)))
  list)

(defun nth (n list)
  (car (nthcdr n list)))

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


(defun copy-list (x)
  (mapcar #'identity x))

(defun copy-tree (tree)
  (if (consp tree)
    (cons (copy-tree (car tree))
          (copy-tree (cdr tree)))
    tree))

(defun tree-equal (tree1 tree2 &key (test #'eql))
  (if (atom tree1)
    (and (atom tree2) (funcall test tree1 tree2))
    (and (consp tree2)
         (tree-equal (car tree1) (car tree2) :test test)
         (tree-equal (cdr tree1) (cdr tree2) :test test))))

(defun tailp (object list)
  (do ((tail list (cdr tail)))
    ((atom tail) (eq object tail))
    (when (eql tail object)
      (return-from tailp t))))

(defun subst (new old tree &key (key #'identity) (test #'eql))
  (cond 
    ((funcall test (funcall key tree) (funcall key old))
     new) 
    ((consp tree)
     (cons (subst new old (car tree) :key key :test test)
           (subst new old (cdr tree) :key key :test test))) 
    (t tree)))

(defmacro pop (place)
  (multiple-value-bind (dummies vals newval setter getter)
    (get-setf-expansion place)
    (let ((head (gensym)))
      `(let* (,@(mapcar #'list dummies vals) 
              (,head ,getter)
              (,(car newval) (cdr ,head))
              ,@(cdr newval)) 
         ,setter
         (car ,head)))))


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

(defun mapc (func &rest lists)
  (do* ((elems (map1 #'car lists) (map1 #'car lists-rest))
        (lists-rest (map1 #'cdr lists) (map1 #'cdr lists-rest)))
       ((dolist (x elems) (when (null x) (return t)))
        (car lists))
    (apply func elems)))

(defun last (x)
  (while (consp (cdr x))
    (setq x (cdr x)))
  x)

(defun butlast (x)
  (and (consp (cdr x))
       (cons (car x) (butlast (cdr x)))))

(defun member (x list &key (key #'identity) (test #'eql))
  (while list
    (when (funcall test x (funcall key (car list)))
      (return list))
    (setq list (cdr list))))


(defun assoc (x alist &key (test #'eql))
  (while alist
    (if (funcall test x (caar alist))
      (return)
      (setq alist (cdr alist))))
  (car alist))

(defun rassoc (x alist &key (test #'eql))
  (while alist
    (if (funcall test x (cdar alist))
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
            `(car ,cons))))


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
      (when (member x list2 :test test :key key)
        (push x new-list)))
    new-list))
