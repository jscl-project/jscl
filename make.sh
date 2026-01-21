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

# Create dist directory
mkdir -p "$BASE/dist"

sbcl --load "$BASE/jscl.lisp" --eval "(jscl:bootstrap $VERBOSE)" --eval '(quit)'

# Copy HTML and static assets to dist
cp "$BASE/web/index.html" "$BASE/dist/"
cp "$BASE/web/style.css" "$BASE/dist/"
cp "$BASE/node_modules/jquery/dist/jquery.min.js" "$BASE/dist/jquery.js"
cp "$BASE/node_modules/jq-console/lib/jqconsole.js" "$BASE/dist/"
cp "$BASE/worker/index.html" "$BASE/dist/worker.html"
cp "$BASE/worker/main.js" "$BASE/worker/service-worker.js" "$BASE/dist/"
cp "$BASE/tests.html" "$BASE/dist/"
