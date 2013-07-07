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

(defun generic-printer (x stream)
  (print-unreadable-object (x stream :type t :identity t)))

;;; A generic counter mechanism. IDs are used generally for debugging
;;; purposes. You can bind *counter-alist* to NIL to reset the
;;; counters in a dynamic extent.
(defvar *counter-alist* nil)
(defun generate-id (class)
  (let ((e (assoc class *counter-alist*)))
    (if e
        (incf (cdr e))
        (prog1 1
          (push (cons class 1) *counter-alist*)))))

(defmacro while (condition &body body)
  `(do nil ((not ,condition)) ,@body))

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
;;; function is reserved by ANSI, isn't it?
(defstruct (functional (:include leaf) (:print-object generic-printer))
  ;; The symbol which names this function in the source code or null
  ;; if we do not know or it is an anonymous function.
  name
  arguments
  return-lvar
  component)

;;; An abstract place where the result of a computation is stored and
;;; it can be referenced from other nodes, so lvars are responsible
;;; for keeping the necessary information of the nested structure of
;;; the code in this plain representation.
(defstruct lvar
  (id (generate-id 'lvar)))

;;; A base structure for every single computation. Most of the
;;; computations are valued.
(defstruct (node (:print-object generic-printer))
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
             (:predicate block-p)
             (:print-object generic-printer))
  ;; List of successors and predecessors of this basic block. They are
  ;; null only for deleted blocks and component's entry and exit.
  succ pred
  ;; The sentinel nodes of the sequence.
  entry exit
  ;; The component where the basic block belongs to.
  component
  ;; The order in the reverse post ordering of the blocks.
  order
  ;; The innermost loop this block belongs to.
  loop
  ;; A bit-vector representing the set of dominators. See the function
  ;; `compute-dominators' to know how to use it properly.
  dominators%
  ;; Arbitrary data which could be necessary to keep during IR
  ;; processing.
  data)

;;; Sentinel nodes in the control flow graph of basic blocks.
(defstruct (component-entry (:include basic-block)))
(defstruct (component-exit (:include basic-block)))

;;; Return T if B is an empty basic block and NIL otherwise.
(defun empty-block-p (b)
  (or (boundary-block-p b)
      (block-exit-p (node-next (block-entry b)))))

(defun boundary-block-p (block)
  (or (component-entry-p block)
      (component-exit-p block)))

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


