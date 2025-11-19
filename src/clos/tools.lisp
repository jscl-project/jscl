;;; -*- mode:lisp; coding:utf-8 -*-



;;; debug tools
;;; From closette-test.lisp

(defun subclasses* (class)
    (remove-duplicates
     (cons class
           (mapappend #'subclasses*
                      (class-direct-subclasses class)))))

;;; (export '(subclasses))
(defun subclasses (class &optional names)
    (let ((result (remove class (subclasses* class))))
        (if names (mapcar #'class-name result)
            result)))

;;; (export '(in-order-p))
(defun in-order-p (c1 c2)
    (flet ((in-order-at-subclass-p (sub)
               (let ((cpl (class-precedence-list sub)))
                   (not (null (member c2 (cdr (member c1 cpl))))))))
        (or (eq c1 c2)
            (every #'in-order-at-subclass-p
                   (intersection (subclasses* c1)
                                 (subclasses* c2))))))

;;; display defclass

(export '(display-defclass) 'jscl)

(defun display-defclass (class-name)
    (printer-defclass (generate-defclass (find-class class-name)))
    (values))



(defun printer-defclass (expr)
    (print* 'defclass (first expr))
    (print* " " (second expr))
    (dolist (it (car (nthcdr 2 expr)))
        (print* "  " it)))


(defun generate-defclass (class)
    `(,(class-name class)
      ,(mapcar #'class-name (cdr (class-precedence-list class)))
      ,(mapcar #'(lambda (slot)
                     (generate-inherited-slot-specification class slot))
               (class-slots class))))

(defun generate-slot-specification (slot)
    `(,(slot-definition-name slot)
      ,@(when (slot-definition-initfunction slot)
            `(:initform ,(slot-definition-initform slot)))
      ,@(when (slot-definition-initargs slot)
            (mapappend #'(lambda (initarg) `(:initarg ,initarg))
                       (slot-definition-initargs slot)))
      ,@(unless (eq (slot-definition-allocation slot) ':instance)
            `(:allocation ,(slot-definition-allocation slot)))
      ,@(when (slot-definition-readers slot)
            (mapappend #'(lambda (reader) `(:reader ,reader))
                       (slot-definition-readers slot)))
      ,@(when (slot-definition-writers slot)
            (mapappend #'(lambda (writer) `(:writer ,writer))
                       (slot-definition-writers slot)))))

(defun generate-inherited-slot-specification (class slot)
    (let* ((source-class
             (find-if #'(lambda (superclass)
                            (find (slot-definition-name slot)
                                  (class-direct-slots superclass)
                                  :key #'slot-definition-name))
                      (class-precedence-list class)))
           (generated-slot-spec
             (generate-slot-specification slot)))
        (if (eq source-class class)
            generated-slot-spec
            (append generated-slot-spec
                    `(:inherited-from ,(class-name source-class))))))

;;; display generate-defgeneric
(defun generate-defgeneric (gf)
    `(defgeneric ,(generic-function-name gf)
         ,(generic-function-lambda-list gf)))

(export '(display-defgeneric) 'jscl)
(defun display-defgeneric (arg)
    (let ((gf (if (symbolp arg) (find-generic-function arg) arg)))
        (print (generate-defgeneric gf))
        (terpri)
        (values)))


;;; display-generic-function
(defun generate-defmethod (method &key show-body)
    `(defmethod ,(generic-function-name (method-generic-function method))
         ,@(method-qualifiers method)
         ,(generate-specialized-arglist method)
         ,@(when show-body (list (method-body method)))))

(defun generate-specialized-arglist (method)
    (let* ((specializers (method-specializers method))
           (lambda-list (method-lambda-list method))
           (number-required (length specializers)))
        (append (mapcar #'(lambda (arg class)
                              (if (eq class (find-class 't))
                                  arg
                                  `(,arg ,(class-name class))))
                        (subseq lambda-list 0 number-required)
                        specializers)
                (subseq lambda-list number-required))))


(defun generate-specialized-arglist-1 (specializers lambda-list)
    (let ((number-required (length specializers)))
        (append (mapcar #'(lambda (arg class)
                              (if (eq class (find-class 't))
                                  arg
                                  `(,arg ,(class-name class))))
                        (subseq lambda-list 0 number-required)
                        specializers)
                (subseq lambda-list number-required))))

(export '(display-generic-function) 'jscl)
(defun display-generic-function (gf-name &key show-body)
    (display-defgeneric gf-name)
    (dolist (method (generic-function-methods (find-generic-function gf-name)))
        (print (generate-defmethod method :show-body show-body)))
    (values))


;;; all-generic
(defun all-generic-functions (&key names)
    (let ((result))
        (setq result
              (remove-duplicates
               (mapappend #'class-direct-generic-functions
                          (subclasses* (find-class 't)))))
        (if names
            (mapcar #'generic-function-name result)
            result)))


(defun class-direct-generic-functions (class)
    (remove-duplicates
     (mapcar #'method-generic-function
             (class-direct-methods class))))


;;; relevant generic function
(defun reader-method-p (method)
    (let ((specializers (method-specializers method)))
        (and (= (length specializers) 1)
             (member (generic-function-name (method-generic-function method))
                     (mapappend #'slot-definition-readers
                                (class-direct-slots (car specializers)))
                     :test #'equal))))

(defun writer-method-p (method)
    (let ((specializers (method-specializers method)))
        (and (= (length specializers) 2)
             (member (generic-function-name (method-generic-function method))
                     (mapappend #'slot-definition-writers
                                (class-direct-slots (cadr specializers)))
                     :test #'equal))))

(defun relevant-generic-functions (class ceiling &key elide-accessors-p (names nil))
    (let ((fclass (if (symbolp class) (find-class class) class))
          (fceiling (if (symbolp ceiling) (find-class ceiling) ceiling))
          (result))
        (setq result
              (remove-duplicates
               (mapcar #'method-generic-function
                       (remove-if
                        #'(lambda (m)
                              (and elide-accessors-p
                                   (or (reader-method-p m)
                                       (writer-method-p m))))
                        (mapappend #'class-direct-methods
                                   (set-difference (class-precedence-list fclass)
                                                   (class-precedence-list fceiling)))))))
        (if names
            (mapcar #'generic-function-name result)
            result)))

;;; EOF
