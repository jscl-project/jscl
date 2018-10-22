(test (string= "a" (format nil "a")))

(test (string= "~" (format nil "~~")))

(test (string= "a~a" (format nil "a~~a")))

(test (string= "a
a" (format nil "a~%a")))

(test (string= "this is foo" (format nil "this is ~a" "foo")))
(test (string= "this is foo" (format nil "this is ~A" "foo")))

(test (string= "this is \"foo\"" (format nil "this is ~s" "foo")))
(test (string= "this is \"foo\"" (format nil "this is ~S" "foo")))

(test (string= "this is 2" (format nil "this is ~*~A" 1 2)))

;;; ~C
(test (string= "a" (format nil "~C" #\a)))
(test (string= " " (format nil "~C" #\space)))
(test (string= "Space" (format nil "~:C" #\space)))
(test (string= "Newline" (format nil "~:C" #\newline)))

;;; Premature end of control string
#+jscl
(test 
 (string= "Premature end of control string \"result ~\"" 
          (let ((result))
              (handler-case 
                  (progn 
                      (format nil "its ok ~~")
                      (format nil "result ~"))
                (error (msg)
                    (setq result (format nil (car (jscl::!condition-args msg)) (cadr (jscl::!condition-args msg))))))
              result)))

(def!struct test1 fn)
(defstruct test2 fn)

(let ((s1 (make-test1 :fn 'name))
      (s2 (make-test2 :fn 'name))
      (ht (make-hash-table :test #'equal)))
  (test (equal '(test1 name) s1))
  (test (equal '(test2 name) s2))
  (test (equal 'hash-table (car ht))))

(defstruct test-structure fn)
(defstruct test-var fn)

(let ((s (make-test-structure :fn 'format))
      (h (make-hash-table :test #'eq)))
  (test (equal t (string= "#<structure test-var>" (format nil "~a" (make-test-var :fn 'format)))))
  (test (equal t (string= "#<structure test-structure>" (format nil "~a" s))))
  (test (equal t (string= "#<hash-table :test equal>" (format nil "~a" (make-hash-table :test #'equal)))))
  (test (equal t (string= "#<hash-table :test eql>" (format nil "~a" (make-hash-table)))))
  (test (equal t (string= "#<hash-table :test eq>" (format nil "~a" h)))))