;;; Components are connected pieces of the control flow graph of
;;; basic blocks with some additional information. Components have
;;; well-defined entry and exit nodes. It is the toplevel
;;; organizational entity in the compiler. The IR translation result
;;; is accumulated into components incrementally.
(defstruct (component (:print-object generic-printer))
  (id (generate-id 'component))
  name
  entry
  exit
  functions
  ;; TODO: Replace with a flags slot for indicate what
  ;; analysis/transformations have been carried out.
  reverse-post-order-p
  ;; List of natural loops in this component.
  loops
  blocks)

;;; The current component.
(defvar *component*)

;;; Create a new fresh empty basic block in the current component.
(defun make-empty-block ()
  (let ((entry (make-block-entry))
        (exit (make-block-exit)))
    (link-nodes entry exit)
    (let ((block (make-block :entry entry :exit exit :component *component*)))
      (push block (component-blocks *component*))
      block)))

;;; Create a new component with an empty basic block, ready to start
;;; conversion to IR. It returns the component and the basic block as
;;; multiple values.
(defun make-empty-component (&optional name)
  (let ((*component* (make-component :name name)))
    (let ((entry (make-component-entry :component *component*))
          (exit (make-component-exit :component *component*))
          (block (make-empty-block)))
      (push entry (component-blocks *component*))
      (push exit (component-blocks *component*))
      (setf (block-succ entry) (list block)
            (block-pred exit)  (list block)
            (block-succ block) (list exit)
            (block-pred block) (list entry)
            (component-entry *component*) entry
            (component-exit  *component*) exit)
      (values *component* block))))

;;; A few consistency checks in the IR useful for catching bugs.
(defun check-ir-consistency (&optional (component *component*))
  (with-simple-restart (continue "Continue execution")
    (dolist (block (component-blocks component))
      (dolist (succ (block-succ block))
        (unless (find block (block-pred succ))
          (error "The block `~S' does not belong to the predecessors list of the its successor `~S'"
                 block succ))
        (unless (or (boundary-block-p succ) (find succ (component-blocks component)))
          (error "Block `~S' is reachable from its predecessor `~S' but it is not in the component `~S'"
                 succ block component)))
      (dolist (pred (block-pred block))
        (unless (find block (block-succ pred))
          (error "The block `~S' does not belong to the successors' list of its predecessor `~S'"
                 block pred))
        (unless (or (boundary-block-p pred) (find pred (component-blocks component)))
          (error "Block `~S' is reachable from its sucessor `~S' but it is not in the component `~S'"
                 pred block component))))))

;;; Prepare a new component with a current empty block ready to start
;;; IR conversion bound in the current cursor. BODY is evaluated and
;;; the value of the last form is returned.
(defmacro with-component-compilation ((&optional name) &body body)
  (with-gensyms (block)
    `(multiple-value-bind (*component* ,block)
         (make-empty-component ,name)
       (let ((*cursor* (cursor :block ,block)))
         ,@body))))

;;; Call function for each reachable block in component in
;;; post-order. The consequences are unspecified if a block is
;;; FUNCTION modifies a block which has not been processed yet.
(defun map-postorder-blocks (function component)
  (let ((seen nil))
    (labels ((compute-from (block)
               (unless (find block seen)
                 (push block seen)
                 (dolist (successor (block-succ block))
                   (unless (component-exit-p block)
                     (compute-from successor)))
                 (funcall function block))))
      (compute-from (component-entry component))
      nil)))

;;; Change all the predecessors of BLOCK to precede NEW-BLOCK
;;; instead. As consequence, BLOCK becomes unreachable.
(defun replace-block (block new-block)
  (let ((predecessors (block-pred block)))
    (setf (block-pred block) nil)
    (dolist (pred predecessors)
      (pushnew pred (block-pred new-block))
      (setf (block-succ pred) (remove block (block-succ pred)))
      (pushnew new-block (block-succ pred))
      (unless (component-entry-p pred)
        (let ((last-node (node-prev (block-exit pred))))
          (when (conditional-p last-node)
            (macrolet ((replacef (place)
                         `(setf ,place (if (eq block ,place) new-block ,place))))
              (replacef (conditional-consequent last-node))
              (replacef (conditional-alternative last-node)))))))))

(defun delete-block (block)
  (when (boundary-block-p block)
    (error "Cannot delete entry or exit basic blocks."))
  (unless (null (cdr (block-succ block)))
    (error "Cannot delete a basic block with multiple successors."))
  ;; If the block has not successors, then it is already deleted. So
  ;; just skip it.
  (when (block-succ block)
    (let ((successor (unlist (block-succ block))))
      (replace-block block successor)
      ;; At this point, block is unreachable, however we could have
      ;; backreferences to it from its successors. Let's get rid of
      ;; them.
      (setf (block-pred successor) (remove block (block-pred successor)))
      (setf (block-succ block) nil))))


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
  (when (boundary-block-p block)
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
                               :succ (block-succ block)
                               :component *component*)))
    (insert-node newexit)
    (insert-node newentry)
    (setf (node-next newexit)  nil)
    (setf (node-prev newentry) nil)
    (setf (block-exit block) newexit)
    (setf (block-succ block) (list newblock))
    (dolist (succ (block-succ newblock))
      (setf (block-pred succ) (substitute newblock block (block-pred succ))))
    (set-cursor :block block :before newexit)
    (push newblock (component-blocks *component*))
    newblock))

;;; Split the block at CURSOR if it is in the middle of it. The cursor
;;; will point to the end of the first basic block. Return the three
;;; basic blocks as multiple values.
(defun maybe-split-block (&optional (cursor *cursor*))
  ;; If we are converting IR into the end of the basic block, it's
  ;; fine, we don't need to do anything.
  (unless (block-exit-p (cursor-next cursor))
    (split-block cursor)))


;;;; Lexical environment
;;;;
;;;; It keeps an association between names and the IR entities. It is
;;;; used to guide the translation from the Lisp source code to the
;;;; intermediate representation.

