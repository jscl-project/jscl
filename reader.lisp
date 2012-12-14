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

(defun skip-whitespaces (stream)
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

(defun skip-whitespaces-and-comments (stream)
  (skip-whitespaces stream)
  (when (char= (%peek-char stream) #\;)
    (read-until stream (lambda (x) (eql x #\newline)))
    (skip-whitespaces-and-comments stream)))

(defun %read-list (stream)
  (skip-whitespaces-and-comments stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((char= ch #\))
       (%read-char stream)
       nil)
      ((char= ch #\.)
       (%read-char stream)
       (skip-whitespaces-and-comments stream)
       (prog1 (ls-read-1 stream)
         (unless (char= (%read-char stream) #\))
           (error "')' was expected."))))
      (t
       (cons (ls-read-1 stream) (%read-list stream))))))

(defun ls-read-1 (stream)
  (let ((ch (%peek-char stream)))
    (cond
      ((char= ch #\()
       (%read-char stream)
       (%read-list stream))
      ((char= ch #\')
       (%read-char stream)
       (list 'quote (ls-read-1 stream)))
      ((char= ch #\`)
       (%read-char stream)
       (list 'backquote (ls-read-1 stream)))
      ((char= ch #\")
       (%read-char stream)
       (prog1 (read-until stream (lambda (ch) (char= ch #\")))
         (%read-char stream)))
      ((char= ch #\;)
       (read-until stream (lambda (ch) (or (null ch) (char= ch #\newline))))
       (%read-char stream)
       (ls-read-1 stream))
      ((char= ch #\,)
       (%read-char stream)
       (list 'comma (ls-read-1 stream)))
      (t
       (let ((string (read-until stream #'terminalp)))
         (if (every #'digit-char-p string)
             (parse-integer string)
             (intern (string-upcase string))))))))


(defun ls-read-from-string (string)
  (ls-read-1 (make-stream string)))
