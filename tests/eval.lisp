(print "<<<")
(print (find 'a '((b) (c) (a)) :key #'car))
(print ">>>")

(test (= (eval '(+ 1 2)) 3))
