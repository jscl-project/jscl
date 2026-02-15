;;; file.lisp

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

(defvar *fs*)
(defvar *path*)

(when (not (eq (typeof (%js-vref "require")) #j"undefined"))
  (setq *fs* (funcall (%js-vref "require") #j"fs"))
  (setq *path* (funcall (%js-vref "require") #j"path")))

(defun receive-xhr (method uri sync fn-ok &optional fn-err)
  (let ((req (new #j:XMLHttpRequest)))
    ((oget req "open") (jsstring method) (jsstring uri) (jsbool (not sync)))
    ((oget req "setRequestHeader") #j"Cache-Control" #j"no-cache")
    ((oget req "setRequestHeader") #j"Cache-Control" #j"no-store")
    ((oget req "send"))
    (flet ((handler ()
             (if (= (oget req "status") 200)
                 (funcall fn-ok (clstring (oget req "responseText")))
                 (if fn-err
                     (funcall fn-err uri (oget req "status"))
                     (error "Can't open ~a: ~a ~a"
                            uri (oget req "status") (clstring (oget req "statusText")))))))
      (cond (sync (handler))
            (t (setf (oget req "onreadystatechange")
                     (lambda (evt)
                       (when (= (oget req "readyState") 4)
                         (handler))))
               nil)))))

(defmacro with-open-file ((stream filespec &rest options
                           &key direction if-exists sync)
                          &body body)
  "SYNC can be T, NIL or :MAYBE. Defaults to T, which require
synchronous operation and signals error on platforms that don't
support it. If NIL, always perform asynchronous operation, evaluates
BODY in a callback. If :MAYBE, run synchronously on supported platform
and asynchronously otherwise."
  `(call-with-open-file (lambda (,stream) ,@body) ,filespec ,@options))

(defun %check-output-directory (path)
  (let ((dir (let ((d (oget ((oget *path* "parse") (jsstring path)) "dir")))
               (if d (clstring d) ""))))
    (when (> (length dir) 0)
      (unless (clbool ((oget *fs* "existsSync") (jsstring dir)))
        ;; dont create new directory
        (error "No such output directory ~s" dir)))))

;;; replace ctrl-r from input
(defun ctrl-r-replace (src)
  (let ((reg (#j:RegExp (code-char 13) #j"g")))
    (clstring ((oget (jsstring src) "replace") reg #j" "))))

(defun call-with-open-file (thunk name &key (direction :input) (if-exists :error) (sync t))
  (ecase direction
    (:input
     (cond ((and sync (find :node *features*))
            (unless (clbool ((oget *fs* "existsSync") (jsstring name)))
              (error "No such file ~s" name))
            (with-input-from-string
                (s (ctrl-r-replace (clstring ((oget *fs* "readFileSync") (jsstring name) #j"utf-8"))))
              (funcall thunk s)))
           ((and sync (find :web-worker *features*))
            (receive-xhr
             "GET" name t
             (lambda (input)
               (with-input-from-string (s (ctrl-r-replace input))
                 (funcall thunk s)))))
           ((eq sync t)
            (error "Synchronous file input not supported on this platform, try `:sync nil'"))
           (t
            (receive-xhr
             "GET" name nil
             (lambda (input)
               (with-input-from-string (s (ctrl-r-replace input))
                 (funcall thunk s)))))))
    (:output
     ;; TODO: implement async version
     (cond ((find :node *features*)
            (case if-exists
              (:supersede
               (%check-output-directory name)
               (let ((buf (make-array 0 :element-type 'character :fill-pointer 0)))
                 (multiple-value-prog1
                     (with-output-to-string (s buf) (funcall thunk s))
                   ((oget *fs* "writeFileSync") (jsstring name) (jsstring buf)))))
              (t (error ":if-exists option ~a not implemented" if-exists))))
           (t (error "Output to file not supported on this platform."))))))

(defun filename-extension (name)
  (let ((pos (position #\. name :from-end t)))
    (and pos (subseq name (1+ pos)))))

(defun probe-file (name)
  (cond ((find :node *features*)
         (clbool ((oget *fs* "existsSync") (jsstring name))))
        ((find :web-worker *features*)
         (receive-xhr "HEAD" name t
                      (lambda (body) t)
                      (lambda (uri status) nil)))
        (t (error "PROBE-FILE not supported on this platform"))))

(defun ensure-directories-exist (path)
  "Create directories for PATH if they don't exist."
  (when (find :node *features*)
    (let ((dir (clstring ((oget *path* "dirname") (jsstring path)))))
      ;; Only try to create if not current directory
      (when (and dir (not (string= dir ".")) (not (string= dir "")))
        ((oget *fs* "mkdirSync") (jsstring dir) (object "recursive" #j:true)))))
  (values path nil))
