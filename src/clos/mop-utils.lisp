;;; -*- mode:lisp; coding:utf-8 -*-


;;; mop object printer
;;;
;;; JSCL compilation mode :both
;;;

(defun mop-class-name (class)
  (std-slot-value class 'name))

(defun mop-class-of (x)
  (if (std-instance-p x)
      (std-instance-class x)
      (built-in-class-of x)))


(defun mop-object-slots (slot)
  (unless (arrayp slot)
    (error "its not slot"))
  (let* ((size (length slot))
         (place)
         (result))
    (dotimes (idx size)
      (setq place (aref slot idx))
      (cond ((std-instance-p place)
             (push (mop-object-class-name place) result))
            ((consp place)
             (push "(..) " result))
            ((arrayp place)
             (push "#(..) " result))
            ((or (numberp place)
                 (symbolp place))
             (push (concat (string place) " ") result))
            ((stringp place)
             (push (concat place " ") result))
            (t (push "@ " result))))
    (apply 'concat (reverse result))))

(defun mop-object-class-name (place)
  (concat (string (mop-class-name (mop-class-of place)))
          " "
          (string (mop-class-name (mop-class-of (mop-class-of place)))) ))

(defun mop-object-struct-slots (form)
  (let* ((slots (slot-value (mop-class-of form) 'direct-slots))
       (slot-values (std-instance-slots form))
       (num-slots (length slots))
       (result ""))
    (dotimes (idx num-slots result)
      (setq result (concat result ":" ))
      (setq result (concat result (getf (nth idx slots) :name)))
      (setq result (concat result " " ))
      (setq result (concat result (write-to-string (aref slot-values idx))))
      (when (<= idx (- num-slots 2))      ; dont print final space
        (setq result (concat result " " ))))))

;;; mop object printer
(defun mop-object-printer (form stream)
  (let ((res (case (mop-class-name (mop-class-of form))
               (standard-class
                (concat "#<STANDARD-CLASS " (write-to-string (mop-class-name form)) ">"))
               (standard-generic-function
                (concat "#<STANDARD-GENERIC-FUNCTION " (write-to-string (generic-function-name form)) ">"))
               (standard-method
                (concat "#<STANDARD-METHOD " (write-to-string (generic-function-name (method-generic-function form)))
                        (write-to-string (generate-specialized-arglist form)) ">"))
               (otherwise
                 (case (mop-class-name (mop-class-of (mop-class-of form)))
                   (structure-class (concat "#S("
                                      (write-to-string (mop-class-name (mop-class-of form)))
                                      " " (mop-object-struct-slots form) ")"))
                   (otherwise
                     (concat "#<INSTANCE " (write-to-string (mop-class-name (mop-class-of form))) " "
                       (mop-object-slots (std-instance-slots form)) ">")))))))
    (simple-format stream res)))




;;; EOF
