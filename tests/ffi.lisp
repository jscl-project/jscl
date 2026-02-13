;;; -*- mode:lisp; coding:utf-8 -*-


;;; Tests for Javascript FFI routines.

(test (= ((oget (new #j:Date 0) "getTime")) 0))
(test (stringp (clstring (#j:Date 0))))
(test (< 32 (length (clstring (#j:Date 0)))))

;;; Array
(let ((v1 #(mediane)))
  ((oget v1 "push") 'right)
  ((oget v1 "unshift") 'left)
  (test (equal ((oget v1 "indexOf") 'mediane) 1))
  (test (equal ((oget v1 "indexOf") 'left) 0))
  (test (equal ((oget v1 "indexOf") 'right) 2))
  (test (equal (map 'list #'identity v1) '(left mediane right))))

(let ((v2 (new #j:Array 'left "Mediane" 'right)))
  (test (equal (vector-to-list v2) '(left "Mediane" right))))

;;; String
(test (string= (clstring ((oget #j"abcdef" "substr") 1 2)) "bc"))

;;; Number's format output
;;; for future features
(let ()
  (labels
      ((make-number (value)
         (new #j:Number value))
       (float-Exponential (value &optional (fraction 5))
         (clstring ((oget (make-Number value) "toExponential") fraction)))
       (number-to-fixed (value &optional (digits 0))
         (clstring ((oget (make-Number value) "toFixed") digits)))
       (number-by-radix (value &optional (radix 10))
         (clstring ((oget (make-Number value) "toString") radix))))
    (test (string= "1.23e+2" (float-exponential 123.1 2)))
    (test (string= "123.01" (number-to-fixed 123.012345 2)))
    (test (string= "a" (number-by-radix 10 16)))
    (test (string= "1100100" (number-by-radix 100 2)))))

;;; test what simple-object (Object.create(null))
(test (string= "#<JS-OBJECT [object Simple-object]>" (write-to-string *package-table*)))

;;; test js-object-signature
(test (js-object-signature (new #j:Date)))

;;; test in can handle numbers

(let ((obj (new #j:Object)))
  (test (oset 456 obj 123))
  (test (equal 456 (oget obj 123))))

;;; #j"..." reader

;; the reader produces a JS string directly, not a form like (jsstring "foo")
(let ((val (read-from-string "#j\"foo\"")))
  (test (eq (typeof val) #j"string"))
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
  (test (eq (typeof val) #j"boolean"))
  (test (eq val #j:true)))

(let ((val (read-from-string "#j:false")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (typeof val) #j"boolean"))
  (test (eq val #j:false)))

(let ((val (read-from-string "#j:null")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (typeof val) #j"object"))
  (test (eq val #j:null)))

(let ((val (read-from-string "#j:undefined")))
  (test (not (symbolp val)))
  (test (not (consp val)))
  (test (eq (typeof val) #j"undefined"))
  (test (eq val #j:undefined)))

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
(test (handler-case (progn (clstring #j:true) nil)
        (type-error () t)))

;; clstring as a function value
(test (string= (funcall #'clstring #j"test") "test"))

;;; jsbool

;; nil -> #j:false, anything else -> #j:true
(test (eq (jsbool nil) #j:false))
(test (eq (jsbool t) #j:true))
(test (eq (jsbool 42) #j:true))
(test (eq (jsbool "hello") #j:true))

;; jsbool as a function value
(test (eq (funcall #'jsbool nil) #j:false))
(test (eq (funcall #'jsbool t) #j:true))

;;; clbool

;; #j:true -> t, #j:false/#j:null/#j:undefined -> nil
(test (eq (clbool #j:true) t))
(test (eq (clbool #j:false) nil))
(test (eq (clbool #j:null) nil))
(test (eq (clbool #j:undefined) nil))

;; CL booleans pass through
(test (eq (clbool t) t))
(test (eq (clbool nil) nil))

;; type error for non-booleans
(test (handler-case (progn (clbool 42) nil)
        (type-error () t)))

;; clbool as a function value
(test (eq (funcall #'clbool #j:true) t))
(test (eq (funcall #'clbool #j:false) nil))


(test
 (string= (write-to-string
	   (let ((arr (vector #j"foo" #j"bar")))
	     ((oget arr "map") (lambda (x &rest ignored) 1))))
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
              (with-compilation-environment
                (compile-toplevel #j:true))))
(test (search "false"
              (with-compilation-environment
                (compile-toplevel #j:false))))
(test (search "null"
              (with-compilation-environment
                (compile-toplevel #j:null))))
(test (search "undefined"
              (with-compilation-environment
                (compile-toplevel #j:undefined))))

;;; EOF
