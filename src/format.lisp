;;; format.lisp ---

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

(/debug "loading format.lisp!")


(defun modifier-char-p (c)
  (or (char= c #\:) (char= c #\@)))


(defun format-special (chr arg parameters modifiers stream)
  (case (char-upcase chr)
    (#\S (prin1 arg stream))
    (#\A (princ arg stream))
    (#\D (princ arg stream))
    (#\C (cond ((member #\: modifiers)
                (write-char-aux arg stream))
               (t
                (write-char arg stream))))
    (t
     (warn "~S is not implemented yet, using ~~S instead" chr)
     (prin1 arg stream))))


(defun get-format-parameter (fmt i args)
  (let ((c (char fmt i)))
    (values (cond ((char= c #\')
                   (prog1 (char fmt (incf i))
                     (incf i)))
                  ((char= c #\v)
                   (prog1 (pop args)
                     (incf i)))
                  ((char= c #\#)
                   (prog1 (length args)
                     (incf i)))
                  ((digit-char-p c)
                   (let ((chars nil))
                     (while (char<= #\0 (char fmt i) #\9)
                       (push (char fmt i) chars)
                       (incf i))
                     (parse-integer (map 'string 'identity (nreverse chars))))))
            i
            args)))


(defun parse-format-directive (fmt i args)
  (let ((parms nil)
        (modifiers '())
        parm)
    (block nil
      (loop
        (multiple-value-setq (parm i args) (get-format-parameter fmt i args))
        (if parm
            (push parm parms)
            (let ((c (char fmt i)))
              (cond ((char= c #\,)
                     (incf i))
                    ((modifier-char-p c)
                     (push c modifiers)
                     (when (modifier-char-p (char fmt (incf i)))
                       (push (char fmt i) modifiers)
                       (incf i))
                     (return))
                    (t
                     (return)))))))
    (values (nreverse parms) modifiers i args)))


(defun !format (destination fmt &rest args)
  (let* ((len (length fmt))
         (i 0)
         (end (1- len))
         (arguments args))
    (let ((res
            (with-output-to-string (stream)
              (while (< i len)
                (let ((c (char fmt i)))
                  (if (char= c #\~)
                      (progn
                          (if (= i end) (error "Premature end of control string ~s" fmt))
                          (multiple-value-bind (parms modifiers pos next-arguments)
                              (parse-format-directive fmt (incf i) arguments)
                              (setq i pos
                                    arguments next-arguments)
                              (let ((next (char fmt i)))
                                  (cond
                                    ((char= next #\~)
                                     (write-char #\~ stream))
                                    ((or (char= next #\&)
                                         (char= next #\%))
                                     (write-char #\newline stream))
                                    ((char= next #\*)
                                     (pop arguments))
                                    (t
                                     (format-special next (car arguments) parms modifiers stream)
                                     (pop arguments))))))
                      (write-char c stream))
                  (incf i))))))
      (case destination
        ((t)
         (write-string res)
         nil)
        ((nil)
         res)
        (t
         (write-string res destination))))))

#+jscl (fset 'format (fdefinition '!format))
