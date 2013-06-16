#!/bin/sh

sbcl --load 'jscl.lisp' --eval '(jscl:bootstrap)' --eval '(quit)'
