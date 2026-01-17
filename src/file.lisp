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

(defun receive-xhr (uri fn-ok &optional fn-err)
  (let ((req (make-new #j:XMLHttpRequest)))
    ((oget req "open" ) "GET" uri t)
    ((oget req "setRequestHeader") "Cache-Control" "no-cache")
    ((oget req "setRequestHeader") "Cache-Control" "no-store")
    (setf (oget req "onreadystatechange")
          (lambda (evt)
            (when (= (oget req "readyState") 4)
              (if (= (oget req "status") 200)
                  (funcall fn-ok (oget req "responseText"))
                  (if fn-err
                      (funcall fn-err uri (oget req "status"))
                      (error "Can't open ~a: ~a" uri (oget req "statusText")))))))
    ((oget req "send"))))

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
  (let ((dir (oget (#j:FsPath:parse path) "dir")))
    (when (> (length dir) 0)
      (unless (#j:Fs:existsSync dir)
        ;; dont create new directory
        (error "No such output directory ~s" dir)))))

;;; replace ctrl-r from input
(defun ctrl-r-replace (src)
  (let ((reg (#j:RegExp (code-char 13) "g")))
    ((oget (lisp-to-js src) "replace") reg " ")))

(defun call-with-open-file (thunk name &key (direction :input) (if-exists :error) (sync t))
  (ecase sync
    (t (unless (find :node *features*)
         (error "Synchronous file operations not supported on this platform, try `:sync nil'")))
    (:maybe (setq sync (find :node *features*)))
    (nil))
  (if sync
      (ecase direction
        (:input
         (unless (#j:Fs:existsSync name)
           (error "No such file ~s" name))
         (with-input-from-string
             (s (ctrl-r-replace (#j:Fs:readFileSync name "utf-8")))
           (funcall thunk s)))
        (:output
         (case if-exists
           (:supersede
            (%check-output-directory name)
            (let ((buf (make-array 0 :element-type 'character :fill-pointer 0)))
              (multiple-value-prog1
                  (with-output-to-string (s buf) (funcall thunk s))
                (#j:Fs:writeFileSync name buf))))
           (t (error ":if-exists option ~a not implemented" if-exists)))))
      (ecase direction
        (:input
         (receive-xhr
          name
          (lambda (input)
            (with-input-from-string (s (ctrl-r-replace input))
              (funcall thunk s)))))
        (:output
         (error "Output to file not supported on this platform.")))))

(defun filename-extension (name)
  (let ((pos (position #\. name :from-end t)))
    (unless pos
      (error "Can't find extension of ~a" name))
    (subseq name (1+ pos))))
