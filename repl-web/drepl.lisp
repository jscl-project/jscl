;;; -*- mode:lisp; coding:utf-8 -*-

;;; Minor modification jscl repl-web with CLOS
;;; With demonstration purpose only
;;; If the time between two inputs on the console exceeds a certain limit,
;;; the programmer is asked a question 'Why do you think so long'.
;;; Recomended for enterprises with Agile management style.



(/debug "loading repl-web/dumb-repl.lisp!")

(defclass dum ()
  ((est  :initform  (#j:Date:now))
   (time-last :initform (get-internal-real-time))
   (time-current :initform 0)
   (time-slot :initform 0)
   (allowable-time :initform 60.0 :initarg :period)))

(defclass stat ()
  ((started :initform (get-internal-real-time))
   (count :initform 0)
   (timers :initform nil)))

(defun save-stat (time)
  (with-slots (count timers) *wds*
    (incf count)
    (push time timers)))


(defun compute-alive (ct)
  (let* ((ss0 (floor (/ (- ct (slot-value *wd* 'est)) 1000)))
         (hms (/ ss0 3600))
         (hh (floor hms))
         (rmm  (* (- hms  hh) 60))
         (mm (floor rmm))
         (ss (#j:Math:ceil (* (- rmm mm) 60))))
    (values hh mm ss)))

;;; user command `give-stat`. Dumb statistic for current session
(export '(give-stat))
(defun give-stat ()
  (with-slots (count timers started) *wds*
    (let* ((ct (get-internal-real-time))
           (session (/ (/ (- ct started) internal-time-units-per-second 1.0) 60 1.0)))
      (multiple-value-bind (hh mm ss) (compute-alive ct)
        (format t "~%total session time ~ah.~am.~as~%" hh mm ss))
      (format t "total expession evaluated ~a~%" count)
      (format t "average time ~as~%" (/ (reduce #'+ timers ) count 1.0))
      (values-list nil))))


(defgeneric dumb-timer (object))

(defmethod dumb-timer :before ((object dum))
  (with-slots (time-current) object
    (setf time-current (get-internal-real-time))))

(defmethod dumb-timer ((object dum))
  (with-slots (time-last time-current time-slot) object
    (setf time-slot (/ (- time-current time-last)
                       internal-time-units-per-second
                       1.0))
    (setf time-last time-current)
    (save-stat time-slot) ))

(defmethod dumb-timer :after ((object dum))
  (with-slots (time-slot allowable-time) object
    (when (> time-slot allowable-time)
      (format t "~%Why do you think so long (~as) ?~%" time-slot) )))

(defvar *wd*)
(defvar *wds*)

(defun init ()
  (setq *wd* (make-instance 'dum :period 30.0))
  (setq *wds* (make-instance 'stat)))

(defun call-wd () (dumb-timer *wd*))

(defun %write-string (string &optional (escape t))
  (if #j:jqconsole
      (if escape
          (#j:jqconsole:Write string "jqconsole-output")
          (#j:jqconsole:Write string "jqconsole-output" ""))
      (#j:console:log string)))

(defun load-history ()
  (let ((raw (#j:localStorage:getItem "jqhist")))
    (unless (js-null-p raw)
      (#j:jqconsole:SetHistory (#j:JSON:parse raw)))))

(defun save-history ()
  (#j:localStorage:setItem "jqhist" (#j:JSON:stringify (#j:jqconsole:GetHistory))))


;;; Decides wheater the input the user has entered is completed or we
;;; should accept one more line.
(defun %sexpr-complete (string)
  (let ((i 0)
        (stringp nil)
        (comments nil)
        (s (length string))
        (depth 0))
    (while (< i s)
      (cond
        (comments
         (case (char string i)
           (#\newline
            (setq comments nil))))
        (stringp
         (case (char string i)
           (#\\
            (incf i))
           (#\"
            (setq stringp nil)
            (decf depth))))
        (t
         (case (char string i)
           (#\;
            (setq comments t))
           (#\( (unless comments (incf depth)))
           (#\) (unless comments (decf depth)))
           (#\"
            (incf depth)
            (setq stringp t)))))
      (incf i))
    (if (<= depth 0)
        nil
        0)))

(defun toplevel ()
  (call-wd)
  (#j:jqconsole:RegisterMatching "(" ")" "parents")
  (let ((prompt (format nil "~a> " (package-name *package*))))
    (#j:jqconsole:Write prompt "jqconsole-prompt"))
  (flet ((process-input (input)
           ;; Capture unhandled Javascript exceptions. We evaluate the
           ;; form and set successp to T. However, if a non-local exit
           ;; happens, we cancel it, so it is not propagated more.
           (%js-try

            ;; Capture unhandled Lisp conditions.
            (handler-case
                (when (> (length input) 0)
                  (let* ((form (read-from-string input))
                         (results (multiple-value-list (eval-interactive form))))
                    (dolist (x results)
                      (#j:jqconsole:Write (format nil "~S~%" x) "jqconsole-return"))))
              (error (err)
                (#j:jqconsole:Write "ERROR: " "jqconsole-error")
                (#j:jqconsole:Write (apply #'format nil (!condition-args err)) "jqconsole-error")
                (#j:jqconsole:Write (string #\newline) "jqconsole-error")))

            (catch (err)
              (#j:console:log err)
              (let ((message (or (oget err "message") err)))
                (#j:jqconsole:Write (format nil "ERROR[!]: ~a~%" message) "jqconsole-error"))))

           (save-history)
           (toplevel)))
    (#j:jqconsole:Prompt t #'process-input #'%sexpr-complete)))

(defun web-init ()
  (load-history)
  (setq *standard-output*
        (make-stream
         :write-fn (lambda (string) (%write-string string))))
  (welcome-message :html t)
  (#j:window:addEventListener "load" (lambda (&rest args) (init) (toplevel))))


(web-init)
