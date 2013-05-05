;;; lambda-list.lisp --- Lambda list parsing and destructuring

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

;;; lambda-list-keywords
;; '(&optional &rest &key &aux &allow-other-keys &body &optional)

;;;; Lambda list parsing

(def!struct optvar
  variable initform supplied-p-parameter)

(def!struct keyvar
  variable keyword-name initform supplied-p-parameter)

(def!struct auxvar
  variable initform)

(def!struct d-lambda-list
  wholevar
  reqvars
  optvars
  restvar
  allow-other-keys
  keyvars
  auxvars)

(defun var-or-pattern (x)
  (etypecase x
    (symbol x)
    (cons (parse-destructuring-lambda-list x))))

(defun parse-optvar (desc)
  (etypecase desc
    (symbol
     (make-optvar :variable desc))
    (cons
     (let ((variable (first desc))
           (initform (second desc))
           (supplied-p-parameter (third desc)))
       (unless (null (cdddr desc))
         (error "Bad optional parameter specification `~S'" desc))
       (unless (symbolp supplied-p-parameter)
         (error "`~S' is not a valid supplied optional parameter." supplied-p-parameter))
       (make-optvar :variable (var-or-pattern variable)
                    :initform initform
                    :supplied-p-parameter supplied-p-parameter)))))

(defun parse-keyvar (desc)
  (etypecase desc
    (symbol
     (make-keyvar :variable desc :keyword-name (intern (string desc) "KEYWORD")))
    (cons
     (let (variable
           keyword-name
           (initform (second desc))
           (supplied-p-parameter (third desc)))
       (unless (null (cdddr desc))
         (error "Bad keyword parameter specification `~S'" desc))
       (unless (symbolp supplied-p-parameter)
         (error "`~S' is not a valid supplied optional parameter." supplied-p-parameter))
       (let ((name (first desc)))
         (etypecase name
           (symbol
            (setq keyword-name (intern (string name) "KEYWORD"))
            (setq variable name))
           (cons
            (unless (null (cddr name))
              (error "Bad keyword argument name description `~S'" name))
            (setq keyword-name (first name))
            (setq variable (second name)))))
       (unless (symbolp keyword-name)
         (error "~S is not a valid keyword-name." keyword-name))
       (make-keyvar :variable (var-or-pattern variable)
                    :keyword-name keyword-name
                    :initform initform
                    :supplied-p-parameter supplied-p-parameter)))))

(defun parse-auxvar (desc)
  (etypecase desc
    (symbol
     (make-auxvar :variable desc))
    (cons
     (let ((variable (first desc))
           (initform (second desc)))
       (unless (null (cdddr desc))
         (error "Bad aux variable specification `~S'" desc))
       (make-auxvar :variable (var-or-pattern variable)
                    :initform initform)))))

