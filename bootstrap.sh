#!/bin/sh
set -e

BASE=$(dirname "$0")
cd "$BASE"

# Stage 0: SBCL compiles the cross-compiler
echo "=== Stage 0: SBCL compiles cross-compiler ===" >&2
./make.sh --sbcl -o out/

# Stage 1: Cross-compiler compiles JSCL
echo "=== Stage 1: Cross-compiler compiles JSCL ===" >&2
./make.sh --jscl=out/jscl-node.js -o dist/

# Stage 2: Build REPLs using JSCL
echo "=== Stage 2: Building REPLs ===" >&2
tmpfile=$(mktemp /tmp/jscl-bootstrap.XXXXXX.lisp)
cat > "$tmpfile" << 'EOF'
(load "jscl.lisp")
(jscl-xc:build-web-repl "dist/")
(jscl-xc:build-web-worker-repl "dist/")
(jscl-xc:build-deno-repl "dist/")
EOF
node --stack-size=16384 dist/jscl-node.js "$tmpfile"
rm -f "$tmpfile"

echo "=== Build complete ===" >&2
