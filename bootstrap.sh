#!/bin/sh
set -e

BASE=$(dirname "$0")
cd "$BASE"

echo "=== Stage 0: SBCL compiles cross-compiler ===" >&2
./make.sh --sbcl -o out/

echo "=== Stage 1: Cross-compiler compiles JSCL ===" >&2
./make.sh --jscl=out/jscl-node.js -o dist/

echo "=== Build complete ===" >&2
