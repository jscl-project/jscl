;;; jscl.lisp ---

;; Copyright (C) 2012, 2013 David Vazquez
;; Copyright (C) 2012 Raimon Grau

;; This program is free software: you can redistribute it and/or
;; modify it under the terms of the GNU General Public License as
;; published by the Free Software Foundation, either version 3 of the
;; License, or (at your option) any later version.
;;
;; This program is distributed in the hope that it will be useful, but
;; WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;; General Public License for more details.
;;
;; You should have received a copy of the GNU General Public License
;; along with this program.  If not, see <http://www.gnu.org/licenses/>.

(defvar *source*
  '(("boot"      :target)
    ("compat"    :host)
    ("utils"     :both)
    ("print"     :target)
    ("read"      :both)
    ("compiler"  :both)
    ("list"      :target)
    ("toplevel"  :target)))

(defun source-pathname
    (filename &key (directory '(:relative "src")) (type nil) (defaults filename))
  (if type
      (make-pathname :type type :directory directory :defaults defaults)
      (make-pathname            :directory directory :defaults defaults)))

;;; Compile jscl into the host
(with-compilation-unit ()
  (dolist (input *source*)
    (when (member (cadr input) '(:host :both))
      (compile-file (source-pathname (car input))))))

;;; Load jscl into the host
(dolist (input *source*)
  (when (member (cadr input) '(:host :both))
    (load (source-pathname (car input)))))

(defun read-whole-file (filename)
  (with-open-file (in filename)
    (let ((seq (make-array (file-length in) :element-type 'character)))
      (read-sequence seq in)
      seq)))

(defun ls-compile-file (filename out &key print)
  (let ((*compiling-file* t)
        (*compile-print-toplevels* print))
    (let* ((source (read-whole-file filename))
           (in (make-string-stream source)))
      (format t "Compiling ~a...~%" filename)
      (loop
         with eof-mark = (gensym)
         for x = (ls-read in nil eof-mark)
         until (eq x eof-mark)
         for compilation = (ls-compile-toplevel x)
         when (plusp (length compilation))
         do (write-string compilation out)))))

(defun bootstrap ()
  (setq *environment* (make-lexenv))
  (setq *literal-table* nil)
  (setq *variable-counter* 0
        *gensym-counter* 0
        *literal-counter* 0
        *block-counter* 0)
  (with-open-file (out "jscl.js" :direction :output :if-exists :supersede)
    (write-string (read-whole-file (source-pathname "prelude.js")) out)
    (dolist (input *source*)
      (when (member (cadr input) '(:target :both))
        (ls-compile-file (source-pathname (car input) :type "lisp") out))))
  ;; Tests
  (with-open-file (out "tests.js" :direction :output :if-exists :supersede)
    (dolist (input (append (directory "tests.lisp")
                           (directory "tests/*.lisp")
                           (directory "tests-report.lisp"))) 
      (ls-compile-file input out))))


;;; Run the tests in the host Lisp implementation. It is a quick way
;;; to improve the level of trust of the tests.
(defun run-tests-in-host ()
  (dolist (input (append (directory "tests.lisp")
                         (directory "tests/*.lisp")
                         (directory "tests-report.lisp")))
    (load input)))
