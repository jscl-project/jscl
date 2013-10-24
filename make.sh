#!/bin/sh

BASE=`dirname $0`

sbcl --load "$BASE/jscl.lisp" --eval '(jscl:bootstrap)' --eval '(quit)'
