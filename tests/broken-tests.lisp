#|(characters.lisp
 (char> #\z #\A); =>  implementation-dependent
 (char> #\Z #\a); =>  implementation-dependent	
 (stable-sort (list #\b #\A #\B #\a #\c #\C) #'char-lessp); =>  (#\A #\a #\b #\B #\c #\C)
 (stable-sort (list #\b #\A #\B #\a #\c #\C) #'char<); => implementation-dependent
 (equal #\A (character 'a))
 (equal #\a (character '\a))
 (expected-failure (character 65.))
 (expected-failure (character 'apple))
 (alpha-char-p #\Newline)
 (not (alphanumericp #\Newline))
 (mapcar #'(lambda (radix)
             (map 'list #'(lambda (x) (digit-char-p x radix))
                  "059AaFGZ"))
         '(2 8 10 16 36))
 (graphic-char-p #\Space)
 (not (graphic-char-p #\Newline))
 (string= "Space" (char-name #\Space)))
(list.lisp
 (SETF (CAR (CAR FOO)) 0) working fine in the REPL)
 (package.lisp
 (tests (eq (eval '(in-package #:cl-user)) (find-package '#:cl-user))))
(read.lisp
 ;; TODO: Insert test either read-from-string supports all these parameters
 ;; or when test macro supports error handling, whichever comes first.
 (tests (equal (read-from-string " 1 3 5" t nil :start 2) (values 3 5))))
(seq.lisp
 ;;This  fails expectely as you can't compare vectors with equal.
 #+nil
 (equal (substitute 99 3 #(1 2 3 4) :test #'<=) #(1 2 99 99)))
(strings.lisp
 ;; BUG: The compiler will macroexpand the forms below (char str N)
 ;; will expand to internal SBCL code instead of our (setf char). It
 ;; is because macrodefinitions during bootstrapping are not included
 ;; in the host's environment. It should, but we have to think how to
 ;; avoid conflicts (package renaming??)
 ;; JSCL: no SIMPLE-STRING-P yet, so disabled
 (test (simple-string-p ""))	
 (test (simple-string-p "abc"))
 (test (not (simple-string-p 'not-a-string)))
 (test (let ((str (make-array 3 :element-type 'character :fill-pointer t)))
	 (if (not (simple-vector-p str))
	     (not (simple-string-p str))
	     (simple-string-p str))))
 ;; JSCL: no SCHAR yet, so disabled
 (test (char= (schar "abc" 0) #\a))
 (test (char= (schar "abc" 1) #\b))
 (test (char= (schar "abc" 2) #\c))
 ;; JSCL: no :FILL-POINTER yet, so disabled
 (test (let ((str (make-array 10
			      :element-type 'character
			      :fill-pointer 3
			      :initial-contents "0123456789")))
	 (and (string= str "012")
              (char= (char str 3) #\3)
              (char= (char str 4) #\4)
              (char= (char str 5) #\5)
              (char= (char str 6) #\6)
              (char= (char str 7) #\7)
              (char= (char str 8) #\8)
              (char= (char str 9) #\9)
              (char= (vector-pop str) #\2))))
 ;; JSCL: making an array of BASE-CHAR doesn't make a string, yet
 (test (string= (make-array 0 :element-type 'character)
		(make-array 0 :element-type 'base-char)))
 (test (not (string/= (make-array 0 :element-type 'character)
		      (make-array 0 :element-type 'base-char))))
 (test (not (string< (make-array 0 :element-type 'character)
		     (make-array 0 :element-type 'base-char))))
 (test (not (string> (make-array 0 :element-type 'character)
		     (make-array 0 :element-type 'base-char))))
 (test (eql (string<= (make-array 0 :element-type 'character)
		      (make-array 0 :element-type 'base-char)) 0))
 (test (string-equal (make-array 0 :element-type 'character)
		     (make-array 0 :element-type 'base-char)))
 (test (not (string-not-equal (make-array 0 :element-type 'character)
			      (make-array 0 :element-type 'base-char))))
 (test (eql (string-not-greaterp (make-array 0 :element-type 'character)
				 (make-array 0 :element-type 'base-char)) 0))
 (test (eql (string-not-lessp (make-array 0 :element-type 'character)
			      (make-array 0 :element-type 'base-char)) 0))
 ;; JSCL: no SCHAR, so disabled
 ( (let ((str (make-string 3)))
     (and (simple-string-p str)
          (setf (schar str 0) #\x)
          (setf (schar str 1) #\y)
          (setf (schar str 2) #\z)
          (string= str "xyz"))))
 ;; JSCL: #\Space isn't read correctly yet
 (test (string= (make-string 1 :initial-element #\Space) " "))
 ( (stringp (make-array 0 :element-type 'base-char)))
 ;; JSCL: an array of STANDARD-CHAR isn't a STRINGP yet, either
 ( (stringp (make-array 0 :element-type 'standard-char)))
 ;; JSCL: BUG?: this barfs inside the JS function xstring(), and i don't know why.
 (test (subtypep (upgraded-array-element-type
		  (array-element-type (make-string 3 :element-type 'standard-char)))
		 'character)))|#
