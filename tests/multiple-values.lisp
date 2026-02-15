;;; -*- mode:lisp; coding:utf-8 -*-


;;; Regression for issue
;;;   https://github.com/jscl-project/jscl/issues/341
;;;
;;; This is written in a block/return in an attempt to isolate the
;;; problem from the context of the `test` macro:
(defun test-progn-multiple-value ()
  (block nil
    (return (eq 42 (progn nil (values 42))))))

(test (test-progn-multiple-value))


;;;; =============================================
;;;; VALUES basics
;;;; =============================================

;;; (values) with no arguments returns nil as primary value
(test (null (values)))

;;; Single value
(test (= 42 (values 42)))

;;; Primary value of multiple values
(test (= 1 (values 1 2 3)))

;;; VALUES in non-MV context discards extra values
(test (= 1 (+ (values 1 99) 0)))


;;;; =============================================
;;;; MULTIPLE-VALUE-BIND
;;;; =============================================

;;; Basic multiple-value-bind
(test (equal '(1 2 3)
             (multiple-value-bind (a b c) (values 1 2 3)
               (list a b c))))

;;; Fewer values than variables - extras are nil
(test (equal '(1 nil nil)
             (multiple-value-bind (a b c) (values 1)
               (list a b c))))

;;; More values than variables - extras are ignored
(test (equal '(1 2)
             (multiple-value-bind (a b) (values 1 2 3 4)
               (list a b))))

;;; Zero values
(test (equal '(nil nil)
             (multiple-value-bind (a b) (values)
               (list a b))))

;;; Single variable
(test (= 42 (multiple-value-bind (a) (values 42 99)
              a)))

;;; Nested multiple-value-bind
(test (equal '(1 2 10 20)
             (multiple-value-bind (a b) (values 1 2)
               (multiple-value-bind (c d) (values 10 20)
                 (list a b c d)))))

;;; Non-values form returns single value; extras nil
(test (equal '(42 nil)
             (multiple-value-bind (a b) 42
               (list a b))))

;;; m-v-b with function that returns multiple values
(defun mv-test-floor (x y)
  (values (truncate x y) (rem x y)))

(test (equal '(3 1)
             (multiple-value-bind (q r) (mv-test-floor 10 3)
               (list q r))))


;;;; =============================================
;;;; MULTIPLE-VALUE-LIST / NTH-VALUE / VALUES-LIST
;;;; =============================================

