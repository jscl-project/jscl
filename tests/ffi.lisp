;;; -*- mode:lisp; coding:utf-8 -*-


;;; Tests for Javascript FFI routines.

(test (= ((jscl/ffi:oget (jscl/ffi:new #j:Date 0) "getTime")) 0))
(test (stringp (jscl/ffi:clstring (#j:Date 0))))
(test (< 32 (length (jscl/ffi:clstring (#j:Date 0)))))

;;; Array
(let ((v1 #(mediane)))
  ((jscl/ffi:oget v1 "push") 'right)
  ((jscl/ffi:oget v1 "unshift") 'left)
  (test (equal ((jscl/ffi:oget v1 "indexOf") 'mediane) 1))
  (test (equal ((jscl/ffi:oget v1 "indexOf") 'left) 0))
  (test (equal ((jscl/ffi:oget v1 "indexOf") 'right) 2))
  (test (equal (map 'list #'identity v1) '(left mediane right))))

(let ((v2 (jscl/ffi:new #j:Array 'left "Mediane" 'right)))
  (test (equal (coerce v2 'list) '(left "Mediane" right))))

;;; String
(test (string= (jscl/ffi:clstring ((jscl/ffi:oget #j"abcdef" "substr") 1 2)) "bc"))

;;; Number's format output
;;; for future features
(let ()
  (labels
      ((make-number (value)
         (jscl/ffi:new #j:Number value))
       (float-Exponential (value &optional (fraction 5))
         (jscl/ffi:clstring ((jscl/ffi:oget (make-Number value) "toExponential") fraction)))
       (number-to-fixed (value &optional (digits 0))
         (jscl/ffi:clstring ((jscl/ffi:oget (make-Number value) "toFixed") digits)))
       (number-by-radix (value &optional (radix 10))
         (jscl/ffi:clstring ((jscl/ffi:oget (make-Number value) "toString") radix))))
    (test (string= "1.23e+2" (float-exponential 123.1 2)))
    (test (string= "123.01" (number-to-fixed 123.012345 2)))
    (test (string= "a" (number-by-radix 10 16)))
    (test (string= "1100100" (number-by-radix 100 2)))))

;;; test what simple-object (Object.create(null))
(test (string= "#<JS-OBJECT [object Simple-object]>" (write-to-string jscl::*package-table*)))

;;; test js-object-signature
(test (jscl::js-object-signature (jscl/ffi:new #j:Date)))

;;; test in can handle numbers

(let ((obj (jscl/ffi:new #j:Object)))
  (test (jscl/ffi:oset 456 obj 123))
  (test (equal 456 (jscl/ffi:oget obj 123))))

;;; #j"..." reader

;; the reader produces a JS string directly, not a form like (jsstring "foo")
(let ((val (read-from-string "#j\"foo\"")))
  (test (eq (jscl/ffi:typeof val) #j"string"))
  (test (string= (jscl/ffi:clstring val) "foo")))

;;; jsstring

;; constant case: the compiler can inline #j"..." to a JS string literal
(test (eq #j"hello" #j"hello"))
(test (eq (jscl/ffi:jsstring "hello") #j"hello"))
(test (eq #j"" #j""))

;; non-constant case: jsstring on a dynamically constructed string
(let ((s (copy-seq "world")))
  (test (eq (jscl/ffi:jsstring s) (jscl/ffi:jsstring s))))

;; jsstring as a function value
(test (eq (funcall #'jscl/ffi:jsstring "abc") #j"abc"))

;; reader macro round-trip through the printer
(test (string= (write-to-string #j"foo") "#j\"foo\""))
(test (string= (write-to-string #j"") "#j\"\""))
(test (string= (write-to-string #j"a\"b") "#j\"a\\\"b\""))

;; princ prints the raw contents without #j or quotes
(test (string= (princ-to-string #j"bar") "bar"))

;;; FFI constants printing

(test (string= (write-to-string #j:true) "#j:true"))
(test (string= (write-to-string #j:false) "#j:false"))
(test (string= (write-to-string #j:null) "#j:null"))
(test (string= (write-to-string #j:undefined) "#j:undefined"))

;; princ prints the same (no escaping distinction for constants)
(test (string= (princ-to-string #j:true) "#j:true"))
(test (string= (princ-to-string #j:false) "#j:false"))
(test (string= (princ-to-string #j:null) "#j:null"))
(test (string= (princ-to-string #j:undefined) "#j:undefined"))

;;; #j:true etc. reader

;; the reader produces JS values directly, not symbols or forms
(let ((val (read-from-string "#j:true")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (jscl/ffi:typeof val) #j"boolean"))
  (test (eq val #j:true)))

(let ((val (read-from-string "#j:false")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (jscl/ffi:typeof val) #j"boolean"))
  (test (eq val #j:false)))

(let ((val (read-from-string "#j:null")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (jscl/ffi:typeof val) #j"object"))
  (test (eq val #j:null)))

(let ((val (read-from-string "#j:undefined")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (jscl/ffi:typeof val) #j"undefined"))
  (test (eq val #j:undefined)))

;;; clstring

;; JS string -> CL string
(test (stringp (jscl/ffi:clstring #j"hello")))
(test (string= (jscl/ffi:clstring #j"hello") "hello"))
(test (string= (jscl/ffi:clstring #j"") ""))

;; CL string passes through
(test (let ((s "world")) (eq (jscl/ffi:clstring s) s)))
(test (string= (jscl/ffi:clstring "abc") "abc"))

;; type error for non-strings
(test (handler-case (progn (jscl/ffi:clstring 42) nil)
        (type-error () t)))
(test (handler-case (progn (jscl/ffi:clstring #j:true) nil)
        (type-error () t)))

;; clstring as a function value
(test (string= (funcall #'jscl/ffi:clstring #j"test") "test"))

;;; jsbool

;; nil -> #j:false, anything else -> #j:true
(test (eq (jscl/ffi:jsbool nil) #j:false))
(test (eq (jscl/ffi:jsbool t) #j:true))
(test (eq (jscl/ffi:jsbool 42) #j:true))
(test (eq (jscl/ffi:jsbool "hello") #j:true))

;; jsbool as a function value
(test (eq (funcall #'jscl/ffi:jsbool nil) #j:false))
(test (eq (funcall #'jscl/ffi:jsbool t) #j:true))

;;; clbool

;; #j:true -> t, #j:false/#j:null/#j:undefined -> nil
(test (eq (jscl/ffi:clbool #j:true) t))
(test (eq (jscl/ffi:clbool #j:false) nil))
(test (eq (jscl/ffi:clbool #j:null) nil))
(test (eq (jscl/ffi:clbool #j:undefined) nil))

;; CL booleans pass through
(test (eq (jscl/ffi:clbool t) t))
(test (eq (jscl/ffi:clbool nil) nil))

;; type error for non-booleans
(test (handler-case (progn (jscl/ffi:clbool 42) nil)
        (type-error () t)))

;; clbool as a function value
(test (eq (funcall #'jscl/ffi:clbool #j:true) t))
(test (eq (funcall #'jscl/ffi:clbool #j:false) nil))


(test
 (string= (write-to-string
	   (let ((arr (vector #j"foo" #j"bar")))
	     ((jscl/ffi:oget arr "map") (lambda (x &rest ignored) 1))))
	"#(1 1)"))

;;; eval handles JS value literals (exercises the data-vector path)
(test (eq (eval #j:true) #j:true))
(test (eq (eval #j:false) #j:false))
(test (eq (eval #j:null) #j:null))
(test (eq (eval #j:undefined) #j:undefined))

;;; A variable bound to #j:undefined should be accessible via symbol-value
(defvar *test-js-undefined-var* #j:undefined)
(test (eq (symbol-value '*test-js-undefined-var*) #j:undefined))
(test (boundp '*test-js-undefined-var*))

;;; compile-toplevel handles JS value literals (exercises the dump path)
(test (search "true"
              (jscl::with-compilation-environment
                (jscl::compile-toplevel #j:true))))
(test (search "false"
              (jscl::with-compilation-environment
                (jscl::compile-toplevel #j:false))))
(test (search "null"
              (jscl::with-compilation-environment
                (jscl::compile-toplevel #j:null))))
(test (search "undefined"
              (jscl::with-compilation-environment
                (jscl::compile-toplevel #j:undefined))))

;;; EOF
