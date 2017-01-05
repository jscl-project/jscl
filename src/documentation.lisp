;;; documentation.lisp — Accessing DOCUMENTATION
(in-package #-jscl :jscl #+jscl :jscl/impl)

(/debug "loading documentation.lisp!")

;;; Documentation.
(defun jscl/cl::documentation (x type)
  "Return  the documentation  of X.  TYPE  must be  the symbol  VARIABLE
or FUNCTION."
  (ecase type
    (function
     (let ((func (fdefinition x)))
       (jscl/ffi:oget func "docstring")))
    (variable
     (unless (symbolp x)
       (error "The type of documentation `~S' is not a symbol." type))
     (jscl/ffi:oget x "vardoc"))))


;;; APROPOS and friends

(defun map-apropos-symbols (function string package external-only)
  (flet ((handle-symbol (symbol)
           (when (search string (symbol-name symbol) :test #'char-equal)
             (funcall function symbol))))
    (if package
        (if external-only
            (do-external-symbols (symbol package) (handle-symbol symbol))
            (do-symbols (symbol package) (handle-symbol symbol)))
        (if external-only
            (do-all-external-symbols (symbol) (handle-symbol symbol))
            (do-all-symbols (symbol) (handle-symbol symbol))))))

(defun jscl/cl::apropos-list (string &optional package external-only)
  (let (symbols)
    (map-apropos-symbols
     (lambda (symbol)
       (pushnew symbol symbols :test #'eq))
     string package external-only)
    symbols))

(defun jscl/cl::apropos (string &optional package external-only)
  (map-apropos-symbols
   (lambda (symbol)
     (format t "~S" symbol)
     (when (boundp symbol)
       (format t " (bound)"))
     (when (fboundp symbol)
       (format t " (fbound)"))
     (terpri))
   (string string) package external-only))

;;; DESCRIBE

;; TODO: this needs DESCRIBE-OBJECT as generic method
;;; TODO: indentation for nested paragraphs
(defun jscl/cl::describe (object &optional (stream t))
  (let ((column-2 (floor *print-right-margin* 2)))
    (format stream "~&~S~vT ~s"
            object column-2 (type-of object))
    (typecase object
      (symbol
       (when (boundp object)
         (format stream "~&~A names a special variable:~%  Value: ~A"
                 object (symbol-value object))
         (let ((documentation (documentation object 'variable)))
           (when documentation
             (format stream "~&  Documentation:~%~A" documentation)))
         (let ((value (symbol-value object)))
           (format stream "~&Its current value is ~A" value)
           (jscl/cl::describe value stream)))
       (when (special-form-p object)
         (format stream "~&~A names a special form" object))
       (when (macro-function object)
         (format stream "~&~A names a macro-function" object))
       (when (fboundp object)
         (format stream "~&~A names a function" object)
         (jscl/cl::describe (fdefinition object) stream))
       (when (ignore-errors (find-type-definition object))
         (format stream "~&~A names a Type" object))
       (when (ignore-errors (find-class object))
         (format stream "~&~A names a Class" object)))
      (string
       (format stream "~%Length: ~:D"
               (length object)))
      (function
       (let ((documentation (documentation object 'function)))
         (when documentation
           (format stream "~&  Documentation:~%~A" documentation))))))
  (values))
