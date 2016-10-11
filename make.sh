#!/bin/sh

BASE=`dirname $0`

while getopts :v OPT; do
    case $OPT in
        v|+v)
            VERBOSE=t
            ;;
        *)
            echo "usage: `basename $0` [+v]"
            exit 2
    esac
done

exec sbcl --non-interactive --load "$BASE/jscl.lisp" --eval "(jscl:bootstrap $VERBOSE)"
