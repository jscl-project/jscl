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
  *package-list*)

(defun make-package (name &key use)
  (let ((package (new))
        (use (mapcar #'find-package-or-fail use)))
    (oset package "packageName" name)
    (oset package "symbols" (new))
    (oset package "exports" (new))
    (oset package "use" use)
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
      (error "Package unknown.")))

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

(defvar *js-package*
  (make-package "JS"))

(defvar *user-package*
  (make-package "CL-USER" :use (list *common-lisp-package*)))

(defvar *keyword-package*
  (make-package "KEYWORD"))

(defun keywordp (x)
  (and (symbolp x) (eq (symbol-package x) *keyword-package*)))

(defvar *package* *common-lisp-package*)

(defmacro in-package (package-designator)
  `(eval-when-compile
     (setq *package* (find-package-or-fail ,package-designator))))

;; This function is used internally to initialize the CL package
;; with the symbols built during bootstrap.
(defun %intern-symbol (symbol)
  (let* ((package
          (if (in "package" symbol)
              (find-package-or-fail (oget symbol "package"))
              *common-lisp-package*))
         (symbols (%package-symbols package)))
    (oset symbol "package" package)
    (when (eq package *keyword-package*)
      (oset symbol "value" symbol))
    (oset symbols (symbol-name symbol) symbol)))

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

(defun intern (name &optional (package *package*))
  (let ((package (find-package-or-fail package)))
    (multiple-value-bind (symbol foundp)
        (find-symbol name package)
      (if foundp
          (values symbol foundp)
          (let ((symbols (%package-symbols package)))
            (oget symbols name)
            (let ((symbol (make-symbol name)))
              (oset symbol "package" package)
              (when (eq package *keyword-package*)
                (oset symbol "value" symbol)
                (export (list symbol) package))
              (when (eq package *js-package*)
                (let ((sym-name (symbol-name symbol))
                      (args (gensym)))
                  ;; Generate a trampoline to call the JS function
                  ;; properly. This trampoline is very inefficient,
                  ;; but it still works. Ideas to optimize this are
                  ;; provide a special lambda keyword
                  ;; cl::&rest-vector to avoid list argument
                  ;; consing, as well as allow inline declarations.
                  (fset symbol
                        (eval `(lambda (&rest ,args)
                                 (let ((,args (list-to-vector ,args)))
                                   (%js-call (%js-vref ,sym-name) ,args)))))
                  ;; Define it as a symbol macro to access to the
                  ;; Javascript variable literally.
                  (%define-symbol-macro symbol `(%js-vref ,(string symbol)))))
              (oset symbols name symbol)
              (values symbol nil)))))))

(defun symbol-package (symbol)
  (unless (symbolp symbol)
    (error "it is not a symbol"))
  (oget symbol "package"))

(defun export (symbols &optional (package *package*))
  (let ((exports (%package-external-symbols package)))
    (dolist (symb symbols t)
      (oset exports (symbol-name symb) symb))))
