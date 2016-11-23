;;;; defgeneric.lisp — defgeneric and defmethod

;;; This implementation is  in no way optimal, nor  really too effective
;;; at covering the cases for CLOS. It's a start, though.

(in-package :jscl)

#+jscl
(defstruct generic-function
  name lambda-list required-count methods)

#+jscl
(defstruct method
  generic-function specializers)

(defun dispatch-generic% (generic-function &rest values)
  (assert (<= (generic-function-required-count generic-function)
              (length values)))
  (let ((determinants (subseq values 0 (generic-function-required-count generic-function))))
    (dolist (method methods)
      (catch 'next-method 
        (when (every #'typep determinants (method-specializers method))
          (return-from dispatch-generic% (invoke-method% method)))))))

(defun most-specific-method% (a b)
  (let* ((intermix (map 'list #'cons a b))
         (a-wins (count-if (lambda (pair)
                             (subtypep (car pair) (cdr pair)))
                           intermix))
         (b-wins (count-if (lambda (pair)
                             (subtypep (cdr pair) (car pair)))
                           intermix)))
    (<= a-wins b-wins)))

(defun !add-method (generic-function method)
  (setf (generic-function-methods generic-function)
        (sort (generic-function-methods generic-function)
              #'most-specific-method%)))
#+jscl (fset 'add-method '!add-method)

(defmacro !defmethod (name ))

(defmacro !defgeneric (name lambda-list &body options)
  (let ((generic (make-generic-function 
                  :name name
                  :lambda-list lambda-list
                  :required-count (let ((ll (parse-regular-lambda-list lambda-list)))
                                    (length (lambda-list-reqvars ll)))
                  :methods nil))
        (dispatcher (gensym (concatenate 'string
                                         "DISPATCH-"
                                         (princ-to-string name)
                                         "-"))))
    `(progn 
       ,(nreverse
         (dolist (method (remove-if-not 
                          (lambda (option)
                            (and (listp option)
                                 (eql (car option) :method)))
                          options)
                  method-forms)
           (push `(defmethod ,name ,@(rest method))
                 method-forms)))
       (defun ,dispatcher ,lambda-list
         (dispatch-generic% ,generic ,@lambda-list))
       (fset ',name ',dispatcher))))
