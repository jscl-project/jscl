;;;
;;; MOP Utilities & kludges
;;;


;;; kludge for (defun (setf name) ...) syntax
(defun setf-function-symbol (spec)
  (if (consp spec)
      (let ((print-name (write-to-string spec)))
        (intern print-name
                (symbol-package (cadr spec))))
      spec))


;;; kludge for defsetf generic accessor
;;; now not used
(defun make-setf-pair (access-fn update-fn)
  (PUSH (CONS access-fn
              (LAMBDA (&REST arguments)
                (DESTRUCTURING-BIND (&REST ARGS) arguments
                  (LET ((G!NEW (GENSYM))
                        (G!ARGS (MAPCAR (LAMBDA (S)(GENSYM)) ARGS)))
                    (VALUES
                     G!ARGS
                     ARGS
                     (LIST G!NEW)
                     (CONS update-fn
                           (APPEND G!ARGS (LIST G!NEW)))
                     (CONS access-fn  G!ARGS))))))
        JSCL::*SETF-EXPANDERS*)
  (values))



(defun get-keyword-from (args key &optional default)
  (let ((val (getf args key)))
    (if val val default)))


;;; push-on-end is like push except it uses the other end:
;;; from original closette.lisp
(defmacro push-on-end (value location)
  `(setf ,location (nconc ,location (list ,value))))

;;; (setf getf*) is like (setf getf) except that it always changes the list,
;;; which must be non-nil.
;;; from original closette.lisp
(defun (setf getf*) (new-value plist key)
  (block body
    (do ((x plist (cddr x)))
        ((null x))
      (when (eq (car x) key)
        (setf (car (cdr x)) new-value)
        (return-from body new-value)))
    (push-on-end key plist)
    (push-on-end new-value plist)
    new-value))



;;; mapappend is like mapcar except that the results are appended together:
;;; from original closette.lisp
(defun mapappend (fun &rest args)
  (if (some #'null args)
      ()
      (append (apply fun (mapcar #'car args))
              (apply #'mapappend fun (mapcar #'cdr args)))))

;;; mapplist is mapcar for property lists:
;;; from original closette.lisp
(defun mapplist (fun x)
  (if (null x)
      ()
      (cons (funcall fun (car x) (cadr x))
            (mapplist fun (cddr x)))))

;;; find-if-not
;;; its standard function
(defun !find-if-not (predicate sequence &key key)
  (find-if (complement predicate) sequence :key key))


;;; Dumb release standard macros psetf & rotatef
;;;
;;; Warning! Not use with (incf/decf) !
;;;
(defmacro !psetf (&rest pairs)
  (when pairs
    (when (null (cdr pairs))
      (error "PSETF odd arguments"))
    (let ((g!val (gensym)))
      `(let ((,g!val ,(cadr pairs)))
         (!psetf ,@(cddr pairs))
         (setf ,(car pairs) ,g!val)
         nil))))


(defun %rotatef-args-parser (args)
  (let ((res))
    (when args
      (dolist (it args)
        (push it res)
        (push it res))
      (push (car args) res)
      (setq res (reverse res))
      (setf (car res) '!psetf))
    res ))


(defmacro !rotatef (&rest assigments)
  `(progn
     ,(%rotatef-args-parser `,assigments) nil))




;;; EOF
