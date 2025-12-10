;;; -*- mode:lisp;  coding:utf-8 -*-

;;;
;;; LOAD - load & compile Common Lisp file.
;;;        Simple implementation of the common Lisp function 'load'
;;;        for JSCL environment.

;;;
;;; JSCL is free software: you can redistribute it and/or
;;; modify it under the terms of the GNU General Public License as
;;; published by the Free Software Foundation, either version 3 of the
;;; License, or (at your option) any later version.
;;;
;;; JSCL is distributed in the hope that it will be useful, but
;;; WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
;;; General Public License for more details.
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with JSCL.  If not, see <http://www.gnu.org/licenses/>.


;;;

(defun _xhr_receiver_ (uri fn-ok &optional fn-err)
  (let ((req (make-new #j:XMLHttpRequest)))
    ((oget req "open" ) "GET" uri t)
    ((oget req "setRequestHeader") "Cache-Control" "no-cache")
    ((oget req "setRequestHeader") "Cache-Control" "no-store")
    (setf (oget req "onreadystatechange")
          (lambda (evt)
            (if (= (oget req "readyState") 4)
                (if (= (oget req "status") 200)
                    (funcall fn-ok (oget req "responseText"))
                    (if fn-err
                        (funcall fn-err uri (oget req "status") )
                        (format t "xhr: ~a~%    ~a~%" (oget req "statusText") uri )) ))))
    ((oget req "send"))))


(defun _ldr_eval_ (sexpr verbose)
  (when verbose
    (format t "~a ~a~%" (car sexpr) (cadr sexpr)))
  (handler-case
      (progn
        (dolist (x (multiple-value-list (eval sexpr)))
          (format t  "  ~a~%"  x))
        t)
    (error (msg)
      (typecase condition
        (simple-error
         (apply #'format t
                (simple-condition-format-control condition)
                (simple-condition-format-arguments condition)))
        (t  (let* ((*print-escape* nil))
              (print-object condition))))
      nil))
  nil)


(defun _load_form_eval_ (input verbose)
  (let ((stream)
        (expr)
        (eof (gensym "LOADER" ))
        (*package* *package*))
    (setq stream (make-string-input-stream input))
    (terpri)
    (tagbody
     rdr-feeder
       (setq expr (ls-read stream nil eof))
       (when (eql expr eof)
         (go rdr-eof))
       (_ldr_eval_ expr verbose)
       (go rdr-feeder)
     rdr-eof)
    (values)))



;;; replace cntrl-r from input
(defun _ldr_ctrl-r_replace_ (src)
  (let ((reg (#j:RegExp (code-char 13) "g")))
    ((oget (lisp-to-js src) "replace") reg " ")))


;;; (load name &key verbose sync output place hook)
;;;
;;; sync   -  use node.js 'fs' facilities for read/write ops
;;;          automatically turned off for browser with warn
;;;
;;; output - optional mode
;;;          only for node/electron platform
;;;          'output' it is the place of the local file system where will be saved the file
;;;          with the javascript code after compilation for future loading
;;;          by the function 'require'.
;;;
;;; place  - optional mode
;;;          only for node/electron platform
;;;          required 'jscl.js' path, by default eq './'
;;;          'place' it is the file system location from where the module 'jscl.js'
;;;          will be is load by function 'require'
;;;
;;;          Example:
;;;
;;;          By default your 'jscl.js' location is "./"
;;;
;;;          (load "src/project/jso.lisp" :output "./lib/app/jso/jso" :place "../../../")
;;;
;;;          1. ./lib/app/jso must be exists
;;;          2. ./lib/app/jso must contains file 'package.json' with (as minimum):
;;;                        {
;;;                            "name": "jso",
;;;                            "main": "jso.js"
;;;                        }
;;;          So, (require "./lib/app/jso/jso") will load file 'jso.js' from './lib/app/jso'
;;;
;;;          See node.js documentation for 'require' function
;;;
;;; hook  - #() store place for js-code
;;;
;;;          IMPORTANT!! don't use literal #() (see Issue #345)
;;;          (setq bin (make-array 0 :fillpointer 0)) 
;;;          (load "file1.lisp" :hook bin)
;;;          (load "file2.lisp" :hook bin)
;;;          (load "file3.lisp" :hook bin :output "lib.js")
;;;              => will be bundle js-code file1, file2, file3 from bin to "lib.js"
;;;
;;;         
;;;         you will be use (require "./lib") or use html tag:
;;;         <script src="lib.js" type="text/javascript" charset="utf-8"></script>
;;;         without compilation.
;;;
;;;
;;; have a fun
;;;

(defun node-environment-p ()
  (if (find :node *features*) t))

(defun load (name &key verbose (sync (node-environment-p)) output place hook)
  (terpri)
  (cond
    ;; node.js/electron platform
    ((node-environment-p)
     (if place
         (setq place (concat place "./"))
         (setq place "./"))
     (if sync
         (loader-sync-mode name verbose output place hook)
         (loader-async-mode name verbose output place hook)))
    ;; browser platform
    (t (when sync
         (warn "sync mode only for node/electron platform~%will be used async mode"))
       (when (or output hook)
         (warn "output/hook options only for node/electron platform"))
       (warn "In browser mode, the LOAD function is executed ONLY if `web-security` is DISABLED (CORS restriction)")
       (loader-browser-mode name verbose)))
  (values))


(defun loader-browser-mode (name verbose)
  (_xhr_receiver_
   name
   (lambda (input)
     (_load_form_eval_ (_ldr_ctrl-r_replace_ input) verbose))
   (lambda (url status)
     (format t "~%Load: Can't load ~a~%       Status: ~a~%" url status))))

;;; alowe make bundle from source received from local fs (by FILE:)
;;; or from remote resourse (by HTTP:)
(defun loader-async-mode (name verbose bundle-name place hook)
  (_xhr_receiver_
   name
   (lambda (input)
     (_load_eval_bundle_ (_ldr_ctrl-r_replace_ input) verbose bundle-name place hook))
   (lambda (url status)
     (format t "~%Load: Can't load ~a~%       Status: ~a~%" url status))))

;;; sync mode
(defun loader-sync-mode (name verbose bundle-name place hook)
  ;; check what input file exists
  (unless (#j:Fs:existsSync name)
    (error "No such file ~s" name))
  (_load_eval_bundle_
   (_ldr_ctrl-r_replace_ (#j:Fs:readFileSync name "utf-8"))
   verbose
   bundle-name
   place
   hook))

(defun _load_eval_bundle_ (input verbose bundle-name place hook)
  (let ((*package* *package*)
        stream eof code expr rc code-stor fbundle)
    (setq eof (gensym "LOADER"))
    (if hook (setq code-stor hook))
    (when bundle-name
      (if hook
          (setq code-stor hook)
          ;; see Issue #345, #350, #397
          (setq code-stor (make-array 0 :fill-pointer 0)))
      (setq fbundle t))
    (setq stream (make-string-input-stream input))
    (tagbody sync-loader-rdr
     _feeder_
       (handler-case
           (progn
             (setq expr (ls-read stream nil eof))
             (when (eq expr eof) (go _rdr_done_))
             (when verbose (format t "~a ~a~%" (car expr) (cadr expr)))
             (with-compilation-environment
               (setq code (compile-toplevel expr t t))
               (setq rc (js-eval code nil))
               (when verbose (format t "  ~a~%" rc))
               ;; so, expr already verifyed
               ;; store expression after compilation/evaluated
               (cond (fbundle ((oget code-stor "push") code))
                     (hook ((oget code-stor "push") code))
                     (t t)) ))
         (error (msg)
           (format t "   Error: ")
           (_load_cond_err_handl_ msg)
           ;; break read-eval loop
           ;; no bundle
           (setq fbundle nil)
           (go _rdr_done_)))
       (go _feeder_)
     _rdr_done_
       (setq stream nil expr nil code nil))
    (when fbundle
      (_loader_check_output_directory_ bundle-name)
      (_loader_make_bundle code-stor bundle-name place)
      (setq code-stor nil))
    (values)))

;;; error message handle path
(defun _load_cond_err_handl_(condition)
  (typecase condition
    (simple-error
     (apply #'format t
            (simple-condition-format-control condition)
            (simple-condition-format-arguments condition)))
    (type-error
     ;; note:
     ;; there can be custom event handling here.
     ;; while it remains as it was done.
     ;; sometime later
     (let* ((*print-escape* nil))
       (print-object condition)))
    (t  (let* ((*print-escape* nil))
          (print-object condition))))
  (write-char  #\newline))


;;; Check what output directory exists
(defun _loader_check_output_directory_ (path)
  (let ((dir (oget (#j:FsPath:parse path) "dir")))
    (if (> (length dir) 0)
        (unless (#j:Fs:existsSync dir)
          ;; dont create new directory
          (error "No such output directory ~s" dir))
        ;; path eq "file.lisp"
        ;; so, dir eq "" and eq "./" by default
        t )))

;;; header for jscl application module
(defun _loader_bundle_stm_open_ (stream)
  ((oget stream "write")
   (concat "(function(jscl){'use strict'; (function(values, internals){" #\newline)))

;;; tail for jscl application module
(defun _loader_bundle_stm_close_ (stream place)
  ((oget stream "write")
   (concat #\newline
           "})(jscl.internals.pv, jscl.internals); })(typeof require !== 'undefined'? require('"
           place
           "jscl'): window.jscl)"
           #\newline)))

;;; wrapper for one module statement
(defun _loader_stm_wraper_ (code)
  (concat
   "(function(values, internals){"
   code
   ";})(values,internals);"  #\newline) )


;;; bundle maker
(defun _loader_make_bundle (code fname place)
  (let ((stream (#j:Fs:createWriteStream fname))
        (nums 0))
    (_loader_bundle_stm_open_ stream)
    ;; for each statement in code
    ((oget code "forEach")
     (lambda (stm &rest others)
       (setq nums (1+ nums))
       ;; write to stream
       ((oget stream "write") (_loader_stm_wraper_ stm))))
    (_loader_bundle_stm_close_ stream place)
    ((oget stream "end"))
    (format t "The bundle up ~d expressions into ~s~%" nums fname) ))



;;; other loader functions
;;;
;;; Warning:
;;;        The both functions only for rapidly development
;;;        Not for production

;;;
;;; load-js - load javascript code from local file system (by FILE:),
;;;           or remote resource (by HTTP:) with used html tag 'link/stylesheet'
(defun load-js (from &optional onload)
  (let ((link (#j:window:document:createElement "script"))
        (body #j:window:document:body ))
    (setf (oget link "charset") "utf-8"
          (oget link "type") "text/javascript"
          (oget link "src") from
          (oget link "onerror") (lambda (ignore)
                                  (format t "~%Error loading ~s file.~%" from)
                                  (funcall ((oget body "removeChild" "bind") body link ))
                                  (values)))
    (when onload
      (setf (oget link "onload") (lambda (ignore)
                                   (funcall ((oget body "removeChild" "bind") body link ))
                                   (funcall onload)
                                   (values))))
    (funcall ((oget body "appendChild" "bind" ) body link))
    (unless onload
      (funcall ((oget body "removeChild" "bind") body link )))
    (values) ))


;;;
;;; load-css - load cascade style from local file system (by FILE:),
;;;           or remote resource (by HTTP:) with used html tag 'link/stylesheet'
(defun load-css (from &optional onload)
  (let ((link (#j:window:document:createElement "link"))
        (body #j:window:document:body ))
    (setf (oget link "rel") "stylesheet"
          (oget link "type") "text/css"
          (oget link "href") from
          (oget link "onerror") (lambda (ignore)
                                  (format t "~%Error loading ~s file.~%" from)
                                  (funcall ((oget body "removeChild" "bind") body link ))
                                  (values)))
    (when onload
      (setf (oget link "onload")
            (lambda (ignore) (funcall onload from))))
    (funcall ((oget body "appendChild" "bind" ) body link))
    (values) ))


;;; EOF
