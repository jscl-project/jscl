// This file is prepended to the result of compile jscl.lisp, and
// contain runtime code that jscl assumes to exist.

var window = this;
var nil;

globalEval = eval;  // Just an indirect eval

function pv (x) { return x==undefined? nil: x; }

function mv(){
    var r = [].slice.call(arguments);
    r['multiple-value'] = true;
    return r;
}

function forcemv (x) {
    return typeof x == 'object' && 'multiple-value' in x? x: mv(x);
}

// NOTE: Define VALUES to be MV for toplevel forms. It is because
// `eval' compiles the forms and execute the Javascript code at
// toplevel with `js-eval', so it is necessary to return multiple
// values from the eval function.
var values = mv;

function checkArgsAtLeast(args, n){
    if (args < n) throw 'too few arguments';
}

function checkArgsAtMost(args, n){
    if (args > n) throw 'too many arguments';
}

function checkArgs(args, n){
    checkArgsAtLeast(args, n);
    checkArgsAtMost(args, n);
}

// Improper list constructor (like LIST*)
function QIList(){
    if (arguments.length == 1)
        return arguments[0];
    else {
        var i = arguments.length-1;
        var r = arguments[i--];
        for (; i>=0; i--){
            r = {car: arguments[i], cdr: r};
        }
        return r;
    }
}


// Create and return a lisp string for the Javascript string STRING.
function make_lisp_string (string){
    var array = string.split("");
    array.type = 'character'
    return array;
}

function xstring(x){ return x.join(''); }


function Symbol(name, package_name){
    this.name = name;
    if (package_name)
        this['package'] = package_name;
}

function lisp_to_js (x) {
    if (typeof x == 'object' && 'length' in x && x.type == 'character')
        return xstring(x);
    else if (typeof x == 'function'){
        // Trampoline calling the Lisp function
        return (function(){
            var args = Array.prototype.slice.call(arguments);
            for (var i in args)
                args[i] = js_to_lisp(args[i]);
            return lisp_to_js(x.apply(this, [pv, arguments.length].concat(args)));
        });
    }
    else return x;
}

function js_to_lisp (x) {
    if (typeof x == 'string')
        return make_lisp_string(x);
    else if (typeof x == 'function'){
        // Trampoline calling the JS function
        return (function(values, nargs){
            var args = Array.prototype.slice.call(arguments, 2);
            for (var i in args)
                args[i] = lisp_to_js(args[i]);
            return values(js_to_lisp(x.apply(this, args)));
        });
    } else return x;
}
