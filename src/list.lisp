;;; list.lisp --- 

;; This program is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <http://www.gnu.org/licenses/>.

;;;; Various list functions


;;; The rest of the C[AD]*R functions; only a few were defined in boot.lisp
(defun cadar  (x) (car (cdar  x)))
(defun caaar  (x) (car (caar  x)))
(defun caadr  (x) (car (cadr  x)))
(defun cdaar  (x) (cdr (caar  x)))
(defun cdadr  (x) (cdr (cadr  x)))
(defun cddar  (x) (cdr (cdar  x)))
(defun caaaar (x) (car (caaar x)))
(defun caaadr (x) (car (caadr x)))
(defun caadar (x) (car (cadar x)))
(defun caaddr (x) (car (caddr x)))
(defun cadaar (x) (car (cdaar x)))
(defun cadadr (x) (car (cdadr x)))
(defun caddar (x) (car (cddar x)))
(defun cdaaar (x) (cdr (caaar x)))
(defun cdaadr (x) (cdr (caadr x)))
(defun cdadar (x) (cdr (cadar x)))
(defun cdaddr (x) (cdr (caddr x)))
(defun cddaar (x) (cdr (cdaar x)))
(defun cddadr (x) (cdr (cdadr x)))
(defun cdddar (x) (cdr (cddar x)))
(defun cddddr (x) (cdr (cdddr x)))


(defun copy-tree (tree)
  (if (consp tree)
    (cons (copy-tree (car tree))
          (copy-tree (cdr tree)))
    tree))

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
