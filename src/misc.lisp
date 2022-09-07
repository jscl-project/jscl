;;; misc.lisp --

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

(/debug "loading misc.lisp!")

(defun lisp-implementation-type ()
  "JSCL")

(defun lisp-implementation-version ()
  #.*version*)

(defun short-site-name ()
  nil)

(defun long-site-name ()
  nil)

;;; Javascript has not access to the hardware. Would it make sense to
;;; have the browser data as machine abstraction instead?

(defun machine-instance ()
  nil)

(defun machine-version ()
  nil)

(defun machine-type ()
  nil)

;;; Return browser information here?

(defun software-type ()
  nil)

(defun software-version ()
  nil)

(defmacro time (form)
  (let ((start (gensym))
        (end (gensym)))
    `(let ((,start (get-internal-real-time))
           (,end))
       (prog1 (progn ,form)
         (setq ,end (get-internal-real-time))
         (format t "Execution took ~a seconds.~%" (/ (- ,end ,start) 1000.0))))))


;;;; TRACE

;;; This trace implementation works on symbols, replacing the function
;;; with a wrapper. So it will not trace calls to the function if they
;;; got the function object before it was traced.

;;; An alist of the form (NAME FUNCTION), where NAME is the name of a
;;; function, and FUNCTION is the function traced.
(defvar *traced-functions* nil)
(defvar *trace-level* 0)

;;; @vlad-km 04-09-2022
;;; Prevent RangeError: Maximum call stack size exceeded
;;; on  trace call
(defvar *prevent-trace-stop-list*
  '(trace
    princ prin1 prin1-to-string princ-to-string 
    print
    format !format
    write write-char write-string write-integer write-symbol write-line write-to-string
    terpri fresh-line))

(defun %prevent-infinite-trace (name)
  (typecase name
    (symbol
     (if (jscl::memq name *prevent-trace-stop-list*)
         (error "Trace - `~S` this function is not traceable." name)))
    (otherwise (error "Trace - the traceable function name `~S` must be a symbol." name))))


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
        (%prevent-infinite-trace name)
        (if (find name *traced-functions* :key #'car)
            (format t "`~S' is already traced.~%" name)
            (let ((func (fdefinition name)))
              (fset name (lambda (&rest args)
                           (let (values)
                             (trace-report-call name args)
                             (let ((*trace-level* (1+ *trace-level*)))
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
          (fset name func)
          (format t "~S is not being traced.~%" name)))))

(defmacro trace (&rest names)
  `(trace-functions ',names))

(defmacro untrace (&rest names)
  `(untrace-functions ',names))


;;; Time related functions

(defun get-internal-real-time ()
  (get-internal-real-time))

(defun get-unix-time ()
  (truncate (/ (get-internal-real-time) 1000)))

(defun get-universal-time ()
  (+ (get-unix-time) 2208988800))


;;;; STEP

;; Adding STEP macro entry here with no useful code for now, only for ANSI compliance as
;; in other Lisp platforms (like Clozure CL). The expansion of this macro will be only the code passed
;; as the argument

(defmacro step (form)
  "Stepping is no currently available"
  form)
