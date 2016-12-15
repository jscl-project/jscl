;;; misc.lisp --

;; JSCL is free software: you can redistribute it and/or modify it under
;; the terms of the GNU General  Public License as published by the Free
;; Software Foundation,  either version  3 of the  License, or  (at your
;; option) any later version.
;;
;; JSCL is distributed  in the hope that it will  be useful, but WITHOUT
;; ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
;; FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
;; for more details.
;;
;; You should  have received a  copy of  the GNU General  Public License
;; along with JSCL. If not, see <http://www.gnu.org/licenses/>.
(in-package :jscl)

(/debug "loading misc.lisp!")

(defparameter jscl/cl::*features* '(:jscl :common-lisp))

(defun jscl/cl::lisp-implementation-type ()
  #+jscl "JSCL"
  #-jscl (concatenate 'string "JSCL cross hosted by "
                      (cl:lisp-implementation-type)))

(defun jscl/cl::lisp-implementation-version ()
  #.*version*)

#.(read-#j)

;; Following  the  “most  useful”  (in one  opinion)  form,  these  wrap
;; Navigator  (browser) methods.  NB someone  familiar with  Node.JS may
;; want to  provide alternative  implementations that  are more  in line
;; with what a “normal” compiler would provide.

(defun null-if-empty (x)
  (if (and x (zerop (length x))) nil x))

(defun jscl/cl::short-site-name ()
  (null-if-empty
   #+jscl (or (and #j:location #j:location:hostname)
              (and #j:os #j:os:hostname (#j:os:hostname)))
   #+sbcl (run-program-compile-time "hostname" '("-d"))
   #-(or jscl sbcl) "localdomain"))

(defun jscl/cl::long-site-name ()
  (null-if-empty
   #+jscl (or (and #j:location #j:location:origin)
              (and #j:os #j:os:hostname (#j:os:hostname)))
   #+sbcl (substitute #\Space #\. (string-capitalize
                                   (run-program-compile-time "hostname" '("-d"))))
   #-(or jscl sbcl) "Local Domain"))

(defun jscl/cl::machine-instance ()
  (null-if-empty
   #+jscl (or (and #j:location #j:location:hostname)
              (and #j:os #j:os:hostname (#j:os:hostname)))
   #+sbcl (run-program-compile-time "hostname -d")
   #-(or jscl sbcl) "localhost"))

(defun jscl/cl::machine-version ()
  "The platform or OS type"
  (null-if-empty (let ((platform (or (and #j:navigator #j:navigator:platform)
                                     (and #j:process #j:process:platform))))
                   (if (and platform (find #\Space platform))
                       (subseq platform 0 (position #\Space platform))
                       platform))))

(defun jscl/cl::machine-type ()
  "Probably a CPU type"
  #+jscl
  (null-if-empty (let ((platform (or (and #j:navigator #j:navigator:platform)
                                     (and #j:process #j:process:arch))))
                   (if (and platform (find #\Space platform))
                       (subseq platform (1+ (position #\Space platform)))
                       platform)))
  #-jscl (cl:machine-type))

(defun jscl/cl::software-type ()
  "The browser's Product name; eg, Gecko for Firefox"
  #+jscl
  (null-if-empty (or (and #j:navigator #j:navigator:product)
                     (and #j:process #j:process:title)))
  #-jscl
  (cl:software-type))

(defun jscl/cl::software-version ()
  "The User-Agent string provided by the browser, or Node.js version"
  #+jscl
  (null-if-empty (or (and #j:navigator #j:navigator:userAgent)
                     (and #j:process #j:process:version)))
  #-jscl (cl:software-version))

(defmacro jscl/cl::time (form)
  (let ((start (gensym "START-TIME-"))
        (end (gensym "END-TIME-")))
    `(let ((,start (get-internal-real-time))
           (,end))
       (prog1 (progn ,form)
         (setq ,end (get-internal-real-time))
         (format t "Execution took ~a seconds.~%" (/ (- ,end ,start) 1000.0))))))


;;;; TRACE

;;; This trace  implementation works on symbols,  replacing the function
;;; with a wrapper. So  it will not trace calls to  the function if they
;;; got the function object before it was traced.

;;; An alist  of the  form (NAME  FUNCTION), where NAME  is the  name of
;;; a function, and FUNCTION is the function traced.
(defvar *traced-functions* nil)
(defvar *trace-level* 0)

(defun trace-report-call (name args)
  (dotimes (i *trace-level*) (write-string " "))
  (format t "~a: ~S~%" *trace-level* (cons name args)))

(defun trace-report-return (name values)
  (dotimes (i *trace-level*) (write-string " "))
  (format t "~a: ~S returned " *trace-level* name)
  (dolist (value values) (format t "~S " value))
  (format t "~%"))

(defun trace-functions (names)
  (if (null names)
      (mapcar #'car *traced-functions*)
      (dolist (name names names)
        (if (find name *traced-functions* :key #'car)
            (format t "`~S' is already traced.~%" name)
            (let ((func (fdefinition name)))
              (jscl/js::fset name (lambda (&rest args)
                                    (let (values)
                                      (trace-report-call name args)
                                      (let ((*trace-level* (+ *trace-level* 1)))
                                        (setq values (multiple-value-list (apply func args))))
                                      (trace-report-return name values)
                                      (values-list values))))
              (push (cons name func) *traced-functions*))))))

(defun untrace-functions (names)
  (when (null names)
    (setq names (mapcar #'car *traced-functions*)))
  (dolist (name names)
    (let ((func (cdr (find name *traced-functions* :key #'car))))
      (if func
          (jscl/js::fset name func)
          (format t "~S is not being traced.~%" name)))))

(defmacro jscl/cl::trace (&rest names)
  `(trace-functions ',names))

(defmacro jscl/cl::untrace (&rest names)
  `(untrace-functions ',names))


;;; Time related functions

(defun jscl/cl::get-internal-real-time ()
  (jscl/js::get-internal-real-time))

(defun get-unix-time ()
  (truncate (/ (get-internal-real-time) 1000)))

(defun jscl/cl::get-universal-time ()
  (+ (get-unix-time) 2208988800))
