;;; To be integrated in lispstrack later

;;; It is a basic Lisp reader. It does not use advanced stuff
;;; intentionally, because we want to use it to bootstrap a simple
;;; Lisp. The main entry point is the function `ls-read', which
;;; accepts a strings as argument and return the Lisp expression.

(defun concat (s1 s2)
  (concatenate 'string s1 s2))

(defun make-stream (string)
  (cons string 0))

(defun %peek-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (char (car stream) (cdr stream))))

(defun %read-char (stream)
  (and (< (cdr stream) (length (car stream)))
       (prog1 (char (car stream) (cdr stream))
         (incf (cdr stream)))))

(defun whitespacep (ch)
  (or (char= ch #\space) (char= ch #\newline) (char= ch #\tab)))

(defun skip-whitespace (stream)
  (loop for ch = (%peek-char stream)
     while (whitespacep ch) do (%read-char stream)))

(defun terminalp (ch)
  (or (null ch) (whitespacep ch) (char= #\) ch)))

(defun read-until (stream func)
  (let ((string ""))
    (loop for ch = (%peek-char stream)
       until (funcall func ch)
       do (setq string (concat string (string ch)))
       do (%read-char stream))
    string))

(defun %read-delimited-list (stream last bq-level)
  (loop for ch = (prog2 (skip-whitespace stream)
                     (%peek-char stream))
     until (char= ch last)
     collect (ls-read-1 stream bq-level)
     finally (%read-char stream)))

(defun ls-read-1 (stream bq-level)
  (let ((ch (%peek-char stream)))
    (cond
      ((char= ch #\()
       (%read-char stream)
       (%read-delimited-list stream #\) bq-level))
      ((char= ch #\')
       (%read-char stream)
       (list 'quote (ls-read-1 stream bq-level)))
      ((char= ch #\`)
       (%read-char stream)
       (list 'backquote (ls-read-1 stream (1+ bq-level))))
      ((char= ch #\")
       (%read-char stream)
       (prog1 (read-until stream (lambda (ch) (char= ch #\")))
         (%read-char stream)))
      ((char= ch #\;)
       (read-until stream (lambda (ch) (or (null ch) (char= ch #\newline))))
       (%read-char stream)
       (ls-read-1 stream bq-level))
      ((char= ch #\,)
       (%read-char stream)
       (unless (plusp bq-level)
         (error "Comma not inside a backquote."))
       (list 'comma (ls-read-1 stream (1- bq-level))))
      (t
       (let ((string (read-until stream #'terminalp)))
         (if (every #'digit-char-p string)
             (parse-integer string)
             (intern (string-upcase string))))))))


(defun ls-read (string)
  (ls-read-1 (make-stream string) 0))
