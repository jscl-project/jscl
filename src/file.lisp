;;; file.lisp --- File system operations

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

(defun probe-file (pathspec)
  "Return the pathname if PATHSPEC exists, NIL otherwise."
  (unless (node-environment-p)
    (error "File operations require Node.js environment"))
  (when (#j:Fs:existsSync (string pathspec))
    pathspec))

(defun ensure-directories-exist (pathspec)
  "Ensure that the directories containing PATHSPEC exist.
   Returns PATHSPEC and T if directories were created, NIL otherwise."
  (unless (node-environment-p)
    (error "File operations require Node.js environment"))
  (let* ((path (string pathspec))
         (dir (oget (#j:FsPath:parse path) "dir"))
         (created nil))
    (when (plusp (length dir))
      (unless (#j:Fs:existsSync dir)
        (let ((options (new)))
          (setf (oget options "recursive") t)
          (#j:Fs:mkdirSync dir options))
        (setq created t)))
    (values pathspec created)))

;;;
;;; Non-standard IO functions
;;;

(defun read-file-into-string (path)
  "Read the contents of PATH into a string. Node.js only."
  (unless (node-environment-p)
    (error "File operations require Node.js environment"))
  (#j:Fs:readFileSync (string path) "utf-8"))

(defun write-string-into-file (string path)
  "Write STRING to file at PATH. Node.js only."
  (unless (node-environment-p)
    (error "File operations require Node.js environment"))
  (#j:Fs:writeFileSync (string path) string))

(defun open-write-stream (path)
  "Open a write stream to PATH. Returns a Node.js WriteStream. Node.js only."
  (unless (node-environment-p)
    (error "File operations require Node.js environment"))
  (#j:Fs:createWriteStream (string path)))
