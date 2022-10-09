# JSCL 

[![Pipeline CI](https://github.com/jscl-project/jscl/actions/workflows/main.yml/badge.svg)](https://github.com/jscl-project/jscl/actions/workflows/main.yml)

JSCL is a Common Lisp to JavaScript compiler, which is bootstrapped
from Common Lisp and executed from the browser.

<p align="center">
  <a href="https://jscl-project.github.io/">
    <img src="logo/logo-128.png" alt="JSCL" title="JSCL" height="128" />
  </a>
</p>


## Getting Started

You can try a demo online [here](https://jscl-project.github.io/), or
you can install the JSCL npm package:

    npm install -g jscl
    
to run `jscl-repl` in NodeJS.


## Build

If you want to hack JSCL, you will have to download the repository

    git clone https://github.com/jscl-project/jscl.git

*load* `jscl.lisp` in your Lisp, and call the bootstrap function to
compile the implementation itself:

    (jscl:bootstrap)

It will generate a `jscl.js` file in the top of the source tree. Now
you can open `jscl.html` in your browser and use it.


## Status

JSCL is and will be a subset of Common Lisp. Of course it is far from
complete, but it supports partially most common special operators,
functions and macros. In particular:

- Multiple values

- Explicit control transfers
  [tagbody](http://www.lispworks.com/documentation/HyperSpec/Body/s_tagbod.htm)
  and [go](http://www.lispworks.com/documentation/HyperSpec/Body/s_go.htm)

- Static and dynamic non local exit [catch](http://www.lispworks.com/documentation/HyperSpec/Body/s_catch.htm), 
  [throw](http://www.lispworks.com/documentation/HyperSpec/Body/s_throw.htm); 
  [block](http://www.lispworks.com/documentation/HyperSpec/Body/s_block.htm),
  [return-from](http://www.lispworks.com/documentation/HyperSpec/Body/s_ret_fr.htm).

- Lexical and special variables. However, declare expressions are
  missing, but you can *proclaim* special variables.

- Optional and keyword arguments

- SETF places

- Packages

- The `LOOP` macro

- CLOS

- Others

The compiler is very verbose, some simple optimizations or
*minification* could help to deal with it.

Most of the above features are incomplete. The major features that are still missing are:

- The `format` function

*Feel free to hack it yourself*
