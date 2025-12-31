;;; lambda-list.lisp --- Lambda list parsing and destructuring

;;; Copyright (C) 2013 David Vazquez

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

(/debug "loading lambda-list.lisp!")


(defvar !lambda-list-keywords
  '(&optional &rest &key &aux &allow-other-keys &body &optional &environment))

#+jscl
(defconstant lambda-list-keywords !lambda-list-keywords)

;;;; Lambda list parsing

(def!struct optvar
  variable initform supplied-p-parameter)

(def!struct keyvar
  variable keyword-name initform supplied-p-parameter)

(def!struct auxvar
  variable initform)

(def!struct lambda-list
  wholevar
  reqvars
  optvars
  restvar
  allow-other-keys
  keyvars
  auxvars
  envvar)

(defun var-or-pattern (x)
  (etypecase x
    ;; Symbol NIL should be considered a pattern, not variable
    (list (parse-destructuring-lambda-list x))
    (symbol x)))

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

(defun parse-destructuring-lambda-list (lambda-list &optional accept-environment-p)
  (let (;; Destructure lambda list structure where we accumulate the
        ;; results of the parsing.
        (ll (make-lambda-list))
        ;; List of lambda list keywords which we have already seen.
        (lambda-keywords nil))
    (labels (;; Check if we are in the beginning of the section NAME in
             ;; the lambda list. It also checks if the section is in the
             ;; proper place and it is new.
             (lambda-section (name)
               (let ((section (and (consp lambda-list) (first lambda-list))))
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
                    (not (find (first lambda-list) !lambda-list-keywords))))
             (maybe-parse-env ()
               (when accept-environment-p
                 (when (lambda-section '&environment)
                   (let ((envvar (pop lambda-list)))
                     (setf (lambda-list-envvar ll) (var-or-pattern envvar)))))))
      
      ;; &whole var
      (when (lambda-section '&whole)
        (let ((wholevar (pop lambda-list)))
          (setf (lambda-list-wholevar ll) (var-or-pattern wholevar))))

      (maybe-parse-env)

      ;; required vars
      (while (in-section-p)
        (let ((var (pop lambda-list)))
          (push (var-or-pattern var) (lambda-list-reqvars ll))))
      (setf (lambda-list-reqvars ll)
            (reverse (lambda-list-reqvars ll)))

      (maybe-parse-env)
      
      ;; optional vars
      (when (lambda-section '&optional)
        (while (in-section-p)
          (push (parse-optvar (pop lambda-list))
                (lambda-list-optvars ll)))
        (setf (lambda-list-optvars ll)
              (reverse (lambda-list-optvars ll))))

      (maybe-parse-env)
      
      ;; Dotted lambda-list and &rest/&body vars. If the lambda-list
      ;; is dotted. Convert it the tail to a &rest and finish.
      (when (and lambda-list (atom lambda-list))
        (setf (lambda-list-restvar ll) lambda-list)
        (setq lambda-list nil))
      (when (find (car lambda-list) '(&body &rest))
        (pop lambda-list)
        (setf (lambda-list-restvar ll)
              (var-or-pattern (pop lambda-list))))

      (maybe-parse-env)

      ;; Keyword arguments
      (when (lambda-section '&key)
        (while (in-section-p)
          (push (parse-keyvar (pop lambda-list))
                (lambda-list-keyvars ll)))
        (setf (lambda-list-keyvars ll)
              (reverse (lambda-list-keyvars ll))))
      (when (lambda-section '&allow-other-keys)
        (setf (lambda-list-allow-other-keys ll) t))

      (maybe-parse-env)

      ;; Aux variables
      (when (lambda-section '&aux)
        (while (in-section-p)
          (push (parse-auxvar (pop lambda-list))
                (lambda-list-auxvars ll)))
        (setf (lambda-list-auxvars ll)
              (reverse (lambda-list-auxvars ll))))

      (maybe-parse-env)

      ll)))


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

(defun validate-reqvars (list n)
  (unless (listp list)
    (error 'type-error :datum list :expected-type 'list))
  (if (zerop n)
      list
      ;; Note that we don't mind if the list is an improper list.
      (let ((tail (nthcdr (1- n) list)))
        (unless (consp tail)
          (error "Too few list elements in `~S'. Expected at least ~a elements." list n))
        list)))


(defun validate-max-args (list)
  (unless (null list)
    (error "Too many elements `~S' in the lambda-list" list))
  list)

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
         ((null tail) list)
      (unless (symbolp key)
        (error "Keyword argument `~S' is not a symbol." key))
      (unless (consp (cdr tail))
        (error "Odd number of keyword arguments.")))))


(defun !expand-destructuring-bind (ll expression body)
  (let ((bindings '())
        (ignorable-vars '()))
    (labels (;; Save our GENSYMs to IGNORABLE-VARS, and we will emit
             ;; ignorable declarations for them
             (%gensym ()
               (let ((sym (gensym)))
                 (push sym ignorable-vars)
                 sym))
             ;; Return a chain of the form (CAR (CDR (CDR ... (CDR X))),
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
                 ((symbolp pattern)
                  (push `(,pattern ,form) bindings)
                  pattern)
                 ((lambda-list-p pattern)
                  (compute-bindings pattern form))))

             ;; Compute the bindings for the full LAMBDA-LIST ll
             ;; against FORM.
             (compute-bindings (ll form)
               (let ((reqvar-count (length (lambda-list-reqvars ll)))
                     (optvar-count (length (lambda-list-optvars ll)))
                     (whole (or (lambda-list-wholevar ll) (%gensym))))
                 ;; Create a binding for the whole expression
                 ;; FORM. It will match to LL, so we validate the
                 ;; number of elements on the result of FORM.
                 (compute-pbindings whole `(validate-reqvars ,form ,reqvar-count))

                 (let ((count 0))
                   ;; Required vars
                   (dolist (reqvar (lambda-list-reqvars ll))
                     (compute-pbindings reqvar (nth-chain whole count))
                     (incf count))
                   ;; Optional vars
                   (dolist (optvar (lambda-list-optvars ll))
                     (when (optvar-supplied-p-parameter optvar)
                       (compute-pbindings (optvar-supplied-p-parameter optvar)
                                          `(not (null ,(nth-chain whole count t)))))
                     (compute-pbindings (optvar-variable optvar)
                                        `(if (null ,(nth-chain whole count t))
                                             ,(optvar-initform optvar)
                                             ,(nth-chain whole count)))
                     (incf count))

                   ;; Rest-variable and keywords

                   ;; If there is a rest or keyword variable, we
                   ;; will add a binding for the rest or an
                   ;; auxiliary variable. The computations in of the
                   ;; keyword start in this variable, so we avoid
                   ;; the long tail of nested CAR/CDR operations
                   ;; each time. We also include validation of
                   ;; keywords if there is any.
                   (let* ((chain (nth-chain whole (+ reqvar-count optvar-count) t))
                          (restvar (lambda-list-restvar ll))
                          (pattern (or restvar (%gensym)))
                          (keywords (mapcar #'keyvar-keyword-name (lambda-list-keyvars ll)))
                          (rest
                            ;; Create a binding for the rest of the
                            ;; arguments. If there is keywords, then
                            ;; validate this list. If there is no
                            ;; keywords and no &rest variable, then
                            ;; validate that the rest is empty, it is
                            ;; to say, there is no more arguments
                            ;; that we expect.
                            (cond
                              (keywords (compute-pbindings pattern `(validate-keyvars ,chain ',keywords ,(lambda-list-allow-other-keys ll))))
                              (restvar  (compute-pbindings pattern chain))
                              (t        (compute-pbindings pattern `(validate-max-args ,chain))))))
                     (when (lambda-list-keyvars ll)
                       ;; Keywords
                       (dolist (keyvar (lambda-list-keyvars ll))
                         (let ((variable (keyvar-variable keyvar))
                               (keyword (keyvar-keyword-name keyvar))
                               (supplied (or (keyvar-supplied-p-parameter keyvar) (gensym))))
                           (when supplied
                             (compute-pbindings supplied `(keyword-supplied-p ,keyword ,rest)))
                           (compute-pbindings variable `(if ,supplied
                                                            (keyword-lookup ,keyword ,rest)
                                                            ,(keyvar-initform keyvar)))))))
                   ;; Aux variables
                   (dolist (auxvar (lambda-list-auxvars ll))
                     (compute-pbindings (auxvar-variable auxvar) (auxvar-initform auxvar))))

                 whole)))

      ;; Macroexpansion. Compute bindings and generate code for them
      ;; and some necessary checking.
      (compute-bindings ll expression)
      `(let* ,(reverse bindings)
         (declare (ignorable ,@ignorable-vars))
         ,@body))))

;;; Return a lambda expression for use as macro expander, from CLtL2
(defun parse-macro (name lambda-list body)
  (multiple-value-bind (body decls docstring)
      (parse-body body :declarations t :docstring t)
    (let* ((whole (gensym))
           (env (gensym))
           (ll (parse-destructuring-lambda-list lambda-list t))
           (wholevar (lambda-list-wholevar ll))
           (envvar (lambda-list-envvar ll)))
      (setf (lambda-list-wholevar ll) nil
            (lambda-list-envvar ll) nil)
      `(lambda (,whole ,env)
         ,@(when docstring (list docstring))
         ,@(unless envvar `((declare (ignore ,env))))
         (block ,name
           (let (,@(when wholevar
                     `((,wholevar ,whole)))
                 ,@(when envvar
                     `((,envvar ,env))))
             ,(!expand-destructuring-bind
               ll
               `(cdr ,whole)
               body)))))))

#+jscl
(defmacro destructuring-bind (lambda-list expression &body body)
  (!expand-destructuring-bind
   (parse-destructuring-lambda-list lambda-list)
   expression
   body))
