;;; jscl.lisp ---

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

;; JSCL is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; JSCL is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.

(defpackage :jscl
  (:use :cl)
  (:export #:bootstrap #:run-tests-in-host))

(in-package :jscl)

(defvar *source*
  '(("boot"             :target)
    ("compat"           :host)
    ("utils"            :both)
    ("numbers"          :target)
    ("char"             :target)
    ("list"             :target)
    ("array"            :target)
    ("string"           :target)
    ("sequence"         :target)
    ("stream"           :target)
    ("print"            :target)
    ("package"          :target)
    ("misc"             :target)
    ("ffi"              :both)
    ("read"             :both)
    ("defstruct"        :both)
    ("lambda-list"      :both)
    ("backquote"        :both)
    ("compiler-codegen" :both)
    ("compiler"         :both)
    ("toplevel"         :target)))

(defun source-pathname
    (filename &key (directory '(:relative "src")) (type nil) (defaults filename))
  (if type
      (make-pathname :type type :directory directory :defaults defaults)
      (make-pathname            :directory directory :defaults defaults)))

;;; Compile jscl into the host
(with-compilation-unit ()
  (dolist (input *source*)
    (when (member (cadr input) '(:host :both))
      (let ((fname (source-pathname (car input))))
        (multiple-value-bind (fasl warn fail) (compile-file fname)
          (declare (ignore fasl warn))
          (when fail
            (error "Compilation of ~A failed." fname)))))))

;;; Load jscl into the host
(dolist (input *source*)
  (when (member (cadr input) '(:host :both))
    (load (source-pathname (car input)))))

(defun read-whole-file (filename)
  (with-open-file (in filename)
    (let ((seq (make-array (file-length in) :element-type 'character)))
      (read-sequence seq in)
      seq)))

(defun !compile-file (filename out &key print)
  (let ((*compiling-file* t)
        (*compile-print-toplevels* print))
    (let* ((source (read-whole-file filename))
           (in (make-string-stream source)))
      (format t "Compiling ~a...~%" filename)
      (loop
         with eof-mark = (gensym)
         for x = (ls-read in nil eof-mark)
         until (eq x eof-mark)
         do (let ((compilation (compile-toplevel x)))
              (when (plusp (length compilation))
                (write-string compilation out)))))))

(defun dump-global-environment (stream)
  (flet ((late-compile (form)
           (let ((*standard-output* stream))
             (write-string (compile-toplevel form)))))
    ;; We assume that environments have a friendly list representation
    ;; for the compiler and it can be dumped.
    (dolist (b (lexenv-function *environment*))
      (when (eq (binding-type b) 'macro)
        (setf (binding-value b) `(,*magic-unquote-marker* ,(binding-value b)))))
    (late-compile `(setq *environment* ',*environment*))
    ;; Set some counter variable properly, so user compiled code will
    ;; not collide with the compiler itself.
    (late-compile
     `(progn
        (progn ,@(mapcar (lambda (s) `(%intern-symbol (%js-vref ,(string (cdr s)))))
                         (remove-if-not #'symbolp *literal-table* :key #'car)))
        (setq *literal-table* ',*literal-table*)
        (setq *variable-counter* ,*variable-counter*)
        (setq *gensym-counter* ,*gensym-counter*)))
    (late-compile `(setq *literal-counter* ,*literal-counter*))))


(defun bootstrap ()
  (let ((*features* (cons :jscl *features*))
        (*package* (find-package "JSCL")))
    (setq *environment* (make-lexenv))
    (setq *literal-table* nil)
    (setq *variable-counter* 0
          *gensym-counter* 0
          *literal-counter* 0)
    (with-open-file (out "jscl.js" :direction :output :if-exists :supersede)
      (write-string (read-whole-file (source-pathname "prelude.js")) out)
      (dolist (input *source*)
        (when (member (cadr input) '(:target :both))
          (!compile-file (source-pathname (car input) :type "lisp") out)))
      (dump-global-environment out))
    ;; Tests
    (with-open-file (out "tests.js" :direction :output :if-exists :supersede)
      (dolist (input (append (directory "tests.lisp")
                             (directory "tests/*.lisp")
                             (directory "tests-report.lisp")))
        (!compile-file input out)))))


;;; Run the tests in the host Lisp implementation. It is a quick way
;;; to improve the level of trust of the tests.
(defun run-tests-in-host ()
  (let ((*package* (find-package "JSCL")))
    (load "tests.lisp")
    (let ((*use-html-output-p* nil))
      (declare (special *use-html-output-p*))
      (dolist (input (directory "tests/*.lisp"))
        (load input)))
    (load "tests-report.lisp")))
