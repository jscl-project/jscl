;;; read-j.lisp --- #j: reader dispatch macro for FFI

;; Copyright (C) 2012, 2013 David Vazquez

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

;;; The #j: and #j"" reader macros for JavaScript interop.
;;;
;;; #j:foo       => (oget *root* "foo")
;;; #j:foo:bar   => (oget *root* "foo" "bar")
;;; #j"foo"      => a JS string object (read-time evaluation)

(defun read-sharp-j (stream)
  (cond
    ((char= (%peek-char stream) #\")
     (let ((string (ls-read stream)))
       (jsstring string)))
    ((char= (%peek-char stream) #\:)
     (let ((descriptor (subseq (read-until stream #'terminalp) 1))
           (subdescriptors nil))
       (do* ((start 0 (1+ end))
             (end (position #\: descriptor :start start)
                  (position #\: descriptor :start start)))
            ((null end)
             (push (subseq descriptor start) subdescriptors)
             `(oget *root* ,@(reverse subdescriptors)))
         (push (subseq descriptor start end) subdescriptors))))
    (t
     (simple-reader-error stream "Invalid FFI descriptor. Expected #j: or #j\"."))))
