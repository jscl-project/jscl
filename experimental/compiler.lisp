;;; compiler.lisp ---

;; Copyright (C) 2013 David Vazquez

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

(defpackage :jscl
  (:use :cl))

(in-package :jscl)

;;;; Utilities
;;;;
;;;; Random Common Lisp code useful to use here and there. 

(defmacro with-gensyms ((&rest vars) &body body)
  `(let ,(mapcar (lambda (var) `(,var (gensym ,(concatenate 'string (string var) "-")))) vars)
     ,@body))

(defun singlep (x)
  (and (consp x) (null (cdr x))))

(defun unlist (x)
  (assert (singlep x))
  (first x))


;;;; Intermediate representation structures
;;;;
;;;; This intermediate representation (IR) is a simplified version of
;;;; the first intermediate representation what you will find if you
;;;; have a look to the source code of SBCL. Some terminology is also
;;;; used, but other is changed, so be careful if you assume you know
;;;; what it is because you know the name.
;;;;
;;;; Computations are represented by `node'.  Nodes are grouped
;;;; sequencially into `basic-block'. It is a plain representation
;;;; rather than a nested one. Computations take data and produce a
;;;; value. Both data transfer are represented by `lvar'.

(defstruct leaf)

;;; A (lexical) variable. Special variables has not a special
;;; representation in the IR. They are handled by the primitive
;;; functions `%symbol-function' and `%symbol-value'.
(defstruct (var (:include leaf))
  ;; The symbol which names this variable in the source code.
  name)

;;; A literal Lisp object. It usually comes from a quoted expression.
(defstruct (constant (:include leaf))
  ;; The object itself.
  value)

;;; A lambda expression. Why do we name it `functional'? Well,
;;; function is reserved by the ANSI, isn't it?
(defstruct (functional (:include leaf))
  ;; The symbol which names this function in the source code or null
  ;; if we do not know or it is an anonymous function.
  name
  arguments
  return-lvar
  entry-point)

;;; An abstract place where the result of a computation is stored and
;;; it can be referenced from other nodes, so lvars are responsible
;;; for keeping the necessary information of the nested structure of
;;; the code in this plain representation.
(defstruct lvar
  (id (gensym "$")))

;;; A base structure for every single computation. Most of the
;;; computations are valued.
(defstruct node
  ;; The next and the prev slots are the next nodes and the previous
  ;; node in the basic block sequence respectively.
  next prev
  ;; Lvar which stands for the result of the computation of this node.
  lvar)

;;; Sentinel nodes in the basic block sequence of nodes.
(defstruct (block-entry (:include node)))
(defstruct (block-exit (:include node)))

;;; A reference to a leaf (variable, constant and functions). The
;;; meaning of this node is leaving the leaf into the lvar of the
;;; node.
(defstruct (ref (:include node))
  leaf)

;;; An assignation of the LVAR VALUE into the var VARIABLE.
(defstruct (assignment (:include node))
  variable
  value)

;;; A base node to function calls with a list of lvar as ARGUMENTS.
(defstruct (combination (:include node) (:constructor))
  arguments)

;;; A function call to the ordinary Lisp function in the lvar FUNCTION.
(defstruct (call (:include combination))
  function)

;;; A function call to the primitive FUNCTION.
(defstruct (primitive-call (:include combination))
  function)


;;; A conditional branch. If the LVAR is not NIL, then we will jump to
;;; the basic block CONSEQUENT, jumping to ALTERNATIVE otherwise. By
;;; definition, a conditional must appear at the end of a basic block.
(defstruct (conditional (:include node))
  test
  consequent
  alternative)


;;; Blocks are `basic block`. Basic blocks are organized as a control
;;; flow graph with some more information in omponents.
(defstruct (basic-block
             (:conc-name "BLOCK-")
             (:constructor make-block)
             (:predicate block-p))
  (id (gensym "L"))
  ;; List of successors and predecessors of this basic block.
  succ pred
  ;; The sentinel nodes of the sequence.
  entry exit)

;;; Sentinel nodes in the control flow graph of basic blocks.
(defstruct (component-entry (:include basic-block)))
(defstruct (component-exit (:include basic-block)))

;;; Return a fresh empty basic block.
(defun make-empty-block ()
  (let ((entry (make-block-entry))
        (exit (make-block-exit)))
    (setf (node-next entry) exit
          (node-prev exit) entry)
    (make-block :entry entry :exit exit)))

;;; Return T if B is an empty basic block and NIL otherwise.
(defun empty-block-p (b)
  (block-exit-p (node-next (block-entry b))))

;;; Iterate across the nodes in a basic block forward.
(defmacro do-nodes
    ((node block &optional result &key include-sentinel-p) &body body)
  `(do ((,node ,(if include-sentinel-p
                    `(block-entry ,block)
                    `(node-next (block-entry ,block))) 
               (node-next ,node)))
       (,(if include-sentinel-p
             `(null ,node)
             `(block-exit-p ,node))
        ,result)
     ,@body))

;;; Iterate across the nodes in a basic block backward.
(defmacro do-nodes-backward
    ((node block &optional result &key include-sentinel-p) &body body)
  `(do ((,node ,(if include-sentinel-p
                    `(block-exit ,block)
                    `(node-prev (block-entry ,block))) 
               (node-prev ,node)))
       (,(if include-sentinel-p
             `(null ,node)
             `(block-entry-p ,node))
        ,result)
     ,@body))

;;; Link FROM and TO nodes together. FROM and TO must belong to the
;;; same basic block and appear in such order. The nodes between FROM
;;; and TO are discarded.
(defun link-nodes (from to)
  (setf (node-next from) to
        (node-prev to) from)
  (values))



;;;; Cursors
;;;;
;;;; A cursor is a point between two nodes in some basic block in the
;;;; IR representation where manipulations can take place, similarly
;;;; to the cursors in text editing.
;;;;
;;;; Cursors cannot point to special component's entry and exit basic
;;;; blocks or after a conditional node. Conveniently, the `cursor'
;;;; function will signal an error if the cursor is not positioned
;;;; correctly, so the rest of the code does not need to check once
;;;; and again.

(defstruct cursor
  block next)

;;; The current cursor. It is the default cursor for many functions
;;; which work on cursors.
(defvar *cursor*)

;;; Return the current basic block. It is to say, the basic block
;;; where the current cursor is pointint.
(defun current-block ()
  (cursor-block *cursor*))

;;; Create a cursor which points to the basic block BLOCK. If omitted,
;;; then the current block is used.
;;;
;;; The keywords AFTER and BEFORE specify the cursor will point after (or
;;; before) that node respectively. If none is specified, the cursor is
;;; created before the exit node in BLOCK. An error is signaled if both
;;; keywords are specified inconsistently, or if the nodes do not belong
;;; to BLOCK.
;;;
;;; AFTER and BEFORE could also be the special values :ENTRY and :EXIT,
;;; which stand for the entry and exit nodes of the block respectively.
(defun cursor (&key (block (current-block))
                 (before nil before-p)
                 (after nil after-p))
  (when (or (component-entry-p block) (component-exit-p block))
    (error "Invalid cursor on special entry/exit basic block."))
  ;; Handle special values :ENTRY and :EXIT.
  (flet ((node-designator (x)
           (case x
             (:entry (block-entry block))
             (:exit  (block-exit block))
             (t x))))
    (setq before (node-designator before))
    (setq after  (node-designator after)))
  (let* ((next (or before (and after (node-next after)) (block-exit block)))
         (cursor (make-cursor :block block :next next)))
    (flet ((out-of-range-cursor ()
             (error "Out of range cursor."))
           (ambiguous-cursor ()
             (error "Ambiguous cursor specified between two non-adjacent nodes.")))
      (when (conditional-p (node-prev next))
        (error "Invalid cursor after conditional node."))
      (when (or (null next) (block-entry-p next))
        (out-of-range-cursor))
      (when (and before-p after-p (not (eq after before)))
        (ambiguous-cursor))
      (do-nodes-backward (node block (out-of-range-cursor) :include-sentinel-p t)
        (when (eq next node) (return))))
    cursor))

;;; Accept a cursor specification just as described in `cursor'
;;; describing a position in the IR and modify destructively the
;;; current cursor to point there.
(defun set-cursor (&rest cursor-spec)
  (let ((newcursor (apply #'cursor cursor-spec)))
    (setf (cursor-block *cursor*) (cursor-block newcursor))
    (setf (cursor-next *cursor*) (cursor-next newcursor))
    *cursor*))

;;; Insert NODE at cursor.
(defun insert-node (node &optional (cursor *cursor*))
  ;; After if? wrong!
  (link-nodes (node-prev (cursor-next cursor)) node)
  (link-nodes node (cursor-next cursor))
  t)

;;; Split the block at CURSOR. The cursor will point to the end of the
;;; first basic block. Return the three basic blocks as multiple
;;; values.
(defun split-block (&optional (cursor *cursor*))
  ;; <aaaaa|zzzzz>  ==>  <aaaaa|>--<zzzzz>
  (let* ((block (cursor-block cursor))
         (newexit (make-block-exit))
         (newentry (make-block-entry))
         (exit (block-exit block))
         (newblock (make-block :entry newentry
                               :exit exit
                               :pred (list block)
                               :succ (block-succ block))))
    (insert-node newexit)
    (insert-node newentry)
    (setf (node-next newexit)  nil)
    (setf (node-prev newentry) nil)
    (setf (block-exit block) newexit)
    (setf (block-succ block) (list newblock))
    (dolist (succ (block-succ newblock))
      (setf (block-pred succ) (substitute newblock block (block-pred succ))))
    (set-cursor :block block :before newexit)
    newblock))

;;; Split the block at CURSOR if it is in the middle of it. The cursor
;;; will point to the end of the first basic block. Return the three
;;; basic blocks as multiple values.
(defun maybe-split-block (&optional (cursor *cursor*))
  ;; If we are converting IR into the end of the basic block, it's
  ;; fine, we don't need to do anything.
  (unless (block-exit-p (cursor-next cursor))
    (split-block cursor)))


;;;; Components
;;;;
;;;; Components are connected pieces of the control flow graph of
;;;; basic blocks with some additional information. Components have
;;;; well-defined entry and exit nodes. It is the toplevel
;;;; organizational entity in the compiler. The IR translation result
;;;; is accumulated into components incrementally.
(defstruct (component #-jscl (:print-object print-component))
  entry
  exit)

;;; Create a new component with an empty basic block, ready to start
;;; conversion to IR. It returns the component and the basic block as
;;; multiple values.
(defun make-empty-component ()
  (let ((entry (make-component-entry))
        (block (make-empty-block))
        (exit (make-component-exit)))
    (setf (block-succ entry)  (list block)
          (block-pred exit)   (list block)
          (block-succ block) (list exit)
          (block-pred block) (list entry))
    (values (make-component :entry entry :exit exit) block)))

;;; Return the list of blocks in COMPONENT, conveniently sorted.
(defun component-blocks (component)
  (let ((seen nil)
        (output nil))
    (labels ((compute-rdfo-from (block)
               (unless (or (component-exit-p block) (find block seen))
                 (push block seen)
                 (dolist (successor (block-succ block))
                   (unless (component-exit-p block)
                     (compute-rdfo-from successor)))
                 (push block output))))
      (compute-rdfo-from (unlist (block-succ (component-entry component))))
      output)))

;;; Iterate across different blocks in COMPONENT.
(defmacro do-blocks ((block component &optional result) &body body)
  `(dolist (,block (component-blocks ,component) ,result)
     ,@body))

(defmacro do-blocks-backward ((block component &optional result) &body body)
  `(dolist (,block (reverse (component-blocks ,component)) ,result)
     ,@body))


;;; A few consistency checks in the IR useful for catching bugs.
(defun check-ir-consistency (component)
  (with-simple-restart (continue "Continue execution")
    (do-blocks (block component)
      (dolist (succ (block-succ block))
        (unless (find block (block-pred succ))
          (error "The block `~S' does not belong to the predecessors list of the its successor `~S'"
                 (block-id block)
                 (block-id succ))))
      (dolist (pred (block-pred block))
        (unless (find block (block-succ pred))
          (error "The block `~S' does not belong to the successors' list of its predecessor `~S'"
                 (block-id block)
                 (block-id pred)))))))