(defun parse-destructuring-lambda-list (lambda-list)
  (let (;; Destructured lambda list structure where we accumulate the
        ;; results of the parsing.
        (d-ll (make-d-lambda-list))
        ;; List of lambda list keywords which we have already seen.
        (lambda-keywords nil))
    (flet ( ;; Check if we are in the beginning of the section NAME in
           ;; the lambda list. It checks also if the section is in the
           ;; proper place and it is new.
           (lambda-section (name)
             (let ((section (first lambda-list)))
               (when (find section lambda-keywords)
                 (error "Bad placed ~a in the lambda-list ~S." section lambda-list))
               (when (eq name section)
                 (push name lambda-keywords)
                 (pop lambda-list)
                 t)))
           ;; Check if we are in the middle of a lambda list section,
           ;; looking for a lambda list keyword in the current
           ;; position of the lambda list.
           (in-section-p ()
             (and (consp lambda-list)
                  (not (find (first lambda-list) lambda-list-keywords)))))
      
      ;; &whole var
      (when (lambda-section '&whole)
        (let ((wholevar (pop lambda-list)))
          (setf (d-lambda-list-wholevar d-ll) (var-or-pattern wholevar))))
      
      ;; required vars
      (while (in-section-p)
        (let ((var (pop lambda-list)))
          (push (var-or-pattern var) (d-lambda-list-reqvars d-ll))))
      (setf (d-lambda-list-reqvars d-ll)
            (reverse (d-lambda-list-reqvars d-ll)))
      
      ;; optional vars
      (when (lambda-section '&optional)
        (while (in-section-p)
          (push (parse-optvar (pop lambda-list))
                (d-lambda-list-optvars d-ll)))
        (setf (d-lambda-list-optvars d-ll)
              (reverse (d-lambda-list-optvars d-ll))))
      
      ;; Dotted lambda-list and &rest/&body vars. If the lambda-list
      ;; is dotted. Convert it the tail to a &rest and finish.
      (when (and lambda-list (atom lambda-list))
        (push lambda-list (d-lambda-list-restvar d-ll))
        (setq lambda-list nil))
      (when (find (car lambda-list) '(&body &rest))
        (pop lambda-list)
        (setf (d-lambda-list-restvar d-ll)
              (var-or-pattern (pop lambda-list))))

      ;; Keyword arguments
      (when (lambda-section '&key)
        (while (in-section-p)
          (push (parse-keyvar (pop lambda-list))
                (d-lambda-list-keyvars d-ll)))
        (setf (d-lambda-list-keyvars d-ll)
              (reverse (d-lambda-list-keyvars d-ll))))      
      (when (lambda-section '&allow-other-keys)
        (setf (d-lambda-list-allow-other-keys d-ll) t))

      ;; Aux variables
      (when (lambda-section '&aux)
        (while (in-section-p)
          (push (parse-auxvar (pop lambda-list))
                (d-lambda-list-auxvars d-ll)))
        (setf (d-lambda-list-auxvars d-ll)
              (reverse (d-lambda-list-auxvars d-ll))))
      d-ll)))


;;;; Destructuring

(defmacro do-keywords (var value list &body body)
  (let ((g!list (gensym)))
    `(let ((,g!list ,list))
       (while ,g!list
         (let ((,var (car ,g!list))
               (,value (cadr ,g!list)))
           ,@body)
         (setq ,g!list (cddr ,g!list))))))

;;; Return T if KEYWORD is supplied in the list of arguments LIST.
(defun keyword-supplied-p (keyword list)
  (do-keywords key value list
    (declare (ignore value))
    (when (eq key keyword) (return t))
    (setq list (cddr list))))

;;; Return the value of KEYWORD in the list of arguments LIST or NIL
;;; if it is not supplied.
(defun keyword-lookup (keyword list)
  (do-keywords key value list
    (when (eq key keyword) (return value))
    (setq list (cddr list))))

;;; Validate a list of keyword arguments.
(defun validate-keyvars (list keyword-list &optional allow-other-keys)
  (let (;; If it is non-NIL, we have to check for unknown keyword
        ;; arguments in the list to signal an error in that case.
        (allow-other-keys
         (or allow-other-keys (keyword-lookup :allow-other-keys list))))
    (unless allow-other-keys
      (do-keywords key value list
        (declare (ignore value))
        (unless (find key keyword-list)
          (error "Unknown keyword argument `~S'." key))))
    (do* ((tail list (cddr tail))
          (key (car tail) (car tail)))
         ((null list))
      (unless (symbolp key)
        (error "Keyword argument `~S' is not a symbol." key))
      (unless (consp tail)
        (error "Odd number of keyword arguments.")))))

(defmacro !destructuring-bind (lambda-list expression &body body)
  (multiple-value-bind (d-ll)
      (parse-destructuring-lambda-list lambda-list)
    (let ((reqvar-count (length (d-lambda-list-reqvars d-ll)))
          (optvar-count (length (d-lambda-list-optvars d-ll)))
          (bindings '()))
      (labels (;; Return a chain of the form (CAR (CDR (CDR ... (CDR X))),
               ;; such that there are N calls to CDR.
               (nth-chain (x n &optional tail)
                 (if tail
                     (if (zerop n) x `(cdr ,(nth-chain x (1- n) t)))
                     `(car ,(nth-chain x n t))))
               ;; Compute the bindings for a pattern against FORM. If
               ;; PATTERN is a lambda-list the pattern is bound to an
               ;; auxiliary variable, otherwise PATTERN must be a
               ;; symbol it will be bound to the form. The variable
               ;; where the form is bound is returned.
               (compute-pbindings (pattern form)
                 (cond
                   ((null pattern))
                   ;; Bind the symbol to FORM.
                   ((symbolp pattern)
                    (push `(,pattern ,form) bindings)
                    (values pattern))
                   ((d-lambda-list-p pattern)
                    ;; Bind FORM to a auxiliar variable and bind
                    ;; pattern agains it recursively.
                    (let ((subpart (gensym)))
                      (push `(,subpart
                              (progn
                                ,form))
                            bindings)
                      (compute-bindings pattern subpart)
                      (values subpart)))))
               
               ;; Compute the bindings for the full D-LAMBDA-LIST d-ll
               ;; against FORM.
               (compute-bindings (d-ll form)
                 (compute-pbindings (d-lambda-list-wholevar d-ll) form)
                 (let ((count 0))
                   ;; Required vars
                   (dolist (reqvar (d-lambda-list-reqvars d-ll))
                     (compute-pbindings reqvar (nth-chain form count))
                     (incf count))
                   ;; Optional vars
                   (dolist (optvar (d-lambda-list-optvars d-ll))
                     (when (optvar-supplied-p-parameter optvar)
                       (compute-pbindings (optvar-supplied-p-parameter optvar)
                                          `(not (null ,(nth-chain form count t)))))
                     (compute-pbindings (optvar-variable optvar)
                                        `(if (null ,(nth-chain form count t))
                                             ,(optvar-initform optvar)
                                             ,(nth-chain form count)))
                     (incf count))

                   ;; Rest-variable and keywords
                   (when (or (d-lambda-list-restvar d-ll)
                             (d-lambda-list-keyvars d-ll))
                     ;; If there is a rest or keyword variable, we
                     ;; will add a binding for the rest or an
                     ;; auxiliary variable. The computations in of the
                     ;; keyword start in this variable, so we avoid
                     ;; the long tail of nested CAR/CDR operations
                     ;; each time.
                     (let* ((chain (nth-chain form (+ reqvar-count optvar-count) t))
                            (pattern (or (d-lambda-list-restvar d-ll) (gensym)))
                            (rest (compute-pbindings pattern chain)))
                       (dolist (keyvar (d-lambda-list-keyvars d-ll))
                         (let ((variable (keyvar-variable keyvar))
                               (keyword (keyvar-keyword-name keyvar))
                               (supplied (or (keyvar-supplied-p-parameter keyvar)
                                             (gensym))))
                           (when supplied
                             (compute-pbindings supplied `(keyword-supplied-p ,keyword ,rest)))
                           (compute-pbindings variable `(if ,supplied
                                                            (keyword-lookup ,keyword ,rest)
                                                            ,(keyvar-initform keyvar)))))))

                   ;; Aux variables
                   (dolist (auxvar (d-lambda-list-auxvars d-ll))
                     (compute-pbindings (auxvar-variable auxvar) (auxvar-initform auxvar))))))

        ;; Macroexpansion. Compute bindings and generate code for them
        ;; and some necessary checking.
        (let ((whole (gensym)))
          (compute-bindings d-ll whole)
          `(let ((,whole ,expression))
             (let* ,(reverse bindings)
               ,@body)))))))


#+jscl
(defmacro destructuring-bind (lambda-list expression &body body)
  `(!destructuring-bind ,lambda-list ,expression ,@body))
