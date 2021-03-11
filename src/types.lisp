;;; -*- mode:lisp; coding:utf-8 -*-

;;; Tiny type system for JSCL
;;; @vkm
(/debug "loading types.lisp!")


(defvar *types* (make-hash-table :test #'eq))

(defvar *structures* (make-hash-table :test #'eq))

(defvar *class-table* (make-hash-table :test #'eq))


;;; EOF