;;;; Lexical environment
;;;;
;;;; It keeps an association between names and the IR entities. It is
;;;; used to guide the translation from the Lisp source code to the
;;;; intermediate representation.

(defstruct binding
  name namespace type value)

(defvar *lexenv*)

(defun find-binding (name namespace)
  (find-if (lambda (b)
             (and (eq (binding-name b) name)
                  (eq (binding-namespace b) namespace)))
           *lexenv*))

(defun push-binding (name namespace value &optional type)
  (push (make-binding :name name
                      :namespace namespace
                      :type type
                      :value value)
        *lexenv*))


;;;; IR Translation
;;;;
;;;; This code covers the translation from Lisp source code to the
;;;; intermediate representation. The main entry point function to do
;;;; that is the `ir-convert' function, which dispatches to IR
;;;; translators. This function ss intended to do the initial
;;;; conversion as well as insert new IR code during optimizations.
;;;;
;;;; The function `ir-complete' will coalesce basic blocks in a
;;;; component to generate proper maximal basic blocks.

;;; The current component. We accumulate the results of the IR
;;; conversion in this component.
(defvar *component*)

;;; A alist of IR translator functions.
(defvar *ir-translator* nil)

;;; Define a IR translator for NAME. LAMBDA-LIST is used to
;;; destructure the arguments of the form. Calling the local function
;;; `result-lvar' you can get the LVAR where the compilation of the
;;; expression should store the result of the evaluation.
;;;
;;; The cursor is granted to be at the end of a basic block with a
;;; unique successor, and so it should be when the translator returns.
(defmacro define-ir-translator (name lambda-list &body body)
  (check-type name symbol)
  (let ((fname (intern (format nil "IR-CONVERT-~a" (string name)))))
    (with-gensyms (result form)
      `(progn
         (defun ,fname (,form ,result)
           (flet ((result-lvar () ,result))
             (declare (ignorable (function result-lvar)))
             (destructuring-bind ,lambda-list ,form
               ,@body)))
         (push (cons ',name #',fname) *ir-translator*)))))

