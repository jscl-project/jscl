/* This file, unlike the rest of the project is distributed under a permissive
 * license, as it will be included in the generated code. */

/*
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

// This file is prepended to the result of compile jscl.lisp, and
// contain runtime code that jscl assumes to exist.

var t;
var nil;

var jscl = {};

if (typeof module !== 'undefined')
    module.exports = jscl;
else
    window.jscl = jscl;


var internals = jscl.internals = {};

internals.globalEval = function(code){
    var geval = eval;             // Just an indirect eval
    var fn = geval('(function(values, internals){ "use strict"; ' + code + '; })');
    return fn(internals.mv, internals);
};

internals.pv = function(x) {
    return x==undefined? nil: x;
};

internals.mv = function(){
    var r = [].slice.call(arguments);
    r['multiple-value'] = true;
    return r;
};

internals.forcemv = function(x) {
    return typeof x == 'object' && 'multiple-value' in x? x: internals.mv(x);
};


//
// Workaround the problems with `new` for arbitrary number of
// arguments. Some primitive constructors (like Date) differ if they
// are called as a function or as a constructor.
//
//    https://github.com/jscl-project/jscl/pull/242#issuecomment-238923579
//
// Note that primitive constructors, if accessed with oget (e.g:
// #j:Date) will be converted into a Lisp function. We track the
// original function in the jscl_original property as we can't wrap
// the primitive constructor in a Lisp function or it will not work.
internals.newInstance = function(values, ct){
    var args = Array.prototype.slice.call(arguments);
    var newCt = ct.bind.apply(ct.jscl_original || ct, args.slice(1));
    return new newCt();
};


// NOTE: Define VALUES to be MV for toplevel forms. It is because
// `eval' compiles the forms and execute the Javascript code at
// toplevel with `js-eval', so it is necessary to return multiple
// values from the eval function.
var values = internals.mv;

internals.checkArgsAtLeast = function(args, n){
    if (args < n) throw new Error('too few arguments; needed at least ' + n + ' but got only ' + args);
};

internals.checkArgsAtMost = function(args, n){
    if (args > n) throw new Error ('too many arguments; needed at most ' + n + ' but got ' + args);
};

internals.checkArgs = function(args, n){
    internals.checkArgsAtLeast(args, n);
    internals.checkArgsAtMost(args, n);
};


// Lists

internals.Cons = function (car, cdr) {
    this.car = car;
    this.cdr = cdr;
};

internals.car = function(x){
    if (x === nil)
        return nil;
    else if (x instanceof internals.Cons)
        return x.car;
    else {
        console.log(x);
        throw new Error('CAR called on non-list argument ' + x);
    }
};

internals.cdr = function(x){
    if (x === nil)
        return nil;
    else if (x instanceof internals.Cons)
        return x.cdr;
    else
        throw new Error('CDR called on non-list argument ' + x);
};

// Improper list constructor (like LIST*)
internals.QIList = function(){
    if (arguments.length == 1)
        return arguments[0];
    else {
        var i = arguments.length-1;
        var r = arguments[i--];
        for (; i>=0; i--){
            r = new internals.Cons(arguments[i], r);
        }
        return r;
    }
};




// Arithmetic

internals.handled_division = function (x, y) {
    if (y == 0) throw new Error("Division (of " + x + ") by zero");
    return x/y;
};


// Chars and Strings


// Return a new Array of strings, each either length-1, or length-2 (a UTF-16 surrogate pair).
function codepoints (string) {
    return string.split(/(?![\udc00-\udfff])/);
};

// Create and return a lisp string for the Javascript string STRING.
internals.make_lisp_string = function (string){
    var array = codepoints(string);
    array.stringp = 1;
    return array;
};

internals.char_to_codepoint = function(ch) {
    if (ch.length == 1) {
        return ch.charCodeAt(0);
    } else {
        if (ch.length == 2 &&
            ch.charCodeAt(0) >= 0xD800 && ch.charCodeAt(0) < 0xDC00 &&
            ch.charCodeAt(1) >= 0xDC00 && ch.charCodeAt(0) < 0xDF00) {
            var xh = ch.charCodeAt(0) - 0xD800;
            var xl = ch.charCodeAt(1) - 0xDC00;
            return 0x10000 + (xh << 10) + (xl);
        } else {
            throw new Error ("Not a character: " + ch + " is a " + (typeof ch));
        }
    }
};

internals.char_from_codepoint = function(x) {
    if (x <= 0xFFFF) {
        return String.fromCharCode(x);
    } else {
        x -= 0x10000;
        var xh = x >> 10;
        var xl = x & 0x3FF;
        return String.fromCharCode(0xD800 + xh) + String.fromCharCode(0xDC00 + xl);
    }
};

// if a char (JS string) has the same number of codepoints after .toUpperCase(), return that, else the original.
internals.safe_char_upcase = function(x) {
    try {
        var xu = x.toUpperCase();
        if (codepoints(xu).length == 1) {
            return xu;
        } else {
            return x;
        }
    } catch (e) {
        throw new Error ("Probably not a character? : " + x + " (type=" + (typeof x) + ")");
    }
};
internals.safe_char_downcase = function(x) {
    var xl = x.toLowerCase();
    if (codepoints(xl).length == 1) {
        return xl;
    } else {
        return x;
    }
};

internals.xstring = function(x){
    return x.join('');
};


internals.lisp_to_js = function (x) {
    if (typeof x == 'object' && 'length' in x && x.stringp == 1)
        return internals.xstring(x);
    else if (x === t)
        return true;
    else if (x === nil)
        return false;
    else if (typeof x == 'function'){
        // Trampoline calling the Lisp function
        return (function(){
            var args = Array.prototype.slice.call(arguments);
            for (var i in args)
                args[i] = internals.js_to_lisp(args[i]);
            return internals.lisp_to_js(x.apply(this, [internals.pv].concat(args)));
        });
    }
    else return x;
};

internals.js_to_lisp = function (x) {
    if (typeof x == 'string')
        return internals.make_lisp_string(x);
    else if (x === true)
        return t;
    else if (x === false)
        return nil;
    else if (typeof x == 'function'){
        // Trampoline calling the JS function
    var trampoline = function(values){
            var args = Array.prototype.slice.call(arguments, 1);
            for (var i in args)
                args[i] = internals.lisp_to_js(args[i]);
            return values(internals.js_to_lisp(x.apply(this, args)));
        };
        trampoline.jscl_original = x;
        return trampoline;
    } else
        return x;
};


// Non-local exits

internals.BlockNLX = function (id, values, name){
    this.id = id;
    this.values = values;
    this.name = name;
};

internals.CatchNLX = function (id, values){
    this.id = id;
    this.values = values;
};

internals.TagNLX = function (id, label){
    this.id = id;
    this.label = label;
};

internals.isNLX = function(x){
    var i = internals;
    return x instanceof i.BlockNLX
        ||   x instanceof i.CatchNLX
        ||   x instanceof i.TagNLX;
};


// Packages & Symbols

var packages = jscl.packages = {};

packages.JSCL = {
    packageName: 'JSCL',
    symbols: {},
    exports: {},
    use: nil
};

packages.CL = {
    packageName: 'CL',
    symbols: {},
    exports: {},
    use: nil
};

packages['COMMON-LISP'] = packages.CL;

packages.KEYWORD = {
    packageName: 'KEYWORD',
    symbols: {},
    exports: {},
    use: nil
};

jscl.CL = packages.CL.exports;

function unboundFunction () {
    throw new Error("Function '" + this.name + "' undefined");
}

internals.Symbol = function(name, package_name){
    this.name = name;
    this.package = package_name;
    this.value = undefined;
    this.fvalue = unboundFunction;
};

internals.symbolValue = function (symbol){
    if (symbol === undefined) {
        throw new Error("Trying to take the value of «undefined» as a symbol");
    }
    var value = symbol.value;
    if (value === undefined){
        throw new Error("Variable " + ((symbol !== undefined) ? symbol.name || "(unnamed symbol)" : "(undefined symbol)") + " is unbound.");
    } else {
        return value;
    }
};

internals.symbolFunction = function (symbol){
    var fn = symbol.fvalue;
    if (fn === unboundFunction)
        symbol.fvalue();
    return fn;
};


internals.bindSpecialBindings = function (symbols, values, callback){
    try {
        symbols.forEach(function(s, i){
            s.stack = s.stack || [];
            s.stack.push(s.value);
            s.value = values[i];
        });
        return callback();
    } finally {
        symbols.forEach(function(s, i){
            s.value = s.stack.pop();
        });
    }
};

internals.intern = function (name, package_name){
    package_name = package_name || "JSCL";
    var lisp_package = packages[package_name];
    if (!lisp_package)
        throw new Error ("No package " + package_name);

    var symbol = lisp_package.symbols[name];
    if (!symbol)
        symbol = lisp_package.symbols[name] = new internals.Symbol(name, lisp_package);

    // Auto-export symbol if it is the KEYWORD package.
    if (lisp_package === packages.KEYWORD)
        lisp_package.exports[name] = symbol;

    return symbol;
};

/* execute all script tags with type of x-common-lisp */
var eval_in_lisp;               // set in FFI.lisp
if (typeof window !== "undefined"){
    window.onload = (function () {
        var scripts = document.scripts;
        for (var i = 0; i < scripts.length; ++i) {
            var script = scripts[i];
            /* TODO: what about errors? */
            if (script.type == "text/x-common-lisp") {
                eval_in_lisp(script.text);
            }
        }
    });
}

// Node Readline
if (typeof module !== 'undefined' &&
    typeof global !== 'undefined' &&
    typeof phantom === 'undefined')
    global.readline = require('readline');
