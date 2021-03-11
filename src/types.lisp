;;; -*- mode:lisp; coding:utf-8 -*-

;;; Tiny type system for JSCL
;;; @vkm
(/debug "loading types.lisp!")


(defvar *types* (make-hash-table :test #'eq))

(defvar *structures* (make-hash-table :test #'eq))

(defvar *class-table* (make-hash-table :test #'eq))

;;; another member from ccl
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun memq (item list)
    (while list
      (if (eq item (car list)) (return list))
      (setq list (cdr list))))


;;; lighweight mapcar
;;; CL-USER> (time (dotimes (i 1000) (mapcar (lambda (x) (list x)) '(1 2 3 4))))
;;; Execution took 0.032 seconds.
;;; CL-USER> (time (dotimes (i 1000) (%lmapcar (lambda (x) (list x)) '(1 2 3 4))))
;;; Execution took 0.008 seconds.
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %lmapcar (fn list)
    (let* ((ret-list (list nil))
           (temp ret-list)
           (res nil))
      (while list
        (setq res (funcall fn (car list))
              list (cdr list))
        (setf (cdr temp) (list res)
              temp (cdr temp)))
      (cdr ret-list)))
  )

;;; defstruct - internal, shortly version
(eval-when (:compile-toplevel :load-toplevel :execute)
  (defun %struct-generator (kind options slots)
    (let* ((constructor (cadr (assoc :constructor options)))
           (keys (cadr (assoc :form options)))
           (names (mapcar (lambda (x) (if (consp x) (car x) x)) slots))
           (option (if keys keys '&optional))
           (maker)
           (makname (if constructor
                        (intern (symbol-name constructor))
                        (intern (concat "%MAKE-" (symbol-name `,kind)))))
           (getter)
           (position 0)
           (q))
      (unless (memq option '(&key &optional)) (error "Something went wrong: ~a." options))
      (setq maker
            `(defun ,makname (,option ,@slots)  (list ,@names)))
      (dolist (it names)
        (setq getter (intern (concat (symbol-name kind) "-" (symbol-name it))))
        (push `(defun ,getter (storage)(nth ,position storage)) q)
        (push `(defun (setf ,getter) (value storage)
                       (rplaca (nthcdr ,position storage) value) value)
                    q)
        (incf position))
      (values maker (reverse q)))))

(defmacro %i-struct (name-options &rest slots)
  (let* ((name-options (ensure-list name-options))
         (name (car name-options))
         (options (rest name-options)))
    (multiple-value-bind (maker accessors) (%struct-generator name options slots)
      `(progn
         ,maker
         ,@accessors))))

;;; EOF

