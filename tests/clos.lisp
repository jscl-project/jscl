;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/clos.lisp!")

(test (string= "#<standard-class T>"  (write-to-string (find-class 't))))
(test (string= "#<standard-class NULL>"  (write-to-string (find-class 'null))))

(defclass obj1 ()
  ((val :initform nil :initarg :value :reader obj-val :writer set-obj-val)))

(defmethod initialize-instance :after ((class obj1) &rest args)
  (set-obj-val 123 class))

(let ((instance (make-instance 'obj1 :value 999)))
  (test (equal 123 (slot-value instance 'val)))
  (test (equal 123 (obj-val instance))))


(defclass bugpack ()
  ((value :initform 5.5 :initarg :value)))

(let ((instance (make-instance 'bugpack :value 9.9)))
  (with-slots (value) instance
    (test (equal 9.9 value))
    (setf value 12.5)
    (test (equal 12.5 value))
    (with-slots ((bug value)) instance
      (setf bug 0.0)
      (test (equal bug 0.0)))))


;;; Workaround the problem with :accessor
(defclass something  ()
  ((name :initform nil :reader something-name)))

;;; Use (with-slots) form
(let ((ip (make-instance 'something)))
  (with-slots (name) ip
    (setf name 'ork))
  (test (equal 'ork (something-name ip))))

;;; Use (defun (setf accessor-name)) form
(defun (setf something-name) (value instance)
  (setf (slot-value instance 'name) value))

(let ((ip (make-instance 'something)))
  (setf (something-name ip) 'elf)
  (test (equal 'elf (something-name ip))))


;;;
(defclass screw () ((aaa :initform nil)
                    (bbb :initform nil)
                    (ccc :initform nil :reader screw-ccc :writer set-screw-ccc)))

(defun (setf screw-ccc) (value instance)
  (set-screw-ccc value instance))

(defmethod initialize-instance :after ((class screw) &rest args)
  (with-slots (aaa bbb) class
    (setf aaa 2018)
    (setf bbb 1009))
  (set-screw-ccc 3027 class))

(let ((ip (make-instance 'screw)))
  (test (equal t (with-slots (aaa bbb) ip
                   (and (eq aaa 2018) (eq bbb 1009)))))
  (test (equal (screw-ccc ip) 3027))
  (setf (screw-ccc ip) 1998.11)
  ;; test instance accessors
  (test (equal '(t t t)
               (with-slots ((a aaa) (b bbb)) ip
                 (setf a 22)
                 (setf b 33)
                 (list (eq a 22) (eq b 33) (eq (screw-ccc ip) 1998.11)))))
  (test (equal '(1234 abcd t)
               (let ((other (with-slots (aaa bbb) ip
                              (let ((a aaa) (b bbb))
                                (and (eq aaa 22) (eq b 33))))))
                 (with-slots ((s1 aaa)
                              (s2 bbb)) ip
                   (setf a 1234)
                   (setf b 'abcd)
                   (list a b other)))))
  ;; test what screw instance have slot's value (4321 dcba)
  (test (equal '(4321 dcba)
               (with-slots (aaa bbb (s1 aaa) (s2 bbb)) ip
                 (setf aaa 4321)
                 (setf bbb 'dcba)
                 (list s1 s2))))
  ;; test what screw instance not have nil's slots
  (test (not (equal '(nil nil nil)
                    (with-slots ((a aaa) (b bbb) (c ccc)) ip
                      (list a b c))) )))



(defclass original () ((thing :initform nil)))
(defclass mixin-1 () ((prop1 :initform nil)))
(defclass mixin-2 () ((prop2 :initform nil)))

(defclass mixt (original mixin-1 mixin-2) ())

(defmethod initialize-instance :after ((class mixt))
  (with-slots (thing prop1 prop2) class
    (setf thing 1)
    (setf prop1 2)
    (setf prop2 3)))



(let ((ip (make-instance 'mixt)))
  (with-slots (thing prop1 prop2) ip
    (test (equal '(1 2 3)
                 (progn
                   (list thing prop1 prop2))))))

(defgeneric bot-inspect (item))
(defmethod bot-inspect ((item standard-class)) (list 'standard-class))
(defmethod bot-inspect ((item integer)) (list 'built-in-class-integer))
(defmethod bot-inspect ((item hash-table)) (list 'hash-table-object))

(test (equal '(standard-class) (bot-inspect (find-class 't))))
(test (equal '(hash-table-object) (bot-inspect (make-hash-table))))
(test (equal '(built-in-class-integer) (bot-inspect 123)))


;;; test change-class rotatef psetf

;;; rotatef test
#+jscl
(let ((a 1)
      (b 2)
      (c 3)
      (d #(1 2 3)))
    (!rotatef a b c)
    (test (equal '(2 3 1) (list a b c)))
    (!rotatef a b c)
    (test (equal '(3 1 2) (list a b c)))
    (!rotatef (aref d 0) (aref d 2))
    (test (equal '(3 2 1) (jscl::vector-to-list d))))

(let* ((a '(1 2))
       (b '(3 4))
       (c '(a b))
       (d (list a b c)))
   (!rotatef (nth 0 d) (nth 2 d))
   (test (equal '((a b) (3 4) (1 2)) d)))

(defclass rectangle ()
  ((height :initform 0.0 :initarg :height)
   (width  :initform 0.0 :initarg :width)))

(defclass color-mixin ()
  ((cyan    :initform 0 :initarg :cyan)
   (magenta :initform 0 :initarg :magenta)
   (yellow  :initform 0 :initarg :yellow)))

(let ((o (make-instance 'rectangle :height 10 :width 20)))
  (test (equal 'color-mixin
               (progn
                 (change-class o 'color-mixin)
                 (class-name (class-of o)))))
  (test (equal 'standard-object
               (progn
                 (change-class o 'standard-object)
                 (class-name (class-of o))))))


;;; test sort with method
(defgeneric msort (what predicate &key key))

(defmethod msort ((what list) predicate &key key)
  (if key
      (sort what predicate :key key)
      (sort what predicate)))

(defmethod msort ((what vector) predicate &key key)
  (let ((lst (jscl::vector-to-list what)))
    (jscl::list-to-vector
     (if key
         (sort lst predicate :key key)
         (sort lst predicate)))))

(defmethod msort ((what string) predicate &key key)
  (let ((lst (jscl::vector-to-list what)))
    (apply #'jscl::concat
           (if key
               (sort lst predicate :key key)
               (sort lst predicate)))))

(test (string= "aabbccddxyz"
               (msort "cdbaxaybzcd" #'char-lessp)))

(test (equal '(9 8 7 6 5 4 3 2 1)
             (jscl::vector-to-list (msort #(1 2 3 4 5 6 7 8 9) #'>))))


;;; test from original closette-test.lisp
;;; method combination
(defclass log () ((buf :initform nil)))

(defvar ip (make-instance 'log))

(defgeneric mctest (x))

(defmethod mctest :around ((x integer))
  (with-slots ((b buf)) ip
    (push '(:around integer) b)
    (call-next-method)))

(defmethod mctest :around ((x number))
  (with-slots ((b buf)) ip
    (push  '(:around number) b)
    (call-next-method)))

(defmethod mctest :before ((x number))
  (with-slots ((b buf)) ip
    (push '(:before number) b)))


(defmethod mctest  ((x number))
  (with-slots ((b buf)) ip
    (push '(primary number) b)
    (1+ (call-next-method))))

(defmethod mctest :after ((x number))
  (with-slots ((b buf)) ip
    (push '(:after number) b)))

(defmethod mctest :before ((x t))
  (with-slots ((b buf)) ip
    (push '(:before t) b)))

(defmethod mctest  ((x t))
  (with-slots ((b buf)) ip
    (push '(primary t) b)
    100))

(defmethod mctest :after ((x t))
  (with-slots ((b buf)) ip
    (push '(:after t) b)))

(test (equal 101
             (let ((x (mctest 1)))
               x)))


(test (equal '((:around integer)(:around number)(:before number)
               (:before t)(primary number)(primary t)(:after t)
               (:after number) )
             (with-slots (buf) ip
               (reverse buf))))

;;; test's from original closette-test.lisp
(defclass position () (x y))
(defclass cad-element (position) ())
(defclass display-element (position) ())
(defclass displayable-cad-element (display-element cad-element) ())


(defun common-subclasses* (class-1 class-2)
  (intersection (subclasses* class-1) (subclasses* class-2)))

(defun all-distinct-pairs (set)
  (if (null set)
      ()
      (append (mapcar #'(lambda (rest)
                          (list (car set) rest))
                      (cdr set))
              (all-distinct-pairs (cdr set)))))


(defun has-diamond-p (class)
  (some #'(lambda (pair)
            (not (null (common-subclasses* (car pair)
                                           (cadr pair)))))
        (all-distinct-pairs (class-direct-subclasses class))))

(test (equal t (has-diamond-p (find-class 'position))))


;;; alternative's cpl

(defclass loops-class (standard-class) ())
(defclass flavors-class (standard-class) ())

(defmethod compute-class-precedence-list ((class loops-class))
  (append (remove-duplicates
           (depth-first-preorder-superclasses* class)
           :from-end nil)
          (list (find-class 'standard-object)
                (find-class 't))))

(defmethod compute-class-precedence-list ((class flavors-class))
  (append (remove-duplicates
           (depth-first-preorder-superclasses* class)
           :from-end t)
          (list (find-class 'standard-object)
                (find-class 't))))

(defun depth-first-preorder-superclasses* (class)
  (if (eq class (find-class 'standard-object))
      ()
      (cons class (mapappend #'depth-first-preorder-superclasses*
                             (class-direct-superclasses class)))))



(defclass a () ())
(defclass b () ())
(defclass c () ())
(defclass s (a b) ())
(defclass r (a c) ())
(defclass q-clos (s r) () (:metaclass standard-class))
(defclass q-loops (s r) () (:metaclass loops-class))
(defclass q-flavors (s r) () (:metaclass flavors-class))


(test (equal '(q-flavors s a b r c standard-object t)
             (mapcar (lambda (x) (class-name x))
                     (class-precedence-list (find-class 'q-flavors)))))

(test (equal '(q-loops s b r a c standard-object t)
             (mapcar (lambda (x) (class-name x)) (class-precedence-list (find-class 'q-loops)))))

(test (equal '(q-clos s r a c b standard-object t)
             (mapcar (lambda (x) (class-name x)) (class-precedence-list (find-class 'q-clos)))))





;;; EOF
