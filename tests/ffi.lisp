;;; -*- mode:lisp; coding:utf-8 -*-

(/debug "perform test/ffi.lisp!")

;;; Tests for Javascript FFI routines.

;;; TODO: Once these are exported under JSCL/FFI, just  :USE that into the testing package. For now,
;;; using JSCL:: prefix.

(test (= ((jscl::oget (jscl::new #j:Date 0) "getTime")) 0))
(test (stringp (clstring (#j:Date 0))))
(test (< 32 (length (clstring (#j:Date 0)))))

;;; Array
(let ((v1 #(mediane)))
  ((jscl::oget v1 "push") 'right)
  ((jscl::oget v1 "unshift") 'left)
  (test (equal ((jscl::oget v1 "indexOf") 'mediane) 1))
  (test (equal ((jscl::oget v1 "indexOf") 'left) 0))
  (test (equal ((jscl::oget v1 "indexOf") 'right) 2))
  (test (equal (map 'list #'identity v1) '(left mediane right))))

(let ((v2 (jscl::new #j:Array 'left "Mediane" 'right)))
  (test (equal (jscl::vector-to-list v2) '(left "Mediane" right))))

;;; String
(test (string= (clstring ((oget (jscl::lisp-to-js "abcdef") "substr") 1 2)) "bc"))

;;; Number's format output
;;; for future features
(let ()
  (labels
      ((make-number (value)
         (jscl::new #j:Number value))
       (float-Exponential (value &optional (fraction 5))
         (clstring ((jscl::oget (make-Number value) "toExponential") fraction)))
       (number-to-fixed (value &optional (digits 0))
         (clstring ((jscl::oget (make-Number value) "toFixed") digits)))
       (number-by-radix (value &optional (radix 10))
         (clstring ((jscl::oget (make-Number value) "toString") radix))))
    (test (string= "1.23e+2" (float-exponential 123.1 2)))
    (test (string= "123.01" (number-to-fixed 123.012345 2)))
    (test (string= "a" (number-by-radix 10 16)))
    (test (string= "1100100" (number-by-radix 100 2)))))

;;; test what simple-object (Object.create(null)) 
(test (string= "#<JS-OBJECT [object Simple-object]>" (write-to-string *package-table*)))
(test (equal t (js-object-p *package-table*)))

;;; test what new Array isnt js-object
(let ((obj (new #j:Array)))
  (setf (oget obj "name") 'one)
  (test (and (objectp obj)
             (not (js-object-p obj)))))

;;; test what new Date is js-object & have a signature 
(let ((obj (new #j:Date)))
  (test (js-object-p obj))
  (test (js-object-signature obj)))

;;; test in can handle numbers

(let ((obj (new #j:Object)))
  (test (js-object-p obj))
  (test (oset 456 obj 123))
  (test (equal 456 (oget obj 123))))

;;; #j"..." reader

;; the reader produces a JS string directly, not a form like (jsstring "foo")
(let ((val (read-from-string "#j\"foo\"")))
  (test (string= (typeof val) "string"))
  (test (string= (clstring val) "foo")))

;;; jsstring

;; constant case: the compiler can inline #j"..." to a JS string literal
(test (eq #j"hello" #j"hello"))
(test (eq (jsstring "hello") #j"hello"))
(test (eq #j"" #j""))

;; non-constant case: jsstring on a dynamically constructed string
(let ((s (copy-seq "world")))
  (test (eq (jsstring s) (jsstring s))))

;; jsstring as a function value
(test (eq (funcall #'jsstring "abc") #j"abc"))

;; reader macro round-trip through the printer
(test (string= (write-to-string #j"foo") "#j\"foo\""))
(test (string= (write-to-string #j"") "#j\"\""))
(test (string= (write-to-string #j"a\"b") "#j\"a\\\"b\""))

;; princ prints the raw contents without #j or quotes
(test (string= (princ-to-string #j"bar") "bar"))

;;; FFI constants printing

(test (string= (write-to-string +true+) "+TRUE+"))
(test (string= (write-to-string +false+) "+FALSE+"))
(test (string= (write-to-string +null+) "+NULL+"))
(test (string= (write-to-string +undefined+) "+UNDEFINED+"))

;; princ prints the same (no escaping distinction for constants)
(test (string= (princ-to-string +true+) "+TRUE+"))
(test (string= (princ-to-string +false+) "+FALSE+"))
(test (string= (princ-to-string +null+) "+NULL+"))
(test (string= (princ-to-string +undefined+) "+UNDEFINED+"))

;;; clstring

;; JS string -> CL string
(test (stringp (clstring #j"hello")))
(test (string= (clstring #j"hello") "hello"))
(test (string= (clstring #j"") ""))

;; CL string passes through
(test (let ((s "world")) (eq (clstring s) s)))
(test (string= (clstring "abc") "abc"))

;; type error for non-strings
(test (handler-case (progn (clstring 42) nil)
        (type-error () t)))
(test (handler-case (progn (clstring +true+) nil)
        (type-error () t)))

;; clstring as a function value
(test (string= (funcall #'clstring #j"test") "test"))

;;; jsbool

;; nil -> +false+, anything else -> +true+
(test (eq (jsbool nil) +false+))
(test (eq (jsbool t) +true+))
(test (eq (jsbool 42) +true+))
(test (eq (jsbool "hello") +true+))

;; jsbool as a function value
(test (eq (funcall #'jsbool nil) +false+))
(test (eq (funcall #'jsbool t) +true+))

;;; clbool

;; +true+ -> t, +false+/+null+/+undefined+ -> nil
(test (eq (clbool +true+) t))
(test (eq (clbool +false+) nil))
(test (eq (clbool +null+) nil))
(test (eq (clbool +undefined+) nil))

;; CL booleans pass through
(test (eq (clbool t) t))
(test (eq (clbool nil) nil))

;; type error for non-booleans
(test (handler-case (progn (clbool 42) nil)
        (type-error () t)))

;; clbool as a function value
(test (eq (funcall #'clbool +true+) t))
(test (eq (funcall #'clbool +false+) nil))


(test
 (string= (write-to-string
	   (let ((arr (vector #j"foo" #j"bar")))
	     ((oget arr "map") (lambda (x &rest ignored) 1))))
	"#(1 1)"))


;;; EOF
