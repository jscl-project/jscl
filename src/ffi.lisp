;;; ffi.lisp ---

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

(defvar *js-package*
  (make-package "JS"))

(defun ffi-intern-hook (symbol)
  (when (eq (symbol-package symbol) *js-package*)
    (let ((sym-name (symbol-name symbol))
          (args (gensym)))
      ;; Generate a trampoline to call the JS function
      ;; properly. This trampoline is very inefficient,
      ;; but it still works. Ideas to optimize this are
      ;; provide a special lambda keyword
      ;; cl::&rest-vector to avoid list argument
      ;; consing, as well as allow inline declarations.
      (fset symbol (eval `(%js-vref ,sym-name)))
      ;; Define it as a symbol macro to access to the
      ;; Javascript variable literally.
      (%define-symbol-macro symbol `(%js-vref ,(string symbol))))))

(setq *intern-hook* #'ffi-intern-hook)