;;; Return the unique successor of the current block. If it is not
;;; unique signal an error.
(defun next-block ()
  (unlist (block-succ (current-block))))

;;; Set the next block of the current one.
(defun (setf next-block) (new-value)
  (let ((block (current-block)))
    (dolist (succ (block-succ block))
      (setf (block-pred succ) (remove block (block-pred succ))))
    (setf (block-succ block) (list new-value))
    (push block (block-pred new-value))
    new-value))

(defun ir-convert-constant (form result)
  (let* ((leaf (make-constant :value form)))
    (insert-node (make-ref :leaf leaf :lvar result))))

(define-ir-translator quote (form)
  (ir-convert-constant form (result-lvar)))

(define-ir-translator setq (variable value)
  (let ((var (make-var :name variable))
        (value-lvar (make-lvar)))
    (ir-convert value value-lvar)
    (let ((assign (make-assignment :variable var :value value-lvar :lvar (result-lvar))))
      (insert-node assign))))

(define-ir-translator progn (&body body)
  (mapc #'ir-convert (butlast body))
  (ir-convert (car (last body)) (result-lvar)))

(define-ir-translator if (test then &optional else)
  ;; It is the schema of how the basic blocks will look like
  ;;
  ;;              / ..then.. \
  ;;  <aaaaXX> --<            >-- <|> -- <zzzz>
  ;;              \ ..else.. /
  ;;
  ;; Note that is important to leave the cursor in an empty basic
  ;; block, as zzz could be the exit basic block of the component,
  ;; which is an invalid position for a cursor.
  (let ((test-lvar (make-lvar))
        (then-block (make-empty-block))
        (else-block (make-empty-block))
        (join-block (make-empty-block)))
    (ir-convert test test-lvar)
    (insert-node (make-conditional :test test-lvar :consequent then-block :alternative else-block))
    (let* ((block (current-block))
           (tail-block (next-block)))
      ;; Link together the different created basic blocks.
      (setf (block-succ block)      (list else-block then-block)
            (block-pred else-block) (list block)
            (block-pred then-block) (list block)
            (block-succ then-block) (list join-block)
            (block-succ else-block) (list join-block)
            (block-pred join-block) (list else-block then-block)
            (block-succ join-block) (list tail-block)
            (block-pred tail-block) (substitute join-block block (block-pred tail-block))))
    ;; Convert he consequent and alternative forms and update cursor.
    (ir-convert then (result-lvar) (cursor :block then-block))
    (ir-convert else (result-lvar) (cursor :block else-block))
    (set-cursor :block join-block)))

(define-ir-translator block (name &body body)
  (let ((new (split-block)))
    (push-binding name 'block (cons (next-block) (result-lvar)))
    (ir-convert `(progn ,@body) (result-lvar))
    (set-cursor :block new)))

(define-ir-translator return-from (name &optional value)
  (let ((binding
         (or (find-binding name 'block)
             (error "Tried to return from unknown block `~S' name" name))))
    (destructuring-bind (jump-block . lvar)
        (binding-value binding)
      (ir-convert value lvar)
      (setf (next-block) jump-block)
      ;; This block is really unreachable, even if the following code
      ;; is labelled in a tagbody, as tagbody will create a new block
      ;; for each label. However, we have to leave the cursor
      ;; somewhere to convert new input.
      (let ((dummy (make-empty-block)))
        (set-cursor :block dummy)))))

(define-ir-translator tagbody (&rest statements)
  (flet ((go-tag-p (x)
           (or (integerp x) (symbolp x))))
    (let* ((tags (remove-if-not #'go-tag-p statements))
           (tag-blocks nil))
      ;; Create a chain of basic blocks for the tags, recording each
      ;; block in a alist in TAG-BLOCKS.
      (let ((*cursor* *cursor*))
        (dolist (tag tags)
          (set-cursor :block (split-block))
          (push-binding tag 'tag (current-block))
          (if (assoc tag tag-blocks)
              (error "Duplicated tag `~S' in tagbody." tag)
              (push (cons tag (current-block)) tag-blocks))))
      ;; Convert the statements into the correct block.
      (dolist (stmt statements)
        (if (go-tag-p stmt)
            (set-cursor :block (cdr (assoc stmt tag-blocks)))
            (ir-convert stmt))))))

(define-ir-translator go (label)
  (let ((tag-binding
         (or (find-binding label 'tag)
             (error "Unable to jump to the label `~S'" label))))
    (setf (next-block) (binding-value tag-binding))
    ;; Unreachable block.
    (let ((dummy (make-empty-block)))
      (set-cursor :block dummy))))


(defun ir-convert-var (form result)
  (let* ((leaf (make-var :name form)))
    (insert-node (make-ref :leaf leaf :lvar result))))

(defun ir-convert-call (form result)
  (destructuring-bind (function &rest args) form
    (let ((func-lvar (make-lvar))
          (args-lvars nil))
      ;; Argument list
      (dolist (arg args)
        (let ((arg-lvar (make-lvar)))
          (push arg-lvar args-lvars)
          (ir-convert arg arg-lvar)))
      (setq args-lvars (reverse args-lvars))
      ;; Funcall
      (if (find-primitive function)
          (insert-node (make-primitive-call
                        :function (find-primitive function)
                        :arguments args-lvars
                        :lvar result))
          (progn
            (ir-convert `(symbol-function ,function) func-lvar)
            (insert-node (make-call :function func-lvar
                                    :arguments args-lvars
                                    :lvar result)))))))

;;; Convert the Lisp expression FORM, it may create new basic
;;; blocks. RESULT is the lvar representing the result of the
;;; computation or null if the value should be discarded. The IR is
;;; inserted at *CURSOR*.
(defun ir-convert (form &optional result (*cursor* *cursor*))
  ;; Rebinding the lexical environment here we make sure that the
  ;; lexical information introduced by FORM is just available for
  ;; subforms.
  (let ((*lexenv* *lexenv*))
    ;; Possibly create additional blocks in order to make sure the
    ;; cursor is at end the end of a basic block.
    (maybe-split-block)
    (cond
      ((atom form)
       (cond
         ((symbolp form)
          (ir-convert-var form result))
         (t
          (ir-convert-constant form result))))
      (t
       (destructuring-bind (op &rest args) form
         (let ((translator (cdr (assoc op *ir-translator*))))
           (if translator
               (funcall translator args result)
               (ir-convert-call form result))))))
    (values)))


;;; Prepare a new component with a current empty block ready to start
;;; IR conversion bound in the current cursor. BODY is evaluated and
;;; the value of the last form is returned.
(defmacro with-component-compilation (&body body)
  (with-gensyms (block)
    `(multiple-value-bind (*component* ,block)
         (make-empty-component)
       (let ((*cursor* (cursor :block ,block))
             (*lexenv* nil))
         ,@body))))

;;; Change all the predecessors of BLOCK to precede NEW-BLOCK instead.
(defun replace-block (block new-block)
  (let ((predecessors (block-pred block)))
    (setf (block-pred new-block) (union (block-pred new-block) predecessors))
    (dolist (pred predecessors)
      (setf (block-succ pred) (substitute new-block block (block-succ pred)))
      (unless (component-entry-p pred)
        (let ((last-node (node-prev (block-exit pred))))
          (when (conditional-p last-node)
            (macrolet ((replacef (place)
                         `(setf ,place (if (eq block ,place) new-block ,place))))
              (replacef (conditional-consequent last-node))
              (replacef (conditional-alternative last-node)))))))))

(defun delete-empty-block (block)
  (when (or (component-entry-p block) (component-exit-p block))
    (error "Cannot delete entry or exit basic blocks."))
  (unless (empty-block-p block)
    (error "Block `~S' is not empty!" (block-id block)))
  (replace-block block (unlist (block-succ block))))

;;; Try to coalesce BLOCK with the successor if it is unique and block
;;; is its unique predecessor.
(defun maybe-coalesce-block (block)
  (when (singlep (block-succ block))
    (let ((succ (first (block-succ block))))
      (when (and (not (component-exit-p succ)) (singlep (block-pred succ)))
        (link-nodes (node-prev (block-exit block))
                    (node-next (block-entry succ)))
        (setf (block-succ block) (block-succ succ))
        (dolist (next (block-succ succ))
          (setf (block-pred next) (substitute block succ (block-pred next))))
        t))))

(defun ir-complete (&optional (component *component*))
  (do-blocks-backward (block component)
    (maybe-coalesce-block block)
    (when (empty-block-p block)
      (delete-empty-block block))))


;;; IR Debugging

(defun print-node (node)
  (when (node-lvar node)
    (format t "~a = " (lvar-id (node-lvar node))))
  (cond
    ((ref-p node)
     (let ((leaf (ref-leaf node)))
       (cond
         ((var-p leaf)
          (format t "~a" (var-name leaf)))
         ((constant-p leaf)
          (format t "'~s" (constant-value leaf)))
         ((functional-p leaf)
          (format t "#<function ~a at ~a>"
                  (functional-name leaf)
                  (functional-entry-point leaf))))))
    ((assignment-p node)
     (format t "set ~a ~a"
             (var-name (assignment-variable node))
             (lvar-id (assignment-value node))))
    ((primitive-call-p node)
     (format t "primitive ~a" (primitive-name (primitive-call-function node)))
     (dolist (arg (primitive-call-arguments node))
       (format t " ~a" (lvar-id arg))))
    ((call-p node)
     (format t "call ~a" (lvar-id (call-function node)))
     (dolist (arg (call-arguments node))
       (format t " ~a" (lvar-id arg))))
    ((conditional-p node)
     (format t "if ~a ~a ~a"
             (lvar-id (conditional-test node))
             (block-id (conditional-consequent node))
             (block-id (conditional-alternative node))))
    (t
     (error "`print-node' does not support printing ~S as a node." node)))
  (terpri))

(defun print-block (block)
  (flet ((block-name (block)
           (cond
             ((and (singlep (block-pred block))
                   (component-entry-p (unlist (block-pred block))))
              "ENTRY")
             ((component-exit-p block)
              "EXIT")
             (t (string (block-id block))))))
    (format t "BLOCK ~a:~%" (block-name block))
    (do-nodes (node block)
      (print-node node))
    (when (singlep (block-succ block))
      (format t "GO ~a~%" (block-name (first (block-succ block)))))
    (terpri)))

(defun print-component (component &optional (stream *standard-output*))
  (let ((*standard-output* stream))
    (do-blocks (block component)
      (print-block block))))

;;; Translate FORM into IR and print a textual repreresentation of the
;;; component.
(defun describe-ir (form &optional (complete t))
  (with-component-compilation
    (ir-convert form (make-lvar :id "$out"))
    (when complete (ir-complete))
    (check-ir-consistency *component*)
    (print-component *component*)))



;;;; Primitives
;;;;
;;;; Primitive functions are a set of functions provided by the
;;;; compiler. They cannot usually be written in terms of other
;;;; functions. When the compiler tries to compile a function call, it
;;;; looks for a primitive function firstly, and if it is found and
;;;; the declarations allow it, a primitive call is inserted in the
;;;; IR. The back-end of the compiler knows how to compile primitive
;;;; calls.
;;;; 

(defvar *primitive-function-table* nil)

(defstruct primitive
  name)

(defmacro define-primitive (name args &body body)
  (declare (ignore args body))
  `(push (make-primitive :name ',name)
         *primitive-function-table*))

(defun find-primitive (name)
  (find name *primitive-function-table* :key #'primitive-name))

(define-primitive symbol-function (symbol))


;;; compiler.lisp ends here
