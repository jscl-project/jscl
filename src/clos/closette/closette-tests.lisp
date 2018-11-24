;;;-*-Mode:LISP; Package: CLOSETTE; Base:10; Syntax:Common-lisp -*-

(in-package 'closette :use '(lisp))

;;; CLOSette tests

;;; From chapter 1

(defclass rectangle ()
     ((height :initform 0.0 :initarg :height)
      (width  :initform 0.0 :initarg :width)))

(defclass color-mixin ()
     ((cyan    :initform 0 :initarg :cyan)
      (magenta :initform 0 :initarg :magenta)
      (yellow  :initform 0 :initarg :yellow)))

(defclass color-rectangle (color-mixin rectangle)
     ((clearp :initform (y-or-n-p "But is it transparent?")
              :initarg :clearp :accessor clearp)))

(defgeneric paint (x))

(defmethod paint ((x rectangle))                ;Method #1
  (vertical-stroke (slot-value x 'height)
                   (slot-value x 'width)))

(defmethod paint :before ((x color-mixin))      ;Method #2
  (set-brush-color (slot-value x 'cyan)
                   (slot-value x 'magenta)
                   (slot-value x 'yellow)))

(defmethod paint ((x color-rectangle))          ;Method #3
  (unless (clearp x) (call-next-method)))

(setq door
      (make-instance 'color-rectangle
        :width 38 :height 84 :cyan 60 :yellow 55 :clearp nil))

(defun vertical-stroke (x y) (declare (ignore x y)) (values))
(defun set-brush-color (x y z) (declare (ignore x y z)) (values))

(paint door)

;;; test method combination

(defgeneric mctest (x))
(defmethod mctest :around ((x integer))
  (format t "(:around integer)")
  (call-next-method))
(defmethod mctest :around ((x number))
  (format t "(:around number)")
  (call-next-method))
(defmethod mctest :before ((x number))
  (format t "(:before number)"))
(defmethod mctest  ((x number))
  (format t "(primary number)")
  (1+ (call-next-method)))
(defmethod mctest :after ((x number))
  (format t "(:after number)"))
(defmethod mctest :before ((x t))
  (format t "(:before t)"))
(defmethod mctest  ((x t))
  (format t "(primary t)")
  100)
(defmethod mctest :after ((x t))
  (format t "(:after t)"))

(mctest 1)
#|(:around integer)(:around number)(:before number)(:before t)
  (primary number)(primary t)(:after t)(:after number)
101|#

;;; following chapter 1

(pprint (macroexpand
 '(defclass color-rectangle (color-mixin rectangle)
     ((clearp :initform (y-or-n-p "But is it transparent?")
              :initarg :clearp :accessor clearp)))))
#|(ensure-class 'color-rectangle
              :direct-superclasses
              (list (find-class 'color-mixin) (find-class 'rectangle))
              :direct-slots
              (list
               (list :name 'clearp :initform
                     '(y-or-n-p "But is it transparent?")
                     :initfunction
                     (function
                      (lambda nil (y-or-n-p "But is it transparent?")))
                     :initargs
                     '(:clearp)
                     :readers
                     '(clearp)
                     :writers
                     '((setf clearp)))))
|#


;;; original compute-slots

(defun original-compute-slots (class)
  (mapcar #'(lambda (slot)
              (make-effective-slot-definition
                :name (slot-definition-name slot)
                :initform (slot-definition-initform slot)
                :initfunction (slot-definition-initfunction slot)
                :initargs (slot-definition-initargs slot)))
          (remove-duplicates
            (mapappend #'class-direct-slots
                       (class-precedence-list class))
            :key #'slot-definition-name
            :from-end t)))

(equal (original-compute-slots (find-class 'color-rectangle))
       (compute-slots (find-class 'color-rectangle)))
#|T|#

(pprint (macroexpand
 '(defgeneric paint (x))))
#|(ensure-generic-function 'paint :lambda-list '(x))|#

(pprint (macroexpand
 '(defmethod paint :before ((x color-mixin))    ; Method#2
  (set-brush-color (slot-value x 'cyan)
                   (slot-value x 'magenta)
                   (slot-value x 'yellow)))))
#|(ensure-method (find-generic-function 'paint)
               :lambda-list
               '(x)
               :qualifiers
               '(:before)
               :specializers
               (list (find-class 'color-mixin))
               :body
               '(block paint
                       (set-brush-color (slot-value x 'cyan)
                                        (slot-value x 'magenta)
                                        (slot-value x 'yellow)))
               :environment
               (top-level-environment))
|#


(find-generic-function 'clearp)
#|#<Closette:Standard-Generic-Function CLOSETTE::CLEARP 16060700>|#

(clearp (make-instance 'color-rectangle :clearp t))
#|T|#

;;; change-class

(setq o1 (make-instance 'rectangle :height 10 :width 20))
(describe-object o1 *standard-output*)
#| A CLOS object
Printed representation: #<Rectangle 16166710>
Class: #<Standard-Class rectangle 15253764>
Structure 
    height <- 10
    width <- 20
|#

(change-class o1 'color-mixin)
(describe-object o1 *standard-output*)
#| A CLOS object
Printed representation: #<Color-Mixin 16166710>
Class: #<Standard-Class color-mixin 15274440>
Structure 
    cyan <- 0
    magenta <- 0
    yellow <- 0
|#
(change-class o1 'standard-object)
(describe-object o1 *standard-output*)
#| A CLOS object
Printed representation: #<Standard-Object 16166710>
Class: #<Standard-Class standard-object 15071700>
Structure
|#

(sub-specializer-p (find-class 'color-mixin)
                   (find-class 'rectangle)
                   (find-class 'color-rectangle))
#|T|#
(sub-specializer-p (find-class 'rectangle)
                   (find-class 'rectangle)
                   (find-class 'color-rectangle))
#|NIL|#

;;; exercise

(defvar all-tables (make-hash-table :test #'eq))

(defun classes-to-applicable-methods-table (gf)
  (let ((table (gethash gf all-tables nil)))
    (unless table
      (setq table (make-hash-table :test #'equal))
      (setf (gethash gf all-tables) table))
    table))

(defun better-apply-generic-function (gf args)
  (let* ((required-classes
            (mapcar #'class-of (required-portion gf args)))
         (applicable-methods
            (or (gethash required-classes
                         (classes-to-applicable-methods-table gf)
                         nil)
                (setf (gethash required-classes
                               (classes-to-applicable-methods-table gf))
                      (compute-applicable-methods-using-classes
                        gf required-classes)))))
    (if (null applicable-methods)
        (error "No matching method for the~@
                generic function ~S,~@
                when called with arguments ~:S." gf args)
        (apply-methods gf args applicable-methods))))

(better-apply-generic-function 
 (find-generic-function 'make-instance)
 (list 'rectangle))

;;; From chapter 2:

(defun subclasses* (class)
  (remove-duplicates
    (cons class 
          (mapappend #'subclasses* 
                     (class-direct-subclasses class)))))

(defun subclasses (class) (remove class (subclasses* class)))

(subclasses (find-class 'rectangle))
#|(#<Standard-Class COLOR-RECTANGLE>)|#

(defvar my-classes 
  (mapcar #'class-name
          (subclasses (find-class 'standard-object))))

my-classes
#|(color-mixin rectangle
             color-rectangle
             standard-method
             standard-generic-function
             standard-class)
|#


(defun display-defclass (class-name)
  (pprint (generate-defclass (find-class class-name)))
  (values))

(defun generate-defclass (class)
  `(defclass ,(class-name class)
     ,(mapcar #'class-name (class-direct-superclasses class))
     ,(mapcar #'generate-slot-specification (class-direct-slots class))))

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

(display-defclass 'rectangle)
#|(DEFCLASS RECTANGLE (STANDARD-OBJECT)
     ((HEIGTH :INITFORM 0.0 :INITARG :HEIGTH)
      (WIDTH :INITFORM 0.0 :INITARG :WIDTH)))|#

(display-defclass 't)
#|(DEFCLASS T () ())|#

(display-defclass 'standard-object)
#|(DEFCLASS STANDARD-OBJECT (T) ()) |#

(defun display-defclass* (class-name)
  (pprint (generate-defclass* (find-class class-name)))
  (values))

(defun generate-defclass* (class)
  `(defclass* ,(class-name class)
     ,(mapcar #'class-name (cdr (class-precedence-list class)))
     ,(mapcar #'(lambda (slot)
                  (generate-inherited-slot-specification class slot))
              (class-slots class))))

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

(display-defclass* 'color-rectangle)
#|(defclass* color-rectangle
           (color-mixin rectangle standard-object t)
           ((clearp :initform
                    (y-or-n-p "But is it transparent?")
                    :initarg
                    :clearp)
            (cyan :initform
                  0
                  :initarg
                  :cyan
                  :inherited-from
                  color-mixin)
            (magenta :initform
                     0
                     :initarg
                     :magenta
                     :inherited-from
                     color-mixin)
            (yellow :initform
                    0
                    :initarg
                    :yellow
                    :inherited-from
                    color-mixin)
            (height :initform
                    0.0
                    :initarg
                    :height
                    :inherited-from
                    rectangle)
            (width :initform
                   0.0
                   :initarg
                   :width
                   :inherited-from
                   rectangle)))
|#

(defclass color-chart (rectangle color-mixin) ())

(mapcar #'class-name (class-precedence-list
                           (find-class 'color-rectangle)))
#|(COLOR-RECTANGLE COLOR-MIXIN RECTANGLE STANDARD-OBJECT T)|#

(mapcar #'class-name (class-precedence-list
                           (find-class 'color-chart)))
#|(COLOR-CHART RECTANGLE COLOR-MIXIN STANDARD-OBJECT T)|#

(defun in-order-p (c1 c2)
  (flet ((in-order-at-subclass-p (sub)
           (let ((cpl (class-precedence-list sub)))
              (not (null (member c2 (cdr (member c1 cpl))))))))
    (or (eq c1 c2)
        (every #'in-order-at-subclass-p
               (intersection (subclasses* c1)
                             (subclasses* c2))))))

(in-order-p (find-class 'color-mixin)
                (find-class 'rectangle))
#|NIL|#

(in-order-p (find-class 'standard-object)
                (find-class 't))
#|T|#

(defclass position ()
     (x y))
(defclass cad-element (position) ())
(defclass display-element (position) ())
(defclass displayable-cad-element (display-element cad-element) ())

(defun has-diamond-p (class)
  (some #'(lambda (pair)
            (not (null (common-subclasses* (car pair)
                                           (cadr pair)))))
        (all-distinct-pairs (class-direct-subclasses class))))

(defun common-subclasses* (class-1 class-2)
  (intersection (subclasses* class-1) (subclasses* class-2)))

(defun all-distinct-pairs (set)
  (if (null set)
      ()
      (append (mapcar #'(lambda (rest)
                          (list (car set) rest)) 
                      (cdr set))
              (all-distinct-pairs (cdr set)))))

(has-diamond-p (find-class 'position))
#|t|#

(has-diamond-p (find-class 'rectangle))
#|nil|#

(defun generate-defgeneric (gf)
  `(defgeneric ,(generic-function-name gf)
     ,(generic-function-lambda-list gf)))

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

(defun display-generic-function (gf-name &key show-body)
  (display-defgeneric gf-name)
  (dolist (method (generic-function-methods (find-generic-function gf-name)))
    (pprint (generate-defmethod method :show-body show-body)))
  (values))

(defun display-defgeneric (gf-name)
  (pprint (generate-defgeneric (find-generic-function gf-name)))
  (values))


(display-generic-function 'paint :show-body t)
#|(DEFGENERIC PAINT (X))
(DEFMETHOD PAINT ((X RECTANGLE))
  (BLOCK PAINT
   (VERTICAL-STROKE (SLOT-VALUE X 'HEIGHT)
                    (SLOT-VALUE X 'WIDTH))))
(DEFMETHOD PAINT :BEFORE ((X COLOR-MIXIN))
  (BLOCK PAINT
   (SET-BRUSH-COLOR (SLOT-VALUE X 'CYAN)
                    (SLOT-VALUE X 'MAGENTA)
                    (SLOT-VALUE X 'YELLOW))))
(DEFMETHOD PAINT ((X COLOR-RECTANGLE))    
  (BLOCK PAINT
    (UNLESS (CLEARP X) (CALL-NEXT-METHOD))))
|#

(display-generic-function 'clearp :show-body t)
#|(DEFGENERIC CLEARP (OBJECT))
(DEFMETHOD CLEARP ((OBJECT COLOR-RECTANGLE))
  (SLOT-VALUE OBJECT 'CLEARP)) |#

(display-generic-function '(setf clearp) :show-body t)
#|(DEFGENERIC (SETF CLEARP) (NEW-VALUE OBJECT))
(DEFMETHOD (SETF CLEARP) ((OBJECT COLOR-RECTANGLE))
  (SETF (SLOT-VALUE OBJECT 'CLEARP) NEW-VALUE)) |#

(display-generic-function 'shared-initialize)
#|(DEFGENERIC SHARED-INITIALIZE (INSTANCE SLOT-NAMES &KEY))
(DEFMETHOD SHARED-INITIALIZE ((INSTANCE STANDARD-OBJECT)
                              SLOT-NAMES &REST ALL-KEYS))|#

(defun all-generic-functions ()
  (remove-duplicates 
    (mapappend #'class-direct-generic-functions
               (subclasses* (find-class 't)))))

(defun class-direct-generic-functions (class)
  (remove-duplicates 
     (mapcar #'method-generic-function
             (class-direct-methods class))))

(mapcar #'generic-function-name (all-generic-functions))
#|(CLEARP PAINT UPDATE-INSTANCE-FOR-DIFFERENT-CLASS
REINITIALIZE-INSTANCE INITIALIZE-INSTANCE CHANGE-CLASS
MAKE-INSTANCE (SETF CLEARP) SHARED-INITIALIZE
PRINT-OBJECT \ldots)|#

(defun relevant-generic-functions (class ceiling)
  (remove-duplicates
    (mapcar #'method-generic-function
      (mapappend #'class-direct-methods
        (set-difference (class-precedence-list class)
                        (class-precedence-list ceiling))))))

(relevant-generic-functions (find-class 'color-rectangle)
                            (find-class 'standard-object))
#|(#<Standard-Generic-Function paint 16031414>
 #<Standard-Generic-Function (setf clearp) 16021300>
 #<Standard-Generic-Function clearp 16016120>)|#

(defun display-effective-method (gf args)
  (let ((applicable-methods
           (compute-applicable-methods-using-classes
             gf (mapcar #'class-of (required-portion gf args)))))
    (pprint
      (if (null applicable-methods)
          '(error "No applicable methods.")
          (generate-effective-method gf applicable-methods)))))

(defun generate-effective-method (gf methods)
  (declare (ignore gf))
  (labels ((generate-method (method)
             `(method ,@(cdr (generate-defmethod
                              method :show-body t))))
           (generate-call-method (method next-methods)
             `(call-method
                ,(generate-method method)
                ,(mapcar #'generate-method next-methods))))
    (let ((primaries (remove-if-not #'primary-method-p methods))
          (befores (remove-if-not #'before-method-p methods))
          (afters (remove-if-not #'after-method-p methods)))
      (if (null primaries)
          '(error "No primary method")
          `(progn
             ,@(mapcar
                 #'(lambda (method)
                     (generate-call-method method ()))
                 befores)
             (multiple-value-prog1
               ,(generate-call-method (car primaries)
                                      (cdr primaries))
               ,@(mapcar
                   #'(lambda (method)
                       (generate-call-method method ()))
                   (reverse afters))))))))


(display-effective-method (find-generic-function 'paint)
                          (list (make-instance 'color-rectangle 
                                               :clearp nil)))
#|(progn
 (call-method
  (method paint
          :before
          ((x color-mixin))
          (block paint
                 (set-brush-color (slot-value x 'cyan)
                                  (slot-value x 'magenta)
                                  (slot-value x 'yellow))))
  nil)
 (multiple-value-prog1
  (call-method
   (method paint
           ((x color-rectangle))
           (block paint (unless (clearp x) (call-next-method))))
   ((method paint
            ((x rectangle))
            (block paint
                   (vertical-stroke (slot-value x 'height)
                                    (slot-value x 'width))))))))
|#
(display-effective-method (find-generic-function 'paint)
                          (list (make-instance 'rectangle)))
#|(progn
 (multiple-value-prog1
  (call-method
   (method paint
           ((x rectangle))
           (block paint
                  (vertical-stroke (slot-value x 'height)
                                   (slot-value x 'width))))
   nil)))
|#

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

(defun relevant-generic-functions (class ceiling &key elide-accessors-p)
  (remove-duplicates
    (mapcar #'method-generic-function
      (remove-if #'(lambda (m)
                     (and elide-accessors-p
                          (or (reader-method-p m)
                              (writer-method-p m))))
        (mapappend #'class-direct-methods
          (set-difference (class-precedence-list class)
                          (class-precedence-list ceiling)))))))
(relevant-generic-functions (find-class 'color-rectangle)
                            (find-class 'standard-object)
                            :elide-accessors-p 't)
#|(#<Standard-Generic-Function paint 15316224>)|#


(defclass shape () ())
(defclass circle (shape) ())
(defclass triangle (shape) ())
(defclass pentagon (shape) ())

(defclass label-type () ())
(defclass top-labeled (label-type) ())
(defclass center-labeled (label-type) ())
(defclass bottom-labeled (label-type) ())

(defclass color () ())
(defclass fuschia (color) ())
(defclass orange  (color) ())
(defclass magenta (color) ())

(defun make-programmatic-instance (superclass-names &rest initargs)
  (apply #'make-instance
         (find-programmatic-class
           (mapcar #'find-class superclass-names))
         initargs))

(defun find-programmatic-class (superclasses)
  (let ((class (find-if
                 #'(lambda (class)
                     (equal superclasses
                            (class-direct-superclasses class)))
                 (class-direct-subclasses (car superclasses)))))
    (if class
        class
        (make-programmatic-class superclasses))))

(defun make-programmatic-class (superclasses)
  (make-instance 'standard-class
    :name (mapcar #'class-name superclasses)
    :direct-superclasses superclasses
    :direct-slots ()))

(make-programmatic-instance '(circle orange top-labeled)
                            :title "Color Wheel"
                            :radius 10)
#|#<(Circle Orange Top-Labeled) 16023764>|#

(class-direct-subclasses (find-class 'circle))
#|(#<Standard-Class (circle orange top-labeled) 16021350>)|#

(setq i1 (make-programmatic-instance
              '(circle orange top-labeled))
          i2 (make-programmatic-instance
              '(circle magenta bottom-labeled))
          i3 (make-programmatic-instance
              '(circle orange top-labeled)))

(class-direct-subclasses (find-class 'circle))
#|(#<Standard-Class (circle magenta bottom-labeled) 16043060>
 #<Standard-Class (circle orange top-labeled) 16021350>)|#

;;; From chapter 3

(defclass counted-class (standard-class)
     ((counter :initform 0)))

(setf (find-class 'counted-rectangle)
          (make-instance 'counted-class
            :name 'counted-rectangle
            :direct-superclasses (list (find-class 'rectangle))
            :direct-slots ()))

(class-of (find-class 'rectangle))
#|#<Standard-Class STANDARD-CLASS 12505420>|#

(class-of (find-class 'counted-rectangle))
#|#<Standard-Class COUNTED-CLASS 69547893> |#

#|(slot-value (find-class 'rectangle) 'counter)
Error: The slot COUNTER is missing from the class 
#<Standard-Class STANDARD-CLASS 15501664>.|#

(slot-value (find-class 'counted-rectangle) 'counter)
#|0|#

(defmethod make-instance :after ((class counted-class) &rest all-keys)
  (incf (slot-value class 'counter)))

(slot-value (find-class 'counted-rectangle) 'counter)
#|0|#
(make-instance 'counted-rectangle)
(slot-value (find-class 'counted-rectangle) 'counter)
#|1|#

(pprint (macroexpand
'(defclass counted-rectangle (rectangle)
     ()
  (:metaclass counted-class))))
#|(ENSURE-CLASS 'COUNTED-RECTANGLE
              :DIRECT-SUPERCLASSES
              (LIST (FIND-CLASS 'RECTANGLE))
              :DIRECT-SLOTS
              (LIST)
              :METACLASS
              (FIND-CLASS 'COUNTED-CLASS))|#


(print-object (find-class 'counted-rectangle) *standard-output*)
#|#<Closette::Counted-Class CLOSETTE::COUNTED-RECTANGLE 16252370>|#

(print-object (find-class 'rectangle) *standard-output*)
#|#<Closette:Standard-Class CLOSETTE::RECTANGLE 15730444>|#

;;; alternative cpls

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

(pprint (class-precedence-list (find-class 'q-flavors)))
#|(q-flavors s a b r c standard-object t)|#

(pprint (class-precedence-list (find-class 'q-loops)))
#|(q-loops s b r a c standard-object t)|#

(pprint (class-precedence-list (find-class 'q-clos)))
#|(q-clos s r a c b standard-object t)|#

(defclass vanilla-flavor () ())

(defmethod initialize-instance :around ((class flavors-class)
                                        &rest all-keys
                                        &key direct-superclasses)
  (apply #'call-next-method
         class
         :direct-superclasses (or direct-superclasses
                                  (list (find-class 'vanilla-flavor)))
         all-keys))

(defclass flavors-test () () (:metaclass flavors-class))
(pprint (class-precedence-list (find-class 'flavors-test)))
#|(#<Flavors-Class flavors-test 16222110>
 #<Standard-Class vanilla-object 16213600>
 #<Standard-Class standard-object 15075604>
 #<Standard-Class t 15060104>)|#

;;; attributes

(defclass attributes-class (standard-class) ())

(defun slot-definition-attributes (slot)
  (getf slot ':attributes ()))
(defun (setf slot-definition-attributes) (new-value slot)
  (setf (getf* slot ':attributes) new-value))

(defmethod compute-effective-slot-definition ((class attributes-class)
                                              direct-slots)
  (let ((normal-slot (call-next-method)))
    (setf (slot-definition-attributes normal-slot)
          (remove-duplicates
            (mapappend #'slot-definition-attributes
                       direct-slots)))
    normal-slot))

(defmethod compute-slots ((class attributes-class))
  (let ((normal-slots (call-next-method)))
    (flet ((initial-attribute-alist (slots)
             (mapcar
               #'(lambda (slot)
                   (cons (slot-definition-name slot)
                         (mapcar #'(lambda (attr) (cons attr nil))
                                 (slot-definition-attributes slot))))
               slots)))
      (let ((alist (initial-attribute-alist normal-slots)))
        (cons (make-effective-slot-definition
                :name 'all-attributes
                :initform alist
                :initfunction #'(lambda () alist))
              normal-slots)))))

(defun slot-attribute (instance slot-name attribute)
  (cdr (slot-attribute-bucket instance slot-name attribute)))

(defun (setf slot-attribute) (new-value instance slot-name attribute)
  (setf (cdr (slot-attribute-bucket
               instance slot-name attribute))
        new-value))

(defun slot-attribute-bucket (instance slot-name attribute)
  (let* ((all-buckets (slot-value instance 'all-attributes))
         (slot-bucket (assoc slot-name all-buckets)))
    (unless slot-bucket
      (error "The slot named ~A of ~S has no attributes."
             slot-name instance))
    (let ((attr-bucket (assoc attribute (cdr slot-bucket))))
      (unless attr-bucket
        (error "The slot named ~A of ~S has no attribute~@
                named ~A." slot-name instance attribute))
      attr-bucket)))

(defclass credit-rating ()
     ((level :attributes (date-set time-set)))
  (:metaclass attributes-class))

(setq cr (make-instance 'credit-rating))
(slot-attribute cr 'level 'date-set)
#|NIL|#
(setf (slot-attribute cr 'level 'date-set) "12/15/90")
(slot-attribute cr 'level 'date-set)
#|"12/15/90"|#

(defclass monitored-credit-rating (credit-rating)
     ((level :attributes (last-checked interval)))
  (:metaclass attributes-class))

(slot-value cr 'all-attributes)
#|((level . ((date-set . "12/15/90") (time-set . nil))))|#
(slot-value (make-instance 'monitored-credit-rating) 
            'all-attributes)
#| ((level . ((last-checked . nil) (interval . nil) 
              (date-set .nil ) (time-set .nil))))|#

;;; encapsulated classes

(defclass encapsulated-class (standard-class) ())

(defmethod initialize-instance :around ((class encapsulated-class)
                                        &rest all-keys
                                        &key direct-slots)
  (let ((revised-direct-slots
          (mapcar
            #'(lambda (slot-properties)
                (let ((pretty-name (getf slot-properties ':name))
                      (new-properties (copy-list slot-properties)))
                  (setf (getf* new-properties ':name) (gensym))
                  (setf (getf* new-properties ':pretty-name) pretty-name)
                  new-properties))
            direct-slots)))
    (apply #'call-next-method class
           :direct-slots revised-direct-slots
           all-keys)))

(defun slot-definition-pretty-name (slot)
  (getf slot ':pretty-name))

(defun (setf slot-definition-pretty-name) (new-value slot)
  (setf (getf* slot ':pretty-name) new-value))

(defun private-slot-value (instance slot-name class-name)
  (slot-value instance (private-slot-name slot-name class-name)))

(defun private-slot-name (slot-name class-name)
  (let* ((class (find-class class-name))
         (slot (find slot-name
                     (class-direct-slots class)
                     :key #'slot-definition-pretty-name)))
    (if slot
        (slot-definition-name slot)
        (error "The class ~S has no private slot named ~S."
               class-name slot-name))))

(defclass c1 ()
     ((foo :reader foo :initform 100))
  (:metaclass encapsulated-class))
(class-direct-slots (find-class 'c1))
(defclass c2 (c1)
     ((foo :reader foo :initform 200))
  (:metaclass encapsulated-class))
(class-direct-slots (find-class 'c2))

(defgeneric mumble (o))
(defmethod mumble ((o c1))
  (private-slot-value o 'foo 'c1))
(defmethod mumble ((o c2))
  (+ (private-slot-value o 'foo 'c2)
     (call-next-method)))

(mumble (make-instance 'c1))
#|100|#

(mumble (make-instance 'c2))
#|300|# 


;;; default initargs

(pprint (macroexpand 
'(defclass frame (rectangle)
     ()
  (:metaclass default-initargs-class)
  (:default-initargs :width 10))))
#|(ensure-class 'frame
              :direct-superclasses
                (list (find-class 'rectangle))
              :direct-slots ()
              :metaclass
                (find-class 'default-initargs-class)
              :direct-default-initargs
                (list ':width 10))|#

(defclass default-initargs-class (standard-class)
          ((direct-default-initargs         
            :initarg :direct-default-initargs
            :initform ()
            :accessor class-direct-default-initargs)))

(defun compute-class-default-initargs (class)
 (mapappend #'class-direct-default-initargs
            (class-precedence-list class)))

(defmethod class-direct-default-initargs ((class standard-class))
  ())

(defmethod make-instance ((class default-initargs-class) &rest initargs)
  (apply #'call-next-method
         class
         (append initargs
                 (compute-class-default-initargs class))))

(defclass frame (rectangle)
     ()
  (:metaclass default-initargs-class)
  (:default-initargs :width 10))

(setq f (make-instance 'frame :height 20))
(slot-value f 'height)
#|20|#
(slot-value f 'width)
#|10|#
(setq g (make-instance 'frame :height 20 :width 10))
(slot-value g 'height)
#|20|#
(slot-value g 'width)
#|10|#


;;; precomputed default initargs

(defclass default-initargs-class-2 (standard-class)
     ((direct-default-initargs                   
        :initarg :direct-default-initargs
        :initform ()
        :accessor class-direct-default-initargs)
      (effective-default-initargs
        :accessor class-default-initargs)))

(defmethod finalize-inheritance :after ((class default-initargs-class-2))
  (setf (class-default-initargs class)
        (compute-class-default-initargs class)))

(defmethod make-instance ((class default-initargs-class-2) &rest initargs)
  (apply #'call-next-method
         class
         (append initargs (class-default-initargs class))))

(defun compute-class-default-initargs (class)
  (mapappend #'class-direct-default-initargs
             (class-precedence-list class)))

(defmethod class-default-initargs ((class standard-class))
  ())

(defclass frame-2 (rectangle)
     ()
  (:metaclass default-initargs-class-2)
  (:default-initargs :width 10))

(setq f (make-instance 'frame-2 :height 20))
(slot-value f 'height)
#|20|#
(slot-value f 'width)
#|10|#

;;;

(defmacro new-defclass (name direct-superclasses direct-slots
                             &rest options)
  (let* ((metaclass-option
           (find ':metaclass options :key #'car))
         (metaclass-name (if metaclass-option
                             (cadr metaclass-option)
                             'standard-class))
         (sample-class-metaobject
           (allocate-instance (find-class metaclass-name)))
         (canonical-supers
           (canonicalize-direct-superclasses direct-superclasses))
         (canonical-slots
           (canonicalize-direct-slots direct-slots))
         (canonical-options
           (new-canonicalize-defclass-options
             sample-class-metaobject
             (remove metaclass-option options))))
  `(ensure-class ',name
     :direct-superclasses ,canonical-supers
     :direct-slots ,canonical-slots
     :metaclass (find-class ',metaclass-name)
     ,@canonical-options)))

(defun new-canonicalize-defclass-options (sample-class options)
  (mapappend #'(lambda (option)
                 (new-canonicalize-defclass-option sample-class option))
             options))

(defgeneric new-canonicalize-defclass-option (sample-class option))
(defmethod new-canonicalize-defclass-option
           ((sample-class standard-class) option)
   (error "Unrecognized defclass option ~S." option))

(defmethod new-canonicalize-defclass-option
           ((sample-class default-initargs-class) option)
  (case (car option)
    (:default-initargs
      (list
       ':direct-default-initargs
       `(list ,@(mapappend
                  #'(lambda (x) x)
                  (mapplist
                    #'(lambda (key value)
                        `(',key ,value))
                    (cdr option))))))
    (t (call-next-method))))

(pprint (macroexpand 
'(new-defclass frame-2 (rectangle)
     ()
  (:metaclass default-initargs-class)
  (:default-initargs :width 10))))
#|(ensure-class 'frame-2
              :direct-superclasses
              (list (find-class 'rectangle))
              :direct-slots
              (list)
              :metaclass
              (find-class 'default-initargs-class)
              :direct-default-initargs
              (list ':width 10))
|#

;;; slot access

(defclass monitored-class (standard-class) ())

(defmethod slot-value-using-class :before
           ((class monitored-class) instance slot-name)
  (note-operation instance slot-name 'slot-value))

(defmethod (setf slot-value-using-class) :before
           (new-value (class monitored-class)
            instance slot-name)
  (note-operation instance slot-name 'set-slot-value))

(defmethod slot-boundp-using-class :before
           ((class monitored-class) instance slot-name)
  (note-operation instance slot-name 'slot-boundp))

(defmethod slot-makunbound-using-class :before
           ((class monitored-class) instance slot-name)
  (note-operation instance slot-name 'slot-makunbound))

(let ((history-list ()))
  (defun note-operation (instance slot-name operation)
    (push `(,operation ,instance ,slot-name) history-list)
    (values))

  (defun reset-slot-access-history ()
    (setq history-list ())
    (values))

  (defun slot-access-history ()
    (reverse history-list))
 )

(defclass foo () 
     ((slot1 :accessor foo-slot1 :initarg :slot1) 
      (slot2 :accessor foo-slot2 :initform 200))
  (:metaclass monitored-class))

(reset-slot-access-history)
(setq i (make-instance 'foo :slot1 100))
#|#<FOO 3813124>|#

(setf (slot-value i 'slot1) (foo-slot2 i))
(incf (foo-slot1 i))

(pprint (slot-access-history))
#|((set-slot-value #<Foo 17122130> slot1)
 (slot-boundp #<Foo 17122130> slot2)
 (set-slot-value #<Foo 17122130> slot2)
 (slot-value #<Foo 17122130> slot2)
 (set-slot-value #<Foo 17122130> slot1)
 (slot-value #<Foo 17122130> slot1)
 (set-slot-value #<Foo 17122130> slot1))
|#

(defclass history-class (standard-class) ())

(defun slot-definition-history (slot)
  (getf slot ':history nil))
(defun (setf slot-definition-history) (new-value slot)
  (setf (getf* slot ':history) new-value))
(defun slot-definition-history-slot-name (slot)
  (getf slot ':history-slot-name nil))
(defun (setf slot-definition-history-slot-name) (new-value slot)
  (setf (getf* slot ':history-slot-name) new-value))

(defmethod compute-slots ((class history-class))
  (let ((normal-slots (call-next-method)))
    (mapappend
      #'(lambda (slot)
          (if (null (slot-definition-history slot))
              (list slot)
              (let ((extra-slot
                      (make-effective-slot-definition
                        :name (slot-definition-history-slot-name slot)
                        :history nil)))
                (list slot extra-slot))))
      normal-slots)))

(defmethod compute-effective-slot-definition ((class history-class)
                                              direct-slots)
  (let ((initer (find-if-not #'null direct-slots
                             :key #'slot-definition-initfunction)))
    (make-effective-slot-definition
      :name (slot-definition-name (car direct-slots))
      :history (some #'slot-definition-history direct-slots)
      :history-slot-name (gensym)
      :allocation (slot-definition-allocation (car direct-slots))
      :initform (if initer
                    (slot-definition-initform initer)
                    nil)
      :initfunction (if initer
                        (slot-definition-initfunction initer)
                         nil)
      :initargs (remove-duplicates
                  (mapappend #'slot-definition-initargs
                             direct-slots)))))

(defmethod allocate-instance ((class history-class))
  (let ((instance (call-next-method)))
    (dolist (slot (class-slots class))
      (when (slot-definition-history slot)
        (setf (slot-value
                instance
                (slot-definition-history-slot-name slot))
              ())))
    instance))

(defun slot-history (instance slot-name)
  (unless (slot-exists-p instance slot-name)
    (error "~S has no slot named ~A." instance slot-name))
  (let ((slot (find slot-name (class-slots (class-of instance))
                    :key #'slot-definition-name)))
    (if (slot-definition-history slot)
        (slot-value instance
                    (slot-definition-history-slot-name slot))
        ())))

(defmethod (setf slot-value-using-class) :before
           (new-value (class history-class) instance slot-name)
  (remember-previous-value instance slot-name))

(defmethod slot-makunbound-using-class :before
           ((class history-class) instance slot-name)
  (remember-previous-value instance slot-name))

(defun remember-previous-value (instance slot-name)
  (let ((slot (find slot-name (class-slots (class-of instance))
                    :key #'slot-definition-name)))
    (when (and (not (null slot))
               (slot-definition-history slot))
      (push (if (slot-boundp instance slot-name)
                (slot-value instance slot-name)
                'unbound)
            (slot-value
              instance
              (slot-definition-history-slot-name slot))))))

(defclass meter ()
     ((size :initarg meter-size)
      (reading :initform 0 :history t))
  (:metaclass history-class))

(class-slots (find-class 'meter))
#|((:name size
        :history
        nil
        :history-slot-name
        #:g1680
        :allocation
        :instance
        :initform
        nil
        :initfunction
        nil
        :initargs
        (meter-size))
 (:name reading
        :history
        t
        :history-slot-name
        #:g1681
        :allocation
        :instance
        :initform
        0
        :initfunction
        #<An Anonymous Compiled Function>
        :initargs
        nil)
 (:name #:g1681
        :history
        nil
        :initargs
        nil
        :allocation
        :instance))
|#

(setq meter1 (make-instance 'meter))
(setf (slot-value meter1 'reading) 200)
(slot-history meter1 'size)
(slot-history meter1 'reading)
#|(0 unbound)|#

;;; dynamic-slot-class

(defclass dynamic-slot-class (standard-class) ())

(defmethod compute-effective-slot-definition
          ((class dynamic-slot-class) direct-slots)
  (let ((slot (call-next-method)))
    (setf (slot-definition-allocation slot) ':dynamic)
    slot))

(defun dynamic-slot-p (slot)
  (eq (slot-definition-allocation slot) ':dynamic))

(defmethod allocate-instance ((class dynamic-slot-class) &key)
  (let ((instance (call-next-method)))
    (allocate-table-entry instance)
    instance))

(defmethod slot-value-using-class ((class dynamic-slot-class)
                                   instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if slot
        (read-dynamic-slot-value instance slot-name)
        (call-next-method))))

(defmethod slot-boundp-using-class ((class dynamic-slot-class)
                                   instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if slot
        (dynamic-slot-boundp instance slot-name)
        (call-next-method))))

(defmethod (setf slot-value-using-class)
           (new-value (class dynamic-slot-class)
            instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if slot
      (write-dynamic-slot-value new-value instance slot-name)
      (call-next-method))))

(defmethod slot-makunbound-using-class ((class dynamic-slot-class)
                                   instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if slot
        (dynamic-slot-makunbound instance slot-name)
        (call-next-method))))

(let ((table (make-hash-table :test #'eq)))

  (defun allocate-table-entry (instance)
    (setf (gethash instance table) ()))

  (defun read-dynamic-slot-value (instance slot-name)
    (let* ((alist (gethash instance table))
           (entry (assoc slot-name alist)))
      (if (null entry)
          (error "The slot ~S is unbound in the object ~S."
                 slot-name instance)
          (cdr entry))))

  (defun write-dynamic-slot-value (new-value instance slot-name)
    (let* ((alist (gethash instance table))
           (entry (assoc slot-name alist)))
      (if (null entry)
          (push `(,slot-name . ,new-value)
                (gethash instance table))
          (setf (cdr entry) new-value))
      new-value))

  (defun dynamic-slot-boundp (instance slot-name)
    (let* ((alist (gethash instance table))
           (entry (assoc slot-name alist)))
      (not (null entry))))

  (defun dynamic-slot-makunbound (instance slot-name)
    (let* ((alist (gethash instance table))
           (entry (assoc slot-name alist)))
      (unless (null entry)
        (setf (gethash instance table)
              (delete entry alist))))
    instance)
  )

(defclass biggy ()
     (a1 b1 c1 d1 e1 f1 g1 h1 i1 j1 k1 l1 m1
      n1 o1 p1 q1 r1 s1 t1 u1 v1 w1 x1 y1 z1
      a2 b2 c2 d2 e2 f2 g2 h2 i2 j2 k2 l2 m2
      n2 o2 p2 q2 r2 s2 t2 u2 v2 w2 x2 y2 z2
      a3 b3 c3 d3 e3 f3 g3 h3 i3 j3 k3 l3 m3
      n3 o3 p3 q3 r3 s3 t3 u3 v3 w3 x3 y3 z3
      a4 b4 c4 d4 e4 f4 g4 h4 i4 j4 k4 l4 m4
      n4 o4 p4 q4 r4 s4 t4 u4 v4)
  (:metaclass dynamic-slot-class))

(every #'dynamic-slot-p
        (class-slots (find-class 'biggy)))
#|t|#

(setq b1 (make-instance 'biggy))

(setf (slot-value b1 'f3) 'b1-f3-value)

(slot-value b1 'f3)
#|b1-f3-value|#

(defclass dynamic-slot-class-2 (standard-class) ())

(defmethod allocate-instance ((class dynamic-slot-class-2) &key)
  (let ((instance (call-next-method)))
    (when (some #'dynamic-slot-p (class-slots class))
      (allocate-table-entry instance))
    instance))

(defmethod slot-value-using-class ((class dynamic-slot-class-2)
                                   instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (dynamic-slot-p slot))
        (read-dynamic-slot-value instance slot-name)
        (call-next-method))))

(defmethod slot-boundp-using-class ((class dynamic-slot-class-2)
                                   instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (dynamic-slot-p slot))
      (dynamic-slot-boundp instance slot-name)
      (call-next-method))))

(defmethod (setf slot-value-using-class)
           (new-value (class dynamic-slot-class-2)
            instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (dynamic-slot-p slot))
        (write-dynamic-slot-value new-value instance slot-name)
        (call-next-method))))

(defmethod slot-makunbound-using-class ((class dynamic-slot-class-2)
                                   instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (dynamic-slot-p slot))
      (dynamic-slot-makunbound instance slot-name)
      (call-next-method))))

(defclass movable-rectangle (rectangle)
     ((previous-height :allocation :dynamic)
      (previous-width :allocation :dynamic))
  (:metaclass dynamic-slot-class-2))

(setq mr (make-instance 'movable-rectangle))
(every #'dynamic-slot-p
        (class-slots (find-class 'movable-rectangle)))
#|nil|#

(some #'dynamic-slot-p
        (class-slots (find-class 'movable-rectangle)))
#|t|#

(setf (slot-value mr 'height) 1002)
(setf (slot-value mr 'previous-height) 999)

(slot-value mr 'height)
#|1002|#
(slot-value mr 'previous-height)
#|999|#

;;;

(defclass class-slot-class (standard-class)
     ((class-allocated-slot-values
        :initform ()
        :accessor class-allocated-slots)))

(defun class-slot-p (slot)
  (eq (slot-definition-allocation slot) ':class))

(defvar unbound-class-slot (list "unbound class slot"))

(defmethod initialize-instance :after
           ((class class-slot-class) &key)
  (setf (class-allocated-slots class)
        (mapappend
          #'(lambda (slot)
              (if (class-slot-p slot)
                  (let ((initfunction
                          (slot-definition-initfunction slot)))
                    (list (cons (slot-definition-name slot)
                                (if (not (null initfunction))
                                    (funcall initfunction)
                                    unbound-class-slot))))
                  ()))
          (class-direct-slots class))))

#|(defmethod finalize-inheritance :after
           ((class class-slot-class))
  (setf (class-allocated-slots class)
        (mapappend
          #'(lambda (slot)
              (if (class-slot-p slot)
                  (let ((initfunction
                          (slot-definition-initfunction slot)))
                    (if (not (null initfunction))
                        (list (cons (slot-definition-name slot)
                                    (funcall initfunction)))
                        (list (cons (slot-definition-name slot)
                                    secret-unbound-value))))
                  ()))
          (class-direct-slots class))))|#

(defun class-slot-value (class slot-name)
  (dolist (super (class-precedence-list class))
     (let ((slot (find slot-name (class-direct-slots super)
                       :key #'slot-definition-name)))
        (when slot
           (let ((value (cdr (assoc slot-name
                                    (class-allocated-slots super)))))
             (when (eq value secret-unbound-value)
                (error "Unbound class slot named ~A in class ~S."
                       slot-name class))
             (return-from class-slot-value value))))))

(defun (setf class-slot-value) (new-value class slot-name)
  (block class-slot-value
    (dolist (super (class-precedence-list class))
      (let ((slot (find slot-name (class-direct-slots super)
                        :key #'slot-definition-name)))
        (when slot
          (setf (cdr (assoc slot-name
                            (class-allocated-slots super)))
                new-value)
          (return-from class-slot-value new-value))))))

(defun class-slot-boundp (class slot-name)
  (dolist (super (class-precedence-list class))
     (let ((slot (find slot-name (class-direct-slots super)
                       :key #'slot-definition-name)))
        (when slot
           (let ((value (cdr (assoc slot-name
                                    (class-allocated-slots super)))))
             (return-from class-slot-boundp 
                          (eq value secret-unbound-value)))))))

(defun class-slot-makunbound (class slot-name)
  (dolist (super (class-precedence-list class))
     (let ((slot (find slot-name (class-direct-slots super)
                       :key #'slot-definition-name)))
        (when slot
           (setf (cdr (assoc slot-name
                             (class-allocated-slots super)))
                 secret-unbound-value)
           (return-from class-slot-makunbound)))))

(defmethod slot-value-using-class
           ((class class-slot-class)
            instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (class-slot-p slot))
        (class-slot-value class slot-name)
        (call-next-method))))

(defmethod (setf slot-value-using-class)
            (new-value
             (class class-slot-class)
              instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (class-slot-p slot))
        (setf (class-slot-value class slot-name) new-value)
        (call-next-method))))

(defmethod slot-boundp-using-class
           ((class class-slot-class)
            instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (class-slot-p slot))
        (class-slot-boundp class slot-name)
        (call-next-method))))

(defmethod slot-makunbound-using-class
           ((class class-slot-class)
            instance slot-name)
  (let ((slot (find slot-name (class-slots class)
                    :key #'slot-definition-name)))
    (if (and slot (class-slot-p slot))
        (progn (class-slot-makunbound class slot-name)
               instance)
        (call-next-method))))

(defclass labeled-rectangle (rectangle)
     ((font :initform 'old-english-12
            :allocation :class))
  (:metaclass class-slot-class))

(setq lr1 (make-instance 'labeled-rectangle))
(setq lr2 (make-instance 'labeled-rectangle))

(slot-value lr1 'font)
#|OLD-ENGLISH-12|#

(setf (slot-value lr1 'font) 'times-roman-10)

(slot-value lr2 'font)
#|TIMES-ROMAN-10|#

(defclass both-slots-class (dynamic-slot-class class-slot-class)
     ())

;;; chapter 4

(pprint (macroexpand 
'(defgeneric paint (x)
  (:generic-function-class specialized-generic-function)
  (:method-class specialized-method))))
#|(ensure-generic-function 'paint
                         :lambda-list
                         '(x)
                         :generic-function-class
                         (find-class 'specialized-generic-function)
                         :method-class
                         (find-class 'specialized-method))|#

;;; counter example


(defclass counting-gf (standard-generic-function) 
  ((call-count :initform 0 :accessor call-count)))

(defclass counting-method (standard-method) 
  ((call-count :initform 0 :accessor call-count)))

(defmethod compute-discriminating-function ((gf counting-gf))
  (let ((normal-dfun (call-next-method)))
    #'(lambda (&rest args)
        (incf (call-count gf))
        (apply normal-dfun args))))

(defmethod compute-method-function ((method counting-method))
  (let ((normal-method-function (call-next-method)))
     #'(lambda (args next-methods)
         (incf (call-count method))
         (funcall normal-method-function args next-methods))))

(defgeneric ack (x)
  (:generic-function-class counting-gf)
  (:method-class counting-method))
(defmethod ack :before ((x standard-object)) nil)
(defmethod ack (x) t)

(ack (make-instance 'standard-object))
#|T|#

(ack 1)
#|T|#

(call-count (find-generic-function 'ack))
#|2|#
(mapcar #'(lambda (method)
                (list (generate-defmethod method)
                      (call-count method)))
            (generic-function-methods (find-generic-function 'ack)))
#|(((DEFMETHOD ACK :BEFORE ((X STANDARD-OBJECT))) 1)
 ((DEFMETHOD ACK (X)) 2))|#

;;; tracing gf exercise

(defclass traceable-gf (standard-generic-function)
     ((tracing :initform nil :accessor tracing-enabled-p)))

(defun trace-generic-function (gf-name new-value)
  (let ((gf (find-generic-function gf-name)))
    (setf (tracing-enabled-p gf) new-value)))

(defmethod compute-discriminating-function ((gf traceable-gf))
  (let ((normal-dfun (call-next-method)))
    #'(lambda (&rest args)
        (if (not (tracing-enabled-p gf))
            (apply normal-dfun args)
            (progn
              (format *trace-output*
                      "Entering generic function ~S~@
                       with arguments ~:S.~%" gf args)
              (let ((results (multiple-value-list 
                              (apply normal-dfun args))))
                (format *trace-output*
                        "Leaving generic function ~S~@
                         value(s) being returned are: ~:S.~%"
                        gf results)
                (values-list results)))))))

(defgeneric testf (x)
  (:generic-function-class traceable-gf))
(defmethod testf (x) x)

(trace-generic-function 'testf t)
(testf 10)
#|Entering generic function #<Traceable-Gf testf 16774634>
with arguments (10).
Leaving generic function #<Traceable-Gf testf 16774634>
value(s) being returned are: (10)
10|#

(trace-generic-function 'testf nil)
(testf 20)
#|20|#

;;; trusting gfs

(defclass trusting-gf (standard-generic-function) ()) 

(defmethod compute-discriminating-function ((gf trusting-gf))
  (let ((normal-dfun (call-next-method))
        (methods (generic-function-methods gf)))
    (if (and (= (length methods) 1)
             (primary-method-p (car methods)))
        #'(lambda (&rest args)
            (apply-method (car methods) args ()))
        normal-dfun)))

(defgeneric gfoo (x) (:generic-function-class trusting-gf))
(defmethod gfoo ((x standard-object))
  x)

(gfoo (find-class 'standard-class))
#|#<Standard-Class STANDARD-CLASS 15102564>|#

(gfoo 100)
#|100|#

(defmethod gfoo ((x number))
  (1+ x))

(gfoo 100)
#|101|#

(defclass trusting-counting-gf (trusting-gf counting-gf) ())

(defgeneric flack (x)
  (:generic-function-class trusting-counting-gf)
  (:method-class counting-method))
(defmethod flack (x) t)

(flack (make-instance 'standard-object))
#|T|#

(flack 1)
#|T|#

(call-count (find-generic-function 'flack))
#|0|#
(mapcar #'(lambda (method)
                (list (generate-defmethod method)
                      (call-count method)))
            (generic-function-methods 
             (find-generic-function 'flack)))
#|(((DEFMETHOD ACK :BEFORE ((X STANDARD-OBJECT))) 1)
 ((DEFMETHOD ACK (X)) 2))|#

(defclass counting-trusting-gf (counting-gf trusting-gf) ())

(defgeneric flack2 (x)
  (:generic-function-class counting-trusting-gf)
  (:method-class counting-method))
(defmethod flack2 (x) t)

(flack2 (make-instance 'standard-object))
#|T|#

(flack2 1)
#|T|#

(call-count (find-generic-function 'flack2))
#|2|#

;;; encapsulated methods (can't be tested because they need
;;; to add bindings to body

#|
(defclass c1 ()
     ((foo :initform 100))
  (:metaclass encapsulated-class))
(defclass c2 (c1)
     ((foo :initform 200))
  (:metaclass encapsulated-class))

(defgeneric f1 (x)
  (:generic-function-class encapsulating-gf)
  (:method-class encapsulated-method))

(defmethod f1 ((y c1))
  (1- (slot 'foo)))
(defmethod f1 ((z c2))
  (1+ (slot 'foo)))

(f1 (make-instance 'c1))
99
(f1 (make-instance 'c2))
201
|#

;;; Method Combination

(defclass gf-with-arounds (standard-generic-function) ())

#|(defmethod apply-methods ((gf gf-with-arounds) args methods)
  (let ((around (find-if #'around-method-p methods)))
    (if around
        (apply-method around args (remove around methods))
        (call-next-method))))|#

(defmethod compute-effective-method-function
  ((gf gf-with-arounds) methods)
  (let ((around (find-if #'around-method-p methods)))
    (if around
        #'(lambda (args)
            (apply-method around args (remove around methods)))
        (call-next-method))))

(defgeneric gfa (x) (:generic-function-class gf-with-arounds))
(defmethod gfa :around ((x integer))
  (format t "(:around integer)")
  (call-next-method))
(defmethod gfa :around ((x number))
  (format t "(:around number)")
  (call-next-method))
(defmethod gfa :before ((x number))
  (format t "(:before number)"))
(defmethod gfa  ((x number))
  (format t "(primary number)")
  (1+ (call-next-method)))
(defmethod gfa :after ((x number))
  (format t "(:after number)"))
(defmethod gfa :before ((x t))
  (format t "(:before t)"))
(defmethod gfa  ((x t))
  (format t "(primary t)")
  100)
(defmethod gfa :after ((x t))
  (format t "(:after t)"))

(gfa 1)
#|(:around integer)(:around number)(:before number)(:before t)
  (primary number)(primary t)(:after t)(:after number)
101|#


(defclass gf-with-append (standard-generic-function) ())

#|
(defmethod apply-methods ((gf gf-with-append) args methods)
  (mapappend #'(lambda (method)
                 (apply-method method args ()))
             methods))
|#

(defmethod compute-effective-method-function
  ((gf gf-with-append) methods)
  #'(lambda (args)
      (apply #'append
             (mapcar #'(lambda (method)
                         (apply-method method args ()))
                     methods))))

(defgeneric gfappend (x)
  (:generic-function-class gf-with-append))
(defmethod gfappend ((x integer))
  '(integer))
(defmethod gfappend ((x number))
  '(number))
(defmethod gfappend ((x t))
  '(t))

(gfappend 1)
#|(INTEGER NUMBER T)|#

;;; Argument Precedence Order

(defclass apo-gf (standard-generic-function)
     ((argument-precedence-order
         :initarg :argument-precedence-order
         :accessor argument-precedence-order)))

(defmethod initialize-instance :after ((gf apo-gf) &key)
  (unless (slot-boundp gf 'argument-precedence-order)
    (setf (argument-precedence-order gf)
          (gf-required-arglist gf))))

(defmethod method-more-specific-p
           ((gf apo-gf) method1 method2 required-classes)
  (flet ((apo-permute (list)
            (mapcar #'(lambda (arg-name)
                        (nth (position
                               arg-name
                               (gf-required-arglist gf))
                             list))
                    (argument-precedence-order gf))))
    (mapc #'(lambda (spec1 spec2 arg-class)
              (unless (eq spec1 spec2)
                 (return-from method-more-specific-p
                   (sub-specializer-p spec1 spec2 arg-class))))
          (apo-permute (method-specializers method1))
          (apo-permute (method-specializers method2))
          (apo-permute required-classes))
    nil))

(defgeneric multigf (x y)
  (:generic-function-class apo-gf)
  (:argument-precedence-order (y x)))

(defmethod multigf ((x t) (y number))
  (format t "(t number)")
  (values))
(defmethod multigf ((x number) (y t))
  (format t "(number t)")
  (values))
(defmethod multigf ((x number) (y number))
  (format t "(number number)")
  (values))
(defmethod multigf ((x t) (y integer))
  (format t "(t integer)")
  (values))
(defmethod multigf ((x t) (y t))
  (format t "(t t)")
  (values))

(multigf 1 2)
#|(t integer)|#
(multigf 1 'a)
#|(number t)|#
(multigf 'b 'a)
#|(t t)|#
(multigf  'b 1)
#|(t integer)|#

(defgeneric multigf2 (x y))
(defmethod multigf2 ((x t) (y number))
  (format t "(t number)")
  (values))
(defmethod multigf2 ((x number) (y t))
  (format t "(number t)")
  (values))
(defmethod multigf2 ((x number) (y number))
  (format t "(number number)")
  (values))
(defmethod multigf2 ((x t) (y integer))
  (format t "(t integer)")
  (values))
(defmethod multigf2 ((x t) (y t))
  (format t "(t t)")
  (values))

(multigf2 1 2)
#|(number number)|#
(multigf2 1 'a)
#|(number t)|#
(multigf2 'b 'a)
#|(t t)|#
(multigf2  'b 1)
#|(t integer)|#

;;; beta

(defclass beta-gf (standard-generic-function) ())

(defmethod method-more-specific-p ((gf beta-gf) method1 method2 classes)
  (if (equal (method-specializers method1)
             (method-specializers method2))
      nil
      (not (call-next-method))))

(defmacro inner (&rest args)
  `(if (next-method-p)
       (call-next-method ,@args)
       nil))

(defgeneric bjorn (x)
  (:generic-function-class beta-gf))

(defmethod bjorn (x)
  (format t " general ")
  (inner))
(defmethod bjorn ((x number))
  (format t " number ")
  (inner))

(bjorn 1)
#|  general  number |#
(bjorn 'a)
#|  general |#


"done"
