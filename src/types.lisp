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

;;; EOF