(defstruct binding
  name namespace type value)

(defvar *lexenv* nil)

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
  (let ((b (find-binding variable 'variable)))
    (cond
      (b
       (let ((var (make-var :name variable))
             (value-lvar (make-lvar)))
         (ir-convert value value-lvar)
         (let ((assign (make-assignment :variable var :value value-lvar :lvar (result-lvar))))
           (insert-node assign))))
      (t
       (ir-convert `(set ',variable ,value) (result-lvar))))))

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
          (setq *cursor* (cursor :block (split-block)))
          (push-binding tag 'tag (current-block))
          (if (assoc tag tag-blocks)
              (error "Duplicated tag `~S' in tagbody." tag)
              (push (cons tag (current-block)) tag-blocks))))
      ;; Convert the statements into the correct block.
      (dolist (stmt statements)
        (cond
          ((go-tag-p stmt)
           (set-cursor :block (cdr (assoc stmt tag-blocks))))
          ((atom stmt)
           (error "Invalid tag `~S'" stmt))
          (t
           (ir-convert stmt)))))))

(define-ir-translator go (label)
  (let ((tag-binding
         (or (find-binding label 'tag)
             (error "Unable to jump to the label `~S'" label))))
    (setf (next-block) (binding-value tag-binding))
    ;; Unreachable block.
    (let ((dummy (make-empty-block)))
      (set-cursor :block dummy))))


(defun convert-functional (result name arguments &rest body)
  (let ((component)
        (return-lvar (make-lvar)))
    (with-component-compilation (name)
      (ir-convert `(progn ,@body) return-lvar)
      (ir-normalize)
      (setq component *component*))
    (let ((functional
           (make-functional
            :name name
            :arguments arguments
            :component component
            :return-lvar return-lvar)))
      (push functional (component-functions *component*))
      (insert-node (make-ref :leaf functional :lvar result)))))

(define-ir-translator function (name)
  (if (atom name)
      (ir-convert `(symbol-function ,name) (result-lvar))
      (ecase (car name)
        ((lambda named-lambda)
         (let ((desc (cdr name)))
           (when (eq 'lambda (car name))
             (push nil desc))
           (apply #'convert-functional (result-lvar) desc)))
        (setf))))

(defun ir-convert-var (form result)
  (let ((binds (find-binding form 'variable)))
    (if binds
        (insert-node (make-ref :leaf (binding-value binds) :lvar result))
        (ir-convert `(symbol-value ',form) result))))

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
            (ir-convert `(symbol-function ',function) func-lvar)
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


;;;; IR Normalization
;;;;
;;;; IR as generated by `ir-convert' or after some transformations is
;;;; not appropiated. Here, we remove unreachable and empty blocks and
;;;; coallesce blocks when it is possible.

;;; Try to coalesce BLOCK with the successor if it is unique and block
;;; is its unique predecessor.
(defun maybe-coalesce-block (block)
  (when (and (singlep (block-succ block)) (not (component-entry-p block)))
    (let ((succ (first (block-succ block))))
      (when (and (not (component-exit-p succ)) (singlep (block-pred succ)))
        (link-nodes (node-prev (block-exit block))
                    (node-next (block-entry succ)))
        (setf (block-exit block) (block-exit succ))
        (setf (block-succ block) (block-succ succ))
        (dolist (next (block-succ succ))
          (setf (block-pred next) (remove succ (block-pred next)))
          (pushnew block (block-pred next)))
        (setf (block-succ succ) nil
              (block-pred succ) nil)
        t))))

;;; Normalize a component. This function must be called after a batch
;;; of modifications to the flowgraph of the component to make sure it
;;; is a valid input for the possible optimizations and the backend.
(defun ir-normalize (&optional (component *component*))
  ;; Initialize blocks as unreachables and remove empty basic blocks.
  (dolist (block (component-blocks component))
    (setf (block-data block) 'unreachable))
  ;; Coalesce and mark blocks as reachable.
  (map-postorder-blocks #'maybe-coalesce-block component)
  (map-postorder-blocks (lambda (block)
                          (setf (block-data block) 'reachable))
                        component)
  (let ((block-list nil))
    (dolist (block (component-blocks component))
      (cond
        ;; If the block is unreachable, but it is predeces a reachable
        ;; one, then break the link between them. So we discard it
        ;; from the flowgraph.
        ((eq (block-data block) 'unreachable)
         (dolist (succ (block-succ block))
           (when (eq (block-data succ) 'reachable)
             (setf (block-pred succ) (remove block (block-pred succ)))))
         (setf (block-succ block) nil))
        ;; Delete empty blocks
        ((and (empty-block-p block)
              (not (boundary-block-p block))
              ;; We cannot delete a block if it is its own successor,
              ;; even thought it is empty.
              (not (member block (block-succ block))))
         (delete-block block))
        ;; The rest of blocks remain in the component.
        (t
         (push block block-list))))
    (setf (component-blocks component) block-list))
  (check-ir-consistency))


;;;; IR Analysis
;;;;
;;;; Once IR conversion has been finished. We do some analysis of the
;;;; component to produce information which is useful for both
;;;; optimizations and code generation. Indeed, we provide some
;;;; abstractions to use this information.

(defun compute-reverse-post-order (&optional (component *component*))
  (let ((output nil)
        (index (length (component-blocks component))))
    (flet ((add-block-to-list (block)
             (push block output)
             (setf (block-order block) (decf index))))
      (map-postorder-blocks #'add-block-to-list component))
    (setf (component-reverse-post-order-p component) t)
    (setf (component-blocks component) output)))


(defmacro do-blocks% ((block component &optional reverse ends result) &body body)
  (with-gensyms (g!component g!blocks)
    `(let* ((,g!component ,component)
            (,g!blocks ,(if reverse
                            `(reverse (component-blocks ,g!component))
                            `(component-blocks ,g!component))))
       ;; Do we have the information available?
       (unless (component-reverse-post-order-p ,g!component)
         (error "Reverse post order was not computed yet."))
       (dolist (,block  ,(if (member ends '(:head :both))
                             `,g!blocks
                             `(cdr ,g!blocks))
                 ,result)
         ,@(if (member ends '(:tail :both))
               nil
               `((if (component-exit-p ,block) (return))))
         ,@body))))

;;; Iterate across blocks in COMPONENT in reverse post order.
(defmacro do-blocks-forward ((block component &optional ends result) &body body)
  `(do-blocks% (,block ,component nil ,ends ,result)
     ,@body))

;;; Iterate across blocks in COMPONENT in post order.
(defmacro do-blocks-backward ((block component &optional ends result) &body body)
  `(do-blocks% (,block (reverse ,component) t ,ends ,result)
     ,@body))

(defun compute-dominators (&optional (component *component*))
  ;; Initialize the dominators of the entry to the component to be
  ;; empty and the power set of the set of blocks for proper basic
  ;; blocks in the component.
  (let ((n (length (component-blocks component))))
    ;; The component entry special block has not predecessors in the
    ;; set of (proper) basic blocks.
    (setf (block-dominators% (component-entry component))
          (make-array n :element-type 'bit :initial-element 0))
    (setf (aref (block-dominators% (component-entry component)) 0) 1)
    (do-blocks-forward (block component :tail)
      (setf (block-dominators% block) (make-array n :element-type 'bit :initial-element 1))))
  ;; Iterate across the blocks in the component removing non domintors
  ;; until it reaches a fixed point.
  (do ((i 1 1)
       (changes t))
      ((not changes))
    (setf changes nil)
    (do-blocks-forward (block component :tail)
      ;; We compute the new set of dominators for this iteration in a
      ;; fresh set NEW-DOMINATORS. So we do NOT modify the old
      ;; dominators. It is important because the block could predeces
      ;; itself. Indeed, it allows us to check if the set of
      ;; dominators changed.
      (let* ((predecessors (block-pred block))
             (new-dominators (copy-seq (block-dominators% (first predecessors)))))
        (dolist (pred (rest predecessors))
          (bit-and new-dominators (block-dominators% pred) t))
        (setf (aref new-dominators i) 1)
        (unless changes
          (setq changes (not (equal (block-dominators% block) new-dominators))))
        (setf (block-dominators% block) new-dominators)
        (incf i)))))

;;; Return T if BLOCK1 dominates BLOCK2, else return NIL.
(defun dominate-p (block1 block2)
  (let ((order (block-order block1)))
    (= 1 (aref (block-dominators% block2) order))))



;;;; Natural Loops

(defstruct natural-loop
  parent
  header
  body)

(defun find-natural-loops (&optional (component *component*))
  (let ((size (length (component-blocks component))))
    ;; We look for loop headers in reverse post order, so we will find
    ;; outermost loop first. It makes sure we can fill the LOOP slot
    ;; of the blocks and it will not be rewritten by an outer loop.
    (do-blocks-forward (header component)
      (dolist (block (block-pred header))
        (when (dominate-p header block) ; Back edge
          (let* ((loop
                    ;; If header is already the header of a loop, then
                    ;; just merge the natural loop for this back edge
                    ;; into the same loop.
                    (if (loop-header-p header)
                        (block-loop header)
                        (make-natural-loop
                         :parent (block-loop header)
                         :header header
                         :body (make-array size :element-type 'bit :initial-element 0))))
                 ;; The set of nodes which belongs to this loop.
                 (body (natural-loop-body loop)))
            (unless (loop-header-p header)
              (push loop (component-loops component)))
            ;; The header belongs to the loop
            (setf (aref body (block-order header)) 1
                  (block-loop header) loop)
            ;; Add to the loop all the blocks which can reach the tail
            ;; without going throught the header.
            (labels ((explore-backward (block)
                       (unless (= 1 (aref body (block-order block)))
                         (setf (aref body (block-order block)) 1
                               (block-loop block) loop)
                         (dolist (pred (block-pred block))
                           (explore-backward pred)))))
              (explore-backward block))))))))

;;; Check if BLOCK is a loop header.
(defun loop-header-p (block)
  (let ((loop (block-loop block)))
    (and loop (eq (natural-loop-header loop) block))))




;;; Save the edges of the flow graph of the current component. Then,
;;; execute BODY as an implicit progn and restore the edges even if
;;; BODY exists with an abnormal exit.
(defmacro save-component-edges (&body body)
  (with-gensyms (edges)
    `(let (,edges)
       ;; Save edges
       (dolist (block (component-blocks *component*))
         (push (list block (block-succ block) (block-pred block)) ,edges))
       (unwind-protect (progn ,@body)
         ;; Restore edges
         (dolist (entry ,edges)
           (destructuring-bind (block succ pred) entry
             (setf (block-succ block) succ
                   (block-pred block) pred)))))))

(defun reduce-component (&optional (component *component*))
  (let* ((*component* component)
         (list-blocks (component-blocks component))
         ;; A vector of the blocks in the component. Blocks are added
         ;; and deleted always at the fill pointer of the vector.
         (vector-blocks
          (make-array (length list-blocks)
                      :initial-contents (component-blocks component)
                      :adjustable t
                      :fill-pointer t))
         ;; A list of nodes which have been splitted during the
         ;; reduction of the component. We apply
         (nodes-to-split '()))
    (flet (;; Remove an edge from a block to itself
           (T1 (block)
             (when (member block (block-succ block))
               (setf (block-succ block) (remove block (block-succ block)))
               (setf (block-pred block) (remove block (block-pred block)))
               t))
           ;; Collapse a block back into its predecessor if it is unique
           (T2 (block)
             (when (singlep (block-pred block))
               (let ((pred (unlist (block-pred block))))
                 (setf (block-succ pred) (remove block (block-succ pred)))
                 (dolist (succ (block-succ block))
                   (pushnew succ (block-succ pred))
                   (setf (block-pred succ) (remove block (block-pred succ)))
                   (pushnew pred (block-pred succ))))
               t))
           ;; This function duplicates the block in component for each input
           ;; edge. A technique useful to make a general flowgraph reducible.
           (S (block)
             (let ((predecessors (block-pred block)))
               (when predecessors
                 (setf (block-pred block) (list (car predecessors)))
                 (let ((newblocks '()))
                   (dolist (pred (cdr predecessors) newblocks)
                     (let ((newblock (copy-basic-block block)))
                       (setf (block-pred newblock) (list pred))
                       (setf (block-succ pred) (remove block (block-succ pred)))
                       (pushnew newblock (block-succ pred))
                       (push newblock newblocks))))))))
      ;; Reduce component using the transformations T1 and T2 as much
      ;; as possible. Then apply the node splitting transformation (S)
      ;; to some blocks. By now, we apply it to every block with
      ;; multiple predecessors, but most smart policy is possible,
      ;; see: "Making Graphs Reducible with Controlled Node
      ;; Splitting". These transformations do not affect to the
      ;; original component flowgraph out of the SAVE-COMPONENT-EDGES
      ;; extent. Eventually, we will reduce the component to a single
      ;; node and the reduction finishes.
      (save-component-edges
        (while (< 1 (fill-pointer vector-blocks))
          ;; Reduce component using T1 and T2 as much as possible
          (do ((changes t))
              ((not changes))
            (setf changes nil)
            (do ((i 0 (1+ i)))
                ((>= i (length vector-blocks)))
              (let ((block (aref vector-blocks i)))
                (when (T1 block)
                  (setf changes t))
                (when (T2 block)
                  ;; Move the block to the end of the vector and
                  ;; remove decrementing the fill pointer.
                  (rotatef (aref vector-blocks i) (aref vector-blocks (1- (length vector-blocks))))
                  (vector-pop vector-blocks)
                  (setf changes t)))))
          ;; TODO: Implement a better selection of the nodes in the
          ;; flowgraph to split. Paper to study: "Making Graphs
          ;; Reducible with Controlled Node Splitting".
          (dotimes (i (length vector-blocks))
            (let ((block (aref vector-blocks i)))
              (when (S block)
                (push block nodes-to-split))))))
      ;; Reapply the node splitting transformation to the same nodes
      ;; on the original component.
      (when nodes-to-split
        (warn "Irreducible component. Applying node splitting")
        (dolist (block nodes-to-split)
          (assert (member block (component-blocks component)))
          (dolist (newblock (S block))
            (push newblock (component-blocks component))))))))



;;;; IR Debugging
;;;;
;;;; This section provides a function `/print' which write a textual
;;;; representation of a component to the standard output. Also, a
;;;; `/ir' macro is provided, which takes a form, convert it to IR and
;;;; then print the component as above.  They are useful commands if
;;;; you are hacking the front-end of the compiler.
;;;;

(defun format-block-name (block)
  (cond
    ((eq block (unlist (block-succ (component-entry (block-component block)))))
     (format nil "ENTRY-~a" (component-id (block-component block))))
    ((component-exit-p block)
     (format nil "EXIT-~a" (component-id (block-component block))))
    (t
     (format nil "BLOCK ~a" (block-order block)))))


(defun print-node (node)
  (when (node-lvar node)
    (format t "$~a = " (lvar-id (node-lvar node))))
  (cond
    ((ref-p node)
     (let ((leaf (ref-leaf node)))
       (cond
         ((var-p leaf)
          (format t "~a" (var-name leaf)))
         ((constant-p leaf)
          (format t "'~s" (constant-value leaf)))
         ((functional-p leaf)
          (format t "#<function ~a>" (functional-name leaf))))))
    ((assignment-p node)
     (format t "set ~a $~a"
             (var-name (assignment-variable node))
             (lvar-id (assignment-value node))))
    ((primitive-call-p node)
     (format t "primitive ~a" (primitive-name (primitive-call-function node)))
     (dolist (arg (primitive-call-arguments node))
       (format t " $~a" (lvar-id arg))))
    ((call-p node)
     (format t "call $~a" (lvar-id (call-function node)))
     (dolist (arg (call-arguments node))
       (format t " $~a" (lvar-id arg))))
    ((conditional-p node)
     (format t "if $~a then ~a else ~a~%"
             (lvar-id (conditional-test node))
             (format-block-name (conditional-consequent node))
             (format-block-name (conditional-alternative node))))
    (t
     (error "`print-node' does not support printing ~S as a node." node)))
  (terpri))

(defun print-block (block)
  (write-string (format-block-name block))
  (if (loop-header-p block)
      (write-line " [LOOP_HEADER]")
      (terpri))
  (do-nodes (node block)
    (print-node node))
  (when (singlep (block-succ block))
    (format t "GO ~a~%~%" (format-block-name (unlist (block-succ block))))))

(defun /print (component &optional (stream *standard-output*))
  (format t ";;; COMPONENT ~a (~a) ~%~%" (component-name component) (component-id component))
  (let ((*standard-output* stream))
    (do-blocks-forward (block component)
      (print-block block)))
  (format t ";;; END COMPONENT ~a ~%~%" (component-name component))
  (let ((*standard-output* stream))
    (dolist (func (component-functions component))
      (/print (functional-component func)))))

;;; Translate FORM into IR and print a textual repreresentation of the
;;; component.
(defun convert-toplevel-and-print (form)
  (let ((*counter-alist* nil))
    (with-component-compilation ('toplevel)
      (ir-convert form (make-lvar :id "out"))
      (ir-normalize)
      (reduce-component)
      (compute-reverse-post-order)
      (compute-dominators)
      (find-natural-loops)
      (/print *component*)
      *component*)))

(defmacro /ir (form)
  `(convert-toplevel-and-print ',form))


;;;; Backend [DRAFT]
;;;;
;;;; This section implements a starting point of the back-end of the
;;;; compiler. It takes IR data as input and yield Javascript code.
;;;; This process is conceptually comprised of several stages.
;;;;
;;;; Fistly, we do structural analysis on the flow graph to recover a
;;;; set of nested or disjoint regions, which can be loops,
;;;; conditionals and exit-point ones. It yields a list of Javascript
;;;; statements.
;;;;
;;;; Then, every basic block is compiled individually in a list of
;;;; Javascript expressions. We assume every lvar is used only once,
;;;; so the only live lvars at the end of the basic block are
;;;; (possibly a subset) of the toplevel lvars. In other words, no
;;;; expression can live across basic block boundaries.
;;;;

;;; Do structural analysis of the flow graph of component to "recover"
;;; high level control flow constructions. Particularly, it finds
;;; loops, conditionals and forward jumps (which will be compiled to
;;; labeled breaks).
;;;
;;; This information is enough to generate Javascript code. In effect,
;;; loops are defined by back-edges, which become break/continue in
;;; the header of the loop. Moreover, the component is reducible so
;;; they are the only retreating edges. Therefore, the remaining graph
;;; is acyclic. Any acyclic graph is expressable with labeled
;;; statements and conditionals. However, the resulting structure is
;;; nicer if we looking for natural conditionals before to avoid
;;; unnecessary breaks.

(defstruct region
  header
  childs)

(defun natural-conditional-header-p (block)
  ;; multiple successors and dominate some of them
  (and (not (null (cdr (block-succ block))))
       (some (lambda (succ) (dominate-p block succ)) (block-succ block))
       (not (loop-header-p block))))

(defun structure-component (component)
  (let* ((entry (unlist (block-succ (component-entry component))))
         ;; Root of the tree of regions
         (top (make-region :header entry)))
    ;; Process the natural loops from outermost to innermost, creating
    ;; a hierarchy of regions for them.
    (let ((table (make-hash-table :test #'eq)))
      (labels ((process-loop (loop)
                 (multiple-value-bind (region existp)
                     (gethash loop table)
                   (when existp (return-from process-loop region))
                   (let* ((parent-loop (natural-loop-parent loop))
                          (parent-region
                           (if parent-loop
                               (process-loop parent-loop)
                               top)))
                     (push (make-region :header (natural-loop-header loop))
                           (region-childs parent-region))
                     region))))
        (dolist (loop (component-loops component))
          (process-loop loop))))
    ;; Process "natural" conditionals.
    (dolist (block (component-blocks component))
      (when (natural-conditional-header-p block)
        (make-region :header block :childs nil)
        
        ))
    top))



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
(define-primitive symbol-value (symbol))
(define-primitive set (symbol value))
(define-primitive fset (symbol value))

(define-primitive + (&rest numbers))
(define-primitive - (number &rest other-numbers))

(define-primitive consp (x))
(define-primitive cons (x y))
(define-primitive car (x))
(define-primitive cdr (x))


;;; compiler.lisp ends here
