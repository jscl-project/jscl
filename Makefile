all:	jscl.js

clean:
	rm -f jscl.js tests.js repl-node.js repl-web.js
	find . -name \*.fasl -exec rm -f {} \;

jscl.js:	$(shell find . -name \*.lisp)
	./make.sh

test:	jscl.js tests.js
	./run-tests.sh
