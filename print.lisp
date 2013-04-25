
;;; Printer

(defvar *newline* (string (code-char 10)))

#+ecmalisp
(progn
  (defun prin1-to-string (form)
    (cond
      ((symbolp form)
       (multiple-value-bind (symbol foundp)
           (find-symbol (symbol-name form) *package*)
         (if (and foundp (eq symbol form))
             (symbol-name form)
             (let ((package (symbol-package form))
                   (name (symbol-name form)))
               (concat (cond
                         ((null package) "#")
                         ((eq package (find-package "KEYWORD")) "")
                         (t (package-name package)))
                       ":" name)))))
      ((integerp form) (integer-to-string form))
      ((stringp form) (concat "\"" (escape-string form) "\""))
      ((functionp form)
       (let ((name (oget form "fname")))
         (if name
             (concat "#<FUNCTION " name ">")
             (concat "#<FUNCTION>"))))
      ((listp form)
       (concat "("
               (join-trailing (mapcar #'prin1-to-string (butlast form)) " ")
               (let ((last (last form)))
                 (if (null (cdr last))
                     (prin1-to-string (car last))
                     (concat (prin1-to-string (car last)) " . " (prin1-to-string (cdr last)))))
               ")"))
      ((arrayp form)
       (concat "#" (if (zerop (length form))
                       "()"
                       (prin1-to-string (vector-to-list form)))))
      ((packagep form)
       (concat "#<PACKAGE " (package-name form) ">"))
      (t
       (concat "#<javascript object>"))))

  (defun write-line (x)
    (write-string x)
    (write-string *newline*)
    x)

  (defun warn (string)
    (write-string "WARNING: ")
    (write-line string))

  (defun print (x)
    (write-line (prin1-to-string x))
    x))
