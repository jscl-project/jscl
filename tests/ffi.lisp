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
(test (string= (clstring ((oget (jsstring "abcdef") "substr") 1 2)) "bc"))

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

;;; test js-object-signature
(test (js-object-signature (new #j:Date)))

;;; test in can handle numbers

(let ((obj (new #j:Object)))
  (test (oset 456 obj 123))
  (test (equal 456 (oget obj 123))))

;;; #j"..." reader

;; the reader produces a JS string directly, not a form like (jsstring "foo")
(let ((val (read-from-string "#j\"foo\"")))
  (test (eq (typeof val) (jsstring "string")))
  (test (string= (clstring val) "foo")))

;;; jsstring

;; constant case: the compiler can inline #j"..." to a JS string literal
(test (eq (read-from-string "#j\"hello\"") (read-from-string "#j\"hello\"")))
(test (eq (jsstring "hello") (read-from-string "#j\"hello\"")))
(test (eq (read-from-string "#j\"\"") (read-from-string "#j\"\"")))

;; non-constant case: jsstring on a dynamically constructed string
(let ((s (copy-seq "world")))
  (test (eq (jsstring s) (jsstring s))))

;; jsstring as a function value
(test (eq (funcall #'jsstring "abc") (read-from-string "#j\"abc\"")))

;; reader macro round-trip through the printer
(test (string= (write-to-string (jsstring "foo")) "#j\"foo\""))
(test (string= (write-to-string (jsstring "")) "#j\"\""))
(test (string= (write-to-string (jsstring "a\"b")) "#j\"a\\\"b\""))

;; princ prints the raw contents without #j or quotes
(test (string= (princ-to-string (jsstring "bar")) "bar"))

;;; FFI constants printing

(test (string= (write-to-string (jsbool t)) "#j:true"))
(test (string= (write-to-string (jsbool nil)) "#j:false"))
(test (string= (write-to-string (jsnull)) "#j:null"))
(test (string= (write-to-string (jsundefined)) "#j:undefined"))

;; princ prints the same (no escaping distinction for constants)
(test (string= (princ-to-string (jsbool t)) "#j:true"))
(test (string= (princ-to-string (jsbool nil)) "#j:false"))
(test (string= (princ-to-string (jsnull)) "#j:null"))
(test (string= (princ-to-string (jsundefined)) "#j:undefined"))

;;; clstring

;; JS string -> CL string
(test (stringp (clstring (jsstring "hello"))))
(test (string= (clstring (jsstring "hello")) "hello"))
(test (string= (clstring (jsstring "")) ""))

;; CL string passes through
(test (let ((s "world")) (eq (clstring s) s)))
(test (string= (clstring "abc") "abc"))

;; type error for non-strings
(test (handler-case (progn (clstring 42) nil)
        (type-error () t)))
(test (handler-case (progn (clstring (jsbool t)) nil)
        (type-error () t)))

;; clstring as a function value
(test (string= (funcall #'clstring (jsstring "test")) "test"))

;;; jsbool

;; nil -> false, anything else -> true
(test (eq (jsbool nil) (jsbool nil)))
(test (eq (jsbool t) (jsbool t)))
(test (eq (jsbool 42) (jsbool t)))
(test (eq (jsbool "hello") (jsbool t)))

;; jsbool as a function value
(test (eq (funcall #'jsbool nil) (jsbool nil)))
(test (eq (funcall #'jsbool t) (jsbool t)))

;;; clbool

;; true -> t, false/null/undefined -> nil
(test (eq (clbool (jsbool t)) t))
(test (eq (clbool (jsbool nil)) nil))
(test (eq (clbool (jsnull)) nil))
(test (eq (clbool (jsundefined)) nil))

;; CL booleans pass through
(test (eq (clbool t) t))
(test (eq (clbool nil) nil))

;; type error for non-booleans
(test (handler-case (progn (clbool 42) nil)
        (type-error () t)))

;; clbool as a function value
(test (eq (funcall #'clbool (jsbool t)) t))
(test (eq (funcall #'clbool (jsbool nil)) nil))


(test
 (string= (write-to-string
	   (let ((arr (vector (jsstring "foo") (jsstring "bar"))))
	     ((oget arr "map") (lambda (x &rest ignored) 1))))
	"#(1 1)"))

;;; eval handles JS value literals (exercises the data-vector path)
(test (eq (eval (jsbool t)) (jsbool t)))
(test (eq (eval (jsbool nil)) (jsbool nil)))
(test (eq (eval (jsnull)) (jsnull)))
(test (eq (eval (jsundefined)) (jsundefined)))

;;; A variable bound to undefined should be accessible via symbol-value
(defvar *test-js-undefined-var* (jsundefined))
(test (eq (symbol-value '*test-js-undefined-var*) (jsundefined)))
(test (boundp '*test-js-undefined-var*))

;;; compile-toplevel handles JS value literals (exercises the dump path)
(test (search "true"
        (jscl::with-compilation-environment
          (jscl::compile-toplevel (jsbool t)))))
(test (search "false"
        (jscl::with-compilation-environment
          (jscl::compile-toplevel (jsbool nil)))))
(test (search "null"
        (jscl::with-compilation-environment
          (jscl::compile-toplevel (jsnull)))))
(test (search "undefined"
        (jscl::with-compilation-environment
          (jscl::compile-toplevel (jsundefined)))))

;;; EOF
