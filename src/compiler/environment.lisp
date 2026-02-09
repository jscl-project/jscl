;;; environment.lisp --- Environment dumping for bootstrap

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

(/debug "loading environment.lisp!")

(defun dump-global-environment (stream)
  "Dump the global environment to STREAM.

Macro bindings are wrapped with *magic-unquote-marker* so the compiler
will compile them instead of quoting them. See the literal function in
compiler.lisp for details."
  (flet ((emit (form)
           (write-string (compile-toplevel form) stream))
         (wrap-macros (bindings)
           ;; Wrap macro binding values with the magic marker
           (dolist (b bindings)
             (when (eq (binding-type b) 'macro)
               (setf (binding-value b) `(,*magic-unquote-marker* ,(binding-value b)))))))
    ;; We assume that environments have a friendly list representation
    ;; for the compiler and it can be dumped.
    ;; Wrap both regular macros and compiler-macros
    (wrap-macros (lexenv-function *environment*))
    (wrap-macros (lexenv-compiler-macro *environment*))
    (emit
     `(progn
        (setq *environment* ',*environment*)
        (setq *global-environment* *environment*)))
    ;; Set some counter variable properly, so user compiled code will
    ;; not collide with the compiler itself.
    (emit
     `(progn
        (setq *variable-counter* ,*variable-counter*)
        (setq *gensym-counter* ,*gensym-counter*)))
    (emit `(setq *literal-counter* ,*literal-counter*))))

;;; EOF
