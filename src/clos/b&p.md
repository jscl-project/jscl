# Know bugs and problems

## Problem with :accessor

```lisp

(defclass something  ()
   ((name :initform nil :accessor something-name)))

(let ((ip (make-instance 'something)))
   (setf (something-name ip) 'elf)
   (something-name ip))

```

Host compilation with error

```
(jscl::compile-application "lo.lisp")

ERROR: Unknown generalized reference.
       (JSCL::!GET-SETF-EXPANSION (JSCL::SOMETHING-NAME JSCL::IP))
```

Target compilation OK

```lisp
(load "./lo.lisp")

#<standard-class SOMETHING>
ELF

```

## Workaround the problem with :accessor

### Use (defun (setf ...))
```lisp

(defclass something  ()
  ((name :initform nil :reader something-name)))

(defun (setf something-name) (value instance)
  (setf (slot-value instance 'name) value))

(let ((ip (make-instance 'something)))
  (setf (something-name ip) 'elf)
  (something-name ip))
```

### Use (with-slots) form

```lisp

(let ((ip (make-instance 'something)))
  (with-slots (name) ip
    (setf name 'elf))
  (something-name ip))
```



