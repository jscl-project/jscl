;;; documentation.lisp --- Accessing DOCUMENTATION

;;; APROPOS and friends

(defun map-apropos-symbols (function string package external-only)
  (flet ((handle-symbol (symbol)
           ;; TODO: it's implementation-dependent, though CHAR-EQUAL seems
           ;; more reasonable nevertheless
           (when (search string (symbol-name symbol) :test #'char=)
             (funcall function symbol))))
    (if package
        (if external-only
            (do-external-symbols (symbol package) (handle-symbol symbol))
            (do-symbols (symbol package) (handle-symbol symbol)))
        (if external-only
            (do-all-external-symbols (symbol) (handle-symbol symbol))
            (do-all-symbols (symbol) (handle-symbol symbol))))))

(defun apropos-list (string &optional package external-only)
  (let (symbols)
    (map-apropos-symbols
     (lambda (symbol)
       (pushnew symbol symbols :test #'eq))
     string package external-only)
    symbols))

(defun apropos (string &optional package external-only)
  (map-apropos-symbols
   (lambda (symbol)
     (format t "~S" symbol)
     (when (boundp symbol)
       (format t " (bound)"))
     (when (fboundp symbol)
       (format t " (fbound)"))
     (terpri))
   string package external-only))

;;; DESCRIBE

;; TODO: this needs DESCRIBE-OBJECT as generic method
;; TODO: indentation for nested paragraphs
(defun describe (object &optional stream)
  (declare (ignore stream))
  (typecase object
    (cons
     (format t "~S~%  [cons]~%" object))
    (integer
     (format t "~S~%  [integer]~%" object))
    (symbol
     (format t "~S~%  [symbol]~%" object)
     (when (boundp object)
       (format t "~%~A names a special variable:~%  Value: ~A~%"
               object (symbol-value object))
       (let ((documentation (documentation object 'variable)))
         (when documentation
           (format t "  Documentation:~%~A~%" documentation))))
     (when (fboundp object)
       (format t "~%~A names a function:~%" object)
       (let ((documentation (documentation object 'function)))
         (when documentation
           (format t "  Documentation:~%~A~%" documentation)))))
    (string
     (format t "~S~%  [string]~%~%Length: ~D~%"
             object (length object)))
    (float
     (format t "~S~%  [float]~%" object))
    (array
     (format t "~S~%  [array]~%" object))
    (function
     (format t "~S~%  [function]~%" object)
     (let ((documentation (documentation object 'function)))
       (when documentation
         (format t "  Documentation:~%~A~%" documentation))))
    (T
     (warn "~A not implemented yet for ~A" 'describe object)))
  (values))
