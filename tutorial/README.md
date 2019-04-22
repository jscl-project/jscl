### Example build with Roswell Script
1. Git clone jscl source code
```
$ git clone https://github.com/jscl-project/jscl.git
```

2. Build jscl.js
```
$ ros run
* (load "jscl/jscl.lisp")
* (jscl:bootstrap)
```

3. Create Roswell Script. (./jscl.ros)
```
ros init jscl
```
```lisp:jscl.ros
#!/bin/sh
#|-*- mode:lisp -*-|#
#|
exec ros -Q -- $0 "$@"
|#
(progn
  (ros:ensure-asdf)
  (ql:quickload '(jscl) :silent t)
  )

(defpackage :ros.script.jscl.3764920099
  (:use :cl))
(in-package :ros.script.jscl.3764920099)

(load (merge-pathnames "./jscl.lisp" (asdf:system-source-directory :jscl)))
(jscl:bootstrap)

(defun main (&rest argv)
  (jscl::compile-application  (list (car argv)) (cadr argv)))

;;; vim: set ft=lisp lisp:
```

4. Create lisp file (./main.lisp)
```lisp:main.lisp
(in-package :cl-user)
(defpackage :demo.package
  (:use :cl)
  )
(in-package :demo.package)

(defun fizz-buzz (n)
  (cond
    ((= (mod n 15) 0) "fizz-buzz")
    ((= (mod n 5) 0) "buzz")
    ((= (mod n 3) 0) "fizz")
    (t n)))

(loop for i from 1 to 30
      do
      (print (fizz-buzz i)))
```

5. Compile lisp file to js file
```sh
$ ros ./jscl.ros main.lisp main.js
```

6. Create ./index.html
```html:index.html
<!doctype html>
<html>
  <body>
    <script src="jscl/jscl.js" type="text/javascript"></script>
    <script src="main.js" type="text/javascript"></script>
  </body>
</html>
```

7. Look at your index.html
```
# ex)
php -S localhost:8080
# look at localhost:8080/index.html
```