(test (equal '(1 2 3) (multiple-value-list (values 1 2 3))))
(test (equal '(42) (multiple-value-list (values 42))))
(test (equal '(nil) (multiple-value-list (values nil))))
(test (equal nil (multiple-value-list (values))))

;;; nth-value
(test (= 1 (nth-value 0 (values 1 2 3))))
(test (= 2 (nth-value 1 (values 1 2 3))))
(test (= 3 (nth-value 2 (values 1 2 3))))
(test (null (nth-value 3 (values 1 2 3))))

;;; values-list
(test (equal '(1 2 3) (multiple-value-list (values-list '(1 2 3)))))
(test (equal '(42) (multiple-value-list (values-list '(42)))))
(test (equal nil (multiple-value-list (values-list nil))))


;;;; =============================================
;;;; MULTIPLE-VALUE-CALL
;;;; =============================================

;;; Basic: call with all values from a form
(test (equal '(1 2 3)
             (multiple-value-call #'list (values 1 2 3))))

;;; Multiple forms: values are concatenated
(test (equal '(1 2 10 20)
             (multiple-value-call #'list (values 1 2) (values 10 20))))

;;; Mix of single-value and multiple-value forms
(test (equal '(1 10 20 99)
             (multiple-value-call #'list 1 (values 10 20) 99)))

;;; Single-value forms
(test (equal '(1 2 3)
             (multiple-value-call #'list 1 2 3)))

;;; Zero-value form contributes nothing
(test (equal '(1)
             (multiple-value-call #'list (values) 1)))


;;;; =============================================
;;;; MULTIPLE-VALUE-PROG1
;;;; =============================================

;;; Returns all values of first form
(test (equal '(1 2 3)
             (multiple-value-list
              (multiple-value-prog1
                  (values 1 2 3)
                (+ 10 20)))))

;;; Side effects of subsequent forms still happen
(let ((x 0))
  (multiple-value-prog1 (values 1 2) (setq x 99))
  (test (= x 99)))

;;; Subsequent forms do not clobber the returned multiple values
(test (equal '(1 2)
             (multiple-value-list
              (multiple-value-prog1
                  (values 1 2)
                (values 10 20 30)))))

;;; Single value case
(test (equal '(42)
             (multiple-value-list
              (multiple-value-prog1 42 (values 10 20)))))


;;;; =============================================
;;;; BLOCK / RETURN-FROM with multiple values
;;;; =============================================

;;; return-from propagates multiple values
(test (equal '(1 2 3)
             (multiple-value-list
              (block foo
                (return-from foo (values 1 2 3))))))

;;; return-from with single value
(test (equal '(42)
             (multiple-value-list
              (block foo
                (return-from foo 42)))))

;;; Nested blocks: inner return propagates multiple values
(test (equal '(10 20)
             (multiple-value-list
              (block outer
                (block inner
                  (return-from outer (values 10 20)))))))

;;; Block without return-from returns body's multiple values
(test (equal '(1 2 3)
             (multiple-value-list
              (block foo
                (values 1 2 3)))))

;;; Return-from in non-MV context gives primary value only
(test (= 1 (+ (block foo (return-from foo (values 1 2 3))) 0)))


;;;; =============================================
;;;; CATCH / THROW with multiple values
;;;; =============================================

;;; throw propagates multiple values through catch
(test (equal '(1 2 3)
             (multiple-value-list
              (catch 'tag
                (throw 'tag (values 1 2 3))))))

;;; catch body returns multiple values when no throw
(test (equal '(10 20)
             (multiple-value-list
              (catch 'tag
                (values 10 20)))))

;;; throw with single value
(test (equal '(42)
             (multiple-value-list
              (catch 'tag
                (throw 'tag 42)))))

;;; Nested catch/throw
(test (equal '(1 2)
             (multiple-value-list
              (catch 'outer
                (catch 'inner
                  (throw 'outer (values 1 2)))))))


;;;; =============================================
;;;; UNWIND-PROTECT with multiple values
;;;; =============================================

;;; unwind-protect preserves multiple values from protected form
(test (equal '(1 2 3)
             (multiple-value-list
              (unwind-protect (values 1 2 3)
                (+ 1 1)))))

;;; Cleanup forms do not clobber the returned values
(test (equal '(1 2)
             (multiple-value-list
              (unwind-protect (values 1 2)
                (values 10 20 30)))))

;;; Cleanup forms that call functions returning multiple values
;;; should NOT clobber the protected form's values
(defun mv-cleanup-helper () (values 99 98 97))
(test (equal '(1 2)
             (multiple-value-list
              (unwind-protect (values 1 2)
                (mv-cleanup-helper)))))

;;; Nested unwind-protect
(test (equal '(1 2)
             (multiple-value-list
              (unwind-protect
                  (unwind-protect (values 1 2)
                    (values 30 40))
                (values 50 60)))))

;;; Unwind-protect with throw through it
(test (equal '(1 2)
             (multiple-value-list
              (catch 'tag
                (unwind-protect
                    (throw 'tag (values 1 2))
                  (values 99 98))))))

;;; Unwind-protect in non-MV context returns primary value
(test (= 1 (+ (unwind-protect (values 1 2 3) (values 10 20)) 0)))


;;;; =============================================
;;;; FUNCALL with multiple values
;;;; =============================================

;;; funcall collects multiple values
(test (equal '(1 2 3)
             (multiple-value-list
              (funcall #'values 1 2 3))))

;;; funcall with a lambda returning multiple values
(test (equal '(10 20)
             (multiple-value-list
              (funcall (lambda () (values 10 20))))))

;;; funcall in non-MV context
(test (= 1 (funcall #'values 1 2 3)))

;;; Nested funcall with multiple values
(test (equal '(1 2 3)
             (multiple-value-list
              (funcall #'funcall #'values 1 2 3))))


;;;; =============================================
;;;; APPLY with multiple values
;;;; =============================================

;;; apply collects multiple values
(test (equal '(1 2 3)
             (multiple-value-list
              (apply #'values '(1 2 3)))))

;;; apply with leading args
(test (equal '(1 2 3)
             (multiple-value-list
              (apply #'values 1 '(2 3)))))

;;; Nested apply
(test (equal '(1 2 3)
             (multiple-value-list
              (apply #'apply #'values '(1 2 (3))))))


;;;; =============================================
;;;; EVAL with multiple values
;;;; =============================================

;;; eval returns multiple values
(test (equal '(1 2 3)
             (multiple-value-list
              (eval '(values 1 2 3)))))

;;; eval with m-v-b
(test (equal '(10 20)
             (eval '(multiple-value-list (values 10 20)))))


;;;; =============================================
;;;; Interactions between forms
;;;; =============================================

;;; m-v-b + unwind-protect: cleanup doesn't clobber
(test (equal '(1 2)
             (multiple-value-bind (a b)
                 (unwind-protect (values 1 2)
                   (values 10 20))
               (list a b))))

;;; m-v-b + block/return-from
(test (equal '(1 2)
             (multiple-value-bind (a b)
                 (block foo (return-from foo (values 1 2)))
               (list a b))))

;;; m-v-b + catch/throw
(test (equal '(1 2)
             (multiple-value-bind (a b)
                 (catch 'tag (throw 'tag (values 1 2)))
               (list a b))))

;;; Chain: funcall -> unwind-protect -> values
(test (equal '(1 2)
             (multiple-value-list
              (funcall (lambda ()
                         (unwind-protect (values 1 2)
                           (values 10 20)))))))

;;; Chain: block -> unwind-protect -> return-from with values
(test (equal '(1 2)
             (multiple-value-list
              (block foo
                (unwind-protect
                    (return-from foo (values 1 2))
                  (values 99 98))))))

;;; Chain: catch -> unwind-protect -> throw with values
(test (equal '(1 2)
             (multiple-value-list
              (catch 'tag
                (unwind-protect
                    (throw 'tag (values 1 2))
                  (values 99 98))))))

;;; Multiple-value-prog1 inside unwind-protect
(test (equal '(1 2)
             (multiple-value-list
              (unwind-protect
                  (multiple-value-prog1
                      (values 1 2)
                    (values 30 40))
                (values 50 60)))))

;;; Ensure _mv is properly cleared between calls
;;; A function returning multiple values followed by one returning single
(test (null (nth-value 1
              (progn
                (values 1 2 3)  ; sets _mv
                (list 42)))))   ; single value - _mv should be null

;;; m-v-b after a multi-value call should not leak stale _mv
(test (equal '(42 nil)
             (progn
               (values 1 2 3)  ; sets _mv
               (multiple-value-bind (a b) (+ 40 2)
                 (list a b)))))

;;; MULTIPLE-VALUE-SETQ (exact number of values matching variables)
;;; Note: JSCL's multiple-value-setq uses required params, so the
;;; number of values must match the number of variables.
(let (a b)
  (multiple-value-setq (a b) (values 10 20))
  (test (= a 10))
  (test (= b 20)))

(let (a b c)
  (multiple-value-setq (a b c) (values 1 2 3))
  (test (= a 1))
  (test (= b 2))
  (test (= c 3)))


;;;; =============================================
;;;; FFI with multiple values
;;;; =============================================

;;; Lisp functions called from JS return primary value
(let ((jsfn (lambda (x) (values x (* x 2)))))
  (test (= 5 (funcall jsfn 5))))

;;; oget retrieves property correctly
#+jscl
(test (= 0 ((jscl/ffi:oget (jscl/ffi:new #j:Date 0) "getTime"))))


;;;; =============================================
;;;; HANDLER-CASE with multiple values
;;;; =============================================

;;; handler-case propagates multiple values from successful macroexpand
;;; (JSCL-specific: expansion form and error behavior differ across implementations)
#+jscl
(progn
  (test (equal '((if t (progn 42) nil) t)
               (multiple-value-list
                (handler-case
                    (progn (macroexpand '(when t 42)))
                  (error (e) :error)))))

  ;;; handler-case catches error from failed macroexpansion
  (test (typep (handler-case
                   (progn (macroexpand '(when)))
                 (error (e) e))
               'error)))


;;;; =============================================
;;;; Stale _mv side channel from argument evaluation
;;;; =============================================

;;; When a function call is in a multiple-value context, _mv must
;;; reflect the values from that call, not from sub-expressions
;;; evaluated as arguments. intern returns 2 values, and that must not
;;; leak through when it appears as a sub-expression.

;;; multiple-value-list should see the single value from list, not the
;;; two values from intern inside the argument
(test (equal (list (list (intern "FOO" "CL-USER")))
             (multiple-value-list (list (intern "FOO" "CL-USER")))))

;;; Same issue with other functions that return multiple values
;;; floor returns 1 as primary value; the remainder 2 must NOT leak
(test (equal '((1))
             (multiple-value-list (list (floor 5 3)))))

;;; Nested: values from inner calls must not leak to outer
;;; multiple-value-call
(test (equal '(3)
             (multiple-value-list (+ 1 (nth-value 0 (values 2 99))))))

;;; A function that calls something returning multiple values but
;;; itself returns a single value should not leak the inner multiple
;;; values through multiple-value-bind.
(defun mv-leak-test-fn ()
  (funcall 'values 1 2)
  3)

(test (equal '(3 nil)
             (multiple-value-bind (a b) (mv-leak-test-fn)
               (list a b))))

;;; The stale _mv bug caused defstruct to fail because the setf of
;;; dsd-constructors received MAKE-ES (from intern inside %symbolize)
;;; instead of the actual list of constructor descriptors.
(test (handler-case
          (progn (macroexpand '(defstruct stale-mv-test-struct a b))
                 t)
        (error (e) nil)))

;;; EOF
