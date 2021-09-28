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

(/debug "loading repl-deno/repl.lisp!")

(defun start-repl ()
  (welcome-message)
  (let ((prompt (format nil "~a>" (package-name *package*))))
    (loop
      do
      (let ((line (#j:prompt prompt)))
        (%js-try
          (progn
            (handler-case
              (let ((results (multiple-value-list
                             (eval-interactive (read-from-string line)))))
                (dolist (result results)
                  (print result)))
              (error (err)
                (format t "ERROR: ")
                (apply #'format t (!condition-args err))
                (terpri))))
          (catch (err)
            (let ((message (or (oget err "message") err)))
              (format t "ERROR[!]: ~a~%" message))))
        (setf prompt (format nil "~a>" (package-name *package*)))))))

(defun deno-init ()
  (let ((text-encoder (make-new #j:TextEncoder)))
    (setq *standard-output*
      (make-stream
        :write-fn (lambda (string)
                    ;; TODO switch to std/io/utils because Deno.writeAllSync is deprecated
                    (#j:Deno:writeAllSync #j:Deno:stdout ((oget text-encoder "encode") string))))))
  (start-repl))

(deno-init)
