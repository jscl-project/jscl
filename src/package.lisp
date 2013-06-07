;;; package.lisp ---

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

(defvar *package-list* nil)

(defun list-all-packages ()
  (copy-list *package-list*))

(defun make-package (name &key use)
  (let ((package (new))
        (use (mapcar #'find-package-or-fail use)))
    (setf (oget package "packageName") name)
    (setf (oget package "symbols") (new))
    (setf (oget package "exports") (new))
    (setf (oget package "use") use)
    (push package *package-list*)
    package))

(defun packagep (x)
  (and (objectp x) (in "symbols" x)))

(defun find-package (package-designator)
  (when (packagep package-designator)
    (return-from find-package package-designator))
  (let ((name (string package-designator)))
    (dolist (package *package-list*)
      (when (string= (package-name package) name)
        (return package)))))

(defun find-package-or-fail (package-designator)
  (or (find-package package-designator)
      (error "The name `~S' does not designate any package." package-designator)))

(defun package-name (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "packageName")))

(defun %package-symbols (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "symbols")))

(defun package-use-list (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "use")))

(defun %package-external-symbols (package-designator)
  (let ((package (find-package-or-fail package-designator)))
    (oget package "exports")))

(defvar *common-lisp-package*
  (make-package "CL"))

(defvar *user-package*
  (make-package "CL-USER" :use (list *common-lisp-package*)))

(defvar *keyword-package*
  (make-package "KEYWORD"))

(defun keywordp (x)
  (and (symbolp x) (eq (symbol-package x) *keyword-package*)))

(defvar *package* *common-lisp-package*)

(defmacro in-package (string-designator)
  `(eval-when-compile
     (setq *package* (find-package-or-fail ',string-designator))))

;; This function is used internally to initialize the CL package
;; with the symbols built during bootstrap.
(defun %intern-symbol (symbol)
  (let* ((package
          (if (in "package" symbol)
              (find-package-or-fail (oget symbol "package"))
              *common-lisp-package*))
         (symbols (%package-symbols package))
         (exports (%package-external-symbols package)))
    (setf (oget symbol "package") package)
    (setf (oget symbols (symbol-name symbol)) symbol)
    ;; Turn keywords self-evaluated and export them.
    (when (eq package *keyword-package*)
      (setf (oget symbol "value") symbol)
      (setf (oget exports (symbol-name symbol)) symbol))))

(defun find-symbol (name &optional (package *package*))
  (let* ((package (find-package-or-fail package))
         (externals (%package-external-symbols package))
         (symbols (%package-symbols package)))
    (cond
      ((in name externals)
       (values (oget externals name) :external))
      ((in name symbols)
       (values (oget symbols name) :internal))
      (t
       (dolist (used (package-use-list package) (values nil nil))
         (let ((exports (%package-external-symbols used)))
           (when (in name exports)
             (return (values (oget exports name) :inherit)))))))))


;;; It is a function to call when a symbol is interned. The function
;;; is invoked with the already interned symbol as argument.
(defvar *intern-hook* nil)

(defun intern (name &optional (package *package*))
  (let ((package (find-package-or-fail package)))
    (multiple-value-bind (symbol foundp)
        (find-symbol name package)
      (if foundp
          (values symbol foundp)
          (let ((symbols (%package-symbols package)))
            (oget symbols name)
            (let ((symbol (make-symbol name)))
              (setf (oget symbol "package") package)
              (when (eq package *keyword-package*)
                (setf (oget symbol "value") symbol)
                (export (list symbol) package))
              (when *intern-hook*
                (funcall *intern-hook* symbol))
              (setf (oget symbols name) symbol)
              (values symbol nil)))))))

(defun symbol-package (symbol)
  (unless (symbolp symbol)
    (error "`~S' is not a symbol." symbol))
  (oget symbol "package"))

(defun export (symbols &optional (package *package*))
  (let ((exports (%package-external-symbols package)))
    (dolist (symb symbols t)
      (setf (oget exports (symbol-name symb)) symb))))

(defun %map-external-symbols (function package)
  (map-for-in function (%package-external-symbols package)))

(defun %map-symbols (function package)
  (map-for-in function (%package-symbols package))
  (dolist (used (package-use-list package))
    (%map-external-symbols function used)))

(defun %map-all-symbols (function)
  (dolist (package *package-list*)
    (map-for-in function (%package-symbols package))))

(defmacro do-symbols ((var &optional (package '*package*) result-form)
                      &body body)
  `(block nil
     (%map-symbols
      (lambda (,var) ,@body)
      (find-package ,package))
     ,result-form))

(defmacro do-external-symbols ((var &optional (package '*package*)
                                              result-form)
                               &body body)
  `(block nil
     (%map-external-symbols
      (lambda (,var) ,@body)
      (find-package ,package))
     ,result-form))

(defmacro do-all-symbols ((var &optional result-form) &body body)
  `(block nil (%map-all-symbols (lambda (,var) ,@body)) ,result-form))

(defun find-all-symbols (string)
  (let (symbols)
    (dolist (package *package-list* symbols)
      (multiple-value-bind (symbol status) (find-symbol string package)
        (when status
          (pushnew symbol symbols :test #'eq))))))
