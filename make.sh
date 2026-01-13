#!/bin/sh

BASE=`dirname $0`

while getopts :v OPT; do
    case $OPT in
        v|+v)
            VERBOSE=t
            ;;
        *)
            echo "usage: `basename $0` [+-v} [--] ARGS..."
            exit 2
    esac
done
shift `expr $OPTIND - 1`
OPTIND=1

# Unix timestamp of the commit we are building
export SOURCE_DATE_EPOCH=$(git show -s --format=%ct HEAD)

sbcl --load "$BASE/jscl.lisp" --eval "(jscl:bootstrap $VERBOSE)" --eval '(quit)'

echo "Building jscl-node.js..."
node "$BASE/jscl.js" -e '(jscl:compile-application "node/node.lisp" "jscl-node.js" :shebang t)'

echo "Building jscl-web.js..."
node "$BASE/jscl.js" -e '(jscl:compile-application "web/repl.lisp" "jscl-web.js")'

echo "Building jscl-worker.js..."
node "$BASE/jscl.js" -e '(jscl:compile-application "worker/worker.lisp" "jscl-worker.js")'
