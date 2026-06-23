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

# REPL-level tests (tests/repl/*.lisp). Each file is fed to a fresh REPL
# on stdin so its forms run at the outermost eval level -- the only place
# bugs like the issue #616 *FN-INFO* crash on a toplevel SETF reproduce.
# Assertions are embedded in each file as comment directives checked
# against the session output:
#   ;;; expect: PATTERN        output must contain PATTERN
#   ;;; expect-not: PATTERN    output must NOT contain PATTERN
#   ;;; expect-once: PATTERN   output must contain PATTERN on exactly one line
run_repl_tests() {
    local dir="tests/repl"
    [ -d "$dir" ] || return 0
    local fail=0
    echo "Running REPL tests..."
    for f in "$dir"/*.lisp; do
        [ -e "$f" ] || continue
        local out ok=1
        out="$($RUNJS "$JSCL_PATH" < "$f" 2>&1)"
        while IFS= read -r line; do
            local pat="${line#*: }" n
            n="$(grep -cF -- "$pat" <<<"$out" || true)"
            case "$line" in
                ';;; expect-not:'*)  [ "$n" -eq 0 ] || { ok=0; echo "    unexpected:     [$pat]"; } ;;
                ';;; expect-once:'*) [ "$n" -eq 1 ] || { ok=0; echo "    expected once:  [$pat] (found $n)"; } ;;
                ';;; expect:'*)       [ "$n" -ge 1 ] || { ok=0; echo "    missing:        [$pat]"; } ;;
            esac
        done < <(grep -E '^;;; expect(-not|-once)?:' "$f" || true)
        if [ "$ok" = 1 ]; then
            echo "  ok   - $f"
        else
            echo "  FAIL - $f"; fail=1
        fi
    done
    return $fail
}

case "$MODE" in
    sbcl)
        echo "Running tests in SBCL..."
        sbcl --noinform --non-interactive \
             --load jscl.lisp \
             --load tests.lisp \
             --eval '(jscl-tests:run-tests)'
        ;;
    jscl)
        echo "Running tests in JSCL ($JSCL_PATH)..."
        tmpfile=$(mktemp /tmp/jscl-tests.XXXXXX.lisp)
        echo '(load "tests.lisp") (jscl-tests:run-tests)' > "$tmpfile"
        status=0
        $RUNJS "$JSCL_PATH" "$tmpfile" || status=$?
        rm -f "$tmpfile"
        run_repl_tests || status=1
        exit $status
        ;;
esac
