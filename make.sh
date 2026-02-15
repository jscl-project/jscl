#!/bin/sh
set -e

BASE=$(dirname "$0")
cd "$BASE"

# Defaults
HOST=sbcl
JSCL_PATH=""
OUTPUT_DIR="dist/"
VERBOSE=nil

usage() {
    cat <<EOF
Usage: $0 [OPTIONS]

Build JSCL (jscl.js, REPLs, and test suite).

Options:
  --sbcl            Use SBCL as host compiler (default)
  --jscl=<path>     Use JSCL binary as host compiler
  -o <dir>          Output directory (default: dist/)
  -v                Verbose output
  --help            Show this help message
EOF
}

while [ $# -gt 0 ]; do
    case "$1" in
        --sbcl)
            HOST=sbcl
            shift
            ;;
        --jscl=*)
            HOST=jscl
            JSCL_PATH="${1#--jscl=}"
            shift
            ;;
        -o)
            OUTPUT_DIR="$2"
            shift 2
            ;;
        -v)
            VERBOSE=t
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

# Unix timestamp of the commit we are building
export SOURCE_DATE_EPOCH=$(git show -s --format=%ct HEAD)

mkdir -p "$OUTPUT_DIR"

tmpfile=$(mktemp /tmp/jscl-make.XXXXXX.lisp)
cat > "$tmpfile" << EOF
(load "jscl.lisp")
(jscl-xc:bootstrap "$OUTPUT_DIR" "jscl" :verbose $VERBOSE)
(jscl-xc:build-node-repl "$OUTPUT_DIR")
EOF

case "$HOST" in
    sbcl)
        sbcl --non-interactive --load "$tmpfile"
        ;;
    jscl)
        node --stack-size=65536 "$JSCL_PATH" "$tmpfile"
        ;;
esac
rm -f "$tmpfile"

# Build web and deno REPLs using the bootstrapped JSCL
tmpfile=$(mktemp /tmp/jscl-repl-build.XXXXXX.lisp)
cat > "$tmpfile" << EOF
(load "web/build.lisp")
(build-web-repl "$OUTPUT_DIR")
(load "deno/build.lisp")
(build-deno-repl "$OUTPUT_DIR")
(load "worker/build.lisp")
(build-worker-repl "$OUTPUT_DIR")
EOF
node --stack-size=65536 "${OUTPUT_DIR}jscl-node.js" "$tmpfile"
rm -f "$tmpfile"

echo "Built: ${OUTPUT_DIR}jscl.js" >&2
echo "Built: ${OUTPUT_DIR}jscl-node.js" >&2
echo "Built: ${OUTPUT_DIR}jscl-web.js" >&2
echo "Built: ${OUTPUT_DIR}jscl-deno.js" >&2
echo "Built: ${OUTPUT_DIR}jscl-worker.js" >&2
