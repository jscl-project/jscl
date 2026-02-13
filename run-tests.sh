#!/usr/bin/env bash
set -e

BASE="$(dirname "$0")"
cd "$BASE"

JSCL_PATH="dist/jscl-node.js"
RUNJS=${RUNJS:-node}

usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Run JSCL test suite.

Options:
  --sbcl            Run tests in SBCL
  --jscl=<path>     Path to JSCL binary (default: dist/jscl-node.js)
  --help            Show this help message

Environment variables:
  RUNJS     JavaScript runtime to use (default: node)
EOF
}

while [ $# -gt 0 ]; do
    case "$1" in
        --sbcl)
            MODE=sbcl
            shift
            ;;
        --jscl=*)
            MODE=jscl
            JSCL_PATH="${1#--jscl=}"
            shift
            ;;
        --help|-h)
            usage
            exit 0
            ;;
        *)
            echo "Unknown option: $1" >&2
            usage >&2
            exit 1
            ;;
    esac
done

MODE=${MODE:-jscl}

case "$MODE" in
    sbcl)
        echo "Running tests in SBCL..."
        sbcl --noinform --non-interactive \
             --load jscl.lisp \
             --load tests.lisp \
             --eval '(jscl::run-tests)'
        ;;
    jscl)
        echo "Running tests in JSCL ($JSCL_PATH)..."
        tmpfile=$(mktemp /tmp/jscl-tests.XXXXXX.lisp)
        echo '(in-package :jscl) (load "tests.lisp") (run-tests)' > "$tmpfile"
        $RUNJS "$JSCL_PATH" "$tmpfile"
        status=$?
        rm -f "$tmpfile"
        exit $status
        ;;
esac
